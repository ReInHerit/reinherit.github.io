(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[722],{3176:function(e,t,r){"use strict";r.d(t,{Z:function(){return B}});var n=r(8014),a=r(7606),c=r(5444),l=r(7294),o=r(6156),i=r(1253),s=r(5900),u=r.n(s),m=r(9541),b=r(8870),d=r(5893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){return l.forwardRef((function(t,r){return(0,d.jsx)("div",p(p({},t),{},{ref:r,className:u()(t.className,e)}))}))};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var g=l.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.variant,c=e.as,l=void 0===c?"img":c,s=(0,i.Z)(e,["bsPrefix","className","variant","as"]),b=(0,m.vE)(r,"card-img");return(0,d.jsx)(l,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:u()(a?"".concat(b,"-").concat(a):b,n)},s))}));g.displayName="CardImg";var O=g,h=r(8893);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=l.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.as,c=void 0===a?"div":a,o=(0,i.Z)(e,["bsPrefix","className","as"]),s=(0,m.vE)(r,"card-header"),b=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:s}}),[s]);return(0,d.jsx)(h.Z.Provider,{value:b,children:(0,d.jsx)(c,j(j({ref:t},o),{},{className:u()(n,s)}))})}));P.displayName="CardHeader";var x=P;function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=y("h5"),H=y("h6"),k=(0,b.Z)("card-body"),D=(0,b.Z)("card-title",{Component:Z}),C=(0,b.Z)("card-subtitle",{Component:H}),T=(0,b.Z)("card-link",{Component:"a"}),S=(0,b.Z)("card-text",{Component:"p"}),R=(0,b.Z)("card-footer"),_=(0,b.Z)("card-img-overlay"),I=l.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.bg,c=e.text,l=e.border,o=e.body,s=e.children,b=e.as,f=void 0===b?"div":b,p=(0,i.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=(0,m.vE)(r,"card");return(0,d.jsx)(f,N(N({ref:t},p),{},{className:u()(n,y,a&&"bg-".concat(a),c&&"text-".concat(c),l&&"border-".concat(l)),children:o?(0,d.jsx)(k,{children:s}):s}))}));I.displayName="Card",I.defaultProps={body:!1};var z=Object.assign(I,{Img:O,Title:D,Subtitle:C,Body:k,Link:T,Text:S,Header:x,Footer:R,ImgOverlay:_}),U=r(7408),B=function(e){return l.createElement(U.Z,{key:e.uid&&e.uid},l.createElement(z,{className:"rounded rounded-5 reincard border-0 shadow",style:{fontSize:".95em"}},l.createElement(c.rU,{to:e.url,className:"text-decoration-none text-dark"},l.createElement(z.Body,{style:{minHeight:"200px"}},l.createElement(z.Title,{style:{fontSize:"1em"}},l.createElement(a.G,{style:{fill:"grey"},icon:n.gMD,size:"1x",className:"me-md-1"})," ",e.title),l.createElement("hr",null),l.createElement(z.Text,null,e.body),e.children)),l.createElement(z.Footer,{className:"border-0"},l.createElement("small",{className:"text-muted d-inline"},e.footerContent&&e.footerContent,l.createElement("br",null)))))}},8116:function(e,t,r){"use strict";var n=r(7294),a=r(994);t.Z=function(e){return n.createElement(a.Z,{xs:1,md:3,xxl:3,className:"g-3"},e.children)}},8439:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),a=r(6187),c=function(){return n.createElement("div",{className:"pt-3 mt-4 bg-white text-center"},n.createElement("div",{className:"pb-3"},n.createElement(a.Z,{className:"pt-3"},n.createElement("img",{alt:"Reinherit header image",src:"images/Slogan-cut.webp",style:{marginTop:"3vh"},height:80}),n.createElement("h2",{style:{marginTop:"2vh",color:"grey"},className:"h3"},"ReInHerit Digital Hub"))))},l=r(9649),o=r(6172),i=r(8263),s=r(8500),u=function(e){var t=e.children,r=e.pageTitle;return n.createElement(i.Z,null,n.createElement(s.Z,{pageTitle:r}),n.createElement(c,null),n.createElement(l.Z,null),n.createElement(a.Z,{className:"rein_main_container pt-sm-4 pt-md-0",style:{marginTop:"2vh"},fluid:!0},t),n.createElement(o.Z,null))}},513:function(e,t,r){"use strict";var n=r(5444),a=r(7294);t.Z=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"mb-3",style:{fontSize:"1.25em"}},a.createElement(n.rU,{to:"/",className:"text-decoration-none"},a.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Home")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e,t){return a.createElement("div",{key:"rein_bread_"+t,className:"d-inline"},a.createElement("span",null," / "),0===t?a.createElement("b",null,a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label)):a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label))}))),a.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},a.createElement("div",null,a.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&a.createElement("h2",{className:"h5"},e.subHeading),e.subText&&a.createElement("p",null,e.subText))))}},8315:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(8116),c=r(3176),l=r(8439),o=r(513);t.default=function(){return n.createElement(l.Z,{pageTitle:"Events | ReInHerit Digital Hub"},n.createElement(o.Z,{subHeading:"Cultural heritage events organised by ReInHerit",subText:"Here you'll find an overview of all cultural heritage related events provided via ReInHerit, like artistic performances.",breadCrumb:[{label:"Events",value:"/events"}]},"Events overview"),n.createElement(a.Z,null,n.createElement(c.Z,{title:"Performances",url:"/performances",body:"Performances developed and carried out in the course of the ReInHerit project."}),n.createElement(c.Z,{title:"Traveling exhibitions",url:"/exhibs/travel",body:"On site exhibitions and related material provided by ReInHerit."}),n.createElement(c.Z,{title:"Hackathon",url:"/hackathon",body:"Hackathon organized by ReInHerit"})))}}}]);
//# sourceMappingURL=component---src-pages-events-index-tsx-701792a9a68a26c50b50.js.map