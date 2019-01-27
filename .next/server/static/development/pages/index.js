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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentFooter; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mimizunosuguru/projects/mimizunoDesign/components/ContentFooter.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var styles = new String("a.jsx-1631768548{font-color:black;padding:0 20px;}.card__wrapper.jsx-1631768548{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.card.jsx-1631768548{height:300px;-webkit-flex:1;-ms-flex:1;flex:1;background:#FFFFFF;border:1px solid #F0F1F5;border-radius:8px;box-shadow:0 10px 20px 0 rgba(0,0,0,0.08);-webkit-transition:all 250ms cubic-bezier(.02,.01,.47,1);transition:all 250ms cubic-bezier(.02,.01,.47,1);}.card.jsx-1631768548:hover{box-shadow:0 40px 40px rgba(0,0,0,.16);-webkit-transform:translate(0,-20px);-ms-transform:translate(0,-20px);transform:translate(0,-20px);-webkit-transition-delay:0s!important;transition-delay:0s!important;-webkit-transition:all 250ms cubic-bezier(.02,.01,.47,1);transition:all 250ms cubic-bezier(.02,.01,.47,1);}.card.jsx-1631768548:first-child{margin-right:20px;}.card.jsx-1631768548:last-child{margin-left:20px;}.card__inner.jsx-1631768548{width:100%;height:100%;display:block;padding:20px;color:#fff;}.card__cont.jsx-1631768548{position:relative;width:100%;height:100%;padding:30px 35px;background-size:cover;background-position:center;background-repeat:no-repeat;}.card--history.jsx-1631768548 .card__cont.jsx-1631768548{background-image:url(\"/static/history.png\");}.card--work.jsx-1631768548 .card__cont.jsx-1631768548{background-image:url(\"/static/work.png\");}.card__inner.jsx-1631768548 span.jsx-1631768548{font-size:20px;font-weight:bold;}.card__inner.jsx-1631768548 p.jsx-1631768548{font-size:50px;font-weight:bold;}@media (max-width:767px){.card__wrapper.jsx-1631768548{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.card.jsx-1631768548{height:200px;}.card.jsx-1631768548:hover{box-shadow:0 20px 20px rgba(0,0,0,.08);-webkit-transform:none;-ms-transform:none;transform:none;}.card.jsx-1631768548:first-child{margin:0 0 20px;}.card.jsx-1631768548:last-child{margin:0;}.card__inner.jsx-1631768548{padding:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0NvbnRlbnRGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWtCLEFBR3NCLEFBS0osQUFJQSxBQVUwQixBQU9yQixBQUlELEFBSU4sQUFRTyxBQVUwQixBQUtILEFBSzFCLEFBS0EsQUFNUyxBQUlULEFBSTBCLEFBS3ZCLEFBSVAsQUFJSSxTQUhmLEVBeERZLEVBekJMLEFBb0VQLEFBaUJBLEVBaENpQixBQUtBLENBbUJqQixDQXRGZSxBQThCakIsQ0FKQSxBQWdCYSxLQVBHLE1BUUYsR0ExQ2QsQUE4REEsQUFLQSxLQWhDZSxFQWpCZ0IsQUE4RFosRUFyQ0MsQUFjcEIsR0FMQSxFQTNDcUIsSUEyQlIsU0FRVyxFQVB4QixJQTNCMkIsU0FOM0IsSUFvRUUsR0EzQjJCLFNBbENULE1Bc0VsQixZQXJFMEMsQUFrQ2QsNEJBQzlCLEVBNUJnQyxZQU5tQix3REFPQSxrREFObkQsd0RBT0EiLCJmaWxlIjoiL1VzZXJzL21pbWl6dW5vc3VndXJ1L3Byb2plY3RzL21pbWl6dW5vRGVzaWduL2NvbXBvbmVudHMvQ29udGVudEZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3Qgc3R5bGVzID0gY3NzYFxuICBhIHtcbiAgICBmb250LWNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbiAgXG4gIC5jYXJkX193cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4OyAgXG4gIH1cbiAgXG4gIC5jYXJkIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMUY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCAwIHJnYmEoMCwwLDAsMC4wOCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllciguMDIsLjAxLC40NywxKTtcbiAgfVxuICBcbiAgLmNhcmQ6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgNDBweCA0MHB4IHJnYmEoMCwwLDAsLjE2KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC0yMHB4KTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcyFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllciguMDIsLjAxLC40NywxKTtcbiAgfVxuICBcbiAgLmNhcmQ6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuICBcbiAgLmNhcmQ6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5jYXJkX19pbm5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5jYXJkX19jb250ICB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAzMHB4IDM1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxuICAgIFxuICAuY2FyZC0taGlzdG9yeSAuY2FyZF9fY29udCAge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaGlzdG9yeS5wbmdcIik7XG4gICBcbiAgfVxuICBcbiAgLmNhcmQtLXdvcmsgLmNhcmRfX2NvbnQgIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL3dvcmsucG5nXCIpO1xuICAgIFxuICB9XG4gIFxuICAuY2FyZF9faW5uZXIgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuY2FyZF9faW5uZXIgcCB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxuICAgIC5jYXJkX193cmFwcGVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIFxuICAgIC5jYXJkIHtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMjBweCAyMHB4IHJnYmEoMCwwLDAsLjA4KTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmNhcmQ6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luOiAwIDAgMjBweDtcbiAgICB9XG4gICAgXG4gICAgLmNhcmQ6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkX19pbm5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50Rm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBzdGF0ZSA9IHtcbiAgICBwYWdlOiBcInRlc3RcIlxuICB9XG5cbiAgLy8gd29yayAvIHBhZ2UgLyBzdG9yeeOBp+adoeS7tuWIhuWykFxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLnBhZ2VTdGF0dXMgPT09ICd0b3AnID8gKFxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX19pbm5lclwiPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZF9fd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJkIGNhcmQtLWhpc3RvcnlcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmRfX2lubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlYWQgbXk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+SGlzdG9yeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLS13b3JrXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3dvcmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZF9faW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2NvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNob3cgbXk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Xb3JrPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57c3R5bGVzfTwvc3R5bGU+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApIDogbnVsbFxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/components/ContentFooter.js */");
styles.__hash = "1631768548";

