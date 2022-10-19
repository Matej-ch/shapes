(()=>{"use strict";var t={227:(t,e,i)=>{function n(){return"#"+Math.floor(16777215*Math.random()).toString(16)}function o(t,e){return t+Math.random()*(e-t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.x,o=void 0===i?0:i,l=e.y,s=void 0===l?0:l,a=e.width,h=void 0===a?10:a,c=e.height,f=void 0===c?20:c,u=e.fillColor,y=void 0===u?n():u;r(this,t),this.x=o,this.y=s,this.width=h,this.height=f,this.fillColor=y}var e,i;return e=t,(i=[{key:"draw",value:function(t,e){t.beginPath(),t.fillStyle=t.strokeStyle=this.fillColor,t.rect(this.x,this.y,this.width,this.height),e?t.fill():t.stroke()}},{key:"init",value:function(t){this.x=o(0,t.width),this.y=o(0,t.height),this.width=o(18,90),this.height=o(18,90),this.fillColor=n()}}])&&l(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.x,o=void 0===i?0:i,r=e.y,l=void 0===r?0:r,s=e.radius,h=void 0===s?1:s,c=e.rotation,f=void 0===c?45*Math.PI/180:c,u=e.startAngle,y=void 0===u?0:u,d=e.endAngle,p=void 0===d?2*Math.PI:d,v=e.fillColor,b=void 0===v?n():v;a(this,t),this.x=o,this.y=l,this.radius=h,this.rotation=f,this.startAngle=y,this.endAngle=p,this.fillColor=b}var e,i;return e=t,(i=[{key:"draw",value:function(t,e){t.beginPath(),t.fillStyle=t.strokeStyle=this.fillColor,t.ellipse(this.x,this.y,this.radius,this.radius,this.rotation,this.startAngle,this.endAngle),e?t.fill():t.stroke()}},{key:"init",value:function(t){this.x=o(0,t.width),this.y=o(0,t.height),this.radius=o(18,90),this.fillColor=n()}}])&&h(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.x,o=e.y,r=e.lineWidth,l=void 0===r?2:r,s=e.fillColor,a=void 0===s?n():s;f(this,t),this.x=i,this.y=o,this.lineWidth=l,this.fillColor=a}var e,i;return e=t,(i=[{key:"draw",value:function(t,e){t.fillStyle=t.strokeStyle=this.fillColor,this.drawCurve(t,this.x-50,this.y,this.x-50,this.y+30,this.x,this.y+35,this.x,this.y+60,this.fillColor),this.drawCurve(t,this.x,this.y,this.x,this.y-30,this.x-50,this.y-30,this.x-50,this.y,this.fillColor),this.drawCurve(t,this.x,this.y+60,this.x,this.y+35,this.x+50,this.y+30,this.x+50,this.y,this.fillColor),this.drawCurve(t,this.x+50,this.y,this.x+50,this.y-30,this.x,this.y-30,this.x,this.y,this.fillColor)}},{key:"init",value:function(t){this.x=Math.floor(o(0,t.width))+.5,this.y=Math.floor(o(0,t.height))+.5,this.fillColor=n()}},{key:"drawCurve",value:function(t,e,i,n,o,r,l,s,a,h){t.save(),t.beginPath(),t.moveTo(e,i),t.bezierCurveTo(n,o,r,l,s,a),t.strokeStyle=h,t.lineWidth=this.lineWidth,t.stroke(),t.restore()}}])&&u(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const v=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.x,o=void 0===i?0:i,r=e.y,l=void 0===r?0:r,s=e.dirX,a=void 0===s?10:s,h=e.dirY,c=void 0===h?10:h,f=e.fillColor,u=void 0===f?n():f;d(this,t),this.x=o,this.y=l,this.dirX=a,this.dirY=c,this.fillColor=u}var e,i;return e=t,(i=[{key:"draw",value:function(t,e){t.beginPath(),t.fillStyle=t.strokeStyle=this.fillColor,t.moveTo(this.x,this.y),t.lineTo(this.dirX,this.dirY),t.stroke()}},{key:"init",value:function(t){this.x=o(0,t.width),this.y=o(0,t.height),this.dirX=o(0,t.width),this.dirY=o(0,t.height),this.fillColor=n()}}])&&p(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const g=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.x,o=void 0===i?0:i,r=e.y,l=void 0===r?0:r,s=e.lineWidth,a=void 0===s?2:s,h=e.fillColor,c=void 0===h?n():h;b(this,t),this.fillColor=c,this.lineWidth=a,this.x=o,this.y=l,this.controlPoint1={x:100,y:200},this.controlPoint2={x:200,y:200},this.endPoint={x:200,y:100}}var e,i;return e=t,(i=[{key:"draw",value:function(t,e){t.beginPath(),t.fillStyle=t.strokeStyle=this.fillColor,t.lineWidth=this.lineWidth,t.moveTo(this.x,this.y),t.bezierCurveTo(this.controlPoint1.x,this.controlPoint1.y,this.controlPoint2.x,this.controlPoint2.y,this.endPoint.x,this.endPoint.y),t.stroke()}},{key:"init",value:function(t){this.x=o(0,t.width),this.y=o(0,t.height),this.controlPoint1={x:o(0,t.width),y:o(0,t.width)},this.controlPoint2={x:o(0,t.width),y:o(0,t.width)},this.lineWidth=Math.floor(o(1,6)),this.endPoint={x:o(0,t.width),y:o(0,t.height)}}}])&&w(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function C(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const m=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.x,o=e.y,r=e.z,l=e.fillColor,s=void 0===l?n():l;x(this,t),this.x=i,this.y=o,this.z=r,this.fillColor=s}var e,i;return e=t,(i=[{key:"draw",value:function(t,e){t.beginPath(),t.fillStyle=t.strokeStyle=this.fillColor,t.moveTo(this.x,this.x),t.lineTo(this.y,this.x),t.lineTo(this.y,this.z),e?t.fill():t.stroke()}},{key:"init",value:function(t){this.x=o(0,t.width),this.y=o(0,t.height),this.z=o(0,t.height),this.fillColor=n()}}])&&C(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function j(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}const T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(a,t);var e,i,r,l,s=(r=a,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(l){var i=E(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return j(this,t)});function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.x,i=t.y,n=t.radius,o=t.fillColor,r=t.startAngle,l=t.endAngle,h=t.rotation;return k(this,a),s.call(this,{x:e,y:i,radius:n,rotation:h,startAngle:r,endAngle:l,fillColor:o})}return e=a,(i=[{key:"init",value:function(t){this.x=o(0,t.width),this.y=o(0,t.height),this.radius=o(18,90),this.fillColor=n(),this.startAngle=0,this.endAngle=Math.random()*(2*Math.PI),this.rotation=Math.random()*(2*Math.PI)}}])&&O(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function W(t){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(t)}function M(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function A(t,e){if(e&&("object"===W(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function H(t){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},H(t)}const z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(a,t);var e,i,r,l,s=(r=a,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=H(r);if(l){var i=H(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return A(this,t)});function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.x,i=void 0===e?0:e,o=t.y,r=void 0===o?0:o,l=t.width,h=void 0===l?10:l,c=t.fillColor,f=void 0===c?n():c;return M(this,a),s.call(this,{x:i,y:r,width:h,height:h,fillColor:f})}return e=a,(i=[{key:"draw",value:function(t,e){t.beginPath(),t.fillStyle=t.strokeStyle=this.fillColor,t.rect(this.x,this.y,this.width,this.width),e?t.fill():t.stroke()}},{key:"init",value:function(t){this.x=o(0,t.width),this.y=o(0,t.height),this.width=o(18,90),this.fillColor=n()}}])&&_(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),a}(s);function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function L(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const I=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.fillShape,o=void 0===n||n,r=i.numShapes,l=void 0===r?10:r,s=i.alpha,a=void 0===s||s,h=i.bgColor,c=void 0===h?"black":h,f=i.globalCompositeOperation,u=void 0===f?"multiply":f;B(this,t),this.canvasEl=e,this.alpha=a,this.ctx=this.canvasEl.getContext("2d",{alpha:this.alpha}),this.fillShape=o,this.numShapes=l,this.globalCompositeOperation=u,this.canvasW=window.innerWidth,this.canvasH=window.innerHeight,this.canvasEl.style.cssText="background:".concat(c),this.initListeners(),this.potentialShapes=["Rectangle","Circle","Cube","Line","Triangle","Wave","Heart","SemiCircle"]}var e,i;return e=t,(i=[{key:"init",value:function(){this.shapes=[];for(var t=0;t<this.numShapes;t++){var e=this.potentialShapes[Math.round(Math.random()*(this.potentialShapes.length-1))],i=new c;switch(e){case"Rectangle":i=new s;break;case"Circle":i=new c;break;case"Heart":i=new y;break;case"Line":i=new v;break;case"Wave":i=new g;break;case"Triangle":i=new m;break;case"SemiCircle":i=new T;break;case"Cube":i=new z}i.init(this.canvasEl),this.shapes.push(i)}}},{key:"initListeners",value:function(){var t=this;window.addEventListener("resize",(function(e){t.canvasEl.width>window.innerWidth?t.canvasEl.width=window.innerWidth:t.canvasEl.width=t.canvasW,t.canvasEl.height>window.innerHeight?t.canvasEl.height=window.innerHeight:t.canvasEl.height=t.canvasH,t.init()}))}},{key:"draw",value:function(){this.ctx.clearRect(0,0,this.canvasW,this.canvasH),this.ctx.globalCompositeOperation=this.globalCompositeOperation;for(var t=0;t<this.shapes.length;t++)this.shapes[t].draw(this.ctx,this.fillShape)}},{key:"deactivateShapes",value:function(t){this.potentialShapes=this.potentialShapes.filter((function(e){return!t.includes(e)}))}}])&&L(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();(t=i.hmd(t)).exports.SBackgroundCreator=I}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={id:n,loaded:!1,exports:{}};return t[n](r,r.exports,i),r.loaded=!0,r.exports}i.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),i(227)})();
//# sourceMappingURL=main.js.map