import VirtualDOM from "./lib/virtualdom.js";

class PrimaryDOM extends VirtualDOM
{
	constructor()
	{
		super({
			"rootElement": document.getElementById('drawing-board')
		});
	}

}

export default new PrimaryDOM();