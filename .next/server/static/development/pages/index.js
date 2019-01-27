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



var styles = new String("a.jsx-2289333677{font-color:black;padding:0 20px;}section.jsx-2289333677{background:#fff;padding:50px;}section.grey.jsx-2289333677{background:#F0F1F5;padding:50px;}.section__inner.jsx-2289333677{margin:0 auto;max-width:980px;}.card.jsx-2289333677{height:300px;-webkit-flex:1;-ms-flex:1;flex:1;background:#FFFFFF;border:1px solid #F0F1F5;border-radius:8px;box-shadow:0 10px 20px 0 rgba(0,0,0,0.08);-webkit-transition:all 250ms cubic-bezier(.02,.01,.47,1);transition:all 250ms cubic-bezier(.02,.01,.47,1);}.card.jsx-2289333677:hover{box-shadow:0 40px 40px rgba(0,0,0,.16);-webkit-transform:translate(0,-20px);-ms-transform:translate(0,-20px);transform:translate(0,-20px);-webkit-transition-delay:0s!important;transition-delay:0s!important;-webkit-transition:all 250ms cubic-bezier(.02,.01,.47,1);transition:all 250ms cubic-bezier(.02,.01,.47,1);}.card.jsx-2289333677:first-child{margin-right:20px;}.card.jsx-2289333677:last-child{margin-left:20px;}.card__inner.jsx-2289333677{width:100%;height:100%;display:block;padding:20px;color:#fff;}.card__cont.jsx-2289333677{position:relative;width:100%;height:100%;padding:30px 35px;}.card--history.jsx-2289333677 .card__cont.jsx-2289333677{background-image:url(\"/static/history.png\");background-size:auto 100%;background-position:center;}.card--work.jsx-2289333677 .card__cont.jsx-2289333677{background-image:url(\"/static/work.png\");background-size:auto 100%;background-position:center;}.card__inner.jsx-2289333677 span.jsx-2289333677{font-size:20px;font-weight:bold;}.card__inner.jsx-2289333677 p.jsx-2289333677{font-size:50px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0NvbnRlbnRGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWtCLEFBR3NCLEFBS0QsQUFLRyxBQUtMLEFBS0QsQUFXMEIsQUFPckIsQUFJRCxBQUlOLEFBUU8sQUFPMEIsQUFNSCxBQU0xQixBQUtBLFdBL0JILEVBMUJMLENBTFMsQ0EwREMsQUFLQSxDQXpFSixDQUxFLEFBMENqQixDQUpBLEFBZ0JhLENBNUNFLElBcUNDLE1BekNoQixBQWlEYyxDQXZDZCxFQWZBLEFBVUEsQUErREEsQUFLQSxLQS9CZSxFQWpCZ0IsRUF5QlgsQUFXUSxHQU5BLEVBeENQLElBNEJSLFNBUWIsRUFQQSxJQTNCMkIsRUE2Q0UsR0FOQSxvQkF0Q1QsSUE2Q3BCLEdBTkEsV0F0QzRDLDhCQU9aLFlBTm1CLHdEQU9BLGtEQU5uRCx3REFPQSIsImZpbGUiOiIvVXNlcnMvbWltaXp1bm9zdWd1cnUvcHJvamVjdHMvbWltaXp1bm9EZXNpZ24vY29tcG9uZW50cy9Db250ZW50Rm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBzdHlsZXMgPSBjc3NgXG4gIGEge1xuICAgIGZvbnQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgfVxuICBcbiAgIHNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogNTBweDtcbiAgfVxuICBcbiAgc2VjdGlvbi5ncmV5IHtcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMUY1O1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gIH1cblxuICAuc2VjdGlvbl9faW5uZXIge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogOTgwcHg7XG4gIH1cbiAgXG4gIC5jYXJkIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEYxRjU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjA4KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKC4wMiwuMDEsLjQ3LDEpO1xuICB9XG4gIFxuICAuY2FyZDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCA0MHB4IDQwcHggcmdiYSgwLDAsMCwuMTYpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTIwcHgpO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKC4wMiwuMDEsLjQ3LDEpO1xuICB9XG4gIFxuICAuY2FyZDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICAuY2FyZDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICBcbiAgLmNhcmRfX2lubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLmNhcmRfX2NvbnQgIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDMwcHggMzVweDtcbiAgfVxuICAgIFxuICAuY2FyZC0taGlzdG9yeSAuY2FyZF9fY29udCAge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaGlzdG9yeS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB9XG4gIFxuICAuY2FyZC0td29yayAuY2FyZF9fY29udCAge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvd29yay5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB9XG4gIFxuICAuY2FyZF9faW5uZXIgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuY2FyZF9faW5uZXIgcCB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gXG5cbmNvbnN0IENvbnRlbnRGb290ZXIgPSAoKSA9PiAoXG4gIDxzZWN0aW9uPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9faW5uZXJcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJkIGNhcmQtLWhpc3RvcnlcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkX19pbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19jb250XCI+XG4gICAgICAgICAgICAgIDxzcGFuPlJlYWQgbXk8L3NwYW4+XG4gICAgICAgICAgICAgIDxwPkhpc3Rvcnk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJkIGNhcmQtLXdvcmtcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkX19pbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19jb250XCI+XG4gICAgICAgICAgICAgIDxzcGFuPlJlYWQgbXk8L3NwYW4+XG4gICAgICAgICAgICAgIDxwPkhpc3Rvcnk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRGb290ZXJcbiJdfQ== */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/components/ContentFooter.js */");
styles.__hash = "2289333677";

