(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[106],{63349:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},6610:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},5991:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:function(){return o}})},77608:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,{Z:function(){return r}})},10379:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(14665);function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,r.Z)(e,t)}},46070:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(50008),o=n(63349);function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?(0,o.Z)(e):t}},74729:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(28481),o=n(67216);function i(e){void 0===e&&(e=(0,o.Z)());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(n){return e.body}}var a=n(90424),c=n(23004),s=n(72950),u=n(67294),l=n(73935),f=n(24513);function d(e){var t,n,r=(t=e,(n=(0,u.useRef)(t)).current=t,n);(0,u.useEffect)((function(){return function(){return r.current()}}),[])}var p=n(29526),v=n(69386),h=n(67255),b=function(e){var t;return"undefined"==typeof document?null:null==e?(0,o.Z)().body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};var y,g=n(85893),m=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function O(e){var t=e||(y||(y=new h.Z),y),n=(0,u.useRef)({dialog:null,backdrop:null});return Object.assign(n.current,{add:function(){return t.add(n.current)},remove:function(){return t.remove(n.current)},isTopModal:function(){return t.isTopModal(n.current)},setDialogRef:(0,u.useCallback)((function(e){n.current.dialog=e}),[]),setBackdropRef:(0,u.useCallback)((function(e){n.current.backdrop=e}),[])})}var j=(0,u.forwardRef)((function(e,t){var n=e.show,o=void 0!==n&&n,h=e.role,y=void 0===h?"dialog":h,j=e.className,Z=e.style,w=e.children,E=e.backdrop,k=void 0===E||E,P=e.keyboard,x=void 0===P||P,R=e.onBackdropClick,C=e.onEscapeKeyDown,N=e.transition,S=e.backdropTransition,D=e.autoFocus,L=void 0===D||D,B=e.enforceFocus,T=void 0===B||B,A=e.restoreFocus,F=void 0===A||A,M=e.restoreFocusOptions,W=e.renderDialog,_=e.renderBackdrop,H=void 0===_?function(e){return(0,g.jsx)("div",Object.assign({},e))}:_,V=e.manager,I=e.container,$=e.onShow,K=e.onHide,q=void 0===K?function(){}:K,z=e.onExit,G=e.onExited,J=e.onExiting,Q=e.onEnter,U=e.onEntering,X=e.onEntered,Y=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,m),ee=function(e,t){var n=(0,u.useState)((function(){return b(e)})),o=(0,r.Z)(n,2),i=o[0],a=o[1];if(!i){var c=b(e);c&&a(c)}return(0,u.useEffect)((function(){t&&i&&t(i)}),[t,i]),(0,u.useEffect)((function(){var t=b(e);t!==i&&a(t)}),[e,i]),i}(I),te=O(V),ne=(0,f.Z)(),re=(0,p.Z)(o),oe=(0,u.useState)(!o),ie=(0,r.Z)(oe,2),ae=ie[0],ce=ie[1],se=(0,u.useRef)(null);(0,u.useImperativeHandle)(t,(function(){return te}),[te]),c.Z&&!re&&o&&(se.current=i()),N||o||ae?o&&ae&&ce(!1):ce(!0);var ue=(0,v.Z)((function(){if(te.add(),he.current=(0,s.Z)(document,"keydown",pe),ve.current=(0,s.Z)(document,"focus",(function(){return setTimeout(fe)}),!0),$&&$(),L){var e=i(document);te.dialog&&e&&!(0,a.Z)(te.dialog,e)&&(se.current=e,te.dialog.focus())}})),le=(0,v.Z)((function(){var e;(te.remove(),null==he.current||he.current(),null==ve.current||ve.current(),F)&&(null==(e=se.current)||null==e.focus||e.focus(M),se.current=null)}));(0,u.useEffect)((function(){o&&ee&&ue()}),[o,ee,ue]),(0,u.useEffect)((function(){ae&&le()}),[ae,le]),d((function(){le()}));var fe=(0,v.Z)((function(){if(T&&ne()&&te.isTopModal()){var e=i();te.dialog&&e&&!(0,a.Z)(te.dialog,e)&&te.dialog.focus()}})),de=(0,v.Z)((function(e){e.target===e.currentTarget&&(null==R||R(e),!0===k&&q())})),pe=(0,v.Z)((function(e){x&&27===e.keyCode&&te.isTopModal()&&(null==C||C(e),e.defaultPrevented||q())})),ve=(0,u.useRef)(),he=(0,u.useRef)(),be=N;if(!ee||!(o||be&&!ae))return null;var ye=Object.assign({role:y,ref:te.setDialogRef,"aria-modal":"dialog"===y||void 0},Y,{style:Z,className:j,tabIndex:-1}),ge=W?W(ye):(0,g.jsx)("div",Object.assign({},ye,{children:u.cloneElement(w,{role:"document"})}));be&&(ge=(0,g.jsx)(be,{appear:!0,unmountOnExit:!0,in:!!o,onExit:z,onExiting:J,onExited:function(){ce(!0),null==G||G.apply(void 0,arguments)},onEnter:Q,onEntering:U,onEntered:X,children:ge}));var me=null;if(k){var Oe=S;me=H({ref:te.setBackdropRef,onClick:de}),Oe&&(me=(0,g.jsx)(Oe,{appear:!0,in:!!o,children:me}))}return(0,g.jsx)(g.Fragment,{children:l.createPortal((0,g.jsxs)(g.Fragment,{children:[me,ge]}),ee)})}));j.displayName="Modal";var Z=Object.assign(j,{Manager:h.Z})},67255:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85061),o=n(96156),i=n(6610),a=n(5991),c=n(73164);var s=(0,n(3590).PB)("modal-open"),u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.handleContainerOverflow,r=void 0===n||n,o=t.isRTL,a=void 0!==o&&o;(0,i.Z)(this,e),this.handleContainerOverflow=r,this.isRTL=a,this.modals=[]}return(0,a.Z)(e,[{key:"getScrollbarWidth",value:function(){return Math.abs(window.innerWidth-document.documentElement.clientWidth)}},{key:"getElement",value:function(){return document.body}},{key:"setModalAttributes",value:function(e){}},{key:"removeModalAttributes",value:function(e){}},{key:"setContainerStyle",value:function(e){var t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style=(0,o.Z)({overflow:r.style.overflow},n,r.style[n]),e.scrollBarWidth&&(t[n]="".concat(parseInt((0,c.Z)(r,n)||"0",10)+e.scrollBarWidth,"px")),r.setAttribute(s,""),(0,c.Z)(r,t)}},{key:"reset",value:function(){var e=this;(0,r.Z)(this.modals).forEach((function(t){return e.remove(t)}))}},{key:"removeContainerStyle",value:function(e){var t=this.getElement();t.removeAttribute(s),Object.assign(t.style,e.style)}},{key:"add",value:function(e){var t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}},{key:"remove",value:function(e){var t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}},{key:"isTopModal",value:function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}]),e}()},21929:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(96156),o=n(81253),i=n(67294),a=n(85655),c=n(45697),s=n.n(c),u=n(75900),l=n.n(u),f=n(85893);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var p={"aria-label":s().string,onClick:s().func,variant:s().oneOf(["white"])},v=i.forwardRef((function(e,t){var n=e.className,i=e.variant,a=(0,o.Z)(e,["className","variant"]);return(0,f.jsx)("button",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({ref:t,type:"button",className:l()("btn-close",i&&"btn-close-".concat(i),n)},a))}));v.displayName="CloseButton",v.propTypes=p,v.defaultProps={"aria-label":"Close"};var h=v,b=n(123);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=i.forwardRef((function(e,t){var n=e.closeLabel,r=e.closeVariant,c=e.closeButton,s=e.onHide,u=e.children,l=(0,o.Z)(e,["closeLabel","closeVariant","closeButton","onHide","children"]),d=(0,i.useContext)(b.Z),p=(0,a.Z)((function(){null==d||d.onHide(),null==s||s()}));return(0,f.jsxs)("div",g(g({ref:t},l),{},{children:[u,c&&(0,f.jsx)(h,{"aria-label":n,variant:r,onClick:p})]}))}));m.defaultProps={closeLabel:"Close",closeButton:!1};var O=m},40102:function(e,t,n){"use strict";n.d(t,{Z:function(){return j},t:function(){return O}});var r=n(96156),o=n(6610),i=n(5991),a=n(77608);function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=(0,a.Z)(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}var s=n(10379),u=n(46070);var l=n(73164),f=n(60930);function d(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var p=n(67255);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,a.Z)(e);if(t){var o=(0,a.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var h,b=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",y=".sticky-top",g=".navbar-toggler",m=function(e){(0,s.Z)(n,e);var t=v(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"adjustAndStore",value:function(e,t,n){var o=t.style[e];t.dataset[e]=o,(0,l.Z)(t,(0,r.Z)({},e,"".concat(parseFloat((0,l.Z)(t,e))+n,"px")))}},{key:"restore",value:function(e,t){var n=t.dataset[e];void 0!==n&&(delete t.dataset[e],(0,l.Z)(t,(0,r.Z)({},e,n)))}},{key:"setContainerStyle",value:function(e){var t=this;c((0,a.Z)(n.prototype),"setContainerStyle",this).call(this,e);var r,o,i=this.getElement();if(o="modal-open",(r=i).classList?r.classList.add(o):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(r,o)||("string"==typeof r.className?r.className=r.className+" "+o:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+o)),e.scrollBarWidth){var s=this.isRTL?"paddingLeft":"paddingRight",u=this.isRTL?"marginLeft":"marginRight";(0,f.Z)(i,b).forEach((function(n){return t.adjustAndStore(s,n,e.scrollBarWidth)})),(0,f.Z)(i,y).forEach((function(n){return t.adjustAndStore(u,n,-e.scrollBarWidth)})),(0,f.Z)(i,g).forEach((function(n){return t.adjustAndStore(u,n,e.scrollBarWidth)}))}}},{key:"removeContainerStyle",value:function(e){var t=this;c((0,a.Z)(n.prototype),"removeContainerStyle",this).call(this,e);var r,o,i=this.getElement();o="modal-open",(r=i).classList?r.classList.remove(o):"string"==typeof r.className?r.className=d(r.className,o):r.setAttribute("class",d(r.className&&r.className.baseVal||"",o));var s=this.isRTL?"paddingLeft":"paddingRight",u=this.isRTL?"marginLeft":"marginRight";(0,f.Z)(i,b).forEach((function(e){return t.restore(s,e)})),(0,f.Z)(i,y).forEach((function(e){return t.restore(u,e)})),(0,f.Z)(i,g).forEach((function(e){return t.restore(u,e)}))}}]),n}(p.Z);function O(e){return h||(h=new m(e)),h}var j=m},563:function(e,t,n){"use strict";var r,o=n(81253),i=n(96156),a=n(75900),c=n.n(a),s=n(67294),u=n(5160),l=n(20949),f=n(49059),d=n(20558),p=n(85893);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=(r={},(0,i.Z)(r,u.d0,"show"),(0,i.Z)(r,u.cn,"show"),r),y=s.forwardRef((function(e,t){var n=e.className,r=e.children,i=e.transitionClasses,a=void 0===i?{}:i,u=(0,o.Z)(e,["className","children","transitionClasses"]),v=(0,s.useCallback)((function(e,t){(0,f.Z)(e),null==u.onEnter||u.onEnter(e,t)}),[u]);return(0,p.jsx)(d.Z,h(h({ref:t,addEndListener:l.Z},u),{},{onEnter:v,childRef:r.ref,children:function(e,t){return s.cloneElement(r,h(h({},t),{},{className:c()("fade",n,r.props.className,b[e],a[e])}))}}))}));y.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},y.displayName="Fade",t.Z=y},123:function(e,t,n){"use strict";var r=n(67294).createContext({onHide:function(){}});t.Z=r},16132:function(e,t,n){"use strict";var r=n(96156),o=n(67294),i=n(75900),a=n.n(i),c=n(85893);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){return o.forwardRef((function(t,n){return(0,c.jsx)("div",u(u({},t),{},{ref:n,className:a()(t.className,e)}))}))}}}]);
//# sourceMappingURL=92e7a5be8a7b55359bacf688d07c56d8da5b74dc-c5ee0710283415d8e67e.js.map