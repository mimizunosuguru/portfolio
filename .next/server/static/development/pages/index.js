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



var styles = new String("a.jsx-2131241606{font-color:black;padding:0 20px;}.card__wrapper.jsx-2131241606{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.card.jsx-2131241606{height:300px;-webkit-flex:1;-ms-flex:1;flex:1;background:#FFFFFF;border:1px solid #F0F1F5;border-radius:8px;box-shadow:0 10px 20px 0 rgba(0,0,0,0.08);-webkit-transition:all 250ms cubic-bezier(.02,.01,.47,1);transition:all 250ms cubic-bezier(.02,.01,.47,1);}.card.jsx-2131241606:hover{box-shadow:0 40px 40px rgba(0,0,0,.16);-webkit-transform:translate(0,-20px);-ms-transform:translate(0,-20px);transform:translate(0,-20px);-webkit-transition-delay:0s!important;transition-delay:0s!important;-webkit-transition:all 250ms cubic-bezier(.02,.01,.47,1);transition:all 250ms cubic-bezier(.02,.01,.47,1);}.card.jsx-2131241606:first-child{margin-right:20px;}.card.jsx-2131241606:last-child{margin-left:20px;}.card__inner.jsx-2131241606{width:100%;height:100%;display:block;padding:20px;color:#fff;}.card__cont.jsx-2131241606{position:relative;width:100%;height:100%;padding:30px 35px;background-size:auto 100%;background-position:center;background-repeat:no-repeat;}.card--history.jsx-2131241606 .card__cont.jsx-2131241606{background-image:url(\"/static/history.png\");}.card--work.jsx-2131241606 .card__cont.jsx-2131241606{background-image:url(\"/static/work.png\");}.card__inner.jsx-2131241606 span.jsx-2131241606{font-size:20px;font-weight:bold;}.card__inner.jsx-2131241606 p.jsx-2131241606{font-size:50px;font-weight:bold;}@media (max-width:767px){.card__wrapper.jsx-2131241606{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.card.jsx-2131241606{height:200px;}.card.jsx-2131241606:hover{box-shadow:0 20px 20px rgba(0,0,0,.08);-webkit-transform:none;-ms-transform:none;transform:none;}.card.jsx-2131241606:first-child{margin:0 0 20px;}.card.jsx-2131241606:last-child{margin:0;}.card__inner.jsx-2131241606{padding:15px;}.card__cont.jsx-2131241606{background-size:100% auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0NvbnRlbnRGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWtCLEFBR3NCLEFBS0osQUFJQSxBQVUwQixBQU9yQixBQUlELEFBSU4sQUFRTyxBQVUwQixBQUtILEFBSzFCLEFBS0EsQUFNUyxBQUlULEFBSTBCLEFBS3ZCLEFBSVAsQUFJSSxBQUlhLFNBUDVCLEVBeERZLEVBekJMLEFBb0VQLEFBaUJBLEVBaENpQixBQUtBLENBbUJqQixDQXRGZSxBQThCakIsQ0FKQSxBQWdCYSxLQVBHLEdBK0RkLEdBdkRZLEdBMUNkLEFBOERBLEFBS0EsS0FoQ2UsRUFqQmdCLEFBOERaLEVBckNDLEFBY3BCLEdBTEEsRUEzQ3FCLElBMkJSLFNBUWUsRUFQNUIsSUEzQjJCLFNBTjNCLElBb0VFLE9BM0IyQixLQWxDVCxNQXNFbEIsWUFyRTBDLElBa0NkLDBCQTNCRSxFQTRCaEMsVUFsQ21ELHdEQU9BLGtEQU5uRCx3REFPQSIsImZpbGUiOiIvVXNlcnMvbWltaXp1bm9zdWd1cnUvcHJvamVjdHMvbWltaXp1bm9EZXNpZ24vY29tcG9uZW50cy9Db250ZW50Rm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBzdHlsZXMgPSBjc3NgXG4gIGEge1xuICAgIGZvbnQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgfVxuICBcbiAgLmNhcmRfX3dyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7ICBcbiAgfVxuICBcbiAgLmNhcmQge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEYxRjU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjA4KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKC4wMiwuMDEsLjQ3LDEpO1xuICB9XG4gIFxuICAuY2FyZDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCA0MHB4IDQwcHggcmdiYSgwLDAsMCwuMTYpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTIwcHgpO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKC4wMiwuMDEsLjQ3LDEpO1xuICB9XG4gIFxuICAuY2FyZDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICAuY2FyZDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICBcbiAgLmNhcmRfX2lubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLmNhcmRfX2NvbnQgIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDMwcHggMzVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxuICAgIFxuICAuY2FyZC0taGlzdG9yeSAuY2FyZF9fY29udCAge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaGlzdG9yeS5wbmdcIik7XG4gICBcbiAgfVxuICBcbiAgLmNhcmQtLXdvcmsgLmNhcmRfX2NvbnQgIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL3dvcmsucG5nXCIpO1xuICAgIFxuICB9XG4gIFxuICAuY2FyZF9faW5uZXIgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuY2FyZF9faW5uZXIgcCB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxuICAgIC5jYXJkX193cmFwcGVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIFxuICAgIC5jYXJkIHtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMjBweCAyMHB4IHJnYmEoMCwwLDAsLjA4KTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmNhcmQ6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luOiAwIDAgMjBweDtcbiAgICB9XG4gICAgXG4gICAgLmNhcmQ6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkX19pbm5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbiAgICBcbiAgICAuY2FyZF9fY29udCB7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgICB9XG4gIH1cbmBcblxuY29uc3QgQ29udGVudEZvb3RlciA9ICgpID0+IChcbiAgPHNlY3Rpb24+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX19pbm5lclwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImNhcmRfX3dyYXBwZXJcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcmQgY2FyZC0taGlzdG9yeVwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmRfX2lubmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2NvbnRcIj5cbiAgICAgICAgICAgICAgPHNwYW4+UmVhZCBteTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHA+SGlzdG9yeTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcmQgY2FyZC0td29ya1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmRfX2lubmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2NvbnRcIj5cbiAgICAgICAgICAgICAgPHNwYW4+U2hvdyBteTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHA+V29yazwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57c3R5bGVzfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudEZvb3RlclxuIl19 */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/components/ContentFooter.js */");
styles.__hash = "2131241606";

