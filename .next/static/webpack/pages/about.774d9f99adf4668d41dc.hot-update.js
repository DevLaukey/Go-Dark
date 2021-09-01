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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"./components/layout/Header.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loading */ \"./components/layout/Loading.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_settingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/settingsActions */ \"./store/actions/settingsActions.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/laukey/Documents/projects/GD/components/layout/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n\n  var title = _ref.title,\n      children = _ref.children;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      visited = _useState2[0],\n      setVisited = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (visited == true) setLoading(false);\n  }, []);\n  var experience = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var onEnd = function onEnd() {\n    experience.current.classList.add('active');\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"layout\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [title, \" - GoDark\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"experience\",\n        ref: experience,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"experience__modal\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            className: \"experience__modal-svg\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            width: \"100%\",\n            height: \"100%\",\n            preserveAspectRatio: \"none\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n              x: \"0\",\n              y: \"0\",\n              fill: \"none\",\n              width: \"520px\",\n              height: \"300px\",\n              rx: \"3\",\n              ry: \"3\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"experience__modal-title\",\n            children: \"Do you want the full experience?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"experience__modal-buttons\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              className: \"experience__button\",\n              onClick: function onClick() {\n                dispatch((0,_store_actions_settingsActions__WEBPACK_IMPORTED_MODULE_7__.setSettings)({\n                  fullExperience: true\n                }));\n                setVisited(true);\n                setLoading(false);\n              },\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                className: \"experience__button-svg\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                width: \"100%\",\n                height: \"100%\",\n                preserveAspectRatio: \"none\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                  x: \"0\",\n                  y: \"0\",\n                  fill: \"none\",\n                  width: \"150px\",\n                  height: \"35px\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"experience__button-content\",\n                children: \"YES\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              className: \"experience__button\",\n              onClick: function onClick() {\n                dispatch((0,_store_actions_settingsActions__WEBPACK_IMPORTED_MODULE_7__.setSettings)({\n                  fullExperience: false\n                }));\n                setVisited(true);\n                setLoading(false);\n              },\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                className: \"experience__button-svg\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                width: \"100%\",\n                height: \"100%\",\n                preserveAspectRatio: \"none\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                  x: \"0\",\n                  y: \"0\",\n                  fill: \"none\",\n                  width: \"150px\",\n                  height: \"35px\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"experience__button-content\",\n                children: \"NO\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 98,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_5__.default, {\n        onEnd: onEnd\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 11\n      }, _this), children]\n    }, void 0, true)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Layout, \"ePs57k8Bm6gpB0VbshByy4qLo50=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch];\n});\n\n_c = Layout;\nLayout.propTypes = {\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzP2YzNDMiXSwibmFtZXMiOlsiTGF5b3V0IiwidGl0bGUiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidmlzaXRlZCIsInNldFZpc2l0ZWQiLCJ1c2VFZmZlY3QiLCJleHBlcmllbmNlIiwidXNlUmVmIiwib25FbmQiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0U2V0dGluZ3MiLCJmdWxsRXhwZXJpZW5jZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUN0QyxNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCOztBQURzQyxrQkFFUkMsK0NBQVEsQ0FBQyxLQUFELENBRkE7QUFBQSxNQUUvQkMsT0FGK0I7QUFBQSxNQUV0QkMsVUFGc0I7O0FBQUEsbUJBR1JGLCtDQUFRLEVBSEE7QUFBQSxNQUcvQkcsT0FIK0I7QUFBQSxNQUd0QkMsVUFIc0I7O0FBS3RDQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRixPQUFPLElBQUksSUFBZixFQUNFRCxVQUFVLENBQUMsS0FBRCxDQUFWO0FBRUgsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQUtBLE1BQU1JLFVBQVUsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQXpCOztBQUVBLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEJGLGNBQVUsQ0FBQ0csT0FBWCxDQUFtQkMsU0FBbkIsQ0FBNkJDLEdBQTdCLENB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QUEsdUJBWkYsZUFvQkU7QUFBSyx5QkFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBdUVFLDhEQUFDLDZDQUFEO0FBQVMsYUFBSyxFQUFFTTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkVGO0FBQUEsb0JBRE0sZ0JBMkVOO0FBQUEsOEJBQ0UsOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUdYLFFBRkg7QUFBQSxvQkFoRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3RkQsQ0F4R0Q7O0dBQU1GLE07VUFDYUksb0Q7OztLQURiSixNO0FBMEdOQSxNQUFNLENBQUNtQixTQUFQLEdBQW1CO0FBQ2pCbEIsT0FBSyxFQUFFbUIsMERBRFU7QUFFakJsQixVQUFRLEVBQUVrQix3REFBY0M7QUFGUCxDQUFuQjtBQUtBLCtEQUFlckIsTUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXRTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvc2V0dGluZ3NBY3Rpb25zJztcblxuY29uc3QgTGF5b3V0ID0gKHsgdGl0bGUsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt2aXNpdGVkLCBzZXRWaXNpdGVkXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmlzaXRlZCA9PSB0cnVlKVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICBcbiAgfSwgW10pXG4gIGNvbnN0IGV4cGVyaWVuY2UgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3Qgb25FbmQgPSAoKSA9PiB7XG4gICAgZXhwZXJpZW5jZS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9O1xuIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX0gLSBHb0Rhcms8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVyaWVuY2VcIiByZWY9e2V4cGVyaWVuY2V9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBlcmllbmNlX19tb2RhbFwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fbW9kYWwtc3ZnXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCI+XG4gICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgIHg9XCIwXCJcbiAgICAgICAgICAgICAgICAgIHk9XCIwXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTIwcHhcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgcng9XCIzXCJcbiAgICAgICAgICAgICAgICAgIHJ5PVwiM1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJleHBlcmllbmNlX19tb2RhbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIERvIHlvdSB3YW50IHRoZSBmdWxsIGV4cGVyaWVuY2U/XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fbW9kYWwtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4cGVyaWVuY2VfX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgICAgICAgICAgIHNldFNldHRpbmdzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxFeHBlcmllbmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG5cblxuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpdGVkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHBlcmllbmNlX19idXR0b24tc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgZmlsbD1cIm5vbmVcIiB3aWR0aD1cIjE1MHB4XCIgaGVpZ2h0PVwiMzVweFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fYnV0dG9uLWNvbnRlbnRcIj5ZRVM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHBlcmllbmNlX19idXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsRXhwZXJpZW5jZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzaXRlZCh0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHBlcmllbmNlX19idXR0b24tc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgZmlsbD1cIm5vbmVcIiB3aWR0aD1cIjE1MHB4XCIgaGVpZ2h0PVwiMzVweFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fYnV0dG9uLWNvbnRlbnRcIj5OTzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMb2FkaW5nIG9uRW5kPXtvbkVuZH0gLz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Layout.js\n");

/***/ })

});