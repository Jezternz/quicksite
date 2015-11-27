<<<<<<< HEAD
import Utils from "./utils.js";
import DrawingBoard from "./drawingboard.js";

class VirtualDOM
{
	guids = new Set();
=======
import DrawingBoard from "./drawingboard.js";
import EventHandler from "./eventhandler.js";

class VirtualDOM extends EventHandler
{
	drawing = null;
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
	dom = 
	{
		rootQSID: null,
		elementLookup: {},
		elements: {}
	}

	constructor(opts)
	{
<<<<<<< HEAD
		this.addElement({
			"position": 0,
			"tag": opts.rootElement.tagName,
			"CSS": {}
=======
		super();
		if(opts)this.setup(opts);
	}

	setup(opts)
	{
		this.drawing = new DrawingBoard({ "rootElement": opts.rootElement });
		this.addElement({
			"position": 0,
			"tag": "div",
			"css": { "width": "100%", "height":"100%", "background":"#fff" }
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
		});
	}

	generateGuid()
	{
<<<<<<< HEAD
		var guid = Utils.guid();
		while(this.guids.has(guid))guid = Utils.guid();
		this.guidSet.add(guid);
		return guid;
=======
		return this.drawing.createUniqueId();
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
	}

	getElementQSID(domElement)
	{
<<<<<<< HEAD

		// THIS WILL HAVE TO USE DRAWING BOARD

		return this.dom.elementLookup[domElement] || null;
	}

	addElement(opts = {
			"qSID": null,
			"parent": null,
			"position": 0,
			"tag": "",
			"css": {},
			"attr": {}
		})
=======
		return this.drawing.findElementsId(domElement) || null;
	}

	addElement(opts = { "qSID": null, "parent": null, "position": 0, "tag": "", "css": {}, "attr": {} })
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
	{
		if(!opts.qSID)
		{
			opts.qSID = this.generateGuid();
		}
		if(typeof opts.parent === "string")
		{
			opts.parent = this.getElementQSID(opts.parent);
		}
		if(typeof opts.parent !== "string")
		{
			if(!this.dom.rootQSID)
			{
				this.dom.rootQSID = opts.qSID;
				opts.parent = null;
			}
			else
			{
				opts.parent = this.dom.rootQSID;
			}
		}

<<<<<<< HEAD
		this.elements[opts.qSID] = opts;
		//this.elementLookup[opts.element] = opts.qSID; THIS WILL HAVE TO BE DONE THROUGH DRAWING BOARD 
=======
		this.dom.elements[opts.qSID] = opts;
		this.drawing.addElement(opts.qSID, opts);
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8

		return opts.qSID;
	}

<<<<<<< HEAD
	updateElement(opts = { "tag":"", "css":{}, "attr":{} })
	{

	}

	removeElement()
	{

=======
	updateElement(elementOrQSID, opts = { "tag":"", "css":{}, "attr":{} })
	{
		// TODO: Update virtualdom

		this.drawing.updateElement(elementOrQSID, opts);
	}

	removeElement(elementOrQSID)
	{
		if(typeof elementOrQSID !== "string")
		{
			elementOrQSID = this.getElementQSID(elementOrQSID);
		}

		//TODO: Remove from virtualdom

		this.drawing.removeElement(elementOrQSID);
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
	}

}
export default VirtualDOM;