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

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "autobind", true);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "toggleButtonEvents", new _ribajs_core__WEBPACK_IMPORTED_MODULE_11__["EventDispatcher"]('bs4-toggle-button'));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "debug", Object(_ribajs_core__WEBPACK_IMPORTED_MODULE_11__["Debug"])('component:' + Bs4SidebarComponent.tagName));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "scope", {
      containerSelector: undefined,
      state: 'side-left',
      hide: _this.hide,
      toggle: _this.toggle,
      id: undefined
    });

    _this.debug('constructor', _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));

    _this.init(Bs4SidebarComponent.observedAttributes);

    _this.toggleButtonEvents.on('toggle', function (targetId) {
      _this.debug('toggle targetId', targetId);

      if (targetId === _this.scope.id) {
        _this.toggle();
      }
    });

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
      this.scope.state = 'side-left';
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
    key: "onSide",
    value: function onSide(directon) {
      if (this.scope.containerSelector) {
        var containers = document.querySelectorAll(this.scope.containerSelector);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(containers), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var container = _step.value;
            var width = this.width;
            var conStyle = window.getComputedStyle(container);

            if (directon === 'side-left') {
              switch (conStyle.position) {
                case 'fixed':
                  container.style.left = width + 'px';
                  break;

                default:
                  container.style.marginLeft = width + 'px';
                  break;
              }
            } else {
              switch (conStyle.position) {
                case 'fixed':
                  container.style.right = width + 'px';
                  break;

                default:
                  container.style.marginRight = width + 'px';
                  break;
              }
            }
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

      this.el.style.transform = 'translateX(0)';
    }
  }, {
    key: "onHidden",
    value: function onHidden() {
      if (this.scope.containerSelector) {
        var containers = document.querySelectorAll(this.scope.containerSelector);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(containers), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var container = _step2.value;
            var conStyle = window.getComputedStyle(container);

            switch (conStyle.position) {
              case 'fixed':
                container.style.left = '';
                break;

              default:
                container.style.marginLeft = '';
                break;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      this.el.style.transform = 'translateX(-100%)';
    }
  }, {
    key: "onOverlay",
    value: function onOverlay(directon) {//
    }
  }, {
    key: "onStateChange",
    value: function onStateChange() {
      this.debug('state changed: ' + this.scope.state);

      if (this.scope.state === 'side-left' || this.scope.state === 'side-right') {
        this.onSide(this.scope.state);
      }

      if (this.scope.state === 'hidden') {
        this.onHidden();
      }

      if (this.scope.state === 'overlay-left' || this.scope.state === 'overlay-right') {
        this.onOverlay(this.scope.state);
      }

      this.toggleButtonEvents.trigger('toggled', this.scope.state);
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
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
      _babel_runtime_corejs2_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Bs4SidebarComponent.prototype), "attributeChangedCallback", this).call(this, attributeName, oldValue, newValue, namespace);

      if (attributeName === 'containerSelector') {
        this.onStateChange();
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

/***/ "./src/ts/components/index.ts":
/*!************************************!*\
  !*** ./src/ts/components/index.ts ***!
  \************************************/
/*! exports provided: IconComponent, ShopifyLinklistComponent, Bs4SidebarComponent, Bs4ToggleButtonComponent */
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

module.exports = "<nav class=nav rv-class=linklist.handle rv-class-nav-pills=pills rv-class-flex-column=vertical rv-class-flex-row=\"vertical | not\"> <div class=nav-item rv-each-link=linklist.links> <a class=nav-link rv-class-active=link.active rv-route-class-active=link.url rv-route=link.url rv-href=link.url> <span rv-i18n-text=\"link.title | handleize | prepend 'menus.'\">{link.title}</span> </a> <div class=nav-item rv-each-sublink=link.links> <a class=nav-link rv-class-active=sublink.active rv-route-class-active=link.url rv-route=sublink.url rv-href=sublink.url> <span rv-i18n-text=\"sublink.title | handleize | prepend 'menus.'\">{sublink.title}</span> </a> </div> </div> </nav>";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudHMvYnM0LXNpZGViYXIvYnM0LXNpZGViYXIuY29tcG9uZW50LnB1ZyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50cy9iczQtc2lkZWJhci9iczQtc2lkZWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudHMvYnM0LXRvZ2dsZS1idXR0b24vYnM0LXRvZ2dsZS1idXR0b24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudHMvYnM0LXRvZ2dsZS1idXR0b24vYnM0LXRvZ2dsZS1idXR0b24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb21wb25lbnRzL3J2LWljb24vcnYtaWNvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudHMvc2hvcGlmeS1saW5rbGlzdC9zaG9waWZ5LWxpbmtsaXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy90cy9jb21wb25lbnRzL3Nob3BpZnktbGlua2xpc3Qvc2hvcGlmeS1saW5rbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vL2ZzIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJCczRTaWRlYmFyQ29tcG9uZW50IiwiZWxlbWVudCIsIkV2ZW50RGlzcGF0Y2hlciIsIkRlYnVnIiwidGFnTmFtZSIsImNvbnRhaW5lclNlbGVjdG9yIiwidW5kZWZpbmVkIiwic3RhdGUiLCJoaWRlIiwidG9nZ2xlIiwiaWQiLCJkZWJ1ZyIsImluaXQiLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJ0b2dnbGVCdXR0b25FdmVudHMiLCJvbiIsInRhcmdldElkIiwic2NvcGUiLCJvblN0YXRlQ2hhbmdlIiwic2hvdyIsImRpcmVjdG9uIiwiY29udGFpbmVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRhaW5lciIsIndpZHRoIiwiY29uU3R5bGUiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwicG9zaXRpb24iLCJzdHlsZSIsImxlZnQiLCJtYXJnaW5MZWZ0IiwicmlnaHQiLCJtYXJnaW5SaWdodCIsImVsIiwidHJhbnNmb3JtIiwib25TaWRlIiwib25IaWRkZW4iLCJvbk92ZXJsYXkiLCJ0cmlnZ2VyIiwidGhlbiIsInZpZXciLCJhdHRyaWJ1dGVOYW1lIiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsIm5hbWVzcGFjZSIsImhhc0NoaWxkTm9kZXMiLCJ0ZW1wbGF0ZSIsInB1Z1RlbXBsYXRlIiwib2Zmc2V0V2lkdGgiLCJDb21wb25lbnQiLCJCczRUb2dnbGVCdXR0b25Db21wb25lbnQiLCJpc0Nsb3NlZCIsImV2ZW50RGlzcGF0Y2hlciIsIkljb25Db21wb25lbnQiLCIkZWwiLCIkIiwiYXR0ciIsImFkZENsYXNzIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwibmFtZSIsImxvYWQiLCJjc3MiLCJjb2xvciIsInJlbW92ZUNsYXNzIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJtYXRjaCIsImpvaW4iLCJzaXplIiwiaGVpZ2h0IiwiZGlyZWN0aW9uIiwiY2xhc3NTdHJpbmciLCJTaG9waWZ5TGlua2xpc3RDb21wb25lbnQiLCJsaW5rbGlzdCIsIm1vZGVsIiwic3lzdGVtIiwibGlua2xpc3RzIiwiTWFpbiIsIlJpYmEiLCJyaWJhIiwibW9kdWxlIiwicmVnaXN0IiwiY29yZU1vZHVsZSIsInJvdXRlck1vZHVsZSIsImJzNE1vZHVsZSIsImNvbXBvbmVudHMiLCJDdXN0b21Db21wb25lbnRzIiwiZGlzcGF0Y2hlciIsIlByaXNtIiwiYmluZCIsIkpRdWVyeSIsIm1haW4iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztR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Q0EsT0FBS1QsSUFBTCxDQUFVVSxJQUFWLENBQWVDLDJEQUFNLENBQUMsTUFBRCxDQUFOLENBQWUsQ0FBZixDQUFmLEVBQWtDakUsTUFBTSxDQUFDaUQsS0FBekM7QUFDRCxDQXpCSDtBQTRCQWdCLDJEQUFNLENBQUMsVUFBQ25DLENBQUQsRUFBcUI7QUFDMUIsTUFBTW9DLElBQUksR0FBRyxJQUFJZCxJQUFKLEVBQWI7QUFDRCxDQUZLLENBQU4sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREEsZSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzLm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGVidWcsXG4gIEV2ZW50RGlzcGF0Y2hlcixcbn0gZnJvbSAnQHJpYmFqcy9jb3JlJztcblxuaW1wb3J0IHB1Z1RlbXBsYXRlIGZyb20gJy4vYnM0LXNpZGViYXIuY29tcG9uZW50LnB1Zyc7XG5cbnR5cGUgU3RhdGUgPSAnb3ZlcmxheS1sZWZ0JyB8ICdvdmVybGF5LXJpZ2h0JyB8ICdzaWRlLWxlZnQnIHwgJ3NpZGUtcmlnaHQnIHwgJ2hpZGRlbic7XG5cbmludGVyZmFjZSBJU2NvcGUge1xuICBjb250YWluZXJTZWxlY3Rvcj86IHN0cmluZztcbiAgc3RhdGU6IFN0YXRlO1xuICBoaWRlOiBCczRTaWRlYmFyQ29tcG9uZW50WydoaWRlJ107XG4gIHRvZ2dsZTogQnM0U2lkZWJhckNvbXBvbmVudFsndG9nZ2xlJ107XG4gIGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQnM0U2lkZWJhckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcHVibGljIHN0YXRpYyB0YWdOYW1lOiBzdHJpbmcgPSAnYnM0LXNpZGViYXInO1xuXG4gIHByb3RlY3RlZCBhdXRvYmluZCA9IHRydWU7XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFsnY29udGFpbmVyLXNlbGVjdG9yJywgJ2lkJ107XG4gIH1cblxuICBwcm90ZWN0ZWQgdG9nZ2xlQnV0dG9uRXZlbnRzID0gbmV3IEV2ZW50RGlzcGF0Y2hlcignYnM0LXRvZ2dsZS1idXR0b24nKTtcblxuICBwcm90ZWN0ZWQgZGVidWcgPSBEZWJ1ZygnY29tcG9uZW50OicgKyBCczRTaWRlYmFyQ29tcG9uZW50LnRhZ05hbWUpO1xuXG4gIHByb3RlY3RlZCBzY29wZTogSVNjb3BlID0ge1xuICAgIGNvbnRhaW5lclNlbGVjdG9yOiB1bmRlZmluZWQsXG4gICAgc3RhdGU6ICdzaWRlLWxlZnQnLFxuICAgIGhpZGU6IHRoaXMuaGlkZSxcbiAgICB0b2dnbGU6IHRoaXMudG9nZ2xlLFxuICAgIGlkOiB1bmRlZmluZWQsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudD86IEhUTUxFbGVtZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gICAgdGhpcy5kZWJ1ZygnY29uc3RydWN0b3InLCB0aGlzKTtcbiAgICB0aGlzLmluaXQoQnM0U2lkZWJhckNvbXBvbmVudC5vYnNlcnZlZEF0dHJpYnV0ZXMpO1xuICAgIHRoaXMudG9nZ2xlQnV0dG9uRXZlbnRzLm9uKCd0b2dnbGUnLCAodGFyZ2V0SWQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5kZWJ1ZygndG9nZ2xlIHRhcmdldElkJywgdGFyZ2V0SWQpO1xuICAgICAgaWYgKHRhcmdldElkID09PSB0aGlzLnNjb3BlLmlkKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0U3RhdGUoc3RhdGU6IFN0YXRlKSB7XG4gICAgdGhpcy5zY29wZS5zdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgcHVibGljIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnNjb3BlLnN0YXRlO1xuICB9XG5cbiAgcHVibGljIGhpZGUoKSB7XG4gICAgdGhpcy5zY29wZS5zdGF0ZSA9ICdoaWRkZW4nO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZSgpO1xuICB9XG5cbiAgcHVibGljIHNob3coKSB7XG4gICAgdGhpcy5zY29wZS5zdGF0ZSA9ICdzaWRlLWxlZnQnO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZSgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5zY29wZS5zdGF0ZSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgb25TaWRlKGRpcmVjdG9uOiBTdGF0ZSkge1xuICAgIGlmICh0aGlzLnNjb3BlLmNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgICBjb25zdCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRGl2RWxlbWVudD4odGhpcy5zY29wZS5jb250YWluZXJTZWxlY3Rvcik7XG4gICAgICBmb3IgKGNvbnN0IGNvbnRhaW5lciBvZiBjb250YWluZXJzKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgY29uc3QgY29uU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpO1xuICAgICAgICBpZiAoZGlyZWN0b24gPT09ICdzaWRlLWxlZnQnKSB7XG4gICAgICAgICAgc3dpdGNoIChjb25TdHlsZS5wb3NpdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnZml4ZWQnOlxuICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUubGVmdCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUubWFyZ2luTGVmdCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXRjaCAoY29uU3R5bGUucG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2ZpeGVkJzpcbiAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnJpZ2h0ID0gd2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5tYXJnaW5SaWdodCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uSGlkZGVuKCkge1xuICAgIGlmICh0aGlzLnNjb3BlLmNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgICBjb25zdCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRGl2RWxlbWVudD4odGhpcy5zY29wZS5jb250YWluZXJTZWxlY3Rvcik7XG4gICAgICBmb3IgKGNvbnN0IGNvbnRhaW5lciBvZiBjb250YWluZXJzKSB7XG4gICAgICAgIGNvbnN0IGNvblN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKTtcbiAgICAgICAgc3dpdGNoIChjb25TdHlsZS5wb3NpdGlvbikge1xuICAgICAgICAgIGNhc2UgJ2ZpeGVkJzpcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLm1hcmdpbkxlZnQgPSAnJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJztcbiAgfVxuXG4gIHByb3RlY3RlZCBvbk92ZXJsYXkoZGlyZWN0b246IFN0YXRlKSB7XG4gICAgLy9cbiAgfVxuXG4gIHByb3RlY3RlZCBvblN0YXRlQ2hhbmdlKCkge1xuICAgIHRoaXMuZGVidWcoJ3N0YXRlIGNoYW5nZWQ6ICcgKyB0aGlzLnNjb3BlLnN0YXRlKTtcbiAgICBpZiAodGhpcy5zY29wZS5zdGF0ZSA9PT0gJ3NpZGUtbGVmdCcgfHwgdGhpcy5zY29wZS5zdGF0ZSA9PT0gJ3NpZGUtcmlnaHQnKSB7XG4gICAgICB0aGlzLm9uU2lkZSh0aGlzLnNjb3BlLnN0YXRlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2NvcGUuc3RhdGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICB0aGlzLm9uSGlkZGVuKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNjb3BlLnN0YXRlID09PSAnb3ZlcmxheS1sZWZ0JyAgfHwgdGhpcy5zY29wZS5zdGF0ZSA9PT0gJ292ZXJsYXktcmlnaHQnKSB7XG4gICAgICB0aGlzLm9uT3ZlcmxheSh0aGlzLnNjb3BlLnN0YXRlKTtcbiAgICB9XG4gICAgdGhpcy50b2dnbGVCdXR0b25FdmVudHMudHJpZ2dlcigndG9nZ2xlZCcsIHRoaXMuc2NvcGUuc3RhdGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBpbml0KG9ic2VydmVkQXR0cmlidXRlczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gc3VwZXIuaW5pdChvYnNlcnZlZEF0dHJpYnV0ZXMpXG4gICAgLnRoZW4oKHZpZXcpID0+IHtcbiAgICAgIHJldHVybiB2aWV3O1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIGJlZm9yZUJpbmQoKSB7XG4gICAgdGhpcy5kZWJ1ZygnYmVmb3JlQmluZCcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIGFmdGVyQmluZCgpIHtcbiAgICB0aGlzLmRlYnVnKCdhZnRlckJpbmQnLCB0aGlzLnNjb3BlKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2UoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXF1aXJlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGVOYW1lOiBzdHJpbmcsIG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnksIG5hbWVzcGFjZTogc3RyaW5nIHwgbnVsbCkge1xuICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGVOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIG5hbWVzcGFjZSk7XG4gICAgaWYgKGF0dHJpYnV0ZU5hbWUgPT09ICdjb250YWluZXJTZWxlY3RvcicpIHtcbiAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlY29uc3RydWN0b3JcbiAgcHJvdGVjdGVkIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdGVtcGxhdGUoKSB7XG4gICAgLy8gT25seSBzZXQgdGhlIGNvbXBvbmVudCB0ZW1wbGF0ZSBpZiB0aGVyZSBubyBjaGlsZHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgdGhpcy5kZWJ1ZygnRG8gbm90IHVzZSB0ZW1wbGF0ZSwgYmVjYXVzZSBlbGVtZW50IGhhcyBjaGlsZCBub2RlcycpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gcHVnVGVtcGxhdGUodGhpcy5zY29wZSk7XG4gICAgICB0aGlzLmRlYnVnKCdVc2UgdGVtcGxhdGUnLCB0ZW1wbGF0ZSk7XG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCI7IiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEZWJ1ZyxcbiAgRXZlbnREaXNwYXRjaGVyLFxufSBmcm9tICdAcmliYWpzL2NvcmUnO1xuXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9iczQtdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQuaHRtbCc7XG5cbnR5cGUgU3RhdGUgPSAndW5kZWZpbmVkJyB8ICdvdmVybGF5LWxlZnQnIHwgJ292ZXJsYXktcmlnaHQnIHwgJ3NpZGUtbGVmdCcgfCAnc2lkZS1yaWdodCcgfCAnaGlkZGVuJztcblxuaW50ZXJmYWNlIElTY29wZSB7XG4gIHRhcmdldElkPzogc3RyaW5nO1xuICB0b2dnbGU6IEJzNFRvZ2dsZUJ1dHRvbkNvbXBvbmVudFsndG9nZ2xlJ107XG4gIHN0YXRlOiBTdGF0ZTtcbiAgaXNDbG9zZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBCczRUb2dnbGVCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHB1YmxpYyBzdGF0aWMgdGFnTmFtZTogc3RyaW5nID0gJ2JzNC10b2dnbGUtYnV0dG9uJztcblxuICBwcm90ZWN0ZWQgYXV0b2JpbmQgPSB0cnVlO1xuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbJ3RhcmdldC1pZCddO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlYnVnID0gRGVidWcoJ2NvbXBvbmVudDonICsgQnM0VG9nZ2xlQnV0dG9uQ29tcG9uZW50LnRhZ05hbWUpO1xuXG4gIHByb3RlY3RlZCBldmVudERpc3BhdGNoZXIgPSBuZXcgRXZlbnREaXNwYXRjaGVyKCdiczQtdG9nZ2xlLWJ1dHRvbicpO1xuXG4gIHByb3RlY3RlZCBzY29wZTogSVNjb3BlID0ge1xuICAgIHRhcmdldElkOiB1bmRlZmluZWQsXG4gICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZSxcbiAgICBzdGF0ZTogJ3VuZGVmaW5lZCcsXG4gICAgaXNDbG9zZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ/OiBIVE1MRWxlbWVudCkge1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIHRoaXMuZGVidWcoJ2NvbnN0cnVjdG9yJywgdGhpcyk7XG4gICAgdGhpcy5pbml0KEJzNFRvZ2dsZUJ1dHRvbkNvbXBvbmVudC5vYnNlcnZlZEF0dHJpYnV0ZXMpO1xuICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLm9uKCd0b2dnbGVkJywgKHN0YXRlOiBTdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5zY29wZS5zdGF0ZSA9IHN0YXRlO1xuICAgICAgdGhpcy5zY29wZS5pc0Nsb3NlZCA9IHN0YXRlID09PSAnaGlkZGVuJztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoKSB7XG4gICAgdGhpcy5kZWJ1ZygndG9nZ2xlJyk7XG4gICAgdGhpcy5ldmVudERpc3BhdGNoZXIudHJpZ2dlcigndG9nZ2xlJywgdGhpcy5zY29wZS50YXJnZXRJZCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgaW5pdChvYnNlcnZlZEF0dHJpYnV0ZXM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHN1cGVyLmluaXQob2JzZXJ2ZWRBdHRyaWJ1dGVzKVxuICAgIC50aGVuKCh2aWV3KSA9PiB7XG4gICAgICByZXR1cm4gdmlldztcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBiZWZvcmVCaW5kKCkge1xuICAgIHRoaXMuZGVidWcoJ2JlZm9yZUJpbmQnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBhZnRlckJpbmQoKSB7XG4gICAgdGhpcy5kZWJ1ZygnYWZ0ZXJCaW5kJywgdGhpcy5zY29wZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVxdWlyZWRBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbJ3RhcmdldElkJ107XG4gIH1cblxuICBwcm90ZWN0ZWQgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZU5hbWU6IHN0cmluZywgb2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSwgbmFtZXNwYWNlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZU5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgbmFtZXNwYWNlKTtcbiAgfVxuXG4gIC8vIGRlY29uc3RydWN0b3JcbiAgcHJvdGVjdGVkIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdGVtcGxhdGUoKSB7XG4gICAgLy8gT25seSBzZXQgdGhlIGNvbXBvbmVudCB0ZW1wbGF0ZSBpZiB0aGVyZSBubyBjaGlsZHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgdGhpcy5kZWJ1ZygnRG8gbm90IHVzZSB0ZW1wbGF0ZSwgYmVjYXVzZSBlbGVtZW50IGhhcyBjaGlsZCBub2RlcycpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVidWcoJ1VzZSB0ZW1wbGF0ZScsIHRlbXBsYXRlKTtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vcnYtaWNvbi9ydi1pY29uLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Nob3BpZnktbGlua2xpc3Qvc2hvcGlmeS1saW5rbGlzdC5jb21wb25lbnQnO1xuZXhwb3J0IHsgQnM0U2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vYnM0LXNpZGViYXIvYnM0LXNpZGViYXIuY29tcG9uZW50JztcbmV4cG9ydCB7IEJzNFRvZ2dsZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnM0LXRvZ2dsZS1idXR0b24vYnM0LXRvZ2dsZS1idXR0b24uY29tcG9uZW50JztcbiIsImltcG9ydCBEZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQHJpYmFqcy9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHB1YmxpYyBzdGF0aWMgdGFnTmFtZTogc3RyaW5nID0gJ3J2LWljb24nO1xuXG4gIHByb3RlY3RlZCBkZWJ1ZyA9IERlYnVnKCdjb21wb25lbnQ6JyArIEljb25Db21wb25lbnQudGFnTmFtZSk7XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFsnc2l6ZScsICd3aWR0aCcsICdoZWlnaHQnLCAnbmFtZScsICdzcmMnLCAnY29sb3InLCAnZGlyZWN0aW9uJ107XG4gIH1cblxuICBwcm90ZWN0ZWQgc2NvcGU6IGFueSA9IHt9O1xuXG4gIHByb3RlY3RlZCBhdXRvYmluZCA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCAkZWw6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudD86IEhUTUxFbGVtZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gICAgdGhpcy4kZWwgPSAkKHRoaXMuZWwpO1xuICAgIHRoaXMuJGVsXG4gICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgIC5hdHRyKCdyb2xlJywgJ2ltZycpXG4gICAgLmFkZENsYXNzKCdpY29uc2V0Jyk7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCB2YWx1ZXNcbiAgICAvLyB0aGlzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygnc2l6ZScsIG51bGwsIDMyLCBudWxsKTtcbiAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygnZGlyZWN0aW9uJywgbnVsbCwgJ3RvcCcsIG51bGwpO1xuXG4gICAgdGhpcy5pbml0KEljb25Db21wb25lbnQub2JzZXJ2ZWRBdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIHB1YmxpYyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZTogc3RyaW5nLCBvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55LCBuYW1lc3BhY2U6IHN0cmluZyB8IG51bGwpIHtcbiAgICB0aGlzLmRlYnVnKCdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snLCBuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIG5hbWVzcGFjZSk7XG4gICAgLy8gaW5qZWN0cyB0aGUgY2hhbmdlZCBhdHRyaWJ1dGVzIHRvIHNjb3BlXG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgbmFtZXNwYWNlKTtcblxuICAgIGlmIChuYW1lID09PSAnc3JjJykge1xuICAgICAgdGhpcy4kZWxcbiAgICAgIC5sb2FkKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSA9PT0gJ2NvbG9yJykge1xuICAgICAgdGhpcy4kZWxcbiAgICAgIC5jc3Moe2NvbG9yOiBuZXdWYWx1ZX0pXG4gICAgICAucmVtb3ZlQ2xhc3MgKChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiAoY2xhc3NOYW1lLm1hdGNoICgvKF58XFxzKWNvbG9yLVxcUysvZykgfHwgW10pLmpvaW4oJyAnKTtcbiAgICAgIH0pXG4gICAgICAuYWRkQ2xhc3MoYGNvbG9yLSR7bmV3VmFsdWV9YCk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgPT09ICdzaXplJykge1xuICAgICAgY29uc3Qgc2l6ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5kZWJ1Zygnc2V0IHNpemUnLCB0aGlzLiRlbCk7XG4gICAgICB0aGlzLiRlbFxuICAgICAgLmNzcyh7aGVpZ2h0OiBzaXplLCB3aWR0aDogc2l6ZX0pXG4gICAgICAucmVtb3ZlQ2xhc3MoKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIChjbGFzc05hbWUubWF0Y2ggKC8oXnxcXHMpc2l6ZS1cXFMrL2cpIHx8IFtdKS5qb2luKCcgJyk7XG4gICAgICB9KVxuICAgICAgLmFkZENsYXNzKGBzaXplLSR7c2l6ZX1gKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSA9PT0gJ3dpZHRoJykge1xuICAgICAgY29uc3Qgd2lkdGggPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuZGVidWcoJ3NldCB3aWR0aCcsIHRoaXMuJGVsKTtcbiAgICAgIHRoaXMuJGVsXG4gICAgICAuY3NzKHt3aWR0aH0pXG4gICAgICAucmVtb3ZlQ2xhc3MoKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIChjbGFzc05hbWUubWF0Y2ggKC8oXnxcXHMpd2lkdGgtXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xuICAgICAgfSlcbiAgICAgIC5hZGRDbGFzcyhgd2lkdGgtJHt3aWR0aH1gKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSA9PT0gJ2hlaWdodCcpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5kZWJ1Zygnc2V0IGhlaWdodCcsIHRoaXMuJGVsKTtcbiAgICAgIHRoaXMuJGVsXG4gICAgICAuY3NzKHtoZWlnaHR9KVxuICAgICAgLnJlbW92ZUNsYXNzKChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiAoY2xhc3NOYW1lLm1hdGNoICgvKF58XFxzKWhlaWdodC1cXFMrL2cpIHx8IFtdKS5qb2luKCcgJyk7XG4gICAgICB9KVxuICAgICAgLmFkZENsYXNzKGBoZWlnaHQtJHtoZWlnaHR9YCk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgPT09ICdkaXJlY3Rpb24nKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBuZXdWYWx1ZTtcbiAgICAgIGxldCBjbGFzc1N0cmluZyA9IGBkaXJlY3Rpb24tJHtkaXJlY3Rpb259YDtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0JyApIHtcbiAgICAgICAgY2xhc3NTdHJpbmcgKz0gJyByb3RhdGUtMjcwJztcbiAgICAgIH0gZWxzZSBpZiAoIGRpcmVjdGlvbiA9PT0gJ2xlZnQtdG9wJyB8fCBkaXJlY3Rpb24gPT09ICdsZWZ0LXVwJyB8fCBkaXJlY3Rpb24gPT09ICd0b3AtbGVmdCcgfHwgZGlyZWN0aW9uID09PSAndXAtbGVmdCcgKSB7XG4gICAgICAgIGNsYXNzU3RyaW5nICs9ICcgcm90YXRlLTMxNScgO1xuICAgICAgfSBlbHNlIGlmICggZGlyZWN0aW9uID09PSAndG9wJyB8fCBkaXJlY3Rpb24gPT09ICd1cCcgKSB7XG4gICAgICAgIGNsYXNzU3RyaW5nICs9ICcgcm90YXRlLTAnO1xuICAgICAgfSBlbHNlIGlmICggZGlyZWN0aW9uID09PSAndG9wLXJpZ2h0JyB8fCBkaXJlY3Rpb24gPT09ICd1cC1yaWdodCcgfHwgZGlyZWN0aW9uID09PSAncmlnaHQtdG9wJyB8fCBkaXJlY3Rpb24gPT09ICdyaWdodC11cCcpIHtcbiAgICAgICAgY2xhc3NTdHJpbmcgKz0gJyByb3RhdGUtNDUnO1xuICAgICAgfSBlbHNlIGlmICggZGlyZWN0aW9uID09PSAncmlnaHQnICkge1xuICAgICAgICBjbGFzc1N0cmluZyArPSAnIHJvdGF0ZS05MCc7XG4gICAgICB9IGVsc2UgaWYgKCBkaXJlY3Rpb24gPT09ICdyaWdodC1ib3R0b20nIHx8IGRpcmVjdGlvbiA9PT0gJ3JpZ2h0LWRvd24nIHx8IGRpcmVjdGlvbiA9PT0gJ2JvdHRvbS1yaWdodCcgfHwgZGlyZWN0aW9uID09PSAnZG93bi1yaWdodCcgKSB7XG4gICAgICAgIGNsYXNzU3RyaW5nICs9ICcgcm90YXRlLTEzNSc7XG4gICAgICB9IGVsc2UgaWYgKCBkaXJlY3Rpb24gPT09ICdib3R0b20nIHx8IGRpcmVjdGlvbiA9PT0gJ2Rvd24nICkge1xuICAgICAgICBjbGFzc1N0cmluZyArPSAnIHJvdGF0ZS0xODAnO1xuICAgICAgfSBlbHNlIGlmICggZGlyZWN0aW9uID09PSAnbGVmdC1ib3R0b20nIHx8IGRpcmVjdGlvbiA9PT0gJ2xlZnQtZG93bicgfHwgZGlyZWN0aW9uID09PSAnYm90dG9tLWxlZnQnIHx8IGRpcmVjdGlvbiA9PT0gJ2Rvd24tbGVmdCcgKSB7XG4gICAgICAgIGNsYXNzU3RyaW5nICs9ICcgcm90YXRlLTIyNSc7XG4gICAgICB9XG4gICAgICB0aGlzLiRlbFxuICAgICAgLmNzcyh7aGVpZ2h0OiBuZXdWYWx1ZSwgd2lkdGg6IG5ld1ZhbHVlfSlcbiAgICAgIC5yZW1vdmVDbGFzcygoaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gKGNsYXNzTmFtZS5tYXRjaCAoLyhefFxccylkaXJlY3Rpb24tXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xuICAgICAgfSlcbiAgICAgIC5yZW1vdmVDbGFzcygoaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gKGNsYXNzTmFtZS5tYXRjaCAoLyhefFxccylyb3RhdGUtXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xuICAgICAgfSlcbiAgICAgIC5hZGRDbGFzcyhjbGFzc1N0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1uYXYgcnYtY2xhc3M9bGlua2xpc3QuaGFuZGxlIHJ2LWNsYXNzLW5hdi1waWxscz1waWxscyBydi1jbGFzcy1mbGV4LWNvbHVtbj12ZXJ0aWNhbCBydi1jbGFzcy1mbGV4LXJvdz1cXFwidmVydGljYWwgfCBub3RcXFwiPiA8ZGl2IGNsYXNzPW5hdi1pdGVtIHJ2LWVhY2gtbGluaz1saW5rbGlzdC5saW5rcz4gPGEgY2xhc3M9bmF2LWxpbmsgcnYtY2xhc3MtYWN0aXZlPWxpbmsuYWN0aXZlIHJ2LXJvdXRlLWNsYXNzLWFjdGl2ZT1saW5rLnVybCBydi1yb3V0ZT1saW5rLnVybCBydi1ocmVmPWxpbmsudXJsPiA8c3BhbiBydi1pMThuLXRleHQ9XFxcImxpbmsudGl0bGUgfCBoYW5kbGVpemUgfCBwcmVwZW5kICdtZW51cy4nXFxcIj57bGluay50aXRsZX08L3NwYW4+IDwvYT4gPGRpdiBjbGFzcz1uYXYtaXRlbSBydi1lYWNoLXN1Ymxpbms9bGluay5saW5rcz4gPGEgY2xhc3M9bmF2LWxpbmsgcnYtY2xhc3MtYWN0aXZlPXN1YmxpbmsuYWN0aXZlIHJ2LXJvdXRlLWNsYXNzLWFjdGl2ZT1saW5rLnVybCBydi1yb3V0ZT1zdWJsaW5rLnVybCBydi1ocmVmPXN1YmxpbmsudXJsPiA8c3BhbiBydi1pMThuLXRleHQ9XFxcInN1YmxpbmsudGl0bGUgfCBoYW5kbGVpemUgfCBwcmVwZW5kICdtZW51cy4nXFxcIj57c3VibGluay50aXRsZX08L3NwYW4+IDwvYT4gPC9kaXY+IDwvZGl2PiA8L25hdj5cIjsiLCJpbXBvcnQgRGVidWcgZnJvbSAnZGVidWcnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQHJpYmFqcy9jb3JlJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3Nob3BpZnktbGlua2xpc3QuY29tcG9uZW50Lmh0bWwnO1xuXG4vKipcbiAqIHNob3BpZnktZmlsdGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBTaG9waWZ5TGlua2xpc3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHB1YmxpYyBzdGF0aWMgdGFnTmFtZTogc3RyaW5nID0gJ3Nob3BpZnktbGlua2xpc3QnO1xuXG4gIHByb3RlY3RlZCBkZWJ1ZyA9IERlYnVnKCdjb21wb25lbnQ6JyArIFNob3BpZnlMaW5rbGlzdENvbXBvbmVudC50YWdOYW1lKTtcblxuICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gWyduYW1lJywgJ2xpbmtsaXN0JywgJ3BpbGxzJywgJ3ZlcnRpY2FsJ107XG4gIH1cblxuICBwcm90ZWN0ZWQgc2NvcGU6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ/OiBIVE1MRWxlbWVudCkge1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIHRoaXMuaW5pdChTaG9waWZ5TGlua2xpc3RDb21wb25lbnQub2JzZXJ2ZWRBdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIHB1YmxpYyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZTogc3RyaW5nLCBvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55LCBuYW1lc3BhY2U6IHN0cmluZyB8IG51bGwpIHtcbiAgICAvLyBpbmplY3RzIHRoZSBjaGFuZ2VkIGF0dHJpYnV0ZXMgdG8gc2NvcGVcbiAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBuYW1lc3BhY2UpO1xuXG4gICAgLy8gc2V0IGxpbmtsaXN0IGJ5IG5hbWVcbiAgICBpZiAobmFtZSA9PT0gJ25hbWUnKSB7XG4gICAgICB0aGlzLnNjb3BlLmxpbmtsaXN0ID0gd2luZG93Lm1vZGVsLnN5c3RlbS5saW5rbGlzdHNbbmV3VmFsdWVdO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZXF1aXJlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFsnbGlua2xpc3QnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmx5IHNldCB0aGUgY29tcG9uZW50IHRlbXBsYXRlIGlmIHRoZXJlIG5vIGNoaWxkcyBhbHJlYWR5XG4gICAqL1xuICBwcm90ZWN0ZWQgdGVtcGxhdGUoKSB7XG4gICAgaWYgKHRoaXMuZWwuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgUmliYSxcbiAgSlF1ZXJ5LFxuICBjb3JlTW9kdWxlLFxuICBFdmVudERpc3BhdGNoZXIsXG59IGZyb20gJ0ByaWJhanMvY29yZSc7XG5pbXBvcnQgc2hvcGlmeU1vZHVsZSBmcm9tICdAcmliYWpzL3Nob3BpZnknO1xuaW1wb3J0IHJvdXRlck1vZHVsZSBmcm9tICdAcmliYWpzL3JvdXRlcic7XG4vLyBpbXBvcnQgeyBpMThuTW9kdWxlIH0gZnJvbSAnQHJpYmFqcy9pMThuJztcbmltcG9ydCB7IGJzNE1vZHVsZSB9IGZyb20gJ0ByaWJhanMvYnM0Jztcbi8vIGltcG9ydCB7IExvY2FsZXNTZXJ2aWNlIH0gZnJvbSAnQHJpYmFqcy9zaG9waWZ5LXRkYSc7XG5cbmltcG9ydCAqIGFzIEN1c3RvbUNvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzJztcblxuaW1wb3J0ICogYXMgUHJpc20gZnJvbSAncHJpc21qcyc7XG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXInO1xuaW1wb3J0ICdwcmlzbWpzL3BsdWdpbnMvY29weS10by1jbGlwYm9hcmQvcHJpc20tY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY3NzJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHQnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YSc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1tYXJrdXAnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdCc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1zYXNzJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNjc3MnO1xuXG5leHBvcnQgY2xhc3MgTWFpbiB7XG5cbiAgcHJpdmF0ZSByaWJhID0gbmV3IFJpYmEoKTtcblxuICBwcml2YXRlIGRpc3BhdGNoZXIgPSBuZXcgRXZlbnREaXNwYXRjaGVyKCdtYWluJyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yaWJhLm1vZHVsZS5yZWdpc3QoY29yZU1vZHVsZSk7XG4gICAgdGhpcy5yaWJhLm1vZHVsZS5yZWdpc3Qocm91dGVyTW9kdWxlKTtcbiAgICAvLyB0aGlzLnJpYmEubW9kdWxlLnJlZ2lzdChzaG9waWZ5TW9kdWxlKTtcbiAgICAvLyB0aGlzLnJpYmEubW9kdWxlLnJlZ2lzdChpMThuTW9kdWxlKHRoaXMubG9jYWxlc1NlcnZpY2UpKTtcbiAgICB0aGlzLnJpYmEubW9kdWxlLnJlZ2lzdChiczRNb2R1bGUpO1xuXG4gICAgLy8gUmVnaXN0IGN1c3RvbSBjb21wb25lbnRzXG4gICAgdGhpcy5yaWJhLm1vZHVsZS5yZWdpc3Qoe1xuICAgICAgY29tcG9uZW50czogQ3VzdG9tQ29tcG9uZW50cyxcbiAgICAgIC8vIGJpbmRlcnM6IHsuLi5jdXN0b21CaW5kZXJzfSxcbiAgICB9KTtcblxuICAgIHRoaXMuZGlzcGF0Y2hlci5vbignbmV3UGFnZVJlYWR5JywgKCkgPT4ge1xuICAgICAgUHJpc20uaGlnaGxpZ2h0QWxsKCk7XG4gICAgfSk7XG5cbiAgICAvLyB3aW5kb3cubW9kZWwuc3lzdGVtLnNob3BpZnkgPSAod2luZG93IGFzIGFueSkuU2hvcGlmeTtcbiAgICB0aGlzLnJpYmEuYmluZChKUXVlcnkoJ2JvZHknKVswXSwgd2luZG93Lm1vZGVsKTtcbiAgfVxufVxuXG5KUXVlcnkoKCQ6IEpRdWVyeVN0YXRpYykgPT4ge1xuICBjb25zdCBtYWluID0gbmV3IE1haW4oKTtcbn0pO1xuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==