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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/cjs/react.development */ \"./node_modules/react/cjs/react.development.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./pages/constants.js\");\n/* harmony import */ var _MessageList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MessageList */ \"./pages/MessageList.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/MessageBoxWrapper.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction MessageBoxWrapper() {\n  _s();\n\n  var _jsxDEV2;\n\n  var _useState = (0,react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__.useState)(''),\n      _useState2 = (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState, 2),\n      mensagem = _useState2[0],\n      setMensagem = _useState2[1];\n\n  var _useState3 = (0,react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      _useState4 = (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState3, 2),\n      listaMensagens = _useState4[0],\n      setListaMensagens = _useState4[1];\n\n  var handleChangeMessage = function handleChangeMessage(event) {\n    var targetValue = event.target.value;\n    setMensagem(targetValue);\n  };\n\n  var handleKeyDown = function handleKeyDown(event) {\n    var objetoMensagem = {};\n    objetoMensagem = {\n      mensagem: mensagem,\n      usuário: 'usuário',\n      id: (0,uuid__WEBPACK_IMPORTED_MODULE_8__.v4)()\n    };\n\n    if (event.key === 'Enter') {\n      event.preventDefault(); // evitar qubra de linha;\n\n      setListaMensagens(function (prevState) {\n        return [objetoMensagem].concat((0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prevState));\n      });\n      setMensagem('');\n    }\n\n    ;\n  };\n\n  (0,react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    console.log(listaMensagens);\n  }, [mensagem]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_MessageList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      listaMensagens: listaMensagens\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Form, {\n      action: \"\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(TextField, (_jsxDEV2 = {\n        type: \"text\",\n        placeholder: \"Insira sua mensagem aqui...\"\n      }, (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"type\", \"textarea\"), (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"value\", mensagem), (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"onChange\", handleChangeMessage), (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"onKeyDown\", handleKeyDown), _jsxDEV2), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MessageBoxWrapper, \"Nf4SWOkjfEjV+qqIlW7yxEr8ywg=\");\n\n_c = MessageBoxWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageBoxWrapper);\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"MessageBoxWrapper__Wrapper\",\n  componentId: \"sc-nn9ks7-0\"\n})([\"position:relative;display:flex;flex-direction:column;flex:1;height:80%;background-color:\", \";border-radius:5px;padding:16px;\"], _constants__WEBPACK_IMPORTED_MODULE_5__.COLORS.gray[700]);\n_c2 = Wrapper;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].form.withConfig({\n  displayName: \"MessageBoxWrapper__Form\",\n  componentId: \"sc-nn9ks7-1\"\n})([\"display:flex;align-items:center;\"]);\n_c3 = Form;\nvar TextField = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].textarea.withConfig({\n  displayName: \"MessageBoxWrapper__TextField\",\n  componentId: \"sc-nn9ks7-2\"\n})([\"width:100%;height:80px;border:0;resize:none;border-radius:5px;padding:6px 8px;background-color:\", \";margin-right:16px;color:\", \";\"], _constants__WEBPACK_IMPORTED_MODULE_5__.COLORS.gray[900], _constants__WEBPACK_IMPORTED_MODULE_5__.COLORS.gray[100]);\n_c4 = TextField;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"MessageBoxWrapper\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"Form\");\n$RefreshReg$(_c4, \"TextField\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NZXNzYWdlQm94V3JhcHBlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBLFNBQVNRLGlCQUFULEdBQTZCO0FBQUE7O0FBQUE7O0FBQzNCLGtCQUFnQ04scUVBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPTyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0Q1IscUVBQVEsQ0FBQyxFQUFELENBQXBEO0FBQUE7QUFBQSxNQUFPUyxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLEtBQUQsRUFBVztBQUNyQyxRQUFNQyxXQUFXLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFqQztBQUNBUCxJQUFBQSxXQUFXLENBQUNLLFdBQUQsQ0FBWDtBQUNELEdBSEQ7O0FBS0EsTUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDSixLQUFELEVBQVc7QUFFL0IsUUFBSUssY0FBYyxHQUFHLEVBQXJCO0FBQ0FBLElBQUFBLGNBQWMsR0FBRztBQUNmVixNQUFBQSxRQUFRLEVBQVJBLFFBRGU7QUFFZlcsTUFBQUEsT0FBTyxFQUFFLFNBRk07QUFHZkMsTUFBQUEsRUFBRSxFQUFFZCx3Q0FBTTtBQUhLLEtBQWpCOztBQU1BLFFBQUlPLEtBQUssQ0FBQ1EsR0FBTixLQUFjLE9BQWxCLEVBQTJCO0FBQ3pCUixNQUFBQSxLQUFLLENBQUNTLGNBQU4sR0FEeUIsQ0FDRDs7QUFDeEJYLE1BQUFBLGlCQUFpQixDQUFDLFVBQUFZLFNBQVM7QUFBQSxnQkFBS0wsY0FBTCxpTEFBd0JLLFNBQXhCO0FBQUEsT0FBVixDQUFqQjtBQUNBZCxNQUFBQSxXQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0Q7O0FBQUE7QUFDRixHQWREOztBQWdCQVQsRUFBQUEsc0VBQVMsQ0FBQyxZQUFNO0FBQ2R3QixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWYsY0FBWjtBQUNELEdBRlEsRUFFTixDQUFDRixRQUFELENBRk0sQ0FBVDtBQUlBLHNCQUNFLDhEQUFDLE9BQUQ7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFhLG9CQUFjLEVBQUVFO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLElBQUQ7QUFBTSxZQUFNLEVBQUMsRUFBYjtBQUFBLDZCQUNFLDhEQUFDLFNBQUQ7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLG1CQUFXLEVBQUM7QUFGZCxnTUFHTyxVQUhQLDJMQUlTRixRQUpULDhMQUtZSSxtQkFMWiwrTEFNYUssYUFOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBNUNRVjs7S0FBQUE7QUE4Q1QsK0RBQWVBLGlCQUFmO0FBRUEsSUFBTW1CLE9BQU8sR0FBR3hCLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHFJQU1TQyx3REFOVCxDQUFiO01BQU11QjtBQVdOLElBQU1HLElBQUksR0FBRzNCLHlFQUFIO0FBQUE7QUFBQTtBQUFBLHdDQUFWO01BQU0yQjtBQUtOLElBQU1FLFNBQVMsR0FBRzdCLDZFQUFIO0FBQUE7QUFBQTtBQUFBLDBJQU9PQyx3REFQUCxFQVNKQSx3REFUSSxDQUFmO01BQU00QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9NZXNzYWdlQm94V3JhcHBlci5qcz81MmUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IE1lc3NhZ2VMaXN0IGZyb20gJy4vTWVzc2FnZUxpc3QnO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuXG5mdW5jdGlvbiBNZXNzYWdlQm94V3JhcHBlcigpIHtcbiAgY29uc3QgW21lbnNhZ2VtLCBzZXRNZW5zYWdlbV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsaXN0YU1lbnNhZ2Vucywgc2V0TGlzdGFNZW5zYWdlbnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZU1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIHNldE1lbnNhZ2VtKHRhcmdldFZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcblxuICAgIGxldCBvYmpldG9NZW5zYWdlbSA9IHt9O1xuICAgIG9iamV0b01lbnNhZ2VtID0ge1xuICAgICAgbWVuc2FnZW0sXG4gICAgICB1c3XDoXJpbzogJ3VzdcOhcmlvJyxcbiAgICAgIGlkOiB1dWlkdjQoKVxuICAgIH07XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBldml0YXIgcXVicmEgZGUgbGluaGE7XG4gICAgICBzZXRMaXN0YU1lbnNhZ2VucyhwcmV2U3RhdGUgPT4gW29iamV0b01lbnNhZ2VtLCAuLi5wcmV2U3RhdGVdKTtcbiAgICAgIHNldE1lbnNhZ2VtKCcnKTtcbiAgICB9O1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cobGlzdGFNZW5zYWdlbnMpO1xuICB9LCBbbWVuc2FnZW1dKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPE1lc3NhZ2VMaXN0IGxpc3RhTWVuc2FnZW5zPXtsaXN0YU1lbnNhZ2Vuc30gLz5cbiAgICAgIDxGb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdJbnNpcmEgc3VhIG1lbnNhZ2VtIGFxdWkuLi4nXG4gICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgICB2YWx1ZT17bWVuc2FnZW19XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZU1lc3NhZ2V9XG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUJveFdyYXBwZXI7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NPTE9SUy5ncmF5WzcwMF19O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG5gXG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuY29uc3QgVGV4dEZpZWxkID0gc3R5bGVkLnRleHRhcmVhYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXI6IDA7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA2cHggOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NPTE9SUy5ncmF5WzkwMF19O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAke0NPTE9SUy5ncmF5WzEwMF19O1xuYFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJDT0xPUlMiLCJNZXNzYWdlTGlzdCIsInY0IiwidXVpZHY0IiwiTWVzc2FnZUJveFdyYXBwZXIiLCJtZW5zYWdlbSIsInNldE1lbnNhZ2VtIiwibGlzdGFNZW5zYWdlbnMiLCJzZXRMaXN0YU1lbnNhZ2VucyIsImhhbmRsZUNoYW5nZU1lc3NhZ2UiLCJldmVudCIsInRhcmdldFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVLZXlEb3duIiwib2JqZXRvTWVuc2FnZW0iLCJ1c3XDoXJpbyIsImlkIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJwcmV2U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiV3JhcHBlciIsImRpdiIsImdyYXkiLCJGb3JtIiwiZm9ybSIsIlRleHRGaWVsZCIsInRleHRhcmVhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/MessageBoxWrapper.js\n");

/***/ })

});