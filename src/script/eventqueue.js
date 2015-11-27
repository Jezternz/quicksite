import Events from "./globalevents.js";

class EventQueue
{
	eventQueue = [];
	eventQueueOffset = 0;

	constructor()
	{
		Events.on('domevent', ::this.addToQueue);
	}

	addToQueue(evt)
	{
		if(this.eventQueueOffset !== 0)
		{
			// Need to first discard 'undo-ed' changes, and move offset back to 0
			var removedEvts = this.eventQueue.splice(-this.eventQueueOffset, this.eventQueueOffset);
			removedEvts.forEach(removeEvt => removeEvt.destoryEvent());
			this.eventQueueOffset = 0;
		}
		this.eventQueue.push(evt);
		evt.performEventAction();
	}

	undoFromQueue()
	{
		var offset = (this.eventQueue.length-1)-this.eventQueueOffset;
		if(offset >= 0)
		{
			var evt = this.eventQueue[offset];
			evt.revertEventAction();
			this.eventQueueOffset++;
		}
	}

	redoFromQueue()
	{
		if(this.eventQueueOffset !== 0)
		{
			this.eventQueueOffset--;
			var offset = (this.eventQueue.length-1)-this.eventQueueOffset;
			var evt = this.eventQueue[offset];
			evt.performEventAction();
		}
	}

}
export default EventQueue;