/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors.main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/components/bs4-sidebar/bs4-sidebar.component.pug":
/*!*****************************************************************!*\
  !*** ./src/ts/components/bs4-sidebar/bs4-sidebar.component.pug ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/ts/components/bs4-sidebar/bs4-sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/ts/components/bs4-sidebar/bs4-sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: Bs4SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bs4SidebarComponent", function() { return Bs4SidebarComponent; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "./node_modules/@babel/runtime-corejs2/helpers/get.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ribajs/core */ "./node_modules/@ribajs/core/src/index.ts");
/* harmony import */ var _bs4_sidebar_component_pug__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bs4-sidebar.component.pug */ "./src/ts/components/bs4-sidebar/bs4-sidebar.component.pug");
/* harmony import */ var _bs4_sidebar_component_pug__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_bs4_sidebar_component_pug__WEBPACK_IMPORTED_MODULE_12__);













var Bs4SidebarComponent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(Bs4SidebarComponent, _Component);

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Bs4SidebarComponent, null, [{
    key: "observedAttributes",
    get: function get() {
      return ['container-selector', 'id'];
    }
  }]);

  function Bs4SidebarComponent(element) {
    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Bs4SidebarComponent);

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Bs4SidebarComponent).call(this, element));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "containers", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "style", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "autobind", true);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "toggleButtonEvents", new _ribajs_core__WEBPACK_IMPORTED_MODULE_11__["EventDispatcher"]('bs4-toggle-button'));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "debug", Object(_ribajs_core__WEBPACK_IMPORTED_MODULE_11__["Debug"])('component:' + Bs4SidebarComponent.tagName));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "scope", {
      containerSelector: undefined,
      state: 'hidden',
      hide: _this.hide,
      toggle: _this.toggle,
      id: undefined,
      options: {
        position: 'left',
        autoShowOnWiderThan: 1199,
        autoHideOnSlimmerThan: 1200,
        autoHideOnPathnames: ['/'],
        overlayOnSlimmerThan: 1200
      }
    });

    _this.debug('constructor', _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));

    _this.init(Bs4SidebarComponent.observedAttributes);

    _this.style = window.getComputedStyle(_this.el);

    _this.toggleButtonEvents.on('toggle', function (targetId) {
      _this.debug('toggle targetId', targetId);

      if (targetId === _this.scope.id) {
        _this.toggle();
      }
    });

    window.addEventListener('resize', _this.onResize.bind(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), false);

    _this.setStateByEnviroment();

    return _this;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Bs4SidebarComponent, [{
    key: "setState",
    value: function setState(state) {
      this.scope.state = state;
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.scope.state;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.scope.state = 'hidden';
      this.onStateChange();
    }
  }, {
    key: "show",
    value: function show() {
      var vw = _ribajs_core__WEBPACK_IMPORTED_MODULE_11__["Utils"].getViewportDimensions().w;

      if (vw < this.scope.options.overlayOnSlimmerThan) {
        this.scope.state = 'overlay-' + this.scope.options.position;
      } else {
        this.scope.state = 'side-' + this.scope.options.position;
      }

      this.onStateChange();
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.scope.state === 'hidden') {
        this.show();
      } else {
        this.hide();
      }
    }
  }, {
    key: "onHidden",
    value: function onHidden() {
      this.setContainersStyle();
      this.el.setAttribute('style', 'transform:translateX(-100%)');
    }
  }, {
    key: "onSide",
    value: function onSide(directon) {
      this.setContainersStyle('', directon);
      this.el.setAttribute('style', 'transform:translateX(0)');
    }
  }, {
    key: "onOverlay",
    value: function onOverlay(directon) {
      this.setContainersStyle('', directon);
      this.el.setAttribute('style', 'transform:translateX(0)');
    }
  }, {
    key: "onStateChange",
    value: function onStateChange() {
      this.debug('state changed: ' + this.scope.state);

      switch (this.scope.state) {
        case 'side-left':
        case 'side-right':
          this.onSide(this.scope.state);
          break;

        case 'overlay-left':
        case 'overlay-right':
          this.onOverlay(this.scope.state);
          break;

        default:
          this.onHidden();
          break;
      }

      this.toggleButtonEvents.trigger('toggled', this.scope.state);
    }
  }, {
    key: "setStateByEnviroment",
    value: function setStateByEnviroment() {
      if (this.scope.options.autoHideOnPathnames.indexOf(window.location.pathname) !== -1) {
        return this.hide();
      }

      var vw = _ribajs_core__WEBPACK_IMPORTED_MODULE_11__["Utils"].getViewportDimensions().w;

      if (vw < this.scope.options.autoHideOnSlimmerThan) {
        return this.hide();
      }

      if (vw < this.scope.options.autoHideOnSlimmerThan) {
        return this.hide();
      }

      if (vw > this.scope.options.autoShowOnWiderThan) {
        return this.show();
      }
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.setStateByEnviroment();
    }
  }, {
    key: "initContainers",
    value: function initContainers(newValue) {
      newValue = newValue || this.scope.containerSelector;
      this.debug('initContainers', newValue);

      if (newValue) {
        this.containers = document.querySelectorAll(newValue);
      }

      this.setContainersStyle();
      this.onStateChange();
    }
  }, {
    key: "setContainersStyle",
    value: function setContainersStyle(style, move) {
      if (this.containers) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(this.containers), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var container = _step.value;
            this.setContainerStyle(container, style, move);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
    /**
     * Sets the container style, takes overs always the transition style of this sidebar
     * @param container
     * @param style
     * @param move
     */

  }, {
    key: "setContainerStyle",
    value: function setContainerStyle(container) {
      var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var move = arguments.length > 2 ? arguments[2] : undefined;

      if (move) {
        var width = this.width;
        var conStyle = window.getComputedStyle(container);

        switch (move) {
          case 'side-left':
            switch (conStyle.position) {
              case 'fixed':
                style += 'left:' + width + 'px';
                break;

              default:
                style += 'margin-left:' + width + 'px';
                break;
            }

            break;

          case 'side-right':
            switch (conStyle.position) {
              case 'fixed':
                style += 'right:' + width + 'px';
                break;

              default:
                style += 'margin-right:' + width + 'px';
                break;
            }

            break;

          default:
            break;
        }
      }

      return container.setAttribute('style', "transition:".concat(this.style.transition, ";").concat(style));
    }
  }, {
    key: "init",
    value: function () {
      var _init = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(observedAttributes) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Bs4SidebarComponent.prototype), "init", this).call(this, observedAttributes).then(function (view) {
                  return view;
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init(_x) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "beforeBind",
    value: function () {
      var _beforeBind = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.debug('beforeBind');

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function beforeBind() {
        return _beforeBind.apply(this, arguments);
      }

      return beforeBind;
    }()
  }, {
    key: "afterBind",
    value: function () {
      var _afterBind = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.debug('afterBind', this.scope);
                this.onStateChange();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function afterBind() {
        return _afterBind.apply(this, arguments);
      }

      return afterBind;
    }()
  }, {
    key: "requiredAttributes",
    value: function requiredAttributes() {
      return [];
    }
  }, {
    key: "parsedAttributeChangedCallback",
    value: function parsedAttributeChangedCallback(attributeName, oldValue, newValue, namespace) {
      _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Bs4SidebarComponent.prototype), "parsedAttributeChangedCallback", this).call(this, attributeName, oldValue, newValue, namespace);

      if (attributeName === 'containerSelector') {
        this.initContainers(newValue);
      }
    } // deconstructor

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Bs4SidebarComponent.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "template",
    value: function template() {
      // Only set the component template if there no childs already
      if (this.el.hasChildNodes()) {
        this.debug('Do not use template, because element has child nodes');
        return null;
      } else {
        var template = _bs4_sidebar_component_pug__WEBPACK_IMPORTED_MODULE_12___default()(this.scope);
        this.debug('Use template', template);
        return template;
      }
    }
  }, {
    key: "width",
    get: function get() {
      return this.el.offsetWidth;
    }
  }]);

  return Bs4SidebarComponent;
}(_ribajs_core__WEBPACK_IMPORTED_MODULE_11__["Component"]);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(Bs4SidebarComponent, "tagName", 'bs4-sidebar');

/***/ }),

/***/ "./src/ts/components/bs4-toggle-button/bs4-toggle-button.component.html":
/*!******************************************************************************!*\
  !*** ./src/ts/components/bs4-toggle-button/bs4-toggle-button.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "";

/***/ }),

/***/ "./src/ts/components/bs4-toggle-button/bs4-toggle-button.component.ts":
/*!****************************************************************************!*\
  !*** ./src/ts/components/bs4-toggle-button/bs4-toggle-button.component.ts ***!
  \****************************************************************************/
/*! exports provided: Bs4ToggleButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bs4ToggleButtonComponent", function() { return Bs4ToggleButtonComponent; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "./node_modules/@babel/runtime-corejs2/helpers/get.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ribajs/core */ "./node_modules/@ribajs/core/src/index.ts");
/* harmony import */ var _bs4_toggle_button_component_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bs4-toggle-button.component.html */ "./src/ts/components/bs4-toggle-button/bs4-toggle-button.component.html");
/* harmony import */ var _bs4_toggle_button_component_html__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_bs4_toggle_button_component_html__WEBPACK_IMPORTED_MODULE_11__);












