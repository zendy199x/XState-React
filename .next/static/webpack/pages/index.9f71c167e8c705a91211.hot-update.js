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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"statsMachine\": function() { return /* binding */ statsMachine; }\n/* harmony export */ });\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstate */ \"./node_modules/xstate/es/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nconst statsMachine = (0,xstate__WEBPACK_IMPORTED_MODULE_1__.Machine)({\n  id: \"statsMachine\",\n  initial: \"fetchStats\",\n  context: {\n    countriesSelected: [],\n    stats: null\n  },\n  states: {\n    fetchStats: {\n      invoke: {\n        src: () => new Promise(async (resolve, reject) => {\n          try {\n            const stats = await fetch(_constants__WEBPACK_IMPORTED_MODULE_0__.STATS_API).then(response => response.json());\n            return resolve(stats);\n          } catch (error) {\n            console.log(\"Error in fetching stats: \", error);\n            return reject(error);\n          }\n        }),\n        onDone: {\n          target: \"ready\",\n          actions: \"assignStats\"\n        },\n        onError: \"error\"\n      }\n    },\n    ready: {\n      on: {\n        COUNTRY_SELECTED: {\n          actions: \"updateSelectedCountry\"\n        }\n      }\n    },\n    error: {}\n  }\n}, {\n  actions: {\n    assignStats: (0,xstate__WEBPACK_IMPORTED_MODULE_1__.assign)((_context, event) => ({\n      stats: event.data\n    })),\n    updateSelectedCountry: (0,xstate__WEBPACK_IMPORTED_MODULE_1__.assign)((context, event) => ({\n      contr\n    }))\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMveHN0b3JlL3N0YXJ0c01hY2hpbmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNRyxZQUFZLEdBQUdGLCtDQUFPLENBQ2pDO0FBQ0VHLEVBQUFBLEVBQUUsRUFBRSxjQUROO0FBRUVDLEVBQUFBLE9BQU8sRUFBRSxZQUZYO0FBR0VDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxpQkFBaUIsRUFBRSxFQURaO0FBRVBDLElBQUFBLEtBQUssRUFBRTtBQUZBLEdBSFg7QUFPRUMsRUFBQUEsTUFBTSxFQUFFO0FBQ05DLElBQUFBLFVBQVUsRUFBRTtBQUNWQyxNQUFBQSxNQUFNLEVBQUU7QUFDTkMsUUFBQUEsR0FBRyxFQUFFLE1BQ0gsSUFBSUMsT0FBSixDQUFZLE9BQU9DLE9BQVAsRUFBZ0JDLE1BQWhCLEtBQTJCO0FBQ3JDLGNBQUk7QUFDRixrQkFBTVAsS0FBSyxHQUFHLE1BQU1RLEtBQUssQ0FBQ2QsaURBQUQsQ0FBTCxDQUFpQmUsSUFBakIsQ0FBdUJDLFFBQUQsSUFDeENBLFFBQVEsQ0FBQ0MsSUFBVCxFQURrQixDQUFwQjtBQUlBLG1CQUFPTCxPQUFPLENBQUNOLEtBQUQsQ0FBZDtBQUNELFdBTkQsQ0FNRSxPQUFPWSxLQUFQLEVBQWM7QUFDZEMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNGLEtBQXpDO0FBQ0EsbUJBQU9MLE1BQU0sQ0FBQ0ssS0FBRCxDQUFiO0FBQ0Q7QUFDRixTQVhELENBRkk7QUFjTkcsUUFBQUEsTUFBTSxFQUFFO0FBQUVDLFVBQUFBLE1BQU0sRUFBRSxPQUFWO0FBQW1CQyxVQUFBQSxPQUFPLEVBQUU7QUFBNUIsU0FkRjtBQWVOQyxRQUFBQSxPQUFPLEVBQUU7QUFmSDtBQURFLEtBRE47QUFvQk5DLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxFQUFFLEVBQUU7QUFDRkMsUUFBQUEsZ0JBQWdCLEVBQUU7QUFBRUosVUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFEaEI7QUFEQyxLQXBCRDtBQXlCTkwsSUFBQUEsS0FBSyxFQUFFO0FBekJEO0FBUFYsQ0FEaUMsRUFvQ2pDO0FBQ0VLLEVBQUFBLE9BQU8sRUFBRTtBQUNQSyxJQUFBQSxXQUFXLEVBQUU5Qiw4Q0FBTSxDQUFDLENBQUMrQixRQUFELEVBQVdDLEtBQVgsTUFBc0I7QUFDeEN4QixNQUFBQSxLQUFLLEVBQUV3QixLQUFLLENBQUNDO0FBRDJCLEtBQXRCLENBQUQsQ0FEWjtBQUtQQyxJQUFBQSxxQkFBcUIsRUFBRWxDLDhDQUFNLENBQUMsQ0FBQ00sT0FBRCxFQUFVMEIsS0FBVixNQUFxQjtBQUNqREcsTUFBQUE7QUFEaUQsS0FBckIsQ0FBRDtBQUx0QjtBQURYLENBcENpQyxDQUE1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMveHN0b3JlL3N0YXJ0c01hY2hpbmUuanM/ZTJhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3NpZ24sIE1hY2hpbmUgfSBmcm9tIFwieHN0YXRlXCI7XG5pbXBvcnQgeyBTVEFUU19BUEkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBzdGF0c01hY2hpbmUgPSBNYWNoaW5lKFxuICB7XG4gICAgaWQ6IFwic3RhdHNNYWNoaW5lXCIsXG4gICAgaW5pdGlhbDogXCJmZXRjaFN0YXRzXCIsXG4gICAgY29udGV4dDoge1xuICAgICAgY291bnRyaWVzU2VsZWN0ZWQ6IFtdLFxuICAgICAgc3RhdHM6IG51bGwsXG4gICAgfSxcbiAgICBzdGF0ZXM6IHtcbiAgICAgIGZldGNoU3RhdHM6IHtcbiAgICAgICAgaW52b2tlOiB7XG4gICAgICAgICAgc3JjOiAoKSA9PlxuICAgICAgICAgICAgbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZmV0Y2goU1RBVFNfQVBJKS50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShzdGF0cyk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbiBmZXRjaGluZyBzdGF0czogXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgb25Eb25lOiB7IHRhcmdldDogXCJyZWFkeVwiLCBhY3Rpb25zOiBcImFzc2lnblN0YXRzXCIgfSxcbiAgICAgICAgICBvbkVycm9yOiBcImVycm9yXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcmVhZHk6IHtcbiAgICAgICAgb246IHtcbiAgICAgICAgICBDT1VOVFJZX1NFTEVDVEVEOiB7IGFjdGlvbnM6IFwidXBkYXRlU2VsZWN0ZWRDb3VudHJ5XCIgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBlcnJvcjoge30sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGFjdGlvbnM6IHtcbiAgICAgIGFzc2lnblN0YXRzOiBhc3NpZ24oKF9jb250ZXh0LCBldmVudCkgPT4gKHtcbiAgICAgICAgc3RhdHM6IGV2ZW50LmRhdGEsXG4gICAgICB9KSksXG5cbiAgICAgIHVwZGF0ZVNlbGVjdGVkQ291bnRyeTogYXNzaWduKChjb250ZXh0LCBldmVudCkgPT4gKHtcbiAgICAgICAgY29udHJcbiAgICAgIH0pKSBcbiAgICB9LFxuICB9XG4pO1xuIl0sIm5hbWVzIjpbImFzc2lnbiIsIk1hY2hpbmUiLCJTVEFUU19BUEkiLCJzdGF0c01hY2hpbmUiLCJpZCIsImluaXRpYWwiLCJjb250ZXh0IiwiY291bnRyaWVzU2VsZWN0ZWQiLCJzdGF0cyIsInN0YXRlcyIsImZldGNoU3RhdHMiLCJpbnZva2UiLCJzcmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm9uRG9uZSIsInRhcmdldCIsImFjdGlvbnMiLCJvbkVycm9yIiwicmVhZHkiLCJvbiIsIkNPVU5UUllfU0VMRUNURUQiLCJhc3NpZ25TdGF0cyIsIl9jb250ZXh0IiwiZXZlbnQiLCJkYXRhIiwidXBkYXRlU2VsZWN0ZWRDb3VudHJ5IiwiY29udHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/xstore/startsMachine.js\n");

/***/ })

});