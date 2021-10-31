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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space */ \"./src/scripts/space.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game(canvas, context) {\n    _classCallCheck(this, Game);\n\n    this.canvas = canvas;\n    this.ctx = context;\n    this.startGame();\n  }\n\n  _createClass(Game, [{\n    key: \"startGame\",\n    value: function startGame() {\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      _space__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render.bind(this)();\n    }\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQztBQUNuQixnQkFBWUMsTUFBWixFQUFvQkMsT0FBcEIsRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0UsR0FBTCxHQUFXRCxPQUFYO0FBQ0EsU0FBS0UsU0FBTDtBQUNEOzs7O1dBRUQscUJBQVk7QUFDVixXQUFLQyxNQUFMO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1BOLE1BQUFBLDBEQUFBLENBQWlCLElBQWpCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KYXZhU2NyaXB0UHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhciBmcm9tICcuL3NwYWNlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjb250ZXh0O1xuICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgU3Rhci5yZW5kZXIuYmluZCh0aGlzKSgpO1xuICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJTdGFyIiwiR2FtZSIsImNhbnZhcyIsImNvbnRleHQiLCJjdHgiLCJzdGFydEdhbWUiLCJyZW5kZXIiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/space.js":
/*!******************************!*\
  !*** ./src/scripts/space.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Star; }\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar COLORS = ['FFFFFF', 'F5F5F5', 'FFFAFA', 'B0E0E6', 'D3D3D3', 'E0FFFF', 'F8F8FF', 'F0FFFF', '87CEFA', '00CDCD', '79CDCD', 'E5FAFA'];\nvar stars = [];\n\nvar Star = /*#__PURE__*/function () {\n  function Star(context, posish, size) {\n    _classCallCheck(this, Star);\n\n    this.context = context;\n    this.x = posish[0];\n    this.y = posish[1];\n    this.size = size;\n    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];\n  } //arg ctx comes from this.ctx in game.js\n\n\n  _createClass(Star, [{\n    key: \"drawStar\",\n    value: function drawStar(ctx) {\n      ctx.fillStyle = '#' + \"\".concat(this.color);\n      ctx.fillRect(this.x, this.y, this.size, this.size);\n      console.log(this.x, this.y);\n    }\n  }, {\n    key: \"generateStarPosish\",\n    value: function generateStarPosish() {\n      var width = this.canvas.width;\n      var height = this.canvas.height;\n      var randy = Math.random();\n      var x = null;\n      var y = null;\n\n      if (randy < 0.5) {\n        x = width * 0.2 + Math.random() * (width * 0.6);\n        y = Math.random() < 0.5 ? height * 0.2 : height * 0.8;\n      } else {\n        y = height * 0.2 + Math.random() * (height * 0.6);\n        x = Math.random() < 0.5 ? width * 0.2 : width * 0.8;\n      }\n\n      return [x, y];\n    }\n  }, {\n    key: \"generateVelo\",\n    value: function generateVelo() {\n      var centerX = this.context.width / 2;\n      var centerY = this.context.height / 2;\n      this.angle = Math.atan((centerY - this.y) / (this.x - centerX)) * 180 / Math.PI;\n    }\n  }, {\n    key: \"generateStars\",\n    value: function generateStars(n) {\n      var _this = this;\n\n      for (var i = 0; i < n; i++) {\n        var posish = Star.prototype.generateStarPosish.bind(this)();\n        var newStar = new Star(this.canvas, posish, 5 + 10 * Math.random());\n        newStar.generateVelo();\n        stars.push(newStar);\n      }\n\n      stars.forEach(function (star) {\n        star.drawStar(_this.ctx);\n      }, this);\n      console.log('drew it once');\n    }\n  }, {\n    key: \"move\",\n    value: function move() {\n      var _this2 = this;\n\n      // requestAnimationFrame(move);\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // debugger\n\n      stars.forEach(function (star) {\n        var speed = Math.random() * 50;\n        star.x = star.x + Math.cos(star.angle) * speed;\n        star.y = star.y + Math.sin(star.angle) * speed;\n        star.drawStar(_this2.ctx);\n        console.log('drew it a second time');\n      }, this);\n    }\n  }], [{\n    key: \"render\",\n    value: function render() {\n      Star.prototype.generateStars.bind(this)(1);\n      Star.prototype.move.bind(this)(); // setInterval(\n      //   Star.prototype.move.bind(this)(),\n      //   Star.\n      // )\n    }\n  }]);\n\n  return Star;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUM3QixDQUFMLEdBQVNFLElBQUksQ0FBQ2dDLEdBQUwsQ0FBU0wsSUFBSSxDQUFDWixLQUFkLElBQXVCZSxLQUF6QztBQUNBSCxRQUFBQSxJQUFJLENBQUNDLFFBQUwsQ0FBYyxNQUFJLENBQUN4QixHQUFuQjtBQUNBRyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNELE9BTkQsRUFNRyxJQU5IO0FBUUQ7OztXQUVELGtCQUFnQjtBQUNkZixNQUFBQSxJQUFJLENBQUMyQixTQUFMLENBQWVhLGFBQWYsQ0FBNkJYLElBQTdCLENBQWtDLElBQWxDLEVBQXdDLENBQXhDO0FBQ0E3QixNQUFBQSxJQUFJLENBQUMyQixTQUFMLENBQWVjLElBQWYsQ0FBb0JaLElBQXBCLENBQXlCLElBQXpCLElBRmMsQ0FHZDtBQUNBO0FBQ0E7QUFDQTtBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSmF2YVNjcmlwdFByb2plY3QvLi9zcmMvc2NyaXB0cy9zcGFjZS5qcz81ZjYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSdcblxuY29uc3QgQ09MT1JTID0gW1xuICAnRkZGRkZGJyxcbiAgJ0Y1RjVGNScsXG4gICdGRkZBRkEnLFxuICAnQjBFMEU2JyxcbiAgJ0QzRDNEMycsXG4gICdFMEZGRkYnLFxuICAnRjhGOEZGJyxcbiAgJ0YwRkZGRicsXG4gICc4N0NFRkEnLFxuICAnMDBDRENEJyxcbiAgJzc5Q0RDRCcsXG4gICdFNUZBRkEnXG5dXG5cbmNvbnN0IHN0YXJzID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXIge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBwb3Npc2gsIHNpemUpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMueCA9IHBvc2lzaFswXTtcbiAgICB0aGlzLnkgPSBwb3Npc2hbMV07XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmNvbG9yID0gQ09MT1JTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpDT0xPUlMubGVuZ3RoKV07XG4gICAgXG4gIH1cbiAgXG4gIC8vYXJnIGN0eCBjb21lcyBmcm9tIHRoaXMuY3R4IGluIGdhbWUuanNcbiAgZHJhd1N0YXIoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjJyArIGAke3RoaXMuY29sb3J9YFxuICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy5zaXplLCB0aGlzLnNpemUpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMueCwgdGhpcy55KVxuICB9XG4gIFxuICBnZW5lcmF0ZVN0YXJQb3Npc2goKSB7XG4gICAgbGV0IHdpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgbGV0IGhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICBsZXQgcmFuZHkgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGxldCB4ID0gbnVsbDtcbiAgICBsZXQgeSA9IG51bGw7XG4gICAgaWYgKHJhbmR5IDwgMC41KSB7XG4gICAgICB4ID0gKHdpZHRoICogMC4yKSArIE1hdGgucmFuZG9tKCkgKiAod2lkdGggKiAwLjYpO1xuICAgICAgeSA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyBoZWlnaHQgKiAwLjIgOiBoZWlnaHQgKiAwLjg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHkgPSAoaGVpZ2h0ICogMC4yKSArIE1hdGgucmFuZG9tKCkgKiAoaGVpZ2h0ICogMC42KTtcbiAgICAgIHggPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gd2lkdGggKiAwLjIgOiB3aWR0aCAqIDAuODtcbiAgICB9XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfVxuICBcbiAgZ2VuZXJhdGVWZWxvKCkge1xuICAgIGxldCBjZW50ZXJYID0gdGhpcy5jb250ZXh0LndpZHRoIC8gMjtcbiAgICBsZXQgY2VudGVyWSA9IHRoaXMuY29udGV4dC5oZWlnaHQgLyAyO1xuICAgIHRoaXMuYW5nbGUgPSBNYXRoLmF0YW4oKGNlbnRlclkgLSB0aGlzLnkpIC8gKHRoaXMueCAtIGNlbnRlclgpKSAqIDE4MCAvIE1hdGguUEk7XG4gIH1cblxuICBnZW5lcmF0ZVN0YXJzKG4pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgbGV0IHBvc2lzaCA9IFN0YXIucHJvdG90eXBlLmdlbmVyYXRlU3RhclBvc2lzaC5iaW5kKHRoaXMpKCk7XG4gICAgICBsZXQgbmV3U3RhciA9IG5ldyBTdGFyKHRoaXMuY2FudmFzLCBwb3Npc2gsICg1ICsgMTAgKiBNYXRoLnJhbmRvbSgpKSk7XG4gICAgICBuZXdTdGFyLmdlbmVyYXRlVmVsbygpO1xuICAgICAgc3RhcnMucHVzaChuZXdTdGFyKTtcbiAgICB9XG4gICAgc3RhcnMuZm9yRWFjaCgoc3RhcikgPT4ge1xuICAgICAgc3Rhci5kcmF3U3Rhcih0aGlzLmN0eCk7XG4gICAgfSwgdGhpcyk7XG4gICAgY29uc29sZS5sb2coJ2RyZXcgaXQgb25jZScpXG4gIH1cbiAgXG4gIG1vdmUoKSB7XG4gICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1vdmUpO1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxuICAgIC8vIGRlYnVnZ2VyXG4gICAgc3RhcnMuZm9yRWFjaCgoc3RhcikgPT4ge1xuICAgICAgbGV0IHNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDUwO1xuICAgICAgc3Rhci54ID0gc3Rhci54ICsgTWF0aC5jb3Moc3Rhci5hbmdsZSkgKiBzcGVlZDtcbiAgICAgIHN0YXIueSA9IHN0YXIueSArIE1hdGguc2luKHN0YXIuYW5nbGUpICogc3BlZWQ7XG4gICAgICBzdGFyLmRyYXdTdGFyKHRoaXMuY3R4KTtcbiAgICAgIGNvbnNvbGUubG9nKCdkcmV3IGl0IGEgc2Vjb25kIHRpbWUnKVxuICAgIH0sIHRoaXMpXG5cbiAgfVxuXG4gIHN0YXRpYyByZW5kZXIoKSB7XG4gICAgU3Rhci5wcm90b3R5cGUuZ2VuZXJhdGVTdGFycy5iaW5kKHRoaXMpKDEpO1xuICAgIFN0YXIucHJvdG90eXBlLm1vdmUuYmluZCh0aGlzKSgpO1xuICAgIC8vIHNldEludGVydmFsKFxuICAgIC8vICAgU3Rhci5wcm90b3R5cGUubW92ZS5iaW5kKHRoaXMpKCksXG4gICAgLy8gICBTdGFyLlxuICAgIC8vIClcbiAgICBcbiAgfVxufSJdLCJuYW1lcyI6WyJHYW1lIiwiQ09MT1JTIiwic3RhcnMiLCJTdGFyIiwiY29udGV4dCIsInBvc2lzaCIsInNpemUiLCJ4IiwieSIsImNvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJjYW52YXMiLCJoZWlnaHQiLCJyYW5keSIsImNlbnRlclgiLCJjZW50ZXJZIiwiYW5nbGUiLCJhdGFuIiwiUEkiLCJuIiwiaSIsInByb3RvdHlwZSIsImdlbmVyYXRlU3RhclBvc2lzaCIsImJpbmQiLCJuZXdTdGFyIiwiZ2VuZXJhdGVWZWxvIiwicHVzaCIsImZvckVhY2giLCJzdGFyIiwiZHJhd1N0YXIiLCJjbGVhclJlY3QiLCJzcGVlZCIsImNvcyIsInNpbiIsImdlbmVyYXRlU3RhcnMiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/space.js\n");

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