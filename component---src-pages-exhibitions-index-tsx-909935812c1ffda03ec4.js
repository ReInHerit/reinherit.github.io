(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[43],{3176:function(e,t,r){"use strict";r.d(t,{Z:function(){return B}});var n=r(8014),a=r(7606),o=r(5444),i=r(7294),c=r(6156),l=r(1253),s=r(5900),u=r.n(s),d=r(9541),m=r(8870),b=r(5893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){return i.forwardRef((function(t,r){return(0,b.jsx)("div",p(p({},t),{},{ref:r,className:u()(t.className,e)}))}))};function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var y=i.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.variant,o=e.as,i=void 0===o?"img":o,s=(0,l.Z)(e,["bsPrefix","className","variant","as"]),m=(0,d.vE)(r,"card-img");return(0,b.jsx)(i,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:u()(a?"".concat(m,"-").concat(a):m,n)},s))}));y.displayName="CardImg";var v=y,O=r(8893);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=i.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.as,o=void 0===a?"div":a,c=(0,l.Z)(e,["bsPrefix","className","as"]),s=(0,d.vE)(r,"card-header"),m=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:s}}),[s]);return(0,b.jsx)(O.Z.Provider,{value:m,children:(0,b.jsx)(o,j(j({ref:t},c),{},{className:u()(n,s)}))})}));w.displayName="CardHeader";var x=w;function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=h("h5"),k=h("h6"),D=(0,m.Z)("card-body"),C=(0,m.Z)("card-title",{Component:N}),T=(0,m.Z)("card-subtitle",{Component:k}),H=(0,m.Z)("card-link",{Component:"a"}),S=(0,m.Z)("card-text",{Component:"p"}),I=(0,m.Z)("card-footer"),R=(0,m.Z)("card-img-overlay"),_=i.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.bg,o=e.text,i=e.border,c=e.body,s=e.children,m=e.as,f=void 0===m?"div":m,p=(0,l.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=(0,d.vE)(r,"card");return(0,b.jsx)(f,Z(Z({ref:t},p),{},{className:u()(n,h,a&&"bg-".concat(a),o&&"text-".concat(o),i&&"border-".concat(i)),children:c?(0,b.jsx)(D,{children:s}):s}))}));_.displayName="Card",_.defaultProps={body:!1};var F=Object.assign(_,{Img:v,Title:C,Subtitle:T,Body:D,Link:H,Text:S,Header:x,Footer:I,ImgOverlay:R}),z=r(7408),B=function(e){return i.createElement(z.Z,{key:e.uid&&e.uid},i.createElement(F,{className:"rounded rounded-5 reincard border-0 shadow",style:{fontSize:".95em"}},i.createElement(o.rU,{to:e.url,className:"text-decoration-none text-dark"},i.createElement(F.Body,{style:{minHeight:"200px"}},i.createElement(F.Title,{style:{fontSize:"1em"}},i.createElement(a.G,{style:{fill:"red"},icon:n.gMD,size:"1x",className:"me-md-1"})," ",e.title),i.createElement("hr",null),i.createElement(F.Text,null,e.body),e.children)),i.createElement(F.Footer,{className:"border-0"},i.createElement("small",{className:"text-muted d-inline"},e.footerContent&&e.footerContent,i.createElement("br",null)))))}},8116:function(e,t,r){"use strict";var n=r(7294),a=r(994);t.Z=function(e){return n.createElement(a.Z,{xs:1,md:3,xxl:3,className:"g-3"},e.children)}},3605:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){return n.createElement("img",{src:e.src,style:{maxWidth:100,maxHeight:100}})}},5472:function(e,t,r){"use strict";var n=r(7294),a=r(7073),o=r(6187),i=r(7749),c=r(6172),l=r(8263),s=r(9749);t.Z=function(e){var t=e.children;return n.createElement(l.Z,null,n.createElement(s.Z,null),n.createElement(a.Z,null),n.createElement(i.Z,null),n.createElement(o.Z,{className:"rein_main_container pt-sm-4 pt-md-4",style:{marginTop:"10vh"},fluid:!0},t),n.createElement(c.Z,null))}},513:function(e,t,r){"use strict";var n=r(5444),a=r(7294);t.Z=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"mb-2"},a.createElement(n.rU,{to:"/",className:"text-decoration-none"},a.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Digital-hub")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e){return a.createElement(a.Fragment,null," ","/"," ",a.createElement(n.rU,{className:"text-decoration-none",to:e.value},e.label))}))),a.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},a.createElement("div",null,a.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&a.createElement("h2",{className:"h5"},e.subHeading),e.subText&&a.createElement("p",null,e.subText))))}},20:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(7294),a=r(5444),o=r(6594),i=r(8116),c=r(3176),l=r(3605),s=function(){var e=(0,a.K2)(u);return n.createElement(n.Fragment,null,n.createElement("div",{className:"bg-white p-3 rounded border shadow"},n.createElement("p",{className:"mb-md-5"},"The ReInHerit proposed model will be based on the development of a digital cultural heritage ecosystem, where all the key stakeholders (museums, heritage sites, policy makers, professionals and communities) will have an open and collaborative space to experiment, share and innovate. This will be achieved through the creation of an innovative Digital Hub. Tools and resources (on training, tourism, conservation, preservation, knowledge creation, content use reuse, illicit trafficking of goods) necessary for sustainable management will be shared through the digital platform that will host the ecosystem. This ecosystem will also be the experiential open-ended space that will support and generate entrepreneurial initiatives, knowledge produced through co-creation, curation of digital content and visitor experiences. The proposed work plan includes a variety of key activities that will enable the collaboration of museums and cultural heritage sites, real-time.")),n.createElement("div",{className:"mt-md-2"},n.createElement(o.Z,{variant:"dark",className:"m-1 ps-5 pe-5"},"Topic"),n.createElement(o.Z,{variant:"dark",className:"m-1 ps-5 pe-5"},"Place"),n.createElement(o.Z,{variant:"dark",className:"m-1 ps-5 pe-5"},"Period")),n.createElement("br",null),n.createElement(i.Z,null,e.allMarkdownRemark.edges.map((function(e){return n.createElement(c.Z,{key:e.node.frontmatter.pageId,body:e.node.excerpt,title:e.node.frontmatter.title,url:"/exhibitions/"+e.node.frontmatter.pageId,uid:e.node.frontmatter.pageId},e.node.frontmatter.thumbnail&&n.createElement(l.Z,{src:e.node.frontmatter.thumbnail}))}))))},u="2413533317",d=r(5472),m=r(513),b=function(){return n.createElement(d.Z,null,n.createElement(m.Z,{subHeading:"Exhibitions and related material provided by ReInHerit",subText:"Here you'll find exhibitions, which will be developed and carried out in the ReInHerit project.",breadCrumb:[{label:"Exhibitions",value:"/exhibitions"}]},"Exhibitions"),n.createElement(s,null))}}}]);
//# sourceMappingURL=component---src-pages-exhibitions-index-tsx-909935812c1ffda03ec4.js.map