"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/toggle";
exports.ids = ["pages/toggle"];
exports.modules = {

/***/ "./src/pages/toggle/index.js":
/*!***********************************!*\
  !*** ./src/pages/toggle/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xstate/react */ \"@xstate/react\");\n/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _xstore_toggleMachine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../xstore/toggleMachine */ \"./src/xstore/toggleMachine.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/zendy/ReactJS/xstate/src/pages/toggle/index.js\";\n\n\n\n\n\nconst Toggle = () => {\n  const [current, send] = (0,_xstate_react__WEBPACK_IMPORTED_MODULE_0__.useMachine)(_xstore_toggleMachine__WEBPACK_IMPORTED_MODULE_2__.toggleMachine);\n  const active = current.matches(\"active\");\n  const {\n    count\n  } = current.context;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      children: \"Toggle XState\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n      onClick: () => send(\"TOGGLE\"),\n      children: [\"Click me (\", active ? \"✅\" : \"❌\", \")\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"code\", {\n      children: [\"Toggled \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"strong\", {\n        children: count\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, undefined), \" times\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toggle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9nZ2xlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUcsTUFBTSxHQUFHLE1BQU07QUFDbkIsUUFBTSxDQUFDQyxPQUFELEVBQVVDLElBQVYsSUFBa0JMLHlEQUFVLENBQUNFLGdFQUFELENBQWxDO0FBQ0EsUUFBTUksTUFBTSxHQUFHRixPQUFPLENBQUNHLE9BQVIsQ0FBZ0IsUUFBaEIsQ0FBZjtBQUNBLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFZSixPQUFPLENBQUNLLE9BQTFCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQVMsYUFBTyxFQUFFLE1BQU1KLElBQUksQ0FBQyxRQUFELENBQTVCO0FBQUEsK0JBQ2FDLE1BQU0sR0FBRyxHQUFILEdBQVMsR0FENUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBSVksR0FKWixlQUtFO0FBQUEsMENBQ1U7QUFBQSxrQkFBU0U7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELENBaEJEOztBQWtCQSxpRUFBZUwsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3hzdGF0ZS8uL3NyYy9wYWdlcy90b2dnbGUvaW5kZXguanM/OTQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNYWNoaW5lIH0gZnJvbSBcIkB4c3RhdGUvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRvZ2dsZU1hY2hpbmUgfSBmcm9tIFwiLi4vLi4veHN0b3JlL3RvZ2dsZU1hY2hpbmVcIjtcblxuY29uc3QgVG9nZ2xlID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudCwgc2VuZF0gPSB1c2VNYWNoaW5lKHRvZ2dsZU1hY2hpbmUpO1xuICBjb25zdCBhY3RpdmUgPSBjdXJyZW50Lm1hdGNoZXMoXCJhY3RpdmVcIik7XG4gIGNvbnN0IHsgY291bnQgfSA9IGN1cnJlbnQuY29udGV4dDtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+VG9nZ2xlIFhTdGF0ZTwvaDE+XG4gICAgICA8YnV0dG9uICBvbkNsaWNrPXsoKSA9PiBzZW5kKFwiVE9HR0xFXCIpfT5cbiAgICAgICAgQ2xpY2sgbWUgKHthY3RpdmUgPyBcIuKchVwiIDogXCLinYxcIn0pXG4gICAgICA8L2J1dHRvbj57XCIgXCJ9XG4gICAgICA8Y29kZT5cbiAgICAgICAgVG9nZ2xlZCA8c3Ryb25nPntjb3VudH08L3N0cm9uZz4gdGltZXNcbiAgICAgIDwvY29kZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZTtcbiJdLCJuYW1lcyI6WyJ1c2VNYWNoaW5lIiwiUmVhY3QiLCJ0b2dnbGVNYWNoaW5lIiwiVG9nZ2xlIiwiY3VycmVudCIsInNlbmQiLCJhY3RpdmUiLCJtYXRjaGVzIiwiY291bnQiLCJjb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/toggle/index.js\n");

/***/ }),

