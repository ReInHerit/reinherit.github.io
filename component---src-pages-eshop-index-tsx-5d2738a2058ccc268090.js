(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[463],{3176:function(e,t,r){"use strict";r.d(t,{Z:function(){return B}});var n=r(8014),a=r(7606),c=r(5444),o=r(7294),l=r(6156),i=r(1253),s=r(5900),u=r.n(s),m=r(9541),d=r(8870),b=r(5893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){return o.forwardRef((function(t,r){return(0,b.jsx)("div",p(p({},t),{},{ref:r,className:u()(t.className,e)}))}))};function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var O=o.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.variant,c=e.as,o=void 0===c?"img":c,s=(0,i.Z)(e,["bsPrefix","className","variant","as"]),d=(0,m.vE)(r,"card-img");return(0,b.jsx)(o,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:u()(a?"".concat(d,"-").concat(a):d,n)},s))}));O.displayName="CardImg";var h=O,v=r(8893);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=o.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.as,c=void 0===a?"div":a,l=(0,i.Z)(e,["bsPrefix","className","as"]),s=(0,m.vE)(r,"card-header"),d=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:s}}),[s]);return(0,b.jsx)(v.Z.Provider,{value:d,children:(0,b.jsx)(c,j(j({ref:t},l),{},{className:u()(n,s)}))})}));P.displayName="CardHeader";var w=P;function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=y("h5"),D=y("h6"),k=(0,d.Z)("card-body"),C=(0,d.Z)("card-title",{Component:Z}),H=(0,d.Z)("card-subtitle",{Component:D}),S=(0,d.Z)("card-link",{Component:"a"}),T=(0,d.Z)("card-text",{Component:"p"}),_=(0,d.Z)("card-footer"),R=(0,d.Z)("card-img-overlay"),I=o.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.bg,c=e.text,o=e.border,l=e.body,s=e.children,d=e.as,f=void 0===d?"div":d,p=(0,i.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=(0,m.vE)(r,"card");return(0,b.jsx)(f,N(N({ref:t},p),{},{className:u()(n,y,a&&"bg-".concat(a),c&&"text-".concat(c),o&&"border-".concat(o)),children:l?(0,b.jsx)(k,{children:s}):s}))}));I.displayName="Card",I.defaultProps={body:!1};var z=Object.assign(I,{Img:h,Title:C,Subtitle:H,Body:k,Link:S,Text:T,Header:w,Footer:_,ImgOverlay:R}),U=r(7408),B=function(e){return o.createElement(U.Z,{key:e.uid&&e.uid},o.createElement(z,{className:"rounded rounded-5 reincard border-0 shadow",style:{fontSize:".95em"}},o.createElement(c.rU,{to:e.url,className:"text-decoration-none text-dark"},o.createElement(z.Body,{style:{minHeight:"200px"}},o.createElement(z.Title,{style:{fontSize:"1em"}},o.createElement(a.G,{style:{fill:"red"},icon:n.gMD,size:"1x",className:"me-md-1"})," ",e.title),o.createElement("hr",null),o.createElement(z.Text,null,e.body),e.children)),o.createElement(z.Footer,{className:"border-0"},o.createElement("small",{className:"text-muted d-inline"},e.footerContent&&e.footerContent,o.createElement("br",null)))))}},8116:function(e,t,r){"use strict";var n=r(7294),a=r(994);t.Z=function(e){return n.createElement(a.Z,{xs:1,md:3,xxl:3,className:"g-3"},e.children)}},8439:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),a=r(6187),c=function(){return n.createElement("div",{className:"pt-3 mt-4 bg-white text-center"},n.createElement("div",{className:"pb-3"},n.createElement(a.Z,{className:"pt-3"},n.createElement("img",{alt:"Reinherit header image",src:"images/Slogan-cut.webp",style:{marginTop:"3vh"},height:80}),n.createElement("h2",{style:{marginTop:"2vh",color:"grey"},className:"h3"},"ReInHerit Digital Hub"))))},o=r(7749),l=r(6172),i=r(8263),s=r(8500),u=function(e){var t=e.children,r=e.pageTitle;return n.createElement(i.Z,null,n.createElement(s.Z,{pageTitle:r}),n.createElement(c,null),n.createElement(o.Z,null),n.createElement(a.Z,{className:"rein_main_container pt-sm-4 pt-md-0",style:{marginTop:"2vh"},fluid:!0},t),n.createElement(l.Z,null))}},513:function(e,t,r){"use strict";var n=r(5444),a=r(7294);t.Z=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"mb-3",style:{fontSize:"1.25em"}},a.createElement(n.rU,{to:"/",className:"text-decoration-none"},a.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Home")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e,t){return a.createElement("div",{key:"rein_bread_"+t,className:"d-inline"},a.createElement("span",null," / "),0===t?a.createElement("b",null,a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label)):a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label))}))),a.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},a.createElement("div",null,a.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&a.createElement("h2",{className:"h5"},e.subHeading),e.subText&&a.createElement("p",null,e.subText))))}},5226:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(7294),a=r(5444),c=r(8116),o=r(3176),l=function(){var e=(0,a.K2)(i);return n.createElement(c.Z,null,e.allMarkdownRemark.edges.map((function(e){return n.createElement(o.Z,{body:e.node.excerpt,title:e.node.frontmatter.title,url:"/eshop/"+e.node.frontmatter.pageId,uid:e.node.frontmatter.pageId},n.createElement("img",{style:{maxWidth:200},src:e.node.frontmatter.thumbnail}))})))},i="1889714180",s=r(8439),u=r(513),m=function(){return n.createElement(s.Z,{pageTitle:"Eshop | ReInHerit Digital Hub"},n.createElement(u.Z,{subHeading:"Collection of free downloadable artistic designs",subText:"Here you'll find all the free artistic designs created during the ReInHerit project. All are free to download and available for the public.",breadCrumb:[{label:"Eshop",value:"/eshop"}]},"eShop"),n.createElement(l,null))}}}]);
//# sourceMappingURL=component---src-pages-eshop-index-tsx-5d2738a2058ccc268090.js.map