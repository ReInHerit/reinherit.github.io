"use strict";(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[143],{8881:function(e,r,t){var n=t(6156),o=t(1253),c=t(5900),i=t.n(c),a=t(7294),s=t(5697),l=t.n(s),f=t(5893),p=["as","className","type","tooltip"];function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var u={type:l().string,tooltip:l().bool,as:l().elementType},d=a.forwardRef((function(e,r){var t=e.as,n=void 0===t?"div":t,c=e.className,a=e.type,s=void 0===a?"valid":a,l=e.tooltip,b=void 0!==l&&l,u=(0,o.Z)(e,p);return(0,f.jsx)(n,O(O({},u),{},{ref:r,className:i()(c,"".concat(s,"-").concat(b?"tooltip":"feedback"))}))}));d.displayName="Feedback",d.propTypes=u,r.Z=d},3339:function(e,r,t){t.d(r,{Z:function(){return Oe}});var n=t(6156),o=t(1253),c=t(5900),i=t.n(c),a=t(5697),s=t.n(a),l=t(7294),f=t(8881),p=t(4709),b=t(8788),O=t(9541),u=t(5893),d=["bsPrefix","className","htmlFor"];function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var v=l.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,c=e.htmlFor,a=(0,o.Z)(e,d),s=(0,l.useContext)(b.Z).controlId;return t=(0,O.vE)(t,"form-check-label"),(0,u.jsx)("label",j(j({},a),{},{ref:r,htmlFor:c||s,className:i()(n,t)}))}));v.displayName="FormCheckLabel";var m=v,P=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"];function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var w=l.forwardRef((function(e,r){var t=e.id,n=e.bsPrefix,c=e.bsSwitchPrefix,a=e.inline,s=void 0!==a&&a,d=e.disabled,y=void 0!==d&&d,j=e.isValid,v=void 0!==j&&j,g=e.isInvalid,w=void 0!==g&&g,x=e.feedbackTooltip,Z=void 0!==x&&x,D=e.feedback,N=e.feedbackType,E=e.className,k=e.style,S=e.title,I=void 0===S?"":S,F=e.type,C=void 0===F?"checkbox":F,R=e.label,z=e.children,T=e.as,V=void 0===T?"input":T,L=(0,o.Z)(e,P);n=(0,O.vE)(n,"form-check"),c=(0,O.vE)(c,"form-switch");var _=(0,l.useContext)(b.Z).controlId,H=(0,l.useMemo)((function(){return{controlId:t||_}}),[_,t]),G=null!=R&&!1!==R&&!z,M=(0,u.jsx)(p.Z,h(h({},L),{},{type:"switch"===C?"checkbox":C,ref:r,isValid:v,isInvalid:w,disabled:y,as:V}));return(0,u.jsx)(b.Z.Provider,{value:H,children:(0,u.jsx)("div",{style:k,className:i()(E,R&&n,s&&"".concat(n,"-inline"),"switch"===C&&c),children:z||(0,u.jsxs)(u.Fragment,{children:[M,G&&(0,u.jsx)(m,{title:I,children:R}),D&&(0,u.jsx)(f.Z,{type:N,tooltip:Z,children:D})]})})})}));w.displayName="FormCheck";var x=Object.assign(w,{Input:p.Z,Label:m}),Z=t(1760),D=(0,t(8870).Z)("form-floating"),N=["controlId","as"];function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?E(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var S=l.forwardRef((function(e,r){var t=e.controlId,n=e.as,c=void 0===n?"div":n,i=(0,o.Z)(e,N),a=(0,l.useMemo)((function(){return{controlId:t}}),[t]);return(0,u.jsx)(b.Z.Provider,{value:a,children:(0,u.jsx)(c,k(k({},i),{},{ref:r}))})}));S.displayName="FormGroup";var I=S,F=(t(2473),t(7408)),C=["as","bsPrefix","column","visuallyHidden","className","htmlFor"];function R(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function z(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?R(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var T=l.forwardRef((function(e,r){var t=e.as,n=void 0===t?"label":t,c=e.bsPrefix,a=e.column,s=e.visuallyHidden,f=e.className,p=e.htmlFor,d=(0,o.Z)(e,C),y=(0,l.useContext)(b.Z).controlId;c=(0,O.vE)(c,"form-label");var j="col-form-label";"string"==typeof a&&(j="".concat(j," ").concat(j,"-").concat(a));var v=i()(f,c,s&&"visually-hidden",a&&j);return p=p||y,a?(0,u.jsx)(F.Z,z({ref:r,as:"label",className:v,htmlFor:p},d)):(0,u.jsx)(n,z({ref:r,className:v,htmlFor:p},d))}));T.displayName="FormLabel",T.defaultProps={column:!1,visuallyHidden:!1};var V=T,L=["bsPrefix","className","id"];function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function H(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var G=l.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,c=e.id,a=(0,o.Z)(e,L),s=(0,l.useContext)(b.Z).controlId;return t=(0,O.vE)(t,"form-range"),(0,u.jsx)("input",H(H({},a),{},{type:"range",ref:r,className:i()(n,t),id:c||s}))}));G.displayName="FormRange";var M=G,q=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"];function A(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function B(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?A(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var J=l.forwardRef((function(e,r){var t=e.bsPrefix,n=e.size,c=e.htmlSize,a=e.className,s=e.isValid,f=void 0!==s&&s,p=e.isInvalid,d=void 0!==p&&p,y=e.id,j=(0,o.Z)(e,q),v=(0,l.useContext)(b.Z).controlId;return t=(0,O.vE)(t,"form-select"),(0,u.jsx)("select",B(B({},j),{},{size:c,ref:r,className:i()(a,t,n&&"".concat(t,"-").concat(n),f&&"is-valid",d&&"is-invalid"),id:y||v}))}));J.displayName="FormSelect";var K=J,Q=["bsPrefix","className","as","muted"];function U(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function W(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?U(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var X=l.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,c=e.as,a=void 0===c?"small":c,s=e.muted,l=(0,o.Z)(e,Q);return t=(0,O.vE)(t,"form-text"),(0,u.jsx)(a,W(W({},l),{},{ref:r,className:i()(n,t,s&&"text-muted")}))}));X.displayName="FormText";var Y=X;function $(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ee(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?$(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var re=l.forwardRef((function(e,r){return(0,u.jsx)(x,ee(ee({},e),{},{ref:r,type:"switch"}))}));re.displayName="Switch";var te=Object.assign(re,{Input:x.Input,Label:x.Label}),ne=["bsPrefix","className","children","controlId","label"];function oe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ce(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?oe(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ie=l.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,c=e.children,a=e.controlId,s=e.label,l=(0,o.Z)(e,ne);return t=(0,O.vE)(t,"form-floating"),(0,u.jsxs)(I,ce(ce({ref:r,className:i()(n,t),controlId:a},l),{},{children:[c,(0,u.jsx)("label",{htmlFor:a,children:s})]}))}));ie.displayName="FloatingLabel";var ae=ie,se=["className","validated","as"];function le(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function fe(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?le(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):le(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var pe={_ref:s().any,validated:s().bool,as:s().elementType},be=l.forwardRef((function(e,r){var t=e.className,n=e.validated,c=e.as,a=void 0===c?"form":c,s=(0,o.Z)(e,se);return(0,u.jsx)(a,fe(fe({},s),{},{ref:r,className:i()(t,n&&"was-validated")}))}));be.displayName="Form",be.propTypes=pe;var Oe=Object.assign(be,{Group:I,Control:Z.Z,Floating:D,Check:x,Switch:te,Label:V,Text:Y,Range:M,Select:K,FloatingLabel:ae})},4709:function(e,r,t){var n=t(6156),o=t(1253),c=t(5900),i=t.n(c),a=t(7294),s=t(8788),l=t(9541),f=t(5893),p=["id","bsPrefix","className","type","isValid","isInvalid","as"];function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var u=a.forwardRef((function(e,r){var t=e.id,n=e.bsPrefix,c=e.className,b=e.type,u=void 0===b?"checkbox":b,d=e.isValid,y=void 0!==d&&d,j=e.isInvalid,v=void 0!==j&&j,m=e.as,P=void 0===m?"input":m,g=(0,o.Z)(e,p),h=(0,a.useContext)(s.Z).controlId;return n=(0,l.vE)(n,"form-check-input"),(0,f.jsx)(P,O(O({},g),{},{ref:r,type:u,id:t||h,className:i()(c,n,y&&"is-valid",v&&"is-invalid")}))}));u.displayName="FormCheckInput",r.Z=u},8788:function(e,r,t){var n=t(7294).createContext({});r.Z=n},1760:function(e,r,t){var n=t(6156),o=t(1253),c=t(5900),i=t.n(c),a=t(7294),s=(t(2473),t(8881)),l=t(8788),f=t(9541),p=t(5893),b=["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"];function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=a.forwardRef((function(e,r){var t,c,s=e.bsPrefix,O=e.type,d=e.size,y=e.htmlSize,j=e.id,v=e.className,m=e.isValid,P=void 0!==m&&m,g=e.isInvalid,h=void 0!==g&&g,w=e.plaintext,x=e.readOnly,Z=e.as,D=void 0===Z?"input":Z,N=(0,o.Z)(e,b),E=(0,a.useContext)(l.Z).controlId;(s=(0,f.vE)(s,"form-control"),w)?t=(0,n.Z)({},"".concat(s,"-plaintext"),!0):(c={},(0,n.Z)(c,s,!0),(0,n.Z)(c,"".concat(s,"-").concat(d),d),t=c);return(0,p.jsx)(D,u(u({},N),{},{type:O,size:y,ref:r,readOnly:x,id:j||E,className:i()(v,t,P&&"is-valid",h&&"is-invalid","color"===O&&"".concat(s,"-color"))}))}));d.displayName="FormControl",r.Z=Object.assign(d,{Feedback:s.Z})},845:function(e,r,t){var n=t(7294),o=t(994),c=t(7408);r.Z=function(e){return n.createElement(o.Z,null,n.createElement(c.Z,null,e.side),n.createElement(c.Z,{lg:9,xxl:10},e.children))}}}]);
//# sourceMappingURL=842309b0694840f1e0d2f2fbed68876bed58eb9b-ffed8176b3b1eeeec9e1.js.map