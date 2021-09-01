/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"./components/layout/Header.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loading */ \"./components/layout/Loading.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_settingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/settingsActions */ \"./store/actions/settingsActions.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/laukey/Documents/projects/GD/components/layout/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n\n  var title = _ref.title,\n      children = _ref.children;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (!dispatch) setLoading(true);\n  }, []);\n  var experience = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var onEnd = function onEnd() {\n    experience.current.classList.add('active');\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"layout\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [title, \" - GoDark\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"experience\",\n        ref: experience,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"experience__modal\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            className: \"experience__modal-svg\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            width: \"100%\",\n            height: \"100%\",\n            preserveAspectRatio: \"none\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n              x: \"0\",\n              y: \"0\",\n              fill: \"none\",\n              width: \"520px\",\n              height: \"300px\",\n              rx: \"3\",\n              ry: \"3\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"experience__modal-title\",\n            children: \"Do you want the full experience?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"experience__modal-buttons\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              className: \"experience__button\",\n              onClick: function onClick() {\n                dispatch((0,_store_actions_settingsActions__WEBPACK_IMPORTED_MODULE_7__.setSettings)({\n                  fullExperience: true\n                }));\n                setLoading(false);\n              },\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                className: \"experience__button-svg\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                width: \"100%\",\n                height: \"100%\",\n                preserveAspectRatio: \"none\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                  x: \"0\",\n                  y: \"0\",\n                  fill: \"none\",\n                  width: \"150px\",\n                  height: \"35px\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"experience__button-content\",\n                children: \"YES\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 73,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              className: \"experience__button\",\n              onClick: function onClick() {\n                dispatch((0,_store_actions_settingsActions__WEBPACK_IMPORTED_MODULE_7__.setSettings)({\n                  fullExperience: false\n                }));\n                setLoading(false);\n              },\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                className: \"experience__button-svg\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                width: \"100%\",\n                height: \"100%\",\n                preserveAspectRatio: \"none\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                  x: \"0\",\n                  y: \"0\",\n                  fill: \"none\",\n                  width: \"150px\",\n                  height: \"35px\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 92,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"experience__button-content\",\n                children: \"NO\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 94,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_5__.default, {\n        onEnd: onEnd\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 11\n      }, _this), children]\n    }, void 0, true)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Layout, \"rxKel70pRHwqhMb/bzB1APBD/kk=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch];\n});\n\n_c = Layout;\nLayout.propTypes = {\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzP2YzNDMiXSwibmFtZXMiOlsiTGF5b3V0IiwidGl0bGUiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZXhwZXJpZW5jZSIsInVzZVJlZiIsIm9uRW5kIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldFNldHRpbmdzIiwiZnVsbEV4cGVyaWVuY2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDdEMsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFEc0Msa0JBRVJDLCtDQUFRLENBQUMsS0FBRCxDQUZBO0FBQUEsTUFFL0JDLE9BRitCO0FBQUEsTUFFdEJDLFVBRnNCOztBQUl0Q0Msa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDTCxRQUFMLEVBQ0VJLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFFSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBS0EsTUFBTUUsVUFBVSxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBekI7O0FBRUEsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQkYsY0FBVSxDQUFDRyxPQUFYLENBQW1CQyxTQUFuQixDQUE2QkMsR0FBN0IsQ0FBaUMsUUFBakM7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFvRUUsOERBQUMsNkNBQUQ7QUFBUyxhQUFLLEVBQUVJO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwRUY7QUFBQSxvQkFETSxnQkF3RU47QUFBQSw4QkFDRSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR1QsUUFGSDtBQUFBLG9CQTdFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFGRCxDQXBHRDs7R0FBTUYsTTtVQUNhSSxvRDs7O0tBRGJKLE07QUFzR05BLE1BQU0sQ0FBQ2lCLFNBQVAsR0FBbUI7QUFDakJoQixPQUFLLEVBQUVpQiwwREFEVTtBQUVqQmhCLFVBQVEsRUFBRWdCLHdEQUFjQztBQUZQLENBQW5CO0FBS0EsK0RBQWVuQixNQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNldFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9zZXR0aW5nc0FjdGlvbnMnO1xuXG5jb25zdCBMYXlvdXQgPSAoeyB0aXRsZSwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkaXNwYXRjaClcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICBcbiAgfSwgW10pXG4gIGNvbnN0IGV4cGVyaWVuY2UgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3Qgb25FbmQgPSAoKSA9PiB7XG4gICAgZXhwZXJpZW5jZS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9O1xuIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX0gLSBHb0Rhcms8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVyaWVuY2VcIiByZWY9e2V4cGVyaWVuY2V9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBlcmllbmNlX19tb2RhbFwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fbW9kYWwtc3ZnXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCI+XG4gICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgIHg9XCIwXCJcbiAgICAgICAgICAgICAgICAgIHk9XCIwXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTIwcHhcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgcng9XCIzXCJcbiAgICAgICAgICAgICAgICAgIHJ5PVwiM1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJleHBlcmllbmNlX19tb2RhbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIERvIHlvdSB3YW50IHRoZSBmdWxsIGV4cGVyaWVuY2U/XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fbW9kYWwtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4cGVyaWVuY2VfX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgICAgICAgICAgIHNldFNldHRpbmdzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxFeHBlcmllbmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fYnV0dG9uLXN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIGZpbGw9XCJub25lXCIgd2lkdGg9XCIxNTBweFwiIGhlaWdodD1cIjM1cHhcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVyaWVuY2VfX2J1dHRvbi1jb250ZW50XCI+WUVTPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2V0dGluZ3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbEV4cGVyaWVuY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fYnV0dG9uLXN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIGZpbGw9XCJub25lXCIgd2lkdGg9XCIxNTBweFwiIGhlaWdodD1cIjM1cHhcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVyaWVuY2VfX2J1dHRvbi1jb250ZW50XCI+Tk88L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TG9hZGluZyBvbkVuZD17b25FbmR9IC8+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Layout.js\n");

/***/ })

});