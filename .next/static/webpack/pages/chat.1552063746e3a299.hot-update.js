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

/***/ "./pages/MessageBoxWrapper.js":
/*!************************************!*\
  !*** ./pages/MessageBoxWrapper.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/cjs/react.development */ \"./node_modules/react/cjs/react.development.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./pages/constants.js\");\n/* harmony import */ var _MessageList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MessageList */ \"./pages/MessageList.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/MessageBoxWrapper.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction MessageBoxWrapper() {\n  _s();\n\n  var _jsxDEV2;\n\n  var _useState = (0,react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__.useState)(''),\n      _useState2 = (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState, 2),\n      mensagem = _useState2[0],\n      setMensagem = _useState2[1];\n\n  var _useState3 = (0,react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      _useState4 = (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState3, 2),\n      listaMensagens = _useState4[0],\n      setListaMensagens = _useState4[1];\n\n  var handleChange = function handleChange(event) {\n    var targetValue = event.target.value;\n    setMensagem(targetValue);\n  };\n\n  var handleKeyDown = function handleKeyDown(event) {\n    if (event.key === 'Enter') {\n      setListaMensagens(function (prevState) {\n        return [].concat((0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prevState), [mensagem]);\n      });\n    }\n\n    ;\n  };\n\n  (0,react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    console.log(listaMensagens);\n  }, [listaMensagens]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_MessageList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      listaMensagens: listaMensagens\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Form, {\n      action: \"\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(TextField, (_jsxDEV2 = {\n        type: \"text\",\n        placeholder: \"Insira sua mensagem aqui...\"\n      }, (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"type\", \"textarea\"), (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"value\", mensagem), (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"onChange\", handleChange), (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"onKeyDown\", handleKeyDown), _jsxDEV2), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MessageBoxWrapper, \"Nf4SWOkjfEjV+qqIlW7yxEr8ywg=\");\n\n_c = MessageBoxWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageBoxWrapper);\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n  displayName: \"MessageBoxWrapper__Wrapper\",\n  componentId: \"sc-nn9ks7-0\"\n})([\"position:relative;display:flex;flex-direction:column;flex:1;height:80%;background-color:\", \";border-radius:5px;padding:16px;\"], _constants__WEBPACK_IMPORTED_MODULE_5__.COLORS.gray[700]);\n_c2 = Wrapper;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].form.withConfig({\n  displayName: \"MessageBoxWrapper__Form\",\n  componentId: \"sc-nn9ks7-1\"\n})([\"display:flex;align-items:center;\"]);\n_c3 = Form;\nvar TextField = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].textarea.withConfig({\n  displayName: \"MessageBoxWrapper__TextField\",\n  componentId: \"sc-nn9ks7-2\"\n})([\"width:100%;height:80px;border:0;resize:none;border-radius:5px;padding:6px 8px;background-color:\", \";margin-right:16px;color:\", \";\"], _constants__WEBPACK_IMPORTED_MODULE_5__.COLORS.gray[900], _constants__WEBPACK_IMPORTED_MODULE_5__.COLORS.gray[100]);\n_c4 = TextField;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"MessageBoxWrapper\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"Form\");\n$RefreshReg$(_c4, \"TextField\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NZXNzYWdlQm94V3JhcHBlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNNLGlCQUFULEdBQTZCO0FBQUE7O0FBQUE7O0FBQzNCLGtCQUFnQ0oscUVBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPSyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0Q04scUVBQVEsQ0FBQyxFQUFELENBQXBEO0FBQUE7QUFBQSxNQUFPTyxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDOUIsUUFBTUMsV0FBVyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBakM7QUFDQVAsSUFBQUEsV0FBVyxDQUFDSyxXQUFELENBQVg7QUFDRCxHQUhEOztBQUtBLE1BQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0osS0FBRCxFQUFXO0FBQy9CLFFBQUlBLEtBQUssQ0FBQ0ssR0FBTixLQUFjLE9BQWxCLEVBQTJCO0FBQ3pCUCxNQUFBQSxpQkFBaUIsQ0FBQyxVQUFBUSxTQUFTO0FBQUEsaU1BQVFBLFNBQVIsSUFBbUJYLFFBQW5CO0FBQUEsT0FBVixDQUFqQjtBQUNEOztBQUFBO0FBQ0YsR0FKRDs7QUFNQU4sRUFBQUEsc0VBQVMsQ0FBQyxZQUFNO0FBQ2RrQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVgsY0FBWjtBQUNELEdBRlEsRUFFTixDQUFDQSxjQUFELENBRk0sQ0FBVDtBQUlBLHNCQUNFLDhEQUFDLE9BQUQ7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFhLG9CQUFjLEVBQUVBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLElBQUQ7QUFBTSxZQUFNLEVBQUMsRUFBYjtBQUFBLDZCQUNFLDhEQUFDLFNBQUQ7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLG1CQUFXLEVBQUM7QUFGZCxnTUFHTyxVQUhQLDJMQUlTRixRQUpULDhMQUtZSSxZQUxaLCtMQU1hSyxhQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7R0FsQ1FWOztLQUFBQTtBQW9DVCwrREFBZUEsaUJBQWY7QUFFQSxJQUFNZSxPQUFPLEdBQUdsQix3RUFBSDtBQUFBO0FBQUE7QUFBQSxxSUFNU0Msd0RBTlQsQ0FBYjtNQUFNaUI7QUFXTixJQUFNRyxJQUFJLEdBQUdyQix5RUFBSDtBQUFBO0FBQUE7QUFBQSx3Q0FBVjtNQUFNcUI7QUFLTixJQUFNRSxTQUFTLEdBQUd2Qiw2RUFBSDtBQUFBO0FBQUE7QUFBQSwwSUFPT0Msd0RBUFAsRUFTSkEsd0RBVEksQ0FBZjtNQUFNc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTWVzc2FnZUJveFdyYXBwZXIuanM/NTJlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBNZXNzYWdlTGlzdCBmcm9tICcuL01lc3NhZ2VMaXN0JztcblxuZnVuY3Rpb24gTWVzc2FnZUJveFdyYXBwZXIoKSB7XG4gIGNvbnN0IFttZW5zYWdlbSwgc2V0TWVuc2FnZW1dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbGlzdGFNZW5zYWdlbnMsIHNldExpc3RhTWVuc2FnZW5zXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIHNldE1lbnNhZ2VtKHRhcmdldFZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBzZXRMaXN0YU1lbnNhZ2VucyhwcmV2U3RhdGUgPT4gWy4uLnByZXZTdGF0ZSwgbWVuc2FnZW1dKTtcbiAgICB9O1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cobGlzdGFNZW5zYWdlbnMpO1xuICB9LCBbbGlzdGFNZW5zYWdlbnNdKVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8TWVzc2FnZUxpc3QgbGlzdGFNZW5zYWdlbnM9e2xpc3RhTWVuc2FnZW5zfSAvPlxuICAgICAgPEZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0luc2lyYSBzdWEgbWVuc2FnZW0gYXF1aS4uLidcbiAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICAgIHZhbHVlPXttZW5zYWdlbX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybT5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCb3hXcmFwcGVyO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDT0xPUlMuZ3JheVs3MDBdfTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNnB4O1xuYFxuXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gXG5cbmNvbnN0IFRleHRGaWVsZCA9IHN0eWxlZC50ZXh0YXJlYWBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyOiAwO1xuICByZXNpemU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDT0xPUlMuZ3JheVs5MDBdfTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBjb2xvcjogJHtDT0xPUlMuZ3JheVsxMDBdfTtcbmBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiQ09MT1JTIiwiTWVzc2FnZUxpc3QiLCJNZXNzYWdlQm94V3JhcHBlciIsIm1lbnNhZ2VtIiwic2V0TWVuc2FnZW0iLCJsaXN0YU1lbnNhZ2VucyIsInNldExpc3RhTWVuc2FnZW5zIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlS2V5RG93biIsImtleSIsInByZXZTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJXcmFwcGVyIiwiZGl2IiwiZ3JheSIsIkZvcm0iLCJmb3JtIiwiVGV4dEZpZWxkIiwidGV4dGFyZWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/MessageBoxWrapper.js\n");

/***/ })

});