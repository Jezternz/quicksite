import Utils from "./utils.js";

class DrawingBoard
{

	rootElement = null;
	idList = [];
	elementIdLookup = {};
	idElementLookup = {};

	constructor(opts)
	{
		this.rootElement = opts.rootElement;
	}

	createUniqueId()
	{
		var guid = Utils.guid();
		while(this.idList.indexOf(guid) !== -1)guid = Utils.guid();
		this.idList.push(guid);
		return guid;
	}

	findElementsId(domElement)
	{
		return this.elementIdLookup[domElement] || null;
	}

	addElement(id, opts)
	{
		var parentEl = !opts.parent ? this.rootElement : this.idElementLookup[opts.parent];
		var el = document.createElement(opts.tag || "div");

		if(opts.attr)this.setAttributes(el, opts.attr);
		if(opts.css)this.setStyles(el, opts.css);

		if(parentEl.children.length === 0) parentEl.appendChild(el);
		else parentEl.insertBefore(el, parentEl.children[opts.position || 0]);

		this.elementIdLookup[el] = id;
		this.idElementLookup[id] = el;
	}

	updateElement(id, opts)
	{

	}

	removeElement(id)
	{

	}

	setStyles(el, cssProperties)
	{
		$(el).css(cssProperties);
	}

	setAttributes(el, attrProperties)
	{
		$(el).attr(attrProperties);
	}

}
export default DrawingBoard;