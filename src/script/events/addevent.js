import DomEvent from "./domevent.js";

class AddEvent extends DomEvent
{
	dom = null;
	qSID = null;
	parent = null;

	defaultCSS = 
	{
		"width":"100px",
		"height":"100px"
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