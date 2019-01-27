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

/***/ "./components/ContentFooter.js":
/*!*************************************!*\
  !*** ./components/ContentFooter.js ***!
  \*************************************/
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
var _jsxFileName = "/Users/mimizunosuguru/projects/mimizunoDesign/components/ContentFooter.js";



var styles = new String("a.jsx-4265591173{font-color:black;padding:0 20px;}section.jsx-4265591173{background:#fff;padding:50px;}section.grey.jsx-4265591173{background:#F0F1F5;padding:50px;}.section__inner.jsx-4265591173{margin:0 auto;max-width:980px;}.card.jsx-4265591173{height:300px;-webkit-flex:1;-ms-flex:1;flex:1;background:#FFFFFF;border:1px solid #F0F1F5;border-radius:8px;box-shadow:0 10px 20px 0 rgba(0,0,0,0.08);-webkit-transition:all 250ms cubic-bezier(.02,.01,.47,1);transition:all 250ms cubic-bezier(.02,.01,.47,1);}.card.jsx-4265591173:hover{box-shadow:0 40px 40px rgba(0,0,0,.16);-webkit-transform:translate(0,-20px);-ms-transform:translate(0,-20px);transform:translate(0,-20px);-webkit-transition-delay:0s!important;transition-delay:0s!important;-webkit-transition:all 250ms cubic-bezier(.02,.01,.47,1);transition:all 250ms cubic-bezier(.02,.01,.47,1);}.card.jsx-4265591173:first-child{margin-right:20px;}.card.jsx-4265591173:last-child{margin-left:20px;}.card__inner.jsx-4265591173{width:100%;height:100%;display:block;padding:20px;color:#fff;}.card__cont.jsx-4265591173{position:relative;width:100%;height:100%;padding:30px 35px;}.card--history.jsx-4265591173 .card__cont.jsx-4265591173{background-image:url(\"/static/history.png\");background-size:auto 100%;background-position:center;}.card--work.jsx-4265591173 .card__cont.jsx-4265591173{background-image:url(\"/static/work.png\");background-size:auto 100%;background-position:center;}.card__inner.jsx-4265591173 span.jsx-4265591173{font-size:20px;font-weight:bold;}.card__inner.jsx-4265591173 p.jsx-4265591173{font-size:50px;font-weight:bold;}@media (max-width:1020px) and (min-width:768px){section.jsx-4265591173{background:red;}}@media (max-width:767px){#css.jsx-4265591173{width:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0NvbnRlbnRGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWtCLEFBR3NCLEFBS0QsQUFLRyxBQUtMLEFBS0QsQUFXMEIsQUFPckIsQUFJRCxBQUlOLEFBUU8sQUFPMEIsQUFNSCxBQU0xQixBQUtBLEFBTUUsQUFJc0IsV0F6QzNCLEFBeUM0QixFQW5FakMsQ0FMUyxDQTBEQyxBQUtBLEFBTWhCLENBL0VZLENBTEUsQUEwQ2pCLENBSkEsQUFnQmEsQ0E1Q0UsSUFxQ0MsTUF6Q2hCLEFBaURjLENBdkNkLEVBZkEsQUFVQSxBQStEQSxBQUtBLEtBL0JlLEVBakJnQixFQXlCWCxBQVdRLEdBTkEsRUF4Q1AsSUE0QlIsU0FRYixFQVBBLElBM0IyQixFQTZDRSxHQU5BLG9CQXRDVCxJQTZDcEIsR0FOQSxXQXRDNEMsOEJBT1osWUFObUIsd0RBT0Esa0RBTm5ELHdEQU9BIiwiZmlsZSI6Ii9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0NvbnRlbnRGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IHN0eWxlcyA9IGNzc2BcbiAgYSB7XG4gICAgZm9udC1jb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG4gIFxuICAgc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICB9XG4gIFxuICBzZWN0aW9uLmdyZXkge1xuICAgIGJhY2tncm91bmQ6ICNGMEYxRjU7XG4gICAgcGFkZGluZzogNTBweDtcbiAgfVxuXG4gIC5zZWN0aW9uX19pbm5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiA5ODBweDtcbiAgfVxuICBcbiAgLmNhcmQge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YwRjFGNTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMDgpO1xuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoLjAyLC4wMSwuNDcsMSk7XG4gIH1cbiAgXG4gIC5jYXJkOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDQwcHggNDBweCByZ2JhKDAsMCwwLC4xNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtMjBweCk7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHMhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoLjAyLC4wMSwuNDcsMSk7XG4gIH1cbiAgXG4gIC5jYXJkOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5jYXJkOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG4gIFxuICAuY2FyZF9faW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAuY2FyZF9fY29udCAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMzBweCAzNXB4O1xuICB9XG4gICAgXG4gIC5jYXJkLS1oaXN0b3J5IC5jYXJkX19jb250ICB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9oaXN0b3J5LnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5jYXJkLS13b3JrIC5jYXJkX19jb250ICB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy93b3JrLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5jYXJkX19pbm5lciBzcGFuIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIC5jYXJkX19pbm5lciBwIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkgeyBcbiAgICAgc2VjdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgIH1cbiAgIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyAjY3Nze3dpZHRoOmF1dG87fSB9XG5gXG5cbmNvbnN0IENvbnRlbnRGb290ZXIgPSAoKSA9PiAoXG4gIDxzZWN0aW9uPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9faW5uZXJcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJkIGNhcmQtLWhpc3RvcnlcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkX19pbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19jb250XCI+XG4gICAgICAgICAgICAgIDxzcGFuPlJlYWQgbXk8L3NwYW4+XG4gICAgICAgICAgICAgIDxwPkhpc3Rvcnk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJkIGNhcmQtLXdvcmtcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkX19pbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19jb250XCI+XG4gICAgICAgICAgICAgIDxzcGFuPlJlYWQgbXk8L3NwYW4+XG4gICAgICAgICAgICAgIDxwPkhpc3Rvcnk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRGb290ZXJcbiJdfQ== */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/components/ContentFooter.js */");
styles.__hash = "4265591173";

