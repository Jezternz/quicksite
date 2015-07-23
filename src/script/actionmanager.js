import AddEvent from "./events/addevent.js";

class ActionManager
{

	_events = null;
	_dom = null;

	_eventMethodTranslation = {
		"menu.dom.add": AddEvent
	}

	constructor(opts = {})
	{
		this._events = opts.events;
		this._dom = opts.dom;
		this._events.on('menuselect', this.handleSelectEvent.bind(this));
	}

	handleSelectEvent(evt)
	{
		if(typeof this._eventMethodTranslation[evt.buttonid] !== "undefined")
		{
			var domEvent = new this._eventMethodTranslation[evt.buttonid](evt, dom);
			this._events.trigger('domevent', domEvent);
		}
	}
}

export default ActionManager;