(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[812],{3176:function(e,t,r){"use strict";r.d(t,{Z:function(){return U}});var n=r(8014),a=r(7606),i=r(5444),c=r(7294),l=r(6156),o=r(1253),s=r(5900),m=r.n(s),u=r(9541),b=r(8870),d=r(5893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){return c.forwardRef((function(t,r){return(0,d.jsx)("div",p(p({},t),{},{ref:r,className:m()(t.className,e)}))}))};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var g=c.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.variant,i=e.as,c=void 0===i?"img":i,s=(0,o.Z)(e,["bsPrefix","className","variant","as"]),b=(0,u.vE)(r,"card-img");return(0,d.jsx)(c,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:m()(a?"".concat(b,"-").concat(a):b,n)},s))}));g.displayName="CardImg";var E=g,v=r(8893);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=c.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.as,i=void 0===a?"div":a,l=(0,o.Z)(e,["bsPrefix","className","as"]),s=(0,u.vE)(r,"card-header"),b=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:s}}),[s]);return(0,d.jsx)(v.Z.Provider,{value:b,children:(0,d.jsx)(i,x(x({ref:t},l),{},{className:m()(n,s)}))})}));w.displayName="CardHeader";var j=w;function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=h("h5"),k=h("h6"),H=(0,b.Z)("card-body"),S=(0,b.Z)("card-title",{Component:Z}),D=(0,b.Z)("card-subtitle",{Component:k}),z=(0,b.Z)("card-link",{Component:"a"}),_=(0,b.Z)("card-text",{Component:"p"}),R=(0,b.Z)("card-footer"),C=(0,b.Z)("card-img-overlay"),I=c.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.bg,i=e.text,c=e.border,l=e.body,s=e.children,b=e.as,f=void 0===b?"div":b,p=(0,o.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=(0,u.vE)(r,"card");return(0,d.jsx)(f,P(P({ref:t},p),{},{className:m()(n,h,a&&"bg-".concat(a),i&&"text-".concat(i),c&&"border-".concat(c)),children:l?(0,d.jsx)(H,{children:s}):s}))}));I.displayName="Card",I.defaultProps={body:!1};var T=Object.assign(I,{Img:E,Title:S,Subtitle:D,Body:H,Link:z,Text:_,Header:j,Footer:R,ImgOverlay:C}),G=r(7408),U=function(e){return c.createElement(G.Z,{key:e.uid&&e.uid},c.createElement(T,{className:"rounded rounded-5 reincard border-0 shadow",style:{fontSize:".95em"}},c.createElement(i.rU,{to:e.url,className:"text-decoration-none text-dark"},c.createElement(T.Body,{style:{minHeight:"200px"}},c.createElement(T.Title,{style:{fontSize:"1em"}},c.createElement(a.G,{style:{fill:"red"},icon:n.gMD,size:"1x",className:"me-md-1"})," ",e.title),c.createElement("hr",null),c.createElement(T.Text,null,e.body),e.children)),c.createElement(T.Footer,{className:"border-0"},c.createElement("small",{className:"text-muted d-inline"},e.footerContent&&e.footerContent,c.createElement("br",null)))))}},8116:function(e,t,r){"use strict";var n=r(7294),a=r(994);t.Z=function(e){return n.createElement(a.Z,{xs:1,md:3,xxl:3,className:"g-3"},e.children)}},8439:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(7294),a=r(8014),i=r(7606),c=r(6187),l=r(6594),o=r(5444),s=r(7190),m=function(){return n.createElement("div",{className:"pt-3 mt-4 bg-white text-center"},n.createElement("div",{className:"pb-3"},n.createElement(c.Z,{className:"pt-3"},n.createElement("img",{alt:"Reinherit header image",src:"images/make_it_your_own(238x171).webp",height:171,width:238,style:{minHeight:171}}),n.createElement("h2",{style:{marginTop:"-2vh",color:"grey"},className:"h4"},"ReInHerit Digital Hub")),n.createElement(o.rU,{to:"/resources"},n.createElement(l.Z,{variant:"outline-light border text-center ps-4 pe-4 m-1"},n.createElement(i.G,{icon:a.CgH,size:"1x",style:{fontSize:"1.25em"}}),n.createElement("small",{className:"text-muted"}," Resources"))),n.createElement(o.rU,{to:"/networkinghub"},n.createElement(l.Z,{variant:"outline-light border text-center ps-4 pe-4 m-1"},n.createElement(i.G,{icon:a.Z6I,size:"1x",style:{fontSize:"1.25em"}}),n.createElement("small",{className:"text-muted"}," Networking"))),n.createElement(o.rU,{to:"/visitorhub"},n.createElement(l.Z,{variant:"outline-light border text-center ps-4 pe-4 m-1"},n.createElement(i.G,{icon:a.cnt,size:"1x",style:{fontSize:"1.25em"}}),n.createElement("small",{className:"text-muted"}," Content"))),n.createElement("span",{className:"border btn text-center ps-4 pe-4 m-1 rounded"},n.createElement("a",{className:"text-decoration-none",href:"https://www.facebook.com/ReInHerit/",target:"_blank","aria-label":"ReInHerit on facebook"},n.createElement(i.G,{className:"ms-1",icon:s.neY,style:{fontSize:"1.25em"}})),n.createElement("a",{className:"text-decoration-none",href:"https://linkedin.com/company/reinherit-h2020/",target:"_blank","aria-label":"ReInHerit on linkedin"},n.createElement(i.G,{className:"ms-1",icon:s.D9H,style:{fontSize:"1.25em"}})," "),n.createElement("a",{className:"text-decoration-none",href:"https://www.tiktok.com/@reinherit_",target:"_blank","aria-label":"ReInHerit on tiktok"},n.createElement(i.G,{className:"ms-1",icon:s.ABo,style:{fontSize:"1.25em"}})," "),n.createElement("a",{className:"text-decoration-none",href:"https://mobile.twitter.com/reinherit_",target:"_blank","aria-label":"ReInHerit on twitter"},n.createElement(i.G,{className:"ms-1",icon:s.mdU,style:{fontSize:"1.25em"}})," "),n.createElement("a",{className:"text-decoration-none",href:"https://www.instagram.com/reinherit_/",target:"_blank","aria-label":"ReInHerit on instagram"},n.createElement(i.G,{className:"ms-1",icon:s.Zzi,style:{fontSize:"1.25em"}})," ")),n.createElement(o.rU,{to:"/search","aria-label":"Fulltextsearch on the hub"},n.createElement(l.Z,{variant:"outline-light border text-center ps-3 pe-3 m-1"},n.createElement(i.G,{icon:a.wn1,size:"1x",style:{fontSize:"1.25em"}}))),n.createElement(o.rU,{to:"/cms","aria-label":"ReInHerit on cms"},n.createElement(l.Z,{variant:"outline-light border text-center ps-3 pe-3 m-1"},n.createElement(i.G,{icon:a.b7W,size:"1x",style:{fontSize:"1.25em"}})))))},u=r(7749),b=r(6172),d=r(8263),f=r(8500),p=function(e){var t=e.children,r=e.pageTitle;return n.createElement(d.Z,null,n.createElement(f.Z,{pageTitle:r}),n.createElement(m,null),n.createElement(u.Z,null),n.createElement(c.Z,{className:"rein_main_container pt-sm-4 pt-md-0",style:{marginTop:"2vh"},fluid:!0},t),n.createElement(b.Z,null))}},513:function(e,t,r){"use strict";var n=r(5444),a=r(7294);t.Z=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"mb-3",style:{fontSize:"1.25em"}},a.createElement(n.rU,{to:"/",className:"text-decoration-none"},a.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Home")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e,t){return a.createElement(a.Fragment,null,a.createElement("span",null," / "),0===t?a.createElement("b",null,a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label)):a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label))}))),a.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},a.createElement("div",null,a.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&a.createElement("h2",{className:"h5"},e.subHeading),e.subText&&a.createElement("p",null,e.subText))))}},8782:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(8116),i=r(3176),c=r(8439),l=r(513);t.default=function(){return n.createElement(c.Z,{pageTitle:"Hub content | ReInHerit Digital Hub"},n.createElement(l.Z,{subHeading:"Structured overview of all material on the digital-hub",subText:"Here you'll find  digital exhibitions, videos and images from the project immersive performances, and apps that let you play and interact with cultural heritage in innovative ways.",breadCrumb:[{label:"Content overview",value:"/visitorhub"}]},"Hub content"),n.createElement(a.Z,null,n.createElement(i.Z,{body:"Free artistic designs created during the ReInHerit project. All are free to download and available for the public.",title:"eShop",url:"/eshop"}),n.createElement(i.Z,{body:"Digital-first exhibitions and related material provided by ReInHerit.",title:"Digital exhibition",url:"/exhibitions"}),n.createElement(i.Z,{body:"Performances developed and carried out in the course of the ReInHerit project.",title:"Performances",url:"/performances"}),n.createElement(i.Z,{body:"On site exhibitions and related material provided by ReInHerit.",title:"Travelling exhibitions",url:"/exhibs/travel"}),n.createElement(i.Z,{body:"Hackathon organized by ReInHerit.",title:"Hackathon",url:"/hackathon"})))}}}]);
//# sourceMappingURL=component---src-pages-visitorhub-tsx-2b917e4c0ca08365c139.js.map