import DomEvent from "./domevent.js";

class AddEvent extends DomEvent
{
	_dom = null;
	_QSID = null;
	_targetQSID = null;

	_defaultCSS = {
		"width":"100px",
		"height":"100px"
	};

	constructor(opts, dom)
	{
		super();

		this._QSID = 0;// :TODOOOOOO GENERATE GUID!
		this._dom = dom;
		this._targetQSID = this._dom.getElementQSID(opts.target);
	}

	performEventAction()
	{
		this._dom.addElement({
			"QSID": this._QSID,
			"parentQSID": this._targetQSID,
			"position": 0,
			"tag": "div",
			"css": this._defaultCSS
		});
	}

	revertEventAction()
	{
		this._dom.removeElement(this._QSID);
	}
}

export default AddEvent;