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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"./components/layout/Header.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loading */ \"./components/layout/Loading.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_settingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/settingsActions */ \"./store/actions/settingsActions.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/laukey/Documents/projects/GD/components/layout/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n\n  var title = _ref.title,\n      children = _ref.children;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      visited = _useState2[0],\n      setVisited = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (visited == true) setLoading(false);\n  }, [visited]);\n  var experience = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var onEnd = function onEnd() {\n    experience.current.classList.add('active');\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"layout\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [title, \" - GoDark\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"experience\",\n        ref: experience,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"experience__modal\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            className: \"experience__modal-svg\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            width: \"100%\",\n            height: \"100%\",\n            preserveAspectRatio: \"none\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n              x: \"0\",\n              y: \"0\",\n              fill: \"none\",\n              width: \"520px\",\n              height: \"300px\",\n              rx: \"3\",\n              ry: \"3\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"experience__modal-title\",\n            children: \"Do you want the full experience?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"experience__modal-buttons\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              className: \"experience__button\",\n              onClick: function onClick() {\n                dispatch((0,_store_actions_settingsActions__WEBPACK_IMPORTED_MODULE_7__.setSettings)({\n                  fullExperience: true\n                }));\n                setVisited(true);\n                setLoading(false);\n              },\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                className: \"experience__button-svg\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                width: \"100%\",\n                height: \"100%\",\n                preserveAspectRatio: \"none\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                  x: \"0\",\n                  y: \"0\",\n                  fill: \"none\",\n                  width: \"150px\",\n                  height: \"35px\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"experience__button-content\",\n                children: \"YES\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              className: \"experience__button\",\n              onClick: function onClick() {\n                dispatch((0,_store_actions_settingsActions__WEBPACK_IMPORTED_MODULE_7__.setSettings)({\n                  fullExperience: false\n                }));\n                setVisited(true);\n                setLoading(false);\n              },\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                className: \"experience__button-svg\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                width: \"100%\",\n                height: \"100%\",\n                preserveAspectRatio: \"none\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                  x: \"0\",\n                  y: \"0\",\n                  fill: \"none\",\n                  width: \"150px\",\n                  height: \"35px\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"experience__button-content\",\n                children: \"NO\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 98,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_5__.default, {\n        onEnd: onEnd\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 11\n      }, _this), children]\n    }, void 0, true)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Layout, \"fGaAp6qpyw/FYI2wudhRGbH2CJM=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch];\n});\n\n_c = Layout;\nLayout.propTypes = {\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzP2YzNDMiXSwibmFtZXMiOlsiTGF5b3V0IiwidGl0bGUiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidmlzaXRlZCIsInNldFZpc2l0ZWQiLCJ1c2VFZmZlY3QiLCJleHBlcmllbmNlIiwidXNlUmVmIiwib25FbmQiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0U2V0dGluZ3MiLCJmdWxsRXhwZXJpZW5jZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUN0QyxNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCOztBQURzQyxrQkFFUkMsK0NBQVEsQ0FBQyxJQUFELENBRkE7QUFBQSxNQUUvQkMsT0FGK0I7QUFBQSxNQUV0QkMsVUFGc0I7O0FBQUEsbUJBR1JGLCtDQUFRLEVBSEE7QUFBQSxNQUcvQkcsT0FIK0I7QUFBQSxNQUd0QkMsVUFIc0I7O0FBS3RDQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRixPQUFPLElBQUksSUFBZixFQUNFRCxVQUFVLENBQUMsS0FBRCxDQUFWO0FBRUgsR0FKUSxFQUlOLENBQUNDLE9BQUQsQ0FKTSxDQUFUO0FBS0EsTUFBTUcsVUFBVSxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBekI7O0FBRUEsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQkYsY0FBVSxDQUFDRyxPQUFYLENBQW1CQyxTQUFuQixDQUE2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QUFBO0FBQUE7QUFBQSx1QkFaRixlQW9CRTtBQUFLLHlCQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUF1RUUsOERBQUMsNkNBQUQ7QUFBUyxhQUFLLEVBQUVNO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2RUY7QUFBQSxvQkFETSxnQkEyRU47QUFBQSw4QkFDRSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR1gsUUFGSDtBQUFBLG9CQWhGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdGRCxDQXhHRDs7R0FBTUYsTTtVQUNhSSxvRDs7O0tBRGJKLE07QUEwR05BLE1BQU0sQ0FBQ21CLFNBQVAsR0FBbUI7QUFDakJsQixPQUFLLEVBQUVtQiwwREFEVTtBQUVqQmxCLFVBQVEsRUFBRWtCLHdEQUFjQztBQUZQLENBQW5CO0FBS0EsK0RBQWVyQixNQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNldFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9zZXR0aW5nc0FjdGlvbnMnO1xuXG5jb25zdCBMYXlvdXQgPSAoeyB0aXRsZSwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdmlzaXRlZCwgc2V0VmlzaXRlZF0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc2l0ZWQgPT0gdHJ1ZSlcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgXG4gIH0sIFt2aXNpdGVkXSlcbiAgY29uc3QgZXhwZXJpZW5jZSA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBvbkVuZCA9ICgpID0+IHtcbiAgICBleHBlcmllbmNlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH07XG4gXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfSAtIEdvRGFyazwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZVwiIHJlZj17ZXhwZXJpZW5jZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVyaWVuY2VfX21vZGFsXCI+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHBlcmllbmNlX19tb2RhbC1zdmdcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgeD1cIjBcIlxuICAgICAgICAgICAgICAgICAgeT1cIjBcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MjBweFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICByeD1cIjNcIlxuICAgICAgICAgICAgICAgICAgcnk9XCIzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImV4cGVyaWVuY2VfX21vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgRG8geW91IHdhbnQgdGhlIGZ1bGwgZXhwZXJpZW5jZT9cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBlcmllbmNlX19tb2RhbC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2V0dGluZ3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbEV4cGVyaWVuY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2l0ZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4cGVyaWVuY2VfX2J1dHRvbi1zdmdcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiBmaWxsPVwibm9uZVwiIHdpZHRoPVwiMTUwcHhcIiBoZWlnaHQ9XCIzNXB4XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBlcmllbmNlX19idXR0b24tY29udGVudFwiPllFUzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4cGVyaWVuY2VfX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgICAgICAgICAgIHNldFNldHRpbmdzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxFeHBlcmllbmNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpdGVkKHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4cGVyaWVuY2VfX2J1dHRvbi1zdmdcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiBmaWxsPVwibm9uZVwiIHdpZHRoPVwiMTUwcHhcIiBoZWlnaHQ9XCIzNXB4XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBlcmllbmNlX19idXR0b24tY29udGVudFwiPk5PPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExvYWRpbmcgb25FbmQ9e29uRW5kfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Layout.js\n");

/***/ })

});