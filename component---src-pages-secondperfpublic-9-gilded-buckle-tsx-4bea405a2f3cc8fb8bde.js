(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[7397],{16002:function(e,t,r){"use strict";var a=r(96156),n=r(81253),l=r(75900),c=r.n(l),o=r(67294),i=(r(42473),r(80124)),s=r(75378),m=r(99541),u=r(34550),p=r(85893);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=o.forwardRef((function(e,t){var r,a=(0,i.Ch)(e,{activeKey:"onSelect"}),l=a.className,o=a.bsPrefix,u=a.variant,b=a.horizontal,f=a.as,h=void 0===f?"div":f,E=(0,n.Z)(a,["className","bsPrefix","variant","horizontal","as"]),g=(0,m.vE)(o,"list-group");return b&&(r=!0===b?"horizontal":"horizontal-".concat(b)),(0,p.jsx)(s.Z,d(d({ref:t},E),{},{as:h,className:c()(l,g,u&&"".concat(g,"-").concat(u),r&&"".concat(g,"-").concat(r))}))}));f.displayName="ListGroup",t.Z=Object.assign(f,{Item:u.Z})},34550:function(e,t,r){"use strict";var a=r(96156),n=r(28481),l=r(81253),c=r(75900),o=r.n(c),i=r(67294),s=r(85655),m=r(93904),u=r(59148),p=r(99541),b=r(85893);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=i.forwardRef((function(e,t){var r=e.bsPrefix,a=e.active,c=e.disabled,i=e.eventKey,d=e.className,h=e.variant,E=e.action,g=e.as,v=(0,l.Z)(e,["bsPrefix","active","disabled","eventKey","className","variant","action","as"]);r=(0,p.vE)(r,"list-group-item");var y=(0,m.v)(f({key:(0,u.h)(i,v.href),active:a},v)),Z=(0,n.Z)(y,2),k=Z[0],O=Z[1],w=(0,s.Z)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();k.onClick(e)}));c&&void 0===v.tabIndex&&(v.tabIndex=-1,v["aria-disabled"]=!0);var C=g||(E?v.href?"a":"button":"div");return(0,b.jsx)(C,f(f(f({ref:t},v),k),{},{onClick:w,className:o()(d,r,O.isActive&&"active",c&&"disabled",h&&"".concat(r,"-").concat(h),E&&"".concat(r,"-action"))}))}));h.displayName="ListGroupItem",t.Z=h},32315:function(e,t,r){"use strict";var a=r(67294),n=r(20994),l=r(7408),c=r(33639);t.Z=function(e){return a.createElement(n.Z,null,a.createElement(l.Z,{xl:2},e.left),a.createElement(l.Z,{xl:8},a.createElement(c.Z,null,e.children)),a.createElement(l.Z,{xl:2},e.right))}},58439:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var a=r(67294),n=r(33639),l=function(){return a.createElement("div",{className:"pt-3 mt-4 bg-white text-center"},a.createElement("div",{className:"pb-3"},a.createElement(n.Z,{className:"pt-3"},a.createElement("img",{alt:"Reinherit header image",src:"images/Slogan-cut.webp",style:{marginTop:"3vh"},height:80}),a.createElement("h2",{style:{marginTop:"2vh",color:"grey"},className:"h3"},"ReInHerit Digital Hub"))))},c=r(55418),o=r(76172),i=r(58263),s=r(8500),m=function(e){var t=e.children,r=e.pageTitle;return a.createElement(i.Z,null,a.createElement(s.Z,{pageTitle:r}),a.createElement(l,null),a.createElement(c.Z,null),a.createElement(n.Z,{className:"rein_main_container pt-sm-4 pt-md-0",style:{marginTop:"2vh"},fluid:!0},t),a.createElement(o.Z,null))}},513:function(e,t,r){"use strict";var a=r(25444),n=r(67294);t.Z=function(e){return n.createElement(n.Fragment,null,n.createElement("div",{className:"mb-3",style:{fontSize:"1.25em"}},n.createElement(a.rU,{to:"/",className:"text-decoration-none"},n.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Home")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e,t){return n.createElement("div",{key:"rein_bread_"+t,className:"d-inline"},n.createElement("span",null," / "),0===t?n.createElement("b",null,n.createElement(a.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label)):n.createElement(a.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label))}))),n.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},n.createElement("div",null,n.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&n.createElement("h2",{className:"h5"},e.subHeading),e.subText&&n.createElement("p",null,e.subText))))}},35599:function(e,t,r){"use strict";var a=r(25444),n=r(67294),l=r(16002),c=r(34550);t.Z=function(e){return n.createElement(l.Z,{className:e.sticky&&"sticky-top",variant:"flush"},n.createElement(c.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/0Introduction"},"Introduction")),n.createElement(c.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/1TurkishBrazier"},"Turkish Brazier")),n.createElement(c.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/2VaseKannourka"},'Vase "Kannourka"')),n.createElement(c.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/3WeavingDoulappi"},"Weaving Doulappi")),n.createElement(c.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/4WoodenChest"},"Wooden Chest")),n.createElement(c.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/5AmboustaCase"},'"Ambousta" Case')),n.createElement(c.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/6CarvedChair"},"Carved Chair")),n.createElement(c.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/7CopperBox"},"Copper Box")),n.createElement(c.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/8CopperTalisman"},"Copper Talisman")),n.createElement(c.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/9GildedBuckle"},"Gilded Buckle")),n.createElement(c.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/10Hanapi"},"Hanapi")),n.createElement(c.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/11ClayVase"},"Clay Vase")),n.createElement(c.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/12ThroneChair"},"Throne Chair")),n.createElement(c.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/13questionnaires"},"Survey")))}},92026:function(e,t,r){"use strict";r.r(t);var a=r(67294),n=r(32315),l=r(58439),c=r(513),o=r(35599),i=r(33639);t.default=function(){return a.createElement(l.Z,{pageTitle:"Performance at the Bank of Cyprus Cultural Foundation"},a.createElement(c.Z,{subHeading:"The second ReInHerit performance"},"Gilded buckle"),a.createElement(i.Z,{fluid:!0,className:"bg-white p-md-4 p-sm-3 shadow border-0"},a.createElement(n.Z,{left:a.createElement(o.Z,null)},a.createElement("p",null,'Gilded buckle (or "poukla" as it is called in Cypriot sources), consisting of three pieces of silver leaf. This particular piece of jewellery was used to close the belt around the waist. It is decorated with large rosettes and other smaller floral designs such as leaves, flowers and stems. This is the work of a local silversmith, and behind each piece there are plates for fastening to the belt.'),a.createElement("div",{className:"mb-5",style:{maxWidth:"1300px",margin:"auto"}},a.createElement("div",{className:"mt-5",style:{textAlign:"center",maxWidth:"100%",width:"100%",height:"800px"}},a.createElement("iframe",{title:"Gilded buckle",src:"https://sketchfab.com/models/5979bc69c117494aab69d2743b9066b4/embed",width:"100%",height:"100%"}),a.createElement("p",{style:{fontSize:"13px",fontWeight:"normal",margin:"5px",color:"#4A4A4A"}},a.createElement("a",{href:"https://sketchfab.com/3d-models/gilded-buckle-5979bc69c117494aab69d2743b9066b4?utm_medium=embed&utm_campaign=share-popup&utm_content=5979bc69c117494aab69d2743b9066b4",target:"_blank",rel:"nofollow",style:{fontWeight:"bold",color:"#1CAAD9"}},"Gilded buckle")," by ",a.createElement("a",{href:"https://sketchfab.com/itica_mrg?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b",target:"_blank",rel:"nofollow",style:{fontWeight:"bold",color:"#1CAAD9"}}," ITICA MRG @ CYENS - Centre of Excellence ")," on ",a.createElement("a",{href:"https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b",target:"_blank",rel:"nofollow",style:{fontWeight:"bold",color:"#1CAAD9"}},"Sketchfab")))))))}}}]);
//# sourceMappingURL=component---src-pages-secondperfpublic-9-gilded-buckle-tsx-4bea405a2f3cc8fb8bde.js.map