var ContentFooter = function ContentFooter() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "section__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-".concat(styles.__hash) + " " + "card__wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card card--history",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(styles.__hash) + " " + "card__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "card__cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Read my"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "History")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card card--work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(styles.__hash) + " " + "card__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "card__cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Show my"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Work")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
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



var styles = new String("section.jsx-2507161166{background:#fff;padding:50px;}footer.jsx-2507161166{background:#F0F1F5;padding:40px;}p.jsx-2507161166{color:#999999;font-size:18px;font-weight:700;margin-bottom:20px;text-align:center;}.footer__inner.jsx-2507161166{text-align:center;}.copyRight.jsx-2507161166{color:#999999;font-size:14px;font-weight:normal;margin:0;}button.jsx-2507161166{border:2px solid #999999;margin:0px 0px 20px 0px;padding:12px 20px 12px 20px;background:none;text-align:center;color:#999999;font-size:14px;font-weight:bold;line-height:1;}button.jsx-2507161166:hover{cursor:pointer;background:#999999;color:#fff;}.icon__circle.jsx-2507161166{display:inline-block;width:100px;height:100px;border-radius:60px;background-image:url(\"/static/iconImage.jpg\");background-size:cover;margin-bottom:20px;}.sns__box.jsx-2507161166{margin:30px 0;}.sns__box.jsx-2507161166 a.jsx-2507161166{display:inline-block;height:30px;width:30px;opacity:0.5;margin:0 10px;background-repeat:no-repeat;background-position:center;}.sns__box.jsx-2507161166 a.jsx-2507161166:hover{opacity:1;cursor:pointer;}.sns__box.jsx-2507161166 .github.jsx-2507161166{background-image:url(\"/static/icon--github.png\");background-size:100% auto;}.sns__box.jsx-2507161166 .twitter.jsx-2507161166{background-image:url(\"/static/icon--twitter.png\");background-size:100% auto;}.sns__box.jsx-2507161166 .facebook.jsx-2507161166{background-image:url(\"/static/icon--facebook.png\");background-size:90% auto;}.sns__box.jsx-2507161166 .note.jsx-2507161166{background-image:url(\"/static/icon--note.png\");background-size:90% auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHa0IsQUFHcUIsQUFLRyxBQUtMLEFBUUksQUFJSixBQU9XLEFBWVYsQUFNTSxBQVVQLEFBSU8sQUFVWCxBQUt1QyxBQUtDLEFBS0MsQUFLSixVQW5CaEMsSUE3REEsQUFZQSxBQW1DakIsQ0FoQnFCLENBekNOLEVBa0JmLENBYmUsRUEwQ0QsQUFjQSxJQWhDWSxBQTJDMUIsSUF2RUEsQUFVa0IsQUFZRyxHQWpCckIsQ0EwQ2UsQUFjRixDQXBCQSxVQXFCQyxDQW5ETyxBQStCckIsQ0FNcUIsQ0EwQ00sQ0FuRWhCLENBTW1CLEFBOENELENBS0QsQ0FLRCxLQXRCWCxDQXZDaEIsT0Fab0IsQ0FxQzRCLEtBZWxCLEVBMkI5QixHQWZBLENBS0EsQUFLQSxDQXhEa0IsS0FqQmxCLFdBa0JvQixLQWtDUyxhQWpDYixBQWtCUSxjQWpCUCxBQWlDakIsUUFmcUIsT0FqQkYsWUFrQm5CLEtBakJnQixjQUNoQiIsImZpbGUiOiIvVXNlcnMvbWltaXp1bm9zdWd1cnUvcHJvamVjdHMvbWltaXp1bm9EZXNpZ24vY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuXG5jb25zdCBzdHlsZXMgPSBjc3NgXG4gIHNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogNTBweDtcbiAgfVxuICBcbiAgZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMUY1O1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gIH1cbiAgXG4gIHAge1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmZvb3Rlcl9faW5uZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmNvcHlSaWdodCB7XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICBidXR0b24ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5OTk5OTk7XG4gICAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xuICAgIHBhZGRpbmc6IDEycHggMjBweCAxMnB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG4gIFxuICBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjOTk5OTk5O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAuaWNvbl9fY2lyY2xlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ljb25JbWFnZS5qcGdcIik7IFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLnNuc19fYm94IHtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgfVxuICBcbiAgLnNuc19fYm94IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB9XG4gIFxuICAuc25zX19ib3ggYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5zbnNfX2JveCAuZ2l0aHViIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ljb24tLWdpdGh1Yi5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG8gO1xuICB9XG4gIFxuICAuc25zX19ib3ggLnR3aXR0ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaWNvbi0tdHdpdHRlci5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XG4gIH1cbiAgXG4gIC5zbnNfX2JveCAuZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaWNvbi0tZmFjZWJvb2sucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogOTAlIGF1dG87XG4gIH1cbiAgXG4gIC5zbnNfX2JveCAubm90ZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pY29uLS1ub3RlLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDkwJSBhdXRvO1xuICB9XG5gXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGZvb3Rlcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9faW5uZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbl9fY2lyY2xlXCIvPlxuICAgICAgPHA+VGhhbmsgeW91IGZvciByZWFkaW5nITwvcD5cbiAgICAgIDxidXR0b24+44GK5ZWP44GE5ZCI44KP44Gb44Gv44GT44Gh44KJPC9idXR0b24+XG4gICAgICA8cD5mZWVsIGZyZWUgdG8gY29udGFjdCBtZSBvciBmb2xsb3cgbWUgb248L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNuc19fYm94XCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImdpdGh1YlwiLz5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidHdpdHRlclwiLz5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmFjZWJvb2tcIi8+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5vdGVcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvcHlSaWdodFwiPsKpIDIwMTkgU3VndSBNaXp1bm88L3A+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57c3R5bGVzfTwvc3R5bGU+XG4gIDwvZm9vdGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcbiJdfQ== */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/components/Footer.js */");
styles.__hash = "2507161166";

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



