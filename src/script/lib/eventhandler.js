class EventHandler
{
	IS_EVENT_HANDLER = true;
	listeners = {};

	constructor()
	{
		
	}

	on(eventType, eventCallback)
	{
		var listeners = this.listeners[eventType];
		if(!Array.isArray(listeners))
		{
			listeners = this.listeners[eventType] = [];
		}
		this.listeners[eventType].push(eventCallback);
		return this;
	}

	off(eventType, eventCallback)
	{
		var listeners = this.listeners[eventType];
		if(Array.isArray(listeners))
		{
			var indx;
			while((indx = listeners.indexOf(eventCallback)) !== -1)
			{
				listeners.splice(indx, 1);
			}
		}
		return this;
	}

	trigger(eventType, eventInformation)
	{
		if(Array.isArray(this.listeners[eventType]))
		{
			this.listeners[eventType].forEach((fn) => fn.call(null, eventInformation, eventType));
		}
		if(Array.isArray(this.listeners['*']))
		{
			this.listeners['*'].forEach((fn) => fn.call(null, eventInformation, eventType));
		}
		return this;
	}

	_passEventOn(eventInformation, eventType)
	{
		this.trigger(eventType, eventInformation);
	}

	cleanup()
	{
		Object.keys(this.listeners).forEach((evtName) => {
			delete this.listeners[evtName];
		});
		this.listeners = {};
		return this;
	}
}

export default EventHandler;