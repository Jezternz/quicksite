import { MenuDefinitions, Logging } from "./script/constants.js";
import EventHandler from "./script/eventhandler.js";
import MenuBuilder from "./script/menubuilder.js";
import DialogManager from "./script/dialogmanager.js";
import ActionManager from "./script/actionmanager.js";
import EventQueue from "./script/eventqueue.js";
import VirtualDOM from "./script/virtualdom.js";
import DrawingBoard from "./script/drawingboard.js";

window.onload = function()
{
	var app = {};

	app.globalEventChannel = new EventHandler();

	app.menuBuilder = new MenuBuilder(MenuDefinitions, { "container":"body", "events": app.globalEventChannel });
	app.eventQueue = new EventQueue({ "events": app.globalEventChannel });

	app.virtualDOM = new VirtualDOM({ "events": app.globalEventChannel });

	app.drawingBoard = new DrawingBoard({ "events": app.globalEventChannel });

	app.dialogManager = new DialogManager({ "container":"body", "events": app.globalEventChannel });
	app.actionManager = new ActionManager({ "events": app.globalEventChannel, "dom": app.virtualDOM });

	if(Logging.Verbose)
	{
		app.globalEventChannel.on('*', function(evt, eventName)
		{
			console.log(eventName, evt)
		});
	}
};