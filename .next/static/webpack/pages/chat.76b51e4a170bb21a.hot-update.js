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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/cjs/react.development */ \"./node_modules/react/cjs/react.development.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./pages/constants.js\");\n/* harmony import */ var _MessageList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MessageList */ \"./pages/MessageList.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/MessageBoxWrapper.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzcyMDgwMSwiZXhwIjoxOTU5Mjk2ODAxfQ.YS8qUYJ_RmQ5NT3Z-RzuXTlEKgeIBI4gqTRh5hbdTCo';\nvar SUPABASE_URL = 'https://xxkzzdvxgsaznvlwicmx.supabase.co';\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_8__.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY); // Fetch feito pelo supabase\n\nvar dadosSupaBase = supabaseClient.from('mensagens').select('*').then(function (dados) {\n  // Retorna body, count, dados cadastrados e status\n  console.log(\"Dados da consulta:\", dados);\n});\nconsole.log(dadosSupaBase);\n\nfunction MessageBoxWrapper() {\n  _s();\n\n  var _jsxDEV2;\n\n  var _useState = (0,react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__.useState)(''),\n      _useState2 = (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState, 2),\n      mensagem = _useState2[0],\n      setMensagem = _useState2[1];\n\n  var _useState3 = (0,react_cjs_react_development__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      _useState4 = (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState3, 2),\n      listaMensagens = _useState4[0],\n      setListaMensagens = _useState4[1];\n\n  var handleChangeMessage = function handleChangeMessage(event) {\n    var targetValue = event.target.value;\n    setMensagem(targetValue);\n  };\n\n  var handleKeyDown = function handleKeyDown(event) {\n    // Criando objeto da mensagem;\n    var objetoMensagem = {};\n    objetoMensagem = {\n      mensagem: mensagem,\n      usuario: 'usuário',\n      // todo\n      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__.v4)()\n    };\n\n    if (event.key === 'Enter') {\n      event.preventDefault(); // evitar qubra de linha;\n\n      setListaMensagens(function (prevState) {\n        return [objetoMensagem].concat((0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prevState));\n      });\n      setMensagem(''); // limpar textfield\n\n      console.log(objetoMensagem.id);\n    }\n\n    ;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_MessageList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      listaMensagens: listaMensagens\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Form, {\n      action: \"\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(TextField, (_jsxDEV2 = {\n        type: \"text\",\n        placeholder: \"Insira sua mensagem aqui...\"\n      }, (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"type\", \"textarea\"), (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"value\", mensagem), (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"onChange\", handleChangeMessage), (0,_Users_peu_Documents_Pietro_Dev_React_aluracord_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"onKeyDown\", handleKeyDown), _jsxDEV2), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MessageBoxWrapper, \"Zrfjhy4zAduBJ2JvjPSaSrNaQDU=\");\n\n_c = MessageBoxWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageBoxWrapper);\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n  displayName: \"MessageBoxWrapper__Wrapper\",\n  componentId: \"sc-nn9ks7-0\"\n})([\"position:relative;display:flex;flex-direction:column;flex:1;height:80%;background-color:\", \";border-radius:5px;padding:16px;\"], _constants__WEBPACK_IMPORTED_MODULE_5__.COLORS.gray[700]);\n_c2 = Wrapper;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].form.withConfig({\n  displayName: \"MessageBoxWrapper__Form\",\n  componentId: \"sc-nn9ks7-1\"\n})([\"display:flex;align-items:center;\"]);\n_c3 = Form;\nvar TextField = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].textarea.withConfig({\n  displayName: \"MessageBoxWrapper__TextField\",\n  componentId: \"sc-nn9ks7-2\"\n})([\"width:100%;height:80px;border:0;resize:none;border-radius:5px;padding:6px 8px;background-color:\", \";margin-right:16px;color:\", \";\"], _constants__WEBPACK_IMPORTED_MODULE_5__.COLORS.gray[900], _constants__WEBPACK_IMPORTED_MODULE_5__.COLORS.gray[100]);\n_c4 = TextField;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"MessageBoxWrapper\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"Form\");\n$RefreshReg$(_c4, \"TextField\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R3RDLDhFQUFIO0FBQUE7QUFBQTtBQUFBLDBJQU9PQyx3REFQUCxFQVNKQSx3REFUSSxDQUFmO01BQU1xQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9NZXNzYWdlQm94V3JhcHBlci5qcz81MmUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBNZXNzYWdlTGlzdCBmcm9tICcuL01lc3NhZ2VMaXN0JztcblxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcblxuXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnXG5jb25zdCBTVVBBQkFTRV9BTk9OX0tFWSA9ICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKeWIyeGxJam9pWVc1dmJpSXNJbWxoZENJNk1UWTBNemN5TURnd01Td2laWGh3SWpveE9UVTVNamsyT0RBeGZRLllTOHFVWUpfUm1RNU5UM1otUnp1WFRsRUtnZUlCSTRncVRSaDVoYmRUQ28nXG5jb25zdCBTVVBBQkFTRV9VUkwgPSAnaHR0cHM6Ly94eGt6emR2eGdzYXpudmx3aWNteC5zdXBhYmFzZS5jbydcblxuY29uc3Qgc3VwYWJhc2VDbGllbnQgPSBjcmVhdGVDbGllbnQoU1VQQUJBU0VfVVJMLCBTVVBBQkFTRV9BTk9OX0tFWSk7XG5cbi8vIEZldGNoIGZlaXRvIHBlbG8gc3VwYWJhc2VcbmNvbnN0IGRhZG9zU3VwYUJhc2UgPSBzdXBhYmFzZUNsaWVudFxuICAuZnJvbSgnbWVuc2FnZW5zJylcbiAgLnNlbGVjdCgnKicpXG4gIC50aGVuKChkYWRvcykgPT4ge1xuICAgIC8vIFJldG9ybmEgYm9keSwgY291bnQsIGRhZG9zIGNhZGFzdHJhZG9zIGUgc3RhdHVzXG4gICAgY29uc29sZS5sb2coXCJEYWRvcyBkYSBjb25zdWx0YTpcIiwgZGFkb3MpO1xuICB9KVxuXG5jb25zb2xlLmxvZyhkYWRvc1N1cGFCYXNlKTtcblxuZnVuY3Rpb24gTWVzc2FnZUJveFdyYXBwZXIoKSB7XG4gIGNvbnN0IFttZW5zYWdlbSwgc2V0TWVuc2FnZW1dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbGlzdGFNZW5zYWdlbnMsIHNldExpc3RhTWVuc2FnZW5zXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VNZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICBzZXRNZW5zYWdlbSh0YXJnZXRWYWx1ZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gQ3JpYW5kbyBvYmpldG8gZGEgbWVuc2FnZW07XG4gICAgbGV0IG9iamV0b01lbnNhZ2VtID0ge307XG4gICAgb2JqZXRvTWVuc2FnZW0gPSB7XG4gICAgICBtZW5zYWdlbSxcbiAgICAgIHVzdWFyaW86ICd1c3XDoXJpbycsIC8vIHRvZG9cbiAgICAgIGlkOiB1dWlkdjQoKVxuICAgIH07XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBldml0YXIgcXVicmEgZGUgbGluaGE7XG4gICAgICBzZXRMaXN0YU1lbnNhZ2VucyhwcmV2U3RhdGUgPT4gW29iamV0b01lbnNhZ2VtLCAuLi5wcmV2U3RhdGVdKTtcbiAgICAgIHNldE1lbnNhZ2VtKCcnKTsgLy8gbGltcGFyIHRleHRmaWVsZFxuICAgICAgY29uc29sZS5sb2cob2JqZXRvTWVuc2FnZW0uaWQpO1xuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxNZXNzYWdlTGlzdCBsaXN0YU1lbnNhZ2Vucz17bGlzdGFNZW5zYWdlbnN9IC8+XG4gICAgICA8Rm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uJ1xuICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VNZXNzYWdlfVxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybT5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCb3hXcmFwcGVyO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDT0xPUlMuZ3JheVs3MDBdfTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNnB4O1xuYFxuXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gXG5cbmNvbnN0IFRleHRGaWVsZCA9IHN0eWxlZC50ZXh0YXJlYWBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyOiAwO1xuICByZXNpemU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDT0xPUlMuZ3JheVs5MDBdfTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBjb2xvcjogJHtDT0xPUlMuZ3JheVsxMDBdfTtcbmBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiQ09MT1JTIiwiTWVzc2FnZUxpc3QiLCJ2NCIsInV1aWR2NCIsImNyZWF0ZUNsaWVudCIsIlNVUEFCQVNFX0FOT05fS0VZIiwiU1VQQUJBU0VfVVJMIiwic3VwYWJhc2VDbGllbnQiLCJkYWRvc1N1cGFCYXNlIiwiZnJvbSIsInNlbGVjdCIsInRoZW4iLCJkYWRvcyIsImNvbnNvbGUiLCJsb2ciLCJNZXNzYWdlQm94V3JhcHBlciIsIm1lbnNhZ2VtIiwic2V0TWVuc2FnZW0iLCJsaXN0YU1lbnNhZ2VucyIsInNldExpc3RhTWVuc2FnZW5zIiwiaGFuZGxlQ2hhbmdlTWVzc2FnZSIsImV2ZW50IiwidGFyZ2V0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUtleURvd24iLCJvYmpldG9NZW5zYWdlbSIsInVzdWFyaW8iLCJpZCIsImtleSIsInByZXZlbnREZWZhdWx0IiwicHJldlN0YXRlIiwiV3JhcHBlciIsImRpdiIsImdyYXkiLCJGb3JtIiwiZm9ybSIsIlRleHRGaWVsZCIsInRleHRhcmVhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/MessageBoxWrapper.js\n");

/***/ })

});