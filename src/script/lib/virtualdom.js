import Utils from "./utils.js";
import DrawingBoard from "./drawingboard.js";

class VirtualDOM
{
	guids = new Set();
	dom = 
	{
		rootQSID: null,
		elementLookup: {},
		elements: {}
	}

	constructor(opts)
	{
		this.addElement({
			"position": 0,
			"tag": opts.rootElement.tagName,
			"CSS": {}
		});
	}

	generateGuid()
	{
		var guid = Utils.guid();
		while(this.guids.has(guid))guid = Utils.guid();
		this.guidSet.add(guid);
		return guid;
	}

	getElementQSID(domElement)
	{

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

		this.elements[opts.qSID] = opts;
		//this.elementLookup[opts.element] = opts.qSID; THIS WILL HAVE TO BE DONE THROUGH DRAWING BOARD 

		return opts.qSID;
	}

	updateElement(opts = { "tag":"", "css":{}, "attr":{} })
	{

	}

	removeElement()
	{

	}

}
export default VirtualDOM;