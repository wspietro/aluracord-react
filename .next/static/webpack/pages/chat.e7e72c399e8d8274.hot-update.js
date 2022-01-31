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

/***/ "./pages/MessageList.js":
/*!******************************!*\
  !*** ./pages/MessageList.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./pages/constants.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/MessageList.js\";\n\n\n\n\n\nfunction MessageList(_ref) {\n  var _this = this;\n\n  var listaMensagens = _ref.listaMensagens;\n  return (\n    /*#__PURE__*/\n\n    /*\n    // Usuário\n    - Usuário digita no campo textarea\n    - Aperta enter para enviar\n    - Tem que adicionar o texto na listagem\n    // Dev\n    - [X] Campo criado\n    - [X] Vamos usar o onChange usa o useState (ter if pra caso seja enter pra limpar a variavel)\n    - [X] Lista de mensagens \n    */\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Wrapper, {\n      children: listaMensagens.map(function (objetoMensagemAtual) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MessageWrapper, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MessageFrom, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(UserImage, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MessageText, {\n              children: objetoMensagemAtual.mensagem\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MessageText, {\n              children: objetoMensagemAtual.usuario\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this)\n        }, objetoMensagemAtual.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }, this)\n  );\n}\n\n_c = MessageList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageList);\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"MessageList__Wrapper\",\n  componentId: \"sc-196eyrm-0\"\n})([\"overflow:auto;display:flex;flex-direction:column-reverse;flex:1;color:black;\"]);\n_c2 = Wrapper;\nvar MessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"MessageList__MessageWrapper\",\n  componentId: \"sc-196eyrm-1\"\n})([\"border-radius:5px;padding:6px;&hover{background-color:\", \";}\"], _constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.gray[100]);\n_c3 = MessageWrapper;\nvar MessageFrom = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"MessageList__MessageFrom\",\n  componentId: \"sc-196eyrm-2\"\n})([\"display:flex;\"]);\n_c4 = MessageFrom;\nvar UserImage = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"MessageList__UserImage\",\n  componentId: \"sc-196eyrm-3\"\n})([\"width:20px;height:20px;border-radius:50%;display:inline-block;margin-right:8px;\"]);\n_c5 = UserImage;\nvar MessageText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"MessageList__MessageText\",\n  componentId: \"sc-196eyrm-4\"\n})([\"\"]);\n_c6 = MessageText;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"MessageList\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"MessageWrapper\");\n$RefreshReg$(_c4, \"MessageFrom\");\n$RefreshReg$(_c5, \"UserImage\");\n$RefreshReg$(_c6, \"MessageText\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NZXNzYWdlTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNHLFdBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUFsQkMsY0FBa0IsUUFBbEJBLGNBQWtCO0FBQ3ZDO0FBQUE7O0FBRUU7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSSxrRUFBQyxPQUFEO0FBQUEsZ0JBQ0dBLGNBQWMsQ0FBQ0MsR0FBZixDQUFtQixVQUFBQyxtQkFBbUIsRUFBSTtBQUN6Qyw0QkFDRSw4REFBQyxjQUFEO0FBQUEsaUNBQ0UsOERBQUMsV0FBRDtBQUFBLG9DQUNFLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLFdBQUQ7QUFBQSx3QkFBY0EsbUJBQW1CLENBQUNDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRSw4REFBQyxXQUFEO0FBQUEsd0JBQWNELG1CQUFtQixDQUFDRTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQXFCRixtQkFBbUIsQ0FBQ0csRUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVNELE9BVkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkY7QUFzQ0Q7O0tBdkNRTjtBQXlDVCwrREFBZUEsV0FBZjtBQUVBLElBQU1PLE9BQU8sR0FBR1Qsd0VBQUg7QUFBQTtBQUFBO0FBQUEsb0ZBQWI7TUFBTVM7QUFRTixJQUFNRSxjQUFjLEdBQUdYLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHFFQUtNQyx3REFMTixDQUFwQjtNQUFNVTtBQVNOLElBQU1FLFdBQVcsR0FBR2Isd0VBQUg7QUFBQTtBQUFBO0FBQUEscUJBQWpCO01BQU1hO0FBSU4sSUFBTUMsU0FBUyxHQUFHZCx3RUFBSDtBQUFBO0FBQUE7QUFBQSx1RkFBZjtNQUFNYztBQVFOLElBQU1DLFdBQVcsR0FBR2Ysd0VBQUg7QUFBQTtBQUFBO0FBQUEsUUFBakI7TUFBTWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTWVzc2FnZUxpc3QuanM/NmYzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDT0xPUlMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIE1lc3NhZ2VMaXN0KHsgbGlzdGFNZW5zYWdlbnMgfSkge1xuICByZXR1cm4gKFxuXG4gICAgLypcbi8vIFVzdcOhcmlvXG4tIFVzdcOhcmlvIGRpZ2l0YSBubyBjYW1wbyB0ZXh0YXJlYVxuLSBBcGVydGEgZW50ZXIgcGFyYSBlbnZpYXJcbi0gVGVtIHF1ZSBhZGljaW9uYXIgbyB0ZXh0byBuYSBsaXN0YWdlbVxuIFxuLy8gRGV2XG4tIFtYXSBDYW1wbyBjcmlhZG9cbi0gW1hdIFZhbW9zIHVzYXIgbyBvbkNoYW5nZSB1c2EgbyB1c2VTdGF0ZSAodGVyIGlmIHByYSBjYXNvIHNlamEgZW50ZXIgcHJhIGxpbXBhciBhIHZhcmlhdmVsKVxuLSBbWF0gTGlzdGEgZGUgbWVuc2FnZW5zIFxuKi9cbiAgICA8V3JhcHBlcj5cbiAgICAgIHtsaXN0YU1lbnNhZ2Vucy5tYXAob2JqZXRvTWVuc2FnZW1BdHVhbCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1lc3NhZ2VXcmFwcGVyIGtleT17b2JqZXRvTWVuc2FnZW1BdHVhbC5pZH0+XG4gICAgICAgICAgICA8TWVzc2FnZUZyb20+XG4gICAgICAgICAgICAgIDxVc2VySW1hZ2UgLz5cbiAgICAgICAgICAgICAgPE1lc3NhZ2VUZXh0PntvYmpldG9NZW5zYWdlbUF0dWFsLm1lbnNhZ2VtfTwvTWVzc2FnZVRleHQ+XG4gICAgICAgICAgICAgIDxNZXNzYWdlVGV4dD57b2JqZXRvTWVuc2FnZW1BdHVhbC51c3VhcmlvfTwvTWVzc2FnZVRleHQ+XG4gICAgICAgICAgICA8L01lc3NhZ2VGcm9tPlxuICAgICAgICAgIDwvTWVzc2FnZVdyYXBwZXI+XG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHsvKiB7XG4gICAgICAgIGxpc3RhTWVuc2FnZW5zLm1hcChvYmpldG9NZW5zYWdlbUF0dWFsID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17b2JqZXRvTWVuc2FnZW1BdHVhbC5pZH0+XG4gICAgICAgICAgICAgIHtvYmpldG9NZW5zYWdlbUF0dWFsLm1lbnNhZ2VtfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICB9ICovfVxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUxpc3Q7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICBmbGV4OiAxO1xuICBjb2xvcjogYmxhY2s7XG5gXG5cbmNvbnN0IE1lc3NhZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA2cHg7XG5cbiAgICAmaG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtDT0xPUlMuZ3JheVsxMDBdfTtcbiAgICB9XG5gXG5cbmNvbnN0IE1lc3NhZ2VGcm9tID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbmBcblxuY29uc3QgVXNlckltYWdlID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuYFxuXG5jb25zdCBNZXNzYWdlVGV4dCA9IHN0eWxlZC5kaXZgXG5cbmAiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJDT0xPUlMiLCJNZXNzYWdlTGlzdCIsImxpc3RhTWVuc2FnZW5zIiwibWFwIiwib2JqZXRvTWVuc2FnZW1BdHVhbCIsIm1lbnNhZ2VtIiwidXN1YXJpbyIsImlkIiwiV3JhcHBlciIsImRpdiIsIk1lc3NhZ2VXcmFwcGVyIiwiZ3JheSIsIk1lc3NhZ2VGcm9tIiwiVXNlckltYWdlIiwiTWVzc2FnZVRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/MessageList.js\n");

/***/ })

});