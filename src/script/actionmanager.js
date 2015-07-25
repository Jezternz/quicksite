import Events from "./globalevents.js";
import AddEvent from "./events/addevent.js";
import PrimaryDOM from "./primarydom.js";

class ActionManager
{

	eventMethodTranslation = 
	{
		"menu.dom.add": AddEvent
	}

	constructor()
	{
		Events.on('menuselect', ::this.handleSelectEvent);
	}

	handleSelectEvent(evt)
	{
		if(typeof this.eventMethodTranslation[evt.buttonid] !== "undefined")
		{
			var domEvent = new this.eventMethodTranslation[evt.buttonid](evt, PrimaryDOM);
			Events.trigger('domevent', domEvent);
		}
	}
}

export default ActionManager;