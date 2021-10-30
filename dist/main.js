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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space */ \"./src/scripts/space.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game(canvas, context) {\n    _classCallCheck(this, Game);\n\n    this.canvas = canvas;\n    this.ctx = context;\n    this.startGame();\n  }\n\n  _createClass(Game, [{\n    key: \"startGame\",\n    value: function startGame() {\n      this.star = new _space__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, [50, 50], 10);\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.star.drawStars(this.ctx);\n      this.generateStars();\n    }\n  }, {\n    key: \"generateStars\",\n    value: function generateStars() {\n      var stars = [];\n\n      for (var i = 0; i < 10; i++) {\n        var posish = generateStarPosish.call(this.ctx);\n        stars.push(new _space__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, posish, 10));\n      }\n\n      console.log(stars);\n    }\n  }]);\n\n  return Game;\n}();\n\n\nvar stars = [];\n\nfunction generateStarPosish() {\n  var width = this.canvas.width;\n  var height = this.canvas.height;\n  var bigRandy = Math.random(); // randy is the boss\n\n  var x = null;\n  var y = null;\n\n  if (bigRandy < 0.5) {\n    // want random x in bounds of 20%-80% canvas box\n    x = width * 0.2 + width * 0.6 * Math.random(); // want y fixed to top or bottom\n\n    var littleRandy = Math.random();\n    y = littleRandy < 0.5 ? height * 0.2 : height * 0.8;\n  } else {\n    // want random y in bounds of canvas box\n    y = height * 0.2 + height * 0.6 * Math.random(); // want x fixed to left or right\n\n    var _littleRandy = Math.random();\n\n    x = _littleRandy < 0.5 ? width * 0.2 : width * 0.8;\n  }\n\n  return [x, y]; // local ctx is the canvas\n  // setInterval(() => {\n  //   stars.push(new Star(\n  //     this.ctx,\n  //     x,\n  //     y,\n  //     size\n  //   ))\n  // }, 100)\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQztBQUNuQixnQkFBWUMsTUFBWixFQUFvQkMsT0FBcEIsRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0UsR0FBTCxHQUFXRCxPQUFYO0FBQ0EsU0FBS0UsU0FBTDtBQUNEOzs7O1dBRUQscUJBQVk7QUFFVixXQUFLQyxJQUFMLEdBQVksSUFBSU4sOENBQUosQ0FBUyxLQUFLSSxHQUFkLEVBQW1CLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBbkIsRUFBNkIsRUFBN0IsQ0FBWjtBQUNBLFdBQUtHLE1BQUw7QUFDRDs7O1dBRUQsa0JBQVM7QUFDUCxXQUFLRCxJQUFMLENBQVVFLFNBQVYsQ0FBb0IsS0FBS0osR0FBekI7QUFDQSxXQUFLSyxhQUFMO0FBQ0Q7OztXQUVELHlCQUFnQjtBQUNkLFVBQU1DLEtBQUssR0FBRyxFQUFkOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUMzQixZQUFJQyxNQUFNLEdBQUdDLGtCQUFrQixDQUFDQyxJQUFuQixDQUF3QixLQUFLVixHQUE3QixDQUFiO0FBQ0FNLFFBQUFBLEtBQUssQ0FBQ0ssSUFBTixDQUFXLElBQUlmLDhDQUFKLENBQVMsS0FBS0ksR0FBZCxFQUFtQlEsTUFBbkIsRUFBMkIsRUFBM0IsQ0FBWDtBQUNEOztBQUNESSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsS0FBWjtBQUNEOzs7Ozs7O0FBSUgsSUFBTUEsS0FBSyxHQUFHLEVBQWQ7O0FBRUEsU0FBU0csa0JBQVQsR0FBOEI7QUFDNUIsTUFBSUssS0FBSyxHQUFHLEtBQUtoQixNQUFMLENBQVlnQixLQUF4QjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxLQUFLakIsTUFBTCxDQUFZaUIsTUFBekI7QUFDQSxNQUFJQyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxFQUFmLENBSDRCLENBR0U7O0FBQzlCLE1BQUlDLENBQUMsR0FBRyxJQUFSO0FBQ0EsTUFBSUMsQ0FBQyxHQUFHLElBQVI7O0FBQ0EsTUFBSUosUUFBUSxHQUFHLEdBQWYsRUFBb0I7QUFDbEI7QUFDQUcsSUFBQUEsQ0FBQyxHQUFJTCxLQUFLLEdBQUksR0FBVixHQUFrQkEsS0FBSyxHQUFHLEdBQVQsR0FBZ0JHLElBQUksQ0FBQ0MsTUFBTCxFQUFyQyxDQUZrQixDQUdsQjs7QUFDQSxRQUFJRyxXQUFXLEdBQUdKLElBQUksQ0FBQ0MsTUFBTCxFQUFsQjtBQUNBRSxJQUFBQSxDQUFDLEdBQUdDLFdBQVcsR0FBRyxHQUFkLEdBQW9CTixNQUFNLEdBQUcsR0FBN0IsR0FBbUNBLE1BQU0sR0FBRyxHQUFoRDtBQUNELEdBTkQsTUFNTztBQUNMO0FBQ0FLLElBQUFBLENBQUMsR0FBSUwsTUFBTSxHQUFJLEdBQVgsR0FBbUJBLE1BQU0sR0FBRyxHQUFWLEdBQWlCRSxJQUFJLENBQUNDLE1BQUwsRUFBdkMsQ0FGSyxDQUdMOztBQUNBLFFBQUlHLFlBQVcsR0FBR0osSUFBSSxDQUFDQyxNQUFMLEVBQWxCOztBQUNBQyxJQUFBQSxDQUFDLEdBQUdFLFlBQVcsR0FBRyxHQUFkLEdBQW9CUCxLQUFLLEdBQUcsR0FBNUIsR0FBa0NBLEtBQUssR0FBRyxHQUE5QztBQUNEOztBQUNELFNBQU8sQ0FBQ0ssQ0FBRCxFQUFJQyxDQUFKLENBQVAsQ0FuQjRCLENBcUI1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL0phdmFTY3JpcHRQcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGFyIGZyb20gJy4vc3BhY2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgfVxuXG4gIHN0YXJ0R2FtZSgpIHtcblxuICAgIHRoaXMuc3RhciA9IG5ldyBTdGFyKHRoaXMuY3R4LCBbNTAsIDUwXSwgMTApXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5zdGFyLmRyYXdTdGFycyh0aGlzLmN0eClcbiAgICB0aGlzLmdlbmVyYXRlU3RhcnMoKVxuICB9XG5cbiAgZ2VuZXJhdGVTdGFycygpIHtcbiAgICBjb25zdCBzdGFycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgbGV0IHBvc2lzaCA9IGdlbmVyYXRlU3RhclBvc2lzaC5jYWxsKHRoaXMuY3R4KVxuICAgICAgc3RhcnMucHVzaChuZXcgU3Rhcih0aGlzLmN0eCwgcG9zaXNoLCAxMCkpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHN0YXJzKVxuICB9XG5cbn1cblxuY29uc3Qgc3RhcnMgPSBbXTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVTdGFyUG9zaXNoKCkge1xuICBsZXQgd2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgbGV0IGhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgbGV0IGJpZ1JhbmR5ID0gTWF0aC5yYW5kb20oKTsgLy8gcmFuZHkgaXMgdGhlIGJvc3NcbiAgbGV0IHggPSBudWxsO1xuICBsZXQgeSA9IG51bGw7XG4gIGlmIChiaWdSYW5keSA8IDAuNSkge1xuICAgIC8vIHdhbnQgcmFuZG9tIHggaW4gYm91bmRzIG9mIDIwJS04MCUgY2FudmFzIGJveFxuICAgIHggPSAod2lkdGggICogMC4yKSArICh3aWR0aCAqIDAuNikgKiBNYXRoLnJhbmRvbSgpO1xuICAgIC8vIHdhbnQgeSBmaXhlZCB0byB0b3Agb3IgYm90dG9tXG4gICAgbGV0IGxpdHRsZVJhbmR5ID0gTWF0aC5yYW5kb20oKTtcbiAgICB5ID0gbGl0dGxlUmFuZHkgPCAwLjUgPyBoZWlnaHQgKiAwLjIgOiBoZWlnaHQgKiAwLjg7XG4gIH0gZWxzZSB7XG4gICAgLy8gd2FudCByYW5kb20geSBpbiBib3VuZHMgb2YgY2FudmFzIGJveFxuICAgIHkgPSAoaGVpZ2h0ICAqIDAuMikgKyAoaGVpZ2h0ICogMC42KSAqIE1hdGgucmFuZG9tKCk7XG4gICAgLy8gd2FudCB4IGZpeGVkIHRvIGxlZnQgb3IgcmlnaHRcbiAgICBsZXQgbGl0dGxlUmFuZHkgPSBNYXRoLnJhbmRvbSgpO1xuICAgIHggPSBsaXR0bGVSYW5keSA8IDAuNSA/IHdpZHRoICogMC4yIDogd2lkdGggKiAwLjg7XG4gIH1cbiAgcmV0dXJuIFt4LCB5XVxuXG4gIC8vIGxvY2FsIGN0eCBpcyB0aGUgY2FudmFzXG4gIC8vIHNldEludGVydmFsKCgpID0+IHtcbiAgLy8gICBzdGFycy5wdXNoKG5ldyBTdGFyKFxuICAvLyAgICAgdGhpcy5jdHgsXG4gIC8vICAgICB4LFxuICAvLyAgICAgeSxcbiAgLy8gICAgIHNpemVcbiAgLy8gICApKVxuICAvLyB9LCAxMDApXG59XG5cbiJdLCJuYW1lcyI6WyJTdGFyIiwiR2FtZSIsImNhbnZhcyIsImNvbnRleHQiLCJjdHgiLCJzdGFydEdhbWUiLCJzdGFyIiwicmVuZGVyIiwiZHJhd1N0YXJzIiwiZ2VuZXJhdGVTdGFycyIsInN0YXJzIiwiaSIsInBvc2lzaCIsImdlbmVyYXRlU3RhclBvc2lzaCIsImNhbGwiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0IiwiYmlnUmFuZHkiLCJNYXRoIiwicmFuZG9tIiwieCIsInkiLCJsaXR0bGVSYW5keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/space.js":
/*!******************************!*\
  !*** ./src/scripts/space.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Star; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar COLORS = ['FFFFFF', 'F5F5F5', 'FFFAFA', 'B0E0E6', 'D3D3D3', 'E0FFFF', 'F8F8FF', 'FF0F8FF', 'F0FFFF']; //think Star Wars lightspeed but toned down\n\nvar Star = /*#__PURE__*/function () {\n  function Star(context, posish, size) {\n    _classCallCheck(this, Star);\n\n    this.context = context;\n    this.x = posish[0];\n    this.y = posish[1];\n    this.size = size;\n    this.color = COLORS[Math.floor(Math.random() * COLORS.length)]; //take a random float btw 0 and 1, multiply by length of color arr, \n    //truncate, and index into color arr\n  } //arg ctx comes from this.ctx in game.js\n\n\n  _createClass(Star, [{\n    key: \"drawStars\",\n    value: function drawStars(ctx) {\n      ctx.fillStyle = '#' + \"\".concat(this.color); //needs # !!!!!!!!!\n\n      ctx.fillRect(50, 50, this.size, this.size);\n    }\n  }]);\n\n  return Star;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zcGFjZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHLENBQ2IsUUFEYSxFQUViLFFBRmEsRUFHYixRQUhhLEVBSWIsUUFKYSxFQUtiLFFBTGEsRUFNYixRQU5hLEVBT2IsUUFQYSxFQVFiLFNBUmEsRUFTYixRQVRhLENBQWYsRUFZQTs7SUFDcUJDO0FBQ25CLGdCQUFZQyxPQUFaLEVBQXFCQyxNQUFyQixFQUE2QkMsSUFBN0IsRUFBbUM7QUFBQTs7QUFDakMsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0csQ0FBTCxHQUFTRixNQUFNLENBQUMsQ0FBRCxDQUFmO0FBQ0EsU0FBS0csQ0FBTCxHQUFTSCxNQUFNLENBQUMsQ0FBRCxDQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0csS0FBTCxHQUFhUCxNQUFNLENBQUNRLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBY1YsTUFBTSxDQUFDVyxNQUFoQyxDQUFELENBQW5CLENBTGlDLENBTWpDO0FBQ0E7QUFDRCxJQUVEOzs7OztXQUNBLG1CQUFVQyxHQUFWLEVBQWU7QUFDYkEsTUFBQUEsR0FBRyxDQUFDQyxTQUFKLEdBQWdCLGdCQUFTLEtBQUtOLEtBQWQsQ0FBaEIsQ0FEYSxDQUN5Qjs7QUFDdENLLE1BQUFBLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsS0FBS1YsSUFBMUIsRUFBZ0MsS0FBS0EsSUFBckM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL0phdmFTY3JpcHRQcm9qZWN0Ly4vc3JjL3NjcmlwdHMvc3BhY2UuanM/NWY2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT0xPUlMgPSBbXG4gICdGRkZGRkYnLFxuICAnRjVGNUY1JyxcbiAgJ0ZGRkFGQScsXG4gICdCMEUwRTYnLFxuICAnRDNEM0QzJyxcbiAgJ0UwRkZGRicsXG4gICdGOEY4RkYnLFxuICAnRkYwRjhGRicsXG4gICdGMEZGRkYnXG5dXG5cbi8vdGhpbmsgU3RhciBXYXJzIGxpZ2h0c3BlZWQgYnV0IHRvbmVkIGRvd25cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXIge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBwb3Npc2gsIHNpemUpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMueCA9IHBvc2lzaFswXTtcbiAgICB0aGlzLnkgPSBwb3Npc2hbMV07XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmNvbG9yID0gQ09MT1JTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpDT0xPUlMubGVuZ3RoKV07XG4gICAgLy90YWtlIGEgcmFuZG9tIGZsb2F0IGJ0dyAwIGFuZCAxLCBtdWx0aXBseSBieSBsZW5ndGggb2YgY29sb3IgYXJyLCBcbiAgICAvL3RydW5jYXRlLCBhbmQgaW5kZXggaW50byBjb2xvciBhcnJcbiAgfVxuXG4gIC8vYXJnIGN0eCBjb21lcyBmcm9tIHRoaXMuY3R4IGluIGdhbWUuanNcbiAgZHJhd1N0YXJzKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSAnIycgKyBgJHt0aGlzLmNvbG9yfWAgLy9uZWVkcyAjICEhISEhISEhIVxuICAgIGN0eC5maWxsUmVjdCg1MCwgNTAsIHRoaXMuc2l6ZSwgdGhpcy5zaXplKTtcbiAgfVxuXG59Il0sIm5hbWVzIjpbIkNPTE9SUyIsIlN0YXIiLCJjb250ZXh0IiwicG9zaXNoIiwic2l6ZSIsIngiLCJ5IiwiY29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/space.js\n");

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