var ContentFooter = function ContentFooter() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "section__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-".concat(styles.__hash) + " " + "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card card--history",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(styles.__hash) + " " + "card__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "card__cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Read my"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "History")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card card--work",
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
  }, "History")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: styles.__hash,
    css: styles,
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentFooter);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
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
var _jsxFileName = "/Users/mimizunosuguru/projects/mimizunoDesign/components/Footer.js";



var styles = new String("section.jsx-364860867{background:#fff;padding:50px;}footer.jsx-364860867{background:#F0F1F5;padding:40px;}p.jsx-364860867{color:#999999;font-family:Lato;font-size:18px;font-weight:700;margin-bottom:20px;text-align:center;}.footer__inner.jsx-364860867{text-align:center;}.copyRight.jsx-364860867{color:#999999;font-size:14px;font-weight:normal;}button.jsx-364860867{border:2px solid #999999;margin:0px 0px 20px 0px;padding:12px 20px 12px 20px;background:none;text-align:center;color:#999999;font-size:14px;font-weight:bold;line-height:1;}button.jsx-364860867:hover{cursor:pointer;background:#999999;color:#fff;}.icon__circle.jsx-364860867{display:inline-block;width:100px;height:100px;border-radius:60px;background-image:url(\"/static/iconImage.jpg\");background-size:cover;margin-bottom:20px;}.sns__box.jsx-364860867{margin:30px 0;}.sns__box.jsx-364860867 a.jsx-364860867{display:inline-block;height:30px;width:30px;opacity:0.5;margin:0 10px;background-repeat:no-repeat;background-position:center;}.sns__box.jsx-364860867 a.jsx-364860867:hover{opacity:1;cursor:pointer;}.sns__box.jsx-364860867 .github.jsx-364860867{background-image:url(\"/static/icon--github.png\");background-size:100% auto;}.sns__box.jsx-364860867 .twitter.jsx-364860867{background-image:url(\"/static/icon--twitter.png\");background-size:100% auto;}.sns__box.jsx-364860867 .facebook.jsx-364860867{background-image:url(\"/static/icon--facebook.png\");background-size:90% auto;}.sns__box.jsx-364860867 .note.jsx-364860867{background-image:url(\"/static/icon--note.png\");background-size:90% auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHa0IsQUFHcUIsQUFLRyxBQUtMLEFBU0ksQUFJSixBQU1XLEFBWVYsQUFNTSxBQVVQLEFBSU8sQUFVWCxBQUt1QyxBQUtDLEFBS0MsQUFLSixVQW5CaEMsSUE3REUsQUFhRixBQWtDakIsQ0FoQnFCLENBekNOLEVBbUJmLENBZGUsRUEwQ0QsQUFjQSxJQWhDWSxBQTJDMUIsSUF2RUEsQUF1QnFCLEVBYkosQ0FMakIsQ0EwQ2UsQUFjRixDQXBCQSxVQXFCQyxDQXBCZCxDQS9Ca0IsQUFxQ0csQ0EwQ00sQ0FsRTNCLENBSzhCLEFBOENELENBS0QsQ0FLRCxLQXRCWCxNQW5ESyxHQXFDMkIsS0FlbEIsRUEyQjlCLEdBZkEsQ0FLQSxBQUtBLENBeERrQixJQWpCRSxZQWtCQSxLQWtDUyxDQW5EN0IsWUFrQmdCLEFBa0JRLGNBakJQLEFBaUNqQixRQWZxQixPQWpCRixZQWtCbkIsS0FqQmdCLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5cbmNvbnN0IHN0eWxlcyA9IGNzc2BcbiAgc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICB9XG4gIFxuICBmb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICNGMEYxRjU7XG4gICAgcGFkZGluZzogNDBweDtcbiAgfVxuICBcbiAgcCB7XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZm9vdGVyX19pbm5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuY29weVJpZ2h0IHtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICBcbiAgYnV0dG9uIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTk5OTk5O1xuICAgIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHggMTJweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuICBcbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzk5OTk5OTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLmljb25fX2NpcmNsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pY29uSW1hZ2UuanBnXCIpOyBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIC5zbnNfX2JveCB7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gIH1cbiAgXG4gIC5zbnNfX2JveCBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgfVxuICBcbiAgLnNuc19fYm94IGE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuc25zX19ib3ggLmdpdGh1YiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pY29uLS1naXRodWIucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvIDtcbiAgfVxuICBcbiAgLnNuc19fYm94IC50d2l0dGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ljb24tLXR3aXR0ZXIucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xuICB9XG4gIFxuICAuc25zX19ib3ggLmZhY2Vib29rIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ljb24tLWZhY2Vib29rLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDkwJSBhdXRvO1xuICB9XG4gIFxuICAuc25zX19ib3ggLm5vdGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaWNvbi0tbm90ZS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiA5MCUgYXV0bztcbiAgfVxuYFxuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxmb290ZXI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2lubmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25fX2NpcmNsZVwiLz5cbiAgICAgIDxwPlRoYW5rIHlvdSBmb3IgcmVhZGluZyE8L3A+XG4gICAgICA8YnV0dG9uPuOBiuWVj+OBhOWQiOOCj+OBm+OBr+OBk+OBoeOCiTwvYnV0dG9uPlxuICAgICAgPHA+ZmVlbCBmcmVlIHRvIGNvbnRhY3QgbWUgb3IgZm9sbG93IG1lIG9uPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbnNfX2JveFwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJnaXRodWJcIi8+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInR3aXR0ZXJcIi8+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImZhY2Vib29rXCIvPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJub3RlXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb3B5UmlnaHRcIj7CqSAyMDE5IFN1Z3UgTWl6dW5vPC9wPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxuICA8L2Zvb3Rlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iXX0= */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/components/Footer.js */");
styles.__hash = "364860867";

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "footer__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "icon__circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Thank you for reading!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "\u304A\u554F\u3044\u5408\u308F\u305B\u306F\u3053\u3061\u3089"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "feel free to contact me or follow me on"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "sns__box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(styles.__hash) + " " + "github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(styles.__hash) + " " + "twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(styles.__hash) + " " + "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(styles.__hash) + " " + "note",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash) + " " + "copyRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "\xA9 2019 Sugu Mizuno")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: styles.__hash,
    css: styles,
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

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



