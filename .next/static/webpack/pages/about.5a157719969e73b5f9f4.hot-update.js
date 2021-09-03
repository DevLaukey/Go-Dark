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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"./components/layout/Header.js\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/_app */ \"./pages/_app.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Loading */ \"./components/layout/Loading.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_settingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/settingsActions */ \"./store/actions/settingsActions.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/laukey/Documents/projects/GD/components/layout/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n\n  var title = _ref.title,\n      children = _ref.children;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n  console.log(_pages_app__WEBPACK_IMPORTED_MODULE_5__.loading);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      visited = _useState[0],\n      setVisited = _useState[1];\n\n  var width;\n\n  if (window.innerWidth > 500) {\n    width = 520;\n  } else {\n    width = window.innerWidth - 1;\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (visited == true) (0,_pages_app__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false);\n  }, [visited]);\n  var experience = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var onEnd = function onEnd() {\n    experience.current.classList.add(\"active\");\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"layout\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [title, \" - GoDark\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this), _pages_app__WEBPACK_IMPORTED_MODULE_5__.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"experience\",\n        ref: experience,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"experience__modal\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            className: \"experience__modal-svg\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            width: \"100%\",\n            height: \"100%\",\n            preserveAspectRatio: \"none\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n              id: \"rectName\",\n              x: \"0\",\n              y: \"0\",\n              fill: \"none\",\n              className: \"experience_rect\",\n              width: width,\n              height: \"300px\",\n              margin: \"10px\",\n              rx: \"3\",\n              ry: \"3\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"experience__modal-title\",\n            children: \"Do you want the full experience?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"experience__modal-buttons\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              className: \"experience__button\",\n              onClick: function onClick() {\n                dispatch((0,_store_actions_settingsActions__WEBPACK_IMPORTED_MODULE_8__.setSettings)({\n                  fullExperience: true\n                }));\n                setVisited(true);\n                (0,_pages_app__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false);\n              },\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                className: \"experience__button-svg\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                width: \"100%\",\n                height: \"100%\",\n                preserveAspectRatio: \"none\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                  x: \"0\",\n                  y: \"0\",\n                  fill: \"none\",\n                  width: \"150px\",\n                  height: \"35px\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"experience__button-content\",\n                children: \"YES\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              className: \"experience__button\",\n              onClick: function onClick() {\n                dispatch((0,_store_actions_settingsActions__WEBPACK_IMPORTED_MODULE_8__.setSettings)({\n                  fullExperience: false\n                }));\n                setVisited(true);\n                (0,_pages_app__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false);\n              },\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                className: \"experience__button-svg\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                width: \"100%\",\n                height: \"100%\",\n                preserveAspectRatio: \"none\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                  x: \"0\",\n                  y: \"0\",\n                  fill: \"none\",\n                  width: \"150px\",\n                  height: \"35px\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 110,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 103,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"experience__button-content\",\n                children: \"NO\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 112,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_6__.default, {\n        onEnd: onEnd\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 11\n      }, _this), children]\n    }, void 0, true)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Layout, \"dQHkPJ1shAlZjkscBzGpsb0hxCY=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch];\n});\n\n_c = Layout;\nLayout.propTypes = {\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzP2YzNDMiXSwibmFtZXMiOlsiTGF5b3V0IiwidGl0bGUiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwibG9hZGluZyIsInVzZVN0YXRlIiwidmlzaXRlZCIsInNldFZpc2l0ZWQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ1c2VFZmZlY3QiLCJzZXRMb2FkaW5nIiwiZXhwZXJpZW5jZSIsInVzZVJlZiIsIm9uRW5kIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldFNldHRpbmdzIiwiZnVsbEV4cGVyaWVuY2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDdEMsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsK0NBQVo7O0FBRnNDLGtCQUdSQywrQ0FBUSxDQUFDLEtBQUQsQ0FIQTtBQUFBLE1BRy9CQyxPQUgrQjtBQUFBLE1BR3RCQyxVQUhzQjs7QUFLdEMsTUFBSUMsS0FBSjs7QUFDQSxNQUFJQyxNQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBeEIsRUFBNkI7QUFDM0JGLFNBQUssR0FBRyxHQUFSO0FBQ0QsR0FGRCxNQUVPO0FBQ0xBLFNBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLENBQTVCO0FBQ0Q7O0FBRURDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlMLE9BQU8sSUFBSSxJQUFmLEVBQXFCTSxz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Qyx3QkFEWjtBQUVFLHFCQUFLLEVBQUMsNEJBRlI7QUFHRSxxQkFBSyxFQUFDLE1BSFI7QUFJRSxzQkFBTSxFQUFDLE1BSlQ7QUFLRSxtQ0FBbUIsRUFBQyxNQUx0QjtBQUFBLHVDQU9FO0FBQU0sbUJBQUMsRUFBQyxHQUFSO0FBQVksbUJBQUMsRUFBQyxHQUFkO0FBQWtCLHNCQUFJLEVBQUMsTUFBdkI7QUFBOEIsdUJBQUssRUFBQyxPQUFwQztBQUE0Qyx3QkFBTSxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWJGLGVBc0JFO0FBQUsseUJBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQThFRSw4REFBQyw2Q0FBRDtBQUFTLGFBQUssRUFBRUc7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlFRjtBQUFBLG9CQURNLGdCQWtGTjtBQUFBLDhCQUNFLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVHaEIsUUFGSDtBQUFBLG9CQXZGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStGRCxDQXJIRDs7R0FBTUYsTTtVQUNhSSxvRDs7O0tBRGJKLE07QUF1SE5BLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUI7QUFDakJ2QixPQUFLLEVBQUV3QiwwREFEVTtBQUVqQnZCLFVBQVEsRUFBRXVCLHdEQUFjQztBQUZQLENBQW5CO0FBS0EsK0RBQWUxQixNQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IHtsb2FkaW5nLCBzZXRMb2FkaW5nfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9Mb2FkaW5nXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0U2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zZXR0aW5nc0FjdGlvbnNcIjtcblxuY29uc3QgTGF5b3V0ID0gKHsgdGl0bGUsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zb2xlLmxvZyhsb2FkaW5nKVxuICBjb25zdCBbdmlzaXRlZCwgc2V0VmlzaXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgbGV0IHdpZHRoO1xuICBpZiAod2luZG93LmlubmVyV2lkdGggPiA1MDApIHtcbiAgICB3aWR0aCA9IDUyMDtcbiAgfSBlbHNlIHtcbiAgICB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc2l0ZWQgPT0gdHJ1ZSkgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH0sIFt2aXNpdGVkXSk7XG5cbiAgY29uc3QgZXhwZXJpZW5jZSA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBvbkVuZCA9ICgpID0+IHtcbiAgICBleHBlcmllbmNlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX0gLSBHb0Rhcms8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVyaWVuY2VcIiByZWY9e2V4cGVyaWVuY2V9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBlcmllbmNlX19tb2RhbFwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fbW9kYWwtc3ZnXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICBpZD1cInJlY3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgIHg9XCIwXCJcbiAgICAgICAgICAgICAgICAgIHk9XCIwXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4cGVyaWVuY2VfcmVjdFwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICBtYXJnaW49XCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgIHJ4PVwiM1wiXG4gICAgICAgICAgICAgICAgICByeT1cIjNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fbW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICBEbyB5b3Ugd2FudCB0aGUgZnVsbCBleHBlcmllbmNlP1xuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVyaWVuY2VfX21vZGFsLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHBlcmllbmNlX19idXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsRXhwZXJpZW5jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2l0ZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4cGVyaWVuY2VfX2J1dHRvbi1zdmdcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIGZpbGw9XCJub25lXCIgd2lkdGg9XCIxNTBweFwiIGhlaWdodD1cIjM1cHhcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVyaWVuY2VfX2J1dHRvbi1jb250ZW50XCI+WUVTPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2V0dGluZ3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbEV4cGVyaWVuY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2l0ZWQodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fYnV0dG9uLXN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgZmlsbD1cIm5vbmVcIiB3aWR0aD1cIjE1MHB4XCIgaGVpZ2h0PVwiMzVweFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZV9fYnV0dG9uLWNvbnRlbnRcIj5OTzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMb2FkaW5nIG9uRW5kPXtvbkVuZH0gLz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Layout.js\n");

/***/ })

});