/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"./components/layout/Header.js\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/_app */ \"./pages/_app.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Loading */ \"./components/layout/Loading.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_settingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/settingsActions */ \"./store/actions/settingsActions.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/laukey/Documents/projects/GD/components/layout/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n\n  var title = _ref.title,\n      children = _ref.children,\n      toggleLoad = _ref.toggleLoad;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      loading = _useState[0],\n      setLoading = _useState[1]; // false\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      visited = _useState2[0],\n      setVisited = _useState2[1];\n\n  var width;\n\n  if (window.innerWidth > 500) {\n    width = 520;\n  } else {\n    width = window.innerWidth - 1;\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (visited == true) setLoading(false);\n  }, [visited]);\n  var experience = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var onEnd = function onEnd() {\n    experience.current.classList.add(\"active\");\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"layout\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [title, \" - GoDark\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"experience\",\n        ref: experience,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"experience__modal\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            className: \"experience__modal-svg\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            width: \"100%\",\n            height: \"100%\",\n            preserveAspectRatio: \"none\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n              id: \"rectName\",\n              x: \"0\",\n              y: \"0\",\n              fill: \"none\",\n              className: \"experience_rect\",\n              width: width,\n              height: \"300px\",\n              margin: \"10px\",\n              rx: \"3\",\n              ry: \"3\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"experience__modal-title\",\n            children: \"Do you want the full experience?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"experience__modal-buttons\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              className: \"experience__button\",\n              onClick: function onClick() {\n                dispatch((0,_store_actions_settingsActions__WEBPACK_IMPORTED_MODULE_8__.setSettings)({\n                  fullExperience: true\n                }));\n                setVisited(true);\n                setLoading(false);\n                toggleLoad(\"hello i am a toggler\");\n              },\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                className: \"experience__button-svg\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                width: \"100%\",\n                height: \"100%\",\n                preserveAspectRatio: \"none\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                  x: \"0\",\n                  y: \"0\",\n                  fill: \"none\",\n                  width: \"150px\",\n                  height: \"35px\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 88,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"experience__button-content\",\n                children: \"YES\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              className: \"experience__button\",\n              onClick: function onClick() {\n                dispatch((0,_store_actions_settingsActions__WEBPACK_IMPORTED_MODULE_8__.setSettings)({\n                  fullExperience: false\n                }));\n                setVisited(true);\n                setLoading(false);\n              },\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                className: \"experience__button-svg\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                width: \"100%\",\n                height: \"100%\",\n                preserveAspectRatio: \"none\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                  x: \"0\",\n                  y: \"0\",\n                  fill: \"none\",\n                  width: \"150px\",\n                  height: \"35px\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 112,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 105,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"experience__button-content\",\n                children: \"NO\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 114,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_6__.default, {\n        onEnd: onEnd\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 11\n      }, _this), children]\n    }, void 0, true)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Layout, \"09IxFmMNwTPftdUxGXPODgiy92g=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch];\n});\n\n_c = Layout;\n;\nLayout.propTypes = {\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzP2YzNDMiXSwibmFtZXMiOlsiTGF5b3V0IiwidGl0bGUiLCJjaGlsZHJlbiIsInRvZ2dsZUxvYWQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInZpc2l0ZWQiLCJzZXRWaXNpdGVkIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidXNlRWZmZWN0IiwiZXhwZXJpZW5jZSIsInVzZVJlZiIsIm9uRW5kIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldFNldHRpbmdzIiwiZnVsbEV4cGVyaWVuY2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFxQztBQUFBOztBQUFBLE1BQWxDQyxLQUFrQyxRQUFsQ0EsS0FBa0M7QUFBQSxNQUEzQkMsUUFBMkIsUUFBM0JBLFFBQTJCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUNsRCxNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCOztBQURrRCxrQkFFcEJDLCtDQUFRLENBQUMsS0FBRCxDQUZZO0FBQUEsTUFFM0NDLE9BRjJDO0FBQUEsTUFFbENDLFVBRmtDLGlCQUVIOzs7QUFGRyxtQkFJcEJGLCtDQUFRLENBQUMsS0FBRCxDQUpZO0FBQUEsTUFJM0NHLE9BSjJDO0FBQUEsTUFJbENDLFVBSmtDOztBQU1sRCxNQUFJQyxLQUFKOztBQUNBLE1BQUlDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixHQUF4QixFQUE2QjtBQUMzQkYsU0FBSyxHQUFHLEdBQVI7QUFDRCxHQUZELE1BRU87QUFDTEEsU0FBSyxHQUFHQyxNQUFNLENBQUNDLFVB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aWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQge2xvYWRpbmcsIHNldExvYWRpbmd9IGZyb20gXCIuLi8uLi9wYWdlcy9fYXBwXCJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL0xvYWRpbmdcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRTZXR0aW5ncyB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3NldHRpbmdzQWN0aW9uc1wiO1xuXG5jb25zdCBMYXlvdXQgPSAoeyB0aXRsZSwgY2hpbGRyZW4sIHRvZ2dsZUxvYWQgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZmFsc2VcblxuICBjb25zdCBbdmlzaXRlZCwgc2V0VmlzaXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgbGV0IHdpZHRoO1xuICBpZiAod2luZG93LmlubmVyV2lkdGggPiA1MDApIHtcbiAgICB3aWR0aCA9IDUyMDtcbiAgfSBlbHNlIHtcbiAgICB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc2l0ZWQgPT0gdHJ1ZSkgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH0sIFt2aXNpdGVkXSk7XG5cbiAgY29uc3QgZXhwZXJpZW5jZSA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBvbkVuZCA9ICgpID0+IHtcbiAgICBleHBlcmllbmNlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX0gLSBHb0Rhcms8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVyaWVuY2VcIiByZWY9e2V4cGVyaWVuY2V9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBlcmllbmNlX19tb2RhbFwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fbW9kYWwtc3ZnXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICBpZD1cInJlY3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgIHg9XCIwXCJcbiAgICAgICAgICAgICAgICAgIHk9XCIwXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4cGVyaWVuY2VfcmVjdFwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICBtYXJnaW49XCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgIHJ4PVwiM1wiXG4gICAgICAgICAgICAgICAgICByeT1cIjNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fbW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICBEbyB5b3Ugd2FudCB0aGUgZnVsbCBleHBlcmllbmNlP1xuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVyaWVuY2VfX21vZGFsLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHBlcmllbmNlX19idXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsRXhwZXJpZW5jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2l0ZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVMb2FkKFwiaGVsbG8gaSBhbSBhIHRvZ2dsZXJcIik7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fYnV0dG9uLXN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgZmlsbD1cIm5vbmVcIiB3aWR0aD1cIjE1MHB4XCIgaGVpZ2h0PVwiMzVweFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fYnV0dG9uLWNvbnRlbnRcIj5ZRVM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHBlcmllbmNlX19idXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsRXhwZXJpZW5jZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzaXRlZCh0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHBlcmllbmNlX19idXR0b24tc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiBmaWxsPVwibm9uZVwiIHdpZHRoPVwiMTUwcHhcIiBoZWlnaHQ9XCIzNXB4XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBlcmllbmNlX19idXR0b24tY29udGVudFwiPk5PPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExvYWRpbmcgb25FbmQ9e29uRW5kfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTs7XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Layout.js\n");

/***/ })

});