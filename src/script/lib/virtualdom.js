import DrawingBoard from "./drawingboard.js";
import EventHandler from "./eventhandler.js";

class VirtualDOM extends EventHandler
{
	drawing = null;
	dom = 
	{
		rootQSID: null,
		elementLookup: {},
		elements: {}
	}

	constructor(opts)
	{
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
		});
	}

	generateGuid()
	{
		return this.drawing.createUniqueId();
	}

	getElementQSID(domElement)
	{
		return this.drawing.findElementsId(domElement) || null;
	}

	addElement(opts = { "qSID": null, "parent": null, "position": 0, "tag": "", "css": {}, "attr": {} })
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

		this.dom.elements[opts.qSID] = opts;
		this.drawing.addElement(opts.qSID, opts);

		return opts.qSID;
	}

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
	}

}
export default VirtualDOM;