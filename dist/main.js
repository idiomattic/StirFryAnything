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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Star; }\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar COLORS = ['FFFFFF', 'F5F5F5', 'FFFAFA', 'B0E0E6', 'D3D3D3', 'E0FFFF', 'F8F8FF', 'F0FFFF', '87CEFA', '00CDCD', '79CDCD', 'E5FAFA'];\nvar stars = [];\n\nvar Star = /*#__PURE__*/function () {\n  function Star(context, posish, size) {\n    _classCallCheck(this, Star);\n\n    this.context = context;\n    this.x = posish[0];\n    this.y = posish[1];\n    this.size = size;\n    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];\n  } //arg ctx comes from this.ctx in game.js\n\n\n  _createClass(Star, [{\n    key: \"drawStar\",\n    value: function drawStar(ctx) {\n      ctx.beginPath();\n      ctx.fillStyle = '#' + \"\".concat(this.color);\n      ctx.fillRect(this.x, this.y, this.size, this.size);\n      console.log(this.x, this.y);\n    }\n  }, {\n    key: \"generateStarPosish\",\n    value: function generateStarPosish() {\n      var width = this.canvas.width;\n      var height = this.canvas.height;\n      var randy = Math.random();\n      var x = null;\n      var y = null;\n\n      if (randy < 0.5) {\n        x = width * 0.2 + Math.random() * (width * 0.6);\n        y = Math.random() < 0.5 ? height * 0.2 : height * 0.8;\n      } else {\n        y = height * 0.2 + Math.random() * (height * 0.6);\n        x = Math.random() < 0.5 ? width * 0.2 : width * 0.8;\n      }\n\n      return [x, y];\n    }\n  }, {\n    key: \"generateVelo\",\n    value: function generateVelo() {\n      var centerX = this.context.width / 2;\n      var centerY = this.context.height / 2;\n      this.angle = Math.atan((centerY - this.y) / (this.x - centerX)) * 180 / Math.PI;\n    }\n  }, {\n    key: \"generateStars\",\n    value: function generateStars(n) {\n      var _this = this;\n\n      for (var i = 0; i < n; i++) {\n        var posish = Star.prototype.generateStarPosish.bind(this)();\n        var newStar = new Star(this.canvas, posish, 5 + 10 * Math.random());\n        newStar.generateVelo();\n        stars.push(newStar);\n      }\n\n      stars.forEach(function (star) {\n        star.drawStar(_this.ctx);\n      }, this);\n      console.log('drew it once');\n    }\n  }, {\n    key: \"updatePos\",\n    value: function updatePos() {\n      var _this2 = this;\n\n      // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n      stars.forEach(function (star) {\n        var speed = Math.random() * 50;\n        star.x = star.x + Math.cos(star.angle) * speed;\n        star.y = star.y + Math.sin(star.angle) * speed;\n        star.drawStar(_this2.ctx);\n        console.log('drew it a second time');\n      }, this);\n    }\n  }, {\n    key: \"move\",\n    value: function move() {\n      // debugger\n      // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)\n      Star.prototype.updatePos.bind(this)(); // requestAnimationFrame(Star.prototype.move);\n    }\n  }], [{\n    key: \"render\",\n    value: function render() {\n      Star.prototype.generateStars.bind(this)(1);\n      Star.prototype.move.bind(this)(); // setInterval(Star.prototype.move.bind(this)(), 1000)\n    }\n  }]);\n\n  return Star;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDQyxRQUFMLENBQWMsTUFBSSxDQUFDekIsR0FBbkI7QUFDQUksUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDRCxPQU5ELEVBTUcsSUFOSDtBQU9EOzs7V0FFRCxnQkFBTztBQUNMO0FBQ0E7QUFDQWhCLE1BQUFBLElBQUksQ0FBQzRCLFNBQUwsQ0FBZVksU0FBZixDQUF5QlYsSUFBekIsQ0FBOEIsSUFBOUIsSUFISyxDQUlMO0FBQ0Q7OztXQUVELGtCQUFnQjtBQUNkOUIsTUFBQUEsSUFBSSxDQUFDNEIsU0FBTCxDQUFlYSxhQUFmLENBQTZCWCxJQUE3QixDQUFrQyxJQUFsQyxFQUF3QyxDQUF4QztBQUNBOUIsTUFBQUEsSUFBSSxDQUFDNEIsU0FBTCxDQUFlYyxJQUFmLENBQW9CWixJQUFwQixDQUF5QixJQUF6QixJQUZjLENBR2Q7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL0phdmFTY3JpcHRQcm9qZWN0Ly4vc3JjL3NjcmlwdHMvc3BhY2UuanM/NWY2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnXG5cbmNvbnN0IENPTE9SUyA9IFtcbiAgJ0ZGRkZGRicsXG4gICdGNUY1RjUnLFxuICAnRkZGQUZBJyxcbiAgJ0IwRTBFNicsXG4gICdEM0QzRDMnLFxuICAnRTBGRkZGJyxcbiAgJ0Y4RjhGRicsXG4gICdGMEZGRkYnLFxuICAnODdDRUZBJyxcbiAgJzAwQ0RDRCcsXG4gICc3OUNEQ0QnLFxuICAnRTVGQUZBJ1xuXVxuXG5jb25zdCBzdGFycyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgcG9zaXNoLCBzaXplKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnggPSBwb3Npc2hbMF07XG4gICAgdGhpcy55ID0gcG9zaXNoWzFdO1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgdGhpcy5jb2xvciA9IENPTE9SU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqQ09MT1JTLmxlbmd0aCldO1xuICAgIFxuICB9XG4gIFxuICAvL2FyZyBjdHggY29tZXMgZnJvbSB0aGlzLmN0eCBpbiBnYW1lLmpzXG4gIGRyYXdTdGFyKGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyMnICsgYCR7dGhpcy5jb2xvcn1gXG4gICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLnNpemUsIHRoaXMuc2l6ZSk7XG4gICAgY29uc29sZS5sb2codGhpcy54LCB0aGlzLnkpXG4gIH1cbiAgXG4gIGdlbmVyYXRlU3RhclBvc2lzaCgpIHtcbiAgICBsZXQgd2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIGxldCByYW5keSA9IE1hdGgucmFuZG9tKCk7XG4gICAgbGV0IHggPSBudWxsO1xuICAgIGxldCB5ID0gbnVsbDtcbiAgICBpZiAocmFuZHkgPCAwLjUpIHtcbiAgICAgIHggPSAod2lkdGggKiAwLjIpICsgTWF0aC5yYW5kb20oKSAqICh3aWR0aCAqIDAuNik7XG4gICAgICB5ID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/IGhlaWdodCAqIDAuMiA6IGhlaWdodCAqIDAuODtcbiAgICB9IGVsc2Uge1xuICAgICAgeSA9IChoZWlnaHQgKiAwLjIpICsgTWF0aC5yYW5kb20oKSAqIChoZWlnaHQgKiAwLjYpO1xuICAgICAgeCA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyB3aWR0aCAqIDAuMiA6IHdpZHRoICogMC44O1xuICAgIH1cbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG4gIFxuICBnZW5lcmF0ZVZlbG8oKSB7XG4gICAgbGV0IGNlbnRlclggPSB0aGlzLmNvbnRleHQud2lkdGggLyAyO1xuICAgIGxldCBjZW50ZXJZID0gdGhpcy5jb250ZXh0LmhlaWdodCAvIDI7XG4gICAgdGhpcy5hbmdsZSA9IE1hdGguYXRhbigoY2VudGVyWSAtIHRoaXMueSkgLyAodGhpcy54IC0gY2VudGVyWCkpICogMTgwIC8gTWF0aC5QSTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhcnMobikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBsZXQgcG9zaXNoID0gU3Rhci5wcm90b3R5cGUuZ2VuZXJhdGVTdGFyUG9zaXNoLmJpbmQodGhpcykoKTtcbiAgICAgIGxldCBuZXdTdGFyID0gbmV3IFN0YXIodGhpcy5jYW52YXMsIHBvc2lzaCwgKDUgKyAxMCAqIE1hdGgucmFuZG9tKCkpKTtcbiAgICAgIG5ld1N0YXIuZ2VuZXJhdGVWZWxvKCk7XG4gICAgICBzdGFycy5wdXNoKG5ld1N0YXIpO1xuICAgIH1cbiAgICBzdGFycy5mb3JFYWNoKChzdGFyKSA9PiB7XG4gICAgICBzdGFyLmRyYXdTdGFyKHRoaXMuY3R4KTtcbiAgICB9LCB0aGlzKTtcbiAgICBjb25zb2xlLmxvZygnZHJldyBpdCBvbmNlJylcbiAgfVxuXG4gIHVwZGF0ZVBvcygpIHtcbiAgICAvLyB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgc3RhcnMuZm9yRWFjaCgoc3RhcikgPT4ge1xuICAgICAgbGV0IHNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDUwO1xuICAgICAgc3Rhci54ID0gc3Rhci54ICsgTWF0aC5jb3Moc3Rhci5hbmdsZSkgKiBzcGVlZDtcbiAgICAgIHN0YXIueSA9IHN0YXIueSArIE1hdGguc2luKHN0YXIuYW5nbGUpICogc3BlZWQ7XG4gICAgICBzdGFyLmRyYXdTdGFyKHRoaXMuY3R4KTtcbiAgICAgIGNvbnNvbGUubG9nKCdkcmV3IGl0IGEgc2Vjb25kIHRpbWUnKVxuICAgIH0sIHRoaXMpXG4gIH1cbiAgXG4gIG1vdmUoKSB7XG4gICAgLy8gZGVidWdnZXJcbiAgICAvLyB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcbiAgICBTdGFyLnByb3RvdHlwZS51cGRhdGVQb3MuYmluZCh0aGlzKSgpO1xuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZShTdGFyLnByb3RvdHlwZS5tb3ZlKTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXIoKSB7XG4gICAgU3Rhci5wcm90b3R5cGUuZ2VuZXJhdGVTdGFycy5iaW5kKHRoaXMpKDEpO1xuICAgIFN0YXIucHJvdG90eXBlLm1vdmUuYmluZCh0aGlzKSgpO1xuICAgIC8vIHNldEludGVydmFsKFN0YXIucHJvdG90eXBlLm1vdmUuYmluZCh0aGlzKSgpLCAxMDAwKVxuICAgIFxuICB9XG59Il0sIm5hbWVzIjpbIkdhbWUiLCJDT0xPUlMiLCJzdGFycyIsIlN0YXIiLCJjb250ZXh0IiwicG9zaXNoIiwic2l6ZSIsIngiLCJ5IiwiY29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjdHgiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImNhbnZhcyIsImhlaWdodCIsInJhbmR5IiwiY2VudGVyWCIsImNlbnRlclkiLCJhbmdsZSIsImF0YW4iLCJQSSIsIm4iLCJpIiwicHJvdG90eXBlIiwiZ2VuZXJhdGVTdGFyUG9zaXNoIiwiYmluZCIsIm5ld1N0YXIiLCJnZW5lcmF0ZVZlbG8iLCJwdXNoIiwiZm9yRWFjaCIsInN0YXIiLCJkcmF3U3RhciIsInNwZWVkIiwiY29zIiwic2luIiwidXBkYXRlUG9zIiwiZ2VuZXJhdGVTdGFycyIsIm1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/space.js\n");

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