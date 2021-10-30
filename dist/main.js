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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/space */ \"./src/scripts/space.js\");\n\n\nvar canvas = document.getElementById(\"game-canvas\");\nvar context = canvas.getContext('2d'); // export {canvas, context}\n\ncanvas.width = 900;\ncanvas.height = 600;\nvar center = [canvas.width / 2, canvas.height / 2];\nnew _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, context);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBLElBQU1FLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxJQUFNQyxPQUFPLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFoQixFQUNBOztBQUVBSixNQUFNLENBQUNLLEtBQVAsR0FBZSxHQUFmO0FBQ0FMLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixHQUFoQjtBQUNBLElBQU1DLE1BQU0sR0FBRyxDQUFDUCxNQUFNLENBQUNLLEtBQVAsR0FBZSxDQUFoQixFQUFtQkwsTUFBTSxDQUFDTSxNQUFQLEdBQWdCLENBQW5DLENBQWY7QUFHQSxJQUFJUixxREFBSixDQUFTRSxNQUFULEVBQWlCRyxPQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL0phdmFTY3JpcHRQcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5pbXBvcnQgU3RhciBmcm9tICcuL3NjcmlwdHMvc3BhY2UnXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4vLyBleHBvcnQge2NhbnZhcywgY29udGV4dH1cblxuY2FudmFzLndpZHRoID0gOTAwO1xuY2FudmFzLmhlaWdodCA9IDYwMDtcbmNvbnN0IGNlbnRlciA9IFtjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMl1cblxuXG5uZXcgR2FtZShjYW52YXMsIGNvbnRleHQpO1xuIl0sIm5hbWVzIjpbIkdhbWUiLCJTdGFyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJjZW50ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space */ \"./src/scripts/space.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game(canvas, context) {\n    _classCallCheck(this, Game);\n\n    this.canvas = canvas;\n    this.ctx = context;\n    this.startGame();\n  }\n\n  _createClass(Game, [{\n    key: \"startGame\",\n    value: function startGame() {\n      this.star = new _space__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 50, 50, 10);\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.star.drawStars(this.ctx);\n    }\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQztBQUNuQixnQkFBWUMsTUFBWixFQUFvQkMsT0FBcEIsRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0UsR0FBTCxHQUFXRCxPQUFYO0FBQ0EsU0FBS0UsU0FBTDtBQUNEOzs7O1dBRUQscUJBQVk7QUFDVixXQUFLQyxJQUFMLEdBQVksSUFBSU4sOENBQUosQ0FBUyxLQUFLSSxHQUFkLEVBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLENBQVo7QUFDQSxXQUFLRyxNQUFMO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1AsV0FBS0QsSUFBTCxDQUFVRSxTQUFWLENBQW9CLEtBQUtKLEdBQXpCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KYXZhU2NyaXB0UHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhciBmcm9tICcuL3NwYWNlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjb250ZXh0O1xuICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgdGhpcy5zdGFyID0gbmV3IFN0YXIodGhpcy5jdHgsIDUwLCA1MCwgMTApXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5zdGFyLmRyYXdTdGFycyh0aGlzLmN0eClcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiU3RhciIsIkdhbWUiLCJjYW52YXMiLCJjb250ZXh0IiwiY3R4Iiwic3RhcnRHYW1lIiwic3RhciIsInJlbmRlciIsImRyYXdTdGFycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/space.js":
/*!******************************!*\
  !*** ./src/scripts/space.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Star; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar COLORS = ['FFFFFF', 'F5F5F5', 'FFFAFA', 'B0E0E6', 'D3D3D3', 'E0FFFF', 'F8F8FF', 'FF0F8FF', 'F0FFFF']; //think Star Wars lightspeed but toned down\n\nvar Star = /*#__PURE__*/function () {\n  function Star(context, x, y, size) {\n    _classCallCheck(this, Star);\n\n    this.context = context;\n    this.x = x;\n    this.y = y;\n    this.size = size;\n    this.color = COLORS[Math.floor(Math.random() * COLORS.length)]; //take a random float btw 0 and 1, multiply by length of color arr, \n    //truncate, and index into color arr\n  } //arg ctx comes from this.ctx in game.js\n\n\n  _createClass(Star, [{\n    key: \"drawStars\",\n    value: function drawStars(ctx) {\n      ctx.fillStyle = '#' + \"\".concat(this.color); //needs # !!!!!!!!!\n\n      ctx.fillRect(50, 50, this.size, this.size);\n    }\n  }]);\n\n  return Star;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zcGFjZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHLENBQ2IsUUFEYSxFQUViLFFBRmEsRUFHYixRQUhhLEVBSWIsUUFKYSxFQUtiLFFBTGEsRUFNYixRQU5hLEVBT2IsUUFQYSxFQVFiLFNBUmEsRUFTYixRQVRhLENBQWYsRUFZQTs7SUFDcUJDO0FBQ25CLGdCQUFZQyxPQUFaLEVBQXFCQyxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtILE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYU4sTUFBTSxDQUFDTyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWNULE1BQU0sQ0FBQ1UsTUFBaEMsQ0FBRCxDQUFuQixDQUwrQixDQU0vQjtBQUNBO0FBQ0QsSUFFRDs7Ozs7V0FDQSxtQkFBVUMsR0FBVixFQUFlO0FBQ2JBLE1BQUFBLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQixnQkFBUyxLQUFLTixLQUFkLENBQWhCLENBRGEsQ0FDeUI7O0FBQ3RDSyxNQUFBQSxHQUFHLENBQUNFLFFBQUosQ0FBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEtBQUtSLElBQTFCLEVBQWdDLEtBQUtBLElBQXJDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KYXZhU2NyaXB0UHJvamVjdC8uL3NyYy9zY3JpcHRzL3NwYWNlLmpzPzVmNjIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09MT1JTID0gW1xuICAnRkZGRkZGJyxcbiAgJ0Y1RjVGNScsXG4gICdGRkZBRkEnLFxuICAnQjBFMEU2JyxcbiAgJ0QzRDNEMycsXG4gICdFMEZGRkYnLFxuICAnRjhGOEZGJyxcbiAgJ0ZGMEY4RkYnLFxuICAnRjBGRkZGJ1xuXVxuXG4vL3RoaW5rIFN0YXIgV2FycyBsaWdodHNwZWVkIGJ1dCB0b25lZCBkb3duXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgeCwgeSwgc2l6ZSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgdGhpcy5jb2xvciA9IENPTE9SU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqQ09MT1JTLmxlbmd0aCldO1xuICAgIC8vdGFrZSBhIHJhbmRvbSBmbG9hdCBidHcgMCBhbmQgMSwgbXVsdGlwbHkgYnkgbGVuZ3RoIG9mIGNvbG9yIGFyciwgXG4gICAgLy90cnVuY2F0ZSwgYW5kIGluZGV4IGludG8gY29sb3IgYXJyXG4gIH1cblxuICAvL2FyZyBjdHggY29tZXMgZnJvbSB0aGlzLmN0eCBpbiBnYW1lLmpzXG4gIGRyYXdTdGFycyhjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gJyMnICsgYCR7dGhpcy5jb2xvcn1gIC8vbmVlZHMgIyAhISEhISEhISFcbiAgICBjdHguZmlsbFJlY3QoNTAsIDUwLCB0aGlzLnNpemUsIHRoaXMuc2l6ZSk7XG4gIH1cblxufSJdLCJuYW1lcyI6WyJDT0xPUlMiLCJTdGFyIiwiY29udGV4dCIsIngiLCJ5Iiwic2l6ZSIsImNvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/space.js\n");

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