var Bs4ToggleButtonComponent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Bs4ToggleButtonComponent, _Component);

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(Bs4ToggleButtonComponent, null, [{
    key: "observedAttributes",
    get: function get() {
      return ['target-id'];
    }
  }]);

  function Bs4ToggleButtonComponent(element) {
    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Bs4ToggleButtonComponent);

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Bs4ToggleButtonComponent).call(this, element));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "autobind", true);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "debug", Object(_ribajs_core__WEBPACK_IMPORTED_MODULE_10__["Debug"])('component:' + Bs4ToggleButtonComponent.tagName));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "eventDispatcher", new _ribajs_core__WEBPACK_IMPORTED_MODULE_10__["EventDispatcher"]('bs4-toggle-button'));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "scope", {
      targetId: undefined,
      toggle: _this.toggle,
      state: 'undefined',
      isClosed: false
    });

    _this.debug('constructor', _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));

    _this.init(Bs4ToggleButtonComponent.observedAttributes);

    _this.eventDispatcher.on('toggled', function (state) {
      _this.scope.state = state;
      _this.scope.isClosed = state === 'hidden';
    });

    return _this;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(Bs4ToggleButtonComponent, [{
    key: "toggle",
    value: function toggle() {
      this.debug('toggle');
      this.eventDispatcher.trigger('toggle', this.scope.targetId);
    }
  }, {
    key: "init",
    value: function () {
      var _init = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(observedAttributes) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Bs4ToggleButtonComponent.prototype), "init", this).call(this, observedAttributes).then(function (view) {
                  return view;
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init(_x) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "beforeBind",
    value: function () {
      var _beforeBind = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.debug('beforeBind');

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function beforeBind() {
        return _beforeBind.apply(this, arguments);
      }

      return beforeBind;
    }()
  }, {
    key: "afterBind",
    value: function () {
      var _afterBind = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.debug('afterBind', this.scope);

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function afterBind() {
        return _afterBind.apply(this, arguments);
      }

      return afterBind;
    }()
  }, {
    key: "requiredAttributes",
    value: function requiredAttributes() {
      return ['targetId'];
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
      _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Bs4ToggleButtonComponent.prototype), "attributeChangedCallback", this).call(this, attributeName, oldValue, newValue, namespace);
    } // deconstructor

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Bs4ToggleButtonComponent.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "template",
    value: function template() {
      // Only set the component template if there no childs already
      if (this.el.hasChildNodes()) {
        this.debug('Do not use template, because element has child nodes');
        return null;
      } else {
        this.debug('Use template', _bs4_toggle_button_component_html__WEBPACK_IMPORTED_MODULE_11___default.a);
        return _bs4_toggle_button_component_html__WEBPACK_IMPORTED_MODULE_11___default.a;
      }
    }
  }]);

  return Bs4ToggleButtonComponent;
}(_ribajs_core__WEBPACK_IMPORTED_MODULE_10__["Component"]);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(Bs4ToggleButtonComponent, "tagName", 'bs4-toggle-button');

/***/ }),

/***/ "./src/ts/components/file-tree/file-tree.component.html":
/*!**************************************************************!*\
  !*** ./src/ts/components/file-tree/file-tree.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "";

/***/ }),

/***/ "./src/ts/components/file-tree/file-tree.component.ts":
/*!************************************************************!*\
  !*** ./src/ts/components/file-tree/file-tree.component.ts ***!
  \************************************************************/
/*! exports provided: FileTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTreeComponent", function() { return FileTreeComponent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ribajs/core */ "./node_modules/@ribajs/core/src/index.ts");
/* harmony import */ var _file_tree_component_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file-tree.component.html */ "./src/ts/components/file-tree/file-tree.component.html");
/* harmony import */ var _file_tree_component_html__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_file_tree_component_html__WEBPACK_IMPORTED_MODULE_8__);









var FileTreeComponent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(FileTreeComponent, _Component);

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(FileTreeComponent, null, [{
    key: "observedAttributes",
    get: function get() {
      return [];
    }
  }]);

  function FileTreeComponent(element) {
    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FileTreeComponent);

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(FileTreeComponent).call(this, element));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "autobind", false);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "debug", Object(_ribajs_core__WEBPACK_IMPORTED_MODULE_7__["Debug"])('component:' + FileTreeComponent.tagName));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "scope", {});

    _this.debug('constructor', _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));

    _this.init(FileTreeComponent.observedAttributes);

    return _this;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(FileTreeComponent, [{
    key: "template",
    value: function template() {
      // Only set the component template if there no childs already
      if (this.el.hasChildNodes()) {
        this.debug('Do not use template, because element has child nodes');
        return null;
      } else {
        this.debug('Use template', _file_tree_component_html__WEBPACK_IMPORTED_MODULE_8___default.a);
        return _file_tree_component_html__WEBPACK_IMPORTED_MODULE_8___default.a;
      }
    }
  }]);

  return FileTreeComponent;
}(_ribajs_core__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(FileTreeComponent, "tagName", 'rv-file-tree');

/***/ }),

/***/ "./src/ts/components/index.ts":
/*!************************************!*\
  !*** ./src/ts/components/index.ts ***!
  \************************************/
/*! exports provided: IconComponent, ShopifyLinklistComponent, Bs4SidebarComponent, Bs4ToggleButtonComponent, FileTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rv_icon_rv_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rv-icon/rv-icon.component */ "./src/ts/components/rv-icon/rv-icon.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return _rv_icon_rv_icon_component__WEBPACK_IMPORTED_MODULE_0__["IconComponent"]; });

/* harmony import */ var _shopify_linklist_shopify_linklist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopify-linklist/shopify-linklist.component */ "./src/ts/components/shopify-linklist/shopify-linklist.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShopifyLinklistComponent", function() { return _shopify_linklist_shopify_linklist_component__WEBPACK_IMPORTED_MODULE_1__["ShopifyLinklistComponent"]; });

/* harmony import */ var _bs4_sidebar_bs4_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bs4-sidebar/bs4-sidebar.component */ "./src/ts/components/bs4-sidebar/bs4-sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bs4SidebarComponent", function() { return _bs4_sidebar_bs4_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["Bs4SidebarComponent"]; });

/* harmony import */ var _bs4_toggle_button_bs4_toggle_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bs4-toggle-button/bs4-toggle-button.component */ "./src/ts/components/bs4-toggle-button/bs4-toggle-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bs4ToggleButtonComponent", function() { return _bs4_toggle_button_bs4_toggle_button_component__WEBPACK_IMPORTED_MODULE_3__["Bs4ToggleButtonComponent"]; });

/* harmony import */ var _file_tree_file_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-tree/file-tree.component */ "./src/ts/components/file-tree/file-tree.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTreeComponent", function() { return _file_tree_file_tree_component__WEBPACK_IMPORTED_MODULE_4__["FileTreeComponent"]; });







/***/ }),

/***/ "./src/ts/components/rv-icon/rv-icon.component.ts":
/*!********************************************************!*\
  !*** ./src/ts/components/rv-icon/rv-icon.component.ts ***!
  \********************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "./node_modules/@babel/runtime-corejs2/helpers/get.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ribajs/core */ "./node_modules/@ribajs/core/src/index.ts");











var IconComponent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(IconComponent, _Component);

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(IconComponent, null, [{
    key: "observedAttributes",
    get: function get() {
      return ['size', 'width', 'height', 'name', 'src', 'color', 'direction'];
    }
  }]);

  function IconComponent(element) {
    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, IconComponent);

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(IconComponent).call(this, element));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "debug", debug__WEBPACK_IMPORTED_MODULE_8___default()('component:' + IconComponent.tagName));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "scope", {});

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "autobind", false);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "$el", void 0);

    _this.$el = jquery__WEBPACK_IMPORTED_MODULE_9___default()(_this.el);

    _this.$el.attr('aria-hidden', 'true').attr('role', 'img').addClass('iconset'); // set default values
    // this.attributeChangedCallback('size', null, 32, null);


    _this.attributeChangedCallback('direction', null, 'top', null);

    _this.init(IconComponent.observedAttributes);

    return _this;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(IconComponent, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue, namespace) {
      this.debug('attributeChangedCallback', name, oldValue, newValue, namespace); // injects the changed attributes to scope

      _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(IconComponent.prototype), "attributeChangedCallback", this).call(this, name, oldValue, newValue, namespace);

      if (name === 'src') {
        this.$el.load(newValue);
      }

      if (name === 'color') {
        this.$el.css({
          color: newValue
        }).removeClass(function (index, className) {
          return (className.match(/(^|\s)color-\S+/g) || []).join(' ');
        }).addClass("color-".concat(newValue));
      }

      if (name === 'size') {
        var size = newValue;
        this.debug('set size', this.$el);
        this.$el.css({
          height: size,
          width: size
        }).removeClass(function (index, className) {
          return (className.match(/(^|\s)size-\S+/g) || []).join(' ');
        }).addClass("size-".concat(size));
      }

      if (name === 'width') {
        var width = newValue;
        this.debug('set width', this.$el);
        this.$el.css({
          width: width
        }).removeClass(function (index, className) {
          return (className.match(/(^|\s)width-\S+/g) || []).join(' ');
        }).addClass("width-".concat(width));
      }

      if (name === 'height') {
        var height = newValue;
        this.debug('set height', this.$el);
        this.$el.css({
          height: height
        }).removeClass(function (index, className) {
          return (className.match(/(^|\s)height-\S+/g) || []).join(' ');
        }).addClass("height-".concat(height));
      }

      if (name === 'direction') {
        var direction = newValue;
        var classString = "direction-".concat(direction);

        if (direction === 'left') {
          classString += ' rotate-270';
        } else if (direction === 'left-top' || direction === 'left-up' || direction === 'top-left' || direction === 'up-left') {
          classString += ' rotate-315';
        } else if (direction === 'top' || direction === 'up') {
          classString += ' rotate-0';
        } else if (direction === 'top-right' || direction === 'up-right' || direction === 'right-top' || direction === 'right-up') {
          classString += ' rotate-45';
        } else if (direction === 'right') {
          classString += ' rotate-90';
        } else if (direction === 'right-bottom' || direction === 'right-down' || direction === 'bottom-right' || direction === 'down-right') {
          classString += ' rotate-135';
        } else if (direction === 'bottom' || direction === 'down') {
          classString += ' rotate-180';
        } else if (direction === 'left-bottom' || direction === 'left-down' || direction === 'bottom-left' || direction === 'down-left') {
          classString += ' rotate-225';
        }

        this.$el.css({
          height: newValue,
          width: newValue
        }).removeClass(function (index, className) {
          return (className.match(/(^|\s)direction-\S+/g) || []).join(' ');
        }).removeClass(function (index, className) {
          return (className.match(/(^|\s)rotate-\S+/g) || []).join(' ');
        }).addClass(classString);
      }
    }
  }, {
    key: "template",
    value: function template() {
      return null;
    }
  }]);

  return IconComponent;
}(_ribajs_core__WEBPACK_IMPORTED_MODULE_10__["Component"]);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(IconComponent, "tagName", 'rv-icon');

