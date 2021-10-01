/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Circle.js":
/*!**************************!*\
  !*** ./src/js/Circle.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/js/helper.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Circle = function Circle() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$x = _ref.x,
      x = _ref$x === void 0 ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === void 0 ? 0 : _ref$y,
      _ref$radius = _ref.radius,
      radius = _ref$radius === void 0 ? 1 : _ref$radius,
      _ref$rotation = _ref.rotation,
      rotation = _ref$rotation === void 0 ? 45 * Math.PI / 180 : _ref$rotation,
      _ref$startAngle = _ref.startAngle,
      startAngle = _ref$startAngle === void 0 ? 0 : _ref$startAngle,
      _ref$endAngle = _ref.endAngle,
      endAngle = _ref$endAngle === void 0 ? 2 * Math.PI : _ref$endAngle,
      _ref$fillColor = _ref.fillColor,
      fillColor = _ref$fillColor === void 0 ? _helper__WEBPACK_IMPORTED_MODULE_0__.randomColor : _ref$fillColor;

  _classCallCheck(this, Circle);

  this.x = x;
  this.y = y;
  this.radius = radius;
  this.rotation = rotation;
  this.startAngle = startAngle;
  this.endAngle = endAngle;
  this.fillColor = fillColor;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Circle);

/***/ }),

/***/ "./src/js/Rectangle.js":
/*!*****************************!*\
  !*** ./src/js/Rectangle.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/js/helper.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Rectangle = function Rectangle() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$x = _ref.x,
      x = _ref$x === void 0 ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === void 0 ? 0 : _ref$y,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 10 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 20 : _ref$height,
      _ref$fillColor = _ref.fillColor,
      fillColor = _ref$fillColor === void 0 ? _helper__WEBPACK_IMPORTED_MODULE_0__.randomColor : _ref$fillColor;

  _classCallCheck(this, Rectangle);

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.fillColor = fillColor;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rectangle);

/***/ }),

/***/ "./src/js/SBackgroundCreator.js":
/*!**************************************!*\
  !*** ./src/js/SBackgroundCreator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/js/helper.js");
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rectangle */ "./src/js/Rectangle.js");
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Circle */ "./src/js/Circle.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var SBackgroundCreator = /*#__PURE__*/function () {
  function SBackgroundCreator(canvasEl) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$fillShape = _ref.fillShape,
        fillShape = _ref$fillShape === void 0 ? true : _ref$fillShape,
        _ref$numShapes = _ref.numShapes,
        numShapes = _ref$numShapes === void 0 ? 10 : _ref$numShapes,
        _ref$alpha = _ref.alpha,
        alpha = _ref$alpha === void 0 ? true : _ref$alpha,
        _ref$bgColor = _ref.bgColor,
        bgColor = _ref$bgColor === void 0 ? 'black' : _ref$bgColor;

    _classCallCheck(this, SBackgroundCreator);

    this.canvasEl = canvasEl;
    this.alpha = alpha;
    this.ctx = this.canvasEl.getContext("2d", {
      alpha: this.alpha
    });
    this.fillShape = fillShape;
    this.numShapes = numShapes;
    this.canvasW = this.canvasEl.width;
    this.canvasH = this.canvasEl.height;
    this.canvasEl.style.cssText = "background:".concat(bgColor);
    this.shapes = [];
  }

  _createClass(SBackgroundCreator, [{
    key: "init",
    value: function init() {
      this.potentialShapes = [new _Rectangle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        x: (0,_helper__WEBPACK_IMPORTED_MODULE_0__.randomPosition)(0, window.innerWidth),
        y: (0,_helper__WEBPACK_IMPORTED_MODULE_0__.randomPosition)(0, window.innerHeight),
        width: (0,_helper__WEBPACK_IMPORTED_MODULE_0__.randomPosition)(18, 90),
        height: (0,_helper__WEBPACK_IMPORTED_MODULE_0__.randomPosition)(18, 90)
      }), new _Circle__WEBPACK_IMPORTED_MODULE_2__["default"]({
        x: (0,_helper__WEBPACK_IMPORTED_MODULE_0__.randomPosition)(0, window.innerWidth),
        y: (0,_helper__WEBPACK_IMPORTED_MODULE_0__.randomPosition)(0, window.innerHeight),
        radius: (0,_helper__WEBPACK_IMPORTED_MODULE_0__.randomPosition)(18, 90)
      })];

      for (var i = 0; i < this.numShapes; i++) {
        this.shapes.push(this.potentialShapes[Math.round(Math.random() * (this.potentialShapes.length - 1))]);
      }

      console.log(this.shapes); //var shape = getRandomShape(); // create a random shape
      // 60% chance shape will snap to x or y coordinates of the mouse
      //if(Math.random() < .6) shape.x = e.pageX;
      //if(Math.random() < .6) shape.y = e.pageY;
      //shapes.unshift(shape); // insert new shape at beginning of array
      //shapes = shapes.splice(0,5); // only keep most recent 100 shapes

      this.initListeners();
    }
  }, {
    key: "initListeners",
    value: function initListeners() {
      var _this = this;

      window.addEventListener('resize', function (e) {
        if (_this.canvasEl.width > window.innerWidth) {
          _this.canvasEl.width = window.innerWidth;
        } else {
          _this.canvasEl.width = _this.canvasW;
        }

        if (_this.canvasEl.height > window.innerHeight) {
          _this.canvasEl.height = window.innerHeight;
        } else {
          _this.canvasEl.height = _this.canvasH;
        }
      });
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this2 = this;

      requestAnimationFrame(function () {
        return _this2.draw();
      });
      this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);

      for (var i = 0; i < shapes.length; i++) {
        var shape = shapes[i];
        this.ctx.beginPath();
        this.ctx.fillStyle = this.ctx.strokeStyle = shape.fill;

        if (shape.radius === undefined) {
          this.ctx.rect(shape.x, shape.y, shape.width, shape.height);
        } else {
          this.ctx.ellipse(shape.x, shape.y, shape.radius, shape.radius, shape.rotation, shape.startAngle, shape.endAngle);
        }

        if (this.fillShape.checked) {
          this.ctx.fill();
        } else {
          this.ctx.stroke();
        }
      }
    }
  }]);

  return SBackgroundCreator;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SBackgroundCreator);

/***/ }),

/***/ "./src/js/helper.js":
/*!**************************!*\
  !*** ./src/js/helper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomColor": () => (/* binding */ randomColor),
/* harmony export */   "randomPosition": () => (/* binding */ randomPosition)
/* harmony export */ });
/**
 * http://www.paulirish.com/2009/random-hex-color-code-snippets/
 * Random color in hexadecimal
 * */
function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
/**
 * Get random position for shape
 * */


function randomPosition(min, max) {
  return min + Math.random() * (max - min);
}



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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_SBackgroundCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/SBackgroundCreator */ "./src/js/SBackgroundCreator.js");


window.onload = function () {
  var canvasEl = document.getElementById('canvas');
  var bg = new _js_SBackgroundCreator__WEBPACK_IMPORTED_MODULE_0__["default"](canvasEl);
  bg.init(); //bg.draw();
};
})();

/******/ })()
;
//# sourceMappingURL=main.js.map