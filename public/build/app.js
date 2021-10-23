(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _govuk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./govuk */ "./assets/govuk.js");
/* harmony import */ var _govuk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_govuk__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application




/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/govuk.js":
/*!*************************!*\
  !*** ./assets/govuk.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.define-getter.js */ "./node_modules/core-js/modules/es.object.define-getter.js");

__webpack_require__(/*! core-js/modules/es.object.define-setter.js */ "./node_modules/core-js/modules/es.object.define-setter.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(this, function (exports) {
  'use strict';
  /**
   * TODO: Ideally this would be a NodeList.prototype.forEach polyfill
   * This seems to fail in IE8, requires more investigation.
   * See: https://github.com/imagitama/nodelist-foreach-polyfill
   */

  function nodeListForEach(nodes, callback) {
    if (window.NodeList.prototype.forEach) {
      return nodes.forEach(callback);
    }

    for (var i = 0; i < nodes.length; i++) {
      callback.call(window, nodes[i], i, nodes);
    }
  } // Used to generate a unique string, allows multiple instances of the component without
  // Them conflicting with each other.
  // https://stackoverflow.com/a/8809472


  function generateUniqueID() {
    var d = new Date().getTime();

    if (typeof window.performance !== 'undefined' && typeof window.performance.now === 'function') {
      d += window.performance.now(); // use high-precision timer if available
    }

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
  }

  (function (undefined) {
    // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Object/defineProperty/detect.js
    var detect = // In IE8, defineProperty could only act on DOM elements, so full support
    // for the feature requires the ability to set a property on an arbitrary object
    'defineProperty' in Object && function () {
      try {
        var a = {};
        Object.defineProperty(a, 'test', {
          value: 42
        });
        return true;
      } catch (e) {
        return false;
      }
    }();

    if (detect) return; // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.defineProperty&flags=always

    (function (nativeDefineProperty) {
      var supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');
      var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
      var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';

      Object.defineProperty = function defineProperty(object, property, descriptor) {
        // Where native support exists, assume it
        if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
          return nativeDefineProperty(object, property, descriptor);
        }

        if (object === null || !(object instanceof Object || _typeof(object) === 'object')) {
          throw new TypeError('Object.defineProperty called on non-object');
        }

        if (!(descriptor instanceof Object)) {
          throw new TypeError('Property description must be an object');
        }

        var propertyString = String(property);
        var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;

        var getterType = 'get' in descriptor && _typeof(descriptor.get);

        var setterType = 'set' in descriptor && _typeof(descriptor.set); // handle descriptor.get


        if (getterType) {
          if (getterType !== 'function') {
            throw new TypeError('Getter must be a function');
          }

          if (!supportsAccessors) {
            throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
          }

          if (hasValueOrWritable) {
            throw new TypeError(ERR_VALUE_ACCESSORS);
          }

          Object.__defineGetter__.call(object, propertyString, descriptor.get);
        } else {
          object[propertyString] = descriptor.value;
        } // handle descriptor.set


        if (setterType) {
          if (setterType !== 'function') {
            throw new TypeError('Setter must be a function');
          }

          if (!supportsAccessors) {
            throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
          }

          if (hasValueOrWritable) {
            throw new TypeError(ERR_VALUE_ACCESSORS);
          }

          Object.__defineSetter__.call(object, propertyString, descriptor.set);
        } // OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above


        if ('value' in descriptor) {
          object[propertyString] = descriptor.value;
        }

        return object;
      };
    })(Object.defineProperty);
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) && __webpack_require__.g || {});
  (function (undefined) {
    // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Function/prototype/bind/detect.js
    var detect = ('bind' in Function.prototype);
    if (detect) return; // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Function.prototype.bind&flags=always

    Object.defineProperty(Function.prototype, 'bind', {
      value: function bind(that) {
        // .length is 1
        // add necessary es5-shim utilities
        var $Array = Array;
        var $Object = Object;
        var ObjectPrototype = $Object.prototype;
        var ArrayPrototype = $Array.prototype;

        var Empty = function Empty() {};

        var to_string = ObjectPrototype.toString;
        var hasToStringTag = typeof Symbol === 'function' && _typeof(Symbol.toStringTag) === 'symbol';
        var isCallable;
        /* inlined from https://npmjs.com/is-callable */

        var fnToStr = Function.prototype.toString,
            tryFunctionObject = function tryFunctionObject(value) {
          try {
            fnToStr.call(value);
            return true;
          } catch (e) {
            return false;
          }
        },
            fnClass = '[object Function]',
            genClass = '[object GeneratorFunction]';

        isCallable = function isCallable(value) {
          if (typeof value !== 'function') {
            return false;
          }

          if (hasToStringTag) {
            return tryFunctionObject(value);
          }

          var strClass = to_string.call(value);
          return strClass === fnClass || strClass === genClass;
        };

        var array_slice = ArrayPrototype.slice;
        var array_concat = ArrayPrototype.concat;
        var array_push = ArrayPrototype.push;
        var max = Math.max; // /add necessary es5-shim utilities
        // 1. Let Target be the this value.

        var target = this; // 2. If IsCallable(Target) is false, throw a TypeError exception.

        if (!isCallable(target)) {
          throw new TypeError('Function.prototype.bind called on incompatible ' + target);
        } // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used


        var args = array_slice.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.

        var bound;

        var binder = function binder() {
          if (this instanceof bound) {
            // 15.3.4.5.2 [[Construct]]
            // When the [[Construct]] internal method of a function object,
            // F that was created using the bind function is called with a
            // list of arguments ExtraArgs, the following steps are taken:
            // 1. Let target be the value of F's [[TargetFunction]]
            //   internal property.
            // 2. If target has no [[Construct]] internal method, a
            //   TypeError exception is thrown.
            // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
            //   property.
            // 4. Let args be a new list containing the same values as the
            //   list boundArgs in the same order followed by the same
            //   values as the list ExtraArgs in the same order.
            // 5. Return the result of calling the [[Construct]] internal
            //   method of target providing args as the arguments.
            var result = target.apply(this, array_concat.call(args, array_slice.call(arguments)));

            if ($Object(result) === result) {
              return result;
            }

            return this;
          } else {
            // 15.3.4.5.1 [[Call]]
            // When the [[Call]] internal method of a function object, F,
            // which was created using the bind function is called with a
            // this value and a list of arguments ExtraArgs, the following
            // steps are taken:
            // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
            //   property.
            // 2. Let boundThis be the value of F's [[BoundThis]] internal
            //   property.
            // 3. Let target be the value of F's [[TargetFunction]] internal
            //   property.
            // 4. Let args be a new list containing the same values as the
            //   list boundArgs in the same order followed by the same
            //   values as the list ExtraArgs in the same order.
            // 5. Return the result of calling the [[Call]] internal method
            //   of target providing boundThis as the this value and
            //   providing args as the arguments.
            // equiv: target.call(this, ...boundArgs, ...args)
            return target.apply(that, array_concat.call(args, array_slice.call(arguments)));
          }
        }; // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.


        var boundLength = max(0, target.length - args.length); // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.

        var boundArgs = [];

        for (var i = 0; i < boundLength; i++) {
          array_push.call(boundArgs, '$' + i);
        } // XXX Build a dynamic function with desired amount of arguments is the only
        // way to set the length property of a function.
        // In environments where Content Security Policies enabled (Chrome extensions,
        // for ex.) all use of eval or Function costructor throws an exception.
        // However in all of these environments Function.prototype.bind exists
        // and so this code will never be executed.


        bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

        if (target.prototype) {
          Empty.prototype = target.prototype;
          bound.prototype = new Empty(); // Clean up dangling references.

          Empty.prototype = null;
        } // TODO
        // 18. Set the [[Extensible]] internal property of F to true.
        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.
        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.
        // 22. Return F.


        return bound;
      }
    });
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) && __webpack_require__.g || {});
  (function (undefined) {
    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/master/packages/polyfill-library/polyfills/DOMTokenList/detect.js
    var detect = 'DOMTokenList' in this && function (x) {
      return 'classList' in x ? !x.classList.toggle('x', false) && !x.className : true;
    }(document.createElement('x'));

    if (detect) return; // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-service/master/packages/polyfill-library/polyfills/DOMTokenList/polyfill.js

    (function (global) {
      var nativeImpl = "DOMTokenList" in global && global.DOMTokenList;

      if (!nativeImpl || !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg') && !(document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList)) {
        global.DOMTokenList = function () {
          // eslint-disable-line no-unused-vars
          var dpSupport = true;

          var defineGetter = function defineGetter(object, name, fn, configurable) {
            if (Object.defineProperty) Object.defineProperty(object, name, {
              configurable: false === dpSupport ? true : !!configurable,
              get: fn
            });else object.__defineGetter__(name, fn);
          };
          /** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */


          try {
            defineGetter({}, "support");
          } catch (e) {
            dpSupport = false;
          }

          var _DOMTokenList = function _DOMTokenList(el, prop) {
            var that = this;
            var tokens = [];
            var tokenMap = {};
            var length = 0;
            var maxLength = 0;

            var addIndexGetter = function addIndexGetter(i) {
              defineGetter(that, i, function () {
                preop();
                return tokens[i];
              }, false);
            };

            var reindex = function reindex() {
              /** Define getter functions for array-like access to the tokenList's contents. */
              if (length >= maxLength) for (; maxLength < length; ++maxLength) {
                addIndexGetter(maxLength);
              }
            };
            /** Helper function called at the start of each class method. Internal use only. */


            var preop = function preop() {
              var error;
              var i;
              var args = arguments;
              var rSpace = /\s+/;
              /** Validate the token/s passed to an instance method, if any. */

              if (args.length) for (i = 0; i < args.length; ++i) {
                if (rSpace.test(args[i])) {
                  error = new SyntaxError('String "' + args[i] + '" ' + "contains" + ' an invalid character');
                  error.code = 5;
                  error.name = "InvalidCharacterError";
                  throw error;
                }
              }
              /** Split the new value apart by whitespace*/

              if (_typeof(el[prop]) === "object") {
                tokens = ("" + el[prop].baseVal).replace(/^\s+|\s+$/g, "").split(rSpace);
              } else {
                tokens = ("" + el[prop]).replace(/^\s+|\s+$/g, "").split(rSpace);
              }
              /** Avoid treating blank strings as single-item token lists */


              if ("" === tokens[0]) tokens = [];
              /** Repopulate the internal token lists */

              tokenMap = {};

              for (i = 0; i < tokens.length; ++i) {
                tokenMap[tokens[i]] = true;
              }

              length = tokens.length;
              reindex();
            };
            /** Populate our internal token list if the targeted attribute of the subject element isn't empty. */


            preop();
            /** Return the number of tokens in the underlying string. Read-only. */

            defineGetter(that, "length", function () {
              preop();
              return length;
            });
            /** Override the default toString/toLocaleString methods to return a space-delimited list of tokens when typecast. */

            that.toLocaleString = that.toString = function () {
              preop();
              return tokens.join(" ");
            };

            that.item = function (idx) {
              preop();
              return tokens[idx];
            };

            that.contains = function (token) {
              preop();
              return !!tokenMap[token];
            };

            that.add = function () {
              preop.apply(that, args = arguments);

              for (var args, token, i = 0, l = args.length; i < l; ++i) {
                token = args[i];

                if (!tokenMap[token]) {
                  tokens.push(token);
                  tokenMap[token] = true;
                }
              }
              /** Update the targeted attribute of the attached element if the token list's changed. */


              if (length !== tokens.length) {
                length = tokens.length >>> 0;

                if (_typeof(el[prop]) === "object") {
                  el[prop].baseVal = tokens.join(" ");
                } else {
                  el[prop] = tokens.join(" ");
                }

                reindex();
              }
            };

            that.remove = function () {
              preop.apply(that, args = arguments);
              /** Build a hash of token names to compare against when recollecting our token list. */

              for (var args, ignore = {}, i = 0, t = []; i < args.length; ++i) {
                ignore[args[i]] = true;
                delete tokenMap[args[i]];
              }
              /** Run through our tokens list and reassign only those that aren't defined in the hash declared above. */


              for (i = 0; i < tokens.length; ++i) {
                if (!ignore[tokens[i]]) t.push(tokens[i]);
              }

              tokens = t;
              length = t.length >>> 0;
              /** Update the targeted attribute of the attached element. */

              if (_typeof(el[prop]) === "object") {
                el[prop].baseVal = tokens.join(" ");
              } else {
                el[prop] = tokens.join(" ");
              }

              reindex();
            };

            that.toggle = function (token, force) {
              preop.apply(that, [token]);
              /** Token state's being forced. */

              if (undefined !== force) {
                if (force) {
                  that.add(token);
                  return true;
                } else {
                  that.remove(token);
                  return false;
                }
              }
              /** Token already exists in tokenList. Remove it, and return FALSE. */


              if (tokenMap[token]) {
                that.remove(token);
                return false;
              }
              /** Otherwise, add the token and return TRUE. */


              that.add(token);
              return true;
            };

            return that;
          };

          return _DOMTokenList;
        }();
      } // Add second argument to native DOMTokenList.toggle() if necessary


      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.toggle('x', false);
        if (!e.classList.contains('x')) return;

        e.classList.constructor.prototype.toggle = function toggle(token
        /*, force*/
        ) {
          var force = arguments[1];

          if (force === undefined) {
            var add = !this.contains(token);
            this[add ? 'add' : 'remove'](token);
            return add;
          }

          force = !!force;
          this[force ? 'add' : 'remove'](token);
          return force;
        };
      })(); // Add multiple arguments to native DOMTokenList.add() if necessary


      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.add('a', 'b');
        if (e.classList.contains('b')) return;
        var _native = e.classList.constructor.prototype.add;

        e.classList.constructor.prototype.add = function () {
          var args = arguments;
          var l = arguments.length;

          for (var i = 0; i < l; i++) {
            _native.call(this, args[i]);
          }
        };
      })(); // Add multiple arguments to native DOMTokenList.remove() if necessary


      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.add('a');
        e.classList.add('b');
        e.classList.remove('a', 'b');
        if (!e.classList.contains('b')) return;
        var _native2 = e.classList.constructor.prototype.remove;

        e.classList.constructor.prototype.remove = function () {
          var args = arguments;
          var l = arguments.length;

          for (var i = 0; i < l; i++) {
            _native2.call(this, args[i]);
          }
        };
      })();
    })(this);
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) && __webpack_require__.g || {});
  (function (undefined) {
    // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Document/detect.js
    var detect = ("Document" in this);
    if (detect) return; // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Document&flags=always

    if (typeof WorkerGlobalScope === "undefined" && typeof importScripts !== "function") {
      if (this.HTMLDocument) {
        // IE8
        // HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.
        this.Document = this.HTMLDocument;
      } else {
        // Create an empty function to act as the missing constructor for the document object, attach the document object as its prototype.  The function needs to be anonymous else it is hoisted and causes the feature detect to prematurely pass, preventing the assignments below being made.
        this.Document = this.HTMLDocument = document.constructor = new Function('return function Document() {}')();
        this.Document.prototype = document;
      }
    }
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) && __webpack_require__.g || {});
  (function (undefined) {
    // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Element/detect.js
    var detect = 'Element' in this && 'HTMLElement' in this;
    if (detect) return; // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Element&flags=always

    (function () {
      // IE8
      if (window.Element && !window.HTMLElement) {
        window.HTMLElement = window.Element;
        return;
      } // create Element constructor


      window.Element = window.HTMLElement = new Function('return function Element() {}')(); // generate sandboxed iframe

      var vbody = document.appendChild(document.createElement('body'));
      var frame = vbody.appendChild(document.createElement('iframe')); // use sandboxed iframe to replicate Element functionality

      var frameDocument = frame.contentWindow.document;
      var prototype = Element.prototype = frameDocument.appendChild(frameDocument.createElement('*'));
      var cache = {}; // polyfill Element.prototype on an element

      var shiv = function shiv(element, deep) {
        var childNodes = element.childNodes || [],
            index = -1,
            key,
            value,
            childNode;

        if (element.nodeType === 1 && element.constructor !== Element) {
          element.constructor = Element;

          for (key in cache) {
            value = cache[key];
            element[key] = value;
          }
        }

        while (childNode = deep && childNodes[++index]) {
          shiv(childNode, deep);
        }

        return element;
      };

      var elements = document.getElementsByTagName('*');
      var nativeCreateElement = document.createElement;
      var interval;
      var loopLimit = 100;
      prototype.attachEvent('onpropertychange', function (event) {
        var propertyName = event.propertyName,
            nonValue = !cache.hasOwnProperty(propertyName),
            newValue = prototype[propertyName],
            oldValue = cache[propertyName],
            index = -1,
            element;

        while (element = elements[++index]) {
          if (element.nodeType === 1) {
            if (nonValue || element[propertyName] === oldValue) {
              element[propertyName] = newValue;
            }
          }
        }

        cache[propertyName] = newValue;
      });
      prototype.constructor = Element;

      if (!prototype.hasAttribute) {
        // <Element>.hasAttribute
        prototype.hasAttribute = function hasAttribute(name) {
          return this.getAttribute(name) !== null;
        };
      } // Apply Element prototype to the pre-existing DOM as soon as the body element appears.


      function bodyCheck() {
        if (!loopLimit--) clearTimeout(interval);

        if (document.body && !document.body.prototype && /(complete|interactive)/.test(document.readyState)) {
          shiv(document, true);
          if (interval && document.body.prototype) clearTimeout(interval);
          return !!document.body.prototype;
        }

        return false;
      }

      if (!bodyCheck()) {
        document.onreadystatechange = bodyCheck;
        interval = setInterval(bodyCheck, 25);
      } // Apply to any new elements created after load


      document.createElement = function createElement(nodeName) {
        var element = nativeCreateElement(String(nodeName).toLowerCase());
        return shiv(element);
      }; // remove sandboxed iframe


      document.removeChild(vbody);
    })();
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) && __webpack_require__.g || {});
  (function (undefined) {
    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/8717a9e04ac7aff99b4980fbedead98036b0929a/packages/polyfill-library/polyfills/Element/prototype/classList/detect.js
    var detect = 'document' in this && "classList" in document.documentElement && 'Element' in this && 'classList' in Element.prototype && function () {
      var e = document.createElement('span');
      e.classList.add('a', 'b');
      return e.classList.contains('b');
    }();

    if (detect) return; // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Element.prototype.classList&flags=always

    (function (global) {
      var dpSupport = true;

      var defineGetter = function defineGetter(object, name, fn, configurable) {
        if (Object.defineProperty) Object.defineProperty(object, name, {
          configurable: false === dpSupport ? true : !!configurable,
          get: fn
        });else object.__defineGetter__(name, fn);
      };
      /** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */


      try {
        defineGetter({}, "support");
      } catch (e) {
        dpSupport = false;
      }
      /** Polyfills a property with a DOMTokenList */


      var addProp = function addProp(o, name, attr) {
        defineGetter(o.prototype, name, function () {
          var tokenList;
          var THIS = this,

          /** Prevent this from firing twice for some reason. What the hell, IE. */
          gibberishProperty = "__defineGetter__" + "DEFINE_PROPERTY" + name;
          if (THIS[gibberishProperty]) return tokenList;
          THIS[gibberishProperty] = true;
          /**
           * IE8 can't define properties on native JavaScript objects, so we'll use a dumb hack instead.
           *
           * What this is doing is creating a dummy element ("reflection") inside a detached phantom node ("mirror")
           * that serves as the target of Object.defineProperty instead. While we could simply use the subject HTML
           * element instead, this would conflict with element types which use indexed properties (such as forms and
           * select lists).
           */

          if (false === dpSupport) {
            var visage;
            var mirror = addProp.mirror || document.createElement("div");
            var reflections = mirror.childNodes;
            var l = reflections.length;

            for (var i = 0; i < l; ++i) {
              if (reflections[i]._R === THIS) {
                visage = reflections[i];
                break;
              }
            }
            /** Couldn't find an element's reflection inside the mirror. Materialise one. */


            visage || (visage = mirror.appendChild(document.createElement("div")));
            tokenList = DOMTokenList.call(visage, THIS, attr);
          } else tokenList = new DOMTokenList(THIS, attr);

          defineGetter(THIS, name, function () {
            return tokenList;
          });
          delete THIS[gibberishProperty];
          return tokenList;
        }, true);
      };

      addProp(global.Element, "classList", "className");
      addProp(global.HTMLElement, "classList", "className");
      addProp(global.HTMLLinkElement, "relList", "rel");
      addProp(global.HTMLAnchorElement, "relList", "rel");
      addProp(global.HTMLAreaElement, "relList", "rel");
    })(this);
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) && __webpack_require__.g || {});

  function Accordion($module) {
    this.$module = $module;
    this.moduleId = $module.getAttribute('id');
    this.$sections = $module.querySelectorAll('.govuk-accordion__section');
    this.$openAllButton = '';
    this.browserSupportsSessionStorage = helper.checkForSessionStorage();
    this.controlsClass = 'govuk-accordion__controls';
    this.openAllClass = 'govuk-accordion__open-all';
    this.iconClass = 'govuk-accordion__icon';
    this.sectionHeaderClass = 'govuk-accordion__section-header';
    this.sectionHeaderFocusedClass = 'govuk-accordion__section-header--focused';
    this.sectionHeadingClass = 'govuk-accordion__section-heading';
    this.sectionSummaryClass = 'govuk-accordion__section-summary';
    this.sectionButtonClass = 'govuk-accordion__section-button';
    this.sectionExpandedClass = 'govuk-accordion__section--expanded';
  } // Initialize component


  Accordion.prototype.init = function () {
    // Check for module
    if (!this.$module) {
      return;
    }

    this.initControls();
    this.initSectionHeaders(); // See if "Open all" button text should be updated

    var areAllSectionsOpen = this.checkIfAllSectionsOpen();
    this.updateOpenAllButton(areAllSectionsOpen);
  }; // Initialise controls and set attributes


  Accordion.prototype.initControls = function () {
    // Create "Open all" button and set attributes
    this.$openAllButton = document.createElement('button');
    this.$openAllButton.setAttribute('type', 'button');
    this.$openAllButton.innerHTML = 'Open all <span class="govuk-visually-hidden">sections</span>';
    this.$openAllButton.setAttribute('class', this.openAllClass);
    this.$openAllButton.setAttribute('aria-expanded', 'false');
    this.$openAllButton.setAttribute('type', 'button'); // Create control wrapper and add controls to it

    var accordionControls = document.createElement('div');
    accordionControls.setAttribute('class', this.controlsClass);
    accordionControls.appendChild(this.$openAllButton);
    this.$module.insertBefore(accordionControls, this.$module.firstChild); // Handle events for the controls

    this.$openAllButton.addEventListener('click', this.onOpenOrCloseAllToggle.bind(this));
  }; // Initialise section headers


  Accordion.prototype.initSectionHeaders = function () {
    // Loop through section headers
    nodeListForEach(this.$sections, function ($section, i) {
      // Set header attributes
      var header = $section.querySelector('.' + this.sectionHeaderClass);
      this.initHeaderAttributes(header, i);
      this.setExpanded(this.isExpanded($section), $section); // Handle events

      header.addEventListener('click', this.onSectionToggle.bind(this, $section)); // See if there is any state stored in sessionStorage and set the sections to
      // open or closed.

      this.setInitialState($section);
    }.bind(this));
  }; // Set individual header attributes


  Accordion.prototype.initHeaderAttributes = function ($headerWrapper, index) {
    var $module = this;
    var $span = $headerWrapper.querySelector('.' + this.sectionButtonClass);
    var $heading = $headerWrapper.querySelector('.' + this.sectionHeadingClass);
    var $summary = $headerWrapper.querySelector('.' + this.sectionSummaryClass); // Copy existing span element to an actual button element, for improved accessibility.

    var $button = document.createElement('button');
    $button.setAttribute('type', 'button');
    $button.setAttribute('id', this.moduleId + '-heading-' + (index + 1));
    $button.setAttribute('aria-controls', this.moduleId + '-content-' + (index + 1)); // Copy all attributes (https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) from $span to $button

    for (var i = 0; i < $span.attributes.length; i++) {
      var attr = $span.attributes.item(i);
      $button.setAttribute(attr.nodeName, attr.nodeValue);
    }

    $button.addEventListener('focusin', function (e) {
      if (!$headerWrapper.classList.contains($module.sectionHeaderFocusedClass)) {
        $headerWrapper.className += ' ' + $module.sectionHeaderFocusedClass;
      }
    });
    $button.addEventListener('blur', function (e) {
      $headerWrapper.classList.remove($module.sectionHeaderFocusedClass);
    });

    if (typeof $summary !== 'undefined' && $summary !== null) {
      $button.setAttribute('aria-describedby', this.moduleId + '-summary-' + (index + 1));
    } // $span could contain HTML elements (see https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content)


    $button.innerHTML = $span.innerHTML;
    $heading.removeChild($span);
    $heading.appendChild($button); // Add "+/-" icon

    var icon = document.createElement('span');
    icon.className = this.iconClass;
    icon.setAttribute('aria-hidden', 'true');
    $button.appendChild(icon);
  }; // When section toggled, set and store state


  Accordion.prototype.onSectionToggle = function ($section) {
    var expanded = this.isExpanded($section);
    this.setExpanded(!expanded, $section); // Store the state in sessionStorage when a change is triggered

    this.storeState($section);
  }; // When Open/Close All toggled, set and store state


  Accordion.prototype.onOpenOrCloseAllToggle = function () {
    var $module = this;
    var $sections = this.$sections;
    var nowExpanded = !this.checkIfAllSectionsOpen();
    nodeListForEach($sections, function ($section) {
      $module.setExpanded(nowExpanded, $section); // Store the state in sessionStorage when a change is triggered

      $module.storeState($section);
    });
    $module.updateOpenAllButton(nowExpanded);
  }; // Set section attributes when opened/closed


  Accordion.prototype.setExpanded = function (expanded, $section) {
    var $button = $section.querySelector('.' + this.sectionButtonClass);
    $button.setAttribute('aria-expanded', expanded);

    if (expanded) {
      $section.classList.add(this.sectionExpandedClass);
    } else {
      $section.classList.remove(this.sectionExpandedClass);
    } // See if "Open all" button text should be updated


    var areAllSectionsOpen = this.checkIfAllSectionsOpen();
    this.updateOpenAllButton(areAllSectionsOpen);
  }; // Get state of section


  Accordion.prototype.isExpanded = function ($section) {
    return $section.classList.contains(this.sectionExpandedClass);
  }; // Check if all sections are open


  Accordion.prototype.checkIfAllSectionsOpen = function () {
    // Get a count of all the Accordion sections
    var sectionsCount = this.$sections.length; // Get a count of all Accordion sections that are expanded

    var expandedSectionCount = this.$module.querySelectorAll('.' + this.sectionExpandedClass).length;
    var areAllSectionsOpen = sectionsCount === expandedSectionCount;
    return areAllSectionsOpen;
  }; // Update "Open all" button


  Accordion.prototype.updateOpenAllButton = function (expanded) {
    var newButtonText = expanded ? 'Close all' : 'Open all';
    newButtonText += '<span class="govuk-visually-hidden"> sections</span>';
    this.$openAllButton.setAttribute('aria-expanded', expanded);
    this.$openAllButton.innerHTML = newButtonText;
  }; // Check for `window.sessionStorage`, and that it actually works.


  var helper = {
    checkForSessionStorage: function checkForSessionStorage() {
      var testString = 'this is the test string';
      var result;

      try {
        window.sessionStorage.setItem(testString, testString);
        result = window.sessionStorage.getItem(testString) === testString.toString();
        window.sessionStorage.removeItem(testString);
        return result;
      } catch (exception) {
        if (typeof console === 'undefined' || typeof console.log === 'undefined') {
          console.log('Notice: sessionStorage not available.');
        }
      }
    }
  }; // Set the state of the accordions in sessionStorage

  Accordion.prototype.storeState = function ($section) {
    if (this.browserSupportsSessionStorage) {
      // We need a unique way of identifying each content in the accordion. Since
      // an `#id` should be unique and an `id` is required for `aria-` attributes
      // `id` can be safely used.
      var $button = $section.querySelector('.' + this.sectionButtonClass);

      if ($button) {
        var contentId = $button.getAttribute('aria-controls');
        var contentState = $button.getAttribute('aria-expanded');

        if (typeof contentId === 'undefined' && (typeof console === 'undefined' || typeof console.log === 'undefined')) {
          console.error(new Error('No aria controls present in accordion section heading.'));
        }

        if (typeof contentState === 'undefined' && (typeof console === 'undefined' || typeof console.log === 'undefined')) {
          console.error(new Error('No aria expanded present in accordion section heading.'));
        } // Only set the state when both `contentId` and `contentState` are taken from the DOM.


        if (contentId && contentState) {
          window.sessionStorage.setItem(contentId, contentState);
        }
      }
    }
  }; // Read the state of the accordions from sessionStorage


  Accordion.prototype.setInitialState = function ($section) {
    if (this.browserSupportsSessionStorage) {
      var $button = $section.querySelector('.' + this.sectionButtonClass);

      if ($button) {
        var contentId = $button.getAttribute('aria-controls');
        var contentState = contentId ? window.sessionStorage.getItem(contentId) : null;

        if (contentState !== null) {
          this.setExpanded(contentState === 'true', $section);
        }
      }
    }
  };

  (function (undefined) {
    // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Window/detect.js
    var detect = ('Window' in this);
    if (detect) return; // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Window&flags=always

    if (typeof WorkerGlobalScope === "undefined" && typeof importScripts !== "function") {
      (function (global) {
        if (global.constructor) {
          global.Window = global.constructor;
        } else {
          (global.Window = global.constructor = new Function('return function Window() {}')()).prototype = this;
        }
      })(this);
    }
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) && __webpack_require__.g || {});
  (function (undefined) {
    // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Event/detect.js
    var detect = function (global) {
      if (!('Event' in global)) return false;
      if (typeof global.Event === 'function') return true;

      try {
        // In IE 9-11, the Event object exists but cannot be instantiated
        new Event('click');
        return true;
      } catch (e) {
        return false;
      }
    }(this);

    if (detect) return; // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Event&flags=always

    (function () {
      var unlistenableWindowEvents = {
        click: 1,
        dblclick: 1,
        keyup: 1,
        keypress: 1,
        keydown: 1,
        mousedown: 1,
        mouseup: 1,
        mousemove: 1,
        mouseover: 1,
        mouseenter: 1,
        mouseleave: 1,
        mouseout: 1,
        storage: 1,
        storagecommit: 1,
        textinput: 1
      }; // This polyfill depends on availability of `document` so will not run in a worker
      // However, we asssume there are no browsers with worker support that lack proper
      // support for `Event` within the worker

      if (typeof document === 'undefined' || typeof window === 'undefined') return;

      function indexOf(array, element) {
        var index = -1,
            length = array.length;

        while (++index < length) {
          if (index in array && array[index] === element) {
            return index;
          }
        }

        return -1;
      }

      var existingProto = window.Event && window.Event.prototype || null;

      window.Event = Window.prototype.Event = function Event(type, eventInitDict) {
        if (!type) {
          throw new Error('Not enough arguments');
        }

        var event; // Shortcut if browser supports createEvent

        if ('createEvent' in document) {
          event = document.createEvent('Event');
          var bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
          var cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;
          event.initEvent(type, bubbles, cancelable);
          return event;
        }

        event = document.createEventObject();
        event.type = type;
        event.bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
        event.cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;
        return event;
      };

      if (existingProto) {
        Object.defineProperty(window.Event, 'prototype', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: existingProto
        });
      }

      if (!('createEvent' in document)) {
        window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function addEventListener() {
          var element = this,
              type = arguments[0],
              listener = arguments[1];

          if (element === window && type in unlistenableWindowEvents) {
            throw new Error('In IE8 the event: ' + type + ' is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.');
          }

          if (!element._events) {
            element._events = {};
          }

          if (!element._events[type]) {
            element._events[type] = function (event) {
              var list = element._events[event.type].list,
                  events = list.slice(),
                  index = -1,
                  length = events.length,
                  eventElement;

              event.preventDefault = function preventDefault() {
                if (event.cancelable !== false) {
                  event.returnValue = false;
                }
              };

              event.stopPropagation = function stopPropagation() {
                event.cancelBubble = true;
              };

              event.stopImmediatePropagation = function stopImmediatePropagation() {
                event.cancelBubble = true;
                event.cancelImmediate = true;
              };

              event.currentTarget = element;
              event.relatedTarget = event.fromElement || null;
              event.target = event.target || event.srcElement || element;
              event.timeStamp = new Date().getTime();

              if (event.clientX) {
                event.pageX = event.clientX + document.documentElement.scrollLeft;
                event.pageY = event.clientY + document.documentElement.scrollTop;
              }

              while (++index < length && !event.cancelImmediate) {
                if (index in events) {
                  eventElement = events[index];

                  if (indexOf(list, eventElement) !== -1 && typeof eventElement === 'function') {
                    eventElement.call(element, event);
                  }
                }
              }
            };

            element._events[type].list = [];

            if (element.attachEvent) {
              element.attachEvent('on' + type, element._events[type]);
            }
          }

          element._events[type].list.push(listener);
        };

        window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function removeEventListener() {
          var element = this,
              type = arguments[0],
              listener = arguments[1],
              index;

          if (element._events && element._events[type] && element._events[type].list) {
            index = indexOf(element._events[type].list, listener);

            if (index !== -1) {
              element._events[type].list.splice(index, 1);

              if (!element._events[type].list.length) {
                if (element.detachEvent) {
                  element.detachEvent('on' + type, element._events[type]);
                }

                delete element._events[type];
              }
            }
          }
        };

        window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function dispatchEvent(event) {
          if (!arguments.length) {
            throw new Error('Not enough arguments');
          }

          if (!event || typeof event.type !== 'string') {
            throw new Error('DOM Events Exception 0');
          }

          var element = this,
              type = event.type;

          try {
            if (!event.bubbles) {
              event.cancelBubble = true;

              var cancelBubbleEvent = function cancelBubbleEvent(event) {
                event.cancelBubble = true;
                (element || window).detachEvent('on' + type, cancelBubbleEvent);
              };

              this.attachEvent('on' + type, cancelBubbleEvent);
            }

            this.fireEvent('on' + type, event);
          } catch (error) {
            event.target = element;

            do {
              event.currentTarget = element;

              if ('_events' in element && typeof element._events[type] === 'function') {
                element._events[type].call(element, event);
              }

              if (typeof element['on' + type] === 'function') {
                element['on' + type].call(element, event);
              }

              element = element.nodeType === 9 ? element.parentWindow : element.parentNode;
            } while (element && !event.cancelBubble);
          }

          return true;
        }; // Add the DOMContentLoaded Event


        document.attachEvent('onreadystatechange', function () {
          if (document.readyState === 'complete') {
            document.dispatchEvent(new Event('DOMContentLoaded', {
              bubbles: true
            }));
          }
        });
      }
    })();
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) && __webpack_require__.g || {});
  var KEY_SPACE = 32;
  var DEBOUNCE_TIMEOUT_IN_SECONDS = 1;

  function Button($module) {
    this.$module = $module;
    this.debounceFormSubmitTimer = null;
  }
  /**
  * JavaScript 'shim' to trigger the click event of element(s) when the space key is pressed.
  *
  * Created since some Assistive Technologies (for example some Screenreaders)
  * will tell a user to press space on a 'button', so this functionality needs to be shimmed
  * See https://github.com/alphagov/govuk_elements/pull/272#issuecomment-233028270
  *
  * @param {object} event event
  */


  Button.prototype.handleKeyDown = function (event) {
    // get the target element
    var target = event.target; // if the element has a role='button' and the pressed key is a space, we'll simulate a click

    if (target.getAttribute('role') === 'button' && event.keyCode === KEY_SPACE) {
      event.preventDefault(); // trigger the target's click event

      target.click();
    }
  };
  /**
  * If the click quickly succeeds a previous click then nothing will happen.
  * This stops people accidentally causing multiple form submissions by
  * double clicking buttons.
  */


  Button.prototype.debounce = function (event) {
    var target = event.target; // Check the button that is clicked on has the preventDoubleClick feature enabled

    if (target.getAttribute('data-prevent-double-click') !== 'true') {
      return;
    } // If the timer is still running then we want to prevent the click from submitting the form


    if (this.debounceFormSubmitTimer) {
      event.preventDefault();
      return false;
    }

    this.debounceFormSubmitTimer = setTimeout(function () {
      this.debounceFormSubmitTimer = null;
    }.bind(this), DEBOUNCE_TIMEOUT_IN_SECONDS * 1000);
  };
  /**
  * Initialise an event listener for keydown at document level
  * this will help listening for later inserted elements with a role="button"
  */


  Button.prototype.init = function () {
    this.$module.addEventListener('keydown', this.handleKeyDown);
    this.$module.addEventListener('click', this.debounce);
  };
  /**
   * JavaScript 'polyfill' for HTML5's <details> and <summary> elements
   * and 'shim' to add accessiblity enhancements for all browsers
   *
   * http://caniuse.com/#feat=details
   */


  var KEY_ENTER = 13;
  var KEY_SPACE$1 = 32;

  function Details($module) {
    this.$module = $module;
  }

  Details.prototype.init = function () {
    if (!this.$module) {
      return;
    } // If there is native details support, we want to avoid running code to polyfill native behaviour.


    var hasNativeDetails = typeof this.$module.open === 'boolean';

    if (hasNativeDetails) {
      return;
    }

    this.polyfillDetails();
  };

  Details.prototype.polyfillDetails = function () {
    var $module = this.$module; // Save shortcuts to the inner summary and content elements

    var $summary = this.$summary = $module.getElementsByTagName('summary').item(0);
    var $content = this.$content = $module.getElementsByTagName('div').item(0); // If <details> doesn't have a <summary> and a <div> representing the content
    // it means the required HTML structure is not met so the script will stop

    if (!$summary || !$content) {
      return;
    } // If the content doesn't have an ID, assign it one now
    // which we'll need for the summary's aria-controls assignment


    if (!$content.id) {
      $content.id = 'details-content-' + generateUniqueID();
    } // Add ARIA role="group" to details


    $module.setAttribute('role', 'group'); // Add role=button to summary

    $summary.setAttribute('role', 'button'); // Add aria-controls

    $summary.setAttribute('aria-controls', $content.id); // Set tabIndex so the summary is keyboard accessible for non-native elements
    //
    // We have to use the camelcase `tabIndex` property as there is a bug in IE6/IE7 when we set the correct attribute lowercase:
    // See http://web.archive.org/web/20170120194036/http://www.saliences.com/browserBugs/tabIndex.html for more information.

    $summary.tabIndex = 0; // Detect initial open state

    var openAttr = $module.getAttribute('open') !== null;

    if (openAttr === true) {
      $summary.setAttribute('aria-expanded', 'true');
      $content.setAttribute('aria-hidden', 'false');
    } else {
      $summary.setAttribute('aria-expanded', 'false');
      $content.setAttribute('aria-hidden', 'true');
      $content.style.display = 'none';
    } // Bind an event to handle summary elements


    this.polyfillHandleInputs($summary, this.polyfillSetAttributes.bind(this));
  };
  /**
  * Define a statechange function that updates aria-expanded and style.display
  * @param {object} summary element
  */


  Details.prototype.polyfillSetAttributes = function () {
    var $module = this.$module;
    var $summary = this.$summary;
    var $content = this.$content;
    var expanded = $summary.getAttribute('aria-expanded') === 'true';
    var hidden = $content.getAttribute('aria-hidden') === 'true';
    $summary.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    $content.setAttribute('aria-hidden', hidden ? 'false' : 'true');
    $content.style.display = expanded ? 'none' : '';
    var hasOpenAttr = $module.getAttribute('open') !== null;

    if (!hasOpenAttr) {
      $module.setAttribute('open', 'open');
    } else {
      $module.removeAttribute('open');
    }

    return true;
  };
  /**
  * Handle cross-modal click events
  * @param {object} node element
  * @param {function} callback function
  */


  Details.prototype.polyfillHandleInputs = function (node, callback) {
    node.addEventListener('keypress', function (event) {
      var target = event.target; // When the key gets pressed - check if it is enter or space

      if (event.keyCode === KEY_ENTER || event.keyCode === KEY_SPACE$1) {
        if (target.nodeName.toLowerCase() === 'summary') {
          // Prevent space from scrolling the page
          // and enter from submitting a form
          event.preventDefault(); // Click to let the click event do all the necessary action

          if (target.click) {
            target.click();
          } else {
            // except Safari 5.1 and under don't support .click() here
            callback(event);
          }
        }
      }
    }); // Prevent keyup to prevent clicking twice in Firefox when using space key

    node.addEventListener('keyup', function (event) {
      var target = event.target;

      if (event.keyCode === KEY_SPACE$1) {
        if (target.nodeName.toLowerCase() === 'summary') {
          event.preventDefault();
        }
      }
    });
    node.addEventListener('click', callback);
  };

  function CharacterCount($module) {
    this.$module = $module;
    this.$textarea = $module.querySelector('.govuk-js-character-count');

    if (this.$textarea) {
      this.$countMessage = $module.querySelector('[id="' + this.$textarea.id + '-info"]');
    }
  }

  CharacterCount.prototype.defaults = {
    characterCountAttribute: 'data-maxlength',
    wordCountAttribute: 'data-maxwords'
  }; // Initialize component

  CharacterCount.prototype.init = function () {
    // Check for module
    var $module = this.$module;
    var $textarea = this.$textarea;
    var $countMessage = this.$countMessage;

    if (!$textarea || !$countMessage) {
      return;
    } // We move count message right after the field
    // Kept for backwards compatibility


    $textarea.insertAdjacentElement('afterend', $countMessage); // Read options set using dataset ('data-' values)

    this.options = this.getDataset($module); // Determine the limit attribute (characters or words)

    var countAttribute = this.defaults.characterCountAttribute;

    if (this.options.maxwords) {
      countAttribute = this.defaults.wordCountAttribute;
    } // Save the element limit


    this.maxLength = $module.getAttribute(countAttribute); // Check for limit

    if (!this.maxLength) {
      return;
    } // Remove hard limit if set


    $module.removeAttribute('maxlength'); // When the page is restored after navigating 'back' in some browsers the
    // state of the character count is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to sync after the pageshow event in browsers
    // that support it.

    if ('onpageshow' in window) {
      window.addEventListener('pageshow', this.sync.bind(this));
    } else {
      window.addEventListener('DOMContentLoaded', this.sync.bind(this));
    }

    this.sync();
  };

  CharacterCount.prototype.sync = function () {
    this.bindChangeEvents();
    this.updateCountMessage();
  }; // Read data attributes


  CharacterCount.prototype.getDataset = function (element) {
    var dataset = {};
    var attributes = element.attributes;

    if (attributes) {
      for (var i = 0; i < attributes.length; i++) {
        var attribute = attributes[i];
        var match = attribute.name.match(/^data-(.+)/);

        if (match) {
          dataset[match[1]] = attribute.value;
        }
      }
    }

    return dataset;
  }; // Counts characters or words in text


  CharacterCount.prototype.count = function (text) {
    var length;

    if (this.options.maxwords) {
      var tokens = text.match(/\S+/g) || []; // Matches consecutive non-whitespace chars

      length = tokens.length;
    } else {
      length = text.length;
    }

    return length;
  }; // Bind input propertychange to the elements and update based on the change


  CharacterCount.prototype.bindChangeEvents = function () {
    var $textarea = this.$textarea;
    $textarea.addEventListener('keyup', this.checkIfValueChanged.bind(this)); // Bind focus/blur events to start/stop polling

    $textarea.addEventListener('focus', this.handleFocus.bind(this));
    $textarea.addEventListener('blur', this.handleBlur.bind(this));
  }; // Speech recognition software such as Dragon NaturallySpeaking will modify the
  // fields by directly changing its `value`. These changes don't trigger events
  // in JavaScript, so we need to poll to handle when and if they occur.


  CharacterCount.prototype.checkIfValueChanged = function () {
    if (!this.$textarea.oldValue) this.$textarea.oldValue = '';

    if (this.$textarea.value !== this.$textarea.oldValue) {
      this.$textarea.oldValue = this.$textarea.value;
      this.updateCountMessage();
    }
  }; // Update message box


  CharacterCount.prototype.updateCountMessage = function () {
    var countElement = this.$textarea;
    var options = this.options;
    var countMessage = this.$countMessage; // Determine the remaining number of characters/words

    var currentLength = this.count(countElement.value);
    var maxLength = this.maxLength;
    var remainingNumber = maxLength - currentLength; // Set threshold if presented in options

    var thresholdPercent = options.threshold ? options.threshold : 0;
    var thresholdValue = maxLength * thresholdPercent / 100;

    if (thresholdValue > currentLength) {
      countMessage.classList.add('govuk-character-count__message--disabled'); // Ensure threshold is hidden for users of assistive technologies

      countMessage.setAttribute('aria-hidden', true);
    } else {
      countMessage.classList.remove('govuk-character-count__message--disabled'); // Ensure threshold is visible for users of assistive technologies

      countMessage.removeAttribute('aria-hidden');
    } // Update styles


    if (remainingNumber < 0) {
      countElement.classList.add('govuk-textarea--error');
      countMessage.classList.remove('govuk-hint');
      countMessage.classList.add('govuk-error-message');
    } else {
      countElement.classList.remove('govuk-textarea--error');
      countMessage.classList.remove('govuk-error-message');
      countMessage.classList.add('govuk-hint');
    } // Update message


    var charVerb = 'remaining';
    var charNoun = 'character';
    var displayNumber = remainingNumber;

    if (options.maxwords) {
      charNoun = 'word';
    }

    charNoun = charNoun + (remainingNumber === -1 || remainingNumber === 1 ? '' : 's');
    charVerb = remainingNumber < 0 ? 'too many' : 'remaining';
    displayNumber = Math.abs(remainingNumber);
    countMessage.innerHTML = 'You have ' + displayNumber + ' ' + charNoun + ' ' + charVerb;
  };

  CharacterCount.prototype.handleFocus = function () {
    // Check if value changed on focus
    this.valueChecker = setInterval(this.checkIfValueChanged.bind(this), 1000);
  };

  CharacterCount.prototype.handleBlur = function () {
    // Cancel value checking on blur
    clearInterval(this.valueChecker);
  };

  function Checkboxes($module) {
    this.$module = $module;
    this.$inputs = $module.querySelectorAll('input[type="checkbox"]');
  }
  /**
   * Initialise Checkboxes
   *
   * Checkboxes can be associated with a 'conditionally revealed' content block –
   * for example, a checkbox for 'Phone' could reveal an additional form field for
   * the user to enter their phone number.
   *
   * These associations are made using a `data-aria-controls` attribute, which is
   * promoted to an aria-controls attribute during initialisation.
   *
   * We also need to restore the state of any conditional reveals on the page (for
   * example if the user has navigated back), and set up event handlers to keep
   * the reveal in sync with the checkbox state.
   */


  Checkboxes.prototype.init = function () {
    var $module = this.$module;
    var $inputs = this.$inputs;
    nodeListForEach($inputs, function ($input) {
      var target = $input.getAttribute('data-aria-controls'); // Skip checkboxes without data-aria-controls attributes, or where the
      // target element does not exist.

      if (!target || !$module.querySelector('#' + target)) {
        return;
      } // Promote the data-aria-controls attribute to a aria-controls attribute
      // so that the relationship is exposed in the AOM


      $input.setAttribute('aria-controls', target);
      $input.removeAttribute('data-aria-controls');
    }); // When the page is restored after navigating 'back' in some browsers the
    // state of form controls is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to sync after the pageshow event in browsers
    // that support it.

    if ('onpageshow' in window) {
      window.addEventListener('pageshow', this.syncAllConditionalReveals.bind(this));
    } else {
      window.addEventListener('DOMContentLoaded', this.syncAllConditionalReveals.bind(this));
    } // Although we've set up handlers to sync state on the pageshow or
    // DOMContentLoaded event, init could be called after those events have fired,
    // for example if they are added to the page dynamically, so sync now too.


    this.syncAllConditionalReveals();
    $module.addEventListener('click', this.handleClick.bind(this));
  };
  /**
   * Sync the conditional reveal states for all inputs in this $module.
   */


  Checkboxes.prototype.syncAllConditionalReveals = function () {
    nodeListForEach(this.$inputs, this.syncConditionalRevealWithInputState.bind(this));
  };
  /**
   * Sync conditional reveal with the input state
   *
   * Synchronise the visibility of the conditional reveal, and its accessible
   * state, with the input's checked state.
   *
   * @param {HTMLInputElement} $input Checkbox input
   */


  Checkboxes.prototype.syncConditionalRevealWithInputState = function ($input) {
    var $target = this.$module.querySelector('#' + $input.getAttribute('aria-controls'));

    if ($target && $target.classList.contains('govuk-checkboxes__conditional')) {
      var inputIsChecked = $input.checked;
      $input.setAttribute('aria-expanded', inputIsChecked);
      $target.classList.toggle('govuk-checkboxes__conditional--hidden', !inputIsChecked);
    }
  };
  /**
   * Uncheck other checkboxes
   *
   * Find any other checkbox inputs with the same name value, and uncheck them.
   * This is useful for when a “None of these" checkbox is checked.
   */


  Checkboxes.prototype.unCheckAllInputsExcept = function ($input) {
    var allInputsWithSameName = document.querySelectorAll('input[type="checkbox"][name="' + $input.name + '"]');
    nodeListForEach(allInputsWithSameName, function ($inputWithSameName) {
      var hasSameFormOwner = $input.form === $inputWithSameName.form;

      if (hasSameFormOwner && $inputWithSameName !== $input) {
        $inputWithSameName.checked = false;
      }
    });
    this.syncAllConditionalReveals();
  };
  /**
   * Uncheck exclusive inputs
   *
   * Find any checkbox inputs with the same name value and the 'exclusive' behaviour,
   * and uncheck them. This helps prevent someone checking both a regular checkbox and a
   * "None of these" checkbox in the same fieldset.
   */


  Checkboxes.prototype.unCheckExclusiveInputs = function ($input) {
    var allInputsWithSameNameAndExclusiveBehaviour = document.querySelectorAll('input[data-behaviour="exclusive"][type="checkbox"][name="' + $input.name + '"]');
    nodeListForEach(allInputsWithSameNameAndExclusiveBehaviour, function ($exclusiveInput) {
      var hasSameFormOwner = $input.form === $exclusiveInput.form;

      if (hasSameFormOwner) {
        $exclusiveInput.checked = false;
      }
    });
    this.syncAllConditionalReveals();
  };
  /**
   * Click event handler
   *
   * Handle a click within the $module – if the click occurred on a checkbox, sync
   * the state of any associated conditional reveal with the checkbox state.
   *
   * @param {MouseEvent} event Click event
   */


  Checkboxes.prototype.handleClick = function (event) {
    var $target = event.target; // Ignore clicks on things that aren't checkbox inputs

    if ($target.type !== 'checkbox') {
      return;
    } // If the checkbox conditionally-reveals some content, sync the state


    var hasAriaControls = $target.getAttribute('aria-controls');

    if (hasAriaControls) {
      this.syncConditionalRevealWithInputState($target);
    } // No further behaviour needed for unchecking


    if (!$target.checked) {
      return;
    } // Handle 'exclusive' checkbox behaviour (ie "None of these")


    var hasBehaviourExclusive = $target.getAttribute('data-behaviour') === 'exclusive';

    if (hasBehaviourExclusive) {
      this.unCheckAllInputsExcept($target);
    } else {
      this.unCheckExclusiveInputs($target);
    }
  };

  (function (undefined) {
    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/1f3c09b402f65bf6e393f933a15ba63f1b86ef1f/packages/polyfill-library/polyfills/Element/prototype/matches/detect.js
    var detect = 'document' in this && "matches" in document.documentElement;
    if (detect) return; // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-service/1f3c09b402f65bf6e393f933a15ba63f1b86ef1f/packages/polyfill-library/polyfills/Element/prototype/matches/polyfill.js

    Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function matches(selector) {
      var element = this;
      var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      var index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }

      return !!elements[index];
    };
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) && __webpack_require__.g || {});
  (function (undefined) {
    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/1f3c09b402f65bf6e393f933a15ba63f1b86ef1f/packages/polyfill-library/polyfills/Element/prototype/closest/detect.js
    var detect = 'document' in this && "closest" in document.documentElement;
    if (detect) return; // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-service/1f3c09b402f65bf6e393f933a15ba63f1b86ef1f/packages/polyfill-library/polyfills/Element/prototype/closest/polyfill.js

    Element.prototype.closest = function closest(selector) {
      var node = this;

      while (node) {
        if (node.matches(selector)) return node;else node = 'SVGElement' in window && node instanceof SVGElement ? node.parentNode : node.parentElement;
      }

      return null;
    };
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) && __webpack_require__.g || {});

  function ErrorSummary($module) {
    this.$module = $module;
  }

  ErrorSummary.prototype.init = function () {
    var $module = this.$module;

    if (!$module) {
      return;
    }

    $module.focus();
    $module.addEventListener('click', this.handleClick.bind(this));
  };
  /**
  * Click event handler
  *
  * @param {MouseEvent} event - Click event
  */


  ErrorSummary.prototype.handleClick = function (event) {
    var target = event.target;

    if (this.focusTarget(target)) {
      event.preventDefault();
    }
  };
  /**
   * Focus the target element
   *
   * By default, the browser will scroll the target into view. Because our labels
   * or legends appear above the input, this means the user will be presented with
   * an input without any context, as the label or legend will be off the top of
   * the screen.
   *
   * Manually handling the click event, scrolling the question into view and then
   * focussing the element solves this.
   *
   * This also results in the label and/or legend being announced correctly in
   * NVDA (as tested in 2018.3.2) - without this only the field type is announced
   * (e.g. "Edit, has autocomplete").
   *
   * @param {HTMLElement} $target - Event target
   * @returns {boolean} True if the target was able to be focussed
   */


  ErrorSummary.prototype.focusTarget = function ($target) {
    // If the element that was clicked was not a link, return early
    if ($target.tagName !== 'A' || $target.href === false) {
      return false;
    }

    var inputId = this.getFragmentFromUrl($target.href);
    var $input = document.getElementById(inputId);

    if (!$input) {
      return false;
    }

    var $legendOrLabel = this.getAssociatedLegendOrLabel($input);

    if (!$legendOrLabel) {
      return false;
    } // Scroll the legend or label into view *before* calling focus on the input to
    // avoid extra scrolling in browsers that don't support `preventScroll` (which
    // at time of writing is most of them...)


    $legendOrLabel.scrollIntoView();
    $input.focus({
      preventScroll: true
    });
    return true;
  };
  /**
   * Get fragment from URL
   *
   * Extract the fragment (everything after the hash) from a URL, but not including
   * the hash.
   *
   * @param {string} url - URL
   * @returns {string} Fragment from URL, without the hash
   */


  ErrorSummary.prototype.getFragmentFromUrl = function (url) {
    if (url.indexOf('#') === -1) {
      return false;
    }

    return url.split('#').pop();
  };
  /**
   * Get associated legend or label
   *
   * Returns the first element that exists from this list:
   *
   * - The `<legend>` associated with the closest `<fieldset>` ancestor, as long
   *   as the top of it is no more than half a viewport height away from the
   *   bottom of the input
   * - The first `<label>` that is associated with the input using for="inputId"
   * - The closest parent `<label>`
   *
   * @param {HTMLElement} $input - The input
   * @returns {HTMLElement} Associated legend or label, or null if no associated
   *                        legend or label can be found
   */


  ErrorSummary.prototype.getAssociatedLegendOrLabel = function ($input) {
    var $fieldset = $input.closest('fieldset');

    if ($fieldset) {
      var legends = $fieldset.getElementsByTagName('legend');

      if (legends.length) {
        var $candidateLegend = legends[0]; // If the input type is radio or checkbox, always use the legend if there
        // is one.

        if ($input.type === 'checkbox' || $input.type === 'radio') {
          return $candidateLegend;
        } // For other input types, only scroll to the fieldset’s legend (instead of
        // the label associated with the input) if the input would end up in the
        // top half of the screen.
        //
        // This should avoid situations where the input either ends up off the
        // screen, or obscured by a software keyboard.


        var legendTop = $candidateLegend.getBoundingClientRect().top;
        var inputRect = $input.getBoundingClientRect(); // If the browser doesn't support Element.getBoundingClientRect().height
        // or window.innerHeight (like IE8), bail and just link to the label.

        if (inputRect.height && window.innerHeight) {
          var inputBottom = inputRect.top + inputRect.height;

          if (inputBottom - legendTop < window.innerHeight / 2) {
            return $candidateLegend;
          }
        }
      }
    }

    return document.querySelector("label[for='" + $input.getAttribute('id') + "']") || $input.closest('label');
  };

  function NotificationBanner($module) {
    this.$module = $module;
  }
  /**
   * Initialise the component
   */


  NotificationBanner.prototype.init = function () {
    var $module = this.$module; // Check for module

    if (!$module) {
      return;
    }

    this.setFocus();
  };
  /**
   * Focus the element
   *
   * If `role="alert"` is set, focus the element to help some assistive technologies
   * prioritise announcing it.
   *
   * You can turn off the auto-focus functionality by setting `data-disable-auto-focus="true"` in the
   * component HTML. You might wish to do this based on user research findings, or to avoid a clash
   * with another element which should be focused when the page loads.
   */


  NotificationBanner.prototype.setFocus = function () {
    var $module = this.$module;

    if ($module.getAttribute('data-disable-auto-focus') === 'true') {
      return;
    }

    if ($module.getAttribute('role') !== 'alert') {
      return;
    } // Set tabindex to -1 to make the element focusable with JavaScript.
    // Remove the tabindex on blur as the component doesn't need to be focusable after the page has
    // loaded.


    if (!$module.getAttribute('tabindex')) {
      $module.setAttribute('tabindex', '-1');
      $module.addEventListener('blur', function () {
        $module.removeAttribute('tabindex');
      });
    }

    $module.focus();
  };

  function Header($module) {
    this.$module = $module;
    this.$menuButton = $module && $module.querySelector('.govuk-js-header-toggle');
    this.$menu = this.$menuButton && $module.querySelector('#' + this.$menuButton.getAttribute('aria-controls'));
  }
  /**
   * Initialise header
   *
   * Check for the presence of the header, menu and menu button – if any are
   * missing then there's nothing to do so return early.
   */


  Header.prototype.init = function () {
    if (!this.$module || !this.$menuButton || !this.$menu) {
      return;
    }

    this.syncState(this.$menu.classList.contains('govuk-header__navigation--open'));
    this.$menuButton.addEventListener('click', this.handleMenuButtonClick.bind(this));
  };
  /**
   * Sync menu state
   *
   * Sync the menu button class and the accessible state of the menu and the menu
   * button with the visible state of the menu
   *
   * @param {boolean} isVisible Whether the menu is currently visible
   */


  Header.prototype.syncState = function (isVisible) {
    this.$menuButton.classList.toggle('govuk-header__menu-button--open', isVisible);
    this.$menuButton.setAttribute('aria-expanded', isVisible);
  };
  /**
   * Handle menu button click
   *
   * When the menu button is clicked, change the visibility of the menu and then
   * sync the accessibility state and menu button state
   */


  Header.prototype.handleMenuButtonClick = function () {
    var isVisible = this.$menu.classList.toggle('govuk-header__navigation--open');
    this.syncState(isVisible);
  };

  function Radios($module) {
    this.$module = $module;
    this.$inputs = $module.querySelectorAll('input[type="radio"]');
  }
  /**
   * Initialise Radios
   *
   * Radios can be associated with a 'conditionally revealed' content block – for
   * example, a radio for 'Phone' could reveal an additional form field for the
   * user to enter their phone number.
   *
   * These associations are made using a `data-aria-controls` attribute, which is
   * promoted to an aria-controls attribute during initialisation.
   *
   * We also need to restore the state of any conditional reveals on the page (for
   * example if the user has navigated back), and set up event handlers to keep
   * the reveal in sync with the radio state.
   */


  Radios.prototype.init = function () {
    var $module = this.$module;
    var $inputs = this.$inputs;
    nodeListForEach($inputs, function ($input) {
      var target = $input.getAttribute('data-aria-controls'); // Skip radios without data-aria-controls attributes, or where the
      // target element does not exist.

      if (!target || !$module.querySelector('#' + target)) {
        return;
      } // Promote the data-aria-controls attribute to a aria-controls attribute
      // so that the relationship is exposed in the AOM


      $input.setAttribute('aria-controls', target);
      $input.removeAttribute('data-aria-controls');
    }); // When the page is restored after navigating 'back' in some browsers the
    // state of form controls is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to sync after the pageshow event in browsers
    // that support it.

    if ('onpageshow' in window) {
      window.addEventListener('pageshow', this.syncAllConditionalReveals.bind(this));
    } else {
      window.addEventListener('DOMContentLoaded', this.syncAllConditionalReveals.bind(this));
    } // Although we've set up handlers to sync state on the pageshow or
    // DOMContentLoaded event, init could be called after those events have fired,
    // for example if they are added to the page dynamically, so sync now too.


    this.syncAllConditionalReveals(); // Handle events

    $module.addEventListener('click', this.handleClick.bind(this));
  };
  /**
   * Sync the conditional reveal states for all inputs in this $module.
   */


  Radios.prototype.syncAllConditionalReveals = function () {
    nodeListForEach(this.$inputs, this.syncConditionalRevealWithInputState.bind(this));
  };
  /**
   * Sync conditional reveal with the input state
   *
   * Synchronise the visibility of the conditional reveal, and its accessible
   * state, with the input's checked state.
   *
   * @param {HTMLInputElement} $input Radio input
   */


  Radios.prototype.syncConditionalRevealWithInputState = function ($input) {
    var $target = document.querySelector('#' + $input.getAttribute('aria-controls'));

    if ($target && $target.classList.contains('govuk-radios__conditional')) {
      var inputIsChecked = $input.checked;
      $input.setAttribute('aria-expanded', inputIsChecked);
      $target.classList.toggle('govuk-radios__conditional--hidden', !inputIsChecked);
    }
  };
  /**
   * Click event handler
   *
   * Handle a click within the $module – if the click occurred on a radio, sync
   * the state of the conditional reveal for all radio buttons in the same form
   * with the same name (because checking one radio could have un-checked a radio
   * in another $module)
   *
   * @param {MouseEvent} event Click event
   */


  Radios.prototype.handleClick = function (event) {
    var $clickedInput = event.target; // Ignore clicks on things that aren't radio buttons

    if ($clickedInput.type !== 'radio') {
      return;
    } // We only need to consider radios with conditional reveals, which will have
    // aria-controls attributes.


    var $allInputs = document.querySelectorAll('input[type="radio"][aria-controls]');
    nodeListForEach($allInputs, function ($input) {
      var hasSameFormOwner = $input.form === $clickedInput.form;
      var hasSameName = $input.name === $clickedInput.name;

      if (hasSameName && hasSameFormOwner) {
        this.syncConditionalRevealWithInputState($input);
      }
    }.bind(this));
  };

  (function (undefined) {
    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-library/master/polyfills/Element/prototype/nextElementSibling/detect.js
    var detect = 'document' in this && "nextElementSibling" in document.documentElement;
    if (detect) return; // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-library/master/polyfills/Element/prototype/nextElementSibling/polyfill.js

    Object.defineProperty(Element.prototype, "nextElementSibling", {
      get: function get() {
        var el = this.nextSibling;

        while (el && el.nodeType !== 1) {
          el = el.nextSibling;
        }

        return el;
      }
    });
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) && __webpack_require__.g || {});
  (function (undefined) {
    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-library/master/polyfills/Element/prototype/previousElementSibling/detect.js
    var detect = 'document' in this && "previousElementSibling" in document.documentElement;
    if (detect) return; // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-library/master/polyfills/Element/prototype/previousElementSibling/polyfill.js

    Object.defineProperty(Element.prototype, 'previousElementSibling', {
      get: function get() {
        var el = this.previousSibling;

        while (el && el.nodeType !== 1) {
          el = el.previousSibling;
        }

        return el;
      }
    });
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) && __webpack_require__.g || {});

  function Tabs($module) {
    this.$module = $module;
    this.$tabs = $module.querySelectorAll('.govuk-tabs__tab');
    this.keys = {
      left: 37,
      right: 39,
      up: 38,
      down: 40
    };
    this.jsHiddenClass = 'govuk-tabs__panel--hidden';
  }

  Tabs.prototype.init = function () {
    if (typeof window.matchMedia === 'function') {
      this.setupResponsiveChecks();
    } else {
      this.setup();
    }
  };

  Tabs.prototype.setupResponsiveChecks = function () {
    this.mql = window.matchMedia('(min-width: 40.0625em)');
    this.mql.addListener(this.checkMode.bind(this));
    this.checkMode();
  };

  Tabs.prototype.checkMode = function () {
    if (this.mql.matches) {
      this.setup();
    } else {
      this.teardown();
    }
  };

  Tabs.prototype.setup = function () {
    var $module = this.$module;
    var $tabs = this.$tabs;
    var $tabList = $module.querySelector('.govuk-tabs__list');
    var $tabListItems = $module.querySelectorAll('.govuk-tabs__list-item');

    if (!$tabs || !$tabList || !$tabListItems) {
      return;
    }

    $tabList.setAttribute('role', 'tablist');
    nodeListForEach($tabListItems, function ($item) {
      $item.setAttribute('role', 'presentation');
    });
    nodeListForEach($tabs, function ($tab) {
      // Set HTML attributes
      this.setAttributes($tab); // Save bounded functions to use when removing event listeners during teardown

      $tab.boundTabClick = this.onTabClick.bind(this);
      $tab.boundTabKeydown = this.onTabKeydown.bind(this); // Handle events

      $tab.addEventListener('click', $tab.boundTabClick, true);
      $tab.addEventListener('keydown', $tab.boundTabKeydown, true); // Remove old active panels

      this.hideTab($tab);
    }.bind(this)); // Show either the active tab according to the URL's hash or the first tab

    var $activeTab = this.getTab(window.location.hash) || this.$tabs[0];
    this.showTab($activeTab); // Handle hashchange events

    $module.boundOnHashChange = this.onHashChange.bind(this);
    window.addEventListener('hashchange', $module.boundOnHashChange, true);
  };

  Tabs.prototype.teardown = function () {
    var $module = this.$module;
    var $tabs = this.$tabs;
    var $tabList = $module.querySelector('.govuk-tabs__list');
    var $tabListItems = $module.querySelectorAll('.govuk-tabs__list-item');

    if (!$tabs || !$tabList || !$tabListItems) {
      return;
    }

    $tabList.removeAttribute('role');
    nodeListForEach($tabListItems, function ($item) {
      $item.removeAttribute('role', 'presentation');
    });
    nodeListForEach($tabs, function ($tab) {
      // Remove events
      $tab.removeEventListener('click', $tab.boundTabClick, true);
      $tab.removeEventListener('keydown', $tab.boundTabKeydown, true); // Unset HTML attributes

      this.unsetAttributes($tab);
    }.bind(this)); // Remove hashchange event handler

    window.removeEventListener('hashchange', $module.boundOnHashChange, true);
  };

  Tabs.prototype.onHashChange = function (e) {
    var hash = window.location.hash;
    var $tabWithHash = this.getTab(hash);

    if (!$tabWithHash) {
      return;
    } // Prevent changing the hash


    if (this.changingHash) {
      this.changingHash = false;
      return;
    } // Show either the active tab according to the URL's hash or the first tab


    var $previousTab = this.getCurrentTab();
    this.hideTab($previousTab);
    this.showTab($tabWithHash);
    $tabWithHash.focus();
  };

  Tabs.prototype.hideTab = function ($tab) {
    this.unhighlightTab($tab);
    this.hidePanel($tab);
  };

  Tabs.prototype.showTab = function ($tab) {
    this.highlightTab($tab);
    this.showPanel($tab);
  };

  Tabs.prototype.getTab = function (hash) {
    return this.$module.querySelector('.govuk-tabs__tab[href="' + hash + '"]');
  };

  Tabs.prototype.setAttributes = function ($tab) {
    // set tab attributes
    var panelId = this.getHref($tab).slice(1);
    $tab.setAttribute('id', 'tab_' + panelId);
    $tab.setAttribute('role', 'tab');
    $tab.setAttribute('aria-controls', panelId);
    $tab.setAttribute('aria-selected', 'false');
    $tab.setAttribute('tabindex', '-1'); // set panel attributes

    var $panel = this.getPanel($tab);
    $panel.setAttribute('role', 'tabpanel');
    $panel.setAttribute('aria-labelledby', $tab.id);
    $panel.classList.add(this.jsHiddenClass);
  };

  Tabs.prototype.unsetAttributes = function ($tab) {
    // unset tab attributes
    $tab.removeAttribute('id');
    $tab.removeAttribute('role');
    $tab.removeAttribute('aria-controls');
    $tab.removeAttribute('aria-selected');
    $tab.removeAttribute('tabindex'); // unset panel attributes

    var $panel = this.getPanel($tab);
    $panel.removeAttribute('role');
    $panel.removeAttribute('aria-labelledby');
    $panel.classList.remove(this.jsHiddenClass);
  };

  Tabs.prototype.onTabClick = function (e) {
    if (!e.target.classList.contains('govuk-tabs__tab')) {
      // Allow events on child DOM elements to bubble up to tab parent
      return false;
    }

    e.preventDefault();
    var $newTab = e.target;
    var $currentTab = this.getCurrentTab();
    this.hideTab($currentTab);
    this.showTab($newTab);
    this.createHistoryEntry($newTab);
  };

  Tabs.prototype.createHistoryEntry = function ($tab) {
    var $panel = this.getPanel($tab); // Save and restore the id
    // so the page doesn't jump when a user clicks a tab (which changes the hash)

    var id = $panel.id;
    $panel.id = '';
    this.changingHash = true;
    window.location.hash = this.getHref($tab).slice(1);
    $panel.id = id;
  };

  Tabs.prototype.onTabKeydown = function (e) {
    switch (e.keyCode) {
      case this.keys.left:
      case this.keys.up:
        this.activatePreviousTab();
        e.preventDefault();
        break;

      case this.keys.right:
      case this.keys.down:
        this.activateNextTab();
        e.preventDefault();
        break;
    }
  };

  Tabs.prototype.activateNextTab = function () {
    var currentTab = this.getCurrentTab();
    var nextTabListItem = currentTab.parentNode.nextElementSibling;

    if (nextTabListItem) {
      var nextTab = nextTabListItem.querySelector('.govuk-tabs__tab');
    }

    if (nextTab) {
      this.hideTab(currentTab);
      this.showTab(nextTab);
      nextTab.focus();
      this.createHistoryEntry(nextTab);
    }
  };

  Tabs.prototype.activatePreviousTab = function () {
    var currentTab = this.getCurrentTab();
    var previousTabListItem = currentTab.parentNode.previousElementSibling;

    if (previousTabListItem) {
      var previousTab = previousTabListItem.querySelector('.govuk-tabs__tab');
    }

    if (previousTab) {
      this.hideTab(currentTab);
      this.showTab(previousTab);
      previousTab.focus();
      this.createHistoryEntry(previousTab);
    }
  };

  Tabs.prototype.getPanel = function ($tab) {
    var $panel = this.$module.querySelector(this.getHref($tab));
    return $panel;
  };

  Tabs.prototype.showPanel = function ($tab) {
    var $panel = this.getPanel($tab);
    $panel.classList.remove(this.jsHiddenClass);
  };

  Tabs.prototype.hidePanel = function (tab) {
    var $panel = this.getPanel(tab);
    $panel.classList.add(this.jsHiddenClass);
  };

  Tabs.prototype.unhighlightTab = function ($tab) {
    $tab.setAttribute('aria-selected', 'false');
    $tab.parentNode.classList.remove('govuk-tabs__list-item--selected');
    $tab.setAttribute('tabindex', '-1');
  };

  Tabs.prototype.highlightTab = function ($tab) {
    $tab.setAttribute('aria-selected', 'true');
    $tab.parentNode.classList.add('govuk-tabs__list-item--selected');
    $tab.setAttribute('tabindex', '0');
  };

  Tabs.prototype.getCurrentTab = function () {
    return this.$module.querySelector('.govuk-tabs__list-item--selected .govuk-tabs__tab');
  }; // this is because IE doesn't always return the actual value but a relative full path
  // should be a utility function most prob
  // http://labs.thesedays.com/blog/2010/01/08/getting-the-href-value-with-jquery-in-ie/


  Tabs.prototype.getHref = function ($tab) {
    var href = $tab.getAttribute('href');
    var hash = href.slice(href.indexOf('#'), href.length);
    return hash;
  };

  function initAll(options) {
    // Set the options to an empty object by default if no options are passed.
    options = typeof options !== 'undefined' ? options : {}; // Allow the user to initialise GOV.UK Frontend in only certain sections of the page
    // Defaults to the entire document if nothing is set.

    var scope = typeof options.scope !== 'undefined' ? options.scope : document;
    var $buttons = scope.querySelectorAll('[data-module="govuk-button"]');
    nodeListForEach($buttons, function ($button) {
      new Button($button).init();
    });
    var $accordions = scope.querySelectorAll('[data-module="govuk-accordion"]');
    nodeListForEach($accordions, function ($accordion) {
      new Accordion($accordion).init();
    });
    var $details = scope.querySelectorAll('[data-module="govuk-details"]');
    nodeListForEach($details, function ($detail) {
      new Details($detail).init();
    });
    var $characterCounts = scope.querySelectorAll('[data-module="govuk-character-count"]');
    nodeListForEach($characterCounts, function ($characterCount) {
      new CharacterCount($characterCount).init();
    });
    var $checkboxes = scope.querySelectorAll('[data-module="govuk-checkboxes"]');
    nodeListForEach($checkboxes, function ($checkbox) {
      new Checkboxes($checkbox).init();
    }); // Find first error summary module to enhance.

    var $errorSummary = scope.querySelector('[data-module="govuk-error-summary"]');
    new ErrorSummary($errorSummary).init(); // Find first header module to enhance.

    var $toggleButton = scope.querySelector('[data-module="govuk-header"]');
    new Header($toggleButton).init();
    var $notificationBanners = scope.querySelectorAll('[data-module="govuk-notification-banner"]');
    nodeListForEach($notificationBanners, function ($notificationBanner) {
      new NotificationBanner($notificationBanner).init();
    });
    var $radios = scope.querySelectorAll('[data-module="govuk-radios"]');
    nodeListForEach($radios, function ($radio) {
      new Radios($radio).init();
    });
    var $tabs = scope.querySelectorAll('[data-module="govuk-tabs"]');
    nodeListForEach($tabs, function ($tabs) {
      new Tabs($tabs).init();
    });
  }

  exports.initAll = initAll;
  exports.Accordion = Accordion;
  exports.Button = Button;
  exports.Details = Details;
  exports.CharacterCount = CharacterCount;
  exports.Checkboxes = Checkboxes;
  exports.ErrorSummary = ErrorSummary;
  exports.Header = Header;
  exports.Radios = Radios;
  exports.Tabs = Tabs;
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-e82430"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZ292dWsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJDb250cm9sbGVyIiwiYXBwIiwic3RhcnRTdGltdWx1c0FwcCIsInJlcXVpcmUiLCJnbG9iYWwiLCJmYWN0b3J5IiwiZXhwb3J0cyIsImRlZmluZSIsIm5vZGVMaXN0Rm9yRWFjaCIsIm5vZGVzIiwiY2FsbGJhY2siLCJ3aW5kb3ciLCJOb2RlTGlzdCIsInByb3RvdHlwZSIsImZvckVhY2giLCJpIiwibGVuZ3RoIiwiY2FsbCIsImdlbmVyYXRlVW5pcXVlSUQiLCJkIiwiRGF0ZSIsImdldFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJlcGxhY2UiLCJjIiwiciIsIk1hdGgiLCJyYW5kb20iLCJmbG9vciIsInRvU3RyaW5nIiwidW5kZWZpbmVkIiwiZGV0ZWN0IiwiT2JqZWN0IiwiYSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJlIiwibmF0aXZlRGVmaW5lUHJvcGVydHkiLCJzdXBwb3J0c0FjY2Vzc29ycyIsImhhc093blByb3BlcnR5IiwiRVJSX0FDQ0VTU09SU19OT1RfU1VQUE9SVEVEIiwiRVJSX1ZBTFVFX0FDQ0VTU09SUyIsIm9iamVjdCIsInByb3BlcnR5IiwiZGVzY3JpcHRvciIsImRvY3VtZW50IiwiRWxlbWVudCIsIlR5cGVFcnJvciIsInByb3BlcnR5U3RyaW5nIiwiU3RyaW5nIiwiaGFzVmFsdWVPcldyaXRhYmxlIiwiZ2V0dGVyVHlwZSIsImdldCIsInNldHRlclR5cGUiLCJzZXQiLCJfX2RlZmluZUdldHRlcl9fIiwiX19kZWZpbmVTZXR0ZXJfXyIsInNlbGYiLCJGdW5jdGlvbiIsImJpbmQiLCJ0aGF0IiwiJEFycmF5IiwiQXJyYXkiLCIkT2JqZWN0IiwiT2JqZWN0UHJvdG90eXBlIiwiQXJyYXlQcm90b3R5cGUiLCJFbXB0eSIsInRvX3N0cmluZyIsImhhc1RvU3RyaW5nVGFnIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJpc0NhbGxhYmxlIiwiZm5Ub1N0ciIsInRyeUZ1bmN0aW9uT2JqZWN0IiwiZm5DbGFzcyIsImdlbkNsYXNzIiwic3RyQ2xhc3MiLCJhcnJheV9zbGljZSIsInNsaWNlIiwiYXJyYXlfY29uY2F0IiwiY29uY2F0IiwiYXJyYXlfcHVzaCIsInB1c2giLCJtYXgiLCJ0YXJnZXQiLCJhcmdzIiwiYXJndW1lbnRzIiwiYm91bmQiLCJiaW5kZXIiLCJyZXN1bHQiLCJhcHBseSIsImJvdW5kTGVuZ3RoIiwiYm91bmRBcmdzIiwiam9pbiIsIngiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjbGFzc05hbWUiLCJjcmVhdGVFbGVtZW50IiwibmF0aXZlSW1wbCIsIkRPTVRva2VuTGlzdCIsImNyZWF0ZUVsZW1lbnROUyIsImRwU3VwcG9ydCIsImRlZmluZUdldHRlciIsIm5hbWUiLCJmbiIsImNvbmZpZ3VyYWJsZSIsIl9ET01Ub2tlbkxpc3QiLCJlbCIsInByb3AiLCJ0b2tlbnMiLCJ0b2tlbk1hcCIsIm1heExlbmd0aCIsImFkZEluZGV4R2V0dGVyIiwicHJlb3AiLCJyZWluZGV4IiwiZXJyb3IiLCJyU3BhY2UiLCJ0ZXN0IiwiU3ludGF4RXJyb3IiLCJjb2RlIiwiYmFzZVZhbCIsInNwbGl0IiwidG9Mb2NhbGVTdHJpbmciLCJpdGVtIiwiaWR4IiwiY29udGFpbnMiLCJ0b2tlbiIsImFkZCIsImwiLCJyZW1vdmUiLCJpZ25vcmUiLCJ0IiwiZm9yY2UiLCJjb25zdHJ1Y3RvciIsIm5hdGl2ZSIsIldvcmtlckdsb2JhbFNjb3BlIiwiaW1wb3J0U2NyaXB0cyIsIkhUTUxEb2N1bWVudCIsIkRvY3VtZW50IiwiSFRNTEVsZW1lbnQiLCJ2Ym9keSIsImFwcGVuZENoaWxkIiwiZnJhbWUiLCJmcmFtZURvY3VtZW50IiwiY29udGVudFdpbmRvdyIsImNhY2hlIiwic2hpdiIsImRlZXAiLCJjaGlsZE5vZGVzIiwiaW5kZXgiLCJrZXkiLCJjaGlsZE5vZGUiLCJub2RlVHlwZSIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJuYXRpdmVDcmVhdGVFbGVtZW50IiwiaW50ZXJ2YWwiLCJsb29wTGltaXQiLCJhdHRhY2hFdmVudCIsImV2ZW50IiwicHJvcGVydHlOYW1lIiwibm9uVmFsdWUiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiYm9keUNoZWNrIiwiY2xlYXJUaW1lb3V0IiwiYm9keSIsInJlYWR5U3RhdGUiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJzZXRJbnRlcnZhbCIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJyZW1vdmVDaGlsZCIsImRvY3VtZW50RWxlbWVudCIsImFkZFByb3AiLCJvIiwiYXR0ciIsInRva2VuTGlzdCIsIlRISVMiLCJnaWJiZXJpc2hQcm9wZXJ0eSIsInZpc2FnZSIsIm1pcnJvciIsInJlZmxlY3Rpb25zIiwiX1IiLCJIVE1MTGlua0VsZW1lbnQiLCJIVE1MQW5jaG9yRWxlbWVudCIsIkhUTUxBcmVhRWxlbWVudCIsIkFjY29yZGlvbiIsIiRtb2R1bGUiLCJtb2R1bGVJZCIsIiRzZWN0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCIkb3BlbkFsbEJ1dHRvbiIsImJyb3dzZXJTdXBwb3J0c1Nlc3Npb25TdG9yYWdlIiwiaGVscGVyIiwiY2hlY2tGb3JTZXNzaW9uU3RvcmFnZSIsImNvbnRyb2xzQ2xhc3MiLCJvcGVuQWxsQ2xhc3MiLCJpY29uQ2xhc3MiLCJzZWN0aW9uSGVhZGVyQ2xhc3MiLCJzZWN0aW9uSGVhZGVyRm9jdXNlZENsYXNzIiwic2VjdGlvbkhlYWRpbmdDbGFzcyIsInNlY3Rpb25TdW1tYXJ5Q2xhc3MiLCJzZWN0aW9uQnV0dG9uQ2xhc3MiLCJzZWN0aW9uRXhwYW5kZWRDbGFzcyIsImluaXQiLCJpbml0Q29udHJvbHMiLCJpbml0U2VjdGlvbkhlYWRlcnMiLCJhcmVBbGxTZWN0aW9uc09wZW4iLCJjaGVja0lmQWxsU2VjdGlvbnNPcGVuIiwidXBkYXRlT3BlbkFsbEJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFjY29yZGlvbkNvbnRyb2xzIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk9wZW5PckNsb3NlQWxsVG9nZ2xlIiwiJHNlY3Rpb24iLCJoZWFkZXIiLCJxdWVyeVNlbGVjdG9yIiwiaW5pdEhlYWRlckF0dHJpYnV0ZXMiLCJzZXRFeHBhbmRlZCIsImlzRXhwYW5kZWQiLCJvblNlY3Rpb25Ub2dnbGUiLCJzZXRJbml0aWFsU3RhdGUiLCIkaGVhZGVyV3JhcHBlciIsIiRzcGFuIiwiJGhlYWRpbmciLCIkc3VtbWFyeSIsIiRidXR0b24iLCJhdHRyaWJ1dGVzIiwibm9kZVZhbHVlIiwiaWNvbiIsImV4cGFuZGVkIiwic3RvcmVTdGF0ZSIsIm5vd0V4cGFuZGVkIiwic2VjdGlvbnNDb3VudCIsImV4cGFuZGVkU2VjdGlvbkNvdW50IiwibmV3QnV0dG9uVGV4dCIsInRlc3RTdHJpbmciLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImV4Y2VwdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50SWQiLCJjb250ZW50U3RhdGUiLCJFcnJvciIsIldpbmRvdyIsIkV2ZW50IiwidW5saXN0ZW5hYmxlV2luZG93RXZlbnRzIiwiY2xpY2siLCJkYmxjbGljayIsImtleXVwIiwia2V5cHJlc3MiLCJrZXlkb3duIiwibW91c2Vkb3duIiwibW91c2V1cCIsIm1vdXNlbW92ZSIsIm1vdXNlb3ZlciIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwibW91c2VvdXQiLCJzdG9yYWdlIiwic3RvcmFnZWNvbW1pdCIsInRleHRpbnB1dCIsImluZGV4T2YiLCJhcnJheSIsImV4aXN0aW5nUHJvdG8iLCJ0eXBlIiwiZXZlbnRJbml0RGljdCIsImNyZWF0ZUV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJpbml0RXZlbnQiLCJjcmVhdGVFdmVudE9iamVjdCIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImxpc3RlbmVyIiwiX2V2ZW50cyIsImxpc3QiLCJldmVudHMiLCJldmVudEVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwiY2FuY2VsQnViYmxlIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiY2FuY2VsSW1tZWRpYXRlIiwiY3VycmVudFRhcmdldCIsInJlbGF0ZWRUYXJnZXQiLCJmcm9tRWxlbWVudCIsInNyY0VsZW1lbnQiLCJ0aW1lU3RhbXAiLCJjbGllbnRYIiwicGFnZVgiLCJzY3JvbGxMZWZ0IiwicGFnZVkiLCJjbGllbnRZIiwic2Nyb2xsVG9wIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNwbGljZSIsImRldGFjaEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImNhbmNlbEJ1YmJsZUV2ZW50IiwiZmlyZUV2ZW50IiwicGFyZW50V2luZG93IiwicGFyZW50Tm9kZSIsIktFWV9TUEFDRSIsIkRFQk9VTkNFX1RJTUVPVVRfSU5fU0VDT05EUyIsIkJ1dHRvbiIsImRlYm91bmNlRm9ybVN1Ym1pdFRpbWVyIiwiaGFuZGxlS2V5RG93biIsImtleUNvZGUiLCJkZWJvdW5jZSIsInNldFRpbWVvdXQiLCJLRVlfRU5URVIiLCJLRVlfU1BBQ0UkMSIsIkRldGFpbHMiLCJoYXNOYXRpdmVEZXRhaWxzIiwib3BlbiIsInBvbHlmaWxsRGV0YWlscyIsIiRjb250ZW50IiwiaWQiLCJ0YWJJbmRleCIsIm9wZW5BdHRyIiwic3R5bGUiLCJkaXNwbGF5IiwicG9seWZpbGxIYW5kbGVJbnB1dHMiLCJwb2x5ZmlsbFNldEF0dHJpYnV0ZXMiLCJoaWRkZW4iLCJoYXNPcGVuQXR0ciIsInJlbW92ZUF0dHJpYnV0ZSIsIm5vZGUiLCJDaGFyYWN0ZXJDb3VudCIsIiR0ZXh0YXJlYSIsIiRjb3VudE1lc3NhZ2UiLCJkZWZhdWx0cyIsImNoYXJhY3RlckNvdW50QXR0cmlidXRlIiwid29yZENvdW50QXR0cmlidXRlIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50Iiwib3B0aW9ucyIsImdldERhdGFzZXQiLCJjb3VudEF0dHJpYnV0ZSIsIm1heHdvcmRzIiwic3luYyIsImJpbmRDaGFuZ2VFdmVudHMiLCJ1cGRhdGVDb3VudE1lc3NhZ2UiLCJkYXRhc2V0IiwiYXR0cmlidXRlIiwibWF0Y2giLCJjb3VudCIsInRleHQiLCJjaGVja0lmVmFsdWVDaGFuZ2VkIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVCbHVyIiwiY291bnRFbGVtZW50IiwiY291bnRNZXNzYWdlIiwiY3VycmVudExlbmd0aCIsInJlbWFpbmluZ051bWJlciIsInRocmVzaG9sZFBlcmNlbnQiLCJ0aHJlc2hvbGQiLCJ0aHJlc2hvbGRWYWx1ZSIsImNoYXJWZXJiIiwiY2hhck5vdW4iLCJkaXNwbGF5TnVtYmVyIiwiYWJzIiwidmFsdWVDaGVja2VyIiwiY2xlYXJJbnRlcnZhbCIsIkNoZWNrYm94ZXMiLCIkaW5wdXRzIiwiJGlucHV0Iiwic3luY0FsbENvbmRpdGlvbmFsUmV2ZWFscyIsImhhbmRsZUNsaWNrIiwic3luY0NvbmRpdGlvbmFsUmV2ZWFsV2l0aElucHV0U3RhdGUiLCIkdGFyZ2V0IiwiaW5wdXRJc0NoZWNrZWQiLCJjaGVja2VkIiwidW5DaGVja0FsbElucHV0c0V4Y2VwdCIsImFsbElucHV0c1dpdGhTYW1lTmFtZSIsIiRpbnB1dFdpdGhTYW1lTmFtZSIsImhhc1NhbWVGb3JtT3duZXIiLCJmb3JtIiwidW5DaGVja0V4Y2x1c2l2ZUlucHV0cyIsImFsbElucHV0c1dpdGhTYW1lTmFtZUFuZEV4Y2x1c2l2ZUJlaGF2aW91ciIsIiRleGNsdXNpdmVJbnB1dCIsImhhc0FyaWFDb250cm9scyIsImhhc0JlaGF2aW91ckV4Y2x1c2l2ZSIsIm1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJvTWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJzZWxlY3RvciIsIm93bmVyRG9jdW1lbnQiLCJjbG9zZXN0IiwiU1ZHRWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJFcnJvclN1bW1hcnkiLCJmb2N1cyIsImZvY3VzVGFyZ2V0IiwidGFnTmFtZSIsImhyZWYiLCJpbnB1dElkIiwiZ2V0RnJhZ21lbnRGcm9tVXJsIiwiZ2V0RWxlbWVudEJ5SWQiLCIkbGVnZW5kT3JMYWJlbCIsImdldEFzc29jaWF0ZWRMZWdlbmRPckxhYmVsIiwic2Nyb2xsSW50b1ZpZXciLCJwcmV2ZW50U2Nyb2xsIiwidXJsIiwicG9wIiwiJGZpZWxkc2V0IiwibGVnZW5kcyIsIiRjYW5kaWRhdGVMZWdlbmQiLCJsZWdlbmRUb3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJpbnB1dFJlY3QiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImlucHV0Qm90dG9tIiwiTm90aWZpY2F0aW9uQmFubmVyIiwic2V0Rm9jdXMiLCJIZWFkZXIiLCIkbWVudUJ1dHRvbiIsIiRtZW51Iiwic3luY1N0YXRlIiwiaGFuZGxlTWVudUJ1dHRvbkNsaWNrIiwiaXNWaXNpYmxlIiwiUmFkaW9zIiwiJGNsaWNrZWRJbnB1dCIsIiRhbGxJbnB1dHMiLCJoYXNTYW1lTmFtZSIsIm5leHRTaWJsaW5nIiwicHJldmlvdXNTaWJsaW5nIiwiVGFicyIsIiR0YWJzIiwia2V5cyIsImxlZnQiLCJyaWdodCIsInVwIiwiZG93biIsImpzSGlkZGVuQ2xhc3MiLCJtYXRjaE1lZGlhIiwic2V0dXBSZXNwb25zaXZlQ2hlY2tzIiwic2V0dXAiLCJtcWwiLCJhZGRMaXN0ZW5lciIsImNoZWNrTW9kZSIsInRlYXJkb3duIiwiJHRhYkxpc3QiLCIkdGFiTGlzdEl0ZW1zIiwiJGl0ZW0iLCIkdGFiIiwic2V0QXR0cmlidXRlcyIsImJvdW5kVGFiQ2xpY2siLCJvblRhYkNsaWNrIiwiYm91bmRUYWJLZXlkb3duIiwib25UYWJLZXlkb3duIiwiaGlkZVRhYiIsIiRhY3RpdmVUYWIiLCJnZXRUYWIiLCJsb2NhdGlvbiIsImhhc2giLCJzaG93VGFiIiwiYm91bmRPbkhhc2hDaGFuZ2UiLCJvbkhhc2hDaGFuZ2UiLCJ1bnNldEF0dHJpYnV0ZXMiLCIkdGFiV2l0aEhhc2giLCJjaGFuZ2luZ0hhc2giLCIkcHJldmlvdXNUYWIiLCJnZXRDdXJyZW50VGFiIiwidW5oaWdobGlnaHRUYWIiLCJoaWRlUGFuZWwiLCJoaWdobGlnaHRUYWIiLCJzaG93UGFuZWwiLCJwYW5lbElkIiwiZ2V0SHJlZiIsIiRwYW5lbCIsImdldFBhbmVsIiwiJG5ld1RhYiIsIiRjdXJyZW50VGFiIiwiY3JlYXRlSGlzdG9yeUVudHJ5IiwiYWN0aXZhdGVQcmV2aW91c1RhYiIsImFjdGl2YXRlTmV4dFRhYiIsImN1cnJlbnRUYWIiLCJuZXh0VGFiTGlzdEl0ZW0iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJuZXh0VGFiIiwicHJldmlvdXNUYWJMaXN0SXRlbSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJwcmV2aW91c1RhYiIsInRhYiIsImluaXRBbGwiLCJzY29wZSIsIiRidXR0b25zIiwiJGFjY29yZGlvbnMiLCIkYWNjb3JkaW9uIiwiJGRldGFpbHMiLCIkZGV0YWlsIiwiJGNoYXJhY3RlckNvdW50cyIsIiRjaGFyYWN0ZXJDb3VudCIsIiRjaGVja2JveGVzIiwiJGNoZWNrYm94IiwiJGVycm9yU3VtbWFyeSIsIiR0b2dnbGVCdXR0b24iLCIkbm90aWZpY2F0aW9uQmFubmVycyIsIiRub3RpZmljYXRpb25CYW5uZXIiLCIkcmFkaW9zIiwiJHJhZGlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNB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bEI7QUFDQS9ULFNBQU8sQ0FBQytVLGNBQVIsR0FBeUJBLGNBQXpCO0FBQ0EvVSxTQUFPLENBQUNrWCxVQUFSLEdBQXFCQSxVQUFyQjtBQUNBbFgsU0FBTyxDQUFDK1ksWUFBUixHQUF1QkEsWUFBdkI7QUFDQS9ZLFNBQU8sQ0FBQ3lhLE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0F6YSxTQUFPLENBQUMrYSxNQUFSLEdBQWlCQSxNQUFqQjtBQUNBL2EsU0FBTyxDQUFDcWIsSUFBUixHQUFlQSxJQUFmO0FBRUMsQ0F2akZBLENBQUQsQzs7Ozs7Ozs7Ozs7O0FDQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5pbXBvcnQgJy4vZ292dWsnO1xuXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKCdHT1ZVS0Zyb250ZW5kJywgWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcblx0KGZhY3RvcnkoKGdsb2JhbC5HT1ZVS0Zyb250ZW5kID0ge30pKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVE9ETzogSWRlYWxseSB0aGlzIHdvdWxkIGJlIGEgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggcG9seWZpbGxcbiAqIFRoaXMgc2VlbXMgdG8gZmFpbCBpbiBJRTgsIHJlcXVpcmVzIG1vcmUgaW52ZXN0aWdhdGlvbi5cbiAqIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2ltYWdpdGFtYS9ub2RlbGlzdC1mb3JlYWNoLXBvbHlmaWxsXG4gKi9cbmZ1bmN0aW9uIG5vZGVMaXN0Rm9yRWFjaCAobm9kZXMsIGNhbGxiYWNrKSB7XG4gIGlmICh3aW5kb3cuTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICByZXR1cm4gbm9kZXMuZm9yRWFjaChjYWxsYmFjaylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2FsbGJhY2suY2FsbCh3aW5kb3csIG5vZGVzW2ldLCBpLCBub2Rlcyk7XG4gIH1cbn1cblxuLy8gVXNlZCB0byBnZW5lcmF0ZSBhIHVuaXF1ZSBzdHJpbmcsIGFsbG93cyBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgdGhlIGNvbXBvbmVudCB3aXRob3V0XG4vLyBUaGVtIGNvbmZsaWN0aW5nIHdpdGggZWFjaCBvdGhlci5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS84ODA5NDcyXG5mdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZUlEICgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZCArPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7IC8vIHVzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgfVxuICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7XG4gICAgcmV0dXJuIChjID09PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpKS50b1N0cmluZygxNilcbiAgfSlcbn1cblxuKGZ1bmN0aW9uKHVuZGVmaW5lZCkge1xuXG4vLyBEZXRlY3Rpb24gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vRmluYW5jaWFsLVRpbWVzL3BvbHlmaWxsLXNlcnZpY2UvYmxvYi9tYXN0ZXIvcGFja2FnZXMvcG9seWZpbGwtbGlicmFyeS9wb2x5ZmlsbHMvT2JqZWN0L2RlZmluZVByb3BlcnR5L2RldGVjdC5qc1xudmFyIGRldGVjdCA9IChcbiAgLy8gSW4gSUU4LCBkZWZpbmVQcm9wZXJ0eSBjb3VsZCBvbmx5IGFjdCBvbiBET00gZWxlbWVudHMsIHNvIGZ1bGwgc3VwcG9ydFxuICAvLyBmb3IgdGhlIGZlYXR1cmUgcmVxdWlyZXMgdGhlIGFiaWxpdHkgdG8gc2V0IGEgcHJvcGVydHkgb24gYW4gYXJiaXRyYXJ5IG9iamVjdFxuICAnZGVmaW5lUHJvcGVydHknIGluIE9iamVjdCAmJiAoZnVuY3Rpb24oKSB7XG4gIFx0dHJ5IHtcbiAgXHRcdHZhciBhID0ge307XG4gIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ3Rlc3QnLCB7dmFsdWU6NDJ9KTtcbiAgXHRcdHJldHVybiB0cnVlO1xuICBcdH0gY2F0Y2goZSkge1xuICBcdFx0cmV0dXJuIGZhbHNlXG4gIFx0fVxuICB9KCkpXG4pO1xuXG5pZiAoZGV0ZWN0KSByZXR1cm5cblxuLy8gUG9seWZpbGwgZnJvbSBodHRwczovL2Nkbi5wb2x5ZmlsbC5pby92Mi9wb2x5ZmlsbC5qcz9mZWF0dXJlcz1PYmplY3QuZGVmaW5lUHJvcGVydHkmZmxhZ3M9YWx3YXlzXG4oZnVuY3Rpb24gKG5hdGl2ZURlZmluZVByb3BlcnR5KSB7XG5cblx0dmFyIHN1cHBvcnRzQWNjZXNzb3JzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnX19kZWZpbmVHZXR0ZXJfXycpO1xuXHR2YXIgRVJSX0FDQ0VTU09SU19OT1RfU1VQUE9SVEVEID0gJ0dldHRlcnMgJiBzZXR0ZXJzIGNhbm5vdCBiZSBkZWZpbmVkIG9uIHRoaXMgamF2YXNjcmlwdCBlbmdpbmUnO1xuXHR2YXIgRVJSX1ZBTFVFX0FDQ0VTU09SUyA9ICdBIHByb3BlcnR5IGNhbm5vdCBib3RoIGhhdmUgYWNjZXNzb3JzIGFuZCBiZSB3cml0YWJsZSBvciBoYXZlIGEgdmFsdWUnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHksIGRlc2NyaXB0b3IpIHtcblxuXHRcdC8vIFdoZXJlIG5hdGl2ZSBzdXBwb3J0IGV4aXN0cywgYXNzdW1lIGl0XG5cdFx0aWYgKG5hdGl2ZURlZmluZVByb3BlcnR5ICYmIChvYmplY3QgPT09IHdpbmRvdyB8fCBvYmplY3QgPT09IGRvY3VtZW50IHx8IG9iamVjdCA9PT0gRWxlbWVudC5wcm90b3R5cGUgfHwgb2JqZWN0IGluc3RhbmNlb2YgRWxlbWVudCkpIHtcblx0XHRcdHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5LCBkZXNjcmlwdG9yKTtcblx0XHR9XG5cblx0XHRpZiAob2JqZWN0ID09PSBudWxsIHx8ICEob2JqZWN0IGluc3RhbmNlb2YgT2JqZWN0IHx8IHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmRlZmluZVByb3BlcnR5IGNhbGxlZCBvbiBub24tb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKCEoZGVzY3JpcHRvciBpbnN0YW5jZW9mIE9iamVjdCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb3BlcnR5IGRlc2NyaXB0aW9uIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIHByb3BlcnR5U3RyaW5nID0gU3RyaW5nKHByb3BlcnR5KTtcblx0XHR2YXIgaGFzVmFsdWVPcldyaXRhYmxlID0gJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yIHx8ICd3cml0YWJsZScgaW4gZGVzY3JpcHRvcjtcblx0XHR2YXIgZ2V0dGVyVHlwZSA9ICdnZXQnIGluIGRlc2NyaXB0b3IgJiYgdHlwZW9mIGRlc2NyaXB0b3IuZ2V0O1xuXHRcdHZhciBzZXR0ZXJUeXBlID0gJ3NldCcgaW4gZGVzY3JpcHRvciAmJiB0eXBlb2YgZGVzY3JpcHRvci5zZXQ7XG5cblx0XHQvLyBoYW5kbGUgZGVzY3JpcHRvci5nZXRcblx0XHRpZiAoZ2V0dGVyVHlwZSkge1xuXHRcdFx0aWYgKGdldHRlclR5cGUgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignR2V0dGVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFzdXBwb3J0c0FjY2Vzc29ycykge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKEVSUl9BQ0NFU1NPUlNfTk9UX1NVUFBPUlRFRCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaGFzVmFsdWVPcldyaXRhYmxlKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoRVJSX1ZBTFVFX0FDQ0VTU09SUyk7XG5cdFx0XHR9XG5cdFx0XHRPYmplY3QuX19kZWZpbmVHZXR0ZXJfXy5jYWxsKG9iamVjdCwgcHJvcGVydHlTdHJpbmcsIGRlc2NyaXB0b3IuZ2V0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b2JqZWN0W3Byb3BlcnR5U3RyaW5nXSA9IGRlc2NyaXB0b3IudmFsdWU7XG5cdFx0fVxuXG5cdFx0Ly8gaGFuZGxlIGRlc2NyaXB0b3Iuc2V0XG5cdFx0aWYgKHNldHRlclR5cGUpIHtcblx0XHRcdGlmIChzZXR0ZXJUeXBlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1NldHRlciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0XHRcdH1cblx0XHRcdGlmICghc3VwcG9ydHNBY2Nlc3NvcnMpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihFUlJfQUNDRVNTT1JTX05PVF9TVVBQT1JURUQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGhhc1ZhbHVlT3JXcml0YWJsZSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKEVSUl9WQUxVRV9BQ0NFU1NPUlMpO1xuXHRcdFx0fVxuXHRcdFx0T2JqZWN0Ll9fZGVmaW5lU2V0dGVyX18uY2FsbChvYmplY3QsIHByb3BlcnR5U3RyaW5nLCBkZXNjcmlwdG9yLnNldCk7XG5cdFx0fVxuXG5cdFx0Ly8gT0sgdG8gZGVmaW5lIHZhbHVlIHVuY29uZGl0aW9uYWxseSAtIGlmIGEgZ2V0dGVyIGhhcyBiZWVuIHNwZWNpZmllZCBhcyB3ZWxsLCBhbiBlcnJvciB3b3VsZCBiZSB0aHJvd24gYWJvdmVcblx0XHRpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSB7XG5cdFx0XHRvYmplY3RbcHJvcGVydHlTdHJpbmddID0gZGVzY3JpcHRvci52YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqZWN0O1xuXHR9O1xufShPYmplY3QuZGVmaW5lUHJvcGVydHkpKTtcbn0pXG4uY2FsbCgnb2JqZWN0JyA9PT0gdHlwZW9mIHdpbmRvdyAmJiB3aW5kb3cgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBzZWxmICYmIHNlbGYgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBnbG9iYWwgJiYgZ2xvYmFsIHx8IHt9KTtcblxuKGZ1bmN0aW9uKHVuZGVmaW5lZCkge1xuICAvLyBEZXRlY3Rpb24gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vRmluYW5jaWFsLVRpbWVzL3BvbHlmaWxsLXNlcnZpY2UvYmxvYi9tYXN0ZXIvcGFja2FnZXMvcG9seWZpbGwtbGlicmFyeS9wb2x5ZmlsbHMvRnVuY3Rpb24vcHJvdG90eXBlL2JpbmQvZGV0ZWN0LmpzXG4gIHZhciBkZXRlY3QgPSAnYmluZCcgaW4gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIGlmIChkZXRlY3QpIHJldHVyblxuXG4gIC8vIFBvbHlmaWxsIGZyb20gaHR0cHM6Ly9jZG4ucG9seWZpbGwuaW8vdjIvcG9seWZpbGwuanM/ZmVhdHVyZXM9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQmZmxhZ3M9YWx3YXlzXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGdW5jdGlvbi5wcm90b3R5cGUsICdiaW5kJywge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmQodGhhdCkgeyAvLyAubGVuZ3RoIGlzIDFcbiAgICAgICAgICAvLyBhZGQgbmVjZXNzYXJ5IGVzNS1zaGltIHV0aWxpdGllc1xuICAgICAgICAgIHZhciAkQXJyYXkgPSBBcnJheTtcbiAgICAgICAgICB2YXIgJE9iamVjdCA9IE9iamVjdDtcbiAgICAgICAgICB2YXIgT2JqZWN0UHJvdG90eXBlID0gJE9iamVjdC5wcm90b3R5cGU7XG4gICAgICAgICAgdmFyIEFycmF5UHJvdG90eXBlID0gJEFycmF5LnByb3RvdHlwZTtcbiAgICAgICAgICB2YXIgRW1wdHkgPSBmdW5jdGlvbiBFbXB0eSgpIHt9O1xuICAgICAgICAgIHZhciB0b19zdHJpbmcgPSBPYmplY3RQcm90b3R5cGUudG9TdHJpbmc7XG4gICAgICAgICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcbiAgICAgICAgICB2YXIgaXNDYWxsYWJsZTsgLyogaW5saW5lZCBmcm9tIGh0dHBzOi8vbnBtanMuY29tL2lzLWNhbGxhYmxlICovIHZhciBmblRvU3RyID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nLCB0cnlGdW5jdGlvbk9iamVjdCA9IGZ1bmN0aW9uIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKSB7IHRyeSB7IGZuVG9TdHIuY2FsbCh2YWx1ZSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9LCBmbkNsYXNzID0gJ1tvYmplY3QgRnVuY3Rpb25dJywgZ2VuQ2xhc3MgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nOyBpc0NhbGxhYmxlID0gZnVuY3Rpb24gaXNDYWxsYWJsZSh2YWx1ZSkgeyBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfSBpZiAoaGFzVG9TdHJpbmdUYWcpIHsgcmV0dXJuIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKTsgfSB2YXIgc3RyQ2xhc3MgPSB0b19zdHJpbmcuY2FsbCh2YWx1ZSk7IHJldHVybiBzdHJDbGFzcyA9PT0gZm5DbGFzcyB8fCBzdHJDbGFzcyA9PT0gZ2VuQ2xhc3M7IH07XG4gICAgICAgICAgdmFyIGFycmF5X3NsaWNlID0gQXJyYXlQcm90b3R5cGUuc2xpY2U7XG4gICAgICAgICAgdmFyIGFycmF5X2NvbmNhdCA9IEFycmF5UHJvdG90eXBlLmNvbmNhdDtcbiAgICAgICAgICB2YXIgYXJyYXlfcHVzaCA9IEFycmF5UHJvdG90eXBlLnB1c2g7XG4gICAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4O1xuICAgICAgICAgIC8vIC9hZGQgbmVjZXNzYXJ5IGVzNS1zaGltIHV0aWxpdGllc1xuXG4gICAgICAgICAgLy8gMS4gTGV0IFRhcmdldCBiZSB0aGUgdGhpcyB2YWx1ZS5cbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgICAvLyAyLiBJZiBJc0NhbGxhYmxlKFRhcmdldCkgaXMgZmFsc2UsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgICBpZiAoIWlzQ2FsbGFibGUodGFyZ2V0KSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBjYWxsZWQgb24gaW5jb21wYXRpYmxlICcgKyB0YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyAzLiBMZXQgQSBiZSBhIG5ldyAocG9zc2libHkgZW1wdHkpIGludGVybmFsIGxpc3Qgb2YgYWxsIG9mIHRoZVxuICAgICAgICAgIC8vICAgYXJndW1lbnQgdmFsdWVzIHByb3ZpZGVkIGFmdGVyIHRoaXNBcmcgKGFyZzEsIGFyZzIgZXRjKSwgaW4gb3JkZXIuXG4gICAgICAgICAgLy8gWFhYIHNsaWNlZEFyZ3Mgd2lsbCBzdGFuZCBpbiBmb3IgXCJBXCIgaWYgdXNlZFxuICAgICAgICAgIHZhciBhcmdzID0gYXJyYXlfc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpOyAvLyBmb3Igbm9ybWFsIGNhbGxcbiAgICAgICAgICAvLyA0LiBMZXQgRiBiZSBhIG5ldyBuYXRpdmUgRUNNQVNjcmlwdCBvYmplY3QuXG4gICAgICAgICAgLy8gMTEuIFNldCB0aGUgW1tQcm90b3R5cGVdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBGIHRvIHRoZSBzdGFuZGFyZFxuICAgICAgICAgIC8vICAgYnVpbHQtaW4gRnVuY3Rpb24gcHJvdG90eXBlIG9iamVjdCBhcyBzcGVjaWZpZWQgaW4gMTUuMy4zLjEuXG4gICAgICAgICAgLy8gMTIuIFNldCB0aGUgW1tDYWxsXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgRiBhcyBkZXNjcmliZWQgaW5cbiAgICAgICAgICAvLyAgIDE1LjMuNC41LjEuXG4gICAgICAgICAgLy8gMTMuIFNldCB0aGUgW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBGIGFzIGRlc2NyaWJlZCBpblxuICAgICAgICAgIC8vICAgMTUuMy40LjUuMi5cbiAgICAgICAgICAvLyAxNC4gU2V0IHRoZSBbW0hhc0luc3RhbmNlXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgRiBhcyBkZXNjcmliZWQgaW5cbiAgICAgICAgICAvLyAgIDE1LjMuNC41LjMuXG4gICAgICAgICAgdmFyIGJvdW5kO1xuICAgICAgICAgIHZhciBiaW5kZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkge1xuICAgICAgICAgICAgICAgICAgLy8gMTUuMy40LjUuMiBbW0NvbnN0cnVjdF1dXG4gICAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSBbW0NvbnN0cnVjdF1dIGludGVybmFsIG1ldGhvZCBvZiBhIGZ1bmN0aW9uIG9iamVjdCxcbiAgICAgICAgICAgICAgICAgIC8vIEYgdGhhdCB3YXMgY3JlYXRlZCB1c2luZyB0aGUgYmluZCBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBhXG4gICAgICAgICAgICAgICAgICAvLyBsaXN0IG9mIGFyZ3VtZW50cyBFeHRyYUFyZ3MsIHRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICAgICAgICAgICAgICAgICAgLy8gMS4gTGV0IHRhcmdldCBiZSB0aGUgdmFsdWUgb2YgRidzIFtbVGFyZ2V0RnVuY3Rpb25dXVxuICAgICAgICAgICAgICAgICAgLy8gICBpbnRlcm5hbCBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICAgIC8vIDIuIElmIHRhcmdldCBoYXMgbm8gW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbCBtZXRob2QsIGFcbiAgICAgICAgICAgICAgICAgIC8vICAgVHlwZUVycm9yIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG4gICAgICAgICAgICAgICAgICAvLyAzLiBMZXQgYm91bmRBcmdzIGJlIHRoZSB2YWx1ZSBvZiBGJ3MgW1tCb3VuZEFyZ3NdXSBpbnRlcm5hbFxuICAgICAgICAgICAgICAgICAgLy8gICBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICAgIC8vIDQuIExldCBhcmdzIGJlIGEgbmV3IGxpc3QgY29udGFpbmluZyB0aGUgc2FtZSB2YWx1ZXMgYXMgdGhlXG4gICAgICAgICAgICAgICAgICAvLyAgIGxpc3QgYm91bmRBcmdzIGluIHRoZSBzYW1lIG9yZGVyIGZvbGxvd2VkIGJ5IHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgICAvLyAgIHZhbHVlcyBhcyB0aGUgbGlzdCBFeHRyYUFyZ3MgaW4gdGhlIHNhbWUgb3JkZXIuXG4gICAgICAgICAgICAgICAgICAvLyA1LiBSZXR1cm4gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0NvbnN0cnVjdF1dIGludGVybmFsXG4gICAgICAgICAgICAgICAgICAvLyAgIG1ldGhvZCBvZiB0YXJnZXQgcHJvdmlkaW5nIGFyZ3MgYXMgdGhlIGFyZ3VtZW50cy5cblxuICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgIGFycmF5X2NvbmNhdC5jYWxsKGFyZ3MsIGFycmF5X3NsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBpZiAoJE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIDE1LjMuNC41LjEgW1tDYWxsXV1cbiAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlIFtbQ2FsbF1dIGludGVybmFsIG1ldGhvZCBvZiBhIGZ1bmN0aW9uIG9iamVjdCwgRixcbiAgICAgICAgICAgICAgICAgIC8vIHdoaWNoIHdhcyBjcmVhdGVkIHVzaW5nIHRoZSBiaW5kIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGFcbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMgdmFsdWUgYW5kIGEgbGlzdCBvZiBhcmd1bWVudHMgRXh0cmFBcmdzLCB0aGUgZm9sbG93aW5nXG4gICAgICAgICAgICAgICAgICAvLyBzdGVwcyBhcmUgdGFrZW46XG4gICAgICAgICAgICAgICAgICAvLyAxLiBMZXQgYm91bmRBcmdzIGJlIHRoZSB2YWx1ZSBvZiBGJ3MgW1tCb3VuZEFyZ3NdXSBpbnRlcm5hbFxuICAgICAgICAgICAgICAgICAgLy8gICBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICAgIC8vIDIuIExldCBib3VuZFRoaXMgYmUgdGhlIHZhbHVlIG9mIEYncyBbW0JvdW5kVGhpc11dIGludGVybmFsXG4gICAgICAgICAgICAgICAgICAvLyAgIHByb3BlcnR5LlxuICAgICAgICAgICAgICAgICAgLy8gMy4gTGV0IHRhcmdldCBiZSB0aGUgdmFsdWUgb2YgRidzIFtbVGFyZ2V0RnVuY3Rpb25dXSBpbnRlcm5hbFxuICAgICAgICAgICAgICAgICAgLy8gICBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICAgIC8vIDQuIExldCBhcmdzIGJlIGEgbmV3IGxpc3QgY29udGFpbmluZyB0aGUgc2FtZSB2YWx1ZXMgYXMgdGhlXG4gICAgICAgICAgICAgICAgICAvLyAgIGxpc3QgYm91bmRBcmdzIGluIHRoZSBzYW1lIG9yZGVyIGZvbGxvd2VkIGJ5IHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgICAvLyAgIHZhbHVlcyBhcyB0aGUgbGlzdCBFeHRyYUFyZ3MgaW4gdGhlIHNhbWUgb3JkZXIuXG4gICAgICAgICAgICAgICAgICAvLyA1LiBSZXR1cm4gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0NhbGxdXSBpbnRlcm5hbCBtZXRob2RcbiAgICAgICAgICAgICAgICAgIC8vICAgb2YgdGFyZ2V0IHByb3ZpZGluZyBib3VuZFRoaXMgYXMgdGhlIHRoaXMgdmFsdWUgYW5kXG4gICAgICAgICAgICAgICAgICAvLyAgIHByb3ZpZGluZyBhcmdzIGFzIHRoZSBhcmd1bWVudHMuXG5cbiAgICAgICAgICAgICAgICAgIC8vIGVxdWl2OiB0YXJnZXQuY2FsbCh0aGlzLCAuLi5ib3VuZEFyZ3MsIC4uLmFyZ3MpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgICAgICAgIHRoYXQsXG4gICAgICAgICAgICAgICAgICAgICAgYXJyYXlfY29uY2F0LmNhbGwoYXJncywgYXJyYXlfc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gMTUuIElmIHRoZSBbW0NsYXNzXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgVGFyZ2V0IGlzIFwiRnVuY3Rpb25cIiwgdGhlblxuICAgICAgICAgIC8vICAgICBhLiBMZXQgTCBiZSB0aGUgbGVuZ3RoIHByb3BlcnR5IG9mIFRhcmdldCBtaW51cyB0aGUgbGVuZ3RoIG9mIEEuXG4gICAgICAgICAgLy8gICAgIGIuIFNldCB0aGUgbGVuZ3RoIG93biBwcm9wZXJ0eSBvZiBGIHRvIGVpdGhlciAwIG9yIEwsIHdoaWNoZXZlciBpc1xuICAgICAgICAgIC8vICAgICAgIGxhcmdlci5cbiAgICAgICAgICAvLyAxNi4gRWxzZSBzZXQgdGhlIGxlbmd0aCBvd24gcHJvcGVydHkgb2YgRiB0byAwLlxuXG4gICAgICAgICAgdmFyIGJvdW5kTGVuZ3RoID0gbWF4KDAsIHRhcmdldC5sZW5ndGggLSBhcmdzLmxlbmd0aCk7XG5cbiAgICAgICAgICAvLyAxNy4gU2V0IHRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBsZW5ndGggb3duIHByb3BlcnR5IG9mIEYgdG8gdGhlIHZhbHVlc1xuICAgICAgICAgIC8vICAgc3BlY2lmaWVkIGluIDE1LjMuNS4xLlxuICAgICAgICAgIHZhciBib3VuZEFyZ3MgPSBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvdW5kTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgYXJyYXlfcHVzaC5jYWxsKGJvdW5kQXJncywgJyQnICsgaSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gWFhYIEJ1aWxkIGEgZHluYW1pYyBmdW5jdGlvbiB3aXRoIGRlc2lyZWQgYW1vdW50IG9mIGFyZ3VtZW50cyBpcyB0aGUgb25seVxuICAgICAgICAgIC8vIHdheSB0byBzZXQgdGhlIGxlbmd0aCBwcm9wZXJ0eSBvZiBhIGZ1bmN0aW9uLlxuICAgICAgICAgIC8vIEluIGVudmlyb25tZW50cyB3aGVyZSBDb250ZW50IFNlY3VyaXR5IFBvbGljaWVzIGVuYWJsZWQgKENocm9tZSBleHRlbnNpb25zLFxuICAgICAgICAgIC8vIGZvciBleC4pIGFsbCB1c2Ugb2YgZXZhbCBvciBGdW5jdGlvbiBjb3N0cnVjdG9yIHRocm93cyBhbiBleGNlcHRpb24uXG4gICAgICAgICAgLy8gSG93ZXZlciBpbiBhbGwgb2YgdGhlc2UgZW52aXJvbm1lbnRzIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGV4aXN0c1xuICAgICAgICAgIC8vIGFuZCBzbyB0aGlzIGNvZGUgd2lsbCBuZXZlciBiZSBleGVjdXRlZC5cbiAgICAgICAgICBib3VuZCA9IEZ1bmN0aW9uKCdiaW5kZXInLCAncmV0dXJuIGZ1bmN0aW9uICgnICsgYm91bmRBcmdzLmpvaW4oJywnKSArICcpeyByZXR1cm4gYmluZGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0nKShiaW5kZXIpO1xuXG4gICAgICAgICAgaWYgKHRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgRW1wdHkucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgYm91bmQucHJvdG90eXBlID0gbmV3IEVtcHR5KCk7XG4gICAgICAgICAgICAgIC8vIENsZWFuIHVwIGRhbmdsaW5nIHJlZmVyZW5jZXMuXG4gICAgICAgICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVE9ET1xuICAgICAgICAgIC8vIDE4LiBTZXQgdGhlIFtbRXh0ZW5zaWJsZV1dIGludGVybmFsIHByb3BlcnR5IG9mIEYgdG8gdHJ1ZS5cblxuICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICAvLyAxOS4gTGV0IHRocm93ZXIgYmUgdGhlIFtbVGhyb3dUeXBlRXJyb3JdXSBmdW5jdGlvbiBPYmplY3QgKDEzLjIuMykuXG4gICAgICAgICAgLy8gMjAuIENhbGwgdGhlIFtbRGVmaW5lT3duUHJvcGVydHldXSBpbnRlcm5hbCBtZXRob2Qgb2YgRiB3aXRoXG4gICAgICAgICAgLy8gICBhcmd1bWVudHMgXCJjYWxsZXJcIiwgUHJvcGVydHlEZXNjcmlwdG9yIHtbW0dldF1dOiB0aHJvd2VyLCBbW1NldF1dOlxuICAgICAgICAgIC8vICAgdGhyb3dlciwgW1tFbnVtZXJhYmxlXV06IGZhbHNlLCBbW0NvbmZpZ3VyYWJsZV1dOiBmYWxzZX0sIGFuZFxuICAgICAgICAgIC8vICAgZmFsc2UuXG4gICAgICAgICAgLy8gMjEuIENhbGwgdGhlIFtbRGVmaW5lT3duUHJvcGVydHldXSBpbnRlcm5hbCBtZXRob2Qgb2YgRiB3aXRoXG4gICAgICAgICAgLy8gICBhcmd1bWVudHMgXCJhcmd1bWVudHNcIiwgUHJvcGVydHlEZXNjcmlwdG9yIHtbW0dldF1dOiB0aHJvd2VyLFxuICAgICAgICAgIC8vICAgW1tTZXRdXTogdGhyb3dlciwgW1tFbnVtZXJhYmxlXV06IGZhbHNlLCBbW0NvbmZpZ3VyYWJsZV1dOiBmYWxzZX0sXG4gICAgICAgICAgLy8gICBhbmQgZmFsc2UuXG5cbiAgICAgICAgICAvLyBUT0RPXG4gICAgICAgICAgLy8gTk9URSBGdW5jdGlvbiBvYmplY3RzIGNyZWF0ZWQgdXNpbmcgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgZG8gbm90XG4gICAgICAgICAgLy8gaGF2ZSBhIHByb3RvdHlwZSBwcm9wZXJ0eSBvciB0aGUgW1tDb2RlXV0sIFtbRm9ybWFsUGFyYW1ldGVyc11dLCBhbmRcbiAgICAgICAgICAvLyBbW1Njb3BlXV0gaW50ZXJuYWwgcHJvcGVydGllcy5cbiAgICAgICAgICAvLyBYWFggY2FuJ3QgZGVsZXRlIHByb3RvdHlwZSBpbiBwdXJlLWpzLlxuXG4gICAgICAgICAgLy8gMjIuIFJldHVybiBGLlxuICAgICAgICAgIHJldHVybiBib3VuZDtcbiAgICAgIH1cbiAgfSk7XG59KVxuLmNhbGwoJ29iamVjdCcgPT09IHR5cGVvZiB3aW5kb3cgJiYgd2luZG93IHx8ICdvYmplY3QnID09PSB0eXBlb2Ygc2VsZiAmJiBzZWxmIHx8ICdvYmplY3QnID09PSB0eXBlb2YgZ2xvYmFsICYmIGdsb2JhbCB8fCB7fSk7XG5cbihmdW5jdGlvbih1bmRlZmluZWQpIHtcblxuICAgIC8vIERldGVjdGlvbiBmcm9tIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9GaW5hbmNpYWwtVGltZXMvcG9seWZpbGwtc2VydmljZS9tYXN0ZXIvcGFja2FnZXMvcG9seWZpbGwtbGlicmFyeS9wb2x5ZmlsbHMvRE9NVG9rZW5MaXN0L2RldGVjdC5qc1xuICAgIHZhciBkZXRlY3QgPSAoXG4gICAgICAnRE9NVG9rZW5MaXN0JyBpbiB0aGlzICYmIChmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gJ2NsYXNzTGlzdCcgaW4geCA/ICF4LmNsYXNzTGlzdC50b2dnbGUoJ3gnLCBmYWxzZSkgJiYgIXguY2xhc3NOYW1lIDogdHJ1ZTtcbiAgICAgIH0pKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3gnKSlcbiAgICApO1xuXG4gICAgaWYgKGRldGVjdCkgcmV0dXJuXG5cbiAgICAvLyBQb2x5ZmlsbCBmcm9tIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9GaW5hbmNpYWwtVGltZXMvcG9seWZpbGwtc2VydmljZS9tYXN0ZXIvcGFja2FnZXMvcG9seWZpbGwtbGlicmFyeS9wb2x5ZmlsbHMvRE9NVG9rZW5MaXN0L3BvbHlmaWxsLmpzXG4gICAgKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAgIHZhciBuYXRpdmVJbXBsID0gXCJET01Ub2tlbkxpc3RcIiBpbiBnbG9iYWwgJiYgZ2xvYmFsLkRPTVRva2VuTGlzdDtcblxuICAgICAgaWYgKFxuICAgICAgICAgICFuYXRpdmVJbXBsIHx8XG4gICAgICAgICAgKFxuICAgICAgICAgICAgISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgJiZcbiAgICAgICAgICAgICEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKSAmJlxuICAgICAgICAgICAgIShkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKS5jbGFzc0xpc3QgaW5zdGFuY2VvZiBET01Ub2tlbkxpc3QpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgZ2xvYmFsLkRPTVRva2VuTGlzdCA9IChmdW5jdGlvbigpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICAgIHZhciBkcFN1cHBvcnQgPSB0cnVlO1xuICAgICAgICAgIHZhciBkZWZpbmVHZXR0ZXIgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCBmbiwgY29uZmlndXJhYmxlKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KVxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSA9PT0gZHBTdXBwb3J0ID8gdHJ1ZSA6ICEhY29uZmlndXJhYmxlLFxuICAgICAgICAgICAgICAgIGdldDogZm5cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGVsc2Ugb2JqZWN0Ll9fZGVmaW5lR2V0dGVyX18obmFtZSwgZm4pO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvKiogRW5zdXJlIHRoZSBicm93c2VyIGFsbG93cyBPYmplY3QuZGVmaW5lUHJvcGVydHkgdG8gYmUgdXNlZCBvbiBuYXRpdmUgSmF2YVNjcmlwdCBvYmplY3RzLiAqL1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkZWZpbmVHZXR0ZXIoe30sIFwic3VwcG9ydFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGRwU3VwcG9ydCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgdmFyIF9ET01Ub2tlbkxpc3QgPSBmdW5jdGlvbiAoZWwsIHByb3ApIHtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICAgICAgICAgIHZhciB0b2tlbk1hcCA9IHt9O1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgICAgICAgICB2YXIgbWF4TGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHZhciBhZGRJbmRleEdldHRlciA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgIGRlZmluZUdldHRlcih0aGF0LCBpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcHJlb3AoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW5zW2ldO1xuICAgICAgICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcmVpbmRleCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAvKiogRGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGFycmF5LWxpa2UgYWNjZXNzIHRvIHRoZSB0b2tlbkxpc3QncyBjb250ZW50cy4gKi9cbiAgICAgICAgICAgICAgaWYgKGxlbmd0aCA+PSBtYXhMZW5ndGgpXG4gICAgICAgICAgICAgICAgZm9yICg7IG1heExlbmd0aCA8IGxlbmd0aDsgKyttYXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGFkZEluZGV4R2V0dGVyKG1heExlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqIEhlbHBlciBmdW5jdGlvbiBjYWxsZWQgYXQgdGhlIHN0YXJ0IG9mIGVhY2ggY2xhc3MgbWV0aG9kLiBJbnRlcm5hbCB1c2Ugb25seS4gKi9cbiAgICAgICAgICAgIHZhciBwcmVvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgIHZhciByU3BhY2UgPSAvXFxzKy87XG5cbiAgICAgICAgICAgICAgLyoqIFZhbGlkYXRlIHRoZSB0b2tlbi9zIHBhc3NlZCB0byBhbiBpbnN0YW5jZSBtZXRob2QsIGlmIGFueS4gKi9cbiAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoKVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgaWYgKHJTcGFjZS50ZXN0KGFyZ3NbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IFN5bnRheEVycm9yKCdTdHJpbmcgXCInICsgYXJnc1tpXSArICdcIiAnICsgXCJjb250YWluc1wiICsgJyBhbiBpbnZhbGlkIGNoYXJhY3RlcicpO1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5jb2RlID0gNTtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubmFtZSA9IFwiSW52YWxpZENoYXJhY3RlckVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgLyoqIFNwbGl0IHRoZSBuZXcgdmFsdWUgYXBhcnQgYnkgd2hpdGVzcGFjZSovXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxbcHJvcF0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICB0b2tlbnMgPSAoXCJcIiArIGVsW3Byb3BdLmJhc2VWYWwpLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpLnNwbGl0KHJTcGFjZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9rZW5zID0gKFwiXCIgKyBlbFtwcm9wXSkucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIikuc3BsaXQoclNwYWNlKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8qKiBBdm9pZCB0cmVhdGluZyBibGFuayBzdHJpbmdzIGFzIHNpbmdsZS1pdGVtIHRva2VuIGxpc3RzICovXG4gICAgICAgICAgICAgIGlmIChcIlwiID09PSB0b2tlbnNbMF0pIHRva2VucyA9IFtdO1xuXG4gICAgICAgICAgICAgIC8qKiBSZXBvcHVsYXRlIHRoZSBpbnRlcm5hbCB0b2tlbiBsaXN0cyAqL1xuICAgICAgICAgICAgICB0b2tlbk1hcCA9IHt9O1xuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIHRva2VuTWFwW3Rva2Vuc1tpXV0gPSB0cnVlO1xuICAgICAgICAgICAgICBsZW5ndGggPSB0b2tlbnMubGVuZ3RoO1xuICAgICAgICAgICAgICByZWluZGV4KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKiogUG9wdWxhdGUgb3VyIGludGVybmFsIHRva2VuIGxpc3QgaWYgdGhlIHRhcmdldGVkIGF0dHJpYnV0ZSBvZiB0aGUgc3ViamVjdCBlbGVtZW50IGlzbid0IGVtcHR5LiAqL1xuICAgICAgICAgICAgcHJlb3AoKTtcblxuICAgICAgICAgICAgLyoqIFJldHVybiB0aGUgbnVtYmVyIG9mIHRva2VucyBpbiB0aGUgdW5kZXJseWluZyBzdHJpbmcuIFJlYWQtb25seS4gKi9cbiAgICAgICAgICAgIGRlZmluZUdldHRlcih0aGF0LCBcImxlbmd0aFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHByZW9wKCk7XG4gICAgICAgICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLyoqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IHRvU3RyaW5nL3RvTG9jYWxlU3RyaW5nIG1ldGhvZHMgdG8gcmV0dXJuIGEgc3BhY2UtZGVsaW1pdGVkIGxpc3Qgb2YgdG9rZW5zIHdoZW4gdHlwZWNhc3QuICovXG4gICAgICAgICAgICB0aGF0LnRvTG9jYWxlU3RyaW5nID1cbiAgICAgICAgICAgICAgdGhhdC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBwcmVvcCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbnMuam9pbihcIiBcIik7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoYXQuaXRlbSA9IGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgICAgICAgcHJlb3AoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpZHhdO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhhdC5jb250YWlucyA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAgICAgICBwcmVvcCgpO1xuICAgICAgICAgICAgICByZXR1cm4gISF0b2tlbk1hcFt0b2tlbl07XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGF0LmFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcHJlb3AuYXBwbHkodGhhdCwgYXJncyA9IGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgZm9yICh2YXIgYXJncywgdG9rZW4sIGkgPSAwLCBsID0gYXJncy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IGFyZ3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKCF0b2tlbk1hcFt0b2tlbl0pIHtcbiAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICAgIHRva2VuTWFwW3Rva2VuXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLyoqIFVwZGF0ZSB0aGUgdGFyZ2V0ZWQgYXR0cmlidXRlIG9mIHRoZSBhdHRhY2hlZCBlbGVtZW50IGlmIHRoZSB0b2tlbiBsaXN0J3MgY2hhbmdlZC4gKi9cbiAgICAgICAgICAgICAgaWYgKGxlbmd0aCAhPT0gdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHRva2Vucy5sZW5ndGggPj4+IDA7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbFtwcm9wXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgZWxbcHJvcF0uYmFzZVZhbCA9IHRva2Vucy5qb2luKFwiIFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZWxbcHJvcF0gPSB0b2tlbnMuam9pbihcIiBcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlaW5kZXgoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhhdC5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHByZW9wLmFwcGx5KHRoYXQsIGFyZ3MgPSBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgIC8qKiBCdWlsZCBhIGhhc2ggb2YgdG9rZW4gbmFtZXMgdG8gY29tcGFyZSBhZ2FpbnN0IHdoZW4gcmVjb2xsZWN0aW5nIG91ciB0b2tlbiBsaXN0LiAqL1xuICAgICAgICAgICAgICBmb3IgKHZhciBhcmdzLCBpZ25vcmUgPSB7fSwgaSA9IDAsIHQgPSBbXTsgaSA8IGFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZ25vcmVbYXJnc1tpXV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b2tlbk1hcFthcmdzW2ldXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8qKiBSdW4gdGhyb3VnaCBvdXIgdG9rZW5zIGxpc3QgYW5kIHJlYXNzaWduIG9ubHkgdGhvc2UgdGhhdCBhcmVuJ3QgZGVmaW5lZCBpbiB0aGUgaGFzaCBkZWNsYXJlZCBhYm92ZS4gKi9cbiAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZVt0b2tlbnNbaV1dKSB0LnB1c2godG9rZW5zW2ldKTtcblxuICAgICAgICAgICAgICB0b2tlbnMgPSB0O1xuICAgICAgICAgICAgICBsZW5ndGggPSB0Lmxlbmd0aCA+Pj4gMDtcblxuICAgICAgICAgICAgICAvKiogVXBkYXRlIHRoZSB0YXJnZXRlZCBhdHRyaWJ1dGUgb2YgdGhlIGF0dGFjaGVkIGVsZW1lbnQuICovXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxbcHJvcF0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBlbFtwcm9wXS5iYXNlVmFsID0gdG9rZW5zLmpvaW4oXCIgXCIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsW3Byb3BdID0gdG9rZW5zLmpvaW4oXCIgXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlaW5kZXgoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoYXQudG9nZ2xlID0gZnVuY3Rpb24gKHRva2VuLCBmb3JjZSkge1xuICAgICAgICAgICAgICBwcmVvcC5hcHBseSh0aGF0LCBbdG9rZW5dKTtcblxuICAgICAgICAgICAgICAvKiogVG9rZW4gc3RhdGUncyBiZWluZyBmb3JjZWQuICovXG4gICAgICAgICAgICAgIGlmICh1bmRlZmluZWQgIT09IGZvcmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvcmNlKSB7XG4gICAgICAgICAgICAgICAgICB0aGF0LmFkZCh0b2tlbik7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhhdC5yZW1vdmUodG9rZW4pO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8qKiBUb2tlbiBhbHJlYWR5IGV4aXN0cyBpbiB0b2tlbkxpc3QuIFJlbW92ZSBpdCwgYW5kIHJldHVybiBGQUxTRS4gKi9cbiAgICAgICAgICAgICAgaWYgKHRva2VuTWFwW3Rva2VuXSkge1xuICAgICAgICAgICAgICAgIHRoYXQucmVtb3ZlKHRva2VuKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvKiogT3RoZXJ3aXNlLCBhZGQgdGhlIHRva2VuIGFuZCByZXR1cm4gVFJVRS4gKi9cbiAgICAgICAgICAgICAgdGhhdC5hZGQodG9rZW4pO1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4gX0RPTVRva2VuTGlzdDtcbiAgICAgICAgfSgpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHNlY29uZCBhcmd1bWVudCB0byBuYXRpdmUgRE9NVG9rZW5MaXN0LnRvZ2dsZSgpIGlmIG5lY2Vzc2FyeVxuICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGlmICghKCdjbGFzc0xpc3QnIGluIGUpKSByZXR1cm47XG4gICAgICAgIGUuY2xhc3NMaXN0LnRvZ2dsZSgneCcsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFlLmNsYXNzTGlzdC5jb250YWlucygneCcpKSByZXR1cm47XG4gICAgICAgIGUuY2xhc3NMaXN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUodG9rZW4gLyosIGZvcmNlKi8pIHtcbiAgICAgICAgICB2YXIgZm9yY2UgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgaWYgKGZvcmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBhZGQgPSAhdGhpcy5jb250YWlucyh0b2tlbik7XG4gICAgICAgICAgICB0aGlzW2FkZCA/ICdhZGQnIDogJ3JlbW92ZSddKHRva2VuKTtcbiAgICAgICAgICAgIHJldHVybiBhZGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcmNlID0gISFmb3JjZTtcbiAgICAgICAgICB0aGlzW2ZvcmNlID8gJ2FkZCcgOiAncmVtb3ZlJ10odG9rZW4pO1xuICAgICAgICAgIHJldHVybiBmb3JjZTtcbiAgICAgICAgfTtcbiAgICAgIH0oKSk7XG5cbiAgICAgIC8vIEFkZCBtdWx0aXBsZSBhcmd1bWVudHMgdG8gbmF0aXZlIERPTVRva2VuTGlzdC5hZGQoKSBpZiBuZWNlc3NhcnlcbiAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpZiAoISgnY2xhc3NMaXN0JyBpbiBlKSkgcmV0dXJuO1xuICAgICAgICBlLmNsYXNzTGlzdC5hZGQoJ2EnLCAnYicpO1xuICAgICAgICBpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoJ2InKSkgcmV0dXJuO1xuICAgICAgICB2YXIgbmF0aXZlID0gZS5jbGFzc0xpc3QuY29uc3RydWN0b3IucHJvdG90eXBlLmFkZDtcbiAgICAgICAgZS5jbGFzc0xpc3QuY29uc3RydWN0b3IucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICB2YXIgbCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIG5hdGl2ZS5jYWxsKHRoaXMsIGFyZ3NbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0oKSk7XG5cbiAgICAgIC8vIEFkZCBtdWx0aXBsZSBhcmd1bWVudHMgdG8gbmF0aXZlIERPTVRva2VuTGlzdC5yZW1vdmUoKSBpZiBuZWNlc3NhcnlcbiAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpZiAoISgnY2xhc3NMaXN0JyBpbiBlKSkgcmV0dXJuO1xuICAgICAgICBlLmNsYXNzTGlzdC5hZGQoJ2EnKTtcbiAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCdiJyk7XG4gICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnYScsICdiJyk7XG4gICAgICAgIGlmICghZS5jbGFzc0xpc3QuY29udGFpbnMoJ2InKSkgcmV0dXJuO1xuICAgICAgICB2YXIgbmF0aXZlID0gZS5jbGFzc0xpc3QuY29uc3RydWN0b3IucHJvdG90eXBlLnJlbW92ZTtcbiAgICAgICAgZS5jbGFzc0xpc3QuY29uc3RydWN0b3IucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICB2YXIgbCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIG5hdGl2ZS5jYWxsKHRoaXMsIGFyZ3NbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0oKSk7XG5cbiAgICB9KHRoaXMpKTtcblxufSkuY2FsbCgnb2JqZWN0JyA9PT0gdHlwZW9mIHdpbmRvdyAmJiB3aW5kb3cgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBzZWxmICYmIHNlbGYgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBnbG9iYWwgJiYgZ2xvYmFsIHx8IHt9KTtcblxuKGZ1bmN0aW9uKHVuZGVmaW5lZCkge1xuXG4vLyBEZXRlY3Rpb24gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vRmluYW5jaWFsLVRpbWVzL3BvbHlmaWxsLXNlcnZpY2UvYmxvYi9tYXN0ZXIvcGFja2FnZXMvcG9seWZpbGwtbGlicmFyeS9wb2x5ZmlsbHMvRG9jdW1lbnQvZGV0ZWN0LmpzXG52YXIgZGV0ZWN0ID0gKFwiRG9jdW1lbnRcIiBpbiB0aGlzKTtcblxuaWYgKGRldGVjdCkgcmV0dXJuXG5cbi8vIFBvbHlmaWxsIGZyb20gaHR0cHM6Ly9jZG4ucG9seWZpbGwuaW8vdjIvcG9seWZpbGwuanM/ZmVhdHVyZXM9RG9jdW1lbnQmZmxhZ3M9YWx3YXlzXG5pZiAoKHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSA9PT0gXCJ1bmRlZmluZWRcIikgJiYgKHR5cGVvZiBpbXBvcnRTY3JpcHRzICE9PSBcImZ1bmN0aW9uXCIpKSB7XG5cblx0aWYgKHRoaXMuSFRNTERvY3VtZW50KSB7IC8vIElFOFxuXG5cdFx0Ly8gSFRNTERvY3VtZW50IGlzIGFuIGV4dGVuc2lvbiBvZiBEb2N1bWVudC4gIElmIHRoZSBicm93c2VyIGhhcyBIVE1MRG9jdW1lbnQgYnV0IG5vdCBEb2N1bWVudCwgdGhlIGZvcm1lciB3aWxsIHN1ZmZpY2UgYXMgYW4gYWxpYXMgZm9yIHRoZSBsYXR0ZXIuXG5cdFx0dGhpcy5Eb2N1bWVudCA9IHRoaXMuSFRNTERvY3VtZW50O1xuXG5cdH0gZWxzZSB7XG5cblx0XHQvLyBDcmVhdGUgYW4gZW1wdHkgZnVuY3Rpb24gdG8gYWN0IGFzIHRoZSBtaXNzaW5nIGNvbnN0cnVjdG9yIGZvciB0aGUgZG9jdW1lbnQgb2JqZWN0LCBhdHRhY2ggdGhlIGRvY3VtZW50IG9iamVjdCBhcyBpdHMgcHJvdG90eXBlLiAgVGhlIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIGFub255bW91cyBlbHNlIGl0IGlzIGhvaXN0ZWQgYW5kIGNhdXNlcyB0aGUgZmVhdHVyZSBkZXRlY3QgdG8gcHJlbWF0dXJlbHkgcGFzcywgcHJldmVudGluZyB0aGUgYXNzaWdubWVudHMgYmVsb3cgYmVpbmcgbWFkZS5cblx0XHR0aGlzLkRvY3VtZW50ID0gdGhpcy5IVE1MRG9jdW1lbnQgPSBkb2N1bWVudC5jb25zdHJ1Y3RvciA9IChuZXcgRnVuY3Rpb24oJ3JldHVybiBmdW5jdGlvbiBEb2N1bWVudCgpIHt9JykoKSk7XG5cdFx0dGhpcy5Eb2N1bWVudC5wcm90b3R5cGUgPSBkb2N1bWVudDtcblx0fVxufVxuXG5cbn0pXG4uY2FsbCgnb2JqZWN0JyA9PT0gdHlwZW9mIHdpbmRvdyAmJiB3aW5kb3cgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBzZWxmICYmIHNlbGYgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBnbG9iYWwgJiYgZ2xvYmFsIHx8IHt9KTtcblxuKGZ1bmN0aW9uKHVuZGVmaW5lZCkge1xuXG4vLyBEZXRlY3Rpb24gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vRmluYW5jaWFsLVRpbWVzL3BvbHlmaWxsLXNlcnZpY2UvYmxvYi9tYXN0ZXIvcGFja2FnZXMvcG9seWZpbGwtbGlicmFyeS9wb2x5ZmlsbHMvRWxlbWVudC9kZXRlY3QuanNcbnZhciBkZXRlY3QgPSAoJ0VsZW1lbnQnIGluIHRoaXMgJiYgJ0hUTUxFbGVtZW50JyBpbiB0aGlzKTtcblxuaWYgKGRldGVjdCkgcmV0dXJuXG5cbi8vIFBvbHlmaWxsIGZyb20gaHR0cHM6Ly9jZG4ucG9seWZpbGwuaW8vdjIvcG9seWZpbGwuanM/ZmVhdHVyZXM9RWxlbWVudCZmbGFncz1hbHdheXNcbihmdW5jdGlvbiAoKSB7XG5cblx0Ly8gSUU4XG5cdGlmICh3aW5kb3cuRWxlbWVudCAmJiAhd2luZG93LkhUTUxFbGVtZW50KSB7XG5cdFx0d2luZG93LkhUTUxFbGVtZW50ID0gd2luZG93LkVsZW1lbnQ7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gY3JlYXRlIEVsZW1lbnQgY29uc3RydWN0b3Jcblx0d2luZG93LkVsZW1lbnQgPSB3aW5kb3cuSFRNTEVsZW1lbnQgPSBuZXcgRnVuY3Rpb24oJ3JldHVybiBmdW5jdGlvbiBFbGVtZW50KCkge30nKSgpO1xuXG5cdC8vIGdlbmVyYXRlIHNhbmRib3hlZCBpZnJhbWVcblx0dmFyIHZib2R5ID0gZG9jdW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9keScpKTtcblx0dmFyIGZyYW1lID0gdmJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJykpO1xuXG5cdC8vIHVzZSBzYW5kYm94ZWQgaWZyYW1lIHRvIHJlcGxpY2F0ZSBFbGVtZW50IGZ1bmN0aW9uYWxpdHlcblx0dmFyIGZyYW1lRG9jdW1lbnQgPSBmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuXHR2YXIgcHJvdG90eXBlID0gRWxlbWVudC5wcm90b3R5cGUgPSBmcmFtZURvY3VtZW50LmFwcGVuZENoaWxkKGZyYW1lRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnKicpKTtcblx0dmFyIGNhY2hlID0ge307XG5cblx0Ly8gcG9seWZpbGwgRWxlbWVudC5wcm90b3R5cGUgb24gYW4gZWxlbWVudFxuXHR2YXIgc2hpdiA9IGZ1bmN0aW9uIChlbGVtZW50LCBkZWVwKSB7XG5cdFx0dmFyXG5cdFx0Y2hpbGROb2RlcyA9IGVsZW1lbnQuY2hpbGROb2RlcyB8fCBbXSxcblx0XHRpbmRleCA9IC0xLFxuXHRcdGtleSwgdmFsdWUsIGNoaWxkTm9kZTtcblxuXHRcdGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSAxICYmIGVsZW1lbnQuY29uc3RydWN0b3IgIT09IEVsZW1lbnQpIHtcblx0XHRcdGVsZW1lbnQuY29uc3RydWN0b3IgPSBFbGVtZW50O1xuXG5cdFx0XHRmb3IgKGtleSBpbiBjYWNoZSkge1xuXHRcdFx0XHR2YWx1ZSA9IGNhY2hlW2tleV07XG5cdFx0XHRcdGVsZW1lbnRba2V5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHdoaWxlIChjaGlsZE5vZGUgPSBkZWVwICYmIGNoaWxkTm9kZXNbKytpbmRleF0pIHtcblx0XHRcdHNoaXYoY2hpbGROb2RlLCBkZWVwKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fTtcblxuXHR2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpO1xuXHR2YXIgbmF0aXZlQ3JlYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQ7XG5cdHZhciBpbnRlcnZhbDtcblx0dmFyIGxvb3BMaW1pdCA9IDEwMDtcblxuXHRwcm90b3R5cGUuYXR0YWNoRXZlbnQoJ29ucHJvcGVydHljaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHR2YXJcblx0XHRwcm9wZXJ0eU5hbWUgPSBldmVudC5wcm9wZXJ0eU5hbWUsXG5cdFx0bm9uVmFsdWUgPSAhY2FjaGUuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSxcblx0XHRuZXdWYWx1ZSA9IHByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdLFxuXHRcdG9sZFZhbHVlID0gY2FjaGVbcHJvcGVydHlOYW1lXSxcblx0XHRpbmRleCA9IC0xLFxuXHRcdGVsZW1lbnQ7XG5cblx0XHR3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnRzWysraW5kZXhdKSB7XG5cdFx0XHRpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gMSkge1xuXHRcdFx0XHRpZiAobm9uVmFsdWUgfHwgZWxlbWVudFtwcm9wZXJ0eU5hbWVdID09PSBvbGRWYWx1ZSkge1xuXHRcdFx0XHRcdGVsZW1lbnRbcHJvcGVydHlOYW1lXSA9IG5ld1ZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2FjaGVbcHJvcGVydHlOYW1lXSA9IG5ld1ZhbHVlO1xuXHR9KTtcblxuXHRwcm90b3R5cGUuY29uc3RydWN0b3IgPSBFbGVtZW50O1xuXG5cdGlmICghcHJvdG90eXBlLmhhc0F0dHJpYnV0ZSkge1xuXHRcdC8vIDxFbGVtZW50Pi5oYXNBdHRyaWJ1dGVcblx0XHRwcm90b3R5cGUuaGFzQXR0cmlidXRlID0gZnVuY3Rpb24gaGFzQXR0cmlidXRlKG5hbWUpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKSAhPT0gbnVsbDtcblx0XHR9O1xuXHR9XG5cblx0Ly8gQXBwbHkgRWxlbWVudCBwcm90b3R5cGUgdG8gdGhlIHByZS1leGlzdGluZyBET00gYXMgc29vbiBhcyB0aGUgYm9keSBlbGVtZW50IGFwcGVhcnMuXG5cdGZ1bmN0aW9uIGJvZHlDaGVjaygpIHtcblx0XHRpZiAoIShsb29wTGltaXQtLSkpIGNsZWFyVGltZW91dChpbnRlcnZhbCk7XG5cdFx0aWYgKGRvY3VtZW50LmJvZHkgJiYgIWRvY3VtZW50LmJvZHkucHJvdG90eXBlICYmIC8oY29tcGxldGV8aW50ZXJhY3RpdmUpLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSB7XG5cdFx0XHRzaGl2KGRvY3VtZW50LCB0cnVlKTtcblx0XHRcdGlmIChpbnRlcnZhbCAmJiBkb2N1bWVudC5ib2R5LnByb3RvdHlwZSkgY2xlYXJUaW1lb3V0KGludGVydmFsKTtcblx0XHRcdHJldHVybiAoISFkb2N1bWVudC5ib2R5LnByb3RvdHlwZSk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRpZiAoIWJvZHlDaGVjaygpKSB7XG5cdFx0ZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gYm9keUNoZWNrO1xuXHRcdGludGVydmFsID0gc2V0SW50ZXJ2YWwoYm9keUNoZWNrLCAyNSk7XG5cdH1cblxuXHQvLyBBcHBseSB0byBhbnkgbmV3IGVsZW1lbnRzIGNyZWF0ZWQgYWZ0ZXIgbG9hZFxuXHRkb2N1bWVudC5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlRWxlbWVudChub2RlTmFtZSkge1xuXHRcdHZhciBlbGVtZW50ID0gbmF0aXZlQ3JlYXRlRWxlbWVudChTdHJpbmcobm9kZU5hbWUpLnRvTG93ZXJDYXNlKCkpO1xuXHRcdHJldHVybiBzaGl2KGVsZW1lbnQpO1xuXHR9O1xuXG5cdC8vIHJlbW92ZSBzYW5kYm94ZWQgaWZyYW1lXG5cdGRvY3VtZW50LnJlbW92ZUNoaWxkKHZib2R5KTtcbn0oKSk7XG5cbn0pXG4uY2FsbCgnb2JqZWN0JyA9PT0gdHlwZW9mIHdpbmRvdyAmJiB3aW5kb3cgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBzZWxmICYmIHNlbGYgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBnbG9iYWwgJiYgZ2xvYmFsIHx8IHt9KTtcblxuKGZ1bmN0aW9uKHVuZGVmaW5lZCkge1xuXG4gICAgLy8gRGV0ZWN0aW9uIGZyb20gaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0ZpbmFuY2lhbC1UaW1lcy9wb2x5ZmlsbC1zZXJ2aWNlLzg3MTdhOWUwNGFjN2FmZjk5YjQ5ODBmYmVkZWFkOTgwMzZiMDkyOWEvcGFja2FnZXMvcG9seWZpbGwtbGlicmFyeS9wb2x5ZmlsbHMvRWxlbWVudC9wcm90b3R5cGUvY2xhc3NMaXN0L2RldGVjdC5qc1xuICAgIHZhciBkZXRlY3QgPSAoXG4gICAgICAnZG9jdW1lbnQnIGluIHRoaXMgJiYgXCJjbGFzc0xpc3RcIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgJ0VsZW1lbnQnIGluIHRoaXMgJiYgJ2NsYXNzTGlzdCcgaW4gRWxlbWVudC5wcm90b3R5cGUgJiYgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnYScsICdiJyk7XG4gICAgICAgIHJldHVybiBlLmNsYXNzTGlzdC5jb250YWlucygnYicpO1xuICAgICAgfSgpKVxuICAgICk7XG5cbiAgICBpZiAoZGV0ZWN0KSByZXR1cm5cblxuICAgIC8vIFBvbHlmaWxsIGZyb20gaHR0cHM6Ly9jZG4ucG9seWZpbGwuaW8vdjIvcG9seWZpbGwuanM/ZmVhdHVyZXM9RWxlbWVudC5wcm90b3R5cGUuY2xhc3NMaXN0JmZsYWdzPWFsd2F5c1xuICAgIChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICB2YXIgZHBTdXBwb3J0ID0gdHJ1ZTtcbiAgICAgIHZhciBkZWZpbmVHZXR0ZXIgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCBmbiwgY29uZmlndXJhYmxlKSB7XG4gICAgICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSA9PT0gZHBTdXBwb3J0ID8gdHJ1ZSA6ICEhY29uZmlndXJhYmxlLFxuICAgICAgICAgICAgZ2V0OiBmblxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGVsc2Ugb2JqZWN0Ll9fZGVmaW5lR2V0dGVyX18obmFtZSwgZm4pO1xuICAgICAgfTtcbiAgICAgIC8qKiBFbnN1cmUgdGhlIGJyb3dzZXIgYWxsb3dzIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0byBiZSB1c2VkIG9uIG5hdGl2ZSBKYXZhU2NyaXB0IG9iamVjdHMuICovXG4gICAgICB0cnkge1xuICAgICAgICBkZWZpbmVHZXR0ZXIoe30sIFwic3VwcG9ydFwiKTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGRwU3VwcG9ydCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgLyoqIFBvbHlmaWxscyBhIHByb3BlcnR5IHdpdGggYSBET01Ub2tlbkxpc3QgKi9cbiAgICAgIHZhciBhZGRQcm9wID0gZnVuY3Rpb24gKG8sIG5hbWUsIGF0dHIpIHtcblxuICAgICAgICBkZWZpbmVHZXR0ZXIoby5wcm90b3R5cGUsIG5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgdG9rZW5MaXN0O1xuXG4gICAgICAgICAgdmFyIFRISVMgPSB0aGlzLFxuXG4gICAgICAgICAgLyoqIFByZXZlbnQgdGhpcyBmcm9tIGZpcmluZyB0d2ljZSBmb3Igc29tZSByZWFzb24uIFdoYXQgdGhlIGhlbGwsIElFLiAqL1xuICAgICAgICAgIGdpYmJlcmlzaFByb3BlcnR5ID0gXCJfX2RlZmluZUdldHRlcl9fXCIgKyBcIkRFRklORV9QUk9QRVJUWVwiICsgbmFtZTtcbiAgICAgICAgICBpZihUSElTW2dpYmJlcmlzaFByb3BlcnR5XSkgcmV0dXJuIHRva2VuTGlzdDtcbiAgICAgICAgICBUSElTW2dpYmJlcmlzaFByb3BlcnR5XSA9IHRydWU7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJRTggY2FuJ3QgZGVmaW5lIHByb3BlcnRpZXMgb24gbmF0aXZlIEphdmFTY3JpcHQgb2JqZWN0cywgc28gd2UnbGwgdXNlIGEgZHVtYiBoYWNrIGluc3RlYWQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBXaGF0IHRoaXMgaXMgZG9pbmcgaXMgY3JlYXRpbmcgYSBkdW1teSBlbGVtZW50IChcInJlZmxlY3Rpb25cIikgaW5zaWRlIGEgZGV0YWNoZWQgcGhhbnRvbSBub2RlIChcIm1pcnJvclwiKVxuICAgICAgICAgICAqIHRoYXQgc2VydmVzIGFzIHRoZSB0YXJnZXQgb2YgT2JqZWN0LmRlZmluZVByb3BlcnR5IGluc3RlYWQuIFdoaWxlIHdlIGNvdWxkIHNpbXBseSB1c2UgdGhlIHN1YmplY3QgSFRNTFxuICAgICAgICAgICAqIGVsZW1lbnQgaW5zdGVhZCwgdGhpcyB3b3VsZCBjb25mbGljdCB3aXRoIGVsZW1lbnQgdHlwZXMgd2hpY2ggdXNlIGluZGV4ZWQgcHJvcGVydGllcyAoc3VjaCBhcyBmb3JtcyBhbmRcbiAgICAgICAgICAgKiBzZWxlY3QgbGlzdHMpLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmIChmYWxzZSA9PT0gZHBTdXBwb3J0KSB7XG5cbiAgICAgICAgICAgIHZhciB2aXNhZ2U7XG4gICAgICAgICAgICB2YXIgbWlycm9yID0gYWRkUHJvcC5taXJyb3IgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciByZWZsZWN0aW9ucyA9IG1pcnJvci5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgdmFyIGwgPSByZWZsZWN0aW9ucy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgKytpKVxuICAgICAgICAgICAgICBpZiAocmVmbGVjdGlvbnNbaV0uX1IgPT09IFRISVMpIHtcbiAgICAgICAgICAgICAgICB2aXNhZ2UgPSByZWZsZWN0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiogQ291bGRuJ3QgZmluZCBhbiBlbGVtZW50J3MgcmVmbGVjdGlvbiBpbnNpZGUgdGhlIG1pcnJvci4gTWF0ZXJpYWxpc2Ugb25lLiAqL1xuICAgICAgICAgICAgdmlzYWdlIHx8ICh2aXNhZ2UgPSBtaXJyb3IuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkpO1xuXG4gICAgICAgICAgICB0b2tlbkxpc3QgPSBET01Ub2tlbkxpc3QuY2FsbCh2aXNhZ2UsIFRISVMsIGF0dHIpO1xuICAgICAgICAgIH0gZWxzZSB0b2tlbkxpc3QgPSBuZXcgRE9NVG9rZW5MaXN0KFRISVMsIGF0dHIpO1xuXG4gICAgICAgICAgZGVmaW5lR2V0dGVyKFRISVMsIG5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbkxpc3Q7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGVsZXRlIFRISVNbZ2liYmVyaXNoUHJvcGVydHldO1xuXG4gICAgICAgICAgcmV0dXJuIHRva2VuTGlzdDtcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICB9O1xuXG4gICAgICBhZGRQcm9wKGdsb2JhbC5FbGVtZW50LCBcImNsYXNzTGlzdFwiLCBcImNsYXNzTmFtZVwiKTtcbiAgICAgIGFkZFByb3AoZ2xvYmFsLkhUTUxFbGVtZW50LCBcImNsYXNzTGlzdFwiLCBcImNsYXNzTmFtZVwiKTtcbiAgICAgIGFkZFByb3AoZ2xvYmFsLkhUTUxMaW5rRWxlbWVudCwgXCJyZWxMaXN0XCIsIFwicmVsXCIpO1xuICAgICAgYWRkUHJvcChnbG9iYWwuSFRNTEFuY2hvckVsZW1lbnQsIFwicmVsTGlzdFwiLCBcInJlbFwiKTtcbiAgICAgIGFkZFByb3AoZ2xvYmFsLkhUTUxBcmVhRWxlbWVudCwgXCJyZWxMaXN0XCIsIFwicmVsXCIpO1xuICAgIH0odGhpcykpO1xuXG59KS5jYWxsKCdvYmplY3QnID09PSB0eXBlb2Ygd2luZG93ICYmIHdpbmRvdyB8fCAnb2JqZWN0JyA9PT0gdHlwZW9mIHNlbGYgJiYgc2VsZiB8fCAnb2JqZWN0JyA9PT0gdHlwZW9mIGdsb2JhbCAmJiBnbG9iYWwgfHwge30pO1xuXG5mdW5jdGlvbiBBY2NvcmRpb24gKCRtb2R1bGUpIHtcbiAgdGhpcy4kbW9kdWxlID0gJG1vZHVsZTtcbiAgdGhpcy5tb2R1bGVJZCA9ICRtb2R1bGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICB0aGlzLiRzZWN0aW9ucyA9ICRtb2R1bGUucXVlcnlTZWxlY3RvckFsbCgnLmdvdnVrLWFjY29yZGlvbl9fc2VjdGlvbicpO1xuICB0aGlzLiRvcGVuQWxsQnV0dG9uID0gJyc7XG4gIHRoaXMuYnJvd3NlclN1cHBvcnRzU2Vzc2lvblN0b3JhZ2UgPSBoZWxwZXIuY2hlY2tGb3JTZXNzaW9uU3RvcmFnZSgpO1xuXG4gIHRoaXMuY29udHJvbHNDbGFzcyA9ICdnb3Z1ay1hY2NvcmRpb25fX2NvbnRyb2xzJztcbiAgdGhpcy5vcGVuQWxsQ2xhc3MgPSAnZ292dWstYWNjb3JkaW9uX19vcGVuLWFsbCc7XG4gIHRoaXMuaWNvbkNsYXNzID0gJ2dvdnVrLWFjY29yZGlvbl9faWNvbic7XG5cbiAgdGhpcy5zZWN0aW9uSGVhZGVyQ2xhc3MgPSAnZ292dWstYWNjb3JkaW9uX19zZWN0aW9uLWhlYWRlcic7XG4gIHRoaXMuc2VjdGlvbkhlYWRlckZvY3VzZWRDbGFzcyA9ICdnb3Z1ay1hY2NvcmRpb25fX3NlY3Rpb24taGVhZGVyLS1mb2N1c2VkJztcbiAgdGhpcy5zZWN0aW9uSGVhZGluZ0NsYXNzID0gJ2dvdnVrLWFjY29yZGlvbl9fc2VjdGlvbi1oZWFkaW5nJztcbiAgdGhpcy5zZWN0aW9uU3VtbWFyeUNsYXNzID0gJ2dvdnVrLWFjY29yZGlvbl9fc2VjdGlvbi1zdW1tYXJ5JztcbiAgdGhpcy5zZWN0aW9uQnV0dG9uQ2xhc3MgPSAnZ292dWstYWNjb3JkaW9uX19zZWN0aW9uLWJ1dHRvbic7XG4gIHRoaXMuc2VjdGlvbkV4cGFuZGVkQ2xhc3MgPSAnZ292dWstYWNjb3JkaW9uX19zZWN0aW9uLS1leHBhbmRlZCc7XG59XG5cbi8vIEluaXRpYWxpemUgY29tcG9uZW50XG5BY2NvcmRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIENoZWNrIGZvciBtb2R1bGVcbiAgaWYgKCF0aGlzLiRtb2R1bGUpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRoaXMuaW5pdENvbnRyb2xzKCk7XG5cbiAgdGhpcy5pbml0U2VjdGlvbkhlYWRlcnMoKTtcblxuICAvLyBTZWUgaWYgXCJPcGVuIGFsbFwiIGJ1dHRvbiB0ZXh0IHNob3VsZCBiZSB1cGRhdGVkXG4gIHZhciBhcmVBbGxTZWN0aW9uc09wZW4gPSB0aGlzLmNoZWNrSWZBbGxTZWN0aW9uc09wZW4oKTtcbiAgdGhpcy51cGRhdGVPcGVuQWxsQnV0dG9uKGFyZUFsbFNlY3Rpb25zT3Blbik7XG59O1xuXG4vLyBJbml0aWFsaXNlIGNvbnRyb2xzIGFuZCBzZXQgYXR0cmlidXRlc1xuQWNjb3JkaW9uLnByb3RvdHlwZS5pbml0Q29udHJvbHMgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIENyZWF0ZSBcIk9wZW4gYWxsXCIgYnV0dG9uIGFuZCBzZXQgYXR0cmlidXRlc1xuICB0aGlzLiRvcGVuQWxsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRoaXMuJG9wZW5BbGxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICB0aGlzLiRvcGVuQWxsQnV0dG9uLmlubmVySFRNTCA9ICdPcGVuIGFsbCA8c3BhbiBjbGFzcz1cImdvdnVrLXZpc3VhbGx5LWhpZGRlblwiPnNlY3Rpb25zPC9zcGFuPic7XG4gIHRoaXMuJG9wZW5BbGxCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMub3BlbkFsbENsYXNzKTtcbiAgdGhpcy4kb3BlbkFsbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgdGhpcy4kb3BlbkFsbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cbiAgLy8gQ3JlYXRlIGNvbnRyb2wgd3JhcHBlciBhbmQgYWRkIGNvbnRyb2xzIHRvIGl0XG4gIHZhciBhY2NvcmRpb25Db250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhY2NvcmRpb25Db250cm9scy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5jb250cm9sc0NsYXNzKTtcbiAgYWNjb3JkaW9uQ29udHJvbHMuYXBwZW5kQ2hpbGQodGhpcy4kb3BlbkFsbEJ1dHRvbik7XG4gIHRoaXMuJG1vZHVsZS5pbnNlcnRCZWZvcmUoYWNjb3JkaW9uQ29udHJvbHMsIHRoaXMuJG1vZHVsZS5maXJzdENoaWxkKTtcblxuICAvLyBIYW5kbGUgZXZlbnRzIGZvciB0aGUgY29udHJvbHNcbiAgdGhpcy4kb3BlbkFsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PcGVuT3JDbG9zZUFsbFRvZ2dsZS5iaW5kKHRoaXMpKTtcbn07XG5cbi8vIEluaXRpYWxpc2Ugc2VjdGlvbiBoZWFkZXJzXG5BY2NvcmRpb24ucHJvdG90eXBlLmluaXRTZWN0aW9uSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gTG9vcCB0aHJvdWdoIHNlY3Rpb24gaGVhZGVyc1xuICBub2RlTGlzdEZvckVhY2godGhpcy4kc2VjdGlvbnMsIGZ1bmN0aW9uICgkc2VjdGlvbiwgaSkge1xuICAgIC8vIFNldCBoZWFkZXIgYXR0cmlidXRlc1xuICAgIHZhciBoZWFkZXIgPSAkc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuc2VjdGlvbkhlYWRlckNsYXNzKTtcbiAgICB0aGlzLmluaXRIZWFkZXJBdHRyaWJ1dGVzKGhlYWRlciwgaSk7XG5cbiAgICB0aGlzLnNldEV4cGFuZGVkKHRoaXMuaXNFeHBhbmRlZCgkc2VjdGlvbiksICRzZWN0aW9uKTtcblxuICAgIC8vIEhhbmRsZSBldmVudHNcbiAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VjdGlvblRvZ2dsZS5iaW5kKHRoaXMsICRzZWN0aW9uKSk7XG5cbiAgICAvLyBTZWUgaWYgdGhlcmUgaXMgYW55IHN0YXRlIHN0b3JlZCBpbiBzZXNzaW9uU3RvcmFnZSBhbmQgc2V0IHRoZSBzZWN0aW9ucyB0b1xuICAgIC8vIG9wZW4gb3IgY2xvc2VkLlxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCRzZWN0aW9uKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8vIFNldCBpbmRpdmlkdWFsIGhlYWRlciBhdHRyaWJ1dGVzXG5BY2NvcmRpb24ucHJvdG90eXBlLmluaXRIZWFkZXJBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKCRoZWFkZXJXcmFwcGVyLCBpbmRleCkge1xuICB2YXIgJG1vZHVsZSA9IHRoaXM7XG4gIHZhciAkc3BhbiA9ICRoZWFkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5zZWN0aW9uQnV0dG9uQ2xhc3MpO1xuICB2YXIgJGhlYWRpbmcgPSAkaGVhZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuc2VjdGlvbkhlYWRpbmdDbGFzcyk7XG4gIHZhciAkc3VtbWFyeSA9ICRoZWFkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5zZWN0aW9uU3VtbWFyeUNsYXNzKTtcblxuICAvLyBDb3B5IGV4aXN0aW5nIHNwYW4gZWxlbWVudCB0byBhbiBhY3R1YWwgYnV0dG9uIGVsZW1lbnQsIGZvciBpbXByb3ZlZCBhY2Nlc3NpYmlsaXR5LlxuICB2YXIgJGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAkYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgJGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5tb2R1bGVJZCArICctaGVhZGluZy0nICsgKGluZGV4ICsgMSkpO1xuICAkYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIHRoaXMubW9kdWxlSWQgKyAnLWNvbnRlbnQtJyArIChpbmRleCArIDEpKTtcblxuICAvLyBDb3B5IGFsbCBhdHRyaWJ1dGVzIChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9hdHRyaWJ1dGVzKSBmcm9tICRzcGFuIHRvICRidXR0b25cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc3Bhbi5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGF0dHIgPSAkc3Bhbi5hdHRyaWJ1dGVzLml0ZW0oaSk7XG4gICAgJGJ1dHRvbi5zZXRBdHRyaWJ1dGUoYXR0ci5ub2RlTmFtZSwgYXR0ci5ub2RlVmFsdWUpO1xuICB9XG5cbiAgJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoISRoZWFkZXJXcmFwcGVyLmNsYXNzTGlzdC5jb250YWlucygkbW9kdWxlLnNlY3Rpb25IZWFkZXJGb2N1c2VkQ2xhc3MpKSB7XG4gICAgICAkaGVhZGVyV3JhcHBlci5jbGFzc05hbWUgKz0gJyAnICsgJG1vZHVsZS5zZWN0aW9uSGVhZGVyRm9jdXNlZENsYXNzO1xuICAgIH1cbiAgfSk7XG5cbiAgJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAkaGVhZGVyV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCRtb2R1bGUuc2VjdGlvbkhlYWRlckZvY3VzZWRDbGFzcyk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2YgKCRzdW1tYXJ5KSAhPT0gJ3VuZGVmaW5lZCcgJiYgJHN1bW1hcnkgIT09IG51bGwpIHtcbiAgICAkYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRoaXMubW9kdWxlSWQgKyAnLXN1bW1hcnktJyArIChpbmRleCArIDEpKTtcbiAgfVxuXG4gIC8vICRzcGFuIGNvdWxkIGNvbnRhaW4gSFRNTCBlbGVtZW50cyAoc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDExL1dELWh0bWw1LTIwMTEwNTI1L2NvbnRlbnQtbW9kZWxzLmh0bWwjcGhyYXNpbmctY29udGVudClcbiAgJGJ1dHRvbi5pbm5lckhUTUwgPSAkc3Bhbi5pbm5lckhUTUw7XG5cbiAgJGhlYWRpbmcucmVtb3ZlQ2hpbGQoJHNwYW4pO1xuICAkaGVhZGluZy5hcHBlbmRDaGlsZCgkYnV0dG9uKTtcblxuICAvLyBBZGQgXCIrLy1cIiBpY29uXG4gIHZhciBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBpY29uLmNsYXNzTmFtZSA9IHRoaXMuaWNvbkNsYXNzO1xuICBpY29uLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICRidXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XG59O1xuXG4vLyBXaGVuIHNlY3Rpb24gdG9nZ2xlZCwgc2V0IGFuZCBzdG9yZSBzdGF0ZVxuQWNjb3JkaW9uLnByb3RvdHlwZS5vblNlY3Rpb25Ub2dnbGUgPSBmdW5jdGlvbiAoJHNlY3Rpb24pIHtcbiAgdmFyIGV4cGFuZGVkID0gdGhpcy5pc0V4cGFuZGVkKCRzZWN0aW9uKTtcbiAgdGhpcy5zZXRFeHBhbmRlZCghZXhwYW5kZWQsICRzZWN0aW9uKTtcblxuICAvLyBTdG9yZSB0aGUgc3RhdGUgaW4gc2Vzc2lvblN0b3JhZ2Ugd2hlbiBhIGNoYW5nZSBpcyB0cmlnZ2VyZWRcbiAgdGhpcy5zdG9yZVN0YXRlKCRzZWN0aW9uKTtcbn07XG5cbi8vIFdoZW4gT3Blbi9DbG9zZSBBbGwgdG9nZ2xlZCwgc2V0IGFuZCBzdG9yZSBzdGF0ZVxuQWNjb3JkaW9uLnByb3RvdHlwZS5vbk9wZW5PckNsb3NlQWxsVG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgJG1vZHVsZSA9IHRoaXM7XG4gIHZhciAkc2VjdGlvbnMgPSB0aGlzLiRzZWN0aW9ucztcblxuICB2YXIgbm93RXhwYW5kZWQgPSAhdGhpcy5jaGVja0lmQWxsU2VjdGlvbnNPcGVuKCk7XG5cbiAgbm9kZUxpc3RGb3JFYWNoKCRzZWN0aW9ucywgZnVuY3Rpb24gKCRzZWN0aW9uKSB7XG4gICAgJG1vZHVsZS5zZXRFeHBhbmRlZChub3dFeHBhbmRlZCwgJHNlY3Rpb24pO1xuICAgIC8vIFN0b3JlIHRoZSBzdGF0ZSBpbiBzZXNzaW9uU3RvcmFnZSB3aGVuIGEgY2hhbmdlIGlzIHRyaWdnZXJlZFxuICAgICRtb2R1bGUuc3RvcmVTdGF0ZSgkc2VjdGlvbik7XG4gIH0pO1xuXG4gICRtb2R1bGUudXBkYXRlT3BlbkFsbEJ1dHRvbihub3dFeHBhbmRlZCk7XG59O1xuXG4vLyBTZXQgc2VjdGlvbiBhdHRyaWJ1dGVzIHdoZW4gb3BlbmVkL2Nsb3NlZFxuQWNjb3JkaW9uLnByb3RvdHlwZS5zZXRFeHBhbmRlZCA9IGZ1bmN0aW9uIChleHBhbmRlZCwgJHNlY3Rpb24pIHtcbiAgdmFyICRidXR0b24gPSAkc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuc2VjdGlvbkJ1dHRvbkNsYXNzKTtcbiAgJGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBleHBhbmRlZCk7XG5cbiAgaWYgKGV4cGFuZGVkKSB7XG4gICAgJHNlY3Rpb24uY2xhc3NMaXN0LmFkZCh0aGlzLnNlY3Rpb25FeHBhbmRlZENsYXNzKTtcbiAgfSBlbHNlIHtcbiAgICAkc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2VjdGlvbkV4cGFuZGVkQ2xhc3MpO1xuICB9XG5cbiAgLy8gU2VlIGlmIFwiT3BlbiBhbGxcIiBidXR0b24gdGV4dCBzaG91bGQgYmUgdXBkYXRlZFxuICB2YXIgYXJlQWxsU2VjdGlvbnNPcGVuID0gdGhpcy5jaGVja0lmQWxsU2VjdGlvbnNPcGVuKCk7XG4gIHRoaXMudXBkYXRlT3BlbkFsbEJ1dHRvbihhcmVBbGxTZWN0aW9uc09wZW4pO1xufTtcblxuLy8gR2V0IHN0YXRlIG9mIHNlY3Rpb25cbkFjY29yZGlvbi5wcm90b3R5cGUuaXNFeHBhbmRlZCA9IGZ1bmN0aW9uICgkc2VjdGlvbikge1xuICByZXR1cm4gJHNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuc2VjdGlvbkV4cGFuZGVkQ2xhc3MpXG59O1xuXG4vLyBDaGVjayBpZiBhbGwgc2VjdGlvbnMgYXJlIG9wZW5cbkFjY29yZGlvbi5wcm90b3R5cGUuY2hlY2tJZkFsbFNlY3Rpb25zT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gR2V0IGEgY291bnQgb2YgYWxsIHRoZSBBY2NvcmRpb24gc2VjdGlvbnNcbiAgdmFyIHNlY3Rpb25zQ291bnQgPSB0aGlzLiRzZWN0aW9ucy5sZW5ndGg7XG4gIC8vIEdldCBhIGNvdW50IG9mIGFsbCBBY2NvcmRpb24gc2VjdGlvbnMgdGhhdCBhcmUgZXhwYW5kZWRcbiAgdmFyIGV4cGFuZGVkU2VjdGlvbkNvdW50ID0gdGhpcy4kbW9kdWxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5zZWN0aW9uRXhwYW5kZWRDbGFzcykubGVuZ3RoO1xuICB2YXIgYXJlQWxsU2VjdGlvbnNPcGVuID0gc2VjdGlvbnNDb3VudCA9PT0gZXhwYW5kZWRTZWN0aW9uQ291bnQ7XG5cbiAgcmV0dXJuIGFyZUFsbFNlY3Rpb25zT3BlblxufTtcblxuLy8gVXBkYXRlIFwiT3BlbiBhbGxcIiBidXR0b25cbkFjY29yZGlvbi5wcm90b3R5cGUudXBkYXRlT3BlbkFsbEJ1dHRvbiA9IGZ1bmN0aW9uIChleHBhbmRlZCkge1xuICB2YXIgbmV3QnV0dG9uVGV4dCA9IGV4cGFuZGVkID8gJ0Nsb3NlIGFsbCcgOiAnT3BlbiBhbGwnO1xuICBuZXdCdXR0b25UZXh0ICs9ICc8c3BhbiBjbGFzcz1cImdvdnVrLXZpc3VhbGx5LWhpZGRlblwiPiBzZWN0aW9uczwvc3Bhbj4nO1xuICB0aGlzLiRvcGVuQWxsQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGV4cGFuZGVkKTtcbiAgdGhpcy4kb3BlbkFsbEJ1dHRvbi5pbm5lckhUTUwgPSBuZXdCdXR0b25UZXh0O1xufTtcblxuLy8gQ2hlY2sgZm9yIGB3aW5kb3cuc2Vzc2lvblN0b3JhZ2VgLCBhbmQgdGhhdCBpdCBhY3R1YWxseSB3b3Jrcy5cbnZhciBoZWxwZXIgPSB7XG4gIGNoZWNrRm9yU2Vzc2lvblN0b3JhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGVzdFN0cmluZyA9ICd0aGlzIGlzIHRoZSB0ZXN0IHN0cmluZyc7XG4gICAgdmFyIHJlc3VsdDtcbiAgICB0cnkge1xuICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGVzdFN0cmluZywgdGVzdFN0cmluZyk7XG4gICAgICByZXN1bHQgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSh0ZXN0U3RyaW5nKSA9PT0gdGVzdFN0cmluZy50b1N0cmluZygpO1xuICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odGVzdFN0cmluZyk7XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICBpZiAoKHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgY29uc29sZS5sb2cgPT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnTm90aWNlOiBzZXNzaW9uU3RvcmFnZSBub3QgYXZhaWxhYmxlLicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLy8gU2V0IHRoZSBzdGF0ZSBvZiB0aGUgYWNjb3JkaW9ucyBpbiBzZXNzaW9uU3RvcmFnZVxuQWNjb3JkaW9uLnByb3RvdHlwZS5zdG9yZVN0YXRlID0gZnVuY3Rpb24gKCRzZWN0aW9uKSB7XG4gIGlmICh0aGlzLmJyb3dzZXJTdXBwb3J0c1Nlc3Npb25TdG9yYWdlKSB7XG4gICAgLy8gV2UgbmVlZCBhIHVuaXF1ZSB3YXkgb2YgaWRlbnRpZnlpbmcgZWFjaCBjb250ZW50IGluIHRoZSBhY2NvcmRpb24uIFNpbmNlXG4gICAgLy8gYW4gYCNpZGAgc2hvdWxkIGJlIHVuaXF1ZSBhbmQgYW4gYGlkYCBpcyByZXF1aXJlZCBmb3IgYGFyaWEtYCBhdHRyaWJ1dGVzXG4gICAgLy8gYGlkYCBjYW4gYmUgc2FmZWx5IHVzZWQuXG4gICAgdmFyICRidXR0b24gPSAkc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuc2VjdGlvbkJ1dHRvbkNsYXNzKTtcblxuICAgIGlmICgkYnV0dG9uKSB7XG4gICAgICB2YXIgY29udGVudElkID0gJGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKTtcbiAgICAgIHZhciBjb250ZW50U3RhdGUgPSAkYnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnRJZCA9PT0gJ3VuZGVmaW5lZCcgJiYgKHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgY29uc29sZS5sb2cgPT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKG5ldyBFcnJvcignTm8gYXJpYSBjb250cm9scyBwcmVzZW50IGluIGFjY29yZGlvbiBzZWN0aW9uIGhlYWRpbmcuJykpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnRTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcgJiYgKHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgY29uc29sZS5sb2cgPT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKG5ldyBFcnJvcignTm8gYXJpYSBleHBhbmRlZCBwcmVzZW50IGluIGFjY29yZGlvbiBzZWN0aW9uIGhlYWRpbmcuJykpO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IHNldCB0aGUgc3RhdGUgd2hlbiBib3RoIGBjb250ZW50SWRgIGFuZCBgY29udGVudFN0YXRlYCBhcmUgdGFrZW4gZnJvbSB0aGUgRE9NLlxuICAgICAgaWYgKGNvbnRlbnRJZCAmJiBjb250ZW50U3RhdGUpIHtcbiAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oY29udGVudElkLCBjb250ZW50U3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLy8gUmVhZCB0aGUgc3RhdGUgb2YgdGhlIGFjY29yZGlvbnMgZnJvbSBzZXNzaW9uU3RvcmFnZVxuQWNjb3JkaW9uLnByb3RvdHlwZS5zZXRJbml0aWFsU3RhdGUgPSBmdW5jdGlvbiAoJHNlY3Rpb24pIHtcbiAgaWYgKHRoaXMuYnJvd3NlclN1cHBvcnRzU2Vzc2lvblN0b3JhZ2UpIHtcbiAgICB2YXIgJGJ1dHRvbiA9ICRzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5zZWN0aW9uQnV0dG9uQ2xhc3MpO1xuXG4gICAgaWYgKCRidXR0b24pIHtcbiAgICAgIHZhciBjb250ZW50SWQgPSAkYnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpO1xuICAgICAgdmFyIGNvbnRlbnRTdGF0ZSA9IGNvbnRlbnRJZCA/IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGNvbnRlbnRJZCkgOiBudWxsO1xuXG4gICAgICBpZiAoY29udGVudFN0YXRlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0RXhwYW5kZWQoY29udGVudFN0YXRlID09PSAndHJ1ZScsICRzZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbihmdW5jdGlvbih1bmRlZmluZWQpIHtcblxuLy8gRGV0ZWN0aW9uIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL0ZpbmFuY2lhbC1UaW1lcy9wb2x5ZmlsbC1zZXJ2aWNlL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL3BvbHlmaWxsLWxpYnJhcnkvcG9seWZpbGxzL1dpbmRvdy9kZXRlY3QuanNcbnZhciBkZXRlY3QgPSAoJ1dpbmRvdycgaW4gdGhpcyk7XG5cbmlmIChkZXRlY3QpIHJldHVyblxuXG4vLyBQb2x5ZmlsbCBmcm9tIGh0dHBzOi8vY2RuLnBvbHlmaWxsLmlvL3YyL3BvbHlmaWxsLmpzP2ZlYXR1cmVzPVdpbmRvdyZmbGFncz1hbHdheXNcbmlmICgodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlID09PSBcInVuZGVmaW5lZFwiKSAmJiAodHlwZW9mIGltcG9ydFNjcmlwdHMgIT09IFwiZnVuY3Rpb25cIikpIHtcblx0KGZ1bmN0aW9uIChnbG9iYWwpIHtcblx0XHRpZiAoZ2xvYmFsLmNvbnN0cnVjdG9yKSB7XG5cdFx0XHRnbG9iYWwuV2luZG93ID0gZ2xvYmFsLmNvbnN0cnVjdG9yO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQoZ2xvYmFsLldpbmRvdyA9IGdsb2JhbC5jb25zdHJ1Y3RvciA9IG5ldyBGdW5jdGlvbigncmV0dXJuIGZ1bmN0aW9uIFdpbmRvdygpIHt9JykoKSkucHJvdG90eXBlID0gdGhpcztcblx0XHR9XG5cdH0odGhpcykpO1xufVxuXG59KVxuLmNhbGwoJ29iamVjdCcgPT09IHR5cGVvZiB3aW5kb3cgJiYgd2luZG93IHx8ICdvYmplY3QnID09PSB0eXBlb2Ygc2VsZiAmJiBzZWxmIHx8ICdvYmplY3QnID09PSB0eXBlb2YgZ2xvYmFsICYmIGdsb2JhbCB8fCB7fSk7XG5cbihmdW5jdGlvbih1bmRlZmluZWQpIHtcblxuLy8gRGV0ZWN0aW9uIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL0ZpbmFuY2lhbC1UaW1lcy9wb2x5ZmlsbC1zZXJ2aWNlL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL3BvbHlmaWxsLWxpYnJhcnkvcG9seWZpbGxzL0V2ZW50L2RldGVjdC5qc1xudmFyIGRldGVjdCA9IChcbiAgKGZ1bmN0aW9uKGdsb2JhbCkge1xuXG4gIFx0aWYgKCEoJ0V2ZW50JyBpbiBnbG9iYWwpKSByZXR1cm4gZmFsc2U7XG4gIFx0aWYgKHR5cGVvZiBnbG9iYWwuRXZlbnQgPT09ICdmdW5jdGlvbicpIHJldHVybiB0cnVlO1xuXG4gIFx0dHJ5IHtcblxuICBcdFx0Ly8gSW4gSUUgOS0xMSwgdGhlIEV2ZW50IG9iamVjdCBleGlzdHMgYnV0IGNhbm5vdCBiZSBpbnN0YW50aWF0ZWRcbiAgXHRcdG5ldyBFdmVudCgnY2xpY2snKTtcbiAgXHRcdHJldHVybiB0cnVlO1xuICBcdH0gY2F0Y2goZSkge1xuICBcdFx0cmV0dXJuIGZhbHNlO1xuICBcdH1cbiAgfSh0aGlzKSlcbik7XG5cbmlmIChkZXRlY3QpIHJldHVyblxuXG4vLyBQb2x5ZmlsbCBmcm9tIGh0dHBzOi8vY2RuLnBvbHlmaWxsLmlvL3YyL3BvbHlmaWxsLmpzP2ZlYXR1cmVzPUV2ZW50JmZsYWdzPWFsd2F5c1xuKGZ1bmN0aW9uICgpIHtcblx0dmFyIHVubGlzdGVuYWJsZVdpbmRvd0V2ZW50cyA9IHtcblx0XHRjbGljazogMSxcblx0XHRkYmxjbGljazogMSxcblx0XHRrZXl1cDogMSxcblx0XHRrZXlwcmVzczogMSxcblx0XHRrZXlkb3duOiAxLFxuXHRcdG1vdXNlZG93bjogMSxcblx0XHRtb3VzZXVwOiAxLFxuXHRcdG1vdXNlbW92ZTogMSxcblx0XHRtb3VzZW92ZXI6IDEsXG5cdFx0bW91c2VlbnRlcjogMSxcblx0XHRtb3VzZWxlYXZlOiAxLFxuXHRcdG1vdXNlb3V0OiAxLFxuXHRcdHN0b3JhZ2U6IDEsXG5cdFx0c3RvcmFnZWNvbW1pdDogMSxcblx0XHR0ZXh0aW5wdXQ6IDFcblx0fTtcblxuXHQvLyBUaGlzIHBvbHlmaWxsIGRlcGVuZHMgb24gYXZhaWxhYmlsaXR5IG9mIGBkb2N1bWVudGAgc28gd2lsbCBub3QgcnVuIGluIGEgd29ya2VyXG5cdC8vIEhvd2V2ZXIsIHdlIGFzc3N1bWUgdGhlcmUgYXJlIG5vIGJyb3dzZXJzIHdpdGggd29ya2VyIHN1cHBvcnQgdGhhdCBsYWNrIHByb3BlclxuXHQvLyBzdXBwb3J0IGZvciBgRXZlbnRgIHdpdGhpbiB0aGUgd29ya2VyXG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cblx0ZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgZWxlbWVudCkge1xuXHRcdHZhclxuXHRcdGluZGV4ID0gLTEsXG5cdFx0bGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG5cdFx0d2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcblx0XHRcdGlmIChpbmRleCBpbiBhcnJheSAmJiBhcnJheVtpbmRleF0gPT09IGVsZW1lbnQpIHtcblx0XHRcdFx0cmV0dXJuIGluZGV4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiAtMTtcblx0fVxuXG5cdHZhciBleGlzdGluZ1Byb3RvID0gKHdpbmRvdy5FdmVudCAmJiB3aW5kb3cuRXZlbnQucHJvdG90eXBlKSB8fCBudWxsO1xuXHR3aW5kb3cuRXZlbnQgPSBXaW5kb3cucHJvdG90eXBlLkV2ZW50ID0gZnVuY3Rpb24gRXZlbnQodHlwZSwgZXZlbnRJbml0RGljdCkge1xuXHRcdGlmICghdHlwZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdOb3QgZW5vdWdoIGFyZ3VtZW50cycpO1xuXHRcdH1cblxuXHRcdHZhciBldmVudDtcblx0XHQvLyBTaG9ydGN1dCBpZiBicm93c2VyIHN1cHBvcnRzIGNyZWF0ZUV2ZW50XG5cdFx0aWYgKCdjcmVhdGVFdmVudCcgaW4gZG9jdW1lbnQpIHtcblx0XHRcdGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG5cdFx0XHR2YXIgYnViYmxlcyA9IGV2ZW50SW5pdERpY3QgJiYgZXZlbnRJbml0RGljdC5idWJibGVzICE9PSB1bmRlZmluZWQgPyBldmVudEluaXREaWN0LmJ1YmJsZXMgOiBmYWxzZTtcblx0XHRcdHZhciBjYW5jZWxhYmxlID0gZXZlbnRJbml0RGljdCAmJiBldmVudEluaXREaWN0LmNhbmNlbGFibGUgIT09IHVuZGVmaW5lZCA/IGV2ZW50SW5pdERpY3QuY2FuY2VsYWJsZSA6IGZhbHNlO1xuXG5cdFx0XHRldmVudC5pbml0RXZlbnQodHlwZSwgYnViYmxlcywgY2FuY2VsYWJsZSk7XG5cblx0XHRcdHJldHVybiBldmVudDtcblx0XHR9XG5cblx0XHRldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCk7XG5cblx0XHRldmVudC50eXBlID0gdHlwZTtcblx0XHRldmVudC5idWJibGVzID0gZXZlbnRJbml0RGljdCAmJiBldmVudEluaXREaWN0LmJ1YmJsZXMgIT09IHVuZGVmaW5lZCA/IGV2ZW50SW5pdERpY3QuYnViYmxlcyA6IGZhbHNlO1xuXHRcdGV2ZW50LmNhbmNlbGFibGUgPSBldmVudEluaXREaWN0ICYmIGV2ZW50SW5pdERpY3QuY2FuY2VsYWJsZSAhPT0gdW5kZWZpbmVkID8gZXZlbnRJbml0RGljdC5jYW5jZWxhYmxlIDogZmFsc2U7XG5cblx0XHRyZXR1cm4gZXZlbnQ7XG5cdH07XG5cdGlmIChleGlzdGluZ1Byb3RvKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5FdmVudCwgJ3Byb3RvdHlwZScsIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0dmFsdWU6IGV4aXN0aW5nUHJvdG9cblx0XHR9KTtcblx0fVxuXG5cdGlmICghKCdjcmVhdGVFdmVudCcgaW4gZG9jdW1lbnQpKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIgPSBXaW5kb3cucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBEb2N1bWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKCkge1xuXHRcdFx0dmFyXG5cdFx0XHRlbGVtZW50ID0gdGhpcyxcblx0XHRcdHR5cGUgPSBhcmd1bWVudHNbMF0sXG5cdFx0XHRsaXN0ZW5lciA9IGFyZ3VtZW50c1sxXTtcblxuXHRcdFx0aWYgKGVsZW1lbnQgPT09IHdpbmRvdyAmJiB0eXBlIGluIHVubGlzdGVuYWJsZVdpbmRvd0V2ZW50cykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0luIElFOCB0aGUgZXZlbnQ6ICcgKyB0eXBlICsgJyBpcyBub3QgYXZhaWxhYmxlIG9uIHRoZSB3aW5kb3cgb2JqZWN0LiBQbGVhc2Ugc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9GaW5hbmNpYWwtVGltZXMvcG9seWZpbGwtc2VydmljZS9pc3N1ZXMvMzE3IGZvciBtb3JlIGluZm9ybWF0aW9uLicpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWVsZW1lbnQuX2V2ZW50cykge1xuXHRcdFx0XHRlbGVtZW50Ll9ldmVudHMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFlbGVtZW50Ll9ldmVudHNbdHlwZV0pIHtcblx0XHRcdFx0ZWxlbWVudC5fZXZlbnRzW3R5cGVdID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdFx0dmFyXG5cdFx0XHRcdFx0bGlzdCA9IGVsZW1lbnQuX2V2ZW50c1tldmVudC50eXBlXS5saXN0LFxuXHRcdFx0XHRcdGV2ZW50cyA9IGxpc3Quc2xpY2UoKSxcblx0XHRcdFx0XHRpbmRleCA9IC0xLFxuXHRcdFx0XHRcdGxlbmd0aCA9IGV2ZW50cy5sZW5ndGgsXG5cdFx0XHRcdFx0ZXZlbnRFbGVtZW50O1xuXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCgpIHtcblx0XHRcdFx0XHRcdGlmIChldmVudC5jYW5jZWxhYmxlICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0XHRldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oKSB7XG5cdFx0XHRcdFx0XHRldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gPSBmdW5jdGlvbiBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSB7XG5cdFx0XHRcdFx0XHRldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0ZXZlbnQuY2FuY2VsSW1tZWRpYXRlID0gdHJ1ZTtcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0ZXZlbnQuY3VycmVudFRhcmdldCA9IGVsZW1lbnQ7XG5cdFx0XHRcdFx0ZXZlbnQucmVsYXRlZFRhcmdldCA9IGV2ZW50LmZyb21FbGVtZW50IHx8IG51bGw7XG5cdFx0XHRcdFx0ZXZlbnQudGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQgfHwgZWxlbWVudDtcblx0XHRcdFx0XHRldmVudC50aW1lU3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuXHRcdFx0XHRcdGlmIChldmVudC5jbGllbnRYKSB7XG5cdFx0XHRcdFx0XHRldmVudC5wYWdlWCA9IGV2ZW50LmNsaWVudFggKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcblx0XHRcdFx0XHRcdGV2ZW50LnBhZ2VZID0gZXZlbnQuY2xpZW50WSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0d2hpbGUgKCsraW5kZXggPCBsZW5ndGggJiYgIWV2ZW50LmNhbmNlbEltbWVkaWF0ZSkge1xuXHRcdFx0XHRcdFx0aWYgKGluZGV4IGluIGV2ZW50cykge1xuXHRcdFx0XHRcdFx0XHRldmVudEVsZW1lbnQgPSBldmVudHNbaW5kZXhdO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChpbmRleE9mKGxpc3QsIGV2ZW50RWxlbWVudCkgIT09IC0xICYmIHR5cGVvZiBldmVudEVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudEVsZW1lbnQuY2FsbChlbGVtZW50LCBldmVudCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0ZWxlbWVudC5fZXZlbnRzW3R5cGVdLmxpc3QgPSBbXTtcblxuXHRcdFx0XHRpZiAoZWxlbWVudC5hdHRhY2hFdmVudCkge1xuXHRcdFx0XHRcdGVsZW1lbnQuYXR0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGVsZW1lbnQuX2V2ZW50c1t0eXBlXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZWxlbWVudC5fZXZlbnRzW3R5cGVdLmxpc3QucHVzaChsaXN0ZW5lcik7XG5cdFx0fTtcblxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyID0gV2luZG93LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRG9jdW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHtcblx0XHRcdHZhclxuXHRcdFx0ZWxlbWVudCA9IHRoaXMsXG5cdFx0XHR0eXBlID0gYXJndW1lbnRzWzBdLFxuXHRcdFx0bGlzdGVuZXIgPSBhcmd1bWVudHNbMV0sXG5cdFx0XHRpbmRleDtcblxuXHRcdFx0aWYgKGVsZW1lbnQuX2V2ZW50cyAmJiBlbGVtZW50Ll9ldmVudHNbdHlwZV0gJiYgZWxlbWVudC5fZXZlbnRzW3R5cGVdLmxpc3QpIHtcblx0XHRcdFx0aW5kZXggPSBpbmRleE9mKGVsZW1lbnQuX2V2ZW50c1t0eXBlXS5saXN0LCBsaXN0ZW5lcik7XG5cblx0XHRcdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHRcdGVsZW1lbnQuX2V2ZW50c1t0eXBlXS5saXN0LnNwbGljZShpbmRleCwgMSk7XG5cblx0XHRcdFx0XHRpZiAoIWVsZW1lbnQuX2V2ZW50c1t0eXBlXS5saXN0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZGV0YWNoRXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5kZXRhY2hFdmVudCgnb24nICsgdHlwZSwgZWxlbWVudC5fZXZlbnRzW3R5cGVdKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGRlbGV0ZSBlbGVtZW50Ll9ldmVudHNbdHlwZV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHdpbmRvdy5kaXNwYXRjaEV2ZW50ID0gV2luZG93LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50ID0gRG9jdW1lbnQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQgPSBFbGVtZW50LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChldmVudCkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignTm90IGVub3VnaCBhcmd1bWVudHMnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFldmVudCB8fCB0eXBlb2YgZXZlbnQudHlwZSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdET00gRXZlbnRzIEV4Y2VwdGlvbiAwJyk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBlbGVtZW50ID0gdGhpcywgdHlwZSA9IGV2ZW50LnR5cGU7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmICghZXZlbnQuYnViYmxlcykge1xuXHRcdFx0XHRcdGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG5cblx0XHRcdFx0XHR2YXIgY2FuY2VsQnViYmxlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0XHRcdGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG5cblx0XHRcdFx0XHRcdChlbGVtZW50IHx8IHdpbmRvdykuZGV0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGNhbmNlbEJ1YmJsZUV2ZW50KTtcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0dGhpcy5hdHRhY2hFdmVudCgnb24nICsgdHlwZSwgY2FuY2VsQnViYmxlRXZlbnQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5maXJlRXZlbnQoJ29uJyArIHR5cGUsIGV2ZW50KTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGV2ZW50LnRhcmdldCA9IGVsZW1lbnQ7XG5cblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQgPSBlbGVtZW50O1xuXG5cdFx0XHRcdFx0aWYgKCdfZXZlbnRzJyBpbiBlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50Ll9ldmVudHNbdHlwZV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdGVsZW1lbnQuX2V2ZW50c1t0eXBlXS5jYWxsKGVsZW1lbnQsIGV2ZW50KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAodHlwZW9mIGVsZW1lbnRbJ29uJyArIHR5cGVdID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHRlbGVtZW50WydvbicgKyB0eXBlXS5jYWxsKGVsZW1lbnQsIGV2ZW50KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudC5ub2RlVHlwZSA9PT0gOSA/IGVsZW1lbnQucGFyZW50V2luZG93IDogZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdFx0XHR9IHdoaWxlIChlbGVtZW50ICYmICFldmVudC5jYW5jZWxCdWJibGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXG5cdFx0Ly8gQWRkIHRoZSBET01Db250ZW50TG9hZGVkIEV2ZW50XG5cdFx0ZG9jdW1lbnQuYXR0YWNoRXZlbnQoJ29ucmVhZHlzdGF0ZWNoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcblx0XHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ0RPTUNvbnRlbnRMb2FkZWQnLCB7XG5cdFx0XHRcdFx0YnViYmxlczogdHJ1ZVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0oKSk7XG5cbn0pXG4uY2FsbCgnb2JqZWN0JyA9PT0gdHlwZW9mIHdpbmRvdyAmJiB3aW5kb3cgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBzZWxmICYmIHNlbGYgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBnbG9iYWwgJiYgZ2xvYmFsIHx8IHt9KTtcblxudmFyIEtFWV9TUEFDRSA9IDMyO1xudmFyIERFQk9VTkNFX1RJTUVPVVRfSU5fU0VDT05EUyA9IDE7XG5cbmZ1bmN0aW9uIEJ1dHRvbiAoJG1vZHVsZSkge1xuICB0aGlzLiRtb2R1bGUgPSAkbW9kdWxlO1xuICB0aGlzLmRlYm91bmNlRm9ybVN1Ym1pdFRpbWVyID0gbnVsbDtcbn1cblxuLyoqXG4qIEphdmFTY3JpcHQgJ3NoaW0nIHRvIHRyaWdnZXIgdGhlIGNsaWNrIGV2ZW50IG9mIGVsZW1lbnQocykgd2hlbiB0aGUgc3BhY2Uga2V5IGlzIHByZXNzZWQuXG4qXG4qIENyZWF0ZWQgc2luY2Ugc29tZSBBc3Npc3RpdmUgVGVjaG5vbG9naWVzIChmb3IgZXhhbXBsZSBzb21lIFNjcmVlbnJlYWRlcnMpXG4qIHdpbGwgdGVsbCBhIHVzZXIgdG8gcHJlc3Mgc3BhY2Ugb24gYSAnYnV0dG9uJywgc28gdGhpcyBmdW5jdGlvbmFsaXR5IG5lZWRzIHRvIGJlIHNoaW1tZWRcbiogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHBoYWdvdi9nb3Z1a19lbGVtZW50cy9wdWxsLzI3MiNpc3N1ZWNvbW1lbnQtMjMzMDI4MjcwXG4qXG4qIEBwYXJhbSB7b2JqZWN0fSBldmVudCBldmVudFxuKi9cbkJ1dHRvbi5wcm90b3R5cGUuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBnZXQgdGhlIHRhcmdldCBlbGVtZW50XG4gIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gIC8vIGlmIHRoZSBlbGVtZW50IGhhcyBhIHJvbGU9J2J1dHRvbicgYW5kIHRoZSBwcmVzc2VkIGtleSBpcyBhIHNwYWNlLCB3ZSdsbCBzaW11bGF0ZSBhIGNsaWNrXG4gIGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICdidXR0b24nICYmIGV2ZW50LmtleUNvZGUgPT09IEtFWV9TUEFDRSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gdHJpZ2dlciB0aGUgdGFyZ2V0J3MgY2xpY2sgZXZlbnRcbiAgICB0YXJnZXQuY2xpY2soKTtcbiAgfVxufTtcblxuLyoqXG4qIElmIHRoZSBjbGljayBxdWlja2x5IHN1Y2NlZWRzIGEgcHJldmlvdXMgY2xpY2sgdGhlbiBub3RoaW5nIHdpbGwgaGFwcGVuLlxuKiBUaGlzIHN0b3BzIHBlb3BsZSBhY2NpZGVudGFsbHkgY2F1c2luZyBtdWx0aXBsZSBmb3JtIHN1Ym1pc3Npb25zIGJ5XG4qIGRvdWJsZSBjbGlja2luZyBidXR0b25zLlxuKi9cbkJ1dHRvbi5wcm90b3R5cGUuZGVib3VuY2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgLy8gQ2hlY2sgdGhlIGJ1dHRvbiB0aGF0IGlzIGNsaWNrZWQgb24gaGFzIHRoZSBwcmV2ZW50RG91YmxlQ2xpY2sgZmVhdHVyZSBlbmFibGVkXG4gIGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByZXZlbnQtZG91YmxlLWNsaWNrJykgIT09ICd0cnVlJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gSWYgdGhlIHRpbWVyIGlzIHN0aWxsIHJ1bm5pbmcgdGhlbiB3ZSB3YW50IHRvIHByZXZlbnQgdGhlIGNsaWNrIGZyb20gc3VibWl0dGluZyB0aGUgZm9ybVxuICBpZiAodGhpcy5kZWJvdW5jZUZvcm1TdWJtaXRUaW1lcikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB0aGlzLmRlYm91bmNlRm9ybVN1Ym1pdFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZWJvdW5jZUZvcm1TdWJtaXRUaW1lciA9IG51bGw7XG4gIH0uYmluZCh0aGlzKSwgREVCT1VOQ0VfVElNRU9VVF9JTl9TRUNPTkRTICogMTAwMCk7XG59O1xuXG4vKipcbiogSW5pdGlhbGlzZSBhbiBldmVudCBsaXN0ZW5lciBmb3Iga2V5ZG93biBhdCBkb2N1bWVudCBsZXZlbFxuKiB0aGlzIHdpbGwgaGVscCBsaXN0ZW5pbmcgZm9yIGxhdGVyIGluc2VydGVkIGVsZW1lbnRzIHdpdGggYSByb2xlPVwiYnV0dG9uXCJcbiovXG5CdXR0b24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuJG1vZHVsZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgdGhpcy4kbW9kdWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWJvdW5jZSk7XG59O1xuXG4vKipcbiAqIEphdmFTY3JpcHQgJ3BvbHlmaWxsJyBmb3IgSFRNTDUncyA8ZGV0YWlscz4gYW5kIDxzdW1tYXJ5PiBlbGVtZW50c1xuICogYW5kICdzaGltJyB0byBhZGQgYWNjZXNzaWJsaXR5IGVuaGFuY2VtZW50cyBmb3IgYWxsIGJyb3dzZXJzXG4gKlxuICogaHR0cDovL2Nhbml1c2UuY29tLyNmZWF0PWRldGFpbHNcbiAqL1xuXG52YXIgS0VZX0VOVEVSID0gMTM7XG52YXIgS0VZX1NQQUNFJDEgPSAzMjtcblxuZnVuY3Rpb24gRGV0YWlscyAoJG1vZHVsZSkge1xuICB0aGlzLiRtb2R1bGUgPSAkbW9kdWxlO1xufVxuXG5EZXRhaWxzLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuJG1vZHVsZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gSWYgdGhlcmUgaXMgbmF0aXZlIGRldGFpbHMgc3VwcG9ydCwgd2Ugd2FudCB0byBhdm9pZCBydW5uaW5nIGNvZGUgdG8gcG9seWZpbGwgbmF0aXZlIGJlaGF2aW91ci5cbiAgdmFyIGhhc05hdGl2ZURldGFpbHMgPSB0eXBlb2YgdGhpcy4kbW9kdWxlLm9wZW4gPT09ICdib29sZWFuJztcblxuICBpZiAoaGFzTmF0aXZlRGV0YWlscykge1xuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy5wb2x5ZmlsbERldGFpbHMoKTtcbn07XG5cbkRldGFpbHMucHJvdG90eXBlLnBvbHlmaWxsRGV0YWlscyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyICRtb2R1bGUgPSB0aGlzLiRtb2R1bGU7XG5cbiAgLy8gU2F2ZSBzaG9ydGN1dHMgdG8gdGhlIGlubmVyIHN1bW1hcnkgYW5kIGNvbnRlbnQgZWxlbWVudHNcbiAgdmFyICRzdW1tYXJ5ID0gdGhpcy4kc3VtbWFyeSA9ICRtb2R1bGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3N1bW1hcnknKS5pdGVtKDApO1xuICB2YXIgJGNvbnRlbnQgPSB0aGlzLiRjb250ZW50ID0gJG1vZHVsZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGl2JykuaXRlbSgwKTtcblxuICAvLyBJZiA8ZGV0YWlscz4gZG9lc24ndCBoYXZlIGEgPHN1bW1hcnk+IGFuZCBhIDxkaXY+IHJlcHJlc2VudGluZyB0aGUgY29udGVudFxuICAvLyBpdCBtZWFucyB0aGUgcmVxdWlyZWQgSFRNTCBzdHJ1Y3R1cmUgaXMgbm90IG1ldCBzbyB0aGUgc2NyaXB0IHdpbGwgc3RvcFxuICBpZiAoISRzdW1tYXJ5IHx8ICEkY29udGVudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gSWYgdGhlIGNvbnRlbnQgZG9lc24ndCBoYXZlIGFuIElELCBhc3NpZ24gaXQgb25lIG5vd1xuICAvLyB3aGljaCB3ZSdsbCBuZWVkIGZvciB0aGUgc3VtbWFyeSdzIGFyaWEtY29udHJvbHMgYXNzaWdubWVudFxuICBpZiAoISRjb250ZW50LmlkKSB7XG4gICAgJGNvbnRlbnQuaWQgPSAnZGV0YWlscy1jb250ZW50LScgKyBnZW5lcmF0ZVVuaXF1ZUlEKCk7XG4gIH1cblxuICAvLyBBZGQgQVJJQSByb2xlPVwiZ3JvdXBcIiB0byBkZXRhaWxzXG4gICRtb2R1bGUuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2dyb3VwJyk7XG5cbiAgLy8gQWRkIHJvbGU9YnV0dG9uIHRvIHN1bW1hcnlcbiAgJHN1bW1hcnkuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xuXG4gIC8vIEFkZCBhcmlhLWNvbnRyb2xzXG4gICRzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsICRjb250ZW50LmlkKTtcblxuICAvLyBTZXQgdGFiSW5kZXggc28gdGhlIHN1bW1hcnkgaXMga2V5Ym9hcmQgYWNjZXNzaWJsZSBmb3Igbm9uLW5hdGl2ZSBlbGVtZW50c1xuICAvL1xuICAvLyBXZSBoYXZlIHRvIHVzZSB0aGUgY2FtZWxjYXNlIGB0YWJJbmRleGAgcHJvcGVydHkgYXMgdGhlcmUgaXMgYSBidWcgaW4gSUU2L0lFNyB3aGVuIHdlIHNldCB0aGUgY29ycmVjdCBhdHRyaWJ1dGUgbG93ZXJjYXNlOlxuICAvLyBTZWUgaHR0cDovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxNzAxMjAxOTQwMzYvaHR0cDovL3d3dy5zYWxpZW5jZXMuY29tL2Jyb3dzZXJCdWdzL3RhYkluZGV4Lmh0bWwgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICRzdW1tYXJ5LnRhYkluZGV4ID0gMDtcblxuICAvLyBEZXRlY3QgaW5pdGlhbCBvcGVuIHN0YXRlXG4gIHZhciBvcGVuQXR0ciA9ICRtb2R1bGUuZ2V0QXR0cmlidXRlKCdvcGVuJykgIT09IG51bGw7XG4gIGlmIChvcGVuQXR0ciA9PT0gdHJ1ZSkge1xuICAgICRzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgJGNvbnRlbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICB9IGVsc2Uge1xuICAgICRzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICRjb250ZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICRjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICAvLyBCaW5kIGFuIGV2ZW50IHRvIGhhbmRsZSBzdW1tYXJ5IGVsZW1lbnRzXG4gIHRoaXMucG9seWZpbGxIYW5kbGVJbnB1dHMoJHN1bW1hcnksIHRoaXMucG9seWZpbGxTZXRBdHRyaWJ1dGVzLmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4qIERlZmluZSBhIHN0YXRlY2hhbmdlIGZ1bmN0aW9uIHRoYXQgdXBkYXRlcyBhcmlhLWV4cGFuZGVkIGFuZCBzdHlsZS5kaXNwbGF5XG4qIEBwYXJhbSB7b2JqZWN0fSBzdW1tYXJ5IGVsZW1lbnRcbiovXG5EZXRhaWxzLnByb3RvdHlwZS5wb2x5ZmlsbFNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciAkbW9kdWxlID0gdGhpcy4kbW9kdWxlO1xuICB2YXIgJHN1bW1hcnkgPSB0aGlzLiRzdW1tYXJ5O1xuICB2YXIgJGNvbnRlbnQgPSB0aGlzLiRjb250ZW50O1xuXG4gIHZhciBleHBhbmRlZCA9ICRzdW1tYXJ5LmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSc7XG4gIHZhciBoaWRkZW4gPSAkY29udGVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykgPT09ICd0cnVlJztcblxuICAkc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAoZXhwYW5kZWQgPyAnZmFsc2UnIDogJ3RydWUnKSk7XG4gICRjb250ZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAoaGlkZGVuID8gJ2ZhbHNlJyA6ICd0cnVlJykpO1xuXG4gICRjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAoZXhwYW5kZWQgPyAnbm9uZScgOiAnJyk7XG5cbiAgdmFyIGhhc09wZW5BdHRyID0gJG1vZHVsZS5nZXRBdHRyaWJ1dGUoJ29wZW4nKSAhPT0gbnVsbDtcbiAgaWYgKCFoYXNPcGVuQXR0cikge1xuICAgICRtb2R1bGUuc2V0QXR0cmlidXRlKCdvcGVuJywgJ29wZW4nKTtcbiAgfSBlbHNlIHtcbiAgICAkbW9kdWxlLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xuICB9XG5cbiAgcmV0dXJuIHRydWVcbn07XG5cbi8qKlxuKiBIYW5kbGUgY3Jvc3MtbW9kYWwgY2xpY2sgZXZlbnRzXG4qIEBwYXJhbSB7b2JqZWN0fSBub2RlIGVsZW1lbnRcbiogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb25cbiovXG5EZXRhaWxzLnByb3RvdHlwZS5wb2x5ZmlsbEhhbmRsZUlucHV0cyA9IGZ1bmN0aW9uIChub2RlLCBjYWxsYmFjaykge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAvLyBXaGVuIHRoZSBrZXkgZ2V0cyBwcmVzc2VkIC0gY2hlY2sgaWYgaXQgaXMgZW50ZXIgb3Igc3BhY2VcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS0VZX0VOVEVSIHx8IGV2ZW50LmtleUNvZGUgPT09IEtFWV9TUEFDRSQxKSB7XG4gICAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdW1tYXJ5Jykge1xuICAgICAgICAvLyBQcmV2ZW50IHNwYWNlIGZyb20gc2Nyb2xsaW5nIHRoZSBwYWdlXG4gICAgICAgIC8vIGFuZCBlbnRlciBmcm9tIHN1Ym1pdHRpbmcgYSBmb3JtXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIENsaWNrIHRvIGxldCB0aGUgY2xpY2sgZXZlbnQgZG8gYWxsIHRoZSBuZWNlc3NhcnkgYWN0aW9uXG4gICAgICAgIGlmICh0YXJnZXQuY2xpY2spIHtcbiAgICAgICAgICB0YXJnZXQuY2xpY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBleGNlcHQgU2FmYXJpIDUuMSBhbmQgdW5kZXIgZG9uJ3Qgc3VwcG9ydCAuY2xpY2soKSBoZXJlXG4gICAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBQcmV2ZW50IGtleXVwIHRvIHByZXZlbnQgY2xpY2tpbmcgdHdpY2UgaW4gRmlyZWZveCB3aGVuIHVzaW5nIHNwYWNlIGtleVxuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS0VZX1NQQUNFJDEpIHtcbiAgICAgIGlmICh0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N1bW1hcnknKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spO1xufTtcblxuZnVuY3Rpb24gQ2hhcmFjdGVyQ291bnQgKCRtb2R1bGUpIHtcbiAgdGhpcy4kbW9kdWxlID0gJG1vZHVsZTtcbiAgdGhpcy4kdGV4dGFyZWEgPSAkbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5nb3Z1ay1qcy1jaGFyYWN0ZXItY291bnQnKTtcbiAgaWYgKHRoaXMuJHRleHRhcmVhKSB7XG4gICAgdGhpcy4kY291bnRNZXNzYWdlID0gJG1vZHVsZS5xdWVyeVNlbGVjdG9yKCdbaWQ9XCInICsgdGhpcy4kdGV4dGFyZWEuaWQgKyAnLWluZm9cIl0nKTtcbiAgfVxufVxuXG5DaGFyYWN0ZXJDb3VudC5wcm90b3R5cGUuZGVmYXVsdHMgPSB7XG4gIGNoYXJhY3RlckNvdW50QXR0cmlidXRlOiAnZGF0YS1tYXhsZW5ndGgnLFxuICB3b3JkQ291bnRBdHRyaWJ1dGU6ICdkYXRhLW1heHdvcmRzJ1xufTtcblxuLy8gSW5pdGlhbGl6ZSBjb21wb25lbnRcbkNoYXJhY3RlckNvdW50LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBDaGVjayBmb3IgbW9kdWxlXG4gIHZhciAkbW9kdWxlID0gdGhpcy4kbW9kdWxlO1xuICB2YXIgJHRleHRhcmVhID0gdGhpcy4kdGV4dGFyZWE7XG4gIHZhciAkY291bnRNZXNzYWdlID0gdGhpcy4kY291bnRNZXNzYWdlO1xuXG4gIGlmICghJHRleHRhcmVhIHx8ICEkY291bnRNZXNzYWdlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBXZSBtb3ZlIGNvdW50IG1lc3NhZ2UgcmlnaHQgYWZ0ZXIgdGhlIGZpZWxkXG4gIC8vIEtlcHQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICR0ZXh0YXJlYS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgJGNvdW50TWVzc2FnZSk7XG5cbiAgLy8gUmVhZCBvcHRpb25zIHNldCB1c2luZyBkYXRhc2V0ICgnZGF0YS0nIHZhbHVlcylcbiAgdGhpcy5vcHRpb25zID0gdGhpcy5nZXREYXRhc2V0KCRtb2R1bGUpO1xuXG4gIC8vIERldGVybWluZSB0aGUgbGltaXQgYXR0cmlidXRlIChjaGFyYWN0ZXJzIG9yIHdvcmRzKVxuICB2YXIgY291bnRBdHRyaWJ1dGUgPSB0aGlzLmRlZmF1bHRzLmNoYXJhY3RlckNvdW50QXR0cmlidXRlO1xuICBpZiAodGhpcy5vcHRpb25zLm1heHdvcmRzKSB7XG4gICAgY291bnRBdHRyaWJ1dGUgPSB0aGlzLmRlZmF1bHRzLndvcmRDb3VudEF0dHJpYnV0ZTtcbiAgfVxuXG4gIC8vIFNhdmUgdGhlIGVsZW1lbnQgbGltaXRcbiAgdGhpcy5tYXhMZW5ndGggPSAkbW9kdWxlLmdldEF0dHJpYnV0ZShjb3VudEF0dHJpYnV0ZSk7XG5cbiAgLy8gQ2hlY2sgZm9yIGxpbWl0XG4gIGlmICghdGhpcy5tYXhMZW5ndGgpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIFJlbW92ZSBoYXJkIGxpbWl0IGlmIHNldFxuICAkbW9kdWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWF4bGVuZ3RoJyk7XG5cbiAgLy8gV2hlbiB0aGUgcGFnZSBpcyByZXN0b3JlZCBhZnRlciBuYXZpZ2F0aW5nICdiYWNrJyBpbiBzb21lIGJyb3dzZXJzIHRoZVxuICAvLyBzdGF0ZSBvZiB0aGUgY2hhcmFjdGVyIGNvdW50IGlzIG5vdCByZXN0b3JlZCB1bnRpbCAqYWZ0ZXIqIHRoZSBET01Db250ZW50TG9hZGVkXG4gIC8vIGV2ZW50IGlzIGZpcmVkLCBzbyB3ZSBuZWVkIHRvIHN5bmMgYWZ0ZXIgdGhlIHBhZ2VzaG93IGV2ZW50IGluIGJyb3dzZXJzXG4gIC8vIHRoYXQgc3VwcG9ydCBpdC5cbiAgaWYgKCdvbnBhZ2VzaG93JyBpbiB3aW5kb3cpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZXNob3cnLCB0aGlzLnN5bmMuYmluZCh0aGlzKSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLnN5bmMuYmluZCh0aGlzKSk7XG4gIH1cblxuICB0aGlzLnN5bmMoKTtcbn07XG5cbkNoYXJhY3RlckNvdW50LnByb3RvdHlwZS5zeW5jID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmJpbmRDaGFuZ2VFdmVudHMoKTtcbiAgdGhpcy51cGRhdGVDb3VudE1lc3NhZ2UoKTtcbn07XG5cbi8vIFJlYWQgZGF0YSBhdHRyaWJ1dGVzXG5DaGFyYWN0ZXJDb3VudC5wcm90b3R5cGUuZ2V0RGF0YXNldCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHZhciBkYXRhc2V0ID0ge307XG4gIHZhciBhdHRyaWJ1dGVzID0gZWxlbWVudC5hdHRyaWJ1dGVzO1xuICBpZiAoYXR0cmlidXRlcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNbaV07XG4gICAgICB2YXIgbWF0Y2ggPSBhdHRyaWJ1dGUubmFtZS5tYXRjaCgvXmRhdGEtKC4rKS8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGRhdGFzZXRbbWF0Y2hbMV1dID0gYXR0cmlidXRlLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YXNldFxufTtcblxuLy8gQ291bnRzIGNoYXJhY3RlcnMgb3Igd29yZHMgaW4gdGV4dFxuQ2hhcmFjdGVyQ291bnQucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgdmFyIGxlbmd0aDtcbiAgaWYgKHRoaXMub3B0aW9ucy5tYXh3b3Jkcykge1xuICAgIHZhciB0b2tlbnMgPSB0ZXh0Lm1hdGNoKC9cXFMrL2cpIHx8IFtdOyAvLyBNYXRjaGVzIGNvbnNlY3V0aXZlIG5vbi13aGl0ZXNwYWNlIGNoYXJzXG4gICAgbGVuZ3RoID0gdG9rZW5zLmxlbmd0aDtcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcbiAgfVxuICByZXR1cm4gbGVuZ3RoXG59O1xuXG4vLyBCaW5kIGlucHV0IHByb3BlcnR5Y2hhbmdlIHRvIHRoZSBlbGVtZW50cyBhbmQgdXBkYXRlIGJhc2VkIG9uIHRoZSBjaGFuZ2VcbkNoYXJhY3RlckNvdW50LnByb3RvdHlwZS5iaW5kQ2hhbmdlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgJHRleHRhcmVhID0gdGhpcy4kdGV4dGFyZWE7XG4gICR0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuY2hlY2tJZlZhbHVlQ2hhbmdlZC5iaW5kKHRoaXMpKTtcblxuICAvLyBCaW5kIGZvY3VzL2JsdXIgZXZlbnRzIHRvIHN0YXJ0L3N0b3AgcG9sbGluZ1xuICAkdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcykpO1xuICAkdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpKTtcbn07XG5cbi8vIFNwZWVjaCByZWNvZ25pdGlvbiBzb2Z0d2FyZSBzdWNoIGFzIERyYWdvbiBOYXR1cmFsbHlTcGVha2luZyB3aWxsIG1vZGlmeSB0aGVcbi8vIGZpZWxkcyBieSBkaXJlY3RseSBjaGFuZ2luZyBpdHMgYHZhbHVlYC4gVGhlc2UgY2hhbmdlcyBkb24ndCB0cmlnZ2VyIGV2ZW50c1xuLy8gaW4gSmF2YVNjcmlwdCwgc28gd2UgbmVlZCB0byBwb2xsIHRvIGhhbmRsZSB3aGVuIGFuZCBpZiB0aGV5IG9jY3VyLlxuQ2hhcmFjdGVyQ291bnQucHJvdG90eXBlLmNoZWNrSWZWYWx1ZUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy4kdGV4dGFyZWEub2xkVmFsdWUpIHRoaXMuJHRleHRhcmVhLm9sZFZhbHVlID0gJyc7XG4gIGlmICh0aGlzLiR0ZXh0YXJlYS52YWx1ZSAhPT0gdGhpcy4kdGV4dGFyZWEub2xkVmFsdWUpIHtcbiAgICB0aGlzLiR0ZXh0YXJlYS5vbGRWYWx1ZSA9IHRoaXMuJHRleHRhcmVhLnZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ291bnRNZXNzYWdlKCk7XG4gIH1cbn07XG5cbi8vIFVwZGF0ZSBtZXNzYWdlIGJveFxuQ2hhcmFjdGVyQ291bnQucHJvdG90eXBlLnVwZGF0ZUNvdW50TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvdW50RWxlbWVudCA9IHRoaXMuJHRleHRhcmVhO1xuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgdmFyIGNvdW50TWVzc2FnZSA9IHRoaXMuJGNvdW50TWVzc2FnZTtcblxuICAvLyBEZXRlcm1pbmUgdGhlIHJlbWFpbmluZyBudW1iZXIgb2YgY2hhcmFjdGVycy93b3Jkc1xuICB2YXIgY3VycmVudExlbmd0aCA9IHRoaXMuY291bnQoY291bnRFbGVtZW50LnZhbHVlKTtcbiAgdmFyIG1heExlbmd0aCA9IHRoaXMubWF4TGVuZ3RoO1xuICB2YXIgcmVtYWluaW5nTnVtYmVyID0gbWF4TGVuZ3RoIC0gY3VycmVudExlbmd0aDtcblxuICAvLyBTZXQgdGhyZXNob2xkIGlmIHByZXNlbnRlZCBpbiBvcHRpb25zXG4gIHZhciB0aHJlc2hvbGRQZXJjZW50ID0gb3B0aW9ucy50aHJlc2hvbGQgPyBvcHRpb25zLnRocmVzaG9sZCA6IDA7XG4gIHZhciB0aHJlc2hvbGRWYWx1ZSA9IG1heExlbmd0aCAqIHRocmVzaG9sZFBlcmNlbnQgLyAxMDA7XG4gIGlmICh0aHJlc2hvbGRWYWx1ZSA+IGN1cnJlbnRMZW5ndGgpIHtcbiAgICBjb3VudE1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZ292dWstY2hhcmFjdGVyLWNvdW50X19tZXNzYWdlLS1kaXNhYmxlZCcpO1xuICAgIC8vIEVuc3VyZSB0aHJlc2hvbGQgaXMgaGlkZGVuIGZvciB1c2VycyBvZiBhc3Npc3RpdmUgdGVjaG5vbG9naWVzXG4gICAgY291bnRNZXNzYWdlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBjb3VudE1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZ292dWstY2hhcmFjdGVyLWNvdW50X19tZXNzYWdlLS1kaXNhYmxlZCcpO1xuICAgIC8vIEVuc3VyZSB0aHJlc2hvbGQgaXMgdmlzaWJsZSBmb3IgdXNlcnMgb2YgYXNzaXN0aXZlIHRlY2hub2xvZ2llc1xuICAgIGNvdW50TWVzc2FnZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gIH1cblxuICAvLyBVcGRhdGUgc3R5bGVzXG4gIGlmIChyZW1haW5pbmdOdW1iZXIgPCAwKSB7XG4gICAgY291bnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dvdnVrLXRleHRhcmVhLS1lcnJvcicpO1xuICAgIGNvdW50TWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdnb3Z1ay1oaW50Jyk7XG4gICAgY291bnRNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2dvdnVrLWVycm9yLW1lc3NhZ2UnKTtcbiAgfSBlbHNlIHtcbiAgICBjb3VudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ292dWstdGV4dGFyZWEtLWVycm9yJyk7XG4gICAgY291bnRNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2dvdnVrLWVycm9yLW1lc3NhZ2UnKTtcbiAgICBjb3VudE1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZ292dWstaGludCcpO1xuICB9XG5cbiAgLy8gVXBkYXRlIG1lc3NhZ2VcbiAgdmFyIGNoYXJWZXJiID0gJ3JlbWFpbmluZyc7XG4gIHZhciBjaGFyTm91biA9ICdjaGFyYWN0ZXInO1xuICB2YXIgZGlzcGxheU51bWJlciA9IHJlbWFpbmluZ051bWJlcjtcbiAgaWYgKG9wdGlvbnMubWF4d29yZHMpIHtcbiAgICBjaGFyTm91biA9ICd3b3JkJztcbiAgfVxuICBjaGFyTm91biA9IGNoYXJOb3VuICsgKChyZW1haW5pbmdOdW1iZXIgPT09IC0xIHx8IHJlbWFpbmluZ051bWJlciA9PT0gMSkgPyAnJyA6ICdzJyk7XG5cbiAgY2hhclZlcmIgPSAocmVtYWluaW5nTnVtYmVyIDwgMCkgPyAndG9vIG1hbnknIDogJ3JlbWFpbmluZyc7XG4gIGRpc3BsYXlOdW1iZXIgPSBNYXRoLmFicyhyZW1haW5pbmdOdW1iZXIpO1xuXG4gIGNvdW50TWVzc2FnZS5pbm5lckhUTUwgPSAnWW91IGhhdmUgJyArIGRpc3BsYXlOdW1iZXIgKyAnICcgKyBjaGFyTm91biArICcgJyArIGNoYXJWZXJiO1xufTtcblxuQ2hhcmFjdGVyQ291bnQucHJvdG90eXBlLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAvLyBDaGVjayBpZiB2YWx1ZSBjaGFuZ2VkIG9uIGZvY3VzXG4gIHRoaXMudmFsdWVDaGVja2VyID0gc2V0SW50ZXJ2YWwodGhpcy5jaGVja0lmVmFsdWVDaGFuZ2VkLmJpbmQodGhpcyksIDEwMDApO1xufTtcblxuQ2hhcmFjdGVyQ291bnQucHJvdG90eXBlLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIENhbmNlbCB2YWx1ZSBjaGVja2luZyBvbiBibHVyXG4gIGNsZWFySW50ZXJ2YWwodGhpcy52YWx1ZUNoZWNrZXIpO1xufTtcblxuZnVuY3Rpb24gQ2hlY2tib3hlcyAoJG1vZHVsZSkge1xuICB0aGlzLiRtb2R1bGUgPSAkbW9kdWxlO1xuICB0aGlzLiRpbnB1dHMgPSAkbW9kdWxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xufVxuXG4vKipcbiAqIEluaXRpYWxpc2UgQ2hlY2tib3hlc1xuICpcbiAqIENoZWNrYm94ZXMgY2FuIGJlIGFzc29jaWF0ZWQgd2l0aCBhICdjb25kaXRpb25hbGx5IHJldmVhbGVkJyBjb250ZW50IGJsb2NrIOKAk1xuICogZm9yIGV4YW1wbGUsIGEgY2hlY2tib3ggZm9yICdQaG9uZScgY291bGQgcmV2ZWFsIGFuIGFkZGl0aW9uYWwgZm9ybSBmaWVsZCBmb3JcbiAqIHRoZSB1c2VyIHRvIGVudGVyIHRoZWlyIHBob25lIG51bWJlci5cbiAqXG4gKiBUaGVzZSBhc3NvY2lhdGlvbnMgYXJlIG1hZGUgdXNpbmcgYSBgZGF0YS1hcmlhLWNvbnRyb2xzYCBhdHRyaWJ1dGUsIHdoaWNoIGlzXG4gKiBwcm9tb3RlZCB0byBhbiBhcmlhLWNvbnRyb2xzIGF0dHJpYnV0ZSBkdXJpbmcgaW5pdGlhbGlzYXRpb24uXG4gKlxuICogV2UgYWxzbyBuZWVkIHRvIHJlc3RvcmUgdGhlIHN0YXRlIG9mIGFueSBjb25kaXRpb25hbCByZXZlYWxzIG9uIHRoZSBwYWdlIChmb3JcbiAqIGV4YW1wbGUgaWYgdGhlIHVzZXIgaGFzIG5hdmlnYXRlZCBiYWNrKSwgYW5kIHNldCB1cCBldmVudCBoYW5kbGVycyB0byBrZWVwXG4gKiB0aGUgcmV2ZWFsIGluIHN5bmMgd2l0aCB0aGUgY2hlY2tib3ggc3RhdGUuXG4gKi9cbkNoZWNrYm94ZXMucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciAkbW9kdWxlID0gdGhpcy4kbW9kdWxlO1xuICB2YXIgJGlucHV0cyA9IHRoaXMuJGlucHV0cztcblxuICBub2RlTGlzdEZvckVhY2goJGlucHV0cywgZnVuY3Rpb24gKCRpbnB1dCkge1xuICAgIHZhciB0YXJnZXQgPSAkaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLWFyaWEtY29udHJvbHMnKTtcblxuICAgIC8vIFNraXAgY2hlY2tib3hlcyB3aXRob3V0IGRhdGEtYXJpYS1jb250cm9scyBhdHRyaWJ1dGVzLCBvciB3aGVyZSB0aGVcbiAgICAvLyB0YXJnZXQgZWxlbWVudCBkb2VzIG5vdCBleGlzdC5cbiAgICBpZiAoIXRhcmdldCB8fCAhJG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcjJyArIHRhcmdldCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFByb21vdGUgdGhlIGRhdGEtYXJpYS1jb250cm9scyBhdHRyaWJ1dGUgdG8gYSBhcmlhLWNvbnRyb2xzIGF0dHJpYnV0ZVxuICAgIC8vIHNvIHRoYXQgdGhlIHJlbGF0aW9uc2hpcCBpcyBleHBvc2VkIGluIHRoZSBBT01cbiAgICAkaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJywgdGFyZ2V0KTtcbiAgICAkaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWFyaWEtY29udHJvbHMnKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiB0aGUgcGFnZSBpcyByZXN0b3JlZCBhZnRlciBuYXZpZ2F0aW5nICdiYWNrJyBpbiBzb21lIGJyb3dzZXJzIHRoZVxuICAvLyBzdGF0ZSBvZiBmb3JtIGNvbnRyb2xzIGlzIG5vdCByZXN0b3JlZCB1bnRpbCAqYWZ0ZXIqIHRoZSBET01Db250ZW50TG9hZGVkXG4gIC8vIGV2ZW50IGlzIGZpcmVkLCBzbyB3ZSBuZWVkIHRvIHN5bmMgYWZ0ZXIgdGhlIHBhZ2VzaG93IGV2ZW50IGluIGJyb3dzZXJzXG4gIC8vIHRoYXQgc3VwcG9ydCBpdC5cbiAgaWYgKCdvbnBhZ2VzaG93JyBpbiB3aW5kb3cpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZXNob3cnLCB0aGlzLnN5bmNBbGxDb25kaXRpb25hbFJldmVhbHMuYmluZCh0aGlzKSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLnN5bmNBbGxDb25kaXRpb25hbFJldmVhbHMuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvLyBBbHRob3VnaCB3ZSd2ZSBzZXQgdXAgaGFuZGxlcnMgdG8gc3luYyBzdGF0ZSBvbiB0aGUgcGFnZXNob3cgb3JcbiAgLy8gRE9NQ29udGVudExvYWRlZCBldmVudCwgaW5pdCBjb3VsZCBiZSBjYWxsZWQgYWZ0ZXIgdGhvc2UgZXZlbnRzIGhhdmUgZmlyZWQsXG4gIC8vIGZvciBleGFtcGxlIGlmIHRoZXkgYXJlIGFkZGVkIHRvIHRoZSBwYWdlIGR5bmFtaWNhbGx5LCBzbyBzeW5jIG5vdyB0b28uXG4gIHRoaXMuc3luY0FsbENvbmRpdGlvbmFsUmV2ZWFscygpO1xuXG4gICRtb2R1bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBTeW5jIHRoZSBjb25kaXRpb25hbCByZXZlYWwgc3RhdGVzIGZvciBhbGwgaW5wdXRzIGluIHRoaXMgJG1vZHVsZS5cbiAqL1xuQ2hlY2tib3hlcy5wcm90b3R5cGUuc3luY0FsbENvbmRpdGlvbmFsUmV2ZWFscyA9IGZ1bmN0aW9uICgpIHtcbiAgbm9kZUxpc3RGb3JFYWNoKHRoaXMuJGlucHV0cywgdGhpcy5zeW5jQ29uZGl0aW9uYWxSZXZlYWxXaXRoSW5wdXRTdGF0ZS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogU3luYyBjb25kaXRpb25hbCByZXZlYWwgd2l0aCB0aGUgaW5wdXQgc3RhdGVcbiAqXG4gKiBTeW5jaHJvbmlzZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgY29uZGl0aW9uYWwgcmV2ZWFsLCBhbmQgaXRzIGFjY2Vzc2libGVcbiAqIHN0YXRlLCB3aXRoIHRoZSBpbnB1dCdzIGNoZWNrZWQgc3RhdGUuXG4gKlxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSAkaW5wdXQgQ2hlY2tib3ggaW5wdXRcbiAqL1xuQ2hlY2tib3hlcy5wcm90b3R5cGUuc3luY0NvbmRpdGlvbmFsUmV2ZWFsV2l0aElucHV0U3RhdGUgPSBmdW5jdGlvbiAoJGlucHV0KSB7XG4gIHZhciAkdGFyZ2V0ID0gdGhpcy4kbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJyMnICsgJGlucHV0LmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpKTtcblxuICBpZiAoJHRhcmdldCAmJiAkdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ292dWstY2hlY2tib3hlc19fY29uZGl0aW9uYWwnKSkge1xuICAgIHZhciBpbnB1dElzQ2hlY2tlZCA9ICRpbnB1dC5jaGVja2VkO1xuXG4gICAgJGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGlucHV0SXNDaGVja2VkKTtcbiAgICAkdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2dvdnVrLWNoZWNrYm94ZXNfX2NvbmRpdGlvbmFsLS1oaWRkZW4nLCAhaW5wdXRJc0NoZWNrZWQpO1xuICB9XG59O1xuXG4vKipcbiAqIFVuY2hlY2sgb3RoZXIgY2hlY2tib3hlc1xuICpcbiAqIEZpbmQgYW55IG90aGVyIGNoZWNrYm94IGlucHV0cyB3aXRoIHRoZSBzYW1lIG5hbWUgdmFsdWUsIGFuZCB1bmNoZWNrIHRoZW0uXG4gKiBUaGlzIGlzIHVzZWZ1bCBmb3Igd2hlbiBhIOKAnE5vbmUgb2YgdGhlc2VcIiBjaGVja2JveCBpcyBjaGVja2VkLlxuICovXG5DaGVja2JveGVzLnByb3RvdHlwZS51bkNoZWNrQWxsSW5wdXRzRXhjZXB0ID0gZnVuY3Rpb24gKCRpbnB1dCkge1xuICB2YXIgYWxsSW5wdXRzV2l0aFNhbWVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW25hbWU9XCInICsgJGlucHV0Lm5hbWUgKyAnXCJdJyk7XG5cbiAgbm9kZUxpc3RGb3JFYWNoKGFsbElucHV0c1dpdGhTYW1lTmFtZSwgZnVuY3Rpb24gKCRpbnB1dFdpdGhTYW1lTmFtZSkge1xuICAgIHZhciBoYXNTYW1lRm9ybU93bmVyID0gKCRpbnB1dC5mb3JtID09PSAkaW5wdXRXaXRoU2FtZU5hbWUuZm9ybSk7XG4gICAgaWYgKGhhc1NhbWVGb3JtT3duZXIgJiYgJGlucHV0V2l0aFNhbWVOYW1lICE9PSAkaW5wdXQpIHtcbiAgICAgICRpbnB1dFdpdGhTYW1lTmFtZS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICB0aGlzLnN5bmNBbGxDb25kaXRpb25hbFJldmVhbHMoKTtcbn07XG5cbi8qKlxuICogVW5jaGVjayBleGNsdXNpdmUgaW5wdXRzXG4gKlxuICogRmluZCBhbnkgY2hlY2tib3ggaW5wdXRzIHdpdGggdGhlIHNhbWUgbmFtZSB2YWx1ZSBhbmQgdGhlICdleGNsdXNpdmUnIGJlaGF2aW91cixcbiAqIGFuZCB1bmNoZWNrIHRoZW0uIFRoaXMgaGVscHMgcHJldmVudCBzb21lb25lIGNoZWNraW5nIGJvdGggYSByZWd1bGFyIGNoZWNrYm94IGFuZCBhXG4gKiBcIk5vbmUgb2YgdGhlc2VcIiBjaGVja2JveCBpbiB0aGUgc2FtZSBmaWVsZHNldC5cbiAqL1xuQ2hlY2tib3hlcy5wcm90b3R5cGUudW5DaGVja0V4Y2x1c2l2ZUlucHV0cyA9IGZ1bmN0aW9uICgkaW5wdXQpIHtcbiAgdmFyIGFsbElucHV0c1dpdGhTYW1lTmFtZUFuZEV4Y2x1c2l2ZUJlaGF2aW91ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJ2lucHV0W2RhdGEtYmVoYXZpb3VyPVwiZXhjbHVzaXZlXCJdW3R5cGU9XCJjaGVja2JveFwiXVtuYW1lPVwiJyArICRpbnB1dC5uYW1lICsgJ1wiXSdcbiAgKTtcblxuICBub2RlTGlzdEZvckVhY2goYWxsSW5wdXRzV2l0aFNhbWVOYW1lQW5kRXhjbHVzaXZlQmVoYXZpb3VyLCBmdW5jdGlvbiAoJGV4Y2x1c2l2ZUlucHV0KSB7XG4gICAgdmFyIGhhc1NhbWVGb3JtT3duZXIgPSAoJGlucHV0LmZvcm0gPT09ICRleGNsdXNpdmVJbnB1dC5mb3JtKTtcbiAgICBpZiAoaGFzU2FtZUZvcm1Pd25lcikge1xuICAgICAgJGV4Y2x1c2l2ZUlucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuXG4gIHRoaXMuc3luY0FsbENvbmRpdGlvbmFsUmV2ZWFscygpO1xufTtcblxuLyoqXG4gKiBDbGljayBldmVudCBoYW5kbGVyXG4gKlxuICogSGFuZGxlIGEgY2xpY2sgd2l0aGluIHRoZSAkbW9kdWxlIOKAkyBpZiB0aGUgY2xpY2sgb2NjdXJyZWQgb24gYSBjaGVja2JveCwgc3luY1xuICogdGhlIHN0YXRlIG9mIGFueSBhc3NvY2lhdGVkIGNvbmRpdGlvbmFsIHJldmVhbCB3aXRoIHRoZSBjaGVja2JveCBzdGF0ZS5cbiAqXG4gKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IENsaWNrIGV2ZW50XG4gKi9cbkNoZWNrYm94ZXMucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciAkdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gIC8vIElnbm9yZSBjbGlja3Mgb24gdGhpbmdzIHRoYXQgYXJlbid0IGNoZWNrYm94IGlucHV0c1xuICBpZiAoJHRhcmdldC50eXBlICE9PSAnY2hlY2tib3gnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBJZiB0aGUgY2hlY2tib3ggY29uZGl0aW9uYWxseS1yZXZlYWxzIHNvbWUgY29udGVudCwgc3luYyB0aGUgc3RhdGVcbiAgdmFyIGhhc0FyaWFDb250cm9scyA9ICR0YXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XG4gIGlmIChoYXNBcmlhQ29udHJvbHMpIHtcbiAgICB0aGlzLnN5bmNDb25kaXRpb25hbFJldmVhbFdpdGhJbnB1dFN0YXRlKCR0YXJnZXQpO1xuICB9XG5cbiAgLy8gTm8gZnVydGhlciBiZWhhdmlvdXIgbmVlZGVkIGZvciB1bmNoZWNraW5nXG4gIGlmICghJHRhcmdldC5jaGVja2VkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBIYW5kbGUgJ2V4Y2x1c2l2ZScgY2hlY2tib3ggYmVoYXZpb3VyIChpZSBcIk5vbmUgb2YgdGhlc2VcIilcbiAgdmFyIGhhc0JlaGF2aW91ckV4Y2x1c2l2ZSA9ICgkdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1iZWhhdmlvdXInKSA9PT0gJ2V4Y2x1c2l2ZScpO1xuICBpZiAoaGFzQmVoYXZpb3VyRXhjbHVzaXZlKSB7XG4gICAgdGhpcy51bkNoZWNrQWxsSW5wdXRzRXhjZXB0KCR0YXJnZXQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMudW5DaGVja0V4Y2x1c2l2ZUlucHV0cygkdGFyZ2V0KTtcbiAgfVxufTtcblxuKGZ1bmN0aW9uKHVuZGVmaW5lZCkge1xuXG4gIC8vIERldGVjdGlvbiBmcm9tIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9GaW5hbmNpYWwtVGltZXMvcG9seWZpbGwtc2VydmljZS8xZjNjMDliNDAyZjY1YmY2ZTM5M2Y5MzNhMTViYTYzZjFiODZlZjFmL3BhY2thZ2VzL3BvbHlmaWxsLWxpYnJhcnkvcG9seWZpbGxzL0VsZW1lbnQvcHJvdG90eXBlL21hdGNoZXMvZGV0ZWN0LmpzXG4gIHZhciBkZXRlY3QgPSAoXG4gICAgJ2RvY3VtZW50JyBpbiB0aGlzICYmIFwibWF0Y2hlc1wiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICApO1xuXG4gIGlmIChkZXRlY3QpIHJldHVyblxuXG4gIC8vIFBvbHlmaWxsIGZyb20gaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0ZpbmFuY2lhbC1UaW1lcy9wb2x5ZmlsbC1zZXJ2aWNlLzFmM2MwOWI0MDJmNjViZjZlMzkzZjkzM2ExNWJhNjNmMWI4NmVmMWYvcGFja2FnZXMvcG9seWZpbGwtbGlicmFyeS9wb2x5ZmlsbHMvRWxlbWVudC9wcm90b3R5cGUvbWF0Y2hlcy9wb2x5ZmlsbC5qc1xuICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGZ1bmN0aW9uIG1hdGNoZXMoc2VsZWN0b3IpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXM7XG4gICAgdmFyIGVsZW1lbnRzID0gKGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudC5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKGVsZW1lbnRzW2luZGV4XSAmJiBlbGVtZW50c1tpbmRleF0gIT09IGVsZW1lbnQpIHtcbiAgICAgICsraW5kZXg7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhZWxlbWVudHNbaW5kZXhdO1xuICB9O1xuXG59KS5jYWxsKCdvYmplY3QnID09PSB0eXBlb2Ygd2luZG93ICYmIHdpbmRvdyB8fCAnb2JqZWN0JyA9PT0gdHlwZW9mIHNlbGYgJiYgc2VsZiB8fCAnb2JqZWN0JyA9PT0gdHlwZW9mIGdsb2JhbCAmJiBnbG9iYWwgfHwge30pO1xuXG4oZnVuY3Rpb24odW5kZWZpbmVkKSB7XG5cbiAgLy8gRGV0ZWN0aW9uIGZyb20gaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0ZpbmFuY2lhbC1UaW1lcy9wb2x5ZmlsbC1zZXJ2aWNlLzFmM2MwOWI0MDJmNjViZjZlMzkzZjkzM2ExNWJhNjNmMWI4NmVmMWYvcGFja2FnZXMvcG9seWZpbGwtbGlicmFyeS9wb2x5ZmlsbHMvRWxlbWVudC9wcm90b3R5cGUvY2xvc2VzdC9kZXRlY3QuanNcbiAgdmFyIGRldGVjdCA9IChcbiAgICAnZG9jdW1lbnQnIGluIHRoaXMgJiYgXCJjbG9zZXN0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gICk7XG5cbiAgaWYgKGRldGVjdCkgcmV0dXJuXG5cbiAgLy8gUG9seWZpbGwgZnJvbSBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRmluYW5jaWFsLVRpbWVzL3BvbHlmaWxsLXNlcnZpY2UvMWYzYzA5YjQwMmY2NWJmNmUzOTNmOTMzYTE1YmE2M2YxYjg2ZWYxZi9wYWNrYWdlcy9wb2x5ZmlsbC1saWJyYXJ5L3BvbHlmaWxscy9FbGVtZW50L3Byb3RvdHlwZS9jbG9zZXN0L3BvbHlmaWxsLmpzXG4gIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbiBjbG9zZXN0KHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzO1xuXG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gbm9kZTtcbiAgICAgIGVsc2Ugbm9kZSA9ICdTVkdFbGVtZW50JyBpbiB3aW5kb3cgJiYgbm9kZSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQgPyBub2RlLnBhcmVudE5vZGUgOiBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbn0pLmNhbGwoJ29iamVjdCcgPT09IHR5cGVvZiB3aW5kb3cgJiYgd2luZG93IHx8ICdvYmplY3QnID09PSB0eXBlb2Ygc2VsZiAmJiBzZWxmIHx8ICdvYmplY3QnID09PSB0eXBlb2YgZ2xvYmFsICYmIGdsb2JhbCB8fCB7fSk7XG5cbmZ1bmN0aW9uIEVycm9yU3VtbWFyeSAoJG1vZHVsZSkge1xuICB0aGlzLiRtb2R1bGUgPSAkbW9kdWxlO1xufVxuXG5FcnJvclN1bW1hcnkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciAkbW9kdWxlID0gdGhpcy4kbW9kdWxlO1xuICBpZiAoISRtb2R1bGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICAkbW9kdWxlLmZvY3VzKCk7XG5cbiAgJG1vZHVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiogQ2xpY2sgZXZlbnQgaGFuZGxlclxuKlxuKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IC0gQ2xpY2sgZXZlbnRcbiovXG5FcnJvclN1bW1hcnkucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gIGlmICh0aGlzLmZvY3VzVGFyZ2V0KHRhcmdldCkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59O1xuXG4vKipcbiAqIEZvY3VzIHRoZSB0YXJnZXQgZWxlbWVudFxuICpcbiAqIEJ5IGRlZmF1bHQsIHRoZSBicm93c2VyIHdpbGwgc2Nyb2xsIHRoZSB0YXJnZXQgaW50byB2aWV3LiBCZWNhdXNlIG91ciBsYWJlbHNcbiAqIG9yIGxlZ2VuZHMgYXBwZWFyIGFib3ZlIHRoZSBpbnB1dCwgdGhpcyBtZWFucyB0aGUgdXNlciB3aWxsIGJlIHByZXNlbnRlZCB3aXRoXG4gKiBhbiBpbnB1dCB3aXRob3V0IGFueSBjb250ZXh0LCBhcyB0aGUgbGFiZWwgb3IgbGVnZW5kIHdpbGwgYmUgb2ZmIHRoZSB0b3Agb2ZcbiAqIHRoZSBzY3JlZW4uXG4gKlxuICogTWFudWFsbHkgaGFuZGxpbmcgdGhlIGNsaWNrIGV2ZW50LCBzY3JvbGxpbmcgdGhlIHF1ZXN0aW9uIGludG8gdmlldyBhbmQgdGhlblxuICogZm9jdXNzaW5nIHRoZSBlbGVtZW50IHNvbHZlcyB0aGlzLlxuICpcbiAqIFRoaXMgYWxzbyByZXN1bHRzIGluIHRoZSBsYWJlbCBhbmQvb3IgbGVnZW5kIGJlaW5nIGFubm91bmNlZCBjb3JyZWN0bHkgaW5cbiAqIE5WREEgKGFzIHRlc3RlZCBpbiAyMDE4LjMuMikgLSB3aXRob3V0IHRoaXMgb25seSB0aGUgZmllbGQgdHlwZSBpcyBhbm5vdW5jZWRcbiAqIChlLmcuIFwiRWRpdCwgaGFzIGF1dG9jb21wbGV0ZVwiKS5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAkdGFyZ2V0IC0gRXZlbnQgdGFyZ2V0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdGFyZ2V0IHdhcyBhYmxlIHRvIGJlIGZvY3Vzc2VkXG4gKi9cbkVycm9yU3VtbWFyeS5wcm90b3R5cGUuZm9jdXNUYXJnZXQgPSBmdW5jdGlvbiAoJHRhcmdldCkge1xuICAvLyBJZiB0aGUgZWxlbWVudCB0aGF0IHdhcyBjbGlja2VkIHdhcyBub3QgYSBsaW5rLCByZXR1cm4gZWFybHlcbiAgaWYgKCR0YXJnZXQudGFnTmFtZSAhPT0gJ0EnIHx8ICR0YXJnZXQuaHJlZiA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHZhciBpbnB1dElkID0gdGhpcy5nZXRGcmFnbWVudEZyb21VcmwoJHRhcmdldC5ocmVmKTtcbiAgdmFyICRpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xuICBpZiAoISRpbnB1dCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgdmFyICRsZWdlbmRPckxhYmVsID0gdGhpcy5nZXRBc3NvY2lhdGVkTGVnZW5kT3JMYWJlbCgkaW5wdXQpO1xuICBpZiAoISRsZWdlbmRPckxhYmVsKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBTY3JvbGwgdGhlIGxlZ2VuZCBvciBsYWJlbCBpbnRvIHZpZXcgKmJlZm9yZSogY2FsbGluZyBmb2N1cyBvbiB0aGUgaW5wdXQgdG9cbiAgLy8gYXZvaWQgZXh0cmEgc2Nyb2xsaW5nIGluIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBgcHJldmVudFNjcm9sbGAgKHdoaWNoXG4gIC8vIGF0IHRpbWUgb2Ygd3JpdGluZyBpcyBtb3N0IG9mIHRoZW0uLi4pXG4gICRsZWdlbmRPckxhYmVsLnNjcm9sbEludG9WaWV3KCk7XG4gICRpbnB1dC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG5cbiAgcmV0dXJuIHRydWVcbn07XG5cbi8qKlxuICogR2V0IGZyYWdtZW50IGZyb20gVVJMXG4gKlxuICogRXh0cmFjdCB0aGUgZnJhZ21lbnQgKGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGhhc2gpIGZyb20gYSBVUkwsIGJ1dCBub3QgaW5jbHVkaW5nXG4gKiB0aGUgaGFzaC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBGcmFnbWVudCBmcm9tIFVSTCwgd2l0aG91dCB0aGUgaGFzaFxuICovXG5FcnJvclN1bW1hcnkucHJvdG90eXBlLmdldEZyYWdtZW50RnJvbVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgaWYgKHVybC5pbmRleE9mKCcjJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdXJsLnNwbGl0KCcjJykucG9wKClcbn07XG5cbi8qKlxuICogR2V0IGFzc29jaWF0ZWQgbGVnZW5kIG9yIGxhYmVsXG4gKlxuICogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IGV4aXN0cyBmcm9tIHRoaXMgbGlzdDpcbiAqXG4gKiAtIFRoZSBgPGxlZ2VuZD5gIGFzc29jaWF0ZWQgd2l0aCB0aGUgY2xvc2VzdCBgPGZpZWxkc2V0PmAgYW5jZXN0b3IsIGFzIGxvbmdcbiAqICAgYXMgdGhlIHRvcCBvZiBpdCBpcyBubyBtb3JlIHRoYW4gaGFsZiBhIHZpZXdwb3J0IGhlaWdodCBhd2F5IGZyb20gdGhlXG4gKiAgIGJvdHRvbSBvZiB0aGUgaW5wdXRcbiAqIC0gVGhlIGZpcnN0IGA8bGFiZWw+YCB0aGF0IGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgaW5wdXQgdXNpbmcgZm9yPVwiaW5wdXRJZFwiXG4gKiAtIFRoZSBjbG9zZXN0IHBhcmVudCBgPGxhYmVsPmBcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAkaW5wdXQgLSBUaGUgaW5wdXRcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gQXNzb2NpYXRlZCBsZWdlbmQgb3IgbGFiZWwsIG9yIG51bGwgaWYgbm8gYXNzb2NpYXRlZFxuICogICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQgb3IgbGFiZWwgY2FuIGJlIGZvdW5kXG4gKi9cbkVycm9yU3VtbWFyeS5wcm90b3R5cGUuZ2V0QXNzb2NpYXRlZExlZ2VuZE9yTGFiZWwgPSBmdW5jdGlvbiAoJGlucHV0KSB7XG4gIHZhciAkZmllbGRzZXQgPSAkaW5wdXQuY2xvc2VzdCgnZmllbGRzZXQnKTtcblxuICBpZiAoJGZpZWxkc2V0KSB7XG4gICAgdmFyIGxlZ2VuZHMgPSAkZmllbGRzZXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xlZ2VuZCcpO1xuXG4gICAgaWYgKGxlZ2VuZHMubGVuZ3RoKSB7XG4gICAgICB2YXIgJGNhbmRpZGF0ZUxlZ2VuZCA9IGxlZ2VuZHNbMF07XG5cbiAgICAgIC8vIElmIHRoZSBpbnB1dCB0eXBlIGlzIHJhZGlvIG9yIGNoZWNrYm94LCBhbHdheXMgdXNlIHRoZSBsZWdlbmQgaWYgdGhlcmVcbiAgICAgIC8vIGlzIG9uZS5cbiAgICAgIGlmICgkaW5wdXQudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCAkaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICByZXR1cm4gJGNhbmRpZGF0ZUxlZ2VuZFxuICAgICAgfVxuXG4gICAgICAvLyBGb3Igb3RoZXIgaW5wdXQgdHlwZXMsIG9ubHkgc2Nyb2xsIHRvIHRoZSBmaWVsZHNldOKAmXMgbGVnZW5kIChpbnN0ZWFkIG9mXG4gICAgICAvLyB0aGUgbGFiZWwgYXNzb2NpYXRlZCB3aXRoIHRoZSBpbnB1dCkgaWYgdGhlIGlucHV0IHdvdWxkIGVuZCB1cCBpbiB0aGVcbiAgICAgIC8vIHRvcCBoYWxmIG9mIHRoZSBzY3JlZW4uXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBzaG91bGQgYXZvaWQgc2l0dWF0aW9ucyB3aGVyZSB0aGUgaW5wdXQgZWl0aGVyIGVuZHMgdXAgb2ZmIHRoZVxuICAgICAgLy8gc2NyZWVuLCBvciBvYnNjdXJlZCBieSBhIHNvZnR3YXJlIGtleWJvYXJkLlxuICAgICAgdmFyIGxlZ2VuZFRvcCA9ICRjYW5kaWRhdGVMZWdlbmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgdmFyIGlucHV0UmVjdCA9ICRpbnB1dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgLy8gSWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgICAvLyBvciB3aW5kb3cuaW5uZXJIZWlnaHQgKGxpa2UgSUU4KSwgYmFpbCBhbmQganVzdCBsaW5rIHRvIHRoZSBsYWJlbC5cbiAgICAgIGlmIChpbnB1dFJlY3QuaGVpZ2h0ICYmIHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICB2YXIgaW5wdXRCb3R0b20gPSBpbnB1dFJlY3QudG9wICsgaW5wdXRSZWN0LmhlaWdodDtcblxuICAgICAgICBpZiAoaW5wdXRCb3R0b20gLSBsZWdlbmRUb3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSB7XG4gICAgICAgICAgcmV0dXJuICRjYW5kaWRhdGVMZWdlbmRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGFiZWxbZm9yPSdcIiArICRpbnB1dC5nZXRBdHRyaWJ1dGUoJ2lkJykgKyBcIiddXCIpIHx8XG4gICAgJGlucHV0LmNsb3Nlc3QoJ2xhYmVsJylcbn07XG5cbmZ1bmN0aW9uIE5vdGlmaWNhdGlvbkJhbm5lciAoJG1vZHVsZSkge1xuICB0aGlzLiRtb2R1bGUgPSAkbW9kdWxlO1xufVxuXG4vKipcbiAqIEluaXRpYWxpc2UgdGhlIGNvbXBvbmVudFxuICovXG5Ob3RpZmljYXRpb25CYW5uZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciAkbW9kdWxlID0gdGhpcy4kbW9kdWxlO1xuICAvLyBDaGVjayBmb3IgbW9kdWxlXG4gIGlmICghJG1vZHVsZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy5zZXRGb2N1cygpO1xufTtcblxuLyoqXG4gKiBGb2N1cyB0aGUgZWxlbWVudFxuICpcbiAqIElmIGByb2xlPVwiYWxlcnRcImAgaXMgc2V0LCBmb2N1cyB0aGUgZWxlbWVudCB0byBoZWxwIHNvbWUgYXNzaXN0aXZlIHRlY2hub2xvZ2llc1xuICogcHJpb3JpdGlzZSBhbm5vdW5jaW5nIGl0LlxuICpcbiAqIFlvdSBjYW4gdHVybiBvZmYgdGhlIGF1dG8tZm9jdXMgZnVuY3Rpb25hbGl0eSBieSBzZXR0aW5nIGBkYXRhLWRpc2FibGUtYXV0by1mb2N1cz1cInRydWVcImAgaW4gdGhlXG4gKiBjb21wb25lbnQgSFRNTC4gWW91IG1pZ2h0IHdpc2ggdG8gZG8gdGhpcyBiYXNlZCBvbiB1c2VyIHJlc2VhcmNoIGZpbmRpbmdzLCBvciB0byBhdm9pZCBhIGNsYXNoXG4gKiB3aXRoIGFub3RoZXIgZWxlbWVudCB3aGljaCBzaG91bGQgYmUgZm9jdXNlZCB3aGVuIHRoZSBwYWdlIGxvYWRzLlxuICovXG5Ob3RpZmljYXRpb25CYW5uZXIucHJvdG90eXBlLnNldEZvY3VzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgJG1vZHVsZSA9IHRoaXMuJG1vZHVsZTtcblxuICBpZiAoJG1vZHVsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGlzYWJsZS1hdXRvLWZvY3VzJykgPT09ICd0cnVlJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCRtb2R1bGUuZ2V0QXR0cmlidXRlKCdyb2xlJykgIT09ICdhbGVydCcpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIFNldCB0YWJpbmRleCB0byAtMSB0byBtYWtlIHRoZSBlbGVtZW50IGZvY3VzYWJsZSB3aXRoIEphdmFTY3JpcHQuXG4gIC8vIFJlbW92ZSB0aGUgdGFiaW5kZXggb24gYmx1ciBhcyB0aGUgY29tcG9uZW50IGRvZXNuJ3QgbmVlZCB0byBiZSBmb2N1c2FibGUgYWZ0ZXIgdGhlIHBhZ2UgaGFzXG4gIC8vIGxvYWRlZC5cbiAgaWYgKCEkbW9kdWxlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICRtb2R1bGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuXG4gICAgJG1vZHVsZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgJG1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfSk7XG4gIH1cblxuICAkbW9kdWxlLmZvY3VzKCk7XG59O1xuXG5mdW5jdGlvbiBIZWFkZXIgKCRtb2R1bGUpIHtcbiAgdGhpcy4kbW9kdWxlID0gJG1vZHVsZTtcbiAgdGhpcy4kbWVudUJ1dHRvbiA9ICRtb2R1bGUgJiYgJG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuZ292dWstanMtaGVhZGVyLXRvZ2dsZScpO1xuICB0aGlzLiRtZW51ID0gdGhpcy4kbWVudUJ1dHRvbiAmJiAkbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgJyMnICsgdGhpcy4kbWVudUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKVxuICApO1xufVxuXG4vKipcbiAqIEluaXRpYWxpc2UgaGVhZGVyXG4gKlxuICogQ2hlY2sgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgaGVhZGVyLCBtZW51IGFuZCBtZW51IGJ1dHRvbiDigJMgaWYgYW55IGFyZVxuICogbWlzc2luZyB0aGVuIHRoZXJlJ3Mgbm90aGluZyB0byBkbyBzbyByZXR1cm4gZWFybHkuXG4gKi9cbkhlYWRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLiRtb2R1bGUgfHwgIXRoaXMuJG1lbnVCdXR0b24gfHwgIXRoaXMuJG1lbnUpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRoaXMuc3luY1N0YXRlKHRoaXMuJG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdnb3Z1ay1oZWFkZXJfX25hdmlnYXRpb24tLW9wZW4nKSk7XG4gIHRoaXMuJG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU1lbnVCdXR0b25DbGljay5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogU3luYyBtZW51IHN0YXRlXG4gKlxuICogU3luYyB0aGUgbWVudSBidXR0b24gY2xhc3MgYW5kIHRoZSBhY2Nlc3NpYmxlIHN0YXRlIG9mIHRoZSBtZW51IGFuZCB0aGUgbWVudVxuICogYnV0dG9uIHdpdGggdGhlIHZpc2libGUgc3RhdGUgb2YgdGhlIG1lbnVcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmlzaWJsZSBXaGV0aGVyIHRoZSBtZW51IGlzIGN1cnJlbnRseSB2aXNpYmxlXG4gKi9cbkhlYWRlci5wcm90b3R5cGUuc3luY1N0YXRlID0gZnVuY3Rpb24gKGlzVmlzaWJsZSkge1xuICB0aGlzLiRtZW51QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2dvdnVrLWhlYWRlcl9fbWVudS1idXR0b24tLW9wZW4nLCBpc1Zpc2libGUpO1xuICB0aGlzLiRtZW51QnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGlzVmlzaWJsZSk7XG59O1xuXG4vKipcbiAqIEhhbmRsZSBtZW51IGJ1dHRvbiBjbGlja1xuICpcbiAqIFdoZW4gdGhlIG1lbnUgYnV0dG9uIGlzIGNsaWNrZWQsIGNoYW5nZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgbWVudSBhbmQgdGhlblxuICogc3luYyB0aGUgYWNjZXNzaWJpbGl0eSBzdGF0ZSBhbmQgbWVudSBidXR0b24gc3RhdGVcbiAqL1xuSGVhZGVyLnByb3RvdHlwZS5oYW5kbGVNZW51QnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpc1Zpc2libGUgPSB0aGlzLiRtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2dvdnVrLWhlYWRlcl9fbmF2aWdhdGlvbi0tb3BlbicpO1xuICB0aGlzLnN5bmNTdGF0ZShpc1Zpc2libGUpO1xufTtcblxuZnVuY3Rpb24gUmFkaW9zICgkbW9kdWxlKSB7XG4gIHRoaXMuJG1vZHVsZSA9ICRtb2R1bGU7XG4gIHRoaXMuJGlucHV0cyA9ICRtb2R1bGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG59XG5cbi8qKlxuICogSW5pdGlhbGlzZSBSYWRpb3NcbiAqXG4gKiBSYWRpb3MgY2FuIGJlIGFzc29jaWF0ZWQgd2l0aCBhICdjb25kaXRpb25hbGx5IHJldmVhbGVkJyBjb250ZW50IGJsb2NrIOKAkyBmb3JcbiAqIGV4YW1wbGUsIGEgcmFkaW8gZm9yICdQaG9uZScgY291bGQgcmV2ZWFsIGFuIGFkZGl0aW9uYWwgZm9ybSBmaWVsZCBmb3IgdGhlXG4gKiB1c2VyIHRvIGVudGVyIHRoZWlyIHBob25lIG51bWJlci5cbiAqXG4gKiBUaGVzZSBhc3NvY2lhdGlvbnMgYXJlIG1hZGUgdXNpbmcgYSBgZGF0YS1hcmlhLWNvbnRyb2xzYCBhdHRyaWJ1dGUsIHdoaWNoIGlzXG4gKiBwcm9tb3RlZCB0byBhbiBhcmlhLWNvbnRyb2xzIGF0dHJpYnV0ZSBkdXJpbmcgaW5pdGlhbGlzYXRpb24uXG4gKlxuICogV2UgYWxzbyBuZWVkIHRvIHJlc3RvcmUgdGhlIHN0YXRlIG9mIGFueSBjb25kaXRpb25hbCByZXZlYWxzIG9uIHRoZSBwYWdlIChmb3JcbiAqIGV4YW1wbGUgaWYgdGhlIHVzZXIgaGFzIG5hdmlnYXRlZCBiYWNrKSwgYW5kIHNldCB1cCBldmVudCBoYW5kbGVycyB0byBrZWVwXG4gKiB0aGUgcmV2ZWFsIGluIHN5bmMgd2l0aCB0aGUgcmFkaW8gc3RhdGUuXG4gKi9cblJhZGlvcy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyICRtb2R1bGUgPSB0aGlzLiRtb2R1bGU7XG4gIHZhciAkaW5wdXRzID0gdGhpcy4kaW5wdXRzO1xuXG4gIG5vZGVMaXN0Rm9yRWFjaCgkaW5wdXRzLCBmdW5jdGlvbiAoJGlucHV0KSB7XG4gICAgdmFyIHRhcmdldCA9ICRpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXJpYS1jb250cm9scycpO1xuXG4gICAgLy8gU2tpcCByYWRpb3Mgd2l0aG91dCBkYXRhLWFyaWEtY29udHJvbHMgYXR0cmlidXRlcywgb3Igd2hlcmUgdGhlXG4gICAgLy8gdGFyZ2V0IGVsZW1lbnQgZG9lcyBub3QgZXhpc3QuXG4gICAgaWYgKCF0YXJnZXQgfHwgISRtb2R1bGUucXVlcnlTZWxlY3RvcignIycgKyB0YXJnZXQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBQcm9tb3RlIHRoZSBkYXRhLWFyaWEtY29udHJvbHMgYXR0cmlidXRlIHRvIGEgYXJpYS1jb250cm9scyBhdHRyaWJ1dGVcbiAgICAvLyBzbyB0aGF0IHRoZSByZWxhdGlvbnNoaXAgaXMgZXhwb3NlZCBpbiB0aGUgQU9NXG4gICAgJGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIHRhcmdldCk7XG4gICAgJGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1hcmlhLWNvbnRyb2xzJyk7XG4gIH0pO1xuXG4gIC8vIFdoZW4gdGhlIHBhZ2UgaXMgcmVzdG9yZWQgYWZ0ZXIgbmF2aWdhdGluZyAnYmFjaycgaW4gc29tZSBicm93c2VycyB0aGVcbiAgLy8gc3RhdGUgb2YgZm9ybSBjb250cm9scyBpcyBub3QgcmVzdG9yZWQgdW50aWwgKmFmdGVyKiB0aGUgRE9NQ29udGVudExvYWRlZFxuICAvLyBldmVudCBpcyBmaXJlZCwgc28gd2UgbmVlZCB0byBzeW5jIGFmdGVyIHRoZSBwYWdlc2hvdyBldmVudCBpbiBicm93c2Vyc1xuICAvLyB0aGF0IHN1cHBvcnQgaXQuXG4gIGlmICgnb25wYWdlc2hvdycgaW4gd2luZG93KSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VzaG93JywgdGhpcy5zeW5jQWxsQ29uZGl0aW9uYWxSZXZlYWxzLmJpbmQodGhpcykpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5zeW5jQWxsQ29uZGl0aW9uYWxSZXZlYWxzLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLy8gQWx0aG91Z2ggd2UndmUgc2V0IHVwIGhhbmRsZXJzIHRvIHN5bmMgc3RhdGUgb24gdGhlIHBhZ2VzaG93IG9yXG4gIC8vIERPTUNvbnRlbnRMb2FkZWQgZXZlbnQsIGluaXQgY291bGQgYmUgY2FsbGVkIGFmdGVyIHRob3NlIGV2ZW50cyBoYXZlIGZpcmVkLFxuICAvLyBmb3IgZXhhbXBsZSBpZiB0aGV5IGFyZSBhZGRlZCB0byB0aGUgcGFnZSBkeW5hbWljYWxseSwgc28gc3luYyBub3cgdG9vLlxuICB0aGlzLnN5bmNBbGxDb25kaXRpb25hbFJldmVhbHMoKTtcblxuICAvLyBIYW5kbGUgZXZlbnRzXG4gICRtb2R1bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBTeW5jIHRoZSBjb25kaXRpb25hbCByZXZlYWwgc3RhdGVzIGZvciBhbGwgaW5wdXRzIGluIHRoaXMgJG1vZHVsZS5cbiAqL1xuUmFkaW9zLnByb3RvdHlwZS5zeW5jQWxsQ29uZGl0aW9uYWxSZXZlYWxzID0gZnVuY3Rpb24gKCkge1xuICBub2RlTGlzdEZvckVhY2godGhpcy4kaW5wdXRzLCB0aGlzLnN5bmNDb25kaXRpb25hbFJldmVhbFdpdGhJbnB1dFN0YXRlLmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBTeW5jIGNvbmRpdGlvbmFsIHJldmVhbCB3aXRoIHRoZSBpbnB1dCBzdGF0ZVxuICpcbiAqIFN5bmNocm9uaXNlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBjb25kaXRpb25hbCByZXZlYWwsIGFuZCBpdHMgYWNjZXNzaWJsZVxuICogc3RhdGUsIHdpdGggdGhlIGlucHV0J3MgY2hlY2tlZCBzdGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9ICRpbnB1dCBSYWRpbyBpbnB1dFxuICovXG5SYWRpb3MucHJvdG90eXBlLnN5bmNDb25kaXRpb25hbFJldmVhbFdpdGhJbnB1dFN0YXRlID0gZnVuY3Rpb24gKCRpbnB1dCkge1xuICB2YXIgJHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgJGlucHV0LmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpKTtcblxuICBpZiAoJHRhcmdldCAmJiAkdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ292dWstcmFkaW9zX19jb25kaXRpb25hbCcpKSB7XG4gICAgdmFyIGlucHV0SXNDaGVja2VkID0gJGlucHV0LmNoZWNrZWQ7XG5cbiAgICAkaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaW5wdXRJc0NoZWNrZWQpO1xuICAgICR0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZ292dWstcmFkaW9zX19jb25kaXRpb25hbC0taGlkZGVuJywgIWlucHV0SXNDaGVja2VkKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDbGljayBldmVudCBoYW5kbGVyXG4gKlxuICogSGFuZGxlIGEgY2xpY2sgd2l0aGluIHRoZSAkbW9kdWxlIOKAkyBpZiB0aGUgY2xpY2sgb2NjdXJyZWQgb24gYSByYWRpbywgc3luY1xuICogdGhlIHN0YXRlIG9mIHRoZSBjb25kaXRpb25hbCByZXZlYWwgZm9yIGFsbCByYWRpbyBidXR0b25zIGluIHRoZSBzYW1lIGZvcm1cbiAqIHdpdGggdGhlIHNhbWUgbmFtZSAoYmVjYXVzZSBjaGVja2luZyBvbmUgcmFkaW8gY291bGQgaGF2ZSB1bi1jaGVja2VkIGEgcmFkaW9cbiAqIGluIGFub3RoZXIgJG1vZHVsZSlcbiAqXG4gKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IENsaWNrIGV2ZW50XG4gKi9cblJhZGlvcy5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyICRjbGlja2VkSW5wdXQgPSBldmVudC50YXJnZXQ7XG5cbiAgLy8gSWdub3JlIGNsaWNrcyBvbiB0aGluZ3MgdGhhdCBhcmVuJ3QgcmFkaW8gYnV0dG9uc1xuICBpZiAoJGNsaWNrZWRJbnB1dC50eXBlICE9PSAncmFkaW8nKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBXZSBvbmx5IG5lZWQgdG8gY29uc2lkZXIgcmFkaW9zIHdpdGggY29uZGl0aW9uYWwgcmV2ZWFscywgd2hpY2ggd2lsbCBoYXZlXG4gIC8vIGFyaWEtY29udHJvbHMgYXR0cmlidXRlcy5cbiAgdmFyICRhbGxJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl1bYXJpYS1jb250cm9sc10nKTtcblxuICBub2RlTGlzdEZvckVhY2goJGFsbElucHV0cywgZnVuY3Rpb24gKCRpbnB1dCkge1xuICAgIHZhciBoYXNTYW1lRm9ybU93bmVyID0gKCRpbnB1dC5mb3JtID09PSAkY2xpY2tlZElucHV0LmZvcm0pO1xuICAgIHZhciBoYXNTYW1lTmFtZSA9ICgkaW5wdXQubmFtZSA9PT0gJGNsaWNrZWRJbnB1dC5uYW1lKTtcblxuICAgIGlmIChoYXNTYW1lTmFtZSAmJiBoYXNTYW1lRm9ybU93bmVyKSB7XG4gICAgICB0aGlzLnN5bmNDb25kaXRpb25hbFJldmVhbFdpdGhJbnB1dFN0YXRlKCRpbnB1dCk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufTtcblxuKGZ1bmN0aW9uKHVuZGVmaW5lZCkge1xuXG4gICAgLy8gRGV0ZWN0aW9uIGZyb20gaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0ZpbmFuY2lhbC1UaW1lcy9wb2x5ZmlsbC1saWJyYXJ5L21hc3Rlci9wb2x5ZmlsbHMvRWxlbWVudC9wcm90b3R5cGUvbmV4dEVsZW1lbnRTaWJsaW5nL2RldGVjdC5qc1xuICAgIHZhciBkZXRlY3QgPSAoXG4gICAgICAnZG9jdW1lbnQnIGluIHRoaXMgJiYgXCJuZXh0RWxlbWVudFNpYmxpbmdcIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgICApO1xuXG4gICAgaWYgKGRldGVjdCkgcmV0dXJuXG5cbiAgICAvLyBQb2x5ZmlsbCBmcm9tIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9GaW5hbmNpYWwtVGltZXMvcG9seWZpbGwtbGlicmFyeS9tYXN0ZXIvcG9seWZpbGxzL0VsZW1lbnQvcHJvdG90eXBlL25leHRFbGVtZW50U2libGluZy9wb2x5ZmlsbC5qc1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgXCJuZXh0RWxlbWVudFNpYmxpbmdcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgZWwgPSB0aGlzLm5leHRTaWJsaW5nO1xuICAgICAgICB3aGlsZSAoZWwgJiYgZWwubm9kZVR5cGUgIT09IDEpIHsgZWwgPSBlbC5uZXh0U2libGluZzsgfVxuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfSk7XG5cbn0pLmNhbGwoJ29iamVjdCcgPT09IHR5cGVvZiB3aW5kb3cgJiYgd2luZG93IHx8ICdvYmplY3QnID09PSB0eXBlb2Ygc2VsZiAmJiBzZWxmIHx8ICdvYmplY3QnID09PSB0eXBlb2YgZ2xvYmFsICYmIGdsb2JhbCB8fCB7fSk7XG5cbihmdW5jdGlvbih1bmRlZmluZWQpIHtcblxuICAgIC8vIERldGVjdGlvbiBmcm9tIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9GaW5hbmNpYWwtVGltZXMvcG9seWZpbGwtbGlicmFyeS9tYXN0ZXIvcG9seWZpbGxzL0VsZW1lbnQvcHJvdG90eXBlL3ByZXZpb3VzRWxlbWVudFNpYmxpbmcvZGV0ZWN0LmpzXG4gICAgdmFyIGRldGVjdCA9IChcbiAgICAgICdkb2N1bWVudCcgaW4gdGhpcyAmJiBcInByZXZpb3VzRWxlbWVudFNpYmxpbmdcIiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgICApO1xuXG4gICAgaWYgKGRldGVjdCkgcmV0dXJuXG5cbiAgICAvLyBQb2x5ZmlsbCBmcm9tIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9GaW5hbmNpYWwtVGltZXMvcG9seWZpbGwtbGlicmFyeS9tYXN0ZXIvcG9seWZpbGxzL0VsZW1lbnQvcHJvdG90eXBlL3ByZXZpb3VzRWxlbWVudFNpYmxpbmcvcG9seWZpbGwuanNcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdwcmV2aW91c0VsZW1lbnRTaWJsaW5nJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgZWwgPSB0aGlzLnByZXZpb3VzU2libGluZztcbiAgICAgICAgd2hpbGUgKGVsICYmIGVsLm5vZGVUeXBlICE9PSAxKSB7IGVsID0gZWwucHJldmlvdXNTaWJsaW5nOyB9XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9KTtcblxufSkuY2FsbCgnb2JqZWN0JyA9PT0gdHlwZW9mIHdpbmRvdyAmJiB3aW5kb3cgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBzZWxmICYmIHNlbGYgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBnbG9iYWwgJiYgZ2xvYmFsIHx8IHt9KTtcblxuZnVuY3Rpb24gVGFicyAoJG1vZHVsZSkge1xuICB0aGlzLiRtb2R1bGUgPSAkbW9kdWxlO1xuICB0aGlzLiR0YWJzID0gJG1vZHVsZS5xdWVyeVNlbGVjdG9yQWxsKCcuZ292dWstdGFic19fdGFiJyk7XG5cbiAgdGhpcy5rZXlzID0geyBsZWZ0OiAzNywgcmlnaHQ6IDM5LCB1cDogMzgsIGRvd246IDQwIH07XG4gIHRoaXMuanNIaWRkZW5DbGFzcyA9ICdnb3Z1ay10YWJzX19wYW5lbC0taGlkZGVuJztcbn1cblxuVGFicy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cubWF0Y2hNZWRpYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuc2V0dXBSZXNwb25zaXZlQ2hlY2tzKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zZXR1cCgpO1xuICB9XG59O1xuXG5UYWJzLnByb3RvdHlwZS5zZXR1cFJlc3BvbnNpdmVDaGVja3MgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubXFsID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDQwLjA2MjVlbSknKTtcbiAgdGhpcy5tcWwuYWRkTGlzdGVuZXIodGhpcy5jaGVja01vZGUuYmluZCh0aGlzKSk7XG4gIHRoaXMuY2hlY2tNb2RlKCk7XG59O1xuXG5UYWJzLnByb3RvdHlwZS5jaGVja01vZGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLm1xbC5tYXRjaGVzKSB7XG4gICAgdGhpcy5zZXR1cCgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMudGVhcmRvd24oKTtcbiAgfVxufTtcblxuVGFicy5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciAkbW9kdWxlID0gdGhpcy4kbW9kdWxlO1xuICB2YXIgJHRhYnMgPSB0aGlzLiR0YWJzO1xuICB2YXIgJHRhYkxpc3QgPSAkbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5nb3Z1ay10YWJzX19saXN0Jyk7XG4gIHZhciAkdGFiTGlzdEl0ZW1zID0gJG1vZHVsZS5xdWVyeVNlbGVjdG9yQWxsKCcuZ292dWstdGFic19fbGlzdC1pdGVtJyk7XG5cbiAgaWYgKCEkdGFicyB8fCAhJHRhYkxpc3QgfHwgISR0YWJMaXN0SXRlbXMpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gICR0YWJMaXN0LnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWJsaXN0Jyk7XG5cbiAgbm9kZUxpc3RGb3JFYWNoKCR0YWJMaXN0SXRlbXMsIGZ1bmN0aW9uICgkaXRlbSkge1xuICAgICRpdGVtLnNldEF0dHJpYnV0ZSgncm9sZScsICdwcmVzZW50YXRpb24nKTtcbiAgfSk7XG5cbiAgbm9kZUxpc3RGb3JFYWNoKCR0YWJzLCBmdW5jdGlvbiAoJHRhYikge1xuICAgIC8vIFNldCBIVE1MIGF0dHJpYnV0ZXNcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMoJHRhYik7XG5cbiAgICAvLyBTYXZlIGJvdW5kZWQgZnVuY3Rpb25zIHRvIHVzZSB3aGVuIHJlbW92aW5nIGV2ZW50IGxpc3RlbmVycyBkdXJpbmcgdGVhcmRvd25cbiAgICAkdGFiLmJvdW5kVGFiQ2xpY2sgPSB0aGlzLm9uVGFiQ2xpY2suYmluZCh0aGlzKTtcbiAgICAkdGFiLmJvdW5kVGFiS2V5ZG93biA9IHRoaXMub25UYWJLZXlkb3duLmJpbmQodGhpcyk7XG5cbiAgICAvLyBIYW5kbGUgZXZlbnRzXG4gICAgJHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICR0YWIuYm91bmRUYWJDbGljaywgdHJ1ZSk7XG4gICAgJHRhYi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgJHRhYi5ib3VuZFRhYktleWRvd24sIHRydWUpO1xuXG4gICAgLy8gUmVtb3ZlIG9sZCBhY3RpdmUgcGFuZWxzXG4gICAgdGhpcy5oaWRlVGFiKCR0YWIpO1xuICB9LmJpbmQodGhpcykpO1xuXG4gIC8vIFNob3cgZWl0aGVyIHRoZSBhY3RpdmUgdGFiIGFjY29yZGluZyB0byB0aGUgVVJMJ3MgaGFzaCBvciB0aGUgZmlyc3QgdGFiXG4gIHZhciAkYWN0aXZlVGFiID0gdGhpcy5nZXRUYWIod2luZG93LmxvY2F0aW9uLmhhc2gpIHx8IHRoaXMuJHRhYnNbMF07XG4gIHRoaXMuc2hvd1RhYigkYWN0aXZlVGFiKTtcblxuICAvLyBIYW5kbGUgaGFzaGNoYW5nZSBldmVudHNcbiAgJG1vZHVsZS5ib3VuZE9uSGFzaENoYW5nZSA9IHRoaXMub25IYXNoQ2hhbmdlLmJpbmQodGhpcyk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgJG1vZHVsZS5ib3VuZE9uSGFzaENoYW5nZSwgdHJ1ZSk7XG59O1xuXG5UYWJzLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyICRtb2R1bGUgPSB0aGlzLiRtb2R1bGU7XG4gIHZhciAkdGFicyA9IHRoaXMuJHRhYnM7XG4gIHZhciAkdGFiTGlzdCA9ICRtb2R1bGUucXVlcnlTZWxlY3RvcignLmdvdnVrLXRhYnNfX2xpc3QnKTtcbiAgdmFyICR0YWJMaXN0SXRlbXMgPSAkbW9kdWxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5nb3Z1ay10YWJzX19saXN0LWl0ZW0nKTtcblxuICBpZiAoISR0YWJzIHx8ICEkdGFiTGlzdCB8fCAhJHRhYkxpc3RJdGVtcykge1xuICAgIHJldHVyblxuICB9XG5cbiAgJHRhYkxpc3QucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XG5cbiAgbm9kZUxpc3RGb3JFYWNoKCR0YWJMaXN0SXRlbXMsIGZ1bmN0aW9uICgkaXRlbSkge1xuICAgICRpdGVtLnJlbW92ZUF0dHJpYnV0ZSgncm9sZScsICdwcmVzZW50YXRpb24nKTtcbiAgfSk7XG5cbiAgbm9kZUxpc3RGb3JFYWNoKCR0YWJzLCBmdW5jdGlvbiAoJHRhYikge1xuICAgIC8vIFJlbW92ZSBldmVudHNcbiAgICAkdGFiLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgJHRhYi5ib3VuZFRhYkNsaWNrLCB0cnVlKTtcbiAgICAkdGFiLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAkdGFiLmJvdW5kVGFiS2V5ZG93biwgdHJ1ZSk7XG5cbiAgICAvLyBVbnNldCBIVE1MIGF0dHJpYnV0ZXNcbiAgICB0aGlzLnVuc2V0QXR0cmlidXRlcygkdGFiKTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICAvLyBSZW1vdmUgaGFzaGNoYW5nZSBldmVudCBoYW5kbGVyXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgJG1vZHVsZS5ib3VuZE9uSGFzaENoYW5nZSwgdHJ1ZSk7XG59O1xuXG5UYWJzLnByb3RvdHlwZS5vbkhhc2hDaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICB2YXIgJHRhYldpdGhIYXNoID0gdGhpcy5nZXRUYWIoaGFzaCk7XG4gIGlmICghJHRhYldpdGhIYXNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBQcmV2ZW50IGNoYW5naW5nIHRoZSBoYXNoXG4gIGlmICh0aGlzLmNoYW5naW5nSGFzaCkge1xuICAgIHRoaXMuY2hhbmdpbmdIYXNoID0gZmFsc2U7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBTaG93IGVpdGhlciB0aGUgYWN0aXZlIHRhYiBhY2NvcmRpbmcgdG8gdGhlIFVSTCdzIGhhc2ggb3IgdGhlIGZpcnN0IHRhYlxuICB2YXIgJHByZXZpb3VzVGFiID0gdGhpcy5nZXRDdXJyZW50VGFiKCk7XG5cbiAgdGhpcy5oaWRlVGFiKCRwcmV2aW91c1RhYik7XG4gIHRoaXMuc2hvd1RhYigkdGFiV2l0aEhhc2gpO1xuICAkdGFiV2l0aEhhc2guZm9jdXMoKTtcbn07XG5cblRhYnMucHJvdG90eXBlLmhpZGVUYWIgPSBmdW5jdGlvbiAoJHRhYikge1xuICB0aGlzLnVuaGlnaGxpZ2h0VGFiKCR0YWIpO1xuICB0aGlzLmhpZGVQYW5lbCgkdGFiKTtcbn07XG5cblRhYnMucHJvdG90eXBlLnNob3dUYWIgPSBmdW5jdGlvbiAoJHRhYikge1xuICB0aGlzLmhpZ2hsaWdodFRhYigkdGFiKTtcbiAgdGhpcy5zaG93UGFuZWwoJHRhYik7XG59O1xuXG5UYWJzLnByb3RvdHlwZS5nZXRUYWIgPSBmdW5jdGlvbiAoaGFzaCkge1xuICByZXR1cm4gdGhpcy4kbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5nb3Z1ay10YWJzX190YWJbaHJlZj1cIicgKyBoYXNoICsgJ1wiXScpXG59O1xuXG5UYWJzLnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKCR0YWIpIHtcbiAgLy8gc2V0IHRhYiBhdHRyaWJ1dGVzXG4gIHZhciBwYW5lbElkID0gdGhpcy5nZXRIcmVmKCR0YWIpLnNsaWNlKDEpO1xuICAkdGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFiXycgKyBwYW5lbElkKTtcbiAgJHRhYi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndGFiJyk7XG4gICR0YWIuc2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJywgcGFuZWxJZCk7XG4gICR0YWIuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICR0YWIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuXG4gIC8vIHNldCBwYW5lbCBhdHRyaWJ1dGVzXG4gIHZhciAkcGFuZWwgPSB0aGlzLmdldFBhbmVsKCR0YWIpO1xuICAkcGFuZWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3RhYnBhbmVsJyk7XG4gICRwYW5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsICR0YWIuaWQpO1xuICAkcGFuZWwuY2xhc3NMaXN0LmFkZCh0aGlzLmpzSGlkZGVuQ2xhc3MpO1xufTtcblxuVGFicy5wcm90b3R5cGUudW5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKCR0YWIpIHtcbiAgLy8gdW5zZXQgdGFiIGF0dHJpYnV0ZXNcbiAgJHRhYi5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICR0YWIucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XG4gICR0YWIucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XG4gICR0YWIucmVtb3ZlQXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJyk7XG4gICR0YWIucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuXG4gIC8vIHVuc2V0IHBhbmVsIGF0dHJpYnV0ZXNcbiAgdmFyICRwYW5lbCA9IHRoaXMuZ2V0UGFuZWwoJHRhYik7XG4gICRwYW5lbC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgJHBhbmVsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5Jyk7XG4gICRwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuanNIaWRkZW5DbGFzcyk7XG59O1xuXG5UYWJzLnByb3RvdHlwZS5vblRhYkNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2dvdnVrLXRhYnNfX3RhYicpKSB7XG4gIC8vIEFsbG93IGV2ZW50cyBvbiBjaGlsZCBET00gZWxlbWVudHMgdG8gYnViYmxlIHVwIHRvIHRhYiBwYXJlbnRcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHZhciAkbmV3VGFiID0gZS50YXJnZXQ7XG4gIHZhciAkY3VycmVudFRhYiA9IHRoaXMuZ2V0Q3VycmVudFRhYigpO1xuICB0aGlzLmhpZGVUYWIoJGN1cnJlbnRUYWIpO1xuICB0aGlzLnNob3dUYWIoJG5ld1RhYik7XG4gIHRoaXMuY3JlYXRlSGlzdG9yeUVudHJ5KCRuZXdUYWIpO1xufTtcblxuVGFicy5wcm90b3R5cGUuY3JlYXRlSGlzdG9yeUVudHJ5ID0gZnVuY3Rpb24gKCR0YWIpIHtcbiAgdmFyICRwYW5lbCA9IHRoaXMuZ2V0UGFuZWwoJHRhYik7XG5cbiAgLy8gU2F2ZSBhbmQgcmVzdG9yZSB0aGUgaWRcbiAgLy8gc28gdGhlIHBhZ2UgZG9lc24ndCBqdW1wIHdoZW4gYSB1c2VyIGNsaWNrcyBhIHRhYiAod2hpY2ggY2hhbmdlcyB0aGUgaGFzaClcbiAgdmFyIGlkID0gJHBhbmVsLmlkO1xuICAkcGFuZWwuaWQgPSAnJztcbiAgdGhpcy5jaGFuZ2luZ0hhc2ggPSB0cnVlO1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRoaXMuZ2V0SHJlZigkdGFiKS5zbGljZSgxKTtcbiAgJHBhbmVsLmlkID0gaWQ7XG59O1xuXG5UYWJzLnByb3RvdHlwZS5vblRhYktleWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIGNhc2UgdGhpcy5rZXlzLmxlZnQ6XG4gICAgY2FzZSB0aGlzLmtleXMudXA6XG4gICAgICB0aGlzLmFjdGl2YXRlUHJldmlvdXNUYWIoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGJyZWFrXG4gICAgY2FzZSB0aGlzLmtleXMucmlnaHQ6XG4gICAgY2FzZSB0aGlzLmtleXMuZG93bjpcbiAgICAgIHRoaXMuYWN0aXZhdGVOZXh0VGFiKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBicmVha1xuICB9XG59O1xuXG5UYWJzLnByb3RvdHlwZS5hY3RpdmF0ZU5leHRUYWIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjdXJyZW50VGFiID0gdGhpcy5nZXRDdXJyZW50VGFiKCk7XG4gIHZhciBuZXh0VGFiTGlzdEl0ZW0gPSBjdXJyZW50VGFiLnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBpZiAobmV4dFRhYkxpc3RJdGVtKSB7XG4gICAgdmFyIG5leHRUYWIgPSBuZXh0VGFiTGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLmdvdnVrLXRhYnNfX3RhYicpO1xuICB9XG4gIGlmIChuZXh0VGFiKSB7XG4gICAgdGhpcy5oaWRlVGFiKGN1cnJlbnRUYWIpO1xuICAgIHRoaXMuc2hvd1RhYihuZXh0VGFiKTtcbiAgICBuZXh0VGFiLmZvY3VzKCk7XG4gICAgdGhpcy5jcmVhdGVIaXN0b3J5RW50cnkobmV4dFRhYik7XG4gIH1cbn07XG5cblRhYnMucHJvdG90eXBlLmFjdGl2YXRlUHJldmlvdXNUYWIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjdXJyZW50VGFiID0gdGhpcy5nZXRDdXJyZW50VGFiKCk7XG4gIHZhciBwcmV2aW91c1RhYkxpc3RJdGVtID0gY3VycmVudFRhYi5wYXJlbnROb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIGlmIChwcmV2aW91c1RhYkxpc3RJdGVtKSB7XG4gICAgdmFyIHByZXZpb3VzVGFiID0gcHJldmlvdXNUYWJMaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcuZ292dWstdGFic19fdGFiJyk7XG4gIH1cbiAgaWYgKHByZXZpb3VzVGFiKSB7XG4gICAgdGhpcy5oaWRlVGFiKGN1cnJlbnRUYWIpO1xuICAgIHRoaXMuc2hvd1RhYihwcmV2aW91c1RhYik7XG4gICAgcHJldmlvdXNUYWIuZm9jdXMoKTtcbiAgICB0aGlzLmNyZWF0ZUhpc3RvcnlFbnRyeShwcmV2aW91c1RhYik7XG4gIH1cbn07XG5cblRhYnMucHJvdG90eXBlLmdldFBhbmVsID0gZnVuY3Rpb24gKCR0YWIpIHtcbiAgdmFyICRwYW5lbCA9IHRoaXMuJG1vZHVsZS5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0SHJlZigkdGFiKSk7XG4gIHJldHVybiAkcGFuZWxcbn07XG5cblRhYnMucHJvdG90eXBlLnNob3dQYW5lbCA9IGZ1bmN0aW9uICgkdGFiKSB7XG4gIHZhciAkcGFuZWwgPSB0aGlzLmdldFBhbmVsKCR0YWIpO1xuICAkcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmpzSGlkZGVuQ2xhc3MpO1xufTtcblxuVGFicy5wcm90b3R5cGUuaGlkZVBhbmVsID0gZnVuY3Rpb24gKHRhYikge1xuICB2YXIgJHBhbmVsID0gdGhpcy5nZXRQYW5lbCh0YWIpO1xuICAkcGFuZWwuY2xhc3NMaXN0LmFkZCh0aGlzLmpzSGlkZGVuQ2xhc3MpO1xufTtcblxuVGFicy5wcm90b3R5cGUudW5oaWdobGlnaHRUYWIgPSBmdW5jdGlvbiAoJHRhYikge1xuICAkdGFiLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xuICAkdGFiLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZ292dWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpO1xuICAkdGFiLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbn07XG5cblRhYnMucHJvdG90eXBlLmhpZ2hsaWdodFRhYiA9IGZ1bmN0aW9uICgkdGFiKSB7XG4gICR0YWIuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgJHRhYi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2dvdnVrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWQnKTtcbiAgJHRhYi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbn07XG5cblRhYnMucHJvdG90eXBlLmdldEN1cnJlbnRUYWIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLiRtb2R1bGUucXVlcnlTZWxlY3RvcignLmdvdnVrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWQgLmdvdnVrLXRhYnNfX3RhYicpXG59O1xuXG4vLyB0aGlzIGlzIGJlY2F1c2UgSUUgZG9lc24ndCBhbHdheXMgcmV0dXJuIHRoZSBhY3R1YWwgdmFsdWUgYnV0IGEgcmVsYXRpdmUgZnVsbCBwYXRoXG4vLyBzaG91bGQgYmUgYSB1dGlsaXR5IGZ1bmN0aW9uIG1vc3QgcHJvYlxuLy8gaHR0cDovL2xhYnMudGhlc2VkYXlzLmNvbS9ibG9nLzIwMTAvMDEvMDgvZ2V0dGluZy10aGUtaHJlZi12YWx1ZS13aXRoLWpxdWVyeS1pbi1pZS9cblRhYnMucHJvdG90eXBlLmdldEhyZWYgPSBmdW5jdGlvbiAoJHRhYikge1xuICB2YXIgaHJlZiA9ICR0YWIuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIHZhciBoYXNoID0gaHJlZi5zbGljZShocmVmLmluZGV4T2YoJyMnKSwgaHJlZi5sZW5ndGgpO1xuICByZXR1cm4gaGFzaFxufTtcblxuZnVuY3Rpb24gaW5pdEFsbCAob3B0aW9ucykge1xuICAvLyBTZXQgdGhlIG9wdGlvbnMgdG8gYW4gZW1wdHkgb2JqZWN0IGJ5IGRlZmF1bHQgaWYgbm8gb3B0aW9ucyBhcmUgcGFzc2VkLlxuICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucyA6IHt9O1xuXG4gIC8vIEFsbG93IHRoZSB1c2VyIHRvIGluaXRpYWxpc2UgR09WLlVLIEZyb250ZW5kIGluIG9ubHkgY2VydGFpbiBzZWN0aW9ucyBvZiB0aGUgcGFnZVxuICAvLyBEZWZhdWx0cyB0byB0aGUgZW50aXJlIGRvY3VtZW50IGlmIG5vdGhpbmcgaXMgc2V0LlxuICB2YXIgc2NvcGUgPSB0eXBlb2Ygb3B0aW9ucy5zY29wZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLnNjb3BlIDogZG9jdW1lbnQ7XG5cbiAgdmFyICRidXR0b25zID0gc2NvcGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kdWxlPVwiZ292dWstYnV0dG9uXCJdJyk7XG4gIG5vZGVMaXN0Rm9yRWFjaCgkYnV0dG9ucywgZnVuY3Rpb24gKCRidXR0b24pIHtcbiAgICBuZXcgQnV0dG9uKCRidXR0b24pLmluaXQoKTtcbiAgfSk7XG5cbiAgdmFyICRhY2NvcmRpb25zID0gc2NvcGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kdWxlPVwiZ292dWstYWNjb3JkaW9uXCJdJyk7XG4gIG5vZGVMaXN0Rm9yRWFjaCgkYWNjb3JkaW9ucywgZnVuY3Rpb24gKCRhY2NvcmRpb24pIHtcbiAgICBuZXcgQWNjb3JkaW9uKCRhY2NvcmRpb24pLmluaXQoKTtcbiAgfSk7XG5cbiAgdmFyICRkZXRhaWxzID0gc2NvcGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kdWxlPVwiZ292dWstZGV0YWlsc1wiXScpO1xuICBub2RlTGlzdEZvckVhY2goJGRldGFpbHMsIGZ1bmN0aW9uICgkZGV0YWlsKSB7XG4gICAgbmV3IERldGFpbHMoJGRldGFpbCkuaW5pdCgpO1xuICB9KTtcblxuICB2YXIgJGNoYXJhY3RlckNvdW50cyA9IHNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZHVsZT1cImdvdnVrLWNoYXJhY3Rlci1jb3VudFwiXScpO1xuICBub2RlTGlzdEZvckVhY2goJGNoYXJhY3RlckNvdW50cywgZnVuY3Rpb24gKCRjaGFyYWN0ZXJDb3VudCkge1xuICAgIG5ldyBDaGFyYWN0ZXJDb3VudCgkY2hhcmFjdGVyQ291bnQpLmluaXQoKTtcbiAgfSk7XG5cbiAgdmFyICRjaGVja2JveGVzID0gc2NvcGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kdWxlPVwiZ292dWstY2hlY2tib3hlc1wiXScpO1xuICBub2RlTGlzdEZvckVhY2goJGNoZWNrYm94ZXMsIGZ1bmN0aW9uICgkY2hlY2tib3gpIHtcbiAgICBuZXcgQ2hlY2tib3hlcygkY2hlY2tib3gpLmluaXQoKTtcbiAgfSk7XG5cbiAgLy8gRmluZCBmaXJzdCBlcnJvciBzdW1tYXJ5IG1vZHVsZSB0byBlbmhhbmNlLlxuICB2YXIgJGVycm9yU3VtbWFyeSA9IHNjb3BlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vZHVsZT1cImdvdnVrLWVycm9yLXN1bW1hcnlcIl0nKTtcbiAgbmV3IEVycm9yU3VtbWFyeSgkZXJyb3JTdW1tYXJ5KS5pbml0KCk7XG5cbiAgLy8gRmluZCBmaXJzdCBoZWFkZXIgbW9kdWxlIHRvIGVuaGFuY2UuXG4gIHZhciAkdG9nZ2xlQnV0dG9uID0gc2NvcGUucXVlcnlTZWxlY3RvcignW2RhdGEtbW9kdWxlPVwiZ292dWstaGVhZGVyXCJdJyk7XG4gIG5ldyBIZWFkZXIoJHRvZ2dsZUJ1dHRvbikuaW5pdCgpO1xuXG4gIHZhciAkbm90aWZpY2F0aW9uQmFubmVycyA9IHNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZHVsZT1cImdvdnVrLW5vdGlmaWNhdGlvbi1iYW5uZXJcIl0nKTtcbiAgbm9kZUxpc3RGb3JFYWNoKCRub3RpZmljYXRpb25CYW5uZXJzLCBmdW5jdGlvbiAoJG5vdGlmaWNhdGlvbkJhbm5lcikge1xuICAgIG5ldyBOb3RpZmljYXRpb25CYW5uZXIoJG5vdGlmaWNhdGlvbkJhbm5lcikuaW5pdCgpO1xuICB9KTtcblxuICB2YXIgJHJhZGlvcyA9IHNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZHVsZT1cImdvdnVrLXJhZGlvc1wiXScpO1xuICBub2RlTGlzdEZvckVhY2goJHJhZGlvcywgZnVuY3Rpb24gKCRyYWRpbykge1xuICAgIG5ldyBSYWRpb3MoJHJhZGlvKS5pbml0KCk7XG4gIH0pO1xuXG4gIHZhciAkdGFicyA9IHNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZHVsZT1cImdvdnVrLXRhYnNcIl0nKTtcbiAgbm9kZUxpc3RGb3JFYWNoKCR0YWJzLCBmdW5jdGlvbiAoJHRhYnMpIHtcbiAgICBuZXcgVGFicygkdGFicykuaW5pdCgpO1xuICB9KTtcbn1cblxuZXhwb3J0cy5pbml0QWxsID0gaW5pdEFsbDtcbmV4cG9ydHMuQWNjb3JkaW9uID0gQWNjb3JkaW9uO1xuZXhwb3J0cy5CdXR0b24gPSBCdXR0b247XG5leHBvcnRzLkRldGFpbHMgPSBEZXRhaWxzO1xuZXhwb3J0cy5DaGFyYWN0ZXJDb3VudCA9IENoYXJhY3RlckNvdW50O1xuZXhwb3J0cy5DaGVja2JveGVzID0gQ2hlY2tib3hlcztcbmV4cG9ydHMuRXJyb3JTdW1tYXJ5ID0gRXJyb3JTdW1tYXJ5O1xuZXhwb3J0cy5IZWFkZXIgPSBIZWFkZXI7XG5leHBvcnRzLlJhZGlvcyA9IFJhZGlvcztcbmV4cG9ydHMuVGFicyA9IFRhYnM7XG5cbn0pKSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9