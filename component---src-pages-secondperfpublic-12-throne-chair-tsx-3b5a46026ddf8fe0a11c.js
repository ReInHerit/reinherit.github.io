(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[8382],{16002:function(e,t,r){"use strict";var a=r(96156),n=r(81253),c=r(75900),l=r.n(c),o=r(67294),i=(r(42473),r(80124)),s=r(75378),m=r(99541),u=r(34550),d=r(85893);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=o.forwardRef((function(e,t){var r,a=(0,i.Ch)(e,{activeKey:"onSelect"}),c=a.className,o=a.bsPrefix,u=a.variant,p=a.horizontal,h=a.as,b=void 0===h?"div":h,E=(0,n.Z)(a,["className","bsPrefix","variant","horizontal","as"]),g=(0,m.vE)(o,"list-group");return p&&(r=!0===p?"horizontal":"horizontal-".concat(p)),(0,d.jsx)(s.Z,f(f({ref:t},E),{},{as:b,className:l()(c,g,u&&"".concat(g,"-").concat(u),r&&"".concat(g,"-").concat(r))}))}));h.displayName="ListGroup",t.Z=Object.assign(h,{Item:u.Z})},34550:function(e,t,r){"use strict";var a=r(96156),n=r(28481),c=r(81253),l=r(75900),o=r.n(l),i=r(67294),s=r(85655),m=r(93904),u=r(59148),d=r(99541),p=r(85893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=i.forwardRef((function(e,t){var r=e.bsPrefix,a=e.active,l=e.disabled,i=e.eventKey,f=e.className,b=e.variant,E=e.action,g=e.as,v=(0,c.Z)(e,["bsPrefix","active","disabled","eventKey","className","variant","action","as"]);r=(0,d.vE)(r,"list-group-item");var y=(0,m.v)(h({key:(0,u.h)(i,v.href),active:a},v)),w=(0,n.Z)(y,2),Z=w[0],O=w[1],k=(0,s.Z)((function(e){if(l)return e.preventDefault(),void e.stopPropagation();Z.onClick(e)}));l&&void 0===v.tabIndex&&(v.tabIndex=-1,v["aria-disabled"]=!0);var C=g||(E?v.href?"a":"button":"div");return(0,p.jsx)(C,h(h(h({ref:t},v),Z),{},{onClick:k,className:o()(f,r,O.isActive&&"active",l&&"disabled",b&&"".concat(r,"-").concat(b),E&&"".concat(r,"-action"))}))}));b.displayName="ListGroupItem",t.Z=b},32315:function(e,t,r){"use strict";var a=r(67294),n=r(20994),c=r(7408),l=r(33639);t.Z=function(e){return a.createElement(n.Z,null,a.createElement(c.Z,{xl:2},e.left),a.createElement(c.Z,{xl:8},a.createElement(l.Z,null,e.children)),a.createElement(c.Z,{xl:2},e.right))}},58439:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var a=r(67294),n=r(33639),c=function(){return a.createElement("div",{className:"pt-3 mt-4 bg-white text-center"},a.createElement("div",{className:"pb-3"},a.createElement(n.Z,{className:"pt-3"},a.createElement("img",{alt:"Reinherit header image",src:"images/Slogan-cut.webp",style:{marginTop:"3vh"},height:80}),a.createElement("h2",{style:{marginTop:"2vh",color:"grey"},className:"h3"},"ReInHerit Digital Hub"))))},l=r(55418),o=r(76172),i=r(58263),s=r(8500),m=function(e){var t=e.children,r=e.pageTitle;return a.createElement(i.Z,null,a.createElement(s.Z,{pageTitle:r}),a.createElement(c,null),a.createElement(l.Z,null),a.createElement(n.Z,{className:"rein_main_container pt-sm-4 pt-md-0",style:{marginTop:"2vh"},fluid:!0},t),a.createElement(o.Z,null))}},513:function(e,t,r){"use strict";var a=r(25444),n=r(67294);t.Z=function(e){return n.createElement(n.Fragment,null,n.createElement("div",{className:"mb-3",style:{fontSize:"1.25em"}},n.createElement(a.rU,{to:"/",className:"text-decoration-none"},n.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Home")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e,t){return n.createElement("div",{key:"rein_bread_"+t,className:"d-inline"},n.createElement("span",null," / "),0===t?n.createElement("b",null,n.createElement(a.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label)):n.createElement(a.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label))}))),n.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},n.createElement("div",null,n.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&n.createElement("h2",{className:"h5"},e.subHeading),e.subText&&n.createElement("p",null,e.subText))))}},35599:function(e,t,r){"use strict";var a=r(25444),n=r(67294),c=r(16002),l=r(34550);t.Z=function(e){return n.createElement(c.Z,{className:e.sticky&&"sticky-top",variant:"flush"},n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/0Introduction"},"Introduction")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/1TurkishBrazier"},"Turkish Brazier")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/2VaseKannourka"},'Vase "Kannourka"')),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/3WeavingDoulappi"},"Weaving Doulappi")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/4WoodenChest"},"Wooden Chest")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/5AmboustaCase"},'"Ambousta" Case')),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/6CarvedChair"},"Carved Chair")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/7CopperBox"},"Copper Box")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/8CopperTalisman"},"Copper Talisman")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/9GildedBuckle"},"Gilded Buckle")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/10Hanapi"},"Hanapi")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/11ClayVase"},"Clay Vase")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/12ThroneChair"},"Throne Chair")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/13questionnaires"},"Survey")))}},79675:function(e,t,r){"use strict";r.r(t);var a=r(67294),n=r(32315),c=r(58439),l=r(513),o=r(35599),i=r(33639);t.default=function(){return a.createElement(c.Z,{pageTitle:"Performance at the Bank of Cyprus Cultural Foundation"},a.createElement(l.Z,{subHeading:"The second ReInHerit performance"},"Throne chair"),a.createElement(i.Z,{fluid:!0,className:"bg-white p-md-4 p-sm-3 shadow border-0"},a.createElement(n.Z,{left:a.createElement(o.Z,null)},a.createElement("p",null,"This type of folding carved wooden chairs has a long history, which dates back to ancient Egypt, where they were used as folding stools. This particular form was reused as a folding chair for everyday use in medieval Italy and spread throughout Europe during the Renaissance. This particular type of chair, which is an attempt to revive the ancient Egyptian type during the Renaissance period, is known by the name Savonarola, which derives from a similar type of chair found in the monastery of San Marco in Florence, which was used by Italian priest Girolamo Savonarola in the 15th century. Instead of four legs, this type of chair consists of a series of narrow wooden curves joined in the centre. In this particular chair, the back is decorated with two elaborately carved wood peacocks. Because of the elaborate decoration, these chairs were also called throne chairs. In most cases, they were designed to fold up for easy transport when additional chairs were needed for a special event."),a.createElement("div",{className:"mb-5",style:{maxWidth:"1300px",margin:"auto"}},a.createElement("div",{className:"mt-5",style:{textAlign:"center",maxWidth:"100%",width:"100%",height:"800px"}},a.createElement("iframe",{title:"Traditional Throne",src:"https://sketchfab.com/models/b03fcfc4fe234ebda9949c292adc22db/embed",width:"100%",height:"100%"}),a.createElement("p",{style:{fontSize:"13px",fontWeight:"normal",margin:"5px",color:"#4A4A4A"}},a.createElement("a",{href:"https://sketchfab.com/3d-models/traditional-throne-b03fcfc4fe234ebda9949c292adc22db?utm_medium=embed&utm_campaign=share-popup&utm_content=b03fcfc4fe234ebda9949c292adc22db",target:"_blank",rel:"nofollow",style:{fontWeight:"bold",color:"#1CAAD9"}},"Traditional Throne")," by ",a.createElement("a",{href:"https://sketchfab.com/itica_mrg?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b",target:"_blank",rel:"nofollow",style:{fontWeight:"bold",color:"#1CAAD9"}}," ITICA MRG @ CYENS - Centre of Excellence ")," on ",a.createElement("a",{href:"https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b",target:"_blank",rel:"nofollow",style:{fontWeight:"bold",color:"#1CAAD9"}},"Sketchfab")))))))}}}]);
//# sourceMappingURL=component---src-pages-secondperfpublic-12-throne-chair-tsx-3b5a46026ddf8fe0a11c.js.map