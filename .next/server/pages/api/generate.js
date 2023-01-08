"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nconst basePromptPrefix = \"How can I help you?\";\nconst generateAction = async (req, res)=>{\n    // Run first prompt\n    console.log(`API: ${basePromptPrefix}${req.body.userInput}`);\n    const baseCompletion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: `${basePromptPrefix}${req.body.userInput}\\n`,\n        temperature: 0.9,\n        max_tokens: 1750\n    });\n    const basePromptOutput = baseCompletion.data.choices.pop();\n    res.status(200).json({\n        output: basePromptOutput\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBRUEsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsTUFBTU0sbUJBQW1CO0FBQ3pCLE1BQU1DLGlCQUFpQixPQUFPQyxLQUFLQyxNQUFRO0lBQ3pDLG1CQUFtQjtJQUNuQkMsUUFBUUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFTCxpQkFBaUIsRUFBRUUsSUFBSUksSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztJQUUzRCxNQUFNQyxpQkFBaUIsTUFBTVQsT0FBT1UsZ0JBQWdCLENBQUM7UUFDbkRDLE9BQU87UUFDUEMsUUFBUSxDQUFDLEVBQUVYLGlCQUFpQixFQUFFRSxJQUFJSSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDcERLLGFBQWE7UUFDYkMsWUFBWTtJQUNkO0lBRUEsTUFBTUMsbUJBQW1CTixlQUFlTyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRztJQUV4RGQsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQyxRQUFRTjtJQUFpQjtBQUNsRDtBQUVBLGlFQUFlYixjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2NyYXRjaHBhZC8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS5qcz82MjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gJ29wZW5haSc7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG59KTtcblxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuY29uc3QgYmFzZVByb21wdFByZWZpeCA9IFwiSG93IGNhbiBJIGhlbHAgeW91P1wiO1xuY29uc3QgZ2VuZXJhdGVBY3Rpb24gPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgLy8gUnVuIGZpcnN0IHByb21wdFxuICBjb25zb2xlLmxvZyhgQVBJOiAke2Jhc2VQcm9tcHRQcmVmaXh9JHtyZXEuYm9keS51c2VySW5wdXR9YClcblxuICBjb25zdCBiYXNlQ29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcbiAgICBtb2RlbDogJ3RleHQtZGF2aW5jaS0wMDMnLFxuICAgIHByb21wdDogYCR7YmFzZVByb21wdFByZWZpeH0ke3JlcS5ib2R5LnVzZXJJbnB1dH1cXG5gLFxuICAgIHRlbXBlcmF0dXJlOiAwLjksXG4gICAgbWF4X3Rva2VuczogMTc1MCxcbiAgfSk7XG4gIFxuICBjb25zdCBiYXNlUHJvbXB0T3V0cHV0ID0gYmFzZUNvbXBsZXRpb24uZGF0YS5jaG9pY2VzLnBvcCgpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgb3V0cHV0OiBiYXNlUHJvbXB0T3V0cHV0IH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVBY3Rpb247XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJiYXNlUHJvbXB0UHJlZml4IiwiZ2VuZXJhdGVBY3Rpb24iLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInVzZXJJbnB1dCIsImJhc2VDb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwicHJvbXB0IiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwiYmFzZVByb21wdE91dHB1dCIsImRhdGEiLCJjaG9pY2VzIiwicG9wIiwic3RhdHVzIiwianNvbiIsIm91dHB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();