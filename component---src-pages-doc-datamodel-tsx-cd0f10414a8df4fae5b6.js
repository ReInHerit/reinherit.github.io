(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[7797],{16002:function(e,t,r){"use strict";var n=r(96156),a=r(81253),c=r(75900),l=r.n(c),i=r(67294),o=(r(42473),r(80124)),s=r(75378),u=r(99541),m=r(34550),b=r(85893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=i.forwardRef((function(e,t){var r,n=(0,o.Ch)(e,{activeKey:"onSelect"}),c=n.className,i=n.bsPrefix,m=n.variant,f=n.horizontal,p=n.as,h=void 0===p?"div":p,v=(0,a.Z)(n,["className","bsPrefix","variant","horizontal","as"]),E=(0,u.vE)(i,"list-group");return f&&(r=!0===f?"horizontal":"horizontal-".concat(f)),(0,b.jsx)(s.Z,d(d({ref:t},v),{},{as:h,className:l()(c,E,m&&"".concat(E,"-").concat(m),r&&"".concat(E,"-").concat(r))}))}));p.displayName="ListGroup",t.Z=Object.assign(p,{Item:m.Z})},34550:function(e,t,r){"use strict";var n=r(96156),a=r(28481),c=r(81253),l=r(75900),i=r.n(l),o=r(67294),s=r(85655),u=r(93904),m=r(59148),b=r(99541),f=r(85893);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=o.forwardRef((function(e,t){var r=e.bsPrefix,n=e.active,l=e.disabled,o=e.eventKey,d=e.className,h=e.variant,v=e.action,E=e.as,g=(0,c.Z)(e,["bsPrefix","active","disabled","eventKey","className","variant","action","as"]);r=(0,b.vE)(r,"list-group-item");var y=(0,u.v)(p({key:(0,m.h)(o,g.href),active:n},g)),O=(0,a.Z)(y,2),Z=O[0],j=O[1],N=(0,s.Z)((function(e){if(l)return e.preventDefault(),void e.stopPropagation();Z.onClick(e)}));l&&void 0===g.tabIndex&&(g.tabIndex=-1,g["aria-disabled"]=!0);var w=E||(v?g.href?"a":"button":"div");return(0,f.jsx)(w,p(p(p({ref:t},g),Z),{},{onClick:N,className:i()(d,r,j.isActive&&"active",l&&"disabled",h&&"".concat(r,"-").concat(h),v&&"".concat(r,"-action"))}))}));h.displayName="ListGroupItem",t.Z=h},32315:function(e,t,r){"use strict";var n=r(67294),a=r(20994),c=r(7408),l=r(33639);t.Z=function(e){return n.createElement(a.Z,null,n.createElement(c.Z,{xl:2},e.left),n.createElement(c.Z,{xl:8},n.createElement(l.Z,null,e.children)),n.createElement(c.Z,{xl:2},e.right))}},58439:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(67294),a=r(33639),c=function(){return n.createElement("div",{className:"pt-3 mt-4 bg-white text-center"},n.createElement("div",{className:"pb-3"},n.createElement(a.Z,{className:"pt-3"},n.createElement("img",{alt:"Reinherit header image",src:"images/Slogan-cut.webp",style:{marginTop:"3vh"},height:80}),n.createElement("h2",{style:{marginTop:"2vh",color:"grey"},className:"h3"},"ReInHerit Digital Hub"))))},l=r(55418),i=r(76172),o=r(58263),s=r(8500),u=function(e){var t=e.children,r=e.pageTitle;return n.createElement(o.Z,null,n.createElement(s.Z,{pageTitle:r}),n.createElement(c,null),n.createElement(l.Z,null),n.createElement(a.Z,{className:"rein_main_container pt-sm-4 pt-md-0",style:{marginTop:"2vh"},fluid:!0},t),n.createElement(i.Z,null))}},45608:function(e,t,r){"use strict";var n=r(25444),a=r(67294),c=r(16002),l=r(34550);t.Z=function(e){return a.createElement(c.Z,{className:e.sticky&&"sticky-top",variant:"flush"},a.createElement(l.Z,null,a.createElement(n.rU,{to:"/doc"},"Architecture")),a.createElement(l.Z,null,a.createElement(n.rU,{to:"/doc/authorization"},"Access levels / roles")),a.createElement(l.Z,null,a.createElement(n.rU,{to:"/doc/faq"},"FAQ")),a.createElement(l.Z,null,a.createElement(n.rU,{to:"/doc/howto"},"Manuals")))}},513:function(e,t,r){"use strict";var n=r(25444),a=r(67294);t.Z=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"mb-3",style:{fontSize:"1.25em"}},a.createElement(n.rU,{to:"/",className:"text-decoration-none"},a.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Home")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e,t){return a.createElement("div",{key:"rein_bread_"+t,className:"d-inline"},a.createElement("span",null," / "),0===t?a.createElement("b",null,a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label)):a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label))}))),a.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},a.createElement("div",null,a.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&a.createElement("h2",{className:"h5"},e.subHeading),e.subText&&a.createElement("p",null,e.subText))))}},58244:function(e,t,r){"use strict";r.r(t);var n=r(67294),a=r(32315),c=r(58439),l=r(45608),i=r(513);t.default=function(){return n.createElement(c.Z,{pageTitle:"Datamodel | ReInHerit Digital Hub"},n.createElement(i.Z,{subHeading:"Materials / manuals about the ReInHerit digital-hub itself"},"Documentation"),n.createElement("p",null,"Here you'll find explainatory material, helpful texts and graphics for the digital-hub itself."),n.createElement(a.Z,{left:n.createElement(l.Z,null)},n.createElement("h2",null,"Data model of ReinHerit"),n.createElement("h2",null,"ER Diagram?")))}}}]);
//# sourceMappingURL=component---src-pages-doc-datamodel-tsx-cd0f10414a8df4fae5b6.js.map