var styles = new String("a.jsx-3961276450{font-color:black;padding:0 20px;}h1.jsx-3961276450{padding-top:10px;font-size:32px;font-family:'Avenir',serif;}header.jsx-3961276450{z-index:10;height:84px;width:100%;position:fixed;top:0;}.header__inner.jsx-3961276450{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:980px;margin:0 auto;height:84px;font-size:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}nav.jsx-3961276450{margin-left:auto;font-family:'Avenir',serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHa0IsQUFHc0IsQUFLQSxBQU1OLEFBUUUsQUFTSSxXQWhCTCxNQVhHLEFBS0EsQUF1QmEsTUFoQmpCLFNBWGIsQUFLNkIsRUFPWixVQWdCakIsS0FmUSxNQUNSLElBUkEsZUFZa0IsZ0JBQ0YsY0FDRixZQUNHLGVBQ0ksNkZBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5cbmNvbnN0IHN0eWxlcyA9IGNzc2BcbiAgYSB7XG4gICAgZm9udC1jb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG4gIFxuICBoMSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyJyxzZXJpZjtcbiAgfVxuICBcbiAgaGVhZGVyIHtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBoZWlnaHQ6IDg0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgfVxuICBcbiAgLmhlYWRlcl9faW5uZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiA5ODBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IDg0cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICB9XG4gIFxuICBuYXYge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyJywgc2VyaWY7XG4gIH1cbmBcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pbm5lclwiPlxuICAgICAgPG5hdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9pbmRleFwiPlxuICAgICAgICAgIDxhPlRvcDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7Lyo8TGluayBocmVmPVwiL3dvcmtcIj4qL31cbiAgICAgICAgICB7Lyo8YT5TdG9yeTwvYT4qL31cbiAgICAgICAgey8qPC9MaW5rPiovfVxuICAgICAgICA8TGluayBocmVmPVwiL3dvcmtcIj5cbiAgICAgICAgICA8YT5Xb3JrPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntzdHlsZXN9PC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl19 */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/components/Header.js */");
styles.__hash = "3961276450";

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "header__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Top")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
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
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/mimizunosuguru/projects/mimizunoDesign/components/Layout.js";





