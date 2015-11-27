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
	this.menuBuilder = new _scriptLibMenubuilderJs2["default"]({ "definitions": _scriptConstantsJs.MenuDefinitions, "container": "body", "events": this.globalEvents });
	this.eventQueue = new _scriptEventqueueJs2["default"]({});
	this.dialogManager = new _scriptDialogmanagerJs2["default"]({ "container": "body" });
	this.actionManager = new _scriptActionmanagerJs2["default"]({});
};

window.onload = function () {
	window.app = new Main();
};

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
			"width": "100px",
			"height": "100px"
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DrawingBoard = function DrawingBoard() {
	_classCallCheck(this, DrawingBoard);
};

exports["default"] = DrawingBoard;
module.exports = exports["default"];

},{}],10:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _utilsJs = require("./utils.js");

var _utilsJs2 = _interopRequireDefault(_utilsJs);

var _drawingboardJs = require("./drawingboard.js");

var _drawingboardJs2 = _interopRequireDefault(_drawingboardJs);

var VirtualDOM = (function () {
	function VirtualDOM(opts) {
		_classCallCheck(this, VirtualDOM);

		this.guids = new Set();
		this.dom = {
			rootQSID: null,
			elementLookup: {},
			elements: {}
		};

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
		}
	}, {
		key: "getElementQSID",
		value: function getElementQSID(domElement) {

			// THIS WILL HAVE TO USE DRAWING BOARD

			return this.dom.elementLookup[domElement] || null;
		}
	}, {
		key: "addElement",
		value: function addElement() {
			var opts = arguments.length <= 0 || arguments[0] === undefined ? {
				"qSID": null,
				"parent": null,
				"position": 0,
				"tag": "",
				"css": {},
				"attr": {}
			} : arguments[0];

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

			this.elements[opts.qSID] = opts;
			//this.elementLookup[opts.element] = opts.qSID; THIS WILL HAVE TO BE DONE THROUGH DRAWING BOARD

			return opts.qSID;
		}
	}, {
		key: "updateElement",
		value: function updateElement() {
			var opts = arguments.length <= 0 || arguments[0] === undefined ? { "tag": "", "css": {}, "attr": {} } : arguments[0];
		}
	}, {
		key: "removeElement",
		value: function removeElement() {}
	}]);

	return VirtualDOM;
})();

exports["default"] = VirtualDOM;
module.exports = exports["default"];

},{"./drawingboard.js":9,"./utils.js":12}],14:[function(require,module,exports){
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

		_get(Object.getPrototypeOf(PrimaryDOM.prototype), "constructor", this).call(this, {
			"rootElement": document.getElementById('drawing-board')
		});
	}

	return PrimaryDOM;
})(_libVirtualdomJs2["default"]);

