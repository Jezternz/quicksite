(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _scriptLibMenubuilderJs = require("./script/lib/menubuilder.js");

var _scriptLibMenubuilderJs2 = _interopRequireDefault(_scriptLibMenubuilderJs);

var _scriptDialogmanagerJs = require("./script/dialogmanager.js");

var _scriptDialogmanagerJs2 = _interopRequireDefault(_scriptDialogmanagerJs);

var _scriptActionmanagerJs = require("./script/actionmanager.js");

var _scriptActionmanagerJs2 = _interopRequireDefault(_scriptActionmanagerJs);

var _scriptGlobaleventsJs = require("./script/globalevents.js");
<<<<<<< HEAD

var _scriptGlobaleventsJs2 = _interopRequireDefault(_scriptGlobaleventsJs);

var _scriptEventqueueJs = require("./script/eventqueue.js");

var _scriptEventqueueJs2 = _interopRequireDefault(_scriptEventqueueJs);

var _scriptPrimarydomJs = require("./script/primarydom.js");

var _scriptPrimarydomJs2 = _interopRequireDefault(_scriptPrimarydomJs);

var _scriptConstantsJs = require("./script/constants.js");

var Main = function Main() {
	_classCallCheck(this, Main);

	this.globalEvents = null;
	this.DOM = null;
	this.menuBuilder = null;
	this.eventQueue = null;
	this.dialogManager = null;
	this.actionManager = null;

	this.globalEvents = _scriptGlobaleventsJs2["default"];
	this.DOM = _scriptPrimarydomJs2["default"];
	this.menuBuilder = new _scriptLibMenubuilderJs2["default"]({ "definitions": _scriptConstantsJs.MenuDefinitions, "container": "body", "events": this.globalEvents });
	this.eventQueue = new _scriptEventqueueJs2["default"]({});
	this.dialogManager = new _scriptDialogmanagerJs2["default"]({ "container": "body" });
	this.actionManager = new _scriptActionmanagerJs2["default"]({});
};

window.onload = function () {
	window.app = new Main();
};

=======

var _scriptGlobaleventsJs2 = _interopRequireDefault(_scriptGlobaleventsJs);

var _scriptEventqueueJs = require("./script/eventqueue.js");

var _scriptEventqueueJs2 = _interopRequireDefault(_scriptEventqueueJs);

var _scriptPrimarydomJs = require("./script/primarydom.js");

var _scriptPrimarydomJs2 = _interopRequireDefault(_scriptPrimarydomJs);

var _scriptConstantsJs = require("./script/constants.js");

var Main = function Main() {
	_classCallCheck(this, Main);

	this.globalEvents = null;
	this.DOM = null;
	this.menuBuilder = null;
	this.eventQueue = null;
	this.dialogManager = null;
	this.actionManager = null;

	this.globalEvents = _scriptGlobaleventsJs2["default"];
	this.DOM = _scriptPrimarydomJs2["default"];
	this.DOM.setup({ "rootElement": document.getElementById('qs-drawing-board') });
	this.menuBuilder = new _scriptLibMenubuilderJs2["default"]({ "definitions": _scriptConstantsJs.MenuDefinitions, "container": "body", "events": this.globalEvents });
	this.eventQueue = new _scriptEventqueueJs2["default"]({});
	this.dialogManager = new _scriptDialogmanagerJs2["default"]({ "container": "body" });
	this.actionManager = new _scriptActionmanagerJs2["default"]({});
};

window.addEventListener("DOMContentLoaded", function () {
	return window.app = new Main();
}, false);

>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
},{"./script/actionmanager.js":2,"./script/constants.js":3,"./script/dialogmanager.js":4,"./script/eventqueue.js":5,"./script/globalevents.js":8,"./script/lib/menubuilder.js":11,"./script/primarydom.js":14}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _globaleventsJs = require("./globalevents.js");

var _globaleventsJs2 = _interopRequireDefault(_globaleventsJs);

var _eventsAddeventJs = require("./events/addevent.js");

var _eventsAddeventJs2 = _interopRequireDefault(_eventsAddeventJs);

var _primarydomJs = require("./primarydom.js");

var _primarydomJs2 = _interopRequireDefault(_primarydomJs);

var ActionManager = (function () {
	function ActionManager() {
		_classCallCheck(this, ActionManager);

		this.eventMethodTranslation = {
			"menu.dom.add": _eventsAddeventJs2["default"]
		};

		_globaleventsJs2["default"].on('menuselect', this.handleSelectEvent.bind(this));
	}

	_createClass(ActionManager, [{
		key: "handleSelectEvent",
		value: function handleSelectEvent(evt) {
			if (typeof this.eventMethodTranslation[evt.buttonid] !== "undefined") {
				var domEvent = new this.eventMethodTranslation[evt.buttonid](evt, _primarydomJs2["default"]);
				_globaleventsJs2["default"].trigger('domevent', domEvent);
			}
		}
	}]);

	return ActionManager;
})();

exports["default"] = ActionManager;
module.exports = exports["default"];

},{"./events/addevent.js":6,"./globalevents.js":8,"./primarydom.js":14}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Logging = {
	"Verbose": true
};

exports.Logging = Logging;
var MenuDefinitions = [{ "groupid": "element", "items": [{ "itemid": "text", "display": "Text", "icon": "letter" }, { "itemid": "size", "display": "Size", "icon": "expand" }, { "itemid": "position", "display": "Position", "icon": "cursor" }, { "itemid": "background", "display": "Background", "icon": "paint" }, { "itemid": "border", "display": "Border", "icon": "empty" }, { "itemid": "more", "display": "More", "icon": "cog" }] }, { "groupid": "dom", "items": [{ "itemid": "add", "display": "Create", "icon": "plus", "selectchild": true, "items": [{ "itemid": "standard", "display": "Standard" }, { "itemid": "link", "display": "Link" }, { "itemid": "textbox", "display": "Textbox" }, { "itemid": "image", "display": "Image" }, { "itemid": "video", "display": "Video" }] }, { "itemid": "remove", "display": "Remove", "icon": "minus" }] }, { "groupid": "menu", "items": [{ "itemid": "file", "display": "File", "icon": "file", "items": [{ "itemid": "export", "display": "Export", "selectchild": true, "items": [{ "itemid": "single", "display": "Single HTML" }, { "itemid": "separate", "display": "Separate CSS" }] }, { "itemid": "import", "display": "Import", "selectchild": true, "items": [{ "itemid": "single", "display": "Single HTML" }, { "itemid": "separate", "display": "Separate CSS" }] }] }, { "itemid": "edit", "display": "Edit", "icon": "clipboard", "items": [{ "itemid": "undo", "display": "Undo" }, { "itemid": "redo", "display": "Redo" }] }, { "itemid": "asset", "display": "Assets", "icon": "pictures", "selectchild": true, "items": [{ "itemid": "all", "display": "All" }, { "itemid": "fonts", "display": "Fonts" }, { "itemid": "colors", "display": "Colors" }, { "itemid": "images", "display": "Images" }, { "itemid": "videos", "display": "Videos" }] }, { "itemid": "help", "display": "Help", "icon": "help" }] }];
exports.MenuDefinitions = MenuDefinitions;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _globaleventsJs = require("./globalevents.js");

var _globaleventsJs2 = _interopRequireDefault(_globaleventsJs);

var DialogManager = function DialogManager() {
	_classCallCheck(this, DialogManager);
};

exports["default"] = DialogManager;
module.exports = exports["default"];

},{"./globalevents.js":8}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _globaleventsJs = require("./globalevents.js");

var _globaleventsJs2 = _interopRequireDefault(_globaleventsJs);

var EventQueue = (function () {
	function EventQueue() {
		_classCallCheck(this, EventQueue);

		this.eventQueue = [];
		this.eventQueueOffset = 0;

		_globaleventsJs2["default"].on('domevent', this.addToQueue.bind(this));
	}

	_createClass(EventQueue, [{
		key: "addToQueue",
		value: function addToQueue(evt) {
			if (this.eventQueueOffset !== 0) {
				// Need to first discard 'undo-ed' changes, and move offset back to 0
				var removedEvts = this.eventQueue.splice(-this.eventQueueOffset, this.eventQueueOffset);
				removedEvts.forEach(function (removeEvt) {
					return removeEvt.destoryEvent();
				});
				this.eventQueueOffset = 0;
			}
			this.eventQueue.push(evt);
			evt.performEventAction();
		}
	}, {
		key: "undoFromQueue",
		value: function undoFromQueue() {
			var offset = this.eventQueue.length - 1 - this.eventQueueOffset;
			if (offset >= 0) {
				var evt = this.eventQueue[offset];
				evt.revertEventAction();
				this.eventQueueOffset++;
			}
		}
	}, {
		key: "redoFromQueue",
		value: function redoFromQueue() {
			if (this.eventQueueOffset !== 0) {
				this.eventQueueOffset--;
				var offset = this.eventQueue.length - 1 - this.eventQueueOffset;
				var evt = this.eventQueue[offset];
				evt.performEventAction();
			}
		}
	}]);

	return EventQueue;
})();

exports["default"] = EventQueue;
module.exports = exports["default"];

},{"./globalevents.js":8}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _domeventJs = require("./domevent.js");

var _domeventJs2 = _interopRequireDefault(_domeventJs);

var AddEvent = (function (_DomEvent) {
	_inherits(AddEvent, _DomEvent);

	function AddEvent(evtOpts, dom) {
		_classCallCheck(this, AddEvent);

		_get(Object.getPrototypeOf(AddEvent.prototype), "constructor", this).call(this);

		this.dom = null;
		this.qSID = null;
		this.parent = null;
		this.defaultCSS = {
<<<<<<< HEAD
			"width": "100px",
			"height": "100px"
=======
			"width": "10%",
			"height": "30%",
			"background": "#EDEDFF",
			"border": "1px solid gray",
			"box-sizing": "border-box",
			"display": "inline-block"
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
		};
		this.dom = dom;
		this.qSID = this.dom.generateGuid();
		this.parent = evtOpts.target;
	}

	_createClass(AddEvent, [{
		key: "performEventAction",
		value: function performEventAction() {
			this.dom.addElement({
				"qSID": this.qSID,
				"parent": this.parent,
				"position": 0,
				"tag": "div",
				"css": this.defaultCSS
			});
		}
	}, {
		key: "revertEventAction",
		value: function revertEventAction() {
			this.dom.removeElement(this.qSID);
		}
	}, {
		key: "destroy",
		value: function destroy() {
			this.dom = null;
			this.qSID = null;
			this.parent = null;
		}
	}]);

	return AddEvent;
})(_domeventJs2["default"]);

exports["default"] = AddEvent;
module.exports = exports["default"];

},{"./domevent.js":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DomEvent = (function () {
	function DomEvent() {
		_classCallCheck(this, DomEvent);
	}

	_createClass(DomEvent, [{
		key: "performEventAction",
		value: function performEventAction() {
			throw new Error("Dom Event performEventAction Method Not Implemented!");
		}
	}, {
		key: "revertEventAction",
		value: function revertEventAction() {
			throw new Error("Dom Event revertEventAction Method Not Implemented!");
		}
	}, {
		key: "destoryEvent",
		value: function destoryEvent() {
			throw new Error("Dom Event destoryEvent Method Not Implemented!");
		}
	}]);

	return DomEvent;
})();

exports["default"] = DomEvent;
module.exports = exports["default"];

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _libEventhandlerJs = require("./lib/eventhandler.js");

var _libEventhandlerJs2 = _interopRequireDefault(_libEventhandlerJs);
<<<<<<< HEAD

var _constantsJs = require("./constants.js");

var GlobalEventHandler = (function (_EventHandler) {
	_inherits(GlobalEventHandler, _EventHandler);

	function GlobalEventHandler() {
		_classCallCheck(this, GlobalEventHandler);

=======

var _constantsJs = require("./constants.js");

var GlobalEventHandler = (function (_EventHandler) {
	_inherits(GlobalEventHandler, _EventHandler);

	function GlobalEventHandler() {
		_classCallCheck(this, GlobalEventHandler);

>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
		_get(Object.getPrototypeOf(GlobalEventHandler.prototype), "constructor", this).call(this);
		this.setupLogging();
	}

	_createClass(GlobalEventHandler, [{
		key: "setupLogging",
		value: function setupLogging() {
			if (_constantsJs.Logging.Verbose) {
				this.on('*', function (evt, eventName) {
					console.log(eventName, evt);
				});
			}
		}
<<<<<<< HEAD
	}]);

	return GlobalEventHandler;
})(_libEventhandlerJs2["default"]);

exports["default"] = new GlobalEventHandler();
module.exports = exports["default"];

},{"./constants.js":3,"./lib/eventhandler.js":10}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DrawingBoard = function DrawingBoard() {
	_classCallCheck(this, DrawingBoard);
};
=======
	}]);

	return GlobalEventHandler;
})(_libEventhandlerJs2["default"]);

exports["default"] = new GlobalEventHandler();
module.exports = exports["default"];

},{"./constants.js":3,"./lib/eventhandler.js":10}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _utilsJs = require("./utils.js");

var _utilsJs2 = _interopRequireDefault(_utilsJs);

