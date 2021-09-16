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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STATS_API\": () => (/* binding */ STATS_API)\n/* harmony export */ });\nconst STATS_API = `https://coronavirus-19-api.herokuapp.com/countries`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxTQUFTLEdBQUksb0RBQW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veHN0YXRlLy4vc3JjL2NvbnN0YW50cy5qcz81ZmIwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTVEFUU19BUEkgPSBgaHR0cHM6Ly9jb3JvbmF2aXJ1cy0xOS1hcGkuaGVyb2t1YXBwLmNvbS9jb3VudHJpZXNgIl0sIm5hbWVzIjpbIlNUQVRTX0FQSSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/constants.js\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xstate/react */ \"@xstate/react\");\n/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _xstore_startsMachine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../xstore/startsMachine */ \"./src/xstore/startsMachine.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/zendy/ReactJS/xstate/src/pages/index.js\";\n\n\n\n\n\n\nconst App = () => {\n  const [current, send] = (0,_xstate_react__WEBPACK_IMPORTED_MODULE_0__.useMachine)(_xstore_startsMachine__WEBPACK_IMPORTED_MODULE_2__.statsMachine);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"CoronaVirus Information\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined), current.matches(\"fetchStats\") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"Loading Stats\\u2026\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 41\n    }, undefined), current.matches(\"error\") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"Error fetching stats\\u2026\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 36\n    }, undefined), current.matches(\"ready\") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"Stats loaded!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 36\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7O0FBRUEsTUFBTUcsR0FBRyxHQUFHLE1BQU07QUFDaEIsUUFBTSxDQUFDQyxPQUFELEVBQVVDLElBQVYsSUFBa0JMLHlEQUFVLENBQUNFLCtEQUFELENBQWxDO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVHRSxPQUFPLENBQUNFLE9BQVIsQ0FBZ0IsWUFBaEIsa0JBQWlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZwQyxFQUdHRixPQUFPLENBQUNFLE9BQVIsQ0FBZ0IsT0FBaEIsa0JBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUgvQixFQUlHRixPQUFPLENBQUNFLE9BQVIsQ0FBZ0IsT0FBaEIsa0JBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUovQjtBQUFBLGtCQURGO0FBUUQsQ0FYRDs7QUFhQSxpRUFBZUgsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3hzdGF0ZS8uL3NyYy9wYWdlcy9pbmRleC5qcz80NTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1hY2hpbmUgfSBmcm9tIFwiQHhzdGF0ZS9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3RhdHNNYWNoaW5lIH0gZnJvbSBcIi4uL3hzdG9yZS9zdGFydHNNYWNoaW5lXCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnQsIHNlbmRdID0gdXNlTWFjaGluZShzdGF0c01hY2hpbmUpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+Q29yb25hVmlydXMgSW5mb3JtYXRpb248L2Rpdj5cbiAgICAgIHtjdXJyZW50Lm1hdGNoZXMoXCJmZXRjaFN0YXRzXCIpICYmIDxkaXY+TG9hZGluZyBTdGF0c+KApjwvZGl2Pn1cbiAgICAgIHtjdXJyZW50Lm1hdGNoZXMoXCJlcnJvclwiKSAmJiA8ZGl2PkVycm9yIGZldGNoaW5nIHN0YXRz4oCmPC9kaXY+fVxuICAgICAge2N1cnJlbnQubWF0Y2hlcyhcInJlYWR5XCIpICYmIDxkaXY+U3RhdHMgbG9hZGVkITwvZGl2Pn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VNYWNoaW5lIiwiUmVhY3QiLCJzdGF0c01hY2hpbmUiLCJBcHAiLCJjdXJyZW50Iiwic2VuZCIsIm1hdGNoZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "./src/xstore/startsMachine.js":
/*!*************************************!*\
  !*** ./src/xstore/startsMachine.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"statsMachine\": () => (/* binding */ statsMachine)\n/* harmony export */ });\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ \"xstate\");\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xstate__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\n\nconst statsMachine = (0,xstate__WEBPACK_IMPORTED_MODULE_0__.Machine)({\n  id: 'statsMachine',\n  initial: 'fetchStats',\n  context: {\n    stats: null\n  },\n  states: {\n    fetchStats: {\n      invoke: {\n        src: () => new Promise(async (resolve, reject) => {\n          try {\n            const stats = await fetch(_constants__WEBPACK_IMPORTED_MODULE_1__.STATS_API).then(response => response.json());\n            return resolve(stats);\n          } catch (error) {\n            console.log('Error in fetching stats: ', error);\n            return reject(error);\n          }\n        }),\n        onDone: {\n          target: 'ready',\n          actions: 'assignStats'\n        },\n        onError: 'error'\n      }\n    },\n    ready: {},\n    error: {}\n  }\n}, {\n  actions: {\n    assignStats: (0,xstate__WEBPACK_IMPORTED_MODULE_0__.assign)((_context, event) => ({\n      stats: event.data\n    }))\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMveHN0b3JlL3N0YXJ0c01hY2hpbmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNRyxZQUFZLEdBQUdILCtDQUFPLENBQUM7QUFDbENJLEVBQUFBLEVBQUUsRUFBRSxjQUQ4QjtBQUVsQ0MsRUFBQUEsT0FBTyxFQUFFLFlBRnlCO0FBR2xDQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsS0FBSyxFQUFFO0FBREEsR0FIeUI7QUFNbENDLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxVQUFVLEVBQUU7QUFDVkMsTUFBQUEsTUFBTSxFQUFFO0FBQ05DLFFBQUFBLEdBQUcsRUFBRSxNQUFNLElBQUlDLE9BQUosQ0FBYSxPQUFPQyxPQUFQLEVBQWdCQyxNQUFoQixLQUEyQjtBQUNqRCxjQUFJO0FBQ0Ysa0JBQU1QLEtBQUssR0FDVCxNQUFNUSxLQUFLLENBQUNiLGlEQUFELENBQUwsQ0FDSGMsSUFERyxDQUNFQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQURkLENBRFI7QUFJQSxtQkFBT0wsT0FBTyxDQUFDTixLQUFELENBQWQ7QUFDRCxXQU5ELENBTUUsT0FBT1ksS0FBUCxFQUFjO0FBQ2RDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXlDRixLQUF6QztBQUNBLG1CQUFPTCxNQUFNLENBQUNLLEtBQUQsQ0FBYjtBQUNEO0FBQ0YsU0FYVSxDQURMO0FBYU5HLFFBQUFBLE1BQU0sRUFBRTtBQUFFQyxVQUFBQSxNQUFNLEVBQUUsT0FBVjtBQUFtQkMsVUFBQUEsT0FBTyxFQUFFO0FBQTVCLFNBYkY7QUFjTkMsUUFBQUEsT0FBTyxFQUFFO0FBZEg7QUFERSxLQUROO0FBbUJOQyxJQUFBQSxLQUFLLEVBQUUsRUFuQkQ7QUFvQk5QLElBQUFBLEtBQUssRUFBRTtBQXBCRDtBQU4wQixDQUFELEVBNkJuQztBQUNFSyxFQUFBQSxPQUFPLEVBQUU7QUFDUEcsSUFBQUEsV0FBVyxFQUFFMUIsOENBQU0sQ0FBQyxDQUFDMkIsUUFBRCxFQUFXQyxLQUFYLE1BQXNCO0FBQ3hDdEIsTUFBQUEsS0FBSyxFQUFFc0IsS0FBSyxDQUFDQztBQUQyQixLQUF0QixDQUFEO0FBRFo7QUFEWCxDQTdCbUMsQ0FBNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94c3RhdGUvLi9zcmMveHN0b3JlL3N0YXJ0c01hY2hpbmUuanM/ZTJhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYWNoaW5lLCBhc3NpZ24gfSBmcm9tIFwieHN0YXRlXCI7XG5pbXBvcnQgeyBTVEFUU19BUEkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBzdGF0c01hY2hpbmUgPSBNYWNoaW5lKHtcbiAgaWQ6ICdzdGF0c01hY2hpbmUnLFxuICBpbml0aWFsOiAnZmV0Y2hTdGF0cycsXG4gIGNvbnRleHQ6IHtcbiAgICBzdGF0czogbnVsbFxuICB9LFxuICBzdGF0ZXM6IHtcbiAgICBmZXRjaFN0YXRzOiB7XG4gICAgICBpbnZva2U6IHtcbiAgICAgICAgc3JjOiAoKSA9PiBuZXcgUHJvbWlzZSggYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0cyA9IFxuICAgICAgICAgICAgICBhd2FpdCBmZXRjaChTVEFUU19BUEkpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShzdGF0cylcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIGZldGNoaW5nIHN0YXRzOiAnLCBlcnJvcilcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyb3IpXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgb25Eb25lOiB7IHRhcmdldDogJ3JlYWR5JywgYWN0aW9uczogJ2Fzc2lnblN0YXRzJyB9LFxuICAgICAgICBvbkVycm9yOiAnZXJyb3InLFxuICAgICAgfVxuICAgIH0sXG4gICAgcmVhZHk6IHt9LFxuICAgIGVycm9yOiB7fVxuICB9XG59LFxue1xuICBhY3Rpb25zOiB7XG4gICAgYXNzaWduU3RhdHM6IGFzc2lnbigoX2NvbnRleHQsIGV2ZW50KSA9PiAoe1xuICAgICAgc3RhdHM6IGV2ZW50LmRhdGFcbiAgICB9KSlcbiAgfVxufSlcbiJdLCJuYW1lcyI6WyJNYWNoaW5lIiwiYXNzaWduIiwiU1RBVFNfQVBJIiwic3RhdHNNYWNoaW5lIiwiaWQiLCJpbml0aWFsIiwiY29udGV4dCIsInN0YXRzIiwic3RhdGVzIiwiZmV0Y2hTdGF0cyIsImludm9rZSIsInNyYyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwib25Eb25lIiwidGFyZ2V0IiwiYWN0aW9ucyIsIm9uRXJyb3IiLCJyZWFkeSIsImFzc2lnblN0YXRzIiwiX2NvbnRleHQiLCJldmVudCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/xstore/startsMachine.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();