"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @xstate/react */ \"./node_modules/@xstate/react/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CountrySearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CountrySearch */ \"./src/components/CountrySearch.js\");\n/* harmony import */ var _components_CountrySelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CountrySelector */ \"./src/components/CountrySelector.js\");\n/* harmony import */ var _xstore_startsMachine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../xstore/startsMachine */ \"./src/xstore/startsMachine.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/zendy/ReactJS/xstate/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst App = () => {\n  _s();\n\n  const [current, send] = (0,_xstate_react__WEBPACK_IMPORTED_MODULE_5__.useMachine)(_xstore_startsMachine__WEBPACK_IMPORTED_MODULE_3__.statsMachine);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      children: \"CoronaVirus Information\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), current.matches(\"fetchStats\") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      children: \"Loading Stats\\u2026\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 41\n    }, undefined), current.matches(\"error\") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      children: \"Error fetching stats\\u2026\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 36\n    }, undefined), current.matches(\"ready\") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      children: \"Stats loaded!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 36\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_CountrySelector__WEBPACK_IMPORTED_MODULE_2__.default, {\n        stats: current.context.stats,\n        handleChange: country => send(\"COUNTRY_SELECTED\", {\n          country\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_CountrySearch__WEBPACK_IMPORTED_MODULE_1__.default, {\n        handleChange: country => send(\"COUNTRY_SELECTED\", {\n          country\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true)]\n  }, void 0, true);\n};\n\n_s(App, \"hivFDqy8aBXkc2TxKDfXx/cZtwE=\", false, function () {\n  return [_xstate_react__WEBPACK_IMPORTED_MODULE_5__.useMachine];\n});\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxNQUFNSyxHQUFHLEdBQUcsTUFBTTtBQUFBOztBQUNoQixRQUFNLENBQUNDLE9BQUQsRUFBVUMsSUFBVixJQUFrQlAseURBQVUsQ0FBQ0ksK0RBQUQsQ0FBbEM7QUFFQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdFLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixZQUFoQixrQkFBaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRnBDLEVBR0dGLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixPQUFoQixrQkFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSC9CLEVBSUdGLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixPQUFoQixrQkFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSi9CLGVBTUU7QUFBQSw4QkFDRSw4REFBQyxnRUFBRDtBQUNFLGFBQUssRUFBRUYsT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxLQUR6QjtBQUVFLG9CQUFZLEVBQUdDLE9BQUQsSUFBYUosSUFBSSxDQUFDLGtCQUFELEVBQXFCO0FBQUVJLFVBQUFBO0FBQUYsU0FBckI7QUFGakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU1FLDhEQUFDLDhEQUFEO0FBQ0Usb0JBQVksRUFBR0EsT0FBRCxJQUFhSixJQUFJLENBQUMsa0JBQUQsRUFBcUI7QUFBRUksVUFBQUE7QUFBRixTQUFyQjtBQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUEsb0JBTkY7QUFBQSxrQkFERjtBQW1CRCxDQXRCRDs7R0FBTU47VUFDb0JMOzs7S0FEcEJLO0FBd0JOLCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80NTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1hY2hpbmUgfSBmcm9tIFwiQHhzdGF0ZS9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvdW50cnlTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291bnRyeVNlYXJjaFwiO1xuaW1wb3J0IENvdW50cnlTZWxlY3RvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudHJ5U2VsZWN0b3JcIjtcbmltcG9ydCB7IHN0YXRzTWFjaGluZSB9IGZyb20gXCIuLi94c3RvcmUvc3RhcnRzTWFjaGluZVwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50LCBzZW5kXSA9IHVzZU1hY2hpbmUoc3RhdHNNYWNoaW5lKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PkNvcm9uYVZpcnVzIEluZm9ybWF0aW9uPC9kaXY+XG4gICAgICB7Y3VycmVudC5tYXRjaGVzKFwiZmV0Y2hTdGF0c1wiKSAmJiA8ZGl2PkxvYWRpbmcgU3RhdHPigKY8L2Rpdj59XG4gICAgICB7Y3VycmVudC5tYXRjaGVzKFwiZXJyb3JcIikgJiYgPGRpdj5FcnJvciBmZXRjaGluZyBzdGF0c+KApjwvZGl2Pn1cbiAgICAgIHtjdXJyZW50Lm1hdGNoZXMoXCJyZWFkeVwiKSAmJiA8ZGl2PlN0YXRzIGxvYWRlZCE8L2Rpdj59XG5cbiAgICAgIDw+XG4gICAgICAgIDxDb3VudHJ5U2VsZWN0b3JcbiAgICAgICAgICBzdGF0cz17Y3VycmVudC5jb250ZXh0LnN0YXRzfVxuICAgICAgICAgIGhhbmRsZUNoYW5nZT17KGNvdW50cnkpID0+IHNlbmQoXCJDT1VOVFJZX1NFTEVDVEVEXCIsIHsgY291bnRyeSB9KX1cbiAgICAgICAgLz5cblxuICAgICAgICA8Q291bnRyeVNlYXJjaFxuICAgICAgICAgIGhhbmRsZUNoYW5nZT17KGNvdW50cnkpID0+IHNlbmQoXCJDT1VOVFJZX1NFTEVDVEVEXCIsIHsgY291bnRyeSB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbInVzZU1hY2hpbmUiLCJSZWFjdCIsIkNvdW50cnlTZWFyY2giLCJDb3VudHJ5U2VsZWN0b3IiLCJzdGF0c01hY2hpbmUiLCJBcHAiLCJjdXJyZW50Iiwic2VuZCIsIm1hdGNoZXMiLCJjb250ZXh0Iiwic3RhdHMiLCJjb3VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

});