(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[6358],{16002:function(e,t,r){"use strict";var n=r(96156),a=r(81253),l=r(75900),c=r.n(l),o=r(67294),i=(r(42473),r(80124)),s=r(69122),m=r(99541),u=r(34550),p=r(85893);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=o.forwardRef((function(e,t){var r,n=(0,i.Ch)(e,{activeKey:"onSelect"}),l=n.className,o=n.bsPrefix,u=n.variant,b=n.horizontal,f=n.as,h=void 0===f?"div":f,E=(0,a.Z)(n,["className","bsPrefix","variant","horizontal","as"]),g=(0,m.vE)(o,"list-group");return b&&(r=!0===b?"horizontal":"horizontal-".concat(b)),(0,p.jsx)(s.Z,d(d({ref:t},E),{},{as:h,className:c()(l,g,u&&"".concat(g,"-").concat(u),r&&"".concat(g,"-").concat(r))}))}));f.displayName="ListGroup",t.Z=Object.assign(f,{Item:u.Z})},34550:function(e,t,r){"use strict";var n=r(96156),a=r(28481),l=r(81253),c=r(75900),o=r.n(c),i=r(67294),s=r(85655),m=r(93904),u=r(59148),p=r(99541),b=r(85893);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=i.forwardRef((function(e,t){var r=e.bsPrefix,n=e.active,c=e.disabled,i=e.eventKey,d=e.className,h=e.variant,E=e.action,g=e.as,v=(0,l.Z)(e,["bsPrefix","active","disabled","eventKey","className","variant","action","as"]);r=(0,p.vE)(r,"list-group-item");var y=(0,m.v)(f({key:(0,u.h)(i,v.href),active:n},v)),Z=(0,a.Z)(y,2),O=Z[0],x=Z[1],C=(0,s.Z)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();O.onClick(e)}));c&&void 0===v.tabIndex&&(v.tabIndex=-1,v["aria-disabled"]=!0);var w=g||(E?v.href?"a":"button":"div");return(0,b.jsx)(w,f(f(f({ref:t},v),O),{},{onClick:C,className:o()(d,r,x.isActive&&"active",c&&"disabled",h&&"".concat(r,"-").concat(h),E&&"".concat(r,"-action"))}))}));h.displayName="ListGroupItem",t.Z=h},32315:function(e,t,r){"use strict";var n=r(67294),a=r(20994),l=r(7408),c=r(33639);t.Z=function(e){return n.createElement(a.Z,null,n.createElement(l.Z,{xl:2},e.left),n.createElement(l.Z,{xl:8},n.createElement(c.Z,null,e.children)),n.createElement(l.Z,{xl:2},e.right))}},58439:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(67294),a=r(33639),l=function(){return n.createElement("div",{className:"pt-3 mt-4 bg-white text-center"},n.createElement("div",{className:"pb-3"},n.createElement(a.Z,{className:"pt-3"},n.createElement("img",{alt:"Reinherit header image",src:"images/Slogan-cut.webp",style:{marginTop:"3vh"},height:80}),n.createElement("h2",{style:{marginTop:"2vh",color:"grey"},className:"h3"},"ReInHerit Digital Hub"))))},c=r(55418),o=r(76172),i=r(58263),s=r(8500),m=function(e){var t=e.children,r=e.pageTitle;return n.createElement(i.Z,null,n.createElement(s.Z,{pageTitle:r}),n.createElement(l,null),n.createElement(c.Z,null),n.createElement(a.Z,{className:"rein_main_container pt-sm-4 pt-md-0",style:{marginTop:"2vh"},fluid:!0},t),n.createElement(o.Z,null))}},513:function(e,t,r){"use strict";var n=r(25444),a=r(67294);t.Z=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"mb-3",style:{fontSize:"1.25em"}},a.createElement(n.rU,{to:"/",className:"text-decoration-none"},a.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Home")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e,t){return a.createElement("div",{key:"rein_bread_"+t,className:"d-inline"},a.createElement("span",null," / "),0===t?a.createElement("b",null,a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label)):a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label))}))),a.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},a.createElement("div",null,a.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&a.createElement("h2",{className:"h5"},e.subHeading),e.subText&&a.createElement("p",null,e.subText))))}},35599:function(e,t,r){"use strict";var n=r(25444),a=r(67294),l=r(16002),c=r(34550);t.Z=function(e){return a.createElement(l.Z,{className:e.sticky&&"sticky-top",variant:"flush"},a.createElement(c.Z,null,a.createElement(n.rU,{to:"/secondperfpublic/0Introduction"},"Introduction")),a.createElement(c.Z,null,a.createElement(n.rU,{to:"/secondperfpublic/1TurkishBrazier"},"Turkish Brazier")),a.createElement(c.Z,null,a.createElement(n.rU,{to:"/secondperfpublic/2VaseKannourka"},'Vase "Kannourka"')),a.createElement(c.Z,null,a.createElement(n.rU,{to:"/secondperfpublic/3WeavingDoulappi"},"Weaving Doulappi")),a.createElement(c.Z,null,a.createElement(n.rU,{to:"/secondperfpublic/4WoodenChest"},"Wooden Chest")),a.createElement(c.Z,null,a.createElement(n.rU,{to:"/secondperfpublic/5AmboustaCase"},'"Ambousta" Case')),a.createElement(c.Z,null,a.createElement(n.rU,{to:"/secondperfpublic/6CarvedChair"},"Carved Chair")),a.createElement(c.Z,null,a.createElement(n.rU,{to:"/secondperfpublic/7CopperBox"},"Copper Box")),a.createElement(c.Z,null,a.createElement(n.rU,{to:"/secondperfpublic/8CopperTalisman"},"Copper Talisman")),a.createElement(c.Z,null,a.createElement(n.rU,{to:"/secondperfpublic/9GildedBuckle"},"Gilded Buckle")),a.createElement(c.Z,null,a.createElement(n.rU,{to:"/secondperfpublic/10Hanapi"},"Hanapi")),a.createElement(c.Z,null,a.createElement(n.rU,{to:"/secondperfpublic/11ClayVase"},"Clay Vase")),a.createElement(c.Z,null,a.createElement(n.rU,{to:"/secondperfpublic/12ThroneChair"},"Throne Chair")))}},83032:function(e,t,r){"use strict";r.r(t);var n=r(67294),a=r(32315),l=r(58439),c=r(513),o=r(35599),i=r(33639);t.default=function(){return n.createElement(l.Z,{pageTitle:"Performance at the Bank of Cyprus Cultural Foundation"},n.createElement(c.Z,{subHeading:"The second ReInHerit performance"},"Copper alloy box, rectangular with embossed and carved patterns"),n.createElement(i.Z,{fluid:!0,className:"bg-white p-md-4 p-sm-3 shadow border-0"},n.createElement(a.Z,{left:n.createElement(o.Z,null)},n.createElement("p",null,"This box is made of copper alloy and was probably used as a gunpowder case in the 19th century. It is decorated with incised geometric and floral designs on all sides and features a custom cap on the top side. On the underside it has three fixed rings, for attaching other hanging elements."),n.createElement("div",{className:"mb-5",style:{maxWidth:"1300px",margin:"auto"}},n.createElement("div",{className:"mt-5",style:{textAlign:"center",maxWidth:"100%",width:"100%",height:"800px"}},n.createElement("iframe",{title:"Copper box with floral designs",src:"https://sketchfab.com/models/50d0f19a43284848bffb21b8cdb302b9/embed",width:"100%",height:"100%"}),n.createElement("p",{style:{fontSize:"13px",fontWeight:"normal",margin:"5px",color:"#4A4A4A"}},n.createElement("a",{href:"https://sketchfab.com/3d-models/copper-box-with-floral-designs-50d0f19a43284848bffb21b8cdb302b9?utm_medium=embed&utm_campaign=share-popup&utm_content=50d0f19a43284848bffb21b8cdb302b9",target:"_blank",rel:"nofollow",style:{fontWeight:"bold",color:"#1CAAD9"}},"Copper box with floral designs")," by ",n.createElement("a",{href:"https://sketchfab.com/itica_mrg?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b",target:"_blank",rel:"nofollow",style:{fontWeight:"bold",color:"#1CAAD9"}}," ITICA MRG @ CYENS - Centre of Excellence ")," on ",n.createElement("a",{href:"https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b",target:"_blank",rel:"nofollow",style:{fontWeight:"bold",color:"#1CAAD9"}},"Sketchfab")))))))}}}]);
//# sourceMappingURL=component---src-pages-secondperfpublic-7-copper-box-tsx-d5791e781f2d9abcd88c.js.map