var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1593675788",
    css: "*{margin:0;padding:0;box-sizing:border-box;}body{background:#F0F1F5;font-family:'Avenir','YuGothic';}.Avenir{font-family:'avenir';}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.ml-auto{margin-left:auto;}p{font-size:16px;}a{-webkit-text-decoration:none;text-decoration:none;}a:hover{opacity:0.6;}a:visited{color:#000;-webkit-text-decoration:none;text-decoration:none;}ul li{display:block;text-align:-webkit-match-parent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjdUIsQUFHYyxBQU1VLEFBS0UsQUFJUixBQUlJLEFBSUYsQUFJTSxBQUlULEFBSUQsQUFLRyxTQXZDSixFQW1DVyxDQUp2QixFQVNrQyxDQWpCbEMsRUFKQSxFQWxCd0IsQUFLVyxFQUtuQyxvQkFUQSxLQXVDQSxJQWRBLENBcEJBLFVBNkJBLGFBckJBIiwiZmlsZSI6Ii9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcbmltcG9ydCAgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0ICBGb290ZXIgZnJvbSAnLi9Gb290ZXInXG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPEhlYWRlci8+XG5cbiAgICB7Lyog44Kz44Oz44OG44Oz44OEICovfVxuICAgIHtwcm9wcy5jaGlsZHJlbn1cblxuICAgIDxGb290ZXIvPlxuICAgIHsvKiDjgrDjg63jg7zjg5Djg6tDU1MgKi99XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6ICNGMEYxRjU7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXInLCAnWXVHb3RoaWMnO1xuICB9XG5cbiAgLkF2ZW5pciB7XG4gICAgZm9udC1mYW1pbHk6ICdhdmVuaXInO1xuICB9XG5cbiAgLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAubWwtYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cblxuICBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIHVsIGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcbiAgfVxuYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdfQ== */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/components/Layout.js */",
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




