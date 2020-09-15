(this["webpackJsonpts-polymorphism"]=this["webpackJsonpts-polymorphism"]||[]).push([[0],{19:function(t,n,e){t.exports=e.p+"static/media/logo.d017bff3.webp"},21:function(t,n,e){t.exports=e(29)},26:function(t,n,e){},29:function(t,n,e){"use strict";e.r(n);var i=e(0),r=e.n(i),a=e(14),u=e.n(a),s=(e(26),e(20)),o=e(3),c=e(4);function l(){var t=Object(o.a)(["\n  border-radius: 8px;\n  touch-action: none;\n  width: 100%;\n  height: 100%;\n"]);return l=function(){return t},t}function h(){var t=Object(o.a)(["\n  flex: 1;\n  padding: 30px;\n  min-height: 0;\n"]);return h=function(){return t},t}var v=c.a.div(h()),f=c.a.canvas(l());function y(t){return r.a.createElement(v,null,r.a.createElement(f,{id:t.id}))}var d=e(1),x=e(2),b=e(18),g=e.n(b),m=e(9),k=function(){function t(n,e){Object(d.a)(this,t),this.x=n,this.y=e}return Object(x.a)(t,[{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"angle",value:function(){return Math.atan2(this.y,this.x)}},{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"copy",value:function(t){return this.x=t.x,this.y=t.y,this}},{key:"cross",value:function(t){return this.x*t.y-this.y*t.x}},{key:"distanceTo",value:function(t){return Math.sqrt(this.distanceToSquared(t))}},{key:"distanceToSquared",value:function(t){var n=this.x-t.x,e=this.y-t.y;return n*n+e*e}},{key:"divide",value:function(t){return 0===t.x||0===t.y?(m.error("Division by zero"),this):(this.x/=t.x,this.y/=t.y,this)}},{key:"divideScalar",value:function(t){return 0===t?(m.warn("Division by zero"),this):this.multiplyScalar(1/t)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y}},{key:"equals",value:function(t){return t.x===this.x&&t.y===this.y}},{key:"length",value:function(){return Math.sqrt(this.lengthSq())}},{key:"lengthSq",value:function(){return this.x*this.x+this.y*this.y}},{key:"multiply",value:function(t){return this.x*=t.x,this.y*=t.y,this}},{key:"multiplyScalar",value:function(t){return this.x*=t,this.y*=t,this}},{key:"negate",value:function(){return this.multiplyScalar(-1)}},{key:"normalize",value:function(){return 0===this.length()?(m.warn("Zero Vector"),this):this.divideScalar(this.length())}},{key:"rotateAround",value:function(t,n){var e=Math.cos(n),i=Math.sin(n),r=this.x-t.x,a=this.y-t.y;return this.x=r*e-a*i+t.x,this.y=r*i+a*e+t.y,this}},{key:"set",value:function(t){return this.x=t.x,this.y=t.y,this}},{key:"setX",value:function(t){return this.x=t,this}},{key:"setY",value:function(t){return this.y=t,this}},{key:"setLength",value:function(t){return this.normalize().multiplyScalar(t)}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this}}],[{key:"zeroVector",value:function(){return new t(0,0)}},{key:"fromScalar",value:function(n){return new t(n,n)}},{key:"angleBetween",value:function(t,n){var e=t.angle()-n.angle();return e>Math.PI?e-=2*Math.PI:e<=-Math.PI&&(e+=2*Math.PI),e}},{key:"isLeft",value:function(n,e,i){var r=new t(e.y,-e.x);return i.clone().sub(n).dot(r)<0}}]),t}(),p=e(5),w=e(6),j=function(){function t(){Object(d.a)(this,t),this.name=void 0}return Object(x.a)(t,[{key:"onTap",value:function(t,n){}},{key:"onDragStart",value:function(t,n){}},{key:"onDragMove",value:function(t,n,e){}},{key:"onDragEnd",value:function(t,n){}},{key:"onHoverMove",value:function(t,n,e){}}]),t}(),O="rgb(221, 223, 228)",E="rgb(210, 114, 119)",S="rgb(224, 192, 132)",B="rgb(41, 44, 51)",T=function(t){Object(w.a)(e,t);var n=Object(p.a)(e);function e(){var t;Object(d.a)(this,e);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).name="Path Brush",t.currentLine=[],t}return Object(x.a)(e,[{key:"onDragMove",value:function(t,n,e){this.currentLine.push(n),t.drawPath(this.currentLine,15,B)}},{key:"onDragEnd",value:function(t,n){this.currentLine=[]}}]),e}(j),C=function(){function t(n,e){var i=this;Object(d.a)(this,t),this.brush=void 0,this.brush=e||new T,g()(n.canvasElement).on("tap",(function(t){return i.brush.onTap(n,i.eventToPositionVector(t))})).draggable({onstart:function(t){return i.brush.onDragStart(n,i.eventToPositionVector(t))},onmove:function(t){return i.brush.onDragMove(n,i.eventToPositionVector(t),i.eventToDeltaVector(t))},onend:function(t){return i.brush.onDragEnd(n,i.eventToPositionVector(t))},cursorChecker:function(){return"crosshair"}})}return Object(x.a)(t,[{key:"setBrush",value:function(t){this.brush=t}},{key:"eventToPositionVector",value:function(t){return new k(t.clientX,t.clientY)}},{key:"eventToDeltaVector",value:function(t){return new k(t.dx,t.dy)}}]),t}(),D=function(){function t(n){var e,i=this;Object(d.a)(this,t),this._canvasElement=void 0,this.ctx=void 0,this.size=k.zeroVector(),this.dpr=window.devicePixelRatio||1,this._canvasElement=document.getElementById(n);var r=null===(e=this._canvasElement)||void 0===e?void 0:e.getContext("2d");if(!r)throw new Error("Canvas element does not exist");this.ctx=r,window.addEventListener("resize",(function(){return i.resizeCanvas()}),!0),this.resizeCanvas()}return Object(x.a)(t,[{key:"resizeCanvas",value:function(){var t=this._canvasElement.getBoundingClientRect();this._canvasElement.width=this.size.x=t.width*this.dpr,this._canvasElement.height=this.size.y=t.height*this.dpr,this.fillBackground()}},{key:"fillBackground",value:function(){this.ctx.fillStyle=O,this.ctx.fillRect(0,0,this.size.x,this.size.y)}},{key:"fillRect",value:function(t,n,e,i){this.ctx.fillStyle=i;var r=this.screenToCanvas(t);this.ctx.fillRect(r.x,r.y,n,e)}},{key:"fillRectCentred",value:function(t,n,e){this.ctx.fillStyle=E;var i=this.screenToCanvas(t);this.ctx.fillRect(i.x-n/2,i.y-e/2,n,e)}},{key:"drawPath",value:function(t,n,e){var i=this,r=t.map((function(t){return i.screenToCanvas(t)}));this.ctx.strokeStyle=e,this.ctx.lineWidth=n,this.ctx.beginPath(),this.ctx.moveTo(r[0].x,r[0].y);for(var a=1;a<r.length;a++)this.ctx.lineTo(r[a].x,r[a].y);this.ctx.stroke()}},{key:"fillCircle",value:function(t,n,e){var i=this.screenToCanvas(t);this.ctx.fillStyle=e,this.ctx.beginPath(),this.ctx.arc(i.x,i.y,n,0,2*Math.PI),this.ctx.fill()}},{key:"drawImage",value:function(t,n){var e=this.screenToCanvas(n);this.ctx.drawImage(t,e.x-t.width/2,e.y-t.height/2)}},{key:"screenToCanvas",value:function(t){var n=this._canvasElement.getBoundingClientRect();return new k(t.x-n.left,t.y-n.top).multiplyScalar(this.dpr)}},{key:"canvasElement",get:function(){return this._canvasElement}}]),t}();function z(){var t=Object(o.a)(["\n  display: inline-block;\n  border: none;\n  padding: 1rem 2rem;\n  margin: 30px 5px 0;\n  border-radius: 5px;\n  text-decoration: none;\n  background: #0069ed;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 1rem;\n  cursor: pointer;\n  text-align: center;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n\n  :hover,\n  :focus {\n    background: #0053ba;\n  }\n\n  :focus {\n    outline: 1px solid #fff;\n    outline-offset: -4px;\n  }\n\n  :active {\n    transform: scale(0.99);\n  }\n"]);return z=function(){return t},t}var P=c.a.button(z());function M(t){var n=t.brush.name;return r.a.createElement(P,{onClick:function(){return t.setBrush(t.brush)}},n)}var L=e(7),I=e(12),V=function(t){Object(w.a)(e,t);var n=Object(p.a)(e);function e(){var t;Object(d.a)(this,e);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).name="Capped Path Brush",t}return Object(x.a)(e,[{key:"onDragStart",value:function(t,n){Object(I.a)(Object(L.a)(e.prototype),"onDragStart",this).call(this,t,n),t.fillCircle(n,20,B)}},{key:"onDragEnd",value:function(t,n){Object(I.a)(Object(L.a)(e.prototype),"onDragEnd",this).call(this,t,n),t.fillCircle(n,30,S)}}]),e}(T),R=function(t){Object(w.a)(e,t);var n=Object(p.a)(e);function e(){var t;Object(d.a)(this,e);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).name="Dot Brush",t.currentLine=[],t}return Object(x.a)(e,[{key:"onDragStart",value:function(t,n){this.currentLine.push(n)}},{key:"onDragMove",value:function(t,n,e){this.currentLine[this.currentLine.length-1].distanceTo(n)>30&&(this.currentLine.push(n),t.fillCircle(n,20,E))}},{key:"onDragEnd",value:function(t,n){this.currentLine=[]}},{key:"onTap",value:function(t,n){t.fillCircle(n,30,E)}}]),e}(j),_=e(19),q=e.n(_),A=function(t){Object(w.a)(e,t);var n=Object(p.a)(e);function e(){var t;Object(d.a)(this,e),(t=n.call(this)).name="Stamp Brush",t.img=void 0;var i=new Image;return i.onload=function(){return t.img=i},i.src=q.a,t}return Object(x.a)(e,[{key:"onTap",value:function(t,n){this.img&&t.drawImage(this.img,n)}}]),e}(j);function J(){var t=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n"]);return J=function(){return t},t}var X=c.a.div(J());function Y(t){return r.a.createElement(X,null,r.a.createElement(M,{brush:new T,setBrush:t.setBrush}),r.a.createElement(M,{brush:new V,setBrush:t.setBrush}),r.a.createElement(M,{brush:new R,setBrush:t.setBrush}),r.a.createElement(M,{brush:new A,setBrush:t.setBrush}))}function H(){var t=Object(o.a)(["\n  background-color: rgb(41, 44, 51);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return H=function(){return t},t}var W=c.a.div(H());function Z(){var t=Object(i.useState)(),n=Object(s.a)(t,2),e=n[0],a=n[1];return Object(i.useEffect)((function(){var t=new D("paint-canvas");a(new C(t))}),[]),r.a.createElement(W,null,r.a.createElement(Y,{setBrush:function(t){return null===e||void 0===e?void 0:e.setBrush(t)}}),r.a.createElement(y,{id:"paint-canvas"}))}u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.193e19bb.chunk.js.map