import{i as h,_ as A,a as G,o as C,b as W,c as Y,d as I,O as b,r as k,e as z,f as U,g as j,h as M,j as g,S as P,k as B}from"./Subject.S6NvqjeN.js";var v=(e=>(e[e.NONE=0]="NONE",e[e.UP=-1]="UP",e[e.LEFT=-1]="LEFT",e[e.DOWN=1]="DOWN",e[e.RIGHT=1]="RIGHT",e))(v||{}),u=(e=>(e[e.SCROLL=0]="SCROLL",e[e.DIRECTION_Y=1]="DIRECTION_Y",e[e.DIRECTION_LOOSE_Y=2]="DIRECTION_LOOSE_Y",e[e.END_Y=3]="END_Y",e[e.DIRECTION_X=4]="DIRECTION_X",e[e.DIRECTION_LOOSE_X=5]="DIRECTION_LOOSE_X",e[e.END_X=6]="END_X",e))(u||{});function F(e){return h(e==null?void 0:e.lift)}function w(e){return function(t){if(F(t))return t.lift(function(r){try{return e(r,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function O(e,t,r,n,i){return new q(e,t,r,n,i)}var q=function(e){A(t,e);function t(r,n,i,o,c,l){var s=e.call(this,r)||this;return s.onFinalize=c,s.shouldUnsubscribe=l,s._next=n?function(a){try{n(a)}catch(f){r.error(f)}}:e.prototype._next,s._error=o?function(a){try{o(a)}catch(f){r.error(f)}finally{this.unsubscribe()}}:e.prototype._error,s._complete=i?function(){try{i()}catch(a){r.error(a)}finally{this.unsubscribe()}}:e.prototype._complete,s}return t.prototype.unsubscribe=function(){var r;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;e.prototype.unsubscribe.call(this),!n&&((r=this.onFinalize)===null||r===void 0||r.call(this))}},t}(G),X=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function J(e){return h(e==null?void 0:e.then)}function Q(e){return h(e[C])}function K(e){return Symbol.asyncIterator&&h(e==null?void 0:e[Symbol.asyncIterator])}function V(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Z(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var $=Z();function ee(e){return h(e==null?void 0:e[$])}function te(e){return W(this,arguments,function(){var r,n,i,o;return Y(this,function(c){switch(c.label){case 0:r=e.getReader(),c.label=1;case 1:c.trys.push([1,,9,10]),c.label=2;case 2:return[4,I(r.read())];case 3:return n=c.sent(),i=n.value,o=n.done,o?[4,I(void 0)]:[3,5];case 4:return[2,c.sent()];case 5:return[4,I(i)];case 6:return[4,c.sent()];case 7:return c.sent(),[3,2];case 8:return[3,10];case 9:return r.releaseLock(),[7];case 10:return[2]}})})}function re(e){return h(e==null?void 0:e.getReader)}function _(e){if(e instanceof b)return e;if(e!=null){if(Q(e))return ne(e);if(X(e))return ie(e);if(J(e))return oe(e);if(K(e))return T(e);if(ee(e))return se(e);if(re(e))return ce(e)}throw V(e)}function ne(e){return new b(function(t){var r=e[C]();if(h(r.subscribe))return r.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ie(e){return new b(function(t){for(var r=0;r<e.length&&!t.closed;r++)t.next(e[r]);t.complete()})}function oe(e){return new b(function(t){e.then(function(r){t.closed||(t.next(r),t.complete())},function(r){return t.error(r)}).then(null,k)})}function se(e){return new b(function(t){var r,n;try{for(var i=z(e),o=i.next();!o.done;o=i.next()){var c=o.value;if(t.next(c),t.closed)return}}catch(l){r={error:l}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}t.complete()})}function T(e){return new b(function(t){le(e,t).catch(function(r){return t.error(r)})})}function ce(e){return T(te(e))}function le(e,t){var r,n,i,o;return U(this,void 0,void 0,function(){var c,l;return Y(this,function(s){switch(s.label){case 0:s.trys.push([0,5,6,11]),r=j(e),s.label=1;case 1:return[4,r.next()];case 2:if(n=s.sent(),!!n.done)return[3,4];if(c=n.value,t.next(c),t.closed)return[2];s.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return l=s.sent(),i={error:l},[3,11];case 6:return s.trys.push([6,,9,10]),n&&!n.done&&(o=r.return)?[4,o.call(r)]:[3,8];case 7:s.sent(),s.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function ae(e,t,r,n,i){n===void 0&&(n=0),i===void 0&&(i=!1);var o=t.schedule(function(){r(),i?e.add(this.schedule(null,n)):this.unsubscribe()},n);if(e.add(o),!i)return o}function x(e,t){return w(function(r,n){var i=0;r.subscribe(O(n,function(o){n.next(e.call(t,o,i++))}))})}var ue=Array.isArray;function he(e,t){return ue(t)?e.apply(void 0,M([],g(t))):e(t)}function fe(e){return x(function(t){return he(e,t)})}function de(e,t,r,n,i,o,c,l){var s=[],a=0,f=0,p=!1,D=function(){p&&!s.length&&!a&&t.complete()},E=function(y){return a<n?d(y):s.push(y)},d=function(y){o&&t.next(y),a++;var R=!1;_(r(y,f++)).subscribe(O(t,function(m){i==null||i(m),o?E(m):t.next(m)},function(){R=!0},void 0,function(){if(R)try{a--;for(var m=function(){var L=s.shift();c?ae(t,c,function(){return d(L)}):d(L)};s.length&&a<n;)m();D()}catch(L){t.error(L)}}))};return e.subscribe(O(t,E,function(){p=!0,D()})),function(){l==null||l()}}function H(e,t,r){return r===void 0&&(r=1/0),h(t)?H(function(n,i){return x(function(o,c){return t(n,o,i,c)})(_(e(n,i)))},r):(typeof t=="number"&&(r=t),w(function(n,i){return de(n,i,e,r)}))}var ve=["addListener","removeListener"],be=["addEventListener","removeEventListener"],Ee=["on","off"];function S(e,t,r,n){if(h(r)&&(n=r,r=void 0),n)return S(e,t,r).pipe(fe(n));var i=g(pe(e)?be.map(function(l){return function(s){return e[l](t,s,r)}}):ye(e)?ve.map(N(e,t)):me(e)?Ee.map(N(e,t)):[],2),o=i[0],c=i[1];if(!o&&X(e))return H(function(l){return S(l,t,r)})(_(e));if(!o)throw new TypeError("Invalid event target");return new b(function(l){var s=function(){for(var a=[],f=0;f<arguments.length;f++)a[f]=arguments[f];return l.next(1<a.length?a:a[0])};return o(s),function(){return c(s)}})}function N(e,t){return function(r){return function(n){return e[r](t,n)}}}function ye(e){return h(e.addListener)&&h(e.removeListener)}function me(e){return h(e.on)&&h(e.off)}function pe(e){return h(e.addEventListener)&&h(e.removeEventListener)}function De(e,t){return w(function(r,n){var i=0;r.subscribe(O(n,function(o){return e.call(t,o,i++)&&n.next(o)}))})}class Oe{constructor(){this.yCurrent=0,this.yDirection=0,this.yDirectionLooseBefore=0,this.yDirectionLooseGap=20,this.yEndDispatchHold=!1,this.xCurrent=0,this.xDirection=0,this.xDirectionLooseBefore=0,this.xDirectionLooseGap=20,this.xEndDispatchHold=!1,this.eventListener=new P,this.subjectScroll=new B,this.observableScroll=this.subjectScroll.asObservable()}init(){this.initScroll(),this.initResize()}initScroll(){this.handleScroll=this.onScroll.bind(this),this.scrollObserver=S(window,"scroll"),this.eventListener.add(this.scrollObserver.subscribe(this.handleScroll))}initResize(){this.handleResize=this.onResize.bind(this),this.resizeObserver=S(window,"resize"),this.eventListener.add(this.resizeObserver.subscribe(this.handleResize))}get scrollTop(){return document.documentElement.scrollTop||document.body.scrollTop}get scrollLeft(){return document.documentElement.scrollLeft||document.body.scrollLeft}get scrollHeight(){return document.documentElement.scrollHeight||document.body.scrollHeight}get scrollWidth(){return document.documentElement.scrollWidth||document.body.scrollWidth}get innerHeight(){return window.innerHeight}get innerWidth(){return window.innerWidth}getState(){const t=this.scrollTop,r=this.scrollHeight,n=this.innerHeight,i=this.yDirection,o=this.yEndDispatchHold,c=r-n;let l=t/c;l=isNaN(l)?0:l;const s=this.scrollLeft,a=this.scrollWidth,f=this.innerWidth,p=this.xDirection,D=this.xEndDispatchHold,E=a-f;let d=s/E;return d=isNaN(d)?0:d,{scrollTop:t,scrollHeight:r,innerHeight:n,directionY:i,holdEndY:o,percentY:l,endY:c,scrollLeft:s,scrollWidth:a,innerWidth:f,directionX:p,holdEndX:D,percentX:d,endX:E}}setDirectionLooseGapY(t){this.yDirectionLooseGap=t}setDirectionLooseGapX(t){this.xDirectionLooseGap=t}setScroll(t,r=0){window.scroll(r,t)}setScrollTo(t,r=0,n=!0){window.scrollTo({top:t,left:r,behavior:n?"smooth":"auto"})}holdDispatchEndY(t){this.yEndDispatchHold=t}holdDispatchEndX(t){this.xEndDispatchHold=t}dispatchScroll(t){this.subjectScroll.next(t)}pipeScroll(t,r){return t.pipe(De(n=>n===r),x(()=>this.getState()))}observeScroll(){return this.pipeScroll(this.observableScroll,u.SCROLL)}observeDirectionY(){return this.pipeScroll(this.observableScroll,u.DIRECTION_Y)}observeDirectionLooseY(){return this.pipeScroll(this.observableScroll,u.DIRECTION_LOOSE_Y)}observeEndY(){return this.pipeScroll(this.observableScroll,u.END_Y)}observeDirectionX(){return this.pipeScroll(this.observableScroll,u.DIRECTION_X)}observeDirectionLooseX(){return this.pipeScroll(this.observableScroll,u.DIRECTION_LOOSE_X)}observeEndX(){return this.pipeScroll(this.observableScroll,u.END_X)}onResize(){this.onScroll()}onScroll(){this.onScrollX(),this.onScrollY(),this.dispatchScroll(u.SCROLL)}onScrollX(){const{scrollLeft:t,endX:r,directionX:n}=this.getState(),i=this.xCurrent;let o=0;i<t?o=v.RIGHT:t<i?o=v.LEFT:o=v.NONE,this.xDirection=o,this.xCurrent=t,this.xDirection!==n&&this.dispatchScroll(u.DIRECTION_X),this.xDirectionLooseBefore!==this.xDirection&&this.xDirectionLooseGap<=Math.abs(t-i)&&(this.dispatchScroll(u.DIRECTION_LOOSE_X),this.xDirectionLooseBefore=this.xDirection),r<=t?(this.xEndDispatchHold||this.dispatchScroll(u.END_X),this.holdDispatchEndX(!0)):this.holdDispatchEndX(!1)}onScrollY(){const{scrollTop:t,endY:r,directionY:n}=this.getState(),i=this.yCurrent;let o=0;i<t?o=v.DOWN:t<i?o=v.UP:o=v.NONE,this.yDirection=o,this.yCurrent=t,this.yDirection!==n&&this.dispatchScroll(u.DIRECTION_Y),this.yDirectionLooseBefore!==this.yDirection&&this.yDirectionLooseGap<=Math.abs(t-i)&&(this.dispatchScroll(u.DIRECTION_LOOSE_Y),this.yDirectionLooseBefore=this.yDirection),r<=t?(this.yEndDispatchHold||this.dispatchScroll(u.END_Y),this.holdDispatchEndY(!0)):this.holdDispatchEndY(!1)}destroy(){this.eventListener&&(this.eventListener.unsubscribe(),this.eventListener=null),this.subjectScroll&&(this.subjectScroll.unsubscribe(),this.subjectScroll=null)}}export{Oe as B,S as f};