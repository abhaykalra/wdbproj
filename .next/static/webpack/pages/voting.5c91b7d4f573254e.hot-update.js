"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/voting",{

/***/ "./src/components/vote-card.tsx":
/*!**************************************!*\
  !*** ./src/components/vote-card.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar VoteCard = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref[0], setscore = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        width: 2000,\n        height: 400,\n        borderRadius: 10,\n        mr: 100,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                src: props.image,\n                width: 300,\n                height: 144\n            }, void 0, false, {\n                fileName: \"/Users/abhay/Desktop/wdbproj/tp-fa22-frontend/src/components/vote-card.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                    paddingLeft: 130,\n                    paddingTop: 2,\n                    paddingBottom: 2,\n                    backgroundColor: \"#F1EDDF\",\n                    width: 300,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {\n                        backgroundColor: \"#F1EDDF\",\n                        gap: 2,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                boxShadow: \"inherit\",\n                                rounded: \"2xl\",\n                                dropShadow: \"2xl\",\n                                backgroundColor: \"#EFDCB6\",\n                                onClick: function() {\n                                    return setscore(score + 1);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronUpIcon, {\n                                    fontSize: \"4xl\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhay/Desktop/wdbproj/tp-fa22-frontend/src/components/vote-card.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/abhay/Desktop/wdbproj/tp-fa22-frontend/src/components/vote-card.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                backgroundColor: \"#EFDCB6\",\n                                rounded: \"2xl\",\n                                onClick: function() {\n                                    return setscore(score - 1);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {\n                                    fontSize: \"4xl\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhay/Desktop/wdbproj/tp-fa22-frontend/src/components/vote-card.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/abhay/Desktop/wdbproj/tp-fa22-frontend/src/components/vote-card.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhay/Desktop/wdbproj/tp-fa22-frontend/src/components/vote-card.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/abhay/Desktop/wdbproj/tp-fa22-frontend/src/components/vote-card.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/abhay/Desktop/wdbproj/tp-fa22-frontend/src/components/vote-card.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abhay/Desktop/wdbproj/tp-fa22-frontend/src/components/vote-card.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(VoteCard, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = VoteCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoteCard);\nvar _c;\n$RefreshReg$(_c, \"VoteCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy92b3RlLWNhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBQXVHO0FBQ3hDO0FBRzlCO0FBTWpDLElBQU1RLFFBQVEsR0FBRyxTQUFDQyxLQUFxQyxFQUFLOztJQUN4RCxJQUF5QkYsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUE3QkcsS0FBSyxHQUFhSCxHQUFXLEdBQXhCLEVBQUNJLFFBQVEsR0FBSUosR0FBVyxHQUFmO0lBRXZCLHFCQUVFLDhEQUFDUCxpREFBRztRQUFDWSxLQUFLLEVBQUUsSUFBSTtRQUFFQyxNQUFNLEVBQUUsR0FBRztRQUFFQyxZQUFZLEVBQUUsRUFBRTtRQUFFQyxFQUFFLEVBQUUsR0FBRzs7MEJBQ3BELDhEQUFDZCxtREFBSztnQkFBQ2UsR0FBRyxFQUFHUCxLQUFLLENBQUNRLEtBQUs7Z0JBQ3BCTCxLQUFLLEVBQUUsR0FBRztnQkFDVkMsTUFBTSxFQUFFLEdBQUc7Ozs7O3FCQUNUOzBCQUNOLDhEQUFDYixpREFBRzswQkFDQSw0RUFBQ0Usa0RBQUk7b0JBQUNnQixXQUFXLEVBQUUsR0FBRztvQkFBRUMsVUFBVSxFQUFFLENBQUM7b0JBQUVDLGFBQWEsRUFBRSxDQUFDO29CQUFFQyxlQUFlLEVBQUMsU0FBUztvQkFBQ1QsS0FBSyxFQUFFLEdBQUc7OEJBQ3pGLDRFQUFDUix5REFBVzt3QkFBQ2lCLGVBQWUsRUFBQyxTQUFTO3dCQUFDQyxHQUFHLEVBQUUsQ0FBQzs7MENBQ3pDLDhEQUFDbkIsb0RBQU07Z0NBQUNvQixTQUFTLEVBQUMsU0FBUztnQ0FBQ0MsT0FBTyxFQUFDLEtBQUs7Z0NBQUNDLFVBQVUsRUFBQyxLQUFLO2dDQUFDSixlQUFlLEVBQUMsU0FBUztnQ0FBQ0ssT0FBTyxFQUFFOzJDQUFNZixRQUFRLENBQUNELEtBQUssR0FBQyxDQUFDLENBQUM7aUNBQUE7MENBQ2pILDRFQUFDSiwyREFBYTtvQ0FBQ3FCLFFBQVEsRUFBQyxLQUFLOzs7Ozt5Q0FBRzs7Ozs7cUNBQzNCOzBDQUVULDhEQUFDeEIsb0RBQU07Z0NBQUNrQixlQUFlLEVBQUMsU0FBUztnQ0FBQ0csT0FBTyxFQUFDLEtBQUs7Z0NBQUNFLE9BQU8sRUFBRTsyQ0FBTWYsUUFBUSxDQUFDRCxLQUFLLEdBQUMsQ0FBQyxDQUFDO2lDQUFBOzBDQUM1RSw0RUFBQ0wsNkRBQWU7b0NBQUNzQixRQUFRLEVBQUMsS0FBSzs7Ozs7eUNBQUU7Ozs7O3FDQUM1Qjs7Ozs7OzZCQUNDOzs7Ozt5QkFDWDs7Ozs7cUJBQ0w7Ozs7OzthQUNGLENBT1I7Q0FDSDtHQS9CS25CLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQWlDZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3ZvdGUtY2FyZC50c3g/NjI1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEltYWdlLCBIZWFkaW5nLCBUZXh0LCBIU3RhY2ssIFNwYWNlciwgRmxleCwgQnV0dG9uLCBCdXR0b25Hcm91cH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7Q2hldnJvbkRvd25JY29uLENoZXZyb25VcEljb259IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBDYXJkQ29udGVudCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIHByb3BzIHtcbiAgICBpbWFnZTogc3RyaW5nXG5cbn1cbmNvbnN0IFZvdGVDYXJkID0gKHByb3BzOiB7IGltYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7IH0pID0+IHtcbiAgICBjb25zdCBbc2NvcmUsc2V0c2NvcmVdID0gdXNlU3RhdGUoMCkgXG5cbiAgcmV0dXJuIChcbiAgICBcbiAgICA8Qm94IHdpZHRoPXsyMDAwfSBoZWlnaHQ9ezQwMH0gYm9yZGVyUmFkaXVzPXsxMH0gbXI9ezEwMH0+XG4gICAgICAgIDxJbWFnZSBzcmM9IHtwcm9wcy5pbWFnZX0gXG4gICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgaGVpZ2h0PXsxNDR9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEZsZXggcGFkZGluZ0xlZnQ9ezEzMH0gcGFkZGluZ1RvcD17Mn0gcGFkZGluZ0JvdHRvbT17Mn0gYmFja2dyb3VuZENvbG9yPScjRjFFRERGJyB3aWR0aD17MzAwfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgYmFja2dyb3VuZENvbG9yPScjRjFFRERGJyBnYXA9ezJ9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJveFNoYWRvdz0naW5oZXJpdCcgcm91bmRlZD0nMnhsJyBkcm9wU2hhZG93PScyeGwnIGJhY2tncm91bmRDb2xvcj0nI0VGRENCNicgb25DbGljaz17KCkgPT4gc2V0c2NvcmUoc2NvcmUrMSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25VcEljb24gZm9udFNpemU9JzR4bCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYmFja2dyb3VuZENvbG9yPScjRUZEQ0I2JyByb3VuZGVkPScyeGwnIG9uQ2xpY2s9eygpID0+IHNldHNjb3JlKHNjb3JlLTEpfT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd25JY29uIGZvbnRTaXplPSc0eGwnLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cblxuICAgICAgIFxuXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIFxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWb3RlQ2FyZDtcbiJdLCJuYW1lcyI6WyJCb3giLCJJbWFnZSIsIkZsZXgiLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIkNoZXZyb25Eb3duSWNvbiIsIkNoZXZyb25VcEljb24iLCJ1c2VTdGF0ZSIsIlZvdGVDYXJkIiwicHJvcHMiLCJzY29yZSIsInNldHNjb3JlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJtciIsInNyYyIsImltYWdlIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImJhY2tncm91bmRDb2xvciIsImdhcCIsImJveFNoYWRvdyIsInJvdW5kZWQiLCJkcm9wU2hhZG93Iiwib25DbGljayIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/vote-card.tsx\n"));

/***/ })

});