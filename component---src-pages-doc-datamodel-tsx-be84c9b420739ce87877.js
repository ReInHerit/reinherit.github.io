(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[797],{2315:function(e,t,r){"use strict";var n=r(7294),a=r(994),l=r(7408),c=r(6187);t.Z=function(e){return n.createElement(a.Z,null,n.createElement(l.Z,{xl:2},e.left),n.createElement(l.Z,{xl:8},n.createElement(c.Z,null,e.children)),n.createElement(l.Z,{xl:2},e.right))}},8439:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),a=r(6187),l=function(){return n.createElement("div",{className:"pt-3 mt-4 bg-white text-center"},n.createElement("div",{className:"pb-3"},n.createElement(a.Z,{className:"pt-3"},n.createElement("img",{alt:"Reinherit header image",src:"images/Slogan-cut.webp",style:{marginTop:"3vh"},height:80}),n.createElement("h2",{style:{marginTop:"2vh",color:"grey"},className:"h3"},"ReInHerit Digital Hub"))))},c=r(9649),i=r(6172),o=r(8263),s=r(8500),u=function(e){var t=e.children,r=e.pageTitle;return n.createElement(o.Z,null,n.createElement(s.Z,{pageTitle:r}),n.createElement(l,null),n.createElement(c.Z,null),n.createElement(a.Z,{className:"rein_main_container pt-sm-4 pt-md-0",style:{marginTop:"2vh"},fluid:!0},t),n.createElement(i.Z,null))}},2104:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(5444),a=r(7294),l=r(6156),c=r(1253),i=r(5900),o=r.n(i),s=(r(2473),r(124)),u=r(5378),m=r(9541),b=r(8481),f=r(5655),d=r(3904),p=r(9148),h=r(5893);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.active,a=e.disabled,l=e.eventKey,i=e.className,s=e.variant,u=e.action,v=e.as,g=(0,c.Z)(e,["bsPrefix","active","disabled","eventKey","className","variant","action","as"]);r=(0,m.vE)(r,"list-group-item");var y=(0,d.v)(E({key:(0,p.h)(l,g.href),active:n},g)),O=(0,b.Z)(y,2),j=O[0],Z=O[1],N=(0,f.Z)((function(e){if(a)return e.preventDefault(),void e.stopPropagation();j.onClick(e)}));a&&void 0===g.tabIndex&&(g.tabIndex=-1,g["aria-disabled"]=!0);var w=v||(u?g.href?"a":"button":"div");return(0,h.jsx)(w,E(E(E({ref:t},g),j),{},{onClick:N,className:o()(i,r,Z.isActive&&"active",a&&"disabled",s&&"".concat(r,"-").concat(s),u&&"".concat(r,"-action"))}))}));g.displayName="ListGroupItem";var y=g;function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=a.forwardRef((function(e,t){var r,n=(0,s.Ch)(e,{activeKey:"onSelect"}),a=n.className,l=n.bsPrefix,i=n.variant,b=n.horizontal,f=n.as,d=void 0===f?"div":f,p=(0,c.Z)(n,["className","bsPrefix","variant","horizontal","as"]),v=(0,m.vE)(l,"list-group");return b&&(r=!0===b?"horizontal":"horizontal-".concat(b)),(0,h.jsx)(u.Z,j(j({ref:t},p),{},{as:d,className:o()(a,v,i&&"".concat(v,"-").concat(i),r&&"".concat(v,"-").concat(r))}))}));Z.displayName="ListGroup";var N=Object.assign(Z,{Item:y}),w=function(e){return a.createElement(N,{className:e.sticky&&"sticky-top",variant:"flush"},a.createElement(y,null,a.createElement(n.rU,{to:"/doc"},"Architecture")),a.createElement(y,null,a.createElement(n.rU,{to:"/doc/authorization"},"Access levels / roles")),a.createElement(y,null,a.createElement(n.rU,{to:"/doc/faq"},"FAQ")),a.createElement(y,null,a.createElement(n.rU,{to:"/doc/howto"},"Manuals")))}},513:function(e,t,r){"use strict";var n=r(5444),a=r(7294);t.Z=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"mb-3",style:{fontSize:"1.25em"}},a.createElement(n.rU,{to:"/",className:"text-decoration-none"},a.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Home")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e,t){return a.createElement("div",{key:"rein_bread_"+t,className:"d-inline"},a.createElement("span",null," / "),0===t?a.createElement("b",null,a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label)):a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label))}))),a.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},a.createElement("div",null,a.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&a.createElement("h2",{className:"h5"},e.subHeading),e.subText&&a.createElement("p",null,e.subText))))}},8244:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(2315),l=r(8439),c=r(2104),i=r(513);t.default=function(){return n.createElement(l.Z,{pageTitle:"Datamodel | ReInHerit Digital Hub"},n.createElement(i.Z,{subHeading:"Materials / manuals about the ReInHerit digital-hub itself"},"Documentation"),n.createElement("p",null,"Here you'll find explainatory material, helpful texts and graphics for the digital-hub itself."),n.createElement(a.Z,{left:n.createElement(c.Z,null)},n.createElement("h2",null,"Data model of ReinHerit"),n.createElement("h2",null,"ER Diagram?")))}}}]);
//# sourceMappingURL=component---src-pages-doc-datamodel-tsx-be84c9b420739ce87877.js.map