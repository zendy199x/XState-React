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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @xstate/react */ \"./node_modules/@xstate/react/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CountrySearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CountrySearch */ \"./src/components/CountrySearch.js\");\n/* harmony import */ var _components_CountrySelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CountrySelector */ \"./src/components/CountrySelector.js\");\n/* harmony import */ var _components_Stat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Stat */ \"./src/components/Stat.js\");\n/* harmony import */ var _xstore_startsMachine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../xstore/startsMachine */ \"./src/xstore/startsMachine.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/zendy/ReactJS/xstate/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst App = () => {\n  _s();\n\n  const [current, send] = (0,_xstate_react__WEBPACK_IMPORTED_MODULE_6__.useMachine)(_xstore_startsMachine__WEBPACK_IMPORTED_MODULE_4__.statsMachine);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: \"CoronaVirus Information\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), current.matches(\"fetchStats\") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: \"Loading Stats\\u2026\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 41\n    }, undefined), current.matches(\"error\") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: \"Error fetching stats\\u2026\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 36\n    }, undefined), current.matches(\"ready\") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_CountrySelector__WEBPACK_IMPORTED_MODULE_2__.default, {\n        stats: current.context.stats,\n        handleChange: country => send(\"COUNTRY_SELECTED\", {\n          country\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_CountrySearch__WEBPACK_IMPORTED_MODULE_1__.default, {\n        handleChange: country => send(\"COUNTRY_SELECTED\", {\n          country\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true), console.log(current.context.countriesSelected), current.context.countriesSelected.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Stat__WEBPACK_IMPORTED_MODULE_3__.default, {\n      stats: current.context.countriesSelected\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true);\n};\n\n_s(App, \"hivFDqy8aBXkc2TxKDfXx/cZtwE=\", false, function () {\n  return [_xstate_react__WEBPACK_IMPORTED_MODULE_6__.useMachine];\n});\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxNQUFNTSxHQUFHLEdBQUcsTUFBTTtBQUFBOztBQUNoQixRQUFNLENBQUNDLE9BQUQsRUFBVUMsSUFBVixJQUFrQlIseURBQVUsQ0FBQ0ssK0RBQUQsQ0FBbEM7QUFFQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdFLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixZQUFoQixrQkFBaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRnBDLEVBR0dGLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixPQUFoQixrQkFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSC9CLEVBSUdGLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixPQUFoQixrQkFDQztBQUFBLDhCQUNFLDhEQUFDLGdFQUFEO0FBQ0UsYUFBSyxFQUFFRixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JDLEtBRHpCO0FBRUUsb0JBQVksRUFBR0MsT0FBRCxJQUFhSixJQUFJLENBQUMsa0JBQUQsRUFBcUI7QUFBRUksVUFBQUE7QUFBRixTQUFyQjtBQUZqQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBTUUsOERBQUMsOERBQUQ7QUFDRSxvQkFBWSxFQUFHQSxPQUFELElBQWFKLElBQUksQ0FBQyxrQkFBRCxFQUFxQjtBQUFFSSxVQUFBQTtBQUFGLFNBQXJCO0FBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQSxvQkFMSixFQWlCR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlQLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkssaUJBQTVCLENBakJILEVBbUJHUixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JLLGlCQUFoQixDQUFrQ0MsTUFBbEMsR0FBMkMsQ0FBM0MsaUJBQ0MsOERBQUMscURBQUQ7QUFBTSxXQUFLLEVBQUVULE9BQU8sQ0FBQ0csT0FBUixDQUFnQks7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQko7QUFBQSxrQkFERjtBQXlCRCxDQTVCRDs7R0FBTVQ7VUFDb0JOOzs7S0FEcEJNO0FBOEJOLCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80NTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1hY2hpbmUgfSBmcm9tIFwiQHhzdGF0ZS9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvdW50cnlTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291bnRyeVNlYXJjaFwiO1xuaW1wb3J0IENvdW50cnlTZWxlY3RvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudHJ5U2VsZWN0b3JcIjtcbmltcG9ydCBTdGF0IGZyb20gXCIuLi9jb21wb25lbnRzL1N0YXRcIjtcbmltcG9ydCB7IHN0YXRzTWFjaGluZSB9IGZyb20gXCIuLi94c3RvcmUvc3RhcnRzTWFjaGluZVwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50LCBzZW5kXSA9IHVzZU1hY2hpbmUoc3RhdHNNYWNoaW5lKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PkNvcm9uYVZpcnVzIEluZm9ybWF0aW9uPC9kaXY+XG4gICAgICB7Y3VycmVudC5tYXRjaGVzKFwiZmV0Y2hTdGF0c1wiKSAmJiA8ZGl2PkxvYWRpbmcgU3RhdHPigKY8L2Rpdj59XG4gICAgICB7Y3VycmVudC5tYXRjaGVzKFwiZXJyb3JcIikgJiYgPGRpdj5FcnJvciBmZXRjaGluZyBzdGF0c+KApjwvZGl2Pn1cbiAgICAgIHtjdXJyZW50Lm1hdGNoZXMoXCJyZWFkeVwiKSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENvdW50cnlTZWxlY3RvclxuICAgICAgICAgICAgc3RhdHM9e2N1cnJlbnQuY29udGV4dC5zdGF0c31cbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17KGNvdW50cnkpID0+IHNlbmQoXCJDT1VOVFJZX1NFTEVDVEVEXCIsIHsgY291bnRyeSB9KX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPENvdW50cnlTZWFyY2hcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17KGNvdW50cnkpID0+IHNlbmQoXCJDT1VOVFJZX1NFTEVDVEVEXCIsIHsgY291bnRyeSB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIHtjb25zb2xlLmxvZyhjdXJyZW50LmNvbnRleHQuY291bnRyaWVzU2VsZWN0ZWQpfVxuXG4gICAgICB7Y3VycmVudC5jb250ZXh0LmNvdW50cmllc1NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8U3RhdCBzdGF0cz17Y3VycmVudC5jb250ZXh0LmNvdW50cmllc1NlbGVjdGVkfSAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VNYWNoaW5lIiwiUmVhY3QiLCJDb3VudHJ5U2VhcmNoIiwiQ291bnRyeVNlbGVjdG9yIiwiU3RhdCIsInN0YXRzTWFjaGluZSIsIkFwcCIsImN1cnJlbnQiLCJzZW5kIiwibWF0Y2hlcyIsImNvbnRleHQiLCJzdGF0cyIsImNvdW50cnkiLCJjb25zb2xlIiwibG9nIiwiY291bnRyaWVzU2VsZWN0ZWQiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

});