import MenuBuilder from "./script/lib/menubuilder.js";
import DialogManager from "./script/dialogmanager.js";
import ActionManager from "./script/actionmanager.js";
import GlobalEvents from "./script/globalevents.js";
import EventQueue from "./script/eventqueue.js";
import PrimaryDOM from "./script/primarydom.js";
import { MenuDefinitions } from "./script/constants.js";

class Main
{
	globalEvents = null;
	DOM = null;
	menuBuilder = null;
	eventQueue = null;
	dialogManager = null;
	actionManager = null;

	constructor()
	{
		this.globalEvents = GlobalEvents;
		this.DOM = PrimaryDOM;
		this.DOM.setup({ "rootElement": document.getElementById('qs-drawing-board') });
		this.menuBuilder = new MenuBuilder({ "definitions":MenuDefinitions, "container":"body", "events":this.globalEvents });
		this.eventQueue = new EventQueue({});
		this.dialogManager = new DialogManager({ "container":"body" });
		this.actionManager = new ActionManager({ });
	}
}

window.addEventListener("DOMContentLoaded", () => window.app = new Main(), false);