/***/ }),

/***/ "./src/ts/components/shopify-linklist/shopify-linklist.component.html":
/*!****************************************************************************!*\
  !*** ./src/ts/components/shopify-linklist/shopify-linklist.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=nav rv-class=linklist.handle rv-class-nav-pills=pills rv-class-w-100=vertical rv-class-flex-column=vertical rv-class-flex-row=\"vertical | not\"> <div class=\"nav-item nav-item-level-0\" rv-each-link=linklist.links> <a class=nav-link rv-class-active=link.active rv-route-class-active=link.url rv-route=link.url rv-href=link.url> <span rv-i18n-text=\"link.title | handleize | prepend 'menus.'\">{link.title}</span> </a> <div class=\"nav-item nav-item-level-1\" rv-each-sublink=link.links> <a class=nav-link rv-class=\"sublink.level | prepend 'level-'\" rv-class-active=sublink.active rv-route-class-active=link.url rv-route=sublink.url rv-href=sublink.url> <span rv-i18n-text=\"sublink.title | handleize | prepend 'menus.'\">{sublink.title}</span> </a> <div class=\"nav-item nav-item-level-2\" rv-each-subsublink=sublink.links> <a class=nav-link rv-class=\"subsublink.level | prepend 'level-'\" rv-class-active=subsublink.active rv-route-class-active=link.url rv-route=subsublink.url rv-href=subsublink.url> <span rv-i18n-text=\"subsublink.title | handleize | prepend 'menus.'\">{subsublink.title}</span> </a> </div> </div> </div> </nav>";

/***/ }),

/***/ "./src/ts/components/shopify-linklist/shopify-linklist.component.ts":
/*!**************************************************************************!*\
  !*** ./src/ts/components/shopify-linklist/shopify-linklist.component.ts ***!
  \**************************************************************************/
/*! exports provided: ShopifyLinklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopifyLinklistComponent", function() { return ShopifyLinklistComponent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "./node_modules/@babel/runtime-corejs2/helpers/get.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ribajs/core */ "./node_modules/@ribajs/core/src/index.ts");
/* harmony import */ var _shopify_linklist_component_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shopify-linklist.component.html */ "./src/ts/components/shopify-linklist/shopify-linklist.component.html");
/* harmony import */ var _shopify_linklist_component_html__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_shopify_linklist_component_html__WEBPACK_IMPORTED_MODULE_10__);












/**
 * shopify-filter
 */
var ShopifyLinklistComponent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ShopifyLinklistComponent, _Component);

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(ShopifyLinklistComponent, null, [{
    key: "observedAttributes",
    get: function get() {
      return ['name', 'linklist', 'pills', 'vertical'];
    }
  }]);

  function ShopifyLinklistComponent(element) {
    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ShopifyLinklistComponent);

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ShopifyLinklistComponent).call(this, element));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "debug", debug__WEBPACK_IMPORTED_MODULE_8___default()('component:' + ShopifyLinklistComponent.tagName));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "scope", {});

    _this.init(ShopifyLinklistComponent.observedAttributes);

    return _this;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(ShopifyLinklistComponent, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue, namespace) {
      // injects the changed attributes to scope
      _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ShopifyLinklistComponent.prototype), "attributeChangedCallback", this).call(this, name, oldValue, newValue, namespace); // set linklist by name


      if (name === 'name') {
        this.scope.linklist = window.model.system.linklists[newValue];
        this.debug('linklist', this.scope.linklist);
      }
    }
  }, {
    key: "requiredAttributes",
    value: function requiredAttributes() {
      return ['linklist'];
    }
    /**
     * Only set the component template if there no childs already
     */

  }, {
    key: "template",
    value: function template() {
      if (this.el.hasChildNodes()) {
        return null;
      } else {
        return _shopify_linklist_component_html__WEBPACK_IMPORTED_MODULE_10___default.a;
      }
    }
  }]);

  return ShopifyLinklistComponent;
}(_ribajs_core__WEBPACK_IMPORTED_MODULE_9__["Component"]);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(ShopifyLinklistComponent, "tagName", 'shopify-linklist');

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ribajs/core */ "./node_modules/@ribajs/core/src/index.ts");
/* harmony import */ var _ribajs_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ribajs/router */ "./node_modules/@ribajs/router/src/index.ts");
/* harmony import */ var _ribajs_bs4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ribajs/bs4 */ "./node_modules/@ribajs/bs4/src/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/ts/components/index.ts");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar */ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js");
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */ "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js");
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/prismjs/components/prism-css.js");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/components/prism-java */ "./node_modules/prismjs/components/prism-java.js");
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/prismjs/components/prism-markup.js");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prismjs/components/prism-sass */ "./node_modules/prismjs/components/prism-sass.js");
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prismjs/components/prism-scss */ "./node_modules/prismjs/components/prism-scss.js");
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_15__);


 // import shopifyModule from '@ribajs/shopify';

 // import { i18nModule } from '@ribajs/i18n';

 // import { LocalesService } from '@ribajs/shopify-tda';












