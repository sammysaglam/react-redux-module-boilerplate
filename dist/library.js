(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["Library"] = factory(require("react"), require("prop-types"));
	else
		root["Library"] = factory(root["React"], root["PropTypes"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
module.exports = __webpack_require__(8);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HelloWorld_HelloWorld__ = __webpack_require__(6);




var Library = function Library(_ref) {
	var increment = _ref.increment,
	    integerValue = _ref.integerValue;
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{ className: 'library' },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_HelloWorld_HelloWorld__["a" /* default */], { world: 'World' }),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'state-management-example' },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'button',
				{ onClick: increment, type: 'button' },
				'Increment'
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'span',
				{ className: 'integer-value' },
				integerValue
			)
		)
	);
};

Library.propTypes = {
	increment: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	integerValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired
};

var _default = Library;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Library, 'Library', 'N:/Dropbox/SAMS/boilerplates/react-redux-module-boilerplate/src/Library.js');

	__REACT_HOT_LOADER__.register(_default, 'default', 'N:/Dropbox/SAMS/boilerplates/react-redux-module-boilerplate/src/Library.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);



var HelloWorld = function HelloWorld(_ref) {
	var world = _ref.world;
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{ className: 'hello-world' },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'h1',
			null,
			'Hello ',
			world,
			'! base64 encoded font here'
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			null,
			'A base64 embedded image:'
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'use-anton-font' },
			'The image with text:',
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(7) })
		)
	);
};

HelloWorld.propTypes = {
	world: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};

var _default = HelloWorld;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(HelloWorld, 'HelloWorld', 'N:/Dropbox/SAMS/boilerplates/react-redux-module-boilerplate/src/components/HelloWorld/HelloWorld.js');

	__REACT_HOT_LOADER__.register(_default, 'default', 'N:/Dropbox/SAMS/boilerplates/react-redux-module-boilerplate/src/components/HelloWorld/HelloWorld.js');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABFVJREFUeJzt3U+IVWUcxvGvo9SUkeWfhTUEFkULCxSCiMEos4XUIkWKaBfVwj/ULjeK9ncTGUErQ6bClMqMIBQUpTLBiCSKxIoQXUzqTjeNc2dcvAwICXnnfc/5/X7veT5wdnfe97n3POfOO2fuPQdERERERERERERERERERERE6vISMHmVrQf8CbwF3GKWTho1DIxx9QJcuf0N3GmUURoyBIzy/zt/ajsOzDRJKsUNAj9y7Tt/anvKIqyU9xH97/xJ4H2LsFLWy0xv508CnxrklYKWA+NMvwC72o/cvAHrAC1ZBOxGC7n/6EIBZgN7gXnWQTzqQgF2APdbh/Cq9gJsBNZYhxAbK0mndKe76NMiMLB7gJ3U+/yKqfEFuhn4CphjHSSC2gowA/gEuNc6SBS1FWAL8KR1CLGxCpig3KJPi8BAFgMjpF8B0ocaCnAr6UzfTdZBIopegJmkt+a7rINEFb0AbwOPW4cQG8/S3IJPi0DnlgLbrUPUIGIBFgBfAjdYB6lBtALMAj4H7rAOUotoBdgGLLMOUZNIBXgeWGsdojZRCvAg8IF1iBpFKMBCYA9wnXWQGnkvwADp8/gLrYPUynsBXgQetg5RM88FmA1stQ4hdtbR7qleT1sPOA98D7xG+oxj5/yE/Y7wsk2Q1kK3Zb2igQxh/6J73M5ReE3kdQ0wbB3AqfnAPgqWwGsB7rMO4Ngg6f8hRf40ntXHY4dJ36+friPAu9f42Nsz5umC+cA7pM9EZOmnAEPA6oy5xvt47I0Z83TF08Bm4I+cQbz+CvCay5MB4LkSg0hcj+YOoALElv0VOBUgtrm5A6gAsWXvPxWg41SAjlMBOk4F6DgVoONUgI5TAWL7N3cAFSC2D3MHUAHiGiNdHyGLChDXDuB07iAqQEyXSHc0y6YCxDQCnCoxkAoQzzjwZqnBVIB4Pibdy7AIFSCWHvBGyQFVgFh2An+VHFAFiKMHvF56UBUgjt3AydKDqgAxTJC+JVycChDDZ8CJJgZWAfybpKGjH1SACL4AfmtqcBXAt0aPflABvNsL/NLkBCqAb41fJEsF8Otr4HjTk6gAfm1pYxIVwKdvSFdJa5wK4FMrRz+oAB7tB461NZkK4E9rRz+oAN4cAI62OaEK4EurRz+oAJ4cIl0culUqgB8ml8ZXAXz4FjhsMbHXAoxZB2iZ2Y0xvBZg1DpAi44AB60m91qAn60DtGij5eReC7Cf/i4uHdUI8J1lAK8FOEu6QXTNTgLrrUN4LQDAJupdDP4DPAFcsA7iuQAngFetQzTgNPAImdf5L8VzASDdYWSbdYiCDgIPAL9bB5nivQAAr5BuVZN9RSxDo8ALwArS239Iz5B3y7NdmfPfTfp27Fhmjra2CeAH0o4fzHzujZnRx2MfAjZkzHUUeC/j56fMAx4DlpDunHV9gTFL6AEXgTPAr6QTPGdNE4mIiIiIiIiIiIiIiIiIiIiIiIiISDdcBgE8CpVwQrG/AAAAAElFTkSuQmCC"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=library.js.map