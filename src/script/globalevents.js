import EventHandler from "./lib/eventhandler.js";
import { Logging } from "./constants.js";

class GlobalEventHandler extends EventHandler
{
	constructor()
	{
		super();
		this.setupLogging();
	}

	setupLogging()
	{
		if(Logging.Verbose)
		{
			this.on('*', function(evt, eventName)
			{
				console.log(eventName, evt);
			});
		}
	}
}

export default new GlobalEventHandler();