var ContentFooter = function ContentFooter() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "section__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-".concat(styles.__hash) + " " + "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card card--history",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(styles.__hash) + " " + "card__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "card__cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Read my"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "History")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card card--work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(styles.__hash) + " " + "card__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "card__cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Read my"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "History")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: styles.__hash,
    css: styles,
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentFooter);

/***/ }),

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
    styleId: "1593675788",
    css: "*{margin:0;padding:0;box-sizing:border-box;}body{background:#F0F1F5;font-family:'Avenir','YuGothic';}.Avenir{font-family:'avenir';}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.ml-auto{margin-left:auto;}p{font-size:16px;}a{-webkit-text-decoration:none;text-decoration:none;}a:hover{opacity:0.6;}a:visited{color:#000;-webkit-text-decoration:none;text-decoration:none;}ul li{display:block;text-align:-webkit-match-parent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhdUIsQUFHYyxBQU1VLEFBS0UsQUFJUixBQUlJLEFBSUYsQUFJTSxBQUlULEFBSUQsQUFLRyxTQXZDSixFQW1DVyxDQUp2QixFQVNrQyxDQWpCbEMsRUFKQSxFQWxCd0IsQUFLVyxFQUtuQyxvQkFUQSxLQXVDQSxJQWRBLENBcEJBLFVBNkJBLGFBckJBIiwiZmlsZSI6Ii9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcbmltcG9ydCAgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPEZyYWdtZW50PlxuICAgIHsvKiDjg5jjg4Pjg4Djg7wgKi99XG4gICAgPEhlYWRlci8+XG5cbiAgICB7Lyog44Kz44Oz44OG44Oz44OEICovfVxuICAgIHtwcm9wcy5jaGlsZHJlbn1cblxuICAgIHsvKiDjgrDjg63jg7zjg5Djg6tDU1MgKi99XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6ICNGMEYxRjU7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXInLCAnWXVHb3RoaWMnO1xuICB9XG5cbiAgLkF2ZW5pciB7XG4gICAgZm9udC1mYW1pbHk6ICdhdmVuaXInO1xuICB9XG5cbiAgLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAubWwtYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cblxuICBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIHVsIGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcbiAgfVxuYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdfQ== */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/components/Layout.js */",
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
/* harmony import */ var _components_ContentFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ContentFooter */ "./components/ContentFooter.js");
var _jsxFileName = "/Users/mimizunosuguru/projects/mimizunoDesign/pages/index.js";




