"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/player/AudioPlayer.jsx":
/*!***********************************************!*\
  !*** ./src/components/player/AudioPlayer.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AudioPlayer\": function() { return /* binding */ AudioPlayer; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AudioProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/AudioProvider */ \"./src/components/AudioProvider.jsx\");\n/* harmony import */ var _components_player_MuteButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/player/MuteButton */ \"./src/components/player/MuteButton.jsx\");\n/* harmony import */ var _components_player_PlayButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/player/PlayButton */ \"./src/components/player/PlayButton.jsx\");\n/* harmony import */ var _components_player_Slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/player/Slider */ \"./src/components/player/Slider.jsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction parseTime(seconds) {\n    var hours = Math.floor(seconds / 3600);\n    var minutes = Math.floor((seconds - hours * 3600) / 60);\n    seconds = seconds - hours * 3600 - minutes * 60;\n    return [\n        hours,\n        minutes,\n        seconds\n    ];\n}\nfunction formatHumanTime(seconds) {\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(parseTime(seconds), 3), h = ref[0], m = ref[1], s = ref[2];\n    return \"\".concat(h, \" hour\").concat(h === 1 ? \"\" : \"s\", \", \").concat(m, \" minute\").concat(m === 1 ? \"\" : \"s\", \", \").concat(s, \" second\").concat(s === 1 ? \"\" : \"s\");\n}\nfunction AudioPlayer() {\n    _s();\n    var player = (0,_components_AudioProvider__WEBPACK_IMPORTED_MODULE_3__.useAudioPlayer)();\n    var wasPlayingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(player.currentTime), currentTime = ref[0], setCurrentTime = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCurrentTime(null);\n    }, [\n        player.currentTime\n    ]);\n    if (!player.meta) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-6 bg-white/90 py-4 px-4 shadow shadow-slate-200/80 ring-1 ring-slate-900/5 backdrop-blur-sm md:px-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:block\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_player_PlayButton__WEBPACK_IMPORTED_MODULE_5__.PlayButton, {\n                    player: player,\n                    size: \"medium\"\n                }, void 0, false, {\n                    fileName: \"/Users/mtodd/Documents/GitHub/mccarthy-trenching-react/src/components/player/AudioPlayer.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mtodd/Documents/GitHub/mccarthy-trenching-react/src/components/player/AudioPlayer.jsx\",\n                lineNumber: 40,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-[env(safe-area-inset-bottom)] flex flex-1 flex-col gap-3 overflow-hidden p-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"truncate text-center text-sm font-bold leading-6 md:text-left\",\n                        children: player.meta.title\n                    }, void 0, false, {\n                        fileName: \"/Users/mtodd/Documents/GitHub/mccarthy-trenching-react/src/components/player/AudioPlayer.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between gap-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center md:hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_player_MuteButton__WEBPACK_IMPORTED_MODULE_4__.MuteButton, {\n                                    player: player\n                                }, void 0, false, {\n                                    fileName: \"/Users/mtodd/Documents/GitHub/mccarthy-trenching-react/src/components/player/AudioPlayer.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 7\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mtodd/Documents/GitHub/mccarthy-trenching-react/src/components/player/AudioPlayer.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_player_PlayButton__WEBPACK_IMPORTED_MODULE_5__.PlayButton, {\n                                    player: player,\n                                    size: \"small\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mtodd/Documents/GitHub/mccarthy-trenching-react/src/components/player/AudioPlayer.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 7\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mtodd/Documents/GitHub/mccarthy-trenching-react/src/components/player/AudioPlayer.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-6 md:hidden\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mtodd/Documents/GitHub/mccarthy-trenching-react/src/components/player/AudioPlayer.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_player_Slider__WEBPACK_IMPORTED_MODULE_6__.Slider, {\n                                label: \"Current time\",\n                                maxValue: player.duration,\n                                step: 1,\n                                value: [\n                                    currentTime !== null && currentTime !== void 0 ? currentTime : player.currentTime\n                                ],\n                                onChange: function(param) {\n                                    var _param = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(param, 1), v = _param[0];\n                                    return setCurrentTime(v);\n                                },\n                                onChangeEnd: function(value) {\n                                    player.seek(value);\n                                    if (wasPlayingRef.current) {\n                                        player.play();\n                                    }\n                                },\n                                numberFormatter: {\n                                    format: formatHumanTime\n                                },\n                                onChangeStart: function() {\n                                    wasPlayingRef.current = player.playing;\n                                    player.pause();\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/mtodd/Documents/GitHub/mccarthy-trenching-react/src/components/player/AudioPlayer.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"hidden items-center md:flex\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_player_MuteButton__WEBPACK_IMPORTED_MODULE_4__.MuteButton, {\n                                        player: player\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mtodd/Documents/GitHub/mccarthy-trenching-react/src/components/player/AudioPlayer.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 8\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mtodd/Documents/GitHub/mccarthy-trenching-react/src/components/player/AudioPlayer.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 7\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mtodd/Documents/GitHub/mccarthy-trenching-react/src/components/player/AudioPlayer.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mtodd/Documents/GitHub/mccarthy-trenching-react/src/components/player/AudioPlayer.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mtodd/Documents/GitHub/mccarthy-trenching-react/src/components/player/AudioPlayer.jsx\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mtodd/Documents/GitHub/mccarthy-trenching-react/src/components/player/AudioPlayer.jsx\",\n        lineNumber: 39,\n        columnNumber: 3\n    }, this);\n}\n_s(AudioPlayer, \"rkmhGgMpywIoL/RmSeUZOfdv+BQ=\", false, function() {\n    return [\n        _components_AudioProvider__WEBPACK_IMPORTED_MODULE_3__.useAudioPlayer\n    ];\n});\n_c = AudioPlayer;\nvar _c;\n$RefreshReg$(_c, \"AudioPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wbGF5ZXIvQXVkaW9QbGF5ZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBbUQ7QUFDdkI7QUFFK0I7QUFDQTtBQUNBO0FBQ1I7QUFFbkQsU0FBU1EsU0FBUyxDQUFDQyxPQUFPLEVBQUU7SUFDM0IsSUFBSUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QyxJQUFJSSxPQUFPLEdBQUdGLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUNILE9BQU8sR0FBR0MsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN2REQsT0FBTyxHQUFHQSxPQUFPLEdBQUdDLEtBQUssR0FBRyxJQUFJLEdBQUdHLE9BQU8sR0FBRyxFQUFFO0lBQy9DLE9BQU87UUFBQ0gsS0FBSztRQUFFRyxPQUFPO1FBQUVKLE9BQU87S0FBQztDQUNoQztBQUVELFNBQVNLLGVBQWUsQ0FBQ0wsT0FBTyxFQUFFO0lBQ2pDLElBQWdCRCxHQUFrQixvRkFBbEJBLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDLE1BQTdCTSxDQUFDLEdBQVVQLEdBQWtCLEdBQTVCLEVBQUVRLENBQUMsR0FBT1IsR0FBa0IsR0FBekIsRUFBRVMsQ0FBQyxHQUFJVCxHQUFrQixHQUF0QjtJQUNaLE9BQU8sRUFBQyxDQUFXTyxNQUFrQixDQUEzQkEsQ0FBQyxFQUFDLE9BQUssQ0FBcUIsQ0FBSUMsTUFBQyxDQUF4QkQsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFDLElBQUUsQ0FBSSxDQUMzQ0MsTUFBa0IsQ0FEdUJBLENBQUMsRUFBQyxTQUFPLENBRXBELENBQU1DLE1BQUMsQ0FETEQsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUNsQixJQUFFLENBQUksQ0FBU0MsTUFBa0IsQ0FBN0JBLENBQUMsRUFBQyxTQUFPLENBQXFCLFFBQW5CQSxDQUFDLEtB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Ozs7Ozs7WUFDRCxDQUNOO0NBQ0Q7R0EzRGVELFdBQVc7O1FBQ2JkLHFFQUFjOzs7QUFEWmMsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wbGF5ZXIvQXVkaW9QbGF5ZXIuanN4P2I4Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCB7IHVzZUF1ZGlvUGxheWVyIH0gZnJvbSAnQC9jb21wb25lbnRzL0F1ZGlvUHJvdmlkZXInXG5pbXBvcnQgeyBNdXRlQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3BsYXllci9NdXRlQnV0dG9uJ1xuaW1wb3J0IHsgUGxheUJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9wbGF5ZXIvUGxheUJ1dHRvbidcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9wbGF5ZXIvU2xpZGVyJ1xuXG5mdW5jdGlvbiBwYXJzZVRpbWUoc2Vjb25kcykge1xuXHRsZXQgaG91cnMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKVxuXHRsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoKHNlY29uZHMgLSBob3VycyAqIDM2MDApIC8gNjApXG5cdHNlY29uZHMgPSBzZWNvbmRzIC0gaG91cnMgKiAzNjAwIC0gbWludXRlcyAqIDYwXG5cdHJldHVybiBbaG91cnMsIG1pbnV0ZXMsIHNlY29uZHNdXG59XG5cbmZ1bmN0aW9uIGZvcm1hdEh1bWFuVGltZShzZWNvbmRzKSB7XG5cdGxldCBbaCwgbSwgc10gPSBwYXJzZVRpbWUoc2Vjb25kcylcblx0cmV0dXJuIGAke2h9IGhvdXIke2ggPT09IDEgPyAnJyA6ICdzJ30sICR7bX0gbWludXRlJHtcblx0XHRtID09PSAxID8gJycgOiAncydcblx0fSwgJHtzfSBzZWNvbmQke3MgPT09IDEgPyAnJyA6ICdzJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBdWRpb1BsYXllcigpIHtcblx0bGV0IHBsYXllciA9IHVzZUF1ZGlvUGxheWVyKClcblxuXHRsZXQgd2FzUGxheWluZ1JlZiA9IHVzZVJlZihmYWxzZSlcblxuXHRsZXQgW2N1cnJlbnRUaW1lLCBzZXRDdXJyZW50VGltZV0gPSB1c2VTdGF0ZShwbGF5ZXIuY3VycmVudFRpbWUpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRDdXJyZW50VGltZShudWxsKVxuXHR9LCBbcGxheWVyLmN1cnJlbnRUaW1lXSlcblxuXHRpZiAoIXBsYXllci5tZXRhKSB7XG5cdFx0cmV0dXJuIG51bGxcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNiBiZy13aGl0ZS85MCBweS00IHB4LTQgc2hhZG93IHNoYWRvdy1zbGF0ZS0yMDAvODAgcmluZy0xIHJpbmctc2xhdGUtOTAwLzUgYmFja2Ryb3AtYmx1ci1zbSBtZDpweC02XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPlxuXHRcdFx0XHQ8UGxheUJ1dHRvbiBwbGF5ZXI9e3BsYXllcn0gc2l6ZT1cIm1lZGl1bVwiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItW2VudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKV0gZmxleCBmbGV4LTEgZmxleC1jb2wgZ2FwLTMgb3ZlcmZsb3ctaGlkZGVuIHAtMVwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0cnVuY2F0ZSB0ZXh0LWNlbnRlciB0ZXh0LXNtIGZvbnQtYm9sZCBsZWFkaW5nLTYgbWQ6dGV4dC1sZWZ0XCI+XG5cdFx0XHRcdFx0e3BsYXllci5tZXRhLnRpdGxlfVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTZcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1kOmhpZGRlblwiPlxuXHRcdFx0XHRcdFx0PE11dGVCdXR0b24gcGxheWVyPXtwbGF5ZXJ9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cblx0XHRcdFx0XHRcdDxQbGF5QnV0dG9uIHBsYXllcj17cGxheWVyfSBzaXplPVwic21hbGxcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy02IG1kOmhpZGRlblwiIC8+XG5cdFx0XHRcdFx0PFNsaWRlclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJDdXJyZW50IHRpbWVcIlxuXHRcdFx0XHRcdFx0bWF4VmFsdWU9e3BsYXllci5kdXJhdGlvbn1cblx0XHRcdFx0XHRcdHN0ZXA9ezF9XG5cdFx0XHRcdFx0XHR2YWx1ZT17W2N1cnJlbnRUaW1lID8/IHBsYXllci5jdXJyZW50VGltZV19XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KFt2XSkgPT4gc2V0Q3VycmVudFRpbWUodil9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZUVuZD17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHBsYXllci5zZWVrKHZhbHVlKVxuXHRcdFx0XHRcdFx0XHRpZiAod2FzUGxheWluZ1JlZi5jdXJyZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0cGxheWVyLnBsYXkoKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0bnVtYmVyRm9ybWF0dGVyPXt7IGZvcm1hdDogZm9ybWF0SHVtYW5UaW1lIH19XG5cdFx0XHRcdFx0XHRvbkNoYW5nZVN0YXJ0PXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHdhc1BsYXlpbmdSZWYuY3VycmVudCA9IHBsYXllci5wbGF5aW5nXG5cdFx0XHRcdFx0XHRcdHBsYXllci5wYXVzZSgpXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gaXRlbXMtY2VudGVyIG1kOmZsZXhcIj5cblx0XHRcdFx0XHRcdFx0PE11dGVCdXR0b24gcGxheWVyPXtwbGF5ZXJ9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTGluayIsInVzZUF1ZGlvUGxheWVyIiwiTXV0ZUJ1dHRvbiIsIlBsYXlCdXR0b24iLCJTbGlkZXIiLCJwYXJzZVRpbWUiLCJzZWNvbmRzIiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwiZm9ybWF0SHVtYW5UaW1lIiwiaCIsIm0iLCJzIiwiQXVkaW9QbGF5ZXIiLCJwbGF5ZXIiLCJ3YXNQbGF5aW5nUmVmIiwiY3VycmVudFRpbWUiLCJzZXRDdXJyZW50VGltZSIsIm1ldGEiLCJkaXYiLCJjbGFzc05hbWUiLCJzaXplIiwicCIsInRpdGxlIiwibGFiZWwiLCJtYXhWYWx1ZSIsImR1cmF0aW9uIiwic3RlcCIsInZhbHVlIiwib25DaGFuZ2UiLCJ2Iiwib25DaGFuZ2VFbmQiLCJzZWVrIiwiY3VycmVudCIsInBsYXkiLCJudW1iZXJGb3JtYXR0ZXIiLCJmb3JtYXQiLCJvbkNoYW5nZVN0YXJ0IiwicGxheWluZyIsInBhdXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/player/AudioPlayer.jsx\n"));

/***/ })

});