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

/***/ "../riba/packages/core/src/adapter.ts":
/*!********************************************!*\
  !*** ../riba/packages/core/src/adapter.ts ***!
  \********************************************/
/*! exports provided: Adapter, adapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adapter", function() { return Adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);







var Adapter =
/*#__PURE__*/
function () {
  function Adapter() {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Adapter);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, "counter", 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, "weakmap", {});
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Adapter, [{
    key: "weakReference",
    value: function weakReference(obj) {
      if (!obj.hasOwnProperty('__rv')) {
        var id = this.counter++;

        _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, '__rv', {
          value: id
        });
      }

      if (!this.weakmap[obj.__rv]) {
        this.weakmap[obj.__rv] = {
          callbacks: {}
        };
      }

      return this.weakmap[obj.__rv];
    }
  }, {
    key: "cleanupWeakReference",
    value: function cleanupWeakReference(ref, id) {
      if (!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(ref.callbacks).length) {
        if (!(ref.pointers && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(ref.pointers).length)) {
          delete this.weakmap[id];
        }
      }
    }
  }, {
    key: "stubFunction",
    value: function stubFunction(obj, fn) {
      var original = obj[fn];
      var map = this.weakReference(obj);
      var weakmap = this.weakmap;

      obj[fn] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var response = original.apply(obj, args);

        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(map.pointers).forEach(function (r) {
          var k = map.pointers[r];

          if (weakmap[r]) {
            if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(weakmap[r].callbacks[k])) {
              weakmap[r].callbacks[k].forEach(function (callback) {
                callback.sync();
              });
            }
          }
        });

        return response;
      };
    }
  }, {
    key: "observeMutations",
    value: function observeMutations(obj, ref, keypath) {
      var _this = this;

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(obj)) {
        var map = this.weakReference(obj);

        if (!map.pointers) {
          map.pointers = {};
          Adapter.ARRAY_METHODS.forEach(function (fn) {
            _this.stubFunction(obj, fn);
          });
        }

        if (!map.pointers[ref]) {
          map.pointers[ref] = [];
        }

        if (map.pointers[ref].indexOf(keypath) === -1) {
          map.pointers[ref].push(keypath);
        }
      }
    }
  }, {
    key: "unobserveMutations",
    value: function unobserveMutations(obj, ref, keypath) {
      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(obj) && obj.__rv != null) {
        var map = this.weakmap[obj.__rv];

        if (map) {
          var pointers = map.pointers[ref];

          if (pointers) {
            var idx = pointers.indexOf(keypath);

            if (idx > -1) {
              pointers.splice(idx, 1);
            }

            if (!pointers.length) {
              delete map.pointers[ref];
            }

            this.cleanupWeakReference(map, obj.__rv);
          }
        }
      }
    }
  }, {
    key: "observe",
    value: function observe(obj, keypath, callback) {
      var _this2 = this;

      var value;
      var callbacks = this.weakReference(obj).callbacks;

      if (!callbacks[keypath]) {
        callbacks[keypath] = [];

        var desc = _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(obj, keypath);

        if (!desc || !(desc.get || desc.set || !desc.configurable)) {
          value = obj[keypath];

          _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, keypath, {
            enumerable: true,
            get: function get() {
              return value;
            },
            set: function set(newValue) {
              if (newValue !== value) {
                _this2.unobserveMutations(value, obj.__rv, keypath);

                value = newValue;
                var map = _this2.weakmap[obj.__rv];

                if (map) {
                  var _callbacks = map.callbacks[keypath];

                  if (_callbacks) {
                    _callbacks.forEach(function (cb) {
                      cb.sync();
                    });
                  }

                  _this2.observeMutations(newValue, obj.__rv, keypath);
                }
              }
            }
          });
        }
      }

      if (callbacks[keypath].indexOf(callback) === -1) {
        callbacks[keypath].push(callback);
      }

      this.observeMutations(obj[keypath], obj.__rv, keypath);
    }
  }, {
    key: "unobserve",
    value: function unobserve(obj, keypath, callback) {
      var map = this.weakmap[obj.__rv];

      if (map) {
        var callbacks = map.callbacks[keypath];

        if (callbacks) {
          var idx = callbacks.indexOf(callback);

          if (idx > -1) {
            callbacks.splice(idx, 1);

            if (!callbacks.length) {
              delete map.callbacks[keypath];
              this.unobserveMutations(obj[keypath], obj.__rv, keypath);
            }
          }

          this.cleanupWeakReference(map, obj.__rv);
        }
      }
    }
  }, {
    key: "get",
    value: function get(obj, keypath) {
      return obj[keypath];
    }
  }, {
    key: "set",
    value: function set(obj, keypath, value) {
      obj[keypath] = value;
    }
  }]);

  return Adapter;
}();

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Adapter, "ARRAY_METHODS", ['push', 'pop', 'shift', 'unshift', 'sort', 'reverse', 'splice']);

var adapter = new Adapter();


/***/ }),

/***/ "../riba/packages/core/src/binders/animate-classname.binder.ts":
/*!*********************************************************************!*\
  !*** ../riba/packages/core/src/binders/animate-classname.binder.ts ***!
  \*********************************************************************/
/*! exports provided: animateStarBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateStarBinder", function() { return animateStarBinder; });
/* harmony import */ var _vendors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendors */ "../riba/packages/core/src/vendors/index.ts");


/**
 * animate-{class}
 * Add / remove animation class with start and done affix
 */
var animateStarBinder = {
  name: 'animate-*',
  function: true,
  priority: 1000,
  bind: function bind(el) {
    var $el = Object(_vendors__WEBPACK_IMPORTED_MODULE_0__["JQuery"])(el);
    var animateClassName = this.args[0];
    $el.addClass(animateClassName);
  },
  unbind: function unbind(el) {//
  },
  routine: function routine(el, start) {
    var $el = Object(_vendors__WEBPACK_IMPORTED_MODULE_0__["JQuery"])(el);
    var animateClassName = this.args[0];

    if (start) {
      $el.addClass(animateClassName + '-start').removeClass(animateClassName + '-done');
    } else {
      $el.removeClass(animateClassName + '-start').addClass(animateClassName + '-done');
    }
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/assign.binder.ts":
/*!**********************************************************!*\
  !*** ../riba/packages/core/src/binders/assign.binder.ts ***!
  \**********************************************************/
/*! exports provided: assignBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignBinder", function() { return assignBinder; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/utils */ "../riba/packages/core/src/services/utils.ts");


/**
 * Assign a value in your model, value must be a object
 * experimental, please TESTME
 */
var assignBinder = {
  name: 'assign',
  routine: function routine(el, obj) {
    _services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].extend(false, this.view.models, obj);
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/attribute.binder.ts":
/*!*************************************************************!*\
  !*** ../riba/packages/core/src/binders/attribute.binder.ts ***!
  \*************************************************************/
/*! exports provided: starBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "starBinder", function() { return starBinder; });
/**
 * Event handler to liste for publish binder event for two-way-binding in web components
 */
var publishBinderChangeEventHandler = function publishBinderChangeEventHandler(event) {
  var data = event.detail;
  var oldValue = this.observer.value();

  if (oldValue !== data.newValue) {
    // TODO this overwrites also the _rv counter
    this.observer.setValue(data.newValue);
  }
};
/**
 * Sets the attribute on the element. If no binder above is matched it will fall
 * back to using this binder.
 */


var starBinder = {
  name: '*',
  bind: function bind(el) {
    // Listen for changes from web component
    el.addEventListener('publish-binder-change:' + this.type, publishBinderChangeEventHandler.bind(this));
  },
  unbind: function unbind(el) {
    delete this.customData;
    this.el.removeEventListener('publish-binder-change', publishBinderChangeEventHandler.bind(this));
  },
  routine: function routine(el, newValue) {
    if (!this.type) {
      throw new Error('Can\'t set attribute of ' + this.type);
    }

    var oldValue = el.getAttribute(this.type);

    if (newValue != null) {
      if (oldValue !== newValue) {
        el.setAttribute(this.type, newValue);
      }
    } else {
      el.removeAttribute(this.type);
    }

    if (oldValue !== newValue) {
      // Fallback for MutationObserver and attributeChangedCallback: Trigger event to catch them in web components to call the attributeChangedCallback method
      el.dispatchEvent(new CustomEvent('binder-changed', {
        detail: {
          name: this.type,
          oldValue: oldValue,
          newValue: newValue,
          namespace: null // TODO

        }
      }));
    }
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/block.binder.ts":
/*!*********************************************************!*\
  !*** ../riba/packages/core/src/binders/block.binder.ts ***!
  \*********************************************************/
/*! exports provided: blockBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockBinder", function() { return blockBinder; });
/**
 * Blocks the binding for the current element and his childs
 */
var blockBinder = {
  name: 'block',
  block: true,
  routine: function routine(el) {
    /**/
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/checked.binder.ts":
/*!***********************************************************!*\
  !*** ../riba/packages/core/src/binders/checked.binder.ts ***!
  \***********************************************************/
/*! exports provided: checkedBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkedBinder", function() { return checkedBinder; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/utils */ "../riba/packages/core/src/services/utils.ts");

/**
 * checked
 * Checks a checkbox or radio input when the value is true. Also sets the model
 * property when the input is checked or unchecked (two-way binder).
 */

var checkedBinder = {
  name: 'checked',
  publishes: true,
  priority: 2000,
  bind: function bind(el) {
    var self = this;
    this.customData = {};

    if (!this.customData.callback) {
      this.customData.callback = function () {
        self.publish();
      };
    }

    el.addEventListener('change', this.customData.callback);
  },
  unbind: function unbind(el) {
    el.removeEventListener('change', this.customData.callback);
  },
  routine: function routine(el, value) {
    if (el.type === 'radio') {
      el.checked = _services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getString(el.value) === _services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getString(value);
    } else {
      el.checked = !!value;
    }
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/class-name.binder.ts":
/*!**************************************************************!*\
  !*** ../riba/packages/core/src/binders/class-name.binder.ts ***!
  \**************************************************************/
/*! exports provided: classStarBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classStarBinder", function() { return classStarBinder; });
/**
 * class-*
 * class-[classname]
 *
 * Adds a class (whatever value is in place of [classname]) on the element
 * when the value evaluates to true and removes that class if the value
 * evaluates to false.
 */
var classStarBinder = {
  name: 'class-*',
  routine: function routine(el, value) {
    if (this.args === null) {
      throw new Error('args is null');
    }

    var classList = el.className.split(' ').filter(function (ele) {
      return ele !== '';
    });
    var arg = this.args[0].trim();
    var idx = classList.indexOf(arg);

    if (idx === -1) {
      if (value) {
        el.className += " ".concat(arg);
      }
    } else if (!value) {
      el.className = classList.filter(function (_, i) {
        return i !== idx;
      }).join(' ');
    }
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/class.binder.ts":
/*!*********************************************************!*\
  !*** ../riba/packages/core/src/binders/class.binder.ts ***!
  \*********************************************************/
/*! exports provided: classBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classBinder", function() { return classBinder; });
/* harmony import */ var _vendors_jquery_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendors/jquery.module */ "../riba/packages/core/src/vendors/jquery.module.ts");

/**
 * class
 * Adds the value of the attribute to the class.
 * Instead of `class-[classname]` the classname is setted by the
 * attributes value and not by the star value
 */

var classBinder = {
  name: 'class',
  function: true,
  priority: 1000,
  bind: function bind(el) {
    var $el = Object(_vendors_jquery_module__WEBPACK_IMPORTED_MODULE_0__["JQuery"])(el);
    this.customData = {
      $el: $el,
      staticClasses: $el.attr('class')
    };
  },
  unbind: function unbind(el) {
    delete this.customData;
  },
  routine: function routine(el, newValue) {
    if (newValue) {
      Object(_vendors_jquery_module__WEBPACK_IMPORTED_MODULE_0__["JQuery"])(el).attr('class', this.customData.staticClasses);
      Object(_vendors_jquery_module__WEBPACK_IMPORTED_MODULE_0__["JQuery"])(el).addClass(newValue);
    }
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/disabled.binder.ts":
/*!************************************************************!*\
  !*** ../riba/packages/core/src/binders/disabled.binder.ts ***!
  \************************************************************/
/*! exports provided: disabledBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disabledBinder", function() { return disabledBinder; });
/**
 * Disables the element when value is true (negated version of `enabled` binder).
 */
var disabledBinder = {
  name: 'disabled',
  routine: function routine(el, value) {
    el.disabled = !!value;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/each-item.binder.ts":
/*!*************************************************************!*\
  !*** ../riba/packages/core/src/binders/each-item.binder.ts ***!
  \*************************************************************/
/*! exports provided: eachStarBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eachStarBinder", function() { return eachStarBinder; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view */ "../riba/packages/core/src/view.ts");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/utils */ "../riba/packages/core/src/services/utils.ts");




/**
 * each-*
 * Appends bound instances of the element in place for each item in the array.
 */

var eachStarBinder = {
  name: 'each-*',
  block: true,
  priority: 4000,
  bind: function bind(el) {
    if (!this.marker) {
      this.marker = document.createComment(" riba: ".concat(this.type, " "));
      this.customData = {
        iterated: []
      };

      if (!el.parentNode) {// console.warn('No parent node!');
      } else {
        el.parentNode.insertBefore(this.marker, el);
        el.parentNode.removeChild(el);
      }
    } else {
      this.customData.iterated.forEach(function (view) {
        view.bind();
      });
    }
  },
  unbind: function unbind(el) {
    if (this.customData.iterated) {
      this.customData.iterated.forEach(function (view) {
        view.unbind();
      });
    }
  },
  routine: function routine(el, collection) {
    var _this = this;

    if (this.args === null) {
      throw new Error('args is null');
    }

    var modelName = this.args[0];
    collection = collection || []; // TODO support object keys to iterate over

    if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(collection)) {
      throw new Error('each-' + modelName + ' needs an array to iterate over, but it is');
    } // if index name is seted by `index-property` use this name, otherwise `%[modelName]%`


    var indexProp = el.getAttribute('index-property') || this.getIterationAlias(modelName);
    collection.forEach(function (model, index) {
      var scope = {
        $parent: _this.view.models
      };
      scope[indexProp] = index;
      scope[modelName] = model;
      var view = _this.customData.iterated[index];

      if (!view) {
        var previous;

        if (_this.customData.iterated.length) {
          previous = _this.customData.iterated[_this.customData.iterated.length - 1].els[0];
        } else if (_this.marker) {
          previous = _this.marker;
        } else {
          throw new Error('previous not defined');
        }

        view = _view__WEBPACK_IMPORTED_MODULE_2__["View"].create(_this, scope, previous.nextSibling);

        _this.customData.iterated.push(view);
      } else {
        if (view.models[modelName] !== model) {
          // search for a view that matches the model
          var matchIndex;
          var nextView;

          for (var nextIndex = index + 1; nextIndex < _this.customData.iterated.length; nextIndex++) {
            nextView = _this.customData.iterated[nextIndex];

            if (nextView.models[modelName] === model) {
              matchIndex = nextIndex;
              break;
            }
          }

          if (matchIndex !== undefined) {
            // model is in other position
            // todo: consider avoiding the splice here by setting a flag
            // profile performance before implementing such change
            _this.customData.iterated.splice(matchIndex, 1);

            if (!_this.marker || !_this.marker.parentNode) {
              throw new Error('Marker has no parent node');
            }

            _this.marker.parentNode.insertBefore(nextView.els[0], view.els[0]);

            nextView.models[indexProp] = index;
          } else {
            // new model
            nextView = _view__WEBPACK_IMPORTED_MODULE_2__["View"].create(_this, scope, view.els[0]);
          }

          _this.customData.iterated.splice(index, 0, nextView);
        } else {
          view.models[indexProp] = index;
        }
      }
    });

    if (this.customData.iterated.length > collection.length) {
      _services_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].times(this.customData.iterated.length - collection.length, function () {
        var view = _this.customData.iterated.pop();

        view.unbind();

        if (!_this.marker || !_this.marker.parentNode) {
          throw new Error('Marker has no parent node');
        }

        _this.marker.parentNode.removeChild(view.els[0]);
      });
    }

    if (el.nodeName === 'OPTION' && this.view.bindings) {
      this.view.bindings.forEach(function (binding) {
        if (_this.marker && binding.el === _this.marker.parentNode && binding.type === 'value' && binding.sync) {
          binding.sync();
        }
      });
    }
  },
  update: function update(models) {
    var _this2 = this;

    var data = {}; // TODO: add test and fix if necessary

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(models).forEach(function (key) {
      if (_this2.args === null) {
        throw new Error('args is null');
      }

      if (key !== _this2.args[0]) {
        data[key] = models[key];
      }
    });

    this.customData.iterated.forEach(function (view) {
      view.update(data);
    });
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/enabled.binder.ts":
/*!***********************************************************!*\
  !*** ../riba/packages/core/src/binders/enabled.binder.ts ***!
  \***********************************************************/
/*! exports provided: enabledBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enabledBinder", function() { return enabledBinder; });
/**
 * Enables the element when value is true.
 */
var enabledBinder = {
  name: 'enabled',
  routine: function routine(el, value) {
    el.disabled = !value;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/hide.binder.ts":
/*!********************************************************!*\
  !*** ../riba/packages/core/src/binders/hide.binder.ts ***!
  \********************************************************/
/*! exports provided: hideBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideBinder", function() { return hideBinder; });
/**
 * Hides the element when value is true (negated version of `show` binder).
 */
var hideBinder = {
  name: 'hide',
  routine: function routine(el, value) {
    el.style.display = value ? 'none' : '';

    if (value) {
      el.setAttribute('hidden', 'true');
    } else {
      el.removeAttribute('hidden');
    }
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/html.binder.ts":
/*!********************************************************!*\
  !*** ../riba/packages/core/src/binders/html.binder.ts ***!
  \********************************************************/
/*! exports provided: htmlBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlBinder", function() { return htmlBinder; });
/**
 * Sets the element's text value.
 */
var htmlBinder = {
  name: 'html',
  routine: function routine(el, value) {
    el.innerHTML = value != null ? value : '';
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/if.binder.ts":
/*!******************************************************!*\
  !*** ../riba/packages/core/src/binders/if.binder.ts ***!
  \******************************************************/
/*! exports provided: ifBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifBinder", function() { return ifBinder; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "../riba/packages/core/src/view.ts");

/**
 * if
 * Inserts and binds the element and it's child nodes into the DOM when true.
 */

var ifBinder = {
  name: 'if',
  block: true,
  priority: 4000,
  bind: function bind(el) {
    this.customData = {};

    if (!this.marker) {
      this.marker = document.createComment(' riba: ' + this.type + ' ' + this.keypath + ' ');
      this.customData.attached = false;

      if (!el.parentNode) {// console.warn('Element has no parent node');
      } else {
        el.parentNode.insertBefore(this.marker, el);
        el.parentNode.removeChild(el);
      }
    } else if (this.customData.bound === false && this.customData.nested) {
      this.customData.nested.bind();
    }

    this.customData.bound = true;
  },
  unbind: function unbind() {
    if (this.customData.nested) {
      this.customData.nested.unbind();
      this.customData.bound = false;
    }
  },
  routine: function routine(el, value) {
    value = !!value;

    if (value !== this.customData.attached) {
      if (value) {
        if (!this.customData.nested) {
          this.customData.nested = new _view__WEBPACK_IMPORTED_MODULE_0__["View"](el, this.view.models, this.view.options);
          this.customData.nested.bind();
        }

        if (!this.marker || !this.marker.parentNode) {// console.warn('Marker has no parent node');
        } else {
          this.marker.parentNode.insertBefore(el, this.marker.nextSibling);
        }

        this.customData.attached = true;
      } else {
        if (!el.parentNode) {// console.warn('Element has no parent node');
        } else {
          el.parentNode.removeChild(el);
        }

        this.customData.attached = false;
      }
    }
  },
  update: function update(models) {
    if (this.customData.nested) {
      this.customData.nested.update(models);
    }
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/index.ts":
/*!**************************************************!*\
  !*** ../riba/packages/core/src/binders/index.ts ***!
  \**************************************************/
/*! exports provided: animateStarBinder, assignBinder, blockBinder, classBinder, checkedBinder, classStarBinder, cssStarBinder, enabledBinder, disabledBinder, onStarBinder, removeClassBinder, ifBinder, eachStarBinder, htmlBinder, hideBinder, showBinder, textBinder, valueBinder, starBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animate_classname_binder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate-classname.binder */ "../riba/packages/core/src/binders/animate-classname.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animateStarBinder", function() { return _animate_classname_binder__WEBPACK_IMPORTED_MODULE_0__["animateStarBinder"]; });

/* harmony import */ var _assign_binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assign.binder */ "../riba/packages/core/src/binders/assign.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignBinder", function() { return _assign_binder__WEBPACK_IMPORTED_MODULE_1__["assignBinder"]; });

/* harmony import */ var _block_binder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.binder */ "../riba/packages/core/src/binders/block.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blockBinder", function() { return _block_binder__WEBPACK_IMPORTED_MODULE_2__["blockBinder"]; });

/* harmony import */ var _class_binder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class.binder */ "../riba/packages/core/src/binders/class.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classBinder", function() { return _class_binder__WEBPACK_IMPORTED_MODULE_3__["classBinder"]; });

/* harmony import */ var _checked_binder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checked.binder */ "../riba/packages/core/src/binders/checked.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkedBinder", function() { return _checked_binder__WEBPACK_IMPORTED_MODULE_4__["checkedBinder"]; });

/* harmony import */ var _class_name_binder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class-name.binder */ "../riba/packages/core/src/binders/class-name.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classStarBinder", function() { return _class_name_binder__WEBPACK_IMPORTED_MODULE_5__["classStarBinder"]; });

/* harmony import */ var _style_css_property_binder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style-css-property.binder */ "../riba/packages/core/src/binders/style-css-property.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssStarBinder", function() { return _style_css_property_binder__WEBPACK_IMPORTED_MODULE_6__["cssStarBinder"]; });

/* harmony import */ var _enabled_binder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enabled.binder */ "../riba/packages/core/src/binders/enabled.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enabledBinder", function() { return _enabled_binder__WEBPACK_IMPORTED_MODULE_7__["enabledBinder"]; });

/* harmony import */ var _disabled_binder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./disabled.binder */ "../riba/packages/core/src/binders/disabled.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disabledBinder", function() { return _disabled_binder__WEBPACK_IMPORTED_MODULE_8__["disabledBinder"]; });

/* harmony import */ var _on_event_binder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./on-event.binder */ "../riba/packages/core/src/binders/on-event.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onStarBinder", function() { return _on_event_binder__WEBPACK_IMPORTED_MODULE_9__["onStarBinder"]; });

/* harmony import */ var _remove_class_binder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./remove-class.binder */ "../riba/packages/core/src/binders/remove-class.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClassBinder", function() { return _remove_class_binder__WEBPACK_IMPORTED_MODULE_10__["removeClassBinder"]; });

/* harmony import */ var _if_binder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./if.binder */ "../riba/packages/core/src/binders/if.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ifBinder", function() { return _if_binder__WEBPACK_IMPORTED_MODULE_11__["ifBinder"]; });

/* harmony import */ var _each_item_binder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./each-item.binder */ "../riba/packages/core/src/binders/each-item.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eachStarBinder", function() { return _each_item_binder__WEBPACK_IMPORTED_MODULE_12__["eachStarBinder"]; });

/* harmony import */ var _html_binder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./html.binder */ "../riba/packages/core/src/binders/html.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlBinder", function() { return _html_binder__WEBPACK_IMPORTED_MODULE_13__["htmlBinder"]; });

/* harmony import */ var _hide_binder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hide.binder */ "../riba/packages/core/src/binders/hide.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideBinder", function() { return _hide_binder__WEBPACK_IMPORTED_MODULE_14__["hideBinder"]; });

/* harmony import */ var _show_binder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./show.binder */ "../riba/packages/core/src/binders/show.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showBinder", function() { return _show_binder__WEBPACK_IMPORTED_MODULE_15__["showBinder"]; });

/* harmony import */ var _text_binder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./text.binder */ "../riba/packages/core/src/binders/text.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textBinder", function() { return _text_binder__WEBPACK_IMPORTED_MODULE_16__["textBinder"]; });

/* harmony import */ var _value_binder__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./value.binder */ "../riba/packages/core/src/binders/value.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueBinder", function() { return _value_binder__WEBPACK_IMPORTED_MODULE_17__["valueBinder"]; });

/* harmony import */ var _attribute_binder__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./attribute.binder */ "../riba/packages/core/src/binders/attribute.binder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "starBinder", function() { return _attribute_binder__WEBPACK_IMPORTED_MODULE_18__["starBinder"]; });





















/***/ }),

/***/ "../riba/packages/core/src/binders/on-event.binder.ts":
/*!************************************************************!*\
  !*** ../riba/packages/core/src/binders/on-event.binder.ts ***!
  \************************************************************/
/*! exports provided: onStarBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStarBinder", function() { return onStarBinder; });
/* harmony import */ var _vendors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendors */ "../riba/packages/core/src/vendors/index.ts");

/**
 * Binds an event handler on the element.
 */

var onStarBinder = {
  name: 'on-*',
  function: true,
  priority: 1000,
  bind: function bind(el) {
    if (!this.customData) {
      this.customData = {
        handler: null
      };
    }
  },
  unbind: function unbind(el) {
    if (this.customData.handler) {
      if (this.args === null) {
        throw new Error('args is null');
      }

      Object(_vendors__WEBPACK_IMPORTED_MODULE_0__["JQuery"])(el).off(this.args[0], this.customData.handler);
    }
  },
  routine: function routine(el, value) {
    var _this = this;

    if (this.args === null) {
      throw new Error('args is null');
    }

    var eventName = this.args[0];

    if (this.customData.handler) {
      Object(_vendors__WEBPACK_IMPORTED_MODULE_0__["JQuery"])(el).off(eventName, this.customData);
    }

    this.customData.handler = this.eventHandler(value, el);

    try {
      Object(_vendors__WEBPACK_IMPORTED_MODULE_0__["JQuery"])(el).on(eventName, this.customData.handler);
    } catch (error) {
      console.warn(error);
      Object(_vendors__WEBPACK_IMPORTED_MODULE_0__["JQuery"])(el).on(eventName, function (event) {
        _this.customData.handler(event);
      });
    }
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/remove-class.binder.ts":
/*!****************************************************************!*\
  !*** ../riba/packages/core/src/binders/remove-class.binder.ts ***!
  \****************************************************************/
/*! exports provided: removeClassBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClassBinder", function() { return removeClassBinder; });
/* harmony import */ var _vendors_jquery_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendors/jquery.module */ "../riba/packages/core/src/vendors/jquery.module.ts");

/**
 * remove-class
 */

var removeClassBinder = {
  name: 'remove-class',
  routine: function routine(el, value) {
    var $el = Object(_vendors_jquery_module__WEBPACK_IMPORTED_MODULE_0__["JQuery"])(el);

    if (value) {
      $el.removeClass(value);
    }

    return value;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/show.binder.ts":
/*!********************************************************!*\
  !*** ../riba/packages/core/src/binders/show.binder.ts ***!
  \********************************************************/
/*! exports provided: showBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showBinder", function() { return showBinder; });
/**
 * Shows the element when value is true.
 */
var showBinder = {
  name: 'show',
  routine: function routine(el, value) {
    el.style.display = value ? '' : 'none';

    if (value) {
      el.removeAttribute('hidden');
    } else {
      el.setAttribute('hidden', 'true');
    }
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/style-css-property.binder.ts":
/*!**********************************************************************!*\
  !*** ../riba/packages/core/src/binders/style-css-property.binder.ts ***!
  \**********************************************************************/
/*! exports provided: cssStarBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssStarBinder", function() { return cssStarBinder; });
/**
 * style-*
 * Adds a style to the element.
 *
 * ```html
 * <div rv-style-background-color="'blue'"></div>
 * ```
 */
var cssStarBinder = {
  name: 'style-*',
  routine: function routine(el, value) {
    var propertyName = this.args[0];

    if (value === null || value === undefined || value === '') {
      el.style.removeProperty(propertyName);
    } else {
      el.style[propertyName] = value;
    }
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/text.binder.ts":
/*!********************************************************!*\
  !*** ../riba/packages/core/src/binders/text.binder.ts ***!
  \********************************************************/
/*! exports provided: textBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textBinder", function() { return textBinder; });
/**
 * Sets the element's text value.
 */
var textBinder = {
  name: 'text',
  routine: function routine(el, value) {
    el.textContent = value != null ? value : '';
  }
};

/***/ }),

/***/ "../riba/packages/core/src/binders/value.binder.ts":
/*!*********************************************************!*\
  !*** ../riba/packages/core/src/binders/value.binder.ts ***!
  \*********************************************************/
/*! exports provided: valueBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueBinder", function() { return valueBinder; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendors */ "../riba/packages/core/src/vendors/index.ts");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utils */ "../riba/packages/core/src/services/utils.ts");



var debug = Object(_vendors__WEBPACK_IMPORTED_MODULE_1__["Debug"])('binder:value');

var getData = function getData(el) {
  var customData = {};
  customData.$el = Object(_vendors__WEBPACK_IMPORTED_MODULE_1__["JQuery"])(el);
  customData.type = customData.$el.prop('type');
  customData.tagName = customData.$el.prop('tagName');
  customData.contenteditable = customData.$el.attr('contenteditable') ? true : false;
  customData.isRadio = customData.tagName === 'INPUT' && customData.type === 'radio';
  return customData;
};
/**
 * Sets the element's value. Also sets the model property when the input changes
 * (two-way binder).
 */


var valueBinder = {
  name: 'value',
  publishes: true,
  priority: 3000,
  bind: function bind(el) {
    if (!this.customData) {
      this.customData = getData(el);
    }

    if (!this.customData.isRadio) {
      this.customData.event = el.getAttribute('event-name') || (el.tagName === 'SELECT' ? 'change' : 'input');
      var self = this;

      if (!this.customData.callback) {
        this.customData.callback = function () {
          debug('callback called');
          self.publish();
        };
      }

      if (!this.customData.event) {
        this.customData.event = 'change input keyup paste blur focus';
      }

      Object(_vendors__WEBPACK_IMPORTED_MODULE_1__["JQuery"])(el).on(this.customData.event, this.customData.callback);
    }
  },
  unbind: function unbind(el) {
    Object(_vendors__WEBPACK_IMPORTED_MODULE_1__["JQuery"])(el).off(this.customData.event, this.customData.callback);
  },
  routine: function routine(el, value) {
    var oldValue = this.getValue(el);
    debug('routine value', value);

    if (!this.customData) {
      this.customData = getData(el);
    }

    if (this.customData.isRadio) {
      el.setAttribute('value', value);
    } else {
      if (el.type === 'select-multiple') {
        if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(value)) {
          for (var i = 0; i < el.options.length; i++) {
            var option = el.options[i];
            option.selected = value.indexOf(option.value) > -1;
          } // TODO check if the value was really changed


          el.dispatchEvent(new Event('change'));
        }
      } else if (el.getAttribute('contenteditable')) {
        if (_services_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getString(value) !== oldValue) {
          el.innerHTML = value; // TODO write test for contenteditable

          el.dispatchEvent(new Event('change'));
        }
      } else {
        if (_services_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getString(value) !== oldValue) {
          el.value = value != null ? value : '';
          el.dispatchEvent(new Event('change'));
        }
      }
    }
  },
  getValue: _services_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getInputValue
};

/***/ }),

/***/ "../riba/packages/core/src/binding.ts":
/*!********************************************!*\
  !*** ../riba/packages/core/src/binding.ts ***!
  \********************************************/
/*! exports provided: Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return Binding; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers */ "../riba/packages/core/src/parsers.ts");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observer */ "../riba/packages/core/src/observer.ts");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/utils */ "../riba/packages/core/src/services/utils.ts");
/* harmony import */ var _vendors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendors */ "../riba/packages/core/src/vendors/index.ts");









/**
 *  A single binding between a model attribute and a DOM element.
 */

var Binding =
/*#__PURE__*/
function () {
  /**
   * Name of the binder without the prefix
   */

  /**
   * Arguments parsed from star binders, e.g. on foo-*-* args[0] is the first star, args[1] the second-
   */

  /**
   *
   */

  /**
   * HTML Comment to mark a binding in the DOM
   */

  /**
   * just to have a value where we could store custom data
   */

  /**
   * All information about the binding is passed into the constructor; the
   * containing view, the DOM node, the type of binding, the model object and the
   * keypath at which to listen for changes.
   * @param {*} view
   * @param {*} el
   * @param {*} type
   * @param {*} keypath
   * @param {*} binder
   * @param {*} args The start binders, on `class-*` args[0] wil be the classname.
   * @param {*} formatters
   */
  function Binding(view, el, type, keypath, binder, formatters, identifier) {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Binding);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "value", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "observer", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "view", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "el", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "type", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "binder", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "formatters", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "formatterObservers", {});

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "keypath", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "args", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "model", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "marker", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "customData", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "debug", void 0);

    this.view = view;
    this.el = el;
    this.type = type;
    this.keypath = keypath;
    this.binder = binder;
    this.formatters = formatters;
    this.model = undefined;
    this.customData = {};
    this.debug = Object(_vendors__WEBPACK_IMPORTED_MODULE_8__["Debug"])('riba:Binding');

    if (identifier && type) {
      this.args = this.getStarArguments(identifier, type);
    } else {
      this.args = new Array();
    } // this.debug('constructor', this.args, identifier, type);

  }
  /**
   * Observes the object keypath
   * @param obj
   * @param keypath
   */


  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Binding, [{
    key: "observe",
    value: function observe(obj, keypath, callback) {
      return new _observer__WEBPACK_IMPORTED_MODULE_6__["Observer"](obj, keypath, callback);
    }
  }, {
    key: "parseTarget",
    value: function parseTarget() {
      if (this.keypath) {
        var token = Object(_parsers__WEBPACK_IMPORTED_MODULE_5__["parseType"])(this.keypath);

        if (token.type === _parsers__WEBPACK_IMPORTED_MODULE_5__["PRIMITIVE"]) {
          this.value = token.value;
        } else if (token.type === _parsers__WEBPACK_IMPORTED_MODULE_5__["KEYPATH"]) {
          this.observer = this.observe(this.view.models, this.keypath, this);
          this.model = this.observer.target;
        } else {
          throw new Error("[".concat(this.binder.name, "] Unknown type in token"));
        }
      } else {
        this.value = undefined;
      }
    }
    /**
     * Get the iteration alias, used in the interation binders like `each-*`
     * @param {*} modelName
     * @see https://github.com/mikeric/rivets/blob/master/dist/rivets.js#L26
     * @see https://github.com/mikeric/rivets/blob/master/dist/rivets.js#L1175
     */

  }, {
    key: "getIterationAlias",
    value: function getIterationAlias(modelName) {
      return '%' + modelName + '%';
    }
  }, {
    key: "parseFormatterArguments",
    value: function parseFormatterArguments(args, formatterIndex) {
      var _this = this;

      return args.map(_parsers__WEBPACK_IMPORTED_MODULE_5__["parseType"]).map(function (_ref, ai) {
        var type = _ref.type,
            value = _ref.value;

        if (type === _parsers__WEBPACK_IMPORTED_MODULE_5__["PRIMITIVE"]) {
          var primitiveValue = value;
          return primitiveValue;
        } else if (type === _parsers__WEBPACK_IMPORTED_MODULE_5__["KEYPATH"]) {
          // keypath is string
          var keypath = value;

          if (!_this.formatterObservers[formatterIndex]) {
            _this.formatterObservers[formatterIndex] = {};
          }

          var observer = _this.formatterObservers[formatterIndex][ai];

          if (!observer) {
            observer = _this.observe(_this.view.models, keypath, _this);
            _this.formatterObservers[formatterIndex][ai] = observer;
          }

          return observer.value();
        } else {
          throw new Error("[".concat(_this.binder.name, "] Unknown argument type"));
        }
      });
    }
    /**
     * Applies all the current formatters to the supplied value and returns the
     * formatted value.
     */

  }, {
    key: "formattedValue",
    value: function formattedValue(value) {
      var _this2 = this;

      if (this.formatters === null) {
        throw new Error("[".concat(this.binder.name, " formatters is null"));
      }

      return this.formatters.reduce(function (result, declaration, index) {
        var args = declaration.match(Binding.FORMATTER_ARGS);

        if (args === null) {
          console.warn(new Error("[".concat(_this2.binder.name, "] No args matched with regex \"FORMATTER_ARGS\"!\nvalue: ").concat(value, "\nresult: ").concat(result, "\ndeclaration: ").concat(declaration, "\nindex: ").concat(index, "\n")));
          return result;
        }

        var id = args.shift();

        if (!id) {
          throw new Error("[".concat(_this2.binder.name, "] No formatter id found in args!"));
        }

        if (!_this2.view.options.formatters) {
          throw new Error("[".concat(_this2.binder.name, "] No formatters are defined!"));
        }

        var formatter = _this2.view.options.formatters[id];

        if (!formatter) {
          throw new Error("[".concat(_this2.binder.name, "] No formatters with id \"").concat(id, "\" found!"));
        }

        var processedArgs = _this2.parseFormatterArguments(args, index); // get formatter read funcion


        if (formatter && typeof formatter.read === 'function') {
          result = formatter.read.apply(_this2.model, [result].concat(_babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(processedArgs)));
        }

        return result;
      }, value);
    }
    /**
     * Returns an event handler for the binding around the supplied function.
     * Tihs event Handler is mainly used by the on-* binder
     * @param fn The function to call by the handler
     * @param el The element the event was triggered from
     */

  }, {
    key: "eventHandler",
    value: function eventHandler(fn, el) {
      var _this3 = this;

      var binding = this;
      var handler = binding.view.options.handler;
      return function (ev) {
        if (!handler) {
          throw new Error('No handler defined in binding.view.options.handler');
        }

        handler.call(fn, _this3, ev, binding, el);
      };
    }
    /**
     * Sets the value for the binding. This Basically just runs the binding routine
     * with the supplied value formatted.
     */

  }, {
    key: "set",
    value: function set(value) {
      var _this4 = this;

      if (this.binder === null) {
        console.warn(new Error('Binder is null'), this);
        return;
      }

      value = this.formattedValue(value);

      if (this.binder && typeof this.binder.routine === 'function') {
        // If value is a promise
        if (value && typeof value.then === 'function' && typeof value.catch === 'function') {
          value.then(function (realValue) {
            return _this4.binder.routine.call(_this4, _this4.el, realValue);
          }).catch(function (error) {
            console.error(error);
          });
        } else {
          this.binder.routine.call(this, this.el, value);
        }
      }
    }
    /**
     * Syncs up the view binding with the model.
     */

  }, {
    key: "sync",
    value: function sync() {
      if (this.observer) {
        this.model = this.observer.target;
        this.set(this.observer.value());
      } else {
        this.set(this.value);
      }
    }
    /**
     * Publishes the value currently set on the input element back to the model.
     */

  }, {
    key: "publish",
    value: function publish() {
      var _this5 = this;

      if (this.observer) {
        if (this.formatters === null) {
          throw new Error('formatters is null');
        }

        var value = this.formatters.reduceRight(function (result, declaration, index) {
          var args = declaration.split(Binding.FORMATTER_SPLIT);
          var id = args.shift();

          if (!id) {
            throw new Error('id not defined');
          }

          if (!_this5.view.options.formatters) {
            return undefined;
          }

          var formatter = _this5.view.options.formatters[id];

          var processedArgs = _this5.parseFormatterArguments(args, index);

          if (formatter && typeof formatter.publish === 'function') {
            result = formatter.publish.apply(formatter, [result].concat(_babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(processedArgs)));
          }

          return result;
        }, this.getValue(this.el));
        this.observer.setValue(value);
      }
    }
    /**
     * Subscribes to the model for changes at the specified keypath. Bi-directional
     * routines will also listen for changes on the element to propagate them back
     * to the model.
     */

  }, {
    key: "bind",
    value: function bind() {
      this.parseTarget();

      if (this.binder && this.binder.hasOwnProperty('bind')) {
        if (!this.binder.bind && typeof this.binder.bind !== 'function') {
          throw new Error('the method bind is not a function');
        }

        this.binder.bind.call(this, this.el);
      }

      if (this.view.options.preloadData) {
        this.sync();
      }
    }
    /**
     * Unsubscribes from the model and the element.
     */

  }, {
    key: "unbind",
    value: function unbind() {
      var _this6 = this;

      if (!this.binder) {
        console.warn(new Error('Binder is not defined'), this);
        return;
      }

      if (this.binder.unbind) {
        this.binder.unbind.call(this, this.el);
      }

      if (this.observer) {
        this.observer.unobserve();
      }

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.formatterObservers).forEach(function (fi) {
        var args = _this6.formatterObservers[fi];

        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(args).forEach(function (ai) {
          args[ai].unobserve();
        });
      });

      this.formatterObservers = {};
    }
    /**
     * Updates the binding's model from what is currently set on the view. Unbinds
     * the old model first and then re-binds with the new model.
     * @param {any} models
     */

  }, {
    key: "update",
    value: function update() {
      var models = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.observer) {
        this.model = this.observer.target;
      }

      if (this.binder === null) {
        throw new Error('binder is null');
      }

      if (this.binder.hasOwnProperty('update')) {
        if (this.binder.update) {
          this.binder.update.call(this, models);
        }
      }
    }
    /**
     * Returns elements value
     * @param el
     */

  }, {
    key: "getValue",
    value: function getValue(el) {
      if (this.binder === null) {
        throw new Error('binder is null');
      }

      if (this.binder.hasOwnProperty('getValue')) {
        if (typeof this.binder.getValue !== 'function') {
          throw new Error('getValue is not a function');
        }

        return this.binder.getValue.call(this, el);
      } else {
        return _services_utils__WEBPACK_IMPORTED_MODULE_7__["Utils"].getInputValue(el);
      }
    }
  }, {
    key: "getStarArguments",
    value: function getStarArguments(identifier, type) {
      var args = new Array();
      var regexp = new RegExp("^".concat(identifier.replace(/\*/g, '.+'), "$"));

      if (regexp.test(type) && type.split('-')[0] === identifier.split('-')[0]) {
        this.debug('matches', identifier, type);
      } else {
        if (identifier !== '*') {
          console.error('Nodename not matchs the identifier,', identifier, type);
        }
      }

      var splittedIdentifier = identifier.split('*'); // splittedIdentifier.pop();

      if (splittedIdentifier.length > 0) {
        // how many stars has the identifier?
        var starCount = splittedIdentifier.length - 1;

        if (starCount <= 1) {
          args.push(type.slice(identifier.length - 1));
        } else {
          /**
           * On more than one star this is a multi star binder
           * We split the identifier on each star and use the identifier pieces as a serperator
           */
          var subIdentifier = splittedIdentifier[0];
          var argsString = type.slice(subIdentifier.length);
          splittedIdentifier.forEach(function (separator, index) {
            if (index > 0) {
              var arg = argsString.split(separator)[0]; // the rest of the string

              if (index === splittedIdentifier.length - 1) {
                arg = argsString;
              }

              if (_services_utils__WEBPACK_IMPORTED_MODULE_7__["Utils"].isNumber(arg)) {
                arg = Number(arg);
              }

              argsString = argsString.substring(argsString.indexOf(separator) + 1);
              args.push(arg);
            }
          });
        }
      }

      return args;
    }
  }]);

  return Binding;
}();

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(Binding, "FORMATTER_ARGS", /[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(Binding, "FORMATTER_SPLIT", /\s+/);

/***/ }),

/***/ "../riba/packages/core/src/components/abstract-riba-component.ts":
/*!***********************************************************************!*\
  !*** ../riba/packages/core/src/components/abstract-riba-component.ts ***!
  \***********************************************************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _babel_runtime_corejs2_core_js_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/max-safe-integer */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/number/max-safe-integer.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _vendors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../vendors */ "../riba/packages/core/src/vendors/index.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../view */ "../riba/packages/core/src/view.ts");
/* harmony import */ var _riba__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../riba */ "../riba/packages/core/src/riba.ts");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/utils */ "../riba/packages/core/src/services/utils.ts");
/* harmony import */ var _fake_html_element__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fake-html-element */ "../riba/packages/core/src/components/fake-html-element.ts");












/**
 * This implementation of components replaces the old components of rivets following the Web Components v1 specs
 *
 * @see https://developer.mozilla.org/de/docs/Web/Web_Components/Using_custom_elements
 */





var Component =
/*#__PURE__*/
function (_FakeHTMLElement) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(Component, _FakeHTMLElement);

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Component, [{
    key: "bound",

    /**
     * Context of this component, used for debugging
     */
    // protected $el: JQuery<HTMLUnknownElement>;
    get: function get() {
      return !!this.view;
    }
    /**
     * If true the component will automatically bind the component to riba if all required attributes are setted
     */

  }]);

  function Component(element, context) {
    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Component);

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Component).call(this, element));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "context", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "debug", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "view", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "templateLoaded", false);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "riba", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "el", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "scope", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "autobind", true);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "attributeObserverFallback", void 0);

    _this.context = context;
    _this.debug = Object(_vendors__WEBPACK_IMPORTED_MODULE_11__["Debug"])('component:Component');

    _this.debug('constructor called', element, context, _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this));

    if (element) {
      _this.el = element;
    } else if (window.customElements) {
      _this.el = _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this);
    } else {
      throw new Error("element is required on browsers without custom elements support");
    } // this.$el = JQuery(this.el);


    return _this;
  }
  /**
   * Remove this custom element
   */


  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Component, [{
    key: "remove",
    value: function remove() {
      this.debug('remove', this.el);

      if (this.el && this.el.parentElement) {
        this.el.parentElement.removeChild(this.el);

        if (!window.customElements) {
          this.disconnectedFallbackCallback();
        }
      }
    }
  }, {
    key: "disconnectedFallbackCallback",
    value: function disconnectedFallbackCallback() {
      this.disconnectedCallback(); // const parent = this.el.parentNode;
      // if (parent) {
      //   parent.removeChild(this.el);
      // }
    }
  }, {
    key: "requiredAttributes",

    /**
     * returns a list of attributes wich are required until the riba binding starts
     */
    value: function requiredAttributes() {
      return [];
    }
  }, {
    key: "init",
    value: function () {
      var _init = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(observedAttributes) {
        var _this2 = this;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.initAttributeObserver(observedAttributes);
                /**
                 * After all required attributes are set we load the template and bind the component
                 */

                if (!this.checkRequiredAttributes()) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", this.loadTemplate().then(function (template) {
                  if (_this2.autobind) {
                    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(_this2.bind());
                  }

                  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(null);
                }));

              case 5:
                this.debug('not all required attributes are set to load and bind the template');

              case 6:
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
    /**
     * Required attributes before the view is bound
     *
     * The attributeChangedCallback is called for each attribute wich updates the riba view each time
     * which can have a big impact on performance or required attributes are not yet available which can lead to errors.
     * So define required attriutes and the view is ony bind the first time after all this attributes are transmitted.
     */

  }, {
    key: "checkRequiredAttributes",
    value: function checkRequiredAttributes() {
      var _this3 = this;

      var allDefined = true;
      var requiredAttributes = this.requiredAttributes();
      requiredAttributes.forEach(function (requiredAttribute) {
        if (!_this3.scope.hasOwnProperty(requiredAttribute) || !_this3.scope[requiredAttribute]) {
          _this3.debug("Attribute ".concat(requiredAttribute, " not set: ").concat(_this3.scope[requiredAttribute]));

          allDefined = false;
        } else {
          _this3.debug("Attribute ".concat(requiredAttribute, " is defined: ").concat(_this3.scope[requiredAttribute]));
        }
      });
      return allDefined;
    }
  }, {
    key: "parseAttribute",
    value: function parseAttribute(attr) {
      var value = attr;

      if (attr === 'true') {
        value = true;
      } else if (attr === 'false') {
        value = false;
      } else if (attr === 'null') {
        value = null;
      } else if (attr === 'undefined') {
        value = undefined;
      } else if (attr === '') {
        value = undefined;
      } else if (!isNaN(Number(attr))) {
        value = Number(attr); // If number is too large store the value as string

        if (value >= _babel_runtime_corejs2_core_js_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_0___default.a) {
          value = attr;
        }
      } else if (_services_utils__WEBPACK_IMPORTED_MODULE_14__["Utils"].isJson(attr)) {
        value = JSON.parse(attr);
      }

      return value;
    }
    /**
     * Event handler to liste for publish binder event for two-way-binding in web components
     */

  }, {
    key: "publish",
    value: function publish(name, newValue, namespace) {
      this.el.dispatchEvent(new CustomEvent('publish-binder-change:' + name, {
        detail: {
          name: name,
          newValue: newValue,
          namespace: null // TODO

        }
      }));
    }
    /**
     * Returns an event handler for the bindings (most on-*) insite this component.
     */

  }, {
    key: "eventHandler",
    value: function eventHandler(self) {
      this.debug('eventHandler', self); // IMPORTANT this must be a function and not a Arrow Functions

      return function (context, event, binding, el) {
        this.call(self, context, event, binding.view.models, el);
      };
    }
    /**
     * Extra call formatter to avoid the "this" context problem
     */

  }, {
    key: "callFormatterHandler",
    value: function callFormatterHandler(self) {
      var _this4 = this;

      return function (fn) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        self.debug('callFormatterHandler', _this4, fn);
        return fn.apply(self, args);
      };
    }
    /**
     * Extra args formatter to avoid the "this" context problem
     *
     * Sets arguments to a function without directly call them
     * @param fn The function you wish to call
     * @param args the parameters you wish to call the function with
     */

  }, {
    key: "argsFormatterHandler",
    value: function argsFormatterHandler(self) {
      this.debug('argsFormatterHandler', self);
      return function (fn) {
        for (var _len2 = arguments.length, fnArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          fnArgs[_key2 - 1] = arguments[_key2];
        }

        return function (event, scope, el, binding) {
          // append the event handler args to passed args
          fnArgs.push(event);
          fnArgs.push(scope);
          fnArgs.push(el);
          fnArgs.push(binding);
          return fn.apply(self, fnArgs);
        };
      };
    }
    /**
     * Default custom Element method
     * Invoked when the custom element is first connected to the document's DOM.
     */

  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.debug('connectedCallback called');
    }
    /**
     * Default custom Element method
     * Invoked when the custom element is disconnected from the document's DOM.
     */

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.debug('disconnectedCallback called');

      if (this.view) {
        this.view.unbind();
      }

      if (this.attributeObserverFallback) {
        this.attributeObserverFallback.disconnect();
      }

      this.el.removeEventListener('binder-changed', this.BinderChangedEventHandler);
    }
    /**
     * Default custom Element method
     * Invoked when the custom element is moved to a new document.
     * @param attributeName
     * @param oldValue
     * @param newValue
     * @param namespace
     */

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
      var _this5 = this;

      newValue = this.parseAttribute(newValue);
      attributeName = _services_utils__WEBPACK_IMPORTED_MODULE_14__["Utils"].camelCase(attributeName);
      this.debug('attributeChangedCallback called', attributeName, oldValue, newValue, namespace);

      if (this.scope && this.scope[attributeName]) {
        oldValue = this.scope[attributeName];
      } // automatically inject observed attributes to view scope


      this.scope[attributeName] = newValue; // call custom attribute changed callback with parsed values

      this.parsedAttributeChangedCallback(attributeName, oldValue, newValue, namespace);
      /**
       * After all required attributes are set we load the template and bind the component
       */

      if (this.checkRequiredAttributes()) {
        this.loadTemplate().then(function (template) {
          if (_this5.autobind) {
            return _this5.bind();
          }

          return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(null);
        });
      } else {
        this.debug('not all required attributes are set to load and bind the template');
      }
    }
    /**
     * Similar to attributeChangedCallback but attribute arguments are already parsed as they are stored in the scope
     * @param attributeName
     * @param oldValue
     * @param newValue
     * @param namespace
     */

  }, {
    key: "parsedAttributeChangedCallback",
    value: function parsedAttributeChangedCallback(attributeName, oldValue, newValue, namespace) {
      this.debug('parsedAttributeChangedCallback called', attributeName, oldValue, newValue, namespace);
    }
    /**
     * Default custom Element method
     * Invoked when one of the custom element's attributes is added, removed, or changed.
     * Note: Not supported on polyfill: https://github.com/webcomponents/custom-elements#known-bugs-and-limitations
     * @param oldDocument
     * @param newDocument
     */

  }, {
    key: "adoptedCallback",
    value: function adoptedCallback(oldDocument, newDocument) {
      this.debug('adoptedCallback called', oldDocument, newDocument);
    }
  }, {
    key: "loadTemplate",
    value: function () {
      var _loadTemplate = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var _this6 = this;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.templateLoaded) {
                  _context2.next = 3;
                  break;
                }

                this.debug('template already loaded');
                return _context2.abrupt("return", null);

              case 3:
                if (this.checkRequiredAttributes()) {
                  _context2.next = 6;
                  break;
                }

                this.debug('not all required attributes are set to load the template');
                return _context2.abrupt("return", null);

              case 6:
                return _context2.abrupt("return", _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(this.template()).then(function (template) {
                  _this6.debug('template', template);

                  if (template !== null) {
                    _this6.el.innerHTML = template;
                  }

                  return template;
                }).then(function (template) {
                  _this6.templateLoaded = true;
                  return template;
                }).catch(function (error) {
                  console.error(error);
                  _this6.templateLoaded = false;
                  return error;
                }));

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadTemplate() {
        return _loadTemplate.apply(this, arguments);
      }

      return loadTemplate;
    }()
  }, {
    key: "bind",
    value: function () {
      var _bind = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var _this7 = this;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.bound) {
                  _context3.next = 3;
                  break;
                }

                this.debug('component already bounded');
                return _context3.abrupt("return");

              case 3:
                if (this.checkRequiredAttributes()) {
                  _context3.next = 6;
                  break;
                }

                this.debug('not all required attributes are set for bind');
                return _context3.abrupt("return");

              case 6:
                _context3.next = 8;
                return this.beforeBind().then(function () {
                  if (!_this7.el) {
                    throw new Error('this.el is not defined');
                  }

                  _this7.riba = new _riba__WEBPACK_IMPORTED_MODULE_13__["Riba"]();

                  var viewOptions = _this7.riba.getViewOptions({
                    handler: _this7.eventHandler(_this7),
                    formatters: {
                      call: _this7.callFormatterHandler(_this7),
                      args: _this7.argsFormatterHandler(_this7)
                    }
                  });

                  _this7.view = new _view__WEBPACK_IMPORTED_MODULE_12__["View"](Array.prototype.slice.call(_this7.el.childNodes), _this7.scope, viewOptions);
                  _this7.scope = _this7.view.models;

                  _this7.view.bind();

                  return _this7.view;
                }).then(function (view) {
                  return _this7.afterBind();
                }).catch(function (error) {
                  console.error(error);
                });

              case 8:
                return _context3.abrupt("return", this.view);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function bind() {
        return _bind.apply(this, arguments);
      }

      return bind;
    }()
  }, {
    key: "unbind",
    value: function () {
      var _unbind = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.view) {
                  this.view.unbind();
                  delete this.view;
                }

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function unbind() {
        return _unbind.apply(this, arguments);
      }

      return unbind;
    }()
  }, {
    key: "build",
    value: function () {
      var _build = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.view) {
                  this.view.build();
                }

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function build() {
        return _build.apply(this, arguments);
      }

      return build;
    }()
  }, {
    key: "beforeBind",
    value: function () {
      var _beforeBind = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.debug('beforeBind', this.bound);

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function beforeBind() {
        return _beforeBind.apply(this, arguments);
      }

      return beforeBind;
    }()
  }, {
    key: "afterBind",
    value: function () {
      var _afterBind = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.debug('afterBind', this.bound);

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function afterBind() {
        return _afterBind.apply(this, arguments);
      }

      return afterBind;
    }()
  }, {
    key: "BinderChangedEventHandler",
    value: function BinderChangedEventHandler(event) {
      var data = event.detail;
      this.attributeChangedCallback(data.name, data.oldValue, data.oldValue, data.namespace);
    }
    /**
     * Event handler to listen attribute change event as fallback for MutationObserver
     */

  }, {
    key: "initAttributeObserver",
    value: function initAttributeObserver(observedAttributes) {
      var _this8 = this;

      if (window.customElements) {// use native implementaion
      } else {
        if (window.MutationObserver) {
          // use MutationObserver as fallback
          this.attributeObserverFallback = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
              if (mutation.type === 'attributes') {
                _this8.debug('attributes changed', mutation);

                if (mutation.attributeName) {
                  // if this attribute is a watched attribute
                  if (observedAttributes.indexOf(mutation.attributeName) !== -1) {
                    var newValue = _this8.el.getAttribute(mutation.attributeName);

                    _this8.attributeChangedCallback(mutation.attributeName, mutation.oldValue, newValue, mutation.attributeNamespace);
                  }
                }
              }
            });
          });
          this.attributeObserverFallback.observe(this.el, {
            attributes: true
          });
        } else {
          // use attribute change event as fallback for MutationObserver
          this.el.addEventListener('binder-changed', this.BinderChangedEventHandler); // this.$el.on('binder-changed', this.BinderChangedEventHandler);
        } // call attributeChangedCallback for all already setted static attributes


        var attributes = this.el.attributes;

        for (var i in attributes) {
          if (attributes.hasOwnProperty(i)) {
            var attribute = attributes[i];
            var name = attribute.nodeName;

            if (observedAttributes.indexOf(name) !== -1) {
              var newValue = attribute.nodeValue;
              this.attributeChangedCallback(name, null, newValue, null);
            }
          }
        }
      }
    }
  }]);

  return Component;
}(_fake_html_element__WEBPACK_IMPORTED_MODULE_15__["FakeHTMLElement"]);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(Component, "tagName", void 0);

/***/ }),

/***/ "../riba/packages/core/src/components/fake-html-element.ts":
/*!*****************************************************************!*\
  !*** ../riba/packages/core/src/components/fake-html-element.ts ***!
  \*****************************************************************/
/*! exports provided: FakeHTMLElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeHTMLElement", function() { return FakeHTMLElement; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/set-prototype-of */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);





/**
 * This fake html element makes it possible to use custom elements with prodotype classes for backward compatibility on old browsers
 */
var FakeHTMLElement
/*implements HTMLElement*/
= function FakeHTMLElement(element) {
  _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, FakeHTMLElement);

  if (window.customElements) {
    return _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_2___default()(HTMLElement, [], this.constructor);
  }
};

if (window.customElements) {
  FakeHTMLElement.prototype = _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1___default()(HTMLElement.prototype, {
    constructor: {
      value: HTMLElement,
      configurable: true,
      writable: true
    }
  });

  _babel_runtime_corejs2_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(FakeHTMLElement, HTMLElement);
}



/***/ }),

/***/ "../riba/packages/core/src/components/index.ts":
/*!*****************************************************!*\
  !*** ../riba/packages/core/src/components/index.ts ***!
  \*****************************************************/
/*! exports provided: ComponentService, Component, RibaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_component_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/component.service */ "../riba/packages/core/src/services/component.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentService", function() { return _services_component_service__WEBPACK_IMPORTED_MODULE_0__["ComponentService"]; });

/* harmony import */ var _abstract_riba_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-riba-component */ "../riba/packages/core/src/components/abstract-riba-component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _abstract_riba_component__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony import */ var _riba_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./riba-component */ "../riba/packages/core/src/components/riba-component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RibaComponent", function() { return _riba_component__WEBPACK_IMPORTED_MODULE_2__["RibaComponent"]; });





/***/ }),

/***/ "../riba/packages/core/src/components/riba-component.ts":
/*!**************************************************************!*\
  !*** ../riba/packages/core/src/components/riba-component.ts ***!
  \**************************************************************/
/*! exports provided: RibaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RibaComponent", function() { return RibaComponent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _abstract_riba_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abstract-riba-component */ "../riba/packages/core/src/components/abstract-riba-component.ts");








/**
 * This class is just used in view.ts because types of `Component` can not have a `new` constuctor
 */
var RibaComponent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RibaComponent, _Component);

  function RibaComponent() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RibaComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(RibaComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "bound", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "context", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "debug", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "view", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "templateLoaded", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "el", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "scope", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "autobind", void 0);

    return _this;
  }

  return RibaComponent;
}(_abstract_riba_component__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(RibaComponent, "tagName", void 0);

/***/ }),

/***/ "../riba/packages/core/src/core.module.ts":
/*!************************************************!*\
  !*** ../riba/packages/core/src/core.module.ts ***!
  \************************************************/
/*! exports provided: coreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreModule", function() { return coreModule; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _binders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./binders */ "../riba/packages/core/src/binders/index.ts");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formatters */ "../riba/packages/core/src/formatters/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services */ "../riba/packages/core/src/services/index.ts");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




var coreModule = {
  formatters: _objectSpread({}, _formatters__WEBPACK_IMPORTED_MODULE_8__["specialFormatters"], {}, _formatters__WEBPACK_IMPORTED_MODULE_8__["compareFormatters"], {}, _formatters__WEBPACK_IMPORTED_MODULE_8__["mathFormatters"], {}, _formatters__WEBPACK_IMPORTED_MODULE_8__["stringFormatters"], {}, _formatters__WEBPACK_IMPORTED_MODULE_8__["propertyFormatters"]),
  binders: _binders__WEBPACK_IMPORTED_MODULE_7__,
  services: _services__WEBPACK_IMPORTED_MODULE_9__
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/compare/and.formatter.ts":
/*!*********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/compare/and.formatter.ts ***!
  \*********************************************************************/
/*! exports provided: and */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return and; });
/**
 * a && b
 */
var and = {
  name: 'and',
  read: function read(a, b) {
    return a && b;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/compare/between.formatter.ts":
/*!*************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/compare/between.formatter.ts ***!
  \*************************************************************************/
/*! exports provided: between */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/**
 * a >= b && a <= c
 */
var between = {
  name: 'between',
  read: function read(num) {
    return num >= (arguments.length <= 1 ? undefined : arguments[1]) && num <= (arguments.length <= 2 ? undefined : arguments[2]);
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/compare/egt.formatter.ts":
/*!*********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/compare/egt.formatter.ts ***!
  \*********************************************************************/
/*! exports provided: egt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "egt", function() { return egt; });
/**
 * equal or greater than
 * a >= b
 */
var egt = {
  name: 'egt',
  read: function read(a, b) {
    return a >= b;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/compare/elt.formatter.ts":
/*!*********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/compare/elt.formatter.ts ***!
  \*********************************************************************/
/*! exports provided: elt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elt", function() { return elt; });
/**
 * euqal or lower than
 * a <= b
 */
var elt = {
  name: 'elt',
  read: function read(a, b) {
    return a <= b;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/compare/eq.formatter.ts":
/*!********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/compare/eq.formatter.ts ***!
  \********************************************************************/
/*! exports provided: eq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/**
 * a === b
 */
var eq = {
  name: 'eq',
  read: function read(a, b) {
    return a === b;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/compare/gt.formatter.ts":
/*!********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/compare/gt.formatter.ts ***!
  \********************************************************************/
/*! exports provided: gt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gt", function() { return gt; });
/**
 * greater than
 * a > b
 */
var gt = {
  name: 'gt',
  read: function read(a, b) {
    return a > b;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/compare/index.ts":
/*!*************************************************************!*\
  !*** ../riba/packages/core/src/formatters/compare/index.ts ***!
  \*************************************************************/
/*! exports provided: and, between, egt, eq, gt, isDefined, isObject, isUndefined, ne, lt, elt, or, not, compareFormatters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareFormatters", function() { return compareFormatters; });
/* harmony import */ var _and_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./and.formatter */ "../riba/packages/core/src/formatters/compare/and.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "and", function() { return _and_formatter__WEBPACK_IMPORTED_MODULE_0__["and"]; });

/* harmony import */ var _between_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./between.formatter */ "../riba/packages/core/src/formatters/compare/between.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "between", function() { return _between_formatter__WEBPACK_IMPORTED_MODULE_1__["between"]; });

/* harmony import */ var _egt_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./egt.formatter */ "../riba/packages/core/src/formatters/compare/egt.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "egt", function() { return _egt_formatter__WEBPACK_IMPORTED_MODULE_2__["egt"]; });

/* harmony import */ var _eq_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eq.formatter */ "../riba/packages/core/src/formatters/compare/eq.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return _eq_formatter__WEBPACK_IMPORTED_MODULE_3__["eq"]; });

/* harmony import */ var _gt_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gt.formatter */ "../riba/packages/core/src/formatters/compare/gt.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gt", function() { return _gt_formatter__WEBPACK_IMPORTED_MODULE_4__["gt"]; });

/* harmony import */ var _is_defined_formatters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-defined.formatters */ "../riba/packages/core/src/formatters/compare/is-defined.formatters.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _is_defined_formatters__WEBPACK_IMPORTED_MODULE_5__["isDefined"]; });

/* harmony import */ var _is_object_formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./is-object.formatter */ "../riba/packages/core/src/formatters/compare/is-object.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _is_object_formatter__WEBPACK_IMPORTED_MODULE_6__["isObject"]; });

/* harmony import */ var _is_undefined_formatters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./is-undefined.formatters */ "../riba/packages/core/src/formatters/compare/is-undefined.formatters.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _is_undefined_formatters__WEBPACK_IMPORTED_MODULE_7__["isUndefined"]; });

/* harmony import */ var _ne_formatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ne.formatter */ "../riba/packages/core/src/formatters/compare/ne.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ne", function() { return _ne_formatter__WEBPACK_IMPORTED_MODULE_8__["ne"]; });

/* harmony import */ var _lt_formatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lt.formatter */ "../riba/packages/core/src/formatters/compare/lt.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lt", function() { return _lt_formatter__WEBPACK_IMPORTED_MODULE_9__["lt"]; });

/* harmony import */ var _elt_formatter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./elt.formatter */ "../riba/packages/core/src/formatters/compare/elt.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elt", function() { return _elt_formatter__WEBPACK_IMPORTED_MODULE_10__["elt"]; });

/* harmony import */ var _or_formatter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./or.formatter */ "../riba/packages/core/src/formatters/compare/or.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "or", function() { return _or_formatter__WEBPACK_IMPORTED_MODULE_11__["or"]; });

/* harmony import */ var _not_formatter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not.formatter */ "../riba/packages/core/src/formatters/compare/not.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _not_formatter__WEBPACK_IMPORTED_MODULE_12__["not"]; });

/**
 * Add useful general-purpose formatters for Rivets.js
 * Some formatters from cart.js and rivetsjs-stdlib
 * @see https://github.com/discolabs/cartjs/
 * @see https://github.com/matthieuriolo/rivetsjs-stdlib
 * @see https://github.com/JumpLinkNetwork/shopify-productjs
 */
// compare functions














var compareFormatters = {
  and: _and_formatter__WEBPACK_IMPORTED_MODULE_0__["and"],
  between: _between_formatter__WEBPACK_IMPORTED_MODULE_1__["between"],
  egt: _egt_formatter__WEBPACK_IMPORTED_MODULE_2__["egt"],
  eq: _eq_formatter__WEBPACK_IMPORTED_MODULE_3__["eq"],
  gt: _gt_formatter__WEBPACK_IMPORTED_MODULE_4__["gt"],
  isDefined: _is_defined_formatters__WEBPACK_IMPORTED_MODULE_5__["isDefined"],
  isObject: _is_object_formatter__WEBPACK_IMPORTED_MODULE_6__["isObject"],
  isUndefined: _is_undefined_formatters__WEBPACK_IMPORTED_MODULE_7__["isUndefined"],
  ne: _ne_formatter__WEBPACK_IMPORTED_MODULE_8__["ne"],
  lt: _lt_formatter__WEBPACK_IMPORTED_MODULE_9__["lt"],
  elt: _elt_formatter__WEBPACK_IMPORTED_MODULE_10__["elt"],
  or: _or_formatter__WEBPACK_IMPORTED_MODULE_11__["or"],
  not: _not_formatter__WEBPACK_IMPORTED_MODULE_12__["not"]
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/compare/is-defined.formatters.ts":
/*!*****************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/compare/is-defined.formatters.ts ***!
  \*****************************************************************************/
/*! exports provided: isDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils */ "../riba/packages/core/src/services/utils.ts");

/**
 * Check if value is defined
 */

var isDefined = {
  name: 'isDefined',
  read: _services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isDefined
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/compare/is-object.formatter.ts":
/*!***************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/compare/is-object.formatter.ts ***!
  \***************************************************************************/
/*! exports provided: isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils */ "../riba/packages/core/src/services/utils.ts");

/**
 * Check if value is undefined
 */

var isObject = {
  name: 'isObject',
  read: _services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isObject
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/compare/is-undefined.formatters.ts":
/*!*******************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/compare/is-undefined.formatters.ts ***!
  \*******************************************************************************/
/*! exports provided: isUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils */ "../riba/packages/core/src/services/utils.ts");

/**
 * Check if value is undefined
 */

var isUndefined = {
  name: 'isUndefined',
  read: _services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isUndefined
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/compare/lt.formatter.ts":
/*!********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/compare/lt.formatter.ts ***!
  \********************************************************************/
/*! exports provided: lt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lt", function() { return lt; });
/**
 * lower than
 * a < b
 */
var lt = {
  name: 'lt',
  read: function read(a, b) {
    return a < b;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/compare/ne.formatter.ts":
/*!********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/compare/ne.formatter.ts ***!
  \********************************************************************/
/*! exports provided: ne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ne", function() { return ne; });
/**
 * a !== b
 */
var ne = {
  name: 'ne',
  read: function read(a, b) {
    return a !== b;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/compare/not.formatter.ts":
/*!*********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/compare/not.formatter.ts ***!
  \*********************************************************************/
/*! exports provided: not */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/**
 * !a
 */
var not = {
  name: 'not',
  read: function read(a) {
    return !a;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/compare/or.formatter.ts":
/*!********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/compare/or.formatter.ts ***!
  \********************************************************************/
/*! exports provided: or */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return or; });
/**
 * a || b
 */
var or = {
  name: 'or',
  read: function read(a, b) {
    return a || b;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/index.ts":
/*!*****************************************************!*\
  !*** ../riba/packages/core/src/formatters/index.ts ***!
  \*****************************************************/
/*! exports provided: and, between, egt, eq, gt, isDefined, isObject, isUndefined, ne, lt, elt, or, not, compareFormatters, random, plus, minus, numberFormatter, timesFormatter, dividedBy, modulo, gcd, even, uneven, digits, mathFormatters, parse, first, last, contains, get, set, size, empty, isLast, range, propertyFormatters, args, booleanFormatter, debug, defaultBinder, call, currency, json, specialFormatters, append, downcase, filled, handleize, isString, match, pluralize, prepend, upcase, replace, replaceFirst, slice, strip, stripHtml, stringFormatter, stringFormatters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compare_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compare/index */ "../riba/packages/core/src/formatters/compare/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "and", function() { return _compare_index__WEBPACK_IMPORTED_MODULE_0__["and"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "between", function() { return _compare_index__WEBPACK_IMPORTED_MODULE_0__["between"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "egt", function() { return _compare_index__WEBPACK_IMPORTED_MODULE_0__["egt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return _compare_index__WEBPACK_IMPORTED_MODULE_0__["eq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gt", function() { return _compare_index__WEBPACK_IMPORTED_MODULE_0__["gt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _compare_index__WEBPACK_IMPORTED_MODULE_0__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _compare_index__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _compare_index__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ne", function() { return _compare_index__WEBPACK_IMPORTED_MODULE_0__["ne"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lt", function() { return _compare_index__WEBPACK_IMPORTED_MODULE_0__["lt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elt", function() { return _compare_index__WEBPACK_IMPORTED_MODULE_0__["elt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "or", function() { return _compare_index__WEBPACK_IMPORTED_MODULE_0__["or"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _compare_index__WEBPACK_IMPORTED_MODULE_0__["not"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareFormatters", function() { return _compare_index__WEBPACK_IMPORTED_MODULE_0__["compareFormatters"]; });

/* harmony import */ var _math_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math/index */ "../riba/packages/core/src/formatters/math/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _math_index__WEBPACK_IMPORTED_MODULE_1__["random"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plus", function() { return _math_index__WEBPACK_IMPORTED_MODULE_1__["plus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minus", function() { return _math_index__WEBPACK_IMPORTED_MODULE_1__["minus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberFormatter", function() { return _math_index__WEBPACK_IMPORTED_MODULE_1__["numberFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timesFormatter", function() { return _math_index__WEBPACK_IMPORTED_MODULE_1__["timesFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dividedBy", function() { return _math_index__WEBPACK_IMPORTED_MODULE_1__["dividedBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modulo", function() { return _math_index__WEBPACK_IMPORTED_MODULE_1__["modulo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gcd", function() { return _math_index__WEBPACK_IMPORTED_MODULE_1__["gcd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "even", function() { return _math_index__WEBPACK_IMPORTED_MODULE_1__["even"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uneven", function() { return _math_index__WEBPACK_IMPORTED_MODULE_1__["uneven"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "digits", function() { return _math_index__WEBPACK_IMPORTED_MODULE_1__["digits"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mathFormatters", function() { return _math_index__WEBPACK_IMPORTED_MODULE_1__["mathFormatters"]; });

/* harmony import */ var _property_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property/index */ "../riba/packages/core/src/formatters/property/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _property_index__WEBPACK_IMPORTED_MODULE_2__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _property_index__WEBPACK_IMPORTED_MODULE_2__["first"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _property_index__WEBPACK_IMPORTED_MODULE_2__["last"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _property_index__WEBPACK_IMPORTED_MODULE_2__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _property_index__WEBPACK_IMPORTED_MODULE_2__["get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return _property_index__WEBPACK_IMPORTED_MODULE_2__["set"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size", function() { return _property_index__WEBPACK_IMPORTED_MODULE_2__["size"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _property_index__WEBPACK_IMPORTED_MODULE_2__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLast", function() { return _property_index__WEBPACK_IMPORTED_MODULE_2__["isLast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _property_index__WEBPACK_IMPORTED_MODULE_2__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propertyFormatters", function() { return _property_index__WEBPACK_IMPORTED_MODULE_2__["propertyFormatters"]; });

/* harmony import */ var _special_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./special/index */ "../riba/packages/core/src/formatters/special/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "args", function() { return _special_index__WEBPACK_IMPORTED_MODULE_3__["args"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "booleanFormatter", function() { return _special_index__WEBPACK_IMPORTED_MODULE_3__["booleanFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return _special_index__WEBPACK_IMPORTED_MODULE_3__["debug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultBinder", function() { return _special_index__WEBPACK_IMPORTED_MODULE_3__["defaultBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _special_index__WEBPACK_IMPORTED_MODULE_3__["call"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currency", function() { return _special_index__WEBPACK_IMPORTED_MODULE_3__["currency"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "json", function() { return _special_index__WEBPACK_IMPORTED_MODULE_3__["json"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specialFormatters", function() { return _special_index__WEBPACK_IMPORTED_MODULE_3__["specialFormatters"]; });

/* harmony import */ var _string_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string/index */ "../riba/packages/core/src/formatters/string/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "append", function() { return _string_index__WEBPACK_IMPORTED_MODULE_4__["append"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downcase", function() { return _string_index__WEBPACK_IMPORTED_MODULE_4__["downcase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filled", function() { return _string_index__WEBPACK_IMPORTED_MODULE_4__["filled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleize", function() { return _string_index__WEBPACK_IMPORTED_MODULE_4__["handleize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _string_index__WEBPACK_IMPORTED_MODULE_4__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "match", function() { return _string_index__WEBPACK_IMPORTED_MODULE_4__["match"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluralize", function() { return _string_index__WEBPACK_IMPORTED_MODULE_4__["pluralize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return _string_index__WEBPACK_IMPORTED_MODULE_4__["prepend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "upcase", function() { return _string_index__WEBPACK_IMPORTED_MODULE_4__["upcase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return _string_index__WEBPACK_IMPORTED_MODULE_4__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceFirst", function() { return _string_index__WEBPACK_IMPORTED_MODULE_4__["replaceFirst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return _string_index__WEBPACK_IMPORTED_MODULE_4__["slice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strip", function() { return _string_index__WEBPACK_IMPORTED_MODULE_4__["strip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripHtml", function() { return _string_index__WEBPACK_IMPORTED_MODULE_4__["stripHtml"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringFormatter", function() { return _string_index__WEBPACK_IMPORTED_MODULE_4__["stringFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringFormatters", function() { return _string_index__WEBPACK_IMPORTED_MODULE_4__["stringFormatters"]; });







/***/ }),

/***/ "../riba/packages/core/src/formatters/math/digits.formatter.ts":
/*!*********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/math/digits.formatter.ts ***!
  \*********************************************************************/
/*! exports provided: digits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digits", function() { return digits; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils */ "../riba/packages/core/src/services/utils.ts");

/**
 * Just get the digits of a string, useful to remove px from css value
 * @see http://stackoverflow.com/a/1100653/1465919
 */

var digits = {
  name: 'digits',
  read: function read(str) {
    if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isNumber(str)) {
      return str;
    }

    var num = str.replace(/[^-\d\.]/g, '');

    if (isNaN(Number(num))) {
      return 0;
    } else {
      return Number(num);
    }
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/math/dividedBy.formatter.ts":
/*!************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/math/dividedBy.formatter.ts ***!
  \************************************************************************/
/*! exports provided: dividedBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dividedBy", function() { return dividedBy; });
/**
 * Divides an output by a number. The output is rounded down to the nearest integer.
 * @see https://help.shopify.com/themes/liquid/filters/math-filters#divided_by
 */
var dividedBy = {
  name: 'dividedBy',
  read: function read(a, b) {
    return Number(a) / Number(b);
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/math/even.formatter.ts":
/*!*******************************************************************!*\
  !*** ../riba/packages/core/src/formatters/math/even.formatter.ts ***!
  \*******************************************************************/
/*! exports provided: even */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "even", function() { return even; });
/**
 * Prüft ob eine Zahl gerade ist oder nicht
 * Check if a number is even or not
 */
var even = {
  name: 'even',
  read: function read(num) {
    return num % 2 === 0;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/math/gcd.formatter.ts":
/*!******************************************************************!*\
  !*** ../riba/packages/core/src/formatters/math/gcd.formatter.ts ***!
  \******************************************************************/
/*! exports provided: gcd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gcd", function() { return gcd; });
/**
 * greatest common divisor (GCD) useful to calculate the ratio
 * @see https://stackoverflow.com/a/1186465/1465919
 */
var _gcd = function _gcd(a, b) {
  return b === 0 ? a : _gcd(b, a % b);
};

var gcd = {
  name: 'gcd',
  read: _gcd
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/math/index.ts":
/*!**********************************************************!*\
  !*** ../riba/packages/core/src/formatters/math/index.ts ***!
  \**********************************************************/
/*! exports provided: random, plus, minus, numberFormatter, timesFormatter, dividedBy, modulo, gcd, even, uneven, digits, mathFormatters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mathFormatters", function() { return mathFormatters; });
/* harmony import */ var _random_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random.formatter */ "../riba/packages/core/src/formatters/math/random.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _random_formatter__WEBPACK_IMPORTED_MODULE_0__["random"]; });

/* harmony import */ var _plus_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plus.formatter */ "../riba/packages/core/src/formatters/math/plus.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plus", function() { return _plus_formatter__WEBPACK_IMPORTED_MODULE_1__["plus"]; });

/* harmony import */ var _minus_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minus.formatter */ "../riba/packages/core/src/formatters/math/minus.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minus", function() { return _minus_formatter__WEBPACK_IMPORTED_MODULE_2__["minus"]; });

/* harmony import */ var _number_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.formatter */ "../riba/packages/core/src/formatters/math/number.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberFormatter", function() { return _number_formatter__WEBPACK_IMPORTED_MODULE_3__["numberFormatter"]; });

/* harmony import */ var _times_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./times.formatter */ "../riba/packages/core/src/formatters/math/times.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timesFormatter", function() { return _times_formatter__WEBPACK_IMPORTED_MODULE_4__["timesFormatter"]; });

/* harmony import */ var _dividedBy_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dividedBy.formatter */ "../riba/packages/core/src/formatters/math/dividedBy.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dividedBy", function() { return _dividedBy_formatter__WEBPACK_IMPORTED_MODULE_5__["dividedBy"]; });

/* harmony import */ var _modulo_formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modulo.formatter */ "../riba/packages/core/src/formatters/math/modulo.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modulo", function() { return _modulo_formatter__WEBPACK_IMPORTED_MODULE_6__["modulo"]; });

/* harmony import */ var _gcd_formatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gcd.formatter */ "../riba/packages/core/src/formatters/math/gcd.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gcd", function() { return _gcd_formatter__WEBPACK_IMPORTED_MODULE_7__["gcd"]; });

/* harmony import */ var _even_formatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./even.formatter */ "../riba/packages/core/src/formatters/math/even.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "even", function() { return _even_formatter__WEBPACK_IMPORTED_MODULE_8__["even"]; });

/* harmony import */ var _uneven_formatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./uneven.formatter */ "../riba/packages/core/src/formatters/math/uneven.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uneven", function() { return _uneven_formatter__WEBPACK_IMPORTED_MODULE_9__["uneven"]; });

/* harmony import */ var _digits_formatter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./digits.formatter */ "../riba/packages/core/src/formatters/math/digits.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "digits", function() { return _digits_formatter__WEBPACK_IMPORTED_MODULE_10__["digits"]; });

// math formatters












var mathFormatters = {
  digits: _digits_formatter__WEBPACK_IMPORTED_MODULE_10__["digits"],
  dividedBy: _dividedBy_formatter__WEBPACK_IMPORTED_MODULE_5__["dividedBy"],
  even: _even_formatter__WEBPACK_IMPORTED_MODULE_8__["even"],
  gcd: _gcd_formatter__WEBPACK_IMPORTED_MODULE_7__["gcd"],
  minus: _minus_formatter__WEBPACK_IMPORTED_MODULE_2__["minus"],
  number: _number_formatter__WEBPACK_IMPORTED_MODULE_3__["numberFormatter"],
  modulo: _modulo_formatter__WEBPACK_IMPORTED_MODULE_6__["modulo"],
  plus: _plus_formatter__WEBPACK_IMPORTED_MODULE_1__["plus"],
  random: _random_formatter__WEBPACK_IMPORTED_MODULE_0__["random"],
  times: _times_formatter__WEBPACK_IMPORTED_MODULE_4__["timesFormatter"],
  uneven: _uneven_formatter__WEBPACK_IMPORTED_MODULE_9__["uneven"]
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/math/minus.formatter.ts":
/*!********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/math/minus.formatter.ts ***!
  \********************************************************************/
/*! exports provided: minus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minus", function() { return minus; });
/**
 * Subtracts a number from an output.
 * @see https://help.shopify.com/themes/liquid/filters/math-filters#minus
 */
var minus = {
  name: 'minus',
  read: function read(a, b) {
    return Number(a) - Number(b);
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/math/modulo.formatter.ts":
/*!*********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/math/modulo.formatter.ts ***!
  \*********************************************************************/
/*! exports provided: modulo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modulo", function() { return modulo; });
/**
 * Divides an output by a number and returns the remainder.
 * @see https://help.shopify.com/themes/liquid/filters/math-filters#modulo
 */
var modulo = {
  name: 'modulo',
  read: function read(a, b) {
    return Number(a) % Number(b);
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/math/number.formatter.ts":
/*!*********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/math/number.formatter.ts ***!
  \*********************************************************************/
/*! exports provided: numberFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberFormatter", function() { return numberFormatter; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils */ "../riba/packages/core/src/services/utils.ts");

/**
 * Parse a string to number / float
 * @see http://stackoverflow.com/a/1100653/1465919
 */

var numberFormatter = {
  name: 'number',
  read: function read(str, def) {
    var num = _services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getNumber(str); // If default value is set return the default value if num is 0, null or undefined

    if (def) {
      return num ? num : def;
    }

    return num;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/math/plus.formatter.ts":
/*!*******************************************************************!*\
  !*** ../riba/packages/core/src/formatters/math/plus.formatter.ts ***!
  \*******************************************************************/
/*! exports provided: plus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus", function() { return plus; });
/**
 * Adds a number to an output.
 * @see https://help.shopify.com/themes/liquid/filters/math-filters#plus
 */
var plus = {
  name: 'plus',
  read: function read(a, b) {
    return Number(a) + Number(b);
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/math/random.formatter.ts":
/*!*********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/math/random.formatter.ts ***!
  \*********************************************************************/
/*! exports provided: random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils */ "../riba/packages/core/src/services/utils.ts");

/**
 * Get a back random value of array
 * @example <div rv-class='"["col-2", "col-3", "col-4", "col-5", "col-6"]" | parse | random'>
 */

var random = {
  name: 'random',
  read: function read(array) {
    if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isArray(array)) {
      var value = array[Math.floor(Math.random() * array.length)];
      return value;
    }

    return null;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/math/times.formatter.ts":
/*!********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/math/times.formatter.ts ***!
  \********************************************************************/
/*! exports provided: timesFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timesFormatter", function() { return timesFormatter; });
/**
 * Multiplies an output by a number.
 * @see https://help.shopify.com/themes/liquid/filters/math-filters#times
 */
var timesFormatter = {
  name: 'times',
  read: function read(a, b) {
    return Number(a) * Number(b);
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/math/uneven.formatter.ts":
/*!*********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/math/uneven.formatter.ts ***!
  \*********************************************************************/
/*! exports provided: uneven */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uneven", function() { return uneven; });
var uneven = {
  name: 'uneven',
  read: function read(num) {
    return num % 2 !== 0;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/property/contains.formatter.ts":
/*!***************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/property/contains.formatter.ts ***!
  \***************************************************************************/
/*! exports provided: contains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils */ "../riba/packages/core/src/services/utils.ts");

/**
 * True if array / string contains property / substring or containts property with value
 * @see https://gist.github.com/der-On/cdafe908847e2b882691
 */

var contains = {
  name: 'contains',
  read: function read(value, attr, search) {
    if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isString(value)) {
      return value.indexOf(attr) > -1;
    } else if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isArray(value)) {
      for (var index in value) {
        if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isDefined(value[index]) && _services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isDefined(value[index][attr])) {
          if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isUndefined(search)) {
            return true;
          } else {
            if (value[index][attr] === search) {
              return true;
            }
          }
        }
      }
    } else if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isObject(value)) {
      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          if (key === attr) {
            if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isUndefined(search)) {
              return true;
            } else {
              if (value[key][attr] === search) {
                return true;
              }
            }
          }
        }
      }
    }

    return false;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/property/empty.formatter.ts":
/*!************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/property/empty.formatter.ts ***!
  \************************************************************************/
/*! exports provided: empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _size_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./size.formatter */ "../riba/packages/core/src/formatters/property/size.formatter.ts");

var empty = {
  name: 'empty',
  read: function read(a) {
    return _size_formatter__WEBPACK_IMPORTED_MODULE_0__["size"].read(a) <= 0;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/property/first.formatter.ts":
/*!************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/property/first.formatter.ts ***!
  \************************************************************************/
/*! exports provided: first */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony import */ var _get_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.formatter */ "../riba/packages/core/src/formatters/property/get.formatter.ts");

/**
 * Array formatter to get the first element of an array
 */

var first = {
  name: 'first',
  read: function read(value) {
    return _get_formatter__WEBPACK_IMPORTED_MODULE_0__["get"].read(value, 0);
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/property/get.formatter.ts":
/*!**********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/property/get.formatter.ts ***!
  \**********************************************************************/
/*! exports provided: get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils */ "../riba/packages/core/src/services/utils.ts");

/**
 * Get property of object or array
 * @see https://gist.github.com/der-On/cdafe908847e2b882691
 */

var get = {
  name: 'get',
  read: function read(value, key) {
    if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isObject(value) || _services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isArray(value)) {
      return value[key];
    }

    if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isString(value)) {
      if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isNumber(key)) {
        return value.charAt(key);
      }
    }

    return null;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/property/index.ts":
/*!**************************************************************!*\
  !*** ../riba/packages/core/src/formatters/property/index.ts ***!
  \**************************************************************/
/*! exports provided: parse, first, last, contains, get, set, size, empty, isLast, range, propertyFormatters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertyFormatters", function() { return propertyFormatters; });
/* harmony import */ var _parse_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse.formatter */ "../riba/packages/core/src/formatters/property/parse.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse_formatter__WEBPACK_IMPORTED_MODULE_0__["parse"]; });

/* harmony import */ var _first_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first.formatter */ "../riba/packages/core/src/formatters/property/first.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _first_formatter__WEBPACK_IMPORTED_MODULE_1__["first"]; });

/* harmony import */ var _last_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./last.formatter */ "../riba/packages/core/src/formatters/property/last.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _last_formatter__WEBPACK_IMPORTED_MODULE_2__["last"]; });

/* harmony import */ var _contains_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contains.formatter */ "../riba/packages/core/src/formatters/property/contains.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _contains_formatter__WEBPACK_IMPORTED_MODULE_3__["contains"]; });

/* harmony import */ var _get_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get.formatter */ "../riba/packages/core/src/formatters/property/get.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _get_formatter__WEBPACK_IMPORTED_MODULE_4__["get"]; });

/* harmony import */ var _set_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./set.formatter */ "../riba/packages/core/src/formatters/property/set.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return _set_formatter__WEBPACK_IMPORTED_MODULE_5__["set"]; });

/* harmony import */ var _size_formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./size.formatter */ "../riba/packages/core/src/formatters/property/size.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size", function() { return _size_formatter__WEBPACK_IMPORTED_MODULE_6__["size"]; });

/* harmony import */ var _empty_formatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./empty.formatter */ "../riba/packages/core/src/formatters/property/empty.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _empty_formatter__WEBPACK_IMPORTED_MODULE_7__["empty"]; });

/* harmony import */ var _isLast_formatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isLast.formatter */ "../riba/packages/core/src/formatters/property/isLast.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLast", function() { return _isLast_formatter__WEBPACK_IMPORTED_MODULE_8__["isLast"]; });

/* harmony import */ var _range_formatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./range.formatter */ "../riba/packages/core/src/formatters/property/range.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range_formatter__WEBPACK_IMPORTED_MODULE_9__["range"]; });

// property / object / array formatters











var propertyFormatters = {
  parse: _parse_formatter__WEBPACK_IMPORTED_MODULE_0__["parse"],
  first: _first_formatter__WEBPACK_IMPORTED_MODULE_1__["first"],
  last: _last_formatter__WEBPACK_IMPORTED_MODULE_2__["last"],
  contains: _contains_formatter__WEBPACK_IMPORTED_MODULE_3__["contains"],
  get: _get_formatter__WEBPACK_IMPORTED_MODULE_4__["get"],
  set: _set_formatter__WEBPACK_IMPORTED_MODULE_5__["set"],
  size: _size_formatter__WEBPACK_IMPORTED_MODULE_6__["size"],
  empty: _empty_formatter__WEBPACK_IMPORTED_MODULE_7__["empty"],
  isLast: _isLast_formatter__WEBPACK_IMPORTED_MODULE_8__["isLast"],
  range: _range_formatter__WEBPACK_IMPORTED_MODULE_9__["range"]
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/property/isLast.formatter.ts":
/*!*************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/property/isLast.formatter.ts ***!
  \*************************************************************************/
/*! exports provided: isLast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLast", function() { return isLast; });
/**
 * Returns true if value index it the last index of the array. Returns false if it is not the last index.
 * ```
 *  <div rv-each-image="product.images" rv-hide="product.images | last %image%"></div>
 * ```
 * @see https://help.shopify.com/themes/liquid/objects/for-loops#forloop-last
 */
var isLast = {
  name: 'isLast',
  read: function read(array, i) {
    return array.length === i + 1;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/property/last.formatter.ts":
/*!***********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/property/last.formatter.ts ***!
  \***********************************************************************/
/*! exports provided: last */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony import */ var _get_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.formatter */ "../riba/packages/core/src/formatters/property/get.formatter.ts");

/**
 * Array formatter to get the last element of an array
 */

var last = {
  name: 'last',
  read: function read(array) {
    return _get_formatter__WEBPACK_IMPORTED_MODULE_0__["get"].read(array, array.length - 1);
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/property/parse.formatter.ts":
/*!************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/property/parse.formatter.ts ***!
  \************************************************************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils */ "../riba/packages/core/src/services/utils.ts");

/**
 * parse json string to object
 * @example <div rv-class='"["col-2", "col-3", "col-4", "col-5", "col-6"]" | parse | random'>
 */

var parse = {
  name: 'parse',
  read: function read(jsonString) {
    if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isString(jsonString)) {
      var object = JSON.parse(jsonString);
      return object;
    }

    return null;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/property/range.formatter.ts":
/*!************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/property/range.formatter.ts ***!
  \************************************************************************/
/*! exports provided: range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils */ "../riba/packages/core/src/services/utils.ts");

/**
 * Array formatter to get a subarray from array
 */

var range = {
  name: 'range',
  read: function read(arr, start, end) {
    start = Number(_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isNumber(start) ? start : 0);
    end = Number(_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isNumber(end) ? end : arr.length - 1);

    if (end > arr.length - 1) {
      end = arr.length - 1;
    }

    if (start > end) {
      return [];
    }

    return arr.slice(Number(start || 0), 1 + end);
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/property/set.formatter.ts":
/*!**********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/property/set.formatter.ts ***!
  \**********************************************************************/
/*! exports provided: set */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils */ "../riba/packages/core/src/services/utils.ts");

/**
 * Set property of object, array or value
 * @see https://gist.github.com/der-On/cdafe908847e2b882691
 */

var set = {
  name: 'set',
  read: function read(obj, key, value) {
    // the key is the value if value is not set
    if (!value) {
      value = key;
    }

    if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isObject(obj) || _services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isArray(obj)) {
      obj[key] = value;
    } else {
      obj = value;
    }

    return obj;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/property/size.formatter.ts":
/*!***********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/property/size.formatter.ts ***!
  \***********************************************************************/
/*! exports provided: size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/**
 * Returns the size of a string (the number of characters) or an array (the number of elements).
 * @see https://help.shopify.com/themes/liquid/filters/array-filters#size
 */
var size = {
  name: 'size',
  read: function read(value) {
    return value && value.length ? value.length : 0;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/special/args.formatter.ts":
/*!**********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/special/args.formatter.ts ***!
  \**********************************************************************/
/*! exports provided: args */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "args", function() { return args; });
/**
 * Sets arguments to a function without directly call them
 * ```html
 * <button rv-on-click="sum | args 1 2"></button>
 * ```
 * @param fn The function the event handler should call
 * @param fnArgs the parameters you wish to get called the function with
 */
var args = {
  name: 'args',
  read: function read(fn) {
    var _this = this;

    for (var _len = arguments.length, fnArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      fnArgs[_key - 1] = arguments[_key];
    }

    return function (event, scope, el, binding) {
      // append the event handler args to passed args
      fnArgs.push(event);
      fnArgs.push(scope);
      fnArgs.push(el);
      fnArgs.push(binding);
      return fn.apply(_this, fnArgs);
    };
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/special/boolean.formatter.ts":
/*!*************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/special/boolean.formatter.ts ***!
  \*************************************************************************/
/*! exports provided: booleanFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "booleanFormatter", function() { return booleanFormatter; });
/**
 * Parse a string to boolean
 */
var booleanFormatter = {
  name: 'boolean',
  read: function read(value) {
    return value === 'true' || value === true;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/special/call.formatter.ts":
/*!**********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/special/call.formatter.ts ***!
  \**********************************************************************/
/*! exports provided: call */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return call; });
// babel misinterprets the "this" fake parameter, so we define it in this interfaces

/**
 * Calls a function with arguments
 * @param fn The function you wish to call
 * @param args the parameters you wish to call the function with
 */
var call = {
  name: 'call',
  read: function read(fn) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(this, args);
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/special/currency.formatter.ts":
/*!**************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/special/currency.formatter.ts ***!
  \**************************************************************************/
/*! exports provided: currency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currency", function() { return currency; });
/**
 * Formats a number as a currency (ie $1,234.56). When no currency symbol is provided, default symbol for current locale is used.
 * @param amount Input to filter.
 * @param symbol Currency symbol or identifier to be displayed. (optional)
 * @see https://docs.angularjs.org/api/ng/filter/currency
 */
var currency = {
  name: 'currency',
  read: function read(amount, symbol) {
    var result = amount.toFixed(2).toString().replace('.', ',');

    if (symbol) {
      result = result + symbol;
    }

    return result;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/special/debug.formatter.ts":
/*!***********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/special/debug.formatter.ts ***!
  \***********************************************************************/
/*! exports provided: debug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony import */ var _vendors_debug_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendors/debug.module */ "../riba/packages/core/src/vendors/debug.module.ts");


var _debug = Object(_vendors_debug_module__WEBPACK_IMPORTED_MODULE_0__["Debug"])('formatter');

var debug = {
  name: 'debug',
  read: function read(toPrint) {
    _debug(toPrint);

    return toPrint;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/special/default.formatter.ts":
/*!*************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/special/default.formatter.ts ***!
  \*************************************************************************/
/*! exports provided: defaultBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBinder", function() { return defaultBinder; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils */ "../riba/packages/core/src/services/utils.ts");

/**
 * Set default value
 * @see https://gist.github.com/der-On/cdafe908847e2b882691
 */

var defaultBinder = {
  name: 'default',
  read: function read(value, defaultValue) {
    if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isDefined(value)) {
      if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isString(value)) {
        if (value.length > 0) {
          return value;
        } else {
          return defaultValue;
        }
      }

      return value;
    }

    return defaultValue;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/special/index.ts":
/*!*************************************************************!*\
  !*** ../riba/packages/core/src/formatters/special/index.ts ***!
  \*************************************************************/
/*! exports provided: args, booleanFormatter, debug, defaultBinder, call, currency, json, specialFormatters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specialFormatters", function() { return specialFormatters; });
/* harmony import */ var _args_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./args.formatter */ "../riba/packages/core/src/formatters/special/args.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "args", function() { return _args_formatter__WEBPACK_IMPORTED_MODULE_0__["args"]; });

/* harmony import */ var _boolean_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boolean.formatter */ "../riba/packages/core/src/formatters/special/boolean.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "booleanFormatter", function() { return _boolean_formatter__WEBPACK_IMPORTED_MODULE_1__["booleanFormatter"]; });

/* harmony import */ var _debug_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debug.formatter */ "../riba/packages/core/src/formatters/special/debug.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return _debug_formatter__WEBPACK_IMPORTED_MODULE_2__["debug"]; });

/* harmony import */ var _default_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default.formatter */ "../riba/packages/core/src/formatters/special/default.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultBinder", function() { return _default_formatter__WEBPACK_IMPORTED_MODULE_3__["defaultBinder"]; });

/* harmony import */ var _call_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./call.formatter */ "../riba/packages/core/src/formatters/special/call.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _call_formatter__WEBPACK_IMPORTED_MODULE_4__["call"]; });

/* harmony import */ var _currency_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currency.formatter */ "../riba/packages/core/src/formatters/special/currency.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currency", function() { return _currency_formatter__WEBPACK_IMPORTED_MODULE_5__["currency"]; });

/* harmony import */ var _json_formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./json.formatter */ "../riba/packages/core/src/formatters/special/json.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "json", function() { return _json_formatter__WEBPACK_IMPORTED_MODULE_6__["json"]; });

// special helper formatters








var specialFormatters = {
  args: _args_formatter__WEBPACK_IMPORTED_MODULE_0__["args"],
  boolean: _boolean_formatter__WEBPACK_IMPORTED_MODULE_1__["booleanFormatter"],
  debug: _debug_formatter__WEBPACK_IMPORTED_MODULE_2__["debug"],
  default: _default_formatter__WEBPACK_IMPORTED_MODULE_3__["defaultBinder"],
  call: _call_formatter__WEBPACK_IMPORTED_MODULE_4__["call"],
  currency: _currency_formatter__WEBPACK_IMPORTED_MODULE_5__["currency"],
  json: _json_formatter__WEBPACK_IMPORTED_MODULE_6__["json"]
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/special/json.formatter.ts":
/*!**********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/special/json.formatter.ts ***!
  \**********************************************************************/
/*! exports provided: json */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "json", function() { return json; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Converts a string into JSON format.
 * @see https://help.shopify.com/themes/liquid/filters/additional-filters#json
 */
var json = {
  name: 'json',
  read: function read(object) {
    var replaceSingleQuate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var result = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(object);

    if (replaceSingleQuate && result) {
      return result.replace(/'/g, "&#39;");
    }

    return result;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/string/append.formatter.ts":
/*!***********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/string/append.formatter.ts ***!
  \***********************************************************************/
/*! exports provided: append */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/**
 * Appends characters to a string.
 * @see https://help.shopify.com/themes/liquid/filters/string-filters#append
 */
var append = {
  name: 'append',
  read: function read(a, b) {
    return a + b;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/string/downcase.formatter.ts":
/*!*************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/string/downcase.formatter.ts ***!
  \*************************************************************************/
/*! exports provided: downcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downcase", function() { return downcase; });
/**
 * Converts a string into lowercase.
 * @see https://help.shopify.com/themes/liquid/filters/string-filters#downcase
 */
var downcase = {
  name: 'downcase',
  read: function read(str) {
    return str.toLowerCase();
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/string/filled.formatter.ts":
/*!***********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/string/filled.formatter.ts ***!
  \***********************************************************************/
/*! exports provided: filled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filled", function() { return filled; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils */ "../riba/packages/core/src/services/utils.ts");
/* harmony import */ var _property_empty_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../property/empty.formatter */ "../riba/packages/core/src/formatters/property/empty.formatter.ts");


/**
 * Check if value is a string and not empty
 */

var filled = {
  name: 'filled',
  read: function read(str) {
    return _services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isString(str) && !_property_empty_formatter__WEBPACK_IMPORTED_MODULE_1__["empty"].read(str.replace(/\s/g, ''));
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/string/handleize.formatter.ts":
/*!**************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/string/handleize.formatter.ts ***!
  \**************************************************************************/
/*! exports provided: handleize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleize", function() { return handleize; });
/* harmony import */ var _strip_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strip.formatter */ "../riba/packages/core/src/formatters/string/strip.formatter.ts");
/* harmony import */ var _downcase_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./downcase.formatter */ "../riba/packages/core/src/formatters/string/downcase.formatter.ts");


/**
 * Formats a string into a handle.
 * @see https://help.shopify.com/themes/liquid/filters/string-filters#handle-handleize
 */

var handleize = {
  name: 'handleize',
  read: function read(str) {
    str = _strip_formatter__WEBPACK_IMPORTED_MODULE_0__["strip"].read(str);
    str = str.replace(/[^\w\s]/gi, ''); // http://stackoverflow.com/a/4374890

    str = _downcase_formatter__WEBPACK_IMPORTED_MODULE_1__["downcase"].read(str);
    return str.replace(/ /g, '-');
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/string/index.ts":
/*!************************************************************!*\
  !*** ../riba/packages/core/src/formatters/string/index.ts ***!
  \************************************************************/
/*! exports provided: append, downcase, filled, handleize, isString, match, pluralize, prepend, upcase, replace, replaceFirst, slice, strip, stripHtml, stringFormatter, stringFormatters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringFormatters", function() { return stringFormatters; });
/* harmony import */ var _append_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append.formatter */ "../riba/packages/core/src/formatters/string/append.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "append", function() { return _append_formatter__WEBPACK_IMPORTED_MODULE_0__["append"]; });

/* harmony import */ var _downcase_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./downcase.formatter */ "../riba/packages/core/src/formatters/string/downcase.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downcase", function() { return _downcase_formatter__WEBPACK_IMPORTED_MODULE_1__["downcase"]; });

/* harmony import */ var _filled_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filled.formatter */ "../riba/packages/core/src/formatters/string/filled.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filled", function() { return _filled_formatter__WEBPACK_IMPORTED_MODULE_2__["filled"]; });

/* harmony import */ var _handleize_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleize.formatter */ "../riba/packages/core/src/formatters/string/handleize.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleize", function() { return _handleize_formatter__WEBPACK_IMPORTED_MODULE_3__["handleize"]; });

/* harmony import */ var _isString_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isString.formatter */ "../riba/packages/core/src/formatters/string/isString.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _isString_formatter__WEBPACK_IMPORTED_MODULE_4__["isString"]; });

/* harmony import */ var _match_formatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./match.formatter */ "../riba/packages/core/src/formatters/string/match.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "match", function() { return _match_formatter__WEBPACK_IMPORTED_MODULE_5__["match"]; });

/* harmony import */ var _pluralize_formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pluralize.formatter */ "../riba/packages/core/src/formatters/string/pluralize.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluralize", function() { return _pluralize_formatter__WEBPACK_IMPORTED_MODULE_6__["pluralize"]; });

/* harmony import */ var _prepend_formatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prepend.formatter */ "../riba/packages/core/src/formatters/string/prepend.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return _prepend_formatter__WEBPACK_IMPORTED_MODULE_7__["prepend"]; });

/* harmony import */ var _upcase_formatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upcase.formatter */ "../riba/packages/core/src/formatters/string/upcase.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "upcase", function() { return _upcase_formatter__WEBPACK_IMPORTED_MODULE_8__["upcase"]; });

/* harmony import */ var _replace_formatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./replace.formatter */ "../riba/packages/core/src/formatters/string/replace.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return _replace_formatter__WEBPACK_IMPORTED_MODULE_9__["replace"]; });

/* harmony import */ var _replace_first_formatter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./replace-first.formatter */ "../riba/packages/core/src/formatters/string/replace-first.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceFirst", function() { return _replace_first_formatter__WEBPACK_IMPORTED_MODULE_10__["replaceFirst"]; });

/* harmony import */ var _slice_formatter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slice.formatter */ "../riba/packages/core/src/formatters/string/slice.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return _slice_formatter__WEBPACK_IMPORTED_MODULE_11__["slice"]; });

/* harmony import */ var _strip_formatter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./strip.formatter */ "../riba/packages/core/src/formatters/string/strip.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strip", function() { return _strip_formatter__WEBPACK_IMPORTED_MODULE_12__["strip"]; });

/* harmony import */ var _strip_html_formatter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./strip-html.formatter */ "../riba/packages/core/src/formatters/string/strip-html.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripHtml", function() { return _strip_html_formatter__WEBPACK_IMPORTED_MODULE_13__["stripHtml"]; });

/* harmony import */ var _string_formatter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./string.formatter */ "../riba/packages/core/src/formatters/string/string.formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringFormatter", function() { return _string_formatter__WEBPACK_IMPORTED_MODULE_14__["stringFormatter"]; });

// string formatters
















var stringFormatters = {
  append: _append_formatter__WEBPACK_IMPORTED_MODULE_0__["append"],
  downcase: _downcase_formatter__WEBPACK_IMPORTED_MODULE_1__["downcase"],
  filled: _filled_formatter__WEBPACK_IMPORTED_MODULE_2__["filled"],
  handleize: _handleize_formatter__WEBPACK_IMPORTED_MODULE_3__["handleize"],
  isString: _isString_formatter__WEBPACK_IMPORTED_MODULE_4__["isString"],
  match: _match_formatter__WEBPACK_IMPORTED_MODULE_5__["match"],
  pluralize: _pluralize_formatter__WEBPACK_IMPORTED_MODULE_6__["pluralize"],
  prepend: _prepend_formatter__WEBPACK_IMPORTED_MODULE_7__["prepend"],
  upcase: _upcase_formatter__WEBPACK_IMPORTED_MODULE_8__["upcase"],
  replace: _replace_formatter__WEBPACK_IMPORTED_MODULE_9__["replace"],
  'replace-first': _replace_first_formatter__WEBPACK_IMPORTED_MODULE_10__["replaceFirst"],
  slice: _slice_formatter__WEBPACK_IMPORTED_MODULE_11__["slice"],
  strip: _strip_formatter__WEBPACK_IMPORTED_MODULE_12__["strip"],
  'strip-html': _strip_html_formatter__WEBPACK_IMPORTED_MODULE_13__["stripHtml"],
  'string': _string_formatter__WEBPACK_IMPORTED_MODULE_14__["stringFormatter"]
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/string/isString.formatter.ts":
/*!*************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/string/isString.formatter.ts ***!
  \*************************************************************************/
/*! exports provided: isString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils */ "../riba/packages/core/src/services/utils.ts");

/**
 * Check if value is a string
 */

var isString = {
  name: 'isString',
  read: function read(str) {
    return _services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isString(str);
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/string/match.formatter.ts":
/*!**********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/string/match.formatter.ts ***!
  \**********************************************************************/
/*! exports provided: match */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
var match = {
  name: 'match',
  read: function read(a, regexp, flags) {
    return a.match(new RegExp(regexp, flags));
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/string/pluralize.formatter.ts":
/*!**************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/string/pluralize.formatter.ts ***!
  \**************************************************************************/
/*! exports provided: pluralize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluralize", function() { return pluralize; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils */ "../riba/packages/core/src/services/utils.ts");

var pluralize = {
  name: 'pluralize',
  read: function read(input, singular, plural) {
    if (plural === null) {
      plural = singular + 's';
    }

    if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isArray(input)) {
      input = input.length;
    }

    if (input === 1) {
      return singular;
    } else {
      return plural;
    }
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/string/prepend.formatter.ts":
/*!************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/string/prepend.formatter.ts ***!
  \************************************************************************/
/*! exports provided: prepend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/**
 * Prepends characters to a string.
 * @see https://help.shopify.com/themes/liquid/filters/string-filters#prepend
 */
var prepend = {
  name: 'prepend',
  read: function read(a, b) {
    return b + a;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/string/replace-first.formatter.ts":
/*!******************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/string/replace-first.formatter.ts ***!
  \******************************************************************************/
/*! exports provided: replaceFirst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceFirst", function() { return replaceFirst; });
/* tslint:disable:variable-name */

/**
 * Replaces the first occurrence of a string with a substring.
 * @see https://help.shopify.com/en/themes/liquid/filters/string-filters#replace_first
 */
var replaceFirst = {
  name: 'replace-first',
  read: function read(str, value, replaceValue) {
    return str.replace(value, replaceValue);
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/string/replace.formatter.ts":
/*!************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/string/replace.formatter.ts ***!
  \************************************************************************/
/*! exports provided: replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/**
 * Replaces all occurrences of a string with a substring.
 * @see https://help.shopify.com/en/themes/liquid/filters/string-filters#replace
 */
var replace = {
  name: 'replace',
  read: function read(str, value, replaceValue) {
    return str.replace(new RegExp(value, 'g'), replaceValue);
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/string/slice.formatter.ts":
/*!**********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/string/slice.formatter.ts ***!
  \**********************************************************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/**
 * The `slice` filter returns a substring, starting at the specified index.
 * An optional second parameter can be passed to specify the length of the substring.
 * If no second parameter is given, a substring of one character will be returned.
 * @see https://help.shopify.com/themes/liquid/filters/string-filters#slice
 */
var slice = {
  name: 'slice',
  read: function read(value, start, end) {
    return value.slice(start, end);
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/string/string.formatter.ts":
/*!***********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/string/string.formatter.ts ***!
  \***********************************************************************/
/*! exports provided: stringFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringFormatter", function() { return stringFormatter; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils */ "../riba/packages/core/src/services/utils.ts");

/**
 * Parse a value to string
 * @param value The value you want to parse to string
 * @param def Default value if value is undefined
 */

var stringFormatter = {
  name: 'string',
  read: function read(value, def) {
    // If value is an array convert each value in array to string
    if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isArray(value)) {
      for (var i in value) {
        if (value[i]) {
          value[i] = _services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getString(value[i]);
        }
      }
    } else if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isObject(value)) {
      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          value[key] = _services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getString(value[key]);
        }
      }
    } else {
      value = _services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getString(value);
    } // If default value is set return the default value if num is 0, null or undefined


    if (def) {
      return value ? value : def;
    }

    return value;
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/string/strip-html.formatter.ts":
/*!***************************************************************************!*\
  !*** ../riba/packages/core/src/formatters/string/strip-html.formatter.ts ***!
  \***************************************************************************/
/*! exports provided: stripHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripHtml", function() { return stripHtml; });
/* tslint:disable:variable-name */

/**
 * Strips all HTML tags from a string.
 * @see https://help.shopify.com/en/themes/liquid/filters/string-filters#strip_html
 */
var stripHtml = {
  name: 'stripHtml',
  read: function read(html) {
    var tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/string/strip.formatter.ts":
/*!**********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/string/strip.formatter.ts ***!
  \**********************************************************************/
/*! exports provided: strip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strip", function() { return strip; });
/**
 * Strips tabs, spaces, and newlines (all whitespace) from the left and right side of a string.
 * @see https://help.shopify.com/themes/liquid/filters/string-filters#strip
 */
var strip = {
  name: 'strip',
  read: function read(str) {
    return str.trim();
  }
};

/***/ }),

/***/ "../riba/packages/core/src/formatters/string/upcase.formatter.ts":
/*!***********************************************************************!*\
  !*** ../riba/packages/core/src/formatters/string/upcase.formatter.ts ***!
  \***********************************************************************/
/*! exports provided: upcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upcase", function() { return upcase; });
/**
 * Converts a string into uppercase.
 * @see https://help.shopify.com/themes/liquid/filters/string-filters#upcase
 */
var upcase = {
  name: 'upcase',
  read: function read(str) {
    return str.toUpperCase();
  }
};

/***/ }),

/***/ "../riba/packages/core/src/index.ts":
/*!******************************************!*\
  !*** ../riba/packages/core/src/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ "../riba/packages/core/src/interfaces/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _interfaces__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _interfaces__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vendors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendors */ "../riba/packages/core/src/vendors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return _vendors__WEBPACK_IMPORTED_MODULE_1__["Debug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IDebugger", function() { return _vendors__WEBPACK_IMPORTED_MODULE_1__["IDebugger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JQuery", function() { return _vendors__WEBPACK_IMPORTED_MODULE_1__["JQuery"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "../riba/packages/core/src/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindersService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["BindersService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["ComponentService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["EventDispatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatterService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["FormatterService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["Utils"]; });

/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adapter */ "../riba/packages/core/src/adapter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Adapter", function() { return _adapter__WEBPACK_IMPORTED_MODULE_3__["Adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _adapter__WEBPACK_IMPORTED_MODULE_3__["adapter"]; });

/* harmony import */ var _binders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binders */ "../riba/packages/core/src/binders/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animateStarBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["animateStarBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["assignBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blockBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["blockBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["classBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkedBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["checkedBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classStarBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["classStarBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssStarBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["cssStarBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enabledBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["enabledBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disabledBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["disabledBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onStarBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["onStarBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClassBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["removeClassBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ifBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["ifBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eachStarBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["eachStarBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["htmlBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["hideBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["showBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["textBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["valueBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "starBinder", function() { return _binders__WEBPACK_IMPORTED_MODULE_4__["starBinder"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "../riba/packages/core/src/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _components__WEBPACK_IMPORTED_MODULE_5__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RibaComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_5__["RibaComponent"]; });

/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatters */ "../riba/packages/core/src/formatters/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "and", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["and"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "between", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["between"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "egt", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["egt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["eq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gt", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["gt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ne", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["ne"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lt", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["lt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elt", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["elt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "or", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["or"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["not"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareFormatters", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["compareFormatters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["random"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plus", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["plus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minus", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["minus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberFormatter", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["numberFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timesFormatter", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["timesFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dividedBy", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["dividedBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modulo", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["modulo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gcd", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["gcd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "even", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["even"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uneven", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["uneven"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "digits", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["digits"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mathFormatters", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["mathFormatters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["first"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["last"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["set"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["size"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLast", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["isLast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propertyFormatters", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["propertyFormatters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "args", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["args"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "booleanFormatter", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["booleanFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["debug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultBinder", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["defaultBinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["call"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currency", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["currency"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "json", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["json"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specialFormatters", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["specialFormatters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "append", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["append"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downcase", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["downcase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filled", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["filled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleize", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["handleize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "match", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["match"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluralize", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["pluralize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["prepend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "upcase", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["upcase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceFirst", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["replaceFirst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["slice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strip", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["strip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripHtml", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["stripHtml"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringFormatter", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["stringFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringFormatters", function() { return _formatters__WEBPACK_IMPORTED_MODULE_6__["stringFormatters"]; });

/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./binding */ "../riba/packages/core/src/binding.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return _binding__WEBPACK_IMPORTED_MODULE_7__["Binding"]; });

/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers */ "../riba/packages/core/src/parsers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRIMITIVE", function() { return _parsers__WEBPACK_IMPORTED_MODULE_8__["PRIMITIVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEYPATH", function() { return _parsers__WEBPACK_IMPORTED_MODULE_8__["KEYPATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEXT", function() { return _parsers__WEBPACK_IMPORTED_MODULE_8__["TEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BINDING", function() { return _parsers__WEBPACK_IMPORTED_MODULE_8__["BINDING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseType", function() { return _parsers__WEBPACK_IMPORTED_MODULE_8__["parseType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseTemplate", function() { return _parsers__WEBPACK_IMPORTED_MODULE_8__["parseTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseNode", function() { return _parsers__WEBPACK_IMPORTED_MODULE_8__["parseNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDeclaration", function() { return _parsers__WEBPACK_IMPORTED_MODULE_8__["parseDeclaration"]; });

/* harmony import */ var _riba__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./riba */ "../riba/packages/core/src/riba.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Riba", function() { return _riba__WEBPACK_IMPORTED_MODULE_9__["Riba"]; });

/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view */ "../riba/packages/core/src/view.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _view__WEBPACK_IMPORTED_MODULE_10__["View"]; });

/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core.module */ "../riba/packages/core/src/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_11__["coreModule"]; });














/***/ }),

/***/ "../riba/packages/core/src/interfaces/adapter.ts":
/*!*******************************************************!*\
  !*** ../riba/packages/core/src/interfaces/adapter.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../riba/packages/core/src/interfaces/binder.ts":
/*!******************************************************!*\
  !*** ../riba/packages/core/src/interfaces/binder.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../riba/packages/core/src/interfaces/binder.wrapper.ts":
/*!**************************************************************!*\
  !*** ../riba/packages/core/src/interfaces/binder.wrapper.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../riba/packages/core/src/interfaces/binders.ts":
/*!*******************************************************!*\
  !*** ../riba/packages/core/src/interfaces/binders.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../riba/packages/core/src/interfaces/binding.ts":
/*!*******************************************************!*\
  !*** ../riba/packages/core/src/interfaces/binding.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../riba/packages/core/src/interfaces/component.wrapper.ts":
/*!*****************************************************************!*\
  !*** ../riba/packages/core/src/interfaces/component.wrapper.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../riba/packages/core/src/interfaces/components.ts":
/*!**********************************************************!*\
  !*** ../riba/packages/core/src/interfaces/components.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../riba/packages/core/src/interfaces/formatter.ts":
/*!*********************************************************!*\
  !*** ../riba/packages/core/src/interfaces/formatter.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../riba/packages/core/src/interfaces/formatters.ts":
/*!**********************************************************!*\
  !*** ../riba/packages/core/src/interfaces/formatters.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../riba/packages/core/src/interfaces/index.ts":
/*!*****************************************************!*\
  !*** ../riba/packages/core/src/interfaces/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "../riba/packages/core/src/interfaces/adapter.ts");
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_adapter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _adapter__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _adapter__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binder */ "../riba/packages/core/src/interfaces/binder.ts");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_binder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _binder__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _binder__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _binder_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binder.wrapper */ "../riba/packages/core/src/interfaces/binder.wrapper.ts");
/* harmony import */ var _binder_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_binder_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _binder_wrapper__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _binder_wrapper__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _binders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binders */ "../riba/packages/core/src/interfaces/binders.ts");
/* harmony import */ var _binders__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_binders__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _binders__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _binders__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binding */ "../riba/packages/core/src/interfaces/binding.ts");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_binding__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _binding__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _binding__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _component_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component.wrapper */ "../riba/packages/core/src/interfaces/component.wrapper.ts");
/* harmony import */ var _component_wrapper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_component_wrapper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _component_wrapper__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _component_wrapper__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "../riba/packages/core/src/interfaces/components.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _components__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _components__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formatter */ "../riba/packages/core/src/interfaces/formatter.ts");
/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_formatter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _formatter__WEBPACK_IMPORTED_MODULE_7__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _formatter__WEBPACK_IMPORTED_MODULE_7__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formatters */ "../riba/packages/core/src/interfaces/formatters.ts");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_formatters__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _formatters__WEBPACK_IMPORTED_MODULE_8__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _formatters__WEBPACK_IMPORTED_MODULE_8__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _module_element_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module-element-type */ "../riba/packages/core/src/interfaces/module-element-type.ts");
/* harmony import */ var _module_element_type__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_module_element_type__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _module_element_type__WEBPACK_IMPORTED_MODULE_9__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _module_element_type__WEBPACK_IMPORTED_MODULE_9__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./module */ "../riba/packages/core/src/interfaces/module.ts");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_module__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _module__WEBPACK_IMPORTED_MODULE_10__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _module__WEBPACK_IMPORTED_MODULE_10__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./observer */ "../riba/packages/core/src/interfaces/observer.ts");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_observer__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _observer__WEBPACK_IMPORTED_MODULE_11__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _observer__WEBPACK_IMPORTED_MODULE_11__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _riba__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./riba */ "../riba/packages/core/src/interfaces/riba.ts");
/* harmony import */ var _riba__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_riba__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _riba__WEBPACK_IMPORTED_MODULE_12__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _riba__WEBPACK_IMPORTED_MODULE_12__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services */ "../riba/packages/core/src/interfaces/services.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_services__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _services__WEBPACK_IMPORTED_MODULE_13__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _services__WEBPACK_IMPORTED_MODULE_13__[key]; }) }(__WEBPACK_IMPORT_KEY__));















/***/ }),

/***/ "../riba/packages/core/src/interfaces/module-element-type.ts":
/*!*******************************************************************!*\
  !*** ../riba/packages/core/src/interfaces/module-element-type.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../riba/packages/core/src/interfaces/module.ts":
/*!******************************************************!*\
  !*** ../riba/packages/core/src/interfaces/module.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../riba/packages/core/src/interfaces/observer.ts":
/*!********************************************************!*\
  !*** ../riba/packages/core/src/interfaces/observer.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../riba/packages/core/src/interfaces/riba.ts":
/*!****************************************************!*\
  !*** ../riba/packages/core/src/interfaces/riba.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../riba/packages/core/src/interfaces/services.ts":
/*!********************************************************!*\
  !*** ../riba/packages/core/src/interfaces/services.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../riba/packages/core/src/observer.ts":
/*!*********************************************!*\
  !*** ../riba/packages/core/src/observer.ts ***!
  \*********************************************/
/*! exports provided: Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/utils */ "../riba/packages/core/src/services/utils.ts");






var Observer =
/*#__PURE__*/
function () {
  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Observer, null, [{
    key: "updateOptions",
    value: function updateOptions(options) {
      if (!options.adapters) {
        throw new Error('adapters are required!');
      }

      if (!options.rootInterface) {
        throw new Error('rootInterface is required!');
      }

      Observer.adapters = options.adapters;
      Observer.interfaces = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(Observer.adapters);
      Observer.rootInterface = options.rootInterface;
    }
    /**
     * Tokenizes the provided keypath string into interface + path tokens for the
     * observer to work with.
     */

  }, {
    key: "tokenize",
    value: function tokenize(keypath, root) {
      var tokens = [];
      var current = {
        i: root,
        path: ''
      };
      var index;
      var chr;

      for (index = 0; index < keypath.length; index++) {
        chr = keypath.charAt(index);

        if (!!~Observer.interfaces.indexOf(chr)) {
          tokens.push(current);
          current = {
            i: chr,
            path: ''
          };
        } else {
          current.path += chr;
        }
      }

      tokens.push(current);
      return tokens;
    }
  }]);

  /**
   * Constructs a new keypath observer and kicks things off.
   * @param obj
   * @param keypath
   * @param callback
   */
  function Observer(obj, keypath, callback) {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Observer);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "keypath", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "callback", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "objectPath", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "obj", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "target", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "key", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "tokens", void 0);

    this.keypath = keypath;
    this.callback = callback;
    this.objectPath = [];
    var parseResult = this.parse();
    this.key = parseResult.key;
    this.tokens = parseResult.tokens;
    this.obj = this.getRootObject(obj);
    this.target = this.realize();

    if (_services_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isObject(this.target)) {
      this.set(true, this.key, this.target, this.callback);
    }
  }
  /**
   * Parses the keypath using the interfaces defined on the view. Sets variables
   * for the tokenized keypath as well as the end key.
   */


  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Observer, [{
    key: "parse",
    value: function parse() {
      var path;
      var root;

      if (!Observer.interfaces || !Observer.interfaces.length) {
        throw new Error('[Observer] Must define at least one adapter interface.');
      }

      if (!!~Observer.interfaces.indexOf(this.keypath[0])) {
        root = this.keypath[0];
        path = this.keypath.substr(1);
      } else {
        root = Observer.rootInterface;
        path = this.keypath;
      }

      this.tokens = Observer.tokenize(path, root);

      if (!this.tokens.length) {
        throw new Error('[Observer] No tokens');
      }

      this.key = this.tokens.pop();
      return {
        key: this.key,
        tokens: this.tokens
      };
    }
    /**
     * Realizes the full keypath, attaching observers for every key and correcting
     * old observers to any changed objects in the keypath.
     */

  }, {
    key: "realize",
    value: function realize() {
      var current = this.obj;
      var unreached = -1;
      var prev;
      var token;

      for (var index = 0; index < this.tokens.length; index++) {
        token = this.tokens[index];

        if (_services_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isObject(current)) {
          if (typeof this.objectPath[index] !== 'undefined') {
            prev = this.objectPath[index];

            if (current !== prev) {
              this.set(false, token, prev, this);
              this.set(true, token, current, this);
              this.objectPath[index] = current;
            }
          } else {
            this.set(true, token, current, this);
            this.objectPath[index] = current;
          }

          current = this.get(token, current);
        } else {
          if (unreached === -1) {
            unreached = index;
          }

          prev = this.objectPath[index];

          if (prev) {
            this.set(false, token, prev, this);
          }
        }
      }

      if (unreached !== -1) {
        this.objectPath.splice(unreached);
      }

      return current;
    }
    /**
     * Updates the keypath. This is called when any intermediary key is changed.
     */

  }, {
    key: "sync",
    value: function sync() {
      var next;
      var oldValue;
      var newValue;
      next = this.realize();

      if (next !== this.target) {
        if (_services_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isObject(this.target)) {
          this.set(false, this.key, this.target, this.callback);
        }

        if (_services_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isObject(next)) {
          this.set(true, this.key, next, this.callback);
        }

        oldValue = this.value();
        this.target = next;
        newValue = this.value();

        if (newValue !== oldValue || _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(newValue)) {
          this.callback.sync();
        }
      } else if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(next)) {
        this.callback.sync();
      }
    }
    /**
     * Reads the current end value of the observed keypath. Returns undefined if
     * the full keypath is unreachable.
     */

  }, {
    key: "value",
    value: function value() {
      if (_services_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isObject(this.target)) {
        return this.get(this.key, this.target);
      }
    }
    /**
     * Sets the current end value of the observed keypath. Calling setValue when
     *  the full keypath is unreachable is a no-op.
     * @param value
     */

  }, {
    key: "setValue",
    value: function setValue(value) {
      if (_services_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isObject(this.target)) {
        Observer.adapters[this.key.i].set(this.target, this.key.path, value);
      }
    }
    /**
     * Gets the provided key on an object.
     * @param key
     * @param obj
     */

  }, {
    key: "get",
    value: function get(key, obj) {
      return Observer.adapters[key.i].get(obj, key.path);
    }
    /**
     * Observes or unobserves a callback on the object using the provided key.
     * @param active
     * @param key
     * @param obj
     * @param callback
     */

  }, {
    key: "set",
    value: function set(active, key, obj, callback) {
      if (active) {
        Observer.adapters[key.i].observe(obj, key.path, callback);
      } else {
        Observer.adapters[key.i].unobserve(obj, key.path, callback);
      }
    }
    /**
     * Unobserves the entire keypath.
     */

  }, {
    key: "unobserve",
    value: function unobserve() {
      var obj;
      var token;

      for (var index = 0; index < this.tokens.length; index++) {
        token = this.tokens[index];
        obj = this.objectPath[index];

        if (obj) {
          this.set(false, token, obj, this);
        }
      }

      if (_services_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isObject(this.target)) {
        this.set(false, this.key, this.target, this.callback);
      }
    }
    /**
     * traverse the scope chain to find the scope which has the root property
     * if the property is not found in chain, returns the root scope
     * @param obj
     */

  }, {
    key: "getRootObject",
    value: function getRootObject(obj) {
      var rootProp;
      var current;

      if (!obj.$parent) {
        return obj;
      }

      if (this.tokens.length) {
        rootProp = this.tokens[0].path;
      } else {
        rootProp = this.key.path;
      }

      current = obj;

      while (current.$parent && current[rootProp] === undefined) {
        current = current.$parent;
      }

      return current;
    }
  }]);

  return Observer;
}();

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(Observer, "adapters", void 0);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(Observer, "interfaces", void 0);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(Observer, "rootInterface", void 0);

/***/ }),

/***/ "../riba/packages/core/src/parsers.ts":
/*!********************************************!*\
  !*** ../riba/packages/core/src/parsers.ts ***!
  \********************************************/
/*! exports provided: PRIMITIVE, KEYPATH, TEXT, BINDING, parseType, parseTemplate, parseNode, parseDeclaration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMITIVE", function() { return PRIMITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYPATH", function() { return KEYPATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT", function() { return TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BINDING", function() { return BINDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseType", function() { return parseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTemplate", function() { return parseTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseNode", function() { return parseNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDeclaration", function() { return parseDeclaration; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/utils */ "../riba/packages/core/src/services/utils.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "../riba/packages/core/src/view.ts");


/**
 * Used also in parsers.parseType
 * TODO outsource
 */

var PRIMITIVE = 0;
var KEYPATH = 1;
var TEXT = 0;
var BINDING = 1;
var QUOTED_STR = /^'.*'$|^".*"$/; // regex to test if string is wrapped in " or '

var DECLARATION_SPLIT = /((?:'[^']*')*(?:(?:[^\|']*(?:'[^']*')+[^\|']*)+|[^\|]+))|^$/g;
/**
 * Parser and tokenizer for getting the type and value from a string.
 * @param string
 */

function parseType(str) {
  var type = PRIMITIVE;
  var value = str;

  if (str === undefined) {
    return {
      type: type,
      value: undefined
    };
  }

  if (QUOTED_STR.test(str)) {
    value = str.slice(1, -1);
  } else if (str === 'true') {
    value = true;
  } else if (str === 'false') {
    value = false;
  } else if (str === 'null') {
    value = null;
  } else if (str === 'undefined') {
    value = undefined;
  } else if (str === '') {
    value = undefined;
  } else if (!isNaN(Number(str))) {
    value = Number(str);
  } else if (_services_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].isJson(str)) {
    value = JSON.parse(str);
  } else {
    type = KEYPATH;
  }

  return {
    type: type,
    value: value
  };
}

/**
 * Template parser and tokenizer for {{ mustache-style }} text content bindings.
 * Parses the template and returns a set of tokens, separating static portions
 * of text from binding declarations.
 * @param template
 * @param delimiters
 */
function parseTemplate(template, delimiters) {
  var tokens = null;
  var length = template.length;
  var index = 0;
  var lastIndex = 0;
  var open = delimiters[0];
  var close = delimiters[1];

  while (lastIndex < length) {
    index = template.indexOf(open, lastIndex);

    if (index < 0) {
      if (tokens) {
        tokens.push({
          type: TEXT,
          value: template.slice(lastIndex)
        });
      }

      break;
    } else {
      tokens = tokens || [];

      if (index > 0 && lastIndex < index) {
        tokens.push({
          type: TEXT,
          value: template.slice(lastIndex, index)
        });
      }

      lastIndex = index + open.length;
      index = template.indexOf(close, lastIndex);

      if (index < 0) {
        var substring = template.slice(lastIndex - close.length);
        var lastToken = tokens[tokens.length - 1];

        if (lastToken && lastToken.type === TEXT) {
          lastToken.value += substring;
        } else {
          tokens.push({
            type: TEXT,
            value: substring
          });
        }

        break;
      }

      var value = template.slice(lastIndex, index).trim();
      tokens.push({
        type: BINDING,
        value: value
      });
      lastIndex = index + close.length;
    }
  }

  return tokens;
}
function parseNode(view, node, templateDelimiters) {
  /** If true stop / block the parseNode  recursion */
  var block = false;
  node = node; // if node.nodeType === 3 === Node.TEXT_NODE

  if (node.nodeType === 3) {
    var tokens = null; // TODO why check data?

    if (node.data) {
      tokens = parseTemplate(node.data, templateDelimiters);
    }

    if (tokens && tokens.length) {
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        var text = document.createTextNode(token.value);

        if (node.parentNode) {
          node.parentNode.insertBefore(text, node);
        }

        if (token.type === 1) {
          // TODO fix any
          view.buildBinding(text, null, token.value, _view__WEBPACK_IMPORTED_MODULE_1__["View"].mustacheTextBinder, null);
        }
      }

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }

    block = true; // if node.nodeType === 1 === Node.ELEMENT_NODE
  } else if (node.nodeType === 1) {
    // traverse binds attributes
    block = view.traverse(node);
  }

  if (!block) {
    if (node.childNodes) {
      for (var _i = 0; _i < node.childNodes.length; _i++) {
        parseNode(view, node.childNodes[_i], templateDelimiters);
      }
    }
  }
}

/**
 * Parses an attribute argument to his keypath and splits the formatter names into a pipes array.
 * @param declaration e.g. `object.data | validate | json`
 *
 * if declaration is
 * ```
 * object.data | validate | json`
 * ``
 *
 * the result is
 * ```
 * {
 *    keypath: "object.data",
 *    pipes: ["validate", "json"]
 * }
 * ```
 */
function parseDeclaration(declaration) {
  var matches = declaration.match(DECLARATION_SPLIT);

  if (matches === null) {
    throw new Error('[View] No matches');
  }

  var pipes = matches.map(function (str) {
    return str.trim();
  });
  var keypath = pipes.shift() || undefined;
  return {
    keypath: keypath,
    pipes: pipes
  };
}

/***/ }),

/***/ "../riba/packages/core/src/riba.ts":
/*!*****************************************!*\
  !*** ../riba/packages/core/src/riba.ts ***!
  \*****************************************/
/*! exports provided: Riba */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Riba", function() { return Riba; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/utils */ "../riba/packages/core/src/services/utils.ts");
/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers */ "../riba/packages/core/src/parsers.ts");
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adapter */ "../riba/packages/core/src/adapter.ts");
/* harmony import */ var _binders_attribute_binder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./binders/attribute.binder */ "../riba/packages/core/src/binders/attribute.binder.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view */ "../riba/packages/core/src/view.ts");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./observer */ "../riba/packages/core/src/observer.ts");
/* harmony import */ var _services_module_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/module.service */ "../riba/packages/core/src/services/module.service.ts");











var Riba =
/*#__PURE__*/
function () {
  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Riba, [{
    key: "prefix",
    set: function set(value) {
      this._prefix = value;
      this._fullPrefix = value + '-';
    },
    get: function get() {
      return this._prefix;
    }
  }, {
    key: "fullPrefix",
    get: function get() {
      return this._fullPrefix;
    }
    /**
     * Creates an singleton instance of Riba.
     */

  }], [{
    key: "handler",

    /**
     * Sets the attribute on the element. If no binder above is matched it will fall
     * back to using this binder.
     */

    /**
     * Default event handler, calles the function defined in his binder
     * @see Binding.eventHandler
     * @param el The element the event was triggered from
     */
    value: function handler(context, ev, binding, el) {
      this.call(context, ev, binding.view.models, el);
    }
    /** singleton instance */

  }]);

  function Riba() {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Riba);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "module", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "binders", {});

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "components", {});

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "formatters", {});

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "adapters", {
      '.': _adapter__WEBPACK_IMPORTED_MODULE_6__["adapter"]
    });

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "parseTemplate", _parsers__WEBPACK_IMPORTED_MODULE_5__["parseTemplate"]);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "parseType", _parsers__WEBPACK_IMPORTED_MODULE_5__["parseType"]);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "templateDelimiters", ['{', '}']);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "rootInterface", '.');

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "preloadData", true);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "removeBinderAttributes", true);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "blockNodeNames", ['SCRIPT', 'STYLE', 'TEMPLATE', 'CODE']);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "_prefix", 'rv');

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "_fullPrefix", 'rv-');

    this.module = new _services_module_service__WEBPACK_IMPORTED_MODULE_10__["ModulesService"](this.binders, this.components, this.formatters);

    if (Riba.instance) {
      return Riba.instance;
    }

    Riba.instance = this;
  }
  /**
   * Merges an object literal into the corresponding global options.
   * @param options
   */


  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Riba, [{
    key: "configure",
    value: function configure(options) {
      var _this = this;

      if (!options) {
        return;
      }

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(options).forEach(function (option) {
        var value = options[option];

        switch (option) {
          case 'binders':
            _this.binders = _services_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].concat(false, _this.binders, value);
            break;

          case 'formatters':
            _this.formatters = _services_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].concat(false, _this.formatters, value);
            break;

          case 'components':
            _this.components = _services_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].concat(false, _this.components, value);
            break;

          case 'adapters':
            _this.adapters = _services_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].concat(false, _this.adapters, value);
            break;

          case 'prefix':
            _this.prefix = value;
            break;

          case 'parseTemplate':
            _this.parseTemplate = value;
            break;

          case 'parseType':
            _this.parseType = value;
            break;

          case 'templateDelimiters':
            _this.templateDelimiters = value;
            break;

          case 'rootInterface':
            _this.rootInterface = value;
            break;

          case 'preloadData':
            _this.preloadData = value;
            break;

          case 'blockNodeNames':
            _this.blockNodeNames = value;
            break;

          default:
            console.warn('Option not supported', option, value);
            break;
        }
      });
    }
  }, {
    key: "getViewOptions",
    value: function getViewOptions(options) {
      var viewOptions = {
        // EXTENSIONS
        adapters: {},
        binders: {},
        components: {},
        formatters: {},
        // other
        starBinders: {},
        // sightglass
        rootInterface: {}
      };

      if (options) {
        viewOptions.binders = _services_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].concat(false, viewOptions.binders, options.binders);
        viewOptions.formatters = _services_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].concat(false, viewOptions.formatters, options.formatters);
        viewOptions.components = _services_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].concat(false, viewOptions.components, options.components);
        viewOptions.adapters = _services_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].concat(false, viewOptions.adapters, options.adapters);
      }

      viewOptions.prefix = options && options.prefix ? options.prefix : this.prefix;
      viewOptions.fullPrefix = viewOptions.prefix ? viewOptions.prefix + '-' : this.fullPrefix;
      viewOptions.templateDelimiters = options && options.templateDelimiters ? options.templateDelimiters : this.templateDelimiters;
      viewOptions.rootInterface = options && options.rootInterface ? options.rootInterface : this.rootInterface;
      viewOptions.removeBinderAttributes = options && typeof options.removeBinderAttributes === 'boolean' ? options.removeBinderAttributes : this.removeBinderAttributes;
      viewOptions.blockNodeNames = options && options.blockNodeNames ? options.blockNodeNames : this.blockNodeNames;
      viewOptions.preloadData = options && typeof options.preloadData === 'boolean' ? options.preloadData : this.preloadData;
      viewOptions.handler = options && options.handler ? options.handler : Riba.handler; // merge extensions

      viewOptions.binders = _services_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].concat(false, this.binders, viewOptions.binders);
      viewOptions.formatters = _services_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].concat(false, this.formatters, viewOptions.formatters);
      viewOptions.components = _services_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].concat(false, this.components, viewOptions.components);
      viewOptions.adapters = _services_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].concat(false, this.adapters, viewOptions.adapters); // get all starBinders from available binders

      if (viewOptions.binders) {
        viewOptions.starBinders = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(viewOptions.binders).filter(function (key) {
          return key.indexOf('*') >= 1; // Should ot start with *
        });
      }

      return viewOptions;
    }
    /**
     * Binds some data to a template / element. Returns a riba.View instance.
     */

  }, {
    key: "bind",
    value: function bind(el, models, options) {
      var viewOptions = this.getViewOptions(options);
      models = models || new Object(null);
      _observer__WEBPACK_IMPORTED_MODULE_9__["Observer"].updateOptions(viewOptions);
      var view = new _view__WEBPACK_IMPORTED_MODULE_8__["View"](el, models, viewOptions);
      view.bind();
      return view;
    }
  }]);

  return Riba;
}();

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Riba, "fallbackBinder", _binders_attribute_binder__WEBPACK_IMPORTED_MODULE_7__["starBinder"]);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Riba, "instance", void 0);

/***/ }),

/***/ "../riba/packages/core/src/services/binder.service.ts":
/*!************************************************************!*\
  !*** ../riba/packages/core/src/services/binder.service.ts ***!
  \************************************************************/
/*! exports provided: BindersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindersService", function() { return BindersService; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _module_element_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module-element.service */ "../riba/packages/core/src/services/module-element.service.ts");








var BindersService =
/*#__PURE__*/
function (_ModuleElementService) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BindersService, _ModuleElementService);

  /**
   *
   * @param binders;
   */
  function BindersService(binders) {
    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BindersService);

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(BindersService).call(this, binders));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "type", 'binder');

    return _this;
  }
  /**
   * Regist a binder
   * @param binder
   * @param name  Overwrites the name to access the binder over
   */


  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BindersService, [{
    key: "regist",
    value: function regist(binder, fallbackName) {
      var forceFallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!binder || typeof binder.routine !== 'function') {
        this.debug(new Error('Can not regist binder!'), binder);
        return this.elements;
      }

      var name = forceFallback ? fallbackName || binder.name : binder.name || fallbackName;

      if (!name) {
        console.warn(new Error('Binder name not found!'), binder);
        return this.elements;
      }

      this.elements[name] = binder;
      return this.elements;
    }
  }]);

  return BindersService;
}(_module_element_service__WEBPACK_IMPORTED_MODULE_7__["ModuleElementService"]);

/***/ }),

/***/ "../riba/packages/core/src/services/component.service.ts":
/*!***************************************************************!*\
  !*** ../riba/packages/core/src/services/component.service.ts ***!
  \***************************************************************/
/*! exports provided: ComponentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentService", function() { return ComponentService; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _module_element_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module-element.service */ "../riba/packages/core/src/services/module-element.service.ts");








var ComponentService =
/*#__PURE__*/
function (_ModuleElementService) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ComponentService, _ModuleElementService);

  /**
   *
   * @param components
   */
  function ComponentService(components) {
    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ComponentService);

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ComponentService).call(this, components));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "type", 'components');

    return _this;
  }
  /**
   * Regist a component with his name
   * @param component
   * @param name
   */


  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ComponentService, [{
    key: "regist",
    value: function regist(component, fallbackName) {
      var forceFallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var name = forceFallback ? fallbackName || component.tagName : component.tagName || fallbackName;

      if (!name) {
        console.warn(new Error('Component name not found!'), component);
        return this.elements;
      }

      this.elements[name] = component;
      return this.elements;
    }
  }]);

  return ComponentService;
}(_module_element_service__WEBPACK_IMPORTED_MODULE_7__["ModuleElementService"]);

/***/ }),

/***/ "../riba/packages/core/src/services/event-dispatcher.service.ts":
/*!**********************************************************************!*\
  !*** ../riba/packages/core/src/services/event-dispatcher.service.ts ***!
  \**********************************************************************/
/*! exports provided: EventDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return EventDispatcher; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Little Dispatcher inspired by MicroEvent.js
 *
 * @type {object}
 */
var EventDispatcher =
/*#__PURE__*/
function () {
  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EventDispatcher, null, [{
    key: "getInstance",
    value: function getInstance(id) {
      var result = EventDispatcher.instances[id];

      if (!result) {
        throw new Error("No EventDispatcher instance with id ".concat(id, " found!"));
      }

      return result;
    }
    /**
     * Object that keeps all the events
     *
     * @memberOf Barba.Dispatcher
     * @readOnly
     * @type {object}
     */

  }]);

  /**
   * Creates an singleton instance of Dispatcher.
   * @memberof Dispatcher
   */
  function EventDispatcher(id) {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EventDispatcher);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "events", {});

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "id", void 0);

    if (!id) {
      id = 'main';
    }

    this.id = id;

    if (EventDispatcher.instances[this.id]) {
      return EventDispatcher.instances[this.id];
    }

    EventDispatcher.instances[this.id] = this;
    return EventDispatcher.instances[this.id];
  }
  /**
   * Bind a callback to an event
   *
   * @memberOf Barba.Dispatcher
   * @param {string} eventName
   * @param {EventCallback} function
   */


  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EventDispatcher, [{
    key: "on",
    value: function on(e, f) {
      this.events[e] = this.events[e] || [];
      this.events[e].push(f);
    }
    /**
     * Unbind event
     *
     * @memberOf Barba.Dispatcher
     * @param {string} eventName
     * @param {EventCallback} function
     */

  }, {
    key: "off",
    value: function off(e, f) {
      if (e in this.events === false) {
        return;
      }

      this.events[e].splice(this.events[e].indexOf(f), 1);
    }
    /**
     * Fire the event running all the event associated to it
     *
     * @memberOf Barba.Dispatcher
     * @param  {string} eventName
     * @param  {any[]} args
     */

  }, {
    key: "trigger",
    value: function trigger(e) {
      // e, ...args
      if (e in this.events === false) {
        return;
      }

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      for (var i = 0; i < this.events[e].length; i++) {
        this.events[e][i].apply(this, args);
      }
    }
  }]);

  return EventDispatcher;
}();

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(EventDispatcher, "instances", {});



/***/ }),

/***/ "../riba/packages/core/src/services/formatter.service.ts":
/*!***************************************************************!*\
  !*** ../riba/packages/core/src/services/formatter.service.ts ***!
  \***************************************************************/
/*! exports provided: FormatterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatterService", function() { return FormatterService; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _module_element_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module-element.service */ "../riba/packages/core/src/services/module-element.service.ts");








var FormatterService =
/*#__PURE__*/
function (_ModuleElementService) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(FormatterService, _ModuleElementService);

  /**
   *
   */
  function FormatterService(formatters) {
    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FormatterService);

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FormatterService).call(this, formatters));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "type", 'formatter');

    return _this;
  }
  /**
   * Regist a formatter with his name
   * @param formatter
   * @param name
   */


  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FormatterService, [{
    key: "regist",
    value: function regist(formatter, fallbackName) {
      var forceFallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var name = forceFallback ? fallbackName || formatter.name : formatter.name || fallbackName;

      if (!name) {
        throw new Error('Formatter name not found!');
      }

      this.elements[name] = formatter;
      return this.elements;
    }
  }]);

  return FormatterService;
}(_module_element_service__WEBPACK_IMPORTED_MODULE_7__["ModuleElementService"]);

/***/ }),

/***/ "../riba/packages/core/src/services/index.ts":
/*!***************************************************!*\
  !*** ../riba/packages/core/src/services/index.ts ***!
  \***************************************************/
/*! exports provided: BindersService, ComponentService, EventDispatcher, FormatterService, Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _binder_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binder.service */ "../riba/packages/core/src/services/binder.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindersService", function() { return _binder_service__WEBPACK_IMPORTED_MODULE_0__["BindersService"]; });

/* harmony import */ var _component_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.service */ "../riba/packages/core/src/services/component.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentService", function() { return _component_service__WEBPACK_IMPORTED_MODULE_1__["ComponentService"]; });

/* harmony import */ var _event_dispatcher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-dispatcher.service */ "../riba/packages/core/src/services/event-dispatcher.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return _event_dispatcher_service__WEBPACK_IMPORTED_MODULE_2__["EventDispatcher"]; });

/* harmony import */ var _formatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatter.service */ "../riba/packages/core/src/services/formatter.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatterService", function() { return _formatter_service__WEBPACK_IMPORTED_MODULE_3__["FormatterService"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "../riba/packages/core/src/services/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["Utils"]; });







/***/ }),

/***/ "../riba/packages/core/src/services/module-element.service.ts":
/*!********************************************************************!*\
  !*** ../riba/packages/core/src/services/module-element.service.ts ***!
  \********************************************************************/
/*! exports provided: ModuleElementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleElementService", function() { return ModuleElementService; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vendors */ "../riba/packages/core/src/vendors/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "../riba/packages/core/src/services/utils.ts");





var ModuleElementService =
/*#__PURE__*/
function () {
  /**
   *
   * @param elements;
   */
  function ModuleElementService(elements) {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ModuleElementService);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "elements", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "type", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "debug", Object(_vendors__WEBPACK_IMPORTED_MODULE_3__["Debug"])('services:ModuleElementService'));

    this.elements = elements;
  }
  /**
   * Regist a element
   * @param element
   * @param name  Overwrites the name to access the element over
   */


  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ModuleElementService, [{
    key: "regists",

    /**
     * Regist a set / array of elements
     * @param elements
     */
    value: function regists(elements) {
      if (!_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isObject(elements)) {
        throw new Error('Elements to register must be an object of elements');
      }

      for (var _key in elements) {
        if (elements.hasOwnProperty(_key) && _key !== '__esModule') {
          var _element = elements[_key];
          this.debug("Regist ".concat(this.type, " with key \"").concat(_key, "\""), _element);
          this.regist(_element, _key);
        }
      }

      return this.elements;
    }
  }]);

  return ModuleElementService;
}();

/***/ }),

/***/ "../riba/packages/core/src/services/module.service.ts":
/*!************************************************************!*\
  !*** ../riba/packages/core/src/services/module.service.ts ***!
  \************************************************************/
/*! exports provided: ModulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesService", function() { return ModulesService; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vendors */ "../riba/packages/core/src/vendors/index.ts");
/* harmony import */ var _binder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binder.service */ "../riba/packages/core/src/services/binder.service.ts");
/* harmony import */ var _component_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component.service */ "../riba/packages/core/src/services/component.service.ts");
/* harmony import */ var _formatter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatter.service */ "../riba/packages/core/src/services/formatter.service.ts");







var ModulesService =
/*#__PURE__*/
function () {
  /**
   *
   * @param binders;
   */
  function ModulesService(binders, components, formatters) {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ModulesService);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "binder", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "component", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "formatter", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "debug", Object(_vendors__WEBPACK_IMPORTED_MODULE_3__["Debug"])('services:ModulesService'));

    this.binder = new _binder_service__WEBPACK_IMPORTED_MODULE_4__["BindersService"](binders);
    this.component = new _component_service__WEBPACK_IMPORTED_MODULE_5__["ComponentService"](components);
    this.formatter = new _formatter_service__WEBPACK_IMPORTED_MODULE_6__["FormatterService"](formatters);
  }
  /**
   * Regist a set of binders
   * @param binders
   */


  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ModulesService, [{
    key: "regist",
    value: function regist(module) {
      if (module.binders) {
        this.debug('Regist binders; ', module.binders);
        this.binder.regists(module.binders);
      }

      if (module.components) {
        this.debug('Regist components; ', module.components);
        this.component.regists(module.components);
      }

      if (module.formatters) {
        this.debug('Regist formatters; ', module.formatters);
        this.formatter.regists(module.formatters);
      }
    }
  }]);

  return ModulesService;
}();

/***/ }),

/***/ "../riba/packages/core/src/services/utils.ts":
/*!***************************************************!*\
  !*** ../riba/packages/core/src/services/utils.ts ***!
  \***************************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/typeof.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vendors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vendors */ "../riba/packages/core/src/vendors/index.ts");








 // TODO

/**
 * Just an Class with some helpful functions
 *
 * @export
 * @class Utils
 */
var Utils =
/*#__PURE__*/
function () {
  function Utils() {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Utils);
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Utils, null, [{
    key: "getJSON",

    /**
     * Promise version of JQuery.getJSON()
     * Load JSON-encoded data from the server using a GET HTTP request.
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @see https://api.jquery.com/jquery.getjson/
     */
    value: function getJSON(url, data) {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) {
        _vendors__WEBPACK_IMPORTED_MODULE_8__["JQuery"].getJSON(url, data).done(resolve).fail(function (jqxhr, textStatus, error) {
          // console.warn('jqxhr', jqxhr, 'textStatus', textStatus, 'error', error);
          reject(jqxhr);
        });
      });
    }
    /**
     * Promise version of JQuery.post()
     * Load data from the server using a HTTP POST request.
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
     * @see https://api.jquery.com/jquery.post/
     */

  }, {
    key: "post",
    value: function post(url, data, dataType) {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) {
        _vendors__WEBPACK_IMPORTED_MODULE_8__["JQuery"].post(url, data, null, dataType).done(resolve).fail(function (jqxhr, textStatus, error) {
          // console.warn('jqxhr', jqxhr, 'textStatus', textStatus, 'error', error);
          reject(jqxhr);
        });
      });
    }
  }, {
    key: "delete",
    value: function _delete(url, data, dataType) {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) {
        return _vendors__WEBPACK_IMPORTED_MODULE_8__["JQuery"].ajax({
          url: url,
          type: 'DELETE',
          data: data,
          dataType: dataType
        }).done(resolve).fail(function (jqxhr, textStatus, error) {
          // console.warn('jqxhr', jqxhr, 'textStatus', textStatus, 'error', error);
          reject(jqxhr);
        });
      });
    }
  }, {
    key: "put",
    value: function put(url, data, dataType) {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) {
        return _vendors__WEBPACK_IMPORTED_MODULE_8__["JQuery"].ajax({
          url: url,
          type: 'PUT',
          data: data,
          dataType: dataType
        }).done(resolve).fail(function (jqxhr, textStatus, error) {
          // console.warn('jqxhr', jqxhr, 'textStatus', textStatus, 'error', error);
          reject(jqxhr);
        });
      });
    }
    /**
     * Promise version of JQuery.get()
     * Load data from the server using a HTTP GET request.
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
     * @see https://api.jquery.com/jquery.get/
     */

  }, {
    key: "get",
    value: function get(url, data, dataType) {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) {
        _vendors__WEBPACK_IMPORTED_MODULE_8__["JQuery"].get(url, data, null, dataType).done(resolve).fail(function (jqxhr, textStatus, error) {
          // console.warn('jqxhr', jqxhr, 'textStatus', textStatus, 'error', error);
          reject(jqxhr);
        });
      });
    }
    /**
     * Test if string is a json string
     * @param str
     */

  }, {
    key: "isJson",
    value: function isJson(str) {
      if (!str) {
        return false;
      }

      try {
        var val = JSON.parse(str);
        return _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default()(val) || _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(val) === 'object' ? true : false;
      } catch (error) {
        return false;
      }
    }
    /**
     * Check if value is undefined
     */

  }, {
    key: "isUndefined",
    value: function isUndefined(value) {
      return typeof value === 'undefined';
    }
    /**
     * Check if value is undefined
     */

  }, {
    key: "isDefined",
    value: function isDefined(value) {
      return !Utils.isUndefined(value);
    }
    /**
     * Check if type is Object
     * @see https://stackoverflow.com/a/4775737/1465919
     */

  }, {
    key: "isObject",
    value: function isObject(obj) {
      return Utils.isDefined(obj) && _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(obj) === 'object' && obj !== null;
    }
    /**
     * Parse value to string or return undefined if value is null
     * @param value
     */

  }, {
    key: "getString",
    value: function getString(value) {
      return value != null ? value.toString() : undefined;
    }
    /**
     * Parse value to number or return 0 if value is null or undefined
     * @param value
     */

  }, {
    key: "getNumber",
    value: function getNumber(value) {
      return value ? _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(value) : undefined;
    }
  }, {
    key: "times",
    value: function times(n, cb) {
      for (var i = 0; i < n; i++) {
        cb();
      }
    }
    /**
     *
     */

  }, {
    key: "getInputValue",
    value: function getInputValue(el) {
      var results = [];

      if (el.type === 'checkbox') {
        return el.checked;
      } else if (el.type === 'select-multiple') {
        var options = el.options;

        for (var key in options) {
          if (options.hasOwnProperty(key)) {
            var option = options[key];

            if (option.selected) {
              results.push(option.value);
            }
          }
        }

        return results;
      } else if (el.getAttribute('contenteditable')) {
        return el.innerHTML; // TODO write test for contenteditable
      } else {
        return el.value;
      }
    }
    /**
     * Returns a camel-cased version of the string. Used when translating an
     * element's attribute name into a property name for the component's scope.
     * @param string
     */

  }, {
    key: "isFunction",

    /**
     * Check if value is a function
     */
    value: function isFunction(value) {
      return typeof value === 'function';
    }
    /**
     * Check if variable is an Array
     * @see https://stackoverflow.com/a/4775737/1465919
     */

  }, {
    key: "isArray",
    value: function isArray(value) {
      return Object.prototype.toString.call(value) === '[object Array]';
    }
    /**
     * Check whether variable is number or a string with numbers in JavaScript
     * @see https://stackoverflow.com/a/1421988/1465919
     */

  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return !isNaN(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(value)) && !isNaN(value - 0);
    }
    /**
     * Check if type is Boolean
     * @see https://stackoverflow.com/a/28814615/1465919
     */

  }, {
    key: "isBoolean",
    value: function isBoolean(value) {
      return _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(value) === _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(true);
    }
    /**
     * Check if value is a string
     */

  }, {
    key: "isString",
    value: function isString(value) {
      return this.isDefined(value) && typeof value === 'string';
    }
    /**
     * Check if string contains a number
     */

  }, {
    key: "stringHasNumber",
    value: function stringHasNumber(value) {
      return this.isString(value) && /\d/.test(value);
    }
    /**
     * Check if string contains only numbers
     */

  }, {
    key: "stringHasOnlyNumbers",
    value: function stringHasOnlyNumbers(value) {
      return /^\d+$/.test(value);
    }
    /**
     * Check if string contains only numbers, +, - and ()
     */

  }, {
    key: "stringIsPhoneNumber",
    value: function stringIsPhoneNumber(value) {
      return /^[0-9 ()+-]+$/.test(value);
    }
    /**
     * Just get the digits of a string, useful to remove px pixel from css value
     *
     * @see http://stackoverflow.com/a/1100653/1465919
     */

  }, {
    key: "justDigits",
    value: function justDigits(str) {
      var num = str.replace(/[^-\d\.]/g, '');

      if (!Utils.isNumber(num)) {
        return 0;
      } else {
        return Number(num);
      }
    }
    /**
     * Merge the contents of two or more objects together into the first object.
     * @param {boolean} deep If true, the merge becomes recursive (aka. deep copy).
     * @param {object} target An object that will receive the new properties if additional objects are passed in or that will extend the JQuery namespace if it is the sole argument.
     * @param {object} object1 An object containing additional properties to merge in.
     * @param {object} [objectN] Additional objects containing properties to merge in.
     * @returns
     * @memberof Utils
     */

  }, {
    key: "extend",
    value: function extend(deep, target, object1, objectN) {
      var result;

      if (deep) {
        result = _vendors__WEBPACK_IMPORTED_MODULE_8__["JQuery"].extend(true, target || {}, object1 || {}, objectN);
      } else {
        // Passing false for deep argument is not supported.
        result = _vendors__WEBPACK_IMPORTED_MODULE_8__["JQuery"].extend(target || {}, object1 || {}, objectN);
      }

      return result;
    }
    /**
     * Concat the contents of two objects together into the first object and return the concatenated object.
     * @param {boolean} deep If true, the merge becomes recursive (aka. deep copy).
     * @param {object} object1 An first object containing properties to concat.
     * @param {object} object2 The second object containing properties to concat.
     */

  }, {
    key: "concat",
    value: function concat(deep, object1, object2) {
      object1 = this.extend(deep, object1 || {}, object1 || {}, object2 || {});
      return object1;
    }
    /**
     * Clone an object or array
     * @param deep If true, the merge becomes recursive (aka. deep copy).
     * @param val The value(s) to clone
     */

  }, {
    key: "clone",
    value: function clone(deep, val) {
      if (Utils.isArray(val)) {
        return val.slice();
      } else {
        return Utils.extend(deep, {}, val);
      }
    }
    /**
     * Set header for each xhr and jquery request
     * @param name Header name
     * @param value Hander value
     */

  }, {
    key: "setRequestHeaderEachRequest",
    value: function setRequestHeaderEachRequest(name, value) {
      // TODO Are old values overwritten if JQuery.ajaxSetup called multiple times?
      _vendors__WEBPACK_IMPORTED_MODULE_8__["JQuery"].ajaxSetup({
        beforeSend: function beforeSend(xhr) {
          xhr.setRequestHeader(name, value);
        }
      });

      this._requestHeadersEachRequest.push({
        name: name,
        value: value
      });
    }
    /**
     * Start an XMLHttpRequest() and return a Promise
     *
     * @memberOf Barba.Utils
     * @param url
     * @param xhrTimeout Time in millisecond after the xhr request goes in timeout
     */

  }, {
    key: "xhr",
    value: function xhr(url) {
      var xhrTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
      var deferred = this.deferred();
      var req = new XMLHttpRequest();

      req.onreadystatechange = function () {
        if (req.readyState === 4) {
          if (req.status === 200) {
            return deferred.resolve(req.responseText);
          } else {
            return deferred.reject(new Error('xhr: HTTP code is not 200'));
          }
        }
      };

      req.ontimeout = function () {
        return deferred.reject(new Error('xhr: Timeout exceeded'));
      };

      req.open('GET', url);
      req.timeout = xhrTimeout;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(this._requestHeadersEachRequest), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var header = _step.value;
          req.setRequestHeader(header.name, header.value);
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

      req.send();
      return deferred.promise;
    }
    /**
     * Return a new "Deferred" object
     * https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Deferred
     *
     * @memberOf Barba.Utils
     * @return {IDeferred}
     */

  }, {
    key: "deferred",
    value: function deferred() {
      var obj = {};
      var prom = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) {
        obj.resolve = resolve;
        obj.reject = reject;
      });
      obj.promise = prom;
      return obj;
    }
    /**
     * get hostname an path of address bar
     * @see http://stackoverflow.com/a/736970/1465919
     *
     * @example
     * var l = getLocation("http://example.com/path");
     * console.debug(l.hostname)
     * >> "example.com"
     * console.debug(l.pathname)
     * >> "/path"
     */

  }, {
    key: "getLocation",
    value: function getLocation(url) {
      if (!url) {
        return window.location;
      } // l.href = href;


      var l = Object(_vendors__WEBPACK_IMPORTED_MODULE_8__["JQuery"])("<a href=\"".concat(url, "\"></a>"))[0];
      return l;
    }
    /**
     * Return the current url
     *
     * @memberOf Barba.Utils
     * @return {string} currentUrl
     */

  }, {
    key: "getUrl",
    value: function getUrl(url) {
      var location = Utils.getLocation(url);
      return location.protocol + '//' + location.host + location.pathname + location.search;
    }
    /**
     * Check if we are on the route
     */

  }, {
    key: "cleanLink",

    /**
     * Given an url, return it without the hash
     *
     * @memberOf Barba.Utils
     * @private
     * @param  {string} url
     * @return {string} newCleanUrl
     */
    value: function cleanLink(url) {
      return url.replace(/#.*/, '');
    }
    /**
     * Return the port number normalized, eventually you can pass a string to be normalized.
     *
     * @memberOf Barba.Utils
     * @private
     * @param  {String} p
     * @return {Int} port
     */

  }, {
    key: "getPort",
    value: function getPort(p, url) {
      var location = Utils.getLocation(url);
      var port = typeof p !== 'undefined' ? p : location.port;
      var protocol = location.protocol;

      if (port !== '') {
        return Number(port);
      }

      if (protocol === 'http:') {
        return 80;
      }

      if (protocol === 'https:') {
        return 443;
      }
    }
    /**
     * Test if url is absolute or relative
     * @see https://stackoverflow.com/a/19709846/1465919
     */

  }, {
    key: "isAbsoluteUrl",
    value: function isAbsoluteUrl(url) {
      var isProtokoll = new RegExp('^(?:[a-z]+:)?//', 'i');
      var isAbsolute = isProtokoll.test(url) || url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('fax:');
      return isAbsolute;
    }
  }, {
    key: "getUrlParameter",

    /**
     * get param from hash
     */
    value: function getUrlParameter(name, url) {
      if (!url) {
        url = window.location.href;
      }

      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
      var results = regex.exec(url);

      if (!results) {
        return null;
      }

      if (!results[2]) {
        return '';
      }

      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    /**
     * Get hash from address bar or url if set
     */

  }, {
    key: "getHash",
    value: function getHash(url) {
      return Utils.getLocation(url).hash;
    }
    /**
     * Change hash from address bar
     */

  }, {
    key: "updateHash",
    value: function updateHash(hash) {
      return window.location.hash = hash;
    }
    /**
     * Remove hash from address bar
     */

  }, {
    key: "removeHash",
    value: function removeHash() {
      return history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  }, {
    key: "getViewportDimensions",
    value: function getViewportDimensions() {
      var w = Math.max(document.documentElement ? document.documentElement.clientWidth : 0, window.innerWidth || 0);
      var h = Math.max(document.documentElement ? document.documentElement.clientHeight : 0, window.innerHeight || 0);
      return {
        h: h,
        w: w
      };
    }
    /**
     * Header name value pair to send on each request
     */

  }]);

  return Utils;
}();

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Utils, "camelCase", function (str) {
  return str.replace(/-([a-z])/g, function (grouped) {
    return grouped[1].toUpperCase();
  });
});

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Utils, "onRoute", function (checkUrl) {
  if (checkUrl) {
    var pathname = Utils.getLocation().pathname;
    return checkUrl === pathname;
  }

  return false;
});

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Utils, "onParentRoute", function (checkUrl) {
  if (checkUrl) {
    var pathname = Utils.getLocation().pathname;
    return pathname.startsWith(checkUrl);
  }

  return false;
});

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Utils, "isExternalUrl", function (absoluteUrl) {
  if (Utils.isAbsoluteUrl(absoluteUrl)) {
    var location = Utils.getLocation();
    var host = location.protocol + '//' + location.hostname;
    var isExternal = true;

    if (absoluteUrl.startsWith(host)) {
      isExternal = false;
    }

    return isExternal;
  }

  return false;
});

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Utils, "isInternalUrl", function (url) {
  return !Utils.isExternalUrl(url);
});

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Utils, "_requestHeadersEachRequest", [{
  name: 'x-barba',
  value: 'yes'
}]);

/***/ }),

/***/ "../riba/packages/core/src/vendors/_jquery-touch-events.ts":
/*!*****************************************************************!*\
  !*** ../riba/packages/core/src/vendors/_jquery-touch-events.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);



/* tslint:disable */
/// <reference types="jquery" />

/*!
 * jQuery Mobile Events
 * by Ben Major
 * https://github.com/benmajor/jQuery-Touch-Events
 *
 * Copyright 2011-2017, Ben Major
 * Licensed under the MIT License:
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
/* harmony default export */ __webpack_exports__["default"] = (function ($) {
  'use strict';

  $.attrFn = $.attrFn || {};
  var touchCapable = 'ontouchstart' in window,
      settings = {
    tap_pixel_range: 5,
    swipe_h_threshold: 50,
    swipe_v_threshold: 50,
    taphold_threshold: 750,
    doubletap_int: 500,
    shake_threshold: 15,
    touch_capable: touchCapable,
    orientation_support: 'orientation' in window && 'onorientationchange' in window,
    startevent: touchCapable ? 'touchstart' : 'mousedown',
    endevent: touchCapable ? 'touchend' : 'mouseup',
    moveevent: touchCapable ? 'touchmove' : 'mousemove',
    tapevent: touchCapable ? 'tap' : 'click',
    scrollevent: touchCapable ? 'touchmove' : 'scroll',
    hold_timer: undefined,
    tap_timer: undefined
  }; // Declare touch namespace:

  $.touch = {}; // Convenience functions:

  $.isTouchCapable = function () {
    return settings.touch_capable;
  };

  $.getStartEvent = function () {
    return settings.startevent;
  };

  $.getEndEvent = function () {
    return settings.endevent;
  };

  $.getMoveEvent = function () {
    return settings.moveevent;
  };

  $.getTapEvent = function () {
    return settings.tapevent;
  };

  $.getScrollEvent = function () {
    return settings.scrollevent;
  }; // SETTERS:
  // Set the X threshold of swipe events:


  $.touch.setSwipeThresholdX = function (threshold) {
    if (typeof threshold !== 'number') {
      throw new Error('Threshold parameter must be a type of number');
    }

    settings.swipe_h_threshold = threshold;
  }; // Set the Y threshold of swipe events:


  $.touch.setSwipeThresholdY = function (threshold) {
    if (typeof threshold !== 'number') {
      throw new Error('Threshold parameter must be a type of number');
    }

    settings.swipe_v_threshold = threshold;
  }; // Set the double tap interval:


  $.touch.setDoubleTapInt = function (interval) {
    if (typeof interval !== 'number') {
      throw new Error('Interval parameter must be a type of number');
    }

    settings.doubletap_int = interval;
  }; // Set the taphold threshold:


  $.touch.setTapHoldThreshold = function (threshold) {
    if (typeof threshold !== 'number') {
      throw new Error('Threshold parameter must be a type of number');
    }

    settings.taphold_threshold = threshold;
  }; // Set the pixel range for tapas:


  $.touch.setTapRange = function (range) {
    if (typeof range !== 'number') {
      throw new Error('Ranger parameter must be a type of number');
    }

    settings.tap_pixel_range = range;
  }; // Add Event shortcuts:


  $.each(['tapstart', 'tapend', 'tapmove', 'tap', 'singletap', 'doubletap', 'taphold', 'swipe', 'swipeup', 'swiperight', 'swipedown', 'swipeleft', 'swipeend', 'scrollstart', 'scrollend', 'orientationchange', 'tap2', 'taphold2'], function (i, name) {
    $.fn[name] = function (fn) {
      return fn ? this.on(name, fn) : this.trigger(name);
    };

    $.attrFn[name] = true;
  }); // tapstart Event:

  $.event.special.tapstart = {
    setup: function setup() {
      var thisObject = this,
          $this = $(thisObject);
      $this.on(settings.startevent, function tapStartFunc(e) {
        $this.data('callee', tapStartFunc);

        if (e.which && e.which !== 1) {
          return false;
        }

        var origEvent = e.originalEvent,
            touchData = {
          'position': {
            'x': settings.touch_capable ? origEvent.touches[0].pageX : e.pageX,
            'y': settings.touch_capable ? origEvent.touches[0].pageY : e.pageY
          },
          'offset': {
            'x': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
            'y': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
          },
          'time': _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()(),
          'target': e.target
        };
        triggerCustomEvent(thisObject, 'tapstart', e, touchData);
        return true;
      });
    },
    remove: function remove() {
      $(this).off(settings.startevent, $(this).data.callee);
    }
  }; // tapmove Event:

  $.event.special.tapmove = {
    setup: function setup() {
      var thisObject = this,
          $this = $(thisObject);
      $this.on(settings.moveevent, function tapMoveFunc(e) {
        $this.data('callee', tapMoveFunc);
        var origEvent = e.originalEvent,
            touchData = {
          'position': {
            'x': settings.touch_capable ? origEvent.touches[0].pageX : e.pageX,
            'y': settings.touch_capable ? origEvent.touches[0].pageY : e.pageY
          },
          'offset': {
            'x': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
            'y': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
          },
          'time': _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()(),
          'target': e.target
        };
        triggerCustomEvent(thisObject, 'tapmove', e, touchData);
        return true;
      });
    },
    remove: function remove() {
      $(this).off(settings.moveevent, $(this).data.callee);
    }
  }; // tapend Event:

  $.event.special.tapend = {
    setup: function setup() {
      var thisObject = this,
          $this = $(thisObject);
      $this.on(settings.endevent, function tapEndFunc(e) {
        // Touch event data:
        $this.data('callee', tapEndFunc);
        var origEvent = e.originalEvent;
        var touchData = {
          'position': {
            'x': settings.touch_capable ? origEvent.changedTouches[0].pageX : e.pageX,
            'y': settings.touch_capable ? origEvent.changedTouches[0].pageY : e.pageY
          },
          'offset': {
            'x': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
            'y': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
          },
          'time': _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()(),
          'target': e.target
        };
        triggerCustomEvent(thisObject, 'tapend', e, touchData);
        return true;
      });
    },
    remove: function remove() {
      $(this).off(settings.endevent, $(this).data.callee);
    }
  }; // taphold Event:

  $.event.special.taphold = {
    setup: function setup() {
      var thisObject = this,
          $this = $(thisObject),
          origTarget,
          start_pos = {
        x: 0,
        y: 0
      },
          end_x = 0,
          end_y = 0;
      $this.on(settings.startevent, function tapHoldFunc1(e) {
        if (e.which && e.which !== 1) {
          return false;
        } else {
          $this.data('tapheld', false);
          origTarget = e.target;
          var origEvent = e.originalEvent;

          var start_time = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()();

          start_pos.x = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX : e.pageX;
          start_pos.y = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageY : e.pageY;
          end_x = start_pos.x;
          end_y = start_pos.y; // Get the element's threshold:

          var ele_threshold = $this.parent().data('threshold') ? $this.parent().data('threshold') : $this.data('threshold'),
              threshold = typeof ele_threshold !== 'undefined' && ele_threshold !== false && _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(ele_threshold) ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(ele_threshold) : settings.taphold_threshold;
          settings.hold_timer = window.setTimeout(function () {
            var diff_x = start_pos.x - end_x,
                diff_y = start_pos.y - end_y;

            if (e.target == origTarget && (start_pos.x == end_x && start_pos.y == end_y || diff_x >= -settings.tap_pixel_range && diff_x <= settings.tap_pixel_range && diff_y >= -settings.tap_pixel_range && diff_y <= settings.tap_pixel_range)) {
              $this.data('tapheld', true);

              var end_time = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()();

              var duration = end_time - start_time,
                  touches = e.originalEvent.targetTouches ? e.originalEvent.targetTouches : [e],
                  touchData = [];

              for (var i = 0; i < touches.length; i++) {
                var touch = {
                  'position': {
                    'x': settings.touch_capable ? origEvent.changedTouches[i].pageX : e.pageX,
                    'y': settings.touch_capable ? origEvent.changedTouches[i].pageY : e.pageY
                  },
                  'offset': {
                    'x': settings.touch_capable ? Math.round(origEvent.changedTouches[i].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
                    'y': settings.touch_capable ? Math.round(origEvent.changedTouches[i].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
                  },
                  'time': _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()(),
                  'target': e.target,
                  'duration': duration
                };
                touchData.push(touch);
              }

              var evt_name = touches.length == 2 ? 'taphold2' : 'taphold';
              $this.data('callee1', tapHoldFunc1);
              triggerCustomEvent(thisObject, evt_name, e, touchData);
            }
          }, threshold);
          return true;
        }
      }).on(settings.endevent, function tapHoldFunc2() {
        $this.data('callee2', tapHoldFunc2);
        $this.data('tapheld', false);
        window.clearTimeout(settings.hold_timer);
      }).on(settings.moveevent, function tapHoldFunc3(e) {
        $this.data('callee3', tapHoldFunc3);
        end_x = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX : e.pageX;
        end_y = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageY : e.pageY;
      });
    },
    remove: function remove() {
      $(this).off(settings.startevent, $(this).data.callee1).off(settings.endevent, $(this).data.callee2).off(settings.moveevent, $(this).data.callee3);
    }
  }; // doubletap Event:

  $.event.special.doubletap = {
    setup: function setup() {
      var thisObject = this,
          $this = $(thisObject),
          action,
          firstTap = null,
          origEvent,
          cooling = false;
      $this.on(settings.startevent, function doubleTapFunc1(e) {
        if (e.which && e.which !== 1) {
          return false;
        }

        $this.data('doubletapped', false);
        $this.data('callee1', doubleTapFunc1);
        origEvent = e.originalEvent;

        if (!firstTap) {
          firstTap = {
            'position': {
              'x': settings.touch_capable ? origEvent.touches[0].pageX : e.pageX,
              'y': settings.touch_capable ? origEvent.touches[0].pageY : e.pageY
            },
            'offset': {
              'x': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
              'y': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
            },
            'time': _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()(),
            'target': e.target,
            'element': e.originalEvent.srcElement,
            'index': $(e.target).index()
          };
        }

        return true;
      }).on(settings.endevent, function doubleTapFunc2(e) {
        var now = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()();

        var lastTouch = $this.data('lastTouch') || now + 1;
        var delta = now - lastTouch;
        window.clearTimeout(action);
        $this.data('callee2', doubleTapFunc2);

        if (delta < settings.doubletap_int && $(e.target).index() == firstTap.index && delta > 100) {
          $this.data('doubletapped', true);
          window.clearTimeout(settings.tap_timer); // Now get the current event:

          var lastTap = {
            'position': {
              'x': settings.touch_capable ? e.originalEvent.changedTouches[0].pageX : e.pageX,
              'y': settings.touch_capable ? e.originalEvent.changedTouches[0].pageY : e.pageY
            },
            'offset': {
              'x': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
              'y': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
            },
            'time': _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()(),
            'target': e.target,
            'element': e.originalEvent.srcElement,
            'index': $(e.target).index()
          };
          var touchData = {
            'firstTap': firstTap,
            'secondTap': lastTap,
            'interval': lastTap.time - firstTap.time
          };

          if (!cooling) {
            triggerCustomEvent(thisObject, 'doubletap', e, touchData);
            firstTap = null;
          }

          cooling = true;
        } else {
          $this.data('lastTouch', now);
          action = window.setTimeout(function () {
            firstTap = null;
            window.clearTimeout(action);
          }, settings.doubletap_int, [e]);
        }

        $this.data('lastTouch', now);
      });
    },
    remove: function remove() {
      $(this).off(settings.startevent, $(this).data.callee1).off(settings.endevent, $(this).data.callee2);
    }
  }; // singletap Event:
  // This is used in conjuction with doubletap when both events are needed on the same element

  $.event.special.singletap = {
    setup: function setup() {
      var thisObject = this,
          $this = $(thisObject),
          origTarget = null,
          startTime = null,
          start_pos = {
        x: 0,
        y: 0
      };
      $this.on(settings.startevent, function singleTapFunc1(e) {
        if (e.which && e.which !== 1) {
          return false;
        } else {
          startTime = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()();
          origTarget = e.target;
          $this.data('callee1', singleTapFunc1); // Get the start x and y position:

          start_pos.x = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX : e.pageX;
          start_pos.y = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageY : e.pageY;
          return true;
        }
      }).on(settings.endevent, function singleTapFunc2(e) {
        $this.data('callee2', singleTapFunc2);

        if (e.target === origTarget) {
          // Get the end point:
          var end_pos_x = e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0].pageX : e.pageX,
              end_pos_y = e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0].pageY : e.pageY; // We need to check if it was a taphold:

          settings.tap_timer = window.setTimeout(function () {
            var diff_x = start_pos.x - end_pos_x,
                diff_y = start_pos.y - end_pos_y;

            if (!$this.data('doubletapped') && !$this.data('tapheld') && (start_pos.x == end_pos_x && start_pos.y == end_pos_y || diff_x >= -settings.tap_pixel_range && diff_x <= settings.tap_pixel_range && diff_y >= -settings.tap_pixel_range && diff_y <= settings.tap_pixel_range)) {
              var origEvent = e.originalEvent;
              var touchData = {
                'position': {
                  'x': settings.touch_capable ? origEvent.changedTouches[0].pageX : e.pageX,
                  'y': settings.touch_capable ? origEvent.changedTouches[0].pageY : e.pageY
                },
                'offset': {
                  'x': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
                  'y': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
                },
                'time': _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()(),
                'target': e.target
              }; // Was it a taphold?

              if (touchData.time - startTime < settings.taphold_threshold) {
                triggerCustomEvent(thisObject, 'singletap', e, touchData);
              }
            }
          }, settings.doubletap_int);
        }
      });
    },
    remove: function remove() {
      $(this).off(settings.startevent, $(this).data.callee1).off(settings.endevent, $(this).data.callee2);
    }
  }; // tap Event:

  $.event.special.tap = {
    setup: function setup() {
      var thisObject = this,
          $this = $(thisObject),
          started = false,
          origTarget = null,
          start_time,
          start_pos = {
        x: 0,
        y: 0
      },
          touches;
      $this.on(settings.startevent, function tapFunc1(e) {
        $this.data('callee1', tapFunc1);

        if (e.which && e.which !== 1) {
          return false;
        } else {
          started = true;
          start_pos.x = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX : e.pageX;
          start_pos.y = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageY : e.pageY;
          start_time = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()();
          origTarget = e.target;
          touches = e.originalEvent.targetTouches ? e.originalEvent.targetTouches : [e];
          return true;
        }
      }).on(settings.endevent, function tapFunc2(e) {
        $this.data('callee2', tapFunc2); // Only trigger if they've started, and the target matches:

        var end_x = e.originalEvent.targetTouches ? e.originalEvent.changedTouches[0].pageX : e.pageX,
            end_y = e.originalEvent.targetTouches ? e.originalEvent.changedTouches[0].pageY : e.pageY,
            diff_x = start_pos.x - end_x,
            diff_y = start_pos.y - end_y;

        if (origTarget == e.target && started && _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()() - start_time < settings.taphold_threshold && (start_pos.x == end_x && start_pos.y == end_y || diff_x >= -settings.tap_pixel_range && diff_x <= settings.tap_pixel_range && diff_y >= -settings.tap_pixel_range && diff_y <= settings.tap_pixel_range)) {
          var origEvent = e.originalEvent;
          var touchData = [];

          for (var i = 0; i < touches.length; i++) {
            var touch = {
              'position': {
                'x': settings.touch_capable ? origEvent.changedTouches[i].pageX : e.pageX,
                'y': settings.touch_capable ? origEvent.changedTouches[i].pageY : e.pageY
              },
              'offset': {
                'x': settings.touch_capable ? Math.round(origEvent.changedTouches[i].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
                'y': settings.touch_capable ? Math.round(origEvent.changedTouches[i].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
              },
              'time': _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()(),
              'target': e.target
            };
            touchData.push(touch);
          }

          var evt_name = touches.length == 2 ? 'tap2' : 'tap';
          triggerCustomEvent(thisObject, evt_name, e, touchData);
        }
      });
    },
    remove: function remove() {
      $(this).off(settings.startevent, $(this).data.callee1).off(settings.endevent, $(this).data.callee2);
    }
  }; // swipe Event (also handles swipeup, swiperight, swipedown and swipeleft):

  $.event.special.swipe = {
    setup: function setup() {
      var thisObject = this,
          $this = $(thisObject),
          started = false,
          hasSwiped = false,
          originalCoord = {
        x: 0,
        y: 0
      },
          finalCoord = {
        x: 0,
        y: 0
      },
          startEvnt; // Screen touched, store the original coordinate

      function touchStart(e) {
        $this = $(e.currentTarget);
        $this.data('callee1', touchStart);
        originalCoord.x = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX : e.pageX;
        originalCoord.y = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageY : e.pageY;
        finalCoord.x = originalCoord.x;
        finalCoord.y = originalCoord.y;
        started = true;
        var origEvent = e.originalEvent; // Read event data into our startEvt:

        startEvnt = {
          'position': {
            'x': settings.touch_capable ? origEvent.touches[0].pageX : e.pageX,
            'y': settings.touch_capable ? origEvent.touches[0].pageY : e.pageY
          },
          'offset': {
            'x': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
            'y': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
          },
          'time': _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()(),
          'target': e.target
        };
      } // Store coordinates as finger is swiping


      function touchMove(e) {
        $this = $(e.currentTarget);
        $this.data('callee2', touchMove);
        finalCoord.x = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX : e.pageX;
        finalCoord.y = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageY : e.pageY;
        var swipedir; // We need to check if the element to which the event was bound contains a data-xthreshold | data-vthreshold:

        var ele_x_threshold = $this.parent().data('xthreshold') ? $this.parent().data('xthreshold') : $this.data('xthreshold'),
            ele_y_threshold = $this.parent().data('ythreshold') ? $this.parent().data('ythreshold') : $this.data('ythreshold'),
            h_threshold = typeof ele_x_threshold !== 'undefined' && ele_x_threshold !== false && _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(ele_x_threshold) ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(ele_x_threshold) : settings.swipe_h_threshold,
            v_threshold = typeof ele_y_threshold !== 'undefined' && ele_y_threshold !== false && _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(ele_y_threshold) ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(ele_y_threshold) : settings.swipe_v_threshold;

        if (originalCoord.y > finalCoord.y && originalCoord.y - finalCoord.y > v_threshold) {
          swipedir = 'swipeup';
        }

        if (originalCoord.x < finalCoord.x && finalCoord.x - originalCoord.x > h_threshold) {
          swipedir = 'swiperight';
        }

        if (originalCoord.y < finalCoord.y && finalCoord.y - originalCoord.y > v_threshold) {
          swipedir = 'swipedown';
        }

        if (originalCoord.x > finalCoord.x && originalCoord.x - finalCoord.x > h_threshold) {
          swipedir = 'swipeleft';
        }

        if (swipedir != undefined && started) {
          originalCoord.x = 0;
          originalCoord.y = 0;
          finalCoord.x = 0;
          finalCoord.y = 0;
          started = false; // Read event data into our endEvnt:

          var origEvent = e.originalEvent;
          var endEvnt = {
            'position': {
              'x': settings.touch_capable ? origEvent.touches[0].pageX : e.pageX,
              'y': settings.touch_capable ? origEvent.touches[0].pageY : e.pageY
            },
            'offset': {
              'x': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
              'y': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
            },
            'time': _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()(),
            'target': e.target
          }; // Calculate the swipe amount (normalized):

          var xAmount = Math.abs(startEvnt.position.x - endEvnt.position.x),
              yAmount = Math.abs(startEvnt.position.y - endEvnt.position.y);
          var touchData = {
            'startEvnt': startEvnt,
            'endEvnt': endEvnt,
            'direction': swipedir.replace('swipe', ''),
            'xAmount': xAmount,
            'yAmount': yAmount,
            'duration': endEvnt.time - startEvnt.time
          };
          hasSwiped = true;
          $this.trigger('swipe', touchData).trigger(swipedir, touchData);
        }
      }

      function touchEnd(e) {
        $this = $(e.currentTarget);
        var swipedir = "";
        $this.data('callee3', touchEnd);

        if (hasSwiped) {
          // We need to check if the element to which the event was bound contains a data-xthreshold | data-vthreshold:
          var ele_x_threshold = $this.data('xthreshold'),
              ele_y_threshold = $this.data('ythreshold'),
              h_threshold = typeof ele_x_threshold !== 'undefined' && ele_x_threshold !== false && _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(ele_x_threshold) ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(ele_x_threshold) : settings.swipe_h_threshold,
              v_threshold = typeof ele_y_threshold !== 'undefined' && ele_y_threshold !== false && _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(ele_y_threshold) ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(ele_y_threshold) : settings.swipe_v_threshold;
          var origEvent = e.originalEvent;
          var endEvnt = {
            'position': {
              'x': settings.touch_capable ? origEvent.changedTouches[0].pageX : e.pageX,
              'y': settings.touch_capable ? origEvent.changedTouches[0].pageY : e.pageY
            },
            'offset': {
              'x': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageX - ($this.offset() ? $this.offset().left : 0)) : Math.round(e.pageX - ($this.offset() ? $this.offset().left : 0)),
              'y': settings.touch_capable ? Math.round(origEvent.changedTouches[0].pageY - ($this.offset() ? $this.offset().top : 0)) : Math.round(e.pageY - ($this.offset() ? $this.offset().top : 0))
            },
            'time': _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()(),
            'target': e.target
          }; // Read event data into our endEvnt:

          if (startEvnt.position.y > endEvnt.position.y && startEvnt.position.y - endEvnt.position.y > v_threshold) {
            swipedir = 'swipeup';
          }

          if (startEvnt.position.x < endEvnt.position.x && endEvnt.position.x - startEvnt.position.x > h_threshold) {
            swipedir = 'swiperight';
          }

          if (startEvnt.position.y < endEvnt.position.y && endEvnt.position.y - startEvnt.position.y > v_threshold) {
            swipedir = 'swipedown';
          }

          if (startEvnt.position.x > endEvnt.position.x && startEvnt.position.x - endEvnt.position.x > h_threshold) {
            swipedir = 'swipeleft';
          } // Calculate the swipe amount (normalized):


          var xAmount = Math.abs(startEvnt.position.x - endEvnt.position.x),
              yAmount = Math.abs(startEvnt.position.y - endEvnt.position.y);
          var touchData = {
            'startEvnt': startEvnt,
            'endEvnt': endEvnt,
            'direction': swipedir.replace('swipe', ''),
            'xAmount': xAmount,
            'yAmount': yAmount,
            'duration': endEvnt.time - startEvnt.time
          };
          $this.trigger('swipeend', touchData);
        }

        started = false;
        hasSwiped = false;
      }

      $this.on(settings.startevent, touchStart);
      $this.on(settings.moveevent, touchMove);
      $this.on(settings.endevent, touchEnd);
    },
    remove: function remove() {
      $(this).off(settings.startevent, $(this).data.callee1).off(settings.moveevent, $(this).data.callee2).off(settings.endevent, $(this).data.callee3);
    }
  }; // scrollstart Event (also handles scrollend):

  $.event.special.scrollstart = {
    setup: function setup() {
      var thisObject = this,
          $this = $(thisObject),
          scrolling,
          timer;

      function trigger(event, state) {
        scrolling = state;
        triggerCustomEvent(thisObject, scrolling ? 'scrollstart' : 'scrollend', event);
      } // iPhone triggers scroll after a small delay; use touchmove instead


      $this.on(settings.scrollevent, function scrollFunc(event) {
        $this.data('callee', scrollFunc);

        if (!scrolling) {
          trigger(event, true);
        }

        clearTimeout(timer);
        timer = setTimeout(function () {
          trigger(event, false);
        }, 50);
      });
    },
    remove: function remove() {
      $(this).off(settings.scrollevent, $(this).data.callee);
    }
  }; // This is the orientation change (largely borrowed from jQuery Mobile):

  var win = $(window),
      get_orientation,
      last_orientation,
      initial_orientation_is_landscape,
      initial_orientation_is_default,
      portrait_map = {
    '0': true,
    '180': true
  };

  if (settings.orientation_support) {
    var ww = window.innerWidth || win.width(),
        wh = window.innerHeight || win.height(),
        landscape_threshold = 50;
    initial_orientation_is_landscape = ww > wh && ww - wh > landscape_threshold;
    initial_orientation_is_default = portrait_map[window.orientation];

    if (initial_orientation_is_landscape && initial_orientation_is_default || !initial_orientation_is_landscape && !initial_orientation_is_default) {
      portrait_map = {
        '-90': true,
        '90': true
      };
    }
  }

  $.event.special.orientationchange = {
    setup: function setup() {
      // If the event is supported natively, return false so that jQuery
      // will on to the event using DOM methods.
      if (settings.orientation_support) {
        return false;
      } // Get the current orientation to avoid initial double-triggering.


      last_orientation = get_orientation();
      win.on('throttledresize', handler);
      return true;
    },
    teardown: function teardown() {
      if (settings.orientation_support) {
        return false;
      }

      win.off('throttledresize', handler);
      return true;
    },
    add: function add(handleObj) {
      // Save a reference to the bound event handler.
      var old_handler = handleObj.handler;

      handleObj.handler = function (event) {
        event.orientation = get_orientation();
        return old_handler.apply(this, arguments);
      };
    }
  }; // If the event is not supported natively, this handler will be bound to
  // the window resize event to simulate the orientationchange event.

  function handler() {
    // Get the current orientation.
    var orientation = get_orientation();

    if (orientation !== last_orientation) {
      // The orientation has changed, so trigger the orientationchange event.
      last_orientation = orientation;
      win.trigger("orientationchange");
    }
  }

  $.event.special.orientationchange.orientation = get_orientation = function get_orientation() {
    var isPortrait = true,
        elem = document.documentElement;

    if (settings.orientation_support) {
      isPortrait = portrait_map[window.orientation];
    } else {
      isPortrait = elem && elem.clientWidth / elem.clientHeight < 1.1;
    }

    return isPortrait ? 'portrait' : 'landscape';
  }; // throttle Handler:


  $.event.special.throttledresize = {
    setup: function setup() {
      $(this).on('resize', throttle_handler);
    },
    teardown: function teardown() {
      $(this).off('resize', throttle_handler);
    }
  };

  var throttle = 250,
      throttle_handler = function throttle_handler() {
    curr = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()();
    diff = curr - lastCall;

    if (diff >= throttle) {
      lastCall = curr;
      $(this).trigger('throttledresize');
    } else {
      if (heldCall) {
        window.clearTimeout(heldCall);
      } // Promise a held call will still execute


      heldCall = window.setTimeout(handler, throttle - diff);
    }
  },
      lastCall = 0,
      heldCall,
      curr,
      diff; // Trigger a custom event:


  function triggerCustomEvent(obj, eventType, event, touchData) {
    var originalType = event.type;
    event.type = eventType;
    $.event.dispatch.call(obj, event, touchData);
    event.type = originalType;
  } // Correctly on anything we've overloaded:


  $.each({
    scrollend: 'scrollstart',
    swipeup: 'swipe',
    swiperight: 'swipe',
    swipedown: 'swipe',
    swipeleft: 'swipe',
    swipeend: 'swipe',
    tap2: 'tap',
    taphold2: 'taphold'
  }, function (e, srcE) {
    $.event.special[e] = {
      setup: function setup() {
        $(this).on(srcE, $.noop);
      }
    };
  });
  return $;
});

/***/ }),

/***/ "../riba/packages/core/src/vendors/debug.module.ts":
/*!*********************************************************!*\
  !*** ../riba/packages/core/src/vendors/debug.module.ts ***!
  \*********************************************************/
/*! exports provided: default, Debug, IDebugger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../riba/packages/core/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return debug__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IDebugger", function() { return debug__WEBPACK_IMPORTED_MODULE_0__["IDebugger"]; });



/* harmony default export */ __webpack_exports__["default"] = (debug__WEBPACK_IMPORTED_MODULE_0___default.a);


/***/ }),

/***/ "../riba/packages/core/src/vendors/index.ts":
/*!**************************************************!*\
  !*** ../riba/packages/core/src/vendors/index.ts ***!
  \**************************************************/
/*! exports provided: Debug, IDebugger, JQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _debug_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debug.module */ "../riba/packages/core/src/vendors/debug.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return _debug_module__WEBPACK_IMPORTED_MODULE_0__["Debug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IDebugger", function() { return _debug_module__WEBPACK_IMPORTED_MODULE_0__["IDebugger"]; });

/* harmony import */ var _jquery_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jquery.module */ "../riba/packages/core/src/vendors/jquery.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JQuery", function() { return _jquery_module__WEBPACK_IMPORTED_MODULE_1__["JQuery"]; });

/* harmony import */ var _polyfills_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyfills.module */ "../riba/packages/core/src/vendors/polyfills.module.ts");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "../riba/packages/core/src/vendors/jquery.module.ts":
/*!**********************************************************!*\
  !*** ../riba/packages/core/src/vendors/jquery.module.ts ***!
  \**********************************************************/
/*! exports provided: default, JQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JQuery", function() { return JQuery; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../riba/packages/core/node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jquery_touch_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_jquery-touch-events */ "../riba/packages/core/src/vendors/_jquery-touch-events.ts");

/**
 * JQuery Extension for mobile events: https://github.com/benmajor/jQuery-Touch-Events
 */

 // tslint:disable-next-line:variable-name

var JQuery = Object(_jquery_touch_events__WEBPACK_IMPORTED_MODULE_1__["default"])(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
/* harmony default export */ __webpack_exports__["default"] = (JQuery);


/***/ }),

/***/ "../riba/packages/core/src/vendors/polyfills.module.ts":
/*!*************************************************************!*\
  !*** ../riba/packages/core/src/vendors/polyfills.module.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_fn_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/fn/string/starts-with.js */ "../riba/packages/core/node_modules/core-js/fn/string/starts-with.js");
/* harmony import */ var core_js_fn_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise.js */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise_js__WEBPACK_IMPORTED_MODULE_1__);
// import '@babel/runtime-corejs2/regenerator/index'
// import '@babel/runtime-corejs2/core-js/promise.js';
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill#Polyfill
(function () {
  if (typeof window.CustomEvent === 'function') {
    return false;
  }

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();




/***/ }),

/***/ "../riba/packages/core/src/view.ts":
/*!*****************************************!*\
  !*** ../riba/packages/core/src/view.ts ***!
  \*****************************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../riba/packages/core/node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _riba__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./riba */ "../riba/packages/core/src/riba.ts");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./binding */ "../riba/packages/core/src/binding.ts");
/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers */ "../riba/packages/core/src/parsers.ts");
/* harmony import */ var _vendors_debug_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendors/debug.module */ "../riba/packages/core/src/vendors/debug.module.ts");










/**
 * A collection of bindings built from a set of parent nodes.
 */
var View =
/*#__PURE__*/
function () {
  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(View, null, [{
    key: "create",

    /**
     * Binder for mustache style `{model.property}` text Binders
     */

    /**
     * Helper function to Create a new view insite of a binding
     * @param bindin
     * @param models
     * @param anchorEl
     */
    value: function create(binding, models, anchorEl) {
      var template = binding.el.cloneNode(true);
      var view = new View(template, models, binding.view.options);
      view.bind();

      if (!binding || !binding.marker || binding.marker.parentNode === null) {
        this.debug('[View] Warn: No parent node for binding!');
      } else {
        binding.marker.parentNode.insertBefore(template, anchorEl);
      }

      return view;
    }
  }]);

  // public componentView: View | null = null;

  /**
   * The DOM elements and the model objects for binding are passed into the
   * constructor along with any local options that should be used throughout the
   * context of the view and it's bindings.
   * @param els
   * @param models
   * @param options
   */
  function View(els, models, options) {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, View);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "els", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "models", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "options", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "bindings", []);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "webComponents", []);

    if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(els)) {
      this.els = els;
    } else {
      this.els = [els];
    }

    this.models = models;
    this.options = options;
    this.build();
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(View, [{
    key: "buildBinding",
    value: function buildBinding(node, type, declaration, binder, identifier) {
      var parsedDeclaration = Object(_parsers__WEBPACK_IMPORTED_MODULE_7__["parseDeclaration"])(declaration);
      var keypath = parsedDeclaration.keypath;
      var pipes = parsedDeclaration.pipes;
      this.bindings.push(new _binding__WEBPACK_IMPORTED_MODULE_6__["Binding"](this, node, type, keypath, binder, pipes, identifier));
    }
    /**
     * Parses the DOM tree and builds `Binding` instances for every matched
     * binding declaration.
     */

  }, {
    key: "build",
    value: function build() {
      this.bindings = [];
      var elements = this.els;
      var i;
      var len;

      for (i = 0, len = elements.length; i < len; i++) {
        if (!this.options.templateDelimiters) {
          throw new Error('templateDelimiters required');
        }

        Object(_parsers__WEBPACK_IMPORTED_MODULE_7__["parseNode"])(this, elements[i], this.options.templateDelimiters);
      }

      this.bindings.sort(View.bindingComparator);
    }
  }, {
    key: "traverse",
    value: function traverse(node) {
      var bindingPrefix;

      if (this.options.fullPrefix) {
        bindingPrefix = this.options.fullPrefix;
      } else {
        // TODO FIXME
        bindingPrefix = this.options.prefix + '-';
      }

      if (!bindingPrefix) {
        throw new Error('prefix is required');
      }
      /** If true stop / block the parseNode recursion */


      var block = this.options.blockNodeNames.indexOf(node.nodeName) !== -1;
      var attributes = node.attributes;
      var bindInfos = [];
      var starBinders = this.options.starBinders; // bind attribute binders if available

      if (attributes && this.options.binders) {
        for (var i = 0, len = attributes.length; i < len; i++) {
          var nodeName = null;
          var binder = null;
          var identifier = null;
          var attribute = attributes[i]; // if attribute starts with the binding prefix. E.g. rv

          if (attribute.name.indexOf(bindingPrefix) === 0) {
            nodeName = attribute.name.slice(bindingPrefix.length); // if binder is not a starBinder binder should be setted

            if (this.options.binders.hasOwnProperty(nodeName)) {
              binder = this.options.binders[nodeName];
            }

            if (binder === null) {
              // seems to be a star binder (because binder was not set)
              // Check if any starBinder matchs
              for (var k = 0; k < starBinders.length; k++) {
                identifier = starBinders[k];
                var regexp = new RegExp("^".concat(identifier.replace(/\*/g, '.+'), "$"));

                if (regexp.test(nodeName)) {
                  binder = this.options.binders[identifier];
                  break;
                }
              }
            }

            if (binder === null) {
              if (this.options.binders.hasOwnProperty('*')) {
                binder = this.options.binders['*'];
                identifier = '*';
              } else {
                binder = _riba__WEBPACK_IMPORTED_MODULE_5__["Riba"].fallbackBinder;
              }
            } // if block is set childs not bound (the binder bound it by itself)
            // and build binding directly (do not push it to bindInfos array)


            if (binder.block) {
              this.buildBinding(node, nodeName, attribute.value, binder, identifier);

              if (node.removeAttribute && this.options.removeBinderAttributes) {
                node.removeAttribute(attribute.name);
              }

              return true;
            }

            bindInfos.push({
              attr: attribute,
              binder: binder,
              nodeName: nodeName,
              identifier: identifier
            });
          }
        }

        for (var _i = 0; _i < bindInfos.length; _i++) {
          var bindInfo = bindInfos[_i];
          this.buildBinding(node, bindInfo.nodeName, bindInfo.attr.value, bindInfo.binder, bindInfo.identifier);

          if (node.removeAttribute && this.options.removeBinderAttributes) {
            node.removeAttribute(bindInfo.attr.name);
          }
        }
      } // bind components


      if (!block) {
        var _nodeName = node.nodeName.toLowerCase();

        if (this.options.components && this.options.components[_nodeName] && !node._bound) {
          var COMPONENT = this.options.components[_nodeName]; // Fallback

          if (!window.customElements) {
            View.debug("Fallback for Webcomponent ".concat(_nodeName));
            var component = new COMPONENT(node, {
              fallback: true,
              view: this
            });
            this.webComponents.push(component);
          } else {
            View.debug("Define Webcomponent ".concat(_nodeName, " with customElements.define")); // if node.constructor is not HTMLElement and not HTMLUnknownElement, it was registed
            // @see https://stackoverflow.com/questions/27334365/how-to-get-list-of-registered-custom-elements

            if (customElements.get(_nodeName) || node.constructor !== HTMLElement && node.constructor !== HTMLUnknownElement) {
              View.debug("Web component already defined", node.constructor);
            } else {
              try {
                customElements.define(_nodeName, COMPONENT); // TODO ?? call unbind (on unbind this view) of this component instance to unbind this view
                // (not disconnectedCallback / disconnectedFallbackCallback, this is automatically called from customElements)

                var _component = customElements.get(_nodeName);

                _component.context = {
                  fallback: false,
                  view: this
                };
              } catch (error) {
                console.error(error); // Fallback

                var _component2 = new COMPONENT(node, {
                  fallback: true,
                  view: this
                });

                this.webComponents.push(_component2);
              }
            }
          }

          block = true;
        }
      }

      return block;
    }
    /**
     * Binds all of the current bindings for this view.
     */

  }, {
    key: "bind",
    value: function bind() {
      this.bindings.forEach(function (binding) {
        binding.bind();
      });
    }
    /**
     * Unbinds all of the current bindings for this view.
     */

  }, {
    key: "unbind",
    value: function unbind() {
      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(this.bindings)) {
        this.bindings.forEach(function (binding) {
          binding.unbind();
        });
        this.webComponents.forEach(function (webcomponent) {
          webcomponent.disconnectedFallbackCallback();
        });
      } // TODO fallback to unbind web components

    }
    /**
     * Syncs up the view with the model by running the routines on all bindings.
     */

  }, {
    key: "sync",
    value: function sync() {
      this.bindings.forEach(function (binding) {
        if (binding.sync) {
          binding.sync();
        }
      });
    }
    /**
     * Publishes the input values from the view back to the model (reverse sync).
     */

  }, {
    key: "publish",
    value: function publish() {
      this.bindings.forEach(function (binding) {
        if (binding.binder && binding.publish && binding.binder.publishes) {
          binding.publish();
        }
      });
    }
    /**
     * Updates the view's models along with any affected bindings.
     * @param models
     */

  }, {
    key: "update",
    value: function update() {
      var _this = this;

      var models = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(models).forEach(function (key) {
        _this.models[key] = models[key];
      });

      this.bindings.forEach(function (binding) {
        if (binding.update) {
          binding.update(models);
        }
      });
    }
  }]);

  return View;
}();

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(View, "debug", Object(_vendors_debug_module__WEBPACK_IMPORTED_MODULE_8__["Debug"])('riba:view'));

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(View, "DECLARATION_SPLIT", /((?:'[^']*')*(?:(?:[^\|']*(?:'[^']*')+[^\|']*)+|[^\|]+))|^$/g);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(View, "mustacheTextBinder", {
  name: 'mustache-text',
  routine: function routine(node, value) {
    node.data = value != null ? value : '';
  }
});

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(View, "bindingComparator", function (a, b) {
  var aPriority = a.binder ? a.binder.priority || 0 : 0;
  var bPriority = b.binder ? b.binder.priority || 0 : 0;
  return bPriority - aPriority;
});

/***/ }),

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
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ribajs/core */ "../riba/packages/core/src/index.ts");
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
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ribajs/core */ "../riba/packages/core/src/index.ts");
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
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ribajs/core */ "../riba/packages/core/src/index.ts");











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
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ribajs/core */ "../riba/packages/core/src/index.ts");
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
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ribajs/core */ "../riba/packages/core/src/index.ts");
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
  console.error('hello!');
  this.dispatcher.on('newPageReady', function () {
    console.error('newPageReady');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvYWRhcHRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9iaW5kZXJzL2FuaW1hdGUtY2xhc3NuYW1lLmJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9iaW5kZXJzL2Fzc2lnbi5iaW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvYmluZGVycy9hdHRyaWJ1dGUuYmluZGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2JpbmRlcnMvYmxvY2suYmluZGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2JpbmRlcnMvY2hlY2tlZC5iaW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvYmluZGVycy9jbGFzcy1uYW1lLmJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9iaW5kZXJzL2NsYXNzLmJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9iaW5kZXJzL2Rpc2FibGVkLmJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9iaW5kZXJzL2VhY2gtaXRlbS5iaW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvYmluZGVycy9lbmFibGVkLmJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9iaW5kZXJzL2hpZGUuYmluZGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2JpbmRlcnMvaHRtbC5iaW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvYmluZGVycy9pZi5iaW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvYmluZGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9iaW5kZXJzL29uLWV2ZW50LmJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9iaW5kZXJzL3JlbW92ZS1jbGFzcy5iaW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvYmluZGVycy9zaG93LmJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9iaW5kZXJzL3N0eWxlLWNzcy1wcm9wZXJ0eS5iaW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvYmluZGVycy90ZXh0LmJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9iaW5kZXJzL3ZhbHVlLmJpbmRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9iaW5kaW5nLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2NvbXBvbmVudHMvYWJzdHJhY3QtcmliYS1jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvY29tcG9uZW50cy9mYWtlLWh0bWwtZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2NvbXBvbmVudHMvcmliYS1jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvY29yZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9jb21wYXJlL2FuZC5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9jb21wYXJlL2JldHdlZW4uZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvY29tcGFyZS9lZ3QuZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvY29tcGFyZS9lbHQuZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvY29tcGFyZS9lcS5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9jb21wYXJlL2d0LmZvcm1hdHRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9mb3JtYXR0ZXJzL2NvbXBhcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9jb21wYXJlL2lzLWRlZmluZWQuZm9ybWF0dGVycy50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9mb3JtYXR0ZXJzL2NvbXBhcmUvaXMtb2JqZWN0LmZvcm1hdHRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9mb3JtYXR0ZXJzL2NvbXBhcmUvaXMtdW5kZWZpbmVkLmZvcm1hdHRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9jb21wYXJlL2x0LmZvcm1hdHRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9mb3JtYXR0ZXJzL2NvbXBhcmUvbmUuZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvY29tcGFyZS9ub3QuZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvY29tcGFyZS9vci5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9mb3JtYXR0ZXJzL21hdGgvZGlnaXRzLmZvcm1hdHRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9mb3JtYXR0ZXJzL21hdGgvZGl2aWRlZEJ5LmZvcm1hdHRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9mb3JtYXR0ZXJzL21hdGgvZXZlbi5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9tYXRoL2djZC5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9tYXRoL2luZGV4LnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvbWF0aC9taW51cy5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9tYXRoL21vZHVsby5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9tYXRoL251bWJlci5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9tYXRoL3BsdXMuZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvbWF0aC9yYW5kb20uZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvbWF0aC90aW1lcy5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9tYXRoL3VuZXZlbi5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9wcm9wZXJ0eS9jb250YWlucy5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9wcm9wZXJ0eS9lbXB0eS5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9wcm9wZXJ0eS9maXJzdC5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9wcm9wZXJ0eS9nZXQuZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvcHJvcGVydHkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9wcm9wZXJ0eS9pc0xhc3QuZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvcHJvcGVydHkvbGFzdC5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9wcm9wZXJ0eS9wYXJzZS5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9wcm9wZXJ0eS9yYW5nZS5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9wcm9wZXJ0eS9zZXQuZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvcHJvcGVydHkvc2l6ZS5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9zcGVjaWFsL2FyZ3MuZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvc3BlY2lhbC9ib29sZWFuLmZvcm1hdHRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9mb3JtYXR0ZXJzL3NwZWNpYWwvY2FsbC5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9zcGVjaWFsL2N1cnJlbmN5LmZvcm1hdHRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9mb3JtYXR0ZXJzL3NwZWNpYWwvZGVidWcuZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvc3BlY2lhbC9kZWZhdWx0LmZvcm1hdHRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9mb3JtYXR0ZXJzL3NwZWNpYWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9zcGVjaWFsL2pzb24uZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvc3RyaW5nL2FwcGVuZC5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9zdHJpbmcvZG93bmNhc2UuZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvc3RyaW5nL2ZpbGxlZC5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9zdHJpbmcvaGFuZGxlaXplLmZvcm1hdHRlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9mb3JtYXR0ZXJzL3N0cmluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9mb3JtYXR0ZXJzL3N0cmluZy9pc1N0cmluZy5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9zdHJpbmcvbWF0Y2guZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvc3RyaW5nL3BsdXJhbGl6ZS5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9zdHJpbmcvcHJlcGVuZC5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9zdHJpbmcvcmVwbGFjZS1maXJzdC5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9zdHJpbmcvcmVwbGFjZS5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9zdHJpbmcvc2xpY2UuZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvc3RyaW5nL3N0cmluZy5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9zdHJpbmcvc3RyaXAtaHRtbC5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvZm9ybWF0dGVycy9zdHJpbmcvc3RyaXAuZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL2Zvcm1hdHRlcnMvc3RyaW5nL3VwY2FzZS5mb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvaW50ZXJmYWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9vYnNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy9wYXJzZXJzLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL3JpYmEudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvc2VydmljZXMvYmluZGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvc2VydmljZXMvY29tcG9uZW50LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvc2VydmljZXMvZXZlbnQtZGlzcGF0Y2hlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL3NlcnZpY2VzL2Zvcm1hdHRlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL3NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL3NlcnZpY2VzL21vZHVsZS1lbGVtZW50LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvc2VydmljZXMvbW9kdWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvc2VydmljZXMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvdmVuZG9ycy9fanF1ZXJ5LXRvdWNoLWV2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy92ZW5kb3JzL2RlYnVnLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy92ZW5kb3JzL2luZGV4LnRzIiwid2VicGFjazovLy8uLi9yaWJhL3BhY2thZ2VzL2NvcmUvc3JjL3ZlbmRvcnMvanF1ZXJ5Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi4vcmliYS9wYWNrYWdlcy9jb3JlL3NyYy92ZW5kb3JzL3BvbHlmaWxscy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4uL3JpYmEvcGFja2FnZXMvY29yZS9zcmMvdmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50cy9iczQtc2lkZWJhci9iczQtc2lkZWJhci5jb21wb25lbnQucHVnIiwid2VicGFjazovLy8uL3NyYy90cy9jb21wb25lbnRzL2JzNC1zaWRlYmFyL2JzNC1zaWRlYmFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50cy9iczQtdG9nZ2xlLWJ1dHRvbi9iczQtdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50cy9iczQtdG9nZ2xlLWJ1dHRvbi9iczQtdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudHMvcnYtaWNvbi9ydi1pY29uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50cy9zaG9waWZ5LWxpbmtsaXN0L3Nob3BpZnktbGlua2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudHMvc2hvcGlmeS1saW5rbGlzdC9zaG9waWZ5LWxpbmtsaXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vZnMgKGlnbm9yZWQpIl0sIm5hbWVzIjpbIkFkYXB0ZXIiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImlkIiwiY291bnRlciIsInZhbHVlIiwid2Vha21hcCIsIl9fcnYiLCJjYWxsYmFja3MiLCJyZWYiLCJsZW5ndGgiLCJwb2ludGVycyIsImZuIiwib3JpZ2luYWwiLCJtYXAiLCJ3ZWFrUmVmZXJlbmNlIiwiYXJncyIsInJlc3BvbnNlIiwiYXBwbHkiLCJmb3JFYWNoIiwiciIsImsiLCJjYWxsYmFjayIsInN5bmMiLCJrZXlwYXRoIiwiQVJSQVlfTUVUSE9EUyIsInN0dWJGdW5jdGlvbiIsImluZGV4T2YiLCJwdXNoIiwiaWR4Iiwic3BsaWNlIiwiY2xlYW51cFdlYWtSZWZlcmVuY2UiLCJkZXNjIiwiZ2V0Iiwic2V0IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIm5ld1ZhbHVlIiwidW5vYnNlcnZlTXV0YXRpb25zIiwiX2NhbGxiYWNrcyIsImNiIiwib2JzZXJ2ZU11dGF0aW9ucyIsImFkYXB0ZXIiLCJhbmltYXRlU3RhckJpbmRlciIsIm5hbWUiLCJmdW5jdGlvbiIsInByaW9yaXR5IiwiYmluZCIsImVsIiwiJGVsIiwiJCIsImFuaW1hdGVDbGFzc05hbWUiLCJhZGRDbGFzcyIsInVuYmluZCIsInJvdXRpbmUiLCJzdGFydCIsInJlbW92ZUNsYXNzIiwiYXNzaWduQmluZGVyIiwiVXRpbHMiLCJleHRlbmQiLCJ2aWV3IiwibW9kZWxzIiwicHVibGlzaEJpbmRlckNoYW5nZUV2ZW50SGFuZGxlciIsImV2ZW50IiwiZGF0YSIsImRldGFpbCIsIm9sZFZhbHVlIiwib2JzZXJ2ZXIiLCJzZXRWYWx1ZSIsInN0YXJCaW5kZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidHlwZSIsImN1c3RvbURhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiRXJyb3IiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJuYW1lc3BhY2UiLCJibG9ja0JpbmRlciIsImJsb2NrIiwiY2hlY2tlZEJpbmRlciIsInB1Ymxpc2hlcyIsInNlbGYiLCJwdWJsaXNoIiwiY2hlY2tlZCIsImdldFN0cmluZyIsImNsYXNzU3RhckJpbmRlciIsImNsYXNzTGlzdCIsImNsYXNzTmFtZSIsInNwbGl0IiwiZmlsdGVyIiwiZWxlIiwiYXJnIiwidHJpbSIsIl8iLCJpIiwiam9pbiIsImNsYXNzQmluZGVyIiwic3RhdGljQ2xhc3NlcyIsImF0dHIiLCJkaXNhYmxlZEJpbmRlciIsImRpc2FibGVkIiwiZWFjaFN0YXJCaW5kZXIiLCJtYXJrZXIiLCJkb2N1bWVudCIsImNyZWF0ZUNvbW1lbnQiLCJpdGVyYXRlZCIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsImNvbGxlY3Rpb24iLCJtb2RlbE5hbWUiLCJpbmRleFByb3AiLCJnZXRJdGVyYXRpb25BbGlhcyIsIm1vZGVsIiwiaW5kZXgiLCJzY29wZSIsIiRwYXJlbnQiLCJwcmV2aW91cyIsImVscyIsIlZpZXciLCJjcmVhdGUiLCJuZXh0U2libGluZyIsIm1hdGNoSW5kZXgiLCJuZXh0VmlldyIsIm5leHRJbmRleCIsInVuZGVmaW5lZCIsInRpbWVzIiwicG9wIiwibm9kZU5hbWUiLCJiaW5kaW5ncyIsImJpbmRpbmciLCJ1cGRhdGUiLCJrZXkiLCJlbmFibGVkQmluZGVyIiwiaGlkZUJpbmRlciIsInN0eWxlIiwiZGlzcGxheSIsImh0bWxCaW5kZXIiLCJpbm5lckhUTUwiLCJpZkJpbmRlciIsImF0dGFjaGVkIiwiYm91bmQiLCJuZXN0ZWQiLCJvcHRpb25zIiwib25TdGFyQmluZGVyIiwiaGFuZGxlciIsIkpRdWVyeSIsIm9mZiIsImV2ZW50TmFtZSIsImV2ZW50SGFuZGxlciIsIm9uIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsInJlbW92ZUNsYXNzQmluZGVyIiwic2hvd0JpbmRlciIsImNzc1N0YXJCaW5kZXIiLCJwcm9wZXJ0eU5hbWUiLCJyZW1vdmVQcm9wZXJ0eSIsInRleHRCaW5kZXIiLCJ0ZXh0Q29udGVudCIsImRlYnVnIiwiRGVidWciLCJnZXREYXRhIiwicHJvcCIsInRhZ05hbWUiLCJjb250ZW50ZWRpdGFibGUiLCJpc1JhZGlvIiwidmFsdWVCaW5kZXIiLCJnZXRWYWx1ZSIsIm9wdGlvbiIsInNlbGVjdGVkIiwiRXZlbnQiLCJnZXRJbnB1dFZhbHVlIiwiQmluZGluZyIsImJpbmRlciIsImZvcm1hdHRlcnMiLCJpZGVudGlmaWVyIiwiZ2V0U3RhckFyZ3VtZW50cyIsIkFycmF5IiwiT2JzZXJ2ZXIiLCJ0b2tlbiIsInBhcnNlVHlwZSIsIlBSSU1JVElWRSIsIktFWVBBVEgiLCJvYnNlcnZlIiwidGFyZ2V0IiwiZm9ybWF0dGVySW5kZXgiLCJhaSIsInByaW1pdGl2ZVZhbHVlIiwiZm9ybWF0dGVyT2JzZXJ2ZXJzIiwicmVkdWNlIiwicmVzdWx0IiwiZGVjbGFyYXRpb24iLCJtYXRjaCIsIkZPUk1BVFRFUl9BUkdTIiwic2hpZnQiLCJmb3JtYXR0ZXIiLCJwcm9jZXNzZWRBcmdzIiwicGFyc2VGb3JtYXR0ZXJBcmd1bWVudHMiLCJyZWFkIiwiZXYiLCJjYWxsIiwiZm9ybWF0dGVkVmFsdWUiLCJ0aGVuIiwiY2F0Y2giLCJyZWFsVmFsdWUiLCJyZWR1Y2VSaWdodCIsIkZPUk1BVFRFUl9TUExJVCIsInBhcnNlVGFyZ2V0IiwicHJlbG9hZERhdGEiLCJ1bm9ic2VydmUiLCJmaSIsInJlZ2V4cCIsIlJlZ0V4cCIsInJlcGxhY2UiLCJ0ZXN0Iiwic3BsaXR0ZWRJZGVudGlmaWVyIiwic3RhckNvdW50Iiwic2xpY2UiLCJzdWJJZGVudGlmaWVyIiwiYXJnc1N0cmluZyIsInNlcGFyYXRvciIsImlzTnVtYmVyIiwiTnVtYmVyIiwic3Vic3RyaW5nIiwiQ29tcG9uZW50IiwiZWxlbWVudCIsImNvbnRleHQiLCJ3aW5kb3ciLCJjdXN0b21FbGVtZW50cyIsInBhcmVudEVsZW1lbnQiLCJkaXNjb25uZWN0ZWRGYWxsYmFja0NhbGxiYWNrIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJpbml0QXR0cmlidXRlT2JzZXJ2ZXIiLCJjaGVja1JlcXVpcmVkQXR0cmlidXRlcyIsImxvYWRUZW1wbGF0ZSIsInRlbXBsYXRlIiwiYXV0b2JpbmQiLCJyZXNvbHZlIiwiYWxsRGVmaW5lZCIsInJlcXVpcmVkQXR0cmlidXRlcyIsInJlcXVpcmVkQXR0cmlidXRlIiwiaXNOYU4iLCJpc0pzb24iLCJKU09OIiwicGFyc2UiLCJmbkFyZ3MiLCJhdHRyaWJ1dGVPYnNlcnZlckZhbGxiYWNrIiwiZGlzY29ubmVjdCIsIkJpbmRlckNoYW5nZWRFdmVudEhhbmRsZXIiLCJhdHRyaWJ1dGVOYW1lIiwicGFyc2VBdHRyaWJ1dGUiLCJjYW1lbENhc2UiLCJwYXJzZWRBdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJvbGREb2N1bWVudCIsIm5ld0RvY3VtZW50IiwidGVtcGxhdGVMb2FkZWQiLCJiZWZvcmVCaW5kIiwicmliYSIsIlJpYmEiLCJ2aWV3T3B0aW9ucyIsImdldFZpZXdPcHRpb25zIiwiY2FsbEZvcm1hdHRlckhhbmRsZXIiLCJhcmdzRm9ybWF0dGVySGFuZGxlciIsInByb3RvdHlwZSIsImNoaWxkTm9kZXMiLCJhZnRlckJpbmQiLCJidWlsZCIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJtdXRhdGlvbiIsImF0dHJpYnV0ZU5hbWVzcGFjZSIsImF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGUiLCJub2RlVmFsdWUiLCJGYWtlSFRNTEVsZW1lbnQiLCJIVE1MRWxlbWVudCIsImNvbnN0cnVjdG9yIiwid3JpdGFibGUiLCJSaWJhQ29tcG9uZW50IiwiY29yZU1vZHVsZSIsInNwZWNpYWxGb3JtYXR0ZXJzIiwiY29tcGFyZUZvcm1hdHRlcnMiLCJtYXRoRm9ybWF0dGVycyIsInN0cmluZ0Zvcm1hdHRlcnMiLCJwcm9wZXJ0eUZvcm1hdHRlcnMiLCJiaW5kZXJzIiwic2VydmljZXMiLCJhbmQiLCJhIiwiYiIsImJldHdlZW4iLCJudW0iLCJlZ3QiLCJlbHQiLCJlcSIsImd0IiwiaXNEZWZpbmVkIiwiaXNPYmplY3QiLCJpc1VuZGVmaW5lZCIsIm5lIiwibHQiLCJvciIsIm5vdCIsImRpZ2l0cyIsInN0ciIsImRpdmlkZWRCeSIsImV2ZW4iLCJfZ2NkIiwiZ2NkIiwibWludXMiLCJudW1iZXIiLCJudW1iZXJGb3JtYXR0ZXIiLCJtb2R1bG8iLCJwbHVzIiwicmFuZG9tIiwidGltZXNGb3JtYXR0ZXIiLCJ1bmV2ZW4iLCJkZWYiLCJnZXROdW1iZXIiLCJhcnJheSIsImlzQXJyYXkiLCJNYXRoIiwiZmxvb3IiLCJjb250YWlucyIsInNlYXJjaCIsImlzU3RyaW5nIiwiZW1wdHkiLCJzaXplIiwiZmlyc3QiLCJjaGFyQXQiLCJsYXN0IiwiaXNMYXN0IiwicmFuZ2UiLCJqc29uU3RyaW5nIiwib2JqZWN0IiwiYXJyIiwiZW5kIiwiYm9vbGVhbkZvcm1hdHRlciIsImN1cnJlbmN5IiwiYW1vdW50Iiwic3ltYm9sIiwidG9GaXhlZCIsInRvU3RyaW5nIiwiX2RlYnVnIiwidG9QcmludCIsImRlZmF1bHRCaW5kZXIiLCJkZWZhdWx0VmFsdWUiLCJib29sZWFuIiwiZGVmYXVsdCIsImpzb24iLCJyZXBsYWNlU2luZ2xlUXVhdGUiLCJhcHBlbmQiLCJkb3duY2FzZSIsInRvTG93ZXJDYXNlIiwiZmlsbGVkIiwiaGFuZGxlaXplIiwic3RyaXAiLCJwbHVyYWxpemUiLCJwcmVwZW5kIiwidXBjYXNlIiwicmVwbGFjZUZpcnN0Iiwic3RyaXBIdG1sIiwic3RyaW5nRm9ybWF0dGVyIiwiZmxhZ3MiLCJpbnB1dCIsInNpbmd1bGFyIiwicGx1cmFsIiwicmVwbGFjZVZhbHVlIiwiaHRtbCIsInRtcCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJ0b1VwcGVyQ2FzZSIsImFkYXB0ZXJzIiwicm9vdEludGVyZmFjZSIsImludGVyZmFjZXMiLCJyb290IiwidG9rZW5zIiwiY3VycmVudCIsInBhdGgiLCJjaHIiLCJvYmplY3RQYXRoIiwicGFyc2VSZXN1bHQiLCJnZXRSb290T2JqZWN0IiwicmVhbGl6ZSIsInN1YnN0ciIsInRva2VuaXplIiwidW5yZWFjaGVkIiwicHJldiIsIm5leHQiLCJhY3RpdmUiLCJyb290UHJvcCIsIlRFWFQiLCJCSU5ESU5HIiwiUVVPVEVEX1NUUiIsIkRFQ0xBUkFUSU9OX1NQTElUIiwicGFyc2VUZW1wbGF0ZSIsImRlbGltaXRlcnMiLCJsYXN0SW5kZXgiLCJvcGVuIiwiY2xvc2UiLCJsYXN0VG9rZW4iLCJwYXJzZU5vZGUiLCJub2RlIiwidGVtcGxhdGVEZWxpbWl0ZXJzIiwibm9kZVR5cGUiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJidWlsZEJpbmRpbmciLCJtdXN0YWNoZVRleHRCaW5kZXIiLCJ0cmF2ZXJzZSIsInBhcnNlRGVjbGFyYXRpb24iLCJtYXRjaGVzIiwicGlwZXMiLCJfcHJlZml4IiwiX2Z1bGxQcmVmaXgiLCJtb2R1bGUiLCJNb2R1bGVzU2VydmljZSIsImNvbXBvbmVudHMiLCJpbnN0YW5jZSIsImNvbmNhdCIsInByZWZpeCIsImJsb2NrTm9kZU5hbWVzIiwic3RhckJpbmRlcnMiLCJmdWxsUHJlZml4IiwicmVtb3ZlQmluZGVyQXR0cmlidXRlcyIsIk9iamVjdCIsInVwZGF0ZU9wdGlvbnMiLCJCaW5kZXJzU2VydmljZSIsImZhbGxiYWNrTmFtZSIsImZvcmNlRmFsbGJhY2siLCJlbGVtZW50cyIsIk1vZHVsZUVsZW1lbnRTZXJ2aWNlIiwiQ29tcG9uZW50U2VydmljZSIsImNvbXBvbmVudCIsIkV2ZW50RGlzcGF0Y2hlciIsImluc3RhbmNlcyIsImUiLCJmIiwiZXZlbnRzIiwiRm9ybWF0dGVyU2VydmljZSIsInJlZ2lzdCIsInJlZ2lzdHMiLCJ1cmwiLCJyZWplY3QiLCJnZXRKU09OIiwiZG9uZSIsImZhaWwiLCJqcXhociIsInRleHRTdGF0dXMiLCJkYXRhVHlwZSIsInBvc3QiLCJhamF4IiwidmFsIiwibiIsInJlc3VsdHMiLCJkZWVwIiwib2JqZWN0MSIsIm9iamVjdE4iLCJvYmplY3QyIiwiYWpheFNldHVwIiwiYmVmb3JlU2VuZCIsInhociIsInNldFJlcXVlc3RIZWFkZXIiLCJfcmVxdWVzdEhlYWRlcnNFYWNoUmVxdWVzdCIsInhoclRpbWVvdXQiLCJkZWZlcnJlZCIsInJlcSIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsIm9udGltZW91dCIsInRpbWVvdXQiLCJoZWFkZXIiLCJzZW5kIiwicHJvbWlzZSIsInByb20iLCJsb2NhdGlvbiIsImwiLCJnZXRMb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsInBhdGhuYW1lIiwicCIsInBvcnQiLCJpc1Byb3Rva29sbCIsImlzQWJzb2x1dGUiLCJzdGFydHNXaXRoIiwiaHJlZiIsInJlZ2V4IiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCIsImhhc2giLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwidGl0bGUiLCJ3IiwibWF4IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJpbm5lcldpZHRoIiwiaCIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiZ3JvdXBlZCIsImNoZWNrVXJsIiwiYWJzb2x1dGVVcmwiLCJpc0Fic29sdXRlVXJsIiwiaG9zdG5hbWUiLCJpc0V4dGVybmFsIiwiaXNFeHRlcm5hbFVybCIsImF0dHJGbiIsInRvdWNoQ2FwYWJsZSIsInNldHRpbmdzIiwidGFwX3BpeGVsX3JhbmdlIiwic3dpcGVfaF90aHJlc2hvbGQiLCJzd2lwZV92X3RocmVzaG9sZCIsInRhcGhvbGRfdGhyZXNob2xkIiwiZG91YmxldGFwX2ludCIsInNoYWtlX3RocmVzaG9sZCIsInRvdWNoX2NhcGFibGUiLCJvcmllbnRhdGlvbl9zdXBwb3J0Iiwic3RhcnRldmVudCIsImVuZGV2ZW50IiwibW92ZWV2ZW50IiwidGFwZXZlbnQiLCJzY3JvbGxldmVudCIsImhvbGRfdGltZXIiLCJ0YXBfdGltZXIiLCJ0b3VjaCIsImlzVG91Y2hDYXBhYmxlIiwiZ2V0U3RhcnRFdmVudCIsImdldEVuZEV2ZW50IiwiZ2V0TW92ZUV2ZW50IiwiZ2V0VGFwRXZlbnQiLCJnZXRTY3JvbGxFdmVudCIsInNldFN3aXBlVGhyZXNob2xkWCIsInRocmVzaG9sZCIsInNldFN3aXBlVGhyZXNob2xkWSIsInNldERvdWJsZVRhcEludCIsImludGVydmFsIiwic2V0VGFwSG9sZFRocmVzaG9sZCIsInNldFRhcFJhbmdlIiwiZWFjaCIsInRyaWdnZXIiLCJzcGVjaWFsIiwidGFwc3RhcnQiLCJzZXR1cCIsInRoaXNPYmplY3QiLCIkdGhpcyIsInRhcFN0YXJ0RnVuYyIsIndoaWNoIiwib3JpZ0V2ZW50Iiwib3JpZ2luYWxFdmVudCIsInRvdWNoRGF0YSIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwicm91bmQiLCJjaGFuZ2VkVG91Y2hlcyIsIm9mZnNldCIsImxlZnQiLCJ0b3AiLCJ0cmlnZ2VyQ3VzdG9tRXZlbnQiLCJyZW1vdmUiLCJjYWxsZWUiLCJ0YXBtb3ZlIiwidGFwTW92ZUZ1bmMiLCJ0YXBlbmQiLCJ0YXBFbmRGdW5jIiwidGFwaG9sZCIsIm9yaWdUYXJnZXQiLCJzdGFydF9wb3MiLCJ4IiwieSIsImVuZF94IiwiZW5kX3kiLCJ0YXBIb2xkRnVuYzEiLCJzdGFydF90aW1lIiwidGFyZ2V0VG91Y2hlcyIsImVsZV90aHJlc2hvbGQiLCJwYXJlbnQiLCJzZXRUaW1lb3V0IiwiZGlmZl94IiwiZGlmZl95IiwiZW5kX3RpbWUiLCJkdXJhdGlvbiIsImV2dF9uYW1lIiwidGFwSG9sZEZ1bmMyIiwiY2xlYXJUaW1lb3V0IiwidGFwSG9sZEZ1bmMzIiwiY2FsbGVlMSIsImNhbGxlZTIiLCJjYWxsZWUzIiwiZG91YmxldGFwIiwiYWN0aW9uIiwiZmlyc3RUYXAiLCJjb29saW5nIiwiZG91YmxlVGFwRnVuYzEiLCJzcmNFbGVtZW50IiwiZG91YmxlVGFwRnVuYzIiLCJub3ciLCJsYXN0VG91Y2giLCJkZWx0YSIsImxhc3RUYXAiLCJ0aW1lIiwic2luZ2xldGFwIiwic3RhcnRUaW1lIiwic2luZ2xlVGFwRnVuYzEiLCJzaW5nbGVUYXBGdW5jMiIsImVuZF9wb3NfeCIsImVuZF9wb3NfeSIsInRhcCIsInN0YXJ0ZWQiLCJ0YXBGdW5jMSIsInRhcEZ1bmMyIiwic3dpcGUiLCJoYXNTd2lwZWQiLCJvcmlnaW5hbENvb3JkIiwiZmluYWxDb29yZCIsInN0YXJ0RXZudCIsInRvdWNoU3RhcnQiLCJjdXJyZW50VGFyZ2V0IiwidG91Y2hNb3ZlIiwic3dpcGVkaXIiLCJlbGVfeF90aHJlc2hvbGQiLCJlbGVfeV90aHJlc2hvbGQiLCJoX3RocmVzaG9sZCIsInZfdGhyZXNob2xkIiwiZW5kRXZudCIsInhBbW91bnQiLCJhYnMiLCJwb3NpdGlvbiIsInlBbW91bnQiLCJ0b3VjaEVuZCIsInNjcm9sbHN0YXJ0Iiwic2Nyb2xsaW5nIiwidGltZXIiLCJzdGF0ZSIsInNjcm9sbEZ1bmMiLCJ3aW4iLCJnZXRfb3JpZW50YXRpb24iLCJsYXN0X29yaWVudGF0aW9uIiwiaW5pdGlhbF9vcmllbnRhdGlvbl9pc19sYW5kc2NhcGUiLCJpbml0aWFsX29yaWVudGF0aW9uX2lzX2RlZmF1bHQiLCJwb3J0cmFpdF9tYXAiLCJ3dyIsIndpZHRoIiwid2giLCJoZWlnaHQiLCJsYW5kc2NhcGVfdGhyZXNob2xkIiwib3JpZW50YXRpb24iLCJvcmllbnRhdGlvbmNoYW5nZSIsInRlYXJkb3duIiwiYWRkIiwiaGFuZGxlT2JqIiwib2xkX2hhbmRsZXIiLCJhcmd1bWVudHMiLCJpc1BvcnRyYWl0IiwiZWxlbSIsInRocm90dGxlZHJlc2l6ZSIsInRocm90dGxlX2hhbmRsZXIiLCJ0aHJvdHRsZSIsImN1cnIiLCJkaWZmIiwibGFzdENhbGwiLCJoZWxkQ2FsbCIsImV2ZW50VHlwZSIsIm9yaWdpbmFsVHlwZSIsImRpc3BhdGNoIiwic2Nyb2xsZW5kIiwic3dpcGV1cCIsInN3aXBlcmlnaHQiLCJzd2lwZWRvd24iLCJzd2lwZWxlZnQiLCJzd2lwZWVuZCIsInRhcDIiLCJ0YXBob2xkMiIsInNyY0UiLCJub29wIiwidG91Y2hFdmVudHMiLCJqcXVlcnkiLCJwYXJhbXMiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImV2dCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiYW5jaG9yRWwiLCJjbG9uZU5vZGUiLCJwYXJzZWREZWNsYXJhdGlvbiIsImxlbiIsInNvcnQiLCJiaW5kaW5nQ29tcGFyYXRvciIsImJpbmRpbmdQcmVmaXgiLCJpbmNsdWRlcyIsImJpbmRJbmZvcyIsImZhbGxiYWNrQmluZGVyIiwiYmluZEluZm8iLCJfYm91bmQiLCJDT01QT05FTlQiLCJmYWxsYmFjayIsIndlYkNvbXBvbmVudHMiLCJIVE1MVW5rbm93bkVsZW1lbnQiLCJkZWZpbmUiLCJ3ZWJjb21wb25lbnQiLCJhUHJpb3JpdHkiLCJiUHJpb3JpdHkiLCJCczRTaWRlYmFyQ29tcG9uZW50IiwiY29udGFpbmVyU2VsZWN0b3IiLCJoaWRlIiwidG9nZ2xlIiwiYXV0b1Nob3dPbldpZGVyVGhhbiIsImF1dG9IaWRlT25TbGltbWVyVGhhbiIsImF1dG9IaWRlT25QYXRobmFtZXMiLCJvdmVybGF5T25TbGltbWVyVGhhbiIsImluaXQiLCJnZXRDb21wdXRlZFN0eWxlIiwidG9nZ2xlQnV0dG9uRXZlbnRzIiwidGFyZ2V0SWQiLCJvblJlc2l6ZSIsInNldFN0YXRlQnlFbnZpcm9tZW50Iiwib25TdGF0ZUNoYW5nZSIsInZ3IiwiZ2V0Vmlld3BvcnREaW1lbnNpb25zIiwic2hvdyIsInNldENvbnRhaW5lcnNTdHlsZSIsImRpcmVjdG9uIiwib25TaWRlIiwib25PdmVybGF5Iiwib25IaWRkZW4iLCJjb250YWluZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1vdmUiLCJjb250YWluZXIiLCJzZXRDb250YWluZXJTdHlsZSIsImNvblN0eWxlIiwidHJhbnNpdGlvbiIsImluaXRDb250YWluZXJzIiwiaGFzQ2hpbGROb2RlcyIsInB1Z1RlbXBsYXRlIiwib2Zmc2V0V2lkdGgiLCJCczRUb2dnbGVCdXR0b25Db21wb25lbnQiLCJpc0Nsb3NlZCIsImV2ZW50RGlzcGF0Y2hlciIsIkljb25Db21wb25lbnQiLCJsb2FkIiwiY3NzIiwiY29sb3IiLCJkaXJlY3Rpb24iLCJjbGFzc1N0cmluZyIsIlNob3BpZnlMaW5rbGlzdENvbXBvbmVudCIsImxpbmtsaXN0Iiwic3lzdGVtIiwibGlua2xpc3RzIiwiTWFpbiIsInJvdXRlck1vZHVsZSIsImJzNE1vZHVsZSIsIkN1c3RvbUNvbXBvbmVudHMiLCJkaXNwYXRjaGVyIiwiUHJpc20iLCJtYWluIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBD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QUFDcEJuVSxNQUFJLEVBQUUsUUFEYztBQUVwQmdLLE1BRm9CLGdCQUVmNEcsR0FGZSxFQUVGO0FBQ2hCLFdBQU9BLEdBQUcsQ0FBQ29FLFdBQUosRUFBUDtBQUNEO0FBSm1CLENBQWYsQzs7Ozs7Ozs7Ozs7O0FDSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFFTyxJQUFNcE0sUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBTThCckMsT0FOOUIsRUFNaUQ7QUFFN0MsVUFBSSxDQUFDQSxPQUFPLENBQUMwTyxRQUFiLEVBQXVCO0FBQ3JCLGNBQU0sSUFBSW5ULEtBQUosQ0FBVSx3QkFBVixDQUFOO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDeUUsT0FBTyxDQUFDMk8sYUFBYixFQUE0QjtBQUMxQixjQUFNLElBQUlwVCxLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQUNEOztBQUVEOEcsY0FBUSxDQUFDcU0sUUFBVCxHQUFvQjFPLE9BQU8sQ0FBQzBPLFFBQTVCO0FBQ0FyTSxjQUFRLENBQUN1TSxVQUFULEdBQXNCLGtGQUFZdk0sUUFBUSxDQUFDcU0sUUFBckIsQ0FBdEI7QUFDQXJNLGNBQVEsQ0FBQ3NNLGFBQVQsR0FBeUIzTyxPQUFPLENBQUMyTyxhQUFqQztBQUNEO0FBRUQ7Ozs7O0FBckJGO0FBQUE7QUFBQSw2QkF5QnlCdFcsT0F6QnpCLEVBeUIwQ3dXLElBekIxQyxFQXlCc0Q7QUFDbEQsVUFBTUMsTUFBYSxHQUFHLEVBQXRCO0FBQ0EsVUFBSUMsT0FBYSxHQUFHO0FBQUNoUyxTQUFDLEVBQUU4UixJQUFKO0FBQVVHLFlBQUksRUFBRTtBQUFoQixPQUFwQjtBQUNBLFVBQUk3USxLQUFKO0FBQ0EsVUFBSThRLEdBQUo7O0FBRUEsV0FBSzlRLEtBQUssR0FBRyxDQUFiLEVBQWdCQSxLQUFLLEdBQUc5RixPQUFPLENBQUNkLE1BQWhDLEVBQXdDNEcsS0FBSyxFQUE3QyxFQUFpRDtBQUMvQzhRLFdBQUcsR0FBRzVXLE9BQU8sQ0FBQ3lULE1BQVIsQ0FBZTNOLEtBQWYsQ0FBTjs7QUFDQSxZQUFJLENBQUMsQ0FBQyxDQUFDa0UsUUFBUSxDQUFDdU0sVUFBVCxDQUFvQnBXLE9BQXBCLENBQTRCeVcsR0FBNUIsQ0FBUCxFQUF5QztBQUN2Q0gsZ0JBQU0sQ0FBQ3JXLElBQVAsQ0FBWXNXLE9BQVo7QUFDQUEsaUJBQU8sR0FBRztBQUFDaFMsYUFBQyxFQUFFa1MsR0FBSjtBQUFTRCxnQkFBSSxFQUFFO0FBQWYsV0FBVjtBQUNELFNBSEQsTUFHTztBQUNMRCxpQkFBTyxDQUFDQyxJQUFSLElBQWdCQyxHQUFoQjtBQUNEO0FBQ0Y7O0FBQ0RILFlBQU0sQ0FBQ3JXLElBQVAsQ0FBWXNXLE9BQVo7QUFDQSxhQUFPRCxNQUFQO0FBQ0Q7QUExQ0g7O0FBb0RFOzs7Ozs7QUFNQSxvQkFBWWhZLEdBQVosRUFBc0J1QixPQUF0QixFQUF1Q0YsUUFBdkMsRUFBd0U7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDdEUsU0FBS0UsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0YsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLK1csVUFBTCxHQUFrQixFQUFsQjtBQUNBLFFBQU1DLFdBQVcsR0FBRyxLQUFLM0ksS0FBTCxFQUFwQjtBQUNBLFNBQUtuSCxHQUFMLEdBQVc4UCxXQUFXLENBQUM5UCxHQUF2QjtBQUNBLFNBQUt5UCxNQUFMLEdBQWNLLFdBQVcsQ0FBQ0wsTUFBMUI7QUFDQSxTQUFLaFksR0FBTCxHQUFXLEtBQUtzWSxhQUFMLENBQW1CdFksR0FBbkIsQ0FBWDtBQUNBLFNBQUs2TCxNQUFMLEdBQWMsS0FBSzBNLE9BQUwsRUFBZDs7QUFDQSxRQUFJOVUscURBQUssQ0FBQ3VQLFFBQU4sQ0FBZSxLQUFLbkgsTUFBcEIsQ0FBSixFQUFpQztBQUMvQixXQUFLNUosR0FBTCxDQUFTLElBQVQsRUFBZSxLQUFLc0csR0FBcEIsRUFBeUIsS0FBS3NELE1BQTlCLEVBQXNDLEtBQUt4SyxRQUEzQztBQUNEO0FBQ0Y7QUFFRDs7Ozs7O0FBeEVGO0FBQUE7QUFBQSw0QkE0RWlCO0FBQ2IsVUFBSTZXLElBQUo7QUFDQSxVQUFJSCxJQUFKOztBQUVBLFVBQUksQ0FBQ3hNLFFBQVEsQ0FBQ3VNLFVBQVYsSUFBd0IsQ0FBQ3ZNLFFBQVEsQ0FBQ3VNLFVBQVQsQ0FBb0JyWCxNQUFqRCxFQUF5RDtBQUN2RCxjQUFNLElBQUlnRSxLQUFKLENBQVUsd0RBQVYsQ0FBTjtBQUNEOztBQUVELFVBQUksQ0FBQyxDQUFDLENBQUM4RyxRQUFRLENBQUN1TSxVQUFULENBQW9CcFcsT0FBcEIsQ0FBNEIsS0FBS0gsT0FBTCxDQUFhLENBQWIsQ0FBNUIsQ0FBUCxFQUFxRDtBQUNuRHdXLFlBQUksR0FBRyxLQUFLeFcsT0FBTCxDQUFhLENBQWIsQ0FBUDtBQUNBMlcsWUFBSSxHQUFHLEtBQUszVyxPQUFMLENBQWFpWCxNQUFiLENBQW9CLENBQXBCLENBQVA7QUFDRCxPQUhELE1BR087QUFDTFQsWUFBSSxHQUFHeE0sUUFBUSxDQUFDc00sYUFBaEI7QUFDQUssWUFBSSxHQUFHLEtBQUszVyxPQUFaO0FBQ0Q7O0FBRUQsV0FBS3lXLE1BQUwsR0FBY3pNLFFBQVEsQ0FBQ2tOLFFBQVQsQ0FBa0JQLElBQWxCLEVBQXdCSCxJQUF4QixDQUFkOztBQUVBLFVBQUksQ0FBQyxLQUFLQyxNQUFMLENBQVl2WCxNQUFqQixFQUF5QjtBQUN2QixjQUFNLElBQUlnRSxLQUFKLENBQVUsc0JBQVYsQ0FBTjtBQUNEOztBQUVELFdBQUs4RCxHQUFMLEdBQVksS0FBS3lQLE1BQUwsQ0FBWTlQLEdBQVosRUFBWjtBQUVBLGFBQU87QUFDTEssV0FBRyxFQUFFLEtBQUtBLEdBREw7QUFFTHlQLGNBQU0sRUFBRSxLQUFLQTtBQUZSLE9BQVA7QUFJRDtBQUVEOzs7OztBQTFHRjtBQUFBO0FBQUEsOEJBOEdtQjtBQUNmLFVBQUlDLE9BQVksR0FBRyxLQUFLalksR0FBeEI7QUFDQSxVQUFJMFksU0FBUyxHQUFHLENBQUMsQ0FBakI7QUFDQSxVQUFJQyxJQUFKO0FBQ0EsVUFBSW5OLEtBQUo7O0FBRUEsV0FBSyxJQUFJbkUsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUcsS0FBSzJRLE1BQUwsQ0FBWXZYLE1BQXhDLEVBQWdENEcsS0FBSyxFQUFyRCxFQUF5RDtBQUN2RG1FLGFBQUssR0FBRyxLQUFLd00sTUFBTCxDQUFZM1EsS0FBWixDQUFSOztBQUNBLFlBQUk1RCxxREFBSyxDQUFDdVAsUUFBTixDQUFlaUYsT0FBZixDQUFKLEVBQTZCO0FBQzNCLGNBQUksT0FBTyxLQUFLRyxVQUFMLENBQWdCL1EsS0FBaEIsQ0FBUCxLQUFrQyxXQUF0QyxFQUFtRDtBQUNqRHNSLGdCQUFJLEdBQUcsS0FBS1AsVUFBTCxDQUFnQi9RLEtBQWhCLENBQVA7O0FBQ0EsZ0JBQUk0USxPQUFPLEtBQUtVLElBQWhCLEVBQXNCO0FBQ3BCLG1CQUFLMVcsR0FBTCxDQUFTLEtBQVQsRUFBZ0J1SixLQUFoQixFQUF1Qm1OLElBQXZCLEVBQTZCLElBQTdCO0FBQ0EsbUJBQUsxVyxHQUFMLENBQVMsSUFBVCxFQUFldUosS0FBZixFQUFzQnlNLE9BQXRCLEVBQStCLElBQS9CO0FBQ0EsbUJBQUtHLFVBQUwsQ0FBZ0IvUSxLQUFoQixJQUF5QjRRLE9BQXpCO0FBQ0Q7QUFDRixXQVBELE1BT087QUFDTCxpQkFBS2hXLEdBQUwsQ0FBUyxJQUFULEVBQWV1SixLQUFmLEVBQXNCeU0sT0FBdEIsRUFBK0IsSUFBL0I7QUFDQSxpQkFBS0csVUFBTCxDQUFnQi9RLEtBQWhCLElBQXlCNFEsT0FBekI7QUFDRDs7QUFDREEsaUJBQU8sR0FBRyxLQUFLalcsR0FBTCxDQUFTd0osS0FBVCxFQUFnQnlNLE9BQWhCLENBQVY7QUFDRCxTQWJELE1BYU87QUFDTCxjQUFJUyxTQUFTLEtBQUssQ0FBQyxDQUFuQixFQUFzQjtBQUNwQkEscUJBQVMsR0FBR3JSLEtBQVo7QUFDRDs7QUFDRHNSLGNBQUksR0FBRyxLQUFLUCxVQUFMLENBQWdCL1EsS0FBaEIsQ0FBUDs7QUFDQSxjQUFJc1IsSUFBSixFQUFVO0FBQ1IsaUJBQUsxVyxHQUFMLENBQVMsS0FBVCxFQUFnQnVKLEtBQWhCLEVBQXVCbU4sSUFBdkIsRUFBNkIsSUFBN0I7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0QsVUFBSUQsU0FBUyxLQUFLLENBQUMsQ0FBbkIsRUFBc0I7QUFDcEIsYUFBS04sVUFBTCxDQUFnQnZXLE1BQWhCLENBQXVCNlcsU0FBdkI7QUFDRDs7QUFDRCxhQUFPVCxPQUFQO0FBQ0Q7QUFFRDs7OztBQW5KRjtBQUFBO0FBQUEsMkJBc0pnQjtBQUNaLFVBQUlXLElBQUo7QUFDQSxVQUFJM1UsUUFBSjtBQUNBLFVBQUk3QixRQUFKO0FBQ0F3VyxVQUFJLEdBQUcsS0FBS0wsT0FBTCxFQUFQOztBQUNBLFVBQUlLLElBQUksS0FBSyxLQUFLL00sTUFBbEIsRUFBMEI7QUFDeEIsWUFBSXBJLHFEQUFLLENBQUN1UCxRQUFOLENBQWUsS0FBS25ILE1BQXBCLENBQUosRUFBaUM7QUFDL0IsZUFBSzVKLEdBQUwsQ0FBUyxLQUFULEVBQWdCLEtBQUtzRyxHQUFyQixFQUEwQixLQUFLc0QsTUFBL0IsRUFBdUMsS0FBS3hLLFFBQTVDO0FBQ0Q7O0FBRUQsWUFBSW9DLHFEQUFLLENBQUN1UCxRQUFOLENBQWU0RixJQUFmLENBQUosRUFBMEI7QUFDeEIsZUFBSzNXLEdBQUwsQ0FBUyxJQUFULEVBQWUsS0FBS3NHLEdBQXBCLEVBQXlCcVEsSUFBekIsRUFBK0IsS0FBS3ZYLFFBQXBDO0FBQ0Q7O0FBRUQ0QyxnQkFBUSxHQUFHLEtBQUs3RCxLQUFMLEVBQVg7QUFDQSxhQUFLeUwsTUFBTCxHQUFjK00sSUFBZDtBQUNBeFcsZ0JBQVEsR0FBRyxLQUFLaEMsS0FBTCxFQUFYOztBQUNBLFlBQUlnQyxRQUFRLEtBQUs2QixRQUFiLElBQXlCLHFGQUFjN0IsUUFBZCxDQUE3QixFQUFzRDtBQUNwRCxlQUFLZixRQUFMLENBQWNDLElBQWQ7QUFDRDtBQUNGLE9BZkQsTUFlTyxJQUFJLHFGQUFjc1gsSUFBZCxDQUFKLEVBQXlCO0FBQzlCLGFBQUt2WCxRQUFMLENBQWNDLElBQWQ7QUFDRDtBQUNGO0FBRUQ7Ozs7O0FBL0tGO0FBQUE7QUFBQSw0QkFtTGlCO0FBQ2IsVUFBSW1DLHFEQUFLLENBQUN1UCxRQUFOLENBQWUsS0FBS25ILE1BQXBCLENBQUosRUFBaUM7QUFDL0IsZUFBTyxLQUFLN0osR0FBTCxDQUFTLEtBQUt1RyxHQUFkLEVBQW1CLEtBQUtzRCxNQUF4QixDQUFQO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7QUF6TEY7QUFBQTtBQUFBLDZCQThMa0J6TCxLQTlMbEIsRUE4TDhCO0FBQzFCLFVBQUlxRCxxREFBSyxDQUFDdVAsUUFBTixDQUFlLEtBQUtuSCxNQUFwQixDQUFKLEVBQWlDO0FBQy9CTixnQkFBUSxDQUFDcU0sUUFBVCxDQUFrQixLQUFLclAsR0FBTCxDQUFTdEMsQ0FBM0IsRUFBOEJoRSxHQUE5QixDQUFrQyxLQUFLNEosTUFBdkMsRUFBK0MsS0FBS3RELEdBQUwsQ0FBUzJQLElBQXhELEVBQThEOVgsS0FBOUQ7QUFDRDtBQUNGO0FBRUQ7Ozs7OztBQXBNRjtBQUFBO0FBQUEsd0JBeU1hbUksR0F6TWIsRUF5TXdCdkksR0F6TXhCLEVBeU1rQztBQUM5QixhQUFPdUwsUUFBUSxDQUFDcU0sUUFBVCxDQUFrQnJQLEdBQUcsQ0FBQ3RDLENBQXRCLEVBQXlCakUsR0FBekIsQ0FBNkJoQyxHQUE3QixFQUFrQ3VJLEdBQUcsQ0FBQzJQLElBQXRDLENBQVA7QUFDRDtBQUVEOzs7Ozs7OztBQTdNRjtBQUFBO0FBQUEsd0JBb05hVyxNQXBOYixFQW9OOEJ0USxHQXBOOUIsRUFvTnlDdkksR0FwTnpDLEVBb05tRHFCLFFBcE5uRCxFQW9Ob0Y7QUFDaEYsVUFBSXdYLE1BQUosRUFBWTtBQUNWdE4sZ0JBQVEsQ0FBQ3FNLFFBQVQsQ0FBa0JyUCxHQUFHLENBQUN0QyxDQUF0QixFQUF5QjJGLE9BQXpCLENBQWlDNUwsR0FBakMsRUFBc0N1SSxHQUFHLENBQUMyUCxJQUExQyxFQUFnRDdXLFFBQWhEO0FBQ0QsT0FGRCxNQUVPO0FBQ0xrSyxnQkFBUSxDQUFDcU0sUUFBVCxDQUFrQnJQLEdBQUcsQ0FBQ3RDLENBQXRCLEVBQXlCcUgsU0FBekIsQ0FBbUN0TixHQUFuQyxFQUF3Q3VJLEdBQUcsQ0FBQzJQLElBQTVDLEVBQWtEN1csUUFBbEQ7QUFDRDtBQUNGO0FBRUQ7Ozs7QUE1TkY7QUFBQTtBQUFBLGdDQStOcUI7QUFDakIsVUFBSXJCLEdBQUo7QUFDQSxVQUFJd0wsS0FBSjs7QUFFQSxXQUFLLElBQUluRSxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBRyxLQUFLMlEsTUFBTCxDQUFZdlgsTUFBeEMsRUFBZ0Q0RyxLQUFLLEVBQXJELEVBQXlEO0FBQ3ZEbUUsYUFBSyxHQUFHLEtBQUt3TSxNQUFMLENBQVkzUSxLQUFaLENBQVI7QUFDQXJILFdBQUcsR0FBRyxLQUFLb1ksVUFBTCxDQUFnQi9RLEtBQWhCLENBQU47O0FBQ0EsWUFBSXJILEdBQUosRUFBUztBQUNQLGVBQUtpQyxHQUFMLENBQVMsS0FBVCxFQUFnQnVKLEtBQWhCLEVBQXVCeEwsR0FBdkIsRUFBNEIsSUFBNUI7QUFDRDtBQUNGOztBQUVELFVBQUl5RCxxREFBSyxDQUFDdVAsUUFBTixDQUFlLEtBQUtuSCxNQUFwQixDQUFKLEVBQWlDO0FBQy9CLGFBQUs1SixHQUFMLENBQVMsS0FBVCxFQUFnQixLQUFLc0csR0FBckIsRUFBMEIsS0FBS3NELE1BQS9CLEVBQXVDLEtBQUt4SyxRQUE1QztBQUNEO0FBQ0Y7QUFFRDs7Ozs7O0FBaFBGO0FBQUE7QUFBQSxrQ0FxUHVCckIsR0FyUHZCLEVBcVBpQztBQUM3QixVQUFJOFksUUFBSjtBQUNBLFVBQUliLE9BQUo7O0FBQ0EsVUFBSSxDQUFDalksR0FBRyxDQUFDdUgsT0FBVCxFQUFrQjtBQUNoQixlQUFPdkgsR0FBUDtBQUNEOztBQUVELFVBQUksS0FBS2dZLE1BQUwsQ0FBWXZYLE1BQWhCLEVBQXdCO0FBQ3RCcVksZ0JBQVEsR0FBRyxLQUFLZCxNQUFMLENBQVksQ0FBWixFQUFlRSxJQUExQjtBQUNELE9BRkQsTUFFTztBQUNMWSxnQkFBUSxHQUFHLEtBQUt2USxHQUFMLENBQVMyUCxJQUFwQjtBQUNEOztBQUVERCxhQUFPLEdBQUdqWSxHQUFWOztBQUNBLGFBQU9pWSxPQUFPLENBQUMxUSxPQUFSLElBQW9CMFEsT0FBTyxDQUFDYSxRQUFELENBQVAsS0FBc0I5USxTQUFqRCxFQUE2RDtBQUMzRGlRLGVBQU8sR0FBR0EsT0FBTyxDQUFDMVEsT0FBbEI7QUFDRDs7QUFDRCxhQUFPMFEsT0FBUDtBQUNEO0FBdlFIOztBQUFBO0FBQUE7O3FGQUFhMU0sUTs7cUZBQUFBLFE7O3FGQUFBQSxROzs7Ozs7Ozs7Ozs7QUNKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7OztBQUlPLElBQU1HLFNBQVMsR0FBRyxDQUFsQjtBQUNBLElBQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUNBLElBQU1vTixJQUFJLEdBQUcsQ0FBYjtBQUNBLElBQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUVQLElBQU1DLFVBQVUsR0FBRyxlQUFuQixDLENBQW9DOztBQUNwQyxJQUFNQyxpQkFBaUIsR0FBRyw4REFBMUI7QUFFQTs7Ozs7QUFJTyxTQUFTek4sU0FBVCxDQUFtQjhILEdBQW5CLEVBQWlDO0FBQ3RDLE1BQUlqUCxJQUFJLEdBQUdvSCxTQUFYO0FBQ0EsTUFBSXRMLEtBQVUsR0FBR21ULEdBQWpCOztBQUNBLE1BQUlBLEdBQUcsS0FBS3ZMLFNBQVosRUFBdUI7QUFDckIsV0FBTztBQUFDMUQsVUFBSSxFQUFKQSxJQUFEO0FBQU9sRSxXQUFLLEVBQUU0SDtBQUFkLEtBQVA7QUFDRDs7QUFDRCxNQUFJaVIsVUFBVSxDQUFDdEwsSUFBWCxDQUFnQjRGLEdBQWhCLENBQUosRUFBMEI7QUFDeEJuVCxTQUFLLEdBQUdtVCxHQUFHLENBQUN6RixLQUFKLENBQVUsQ0FBVixFQUFhLENBQUMsQ0FBZCxDQUFSO0FBQ0QsR0FGRCxNQUVPLElBQUl5RixHQUFHLEtBQUssTUFBWixFQUFvQjtBQUN6Qm5ULFNBQUssR0FBRyxJQUFSO0FBQ0QsR0FGTSxNQUVBLElBQUltVCxHQUFHLEtBQUssT0FBWixFQUFxQjtBQUMxQm5ULFNBQUssR0FBRyxLQUFSO0FBQ0QsR0FGTSxNQUVBLElBQUltVCxHQUFHLEtBQUssTUFBWixFQUFvQjtBQUN6Qm5ULFNBQUssR0FBRyxJQUFSO0FBQ0QsR0FGTSxNQUVBLElBQUltVCxHQUFHLEtBQUssV0FBWixFQUF5QjtBQUM5Qm5ULFNBQUssR0FBRzRILFNBQVI7QUFDRCxHQUZNLE1BRUEsSUFBSXVMLEdBQUcsS0FBSyxFQUFaLEVBQWdCO0FBQ3JCblQsU0FBSyxHQUFHNEgsU0FBUjtBQUNELEdBRk0sTUFFQSxJQUFJLENBQUN1SCxLQUFLLENBQUNwQixNQUFNLENBQUNvRixHQUFELENBQVAsQ0FBVixFQUF5QjtBQUM5Qm5ULFNBQUssR0FBRytOLE1BQU0sQ0FBQ29GLEdBQUQsQ0FBZDtBQUNELEdBRk0sTUFFQSxJQUFJOVAscURBQUssQ0FBQytMLE1BQU4sQ0FBYStELEdBQWIsQ0FBSixFQUF1QjtBQUM1Qm5ULFNBQUssR0FBR3FQLElBQUksQ0FBQ0MsS0FBTCxDQUFXNkQsR0FBWCxDQUFSO0FBQ0QsR0FGTSxNQUVBO0FBQ0xqUCxRQUFJLEdBQUdxSCxPQUFQO0FBQ0Q7O0FBQ0QsU0FBTztBQUFDckgsUUFBSSxFQUFKQSxJQUFEO0FBQU9sRSxTQUFLLEVBQUxBO0FBQVAsR0FBUDtBQUNEOztBQU9EOzs7Ozs7O0FBT08sU0FBUytZLGFBQVQsQ0FBdUJsSyxRQUF2QixFQUF5Q21LLFVBQXpDLEVBQStEO0FBQ3BFLE1BQUlwQixNQUF3QixHQUFHLElBQS9CO0FBQ0EsTUFBTXZYLE1BQU0sR0FBR3dPLFFBQVEsQ0FBQ3hPLE1BQXhCO0FBQ0EsTUFBSTRHLEtBQUssR0FBRyxDQUFaO0FBQ0EsTUFBSWdTLFNBQVMsR0FBRyxDQUFoQjtBQUNBLE1BQU1DLElBQUksR0FBR0YsVUFBVSxDQUFDLENBQUQsQ0FBdkI7QUFDQSxNQUFNRyxLQUFLLEdBQUdILFVBQVUsQ0FBQyxDQUFELENBQXhCOztBQUVBLFNBQU9DLFNBQVMsR0FBRzVZLE1BQW5CLEVBQTJCO0FBQ3pCNEcsU0FBSyxHQUFHNEgsUUFBUSxDQUFDdk4sT0FBVCxDQUFpQjRYLElBQWpCLEVBQXVCRCxTQUF2QixDQUFSOztBQUVBLFFBQUloUyxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ2IsVUFBSTJRLE1BQUosRUFBWTtBQUNWQSxjQUFNLENBQUNyVyxJQUFQLENBQVk7QUFDVjJDLGNBQUksRUFBRXlVLElBREk7QUFFVjNZLGVBQUssRUFBRTZPLFFBQVEsQ0FBQ25CLEtBQVQsQ0FBZXVMLFNBQWY7QUFGRyxTQUFaO0FBSUQ7O0FBRUQ7QUFDRCxLQVRELE1BU087QUFDTHJCLFlBQU0sR0FBR0EsTUFBTSxJQUFJLEVBQW5COztBQUNBLFVBQUkzUSxLQUFLLEdBQUcsQ0FBUixJQUFhZ1MsU0FBUyxHQUFHaFMsS0FBN0IsRUFBb0M7QUFDbEMyUSxjQUFNLENBQUNyVyxJQUFQLENBQVk7QUFDVjJDLGNBQUksRUFBRXlVLElBREk7QUFFVjNZLGVBQUssRUFBRTZPLFFBQVEsQ0FBQ25CLEtBQVQsQ0FBZXVMLFNBQWYsRUFBMEJoUyxLQUExQjtBQUZHLFNBQVo7QUFJRDs7QUFFRGdTLGVBQVMsR0FBR2hTLEtBQUssR0FBR2lTLElBQUksQ0FBQzdZLE1BQXpCO0FBQ0E0RyxXQUFLLEdBQUc0SCxRQUFRLENBQUN2TixPQUFULENBQWlCNlgsS0FBakIsRUFBd0JGLFNBQXhCLENBQVI7O0FBRUEsVUFBSWhTLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDYixZQUFNK0csU0FBUyxHQUFHYSxRQUFRLENBQUNuQixLQUFULENBQWV1TCxTQUFTLEdBQUdFLEtBQUssQ0FBQzlZLE1BQWpDLENBQWxCO0FBQ0EsWUFBTStZLFNBQVMsR0FBR3hCLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDdlgsTUFBUCxHQUFnQixDQUFqQixDQUF4Qjs7QUFFQSxZQUFJK1ksU0FBUyxJQUFJQSxTQUFTLENBQUNsVixJQUFWLEtBQW1CeVUsSUFBcEMsRUFBMEM7QUFDeENTLG1CQUFTLENBQUNwWixLQUFWLElBQW1CZ08sU0FBbkI7QUFDRCxTQUZELE1BRU87QUFDTDRKLGdCQUFNLENBQUNyVyxJQUFQLENBQVk7QUFDVjJDLGdCQUFJLEVBQUV5VSxJQURJO0FBRVYzWSxpQkFBSyxFQUFFZ087QUFGRyxXQUFaO0FBSUQ7O0FBRUQ7QUFDRDs7QUFFRCxVQUFNaE8sS0FBSyxHQUFHNk8sUUFBUSxDQUFDbkIsS0FBVCxDQUFldUwsU0FBZixFQUEwQmhTLEtBQTFCLEVBQWlDdEIsSUFBakMsRUFBZDtBQUVBaVMsWUFBTSxDQUFDclcsSUFBUCxDQUFZO0FBQ1YyQyxZQUFJLEVBQUUwVSxPQURJO0FBRVY1WSxhQUFLLEVBQUxBO0FBRlUsT0FBWjtBQUtBaVosZUFBUyxHQUFHaFMsS0FBSyxHQUFHa1MsS0FBSyxDQUFDOVksTUFBMUI7QUFDRDtBQUNGOztBQUVELFNBQU91WCxNQUFQO0FBQ0Q7QUFFTSxTQUFTeUIsU0FBVCxDQUFtQjlWLElBQW5CLEVBQStCK1YsSUFBL0IsRUFBbURDLGtCQUFuRCxFQUFzRjtBQUMzRjtBQUNBLE1BQUkxVSxLQUFhLEdBQUcsS0FBcEI7QUFFQXlVLE1BQUksR0FBS0EsSUFBVCxDQUoyRixDQUszRjs7QUFDQSxNQUFJQSxJQUFJLENBQUNFLFFBQUwsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsUUFBSTVCLE1BQU0sR0FBRyxJQUFiLENBRHVCLENBR3ZCOztBQUNBLFFBQUkwQixJQUFJLENBQUMzVixJQUFULEVBQWU7QUFDYmlVLFlBQU0sR0FBR21CLGFBQWEsQ0FBQ08sSUFBSSxDQUFDM1YsSUFBTixFQUFZNFYsa0JBQVosQ0FBdEI7QUFDRDs7QUFFRCxRQUFJM0IsTUFBTSxJQUFJQSxNQUFNLENBQUN2WCxNQUFyQixFQUE2QjtBQUMzQixXQUFLLElBQUl3RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHK1IsTUFBTSxDQUFDdlgsTUFBM0IsRUFBbUN3RixDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDLFlBQU11RixLQUFLLEdBQUd3TSxNQUFNLENBQUMvUixDQUFELENBQXBCO0FBQ0EsWUFBTTRULElBQUksR0FBR25ULFFBQVEsQ0FBQ29ULGNBQVQsQ0FBd0J0TyxLQUFLLENBQUNwTCxLQUE5QixDQUFiOztBQUNBLFlBQUlzWixJQUFJLENBQUM3UyxVQUFULEVBQXFCO0FBQ25CNlMsY0FBSSxDQUFDN1MsVUFBTCxDQUFnQkMsWUFBaEIsQ0FBNkIrUyxJQUE3QixFQUFtQ0gsSUFBbkM7QUFDRDs7QUFDRCxZQUFJbE8sS0FBSyxDQUFDbEgsSUFBTixLQUFlLENBQW5CLEVBQXNCO0FBQ3BCO0FBQ0FYLGNBQUksQ0FBQ29XLFlBQUwsQ0FBa0JGLElBQWxCLEVBQStCLElBQS9CLEVBQXFDck8sS0FBSyxDQUFDcEwsS0FBM0MsRUFBa0RzSCwwQ0FBSSxDQUFDc1Msa0JBQXZELEVBQTJFLElBQTNFO0FBQ0Q7QUFDRjs7QUFDRCxVQUFJTixJQUFJLENBQUM3UyxVQUFULEVBQXFCO0FBQ25CNlMsWUFBSSxDQUFDN1MsVUFBTCxDQUFnQkUsV0FBaEIsQ0FBNEIyUyxJQUE1QjtBQUNEO0FBQ0Y7O0FBQ0R6VSxTQUFLLEdBQUcsSUFBUixDQXhCdUIsQ0F5QnZCO0FBQ0QsR0ExQkQsTUEwQk8sSUFBSXlVLElBQUksQ0FBQ0UsUUFBTCxLQUFrQixDQUF0QixFQUF5QjtBQUM5QjtBQUNBM1UsU0FBSyxHQUFHdEIsSUFBSSxDQUFDc1csUUFBTCxDQUFjUCxJQUFkLENBQVI7QUFDRDs7QUFFRCxNQUFJLENBQUN6VSxLQUFMLEVBQVk7QUFDVixRQUFJeVUsSUFBSSxDQUFDNUksVUFBVCxFQUFxQjtBQUNuQixXQUFLLElBQUk3SyxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHeVQsSUFBSSxDQUFDNUksVUFBTCxDQUFnQnJRLE1BQXBDLEVBQTRDd0YsRUFBQyxFQUE3QyxFQUFpRDtBQUMvQ3dULGlCQUFTLENBQUM5VixJQUFELEVBQVErVixJQUFJLENBQUM1SSxVQUFMLENBQWdCN0ssRUFBaEIsQ0FBUixFQUE2QzBULGtCQUE3QyxDQUFUO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBT0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJPLFNBQVNPLGdCQUFULENBQTBCOU4sV0FBMUIsRUFBb0U7QUFDekUsTUFBTStOLE9BQU8sR0FBRy9OLFdBQVcsQ0FBQ0MsS0FBWixDQUFrQjZNLGlCQUFsQixDQUFoQjs7QUFDQSxNQUFJaUIsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCLFVBQU0sSUFBSTFWLEtBQUosQ0FBVSxtQkFBVixDQUFOO0FBQ0Q7O0FBQ0QsTUFBTTJWLEtBQUssR0FBR0QsT0FBTyxDQUFDdFosR0FBUixDQUFZLFVBQUMwUyxHQUFELEVBQWlCO0FBQ3pDLFdBQU9BLEdBQUcsQ0FBQ3hOLElBQUosRUFBUDtBQUNELEdBRmEsQ0FBZDtBQUdBLE1BQU14RSxPQUFPLEdBQUc2WSxLQUFLLENBQUM3TixLQUFOLE1BQWlCdkUsU0FBakM7QUFFQSxTQUE2QjtBQUMzQnpHLFdBQU8sRUFBUEEsT0FEMkI7QUFFM0I2WSxTQUFLLEVBQUxBO0FBRjJCLEdBQTdCO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE1EO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRU8sSUFBTTVKLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQTZEYXBRLEtBN0RiLEVBNkRvQjtBQUNoQixXQUFLaWEsT0FBTCxHQUFlamEsS0FBZjtBQUNBLFdBQUtrYSxXQUFMLEdBQW1CbGEsS0FBSyxHQUFHLEdBQTNCO0FBQ0QsS0FoRUg7QUFBQSx3QkFrRWU7QUFDWCxhQUFPLEtBQUtpYSxPQUFaO0FBQ0Q7QUFwRUg7QUFBQTtBQUFBLHdCQXNFbUI7QUFDZixhQUFPLEtBQUtDLFdBQVo7QUFDRDtBQUVEOzs7O0FBMUVGO0FBQUE7O0FBRUU7Ozs7O0FBTUE7Ozs7O0FBUkYsNEJBYW1DL0wsT0FibkMsRUFhaUQzQixFQWJqRCxFQWE0RHZFLE9BYjVELEVBYThFdEYsRUFiOUUsRUFhK0Y7QUFDM0YsV0FBSzhKLElBQUwsQ0FBVTBCLE9BQVYsRUFBbUIzQixFQUFuQixFQUF1QnZFLE9BQU8sQ0FBQzFFLElBQVIsQ0FBYUMsTUFBcEMsRUFBNENiLEVBQTVDO0FBQ0Q7QUFFRDs7QUFqQkY7O0FBNkVFLGtCQUFjO0FBQUE7O0FBQUE7O0FBQUEsMEdBdERrQixFQXNEbEI7O0FBQUEsNkdBbkRtQixFQW1EbkI7O0FBQUEsNkdBaERtQixFQWdEbkI7O0FBQUEsMkdBN0NnQjtBQUM1QixXQUFLTixnREFBT0E7QUFEZ0IsS0E2Q2hCOztBQUFBLGdIQXpDUzBXLHNEQXlDVDs7QUFBQSw0R0F2Q0sxTixrREF1Q0w7O0FBQUEscUhBcENjLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FvQ2Q7O0FBQUEsZ0hBakNTLEdBaUNUOztBQUFBLDhHQTlCTyxJQThCUDs7QUFBQSx5SEEzQmtCLElBMkJsQjs7QUFBQSxpSEF4QlUsQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixVQUFwQixFQUFnQyxNQUFoQyxDQXdCVjs7QUFBQSwwR0FyQkksSUFxQko7O0FBQUEsOEdBbEJRLEtBa0JSOztBQUNaLFNBQUs4TyxNQUFMLEdBQWMsSUFBSUMsd0VBQUosQ0FBbUIsS0FBS3BJLE9BQXhCLEVBQWlDLEtBQUtxSSxVQUF0QyxFQUFrRCxLQUFLdFAsVUFBdkQsQ0FBZDs7QUFDQSxRQUFJcUYsSUFBSSxDQUFDa0ssUUFBVCxFQUFtQjtBQUNqQixhQUFPbEssSUFBSSxDQUFDa0ssUUFBWjtBQUNEOztBQUNEbEssUUFBSSxDQUFDa0ssUUFBTCxHQUFnQixJQUFoQjtBQUNEO0FBRUQ7Ozs7OztBQXJGRjtBQUFBO0FBQUEsOEJBeUZtQnhSLE9BekZuQixFQXlGK0M7QUFBQTs7QUFDM0MsVUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWjtBQUNEOztBQUVELHdGQUFZQSxPQUFaLEVBQXFCaEksT0FBckIsQ0FBNkIsVUFBQzJKLE1BQUQsRUFBWTtBQUN2QyxZQUFNekssS0FBSyxHQUFJOEksT0FBRCxDQUFpQjJCLE1BQWpCLENBQWQ7O0FBQ0EsZ0JBQVFBLE1BQVI7QUFDRSxlQUFLLFNBQUw7QUFDRSxpQkFBSSxDQUFDdUgsT0FBTCxHQUFlM08scURBQUssQ0FBQ2tYLE1BQU4sQ0FBYSxLQUFiLEVBQW9CLEtBQUksQ0FBQ3ZJLE9BQXpCLEVBQWtDaFMsS0FBbEMsQ0FBZjtBQUNBOztBQUNGLGVBQUssWUFBTDtBQUNFLGlCQUFJLENBQUMrSyxVQUFMLEdBQWtCMUgscURBQUssQ0FBQ2tYLE1BQU4sQ0FBYSxLQUFiLEVBQW9CLEtBQUksQ0FBQ3hQLFVBQXpCLEVBQXFDL0ssS0FBckMsQ0FBbEI7QUFDQTs7QUFDRixlQUFLLFlBQUw7QUFDRSxpQkFBSSxDQUFDcWEsVUFBTCxHQUFrQmhYLHFEQUFLLENBQUNrWCxNQUFOLENBQWEsS0FBYixFQUFvQixLQUFJLENBQUNGLFVBQXpCLEVBQXFDcmEsS0FBckMsQ0FBbEI7QUFDQTs7QUFDRixlQUFLLFVBQUw7QUFDRSxpQkFBSSxDQUFDd1gsUUFBTCxHQUFnQm5VLHFEQUFLLENBQUNrWCxNQUFOLENBQWEsS0FBYixFQUFvQixLQUFJLENBQUMvQyxRQUF6QixFQUFtQ3hYLEtBQW5DLENBQWhCO0FBQ0E7O0FBQ0YsZUFBSyxRQUFMO0FBQ0UsaUJBQUksQ0FBQ3dhLE1BQUwsR0FBY3hhLEtBQWQ7QUFDQTs7QUFDRixlQUFLLGVBQUw7QUFDRSxpQkFBSSxDQUFDK1ksYUFBTCxHQUFxQi9ZLEtBQXJCO0FBQ0E7O0FBQ0YsZUFBSyxXQUFMO0FBQ0UsaUJBQUksQ0FBQ3FMLFNBQUwsR0FBaUJyTCxLQUFqQjtBQUNBOztBQUNGLGVBQUssb0JBQUw7QUFDRSxpQkFBSSxDQUFDdVosa0JBQUwsR0FBMEJ2WixLQUExQjtBQUNBOztBQUNGLGVBQUssZUFBTDtBQUNFLGlCQUFJLENBQUN5WCxhQUFMLEdBQXFCelgsS0FBckI7QUFDQTs7QUFDRixlQUFLLGFBQUw7QUFDRSxpQkFBSSxDQUFDaU4sV0FBTCxHQUFtQmpOLEtBQW5CO0FBQ0E7O0FBQ0YsZUFBSyxnQkFBTDtBQUNJLGlCQUFJLENBQUN5YSxjQUFMLEdBQXNCemEsS0FBdEI7QUFDQTs7QUFDSjtBQUNFdUosbUJBQU8sQ0FBQ0MsSUFBUixDQUFhLHNCQUFiLEVBQXFDaUIsTUFBckMsRUFBNkN6SyxLQUE3QztBQUNBO0FBcENKO0FBc0NELE9BeENEO0FBeUNEO0FBdklIO0FBQUE7QUFBQSxtQ0F5SXdCOEksT0F6SXhCLEVBeUlxRDtBQUNqRCxVQUFNdUgsV0FBOEIsR0FBRztBQUNyQztBQUNBbUgsZ0JBQVEsRUFBYyxFQUZlO0FBR3JDeEYsZUFBTyxFQUFrQixFQUhZO0FBSXJDcUksa0JBQVUsRUFBZ0IsRUFKVztBQUtyQ3RQLGtCQUFVLEVBQWdCLEVBTFc7QUFPckM7QUFDQTJQLG1CQUFXLEVBQUUsRUFSd0I7QUFVckM7QUFDQWpELHFCQUFhLEVBQVM7QUFYZSxPQUF2Qzs7QUFjQSxVQUFJM08sT0FBSixFQUFhO0FBQ1h1SCxtQkFBVyxDQUFDMkIsT0FBWixHQUFzQjNPLHFEQUFLLENBQUNrWCxNQUFOLENBQWEsS0FBYixFQUFvQmxLLFdBQVcsQ0FBQzJCLE9BQWhDLEVBQXlDbEosT0FBTyxDQUFDa0osT0FBakQsQ0FBdEI7QUFDQTNCLG1CQUFXLENBQUN0RixVQUFaLEdBQXlCMUgscURBQUssQ0FBQ2tYLE1BQU4sQ0FBYSxLQUFiLEVBQW9CbEssV0FBVyxDQUFDdEYsVUFBaEMsRUFBNENqQyxPQUFPLENBQUNpQyxVQUFwRCxDQUF6QjtBQUNBc0YsbUJBQVcsQ0FBQ2dLLFVBQVosR0FBeUJoWCxxREFBSyxDQUFDa1gsTUFBTixDQUFhLEtBQWIsRUFBb0JsSyxXQUFXLENBQUNnSyxVQUFoQyxFQUE0Q3ZSLE9BQU8sQ0FBQ3VSLFVBQXBELENBQXpCO0FBQ0FoSyxtQkFBVyxDQUFDbUgsUUFBWixHQUF1Qm5VLHFEQUFLLENBQUNrWCxNQUFOLENBQWEsS0FBYixFQUFvQmxLLFdBQVcsQ0FBQ21ILFFBQWhDLEVBQTBDMU8sT0FBTyxDQUFDME8sUUFBbEQsQ0FBdkI7QUFDRDs7QUFFRG5ILGlCQUFXLENBQUNtSyxNQUFaLEdBQXFCMVIsT0FBTyxJQUFJQSxPQUFPLENBQUMwUixNQUFuQixHQUE0QjFSLE9BQU8sQ0FBQzBSLE1BQXBDLEdBQTZDLEtBQUtBLE1BQXZFO0FBQ0FuSyxpQkFBVyxDQUFDc0ssVUFBWixHQUF5QnRLLFdBQVcsQ0FBQ21LLE1BQVosR0FBcUJuSyxXQUFXLENBQUNtSyxNQUFaLEdBQXFCLEdBQTFDLEdBQWdELEtBQUtHLFVBQTlFO0FBRUF0SyxpQkFBVyxDQUFDa0osa0JBQVosR0FBaUN6USxPQUFPLElBQUlBLE9BQU8sQ0FBQ3lRLGtCQUFuQixHQUF3Q3pRLE9BQU8sQ0FBQ3lRLGtCQUFoRCxHQUFxRSxLQUFLQSxrQkFBM0c7QUFDQWxKLGlCQUFXLENBQUNvSCxhQUFaLEdBQTRCM08sT0FBTyxJQUFJQSxPQUFPLENBQUMyTyxhQUFuQixHQUFtQzNPLE9BQU8sQ0FBQzJPLGFBQTNDLEdBQTJELEtBQUtBLGFBQTVGO0FBQ0FwSCxpQkFBVyxDQUFDdUssc0JBQVosR0FBcUM5UixPQUFPLElBQUksT0FBT0EsT0FBTyxDQUFDOFIsc0JBQWYsS0FBMkMsU0FBdEQsR0FBa0U5UixPQUFPLENBQUM4UixzQkFBMUUsR0FBbUcsS0FBS0Esc0JBQTdJO0FBQ0F2SyxpQkFBVyxDQUFDb0ssY0FBWixHQUE2QjNSLE9BQU8sSUFBSUEsT0FBTyxDQUFDMlIsY0FBbkIsR0FBb0MzUixPQUFPLENBQUMyUixjQUE1QyxHQUE2RCxLQUFLQSxjQUEvRjtBQUNBcEssaUJBQVcsQ0FBQ3BELFdBQVosR0FBMEJuRSxPQUFPLElBQUksT0FBT0EsT0FBTyxDQUFDbUUsV0FBZixLQUFnQyxTQUEzQyxHQUF1RG5FLE9BQU8sQ0FBQ21FLFdBQS9ELEdBQTZFLEtBQUtBLFdBQTVHO0FBQ0FvRCxpQkFBVyxDQUFDckgsT0FBWixHQUFzQkYsT0FBTyxJQUFJQSxPQUFPLENBQUNFLE9BQW5CLEdBQTZCRixPQUFPLENBQUNFLE9BQXJDLEdBQStDb0gsSUFBSSxDQUFDcEgsT0FBMUUsQ0E5QmlELENBZ0NqRDs7QUFDQXFILGlCQUFXLENBQUMyQixPQUFaLEdBQXNCM08scURBQUssQ0FBQ2tYLE1BQU4sQ0FBYSxLQUFiLEVBQW9CLEtBQUt2SSxPQUF6QixFQUFrQzNCLFdBQVcsQ0FBQzJCLE9BQTlDLENBQXRCO0FBQ0EzQixpQkFBVyxDQUFDdEYsVUFBWixHQUF5QjFILHFEQUFLLENBQUNrWCxNQUFOLENBQWEsS0FBYixFQUFvQixLQUFLeFAsVUFBekIsRUFBcUNzRixXQUFXLENBQUN0RixVQUFqRCxDQUF6QjtBQUNBc0YsaUJBQVcsQ0FBQ2dLLFVBQVosR0FBeUJoWCxxREFBSyxDQUFDa1gsTUFBTixDQUFhLEtBQWIsRUFBb0IsS0FBS0YsVUFBekIsRUFBcUNoSyxXQUFXLENBQUNnSyxVQUFqRCxDQUF6QjtBQUNBaEssaUJBQVcsQ0FBQ21ILFFBQVosR0FBdUJuVSxxREFBSyxDQUFDa1gsTUFBTixDQUFhLEtBQWIsRUFBb0IsS0FBSy9DLFFBQXpCLEVBQW1DbkgsV0FBVyxDQUFDbUgsUUFBL0MsQ0FBdkIsQ0FwQ2lELENBc0NqRDs7QUFDQSxVQUFJbkgsV0FBVyxDQUFDMkIsT0FBaEIsRUFBeUI7QUFDdkIzQixtQkFBVyxDQUFDcUssV0FBWixHQUEwQixrRkFBWXJLLFdBQVcsQ0FBQzJCLE9BQXhCLEVBQWlDeE0sTUFBakMsQ0FBd0MsVUFBQzJDLEdBQUQsRUFBUztBQUN6RSxpQkFBT0EsR0FBRyxDQUFDN0csT0FBSixDQUFZLEdBQVosS0FBb0IsQ0FBM0IsQ0FEeUUsQ0FDM0M7QUFDL0IsU0FGeUIsQ0FBMUI7QUFHRDs7QUFFRCxhQUFRK08sV0FBUjtBQUNEO0FBRUQ7Ozs7QUF6TEY7QUFBQTtBQUFBLHlCQTRMYzFOLEVBNUxkLEVBNEx5RWEsTUE1THpFLEVBNExzRnNGLE9BNUx0RixFQTRMMEc7QUFDdEcsVUFBTXVILFdBQXFCLEdBQUcsS0FBS0MsY0FBTCxDQUFvQnhILE9BQXBCLENBQTlCO0FBRUF0RixZQUFNLEdBQUdBLE1BQU0sSUFBSSxJQUFJcVgsTUFBSixDQUFXLElBQVgsQ0FBbkI7QUFDQTFQLHdEQUFRLENBQUMyUCxhQUFULENBQXVCekssV0FBdkI7QUFFQSxVQUFNOU0sSUFBSSxHQUFHLElBQUkrRCwwQ0FBSixDQUFTM0UsRUFBVCxFQUFhYSxNQUFiLEVBQXFCNk0sV0FBckIsQ0FBYjtBQUNBOU0sVUFBSSxDQUFDYixJQUFMO0FBQ0EsYUFBT2EsSUFBUDtBQUNEO0FBck1IOztBQUFBO0FBQUE7O3FGQUFhNk0sSSxvQkFNb0JwTSxvRTs7cUZBTnBCb00sSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJiO0FBRU8sSUFBTTJLLGNBQWI7QUFBQTtBQUFBO0FBQUE7O0FBSUU7Ozs7QUFJQSwwQkFBWS9JLE9BQVosRUFBb0M7QUFBQTs7QUFBQTs7QUFDbEMsa09BQU1BLE9BQU47O0FBRGtDLHFNQU5pQyxRQU1qQzs7QUFBQTtBQUVuQztBQUVEOzs7Ozs7O0FBWkY7QUFBQTtBQUFBLDJCQWlCZ0JsSCxNQWpCaEIsRUFpQnNDa1EsWUFqQnRDLEVBaUI0RztBQUFBLFVBQS9DQyxhQUErQyx1RUFBdEIsS0FBc0I7O0FBQ3hHLFVBQUksQ0FBQ25RLE1BQUQsSUFBVyxPQUFPQSxNQUFNLENBQUM3SCxPQUFkLEtBQTJCLFVBQTFDLEVBQXNEO0FBQ3BELGFBQUsrRyxLQUFMLENBQVcsSUFBSTNGLEtBQUosQ0FBVSx3QkFBVixDQUFYLEVBQWdEeUcsTUFBaEQ7QUFDQSxlQUFPLEtBQUtvUSxRQUFaO0FBQ0Q7O0FBRUQsVUFBTTNZLElBQUksR0FBRzBZLGFBQWEsR0FBR0QsWUFBWSxJQUFJbFEsTUFBTSxDQUFDdkksSUFBMUIsR0FBaUN1SSxNQUFNLENBQUN2SSxJQUFQLElBQWV5WSxZQUExRTs7QUFFQSxVQUFJLENBQUN6WSxJQUFMLEVBQVc7QUFDVGdILGVBQU8sQ0FBQ0MsSUFBUixDQUFhLElBQUluRixLQUFKLENBQVUsd0JBQVYsQ0FBYixFQUFrRHlHLE1BQWxEO0FBQ0EsZUFBTyxLQUFLb1EsUUFBWjtBQUNEOztBQUVELFdBQUtBLFFBQUwsQ0FBYzNZLElBQWQsSUFBc0J1SSxNQUF0QjtBQUNBLGFBQU8sS0FBS29RLFFBQVo7QUFDRDtBQWhDSDs7QUFBQTtBQUFBLEVBQW9DQyw0RUFBcEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFFTyxJQUFNQyxnQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFJRTs7OztBQUlBLDRCQUFZZixVQUFaLEVBQXFDO0FBQUE7O0FBQUE7O0FBQ25DLG9PQUFNQSxVQUFOOztBQURtQyxxTUFOZ0MsWUFNaEM7O0FBQUE7QUFFcEM7QUFFRDs7Ozs7OztBQVpGO0FBQUE7QUFBQSwyQkFpQmdCZ0IsU0FqQmhCLEVBaUI2Q0wsWUFqQjdDLEVBaUJpSDtBQUFBLFVBQTdDQyxhQUE2Qyx1RUFBcEIsS0FBb0I7QUFDN0csVUFBTTFZLElBQUksR0FBRzBZLGFBQWEsR0FBR0QsWUFBWSxJQUFJSyxTQUFTLENBQUNqUixPQUE3QixHQUF1Q2lSLFNBQVMsQ0FBQ2pSLE9BQVYsSUFBcUI0USxZQUF0Rjs7QUFFQSxVQUFJLENBQUN6WSxJQUFMLEVBQVc7QUFDVGdILGVBQU8sQ0FBQ0MsSUFBUixDQUFhLElBQUluRixLQUFKLENBQVUsMkJBQVYsQ0FBYixFQUFxRGdYLFNBQXJEO0FBQ0EsZUFBTyxLQUFLSCxRQUFaO0FBQ0Q7O0FBRUQsV0FBS0EsUUFBTCxDQUFjM1ksSUFBZCxJQUFzQjhZLFNBQXRCO0FBQ0EsYUFBTyxLQUFLSCxRQUFaO0FBQ0Q7QUEzQkg7O0FBQUE7QUFBQSxFQUFzQ0MsNEVBQXRDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ01BOzs7OztJQUtNRyxlOzs7OztnQ0FJc0J4YixFLEVBQVk7QUFDcEMsVUFBTWlNLE1BQU0sR0FBR3VQLGVBQWUsQ0FBQ0MsU0FBaEIsQ0FBMEJ6YixFQUExQixDQUFmOztBQUNBLFVBQUksQ0FBQ2lNLE1BQUwsRUFBYTtBQUNYLGNBQU0sSUFBSTFILEtBQUosK0NBQWlEdkUsRUFBakQsYUFBTjtBQUNEOztBQUNELGFBQU9pTSxNQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztBQVdBOzs7O0FBSUEsMkJBQVlqTSxFQUFaLEVBQXlCO0FBQUE7O0FBQUEseUdBUkMsRUFRRDs7QUFBQTs7QUFDdkIsUUFBSSxDQUFDQSxFQUFMLEVBQVM7QUFDUEEsUUFBRSxHQUFHLE1BQUw7QUFDRDs7QUFDRCxTQUFLQSxFQUFMLEdBQVVBLEVBQVY7O0FBRUEsUUFBSXdiLGVBQWUsQ0FBQ0MsU0FBaEIsQ0FBMEIsS0FBS3piLEVBQS9CLENBQUosRUFBd0M7QUFDdEMsYUFBT3diLGVBQWUsQ0FBQ0MsU0FBaEIsQ0FBMEIsS0FBS3piLEVBQS9CLENBQVA7QUFDRDs7QUFFRHdiLG1CQUFlLENBQUNDLFNBQWhCLENBQTBCLEtBQUt6YixFQUEvQixJQUFxQyxJQUFyQztBQUNBLFdBQU93YixlQUFlLENBQUNDLFNBQWhCLENBQTBCLEtBQUt6YixFQUEvQixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7dUJBT1UwYixDLEVBQVdDLEMsRUFBa0I7QUFDckMsV0FBS0MsTUFBTCxDQUFZRixDQUFaLElBQWlCLEtBQUtFLE1BQUwsQ0FBWUYsQ0FBWixLQUFrQixFQUFuQztBQUNBLFdBQUtFLE1BQUwsQ0FBWUYsQ0FBWixFQUFlamEsSUFBZixDQUFvQmthLENBQXBCO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozt3QkFPV0QsQyxFQUFXQyxDLEVBQWtCO0FBQ3RDLFVBQUlELENBQUMsSUFBSSxLQUFLRSxNQUFWLEtBQXFCLEtBQXpCLEVBQWdDO0FBQzlCO0FBQ0Q7O0FBRUQsV0FBS0EsTUFBTCxDQUFZRixDQUFaLEVBQWUvWixNQUFmLENBQXNCLEtBQUtpYSxNQUFMLENBQVlGLENBQVosRUFBZWxhLE9BQWYsQ0FBdUJtYSxDQUF2QixDQUF0QixFQUFpRCxDQUFqRDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7NEJBT2VELEMsRUFBMkI7QUFBRTtBQUMxQyxVQUFJQSxDQUFDLElBQUksS0FBS0UsTUFBVixLQUFxQixLQUF6QixFQUFnQztBQUM5QjtBQUNEOztBQUh1Qyx3Q0FBYi9hLElBQWE7QUFBYkEsWUFBYTtBQUFBOztBQUt4QyxXQUFLLElBQUlrRixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUs2VixNQUFMLENBQVlGLENBQVosRUFBZW5iLE1BQW5DLEVBQTJDd0YsQ0FBQyxFQUE1QyxFQUFnRDtBQUM5QyxhQUFLNlYsTUFBTCxDQUFZRixDQUFaLEVBQWUzVixDQUFmLEVBQWtCaEYsS0FBbEIsQ0FBd0IsSUFBeEIsRUFBOEJGLElBQTlCO0FBQ0Q7QUFDRjs7Ozs7O3FGQW5GRzJhLGUsZUFFaUQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQnZEO0FBRU8sSUFBTUssZ0JBQWI7QUFBQTtBQUFBO0FBQUE7O0FBSUU7OztBQUdBLDRCQUFZNVEsVUFBWixFQUFxQztBQUFBOztBQUFBOztBQUNwQyxvT0FBTUEsVUFBTjs7QUFEb0MscU1BTGdDLFdBS2hDOztBQUFBO0FBRXBDO0FBRUQ7Ozs7Ozs7QUFYRjtBQUFBO0FBQUEsMkJBZ0JnQnFCLFNBaEJoQixFQWdCdUM0TyxZQWhCdkMsRUFnQjJHO0FBQUEsVUFBN0NDLGFBQTZDLHVFQUFwQixLQUFvQjtBQUV2RyxVQUFNMVksSUFBSSxHQUFHMFksYUFBYSxHQUFHRCxZQUFZLElBQUk1TyxTQUFTLENBQUM3SixJQUE3QixHQUFvQzZKLFNBQVMsQ0FBQzdKLElBQVYsSUFBa0J5WSxZQUFoRjs7QUFFQSxVQUFJLENBQUN6WSxJQUFMLEVBQVc7QUFDVCxjQUFNLElBQUk4QixLQUFKLENBQVUsMkJBQVYsQ0FBTjtBQUNEOztBQUVELFdBQUs2VyxRQUFMLENBQWMzWSxJQUFkLElBQXNCNkosU0FBdEI7QUFDQSxhQUFPLEtBQUs4TyxRQUFaO0FBQ0Q7QUExQkg7O0FBQUE7QUFBQSxFQUFzQ0MsNEVBQXRDLEU7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQVFPLElBQWVBLG9CQUF0QjtBQUFBO0FBQUE7QUFPRTs7OztBQUlBLGdDQUFZRCxRQUFaLEVBQWlDO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsd0dBTmZqUixzREFBSyxDQUFDLCtCQUFELENBTVU7O0FBQy9CLFNBQUtpUixRQUFMLEdBQWdCQSxRQUFoQjtBQUNEO0FBRUQ7Ozs7Ozs7QUFmRjtBQUFBOztBQXNCRTs7OztBQXRCRiw0QkEwQmlCQSxRQTFCakIsRUEwQmlEO0FBQzdDLFVBQUksQ0FBQzdYLDRDQUFLLENBQUN1UCxRQUFOLENBQWVzSSxRQUFmLENBQUwsRUFBK0I7QUFDN0IsY0FBTSxJQUFJN1csS0FBSixDQUFVLG9EQUFWLENBQU47QUFDRDs7QUFDRCxXQUFLLElBQU04RCxJQUFYLElBQWtCK1MsUUFBbEIsRUFBNEI7QUFDMUIsWUFBSUEsUUFBUSxDQUFDcmIsY0FBVCxDQUF3QnNJLElBQXhCLEtBQWdDQSxJQUFHLEtBQUssWUFBNUMsRUFBMEQ7QUFDeEQsY0FBTStGLFFBQU8sR0FBR2dOLFFBQVEsQ0FBQy9TLElBQUQsQ0FBeEI7QUFDQSxlQUFLNkIsS0FBTCxrQkFBcUIsS0FBSzlGLElBQTFCLHlCQUE0Q2lFLElBQTVDLFNBQW9EK0YsUUFBcEQ7QUFDQSxlQUFLME4sTUFBTCxDQUFZMU4sUUFBWixFQUFxQi9GLElBQXJCO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPLEtBQUsrUyxRQUFaO0FBQ0Q7QUF0Q0g7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLElBQU1kLGNBQWI7QUFBQTtBQUFBO0FBTUU7Ozs7QUFJQSwwQkFBWXBJLE9BQVosRUFBb0NxSSxVQUFwQyxFQUE2RHRQLFVBQTdELEVBQXNGO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsd0dBTnBFZCxzREFBSyxDQUFDLHlCQUFELENBTStEOztBQUNwRixTQUFLYSxNQUFMLEdBQWMsSUFBSWlRLDhEQUFKLENBQW1CL0ksT0FBbkIsQ0FBZDtBQUNBLFNBQUtxSixTQUFMLEdBQWlCLElBQUlELG1FQUFKLENBQXFCZixVQUFyQixDQUFqQjtBQUNBLFNBQUtqTyxTQUFMLEdBQWlCLElBQUl1UCxtRUFBSixDQUFxQjVRLFVBQXJCLENBQWpCO0FBQ0Q7QUFFRDs7Ozs7O0FBaEJGO0FBQUE7QUFBQSwyQkFvQmdCb1AsTUFwQmhCLEVBb0JxQztBQUNqQyxVQUFJQSxNQUFNLENBQUNuSSxPQUFYLEVBQW9CO0FBQ2xCLGFBQUtoSSxLQUFMLENBQVcsa0JBQVgsRUFBK0JtUSxNQUFNLENBQUNuSSxPQUF0QztBQUNBLGFBQUtsSCxNQUFMLENBQVkrUSxPQUFaLENBQW9CMUIsTUFBTSxDQUFDbkksT0FBM0I7QUFDRDs7QUFDRCxVQUFJbUksTUFBTSxDQUFDRSxVQUFYLEVBQXVCO0FBQ3JCLGFBQUtyUSxLQUFMLENBQVcscUJBQVgsRUFBa0NtUSxNQUFNLENBQUNFLFVBQXpDO0FBQ0EsYUFBS2dCLFNBQUwsQ0FBZVEsT0FBZixDQUF1QjFCLE1BQU0sQ0FBQ0UsVUFBOUI7QUFDRDs7QUFDRCxVQUFJRixNQUFNLENBQUNwUCxVQUFYLEVBQXVCO0FBQ3JCLGFBQUtmLEtBQUwsQ0FBVyxxQkFBWCxFQUFrQ21RLE1BQU0sQ0FBQ3BQLFVBQXpDO0FBQ0EsYUFBS3FCLFNBQUwsQ0FBZXlQLE9BQWYsQ0FBdUIxQixNQUFNLENBQUNwUCxVQUE5QjtBQUNEO0FBQ0Y7QUFqQ0g7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NKQTs7QUFNQTs7Ozs7O0FBTU8sSUFBTTFILEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBRUU7Ozs7Ozs7QUFGRiw0QkFTd0J5WSxHQVR4QixFQVNxQ25ZLElBVHJDLEVBU2lEO0FBQzdDLGFBQU8sSUFBSSw4RUFBYSxVQUFDb0wsT0FBRCxFQUFVZ04sTUFBVixFQUFxQjtBQUMzQzlTLHVEQUFNLENBQUMrUyxPQUFQLENBQWVGLEdBQWYsRUFBb0JuWSxJQUFwQixFQUNDc1ksSUFERCxDQUNPbE4sT0FEUCxFQUVDbU4sSUFGRCxDQUVNLFVBQUVDLEtBQUYsRUFBU0MsVUFBVCxFQUFxQjlTLEtBQXJCLEVBQWdDO0FBQ3BDO0FBQ0F5UyxnQkFBTSxDQUFDSSxLQUFELENBQU47QUFDRCxTQUxEO0FBTUQsT0FQTSxDQUFQO0FBUUQ7QUFFRDs7Ozs7Ozs7O0FBcEJGO0FBQUE7QUFBQSx5QkE0QnFCTCxHQTVCckIsRUE0QmtDblksSUE1QmxDLEVBNEI4QzBZLFFBNUI5QyxFQTRCaUU7QUFDN0QsYUFBTyxJQUFJLDhFQUFhLFVBQUN0TixPQUFELEVBQVVnTixNQUFWLEVBQXFCO0FBQzNDOVMsdURBQU0sQ0FBQ3FULElBQVAsQ0FBWVIsR0FBWixFQUFpQm5ZLElBQWpCLEVBQXVCLElBQXZCLEVBQTZCMFksUUFBN0IsRUFDQ0osSUFERCxDQUNPbE4sT0FEUCxFQUVDbU4sSUFGRCxDQUVNLFVBQUVDLEtBQUYsRUFBU0MsVUFBVCxFQUFxQjlTLEtBQXJCLEVBQWdDO0FBQ3BDO0FBQ0F5UyxnQkFBTSxDQUFDSSxLQUFELENBQU47QUFDRCxTQUxEO0FBTUQsT0FQTSxDQUFQO0FBUUQ7QUFyQ0g7QUFBQTtBQUFBLDRCQXVDdUJMLEdBdkN2QixFQXVDb0NuWSxJQXZDcEMsRUF1Q2dEMFksUUF2Q2hELEVBdUNtRTtBQUMvRCxhQUFPLElBQUksOEVBQWEsVUFBQ3ROLE9BQUQsRUFBVWdOLE1BQVYsRUFBcUI7QUFDM0MsZUFBTzlTLCtDQUFNLENBQUNzVCxJQUFQLENBQVk7QUFDakJULGFBQUcsRUFBSEEsR0FEaUI7QUFFakI1WCxjQUFJLEVBQUUsUUFGVztBQUdqQlAsY0FBSSxFQUFKQSxJQUhpQjtBQUlqQjBZLGtCQUFRLEVBQVJBO0FBSmlCLFNBQVosRUFNTkosSUFOTSxDQU1BbE4sT0FOQSxFQU9ObU4sSUFQTSxDQU9ELFVBQUVDLEtBQUYsRUFBU0MsVUFBVCxFQUFxQjlTLEtBQXJCLEVBQWdDO0FBQ3BDO0FBQ0F5UyxnQkFBTSxDQUFDSSxLQUFELENBQU47QUFDRCxTQVZNLENBQVA7QUFXRCxPQVpNLENBQVA7QUFhRDtBQXJESDtBQUFBO0FBQUEsd0JBdURvQkwsR0F2RHBCLEVBdURpQ25ZLElBdkRqQyxFQXVENkMwWSxRQXZEN0MsRUF1RGdFO0FBQzVELGFBQU8sSUFBSSw4RUFBYSxVQUFDdE4sT0FBRCxFQUFVZ04sTUFBVixFQUFxQjtBQUMzQyxlQUFPOVMsK0NBQU0sQ0FBQ3NULElBQVAsQ0FBWTtBQUNqQlQsYUFBRyxFQUFIQSxHQURpQjtBQUVqQjVYLGNBQUksRUFBRSxLQUZXO0FBR2pCUCxjQUFJLEVBQUpBLElBSGlCO0FBSWpCMFksa0JBQVEsRUFBUkE7QUFKaUIsU0FBWixFQU1OSixJQU5NLENBTUFsTixPQU5BLEVBT05tTixJQVBNLENBT0QsVUFBRUMsS0FBRixFQUFTQyxVQUFULEVBQXFCOVMsS0FBckIsRUFBZ0M7QUFDcEM7QUFDQXlTLGdCQUFNLENBQUNJLEtBQUQsQ0FBTjtBQUNELFNBVk0sQ0FBUDtBQVdELE9BWk0sQ0FBUDtBQWFEO0FBRUQ7Ozs7Ozs7OztBQXZFRjtBQUFBO0FBQUEsd0JBK0VvQkwsR0EvRXBCLEVBK0VpQ25ZLElBL0VqQyxFQStFNkMwWSxRQS9FN0MsRUErRWdFO0FBQzVELGFBQU8sSUFBSSw4RUFBYSxVQUFDdE4sT0FBRCxFQUFVZ04sTUFBVixFQUFxQjtBQUMzQzlTLHVEQUFNLENBQUNySCxHQUFQLENBQVdrYSxHQUFYLEVBQWdCblksSUFBaEIsRUFBc0IsSUFBdEIsRUFBNEIwWSxRQUE1QixFQUNDSixJQURELENBQ09sTixPQURQLEVBRUNtTixJQUZELENBRU0sVUFBRUMsS0FBRixFQUFTQyxVQUFULEVBQXFCOVMsS0FBckIsRUFBZ0M7QUFDcEM7QUFDQXlTLGdCQUFNLENBQUNJLEtBQUQsQ0FBTjtBQUNELFNBTEQ7QUFNRCxPQVBNLENBQVA7QUFRRDtBQUVEOzs7OztBQTFGRjtBQUFBO0FBQUEsMkJBOEZ1QmhKLEdBOUZ2QixFQThGNEM7QUFDeEMsVUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDUixlQUFPLEtBQVA7QUFDRDs7QUFDRCxVQUFJO0FBQ0YsWUFBTXFKLEdBQUcsR0FBR25OLElBQUksQ0FBQ0MsS0FBTCxDQUFXNkQsR0FBWCxDQUFaO0FBQ0EsZUFBUSxxRkFBY3FKLEdBQWQsS0FBc0IsNkVBQU9BLEdBQVAsTUFBZ0IsUUFBdkMsR0FBbUQsSUFBbkQsR0FBMEQsS0FBakU7QUFDRCxPQUhELENBR0UsT0FBT2xULEtBQVAsRUFBYztBQUNkLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFFRDs7OztBQTFHRjtBQUFBO0FBQUEsZ0NBNkc0QnRKLEtBN0c1QixFQTZHeUM7QUFDckMsYUFBTyxPQUFPQSxLQUFQLEtBQWtCLFdBQXpCO0FBQ0Q7QUFFRDs7OztBQWpIRjtBQUFBO0FBQUEsOEJBb0gwQkEsS0FwSDFCLEVBb0h1QztBQUNuQyxhQUFPLENBQUNxRCxLQUFLLENBQUN3UCxXQUFOLENBQWtCN1MsS0FBbEIsQ0FBUjtBQUNEO0FBRUQ7Ozs7O0FBeEhGO0FBQUE7QUFBQSw2QkE0SHlCSixHQTVIekIsRUE0SHNDO0FBQ2xDLGFBQU95RCxLQUFLLENBQUNzUCxTQUFOLENBQWdCL1MsR0FBaEIsS0FBd0IsNkVBQU9BLEdBQVAsTUFBZSxRQUF2QyxJQUFtREEsR0FBRyxLQUFLLElBQWxFO0FBQ0Q7QUFFRDs7Ozs7QUFoSUY7QUFBQTtBQUFBLDhCQW9JMEJJLEtBcEkxQixFQW9JeUM7QUFDckMsYUFBT0EsS0FBSyxJQUFJLElBQVQsR0FBZ0JBLEtBQUssQ0FBQ3lWLFFBQU4sRUFBaEIsR0FBbUM3TixTQUExQztBQUNEO0FBRUQ7Ozs7O0FBeElGO0FBQUE7QUFBQSw4QkE0STBCNUgsS0E1STFCLEVBNEl5QztBQUNyQyxhQUFPQSxLQUFLLEdBQUcsa0ZBQVdBLEtBQVgsQ0FBSCxHQUF1QjRILFNBQW5DO0FBQ0Q7QUE5SUg7QUFBQTtBQUFBLDBCQWdKc0I2VSxDQWhKdEIsRUFnSmlDdGEsRUFoSmpDLEVBZ0ppRDtBQUM3QyxXQUFLLElBQUkwRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNFcsQ0FBcEIsRUFBdUI1VyxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCMUQsVUFBRTtBQUNIO0FBQ0Y7QUFFRDs7OztBQXRKRjtBQUFBO0FBQUEsa0NBeUo4QlEsRUF6SjlCLEVBeUorQztBQUMzQyxVQUFNK1osT0FBaUIsR0FBRyxFQUExQjs7QUFDQSxVQUFLL1osRUFBRCxDQUEwQnVCLElBQTFCLEtBQW1DLFVBQXZDLEVBQW1EO0FBQ2pELGVBQVF2QixFQUFELENBQXlCdUMsT0FBaEM7QUFDRCxPQUZELE1BRU8sSUFBS3ZDLEVBQUQsQ0FBMEJ1QixJQUExQixLQUFtQyxpQkFBdkMsRUFBMEQ7QUFDL0QsWUFBTTRFLE9BQThCLEdBQUluRyxFQUFELENBQTBCbUcsT0FBakU7O0FBRUEsYUFBSyxJQUFNWCxHQUFYLElBQWtCVyxPQUFsQixFQUEyQjtBQUN6QixjQUFJQSxPQUFPLENBQUNqSixjQUFSLENBQXVCc0ksR0FBdkIsQ0FBSixFQUFpQztBQUMvQixnQkFBTXNDLE1BQU0sR0FBRzNCLE9BQU8sQ0FBQ1gsR0FBRCxDQUF0Qjs7QUFDQSxnQkFBSXNDLE1BQU0sQ0FBQ0MsUUFBWCxFQUFxQjtBQUNuQmdTLHFCQUFPLENBQUNuYixJQUFSLENBQWFrSixNQUFNLENBQUN6SyxLQUFwQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxlQUFPMGMsT0FBUDtBQUNELE9BYk0sTUFhQSxJQUFLL1osRUFBRSxDQUFDMkIsWUFBSCxDQUFnQixpQkFBaEIsQ0FBTCxFQUF5QztBQUM5QyxlQUFPM0IsRUFBRSxDQUFDOEYsU0FBVixDQUQ4QyxDQUN6QjtBQUN0QixPQUZNLE1BRUE7QUFDTCxlQUFROUYsRUFBRCxDQUF5QjNDLEtBQWhDO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7QUFqTEY7QUFBQTs7QUE0TEU7OztBQTVMRiwrQkErTDJCQSxLQS9MM0IsRUErTHVDO0FBQ25DLGFBQU8sT0FBT0EsS0FBUCxLQUFrQixVQUF6QjtBQUNEO0FBRUQ7Ozs7O0FBbk1GO0FBQUE7QUFBQSw0QkF1TXdCQSxLQXZNeEIsRUF1TW9DO0FBQ2hDLGFBQU82YSxNQUFNLENBQUNwSyxTQUFQLENBQWlCZ0YsUUFBakIsQ0FBMEJoSixJQUExQixDQUFnQ3pNLEtBQWhDLE1BQTRDLGdCQUFuRDtBQUNEO0FBRUQ7Ozs7O0FBM01GO0FBQUE7QUFBQSw2QkErTXlCQSxLQS9NekIsRUErTStDO0FBQzNDLGFBQU8sQ0FBQ21QLEtBQUssQ0FBQyxrRkFBV25QLEtBQVgsQ0FBRCxDQUFOLElBQTZCLENBQUNtUCxLQUFLLENBQUNuUCxLQUFLLEdBQUcsQ0FBVCxDQUExQztBQUNEO0FBRUQ7Ozs7O0FBbk5GO0FBQUE7QUFBQSw4QkF1TjBCQSxLQXZOMUIsRUF1TnVDO0FBQ25DLGFBQU8sNkVBQU9BLEtBQVAsbUZBQXlCLElBQXpCLENBQVA7QUFDRDtBQUVEOzs7O0FBM05GO0FBQUE7QUFBQSw2QkE4TnlCQSxLQTlOekIsRUE4TnNDO0FBQ2xDLGFBQU8sS0FBSzJTLFNBQUwsQ0FBZTNTLEtBQWYsS0FBeUIsT0FBT0EsS0FBUCxLQUFrQixRQUFsRDtBQUNEO0FBRUQ7Ozs7QUFsT0Y7QUFBQTtBQUFBLG9DQXFPZ0NBLEtBck9oQyxFQXFPK0M7QUFDM0MsYUFBTyxLQUFLd1UsUUFBTCxDQUFjeFUsS0FBZCxLQUF3QixLQUFLdU4sSUFBTCxDQUFVdk4sS0FBVixDQUEvQjtBQUNEO0FBRUQ7Ozs7QUF6T0Y7QUFBQTtBQUFBLHlDQTRPcUNBLEtBNU9yQyxFQTRPa0Q7QUFDOUMsYUFBTyxRQUFRdU4sSUFBUixDQUFhdk4sS0FBYixDQUFQO0FBQ0Q7QUFFRDs7OztBQWhQRjtBQUFBO0FBQUEsd0NBbVBvQ0EsS0FuUHBDLEVBbVBtRDtBQUMvQyxhQUFPLGdCQUFnQnVOLElBQWhCLENBQXFCdk4sS0FBckIsQ0FBUDtBQUNEO0FBRUQ7Ozs7OztBQXZQRjtBQUFBO0FBQUEsK0JBNFAyQm1ULEdBNVAzQixFQTRQd0M7QUFDcEMsVUFBTWIsR0FBRyxHQUFHYSxHQUFHLENBQUM3RixPQUFKLENBQVksV0FBWixFQUF5QixFQUF6QixDQUFaOztBQUNBLFVBQUksQ0FBQ2pLLEtBQUssQ0FBQ3lLLFFBQU4sQ0FBZXdFLEdBQWYsQ0FBTCxFQUEwQjtBQUN4QixlQUFPLENBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPdkUsTUFBTSxDQUFDdUUsR0FBRCxDQUFiO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7Ozs7O0FBclFGO0FBQUE7QUFBQSwyQkE4UXVCcUssSUE5UXZCLEVBOFFzQ2xSLE1BOVF0QyxFQThRdURtUixPQTlRdkQsRUE4UXlFQyxPQTlRekUsRUE4UTJGO0FBQ3ZGLFVBQUk5USxNQUFKOztBQUNBLFVBQUk0USxJQUFKLEVBQVU7QUFDUjVRLGNBQU0sR0FBRzlDLCtDQUFNLENBQUMzRixNQUFQLENBQWMsSUFBZCxFQUFvQm1JLE1BQU0sSUFBSSxFQUE5QixFQUFrQ21SLE9BQU8sSUFBSSxFQUE3QyxFQUFpREMsT0FBakQsQ0FBVDtBQUNELE9BRkQsTUFFTztBQUNMO0FBQ0E5USxjQUFNLEdBQUc5QywrQ0FBTSxDQUFDM0YsTUFBUCxDQUFjbUksTUFBTSxJQUFJLEVBQXhCLEVBQTRCbVIsT0FBTyxJQUFJLEVBQXZDLEVBQTJDQyxPQUEzQyxDQUFUO0FBQ0Q7O0FBQ0QsYUFBTzlRLE1BQVA7QUFDRDtBQUVEOzs7Ozs7O0FBelJGO0FBQUE7QUFBQSwyQkErUnVCNFEsSUEvUnZCLEVBK1JzQ0MsT0EvUnRDLEVBK1J3REUsT0EvUnhELEVBK1IrRTtBQUMzRUYsYUFBTyxHQUFHLEtBQUt0WixNQUFMLENBQVlxWixJQUFaLEVBQWtCQyxPQUFPLElBQUksRUFBN0IsRUFBaUNBLE9BQU8sSUFBSSxFQUE1QyxFQUFnREUsT0FBTyxJQUFJLEVBQTNELENBQVY7QUFDQSxhQUFPRixPQUFQO0FBQ0Q7QUFFRDs7Ozs7O0FBcFNGO0FBQUE7QUFBQSwwQkF5U3NCRCxJQXpTdEIsRUF5U3FDSCxHQXpTckMsRUF5UytDO0FBQzNDLFVBQUluWixLQUFLLENBQUM4USxPQUFOLENBQWNxSSxHQUFkLENBQUosRUFBd0I7QUFDdEIsZUFBT0EsR0FBRyxDQUFDOU8sS0FBSixFQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBT3JLLEtBQUssQ0FBQ0MsTUFBTixDQUFhcVosSUFBYixFQUFtQixFQUFuQixFQUF1QkgsR0FBdkIsQ0FBUDtBQUNEO0FBQ0Y7QUFFRDs7Ozs7O0FBalRGO0FBQUE7QUFBQSxnREFzVDRDamEsSUF0VDVDLEVBc1QwRHZDLEtBdFQxRCxFQXNUeUU7QUFDckU7QUFDQWlKLHFEQUFNLENBQUM4VCxTQUFQLENBQWlCO0FBQ2ZDLGtCQUFVLEVBQUUsb0JBQUNDLEdBQUQsRUFBb0I7QUFDOUJBLGFBQUcsQ0FBQ0MsZ0JBQUosQ0FBcUIzYSxJQUFyQixFQUEyQnZDLEtBQTNCO0FBQ0Q7QUFIYyxPQUFqQjs7QUFLQSxXQUFLbWQsMEJBQUwsQ0FBZ0M1YixJQUFoQyxDQUFxQztBQUNuQ2dCLFlBQUksRUFBSkEsSUFEbUM7QUFFbkN2QyxhQUFLLEVBQUxBO0FBRm1DLE9BQXJDO0FBSUQ7QUFDRDs7Ozs7Ozs7QUFsVUY7QUFBQTtBQUFBLHdCQXlVb0I4YixHQXpVcEIsRUF5VW9EO0FBQUEsVUFBbkJzQixVQUFtQix1RUFBTixJQUFNO0FBQ2hELFVBQU1DLFFBQVEsR0FBRyxLQUFLQSxRQUFMLEVBQWpCO0FBQ0EsVUFBTUMsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBWjs7QUFFQUQsU0FBRyxDQUFDRSxrQkFBSixHQUF5QixZQUFNO0FBQzdCLFlBQUlGLEdBQUcsQ0FBQ0csVUFBSixLQUFtQixDQUF2QixFQUEwQjtBQUN4QixjQUFJSCxHQUFHLENBQUNJLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUN0QixtQkFBT0wsUUFBUSxDQUFDdE8sT0FBVCxDQUFpQnVPLEdBQUcsQ0FBQ0ssWUFBckIsQ0FBUDtBQUNELFdBRkQsTUFFTztBQUNMLG1CQUFPTixRQUFRLENBQUN0QixNQUFULENBQWdCLElBQUkxWCxLQUFKLENBQVUsMkJBQVYsQ0FBaEIsQ0FBUDtBQUNEO0FBQ0Y7QUFDRixPQVJEOztBQVVBaVosU0FBRyxDQUFDTSxTQUFKLEdBQWdCLFlBQU07QUFDcEIsZUFBT1AsUUFBUSxDQUFDdEIsTUFBVCxDQUFnQixJQUFJMVgsS0FBSixDQUFVLHVCQUFWLENBQWhCLENBQVA7QUFDRCxPQUZEOztBQUlBaVosU0FBRyxDQUFDcEUsSUFBSixDQUFTLEtBQVQsRUFBZ0I0QyxHQUFoQjtBQUNBd0IsU0FBRyxDQUFDTyxPQUFKLEdBQWNULFVBQWQ7QUFuQmdEO0FBQUE7QUFBQTs7QUFBQTtBQW9CaEQsZ0hBQXFCLEtBQUtELDBCQUExQiw0R0FBc0Q7QUFBQSxjQUEzQ1csTUFBMkM7QUFDcERSLGFBQUcsQ0FBQ0osZ0JBQUosQ0FBcUJZLE1BQU0sQ0FBQ3ZiLElBQTVCLEVBQWtDdWIsTUFBTSxDQUFDOWQsS0FBekM7QUFDRDtBQXRCK0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF1QmhEc2QsU0FBRyxDQUFDUyxJQUFKO0FBRUEsYUFBT1YsUUFBUSxDQUFDVyxPQUFoQjtBQUNEO0FBRUQ7Ozs7Ozs7O0FBcldGO0FBQUE7QUFBQSwrQkE0V2dDO0FBQzVCLFVBQU1wZSxHQUFRLEdBQUcsRUFBakI7QUFDQSxVQUFNcWUsSUFBSSxHQUFHLElBQUksOEVBQVEsVUFBQ2xQLE9BQUQsRUFBZWdOLE1BQWYsRUFBK0I7QUFDdERuYyxXQUFHLENBQUNtUCxPQUFKLEdBQWNBLE9BQWQ7QUFDQW5QLFdBQUcsQ0FBQ21jLE1BQUosR0FBYUEsTUFBYjtBQUNELE9BSFksQ0FBYjtBQUlBbmMsU0FBRyxDQUFDb2UsT0FBSixHQUFjQyxJQUFkO0FBQ0EsYUFBT3JlLEdBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7QUF0WEY7QUFBQTtBQUFBLGdDQWlZNEJrYyxHQWpZNUIsRUFpWW9EO0FBQ2hELFVBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ1IsZUFBTzFOLE1BQU0sQ0FBQzhQLFFBQWQ7QUFDRCxPQUgrQyxDQUloRDs7O0FBQ0EsVUFBTUMsQ0FBQyxHQUFJbFYsdURBQU0scUJBQWE2UyxHQUFiLGFBQU4sQ0FBZ0MsQ0FBaEMsQ0FBWDtBQUNBLGFBQU9xQyxDQUFQO0FBQ0Q7QUFFRDs7Ozs7OztBQTFZRjtBQUFBO0FBQUEsMkJBZ1p1QnJDLEdBaFp2QixFQWdaNkM7QUFDekMsVUFBTW9DLFFBQVEsR0FBRzdhLEtBQUssQ0FBQythLFdBQU4sQ0FBa0J0QyxHQUFsQixDQUFqQjtBQUNBLGFBQU9vQyxRQUFRLENBQUNHLFFBQVQsR0FBb0IsSUFBcEIsR0FDTEgsUUFBUSxDQUFDSSxJQURKLEdBRUxKLFFBQVEsQ0FBQ0ssUUFGSixHQUdMTCxRQUFRLENBQUMzSixNQUhYO0FBSUQ7QUFFRDs7OztBQXhaRjtBQUFBOztBQThhRTs7Ozs7Ozs7QUE5YUYsOEJBc2IwQnVILEdBdGIxQixFQXNiK0M7QUFDM0MsYUFBT0EsR0FBRyxDQUFDeE8sT0FBSixDQUFZLEtBQVosRUFBbUIsRUFBbkIsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQTFiRjtBQUFBO0FBQUEsNEJBa2N3QmtSLENBbGN4QixFQWtjb0MxQyxHQWxjcEMsRUFrY2tEO0FBQzlDLFVBQU1vQyxRQUFRLEdBQUc3YSxLQUFLLENBQUMrYSxXQUFOLENBQWtCdEMsR0FBbEIsQ0FBakI7QUFDQSxVQUFNMkMsSUFBSSxHQUFHLE9BQU9ELENBQVAsS0FBYSxXQUFiLEdBQTJCQSxDQUEzQixHQUErQk4sUUFBUSxDQUFDTyxJQUFyRDtBQUNBLFVBQU1KLFFBQVEsR0FBR0gsUUFBUSxDQUFDRyxRQUExQjs7QUFFQSxVQUFJSSxJQUFJLEtBQUssRUFBYixFQUFpQjtBQUNmLGVBQU8xUSxNQUFNLENBQUMwUSxJQUFELENBQWI7QUFDRDs7QUFDRCxVQUFJSixRQUFRLEtBQUssT0FBakIsRUFBMEI7QUFDeEIsZUFBTyxFQUFQO0FBQ0Q7O0FBRUQsVUFBSUEsUUFBUSxLQUFLLFFBQWpCLEVBQTJCO0FBQ3pCLGVBQU8sR0FBUDtBQUNEO0FBQ0Y7QUFFRDs7Ozs7QUFuZEY7QUFBQTtBQUFBLGtDQXVkOEJ2QyxHQXZkOUIsRUF1ZDJDO0FBQ3ZDLFVBQU00QyxXQUFXLEdBQUcsSUFBSXJSLE1BQUosQ0FBVyxpQkFBWCxFQUE4QixHQUE5QixDQUFwQjtBQUNBLFVBQU1zUixVQUFVLEdBQUdELFdBQVcsQ0FBQ25SLElBQVosQ0FBaUJ1TyxHQUFqQixLQUF5QkEsR0FBRyxDQUFDOEMsVUFBSixDQUFlLFNBQWYsQ0FBekIsSUFBc0Q5QyxHQUFHLENBQUM4QyxVQUFKLENBQWUsTUFBZixDQUF0RCxJQUFnRjlDLEdBQUcsQ0FBQzhDLFVBQUosQ0FBZSxNQUFmLENBQW5HO0FBQ0EsYUFBT0QsVUFBUDtBQUNEO0FBM2RIO0FBQUE7O0FBOGVFOzs7QUE5ZUYsb0NBaWZnQ3BjLElBamZoQyxFQWlmOEN1WixHQWpmOUMsRUFpZjJEO0FBQ3ZELFVBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ1JBLFdBQUcsR0FBRzFOLE1BQU0sQ0FBQzhQLFFBQVAsQ0FBZ0JXLElBQXRCO0FBQ0Q7O0FBQ0R0YyxVQUFJLEdBQUdBLElBQUksQ0FBQytLLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLE1BQXhCLENBQVA7QUFDQSxVQUFNd1IsS0FBSyxHQUFHLElBQUl6UixNQUFKLENBQVcsU0FBUzlLLElBQVQsR0FBZ0IsbUJBQTNCLENBQWQ7QUFDQSxVQUFNbWEsT0FBTyxHQUFHb0MsS0FBSyxDQUFDQyxJQUFOLENBQVdqRCxHQUFYLENBQWhCOztBQUNBLFVBQUksQ0FBQ1ksT0FBTCxFQUFjO0FBQ1osZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsVUFBSSxDQUFDQSxPQUFPLENBQUMsQ0FBRCxDQUFaLEVBQWlCO0FBQ2YsZUFBTyxFQUFQO0FBQ0Q7O0FBQ0QsYUFBT3NDLGtCQUFrQixDQUFDdEMsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXcFAsT0FBWCxDQUFtQixLQUFuQixFQUEwQixHQUExQixDQUFELENBQXpCO0FBQ0Q7QUFFRDs7OztBQWpnQkY7QUFBQTtBQUFBLDRCQW9nQndCd08sR0FwZ0J4QixFQW9nQnNDO0FBQ2xDLGFBQU96WSxLQUFLLENBQUMrYSxXQUFOLENBQWtCdEMsR0FBbEIsRUFBdUJtRCxJQUE5QjtBQUNEO0FBRUQ7Ozs7QUF4Z0JGO0FBQUE7QUFBQSwrQkEyZ0IyQkEsSUEzZ0IzQixFQTJnQnlDO0FBQ3JDLGFBQU83USxNQUFNLENBQUM4UCxRQUFQLENBQWdCZSxJQUFoQixHQUF1QkEsSUFBOUI7QUFDRDtBQUVEOzs7O0FBL2dCRjtBQUFBO0FBQUEsaUNBa2hCNkI7QUFDekIsYUFBT0MsT0FBTyxDQUFDQyxTQUFSLENBQWtCLEVBQWxCLEVBQXNCN1ksUUFBUSxDQUFDOFksS0FBL0IsRUFBc0NoUixNQUFNLENBQUM4UCxRQUFQLENBQWdCSyxRQUFoQixHQUEyQm5RLE1BQU0sQ0FBQzhQLFFBQVAsQ0FBZ0IzSixNQUFqRixDQUFQO0FBQ0Q7QUFwaEJIO0FBQUE7QUFBQSw0Q0FzaEJ5QztBQUNyQyxVQUFNOEssQ0FBQyxHQUFHakwsSUFBSSxDQUFDa0wsR0FBTCxDQUFTaFosUUFBUSxDQUFDaVosZUFBVCxHQUEyQmpaLFFBQVEsQ0FBQ2laLGVBQVQsQ0FBeUJDLFdBQXBELEdBQWtFLENBQTNFLEVBQThFcFIsTUFBTSxDQUFDcVIsVUFBUCxJQUFxQixDQUFuRyxDQUFWO0FBQ0EsVUFBTUMsQ0FBQyxHQUFHdEwsSUFBSSxDQUFDa0wsR0FBTCxDQUFTaFosUUFBUSxDQUFDaVosZUFBVCxHQUEyQmpaLFFBQVEsQ0FBQ2laLGVBQVQsQ0FBeUJJLFlBQXBELEdBQW1FLENBQTVFLEVBQStFdlIsTUFBTSxDQUFDd1IsV0FBUCxJQUFzQixDQUFyRyxDQUFWO0FBQ0EsYUFBTztBQUNMRixTQUFDLEVBQURBLENBREs7QUFFTEwsU0FBQyxFQUFEQTtBQUZLLE9BQVA7QUFJRDtBQUVEOzs7O0FBL2hCRjs7QUFBQTtBQUFBOztxRkFBYWhjLEssZUFzTGUsVUFBQzhQLEdBQUQsRUFBaUI7QUFDekMsU0FBT0EsR0FBRyxDQUFDN0YsT0FBSixDQUFZLFdBQVosRUFBeUIsVUFBQ3VTLE9BQUQsRUFBYTtBQUMzQyxXQUFPQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVd0SSxXQUFYLEVBQVA7QUFDRCxHQUZNLENBQVA7QUFHRCxDOztxRkExTFVsVSxLLGFBMlphLFVBQUN5YyxRQUFELEVBQXVCO0FBQzdDLE1BQUlBLFFBQUosRUFBYztBQUNaLFFBQU12QixRQUFRLEdBQUdsYixLQUFLLENBQUMrYSxXQUFOLEdBQW9CRyxRQUFyQztBQUNBLFdBQU91QixRQUFRLEtBQUt2QixRQUFwQjtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNELEM7O3FGQWphVWxiLEssbUJBc2FtQixVQUFDeWMsUUFBRCxFQUF1QjtBQUNuRCxNQUFJQSxRQUFKLEVBQWM7QUFDWixRQUFNdkIsUUFBUSxHQUFHbGIsS0FBSyxDQUFDK2EsV0FBTixHQUFvQkcsUUFBckM7QUFDQSxXQUFPQSxRQUFRLENBQUNLLFVBQVQsQ0FBb0JrQixRQUFwQixDQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFQO0FBQ0QsQzs7cUZBNWFVemMsSyxtQkE2ZG1CLFVBQUMwYyxXQUFELEVBQXlCO0FBQ3JELE1BQUkxYyxLQUFLLENBQUMyYyxhQUFOLENBQW9CRCxXQUFwQixDQUFKLEVBQXNDO0FBQ3BDLFFBQU03QixRQUFRLEdBQUc3YSxLQUFLLENBQUMrYSxXQUFOLEVBQWpCO0FBQ0EsUUFBTUUsSUFBSSxHQUFHSixRQUFRLENBQUNHLFFBQVQsR0FBb0IsSUFBcEIsR0FBMkJILFFBQVEsQ0FBQytCLFFBQWpEO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLElBQWpCOztBQUNBLFFBQUlILFdBQVcsQ0FBQ25CLFVBQVosQ0FBdUJOLElBQXZCLENBQUosRUFBa0M7QUFDaEM0QixnQkFBVSxHQUFHLEtBQWI7QUFDRDs7QUFDRCxXQUFPQSxVQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFQO0FBQ0QsQzs7cUZBeGVVN2MsSyxtQkEwZW1CLFVBQUN5WSxHQUFELEVBQWlCO0FBQzdDLFNBQU8sQ0FBQ3pZLEtBQUssQ0FBQzhjLGFBQU4sQ0FBb0JyRSxHQUFwQixDQUFSO0FBQ0QsQzs7cUZBNWVVelksSyxnQ0FraUJvRSxDQUFDO0FBQzlFZCxNQUFJLEVBQUUsU0FEd0U7QUFFOUV2QyxPQUFLLEVBQUU7QUFGdUUsQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hqQmpGO0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCZSx5RUFBQzZDLENBQUQsRUFBWTtBQUN2Qjs7QUFDQUEsR0FBQyxDQUFDdWQsTUFBRixHQUFXdmQsQ0FBQyxDQUFDdWQsTUFBRixJQUFZLEVBQXZCO0FBRUEsTUFBSUMsWUFBWSxHQUFJLGtCQUFrQmpTLE1BQXRDO0FBQUEsTUFFSWtTLFFBQVEsR0FBRztBQUNQQyxtQkFBZSxFQUFFLENBRFY7QUFFUEMscUJBQWlCLEVBQUUsRUFGWjtBQUdQQyxxQkFBaUIsRUFBRSxFQUhaO0FBSVBDLHFCQUFpQixFQUFFLEdBSlo7QUFLUEMsaUJBQWEsRUFBRSxHQUxSO0FBTVBDLG1CQUFlLEVBQUUsRUFOVjtBQVFQQyxpQkFBYSxFQUFFUixZQVJSO0FBU1BTLHVCQUFtQixFQUFHLGlCQUFpQjFTLE1BQWpCLElBQTJCLHlCQUF5QkEsTUFUbkU7QUFXUDJTLGNBQVUsRUFBR1YsWUFBRCxHQUFpQixZQUFqQixHQUFnQyxXQVhyQztBQVlQVyxZQUFRLEVBQUdYLFlBQUQsR0FBaUIsVUFBakIsR0FBOEIsU0FaakM7QUFhUFksYUFBUyxFQUFHWixZQUFELEdBQWlCLFdBQWpCLEdBQStCLFdBYm5DO0FBY1BhLFlBQVEsRUFBR2IsWUFBRCxHQUFpQixLQUFqQixHQUF5QixPQWQ1QjtBQWVQYyxlQUFXLEVBQUdkLFlBQUQsR0FBaUIsV0FBakIsR0FBK0IsUUFmckM7QUFpQlBlLGNBQVUsRUFBRXhaLFNBakJMO0FBa0JQeVosYUFBUyxFQUFFelo7QUFsQkosR0FGZixDQUp1QixDQTJCdkI7O0FBQ0EvRSxHQUFDLENBQUN5ZSxLQUFGLEdBQVUsRUFBVixDQTVCdUIsQ0E4QnZCOztBQUNBemUsR0FBQyxDQUFDMGUsY0FBRixHQUFtQixZQUFZO0FBQUUsV0FBT2pCLFFBQVEsQ0FBQ08sYUFBaEI7QUFBZ0MsR0FBakU7O0FBQ0FoZSxHQUFDLENBQUMyZSxhQUFGLEdBQWtCLFlBQVk7QUFBRSxXQUFPbEIsUUFBUSxDQUFDUyxVQUFoQjtBQUE2QixHQUE3RDs7QUFDQWxlLEdBQUMsQ0FBQzRlLFdBQUYsR0FBZ0IsWUFBWTtBQUFFLFdBQU9uQixRQUFRLENBQUNVLFFBQWhCO0FBQTJCLEdBQXpEOztBQUNBbmUsR0FBQyxDQUFDNmUsWUFBRixHQUFpQixZQUFZO0FBQUUsV0FBT3BCLFFBQVEsQ0FBQ1csU0FBaEI7QUFBNEIsR0FBM0Q7O0FBQ0FwZSxHQUFDLENBQUM4ZSxXQUFGLEdBQWdCLFlBQVk7QUFBRSxXQUFPckIsUUFBUSxDQUFDWSxRQUFoQjtBQUEyQixHQUF6RDs7QUFDQXJlLEdBQUMsQ0FBQytlLGNBQUYsR0FBbUIsWUFBWTtBQUFFLFdBQU90QixRQUFRLENBQUNhLFdBQWhCO0FBQThCLEdBQS9ELENBcEN1QixDQXNDdkI7QUFDQTs7O0FBQ0F0ZSxHQUFDLENBQUN5ZSxLQUFGLENBQVFPLGtCQUFSLEdBQTZCLFVBQVVDLFNBQVYsRUFBNkI7QUFDdEQsUUFBSSxPQUFPQSxTQUFQLEtBQXFCLFFBQXpCLEVBQW1DO0FBQUUsWUFBTSxJQUFJemQsS0FBSixDQUFVLDhDQUFWLENBQU47QUFBa0U7O0FBQ3ZHaWMsWUFBUSxDQUFDRSxpQkFBVCxHQUE2QnNCLFNBQTdCO0FBQ0gsR0FIRCxDQXhDdUIsQ0E2Q3ZCOzs7QUFDQWpmLEdBQUMsQ0FBQ3llLEtBQUYsQ0FBUVMsa0JBQVIsR0FBNkIsVUFBVUQsU0FBVixFQUE2QjtBQUN0RCxRQUFJLE9BQU9BLFNBQVAsS0FBcUIsUUFBekIsRUFBbUM7QUFBRSxZQUFNLElBQUl6ZCxLQUFKLENBQVUsOENBQVYsQ0FBTjtBQUFrRTs7QUFDdkdpYyxZQUFRLENBQUNHLGlCQUFULEdBQTZCcUIsU0FBN0I7QUFDSCxHQUhELENBOUN1QixDQW1EdkI7OztBQUNBamYsR0FBQyxDQUFDeWUsS0FBRixDQUFRVSxlQUFSLEdBQTBCLFVBQVVDLFFBQVYsRUFBNEI7QUFDbEQsUUFBSSxPQUFPQSxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQUUsWUFBTSxJQUFJNWQsS0FBSixDQUFVLDZDQUFWLENBQU47QUFBaUU7O0FBQ3JHaWMsWUFBUSxDQUFDSyxhQUFULEdBQXlCc0IsUUFBekI7QUFDSCxHQUhELENBcER1QixDQXlEdkI7OztBQUNBcGYsR0FBQyxDQUFDeWUsS0FBRixDQUFRWSxtQkFBUixHQUE4QixVQUFVSixTQUFWLEVBQTZCO0FBQ3ZELFFBQUksT0FBT0EsU0FBUCxLQUFxQixRQUF6QixFQUFtQztBQUFFLFlBQU0sSUFBSXpkLEtBQUosQ0FBVSw4Q0FBVixDQUFOO0FBQWtFOztBQUN2R2ljLFlBQVEsQ0FBQ0ksaUJBQVQsR0FBNkJvQixTQUE3QjtBQUNILEdBSEQsQ0ExRHVCLENBK0R2Qjs7O0FBQ0FqZixHQUFDLENBQUN5ZSxLQUFGLENBQVFhLFdBQVIsR0FBc0IsVUFBVXBOLEtBQVYsRUFBeUI7QUFDM0MsUUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQUUsWUFBTSxJQUFJMVEsS0FBSixDQUFVLDJDQUFWLENBQU47QUFBK0Q7O0FBQ2hHaWMsWUFBUSxDQUFDQyxlQUFULEdBQTJCeEwsS0FBM0I7QUFDSCxHQUhELENBaEV1QixDQXFFdkI7OztBQUNBbFMsR0FBQyxDQUFDdWYsSUFBRixDQUFPLENBQUMsVUFBRCxFQUFhLFFBQWIsRUFBdUIsU0FBdkIsRUFBa0MsS0FBbEMsRUFBeUMsV0FBekMsRUFBc0QsV0FBdEQsRUFBbUUsU0FBbkUsRUFBOEUsT0FBOUUsRUFBdUYsU0FBdkYsRUFBa0csWUFBbEcsRUFBZ0gsV0FBaEgsRUFBNkgsV0FBN0gsRUFBMEksVUFBMUksRUFBc0osYUFBdEosRUFBcUssV0FBckssRUFBa0wsbUJBQWxMLEVBQXVNLE1BQXZNLEVBQStNLFVBQS9NLENBQVAsRUFBbU8sVUFBVXZjLENBQVYsRUFBcUJ0RCxJQUFyQixFQUFtQztBQUNsUU0sS0FBQyxDQUFDdEMsRUFBRixDQUFLZ0MsSUFBTCxJQUFhLFVBQVVoQyxFQUFWLEVBQW1CO0FBQzVCLGFBQU9BLEVBQUUsR0FBRyxLQUFLOEksRUFBTCxDQUFROUcsSUFBUixFQUFjaEMsRUFBZCxDQUFILEdBQXVCLEtBQUs4aEIsT0FBTCxDQUFhOWYsSUFBYixDQUFoQztBQUNILEtBRkQ7O0FBSUFNLEtBQUMsQ0FBQ3VkLE1BQUYsQ0FBUzdkLElBQVQsSUFBaUIsSUFBakI7QUFDSCxHQU5ELEVBdEV1QixDQThFdkI7O0FBQ0FNLEdBQUMsQ0FBQ2EsS0FBRixDQUFRNGUsT0FBUixDQUFnQkMsUUFBaEIsR0FBMkI7QUFDdkJDLFNBQUssRUFBRSxpQkFBWTtBQUVmLFVBQUlDLFVBQVUsR0FBRyxJQUFqQjtBQUFBLFVBQ0lDLEtBQUssR0FBRzdmLENBQUMsQ0FBQzRmLFVBQUQsQ0FEYjtBQUdBQyxXQUFLLENBQUNyWixFQUFOLENBQVNpWCxRQUFRLENBQUNTLFVBQWxCLEVBQThCLFNBQVM0QixZQUFULENBQXNCbkgsQ0FBdEIsRUFBOEI7QUFFeERrSCxhQUFLLENBQUMvZSxJQUFOLENBQVcsUUFBWCxFQUFxQmdmLFlBQXJCOztBQUNBLFlBQUluSCxDQUFDLENBQUNvSCxLQUFGLElBQVdwSCxDQUFDLENBQUNvSCxLQUFGLEtBQVksQ0FBM0IsRUFBOEI7QUFDMUIsaUJBQU8sS0FBUDtBQUNIOztBQUVELFlBQUlDLFNBQVMsR0FBR3JILENBQUMsQ0FBQ3NILGFBQWxCO0FBQUEsWUFDSUMsU0FBUyxHQUFHO0FBQ1Isc0JBQVk7QUFDUixpQkFBT3pDLFFBQVEsQ0FBQ08sYUFBVixHQUEyQmdDLFNBQVMsQ0FBQ0csT0FBVixDQUFrQixDQUFsQixFQUFxQkMsS0FBaEQsR0FBd0R6SCxDQUFDLENBQUN5SCxLQUR4RDtBQUVSLGlCQUFNM0MsUUFBUSxDQUFDTyxhQUFWLEdBQTJCZ0MsU0FBUyxDQUFDRyxPQUFWLENBQWtCLENBQWxCLEVBQXFCRSxLQUFoRCxHQUF3RDFILENBQUMsQ0FBQzBIO0FBRnZELFdBREo7QUFLUixvQkFBVTtBQUNOLGlCQUFNNUMsUUFBUSxDQUFDTyxhQUFWLEdBQTJCek0sSUFBSSxDQUFDK08sS0FBTCxDQUFXTixTQUFTLENBQUNPLGNBQVYsQ0FBeUIsQ0FBekIsRUFBNEJILEtBQTVCLElBQXFDUCxLQUFLLENBQUNXLE1BQU4sS0FBaUJYLEtBQUssQ0FBQ1csTUFBTixHQUFlQyxJQUFoQyxHQUF1QyxDQUE1RSxDQUFYLENBQTNCLEdBQXdIbFAsSUFBSSxDQUFDK08sS0FBTCxDQUFXM0gsQ0FBQyxDQUFDeUgsS0FBRixJQUFXUCxLQUFLLENBQUNXLE1BQU4sS0FBaUJYLEtBQUssQ0FBQ1csTUFBTixHQUFlQyxJQUFoQyxHQUF1QyxDQUFsRCxDQUFYLENBRHZIO0FBRU4saUJBQU1oRCxRQUFRLENBQUNPLGFBQVYsR0FBMkJ6TSxJQUFJLENBQUMrTyxLQUFMLENBQVdOLFNBQVMsQ0FBQ08sY0FBVixDQUF5QixDQUF6QixFQUE0QkYsS0FBNUIsSUFBcUNSLEtBQUssQ0FBQ1csTUFBTixLQUFpQlgsS0FBSyxDQUFDVyxNQUFOLEdBQWVFLEdBQWhDLEdBQXNDLENBQTNFLENBQVgsQ0FBM0IsR0FBdUhuUCxJQUFJLENBQUMrTyxLQUFMLENBQVczSCxDQUFDLENBQUMwSCxLQUFGLElBQVdSLEtBQUssQ0FBQ1csTUFBTixLQUFpQlgsS0FBSyxDQUFDVyxNQUFOLEdBQWVFLEdBQWhDLEdBQXNDLENBQWpELENBQVg7QUFGdEgsV0FMRjtBQVNSLGtCQUFRLGdGQVRBO0FBVVIsb0JBQVUvSCxDQUFDLENBQUMvUDtBQVZKLFNBRGhCO0FBY0ErWCwwQkFBa0IsQ0FBQ2YsVUFBRCxFQUFhLFVBQWIsRUFBeUJqSCxDQUF6QixFQUE0QnVILFNBQTVCLENBQWxCO0FBQ0EsZUFBTyxJQUFQO0FBQ0gsT0F2QkQ7QUF3QkgsS0E5QnNCO0FBZ0N2QlUsVUFBTSxFQUFFLGtCQUFZO0FBQ2hCNWdCLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFHLEdBQVIsQ0FBWW9YLFFBQVEsQ0FBQ1MsVUFBckIsRUFBaUNsZSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFjLElBQVIsQ0FBYStmLE1BQTlDO0FBQ0g7QUFsQ3NCLEdBQTNCLENBL0V1QixDQW9IdkI7O0FBQ0E3Z0IsR0FBQyxDQUFDYSxLQUFGLENBQVE0ZSxPQUFSLENBQWdCcUIsT0FBaEIsR0FBMEI7QUFDdEJuQixTQUFLLEVBQUUsaUJBQVk7QUFDZixVQUFJQyxVQUFVLEdBQUcsSUFBakI7QUFBQSxVQUNJQyxLQUFLLEdBQUc3ZixDQUFDLENBQUM0ZixVQUFELENBRGI7QUFHQUMsV0FBSyxDQUFDclosRUFBTixDQUFTaVgsUUFBUSxDQUFDVyxTQUFsQixFQUE2QixTQUFTMkMsV0FBVCxDQUFxQnBJLENBQXJCLEVBQTZCO0FBQ3REa0gsYUFBSyxDQUFDL2UsSUFBTixDQUFXLFFBQVgsRUFBcUJpZ0IsV0FBckI7QUFFQSxZQUFJZixTQUFTLEdBQUdySCxDQUFDLENBQUNzSCxhQUFsQjtBQUFBLFlBQ0lDLFNBQVMsR0FBRztBQUNSLHNCQUFZO0FBQ1IsaUJBQU96QyxRQUFRLENBQUNPLGFBQVYsR0FBMkJnQyxTQUFTLENBQUNHLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUJDLEtBQWhELEdBQXdEekgsQ0FBQyxDQUFDeUgsS0FEeEQ7QUFFUixpQkFBTTNDLFFBQVEsQ0FBQ08sYUFBVixHQUEyQmdDLFNBQVMsQ0FBQ0csT0FBVixDQUFrQixDQUFsQixFQUFxQkUsS0FBaEQsR0FBd0QxSCxDQUFDLENBQUMwSDtBQUZ2RCxXQURKO0FBS1Isb0JBQVU7QUFDTixpQkFBTTVDLFFBQVEsQ0FBQ08sYUFBVixHQUEyQnpNLElBQUksQ0FBQytPLEtBQUwsQ0FBV04sU0FBUyxDQUFDTyxjQUFWLENBQXlCLENBQXpCLEVBQTRCSCxLQUE1QixJQUFxQ1AsS0FBSyxDQUFDVyxNQUFOLEtBQWlCWCxLQUFLLENBQUNXLE1BQU4sR0FBZUMsSUFBaEMsR0FBdUMsQ0FBNUUsQ0FBWCxDQUEzQixHQUF3SGxQLElBQUksQ0FBQytPLEtBQUwsQ0FBVzNILENBQUMsQ0FBQ3lILEtBQUYsSUFBV1AsS0FBSyxDQUFDVyxNQUFOLEtBQWlCWCxLQUFLLENBQUNXLE1BQU4sR0FBZUMsSUFBaEMsR0FBdUMsQ0FBbEQsQ0FBWCxDQUR2SDtBQUVOLGlCQUFNaEQsUUFBUSxDQUFDTyxhQUFWLEdBQTJCek0sSUFBSSxDQUFDK08sS0FBTCxDQUFXTixTQUFTLENBQUNPLGNBQVYsQ0FBeUIsQ0FBekIsRUFBNEJGLEtBQTVCLElBQXFDUixLQUFLLENBQUNXLE1BQU4sS0FBaUJYLEtBQUssQ0FBQ1csTUFBTixHQUFlRSxHQUFoQyxHQUFzQyxDQUEzRSxDQUFYLENBQTNCLEdBQXVIblAsSUFBSSxDQUFDK08sS0FBTCxDQUFXM0gsQ0FBQyxDQUFDMEgsS0FBRixJQUFXUixLQUFLLENBQUNXLE1BQU4sS0FBaUJYLEtBQUssQ0FBQ1csTUFBTixHQUFlRSxHQUFoQyxHQUFzQyxDQUFqRCxDQUFYO0FBRnRILFdBTEY7QUFTUixrQkFBUSxnRkFUQTtBQVVSLG9CQUFVL0gsQ0FBQyxDQUFDL1A7QUFWSixTQURoQjtBQWNBK1gsMEJBQWtCLENBQUNmLFVBQUQsRUFBYSxTQUFiLEVBQXdCakgsQ0FBeEIsRUFBMkJ1SCxTQUEzQixDQUFsQjtBQUNBLGVBQU8sSUFBUDtBQUNILE9BbkJEO0FBb0JILEtBekJxQjtBQTBCdEJVLFVBQU0sRUFBRSxrQkFBWTtBQUNoQjVnQixPQUFDLENBQUMsSUFBRCxDQUFELENBQVFxRyxHQUFSLENBQVlvWCxRQUFRLENBQUNXLFNBQXJCLEVBQWdDcGUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYyxJQUFSLENBQWErZixNQUE3QztBQUNIO0FBNUJxQixHQUExQixDQXJIdUIsQ0FvSnZCOztBQUNBN2dCLEdBQUMsQ0FBQ2EsS0FBRixDQUFRNGUsT0FBUixDQUFnQnVCLE1BQWhCLEdBQXlCO0FBQ3JCckIsU0FBSyxFQUFFLGlCQUFZO0FBQ2YsVUFBSUMsVUFBVSxHQUFHLElBQWpCO0FBQUEsVUFDSUMsS0FBSyxHQUFHN2YsQ0FBQyxDQUFDNGYsVUFBRCxDQURiO0FBR0FDLFdBQUssQ0FBQ3JaLEVBQU4sQ0FBU2lYLFFBQVEsQ0FBQ1UsUUFBbEIsRUFBNEIsU0FBUzhDLFVBQVQsQ0FBb0J0SSxDQUFwQixFQUE0QjtBQUNwRDtBQUNBa0gsYUFBSyxDQUFDL2UsSUFBTixDQUFXLFFBQVgsRUFBcUJtZ0IsVUFBckI7QUFFQSxZQUFJakIsU0FBUyxHQUFHckgsQ0FBQyxDQUFDc0gsYUFBbEI7QUFDQSxZQUFJQyxTQUFTLEdBQUc7QUFDWixzQkFBWTtBQUNSLGlCQUFNekMsUUFBUSxDQUFDTyxhQUFWLEdBQTJCZ0MsU0FBUyxDQUFDTyxjQUFWLENBQXlCLENBQXpCLEVBQTRCSCxLQUF2RCxHQUErRHpILENBQUMsQ0FBQ3lILEtBRDlEO0FBRVIsaUJBQU0zQyxRQUFRLENBQUNPLGFBQVYsR0FBMkJnQyxTQUFTLENBQUNPLGNBQVYsQ0FBeUIsQ0FBekIsRUFBNEJGLEtBQXZELEdBQStEMUgsQ0FBQyxDQUFDMEg7QUFGOUQsV0FEQTtBQUtaLG9CQUFVO0FBQ04saUJBQU01QyxRQUFRLENBQUNPLGFBQVYsR0FBMkJ6TSxJQUFJLENBQUMrTyxLQUFMLENBQVdOLFNBQVMsQ0FBQ08sY0FBVixDQUF5QixDQUF6QixFQUE0QkgsS0FBNUIsSUFBcUNQLEtBQUssQ0FBQ1csTUFBTixLQUFpQlgsS0FBSyxDQUFDVyxNQUFOLEdBQWVDLElBQWhDLEdBQXVDLENBQTVFLENBQVgsQ0FBM0IsR0FBd0hsUCxJQUFJLENBQUMrTyxLQUFMLENBQVczSCxDQUFDLENBQUN5SCxLQUFGLElBQVdQLEtBQUssQ0FBQ1csTUFBTixLQUFpQlgsS0FBSyxDQUFDVyxNQUFOLEdBQWVDLElBQWhDLEdBQXVDLENBQWxELENBQVgsQ0FEdkg7QUFFTixpQkFBTWhELFFBQVEsQ0FBQ08sYUFBVixHQUEyQnpNLElBQUksQ0FBQytPLEtBQUwsQ0FBV04sU0FBUyxDQUFDTyxjQUFWLENBQXlCLENBQXpCLEVBQTRCRixLQUE1QixJQUFxQ1IsS0FBSyxDQUFDVyxNQUFOLEtBQWlCWCxLQUFLLENBQUNXLE1BQU4sR0FBZUUsR0FBaEMsR0FBc0MsQ0FBM0UsQ0FBWCxDQUEzQixHQUF1SG5QLElBQUksQ0FBQytPLEtBQUwsQ0FBVzNILENBQUMsQ0FBQzBILEtBQUYsSUFBV1IsS0FBSyxDQUFDVyxNQUFOLEtBQWlCWCxLQUFLLENBQUNXLE1BQU4sR0FBZUUsR0FBaEMsR0FBc0MsQ0FBakQsQ0FBWDtBQUZ0SCxXQUxFO0FBU1osa0JBQVEsZ0ZBVEk7QUFVWixvQkFBVS9ILENBQUMsQ0FBQy9QO0FBVkEsU0FBaEI7QUFZQStYLDBCQUFrQixDQUFDZixVQUFELEVBQWEsUUFBYixFQUF1QmpILENBQXZCLEVBQTBCdUgsU0FBMUIsQ0FBbEI7QUFDQSxlQUFPLElBQVA7QUFDSCxPQW5CRDtBQW9CSCxLQXpCb0I7QUEwQnJCVSxVQUFNLEVBQUUsa0JBQVk7QUFDaEI1Z0IsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUcsR0FBUixDQUFZb1gsUUFBUSxDQUFDVSxRQUFyQixFQUErQm5lLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsSUFBUixDQUFhK2YsTUFBNUM7QUFDSDtBQTVCb0IsR0FBekIsQ0FySnVCLENBb0x2Qjs7QUFDQTdnQixHQUFDLENBQUNhLEtBQUYsQ0FBUTRlLE9BQVIsQ0FBZ0J5QixPQUFoQixHQUEwQjtBQUN0QnZCLFNBQUssRUFBRSxpQkFBWTtBQUNmLFVBQUlDLFVBQVUsR0FBRyxJQUFqQjtBQUFBLFVBQ0lDLEtBQUssR0FBRzdmLENBQUMsQ0FBQzRmLFVBQUQsQ0FEYjtBQUFBLFVBRUl1QixVQUZKO0FBQUEsVUFHSUMsU0FBUyxHQUFHO0FBQ1JDLFNBQUMsRUFBRSxDQURLO0FBRVJDLFNBQUMsRUFBRTtBQUZLLE9BSGhCO0FBQUEsVUFPSUMsS0FBSyxHQUFHLENBUFo7QUFBQSxVQVFJQyxLQUFLLEdBQUcsQ0FSWjtBQVVBM0IsV0FBSyxDQUFDclosRUFBTixDQUFTaVgsUUFBUSxDQUFDUyxVQUFsQixFQUE4QixTQUFTdUQsWUFBVCxDQUFzQjlJLENBQXRCLEVBQThCO0FBQ3hELFlBQUlBLENBQUMsQ0FBQ29ILEtBQUYsSUFBV3BILENBQUMsQ0FBQ29ILEtBQUYsS0FBWSxDQUEzQixFQUE4QjtBQUMxQixpQkFBTyxLQUFQO0FBQ0gsU0FGRCxNQUVPO0FBQ0hGLGVBQUssQ0FBQy9lLElBQU4sQ0FBVyxTQUFYLEVBQXNCLEtBQXRCO0FBQ0FxZ0Isb0JBQVUsR0FBR3hJLENBQUMsQ0FBQy9QLE1BQWY7QUFFQSxjQUFJb1gsU0FBUyxHQUFHckgsQ0FBQyxDQUFDc0gsYUFBbEI7O0FBQ0EsY0FBSXlCLFVBQVUsR0FBRyxnRkFBakI7O0FBQ0FOLG1CQUFTLENBQUNDLENBQVYsR0FBZTFJLENBQUMsQ0FBQ3NILGFBQUYsQ0FBZ0IwQixhQUFqQixHQUFrQ2hKLENBQUMsQ0FBQ3NILGFBQUYsQ0FBZ0IwQixhQUFoQixDQUE4QixDQUE5QixFQUFpQ3ZCLEtBQW5FLEdBQTJFekgsQ0FBQyxDQUFDeUgsS0FBM0Y7QUFDQWdCLG1CQUFTLENBQUNFLENBQVYsR0FBZTNJLENBQUMsQ0FBQ3NILGFBQUYsQ0FBZ0IwQixhQUFqQixHQUFrQ2hKLENBQUMsQ0FBQ3NILGFBQUYsQ0FBZ0IwQixhQUFoQixDQUE4QixDQUE5QixFQUFpQ3RCLEtBQW5FLEdBQTJFMUgsQ0FBQyxDQUFDMEgsS0FBM0Y7QUFFQWtCLGVBQUssR0FBR0gsU0FBUyxDQUFDQyxDQUFsQjtBQUNBRyxlQUFLLEdBQUdKLFNBQVMsQ0FBQ0UsQ0FBbEIsQ0FWRyxDQVlIOztBQUNBLGNBQUlNLGFBQWEsR0FBSS9CLEtBQUssQ0FBQ2dDLE1BQU4sR0FBZS9nQixJQUFmLENBQW9CLFdBQXBCLENBQUQsR0FBcUMrZSxLQUFLLENBQUNnQyxNQUFOLEdBQWUvZ0IsSUFBZixDQUFvQixXQUFwQixDQUFyQyxHQUF3RStlLEtBQUssQ0FBQy9lLElBQU4sQ0FBVyxXQUFYLENBQTVGO0FBQUEsY0FDSW1lLFNBQVMsR0FBSSxPQUFPMkMsYUFBUCxLQUF5QixXQUF6QixJQUF3Q0EsYUFBYSxLQUFLLEtBQTFELElBQW1FLGdGQUFTQSxhQUFULENBQXBFLEdBQStGLGdGQUFTQSxhQUFULENBQS9GLEdBQXlIbkUsUUFBUSxDQUFDSSxpQkFEbEo7QUFHQUosa0JBQVEsQ0FBQ2MsVUFBVCxHQUFzQmhULE1BQU0sQ0FBQ3VXLFVBQVAsQ0FBa0IsWUFBWTtBQUVoRCxnQkFBSUMsTUFBTSxHQUFJWCxTQUFTLENBQUNDLENBQVYsR0FBY0UsS0FBNUI7QUFBQSxnQkFDSVMsTUFBTSxHQUFJWixTQUFTLENBQUNFLENBQVYsR0FBY0UsS0FENUI7O0FBR0EsZ0JBQUk3SSxDQUFDLENBQUMvUCxNQUFGLElBQVl1WSxVQUFaLEtBQTRCQyxTQUFTLENBQUNDLENBQVYsSUFBZUUsS0FBZixJQUF3QkgsU0FBUyxDQUFDRSxDQUFWLElBQWVFLEtBQXhDLElBQW1ETyxNQUFNLElBQUksQ0FBRXRFLFFBQVEsQ0FBQ0MsZUFBckIsSUFBeUNxRSxNQUFNLElBQUl0RSxRQUFRLENBQUNDLGVBQTVELElBQStFc0UsTUFBTSxJQUFJLENBQUV2RSxRQUFRLENBQUNDLGVBQXBHLElBQXdIc0UsTUFBTSxJQUFJdkUsUUFBUSxDQUFDQyxlQUF6TixDQUFKLEVBQWdQO0FBQzVPbUMsbUJBQUssQ0FBQy9lLElBQU4sQ0FBVyxTQUFYLEVBQXNCLElBQXRCOztBQUVBLGtCQUFJbWhCLFFBQVEsR0FBRyxnRkFBZjs7QUFFQSxrQkFBSUMsUUFBUSxHQUFHRCxRQUFRLEdBQUdQLFVBQTFCO0FBQUEsa0JBQ0l2QixPQUFPLEdBQUl4SCxDQUFDLENBQUNzSCxhQUFGLENBQWdCMEIsYUFBakIsR0FBa0NoSixDQUFDLENBQUNzSCxhQUFGLENBQWdCMEIsYUFBbEQsR0FBa0UsQ0FBQ2hKLENBQUQsQ0FEaEY7QUFBQSxrQkFFSXVILFNBQVMsR0FBRyxFQUZoQjs7QUFJQSxtQkFBSyxJQUFJbGQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR21kLE9BQU8sQ0FBQzNpQixNQUE1QixFQUFvQ3dGLENBQUMsRUFBckMsRUFBeUM7QUFDckMsb0JBQUl5YixLQUFLLEdBQUc7QUFDUiw4QkFBWTtBQUNSLHlCQUFNaEIsUUFBUSxDQUFDTyxhQUFWLEdBQTJCZ0MsU0FBUyxDQUFDTyxjQUFWLENBQXlCdmQsQ0FBekIsRUFBNEJvZCxLQUF2RCxHQUErRHpILENBQUMsQ0FBQ3lILEtBRDlEO0FBRVIseUJBQU0zQyxRQUFRLENBQUNPLGFBQVYsR0FBMkJnQyxTQUFTLENBQUNPLGNBQVYsQ0FBeUJ2ZCxDQUF6QixFQUE0QnFkLEtBQXZELEdBQStEMUgsQ0FBQyxDQUFDMEg7QUFGOUQsbUJBREo7QUFLUiw0QkFBVTtBQUNOLHlCQUFNNUMsUUFBUSxDQUFDTyxhQUFWLEdBQTJCek0sSUFBSSxDQUFDK08sS0FBTCxDQUFXTixTQUFTLENBQUNPLGNBQVYsQ0FBeUJ2ZCxDQUF6QixFQUE0Qm9kLEtBQTVCLElBQXFDUCxLQUFLLENBQUNXLE1BQU4sS0FBaUJYLEtBQUssQ0FBQ1csTUFBTixHQUFlQyxJQUFoQyxHQUF1QyxDQUE1RSxDQUFYLENBQTNCLEdBQXdIbFAsSUFBSSxDQUFDK08sS0FBTCxDQUFXM0gsQ0FBQyxDQUFDeUgsS0FBRixJQUFXUCxLQUFLLENBQUNXLE1BQU4sS0FBaUJYLEtBQUssQ0FBQ1csTUFBTixHQUFlQyxJQUFoQyxHQUF1QyxDQUFsRCxDQUFYLENBRHZIO0FBRU4seUJBQU1oRCxRQUFRLENBQUNPLGFBQVYsR0FBMkJ6TSxJQUFJLENBQUMrTyxLQUFMLENBQVdOLFNBQVMsQ0FBQ08sY0FBVixDQUF5QnZkLENBQXpCLEVBQTRCcWQsS0FBNUIsSUFBcUNSLEtBQUssQ0FBQ1csTUFBTixLQUFpQlgsS0FBSyxDQUFDVyxNQUFOLEdBQWVFLEdBQWhDLEdBQXNDLENBQTNFLENBQVgsQ0FBM0IsR0FBdUhuUCxJQUFJLENBQUMrTyxLQUFMLENBQVczSCxDQUFDLENBQUMwSCxLQUFGLElBQVdSLEtBQUssQ0FBQ1csTUFBTixLQUFpQlgsS0FBSyxDQUFDVyxNQUFOLEdBQWVFLEdBQWhDLEdBQXNDLENBQWpELENBQVg7QUFGdEgsbUJBTEY7QUFTUiwwQkFBUSxnRkFUQTtBQVVSLDRCQUFVL0gsQ0FBQyxDQUFDL1AsTUFWSjtBQVdSLDhCQUFZc1o7QUFYSixpQkFBWjtBQWNBaEMseUJBQVMsQ0FBQ3hoQixJQUFWLENBQWUrZixLQUFmO0FBQ0g7O0FBRUQsa0JBQUkwRCxRQUFRLEdBQUloQyxPQUFPLENBQUMzaUIsTUFBUixJQUFrQixDQUFuQixHQUF3QixVQUF4QixHQUFxQyxTQUFwRDtBQUVBcWlCLG1CQUFLLENBQUMvZSxJQUFOLENBQVcsU0FBWCxFQUFzQjJnQixZQUF0QjtBQUVBZCxnQ0FBa0IsQ0FBQ2YsVUFBRCxFQUFhdUMsUUFBYixFQUF1QnhKLENBQXZCLEVBQTBCdUgsU0FBMUIsQ0FBbEI7QUFDSDtBQUNKLFdBdENxQixFQXNDbkJqQixTQXRDbUIsQ0FBdEI7QUF3Q0EsaUJBQU8sSUFBUDtBQUNIO0FBQ0osT0E3REQsRUE2REd6WSxFQTdESCxDQTZETWlYLFFBQVEsQ0FBQ1UsUUE3RGYsRUE2RHlCLFNBQVNpRSxZQUFULEdBQXdCO0FBQzdDdkMsYUFBSyxDQUFDL2UsSUFBTixDQUFXLFNBQVgsRUFBc0JzaEIsWUFBdEI7QUFDQXZDLGFBQUssQ0FBQy9lLElBQU4sQ0FBVyxTQUFYLEVBQXNCLEtBQXRCO0FBQ0F5SyxjQUFNLENBQUM4VyxZQUFQLENBQW9CNUUsUUFBUSxDQUFDYyxVQUE3QjtBQUNILE9BakVELEVBa0VLL1gsRUFsRUwsQ0FrRVFpWCxRQUFRLENBQUNXLFNBbEVqQixFQWtFNEIsU0FBU2tFLFlBQVQsQ0FBc0IzSixDQUF0QixFQUE4QjtBQUNsRGtILGFBQUssQ0FBQy9lLElBQU4sQ0FBVyxTQUFYLEVBQXNCd2hCLFlBQXRCO0FBRUFmLGFBQUssR0FBSTVJLENBQUMsQ0FBQ3NILGFBQUYsQ0FBZ0IwQixhQUFqQixHQUFrQ2hKLENBQUMsQ0FBQ3NILGFBQUYsQ0FBZ0IwQixhQUFoQixDQUE4QixDQUE5QixFQUFpQ3ZCLEtBQW5FLEdBQTJFekgsQ0FBQyxDQUFDeUgsS0FBckY7QUFDQW9CLGFBQUssR0FBSTdJLENBQUMsQ0FBQ3NILGFBQUYsQ0FBZ0IwQixhQUFqQixHQUFrQ2hKLENBQUMsQ0FBQ3NILGFBQUYsQ0FBZ0IwQixhQUFoQixDQUE4QixDQUE5QixFQUFpQ3RCLEtBQW5FLEdBQTJFMUgsQ0FBQyxDQUFDMEgsS0FBckY7QUFDSCxPQXZFTDtBQXdFSCxLQXBGcUI7QUFzRnRCTyxVQUFNLEVBQUUsa0JBQVk7QUFDaEI1Z0IsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUcsR0FBUixDQUFZb1gsUUFBUSxDQUFDUyxVQUFyQixFQUFpQ2xlLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsSUFBUixDQUFheWhCLE9BQTlDLEVBQXVEbGMsR0FBdkQsQ0FBMkRvWCxRQUFRLENBQUNVLFFBQXBFLEVBQThFbmUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYyxJQUFSLENBQWEwaEIsT0FBM0YsRUFBb0duYyxHQUFwRyxDQUF3R29YLFFBQVEsQ0FBQ1csU0FBakgsRUFBNEhwZSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFjLElBQVIsQ0FBYTJoQixPQUF6STtBQUNIO0FBeEZxQixHQUExQixDQXJMdUIsQ0FnUnZCOztBQUNBemlCLEdBQUMsQ0FBQ2EsS0FBRixDQUFRNGUsT0FBUixDQUFnQmlELFNBQWhCLEdBQTRCO0FBQ3hCL0MsU0FBSyxFQUFFLGlCQUFZO0FBQ2YsVUFBSUMsVUFBVSxHQUFHLElBQWpCO0FBQUEsVUFDSUMsS0FBSyxHQUFHN2YsQ0FBQyxDQUFDNGYsVUFBRCxDQURiO0FBQUEsVUFFSStDLE1BRko7QUFBQSxVQUdJQyxRQUFhLEdBQUcsSUFIcEI7QUFBQSxVQUlJNUMsU0FKSjtBQUFBLFVBS0k2QyxPQUFPLEdBQUcsS0FMZDtBQU9BaEQsV0FBSyxDQUFDclosRUFBTixDQUFTaVgsUUFBUSxDQUFDUyxVQUFsQixFQUE4QixTQUFTNEUsY0FBVCxDQUF3Qm5LLENBQXhCLEVBQWdDO0FBQzFELFlBQUlBLENBQUMsQ0FBQ29ILEtBQUYsSUFBV3BILENBQUMsQ0FBQ29ILEtBQUYsS0FBWSxDQUEzQixFQUE4QjtBQUMxQixpQkFBTyxLQUFQO0FBQ0g7O0FBRURGLGFBQUssQ0FBQy9lLElBQU4sQ0FBVyxjQUFYLEVBQTJCLEtBQTNCO0FBQ0ErZSxhQUFLLENBQUMvZSxJQUFOLENBQVcsU0FBWCxFQUFzQmdpQixjQUF0QjtBQUVBOUMsaUJBQVMsR0FBR3JILENBQUMsQ0FBQ3NILGFBQWQ7O0FBQ0EsWUFBSSxDQUFDMkMsUUFBTCxFQUFlO0FBQ1hBLGtCQUFRLEdBQUc7QUFDUCx3QkFBWTtBQUNSLG1CQUFNbkYsUUFBUSxDQUFDTyxhQUFWLEdBQTJCZ0MsU0FBUyxDQUFDRyxPQUFWLENBQWtCLENBQWxCLEVBQXFCQyxLQUFoRCxHQUF3RHpILENBQUMsQ0FBQ3lILEtBRHZEO0FBRVIsbUJBQU0zQyxRQUFRLENBQUNPLGFBQVYsR0FBMkJnQyxTQUFTLENBQUNHLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUJFLEtBQWhELEdBQXdEMUgsQ0FBQyxDQUFDMEg7QUFGdkQsYUFETDtBQUtQLHNCQUFVO0FBQ04sbUJBQU01QyxRQUFRLENBQUNPLGFBQVYsR0FBMkJ6TSxJQUFJLENBQUMrTyxLQUFMLENBQVdOLFNBQVMsQ0FBQ08sY0FBVixDQUF5QixDQUF6QixFQUE0QkgsS0FBNUIsSUFBcUNQLEtBQUssQ0FBQ1csTUFBTixLQUFpQlgsS0FBSyxDQUFDVyxNQUFOLEdBQWVDLElBQWhDLEdBQXVDLENBQTVFLENBQVgsQ0FBM0IsR0FBd0hsUCxJQUFJLENBQUMrTyxLQUFMLENBQVczSCxDQUFDLENBQUN5SCxLQUFGLElBQVdQLEtBQUssQ0FBQ1csTUFBTixLQUFpQlgsS0FBSyxDQUFDVyxNQUFOLEdBQWVDLElBQWhDLEdBQXVDLENBQWxELENBQVgsQ0FEdkg7QUFFTixtQkFBTWhELFFBQVEsQ0FBQ08sYUFBVixHQUEyQnpNLElBQUksQ0FBQytPLEtBQUwsQ0FBV04sU0FBUyxDQUFDTyxjQUFWLENBQXlCLENBQXpCLEVBQTRCRixLQUE1QixJQUFxQ1IsS0FBSyxDQUFDVyxNQUFOLEtBQWlCWCxLQUFLLENBQUNXLE1BQU4sR0FBZUUsR0FBaEMsR0FBc0MsQ0FBM0UsQ0FBWCxDQUEzQixHQUF1SG5QLElBQUksQ0FBQytPLEtBQUwsQ0FBVzNILENBQUMsQ0FBQzBILEtBQUYsSUFBV1IsS0FBSyxDQUFDVyxNQUFOLEtBQWlCWCxLQUFLLENBQUNXLE1BQU4sR0FBZUUsR0FBaEMsR0FBc0MsQ0FBakQsQ0FBWDtBQUZ0SCxhQUxIO0FBU1Asb0JBQVEsZ0ZBVEQ7QUFVUCxzQkFBVS9ILENBQUMsQ0FBQy9QLE1BVkw7QUFXUCx1QkFBVytQLENBQUMsQ0FBQ3NILGFBQUYsQ0FBZ0I4QyxVQVhwQjtBQVlQLHFCQUFTL2lCLENBQUMsQ0FBQzJZLENBQUMsQ0FBQy9QLE1BQUgsQ0FBRCxDQUFZeEUsS0FBWjtBQVpGLFdBQVg7QUFjSDs7QUFFRCxlQUFPLElBQVA7QUFDSCxPQTNCRCxFQTJCR29DLEVBM0JILENBMkJNaVgsUUFBUSxDQUFDVSxRQTNCZixFQTJCeUIsU0FBUzZFLGNBQVQsQ0FBd0JySyxDQUF4QixFQUFnQztBQUVyRCxZQUFJc0ssR0FBRyxHQUFHLGdGQUFWOztBQUNBLFlBQUlDLFNBQVMsR0FBR3JELEtBQUssQ0FBQy9lLElBQU4sQ0FBVyxXQUFYLEtBQTJCbWlCLEdBQUcsR0FBRyxDQUFqRDtBQUNBLFlBQUlFLEtBQUssR0FBR0YsR0FBRyxHQUFHQyxTQUFsQjtBQUNBM1gsY0FBTSxDQUFDOFcsWUFBUCxDQUFvQk0sTUFBcEI7QUFDQTlDLGFBQUssQ0FBQy9lLElBQU4sQ0FBVyxTQUFYLEVBQXNCa2lCLGNBQXRCOztBQUVBLFlBQUlHLEtBQUssR0FBRzFGLFFBQVEsQ0FBQ0ssYUFBakIsSUFBbUM5ZCxDQUFDLENBQUMyWSxDQUFDLENBQUMvUCxNQUFILENBQUQsQ0FBWXhFLEtBQVosTUFBdUJ3ZSxRQUFRLENBQUN4ZSxLQUFuRSxJQUE2RStlLEtBQUssR0FBRyxHQUF6RixFQUE4RjtBQUMxRnRELGVBQUssQ0FBQy9lLElBQU4sQ0FBVyxjQUFYLEVBQTJCLElBQTNCO0FBQ0F5SyxnQkFBTSxDQUFDOFcsWUFBUCxDQUFvQjVFLFFBQVEsQ0FBQ2UsU0FBN0IsRUFGMEYsQ0FJMUY7O0FBQ0EsY0FBSTRFLE9BQU8sR0FBRztBQUNWLHdCQUFZO0FBQ1IsbUJBQU0zRixRQUFRLENBQUNPLGFBQVYsR0FBMkJyRixDQUFDLENBQUNzSCxhQUFGLENBQWdCTSxjQUFoQixDQUErQixDQUEvQixFQUFrQ0gsS0FBN0QsR0FBcUV6SCxDQUFDLENBQUN5SCxLQURwRTtBQUVSLG1CQUFNM0MsUUFBUSxDQUFDTyxhQUFWLEdBQTJCckYsQ0FBQyxDQUFDc0gsYUFBRixDQUFnQk0sY0FBaEIsQ0FBK0IsQ0FBL0IsRUFBa0NGLEtBQTdELEdBQXFFMUgsQ0FBQyxDQUFDMEg7QUFGcEUsYUFERjtBQUtWLHNCQUFVO0FBQ04sbUJBQU01QyxRQUFRLENBQUNPLGFBQVYsR0FBMkJ6TSxJQUFJLENBQUMrTyxLQUFMLENBQVdOLFNBQVMsQ0FBQ08sY0FBVixDQUF5QixDQUF6QixFQUE0QkgsS0FBNUIsSUFBcUNQLEtBQUssQ0FBQ1csTUFBTixLQUFpQlgsS0FBSyxDQUFDVyxNQUFOLEdBQWVDLElBQWhDLEdBQXVDLENBQTVFLENBQVgsQ0FBM0IsR0FBd0hsUCxJQUFJLENBQUMrTyxLQUFMLENBQVczSCxDQUFDLENBQUN5SCxLQUFGLElBQVdQLEtBQUssQ0FBQ1csTUFBTixLQUFpQlgsS0FBSyxDQUFDVyxNQUFOLEdBQWVDLElBQWhDLEdBQXVDLENBQWxELENBQVgsQ0FEdkg7QUFFTixtQkFBTWhELFFBQVEsQ0FBQ08sYUFBVixHQUEyQnpNLElBQUksQ0FBQytPLEtBQUwsQ0FBV04sU0FBUyxDQUFDTyxjQUFWLENBQXlCLENBQXpCLEVBQTRCRixLQUE1QixJQUFxQ1IsS0FBSyxDQUFDVyxNQUFOLEtBQWlCWCxLQUFLLENBQUNXLE1BQU4sR0FBZUUsR0FBaEMsR0FBc0MsQ0FBM0UsQ0FBWCxDQUEzQixHQUF1SG5QLElBQUksQ0FBQytPLEtBQUwsQ0FBVzNILENBQUMsQ0FBQzBILEtBQUYsSUFBV1IsS0FBSyxDQUFDVyxNQUFOLEtBQWlCWCxLQUFLLENBQUNXLE1BQU4sR0FBZUUsR0FBaEMsR0FBc0MsQ0FBakQsQ0FBWDtBQUZ0SCxhQUxBO0FBU1Ysb0JBQVEsZ0ZBVEU7QUFVVixzQkFBVS9ILENBQUMsQ0FBQy9QLE1BVkY7QUFXVix1QkFBVytQLENBQUMsQ0FBQ3NILGFBQUYsQ0FBZ0I4QyxVQVhqQjtBQVlWLHFCQUFTL2lCLENBQUMsQ0FBQzJZLENBQUMsQ0FBQy9QLE1BQUgsQ0FBRCxDQUFZeEUsS0FBWjtBQVpDLFdBQWQ7QUFlQSxjQUFJOGIsU0FBUyxHQUFHO0FBQ1osd0JBQVkwQyxRQURBO0FBRVoseUJBQWFRLE9BRkQ7QUFHWix3QkFBWUEsT0FBTyxDQUFDQyxJQUFSLEdBQWVULFFBQVEsQ0FBQ1M7QUFIeEIsV0FBaEI7O0FBTUEsY0FBSSxDQUFDUixPQUFMLEVBQWM7QUFDVmxDLDhCQUFrQixDQUFDZixVQUFELEVBQWEsV0FBYixFQUEwQmpILENBQTFCLEVBQTZCdUgsU0FBN0IsQ0FBbEI7QUFDQTBDLG9CQUFRLEdBQUcsSUFBWDtBQUNIOztBQUVEQyxpQkFBTyxHQUFHLElBQVY7QUFDSCxTQWhDRCxNQWdDTztBQUNIaEQsZUFBSyxDQUFDL2UsSUFBTixDQUFXLFdBQVgsRUFBd0JtaUIsR0FBeEI7QUFDQU4sZ0JBQU0sR0FBR3BYLE1BQU0sQ0FBQ3VXLFVBQVAsQ0FBa0IsWUFBWTtBQUNuQ2Msb0JBQVEsR0FBRyxJQUFYO0FBQ0FyWCxrQkFBTSxDQUFDOFcsWUFBUCxDQUFvQk0sTUFBcEI7QUFDSCxXQUhRLEVBR05sRixRQUFRLENBQUNLLGFBSEgsRUFHa0IsQ0FBQ25GLENBQUQsQ0FIbEIsQ0FBVDtBQUlIOztBQUNEa0gsYUFBSyxDQUFDL2UsSUFBTixDQUFXLFdBQVgsRUFBd0JtaUIsR0FBeEI7QUFDSCxPQTNFRDtBQTRFSCxLQXJGdUI7QUFzRnhCckMsVUFBTSxFQUFFLGtCQUFZO0FBQ2hCNWdCLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFHLEdBQVIsQ0FBWW9YLFFBQVEsQ0FBQ1MsVUFBckIsRUFBaUNsZSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFjLElBQVIsQ0FBYXloQixPQUE5QyxFQUF1RGxjLEdBQXZELENBQTJEb1gsUUFBUSxDQUFDVSxRQUFwRSxFQUE4RW5lLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsSUFBUixDQUFhMGhCLE9BQTNGO0FBQ0g7QUF4RnVCLEdBQTVCLENBalJ1QixDQTRXdkI7QUFDQTs7QUFDQXhpQixHQUFDLENBQUNhLEtBQUYsQ0FBUTRlLE9BQVIsQ0FBZ0I2RCxTQUFoQixHQUE0QjtBQUN4QjNELFNBQUssRUFBRSxpQkFBWTtBQUNmLFVBQUlDLFVBQVUsR0FBRyxJQUFqQjtBQUFBLFVBQ0lDLEtBQUssR0FBRzdmLENBQUMsQ0FBQzRmLFVBQUQsQ0FEYjtBQUFBLFVBRUl1QixVQUFlLEdBQUcsSUFGdEI7QUFBQSxVQUdJb0MsU0FBYyxHQUFHLElBSHJCO0FBQUEsVUFJSW5DLFNBQVMsR0FBRztBQUNSQyxTQUFDLEVBQUUsQ0FESztBQUVSQyxTQUFDLEVBQUU7QUFGSyxPQUpoQjtBQVNBekIsV0FBSyxDQUFDclosRUFBTixDQUFTaVgsUUFBUSxDQUFDUyxVQUFsQixFQUE4QixTQUFTc0YsY0FBVCxDQUF3QjdLLENBQXhCLEVBQWdDO0FBQzFELFlBQUlBLENBQUMsQ0FBQ29ILEtBQUYsSUFBV3BILENBQUMsQ0FBQ29ILEtBQUYsS0FBWSxDQUEzQixFQUE4QjtBQUMxQixpQkFBTyxLQUFQO0FBQ0gsU0FGRCxNQUVPO0FBQ0h3RCxtQkFBUyxHQUFHLGdGQUFaO0FBQ0FwQyxvQkFBVSxHQUFHeEksQ0FBQyxDQUFDL1AsTUFBZjtBQUNBaVgsZUFBSyxDQUFDL2UsSUFBTixDQUFXLFNBQVgsRUFBc0IwaUIsY0FBdEIsRUFIRyxDQUtIOztBQUNBcEMsbUJBQVMsQ0FBQ0MsQ0FBVixHQUFlMUksQ0FBQyxDQUFDc0gsYUFBRixDQUFnQjBCLGFBQWpCLEdBQWtDaEosQ0FBQyxDQUFDc0gsYUFBRixDQUFnQjBCLGFBQWhCLENBQThCLENBQTlCLEVBQWlDdkIsS0FBbkUsR0FBMkV6SCxDQUFDLENBQUN5SCxLQUEzRjtBQUNBZ0IsbUJBQVMsQ0FBQ0UsQ0FBVixHQUFlM0ksQ0FBQyxDQUFDc0gsYUFBRixDQUFnQjBCLGFBQWpCLEdBQWtDaEosQ0FBQyxDQUFDc0gsYUFBRixDQUFnQjBCLGFBQWhCLENBQThCLENBQTlCLEVBQWlDdEIsS0FBbkUsR0FBMkUxSCxDQUFDLENBQUMwSCxLQUEzRjtBQUVBLGlCQUFPLElBQVA7QUFDSDtBQUNKLE9BZEQsRUFjRzdaLEVBZEgsQ0FjTWlYLFFBQVEsQ0FBQ1UsUUFkZixFQWN5QixTQUFTc0YsY0FBVCxDQUF3QjlLLENBQXhCLEVBQWdDO0FBQ3JEa0gsYUFBSyxDQUFDL2UsSUFBTixDQUFXLFNBQVgsRUFBc0IyaUIsY0FBdEI7O0FBQ0EsWUFBSTlLLENBQUMsQ0FBQy9QLE1BQUYsS0FBYXVZLFVBQWpCLEVBQTZCO0FBRXpCO0FBQ0EsY0FBSXVDLFNBQVMsR0FBSS9LLENBQUMsQ0FBQ3NILGFBQUYsQ0FBZ0JNLGNBQWpCLEdBQW1DNUgsQ0FBQyxDQUFDc0gsYUFBRixDQUFnQk0sY0FBaEIsQ0FBK0IsQ0FBL0IsRUFBa0NILEtBQXJFLEdBQTZFekgsQ0FBQyxDQUFDeUgsS0FBL0Y7QUFBQSxjQUNJdUQsU0FBUyxHQUFJaEwsQ0FBQyxDQUFDc0gsYUFBRixDQUFnQk0sY0FBakIsR0FBbUM1SCxDQUFDLENBQUNzSCxhQUFGLENBQWdCTSxjQUFoQixDQUErQixDQUEvQixFQUFrQ0YsS0FBckUsR0FBNkUxSCxDQUFDLENBQUMwSCxLQUQvRixDQUh5QixDQU16Qjs7QUFFQTVDLGtCQUFRLENBQUNlLFNBQVQsR0FBcUJqVCxNQUFNLENBQUN1VyxVQUFQLENBQWtCLFlBQVk7QUFFL0MsZ0JBQUlDLE1BQU0sR0FBSVgsU0FBUyxDQUFDQyxDQUFWLEdBQWNxQyxTQUE1QjtBQUFBLGdCQUF3QzFCLE1BQU0sR0FBSVosU0FBUyxDQUFDRSxDQUFWLEdBQWNxQyxTQUFoRTs7QUFFQSxnQkFBSSxDQUFDOUQsS0FBSyxDQUFDL2UsSUFBTixDQUFXLGNBQVgsQ0FBRCxJQUErQixDQUFDK2UsS0FBSyxDQUFDL2UsSUFBTixDQUFXLFNBQVgsQ0FBaEMsS0FBNERzZ0IsU0FBUyxDQUFDQyxDQUFWLElBQWVxQyxTQUFoQixJQUErQnRDLFNBQVMsQ0FBQ0UsQ0FBVixJQUFlcUMsU0FBL0MsSUFBK0Q1QixNQUFNLElBQUksQ0FBRXRFLFFBQVEsQ0FBQ0MsZUFBckIsSUFBeUNxRSxNQUFNLElBQUl0RSxRQUFRLENBQUNDLGVBQTVELElBQStFc0UsTUFBTSxJQUFJLENBQUV2RSxRQUFRLENBQUNDLGVBQXBHLElBQXdIc0UsTUFBTSxJQUFJdkUsUUFBUSxDQUFDQyxlQUFwUSxDQUFKLEVBQTJSO0FBRXZSLGtCQUFJc0MsU0FBUyxHQUFHckgsQ0FBQyxDQUFDc0gsYUFBbEI7QUFDQSxrQkFBSUMsU0FBUyxHQUFHO0FBQ1osNEJBQVk7QUFDUix1QkFBTXpDLFFBQVEsQ0FBQ08sYUFBVixHQUEyQmdDLFNBQVMsQ0FBQ08sY0FBVixDQUF5QixDQUF6QixFQUE0QkgsS0FBdkQsR0FBK0R6SCxDQUFDLENBQUN5SCxLQUQ5RDtBQUVSLHVCQUFNM0MsUUFBUSxDQUFDTyxhQUFWLEdBQTJCZ0MsU0FBUyxDQUFDTyxjQUFWLENBQXlCLENBQXpCLEVBQTRCRixLQUF2RCxHQUErRDFILENBQUMsQ0FBQzBIO0FBRjlELGlCQURBO0FBS1osMEJBQVU7QUFDTix1QkFBTTVDLFFBQVEsQ0FBQ08sYUFBVixHQUEyQnpNLElBQUksQ0FBQytPLEtBQUwsQ0FBV04sU0FBUyxDQUFDTyxjQUFWLENBQXlCLENBQXpCLEVBQTRCSCxLQUE1QixJQUFxQ1AsS0FBSyxDQUFDVyxNQUFOLEtBQWlCWCxLQUFLLENBQUNXLE1BQU4sR0FBZUMsSUFBaEMsR0FBdUMsQ0FBNUUsQ0FBWCxDQUEzQixHQUF3SGxQLElBQUksQ0FBQytPLEtBQUwsQ0FBVzNILENBQUMsQ0FBQ3lILEtBQUYsSUFBV1AsS0FBSyxDQUFDVyxNQUFOLEtBQWlCWCxLQUFLLENBQUNXLE1BQU4sR0FBZUMsSUFBaEMsR0FBdUMsQ0FBbEQsQ0FBWCxDQUR2SDtBQUVOLHVCQUFNaEQsUUFBUSxDQUFDTyxhQUFWLEdBQTJCek0sSUFBSSxDQUFDK08sS0FBTCxDQUFXTixTQUFTLENBQUNPLGNBQVYsQ0FBeUIsQ0FBekIsRUFBNEJGLEtBQTVCLElBQXFDUixLQUFLLENBQUNXLE1BQU4sS0FBaUJYLEtBQUssQ0FBQ1csTUFBTixHQUFlRSxHQUFoQyxHQUFzQyxDQUEzRSxDQUFYLENBQTNCLEdBQXVIblAsSUFBSSxDQUFDK08sS0FBTCxDQUFXM0gsQ0FBQyxDQUFDMEgsS0FBRixJQUFXUixLQUFLLENBQUNXLE1BQU4sS0FBaUJYLEtBQUssQ0FBQ1csTUFBTixHQUFlRSxHQUFoQyxHQUFzQyxDQUFqRCxDQUFYO0FBRnRILGlCQUxFO0FBU1osd0JBQVEsZ0ZBVEk7QUFVWiwwQkFBVS9ILENBQUMsQ0FBQy9QO0FBVkEsZUFBaEIsQ0FIdVIsQ0FnQnZSOztBQUNBLGtCQUFLc1gsU0FBUyxDQUFDbUQsSUFBVixHQUFpQkUsU0FBbEIsR0FBK0I5RixRQUFRLENBQUNJLGlCQUE1QyxFQUErRDtBQUMzRDhDLGtDQUFrQixDQUFDZixVQUFELEVBQWEsV0FBYixFQUEwQmpILENBQTFCLEVBQTZCdUgsU0FBN0IsQ0FBbEI7QUFDSDtBQUNKO0FBQ0osV0F6Qm9CLEVBeUJsQnpDLFFBQVEsQ0FBQ0ssYUF6QlMsQ0FBckI7QUEwQkg7QUFDSixPQW5ERDtBQW9ESCxLQS9EdUI7QUFpRXhCOEMsVUFBTSxFQUFFLGtCQUFZO0FBQ2hCNWdCLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFHLEdBQVIsQ0FBWW9YLFFBQVEsQ0FBQ1MsVUFBckIsRUFBaUNsZSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFjLElBQVIsQ0FBYXloQixPQUE5QyxFQUF1RGxjLEdBQXZELENBQTJEb1gsUUFBUSxDQUFDVSxRQUFwRSxFQUE4RW5lLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsSUFBUixDQUFhMGhCLE9BQTNGO0FBQ0g7QUFuRXVCLEdBQTVCLENBOVd1QixDQW9idkI7O0FBQ0F4aUIsR0FBQyxDQUFDYSxLQUFGLENBQVE0ZSxPQUFSLENBQWdCbUUsR0FBaEIsR0FBc0I7QUFDbEJqRSxTQUFLLEVBQUUsaUJBQVk7QUFDZixVQUFJQyxVQUFVLEdBQUcsSUFBakI7QUFBQSxVQUNJQyxLQUFLLEdBQUc3ZixDQUFDLENBQUM0ZixVQUFELENBRGI7QUFBQSxVQUVJaUUsT0FBTyxHQUFHLEtBRmQ7QUFBQSxVQUdJMUMsVUFBZSxHQUFHLElBSHRCO0FBQUEsVUFJSU8sVUFKSjtBQUFBLFVBS0lOLFNBQVMsR0FBRztBQUNSQyxTQUFDLEVBQUUsQ0FESztBQUVSQyxTQUFDLEVBQUU7QUFGSyxPQUxoQjtBQUFBLFVBU0luQixPQVRKO0FBV0FOLFdBQUssQ0FBQ3JaLEVBQU4sQ0FBU2lYLFFBQVEsQ0FBQ1MsVUFBbEIsRUFBOEIsU0FBUzRGLFFBQVQsQ0FBa0JuTCxDQUFsQixFQUEwQjtBQUNwRGtILGFBQUssQ0FBQy9lLElBQU4sQ0FBVyxTQUFYLEVBQXNCZ2pCLFFBQXRCOztBQUVBLFlBQUluTCxDQUFDLENBQUNvSCxLQUFGLElBQVdwSCxDQUFDLENBQUNvSCxLQUFGLEtBQVksQ0FBM0IsRUFBOEI7QUFDMUIsaUJBQU8sS0FBUDtBQUNILFNBRkQsTUFHSztBQUNEOEQsaUJBQU8sR0FBRyxJQUFWO0FBQ0F6QyxtQkFBUyxDQUFDQyxDQUFWLEdBQWUxSSxDQUFDLENBQUNzSCxhQUFGLENBQWdCMEIsYUFBakIsR0FBa0NoSixDQUFDLENBQUNzSCxhQUFGLENBQWdCMEIsYUFBaEIsQ0FBOEIsQ0FBOUIsRUFBaUN2QixLQUFuRSxHQUEyRXpILENBQUMsQ0FBQ3lILEtBQTNGO0FBQ0FnQixtQkFBUyxDQUFDRSxDQUFWLEdBQWUzSSxDQUFDLENBQUNzSCxhQUFGLENBQWdCMEIsYUFBakIsR0FBa0NoSixDQUFDLENBQUNzSCxhQUFGLENBQWdCMEIsYUFBaEIsQ0FBOEIsQ0FBOUIsRUFBaUN0QixLQUFuRSxHQUEyRTFILENBQUMsQ0FBQzBILEtBQTNGO0FBQ0FxQixvQkFBVSxHQUFHLGdGQUFiO0FBQ0FQLG9CQUFVLEdBQUd4SSxDQUFDLENBQUMvUCxNQUFmO0FBRUF1WCxpQkFBTyxHQUFJeEgsQ0FBQyxDQUFDc0gsYUFBRixDQUFnQjBCLGFBQWpCLEdBQWtDaEosQ0FBQyxDQUFDc0gsYUFBRixDQUFnQjBCLGFBQWxELEdBQWtFLENBQUNoSixDQUFELENBQTVFO0FBQ0EsaUJBQU8sSUFBUDtBQUNIO0FBQ0osT0FoQkQsRUFnQkduUyxFQWhCSCxDQWdCTWlYLFFBQVEsQ0FBQ1UsUUFoQmYsRUFnQnlCLFNBQVM0RixRQUFULENBQWtCcEwsQ0FBbEIsRUFBMEI7QUFDL0NrSCxhQUFLLENBQUMvZSxJQUFOLENBQVcsU0FBWCxFQUFzQmlqQixRQUF0QixFQUQrQyxDQUcvQzs7QUFDQSxZQUFJeEMsS0FBSyxHQUFJNUksQ0FBQyxDQUFDc0gsYUFBRixDQUFnQjBCLGFBQWpCLEdBQWtDaEosQ0FBQyxDQUFDc0gsYUFBRixDQUFnQk0sY0FBaEIsQ0FBK0IsQ0FBL0IsRUFBa0NILEtBQXBFLEdBQTRFekgsQ0FBQyxDQUFDeUgsS0FBMUY7QUFBQSxZQUNJb0IsS0FBSyxHQUFJN0ksQ0FBQyxDQUFDc0gsYUFBRixDQUFnQjBCLGFBQWpCLEdBQWtDaEosQ0FBQyxDQUFDc0gsYUFBRixDQUFnQk0sY0FBaEIsQ0FBK0IsQ0FBL0IsRUFBa0NGLEtBQXBFLEdBQTRFMUgsQ0FBQyxDQUFDMEgsS0FEMUY7QUFBQSxZQUVJMEIsTUFBTSxHQUFJWCxTQUFTLENBQUNDLENBQVYsR0FBY0UsS0FGNUI7QUFBQSxZQUdJUyxNQUFNLEdBQUlaLFNBQVMsQ0FBQ0UsQ0FBVixHQUFjRSxLQUg1Qjs7QUFLQSxZQUFJTCxVQUFVLElBQUl4SSxDQUFDLENBQUMvUCxNQUFoQixJQUEwQmliLE9BQTFCLElBQXVDLG1GQUFhbkMsVUFBZCxHQUE0QmpFLFFBQVEsQ0FBQ0ksaUJBQTNFLEtBQW1HdUQsU0FBUyxDQUFDQyxDQUFWLElBQWVFLEtBQWYsSUFBd0JILFNBQVMsQ0FBQ0UsQ0FBVixJQUFlRSxLQUF4QyxJQUFtRE8sTUFBTSxJQUFJLENBQUV0RSxRQUFRLENBQUNDLGVBQXJCLElBQXlDcUUsTUFBTSxJQUFJdEUsUUFBUSxDQUFDQyxlQUE1RCxJQUErRXNFLE1BQU0sSUFBSSxDQUFFdkUsUUFBUSxDQUFDQyxlQUFwRyxJQUF3SHNFLE1BQU0sSUFBSXZFLFFBQVEsQ0FBQ0MsZUFBaFMsQ0FBSixFQUF1VDtBQUNuVCxjQUFJc0MsU0FBUyxHQUFHckgsQ0FBQyxDQUFDc0gsYUFBbEI7QUFDQSxjQUFJQyxTQUFTLEdBQUcsRUFBaEI7O0FBRUEsZUFBSyxJQUFJbGQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR21kLE9BQU8sQ0FBQzNpQixNQUE1QixFQUFvQ3dGLENBQUMsRUFBckMsRUFBeUM7QUFDckMsZ0JBQUl5YixLQUFLLEdBQUc7QUFDUiwwQkFBWTtBQUNSLHFCQUFNaEIsUUFBUSxDQUFDTyxhQUFWLEdBQTJCZ0MsU0FBUyxDQUFDTyxjQUFWLENBQXlCdmQsQ0FBekIsRUFBNEJvZCxLQUF2RCxHQUErRHpILENBQUMsQ0FBQ3lILEtBRDlEO0FBRVIscUJBQU0zQyxRQUFRLENBQUNPLGFBQVYsR0FBMkJnQyxTQUFTLENBQUNPLGNBQVYsQ0FBeUJ2ZCxDQUF6QixFQUE0QnFkLEtBQXZELEdBQStEMUgsQ0FBQyxDQUFDMEg7QUFGOUQsZUFESjtBQUtSLHdCQUFVO0FBQ04scUJBQU01QyxRQUFRLENBQUNPLGFBQVYsR0FBMkJ6TSxJQUFJLENBQUMrTyxLQUFMLENBQVdOLFNBQVMsQ0FBQ08sY0FBVixDQUF5QnZkLENBQXpCLEVBQTRCb2QsS0FBNUIsSUFBcUNQLEtBQUssQ0FBQ1csTUFBTixLQUFpQlgsS0FBSyxDQUFDVyxNQUFOLEdBQWVDLElBQWhDLEdBQXVDLENBQTVFLENBQVgsQ0FBM0IsR0FBd0hsUCxJQUFJLENBQUMrTyxLQUFMLENBQVczSCxDQUFDLENBQUN5SCxLQUFGLElBQVdQLEtBQUssQ0FBQ1csTUFBTixLQUFpQlgsS0FBSyxDQUFDVyxNQUFOLEdBQWVDLElBQWhDLEdBQXVDLENBQWxELENBQVgsQ0FEdkg7QUFFTixxQkFBTWhELFFBQVEsQ0FBQ08sYUFBVixHQUEyQnpNLElBQUksQ0FBQytPLEtBQUwsQ0FBV04sU0FBUyxDQUFDTyxjQUFWLENBQXlCdmQsQ0FBekIsRUFBNEJxZCxLQUE1QixJQUFxQ1IsS0FBSyxDQUFDVyxNQUFOLEtBQWlCWCxLQUFLLENBQUNXLE1BQU4sR0FBZUUsR0FBaEMsR0FBc0MsQ0FBM0UsQ0FBWCxDQUEzQixHQUF1SG5QLElBQUksQ0FBQytPLEtBQUwsQ0FBVzNILENBQUMsQ0FBQzBILEtBQUYsSUFBV1IsS0FBSyxDQUFDVyxNQUFOLEtBQWlCWCxLQUFLLENBQUNXLE1BQU4sR0FBZUUsR0FBaEMsR0FBc0MsQ0FBakQsQ0FBWDtBQUZ0SCxlQUxGO0FBU1Isc0JBQVEsZ0ZBVEE7QUFVUix3QkFBVS9ILENBQUMsQ0FBQy9QO0FBVkosYUFBWjtBQWFBc1gscUJBQVMsQ0FBQ3hoQixJQUFWLENBQWUrZixLQUFmO0FBQ0g7O0FBRUQsY0FBSTBELFFBQVEsR0FBSWhDLE9BQU8sQ0FBQzNpQixNQUFSLElBQWtCLENBQW5CLEdBQXdCLE1BQXhCLEdBQWlDLEtBQWhEO0FBRUFtakIsNEJBQWtCLENBQUNmLFVBQUQsRUFBYXVDLFFBQWIsRUFBdUJ4SixDQUF2QixFQUEwQnVILFNBQTFCLENBQWxCO0FBQ0g7QUFDSixPQWxERDtBQW1ESCxLQWhFaUI7QUFrRWxCVSxVQUFNLEVBQUUsa0JBQVk7QUFDaEI1Z0IsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUcsR0FBUixDQUFZb1gsUUFBUSxDQUFDUyxVQUFyQixFQUFpQ2xlLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsSUFBUixDQUFheWhCLE9BQTlDLEVBQXVEbGMsR0FBdkQsQ0FBMkRvWCxRQUFRLENBQUNVLFFBQXBFLEVBQThFbmUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYyxJQUFSLENBQWEwaEIsT0FBM0Y7QUFDSDtBQXBFaUIsR0FBdEIsQ0FyYnVCLENBNGZ2Qjs7QUFDQXhpQixHQUFDLENBQUNhLEtBQUYsQ0FBUTRlLE9BQVIsQ0FBZ0J1RSxLQUFoQixHQUF3QjtBQUNwQnJFLFNBQUssRUFBRSxpQkFBWTtBQUNmLFVBQUlDLFVBQVUsR0FBRyxJQUFqQjtBQUFBLFVBQ0lDLEtBQUssR0FBRzdmLENBQUMsQ0FBQzRmLFVBQUQsQ0FEYjtBQUFBLFVBRUlpRSxPQUFPLEdBQUcsS0FGZDtBQUFBLFVBR0lJLFNBQVMsR0FBRyxLQUhoQjtBQUFBLFVBSUlDLGFBQWEsR0FBRztBQUNaN0MsU0FBQyxFQUFFLENBRFM7QUFFWkMsU0FBQyxFQUFFO0FBRlMsT0FKcEI7QUFBQSxVQVFJNkMsVUFBVSxHQUFHO0FBQ1Q5QyxTQUFDLEVBQUUsQ0FETTtBQUVUQyxTQUFDLEVBQUU7QUFGTSxPQVJqQjtBQUFBLFVBWUk4QyxTQVpKLENBRGUsQ0FlZjs7QUFFQSxlQUFTQyxVQUFULENBQW9CMUwsQ0FBcEIsRUFBNEI7QUFDeEJrSCxhQUFLLEdBQUc3ZixDQUFDLENBQUMyWSxDQUFDLENBQUMyTCxhQUFILENBQVQ7QUFDQXpFLGFBQUssQ0FBQy9lLElBQU4sQ0FBVyxTQUFYLEVBQXNCdWpCLFVBQXRCO0FBQ0FILHFCQUFhLENBQUM3QyxDQUFkLEdBQW1CMUksQ0FBQyxDQUFDc0gsYUFBRixDQUFnQjBCLGFBQWpCLEdBQWtDaEosQ0FBQyxDQUFDc0gsYUFBRixDQUFnQjBCLGFBQWhCLENBQThCLENBQTlCLEVBQWlDdkIsS0FBbkUsR0FBMkV6SCxDQUFDLENBQUN5SCxLQUEvRjtBQUNBOEQscUJBQWEsQ0FBQzVDLENBQWQsR0FBbUIzSSxDQUFDLENBQUNzSCxhQUFGLENBQWdCMEIsYUFBakIsR0FBa0NoSixDQUFDLENBQUNzSCxhQUFGLENBQWdCMEIsYUFBaEIsQ0FBOEIsQ0FBOUIsRUFBaUN0QixLQUFuRSxHQUEyRTFILENBQUMsQ0FBQzBILEtBQS9GO0FBQ0E4RCxrQkFBVSxDQUFDOUMsQ0FBWCxHQUFlNkMsYUFBYSxDQUFDN0MsQ0FBN0I7QUFDQThDLGtCQUFVLENBQUM3QyxDQUFYLEdBQWU0QyxhQUFhLENBQUM1QyxDQUE3QjtBQUNBdUMsZUFBTyxHQUFHLElBQVY7QUFDQSxZQUFJN0QsU0FBUyxHQUFHckgsQ0FBQyxDQUFDc0gsYUFBbEIsQ0FSd0IsQ0FTeEI7O0FBQ0FtRSxpQkFBUyxHQUFHO0FBQ1Isc0JBQVk7QUFDUixpQkFBTTNHLFFBQVEsQ0FBQ08sYUFBVixHQUEyQmdDLFNBQVMsQ0FBQ0csT0FBVixDQUFrQixDQUFsQixFQUFxQkMsS0FBaEQsR0FBd0R6SCxDQUFDLENBQUN5SCxLQUR2RDtBQUVSLGlCQUFNM0MsUUFBUSxDQUFDTyxhQUFWLEdBQTJCZ0MsU0FBUyxDQUFDRyxPQUFWLENBQWtCLENBQWxCLEVBQXFCRSxLQUFoRCxHQUF3RDFILENBQUMsQ0FBQzBIO0FBRnZELFdBREo7QUFLUixvQkFBVTtBQUNOLGlCQUFNNUMsUUFBUSxDQUFDTyxhQUFWLEdBQTJCek0sSUFBSSxDQUFDK08sS0FBTCxDQUFXTixTQUFTLENBQUNPLGNBQVYsQ0FBeUIsQ0FBekIsRUFBNEJILEtBQTVCLElBQXFDUCxLQUFLLENBQUNXLE1BQU4sS0FBaUJYLEtBQUssQ0FBQ1csTUFBTixHQUFlQyxJQUFoQyxHQUF1QyxDQUE1RSxDQUFYLENBQTNCLEdBQXdIbFAsSUFBSSxDQUFDK08sS0FBTCxDQUFXM0gsQ0FBQyxDQUFDeUgsS0FBRixJQUFXUCxLQUFLLENBQUNXLE1BQU4sS0FBaUJYLEtBQUssQ0FBQ1csTUFBTixHQUFlQyxJQUFoQyxHQUF1QyxDQUFsRCxDQUFYLENBRHZIO0FBRU4saUJBQU1oRCxRQUFRLENBQUNPLGFBQVYsR0FBMkJ6TSxJQUFJLENBQUMrTyxLQUFMLENBQVdOLFNBQVMsQ0FBQ08sY0FBVixDQUF5QixDQUF6QixFQUE0QkYsS0FBNUIsSUFBcUNSLEtBQUssQ0FBQ1csTUFBTixLQUFpQlgsS0FBSyxDQUFDVyxNQUFOLEdBQWVFLEdBQWhDLEdBQXNDLENBQTNFLENBQVgsQ0FBM0IsR0FBdUhuUCxJQUFJLENBQUMrTyxLQUFMLENBQVczSCxDQUFDLENBQUMwSCxLQUFGLElBQVdSLEtBQUssQ0FBQ1csTUFBTixLQUFpQlgsS0FBSyxDQUFDVyxNQUFOLEdBQWVFLEdBQWhDLEdBQXNDLENBQWpELENBQVg7QUFGdEgsV0FMRjtBQVNSLGtCQUFRLGdGQVRBO0FBVVIsb0JBQVUvSCxDQUFDLENBQUMvUDtBQVZKLFNBQVo7QUFZSCxPQXZDYyxDQXlDZjs7O0FBRUEsZUFBUzJiLFNBQVQsQ0FBbUI1TCxDQUFuQixFQUEyQjtBQUN2QmtILGFBQUssR0FBRzdmLENBQUMsQ0FBQzJZLENBQUMsQ0FBQzJMLGFBQUgsQ0FBVDtBQUNBekUsYUFBSyxDQUFDL2UsSUFBTixDQUFXLFNBQVgsRUFBc0J5akIsU0FBdEI7QUFDQUosa0JBQVUsQ0FBQzlDLENBQVgsR0FBZ0IxSSxDQUFDLENBQUNzSCxhQUFGLENBQWdCMEIsYUFBakIsR0FBa0NoSixDQUFDLENBQUNzSCxhQUFGLENBQWdCMEIsYUFBaEIsQ0FBOEIsQ0FBOUIsRUFBaUN2QixLQUFuRSxHQUEyRXpILENBQUMsQ0FBQ3lILEtBQTVGO0FBQ0ErRCxrQkFBVSxDQUFDN0MsQ0FBWCxHQUFnQjNJLENBQUMsQ0FBQ3NILGFBQUYsQ0FBZ0IwQixhQUFqQixHQUFrQ2hKLENBQUMsQ0FBQ3NILGFBQUYsQ0FBZ0IwQixhQUFoQixDQUE4QixDQUE5QixFQUFpQ3RCLEtBQW5FLEdBQTJFMUgsQ0FBQyxDQUFDMEgsS0FBNUY7QUFFQSxZQUFJbUUsUUFBSixDQU51QixDQVF2Qjs7QUFDQSxZQUFJQyxlQUFlLEdBQUk1RSxLQUFLLENBQUNnQyxNQUFOLEdBQWUvZ0IsSUFBZixDQUFvQixZQUFwQixDQUFELEdBQXNDK2UsS0FBSyxDQUFDZ0MsTUFBTixHQUFlL2dCLElBQWYsQ0FBb0IsWUFBcEIsQ0FBdEMsR0FBMEUrZSxLQUFLLENBQUMvZSxJQUFOLENBQVcsWUFBWCxDQUFoRztBQUFBLFlBQ0k0akIsZUFBZSxHQUFJN0UsS0FBSyxDQUFDZ0MsTUFBTixHQUFlL2dCLElBQWYsQ0FBb0IsWUFBcEIsQ0FBRCxHQUFzQytlLEtBQUssQ0FBQ2dDLE1BQU4sR0FBZS9nQixJQUFmLENBQW9CLFlBQXBCLENBQXRDLEdBQTBFK2UsS0FBSyxDQUFDL2UsSUFBTixDQUFXLFlBQVgsQ0FEaEc7QUFBQSxZQUVJNmpCLFdBQVcsR0FBSSxPQUFPRixlQUFQLEtBQTJCLFdBQTNCLElBQTBDQSxlQUFlLEtBQUssS0FBOUQsSUFBdUUsZ0ZBQVNBLGVBQVQsQ0FBeEUsR0FBcUcsZ0ZBQVNBLGVBQVQsQ0FBckcsR0FBaUloSCxRQUFRLENBQUNFLGlCQUY1SjtBQUFBLFlBR0lpSCxXQUFXLEdBQUksT0FBT0YsZUFBUCxLQUEyQixXQUEzQixJQUEwQ0EsZUFBZSxLQUFLLEtBQTlELElBQXVFLGdGQUFTQSxlQUFULENBQXhFLEdBQXFHLGdGQUFTQSxlQUFULENBQXJHLEdBQWlJakgsUUFBUSxDQUFDRyxpQkFINUo7O0FBS0EsWUFBSXNHLGFBQWEsQ0FBQzVDLENBQWQsR0FBa0I2QyxVQUFVLENBQUM3QyxDQUE3QixJQUFtQzRDLGFBQWEsQ0FBQzVDLENBQWQsR0FBa0I2QyxVQUFVLENBQUM3QyxDQUE3QixHQUFpQ3NELFdBQXhFLEVBQXNGO0FBQ2xGSixrQkFBUSxHQUFHLFNBQVg7QUFDSDs7QUFDRCxZQUFJTixhQUFhLENBQUM3QyxDQUFkLEdBQWtCOEMsVUFBVSxDQUFDOUMsQ0FBN0IsSUFBbUM4QyxVQUFVLENBQUM5QyxDQUFYLEdBQWU2QyxhQUFhLENBQUM3QyxDQUE3QixHQUFpQ3NELFdBQXhFLEVBQXNGO0FBQ2xGSCxrQkFBUSxHQUFHLFlBQVg7QUFDSDs7QUFDRCxZQUFJTixhQUFhLENBQUM1QyxDQUFkLEdBQWtCNkMsVUFBVSxDQUFDN0MsQ0FBN0IsSUFBbUM2QyxVQUFVLENBQUM3QyxDQUFYLEdBQWU0QyxhQUFhLENBQUM1QyxDQUE3QixHQUFpQ3NELFdBQXhFLEVBQXNGO0FBQ2xGSixrQkFBUSxHQUFHLFdBQVg7QUFDSDs7QUFDRCxZQUFJTixhQUFhLENBQUM3QyxDQUFkLEdBQWtCOEMsVUFBVSxDQUFDOUMsQ0FBN0IsSUFBbUM2QyxhQUFhLENBQUM3QyxDQUFkLEdBQWtCOEMsVUFBVSxDQUFDOUMsQ0FBN0IsR0FBaUNzRCxXQUF4RSxFQUFzRjtBQUNsRkgsa0JBQVEsR0FBRyxXQUFYO0FBQ0g7O0FBQ0QsWUFBSUEsUUFBUSxJQUFJemYsU0FBWixJQUF5QjhlLE9BQTdCLEVBQXNDO0FBQ2xDSyx1QkFBYSxDQUFDN0MsQ0FBZCxHQUFrQixDQUFsQjtBQUNBNkMsdUJBQWEsQ0FBQzVDLENBQWQsR0FBa0IsQ0FBbEI7QUFDQTZDLG9CQUFVLENBQUM5QyxDQUFYLEdBQWUsQ0FBZjtBQUNBOEMsb0JBQVUsQ0FBQzdDLENBQVgsR0FBZSxDQUFmO0FBQ0F1QyxpQkFBTyxHQUFHLEtBQVYsQ0FMa0MsQ0FPbEM7O0FBQ0EsY0FBSTdELFNBQVMsR0FBR3JILENBQUMsQ0FBQ3NILGFBQWxCO0FBQ0EsY0FBSTRFLE9BQU8sR0FBRztBQUNWLHdCQUFZO0FBQ1IsbUJBQU1wSCxRQUFRLENBQUNPLGFBQVYsR0FBMkJnQyxTQUFTLENBQUNHLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUJDLEtBQWhELEdBQXdEekgsQ0FBQyxDQUFDeUgsS0FEdkQ7QUFFUixtQkFBTTNDLFFBQVEsQ0FBQ08sYUFBVixHQUEyQmdDLFNBQVMsQ0FBQ0csT0FBVixDQUFrQixDQUFsQixFQUFxQkUsS0FBaEQsR0FBd0QxSCxDQUFDLENBQUMwSDtBQUZ2RCxhQURGO0FBS1Ysc0JBQVU7QUFDTixtQkFBTTVDLFFBQVEsQ0FBQ08sYUFBVixHQUEyQnpNLElBQUksQ0FBQytPLEtBQUwsQ0FBV04sU0FBUyxDQUFDTyxjQUFWLENBQXlCLENBQXpCLEVBQTRCSCxLQUE1QixJQUFxQ1AsS0FBSyxDQUFDVyxNQUFOLEtBQWlCWCxLQUFLLENBQUNXLE1BQU4sR0FBZUMsSUFBaEMsR0FBdUMsQ0FBNUUsQ0FBWCxDQUEzQixHQUF3SGxQLElBQUksQ0FBQytPLEtBQUwsQ0FBVzNILENBQUMsQ0FBQ3lILEtBQUYsSUFBV1AsS0FBSyxDQUFDVyxNQUFOLEtBQWlCWCxLQUFLLENBQUNXLE1BQU4sR0FBZUMsSUFBaEMsR0FBdUMsQ0FBbEQsQ0FBWCxDQUR2SDtBQUVOLG1CQUFNaEQsUUFBUSxDQUFDTyxhQUFWLEdBQTJCek0sSUFBSSxDQUFDK08sS0FBTCxDQUFXTixTQUFTLENBQUNPLGNBQVYsQ0FBeUIsQ0FBekIsRUFBNEJGLEtBQTVCLElBQXFDUixLQUFLLENBQUNXLE1BQU4sS0FBaUJYLEtBQUssQ0FBQ1csTUFBTixHQUFlRSxHQUFoQyxHQUFzQyxDQUEzRSxDQUFYLENBQTNCLEdBQXVIblAsSUFBSSxDQUFDK08sS0FBTCxDQUFXM0gsQ0FBQyxDQUFDMEgsS0FBRixJQUFXUixLQUFLLENBQUNXLE1BQU4sS0FBaUJYLEtBQUssQ0FBQ1csTUFBTixHQUFlRSxHQUFoQyxHQUFzQyxDQUFqRCxDQUFYO0FBRnRILGFBTEE7QUFTVixvQkFBUSxnRkFURTtBQVVWLHNCQUFVL0gsQ0FBQyxDQUFDL1A7QUFWRixXQUFkLENBVGtDLENBc0JsQzs7QUFDQSxjQUFJa2MsT0FBTyxHQUFHdlQsSUFBSSxDQUFDd1QsR0FBTCxDQUFTWCxTQUFTLENBQUNZLFFBQVYsQ0FBbUIzRCxDQUFuQixHQUF1QndELE9BQU8sQ0FBQ0csUUFBUixDQUFpQjNELENBQWpELENBQWQ7QUFBQSxjQUNJNEQsT0FBTyxHQUFHMVQsSUFBSSxDQUFDd1QsR0FBTCxDQUFTWCxTQUFTLENBQUNZLFFBQVYsQ0FBbUIxRCxDQUFuQixHQUF1QnVELE9BQU8sQ0FBQ0csUUFBUixDQUFpQjFELENBQWpELENBRGQ7QUFHQSxjQUFJcEIsU0FBUyxHQUFHO0FBQ1oseUJBQWFrRSxTQUREO0FBRVosdUJBQVdTLE9BRkM7QUFHWix5QkFBYUwsUUFBUSxDQUFDL1osT0FBVCxDQUFpQixPQUFqQixFQUEwQixFQUExQixDQUhEO0FBSVosdUJBQVdxYSxPQUpDO0FBS1osdUJBQVdHLE9BTEM7QUFNWix3QkFBWUosT0FBTyxDQUFDeEIsSUFBUixHQUFlZSxTQUFTLENBQUNmO0FBTnpCLFdBQWhCO0FBUUFZLG1CQUFTLEdBQUcsSUFBWjtBQUNBcEUsZUFBSyxDQUFDTCxPQUFOLENBQWMsT0FBZCxFQUF1QlUsU0FBdkIsRUFBa0NWLE9BQWxDLENBQTBDZ0YsUUFBMUMsRUFBb0R0RSxTQUFwRDtBQUNIO0FBQ0o7O0FBRUQsZUFBU2dGLFFBQVQsQ0FBa0J2TSxDQUFsQixFQUEwQjtBQUN0QmtILGFBQUssR0FBRzdmLENBQUMsQ0FBQzJZLENBQUMsQ0FBQzJMLGFBQUgsQ0FBVDtBQUNBLFlBQUlFLFFBQVEsR0FBRyxFQUFmO0FBQ0EzRSxhQUFLLENBQUMvZSxJQUFOLENBQVcsU0FBWCxFQUFzQm9rQixRQUF0Qjs7QUFDQSxZQUFJakIsU0FBSixFQUFlO0FBQ1g7QUFDQSxjQUFJUSxlQUFlLEdBQUc1RSxLQUFLLENBQUMvZSxJQUFOLENBQVcsWUFBWCxDQUF0QjtBQUFBLGNBQ0k0akIsZUFBZSxHQUFHN0UsS0FBSyxDQUFDL2UsSUFBTixDQUFXLFlBQVgsQ0FEdEI7QUFBQSxjQUVJNmpCLFdBQVcsR0FBSSxPQUFPRixlQUFQLEtBQTJCLFdBQTNCLElBQTBDQSxlQUFlLEtBQUssS0FBOUQsSUFBdUUsZ0ZBQVNBLGVBQVQsQ0FBeEUsR0FBcUcsZ0ZBQVNBLGVBQVQsQ0FBckcsR0FBaUloSCxRQUFRLENBQUNFLGlCQUY1SjtBQUFBLGNBR0lpSCxXQUFXLEdBQUksT0FBT0YsZUFBUCxLQUEyQixXQUEzQixJQUEwQ0EsZUFBZSxLQUFLLEtBQTlELElBQXVFLGdGQUFTQSxlQUFULENBQXhFLEdBQXFHLGdGQUFTQSxlQUFULENBQXJHLEdBQWlJakgsUUFBUSxDQUFDRyxpQkFINUo7QUFLQSxjQUFJb0MsU0FBUyxHQUFHckgsQ0FBQyxDQUFDc0gsYUFBbEI7QUFDQSxjQUFJNEUsT0FBTyxHQUFHO0FBQ1Ysd0JBQVk7QUFDUixtQkFBTXBILFFBQVEsQ0FBQ08sYUFBVixHQUEyQmdDLFNBQVMsQ0FBQ08sY0FBVixDQUF5QixDQUF6QixFQUE0QkgsS0FBdkQsR0FBK0R6SCxDQUFDLENBQUN5SCxLQUQ5RDtBQUVSLG1CQUFNM0MsUUFBUSxDQUFDTyxhQUFWLEdBQTJCZ0MsU0FBUyxDQUFDTyxjQUFWLENBQXlCLENBQXpCLEVBQTRCRixLQUF2RCxHQUErRDFILENBQUMsQ0FBQzBIO0FBRjlELGFBREY7QUFLVixzQkFBVTtBQUNOLG1CQUFNNUMsUUFBUSxDQUFDTyxhQUFWLEdBQTJCek0sSUFBSSxDQUFDK08sS0FBTCxDQUFXTixTQUFTLENBQUNPLGNBQVYsQ0FBeUIsQ0FBekIsRUFBNEJILEtBQTVCLElBQXFDUCxLQUFLLENBQUNXLE1BQU4sS0FBaUJYLEtBQUssQ0FBQ1csTUFBTixHQUFlQyxJQUFoQyxHQUF1QyxDQUE1RSxDQUFYLENBQTNCLEdBQXdIbFAsSUFBSSxDQUFDK08sS0FBTCxDQUFXM0gsQ0FBQyxDQUFDeUgsS0FBRixJQUFXUCxLQUFLLENBQUNXLE1BQU4sS0FBaUJYLEtBQUssQ0FBQ1csTUFBTixHQUFlQyxJQUFoQyxHQUF1QyxDQUFsRCxDQUFYLENBRHZIO0FBRU4sbUJBQU1oRCxRQUFRLENBQUNPLGFBQVYsR0FBMkJ6TSxJQUFJLENBQUMrTyxLQUFMLENBQVdOLFNBQVMsQ0FBQ08sY0FBVixDQUF5QixDQUF6QixFQUE0QkYsS0FBNUIsSUFBcUNSLEtBQUssQ0FBQ1csTUFBTixLQUFpQlgsS0FBSyxDQUFDVyxNQUFOLEdBQWVFLEdBQWhDLEdBQXNDLENBQTNFLENBQVgsQ0FBM0IsR0FBdUhuUCxJQUFJLENBQUMrTyxLQUFMLENBQVczSCxDQUFDLENBQUMwSCxLQUFGLElBQVdSLEtBQUssQ0FBQ1csTUFBTixLQUFpQlgsS0FBSyxDQUFDVyxNQUFOLEdBQWVFLEdBQWhDLEdBQXNDLENBQWpELENBQVg7QUFGdEgsYUFMQTtBQVNWLG9CQUFRLGdGQVRFO0FBVVYsc0JBQVUvSCxDQUFDLENBQUMvUDtBQVZGLFdBQWQsQ0FSVyxDQXFCWDs7QUFDQSxjQUFJd2IsU0FBUyxDQUFDWSxRQUFWLENBQW1CMUQsQ0FBbkIsR0FBdUJ1RCxPQUFPLENBQUNHLFFBQVIsQ0FBaUIxRCxDQUF4QyxJQUE4QzhDLFNBQVMsQ0FBQ1ksUUFBVixDQUFtQjFELENBQW5CLEdBQXVCdUQsT0FBTyxDQUFDRyxRQUFSLENBQWlCMUQsQ0FBeEMsR0FBNENzRCxXQUE5RixFQUE0RztBQUN4R0osb0JBQVEsR0FBRyxTQUFYO0FBQ0g7O0FBQ0QsY0FBSUosU0FBUyxDQUFDWSxRQUFWLENBQW1CM0QsQ0FBbkIsR0FBdUJ3RCxPQUFPLENBQUNHLFFBQVIsQ0FBaUIzRCxDQUF4QyxJQUE4Q3dELE9BQU8sQ0FBQ0csUUFBUixDQUFpQjNELENBQWpCLEdBQXFCK0MsU0FBUyxDQUFDWSxRQUFWLENBQW1CM0QsQ0FBeEMsR0FBNENzRCxXQUE5RixFQUE0RztBQUN4R0gsb0JBQVEsR0FBRyxZQUFYO0FBQ0g7O0FBQ0QsY0FBSUosU0FBUyxDQUFDWSxRQUFWLENBQW1CMUQsQ0FBbkIsR0FBdUJ1RCxPQUFPLENBQUNHLFFBQVIsQ0FBaUIxRCxDQUF4QyxJQUE4Q3VELE9BQU8sQ0FBQ0csUUFBUixDQUFpQjFELENBQWpCLEdBQXFCOEMsU0FBUyxDQUFDWSxRQUFWLENBQW1CMUQsQ0FBeEMsR0FBNENzRCxXQUE5RixFQUE0RztBQUN4R0osb0JBQVEsR0FBRyxXQUFYO0FBQ0g7O0FBQ0QsY0FBSUosU0FBUyxDQUFDWSxRQUFWLENBQW1CM0QsQ0FBbkIsR0FBdUJ3RCxPQUFPLENBQUNHLFFBQVIsQ0FBaUIzRCxDQUF4QyxJQUE4QytDLFNBQVMsQ0FBQ1ksUUFBVixDQUFtQjNELENBQW5CLEdBQXVCd0QsT0FBTyxDQUFDRyxRQUFSLENBQWlCM0QsQ0FBeEMsR0FBNENzRCxXQUE5RixFQUE0RztBQUN4R0gsb0JBQVEsR0FBRyxXQUFYO0FBQ0gsV0FqQ1UsQ0FtQ1g7OztBQUNBLGNBQUlNLE9BQU8sR0FBR3ZULElBQUksQ0FBQ3dULEdBQUwsQ0FBU1gsU0FBUyxDQUFDWSxRQUFWLENBQW1CM0QsQ0FBbkIsR0FBdUJ3RCxPQUFPLENBQUNHLFFBQVIsQ0FBaUIzRCxDQUFqRCxDQUFkO0FBQUEsY0FDSTRELE9BQU8sR0FBRzFULElBQUksQ0FBQ3dULEdBQUwsQ0FBU1gsU0FBUyxDQUFDWSxRQUFWLENBQW1CMUQsQ0FBbkIsR0FBdUJ1RCxPQUFPLENBQUNHLFFBQVIsQ0FBaUIxRCxDQUFqRCxDQURkO0FBR0EsY0FBSXBCLFNBQVMsR0FBRztBQUNaLHlCQUFha0UsU0FERDtBQUVaLHVCQUFXUyxPQUZDO0FBR1oseUJBQWFMLFFBQVEsQ0FBQy9aLE9BQVQsQ0FBaUIsT0FBakIsRUFBMEIsRUFBMUIsQ0FIRDtBQUlaLHVCQUFXcWEsT0FKQztBQUtaLHVCQUFXRyxPQUxDO0FBTVosd0JBQVlKLE9BQU8sQ0FBQ3hCLElBQVIsR0FBZWUsU0FBUyxDQUFDZjtBQU56QixXQUFoQjtBQVFBeEQsZUFBSyxDQUFDTCxPQUFOLENBQWMsVUFBZCxFQUEwQlUsU0FBMUI7QUFDSDs7QUFFRDJELGVBQU8sR0FBRyxLQUFWO0FBQ0FJLGlCQUFTLEdBQUcsS0FBWjtBQUNIOztBQUVEcEUsV0FBSyxDQUFDclosRUFBTixDQUFTaVgsUUFBUSxDQUFDUyxVQUFsQixFQUE4Qm1HLFVBQTlCO0FBQ0F4RSxXQUFLLENBQUNyWixFQUFOLENBQVNpWCxRQUFRLENBQUNXLFNBQWxCLEVBQTZCbUcsU0FBN0I7QUFDQTFFLFdBQUssQ0FBQ3JaLEVBQU4sQ0FBU2lYLFFBQVEsQ0FBQ1UsUUFBbEIsRUFBNEIrRyxRQUE1QjtBQUNILEtBMUttQjtBQTRLcEJ0RSxVQUFNLEVBQUUsa0JBQVk7QUFDaEI1Z0IsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUcsR0FBUixDQUFZb1gsUUFBUSxDQUFDUyxVQUFyQixFQUFpQ2xlLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsSUFBUixDQUFheWhCLE9BQTlDLEVBQXVEbGMsR0FBdkQsQ0FBMkRvWCxRQUFRLENBQUNXLFNBQXBFLEVBQStFcGUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYyxJQUFSLENBQWEwaEIsT0FBNUYsRUFBcUduYyxHQUFyRyxDQUF5R29YLFFBQVEsQ0FBQ1UsUUFBbEgsRUFBNEhuZSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFjLElBQVIsQ0FBYTJoQixPQUF6STtBQUNIO0FBOUttQixHQUF4QixDQTdmdUIsQ0E4cUJ2Qjs7QUFDQXppQixHQUFDLENBQUNhLEtBQUYsQ0FBUTRlLE9BQVIsQ0FBZ0IwRixXQUFoQixHQUE4QjtBQUMxQnhGLFNBQUssRUFBRSxpQkFBWTtBQUNmLFVBQUlDLFVBQVUsR0FBRyxJQUFqQjtBQUFBLFVBQ0lDLEtBQUssR0FBRzdmLENBQUMsQ0FBQzRmLFVBQUQsQ0FEYjtBQUFBLFVBRUl3RixTQUZKO0FBQUEsVUFHSUMsS0FISjs7QUFLQSxlQUFTN0YsT0FBVCxDQUFpQjNlLEtBQWpCLEVBQStCeWtCLEtBQS9CLEVBQStDO0FBQzNDRixpQkFBUyxHQUFHRSxLQUFaO0FBQ0EzRSwwQkFBa0IsQ0FBQ2YsVUFBRCxFQUFhd0YsU0FBUyxHQUFHLGFBQUgsR0FBbUIsV0FBekMsRUFBc0R2a0IsS0FBdEQsQ0FBbEI7QUFDSCxPQVRjLENBV2Y7OztBQUNBZ2YsV0FBSyxDQUFDclosRUFBTixDQUFTaVgsUUFBUSxDQUFDYSxXQUFsQixFQUErQixTQUFTaUgsVUFBVCxDQUFvQjFrQixLQUFwQixFQUFnQztBQUMzRGdmLGFBQUssQ0FBQy9lLElBQU4sQ0FBVyxRQUFYLEVBQXFCeWtCLFVBQXJCOztBQUVBLFlBQUksQ0FBQ0gsU0FBTCxFQUFnQjtBQUNaNUYsaUJBQU8sQ0FBQzNlLEtBQUQsRUFBUSxJQUFSLENBQVA7QUFDSDs7QUFFRHdoQixvQkFBWSxDQUFDZ0QsS0FBRCxDQUFaO0FBQ0FBLGFBQUssR0FBR3ZELFVBQVUsQ0FBQyxZQUFZO0FBQzNCdEMsaUJBQU8sQ0FBQzNlLEtBQUQsRUFBUSxLQUFSLENBQVA7QUFDSCxTQUZpQixFQUVmLEVBRmUsQ0FBbEI7QUFHSCxPQVhEO0FBWUgsS0F6QnlCO0FBMkIxQitmLFVBQU0sRUFBRSxrQkFBWTtBQUNoQjVnQixPQUFDLENBQUMsSUFBRCxDQUFELENBQVFxRyxHQUFSLENBQVlvWCxRQUFRLENBQUNhLFdBQXJCLEVBQWtDdGUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYyxJQUFSLENBQWErZixNQUEvQztBQUNIO0FBN0J5QixHQUE5QixDQS9xQnVCLENBK3NCdkI7O0FBQ0EsTUFBSTJFLEdBQUcsR0FBR3hsQixDQUFDLENBQUN1TCxNQUFELENBQVg7QUFBQSxNQUNJa2EsZUFESjtBQUFBLE1BRUlDLGdCQUZKO0FBQUEsTUFHSUMsZ0NBSEo7QUFBQSxNQUlJQyw4QkFKSjtBQUFBLE1BS0lDLFlBQWlCLEdBQUc7QUFDaEIsU0FBSyxJQURXO0FBRWhCLFdBQU87QUFGUyxHQUx4Qjs7QUFVQSxNQUFJcEksUUFBUSxDQUFDUSxtQkFBYixFQUFrQztBQUM5QixRQUFJNkgsRUFBRSxHQUFHdmEsTUFBTSxDQUFDcVIsVUFBUCxJQUFxQjRJLEdBQUcsQ0FBQ08sS0FBSixFQUE5QjtBQUFBLFFBQ0lDLEVBQUUsR0FBR3phLE1BQU0sQ0FBQ3dSLFdBQVAsSUFBc0J5SSxHQUFHLENBQUNTLE1BQUosRUFEL0I7QUFBQSxRQUVJQyxtQkFBbUIsR0FBRyxFQUYxQjtBQUlBUCxvQ0FBZ0MsR0FBR0csRUFBRSxHQUFHRSxFQUFMLElBQVlGLEVBQUUsR0FBR0UsRUFBTixHQUFZRSxtQkFBMUQ7QUFDQU4sa0NBQThCLEdBQUdDLFlBQVksQ0FBQ3RhLE1BQU0sQ0FBQzRhLFdBQVIsQ0FBN0M7O0FBRUEsUUFBS1IsZ0NBQWdDLElBQUlDLDhCQUFyQyxJQUF5RSxDQUFDRCxnQ0FBRCxJQUFxQyxDQUFDQyw4QkFBbkgsRUFBb0o7QUFDaEpDLGtCQUFZLEdBQUc7QUFDWCxlQUFPLElBREk7QUFFWCxjQUFNO0FBRkssT0FBZjtBQUlIO0FBQ0o7O0FBRUQ3bEIsR0FBQyxDQUFDYSxLQUFGLENBQVE0ZSxPQUFSLENBQWdCMkcsaUJBQWhCLEdBQW9DO0FBQ2hDekcsU0FBSyxFQUFFLGlCQUFZO0FBQ2Y7QUFDQTtBQUNBLFVBQUlsQyxRQUFRLENBQUNRLG1CQUFiLEVBQWtDO0FBQzlCLGVBQU8sS0FBUDtBQUNILE9BTGMsQ0FPZjs7O0FBQ0F5SCxzQkFBZ0IsR0FBR0QsZUFBZSxFQUFsQztBQUVBRCxTQUFHLENBQUNoZixFQUFKLENBQU8saUJBQVAsRUFBMEJMLE9BQTFCO0FBQ0EsYUFBTyxJQUFQO0FBQ0gsS0FiK0I7QUFjaENrZ0IsWUFBUSxFQUFFLG9CQUFZO0FBQ2xCLFVBQUk1SSxRQUFRLENBQUNRLG1CQUFiLEVBQWtDO0FBQzlCLGVBQU8sS0FBUDtBQUNIOztBQUVEdUgsU0FBRyxDQUFDbmYsR0FBSixDQUFRLGlCQUFSLEVBQTJCRixPQUEzQjtBQUNBLGFBQU8sSUFBUDtBQUNILEtBckIrQjtBQXNCaENtZ0IsT0FBRyxFQUFFLGFBQVVDLFNBQVYsRUFBMEI7QUFDM0I7QUFDQSxVQUFJQyxXQUFXLEdBQUdELFNBQVMsQ0FBQ3BnQixPQUE1Qjs7QUFFQW9nQixlQUFTLENBQUNwZ0IsT0FBVixHQUFvQixVQUFVdEYsS0FBVixFQUFzQjtBQUN0Q0EsYUFBSyxDQUFDc2xCLFdBQU4sR0FBb0JWLGVBQWUsRUFBbkM7QUFDQSxlQUFPZSxXQUFXLENBQUN4b0IsS0FBWixDQUFrQixJQUFsQixFQUF3QnlvQixTQUF4QixDQUFQO0FBQ0gsT0FIRDtBQUlIO0FBOUIrQixHQUFwQyxDQTF1QnVCLENBMndCdkI7QUFDQTs7QUFFQSxXQUFTdGdCLE9BQVQsR0FBbUI7QUFDZjtBQUNBLFFBQUlnZ0IsV0FBVyxHQUFHVixlQUFlLEVBQWpDOztBQUVBLFFBQUlVLFdBQVcsS0FBS1QsZ0JBQXBCLEVBQXNDO0FBQ2xDO0FBQ0FBLHNCQUFnQixHQUFHUyxXQUFuQjtBQUNBWCxTQUFHLENBQUNoRyxPQUFKLENBQVksbUJBQVo7QUFDSDtBQUNKOztBQUVEeGYsR0FBQyxDQUFDYSxLQUFGLENBQVE0ZSxPQUFSLENBQWdCMkcsaUJBQWhCLENBQWtDRCxXQUFsQyxHQUFnRFYsZUFBZSxHQUFHLDJCQUFZO0FBQzFFLFFBQUlpQixVQUFlLEdBQUcsSUFBdEI7QUFBQSxRQUNJQyxJQUFJLEdBQUdsakIsUUFBUSxDQUFDaVosZUFEcEI7O0FBR0EsUUFBSWUsUUFBUSxDQUFDUSxtQkFBYixFQUFrQztBQUM5QnlJLGdCQUFVLEdBQUdiLFlBQVksQ0FBQ3RhLE1BQU0sQ0FBQzRhLFdBQVIsQ0FBekI7QUFDSCxLQUZELE1BRU87QUFDSE8sZ0JBQVUsR0FBR0MsSUFBSSxJQUFJQSxJQUFJLENBQUNoSyxXQUFMLEdBQW1CZ0ssSUFBSSxDQUFDN0osWUFBeEIsR0FBdUMsR0FBNUQ7QUFDSDs7QUFFRCxXQUFPNEosVUFBVSxHQUFHLFVBQUgsR0FBZ0IsV0FBakM7QUFDSCxHQVhELENBenhCdUIsQ0FzeUJ2Qjs7O0FBQ0ExbUIsR0FBQyxDQUFDYSxLQUFGLENBQVE0ZSxPQUFSLENBQWdCbUgsZUFBaEIsR0FBa0M7QUFDOUJqSCxTQUFLLEVBQUUsaUJBQVk7QUFDZjNmLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXdHLEVBQVIsQ0FBVyxRQUFYLEVBQXFCcWdCLGdCQUFyQjtBQUNILEtBSDZCO0FBSTlCUixZQUFRLEVBQUUsb0JBQVk7QUFDbEJybUIsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUcsR0FBUixDQUFZLFFBQVosRUFBc0J3Z0IsZ0JBQXRCO0FBQ0g7QUFONkIsR0FBbEM7O0FBU0EsTUFBSUMsUUFBUSxHQUFHLEdBQWY7QUFBQSxNQUNJRCxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQXFCO0FBQ3BDRSxRQUFJLEdBQUcsZ0ZBQVA7QUFDQUMsUUFBSSxHQUFHRCxJQUFJLEdBQUdFLFFBQWQ7O0FBRUEsUUFBSUQsSUFBSSxJQUFJRixRQUFaLEVBQXNCO0FBQ2xCRyxjQUFRLEdBQUdGLElBQVg7QUFDQS9tQixPQUFDLENBQUMsSUFBRCxDQUFELENBQVF3ZixPQUFSLENBQWdCLGlCQUFoQjtBQUVILEtBSkQsTUFJTztBQUNILFVBQUkwSCxRQUFKLEVBQWM7QUFDVjNiLGNBQU0sQ0FBQzhXLFlBQVAsQ0FBb0I2RSxRQUFwQjtBQUNILE9BSEUsQ0FLSDs7O0FBQ0FBLGNBQVEsR0FBRzNiLE1BQU0sQ0FBQ3VXLFVBQVAsQ0FBa0IzYixPQUFsQixFQUEyQjJnQixRQUFRLEdBQUdFLElBQXRDLENBQVg7QUFDSDtBQUNKLEdBakJMO0FBQUEsTUFrQklDLFFBQVEsR0FBRyxDQWxCZjtBQUFBLE1BbUJJQyxRQW5CSjtBQUFBLE1Bb0JJSCxJQXBCSjtBQUFBLE1BcUJJQyxJQXJCSixDQWh6QnVCLENBdTBCdkI7OztBQUVBLFdBQVNyRyxrQkFBVCxDQUE0QjVqQixHQUE1QixFQUFzQ29xQixTQUF0QyxFQUF5RHRtQixLQUF6RCxFQUFxRXFmLFNBQXJFLEVBQXNGO0FBQ2xGLFFBQUlrSCxZQUFZLEdBQUd2bUIsS0FBSyxDQUFDUSxJQUF6QjtBQUNBUixTQUFLLENBQUNRLElBQU4sR0FBYThsQixTQUFiO0FBRUFubkIsS0FBQyxDQUFDYSxLQUFGLENBQVF3bUIsUUFBUixDQUFpQnpkLElBQWpCLENBQXNCN00sR0FBdEIsRUFBMkI4RCxLQUEzQixFQUFrQ3FmLFNBQWxDO0FBQ0FyZixTQUFLLENBQUNRLElBQU4sR0FBYStsQixZQUFiO0FBQ0gsR0EvMEJzQixDQWkxQnZCOzs7QUFDQXBuQixHQUFDLENBQUN1ZixJQUFGLENBQU87QUFDSCtILGFBQVMsRUFBRSxhQURSO0FBRUhDLFdBQU8sRUFBRSxPQUZOO0FBR0hDLGNBQVUsRUFBRSxPQUhUO0FBSUhDLGFBQVMsRUFBRSxPQUpSO0FBS0hDLGFBQVMsRUFBRSxPQUxSO0FBTUhDLFlBQVEsRUFBRSxPQU5QO0FBT0hDLFFBQUksRUFBRSxLQVBIO0FBUUhDLFlBQVEsRUFBRTtBQVJQLEdBQVAsRUFTRyxVQUFVbFAsQ0FBVixFQUFrQm1QLElBQWxCLEVBQTZCO0FBQzVCOW5CLEtBQUMsQ0FBQ2EsS0FBRixDQUFRNGUsT0FBUixDQUFnQjlHLENBQWhCLElBQXFCO0FBQ2pCZ0gsV0FBSyxFQUFFLGlCQUFZO0FBQ2YzZixTQUFDLENBQUMsSUFBRCxDQUFELENBQVF3RyxFQUFSLENBQVdzaEIsSUFBWCxFQUFpQjluQixDQUFDLENBQUMrbkIsSUFBbkI7QUFDSDtBQUhnQixLQUFyQjtBQUtILEdBZkQ7QUFpQkEsU0FBTy9uQixDQUFQO0FBQ0gsQ0FwMkJELEU7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ2VvSCwyR0FBZjs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7O0NBS0E7O0FBQ0EsSUFBTWhCLE1BQW9CLEdBQUc0aEIsb0VBQVcsQ0FBQ0MsNkNBQUQsQ0FBeEM7QUFFZTdoQixxRUFBZjs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQSxDQUFDLFlBQU07QUFFTCxNQUFLLE9BQVFtRixNQUFELENBQWdCMUosV0FBdkIsS0FBdUMsVUFBNUMsRUFBeUQ7QUFDdkQsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsV0FBU0EsV0FBVCxDQUFzQmhCLEtBQXRCLEVBQXFDcW5CLE1BQXJDLEVBQW1EO0FBQ2pEQSxVQUFNLEdBQUdBLE1BQU0sSUFBSTtBQUFFQyxhQUFPLEVBQUUsS0FBWDtBQUFrQkMsZ0JBQVUsRUFBRSxLQUE5QjtBQUFxQ3JuQixZQUFNLEVBQUVnRTtBQUE3QyxLQUFuQjtBQUNBLFFBQU1zakIsR0FBRyxHQUFHNWtCLFFBQVEsQ0FBQzZrQixXQUFULENBQXNCLGFBQXRCLENBQVo7QUFDQUQsT0FBRyxDQUFDRSxlQUFKLENBQXFCMW5CLEtBQXJCLEVBQTRCcW5CLE1BQU0sQ0FBQ0MsT0FBbkMsRUFBNENELE1BQU0sQ0FBQ0UsVUFBbkQsRUFBK0RGLE1BQU0sQ0FBQ25uQixNQUF0RTtBQUNBLFdBQU9zbkIsR0FBUDtBQUNBOztBQUVGeG1CLGFBQVcsQ0FBQytMLFNBQVosR0FBeUJyQyxNQUFELENBQWdCekQsS0FBaEIsQ0FBc0I4RixTQUE5QztBQUVDckMsUUFBRCxDQUFnQjFKLFdBQWhCLEdBQThCQSxXQUE5QjtBQUNELENBaEJEOztBQWtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQU1BO0FBQ0E7QUFDQTs7QUFZQTs7O0FBR08sSUFBTTRDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLRTs7OztBQWdCQTs7Ozs7O0FBckJGLDJCQTJCdUJXLE9BM0J2QixFQTJCeUN6RSxNQTNCekMsRUEyQnNENm5CLFFBM0J0RCxFQTJCMkY7QUFDdkYsVUFBTXhjLFFBQVEsR0FBRzVHLE9BQU8sQ0FBQ3RGLEVBQVIsQ0FBVzJvQixTQUFYLENBQXFCLElBQXJCLENBQWpCO0FBQ0EsVUFBTS9uQixJQUFJLEdBQUcsSUFBSStELElBQUosQ0FBVXVILFFBQVYsRUFBNkJyTCxNQUE3QixFQUFxQ3lFLE9BQU8sQ0FBQzFFLElBQVIsQ0FBYXVGLE9BQWxELENBQWI7QUFDQXZGLFVBQUksQ0FBQ2IsSUFBTDs7QUFDQSxVQUFJLENBQUN1RixPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDNUIsTUFBckIsSUFBK0I0QixPQUFPLENBQUM1QixNQUFSLENBQWVJLFVBQWYsS0FBOEIsSUFBakUsRUFBdUU7QUFDckUsYUFBS3VELEtBQUwsQ0FBVywwQ0FBWDtBQUNELE9BRkQsTUFFTztBQUNML0IsZUFBTyxDQUFDNUIsTUFBUixDQUFlSSxVQUFmLENBQTBCQyxZQUExQixDQUF1Q21JLFFBQXZDLEVBQWlEd2MsUUFBakQ7QUFDRDs7QUFDRCxhQUFPOW5CLElBQVA7QUFDRDtBQXJDSDs7QUE0Q0U7O0FBRUE7Ozs7Ozs7O0FBUUEsZ0JBQVk4RCxHQUFaLEVBQXNHN0QsTUFBdEcsRUFBbUhzRixPQUFuSCxFQUFzSTtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLDJHQVpwRyxFQVlvRzs7QUFBQSxnSEFYN0YsRUFXNkY7O0FBQ3BJLFFBQUkscUZBQWN6QixHQUFkLENBQUosRUFBd0I7QUFDdEIsV0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBS0EsR0FBTCxHQUFZLENBQUNBLEdBQUQsQ0FBWjtBQUNEOztBQUNELFNBQUs3RCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLc0YsT0FBTCxHQUFlQSxPQUFmO0FBRUEsU0FBSzhILEtBQUw7QUFDRDs7QUFoRUg7QUFBQTtBQUFBLGlDQWtFc0IwSSxJQWxFdEIsRUFrRWdEcFYsSUFsRWhELEVBa0VxRThILFdBbEVyRSxFQWtFMEZsQixNQWxFMUYsRUFrRWdIRSxVQWxFaEgsRUFrRTJJO0FBQ3ZJLFVBQU11Z0IsaUJBQWlCLEdBQUd6UixpRUFBZ0IsQ0FBQzlOLFdBQUQsQ0FBMUM7QUFDQSxVQUFNN0ssT0FBTyxHQUFHb3FCLGlCQUFpQixDQUFDcHFCLE9BQWxDO0FBQ0EsVUFBTTZZLEtBQUssR0FBR3VSLGlCQUFpQixDQUFDdlIsS0FBaEM7QUFDQSxXQUFLaFMsUUFBTCxDQUFjekcsSUFBZCxDQUFtQixJQUFJc0osZ0RBQUosQ0FBYSxJQUFiLEVBQTRCeU8sSUFBNUIsRUFBa0NwVixJQUFsQyxFQUF3Qy9DLE9BQXhDLEVBQWlEMkosTUFBakQsRUFBeURrUCxLQUF6RCxFQUFnRWhQLFVBQWhFLENBQW5CO0FBQ0Q7QUFFRDs7Ozs7QUF6RUY7QUFBQTtBQUFBLDRCQTZFaUI7QUFDYixXQUFLaEQsUUFBTCxHQUFnQixFQUFoQjtBQUVBLFVBQU1rVCxRQUFRLEdBQUcsS0FBSzdULEdBQXRCO0FBQ0EsVUFBSXhCLENBQUo7QUFDQSxVQUFJMmxCLEdBQUo7O0FBQ0EsV0FBSzNsQixDQUFDLEdBQUcsQ0FBSixFQUFPMmxCLEdBQUcsR0FBR3RRLFFBQVEsQ0FBQzdhLE1BQTNCLEVBQW1Dd0YsQ0FBQyxHQUFHMmxCLEdBQXZDLEVBQTRDM2xCLENBQUMsRUFBN0MsRUFBaUQ7QUFDL0MsWUFBSSxDQUFFLEtBQUtpRCxPQUFMLENBQWF5USxrQkFBbkIsRUFBdUM7QUFDckMsZ0JBQU0sSUFBSWxWLEtBQUosQ0FBVSw2QkFBVixDQUFOO0FBQ0Q7O0FBQ0RnVixrRUFBUyxDQUFDLElBQUQsRUFBUTZCLFFBQVEsQ0FBQ3JWLENBQUQsQ0FBaEIsRUFBc0MsS0FBS2lELE9BQUwsQ0FBYXlRLGtCQUFuRCxDQUFUO0FBQ0Q7O0FBRUQsV0FBS3ZSLFFBQUwsQ0FBY3lqQixJQUFkLENBQW1CbmtCLElBQUksQ0FBQ29rQixpQkFBeEI7QUFDRDtBQTNGSDtBQUFBO0FBQUEsNkJBNkZrQnBTLElBN0ZsQixFQTZGa0Q7QUFFOUMsVUFBSXFTLGFBQUo7O0FBQ0EsVUFBSSxLQUFLN2lCLE9BQUwsQ0FBYTZSLFVBQWpCLEVBQTZCO0FBQzNCZ1IscUJBQWEsR0FBRyxLQUFLN2lCLE9BQUwsQ0FBYTZSLFVBQTdCO0FBQ0QsT0FGRCxNQUVPO0FBQ0w7QUFDQWdSLHFCQUFhLEdBQUcsS0FBSzdpQixPQUFMLENBQWEwUixNQUFiLEdBQXNCLEdBQXRDO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDbVIsYUFBTCxFQUFvQjtBQUNsQixjQUFNLElBQUl0bkIsS0FBSixDQUFVLG9CQUFWLENBQU47QUFDRDtBQUVEOzs7QUFDQSxVQUFJUSxLQUFLLEdBQUcsS0FBS2lFLE9BQUwsQ0FBYTJSLGNBQWIsQ0FBNEJtUixPQUE1QixDQUFxQ3RTLElBQUksQ0FBQ3ZSLFFBQTFDLENBQUgsT0FBVDtBQUNBLFVBQU1tSixVQUFVLEdBQUdvSSxJQUFJLENBQUNwSSxVQUF4QjtBQUNBLFVBQU0yYSxTQUFTLEdBQUcsRUFBbEI7QUFDQSxVQUFNblIsV0FBVyxHQUFHLEtBQUs1UixPQUFMLENBQWE0UixXQUFqQyxDQWxCOEMsQ0FvQjlDOztBQUNBLFVBQUl4SixVQUFVLElBQUksS0FBS3BJLE9BQUwsQ0FBYWtKLE9BQS9CLEVBQXdDO0FBQ3RDLGFBQUssSUFBSW5NLENBQUMsR0FBRyxDQUFSLEVBQVcybEIsR0FBRyxHQUFHdGEsVUFBVSxDQUFDN1EsTUFBakMsRUFBeUN3RixDQUFDLEdBQUcybEIsR0FBN0MsRUFBa0QzbEIsQ0FBQyxFQUFuRCxFQUF1RDtBQUNyRCxjQUFJa0MsUUFBUSxHQUFHLElBQWY7QUFDQSxjQUFJK0MsTUFBTSxHQUFHLElBQWI7QUFDQSxjQUFJRSxVQUFVLEdBQUcsSUFBakI7QUFDQSxjQUFNbUcsU0FBUyxHQUFHRCxVQUFVLENBQUNyTCxDQUFELENBQTVCLENBSnFELENBS3JEOztBQUNBLGNBQUlzTCxTQUFTLENBQUM1TyxJQUFWLENBQWVqQixPQUFmLENBQXVCcXFCLGFBQXZCLE1BQTBDLENBQTlDLEVBQWlEO0FBQy9DNWpCLG9CQUFRLEdBQUdvSixTQUFTLENBQUM1TyxJQUFWLENBQWVtTCxLQUFmLENBQXFCaWUsYUFBYSxDQUFDdHJCLE1BQW5DLENBQVgsQ0FEK0MsQ0FFL0M7O0FBQ0EsZ0JBQUksS0FBS3lJLE9BQUwsQ0FBYWtKLE9BQWIsQ0FBcUJuUyxjQUFyQixDQUFvQ2tJLFFBQXBDLENBQUosRUFBbUQ7QUFDakQrQyxvQkFBTSxHQUFHLEtBQUtoQyxPQUFMLENBQWFrSixPQUFiLENBQXFCakssUUFBckIsQ0FBVDtBQUNEOztBQUVELGdCQUFJK0MsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDbkI7QUFDQTtBQUNBLG1CQUFLLElBQUk5SixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMFosV0FBVyxDQUFDcmEsTUFBaEMsRUFBd0NXLENBQUMsRUFBekMsRUFBNkM7QUFDM0NnSywwQkFBVSxHQUFHMFAsV0FBVyxDQUFDMVosQ0FBRCxDQUF4QjtBQUNBLG9CQUFNb00sTUFBTSxHQUFHLElBQUlDLE1BQUosWUFBZXJDLFVBQVUsQ0FBQ3NDLE9BQVgsQ0FBbUIsS0FBbkIsRUFBMEIsSUFBMUIsQ0FBZixPQUFmOztBQUNBLG9CQUFJRixNQUFNLENBQUNHLElBQVAsQ0FBWXhGLFFBQVosQ0FBSixFQUEyQjtBQUN6QitDLHdCQUFNLEdBQUcsS0FBS2hDLE9BQUwsQ0FBYWtKLE9BQWIsQ0FBcUJoSCxVQUFyQixDQUFUO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsZ0JBQUlGLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ25CLGtCQUFJLEtBQUtoQyxPQUFMLENBQWFrSixPQUFiLENBQXFCblMsY0FBckIsQ0FBb0MsR0FBcEMsQ0FBSixFQUE4QztBQUM1Q2lMLHNCQUFNLEdBQUcsS0FBS2hDLE9BQUwsQ0FBYWtKLE9BQWIsQ0FBcUIsR0FBckIsQ0FBVDtBQUNBaEgsMEJBQVUsR0FBRyxHQUFiO0FBQ0QsZUFIRCxNQUdPO0FBQ0xGLHNCQUFNLEdBQUdzRiwwQ0FBSSxDQUFDMGIsY0FBZDtBQUNEO0FBQ0YsYUEzQjhDLENBNkIvQztBQUNBOzs7QUFDQSxnQkFBSWhoQixNQUFNLENBQUNqRyxLQUFYLEVBQWtCO0FBQ2hCLG1CQUFLOFUsWUFBTCxDQUFrQkwsSUFBbEIsRUFBd0J2UixRQUF4QixFQUFrQ29KLFNBQVMsQ0FBQ25SLEtBQTVDLEVBQW1EOEssTUFBbkQsRUFBMkRFLFVBQTNEOztBQUNBLGtCQUFJc08sSUFBSSxDQUFDOVUsZUFBTCxJQUF3QixLQUFLc0UsT0FBTCxDQUFhOFIsc0JBQXpDLEVBQWlFO0FBQy9EdEIsb0JBQUksQ0FBQzlVLGVBQUwsQ0FBcUIyTSxTQUFTLENBQUM1TyxJQUEvQjtBQUNEOztBQUNELHFCQUFPLElBQVA7QUFDRDs7QUFFRHNwQixxQkFBUyxDQUFDdHFCLElBQVYsQ0FBZTtBQUFDMEUsa0JBQUksRUFBRWtMLFNBQVA7QUFBa0JyRyxvQkFBTSxFQUFOQSxNQUFsQjtBQUEwQi9DLHNCQUFRLEVBQVJBLFFBQTFCO0FBQW9DaUQsd0JBQVUsRUFBVkE7QUFBcEMsYUFBZjtBQUNEO0FBQ0Y7O0FBRUQsYUFBSyxJQUFJbkYsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR2dtQixTQUFTLENBQUN4ckIsTUFBOUIsRUFBc0N3RixFQUFDLEVBQXZDLEVBQTJDO0FBQ3pDLGNBQU1rbUIsUUFBUSxHQUFHRixTQUFTLENBQUNobUIsRUFBRCxDQUExQjtBQUNBLGVBQUs4VCxZQUFMLENBQWtCTCxJQUFsQixFQUF3QnlTLFFBQVEsQ0FBQ2hrQixRQUFqQyxFQUEyQ2drQixRQUFRLENBQUM5bEIsSUFBVCxDQUFjakcsS0FBekQsRUFBZ0UrckIsUUFBUSxDQUFDamhCLE1BQXpFLEVBQWlGaWhCLFFBQVEsQ0FBQy9nQixVQUExRjs7QUFDQSxjQUFJc08sSUFBSSxDQUFDOVUsZUFBTCxJQUF3QixLQUFLc0UsT0FBTCxDQUFhOFIsc0JBQXpDLEVBQWlFO0FBQy9EdEIsZ0JBQUksQ0FBQzlVLGVBQUwsQ0FBcUJ1bkIsUUFBUSxDQUFDOWxCLElBQVQsQ0FBYzFELElBQW5DO0FBQ0Q7QUFDRjtBQUNGLE9BOUU2QyxDQWdGOUM7OztBQUNBLFVBQUksQ0FBQ3NDLEtBQUwsRUFBWTtBQUNWLFlBQU1rRCxTQUFRLEdBQUd1UixJQUFJLENBQUN2UixRQUFMLENBQWNxTyxXQUFkLEVBQWpCOztBQUNBLFlBQUksS0FBS3ROLE9BQUwsQ0FBYXVSLFVBQWIsSUFBMkIsS0FBS3ZSLE9BQUwsQ0FBYXVSLFVBQWIsQ0FBd0J0UyxTQUF4QixDQUEzQixJQUFnRSxDQUFDdVIsSUFBSSxDQUFDMFMsTUFBMUUsRUFBa0Y7QUFDaEYsY0FBTUMsU0FBUyxHQUFJLEtBQUtuakIsT0FBTCxDQUFhdVIsVUFBYixDQUF3QnRTLFNBQXhCLENBQW5CLENBRGdGLENBRWhGOztBQUNBLGNBQUksQ0FBQ3FHLE1BQU0sQ0FBQ0MsY0FBWixFQUE0QjtBQUMxQi9HLGdCQUFJLENBQUMwQyxLQUFMLHFDQUF3Q2pDLFNBQXhDO0FBQ0EsZ0JBQU1zVCxTQUFTLEdBQUcsSUFBSTRRLFNBQUosQ0FBYzNTLElBQWQsRUFBb0I7QUFDcEM0UyxzQkFBUSxFQUFFLElBRDBCO0FBRXBDM29CLGtCQUFJLEVBQUU7QUFGOEIsYUFBcEIsQ0FBbEI7QUFJQSxpQkFBSzRvQixhQUFMLENBQW1CNXFCLElBQW5CLENBQXdCOFosU0FBeEI7QUFDRCxXQVBELE1BT087QUFDTC9ULGdCQUFJLENBQUMwQyxLQUFMLCtCQUFrQ2pDLFNBQWxDLGtDQURLLENBRUw7QUFDQTs7QUFDQSxnQkFBSXNHLGNBQWMsQ0FBQ3pNLEdBQWYsQ0FBbUJtRyxTQUFuQixLQUFpQ3VSLElBQUksQ0FBQy9ILFdBQUwsS0FBcUJELFdBQXJCLElBQW9DZ0ksSUFBSSxDQUFDL0gsV0FBTCxLQUFxQjZhLGtCQUE5RixFQUFtSDtBQUNqSDlrQixrQkFBSSxDQUFDMEMsS0FBTCxrQ0FBNENzUCxJQUFJLENBQUMvSCxXQUFqRDtBQUNELGFBRkQsTUFFTztBQUNMLGtCQUFJO0FBQ0ZsRCw4QkFBYyxDQUFDZ2UsTUFBZixDQUFzQnRrQixTQUF0QixFQUFnQ2trQixTQUFoQyxFQURFLENBRUY7QUFDQTs7QUFDQSxvQkFBTTVRLFVBQVMsR0FBR2hOLGNBQWMsQ0FBQ3pNLEdBQWYsQ0FBbUJtRyxTQUFuQixDQUFsQjs7QUFDQXNULDBCQUFTLENBQUNsTixPQUFWLEdBQW9CO0FBQ2xCK2QsMEJBQVEsRUFBRSxLQURRO0FBRWxCM29CLHNCQUFJLEVBQUU7QUFGWSxpQkFBcEI7QUFJRCxlQVRELENBU0UsT0FBTytGLEtBQVAsRUFBYztBQUNkQyx1QkFBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQsRUFEYyxDQUVkOztBQUNBLG9CQUFNK1IsV0FBUyxHQUFHLElBQUk0USxTQUFKLENBQWMzUyxJQUFkLEVBQW9CO0FBQ3BDNFMsMEJBQVEsRUFBRSxJQUQwQjtBQUVwQzNvQixzQkFBSSxFQUFFO0FBRjhCLGlCQUFwQixDQUFsQjs7QUFJQSxxQkFBSzRvQixhQUFMLENBQW1CNXFCLElBQW5CLENBQXdCOFosV0FBeEI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUR4VyxlQUFLLEdBQUcsSUFBUjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0EsS0FBUDtBQUNEO0FBRUQ7Ozs7QUE3TkY7QUFBQTtBQUFBLDJCQWdPZ0I7QUFDWixXQUFLbUQsUUFBTCxDQUFjbEgsT0FBZCxDQUFzQixVQUFDbUgsT0FBRCxFQUFhO0FBQ2pDQSxlQUFPLENBQUN2RixJQUFSO0FBQ0QsT0FGRDtBQUdEO0FBRUQ7Ozs7QUF0T0Y7QUFBQTtBQUFBLDZCQXlPa0I7QUFDZCxVQUFJLHFGQUFjLEtBQUtzRixRQUFuQixDQUFKLEVBQWtDO0FBQ2hDLGFBQUtBLFFBQUwsQ0FBY2xILE9BQWQsQ0FBc0IsVUFBQ21ILE9BQUQsRUFBYTtBQUNqQ0EsaUJBQU8sQ0FBQ2pGLE1BQVI7QUFDRCxTQUZEO0FBR0EsYUFBS21wQixhQUFMLENBQW1CcnJCLE9BQW5CLENBQTJCLFVBQUN3ckIsWUFBRCxFQUFrQjtBQUMzQ0Esc0JBQVksQ0FBQy9kLDRCQUFiO0FBQ0QsU0FGRDtBQUdELE9BUmEsQ0FVZDs7QUFDRDtBQUVEOzs7O0FBdFBGO0FBQUE7QUFBQSwyQkF5UGdCO0FBQ1osV0FBS3ZHLFFBQUwsQ0FBY2xILE9BQWQsQ0FBc0IsVUFBQ21ILE9BQUQsRUFBYTtBQUNqQyxZQUFJQSxPQUFPLENBQUMvRyxJQUFaLEVBQWtCO0FBQ2hCK0csaUJBQU8sQ0FBQy9HLElBQVI7QUFDRDtBQUNGLE9BSkQ7QUFLRDtBQUVEOzs7O0FBalFGO0FBQUE7QUFBQSw4QkFvUW1CO0FBQ2YsV0FBSzhHLFFBQUwsQ0FBY2xILE9BQWQsQ0FBc0IsVUFBQ21ILE9BQUQsRUFBYTtBQUNqQyxZQUFLQSxPQUFELENBQXFCNkMsTUFBckIsSUFBK0I3QyxPQUFPLENBQUNoRCxPQUF2QyxJQUFvRGdELE9BQUQsQ0FBcUI2QyxNQUF0QixDQUE4Qy9GLFNBQXBHLEVBQStHO0FBQzdHa0QsaUJBQU8sQ0FBQ2hELE9BQVI7QUFDRDtBQUNGLE9BSkQ7QUFLRDtBQUVEOzs7OztBQTVRRjtBQUFBO0FBQUEsNkJBZ1JrQztBQUFBOztBQUFBLFVBQWxCekIsTUFBa0IsdUVBQUosRUFBSTs7QUFDOUIsd0ZBQVlBLE1BQVosRUFBb0IxQyxPQUFwQixDQUE0QixVQUFDcUgsR0FBRCxFQUFTO0FBQ25DLGFBQUksQ0FBQzNFLE1BQUwsQ0FBWTJFLEdBQVosSUFBbUIzRSxNQUFNLENBQUMyRSxHQUFELENBQXpCO0FBQ0QsT0FGRDs7QUFJQSxXQUFLSCxRQUFMLENBQWNsSCxPQUFkLENBQXNCLFVBQUNtSCxPQUFELEVBQWE7QUFDakMsWUFBS0EsT0FBRCxDQUFxQkMsTUFBekIsRUFBaUM7QUFDOUJELGlCQUFELENBQXFCQyxNQUFyQixDQUE0QjFFLE1BQTVCO0FBQ0Q7QUFDRixPQUpEO0FBS0Q7QUExUkg7O0FBQUE7QUFBQTs7cUZBQWE4RCxJLFdBQ1cyQyxtRUFBSyxDQUFDLFdBQUQsQzs7cUZBRGhCM0MsSSx1QkFHdUIsOEQ7O3FGQUh2QkEsSSx3QkFReUM7QUFDbEQvRSxNQUFJLEVBQUUsZUFENEM7QUFFbERVLFNBQU8sRUFBRSxpQkFBQ3FXLElBQUQsRUFBcUJ0WixLQUFyQixFQUF1QztBQUM5Q3NaLFFBQUksQ0FBQzNWLElBQUwsR0FBYTNELEtBQUssSUFBSSxJQUFWLEdBQWtCQSxLQUFsQixHQUEwQixFQUF0QztBQUNEO0FBSmlELEM7O3FGQVJ6Q3NILEksdUJBZXVCLFVBQUM2SyxDQUFELEVBQWFDLENBQWIsRUFBNEI7QUFDNUQsTUFBTW1hLFNBQVMsR0FBSXBhLENBQUQsQ0FBZXJILE1BQWYsR0FBMkJxSCxDQUFELENBQWVySCxNQUFoQixDQUF3Q3JJLFFBQXhDLElBQW9ELENBQTdFLEdBQWtGLENBQXBHO0FBQ0EsTUFBTStwQixTQUFTLEdBQUlwYSxDQUFELENBQWV0SCxNQUFmLEdBQTJCc0gsQ0FBRCxDQUFldEgsTUFBaEIsQ0FBd0NySSxRQUF4QyxJQUFvRCxDQUE3RSxHQUFrRixDQUFwRztBQUNBLFNBQU8rcEIsU0FBUyxHQUFHRCxTQUFuQjtBQUNELEM7Ozs7Ozs7Ozs7O0FDMUNILFVBQVUsbUJBQU8sQ0FBQywwRkFBZ0Q7O0FBRWxFLDJCQUEyQixrQ0FBa0MsY0FBYztBQUMzRSwwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQU9BO0FBbUJPLElBQU1FLG1CQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx3QkFVa0M7QUFDOUIsYUFBTyxDQUFDLG9CQUFELEVBQXVCLElBQXZCLENBQVA7QUFDRDtBQVpIOztBQWlDRSwrQkFBWXZlLE9BQVosRUFBbUM7QUFBQTs7QUFBQTs7QUFDakMsdU9BQU1BLE9BQU47O0FBRGlDOztBQUFBOztBQUFBLDBNQXpCZCxJQXlCYzs7QUFBQSxvTkFuQkosSUFBSW9OLDZEQUFKLENBQW9CLG1CQUFwQixDQW1CSTs7QUFBQSx1TUFqQmpCclIsMkRBQUssQ0FBQyxlQUFld2lCLG1CQUFtQixDQUFDcmlCLE9BQXBDLENBaUJZOztBQUFBLHVNQWZUO0FBQ3hCc2lCLHVCQUFpQixFQUFFOWtCLFNBREs7QUFFeEJ1Z0IsV0FBSyxFQUFFLFFBRmlCO0FBR3hCd0UsVUFBSSxFQUFFLE1BQUtBLElBSGE7QUFJeEJDLFlBQU0sRUFBRSxNQUFLQSxNQUpXO0FBS3hCOXNCLFFBQUUsRUFBRThILFNBTG9CO0FBTXhCa0IsYUFBTyxFQUFFO0FBQ1ArZSxnQkFBUSxFQUFFLE1BREg7QUFFUGdGLDJCQUFtQixFQUFFLElBRmQ7QUFHUEMsNkJBQXFCLEVBQUUsSUFIaEI7QUFJUEMsMkJBQW1CLEVBQUUsQ0FBQyxHQUFELENBSmQ7QUFLUEMsNEJBQW9CLEVBQUU7QUFMZjtBQU5lLEtBZVM7O0FBRWpDLFVBQUtoakIsS0FBTCxDQUFXLGFBQVg7O0FBQ0EsVUFBS2lqQixJQUFMLENBQVVSLG1CQUFtQixDQUFDaGUsa0JBQTlCOztBQUNBLFVBQUtuRyxLQUFMLEdBQWE4RixNQUFNLENBQUM4ZSxnQkFBUCxDQUF3QixNQUFLdnFCLEVBQTdCLENBQWI7O0FBQ0EsVUFBS3dxQixrQkFBTCxDQUF3QjlqQixFQUF4QixDQUEyQixRQUEzQixFQUFxQyxVQUFDK2pCLFFBQUQsRUFBc0I7QUFDekQsWUFBS3BqQixLQUFMLENBQVcsaUJBQVgsRUFBOEJvakIsUUFBOUI7O0FBQ0EsVUFBSUEsUUFBUSxLQUFLLE1BQUtsbUIsS0FBTCxDQUFXcEgsRUFBNUIsRUFBZ0M7QUFDOUIsY0FBSzhzQixNQUFMO0FBQ0Q7QUFDRixLQUxEOztBQU1BeGUsVUFBTSxDQUFDbkssZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsTUFBS29wQixRQUFMLENBQWMzcUIsSUFBZCxvR0FBbEMsRUFBNEQsS0FBNUQ7O0FBQ0EsVUFBSzRxQixvQkFBTDs7QUFaaUM7QUFhbEM7O0FBOUNIO0FBQUE7QUFBQSw2QkFnRGtCbkYsS0FoRGxCLEVBZ0RnQztBQUM1QixXQUFLamhCLEtBQUwsQ0FBV2loQixLQUFYLEdBQW1CQSxLQUFuQjtBQUNEO0FBbERIO0FBQUE7QUFBQSwrQkFvRG9CO0FBQ2hCLGFBQU8sS0FBS2poQixLQUFMLENBQVdpaEIsS0FBbEI7QUFDRDtBQXRESDtBQUFBO0FBQUEsMkJBd0RnQjtBQUNaLFdBQUtqaEIsS0FBTCxDQUFXaWhCLEtBQVgsR0FBbUIsUUFBbkI7QUFDQSxXQUFLb0YsYUFBTDtBQUNEO0FBM0RIO0FBQUE7QUFBQSwyQkE2RGdCO0FBQ1osVUFBTUMsRUFBRSxHQUFHbnFCLG1EQUFLLENBQUNvcUIscUJBQU4sR0FBOEJwTyxDQUF6Qzs7QUFDQSxVQUFJbU8sRUFBRSxHQUFHLEtBQUt0bUIsS0FBTCxDQUFXNEIsT0FBWCxDQUFtQmtrQixvQkFBNUIsRUFBa0Q7QUFDaEQsYUFBSzlsQixLQUFMLENBQVdpaEIsS0FBWCxHQUFtQixhQUFhLEtBQUtqaEIsS0FBTCxDQUFXNEIsT0FBWCxDQUFtQitlLFFBQW5EO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBSzNnQixLQUFMLENBQVdpaEIsS0FBWCxHQUFtQixVQUFVLEtBQUtqaEIsS0FBTCxDQUFXNEIsT0FBWCxDQUFtQitlLFFBQWhEO0FBQ0Q7O0FBQ0QsV0FBSzBGLGFBQUw7QUFDRDtBQXJFSDtBQUFBO0FBQUEsNkJBdUVrQjtBQUNkLFVBQUksS0FBS3JtQixLQUFMLENBQVdpaEIsS0FBWCxLQUFxQixRQUF6QixFQUFtQztBQUNqQyxhQUFLdUYsSUFBTDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtmLElBQUw7QUFDRDtBQUNGO0FBN0VIO0FBQUE7QUFBQSwrQkErRXVCO0FBQ25CLFdBQUtnQixrQkFBTDtBQUNBLFdBQUtockIsRUFBTCxDQUFRNEIsWUFBUixDQUFxQixPQUFyQixFQUE4Qiw2QkFBOUI7QUFDRDtBQWxGSDtBQUFBO0FBQUEsMkJBb0ZtQnFwQixRQXBGbkIsRUFvRm9DO0FBQ2hDLFdBQUtELGtCQUFMLENBQXdCLEVBQXhCLEVBQTRCQyxRQUE1QjtBQUNBLFdBQUtqckIsRUFBTCxDQUFRNEIsWUFBUixDQUFxQixPQUFyQixFQUE4Qix5QkFBOUI7QUFDRDtBQXZGSDtBQUFBO0FBQUEsOEJBeUZzQnFwQixRQXpGdEIsRUF5RnVDO0FBQ25DLFdBQUtELGtCQUFMLENBQXdCLEVBQXhCLEVBQTRCQyxRQUE1QjtBQUNBLFdBQUtqckIsRUFBTCxDQUFRNEIsWUFBUixDQUFxQixPQUFyQixFQUE4Qix5QkFBOUI7QUFDRDtBQTVGSDtBQUFBO0FBQUEsb0NBOEY0QjtBQUN4QixXQUFLeUYsS0FBTCxDQUFXLG9CQUFvQixLQUFLOUMsS0FBTCxDQUFXaWhCLEtBQTFDOztBQUNBLGNBQVEsS0FBS2poQixLQUFMLENBQVdpaEIsS0FBbkI7QUFDRSxhQUFLLFdBQUw7QUFDQSxhQUFLLFlBQUw7QUFDRSxlQUFLMEYsTUFBTCxDQUFZLEtBQUszbUIsS0FBTCxDQUFXaWhCLEtBQXZCO0FBQ0E7O0FBQ0EsYUFBSyxjQUFMO0FBQ0EsYUFBSyxlQUFMO0FBQ0UsZUFBSzJGLFNBQUwsQ0FBZSxLQUFLNW1CLEtBQUwsQ0FBV2loQixLQUExQjtBQUNBOztBQUNKO0FBQ0UsZUFBSzRGLFFBQUw7QUFDQTtBQVhKOztBQWFBLFdBQUtaLGtCQUFMLENBQXdCOUssT0FBeEIsQ0FBZ0MsU0FBaEMsRUFBMkMsS0FBS25iLEtBQUwsQ0FBV2loQixLQUF0RDtBQUNEO0FBOUdIO0FBQUE7QUFBQSwyQ0FvSG1DO0FBQy9CLFVBQUksS0FBS2poQixLQUFMLENBQVc0QixPQUFYLENBQW1CaWtCLG1CQUFuQixDQUF1Q25CLE9BQXZDLENBQWdEeGQsTUFBTSxDQUFDOFAsUUFBUCxDQUFnQkssUUFBaEUsQ0FBSixTQUErRTtBQUM3RSxlQUFPLEtBQUtvTyxJQUFMLEVBQVA7QUFDRDs7QUFDRCxVQUFNYSxFQUFFLEdBQUducUIsbURBQUssQ0FBQ29xQixxQkFBTixHQUE4QnBPLENBQXpDOztBQUNBLFVBQUltTyxFQUFFLEdBQUcsS0FBS3RtQixLQUFMLENBQVc0QixPQUFYLENBQW1CZ2tCLHFCQUE1QixFQUFtRDtBQUNqRCxlQUFPLEtBQUtILElBQUwsRUFBUDtBQUNEOztBQUNELFVBQUlhLEVBQUUsR0FBRyxLQUFLdG1CLEtBQUwsQ0FBVzRCLE9BQVgsQ0FBbUJna0IscUJBQTVCLEVBQW1EO0FBQ2pELGVBQU8sS0FBS0gsSUFBTCxFQUFQO0FBQ0Q7O0FBQ0QsVUFBSWEsRUFBRSxHQUFHLEtBQUt0bUIsS0FBTCxDQUFXNEIsT0FBWCxDQUFtQitqQixtQkFBNUIsRUFBaUQ7QUFDL0MsZUFBTyxLQUFLYSxJQUFMLEVBQVA7QUFDRDtBQUNGO0FBbElIO0FBQUE7QUFBQSwrQkFvSXVCO0FBQ25CLFdBQUtKLG9CQUFMO0FBQ0Q7QUF0SUg7QUFBQTtBQUFBLG1DQXdJMkJ0ckIsUUF4STNCLEVBd0k4QztBQUMxQ0EsY0FBUSxHQUFHQSxRQUFRLElBQUksS0FBS2tGLEtBQUwsQ0FBV3dsQixpQkFBbEM7QUFDQSxXQUFLMWlCLEtBQUwsQ0FBVyxnQkFBWCxFQUE2QmhJLFFBQTdCOztBQUNBLFVBQUlBLFFBQUosRUFBYztBQUNaLGFBQUtnc0IsVUFBTCxHQUFrQjFuQixRQUFRLENBQUMybkIsZ0JBQVQsQ0FBOENqc0IsUUFBOUMsQ0FBbEI7QUFDRDs7QUFDRCxXQUFLMnJCLGtCQUFMO0FBQ0EsV0FBS0osYUFBTDtBQUNEO0FBaEpIO0FBQUE7QUFBQSx1Q0FrSitCamxCLEtBbEovQixFQWtKK0M0bEIsSUFsSi9DLEVBa0o2RDtBQUN6RCxVQUFJLEtBQUtGLFVBQVQsRUFBcUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDbkIsa0hBQXdCLEtBQUtBLFVBQTdCLDRHQUF5QztBQUFBLGdCQUE5QkcsU0FBOEI7QUFDdkMsaUJBQUtDLGlCQUFMLENBQXVCRCxTQUF2QixFQUFrQzdsQixLQUFsQyxFQUF5QzRsQixJQUF6QztBQUNEO0FBSGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJcEI7QUFDRjtBQUVEOzs7Ozs7O0FBMUpGO0FBQUE7QUFBQSxzQ0FnSzhCQyxTQWhLOUIsRUFnSytGO0FBQUEsVUFBbEM3bEIsS0FBa0MsdUVBQWxCLEVBQWtCO0FBQUEsVUFBZDRsQixJQUFjOztBQUMzRixVQUFJQSxJQUFKLEVBQVU7QUFDUixZQUFNdEYsS0FBSyxHQUFHLEtBQUtBLEtBQW5CO0FBQ0EsWUFBTXlGLFFBQVEsR0FBR2pnQixNQUFNLENBQUM4ZSxnQkFBUCxDQUF3QmlCLFNBQXhCLENBQWpCOztBQUNBLGdCQUFRRCxJQUFSO0FBQ0UsZUFBSyxXQUFMO0FBQ0Usb0JBQVFHLFFBQVEsQ0FBQ3hHLFFBQWpCO0FBQ0UsbUJBQUssT0FBTDtBQUNFdmYscUJBQUssSUFBSSxVQUFVc2dCLEtBQVYsR0FBa0IsSUFBM0I7QUFDQTs7QUFDRjtBQUNFdGdCLHFCQUFLLElBQUksaUJBQWlCc2dCLEtBQWpCLEdBQXlCLElBQWxDO0FBQ0E7QUFOSjs7QUFRQTs7QUFDRixlQUFLLFlBQUw7QUFDRSxvQkFBUXlGLFFBQVEsQ0FBQ3hHLFFBQWpCO0FBQ0UsbUJBQUssT0FBTDtBQUNFdmYscUJBQUssSUFBSSxXQUFXc2dCLEtBQVgsR0FBbUIsSUFBNUI7QUFDQTs7QUFDRjtBQUNFdGdCLHFCQUFLLElBQUksa0JBQWtCc2dCLEtBQWxCLEdBQTBCLElBQW5DO0FBQ0E7QUFOSjs7QUFRQTs7QUFDRjtBQUNFO0FBdEJKO0FBd0JEOztBQUNELGFBQU91RixTQUFTLENBQUM1cEIsWUFBVixDQUF1QixPQUF2Qix1QkFBOEMsS0FBSytELEtBQUwsQ0FBV2dtQixVQUF6RCxjQUF1RWhtQixLQUF2RSxFQUFQO0FBQ0Q7QUE5TEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNHQWdNdUJtRyxrQkFoTXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFpTVcsd05BQVdBLGtCQUFYLEVBQ045QixJQURNLENBQ0QsVUFBQ3BKLElBQUQsRUFBVTtBQUNkLHlCQUFPQSxJQUFQO0FBQ0QsaUJBSE0sQ0FqTVg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdNSSxxQkFBS3lHLEtBQUwsQ0FBVyxZQUFYOztBQXhNSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNE1JLHFCQUFLQSxLQUFMLENBQVcsV0FBWCxFQUF3QixLQUFLOUMsS0FBN0I7QUFDQSxxQkFBS3FtQixhQUFMOztBQTdNSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FnTmlDO0FBQzdCLGFBQU8sRUFBUDtBQUNEO0FBbE5IO0FBQUE7QUFBQSxtREFvTjJDNWQsYUFwTjNDLEVBb05rRTlMLFFBcE5sRSxFQW9OaUY3QixRQXBOakYsRUFvTmdHMkMsU0FwTmhHLEVBb04wSDtBQUN0SCx3UEFBcUNnTCxhQUFyQyxFQUFvRDlMLFFBQXBELEVBQThEN0IsUUFBOUQsRUFBd0UyQyxTQUF4RTs7QUFDQSxVQUFJZ0wsYUFBYSxLQUFLLG1CQUF0QixFQUEyQztBQUN6QyxhQUFLNGUsY0FBTCxDQUFvQnZzQixRQUFwQjtBQUNEO0FBQ0YsS0F6TkgsQ0EyTkU7O0FBM05GO0FBQUE7QUFBQSwyQ0E0Tm1DO0FBQy9CO0FBQ0Q7QUE5Tkg7QUFBQTtBQUFBLCtCQWdPdUI7QUFDbkI7QUFDQSxVQUFJLEtBQUtXLEVBQUwsQ0FBUTZyQixhQUFSLEVBQUosRUFBNkI7QUFDM0IsYUFBS3hrQixLQUFMLENBQVcsc0RBQVg7QUFDQSxlQUFPLElBQVA7QUFDRCxPQUhELE1BR087QUFDTCxZQUFNNkUsUUFBUSxHQUFHNGYsa0VBQVcsQ0FBQyxLQUFLdm5CLEtBQU4sQ0FBNUI7QUFDQSxhQUFLOEMsS0FBTCxDQUFXLGNBQVgsRUFBMkI2RSxRQUEzQjtBQUNBLGVBQU9BLFFBQVA7QUFDRDtBQUNGO0FBMU9IO0FBQUE7QUFBQSx3QkFnSHdCO0FBQ3BCLGFBQU8sS0FBS2xNLEVBQUwsQ0FBUStyQixXQUFmO0FBQ0Q7QUFsSEg7O0FBQUE7QUFBQSxFQUF5Q3pnQix1REFBekM7O3NGQUFhd2UsbUIsYUFFcUIsYTs7Ozs7Ozs7Ozs7QUM1QmxDLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBTUE7QUFXTyxJQUFNa0Msd0JBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHdCQU1rQztBQUM5QixhQUFPLENBQUMsV0FBRCxDQUFQO0FBQ0Q7QUFSSDs7QUFxQkUsb0NBQVl6Z0IsT0FBWixFQUFtQztBQUFBOztBQUFBOztBQUNqQyw0T0FBTUEsT0FBTjs7QUFEaUMseU1BakJkLElBaUJjOztBQUFBLHNNQVhqQmpFLDJEQUFLLENBQUMsZUFBZTBrQix3QkFBd0IsQ0FBQ3ZrQixPQUF6QyxDQVdZOztBQUFBLGdOQVRQLElBQUlrUiw2REFBSixDQUFvQixtQkFBcEIsQ0FTTzs7QUFBQSxzTUFQVDtBQUN4QjhSLGNBQVEsRUFBRXhsQixTQURjO0FBRXhCZ2xCLFlBQU0sRUFBRSxNQUFLQSxNQUZXO0FBR3hCekUsV0FBSyxFQUFFLFdBSGlCO0FBSXhCeUcsY0FBUSxFQUFFO0FBSmMsS0FPUzs7QUFFakMsVUFBSzVrQixLQUFMLENBQVcsYUFBWDs7QUFDQSxVQUFLaWpCLElBQUwsQ0FBVTBCLHdCQUF3QixDQUFDbGdCLGtCQUFuQzs7QUFDQSxVQUFLb2dCLGVBQUwsQ0FBcUJ4bEIsRUFBckIsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBQzhlLEtBQUQsRUFBa0I7QUFDbkQsWUFBS2poQixLQUFMLENBQVdpaEIsS0FBWCxHQUFtQkEsS0FBbkI7QUFDQSxZQUFLamhCLEtBQUwsQ0FBVzBuQixRQUFYLEdBQXNCekcsS0FBSyxLQUFLLFFBQWhDO0FBQ0QsS0FIRDs7QUFKaUM7QUFRbEM7O0FBN0JIO0FBQUE7QUFBQSw2QkErQmtCO0FBQ2QsV0FBS25lLEtBQUwsQ0FBVyxRQUFYO0FBQ0EsV0FBSzZrQixlQUFMLENBQXFCeE0sT0FBckIsQ0FBNkIsUUFBN0IsRUFBdUMsS0FBS25iLEtBQUwsQ0FBV2ttQixRQUFsRDtBQUNEO0FBbENIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzR0FvQ3VCM2Usa0JBcEN2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBcUNXLDZOQUFXQSxrQkFBWCxFQUNOOUIsSUFETSxDQUNELFVBQUNwSixJQUFELEVBQVU7QUFDZCx5QkFBT0EsSUFBUDtBQUNELGlCQUhNLENBckNYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0Q0kscUJBQUt5RyxLQUFMLENBQVcsWUFBWDs7QUE1Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdESSxxQkFBS0EsS0FBTCxDQUFXLFdBQVgsRUFBd0IsS0FBSzlDLEtBQTdCOztBQWhESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FtRGlDO0FBQzdCLGFBQU8sQ0FBQyxVQUFELENBQVA7QUFDRDtBQXJESDtBQUFBO0FBQUEsNkNBdURxQ3lJLGFBdkRyQyxFQXVENEQ5TCxRQXZENUQsRUF1RDJFN0IsUUF2RDNFLEVBdUQwRjJDLFNBdkQxRixFQXVEb0g7QUFDaEgsdVBBQStCZ0wsYUFBL0IsRUFBOEM5TCxRQUE5QyxFQUF3RDdCLFFBQXhELEVBQWtFMkMsU0FBbEU7QUFDRCxLQXpESCxDQTJERTs7QUEzREY7QUFBQTtBQUFBLDJDQTREbUM7QUFDL0I7QUFDRDtBQTlESDtBQUFBO0FBQUEsK0JBZ0V1QjtBQUNuQjtBQUNBLFVBQUksS0FBS2hDLEVBQUwsQ0FBUTZyQixhQUFSLEVBQUosRUFBNkI7QUFDM0IsYUFBS3hrQixLQUFMLENBQVcsc0RBQVg7QUFDQSxlQUFPLElBQVA7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLQSxLQUFMLENBQVcsY0FBWCxFQUEyQjZFLHlFQUEzQjtBQUNBLGVBQU9BLHlFQUFQO0FBQ0Q7QUFDRjtBQXpFSDs7QUFBQTtBQUFBLEVBQThDWix1REFBOUM7O3FGQUFhMGdCLHdCLGFBRXFCLG1COzs7Ozs7Ozs7Ozs7QUNuQmxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUVPLElBQU1HLGFBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHdCQU1rQztBQUM5QixhQUFPLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsTUFBNUIsRUFBb0MsS0FBcEMsRUFBMkMsT0FBM0MsRUFBb0QsV0FBcEQsQ0FBUDtBQUNEO0FBUkg7O0FBZ0JFLHlCQUFZNWdCLE9BQVosRUFBbUM7QUFBQTs7QUFBQTs7QUFDakMsaU9BQU1BLE9BQU47O0FBRGlDLHNNQVpqQmpFLDRDQUFLLENBQUMsZUFBZTZrQixhQUFhLENBQUMxa0IsT0FBOUIsQ0FZWTs7QUFBQSxzTUFOWixFQU1ZOztBQUFBLHlNQUpkLEtBSWM7O0FBQUE7O0FBRWpDLFVBQUt4SCxHQUFMLEdBQVdDLDZDQUFDLENBQUMsTUFBS0YsRUFBTixDQUFaOztBQUNBLFVBQUtDLEdBQUwsQ0FDQ3FELElBREQsQ0FDTSxhQUROLEVBQ3FCLE1BRHJCLEVBRUNBLElBRkQsQ0FFTSxNQUZOLEVBRWMsS0FGZCxFQUdDbEQsUUFIRCxDQUdVLFNBSFYsRUFIaUMsQ0FRakM7QUFDQTs7O0FBQ0EsVUFBSzhOLHdCQUFMLENBQThCLFdBQTlCLEVBQTJDLElBQTNDLEVBQWlELEtBQWpELEVBQXdELElBQXhEOztBQUVBLFVBQUtvYyxJQUFMLENBQVU2QixhQUFhLENBQUNyZ0Isa0JBQXhCOztBQVppQztBQWFsQzs7QUE3Qkg7QUFBQTtBQUFBLDZDQStCa0NsTSxJQS9CbEMsRUErQmdEc0IsUUEvQmhELEVBK0IrRDdCLFFBL0IvRCxFQStCOEUyQyxTQS9COUUsRUErQndHO0FBQ3BHLFdBQUtxRixLQUFMLENBQVcsMEJBQVgsRUFBdUN6SCxJQUF2QyxFQUE2Q3NCLFFBQTdDLEVBQXVEN0IsUUFBdkQsRUFBaUUyQyxTQUFqRSxFQURvRyxDQUVwRzs7QUFDQSw0T0FBK0JwQyxJQUEvQixFQUFxQ3NCLFFBQXJDLEVBQStDN0IsUUFBL0MsRUFBeUQyQyxTQUF6RDs7QUFFQSxVQUFJcEMsSUFBSSxLQUFLLEtBQWIsRUFBb0I7QUFDbEIsYUFBS0ssR0FBTCxDQUNDbXNCLElBREQsQ0FDTS9zQixRQUROO0FBRUQ7O0FBRUQsVUFBSU8sSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDcEIsYUFBS0ssR0FBTCxDQUNDb3NCLEdBREQsQ0FDSztBQUFDQyxlQUFLLEVBQUVqdEI7QUFBUixTQURMLEVBRUNtQixXQUZELENBRWMsVUFBQzhELEtBQUQsRUFBUTNCLFNBQVIsRUFBc0I7QUFDbEMsaUJBQU8sQ0FBQ0EsU0FBUyxDQUFDMkcsS0FBVixDQUFpQixrQkFBakIsS0FBd0MsRUFBekMsRUFBNkNuRyxJQUE3QyxDQUFrRCxHQUFsRCxDQUFQO0FBQ0QsU0FKRCxFQUtDL0MsUUFMRCxpQkFLbUJmLFFBTG5CO0FBTUQ7O0FBRUQsVUFBSU8sSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkIsWUFBTW1TLElBQUksR0FBRzFTLFFBQWI7QUFDQSxhQUFLZ0ksS0FBTCxDQUFXLFVBQVgsRUFBdUIsS0FBS3BILEdBQTVCO0FBQ0EsYUFBS0EsR0FBTCxDQUNDb3NCLEdBREQsQ0FDSztBQUFDbEcsZ0JBQU0sRUFBRXBVLElBQVQ7QUFBZWtVLGVBQUssRUFBRWxVO0FBQXRCLFNBREwsRUFFQ3ZSLFdBRkQsQ0FFYSxVQUFDOEQsS0FBRCxFQUFRM0IsU0FBUixFQUFzQjtBQUNqQyxpQkFBTyxDQUFDQSxTQUFTLENBQUMyRyxLQUFWLENBQWlCLGlCQUFqQixLQUF1QyxFQUF4QyxFQUE0Q25HLElBQTVDLENBQWlELEdBQWpELENBQVA7QUFDRCxTQUpELEVBS0MvQyxRQUxELGdCQUtrQjJSLElBTGxCO0FBTUQ7O0FBRUQsVUFBSW5TLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ3BCLFlBQU1xbUIsS0FBSyxHQUFHNW1CLFFBQWQ7QUFDQSxhQUFLZ0ksS0FBTCxDQUFXLFdBQVgsRUFBd0IsS0FBS3BILEdBQTdCO0FBQ0EsYUFBS0EsR0FBTCxDQUNDb3NCLEdBREQsQ0FDSztBQUFDcEcsZUFBSyxFQUFMQTtBQUFELFNBREwsRUFFQ3psQixXQUZELENBRWEsVUFBQzhELEtBQUQsRUFBUTNCLFNBQVIsRUFBc0I7QUFDakMsaUJBQU8sQ0FBQ0EsU0FBUyxDQUFDMkcsS0FBVixDQUFpQixrQkFBakIsS0FBd0MsRUFBekMsRUFBNkNuRyxJQUE3QyxDQUFrRCxHQUFsRCxDQUFQO0FBQ0QsU0FKRCxFQUtDL0MsUUFMRCxpQkFLbUI2bEIsS0FMbkI7QUFNRDs7QUFFRCxVQUFJcm1CLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCLFlBQU11bUIsTUFBTSxHQUFHOW1CLFFBQWY7QUFDQSxhQUFLZ0ksS0FBTCxDQUFXLFlBQVgsRUFBeUIsS0FBS3BILEdBQTlCO0FBQ0EsYUFBS0EsR0FBTCxDQUNDb3NCLEdBREQsQ0FDSztBQUFDbEcsZ0JBQU0sRUFBTkE7QUFBRCxTQURMLEVBRUMzbEIsV0FGRCxDQUVhLFVBQUM4RCxLQUFELEVBQVEzQixTQUFSLEVBQXNCO0FBQ2pDLGlCQUFPLENBQUNBLFNBQVMsQ0FBQzJHLEtBQVYsQ0FBaUIsbUJBQWpCLEtBQXlDLEVBQTFDLEVBQThDbkcsSUFBOUMsQ0FBbUQsR0FBbkQsQ0FBUDtBQUNELFNBSkQsRUFLQy9DLFFBTEQsa0JBS29CK2xCLE1BTHBCO0FBTUQ7O0FBRUQsVUFBSXZtQixJQUFJLEtBQUssV0FBYixFQUEwQjtBQUN4QixZQUFNMnNCLFNBQVMsR0FBR2x0QixRQUFsQjtBQUNBLFlBQUltdEIsV0FBVyx1QkFBZ0JELFNBQWhCLENBQWY7O0FBQ0EsWUFBSUEsU0FBUyxLQUFLLE1BQWxCLEVBQTJCO0FBQ3pCQyxxQkFBVyxJQUFJLGFBQWY7QUFDRCxTQUZELE1BRU8sSUFBS0QsU0FBUyxLQUFLLFVBQWQsSUFBNEJBLFNBQVMsS0FBSyxTQUExQyxJQUF1REEsU0FBUyxLQUFLLFVBQXJFLElBQW1GQSxTQUFTLEtBQUssU0FBdEcsRUFBa0g7QUFDdkhDLHFCQUFXLElBQUksYUFBZjtBQUNELFNBRk0sTUFFQSxJQUFLRCxTQUFTLEtBQUssS0FBZCxJQUF1QkEsU0FBUyxLQUFLLElBQTFDLEVBQWlEO0FBQ3REQyxxQkFBVyxJQUFJLFdBQWY7QUFDRCxTQUZNLE1BRUEsSUFBS0QsU0FBUyxLQUFLLFdBQWQsSUFBNkJBLFNBQVMsS0FBSyxVQUEzQyxJQUF5REEsU0FBUyxLQUFLLFdBQXZFLElBQXNGQSxTQUFTLEtBQUssVUFBekcsRUFBcUg7QUFDMUhDLHFCQUFXLElBQUksWUFBZjtBQUNELFNBRk0sTUFFQSxJQUFLRCxTQUFTLEtBQUssT0FBbkIsRUFBNkI7QUFDbENDLHFCQUFXLElBQUksWUFBZjtBQUNELFNBRk0sTUFFQSxJQUFLRCxTQUFTLEtBQUssY0FBZCxJQUFnQ0EsU0FBUyxLQUFLLFlBQTlDLElBQThEQSxTQUFTLEtBQUssY0FBNUUsSUFBOEZBLFNBQVMsS0FBSyxZQUFqSCxFQUFnSTtBQUNySUMscUJBQVcsSUFBSSxhQUFmO0FBQ0QsU0FGTSxNQUVBLElBQUtELFNBQVMsS0FBSyxRQUFkLElBQTBCQSxTQUFTLEtBQUssTUFBN0MsRUFBc0Q7QUFDM0RDLHFCQUFXLElBQUksYUFBZjtBQUNELFNBRk0sTUFFQSxJQUFLRCxTQUFTLEtBQUssYUFBZCxJQUErQkEsU0FBUyxLQUFLLFdBQTdDLElBQTREQSxTQUFTLEtBQUssYUFBMUUsSUFBMkZBLFNBQVMsS0FBSyxXQUE5RyxFQUE0SDtBQUNqSUMscUJBQVcsSUFBSSxhQUFmO0FBQ0Q7O0FBQ0QsYUFBS3ZzQixHQUFMLENBQ0Nvc0IsR0FERCxDQUNLO0FBQUNsRyxnQkFBTSxFQUFFOW1CLFFBQVQ7QUFBbUI0bUIsZUFBSyxFQUFFNW1CO0FBQTFCLFNBREwsRUFFQ21CLFdBRkQsQ0FFYSxVQUFDOEQsS0FBRCxFQUFRM0IsU0FBUixFQUFzQjtBQUNqQyxpQkFBTyxDQUFDQSxTQUFTLENBQUMyRyxLQUFWLENBQWlCLHNCQUFqQixLQUE0QyxFQUE3QyxFQUFpRG5HLElBQWpELENBQXNELEdBQXRELENBQVA7QUFDRCxTQUpELEVBS0MzQyxXQUxELENBS2EsVUFBQzhELEtBQUQsRUFBUTNCLFNBQVIsRUFBc0I7QUFDakMsaUJBQU8sQ0FBQ0EsU0FBUyxDQUFDMkcsS0FBVixDQUFpQixtQkFBakIsS0FBeUMsRUFBMUMsRUFBOENuRyxJQUE5QyxDQUFtRCxHQUFuRCxDQUFQO0FBQ0QsU0FQRCxFQVFDL0MsUUFSRCxDQVFVb3NCLFdBUlY7QUFTRDtBQUNGO0FBakhIO0FBQUE7QUFBQSwrQkFtSHVCO0FBQ25CLGFBQU8sSUFBUDtBQUNEO0FBckhIOztBQUFBO0FBQUEsRUFBbUNsaEIsdURBQW5DOztxRkFBYTZnQixhLGFBRXFCLFM7Ozs7Ozs7Ozs7O0FDTmxDLHdhQUF3YSxXQUFXLCtUQUErVCxjQUFjLG9WQUFvVixpQkFBaUIsMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcm1DO0FBQ0E7QUFDQTs7QUEwQkE7OztBQUdPLElBQU1NLHdCQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx3QkFNa0M7QUFDOUIsYUFBTyxDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLE9BQXJCLEVBQThCLFVBQTlCLENBQVA7QUFDRDtBQVJIOztBQWNFLG9DQUFZbGhCLE9BQVosRUFBbUM7QUFBQTs7QUFBQTs7QUFDakMsNE9BQU1BLE9BQU47O0FBRGlDLHNNQVZqQmpFLDRDQUFLLENBQUMsZUFBZW1sQix3QkFBd0IsQ0FBQ2hsQixPQUF6QyxDQVVZOztBQUFBLHNNQUpULEVBSVM7O0FBRWpDLFVBQUs2aUIsSUFBTCxDQUFVbUMsd0JBQXdCLENBQUMzZ0Isa0JBQW5DOztBQUZpQztBQUdsQzs7QUFqQkg7QUFBQTtBQUFBLDZDQW1Ca0NsTSxJQW5CbEMsRUFtQmdEc0IsUUFuQmhELEVBbUIrRDdCLFFBbkIvRCxFQW1COEUyQyxTQW5COUUsRUFtQndHO0FBQ3BHO0FBQ0EsdVBBQStCcEMsSUFBL0IsRUFBcUNzQixRQUFyQyxFQUErQzdCLFFBQS9DLEVBQXlEMkMsU0FBekQsRUFGb0csQ0FJcEc7OztBQUNBLFVBQUlwQyxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNuQixhQUFLMkUsS0FBTCxDQUFXbW9CLFFBQVgsR0FBc0JqaEIsTUFBTSxDQUFDcEgsS0FBUCxDQUFhc29CLE1BQWIsQ0FBb0JDLFNBQXBCLENBQThCdnRCLFFBQTlCLENBQXRCO0FBQ0EsYUFBS2dJLEtBQUwsQ0FBVyxVQUFYLEVBQXVCLEtBQUs5QyxLQUFMLENBQVdtb0IsUUFBbEM7QUFDRDtBQUNGO0FBNUJIO0FBQUE7QUFBQSx5Q0E4QmlDO0FBQzdCLGFBQU8sQ0FBQyxVQUFELENBQVA7QUFDRDtBQUVEOzs7O0FBbENGO0FBQUE7QUFBQSwrQkFxQ3VCO0FBQ25CLFVBQUksS0FBSzFzQixFQUFMLENBQVE2ckIsYUFBUixFQUFKLEVBQTZCO0FBQzNCLGVBQU8sSUFBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8zZix3RUFBUDtBQUNEO0FBQ0Y7QUEzQ0g7O0FBQUE7QUFBQSxFQUE4Q1osc0RBQTlDOztxRkFBYW1oQix3QixhQUVxQixrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0MzQmxDOztDQUVBOztDQUVBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNSSxJQUFiLEdBTUUsZ0JBQWM7QUFBQTs7QUFBQSxxR0FKQyxJQUFJcGYsaURBQUosRUFJRDs7QUFBQSwyR0FGTyxJQUFJa0wsNERBQUosQ0FBb0IsTUFBcEIsQ0FFUDs7QUFDWixPQUFLbkwsSUFBTCxDQUFVZ0ssTUFBVixDQUFpQnlCLE1BQWpCLENBQXdCbEssdURBQXhCO0FBQ0EsT0FBS3ZCLElBQUwsQ0FBVWdLLE1BQVYsQ0FBaUJ5QixNQUFqQixDQUF3QjZULHNEQUF4QixFQUZZLENBR1o7QUFDQTs7QUFDQSxPQUFLdGYsSUFBTCxDQUFVZ0ssTUFBVixDQUFpQnlCLE1BQWpCLENBQXdCOFQscURBQXhCLEVBTFksQ0FPWjs7QUFDQSxPQUFLdmYsSUFBTCxDQUFVZ0ssTUFBVixDQUFpQnlCLE1BQWpCLENBQXdCO0FBQ3RCdkIsY0FBVSxFQUFFc1Ysd0NBRFUsQ0FFdEI7O0FBRnNCLEdBQXhCO0FBS0FwbUIsU0FBTyxDQUFDRCxLQUFSLENBQWMsUUFBZDtBQUNBLE9BQUtzbUIsVUFBTCxDQUFnQnZtQixFQUFoQixDQUFtQixjQUFuQixFQUFtQyxZQUFNO0FBQ3ZDRSxXQUFPLENBQUNELEtBQVIsQ0FBYyxjQUFkO0FBQ0F1bUIsd0RBQUE7QUFDRCxHQUhELEVBZFksQ0FtQlo7O0FBQ0EsT0FBSzFmLElBQUwsQ0FBVXpOLElBQVYsQ0FBZXVHLDJEQUFNLENBQUMsTUFBRCxDQUFOLENBQWUsQ0FBZixDQUFmLEVBQWtDbUYsTUFBTSxDQUFDcEgsS0FBekM7QUFDRCxDQTNCSDtBQThCQWlDLDJEQUFNLENBQUMsVUFBQ3BHLENBQUQsRUFBcUI7QUFDMUIsTUFBTWl0QixJQUFJLEdBQUcsSUFBSU4sSUFBSixFQUFiO0FBQ0QsQ0FGSyxDQUFOLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBLGUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9ycy5tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXG5pbXBvcnQgeyBJQWRhcHRlciwgQWRhcHRlckZ1bmN0aW9uLCBJUmVmLCBJT2JzZXJ2ZXJTeW5jQ2FsbGJhY2ssIElSVkFycmF5IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIEFkYXB0ZXIgaW1wbGVtZW50cyBJQWRhcHRlciB7XG5cbiAgcHVibGljIHN0YXRpYyBBUlJBWV9NRVRIT0RTID0gW1xuICAgICdwdXNoJyxcbiAgICAncG9wJyxcbiAgICAnc2hpZnQnLFxuICAgICd1bnNoaWZ0JyxcbiAgICAnc29ydCcsXG4gICAgJ3JldmVyc2UnLFxuICAgICdzcGxpY2UnLFxuICBdO1xuXG4gIHB1YmxpYyBjb3VudGVyOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgd2Vha21hcDogYW55ID0ge307XG5cbiAgcHVibGljIHdlYWtSZWZlcmVuY2Uob2JqOiBhbnkpIHtcbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eSgnX19ydicpKSB7XG4gICAgICBjb25zdCBpZCA9IHRoaXMuY291bnRlcisrO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAnX19ydicsIHtcbiAgICAgICAgdmFsdWU6IGlkLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLndlYWttYXBbb2JqLl9fcnZdKSB7XG4gICAgICB0aGlzLndlYWttYXBbb2JqLl9fcnZdID0ge1xuICAgICAgICBjYWxsYmFja3M6IHt9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy53ZWFrbWFwW29iai5fX3J2XTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhbnVwV2Vha1JlZmVyZW5jZShyZWY6IElSZWYsIGlkOiBudW1iZXIpIHtcbiAgICBpZiAoIU9iamVjdC5rZXlzKHJlZi5jYWxsYmFja3MpLmxlbmd0aCkge1xuICAgICAgaWYgKCEocmVmLnBvaW50ZXJzICYmIE9iamVjdC5rZXlzKHJlZi5wb2ludGVycykubGVuZ3RoKSkge1xuICAgICAgICBkZWxldGUgdGhpcy53ZWFrbWFwW2lkXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3R1YkZ1bmN0aW9uKG9iajogYW55LCBmbjogc3RyaW5nKSB7XG4gICAgY29uc3Qgb3JpZ2luYWwgPSBvYmpbZm5dO1xuICAgIGNvbnN0IG1hcCA9IHRoaXMud2Vha1JlZmVyZW5jZShvYmopO1xuICAgIGNvbnN0IHdlYWttYXAgPSB0aGlzLndlYWttYXA7XG5cbiAgICBvYmpbZm5dID0gKC4uLmFyZ3M6IGFueVtdKTogQWRhcHRlckZ1bmN0aW9uID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gb3JpZ2luYWwuYXBwbHkob2JqLCBhcmdzKTtcblxuICAgICAgT2JqZWN0LmtleXMobWFwLnBvaW50ZXJzKS5mb3JFYWNoKChyKSA9PiB7XG4gICAgICAgIGNvbnN0IGsgPSBtYXAucG9pbnRlcnNbcl07XG5cbiAgICAgICAgaWYgKHdlYWttYXBbcl0pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh3ZWFrbWFwW3JdLmNhbGxiYWNrc1trXSkpIHtcbiAgICAgICAgICAgIHdlYWttYXBbcl0uY2FsbGJhY2tzW2tdLmZvckVhY2goKGNhbGxiYWNrOiBJT2JzZXJ2ZXJTeW5jQ2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgICAgY2FsbGJhY2suc3luYygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH07XG4gIH1cblxuICBwdWJsaWMgb2JzZXJ2ZU11dGF0aW9ucyhvYmo6IGFueSwgcmVmOiBzdHJpbmcsIGtleXBhdGg6IHN0cmluZykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIGNvbnN0IG1hcCA9IHRoaXMud2Vha1JlZmVyZW5jZShvYmopO1xuXG4gICAgICBpZiAoIW1hcC5wb2ludGVycykge1xuICAgICAgICBtYXAucG9pbnRlcnMgPSB7fTtcblxuICAgICAgICBBZGFwdGVyLkFSUkFZX01FVEhPRFMuZm9yRWFjaCgoZm4pID0+IHtcbiAgICAgICAgICB0aGlzLnN0dWJGdW5jdGlvbihvYmosIGZuKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbWFwLnBvaW50ZXJzW3JlZl0pIHtcbiAgICAgICAgbWFwLnBvaW50ZXJzW3JlZl0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hcC5wb2ludGVyc1tyZWZdLmluZGV4T2Yoa2V5cGF0aCkgPT09IC0xKSB7XG4gICAgICAgIG1hcC5wb2ludGVyc1tyZWZdLnB1c2goa2V5cGF0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHVub2JzZXJ2ZU11dGF0aW9ucyhvYmo6IElSVkFycmF5LCByZWY6IHN0cmluZywga2V5cGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSAmJiAob2JqLl9fcnYgIT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IG1hcCA9IHRoaXMud2Vha21hcFtvYmouX19ydl07XG5cbiAgICAgIGlmIChtYXApIHtcbiAgICAgICAgY29uc3QgcG9pbnRlcnMgPSBtYXAucG9pbnRlcnNbcmVmXTtcblxuICAgICAgICBpZiAocG9pbnRlcnMpIHtcbiAgICAgICAgICBjb25zdCBpZHggPSBwb2ludGVycy5pbmRleE9mKGtleXBhdGgpO1xuXG4gICAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgICAgICBwb2ludGVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIXBvaW50ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIG1hcC5wb2ludGVyc1tyZWZdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY2xlYW51cFdlYWtSZWZlcmVuY2UobWFwLCBvYmouX19ydik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb2JzZXJ2ZShvYmo6IGFueSwga2V5cGF0aDogc3RyaW5nLCBjYWxsYmFjazogSU9ic2VydmVyU3luY0NhbGxiYWNrKSB7XG4gICAgbGV0IHZhbHVlOiBhbnk7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy53ZWFrUmVmZXJlbmNlKG9iaikuY2FsbGJhY2tzO1xuXG4gICAgaWYgKCFjYWxsYmFja3Nba2V5cGF0aF0pIHtcbiAgICAgIGNhbGxiYWNrc1trZXlwYXRoXSA9IFtdO1xuICAgICAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXlwYXRoKTtcblxuICAgICAgaWYgKCFkZXNjIHx8ICEoZGVzYy5nZXQgfHwgZGVzYy5zZXQgfHwgIWRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgICB2YWx1ZSA9IG9ialtrZXlwYXRoXTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXlwYXRoLCB7XG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBzZXQ6IChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICB0aGlzLnVub2JzZXJ2ZU11dGF0aW9ucyh2YWx1ZSwgb2JqLl9fcnYsIGtleXBhdGgpO1xuICAgICAgICAgICAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICBjb25zdCBtYXAgPSB0aGlzLndlYWttYXBbb2JqLl9fcnZdO1xuXG4gICAgICAgICAgICAgIGlmIChtYXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBfY2FsbGJhY2tzID0gbWFwLmNhbGxiYWNrc1trZXlwYXRoXTtcblxuICAgICAgICAgICAgICAgIGlmIChfY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgICBfY2FsbGJhY2tzLmZvckVhY2goKGNiOiBJT2JzZXJ2ZXJTeW5jQ2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2Iuc3luYygpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlTXV0YXRpb25zKG5ld1ZhbHVlLCBvYmouX19ydiwga2V5cGF0aCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2FsbGJhY2tzW2tleXBhdGhdLmluZGV4T2YoY2FsbGJhY2spID09PSAtMSkge1xuICAgICAgY2FsbGJhY2tzW2tleXBhdGhdLnB1c2goY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHRoaXMub2JzZXJ2ZU11dGF0aW9ucyhvYmpba2V5cGF0aF0sIG9iai5fX3J2LCBrZXlwYXRoKTtcbiAgfVxuXG4gIHB1YmxpYyB1bm9ic2VydmUob2JqOiBhbnksIGtleXBhdGg6IHN0cmluZywgY2FsbGJhY2s6IElPYnNlcnZlclN5bmNDYWxsYmFjaykge1xuICAgIGNvbnN0IG1hcCA9IHRoaXMud2Vha21hcFtvYmouX19ydl07XG5cbiAgICBpZiAobWFwKSB7XG4gICAgICBjb25zdCBjYWxsYmFja3MgPSBtYXAuY2FsbGJhY2tzW2tleXBhdGhdO1xuXG4gICAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAgICAgICBpZiAoIWNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBtYXAuY2FsbGJhY2tzW2tleXBhdGhdO1xuICAgICAgICAgICAgdGhpcy51bm9ic2VydmVNdXRhdGlvbnMob2JqW2tleXBhdGhdLCBvYmouX19ydiwga2V5cGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhbnVwV2Vha1JlZmVyZW5jZShtYXAsIG9iai5fX3J2KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0KG9iajogYW55LCBrZXlwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gb2JqW2tleXBhdGhdO1xuICB9XG5cbiAgcHVibGljIHNldChvYmo6IGFueSwga2V5cGF0aDogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgb2JqW2tleXBhdGhdID0gdmFsdWU7XG4gIH1cbn1cblxuY29uc3QgYWRhcHRlciA9IG5ldyBBZGFwdGVyKCk7XG5leHBvcnQgeyBhZGFwdGVyIH07XG4iLCJpbXBvcnQgeyBKUXVlcnkgYXMgJCB9IGZyb20gJy4uL3ZlbmRvcnMnO1xuaW1wb3J0IHsgSUJpbmRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIGFuaW1hdGUte2NsYXNzfVxuICogQWRkIC8gcmVtb3ZlIGFuaW1hdGlvbiBjbGFzcyB3aXRoIHN0YXJ0IGFuZCBkb25lIGFmZml4XG4gKi9cbmV4cG9ydCBjb25zdCBhbmltYXRlU3RhckJpbmRlcjogSUJpbmRlcjxib29sZWFuPiA9IHtcbiAgbmFtZTogJ2FuaW1hdGUtKicsXG4gIGZ1bmN0aW9uOiB0cnVlLFxuICBwcmlvcml0eTogMTAwMCxcblxuICBiaW5kKGVsKSB7XG4gICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgY29uc3QgYW5pbWF0ZUNsYXNzTmFtZSA9ICh0aGlzIGFzIGFueSkuYXJnc1swXTtcbiAgICAkZWxcbiAgICAuYWRkQ2xhc3MoYW5pbWF0ZUNsYXNzTmFtZSk7XG4gIH0sXG5cbiAgdW5iaW5kKGVsOiBIVE1MRWxlbWVudCkge1xuICAgIC8vXG4gIH0sXG5cbiAgcm91dGluZShlbDogSFRNTEVsZW1lbnQsIHN0YXJ0OiBib29sZWFuKSB7XG4gICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgY29uc3QgYW5pbWF0ZUNsYXNzTmFtZSA9ICh0aGlzIGFzIGFueSkuYXJnc1swXTtcbiAgICBpZiAoc3RhcnQpIHtcbiAgICAgICRlbFxuICAgICAgLmFkZENsYXNzKGFuaW1hdGVDbGFzc05hbWUgKyAnLXN0YXJ0JylcbiAgICAgIC5yZW1vdmVDbGFzcyhhbmltYXRlQ2xhc3NOYW1lICsgJy1kb25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRlbFxuICAgICAgLnJlbW92ZUNsYXNzKGFuaW1hdGVDbGFzc05hbWUgKyAnLXN0YXJ0JylcbiAgICAgIC5hZGRDbGFzcyhhbmltYXRlQ2xhc3NOYW1lICsgJy1kb25lJyk7XG4gICAgfVxuICB9LFxufTtcbiIsImltcG9ydCB7IElCaW5kZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBc3NpZ24ge1xuICBrZXk6IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbn1cblxuLyoqXG4gKiBBc3NpZ24gYSB2YWx1ZSBpbiB5b3VyIG1vZGVsLCB2YWx1ZSBtdXN0IGJlIGEgb2JqZWN0XG4gKiBleHBlcmltZW50YWwsIHBsZWFzZSBURVNUTUVcbiAqL1xuZXhwb3J0IGNvbnN0IGFzc2lnbkJpbmRlcjogSUJpbmRlcjxJQXNzaWduPiA9IHtcbiAgbmFtZTogJ2Fzc2lnbicsXG4gIHJvdXRpbmUoZWw6IEhUTUxFbGVtZW50LCBvYmo6IGFueSkge1xuICAgIFV0aWxzLmV4dGVuZChmYWxzZSwgdGhpcy52aWV3Lm1vZGVscywgb2JqKTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBJQmluZGVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5leHBvcnQgaW50ZXJmYWNlIElCaW5kZXJBdHRyaWJ1dGVDaGFuZ2VkRXZlbnQge1xuICBkZXRhaWw6IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb2xkVmFsdWU6IHN0cmluZztcbiAgICBuZXdWYWx1ZTogc3RyaW5nO1xuICAgIG5hbWVzcGFjZTogbnVsbCxcbiAgfTtcbn1cblxuLyoqXG4gKiBFdmVudCBoYW5kbGVyIHRvIGxpc3RlIGZvciBwdWJsaXNoIGJpbmRlciBldmVudCBmb3IgdHdvLXdheS1iaW5kaW5nIGluIHdlYiBjb21wb25lbnRzXG4gKi9cbmNvbnN0IHB1Ymxpc2hCaW5kZXJDaGFuZ2VFdmVudEhhbmRsZXIgPSBmdW5jdGlvbih0aGlzOiBhbnksIGV2ZW50OiBFdmVudCkge1xuICBjb25zdCBkYXRhID0gKCBldmVudCBhcyBDdXN0b21FdmVudCApLmRldGFpbDtcbiAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLm9ic2VydmVyLnZhbHVlKCk7XG4gIGlmIChvbGRWYWx1ZSAhPT0gZGF0YS5uZXdWYWx1ZSkge1xuICAgIC8vIFRPRE8gdGhpcyBvdmVyd3JpdGVzIGFsc28gdGhlIF9ydiBjb3VudGVyXG4gICAgdGhpcy5vYnNlcnZlci5zZXRWYWx1ZShkYXRhLm5ld1ZhbHVlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBhdHRyaWJ1dGUgb24gdGhlIGVsZW1lbnQuIElmIG5vIGJpbmRlciBhYm92ZSBpcyBtYXRjaGVkIGl0IHdpbGwgZmFsbFxuICogYmFjayB0byB1c2luZyB0aGlzIGJpbmRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHN0YXJCaW5kZXI6IElCaW5kZXI8c3RyaW5nPiA9IHtcbiAgbmFtZTogJyonLFxuICBiaW5kKGVsKSB7XG4gICAgLy8gTGlzdGVuIGZvciBjaGFuZ2VzIGZyb20gd2ViIGNvbXBvbmVudFxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3B1Ymxpc2gtYmluZGVyLWNoYW5nZTonICsgdGhpcy50eXBlLCBwdWJsaXNoQmluZGVyQ2hhbmdlRXZlbnRIYW5kbGVyLmJpbmQodGhpcykpO1xuICB9LFxuXG4gIHVuYmluZChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICBkZWxldGUgdGhpcy5jdXN0b21EYXRhO1xuICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHVibGlzaC1iaW5kZXItY2hhbmdlJywgcHVibGlzaEJpbmRlckNoYW5nZUV2ZW50SGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICByb3V0aW5lKGVsOiBIVE1MRWxlbWVudCwgbmV3VmFsdWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy50eXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhblxcJ3Qgc2V0IGF0dHJpYnV0ZSBvZiAnICsgdGhpcy50eXBlKTtcbiAgICB9XG5cbiAgICBjb25zdCBvbGRWYWx1ZSA9IGVsLmdldEF0dHJpYnV0ZSh0aGlzLnR5cGUpO1xuXG4gICAgaWYgKG5ld1ZhbHVlICE9IG51bGwpIHtcbiAgICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKHRoaXMudHlwZSwgbmV3VmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUodGhpcy50eXBlKTtcbiAgICB9XG5cbiAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAvLyBGYWxsYmFjayBmb3IgTXV0YXRpb25PYnNlcnZlciBhbmQgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrOiBUcmlnZ2VyIGV2ZW50IHRvIGNhdGNoIHRoZW0gaW4gd2ViIGNvbXBvbmVudHMgdG8gY2FsbCB0aGUgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIG1ldGhvZFxuICAgICAgZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2JpbmRlci1jaGFuZ2VkJywgeyBkZXRhaWw6IHtcbiAgICAgICAgbmFtZTogdGhpcy50eXBlLFxuICAgICAgICBvbGRWYWx1ZSxcbiAgICAgICAgbmV3VmFsdWUsXG4gICAgICAgIG5hbWVzcGFjZTogbnVsbCwgLy8gVE9ET1xuICAgICAgfX0gYXMgSUJpbmRlckF0dHJpYnV0ZUNoYW5nZWRFdmVudCkpO1xuICAgIH1cbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBJQmluZGVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFzc2lnbiB7XG4gIGtleTogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xufVxuXG4vKipcbiAqIEJsb2NrcyB0aGUgYmluZGluZyBmb3IgdGhlIGN1cnJlbnQgZWxlbWVudCBhbmQgaGlzIGNoaWxkc1xuICovXG5leHBvcnQgY29uc3QgYmxvY2tCaW5kZXI6IElCaW5kZXI8SUFzc2lnbj4gPSB7XG4gIG5hbWU6ICdibG9jaycsXG4gIGJsb2NrOiB0cnVlLFxuICByb3V0aW5lKGVsOiBIVE1MRWxlbWVudCkgey8qKi99LFxufTtcbiIsImltcG9ydCB7IElCaW5kZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbHMnO1xuXG4vKipcbiAqIGNoZWNrZWRcbiAqIENoZWNrcyBhIGNoZWNrYm94IG9yIHJhZGlvIGlucHV0IHdoZW4gdGhlIHZhbHVlIGlzIHRydWUuIEFsc28gc2V0cyB0aGUgbW9kZWxcbiAqIHByb3BlcnR5IHdoZW4gdGhlIGlucHV0IGlzIGNoZWNrZWQgb3IgdW5jaGVja2VkICh0d28td2F5IGJpbmRlcikuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGVja2VkQmluZGVyOiBJQmluZGVyPHN0cmluZz4gPSB7XG4gIG5hbWU6ICdjaGVja2VkJyxcbiAgcHVibGlzaGVzOiB0cnVlLFxuICBwcmlvcml0eTogMjAwMCxcblxuICBiaW5kKGVsKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5jdXN0b21EYXRhID0ge307XG4gICAgaWYgKCF0aGlzLmN1c3RvbURhdGEuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY3VzdG9tRGF0YS5jYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgc2VsZi5wdWJsaXNoKCk7XG4gICAgICB9O1xuICAgIH1cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmN1c3RvbURhdGEuY2FsbGJhY2spO1xuICB9LFxuXG4gIHVuYmluZChlbCkge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY3VzdG9tRGF0YS5jYWxsYmFjayk7XG4gIH0sXG5cbiAgcm91dGluZShlbDogSFRNTEVsZW1lbnQsIHZhbHVlKSB7XG4gICAgaWYgKChlbCBhcyBIVE1MSW5wdXRFbGVtZW50KS50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAoZWwgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA9IFV0aWxzLmdldFN0cmluZygoZWwgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpID09PSBVdGlscy5nZXRTdHJpbmcodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAoZWwgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA9ICEhdmFsdWU7XG4gICAgfVxuICB9LFxufTtcbiIsImltcG9ydCB7IElCaW5kZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjbGFzcy0qXG4gKiBjbGFzcy1bY2xhc3NuYW1lXVxuICpcbiAqIEFkZHMgYSBjbGFzcyAod2hhdGV2ZXIgdmFsdWUgaXMgaW4gcGxhY2Ugb2YgW2NsYXNzbmFtZV0pIG9uIHRoZSBlbGVtZW50XG4gKiB3aGVuIHRoZSB2YWx1ZSBldmFsdWF0ZXMgdG8gdHJ1ZSBhbmQgcmVtb3ZlcyB0aGF0IGNsYXNzIGlmIHRoZSB2YWx1ZVxuICogZXZhbHVhdGVzIHRvIGZhbHNlLlxuICovXG5leHBvcnQgY29uc3QgY2xhc3NTdGFyQmluZGVyOiBJQmluZGVyPGJvb2xlYW4+ID0ge1xuICBuYW1lOiAnY2xhc3MtKicsXG4gIHJvdXRpbmUoZWw6IEhUTUxFbGVtZW50LCB2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmFyZ3MgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYXJncyBpcyBudWxsJyk7XG4gICAgfVxuICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpLmZpbHRlcigoZWxlKSA9PiBlbGUgIT09ICcnKTtcbiAgICBjb25zdCBhcmcgPSAodGhpcy5hcmdzWzBdIGFzIHN0cmluZykudHJpbSgpO1xuICAgIGNvbnN0IGlkeCA9IGNsYXNzTGlzdC5pbmRleE9mKGFyZyk7XG4gICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBlbC5jbGFzc05hbWUgKz0gYCAke2FyZ31gO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXZhbHVlKSB7XG4gICAgICBlbC5jbGFzc05hbWUgPSBjbGFzc0xpc3QuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpZHgpLmpvaW4oJyAnKTtcbiAgICB9XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgSUJpbmRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSlF1ZXJ5IGFzICQgfSBmcm9tICcuLi92ZW5kb3JzL2pxdWVyeS5tb2R1bGUnO1xuXG4vKipcbiAqIGNsYXNzXG4gKiBBZGRzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIHRvIHRoZSBjbGFzcy5cbiAqIEluc3RlYWQgb2YgYGNsYXNzLVtjbGFzc25hbWVdYCB0aGUgY2xhc3NuYW1lIGlzIHNldHRlZCBieSB0aGVcbiAqIGF0dHJpYnV0ZXMgdmFsdWUgYW5kIG5vdCBieSB0aGUgc3RhciB2YWx1ZVxuICovXG5leHBvcnQgY29uc3QgY2xhc3NCaW5kZXI6IElCaW5kZXI8c3RyaW5nPiA9IHtcbiAgbmFtZTogJ2NsYXNzJyxcbiAgZnVuY3Rpb246IHRydWUsXG4gIHByaW9yaXR5OiAxMDAwLFxuXG4gIGJpbmQoZWwpIHtcbiAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICB0aGlzLmN1c3RvbURhdGEgPSB7XG4gICAgICAkZWwsXG4gICAgICBzdGF0aWNDbGFzc2VzOiAkZWwuYXR0cignY2xhc3MnKSxcbiAgICB9O1xuICB9LFxuXG4gIHVuYmluZChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICBkZWxldGUgdGhpcy5jdXN0b21EYXRhO1xuICB9LFxuXG4gIHJvdXRpbmUoZWw6IEhUTUxFbGVtZW50LCBuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAkKGVsKS5hdHRyKCdjbGFzcycsIHRoaXMuY3VzdG9tRGF0YS5zdGF0aWNDbGFzc2VzKTtcbiAgICAgICQoZWwpLmFkZENsYXNzKG5ld1ZhbHVlKTtcbiAgICB9XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgSUJpbmRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIERpc2FibGVzIHRoZSBlbGVtZW50IHdoZW4gdmFsdWUgaXMgdHJ1ZSAobmVnYXRlZCB2ZXJzaW9uIG9mIGBlbmFibGVkYCBiaW5kZXIpLlxuICovXG5leHBvcnQgY29uc3QgZGlzYWJsZWRCaW5kZXI6IElCaW5kZXI8Ym9vbGVhbj4gPSB7XG4gIG5hbWU6ICdkaXNhYmxlZCcsXG4gIHJvdXRpbmUoZWw6IEhUTUxVbmtub3duRWxlbWVudCwgdmFsdWU6IGJvb2xlYW4pIHtcbiAgICAoZWwgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gISF2YWx1ZTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBJQmluZGFibGUsIElCaW5kZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbHMnO1xuXG4vKipcbiAqIGVhY2gtKlxuICogQXBwZW5kcyBib3VuZCBpbnN0YW5jZXMgb2YgdGhlIGVsZW1lbnQgaW4gcGxhY2UgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBlYWNoU3RhckJpbmRlcjogSUJpbmRlcjxhbnlbXT4gPSB7XG4gIG5hbWU6ICdlYWNoLSonLFxuICBibG9jazogdHJ1ZSxcbiAgcHJpb3JpdHk6IDQwMDAsXG5cbiAgYmluZChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoIXRoaXMubWFya2VyKSB7XG4gICAgICB0aGlzLm1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoYCByaWJhOiAke3RoaXMudHlwZX0gYCk7XG4gICAgICB0aGlzLmN1c3RvbURhdGEgPSB7XG4gICAgICAgIGl0ZXJhdGVkOiA8Vmlld1tdPiBbXSxcbiAgICAgIH07XG4gICAgICBpZiAoIWVsLnBhcmVudE5vZGUpIHtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKCdObyBwYXJlbnQgbm9kZSEnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMubWFya2VyLCBlbCk7XG4gICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1c3RvbURhdGEuaXRlcmF0ZWQuZm9yRWFjaCgodmlldzogVmlldykgID0+IHtcbiAgICAgICAgdmlldy5iaW5kKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kKGVsKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tRGF0YS5pdGVyYXRlZCkge1xuICAgICAgdGhpcy5jdXN0b21EYXRhLml0ZXJhdGVkLmZvckVhY2goKHZpZXc6IFZpZXcpID0+IHtcbiAgICAgICAgdmlldy51bmJpbmQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICByb3V0aW5lKGVsLCBjb2xsZWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuYXJncyA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmdzIGlzIG51bGwnKTtcbiAgICB9XG4gICAgY29uc3QgbW9kZWxOYW1lID0gdGhpcy5hcmdzWzBdIGFzIHN0cmluZztcbiAgICBjb2xsZWN0aW9uID0gY29sbGVjdGlvbiB8fCBbXTtcblxuICAgIC8vIFRPRE8gc3VwcG9ydCBvYmplY3Qga2V5cyB0byBpdGVyYXRlIG92ZXJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29sbGVjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZWFjaC0nICsgbW9kZWxOYW1lICsgJyBuZWVkcyBhbiBhcnJheSB0byBpdGVyYXRlIG92ZXIsIGJ1dCBpdCBpcycpO1xuICAgIH1cblxuICAgIC8vIGlmIGluZGV4IG5hbWUgaXMgc2V0ZWQgYnkgYGluZGV4LXByb3BlcnR5YCB1c2UgdGhpcyBuYW1lLCBvdGhlcndpc2UgYCVbbW9kZWxOYW1lXSVgXG4gICAgY29uc3QgaW5kZXhQcm9wID0gZWwuZ2V0QXR0cmlidXRlKCdpbmRleC1wcm9wZXJ0eScpIHx8IHRoaXMuZ2V0SXRlcmF0aW9uQWxpYXMobW9kZWxOYW1lKTtcblxuICAgIGNvbGxlY3Rpb24uZm9yRWFjaCgobW9kZWwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBzY29wZTogYW55ID0geyRwYXJlbnQ6IHRoaXMudmlldy5tb2RlbHN9O1xuICAgICAgc2NvcGVbaW5kZXhQcm9wXSA9IGluZGV4O1xuICAgICAgc2NvcGVbbW9kZWxOYW1lXSA9IG1vZGVsO1xuICAgICAgbGV0IHZpZXcgPSB0aGlzLmN1c3RvbURhdGEuaXRlcmF0ZWRbaW5kZXhdO1xuXG4gICAgICBpZiAoIXZpZXcpIHtcbiAgICAgICAgbGV0IHByZXZpb3VzOiBDb21tZW50IHwgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tRGF0YS5pdGVyYXRlZC5sZW5ndGgpIHtcbiAgICAgICAgICBwcmV2aW91cyA9IHRoaXMuY3VzdG9tRGF0YS5pdGVyYXRlZFt0aGlzLmN1c3RvbURhdGEuaXRlcmF0ZWQubGVuZ3RoIC0gMV0uZWxzWzBdO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWFya2VyKSB7XG4gICAgICAgICAgcHJldmlvdXMgPSB0aGlzLm1hcmtlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ByZXZpb3VzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2aWV3ID0gVmlldy5jcmVhdGUodGhpcywgc2NvcGUsIHByZXZpb3VzLm5leHRTaWJsaW5nKTtcbiAgICAgICAgdGhpcy5jdXN0b21EYXRhLml0ZXJhdGVkLnB1c2godmlldyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodmlldy5tb2RlbHNbbW9kZWxOYW1lXSAhPT0gbW9kZWwpIHtcbiAgICAgICAgICAvLyBzZWFyY2ggZm9yIGEgdmlldyB0aGF0IG1hdGNoZXMgdGhlIG1vZGVsXG4gICAgICAgICAgbGV0IG1hdGNoSW5kZXg7XG4gICAgICAgICAgbGV0IG5leHRWaWV3O1xuICAgICAgICAgIGZvciAobGV0IG5leHRJbmRleCA9IGluZGV4ICsgMTsgbmV4dEluZGV4IDwgdGhpcy5jdXN0b21EYXRhLml0ZXJhdGVkLmxlbmd0aDsgbmV4dEluZGV4KyspIHtcbiAgICAgICAgICAgIG5leHRWaWV3ID0gdGhpcy5jdXN0b21EYXRhLml0ZXJhdGVkW25leHRJbmRleF07XG4gICAgICAgICAgICBpZiAobmV4dFZpZXcubW9kZWxzW21vZGVsTmFtZV0gPT09IG1vZGVsKSB7XG4gICAgICAgICAgICAgIG1hdGNoSW5kZXggPSBuZXh0SW5kZXg7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWF0Y2hJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBtb2RlbCBpcyBpbiBvdGhlciBwb3NpdGlvblxuICAgICAgICAgICAgLy8gdG9kbzogY29uc2lkZXIgYXZvaWRpbmcgdGhlIHNwbGljZSBoZXJlIGJ5IHNldHRpbmcgYSBmbGFnXG4gICAgICAgICAgICAvLyBwcm9maWxlIHBlcmZvcm1hbmNlIGJlZm9yZSBpbXBsZW1lbnRpbmcgc3VjaCBjaGFuZ2VcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tRGF0YS5pdGVyYXRlZC5zcGxpY2UobWF0Y2hJbmRleCwgMSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMubWFya2VyIHx8ICF0aGlzLm1hcmtlci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWFya2VyIGhhcyBubyBwYXJlbnQgbm9kZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYXJrZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV4dFZpZXcuZWxzWzBdLCB2aWV3LmVsc1swXSk7XG4gICAgICAgICAgICBuZXh0Vmlldy5tb2RlbHNbaW5kZXhQcm9wXSA9IGluZGV4O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBuZXcgbW9kZWxcbiAgICAgICAgICAgIG5leHRWaWV3ID0gVmlldy5jcmVhdGUodGhpcywgc2NvcGUsIHZpZXcuZWxzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jdXN0b21EYXRhLml0ZXJhdGVkLnNwbGljZShpbmRleCwgMCwgbmV4dFZpZXcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZpZXcubW9kZWxzW2luZGV4UHJvcF0gPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY3VzdG9tRGF0YS5pdGVyYXRlZC5sZW5ndGggPiBjb2xsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgVXRpbHMudGltZXModGhpcy5jdXN0b21EYXRhLml0ZXJhdGVkLmxlbmd0aCAtIGNvbGxlY3Rpb24ubGVuZ3RoLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmN1c3RvbURhdGEuaXRlcmF0ZWQucG9wKCk7XG4gICAgICAgIHZpZXcudW5iaW5kKCk7XG4gICAgICAgIGlmICghdGhpcy5tYXJrZXIgfHwgIXRoaXMubWFya2VyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hcmtlciBoYXMgbm8gcGFyZW50IG5vZGUnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hcmtlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHZpZXcuZWxzWzBdKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gJ09QVElPTicgJiYgdGhpcy52aWV3LmJpbmRpbmdzKSB7XG4gICAgICB0aGlzLnZpZXcuYmluZGluZ3MuZm9yRWFjaCgoYmluZGluZzogSUJpbmRhYmxlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm1hcmtlciAmJiAoYmluZGluZy5lbCA9PT0gdGhpcy5tYXJrZXIucGFyZW50Tm9kZSkgJiYgKGJpbmRpbmcudHlwZSA9PT0gJ3ZhbHVlJykgJiYgYmluZGluZy5zeW5jKSB7XG4gICAgICAgICAgYmluZGluZy5zeW5jKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGUobW9kZWxzKSB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge307XG4gICAgLy8gVE9ETzogYWRkIHRlc3QgYW5kIGZpeCBpZiBuZWNlc3NhcnlcbiAgICBPYmplY3Qua2V5cyhtb2RlbHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKHRoaXMuYXJncyA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3MgaXMgbnVsbCcpO1xuICAgICAgfVxuICAgICAgaWYgKGtleSAhPT0gdGhpcy5hcmdzWzBdKSB7XG4gICAgICAgIGRhdGFba2V5XSA9IG1vZGVsc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jdXN0b21EYXRhLml0ZXJhdGVkLmZvckVhY2goKHZpZXc6IFZpZXcpID0+IHtcbiAgICAgIHZpZXcudXBkYXRlKGRhdGEpO1xuICAgIH0pO1xuICB9LFxufTtcbiIsImltcG9ydCB7IElCaW5kZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBFbmFibGVzIHRoZSBlbGVtZW50IHdoZW4gdmFsdWUgaXMgdHJ1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGVuYWJsZWRCaW5kZXI6IElCaW5kZXI8Ym9vbGVhbj4gPSB7XG4gIG5hbWU6ICdlbmFibGVkJyxcbiAgcm91dGluZShlbDogSFRNTFVua25vd25FbGVtZW50LCB2YWx1ZTogYm9vbGVhbikge1xuICAgIChlbCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSAhdmFsdWU7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgSUJpbmRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIEhpZGVzIHRoZSBlbGVtZW50IHdoZW4gdmFsdWUgaXMgdHJ1ZSAobmVnYXRlZCB2ZXJzaW9uIG9mIGBzaG93YCBiaW5kZXIpLlxuICovXG5leHBvcnQgY29uc3QgaGlkZUJpbmRlcjogSUJpbmRlcjxib29sZWFuPiA9IHtcbiAgbmFtZTogJ2hpZGUnLFxuICByb3V0aW5lKGVsOiBIVE1MRWxlbWVudCwgdmFsdWU6IGJvb2xlYW4pIHtcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyAnbm9uZScgOiAnJztcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICB9XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgSUJpbmRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIFNldHMgdGhlIGVsZW1lbnQncyB0ZXh0IHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgaHRtbEJpbmRlcjogSUJpbmRlcjxzdHJpbmc+ID0ge1xuICBuYW1lOiAnaHRtbCcsXG4gIHJvdXRpbmUoZWw6IEhUTUxFbGVtZW50LCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgZWwuaW5uZXJIVE1MID0gdmFsdWUgIT0gbnVsbCA/IHZhbHVlIDogJyc7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgSUJpbmRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJy4uL3ZpZXcnO1xuXG4vKipcbiAqIGlmXG4gKiBJbnNlcnRzIGFuZCBiaW5kcyB0aGUgZWxlbWVudCBhbmQgaXQncyBjaGlsZCBub2RlcyBpbnRvIHRoZSBET00gd2hlbiB0cnVlLlxuICovXG5leHBvcnQgY29uc3QgaWZCaW5kZXI6IElCaW5kZXI8Ym9vbGVhbj4gPSB7XG4gIG5hbWU6ICdpZicsXG4gIGJsb2NrOiB0cnVlLFxuICBwcmlvcml0eTogNDAwMCxcblxuICBiaW5kKGVsOiBIVE1MVW5rbm93bkVsZW1lbnQpIHtcbiAgICB0aGlzLmN1c3RvbURhdGEgPSB7fTtcbiAgICBpZiAoIXRoaXMubWFya2VyKSB7XG4gICAgICB0aGlzLm1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJyByaWJhOiAnICsgdGhpcy50eXBlICsgJyAnICsgdGhpcy5rZXlwYXRoICsgJyAnKTtcbiAgICAgIHRoaXMuY3VzdG9tRGF0YS5hdHRhY2hlZCA9IGZhbHNlO1xuICAgICAgaWYgKCFlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybignRWxlbWVudCBoYXMgbm8gcGFyZW50IG5vZGUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMubWFya2VyLCBlbCk7XG4gICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIHRoaXMuY3VzdG9tRGF0YS5ib3VuZCA9PT0gZmFsc2UgJiYgIHRoaXMuY3VzdG9tRGF0YS5uZXN0ZWQpIHtcbiAgICAgIHRoaXMuY3VzdG9tRGF0YS5uZXN0ZWQuYmluZCgpO1xuICAgIH1cbiAgICB0aGlzLmN1c3RvbURhdGEuYm91bmQgPSB0cnVlO1xuICB9LFxuXG4gIHVuYmluZCgpIHtcbiAgICBpZiAoIHRoaXMuY3VzdG9tRGF0YS5uZXN0ZWQpIHtcbiAgICAgIHRoaXMuY3VzdG9tRGF0YS5uZXN0ZWQudW5iaW5kKCk7XG4gICAgICB0aGlzLmN1c3RvbURhdGEuYm91bmQgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgcm91dGluZShlbDogSFRNTEVsZW1lbnQsIHZhbHVlOiBib29sZWFuKSB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5jdXN0b21EYXRhLmF0dGFjaGVkKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCEgdGhpcy5jdXN0b21EYXRhLm5lc3RlZCkge1xuICAgICAgICAgIHRoaXMuY3VzdG9tRGF0YS5uZXN0ZWQgPSBuZXcgVmlldyhlbCwgdGhpcy52aWV3Lm1vZGVscywgdGhpcy52aWV3Lm9wdGlvbnMpO1xuICAgICAgICAgIHRoaXMuY3VzdG9tRGF0YS5uZXN0ZWQuYmluZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5tYXJrZXIgfHwgIXRoaXMubWFya2VyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ01hcmtlciBoYXMgbm8gcGFyZW50IG5vZGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1hcmtlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbCwgdGhpcy5tYXJrZXIubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VzdG9tRGF0YS5hdHRhY2hlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWVsLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ0VsZW1lbnQgaGFzIG5vIHBhcmVudCBub2RlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXN0b21EYXRhLmF0dGFjaGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZShtb2RlbHMpIHtcbiAgICBpZiAoIHRoaXMuY3VzdG9tRGF0YS5uZXN0ZWQpIHtcbiAgICAgIHRoaXMuY3VzdG9tRGF0YS5uZXN0ZWQudXBkYXRlKG1vZGVscyk7XG4gICAgfVxuICB9LFxufTtcbiIsImV4cG9ydCB7IGFuaW1hdGVTdGFyQmluZGVyIH0gZnJvbSAnLi9hbmltYXRlLWNsYXNzbmFtZS5iaW5kZXInO1xuZXhwb3J0IHsgYXNzaWduQmluZGVyIH0gZnJvbSAnLi9hc3NpZ24uYmluZGVyJztcbmV4cG9ydCB7IGJsb2NrQmluZGVyIH0gZnJvbSAnLi9ibG9jay5iaW5kZXInO1xuZXhwb3J0IHsgY2xhc3NCaW5kZXIgfSBmcm9tICcuL2NsYXNzLmJpbmRlcic7XG5leHBvcnQgeyBjaGVja2VkQmluZGVyIH0gZnJvbSAnLi9jaGVja2VkLmJpbmRlcic7XG5leHBvcnQgeyBjbGFzc1N0YXJCaW5kZXIgfSBmcm9tICcuL2NsYXNzLW5hbWUuYmluZGVyJztcbmV4cG9ydCB7IGNzc1N0YXJCaW5kZXIgfSBmcm9tICcuL3N0eWxlLWNzcy1wcm9wZXJ0eS5iaW5kZXInO1xuZXhwb3J0IHsgZW5hYmxlZEJpbmRlciB9IGZyb20gJy4vZW5hYmxlZC5iaW5kZXInO1xuZXhwb3J0IHsgZGlzYWJsZWRCaW5kZXIgfSBmcm9tICcuL2Rpc2FibGVkLmJpbmRlcic7XG5leHBvcnQgeyBvblN0YXJCaW5kZXIgfSBmcm9tICcuL29uLWV2ZW50LmJpbmRlcic7XG5leHBvcnQgeyByZW1vdmVDbGFzc0JpbmRlciB9IGZyb20gJy4vcmVtb3ZlLWNsYXNzLmJpbmRlcic7XG5leHBvcnQgeyBpZkJpbmRlciB9IGZyb20gJy4vaWYuYmluZGVyJztcbmV4cG9ydCB7IGVhY2hTdGFyQmluZGVyIH0gZnJvbSAnLi9lYWNoLWl0ZW0uYmluZGVyJztcbmV4cG9ydCB7IGh0bWxCaW5kZXIgfSBmcm9tICcuL2h0bWwuYmluZGVyJztcbmV4cG9ydCB7IGhpZGVCaW5kZXIgfSBmcm9tICcuL2hpZGUuYmluZGVyJztcbmV4cG9ydCB7IHNob3dCaW5kZXIgfSBmcm9tICcuL3Nob3cuYmluZGVyJztcbmV4cG9ydCB7IHRleHRCaW5kZXIgfSBmcm9tICcuL3RleHQuYmluZGVyJztcbmV4cG9ydCB7IHZhbHVlQmluZGVyIH0gZnJvbSAnLi92YWx1ZS5iaW5kZXInO1xuZXhwb3J0IHsgc3RhckJpbmRlciB9IGZyb20gJy4vYXR0cmlidXRlLmJpbmRlcic7XG4iLCJpbXBvcnQgeyBJQmluZGVyLCBldmVudEhhbmRsZXJGdW5jdGlvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSlF1ZXJ5IH0gZnJvbSAnLi4vdmVuZG9ycyc7XG5cbi8qKlxuICogQmluZHMgYW4gZXZlbnQgaGFuZGxlciBvbiB0aGUgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IG9uU3RhckJpbmRlcjogSUJpbmRlcjxldmVudEhhbmRsZXJGdW5jdGlvbj4gPSB7XG4gIG5hbWU6ICdvbi0qJyxcbiAgZnVuY3Rpb246IHRydWUsXG4gIHByaW9yaXR5OiAxMDAwLFxuXG4gIGJpbmQoZWwpIHtcbiAgICBpZiAoIXRoaXMuY3VzdG9tRGF0YSkge1xuICAgICAgdGhpcy5jdXN0b21EYXRhID0ge1xuICAgICAgICBoYW5kbGVyOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kKGVsOiBIVE1MRWxlbWVudCkge1xuICAgIGlmICh0aGlzLmN1c3RvbURhdGEuaGFuZGxlcikge1xuICAgICAgaWYgKHRoaXMuYXJncyA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3MgaXMgbnVsbCcpO1xuICAgICAgfVxuICAgICAgSlF1ZXJ5KGVsKS5vZmYodGhpcy5hcmdzWzBdIGFzIHN0cmluZywgdGhpcy5jdXN0b21EYXRhLmhhbmRsZXIpO1xuICAgIH1cbiAgfSxcblxuICByb3V0aW5lKGVsOiBIVE1MRWxlbWVudCwgdmFsdWU6IGV2ZW50SGFuZGxlckZ1bmN0aW9uKSB7XG5cbiAgICBpZiAodGhpcy5hcmdzID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3MgaXMgbnVsbCcpO1xuICAgIH1cbiAgICBjb25zdCBldmVudE5hbWUgPSB0aGlzLmFyZ3NbMF0gYXMgc3RyaW5nO1xuXG4gICAgaWYgKHRoaXMuY3VzdG9tRGF0YS5oYW5kbGVyKSB7XG4gICAgICBKUXVlcnkoZWwpLm9mZihldmVudE5hbWUsIHRoaXMuY3VzdG9tRGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXN0b21EYXRhLmhhbmRsZXIgPSB0aGlzLmV2ZW50SGFuZGxlcih2YWx1ZSwgZWwpO1xuXG4gICAgdHJ5IHtcbiAgICAgIEpRdWVyeShlbCkub24oZXZlbnROYW1lLCAodGhpcy5jdXN0b21EYXRhLmhhbmRsZXIpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcbiAgICAgIEpRdWVyeShlbCkub24oZXZlbnROYW1lLCAoZXZlbnQ6IEpRdWVyeS5FdmVudCkgPT4ge1xuICAgICAgICB0aGlzLmN1c3RvbURhdGEuaGFuZGxlcihldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgSUJpbmRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSlF1ZXJ5IGFzICQgfSBmcm9tICcuLi92ZW5kb3JzL2pxdWVyeS5tb2R1bGUnO1xuXG4vKipcbiAqIHJlbW92ZS1jbGFzc1xuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2xhc3NCaW5kZXI6IElCaW5kZXI8c3RyaW5nPiA9IHtcbiAgbmFtZTogJ3JlbW92ZS1jbGFzcycsXG4gIHJvdXRpbmUoZWw6IEhUTUxFbGVtZW50LCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAkZWwucmVtb3ZlQ2xhc3ModmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgSUJpbmRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIFNob3dzIHRoZSBlbGVtZW50IHdoZW4gdmFsdWUgaXMgdHJ1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNob3dCaW5kZXI6IElCaW5kZXI8Ym9vbGVhbj4gPSB7XG4gIG5hbWU6ICdzaG93JyxcbiAgcm91dGluZShlbDogSFRNTEVsZW1lbnQsIHZhbHVlOiBib29sZWFuKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gJycgOiAnbm9uZSc7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICd0cnVlJyk7XG4gICAgfVxuICB9LFxufTtcbiIsImltcG9ydCB7IElCaW5kZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBzdHlsZS0qXG4gKiBBZGRzIGEgc3R5bGUgdG8gdGhlIGVsZW1lbnQuXG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBydi1zdHlsZS1iYWNrZ3JvdW5kLWNvbG9yPVwiJ2JsdWUnXCI+PC9kaXY+XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc1N0YXJCaW5kZXI6IElCaW5kZXI8c3RyaW5nPiA9IHtcbiAgbmFtZTogJ3N0eWxlLSonLFxuICByb3V0aW5lKGVsOiBIVE1MRWxlbWVudCwgdmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9ICh0aGlzIGFzIGFueSkuYXJnc1swXTtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgIChlbC5zdHlsZSBhcyBhbnkpLnJlbW92ZVByb3BlcnR5KHByb3BlcnR5TmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIChlbC5zdHlsZSBhcyBhbnkpW3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgSUJpbmRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIFNldHMgdGhlIGVsZW1lbnQncyB0ZXh0IHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgdGV4dEJpbmRlcjogSUJpbmRlcjxzdHJpbmc+ID0ge1xuICBuYW1lOiAndGV4dCcsXG4gIHJvdXRpbmUoZWw6IEhUTUxFbGVtZW50LCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgZWwudGV4dENvbnRlbnQgPSB2YWx1ZSAhPSBudWxsID8gdmFsdWUgOiAnJztcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBEZWJ1ZywgSlF1ZXJ5IGFzICQgfSBmcm9tICcuLi92ZW5kb3JzJztcbmltcG9ydCB7IElCaW5kZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbHMnO1xuXG5jb25zdCBkZWJ1ZyA9IERlYnVnKCdiaW5kZXI6dmFsdWUnKTtcblxuY29uc3QgZ2V0RGF0YSA9IChlbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgY3VzdG9tRGF0YTogYW55ID0ge307XG4gIGN1c3RvbURhdGEuJGVsID0gJChlbCk7XG4gIGN1c3RvbURhdGEudHlwZSA9IGN1c3RvbURhdGEuJGVsLnByb3AoJ3R5cGUnKTtcbiAgY3VzdG9tRGF0YS50YWdOYW1lID0gY3VzdG9tRGF0YS4kZWwucHJvcCgndGFnTmFtZScpO1xuICBjdXN0b21EYXRhLmNvbnRlbnRlZGl0YWJsZSA9IGN1c3RvbURhdGEuJGVsLmF0dHIoJ2NvbnRlbnRlZGl0YWJsZScpID8gdHJ1ZSA6IGZhbHNlO1xuICBjdXN0b21EYXRhLmlzUmFkaW8gPSBjdXN0b21EYXRhLnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgY3VzdG9tRGF0YS50eXBlID09PSAncmFkaW8nO1xuICByZXR1cm4gY3VzdG9tRGF0YTtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgZWxlbWVudCdzIHZhbHVlLiBBbHNvIHNldHMgdGhlIG1vZGVsIHByb3BlcnR5IHdoZW4gdGhlIGlucHV0IGNoYW5nZXNcbiAqICh0d28td2F5IGJpbmRlcikuXG4gKi9cbmV4cG9ydCBjb25zdCB2YWx1ZUJpbmRlcjogSUJpbmRlcjxhbnk+ID0ge1xuICBuYW1lOiAndmFsdWUnLFxuICBwdWJsaXNoZXM6IHRydWUsXG4gIHByaW9yaXR5OiAzMDAwLFxuXG4gIGJpbmQoZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKCF0aGlzLmN1c3RvbURhdGEpIHtcbiAgICAgIHRoaXMuY3VzdG9tRGF0YSA9IGdldERhdGEoZWwpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY3VzdG9tRGF0YS5pc1JhZGlvKSB7XG4gICAgICB0aGlzLmN1c3RvbURhdGEuZXZlbnQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2V2ZW50LW5hbWUnKSB8fCAoZWwudGFnTmFtZSA9PT0gJ1NFTEVDVCcgPyAnY2hhbmdlJyA6ICdpbnB1dCcpO1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBpZiAoIXRoaXMuY3VzdG9tRGF0YS5jYWxsYmFjaykge1xuICAgICAgICB0aGlzLmN1c3RvbURhdGEuY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgZGVidWcoJ2NhbGxiYWNrIGNhbGxlZCcpO1xuICAgICAgICAgIHNlbGYucHVibGlzaCgpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuY3VzdG9tRGF0YS5ldmVudCkge1xuICAgICAgICB0aGlzLmN1c3RvbURhdGEuZXZlbnQgPSAnY2hhbmdlIGlucHV0IGtleXVwIHBhc3RlIGJsdXIgZm9jdXMnO1xuICAgICAgfVxuXG4gICAgICAkKGVsKS5vbih0aGlzLmN1c3RvbURhdGEuZXZlbnQsIHRoaXMuY3VzdG9tRGF0YS5jYWxsYmFjayk7XG4gICAgfVxuICB9LFxuXG4gIHVuYmluZChlbDogSFRNTFVua25vd25FbGVtZW50KSB7XG4gICAgJChlbCkub2ZmKHRoaXMuY3VzdG9tRGF0YS5ldmVudCwgdGhpcy5jdXN0b21EYXRhLmNhbGxiYWNrKTtcbiAgfSxcblxuICByb3V0aW5lKGVsOiBIVE1MRWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50LCB2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoZWwpO1xuICAgIGRlYnVnKCdyb3V0aW5lIHZhbHVlJywgdmFsdWUpO1xuICAgIGlmICghdGhpcy5jdXN0b21EYXRhKSB7XG4gICAgICB0aGlzLmN1c3RvbURhdGEgPSBnZXREYXRhKGVsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VzdG9tRGF0YS5pc1JhZGlvKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUgYXMgc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKChlbCBhcyBIVE1MU2VsZWN0RWxlbWVudCkudHlwZSA9PT0gJ3NlbGVjdC1tdWx0aXBsZScpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoZWwgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IChlbCBhcyBIVE1MU2VsZWN0RWxlbWVudCkub3B0aW9uc1tpXSBhcyBIVE1MT3B0aW9uRWxlbWVudDtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSA+IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBUT0RPIGNoZWNrIGlmIHRoZSB2YWx1ZSB3YXMgcmVhbGx5IGNoYW5nZWRcbiAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVsLmdldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJykpIHtcbiAgICAgICAgaWYgKFV0aWxzLmdldFN0cmluZyh2YWx1ZSBhcyBzdHJpbmcpICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgIGVsLmlubmVySFRNTCA9IHZhbHVlIGFzIHN0cmluZzsgLy8gVE9ETyB3cml0ZSB0ZXN0IGZvciBjb250ZW50ZWRpdGFibGVcbiAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoVXRpbHMuZ2V0U3RyaW5nKHZhbHVlIGFzIHN0cmluZykgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgKGVsIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gdmFsdWUgIT0gbnVsbCA/IHZhbHVlIGFzIHN0cmluZyA6ICcnO1xuICAgICAgICAgIGVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZ2V0VmFsdWU6IFV0aWxzLmdldElucHV0VmFsdWUsXG59O1xuIiwiaW1wb3J0IHsgUFJJTUlUSVZFLCBLRVlQQVRILCBwYXJzZVR5cGUgfSBmcm9tICcuL3BhcnNlcnMnO1xuaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVyJztcbmltcG9ydCB7XG4gIElCaW5kZXIsXG4gIElGb3JtYXR0ZXJPYnNlcnZlcnMsXG4gIGV2ZW50SGFuZGxlckZ1bmN0aW9uLFxuICBJT2JzZXJ2ZXJTeW5jQ2FsbGJhY2ssXG59IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi9zZXJ2aWNlcy91dGlscyc7XG5pbXBvcnQgeyBEZWJ1ZywgSURlYnVnZ2VyIH0gZnJvbSAnLi92ZW5kb3JzJztcblxuLyoqXG4gKiAgQSBzaW5nbGUgYmluZGluZyBiZXR3ZWVuIGEgbW9kZWwgYXR0cmlidXRlIGFuZCBhIERPTSBlbGVtZW50LlxuICovXG5leHBvcnQgY2xhc3MgQmluZGluZyB7XG5cbiAgcHVibGljIHN0YXRpYyBGT1JNQVRURVJfQVJHUyA9ICAvW15cXHMnXSt8JyhbXiddfCdbXlxcc10pKid8XCIoW15cIl18XCJbXlxcc10pKlwiL2c7XG4gIHB1YmxpYyBzdGF0aWMgRk9STUFUVEVSX1NQTElUID0gL1xccysvO1xuXG4gIHB1YmxpYyB2YWx1ZT86IGFueTtcbiAgcHVibGljIG9ic2VydmVyPzogT2JzZXJ2ZXI7XG4gIHB1YmxpYyB2aWV3OiBWaWV3O1xuICBwdWJsaWMgZWw6IEhUTUxVbmtub3duRWxlbWVudDtcbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIGJpbmRlciB3aXRob3V0IHRoZSBwcmVmaXhcbiAgICovXG4gIHB1YmxpYyB0eXBlOiBzdHJpbmcgfCBudWxsO1xuICBwdWJsaWMgYmluZGVyOiBJQmluZGVyPGFueT47XG4gIHB1YmxpYyBmb3JtYXR0ZXJzOiBzdHJpbmdbXSB8IG51bGw7XG4gIHB1YmxpYyBmb3JtYXR0ZXJPYnNlcnZlcnM6IElGb3JtYXR0ZXJPYnNlcnZlcnMgPSB7fTtcbiAgcHVibGljIGtleXBhdGg/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBcmd1bWVudHMgcGFyc2VkIGZyb20gc3RhciBiaW5kZXJzLCBlLmcuIG9uIGZvby0qLSogYXJnc1swXSBpcyB0aGUgZmlyc3Qgc3RhciwgYXJnc1sxXSB0aGUgc2Vjb25kLVxuICAgKi9cbiAgcHVibGljIGFyZ3M6IEFycmF5PHN0cmluZyB8IG51bWJlcj47XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgcHVibGljIG1vZGVsPzogYW55O1xuICAvKipcbiAgICogSFRNTCBDb21tZW50IHRvIG1hcmsgYSBiaW5kaW5nIGluIHRoZSBET01cbiAgICovXG4gIHB1YmxpYyBtYXJrZXI/OiBDb21tZW50O1xuICAvKipcbiAgICoganVzdCB0byBoYXZlIGEgdmFsdWUgd2hlcmUgd2UgY291bGQgc3RvcmUgY3VzdG9tIGRhdGFcbiAgICovXG4gIHB1YmxpYyBjdXN0b21EYXRhPzogYW55O1xuXG4gIHByaXZhdGUgZGVidWc6IElEZWJ1Z2dlcjtcblxuICAvKipcbiAgICogQWxsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBiaW5kaW5nIGlzIHBhc3NlZCBpbnRvIHRoZSBjb25zdHJ1Y3RvcjsgdGhlXG4gICAqIGNvbnRhaW5pbmcgdmlldywgdGhlIERPTSBub2RlLCB0aGUgdHlwZSBvZiBiaW5kaW5nLCB0aGUgbW9kZWwgb2JqZWN0IGFuZCB0aGVcbiAgICoga2V5cGF0aCBhdCB3aGljaCB0byBsaXN0ZW4gZm9yIGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7Kn0gdmlld1xuICAgKiBAcGFyYW0geyp9IGVsXG4gICAqIEBwYXJhbSB7Kn0gdHlwZVxuICAgKiBAcGFyYW0geyp9IGtleXBhdGhcbiAgICogQHBhcmFtIHsqfSBiaW5kZXJcbiAgICogQHBhcmFtIHsqfSBhcmdzIFRoZSBzdGFydCBiaW5kZXJzLCBvbiBgY2xhc3MtKmAgYXJnc1swXSB3aWwgYmUgdGhlIGNsYXNzbmFtZS5cbiAgICogQHBhcmFtIHsqfSBmb3JtYXR0ZXJzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCBlbDogSFRNTFVua25vd25FbGVtZW50LCB0eXBlOiBzdHJpbmcgfCBudWxsLCBrZXlwYXRoOiBzdHJpbmcgfCB1bmRlZmluZWQsIGJpbmRlcjogSUJpbmRlcjxhbnk+LCBmb3JtYXR0ZXJzOiBzdHJpbmdbXSB8IG51bGwsIGlkZW50aWZpZXI6IHN0cmluZyB8IG51bGwpIHtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMua2V5cGF0aCA9IGtleXBhdGg7XG4gICAgdGhpcy5iaW5kZXIgPSBiaW5kZXI7XG4gICAgdGhpcy5mb3JtYXR0ZXJzID0gZm9ybWF0dGVycztcbiAgICB0aGlzLm1vZGVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY3VzdG9tRGF0YSA9IHt9O1xuICAgIHRoaXMuZGVidWcgPSBEZWJ1ZygncmliYTpCaW5kaW5nJyk7XG5cbiAgICBpZiAoaWRlbnRpZmllciAmJiB0eXBlKSB7XG4gICAgICB0aGlzLmFyZ3MgPSB0aGlzLmdldFN0YXJBcmd1bWVudHMoaWRlbnRpZmllciwgdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXJncyA9IG5ldyBBcnJheTxzdHJpbmcgfCBudW1iZXI+KCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5kZWJ1ZygnY29uc3RydWN0b3InLCB0aGlzLmFyZ3MsIGlkZW50aWZpZXIsIHR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9ic2VydmVzIHRoZSBvYmplY3Qga2V5cGF0aFxuICAgKiBAcGFyYW0gb2JqXG4gICAqIEBwYXJhbSBrZXlwYXRoXG4gICAqL1xuICBwdWJsaWMgb2JzZXJ2ZShvYmo6IGFueSwga2V5cGF0aDogc3RyaW5nLCBjYWxsYmFjazogSU9ic2VydmVyU3luY0NhbGxiYWNrKTogT2JzZXJ2ZXIge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2ZXIob2JqLCBrZXlwYXRoLCBjYWxsYmFjayk7XG4gIH1cblxuICBwdWJsaWMgcGFyc2VUYXJnZXQoKSB7XG4gICAgaWYgKHRoaXMua2V5cGF0aCkge1xuICAgICAgY29uc3QgdG9rZW4gPSBwYXJzZVR5cGUodGhpcy5rZXlwYXRoKTtcbiAgICAgIGlmICh0b2tlbi50eXBlID09PSBQUklNSVRJVkUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRva2VuLnZhbHVlO1xuICAgICAgfSBlbHNlIGlmICh0b2tlbi50eXBlID09PSBLRVlQQVRIKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSB0aGlzLm9ic2VydmUodGhpcy52aWV3Lm1vZGVscywgdGhpcy5rZXlwYXRoLCB0aGlzKTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMub2JzZXJ2ZXIudGFyZ2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBbJHt0aGlzLmJpbmRlci5uYW1lfV0gVW5rbm93biB0eXBlIGluIHRva2VuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaXRlcmF0aW9uIGFsaWFzLCB1c2VkIGluIHRoZSBpbnRlcmF0aW9uIGJpbmRlcnMgbGlrZSBgZWFjaC0qYFxuICAgKiBAcGFyYW0geyp9IG1vZGVsTmFtZVxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWtlcmljL3JpdmV0cy9ibG9iL21hc3Rlci9kaXN0L3JpdmV0cy5qcyNMMjZcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vbWlrZXJpYy9yaXZldHMvYmxvYi9tYXN0ZXIvZGlzdC9yaXZldHMuanMjTDExNzVcbiAgICovXG4gIHB1YmxpYyBnZXRJdGVyYXRpb25BbGlhcyhtb2RlbE5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiAnJScgKyBtb2RlbE5hbWUgKyAnJSc7XG4gIH1cblxuICBwdWJsaWMgcGFyc2VGb3JtYXR0ZXJBcmd1bWVudHMoYXJnczogc3RyaW5nW10sIGZvcm1hdHRlckluZGV4OiBudW1iZXIpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIGFyZ3NcbiAgICAubWFwKHBhcnNlVHlwZSlcbiAgICAubWFwKCh7dHlwZSwgdmFsdWV9LCBhaSkgPT4ge1xuICAgICAgaWYgKHR5cGUgPT09IFBSSU1JVElWRSkge1xuICAgICAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gcHJpbWl0aXZlVmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IEtFWVBBVEgpIHtcbiAgICAgICAgLy8ga2V5cGF0aCBpcyBzdHJpbmdcbiAgICAgICAgY29uc3Qga2V5cGF0aCA9ICh2YWx1ZSBhcyBzdHJpbmcgKTtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm1hdHRlck9ic2VydmVyc1tmb3JtYXR0ZXJJbmRleF0pIHtcbiAgICAgICAgICB0aGlzLmZvcm1hdHRlck9ic2VydmVyc1tmb3JtYXR0ZXJJbmRleF0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvYnNlcnZlciA9IHRoaXMuZm9ybWF0dGVyT2JzZXJ2ZXJzW2Zvcm1hdHRlckluZGV4XVthaV07XG5cbiAgICAgICAgaWYgKCFvYnNlcnZlcikge1xuICAgICAgICAgIG9ic2VydmVyID0gdGhpcy5vYnNlcnZlKHRoaXMudmlldy5tb2RlbHMsIGtleXBhdGgsIHRoaXMpO1xuICAgICAgICAgIHRoaXMuZm9ybWF0dGVyT2JzZXJ2ZXJzW2Zvcm1hdHRlckluZGV4XVthaV0gPSBvYnNlcnZlcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JzZXJ2ZXIudmFsdWUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWyR7dGhpcy5iaW5kZXIubmFtZX1dIFVua25vd24gYXJndW1lbnQgdHlwZWApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgYWxsIHRoZSBjdXJyZW50IGZvcm1hdHRlcnMgdG8gdGhlIHN1cHBsaWVkIHZhbHVlIGFuZCByZXR1cm5zIHRoZVxuICAgKiBmb3JtYXR0ZWQgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgZm9ybWF0dGVkVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLmZvcm1hdHRlcnMgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWyR7dGhpcy5iaW5kZXIubmFtZX0gZm9ybWF0dGVycyBpcyBudWxsYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVycy5yZWR1Y2UoKHJlc3VsdDogYW55LypjaGVjayB0eXBlKi8sIGRlY2xhcmF0aW9uOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBkZWNsYXJhdGlvbi5tYXRjaChCaW5kaW5nLkZPUk1BVFRFUl9BUkdTKTtcbiAgICAgIGlmIChhcmdzID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoYFske3RoaXMuYmluZGVyLm5hbWV9XSBObyBhcmdzIG1hdGNoZWQgd2l0aCByZWdleCBcIkZPUk1BVFRFUl9BUkdTXCIhXFxudmFsdWU6ICR7dmFsdWV9XFxucmVzdWx0OiAke3Jlc3VsdH1cXG5kZWNsYXJhdGlvbjogJHtkZWNsYXJhdGlvbn1cXG5pbmRleDogJHtpbmRleH1cXG5gKSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBjb25zdCBpZCA9IGFyZ3Muc2hpZnQoKTtcblxuICAgICAgaWYgKCFpZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFske3RoaXMuYmluZGVyLm5hbWV9XSBObyBmb3JtYXR0ZXIgaWQgZm91bmQgaW4gYXJncyFgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnZpZXcub3B0aW9ucy5mb3JtYXR0ZXJzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWyR7dGhpcy5iaW5kZXIubmFtZX1dIE5vIGZvcm1hdHRlcnMgYXJlIGRlZmluZWQhYCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvcm1hdHRlciA9IHRoaXMudmlldy5vcHRpb25zLmZvcm1hdHRlcnNbaWRdO1xuXG4gICAgICBpZiAoIWZvcm1hdHRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFske3RoaXMuYmluZGVyLm5hbWV9XSBObyBmb3JtYXR0ZXJzIHdpdGggaWQgXCIke2lkfVwiIGZvdW5kIWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9jZXNzZWRBcmdzID0gdGhpcy5wYXJzZUZvcm1hdHRlckFyZ3VtZW50cyhhcmdzLCBpbmRleCk7XG5cbiAgICAgIC8vIGdldCBmb3JtYXR0ZXIgcmVhZCBmdW5jaW9uXG4gICAgICBpZiAoZm9ybWF0dGVyICYmIHR5cGVvZihmb3JtYXR0ZXIucmVhZCkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVzdWx0ID0gZm9ybWF0dGVyLnJlYWQuYXBwbHkodGhpcy5tb2RlbCwgW3Jlc3VsdCwgLi4ucHJvY2Vzc2VkQXJnc10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBiaW5kaW5nIGFyb3VuZCB0aGUgc3VwcGxpZWQgZnVuY3Rpb24uXG4gICAqIFRpaHMgZXZlbnQgSGFuZGxlciBpcyBtYWlubHkgdXNlZCBieSB0aGUgb24tKiBiaW5kZXJcbiAgICogQHBhcmFtIGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGJ5IHRoZSBoYW5kbGVyXG4gICAqIEBwYXJhbSBlbCBUaGUgZWxlbWVudCB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZCBmcm9tXG4gICAqL1xuICBwdWJsaWMgZXZlbnRIYW5kbGVyKGZuOiBldmVudEhhbmRsZXJGdW5jdGlvbiwgZWw6IEhUTUxFbGVtZW50KTogKGV2OiBFdmVudCkgPT4gYW55IHtcbiAgICBjb25zdCBiaW5kaW5nID0gdGhpcztcbiAgICBjb25zdCBoYW5kbGVyID0gYmluZGluZy52aWV3Lm9wdGlvbnMuaGFuZGxlcjtcbiAgICByZXR1cm4gKGV2KSA9PiB7XG4gICAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBoYW5kbGVyIGRlZmluZWQgaW4gYmluZGluZy52aWV3Lm9wdGlvbnMuaGFuZGxlcicpO1xuICAgICAgfVxuICAgICAgaGFuZGxlci5jYWxsKGZuLCB0aGlzLCBldiwgYmluZGluZywgZWwpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgZm9yIHRoZSBiaW5kaW5nLiBUaGlzIEJhc2ljYWxseSBqdXN0IHJ1bnMgdGhlIGJpbmRpbmcgcm91dGluZVxuICAgKiB3aXRoIHRoZSBzdXBwbGllZCB2YWx1ZSBmb3JtYXR0ZWQuXG4gICAqL1xuICBwdWJsaWMgc2V0KHZhbHVlOiBhbnkpIHtcblxuICAgIGlmICh0aGlzLmJpbmRlciA9PT0gbnVsbCkge1xuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcignQmluZGVyIGlzIG51bGwnKSwgdGhpcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFsdWUgPSB0aGlzLmZvcm1hdHRlZFZhbHVlKHZhbHVlKTtcblxuICAgIGlmICh0aGlzLmJpbmRlciAmJiB0eXBlb2YodGhpcy5iaW5kZXIucm91dGluZSkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIElmIHZhbHVlIGlzIGEgcHJvbWlzZVxuICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZih2YWx1ZS50aGVuKSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YodmFsdWUuY2F0Y2gpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlLnRoZW4oKHJlYWxWYWx1ZTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmluZGVyLnJvdXRpbmUuY2FsbCh0aGlzLCB0aGlzLmVsLCByZWFsVmFsdWUpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYmluZGVyLnJvdXRpbmUuY2FsbCh0aGlzLCB0aGlzLmVsLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN5bmNzIHVwIHRoZSB2aWV3IGJpbmRpbmcgd2l0aCB0aGUgbW9kZWwuXG4gICAqL1xuICBwdWJsaWMgc3luYygpIHtcbiAgICBpZiAodGhpcy5vYnNlcnZlcikge1xuICAgICAgdGhpcy5tb2RlbCA9IHRoaXMub2JzZXJ2ZXIudGFyZ2V0O1xuICAgICAgdGhpcy5zZXQodGhpcy5vYnNlcnZlci52YWx1ZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXQodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFB1Ymxpc2hlcyB0aGUgdmFsdWUgY3VycmVudGx5IHNldCBvbiB0aGUgaW5wdXQgZWxlbWVudCBiYWNrIHRvIHRoZSBtb2RlbC5cbiAgICovXG4gIHB1YmxpYyBwdWJsaXNoKCkge1xuICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICBpZiAodGhpcy5mb3JtYXR0ZXJzID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZm9ybWF0dGVycyBpcyBudWxsJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5mb3JtYXR0ZXJzLnJlZHVjZVJpZ2h0KChyZXN1bHQ6IGFueS8qY2hlY2sgdHlwZSovLCBkZWNsYXJhdGlvbjogc3RyaW5nIC8qY2hlY2sgdHlwZSovLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBkZWNsYXJhdGlvbi5zcGxpdChCaW5kaW5nLkZPUk1BVFRFUl9TUExJVCk7XG4gICAgICAgIGNvbnN0IGlkID0gYXJncy5zaGlmdCgpO1xuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpZCBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnZpZXcub3B0aW9ucy5mb3JtYXR0ZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IHRoaXMudmlldy5vcHRpb25zLmZvcm1hdHRlcnNbaWRdO1xuICAgICAgICBjb25zdCBwcm9jZXNzZWRBcmdzID0gdGhpcy5wYXJzZUZvcm1hdHRlckFyZ3VtZW50cyhhcmdzLCBpbmRleCk7XG5cbiAgICAgICAgaWYgKGZvcm1hdHRlciAmJiB0eXBlb2YoZm9ybWF0dGVyLnB1Ymxpc2gpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZm9ybWF0dGVyLnB1Ymxpc2gocmVzdWx0LCAuLi5wcm9jZXNzZWRBcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSwgdGhpcy5nZXRWYWx1ZSh0aGlzLmVsKSk7XG5cbiAgICAgIHRoaXMub2JzZXJ2ZXIuc2V0VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmVzIHRvIHRoZSBtb2RlbCBmb3IgY2hhbmdlcyBhdCB0aGUgc3BlY2lmaWVkIGtleXBhdGguIEJpLWRpcmVjdGlvbmFsXG4gICAqIHJvdXRpbmVzIHdpbGwgYWxzbyBsaXN0ZW4gZm9yIGNoYW5nZXMgb24gdGhlIGVsZW1lbnQgdG8gcHJvcGFnYXRlIHRoZW0gYmFja1xuICAgKiB0byB0aGUgbW9kZWwuXG4gICAqL1xuICBwdWJsaWMgYmluZCgpIHtcbiAgICB0aGlzLnBhcnNlVGFyZ2V0KCk7XG5cbiAgICBpZiAodGhpcy5iaW5kZXIgJiYgdGhpcy5iaW5kZXIuaGFzT3duUHJvcGVydHkoJ2JpbmQnKSkge1xuICAgICAgaWYgKCF0aGlzLmJpbmRlci5iaW5kICYmIHR5cGVvZih0aGlzLmJpbmRlci5iaW5kKSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZSBtZXRob2QgYmluZCBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgICAgdGhpcy5iaW5kZXIuYmluZC5jYWxsKHRoaXMsIHRoaXMuZWwpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnZpZXcub3B0aW9ucy5wcmVsb2FkRGF0YSkge1xuICAgICAgdGhpcy5zeW5jKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlcyBmcm9tIHRoZSBtb2RlbCBhbmQgdGhlIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgdW5iaW5kKCkge1xuICAgIGlmICghdGhpcy5iaW5kZXIpIHtcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoJ0JpbmRlciBpcyBub3QgZGVmaW5lZCcpLCB0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5iaW5kZXIudW5iaW5kKSB7XG4gICAgICB0aGlzLmJpbmRlci51bmJpbmQuY2FsbCh0aGlzLCB0aGlzLmVsKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vYnNlcnZlcikge1xuICAgICAgdGhpcy5vYnNlcnZlci51bm9ic2VydmUoKTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmZvcm1hdHRlck9ic2VydmVycykuZm9yRWFjaCgoZmkpID0+IHtcbiAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLmZvcm1hdHRlck9ic2VydmVyc1tmaV07XG5cbiAgICAgIE9iamVjdC5rZXlzKGFyZ3MpLmZvckVhY2goKGFpKSA9PiB7XG4gICAgICAgIGFyZ3NbYWldLnVub2JzZXJ2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcm1hdHRlck9ic2VydmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGJpbmRpbmcncyBtb2RlbCBmcm9tIHdoYXQgaXMgY3VycmVudGx5IHNldCBvbiB0aGUgdmlldy4gVW5iaW5kc1xuICAgKiB0aGUgb2xkIG1vZGVsIGZpcnN0IGFuZCB0aGVuIHJlLWJpbmRzIHdpdGggdGhlIG5ldyBtb2RlbC5cbiAgICogQHBhcmFtIHthbnl9IG1vZGVsc1xuICAgKi9cbiAgcHVibGljIHVwZGF0ZShtb2RlbHM6IGFueSA9IHt9KSB7XG4gICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMubW9kZWwgPSB0aGlzLm9ic2VydmVyLnRhcmdldDtcbiAgICB9XG4gICAgaWYgKHRoaXMuYmluZGVyID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JpbmRlciBpcyBudWxsJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmJpbmRlci5oYXNPd25Qcm9wZXJ0eSgndXBkYXRlJykpIHtcbiAgICAgIGlmICh0aGlzLmJpbmRlci51cGRhdGUpIHtcbiAgICAgICAgdGhpcy5iaW5kZXIudXBkYXRlLmNhbGwodGhpcywgbW9kZWxzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBlbGVtZW50cyB2YWx1ZVxuICAgKiBAcGFyYW0gZWxcbiAgICovXG4gIHB1YmxpYyBnZXRWYWx1ZShlbDogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5iaW5kZXIgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYmluZGVyIGlzIG51bGwnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYmluZGVyLmhhc093blByb3BlcnR5KCdnZXRWYWx1ZScpKSB7XG4gICAgICBpZiAodHlwZW9mKHRoaXMuYmluZGVyLmdldFZhbHVlKSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldFZhbHVlIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5iaW5kZXIuZ2V0VmFsdWUuY2FsbCh0aGlzLCBlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBVdGlscy5nZXRJbnB1dFZhbHVlKGVsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFN0YXJBcmd1bWVudHMoaWRlbnRpZmllcjogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBhcmdzID0gbmV3IEFycmF5PHN0cmluZyB8IG51bWJlcj4oKTtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKGBeJHtpZGVudGlmaWVyLnJlcGxhY2UoL1xcKi9nLCAnLisnKX0kYCk7XG4gICAgaWYgKHJlZ2V4cC50ZXN0KHR5cGUpICYmIHR5cGUuc3BsaXQoJy0nKVswXSA9PT0gaWRlbnRpZmllci5zcGxpdCgnLScpWzBdKSB7XG4gICAgICB0aGlzLmRlYnVnKCdtYXRjaGVzJywgaWRlbnRpZmllciwgdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpZGVudGlmaWVyICE9PSAnKicpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTm9kZW5hbWUgbm90IG1hdGNocyB0aGUgaWRlbnRpZmllciwnLCBpZGVudGlmaWVyLCB0eXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzcGxpdHRlZElkZW50aWZpZXIgPSBpZGVudGlmaWVyLnNwbGl0KCcqJyk7XG4gICAgLy8gc3BsaXR0ZWRJZGVudGlmaWVyLnBvcCgpO1xuICAgIGlmIChzcGxpdHRlZElkZW50aWZpZXIubGVuZ3RoID4gMCkge1xuICAgICAgLy8gaG93IG1hbnkgc3RhcnMgaGFzIHRoZSBpZGVudGlmaWVyP1xuICAgICAgY29uc3Qgc3RhckNvdW50ID0gc3BsaXR0ZWRJZGVudGlmaWVyLmxlbmd0aCAtIDE7XG4gICAgICBpZiAoc3RhckNvdW50IDw9IDEpIHtcbiAgICAgICAgYXJncy5wdXNoKHR5cGUuc2xpY2UoaWRlbnRpZmllci5sZW5ndGggLSAxKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICogT24gbW9yZSB0aGFuIG9uZSBzdGFyIHRoaXMgaXMgYSBtdWx0aSBzdGFyIGJpbmRlclxuICAgICAgICAgKiBXZSBzcGxpdCB0aGUgaWRlbnRpZmllciBvbiBlYWNoIHN0YXIgYW5kIHVzZSB0aGUgaWRlbnRpZmllciBwaWVjZXMgYXMgYSBzZXJwZXJhdG9yXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBzdWJJZGVudGlmaWVyID0gc3BsaXR0ZWRJZGVudGlmaWVyWzBdO1xuICAgICAgICBsZXQgYXJnc1N0cmluZyA9IHR5cGUuc2xpY2Uoc3ViSWRlbnRpZmllci5sZW5ndGgpO1xuICAgICAgICBzcGxpdHRlZElkZW50aWZpZXIuZm9yRWFjaCgoc2VwYXJhdG9yLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIGxldCBhcmc6IHN0cmluZyB8IG51bWJlciA9IGFyZ3NTdHJpbmcuc3BsaXQoc2VwYXJhdG9yKVswXTtcbiAgICAgICAgICAgIC8vIHRoZSByZXN0IG9mIHRoZSBzdHJpbmdcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gc3BsaXR0ZWRJZGVudGlmaWVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgYXJnID0gYXJnc1N0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChVdGlscy5pc051bWJlcihhcmcpKSB7XG4gICAgICAgICAgICAgIGFyZyA9IE51bWJlcihhcmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJnc1N0cmluZyA9IGFyZ3NTdHJpbmcuc3Vic3RyaW5nKGFyZ3NTdHJpbmcuaW5kZXhPZihzZXBhcmF0b3IpICsgMSk7XG4gICAgICAgICAgICBhcmdzLnB1c2goYXJnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJncztcbiAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIG9mIGNvbXBvbmVudHMgcmVwbGFjZXMgdGhlIG9sZCBjb21wb25lbnRzIG9mIHJpdmV0cyBmb2xsb3dpbmcgdGhlIFdlYiBDb21wb25lbnRzIHYxIHNwZWNzXG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kZS9kb2NzL1dlYi9XZWJfQ29tcG9uZW50cy9Vc2luZ19jdXN0b21fZWxlbWVudHNcbiAqL1xuXG5pbXBvcnQgeyBEZWJ1ZywgSURlYnVnZ2VyIH0gZnJvbSAnLi4vdmVuZG9ycyc7XG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IFJpYmEgfSBmcm9tICcuLi9yaWJhJztcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuLi9iaW5kaW5nJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbHMnO1xuaW1wb3J0IHsgRmFrZUhUTUxFbGVtZW50IH0gZnJvbSAnLi9mYWtlLWh0bWwtZWxlbWVudCc7XG5cbmV4cG9ydCB0eXBlIFRlbXBsYXRlRnVuY3Rpb24gPSAoKSA9PiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHwgc3RyaW5nIHwgbnVsbDtcblxuZXhwb3J0IGludGVyZmFjZSBJUmliYUNvbXBvbmVudENvbnRleHQge1xuICBmYWxsYmFjazogYm9vbGVhbjtcbiAgdmlldzogVmlldztcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEZha2VIVE1MRWxlbWVudCB7XG5cbiAgcHVibGljIHN0YXRpYyB0YWdOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnRleHQgb2YgdGhpcyBjb21wb25lbnQsIHVzZWQgZm9yIGRlYnVnZ2luZ1xuICAgKi9cbiAgcHVibGljIGNvbnRleHQ/OiBJUmliYUNvbXBvbmVudENvbnRleHQ7XG5cbiAgcHJvdGVjdGVkIGRlYnVnOiBJRGVidWdnZXI7XG4gIHByb3RlY3RlZCB2aWV3PzogVmlldztcblxuICBwcm90ZWN0ZWQgdGVtcGxhdGVMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgcmliYT86IFJpYmE7XG5cbiAgcHJvdGVjdGVkIGVsOiBIVE1MVW5rbm93bkVsZW1lbnQ7XG5cbiAgLy8gcHJvdGVjdGVkICRlbDogSlF1ZXJ5PEhUTUxVbmtub3duRWxlbWVudD47XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHNjb3BlOiBhbnk7XG5cbiAgcHVibGljIGdldCBib3VuZCgpIHtcbiAgICByZXR1cm4gISF0aGlzLnZpZXc7XG4gIH1cblxuICAvKipcbiAgICogSWYgdHJ1ZSB0aGUgY29tcG9uZW50IHdpbGwgYXV0b21hdGljYWxseSBiaW5kIHRoZSBjb21wb25lbnQgdG8gcmliYSBpZiBhbGwgcmVxdWlyZWQgYXR0cmlidXRlcyBhcmUgc2V0dGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgYXV0b2JpbmQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgYXR0cmlidXRlT2JzZXJ2ZXJGYWxsYmFjaz86IE11dGF0aW9uT2JzZXJ2ZXI7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudD86IEhUTUxVbmtub3duRWxlbWVudCwgY29udGV4dD86IElSaWJhQ29tcG9uZW50Q29udGV4dCkge1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5kZWJ1ZyA9IERlYnVnKCdjb21wb25lbnQ6Q29tcG9uZW50Jyk7XG4gICAgdGhpcy5kZWJ1ZygnY29uc3RydWN0b3IgY2FsbGVkJywgZWxlbWVudCwgY29udGV4dCwgdGhpcyk7XG5cbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdGhpcy5lbCA9IGVsZW1lbnQ7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuY3VzdG9tRWxlbWVudHMpIHtcbiAgICAgIHRoaXMuZWwgPSB0aGlzIGFzIHVua25vd24gYXMgSFRNTEVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgZWxlbWVudCBpcyByZXF1aXJlZCBvbiBicm93c2VycyB3aXRob3V0IGN1c3RvbSBlbGVtZW50cyBzdXBwb3J0YCk7XG4gICAgfVxuICAgIC8vIHRoaXMuJGVsID0gSlF1ZXJ5KHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIGN1c3RvbSBlbGVtZW50XG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKCkge1xuICAgIHRoaXMuZGVidWcoJ3JlbW92ZScsIHRoaXMuZWwpO1xuICAgIGlmICh0aGlzLmVsICYmIHRoaXMuZWwucGFyZW50RWxlbWVudCkge1xuICAgICAgdGhpcy5lbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xuICAgICAgaWYgKCEod2luZG93IGFzIGFueSkuY3VzdG9tRWxlbWVudHMpIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWRGYWxsYmFja0NhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZEZhbGxiYWNrQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIC8vIGNvbnN0IHBhcmVudCA9IHRoaXMuZWwucGFyZW50Tm9kZTtcbiAgICAvLyBpZiAocGFyZW50KSB7XG4gICAgLy8gICBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XG4gICAgLy8gfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHRlbXBsYXRlKCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gfCBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKlxuICAgKiByZXR1cm5zIGEgbGlzdCBvZiBhdHRyaWJ1dGVzIHdpY2ggYXJlIHJlcXVpcmVkIHVudGlsIHRoZSByaWJhIGJpbmRpbmcgc3RhcnRzXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVxdWlyZWRBdHRyaWJ1dGVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgaW5pdChvYnNlcnZlZEF0dHJpYnV0ZXM6IHN0cmluZ1tdKSB7XG5cbiAgICB0aGlzLmluaXRBdHRyaWJ1dGVPYnNlcnZlcihvYnNlcnZlZEF0dHJpYnV0ZXMpO1xuXG4gICAgLyoqXG4gICAgICogQWZ0ZXIgYWxsIHJlcXVpcmVkIGF0dHJpYnV0ZXMgYXJlIHNldCB3ZSBsb2FkIHRoZSB0ZW1wbGF0ZSBhbmQgYmluZCB0aGUgY29tcG9uZW50XG4gICAgICovXG4gICAgaWYgKHRoaXMuY2hlY2tSZXF1aXJlZEF0dHJpYnV0ZXMoKSkge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZFRlbXBsYXRlKClcbiAgICAgIC50aGVuKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5hdXRvYmluZCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5iaW5kKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1Zygnbm90IGFsbCByZXF1aXJlZCBhdHRyaWJ1dGVzIGFyZSBzZXQgdG8gbG9hZCBhbmQgYmluZCB0aGUgdGVtcGxhdGUnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVxdWlyZWQgYXR0cmlidXRlcyBiZWZvcmUgdGhlIHZpZXcgaXMgYm91bmRcbiAgICpcbiAgICogVGhlIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBpcyBjYWxsZWQgZm9yIGVhY2ggYXR0cmlidXRlIHdpY2ggdXBkYXRlcyB0aGUgcmliYSB2aWV3IGVhY2ggdGltZVxuICAgKiB3aGljaCBjYW4gaGF2ZSBhIGJpZyBpbXBhY3Qgb24gcGVyZm9ybWFuY2Ugb3IgcmVxdWlyZWQgYXR0cmlidXRlcyBhcmUgbm90IHlldCBhdmFpbGFibGUgd2hpY2ggY2FuIGxlYWQgdG8gZXJyb3JzLlxuICAgKiBTbyBkZWZpbmUgcmVxdWlyZWQgYXR0cml1dGVzIGFuZCB0aGUgdmlldyBpcyBvbnkgYmluZCB0aGUgZmlyc3QgdGltZSBhZnRlciBhbGwgdGhpcyBhdHRyaWJ1dGVzIGFyZSB0cmFuc21pdHRlZC5cbiAgICovXG4gIHByb3RlY3RlZCBjaGVja1JlcXVpcmVkQXR0cmlidXRlcygpIHtcbiAgICBsZXQgYWxsRGVmaW5lZCA9IHRydWU7XG4gICAgY29uc3QgcmVxdWlyZWRBdHRyaWJ1dGVzID0gdGhpcy5yZXF1aXJlZEF0dHJpYnV0ZXMoKTtcbiAgICByZXF1aXJlZEF0dHJpYnV0ZXMuZm9yRWFjaCgocmVxdWlyZWRBdHRyaWJ1dGU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCF0aGlzLnNjb3BlLmhhc093blByb3BlcnR5KHJlcXVpcmVkQXR0cmlidXRlKSB8fCAhdGhpcy5zY29wZVtyZXF1aXJlZEF0dHJpYnV0ZV0gKSB7XG4gICAgICAgIHRoaXMuZGVidWcoYEF0dHJpYnV0ZSAke3JlcXVpcmVkQXR0cmlidXRlfSBub3Qgc2V0OiAke3RoaXMuc2NvcGVbcmVxdWlyZWRBdHRyaWJ1dGVdfWApO1xuICAgICAgICBhbGxEZWZpbmVkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlYnVnKGBBdHRyaWJ1dGUgJHtyZXF1aXJlZEF0dHJpYnV0ZX0gaXMgZGVmaW5lZDogJHt0aGlzLnNjb3BlW3JlcXVpcmVkQXR0cmlidXRlXX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYWxsRGVmaW5lZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBwYXJzZUF0dHJpYnV0ZShhdHRyOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgbGV0IHZhbHVlOiBhbnkgPSBhdHRyO1xuICAgIGlmIChhdHRyID09PSAndHJ1ZScpIHtcbiAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdmYWxzZScpIHtcbiAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChhdHRyID09PSAnbnVsbCcpIHtcbiAgICAgIHZhbHVlID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICcnKSB7XG4gICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKCFpc05hTihOdW1iZXIoYXR0cikpKSB7XG4gICAgICB2YWx1ZSA9IE51bWJlcihhdHRyKTtcbiAgICAgIC8vIElmIG51bWJlciBpcyB0b28gbGFyZ2Ugc3RvcmUgdGhlIHZhbHVlIGFzIHN0cmluZ1xuICAgICAgaWYgKHZhbHVlID49IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSB7XG4gICAgICAgIHZhbHVlID0gYXR0cjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFV0aWxzLmlzSnNvbihhdHRyKSkge1xuICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKGF0dHIgYXMgYW55KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgdG8gbGlzdGUgZm9yIHB1Ymxpc2ggYmluZGVyIGV2ZW50IGZvciB0d28td2F5LWJpbmRpbmcgaW4gd2ViIGNvbXBvbmVudHNcbiAgICovXG4gIHByb3RlY3RlZCBwdWJsaXNoKG5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSwgbmFtZXNwYWNlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncHVibGlzaC1iaW5kZXItY2hhbmdlOicgKyBuYW1lLCB7IGRldGFpbDoge1xuICAgICAgbmFtZSxcbiAgICAgIG5ld1ZhbHVlLFxuICAgICAgbmFtZXNwYWNlOiBudWxsLCAvLyBUT0RPXG4gICAgfX0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBiaW5kaW5ncyAobW9zdCBvbi0qKSBpbnNpdGUgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZXZlbnRIYW5kbGVyKHNlbGY6IENvbXBvbmVudCk6IEV2ZW50SGFuZGxlciB7XG4gICAgdGhpcy5kZWJ1ZygnZXZlbnRIYW5kbGVyJywgc2VsZik7XG4gICAgLy8gSU1QT1JUQU5UIHRoaXMgbXVzdCBiZSBhIGZ1bmN0aW9uIGFuZCBub3QgYSBBcnJvdyBGdW5jdGlvbnNcbiAgICByZXR1cm4gZnVuY3Rpb24odGhpczogRXZlbnRIYW5kbGVyLCBjb250ZXh0OiBCaW5kaW5nLCBldmVudDogRXZlbnQsIGJpbmRpbmc6IEJpbmRpbmcsIGVsOiBIVE1MRWxlbWVudCkge1xuICAgICAgdGhpcy5jYWxsKHNlbGYsIGNvbnRleHQsIGV2ZW50LCBiaW5kaW5nLnZpZXcubW9kZWxzLCBlbCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYSBjYWxsIGZvcm1hdHRlciB0byBhdm9pZCB0aGUgXCJ0aGlzXCIgY29udGV4dCBwcm9ibGVtXG4gICAqL1xuICBwcm90ZWN0ZWQgY2FsbEZvcm1hdHRlckhhbmRsZXIoc2VsZjogdGhpcyk6IGFueSB7XG4gICAgcmV0dXJuIChmbjogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnksIC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICBzZWxmLmRlYnVnKCdjYWxsRm9ybWF0dGVySGFuZGxlcicsIHRoaXMsIGZuKTtcbiAgICAgIHJldHVybiBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhIGFyZ3MgZm9ybWF0dGVyIHRvIGF2b2lkIHRoZSBcInRoaXNcIiBjb250ZXh0IHByb2JsZW1cbiAgICpcbiAgICogU2V0cyBhcmd1bWVudHMgdG8gYSBmdW5jdGlvbiB3aXRob3V0IGRpcmVjdGx5IGNhbGwgdGhlbVxuICAgKiBAcGFyYW0gZm4gVGhlIGZ1bmN0aW9uIHlvdSB3aXNoIHRvIGNhbGxcbiAgICogQHBhcmFtIGFyZ3MgdGhlIHBhcmFtZXRlcnMgeW91IHdpc2ggdG8gY2FsbCB0aGUgZnVuY3Rpb24gd2l0aFxuICAgKi9cbiAgcHJvdGVjdGVkIGFyZ3NGb3JtYXR0ZXJIYW5kbGVyKHNlbGY6IHRoaXMpOiBhbnkge1xuICAgIHRoaXMuZGVidWcoJ2FyZ3NGb3JtYXR0ZXJIYW5kbGVyJywgc2VsZik7XG4gICAgcmV0dXJuIChmbjogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnksIC4uLmZuQXJnczogYW55W10pOiBhbnkgPT4ge1xuICAgICAgcmV0dXJuIChldmVudDogRXZlbnQsIHNjb3BlOiBhbnksIGVsOiBIVE1MRWxlbWVudCwgYmluZGluZzogYW55KSA9PiB7XG4gICAgICAgIC8vIGFwcGVuZCB0aGUgZXZlbnQgaGFuZGxlciBhcmdzIHRvIHBhc3NlZCBhcmdzXG4gICAgICAgIGZuQXJncy5wdXNoKGV2ZW50KTtcbiAgICAgICAgZm5BcmdzLnB1c2goc2NvcGUpO1xuICAgICAgICBmbkFyZ3MucHVzaChlbCk7XG4gICAgICAgIGZuQXJncy5wdXNoKGJpbmRpbmcpO1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkoc2VsZiwgZm5BcmdzKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGN1c3RvbSBFbGVtZW50IG1ldGhvZFxuICAgKiBJbnZva2VkIHdoZW4gdGhlIGN1c3RvbSBlbGVtZW50IGlzIGZpcnN0IGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQncyBET00uXG4gICAqL1xuICBwcm90ZWN0ZWQgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5kZWJ1ZygnY29ubmVjdGVkQ2FsbGJhY2sgY2FsbGVkJyk7XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCBjdXN0b20gRWxlbWVudCBtZXRob2RcbiAgICogSW52b2tlZCB3aGVuIHRoZSBjdXN0b20gZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQgZnJvbSB0aGUgZG9jdW1lbnQncyBET00uXG4gICAqL1xuICBwcm90ZWN0ZWQgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5kZWJ1ZygnZGlzY29ubmVjdGVkQ2FsbGJhY2sgY2FsbGVkJyk7XG4gICAgaWYgKHRoaXMudmlldykge1xuICAgICAgdGhpcy52aWV3LnVuYmluZCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmF0dHJpYnV0ZU9ic2VydmVyRmFsbGJhY2spIHtcbiAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXJGYWxsYmFjay5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdiaW5kZXItY2hhbmdlZCcsIHRoaXMuQmluZGVyQ2hhbmdlZEV2ZW50SGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCBjdXN0b20gRWxlbWVudCBtZXRob2RcbiAgICogSW52b2tlZCB3aGVuIHRoZSBjdXN0b20gZWxlbWVudCBpcyBtb3ZlZCB0byBhIG5ldyBkb2N1bWVudC5cbiAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWVcbiAgICogQHBhcmFtIG9sZFZhbHVlXG4gICAqIEBwYXJhbSBuZXdWYWx1ZVxuICAgKiBAcGFyYW0gbmFtZXNwYWNlXG4gICAqL1xuICBwcm90ZWN0ZWQgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZU5hbWU6IHN0cmluZywgb2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSwgbmFtZXNwYWNlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgbmV3VmFsdWUgPSB0aGlzLnBhcnNlQXR0cmlidXRlKG5ld1ZhbHVlKTtcbiAgICBhdHRyaWJ1dGVOYW1lID0gVXRpbHMuY2FtZWxDYXNlKGF0dHJpYnV0ZU5hbWUpO1xuICAgIHRoaXMuZGVidWcoJ2F0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBjYWxsZWQnLCBhdHRyaWJ1dGVOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIG5hbWVzcGFjZSk7XG5cbiAgICBpZiAodGhpcy5zY29wZSAmJiB0aGlzLnNjb3BlW2F0dHJpYnV0ZU5hbWVdKSB7XG4gICAgICBvbGRWYWx1ZSA9IHRoaXMuc2NvcGVbYXR0cmlidXRlTmFtZV07XG4gICAgfVxuXG4gICAgLy8gYXV0b21hdGljYWxseSBpbmplY3Qgb2JzZXJ2ZWQgYXR0cmlidXRlcyB0byB2aWV3IHNjb3BlXG4gICAgdGhpcy5zY29wZVthdHRyaWJ1dGVOYW1lXSA9IG5ld1ZhbHVlO1xuXG4gICAgLy8gY2FsbCBjdXN0b20gYXR0cmlidXRlIGNoYW5nZWQgY2FsbGJhY2sgd2l0aCBwYXJzZWQgdmFsdWVzXG4gICAgdGhpcy5wYXJzZWRBdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBuYW1lc3BhY2UpO1xuXG4gICAgLyoqXG4gICAgICogQWZ0ZXIgYWxsIHJlcXVpcmVkIGF0dHJpYnV0ZXMgYXJlIHNldCB3ZSBsb2FkIHRoZSB0ZW1wbGF0ZSBhbmQgYmluZCB0aGUgY29tcG9uZW50XG4gICAgICovXG4gICAgaWYgKHRoaXMuY2hlY2tSZXF1aXJlZEF0dHJpYnV0ZXMoKSkge1xuICAgICAgdGhpcy5sb2FkVGVtcGxhdGUoKVxuICAgICAgLnRoZW4oKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9iaW5kKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmluZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1Zygnbm90IGFsbCByZXF1aXJlZCBhdHRyaWJ1dGVzIGFyZSBzZXQgdG8gbG9hZCBhbmQgYmluZCB0aGUgdGVtcGxhdGUnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2ltaWxhciB0byBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgYnV0IGF0dHJpYnV0ZSBhcmd1bWVudHMgYXJlIGFscmVhZHkgcGFyc2VkIGFzIHRoZXkgYXJlIHN0b3JlZCBpbiB0aGUgc2NvcGVcbiAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWVcbiAgICogQHBhcmFtIG9sZFZhbHVlXG4gICAqIEBwYXJhbSBuZXdWYWx1ZVxuICAgKiBAcGFyYW0gbmFtZXNwYWNlXG4gICAqL1xuICBwcm90ZWN0ZWQgcGFyc2VkQXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZU5hbWU6IHN0cmluZywgb2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSwgbmFtZXNwYWNlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5kZWJ1ZygncGFyc2VkQXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIGNhbGxlZCcsIGF0dHJpYnV0ZU5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgbmFtZXNwYWNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGN1c3RvbSBFbGVtZW50IG1ldGhvZFxuICAgKiBJbnZva2VkIHdoZW4gb25lIG9mIHRoZSBjdXN0b20gZWxlbWVudCdzIGF0dHJpYnV0ZXMgaXMgYWRkZWQsIHJlbW92ZWQsIG9yIGNoYW5nZWQuXG4gICAqIE5vdGU6IE5vdCBzdXBwb3J0ZWQgb24gcG9seWZpbGw6IGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL2N1c3RvbS1lbGVtZW50cyNrbm93bi1idWdzLWFuZC1saW1pdGF0aW9uc1xuICAgKiBAcGFyYW0gb2xkRG9jdW1lbnRcbiAgICogQHBhcmFtIG5ld0RvY3VtZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgYWRvcHRlZENhbGxiYWNrKG9sZERvY3VtZW50OiBEb2N1bWVudCwgbmV3RG9jdW1lbnQ6IERvY3VtZW50KSB7XG4gICAgdGhpcy5kZWJ1ZygnYWRvcHRlZENhbGxiYWNrIGNhbGxlZCcsIG9sZERvY3VtZW50LCBuZXdEb2N1bWVudCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgbG9hZFRlbXBsYXRlKCkge1xuICAgIGlmICh0aGlzLnRlbXBsYXRlTG9hZGVkKSB7XG4gICAgICB0aGlzLmRlYnVnKCd0ZW1wbGF0ZSBhbHJlYWR5IGxvYWRlZCcpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmNoZWNrUmVxdWlyZWRBdHRyaWJ1dGVzKCkpIHtcbiAgICAgIHRoaXMuZGVidWcoJ25vdCBhbGwgcmVxdWlyZWQgYXR0cmlidXRlcyBhcmUgc2V0IHRvIGxvYWQgdGhlIHRlbXBsYXRlJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBpZiBpbm5lckhUTUwgaXMgbnVsbCB0aGlzIGNvbXBvbmVudCB1c2VzIHRoZSBpbm5lckhUTUwgd2hpY2ggaGUgYWxyZWFkeSBoYXMhXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnRlbXBsYXRlKCkpXG4gICAgLnRoZW4oKHRlbXBsYXRlKSA9PiB7XG4gICAgICB0aGlzLmRlYnVnKCd0ZW1wbGF0ZScsIHRlbXBsYXRlKTtcbiAgICAgIGlmICh0ZW1wbGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH0pXG4gICAgLnRoZW4oKHRlbXBsYXRlKSA9PiB7XG4gICAgICB0aGlzLnRlbXBsYXRlTG9hZGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgdGhpcy50ZW1wbGF0ZUxvYWRlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIGJpbmQoKSB7XG4gICAgaWYgKHRoaXMuYm91bmQpIHtcbiAgICAgIHRoaXMuZGVidWcoJ2NvbXBvbmVudCBhbHJlYWR5IGJvdW5kZWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY2hlY2tSZXF1aXJlZEF0dHJpYnV0ZXMoKSkge1xuICAgICAgdGhpcy5kZWJ1Zygnbm90IGFsbCByZXF1aXJlZCBhdHRyaWJ1dGVzIGFyZSBzZXQgZm9yIGJpbmQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLmJlZm9yZUJpbmQoKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5lbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoaXMuZWwgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yaWJhID0gbmV3IFJpYmEoKTtcbiAgICAgIGNvbnN0IHZpZXdPcHRpb25zID0gdGhpcy5yaWJhLmdldFZpZXdPcHRpb25zKHtcbiAgICAgICAgaGFuZGxlcjogdGhpcy5ldmVudEhhbmRsZXIodGhpcyksXG4gICAgICAgIGZvcm1hdHRlcnM6IHtcbiAgICAgICAgICBjYWxsOiB0aGlzLmNhbGxGb3JtYXR0ZXJIYW5kbGVyKHRoaXMpLFxuICAgICAgICAgIGFyZ3M6IHRoaXMuYXJnc0Zvcm1hdHRlckhhbmRsZXIodGhpcyksXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgdGhpcy52aWV3ID0gbmV3IFZpZXcoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5lbC5jaGlsZE5vZGVzKSBhcyB1bmtub3duIGFzIE5vZGVMaXN0T2Y8Q2hpbGROb2RlPiwgdGhpcy5zY29wZSwgdmlld09wdGlvbnMpO1xuICAgICAgdGhpcy5zY29wZSA9IHRoaXMudmlldy5tb2RlbHM7XG4gICAgICB0aGlzLnZpZXcuYmluZCgpO1xuICAgICAgcmV0dXJuIHRoaXMudmlldztcbiAgICB9KVxuICAgIC50aGVuKCh2aWV3KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5hZnRlckJpbmQoKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMudmlldztcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyB1bmJpbmQoKSB7XG4gICAgaWYgKHRoaXMudmlldykge1xuICAgICAgdGhpcy52aWV3LnVuYmluZCgpO1xuICAgICAgZGVsZXRlIHRoaXMudmlldztcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgYnVpbGQoKSB7XG4gICAgaWYgKHRoaXMudmlldykge1xuICAgICAgdGhpcy52aWV3LmJ1aWxkKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIGJlZm9yZUJpbmQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLmRlYnVnKCdiZWZvcmVCaW5kJywgdGhpcy5ib3VuZCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgYWZ0ZXJCaW5kKCk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5kZWJ1ZygnYWZ0ZXJCaW5kJywgdGhpcy5ib3VuZCk7XG4gIH1cblxuICBwcml2YXRlIEJpbmRlckNoYW5nZWRFdmVudEhhbmRsZXIoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgZGF0YSA9ICggZXZlbnQgYXMgQ3VzdG9tRXZlbnQgKS5kZXRhaWw7XG4gICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soZGF0YS5uYW1lLCBkYXRhLm9sZFZhbHVlLCBkYXRhLm9sZFZhbHVlLCBkYXRhLm5hbWVzcGFjZSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciB0byBsaXN0ZW4gYXR0cmlidXRlIGNoYW5nZSBldmVudCBhcyBmYWxsYmFjayBmb3IgTXV0YXRpb25PYnNlcnZlclxuICAgKi9cbiAgcHJpdmF0ZSBpbml0QXR0cmlidXRlT2JzZXJ2ZXIob2JzZXJ2ZWRBdHRyaWJ1dGVzOiBzdHJpbmdbXSkge1xuXG4gICAgaWYgKCh3aW5kb3cgYXMgYW55KS5jdXN0b21FbGVtZW50cykge1xuICAgICAgLy8gdXNlIG5hdGl2ZSBpbXBsZW1lbnRhaW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgod2luZG93IGFzIGFueSkuTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAvLyB1c2UgTXV0YXRpb25PYnNlcnZlciBhcyBmYWxsYmFja1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZU9ic2VydmVyRmFsbGJhY2sgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGVidWcoJ2F0dHJpYnV0ZXMgY2hhbmdlZCcsIG11dGF0aW9uKTtcbiAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGF0dHJpYnV0ZSBpcyBhIHdhdGNoZWQgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmVkQXR0cmlidXRlcy5pbmRleE9mKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZShtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUsIG11dGF0aW9uLm9sZFZhbHVlLCBuZXdWYWx1ZSwgbXV0YXRpb24uYXR0cmlidXRlTmFtZXNwYWNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXJGYWxsYmFjay5vYnNlcnZlKHRoaXMuZWwsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVzZSBhdHRyaWJ1dGUgY2hhbmdlIGV2ZW50IGFzIGZhbGxiYWNrIGZvciBNdXRhdGlvbk9ic2VydmVyXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignYmluZGVyLWNoYW5nZWQnLCB0aGlzLkJpbmRlckNoYW5nZWRFdmVudEhhbmRsZXIpO1xuICAgICAgICAvLyB0aGlzLiRlbC5vbignYmluZGVyLWNoYW5nZWQnLCB0aGlzLkJpbmRlckNoYW5nZWRFdmVudEhhbmRsZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBjYWxsIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBmb3IgYWxsIGFscmVhZHkgc2V0dGVkIHN0YXRpYyBhdHRyaWJ1dGVzXG4gICAgICBjb25zdCBhdHRyaWJ1dGVzID0gdGhpcy5lbC5hdHRyaWJ1dGVzO1xuICAgICAgZm9yIChjb25zdCBpIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBjb25zdCBhdHRyaWJ1dGU6IE5vZGUgPSBhdHRyaWJ1dGVzW2ldO1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBhdHRyaWJ1dGUubm9kZU5hbWU7XG4gICAgICAgICAgaWYgKG9ic2VydmVkQXR0cmlidXRlcy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBhdHRyaWJ1dGUubm9kZVZhbHVlO1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgbnVsbCwgbmV3VmFsdWUsIG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIGZha2UgaHRtbCBlbGVtZW50IG1ha2VzIGl0IHBvc3NpYmxlIHRvIHVzZSBjdXN0b20gZWxlbWVudHMgd2l0aCBwcm9kb3R5cGUgY2xhc3NlcyBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBvbiBvbGQgYnJvd3NlcnNcbiAqL1xuY2xhc3MgRmFrZUhUTUxFbGVtZW50IC8qaW1wbGVtZW50cyBIVE1MRWxlbWVudCovIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudD86IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKHdpbmRvdy5jdXN0b21FbGVtZW50cykge1xuICAgICAgcmV0dXJuIFJlZmxlY3QuY29uc3RydWN0KEhUTUxFbGVtZW50LCBbXSwgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuICB9XG59XG5cbmlmICh3aW5kb3cuY3VzdG9tRWxlbWVudHMpIHtcbiAgRmFrZUhUTUxFbGVtZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSFRNTEVsZW1lbnQucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHt2YWx1ZTogSFRNTEVsZW1lbnQsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWV9LFxuICB9KTtcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKEZha2VIVE1MRWxlbWVudCwgSFRNTEVsZW1lbnQpO1xufVxuXG5leHBvcnQgeyBGYWtlSFRNTEVsZW1lbnQgfTtcbiIsImV4cG9ydCAqIGZyb20gJy4uL3NlcnZpY2VzL2NvbXBvbmVudC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYWJzdHJhY3QtcmliYS1jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9yaWJhLWNvbXBvbmVudCc7XG4iLCJpbXBvcnQgeyBJRGVidWdnZXIgfSBmcm9tICcuLi92ZW5kb3JzJztcbmltcG9ydCB7IENvbXBvbmVudCwgSVJpYmFDb21wb25lbnRDb250ZXh0IH0gZnJvbSAnLi9hYnN0cmFjdC1yaWJhLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGp1c3QgdXNlZCBpbiB2aWV3LnRzIGJlY2F1c2UgdHlwZXMgb2YgYENvbXBvbmVudGAgY2FuIG5vdCBoYXZlIGEgYG5ld2AgY29uc3R1Y3RvclxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSaWJhQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcHVibGljIHN0YXRpYyB0YWdOYW1lOiBzdHJpbmc7XG5cbiAgcHVibGljIHJlYWRvbmx5IGJvdW5kOiBib29sZWFuO1xuXG4gIHB1YmxpYyBjb250ZXh0PzogSVJpYmFDb21wb25lbnRDb250ZXh0O1xuXG4gIHByb3RlY3RlZCBkZWJ1ZzogSURlYnVnZ2VyO1xuICBwcm90ZWN0ZWQgdmlldz86IFZpZXc7XG4gIC8vIHByb3RlY3RlZCBfYm91bmQ6IGJvb2xlYW47XG5cbiAgcHJvdGVjdGVkIHRlbXBsYXRlTG9hZGVkOiBib29sZWFuO1xuXG4gIHByb3RlY3RlZCBlbDogSFRNTFVua25vd25FbGVtZW50O1xuXG4gIHByb3RlY3RlZCBzY29wZTogYW55O1xuXG4gIC8qKlxuICAgKiBJZiB0cnVlIHRoZSBjb21wb25lbnQgd2lsbCBhdXRvbWF0aWNhbGx5IGJpbmQgdGhlIGNvbXBvbmVudCB0byByaWJhIGlmIGFsbCByZXF1aXJlZCBhdHRyaWJ1dGVzIGFyZSBzZXR0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBhdXRvYmluZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50PzogSFRNTFVua25vd25FbGVtZW50LCBjb250ZXh0PzogSVJpYmFDb21wb25lbnRDb250ZXh0KTtcblxuICBwdWJsaWMgZGlzY29ubmVjdGVkRmFsbGJhY2tDYWxsYmFjaygpOiB2b2lkO1xuXG4gIHByb3RlY3RlZCB0ZW1wbGF0ZSgpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHwgc3RyaW5nIHwgbnVsbDtcblxuICAvKipcbiAgICogcmV0dXJucyBhIGxpc3Qgb2YgYXR0cmlidXRlcyB3aWNoIGFyZSByZXF1aXJlZCB1bnRpbCB0aGUgcmliYSBiaW5kaW5nIHN0YXJ0c1xuICAgKi9cbiAgcHJvdGVjdGVkIHJlcXVpcmVkQXR0cmlidXRlcygpOiBzdHJpbmdbXTtcblxuICBwcm90ZWN0ZWQgZXZlbnRIYW5kbGVyKHNlbGY6IENvbXBvbmVudCk6IEV2ZW50SGFuZGxlcjtcblxuICAvKipcbiAgICogRGVmYXVsdCBjdXN0b20gRWxlbWVudCBtZXRob2RcbiAgICogSW52b2tlZCB3aGVuIHRoZSBjdXN0b20gZWxlbWVudCBpcyBmaXJzdCBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50J3MgRE9NLlxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgY3VzdG9tIEVsZW1lbnQgbWV0aG9kXG4gICAqIEludm9rZWQgd2hlbiB0aGUgY3VzdG9tIGVsZW1lbnQgaXMgZGlzY29ubmVjdGVkIGZyb20gdGhlIGRvY3VtZW50J3MgRE9NLlxuICAgKi9cbiAgcHJvdGVjdGVkIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgY3VzdG9tIEVsZW1lbnQgbWV0aG9kXG4gICAqIEludm9rZWQgd2hlbiB0aGUgY3VzdG9tIGVsZW1lbnQgaXMgbW92ZWQgdG8gYSBuZXcgZG9jdW1lbnQuXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lXG4gICAqIEBwYXJhbSBvbGRWYWx1ZVxuICAgKiBAcGFyYW0gbmV3VmFsdWVcbiAgICogQHBhcmFtIG5hbWVzcGFjZVxuICAgKi9cbiAgcHJvdGVjdGVkIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGVOYW1lOiBzdHJpbmcsIG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnksIG5hbWVzcGFjZTogc3RyaW5nIHwgbnVsbCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgY3VzdG9tIEVsZW1lbnQgbWV0aG9kXG4gICAqIEludm9rZWQgd2hlbiBvbmUgb2YgdGhlIGN1c3RvbSBlbGVtZW50J3MgYXR0cmlidXRlcyBpcyBhZGRlZCwgcmVtb3ZlZCwgb3IgY2hhbmdlZC5cbiAgICogTm90ZTogTm90IHN1cHBvcnRlZCBvbiBwb2x5ZmlsbDogaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvY3VzdG9tLWVsZW1lbnRzI2tub3duLWJ1Z3MtYW5kLWxpbWl0YXRpb25zXG4gICAqIEBwYXJhbSBvbGREb2N1bWVudFxuICAgKiBAcGFyYW0gbmV3RG9jdW1lbnRcbiAgICovXG4gIHByb3RlY3RlZCBhZG9wdGVkQ2FsbGJhY2sob2xkRG9jdW1lbnQ6IERvY3VtZW50LCBuZXdEb2N1bWVudDogRG9jdW1lbnQpOiB2b2lkO1xuXG4gIHByb3RlY3RlZCBiaW5kKCk6IFByb21pc2U8Vmlldz47XG59XG4iLCJpbXBvcnQgeyBJUmliYU1vZHVsZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgKiBhcyBiaW5kZXJzIGZyb20gJy4vYmluZGVycyc7XG5pbXBvcnQge1xuICBjb21wYXJlRm9ybWF0dGVycyxcbiAgbWF0aEZvcm1hdHRlcnMsXG4gIHByb3BlcnR5Rm9ybWF0dGVycyxcbiAgc3BlY2lhbEZvcm1hdHRlcnMsXG4gIHN0cmluZ0Zvcm1hdHRlcnMsXG59IGZyb20gJy4vZm9ybWF0dGVycyc7XG5pbXBvcnQgKiBhcyBzZXJ2aWNlcyBmcm9tICcuL3NlcnZpY2VzJztcblxuZXhwb3J0IGNvbnN0IGNvcmVNb2R1bGU6IElSaWJhTW9kdWxlID0ge1xuICBmb3JtYXR0ZXJzOiB7XG4gICAgLi4uc3BlY2lhbEZvcm1hdHRlcnMsXG4gICAgLi4uY29tcGFyZUZvcm1hdHRlcnMsXG4gICAgLi4ubWF0aEZvcm1hdHRlcnMsXG4gICAgLi4uc3RyaW5nRm9ybWF0dGVycyxcbiAgICAuLi5wcm9wZXJ0eUZvcm1hdHRlcnMsXG4gIH0sXG4gIGJpbmRlcnMsXG4gIHNlcnZpY2VzLFxufTtcbiIsImltcG9ydCB7IElGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm1hdHRlcic7XG4vKipcbiAqIGEgJiYgYlxuICovXG5leHBvcnQgY29uc3QgYW5kOiBJRm9ybWF0dGVyID0ge1xuICBuYW1lOiAnYW5kJyxcbiAgcmVhZChhOiBib29sZWFuLCBiOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIGEgJiYgYjtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBJRm9ybWF0dGVyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtYXR0ZXInO1xuLyoqXG4gKiBhID49IGIgJiYgYSA8PSBjXG4gKi9cbmV4cG9ydCBjb25zdCBiZXR3ZWVuOiBJRm9ybWF0dGVyID0ge1xuICBuYW1lOiAnYmV0d2VlbicsXG4gIHJlYWQobnVtOiBudW1iZXIsICAuLi5udW1zOiBhbnlbXSkge1xuICAgIHJldHVybiBudW0gPj0gbnVtc1swXSAmJiBudW0gPD0gbnVtc1sxXTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBJRm9ybWF0dGVyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtYXR0ZXInO1xuLyoqXG4gKiBlcXVhbCBvciBncmVhdGVyIHRoYW5cbiAqIGEgPj0gYlxuICovXG5leHBvcnQgY29uc3QgZWd0OiBJRm9ybWF0dGVyID0ge1xuICBuYW1lOiAnZWd0JyxcbiAgcmVhZChhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICAgIHJldHVybiBhID49IGI7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgSUZvcm1hdHRlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybWF0dGVyJztcbi8qKlxuICogZXVxYWwgb3IgbG93ZXIgdGhhblxuICogYSA8PSBiXG4gKi9cbmV4cG9ydCBjb25zdCBlbHQ6IElGb3JtYXR0ZXIgPSB7XG4gIG5hbWU6ICdlbHQnLFxuICByZWFkKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGEgPD0gYjtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBJRm9ybWF0dGVyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtYXR0ZXInO1xuLyoqXG4gKiBhID09PSBiXG4gKi9cbmV4cG9ydCBjb25zdCBlcTogSUZvcm1hdHRlciA9IHtcbiAgbmFtZTogJ2VxJyxcbiAgcmVhZChhOiBhbnksIGI6IGFueSkge1xuICAgIHJldHVybiBhID09PSBiO1xuICB9LFxufTtcbiIsImltcG9ydCB7IElGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm1hdHRlcic7XG4vKipcbiAqIGdyZWF0ZXIgdGhhblxuICogYSA+IGJcbiAqL1xuZXhwb3J0IGNvbnN0IGd0OiBJRm9ybWF0dGVyID0ge1xuICBuYW1lOiAnZ3QnLFxuICByZWFkKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGEgPiBiO1xuICB9LFxufTtcbiIsIi8qKlxuICogQWRkIHVzZWZ1bCBnZW5lcmFsLXB1cnBvc2UgZm9ybWF0dGVycyBmb3IgUml2ZXRzLmpzXG4gKiBTb21lIGZvcm1hdHRlcnMgZnJvbSBjYXJ0LmpzIGFuZCByaXZldHNqcy1zdGRsaWJcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2Rpc2NvbGFicy9jYXJ0anMvXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0aGlldXJpb2xvL3JpdmV0c2pzLXN0ZGxpYlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vSnVtcExpbmtOZXR3b3JrL3Nob3BpZnktcHJvZHVjdGpzXG4gKi9cblxuaW1wb3J0IHsgSUZvcm1hdHRlcnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuLy8gY29tcGFyZSBmdW5jdGlvbnNcbmltcG9ydCB7IGFuZCB9IGZyb20gJy4vYW5kLmZvcm1hdHRlcic7XG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi9iZXR3ZWVuLmZvcm1hdHRlcic7XG5pbXBvcnQgeyBlZ3QgfSBmcm9tICcuL2VndC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgZXEgfSBmcm9tICcuL2VxLmZvcm1hdHRlcic7XG5pbXBvcnQgeyBndCB9IGZyb20gJy4vZ3QuZm9ybWF0dGVyJztcbmltcG9ydCB7IGlzRGVmaW5lZCB9IGZyb20gJy4vaXMtZGVmaW5lZC5mb3JtYXR0ZXJzJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi9pcy1vYmplY3QuZm9ybWF0dGVyJztcbmltcG9ydCB7IGlzVW5kZWZpbmVkIH0gZnJvbSAnLi9pcy11bmRlZmluZWQuZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBuZSB9IGZyb20gJy4vbmUuZm9ybWF0dGVyJztcbmltcG9ydCB7IGx0IH0gZnJvbSAnLi9sdC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgZWx0IH0gZnJvbSAnLi9lbHQuZm9ybWF0dGVyJztcbmltcG9ydCB7IG9yIH0gZnJvbSAnLi9vci5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi9ub3QuZm9ybWF0dGVyJztcblxuZXhwb3J0IHsgYW5kLCBiZXR3ZWVuLCBlZ3QsIGVxLCBndCwgaXNEZWZpbmVkLCBpc09iamVjdCwgaXNVbmRlZmluZWQsIG5lLCBsdCwgZWx0LCBvciwgbm90IH07XG5cbmV4cG9ydCBjb25zdCBjb21wYXJlRm9ybWF0dGVyczogSUZvcm1hdHRlcnMgPSB7XG4gIGFuZCwgYmV0d2VlbiwgZWd0LCBlcSwgZ3QsIGlzRGVmaW5lZCwgaXNPYmplY3QsIGlzVW5kZWZpbmVkLCBuZSwgbHQsIGVsdCwgb3IsIG5vdCxcbn07XG4iLCJpbXBvcnQgeyBJRm9ybWF0dGVyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtYXR0ZXInO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsdWUgaXMgZGVmaW5lZFxuICovXG5leHBvcnQgY29uc3QgaXNEZWZpbmVkOiBJRm9ybWF0dGVyID0ge1xuICBuYW1lOiAnaXNEZWZpbmVkJyxcbiAgcmVhZDogVXRpbHMuaXNEZWZpbmVkLFxufTtcbiIsImltcG9ydCB7IElGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm1hdHRlcic7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzJztcblxuLyoqXG4gKiBDaGVjayBpZiB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0OiBJRm9ybWF0dGVyID0ge1xuICBuYW1lOiAnaXNPYmplY3QnLFxuICByZWFkOiBVdGlscy5pc09iamVjdCxcbn07XG4iLCJpbXBvcnQgeyBJRm9ybWF0dGVyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtYXR0ZXInO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKi9cbmV4cG9ydCBjb25zdCBpc1VuZGVmaW5lZDogSUZvcm1hdHRlciA9IHtcbiAgbmFtZTogJ2lzVW5kZWZpbmVkJyxcbiAgcmVhZDogVXRpbHMuaXNVbmRlZmluZWQsXG59O1xuIiwiaW1wb3J0IHsgSUZvcm1hdHRlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybWF0dGVyJztcbi8qKlxuICogbG93ZXIgdGhhblxuICogYSA8IGJcbiAqL1xuZXhwb3J0IGNvbnN0IGx0OiBJRm9ybWF0dGVyID0ge1xuICBuYW1lOiAnbHQnLFxuICByZWFkKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGEgPCBiO1xuICB9LFxufTtcbiIsImltcG9ydCB7IElGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm1hdHRlcic7XG4vKipcbiAqIGEgIT09IGJcbiAqL1xuZXhwb3J0IGNvbnN0IG5lOiBJRm9ybWF0dGVyID0ge1xuICBuYW1lOiAnbmUnLFxuICByZWFkKGE6IGFueSwgYjogYW55KSB7XG4gICAgcmV0dXJuIGEgIT09IGI7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgSUZvcm1hdHRlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybWF0dGVyJztcbi8qKlxuICogIWFcbiAqL1xuZXhwb3J0IGNvbnN0IG5vdDogSUZvcm1hdHRlciA9IHtcbiAgbmFtZTogJ25vdCcsXG4gIHJlYWQoYTogYm9vbGVhbikge1xuICAgIHJldHVybiAhYTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBJRm9ybWF0dGVyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtYXR0ZXInO1xuLyoqXG4gKiBhIHx8IGJcbiAqL1xuZXhwb3J0IGNvbnN0IG9yOiBJRm9ybWF0dGVyID0ge1xuICBuYW1lOiAnb3InLFxuICByZWFkKGE6IGJvb2xlYW4sIGI6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gYSB8fCBiO1xuICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29tcGFyZS9pbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL21hdGgvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9wZXJ0eS9pbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL3NwZWNpYWwvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJpbmcvaW5kZXgnO1xuIiwiaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5cbi8qKlxuICogSnVzdCBnZXQgdGhlIGRpZ2l0cyBvZiBhIHN0cmluZywgdXNlZnVsIHRvIHJlbW92ZSBweCBmcm9tIGNzcyB2YWx1ZVxuICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMTAwNjUzLzE0NjU5MTlcbiAqL1xuZXhwb3J0IGNvbnN0IGRpZ2l0cyA9IHtcbiAgbmFtZTogJ2RpZ2l0cycsXG4gIHJlYWQoc3RyOiBzdHJpbmcpIHtcbiAgICBpZiAoVXRpbHMuaXNOdW1iZXIoc3RyKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgY29uc3QgbnVtID0gc3RyLnJlcGxhY2UoL1teLVxcZFxcLl0vZywgJycpO1xuICAgIGlmIChpc05hTihOdW1iZXIobnVtKSkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKG51bSk7XG4gICAgfVxuICB9LFxufTtcbiIsIi8qKlxuICogRGl2aWRlcyBhbiBvdXRwdXQgYnkgYSBudW1iZXIuIFRoZSBvdXRwdXQgaXMgcm91bmRlZCBkb3duIHRvIHRoZSBuZWFyZXN0IGludGVnZXIuXG4gKiBAc2VlIGh0dHBzOi8vaGVscC5zaG9waWZ5LmNvbS90aGVtZXMvbGlxdWlkL2ZpbHRlcnMvbWF0aC1maWx0ZXJzI2RpdmlkZWRfYnlcbiAqL1xuZXhwb3J0IGNvbnN0IGRpdmlkZWRCeSA9IHtcbiAgbmFtZTogJ2RpdmlkZWRCeScsXG4gIHJlYWQoYTogc3RyaW5nIHwgbnVtYmVyLCBiOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICByZXR1cm4gTnVtYmVyKGEpIC8gTnVtYmVyKGIpO1xuICB9LFxufTtcbiIsIi8qKlxuICogUHLDvGZ0IG9iIGVpbmUgWmFobCBnZXJhZGUgaXN0IG9kZXIgbmljaHRcbiAqIENoZWNrIGlmIGEgbnVtYmVyIGlzIGV2ZW4gb3Igbm90XG4gKi9cbmV4cG9ydCBjb25zdCBldmVuID0ge1xuICBuYW1lOiAnZXZlbicsXG4gIHJlYWQobnVtOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKG51bSAlIDIpID09PSAwO1xuICB9LFxufTtcbiIsIi8qKlxuICogZ3JlYXRlc3QgY29tbW9uIGRpdmlzb3IgKEdDRCkgdXNlZnVsIHRvIGNhbGN1bGF0ZSB0aGUgcmF0aW9cbiAqIEBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzExODY0NjUvMTQ2NTkxOVxuICovXG5jb25zdCBfZ2NkID0gKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIChiID09PSAwKSA/IGEgOiBfZ2NkKGIsIGEgJSBiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnY2QgPSB7XG4gIG5hbWU6ICdnY2QnLFxuICByZWFkOiBfZ2NkLFxufTtcbiIsImltcG9ydCB7IElGb3JtYXR0ZXJzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5cbi8vIG1hdGggZm9ybWF0dGVyc1xuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi9yYW5kb20uZm9ybWF0dGVyJztcbmltcG9ydCB7IHBsdXMgfSBmcm9tICcuL3BsdXMuZm9ybWF0dGVyJztcbmltcG9ydCB7IG1pbnVzIH0gZnJvbSAnLi9taW51cy5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgbnVtYmVyRm9ybWF0dGVyIH0gZnJvbSAnLi9udW1iZXIuZm9ybWF0dGVyJztcbmltcG9ydCB7IHRpbWVzRm9ybWF0dGVyIH0gZnJvbSAnLi90aW1lcy5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgZGl2aWRlZEJ5IH0gZnJvbSAnLi9kaXZpZGVkQnkuZm9ybWF0dGVyJztcbmltcG9ydCB7IG1vZHVsbyB9IGZyb20gJy4vbW9kdWxvLmZvcm1hdHRlcic7XG5pbXBvcnQgeyBnY2QgfSBmcm9tICcuL2djZC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgZXZlbiB9IGZyb20gJy4vZXZlbi5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgdW5ldmVuIH0gZnJvbSAnLi91bmV2ZW4uZm9ybWF0dGVyJztcbmltcG9ydCB7IGRpZ2l0cyB9IGZyb20gJy4vZGlnaXRzLmZvcm1hdHRlcic7XG5cbmV4cG9ydCB7IHJhbmRvbSwgcGx1cywgbWludXMsIG51bWJlckZvcm1hdHRlciwgdGltZXNGb3JtYXR0ZXIsIGRpdmlkZWRCeSwgbW9kdWxvLCBnY2QsIGV2ZW4sIHVuZXZlbiwgZGlnaXRzIH07XG5cbmV4cG9ydCBjb25zdCBtYXRoRm9ybWF0dGVyczogSUZvcm1hdHRlcnMgPSB7XG4gIGRpZ2l0cywgZGl2aWRlZEJ5LCBldmVuLCBnY2QsIG1pbnVzLCBudW1iZXI6IG51bWJlckZvcm1hdHRlciwgbW9kdWxvLCBwbHVzLCByYW5kb20sIHRpbWVzOiB0aW1lc0Zvcm1hdHRlciwgdW5ldmVuLFxufTtcbiIsIi8qKlxuICogU3VidHJhY3RzIGEgbnVtYmVyIGZyb20gYW4gb3V0cHV0LlxuICogQHNlZSBodHRwczovL2hlbHAuc2hvcGlmeS5jb20vdGhlbWVzL2xpcXVpZC9maWx0ZXJzL21hdGgtZmlsdGVycyNtaW51c1xuICovXG5leHBvcnQgY29uc3QgbWludXMgPSB7XG4gIG5hbWU6ICdtaW51cycsXG4gIHJlYWQoYTogc3RyaW5nIHwgbnVtYmVyLCBiOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICByZXR1cm4gTnVtYmVyKGEpIC0gTnVtYmVyKGIpO1xuICB9LFxufTtcbiIsIi8qKlxuICogRGl2aWRlcyBhbiBvdXRwdXQgYnkgYSBudW1iZXIgYW5kIHJldHVybnMgdGhlIHJlbWFpbmRlci5cbiAqIEBzZWUgaHR0cHM6Ly9oZWxwLnNob3BpZnkuY29tL3RoZW1lcy9saXF1aWQvZmlsdGVycy9tYXRoLWZpbHRlcnMjbW9kdWxvXG4gKi9cbmV4cG9ydCBjb25zdCBtb2R1bG8gPSB7XG4gIG5hbWU6ICdtb2R1bG8nLFxuICByZWFkKGE6IHN0cmluZyB8IG51bWJlciwgYjogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgcmV0dXJuIE51bWJlcihhKSAlIE51bWJlcihiKTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzJztcblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyB0byBudW1iZXIgLyBmbG9hdFxuICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMTAwNjUzLzE0NjU5MTlcbiAqL1xuZXhwb3J0IGNvbnN0IG51bWJlckZvcm1hdHRlciA9IHtcbiAgbmFtZTogJ251bWJlcicsXG4gIHJlYWQoc3RyOiBzdHJpbmcsIGRlZjogbnVtYmVyKSB7XG4gICAgY29uc3QgbnVtID0gVXRpbHMuZ2V0TnVtYmVyKHN0cik7XG4gICAgLy8gSWYgZGVmYXVsdCB2YWx1ZSBpcyBzZXQgcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlIGlmIG51bSBpcyAwLCBudWxsIG9yIHVuZGVmaW5lZFxuICAgIGlmIChkZWYpIHtcbiAgICAgIHJldHVybiBudW0gPyBudW0gOiBkZWY7XG4gICAgfVxuICAgIHJldHVybiBudW07XG4gIH0sXG59O1xuIiwiLyoqXG4gKiBBZGRzIGEgbnVtYmVyIHRvIGFuIG91dHB1dC5cbiAqIEBzZWUgaHR0cHM6Ly9oZWxwLnNob3BpZnkuY29tL3RoZW1lcy9saXF1aWQvZmlsdGVycy9tYXRoLWZpbHRlcnMjcGx1c1xuICovXG5leHBvcnQgY29uc3QgcGx1cyA9IHtcbiAgbmFtZTogJ3BsdXMnLFxuICByZWFkKGE6IHN0cmluZyB8IG51bWJlciwgYjogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgcmV0dXJuIE51bWJlcihhKSArIE51bWJlcihiKTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzJztcblxuLyoqXG4gKiBHZXQgYSBiYWNrIHJhbmRvbSB2YWx1ZSBvZiBhcnJheVxuICogQGV4YW1wbGUgPGRpdiBydi1jbGFzcz0nXCJbXCJjb2wtMlwiLCBcImNvbC0zXCIsIFwiY29sLTRcIiwgXCJjb2wtNVwiLCBcImNvbC02XCJdXCIgfCBwYXJzZSB8IHJhbmRvbSc+XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb20gPSB7XG4gIG5hbWU6ICdyYW5kb20nLFxuICByZWFkKGFycmF5OiBhbnlbXSkge1xuICAgIGlmIChVdGlscy5pc0FycmF5KGFycmF5KSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG59O1xuIiwiLyoqXG4gKiBNdWx0aXBsaWVzIGFuIG91dHB1dCBieSBhIG51bWJlci5cbiAqIEBzZWUgaHR0cHM6Ly9oZWxwLnNob3BpZnkuY29tL3RoZW1lcy9saXF1aWQvZmlsdGVycy9tYXRoLWZpbHRlcnMjdGltZXNcbiAqL1xuZXhwb3J0IGNvbnN0IHRpbWVzRm9ybWF0dGVyID0ge1xuICBuYW1lOiAndGltZXMnLFxuICByZWFkKGE6IHN0cmluZyB8IG51bWJlciwgYjogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgcmV0dXJuIE51bWJlcihhKSAqIE51bWJlcihiKTtcbiAgfSxcbn07XG4iLCJleHBvcnQgY29uc3QgdW5ldmVuID0ge1xuICBuYW1lOiAndW5ldmVuJyxcbiAgcmVhZChudW06IG51bWJlcikge1xuICAgIHJldHVybiAobnVtICUgMikgIT09IDA7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5cbi8qKlxuICogVHJ1ZSBpZiBhcnJheSAvIHN0cmluZyBjb250YWlucyBwcm9wZXJ0eSAvIHN1YnN0cmluZyBvciBjb250YWludHMgcHJvcGVydHkgd2l0aCB2YWx1ZVxuICogQHNlZSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9kZXItT24vY2RhZmU5MDg4NDdlMmI4ODI2OTFcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0ge1xuICBuYW1lOiAnY29udGFpbnMnLFxuICByZWFkKHZhbHVlOiBzdHJpbmcgfCBhbnkgfCBhbnlbXSwgYXR0cjogc3RyaW5nLCBzZWFyY2g6IHN0cmluZykge1xuICAgIGlmIChVdGlscy5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5pbmRleE9mKGF0dHIpID4gLTE7XG4gICAgfSBlbHNlIGlmIChVdGlscy5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgZm9yIChjb25zdCBpbmRleCBpbiB2YWx1ZSkge1xuICAgICAgICBpZiAoVXRpbHMuaXNEZWZpbmVkKHZhbHVlW2luZGV4XSkgJiYgVXRpbHMuaXNEZWZpbmVkKHZhbHVlW2luZGV4XVthdHRyXSkpIHtcbiAgICAgICAgICBpZiAoVXRpbHMuaXNVbmRlZmluZWQoc2VhcmNoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZVtpbmRleF1bYXR0cl0gPT09IHNlYXJjaCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFV0aWxzLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKCh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSkge1xuICAgICAgICAgIGlmIChrZXkgPT09IGF0dHIpIHtcbiAgICAgICAgICAgIGlmIChVdGlscy5pc1VuZGVmaW5lZChzZWFyY2gpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlW2tleV1bYXR0cl0gPT09IHNlYXJjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBzaXplIH0gZnJvbSAnLi9zaXplLmZvcm1hdHRlcic7XG5cbmV4cG9ydCBjb25zdCBlbXB0eSA9IHtcbiAgbmFtZTogJ2VtcHR5JyxcbiAgcmVhZChhOiBhbnlbXSB8IHN0cmluZyApIHtcbiAgICByZXR1cm4gc2l6ZS5yZWFkKGEpIDw9IDA7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXQuZm9ybWF0dGVyJztcblxuLyoqXG4gKiBBcnJheSBmb3JtYXR0ZXIgdG8gZ2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGFuIGFycmF5XG4gKi9cbmV4cG9ydCBjb25zdCBmaXJzdCA9IHtcbiAgbmFtZTogJ2ZpcnN0JyxcbiAgcmVhZCh2YWx1ZTogYW55IHwgYW55W10gfCBzdHJpbmcpIHtcbiAgICByZXR1cm4gZ2V0LnJlYWQodmFsdWUsIDApO1xuICB9LFxufTtcbiIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMnO1xuXG4vKipcbiAqIEdldCBwcm9wZXJ0eSBvZiBvYmplY3Qgb3IgYXJyYXlcbiAqIEBzZWUgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZGVyLU9uL2NkYWZlOTA4ODQ3ZTJiODgyNjkxXG4gKi9cbmV4cG9ydCBjb25zdCBnZXQgPSB7XG4gIG5hbWU6ICdnZXQnLFxuICByZWFkKHZhbHVlOiBhbnkgfCBhbnlbXSB8IHN0cmluZywga2V5OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAoVXRpbHMuaXNPYmplY3QodmFsdWUpIHx8IFV0aWxzLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgaWYgKFV0aWxzLmlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgaWYgKFV0aWxzLmlzTnVtYmVyKGtleSkpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSBhcyBzdHJpbmcpLmNoYXJBdChrZXkgYXMgbnVtYmVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgSUZvcm1hdHRlcnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuLy8gcHJvcGVydHkgLyBvYmplY3QgLyBhcnJheSBmb3JtYXR0ZXJzXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4vcGFyc2UuZm9ybWF0dGVyJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAnLi9maXJzdC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgbGFzdCB9IGZyb20gJy4vbGFzdC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuL2NvbnRhaW5zLmZvcm1hdHRlcic7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuL2dldC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgc2V0IH0gZnJvbSAnLi9zZXQuZm9ybWF0dGVyJztcbmltcG9ydCB7IHNpemUgfSBmcm9tICcuL3NpemUuZm9ybWF0dGVyJztcbmltcG9ydCB7IGVtcHR5IH0gZnJvbSAnLi9lbXB0eS5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgaXNMYXN0IH0gZnJvbSAnLi9pc0xhc3QuZm9ybWF0dGVyJztcbmltcG9ydCB7IHJhbmdlIH0gZnJvbSAnLi9yYW5nZS5mb3JtYXR0ZXInO1xuXG5leHBvcnQgeyBwYXJzZSwgZmlyc3QsIGxhc3QsIGNvbnRhaW5zLCBnZXQsIHNldCwgc2l6ZSwgZW1wdHksIGlzTGFzdCwgcmFuZ2UgfTtcblxuZXhwb3J0IGNvbnN0IHByb3BlcnR5Rm9ybWF0dGVyczogSUZvcm1hdHRlcnMgPSB7XG4gIHBhcnNlLCBmaXJzdCwgbGFzdCwgY29udGFpbnMsIGdldCwgc2V0LCBzaXplLCBlbXB0eSwgaXNMYXN0LCByYW5nZSxcbn07XG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB2YWx1ZSBpbmRleCBpdCB0aGUgbGFzdCBpbmRleCBvZiB0aGUgYXJyYXkuIFJldHVybnMgZmFsc2UgaWYgaXQgaXMgbm90IHRoZSBsYXN0IGluZGV4LlxuICogYGBgXG4gKiAgPGRpdiBydi1lYWNoLWltYWdlPVwicHJvZHVjdC5pbWFnZXNcIiBydi1oaWRlPVwicHJvZHVjdC5pbWFnZXMgfCBsYXN0ICVpbWFnZSVcIj48L2Rpdj5cbiAqIGBgYFxuICogQHNlZSBodHRwczovL2hlbHAuc2hvcGlmeS5jb20vdGhlbWVzL2xpcXVpZC9vYmplY3RzL2Zvci1sb29wcyNmb3Jsb29wLWxhc3RcbiAqL1xuZXhwb3J0IGNvbnN0IGlzTGFzdCA9IHtcbiAgbmFtZTogJ2lzTGFzdCcsXG4gIHJlYWQoYXJyYXk6IGFueVtdLCBpOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKGFycmF5Lmxlbmd0aCA9PT0gaSArIDEpO1xuICB9LFxufTtcbiIsImltcG9ydCB7IGdldCB9IGZyb20gJy4vZ2V0LmZvcm1hdHRlcic7XG5cbi8qKlxuICogQXJyYXkgZm9ybWF0dGVyIHRvIGdldCB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5XG4gKi9cbmV4cG9ydCBjb25zdCBsYXN0ID0ge1xuICBuYW1lOiAnbGFzdCcsXG4gIHJlYWQoYXJyYXk6IGFueVtdKSB7XG4gICAgcmV0dXJuIGdldC5yZWFkKGFycmF5LCBhcnJheS5sZW5ndGggLSAxKTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzJztcblxuLyoqXG4gKiBwYXJzZSBqc29uIHN0cmluZyB0byBvYmplY3RcbiAqIEBleGFtcGxlIDxkaXYgcnYtY2xhc3M9J1wiW1wiY29sLTJcIiwgXCJjb2wtM1wiLCBcImNvbC00XCIsIFwiY29sLTVcIiwgXCJjb2wtNlwiXVwiIHwgcGFyc2UgfCByYW5kb20nPlxuICovXG5leHBvcnQgY29uc3QgcGFyc2UgPSB7XG4gIG5hbWU6ICdwYXJzZScsXG4gIHJlYWQoanNvblN0cmluZzogc3RyaW5nKSB7XG4gICAgaWYgKFV0aWxzLmlzU3RyaW5nKGpzb25TdHJpbmcpKSB7XG4gICAgICBjb25zdCBvYmplY3QgPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5cbi8qKlxuICogQXJyYXkgZm9ybWF0dGVyIHRvIGdldCBhIHN1YmFycmF5IGZyb20gYXJyYXlcbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmdlID0ge1xuICBuYW1lOiAncmFuZ2UnLFxuICByZWFkKGFycjogYW55W10sIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gICAgc3RhcnQgPSBOdW1iZXIoVXRpbHMuaXNOdW1iZXIoc3RhcnQpID8gc3RhcnQgOiAwKTtcbiAgICBlbmQgPSBOdW1iZXIoVXRpbHMuaXNOdW1iZXIoZW5kKSA/IGVuZCA6IGFyci5sZW5ndGggLSAxKTtcbiAgICBpZiAoZW5kID4gYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIH1cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGFyci5zbGljZShOdW1iZXIoc3RhcnQgfHwgMCksIDEgKyBlbmQpO1xuICB9LFxufTtcbiIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMnO1xuXG4vKipcbiAqIFNldCBwcm9wZXJ0eSBvZiBvYmplY3QsIGFycmF5IG9yIHZhbHVlXG4gKiBAc2VlIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2Rlci1Pbi9jZGFmZTkwODg0N2UyYjg4MjY5MVxuICovXG5leHBvcnQgY29uc3Qgc2V0ID0ge1xuICBuYW1lOiAnc2V0JyxcbiAgcmVhZChvYmo6IGFueSB8IGFueVtdLCBrZXk6IHN0cmluZyB8IG51bWJlciwgdmFsdWU/OiBhbnkpIHtcbiAgICAvLyB0aGUga2V5IGlzIHRoZSB2YWx1ZSBpZiB2YWx1ZSBpcyBub3Qgc2V0XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBrZXk7XG4gICAgfVxuXG4gICAgaWYgKFV0aWxzLmlzT2JqZWN0KG9iaikgfHwgVXRpbHMuaXNBcnJheShvYmopKSB7XG4gICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmogPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcbn07XG4iLCIvKipcbiAqIFJldHVybnMgdGhlIHNpemUgb2YgYSBzdHJpbmcgKHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycykgb3IgYW4gYXJyYXkgKHRoZSBudW1iZXIgb2YgZWxlbWVudHMpLlxuICogQHNlZSBodHRwczovL2hlbHAuc2hvcGlmeS5jb20vdGhlbWVzL2xpcXVpZC9maWx0ZXJzL2FycmF5LWZpbHRlcnMjc2l6ZVxuICovXG5leHBvcnQgY29uc3Qgc2l6ZSA9IHtcbiAgbmFtZTogJ3NpemUnLFxuICByZWFkKHZhbHVlOiBhbnlbXSB8IHN0cmluZykge1xuICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSA/IHZhbHVlLmxlbmd0aCA6IDA7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgSUZvcm1hdHRlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSUZvcm1hdHRlckZ1bnRpb25QYXJhbSB9IGZyb20gJy4vY2FsbC5mb3JtYXR0ZXInO1xuXG4vKipcbiAqIFNldHMgYXJndW1lbnRzIHRvIGEgZnVuY3Rpb24gd2l0aG91dCBkaXJlY3RseSBjYWxsIHRoZW1cbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gcnYtb24tY2xpY2s9XCJzdW0gfCBhcmdzIDEgMlwiPjwvYnV0dG9uPlxuICogYGBgXG4gKiBAcGFyYW0gZm4gVGhlIGZ1bmN0aW9uIHRoZSBldmVudCBoYW5kbGVyIHNob3VsZCBjYWxsXG4gKiBAcGFyYW0gZm5BcmdzIHRoZSBwYXJhbWV0ZXJzIHlvdSB3aXNoIHRvIGdldCBjYWxsZWQgdGhlIGZ1bmN0aW9uIHdpdGhcbiAqL1xuZXhwb3J0IGNvbnN0IGFyZ3M6IElGb3JtYXR0ZXIgPSB7XG4gIG5hbWU6ICdhcmdzJyxcbiAgcmVhZChmbjogSUZvcm1hdHRlckZ1bnRpb25QYXJhbSwgLi4uZm5BcmdzOiBhbnlbXSkge1xuICAgIHJldHVybiAoZXZlbnQ6IEV2ZW50LCBzY29wZTogYW55LCBlbDogSFRNTEVsZW1lbnQsIGJpbmRpbmc6IGFueSkgPT4ge1xuICAgICAgLy8gYXBwZW5kIHRoZSBldmVudCBoYW5kbGVyIGFyZ3MgdG8gcGFzc2VkIGFyZ3NcbiAgICAgIGZuQXJncy5wdXNoKGV2ZW50KTtcbiAgICAgIGZuQXJncy5wdXNoKHNjb3BlKTtcbiAgICAgIGZuQXJncy5wdXNoKGVsKTtcbiAgICAgIGZuQXJncy5wdXNoKGJpbmRpbmcpO1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGZuQXJncyk7XG4gICAgfTtcbiAgfSxcbn07XG4iLCIvKipcbiAqIFBhcnNlIGEgc3RyaW5nIHRvIGJvb2xlYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGJvb2xlYW5Gb3JtYXR0ZXIgPSB7XG4gIG5hbWU6ICdib29sZWFuJyxcbiAgcmVhZCh2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbikge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnIHx8IHZhbHVlID09PSB0cnVlO1xuICB9LFxufTtcbiIsImltcG9ydCB7IElGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuLy8gYmFiZWwgbWlzaW50ZXJwcmV0cyB0aGUgXCJ0aGlzXCIgZmFrZSBwYXJhbWV0ZXIsIHNvIHdlIGRlZmluZSBpdCBpbiB0aGlzIGludGVyZmFjZXNcbmV4cG9ydCB0eXBlIElGb3JtYXR0ZXJGdW50aW9uUGFyYW0gPSAodGhpczogYW55LCAuLi5hcmdzOiBhbnlbXSkgPT4gYW55O1xuXG4vKipcbiAqIENhbGxzIGEgZnVuY3Rpb24gd2l0aCBhcmd1bWVudHNcbiAqIEBwYXJhbSBmbiBUaGUgZnVuY3Rpb24geW91IHdpc2ggdG8gY2FsbFxuICogQHBhcmFtIGFyZ3MgdGhlIHBhcmFtZXRlcnMgeW91IHdpc2ggdG8gY2FsbCB0aGUgZnVuY3Rpb24gd2l0aFxuICovXG5leHBvcnQgY29uc3QgY2FsbDogSUZvcm1hdHRlciA9IHtcbiAgbmFtZTogJ2NhbGwnLFxuICByZWFkKGZuOiBJRm9ybWF0dGVyRnVudGlvblBhcmFtLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfSxcbn07XG4iLCIvKipcbiAqIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBjdXJyZW5jeSAoaWUgJDEsMjM0LjU2KS4gV2hlbiBubyBjdXJyZW5jeSBzeW1ib2wgaXMgcHJvdmlkZWQsIGRlZmF1bHQgc3ltYm9sIGZvciBjdXJyZW50IGxvY2FsZSBpcyB1c2VkLlxuICogQHBhcmFtIGFtb3VudCBJbnB1dCB0byBmaWx0ZXIuXG4gKiBAcGFyYW0gc3ltYm9sIEN1cnJlbmN5IHN5bWJvbCBvciBpZGVudGlmaWVyIHRvIGJlIGRpc3BsYXllZC4gKG9wdGlvbmFsKVxuICogQHNlZSBodHRwczovL2RvY3MuYW5ndWxhcmpzLm9yZy9hcGkvbmcvZmlsdGVyL2N1cnJlbmN5XG4gKi9cbmV4cG9ydCBjb25zdCBjdXJyZW5jeSA9IHtcbiAgbmFtZTogJ2N1cnJlbmN5JyxcbiAgcmVhZChhbW91bnQ6IG51bWJlciwgc3ltYm9sOiBzdHJpbmcpIHtcbiAgICBsZXQgcmVzdWx0ID0gYW1vdW50LnRvRml4ZWQoMikudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJywnKTtcbiAgICBpZiAoc3ltYm9sKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQgKyBzeW1ib2w7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuLi8uLi92ZW5kb3JzL2RlYnVnLm1vZHVsZSc7XG5cbmNvbnN0IF9kZWJ1ZyA9IERlYnVnKCdmb3JtYXR0ZXInKTtcblxuZXhwb3J0IGNvbnN0IGRlYnVnID0ge1xuICBuYW1lOiAnZGVidWcnLFxuICByZWFkKHRvUHJpbnQ6IGFueSkge1xuICAgIF9kZWJ1Zyh0b1ByaW50KTtcbiAgICByZXR1cm4gdG9QcmludDtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzJztcblxuLyoqXG4gKiBTZXQgZGVmYXVsdCB2YWx1ZVxuICogQHNlZSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9kZXItT24vY2RhZmU5MDg4NDdlMmI4ODI2OTFcbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRCaW5kZXIgPSB7XG4gIG5hbWU6ICdkZWZhdWx0JyxcbiAgcmVhZCh2YWx1ZTogYW55LCBkZWZhdWx0VmFsdWU6IGFueSkge1xuICAgIGlmIChVdGlscy5pc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICBpZiAoVXRpbHMuaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBJRm9ybWF0dGVycyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuXG4vLyBzcGVjaWFsIGhlbHBlciBmb3JtYXR0ZXJzXG5pbXBvcnQgeyBhcmdzIH0gZnJvbSAnLi9hcmdzLmZvcm1hdHRlcic7XG5pbXBvcnQgeyBib29sZWFuRm9ybWF0dGVyIH0gZnJvbSAnLi9ib29sZWFuLmZvcm1hdHRlcic7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJy4vZGVidWcuZm9ybWF0dGVyJztcbmltcG9ydCB7IGRlZmF1bHRCaW5kZXIgfSBmcm9tICcuL2RlZmF1bHQuZm9ybWF0dGVyJztcbmltcG9ydCB7IGNhbGwgfSBmcm9tICcuL2NhbGwuZm9ybWF0dGVyJztcbmltcG9ydCB7IGN1cnJlbmN5IH0gZnJvbSAnLi9jdXJyZW5jeS5mb3JtYXR0ZXInO1xuaW1wb3J0IHsganNvbiB9IGZyb20gJy4vanNvbi5mb3JtYXR0ZXInO1xuXG5leHBvcnQgeyBhcmdzLCBib29sZWFuRm9ybWF0dGVyLCBkZWJ1ZywgZGVmYXVsdEJpbmRlciwgY2FsbCwgY3VycmVuY3ksIGpzb24gfTtcblxuZXhwb3J0IGNvbnN0IHNwZWNpYWxGb3JtYXR0ZXJzOiBJRm9ybWF0dGVycyA9IHtcbiAgYXJncywgYm9vbGVhbjogYm9vbGVhbkZvcm1hdHRlciwgZGVidWcsIGRlZmF1bHQ6IGRlZmF1bHRCaW5kZXIsIGNhbGwsIGN1cnJlbmN5LCBqc29uLFxufTtcbiIsIi8qKlxuICogQ29udmVydHMgYSBzdHJpbmcgaW50byBKU09OIGZvcm1hdC5cbiAqIEBzZWUgaHR0cHM6Ly9oZWxwLnNob3BpZnkuY29tL3RoZW1lcy9saXF1aWQvZmlsdGVycy9hZGRpdGlvbmFsLWZpbHRlcnMjanNvblxuICovXG5leHBvcnQgY29uc3QganNvbiA9IHtcbiAgbmFtZTogJ2pzb24nLFxuICByZWFkKG9iamVjdDogYW55LCByZXBsYWNlU2luZ2xlUXVhdGU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0KTtcbiAgICBpZiAocmVwbGFjZVNpbmdsZVF1YXRlICYmIHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKC8nL2csIGAmIzM5O2ApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxufTtcbiIsIi8qKlxuICogQXBwZW5kcyBjaGFyYWN0ZXJzIHRvIGEgc3RyaW5nLlxuICogQHNlZSBodHRwczovL2hlbHAuc2hvcGlmeS5jb20vdGhlbWVzL2xpcXVpZC9maWx0ZXJzL3N0cmluZy1maWx0ZXJzI2FwcGVuZFxuICovXG5leHBvcnQgY29uc3QgYXBwZW5kID0ge1xuICBuYW1lOiAnYXBwZW5kJyxcbiAgcmVhZChhOiBzdHJpbmcsIGI6IHN0cmluZykge1xuICAgIHJldHVybiBhICsgYjtcbiAgfSxcbn07XG4iLCIvKipcbiAqIENvbnZlcnRzIGEgc3RyaW5nIGludG8gbG93ZXJjYXNlLlxuICogQHNlZSBodHRwczovL2hlbHAuc2hvcGlmeS5jb20vdGhlbWVzL2xpcXVpZC9maWx0ZXJzL3N0cmluZy1maWx0ZXJzI2Rvd25jYXNlXG4gKi9cbmV4cG9ydCBjb25zdCBkb3duY2FzZSA9IHtcbiAgbmFtZTogJ2Rvd25jYXNlJyxcbiAgcmVhZChzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzJztcbmltcG9ydCB7IGVtcHR5IH0gZnJvbSAnLi4vcHJvcGVydHkvZW1wdHkuZm9ybWF0dGVyJztcblxuLyoqXG4gKiBDaGVjayBpZiB2YWx1ZSBpcyBhIHN0cmluZyBhbmQgbm90IGVtcHR5XG4gKi9cbmV4cG9ydCBjb25zdCBmaWxsZWQgPSB7XG4gIG5hbWU6ICdmaWxsZWQnLFxuICByZWFkKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIFV0aWxzLmlzU3RyaW5nKHN0cikgJiYgIWVtcHR5LnJlYWQoc3RyLnJlcGxhY2UoL1xccy9nLCAnJykpO1xuICB9LFxufTtcbiIsImltcG9ydCB7IHN0cmlwIH0gZnJvbSAnLi9zdHJpcC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgZG93bmNhc2UgfSBmcm9tICcuL2Rvd25jYXNlLmZvcm1hdHRlcic7XG5cbi8qKlxuICogRm9ybWF0cyBhIHN0cmluZyBpbnRvIGEgaGFuZGxlLlxuICogQHNlZSBodHRwczovL2hlbHAuc2hvcGlmeS5jb20vdGhlbWVzL2xpcXVpZC9maWx0ZXJzL3N0cmluZy1maWx0ZXJzI2hhbmRsZS1oYW5kbGVpemVcbiAqL1xuZXhwb3J0IGNvbnN0IGhhbmRsZWl6ZSA9IHtcbiAgbmFtZTogJ2hhbmRsZWl6ZScsXG4gIHJlYWQoc3RyOiBzdHJpbmcpIHtcbiAgICBzdHIgPSBzdHJpcC5yZWFkKHN0cik7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1teXFx3XFxzXS9naSwgJycpOyAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80Mzc0ODkwXG4gICAgc3RyID0gZG93bmNhc2UucmVhZChzdHIpO1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvIC9nLCAnLScpO1xuICB9LFxufTtcbiIsImltcG9ydCB7IElGb3JtYXR0ZXJzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5cbi8vIHN0cmluZyBmb3JtYXR0ZXJzXG5pbXBvcnQgeyBhcHBlbmQgfSBmcm9tICcuL2FwcGVuZC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgZG93bmNhc2UgfSBmcm9tICcuL2Rvd25jYXNlLmZvcm1hdHRlcic7XG5pbXBvcnQgeyBmaWxsZWQgfSBmcm9tICcuL2ZpbGxlZC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgaGFuZGxlaXplIH0gZnJvbSAnLi9oYW5kbGVpemUuZm9ybWF0dGVyJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9pc1N0cmluZy5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tICcuL21hdGNoLmZvcm1hdHRlcic7XG5pbXBvcnQgeyBwbHVyYWxpemUgfSBmcm9tICcuL3BsdXJhbGl6ZS5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgcHJlcGVuZCB9IGZyb20gJy4vcHJlcGVuZC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgdXBjYXNlIH0gZnJvbSAnLi91cGNhc2UuZm9ybWF0dGVyJztcbmltcG9ydCB7IHJlcGxhY2UgfSBmcm9tICcuL3JlcGxhY2UuZm9ybWF0dGVyJztcbmltcG9ydCB7IHJlcGxhY2VGaXJzdCB9IGZyb20gJy4vcmVwbGFjZS1maXJzdC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3NsaWNlLmZvcm1hdHRlcic7XG5pbXBvcnQgeyBzdHJpcCB9IGZyb20gJy4vc3RyaXAuZm9ybWF0dGVyJztcbmltcG9ydCB7IHN0cmlwSHRtbCB9IGZyb20gJy4vc3RyaXAtaHRtbC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgc3RyaW5nRm9ybWF0dGVyIH0gZnJvbSAnLi9zdHJpbmcuZm9ybWF0dGVyJztcblxuZXhwb3J0IHtcbiAgYXBwZW5kLCBkb3duY2FzZSwgZmlsbGVkLCBoYW5kbGVpemUsIGlzU3RyaW5nLCBtYXRjaCwgcGx1cmFsaXplLCBwcmVwZW5kLCB1cGNhc2UsIHJlcGxhY2UsIHJlcGxhY2VGaXJzdCwgc2xpY2UsIHN0cmlwLCBzdHJpcEh0bWwsIHN0cmluZ0Zvcm1hdHRlcixcbn07XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdGb3JtYXR0ZXJzOiBJRm9ybWF0dGVycyA9IHtcbiAgYXBwZW5kLCBkb3duY2FzZSwgZmlsbGVkLCBoYW5kbGVpemUsIGlzU3RyaW5nLCBtYXRjaCwgcGx1cmFsaXplLCBwcmVwZW5kLCB1cGNhc2UsIHJlcGxhY2UsICdyZXBsYWNlLWZpcnN0JzogcmVwbGFjZUZpcnN0LCBzbGljZSwgc3RyaXAsICdzdHJpcC1odG1sJzogc3RyaXBIdG1sLCAnc3RyaW5nJzogc3RyaW5nRm9ybWF0dGVyLFxufTtcbiIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMnO1xuXG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIGlzIGEgc3RyaW5nXG4gKi9cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IHtcbiAgbmFtZTogJ2lzU3RyaW5nJyxcbiAgcmVhZChzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBVdGlscy5pc1N0cmluZyhzdHIpO1xuICB9LFxufTtcbiIsImV4cG9ydCBjb25zdCBtYXRjaCA9IHtcbiAgbmFtZTogJ21hdGNoJyxcbiAgcmVhZChhOiBzdHJpbmcsIHJlZ2V4cDogc3RyaW5nLCBmbGFncz86IHN0cmluZykge1xuICAgIHJldHVybiBhLm1hdGNoKG5ldyBSZWdFeHAocmVnZXhwLCBmbGFncykpO1xuICB9LFxufTtcbiIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgcGx1cmFsaXplID0ge1xuICBuYW1lOiAncGx1cmFsaXplJyxcbiAgcmVhZChpbnB1dDogYW55LCBzaW5ndWxhcjogc3RyaW5nLCBwbHVyYWw6IHN0cmluZykge1xuICAgIGlmIChwbHVyYWwgPT09IG51bGwpIHtcbiAgICAgIHBsdXJhbCA9IHNpbmd1bGFyICsgJ3MnO1xuICAgIH1cbiAgICBpZiAoVXRpbHMuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgIGlucHV0ID0gaW5wdXQubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAoaW5wdXQgPT09IDEpIHtcbiAgICAgIHJldHVybiBzaW5ndWxhcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBsdXJhbDtcbiAgICB9XG4gIH0sXG59O1xuIiwiLyoqXG4gKiBQcmVwZW5kcyBjaGFyYWN0ZXJzIHRvIGEgc3RyaW5nLlxuICogQHNlZSBodHRwczovL2hlbHAuc2hvcGlmeS5jb20vdGhlbWVzL2xpcXVpZC9maWx0ZXJzL3N0cmluZy1maWx0ZXJzI3ByZXBlbmRcbiAqL1xuZXhwb3J0IGNvbnN0IHByZXBlbmQgPSB7XG4gIG5hbWU6ICdwcmVwZW5kJyxcbiAgcmVhZChhOiBzdHJpbmcsIGI6IHN0cmluZykge1xuICAgIHJldHVybiBiICsgYTtcbiAgfSxcbn07XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTp2YXJpYWJsZS1uYW1lICovXG5cbi8qKlxuICogUmVwbGFjZXMgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYSBzdHJpbmcgd2l0aCBhIHN1YnN0cmluZy5cbiAqIEBzZWUgaHR0cHM6Ly9oZWxwLnNob3BpZnkuY29tL2VuL3RoZW1lcy9saXF1aWQvZmlsdGVycy9zdHJpbmctZmlsdGVycyNyZXBsYWNlX2ZpcnN0XG4gKi9cbmV4cG9ydCBjb25zdCByZXBsYWNlRmlyc3QgPSB7XG4gIG5hbWU6ICdyZXBsYWNlLWZpcnN0JyxcbiAgcmVhZChzdHI6IHN0cmluZywgdmFsdWU6IHN0cmluZywgcmVwbGFjZVZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UodmFsdWUsIHJlcGxhY2VWYWx1ZSk7XG4gIH0sXG59O1xuIiwiLyoqXG4gKiBSZXBsYWNlcyBhbGwgb2NjdXJyZW5jZXMgb2YgYSBzdHJpbmcgd2l0aCBhIHN1YnN0cmluZy5cbiAqIEBzZWUgaHR0cHM6Ly9oZWxwLnNob3BpZnkuY29tL2VuL3RoZW1lcy9saXF1aWQvZmlsdGVycy9zdHJpbmctZmlsdGVycyNyZXBsYWNlXG4gKi9cbmV4cG9ydCBjb25zdCByZXBsYWNlID0ge1xuICBuYW1lOiAncmVwbGFjZScsXG4gIHJlYWQoc3RyOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHJlcGxhY2VWYWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAodmFsdWUsICdnJyksIHJlcGxhY2VWYWx1ZSk7XG4gIH0sXG59O1xuIiwiLyoqXG4gKiBUaGUgYHNsaWNlYCBmaWx0ZXIgcmV0dXJucyBhIHN1YnN0cmluZywgc3RhcnRpbmcgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAqIEFuIG9wdGlvbmFsIHNlY29uZCBwYXJhbWV0ZXIgY2FuIGJlIHBhc3NlZCB0byBzcGVjaWZ5IHRoZSBsZW5ndGggb2YgdGhlIHN1YnN0cmluZy5cbiAqIElmIG5vIHNlY29uZCBwYXJhbWV0ZXIgaXMgZ2l2ZW4sIGEgc3Vic3RyaW5nIG9mIG9uZSBjaGFyYWN0ZXIgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEBzZWUgaHR0cHM6Ly9oZWxwLnNob3BpZnkuY29tL3RoZW1lcy9saXF1aWQvZmlsdGVycy9zdHJpbmctZmlsdGVycyNzbGljZVxuICovXG5leHBvcnQgY29uc3Qgc2xpY2UgPSB7XG4gIG5hbWU6ICdzbGljZScsXG4gIHJlYWQodmFsdWU6IGFueSwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdmFsdWUuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5cbi8qKlxuICogUGFyc2UgYSB2YWx1ZSB0byBzdHJpbmdcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgeW91IHdhbnQgdG8gcGFyc2UgdG8gc3RyaW5nXG4gKiBAcGFyYW0gZGVmIERlZmF1bHQgdmFsdWUgaWYgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpbmdGb3JtYXR0ZXIgPSB7XG4gIG5hbWU6ICdzdHJpbmcnLFxuICByZWFkKHZhbHVlOiBhbnksIGRlZjogc3RyaW5nKSB7XG4gICAgLy8gSWYgdmFsdWUgaXMgYW4gYXJyYXkgY29udmVydCBlYWNoIHZhbHVlIGluIGFycmF5IHRvIHN0cmluZ1xuICAgIGlmIChVdGlscy5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgZm9yIChjb25zdCBpIGluIHZhbHVlIGFzIEFycmF5PGFueT4pIHtcbiAgICAgICAgaWYgKHZhbHVlW2ldKSB7XG4gICAgICAgICAgdmFsdWVbaV0gPSBVdGlscy5nZXRTdHJpbmcodmFsdWVbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChVdGlscy5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XG4gICAgICAgIGlmICgodmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkpIHtcbiAgICAgICAgICB2YWx1ZVtrZXldID0gVXRpbHMuZ2V0U3RyaW5nKHZhbHVlW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gVXRpbHMuZ2V0U3RyaW5nKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBJZiBkZWZhdWx0IHZhbHVlIGlzIHNldCByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUgaWYgbnVtIGlzIDAsIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgaWYgKGRlZikge1xuICAgICAgcmV0dXJuIHZhbHVlID8gdmFsdWUgOiBkZWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxufTtcbiIsIi8qIHRzbGludDpkaXNhYmxlOnZhcmlhYmxlLW5hbWUgKi9cblxuLyoqXG4gKiBTdHJpcHMgYWxsIEhUTUwgdGFncyBmcm9tIGEgc3RyaW5nLlxuICogQHNlZSBodHRwczovL2hlbHAuc2hvcGlmeS5jb20vZW4vdGhlbWVzL2xpcXVpZC9maWx0ZXJzL3N0cmluZy1maWx0ZXJzI3N0cmlwX2h0bWxcbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmlwSHRtbCA9IHtcbiAgbmFtZTogJ3N0cmlwSHRtbCcsXG4gIHJlYWQoaHRtbDogc3RyaW5nKSB7XG4gICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgdG1wLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0IHx8ICcnO1xuICB9LFxufTtcbiIsIi8qKlxuICogU3RyaXBzIHRhYnMsIHNwYWNlcywgYW5kIG5ld2xpbmVzIChhbGwgd2hpdGVzcGFjZSkgZnJvbSB0aGUgbGVmdCBhbmQgcmlnaHQgc2lkZSBvZiBhIHN0cmluZy5cbiAqIEBzZWUgaHR0cHM6Ly9oZWxwLnNob3BpZnkuY29tL3RoZW1lcy9saXF1aWQvZmlsdGVycy9zdHJpbmctZmlsdGVycyNzdHJpcFxuICovXG5leHBvcnQgY29uc3Qgc3RyaXAgPSB7XG4gIG5hbWU6ICdzdHJpcCcsXG4gIHJlYWQoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLnRyaW0oKTtcbiAgfSxcbn07XG4iLCIvKipcbiAqIENvbnZlcnRzIGEgc3RyaW5nIGludG8gdXBwZXJjYXNlLlxuICogQHNlZSBodHRwczovL2hlbHAuc2hvcGlmeS5jb20vdGhlbWVzL2xpcXVpZC9maWx0ZXJzL3N0cmluZy1maWx0ZXJzI3VwY2FzZVxuICovXG5leHBvcnQgY29uc3QgdXBjYXNlID0ge1xuICBuYW1lOiAndXBjYXNlJyxcbiAgcmVhZChzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHIudG9VcHBlckNhc2UoKTtcbiAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi92ZW5kb3JzJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9hZGFwdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vYmluZGVycyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtYXR0ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL3BhcnNlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9yaWJhJztcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUubW9kdWxlJztcbiIsImV4cG9ydCAqIGZyb20gJy4vYWRhcHRlcic7XG5leHBvcnQgKiBmcm9tICcuL2JpbmRlcic7XG5leHBvcnQgKiBmcm9tICcuL2JpbmRlci53cmFwcGVyJztcbmV4cG9ydCAqIGZyb20gJy4vYmluZGVycyc7XG5leHBvcnQgKiBmcm9tICcuL2JpbmRpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQud3JhcHBlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtYXR0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtYXR0ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vbW9kdWxlLWVsZW1lbnQtdHlwZSc7XG5leHBvcnQgKiBmcm9tICcuL21vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL29ic2VydmVyJztcbmV4cG9ydCAqIGZyb20gJy4vcmliYSc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzJztcbiIsIlxuaW1wb3J0IHsgSUFkYXB0ZXJzLCBSb290LCBJS2V5LCBJT2JzZXJ2ZXJTeW5jQ2FsbGJhY2ssIE9iaiwgSU9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3NlcnZpY2VzL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIE9ic2VydmVyIHtcblxuICBwdWJsaWMgc3RhdGljIGFkYXB0ZXJzOiBJQWRhcHRlcnM7XG4gIHB1YmxpYyBzdGF0aWMgaW50ZXJmYWNlczogc3RyaW5nW107XG4gIHB1YmxpYyBzdGF0aWMgcm9vdEludGVyZmFjZTogUm9vdDtcblxuICBwdWJsaWMgc3RhdGljIHVwZGF0ZU9wdGlvbnMob3B0aW9uczogSU9wdGlvbnMpIHtcblxuICAgIGlmICghb3B0aW9ucy5hZGFwdGVycykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhZGFwdGVycyBhcmUgcmVxdWlyZWQhJyk7XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLnJvb3RJbnRlcmZhY2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncm9vdEludGVyZmFjZSBpcyByZXF1aXJlZCEnKTtcbiAgICB9XG5cbiAgICBPYnNlcnZlci5hZGFwdGVycyA9IG9wdGlvbnMuYWRhcHRlcnM7XG4gICAgT2JzZXJ2ZXIuaW50ZXJmYWNlcyA9IE9iamVjdC5rZXlzKE9ic2VydmVyLmFkYXB0ZXJzKTtcbiAgICBPYnNlcnZlci5yb290SW50ZXJmYWNlID0gb3B0aW9ucy5yb290SW50ZXJmYWNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRva2VuaXplcyB0aGUgcHJvdmlkZWQga2V5cGF0aCBzdHJpbmcgaW50byBpbnRlcmZhY2UgKyBwYXRoIHRva2VucyBmb3IgdGhlXG4gICAqIG9ic2VydmVyIHRvIHdvcmsgd2l0aC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgdG9rZW5pemUoa2V5cGF0aDogc3RyaW5nLCByb290OiBSb290KSB7XG4gICAgY29uc3QgdG9rZW5zOiBhbnlbXSA9IFtdO1xuICAgIGxldCBjdXJyZW50OiBJS2V5ID0ge2k6IHJvb3QsIHBhdGg6ICcnfTtcbiAgICBsZXQgaW5kZXg6IG51bWJlcjtcbiAgICBsZXQgY2hyOiBzdHJpbmc7XG5cbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBrZXlwYXRoLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY2hyID0ga2V5cGF0aC5jaGFyQXQoaW5kZXgpO1xuICAgICAgaWYgKCEhfk9ic2VydmVyLmludGVyZmFjZXMuaW5kZXhPZihjaHIpKSB7XG4gICAgICAgIHRva2Vucy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICBjdXJyZW50ID0ge2k6IGNociwgcGF0aDogJyd9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudC5wYXRoICs9IGNocjtcbiAgICAgIH1cbiAgICB9XG4gICAgdG9rZW5zLnB1c2goY3VycmVudCk7XG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHB1YmxpYyBrZXlwYXRoOiBzdHJpbmc7XG4gIHB1YmxpYyBjYWxsYmFjazogSU9ic2VydmVyU3luY0NhbGxiYWNrO1xuICBwdWJsaWMgb2JqZWN0UGF0aDogT2JqW107XG4gIHB1YmxpYyBvYmo6IE9iajtcbiAgcHVibGljIHRhcmdldDogT2JqO1xuICBwdWJsaWMga2V5OiBJS2V5O1xuICBwdWJsaWMgdG9rZW5zOiBJS2V5W107XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdHMgYSBuZXcga2V5cGF0aCBvYnNlcnZlciBhbmQga2lja3MgdGhpbmdzIG9mZi5cbiAgICogQHBhcmFtIG9ialxuICAgKiBAcGFyYW0ga2V5cGF0aFxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9iajogT2JqLCBrZXlwYXRoOiBzdHJpbmcsIGNhbGxiYWNrOiBJT2JzZXJ2ZXJTeW5jQ2FsbGJhY2spIHtcbiAgICB0aGlzLmtleXBhdGggPSBrZXlwYXRoO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLm9iamVjdFBhdGggPSBbXTtcbiAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHRoaXMucGFyc2UoKTtcbiAgICB0aGlzLmtleSA9IHBhcnNlUmVzdWx0LmtleTtcbiAgICB0aGlzLnRva2VucyA9IHBhcnNlUmVzdWx0LnRva2VucztcbiAgICB0aGlzLm9iaiA9IHRoaXMuZ2V0Um9vdE9iamVjdChvYmopO1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5yZWFsaXplKCk7XG4gICAgaWYgKFV0aWxzLmlzT2JqZWN0KHRoaXMudGFyZ2V0KSkge1xuICAgICAgdGhpcy5zZXQodHJ1ZSwgdGhpcy5rZXksIHRoaXMudGFyZ2V0LCB0aGlzLmNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIHRoZSBrZXlwYXRoIHVzaW5nIHRoZSBpbnRlcmZhY2VzIGRlZmluZWQgb24gdGhlIHZpZXcuIFNldHMgdmFyaWFibGVzXG4gICAqIGZvciB0aGUgdG9rZW5pemVkIGtleXBhdGggYXMgd2VsbCBhcyB0aGUgZW5kIGtleS5cbiAgICovXG4gIHB1YmxpYyBwYXJzZSgpIHtcbiAgICBsZXQgcGF0aDogc3RyaW5nO1xuICAgIGxldCByb290OiBSb290O1xuXG4gICAgaWYgKCFPYnNlcnZlci5pbnRlcmZhY2VzIHx8ICFPYnNlcnZlci5pbnRlcmZhY2VzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbT2JzZXJ2ZXJdIE11c3QgZGVmaW5lIGF0IGxlYXN0IG9uZSBhZGFwdGVyIGludGVyZmFjZS4nKTtcbiAgICB9XG5cbiAgICBpZiAoISF+T2JzZXJ2ZXIuaW50ZXJmYWNlcy5pbmRleE9mKHRoaXMua2V5cGF0aFswXSkpIHtcbiAgICAgIHJvb3QgPSB0aGlzLmtleXBhdGhbMF07XG4gICAgICBwYXRoID0gdGhpcy5rZXlwYXRoLnN1YnN0cigxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdCA9IE9ic2VydmVyLnJvb3RJbnRlcmZhY2U7XG4gICAgICBwYXRoID0gdGhpcy5rZXlwYXRoO1xuICAgIH1cblxuICAgIHRoaXMudG9rZW5zID0gT2JzZXJ2ZXIudG9rZW5pemUocGF0aCwgcm9vdCk7XG5cbiAgICBpZiAoIXRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbT2JzZXJ2ZXJdIE5vIHRva2VucycpO1xuICAgIH1cblxuICAgIHRoaXMua2V5ID0gKHRoaXMudG9rZW5zLnBvcCgpIGFzIElLZXkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICB0b2tlbnM6IHRoaXMudG9rZW5zLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmVhbGl6ZXMgdGhlIGZ1bGwga2V5cGF0aCwgYXR0YWNoaW5nIG9ic2VydmVycyBmb3IgZXZlcnkga2V5IGFuZCBjb3JyZWN0aW5nXG4gICAqIG9sZCBvYnNlcnZlcnMgdG8gYW55IGNoYW5nZWQgb2JqZWN0cyBpbiB0aGUga2V5cGF0aC5cbiAgICovXG4gIHB1YmxpYyByZWFsaXplKCkge1xuICAgIGxldCBjdXJyZW50OiBPYmogPSB0aGlzLm9iajtcbiAgICBsZXQgdW5yZWFjaGVkID0gLTE7XG4gICAgbGV0IHByZXY7XG4gICAgbGV0IHRva2VuO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdG9rZW4gPSB0aGlzLnRva2Vuc1tpbmRleF07XG4gICAgICBpZiAoVXRpbHMuaXNPYmplY3QoY3VycmVudCkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9iamVjdFBhdGhbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHByZXYgPSB0aGlzLm9iamVjdFBhdGhbaW5kZXhdO1xuICAgICAgICAgIGlmIChjdXJyZW50ICE9PSBwcmV2KSB7XG4gICAgICAgICAgICB0aGlzLnNldChmYWxzZSwgdG9rZW4sIHByZXYsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5zZXQodHJ1ZSwgdG9rZW4sIGN1cnJlbnQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5vYmplY3RQYXRoW2luZGV4XSA9IGN1cnJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0KHRydWUsIHRva2VuLCBjdXJyZW50LCB0aGlzKTtcbiAgICAgICAgICB0aGlzLm9iamVjdFBhdGhbaW5kZXhdID0gY3VycmVudDtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50ID0gdGhpcy5nZXQodG9rZW4sIGN1cnJlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHVucmVhY2hlZCA9PT0gLTEpIHtcbiAgICAgICAgICB1bnJlYWNoZWQgPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgICBwcmV2ID0gdGhpcy5vYmplY3RQYXRoW2luZGV4XTtcbiAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICB0aGlzLnNldChmYWxzZSwgdG9rZW4sIHByZXYsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh1bnJlYWNoZWQgIT09IC0xKSB7XG4gICAgICB0aGlzLm9iamVjdFBhdGguc3BsaWNlKHVucmVhY2hlZCk7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGtleXBhdGguIFRoaXMgaXMgY2FsbGVkIHdoZW4gYW55IGludGVybWVkaWFyeSBrZXkgaXMgY2hhbmdlZC5cbiAgICovXG4gIHB1YmxpYyBzeW5jKCkge1xuICAgIGxldCBuZXh0O1xuICAgIGxldCBvbGRWYWx1ZTtcbiAgICBsZXQgbmV3VmFsdWU7XG4gICAgbmV4dCA9IHRoaXMucmVhbGl6ZSgpO1xuICAgIGlmIChuZXh0ICE9PSB0aGlzLnRhcmdldCkge1xuICAgICAgaWYgKFV0aWxzLmlzT2JqZWN0KHRoaXMudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLnNldChmYWxzZSwgdGhpcy5rZXksIHRoaXMudGFyZ2V0LCB0aGlzLmNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFV0aWxzLmlzT2JqZWN0KG5leHQpKSB7XG4gICAgICAgIHRoaXMuc2V0KHRydWUsIHRoaXMua2V5LCBuZXh0LCB0aGlzLmNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgb2xkVmFsdWUgPSB0aGlzLnZhbHVlKCk7XG4gICAgICB0aGlzLnRhcmdldCA9IG5leHQ7XG4gICAgICBuZXdWYWx1ZSA9IHRoaXMudmFsdWUoKTtcbiAgICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUgfHwgQXJyYXkuaXNBcnJheShuZXdWYWx1ZSkpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjay5zeW5jKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG5leHQpKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrLnN5bmMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgdGhlIGN1cnJlbnQgZW5kIHZhbHVlIG9mIHRoZSBvYnNlcnZlZCBrZXlwYXRoLiBSZXR1cm5zIHVuZGVmaW5lZCBpZlxuICAgKiB0aGUgZnVsbCBrZXlwYXRoIGlzIHVucmVhY2hhYmxlLlxuICAgKi9cbiAgcHVibGljIHZhbHVlKCkge1xuICAgIGlmIChVdGlscy5pc09iamVjdCh0aGlzLnRhcmdldCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmtleSwgdGhpcy50YXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IGVuZCB2YWx1ZSBvZiB0aGUgb2JzZXJ2ZWQga2V5cGF0aC4gQ2FsbGluZyBzZXRWYWx1ZSB3aGVuXG4gICAqICB0aGUgZnVsbCBrZXlwYXRoIGlzIHVucmVhY2hhYmxlIGlzIGEgbm8tb3AuXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgcHVibGljIHNldFZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoVXRpbHMuaXNPYmplY3QodGhpcy50YXJnZXQpKSB7XG4gICAgICBPYnNlcnZlci5hZGFwdGVyc1t0aGlzLmtleS5pXS5zZXQodGhpcy50YXJnZXQsIHRoaXMua2V5LnBhdGgsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgcHJvdmlkZWQga2V5IG9uIGFuIG9iamVjdC5cbiAgICogQHBhcmFtIGtleVxuICAgKiBAcGFyYW0gb2JqXG4gICAqL1xuICBwdWJsaWMgZ2V0KGtleTogSUtleSwgb2JqOiBPYmopIHtcbiAgICByZXR1cm4gT2JzZXJ2ZXIuYWRhcHRlcnNba2V5LmldLmdldChvYmosIGtleS5wYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYnNlcnZlcyBvciB1bm9ic2VydmVzIGEgY2FsbGJhY2sgb24gdGhlIG9iamVjdCB1c2luZyB0aGUgcHJvdmlkZWQga2V5LlxuICAgKiBAcGFyYW0gYWN0aXZlXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHBhcmFtIG9ialxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICovXG4gIHB1YmxpYyBzZXQoYWN0aXZlOiBib29sZWFuLCBrZXk6IElLZXksIG9iajogT2JqLCBjYWxsYmFjazogSU9ic2VydmVyU3luY0NhbGxiYWNrKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgT2JzZXJ2ZXIuYWRhcHRlcnNba2V5LmldLm9ic2VydmUob2JqLCBrZXkucGF0aCwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYnNlcnZlci5hZGFwdGVyc1trZXkuaV0udW5vYnNlcnZlKG9iaiwga2V5LnBhdGgsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVW5vYnNlcnZlcyB0aGUgZW50aXJlIGtleXBhdGguXG4gICAqL1xuICBwdWJsaWMgdW5vYnNlcnZlKCkge1xuICAgIGxldCBvYmo6IE9iajtcbiAgICBsZXQgdG9rZW47XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0b2tlbiA9IHRoaXMudG9rZW5zW2luZGV4XTtcbiAgICAgIG9iaiA9IHRoaXMub2JqZWN0UGF0aFtpbmRleF07XG4gICAgICBpZiAob2JqKSB7XG4gICAgICAgIHRoaXMuc2V0KGZhbHNlLCB0b2tlbiwgb2JqLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoVXRpbHMuaXNPYmplY3QodGhpcy50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNldChmYWxzZSwgdGhpcy5rZXksIHRoaXMudGFyZ2V0LCB0aGlzLmNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdHJhdmVyc2UgdGhlIHNjb3BlIGNoYWluIHRvIGZpbmQgdGhlIHNjb3BlIHdoaWNoIGhhcyB0aGUgcm9vdCBwcm9wZXJ0eVxuICAgKiBpZiB0aGUgcHJvcGVydHkgaXMgbm90IGZvdW5kIGluIGNoYWluLCByZXR1cm5zIHRoZSByb290IHNjb3BlXG4gICAqIEBwYXJhbSBvYmpcbiAgICovXG4gIHB1YmxpYyBnZXRSb290T2JqZWN0KG9iajogT2JqKSB7XG4gICAgbGV0IHJvb3RQcm9wO1xuICAgIGxldCBjdXJyZW50O1xuICAgIGlmICghb2JqLiRwYXJlbnQpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgcm9vdFByb3AgPSB0aGlzLnRva2Vuc1swXS5wYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290UHJvcCA9IHRoaXMua2V5LnBhdGg7XG4gICAgfVxuXG4gICAgY3VycmVudCA9IG9iajtcbiAgICB3aGlsZSAoY3VycmVudC4kcGFyZW50ICYmIChjdXJyZW50W3Jvb3RQcm9wXSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQuJHBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi9zZXJ2aWNlcy91dGlscyc7XG5cbmltcG9ydCB7IElEYXRhRWxlbWVudCwgVmlldywgVEJsb2NrIH0gZnJvbSAnLi92aWV3JztcblxuLyoqXG4gKiBVc2VkIGFsc28gaW4gcGFyc2Vycy5wYXJzZVR5cGVcbiAqIFRPRE8gb3V0c291cmNlXG4gKi9cbmV4cG9ydCBjb25zdCBQUklNSVRJVkUgPSAwO1xuZXhwb3J0IGNvbnN0IEtFWVBBVEggPSAxO1xuZXhwb3J0IGNvbnN0IFRFWFQgPSAwO1xuZXhwb3J0IGNvbnN0IEJJTkRJTkcgPSAxO1xuXG5jb25zdCBRVU9URURfU1RSID0gL14nLionJHxeXCIuKlwiJC87IC8vIHJlZ2V4IHRvIHRlc3QgaWYgc3RyaW5nIGlzIHdyYXBwZWQgaW4gXCIgb3IgJ1xuY29uc3QgREVDTEFSQVRJT05fU1BMSVQgPSAvKCg/OidbXiddKicpKig/Oig/OlteXFx8J10qKD86J1teJ10qJykrW15cXHwnXSopK3xbXlxcfF0rKSl8XiQvZztcblxuLyoqXG4gKiBQYXJzZXIgYW5kIHRva2VuaXplciBmb3IgZ2V0dGluZyB0aGUgdHlwZSBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZy5cbiAqIEBwYXJhbSBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHlwZShzdHI/OiBzdHJpbmcpIHtcbiAgbGV0IHR5cGUgPSBQUklNSVRJVkU7XG4gIGxldCB2YWx1ZTogYW55ID0gc3RyO1xuICBpZiAoc3RyID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ge3R5cGUsIHZhbHVlOiB1bmRlZmluZWR9O1xuICB9XG4gIGlmIChRVU9URURfU1RSLnRlc3Qoc3RyKSkge1xuICAgIHZhbHVlID0gc3RyLnNsaWNlKDEsIC0xKTtcbiAgfSBlbHNlIGlmIChzdHIgPT09ICd0cnVlJykge1xuICAgIHZhbHVlID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChzdHIgPT09ICdmYWxzZScpIHtcbiAgICB2YWx1ZSA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKHN0ciA9PT0gJ251bGwnKSB7XG4gICAgdmFsdWUgPSBudWxsO1xuICB9IGVsc2UgaWYgKHN0ciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmIChzdHIgPT09ICcnKSB7XG4gICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAoIWlzTmFOKE51bWJlcihzdHIpKSkge1xuICAgIHZhbHVlID0gTnVtYmVyKHN0cik7XG4gIH0gZWxzZSBpZiAoVXRpbHMuaXNKc29uKHN0cikpIHtcbiAgICB2YWx1ZSA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgfSBlbHNlIHtcbiAgICB0eXBlID0gS0VZUEFUSDtcbiAgfVxuICByZXR1cm4ge3R5cGUsIHZhbHVlfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVG9rZW5zIHtcbiAgdHlwZTogbnVtYmVyO1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFRlbXBsYXRlIHBhcnNlciBhbmQgdG9rZW5pemVyIGZvciB7eyBtdXN0YWNoZS1zdHlsZSB9fSB0ZXh0IGNvbnRlbnQgYmluZGluZ3MuXG4gKiBQYXJzZXMgdGhlIHRlbXBsYXRlIGFuZCByZXR1cm5zIGEgc2V0IG9mIHRva2Vucywgc2VwYXJhdGluZyBzdGF0aWMgcG9ydGlvbnNcbiAqIG9mIHRleHQgZnJvbSBiaW5kaW5nIGRlY2xhcmF0aW9ucy5cbiAqIEBwYXJhbSB0ZW1wbGF0ZVxuICogQHBhcmFtIGRlbGltaXRlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGVtcGxhdGUodGVtcGxhdGU6IHN0cmluZywgZGVsaW1pdGVyczogc3RyaW5nW10pIHtcbiAgbGV0IHRva2VuczogSVRva2Vuc1tdIHwgbnVsbCA9IG51bGw7XG4gIGNvbnN0IGxlbmd0aCA9IHRlbXBsYXRlLmxlbmd0aDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgbGV0IGxhc3RJbmRleCA9IDA7XG4gIGNvbnN0IG9wZW4gPSBkZWxpbWl0ZXJzWzBdO1xuICBjb25zdCBjbG9zZSA9IGRlbGltaXRlcnNbMV07XG5cbiAgd2hpbGUgKGxhc3RJbmRleCA8IGxlbmd0aCkge1xuICAgIGluZGV4ID0gdGVtcGxhdGUuaW5kZXhPZihvcGVuLCBsYXN0SW5kZXgpO1xuXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaWYgKHRva2Vucykge1xuICAgICAgICB0b2tlbnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogVEVYVCxcbiAgICAgICAgICB2YWx1ZTogdGVtcGxhdGUuc2xpY2UobGFzdEluZGV4KSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2tlbnMgPSB0b2tlbnMgfHwgW107XG4gICAgICBpZiAoaW5kZXggPiAwICYmIGxhc3RJbmRleCA8IGluZGV4KSB7XG4gICAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiBURVhULFxuICAgICAgICAgIHZhbHVlOiB0ZW1wbGF0ZS5zbGljZShsYXN0SW5kZXgsIGluZGV4KSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGxhc3RJbmRleCA9IGluZGV4ICsgb3Blbi5sZW5ndGg7XG4gICAgICBpbmRleCA9IHRlbXBsYXRlLmluZGV4T2YoY2xvc2UsIGxhc3RJbmRleCk7XG5cbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgY29uc3Qgc3Vic3RyaW5nID0gdGVtcGxhdGUuc2xpY2UobGFzdEluZGV4IC0gY2xvc2UubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgbGFzdFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAobGFzdFRva2VuICYmIGxhc3RUb2tlbi50eXBlID09PSBURVhUKSB7XG4gICAgICAgICAgbGFzdFRva2VuLnZhbHVlICs9IHN1YnN0cmluZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b2tlbnMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiBURVhULFxuICAgICAgICAgICAgdmFsdWU6IHN1YnN0cmluZyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWx1ZSA9IHRlbXBsYXRlLnNsaWNlKGxhc3RJbmRleCwgaW5kZXgpLnRyaW0oKTtcblxuICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiBCSU5ESU5HLFxuICAgICAgICB2YWx1ZSxcbiAgICAgIH0pO1xuXG4gICAgICBsYXN0SW5kZXggPSBpbmRleCArIGNsb3NlLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VOb2RlKHZpZXc6IFZpZXcsIG5vZGU6IElEYXRhRWxlbWVudCwgdGVtcGxhdGVEZWxpbWl0ZXJzOiBBcnJheTxzdHJpbmc+KSB7XG4gIC8qKiBJZiB0cnVlIHN0b3AgLyBibG9jayB0aGUgcGFyc2VOb2RlICByZWN1cnNpb24gKi9cbiAgbGV0IGJsb2NrOiBUQmxvY2sgPSBmYWxzZTtcblxuICBub2RlID0gKCBub2RlIGFzIElEYXRhRWxlbWVudCk7XG4gIC8vIGlmIG5vZGUubm9kZVR5cGUgPT09IDMgPT09IE5vZGUuVEVYVF9OT0RFXG4gIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgbGV0IHRva2VucyA9IG51bGw7XG5cbiAgICAvLyBUT0RPIHdoeSBjaGVjayBkYXRhP1xuICAgIGlmIChub2RlLmRhdGEpIHtcbiAgICAgIHRva2VucyA9IHBhcnNlVGVtcGxhdGUobm9kZS5kYXRhLCB0ZW1wbGF0ZURlbGltaXRlcnMpO1xuICAgIH1cblxuICAgIGlmICh0b2tlbnMgJiYgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0b2tlbi52YWx1ZSk7XG4gICAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRleHQsIG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbi50eXBlID09PSAxKSB7XG4gICAgICAgICAgLy8gVE9ETyBmaXggYW55XG4gICAgICAgICAgdmlldy5idWlsZEJpbmRpbmcodGV4dCBhcyBhbnksIG51bGwsIHRva2VuLnZhbHVlLCBWaWV3Lm11c3RhY2hlVGV4dEJpbmRlciwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBibG9jayA9IHRydWU7XG4gICAgLy8gaWYgbm9kZS5ub2RlVHlwZSA9PT0gMSA9PT0gTm9kZS5FTEVNRU5UX05PREVcbiAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgLy8gdHJhdmVyc2UgYmluZHMgYXR0cmlidXRlc1xuICAgIGJsb2NrID0gdmlldy50cmF2ZXJzZShub2RlKTtcbiAgfVxuXG4gIGlmICghYmxvY2spIHtcbiAgICBpZiAobm9kZS5jaGlsZE5vZGVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwYXJzZU5vZGUodmlldywgKG5vZGUuY2hpbGROb2Rlc1tpXSBhcyBJRGF0YUVsZW1lbnQpLCB0ZW1wbGF0ZURlbGltaXRlcnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZWREZWNsYXJhdGlvbnMge1xuICBrZXlwYXRoPzogc3RyaW5nO1xuICBwaXBlczogc3RyaW5nW107XG59XG5cbi8qKlxuICogUGFyc2VzIGFuIGF0dHJpYnV0ZSBhcmd1bWVudCB0byBoaXMga2V5cGF0aCBhbmQgc3BsaXRzIHRoZSBmb3JtYXR0ZXIgbmFtZXMgaW50byBhIHBpcGVzIGFycmF5LlxuICogQHBhcmFtIGRlY2xhcmF0aW9uIGUuZy4gYG9iamVjdC5kYXRhIHwgdmFsaWRhdGUgfCBqc29uYFxuICpcbiAqIGlmIGRlY2xhcmF0aW9uIGlzXG4gKiBgYGBcbiAqIG9iamVjdC5kYXRhIHwgdmFsaWRhdGUgfCBqc29uYFxuICogYGBcbiAqXG4gKiB0aGUgcmVzdWx0IGlzXG4gKiBgYGBcbiAqIHtcbiAqICAgIGtleXBhdGg6IFwib2JqZWN0LmRhdGFcIixcbiAqICAgIHBpcGVzOiBbXCJ2YWxpZGF0ZVwiLCBcImpzb25cIl1cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEZWNsYXJhdGlvbihkZWNsYXJhdGlvbjogc3RyaW5nKTogSVBhcnNlZERlY2xhcmF0aW9ucyB7XG4gIGNvbnN0IG1hdGNoZXMgPSBkZWNsYXJhdGlvbi5tYXRjaChERUNMQVJBVElPTl9TUExJVCk7XG4gIGlmIChtYXRjaGVzID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdbVmlld10gTm8gbWF0Y2hlcycpO1xuICB9XG4gIGNvbnN0IHBpcGVzID0gbWF0Y2hlcy5tYXAoKHN0cjogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHN0ci50cmltKCk7XG4gIH0pO1xuICBjb25zdCBrZXlwYXRoID0gcGlwZXMuc2hpZnQoKSB8fCB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIDxJUGFyc2VkRGVjbGFyYXRpb25zPiB7XG4gICAga2V5cGF0aCxcbiAgICBwaXBlcyxcbiAgfTtcbn1cbiIsImltcG9ydCB7XG4gIElGb3JtYXR0ZXJzLFxuICBJQmluZGVycyxcbiAgSUFkYXB0ZXJzLFxuICBSb290LFxuICBJQ29tcG9uZW50cyxcbiAgSU9wdGlvbnMsXG59IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vc2VydmljZXMvdXRpbHMnO1xuaW1wb3J0IHsgcGFyc2VUZW1wbGF0ZSwgcGFyc2VUeXBlIH0gZnJvbSAnLi9wYXJzZXJzJztcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xuaW1wb3J0IHsgYWRhcHRlciB9IGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgeyBzdGFyQmluZGVyIH0gZnJvbSAnLi9iaW5kZXJzL2F0dHJpYnV0ZS5iaW5kZXInO1xuXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcbmltcG9ydCB7IE9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcic7XG5pbXBvcnQgeyBNb2R1bGVzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbW9kdWxlLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgUmliYSB7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGF0dHJpYnV0ZSBvbiB0aGUgZWxlbWVudC4gSWYgbm8gYmluZGVyIGFib3ZlIGlzIG1hdGNoZWQgaXQgd2lsbCBmYWxsXG4gICAqIGJhY2sgdG8gdXNpbmcgdGhpcyBiaW5kZXIuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZhbGxiYWNrQmluZGVyID0gc3RhckJpbmRlcjtcblxuICAvKipcbiAgICogRGVmYXVsdCBldmVudCBoYW5kbGVyLCBjYWxsZXMgdGhlIGZ1bmN0aW9uIGRlZmluZWQgaW4gaGlzIGJpbmRlclxuICAgKiBAc2VlIEJpbmRpbmcuZXZlbnRIYW5kbGVyXG4gICAqIEBwYXJhbSBlbCBUaGUgZWxlbWVudCB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZCBmcm9tXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGhhbmRsZXIodGhpczogYW55LCBjb250ZXh0OiBhbnksIGV2OiBFdmVudCwgYmluZGluZzogQmluZGluZywgZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5jYWxsKGNvbnRleHQsIGV2LCBiaW5kaW5nLnZpZXcubW9kZWxzLCBlbCk7XG4gIH1cblxuICAvKiogc2luZ2xldG9uIGluc3RhbmNlICovXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBSaWJhO1xuXG4gIHB1YmxpYyBtb2R1bGU6IE1vZHVsZXNTZXJ2aWNlO1xuXG4gIC8qKiBHbG9iYWwgYmluZGVycyAqL1xuICBwdWJsaWMgYmluZGVyczogSUJpbmRlcnM8YW55PiA9IHt9O1xuXG4gIC8qKiBHbG9iYWwgY29tcG9uZW50cy4gKi9cbiAgcHVibGljIGNvbXBvbmVudHM6IElDb21wb25lbnRzID0ge307XG5cbiAgLyoqIEdsb2JhbCBmb3JtYXR0ZXJzLiAqL1xuICBwdWJsaWMgZm9ybWF0dGVyczogSUZvcm1hdHRlcnMgPSB7fTtcblxuICAvKiogR2xvYmFsIChzaWdodGdsYXNzKSBhZGFwdGVycy4gKi9cbiAgcHVibGljICBhZGFwdGVyczogSUFkYXB0ZXJzID0ge1xuICAgICcuJzogYWRhcHRlcixcbiAgfTtcblxuICBwdWJsaWMgcGFyc2VUZW1wbGF0ZSA9IHBhcnNlVGVtcGxhdGU7XG5cbiAgcHVibGljIHBhcnNlVHlwZSA9IHBhcnNlVHlwZTtcblxuICAvKiogRGVmYXVsdCB0ZW1wbGF0ZSBkZWxpbWl0ZXJzLiAqL1xuICBwdWJsaWMgdGVtcGxhdGVEZWxpbWl0ZXJzID0gWyd7JywgJ30nXTtcblxuICAvKiogRGVmYXVsdCBzaWdodGdsYXNzIHJvb3QgaW50ZXJmYWNlLiAqL1xuICBwdWJsaWMgcm9vdEludGVyZmFjZSA9ICcuJztcblxuICAvKiogUHJlbG9hZCBkYXRhIGJ5IGRlZmF1bHQuICovXG4gIHB1YmxpYyBwcmVsb2FkRGF0YSA9IHRydWU7XG5cbiAgLyoqIFJlbW92ZSBiaW5kZXIgYXR0cmlidXRlcyBhZnRlciBiaW5kaW5nICovXG4gIHB1YmxpYyByZW1vdmVCaW5kZXJBdHRyaWJ1dGVzID0gdHJ1ZTsgLy8gVE9ETyBmaXhtZSBvbiBmYWxzZTogTWF4aW11bSBjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcblxuICAvKiogU3RvcCBiaW5kaW5nIG9uIHRoaXMgbm9kZSB0eXBlcyAqL1xuICBwdWJsaWMgYmxvY2tOb2RlTmFtZXMgPSBbJ1NDUklQVCcsICdTVFlMRScsICdURU1QTEFURScsICdDT0RFJ107XG5cbiAgLyoqIERlZmF1bHQgYXR0cmlidXRlIHByZWZpeC4gKi9cbiAgcHJpdmF0ZSBfcHJlZml4ID0gJ3J2JztcblxuICAvKiogRGVmYXVsdCBhdHRyaWJ1dGUgZnVsbCBwcmVmaXguICovXG4gIHByaXZhdGUgX2Z1bGxQcmVmaXggPSAncnYtJztcblxuICBzZXQgcHJlZml4KHZhbHVlKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XG4gICAgdGhpcy5fZnVsbFByZWZpeCA9IHZhbHVlICsgJy0nO1xuICB9XG5cbiAgZ2V0IHByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZml4O1xuICB9XG5cbiAgZ2V0IGZ1bGxQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1bGxQcmVmaXg7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgUmliYS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubW9kdWxlID0gbmV3IE1vZHVsZXNTZXJ2aWNlKHRoaXMuYmluZGVycywgdGhpcy5jb21wb25lbnRzLCB0aGlzLmZvcm1hdHRlcnMpO1xuICAgIGlmIChSaWJhLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gUmliYS5pbnN0YW5jZTtcbiAgICB9XG4gICAgUmliYS5pbnN0YW5jZSA9IHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2VzIGFuIG9iamVjdCBsaXRlcmFsIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgZ2xvYmFsIG9wdGlvbnMuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBwdWJsaWMgY29uZmlndXJlKG9wdGlvbnM6IFBhcnRpYWw8SU9wdGlvbnM+KSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IChvcHRpb25zIGFzIGFueSlbb3B0aW9uXTtcbiAgICAgIHN3aXRjaCAob3B0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2JpbmRlcnMnOlxuICAgICAgICAgIHRoaXMuYmluZGVycyA9IFV0aWxzLmNvbmNhdChmYWxzZSwgdGhpcy5iaW5kZXJzLCB2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Zvcm1hdHRlcnMnOlxuICAgICAgICAgIHRoaXMuZm9ybWF0dGVycyA9IFV0aWxzLmNvbmNhdChmYWxzZSwgdGhpcy5mb3JtYXR0ZXJzLCB2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbXBvbmVudHMnOlxuICAgICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFV0aWxzLmNvbmNhdChmYWxzZSwgdGhpcy5jb21wb25lbnRzLCB2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FkYXB0ZXJzJzpcbiAgICAgICAgICB0aGlzLmFkYXB0ZXJzID0gVXRpbHMuY29uY2F0KGZhbHNlLCB0aGlzLmFkYXB0ZXJzLCB2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3ByZWZpeCc6XG4gICAgICAgICAgdGhpcy5wcmVmaXggPSB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFyc2VUZW1wbGF0ZSc6XG4gICAgICAgICAgdGhpcy5wYXJzZVRlbXBsYXRlID0gdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BhcnNlVHlwZSc6XG4gICAgICAgICAgdGhpcy5wYXJzZVR5cGUgPSB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndGVtcGxhdGVEZWxpbWl0ZXJzJzpcbiAgICAgICAgICB0aGlzLnRlbXBsYXRlRGVsaW1pdGVycyA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyb290SW50ZXJmYWNlJzpcbiAgICAgICAgICB0aGlzLnJvb3RJbnRlcmZhY2UgPSB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHJlbG9hZERhdGEnOlxuICAgICAgICAgIHRoaXMucHJlbG9hZERhdGEgPSB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYmxvY2tOb2RlTmFtZXMnOlxuICAgICAgICAgICAgdGhpcy5ibG9ja05vZGVOYW1lcyA9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCdPcHRpb24gbm90IHN1cHBvcnRlZCcsIG9wdGlvbiwgdmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFZpZXdPcHRpb25zKG9wdGlvbnM/OiBQYXJ0aWFsPElPcHRpb25zPikge1xuICAgIGNvbnN0IHZpZXdPcHRpb25zOiBQYXJ0aWFsPElPcHRpb25zPiA9IHtcbiAgICAgIC8vIEVYVEVOU0lPTlNcbiAgICAgIGFkYXB0ZXJzOiA8SUFkYXB0ZXJzPiB7fSxcbiAgICAgIGJpbmRlcnM6IDxJQmluZGVyczxhbnk+PiB7fSxcbiAgICAgIGNvbXBvbmVudHM6IDxJQ29tcG9uZW50cz4ge30sXG4gICAgICBmb3JtYXR0ZXJzOiA8SUZvcm1hdHRlcnM+IHt9LFxuXG4gICAgICAvLyBvdGhlclxuICAgICAgc3RhckJpbmRlcnM6IHt9LFxuXG4gICAgICAvLyBzaWdodGdsYXNzXG4gICAgICByb290SW50ZXJmYWNlOiA8Um9vdD4ge30sXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICB2aWV3T3B0aW9ucy5iaW5kZXJzID0gVXRpbHMuY29uY2F0KGZhbHNlLCB2aWV3T3B0aW9ucy5iaW5kZXJzLCBvcHRpb25zLmJpbmRlcnMpO1xuICAgICAgdmlld09wdGlvbnMuZm9ybWF0dGVycyA9IFV0aWxzLmNvbmNhdChmYWxzZSwgdmlld09wdGlvbnMuZm9ybWF0dGVycywgb3B0aW9ucy5mb3JtYXR0ZXJzKTtcbiAgICAgIHZpZXdPcHRpb25zLmNvbXBvbmVudHMgPSBVdGlscy5jb25jYXQoZmFsc2UsIHZpZXdPcHRpb25zLmNvbXBvbmVudHMsIG9wdGlvbnMuY29tcG9uZW50cyk7XG4gICAgICB2aWV3T3B0aW9ucy5hZGFwdGVycyA9IFV0aWxzLmNvbmNhdChmYWxzZSwgdmlld09wdGlvbnMuYWRhcHRlcnMsIG9wdGlvbnMuYWRhcHRlcnMpO1xuICAgIH1cblxuICAgIHZpZXdPcHRpb25zLnByZWZpeCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5wcmVmaXggPyBvcHRpb25zLnByZWZpeCA6IHRoaXMucHJlZml4O1xuICAgIHZpZXdPcHRpb25zLmZ1bGxQcmVmaXggPSB2aWV3T3B0aW9ucy5wcmVmaXggPyB2aWV3T3B0aW9ucy5wcmVmaXggKyAnLScgOiB0aGlzLmZ1bGxQcmVmaXg7XG5cbiAgICB2aWV3T3B0aW9ucy50ZW1wbGF0ZURlbGltaXRlcnMgPSBvcHRpb25zICYmIG9wdGlvbnMudGVtcGxhdGVEZWxpbWl0ZXJzID8gb3B0aW9ucy50ZW1wbGF0ZURlbGltaXRlcnMgOiB0aGlzLnRlbXBsYXRlRGVsaW1pdGVycztcbiAgICB2aWV3T3B0aW9ucy5yb290SW50ZXJmYWNlID0gb3B0aW9ucyAmJiBvcHRpb25zLnJvb3RJbnRlcmZhY2UgPyBvcHRpb25zLnJvb3RJbnRlcmZhY2UgOiB0aGlzLnJvb3RJbnRlcmZhY2U7XG4gICAgdmlld09wdGlvbnMucmVtb3ZlQmluZGVyQXR0cmlidXRlcyA9IG9wdGlvbnMgJiYgdHlwZW9mKG9wdGlvbnMucmVtb3ZlQmluZGVyQXR0cmlidXRlcykgPT09ICdib29sZWFuJyA/IG9wdGlvbnMucmVtb3ZlQmluZGVyQXR0cmlidXRlcyA6IHRoaXMucmVtb3ZlQmluZGVyQXR0cmlidXRlcztcbiAgICB2aWV3T3B0aW9ucy5ibG9ja05vZGVOYW1lcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5ibG9ja05vZGVOYW1lcyA/IG9wdGlvbnMuYmxvY2tOb2RlTmFtZXMgOiB0aGlzLmJsb2NrTm9kZU5hbWVzO1xuICAgIHZpZXdPcHRpb25zLnByZWxvYWREYXRhID0gb3B0aW9ucyAmJiB0eXBlb2Yob3B0aW9ucy5wcmVsb2FkRGF0YSkgPT09ICdib29sZWFuJyA/IG9wdGlvbnMucHJlbG9hZERhdGEgOiB0aGlzLnByZWxvYWREYXRhO1xuICAgIHZpZXdPcHRpb25zLmhhbmRsZXIgPSBvcHRpb25zICYmIG9wdGlvbnMuaGFuZGxlciA/IG9wdGlvbnMuaGFuZGxlciA6IFJpYmEuaGFuZGxlcjtcblxuICAgIC8vIG1lcmdlIGV4dGVuc2lvbnNcbiAgICB2aWV3T3B0aW9ucy5iaW5kZXJzID0gVXRpbHMuY29uY2F0KGZhbHNlLCB0aGlzLmJpbmRlcnMsIHZpZXdPcHRpb25zLmJpbmRlcnMpO1xuICAgIHZpZXdPcHRpb25zLmZvcm1hdHRlcnMgPSBVdGlscy5jb25jYXQoZmFsc2UsIHRoaXMuZm9ybWF0dGVycywgdmlld09wdGlvbnMuZm9ybWF0dGVycyk7XG4gICAgdmlld09wdGlvbnMuY29tcG9uZW50cyA9IFV0aWxzLmNvbmNhdChmYWxzZSwgdGhpcy5jb21wb25lbnRzLCB2aWV3T3B0aW9ucy5jb21wb25lbnRzKTtcbiAgICB2aWV3T3B0aW9ucy5hZGFwdGVycyA9IFV0aWxzLmNvbmNhdChmYWxzZSwgdGhpcy5hZGFwdGVycywgdmlld09wdGlvbnMuYWRhcHRlcnMpO1xuXG4gICAgLy8gZ2V0IGFsbCBzdGFyQmluZGVycyBmcm9tIGF2YWlsYWJsZSBiaW5kZXJzXG4gICAgaWYgKHZpZXdPcHRpb25zLmJpbmRlcnMpIHtcbiAgICAgIHZpZXdPcHRpb25zLnN0YXJCaW5kZXJzID0gT2JqZWN0LmtleXModmlld09wdGlvbnMuYmluZGVycykuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGtleS5pbmRleE9mKCcqJykgPj0gMTsgLy8gU2hvdWxkIG90IHN0YXJ0IHdpdGggKlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICh2aWV3T3B0aW9ucyBhcyBJT3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgc29tZSBkYXRhIHRvIGEgdGVtcGxhdGUgLyBlbGVtZW50LiBSZXR1cm5zIGEgcmliYS5WaWV3IGluc3RhbmNlLlxuICAgKi9cbiAgcHVibGljIGJpbmQoZWw6IEhUTUxFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudCB8IEhUTUxVbmtub3duRWxlbWVudFtdLCBtb2RlbHM6IGFueSwgb3B0aW9ucz86IElPcHRpb25zKSB7XG4gICAgY29uc3Qgdmlld09wdGlvbnM6IElPcHRpb25zID0gdGhpcy5nZXRWaWV3T3B0aW9ucyhvcHRpb25zKTtcblxuICAgIG1vZGVscyA9IG1vZGVscyB8fCBuZXcgT2JqZWN0KG51bGwpO1xuICAgIE9ic2VydmVyLnVwZGF0ZU9wdGlvbnModmlld09wdGlvbnMpO1xuXG4gICAgY29uc3QgdmlldyA9IG5ldyBWaWV3KGVsLCBtb2RlbHMsIHZpZXdPcHRpb25zKTtcbiAgICB2aWV3LmJpbmQoKTtcbiAgICByZXR1cm4gdmlldztcbiAgfVxufVxuIiwiaW1wb3J0IHsgSUJpbmRlciwgSUJpbmRlcnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE1vZHVsZUVsZW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9tb2R1bGUtZWxlbWVudC5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEJpbmRlcnNTZXJ2aWNlIGV4dGVuZHMgTW9kdWxlRWxlbWVudFNlcnZpY2Uge1xuXG4gIHByb3RlY3RlZCB0eXBlOiAnYmluZGVyJyB8ICdmb3JtYXR0ZXInIHwgJ2NvbXBvbmVudHMnIHwgJ3NlcnZpY2VzJyA9ICdiaW5kZXInO1xuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gYmluZGVycztcbiAgICovXG4gIGNvbnN0cnVjdG9yKGJpbmRlcnM6IElCaW5kZXJzPGFueT4pIHtcbiAgICBzdXBlcihiaW5kZXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3QgYSBiaW5kZXJcbiAgICogQHBhcmFtIGJpbmRlclxuICAgKiBAcGFyYW0gbmFtZSAgT3ZlcndyaXRlcyB0aGUgbmFtZSB0byBhY2Nlc3MgdGhlIGJpbmRlciBvdmVyXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0KGJpbmRlcjogSUJpbmRlcjxhbnk+LCBmYWxsYmFja05hbWU/OiBzdHJpbmcsIGZvcmNlRmFsbGJhY2s6IGJvb2xlYW4gPSBmYWxzZSk6IElCaW5kZXJzPGFueT4ge1xuICAgIGlmICghYmluZGVyIHx8IHR5cGVvZihiaW5kZXIucm91dGluZSkgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuZGVidWcobmV3IEVycm9yKCdDYW4gbm90IHJlZ2lzdCBiaW5kZXIhJyksIGJpbmRlcik7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50cztcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lID0gZm9yY2VGYWxsYmFjayA/IGZhbGxiYWNrTmFtZSB8fCBiaW5kZXIubmFtZSA6IGJpbmRlci5uYW1lIHx8IGZhbGxiYWNrTmFtZTtcblxuICAgIGlmICghbmFtZSkge1xuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcignQmluZGVyIG5hbWUgbm90IGZvdW5kIScpLCBiaW5kZXIpO1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudHM7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50c1tuYW1lXSA9IGJpbmRlcjtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50cztcbiAgfVxufVxuIiwiaW1wb3J0IHsgSUNvbXBvbmVudHMgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTW9kdWxlRWxlbWVudFNlcnZpY2UgfSBmcm9tICcuL21vZHVsZS1lbGVtZW50LnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50U2VydmljZSBleHRlbmRzIE1vZHVsZUVsZW1lbnRTZXJ2aWNlIHtcblxuICBwcm90ZWN0ZWQgdHlwZTogJ2JpbmRlcicgfCAnZm9ybWF0dGVyJyB8ICdjb21wb25lbnRzJyB8ICdzZXJ2aWNlcycgPSAnY29tcG9uZW50cyc7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnRzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb21wb25lbnRzOiBJQ29tcG9uZW50cykge1xuICAgIHN1cGVyKGNvbXBvbmVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdCBhIGNvbXBvbmVudCB3aXRoIGhpcyBuYW1lXG4gICAqIEBwYXJhbSBjb21wb25lbnRcbiAgICogQHBhcmFtIG5hbWVcbiAgICovXG4gIHB1YmxpYyByZWdpc3QoY29tcG9uZW50OiB0eXBlb2YgQ29tcG9uZW50LCBmYWxsYmFja05hbWU/OiBzdHJpbmcsIGZvcmNlRmFsbGJhY2s6IGJvb2xlYW4gPSBmYWxzZSk6IElDb21wb25lbnRzIHtcbiAgICBjb25zdCBuYW1lID0gZm9yY2VGYWxsYmFjayA/IGZhbGxiYWNrTmFtZSB8fCBjb21wb25lbnQudGFnTmFtZSA6IGNvbXBvbmVudC50YWdOYW1lIHx8IGZhbGxiYWNrTmFtZTtcblxuICAgIGlmICghbmFtZSkge1xuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcignQ29tcG9uZW50IG5hbWUgbm90IGZvdW5kIScpLCBjb21wb25lbnQpO1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudHM7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50cztcbiAgfVxuXG59XG4iLCJ0eXBlIEV2ZW50Q2FsbGJhY2sgPSAoLi4uYXJnczogYW55W10pID0+IGFueTtcblxuaW50ZXJmYWNlIElFdmVudHMge1xuICBbZXZlbnROYW1lOiBzdHJpbmddOiBFdmVudENhbGxiYWNrW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50RGlzcGF0Y2hlckluc3RhbmNlcyB7XG4gIFtrZXk6IHN0cmluZ106IEV2ZW50RGlzcGF0Y2hlcjtcbn1cblxuLyoqXG4gKiBMaXR0bGUgRGlzcGF0Y2hlciBpbnNwaXJlZCBieSBNaWNyb0V2ZW50LmpzXG4gKlxuICogQHR5cGUge29iamVjdH1cbiAqL1xuY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcblxuICBwdWJsaWMgc3RhdGljIGluc3RhbmNlczogSUV2ZW50RGlzcGF0Y2hlckluc3RhbmNlcyA9IHt9O1xuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHJlc3VsdCA9IEV2ZW50RGlzcGF0Y2hlci5pbnN0YW5jZXNbaWRdO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIEV2ZW50RGlzcGF0Y2hlciBpbnN0YW5jZSB3aXRoIGlkICR7aWR9IGZvdW5kIWApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIE9iamVjdCB0aGF0IGtlZXBzIGFsbCB0aGUgZXZlbnRzXG4gICAqXG4gICAqIEBtZW1iZXJPZiBCYXJiYS5EaXNwYXRjaGVyXG4gICAqIEByZWFkT25seVxuICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgKi9cbiAgcHJpdmF0ZSBldmVudHM6IElFdmVudHMgPSB7fTtcblxuICBwcml2YXRlIGlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gc2luZ2xldG9uIGluc3RhbmNlIG9mIERpc3BhdGNoZXIuXG4gICAqIEBtZW1iZXJvZiBEaXNwYXRjaGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpZD86IHN0cmluZykge1xuICAgIGlmICghaWQpIHtcbiAgICAgIGlkID0gJ21haW4nO1xuICAgIH1cbiAgICB0aGlzLmlkID0gaWQ7XG5cbiAgICBpZiAoRXZlbnREaXNwYXRjaGVyLmluc3RhbmNlc1t0aGlzLmlkXSkge1xuICAgICAgcmV0dXJuIEV2ZW50RGlzcGF0Y2hlci5pbnN0YW5jZXNbdGhpcy5pZF07XG4gICAgfVxuXG4gICAgRXZlbnREaXNwYXRjaGVyLmluc3RhbmNlc1t0aGlzLmlkXSA9IHRoaXM7XG4gICAgcmV0dXJuIEV2ZW50RGlzcGF0Y2hlci5pbnN0YW5jZXNbdGhpcy5pZF07XG4gIH1cblxuICAvKipcbiAgICogQmluZCBhIGNhbGxiYWNrIHRvIGFuIGV2ZW50XG4gICAqXG4gICAqIEBtZW1iZXJPZiBCYXJiYS5EaXNwYXRjaGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHtFdmVudENhbGxiYWNrfSBmdW5jdGlvblxuICAgKi9cbiAgcHVibGljIG9uKGU6IHN0cmluZywgZjogRXZlbnRDYWxsYmFjaykge1xuICAgIHRoaXMuZXZlbnRzW2VdID0gdGhpcy5ldmVudHNbZV0gfHwgW107XG4gICAgdGhpcy5ldmVudHNbZV0ucHVzaChmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgZXZlbnRcbiAgICpcbiAgICogQG1lbWJlck9mIEJhcmJhLkRpc3BhdGNoZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0ge0V2ZW50Q2FsbGJhY2t9IGZ1bmN0aW9uXG4gICAqL1xuICBwdWJsaWMgb2ZmKGU6IHN0cmluZywgZjogRXZlbnRDYWxsYmFjaykge1xuICAgIGlmIChlIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2VdLnNwbGljZSh0aGlzLmV2ZW50c1tlXS5pbmRleE9mKGYpLCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlIHRoZSBldmVudCBydW5uaW5nIGFsbCB0aGUgZXZlbnQgYXNzb2NpYXRlZCB0byBpdFxuICAgKlxuICAgKiBAbWVtYmVyT2YgQmFyYmEuRGlzcGF0Y2hlclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0gIHthbnlbXX0gYXJnc1xuICAgKi9cbiAgcHVibGljIHRyaWdnZXIoZTogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkgeyAvLyBlLCAuLi5hcmdzXG4gICAgaWYgKGUgaW4gdGhpcy5ldmVudHMgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmV2ZW50c1tlXS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5ldmVudHNbZV1baV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9O1xuIiwiaW1wb3J0IHsgSUZvcm1hdHRlciwgSUZvcm1hdHRlcnN9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTW9kdWxlRWxlbWVudFNlcnZpY2UgfSBmcm9tICcuL21vZHVsZS1lbGVtZW50LnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgRm9ybWF0dGVyU2VydmljZSBleHRlbmRzIE1vZHVsZUVsZW1lbnRTZXJ2aWNlIHtcblxuICBwcm90ZWN0ZWQgdHlwZTogJ2JpbmRlcicgfCAnZm9ybWF0dGVyJyB8ICdjb21wb25lbnRzJyB8ICdzZXJ2aWNlcycgPSAnZm9ybWF0dGVyJztcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKGZvcm1hdHRlcnM6IElGb3JtYXR0ZXJzKSB7XG4gICBzdXBlcihmb3JtYXR0ZXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3QgYSBmb3JtYXR0ZXIgd2l0aCBoaXMgbmFtZVxuICAgKiBAcGFyYW0gZm9ybWF0dGVyXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0KGZvcm1hdHRlcjogSUZvcm1hdHRlciwgZmFsbGJhY2tOYW1lPzogc3RyaW5nLCBmb3JjZUZhbGxiYWNrOiBib29sZWFuID0gZmFsc2UpOiBJRm9ybWF0dGVycyB7XG5cbiAgICBjb25zdCBuYW1lID0gZm9yY2VGYWxsYmFjayA/IGZhbGxiYWNrTmFtZSB8fCBmb3JtYXR0ZXIubmFtZSA6IGZvcm1hdHRlci5uYW1lIHx8IGZhbGxiYWNrTmFtZTtcblxuICAgIGlmICghbmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtYXR0ZXIgbmFtZSBub3QgZm91bmQhJyk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50c1tuYW1lXSA9IGZvcm1hdHRlcjtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50cztcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9iaW5kZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnQtZGlzcGF0Y2hlci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZm9ybWF0dGVyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG4iLCJpbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL3ZlbmRvcnMnO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IHR5cGUgRWxlbWVudCA9IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBJRWxlbWVudHMge1xuICBba2V5OiBzdHJpbmddOiBFbGVtZW50O1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTW9kdWxlRWxlbWVudFNlcnZpY2Uge1xuICBwcm90ZWN0ZWQgZWxlbWVudHM6IElFbGVtZW50cztcblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgdHlwZTogJ2JpbmRlcicgfCAnZm9ybWF0dGVyJyB8ICdjb21wb25lbnRzJyB8ICdzZXJ2aWNlcyc7XG5cbiAgcHJvdGVjdGVkIGRlYnVnID0gRGVidWcoJ3NlcnZpY2VzOk1vZHVsZUVsZW1lbnRTZXJ2aWNlJyk7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50cztcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzOiBJRWxlbWVudHMpIHtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0IGEgZWxlbWVudFxuICAgKiBAcGFyYW0gZWxlbWVudFxuICAgKiBAcGFyYW0gbmFtZSAgT3ZlcndyaXRlcyB0aGUgbmFtZSB0byBhY2Nlc3MgdGhlIGVsZW1lbnQgb3ZlclxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IHJlZ2lzdChlbGVtZW50OiBFbGVtZW50LCBuYW1lPzogc3RyaW5nKTogSUVsZW1lbnRzO1xuXG4gIC8qKlxuICAgKiBSZWdpc3QgYSBzZXQgLyBhcnJheSBvZiBlbGVtZW50c1xuICAgKiBAcGFyYW0gZWxlbWVudHNcbiAgICovXG4gIHB1YmxpYyByZWdpc3RzKGVsZW1lbnRzOiBJRWxlbWVudHMpOiBJRWxlbWVudHMge1xuICAgIGlmICghVXRpbHMuaXNPYmplY3QoZWxlbWVudHMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnRzIHRvIHJlZ2lzdGVyIG11c3QgYmUgYW4gb2JqZWN0IG9mIGVsZW1lbnRzJyk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIGVsZW1lbnRzKSB7XG4gICAgICBpZiAoZWxlbWVudHMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkgIT09ICdfX2VzTW9kdWxlJykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNba2V5XTtcbiAgICAgICAgdGhpcy5kZWJ1ZyhgUmVnaXN0ICR7dGhpcy50eXBlfSB3aXRoIGtleSBcIiR7a2V5fVwiYCwgZWxlbWVudCk7XG4gICAgICAgIHRoaXMucmVnaXN0KGVsZW1lbnQsIGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL3ZlbmRvcnMnO1xuaW1wb3J0IHsgSUJpbmRlcnMsIElGb3JtYXR0ZXJzLCBJQ29tcG9uZW50cywgSVJpYmFNb2R1bGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEJpbmRlcnNTZXJ2aWNlIH0gZnJvbSAnLi9iaW5kZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtYXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9mb3JtYXR0ZXIuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBNb2R1bGVzU2VydmljZSB7XG4gIHB1YmxpYyBiaW5kZXI6IEJpbmRlcnNTZXJ2aWNlO1xuICBwdWJsaWMgY29tcG9uZW50OiBDb21wb25lbnRTZXJ2aWNlO1xuICBwdWJsaWMgZm9ybWF0dGVyOiBGb3JtYXR0ZXJTZXJ2aWNlO1xuICBwcm90ZWN0ZWQgZGVidWcgPSBEZWJ1Zygnc2VydmljZXM6TW9kdWxlc1NlcnZpY2UnKTtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGJpbmRlcnM7XG4gICAqL1xuICBjb25zdHJ1Y3RvcihiaW5kZXJzOiBJQmluZGVyczxhbnk+LCBjb21wb25lbnRzOiBJQ29tcG9uZW50cywgZm9ybWF0dGVyczogSUZvcm1hdHRlcnMpIHtcbiAgICB0aGlzLmJpbmRlciA9IG5ldyBCaW5kZXJzU2VydmljZShiaW5kZXJzKTtcbiAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnRTZXJ2aWNlKGNvbXBvbmVudHMpO1xuICAgIHRoaXMuZm9ybWF0dGVyID0gbmV3IEZvcm1hdHRlclNlcnZpY2UoZm9ybWF0dGVycyk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0IGEgc2V0IG9mIGJpbmRlcnNcbiAgICogQHBhcmFtIGJpbmRlcnNcbiAgICovXG4gIHB1YmxpYyByZWdpc3QobW9kdWxlOiBJUmliYU1vZHVsZSkge1xuICAgIGlmIChtb2R1bGUuYmluZGVycykge1xuICAgICAgdGhpcy5kZWJ1ZygnUmVnaXN0IGJpbmRlcnM7ICcsIG1vZHVsZS5iaW5kZXJzKTtcbiAgICAgIHRoaXMuYmluZGVyLnJlZ2lzdHMobW9kdWxlLmJpbmRlcnMpO1xuICAgIH1cbiAgICBpZiAobW9kdWxlLmNvbXBvbmVudHMpIHtcbiAgICAgIHRoaXMuZGVidWcoJ1JlZ2lzdCBjb21wb25lbnRzOyAnLCBtb2R1bGUuY29tcG9uZW50cyk7XG4gICAgICB0aGlzLmNvbXBvbmVudC5yZWdpc3RzKG1vZHVsZS5jb21wb25lbnRzKTtcbiAgICB9XG4gICAgaWYgKG1vZHVsZS5mb3JtYXR0ZXJzKSB7XG4gICAgICB0aGlzLmRlYnVnKCdSZWdpc3QgZm9ybWF0dGVyczsgJywgbW9kdWxlLmZvcm1hdHRlcnMpO1xuICAgICAgdGhpcy5mb3JtYXR0ZXIucmVnaXN0cyhtb2R1bGUuZm9ybWF0dGVycyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBKUXVlcnkgfSBmcm9tICcuLi92ZW5kb3JzJztcblxuLy8gVE9ET1xuZXhwb3J0IGludGVyZmFjZSBJRGVmZXJyZWQge1xuICByZXNvbHZlOiBhbnk7XG4gIHJlamVjdDogYW55O1xufVxuXG4vKipcbiAqIEp1c3QgYW4gQ2xhc3Mgd2l0aCBzb21lIGhlbHBmdWwgZnVuY3Rpb25zXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIFV0aWxzXG4gKi9cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG5cbiAgLyoqXG4gICAqIFByb21pc2UgdmVyc2lvbiBvZiBKUXVlcnkuZ2V0SlNPTigpXG4gICAqIExvYWQgSlNPTi1lbmNvZGVkIGRhdGEgZnJvbSB0aGUgc2VydmVyIHVzaW5nIGEgR0VUIEhUVFAgcmVxdWVzdC5cbiAgICogQHBhcmFtIHVybCBBIHN0cmluZyBjb250YWluaW5nIHRoZSBVUkwgdG8gd2hpY2ggdGhlIHJlcXVlc3QgaXMgc2VudC5cbiAgICogQHBhcmFtIGRhdGEgQSBwbGFpbiBvYmplY3Qgb3Igc3RyaW5nIHRoYXQgaXMgc2VudCB0byB0aGUgc2VydmVyIHdpdGggdGhlIHJlcXVlc3QuXG4gICAqIEBzZWUgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9qcXVlcnkuZ2V0anNvbi9cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SlNPTih1cmw6IHN0cmluZywgZGF0YT86IGFueSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEpRdWVyeS5nZXRKU09OKHVybCwgZGF0YSlcbiAgICAgIC5kb25lKChyZXNvbHZlKSlcbiAgICAgIC5mYWlsKCgganF4aHIsIHRleHRTdGF0dXMsIGVycm9yICkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ2pxeGhyJywganF4aHIsICd0ZXh0U3RhdHVzJywgdGV4dFN0YXR1cywgJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICByZWplY3QoanF4aHIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHJvbWlzZSB2ZXJzaW9uIG9mIEpRdWVyeS5wb3N0KClcbiAgICogTG9hZCBkYXRhIGZyb20gdGhlIHNlcnZlciB1c2luZyBhIEhUVFAgUE9TVCByZXF1ZXN0LlxuICAgKiBAcGFyYW0gdXJsIEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIFVSTCB0byB3aGljaCB0aGUgcmVxdWVzdCBpcyBzZW50LlxuICAgKiBAcGFyYW0gZGF0YSBBIHBsYWluIG9iamVjdCBvciBzdHJpbmcgdGhhdCBpcyBzZW50IHRvIHRoZSBzZXJ2ZXIgd2l0aCB0aGUgcmVxdWVzdC5cbiAgICogQHBhcmFtIGRhdGFUeXBlIFRoZSB0eXBlIG9mIGRhdGEgZXhwZWN0ZWQgZnJvbSB0aGUgc2VydmVyLiBEZWZhdWx0OiBJbnRlbGxpZ2VudCBHdWVzcyAoeG1sLCBqc29uLCBzY3JpcHQsIHRleHQsIGh0bWwpLlxuICAgKiBAc2VlIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vanF1ZXJ5LnBvc3QvXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGRhdGFUeXBlPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgSlF1ZXJ5LnBvc3QodXJsLCBkYXRhLCBudWxsLCBkYXRhVHlwZSlcbiAgICAgIC5kb25lKChyZXNvbHZlKSlcbiAgICAgIC5mYWlsKCgganF4aHIsIHRleHRTdGF0dXMsIGVycm9yICkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ2pxeGhyJywganF4aHIsICd0ZXh0U3RhdHVzJywgdGV4dFN0YXR1cywgJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICByZWplY3QoanF4aHIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlbGV0ZSh1cmw6IHN0cmluZywgZGF0YT86IGFueSwgZGF0YVR5cGU/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXR1cm4gSlF1ZXJ5LmFqYXgoe1xuICAgICAgICB1cmwsXG4gICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICBkYXRhLFxuICAgICAgICBkYXRhVHlwZSxcbiAgICAgIH0pXG4gICAgICAuZG9uZSgocmVzb2x2ZSkpXG4gICAgICAuZmFpbCgoIGpxeGhyLCB0ZXh0U3RhdHVzLCBlcnJvciApID0+IHtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKCdqcXhocicsIGpxeGhyLCAndGV4dFN0YXR1cycsIHRleHRTdGF0dXMsICdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgcmVqZWN0KGpxeGhyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBwdXQodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGRhdGFUeXBlPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIEpRdWVyeS5hamF4KHtcbiAgICAgICAgdXJsLFxuICAgICAgICB0eXBlOiAnUFVUJyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZGF0YVR5cGUsXG4gICAgICB9KVxuICAgICAgLmRvbmUoKHJlc29sdmUpKVxuICAgICAgLmZhaWwoKCBqcXhociwgdGV4dFN0YXR1cywgZXJyb3IgKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybignanF4aHInLCBqcXhociwgJ3RleHRTdGF0dXMnLCB0ZXh0U3RhdHVzLCAnZXJyb3InLCBlcnJvcik7XG4gICAgICAgIHJlamVjdChqcXhocik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9taXNlIHZlcnNpb24gb2YgSlF1ZXJ5LmdldCgpXG4gICAqIExvYWQgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIgdXNpbmcgYSBIVFRQIEdFVCByZXF1ZXN0LlxuICAgKiBAcGFyYW0gdXJsIEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIFVSTCB0byB3aGljaCB0aGUgcmVxdWVzdCBpcyBzZW50LlxuICAgKiBAcGFyYW0gZGF0YSBBIHBsYWluIG9iamVjdCBvciBzdHJpbmcgdGhhdCBpcyBzZW50IHRvIHRoZSBzZXJ2ZXIgd2l0aCB0aGUgcmVxdWVzdC5cbiAgICogQHBhcmFtIGRhdGFUeXBlIFRoZSB0eXBlIG9mIGRhdGEgZXhwZWN0ZWQgZnJvbSB0aGUgc2VydmVyLiBEZWZhdWx0OiBJbnRlbGxpZ2VudCBHdWVzcyAoeG1sLCBqc29uLCBzY3JpcHQsIHRleHQsIGh0bWwpLlxuICAgKiBAc2VlIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vanF1ZXJ5LmdldC9cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0KHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBkYXRhVHlwZT86IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEpRdWVyeS5nZXQodXJsLCBkYXRhLCBudWxsLCBkYXRhVHlwZSlcbiAgICAgIC5kb25lKChyZXNvbHZlKSlcbiAgICAgIC5mYWlsKCgganF4aHIsIHRleHRTdGF0dXMsIGVycm9yICkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ2pxeGhyJywganF4aHIsICd0ZXh0U3RhdHVzJywgdGV4dFN0YXR1cywgJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICByZWplY3QoanF4aHIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCBpZiBzdHJpbmcgaXMgYSBqc29uIHN0cmluZ1xuICAgKiBAcGFyYW0gc3RyXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzSnNvbihzdHI/OiBzdHJpbmcgfCBudWxsKSB7XG4gICAgaWYgKCFzdHIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZhbCA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgIHJldHVybiAoQXJyYXkuaXNBcnJheSh2YWwpIHx8IHR5cGVvZih2YWwpID09PSAnb2JqZWN0JykgPyB0cnVlIDogZmFsc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdmFsdWUgaXMgdW5kZWZpbmVkXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzVW5kZWZpbmVkKHZhbHVlPzogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZih2YWx1ZSkgPT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHZhbHVlIGlzIHVuZGVmaW5lZFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc0RlZmluZWQodmFsdWU/OiBhbnkpIHtcbiAgICByZXR1cm4gIVV0aWxzLmlzVW5kZWZpbmVkKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0eXBlIGlzIE9iamVjdFxuICAgKiBAc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80Nzc1NzM3LzE0NjU5MTlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNPYmplY3Qob2JqOiBvYmplY3QpIHtcbiAgICByZXR1cm4gVXRpbHMuaXNEZWZpbmVkKG9iaikgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHZhbHVlIHRvIHN0cmluZyBvciByZXR1cm4gdW5kZWZpbmVkIGlmIHZhbHVlIGlzIG51bGxcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldFN0cmluZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgPyB2YWx1ZS50b1N0cmluZygpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHZhbHVlIHRvIG51bWJlciBvciByZXR1cm4gMCBpZiB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZFxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TnVtYmVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdmFsdWUgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdGltZXMobjogbnVtYmVyLCBjYjogKCkgPT4gdm9pZCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRJbnB1dFZhbHVlKGVsOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKChlbCBhcyBIVE1MU2VsZWN0RWxlbWVudCkudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgcmV0dXJuIChlbCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkO1xuICAgIH0gZWxzZSBpZiAoKGVsIGFzIEhUTUxTZWxlY3RFbGVtZW50KS50eXBlID09PSAnc2VsZWN0LW11bHRpcGxlJykge1xuICAgICAgY29uc3Qgb3B0aW9uczogSFRNTE9wdGlvbnNDb2xsZWN0aW9uID0gKGVsIGFzIEhUTUxTZWxlY3RFbGVtZW50KS5vcHRpb25zO1xuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25zW2tleV07XG4gICAgICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gZWxzZSBpZiAoIGVsLmdldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJykpIHtcbiAgICAgIHJldHVybiBlbC5pbm5lckhUTUw7IC8vIFRPRE8gd3JpdGUgdGVzdCBmb3IgY29udGVudGVkaXRhYmxlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoZWwgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBjYW1lbC1jYXNlZCB2ZXJzaW9uIG9mIHRoZSBzdHJpbmcuIFVzZWQgd2hlbiB0cmFuc2xhdGluZyBhblxuICAgKiBlbGVtZW50J3MgYXR0cmlidXRlIG5hbWUgaW50byBhIHByb3BlcnR5IG5hbWUgZm9yIHRoZSBjb21wb25lbnQncyBzY29wZS5cbiAgICogQHBhcmFtIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjYW1lbENhc2UgPSAoc3RyOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLy0oW2Etel0pL2csIChncm91cGVkKSA9PiB7XG4gICAgICByZXR1cm4gZ3JvdXBlZFsxXS50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHZhbHVlIGlzIGEgZnVuY3Rpb25cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNGdW5jdGlvbih2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZih2YWx1ZSkgPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdmFyaWFibGUgaXMgYW4gQXJyYXlcbiAgICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc3NTczNy8xNDY1OTE5XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzQXJyYXkodmFsdWU6IGFueSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIHZhbHVlICkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciB2YXJpYWJsZSBpcyBudW1iZXIgb3IgYSBzdHJpbmcgd2l0aCBudW1iZXJzIGluIEphdmFTY3JpcHRcbiAgICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQyMTk4OC8xNDY1OTE5XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzTnVtYmVyKHZhbHVlPzogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgIWlzTmFOKHZhbHVlIC0gMCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdHlwZSBpcyBCb29sZWFuXG4gICAqIEBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI4ODE0NjE1LzE0NjU5MTlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNCb29sZWFuKHZhbHVlPzogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZih2YWx1ZSkgPT09IHR5cGVvZih0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB2YWx1ZSBpcyBhIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc1N0cmluZyh2YWx1ZT86IGFueSkge1xuICAgIHJldHVybiB0aGlzLmlzRGVmaW5lZCh2YWx1ZSkgJiYgdHlwZW9mKHZhbHVlKSA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgc3RyaW5nIGNvbnRhaW5zIGEgbnVtYmVyXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHN0cmluZ0hhc051bWJlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTdHJpbmcodmFsdWUpICYmIC9cXGQvLnRlc3QodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHN0cmluZyBjb250YWlucyBvbmx5IG51bWJlcnNcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc3RyaW5nSGFzT25seU51bWJlcnModmFsdWU/OiBhbnkpIHtcbiAgICByZXR1cm4gL15cXGQrJC8udGVzdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgc3RyaW5nIGNvbnRhaW5zIG9ubHkgbnVtYmVycywgKywgLSBhbmQgKClcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc3RyaW5nSXNQaG9uZU51bWJlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIC9eWzAtOSAoKSstXSskLy50ZXN0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBKdXN0IGdldCB0aGUgZGlnaXRzIG9mIGEgc3RyaW5nLCB1c2VmdWwgdG8gcmVtb3ZlIHB4IHBpeGVsIGZyb20gY3NzIHZhbHVlXG4gICAqXG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTEwMDY1My8xNDY1OTE5XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGp1c3REaWdpdHMoc3RyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBudW0gPSBzdHIucmVwbGFjZSgvW14tXFxkXFwuXS9nLCAnJyk7XG4gICAgaWYgKCFVdGlscy5pc051bWJlcihudW0pKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcihudW0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSB0aGUgY29udGVudHMgb2YgdHdvIG9yIG1vcmUgb2JqZWN0cyB0b2dldGhlciBpbnRvIHRoZSBmaXJzdCBvYmplY3QuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVlcCBJZiB0cnVlLCB0aGUgbWVyZ2UgYmVjb21lcyByZWN1cnNpdmUgKGFrYS4gZGVlcCBjb3B5KS5cbiAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCBBbiBvYmplY3QgdGhhdCB3aWxsIHJlY2VpdmUgdGhlIG5ldyBwcm9wZXJ0aWVzIGlmIGFkZGl0aW9uYWwgb2JqZWN0cyBhcmUgcGFzc2VkIGluIG9yIHRoYXQgd2lsbCBleHRlbmQgdGhlIEpRdWVyeSBuYW1lc3BhY2UgaWYgaXQgaXMgdGhlIHNvbGUgYXJndW1lbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3QxIEFuIG9iamVjdCBjb250YWluaW5nIGFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBtZXJnZSBpbi5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtvYmplY3ROXSBBZGRpdGlvbmFsIG9iamVjdHMgY29udGFpbmluZyBwcm9wZXJ0aWVzIHRvIG1lcmdlIGluLlxuICAgKiBAcmV0dXJuc1xuICAgKiBAbWVtYmVyb2YgVXRpbHNcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZXh0ZW5kKGRlZXA6IGJvb2xlYW4sIHRhcmdldD86IG9iamVjdCwgb2JqZWN0MT86IG9iamVjdCwgb2JqZWN0Tj86IG9iamVjdCkge1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKGRlZXApIHtcbiAgICAgIHJlc3VsdCA9IEpRdWVyeS5leHRlbmQodHJ1ZSwgdGFyZ2V0IHx8IHt9LCBvYmplY3QxIHx8IHt9LCBvYmplY3ROKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUGFzc2luZyBmYWxzZSBmb3IgZGVlcCBhcmd1bWVudCBpcyBub3Qgc3VwcG9ydGVkLlxuICAgICAgcmVzdWx0ID0gSlF1ZXJ5LmV4dGVuZCh0YXJnZXQgfHwge30sIG9iamVjdDEgfHwge30sIG9iamVjdE4pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmNhdCB0aGUgY29udGVudHMgb2YgdHdvIG9iamVjdHMgdG9nZXRoZXIgaW50byB0aGUgZmlyc3Qgb2JqZWN0IGFuZCByZXR1cm4gdGhlIGNvbmNhdGVuYXRlZCBvYmplY3QuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVlcCBJZiB0cnVlLCB0aGUgbWVyZ2UgYmVjb21lcyByZWN1cnNpdmUgKGFrYS4gZGVlcCBjb3B5KS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9iamVjdDEgQW4gZmlyc3Qgb2JqZWN0IGNvbnRhaW5pbmcgcHJvcGVydGllcyB0byBjb25jYXQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3QyIFRoZSBzZWNvbmQgb2JqZWN0IGNvbnRhaW5pbmcgcHJvcGVydGllcyB0byBjb25jYXQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNvbmNhdChkZWVwOiBib29sZWFuLCBvYmplY3QxPzogb2JqZWN0LCBvYmplY3QyPzogb2JqZWN0KTogYW55IHtcbiAgICBvYmplY3QxID0gdGhpcy5leHRlbmQoZGVlcCwgb2JqZWN0MSB8fCB7fSwgb2JqZWN0MSB8fCB7fSwgb2JqZWN0MiB8fCB7fSk7XG4gICAgcmV0dXJuIG9iamVjdDE7XG4gIH1cblxuICAvKipcbiAgICogQ2xvbmUgYW4gb2JqZWN0IG9yIGFycmF5XG4gICAqIEBwYXJhbSBkZWVwIElmIHRydWUsIHRoZSBtZXJnZSBiZWNvbWVzIHJlY3Vyc2l2ZSAoYWthLiBkZWVwIGNvcHkpLlxuICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZShzKSB0byBjbG9uZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjbG9uZShkZWVwOiBib29sZWFuLCB2YWw6IGFueSkge1xuICAgIGlmIChVdGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHJldHVybiB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFV0aWxzLmV4dGVuZChkZWVwLCB7fSwgdmFsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGhlYWRlciBmb3IgZWFjaCB4aHIgYW5kIGpxdWVyeSByZXF1ZXN0XG4gICAqIEBwYXJhbSBuYW1lIEhlYWRlciBuYW1lXG4gICAqIEBwYXJhbSB2YWx1ZSBIYW5kZXIgdmFsdWVcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2V0UmVxdWVzdEhlYWRlckVhY2hSZXF1ZXN0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIC8vIFRPRE8gQXJlIG9sZCB2YWx1ZXMgb3ZlcndyaXR0ZW4gaWYgSlF1ZXJ5LmFqYXhTZXR1cCBjYWxsZWQgbXVsdGlwbGUgdGltZXM/XG4gICAgSlF1ZXJ5LmFqYXhTZXR1cCh7XG4gICAgICBiZWZvcmVTZW5kOiAoeGhyOiBKUXVlcnlYSFIpID0+IHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLl9yZXF1ZXN0SGVhZGVyc0VhY2hSZXF1ZXN0LnB1c2goe1xuICAgICAgbmFtZSxcbiAgICAgIHZhbHVlLFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBTdGFydCBhbiBYTUxIdHRwUmVxdWVzdCgpIGFuZCByZXR1cm4gYSBQcm9taXNlXG4gICAqXG4gICAqIEBtZW1iZXJPZiBCYXJiYS5VdGlsc1xuICAgKiBAcGFyYW0gdXJsXG4gICAqIEBwYXJhbSB4aHJUaW1lb3V0IFRpbWUgaW4gbWlsbGlzZWNvbmQgYWZ0ZXIgdGhlIHhociByZXF1ZXN0IGdvZXMgaW4gdGltZW91dFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyB4aHIodXJsOiBzdHJpbmcsIHhoclRpbWVvdXQgPSA1MDAwKSB7XG4gICAgY29uc3QgZGVmZXJyZWQgPSB0aGlzLmRlZmVycmVkKCk7XG4gICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGlmIChyZXEuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucmVzb2x2ZShyZXEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcigneGhyOiBIVFRQIGNvZGUgaXMgbm90IDIwMCcpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXEub250aW1lb3V0ID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoJ3hocjogVGltZW91dCBleGNlZWRlZCcpKTtcbiAgICB9O1xuXG4gICAgcmVxLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgcmVxLnRpbWVvdXQgPSB4aHJUaW1lb3V0O1xuICAgIGZvciAoY29uc3QgaGVhZGVyIG9mIHRoaXMuX3JlcXVlc3RIZWFkZXJzRWFjaFJlcXVlc3QpIHtcbiAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlci5uYW1lLCBoZWFkZXIudmFsdWUpO1xuICAgIH1cbiAgICByZXEuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IFwiRGVmZXJyZWRcIiBvYmplY3RcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Nb3ppbGxhL0phdmFTY3JpcHRfY29kZV9tb2R1bGVzL1Byb21pc2UuanNtL0RlZmVycmVkXG4gICAqXG4gICAqIEBtZW1iZXJPZiBCYXJiYS5VdGlsc1xuICAgKiBAcmV0dXJuIHtJRGVmZXJyZWR9XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGRlZmVycmVkKCk6IGFueSB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpID0+IHtcbiAgICAgIG9iai5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIG9iai5yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG4gICAgb2JqLnByb21pc2UgPSBwcm9tO1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGhvc3RuYW1lIGFuIHBhdGggb2YgYWRkcmVzcyBiYXJcbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83MzY5NzAvMTQ2NTkxOVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgbCA9IGdldExvY2F0aW9uKFwiaHR0cDovL2V4YW1wbGUuY29tL3BhdGhcIik7XG4gICAqIGNvbnNvbGUuZGVidWcobC5ob3N0bmFtZSlcbiAgICogPj4gXCJleGFtcGxlLmNvbVwiXG4gICAqIGNvbnNvbGUuZGVidWcobC5wYXRobmFtZSlcbiAgICogPj4gXCIvcGF0aFwiXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldExvY2F0aW9uKHVybD86IHN0cmluZyk6IExvY2F0aW9uIHtcbiAgICBpZiAoIXVybCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbjtcbiAgICB9XG4gICAgLy8gbC5ocmVmID0gaHJlZjtcbiAgICBjb25zdCBsID0gKEpRdWVyeShgPGEgaHJlZj1cIiR7dXJsfVwiPjwvYT5gKVswXSBhcyBhbnkgYXMgTG9jYXRpb24pO1xuICAgIHJldHVybiBsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCB1cmxcbiAgICpcbiAgICogQG1lbWJlck9mIEJhcmJhLlV0aWxzXG4gICAqIEByZXR1cm4ge3N0cmluZ30gY3VycmVudFVybFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRVcmwodXJsPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IFV0aWxzLmdldExvY2F0aW9uKHVybCk7XG4gICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArXG4gICAgICBsb2NhdGlvbi5ob3N0ICtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lICtcbiAgICAgIGxvY2F0aW9uLnNlYXJjaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB3ZSBhcmUgb24gdGhlIHJvdXRlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG9uUm91dGUgPSAoY2hlY2tVcmw/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoY2hlY2tVcmwpIHtcbiAgICAgIGNvbnN0IHBhdGhuYW1lID0gVXRpbHMuZ2V0TG9jYXRpb24oKS5wYXRobmFtZTtcbiAgICAgIHJldHVybiBjaGVja1VybCA9PT0gcGF0aG5hbWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgY3VycmVudCBsb2NhdGlvbiB1cmwgc3RhdHMgd2l0aCBhIHVybCBvciBpcyBlcXVhbFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBvblBhcmVudFJvdXRlID0gKGNoZWNrVXJsPzogc3RyaW5nKSA9PiB7XG4gICAgaWYgKGNoZWNrVXJsKSB7XG4gICAgICBjb25zdCBwYXRobmFtZSA9IFV0aWxzLmdldExvY2F0aW9uKCkucGF0aG5hbWU7XG4gICAgICByZXR1cm4gcGF0aG5hbWUuc3RhcnRzV2l0aChjaGVja1VybCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiB1cmwsIHJldHVybiBpdCB3aXRob3V0IHRoZSBoYXNoXG4gICAqXG4gICAqIEBtZW1iZXJPZiBCYXJiYS5VdGlsc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHVybFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IG5ld0NsZWFuVXJsXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNsZWFuTGluayh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHVybC5yZXBsYWNlKC8jLiovLCAnJyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBwb3J0IG51bWJlciBub3JtYWxpemVkLCBldmVudHVhbGx5IHlvdSBjYW4gcGFzcyBhIHN0cmluZyB0byBiZSBub3JtYWxpemVkLlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQmFyYmEuVXRpbHNcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBwXG4gICAqIEByZXR1cm4ge0ludH0gcG9ydFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRQb3J0KHA/OiBzdHJpbmcsIHVybD86IHN0cmluZykge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gVXRpbHMuZ2V0TG9jYXRpb24odXJsKTtcbiAgICBjb25zdCBwb3J0ID0gdHlwZW9mIHAgIT09ICd1bmRlZmluZWQnID8gcCA6IGxvY2F0aW9uLnBvcnQ7XG4gICAgY29uc3QgcHJvdG9jb2wgPSBsb2NhdGlvbi5wcm90b2NvbDtcblxuICAgIGlmIChwb3J0ICE9PSAnJykge1xuICAgICAgcmV0dXJuIE51bWJlcihwb3J0KTtcbiAgICB9XG4gICAgaWYgKHByb3RvY29sID09PSAnaHR0cDonKSB7XG4gICAgICByZXR1cm4gODA7XG4gICAgfVxuXG4gICAgaWYgKHByb3RvY29sID09PSAnaHR0cHM6Jykge1xuICAgICAgcmV0dXJuIDQ0MztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGVzdCBpZiB1cmwgaXMgYWJzb2x1dGUgb3IgcmVsYXRpdmVcbiAgICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTk3MDk4NDYvMTQ2NTkxOVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc0Fic29sdXRlVXJsKHVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgaXNQcm90b2tvbGwgPSBuZXcgUmVnRXhwKCdeKD86W2Etel0rOik/Ly8nLCAnaScpO1xuICAgIGNvbnN0IGlzQWJzb2x1dGUgPSBpc1Byb3Rva29sbC50ZXN0KHVybCkgfHwgdXJsLnN0YXJ0c1dpdGgoJ21haWx0bzonKSB8fCB1cmwuc3RhcnRzV2l0aCgndGVsOicpIHx8IHVybC5zdGFydHNXaXRoKCdmYXg6Jyk7XG4gICAgcmV0dXJuIGlzQWJzb2x1dGU7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzRXh0ZXJuYWxVcmwgPSAoYWJzb2x1dGVVcmw6IHN0cmluZykgPT4ge1xuICAgIGlmIChVdGlscy5pc0Fic29sdXRlVXJsKGFic29sdXRlVXJsKSkge1xuICAgICAgY29uc3QgbG9jYXRpb24gPSBVdGlscy5nZXRMb2NhdGlvbigpO1xuICAgICAgY29uc3QgaG9zdCA9IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3RuYW1lO1xuICAgICAgbGV0IGlzRXh0ZXJuYWwgPSB0cnVlO1xuICAgICAgaWYgKGFic29sdXRlVXJsLnN0YXJ0c1dpdGgoaG9zdCkpIHtcbiAgICAgICAgaXNFeHRlcm5hbCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzRXh0ZXJuYWw7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNJbnRlcm5hbFVybCA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiAhVXRpbHMuaXNFeHRlcm5hbFVybCh1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBwYXJhbSBmcm9tIGhhc2hcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0VXJsUGFyYW1ldGVyKG5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXVybCkge1xuICAgICAgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csICdcXFxcJCYnKTtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ1s/Jl0nICsgbmFtZSArICcoPShbXiYjXSopfCZ8I3wkKScpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XG4gICAgaWYgKCFyZXN1bHRzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFyZXN1bHRzWzJdKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGhhc2ggZnJvbSBhZGRyZXNzIGJhciBvciB1cmwgaWYgc2V0XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldEhhc2godXJsPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIFV0aWxzLmdldExvY2F0aW9uKHVybCkuaGFzaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgaGFzaCBmcm9tIGFkZHJlc3MgYmFyXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHVwZGF0ZUhhc2goaGFzaDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgaGFzaCBmcm9tIGFkZHJlc3MgYmFyXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlbW92ZUhhc2goKSB7XG4gICAgcmV0dXJuIGhpc3RvcnkucHVzaFN0YXRlKCcnLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldFZpZXdwb3J0RGltZW5zaW9ucygpICB7XG4gICAgY29uc3QgdyA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA6IDAsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICAgIGNvbnN0IGggPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogMCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuICAgIHJldHVybiB7XG4gICAgICBoLFxuICAgICAgdyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEhlYWRlciBuYW1lIHZhbHVlIHBhaXIgdG8gc2VuZCBvbiBlYWNoIHJlcXVlc3RcbiAgICovXG4gIHByb3RlY3RlZCBzdGF0aWMgX3JlcXVlc3RIZWFkZXJzRWFjaFJlcXVlc3Q6IHtuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9W10gPSBbe1xuICAgIG5hbWU6ICd4LWJhcmJhJyxcbiAgICB2YWx1ZTogJ3llcycsXG4gIH1dO1xuXG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJqcXVlcnlcIiAvPlxuLyohXG4gKiBqUXVlcnkgTW9iaWxlIEV2ZW50c1xuICogYnkgQmVuIE1ham9yXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmVubWFqb3IvalF1ZXJ5LVRvdWNoLUV2ZW50c1xuICpcbiAqIENvcHlyaWdodCAyMDExLTIwMTcsIEJlbiBNYWpvclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlOlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoJDogYW55KSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgICQuYXR0ckZuID0gJC5hdHRyRm4gfHwge307XG5cbiAgICBsZXQgdG91Y2hDYXBhYmxlID0gKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyksXG5cbiAgICAgICAgc2V0dGluZ3MgPSB7XG4gICAgICAgICAgICB0YXBfcGl4ZWxfcmFuZ2U6IDUsXG4gICAgICAgICAgICBzd2lwZV9oX3RocmVzaG9sZDogNTAsXG4gICAgICAgICAgICBzd2lwZV92X3RocmVzaG9sZDogNTAsXG4gICAgICAgICAgICB0YXBob2xkX3RocmVzaG9sZDogNzUwLFxuICAgICAgICAgICAgZG91YmxldGFwX2ludDogNTAwLFxuICAgICAgICAgICAgc2hha2VfdGhyZXNob2xkOiAxNSxcblxuICAgICAgICAgICAgdG91Y2hfY2FwYWJsZTogdG91Y2hDYXBhYmxlLFxuICAgICAgICAgICAgb3JpZW50YXRpb25fc3VwcG9ydDogKCdvcmllbnRhdGlvbicgaW4gd2luZG93ICYmICdvbm9yaWVudGF0aW9uY2hhbmdlJyBpbiB3aW5kb3cpLFxuXG4gICAgICAgICAgICBzdGFydGV2ZW50OiAodG91Y2hDYXBhYmxlKSA/ICd0b3VjaHN0YXJ0JyA6ICdtb3VzZWRvd24nLFxuICAgICAgICAgICAgZW5kZXZlbnQ6ICh0b3VjaENhcGFibGUpID8gJ3RvdWNoZW5kJyA6ICdtb3VzZXVwJyxcbiAgICAgICAgICAgIG1vdmVldmVudDogKHRvdWNoQ2FwYWJsZSkgPyAndG91Y2htb3ZlJyA6ICdtb3VzZW1vdmUnLFxuICAgICAgICAgICAgdGFwZXZlbnQ6ICh0b3VjaENhcGFibGUpID8gJ3RhcCcgOiAnY2xpY2snLFxuICAgICAgICAgICAgc2Nyb2xsZXZlbnQ6ICh0b3VjaENhcGFibGUpID8gJ3RvdWNobW92ZScgOiAnc2Nyb2xsJyxcblxuICAgICAgICAgICAgaG9sZF90aW1lcjogdW5kZWZpbmVkIGFzIG51bWJlciB8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRhcF90aW1lcjogdW5kZWZpbmVkIGFzIG51bWJlciB8IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcblxuICAgIC8vIERlY2xhcmUgdG91Y2ggbmFtZXNwYWNlOlxuICAgICQudG91Y2ggPSB7fTtcblxuICAgIC8vIENvbnZlbmllbmNlIGZ1bmN0aW9uczpcbiAgICAkLmlzVG91Y2hDYXBhYmxlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0dGluZ3MudG91Y2hfY2FwYWJsZTsgfTtcbiAgICAkLmdldFN0YXJ0RXZlbnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXR0aW5ncy5zdGFydGV2ZW50OyB9O1xuICAgICQuZ2V0RW5kRXZlbnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXR0aW5ncy5lbmRldmVudDsgfTtcbiAgICAkLmdldE1vdmVFdmVudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldHRpbmdzLm1vdmVldmVudDsgfTtcbiAgICAkLmdldFRhcEV2ZW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0dGluZ3MudGFwZXZlbnQ7IH07XG4gICAgJC5nZXRTY3JvbGxFdmVudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldHRpbmdzLnNjcm9sbGV2ZW50OyB9O1xuXG4gICAgLy8gU0VUVEVSUzpcbiAgICAvLyBTZXQgdGhlIFggdGhyZXNob2xkIG9mIHN3aXBlIGV2ZW50czpcbiAgICAkLnRvdWNoLnNldFN3aXBlVGhyZXNob2xkWCA9IGZ1bmN0aW9uICh0aHJlc2hvbGQ6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIHRocmVzaG9sZCAhPT0gJ251bWJlcicpIHsgdGhyb3cgbmV3IEVycm9yKCdUaHJlc2hvbGQgcGFyYW1ldGVyIG11c3QgYmUgYSB0eXBlIG9mIG51bWJlcicpOyB9XG4gICAgICAgIHNldHRpbmdzLnN3aXBlX2hfdGhyZXNob2xkID0gdGhyZXNob2xkO1xuICAgIH07XG5cbiAgICAvLyBTZXQgdGhlIFkgdGhyZXNob2xkIG9mIHN3aXBlIGV2ZW50czpcbiAgICAkLnRvdWNoLnNldFN3aXBlVGhyZXNob2xkWSA9IGZ1bmN0aW9uICh0aHJlc2hvbGQ6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIHRocmVzaG9sZCAhPT0gJ251bWJlcicpIHsgdGhyb3cgbmV3IEVycm9yKCdUaHJlc2hvbGQgcGFyYW1ldGVyIG11c3QgYmUgYSB0eXBlIG9mIG51bWJlcicpOyB9XG4gICAgICAgIHNldHRpbmdzLnN3aXBlX3ZfdGhyZXNob2xkID0gdGhyZXNob2xkO1xuICAgIH07XG5cbiAgICAvLyBTZXQgdGhlIGRvdWJsZSB0YXAgaW50ZXJ2YWw6XG4gICAgJC50b3VjaC5zZXREb3VibGVUYXBJbnQgPSBmdW5jdGlvbiAoaW50ZXJ2YWw6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIGludGVydmFsICE9PSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgRXJyb3IoJ0ludGVydmFsIHBhcmFtZXRlciBtdXN0IGJlIGEgdHlwZSBvZiBudW1iZXInKTsgfVxuICAgICAgICBzZXR0aW5ncy5kb3VibGV0YXBfaW50ID0gaW50ZXJ2YWw7XG4gICAgfTtcblxuICAgIC8vIFNldCB0aGUgdGFwaG9sZCB0aHJlc2hvbGQ6XG4gICAgJC50b3VjaC5zZXRUYXBIb2xkVGhyZXNob2xkID0gZnVuY3Rpb24gKHRocmVzaG9sZDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhyZXNob2xkICE9PSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgRXJyb3IoJ1RocmVzaG9sZCBwYXJhbWV0ZXIgbXVzdCBiZSBhIHR5cGUgb2YgbnVtYmVyJyk7IH1cbiAgICAgICAgc2V0dGluZ3MudGFwaG9sZF90aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gICAgfTtcblxuICAgIC8vIFNldCB0aGUgcGl4ZWwgcmFuZ2UgZm9yIHRhcGFzOlxuICAgICQudG91Y2guc2V0VGFwUmFuZ2UgPSBmdW5jdGlvbiAocmFuZ2U6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIHJhbmdlICE9PSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgRXJyb3IoJ1JhbmdlciBwYXJhbWV0ZXIgbXVzdCBiZSBhIHR5cGUgb2YgbnVtYmVyJyk7IH1cbiAgICAgICAgc2V0dGluZ3MudGFwX3BpeGVsX3JhbmdlID0gcmFuZ2U7XG4gICAgfTtcblxuICAgIC8vIEFkZCBFdmVudCBzaG9ydGN1dHM6XG4gICAgJC5lYWNoKFsndGFwc3RhcnQnLCAndGFwZW5kJywgJ3RhcG1vdmUnLCAndGFwJywgJ3NpbmdsZXRhcCcsICdkb3VibGV0YXAnLCAndGFwaG9sZCcsICdzd2lwZScsICdzd2lwZXVwJywgJ3N3aXBlcmlnaHQnLCAnc3dpcGVkb3duJywgJ3N3aXBlbGVmdCcsICdzd2lwZWVuZCcsICdzY3JvbGxzdGFydCcsICdzY3JvbGxlbmQnLCAnb3JpZW50YXRpb25jaGFuZ2UnLCAndGFwMicsICd0YXBob2xkMiddLCBmdW5jdGlvbiAoaTogbnVtYmVyLCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgJC5mbltuYW1lXSA9IGZ1bmN0aW9uIChmbjogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gZm4gPyB0aGlzLm9uKG5hbWUsIGZuKSA6IHRoaXMudHJpZ2dlcihuYW1lKTtcbiAgICAgICAgfTtcblxuICAgICAgICAkLmF0dHJGbltuYW1lXSA9IHRydWU7XG4gICAgfSk7XG5cbiAgICAvLyB0YXBzdGFydCBFdmVudDpcbiAgICAkLmV2ZW50LnNwZWNpYWwudGFwc3RhcnQgPSB7XG4gICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHZhciB0aGlzT2JqZWN0ID0gdGhpcyxcbiAgICAgICAgICAgICAgICAkdGhpcyA9ICQodGhpc09iamVjdCk7XG5cbiAgICAgICAgICAgICR0aGlzLm9uKHNldHRpbmdzLnN0YXJ0ZXZlbnQsIGZ1bmN0aW9uIHRhcFN0YXJ0RnVuYyhlOiBhbnkpIHtcblxuICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoJ2NhbGxlZScsIHRhcFN0YXJ0RnVuYyk7XG4gICAgICAgICAgICAgICAgaWYgKGUud2hpY2ggJiYgZS53aGljaCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdFdmVudCA9IGUub3JpZ2luYWxFdmVudCxcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4JzogKChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IG9yaWdFdmVudC50b3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3knOiAoc2V0dGluZ3MudG91Y2hfY2FwYWJsZSkgPyBvcmlnRXZlbnQudG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnb2Zmc2V0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4JzogKHNldHRpbmdzLnRvdWNoX2NhcGFibGUpID8gTWF0aC5yb3VuZChvcmlnRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSAoJHRoaXMub2Zmc2V0KCkgPyAkdGhpcy5vZmZzZXQoKS5sZWZ0IDogMCkpIDogTWF0aC5yb3VuZChlLnBhZ2VYIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkubGVmdCA6IDApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneSc6IChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IE1hdGgucm91bmQob3JpZ0V2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkudG9wIDogMCkpIDogTWF0aC5yb3VuZChlLnBhZ2VZIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkudG9wIDogMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpbWUnOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RhcmdldCc6IGUudGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0cmlnZ2VyQ3VzdG9tRXZlbnQodGhpc09iamVjdCwgJ3RhcHN0YXJ0JywgZSwgdG91Y2hEYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5vZmYoc2V0dGluZ3Muc3RhcnRldmVudCwgJCh0aGlzKS5kYXRhLmNhbGxlZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gdGFwbW92ZSBFdmVudDpcbiAgICAkLmV2ZW50LnNwZWNpYWwudGFwbW92ZSA9IHtcbiAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aGlzT2JqZWN0ID0gdGhpcyxcbiAgICAgICAgICAgICAgICAkdGhpcyA9ICQodGhpc09iamVjdCk7XG5cbiAgICAgICAgICAgICR0aGlzLm9uKHNldHRpbmdzLm1vdmVldmVudCwgZnVuY3Rpb24gdGFwTW92ZUZ1bmMoZTogYW55KSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuZGF0YSgnY2FsbGVlJywgdGFwTW92ZUZ1bmMpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdFdmVudCA9IGUub3JpZ2luYWxFdmVudCxcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4JzogKChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IG9yaWdFdmVudC50b3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3knOiAoc2V0dGluZ3MudG91Y2hfY2FwYWJsZSkgPyBvcmlnRXZlbnQudG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnb2Zmc2V0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4JzogKHNldHRpbmdzLnRvdWNoX2NhcGFibGUpID8gTWF0aC5yb3VuZChvcmlnRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSAoJHRoaXMub2Zmc2V0KCkgPyAkdGhpcy5vZmZzZXQoKS5sZWZ0IDogMCkpIDogTWF0aC5yb3VuZChlLnBhZ2VYIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkubGVmdCA6IDApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneSc6IChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IE1hdGgucm91bmQob3JpZ0V2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkudG9wIDogMCkpIDogTWF0aC5yb3VuZChlLnBhZ2VZIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkudG9wIDogMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpbWUnOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RhcmdldCc6IGUudGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0cmlnZ2VyQ3VzdG9tRXZlbnQodGhpc09iamVjdCwgJ3RhcG1vdmUnLCBlLCB0b3VjaERhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5vZmYoc2V0dGluZ3MubW92ZWV2ZW50LCAkKHRoaXMpLmRhdGEuY2FsbGVlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB0YXBlbmQgRXZlbnQ6XG4gICAgJC5ldmVudC5zcGVjaWFsLnRhcGVuZCA9IHtcbiAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aGlzT2JqZWN0ID0gdGhpcyxcbiAgICAgICAgICAgICAgICAkdGhpcyA9ICQodGhpc09iamVjdCk7XG5cbiAgICAgICAgICAgICR0aGlzLm9uKHNldHRpbmdzLmVuZGV2ZW50LCBmdW5jdGlvbiB0YXBFbmRGdW5jKGU6IGFueSkge1xuICAgICAgICAgICAgICAgIC8vIFRvdWNoIGV2ZW50IGRhdGE6XG4gICAgICAgICAgICAgICAgJHRoaXMuZGF0YSgnY2FsbGVlJywgdGFwRW5kRnVuYyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgb3JpZ0V2ZW50ID0gZS5vcmlnaW5hbEV2ZW50O1xuICAgICAgICAgICAgICAgIHZhciB0b3VjaERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd4JzogKHNldHRpbmdzLnRvdWNoX2NhcGFibGUpID8gb3JpZ0V2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd5JzogKHNldHRpbmdzLnRvdWNoX2NhcGFibGUpID8gb3JpZ0V2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnb2Zmc2V0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3gnOiAoc2V0dGluZ3MudG91Y2hfY2FwYWJsZSkgPyBNYXRoLnJvdW5kKG9yaWdFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtICgkdGhpcy5vZmZzZXQoKSA/ICR0aGlzLm9mZnNldCgpLmxlZnQgOiAwKSkgOiBNYXRoLnJvdW5kKGUucGFnZVggLSAoJHRoaXMub2Zmc2V0KCkgPyAkdGhpcy5vZmZzZXQoKS5sZWZ0IDogMCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3knOiAoc2V0dGluZ3MudG91Y2hfY2FwYWJsZSkgPyBNYXRoLnJvdW5kKG9yaWdFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtICgkdGhpcy5vZmZzZXQoKSA/ICR0aGlzLm9mZnNldCgpLnRvcCA6IDApKSA6IE1hdGgucm91bmQoZS5wYWdlWSAtICgkdGhpcy5vZmZzZXQoKSA/ICR0aGlzLm9mZnNldCgpLnRvcCA6IDApKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAndGltZSc6IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgICAgICd0YXJnZXQnOiBlLnRhcmdldFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdHJpZ2dlckN1c3RvbUV2ZW50KHRoaXNPYmplY3QsICd0YXBlbmQnLCBlLCB0b3VjaERhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5vZmYoc2V0dGluZ3MuZW5kZXZlbnQsICQodGhpcykuZGF0YS5jYWxsZWUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHRhcGhvbGQgRXZlbnQ6XG4gICAgJC5ldmVudC5zcGVjaWFsLnRhcGhvbGQgPSB7XG4gICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGhpc09iamVjdCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgJHRoaXMgPSAkKHRoaXNPYmplY3QpLFxuICAgICAgICAgICAgICAgIG9yaWdUYXJnZXQ6IGFueSxcbiAgICAgICAgICAgICAgICBzdGFydF9wb3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVuZF94ID0gMCxcbiAgICAgICAgICAgICAgICBlbmRfeSA9IDA7XG5cbiAgICAgICAgICAgICR0aGlzLm9uKHNldHRpbmdzLnN0YXJ0ZXZlbnQsIGZ1bmN0aW9uIHRhcEhvbGRGdW5jMShlOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS53aGljaCAmJiBlLndoaWNoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5kYXRhKCd0YXBoZWxkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBvcmlnVGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdFdmVudCA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0X3RpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICBzdGFydF9wb3MueCA9IChlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlcykgPyBlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0X3Bvcy55ID0gKGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzKSA/IGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcblxuICAgICAgICAgICAgICAgICAgICBlbmRfeCA9IHN0YXJ0X3Bvcy54O1xuICAgICAgICAgICAgICAgICAgICBlbmRfeSA9IHN0YXJ0X3Bvcy55O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZWxlbWVudCdzIHRocmVzaG9sZDpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZV90aHJlc2hvbGQgPSAoJHRoaXMucGFyZW50KCkuZGF0YSgndGhyZXNob2xkJykpID8gJHRoaXMucGFyZW50KCkuZGF0YSgndGhyZXNob2xkJykgOiAkdGhpcy5kYXRhKCd0aHJlc2hvbGQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZCA9ICh0eXBlb2YgZWxlX3RocmVzaG9sZCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlX3RocmVzaG9sZCAhPT0gZmFsc2UgJiYgcGFyc2VJbnQoZWxlX3RocmVzaG9sZCkpID8gcGFyc2VJbnQoZWxlX3RocmVzaG9sZCkgOiBzZXR0aW5ncy50YXBob2xkX3RocmVzaG9sZDtcblxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5ob2xkX3RpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlmZl94ID0gKHN0YXJ0X3Bvcy54IC0gZW5kX3gpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmZfeSA9IChzdGFydF9wb3MueSAtIGVuZF95KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09IG9yaWdUYXJnZXQgJiYgKChzdGFydF9wb3MueCA9PSBlbmRfeCAmJiBzdGFydF9wb3MueSA9PSBlbmRfeSkgfHwgKGRpZmZfeCA+PSAtKHNldHRpbmdzLnRhcF9waXhlbF9yYW5nZSkgJiYgZGlmZl94IDw9IHNldHRpbmdzLnRhcF9waXhlbF9yYW5nZSAmJiBkaWZmX3kgPj0gLShzZXR0aW5ncy50YXBfcGl4ZWxfcmFuZ2UpICYmIGRpZmZfeSA8PSBzZXR0aW5ncy50YXBfcGl4ZWxfcmFuZ2UpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoJ3RhcGhlbGQnLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmRfdGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHVyYXRpb24gPSBlbmRfdGltZSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZXMgPSAoZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXMpID8gZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXMgOiBbZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoRGF0YSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b3VjaCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAneCc6IChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IG9yaWdFdmVudC5jaGFuZ2VkVG91Y2hlc1tpXS5wYWdlWCA6IGUucGFnZVgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3knOiAoc2V0dGluZ3MudG91Y2hfY2FwYWJsZSkgPyBvcmlnRXZlbnQuY2hhbmdlZFRvdWNoZXNbaV0ucGFnZVkgOiBlLnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29mZnNldCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAneCc6IChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IE1hdGgucm91bmQob3JpZ0V2ZW50LmNoYW5nZWRUb3VjaGVzW2ldLnBhZ2VYIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkubGVmdCA6IDApKSA6IE1hdGgucm91bmQoZS5wYWdlWCAtICgkdGhpcy5vZmZzZXQoKSA/ICR0aGlzLm9mZnNldCgpLmxlZnQgOiAwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3knOiAoc2V0dGluZ3MudG91Y2hfY2FwYWJsZSkgPyBNYXRoLnJvdW5kKG9yaWdFdmVudC5jaGFuZ2VkVG91Y2hlc1tpXS5wYWdlWSAtICgkdGhpcy5vZmZzZXQoKSA/ICR0aGlzLm9mZnNldCgpLnRvcCA6IDApKSA6IE1hdGgucm91bmQoZS5wYWdlWSAtICgkdGhpcy5vZmZzZXQoKSA/ICR0aGlzLm9mZnNldCgpLnRvcCA6IDApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aW1lJzogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YXJnZXQnOiBlLnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkdXJhdGlvbic6IGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hEYXRhLnB1c2godG91Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldnRfbmFtZSA9ICh0b3VjaGVzLmxlbmd0aCA9PSAyKSA/ICd0YXBob2xkMicgOiAndGFwaG9sZCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5kYXRhKCdjYWxsZWUxJywgdGFwSG9sZEZ1bmMxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJDdXN0b21FdmVudCh0aGlzT2JqZWN0LCBldnRfbmFtZSwgZSwgdG91Y2hEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgdGhyZXNob2xkKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5vbihzZXR0aW5ncy5lbmRldmVudCwgZnVuY3Rpb24gdGFwSG9sZEZ1bmMyKCkge1xuICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoJ2NhbGxlZTInLCB0YXBIb2xkRnVuYzIpO1xuICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoJ3RhcGhlbGQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChzZXR0aW5ncy5ob2xkX3RpbWVyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKHNldHRpbmdzLm1vdmVldmVudCwgZnVuY3Rpb24gdGFwSG9sZEZ1bmMzKGU6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5kYXRhKCdjYWxsZWUzJywgdGFwSG9sZEZ1bmMzKTtcblxuICAgICAgICAgICAgICAgICAgICBlbmRfeCA9IChlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlcykgPyBlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIGVuZF95ID0gKGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzKSA/IGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykub2ZmKHNldHRpbmdzLnN0YXJ0ZXZlbnQsICQodGhpcykuZGF0YS5jYWxsZWUxKS5vZmYoc2V0dGluZ3MuZW5kZXZlbnQsICQodGhpcykuZGF0YS5jYWxsZWUyKS5vZmYoc2V0dGluZ3MubW92ZWV2ZW50LCAkKHRoaXMpLmRhdGEuY2FsbGVlMyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZG91YmxldGFwIEV2ZW50OlxuICAgICQuZXZlbnQuc3BlY2lhbC5kb3VibGV0YXAgPSB7XG4gICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGhpc09iamVjdCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgJHRoaXMgPSAkKHRoaXNPYmplY3QpLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogbnVtYmVyLFxuICAgICAgICAgICAgICAgIGZpcnN0VGFwOiBhbnkgPSBudWxsLFxuICAgICAgICAgICAgICAgIG9yaWdFdmVudDogYW55LFxuICAgICAgICAgICAgICAgIGNvb2xpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgJHRoaXMub24oc2V0dGluZ3Muc3RhcnRldmVudCwgZnVuY3Rpb24gZG91YmxlVGFwRnVuYzEoZTogYW55KSB7XG4gICAgICAgICAgICAgICAgaWYgKGUud2hpY2ggJiYgZS53aGljaCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHRoaXMuZGF0YSgnZG91YmxldGFwcGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoJ2NhbGxlZTEnLCBkb3VibGVUYXBGdW5jMSk7XG5cbiAgICAgICAgICAgICAgICBvcmlnRXZlbnQgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKCFmaXJzdFRhcCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdFRhcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneCc6IChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IG9yaWdFdmVudC50b3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneSc6IChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IG9yaWdFdmVudC50b3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdvZmZzZXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3gnOiAoc2V0dGluZ3MudG91Y2hfY2FwYWJsZSkgPyBNYXRoLnJvdW5kKG9yaWdFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtICgkdGhpcy5vZmZzZXQoKSA/ICR0aGlzLm9mZnNldCgpLmxlZnQgOiAwKSkgOiBNYXRoLnJvdW5kKGUucGFnZVggLSAoJHRoaXMub2Zmc2V0KCkgPyAkdGhpcy5vZmZzZXQoKS5sZWZ0IDogMCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5JzogKHNldHRpbmdzLnRvdWNoX2NhcGFibGUpID8gTWF0aC5yb3VuZChvcmlnRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSAoJHRoaXMub2Zmc2V0KCkgPyAkdGhpcy5vZmZzZXQoKS50b3AgOiAwKSkgOiBNYXRoLnJvdW5kKGUucGFnZVkgLSAoJHRoaXMub2Zmc2V0KCkgPyAkdGhpcy5vZmZzZXQoKS50b3AgOiAwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAndGltZSc6IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAndGFyZ2V0JzogZS50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZWxlbWVudCc6IGUub3JpZ2luYWxFdmVudC5zcmNFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2luZGV4JzogJChlLnRhcmdldCkuaW5kZXgoKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSkub24oc2V0dGluZ3MuZW5kZXZlbnQsIGZ1bmN0aW9uIGRvdWJsZVRhcEZ1bmMyKGU6IGFueSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3RUb3VjaCA9ICR0aGlzLmRhdGEoJ2xhc3RUb3VjaCcpIHx8IG5vdyArIDE7XG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gbm93IC0gbGFzdFRvdWNoO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5kYXRhKCdjYWxsZWUyJywgZG91YmxlVGFwRnVuYzIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhIDwgc2V0dGluZ3MuZG91YmxldGFwX2ludCAmJiAoJChlLnRhcmdldCkuaW5kZXgoKSA9PSBmaXJzdFRhcC5pbmRleCkgJiYgZGVsdGEgPiAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZGF0YSgnZG91YmxldGFwcGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoc2V0dGluZ3MudGFwX3RpbWVyKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBOb3cgZ2V0IHRoZSBjdXJyZW50IGV2ZW50OlxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdFRhcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneCc6IChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3knOiAoc2V0dGluZ3MudG91Y2hfY2FwYWJsZSkgPyBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ29mZnNldCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneCc6IChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IE1hdGgucm91bmQob3JpZ0V2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkubGVmdCA6IDApKSA6IE1hdGgucm91bmQoZS5wYWdlWCAtICgkdGhpcy5vZmZzZXQoKSA/ICR0aGlzLm9mZnNldCgpLmxlZnQgOiAwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3knOiAoc2V0dGluZ3MudG91Y2hfY2FwYWJsZSkgPyBNYXRoLnJvdW5kKG9yaWdFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtICgkdGhpcy5vZmZzZXQoKSA/ICR0aGlzLm9mZnNldCgpLnRvcCA6IDApKSA6IE1hdGgucm91bmQoZS5wYWdlWSAtICgkdGhpcy5vZmZzZXQoKSA/ICR0aGlzLm9mZnNldCgpLnRvcCA6IDApKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aW1lJzogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YXJnZXQnOiBlLnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JzogZS5vcmlnaW5hbEV2ZW50LnNyY0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaW5kZXgnOiAkKGUudGFyZ2V0KS5pbmRleCgpXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvdWNoRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdmaXJzdFRhcCc6IGZpcnN0VGFwLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NlY29uZFRhcCc6IGxhc3RUYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJ2YWwnOiBsYXN0VGFwLnRpbWUgLSBmaXJzdFRhcC50aW1lXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb29saW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQ3VzdG9tRXZlbnQodGhpc09iamVjdCwgJ2RvdWJsZXRhcCcsIGUsIHRvdWNoRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFRhcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb29saW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5kYXRhKCdsYXN0VG91Y2gnLCBub3cpO1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFRhcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0sIHNldHRpbmdzLmRvdWJsZXRhcF9pbnQsIFtlXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoJ2xhc3RUb3VjaCcsIG5vdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLm9mZihzZXR0aW5ncy5zdGFydGV2ZW50LCAkKHRoaXMpLmRhdGEuY2FsbGVlMSkub2ZmKHNldHRpbmdzLmVuZGV2ZW50LCAkKHRoaXMpLmRhdGEuY2FsbGVlMik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gc2luZ2xldGFwIEV2ZW50OlxuICAgIC8vIFRoaXMgaXMgdXNlZCBpbiBjb25qdWN0aW9uIHdpdGggZG91YmxldGFwIHdoZW4gYm90aCBldmVudHMgYXJlIG5lZWRlZCBvbiB0aGUgc2FtZSBlbGVtZW50XG4gICAgJC5ldmVudC5zcGVjaWFsLnNpbmdsZXRhcCA9IHtcbiAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aGlzT2JqZWN0ID0gdGhpcyxcbiAgICAgICAgICAgICAgICAkdGhpcyA9ICQodGhpc09iamVjdCksXG4gICAgICAgICAgICAgICAgb3JpZ1RhcmdldDogYW55ID0gbnVsbCxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IGFueSA9IG51bGwsXG4gICAgICAgICAgICAgICAgc3RhcnRfcG9zID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJHRoaXMub24oc2V0dGluZ3Muc3RhcnRldmVudCwgZnVuY3Rpb24gc2luZ2xlVGFwRnVuYzEoZTogYW55KSB7XG4gICAgICAgICAgICAgICAgaWYgKGUud2hpY2ggJiYgZS53aGljaCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ1RhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5kYXRhKCdjYWxsZWUxJywgc2luZ2xlVGFwRnVuYzEpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgc3RhcnQgeCBhbmQgeSBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRfcG9zLnggPSAoZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXMpID8gZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICBzdGFydF9wb3MueSA9IChlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlcykgPyBlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkub24oc2V0dGluZ3MuZW5kZXZlbnQsIGZ1bmN0aW9uIHNpbmdsZVRhcEZ1bmMyKGU6IGFueSkge1xuICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoJ2NhbGxlZTInLCBzaW5nbGVUYXBGdW5jMik7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBvcmlnVGFyZ2V0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBlbmQgcG9pbnQ6XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmRfcG9zX3ggPSAoZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzKSA/IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVgsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRfcG9zX3kgPSAoZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzKSA/IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBpZiBpdCB3YXMgYSB0YXBob2xkOlxuXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLnRhcF90aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpZmZfeCA9IChzdGFydF9wb3MueCAtIGVuZF9wb3NfeCksIGRpZmZfeSA9IChzdGFydF9wb3MueSAtIGVuZF9wb3NfeSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghJHRoaXMuZGF0YSgnZG91YmxldGFwcGVkJykgJiYgISR0aGlzLmRhdGEoJ3RhcGhlbGQnKSAmJiAoKChzdGFydF9wb3MueCA9PSBlbmRfcG9zX3gpICYmIChzdGFydF9wb3MueSA9PSBlbmRfcG9zX3kpKSB8fCAoZGlmZl94ID49IC0oc2V0dGluZ3MudGFwX3BpeGVsX3JhbmdlKSAmJiBkaWZmX3ggPD0gc2V0dGluZ3MudGFwX3BpeGVsX3JhbmdlICYmIGRpZmZfeSA+PSAtKHNldHRpbmdzLnRhcF9waXhlbF9yYW5nZSkgJiYgZGlmZl95IDw9IHNldHRpbmdzLnRhcF9waXhlbF9yYW5nZSkpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ0V2ZW50ID0gZS5vcmlnaW5hbEV2ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b3VjaERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4JzogKHNldHRpbmdzLnRvdWNoX2NhcGFibGUpID8gb3JpZ0V2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5JzogKHNldHRpbmdzLnRvdWNoX2NhcGFibGUpID8gb3JpZ0V2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb2Zmc2V0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3gnOiAoc2V0dGluZ3MudG91Y2hfY2FwYWJsZSkgPyBNYXRoLnJvdW5kKG9yaWdFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtICgkdGhpcy5vZmZzZXQoKSA/ICR0aGlzLm9mZnNldCgpLmxlZnQgOiAwKSkgOiBNYXRoLnJvdW5kKGUucGFnZVggLSAoJHRoaXMub2Zmc2V0KCkgPyAkdGhpcy5vZmZzZXQoKS5sZWZ0IDogMCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3knOiAoc2V0dGluZ3MudG91Y2hfY2FwYWJsZSkgPyBNYXRoLnJvdW5kKG9yaWdFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtICgkdGhpcy5vZmZzZXQoKSA/ICR0aGlzLm9mZnNldCgpLnRvcCA6IDApKSA6IE1hdGgucm91bmQoZS5wYWdlWSAtICgkdGhpcy5vZmZzZXQoKSA/ICR0aGlzLm9mZnNldCgpLnRvcCA6IDApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGltZSc6IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YXJnZXQnOiBlLnRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXYXMgaXQgYSB0YXBob2xkP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodG91Y2hEYXRhLnRpbWUgLSBzdGFydFRpbWUpIDwgc2V0dGluZ3MudGFwaG9sZF90aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckN1c3RvbUV2ZW50KHRoaXNPYmplY3QsICdzaW5nbGV0YXAnLCBlLCB0b3VjaERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgc2V0dGluZ3MuZG91YmxldGFwX2ludCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLm9mZihzZXR0aW5ncy5zdGFydGV2ZW50LCAkKHRoaXMpLmRhdGEuY2FsbGVlMSkub2ZmKHNldHRpbmdzLmVuZGV2ZW50LCAkKHRoaXMpLmRhdGEuY2FsbGVlMik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gdGFwIEV2ZW50OlxuICAgICQuZXZlbnQuc3BlY2lhbC50YXAgPSB7XG4gICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGhpc09iamVjdCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgJHRoaXMgPSAkKHRoaXNPYmplY3QpLFxuICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBvcmlnVGFyZ2V0OiBhbnkgPSBudWxsLFxuICAgICAgICAgICAgICAgIHN0YXJ0X3RpbWU6IGFueSxcbiAgICAgICAgICAgICAgICBzdGFydF9wb3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvdWNoZXM6IGFueTtcblxuICAgICAgICAgICAgJHRoaXMub24oc2V0dGluZ3Muc3RhcnRldmVudCwgZnVuY3Rpb24gdGFwRnVuYzEoZTogYW55KSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuZGF0YSgnY2FsbGVlMScsIHRhcEZ1bmMxKTtcblxuICAgICAgICAgICAgICAgIGlmIChlLndoaWNoICYmIGUud2hpY2ggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0X3Bvcy54ID0gKGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzKSA/IGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRfcG9zLnkgPSAoZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXMpID8gZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgICAgICAgICAgICAgICAgICBzdGFydF90aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ1RhcmdldCA9IGUudGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoZXMgPSAoZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXMpID8gZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXMgOiBbZV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLm9uKHNldHRpbmdzLmVuZGV2ZW50LCBmdW5jdGlvbiB0YXBGdW5jMihlOiBhbnkpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5kYXRhKCdjYWxsZWUyJywgdGFwRnVuYzIpO1xuXG4gICAgICAgICAgICAgICAgLy8gT25seSB0cmlnZ2VyIGlmIHRoZXkndmUgc3RhcnRlZCwgYW5kIHRoZSB0YXJnZXQgbWF0Y2hlczpcbiAgICAgICAgICAgICAgICB2YXIgZW5kX3ggPSAoZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXMpID8gZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgZW5kX3kgPSAoZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXMpID8gZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWSxcbiAgICAgICAgICAgICAgICAgICAgZGlmZl94ID0gKHN0YXJ0X3Bvcy54IC0gZW5kX3gpLFxuICAgICAgICAgICAgICAgICAgICBkaWZmX3kgPSAoc3RhcnRfcG9zLnkgLSBlbmRfeSk7XG5cbiAgICAgICAgICAgICAgICBpZiAob3JpZ1RhcmdldCA9PSBlLnRhcmdldCAmJiBzdGFydGVkICYmICgoRGF0ZS5ub3coKSAtIHN0YXJ0X3RpbWUpIDwgc2V0dGluZ3MudGFwaG9sZF90aHJlc2hvbGQpICYmICgoc3RhcnRfcG9zLnggPT0gZW5kX3ggJiYgc3RhcnRfcG9zLnkgPT0gZW5kX3kpIHx8IChkaWZmX3ggPj0gLShzZXR0aW5ncy50YXBfcGl4ZWxfcmFuZ2UpICYmIGRpZmZfeCA8PSBzZXR0aW5ncy50YXBfcGl4ZWxfcmFuZ2UgJiYgZGlmZl95ID49IC0oc2V0dGluZ3MudGFwX3BpeGVsX3JhbmdlKSAmJiBkaWZmX3kgPD0gc2V0dGluZ3MudGFwX3BpeGVsX3JhbmdlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdFdmVudCA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvdWNoRGF0YSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvdWNoID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3gnOiAoc2V0dGluZ3MudG91Y2hfY2FwYWJsZSkgPyBvcmlnRXZlbnQuY2hhbmdlZFRvdWNoZXNbaV0ucGFnZVggOiBlLnBhZ2VYLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAneSc6IChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IG9yaWdFdmVudC5jaGFuZ2VkVG91Y2hlc1tpXS5wYWdlWSA6IGUucGFnZVlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvZmZzZXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4JzogKHNldHRpbmdzLnRvdWNoX2NhcGFibGUpID8gTWF0aC5yb3VuZChvcmlnRXZlbnQuY2hhbmdlZFRvdWNoZXNbaV0ucGFnZVggLSAoJHRoaXMub2Zmc2V0KCkgPyAkdGhpcy5vZmZzZXQoKS5sZWZ0IDogMCkpIDogTWF0aC5yb3VuZChlLnBhZ2VYIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkubGVmdCA6IDApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3knOiAoc2V0dGluZ3MudG91Y2hfY2FwYWJsZSkgPyBNYXRoLnJvdW5kKG9yaWdFdmVudC5jaGFuZ2VkVG91Y2hlc1tpXS5wYWdlWSAtICgkdGhpcy5vZmZzZXQoKSA/ICR0aGlzLm9mZnNldCgpLnRvcCA6IDApKSA6IE1hdGgucm91bmQoZS5wYWdlWSAtICgkdGhpcy5vZmZzZXQoKSA/ICR0aGlzLm9mZnNldCgpLnRvcCA6IDApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpbWUnOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YXJnZXQnOiBlLnRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hEYXRhLnB1c2godG91Y2gpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2dF9uYW1lID0gKHRvdWNoZXMubGVuZ3RoID09IDIpID8gJ3RhcDInIDogJ3RhcCc7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckN1c3RvbUV2ZW50KHRoaXNPYmplY3QsIGV2dF9uYW1lLCBlLCB0b3VjaERhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5vZmYoc2V0dGluZ3Muc3RhcnRldmVudCwgJCh0aGlzKS5kYXRhLmNhbGxlZTEpLm9mZihzZXR0aW5ncy5lbmRldmVudCwgJCh0aGlzKS5kYXRhLmNhbGxlZTIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHN3aXBlIEV2ZW50IChhbHNvIGhhbmRsZXMgc3dpcGV1cCwgc3dpcGVyaWdodCwgc3dpcGVkb3duIGFuZCBzd2lwZWxlZnQpOlxuICAgICQuZXZlbnQuc3BlY2lhbC5zd2lwZSA9IHtcbiAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aGlzT2JqZWN0ID0gdGhpcyxcbiAgICAgICAgICAgICAgICAkdGhpcyA9ICQodGhpc09iamVjdCksXG4gICAgICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhhc1N3aXBlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsQ29vcmQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZpbmFsQ29vcmQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0YXJ0RXZudDogYW55O1xuXG4gICAgICAgICAgICAvLyBTY3JlZW4gdG91Y2hlZCwgc3RvcmUgdGhlIG9yaWdpbmFsIGNvb3JkaW5hdGVcblxuICAgICAgICAgICAgZnVuY3Rpb24gdG91Y2hTdGFydChlOiBhbnkpIHtcbiAgICAgICAgICAgICAgICAkdGhpcyA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAkdGhpcy5kYXRhKCdjYWxsZWUxJywgdG91Y2hTdGFydCk7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxDb29yZC54ID0gKGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzKSA/IGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbENvb3JkLnkgPSAoZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXMpID8gZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgICAgICAgICAgICAgIGZpbmFsQ29vcmQueCA9IG9yaWdpbmFsQ29vcmQueDtcbiAgICAgICAgICAgICAgICBmaW5hbENvb3JkLnkgPSBvcmlnaW5hbENvb3JkLnk7XG4gICAgICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWdFdmVudCA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgICAgICAgICAgICAvLyBSZWFkIGV2ZW50IGRhdGEgaW50byBvdXIgc3RhcnRFdnQ6XG4gICAgICAgICAgICAgICAgc3RhcnRFdm50ID0ge1xuICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAneCc6IChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IG9yaWdFdmVudC50b3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd5JzogKHNldHRpbmdzLnRvdWNoX2NhcGFibGUpID8gb3JpZ0V2ZW50LnRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICdvZmZzZXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAneCc6IChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IE1hdGgucm91bmQob3JpZ0V2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkubGVmdCA6IDApKSA6IE1hdGgucm91bmQoZS5wYWdlWCAtICgkdGhpcy5vZmZzZXQoKSA/ICR0aGlzLm9mZnNldCgpLmxlZnQgOiAwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAneSc6IChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IE1hdGgucm91bmQob3JpZ0V2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkudG9wIDogMCkpIDogTWF0aC5yb3VuZChlLnBhZ2VZIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkudG9wIDogMCkpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICd0aW1lJzogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgICAgICAgJ3RhcmdldCc6IGUudGFyZ2V0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RvcmUgY29vcmRpbmF0ZXMgYXMgZmluZ2VyIGlzIHN3aXBpbmdcblxuICAgICAgICAgICAgZnVuY3Rpb24gdG91Y2hNb3ZlKGU6IGFueSkge1xuICAgICAgICAgICAgICAgICR0aGlzID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoJ2NhbGxlZTInLCB0b3VjaE1vdmUpO1xuICAgICAgICAgICAgICAgIGZpbmFsQ29vcmQueCA9IChlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlcykgPyBlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgICAgICAgICAgICAgZmluYWxDb29yZC55ID0gKGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzKSA/IGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcblxuICAgICAgICAgICAgICAgIHZhciBzd2lwZWRpcjtcblxuICAgICAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgaWYgdGhlIGVsZW1lbnQgdG8gd2hpY2ggdGhlIGV2ZW50IHdhcyBib3VuZCBjb250YWlucyBhIGRhdGEteHRocmVzaG9sZCB8IGRhdGEtdnRocmVzaG9sZDpcbiAgICAgICAgICAgICAgICB2YXIgZWxlX3hfdGhyZXNob2xkID0gKCR0aGlzLnBhcmVudCgpLmRhdGEoJ3h0aHJlc2hvbGQnKSkgPyAkdGhpcy5wYXJlbnQoKS5kYXRhKCd4dGhyZXNob2xkJykgOiAkdGhpcy5kYXRhKCd4dGhyZXNob2xkJyksXG4gICAgICAgICAgICAgICAgICAgIGVsZV95X3RocmVzaG9sZCA9ICgkdGhpcy5wYXJlbnQoKS5kYXRhKCd5dGhyZXNob2xkJykpID8gJHRoaXMucGFyZW50KCkuZGF0YSgneXRocmVzaG9sZCcpIDogJHRoaXMuZGF0YSgneXRocmVzaG9sZCcpLFxuICAgICAgICAgICAgICAgICAgICBoX3RocmVzaG9sZCA9ICh0eXBlb2YgZWxlX3hfdGhyZXNob2xkICE9PSAndW5kZWZpbmVkJyAmJiBlbGVfeF90aHJlc2hvbGQgIT09IGZhbHNlICYmIHBhcnNlSW50KGVsZV94X3RocmVzaG9sZCkpID8gcGFyc2VJbnQoZWxlX3hfdGhyZXNob2xkKSA6IHNldHRpbmdzLnN3aXBlX2hfdGhyZXNob2xkLFxuICAgICAgICAgICAgICAgICAgICB2X3RocmVzaG9sZCA9ICh0eXBlb2YgZWxlX3lfdGhyZXNob2xkICE9PSAndW5kZWZpbmVkJyAmJiBlbGVfeV90aHJlc2hvbGQgIT09IGZhbHNlICYmIHBhcnNlSW50KGVsZV95X3RocmVzaG9sZCkpID8gcGFyc2VJbnQoZWxlX3lfdGhyZXNob2xkKSA6IHNldHRpbmdzLnN3aXBlX3ZfdGhyZXNob2xkO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsQ29vcmQueSA+IGZpbmFsQ29vcmQueSAmJiAob3JpZ2luYWxDb29yZC55IC0gZmluYWxDb29yZC55ID4gdl90aHJlc2hvbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlZGlyID0gJ3N3aXBldXAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxDb29yZC54IDwgZmluYWxDb29yZC54ICYmIChmaW5hbENvb3JkLnggLSBvcmlnaW5hbENvb3JkLnggPiBoX3RocmVzaG9sZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVkaXIgPSAnc3dpcGVyaWdodCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbENvb3JkLnkgPCBmaW5hbENvb3JkLnkgJiYgKGZpbmFsQ29vcmQueSAtIG9yaWdpbmFsQ29vcmQueSA+IHZfdGhyZXNob2xkKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZWRpciA9ICdzd2lwZWRvd24nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxDb29yZC54ID4gZmluYWxDb29yZC54ICYmIChvcmlnaW5hbENvb3JkLnggLSBmaW5hbENvb3JkLnggPiBoX3RocmVzaG9sZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVkaXIgPSAnc3dpcGVsZWZ0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN3aXBlZGlyICE9IHVuZGVmaW5lZCAmJiBzdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsQ29vcmQueCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsQ29vcmQueSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsQ29vcmQueCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsQ29vcmQueSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZWFkIGV2ZW50IGRhdGEgaW50byBvdXIgZW5kRXZudDpcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdFdmVudCA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuZEV2bnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3gnOiAoc2V0dGluZ3MudG91Y2hfY2FwYWJsZSkgPyBvcmlnRXZlbnQudG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3knOiAoc2V0dGluZ3MudG91Y2hfY2FwYWJsZSkgPyBvcmlnRXZlbnQudG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnb2Zmc2V0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4JzogKHNldHRpbmdzLnRvdWNoX2NhcGFibGUpID8gTWF0aC5yb3VuZChvcmlnRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSAoJHRoaXMub2Zmc2V0KCkgPyAkdGhpcy5vZmZzZXQoKS5sZWZ0IDogMCkpIDogTWF0aC5yb3VuZChlLnBhZ2VYIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkubGVmdCA6IDApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneSc6IChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IE1hdGgucm91bmQob3JpZ0V2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkudG9wIDogMCkpIDogTWF0aC5yb3VuZChlLnBhZ2VZIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkudG9wIDogMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpbWUnOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RhcmdldCc6IGUudGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzd2lwZSBhbW91bnQgKG5vcm1hbGl6ZWQpOlxuICAgICAgICAgICAgICAgICAgICB2YXIgeEFtb3VudCA9IE1hdGguYWJzKHN0YXJ0RXZudC5wb3NpdGlvbi54IC0gZW5kRXZudC5wb3NpdGlvbi54KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHlBbW91bnQgPSBNYXRoLmFicyhzdGFydEV2bnQucG9zaXRpb24ueSAtIGVuZEV2bnQucG9zaXRpb24ueSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvdWNoRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGFydEV2bnQnOiBzdGFydEV2bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZW5kRXZudCc6IGVuZEV2bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGlyZWN0aW9uJzogc3dpcGVkaXIucmVwbGFjZSgnc3dpcGUnLCAnJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAneEFtb3VudCc6IHhBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAneUFtb3VudCc6IHlBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZHVyYXRpb24nOiBlbmRFdm50LnRpbWUgLSBzdGFydEV2bnQudGltZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBoYXNTd2lwZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy50cmlnZ2VyKCdzd2lwZScsIHRvdWNoRGF0YSkudHJpZ2dlcihzd2lwZWRpciwgdG91Y2hEYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHRvdWNoRW5kKGU6IGFueSkge1xuICAgICAgICAgICAgICAgICR0aGlzID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgICAgIHZhciBzd2lwZWRpciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgJHRoaXMuZGF0YSgnY2FsbGVlMycsIHRvdWNoRW5kKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzU3dpcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgaWYgdGhlIGVsZW1lbnQgdG8gd2hpY2ggdGhlIGV2ZW50IHdhcyBib3VuZCBjb250YWlucyBhIGRhdGEteHRocmVzaG9sZCB8IGRhdGEtdnRocmVzaG9sZDpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZV94X3RocmVzaG9sZCA9ICR0aGlzLmRhdGEoJ3h0aHJlc2hvbGQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZV95X3RocmVzaG9sZCA9ICR0aGlzLmRhdGEoJ3l0aHJlc2hvbGQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhfdGhyZXNob2xkID0gKHR5cGVvZiBlbGVfeF90aHJlc2hvbGQgIT09ICd1bmRlZmluZWQnICYmIGVsZV94X3RocmVzaG9sZCAhPT0gZmFsc2UgJiYgcGFyc2VJbnQoZWxlX3hfdGhyZXNob2xkKSkgPyBwYXJzZUludChlbGVfeF90aHJlc2hvbGQpIDogc2V0dGluZ3Muc3dpcGVfaF90aHJlc2hvbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2X3RocmVzaG9sZCA9ICh0eXBlb2YgZWxlX3lfdGhyZXNob2xkICE9PSAndW5kZWZpbmVkJyAmJiBlbGVfeV90aHJlc2hvbGQgIT09IGZhbHNlICYmIHBhcnNlSW50KGVsZV95X3RocmVzaG9sZCkpID8gcGFyc2VJbnQoZWxlX3lfdGhyZXNob2xkKSA6IHNldHRpbmdzLnN3aXBlX3ZfdGhyZXNob2xkO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcmlnRXZlbnQgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmRFdm50ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4JzogKHNldHRpbmdzLnRvdWNoX2NhcGFibGUpID8gb3JpZ0V2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneSc6IChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IG9yaWdFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnb2Zmc2V0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4JzogKHNldHRpbmdzLnRvdWNoX2NhcGFibGUpID8gTWF0aC5yb3VuZChvcmlnRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSAoJHRoaXMub2Zmc2V0KCkgPyAkdGhpcy5vZmZzZXQoKS5sZWZ0IDogMCkpIDogTWF0aC5yb3VuZChlLnBhZ2VYIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkubGVmdCA6IDApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneSc6IChzZXR0aW5ncy50b3VjaF9jYXBhYmxlKSA/IE1hdGgucm91bmQob3JpZ0V2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkudG9wIDogMCkpIDogTWF0aC5yb3VuZChlLnBhZ2VZIC0gKCR0aGlzLm9mZnNldCgpID8gJHRoaXMub2Zmc2V0KCkudG9wIDogMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpbWUnOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RhcmdldCc6IGUudGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVhZCBldmVudCBkYXRhIGludG8gb3VyIGVuZEV2bnQ6XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEV2bnQucG9zaXRpb24ueSA+IGVuZEV2bnQucG9zaXRpb24ueSAmJiAoc3RhcnRFdm50LnBvc2l0aW9uLnkgLSBlbmRFdm50LnBvc2l0aW9uLnkgPiB2X3RocmVzaG9sZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlZGlyID0gJ3N3aXBldXAnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEV2bnQucG9zaXRpb24ueCA8IGVuZEV2bnQucG9zaXRpb24ueCAmJiAoZW5kRXZudC5wb3NpdGlvbi54IC0gc3RhcnRFdm50LnBvc2l0aW9uLnggPiBoX3RocmVzaG9sZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlZGlyID0gJ3N3aXBlcmlnaHQnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEV2bnQucG9zaXRpb24ueSA8IGVuZEV2bnQucG9zaXRpb24ueSAmJiAoZW5kRXZudC5wb3NpdGlvbi55IC0gc3RhcnRFdm50LnBvc2l0aW9uLnkgPiB2X3RocmVzaG9sZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlZGlyID0gJ3N3aXBlZG93bic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0RXZudC5wb3NpdGlvbi54ID4gZW5kRXZudC5wb3NpdGlvbi54ICYmIChzdGFydEV2bnQucG9zaXRpb24ueCAtIGVuZEV2bnQucG9zaXRpb24ueCA+IGhfdGhyZXNob2xkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVkaXIgPSAnc3dpcGVsZWZ0JztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc3dpcGUgYW1vdW50IChub3JtYWxpemVkKTpcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhBbW91bnQgPSBNYXRoLmFicyhzdGFydEV2bnQucG9zaXRpb24ueCAtIGVuZEV2bnQucG9zaXRpb24ueCksXG4gICAgICAgICAgICAgICAgICAgICAgICB5QW1vdW50ID0gTWF0aC5hYnMoc3RhcnRFdm50LnBvc2l0aW9uLnkgLSBlbmRFdm50LnBvc2l0aW9uLnkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3VjaERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RhcnRFdm50Jzogc3RhcnRFdm50LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2VuZEV2bnQnOiBlbmRFdm50LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpcmVjdGlvbic6IHN3aXBlZGlyLnJlcGxhY2UoJ3N3aXBlJywgJycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3hBbW91bnQnOiB4QW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3lBbW91bnQnOiB5QW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2R1cmF0aW9uJzogZW5kRXZudC50aW1lIC0gc3RhcnRFdm50LnRpbWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudHJpZ2dlcignc3dpcGVlbmQnLCB0b3VjaERhdGEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBoYXNTd2lwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHRoaXMub24oc2V0dGluZ3Muc3RhcnRldmVudCwgdG91Y2hTdGFydCk7XG4gICAgICAgICAgICAkdGhpcy5vbihzZXR0aW5ncy5tb3ZlZXZlbnQsIHRvdWNoTW92ZSk7XG4gICAgICAgICAgICAkdGhpcy5vbihzZXR0aW5ncy5lbmRldmVudCwgdG91Y2hFbmQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5vZmYoc2V0dGluZ3Muc3RhcnRldmVudCwgJCh0aGlzKS5kYXRhLmNhbGxlZTEpLm9mZihzZXR0aW5ncy5tb3ZlZXZlbnQsICQodGhpcykuZGF0YS5jYWxsZWUyKS5vZmYoc2V0dGluZ3MuZW5kZXZlbnQsICQodGhpcykuZGF0YS5jYWxsZWUzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBzY3JvbGxzdGFydCBFdmVudCAoYWxzbyBoYW5kbGVzIHNjcm9sbGVuZCk6XG4gICAgJC5ldmVudC5zcGVjaWFsLnNjcm9sbHN0YXJ0ID0ge1xuICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRoaXNPYmplY3QgPSB0aGlzLFxuICAgICAgICAgICAgICAgICR0aGlzID0gJCh0aGlzT2JqZWN0KSxcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmc6IGFueSxcbiAgICAgICAgICAgICAgICB0aW1lcjogYW55O1xuXG4gICAgICAgICAgICBmdW5jdGlvbiB0cmlnZ2VyKGV2ZW50OiBFdmVudCwgc3RhdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmcgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyQ3VzdG9tRXZlbnQodGhpc09iamVjdCwgc2Nyb2xsaW5nID8gJ3Njcm9sbHN0YXJ0JyA6ICdzY3JvbGxlbmQnLCBldmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlQaG9uZSB0cmlnZ2VycyBzY3JvbGwgYWZ0ZXIgYSBzbWFsbCBkZWxheTsgdXNlIHRvdWNobW92ZSBpbnN0ZWFkXG4gICAgICAgICAgICAkdGhpcy5vbihzZXR0aW5ncy5zY3JvbGxldmVudCwgZnVuY3Rpb24gc2Nyb2xsRnVuYyhldmVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuZGF0YSgnY2FsbGVlJywgc2Nyb2xsRnVuYyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNjcm9sbGluZykge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyKGV2ZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXIoZXZlbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykub2ZmKHNldHRpbmdzLnNjcm9sbGV2ZW50LCAkKHRoaXMpLmRhdGEuY2FsbGVlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBUaGlzIGlzIHRoZSBvcmllbnRhdGlvbiBjaGFuZ2UgKGxhcmdlbHkgYm9ycm93ZWQgZnJvbSBqUXVlcnkgTW9iaWxlKTpcbiAgICB2YXIgd2luID0gJCh3aW5kb3cpLFxuICAgICAgICBnZXRfb3JpZW50YXRpb246IGFueSxcbiAgICAgICAgbGFzdF9vcmllbnRhdGlvbjogYW55LFxuICAgICAgICBpbml0aWFsX29yaWVudGF0aW9uX2lzX2xhbmRzY2FwZSxcbiAgICAgICAgaW5pdGlhbF9vcmllbnRhdGlvbl9pc19kZWZhdWx0LFxuICAgICAgICBwb3J0cmFpdF9tYXA6IGFueSA9IHtcbiAgICAgICAgICAgICcwJzogdHJ1ZSxcbiAgICAgICAgICAgICcxODAnOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICBpZiAoc2V0dGluZ3Mub3JpZW50YXRpb25fc3VwcG9ydCkge1xuICAgICAgICB2YXIgd3cgPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCB3aW4ud2lkdGgoKSxcbiAgICAgICAgICAgIHdoID0gd2luZG93LmlubmVySGVpZ2h0IHx8IHdpbi5oZWlnaHQoKSxcbiAgICAgICAgICAgIGxhbmRzY2FwZV90aHJlc2hvbGQgPSA1MDtcblxuICAgICAgICBpbml0aWFsX29yaWVudGF0aW9uX2lzX2xhbmRzY2FwZSA9IHd3ID4gd2ggJiYgKHd3IC0gd2gpID4gbGFuZHNjYXBlX3RocmVzaG9sZDtcbiAgICAgICAgaW5pdGlhbF9vcmllbnRhdGlvbl9pc19kZWZhdWx0ID0gcG9ydHJhaXRfbWFwW3dpbmRvdy5vcmllbnRhdGlvbl07XG5cbiAgICAgICAgaWYgKChpbml0aWFsX29yaWVudGF0aW9uX2lzX2xhbmRzY2FwZSAmJiBpbml0aWFsX29yaWVudGF0aW9uX2lzX2RlZmF1bHQpIHx8ICghaW5pdGlhbF9vcmllbnRhdGlvbl9pc19sYW5kc2NhcGUgJiYgIWluaXRpYWxfb3JpZW50YXRpb25faXNfZGVmYXVsdCkpIHtcbiAgICAgICAgICAgIHBvcnRyYWl0X21hcCA9IHtcbiAgICAgICAgICAgICAgICAnLTkwJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnOTAnOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJC5ldmVudC5zcGVjaWFsLm9yaWVudGF0aW9uY2hhbmdlID0ge1xuICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGV2ZW50IGlzIHN1cHBvcnRlZCBuYXRpdmVseSwgcmV0dXJuIGZhbHNlIHNvIHRoYXQgalF1ZXJ5XG4gICAgICAgICAgICAvLyB3aWxsIG9uIHRvIHRoZSBldmVudCB1c2luZyBET00gbWV0aG9kcy5cbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5vcmllbnRhdGlvbl9zdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgb3JpZW50YXRpb24gdG8gYXZvaWQgaW5pdGlhbCBkb3VibGUtdHJpZ2dlcmluZy5cbiAgICAgICAgICAgIGxhc3Rfb3JpZW50YXRpb24gPSBnZXRfb3JpZW50YXRpb24oKTtcblxuICAgICAgICAgICAgd2luLm9uKCd0aHJvdHRsZWRyZXNpemUnLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICB0ZWFyZG93bjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLm9yaWVudGF0aW9uX3N1cHBvcnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbi5vZmYoJ3Rocm90dGxlZHJlc2l6ZScsIGhhbmRsZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZDogZnVuY3Rpb24gKGhhbmRsZU9iajogYW55KSB7XG4gICAgICAgICAgICAvLyBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBib3VuZCBldmVudCBoYW5kbGVyLlxuICAgICAgICAgICAgdmFyIG9sZF9oYW5kbGVyID0gaGFuZGxlT2JqLmhhbmRsZXI7XG5cbiAgICAgICAgICAgIGhhbmRsZU9iai5oYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5vcmllbnRhdGlvbiA9IGdldF9vcmllbnRhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvbGRfaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBJZiB0aGUgZXZlbnQgaXMgbm90IHN1cHBvcnRlZCBuYXRpdmVseSwgdGhpcyBoYW5kbGVyIHdpbGwgYmUgYm91bmQgdG9cbiAgICAvLyB0aGUgd2luZG93IHJlc2l6ZSBldmVudCB0byBzaW11bGF0ZSB0aGUgb3JpZW50YXRpb25jaGFuZ2UgZXZlbnQuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgb3JpZW50YXRpb24uXG4gICAgICAgIHZhciBvcmllbnRhdGlvbiA9IGdldF9vcmllbnRhdGlvbigpO1xuXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiAhPT0gbGFzdF9vcmllbnRhdGlvbikge1xuICAgICAgICAgICAgLy8gVGhlIG9yaWVudGF0aW9uIGhhcyBjaGFuZ2VkLCBzbyB0cmlnZ2VyIHRoZSBvcmllbnRhdGlvbmNoYW5nZSBldmVudC5cbiAgICAgICAgICAgIGxhc3Rfb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICAgICAgICAgIHdpbi50cmlnZ2VyKFwib3JpZW50YXRpb25jaGFuZ2VcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkLmV2ZW50LnNwZWNpYWwub3JpZW50YXRpb25jaGFuZ2Uub3JpZW50YXRpb24gPSBnZXRfb3JpZW50YXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpc1BvcnRyYWl0OiBhbnkgPSB0cnVlLFxuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICBpZiAoc2V0dGluZ3Mub3JpZW50YXRpb25fc3VwcG9ydCkge1xuICAgICAgICAgICAgaXNQb3J0cmFpdCA9IHBvcnRyYWl0X21hcFt3aW5kb3cub3JpZW50YXRpb25dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNQb3J0cmFpdCA9IGVsZW0gJiYgZWxlbS5jbGllbnRXaWR0aCAvIGVsZW0uY2xpZW50SGVpZ2h0IDwgMS4xO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzUG9ydHJhaXQgPyAncG9ydHJhaXQnIDogJ2xhbmRzY2FwZSc7XG4gICAgfTtcblxuICAgIC8vIHRocm90dGxlIEhhbmRsZXI6XG4gICAgJC5ldmVudC5zcGVjaWFsLnRocm90dGxlZHJlc2l6ZSA9IHtcbiAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykub24oJ3Jlc2l6ZScsIHRocm90dGxlX2hhbmRsZXIpO1xuICAgICAgICB9LFxuICAgICAgICB0ZWFyZG93bjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5vZmYoJ3Jlc2l6ZScsIHRocm90dGxlX2hhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciB0aHJvdHRsZSA9IDI1MCxcbiAgICAgICAgdGhyb3R0bGVfaGFuZGxlciA9IGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcbiAgICAgICAgICAgIGN1cnIgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgZGlmZiA9IGN1cnIgLSBsYXN0Q2FsbDtcblxuICAgICAgICAgICAgaWYgKGRpZmYgPj0gdGhyb3R0bGUpIHtcbiAgICAgICAgICAgICAgICBsYXN0Q2FsbCA9IGN1cnI7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCd0aHJvdHRsZWRyZXNpemUnKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaGVsZENhbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChoZWxkQ2FsbCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUHJvbWlzZSBhIGhlbGQgY2FsbCB3aWxsIHN0aWxsIGV4ZWN1dGVcbiAgICAgICAgICAgICAgICBoZWxkQ2FsbCA9IHdpbmRvdy5zZXRUaW1lb3V0KGhhbmRsZXIsIHRocm90dGxlIC0gZGlmZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxhc3RDYWxsID0gMCxcbiAgICAgICAgaGVsZENhbGw6IGFueSxcbiAgICAgICAgY3VycixcbiAgICAgICAgZGlmZjtcblxuICAgIC8vIFRyaWdnZXIgYSBjdXN0b20gZXZlbnQ6XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyQ3VzdG9tRXZlbnQob2JqOiBhbnksIGV2ZW50VHlwZTogc3RyaW5nLCBldmVudDogYW55LCB0b3VjaERhdGE/OiBhbnkpIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsVHlwZSA9IGV2ZW50LnR5cGU7XG4gICAgICAgIGV2ZW50LnR5cGUgPSBldmVudFR5cGU7XG5cbiAgICAgICAgJC5ldmVudC5kaXNwYXRjaC5jYWxsKG9iaiwgZXZlbnQsIHRvdWNoRGF0YSk7XG4gICAgICAgIGV2ZW50LnR5cGUgPSBvcmlnaW5hbFR5cGU7XG4gICAgfVxuXG4gICAgLy8gQ29ycmVjdGx5IG9uIGFueXRoaW5nIHdlJ3ZlIG92ZXJsb2FkZWQ6XG4gICAgJC5lYWNoKHtcbiAgICAgICAgc2Nyb2xsZW5kOiAnc2Nyb2xsc3RhcnQnLFxuICAgICAgICBzd2lwZXVwOiAnc3dpcGUnLFxuICAgICAgICBzd2lwZXJpZ2h0OiAnc3dpcGUnLFxuICAgICAgICBzd2lwZWRvd246ICdzd2lwZScsXG4gICAgICAgIHN3aXBlbGVmdDogJ3N3aXBlJyxcbiAgICAgICAgc3dpcGVlbmQ6ICdzd2lwZScsXG4gICAgICAgIHRhcDI6ICd0YXAnLFxuICAgICAgICB0YXBob2xkMjogJ3RhcGhvbGQnXG4gICAgfSwgZnVuY3Rpb24gKGU6IGFueSwgc3JjRTogYW55KSB7XG4gICAgICAgICQuZXZlbnQuc3BlY2lhbFtlXSA9IHtcbiAgICAgICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5vbihzcmNFLCAkLm5vb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICQ7XG59XG4iLCJpbXBvcnQgRGVidWcgZnJvbSAnZGVidWcnO1xuaW1wb3J0IHsgSURlYnVnZ2VyIH0gZnJvbSAnZGVidWcnO1xuZXhwb3J0IGRlZmF1bHQgRGVidWc7XG5leHBvcnQgeyBEZWJ1ZywgSURlYnVnZ2VyIH07XG4iLCJleHBvcnQgKiBmcm9tICcuL2RlYnVnLm1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL2pxdWVyeS5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2x5ZmlsbHMubW9kdWxlJztcbiIsImltcG9ydCBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBKUXVlcnkgRXh0ZW5zaW9uIGZvciBtb2JpbGUgZXZlbnRzOiBodHRwczovL2dpdGh1Yi5jb20vYmVubWFqb3IvalF1ZXJ5LVRvdWNoLUV2ZW50c1xuICovXG5pbXBvcnQgdG91Y2hFdmVudHMgZnJvbSAnLi9fanF1ZXJ5LXRvdWNoLWV2ZW50cyc7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG5jb25zdCBKUXVlcnk6IEpRdWVyeVN0YXRpYyA9IHRvdWNoRXZlbnRzKGpxdWVyeSk7XG5cbmV4cG9ydCBkZWZhdWx0IEpRdWVyeTtcbmV4cG9ydCB7IEpRdWVyeSB9O1xuIiwiLy8gaW1wb3J0ICdAYmFiZWwvcnVudGltZS1jb3JlanMyL3JlZ2VuZXJhdG9yL2luZGV4J1xuLy8gaW1wb3J0ICdAYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvcHJvbWlzZS5qcyc7XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudC9DdXN0b21FdmVudCNQb2x5ZmlsbCNQb2x5ZmlsbFxuKCgpID0+IHtcblxuICBpZiAoIHR5cGVvZiAod2luZG93IGFzIGFueSkuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQoIGV2ZW50OiBzdHJpbmcsIHBhcmFtczogYW55ICkge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfTtcbiAgICBjb25zdCBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0N1c3RvbUV2ZW50JyApO1xuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoIGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwgKTtcbiAgICByZXR1cm4gZXZ0O1xuICAgfVxuXG4gIEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9ICh3aW5kb3cgYXMgYW55KS5FdmVudC5wcm90b3R5cGU7XG5cbiAgKHdpbmRvdyBhcyBhbnkpLkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XG59KSgpO1xuXG5pbXBvcnQgJ2NvcmUtanMvZm4vc3RyaW5nL3N0YXJ0cy13aXRoLmpzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL3Byb21pc2UuanMnO1xuIiwiaW1wb3J0IHsgUmliYSB9IGZyb20gJy4vcmliYSc7XG5pbXBvcnQge1xuICBJQmluZGVyLFxuICBJT3B0aW9ucyxcbiAgSUJpbmRhYmxlRWxlbWVudCxcbn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xuaW1wb3J0IHsgcGFyc2VOb2RlLCBwYXJzZURlY2xhcmF0aW9uIH0gZnJvbSAnLi9wYXJzZXJzJztcbmltcG9ydCB7IERlYnVnIH0gZnJvbSAnLi92ZW5kb3JzL2RlYnVnLm1vZHVsZSc7XG5pbXBvcnQgeyBSaWJhQ29tcG9uZW50LCBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgdHlwZSBUQmxvY2sgPSBib29sZWFuO1xuXG4vKipcbiAqIFRPRE8gQ2hlY2sgaWYgdGhlcmUgaXMgYW4gb2ZmaWNpYWwgaW50ZXJmYWNlIHdoaWNoIGZpdHMgYmV0dGVyIGhlcmVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRGF0YUVsZW1lbnQgZXh0ZW5kcyBIVE1MVW5rbm93bkVsZW1lbnQge1xuICBkYXRhPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBiaW5kaW5ncyBidWlsdCBmcm9tIGEgc2V0IG9mIHBhcmVudCBub2Rlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZpZXcge1xuICBwdWJsaWMgc3RhdGljIGRlYnVnID0gRGVidWcoJ3JpYmE6dmlldycpO1xuXG4gIHB1YmxpYyBzdGF0aWMgREVDTEFSQVRJT05fU1BMSVQgPSAvKCg/OidbXiddKicpKig/Oig/OlteXFx8J10qKD86J1teJ10qJykrW15cXHwnXSopK3xbXlxcfF0rKSl8XiQvZztcblxuICAvKipcbiAgICogQmluZGVyIGZvciBtdXN0YWNoZSBzdHlsZSBge21vZGVsLnByb3BlcnR5fWAgdGV4dCBCaW5kZXJzXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG11c3RhY2hlVGV4dEJpbmRlcjogSUJpbmRlcjxzdHJpbmc+ID0ge1xuICAgIG5hbWU6ICdtdXN0YWNoZS10ZXh0JyxcbiAgICByb3V0aW5lOiAobm9kZTogSURhdGFFbGVtZW50LCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBub2RlLmRhdGEgPSAodmFsdWUgIT0gbnVsbCkgPyB2YWx1ZSA6ICcnO1xuICAgIH0sXG4gIH07XG5cbiAgcHVibGljIHN0YXRpYyBiaW5kaW5nQ29tcGFyYXRvciA9IChhOiBCaW5kaW5nLCBiOiBCaW5kaW5nKSA9PiB7XG4gICAgY29uc3QgYVByaW9yaXR5ID0gKGEgYXMgQmluZGluZykuYmluZGVyID8gKCgoYSBhcyBCaW5kaW5nKS5iaW5kZXIgYXMgSUJpbmRlcjxhbnk+KS5wcmlvcml0eSB8fCAwKSA6IDA7XG4gICAgY29uc3QgYlByaW9yaXR5ID0gKGIgYXMgQmluZGluZykuYmluZGVyID8gKCgoYiBhcyBCaW5kaW5nKS5iaW5kZXIgYXMgSUJpbmRlcjxhbnk+KS5wcmlvcml0eSB8fCAwKSA6IDA7XG4gICAgcmV0dXJuIGJQcmlvcml0eSAtIGFQcmlvcml0eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gQ3JlYXRlIGEgbmV3IHZpZXcgaW5zaXRlIG9mIGEgYmluZGluZ1xuICAgKiBAcGFyYW0gYmluZGluXG4gICAqIEBwYXJhbSBtb2RlbHNcbiAgICogQHBhcmFtIGFuY2hvckVsXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNyZWF0ZShiaW5kaW5nOiBCaW5kaW5nLCBtb2RlbHM6IGFueSwgYW5jaG9yRWw6IEhUTUxFbGVtZW50IHwgTm9kZSB8IG51bGwpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGJpbmRpbmcuZWwuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IHZpZXcgPSBuZXcgVmlldygodGVtcGxhdGUgYXMgTm9kZSksIG1vZGVscywgYmluZGluZy52aWV3Lm9wdGlvbnMpO1xuICAgIHZpZXcuYmluZCgpO1xuICAgIGlmICghYmluZGluZyB8fCAhYmluZGluZy5tYXJrZXIgfHwgYmluZGluZy5tYXJrZXIucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5kZWJ1ZygnW1ZpZXddIFdhcm46IE5vIHBhcmVudCBub2RlIGZvciBiaW5kaW5nIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBiaW5kaW5nLm1hcmtlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0ZW1wbGF0ZSwgYW5jaG9yRWwpO1xuICAgIH1cbiAgICByZXR1cm4gdmlldztcbiAgfVxuXG4gIHB1YmxpYyBlbHM6IEhUTUxDb2xsZWN0aW9uIHwgSFRNTEVsZW1lbnRbXSB8IE5vZGVbXTtcbiAgcHVibGljIG1vZGVsczogYW55O1xuICBwdWJsaWMgb3B0aW9uczogSU9wdGlvbnM7XG4gIHB1YmxpYyBiaW5kaW5nczogQXJyYXk8QmluZGluZz4gPSBbXTtcbiAgcHVibGljIHdlYkNvbXBvbmVudHM6IEFycmF5PENvbXBvbmVudD4gPSBbXTtcbiAgLy8gcHVibGljIGNvbXBvbmVudFZpZXc6IFZpZXcgfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogVGhlIERPTSBlbGVtZW50cyBhbmQgdGhlIG1vZGVsIG9iamVjdHMgZm9yIGJpbmRpbmcgYXJlIHBhc3NlZCBpbnRvIHRoZVxuICAgKiBjb25zdHJ1Y3RvciBhbG9uZyB3aXRoIGFueSBsb2NhbCBvcHRpb25zIHRoYXQgc2hvdWxkIGJlIHVzZWQgdGhyb3VnaG91dCB0aGVcbiAgICogY29udGV4dCBvZiB0aGUgdmlldyBhbmQgaXQncyBiaW5kaW5ncy5cbiAgICogQHBhcmFtIGVsc1xuICAgKiBAcGFyYW0gbW9kZWxzXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbHM6IEhUTUxDb2xsZWN0aW9uIHwgSFRNTEVsZW1lbnQgfCBOb2RlIHwgTm9kZUxpc3RPZjxDaGlsZE5vZGU+IHwgSFRNTFVua25vd25FbGVtZW50W10gLCBtb2RlbHM6IGFueSwgb3B0aW9uczogSU9wdGlvbnMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbHMpKSB7XG4gICAgICB0aGlzLmVscyA9IGVscztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbHMgPSAoW2Vsc10gYXMgSFRNTEVsZW1lbnRbXSB8IE5vZGVbXSApO1xuICAgIH1cbiAgICB0aGlzLm1vZGVscyA9IG1vZGVscztcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgdGhpcy5idWlsZCgpO1xuICB9XG5cbiAgcHVibGljIGJ1aWxkQmluZGluZyhub2RlOiBIVE1MVW5rbm93bkVsZW1lbnQsIHR5cGU6IHN0cmluZyB8IG51bGwsIGRlY2xhcmF0aW9uOiBzdHJpbmcsIGJpbmRlcjogSUJpbmRlcjxhbnk+LCBpZGVudGlmaWVyOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgY29uc3QgcGFyc2VkRGVjbGFyYXRpb24gPSBwYXJzZURlY2xhcmF0aW9uKGRlY2xhcmF0aW9uKTtcbiAgICBjb25zdCBrZXlwYXRoID0gcGFyc2VkRGVjbGFyYXRpb24ua2V5cGF0aDtcbiAgICBjb25zdCBwaXBlcyA9IHBhcnNlZERlY2xhcmF0aW9uLnBpcGVzO1xuICAgIHRoaXMuYmluZGluZ3MucHVzaChuZXcgQmluZGluZygodGhpcyBhcyBWaWV3KSwgbm9kZSwgdHlwZSwga2V5cGF0aCwgYmluZGVyLCBwaXBlcywgaWRlbnRpZmllcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgRE9NIHRyZWUgYW5kIGJ1aWxkcyBgQmluZGluZ2AgaW5zdGFuY2VzIGZvciBldmVyeSBtYXRjaGVkXG4gICAqIGJpbmRpbmcgZGVjbGFyYXRpb24uXG4gICAqL1xuICBwdWJsaWMgYnVpbGQoKSB7XG4gICAgdGhpcy5iaW5kaW5ncyA9IFtdO1xuXG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmVscztcbiAgICBsZXQgaTogbnVtYmVyO1xuICAgIGxldCBsZW46IG51bWJlcjtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKCEgdGhpcy5vcHRpb25zLnRlbXBsYXRlRGVsaW1pdGVycykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RlbXBsYXRlRGVsaW1pdGVycyByZXF1aXJlZCcpO1xuICAgICAgfVxuICAgICAgcGFyc2VOb2RlKHRoaXMsIChlbGVtZW50c1tpXSBhcyBJRGF0YUVsZW1lbnQpLCB0aGlzLm9wdGlvbnMudGVtcGxhdGVEZWxpbWl0ZXJzKTtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRpbmdzLnNvcnQoVmlldy5iaW5kaW5nQ29tcGFyYXRvcik7XG4gIH1cblxuICBwdWJsaWMgdHJhdmVyc2Uobm9kZTogSUJpbmRhYmxlRWxlbWVudCk6IFRCbG9jayB7XG5cbiAgICBsZXQgYmluZGluZ1ByZWZpeDtcbiAgICBpZiAodGhpcy5vcHRpb25zLmZ1bGxQcmVmaXgpIHtcbiAgICAgIGJpbmRpbmdQcmVmaXggPSB0aGlzLm9wdGlvbnMuZnVsbFByZWZpeDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVE9ETyBGSVhNRVxuICAgICAgYmluZGluZ1ByZWZpeCA9IHRoaXMub3B0aW9ucy5wcmVmaXggKyAnLSc7XG4gICAgfVxuXG4gICAgaWYgKCFiaW5kaW5nUHJlZml4KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ByZWZpeCBpcyByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIC8qKiBJZiB0cnVlIHN0b3AgLyBibG9jayB0aGUgcGFyc2VOb2RlIHJlY3Vyc2lvbiAqL1xuICAgIGxldCBibG9jayA9IHRoaXMub3B0aW9ucy5ibG9ja05vZGVOYW1lcy5pbmNsdWRlcyhub2RlLm5vZGVOYW1lKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gbm9kZS5hdHRyaWJ1dGVzO1xuICAgIGNvbnN0IGJpbmRJbmZvcyA9IFtdO1xuICAgIGNvbnN0IHN0YXJCaW5kZXJzID0gdGhpcy5vcHRpb25zLnN0YXJCaW5kZXJzO1xuXG4gICAgLy8gYmluZCBhdHRyaWJ1dGUgYmluZGVycyBpZiBhdmFpbGFibGVcbiAgICBpZiAoYXR0cmlidXRlcyAmJiB0aGlzLm9wdGlvbnMuYmluZGVycykge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGF0dHJpYnV0ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGVOYW1lID0gbnVsbDtcbiAgICAgICAgbGV0IGJpbmRlciA9IG51bGw7XG4gICAgICAgIGxldCBpZGVudGlmaWVyID0gbnVsbDtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gYXR0cmlidXRlc1tpXTtcbiAgICAgICAgLy8gaWYgYXR0cmlidXRlIHN0YXJ0cyB3aXRoIHRoZSBiaW5kaW5nIHByZWZpeC4gRS5nLiBydlxuICAgICAgICBpZiAoYXR0cmlidXRlLm5hbWUuaW5kZXhPZihiaW5kaW5nUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgIG5vZGVOYW1lID0gYXR0cmlidXRlLm5hbWUuc2xpY2UoYmluZGluZ1ByZWZpeC5sZW5ndGgpO1xuICAgICAgICAgIC8vIGlmIGJpbmRlciBpcyBub3QgYSBzdGFyQmluZGVyIGJpbmRlciBzaG91bGQgYmUgc2V0dGVkXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iaW5kZXJzLmhhc093blByb3BlcnR5KG5vZGVOYW1lKSkge1xuICAgICAgICAgICAgYmluZGVyID0gdGhpcy5vcHRpb25zLmJpbmRlcnNbbm9kZU5hbWVdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChiaW5kZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHNlZW1zIHRvIGJlIGEgc3RhciBiaW5kZXIgKGJlY2F1c2UgYmluZGVyIHdhcyBub3Qgc2V0KVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYW55IHN0YXJCaW5kZXIgbWF0Y2hzXG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHN0YXJCaW5kZXJzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgIGlkZW50aWZpZXIgPSBzdGFyQmluZGVyc1trXTtcbiAgICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChgXiR7aWRlbnRpZmllci5yZXBsYWNlKC9cXCovZywgJy4rJyl9JGApO1xuICAgICAgICAgICAgICBpZiAocmVnZXhwLnRlc3Qobm9kZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgYmluZGVyID0gdGhpcy5vcHRpb25zLmJpbmRlcnNbaWRlbnRpZmllcl07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYmluZGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJpbmRlcnMuaGFzT3duUHJvcGVydHkoJyonKSkge1xuICAgICAgICAgICAgICBiaW5kZXIgPSB0aGlzLm9wdGlvbnMuYmluZGVyc1snKiddO1xuICAgICAgICAgICAgICBpZGVudGlmaWVyID0gJyonO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYmluZGVyID0gUmliYS5mYWxsYmFja0JpbmRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBpZiBibG9jayBpcyBzZXQgY2hpbGRzIG5vdCBib3VuZCAodGhlIGJpbmRlciBib3VuZCBpdCBieSBpdHNlbGYpXG4gICAgICAgICAgLy8gYW5kIGJ1aWxkIGJpbmRpbmcgZGlyZWN0bHkgKGRvIG5vdCBwdXNoIGl0IHRvIGJpbmRJbmZvcyBhcnJheSlcbiAgICAgICAgICBpZiAoYmluZGVyLmJsb2NrKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkQmluZGluZyhub2RlLCBub2RlTmFtZSwgYXR0cmlidXRlLnZhbHVlLCBiaW5kZXIsIGlkZW50aWZpZXIpO1xuICAgICAgICAgICAgaWYgKG5vZGUucmVtb3ZlQXR0cmlidXRlICYmIHRoaXMub3B0aW9ucy5yZW1vdmVCaW5kZXJBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJpbmRJbmZvcy5wdXNoKHthdHRyOiBhdHRyaWJ1dGUsIGJpbmRlciwgbm9kZU5hbWUsIGlkZW50aWZpZXJ9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbmRJbmZvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBiaW5kSW5mbyA9IGJpbmRJbmZvc1tpXTtcbiAgICAgICAgdGhpcy5idWlsZEJpbmRpbmcobm9kZSwgYmluZEluZm8ubm9kZU5hbWUsIGJpbmRJbmZvLmF0dHIudmFsdWUsIGJpbmRJbmZvLmJpbmRlciwgYmluZEluZm8uaWRlbnRpZmllcik7XG4gICAgICAgIGlmIChub2RlLnJlbW92ZUF0dHJpYnV0ZSAmJiB0aGlzLm9wdGlvbnMucmVtb3ZlQmluZGVyQXR0cmlidXRlcykge1xuICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGJpbmRJbmZvLmF0dHIubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBiaW5kIGNvbXBvbmVudHNcbiAgICBpZiAoIWJsb2NrKSB7XG4gICAgICBjb25zdCBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcG9uZW50cyAmJiB0aGlzLm9wdGlvbnMuY29tcG9uZW50c1tub2RlTmFtZV0gJiYgIW5vZGUuX2JvdW5kKSB7XG4gICAgICAgIGNvbnN0IENPTVBPTkVOVCA9ICh0aGlzLm9wdGlvbnMuY29tcG9uZW50c1tub2RlTmFtZV0gYXMgdHlwZW9mIFJpYmFDb21wb25lbnQpO1xuICAgICAgICAvLyBGYWxsYmFja1xuICAgICAgICBpZiAoIXdpbmRvdy5jdXN0b21FbGVtZW50cykge1xuICAgICAgICAgIFZpZXcuZGVidWcoYEZhbGxiYWNrIGZvciBXZWJjb21wb25lbnQgJHtub2RlTmFtZX1gKTtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgQ09NUE9ORU5UKG5vZGUsIHtcbiAgICAgICAgICAgIGZhbGxiYWNrOiB0cnVlLFxuICAgICAgICAgICAgdmlldzogdGhpcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLndlYkNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFZpZXcuZGVidWcoYERlZmluZSBXZWJjb21wb25lbnQgJHtub2RlTmFtZX0gd2l0aCBjdXN0b21FbGVtZW50cy5kZWZpbmVgKTtcbiAgICAgICAgICAvLyBpZiBub2RlLmNvbnN0cnVjdG9yIGlzIG5vdCBIVE1MRWxlbWVudCBhbmQgbm90IEhUTUxVbmtub3duRWxlbWVudCwgaXQgd2FzIHJlZ2lzdGVkXG4gICAgICAgICAgLy8gQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzMzNDM2NS9ob3ctdG8tZ2V0LWxpc3Qtb2YtcmVnaXN0ZXJlZC1jdXN0b20tZWxlbWVudHNcbiAgICAgICAgICBpZiAoY3VzdG9tRWxlbWVudHMuZ2V0KG5vZGVOYW1lKSB8fCAobm9kZS5jb25zdHJ1Y3RvciAhPT0gSFRNTEVsZW1lbnQgJiYgbm9kZS5jb25zdHJ1Y3RvciAhPT0gSFRNTFVua25vd25FbGVtZW50KSkge1xuICAgICAgICAgICAgVmlldy5kZWJ1ZyhgV2ViIGNvbXBvbmVudCBhbHJlYWR5IGRlZmluZWRgLCBub2RlLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKG5vZGVOYW1lLCBDT01QT05FTlQpO1xuICAgICAgICAgICAgICAvLyBUT0RPID8/IGNhbGwgdW5iaW5kIChvbiB1bmJpbmQgdGhpcyB2aWV3KSBvZiB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZSB0byB1bmJpbmQgdGhpcyB2aWV3XG4gICAgICAgICAgICAgIC8vIChub3QgZGlzY29ubmVjdGVkQ2FsbGJhY2sgLyBkaXNjb25uZWN0ZWRGYWxsYmFja0NhbGxiYWNrLCB0aGlzIGlzIGF1dG9tYXRpY2FsbHkgY2FsbGVkIGZyb20gY3VzdG9tRWxlbWVudHMpXG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGN1c3RvbUVsZW1lbnRzLmdldChub2RlTmFtZSk7XG4gICAgICAgICAgICAgIGNvbXBvbmVudC5jb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2aWV3OiB0aGlzLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgIC8vIEZhbGxiYWNrXG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBDT01QT05FTlQobm9kZSwge1xuICAgICAgICAgICAgICAgIGZhbGxiYWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZpZXc6IHRoaXMsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLndlYkNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJsb2NrID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmxvY2s7XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgYWxsIG9mIHRoZSBjdXJyZW50IGJpbmRpbmdzIGZvciB0aGlzIHZpZXcuXG4gICAqL1xuICBwdWJsaWMgYmluZCgpIHtcbiAgICB0aGlzLmJpbmRpbmdzLmZvckVhY2goKGJpbmRpbmcpID0+IHtcbiAgICAgIGJpbmRpbmcuYmluZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZHMgYWxsIG9mIHRoZSBjdXJyZW50IGJpbmRpbmdzIGZvciB0aGlzIHZpZXcuXG4gICAqL1xuICBwdWJsaWMgdW5iaW5kKCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuYmluZGluZ3MpKSB7XG4gICAgICB0aGlzLmJpbmRpbmdzLmZvckVhY2goKGJpbmRpbmcpID0+IHtcbiAgICAgICAgYmluZGluZy51bmJpbmQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy53ZWJDb21wb25lbnRzLmZvckVhY2goKHdlYmNvbXBvbmVudCkgPT4ge1xuICAgICAgICB3ZWJjb21wb25lbnQuZGlzY29ubmVjdGVkRmFsbGJhY2tDYWxsYmFjaygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVE9ETyBmYWxsYmFjayB0byB1bmJpbmQgd2ViIGNvbXBvbmVudHNcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW5jcyB1cCB0aGUgdmlldyB3aXRoIHRoZSBtb2RlbCBieSBydW5uaW5nIHRoZSByb3V0aW5lcyBvbiBhbGwgYmluZGluZ3MuXG4gICAqL1xuICBwdWJsaWMgc3luYygpIHtcbiAgICB0aGlzLmJpbmRpbmdzLmZvckVhY2goKGJpbmRpbmcpID0+IHtcbiAgICAgIGlmIChiaW5kaW5nLnN5bmMpIHtcbiAgICAgICAgYmluZGluZy5zeW5jKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGlzaGVzIHRoZSBpbnB1dCB2YWx1ZXMgZnJvbSB0aGUgdmlldyBiYWNrIHRvIHRoZSBtb2RlbCAocmV2ZXJzZSBzeW5jKS5cbiAgICovXG4gIHB1YmxpYyBwdWJsaXNoKCkge1xuICAgIHRoaXMuYmluZGluZ3MuZm9yRWFjaCgoYmluZGluZykgPT4ge1xuICAgICAgaWYgKChiaW5kaW5nIGFzIEJpbmRpbmcpLmJpbmRlciAmJiBiaW5kaW5nLnB1Ymxpc2ggJiYgKChiaW5kaW5nIGFzIEJpbmRpbmcpLmJpbmRlciBhcyBJQmluZGVyPGFueT4pLnB1Ymxpc2hlcykge1xuICAgICAgICBiaW5kaW5nLnB1Ymxpc2goKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB2aWV3J3MgbW9kZWxzIGFsb25nIHdpdGggYW55IGFmZmVjdGVkIGJpbmRpbmdzLlxuICAgKiBAcGFyYW0gbW9kZWxzXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKG1vZGVsczogYW55ID0ge30pIHtcbiAgICBPYmplY3Qua2V5cyhtb2RlbHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdGhpcy5tb2RlbHNba2V5XSA9IG1vZGVsc1trZXldO1xuICAgIH0pO1xuXG4gICAgdGhpcy5iaW5kaW5ncy5mb3JFYWNoKChiaW5kaW5nKSA9PiB7XG4gICAgICBpZiAoKGJpbmRpbmcgYXMgQmluZGluZykudXBkYXRlKSB7XG4gICAgICAgIChiaW5kaW5nIGFzIEJpbmRpbmcpLnVwZGF0ZShtb2RlbHMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGVidWcsXG4gIEV2ZW50RGlzcGF0Y2hlcixcbiAgVXRpbHMsXG59IGZyb20gJ0ByaWJhanMvY29yZSc7XG5cbmltcG9ydCBwdWdUZW1wbGF0ZSBmcm9tICcuL2JzNC1zaWRlYmFyLmNvbXBvbmVudC5wdWcnO1xuXG50eXBlIFN0YXRlID0gJ292ZXJsYXktbGVmdCcgfCAnb3ZlcmxheS1yaWdodCcgfCAnc2lkZS1sZWZ0JyB8ICdzaWRlLXJpZ2h0JyB8ICdoaWRkZW4nO1xuXG5pbnRlcmZhY2UgSVNjb3BlIHtcbiAgY29udGFpbmVyU2VsZWN0b3I/OiBzdHJpbmc7XG4gIHN0YXRlOiBTdGF0ZTtcbiAgaGlkZTogQnM0U2lkZWJhckNvbXBvbmVudFsnaGlkZSddO1xuICB0b2dnbGU6IEJzNFNpZGViYXJDb21wb25lbnRbJ3RvZ2dsZSddO1xuICBpZD86IHN0cmluZztcbiAgb3B0aW9uczoge1xuICAgIHBvc2l0aW9uOiAnbGVmdCcgfCAncmlnaHQnLFxuICAgIGF1dG9TaG93T25XaWRlclRoYW46IG51bWJlcjtcbiAgICBhdXRvSGlkZU9uU2xpbW1lclRoYW46IG51bWJlcjtcbiAgICBhdXRvSGlkZU9uUGF0aG5hbWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIG92ZXJsYXlPblNsaW1tZXJUaGFuOiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBCczRTaWRlYmFyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBwdWJsaWMgc3RhdGljIHRhZ05hbWU6IHN0cmluZyA9ICdiczQtc2lkZWJhcic7XG5cbiAgcHJvdGVjdGVkIGNvbnRhaW5lcnM/OiBOb2RlTGlzdE9mPEhUTUxVbmtub3duRWxlbWVudD47XG5cbiAgcHJvdGVjdGVkIHN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuXG4gIHByb3RlY3RlZCBhdXRvYmluZCA9IHRydWU7XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFsnY29udGFpbmVyLXNlbGVjdG9yJywgJ2lkJ107XG4gIH1cblxuICBwcm90ZWN0ZWQgdG9nZ2xlQnV0dG9uRXZlbnRzID0gbmV3IEV2ZW50RGlzcGF0Y2hlcignYnM0LXRvZ2dsZS1idXR0b24nKTtcblxuICBwcm90ZWN0ZWQgZGVidWcgPSBEZWJ1ZygnY29tcG9uZW50OicgKyBCczRTaWRlYmFyQ29tcG9uZW50LnRhZ05hbWUpO1xuXG4gIHByb3RlY3RlZCBzY29wZTogSVNjb3BlID0ge1xuICAgIGNvbnRhaW5lclNlbGVjdG9yOiB1bmRlZmluZWQsXG4gICAgc3RhdGU6ICdoaWRkZW4nLFxuICAgIGhpZGU6IHRoaXMuaGlkZSxcbiAgICB0b2dnbGU6IHRoaXMudG9nZ2xlLFxuICAgIGlkOiB1bmRlZmluZWQsXG4gICAgb3B0aW9uczoge1xuICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgIGF1dG9TaG93T25XaWRlclRoYW46IDExOTksXG4gICAgICBhdXRvSGlkZU9uU2xpbW1lclRoYW46IDEyMDAsXG4gICAgICBhdXRvSGlkZU9uUGF0aG5hbWVzOiBbJy8nXSxcbiAgICAgIG92ZXJsYXlPblNsaW1tZXJUaGFuOiAxMjAwLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudD86IEhUTUxFbGVtZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gICAgdGhpcy5kZWJ1ZygnY29uc3RydWN0b3InLCB0aGlzKTtcbiAgICB0aGlzLmluaXQoQnM0U2lkZWJhckNvbXBvbmVudC5vYnNlcnZlZEF0dHJpYnV0ZXMpO1xuICAgIHRoaXMuc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKTtcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvbkV2ZW50cy5vbigndG9nZ2xlJywgKHRhcmdldElkOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZGVidWcoJ3RvZ2dsZSB0YXJnZXRJZCcsIHRhcmdldElkKTtcbiAgICAgIGlmICh0YXJnZXRJZCA9PT0gdGhpcy5zY29wZS5pZCkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICB0aGlzLnNldFN0YXRlQnlFbnZpcm9tZW50KCk7XG4gIH1cblxuICBwdWJsaWMgc2V0U3RhdGUoc3RhdGU6IFN0YXRlKSB7XG4gICAgdGhpcy5zY29wZS5zdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgcHVibGljIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnNjb3BlLnN0YXRlO1xuICB9XG5cbiAgcHVibGljIGhpZGUoKSB7XG4gICAgdGhpcy5zY29wZS5zdGF0ZSA9ICdoaWRkZW4nO1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZSgpO1xuICB9XG5cbiAgcHVibGljIHNob3coKSB7XG4gICAgY29uc3QgdncgPSBVdGlscy5nZXRWaWV3cG9ydERpbWVuc2lvbnMoKS53O1xuICAgIGlmICh2dyA8IHRoaXMuc2NvcGUub3B0aW9ucy5vdmVybGF5T25TbGltbWVyVGhhbikge1xuICAgICAgdGhpcy5zY29wZS5zdGF0ZSA9ICdvdmVybGF5LScgKyB0aGlzLnNjb3BlLm9wdGlvbnMucG9zaXRpb24gYXMgU3RhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NvcGUuc3RhdGUgPSAnc2lkZS0nICsgdGhpcy5zY29wZS5vcHRpb25zLnBvc2l0aW9uIGFzIFN0YXRlO1xuICAgIH1cbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2UoKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuc2NvcGUuc3RhdGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG9uSGlkZGVuKCkge1xuICAgIHRoaXMuc2V0Q29udGFpbmVyc1N0eWxlKCk7XG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDAlKScpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uU2lkZShkaXJlY3RvbjogU3RhdGUpIHtcbiAgICB0aGlzLnNldENvbnRhaW5lcnNTdHlsZSgnJywgZGlyZWN0b24pO1xuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICd0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKScpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uT3ZlcmxheShkaXJlY3RvbjogU3RhdGUpIHtcbiAgICB0aGlzLnNldENvbnRhaW5lcnNTdHlsZSgnJywgZGlyZWN0b24pO1xuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICd0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKScpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uU3RhdGVDaGFuZ2UoKSB7XG4gICAgdGhpcy5kZWJ1Zygnc3RhdGUgY2hhbmdlZDogJyArIHRoaXMuc2NvcGUuc3RhdGUpO1xuICAgIHN3aXRjaCAodGhpcy5zY29wZS5zdGF0ZSkge1xuICAgICAgY2FzZSAnc2lkZS1sZWZ0JzpcbiAgICAgIGNhc2UgJ3NpZGUtcmlnaHQnOlxuICAgICAgICB0aGlzLm9uU2lkZSh0aGlzLnNjb3BlLnN0YXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ292ZXJsYXktbGVmdCc6XG4gICAgICAgIGNhc2UgJ292ZXJsYXktcmlnaHQnOlxuICAgICAgICAgIHRoaXMub25PdmVybGF5KHRoaXMuc2NvcGUuc3RhdGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5vbkhpZGRlbigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy50b2dnbGVCdXR0b25FdmVudHMudHJpZ2dlcigndG9nZ2xlZCcsIHRoaXMuc2NvcGUuc3RhdGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRTdGF0ZUJ5RW52aXJvbWVudCgpIHtcbiAgICBpZiAodGhpcy5zY29wZS5vcHRpb25zLmF1dG9IaWRlT25QYXRobmFtZXMuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgICBjb25zdCB2dyA9IFV0aWxzLmdldFZpZXdwb3J0RGltZW5zaW9ucygpLnc7XG4gICAgaWYgKHZ3IDwgdGhpcy5zY29wZS5vcHRpb25zLmF1dG9IaWRlT25TbGltbWVyVGhhbikge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgICBpZiAodncgPCB0aGlzLnNjb3BlLm9wdGlvbnMuYXV0b0hpZGVPblNsaW1tZXJUaGFuKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuICAgIGlmICh2dyA+IHRoaXMuc2NvcGUub3B0aW9ucy5hdXRvU2hvd09uV2lkZXJUaGFuKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG9uUmVzaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGVCeUVudmlyb21lbnQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0Q29udGFpbmVycyhuZXdWYWx1ZT86IHN0cmluZykge1xuICAgIG5ld1ZhbHVlID0gbmV3VmFsdWUgfHwgdGhpcy5zY29wZS5jb250YWluZXJTZWxlY3RvcjtcbiAgICB0aGlzLmRlYnVnKCdpbml0Q29udGFpbmVycycsIG5ld1ZhbHVlKTtcbiAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTFVua25vd25FbGVtZW50PihuZXdWYWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuc2V0Q29udGFpbmVyc1N0eWxlKCk7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0Q29udGFpbmVyc1N0eWxlKHN0eWxlPzogc3RyaW5nLCBtb3ZlPzogU3RhdGUpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXJzKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbnRhaW5lciBvZiB0aGlzLmNvbnRhaW5lcnMpIHtcbiAgICAgICAgdGhpcy5zZXRDb250YWluZXJTdHlsZShjb250YWluZXIsIHN0eWxlLCBtb3ZlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY29udGFpbmVyIHN0eWxlLCB0YWtlcyBvdmVycyBhbHdheXMgdGhlIHRyYW5zaXRpb24gc3R5bGUgb2YgdGhpcyBzaWRlYmFyXG4gICAqIEBwYXJhbSBjb250YWluZXJcbiAgICogQHBhcmFtIHN0eWxlXG4gICAqIEBwYXJhbSBtb3ZlXG4gICAqL1xuICBwcm90ZWN0ZWQgc2V0Q29udGFpbmVyU3R5bGUoY29udGFpbmVyOiBIVE1MVW5rbm93bkVsZW1lbnQsIHN0eWxlOiBzdHJpbmcgPSAnJywgbW92ZT86IFN0YXRlKSB7XG4gICAgaWYgKG1vdmUpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgIGNvbnN0IGNvblN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKTtcbiAgICAgIHN3aXRjaCAobW92ZSkge1xuICAgICAgICBjYXNlICdzaWRlLWxlZnQnOlxuICAgICAgICAgIHN3aXRjaCAoY29uU3R5bGUucG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2ZpeGVkJzpcbiAgICAgICAgICAgICAgc3R5bGUgKz0gJ2xlZnQ6JyArIHdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBzdHlsZSArPSAnbWFyZ2luLWxlZnQ6JyArIHdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzaWRlLXJpZ2h0JzpcbiAgICAgICAgICBzd2l0Y2ggKGNvblN0eWxlLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICdmaXhlZCc6XG4gICAgICAgICAgICAgIHN0eWxlICs9ICdyaWdodDonICsgd2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHN0eWxlICs9ICdtYXJnaW4tcmlnaHQ6JyArIHdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgdHJhbnNpdGlvbjoke3RoaXMuc3R5bGUudHJhbnNpdGlvbn07JHtzdHlsZX1gKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBpbml0KG9ic2VydmVkQXR0cmlidXRlczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gc3VwZXIuaW5pdChvYnNlcnZlZEF0dHJpYnV0ZXMpXG4gICAgLnRoZW4oKHZpZXcpID0+IHtcbiAgICAgIHJldHVybiB2aWV3O1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIGJlZm9yZUJpbmQoKSB7XG4gICAgdGhpcy5kZWJ1ZygnYmVmb3JlQmluZCcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIGFmdGVyQmluZCgpIHtcbiAgICB0aGlzLmRlYnVnKCdhZnRlckJpbmQnLCB0aGlzLnNjb3BlKTtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2UoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXF1aXJlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBhcnNlZEF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGVOYW1lOiBzdHJpbmcsIG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnksIG5hbWVzcGFjZTogc3RyaW5nIHwgbnVsbCkge1xuICAgIHN1cGVyLnBhcnNlZEF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGVOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIG5hbWVzcGFjZSk7XG4gICAgaWYgKGF0dHJpYnV0ZU5hbWUgPT09ICdjb250YWluZXJTZWxlY3RvcicpIHtcbiAgICAgIHRoaXMuaW5pdENvbnRhaW5lcnMobmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlY29uc3RydWN0b3JcbiAgcHJvdGVjdGVkIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdGVtcGxhdGUoKSB7XG4gICAgLy8gT25seSBzZXQgdGhlIGNvbXBvbmVudCB0ZW1wbGF0ZSBpZiB0aGVyZSBubyBjaGlsZHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgdGhpcy5kZWJ1ZygnRG8gbm90IHVzZSB0ZW1wbGF0ZSwgYmVjYXVzZSBlbGVtZW50IGhhcyBjaGlsZCBub2RlcycpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gcHVnVGVtcGxhdGUodGhpcy5zY29wZSk7XG4gICAgICB0aGlzLmRlYnVnKCdVc2UgdGVtcGxhdGUnLCB0ZW1wbGF0ZSk7XG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCI7IiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEZWJ1ZyxcbiAgRXZlbnREaXNwYXRjaGVyLFxufSBmcm9tICdAcmliYWpzL2NvcmUnO1xuXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9iczQtdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQuaHRtbCc7XG5cbnR5cGUgU3RhdGUgPSAndW5kZWZpbmVkJyB8ICdvdmVybGF5LWxlZnQnIHwgJ292ZXJsYXktcmlnaHQnIHwgJ3NpZGUtbGVmdCcgfCAnc2lkZS1yaWdodCcgfCAnaGlkZGVuJztcblxuaW50ZXJmYWNlIElTY29wZSB7XG4gIHRhcmdldElkPzogc3RyaW5nO1xuICB0b2dnbGU6IEJzNFRvZ2dsZUJ1dHRvbkNvbXBvbmVudFsndG9nZ2xlJ107XG4gIHN0YXRlOiBTdGF0ZTtcbiAgaXNDbG9zZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBCczRUb2dnbGVCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHB1YmxpYyBzdGF0aWMgdGFnTmFtZTogc3RyaW5nID0gJ2JzNC10b2dnbGUtYnV0dG9uJztcblxuICBwcm90ZWN0ZWQgYXV0b2JpbmQgPSB0cnVlO1xuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbJ3RhcmdldC1pZCddO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlYnVnID0gRGVidWcoJ2NvbXBvbmVudDonICsgQnM0VG9nZ2xlQnV0dG9uQ29tcG9uZW50LnRhZ05hbWUpO1xuXG4gIHByb3RlY3RlZCBldmVudERpc3BhdGNoZXIgPSBuZXcgRXZlbnREaXNwYXRjaGVyKCdiczQtdG9nZ2xlLWJ1dHRvbicpO1xuXG4gIHByb3RlY3RlZCBzY29wZTogSVNjb3BlID0ge1xuICAgIHRhcmdldElkOiB1bmRlZmluZWQsXG4gICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZSxcbiAgICBzdGF0ZTogJ3VuZGVmaW5lZCcsXG4gICAgaXNDbG9zZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ/OiBIVE1MRWxlbWVudCkge1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIHRoaXMuZGVidWcoJ2NvbnN0cnVjdG9yJywgdGhpcyk7XG4gICAgdGhpcy5pbml0KEJzNFRvZ2dsZUJ1dHRvbkNvbXBvbmVudC5vYnNlcnZlZEF0dHJpYnV0ZXMpO1xuICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLm9uKCd0b2dnbGVkJywgKHN0YXRlOiBTdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5zY29wZS5zdGF0ZSA9IHN0YXRlO1xuICAgICAgdGhpcy5zY29wZS5pc0Nsb3NlZCA9IHN0YXRlID09PSAnaGlkZGVuJztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoKSB7XG4gICAgdGhpcy5kZWJ1ZygndG9nZ2xlJyk7XG4gICAgdGhpcy5ldmVudERpc3BhdGNoZXIudHJpZ2dlcigndG9nZ2xlJywgdGhpcy5zY29wZS50YXJnZXRJZCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgaW5pdChvYnNlcnZlZEF0dHJpYnV0ZXM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHN1cGVyLmluaXQob2JzZXJ2ZWRBdHRyaWJ1dGVzKVxuICAgIC50aGVuKCh2aWV3KSA9PiB7XG4gICAgICByZXR1cm4gdmlldztcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBiZWZvcmVCaW5kKCkge1xuICAgIHRoaXMuZGVidWcoJ2JlZm9yZUJpbmQnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBhZnRlckJpbmQoKSB7XG4gICAgdGhpcy5kZWJ1ZygnYWZ0ZXJCaW5kJywgdGhpcy5zY29wZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVxdWlyZWRBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbJ3RhcmdldElkJ107XG4gIH1cblxuICBwcm90ZWN0ZWQgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZU5hbWU6IHN0cmluZywgb2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSwgbmFtZXNwYWNlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZU5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgbmFtZXNwYWNlKTtcbiAgfVxuXG4gIC8vIGRlY29uc3RydWN0b3JcbiAgcHJvdGVjdGVkIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdGVtcGxhdGUoKSB7XG4gICAgLy8gT25seSBzZXQgdGhlIGNvbXBvbmVudCB0ZW1wbGF0ZSBpZiB0aGVyZSBubyBjaGlsZHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgdGhpcy5kZWJ1ZygnRG8gbm90IHVzZSB0ZW1wbGF0ZSwgYmVjYXVzZSBlbGVtZW50IGhhcyBjaGlsZCBub2RlcycpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVidWcoJ1VzZSB0ZW1wbGF0ZScsIHRlbXBsYXRlKTtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vcnYtaWNvbi9ydi1pY29uLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Nob3BpZnktbGlua2xpc3Qvc2hvcGlmeS1saW5rbGlzdC5jb21wb25lbnQnO1xuZXhwb3J0IHsgQnM0U2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vYnM0LXNpZGViYXIvYnM0LXNpZGViYXIuY29tcG9uZW50JztcbmV4cG9ydCB7IEJzNFRvZ2dsZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnM0LXRvZ2dsZS1idXR0b24vYnM0LXRvZ2dsZS1idXR0b24uY29tcG9uZW50JztcbiIsImltcG9ydCBEZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQHJpYmFqcy9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHB1YmxpYyBzdGF0aWMgdGFnTmFtZTogc3RyaW5nID0gJ3J2LWljb24nO1xuXG4gIHByb3RlY3RlZCBkZWJ1ZyA9IERlYnVnKCdjb21wb25lbnQ6JyArIEljb25Db21wb25lbnQudGFnTmFtZSk7XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFsnc2l6ZScsICd3aWR0aCcsICdoZWlnaHQnLCAnbmFtZScsICdzcmMnLCAnY29sb3InLCAnZGlyZWN0aW9uJ107XG4gIH1cblxuICBwcm90ZWN0ZWQgc2NvcGU6IGFueSA9IHt9O1xuXG4gIHByb3RlY3RlZCBhdXRvYmluZCA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCAkZWw6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudD86IEhUTUxFbGVtZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gICAgdGhpcy4kZWwgPSAkKHRoaXMuZWwpO1xuICAgIHRoaXMuJGVsXG4gICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgIC5hdHRyKCdyb2xlJywgJ2ltZycpXG4gICAgLmFkZENsYXNzKCdpY29uc2V0Jyk7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCB2YWx1ZXNcbiAgICAvLyB0aGlzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygnc2l6ZScsIG51bGwsIDMyLCBudWxsKTtcbiAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygnZGlyZWN0aW9uJywgbnVsbCwgJ3RvcCcsIG51bGwpO1xuXG4gICAgdGhpcy5pbml0KEljb25Db21wb25lbnQub2JzZXJ2ZWRBdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIHB1YmxpYyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZTogc3RyaW5nLCBvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55LCBuYW1lc3BhY2U6IHN0cmluZyB8IG51bGwpIHtcbiAgICB0aGlzLmRlYnVnKCdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snLCBuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIG5hbWVzcGFjZSk7XG4gICAgLy8gaW5qZWN0cyB0aGUgY2hhbmdlZCBhdHRyaWJ1dGVzIHRvIHNjb3BlXG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgbmFtZXNwYWNlKTtcblxuICAgIGlmIChuYW1lID09PSAnc3JjJykge1xuICAgICAgdGhpcy4kZWxcbiAgICAgIC5sb2FkKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSA9PT0gJ2NvbG9yJykge1xuICAgICAgdGhpcy4kZWxcbiAgICAgIC5jc3Moe2NvbG9yOiBuZXdWYWx1ZX0pXG4gICAgICAucmVtb3ZlQ2xhc3MgKChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiAoY2xhc3NOYW1lLm1hdGNoICgvKF58XFxzKWNvbG9yLVxcUysvZykgfHwgW10pLmpvaW4oJyAnKTtcbiAgICAgIH0pXG4gICAgICAuYWRkQ2xhc3MoYGNvbG9yLSR7bmV3VmFsdWV9YCk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgPT09ICdzaXplJykge1xuICAgICAgY29uc3Qgc2l6ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5kZWJ1Zygnc2V0IHNpemUnLCB0aGlzLiRlbCk7XG4gICAgICB0aGlzLiRlbFxuICAgICAgLmNzcyh7aGVpZ2h0OiBzaXplLCB3aWR0aDogc2l6ZX0pXG4gICAgICAucmVtb3ZlQ2xhc3MoKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIChjbGFzc05hbWUubWF0Y2ggKC8oXnxcXHMpc2l6ZS1cXFMrL2cpIHx8IFtdKS5qb2luKCcgJyk7XG4gICAgICB9KVxuICAgICAgLmFkZENsYXNzKGBzaXplLSR7c2l6ZX1gKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSA9PT0gJ3dpZHRoJykge1xuICAgICAgY29uc3Qgd2lkdGggPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuZGVidWcoJ3NldCB3aWR0aCcsIHRoaXMuJGVsKTtcbiAgICAgIHRoaXMuJGVsXG4gICAgICAuY3NzKHt3aWR0aH0pXG4gICAgICAucmVtb3ZlQ2xhc3MoKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIChjbGFzc05hbWUubWF0Y2ggKC8oXnxcXHMpd2lkdGgtXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xuICAgICAgfSlcbiAgICAgIC5hZGRDbGFzcyhgd2lkdGgtJHt3aWR0aH1gKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSA9PT0gJ2hlaWdodCcpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5kZWJ1Zygnc2V0IGhlaWdodCcsIHRoaXMuJGVsKTtcbiAgICAgIHRoaXMuJGVsXG4gICAgICAuY3NzKHtoZWlnaHR9KVxuICAgICAgLnJlbW92ZUNsYXNzKChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiAoY2xhc3NOYW1lLm1hdGNoICgvKF58XFxzKWhlaWdodC1cXFMrL2cpIHx8IFtdKS5qb2luKCcgJyk7XG4gICAgICB9KVxuICAgICAgLmFkZENsYXNzKGBoZWlnaHQtJHtoZWlnaHR9YCk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgPT09ICdkaXJlY3Rpb24nKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBuZXdWYWx1ZTtcbiAgICAgIGxldCBjbGFzc1N0cmluZyA9IGBkaXJlY3Rpb24tJHtkaXJlY3Rpb259YDtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0JyApIHtcbiAgICAgICAgY2xhc3NTdHJpbmcgKz0gJyByb3RhdGUtMjcwJztcbiAgICAgIH0gZWxzZSBpZiAoIGRpcmVjdGlvbiA9PT0gJ2xlZnQtdG9wJyB8fCBkaXJlY3Rpb24gPT09ICdsZWZ0LXVwJyB8fCBkaXJlY3Rpb24gPT09ICd0b3AtbGVmdCcgfHwgZGlyZWN0aW9uID09PSAndXAtbGVmdCcgKSB7XG4gICAgICAgIGNsYXNzU3RyaW5nICs9ICcgcm90YXRlLTMxNScgO1xuICAgICAgfSBlbHNlIGlmICggZGlyZWN0aW9uID09PSAndG9wJyB8fCBkaXJlY3Rpb24gPT09ICd1cCcgKSB7XG4gICAgICAgIGNsYXNzU3RyaW5nICs9ICcgcm90YXRlLTAnO1xuICAgICAgfSBlbHNlIGlmICggZGlyZWN0aW9uID09PSAndG9wLXJpZ2h0JyB8fCBkaXJlY3Rpb24gPT09ICd1cC1yaWdodCcgfHwgZGlyZWN0aW9uID09PSAncmlnaHQtdG9wJyB8fCBkaXJlY3Rpb24gPT09ICdyaWdodC11cCcpIHtcbiAgICAgICAgY2xhc3NTdHJpbmcgKz0gJyByb3RhdGUtNDUnO1xuICAgICAgfSBlbHNlIGlmICggZGlyZWN0aW9uID09PSAncmlnaHQnICkge1xuICAgICAgICBjbGFzc1N0cmluZyArPSAnIHJvdGF0ZS05MCc7XG4gICAgICB9IGVsc2UgaWYgKCBkaXJlY3Rpb24gPT09ICdyaWdodC1ib3R0b20nIHx8IGRpcmVjdGlvbiA9PT0gJ3JpZ2h0LWRvd24nIHx8IGRpcmVjdGlvbiA9PT0gJ2JvdHRvbS1yaWdodCcgfHwgZGlyZWN0aW9uID09PSAnZG93bi1yaWdodCcgKSB7XG4gICAgICAgIGNsYXNzU3RyaW5nICs9ICcgcm90YXRlLTEzNSc7XG4gICAgICB9IGVsc2UgaWYgKCBkaXJlY3Rpb24gPT09ICdib3R0b20nIHx8IGRpcmVjdGlvbiA9PT0gJ2Rvd24nICkge1xuICAgICAgICBjbGFzc1N0cmluZyArPSAnIHJvdGF0ZS0xODAnO1xuICAgICAgfSBlbHNlIGlmICggZGlyZWN0aW9uID09PSAnbGVmdC1ib3R0b20nIHx8IGRpcmVjdGlvbiA9PT0gJ2xlZnQtZG93bicgfHwgZGlyZWN0aW9uID09PSAnYm90dG9tLWxlZnQnIHx8IGRpcmVjdGlvbiA9PT0gJ2Rvd24tbGVmdCcgKSB7XG4gICAgICAgIGNsYXNzU3RyaW5nICs9ICcgcm90YXRlLTIyNSc7XG4gICAgICB9XG4gICAgICB0aGlzLiRlbFxuICAgICAgLmNzcyh7aGVpZ2h0OiBuZXdWYWx1ZSwgd2lkdGg6IG5ld1ZhbHVlfSlcbiAgICAgIC5yZW1vdmVDbGFzcygoaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gKGNsYXNzTmFtZS5tYXRjaCAoLyhefFxccylkaXJlY3Rpb24tXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xuICAgICAgfSlcbiAgICAgIC5yZW1vdmVDbGFzcygoaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gKGNsYXNzTmFtZS5tYXRjaCAoLyhefFxccylyb3RhdGUtXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xuICAgICAgfSlcbiAgICAgIC5hZGRDbGFzcyhjbGFzc1N0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1uYXYgcnYtY2xhc3M9bGlua2xpc3QuaGFuZGxlIHJ2LWNsYXNzLW5hdi1waWxscz1waWxscyBydi1jbGFzcy13LTEwMD12ZXJ0aWNhbCBydi1jbGFzcy1mbGV4LWNvbHVtbj12ZXJ0aWNhbCBydi1jbGFzcy1mbGV4LXJvdz1cXFwidmVydGljYWwgfCBub3RcXFwiPiA8ZGl2IGNsYXNzPVxcXCJuYXYtaXRlbSBuYXYtaXRlbS1sZXZlbC0wXFxcIiBydi1lYWNoLWxpbms9bGlua2xpc3QubGlua3M+IDxhIGNsYXNzPW5hdi1saW5rIHJ2LWNsYXNzLWFjdGl2ZT1saW5rLmFjdGl2ZSBydi1yb3V0ZS1jbGFzcy1hY3RpdmU9bGluay51cmwgcnYtcm91dGU9bGluay51cmwgcnYtaHJlZj1saW5rLnVybD4gPHNwYW4gcnYtaTE4bi10ZXh0PVxcXCJsaW5rLnRpdGxlIHwgaGFuZGxlaXplIHwgcHJlcGVuZCAnbWVudXMuJ1xcXCI+e2xpbmsudGl0bGV9PC9zcGFuPiA8L2E+IDxkaXYgY2xhc3M9XFxcIm5hdi1pdGVtIG5hdi1pdGVtLWxldmVsLTFcXFwiIHJ2LWVhY2gtc3VibGluaz1saW5rLmxpbmtzPiA8YSBjbGFzcz1uYXYtbGluayBydi1jbGFzcz1cXFwic3VibGluay5sZXZlbCB8IHByZXBlbmQgJ2xldmVsLSdcXFwiIHJ2LWNsYXNzLWFjdGl2ZT1zdWJsaW5rLmFjdGl2ZSBydi1yb3V0ZS1jbGFzcy1hY3RpdmU9bGluay51cmwgcnYtcm91dGU9c3VibGluay51cmwgcnYtaHJlZj1zdWJsaW5rLnVybD4gPHNwYW4gcnYtaTE4bi10ZXh0PVxcXCJzdWJsaW5rLnRpdGxlIHwgaGFuZGxlaXplIHwgcHJlcGVuZCAnbWVudXMuJ1xcXCI+e3N1YmxpbmsudGl0bGV9PC9zcGFuPiA8L2E+IDxkaXYgY2xhc3M9XFxcIm5hdi1pdGVtIG5hdi1pdGVtLWxldmVsLTJcXFwiIHJ2LWVhY2gtc3Vic3VibGluaz1zdWJsaW5rLmxpbmtzPiA8YSBjbGFzcz1uYXYtbGluayBydi1jbGFzcz1cXFwic3Vic3VibGluay5sZXZlbCB8IHByZXBlbmQgJ2xldmVsLSdcXFwiIHJ2LWNsYXNzLWFjdGl2ZT1zdWJzdWJsaW5rLmFjdGl2ZSBydi1yb3V0ZS1jbGFzcy1hY3RpdmU9bGluay51cmwgcnYtcm91dGU9c3Vic3VibGluay51cmwgcnYtaHJlZj1zdWJzdWJsaW5rLnVybD4gPHNwYW4gcnYtaTE4bi10ZXh0PVxcXCJzdWJzdWJsaW5rLnRpdGxlIHwgaGFuZGxlaXplIHwgcHJlcGVuZCAnbWVudXMuJ1xcXCI+e3N1YnN1YmxpbmsudGl0bGV9PC9zcGFuPiA8L2E+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvbmF2PlwiOyIsImltcG9ydCBEZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAcmliYWpzL2NvcmUnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vc2hvcGlmeS1saW5rbGlzdC5jb21wb25lbnQuaHRtbCc7XG5cbmludGVyZmFjZSBJTGluayB7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgY2hpbGRfYWN0aXZlOiBib29sZWFuO1xuICBoYW5kbGU6IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlcjtcbiAgbGV2ZWxzOiBudW1iZXI7XG4gIGxpbmtzOiBBcnJheTxJTGluaz47XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHR5cGU6ICdwYWdlX2xpbmsnO1xuICB1cmw6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElMaW5rbGlzdCB7XG4gIGhhbmRsZTogc3RyaW5nO1xuICBpZDogc3RyaW5nIHwgbnVsbDtcbiAgbGV2ZWxzOiBudW1iZXI7XG4gIGxpbmtzOiBBcnJheTxJTGluaz47XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJU2NvcGUge1xuICBsaW5rbGlzdD86IElMaW5rbGlzdDtcbn1cblxuLyoqXG4gKiBzaG9waWZ5LWZpbHRlclxuICovXG5leHBvcnQgY2xhc3MgU2hvcGlmeUxpbmtsaXN0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBwdWJsaWMgc3RhdGljIHRhZ05hbWU6IHN0cmluZyA9ICdzaG9waWZ5LWxpbmtsaXN0JztcblxuICBwcm90ZWN0ZWQgZGVidWcgPSBEZWJ1ZygnY29tcG9uZW50OicgKyBTaG9waWZ5TGlua2xpc3RDb21wb25lbnQudGFnTmFtZSk7XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFsnbmFtZScsICdsaW5rbGlzdCcsICdwaWxscycsICd2ZXJ0aWNhbCddO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNjb3BlOiBJU2NvcGUgPSB7XG5cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50PzogSFRNTEVsZW1lbnQpIHtcbiAgICBzdXBlcihlbGVtZW50KTtcbiAgICB0aGlzLmluaXQoU2hvcGlmeUxpbmtsaXN0Q29tcG9uZW50Lm9ic2VydmVkQXR0cmlidXRlcyk7XG4gIH1cblxuICBwdWJsaWMgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWU6IHN0cmluZywgb2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSwgbmFtZXNwYWNlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgLy8gaW5qZWN0cyB0aGUgY2hhbmdlZCBhdHRyaWJ1dGVzIHRvIHNjb3BlXG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgbmFtZXNwYWNlKTtcblxuICAgIC8vIHNldCBsaW5rbGlzdCBieSBuYW1lXG4gICAgaWYgKG5hbWUgPT09ICduYW1lJykge1xuICAgICAgdGhpcy5zY29wZS5saW5rbGlzdCA9IHdpbmRvdy5tb2RlbC5zeXN0ZW0ubGlua2xpc3RzW25ld1ZhbHVlXTtcbiAgICAgIHRoaXMuZGVidWcoJ2xpbmtsaXN0JywgdGhpcy5zY29wZS5saW5rbGlzdCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlcXVpcmVkQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gWydsaW5rbGlzdCddO1xuICB9XG5cbiAgLyoqXG4gICAqIE9ubHkgc2V0IHRoZSBjb21wb25lbnQgdGVtcGxhdGUgaWYgdGhlcmUgbm8gY2hpbGRzIGFscmVhZHlcbiAgICovXG4gIHByb3RlY3RlZCB0ZW1wbGF0ZSgpIHtcbiAgICBpZiAodGhpcy5lbC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBSaWJhLFxuICBKUXVlcnksXG4gIGNvcmVNb2R1bGUsXG4gIEV2ZW50RGlzcGF0Y2hlcixcbn0gZnJvbSAnQHJpYmFqcy9jb3JlJztcbi8vIGltcG9ydCBzaG9waWZ5TW9kdWxlIGZyb20gJ0ByaWJhanMvc2hvcGlmeSc7XG5pbXBvcnQgcm91dGVyTW9kdWxlIGZyb20gJ0ByaWJhanMvcm91dGVyJztcbi8vIGltcG9ydCB7IGkxOG5Nb2R1bGUgfSBmcm9tICdAcmliYWpzL2kxOG4nO1xuaW1wb3J0IHsgYnM0TW9kdWxlIH0gZnJvbSAnQHJpYmFqcy9iczQnO1xuLy8gaW1wb3J0IHsgTG9jYWxlc1NlcnZpY2UgfSBmcm9tICdAcmliYWpzL3Nob3BpZnktdGRhJztcblxuaW1wb3J0ICogYXMgQ3VzdG9tQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgKiBhcyBQcmlzbSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCAncHJpc21qcy9wbHVnaW5zL3Rvb2xiYXIvcHJpc20tdG9vbGJhcic7XG5pbXBvcnQgJ3ByaXNtanMvcGx1Z2lucy9jb3B5LXRvLWNsaXBib2FyZC9wcmlzbS1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jc3MnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdCc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW1hcmt1cCc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0JztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNhc3MnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tc2Nzcyc7XG5cbmV4cG9ydCBjbGFzcyBNYWluIHtcblxuICBwcml2YXRlIHJpYmEgPSBuZXcgUmliYSgpO1xuXG4gIHByaXZhdGUgZGlzcGF0Y2hlciA9IG5ldyBFdmVudERpc3BhdGNoZXIoJ21haW4nKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJpYmEubW9kdWxlLnJlZ2lzdChjb3JlTW9kdWxlKTtcbiAgICB0aGlzLnJpYmEubW9kdWxlLnJlZ2lzdChyb3V0ZXJNb2R1bGUpO1xuICAgIC8vIHRoaXMucmliYS5tb2R1bGUucmVnaXN0KHNob3BpZnlNb2R1bGUpO1xuICAgIC8vIHRoaXMucmliYS5tb2R1bGUucmVnaXN0KGkxOG5Nb2R1bGUodGhpcy5sb2NhbGVzU2VydmljZSkpO1xuICAgIHRoaXMucmliYS5tb2R1bGUucmVnaXN0KGJzNE1vZHVsZSk7XG5cbiAgICAvLyBSZWdpc3QgY3VzdG9tIGNvbXBvbmVudHNcbiAgICB0aGlzLnJpYmEubW9kdWxlLnJlZ2lzdCh7XG4gICAgICBjb21wb25lbnRzOiBDdXN0b21Db21wb25lbnRzLFxuICAgICAgLy8gYmluZGVyczogey4uLmN1c3RvbUJpbmRlcnN9LFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5lcnJvcignaGVsbG8hJyk7XG4gICAgdGhpcy5kaXNwYXRjaGVyLm9uKCduZXdQYWdlUmVhZHknLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCduZXdQYWdlUmVhZHknKTtcbiAgICAgIFByaXNtLmhpZ2hsaWdodEFsbCgpO1xuICAgIH0pO1xuXG4gICAgLy8gd2luZG93Lm1vZGVsLnN5c3RlbS5zaG9waWZ5ID0gKHdpbmRvdyBhcyBhbnkpLlNob3BpZnk7XG4gICAgdGhpcy5yaWJhLmJpbmQoSlF1ZXJ5KCdib2R5JylbMF0sIHdpbmRvdy5tb2RlbCk7XG4gIH1cbn1cblxuSlF1ZXJ5KCgkOiBKUXVlcnlTdGF0aWMpID0+IHtcbiAgY29uc3QgbWFpbiA9IG5ldyBNYWluKCk7XG59KTtcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=