var styles = new String("section.jsx-982231908{background:#fff;padding:134px 50px 50px;}section.grey.jsx-982231908{background:#F0F1F5;padding:50px;}.section__inner.jsx-982231908{margin:0 auto;max-width:980px;}.section__boxWrapper.jsx-982231908{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.section__box.jsx-982231908{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:50%;height:380px;}h2.jsx-982231908{font-family:'Avenir',serif;font-size:28px;}h3.jsx-982231908{font-family:'Avenir',serif;color:#989696;font-size:24px;}img.jsx-982231908{width:100%;height:auto;}.box__card.jsx-982231908{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#fff;padding:30px;}.box__card.jsx-982231908:first-child{margin-bottom:50px;}.card__title.jsx-982231908{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:40%;}.card__cont.jsx-982231908{width:550px;}.card__cont.jsx-982231908 p.jsx-982231908{font-size:15px;margin-bottom:20px;}.card__cont.jsx-982231908 p.jsx-982231908:last-child{margin:0;}.bio__listItem.jsx-982231908{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px;border-bottom:1px solid #EEEEEE;font-size:15px;}.bio__listItem.jsx-982231908 .item--title.jsx-982231908{width:140px;font-family:'Avenir','YuGothic';}.bio__listItem.jsx-982231908 .item--title.jsx-982231908 a.jsx-982231908{font-weight:bold;border-bottom:1px solid #000;}.bio__listItem.jsx-982231908 .item--place.jsx-982231908{margin-left:auto;text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHcUIsQUFLRyxBQUtMLEFBS0QsQUFJQSxBQVdlLEFBS0QsQUFNaEIsQUFLRSxBQU1NLEFBSU4sQUFPRCxBQUlHLEFBS04sQUFJSSxBQVFELEFBS0ssQUFTQSxTQXpCbkIsRUEvQmMsQ0FzQmQsQUFxQm1DLEVBMUVqQixDQXlERyxDQW5FSyxDQXlGSyxBQVNaLEVBN0ZKLEFBK0NmLElBVkEsSUFaaUIsQUFLRixHQXhCZixFQUxBLEVBOERBLEFBK0JBLE1BbEdBLENBbUNnQixDQUxoQixFQXNEQyxFQUtELFVBckRBLGtCQXRCQSxBQUlxQixBQTJCSCxBQVVHLEFBb0JBLGdCQTdCTixhQUNmLGdFQTVCeUIsQUFxQ0EsQUFvQlgsWUFDb0IsZ0NBQ2pCLGVBQ2pCLHdDQTNEWSxBQXFDQSxVQXBDRyxBQXFDZixhQXBDQSIsImZpbGUiOiIvVXNlcnMvbWltaXp1bm9zdWd1cnUvcHJvamVjdHMvbWltaXp1bm9EZXNpZ24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IENvbnRlbnRGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZW50Rm9vdGVyJ1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcblxuY29uc3Qgc3R5bGVzID0gY3NzYFxuICBzZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEzNHB4IDUwcHggNTBweDtcbiAgfVxuICBcbiAgc2VjdGlvbi5ncmV5IHtcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMUY1O1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gIH1cblxuICAuc2VjdGlvbl9faW5uZXIge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogOTgwcHg7XG4gIH1cbiAgXG4gIC5zZWN0aW9uX19ib3hXcmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLnNlY3Rpb25fX2JveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAzODBweDtcbiAgfVxuICBcbiAgLnNlY3Rpb25fX2JveC5sZWZ0IHtcbiAgfVxuICBcbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG4gIFxuICBoMyB7XG4gICBmb250LWZhbWlseTogJ0F2ZW5pcicsIHNlcmlmO1xuICAgY29sb3I6ICM5ODk2OTY7XG4gICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICAuYm94X19jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxuICBcbiAgLmJveF9fY2FyZDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuICBcbiAgLmNhcmRfX3RpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICBcbiAgLmNhcmRfX2NvbnQge1xuICAgIHdpZHRoOiA1NTBweDtcbiAgfVxuICBcbiAgLmNhcmRfX2NvbnQgcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIC5jYXJkX19jb250IHA6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAuYmlvX19saXN0SXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRUVFRTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgXG4gIC5iaW9fX2xpc3RJdGVtIC5pdGVtLS10aXRsZSB7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyJywgJ1l1R290aGljJzsgICBcbiAgIH0gXG4gIFxuICAuYmlvX19saXN0SXRlbSAuaXRlbS0tdGl0bGUgYSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIH1cbiAgXG4gIC5iaW9fX2xpc3RJdGVtIC5pdGVtLS1wb3NpdGlvbiB7XG4gICAgXG4gIH1cbiAgXG4gIC5iaW9fX2xpc3RJdGVtIC5pdGVtLS1wbGFjZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbmBcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgey8qVG9wKi99XG4gICAgPHNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2lubmVyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzZWN0aW9uX19ib3hXcmFwcGVyXCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNlY3Rpb25fX2JveCBsZWZ0XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaGVyb0ltYWdlLnBuZ1wiIC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2VjdGlvbl9fYm94IHJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDI+SGVsbG8sIEnigJltIFN1Z3UgTWl6dW5vPC9oMj5cbiAgICAgICAgICAgICAgPGgzPlVJL1VYIERlc2lnbmVyPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmV5XCI+XG4gICAgICB7LyogQWJvdXQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2lubmVyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJib3hfX2NhcmRcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIj5cbiAgICAgICAgICAgIDxoMj5BYm91dDwvaDI+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZF9fY29udFwiPlxuICAgICAgICAgICAgPHA+5a2m55Sf55Sf5rS744Gn44Gv44CB6Ieq5YiG44GM5oOF54ax44KS5oyB44Gj44Gm5Y+W44KK57WE44KB44KL44KC44Gu44KS6KaL44Gk44GR44KL44Gf44KB5qeY44CF44Gq5rS75YuV44Gr5Y+W44KK57WE44KA5Lit44Gn44CB44OH44K244Kk44Oz44Go5Ye65Lya44GE44G+44GX44Gf44CC44OH44K244Kk44Oz44Gu5ZWP6aGM6Kej5rG644Gu6KaW54K544Gr5oO544GL44KM44CBMjAxN+W5tOOBq+Wkp+WtpuOCkuS8keWtpuOBl+OAgeODmeODiOODiuODoOOBruaXpeezu0lU44K544K/44O844OI44Ki44OD44OX44Gr44Gm44OH44K244Kk44OK44O844Gu44Kk44Oz44K/44O844Oz44Go44GX44Gm44Oh44Oz44K/44O844Gu5YWD44Gr5byf5a2Q5YWl44KK44Gu5b6M44CB54++5Zyo44Gv5Lqs6YO944Gr5oug54K544KS572u44GPQmFzZWNvbm5lY3TmoKrlvI/kvJrnpL7jgavjgaZVSS9VWOODh+OCtuOCpOODiuODvOOBqOOBl+OBpua0u+WLleOBl+OBpuOBhOOBvuOBmeOAgjwvcD5cbiAgICAgICAgICAgIDxwPuOBvuOBn+OAgeaXpeacrOacgOWkp+e0muOBrlVY44Kr44Oz44OV44Kh44Os44Oz44K544KS5q+O5bm06ZaL5YKs44GZ44KLVVggREFZUyBUT0tZT+OBq+OCueOCv+ODg+ODleOBqOOBl+OBpue0hDHlubTplpPmiYDlsZ7jgZfjgabjgYTjgb7jgZfjgZ/jgIJVWOOBq+mWouOBmeOCi+ODluODreOCsOiomOS6i+OBruWft+ethuOBqOOAgeODr+ODvOOCr+OCt+ODp+ODg+ODl+OAgeWLieW8t+S8muOCkuOCueOCv+ODg+ODleOBp+Wumuacn+eahOOBq+mWi+WCrOOBl+OAgeODh+OCtuOCpOODs+OCkuihjOOBhuS4iuOBp+OBruimlueCueOCkuWtpuOBs+OBvuOBl+OBn+OAgjwvcD5cbiAgICAgICAgICAgIDxwPuODouODg+ODiOODvOOBr+S6i+S4iue3tOejqOOBp+OBmeOAguaEn+immuOBp+OBr+OBquOBj+eQhuirluOBqOacrOizquOCkuimi+alteOCgeOCieOCjOOCi+ODh+OCtuOCpOODs+OBjOOBp+OBjeOCi+OCiOOBhuaXpeOAheWLieW8t+OBl+OBpuOBhOOBvuOBmeOAguODh+OCtuOCpOODs+OBruacrOizquOBp+OBguOCi+WVj+mhjOino+axuuOBruimlueCueOBq+OBk+OBoOOCj+OCiuOAgei6q+i/keOBquS6uuOBruiqsumhjOOBi+OCieWPluOCiue1hOOBv+e2muOBkeOBn+OBhOOBp+OBmeOAgjwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICB7LyogQmlvZ3JhcGh5ICovfVxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYm94X19jYXJkXCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcmRfX2NvbnRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJiaW9fX2xpc3RcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJpb19fbGlzdEl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXRpdGxlXCI+PGEgaHJlZj1cIlwiPkJhc2Vjb25uZWN0PC9hPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS0tcG9zaXRpb25cIj5VSS9VWCBEZXNpZ25lciBJbnRlcm48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBsYWNlXCI+5Lqs6YO9IC8gMjAxNyAtIDIwMTnvvIjnj77lnKjvvIk8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJpb19fbGlzdEl0ZW0gZmxleFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS0tdGl0bGVcIj48YSBocmVmPVwiXCI+VVggRGF5cyBUb2t5bzwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBvc2l0aW9uXCI+U3R1ZmY8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBsYWNlXCI+5aSn6ZiqJuadseS6rCAvIDIwMTcgLSAyMDE4PC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiaW9fX2xpc3RJdGVtIGZsZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXRpdGxlXCI+PGEgaHJlZj1cIlwiPkZyYW1naWE8L2E+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS1wb3NpdGlvblwiPkRlc2lnbiAmIE1hcmtldGluZyBJbnRlcm48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBsYWNlXCI+44OZ44OI44OK44OgIC8gMjAxNy80IC0gOTwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmlvX19saXN0SXRlbSBmbGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS10aXRsZVwiPjxhIGhyZWY9XCJcIj5GbGFtaW5nbzwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBvc2l0aW9uXCI+aU9TIEVuZ2lubmVyICYgSGFzdGxlcjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS0tcGxhY2VcIj7kuqzpg70gLyAyMDE2LzUgLSAxMTwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmlvX19saXN0SXRlbSBmbGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS10aXRsZVwiPjxhIGhyZWY9XCJcIj7lkIzlv5fnpL7lpKflraY8L2E+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS1wb3NpdGlvblwiPue1jOa4iOWtpumDqC/ntYzmuIjlrabnp5E8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBsYWNlXCI+5Lqs6YO9IC8gMjAxNCAtIDIwMjAgKOS6iOWumik8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIj5cbiAgICAgICAgICAgIDxoMj5CaW9ncmFwaHk8L2gyPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8Q29udGVudEZvb3Rlci8+XG4gICAgPHN0eWxlIGpzeD57c3R5bGVzfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/pages/index.js */");
styles.__hash = "982231908";

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "section__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-".concat(styles.__hash) + " " + "section__boxWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "section__box left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/heroImage.png",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "section__box right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Hello, I\u2019m Sugu Mizuno"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "UI/UX Designer")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-".concat(styles.__hash) + " " + "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "section__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-".concat(styles.__hash) + " " + "box__card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card__cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "\u5B66\u751F\u751F\u6D3B\u3067\u306F\u3001\u81EA\u5206\u304C\u60C5\u71B1\u3092\u6301\u3063\u3066\u53D6\u308A\u7D44\u3081\u308B\u3082\u306E\u3092\u898B\u3064\u3051\u308B\u305F\u3081\u69D8\u3005\u306A\u6D3B\u52D5\u306B\u53D6\u308A\u7D44\u3080\u4E2D\u3067\u3001\u30C7\u30B6\u30A4\u30F3\u3068\u51FA\u4F1A\u3044\u307E\u3057\u305F\u3002\u30C7\u30B6\u30A4\u30F3\u306E\u554F\u984C\u89E3\u6C7A\u306E\u8996\u70B9\u306B\u60F9\u304B\u308C\u30012017\u5E74\u306B\u5927\u5B66\u3092\u4F11\u5B66\u3057\u3001\u30D9\u30C8\u30CA\u30E0\u306E\u65E5\u7CFBIT\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u306B\u3066\u30C7\u30B6\u30A4\u30CA\u30FC\u306E\u30A4\u30F3\u30BF\u30FC\u30F3\u3068\u3057\u3066\u30E1\u30F3\u30BF\u30FC\u306E\u5143\u306B\u5F1F\u5B50\u5165\u308A\u306E\u5F8C\u3001\u73FE\u5728\u306F\u4EAC\u90FD\u306B\u62E0\u70B9\u3092\u7F6E\u304FBaseconnect\u682A\u5F0F\u4F1A\u793E\u306B\u3066UI/UX\u30C7\u30B6\u30A4\u30CA\u30FC\u3068\u3057\u3066\u6D3B\u52D5\u3057\u3066\u3044\u307E\u3059\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "\u307E\u305F\u3001\u65E5\u672C\u6700\u5927\u7D1A\u306EUX\u30AB\u30F3\u30D5\u30A1\u30EC\u30F3\u30B9\u3092\u6BCE\u5E74\u958B\u50AC\u3059\u308BUX DAYS TOKYO\u306B\u30B9\u30BF\u30C3\u30D5\u3068\u3057\u3066\u7D041\u5E74\u9593\u6240\u5C5E\u3057\u3066\u3044\u307E\u3057\u305F\u3002UX\u306B\u95A2\u3059\u308B\u30D6\u30ED\u30B0\u8A18\u4E8B\u306E\u57F7\u7B46\u3068\u3001\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u3001\u52C9\u5F37\u4F1A\u3092\u30B9\u30BF\u30C3\u30D5\u3067\u5B9A\u671F\u7684\u306B\u958B\u50AC\u3057\u3001\u30C7\u30B6\u30A4\u30F3\u3092\u884C\u3046\u4E0A\u3067\u306E\u8996\u70B9\u3092\u5B66\u3073\u307E\u3057\u305F\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "\u30E2\u30C3\u30C8\u30FC\u306F\u4E8B\u4E0A\u7DF4\u78E8\u3067\u3059\u3002\u611F\u899A\u3067\u306F\u306A\u304F\u7406\u8AD6\u3068\u672C\u8CEA\u3092\u898B\u6975\u3081\u3089\u308C\u308B\u30C7\u30B6\u30A4\u30F3\u304C\u3067\u304D\u308B\u3088\u3046\u65E5\u3005\u52C9\u5F37\u3057\u3066\u3044\u307E\u3059\u3002\u30C7\u30B6\u30A4\u30F3\u306E\u672C\u8CEA\u3067\u3042\u308B\u554F\u984C\u89E3\u6C7A\u306E\u8996\u70B9\u306B\u3053\u3060\u308F\u308A\u3001\u8EAB\u8FD1\u306A\u4EBA\u306E\u8AB2\u984C\u304B\u3089\u53D6\u308A\u7D44\u307F\u7D9A\u3051\u305F\u3044\u3067\u3059\u3002"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-".concat(styles.__hash) + " " + "box__card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card__cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__listItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Baseconnect")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "UI/UX Designer Intern"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "\u4EAC\u90FD / 2017 - 2019\uFF08\u73FE\u5728\uFF09")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__listItem flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "UX Days Tokyo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Stuff"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "\u5927\u962A&\u6771\u4EAC / 2017 - 2018")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__listItem flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Framgia")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Design & Marketing Intern"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "\u30D9\u30C8\u30CA\u30E0 / 2017/4 - 9")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__listItem flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Flamingo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "iOS Enginner & Hastler"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "\u4EAC\u90FD / 2016/5 - 11")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__listItem flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "\u540C\u5FD7\u793E\u5927\u5B66")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "\u7D4C\u6E08\u5B66\u90E8/\u7D4C\u6E08\u5B66\u79D1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "\u4EAC\u90FD / 2014 - 2020 (\u4E88\u5B9A)")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Biography"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ContentFooter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
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