var styles = new String("section.jsx-1554140034{background:#fff;padding:50px 50px 50px;}section.grey.jsx-1554140034{background:#F0F1F5;padding:50px;}.section__inner.jsx-1554140034{margin:0 auto;max-width:980px;}.section__boxWrapper.jsx-1554140034{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.section__box.jsx-1554140034{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:50%;height:380px;}.page__header.jsx-1554140034{padding:0 50px;background:#fff;}h1.jsx-1554140034{height:84px;line-height:84px;margin:0 auto;max-width:980px;}h2.jsx-1554140034{font-family:'Avenir',serif;font-size:28px;}h3.jsx-1554140034{font-family:'Avenir',serif;color:#989696;font-size:24px;}img.jsx-1554140034{width:100%;height:auto;}.box__card.jsx-1554140034{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#fff;padding:30px;}.box__card.jsx-1554140034:first-child{margin-bottom:50px;}.card__title.jsx-1554140034{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:40%;}.card__cont.jsx-1554140034{width:550px;}.card__cont.jsx-1554140034 p.jsx-1554140034{font-size:15px;margin-bottom:20px;}.card__cont.jsx-1554140034 p.jsx-1554140034:last-child{margin:0;}.bio__listItem.jsx-1554140034{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px;border-bottom:1px solid #EEEEEE;font-size:15px;}.bio__listItem.jsx-1554140034 .item--title.jsx-1554140034{width:140px;font-family:'Avenir','YuGothic';}.bio__listItem.jsx-1554140034 .item--title.jsx-1554140034 a.jsx-1554140034{font-weight:bold;border-bottom:1px solid #000;}.bio__listItem.jsx-1554140034 .item--place.jsx-1554140034{margin-left:auto;text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHcUIsQUFLRyxBQUtMLEFBS0QsQUFJQSxBQVdFLEFBS0gsQUFPZ0IsQUFLRCxBQU1oQixBQUtFLEFBTU0sQUFJTixBQU9ELEFBSUcsQUFLTixBQUlJLEFBUUQsQUFLSyxBQVNBLFNBekJuQixFQS9CYyxDQWxCSyxBQXdDbkIsQUFxQm1DLEVBdEZqQixDQW9CQSxBQWlERyxDQS9FSSxDQXFHTSxBQVNaLEVBekdKLEFBMkRmLElBVkEsSUFaaUIsQUFLRixFQVhDLENBekJoQixDQW9CQSxDQXpCQSxFQTBFQSxBQStCQSxLQTlHQSxFQStDZ0IsQ0FMaEIsQ0FOa0IsQ0E0RGpCLEVBS0QsVUFyREEsR0FYQSxlQXZCQSxBQUlxQixBQXVDSCxBQVVHLEFBb0JBLGdCQTdCTixhQUNmLGdFQXhDeUIsQUFpREEsQUFvQlgsWUFDb0IsZ0NBQ2pCLGVBQ2pCLHdDQXZFWSxBQWlEQSxVQWhERyxBQWlEZixhQWhEQSIsImZpbGUiOiIvVXNlcnMvbWltaXp1bm9zdWd1cnUvcHJvamVjdHMvbWltaXp1bm9EZXNpZ24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IENvbnRlbnRGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZW50Rm9vdGVyJ1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcblxuY29uc3Qgc3R5bGVzID0gY3NzYFxuICBzZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDUwcHggNTBweCA1MHB4O1xuICB9XG4gIFxuICBzZWN0aW9uLmdyZXkge1xuICAgIGJhY2tncm91bmQ6ICNGMEYxRjU7XG4gICAgcGFkZGluZzogNTBweDtcbiAgfVxuXG4gIC5zZWN0aW9uX19pbm5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiA5ODBweDtcbiAgfVxuICBcbiAgLnNlY3Rpb25fX2JveFdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuc2VjdGlvbl9fYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDM4MHB4O1xuICB9XG4gIFxuICAuc2VjdGlvbl9fYm94LmxlZnQge1xuICB9XG4gIFxuICAucGFnZV9faGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuICBcbiAgaDEge1xuICAgIGhlaWdodDogODRweDtcbiAgICBsaW5lLWhlaWdodDogODRweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDk4MHB4O1xuICB9XG4gIFxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXInLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbiAgXG4gIGgzIHtcbiAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyJywgc2VyaWY7XG4gICBjb2xvcjogIzk4OTY5NjtcbiAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICBcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIC5ib3hfX2NhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICB9XG4gIFxuICAuYm94X19jYXJkOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG4gIFxuICAuY2FyZF9fdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIFxuICAuY2FyZF9fY29udCB7XG4gICAgd2lkdGg6IDU1MHB4O1xuICB9XG4gIFxuICAuY2FyZF9fY29udCBwIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLmNhcmRfX2NvbnQgcDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC5iaW9fX2xpc3RJdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFRUVFO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBcbiAgLmJpb19fbGlzdEl0ZW0gLml0ZW0tLXRpdGxlIHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXInLCAnWXVHb3RoaWMnOyAgIFxuICAgfSBcbiAgXG4gIC5iaW9fX2xpc3RJdGVtIC5pdGVtLS10aXRsZSBhIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgfVxuICBcbiAgLmJpb19fbGlzdEl0ZW0gLml0ZW0tLXBvc2l0aW9uIHtcbiAgICBcbiAgfVxuICBcbiAgLmJpb19fbGlzdEl0ZW0gLml0ZW0tLXBsYWNlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuYFxuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VfX2hlYWRlclwiPlxuICAgICAgPGgxPlxuICAgICAgICBtaW1penVub0Rlc2lnblxuICAgICAgPC9oMT5cbiAgICA8L2Rpdj5cbiAgICB7LypUb3AqL31cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9faW5uZXJcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNlY3Rpb25fX2JveFdyYXBwZXJcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2VjdGlvbl9fYm94IGxlZnRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9oZXJvSW1hZ2UucG5nXCIgLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzZWN0aW9uX19ib3ggcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMj5IZWxsbywgSeKAmW0gU3VndSBNaXp1bm88L2gyPlxuICAgICAgICAgICAgICA8aDM+VUkvVVggRGVzaWduZXI8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyZXlcIj5cbiAgICAgIHsvKiBBYm91dCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9faW5uZXJcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJveF9fY2FyZFwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJkX190aXRsZVwiPlxuICAgICAgICAgICAgPGgyPkFib3V0PC9oMj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJkX19jb250XCI+XG4gICAgICAgICAgICA8cD7lrabnlJ/nlJ/mtLvjgafjga/jgIHoh6rliIbjgYzmg4XnhrHjgpLmjIHjgaPjgablj5bjgorntYTjgoHjgovjgoLjga7jgpLopovjgaTjgZHjgovjgZ/jgoHmp5jjgIXjgarmtLvli5Xjgavlj5bjgorntYTjgoDkuK3jgafjgIHjg4fjgrbjgqTjg7Pjgajlh7rkvJrjgYTjgb7jgZfjgZ/jgILjg4fjgrbjgqTjg7Pjga7llY/poYzop6Pmsbrjga7oppbngrnjgavmg7njgYvjgozjgIEyMDE35bm044Gr5aSn5a2m44KS5LyR5a2m44GX44CB44OZ44OI44OK44Og44Gu5pel57O7SVTjgrnjgr/jg7zjg4jjgqLjg4Pjg5fjgavjgabjg4fjgrbjgqTjg4rjg7zjga7jgqTjg7Pjgr/jg7zjg7PjgajjgZfjgabjg6Hjg7Pjgr/jg7zjga7lhYPjgavlvJ/lrZDlhaXjgorjga7lvozjgIHnj77lnKjjga/kuqzpg73jgavmi6DngrnjgpLnva7jgY9CYXNlY29ubmVjdOagquW8j+S8muekvuOBq+OBplVJL1VY44OH44K244Kk44OK44O844Go44GX44Gm5rS75YuV44GX44Gm44GE44G+44GZ44CCPC9wPlxuICAgICAgICAgICAgPHA+44G+44Gf44CB5pel5pys5pyA5aSn57Sa44GuVVjjgqvjg7Pjg5XjgqHjg6zjg7PjgrnjgpLmr47lubTplovlgqzjgZnjgotVWCBEQVlTIFRPS1lP44Gr44K544K/44OD44OV44Go44GX44Gm57SEMeW5tOmWk+aJgOWxnuOBl+OBpuOBhOOBvuOBl+OBn+OAglVY44Gr6Zai44GZ44KL44OW44Ot44Kw6KiY5LqL44Gu5Z+3562G44Go44CB44Ov44O844Kv44K344On44OD44OX44CB5YuJ5by35Lya44KS44K544K/44OD44OV44Gn5a6a5pyf55qE44Gr6ZaL5YKs44GX44CB44OH44K244Kk44Oz44KS6KGM44GG5LiK44Gn44Gu6KaW54K544KS5a2m44Gz44G+44GX44Gf44CCPC9wPlxuICAgICAgICAgICAgPHA+44Oi44OD44OI44O844Gv5LqL5LiK57e056Oo44Gn44GZ44CC5oSf6Kaa44Gn44Gv44Gq44GP55CG6KuW44Go5pys6LOq44KS6KaL5qW144KB44KJ44KM44KL44OH44K244Kk44Oz44GM44Gn44GN44KL44KI44GG5pel44CF5YuJ5by344GX44Gm44GE44G+44GZ44CC44OH44K244Kk44Oz44Gu5pys6LOq44Gn44GC44KL5ZWP6aGM6Kej5rG644Gu6KaW54K544Gr44GT44Gg44KP44KK44CB6Lqr6L+R44Gq5Lq644Gu6Kqy6aGM44GL44KJ5Y+W44KK57WE44G/57aa44GR44Gf44GE44Gn44GZ44CCPC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIHsvKiBCaW9ncmFwaHkgKi99XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJib3hfX2NhcmRcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZF9fY29udFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJpb19fbGlzdFwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmlvX19saXN0SXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS0tdGl0bGVcIj48YSBocmVmPVwiXCI+QmFzZWNvbm5lY3Q8L2E+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS1wb3NpdGlvblwiPlVJL1VYIERlc2lnbmVyIEludGVybjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS0tcGxhY2VcIj7kuqzpg70gLyAyMDE3IC0gMjAxOe+8iOePvuWcqO+8iTwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmlvX19saXN0SXRlbSBmbGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS10aXRsZVwiPjxhIGhyZWY9XCJcIj5VWCBEYXlzIFRva3lvPC9hPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS0tcG9zaXRpb25cIj5TdHVmZjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS0tcGxhY2VcIj7lpKfpmKom5p2x5LqsIC8gMjAxNyAtIDIwMTg8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJpb19fbGlzdEl0ZW0gZmxleFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS0tdGl0bGVcIj48YSBocmVmPVwiXCI+RnJhbWdpYTwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBvc2l0aW9uXCI+RGVzaWduICYgTWFya2V0aW5nIEludGVybjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS0tcGxhY2VcIj7jg5njg4jjg4rjg6AgLyAyMDE3LzQgLSA5PC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiaW9fX2xpc3RJdGVtIGZsZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXRpdGxlXCI+PGEgaHJlZj1cIlwiPkZsYW1pbmdvPC9hPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS0tcG9zaXRpb25cIj5pT1MgRW5naW5uZXIgJiBIYXN0bGVyPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS1wbGFjZVwiPuS6rOmDvSAvIDIwMTYvNSAtIDExPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiaW9fX2xpc3RJdGVtIGZsZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXRpdGxlXCI+PGEgaHJlZj1cIlwiPuWQjOW/l+ekvuWkp+WtpjwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBvc2l0aW9uXCI+57WM5riI5a2m6YOoL+e1jOa4iOWtpuenkTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS0tcGxhY2VcIj7kuqzpg70gLyAyMDE0IC0gMjAyMCAo5LqI5a6aKTwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJkX190aXRsZVwiPlxuICAgICAgICAgICAgPGgyPkJpb2dyYXBoeTwvaDI+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxDb250ZW50Rm9vdGVyLz5cbiAgICA8c3R5bGUganN4PntzdHlsZXN9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/pages/index.js */");
styles.__hash = "1554140034";

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "page__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "mimizunoDesign")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
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
    className: "jsx-".concat(styles.__hash) + " " + "section__boxWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "section__box left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/heroImage.png",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "section__box right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Hello, I\u2019m Sugu Mizuno"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "UI/UX Designer")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-".concat(styles.__hash) + " " + "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "section__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-".concat(styles.__hash) + " " + "box__card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card__cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "\u5B66\u751F\u751F\u6D3B\u3067\u306F\u3001\u81EA\u5206\u304C\u60C5\u71B1\u3092\u6301\u3063\u3066\u53D6\u308A\u7D44\u3081\u308B\u3082\u306E\u3092\u898B\u3064\u3051\u308B\u305F\u3081\u69D8\u3005\u306A\u6D3B\u52D5\u306B\u53D6\u308A\u7D44\u3080\u4E2D\u3067\u3001\u30C7\u30B6\u30A4\u30F3\u3068\u51FA\u4F1A\u3044\u307E\u3057\u305F\u3002\u30C7\u30B6\u30A4\u30F3\u306E\u554F\u984C\u89E3\u6C7A\u306E\u8996\u70B9\u306B\u60F9\u304B\u308C\u30012017\u5E74\u306B\u5927\u5B66\u3092\u4F11\u5B66\u3057\u3001\u30D9\u30C8\u30CA\u30E0\u306E\u65E5\u7CFBIT\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u306B\u3066\u30C7\u30B6\u30A4\u30CA\u30FC\u306E\u30A4\u30F3\u30BF\u30FC\u30F3\u3068\u3057\u3066\u30E1\u30F3\u30BF\u30FC\u306E\u5143\u306B\u5F1F\u5B50\u5165\u308A\u306E\u5F8C\u3001\u73FE\u5728\u306F\u4EAC\u90FD\u306B\u62E0\u70B9\u3092\u7F6E\u304FBaseconnect\u682A\u5F0F\u4F1A\u793E\u306B\u3066UI/UX\u30C7\u30B6\u30A4\u30CA\u30FC\u3068\u3057\u3066\u6D3B\u52D5\u3057\u3066\u3044\u307E\u3059\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "\u307E\u305F\u3001\u65E5\u672C\u6700\u5927\u7D1A\u306EUX\u30AB\u30F3\u30D5\u30A1\u30EC\u30F3\u30B9\u3092\u6BCE\u5E74\u958B\u50AC\u3059\u308BUX DAYS TOKYO\u306B\u30B9\u30BF\u30C3\u30D5\u3068\u3057\u3066\u7D041\u5E74\u9593\u6240\u5C5E\u3057\u3066\u3044\u307E\u3057\u305F\u3002UX\u306B\u95A2\u3059\u308B\u30D6\u30ED\u30B0\u8A18\u4E8B\u306E\u57F7\u7B46\u3068\u3001\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u3001\u52C9\u5F37\u4F1A\u3092\u30B9\u30BF\u30C3\u30D5\u3067\u5B9A\u671F\u7684\u306B\u958B\u50AC\u3057\u3001\u30C7\u30B6\u30A4\u30F3\u3092\u884C\u3046\u4E0A\u3067\u306E\u8996\u70B9\u3092\u5B66\u3073\u307E\u3057\u305F\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "\u30E2\u30C3\u30C8\u30FC\u306F\u4E8B\u4E0A\u7DF4\u78E8\u3067\u3059\u3002\u611F\u899A\u3067\u306F\u306A\u304F\u7406\u8AD6\u3068\u672C\u8CEA\u3092\u898B\u6975\u3081\u3089\u308C\u308B\u30C7\u30B6\u30A4\u30F3\u304C\u3067\u304D\u308B\u3088\u3046\u65E5\u3005\u52C9\u5F37\u3057\u3066\u3044\u307E\u3059\u3002\u30C7\u30B6\u30A4\u30F3\u306E\u672C\u8CEA\u3067\u3042\u308B\u554F\u984C\u89E3\u6C7A\u306E\u8996\u70B9\u306B\u3053\u3060\u308F\u308A\u3001\u8EAB\u8FD1\u306A\u4EBA\u306E\u8AB2\u984C\u304B\u3089\u53D6\u308A\u7D44\u307F\u7D9A\u3051\u305F\u3044\u3067\u3059\u3002"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-".concat(styles.__hash) + " " + "box__card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card__cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__listItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Baseconnect")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "UI/UX Designer Intern"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "\u4EAC\u90FD / 2017 - 2019\uFF08\u73FE\u5728\uFF09")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__listItem flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "UX Days Tokyo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Stuff"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "\u5927\u962A&\u6771\u4EAC / 2017 - 2018")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__listItem flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Framgia")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Design & Marketing Intern"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "\u30D9\u30C8\u30CA\u30E0 / 2017/4 - 9")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__listItem flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Flamingo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "iOS Enginner & Hastler"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "\u4EAC\u90FD / 2016/5 - 11")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__listItem flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "\u540C\u5FD7\u793E\u5927\u5B66")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "\u7D4C\u6E08\u5B66\u90E8/\u7D4C\u6E08\u5B66\u79D1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "\u4EAC\u90FD / 2014 - 2020 (\u4E88\u5B9A)")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Biography"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ContentFooter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
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