var ContentFooter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContentFooter, _React$Component);

  function ContentFooter() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContentFooter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContentFooter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      page: "test" // work / page / storyで条件分岐

    });

    return _this;
  }

  _createClass(ContentFooter, [{
    key: "render",
    value: function render() {
      return this.props.pageStatus === 'top' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "section__inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-".concat(styles.__hash) + " " + "card__wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-".concat(styles.__hash) + " " + "card card--history",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-".concat(styles.__hash) + " " + "card__inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "card__cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Read my"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "History")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-".concat(styles.__hash) + " " + "card card--work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-".concat(styles.__hash) + " " + "card__inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "card__cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Show my"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Work"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: styles.__hash,
        css: styles,
        __self: this
      })) : null;
    }
  }]);

  return ContentFooter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



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
    styleId: "3343294145",
    css: "*{margin:0;padding:0;box-sizing:border-box;}.Avenir{font-family:'avenir';}body{background:#F0F1F5;font-family:'Avenir','YuGothic';}section{background:#fff;padding:50px;}section.grey{background:#F0F1F5;}.section__inner{margin:0 auto;max-width:980px;}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.ml-auto{margin-left:auto;}.link:hover{cursor:pointer;opacity:0.6;}p{font-size:16px;}a{-webkit-text-decoration:none;text-decoration:none;}a:hover{opacity:0.6;cursor:pointer;}a:visited{color:#000;-webkit-text-decoration:none;text-decoration:none;}ul li{display:block;text-align:-webkit-match-parent;}@media (max-width:767px){section{padding:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjdUIsQUFHYyxBQU1ZLEFBSUYsQUFLSCxBQUtHLEFBSUwsQUFLRCxBQUlJLEFBSUYsQUFLQSxBQUlNLEFBSVQsQUFLRCxBQUtHLEFBTUMsU0FqRUwsRUF1RFcsQ0FMTixDQWdCZixDQTFDZ0IsQUFvQ2dCLENBdkJwQixBQUtkLENBM0JlLENBa0JmLEVBaEN3QixBQVNXLEFBVW5DLEVBZEEsTUFnQ0EsQUFhQSxFQW5DQSxDQVNBLFdBdkJBLEtBMkRBLElBZkEsQ0FuQ0EsVUE2Q0EsYUEzQkEiLCJmaWxlIjoiL1VzZXJzL21pbWl6dW5vc3VndXJ1L3Byb2plY3RzL21pbWl6dW5vRGVzaWduL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0ICBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgIEZvb3RlciBmcm9tICcuL0Zvb3RlcidcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8SGVhZGVyLz5cblxuICAgIHsvKiDjgrPjg7Pjg4bjg7Pjg4QgKi99XG4gICAge3Byb3BzLmNoaWxkcmVufVxuXG4gICAgPEZvb3Rlci8+XG4gICAgey8qIOOCsOODreODvOODkOODq0NTUyAqL31cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLkF2ZW5pciB7XG4gICAgZm9udC1mYW1pbHk6ICdhdmVuaXInO1xuICB9XG5cbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogI0YwRjFGNTtcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pcicsICdZdUdvdGhpYyc7XG4gIH1cblxuICBzZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gIH1cblxuICBzZWN0aW9uLmdyZXkge1xuICAgIGJhY2tncm91bmQ6ICNGMEYxRjU7XG4gIH1cblxuICAuc2VjdGlvbl9faW5uZXIge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogOTgwcHg7XG4gIH1cblxuICAuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5tbC1hdXRvIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuXG4gIC5saW5rOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGE6dmlzaXRlZCB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgdWwgbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IC13ZWJraXQtbWF0Y2gtcGFyZW50O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgc2VjdGlvbiB7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgfVxuYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdfQ== */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/components/Layout.js */",
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ContentFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ContentFooter */ "./components/ContentFooter.js");
var _jsxFileName = "/Users/mimizunosuguru/projects/mimizunoDesign/pages/index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var styles = new String(".section__boxWrapper.jsx-59187462{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.section__box.jsx-59187462{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:50%;height:380px;overflow:hidden;}.page__header.jsx-59187462{padding:0 50px;background:#fff;}h1.jsx-59187462{height:84px;line-height:84px;margin:0 auto;max-width:980px;}h2.jsx-59187462{font-family:'Avenir',serif;font-size:28px;}h3.jsx-59187462{font-family:'Avenir',serif;color:#989696;font-size:24px;}img.jsx-59187462{width:auto;height:100%;}.box__card.jsx-59187462{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#fff;padding:30px;}.box__card.jsx-59187462:first-child{margin-bottom:50px;}.card__title.jsx-59187462{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:40%;}.card__cont.jsx-59187462{width:550px;}.card__cont.jsx-59187462 p.jsx-59187462{font-size:15px;margin-bottom:20px;}.card__cont.jsx-59187462 p.jsx-59187462:last-child{margin:0;}.bio__listItem.jsx-59187462{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px;border-bottom:1px solid #EEEEEE;font-size:15px;}.bio__listItem.jsx-59187462 .item--title.jsx-59187462{width:140px;font-family:'Avenir','YuGothic';}.bio__listItem.jsx-59187462 .item--title.jsx-59187462 a.jsx-59187462{font-weight:bold;border-bottom:1px solid #000;}.bio__listItem.jsx-59187462 .item--place.jsx-59187462{margin-left:auto;text-align:right;}@media (max-width:767px){h1.jsx-59187462{display:none;}.section__box.jsx-59187462{margin-top:50px;}.section__box.right.jsx-59187462{padding-left:20px;}h2.jsx-59187462{font-size:24px;margin-bottom:10px;}.card__title.jsx-59187462 h2.jsx-59187462{font-size:28px;margin-bottom:20px;}h3.jsx-59187462{font-size:20px;}.box__card.jsx-59187462{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.box__card.jsx-59187462:first-child{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:20px;}.card__cont.jsx-59187462{width:100%;}.bio__listItem.jsx-59187462{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;height:auto;padding:15px 0;}.bio__listItem.jsx-59187462 div.jsx-59187462{margin-bottom:10px;}.bio__listItem.jsx-59187462 .item--place.jsx-59187462{margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1penVub3N1Z3VydS9wcm9qZWN0cy9taW1penVub0Rlc2lnbi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHa0IsQUFJQSxBQVlFLEFBS0gsQUFPZ0IsQUFLRCxBQU1oQixBQUtFLEFBTU0sQUFJTixBQU9ELEFBSUcsQUFLTixBQUlJLEFBUUQsQUFLSyxBQVFBLEFBTUYsQUFJRyxBQUlFLEFBSUgsQUFLQSxBQUtBLEFBSWUsQUFLUixBQUtYLEFBSVcsQUFPSCxBQUlWLFNBakZiLEFBa0ZFLEVBakhZLEFBa0daLENBcEhpQixBQXdDbkIsQUFxQm1DLENBbUJqQyxFQXJGZ0IsQUFpREcsQUFnREUsQUFLQSxBQUtyQixDQWxCQSxDQWxCNkIsQUFRWixDQWNqQixDQTNERixBQWtHRSxJQTVHRixJQVppQixBQUtGLEVBWEMsRUFMaEIsR0FpREEsQUE4QkEsQUFrQkUsQUFLQSxPQXJGYyxDQUxoQixDQU5rQixDQTREakIsRUFLRCxVQXJEQSxHQVhBLGVBeEJBLEFBSXFCLEFBd0NILEFBVUcsQUFvQkEsSUEwREUsQUFTSSxZQWhHWixPQXdGYixLQU5xQixDQWpGdkIsZ0VBekN5QixBQWtEQSxBQW9CWCxZQUNvQixRQWtFbEIsUUFkZCxJQWVpQixZQWxFRixHQW1FZixZQWxFRix3Q0F4RVksQUFrREEsVUFqREcsQUFrRGYsYUFqRGtCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvbWltaXp1bm9zdWd1cnUvcHJvamVjdHMvbWltaXp1bm9EZXNpZ24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IENvbnRlbnRGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZW50Rm9vdGVyJ1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcblxuY29uc3Qgc3R5bGVzID0gY3NzYCAgXG4gIC5zZWN0aW9uX19ib3hXcmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLnNlY3Rpb25fX2JveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAzODBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuc2VjdGlvbl9fYm94LmxlZnQge1xuICB9XG4gIFxuICAucGFnZV9faGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuICBcbiAgaDEge1xuICAgIGhlaWdodDogODRweDtcbiAgICBsaW5lLWhlaWdodDogODRweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDk4MHB4O1xuICB9XG4gIFxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXInLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbiAgXG4gIGgzIHtcbiAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyJywgc2VyaWY7XG4gICBjb2xvcjogIzk4OTY5NjtcbiAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICBcbiAgaW1nIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5ib3hfX2NhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICB9XG4gIFxuICAuYm94X19jYXJkOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG4gIFxuICAuY2FyZF9fdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIFxuICAuY2FyZF9fY29udCB7XG4gICAgd2lkdGg6IDU1MHB4O1xuICB9XG4gIFxuICAuY2FyZF9fY29udCBwIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLmNhcmRfX2NvbnQgcDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC5iaW9fX2xpc3RJdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFRUVFO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBcbiAgLmJpb19fbGlzdEl0ZW0gLml0ZW0tLXRpdGxlIHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXInLCAnWXVHb3RoaWMnOyAgIFxuICAgfSBcbiAgXG4gIC5iaW9fX2xpc3RJdGVtIC5pdGVtLS10aXRsZSBhIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgfVxuICBcbiAgLmJpb19fbGlzdEl0ZW0gLml0ZW0tLXBvc2l0aW9uIHsgXG4gIH1cbiAgXG4gIC5iaW9fX2xpc3RJdGVtIC5pdGVtLS1wbGFjZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgXG4gICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXG4gICAgaDEge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLnNlY3Rpb25fX2JveCB7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbiAgICBcbiAgICAuc2VjdGlvbl9fYm94LnJpZ2h0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB9XG4gICAgXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLmNhcmRfX3RpdGxlIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgXG4gICAgLmJveF9fY2FyZCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7ICAgICAgXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAuYm94X19jYXJkOmZpcnN0LWNoaWxkIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuY2FyZF9fY29udCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLmJpb19fbGlzdEl0ZW0ge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgcGFkZGluZzogMTVweCAwO1xuICAgIH1cbiAgICBcbiAgICAuYmlvX19saXN0SXRlbSBkaXYge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLmJpb19fbGlzdEl0ZW0gLml0ZW0tLXBsYWNlIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBwYWdlU3RhdHVzOiAndG9wJ1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlX19oZWFkZXJcIj5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICBtaW1penVub0Rlc2lnblxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LypUb3AqL31cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX19pbm5lclwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNlY3Rpb25fX2JveFdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNlY3Rpb25fX2JveCBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2hlcm9JbWFnZS5wbmdcIi8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzZWN0aW9uX19ib3ggcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgyPkhlbGxvLCBJ4oCZbSBTdWd1IE1penVubzwvaDI+XG4gICAgICAgICAgICAgICAgICA8aDM+VUkvVVggRGVzaWduZXI8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyZXlcIj5cbiAgICAgICAgICB7LyogQWJvdXQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX19pbm5lclwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJveF9fY2FyZFwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8aDI+QWJvdXQ8L2gyPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZF9fY29udFwiPlxuICAgICAgICAgICAgICAgIDxwPuWtpueUn+eUn+a0u+OBp+OBr+OAgeiHquWIhuOBjOaDheeGseOCkuaMgeOBo+OBpuWPluOCiue1hOOCgeOCi+OCguOBruOCkuimi+OBpOOBkeOCi+OBn+OCgeanmOOAheOBqua0u+WLleOBq+WPluOCiue1hOOCgOS4reOBp+OAgeODh+OCtuOCpOODs+OBqOWHuuS8muOBhOOBvuOBl+OBn+OAguODh+OCtuOCpOODs+OBruWVj+mhjOino+axuuOBruimlueCueOBq+aDueOBi+OCjOOAgTIwMTflubTjgavlpKflrabjgpLkvJHlrabjgZfjgIHjg5njg4jjg4rjg6Djga7ml6Xns7tJVOOCueOCv+ODvOODiOOCouODg+ODl+OBq+OBpuODh+OCtuOCpOODiuODvOOBruOCpOODs+OCv+ODvOODs+OBqOOBl+OBpuODoeODs+OCv+ODvOOBruWFg+OBq+W8n+WtkOWFpeOCiuOBruW+jOOAgeePvuWcqOOBr+S6rOmDveOBq+aLoOeCueOCkue9ruOBj0Jhc2Vjb25uZWN05qCq5byP5Lya56S+44Gr44GmVUkvVVjjg4fjgrbjgqTjg4rjg7zjgajjgZfjgabmtLvli5XjgZfjgabjgYTjgb7jgZnjgII8L3A+XG4gICAgICAgICAgICAgICAgPHA+44G+44Gf44CB5pel5pys5pyA5aSn57Sa44GuVVjjgqvjg7Pjg5XjgqHjg6zjg7PjgrnjgpLmr47lubTplovlgqzjgZnjgotVWCBEQVlTXG4gICAgICAgICAgICAgICAgICBUT0tZT+OBq+OCueOCv+ODg+ODleOBqOOBl+OBpue0hDHlubTplpPmiYDlsZ7jgZfjgabjgYTjgb7jgZfjgZ/jgIJVWOOBq+mWouOBmeOCi+ODluODreOCsOiomOS6i+OBruWft+ethuOBqOOAgeODr+ODvOOCr+OCt+ODp+ODg+ODl+OAgeWLieW8t+S8muOCkuOCueOCv+ODg+ODleOBp+Wumuacn+eahOOBq+mWi+WCrOOBl+OAgeODh+OCtuOCpOODs+OCkuihjOOBhuS4iuOBp+OBruimlueCueOCkuWtpuOBs+OBvuOBl+OBn+OAgjwvcD5cbiAgICAgICAgICAgICAgICA8cD7jg6Ljg4Pjg4jjg7zjga/kuovkuIrnt7Tno6jjgafjgZnjgILmhJ/opprjgafjga/jgarjgY/nkIboq5bjgajmnKzos6rjgpLopovmpbXjgoHjgonjgozjgovjg4fjgrbjgqTjg7PjgYzjgafjgY3jgovjgojjgYbml6XjgIXli4nlvLfjgZfjgabjgYTjgb7jgZnjgILjg4fjgrbjgqTjg7Pjga7mnKzos6rjgafjgYLjgovllY/poYzop6Pmsbrjga7oppbngrnjgavjgZPjgaDjgo/jgorjgIHouqvov5Hjgarkurrjga7oqrLpoYzjgYvjgonlj5bjgorntYTjgb/ntprjgZHjgZ/jgYTjgafjgZnjgII8L3A+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgey8qIEJpb2dyYXBoeSAqL31cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJib3hfX2NhcmRcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcmRfX2NvbnRcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmlvX19saXN0XCI+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmlvX19saXN0SXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXRpdGxlXCI+PGEgaHJlZj1cIlwiPkJhc2Vjb25uZWN0PC9hPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBvc2l0aW9uXCI+VUkvVVggRGVzaWduZXIgSW50ZXJuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS0tcGxhY2VcIj7kuqzpg70gLyAyMDE3IC0gMjAxOe+8iOePvuWcqO+8iTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiaW9fX2xpc3RJdGVtIGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS10aXRsZVwiPjxhIGhyZWY9XCJcIj5VWCBEYXlzIFRva3lvPC9hPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBvc2l0aW9uXCI+U3R1ZmY8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS1wbGFjZVwiPuWkp+mYqibmnbHkuqwgLyAyMDE3IC0gMjAxODwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiaW9fX2xpc3RJdGVtIGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS10aXRsZVwiPjxhIGhyZWY9XCJcIj5GcmFtZ2lhPC9hPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBvc2l0aW9uXCI+RGVzaWduICYgTWFya2V0aW5nIEludGVybjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXBsYWNlXCI+44OZ44OI44OK44OgIC8gMjAxNy80IC0gOTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiaW9fX2xpc3RJdGVtIGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS10aXRsZVwiPjxhIGhyZWY9XCJcIj5GbGFtaW5nbzwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS1wb3NpdGlvblwiPmlPUyBFbmdpbm5lciAmIEhhc3RsZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS1wbGFjZVwiPuS6rOmDvSAvIDIwMTYvNSAtIDExPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJpb19fbGlzdEl0ZW0gZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tLXRpdGxlXCI+PGEgaHJlZj1cIlwiPuWQjOW/l+ekvuWkp+WtpjwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS1wb3NpdGlvblwiPue1jOa4iOWtpumDqC/ntYzmuIjlrabnp5E8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLS1wbGFjZVwiPuS6rOmDvSAvIDIwMTQgLSAyMDIwICjkuojlrpopPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJkX190aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoMj5CaW9ncmFwaHk8L2gyPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxDb250ZW50Rm9vdGVyIHBhZ2VTdGF0dXM9e3RoaXMuc3RhdGUucGFnZVN0YXR1c30vPlxuICAgICAgICA8c3R5bGUganN4PntzdHlsZXN9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=/Users/mimizunosuguru/projects/mimizunoDesign/pages/index.js */");
styles.__hash = "59187462";

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      pageStatus: 'top'
    });

    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "page__header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "mimizunoDesign")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "section__inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-".concat(styles.__hash) + " " + "section__boxWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-".concat(styles.__hash) + " " + "section__box left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/static/heroImage.png",
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-".concat(styles.__hash) + " " + "section__box right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "Hello, I\u2019m Sugu Mizuno"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "UI/UX Designer")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-".concat(styles.__hash) + " " + "grey",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "section__inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-".concat(styles.__hash) + " " + "box__card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-".concat(styles.__hash) + " " + "card__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-".concat(styles.__hash) + " " + "card__cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "\u5B66\u751F\u751F\u6D3B\u3067\u306F\u3001\u81EA\u5206\u304C\u60C5\u71B1\u3092\u6301\u3063\u3066\u53D6\u308A\u7D44\u3081\u308B\u3082\u306E\u3092\u898B\u3064\u3051\u308B\u305F\u3081\u69D8\u3005\u306A\u6D3B\u52D5\u306B\u53D6\u308A\u7D44\u3080\u4E2D\u3067\u3001\u30C7\u30B6\u30A4\u30F3\u3068\u51FA\u4F1A\u3044\u307E\u3057\u305F\u3002\u30C7\u30B6\u30A4\u30F3\u306E\u554F\u984C\u89E3\u6C7A\u306E\u8996\u70B9\u306B\u60F9\u304B\u308C\u30012017\u5E74\u306B\u5927\u5B66\u3092\u4F11\u5B66\u3057\u3001\u30D9\u30C8\u30CA\u30E0\u306E\u65E5\u7CFBIT\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u306B\u3066\u30C7\u30B6\u30A4\u30CA\u30FC\u306E\u30A4\u30F3\u30BF\u30FC\u30F3\u3068\u3057\u3066\u30E1\u30F3\u30BF\u30FC\u306E\u5143\u306B\u5F1F\u5B50\u5165\u308A\u306E\u5F8C\u3001\u73FE\u5728\u306F\u4EAC\u90FD\u306B\u62E0\u70B9\u3092\u7F6E\u304FBaseconnect\u682A\u5F0F\u4F1A\u793E\u306B\u3066UI/UX\u30C7\u30B6\u30A4\u30CA\u30FC\u3068\u3057\u3066\u6D3B\u52D5\u3057\u3066\u3044\u307E\u3059\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "\u307E\u305F\u3001\u65E5\u672C\u6700\u5927\u7D1A\u306EUX\u30AB\u30F3\u30D5\u30A1\u30EC\u30F3\u30B9\u3092\u6BCE\u5E74\u958B\u50AC\u3059\u308BUX DAYS TOKYO\u306B\u30B9\u30BF\u30C3\u30D5\u3068\u3057\u3066\u7D041\u5E74\u9593\u6240\u5C5E\u3057\u3066\u3044\u307E\u3057\u305F\u3002UX\u306B\u95A2\u3059\u308B\u30D6\u30ED\u30B0\u8A18\u4E8B\u306E\u57F7\u7B46\u3068\u3001\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u3001\u52C9\u5F37\u4F1A\u3092\u30B9\u30BF\u30C3\u30D5\u3067\u5B9A\u671F\u7684\u306B\u958B\u50AC\u3057\u3001\u30C7\u30B6\u30A4\u30F3\u3092\u884C\u3046\u4E0A\u3067\u306E\u8996\u70B9\u3092\u5B66\u3073\u307E\u3057\u305F\u3002"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "\u30E2\u30C3\u30C8\u30FC\u306F\u4E8B\u4E0A\u7DF4\u78E8\u3067\u3059\u3002\u611F\u899A\u3067\u306F\u306A\u304F\u7406\u8AD6\u3068\u672C\u8CEA\u3092\u898B\u6975\u3081\u3089\u308C\u308B\u30C7\u30B6\u30A4\u30F3\u304C\u3067\u304D\u308B\u3088\u3046\u65E5\u3005\u52C9\u5F37\u3057\u3066\u3044\u307E\u3059\u3002\u30C7\u30B6\u30A4\u30F3\u306E\u672C\u8CEA\u3067\u3042\u308B\u554F\u984C\u89E3\u6C7A\u306E\u8996\u70B9\u306B\u3053\u3060\u308F\u308A\u3001\u8EAB\u8FD1\u306A\u4EBA\u306E\u8AB2\u984C\u304B\u3089\u53D6\u308A\u7D44\u307F\u7D9A\u3051\u305F\u3044\u3067\u3059\u3002"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-".concat(styles.__hash) + " " + "box__card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-".concat(styles.__hash) + " " + "card__cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-".concat(styles.__hash) + " " + "bio__list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-".concat(styles.__hash) + " " + "bio__listItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "item--title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "",
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "Baseconnect")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "item--position",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "UI/UX Designer Intern"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "item--place",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, "\u4EAC\u90FD / 2017 - 2019\uFF08\u73FE\u5728\uFF09")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-".concat(styles.__hash) + " " + "bio__listItem flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "item--title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "",
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "UX Days Tokyo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "item--position",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "Stuff"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "item--place",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "\u5927\u962A&\u6771\u4EAC / 2017 - 2018")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-".concat(styles.__hash) + " " + "bio__listItem flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "item--title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "",
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, "Framgia")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "item--position",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "Design & Marketing Intern"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "item--place",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "\u30D9\u30C8\u30CA\u30E0 / 2017/4 - 9")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-".concat(styles.__hash) + " " + "bio__listItem flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "item--title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "",
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "Flamingo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "item--position",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "iOS Enginner & Hastler"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "item--place",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "\u4EAC\u90FD / 2016/5 - 11")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-".concat(styles.__hash) + " " + "bio__listItem flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "item--title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "",
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, "\u540C\u5FD7\u793E\u5927\u5B66")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "item--position",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, "\u7D4C\u6E08\u5B66\u90E8/\u7D4C\u6E08\u5B66\u79D1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "item--place",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, "\u4EAC\u90FD / 2014 - 2020 (\u4E88\u5B9A)")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-".concat(styles.__hash) + " " + "card__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "Biography"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ContentFooter__WEBPACK_IMPORTED_MODULE_3__["default"], {
        pageStatus: this.state.pageStatus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: styles.__hash,
        css: styles,
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



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