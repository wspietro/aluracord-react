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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./pages/constants.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/peu/Documents/Pietro/Dev/React/aluracord/pages/MessageList.js\";\n\n\n\n\n\nfunction MessageList(_ref) {\n  var _this = this;\n\n  var listaMensagens = _ref.listaMensagens;\n  return (\n    /*#__PURE__*/\n\n    /*\n    // Usuário\n    - Usuário digita no campo textarea\n    - Aperta enter para enviar\n    - Tem que adicionar o texto na listagem\n    // Dev\n    - [X] Campo criado\n    - [X] Vamos usar o onChange usa o useState (ter if pra caso seja enter pra limpar a variavel)\n    - [X] Lista de mensagens \n    */\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Wrapper, {\n      children: listaMensagens.map(function (objetoMensagemAtual) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MessageWrapper, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MessageFrom, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(UserImage, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this)\n        }, objetoMensagemAtual.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }, this)\n  );\n}\n\n_c = MessageList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageList);\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"MessageList__Wrapper\",\n  componentId: \"sc-196eyrm-0\"\n})([\"overflow:auto;display:flex;flex-direction:column-reverse;flex:1;color:black;\"]);\n_c2 = Wrapper;\nvar MessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"MessageList__MessageWrapper\",\n  componentId: \"sc-196eyrm-1\"\n})([\"border-radius:5px;padding:6px;&hover{background-color:\", \";}\"], _constants__WEBPACK_IMPORTED_MODULE_1__.COLORS.gray[100]);\n_c3 = MessageWrapper;\nvar MessageFrom = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"MessageList__MessageFrom\",\n  componentId: \"sc-196eyrm-2\"\n})([\"\"]);\n_c4 = MessageFrom;\nvar UserImage = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"MessageList__UserImage\",\n  componentId: \"sc-196eyrm-3\"\n})([\"width:20px;height:20px;border-radius:50%;display:inline-block;margin-right:8px;\"]);\n_c5 = UserImage;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"MessageList\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"MessageWrapper\");\n$RefreshReg$(_c4, \"MessageFrom\");\n$RefreshReg$(_c5, \"UserImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NZXNzYWdlTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNHLFdBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUFsQkMsY0FBa0IsUUFBbEJBLGNBQWtCO0FBQ3ZDO0FBQUE7O0FBRUU7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSSxrRUFBQyxPQUFEO0FBQUEsZ0JBQ0dBLGNBQWMsQ0FBQ0MsR0FBZixDQUFtQixVQUFBQyxtQkFBbUIsRUFBSTtBQUN6Qyw0QkFDRSw4REFBQyxjQUFEO0FBQUEsaUNBQ0UsOERBQUMsV0FBRDtBQUFBLG1DQUNFLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFxQkEsbUJBQW1CLENBQUNDLEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFTRCxPQVZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJGO0FBc0NEOztLQXZDUUo7QUF5Q1QsK0RBQWVBLFdBQWY7QUFFQSxJQUFNSyxPQUFPLEdBQUdQLHdFQUFIO0FBQUE7QUFBQTtBQUFBLG9GQUFiO01BQU1PO0FBUU4sSUFBTUUsY0FBYyxHQUFHVCx3RUFBSDtBQUFBO0FBQUE7QUFBQSxxRUFLTUMsd0RBTE4sQ0FBcEI7TUFBTVE7QUFTTixJQUFNRSxXQUFXLEdBQUdYLHdFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWpCO01BQU1XO0FBSU4sSUFBTUMsU0FBUyxHQUFHWix3RUFBSDtBQUFBO0FBQUE7QUFBQSx1RkFBZjtNQUFNWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9NZXNzYWdlTGlzdC5qcz82ZjMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZnVuY3Rpb24gTWVzc2FnZUxpc3QoeyBsaXN0YU1lbnNhZ2VucyB9KSB7XG4gIHJldHVybiAoXG5cbiAgICAvKlxuLy8gVXN1w6FyaW9cbi0gVXN1w6FyaW8gZGlnaXRhIG5vIGNhbXBvIHRleHRhcmVhXG4tIEFwZXJ0YSBlbnRlciBwYXJhIGVudmlhclxuLSBUZW0gcXVlIGFkaWNpb25hciBvIHRleHRvIG5hIGxpc3RhZ2VtXG4gXG4vLyBEZXZcbi0gW1hdIENhbXBvIGNyaWFkb1xuLSBbWF0gVmFtb3MgdXNhciBvIG9uQ2hhbmdlIHVzYSBvIHVzZVN0YXRlICh0ZXIgaWYgcHJhIGNhc28gc2VqYSBlbnRlciBwcmEgbGltcGFyIGEgdmFyaWF2ZWwpXG4tIFtYXSBMaXN0YSBkZSBtZW5zYWdlbnMgXG4qL1xuICAgIDxXcmFwcGVyPlxuICAgICAge2xpc3RhTWVuc2FnZW5zLm1hcChvYmpldG9NZW5zYWdlbUF0dWFsID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWVzc2FnZVdyYXBwZXIga2V5PXtvYmpldG9NZW5zYWdlbUF0dWFsLmlkfT5cbiAgICAgICAgICAgIDxNZXNzYWdlRnJvbT5cbiAgICAgICAgICAgICAgPFVzZXJJbWFnZT5cblxuICAgICAgICAgICAgICA8L1VzZXJJbWFnZT5cbiAgICAgICAgICAgIDwvTWVzc2FnZUZyb20+XG4gICAgICAgICAgPC9NZXNzYWdlV3JhcHBlcj5cbiAgICAgICAgKVxuICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgey8qIHtcbiAgICAgICAgbGlzdGFNZW5zYWdlbnMubWFwKG9iamV0b01lbnNhZ2VtQXR1YWwgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtvYmpldG9NZW5zYWdlbUF0dWFsLmlkfT5cbiAgICAgICAgICAgICAge29iamV0b01lbnNhZ2VtQXR1YWwubWVuc2FnZW19XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH0gKi99XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlTGlzdDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG92ZXJmbG93OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiBibGFjaztcbmBcblxuY29uc3QgTWVzc2FnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDZweDtcblxuICAgICZob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NPTE9SUy5ncmF5WzEwMF19O1xuICAgIH1cbmBcblxuY29uc3QgTWVzc2FnZUZyb20gPSBzdHlsZWQuZGl2YFxuXG5gXG5cbmNvbnN0IFVzZXJJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbmAiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJDT0xPUlMiLCJNZXNzYWdlTGlzdCIsImxpc3RhTWVuc2FnZW5zIiwibWFwIiwib2JqZXRvTWVuc2FnZW1BdHVhbCIsImlkIiwiV3JhcHBlciIsImRpdiIsIk1lc3NhZ2VXcmFwcGVyIiwiZ3JheSIsIk1lc3NhZ2VGcm9tIiwiVXNlckltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/MessageList.js\n");

/***/ })

});