var Main = function Main() {
  _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Main);

  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "riba", new _ribajs_core__WEBPACK_IMPORTED_MODULE_2__["Riba"]());

  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "dispatcher", new _ribajs_core__WEBPACK_IMPORTED_MODULE_2__["EventDispatcher"]('main'));

  this.riba.module.regist(_ribajs_core__WEBPACK_IMPORTED_MODULE_2__["coreModule"]);
  this.riba.module.regist(_ribajs_router__WEBPACK_IMPORTED_MODULE_3__["default"]); // this.riba.module.regist(shopifyModule);
  // this.riba.module.regist(i18nModule(this.localesService));

  this.riba.module.regist(_ribajs_bs4__WEBPACK_IMPORTED_MODULE_4__["bs4Module"]); // Regist custom components

  this.riba.module.regist({
    components: _components__WEBPACK_IMPORTED_MODULE_5__ // binders: {...customBinders},

  });
  this.dispatcher.on('newPageReady', function () {
    prismjs__WEBPACK_IMPORTED_MODULE_6__["highlightAll"]();
  }); // window.model.system.shopify = (window as any).Shopify;

  this.riba.bind(Object(_ribajs_core__WEBPACK_IMPORTED_MODULE_2__["JQuery"])('body')[0], window.model);
};
Object(_ribajs_core__WEBPACK_IMPORTED_MODULE_2__["JQuery"])(function ($) {
  var main = new Main();
});

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/ts/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/ts/main.ts */"./src/ts/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudHMvYnM0LXNpZGViYXIvYnM0LXNpZGViYXIuY29tcG9uZW50LnB1ZyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50cy9iczQtc2lkZWJhci9iczQtc2lkZWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudHMvYnM0LXRvZ2dsZS1idXR0b24vYnM0LXRvZ2dsZS1idXR0b24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudHMvYnM0LXRvZ2dsZS1idXR0b24vYnM0LXRvZ2dsZS1idXR0b24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb21wb25lbnRzL2ZpbGUtdHJlZS9maWxlLXRyZWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudHMvZmlsZS10cmVlL2ZpbGUtdHJlZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudHMvcnYtaWNvbi9ydi1pY29uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50cy9zaG9waWZ5LWxpbmtsaXN0L3Nob3BpZnktbGlua2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudHMvc2hvcGlmeS1saW5rbGlzdC9zaG9waWZ5LWxpbmtsaXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vZnMgKGlnbm9yZWQpIl0sIm5hbWVzIjpbIkJzNFNpZGViYXJDb21wb25lbnQiLCJlbGVtZW50IiwiRXZlbnREaXNwYXRjaGVyIiwiRGVidWciLCJ0YWdOYW1lIiwiY29udGFpbmVyU2VsZWN0b3IiLCJ1bmRlZmluZWQiLCJzdGF0ZSIsImhpZGUiLCJ0b2dnbGUiLCJpZCIsIm9wdGlvbnMiLCJwb3NpdGlvbiIsImF1dG9TaG93T25XaWRlclRoYW4iLCJhdXRvSGlkZU9uU2xpbW1lclRoYW4iLCJhdXRvSGlkZU9uUGF0aG5hbWVzIiwib3ZlcmxheU9uU2xpbW1lclRoYW4iLCJkZWJ1ZyIsImluaXQiLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJzdHlsZSIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJlbCIsInRvZ2dsZUJ1dHRvbkV2ZW50cyIsIm9uIiwidGFyZ2V0SWQiLCJzY29wZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblJlc2l6ZSIsImJpbmQiLCJzZXRTdGF0ZUJ5RW52aXJvbWVudCIsIm9uU3RhdGVDaGFuZ2UiLCJ2dyIsIlV0aWxzIiwiZ2V0Vmlld3BvcnREaW1lbnNpb25zIiwidyIsInNob3ciLCJzZXRDb250YWluZXJzU3R5bGUiLCJzZXRBdHRyaWJ1dGUiLCJkaXJlY3RvbiIsIm9uU2lkZSIsIm9uT3ZlcmxheSIsIm9uSGlkZGVuIiwidHJpZ2dlciIsImluY2x1ZGVzIiwibG9jYXRpb24iLCJwYXRobmFtZSIsIm5ld1ZhbHVlIiwiY29udGFpbmVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm1vdmUiLCJjb250YWluZXIiLCJzZXRDb250YWluZXJTdHlsZSIsIndpZHRoIiwiY29uU3R5bGUiLCJ0cmFuc2l0aW9uIiwidGhlbiIsInZpZXciLCJhdHRyaWJ1dGVOYW1lIiwib2xkVmFsdWUiLCJuYW1lc3BhY2UiLCJpbml0Q29udGFpbmVycyIsImhhc0NoaWxkTm9kZXMiLCJ0ZW1wbGF0ZSIsInB1Z1RlbXBsYXRlIiwib2Zmc2V0V2lkdGgiLCJDb21wb25lbnQiLCJCczRUb2dnbGVCdXR0b25Db21wb25lbnQiLCJpc0Nsb3NlZCIsImV2ZW50RGlzcGF0Y2hlciIsIkZpbGVUcmVlQ29tcG9uZW50IiwiSWNvbkNvbXBvbmVudCIsIiRlbCIsIiQiLCJhdHRyIiwiYWRkQ2xhc3MiLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJuYW1lIiwibG9hZCIsImNzcyIsImNvbG9yIiwicmVtb3ZlQ2xhc3MiLCJpbmRleCIsImNsYXNzTmFtZSIsIm1hdGNoIiwiam9pbiIsInNpemUiLCJoZWlnaHQiLCJkaXJlY3Rpb24iLCJjbGFzc1N0cmluZyIsIlNob3BpZnlMaW5rbGlzdENvbXBvbmVudCIsImxpbmtsaXN0IiwibW9kZWwiLCJzeXN0ZW0iLCJsaW5rbGlzdHMiLCJNYWluIiwiUmliYSIsInJpYmEiLCJtb2R1bGUiLCJyZWdpc3QiLCJjb3JlTW9kdWxlIiwicm91dGVyTW9kdWxlIiwiYnM0TW9kdWxlIiwiY29tcG9uZW50cyIsIkN1c3RvbUNvbXBvbmVudHMiLCJkaXNwYXRjaGVyIiwiUHJpc20iLCJKUXVlcnkiLCJtYWluIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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Ozs7Ozs7O0NDM0JsQzs7Q0FFQTs7Q0FFQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUssSUFBYixHQU1FLGdCQUFjO0FBQUE7O0FBQUEscUdBSkMsSUFBSUMsaURBQUosRUFJRDs7QUFBQSwyR0FGTyxJQUFJaEcsNERBQUosQ0FBb0IsTUFBcEIsQ0FFUDs7QUFDWixPQUFLaUcsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxNQUFqQixDQUF3QkMsdURBQXhCO0FBQ0EsT0FBS0gsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxNQUFqQixDQUF3QkUsc0RBQXhCLEVBRlksQ0FHWjtBQUNBOztBQUNBLE9BQUtKLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsTUFBakIsQ0FBd0JHLHFEQUF4QixFQUxZLENBT1o7O0FBQ0EsT0FBS0wsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxNQUFqQixDQUF3QjtBQUN0QkksY0FBVSxFQUFFQyx3Q0FEVSxDQUV0Qjs7QUFGc0IsR0FBeEI7QUFLQSxPQUFLQyxVQUFMLENBQWdCbEYsRUFBaEIsQ0FBbUIsY0FBbkIsRUFBbUMsWUFBTTtBQUN2Q21GLHdEQUFBO0FBQ0QsR0FGRCxFQWJZLENBaUJaOztBQUNBLE9BQUtULElBQUwsQ0FBVXJFLElBQVYsQ0FBZStFLDJEQUFNLENBQUMsTUFBRCxDQUFOLENBQWUsQ0FBZixDQUFmLEVBQWtDeEYsTUFBTSxDQUFDeUUsS0FBekM7QUFDRCxDQXpCSDtBQTRCQWUsMkRBQU0sQ0FBQyxVQUFDbEMsQ0FBRCxFQUFxQjtBQUMxQixNQUFNbUMsSUFBSSxHQUFHLElBQUliLElBQUosRUFBYjtBQUNELENBRkssQ0FBTixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQSxlIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnMubWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEZWJ1ZyxcbiAgRXZlbnREaXNwYXRjaGVyLFxuICBVdGlscyxcbn0gZnJvbSAnQHJpYmFqcy9jb3JlJztcblxuaW1wb3J0IHB1Z1RlbXBsYXRlIGZyb20gJy4vYnM0LXNpZGViYXIuY29tcG9uZW50LnB1Zyc7XG5cbnR5cGUgU3RhdGUgPSAnb3ZlcmxheS1sZWZ0JyB8ICdvdmVybGF5LXJpZ2h0JyB8ICdzaWRlLWxlZnQnIHwgJ3NpZGUtcmlnaHQnIHwgJ2hpZGRlbic7XG5cbmludGVyZmFjZSBJU2NvcGUge1xuICBjb250YWluZXJTZWxlY3Rvcj86IHN0cmluZztcbiAgc3RhdGU6IFN0YXRlO1xuICBoaWRlOiBCczRTaWRlYmFyQ29tcG9uZW50WydoaWRlJ107XG4gIHRvZ2dsZTogQnM0U2lkZWJhckNvbXBvbmVudFsndG9nZ2xlJ107XG4gIGlkPzogc3RyaW5nO1xuICBvcHRpb25zOiB7XG4gICAgcG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcsXG4gICAgYXV0b1Nob3dPbldpZGVyVGhhbjogbnVtYmVyO1xuICAgIGF1dG9IaWRlT25TbGltbWVyVGhhbjogbnVtYmVyO1xuICAgIGF1dG9IaWRlT25QYXRobmFtZXM6IEFycmF5PHN0cmluZz47XG4gICAgb3ZlcmxheU9uU2xpbW1lclRoYW46IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEJzNFNpZGViYXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHB1YmxpYyBzdGF0aWMgdGFnTmFtZTogc3RyaW5nID0gJ2JzNC1zaWRlYmFyJztcblxuICBwcm90ZWN0ZWQgY29udGFpbmVycz86IE5vZGVMaXN0T2Y8SFRNTFVua25vd25FbGVtZW50PjtcblxuICBwcm90ZWN0ZWQgc3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb247XG5cbiAgcHJvdGVjdGVkIGF1dG9iaW5kID0gdHJ1ZTtcblxuICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gWydjb250YWluZXItc2VsZWN0b3InLCAnaWQnXTtcbiAgfVxuXG4gIHByb3RlY3RlZCB0b2dnbGVCdXR0b25FdmVudHMgPSBuZXcgRXZlbnREaXNwYXRjaGVyKCdiczQtdG9nZ2xlLWJ1dHRvbicpO1xuXG4gIHByb3RlY3RlZCBkZWJ1ZyA9IERlYnVnKCdjb21wb25lbnQ6JyArIEJzNFNpZGViYXJDb21wb25lbnQudGFnTmFtZSk7XG5cbiAgcHJvdGVjdGVkIHNjb3BlOiBJU2NvcGUgPSB7XG4gICAgY29udGFpbmVyU2VsZWN0b3I6IHVuZGVmaW5lZCxcbiAgICBzdGF0ZTogJ2hpZGRlbicsXG4gICAgaGlkZTogdGhpcy5oaWRlLFxuICAgIHRvZ2dsZTogdGhpcy50b2dnbGUsXG4gICAgaWQ6IHVuZGVmaW5lZCxcbiAgICBvcHRpb25zOiB7XG4gICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgYXV0b1Nob3dPbldpZGVyVGhhbjogMTE5OSxcbiAgICAgIGF1dG9IaWRlT25TbGltbWVyVGhhbjogMTIwMCxcbiAgICAgIGF1dG9IaWRlT25QYXRobmFtZXM6IFsnLyddLFxuICAgICAgb3ZlcmxheU9uU2xpbW1lclRoYW46IDEyMDAsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50PzogSFRNTEVsZW1lbnQpIHtcbiAgICBzdXBlcihlbGVtZW50KTtcbiAgICB0aGlzLmRlYnVnKCdjb25zdHJ1Y3RvcicsIHRoaXMpO1xuICAgIHRoaXMuaW5pdChCczRTaWRlYmFyQ29tcG9uZW50Lm9ic2VydmVkQXR0cmlidXRlcyk7XG4gICAgdGhpcy5zdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpO1xuICAgIHRoaXMudG9nZ2xlQnV0dG9uRXZlbnRzLm9uKCd0b2dnbGUnLCAodGFyZ2V0SWQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5kZWJ1ZygndG9nZ2xlIHRhcmdldElkJywgdGFyZ2V0SWQpO1xuICAgICAgaWYgKHRhcmdldElkID09PSB0aGlzLnNjb3BlLmlkKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIHRoaXMuc2V0U3RhdGVCeUVudmlyb21lbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTdGF0ZShzdGF0ZTogU3RhdGUpIHtcbiAgICB0aGlzLnNjb3BlLnN0YXRlID0gc3RhdGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NvcGUuc3RhdGU7XG4gIH1cblxuICBwdWJsaWMgaGlkZSgpIHtcbiAgICB0aGlzLnNjb3BlLnN0YXRlID0gJ2hpZGRlbic7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlKCk7XG4gIH1cblxuICBwdWJsaWMgc2hvdygpIHtcbiAgICBjb25zdCB2dyA9IFV0aWxzLmdldFZpZXdwb3J0RGltZW5zaW9ucygpLnc7XG4gICAgaWYgKHZ3IDwgdGhpcy5zY29wZS5vcHRpb25zLm92ZXJsYXlPblNsaW1tZXJUaGFuKSB7XG4gICAgICB0aGlzLnNjb3BlLnN0YXRlID0gJ292ZXJsYXktJyArIHRoaXMuc2NvcGUub3B0aW9ucy5wb3NpdGlvbiBhcyBTdGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY29wZS5zdGF0ZSA9ICdzaWRlLScgKyB0aGlzLnNjb3BlLm9wdGlvbnMucG9zaXRpb24gYXMgU3RhdGU7XG4gICAgfVxuICAgIHRoaXMub25TdGF0ZUNoYW5nZSgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5zY29wZS5zdGF0ZSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgb25IaWRkZW4oKSB7XG4gICAgdGhpcy5zZXRDb250YWluZXJzU3R5bGUoKTtcbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMCUpJyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25TaWRlKGRpcmVjdG9uOiBTdGF0ZSkge1xuICAgIHRoaXMuc2V0Q29udGFpbmVyc1N0eWxlKCcnLCBkaXJlY3Rvbik7XG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApJyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25PdmVybGF5KGRpcmVjdG9uOiBTdGF0ZSkge1xuICAgIHRoaXMuc2V0Q29udGFpbmVyc1N0eWxlKCcnLCBkaXJlY3Rvbik7XG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApJyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICB0aGlzLmRlYnVnKCdzdGF0ZSBjaGFuZ2VkOiAnICsgdGhpcy5zY29wZS5zdGF0ZSk7XG4gICAgc3dpdGNoICh0aGlzLnNjb3BlLnN0YXRlKSB7XG4gICAgICBjYXNlICdzaWRlLWxlZnQnOlxuICAgICAgY2FzZSAnc2lkZS1yaWdodCc6XG4gICAgICAgIHRoaXMub25TaWRlKHRoaXMuc2NvcGUuc3RhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb3ZlcmxheS1sZWZ0JzpcbiAgICAgICAgY2FzZSAnb3ZlcmxheS1yaWdodCc6XG4gICAgICAgICAgdGhpcy5vbk92ZXJsYXkodGhpcy5zY29wZS5zdGF0ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLm9uSGlkZGVuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZUJ1dHRvbkV2ZW50cy50cmlnZ2VyKCd0b2dnbGVkJywgdGhpcy5zY29wZS5zdGF0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmVsLm9mZnNldFdpZHRoO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFN0YXRlQnlFbnZpcm9tZW50KCkge1xuICAgIGlmICh0aGlzLnNjb3BlLm9wdGlvbnMuYXV0b0hpZGVPblBhdGhuYW1lcy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuICAgIGNvbnN0IHZ3ID0gVXRpbHMuZ2V0Vmlld3BvcnREaW1lbnNpb25zKCkudztcbiAgICBpZiAodncgPCB0aGlzLnNjb3BlLm9wdGlvbnMuYXV0b0hpZGVPblNsaW1tZXJUaGFuKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuICAgIGlmICh2dyA8IHRoaXMuc2NvcGUub3B0aW9ucy5hdXRvSGlkZU9uU2xpbW1lclRoYW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcbiAgICB9XG4gICAgaWYgKHZ3ID4gdGhpcy5zY29wZS5vcHRpb25zLmF1dG9TaG93T25XaWRlclRoYW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgb25SZXNpemUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZUJ5RW52aXJvbWVudCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRDb250YWluZXJzKG5ld1ZhbHVlPzogc3RyaW5nKSB7XG4gICAgbmV3VmFsdWUgPSBuZXdWYWx1ZSB8fCB0aGlzLnNjb3BlLmNvbnRhaW5lclNlbGVjdG9yO1xuICAgIHRoaXMuZGVidWcoJ2luaXRDb250YWluZXJzJywgbmV3VmFsdWUpO1xuICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5jb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MVW5rbm93bkVsZW1lbnQ+KG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5zZXRDb250YWluZXJzU3R5bGUoKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2UoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRDb250YWluZXJzU3R5bGUoc3R5bGU/OiBzdHJpbmcsIG1vdmU/OiBTdGF0ZSkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lcnMpIHtcbiAgICAgIGZvciAoY29uc3QgY29udGFpbmVyIG9mIHRoaXMuY29udGFpbmVycykge1xuICAgICAgICB0aGlzLnNldENvbnRhaW5lclN0eWxlKGNvbnRhaW5lciwgc3R5bGUsIG1vdmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjb250YWluZXIgc3R5bGUsIHRha2VzIG92ZXJzIGFsd2F5cyB0aGUgdHJhbnNpdGlvbiBzdHlsZSBvZiB0aGlzIHNpZGViYXJcbiAgICogQHBhcmFtIGNvbnRhaW5lclxuICAgKiBAcGFyYW0gc3R5bGVcbiAgICogQHBhcmFtIG1vdmVcbiAgICovXG4gIHByb3RlY3RlZCBzZXRDb250YWluZXJTdHlsZShjb250YWluZXI6IEhUTUxVbmtub3duRWxlbWVudCwgc3R5bGU6IHN0cmluZyA9ICcnLCBtb3ZlPzogU3RhdGUpIHtcbiAgICBpZiAobW92ZSkge1xuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgY29uc3QgY29uU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpO1xuICAgICAgc3dpdGNoIChtb3ZlKSB7XG4gICAgICAgIGNhc2UgJ3NpZGUtbGVmdCc6XG4gICAgICAgICAgc3dpdGNoIChjb25TdHlsZS5wb3NpdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnZml4ZWQnOlxuICAgICAgICAgICAgICBzdHlsZSArPSAnbGVmdDonICsgd2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHN0eWxlICs9ICdtYXJnaW4tbGVmdDonICsgd2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NpZGUtcmlnaHQnOlxuICAgICAgICAgIHN3aXRjaCAoY29uU3R5bGUucG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2ZpeGVkJzpcbiAgICAgICAgICAgICAgc3R5bGUgKz0gJ3JpZ2h0OicgKyB3aWR0aCArICdweCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgc3R5bGUgKz0gJ21hcmdpbi1yaWdodDonICsgd2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGB0cmFuc2l0aW9uOiR7dGhpcy5zdHlsZS50cmFuc2l0aW9ufTske3N0eWxlfWApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIGluaXQob2JzZXJ2ZWRBdHRyaWJ1dGVzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiBzdXBlci5pbml0KG9ic2VydmVkQXR0cmlidXRlcylcbiAgICAudGhlbigodmlldykgPT4ge1xuICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgYmVmb3JlQmluZCgpIHtcbiAgICB0aGlzLmRlYnVnKCdiZWZvcmVCaW5kJyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgYWZ0ZXJCaW5kKCkge1xuICAgIHRoaXMuZGVidWcoJ2FmdGVyQmluZCcsIHRoaXMuc2NvcGUpO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlcXVpcmVkQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcm90ZWN0ZWQgcGFyc2VkQXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZU5hbWU6IHN0cmluZywgb2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSwgbmFtZXNwYWNlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgc3VwZXIucGFyc2VkQXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZU5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgbmFtZXNwYWNlKTtcbiAgICBpZiAoYXR0cmlidXRlTmFtZSA9PT0gJ2NvbnRhaW5lclNlbGVjdG9yJykge1xuICAgICAgdGhpcy5pbml0Q29udGFpbmVycyhuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZGVjb25zdHJ1Y3RvclxuICBwcm90ZWN0ZWQgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB0ZW1wbGF0ZSgpIHtcbiAgICAvLyBPbmx5IHNldCB0aGUgY29tcG9uZW50IHRlbXBsYXRlIGlmIHRoZXJlIG5vIGNoaWxkcyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuZWwuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICB0aGlzLmRlYnVnKCdEbyBub3QgdXNlIHRlbXBsYXRlLCBiZWNhdXNlIGVsZW1lbnQgaGFzIGNoaWxkIG5vZGVzJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSBwdWdUZW1wbGF0ZSh0aGlzLnNjb3BlKTtcbiAgICAgIHRoaXMuZGVidWcoJ1VzZSB0ZW1wbGF0ZScsIHRlbXBsYXRlKTtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIjsiLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERlYnVnLFxuICBFdmVudERpc3BhdGNoZXIsXG59IGZyb20gJ0ByaWJhanMvY29yZSc7XG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2JzNC10b2dnbGUtYnV0dG9uLmNvbXBvbmVudC5odG1sJztcblxudHlwZSBTdGF0ZSA9ICd1bmRlZmluZWQnIHwgJ292ZXJsYXktbGVmdCcgfCAnb3ZlcmxheS1yaWdodCcgfCAnc2lkZS1sZWZ0JyB8ICdzaWRlLXJpZ2h0JyB8ICdoaWRkZW4nO1xuXG5pbnRlcmZhY2UgSVNjb3BlIHtcbiAgdGFyZ2V0SWQ/OiBzdHJpbmc7XG4gIHRvZ2dsZTogQnM0VG9nZ2xlQnV0dG9uQ29tcG9uZW50Wyd0b2dnbGUnXTtcbiAgc3RhdGU6IFN0YXRlO1xuICBpc0Nsb3NlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEJzNFRvZ2dsZUJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcHVibGljIHN0YXRpYyB0YWdOYW1lOiBzdHJpbmcgPSAnYnM0LXRvZ2dsZS1idXR0b24nO1xuXG4gIHByb3RlY3RlZCBhdXRvYmluZCA9IHRydWU7XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFsndGFyZ2V0LWlkJ107XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVidWcgPSBEZWJ1ZygnY29tcG9uZW50OicgKyBCczRUb2dnbGVCdXR0b25Db21wb25lbnQudGFnTmFtZSk7XG5cbiAgcHJvdGVjdGVkIGV2ZW50RGlzcGF0Y2hlciA9IG5ldyBFdmVudERpc3BhdGNoZXIoJ2JzNC10b2dnbGUtYnV0dG9uJyk7XG5cbiAgcHJvdGVjdGVkIHNjb3BlOiBJU2NvcGUgPSB7XG4gICAgdGFyZ2V0SWQ6IHVuZGVmaW5lZCxcbiAgICB0b2dnbGU6IHRoaXMudG9nZ2xlLFxuICAgIHN0YXRlOiAndW5kZWZpbmVkJyxcbiAgICBpc0Nsb3NlZDogZmFsc2UsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudD86IEhUTUxFbGVtZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gICAgdGhpcy5kZWJ1ZygnY29uc3RydWN0b3InLCB0aGlzKTtcbiAgICB0aGlzLmluaXQoQnM0VG9nZ2xlQnV0dG9uQ29tcG9uZW50Lm9ic2VydmVkQXR0cmlidXRlcyk7XG4gICAgdGhpcy5ldmVudERpc3BhdGNoZXIub24oJ3RvZ2dsZWQnLCAoc3RhdGU6IFN0YXRlKSA9PiB7XG4gICAgICB0aGlzLnNjb3BlLnN0YXRlID0gc3RhdGU7XG4gICAgICB0aGlzLnNjb3BlLmlzQ2xvc2VkID0gc3RhdGUgPT09ICdoaWRkZW4nO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmRlYnVnKCd0b2dnbGUnKTtcbiAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci50cmlnZ2VyKCd0b2dnbGUnLCB0aGlzLnNjb3BlLnRhcmdldElkKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBpbml0KG9ic2VydmVkQXR0cmlidXRlczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gc3VwZXIuaW5pdChvYnNlcnZlZEF0dHJpYnV0ZXMpXG4gICAgLnRoZW4oKHZpZXcpID0+IHtcbiAgICAgIHJldHVybiB2aWV3O1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIGJlZm9yZUJpbmQoKSB7XG4gICAgdGhpcy5kZWJ1ZygnYmVmb3JlQmluZCcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIGFmdGVyQmluZCgpIHtcbiAgICB0aGlzLmRlYnVnKCdhZnRlckJpbmQnLCB0aGlzLnNjb3BlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXF1aXJlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFsndGFyZ2V0SWQnXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlTmFtZTogc3RyaW5nLCBvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55LCBuYW1lc3BhY2U6IHN0cmluZyB8IG51bGwpIHtcbiAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBuYW1lc3BhY2UpO1xuICB9XG5cbiAgLy8gZGVjb25zdHJ1Y3RvclxuICBwcm90ZWN0ZWQgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB0ZW1wbGF0ZSgpIHtcbiAgICAvLyBPbmx5IHNldCB0aGUgY29tcG9uZW50IHRlbXBsYXRlIGlmIHRoZXJlIG5vIGNoaWxkcyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuZWwuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICB0aGlzLmRlYnVnKCdEbyBub3QgdXNlIHRlbXBsYXRlLCBiZWNhdXNlIGVsZW1lbnQgaGFzIGNoaWxkIG5vZGVzJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1ZygnVXNlIHRlbXBsYXRlJywgdGVtcGxhdGUpO1xuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiOyIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGVidWcsXG59IGZyb20gJ0ByaWJhanMvY29yZSc7XG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2ZpbGUtdHJlZS5jb21wb25lbnQuaHRtbCc7XG5cbmludGVyZmFjZSBJU2NvcGUge1xuICBoZWxsbz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVUcmVlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBwdWJsaWMgc3RhdGljIHRhZ05hbWU6IHN0cmluZyA9ICdydi1maWxlLXRyZWUnO1xuXG4gIHByb3RlY3RlZCBhdXRvYmluZCA9IGZhbHNlO1xuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZWJ1ZyA9IERlYnVnKCdjb21wb25lbnQ6JyArIEZpbGVUcmVlQ29tcG9uZW50LnRhZ05hbWUpO1xuXG4gIHByb3RlY3RlZCBzY29wZTogSVNjb3BlID0ge307XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudD86IEhUTUxFbGVtZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gICAgdGhpcy5kZWJ1ZygnY29uc3RydWN0b3InLCB0aGlzKTtcbiAgICB0aGlzLmluaXQoRmlsZVRyZWVDb21wb25lbnQub2JzZXJ2ZWRBdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB0ZW1wbGF0ZSgpIHtcbiAgICAvLyBPbmx5IHNldCB0aGUgY29tcG9uZW50IHRlbXBsYXRlIGlmIHRoZXJlIG5vIGNoaWxkcyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuZWwuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICB0aGlzLmRlYnVnKCdEbyBub3QgdXNlIHRlbXBsYXRlLCBiZWNhdXNlIGVsZW1lbnQgaGFzIGNoaWxkIG5vZGVzJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1ZygnVXNlIHRlbXBsYXRlJywgdGVtcGxhdGUpO1xuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9ydi1pY29uL3J2LWljb24uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vc2hvcGlmeS1saW5rbGlzdC9zaG9waWZ5LWxpbmtsaXN0LmNvbXBvbmVudCc7XG5leHBvcnQgeyBCczRTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9iczQtc2lkZWJhci9iczQtc2lkZWJhci5jb21wb25lbnQnO1xuZXhwb3J0IHsgQnM0VG9nZ2xlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9iczQtdG9nZ2xlLWJ1dHRvbi9iczQtdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQnO1xuZXhwb3J0IHsgRmlsZVRyZWVDb21wb25lbnQgfSBmcm9tICcuL2ZpbGUtdHJlZS9maWxlLXRyZWUuY29tcG9uZW50JztcbiIsImltcG9ydCBEZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQHJpYmFqcy9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHB1YmxpYyBzdGF0aWMgdGFnTmFtZTogc3RyaW5nID0gJ3J2LWljb24nO1xuXG4gIHByb3RlY3RlZCBkZWJ1ZyA9IERlYnVnKCdjb21wb25lbnQ6JyArIEljb25Db21wb25lbnQudGFnTmFtZSk7XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFsnc2l6ZScsICd3aWR0aCcsICdoZWlnaHQnLCAnbmFtZScsICdzcmMnLCAnY29sb3InLCAnZGlyZWN0aW9uJ107XG4gIH1cblxuICBwcm90ZWN0ZWQgc2NvcGU6IGFueSA9IHt9O1xuXG4gIHByb3RlY3RlZCBhdXRvYmluZCA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCAkZWw6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudD86IEhUTUxFbGVtZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gICAgdGhpcy4kZWwgPSAkKHRoaXMuZWwpO1xuICAgIHRoaXMuJGVsXG4gICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgIC5hdHRyKCdyb2xlJywgJ2ltZycpXG4gICAgLmFkZENsYXNzKCdpY29uc2V0Jyk7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCB2YWx1ZXNcbiAgICAvLyB0aGlzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygnc2l6ZScsIG51bGwsIDMyLCBudWxsKTtcbiAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygnZGlyZWN0aW9uJywgbnVsbCwgJ3RvcCcsIG51bGwpO1xuXG4gICAgdGhpcy5pbml0KEljb25Db21wb25lbnQub2JzZXJ2ZWRBdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIHB1YmxpYyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZTogc3RyaW5nLCBvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55LCBuYW1lc3BhY2U6IHN0cmluZyB8IG51bGwpIHtcbiAgICB0aGlzLmRlYnVnKCdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snLCBuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIG5hbWVzcGFjZSk7XG4gICAgLy8gaW5qZWN0cyB0aGUgY2hhbmdlZCBhdHRyaWJ1dGVzIHRvIHNjb3BlXG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgbmFtZXNwYWNlKTtcblxuICAgIGlmIChuYW1lID09PSAnc3JjJykge1xuICAgICAgdGhpcy4kZWxcbiAgICAgIC5sb2FkKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSA9PT0gJ2NvbG9yJykge1xuICAgICAgdGhpcy4kZWxcbiAgICAgIC5jc3Moe2NvbG9yOiBuZXdWYWx1ZX0pXG4gICAgICAucmVtb3ZlQ2xhc3MgKChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiAoY2xhc3NOYW1lLm1hdGNoICgvKF58XFxzKWNvbG9yLVxcUysvZykgfHwgW10pLmpvaW4oJyAnKTtcbiAgICAgIH0pXG4gICAgICAuYWRkQ2xhc3MoYGNvbG9yLSR7bmV3VmFsdWV9YCk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgPT09ICdzaXplJykge1xuICAgICAgY29uc3Qgc2l6ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5kZWJ1Zygnc2V0IHNpemUnLCB0aGlzLiRlbCk7XG4gICAgICB0aGlzLiRlbFxuICAgICAgLmNzcyh7aGVpZ2h0OiBzaXplLCB3aWR0aDogc2l6ZX0pXG4gICAgICAucmVtb3ZlQ2xhc3MoKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIChjbGFzc05hbWUubWF0Y2ggKC8oXnxcXHMpc2l6ZS1cXFMrL2cpIHx8IFtdKS5qb2luKCcgJyk7XG4gICAgICB9KVxuICAgICAgLmFkZENsYXNzKGBzaXplLSR7c2l6ZX1gKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSA9PT0gJ3dpZHRoJykge1xuICAgICAgY29uc3Qgd2lkdGggPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuZGVidWcoJ3NldCB3aWR0aCcsIHRoaXMuJGVsKTtcbiAgICAgIHRoaXMuJGVsXG4gICAgICAuY3NzKHt3aWR0aH0pXG4gICAgICAucmVtb3ZlQ2xhc3MoKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIChjbGFzc05hbWUubWF0Y2ggKC8oXnxcXHMpd2lkdGgtXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xuICAgICAgfSlcbiAgICAgIC5hZGRDbGFzcyhgd2lkdGgtJHt3aWR0aH1gKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSA9PT0gJ2hlaWdodCcpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5kZWJ1Zygnc2V0IGhlaWdodCcsIHRoaXMuJGVsKTtcbiAgICAgIHRoaXMuJGVsXG4gICAgICAuY3NzKHtoZWlnaHR9KVxuICAgICAgLnJlbW92ZUNsYXNzKChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiAoY2xhc3NOYW1lLm1hdGNoICgvKF58XFxzKWhlaWdodC1cXFMrL2cpIHx8IFtdKS5qb2luKCcgJyk7XG4gICAgICB9KVxuICAgICAgLmFkZENsYXNzKGBoZWlnaHQtJHtoZWlnaHR9YCk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgPT09ICdkaXJlY3Rpb24nKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBuZXdWYWx1ZTtcbiAgICAgIGxldCBjbGFzc1N0cmluZyA9IGBkaXJlY3Rpb24tJHtkaXJlY3Rpb259YDtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0JyApIHtcbiAgICAgICAgY2xhc3NTdHJpbmcgKz0gJyByb3RhdGUtMjcwJztcbiAgICAgIH0gZWxzZSBpZiAoIGRpcmVjdGlvbiA9PT0gJ2xlZnQtdG9wJyB8fCBkaXJlY3Rpb24gPT09ICdsZWZ0LXVwJyB8fCBkaXJlY3Rpb24gPT09ICd0b3AtbGVmdCcgfHwgZGlyZWN0aW9uID09PSAndXAtbGVmdCcgKSB7XG4gICAgICAgIGNsYXNzU3RyaW5nICs9ICcgcm90YXRlLTMxNScgO1xuICAgICAgfSBlbHNlIGlmICggZGlyZWN0aW9uID09PSAndG9wJyB8fCBkaXJlY3Rpb24gPT09ICd1cCcgKSB7XG4gICAgICAgIGNsYXNzU3RyaW5nICs9ICcgcm90YXRlLTAnO1xuICAgICAgfSBlbHNlIGlmICggZGlyZWN0aW9uID09PSAndG9wLXJpZ2h0JyB8fCBkaXJlY3Rpb24gPT09ICd1cC1yaWdodCcgfHwgZGlyZWN0aW9uID09PSAncmlnaHQtdG9wJyB8fCBkaXJlY3Rpb24gPT09ICdyaWdodC11cCcpIHtcbiAgICAgICAgY2xhc3NTdHJpbmcgKz0gJyByb3RhdGUtNDUnO1xuICAgICAgfSBlbHNlIGlmICggZGlyZWN0aW9uID09PSAncmlnaHQnICkge1xuICAgICAgICBjbGFzc1N0cmluZyArPSAnIHJvdGF0ZS05MCc7XG4gICAgICB9IGVsc2UgaWYgKCBkaXJlY3Rpb24gPT09ICdyaWdodC1ib3R0b20nIHx8IGRpcmVjdGlvbiA9PT0gJ3JpZ2h0LWRvd24nIHx8IGRpcmVjdGlvbiA9PT0gJ2JvdHRvbS1yaWdodCcgfHwgZGlyZWN0aW9uID09PSAnZG93bi1yaWdodCcgKSB7XG4gICAgICAgIGNsYXNzU3RyaW5nICs9ICcgcm90YXRlLTEzNSc7XG4gICAgICB9IGVsc2UgaWYgKCBkaXJlY3Rpb24gPT09ICdib3R0b20nIHx8IGRpcmVjdGlvbiA9PT0gJ2Rvd24nICkge1xuICAgICAgICBjbGFzc1N0cmluZyArPSAnIHJvdGF0ZS0xODAnO1xuICAgICAgfSBlbHNlIGlmICggZGlyZWN0aW9uID09PSAnbGVmdC1ib3R0b20nIHx8IGRpcmVjdGlvbiA9PT0gJ2xlZnQtZG93bicgfHwgZGlyZWN0aW9uID09PSAnYm90dG9tLWxlZnQnIHx8IGRpcmVjdGlvbiA9PT0gJ2Rvd24tbGVmdCcgKSB7XG4gICAgICAgIGNsYXNzU3RyaW5nICs9ICcgcm90YXRlLTIyNSc7XG4gICAgICB9XG4gICAgICB0aGlzLiRlbFxuICAgICAgLmNzcyh7aGVpZ2h0OiBuZXdWYWx1ZSwgd2lkdGg6IG5ld1ZhbHVlfSlcbiAgICAgIC5yZW1vdmVDbGFzcygoaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gKGNsYXNzTmFtZS5tYXRjaCAoLyhefFxccylkaXJlY3Rpb24tXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xuICAgICAgfSlcbiAgICAgIC5yZW1vdmVDbGFzcygoaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gKGNsYXNzTmFtZS5tYXRjaCAoLyhefFxccylyb3RhdGUtXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xuICAgICAgfSlcbiAgICAgIC5hZGRDbGFzcyhjbGFzc1N0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1uYXYgcnYtY2xhc3M9bGlua2xpc3QuaGFuZGxlIHJ2LWNsYXNzLW5hdi1waWxscz1waWxscyBydi1jbGFzcy13LTEwMD12ZXJ0aWNhbCBydi1jbGFzcy1mbGV4LWNvbHVtbj12ZXJ0aWNhbCBydi1jbGFzcy1mbGV4LXJvdz1cXFwidmVydGljYWwgfCBub3RcXFwiPiA8ZGl2IGNsYXNzPVxcXCJuYXYtaXRlbSBuYXYtaXRlbS1sZXZlbC0wXFxcIiBydi1lYWNoLWxpbms9bGlua2xpc3QubGlua3M+IDxhIGNsYXNzPW5hdi1saW5rIHJ2LWNsYXNzLWFjdGl2ZT1saW5rLmFjdGl2ZSBydi1yb3V0ZS1jbGFzcy1hY3RpdmU9bGluay51cmwgcnYtcm91dGU9bGluay51cmwgcnYtaHJlZj1saW5rLnVybD4gPHNwYW4gcnYtaTE4bi10ZXh0PVxcXCJsaW5rLnRpdGxlIHwgaGFuZGxlaXplIHwgcHJlcGVuZCAnbWVudXMuJ1xcXCI+e2xpbmsudGl0bGV9PC9zcGFuPiA8L2E+IDxkaXYgY2xhc3M9XFxcIm5hdi1pdGVtIG5hdi1pdGVtLWxldmVsLTFcXFwiIHJ2LWVhY2gtc3VibGluaz1saW5rLmxpbmtzPiA8YSBjbGFzcz1uYXYtbGluayBydi1jbGFzcz1cXFwic3VibGluay5sZXZlbCB8IHByZXBlbmQgJ2xldmVsLSdcXFwiIHJ2LWNsYXNzLWFjdGl2ZT1zdWJsaW5rLmFjdGl2ZSBydi1yb3V0ZS1jbGFzcy1hY3RpdmU9bGluay51cmwgcnYtcm91dGU9c3VibGluay51cmwgcnYtaHJlZj1zdWJsaW5rLnVybD4gPHNwYW4gcnYtaTE4bi10ZXh0PVxcXCJzdWJsaW5rLnRpdGxlIHwgaGFuZGxlaXplIHwgcHJlcGVuZCAnbWVudXMuJ1xcXCI+e3N1YmxpbmsudGl0bGV9PC9zcGFuPiA8L2E+IDxkaXYgY2xhc3M9XFxcIm5hdi1pdGVtIG5hdi1pdGVtLWxldmVsLTJcXFwiIHJ2LWVhY2gtc3Vic3VibGluaz1zdWJsaW5rLmxpbmtzPiA8YSBjbGFzcz1uYXYtbGluayBydi1jbGFzcz1cXFwic3Vic3VibGluay5sZXZlbCB8IHByZXBlbmQgJ2xldmVsLSdcXFwiIHJ2LWNsYXNzLWFjdGl2ZT1zdWJzdWJsaW5rLmFjdGl2ZSBydi1yb3V0ZS1jbGFzcy1hY3RpdmU9bGluay51cmwgcnYtcm91dGU9c3Vic3VibGluay51cmwgcnYtaHJlZj1zdWJzdWJsaW5rLnVybD4gPHNwYW4gcnYtaTE4bi10ZXh0PVxcXCJzdWJzdWJsaW5rLnRpdGxlIHwgaGFuZGxlaXplIHwgcHJlcGVuZCAnbWVudXMuJ1xcXCI+e3N1YnN1YmxpbmsudGl0bGV9PC9zcGFuPiA8L2E+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvbmF2PlwiOyIsImltcG9ydCBEZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAcmliYWpzL2NvcmUnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vc2hvcGlmeS1saW5rbGlzdC5jb21wb25lbnQuaHRtbCc7XG5cbmludGVyZmFjZSBJTGluayB7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgY2hpbGRfYWN0aXZlOiBib29sZWFuO1xuICBoYW5kbGU6IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlcjtcbiAgbGV2ZWxzOiBudW1iZXI7XG4gIGxpbmtzOiBBcnJheTxJTGluaz47XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHR5cGU6ICdwYWdlX2xpbmsnO1xuICB1cmw6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElMaW5rbGlzdCB7XG4gIGhhbmRsZTogc3RyaW5nO1xuICBpZDogc3RyaW5nIHwgbnVsbDtcbiAgbGV2ZWxzOiBudW1iZXI7XG4gIGxpbmtzOiBBcnJheTxJTGluaz47XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJU2NvcGUge1xuICBsaW5rbGlzdD86IElMaW5rbGlzdDtcbn1cblxuLyoqXG4gKiBzaG9waWZ5LWZpbHRlclxuICovXG5leHBvcnQgY2xhc3MgU2hvcGlmeUxpbmtsaXN0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBwdWJsaWMgc3RhdGljIHRhZ05hbWU6IHN0cmluZyA9ICdzaG9waWZ5LWxpbmtsaXN0JztcblxuICBwcm90ZWN0ZWQgZGVidWcgPSBEZWJ1ZygnY29tcG9uZW50OicgKyBTaG9waWZ5TGlua2xpc3RDb21wb25lbnQudGFnTmFtZSk7XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFsnbmFtZScsICdsaW5rbGlzdCcsICdwaWxscycsICd2ZXJ0aWNhbCddO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNjb3BlOiBJU2NvcGUgPSB7XG5cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50PzogSFRNTEVsZW1lbnQpIHtcbiAgICBzdXBlcihlbGVtZW50KTtcbiAgICB0aGlzLmluaXQoU2hvcGlmeUxpbmtsaXN0Q29tcG9uZW50Lm9ic2VydmVkQXR0cmlidXRlcyk7XG4gIH1cblxuICBwdWJsaWMgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWU6IHN0cmluZywgb2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSwgbmFtZXNwYWNlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgLy8gaW5qZWN0cyB0aGUgY2hhbmdlZCBhdHRyaWJ1dGVzIHRvIHNjb3BlXG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgbmFtZXNwYWNlKTtcblxuICAgIC8vIHNldCBsaW5rbGlzdCBieSBuYW1lXG4gICAgaWYgKG5hbWUgPT09ICduYW1lJykge1xuICAgICAgdGhpcy5zY29wZS5saW5rbGlzdCA9IHdpbmRvdy5tb2RlbC5zeXN0ZW0ubGlua2xpc3RzW25ld1ZhbHVlXTtcbiAgICAgIHRoaXMuZGVidWcoJ2xpbmtsaXN0JywgdGhpcy5zY29wZS5saW5rbGlzdCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlcXVpcmVkQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gWydsaW5rbGlzdCddO1xuICB9XG5cbiAgLyoqXG4gICAqIE9ubHkgc2V0IHRoZSBjb21wb25lbnQgdGVtcGxhdGUgaWYgdGhlcmUgbm8gY2hpbGRzIGFscmVhZHlcbiAgICovXG4gIHByb3RlY3RlZCB0ZW1wbGF0ZSgpIHtcbiAgICBpZiAodGhpcy5lbC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBSaWJhLFxuICBKUXVlcnksXG4gIGNvcmVNb2R1bGUsXG4gIEV2ZW50RGlzcGF0Y2hlcixcbn0gZnJvbSAnQHJpYmFqcy9jb3JlJztcbi8vIGltcG9ydCBzaG9waWZ5TW9kdWxlIGZyb20gJ0ByaWJhanMvc2hvcGlmeSc7XG5pbXBvcnQgcm91dGVyTW9kdWxlIGZyb20gJ0ByaWJhanMvcm91dGVyJztcbi8vIGltcG9ydCB7IGkxOG5Nb2R1bGUgfSBmcm9tICdAcmliYWpzL2kxOG4nO1xuaW1wb3J0IHsgYnM0TW9kdWxlIH0gZnJvbSAnQHJpYmFqcy9iczQnO1xuLy8gaW1wb3J0IHsgTG9jYWxlc1NlcnZpY2UgfSBmcm9tICdAcmliYWpzL3Nob3BpZnktdGRhJztcblxuaW1wb3J0ICogYXMgQ3VzdG9tQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgKiBhcyBQcmlzbSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL3Rvb2xiYXIvcHJpc20tdG9vbGJhcic7XG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy9jb3B5LXRvLWNsaXBib2FyZC9wcmlzbS1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jc3MnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdCc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW1hcmt1cCc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0JztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNhc3MnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tc2Nzcyc7XG5cbmV4cG9ydCBjbGFzcyBNYWluIHtcblxuICBwcml2YXRlIHJpYmEgPSBuZXcgUmliYSgpO1xuXG4gIHByaXZhdGUgZGlzcGF0Y2hlciA9IG5ldyBFdmVudERpc3BhdGNoZXIoJ21haW4nKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJpYmEubW9kdWxlLnJlZ2lzdChjb3JlTW9kdWxlKTtcbiAgICB0aGlzLnJpYmEubW9kdWxlLnJlZ2lzdChyb3V0ZXJNb2R1bGUpO1xuICAgIC8vIHRoaXMucmliYS5tb2R1bGUucmVnaXN0KHNob3BpZnlNb2R1bGUpO1xuICAgIC8vIHRoaXMucmliYS5tb2R1bGUucmVnaXN0KGkxOG5Nb2R1bGUodGhpcy5sb2NhbGVzU2VydmljZSkpO1xuICAgIHRoaXMucmliYS5tb2R1bGUucmVnaXN0KGJzNE1vZHVsZSk7XG5cbiAgICAvLyBSZWdpc3QgY3VzdG9tIGNvbXBvbmVudHNcbiAgICB0aGlzLnJpYmEubW9kdWxlLnJlZ2lzdCh7XG4gICAgICBjb21wb25lbnRzOiBDdXN0b21Db21wb25lbnRzLFxuICAgICAgLy8gYmluZGVyczogey4uLmN1c3RvbUJpbmRlcnN9LFxuICAgIH0pO1xuXG4gICAgdGhpcy5kaXNwYXRjaGVyLm9uKCduZXdQYWdlUmVhZHknLCAoKSA9PiB7XG4gICAgICBQcmlzbS5oaWdobGlnaHRBbGwoKTtcbiAgICB9KTtcblxuICAgIC8vIHdpbmRvdy5tb2RlbC5zeXN0ZW0uc2hvcGlmeSA9ICh3aW5kb3cgYXMgYW55KS5TaG9waWZ5O1xuICAgIHRoaXMucmliYS5iaW5kKEpRdWVyeSgnYm9keScpWzBdLCB3aW5kb3cubW9kZWwpO1xuICB9XG59XG5cbkpRdWVyeSgoJDogSlF1ZXJ5U3RhdGljKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBuZXcgTWFpbigpO1xufSk7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9