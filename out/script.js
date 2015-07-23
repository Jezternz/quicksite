(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _scriptConstantsJs = require("./script/constants.js");

var _scriptEventhandlerJs = require("./script/eventhandler.js");

var _scriptEventhandlerJs2 = _interopRequireDefault(_scriptEventhandlerJs);

var _scriptMenubuilderJs = require("./script/menubuilder.js");

var _scriptMenubuilderJs2 = _interopRequireDefault(_scriptMenubuilderJs);

var _scriptDialogmanagerJs = require("./script/dialogmanager.js");

var _scriptDialogmanagerJs2 = _interopRequireDefault(_scriptDialogmanagerJs);

var _scriptActionmanagerJs = require("./script/actionmanager.js");

var _scriptActionmanagerJs2 = _interopRequireDefault(_scriptActionmanagerJs);

var _scriptEventqueueJs = require("./script/eventqueue.js");

var _scriptEventqueueJs2 = _interopRequireDefault(_scriptEventqueueJs);

var _scriptVirtualdomJs = require("./script/virtualdom.js");

var _scriptVirtualdomJs2 = _interopRequireDefault(_scriptVirtualdomJs);

var _scriptDrawingboardJs = require("./script/drawingboard.js");

var _scriptDrawingboardJs2 = _interopRequireDefault(_scriptDrawingboardJs);

window.onload = function () {
	var app = {};

	app.globalEventChannel = new _scriptEventhandlerJs2["default"]();

	app.menuBuilder = new _scriptMenubuilderJs2["default"](_scriptConstantsJs.MenuDefinitions, { "container": "body", "events": app.globalEventChannel });
	app.eventQueue = new _scriptEventqueueJs2["default"]({ "events": app.globalEventChannel });

	app.virtualDOM = new _scriptVirtualdomJs2["default"]({ "events": app.globalEventChannel });

	app.drawingBoard = new _scriptDrawingboardJs2["default"]({ "events": app.globalEventChannel });

	app.dialogManager = new _scriptDialogmanagerJs2["default"]({ "container": "body", "events": app.globalEventChannel });
	app.actionManager = new _scriptActionmanagerJs2["default"]({ "events": app.globalEventChannel, "dom": app.virtualDOM });

	if (_scriptConstantsJs.Logging.Verbose) {
		app.globalEventChannel.on('*', function (evt, eventName) {
			console.log(eventName, evt);
		});
	}
};

},{"./script/actionmanager.js":2,"./script/constants.js":3,"./script/dialogmanager.js":4,"./script/drawingboard.js":5,"./script/eventhandler.js":6,"./script/eventqueue.js":7,"./script/menubuilder.js":11,"./script/virtualdom.js":12}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _eventsAddeventJs = require("./events/addevent.js");

var _eventsAddeventJs2 = _interopRequireDefault(_eventsAddeventJs);

var ActionManager = (function () {
	function ActionManager() {
		var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		_classCallCheck(this, ActionManager);

		this._events = null;
		this._dom = null;
		this._eventMethodTranslation = {
			"menu.dom.add": _eventsAddeventJs2["default"]
		};

		this._events = opts.events;
		this._dom = opts.dom;
		this._events.on('menuselect', this.handleSelectEvent.bind(this));
	}

	_createClass(ActionManager, [{
		key: "handleSelectEvent",
		value: function handleSelectEvent(evt) {
			if (typeof this._eventMethodTranslation[evt.buttonid] !== "undefined") {
				var domEvent = new this._eventMethodTranslation[evt.buttonid](evt, dom);
				this._events.trigger('domevent', domEvent);
			}
		}
	}]);

	return ActionManager;
})();

exports["default"] = ActionManager;
module.exports = exports["default"];

},{"./events/addevent.js":8}],3:[function(require,module,exports){
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DialogManager = function DialogManager() {
	_classCallCheck(this, DialogManager);
};

exports["default"] = DialogManager;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventHandler = (function () {
	function EventHandler() {
		_classCallCheck(this, EventHandler);

		this.listeners = {};
		this._IS_EVENT_HANDLER = true;
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

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _eventsUndoeventJs = require('./events/undoevent.js');

var _eventsUndoeventJs2 = _interopRequireDefault(_eventsUndoeventJs);

var EventQueue = (function () {
	function EventQueue(opts) {
		_classCallCheck(this, EventQueue);

		this._eventQueue = [];

		opts.events.on('domevent', this.addToQueue.bind(this));
	}

	_createClass(EventQueue, [{
		key: 'addToQueue',
		value: function addToQueue(evt) {
			this._eventQueue.push(evt);
			evt.performEventAction();
		}
	}, {
		key: 'undoFromQueue',
		value: function undoFromQueue() {
			var evt = this._eventQueue.pop();
			evt.revertEventAction();
			var undoEvt = new _eventsUndoeventJs2['default']({ "relatedEvent": evt });
			this.addToQueue(undoEvt);
		}
	}, {
		key: 'redoFromQueue',
		value: function redoFromQueue() {
			if (this._eventQueue[this._eventQueue.length - 1].IS_UNDO_EVENT) {
				var evt = this._eventQueue.pop();
				evt.revertEventAction();
				this.addToQueue(evt.relatedEvent);
			}
		}
	}]);

	return EventQueue;
})();

exports['default'] = EventQueue;
module.exports = exports['default'];

},{"./events/undoevent.js":10}],8:[function(require,module,exports){
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

	function AddEvent(opts, dom) {
		_classCallCheck(this, AddEvent);

		_get(Object.getPrototypeOf(AddEvent.prototype), "constructor", this).call(this);

		this._dom = null;
		this._QSID = null;
		this._targetQSID = null;
		this._defaultCSS = {
			"width": "100px",
			"height": "100px"
		};
		this._QSID = 0; // :TODOOOOOO GENERATE GUID!
		this._dom = dom;
		this._targetQSID = this._dom.getElementQSID(opts.target);
	}

	_createClass(AddEvent, [{
		key: "performEventAction",
		value: function performEventAction() {
			this._dom.addElement({
				"QSID": this._QSID,
				"parentQSID": this._targetQSID,
				"position": 0,
				"tag": "div",
				"css": this._defaultCSS
			});
		}
	}, {
		key: "revertEventAction",
		value: function revertEventAction() {
			this._dom.removeElement(this._QSID);
		}
	}]);

	return AddEvent;
})(_domeventJs2["default"]);

exports["default"] = AddEvent;
module.exports = exports["default"];

},{"./domevent.js":9}],9:[function(require,module,exports){
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
			throw new Error("Not Implemented!");
		}
	}, {
		key: "revertEventAction",
		value: function revertEventAction() {
			throw new Error("Not Implemented!");
		}
	}]);

	return DomEvent;
})();