/***/ "./src/xstore/toggleMachine.js":
/*!*************************************!*\
  !*** ./src/xstore/toggleMachine.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleMachine\": () => (/* binding */ toggleMachine)\n/* harmony export */ });\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ \"xstate\");\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xstate__WEBPACK_IMPORTED_MODULE_0__);\n\nconst toggleMachine = (0,xstate__WEBPACK_IMPORTED_MODULE_0__.createMachine)({\n  id: \"toggle\",\n  initial: \"inactive\",\n  context: {\n    count: 0\n  },\n  states: {\n    inactive: {\n      on: {\n        TOGGLE: \"active\"\n      }\n    },\n    active: {\n      entry: (0,xstate__WEBPACK_IMPORTED_MODULE_0__.assign)({\n        count: ctx => ctx.count + 1\n      }),\n      on: {\n        TOGGLE: \"inactive\"\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMveHN0b3JlL3RvZ2dsZU1hY2hpbmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNRSxhQUFhLEdBQUdELHFEQUFhLENBQUM7QUFDekNFLEVBQUFBLEVBQUUsRUFBRSxRQURxQztBQUV6Q0MsRUFBQUEsT0FBTyxFQUFFLFVBRmdDO0FBR3pDQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsS0FBSyxFQUFFO0FBREEsR0FIZ0M7QUFNekNDLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxRQUFRLEVBQUU7QUFDUkMsTUFBQUEsRUFBRSxFQUFFO0FBQUVDLFFBQUFBLE1BQU0sRUFBRTtBQUFWO0FBREksS0FESjtBQUlOQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsS0FBSyxFQUFFWiw4Q0FBTSxDQUFDO0FBQUVNLFFBQUFBLEtBQUssRUFBR08sR0FBRCxJQUFTQSxHQUFHLENBQUNQLEtBQUosR0FBWTtBQUE5QixPQUFELENBRFA7QUFFTkcsTUFBQUEsRUFBRSxFQUFFO0FBQUVDLFFBQUFBLE1BQU0sRUFBRTtBQUFWO0FBRkU7QUFKRjtBQU5pQyxDQUFELENBQW5DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veHN0YXRlLy4vc3JjL3hzdG9yZS90b2dnbGVNYWNoaW5lLmpzPzA5MGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXNzaWduLCBjcmVhdGVNYWNoaW5lIH0gZnJvbSBcInhzdGF0ZVwiO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlTWFjaGluZSA9IGNyZWF0ZU1hY2hpbmUoe1xuICBpZDogXCJ0b2dnbGVcIixcbiAgaW5pdGlhbDogXCJpbmFjdGl2ZVwiLFxuICBjb250ZXh0OiB7XG4gICAgY291bnQ6IDAsXG4gIH0sXG4gIHN0YXRlczoge1xuICAgIGluYWN0aXZlOiB7XG4gICAgICBvbjogeyBUT0dHTEU6IFwiYWN0aXZlXCIgfSxcbiAgICB9LFxuICAgIGFjdGl2ZToge1xuICAgICAgZW50cnk6IGFzc2lnbih7IGNvdW50OiAoY3R4KSA9PiBjdHguY291bnQgKyAxIH0pLFxuICAgICAgb246IHsgVE9HR0xFOiBcImluYWN0aXZlXCIgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiYXNzaWduIiwiY3JlYXRlTWFjaGluZSIsInRvZ2dsZU1hY2hpbmUiLCJpZCIsImluaXRpYWwiLCJjb250ZXh0IiwiY291bnQiLCJzdGF0ZXMiLCJpbmFjdGl2ZSIsIm9uIiwiVE9HR0xFIiwiYWN0aXZlIiwiZW50cnkiLCJjdHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/xstore/toggleMachine.js\n");

/***/ }),

/***/ "@xstate/react":
/*!********************************!*\
  !*** external "@xstate/react" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@xstate/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "xstate":
/*!*************************!*\
  !*** external "xstate" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("xstate");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/toggle/index.js"));
module.exports = __webpack_exports__;

})();