var DrawingBoard = (function () {
	function DrawingBoard(opts) {
		_classCallCheck(this, DrawingBoard);

		this.rootElement = null;
		this.idList = [];
		this.elementIdLookup = {};
		this.idElementLookup = {};

		this.rootElement = opts.rootElement;
	}

	_createClass(DrawingBoard, [{
		key: "createUniqueId",
		value: function createUniqueId() {
			var guid = _utilsJs2["default"].guid();
			while (this.idList.indexOf(guid) !== -1) guid = _utilsJs2["default"].guid();
			this.idList.push(guid);
			return guid;
		}
	}, {
		key: "findElementsId",
		value: function findElementsId(domElement) {
			return this.elementIdLookup[domElement] || null;
		}
	}, {
		key: "addElement",
		value: function addElement(id, opts) {
			var parentEl = !opts.parent ? this.rootElement : this.idElementLookup[opts.parent];
			var el = document.createElement(opts.tag || "div");

			if (opts.attr) this.setAttributes(el, opts.attr);
			if (opts.css) this.setStyles(el, opts.css);

			if (parentEl.children.length === 0) parentEl.appendChild(el);else parentEl.insertBefore(el, parentEl.children[opts.position || 0]);

			this.elementIdLookup[el] = id;
			this.idElementLookup[id] = el;
		}
	}, {
		key: "updateElement",
		value: function updateElement(id, opts) {}
	}, {
		key: "removeElement",
		value: function removeElement(id) {}
	}, {
		key: "setStyles",
		value: function setStyles(el, cssProperties) {
			$(el).css(cssProperties);
		}
	}, {
		key: "setAttributes",
		value: function setAttributes(el, attrProperties) {
			$(el).attr(attrProperties);
		}
	}]);

	return DrawingBoard;
})();
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8

exports["default"] = DrawingBoard;
module.exports = exports["default"];

<<<<<<< HEAD
},{}],10:[function(require,module,exports){
=======
},{"./utils.js":12}],10:[function(require,module,exports){
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventHandler = (function () {
	function EventHandler() {
		_classCallCheck(this, EventHandler);

		this.IS_EVENT_HANDLER = true;
		this.listeners = {};
	}
<<<<<<< HEAD

	_createClass(EventHandler, [{
		key: 'on',
		value: function on(eventType, eventCallback) {
			var listeners = this.listeners[eventType];
			if (!Array.isArray(listeners)) {
				listeners = this.listeners[eventType] = [];
			}
			this.listeners[eventType].push(eventCallback);
			return this;
		}
	}, {
		key: 'off',
		value: function off(eventType, eventCallback) {
			var listeners = this.listeners[eventType];
			if (Array.isArray(listeners)) {
				var indx;
				while ((indx = listeners.indexOf(eventCallback)) !== -1) {
					listeners.splice(indx, 1);
				}
			}
			return this;
		}
	}, {
		key: 'trigger',
		value: function trigger(eventType, eventInformation) {
			if (Array.isArray(this.listeners[eventType])) {
				this.listeners[eventType].forEach(function (fn) {
					return fn.call(null, eventInformation, eventType);
				});
			}
			if (Array.isArray(this.listeners['*'])) {
				this.listeners['*'].forEach(function (fn) {
					return fn.call(null, eventInformation, eventType);
				});
			}
			return this;
		}
	}, {
		key: '_passEventOn',
		value: function _passEventOn(eventInformation, eventType) {
			this.trigger(eventType, eventInformation);
		}
	}, {
		key: 'cleanup',
		value: function cleanup() {
			var _this = this;

			Object.keys(this.listeners).forEach(function (evtName) {
				delete _this.listeners[evtName];
			});
			this.listeners = {};
			return this;
		}
	}]);

	return EventHandler;
})();

exports['default'] = EventHandler;
module.exports = exports['default'];

},{}],11:[function(require,module,exports){
'use strict';

=======

	_createClass(EventHandler, [{
		key: 'on',
		value: function on(eventType, eventCallback) {
			var listeners = this.listeners[eventType];
			if (!Array.isArray(listeners)) {
				listeners = this.listeners[eventType] = [];
			}
			this.listeners[eventType].push(eventCallback);
			return this;
		}
	}, {
		key: 'off',
		value: function off(eventType, eventCallback) {
			var listeners = this.listeners[eventType];
			if (Array.isArray(listeners)) {
				var indx;
				while ((indx = listeners.indexOf(eventCallback)) !== -1) {
					listeners.splice(indx, 1);
				}
			}
			return this;
		}
	}, {
		key: 'trigger',
		value: function trigger(eventType, eventInformation) {
			if (Array.isArray(this.listeners[eventType])) {
				this.listeners[eventType].forEach(function (fn) {
					return fn.call(null, eventInformation, eventType);
				});
			}
			if (Array.isArray(this.listeners['*'])) {
				this.listeners['*'].forEach(function (fn) {
					return fn.call(null, eventInformation, eventType);
				});
			}
			return this;
		}
	}, {
		key: '_passEventOn',
		value: function _passEventOn(eventInformation, eventType) {
			this.trigger(eventType, eventInformation);
		}
	}, {
		key: 'cleanup',
		value: function cleanup() {
			var _this = this;

			Object.keys(this.listeners).forEach(function (evtName) {
				delete _this.listeners[evtName];
			});
			this.listeners = {};
			return this;
		}
	}]);

	return EventHandler;
})();

exports['default'] = EventHandler;
module.exports = exports['default'];

},{}],11:[function(require,module,exports){
'use strict';

>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MenuBuilder = (function () {
	function MenuBuilder(opts) {
		_classCallCheck(this, MenuBuilder);

		this.opts = {};
		this.target = null;
		this.$container = null;

		this.opts = opts;
		this.setupMenu(opts.definitions);
		this.setupEvents();
	}

	_createClass(MenuBuilder, [{
		key: 'setupMenu',
		value: function setupMenu(definition) {
			this.$container = $('<div class="qs-engine-dd-container" tabindex="0">\n\t\t\t\t<div class="qs-engine-dd-inner">\n\t\t\t\t\t<div class="qs-engine-dd-title">\n\t\t\t\t\t\t<span class="qs-engine-dd-title-text"></span>\n\t\t\t\t\t\t<span class="qs-engine-dd-title-icon qs-icon qs-icon-pencil"></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>').appendTo(this.opts.container);
			this.$container.find('.qs-engine-dd-title .qs-engine-dd-title-text').text('Block 1');
			this.processDefinition(this.$container.find('.qs-engine-dd-inner'), definition);
		}
	}, {
		key: 'processDefinition',
		value: function processDefinition($parent, def) {
			if (Array.isArray(def)) {
				def.forEach(this.processDefinition.bind(this, $parent));
			} else if (typeof def === "object") {
				var $childParent = null,
				    id = $parent.closest('[data-qs-id]').data('qs-id');
				id = id ? id + '.' : "";
				if (typeof def.groupid !== "undefined") {
					$childParent = $('<div class="qs-engine-dd-group" data-qs-id="' + def.groupid + '"></div>').appendTo($parent);
				} else if (typeof def.itemid !== "undefined") {
					var $item = $('<div class="qs-engine-dd-item" data-qs-id="' + id + def.itemid + '"><span class="qs-engine-dd-icon"></span></div>').appendTo($parent);
					if (typeof def.icon !== "undefined") {
						$item.find('.qs-engine-dd-icon').addClass('qs-icon qs-icon-' + def.icon);
					}
					if (typeof def.display !== "undefined") {
						$item.append('<span>' + def.display + '</span>');
					}
					if (Array.isArray(def.items)) {
						$childParent = $('<div class="qs-engine-dd-more"><div class="qs-engine-dd-expand">&gt;</div><div class="qs-engine-dd-group"></div></div>').appendTo($item).find('.qs-engine-dd-group');
					}
				}
				if ($childParent && Array.isArray(def.items)) {
					this.processDefinition($childParent, def.items);
				}
			}
		}
	}, {
		key: 'setupEvents',
		value: function setupEvents() {
			var _this = this;

			$(this.opts.container).on('contextmenu', function (evt) {
				if ($(evt.target).closest('.qs-engine-dd-container').size() === 0) {
					_this.target = evt.target;
					$('.qs-engine-dd-container').focus().css({ 'left': evt.clientX + 'px', 'top': evt.clientY + 'px' });
					evt.preventDefault();
				}
			});
			this.$container.on('click', function (evt) {
				var $qsid = $(evt.target).closest('[data-qs-id]');
				if ($qsid.size() > 0) {
					$('.qs-engine-dd-container').blur();
					if (_this.opts.events) {
						_this.opts.events.trigger('menuselect', { "buttonid": 'menu.' + $qsid.data('qs-id'), "target": _this.target });
					}
				}
			});
		}
	}]);

	return MenuBuilder;
})();

;

exports['default'] = MenuBuilder;
module.exports = exports['default'];

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Utils = (function () {
	function Utils() {
		_classCallCheck(this, Utils);
	}

	_createClass(Utils, null, [{
		key: 'guid',
		value: function guid() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = Math.random() * 16 | 0,
				    v = c == 'x' ? r : r & 0x3 | 0x8;
				return v.toString(16);
			});
		}
	}]);

	return Utils;
})();

exports['default'] = Utils;
module.exports = exports['default'];

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

<<<<<<< HEAD
=======
var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

<<<<<<< HEAD
var _utilsJs = require("./utils.js");

var _utilsJs2 = _interopRequireDefault(_utilsJs);
=======
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8

var _drawingboardJs = require("./drawingboard.js");

var _drawingboardJs2 = _interopRequireDefault(_drawingboardJs);

