(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[1099],{16002:function(e,t,r){"use strict";var n=r(96156),a=r(81253),c=r(75900),i=r.n(c),l=r(67294),o=(r(42473),r(80124)),s=r(75378),m=r(99541),u=r(34550),b=r(85893);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=l.forwardRef((function(e,t){var r,n=(0,o.Ch)(e,{activeKey:"onSelect"}),c=n.className,l=n.bsPrefix,u=n.variant,d=n.horizontal,p=n.as,h=void 0===p?"div":p,v=(0,a.Z)(n,["className","bsPrefix","variant","horizontal","as"]),g=(0,m.vE)(l,"list-group");return d&&(r=!0===d?"horizontal":"horizontal-".concat(d)),(0,b.jsx)(s.Z,f(f({ref:t},v),{},{as:h,className:i()(c,g,u&&"".concat(g,"-").concat(u),r&&"".concat(g,"-").concat(r))}))}));p.displayName="ListGroup",t.Z=Object.assign(p,{Item:u.Z})},34550:function(e,t,r){"use strict";var n=r(96156),a=r(28481),c=r(81253),i=r(75900),l=r.n(i),o=r(67294),s=r(85655),m=r(93904),u=r(59148),b=r(99541),d=r(85893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=o.forwardRef((function(e,t){var r=e.bsPrefix,n=e.active,i=e.disabled,o=e.eventKey,f=e.className,h=e.variant,v=e.action,g=e.as,E=(0,c.Z)(e,["bsPrefix","active","disabled","eventKey","className","variant","action","as"]);r=(0,b.vE)(r,"list-group-item");var y=(0,m.v)(p({key:(0,u.h)(o,E.href),active:n},E)),O=(0,a.Z)(y,2),Z=O[0],x=O[1],w=(0,s.Z)((function(e){if(i)return e.preventDefault(),void e.stopPropagation();Z.onClick(e)}));i&&void 0===E.tabIndex&&(E.tabIndex=-1,E["aria-disabled"]=!0);var j=g||(v?E.href?"a":"button":"div");return(0,d.jsx)(j,p(p(p({ref:t},E),Z),{},{onClick:w,className:l()(f,r,x.isActive&&"active",i&&"disabled",h&&"".concat(r,"-").concat(h),v&&"".concat(r,"-action"))}))}));h.displayName="ListGroupItem",t.Z=h},92869:function(e,t,r){"use strict";var n=r(25444),a=r(67294),c=r(16002),i=r(34550);t.Z=function(e){var t=(0,n.K2)(l);return a.createElement(c.Z,null,t.allMarkdownRemark.edges.sort().map((function(e){return a.createElement(i.Z,{style:{border:"0px"},eventKey:e.node.frontmatter.pageId},a.createElement(n.rU,{to:"/exhibdoc/"+e.node.frontmatter.pageId,style:{textDecoration:"none"}},e.node.frontmatter.title),a.createElement("hr",null))})))};var l="508345900"},30845:function(e,t,r){"use strict";var n=r(67294),a=r(20994),c=r(7408);t.Z=function(e){return n.createElement(a.Z,null,n.createElement(c.Z,null,e.side),n.createElement(c.Z,{lg:9,xxl:10},e.children))}},58439:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(67294),a=r(33639),c=function(){return n.createElement("div",{className:"pt-3 mt-4 bg-white text-center"},n.createElement("div",{className:"pb-3"},n.createElement(a.Z,{className:"pt-3"},n.createElement("img",{alt:"Reinherit header image",src:"images/Slogan-cut.webp",style:{marginTop:"3vh"},height:80}),n.createElement("h2",{style:{marginTop:"2vh",color:"grey"},className:"h3"},"ReInHerit Digital Hub"))))},i=r(55418),l=r(76172),o=r(58263),s=r(8500),m=function(e){var t=e.children,r=e.pageTitle;return n.createElement(o.Z,null,n.createElement(s.Z,{pageTitle:r}),n.createElement(c,null),n.createElement(i.Z,null),n.createElement(a.Z,{className:"rein_main_container pt-sm-4 pt-md-0",style:{marginTop:"2vh"},fluid:!0},t),n.createElement(l.Z,null))}},513:function(e,t,r){"use strict";var n=r(25444),a=r(67294);t.Z=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"mb-3",style:{fontSize:"1.25em"}},a.createElement(n.rU,{to:"/",className:"text-decoration-none"},a.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Home")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e,t){return a.createElement("div",{key:"rein_bread_"+t,className:"d-inline"},a.createElement("span",null," / "),0===t?a.createElement("b",null,a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label)):a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label))}))),a.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},a.createElement("div",null,a.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&a.createElement("h2",{className:"h5"},e.subHeading),e.subText&&a.createElement("p",null,e.subText))))}},58724:function(e,t,r){"use strict";r.r(t);var n=r(67294),a=r(58439),c=r(92869),i=r(513),l=r(33639),o=r(30845);t.default=function(){return n.createElement(a.Z,{pageTitle:"Exhibitions: Documentation"},n.createElement(i.Z,{subHeading:"Technical documentation of the development, design, and features of the ReInHerit exhibitions.",breadCrumb:[{label:"Resources",value:"/resources"},{label:"Exhibitions documentation",value:"/exhibdoc"}]},"Documentation of the ReInHerit Exhibitions."),n.createElement("div",{className:"blog-post-container",id:"markdown_container"},n.createElement("div",{className:"blog-post"},n.createElement(o.Z,{side:n.createElement("div",{className:"card p-4 border-0 shadow bg-white"},n.createElement(c.Z,null))},n.createElement(l.Z,{fluid:!0,className:"bg-white card p-4 mb-2 border-0 shadow"},n.createElement("div",null,"This section documents the design and development process of the ReInHerit exhibitions, as well as the technologies used. Discover more by exploring the items on the left!"))))))}}}]);
//# sourceMappingURL=component---src-pages-exhibdoc-docarchitecture-tsx-85f7b5264433f81562f3.js.map