exports["default"] = new PrimaryDOM();
module.exports = exports["default"];

},{"./lib/virtualdom.js":13}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0LmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9hY3Rpb25tYW5hZ2VyLmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9jb25zdGFudHMuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2RpYWxvZ21hbmFnZXIuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2V2ZW50cXVldWUuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2V2ZW50cy9hZGRldmVudC5qcyIsIkM6L3dvcmsvUXVpY2tTaXRlL3NyYy9zY3JpcHQvZXZlbnRzL2RvbWV2ZW50LmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9nbG9iYWxldmVudHMuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2xpYi9kcmF3aW5nYm9hcmQuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2xpYi9ldmVudGhhbmRsZXIuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2xpYi9tZW51YnVpbGRlci5qcyIsIkM6L3dvcmsvUXVpY2tTaXRlL3NyYy9zY3JpcHQvbGliL3V0aWxzLmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9saWIvdmlydHVhbGRvbS5qcyIsIkM6L3dvcmsvUXVpY2tTaXRlL3NyYy9zY3JpcHQvcHJpbWFyeWRvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztzQ0NBd0IsNkJBQTZCOzs7O3FDQUMzQiwyQkFBMkI7Ozs7cUNBQzNCLDJCQUEyQjs7OztvQ0FDNUIsMEJBQTBCOzs7O2tDQUM1Qix3QkFBd0I7Ozs7a0NBQ3hC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QVMsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUNoRixFQUFFLFFBQVEsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLFVBQVUsRUFBRSxFQUM3QyxFQUFFLFFBQVEsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sRUFBRSxFQUNyQyxFQUFFLFFBQVEsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLFNBQVMsRUFBRSxFQUMzQyxFQUFFLFFBQVEsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFDLE9BQU8sRUFBRSxFQUN2QyxFQUFFLFFBQVEsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFDLE9BQU8sRUFBRSxDQUN2QyxFQUFDLEVBQ0YsRUFBRSxRQUFRLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDLE9BQU8sRUFBRSxDQUN6RCxFQUFDLEVBQ0YsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBQyxDQUM1QixFQUFFLFFBQVEsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBQyxDQUMzRCxFQUFFLFFBQVEsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUNwRSxFQUFFLFFBQVEsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLGFBQWEsRUFBRSxFQUM5QyxFQUFFLFFBQVEsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLGNBQWMsRUFBRSxDQUNqRCxFQUFDLEVBQ0YsRUFBRSxRQUFRLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxRQUFRLEVBQUUsYUFBYSxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FDcEUsRUFBRSxRQUFRLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxhQUFhLEVBQUUsRUFDOUMsRUFBRSxRQUFRLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFB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SDs7UUFQSSxVQUFVOzs7cUJBV0QsSUFBSSxVQUFVLEVBQUUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IE1lbnVCdWlsZGVyIGZyb20gXCIuL3NjcmlwdC9saWIvbWVudWJ1aWxkZXIuanNcIjtcclxuaW1wb3J0IERpYWxvZ01hbmFnZXIgZnJvbSBcIi4vc2NyaXB0L2RpYWxvZ21hbmFnZXIuanNcIjtcclxuaW1wb3J0IEFjdGlvbk1hbmFnZXIgZnJvbSBcIi4vc2NyaXB0L2FjdGlvbm1hbmFnZXIuanNcIjtcclxuaW1wb3J0IEdsb2JhbEV2ZW50cyBmcm9tIFwiLi9zY3JpcHQvZ2xvYmFsZXZlbnRzLmpzXCI7XHJcbmltcG9ydCBFdmVudFF1ZXVlIGZyb20gXCIuL3NjcmlwdC9ldmVudHF1ZXVlLmpzXCI7XHJcbmltcG9ydCBQcmltYXJ5RE9NIGZyb20gXCIuL3NjcmlwdC9wcmltYXJ5ZG9tLmpzXCI7XHJcbmltcG9ydCB7IE1lbnVEZWZpbml0aW9ucyB9IGZyb20gXCIuL3NjcmlwdC9jb25zdGFudHMuanNcIjtcclxuXHJcbmNsYXNzIE1haW5cclxue1xyXG5cdGdsb2JhbEV2ZW50cyA9IG51bGw7XHJcblx0RE9NID0gbnVsbDtcclxuXHRtZW51QnVpbGRlciA9IG51bGw7XHJcblx0ZXZlbnRRdWV1ZSA9IG51bGw7XHJcblx0ZGlhbG9nTWFuYWdlciA9IG51bGw7XHJcblx0YWN0aW9uTWFuYWdlciA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHR0aGlzLmdsb2JhbEV2ZW50cyA9IEdsb2JhbEV2ZW50cztcclxuXHRcdHRoaXMuRE9NID0gUHJpbWFyeURPTTtcclxuXHRcdHRoaXMubWVudUJ1aWxkZXIgPSBuZXcgTWVudUJ1aWxkZXIoeyBcImRlZmluaXRpb25zXCI6TWVudURlZmluaXRpb25zLCBcImNvbnRhaW5lclwiOlwiYm9keVwiLCBcImV2ZW50c1wiOnRoaXMuZ2xvYmFsRXZlbnRzIH0pO1xyXG5cdFx0dGhpcy5ldmVudFF1ZXVlID0gbmV3IEV2ZW50UXVldWUoe30pO1xyXG5cdFx0dGhpcy5kaWFsb2dNYW5hZ2VyID0gbmV3IERpYWxvZ01hbmFnZXIoeyBcImNvbnRhaW5lclwiOlwiYm9keVwiIH0pO1xyXG5cdFx0dGhpcy5hY3Rpb25NYW5hZ2VyID0gbmV3IEFjdGlvbk1hbmFnZXIoeyB9KTtcclxuXHR9XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpeyB3aW5kb3cuYXBwID0gbmV3IE1haW4oKTsgfTsiLCJpbXBvcnQgRXZlbnRzIGZyb20gXCIuL2dsb2JhbGV2ZW50cy5qc1wiO1xyXG5pbXBvcnQgQWRkRXZlbnQgZnJvbSBcIi4vZXZlbnRzL2FkZGV2ZW50LmpzXCI7XHJcbmltcG9ydCBQcmltYXJ5RE9NIGZyb20gXCIuL3ByaW1hcnlkb20uanNcIjtcclxuXHJcbmNsYXNzIEFjdGlvbk1hbmFnZXJcclxue1xyXG5cclxuXHRldmVudE1ldGhvZFRyYW5zbGF0aW9uID0gXHJcblx0e1xyXG5cdFx0XCJtZW51LmRvbS5hZGRcIjogQWRkRXZlbnRcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRFdmVudHMub24oJ21lbnVzZWxlY3QnLCA6OnRoaXMuaGFuZGxlU2VsZWN0RXZlbnQpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU2VsZWN0RXZlbnQoZXZ0KVxyXG5cdHtcclxuXHRcdGlmKHR5cGVvZiB0aGlzLmV2ZW50TWV0aG9kVHJhbnNsYXRpb25bZXZ0LmJ1dHRvbmlkXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHtcclxuXHRcdFx0dmFyIGRvbUV2ZW50ID0gbmV3IHRoaXMuZXZlbnRNZXRob2RUcmFuc2xhdGlvbltldnQuYnV0dG9uaWRdKGV2dCwgUHJpbWFyeURPTSk7XHJcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdkb21ldmVudCcsIGRvbUV2ZW50KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbk1hbmFnZXI7IiwiZXhwb3J0IGNvbnN0IExvZ2dpbmcgPSB7XHJcblx0XCJWZXJib3NlXCI6IHRydWVcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51RGVmaW5pdGlvbnMgPSBbXHJcblx0eyBcImdyb3VwaWRcIjogXCJlbGVtZW50XCIsIFwiaXRlbXNcIjogW1xyXG5cdFx0eyBcIml0ZW1pZFwiOlwidGV4dFwiLCBcImRpc3BsYXlcIjpcIlRleHRcIiwgXCJpY29uXCI6XCJsZXR0ZXJcIiB9LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwic2l6ZVwiLCBcImRpc3BsYXlcIjpcIlNpemVcIiwgXCJpY29uXCI6XCJleHBhbmRcIiB9LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwicG9zaXRpb25cIiwgXCJkaXNwbGF5XCI6XCJQb3NpdGlvblwiLCBcImljb25cIjpcImN1cnNvclwiIH0sXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJiYWNrZ3JvdW5kXCIsIFwiZGlzcGxheVwiOlwiQmFja2dyb3VuZFwiLCBcImljb25cIjpcInBhaW50XCIgfSxcclxuXHRcdHsgXCJpdGVtaWRcIjpcImJvcmRlclwiLCBcImRpc3BsYXlcIjpcIkJvcmRlclwiLCBcImljb25cIjpcImVtcHR5XCIgfSxcclxuXHRcdHsgXCJpdGVtaWRcIjpcIm1vcmVcIiwgXCJkaXNwbGF5XCI6XCJNb3JlXCIsIFwiaWNvblwiOlwiY29nXCIgfVxyXG5cdF19LFxyXG5cdHsgXCJncm91cGlkXCI6IFwiZG9tXCIsIFwiaXRlbXNcIjpbXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJhZGRcIiwgXCJkaXNwbGF5XCI6XCJDcmVhdGVcIiwgXCJpY29uXCI6XCJwbHVzXCIsIFwic2VsZWN0Y2hpbGRcIjp0cnVlLCBcIml0ZW1zXCI6W1xyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJzdGFuZGFyZFwiLCBcImRpc3BsYXlcIjpcIlN0YW5kYXJkXCIgfSxcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwibGlua1wiLCBcImRpc3BsYXlcIjpcIkxpbmtcIiB9LFxyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJ0ZXh0Ym94XCIsIFwiZGlzcGxheVwiOlwiVGV4dGJveFwiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcImltYWdlXCIsIFwiZGlzcGxheVwiOlwiSW1hZ2VcIiB9LFxyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJ2aWRlb1wiLCBcImRpc3BsYXlcIjpcIlZpZGVvXCIgfSxcclxuXHRcdF19LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwicmVtb3ZlXCIsIFwiZGlzcGxheVwiOlwiUmVtb3ZlXCIsIFwiaWNvblwiOlwibWludXNcIiB9XHJcblx0XX0sXHJcblx0eyBcImdyb3VwaWRcIjogXCJtZW51XCIsIFwiaXRlbXNcIjpbXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJmaWxlXCIsIFwiZGlzcGxheVwiOlwiRmlsZVwiLCBcImljb25cIjpcImZpbGVcIiwgXCJpdGVtc1wiOltcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwiZXhwb3J0XCIsIFwiZGlzcGxheVwiOlwiRXhwb3J0XCIsIFwic2VsZWN0Y2hpbGRcIjp0cnVlLCBcIml0ZW1zXCI6W1xyXG5cdFx0XHRcdHsgXCJpdGVtaWRcIjpcInNpbmdsZVwiLCBcImRpc3BsYXlcIjpcIlNpbmdsZSBIVE1MXCIgfSxcclxuXHRcdFx0XHR7IFwiaXRlbWlkXCI6XCJzZXBhcmF0ZVwiLCBcImRpc3BsYXlcIjpcIlNlcGFyYXRlIENTU1wiIH1cclxuXHRcdFx0XX0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcImltcG9ydFwiLCBcImRpc3BsYXlcIjpcIkltcG9ydFwiLCBcInNlbGVjdGNoaWxkXCI6dHJ1ZSwgXCJpdGVtc1wiOltcclxuXHRcdFx0XHR7IFwiaXRlbWlkXCI6XCJzaW5nbGVcIiwgXCJkaXNwbGF5XCI6XCJTaW5nbGUgSFRNTFwiIH0sXHJcblx0XHRcdFx0eyBcIml0ZW1pZFwiOlwic2VwYXJhdGVcIiwgXCJkaXNwbGF5XCI6XCJTZXBhcmF0ZSBDU1NcIiB9XHJcblx0XHRcdF19XHJcblx0XHRdfSxcclxuXHRcdHsgXCJpdGVtaWRcIjpcImVkaXRcIiwgXCJkaXNwbGF5XCI6XCJFZGl0XCIsIFwiaWNvblwiOlwiY2xpcGJvYXJkXCIsIFwiaXRlbXNcIjpbXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcInVuZG9cIiwgXCJkaXNwbGF5XCI6XCJVbmRvXCIgfSxcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwicmVkb1wiLCBcImRpc3BsYXlcIjpcIlJlZG9cIiB9XHJcblx0XHRdfSxcclxuXHRcdHsgXCJpdGVtaWRcIjpcImFzc2V0XCIsIFwiZGlzcGxheVwiOlwiQXNzZXRzXCIsIFwiaWNvblwiOlwicGljdHVyZXNcIiwgXCJzZWxlY3RjaGlsZFwiOnRydWUsIFwiaXRlbXNcIjpbXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcImFsbFwiLCBcImRpc3BsYXlcIjpcIkFsbFwiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcImZvbnRzXCIsIFwiZGlzcGxheVwiOlwiRm9udHNcIiB9LFxyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJjb2xvcnNcIiwgXCJkaXNwbGF5XCI6XCJDb2xvcnNcIiB9LFxyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJpbWFnZXNcIiwgXCJkaXNwbGF5XCI6XCJJbWFnZXNcIiB9LFxyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJ2aWRlb3NcIiwgXCJkaXNwbGF5XCI6XCJWaWRlb3NcIiB9XHJcblx0XHRdfSxcclxuXHRcdHsgXCJpdGVtaWRcIjpcImhlbHBcIiwgXCJkaXNwbGF5XCI6XCJIZWxwXCIsIFwiaWNvblwiOlwiaGVscFwiIH1cclxuXHRdfSxcclxuXTsiLCJpbXBvcnQgRXZlbnRzIGZyb20gXCIuL2dsb2JhbGV2ZW50cy5qc1wiO1xyXG5cclxuY2xhc3MgRGlhbG9nTWFuYWdlclxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdFxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dNYW5hZ2VyOyIsImltcG9ydCBFdmVudHMgZnJvbSBcIi4vZ2xvYmFsZXZlbnRzLmpzXCI7XHJcblxyXG5jbGFzcyBFdmVudFF1ZXVlXHJcbntcclxuXHRldmVudFF1ZXVlID0gW107XHJcblx0ZXZlbnRRdWV1ZU9mZnNldCA9IDA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRFdmVudHMub24oJ2RvbWV2ZW50JywgOjp0aGlzLmFkZFRvUXVldWUpO1xyXG5cdH1cclxuXHJcblx0YWRkVG9RdWV1ZShldnQpXHJcblx0e1xyXG5cdFx0aWYodGhpcy5ldmVudFF1ZXVlT2Zmc2V0ICE9PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBOZWVkIHRvIGZpcnN0IGRpc2NhcmQgJ3VuZG8tZWQnIGNoYW5nZXMsIGFuZCBtb3ZlIG9mZnNldCBiYWNrIHRvIDBcclxuXHRcdFx0dmFyIHJlbW92ZWRFdnRzID0gdGhpcy5ldmVudFF1ZXVlLnNwbGljZSgtdGhpcy5ldmVudFF1ZXVlT2Zmc2V0LCB0aGlzLmV2ZW50UXVldWVPZmZzZXQpO1xyXG5cdFx0XHRyZW1vdmVkRXZ0cy5mb3JFYWNoKHJlbW92ZUV2dCA9PiByZW1vdmVFdnQuZGVzdG9yeUV2ZW50KCkpO1xyXG5cdFx0XHR0aGlzLmV2ZW50UXVldWVPZmZzZXQgPSAwO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ldmVudFF1ZXVlLnB1c2goZXZ0KTtcclxuXHRcdGV2dC5wZXJmb3JtRXZlbnRBY3Rpb24oKTtcclxuXHR9XHJcblxyXG5cdHVuZG9Gcm9tUXVldWUoKVxyXG5cdHtcclxuXHRcdHZhciBvZmZzZXQgPSAodGhpcy5ldmVudFF1ZXVlLmxlbmd0aC0xKS10aGlzLmV2ZW50UXVldWVPZmZzZXQ7XHJcblx0XHRpZihvZmZzZXQgPj0gMClcclxuXHRcdHtcclxuXHRcdFx0dmFyIGV2dCA9IHRoaXMuZXZlbnRRdWV1ZVtvZmZzZXRdO1xyXG5cdFx0XHRldnQucmV2ZXJ0RXZlbnRBY3Rpb24oKTtcclxuXHRcdFx0dGhpcy5ldmVudFF1ZXVlT2Zmc2V0Kys7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZWRvRnJvbVF1ZXVlKClcclxuXHR7XHJcblx0XHRpZih0aGlzLmV2ZW50UXVldWVPZmZzZXQgIT09IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZXZlbnRRdWV1ZU9mZnNldC0tO1xyXG5cdFx0XHR2YXIgb2Zmc2V0ID0gKHRoaXMuZXZlbnRRdWV1ZS5sZW5ndGgtMSktdGhpcy5ldmVudFF1ZXVlT2Zmc2V0O1xyXG5cdFx0XHR2YXIgZXZ0ID0gdGhpcy5ldmVudFF1ZXVlW29mZnNldF07XHJcblx0XHRcdGV2dC5wZXJmb3JtRXZlbnRBY3Rpb24oKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50UXVldWU7IiwiaW1wb3J0IERvbUV2ZW50IGZyb20gXCIuL2RvbWV2ZW50LmpzXCI7XHJcblxyXG5jbGFzcyBBZGRFdmVudCBleHRlbmRzIERvbUV2ZW50XHJcbntcclxuXHRkb20gPSBudWxsO1xyXG5cdHFTSUQgPSBudWxsO1xyXG5cdHBhcmVudCA9IG51bGw7XHJcblxyXG5cdGRlZmF1bHRDU1MgPSBcclxuXHR7XHJcblx0XHRcIndpZHRoXCI6XCIxMDBweFwiLFxyXG5cdFx0XCJoZWlnaHRcIjpcIjEwMHB4XCJcclxuXHR9O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihldnRPcHRzLCBkb20pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmRvbSA9IGRvbTtcclxuXHRcdHRoaXMucVNJRCA9IHRoaXMuZG9tLmdlbmVyYXRlR3VpZCgpO1xyXG5cdFx0dGhpcy5wYXJlbnQgPSBldnRPcHRzLnRhcmdldDtcclxuXHR9XHJcblxyXG5cdHBlcmZvcm1FdmVudEFjdGlvbigpXHJcblx0e1xyXG5cdFx0dGhpcy5kb20uYWRkRWxlbWVudCh7XHJcblx0XHRcdFwicVNJRFwiOiB0aGlzLnFTSUQsXHJcblx0XHRcdFwicGFyZW50XCI6IHRoaXMucGFyZW50LFxyXG5cdFx0XHRcInBvc2l0aW9uXCI6IDAsXHJcblx0XHRcdFwidGFnXCI6IFwiZGl2XCIsXHJcblx0XHRcdFwiY3NzXCI6IHRoaXMuZGVmYXVsdENTU1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXZlcnRFdmVudEFjdGlvbigpXHJcblx0e1xyXG5cdFx0dGhpcy5kb20ucmVtb3ZlRWxlbWVudCh0aGlzLnFTSUQpO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpXHJcblx0e1xyXG5cdFx0dGhpcy5kb20gPSBudWxsO1xyXG5cdFx0dGhpcy5xU0lEID0gbnVsbDtcclxuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZEV2ZW50OyIsImNsYXNzIERvbUV2ZW50XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cclxuXHR9XHJcblx0XHJcblx0cGVyZm9ybUV2ZW50QWN0aW9uKClcclxuXHR7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEb20gRXZlbnQgcGVyZm9ybUV2ZW50QWN0aW9uIE1ldGhvZCBOb3QgSW1wbGVtZW50ZWQhXCIpO1xyXG5cdH1cclxuXHJcblx0cmV2ZXJ0RXZlbnRBY3Rpb24oKVxyXG5cdHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbSBFdmVudCByZXZlcnRFdmVudEFjdGlvbiBNZXRob2QgTm90IEltcGxlbWVudGVkIVwiKTtcclxuXHR9XHJcblxyXG5cdGRlc3RvcnlFdmVudCgpXHJcblx0e1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tIEV2ZW50IGRlc3RvcnlFdmVudCBNZXRob2QgTm90IEltcGxlbWVudGVkIVwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvbUV2ZW50OyIsImltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSBcIi4vbGliL2V2ZW50aGFuZGxlci5qc1wiO1xyXG5pbXBvcnQgeyBMb2dnaW5nIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XHJcblxyXG5jbGFzcyBHbG9iYWxFdmVudEhhbmRsZXIgZXh0ZW5kcyBFdmVudEhhbmRsZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5zZXR1cExvZ2dpbmcoKTtcclxuXHR9XHJcblxyXG5cdHNldHVwTG9nZ2luZygpXHJcblx0e1xyXG5cdFx0aWYoTG9nZ2luZy5WZXJib3NlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm9uKCcqJywgZnVuY3Rpb24oZXZ0LCBldmVudE5hbWUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhldmVudE5hbWUsIGV2dCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEdsb2JhbEV2ZW50SGFuZGxlcigpOyIsImNsYXNzIERyYXdpbmdCb2FyZFxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdFxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEcmF3aW5nQm9hcmQ7IiwiY2xhc3MgRXZlbnRIYW5kbGVyXHJcbntcclxuXHRJU19FVkVOVF9IQU5ETEVSID0gdHJ1ZTtcclxuXHRsaXN0ZW5lcnMgPSB7fTtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0b24oZXZlbnRUeXBlLCBldmVudENhbGxiYWNrKVxyXG5cdHtcclxuXHRcdHZhciBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdO1xyXG5cdFx0aWYoIUFycmF5LmlzQXJyYXkobGlzdGVuZXJzKSlcclxuXHRcdHtcclxuXHRcdFx0bGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRUeXBlXSA9IFtdO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5saXN0ZW5lcnNbZXZlbnRUeXBlXS5wdXNoKGV2ZW50Q2FsbGJhY2spO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRvZmYoZXZlbnRUeXBlLCBldmVudENhbGxiYWNrKVxyXG5cdHtcclxuXHRcdHZhciBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdO1xyXG5cdFx0aWYoQXJyYXkuaXNBcnJheShsaXN0ZW5lcnMpKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgaW5keDtcclxuXHRcdFx0d2hpbGUoKGluZHggPSBsaXN0ZW5lcnMuaW5kZXhPZihldmVudENhbGxiYWNrKSkgIT09IC0xKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGlzdGVuZXJzLnNwbGljZShpbmR4LCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHR0cmlnZ2VyKGV2ZW50VHlwZSwgZXZlbnRJbmZvcm1hdGlvbilcclxuXHR7XHJcblx0XHRpZihBcnJheS5pc0FycmF5KHRoaXMubGlzdGVuZXJzW2V2ZW50VHlwZV0pKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdLmZvckVhY2goKGZuKSA9PiBmbi5jYWxsKG51bGwsIGV2ZW50SW5mb3JtYXRpb24sIGV2ZW50VHlwZSkpO1xyXG5cdFx0fVxyXG5cdFx0aWYoQXJyYXkuaXNBcnJheSh0aGlzLmxpc3RlbmVyc1snKiddKSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5saXN0ZW5lcnNbJyonXS5mb3JFYWNoKChmbikgPT4gZm4uY2FsbChudWxsLCBldmVudEluZm9ybWF0aW9uLCBldmVudFR5cGUpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0X3Bhc3NFdmVudE9uKGV2ZW50SW5mb3JtYXRpb24sIGV2ZW50VHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLnRyaWdnZXIoZXZlbnRUeXBlLCBldmVudEluZm9ybWF0aW9uKTtcclxuXHR9XHJcblxyXG5cdGNsZWFudXAoKVxyXG5cdHtcclxuXHRcdE9iamVjdC5rZXlzKHRoaXMubGlzdGVuZXJzKS5mb3JFYWNoKChldnROYW1lKSA9PiB7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1tldnROYW1lXTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5saXN0ZW5lcnMgPSB7fTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRIYW5kbGVyOyIsImNsYXNzIE1lbnVCdWlsZGVyXHJcbntcclxuXHRvcHRzID0ge307XHJcblx0dGFyZ2V0ID0gbnVsbDtcclxuXHQkY29udGFpbmVyID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0cykgXHJcblx0e1xyXG5cdFx0dGhpcy5vcHRzID0gb3B0cztcclxuXHRcdHRoaXMuc2V0dXBNZW51KG9wdHMuZGVmaW5pdGlvbnMpO1xyXG5cdFx0dGhpcy5zZXR1cEV2ZW50cygpO1xyXG5cdH1cclxuXHJcblx0c2V0dXBNZW51KGRlZmluaXRpb24pXHJcblx0e1xyXG5cdFx0dGhpcy4kY29udGFpbmVyID0gJChcclxuXHRcdFx0YDxkaXYgY2xhc3M9XCJxcy1lbmdpbmUtZGQtY29udGFpbmVyXCIgdGFiaW5kZXg9XCIwXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1pbm5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC10aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInFzLWVuZ2luZS1kZC10aXRsZS10ZXh0XCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInFzLWVuZ2luZS1kZC10aXRsZS1pY29uIHFzLWljb24gcXMtaWNvbi1wZW5jaWxcIj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+YCkuYXBwZW5kVG8odGhpcy5vcHRzLmNvbnRhaW5lcik7XHJcblx0XHR0aGlzLiRjb250YWluZXIuZmluZCgnLnFzLWVuZ2luZS1kZC10aXRsZSAucXMtZW5naW5lLWRkLXRpdGxlLXRleHQnKS50ZXh0KCdCbG9jayAxJyk7ICAgICBcclxuXHRcdHRoaXMucHJvY2Vzc0RlZmluaXRpb24odGhpcy4kY29udGFpbmVyLmZpbmQoJy5xcy1lbmdpbmUtZGQtaW5uZXInKSwgZGVmaW5pdGlvbik7XHJcblx0fVxyXG5cclxuXHRwcm9jZXNzRGVmaW5pdGlvbigkcGFyZW50LCBkZWYpXHJcblx0e1xyXG4gICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShkZWYpKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGRlZi5mb3JFYWNoKHRoaXMucHJvY2Vzc0RlZmluaXRpb24uYmluZCh0aGlzLCAkcGFyZW50KSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmKHR5cGVvZiBkZWYgPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFyICRjaGlsZFBhcmVudCA9IG51bGwsIGlkID0gJHBhcmVudC5jbG9zZXN0KCdbZGF0YS1xcy1pZF0nKS5kYXRhKCdxcy1pZCcpO1xyXG4gICAgICAgICAgICAgIGlkID0gaWQgPyBpZCsnLicgOiBcIlwiO1xyXG4gICAgICAgICAgICAgIGlmKHR5cGVvZiBkZWYuZ3JvdXBpZCAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICRjaGlsZFBhcmVudCA9ICQoJzxkaXYgY2xhc3M9XCJxcy1lbmdpbmUtZGQtZ3JvdXBcIiBkYXRhLXFzLWlkPVwiJytkZWYuZ3JvdXBpZCsnXCI+PC9kaXY+JykuYXBwZW5kVG8oJHBhcmVudCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2UgaWYodHlwZW9mIGRlZi5pdGVtaWQgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgJGl0ZW0gPSAkKCc8ZGl2IGNsYXNzPVwicXMtZW5naW5lLWRkLWl0ZW1cIiBkYXRhLXFzLWlkPVwiJytpZCtkZWYuaXRlbWlkKydcIj48c3BhbiBjbGFzcz1cInFzLWVuZ2luZS1kZC1pY29uXCI+PC9zcGFuPjwvZGl2PicpLmFwcGVuZFRvKCRwYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICBpZih0eXBlb2YgZGVmLmljb24gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICRpdGVtLmZpbmQoJy5xcy1lbmdpbmUtZGQtaWNvbicpLmFkZENsYXNzKCdxcy1pY29uIHFzLWljb24tJytkZWYuaWNvbik7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGRlZi5kaXNwbGF5ICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkaXRlbS5hcHBlbmQoJzxzcGFuPicrZGVmLmRpc3BsYXkrJzwvc3Bhbj4nKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KGRlZi5pdGVtcykpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICRjaGlsZFBhcmVudCA9ICQoJzxkaXYgY2xhc3M9XCJxcy1lbmdpbmUtZGQtbW9yZVwiPjxkaXYgY2xhc3M9XCJxcy1lbmdpbmUtZGQtZXhwYW5kXCI+Jmd0OzwvZGl2PjxkaXYgY2xhc3M9XCJxcy1lbmdpbmUtZGQtZ3JvdXBcIj48L2Rpdj48L2Rpdj4nKS5hcHBlbmRUbygkaXRlbSkuZmluZCgnLnFzLWVuZ2luZS1kZC1ncm91cCcpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmKCRjaGlsZFBhcmVudCAmJiBBcnJheS5pc0FycmF5KGRlZi5pdGVtcykpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NEZWZpbml0aW9uKCRjaGlsZFBhcmVudCwgZGVmLml0ZW1zKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblx0fVxyXG5cclxuXHRzZXR1cEV2ZW50cygpXHJcblx0e1xyXG5cdFx0JCh0aGlzLm9wdHMuY29udGFpbmVyKS5vbignY29udGV4dG1lbnUnLCAoZXZ0KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRpZigkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJy5xcy1lbmdpbmUtZGQtY29udGFpbmVyJykuc2l6ZSgpPT09MClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMudGFyZ2V0ID0gZXZ0LnRhcmdldDtcclxuXHRcdFx0XHQkKCcucXMtZW5naW5lLWRkLWNvbnRhaW5lcicpLmZvY3VzKCkuY3NzKHsgJ2xlZnQnOmV2dC5jbGllbnRYKydweCcsICd0b3AnOmV2dC5jbGllbnRZKydweCd9KTtcclxuXHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLiRjb250YWluZXIub24oJ2NsaWNrJywgKGV2dCkgPT5cclxuXHRcdHtcclxuXHRcdFx0dmFyICRxc2lkID0gJChldnQudGFyZ2V0KS5jbG9zZXN0KCdbZGF0YS1xcy1pZF0nKTtcclxuXHRcdFx0aWYoJHFzaWQuc2l6ZSgpID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCQoJy5xcy1lbmdpbmUtZGQtY29udGFpbmVyJykuYmx1cigpO1xyXG5cdFx0XHRcdGlmKHRoaXMub3B0cy5ldmVudHMpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5vcHRzLmV2ZW50cy50cmlnZ2VyKCdtZW51c2VsZWN0JywgeyBcImJ1dHRvbmlkXCI6ICdtZW51LicrJHFzaWQuZGF0YSgncXMtaWQnKSwgXCJ0YXJnZXRcIjogdGhpcy50YXJnZXQgfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVCdWlsZGVyOyIsImNsYXNzIFV0aWxzIFxyXG57XHJcblx0c3RhdGljIGd1aWQoKVxyXG5cdHtcclxuXHRcdHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgciA9IE1hdGgucmFuZG9tKCkqMTZ8MCwgdiA9IGMgPT0gJ3gnID8gciA6IChyJjB4M3wweDgpO1xyXG5cdFx0ICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXRpbHM7IiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWxzLmpzXCI7XHJcbmltcG9ydCBEcmF3aW5nQm9hcmQgZnJvbSBcIi4vZHJhd2luZ2JvYXJkLmpzXCI7XHJcblxyXG5jbGFzcyBWaXJ0dWFsRE9NXHJcbntcclxuXHRndWlkcyA9IG5ldyBTZXQoKTtcclxuXHRkb20gPSBcclxuXHR7XHJcblx0XHRyb290UVNJRDogbnVsbCxcclxuXHRcdGVsZW1lbnRMb29rdXA6IHt9LFxyXG5cdFx0ZWxlbWVudHM6IHt9XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRzKVxyXG5cdHtcclxuXHRcdHRoaXMuYWRkRWxlbWVudCh7XHJcblx0XHRcdFwicG9zaXRpb25cIjogMCxcclxuXHRcdFx0XCJ0YWdcIjogb3B0cy5yb290RWxlbWVudC50YWdOYW1lLFxyXG5cdFx0XHRcIkNTU1wiOiB7fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZW5lcmF0ZUd1aWQoKVxyXG5cdHtcclxuXHRcdHZhciBndWlkID0gVXRpbHMuZ3VpZCgpO1xyXG5cdFx0d2hpbGUodGhpcy5ndWlkcy5oYXMoZ3VpZCkpZ3VpZCA9IFV0aWxzLmd1aWQoKTtcclxuXHRcdHRoaXMuZ3VpZFNldC5hZGQoZ3VpZCk7XHJcblx0XHRyZXR1cm4gZ3VpZDtcclxuXHR9XHJcblxyXG5cdGdldEVsZW1lbnRRU0lEKGRvbUVsZW1lbnQpXHJcblx0e1xyXG5cclxuXHRcdC8vIFRISVMgV0lMTCBIQVZFIFRPIFVTRSBEUkFXSU5HIEJPQVJEXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZG9tLmVsZW1lbnRMb29rdXBbZG9tRWxlbWVudF0gfHwgbnVsbDtcclxuXHR9XHJcblxyXG5cdGFkZEVsZW1lbnQob3B0cyA9IHtcclxuXHRcdFx0XCJxU0lEXCI6IG51bGwsXHJcblx0XHRcdFwicGFyZW50XCI6IG51bGwsXHJcblx0XHRcdFwicG9zaXRpb25cIjogMCxcclxuXHRcdFx0XCJ0YWdcIjogXCJcIixcclxuXHRcdFx0XCJjc3NcIjoge30sXHJcblx0XHRcdFwiYXR0clwiOiB7fVxyXG5cdFx0fSlcclxuXHR7XHJcblx0XHRpZighb3B0cy5xU0lEKVxyXG5cdFx0e1xyXG5cdFx0XHRvcHRzLnFTSUQgPSB0aGlzLmdlbmVyYXRlR3VpZCgpO1xyXG5cdFx0fVxyXG5cdFx0aWYodHlwZW9mIG9wdHMucGFyZW50ID09PSBcInN0cmluZ1wiKVxyXG5cdFx0e1xyXG5cdFx0XHRvcHRzLnBhcmVudCA9IHRoaXMuZ2V0RWxlbWVudFFTSUQob3B0cy5wYXJlbnQpO1xyXG5cdFx0fVxyXG5cdFx0aWYodHlwZW9mIG9wdHMucGFyZW50ICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0e1xyXG5cdFx0XHRpZighdGhpcy5kb20ucm9vdFFTSUQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRvbS5yb290UVNJRCA9IG9wdHMucVNJRDtcclxuXHRcdFx0XHRvcHRzLnBhcmVudCA9IG51bGw7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0b3B0cy5wYXJlbnQgPSB0aGlzLmRvbS5yb290UVNJRDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZWxlbWVudHNbb3B0cy5xU0lEXSA9IG9wdHM7XHJcblx0XHQvL3RoaXMuZWxlbWVudExvb2t1cFtvcHRzLmVsZW1lbnRdID0gb3B0cy5xU0lEOyBUSElTIFdJTEwgSEFWRSBUTyBCRSBET05FIFRIUk9VR0ggRFJBV0lORyBCT0FSRCBcclxuXHJcblx0XHRyZXR1cm4gb3B0cy5xU0lEO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlRWxlbWVudChvcHRzID0geyBcInRhZ1wiOlwiXCIsIFwiY3NzXCI6e30sIFwiYXR0clwiOnt9IH0pXHJcblx0e1xyXG5cclxuXHR9XHJcblxyXG5cdHJlbW92ZUVsZW1lbnQoKVxyXG5cdHtcclxuXHJcblx0fVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBWaXJ0dWFsRE9NOyIsImltcG9ydCBWaXJ0dWFsRE9NIGZyb20gXCIuL2xpYi92aXJ0dWFsZG9tLmpzXCI7XHJcblxyXG5jbGFzcyBQcmltYXJ5RE9NIGV4dGVuZHMgVmlydHVhbERPTVxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKHtcclxuXHRcdFx0XCJyb290RWxlbWVudFwiOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhd2luZy1ib2FyZCcpXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJpbWFyeURPTSgpOyJdfQ==
