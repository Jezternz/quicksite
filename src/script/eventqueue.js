import UndoEvent from './events/undoevent.js';

class EventQueue
{
	_eventQueue = []

	constructor(opts)
	{
		opts.events.on('domevent', this.addToQueue.bind(this));
	}

	addToQueue(evt)
	{
		this._eventQueue.push(evt);
		evt.performEventAction();
	}

	undoFromQueue()
	{
		var evt = this._eventQueue.pop();
		evt.revertEventAction();
		var undoEvt = new UndoEvent({ "relatedEvent": evt });
		this.addToQueue(undoEvt);
	}

	redoFromQueue()
	{
		if(this._eventQueue[this._eventQueue.length-1].IS_UNDO_EVENT)
		{
			var evt = this._eventQueue.pop();
			evt.revertEventAction();
			this.addToQueue(evt.relatedEvent);
		}
	}

}
export default EventQueue;