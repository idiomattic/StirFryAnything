/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/space */ \"./src/scripts/space.js\");\n\n\nvar canvas = document.getElementById(\"game-canvas\");\nvar context = canvas.getContext('2d'); // export {canvas, context}\n\ncanvas.width = 900;\ncanvas.height = 600;\nnew _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, context);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBLElBQU1FLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxJQUFNQyxPQUFPLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFoQixFQUNBOztBQUVBSixNQUFNLENBQUNLLEtBQVAsR0FBZSxHQUFmO0FBQ0FMLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixHQUFoQjtBQUVBLElBQUlSLHFEQUFKLENBQVNFLE1BQVQsRUFBaUJHLE9BQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSmF2YVNjcmlwdFByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSdcbmltcG9ydCBTdGFyIGZyb20gJy4vc2NyaXB0cy9zcGFjZSdcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbmNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbi8vIGV4cG9ydCB7Y2FudmFzLCBjb250ZXh0fVxuXG5jYW52YXMud2lkdGggPSA5MDA7XG5jYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG5uZXcgR2FtZShjYW52YXMsIGNvbnRleHQpO1xuIl0sIm5hbWVzIjpbIkdhbWUiLCJTdGFyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space */ \"./src/scripts/space.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game(canvas, context) {\n    _classCallCheck(this, Game);\n\n    this.canvas = canvas;\n    this.ctx = context;\n    this.startGame();\n  }\n\n  _createClass(Game, [{\n    key: \"startGame\",\n    value: function startGame() {\n      this.star = new _space__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 50, 50, 150, 'red');\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.star.animate(this.ctx);\n    }\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQztBQUNuQixnQkFBWUMsTUFBWixFQUFvQkMsT0FBcEIsRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0UsR0FBTCxHQUFXRCxPQUFYO0FBQ0EsU0FBS0UsU0FBTDtBQUNEOzs7O1dBRUQscUJBQVk7QUFDVixXQUFLQyxJQUFMLEdBQVksSUFBSU4sOENBQUosQ0FBUyxLQUFLSSxHQUFkLEVBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLEVBQTJCLEdBQTNCLEVBQWdDLEtBQWhDLENBQVo7QUFDQSxXQUFLRyxNQUFMO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1AsV0FBS0QsSUFBTCxDQUFVRSxPQUFWLENBQWtCLEtBQUtKLEdBQXZCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KYXZhU2NyaXB0UHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhciBmcm9tICcuL3NwYWNlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjb250ZXh0O1xuICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgdGhpcy5zdGFyID0gbmV3IFN0YXIodGhpcy5jdHgsIDUwLCA1MCwgMTUwLCAncmVkJylcbiAgICB0aGlzLnJlbmRlcigpXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnN0YXIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiU3RhciIsIkdhbWUiLCJjYW52YXMiLCJjb250ZXh0IiwiY3R4Iiwic3RhcnRHYW1lIiwic3RhciIsInJlbmRlciIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/space.js":
/*!******************************!*\
  !*** ./src/scripts/space.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Star; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// import {canvas as mainCanvas, context as mainContext} from \"../index\"\nvar COLORS = ['FFFFFF', 'F5F5F5', 'FFFAFA', 'B0E0E6', 'D3D3D3', 'E0FFFF', 'F8F8FF', 'FF0F8FF', 'F0FFFF']; //think Star Wars lightspeed but toned down\n\nvar Star = /*#__PURE__*/function () {\n  function Star(context, x, y, size, color) {\n    _classCallCheck(this, Star);\n\n    this.context = context;\n    this.x = x;\n    this.y = y;\n    this.size = size;\n    this.color = color;\n  }\n\n  _createClass(Star, [{\n    key: \"animate\",\n    value: function animate(ctx) {\n      this.drawStar(ctx);\n    }\n  }, {\n    key: \"drawStar\",\n    value: function drawStar(ctx) {\n      console.log(ctx);\n      ctx.fillStyle = \"\".concat(this.color);\n      ctx.fillRect(50, 50, this.size, this.size);\n    }\n  }]);\n\n  return Star;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zcGFjZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxNQUFNLEdBQUcsQ0FDYixRQURhLEVBRWIsUUFGYSxFQUdiLFFBSGEsRUFJYixRQUphLEVBS2IsUUFMYSxFQU1iLFFBTmEsRUFPYixRQVBhLEVBUWIsU0FSYSxFQVNiLFFBVGEsQ0FBZixFQWFBOztJQUNxQkM7QUFDbkIsZ0JBQVlDLE9BQVosRUFBcUJDLENBQXJCLEVBQXdCQyxDQUF4QixFQUEyQkMsSUFBM0IsRUFBaUNDLEtBQWpDLEVBQXdDO0FBQUE7O0FBQ3RDLFNBQUtKLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7O1dBRUQsaUJBQVFDLEdBQVIsRUFBYTtBQUNYLFdBQUtDLFFBQUwsQ0FBY0QsR0FBZDtBQUNEOzs7V0FFRCxrQkFBU0EsR0FBVCxFQUFjO0FBQ1pFLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBRUFBLE1BQUFBLEdBQUcsQ0FBQ0ksU0FBSixhQUFtQixLQUFLTCxLQUF4QjtBQUNBQyxNQUFBQSxHQUFHLENBQUNLLFFBQUosQ0FBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEtBQUtQLElBQTFCLEVBQWdDLEtBQUtBLElBQXJDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KYXZhU2NyaXB0UHJvamVjdC8uL3NyYy9zY3JpcHRzL3NwYWNlLmpzPzVmNjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtjYW52YXMgYXMgbWFpbkNhbnZhcywgY29udGV4dCBhcyBtYWluQ29udGV4dH0gZnJvbSBcIi4uL2luZGV4XCJcbmNvbnN0IENPTE9SUyA9IFtcbiAgJ0ZGRkZGRicsXG4gICdGNUY1RjUnLFxuICAnRkZGQUZBJyxcbiAgJ0IwRTBFNicsXG4gICdEM0QzRDMnLFxuICAnRTBGRkZGJyxcbiAgJ0Y4RjhGRicsXG4gICdGRjBGOEZGJyxcbiAgJ0YwRkZGRidcbl1cblxuXG4vL3RoaW5rIFN0YXIgV2FycyBsaWdodHNwZWVkIGJ1dCB0b25lZCBkb3duXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgeCwgeSwgc2l6ZSwgY29sb3IpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIGFuaW1hdGUoY3R4KSB7XG4gICAgdGhpcy5kcmF3U3RhcihjdHgpO1xuICB9XG4gIFxuICBkcmF3U3RhcihjdHgpIHtcbiAgICBjb25zb2xlLmxvZyhjdHgpXG5cbiAgICBjdHguZmlsbFN0eWxlID0gYCR7dGhpcy5jb2xvcn1gO1xuICAgIGN0eC5maWxsUmVjdCg1MCwgNTAsIHRoaXMuc2l6ZSwgdGhpcy5zaXplKTtcbiAgfVxuXG59Il0sIm5hbWVzIjpbIkNPTE9SUyIsIlN0YXIiLCJjb250ZXh0IiwieCIsInkiLCJzaXplIiwiY29sb3IiLCJjdHgiLCJkcmF3U3RhciIsImNvbnNvbGUiLCJsb2ciLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/space.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KYXZhU2NyaXB0UHJvamVjdC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;