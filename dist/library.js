(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define("Library", ["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["Library"] = factory(require("react"), require("prop-types"));
	else
		root["Library"] = factory(root["React"], root["PropTypes"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_prop_types__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(/*! react */ "react")),classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},AppContainer=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,e.apply(this,arguments))}return inherits(t,e),t.prototype.render=function(){return React.Children.only(this.props.children)},t}(React.Component),hot_prod=function(){return function(e){return e}},areComponentsEqual=function(e,t){return e===t},setConfig=function(){};exports.AppContainer=AppContainer,exports.hot=hot_prod,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig;


/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/Library.js":
/*!************************!*\
  !*** ./src/Library.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HelloWorld_HelloWorld__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/HelloWorld/HelloWorld */ "./src/components/HelloWorld/HelloWorld.js");
(function () {
	var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();





var Library = function Library(_ref) {
	var increment = _ref.increment,
	    integerValue = _ref.integerValue;
	return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
		'div',
		{ className: 'library' },
		react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HelloWorld_HelloWorld__WEBPACK_IMPORTED_MODULE_2__["default"], { world: 'World' }),
		react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'div',
			{ className: 'state-management-example' },
			react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'button',
				{ onClick: increment, type: 'button' },
				'Increment'
			),
			react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
			react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'span',
				{ className: 'integer-value' },
				integerValue
			)
		)
	);
};

Library.propTypes = {
	increment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
	integerValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};

var _default = Library;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Library, 'Library', '/home/sammysaglam/work/boilerplates/react-redux-module-boilerplate/src/Library.js');
	reactHotLoader.register(_default, 'default', '/home/sammysaglam/work/boilerplates/react-redux-module-boilerplate/src/Library.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/Library.scss":
/*!**************************!*\
  !*** ./src/Library.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/HelloWorld/HelloWorld.js":
/*!*************************************************!*\
  !*** ./src/components/HelloWorld/HelloWorld.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
(function () {
	var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();




var HelloWorld = function HelloWorld(_ref) {
	var world = _ref.world;
	return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
		'div',
		{ className: 'hello-world' },
		react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'h1',
			null,
			'Hello ',
			world,
			'! base64 encoded font here'
		),
		react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'div',
			null,
			'A base64 embedded image:'
		),
		react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'div',
			{ className: 'use-anton-font' },
			'The image with text: ',
			react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: __webpack_require__(/*! ./img/like.png */ "./src/components/HelloWorld/img/like.png") })
		)
	);
};

HelloWorld.propTypes = {
	world: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

var _default = HelloWorld;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(HelloWorld, 'HelloWorld', '/home/sammysaglam/work/boilerplates/react-redux-module-boilerplate/src/components/HelloWorld/HelloWorld.js');
	reactHotLoader.register(_default, 'default', '/home/sammysaglam/work/boilerplates/react-redux-module-boilerplate/src/components/HelloWorld/HelloWorld.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/HelloWorld/img/like.png":
/*!************************************************!*\
  !*** ./src/components/HelloWorld/img/like.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABFVJREFUeJzt3U+IVWUcxvGvo9SUkeWfhTUEFkULCxSCiMEos4XUIkWKaBfVwj/ULjeK9ncTGUErQ6bClMqMIBQUpTLBiCSKxIoQXUzqTjeNc2dcvAwICXnnfc/5/X7veT5wdnfe97n3POfOO2fuPQdERERERERERERERERERERE6vISMHmVrQf8CbwF3GKWTho1DIxx9QJcuf0N3GmUURoyBIzy/zt/ajsOzDRJKsUNAj9y7Tt/anvKIqyU9xH97/xJ4H2LsFLWy0xv508CnxrklYKWA+NMvwC72o/cvAHrAC1ZBOxGC7n/6EIBZgN7gXnWQTzqQgF2APdbh/Cq9gJsBNZYhxAbK0mndKe76NMiMLB7gJ3U+/yKqfEFuhn4CphjHSSC2gowA/gEuNc6SBS1FWAL8KR1CLGxCpig3KJPi8BAFgMjpF8B0ocaCnAr6UzfTdZBIopegJmkt+a7rINEFb0AbwOPW4cQG8/S3IJPi0DnlgLbrUPUIGIBFgBfAjdYB6lBtALMAj4H7rAOUotoBdgGLLMOUZNIBXgeWGsdojZRCvAg8IF1iBpFKMBCYA9wnXWQGnkvwADp8/gLrYPUynsBXgQetg5RM88FmA1stQ4hdtbR7qleT1sPOA98D7xG+oxj5/yE/Y7wsk2Q1kK3Zb2igQxh/6J73M5ReE3kdQ0wbB3AqfnAPgqWwGsB7rMO4Ngg6f8hRf40ntXHY4dJ36+friPAu9f42Nsz5umC+cA7pM9EZOmnAEPA6oy5xvt47I0Z83TF08Bm4I+cQbz+CvCay5MB4LkSg0hcj+YOoALElv0VOBUgtrm5A6gAsWXvPxWg41SAjlMBOk4F6DgVoONUgI5TAWL7N3cAFSC2D3MHUAHiGiNdHyGLChDXDuB07iAqQEyXSHc0y6YCxDQCnCoxkAoQzzjwZqnBVIB4Pibdy7AIFSCWHvBGyQFVgFh2An+VHFAFiKMHvF56UBUgjt3AydKDqgAxTJC+JVycChDDZ8CJJgZWAfybpKGjH1SACL4AfmtqcBXAt0aPflABvNsL/NLkBCqAb41fJEsF8Otr4HjTk6gAfm1pYxIVwKdvSFdJa5wK4FMrRz+oAB7tB461NZkK4E9rRz+oAN4cAI62OaEK4EurRz+oAJ4cIl0culUqgB8ml8ZXAXz4FjhsMbHXAoxZB2iZ2Y0xvBZg1DpAi44AB60m91qAn60DtGij5eReC7Cf/i4uHdUI8J1lAK8FOEu6QXTNTgLrrUN4LQDAJupdDP4DPAFcsA7iuQAngFetQzTgNPAImdf5L8VzASDdYWSbdYiCDgIPAL9bB5nivQAAr5BuVZN9RSxDo8ALwArS239Iz5B3y7NdmfPfTfp27Fhmjra2CeAH0o4fzHzujZnRx2MfAjZkzHUUeC/j56fMAx4DlpDunHV9gTFL6AEXgTPAr6QTPGdNE4mIiIiIiIiIiIiIiIiIiIiIiIiISDdcBgE8CpVwQrG/AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/themes/apple-theme/apple-theme.scss":
/*!*************************************************!*\
  !*** ./src/themes/apple-theme/apple-theme.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/themes/theme-1/theme-1.scss":
/*!*****************************************!*\
  !*** ./src/themes/theme-1/theme-1.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**************************************************************************************************************************!*\
  !*** multi ./src/themes/apple-theme/apple-theme.scss ./src/themes/theme-1/theme-1.scss ./src/Library.scss ./src/Library ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/themes/apple-theme/apple-theme.scss */"./src/themes/apple-theme/apple-theme.scss");
__webpack_require__(/*! ./src/themes/theme-1/theme-1.scss */"./src/themes/theme-1/theme-1.scss");
__webpack_require__(/*! ./src/Library.scss */"./src/Library.scss");
module.exports = __webpack_require__(/*! ./src/Library */"./src/Library.js");


/***/ }),

/***/ "prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types","root":"PropTypes"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=library.js.map