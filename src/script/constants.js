export const Logging = {
	"Verbose": true
};

export const MenuDefinitions = [
	{ "groupid": "element", "items": [
		{ "itemid":"text", "display":"Text", "icon":"letter" },
		{ "itemid":"size", "display":"Size", "icon":"expand" },
		{ "itemid":"position", "display":"Position", "icon":"cursor" },
		{ "itemid":"background", "display":"Background", "icon":"paint" },
		{ "itemid":"border", "display":"Border", "icon":"empty" },
		{ "itemid":"more", "display":"More", "icon":"cog" }
	]},
	{ "groupid": "dom", "items":[
		{ "itemid":"add", "display":"Create", "icon":"plus", "selectchild":true, "items":[
			{ "itemid":"standard", "display":"Standard" },
			{ "itemid":"link", "display":"Link" },
			{ "itemid":"textbox", "display":"Textbox" },
			{ "itemid":"image", "display":"Image" },
			{ "itemid":"video", "display":"Video" },
		]},
		{ "itemid":"remove", "display":"Remove", "icon":"minus" }
	]},
	{ "groupid": "menu", "items":[
		{ "itemid":"file", "display":"File", "icon":"file", "items":[
			{ "itemid":"export", "display":"Export", "selectchild":true, "items":[
				{ "itemid":"single", "display":"Single HTML" },
				{ "itemid":"separate", "display":"Separate CSS" }
			]},
			{ "itemid":"import", "display":"Import", "selectchild":true, "items":[
				{ "itemid":"single", "display":"Single HTML" },
				{ "itemid":"separate", "display":"Separate CSS" }
			]}
		]},
		{ "itemid":"edit", "display":"Edit", "icon":"clipboard", "items":[
			{ "itemid":"undo", "display":"Undo" },
			{ "itemid":"redo", "display":"Redo" }
		]},
		{ "itemid":"asset", "display":"Assets", "icon":"pictures", "selectchild":true, "items":[
			{ "itemid":"all", "display":"All" },
			{ "itemid":"fonts", "display":"Fonts" },
			{ "itemid":"colors", "display":"Colors" },
			{ "itemid":"images", "display":"Images" },
			{ "itemid":"videos", "display":"Videos" }
		]},
		{ "itemid":"help", "display":"Help", "icon":"help" }
	]},
];