"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/Header.js":
/*!*************************!*\
  !*** ./pages/Header.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./pages/constants.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/Header.js\";\n\n\n\n\n\nfunction Header() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Text, {\n      children: \"AluraCord\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Button, {\n      children: \"Logout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Header__Wrapper\",\n  componentId: \"sc-2rkw05-0\"\n})([\"display:flex;align-items:center;justify-content:space-between;\"]);\n_c2 = Wrapper;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p.withConfig({\n  displayName: \"Header__Text\",\n  componentId: \"sc-2rkw05-1\"\n})([\"color:\", \";font-weight:\", \";font-size:2rem;padding:8px;\"], _constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.secondary, _constants__WEBPACK_IMPORTED_MODULE_1__.WEIGHTS.normal);\n_c3 = Text;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.withConfig({\n  displayName: \"Header__Button\",\n  componentId: \"sc-2rkw05-2\"\n})([\"background-color:transparent;border:none;font-size:1.5rem;color:\", \";cursor:pointer;padding:8px;:hover{color:\", \";background-color:\", \";}\"], _constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.gray[700], _constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.white, _constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.gray[500]);\n_c4 = Button;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"Text\");\n$RefreshReg$(_c4, \"Button\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9IZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxTQUFTSSxNQUFULEdBQWtCO0FBQ2hCLHNCQUNFLDhEQUFDLE9BQUQ7QUFBQSw0QkFDRSw4REFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7S0FQUUE7QUFTVCwrREFBZUEsTUFBZjtBQUVBLElBQU1DLE9BQU8sR0FBR0osd0VBQUg7QUFBQTtBQUFBO0FBQUEsc0VBQWI7TUFBTUk7QUFNTixJQUFNRSxJQUFJLEdBQUdOLHNFQUFIO0FBQUE7QUFBQTtBQUFBLGdFQUNDQyx3REFERCxFQUVPQyxzREFGUCxDQUFWO01BQU1JO0FBT04sSUFBTUksTUFBTSxHQUFHViwyRUFBSDtBQUFBO0FBQUE7QUFBQSxrSkFJREMsd0RBSkMsRUFTRUEsb0RBVEYsRUFVYUEsd0RBVmIsQ0FBWjtNQUFNUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9IZWFkZXIuanM/MmNmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDT0xPUlMsIFdFSUdIVFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxUZXh0PkFsdXJhQ29yZDwvVGV4dD5cbiAgICAgIDxCdXR0b24+TG9nb3V0PC9CdXR0b24+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gXG5cbmNvbnN0IFRleHQgPSBzdHlsZWQucGBcbiAgY29sb3I6ICR7Q09MT1JTLnNlY29uZGFyeX07XG4gIGZvbnQtd2VpZ2h0OiAke1dFSUdIVFMubm9ybWFsfTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiA4cHg7XG5gXG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogJHtDT0xPUlMuZ3JheVs3MDBdfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA4cHg7XG5cbiAgOmhvdmVyIHtcbiAgICAgY29sb3I6ICR7Q09MT1JTLndoaXRlfTtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtDT0xPUlMuZ3JheVs1MDBdfTtcbiAgIH1cbmAiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJDT0xPUlMiLCJXRUlHSFRTIiwiSGVhZGVyIiwiV3JhcHBlciIsImRpdiIsIlRleHQiLCJwIiwic2Vjb25kYXJ5Iiwibm9ybWFsIiwiQnV0dG9uIiwiYnV0dG9uIiwiZ3JheSIsIndoaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Header.js\n");

/***/ })

});