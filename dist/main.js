(()=>{"use strict";var t={227:(t,i,e)=>{function n(){return"#"+Math.floor(16777215*Math.random()).toString(16)}function o(t,i){return t+Math.random()*(i-t)}function r(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function l(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const s=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.x,o=void 0===e?0:e,l=i.y,s=void 0===l?0:l,a=i.width,h=void 0===a?10:a,c=i.height,u=void 0===c?20:c,f=i.fillColor,y=void 0===f?n():f;r(this,t),this.x=o,this.y=s,this.width=h,this.height=u,this.fillColor=y}var i,e;return i=t,(e=[{key:"draw",value:function(t,i){t.beginPath(),t.fillStyle=t.strokeStyle=this.fillColor,t.rect(this.x,this.y,this.width,this.height),i?t.fill():t.stroke()}},{key:"init",value:function(t){this.x=o(0,t.width),this.y=o(0,t.height),this.width=o(18,90),this.height=o(18,90),this.fillColor=n()}}])&&l(i.prototype,e),t}();function a(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function h(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const c=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.x,o=void 0===e?0:e,r=i.y,l=void 0===r?0:r,s=i.radius,h=void 0===s?1:s,c=i.rotation,u=void 0===c?45*Math.PI/180:c,f=i.startAngle,y=void 0===f?0:f,d=i.endAngle,v=void 0===d?2*Math.PI:d,p=i.fillColor,b=void 0===p?n():p;a(this,t),this.x=o,this.y=l,this.radius=h,this.rotation=u,this.startAngle=y,this.endAngle=v,this.fillColor=b}var i,e;return i=t,(e=[{key:"draw",value:function(t,i){t.beginPath(),t.fillStyle=t.strokeStyle=this.fillColor,t.ellipse(this.x,this.y,this.radius,this.radius,this.rotation,this.startAngle,this.endAngle),i?t.fill():t.stroke()}},{key:"init",value:function(t){this.x=o(0,t.width),this.y=o(0,t.height),this.radius=o(18,90),this.fillColor=n()}}])&&h(i.prototype,e),t}();function u(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function f(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const y=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.x,o=i.y,r=i.lineWidth,l=void 0===r?2:r,s=i.fillColor,a=void 0===s?n():s;u(this,t),this.x=e,this.y=o,this.lineWidth=l,this.fillColor=a}var i,e;return i=t,(e=[{key:"draw",value:function(t,i){t.fillStyle=t.strokeStyle=this.fillColor,this.drawCurve(t,this.x-50,this.y,this.x-50,this.y+30,this.x,this.y+35,this.x,this.y+60,this.fillColor),this.drawCurve(t,this.x,this.y,this.x,this.y-30,this.x-50,this.y-30,this.x-50,this.y,this.fillColor),this.drawCurve(t,this.x,this.y+60,this.x,this.y+35,this.x+50,this.y+30,this.x+50,this.y,this.fillColor),this.drawCurve(t,this.x+50,this.y,this.x+50,this.y-30,this.x,this.y-30,this.x,this.y,this.fillColor)}},{key:"init",value:function(t){this.x=Math.floor(o(0,t.width))+.5,this.y=Math.floor(o(0,t.height))+.5,this.fillColor=n()}},{key:"drawCurve",value:function(t,i,e,n,o,r,l,s,a,h){t.save(),t.beginPath(),t.moveTo(i,e),t.bezierCurveTo(n,o,r,l,s,a),t.strokeStyle=h,t.lineWidth=this.lineWidth,t.stroke(),t.restore()}}])&&f(i.prototype,e),t}();function d(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function v(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const p=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.x,o=void 0===e?0:e,r=i.y,l=void 0===r?0:r,s=i.dirX,a=void 0===s?10:s,h=i.dirY,c=void 0===h?10:h,u=i.fillColor,f=void 0===u?n():u;d(this,t),this.x=o,this.y=l,this.dirX=a,this.dirY=c,this.fillColor=f}var i,e;return i=t,(e=[{key:"draw",value:function(t,i){t.beginPath(),t.fillStyle=t.strokeStyle=this.fillColor,t.moveTo(this.x,this.y),t.lineTo(this.dirX,this.dirY),t.stroke()}},{key:"init",value:function(t){this.x=o(0,t.width),this.y=o(0,t.height),this.dirX=o(0,t.width),this.dirY=o(0,t.height),this.fillColor=n()}}])&&v(i.prototype,e),t}();function b(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function w(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const g=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.x,o=void 0===e?0:e,r=i.y,l=void 0===r?0:r,s=i.lineWidth,a=void 0===s?2:s,h=i.fillColor,c=void 0===h?n():h;b(this,t),this.fillColor=c,this.lineWidth=a,this.x=o,this.y=l,this.controlPoint1={x:100,y:200},this.controlPoint2={x:200,y:200},this.endPoint={x:200,y:100}}var i,e;return i=t,(e=[{key:"draw",value:function(t,i){t.beginPath(),t.fillStyle=t.strokeStyle=this.fillColor,t.lineWidth=this.lineWidth,t.moveTo(this.x,this.y),t.bezierCurveTo(this.controlPoint1.x,this.controlPoint1.y,this.controlPoint2.x,this.controlPoint2.y,this.endPoint.x,this.endPoint.y),t.stroke()}},{key:"init",value:function(t){this.x=o(0,t.width),this.y=o(0,t.height),this.controlPoint1={x:o(0,t.width),y:o(0,t.width)},this.controlPoint2={x:o(0,t.width),y:o(0,t.width)},this.lineWidth=Math.floor(o(1,6)),this.endPoint={x:o(0,t.width),y:o(0,t.height)}}}])&&w(i.prototype,e),t}();function x(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function m(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const C=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.x,o=i.y,r=i.z,l=i.fillColor,s=void 0===l?n():l;x(this,t),this.x=e,this.y=o,this.z=r,this.fillColor=s}var i,e;return i=t,(e=[{key:"draw",value:function(t,i){t.beginPath(),t.fillStyle=t.strokeStyle=this.fillColor,t.moveTo(this.x,this.x),t.lineTo(this.y,this.x),t.lineTo(this.y,this.z),i?t.fill():t.stroke()}},{key:"init",value:function(t){this.x=o(0,t.width),this.y=o(0,t.height),this.z=o(0,t.height),this.fillColor=n()}}])&&m(i.prototype,e),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function S(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function P(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function O(t,i){return O=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},O(t,i)}function E(t,i){if(i&&("object"===k(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}const T=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&O(t,i)}(a,t);var i,e,r,l,s=(r=a,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=j(r);if(l){var e=j(this).constructor;t=Reflect.construct(i,arguments,e)}else t=i.apply(this,arguments);return E(this,t)});function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.x,e=t.y,n=t.radius,o=t.fillColor,r=t.startAngle,l=t.endAngle,h=t.rotation;return S(this,a),s.call(this,{x:i,y:e,radius:n,rotation:h,startAngle:r,endAngle:l,fillColor:o})}return i=a,(e=[{key:"init",value:function(t){this.x=o(0,t.width),this.y=o(0,t.height),this.radius=o(18,90),this.fillColor=n(),this.startAngle=0,this.endAngle=Math.random()*(2*Math.PI),this.rotation=Math.random()*(2*Math.PI)}}])&&P(i.prototype,e),a}(c);function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function W(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function _(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function R(t,i){return R=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},R(t,i)}function A(t,i){if(i&&("object"===M(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}const H=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&R(t,i)}(a,t);var i,e,r,l,s=(r=a,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=z(r);if(l){var e=z(this).constructor;t=Reflect.construct(i,arguments,e)}else t=i.apply(this,arguments);return A(this,t)});function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.x,e=void 0===i?0:i,o=t.y,r=void 0===o?0:o,l=t.width,h=void 0===l?10:l,c=t.fillColor,u=void 0===c?n():c;return W(this,a),s.call(this,{x:e,y:r,width:h,height:h,fillColor:u})}return i=a,(e=[{key:"draw",value:function(t,i){t.beginPath(),t.fillStyle=t.strokeStyle=this.fillColor,t.rect(this.x,this.y,this.width,this.width),i?t.fill():t.stroke()}},{key:"init",value:function(t){this.x=o(0,t.width),this.y=o(0,t.height),this.width=o(18,90),this.fillColor=n()}}])&&_(i.prototype,e),a}(s);function B(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function L(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const I=function(){function t(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.fillShape,o=void 0===n||n,r=e.numShapes,l=void 0===r?10:r,s=e.alpha,a=void 0===s||s,h=e.bgColor,c=void 0===h?"black":h,u=e.globalCompositeOperation,f=void 0===u?"multiply":u;B(this,t),this.canvasEl=i,this.alpha=a,this.ctx=this.canvasEl.getContext("2d",{alpha:this.alpha}),this.fillShape=o,this.numShapes=l,this.globalCompositeOperation=f,this.canvasW=this.canvasEl.width,this.canvasH=this.canvasEl.height,this.canvasEl.style.cssText="background:".concat(c),this.initListeners(),this.potentialShapes=["Rectangle","Circle","Cube","Line","Triangle","Wave","Heart","SemiCircle"]}var i,e;return i=t,(e=[{key:"init",value:function(){this.shapes=[];for(var t=0;t<this.numShapes;t++){var i=this.potentialShapes[Math.round(Math.random()*(this.potentialShapes.length-1))],e=new c;switch(i){case"Rectangle":e=new s;break;case"Circle":e=new c;break;case"Heart":e=new y;break;case"Line":e=new p;break;case"Wave":e=new g;break;case"Triangle":e=new C;break;case"SemiCircle":e=new T;break;case"Cube":e=new H}e.init(this.canvasEl),this.shapes.push(e)}}},{key:"initListeners",value:function(){var t=this;window.addEventListener("resize",(function(i){t.canvasEl.width>window.innerWidth?t.canvasEl.width=window.innerWidth:t.canvasEl.width=t.canvasW,t.canvasEl.height>window.innerHeight?t.canvasEl.height=window.innerHeight:t.canvasEl.height=t.canvasH,t.init()}))}},{key:"draw",value:function(){var t=this;requestAnimationFrame((function(){return t.draw()})),this.ctx.clearRect(0,0,this.canvasW,this.canvasH),this.ctx.globalCompositeOperation=this.globalCompositeOperation;for(var i=0;i<this.shapes.length;i++)this.shapes[i].draw(this.ctx,this.fillShape)}},{key:"deactivateShapes",value:function(t){this.potentialShapes=this.potentialShapes.filter((function(i){return!t.includes(i)}))}}])&&L(i.prototype,e),t}();(t=e.hmd(t)).exports.SBackgroundCreator=I}},i={};function e(n){var o=i[n];if(void 0!==o)return o.exports;var r=i[n]={id:n,loaded:!1,exports:{}};return t[n](r,r.exports,e),r.loaded=!0,r.exports}e.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),e(227)})();
//# sourceMappingURL=main.js.map