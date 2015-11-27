import DomEvent from "./domevent.js";

class AddEvent extends DomEvent
{
	dom = null;
	qSID = null;
	parent = null;

	defaultCSS = 
	{
<<<<<<< HEAD
		"width":"100px",
		"height":"100px"
=======
		"width":"10%",
		"height":"30%",
		"background":"#EDEDFF",
		"border": "1px solid gray",
		"box-sizing": "border-box",
		"display": "inline-block"
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
	};

	constructor(evtOpts, dom)
	{
		super();

		this.dom = dom;
		this.qSID = this.dom.generateGuid();
		this.parent = evtOpts.target;
	}

	performEventAction()
	{
		this.dom.addElement({
			"qSID": this.qSID,
			"parent": this.parent,
			"position": 0,
			"tag": "div",
			"css": this.defaultCSS
		});
	}

	revertEventAction()
	{
		this.dom.removeElement(this.qSID);
	}

	destroy()
	{
		this.dom = null;
		this.qSID = null;
		this.parent = null;
	}
}

export default AddEvent;