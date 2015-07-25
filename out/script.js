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
			"width": "10%",
			"height": "30%",
			"background": "#EDEDFF",
			"border": "1px solid gray",
			"box-sizing": "border-box",
			"display": "inline-block"
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

var _constantsJs = require("./constants.js");

var GlobalEventHandler = (function (_EventHandler) {
	_inherits(GlobalEventHandler, _EventHandler);

	function GlobalEventHandler() {
		_classCallCheck(this, GlobalEventHandler);

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

exports["default"] = DrawingBoard;
module.exports = exports["default"];

},{"./utils.js":12}],10:[function(require,module,exports){
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

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _drawingboardJs = require("./drawingboard.js");

var _drawingboardJs2 = _interopRequireDefault(_drawingboardJs);

var _eventhandlerJs = require("./eventhandler.js");

var _eventhandlerJs2 = _interopRequireDefault(_eventhandlerJs);

var VirtualDOM = (function (_EventHandler) {
	_inherits(VirtualDOM, _EventHandler);

	function VirtualDOM(opts) {
		_classCallCheck(this, VirtualDOM);

		_get(Object.getPrototypeOf(VirtualDOM.prototype), "constructor", this).call(this);
		this.drawing = null;
		this.dom = {
			rootQSID: null,
			elementLookup: {},
			elements: {}
		};
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
		}
	}, {
		key: "getElementQSID",
		value: function getElementQSID(domElement) {
			return this.drawing.findElementsId(domElement) || null;
		}
	}, {
		key: "addElement",
		value: function addElement() {
			var opts = arguments.length <= 0 || arguments[0] === undefined ? { "qSID": null, "parent": null, "position": 0, "tag": "", "css": {}, "attr": {} } : arguments[0];

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

			this.dom.elements[opts.qSID] = opts;
			this.drawing.addElement(opts.qSID, opts);

			return opts.qSID;
		}
	}, {
		key: "updateElement",
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

exports["default"] = VirtualDOM;
module.exports = exports["default"];

},{"./drawingboard.js":9,"./eventhandler.js":10}],14:[function(require,module,exports){
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

		_get(Object.getPrototypeOf(PrimaryDOM.prototype), "constructor", this).call(this);
	}

	return PrimaryDOM;
})(_libVirtualdomJs2["default"]);

exports["default"] = new PrimaryDOM();
module.exports = exports["default"];

},{"./lib/virtualdom.js":13}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0LmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9hY3Rpb25tYW5hZ2VyLmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9jb25zdGFudHMuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2RpYWxvZ21hbmFnZXIuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2V2ZW50cXVldWUuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2V2ZW50cy9hZGRldmVudC5qcyIsIkM6L3dvcmsvUXVpY2tTaXRlL3NyYy9zY3JpcHQvZXZlbnRzL2RvbWV2ZW50LmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9nbG9iYWxldmVudHMuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2xpYi9kcmF3aW5nYm9hcmQuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2xpYi9ldmVudGhhbmRsZXIuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2xpYi9tZW51YnVpbGRlci5qcyIsIkM6L3dvcmsvUXVpY2tTaXRlL3NyYy9zY3JpcHQvbGliL3V0aWxzLmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9saWIvdmlydHVhbGRvbS5qcyIsIkM6L3dvcmsvUXVpY2tTaXRlL3NyYy9zY3JpcHQvcHJpbWFyeWRvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztzQ0NBd0IsNkJBQTZCOzs7O3FDQUMzQiwyQkFBMkI7Ozs7cUNBQzNCLDJCQUEyQjs7OztvQ0FDNUIsMEJBQTBCOzs7O2tDQUM1Qix3QkFBd0I7Ozs7a0NBQ3hC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RUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLEtBQUssRUFBRSxDQUNuRCxFQUFDLEVBQ0YsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUMzQixFQUFFLFFBQVEsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQ2hGLEVBQUUsUUFBUSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsVUFBVSxFQUFFLEVBQzdDLEVBQUUsUUFBUSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxFQUFFLEVBQ3JDLEVBQUUsUUFBUSxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsU0FBUyxFQUFFLEVBQzNDLEVBQUUsUUFBUSxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUMsT0FBTyxFQUFFLEVBQ3ZDLEVBQUUsUUFBUSxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUMsT0FBTyxFQUFFLENBQ3ZDLEVBQUMsRUFDRixFQUFFLFFBQVEsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsT0FBTyxFQUFFLENBQ3pELEVBQUMsRUFDRixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQzVCLEVBQUUsUUFBUSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQzNELEVBQUUsUUFBUSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsUUFBUSxFQUFFLGFBQWEsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQ3BFLEVBQUUsUUFBUSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsYUFBYSxFQUFFLEVBQzlDLEVBQUUsUUFBUSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsY0FBYyxFQUFFLENBQ2pELEVBQUMsRUFDRixFQUFFLFFBQVEsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLFFBQVEsRUFBRSxh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LENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztHQUMxQzs7O1FBbEZJLFVBQVU7OztxQkFxRkQsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQ3hGRixxQkFBcUI7Ozs7SUFFdEMsVUFBVTtXQUFWLFVBQVU7O0FBRUosVUFGTixVQUFVLEdBR2Y7d0JBSEssVUFBVTs7QUFJZCw2QkFKSSxVQUFVLDZDQUlOO0VBQ1I7O1FBTEksVUFBVTs7O3FCQVNELElBQUksVUFBVSxFQUFFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBNZW51QnVpbGRlciBmcm9tIFwiLi9zY3JpcHQvbGliL21lbnVidWlsZGVyLmpzXCI7XHJcbmltcG9ydCBEaWFsb2dNYW5hZ2VyIGZyb20gXCIuL3NjcmlwdC9kaWFsb2dtYW5hZ2VyLmpzXCI7XHJcbmltcG9ydCBBY3Rpb25NYW5hZ2VyIGZyb20gXCIuL3NjcmlwdC9hY3Rpb25tYW5hZ2VyLmpzXCI7XHJcbmltcG9ydCBHbG9iYWxFdmVudHMgZnJvbSBcIi4vc2NyaXB0L2dsb2JhbGV2ZW50cy5qc1wiO1xyXG5pbXBvcnQgRXZlbnRRdWV1ZSBmcm9tIFwiLi9zY3JpcHQvZXZlbnRxdWV1ZS5qc1wiO1xyXG5pbXBvcnQgUHJpbWFyeURPTSBmcm9tIFwiLi9zY3JpcHQvcHJpbWFyeWRvbS5qc1wiO1xyXG5pbXBvcnQgeyBNZW51RGVmaW5pdGlvbnMgfSBmcm9tIFwiLi9zY3JpcHQvY29uc3RhbnRzLmpzXCI7XHJcblxyXG5jbGFzcyBNYWluXHJcbntcclxuXHRnbG9iYWxFdmVudHMgPSBudWxsO1xyXG5cdERPTSA9IG51bGw7XHJcblx0bWVudUJ1aWxkZXIgPSBudWxsO1xyXG5cdGV2ZW50UXVldWUgPSBudWxsO1xyXG5cdGRpYWxvZ01hbmFnZXIgPSBudWxsO1xyXG5cdGFjdGlvbk1hbmFnZXIgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0dGhpcy5nbG9iYWxFdmVudHMgPSBHbG9iYWxFdmVudHM7XHJcblx0XHR0aGlzLkRPTSA9IFByaW1hcnlET007XHJcblx0XHR0aGlzLkRPTS5zZXR1cCh7IFwicm9vdEVsZW1lbnRcIjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3FzLWRyYXdpbmctYm9hcmQnKSB9KTtcclxuXHRcdHRoaXMubWVudUJ1aWxkZXIgPSBuZXcgTWVudUJ1aWxkZXIoeyBcImRlZmluaXRpb25zXCI6TWVudURlZmluaXRpb25zLCBcImNvbnRhaW5lclwiOlwiYm9keVwiLCBcImV2ZW50c1wiOnRoaXMuZ2xvYmFsRXZlbnRzIH0pO1xyXG5cdFx0dGhpcy5ldmVudFF1ZXVlID0gbmV3IEV2ZW50UXVldWUoe30pO1xyXG5cdFx0dGhpcy5kaWFsb2dNYW5hZ2VyID0gbmV3IERpYWxvZ01hbmFnZXIoeyBcImNvbnRhaW5lclwiOlwiYm9keVwiIH0pO1xyXG5cdFx0dGhpcy5hY3Rpb25NYW5hZ2VyID0gbmV3IEFjdGlvbk1hbmFnZXIoeyB9KTtcclxuXHR9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB3aW5kb3cuYXBwID0gbmV3IE1haW4oKSwgZmFsc2UpOyIsImltcG9ydCBFdmVudHMgZnJvbSBcIi4vZ2xvYmFsZXZlbnRzLmpzXCI7XHJcbmltcG9ydCBBZGRFdmVudCBmcm9tIFwiLi9ldmVudHMvYWRkZXZlbnQuanNcIjtcclxuaW1wb3J0IFByaW1hcnlET00gZnJvbSBcIi4vcHJpbWFyeWRvbS5qc1wiO1xyXG5cclxuY2xhc3MgQWN0aW9uTWFuYWdlclxyXG57XHJcblxyXG5cdGV2ZW50TWV0aG9kVHJhbnNsYXRpb24gPSBcclxuXHR7XHJcblx0XHRcIm1lbnUuZG9tLmFkZFwiOiBBZGRFdmVudFxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdEV2ZW50cy5vbignbWVudXNlbGVjdCcsIDo6dGhpcy5oYW5kbGVTZWxlY3RFdmVudCk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTZWxlY3RFdmVudChldnQpXHJcblx0e1xyXG5cdFx0aWYodHlwZW9mIHRoaXMuZXZlbnRNZXRob2RUcmFuc2xhdGlvbltldnQuYnV0dG9uaWRdICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgZG9tRXZlbnQgPSBuZXcgdGhpcy5ldmVudE1ldGhvZFRyYW5zbGF0aW9uW2V2dC5idXR0b25pZF0oZXZ0LCBQcmltYXJ5RE9NKTtcclxuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2RvbWV2ZW50JywgZG9tRXZlbnQpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uTWFuYWdlcjsiLCJleHBvcnQgY29uc3QgTG9nZ2luZyA9IHtcclxuXHRcIlZlcmJvc2VcIjogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnVEZWZpbml0aW9ucyA9IFtcclxuXHR7IFwiZ3JvdXBpZFwiOiBcImVsZW1lbnRcIiwgXCJpdGVtc1wiOiBbXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJ0ZXh0XCIsIFwiZGlzcGxheVwiOlwiVGV4dFwiLCBcImljb25cIjpcImxldHRlclwiIH0sXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJzaXplXCIsIFwiZGlzcGxheVwiOlwiU2l6ZVwiLCBcImljb25cIjpcImV4cGFuZFwiIH0sXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJwb3NpdGlvblwiLCBcImRpc3BsYXlcIjpcIlBvc2l0aW9uXCIsIFwiaWNvblwiOlwiY3Vyc29yXCIgfSxcclxuXHRcdHsgXCJpdGVtaWRcIjpcImJhY2tncm91bmRcIiwgXCJkaXNwbGF5XCI6XCJCYWNrZ3JvdW5kXCIsIFwiaWNvblwiOlwicGFpbnRcIiB9LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwiYm9yZGVyXCIsIFwiZGlzcGxheVwiOlwiQm9yZGVyXCIsIFwiaWNvblwiOlwiZW1wdHlcIiB9LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwibW9yZVwiLCBcImRpc3BsYXlcIjpcIk1vcmVcIiwgXCJpY29uXCI6XCJjb2dcIiB9XHJcblx0XX0sXHJcblx0eyBcImdyb3VwaWRcIjogXCJkb21cIiwgXCJpdGVtc1wiOltcclxuXHRcdHsgXCJpdGVtaWRcIjpcImFkZFwiLCBcImRpc3BsYXlcIjpcIkNyZWF0ZVwiLCBcImljb25cIjpcInBsdXNcIiwgXCJzZWxlY3RjaGlsZFwiOnRydWUsIFwiaXRlbXNcIjpbXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcInN0YW5kYXJkXCIsIFwiZGlzcGxheVwiOlwiU3RhbmRhcmRcIiB9LFxyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJsaW5rXCIsIFwiZGlzcGxheVwiOlwiTGlua1wiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcInRleHRib3hcIiwgXCJkaXNwbGF5XCI6XCJUZXh0Ym94XCIgfSxcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwiaW1hZ2VcIiwgXCJkaXNwbGF5XCI6XCJJbWFnZVwiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcInZpZGVvXCIsIFwiZGlzcGxheVwiOlwiVmlkZW9cIiB9LFxyXG5cdFx0XX0sXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJyZW1vdmVcIiwgXCJkaXNwbGF5XCI6XCJSZW1vdmVcIiwgXCJpY29uXCI6XCJtaW51c1wiIH1cclxuXHRdfSxcclxuXHR7IFwiZ3JvdXBpZFwiOiBcIm1lbnVcIiwgXCJpdGVtc1wiOltcclxuXHRcdHsgXCJpdGVtaWRcIjpcImZpbGVcIiwgXCJkaXNwbGF5XCI6XCJGaWxlXCIsIFwiaWNvblwiOlwiZmlsZVwiLCBcIml0ZW1zXCI6W1xyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJleHBvcnRcIiwgXCJkaXNwbGF5XCI6XCJFeHBvcnRcIiwgXCJzZWxlY3RjaGlsZFwiOnRydWUsIFwiaXRlbXNcIjpbXHJcblx0XHRcdFx0eyBcIml0ZW1pZFwiOlwic2luZ2xlXCIsIFwiZGlzcGxheVwiOlwiU2luZ2xlIEhUTUxcIiB9LFxyXG5cdFx0XHRcdHsgXCJpdGVtaWRcIjpcInNlcGFyYXRlXCIsIFwiZGlzcGxheVwiOlwiU2VwYXJhdGUgQ1NTXCIgfVxyXG5cdFx0XHRdfSxcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwiaW1wb3J0XCIsIFwiZGlzcGxheVwiOlwiSW1wb3J0XCIsIFwic2VsZWN0Y2hpbGRcIjp0cnVlLCBcIml0ZW1zXCI6W1xyXG5cdFx0XHRcdHsgXCJpdGVtaWRcIjpcInNpbmdsZVwiLCBcImRpc3BsYXlcIjpcIlNpbmdsZSBIVE1MXCIgfSxcclxuXHRcdFx0XHR7IFwiaXRlbWlkXCI6XCJzZXBhcmF0ZVwiLCBcImRpc3BsYXlcIjpcIlNlcGFyYXRlIENTU1wiIH1cclxuXHRcdFx0XX1cclxuXHRcdF19LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwiZWRpdFwiLCBcImRpc3BsYXlcIjpcIkVkaXRcIiwgXCJpY29uXCI6XCJjbGlwYm9hcmRcIiwgXCJpdGVtc1wiOltcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwidW5kb1wiLCBcImRpc3BsYXlcIjpcIlVuZG9cIiB9LFxyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJyZWRvXCIsIFwiZGlzcGxheVwiOlwiUmVkb1wiIH1cclxuXHRcdF19LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwiYXNzZXRcIiwgXCJkaXNwbGF5XCI6XCJBc3NldHNcIiwgXCJpY29uXCI6XCJwaWN0dXJlc1wiLCBcInNlbGVjdGNoaWxkXCI6dHJ1ZSwgXCJpdGVtc1wiOltcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwiYWxsXCIsIFwiZGlzcGxheVwiOlwiQWxsXCIgfSxcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwiZm9udHNcIiwgXCJkaXNwbGF5XCI6XCJGb250c1wiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcImNvbG9yc1wiLCBcImRpc3BsYXlcIjpcIkNvbG9yc1wiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcImltYWdlc1wiLCBcImRpc3BsYXlcIjpcIkltYWdlc1wiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcInZpZGVvc1wiLCBcImRpc3BsYXlcIjpcIlZpZGVvc1wiIH1cclxuXHRcdF19LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwiaGVscFwiLCBcImRpc3BsYXlcIjpcIkhlbHBcIiwgXCJpY29uXCI6XCJoZWxwXCIgfVxyXG5cdF19LFxyXG5dOyIsImltcG9ydCBFdmVudHMgZnJvbSBcIi4vZ2xvYmFsZXZlbnRzLmpzXCI7XHJcblxyXG5jbGFzcyBEaWFsb2dNYW5hZ2VyXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERpYWxvZ01hbmFnZXI7IiwiaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9nbG9iYWxldmVudHMuanNcIjtcclxuXHJcbmNsYXNzIEV2ZW50UXVldWVcclxue1xyXG5cdGV2ZW50UXVldWUgPSBbXTtcclxuXHRldmVudFF1ZXVlT2Zmc2V0ID0gMDtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdEV2ZW50cy5vbignZG9tZXZlbnQnLCA6OnRoaXMuYWRkVG9RdWV1ZSk7XHJcblx0fVxyXG5cclxuXHRhZGRUb1F1ZXVlKGV2dClcclxuXHR7XHJcblx0XHRpZih0aGlzLmV2ZW50UXVldWVPZmZzZXQgIT09IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIE5lZWQgdG8gZmlyc3QgZGlzY2FyZCAndW5kby1lZCcgY2hhbmdlcywgYW5kIG1vdmUgb2Zmc2V0IGJhY2sgdG8gMFxyXG5cdFx0XHR2YXIgcmVtb3ZlZEV2dHMgPSB0aGlzLmV2ZW50UXVldWUuc3BsaWNlKC10aGlzLmV2ZW50UXVldWVPZmZzZXQsIHRoaXMuZXZlbnRRdWV1ZU9mZnNldCk7XHJcblx0XHRcdHJlbW92ZWRFdnRzLmZvckVhY2gocmVtb3ZlRXZ0ID0+IHJlbW92ZUV2dC5kZXN0b3J5RXZlbnQoKSk7XHJcblx0XHRcdHRoaXMuZXZlbnRRdWV1ZU9mZnNldCA9IDA7XHJcblx0XHR9XHJcblx0XHR0aGlzLmV2ZW50UXVldWUucHVzaChldnQpO1xyXG5cdFx0ZXZ0LnBlcmZvcm1FdmVudEFjdGlvbigpO1xyXG5cdH1cclxuXHJcblx0dW5kb0Zyb21RdWV1ZSgpXHJcblx0e1xyXG5cdFx0dmFyIG9mZnNldCA9ICh0aGlzLmV2ZW50UXVldWUubGVuZ3RoLTEpLXRoaXMuZXZlbnRRdWV1ZU9mZnNldDtcclxuXHRcdGlmKG9mZnNldCA+PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgZXZ0ID0gdGhpcy5ldmVudFF1ZXVlW29mZnNldF07XHJcblx0XHRcdGV2dC5yZXZlcnRFdmVudEFjdGlvbigpO1xyXG5cdFx0XHR0aGlzLmV2ZW50UXVldWVPZmZzZXQrKztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlZG9Gcm9tUXVldWUoKVxyXG5cdHtcclxuXHRcdGlmKHRoaXMuZXZlbnRRdWV1ZU9mZnNldCAhPT0gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5ldmVudFF1ZXVlT2Zmc2V0LS07XHJcblx0XHRcdHZhciBvZmZzZXQgPSAodGhpcy5ldmVudFF1ZXVlLmxlbmd0aC0xKS10aGlzLmV2ZW50UXVldWVPZmZzZXQ7XHJcblx0XHRcdHZhciBldnQgPSB0aGlzLmV2ZW50UXVldWVbb2Zmc2V0XTtcclxuXHRcdFx0ZXZ0LnBlcmZvcm1FdmVudEFjdGlvbigpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRRdWV1ZTsiLCJpbXBvcnQgRG9tRXZlbnQgZnJvbSBcIi4vZG9tZXZlbnQuanNcIjtcclxuXHJcbmNsYXNzIEFkZEV2ZW50IGV4dGVuZHMgRG9tRXZlbnRcclxue1xyXG5cdGRvbSA9IG51bGw7XHJcblx0cVNJRCA9IG51bGw7XHJcblx0cGFyZW50ID0gbnVsbDtcclxuXHJcblx0ZGVmYXVsdENTUyA9IFxyXG5cdHtcclxuXHRcdFwid2lkdGhcIjpcIjEwJVwiLFxyXG5cdFx0XCJoZWlnaHRcIjpcIjMwJVwiLFxyXG5cdFx0XCJiYWNrZ3JvdW5kXCI6XCIjRURFREZGXCIsXHJcblx0XHRcImJvcmRlclwiOiBcIjFweCBzb2xpZCBncmF5XCIsXHJcblx0XHRcImJveC1zaXppbmdcIjogXCJib3JkZXItYm94XCIsXHJcblx0XHRcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIlxyXG5cdH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKGV2dE9wdHMsIGRvbSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuZG9tID0gZG9tO1xyXG5cdFx0dGhpcy5xU0lEID0gdGhpcy5kb20uZ2VuZXJhdGVHdWlkKCk7XHJcblx0XHR0aGlzLnBhcmVudCA9IGV2dE9wdHMudGFyZ2V0O1xyXG5cdH1cclxuXHJcblx0cGVyZm9ybUV2ZW50QWN0aW9uKClcclxuXHR7XHJcblx0XHR0aGlzLmRvbS5hZGRFbGVtZW50KHtcclxuXHRcdFx0XCJxU0lEXCI6IHRoaXMucVNJRCxcclxuXHRcdFx0XCJwYXJlbnRcIjogdGhpcy5wYXJlbnQsXHJcblx0XHRcdFwicG9zaXRpb25cIjogMCxcclxuXHRcdFx0XCJ0YWdcIjogXCJkaXZcIixcclxuXHRcdFx0XCJjc3NcIjogdGhpcy5kZWZhdWx0Q1NTXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJldmVydEV2ZW50QWN0aW9uKClcclxuXHR7XHJcblx0XHR0aGlzLmRvbS5yZW1vdmVFbGVtZW50KHRoaXMucVNJRCk7XHJcblx0fVxyXG5cclxuXHRkZXN0cm95KClcclxuXHR7XHJcblx0XHR0aGlzLmRvbSA9IG51bGw7XHJcblx0XHR0aGlzLnFTSUQgPSBudWxsO1xyXG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkRXZlbnQ7IiwiY2xhc3MgRG9tRXZlbnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblxyXG5cdH1cclxuXHRcclxuXHRwZXJmb3JtRXZlbnRBY3Rpb24oKVxyXG5cdHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbSBFdmVudCBwZXJmb3JtRXZlbnRBY3Rpb24gTWV0aG9kIE5vdCBJbXBsZW1lbnRlZCFcIik7XHJcblx0fVxyXG5cclxuXHRyZXZlcnRFdmVudEFjdGlvbigpXHJcblx0e1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tIEV2ZW50IHJldmVydEV2ZW50QWN0aW9uIE1ldGhvZCBOb3QgSW1wbGVtZW50ZWQhXCIpO1xyXG5cdH1cclxuXHJcblx0ZGVzdG9yeUV2ZW50KClcclxuXHR7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEb20gRXZlbnQgZGVzdG9yeUV2ZW50IE1ldGhvZCBOb3QgSW1wbGVtZW50ZWQhXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9tRXZlbnQ7IiwiaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tIFwiLi9saWIvZXZlbnRoYW5kbGVyLmpzXCI7XHJcbmltcG9ydCB7IExvZ2dpbmcgfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcclxuXHJcbmNsYXNzIEdsb2JhbEV2ZW50SGFuZGxlciBleHRlbmRzIEV2ZW50SGFuZGxlclxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnNldHVwTG9nZ2luZygpO1xyXG5cdH1cclxuXHJcblx0c2V0dXBMb2dnaW5nKClcclxuXHR7XHJcblx0XHRpZihMb2dnaW5nLlZlcmJvc2UpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMub24oJyonLCBmdW5jdGlvbihldnQsIGV2ZW50TmFtZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGV2ZW50TmFtZSwgZXZ0KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgR2xvYmFsRXZlbnRIYW5kbGVyKCk7IiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWxzLmpzXCI7XHJcblxyXG5jbGFzcyBEcmF3aW5nQm9hcmRcclxue1xyXG5cclxuXHRyb290RWxlbWVudCA9IG51bGw7XHJcblx0aWRMaXN0ID0gW107XHJcblx0ZWxlbWVudElkTG9va3VwID0ge307XHJcblx0aWRFbGVtZW50TG9va3VwID0ge307XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdHMpXHJcblx0e1xyXG5cdFx0dGhpcy5yb290RWxlbWVudCA9IG9wdHMucm9vdEVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVVbmlxdWVJZCgpXHJcblx0e1xyXG5cdFx0dmFyIGd1aWQgPSBVdGlscy5ndWlkKCk7XHJcblx0XHR3aGlsZSh0aGlzLmlkTGlzdC5pbmRleE9mKGd1aWQpICE9PSAtMSlndWlkID0gVXRpbHMuZ3VpZCgpO1xyXG5cdFx0dGhpcy5pZExpc3QucHVzaChndWlkKTtcclxuXHRcdHJldHVybiBndWlkO1xyXG5cdH1cclxuXHJcblx0ZmluZEVsZW1lbnRzSWQoZG9tRWxlbWVudClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50SWRMb29rdXBbZG9tRWxlbWVudF0gfHwgbnVsbDtcclxuXHR9XHJcblxyXG5cdGFkZEVsZW1lbnQoaWQsIG9wdHMpXHJcblx0e1xyXG5cdFx0dmFyIHBhcmVudEVsID0gIW9wdHMucGFyZW50ID8gdGhpcy5yb290RWxlbWVudCA6IHRoaXMuaWRFbGVtZW50TG9va3VwW29wdHMucGFyZW50XTtcclxuXHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob3B0cy50YWcgfHwgXCJkaXZcIik7XHJcblxyXG5cdFx0aWYob3B0cy5hdHRyKXRoaXMuc2V0QXR0cmlidXRlcyhlbCwgb3B0cy5hdHRyKTtcclxuXHRcdGlmKG9wdHMuY3NzKXRoaXMuc2V0U3R5bGVzKGVsLCBvcHRzLmNzcyk7XHJcblxyXG5cdFx0aWYocGFyZW50RWwuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSBwYXJlbnRFbC5hcHBlbmRDaGlsZChlbCk7XHJcblx0XHRlbHNlIHBhcmVudEVsLmluc2VydEJlZm9yZShlbCwgcGFyZW50RWwuY2hpbGRyZW5bb3B0cy5wb3NpdGlvbiB8fCAwXSk7XHJcblxyXG5cdFx0dGhpcy5lbGVtZW50SWRMb29rdXBbZWxdID0gaWQ7XHJcblx0XHR0aGlzLmlkRWxlbWVudExvb2t1cFtpZF0gPSBlbDtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUVsZW1lbnQoaWQsIG9wdHMpXHJcblx0e1xyXG5cclxuXHR9XHJcblxyXG5cdHJlbW92ZUVsZW1lbnQoaWQpXHJcblx0e1xyXG5cclxuXHR9XHJcblxyXG5cdHNldFN0eWxlcyhlbCwgY3NzUHJvcGVydGllcylcclxuXHR7XHJcblx0XHQkKGVsKS5jc3MoY3NzUHJvcGVydGllcyk7XHJcblx0fVxyXG5cclxuXHRzZXRBdHRyaWJ1dGVzKGVsLCBhdHRyUHJvcGVydGllcylcclxuXHR7XHJcblx0XHQkKGVsKS5hdHRyKGF0dHJQcm9wZXJ0aWVzKTtcclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERyYXdpbmdCb2FyZDsiLCJjbGFzcyBFdmVudEhhbmRsZXJcclxue1xyXG5cdElTX0VWRU5UX0hBTkRMRVIgPSB0cnVlO1xyXG5cdGxpc3RlbmVycyA9IHt9O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRvbihldmVudFR5cGUsIGV2ZW50Q2FsbGJhY2spXHJcblx0e1xyXG5cdFx0dmFyIGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW2V2ZW50VHlwZV07XHJcblx0XHRpZighQXJyYXkuaXNBcnJheShsaXN0ZW5lcnMpKVxyXG5cdFx0e1xyXG5cdFx0XHRsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdID0gW107XHJcblx0XHR9XHJcblx0XHR0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdLnB1c2goZXZlbnRDYWxsYmFjayk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdG9mZihldmVudFR5cGUsIGV2ZW50Q2FsbGJhY2spXHJcblx0e1xyXG5cdFx0dmFyIGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW2V2ZW50VHlwZV07XHJcblx0XHRpZihBcnJheS5pc0FycmF5KGxpc3RlbmVycykpXHJcblx0XHR7XHJcblx0XHRcdHZhciBpbmR4O1xyXG5cdFx0XHR3aGlsZSgoaW5keCA9IGxpc3RlbmVycy5pbmRleE9mKGV2ZW50Q2FsbGJhY2spKSAhPT0gLTEpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGluZHgsIDEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHRyaWdnZXIoZXZlbnRUeXBlLCBldmVudEluZm9ybWF0aW9uKVxyXG5cdHtcclxuXHRcdGlmKEFycmF5LmlzQXJyYXkodGhpcy5saXN0ZW5lcnNbZXZlbnRUeXBlXSkpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubGlzdGVuZXJzW2V2ZW50VHlwZV0uZm9yRWFjaCgoZm4pID0+IGZuLmNhbGwobnVsbCwgZXZlbnRJbmZvcm1hdGlvbiwgZXZlbnRUeXBlKSk7XHJcblx0XHR9XHJcblx0XHRpZihBcnJheS5pc0FycmF5KHRoaXMubGlzdGVuZXJzWycqJ10pKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmxpc3RlbmVyc1snKiddLmZvckVhY2goKGZuKSA9PiBmbi5jYWxsKG51bGwsIGV2ZW50SW5mb3JtYXRpb24sIGV2ZW50VHlwZSkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRfcGFzc0V2ZW50T24oZXZlbnRJbmZvcm1hdGlvbiwgZXZlbnRUeXBlKVxyXG5cdHtcclxuXHRcdHRoaXMudHJpZ2dlcihldmVudFR5cGUsIGV2ZW50SW5mb3JtYXRpb24pO1xyXG5cdH1cclxuXHJcblx0Y2xlYW51cCgpXHJcblx0e1xyXG5cdFx0T2JqZWN0LmtleXModGhpcy5saXN0ZW5lcnMpLmZvckVhY2goKGV2dE5hbWUpID0+IHtcclxuXHRcdFx0ZGVsZXRlIHRoaXMubGlzdGVuZXJzW2V2dE5hbWVdO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmxpc3RlbmVycyA9IHt9O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXI7IiwiY2xhc3MgTWVudUJ1aWxkZXJcclxue1xyXG5cdG9wdHMgPSB7fTtcclxuXHR0YXJnZXQgPSBudWxsO1xyXG5cdCRjb250YWluZXIgPSBudWxsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRzKSBcclxuXHR7XHJcblx0XHR0aGlzLm9wdHMgPSBvcHRzO1xyXG5cdFx0dGhpcy5zZXR1cE1lbnUob3B0cy5kZWZpbml0aW9ucyk7XHJcblx0XHR0aGlzLnNldHVwRXZlbnRzKCk7XHJcblx0fVxyXG5cclxuXHRzZXR1cE1lbnUoZGVmaW5pdGlvbilcclxuXHR7XHJcblx0XHR0aGlzLiRjb250YWluZXIgPSAkKFxyXG5cdFx0XHRgPGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1jb250YWluZXJcIiB0YWJpbmRleD1cIjBcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicXMtZW5naW5lLWRkLWlubmVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicXMtZW5naW5lLWRkLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicXMtZW5naW5lLWRkLXRpdGxlLXRleHRcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicXMtZW5naW5lLWRkLXRpdGxlLWljb24gcXMtaWNvbiBxcy1pY29uLXBlbmNpbFwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5gKS5hcHBlbmRUbyh0aGlzLm9wdHMuY29udGFpbmVyKTtcclxuXHRcdHRoaXMuJGNvbnRhaW5lci5maW5kKCcucXMtZW5naW5lLWRkLXRpdGxlIC5xcy1lbmdpbmUtZGQtdGl0bGUtdGV4dCcpLnRleHQoJ0Jsb2NrIDEnKTsgICAgIFxyXG5cdFx0dGhpcy5wcm9jZXNzRGVmaW5pdGlvbih0aGlzLiRjb250YWluZXIuZmluZCgnLnFzLWVuZ2luZS1kZC1pbm5lcicpLCBkZWZpbml0aW9uKTtcclxuXHR9XHJcblxyXG5cdHByb2Nlc3NEZWZpbml0aW9uKCRwYXJlbnQsIGRlZilcclxuXHR7XHJcbiAgICAgICAgICBpZihBcnJheS5pc0FycmF5KGRlZikpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZGVmLmZvckVhY2godGhpcy5wcm9jZXNzRGVmaW5pdGlvbi5iaW5kKHRoaXMsICRwYXJlbnQpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYodHlwZW9mIGRlZiA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YXIgJGNoaWxkUGFyZW50ID0gbnVsbCwgaWQgPSAkcGFyZW50LmNsb3Nlc3QoJ1tkYXRhLXFzLWlkXScpLmRhdGEoJ3FzLWlkJyk7XHJcbiAgICAgICAgICAgICAgaWQgPSBpZCA/IGlkKycuJyA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgaWYodHlwZW9mIGRlZi5ncm91cGlkICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgJGNoaWxkUGFyZW50ID0gJCgnPGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1ncm91cFwiIGRhdGEtcXMtaWQ9XCInK2RlZi5ncm91cGlkKydcIj48L2Rpdj4nKS5hcHBlbmRUbygkcGFyZW50KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZSBpZih0eXBlb2YgZGVmLml0ZW1pZCAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciAkaXRlbSA9ICQoJzxkaXYgY2xhc3M9XCJxcy1lbmdpbmUtZGQtaXRlbVwiIGRhdGEtcXMtaWQ9XCInK2lkK2RlZi5pdGVtaWQrJ1wiPjxzcGFuIGNsYXNzPVwicXMtZW5naW5lLWRkLWljb25cIj48L3NwYW4+PC9kaXY+JykuYXBwZW5kVG8oJHBhcmVudCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBkZWYuaWNvbiAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJGl0ZW0uZmluZCgnLnFzLWVuZ2luZS1kZC1pY29uJykuYWRkQ2xhc3MoJ3FzLWljb24gcXMtaWNvbi0nK2RlZi5pY29uKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZih0eXBlb2YgZGVmLmRpc3BsYXkgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICRpdGVtLmFwcGVuZCgnPHNwYW4+JytkZWYuZGlzcGxheSsnPC9zcGFuPicpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoZGVmLml0ZW1zKSlcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJGNoaWxkUGFyZW50ID0gJCgnPGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1tb3JlXCI+PGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1leHBhbmRcIj4mZ3Q7PC9kaXY+PGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1ncm91cFwiPjwvZGl2PjwvZGl2PicpLmFwcGVuZFRvKCRpdGVtKS5maW5kKCcucXMtZW5naW5lLWRkLWdyb3VwJyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYoJGNoaWxkUGFyZW50ICYmIEFycmF5LmlzQXJyYXkoZGVmLml0ZW1zKSlcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0RlZmluaXRpb24oJGNoaWxkUGFyZW50LCBkZWYuaXRlbXMpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHR9XHJcblxyXG5cdHNldHVwRXZlbnRzKClcclxuXHR7XHJcblx0XHQkKHRoaXMub3B0cy5jb250YWluZXIpLm9uKCdjb250ZXh0bWVudScsIChldnQpID0+XHJcblx0XHR7XHJcblx0XHRcdGlmKCQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLnFzLWVuZ2luZS1kZC1jb250YWluZXInKS5zaXplKCk9PT0wKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy50YXJnZXQgPSBldnQudGFyZ2V0O1xyXG5cdFx0XHRcdCQoJy5xcy1lbmdpbmUtZGQtY29udGFpbmVyJykuZm9jdXMoKS5jc3MoeyAnbGVmdCc6ZXZ0LmNsaWVudFgrJ3B4JywgJ3RvcCc6ZXZ0LmNsaWVudFkrJ3B4J30pO1xyXG5cdFx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuJGNvbnRhaW5lci5vbignY2xpY2snLCAoZXZ0KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgJHFzaWQgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJ1tkYXRhLXFzLWlkXScpO1xyXG5cdFx0XHRpZigkcXNpZC5zaXplKCkgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0JCgnLnFzLWVuZ2luZS1kZC1jb250YWluZXInKS5ibHVyKCk7XHJcblx0XHRcdFx0aWYodGhpcy5vcHRzLmV2ZW50cylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLm9wdHMuZXZlbnRzLnRyaWdnZXIoJ21lbnVzZWxlY3QnLCB7IFwiYnV0dG9uaWRcIjogJ21lbnUuJyskcXNpZC5kYXRhKCdxcy1pZCcpLCBcInRhcmdldFwiOiB0aGlzLnRhcmdldCB9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUJ1aWxkZXI7IiwiY2xhc3MgVXRpbHMgXHJcbntcclxuXHRzdGF0aWMgZ3VpZCgpXHJcblx0e1xyXG5cdFx0cmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+XHJcblx0XHR7XHJcblx0XHRcdHZhciByID0gTWF0aC5yYW5kb20oKSoxNnwwLCB2ID0gYyA9PSAneCcgPyByIDogKHImMHgzfDB4OCk7XHJcblx0XHQgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVdGlsczsiLCJpbXBvcnQgRHJhd2luZ0JvYXJkIGZyb20gXCIuL2RyYXdpbmdib2FyZC5qc1wiO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gXCIuL2V2ZW50aGFuZGxlci5qc1wiO1xyXG5cclxuY2xhc3MgVmlydHVhbERPTSBleHRlbmRzIEV2ZW50SGFuZGxlclxyXG57XHJcblx0ZHJhd2luZyA9IG51bGw7XHJcblx0ZG9tID0gXHJcblx0e1xyXG5cdFx0cm9vdFFTSUQ6IG51bGwsXHJcblx0XHRlbGVtZW50TG9va3VwOiB7fSxcclxuXHRcdGVsZW1lbnRzOiB7fVxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3Iob3B0cylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0aWYob3B0cyl0aGlzLnNldHVwKG9wdHMpO1xyXG5cdH1cclxuXHJcblx0c2V0dXAob3B0cylcclxuXHR7XHJcblx0XHR0aGlzLmRyYXdpbmcgPSBuZXcgRHJhd2luZ0JvYXJkKHsgXCJyb290RWxlbWVudFwiOiBvcHRzLnJvb3RFbGVtZW50IH0pO1xyXG5cdFx0dGhpcy5hZGRFbGVtZW50KHtcclxuXHRcdFx0XCJwb3NpdGlvblwiOiAwLFxyXG5cdFx0XHRcInRhZ1wiOiBcImRpdlwiLFxyXG5cdFx0XHRcImNzc1wiOiB7IFwid2lkdGhcIjogXCIxMDAlXCIsIFwiaGVpZ2h0XCI6XCIxMDAlXCIsIFwiYmFja2dyb3VuZFwiOlwiI2ZmZlwiIH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2VuZXJhdGVHdWlkKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kcmF3aW5nLmNyZWF0ZVVuaXF1ZUlkKCk7XHJcblx0fVxyXG5cclxuXHRnZXRFbGVtZW50UVNJRChkb21FbGVtZW50KVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRyYXdpbmcuZmluZEVsZW1lbnRzSWQoZG9tRWxlbWVudCkgfHwgbnVsbDtcclxuXHR9XHJcblxyXG5cdGFkZEVsZW1lbnQob3B0cyA9IHsgXCJxU0lEXCI6IG51bGwsIFwicGFyZW50XCI6IG51bGwsIFwicG9zaXRpb25cIjogMCwgXCJ0YWdcIjogXCJcIiwgXCJjc3NcIjoge30sIFwiYXR0clwiOiB7fSB9KVxyXG5cdHtcclxuXHRcdGlmKCFvcHRzLnFTSUQpXHJcblx0XHR7XHJcblx0XHRcdG9wdHMucVNJRCA9IHRoaXMuZ2VuZXJhdGVHdWlkKCk7XHJcblx0XHR9XHJcblx0XHRpZih0eXBlb2Ygb3B0cy5wYXJlbnQgPT09IFwic3RyaW5nXCIpXHJcblx0XHR7XHJcblx0XHRcdG9wdHMucGFyZW50ID0gdGhpcy5nZXRFbGVtZW50UVNJRChvcHRzLnBhcmVudCk7XHJcblx0XHR9XHJcblx0XHRpZih0eXBlb2Ygb3B0cy5wYXJlbnQgIT09IFwic3RyaW5nXCIpXHJcblx0XHR7XHJcblx0XHRcdGlmKCF0aGlzLmRvbS5yb290UVNJRClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZG9tLnJvb3RRU0lEID0gb3B0cy5xU0lEO1xyXG5cdFx0XHRcdG9wdHMucGFyZW50ID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRvcHRzLnBhcmVudCA9IHRoaXMuZG9tLnJvb3RRU0lEO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kb20uZWxlbWVudHNbb3B0cy5xU0lEXSA9IG9wdHM7XHJcblx0XHR0aGlzLmRyYXdpbmcuYWRkRWxlbWVudChvcHRzLnFTSUQsIG9wdHMpO1xyXG5cclxuXHRcdHJldHVybiBvcHRzLnFTSUQ7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVFbGVtZW50KGVsZW1lbnRPclFTSUQsIG9wdHMgPSB7IFwidGFnXCI6XCJcIiwgXCJjc3NcIjp7fSwgXCJhdHRyXCI6e30gfSlcclxuXHR7XHJcblx0XHQvLyBUT0RPOiBVcGRhdGUgdmlydHVhbGRvbVxyXG5cclxuXHRcdHRoaXMuZHJhd2luZy51cGRhdGVFbGVtZW50KGVsZW1lbnRPclFTSUQsIG9wdHMpO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlRWxlbWVudChlbGVtZW50T3JRU0lEKVxyXG5cdHtcclxuXHRcdGlmKHR5cGVvZiBlbGVtZW50T3JRU0lEICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0e1xyXG5cdFx0XHRlbGVtZW50T3JRU0lEID0gdGhpcy5nZXRFbGVtZW50UVNJRChlbGVtZW50T3JRU0lEKTtcclxuXHRcdH1cclxuXHJcblx0XHQvL1RPRE86IFJlbW92ZSBmcm9tIHZpcnR1YWxkb21cclxuXHJcblx0XHR0aGlzLmRyYXdpbmcucmVtb3ZlRWxlbWVudChlbGVtZW50T3JRU0lEKTtcclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFZpcnR1YWxET007IiwiaW1wb3J0IFZpcnR1YWxET00gZnJvbSBcIi4vbGliL3ZpcnR1YWxkb20uanNcIjtcclxuXHJcbmNsYXNzIFByaW1hcnlET00gZXh0ZW5kcyBWaXJ0dWFsRE9NXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJpbWFyeURPTSgpOyJdfQ==
