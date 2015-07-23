import DomEvent from "./domevent.js";

class UndoEvent extends DomEvent
{
	IS_UNDO_EVENT = true;

	constructor(opts)
	{
		super();
	}
	performEventAction()
	{

	}
	revertEventAction()
	{

	}
}

export default UndoEvent;