var styles = new String("a.jsx-4257467879{font-color:black;padding:0 20px;}h1.jsx-4257467879{padding-top:10px;font-size:32px;font-family:'Avenir',serif;}header.jsx-4257467879{z-index:10;height:84px;width:100%;position:fixed;top:0;}.header__inner.jsx-4257467879{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:980px;margin:0 auto;height:100%;font-size:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}nav.jsx-4257467879{margin-left:auto;font-family:'Avenir',serif;}@media (max-width:767px){h1.jsx-4257467879{display:none;}header.jsx-4257467879{height:70px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHa0IsQUFHc0IsQUFLQSxBQU1OLEFBUUUsQUFTSSxBQU1GLEFBSUQsV0ExQkYsQ0EyQlosQ0FKQSxJQWxDZSxBQUtBLEFBdUJhLE1BaEJqQixTQVhiLEFBSzZCLEVBT1osVUFnQmpCLEtBZlEsTUFDUixJQVJBLGVBWWtCLGdCQUNGLGNBQ0YsWUFDRyxlQUNJLDZGQUNwQiIsImZpbGUiOiIvVXNlcnMvbWltaXp1bm9zdWd1cnUvcHJvamVjdHMvbWltaXp1bm9EZXNpZ24vY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuXG5jb25zdCBzdHlsZXMgPSBjc3NgXG4gIGEge1xuICAgIGZvbnQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgfVxuICBcbiAgaDEge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pcicsc2VyaWY7XG4gIH1cbiAgXG4gIGhlYWRlciB7XG4gICAgei1pbmRleDogMTA7XG4gICAgaGVpZ2h0OiA4NHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gIH1cbiAgXG4gIC5oZWFkZXJfX2lubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogOTgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgfVxuICBcbiAgbmF2IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pcicsIHNlcmlmO1xuICB9XG4gIFxuICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxuICAgIGgxIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIGhlYWRlciB7XG4gICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGhlYWRlcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9faW5uZXJcIj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvaW5kZXhcIj5cbiAgICAgICAgICA8YT5Ub3A8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgey8qPExpbmsgaHJlZj1cIi93b3JrXCI+Ki99XG4gICAgICAgICAgey8qPGE+U3Rvcnk8L2E+Ki99XG4gICAgICAgIHsvKjwvTGluaz4qL31cbiAgICAgICAgPExpbmsgaHJlZj1cIi93b3JrXCI+XG4gICAgICAgICAgPGE+V29yazwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57c3R5bGVzfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdfQ== */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/components/Header.js */");
styles.__hash = "4257467879";

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "header__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Top")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
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
    styleId: "1370217530",
    css: "*{margin:0;padding:0;box-sizing:border-box;}.Avenir{font-family:'avenir';}body{background:#F0F1F5;font-family:'Avenir','YuGothic';}section{background:#fff;padding:50px;}section.grey{background:#F0F1F5;}.section__inner{margin:0 auto;max-width:980px;}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.ml-auto{margin-left:auto;}p{font-size:16px;}a{-webkit-text-decoration:none;text-decoration:none;}a:hover{opacity:0.6;}a:visited{color:#000;-webkit-text-decoration:none;text-decoration:none;}ul li{display:block;text-align:-webkit-match-parent;}@media (max-width:767px){section{padding:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjdUIsQUFHYyxBQU1ZLEFBSUYsQUFLSCxBQUtHLEFBSUwsQUFLRCxBQUlJLEFBSUYsQUFJTSxBQUlULEFBSUQsQUFLRyxBQU1DLFNBM0RMLEVBaURXLENBSnZCLENBZUUsQ0FwQ2dCLEFBOEJnQixDQWpCbEMsQ0F0QmUsQ0FrQmYsRUFoQ3dCLEFBU1csQUFVbkMsRUFkQSxRQVVBLENBU0EsV0F2QkEsS0FxREEsSUFkQSxDQTlCQSxVQXVDQSxhQXJCQSIsImZpbGUiOiIvVXNlcnMvbWltaXp1bm9zdWd1cnUvcHJvamVjdHMvbWltaXp1bm9EZXNpZ24vY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5pbXBvcnQgIEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCAgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxIZWFkZXIvPlxuXG4gICAgey8qIOOCs+ODs+ODhuODs+ODhCAqL31cbiAgICB7cHJvcHMuY2hpbGRyZW59XG5cbiAgICA8Rm9vdGVyLz5cbiAgICB7Lyog44Kw44Ot44O844OQ44OrQ1NTICovfVxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAuQXZlbmlyIHtcbiAgICBmb250LWZhbWlseTogJ2F2ZW5pcic7XG4gIH1cblxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMUY1O1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyJywgJ1l1R290aGljJztcbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogNTBweDtcbiAgfVxuXG4gIHNlY3Rpb24uZ3JleSB7XG4gICAgYmFja2dyb3VuZDogI0YwRjFGNTtcbiAgfVxuXG4gIC5zZWN0aW9uX19pbm5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiA5ODBweDtcbiAgfVxuXG4gIC5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLm1sLWF1dG8ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5cbiAgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICB1bCBsaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1tYXRjaC1wYXJlbnQ7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBzZWN0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICB9XG5gfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl19 */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/components/Layout.js */",
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