<<<<<<< HEAD
var VirtualDOM = (function () {
	function VirtualDOM(opts) {
		_classCallCheck(this, VirtualDOM);

		this.guids = new Set();
=======
var _eventhandlerJs = require("./eventhandler.js");

var _eventhandlerJs2 = _interopRequireDefault(_eventhandlerJs);

var VirtualDOM = (function (_EventHandler) {
	_inherits(VirtualDOM, _EventHandler);

	function VirtualDOM(opts) {
		_classCallCheck(this, VirtualDOM);

		_get(Object.getPrototypeOf(VirtualDOM.prototype), "constructor", this).call(this);
		this.drawing = null;
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
		this.dom = {
			rootQSID: null,
			elementLookup: {},
			elements: {}
		};
<<<<<<< HEAD

		this.addElement({
			"position": 0,
			"tag": opts.rootElement.tagName,
			"CSS": {}
		});
	}

	_createClass(VirtualDOM, [{
		key: "generateGuid",
		value: function generateGuid() {
			var guid = _utilsJs2["default"].guid();
			while (this.guids.has(guid)) guid = _utilsJs2["default"].guid();
			this.guidSet.add(guid);
			return guid;
=======
		if (opts) this.setup(opts);
	}

	_createClass(VirtualDOM, [{
		key: "setup",
		value: function setup(opts) {
			this.drawing = new _drawingboardJs2["default"]({ "rootElement": opts.rootElement });
			this.addElement({
				"position": 0,
				"tag": "div",
				"css": { "width": "100%", "height": "100%", "background": "#fff" }
			});
		}
	}, {
		key: "generateGuid",
		value: function generateGuid() {
			return this.drawing.createUniqueId();
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
		}
	}, {
		key: "getElementQSID",
		value: function getElementQSID(domElement) {
<<<<<<< HEAD

			// THIS WILL HAVE TO USE DRAWING BOARD

			return this.dom.elementLookup[domElement] || null;
=======
			return this.drawing.findElementsId(domElement) || null;
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
		}
	}, {
		key: "addElement",
		value: function addElement() {
<<<<<<< HEAD
			var opts = arguments.length <= 0 || arguments[0] === undefined ? {
				"qSID": null,
				"parent": null,
				"position": 0,
				"tag": "",
				"css": {},
				"attr": {}
			} : arguments[0];
=======
			var opts = arguments.length <= 0 || arguments[0] === undefined ? { "qSID": null, "parent": null, "position": 0, "tag": "", "css": {}, "attr": {} } : arguments[0];
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8

			if (!opts.qSID) {
				opts.qSID = this.generateGuid();
			}
			if (typeof opts.parent === "string") {
				opts.parent = this.getElementQSID(opts.parent);
			}
			if (typeof opts.parent !== "string") {
				if (!this.dom.rootQSID) {
					this.dom.rootQSID = opts.qSID;
					opts.parent = null;
				} else {
					opts.parent = this.dom.rootQSID;
				}
			}

<<<<<<< HEAD
			this.elements[opts.qSID] = opts;
			//this.elementLookup[opts.element] = opts.qSID; THIS WILL HAVE TO BE DONE THROUGH DRAWING BOARD
=======
			this.dom.elements[opts.qSID] = opts;
			this.drawing.addElement(opts.qSID, opts);
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8

			return opts.qSID;
		}
	}, {
		key: "updateElement",
<<<<<<< HEAD
		value: function updateElement() {
			var opts = arguments.length <= 0 || arguments[0] === undefined ? { "tag": "", "css": {}, "attr": {} } : arguments[0];
		}
	}, {
		key: "removeElement",
		value: function removeElement() {}
	}]);

	return VirtualDOM;
})();
=======
		value: function updateElement(elementOrQSID) {
			var opts = arguments.length <= 1 || arguments[1] === undefined ? { "tag": "", "css": {}, "attr": {} } : arguments[1];

			// TODO: Update virtualdom

			this.drawing.updateElement(elementOrQSID, opts);
		}
	}, {
		key: "removeElement",
		value: function removeElement(elementOrQSID) {
			if (typeof elementOrQSID !== "string") {
				elementOrQSID = this.getElementQSID(elementOrQSID);
			}

			//TODO: Remove from virtualdom

			this.drawing.removeElement(elementOrQSID);
		}
	}]);

	return VirtualDOM;
})(_eventhandlerJs2["default"]);
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8

exports["default"] = VirtualDOM;
module.exports = exports["default"];

<<<<<<< HEAD
},{"./drawingboard.js":9,"./utils.js":12}],14:[function(require,module,exports){
=======
},{"./drawingboard.js":9,"./eventhandler.js":10}],14:[function(require,module,exports){
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _libVirtualdomJs = require("./lib/virtualdom.js");

var _libVirtualdomJs2 = _interopRequireDefault(_libVirtualdomJs);

var PrimaryDOM = (function (_VirtualDOM) {
	_inherits(PrimaryDOM, _VirtualDOM);

	function PrimaryDOM() {
		_classCallCheck(this, PrimaryDOM);

<<<<<<< HEAD
		_get(Object.getPrototypeOf(PrimaryDOM.prototype), "constructor", this).call(this, {
			"rootElement": document.getElementById('drawing-board')
		});
=======
		_get(Object.getPrototypeOf(PrimaryDOM.prototype), "constructor", this).call(this);
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
	}

	return PrimaryDOM;
})(_libVirtualdomJs2["default"]);

exports["default"] = new PrimaryDOM();
module.exports = exports["default"];

},{"./lib/virtualdom.js":13}]},{},[1])
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0LmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9hY3Rpb25tYW5hZ2VyLmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9jb25zdGFudHMuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2RpYWxvZ21hbmFnZXIuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2V2ZW50cXVldWUuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2V2ZW50cy9hZGRldmVudC5qcyIsIkM6L3dvcmsvUXVpY2tTaXRlL3NyYy9zY3JpcHQvZXZlbnRzL2RvbWV2ZW50LmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9nbG9iYWxldmVudHMuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2xpYi9kcmF3aW5nYm9hcmQuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2xpYi9ldmVudGhhbmRsZXIuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2xpYi9tZW51YnVpbGRlci5qcyIsIkM6L3dvcmsvUXVpY2tTaXRlL3NyYy9zY3JpcHQvbGliL3V0aWxzLmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9saWIvdmlydHVhbGRvbS5qcyIsIkM6L3dvcmsvUXVpY2tTaXRlL3NyYy9zY3JpcHQvcHJpbWFyeWRvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztzQ0NBd0IsNkJBQTZCOzs7O3FDQUMzQiwyQkFBMkI7Ozs7cUNBQzNCLDJCQUEyQjs7OztvQ0FDNUIsMEJBQTBCOzs7O2tDQUM1Qix3QkFBd0I7Ozs7a0NBQ3hC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QVMsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUNoRixFQUFFLFFBQVEsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLFVBQVUsRUFBRSxFQUM3QyxFQUFFLFFBQVEsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLFFBQVEsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLFNBQVMsRUFBRSxFQUMzQyxFQUFFLFFBQVEsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFDLE9BQU8sRUFBRSxFQUN2QyxFQUFFLFFBQVEsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFDLE9BQU8sRUFBRSxDQUN2QyxFQUFDLEVBQ0YsRUFBRSxRQUFRLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDLE9BQU8sRUFBRSxDQUN6RCxFQUFDLEVBQ0YsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBQyxDQUM1QixFQUFFLFFBQVEsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBQyxDQUMzRCxFQUFFLFFBQVEsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUNwRSxFQUFFLFFBQVEsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLGFBQWEsRUFBRSxFQUM5QyxFQUFFLFFBQVEsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLGNBQWMsRUFBRSxDQUNqRCxFQUFDLEVBQ0YsRUFBRSxRQUFRLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxRQUFRLEVBQUUsYUFBYSxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FDcEUsRUFBRSxRQUFRLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxhQUFhLEVBQUUsRUFDOUMsRUFBRSxRQUFRLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFB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SDs7UUFQSSxVQUFVOzs7cUJBV0QsSUFBSSxVQUFVLEVBQUUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IE1lbnVCdWlsZGVyIGZyb20gXCIuL3NjcmlwdC9saWIvbWVudWJ1aWxkZXIuanNcIjtcclxuaW1wb3J0IERpYWxvZ01hbmFnZXIgZnJvbSBcIi4vc2NyaXB0L2RpYWxvZ21hbmFnZXIuanNcIjtcclxuaW1wb3J0IEFjdGlvbk1hbmFnZXIgZnJvbSBcIi4vc2NyaXB0L2FjdGlvbm1hbmFnZXIuanNcIjtcclxuaW1wb3J0IEdsb2JhbEV2ZW50cyBmcm9tIFwiLi9zY3JpcHQvZ2xvYmFsZXZlbnRzLmpzXCI7XHJcbmltcG9ydCBFdmVudFF1ZXVlIGZyb20gXCIuL3NjcmlwdC9ldmVudHF1ZXVlLmpzXCI7XHJcbmltcG9ydCBQcmltYXJ5RE9NIGZyb20gXCIuL3NjcmlwdC9wcmltYXJ5ZG9tLmpzXCI7XHJcbmltcG9ydCB7IE1lbnVEZWZpbml0aW9ucyB9IGZyb20gXCIuL3NjcmlwdC9jb25zdGFudHMuanNcIjtcclxuXHJcbmNsYXNzIE1haW5cclxue1xyXG5cdGdsb2JhbEV2ZW50cyA9IG51bGw7XHJcblx0RE9NID0gbnVsbDtcclxuXHRtZW51QnVpbGRlciA9IG51bGw7XHJcblx0ZXZlbnRRdWV1ZSA9IG51bGw7XHJcblx0ZGlhbG9nTWFuYWdlciA9IG51bGw7XHJcblx0YWN0aW9uTWFuYWdlciA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHR0aGlzLmdsb2JhbEV2ZW50cyA9IEdsb2JhbEV2ZW50cztcclxuXHRcdHRoaXMuRE9NID0gUHJpbWFyeURPTTtcclxuXHRcdHRoaXMubWVudUJ1aWxkZXIgPSBuZXcgTWVudUJ1aWxkZXIoeyBcImRlZmluaXRpb25zXCI6TWVudURlZmluaXRpb25zLCBcImNvbnRhaW5lclwiOlwiYm9keVwiLCBcImV2ZW50c1wiOnRoaXMuZ2xvYmFsRXZlbnRzIH0pO1xyXG5cdFx0dGhpcy5ldmVudFF1ZXVlID0gbmV3IEV2ZW50UXVldWUoe30pO1xyXG5cdFx0dGhpcy5kaWFsb2dNYW5hZ2VyID0gbmV3IERpYWxvZ01hbmFnZXIoeyBcImNvbnRhaW5lclwiOlwiYm9keVwiIH0pO1xyXG5cdFx0dGhpcy5hY3Rpb25NYW5hZ2VyID0gbmV3IEFjdGlvbk1hbmFnZXIoeyB9KTtcclxuXHR9XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpeyB3aW5kb3cuYXBwID0gbmV3IE1haW4oKTsgfTsiLCJpbXBvcnQgRXZlbnRzIGZyb20gXCIuL2dsb2JhbGV2ZW50cy5qc1wiO1xyXG5pbXBvcnQgQWRkRXZlbnQgZnJvbSBcIi4vZXZlbnRzL2FkZGV2ZW50LmpzXCI7XHJcbmltcG9ydCBQcmltYXJ5RE9NIGZyb20gXCIuL3ByaW1hcnlkb20uanNcIjtcclxuXHJcbmNsYXNzIEFjdGlvbk1hbmFnZXJcclxue1xyXG5cclxuXHRldmVudE1ldGhvZFRyYW5zbGF0aW9uID0gXHJcblx0e1xyXG5cdFx0XCJtZW51LmRvbS5hZGRcIjogQWRkRXZlbnRcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRFdmVudHMub24oJ21lbnVzZWxlY3QnLCA6OnRoaXMuaGFuZGxlU2VsZWN0RXZlbnQpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU2VsZWN0RXZlbnQoZXZ0KVxyXG5cdHtcclxuXHRcdGlmKHR5cGVvZiB0aGlzLmV2ZW50TWV0aG9kVHJhbnNsYXRpb25bZXZ0LmJ1dHRvbmlkXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHtcclxuXHRcdFx0dmFyIGRvbUV2ZW50ID0gbmV3IHRoaXMuZXZlbnRNZXRob2RUcmFuc2xhdGlvbltldnQuYnV0dG9uaWRdKGV2dCwgUHJpbWFyeURPTSk7XHJcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdkb21ldmVudCcsIGRvbUV2ZW50KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbk1hbmFnZXI7IiwiZXhwb3J0IGNvbnN0IExvZ2dpbmcgPSB7XHJcblx0XCJWZXJib3NlXCI6IHRydWVcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51RGVmaW5pdGlvbnMgPSBbXHJcblx0eyBcImdyb3VwaWRcIjogXCJlbGVtZW50XCIsIFwiaXRlbXNcIjogW1xyXG5cdFx0eyBcIml0ZW1pZFwiOlwidGV4dFwiLCBcImRpc3BsYXlcIjpcIlRleHRcIiwgXCJpY29uXCI6XCJsZXR0ZXJcIiB9LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwic2l6ZVwiLCBcImRpc3BsYXlcIjpcIlNpemVcIiwgXCJpY29uXCI6XCJleHBhbmRcIiB9LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwicG9zaXRpb25cIiwgXCJkaXNwbGF5XCI6XCJQb3NpdGlvblwiLCBcImljb25cIjpcImN1cnNvclwiIH0sXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJiYWNrZ3JvdW5kXCIsIFwiZGlzcGxheVwiOlwiQmFja2dyb3VuZFwiLCBcImljb25cIjpcInBhaW50XCIgfSxcclxuXHRcdHsgXCJpdGVtaWRcIjpcImJvcmRlclwiLCBcImRpc3BsYXlcIjpcIkJvcmRlclwiLCBcImljb25cIjpcImVtcHR5XCIgfSxcclxuXHRcdHsgXCJpdGVtaWRcIjpcIm1vcmVcIiwgXCJkaXNwbGF5XCI6XCJNb3JlXCIsIFwiaWNvblwiOlwiY29nXCIgfVxyXG5cdF19LFxyXG5cdHsgXCJncm91cGlkXCI6IFwiZG9tXCIsIFwiaXRlbXNcIjpbXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJhZGRcIiwgXCJkaXNwbGF5XCI6XCJDcmVhdGVcIiwgXCJpY29uXCI6XCJwbHVzXCIsIFwic2VsZWN0Y2hpbGRcIjp0cnVlLCBcIml0ZW1zXCI6W1xyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJzdGFuZGFyZFwiLCBcImRpc3BsYXlcIjpcIlN0YW5kYXJkXCIgfSxcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwibGlua1wiLCBcImRpc3BsYXlcIjpcIkxpbmtcIiB9LFxyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJ0ZXh0Ym94XCIsIFwiZGlzcGxheVwiOlwiVGV4dGJveFwiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcImltYWdlXCIsIFwiZGlzcGxheVwiOlwiSW1hZ2VcIiB9LFxyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJ2aWRlb1wiLCBcImRpc3BsYXlcIjpcIlZpZGVvXCIgfSxcclxuXHRcdF19LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwicmVtb3ZlXCIsIFwiZGlzcGxheVwiOlwiUmVtb3ZlXCIsIFwiaWNvblwiOlwibWludXNcIiB9XHJcblx0XX0sXHJcblx0eyBcImdyb3VwaWRcIjogXCJtZW51XCIsIFwiaXRlbXNcIjpbXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJmaWxlXCIsIFwiZGlzcGxheVwiOlwiRmlsZVwiLCBcImljb25cIjpcImZpbGVcIiwgXCJpdGVtc1wiOltcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwiZXhwb3J0XCIsIFwiZGlzcGxheVwiOlwiRXhwb3J0XCIsIFwic2VsZWN0Y2hpbGRcIjp0cnVlLCBcIml0ZW1zXCI6W1xyXG5cdFx0XHRcdHsgXCJpdGVtaWRcIjpcInNpbmdsZVwiLCBcImRpc3BsYXlcIjpcIlNpbmdsZSBIVE1MXCIgfSxcclxuXHRcdFx0XHR7IFwiaXRlbWlkXCI6XCJzZXBhcmF0ZVwiLCBcImRpc3BsYXlcIjpcIlNlcGFyYXRlIENTU1wiIH1cclxuXHRcdFx0XX0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcImltcG9ydFwiLCBcImRpc3BsYXlcIjpcIkltcG9ydFwiLCBcInNlbGVjdGNoaWxkXCI6dHJ1ZSwgXCJpdGVtc1wiOltcclxuXHRcdFx0XHR7IFwiaXRlbWlkXCI6XCJzaW5nbGVcIiwgXCJkaXNwbGF5XCI6XCJTaW5nbGUgSFRNTFwiIH0sXHJcblx0XHRcdFx0eyBcIml0ZW1pZFwiOlwic2VwYXJhdGVcIiwgXCJkaXNwbGF5XCI6XCJTZXBhcmF0ZSBDU1NcIiB9XHJcblx0XHRcdF19XHJcblx0XHRdfSxcclxuXHRcdHsgXCJpdGVtaWRcIjpcImVkaXRcIiwgXCJkaXNwbGF5XCI6XCJFZGl0XCIsIFwiaWNvblwiOlwiY2xpcGJvYXJkXCIsIFwiaXRlbXNcIjpbXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcInVuZG9cIiwgXCJkaXNwbGF5XCI6XCJVbmRvXCIgfSxcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwicmVkb1wiLCBcImRpc3BsYXlcIjpcIlJlZG9cIiB9XHJcblx0XHRdfSxcclxuXHRcdHsgXCJpdGVtaWRcIjpcImFzc2V0XCIsIFwiZGlzcGxheVwiOlwiQXNzZXRzXCIsIFwiaWNvblwiOlwicGljdHVyZXNcIiwgXCJzZWxlY3RjaGlsZFwiOnRydWUsIFwiaXRlbXNcIjpbXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcImFsbFwiLCBcImRpc3BsYXlcIjpcIkFsbFwiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcImZvbnRzXCIsIFwiZGlzcGxheVwiOlwiRm9udHNcIiB9LFxyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJjb2xvcnNcIiwgXCJkaXNwbGF5XCI6XCJDb2xvcnNcIiB9LFxyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJpbWFnZXNcIiwgXCJkaXNwbGF5XCI6XCJJbWFnZXNcIiB9LFxyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJ2aWRlb3NcIiwgXCJkaXNwbGF5XCI6XCJWaWRlb3NcIiB9XHJcblx0XHRdfSxcclxuXHRcdHsgXCJpdGVtaWRcIjpcImhlbHBcIiwgXCJkaXNwbGF5XCI6XCJIZWxwXCIsIFwiaWNvblwiOlwiaGVscFwiIH1cclxuXHRdfSxcclxuXTsiLCJpbXBvcnQgRXZlbnRzIGZyb20gXCIuL2dsb2JhbGV2ZW50cy5qc1wiO1xyXG5cclxuY2xhc3MgRGlhbG9nTWFuYWdlclxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdFxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dNYW5hZ2VyOyIsImltcG9ydCBFdmVudHMgZnJvbSBcIi4vZ2xvYmFsZXZlbnRzLmpzXCI7XHJcblxyXG5jbGFzcyBFdmVudFF1ZXVlXHJcbntcclxuXHRldmVudFF1ZXVlID0gW107XHJcblx0ZXZlbnRRdWV1ZU9mZnNldCA9IDA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRFdmVudHMub24oJ2RvbWV2ZW50JywgOjp0aGlzLmFkZFRvUXVldWUpO1xyXG5cdH1cclxuXHJcblx0YWRkVG9RdWV1ZShldnQpXHJcblx0e1xyXG5cdFx0aWYodGhpcy5ldmVudFF1ZXVlT2Zmc2V0ICE9PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBOZWVkIHRvIGZpcnN0IGRpc2NhcmQgJ3VuZG8tZWQnIGNoYW5nZXMsIGFuZCBtb3ZlIG9mZnNldCBiYWNrIHRvIDBcclxuXHRcdFx0dmFyIHJlbW92ZWRFdnRzID0gdGhpcy5ldmVudFF1ZXVlLnNwbGljZSgtdGhpcy5ldmVudFF1ZXVlT2Zmc2V0LCB0aGlzLmV2ZW50UXVldWVPZmZzZXQpO1xyXG5cdFx0XHRyZW1vdmVkRXZ0cy5mb3JFYWNoKHJlbW92ZUV2dCA9PiByZW1vdmVFdnQuZGVzdG9yeUV2ZW50KCkpO1xyXG5cdFx0XHR0aGlzLmV2ZW50UXVldWVPZmZzZXQgPSAwO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ldmVudFF1ZXVlLnB1c2goZXZ0KTtcclxuXHRcdGV2dC5wZXJmb3JtRXZlbnRBY3Rpb24oKTtcclxuXHR9XHJcblxyXG5cdHVuZG9Gcm9tUXVldWUoKVxyXG5cdHtcclxuXHRcdHZhciBvZmZzZXQgPSAodGhpcy5ldmVudFF1ZXVlLmxlbmd0aC0xKS10aGlzLmV2ZW50UXVldWVPZmZzZXQ7XHJcblx0XHRpZihvZmZzZXQgPj0gMClcclxuXHRcdHtcclxuXHRcdFx0dmFyIGV2dCA9IHRoaXMuZXZlbnRRdWV1ZVtvZmZzZXRdO1xyXG5cdFx0XHRldnQucmV2ZXJ0RXZlbnRBY3Rpb24oKTtcclxuXHRcdFx0dGhpcy5ldmVudFF1ZXVlT2Zmc2V0Kys7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZWRvRnJvbVF1ZXVlKClcclxuXHR7XHJcblx0XHRpZih0aGlzLmV2ZW50UXVldWVPZmZzZXQgIT09IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZXZlbnRRdWV1ZU9mZnNldC0tO1xyXG5cdFx0XHR2YXIgb2Zmc2V0ID0gKHRoaXMuZXZlbnRRdWV1ZS5sZW5ndGgtMSktdGhpcy5ldmVudFF1ZXVlT2Zmc2V0O1xyXG5cdFx0XHR2YXIgZXZ0ID0gdGhpcy5ldmVudFF1ZXVlW29mZnNldF07XHJcblx0XHRcdGV2dC5wZXJmb3JtRXZlbnRBY3Rpb24oKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50UXVldWU7IiwiaW1wb3J0IERvbUV2ZW50IGZyb20gXCIuL2RvbWV2ZW50LmpzXCI7XHJcblxyXG5jbGFzcyBBZGRFdmVudCBleHRlbmRzIERvbUV2ZW50XHJcbntcclxuXHRkb20gPSBudWxsO1xyXG5cdHFTSUQgPSBudWxsO1xyXG5cdHBhcmVudCA9IG51bGw7XHJcblxyXG5cdGRlZmF1bHRDU1MgPSBcclxuXHR7XHJcblx0XHRcIndpZHRoXCI6XCIxMDBweFwiLFxyXG5cdFx0XCJoZWlnaHRcIjpcIjEwMHB4XCJcclxuXHR9O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihldnRPcHRzLCBkb20pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmRvbSA9IGRvbTtcclxuXHRcdHRoaXMucVNJRCA9IHRoaXMuZG9tLmdlbmVyYXRlR3VpZCgpO1xyXG5cdFx0dGhpcy5wYXJlbnQgPSBldnRPcHRzLnRhcmdldDtcclxuXHR9XHJcblxyXG5cdHBlcmZvcm1FdmVudEFjdGlvbigpXHJcblx0e1xyXG5cdFx0dGhpcy5kb20uYWRkRWxlbWVudCh7XHJcblx0XHRcdFwicVNJRFwiOiB0aGlzLnFTSUQsXHJcblx0XHRcdFwicGFyZW50XCI6IHRoaXMucGFyZW50LFxyXG5cdFx0XHRcInBvc2l0aW9uXCI6IDAsXHJcblx0XHRcdFwidGFnXCI6IFwiZGl2XCIsXHJcblx0XHRcdFwiY3NzXCI6IHRoaXMuZGVmYXVsdENTU1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXZlcnRFdmVudEFjdGlvbigpXHJcblx0e1xyXG5cdFx0dGhpcy5kb20ucmVtb3ZlRWxlbWVudCh0aGlzLnFTSUQpO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpXHJcblx0e1xyXG5cdFx0dGhpcy5kb20gPSBudWxsO1xyXG5cdFx0dGhpcy5xU0lEID0gbnVsbDtcclxuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZEV2ZW50OyIsImNsYXNzIERvbUV2ZW50XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cclxuXHR9XHJcblx0XHJcblx0cGVyZm9ybUV2ZW50QWN0aW9uKClcclxuXHR7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEb20gRXZlbnQgcGVyZm9ybUV2ZW50QWN0aW9uIE1ldGhvZCBOb3QgSW1wbGVtZW50ZWQhXCIpO1xyXG5cdH1cclxuXHJcblx0cmV2ZXJ0RXZlbnRBY3Rpb24oKVxyXG5cdHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbSBFdmVudCByZXZlcnRFdmVudEFjdGlvbiBNZXRob2QgTm90IEltcGxlbWVudGVkIVwiKTtcclxuXHR9XHJcblxyXG5cdGRlc3RvcnlFdmVudCgpXHJcblx0e1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tIEV2ZW50IGRlc3RvcnlFdmVudCBNZXRob2QgTm90IEltcGxlbWVudGVkIVwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvbUV2ZW50OyIsImltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSBcIi4vbGliL2V2ZW50aGFuZGxlci5qc1wiO1xyXG5pbXBvcnQgeyBMb2dnaW5nIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XHJcblxyXG5jbGFzcyBHbG9iYWxFdmVudEhhbmRsZXIgZXh0ZW5kcyBFdmVudEhhbmRsZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5zZXR1cExvZ2dpbmcoKTtcclxuXHR9XHJcblxyXG5cdHNldHVwTG9nZ2luZygpXHJcblx0e1xyXG5cdFx0aWYoTG9nZ2luZy5WZXJib3NlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm9uKCcqJywgZnVuY3Rpb24oZXZ0LCBldmVudE5hbWUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhldmVudE5hbWUsIGV2dCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEdsb2JhbEV2ZW50SGFuZGxlcigpOyIsImNsYXNzIERyYXdpbmdCb2FyZFxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdFxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEcmF3aW5nQm9hcmQ7IiwiY2xhc3MgRXZlbnRIYW5kbGVyXHJcbntcclxuXHRJU19FVkVOVF9IQU5ETEVSID0gdHJ1ZTtcclxuXHRsaXN0ZW5lcnMgPSB7fTtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0b24oZXZlbnRUeXBlLCBldmVudENhbGxiYWNrKVxyXG5cdHtcclxuXHRcdHZhciBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdO1xyXG5cdFx0aWYoIUFycmF5LmlzQXJyYXkobGlzdGVuZXJzKSlcclxuXHRcdHtcclxuXHRcdFx0bGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRUeXBlXSA9IFtdO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5saXN0ZW5lcnNbZXZlbnRUeXBlXS5wdXNoKGV2ZW50Q2FsbGJhY2spO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRvZmYoZXZlbnRUeXBlLCBldmVudENhbGxiYWNrKVxyXG5cdHtcclxuXHRcdHZhciBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdO1xyXG5cdFx0aWYoQXJyYXkuaXNBcnJheShsaXN0ZW5lcnMpKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgaW5keDtcclxuXHRcdFx0d2hpbGUoKGluZHggPSBsaXN0ZW5lcnMuaW5kZXhPZihldmVudENhbGxiYWNrKSkgIT09IC0xKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGlzdGVuZXJzLnNwbGljZShpbmR4LCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHR0cmlnZ2VyKGV2ZW50VHlwZSwgZXZlbnRJbmZvcm1hdGlvbilcclxuXHR7XHJcblx0XHRpZihBcnJheS5pc0FycmF5KHRoaXMubGlzdGVuZXJzW2V2ZW50VHlwZV0pKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdLmZvckVhY2goKGZuKSA9PiBmbi5jYWxsKG51bGwsIGV2ZW50SW5mb3JtYXRpb24sIGV2ZW50VHlwZSkpO1xyXG5cdFx0fVxyXG5cdFx0aWYoQXJyYXkuaXNBcnJheSh0aGlzLmxpc3RlbmVyc1snKiddKSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5saXN0ZW5lcnNbJyonXS5mb3JFYWNoKChmbikgPT4gZm4uY2FsbChudWxsLCBldmVudEluZm9ybWF0aW9uLCBldmVudFR5cGUpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0X3Bhc3NFdmVudE9uKGV2ZW50SW5mb3JtYXRpb24sIGV2ZW50VHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLnRyaWdnZXIoZXZlbnRUeXBlLCBldmVudEluZm9ybWF0aW9uKTtcclxuXHR9XHJcblxyXG5cdGNsZWFudXAoKVxyXG5cdHtcclxuXHRcdE9iamVjdC5rZXlzKHRoaXMubGlzdGVuZXJzKS5mb3JFYWNoKChldnROYW1lKSA9PiB7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1tldnROYW1lXTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5saXN0ZW5lcnMgPSB7fTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRIYW5kbGVyOyIsImNsYXNzIE1lbnVCdWlsZGVyXHJcbntcclxuXHRvcHRzID0ge307XHJcblx0dGFyZ2V0ID0gbnVsbDtcclxuXHQkY29udGFpbmVyID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0cykgXHJcblx0e1xyXG5cdFx0dGhpcy5vcHRzID0gb3B0cztcclxuXHRcdHRoaXMuc2V0dXBNZW51KG9wdHMuZGVmaW5pdGlvbnMpO1xyXG5cdFx0dGhpcy5zZXR1cEV2ZW50cygpO1xyXG5cdH1cclxuXHJcblx0c2V0dXBNZW51KGRlZmluaXRpb24pXHJcblx0e1xyXG5cdFx0dGhpcy4kY29udGFpbmVyID0gJChcclxuXHRcdFx0YDxkaXYgY2xhc3M9XCJxcy1lbmdpbmUtZGQtY29udGFpbmVyXCIgdGFiaW5kZXg9XCIwXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1pbm5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC10aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInFzLWVuZ2luZS1kZC10aXRsZS10ZXh0XCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInFzLWVuZ2luZS1kZC10aXRsZS1pY29uIHFzLWljb24gcXMtaWNvbi1wZW5jaWxcIj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+YCkuYXBwZW5kVG8odGhpcy5vcHRzLmNvbnRhaW5lcik7XHJcblx0XHR0aGlzLiRjb250YWluZXIuZmluZCgnLnFzLWVuZ2luZS1kZC10aXRsZSAucXMtZW5naW5lLWRkLXRpdGxlLXRleHQnKS50ZXh0KCdCbG9jayAxJyk7ICAgICBcclxuXHRcdHRoaXMucHJvY2Vzc0RlZmluaXRpb24odGhpcy4kY29udGFpbmVyLmZpbmQoJy5xcy1lbmdpbmUtZGQtaW5uZXInKSwgZGVmaW5pdGlvbik7XHJcblx0fVxyXG5cclxuXHRwcm9jZXNzRGVmaW5pdGlvbigkcGFyZW50LCBkZWYpXHJcblx0e1xyXG4gICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShkZWYpKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGRlZi5mb3JFYWNoKHRoaXMucHJvY2Vzc0RlZmluaXRpb24uYmluZCh0aGlzLCAkcGFyZW50KSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmKHR5cGVvZiBkZWYgPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFyICRjaGlsZFBhcmVudCA9IG51bGwsIGlkID0gJHBhcmVudC5jbG9zZXN0KCdbZGF0YS1xcy1pZF0nKS5kYXRhKCdxcy1pZCcpO1xyXG4gICAgICAgICAgICAgIGlkID0gaWQgPyBpZCsnLicgOiBcIlwiO1xyXG4gICAgICAgICAgICAgIGlmKHR5cGVvZiBkZWYuZ3JvdXBpZCAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICRjaGlsZFBhcmVudCA9ICQoJzxkaXYgY2xhc3M9XCJxcy1lbmdpbmUtZGQtZ3JvdXBcIiBkYXRhLXFzLWlkPVwiJytkZWYuZ3JvdXBpZCsnXCI+PC9kaXY+JykuYXBwZW5kVG8oJHBhcmVudCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2UgaWYodHlwZW9mIGRlZi5pdGVtaWQgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgJGl0ZW0gPSAkKCc8ZGl2IGNsYXNzPVwicXMtZW5naW5lLWRkLWl0ZW1cIiBkYXRhLXFzLWlkPVwiJytpZCtkZWYuaXRlbWlkKydcIj48c3BhbiBjbGFzcz1cInFzLWVuZ2luZS1kZC1pY29uXCI+PC9zcGFuPjwvZGl2PicpLmFwcGVuZFRvKCRwYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICBpZih0eXBlb2YgZGVmLmljb24gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICRpdGVtLmZpbmQoJy5xcy1lbmdpbmUtZGQtaWNvbicpLmFkZENsYXNzKCdxcy1pY29uIHFzLWljb24tJytkZWYuaWNvbik7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGRlZi5kaXNwbGF5ICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkaXRlbS5hcHBlbmQoJzxzcGFuPicrZGVmLmRpc3BsYXkrJzwvc3Bhbj4nKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KGRlZi5pdGVtcykpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICRjaGlsZFBhcmVudCA9ICQoJzxkaXYgY2xhc3M9XCJxcy1lbmdpbmUtZGQtbW9yZVwiPjxkaXYgY2xhc3M9XCJxcy1lbmdpbmUtZGQtZXhwYW5kXCI+Jmd0OzwvZGl2PjxkaXYgY2xhc3M9XCJxcy1lbmdpbmUtZGQtZ3JvdXBcIj48L2Rpdj48L2Rpdj4nKS5hcHBlbmRUbygkaXRlbSkuZmluZCgnLnFzLWVuZ2luZS1kZC1ncm91cCcpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmKCRjaGlsZFBhcmVudCAmJiBBcnJheS5pc0FycmF5KGRlZi5pdGVtcykpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NEZWZpbml0aW9uKCRjaGlsZFBhcmVudCwgZGVmLml0ZW1zKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblx0fVxyXG5cclxuXHRzZXR1cEV2ZW50cygpXHJcblx0e1xyXG5cdFx0JCh0aGlzLm9wdHMuY29udGFpbmVyKS5vbignY29udGV4dG1lbnUnLCAoZXZ0KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRpZigkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJy5xcy1lbmdpbmUtZGQtY29udGFpbmVyJykuc2l6ZSgpPT09MClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMudGFyZ2V0ID0gZXZ0LnRhcmdldDtcclxuXHRcdFx0XHQkKCcucXMtZW5naW5lLWRkLWNvbnRhaW5lcicpLmZvY3VzKCkuY3NzKHsgJ2xlZnQnOmV2dC5jbGllbnRYKydweCcsICd0b3AnOmV2dC5jbGllbnRZKydweCd9KTtcclxuXHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLiRjb250YWluZXIub24oJ2NsaWNrJywgKGV2dCkgPT5cclxuXHRcdHtcclxuXHRcdFx0dmFyICRxc2lkID0gJChldnQudGFyZ2V0KS5jbG9zZXN0KCdbZGF0YS1xcy1pZF0nKTtcclxuXHRcdFx0aWYoJHFzaWQuc2l6ZSgpID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCQoJy5xcy1lbmdpbmUtZGQtY29udGFpbmVyJykuYmx1cigpO1xyXG5cdFx0XHRcdGlmKHRoaXMub3B0cy5ldmVudHMpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5vcHRzLmV2ZW50cy50cmlnZ2VyKCdtZW51c2VsZWN0JywgeyBcImJ1dHRvbmlkXCI6ICdtZW51LicrJHFzaWQuZGF0YSgncXMtaWQnKSwgXCJ0YXJnZXRcIjogdGhpcy50YXJnZXQgfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVCdWlsZGVyOyIsImNsYXNzIFV0aWxzIFxyXG57XHJcblx0c3RhdGljIGd1aWQoKVxyXG5cdHtcclxuXHRcdHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgciA9IE1hdGgucmFuZG9tKCkqMTZ8MCwgdiA9IGMgPT0gJ3gnID8gciA6IChyJjB4M3wweDgpO1xyXG5cdFx0ICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXRpbHM7IiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWxzLmpzXCI7XHJcbmltcG9ydCBEcmF3aW5nQm9hcmQgZnJvbSBcIi4vZHJhd2luZ2JvYXJkLmpzXCI7XHJcblxyXG5jbGFzcyBWaXJ0dWFsRE9NXHJcbntcclxuXHRndWlkcyA9IG5ldyBTZXQoKTtcclxuXHRkb20gPSBcclxuXHR7XHJcblx0XHRyb290UVNJRDogbnVsbCxcclxuXHRcdGVsZW1lbnRMb29rdXA6IHt9LFxyXG5cdFx0ZWxlbWVudHM6IHt9XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRzKVxyXG5cdHtcclxuXHRcdHRoaXMuYWRkRWxlbWVudCh7XHJcblx0XHRcdFwicG9zaXRpb25cIjogMCxcclxuXHRcdFx0XCJ0YWdcIjogb3B0cy5yb290RWxlbWVudC50YWdOYW1lLFxyXG5cdFx0XHRcIkNTU1wiOiB7fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZW5lcmF0ZUd1aWQoKVxyXG5cdHtcclxuXHRcdHZhciBndWlkID0gVXRpbHMuZ3VpZCgpO1xyXG5cdFx0d2hpbGUodGhpcy5ndWlkcy5oYXMoZ3VpZCkpZ3VpZCA9IFV0aWxzLmd1aWQoKTtcclxuXHRcdHRoaXMuZ3VpZFNldC5hZGQoZ3VpZCk7XHJcblx0XHRyZXR1cm4gZ3VpZDtcclxuXHR9XHJcblxyXG5cdGdldEVsZW1lbnRRU0lEKGRvbUVsZW1lbnQpXHJcblx0e1xyXG5cclxuXHRcdC8vIFRISVMgV0lMTCBIQVZFIFRPIFVTRSBEUkFXSU5HIEJPQVJEXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZG9tLmVsZW1lbnRMb29rdXBbZG9tRWxlbWVudF0gfHwgbnVsbDtcclxuXHR9XHJcblxyXG5cdGFkZEVsZW1lbnQob3B0cyA9IHtcclxuXHRcdFx0XCJxU0lEXCI6IG51bGwsXHJcblx0XHRcdFwicGFyZW50XCI6IG51bGwsXHJcblx0XHRcdFwicG9zaXRpb25cIjogMCxcclxuXHRcdFx0XCJ0YWdcIjogXCJcIixcclxuXHRcdFx0XCJjc3NcIjoge30sXHJcblx0XHRcdFwiYXR0clwiOiB7fVxyXG5cdFx0fSlcclxuXHR7XHJcblx0XHRpZighb3B0cy5xU0lEKVxyXG5cdFx0e1xyXG5cdFx0XHRvcHRzLnFTSUQgPSB0aGlzLmdlbmVyYXRlR3VpZCgpO1xyXG5cdFx0fVxyXG5cdFx0aWYodHlwZW9mIG9wdHMucGFyZW50ID09PSBcInN0cmluZ1wiKVxyXG5cdFx0e1xyXG5cdFx0XHRvcHRzLnBhcmVudCA9IHRoaXMuZ2V0RWxlbWVudFFTSUQob3B0cy5wYXJlbnQpO1xyXG5cdFx0fVxyXG5cdFx0aWYodHlwZW9mIG9wdHMucGFyZW50ICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0e1xyXG5cdFx0XHRpZighdGhpcy5kb20ucm9vdFFTSUQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRvbS5yb290UVNJRCA9IG9wdHMucVNJRDtcclxuXHRcdFx0XHRvcHRzLnBhcmVudCA9IG51bGw7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0b3B0cy5wYXJlbnQgPSB0aGlzLmRvbS5yb290UVNJRDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZWxlbWVudHNbb3B0cy5xU0lEXSA9IG9wdHM7XHJcblx0XHQvL3RoaXMuZWxlbWVudExvb2t1cFtvcHRzLmVsZW1lbnRdID0gb3B0cy5xU0lEOyBUSElTIFdJTEwgSEFWRSBUTyBCRSBET05FIFRIUk9VR0ggRFJBV0lORyBCT0FSRCBcclxuXHJcblx0XHRyZXR1cm4gb3B0cy5xU0lEO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlRWxlbWVudChvcHRzID0geyBcInRhZ1wiOlwiXCIsIFwiY3NzXCI6e30sIFwiYXR0clwiOnt9IH0pXHJcblx0e1xyXG5cclxuXHR9XHJcblxyXG5cdHJlbW92ZUVsZW1lbnQoKVxyXG5cdHtcclxuXHJcblx0fVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBWaXJ0dWFsRE9NOyIsImltcG9ydCBWaXJ0dWFsRE9NIGZyb20gXCIuL2xpYi92aXJ0dWFsZG9tLmpzXCI7XHJcblxyXG5jbGFzcyBQcmltYXJ5RE9NIGV4dGVuZHMgVmlydHVhbERPTVxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKHtcclxuXHRcdFx0XCJyb290RWxlbWVudFwiOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhd2luZy1ib2FyZCcpXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJpbWFyeURPTSgpOyJdfQ==
=======
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0LmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9hY3Rpb25tYW5hZ2VyLmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9jb25zdGFudHMuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2RpYWxvZ21hbmFnZXIuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2V2ZW50cXVldWUuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2V2ZW50cy9hZGRldmVudC5qcyIsIkM6L3dvcmsvUXVpY2tTaXRlL3NyYy9zY3JpcHQvZXZlbnRzL2RvbWV2ZW50LmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9nbG9iYWxldmVudHMuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2xpYi9kcmF3aW5nYm9hcmQuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2xpYi9ldmVudGhhbmRsZXIuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2xpYi9tZW51YnVpbGRlci5qcyIsIkM6L3dvcmsvUXVpY2tTaXRlL3NyYy9zY3JpcHQvbGliL3V0aWxzLmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9saWIvdmlydHVhbGRvbS5qcyIsIkM6L3dvcmsvUXVpY2tTaXRlL3NyYy9zY3JpcHQvcHJpbWFyeWRvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztzQ0NBd0IsNkJBQTZCOzs7O3FDQUMzQiwyQkFBMkI7Ozs7cUNBQzNCLDJCQUEyQjs7OztvQ0FDNUIsMEJBQTBCOzs7O2tDQUM1Qix3QkFBd0I7Ozs7a0NBQ3hC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RUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLEtBQUssRUFBRSxDQUNuRCxFQUFDLEVBQ0YsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUMzQixFQUFFLFFBQVEsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQ2hGLEVBQUUsUUFBUSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsVUFBVSxFQUFFLEVBQzdDLEVBQUUsUUFBUSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxFQUFFLEVBQ3JDLEVBQUUsUUFBUSxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsU0FBUyxFQUFFLEVBQzNDLEVBQUUsUUFBUSxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUMsT0FBTyxFQUFFLEVBQ3ZDLEVBQUUsUUFBUSxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUMsT0FBTyxFQUFFLENBQ3ZDLEVBQUMsRUFDRixFQUFFLFFBQVEsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsT0FBTyxFQUFFLENBQ3pELEVBQUMsRUFDRixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQzVCLEVBQUUsUUFBUSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQzNELEVBQUUsUUFBUSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsUUFBUSxFQUFFLGFBQWEsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQ3BFLEVBQUUsUUFBUSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsYUFBYSxFQUFFLEVBQzlDLEVBQUUsUUFBUSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsY0FBYyxFQUFFLENBQ2pELEVBQUMsRUFDRixFQUFFLFFBQVEsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLFFBQVEsRUFBRSxh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LENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztHQUMxQzs7O1FBbEZJLFVBQVU7OztxQkFxRkQsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQ3hGRixxQkFBcUI7Ozs7SUFFdEMsVUFBVTtXQUFWLFVBQVU7O0FBRUosVUFGTixVQUFVLEdBR2Y7d0JBSEssVUFBVTs7QUFJZCw2QkFKSSxVQUFVLDZDQUlOO0VBQ1I7O1FBTEksVUFBVTs7O3FCQVNELElBQUksVUFBVSxFQUFFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBNZW51QnVpbGRlciBmcm9tIFwiLi9zY3JpcHQvbGliL21lbnVidWlsZGVyLmpzXCI7XHJcbmltcG9ydCBEaWFsb2dNYW5hZ2VyIGZyb20gXCIuL3NjcmlwdC9kaWFsb2dtYW5hZ2VyLmpzXCI7XHJcbmltcG9ydCBBY3Rpb25NYW5hZ2VyIGZyb20gXCIuL3NjcmlwdC9hY3Rpb25tYW5hZ2VyLmpzXCI7XHJcbmltcG9ydCBHbG9iYWxFdmVudHMgZnJvbSBcIi4vc2NyaXB0L2dsb2JhbGV2ZW50cy5qc1wiO1xyXG5pbXBvcnQgRXZlbnRRdWV1ZSBmcm9tIFwiLi9zY3JpcHQvZXZlbnRxdWV1ZS5qc1wiO1xyXG5pbXBvcnQgUHJpbWFyeURPTSBmcm9tIFwiLi9zY3JpcHQvcHJpbWFyeWRvbS5qc1wiO1xyXG5pbXBvcnQgeyBNZW51RGVmaW5pdGlvbnMgfSBmcm9tIFwiLi9zY3JpcHQvY29uc3RhbnRzLmpzXCI7XHJcblxyXG5jbGFzcyBNYWluXHJcbntcclxuXHRnbG9iYWxFdmVudHMgPSBudWxsO1xyXG5cdERPTSA9IG51bGw7XHJcblx0bWVudUJ1aWxkZXIgPSBudWxsO1xyXG5cdGV2ZW50UXVldWUgPSBudWxsO1xyXG5cdGRpYWxvZ01hbmFnZXIgPSBudWxsO1xyXG5cdGFjdGlvbk1hbmFnZXIgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0dGhpcy5nbG9iYWxFdmVudHMgPSBHbG9iYWxFdmVudHM7XHJcblx0XHR0aGlzLkRPTSA9IFByaW1hcnlET007XHJcblx0XHR0aGlzLkRPTS5zZXR1cCh7IFwicm9vdEVsZW1lbnRcIjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3FzLWRyYXdpbmctYm9hcmQnKSB9KTtcclxuXHRcdHRoaXMubWVudUJ1aWxkZXIgPSBuZXcgTWVudUJ1aWxkZXIoeyBcImRlZmluaXRpb25zXCI6TWVudURlZmluaXRpb25zLCBcImNvbnRhaW5lclwiOlwiYm9keVwiLCBcImV2ZW50c1wiOnRoaXMuZ2xvYmFsRXZlbnRzIH0pO1xyXG5cdFx0dGhpcy5ldmVudFF1ZXVlID0gbmV3IEV2ZW50UXVldWUoe30pO1xyXG5cdFx0dGhpcy5kaWFsb2dNYW5hZ2VyID0gbmV3IERpYWxvZ01hbmFnZXIoeyBcImNvbnRhaW5lclwiOlwiYm9keVwiIH0pO1xyXG5cdFx0dGhpcy5hY3Rpb25NYW5hZ2VyID0gbmV3IEFjdGlvbk1hbmFnZXIoeyB9KTtcclxuXHR9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB3aW5kb3cuYXBwID0gbmV3IE1haW4oKSwgZmFsc2UpOyIsImltcG9ydCBFdmVudHMgZnJvbSBcIi4vZ2xvYmFsZXZlbnRzLmpzXCI7XHJcbmltcG9ydCBBZGRFdmVudCBmcm9tIFwiLi9ldmVudHMvYWRkZXZlbnQuanNcIjtcclxuaW1wb3J0IFByaW1hcnlET00gZnJvbSBcIi4vcHJpbWFyeWRvbS5qc1wiO1xyXG5cclxuY2xhc3MgQWN0aW9uTWFuYWdlclxyXG57XHJcblxyXG5cdGV2ZW50TWV0aG9kVHJhbnNsYXRpb24gPSBcclxuXHR7XHJcblx0XHRcIm1lbnUuZG9tLmFkZFwiOiBBZGRFdmVudFxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdEV2ZW50cy5vbignbWVudXNlbGVjdCcsIDo6dGhpcy5oYW5kbGVTZWxlY3RFdmVudCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTZWxlY3RFdmVudChldnQpXHJcblx0e1xyXG5cdFx0aWYodHlwZW9mIHRoaXMuZXZlbnRNZXRob2RUcmFuc2xhdGlvbltldnQuYnV0dG9uaWRdICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgZG9tRXZlbnQgPSBuZXcgdGhpcy5ldmVudE1ldGhvZFRyYW5zbGF0aW9uW2V2dC5idXR0b25pZF0oZXZ0LCBQcmltYXJ5RE9NKTtcclxuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2RvbWV2ZW50JywgZG9tRXZlbnQpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uTWFuYWdlcjsiLCJleHBvcnQgY29uc3QgTG9nZ2luZyA9IHtcclxuXHRcIlZlcmJvc2VcIjogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnVEZWZpbml0aW9ucyA9IFtcclxuXHR7IFwiZ3JvdXBpZFwiOiBcImVsZW1lbnRcIiwgXCJpdGVtc1wiOiBbXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJ0ZXh0XCIsIFwiZGlzcGxheVwiOlwiVGV4dFwiLCBcImljb25cIjpcImxldHRlclwiIH0sXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJzaXplXCIsIFwiZGlzcGxheVwiOlwiU2l6ZVwiLCBcImljb25cIjpcImV4cGFuZFwiIH0sXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJwb3NpdGlvblwiLCBcImRpc3BsYXlcIjpcIlBvc2l0aW9uXCIsIFwiaWNvblwiOlwiY3Vyc29yXCIgfSxcclxuXHRcdHsgXCJpdGVtaWRcIjpcImJhY2tncm91bmRcIiwgXCJkaXNwbGF5XCI6XCJCYWNrZ3JvdW5kXCIsIFwiaWNvblwiOlwicGFpbnRcIiB9LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwiYm9yZGVyXCIsIFwiZGlzcGxheVwiOlwiQm9yZGVyXCIsIFwiaWNvblwiOlwiZW1wdHlcIiB9LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwibW9yZVwiLCBcImRpc3BsYXlcIjpcIk1vcmVcIiwgXCJpY29uXCI6XCJjb2dcIiB9XHJcblx0XX0sXHJcblx0eyBcImdyb3VwaWRcIjogXCJkb21cIiwgXCJpdGVtc1wiOltcclxuXHRcdHsgXCJpdGVtaWRcIjpcImFkZFwiLCBcImRpc3BsYXlcIjpcIkNyZWF0ZVwiLCBcImljb25cIjpcInBsdXNcIiwgXCJzZWxlY3RjaGlsZFwiOnRydWUsIFwiaXRlbXNcIjpbXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcInN0YW5kYXJkXCIsIFwiZGlzcGxheVwiOlwiU3RhbmRhcmRcIiB9LFxyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJsaW5rXCIsIFwiZGlzcGxheVwiOlwiTGlua1wiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcInRleHRib3hcIiwgXCJkaXNwbGF5XCI6XCJUZXh0Ym94XCIgfSxcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwiaW1hZ2VcIiwgXCJkaXNwbGF5XCI6XCJJbWFnZVwiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcInZpZGVvXCIsIFwiZGlzcGxheVwiOlwiVmlkZW9cIiB9LFxyXG5cdFx0XX0sXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJyZW1vdmVcIiwgXCJkaXNwbGF5XCI6XCJSZW1vdmVcIiwgXCJpY29uXCI6XCJtaW51c1wiIH1cclxuXHRdfSxcclxuXHR7IFwiZ3JvdXBpZFwiOiBcIm1lbnVcIiwgXCJpdGVtc1wiOltcclxuXHRcdHsgXCJpdGVtaWRcIjpcImZpbGVcIiwgXCJkaXNwbGF5XCI6XCJGaWxlXCIsIFwiaWNvblwiOlwiZmlsZVwiLCBcIml0ZW1zXCI6W1xyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJleHBvcnRcIiwgXCJkaXNwbGF5XCI6XCJFeHBvcnRcIiwgXCJzZWxlY3RjaGlsZFwiOnRydWUsIFwiaXRlbXNcIjpbXHJcblx0XHRcdFx0eyBcIml0ZW1pZFwiOlwic2luZ2xlXCIsIFwiZGlzcGxheVwiOlwiU2luZ2xlIEhUTUxcIiB9LFxyXG5cdFx0XHRcdHsgXCJpdGVtaWRcIjpcInNlcGFyYXRlXCIsIFwiZGlzcGxheVwiOlwiU2VwYXJhdGUgQ1NTXCIgfVxyXG5cdFx0XHRdfSxcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwiaW1wb3J0XCIsIFwiZGlzcGxheVwiOlwiSW1wb3J0XCIsIFwic2VsZWN0Y2hpbGRcIjp0cnVlLCBcIml0ZW1zXCI6W1xyXG5cdFx0XHRcdHsgXCJpdGVtaWRcIjpcInNpbmdsZVwiLCBcImRpc3BsYXlcIjpcIlNpbmdsZSBIVE1MXCIgfSxcclxuXHRcdFx0XHR7IFwiaXRlbWlkXCI6XCJzZXBhcmF0ZVwiLCBcImRpc3BsYXlcIjpcIlNlcGFyYXRlIENTU1wiIH1cclxuXHRcdFx0XX1cclxuXHRcdF19LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwiZWRpdFwiLCBcImRpc3BsYXlcIjpcIkVkaXRcIiwgXCJpY29uXCI6XCJjbGlwYm9hcmRcIiwgXCJpdGVtc1wiOltcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwidW5kb1wiLCBcImRpc3BsYXlcIjpcIlVuZG9cIiB9LFxyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJyZWRvXCIsIFwiZGlzcGxheVwiOlwiUmVkb1wiIH1cclxuXHRcdF19LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwiYXNzZXRcIiwgXCJkaXNwbGF5XCI6XCJBc3NldHNcIiwgXCJpY29uXCI6XCJwaWN0dXJlc1wiLCBcInNlbGVjdGNoaWxkXCI6dHJ1ZSwgXCJpdGVtc1wiOltcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwiYWxsXCIsIFwiZGlzcGxheVwiOlwiQWxsXCIgfSxcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwiZm9udHNcIiwgXCJkaXNwbGF5XCI6XCJGb250c1wiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcImNvbG9yc1wiLCBcImRpc3BsYXlcIjpcIkNvbG9yc1wiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcImltYWdlc1wiLCBcImRpc3BsYXlcIjpcIkltYWdlc1wiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcInZpZGVvc1wiLCBcImRpc3BsYXlcIjpcIlZpZGVvc1wiIH1cclxuXHRcdF19LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwiaGVscFwiLCBcImRpc3BsYXlcIjpcIkhlbHBcIiwgXCJpY29uXCI6XCJoZWxwXCIgfVxyXG5cdF19LFxyXG5dOyIsImltcG9ydCBFdmVudHMgZnJvbSBcIi4vZ2xvYmFsZXZlbnRzLmpzXCI7XHJcblxyXG5jbGFzcyBEaWFsb2dNYW5hZ2VyXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERpYWxvZ01hbmFnZXI7IiwiaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9nbG9iYWxldmVudHMuanNcIjtcclxuXHJcbmNsYXNzIEV2ZW50UXVldWVcclxue1xyXG5cdGV2ZW50UXVldWUgPSBbXTtcclxuXHRldmVudFF1ZXVlT2Zmc2V0ID0gMDtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdEV2ZW50cy5vbignZG9tZXZlbnQnLCA6OnRoaXMuYWRkVG9RdWV1ZSk7XHJcblx0fVxyXG5cclxuXHRhZGRUb1F1ZXVlKGV2dClcclxuXHR7XHJcblx0XHRpZih0aGlzLmV2ZW50UXVldWVPZmZzZXQgIT09IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIE5lZWQgdG8gZmlyc3QgZGlzY2FyZCAndW5kby1lZCcgY2hhbmdlcywgYW5kIG1vdmUgb2Zmc2V0IGJhY2sgdG8gMFxyXG5cdFx0XHR2YXIgcmVtb3ZlZEV2dHMgPSB0aGlzLmV2ZW50UXVldWUuc3BsaWNlKC10aGlzLmV2ZW50UXVldWVPZmZzZXQsIHRoaXMuZXZlbnRRdWV1ZU9mZnNldCk7XHJcblx0XHRcdHJlbW92ZWRFdnRzLmZvckVhY2gocmVtb3ZlRXZ0ID0+IHJlbW92ZUV2dC5kZXN0b3J5RXZlbnQoKSk7XHJcblx0XHRcdHRoaXMuZXZlbnRRdWV1ZU9mZnNldCA9IDA7XHJcblx0XHR9XHJcblx0XHR0aGlzLmV2ZW50UXVldWUucHVzaChldnQpO1xyXG5cdFx0ZXZ0LnBlcmZvcm1FdmVudEFjdGlvbigpO1xyXG5cdH1cclxuXHJcblx0dW5kb0Zyb21RdWV1ZSgpXHJcblx0e1xyXG5cdFx0dmFyIG9mZnNldCA9ICh0aGlzLmV2ZW50UXVldWUubGVuZ3RoLTEpLXRoaXMuZXZlbnRRdWV1ZU9mZnNldDtcclxuXHRcdGlmKG9mZnNldCA+PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgZXZ0ID0gdGhpcy5ldmVudFF1ZXVlW29mZnNldF07XHJcblx0XHRcdGV2dC5yZXZlcnRFdmVudEFjdGlvbigpO1xyXG5cdFx0XHR0aGlzLmV2ZW50UXVldWVPZmZzZXQrKztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlZG9Gcm9tUXVldWUoKVxyXG5cdHtcclxuXHRcdGlmKHRoaXMuZXZlbnRRdWV1ZU9mZnNldCAhPT0gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5ldmVudFF1ZXVlT2Zmc2V0LS07XHJcblx0XHRcdHZhciBvZmZzZXQgPSAodGhpcy5ldmVudFF1ZXVlLmxlbmd0aC0xKS10aGlzLmV2ZW50UXVldWVPZmZzZXQ7XHJcblx0XHRcdHZhciBldnQgPSB0aGlzLmV2ZW50UXVldWVbb2Zmc2V0XTtcclxuXHRcdFx0ZXZ0LnBlcmZvcm1FdmVudEFjdGlvbigpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRRdWV1ZTsiLCJpbXBvcnQgRG9tRXZlbnQgZnJvbSBcIi4vZG9tZXZlbnQuanNcIjtcclxuXHJcbmNsYXNzIEFkZEV2ZW50IGV4dGVuZHMgRG9tRXZlbnRcclxue1xyXG5cdGRvbSA9IG51bGw7XHJcblx0cVNJRCA9IG51bGw7XHJcblx0cGFyZW50ID0gbnVsbDtcclxuXHJcblx0ZGVmYXVsdENTUyA9IFxyXG5cdHtcclxuXHRcdFwid2lkdGhcIjpcIjEwJVwiLFxyXG5cdFx0XCJoZWlnaHRcIjpcIjMwJVwiLFxyXG5cdFx0XCJiYWNrZ3JvdW5kXCI6XCIjRURFREZGXCIsXHJcblx0XHRcImJvcmRlclwiOiBcIjFweCBzb2xpZCBncmF5XCIsXHJcblx0XHRcImJveC1zaXppbmdcIjogXCJib3JkZXItYm94XCIsXHJcblx0XHRcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIlxyXG5cdH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKGV2dE9wdHMsIGRvbSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuZG9tID0gZG9tO1xyXG5cdFx0dGhpcy5xU0lEID0gdGhpcy5kb20uZ2VuZXJhdGVHdWlkKCk7XHJcblx0XHR0aGlzLnBhcmVudCA9IGV2dE9wdHMudGFyZ2V0O1xyXG5cdH1cclxuXHJcblx0cGVyZm9ybUV2ZW50QWN0aW9uKClcclxuXHR7XHJcblx0XHR0aGlzLmRvbS5hZGRFbGVtZW50KHtcclxuXHRcdFx0XCJxU0lEXCI6IHRoaXMucVNJRCxcclxuXHRcdFx0XCJwYXJlbnRcIjogdGhpcy5wYXJlbnQsXHJcblx0XHRcdFwicG9zaXRpb25cIjogMCxcclxuXHRcdFx0XCJ0YWdcIjogXCJkaXZcIixcclxuXHRcdFx0XCJjc3NcIjogdGhpcy5kZWZhdWx0Q1NTXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJldmVydEV2ZW50QWN0aW9uKClcclxuXHR7XHJcblx0XHR0aGlzLmRvbS5yZW1vdmVFbGVtZW50KHRoaXMucVNJRCk7XHJcblx0fVxyXG5cclxuXHRkZXN0cm95KClcclxuXHR7XHJcblx0XHR0aGlzLmRvbSA9IG51bGw7XHJcblx0XHR0aGlzLnFTSUQgPSBudWxsO1xyXG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkRXZlbnQ7IiwiY2xhc3MgRG9tRXZlbnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblxyXG5cdH1cclxuXHRcclxuXHRwZXJmb3JtRXZlbnRBY3Rpb24oKVxyXG5cdHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbSBFdmVudCBwZXJmb3JtRXZlbnRBY3Rpb24gTWV0aG9kIE5vdCBJbXBsZW1lbnRlZCFcIik7XHJcblx0fVxyXG5cclxuXHRyZXZlcnRFdmVudEFjdGlvbigpXHJcblx0e1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tIEV2ZW50IHJldmVydEV2ZW50QWN0aW9uIE1ldGhvZCBOb3QgSW1wbGVtZW50ZWQhXCIpO1xyXG5cdH1cclxuXHJcblx0ZGVzdG9yeUV2ZW50KClcclxuXHR7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEb20gRXZlbnQgZGVzdG9yeUV2ZW50IE1ldGhvZCBOb3QgSW1wbGVtZW50ZWQhXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9tRXZlbnQ7IiwiaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tIFwiLi9saWIvZXZlbnRoYW5kbGVyLmpzXCI7XHJcbmltcG9ydCB7IExvZ2dpbmcgfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcclxuXHJcbmNsYXNzIEdsb2JhbEV2ZW50SGFuZGxlciBleHRlbmRzIEV2ZW50SGFuZGxlclxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnNldHVwTG9nZ2luZygpO1xyXG5cdH1cclxuXHJcblx0c2V0dXBMb2dnaW5nKClcclxuXHR7XHJcblx0XHRpZihMb2dnaW5nLlZlcmJvc2UpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMub24oJyonLCBmdW5jdGlvbihldnQsIGV2ZW50TmFtZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGV2ZW50TmFtZSwgZXZ0KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgR2xvYmFsRXZlbnRIYW5kbGVyKCk7IiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWxzLmpzXCI7XHJcblxyXG5jbGFzcyBEcmF3aW5nQm9hcmRcclxue1xyXG5cclxuXHRyb290RWxlbWVudCA9IG51bGw7XHJcblx0aWRMaXN0ID0gW107XHJcblx0ZWxlbWVudElkTG9va3VwID0ge307XHJcblx0aWRFbGVtZW50TG9va3VwID0ge307XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdHMpXHJcblx0e1xyXG5cdFx0dGhpcy5yb290RWxlbWVudCA9IG9wdHMucm9vdEVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVVbmlxdWVJZCgpXHJcblx0e1xyXG5cdFx0dmFyIGd1aWQgPSBVdGlscy5ndWlkKCk7XHJcblx0XHR3aGlsZSh0aGlzLmlkTGlzdC5pbmRleE9mKGd1aWQpICE9PSAtMSlndWlkID0gVXRpbHMuZ3VpZCgpO1xyXG5cdFx0dGhpcy5pZExpc3QucHVzaChndWlkKTtcclxuXHRcdHJldHVybiBndWlkO1xyXG5cdH1cclxuXHJcblx0ZmluZEVsZW1lbnRzSWQoZG9tRWxlbWVudClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50SWRMb29rdXBbZG9tRWxlbWVudF0gfHwgbnVsbDtcclxuXHR9XHJcblxyXG5cdGFkZEVsZW1lbnQoaWQsIG9wdHMpXHJcblx0e1xyXG5cdFx0dmFyIHBhcmVudEVsID0gIW9wdHMucGFyZW50ID8gdGhpcy5yb290RWxlbWVudCA6IHRoaXMuaWRFbGVtZW50TG9va3VwW29wdHMucGFyZW50XTtcclxuXHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob3B0cy50YWcgfHwgXCJkaXZcIik7XHJcblxyXG5cdFx0aWYob3B0cy5hdHRyKXRoaXMuc2V0QXR0cmlidXRlcyhlbCwgb3B0cy5hdHRyKTtcclxuXHRcdGlmKG9wdHMuY3NzKXRoaXMuc2V0U3R5bGVzKGVsLCBvcHRzLmNzcyk7XHJcblxyXG5cdFx0aWYocGFyZW50RWwuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSBwYXJlbnRFbC5hcHBlbmRDaGlsZChlbCk7XHJcblx0XHRlbHNlIHBhcmVudEVsLmluc2VydEJlZm9yZShlbCwgcGFyZW50RWwuY2hpbGRyZW5bb3B0cy5wb3NpdGlvbiB8fCAwXSk7XHJcblxyXG5cdFx0dGhpcy5lbGVtZW50SWRMb29rdXBbZWxdID0gaWQ7XHJcblx0XHR0aGlzLmlkRWxlbWVudExvb2t1cFtpZF0gPSBlbDtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUVsZW1lbnQoaWQsIG9wdHMpXHJcblx0e1xyXG5cclxuXHR9XHJcblxyXG5cdHJlbW92ZUVsZW1lbnQoaWQpXHJcblx0e1xyXG5cclxuXHR9XHJcblxyXG5cdHNldFN0eWxlcyhlbCwgY3NzUHJvcGVydGllcylcclxuXHR7XHJcblx0XHQkKGVsKS5jc3MoY3NzUHJvcGVydGllcyk7XHJcblx0fVxyXG5cclxuXHRzZXRBdHRyaWJ1dGVzKGVsLCBhdHRyUHJvcGVydGllcylcclxuXHR7XHJcblx0XHQkKGVsKS5hdHRyKGF0dHJQcm9wZXJ0aWVzKTtcclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERyYXdpbmdCb2FyZDsiLCJjbGFzcyBFdmVudEhhbmRsZXJcclxue1xyXG5cdElTX0VWRU5UX0hBTkRMRVIgPSB0cnVlO1xyXG5cdGxpc3RlbmVycyA9IHt9O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRvbihldmVudFR5cGUsIGV2ZW50Q2FsbGJhY2spXHJcblx0e1xyXG5cdFx0dmFyIGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW2V2ZW50VHlwZV07XHJcblx0XHRpZighQXJyYXkuaXNBcnJheShsaXN0ZW5lcnMpKVxyXG5cdFx0e1xyXG5cdFx0XHRsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdID0gW107XHJcblx0XHR9XHJcblx0XHR0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdLnB1c2goZXZlbnRDYWxsYmFjayk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdG9mZihldmVudFR5cGUsIGV2ZW50Q2FsbGJhY2spXHJcblx0e1xyXG5cdFx0dmFyIGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW2V2ZW50VHlwZV07XHJcblx0XHRpZihBcnJheS5pc0FycmF5KGxpc3RlbmVycykpXHJcblx0XHR7XHJcblx0XHRcdHZhciBpbmR4O1xyXG5cdFx0XHR3aGlsZSgoaW5keCA9IGxpc3RlbmVycy5pbmRleE9mKGV2ZW50Q2FsbGJhY2spKSAhPT0gLTEpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGluZHgsIDEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHRyaWdnZXIoZXZlbnRUeXBlLCBldmVudEluZm9ybWF0aW9uKVxyXG5cdHtcclxuXHRcdGlmKEFycmF5LmlzQXJyYXkodGhpcy5saXN0ZW5lcnNbZXZlbnRUeXBlXSkpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubGlzdGVuZXJzW2V2ZW50VHlwZV0uZm9yRWFjaCgoZm4pID0+IGZuLmNhbGwobnVsbCwgZXZlbnRJbmZvcm1hdGlvbiwgZXZlbnRUeXBlKSk7XHJcblx0XHR9XHJcblx0XHRpZihBcnJheS5pc0FycmF5KHRoaXMubGlzdGVuZXJzWycqJ10pKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmxpc3RlbmVyc1snKiddLmZvckVhY2goKGZuKSA9PiBmbi5jYWxsKG51bGwsIGV2ZW50SW5mb3JtYXRpb24sIGV2ZW50VHlwZSkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRfcGFzc0V2ZW50T24oZXZlbnRJbmZvcm1hdGlvbiwgZXZlbnRUeXBlKVxyXG5cdHtcclxuXHRcdHRoaXMudHJpZ2dlcihldmVudFR5cGUsIGV2ZW50SW5mb3JtYXRpb24pO1xyXG5cdH1cclxuXHJcblx0Y2xlYW51cCgpXHJcblx0e1xyXG5cdFx0T2JqZWN0LmtleXModGhpcy5saXN0ZW5lcnMpLmZvckVhY2goKGV2dE5hbWUpID0+IHtcclxuXHRcdFx0ZGVsZXRlIHRoaXMubGlzdGVuZXJzW2V2dE5hbWVdO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmxpc3RlbmVycyA9IHt9O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXI7IiwiY2xhc3MgTWVudUJ1aWxkZXJcclxue1xyXG5cdG9wdHMgPSB7fTtcclxuXHR0YXJnZXQgPSBudWxsO1xyXG5cdCRjb250YWluZXIgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRzKSBcclxuXHR7XHJcblx0XHR0aGlzLm9wdHMgPSBvcHRzO1xyXG5cdFx0dGhpcy5zZXR1cE1lbnUob3B0cy5kZWZpbml0aW9ucyk7XHJcblx0XHR0aGlzLnNldHVwRXZlbnRzKCk7XHJcblx0fVxyXG5cclxuXHRzZXR1cE1lbnUoZGVmaW5pdGlvbilcclxuXHR7XHJcblx0XHR0aGlzLiRjb250YWluZXIgPSAkKFxyXG5cdFx0XHRgPGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1jb250YWluZXJcIiB0YWJpbmRleD1cIjBcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicXMtZW5naW5lLWRkLWlubmVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicXMtZW5naW5lLWRkLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicXMtZW5naW5lLWRkLXRpdGxlLXRleHRcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicXMtZW5naW5lLWRkLXRpdGxlLWljb24gcXMtaWNvbiBxcy1pY29uLXBlbmNpbFwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5gKS5hcHBlbmRUbyh0aGlzLm9wdHMuY29udGFpbmVyKTtcclxuXHRcdHRoaXMuJGNvbnRhaW5lci5maW5kKCcucXMtZW5naW5lLWRkLXRpdGxlIC5xcy1lbmdpbmUtZGQtdGl0bGUtdGV4dCcpLnRleHQoJ0Jsb2NrIDEnKTsgICAgIFxyXG5cdFx0dGhpcy5wcm9jZXNzRGVmaW5pdGlvbih0aGlzLiRjb250YWluZXIuZmluZCgnLnFzLWVuZ2luZS1kZC1pbm5lcicpLCBkZWZpbml0aW9uKTtcclxuXHR9XHJcblxyXG5cdHByb2Nlc3NEZWZpbml0aW9uKCRwYXJlbnQsIGRlZilcclxuXHR7XHJcbiAgICAgICAgICBpZihBcnJheS5pc0FycmF5KGRlZikpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZGVmLmZvckVhY2godGhpcy5wcm9jZXNzRGVmaW5pdGlvbi5iaW5kKHRoaXMsICRwYXJlbnQpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYodHlwZW9mIGRlZiA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YXIgJGNoaWxkUGFyZW50ID0gbnVsbCwgaWQgPSAkcGFyZW50LmNsb3Nlc3QoJ1tkYXRhLXFzLWlkXScpLmRhdGEoJ3FzLWlkJyk7XHJcbiAgICAgICAgICAgICAgaWQgPSBpZCA/IGlkKycuJyA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgaWYodHlwZW9mIGRlZi5ncm91cGlkICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgJGNoaWxkUGFyZW50ID0gJCgnPGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1ncm91cFwiIGRhdGEtcXMtaWQ9XCInK2RlZi5ncm91cGlkKydcIj48L2Rpdj4nKS5hcHBlbmRUbygkcGFyZW50KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZSBpZih0eXBlb2YgZGVmLml0ZW1pZCAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciAkaXRlbSA9ICQoJzxkaXYgY2xhc3M9XCJxcy1lbmdpbmUtZGQtaXRlbVwiIGRhdGEtcXMtaWQ9XCInK2lkK2RlZi5pdGVtaWQrJ1wiPjxzcGFuIGNsYXNzPVwicXMtZW5naW5lLWRkLWljb25cIj48L3NwYW4+PC9kaXY+JykuYXBwZW5kVG8oJHBhcmVudCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBkZWYuaWNvbiAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJGl0ZW0uZmluZCgnLnFzLWVuZ2luZS1kZC1pY29uJykuYWRkQ2xhc3MoJ3FzLWljb24gcXMtaWNvbi0nK2RlZi5pY29uKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZih0eXBlb2YgZGVmLmRpc3BsYXkgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICRpdGVtLmFwcGVuZCgnPHNwYW4+JytkZWYuZGlzcGxheSsnPC9zcGFuPicpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoZGVmLml0ZW1zKSlcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJGNoaWxkUGFyZW50ID0gJCgnPGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1tb3JlXCI+PGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1leHBhbmRcIj4mZ3Q7PC9kaXY+PGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1ncm91cFwiPjwvZGl2PjwvZGl2PicpLmFwcGVuZFRvKCRpdGVtKS5maW5kKCcucXMtZW5naW5lLWRkLWdyb3VwJyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYoJGNoaWxkUGFyZW50ICYmIEFycmF5LmlzQXJyYXkoZGVmLml0ZW1zKSlcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0RlZmluaXRpb24oJGNoaWxkUGFyZW50LCBkZWYuaXRlbXMpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHR9XHJcblxyXG5cdHNldHVwRXZlbnRzKClcclxuXHR7XHJcblx0XHQkKHRoaXMub3B0cy5jb250YWluZXIpLm9uKCdjb250ZXh0bWVudScsIChldnQpID0+XHJcblx0XHR7XHJcblx0XHRcdGlmKCQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLnFzLWVuZ2luZS1kZC1jb250YWluZXInKS5zaXplKCk9PT0wKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy50YXJnZXQgPSBldnQudGFyZ2V0O1xyXG5cdFx0XHRcdCQoJy5xcy1lbmdpbmUtZGQtY29udGFpbmVyJykuZm9jdXMoKS5jc3MoeyAnbGVmdCc6ZXZ0LmNsaWVudFgrJ3B4JywgJ3RvcCc6ZXZ0LmNsaWVudFkrJ3B4J30pO1xyXG5cdFx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuJGNvbnRhaW5lci5vbignY2xpY2snLCAoZXZ0KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgJHFzaWQgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJ1tkYXRhLXFzLWlkXScpO1xyXG5cdFx0XHRpZigkcXNpZC5zaXplKCkgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0JCgnLnFzLWVuZ2luZS1kZC1jb250YWluZXInKS5ibHVyKCk7XHJcblx0XHRcdFx0aWYodGhpcy5vcHRzLmV2ZW50cylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLm9wdHMuZXZlbnRzLnRyaWdnZXIoJ21lbnVzZWxlY3QnLCB7IFwiYnV0dG9uaWRcIjogJ21lbnUuJyskcXNpZC5kYXRhKCdxcy1pZCcpLCBcInRhcmdldFwiOiB0aGlzLnRhcmdldCB9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUJ1aWxkZXI7IiwiY2xhc3MgVXRpbHMgXHJcbntcclxuXHRzdGF0aWMgZ3VpZCgpXHJcblx0e1xyXG5cdFx0cmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+XHJcblx0XHR7XHJcblx0XHRcdHZhciByID0gTWF0aC5yYW5kb20oKSoxNnwwLCB2ID0gYyA9PSAneCcgPyByIDogKHImMHgzfDB4OCk7XHJcblx0XHQgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVdGlsczsiLCJpbXBvcnQgRHJhd2luZ0JvYXJkIGZyb20gXCIuL2RyYXdpbmdib2FyZC5qc1wiO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gXCIuL2V2ZW50aGFuZGxlci5qc1wiO1xyXG5cclxuY2xhc3MgVmlydHVhbERPTSBleHRlbmRzIEV2ZW50SGFuZGxlclxyXG57XHJcblx0ZHJhd2luZyA9IG51bGw7XHJcblx0ZG9tID0gXHJcblx0e1xyXG5cdFx0cm9vdFFTSUQ6IG51bGwsXHJcblx0XHRlbGVtZW50TG9va3VwOiB7fSxcclxuXHRcdGVsZW1lbnRzOiB7fVxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3Iob3B0cylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0aWYob3B0cyl0aGlzLnNldHVwKG9wdHMpO1xyXG5cdH1cclxuXHJcblx0c2V0dXAob3B0cylcclxuXHR7XHJcblx0XHR0aGlzLmRyYXdpbmcgPSBuZXcgRHJhd2luZ0JvYXJkKHsgXCJyb290RWxlbWVudFwiOiBvcHRzLnJvb3RFbGVtZW50IH0pO1xyXG5cdFx0dGhpcy5hZGRFbGVtZW50KHtcclxuXHRcdFx0XCJwb3NpdGlvblwiOiAwLFxyXG5cdFx0XHRcInRhZ1wiOiBcImRpdlwiLFxyXG5cdFx0XHRcImNzc1wiOiB7IFwid2lkdGhcIjogXCIxMDAlXCIsIFwiaGVpZ2h0XCI6XCIxMDAlXCIsIFwiYmFja2dyb3VuZFwiOlwiI2ZmZlwiIH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2VuZXJhdGVHdWlkKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kcmF3aW5nLmNyZWF0ZVVuaXF1ZUlkKCk7XHJcblx0fVxyXG5cclxuXHRnZXRFbGVtZW50UVNJRChkb21FbGVtZW50KVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRyYXdpbmcuZmluZEVsZW1lbnRzSWQoZG9tRWxlbWVudCkgfHwgbnVsbDtcclxuXHR9XHJcblxyXG5cdGFkZEVsZW1lbnQob3B0cyA9IHsgXCJxU0lEXCI6IG51bGwsIFwicGFyZW50XCI6IG51bGwsIFwicG9zaXRpb25cIjogMCwgXCJ0YWdcIjogXCJcIiwgXCJjc3NcIjoge30sIFwiYXR0clwiOiB7fSB9KVxyXG5cdHtcclxuXHRcdGlmKCFvcHRzLnFTSUQpXHJcblx0XHR7XHJcblx0XHRcdG9wdHMucVNJRCA9IHRoaXMuZ2VuZXJhdGVHdWlkKCk7XHJcblx0XHR9XHJcblx0XHRpZih0eXBlb2Ygb3B0cy5wYXJlbnQgPT09IFwic3RyaW5nXCIpXHJcblx0XHR7XHJcblx0XHRcdG9wdHMucGFyZW50ID0gdGhpcy5nZXRFbGVtZW50UVNJRChvcHRzLnBhcmVudCk7XHJcblx0XHR9XHJcblx0XHRpZih0eXBlb2Ygb3B0cy5wYXJlbnQgIT09IFwic3RyaW5nXCIpXHJcblx0XHR7XHJcblx0XHRcdGlmKCF0aGlzLmRvbS5yb290UVNJRClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZG9tLnJvb3RRU0lEID0gb3B0cy5xU0lEO1xyXG5cdFx0XHRcdG9wdHMucGFyZW50ID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRvcHRzLnBhcmVudCA9IHRoaXMuZG9tLnJvb3RRU0lEO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kb20uZWxlbWVudHNbb3B0cy5xU0lEXSA9IG9wdHM7XHJcblx0XHR0aGlzLmRyYXdpbmcuYWRkRWxlbWVudChvcHRzLnFTSUQsIG9wdHMpO1xyXG5cclxuXHRcdHJldHVybiBvcHRzLnFTSUQ7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVFbGVtZW50KGVsZW1lbnRPclFTSUQsIG9wdHMgPSB7IFwidGFnXCI6XCJcIiwgXCJjc3NcIjp7fSwgXCJhdHRyXCI6e30gfSlcclxuXHR7XHJcblx0XHQvLyBUT0RPOiBVcGRhdGUgdmlydHVhbGRvbVxyXG5cclxuXHRcdHRoaXMuZHJhd2luZy51cGRhdGVFbGVtZW50KGVsZW1lbnRPclFTSUQsIG9wdHMpO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlRWxlbWVudChlbGVtZW50T3JRU0lEKVxyXG5cdHtcclxuXHRcdGlmKHR5cGVvZiBlbGVtZW50T3JRU0lEICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0e1xyXG5cdFx0XHRlbGVtZW50T3JRU0lEID0gdGhpcy5nZXRFbGVtZW50UVNJRChlbGVtZW50T3JRU0lEKTtcclxuXHRcdH1cclxuXHJcblx0XHQvL1RPRE86IFJlbW92ZSBmcm9tIHZpcnR1YWxkb21cclxuXHJcblx0XHR0aGlzLmRyYXdpbmcucmVtb3ZlRWxlbWVudChlbGVtZW50T3JRU0lEKTtcclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFZpcnR1YWxET007IiwiaW1wb3J0IFZpcnR1YWxET00gZnJvbSBcIi4vbGliL3ZpcnR1YWxkb20uanNcIjtcclxuXHJcbmNsYXNzIFByaW1hcnlET00gZXh0ZW5kcyBWaXJ0dWFsRE9NXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJpbWFyeURPTSgpOyJdfQ==
>>>>>>> a382ef786cfb09721fa4f7e1ddd1f87fcbe03fd8
