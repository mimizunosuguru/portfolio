module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mimizunosuguru/projects/mimizunoDesign/components/Header.js";



var styles = new String("a.jsx-3908712803{font-color:black;padding:0 20px;}h1.jsx-3908712803{padding-top:10px;font-size:32px;font-family:'Avenir',serif;}header.jsx-3908712803{height:84px;width:100%;position:fixed;top:0;}.header__inner.jsx-3908712803{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 110px;height:80px;font-size:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}nav.jsx-3908712803{margin-left:auto;font-family:'Avenir',serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHa0IsQUFHc0IsQUFLQSxBQU1MLEFBT0MsQUFRSSxZQWROLEtBWEksQUFLQSxBQXFCYSxNQWRiLFNBWGpCLEFBSzZCLE1BT3JCLE1BQ1IsQUFhQSxlQXBCQSxlQVdpQixlQUNILFlBQ0csZUFDSSw2RkFDcEIiLCJmaWxlIjoiL1VzZXJzL21pbWl6dW5vc3VndXJ1L3Byb2plY3RzL21pbWl6dW5vRGVzaWduL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcblxuY29uc3Qgc3R5bGVzID0gY3NzYFxuICBhIHtcbiAgICBmb250LWNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbiAgXG4gIGgxIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXInLHNlcmlmO1xuICB9XG4gIFxuICBoZWFkZXIge1xuICAgIGhlaWdodDogODRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICB9XG4gIFxuICAuaGVhZGVyX19pbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgMTEwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgfVxuICBcbiAgbmF2IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pcicsIHNlcmlmO1xuICB9XG5gXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGhlYWRlcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9faW5uZXJcIj5cbiAgICAgIDxoMT5cbiAgICAgICAgbWltaXp1bm9EZXNpZ25cbiAgICAgIDwvaDE+XG4gICAgICA8bmF2PlxuICAgICAgICA8TGluayBocmVmPVwiL2luZGV4XCI+XG4gICAgICAgICAgPGE+VG9wPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvd29ya1wiPiovfVxuICAgICAgICAgIHsvKjxhPlN0b3J5PC9hPiovfVxuICAgICAgICB7Lyo8L0xpbms+Ki99XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya1wiPlxuICAgICAgICAgIDxhPldvcms8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxuICA8L2hlYWRlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXX0= */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/components/Header.js */");
styles.__hash = "3908712803";

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "header__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "mimizunoDesign"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Top")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Work")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: styles.__hash,
    css: styles,
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "/Users/mimizunosuguru/projects/mimizunoDesign/components/Layout.js";




var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3290535712",
    css: "*{margin:0;padding:0;}body{background:#F0F1F5;}.Avenir{font-family:'avenir';}p{font-size:16px;font-family:'YuGothic';}a{-webkit-text-decoration:none;text-decoration:none;}a:hover{opacity:0.6;}a:visited{color:#000;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhdUIsQUFHYyxBQUtVLEFBSUUsQUFJTixBQUtNLEFBSVQsQUFJRCxTQXpCRCxFQTBCVyxDQUp2QixHQVR5QixJQVp6QixBQUlBLEVBSUEsaUJBS0EsWUFJQSxXQVNBIiwiZmlsZSI6Ii9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcbmltcG9ydCAgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPEZyYWdtZW50PlxuICAgIHsvKiDjg5jjg4Pjg4Djg7wgKi99XG4gICAgPEhlYWRlci8+XG5cbiAgICB7Lyog44Kz44Oz44OG44Oz44OEICovfVxuICAgIHtwcm9wcy5jaGlsZHJlbn1cblxuICAgIHsvKiDjgrDjg63jg7zjg5Djg6tDU1MgKi99XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMUY1O1xuICB9XG5cbiAgLkF2ZW5pciB7XG4gICAgZm9udC1mYW1pbHk6ICdhdmVuaXInO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnWXVHb3RoaWMnO1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5cbiAgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbmB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXX0= */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/components/Layout.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/mimizunosuguru/projects/mimizunoDesign/pages/index.js";



var styles = new String("section.jsx-3255001730{background:#fff;padding:134px 0 50px;}.section__inner.jsx-3255001730{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 auto;max-width:980px;}.section__box.jsx-3255001730{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:50%;height:380px;}h2.jsx-3255001730{font-family:'Avenir',serif;font-size:28px;}h3.jsx-3255001730{font-family:'Avenir',serif;color:#989696;font-size:24px;}img.jsx-3255001730{width:100%;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHa0IsQUFHcUIsQUFLSCxBQU1BLEFBV2UsQUFLRCxBQU1oQixXQUNDLEtBakNTLE9Ba0N2QixJQVppQixBQUtGLFVBMUJmLElBMkJnQixDQUxoQixjQU1BLGtCQXhCZ0IsQUFNSyxjQUxILGdCQUNsQiwrREFLeUIsbUdBQ2IsVUFDRyxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuXG5jb25zdCBzdHlsZXMgPSBjc3NgXG4gIHNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMTM0cHggMCA1MHB4O1xuICB9XG5cbiAgLnNlY3Rpb25fX2lubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogOTgwcHg7XG4gIH1cblxuICAuc2VjdGlvbl9fYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDM4MHB4O1xuICB9XG4gIFxuICAuc2VjdGlvbl9fYm94LmxlZnQge1xuICB9XG4gIFxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXInLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbiAgXG4gIGgzIHtcbiAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyJywgc2VyaWY7XG4gICBjb2xvcjogIzk4OTY5NjtcbiAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICBcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbmBcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwic2VjdGlvbl9faW5uZXJcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNlY3Rpb25fX2JveCBsZWZ0XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2hlcm9JbWFnZS5wbmdcIiAvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2VjdGlvbl9fYm94IHJpZ2h0XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj5IZWxsbywgSeKAmW0gU3VndSBNaXp1bm88L2gyPlxuICAgICAgICAgICAgPGgzPlVJL1VYIERlc2lnbmVyPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxuICA8L0xheW91dD5cbilcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/pages/index.js */");
styles.__hash = "3255001730";

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-".concat(styles.__hash) + " " + "section__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "section__box left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/heroImage.png",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "section__box right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Hello, I\u2019m Sugu Mizuno"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "UI/UX Designer"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: styles.__hash,
    css: styles,
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map