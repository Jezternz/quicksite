class MenuBuilder
{
	opts = {};
	target = null;
	$container = null;

	constructor(opts) 
	{
		this.opts = opts;
		this.setupMenu(opts.definitions);
		this.setupEvents();
	}

	setupMenu(definition)
	{
		this.$container = $(
			`<div class="qs-engine-dd-container" tabindex="0">
				<div class="qs-engine-dd-inner">
					<div class="qs-engine-dd-title">
						<span class="qs-engine-dd-title-text"></span>
						<span class="qs-engine-dd-title-icon qs-icon qs-icon-pencil"></span>
					</div>
				</div>
			</div>`).appendTo(this.opts.container);
		this.$container.find('.qs-engine-dd-title .qs-engine-dd-title-text').text('Block 1');     
		this.processDefinition(this.$container.find('.qs-engine-dd-inner'), definition);
	}

	processDefinition($parent, def)
	{
          if(Array.isArray(def))
          {
              def.forEach(this.processDefinition.bind(this, $parent));
          }
          else if(typeof def === "object")
          {
              var $childParent = null, id = $parent.closest('[data-qs-id]').data('qs-id');
              id = id ? id+'.' : "";
              if(typeof def.groupid !== "undefined")
              {
                  $childParent = $('<div class="qs-engine-dd-group" data-qs-id="'+def.groupid+'"></div>').appendTo($parent);
              }
              else if(typeof def.itemid !== "undefined")
              {
                  var $item = $('<div class="qs-engine-dd-item" data-qs-id="'+id+def.itemid+'"><span class="qs-engine-dd-icon"></span></div>').appendTo($parent);
                  if(typeof def.icon !== "undefined")
                  {
                      $item.find('.qs-engine-dd-icon').addClass('qs-icon qs-icon-'+def.icon);
                  }
                  if(typeof def.display !== "undefined")
                  {
                      $item.append('<span>'+def.display+'</span>');
                  }
                  if(Array.isArray(def.items))
                  {
                      $childParent = $('<div class="qs-engine-dd-more"><div class="qs-engine-dd-expand">&gt;</div><div class="qs-engine-dd-group"></div></div>').appendTo($item).find('.qs-engine-dd-group');
                  }
              }
              if($childParent && Array.isArray(def.items))
              {
                  this.processDefinition($childParent, def.items);
              }
          }
	}

	setupEvents()
	{
		$(this.opts.container).on('contextmenu', (evt) =>
		{
			if($(evt.target).closest('.qs-engine-dd-container').size()===0)
			{
				this.target = evt.target;
				$('.qs-engine-dd-container').focus().css({ 'left':evt.clientX+'px', 'top':evt.clientY+'px'});
				evt.preventDefault();
			}
		});
		this.$container.on('click', (evt) =>
		{
			var $qsid = $(evt.target).closest('[data-qs-id]');
			if($qsid.size() > 0)
			{
				$('.qs-engine-dd-container').blur();
				if(this.opts.events)
				{
					this.opts.events.trigger('menuselect', { "buttonid": 'menu.'+$qsid.data('qs-id'), "target": this.target });
				}
			}
		});

	}

};

export default MenuBuilder;