var styles = new String(".section__boxWrapper.jsx-443162919{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.section__box.jsx-443162919{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:50%;height:380px;overflow:hidden;}.page__header.jsx-443162919{padding:0 50px;background:#fff;}h1.jsx-443162919{height:84px;line-height:84px;margin:0 auto;max-width:980px;}h2.jsx-443162919{font-family:'Avenir',serif;font-size:28px;}h3.jsx-443162919{font-family:'Avenir',serif;color:#989696;font-size:24px;}img.jsx-443162919{width:auto;height:100%;}.box__card.jsx-443162919{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#fff;padding:30px;}.box__card.jsx-443162919:first-child{margin-bottom:50px;}.card__title.jsx-443162919{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:40%;}.card__cont.jsx-443162919{width:550px;}.card__cont.jsx-443162919 p.jsx-443162919{font-size:15px;margin-bottom:20px;}.card__cont.jsx-443162919 p.jsx-443162919:last-child{margin:0;}.bio__listItem.jsx-443162919{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px;border-bottom:1px solid #EEEEEE;font-size:15px;}.bio__listItem.jsx-443162919 .item--title.jsx-443162919{width:140px;font-family:'Avenir','YuGothic';}.bio__listItem.jsx-443162919 .item--title.jsx-443162919 a.jsx-443162919{font-weight:bold;border-bottom:1px solid #000;}.bio__listItem.jsx-443162919 .item--place.jsx-443162919{margin-left:auto;text-align:right;}@media (max-width:767px){h1.jsx-443162919{display:none;}.section__box.jsx-443162919{margin-top:50px;}.section__box.right.jsx-443162919{padding-left:20px;}h2.jsx-443162919{font-size:24px;margin-bottom:10px;}.card__title.jsx-443162919 h2.jsx-443162919{font-size:28px;margin-bottom:20px;}h3.jsx-443162919{font-size:20px;}.box__card.jsx-443162919{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.box__card.jsx-443162919:first-child{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:20px;}.card__cont.jsx-443162919{width:100%;}.bio__listItem.jsx-443162919{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;height:auto;padding:10px 0;}.bio__listItem.jsx-443162919 div.jsx-443162919{margin-bottom:10px;}.bio__listItem.jsx-443162919 .item--place.jsx-443162919{margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHa0IsQUFJQSxBQVlFLEFBS0gsQUFPZ0IsQUFLRCxBQU1oQixBQUtFLEFBTU0sQUFJTixBQU9ELEFBSUcsQUFLTixBQUlJLEFBUUQsQUFLSyxBQVFBLEFBTUYsQUFJRyxBQUlFLEFBSUgsQUFLQSxBQUtBLEFBSWUsQUFLUixBQUtYLEFBSVcsQUFPSCxBQUlWLFNBakZiLEFBa0ZFLEVBakhZLEFBa0daLENBcEhpQixBQXdDbkIsQUFxQm1DLENBbUJqQyxFQXJGZ0IsQUFpREcsQUFnREUsQUFLQSxBQUtyQixDQWxCQSxDQWxCNkIsQUFRWixDQWNqQixDQTNERixBQWtHRSxJQTVHRixJQVppQixBQUtGLEVBWEMsRUFMaEIsR0FpREEsQUE4QkEsQUFrQkUsQUFLQSxPQXJGYyxDQUxoQixDQU5rQixDQTREakIsRUFLRCxVQXJEQSxHQVhBLGVBeEJBLEFBSXFCLEFBd0NILEFBVUcsQUFvQkEsSUEwREUsQUFTSSxZQWhHWixPQXdGYixLQU5xQixDQWpGdkIsZ0VBekN5QixBQWtEQSxBQW9CWCxZQUNvQixRQWtFbEIsUUFkZCxJQWVpQixZQWxFRixHQW1FZixZQWxFRix3Q0F4RVksQUFrREEsVUFqREcsQUFrRGYsYUFqRGtCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvbWltaXp1bm9zdWd1cnUvcHJvamVjdHMvbWltaXp1bm9EZXNpZ24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IENvbnRlbnRGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZW50Rm9vdGVyJ1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcblxuY29uc3Qgc3R5bGVzID0gY3NzYCAgXG4gIC5zZWN0aW9uX19ib3hXcmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLnNlY3Rpb25fX2JveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAzODBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuc2VjdGlvbl9fYm94LmxlZnQge1xuICB9XG4gIFxuICAucGFnZV9faGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuICBcbiAgaDEge1xuICAgIGhlaWdodDogODRweDtcbiAgICBsaW5lLWhlaWdodDogODRweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDk4MHB4O1xuICB9XG4gIFxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXInLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbiAgXG4gIGgzIHtcbiAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyJywgc2VyaWY7XG4gICBjb2xvcjogIzk4OTY5NjtcbiAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICBcbiAgaW1nIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5ib3hfX2NhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICB9XG4gIFxuICAuYm94X19jYXJkOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG4gIFxuICAuY2FyZF9fdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIFxuICAuY2FyZF9fY29udCB7XG4gICAgd2lkdGg6IDU1MHB4O1xuICB9XG4gIFxuICAuY2FyZF9fY29udCBwIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLmNhcmRfX2NvbnQgcDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC5iaW9fX2xpc3RJdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFRUVFO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBcbiAgLmJpb19fbGlzdEl0ZW0gLml0ZW0tLXRpdGxlIHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXInLCAnWXVHb3RoaWMnOyAgIFxuICAgfSBcbiAgXG4gIC5iaW9fX2xpc3RJdGVtIC5pdGVtLS10aXRsZSBhIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgfVxuICBcbiAgLmJpb19fbGlzdEl0ZW0gLml0ZW0tLXBvc2l0aW9uIHsgXG4gIH1cbiAgXG4gIC5iaW9fX2xpc3RJdGVtIC5pdGVtLS1wbGFjZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgXG4gICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXG4gICAgaDEge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLnNlY3Rpb25fX2JveCB7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbiAgICBcbiAgICAuc2VjdGlvbl9fYm94LnJpZ2h0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB9XG4gICAgXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLmNhcmRfX3RpdGxlIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgXG4gICAgLmJveF9fY2FyZCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7ICAgICAgXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAuYm94X19jYXJkOmZpcnN0LWNoaWxkIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuY2FyZF9fY29udCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLmJpb19fbGlzdEl0ZW0ge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgIH1cbiAgICBcbiAgICAuYmlvX19saXN0SXRlbSBkaXYge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLmJpb19fbGlzdEl0ZW0gLml0ZW0tLXBsYWNlIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbmBcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlX19oZWFkZXJcIj5cbiAgICAgIDxoMT5cbiAgICAgICAgbWltaXp1bm9EZXNpZ25cbiAgICAgIDwvaDE+XG4gICAgPC9kaXY+XG4gICAgey8qVG9wKi99XG4gICAgPHNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2lubmVyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzZWN0aW9uX19ib3hXcmFwcGVyXCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNlY3Rpb25fX2JveCBsZWZ0XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaGVyb0ltYWdlLnBuZ1wiIC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2VjdGlvbl9fYm94IHJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDI+SGVsbG8sIEnigJltIFN1Z3UgTWl6dW5vPC9oMj5cbiAgICAgICAgICAgICAgPGgzPlVJL1VYIERlc2lnbmVyPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmV5XCI+XG4gICAgICB7LyogQWJvdXQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2lubmVyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJib3hfX2NhcmRcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIj5cbiAgICAgICAgICAgIDxoMj5BYm91dDwvaDI+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZF9fY29udFwiPlxuICAgICAgICAgICAgPHA+5a2m55Sf55Sf5rS744Gn44Gv44CB6Ieq5YiG44GM5oOF54ax44KS5oyB44Gj44Gm5Y+W44KK57WE44KB44KL44KC44Gu44KS6KaL44Gk44GR44KL44Gf44KB5qeY44CF44Gq5rS75YuV44Gr5Y+W44KK57WE44KA5Lit44Gn44CB44OH44K244Kk44Oz44Go5Ye65Lya44GE44G+44GX44Gf44CC44OH44K244Kk44Oz44Gu5ZWP6aGM6Kej5rG644Gu6KaW54K544Gr5oO544GL44KM44CBMjAxN+W5tOOBq+Wkp+WtpuOCkuS8keWtpuOBl+OAgeODmeODiOODiuODoOOBruaXpeezu0lU44K544K/44O844OI44Ki44OD44OX44Gr44Gm44OH44K244Kk44OK44O844Gu44Kk44Oz44K/44O844Oz44Go44GX44Gm44Oh44Oz44K/44O844Gu5YWD44Gr5byf5a2Q5YWl44KK44Gu5b6M44CB54++5Zyo44Gv5Lqs6YO944Gr5oug54K544KS572u44GPQmFzZWNvbm5lY3TmoKrlvI/kvJrnpL7jgavjgaZVSS9VWOODh+OCtuOCpOODiuODvOOBqOOBl+OBpua0u+WLleOBl+OBpuOBhOOBvuOBmeOAgjwvcD5cbiAgICAgICAgICAgIDxwPuOBvuOBn+OAgeaXpeacrOacgOWkp+e0muOBrlVY44Kr44Oz44OV44Kh44Os44Oz44K544KS5q+O5bm06ZaL5YKs44GZ44KLVVggREFZUyBUT0tZT+OBq+OCueOCv+ODg+ODleOBqOOBl+OBpue0hDHlubTplpPmiYDlsZ7jgZfjgabjgYTjgb7jgZfjgZ/jgIJVWOOBq+mWouOBmeOCi+ODluODreOCsOiomOS6i+OBruWft+ethuOBqOOAgeODr+ODvOOCr+OCt+ODp+ODg+ODl+OAgeWLieW8t+S8muOCkuOCueOCv+ODg+ODleOBp+Wumuacn+eahOOBq+mWi+WCrOOBl+OAgeODh+OCtuOCpOODs+OCkuihjOOBhuS4iuOBp+OBruimlueCueOCkuWtpuOBs+OBvuOBl+OBn+OAgjwvcD5cbiAgICAgICAgICAgIDxwPuODouODg+ODiOODvOOBr+S6i+S4iue3tOejqOOBp+OBmeOAguaEn+immuOBp+OBr+OBquOBj+eQhuirluOBqOacrOizquOCkuimi+alteOCgeOCieOCjOOCi+ODh+OCtuOCpOODs+OBjOOBp+OBjeOCi+OCiOOBhuaXpeOAheWLieW8t+OBl+OBpuOBhOOBvuOBmeOAguODh+OCtuOCpOODs+OBruacrOizquOBp+OBguOCi+WVj+mhjOino+axuuOBruimlueCueOBq+OBk+OBoOOCj+OCiuOAgei6q+i/keOBquS6uuOBruiqsumhjOOBi+OCieWPluOCiue1hOOBv+e2muOBkeOBn+OBhOOBp+OBmeOAgjwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICB7LyogQmlvZ3JhcGh5ICovfVxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYm94X19jYXJkXCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcmRfX2NvbnRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJiaW9fX2xpc3RcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJpb19fbGlzdEl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXRpdGxlXCI+PGEgaHJlZj1cIlwiPkJhc2Vjb25uZWN0PC9hPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS0tcG9zaXRpb25cIj5VSS9VWCBEZXNpZ25lciBJbnRlcm48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBsYWNlXCI+5Lqs6YO9IC8gMjAxNyAtIDIwMTnvvIjnj77lnKjvvIk8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJpb19fbGlzdEl0ZW0gZmxleFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS0tdGl0bGVcIj48YSBocmVmPVwiXCI+VVggRGF5cyBUb2t5bzwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBvc2l0aW9uXCI+U3R1ZmY8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBsYWNlXCI+5aSn6ZiqJuadseS6rCAvIDIwMTcgLSAyMDE4PC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiaW9fX2xpc3RJdGVtIGZsZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXRpdGxlXCI+PGEgaHJlZj1cIlwiPkZyYW1naWE8L2E+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS1wb3NpdGlvblwiPkRlc2lnbiAmIE1hcmtldGluZyBJbnRlcm48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBsYWNlXCI+44OZ44OI44OK44OgIC8gMjAxNy80IC0gOTwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmlvX19saXN0SXRlbSBmbGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS10aXRsZVwiPjxhIGhyZWY9XCJcIj5GbGFtaW5nbzwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBvc2l0aW9uXCI+aU9TIEVuZ2lubmVyICYgSGFzdGxlcjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS0tcGxhY2VcIj7kuqzpg70gLyAyMDE2LzUgLSAxMTwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmlvX19saXN0SXRlbSBmbGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS10aXRsZVwiPjxhIGhyZWY9XCJcIj7lkIzlv5fnpL7lpKflraY8L2E+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS1wb3NpdGlvblwiPue1jOa4iOWtpumDqC/ntYzmuIjlrabnp5E8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBsYWNlXCI+5Lqs6YO9IC8gMjAxNCAtIDIwMjAgKOS6iOWumik8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIj5cbiAgICAgICAgICAgIDxoMj5CaW9ncmFwaHk8L2gyPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8Q29udGVudEZvb3Rlci8+XG4gICAgPHN0eWxlIGpzeD57c3R5bGVzfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/pages/index.js */");
styles.__hash = "443162919";

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "page__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "mimizunoDesign")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "section__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-".concat(styles.__hash) + " " + "section__boxWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "section__box left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/heroImage.png",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "section__box right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Hello, I\u2019m Sugu Mizuno"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "UI/UX Designer")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-".concat(styles.__hash) + " " + "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "section__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-".concat(styles.__hash) + " " + "box__card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card__cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "\u5B66\u751F\u751F\u6D3B\u3067\u306F\u3001\u81EA\u5206\u304C\u60C5\u71B1\u3092\u6301\u3063\u3066\u53D6\u308A\u7D44\u3081\u308B\u3082\u306E\u3092\u898B\u3064\u3051\u308B\u305F\u3081\u69D8\u3005\u306A\u6D3B\u52D5\u306B\u53D6\u308A\u7D44\u3080\u4E2D\u3067\u3001\u30C7\u30B6\u30A4\u30F3\u3068\u51FA\u4F1A\u3044\u307E\u3057\u305F\u3002\u30C7\u30B6\u30A4\u30F3\u306E\u554F\u984C\u89E3\u6C7A\u306E\u8996\u70B9\u306B\u60F9\u304B\u308C\u30012017\u5E74\u306B\u5927\u5B66\u3092\u4F11\u5B66\u3057\u3001\u30D9\u30C8\u30CA\u30E0\u306E\u65E5\u7CFBIT\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u306B\u3066\u30C7\u30B6\u30A4\u30CA\u30FC\u306E\u30A4\u30F3\u30BF\u30FC\u30F3\u3068\u3057\u3066\u30E1\u30F3\u30BF\u30FC\u306E\u5143\u306B\u5F1F\u5B50\u5165\u308A\u306E\u5F8C\u3001\u73FE\u5728\u306F\u4EAC\u90FD\u306B\u62E0\u70B9\u3092\u7F6E\u304FBaseconnect\u682A\u5F0F\u4F1A\u793E\u306B\u3066UI/UX\u30C7\u30B6\u30A4\u30CA\u30FC\u3068\u3057\u3066\u6D3B\u52D5\u3057\u3066\u3044\u307E\u3059\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "\u307E\u305F\u3001\u65E5\u672C\u6700\u5927\u7D1A\u306EUX\u30AB\u30F3\u30D5\u30A1\u30EC\u30F3\u30B9\u3092\u6BCE\u5E74\u958B\u50AC\u3059\u308BUX DAYS TOKYO\u306B\u30B9\u30BF\u30C3\u30D5\u3068\u3057\u3066\u7D041\u5E74\u9593\u6240\u5C5E\u3057\u3066\u3044\u307E\u3057\u305F\u3002UX\u306B\u95A2\u3059\u308B\u30D6\u30ED\u30B0\u8A18\u4E8B\u306E\u57F7\u7B46\u3068\u3001\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u3001\u52C9\u5F37\u4F1A\u3092\u30B9\u30BF\u30C3\u30D5\u3067\u5B9A\u671F\u7684\u306B\u958B\u50AC\u3057\u3001\u30C7\u30B6\u30A4\u30F3\u3092\u884C\u3046\u4E0A\u3067\u306E\u8996\u70B9\u3092\u5B66\u3073\u307E\u3057\u305F\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "\u30E2\u30C3\u30C8\u30FC\u306F\u4E8B\u4E0A\u7DF4\u78E8\u3067\u3059\u3002\u611F\u899A\u3067\u306F\u306A\u304F\u7406\u8AD6\u3068\u672C\u8CEA\u3092\u898B\u6975\u3081\u3089\u308C\u308B\u30C7\u30B6\u30A4\u30F3\u304C\u3067\u304D\u308B\u3088\u3046\u65E5\u3005\u52C9\u5F37\u3057\u3066\u3044\u307E\u3059\u3002\u30C7\u30B6\u30A4\u30F3\u306E\u672C\u8CEA\u3067\u3042\u308B\u554F\u984C\u89E3\u6C7A\u306E\u8996\u70B9\u306B\u3053\u3060\u308F\u308A\u3001\u8EAB\u8FD1\u306A\u4EBA\u306E\u8AB2\u984C\u304B\u3089\u53D6\u308A\u7D44\u307F\u7D9A\u3051\u305F\u3044\u3067\u3059\u3002"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-".concat(styles.__hash) + " " + "box__card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card__cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__listItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "Baseconnect")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "UI/UX Designer Intern"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "\u4EAC\u90FD / 2017 - 2019\uFF08\u73FE\u5728\uFF09")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__listItem flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "UX Days Tokyo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "Stuff"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "\u5927\u962A&\u6771\u4EAC / 2017 - 2018")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__listItem flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "Framgia")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Design & Marketing Intern"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "\u30D9\u30C8\u30CA\u30E0 / 2017/4 - 9")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__listItem flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "Flamingo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "iOS Enginner & Hastler"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "\u4EAC\u90FD / 2016/5 - 11")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "bio__listItem flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, "\u540C\u5FD7\u793E\u5927\u5B66")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "\u7D4C\u6E08\u5B66\u90E8/\u7D4C\u6E08\u5B66\u79D1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "item--place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, "\u4EAC\u90FD / 2014 - 2020 (\u4E88\u5B9A)")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-".concat(styles.__hash) + " " + "card__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-".concat(styles.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "Biography"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ContentFooter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
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