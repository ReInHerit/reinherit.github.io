(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[60],{3176:function(e,t,r){"use strict";r.d(t,{Z:function(){return F}});var n=r(8014),a=r(7606),o=r(5444),c=r(7294),l=r(6156),i=r(1253),s=r(5900),u=r.n(s),d=r(9541),m=r(8870),b=r(5893);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){return c.forwardRef((function(t,r){return(0,b.jsx)("div",f(f({},t),{},{ref:r,className:u()(t.className,e)}))}))};function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var g=c.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.variant,o=e.as,c=void 0===o?"img":o,s=(0,i.Z)(e,["bsPrefix","className","variant","as"]),m=(0,d.vE)(r,"card-img");return(0,b.jsx)(c,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:u()(a?"".concat(m,"-").concat(a):m,n)},s))}));g.displayName="CardImg";var h=g,v=r(8893);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=c.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.as,o=void 0===a?"div":a,l=(0,i.Z)(e,["bsPrefix","className","as"]),s=(0,d.vE)(r,"card-header"),m=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:s}}),[s]);return(0,b.jsx)(v.Z.Provider,{value:m,children:(0,b.jsx)(o,E(E({ref:t},l),{},{className:u()(n,s)}))})}));P.displayName="CardHeader";var w=P;function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=y("h5"),C=y("h6"),D=(0,m.Z)("card-body"),H=(0,m.Z)("card-title",{Component:N}),k=(0,m.Z)("card-subtitle",{Component:C}),R=(0,m.Z)("card-link",{Component:"a"}),S=(0,m.Z)("card-text",{Component:"p"}),T=(0,m.Z)("card-footer"),I=(0,m.Z)("card-img-overlay"),_=c.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.bg,o=e.text,c=e.border,l=e.body,s=e.children,m=e.as,p=void 0===m?"div":m,f=(0,i.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=(0,d.vE)(r,"card");return(0,b.jsx)(p,x(x({ref:t},f),{},{className:u()(n,y,a&&"bg-".concat(a),o&&"text-".concat(o),c&&"border-".concat(c)),children:l?(0,b.jsx)(D,{children:s}):s}))}));_.displayName="Card",_.defaultProps={body:!1};var B=Object.assign(_,{Img:h,Title:H,Subtitle:k,Body:D,Link:R,Text:S,Header:w,Footer:T,ImgOverlay:I}),z=r(7408),F=function(e){return c.createElement(z.Z,{key:e.uid&&e.uid},c.createElement(B,{className:"rounded rounded-5 reincard border-0 shadow",style:{fontSize:".95em"}},c.createElement(o.rU,{to:e.url,className:"text-decoration-none text-dark"},c.createElement(B.Body,{style:{minHeight:"200px"}},c.createElement(B.Title,{style:{fontSize:"1em"}},c.createElement(a.G,{style:{fill:"red"},icon:n.gMD,size:"1x",className:"me-md-1"})," ",e.title),c.createElement("hr",null),c.createElement(B.Text,null,e.body),e.children)),c.createElement(B.Footer,{className:"border-0"},c.createElement("small",{className:"text-muted d-inline"},e.footerContent&&e.footerContent,c.createElement("br",null)))))}},8116:function(e,t,r){"use strict";var n=r(7294),a=r(994);t.Z=function(e){return n.createElement(a.Z,{xs:1,md:3,xxl:3,className:"g-3"},e.children)}},5472:function(e,t,r){"use strict";var n=r(7294),a=r(7073),o=r(6187),c=r(7749),l=r(6172),i=r(8263),s=r(9749);t.Z=function(e){var t=e.children;return n.createElement(i.Z,null,n.createElement(s.Z,null),n.createElement(a.Z,null),n.createElement(c.Z,null),n.createElement(o.Z,{className:"rein_main_container pt-sm-4 pt-md-4",style:{marginTop:"10vh"},fluid:!0},t),n.createElement(l.Z,null))}},513:function(e,t,r){"use strict";var n=r(5444),a=r(7294);t.Z=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"mb-2"},a.createElement(n.rU,{to:"/",className:"text-decoration-none"},a.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Digital-hub")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e){return a.createElement(a.Fragment,null," ","/"," ",a.createElement(n.rU,{className:"text-decoration-none",to:e.value},e.label))}))),a.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},a.createElement("div",null,a.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&a.createElement("h2",{className:"h5"},e.subHeading),e.subText&&a.createElement("p",null,e.subText))))}},321:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(8116),o=r(3176),c=r(5472),l=r(513);t.default=function(){return n.createElement(c.Z,null,n.createElement(l.Z,{subHeading:"Useful tools, educational material, guidelines, etc. for cultural heritage professionals.",subText:"Here you'll find an overview of all resources developed and provided by ReInHerit. Browse through the items and learn how to implement them in your institution.",breadCrumb:[{label:"Resources",value:"/resources"}]},"Resources"),n.createElement(a.Z,null,n.createElement(o.Z,{title:"Tool apps",url:"/tools/apps",body:"Applications that are either developed within the ReInHerit project or play an important role for CH management or preservation."}),n.createElement(o.Z,{title:"Tool components",url:"/tools/components",body:"Necessary building blocks for the applications provided by ReInHerit."}),n.createElement(o.Z,{title:"Webinars",body:"Training material either on the tools developed in the ReInHerit-project or generally on digitization in the CH sector, CH management and preservation. ",url:"/webinars"}),n.createElement(o.Z,{title:"Game",body:"Video game developed within the ReInHerit project.",url:"/tools"}),n.createElement(o.Z,{title:"Performances",body:"Performances developed and carried out in the course of the ReInHerit project.",url:"/tools"}),n.createElement(o.Z,{title:"Best practices",body:"Guidelines, recommendations and manuals related to digital cultural heritage management.",url:"/tools"})))}}}]);
//# sourceMappingURL=component---src-pages-resources-tsx-ac0d12c9694dd7d0ebc8.js.map