(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[812],{3176:function(e,t,r){"use strict";r.d(t,{Z:function(){return F}});var n=r(5444),a=r(7294),c=r(6156),i=r(1253),o=r(5900),l=r.n(o),s=r(9541),u=r(8870),d=r(5893);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){return a.forwardRef((function(t,r){return(0,d.jsx)("div",f(f({},t),{},{ref:r,className:l()(t.className,e)}))}))};function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var y=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.variant,o=e.as,u=void 0===o?"img":o,b=(0,i.Z)(e,["bsPrefix","className","variant","as"]),f=(0,s.vE)(r,"card-img");return(0,d.jsx)(u,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:l()(a?"".concat(f,"-").concat(a):f,n)},b))}));y.displayName="CardImg";var O=y,h=r(8893);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.as,o=void 0===c?"div":c,u=(0,i.Z)(e,["bsPrefix","className","as"]),b=(0,s.vE)(r,"card-header"),f=(0,a.useMemo)((function(){return{cardHeaderBsPrefix:b}}),[b]);return(0,d.jsx)(h.Z.Provider,{value:f,children:(0,d.jsx)(o,g(g({ref:t},u),{},{className:l()(n,b)}))})}));j.displayName="CardHeader";var P=j;function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=m("h5"),x=m("h6"),N=(0,u.Z)("card-body"),D=(0,u.Z)("card-title",{Component:Z}),k=(0,u.Z)("card-subtitle",{Component:x}),H=(0,u.Z)("card-link",{Component:"a"}),C=(0,u.Z)("card-text",{Component:"p"}),S=(0,u.Z)("card-footer"),R=(0,u.Z)("card-img-overlay"),I=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.bg,c=e.text,o=e.border,u=e.body,b=e.children,f=e.as,m=void 0===f?"div":f,p=(0,i.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=(0,s.vE)(r,"card");return(0,d.jsx)(m,w(w({ref:t},p),{},{className:l()(n,y,a&&"bg-".concat(a),c&&"text-".concat(c),o&&"border-".concat(o)),children:u?(0,d.jsx)(N,{children:b}):b}))}));I.displayName="Card",I.defaultProps={body:!1};var _=Object.assign(I,{Img:O,Title:D,Subtitle:k,Body:N,Link:H,Text:C,Header:P,Footer:S,ImgOverlay:R}),T=r(7408),F=function(e){return a.createElement(T.Z,{key:e.uid&&e.uid},a.createElement(_,{className:"rounded rounded-0 reincard",style:{fontSize:".95em",borderColor:"black"}},a.createElement(n.rU,{to:e.url,className:"text-decoration-none text-dark"},a.createElement(_.Body,null,a.createElement(_.Title,{style:{fontSize:"1em"}},e.title),a.createElement("hr",null),a.createElement(_.Text,null,e.body),a.createElement("br",null),e.children)),(e.footerContent||e.uid)&&a.createElement(_.Footer,{className:"bg-white border-0"},a.createElement("small",{className:"text-muted d-inline"},e.footerContent&&e.footerContent,a.createElement("br",null)))))}},8116:function(e,t,r){"use strict";var n=r(7294),a=r(994);t.Z=function(e){return n.createElement(a.Z,{xs:1,md:3,xxl:3,className:"g-3"},e.children)}},5472:function(e,t,r){"use strict";var n=r(7294),a=r(7073),c=r(6187),i=r(7749),o=r(6172),l=r(8263),s=r(9749);t.Z=function(e){var t=e.children;return n.createElement(l.Z,null,n.createElement(s.Z,null),n.createElement(a.Z,null),n.createElement(i.Z,null),n.createElement(c.Z,{className:"rein_main_container pt-3",fluid:!0},t),n.createElement(o.Z,null))}},513:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){return n.createElement(n.Fragment,null,n.createElement("h1",e,e.children),e.subHeading&&n.createElement("h2",{className:"h5"},e.subHeading))}},8782:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(8116),c=r(3176),i=r(5472),o=r(513);t.default=function(){return n.createElement(i.Z,null,n.createElement(o.Z,{subHeading:"Structured overview of all material on the digital-hub"},"Hub content"),n.createElement("p",null,"Here you'll find  digital exhibitions, videos and images from the project immersive performances, and apps that let you play and interact with cultural heritage in innovative ways."),n.createElement(a.Z,null,n.createElement(c.Z,{body:"Free artistic designs created during the ReInHerit project. All are free to download and available for the public.",title:"eShop",url:"/eshop"}),n.createElement(c.Z,{body:"Digital-first exhibitions and related material provided by ReInHerit.",title:"Digital exhibition",url:"/exhibs/digital"}),n.createElement(c.Z,{body:"Performances developed and carried out in the course of the ReInHerit project.",title:"Performances",url:"/performances"}),n.createElement(c.Z,{body:"On site exhibitions and related material provided by ReInHerit.",title:"Travelling exhibitions",url:"/exhibs/travel"}),n.createElement(c.Z,{body:"Hackathon organized by ReInHerit.",title:"Hackathon",url:"/hackathon"})))}}}]);
//# sourceMappingURL=component---src-pages-visitorhub-tsx-246b9c8ad68f30106998.js.map