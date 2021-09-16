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

/***/ "./src/xstore/startsMachine.js":
/*!*************************************!*\
  !*** ./src/xstore/startsMachine.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"statsMachine\": function() { return /* binding */ statsMachine; }\n/* harmony export */ });\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstate */ \"./node_modules/xstate/es/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nconst statsMachine = (0,xstate__WEBPACK_IMPORTED_MODULE_1__.Machine)({\n  id: 'statsMachine',\n  initial: 'fetchStats',\n  context: {\n    stats: null\n  },\n  states: {\n    fetchStats: {\n      invoke: {\n        src: () => new Promise(async (resolve, reject) => {\n          try {\n            const stats = await fetch(_constants__WEBPACK_IMPORTED_MODULE_0__.STATS_API).then(response => response.json());\n            return resolve(stats);\n          } catch (error) {\n            console.log('Error in fetching stats: ', error);\n            return reject(error);\n          }\n        }),\n        onDone: {\n          target: 'ready',\n          actions: 'assignStats'\n        },\n        onError: 'error'\n      }\n    },\n    ready: {\n      on: {\n        COUNTRY_SELECTED: {\n          actions: \"updatedSelectedCountry\"\n        }\n      }\n    },\n    error: {}\n  }\n}, {\n  actions: {\n    assignStats: (0,xstate__WEBPACK_IMPORTED_MODULE_1__.assign)((_context, event) => ({\n      stats: event.data\n    }))\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMveHN0b3JlL3N0YXJ0c01hY2hpbmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNRyxZQUFZLEdBQUdILCtDQUFPLENBQUM7QUFDbENJLEVBQUFBLEVBQUUsRUFBRSxjQUQ4QjtBQUVsQ0MsRUFBQUEsT0FBTyxFQUFFLFlBRnlCO0FBR2xDQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsS0FBSyxFQUFFO0FBREEsR0FIeUI7QUFNbENDLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxVQUFVLEVBQUU7QUFDVkMsTUFBQUEsTUFBTSxFQUFFO0FBQ05DLFFBQUFBLEdBQUcsRUFBRSxNQUFNLElBQUlDLE9BQUosQ0FBYSxPQUFPQyxPQUFQLEVBQWdCQyxNQUFoQixLQUEyQjtBQUNqRCxjQUFJO0FBQ0Ysa0JBQU1QLEtBQUssR0FDVCxNQUFNUSxLQUFLLENBQUNiLGlEQUFELENBQUwsQ0FDSGMsSUFERyxDQUNFQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQURkLENBRFI7QUFJQSxtQkFBT0wsT0FBTyxDQUFDTixLQUFELENBQWQ7QUFDRCxXQU5ELENBTUUsT0FBT1ksS0FBUCxFQUFjO0FBQ2RDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXlDRixLQUF6QztBQUNBLG1CQUFPTCxNQUFNLENBQUNLLEtBQUQsQ0FBYjtBQUNEO0FBQ0YsU0FYVSxDQURMO0FBYU5HLFFBQUFBLE1BQU0sRUFBRTtBQUFFQyxVQUFBQSxNQUFNLEVBQUUsT0FBVjtBQUFtQkMsVUFBQUEsT0FBTyxFQUFFO0FBQTVCLFNBYkY7QUFjTkMsUUFBQUEsT0FBTyxFQUFFO0FBZEg7QUFERSxLQUROO0FBbUJOQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsRUFBRSxFQUFFO0FBQ0ZDLFFBQUFBLGdCQUFnQixFQUFFO0FBQUVKLFVBQUFBLE9BQU8sRUFBRTtBQUFYO0FBRGhCO0FBREMsS0FuQkQ7QUF3Qk5MLElBQUFBLEtBQUssRUFBRTtBQXhCRDtBQU4wQixDQUFELEVBaUNuQztBQUNFSyxFQUFBQSxPQUFPLEVBQUU7QUFDUEssSUFBQUEsV0FBVyxFQUFFNUIsOENBQU0sQ0FBQyxDQUFDNkIsUUFBRCxFQUFXQyxLQUFYLE1BQXNCO0FBQ3hDeEIsTUFBQUEsS0FBSyxFQUFFd0IsS0FBSyxDQUFDQztBQUQyQixLQUF0QixDQUFEO0FBRFo7QUFEWCxDQWpDbUMsQ0FBNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3hzdG9yZS9zdGFydHNNYWNoaW5lLmpzP2UyYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFjaGluZSwgYXNzaWduIH0gZnJvbSBcInhzdGF0ZVwiO1xuaW1wb3J0IHsgU1RBVFNfQVBJIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3Qgc3RhdHNNYWNoaW5lID0gTWFjaGluZSh7XG4gIGlkOiAnc3RhdHNNYWNoaW5lJyxcbiAgaW5pdGlhbDogJ2ZldGNoU3RhdHMnLFxuICBjb250ZXh0OiB7XG4gICAgc3RhdHM6IG51bGxcbiAgfSxcbiAgc3RhdGVzOiB7XG4gICAgZmV0Y2hTdGF0czoge1xuICAgICAgaW52b2tlOiB7XG4gICAgICAgIHNyYzogKCkgPT4gbmV3IFByb21pc2UoIGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBcbiAgICAgICAgICAgICAgYXdhaXQgZmV0Y2goU1RBVFNfQVBJKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcblxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoc3RhdHMpXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBmZXRjaGluZyBzdGF0czogJywgZXJyb3IpXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG9uRG9uZTogeyB0YXJnZXQ6ICdyZWFkeScsIGFjdGlvbnM6ICdhc3NpZ25TdGF0cycgfSxcbiAgICAgICAgb25FcnJvcjogJ2Vycm9yJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlYWR5OiB7XG4gICAgICBvbjoge1xuICAgICAgICBDT1VOVFJZX1NFTEVDVEVEOiB7IGFjdGlvbnM6IFwidXBkYXRlZFNlbGVjdGVkQ291bnRyeVwifVxuICAgICAgfVxuICAgIH0sXG4gICAgZXJyb3I6IHt9XG4gIH1cbn0sXG57XG4gIGFjdGlvbnM6IHtcbiAgICBhc3NpZ25TdGF0czogYXNzaWduKChfY29udGV4dCwgZXZlbnQpID0+ICh7XG4gICAgICBzdGF0czogZXZlbnQuZGF0YVxuICAgIH0pKVxuICB9XG59KVxuIl0sIm5hbWVzIjpbIk1hY2hpbmUiLCJhc3NpZ24iLCJTVEFUU19BUEkiLCJzdGF0c01hY2hpbmUiLCJpZCIsImluaXRpYWwiLCJjb250ZXh0Iiwic3RhdHMiLCJzdGF0ZXMiLCJmZXRjaFN0YXRzIiwiaW52b2tlIiwic3JjIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvbkRvbmUiLCJ0YXJnZXQiLCJhY3Rpb25zIiwib25FcnJvciIsInJlYWR5Iiwib24iLCJDT1VOVFJZX1NFTEVDVEVEIiwiYXNzaWduU3RhdHMiLCJfY29udGV4dCIsImV2ZW50IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/xstore/startsMachine.js\n");

/***/ })

});