exports["default"] = DomEvent;
module.exports = exports["default"];

},{}],10:[function(require,module,exports){
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

var UndoEvent = (function (_DomEvent) {
	_inherits(UndoEvent, _DomEvent);

	function UndoEvent(opts) {
		_classCallCheck(this, UndoEvent);

		_get(Object.getPrototypeOf(UndoEvent.prototype), "constructor", this).call(this);
		this.IS_UNDO_EVENT = true;
	}

	_createClass(UndoEvent, [{
		key: "performEventAction",
		value: function performEventAction() {}
	}, {
		key: "revertEventAction",
		value: function revertEventAction() {}
	}]);

	return UndoEvent;
})(_domeventJs2["default"]);

exports["default"] = UndoEvent;
module.exports = exports["default"];

},{"./domevent.js":9}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MenuBuilder = (function () {
	function MenuBuilder(definition) {
		var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		_classCallCheck(this, MenuBuilder);

		this._opts = opts;
		this._events = opts.events;
		this._$target = null;
		this._$container = null;
		this._setupMenu(definition);
		this._setupEvents();
	}

	_createClass(MenuBuilder, [{
		key: '_setupMenu',
		value: function _setupMenu(definition) {
			this._$container = $('<div class="qs-engine-dd-container" tabindex="0">\n\t\t\t\t<div class="qs-engine-dd-inner">\n\t\t\t\t\t<div class="qs-engine-dd-title">\n\t\t\t\t\t\t<span class="qs-engine-dd-title-text"></span>\n\t\t\t\t\t\t<span class="qs-engine-dd-title-icon qs-icon qs-icon-pencil"></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>').appendTo(this._opts.container);
			this._$container.find('.qs-engine-dd-title .qs-engine-dd-title-text').text('Block 1');
			this._processDefinition(this._$container.find('.qs-engine-dd-inner'), definition);
		}
	}, {
		key: '_processDefinition',
		value: function _processDefinition($parent, def) {
			if (Array.isArray(def)) {
				def.forEach(this._processDefinition.bind(this, $parent));
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
					this._processDefinition($childParent, def.items);
				}
			}
		}
	}, {
		key: '_setupEvents',
		value: function _setupEvents() {
			var _this = this;

			$(this._opts.container).on('contextmenu', function (evt) {
				if ($(evt.target).closest('.qs-engine-dd-container').size() === 0) {
					_this._target = evt.target;
					$('.qs-engine-dd-container').focus().css({ 'left': evt.clientX + 'px', 'top': evt.clientY + 'px' });
					evt.preventDefault();
				}
			});
			this._$container.on('click', function (evt) {
				var $qsid = $(evt.target).closest('[data-qs-id]');
				if ($qsid.size() > 0) {
					$('.qs-engine-dd-container').blur();
					if (_this._events) {
						_this._events.trigger('menuselect', { "buttonid": 'menu.' + $qsid.data('qs-id'), "target": _this._target });
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
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VirtualDOM = function VirtualDOM() {
	_classCallCheck(this, VirtualDOM);
};

exports["default"] = VirtualDOM;
module.exports = exports["default"];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0LmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9hY3Rpb25tYW5hZ2VyLmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9jb25zdGFudHMuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2RpYWxvZ21hbmFnZXIuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2RyYXdpbmdib2FyZC5qcyIsIkM6L3dvcmsvUXVpY2tTaXRlL3NyYy9zY3JpcHQvZXZlbnRoYW5kbGVyLmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9ldmVudHF1ZXVlLmpzIiwiQzovd29yay9RdWlja1NpdGUvc3JjL3NjcmlwdC9ldmVudHMvYWRkZXZlbnQuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L2V2ZW50cy9kb21ldmVudC5qcyIsIkM6L3dvcmsvUXVpY2tTaXRlL3NyYy9zY3JpcHQvZXZlbnRzL3VuZG9ldmVudC5qcyIsIkM6L3dvcmsvUXVpY2tTaXRlL3NyYy9zY3JpcHQvbWVudWJ1aWxkZXIuanMiLCJDOi93b3JrL1F1aWNrU2l0ZS9zcmMvc2NyaXB0L3ZpcnR1YWxkb20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O2lDQ0F5Qyx1QkFBdUI7O29DQUN2QywwQkFBMEI7Ozs7bUNBQzNCLHlCQUF5Qjs7OztxQ0FDdkIsMkJBQTJCOzs7O3FDQUMzQiwyQkFBMkI7Ozs7a0NBQzlCLHdCQUF3Qjs7OztrQ0FDeEIsd0JBQXdCOzs7O29DQUN0QiwwQkFBMEI7Ozs7QUFFbkQsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUNoQjtBQUNDLEtBQUksR0FBRyxHQUFHLEVBQUUsQ0FB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RSxTQUFTLEVBQUMsUUFBUSxFQUFFLGFBQWEsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQ3BFLEVBQUUsUUFBUSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsYUFBYSxFQUFFLEVBQzlDLEVBQUUsUUFBUSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsY0FBYyxFQUFFLENBQ2pELEVBQUMsRUFDRixFQUFFLFFBQVEsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUNwRSxFQUFFLFFBQVEsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLGFBQWEsRUFBRSxFQUM5QyxFQUFFLFFBQVEsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLGNBQWMsRUFBRSxDQUNqRCxFQUFDLENBQ0YsRUFBQyxFQUNGLEVBQUUsUUFBUSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxXQUFXLEVBQUUsT0FBTyxFQUFDLENBQ2hFLEVBQUUsUUFBUSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxFQUFFLEVBQ3JDLEVBQUUsUUFBUSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxFQUFFLENBQ3JDLEVBQUMsRUFDRixFQUFFLFFBQVEsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsVUFBVSxFQUFFLGFBQWEsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQ3RGLEVBQUUsUUFBUSxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUMsS0FBSyxFQUFFLEVBQ25DLEVBQUUsUUFBUSxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUMsT0FBTyxFQUFFLEVBQ3ZDLEVBQUUsUUFBUSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsUUFBUSxFQUFFLEVBQ3pDLEVBQUUsUUFBUSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsUUFBUSxFQUFFLEVBQ3pDLEVBQUUsUUFBUSxFQUFDLFFBQVEsRUFBRSxTQUFT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QUFDbEQsUUFBRyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUNuQjtBQUNDLE1BQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3BDLFNBQUcsTUFBSyxPQUFPLEVBQ2Y7QUFDQyxZQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sR0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFLLE9BQU8sRUFBRSxDQUFDLENBQUM7TUFDeEc7S0FDRDtJQUNELENBQUMsQ0FBQztHQUVIOzs7UUF4RkksV0FBVzs7O0FBMEZoQixDQUFDOztxQkFFYSxXQUFXOzs7Ozs7Ozs7Ozs7SUM1RnBCLFVBQVUsR0FFSixTQUZOLFVBQVUsR0FHZjt1QkFISyxVQUFVO0NBS2Q7O3FCQUVhLFVBQVUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgTWVudURlZmluaXRpb25zLCBMb2dnaW5nIH0gZnJvbSBcIi4vc2NyaXB0L2NvbnN0YW50cy5qc1wiO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gXCIuL3NjcmlwdC9ldmVudGhhbmRsZXIuanNcIjtcclxuaW1wb3J0IE1lbnVCdWlsZGVyIGZyb20gXCIuL3NjcmlwdC9tZW51YnVpbGRlci5qc1wiO1xyXG5pbXBvcnQgRGlhbG9nTWFuYWdlciBmcm9tIFwiLi9zY3JpcHQvZGlhbG9nbWFuYWdlci5qc1wiO1xyXG5pbXBvcnQgQWN0aW9uTWFuYWdlciBmcm9tIFwiLi9zY3JpcHQvYWN0aW9ubWFuYWdlci5qc1wiO1xyXG5pbXBvcnQgRXZlbnRRdWV1ZSBmcm9tIFwiLi9zY3JpcHQvZXZlbnRxdWV1ZS5qc1wiO1xyXG5pbXBvcnQgVmlydHVhbERPTSBmcm9tIFwiLi9zY3JpcHQvdmlydHVhbGRvbS5qc1wiO1xyXG5pbXBvcnQgRHJhd2luZ0JvYXJkIGZyb20gXCIuL3NjcmlwdC9kcmF3aW5nYm9hcmQuanNcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpXHJcbntcclxuXHR2YXIgYXBwID0ge307XHJcblxyXG5cdGFwcC5nbG9iYWxFdmVudENoYW5uZWwgPSBuZXcgRXZlbnRIYW5kbGVyKCk7XHJcblxyXG5cdGFwcC5tZW51QnVpbGRlciA9IG5ldyBNZW51QnVpbGRlcihNZW51RGVmaW5pdGlvbnMsIHsgXCJjb250YWluZXJcIjpcImJvZHlcIiwgXCJldmVudHNcIjogYXBwLmdsb2JhbEV2ZW50Q2hhbm5lbCB9KTtcclxuXHRhcHAuZXZlbnRRdWV1ZSA9IG5ldyBFdmVudFF1ZXVlKHsgXCJldmVudHNcIjogYXBwLmdsb2JhbEV2ZW50Q2hhbm5lbCB9KTtcclxuXHJcblx0YXBwLnZpcnR1YWxET00gPSBuZXcgVmlydHVhbERPTSh7IFwiZXZlbnRzXCI6IGFwcC5nbG9iYWxFdmVudENoYW5uZWwgfSk7XHJcblxyXG5cdGFwcC5kcmF3aW5nQm9hcmQgPSBuZXcgRHJhd2luZ0JvYXJkKHsgXCJldmVudHNcIjogYXBwLmdsb2JhbEV2ZW50Q2hhbm5lbCB9KTtcclxuXHJcblx0YXBwLmRpYWxvZ01hbmFnZXIgPSBuZXcgRGlhbG9nTWFuYWdlcih7IFwiY29udGFpbmVyXCI6XCJib2R5XCIsIFwiZXZlbnRzXCI6IGFwcC5nbG9iYWxFdmVudENoYW5uZWwgfSk7XHJcblx0YXBwLmFjdGlvbk1hbmFnZXIgPSBuZXcgQWN0aW9uTWFuYWdlcih7IFwiZXZlbnRzXCI6IGFwcC5nbG9iYWxFdmVudENoYW5uZWwsIFwiZG9tXCI6IGFwcC52aXJ0dWFsRE9NIH0pO1xyXG5cclxuXHRpZihMb2dnaW5nLlZlcmJvc2UpXHJcblx0e1xyXG5cdFx0YXBwLmdsb2JhbEV2ZW50Q2hhbm5lbC5vbignKicsIGZ1bmN0aW9uKGV2dCwgZXZlbnROYW1lKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmxvZyhldmVudE5hbWUsIGV2dClcclxuXHRcdH0pO1xyXG5cdH1cclxufTsiLCJpbXBvcnQgQWRkRXZlbnQgZnJvbSBcIi4vZXZlbnRzL2FkZGV2ZW50LmpzXCI7XHJcblxyXG5jbGFzcyBBY3Rpb25NYW5hZ2VyXHJcbntcclxuXHJcblx0X2V2ZW50cyA9IG51bGw7XHJcblx0X2RvbSA9IG51bGw7XHJcblxyXG5cdF9ldmVudE1ldGhvZFRyYW5zbGF0aW9uID0ge1xyXG5cdFx0XCJtZW51LmRvbS5hZGRcIjogQWRkRXZlbnRcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdHMgPSB7fSlcclxuXHR7XHJcblx0XHR0aGlzLl9ldmVudHMgPSBvcHRzLmV2ZW50cztcclxuXHRcdHRoaXMuX2RvbSA9IG9wdHMuZG9tO1xyXG5cdFx0dGhpcy5fZXZlbnRzLm9uKCdtZW51c2VsZWN0JywgdGhpcy5oYW5kbGVTZWxlY3RFdmVudC5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVNlbGVjdEV2ZW50KGV2dClcclxuXHR7XHJcblx0XHRpZih0eXBlb2YgdGhpcy5fZXZlbnRNZXRob2RUcmFuc2xhdGlvbltldnQuYnV0dG9uaWRdICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgZG9tRXZlbnQgPSBuZXcgdGhpcy5fZXZlbnRNZXRob2RUcmFuc2xhdGlvbltldnQuYnV0dG9uaWRdKGV2dCwgZG9tKTtcclxuXHRcdFx0dGhpcy5fZXZlbnRzLnRyaWdnZXIoJ2RvbWV2ZW50JywgZG9tRXZlbnQpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uTWFuYWdlcjsiLCJleHBvcnQgY29uc3QgTG9nZ2luZyA9IHtcclxuXHRcIlZlcmJvc2VcIjogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnVEZWZpbml0aW9ucyA9IFtcclxuXHR7IFwiZ3JvdXBpZFwiOiBcImVsZW1lbnRcIiwgXCJpdGVtc1wiOiBbXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJ0ZXh0XCIsIFwiZGlzcGxheVwiOlwiVGV4dFwiLCBcImljb25cIjpcImxldHRlclwiIH0sXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJzaXplXCIsIFwiZGlzcGxheVwiOlwiU2l6ZVwiLCBcImljb25cIjpcImV4cGFuZFwiIH0sXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJwb3NpdGlvblwiLCBcImRpc3BsYXlcIjpcIlBvc2l0aW9uXCIsIFwiaWNvblwiOlwiY3Vyc29yXCIgfSxcclxuXHRcdHsgXCJpdGVtaWRcIjpcImJhY2tncm91bmRcIiwgXCJkaXNwbGF5XCI6XCJCYWNrZ3JvdW5kXCIsIFwiaWNvblwiOlwicGFpbnRcIiB9LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwiYm9yZGVyXCIsIFwiZGlzcGxheVwiOlwiQm9yZGVyXCIsIFwiaWNvblwiOlwiZW1wdHlcIiB9LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwibW9yZVwiLCBcImRpc3BsYXlcIjpcIk1vcmVcIiwgXCJpY29uXCI6XCJjb2dcIiB9XHJcblx0XX0sXHJcblx0eyBcImdyb3VwaWRcIjogXCJkb21cIiwgXCJpdGVtc1wiOltcclxuXHRcdHsgXCJpdGVtaWRcIjpcImFkZFwiLCBcImRpc3BsYXlcIjpcIkNyZWF0ZVwiLCBcImljb25cIjpcInBsdXNcIiwgXCJzZWxlY3RjaGlsZFwiOnRydWUsIFwiaXRlbXNcIjpbXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcInN0YW5kYXJkXCIsIFwiZGlzcGxheVwiOlwiU3RhbmRhcmRcIiB9LFxyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJsaW5rXCIsIFwiZGlzcGxheVwiOlwiTGlua1wiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcInRleHRib3hcIiwgXCJkaXNwbGF5XCI6XCJUZXh0Ym94XCIgfSxcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwiaW1hZ2VcIiwgXCJkaXNwbGF5XCI6XCJJbWFnZVwiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcInZpZGVvXCIsIFwiZGlzcGxheVwiOlwiVmlkZW9cIiB9LFxyXG5cdFx0XX0sXHJcblx0XHR7IFwiaXRlbWlkXCI6XCJyZW1vdmVcIiwgXCJkaXNwbGF5XCI6XCJSZW1vdmVcIiwgXCJpY29uXCI6XCJtaW51c1wiIH1cclxuXHRdfSxcclxuXHR7IFwiZ3JvdXBpZFwiOiBcIm1lbnVcIiwgXCJpdGVtc1wiOltcclxuXHRcdHsgXCJpdGVtaWRcIjpcImZpbGVcIiwgXCJkaXNwbGF5XCI6XCJGaWxlXCIsIFwiaWNvblwiOlwiZmlsZVwiLCBcIml0ZW1zXCI6W1xyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJleHBvcnRcIiwgXCJkaXNwbGF5XCI6XCJFeHBvcnRcIiwgXCJzZWxlY3RjaGlsZFwiOnRydWUsIFwiaXRlbXNcIjpbXHJcblx0XHRcdFx0eyBcIml0ZW1pZFwiOlwic2luZ2xlXCIsIFwiZGlzcGxheVwiOlwiU2luZ2xlIEhUTUxcIiB9LFxyXG5cdFx0XHRcdHsgXCJpdGVtaWRcIjpcInNlcGFyYXRlXCIsIFwiZGlzcGxheVwiOlwiU2VwYXJhdGUgQ1NTXCIgfVxyXG5cdFx0XHRdfSxcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwiaW1wb3J0XCIsIFwiZGlzcGxheVwiOlwiSW1wb3J0XCIsIFwic2VsZWN0Y2hpbGRcIjp0cnVlLCBcIml0ZW1zXCI6W1xyXG5cdFx0XHRcdHsgXCJpdGVtaWRcIjpcInNpbmdsZVwiLCBcImRpc3BsYXlcIjpcIlNpbmdsZSBIVE1MXCIgfSxcclxuXHRcdFx0XHR7IFwiaXRlbWlkXCI6XCJzZXBhcmF0ZVwiLCBcImRpc3BsYXlcIjpcIlNlcGFyYXRlIENTU1wiIH1cclxuXHRcdFx0XX1cclxuXHRcdF19LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwiZWRpdFwiLCBcImRpc3BsYXlcIjpcIkVkaXRcIiwgXCJpY29uXCI6XCJjbGlwYm9hcmRcIiwgXCJpdGVtc1wiOltcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwidW5kb1wiLCBcImRpc3BsYXlcIjpcIlVuZG9cIiB9LFxyXG5cdFx0XHR7IFwiaXRlbWlkXCI6XCJyZWRvXCIsIFwiZGlzcGxheVwiOlwiUmVkb1wiIH1cclxuXHRcdF19LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwiYXNzZXRcIiwgXCJkaXNwbGF5XCI6XCJBc3NldHNcIiwgXCJpY29uXCI6XCJwaWN0dXJlc1wiLCBcInNlbGVjdGNoaWxkXCI6dHJ1ZSwgXCJpdGVtc1wiOltcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwiYWxsXCIsIFwiZGlzcGxheVwiOlwiQWxsXCIgfSxcclxuXHRcdFx0eyBcIml0ZW1pZFwiOlwiZm9udHNcIiwgXCJkaXNwbGF5XCI6XCJGb250c1wiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcImNvbG9yc1wiLCBcImRpc3BsYXlcIjpcIkNvbG9yc1wiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcImltYWdlc1wiLCBcImRpc3BsYXlcIjpcIkltYWdlc1wiIH0sXHJcblx0XHRcdHsgXCJpdGVtaWRcIjpcInZpZGVvc1wiLCBcImRpc3BsYXlcIjpcIlZpZGVvc1wiIH1cclxuXHRcdF19LFxyXG5cdFx0eyBcIml0ZW1pZFwiOlwiaGVscFwiLCBcImRpc3BsYXlcIjpcIkhlbHBcIiwgXCJpY29uXCI6XCJoZWxwXCIgfVxyXG5cdF19LFxyXG5dOyIsImNsYXNzIERpYWxvZ01hbmFnZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nTWFuYWdlcjsiLCJjbGFzcyBEcmF3aW5nQm9hcmRcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRHJhd2luZ0JvYXJkOyIsImNsYXNzIEV2ZW50SGFuZGxlclxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHRoaXMubGlzdGVuZXJzID0ge307XHJcblx0XHR0aGlzLl9JU19FVkVOVF9IQU5ETEVSID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdG9uKGV2ZW50VHlwZSwgZXZlbnRDYWxsYmFjaylcclxuXHR7XHJcblx0XHR2YXIgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRUeXBlXTtcclxuXHRcdGlmKCFBcnJheS5pc0FycmF5KGxpc3RlbmVycykpXHJcblx0XHR7XHJcblx0XHRcdGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW2V2ZW50VHlwZV0gPSBbXTtcclxuXHRcdH1cclxuXHRcdHRoaXMubGlzdGVuZXJzW2V2ZW50VHlwZV0ucHVzaChldmVudENhbGxiYWNrKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0b2ZmKGV2ZW50VHlwZSwgZXZlbnRDYWxsYmFjaylcclxuXHR7XHJcblx0XHR2YXIgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRUeXBlXTtcclxuXHRcdGlmKEFycmF5LmlzQXJyYXkobGlzdGVuZXJzKSlcclxuXHRcdHtcclxuXHRcdFx0dmFyIGluZHg7XHJcblx0XHRcdHdoaWxlKChpbmR4ID0gbGlzdGVuZXJzLmluZGV4T2YoZXZlbnRDYWxsYmFjaykpICE9PSAtMSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpc3RlbmVycy5zcGxpY2UoaW5keCwgMSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0dHJpZ2dlcihldmVudFR5cGUsIGV2ZW50SW5mb3JtYXRpb24pXHJcblx0e1xyXG5cdFx0aWYoQXJyYXkuaXNBcnJheSh0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdKSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5saXN0ZW5lcnNbZXZlbnRUeXBlXS5mb3JFYWNoKChmbikgPT4gZm4uY2FsbChudWxsLCBldmVudEluZm9ybWF0aW9uLCBldmVudFR5cGUpKTtcclxuXHRcdH1cclxuXHRcdGlmKEFycmF5LmlzQXJyYXkodGhpcy5saXN0ZW5lcnNbJyonXSkpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubGlzdGVuZXJzWycqJ10uZm9yRWFjaCgoZm4pID0+IGZuLmNhbGwobnVsbCwgZXZlbnRJbmZvcm1hdGlvbiwgZXZlbnRUeXBlKSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdF9wYXNzRXZlbnRPbihldmVudEluZm9ybWF0aW9uLCBldmVudFR5cGUpXHJcblx0e1xyXG5cdFx0dGhpcy50cmlnZ2VyKGV2ZW50VHlwZSwgZXZlbnRJbmZvcm1hdGlvbik7XHJcblx0fVxyXG5cclxuXHRjbGVhbnVwKClcclxuXHR7XHJcblx0XHRPYmplY3Qua2V5cyh0aGlzLmxpc3RlbmVycykuZm9yRWFjaCgoZXZ0TmFtZSkgPT4ge1xyXG5cdFx0XHRkZWxldGUgdGhpcy5saXN0ZW5lcnNbZXZ0TmFtZV07XHJcblx0XHR9KTtcclxuXHRcdHRoaXMubGlzdGVuZXJzID0ge307XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50SGFuZGxlcjsiLCJpbXBvcnQgVW5kb0V2ZW50IGZyb20gJy4vZXZlbnRzL3VuZG9ldmVudC5qcyc7XHJcblxyXG5jbGFzcyBFdmVudFF1ZXVlXHJcbntcclxuXHRfZXZlbnRRdWV1ZSA9IFtdXHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdHMpXHJcblx0e1xyXG5cdFx0b3B0cy5ldmVudHMub24oJ2RvbWV2ZW50JywgdGhpcy5hZGRUb1F1ZXVlLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHJcblx0YWRkVG9RdWV1ZShldnQpXHJcblx0e1xyXG5cdFx0dGhpcy5fZXZlbnRRdWV1ZS5wdXNoKGV2dCk7XHJcblx0XHRldnQucGVyZm9ybUV2ZW50QWN0aW9uKCk7XHJcblx0fVxyXG5cclxuXHR1bmRvRnJvbVF1ZXVlKClcclxuXHR7XHJcblx0XHR2YXIgZXZ0ID0gdGhpcy5fZXZlbnRRdWV1ZS5wb3AoKTtcclxuXHRcdGV2dC5yZXZlcnRFdmVudEFjdGlvbigpO1xyXG5cdFx0dmFyIHVuZG9FdnQgPSBuZXcgVW5kb0V2ZW50KHsgXCJyZWxhdGVkRXZlbnRcIjogZXZ0IH0pO1xyXG5cdFx0dGhpcy5hZGRUb1F1ZXVlKHVuZG9FdnQpO1xyXG5cdH1cclxuXHJcblx0cmVkb0Zyb21RdWV1ZSgpXHJcblx0e1xyXG5cdFx0aWYodGhpcy5fZXZlbnRRdWV1ZVt0aGlzLl9ldmVudFF1ZXVlLmxlbmd0aC0xXS5JU19VTkRPX0VWRU5UKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgZXZ0ID0gdGhpcy5fZXZlbnRRdWV1ZS5wb3AoKTtcclxuXHRcdFx0ZXZ0LnJldmVydEV2ZW50QWN0aW9uKCk7XHJcblx0XHRcdHRoaXMuYWRkVG9RdWV1ZShldnQucmVsYXRlZEV2ZW50KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50UXVldWU7IiwiaW1wb3J0IERvbUV2ZW50IGZyb20gXCIuL2RvbWV2ZW50LmpzXCI7XHJcblxyXG5jbGFzcyBBZGRFdmVudCBleHRlbmRzIERvbUV2ZW50XHJcbntcclxuXHRfZG9tID0gbnVsbDtcclxuXHRfUVNJRCA9IG51bGw7XHJcblx0X3RhcmdldFFTSUQgPSBudWxsO1xyXG5cclxuXHRfZGVmYXVsdENTUyA9IHtcclxuXHRcdFwid2lkdGhcIjpcIjEwMHB4XCIsXHJcblx0XHRcImhlaWdodFwiOlwiMTAwcHhcIlxyXG5cdH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdHMsIGRvbSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuX1FTSUQgPSAwOy8vIDpUT0RPT09PT08gR0VORVJBVEUgR1VJRCFcclxuXHRcdHRoaXMuX2RvbSA9IGRvbTtcclxuXHRcdHRoaXMuX3RhcmdldFFTSUQgPSB0aGlzLl9kb20uZ2V0RWxlbWVudFFTSUQob3B0cy50YXJnZXQpO1xyXG5cdH1cclxuXHJcblx0cGVyZm9ybUV2ZW50QWN0aW9uKClcclxuXHR7XHJcblx0XHR0aGlzLl9kb20uYWRkRWxlbWVudCh7XHJcblx0XHRcdFwiUVNJRFwiOiB0aGlzLl9RU0lELFxyXG5cdFx0XHRcInBhcmVudFFTSURcIjogdGhpcy5fdGFyZ2V0UVNJRCxcclxuXHRcdFx0XCJwb3NpdGlvblwiOiAwLFxyXG5cdFx0XHRcInRhZ1wiOiBcImRpdlwiLFxyXG5cdFx0XHRcImNzc1wiOiB0aGlzLl9kZWZhdWx0Q1NTXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJldmVydEV2ZW50QWN0aW9uKClcclxuXHR7XHJcblx0XHR0aGlzLl9kb20ucmVtb3ZlRWxlbWVudCh0aGlzLl9RU0lEKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZEV2ZW50OyIsImNsYXNzIERvbUV2ZW50XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cclxuXHR9XHJcblx0cGVyZm9ybUV2ZW50QWN0aW9uKClcclxuXHR7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOb3QgSW1wbGVtZW50ZWQhXCIpO1xyXG5cdH1cclxuXHRyZXZlcnRFdmVudEFjdGlvbigpXHJcblx0e1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IEltcGxlbWVudGVkIVwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvbUV2ZW50OyIsImltcG9ydCBEb21FdmVudCBmcm9tIFwiLi9kb21ldmVudC5qc1wiO1xyXG5cclxuY2xhc3MgVW5kb0V2ZW50IGV4dGVuZHMgRG9tRXZlbnRcclxue1xyXG5cdElTX1VORE9fRVZFTlQgPSB0cnVlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRzKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cdHBlcmZvcm1FdmVudEFjdGlvbigpXHJcblx0e1xyXG5cclxuXHR9XHJcblx0cmV2ZXJ0RXZlbnRBY3Rpb24oKVxyXG5cdHtcclxuXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbmRvRXZlbnQ7IiwiY2xhc3MgTWVudUJ1aWxkZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKGRlZmluaXRpb24sIG9wdHMgPSB7fSkgXHJcblx0e1xyXG5cdFx0dGhpcy5fb3B0cyA9IG9wdHM7XHJcblx0XHR0aGlzLl9ldmVudHMgPSBvcHRzLmV2ZW50cztcclxuXHRcdHRoaXMuXyR0YXJnZXQgPSBudWxsO1xyXG5cdFx0dGhpcy5fJGNvbnRhaW5lciA9IG51bGw7XHJcblx0XHR0aGlzLl9zZXR1cE1lbnUoZGVmaW5pdGlvbik7XHJcblx0XHR0aGlzLl9zZXR1cEV2ZW50cygpO1xyXG5cdH1cclxuXHJcblx0X3NldHVwTWVudShkZWZpbml0aW9uKVxyXG5cdHtcclxuXHRcdHRoaXMuXyRjb250YWluZXIgPSAkKFxyXG5cdFx0XHRgPGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1jb250YWluZXJcIiB0YWJpbmRleD1cIjBcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicXMtZW5naW5lLWRkLWlubmVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicXMtZW5naW5lLWRkLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicXMtZW5naW5lLWRkLXRpdGxlLXRleHRcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwicXMtZW5naW5lLWRkLXRpdGxlLWljb24gcXMtaWNvbiBxcy1pY29uLXBlbmNpbFwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5gKS5hcHBlbmRUbyh0aGlzLl9vcHRzLmNvbnRhaW5lcik7XHJcblx0XHR0aGlzLl8kY29udGFpbmVyLmZpbmQoJy5xcy1lbmdpbmUtZGQtdGl0bGUgLnFzLWVuZ2luZS1kZC10aXRsZS10ZXh0JykudGV4dCgnQmxvY2sgMScpOyAgICAgXHJcblx0XHR0aGlzLl9wcm9jZXNzRGVmaW5pdGlvbih0aGlzLl8kY29udGFpbmVyLmZpbmQoJy5xcy1lbmdpbmUtZGQtaW5uZXInKSwgZGVmaW5pdGlvbik7XHJcblx0fVxyXG5cclxuXHRfcHJvY2Vzc0RlZmluaXRpb24oJHBhcmVudCwgZGVmKVxyXG5cdHtcclxuICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoZGVmKSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBkZWYuZm9yRWFjaCh0aGlzLl9wcm9jZXNzRGVmaW5pdGlvbi5iaW5kKHRoaXMsICRwYXJlbnQpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYodHlwZW9mIGRlZiA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YXIgJGNoaWxkUGFyZW50ID0gbnVsbCwgaWQgPSAkcGFyZW50LmNsb3Nlc3QoJ1tkYXRhLXFzLWlkXScpLmRhdGEoJ3FzLWlkJyk7XHJcbiAgICAgICAgICAgICAgaWQgPSBpZCA/IGlkKycuJyA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgaWYodHlwZW9mIGRlZi5ncm91cGlkICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgJGNoaWxkUGFyZW50ID0gJCgnPGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1ncm91cFwiIGRhdGEtcXMtaWQ9XCInK2RlZi5ncm91cGlkKydcIj48L2Rpdj4nKS5hcHBlbmRUbygkcGFyZW50KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZSBpZih0eXBlb2YgZGVmLml0ZW1pZCAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciAkaXRlbSA9ICQoJzxkaXYgY2xhc3M9XCJxcy1lbmdpbmUtZGQtaXRlbVwiIGRhdGEtcXMtaWQ9XCInK2lkK2RlZi5pdGVtaWQrJ1wiPjxzcGFuIGNsYXNzPVwicXMtZW5naW5lLWRkLWljb25cIj48L3NwYW4+PC9kaXY+JykuYXBwZW5kVG8oJHBhcmVudCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBkZWYuaWNvbiAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJGl0ZW0uZmluZCgnLnFzLWVuZ2luZS1kZC1pY29uJykuYWRkQ2xhc3MoJ3FzLWljb24gcXMtaWNvbi0nK2RlZi5pY29uKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZih0eXBlb2YgZGVmLmRpc3BsYXkgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICRpdGVtLmFwcGVuZCgnPHNwYW4+JytkZWYuZGlzcGxheSsnPC9zcGFuPicpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoZGVmLml0ZW1zKSlcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJGNoaWxkUGFyZW50ID0gJCgnPGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1tb3JlXCI+PGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1leHBhbmRcIj4mZ3Q7PC9kaXY+PGRpdiBjbGFzcz1cInFzLWVuZ2luZS1kZC1ncm91cFwiPjwvZGl2PjwvZGl2PicpLmFwcGVuZFRvKCRpdGVtKS5maW5kKCcucXMtZW5naW5lLWRkLWdyb3VwJyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYoJGNoaWxkUGFyZW50ICYmIEFycmF5LmlzQXJyYXkoZGVmLml0ZW1zKSlcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NEZWZpbml0aW9uKCRjaGlsZFBhcmVudCwgZGVmLml0ZW1zKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblx0fVxyXG5cclxuXHRfc2V0dXBFdmVudHMoKVxyXG5cdHtcclxuXHRcdCQodGhpcy5fb3B0cy5jb250YWluZXIpLm9uKCdjb250ZXh0bWVudScsIChldnQpID0+XHJcblx0XHR7XHJcblx0XHRcdGlmKCQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLnFzLWVuZ2luZS1kZC1jb250YWluZXInKS5zaXplKCk9PT0wKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5fdGFyZ2V0ID0gZXZ0LnRhcmdldDtcclxuXHRcdFx0XHQkKCcucXMtZW5naW5lLWRkLWNvbnRhaW5lcicpLmZvY3VzKCkuY3NzKHsgJ2xlZnQnOmV2dC5jbGllbnRYKydweCcsICd0b3AnOmV2dC5jbGllbnRZKydweCd9KTtcclxuXHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLl8kY29udGFpbmVyLm9uKCdjbGljaycsIChldnQpID0+XHJcblx0XHR7XHJcblx0XHRcdHZhciAkcXNpZCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnW2RhdGEtcXMtaWRdJyk7XHJcblx0XHRcdGlmKCRxc2lkLnNpemUoKSA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHQkKCcucXMtZW5naW5lLWRkLWNvbnRhaW5lcicpLmJsdXIoKTtcclxuXHRcdFx0XHRpZih0aGlzLl9ldmVudHMpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5fZXZlbnRzLnRyaWdnZXIoJ21lbnVzZWxlY3QnLCB7IFwiYnV0dG9uaWRcIjogJ21lbnUuJyskcXNpZC5kYXRhKCdxcy1pZCcpLCBcInRhcmdldFwiOiB0aGlzLl90YXJnZXQgfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVCdWlsZGVyOyIsImNsYXNzIFZpcnR1YWxET01cclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVmlydHVhbERPTTsiXX0=
