class MenuBuilder
{
	constructor(definition, opts = {}) 
	{
		this._opts = opts;
		this._events = opts.events;
		this._$target = null;
		this._$container = null;
		this._setupMenu(definition);
		this._setupEvents();
	}

	_setupMenu(definition)
	{
		this._$container = $(
			`<div class="qs-engine-dd-container" tabindex="0">
				<div class="qs-engine-dd-inner">
					<div class="qs-engine-dd-title">
						<span class="qs-engine-dd-title-text"></span>
						<span class="qs-engine-dd-title-icon qs-icon qs-icon-pencil"></span>
					</div>
				</div>
			</div>`).appendTo(this._opts.container);
		this._$container.find('.qs-engine-dd-title .qs-engine-dd-title-text').text('Block 1');     
		this._processDefinition(this._$container.find('.qs-engine-dd-inner'), definition);
	}

	_processDefinition($parent, def)
	{
          if(Array.isArray(def))
          {
              def.forEach(this._processDefinition.bind(this, $parent));
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
                  this._processDefinition($childParent, def.items);
              }
          }
	}

	_setupEvents()
	{
		$(this._opts.container).on('contextmenu', (evt) =>
		{
			if($(evt.target).closest('.qs-engine-dd-container').size()===0)
			{
				this._target = evt.target;
				$('.qs-engine-dd-container').focus().css({ 'left':evt.clientX+'px', 'top':evt.clientY+'px'});
				evt.preventDefault();
			}
		});
		this._$container.on('click', (evt) =>
		{
			var $qsid = $(evt.target).closest('[data-qs-id]');
			if($qsid.size() > 0)
			{
				$('.qs-engine-dd-container').blur();
				if(this._events)
				{
					this._events.trigger('menuselect', { "buttonid": 'menu.'+$qsid.data('qs-id'), "target": this._target });
				}
			}
		});

	}

};

export default MenuBuilder;