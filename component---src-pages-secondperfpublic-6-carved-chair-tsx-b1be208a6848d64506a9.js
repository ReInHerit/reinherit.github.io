(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[4859],{16002:function(e,t,r){"use strict";var a=r(96156),n=r(81253),c=r(75900),l=r.n(c),o=r(67294),i=(r(42473),r(80124)),s=r(75378),m=r(99541),u=r(34550),p=r(85893);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=o.forwardRef((function(e,t){var r,a=(0,i.Ch)(e,{activeKey:"onSelect"}),c=a.className,o=a.bsPrefix,u=a.variant,d=a.horizontal,b=a.as,f=void 0===b?"div":b,E=(0,n.Z)(a,["className","bsPrefix","variant","horizontal","as"]),v=(0,m.vE)(o,"list-group");return d&&(r=!0===d?"horizontal":"horizontal-".concat(d)),(0,p.jsx)(s.Z,h(h({ref:t},E),{},{as:f,className:l()(c,v,u&&"".concat(v,"-").concat(u),r&&"".concat(v,"-").concat(r))}))}));b.displayName="ListGroup",t.Z=Object.assign(b,{Item:u.Z})},34550:function(e,t,r){"use strict";var a=r(96156),n=r(28481),c=r(81253),l=r(75900),o=r.n(l),i=r(67294),s=r(85655),m=r(93904),u=r(59148),p=r(99541),d=r(85893);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=i.forwardRef((function(e,t){var r=e.bsPrefix,a=e.active,l=e.disabled,i=e.eventKey,h=e.className,f=e.variant,E=e.action,v=e.as,g=(0,c.Z)(e,["bsPrefix","active","disabled","eventKey","className","variant","action","as"]);r=(0,p.vE)(r,"list-group-item");var y=(0,m.v)(b({key:(0,u.h)(i,g.href),active:a},g)),w=(0,n.Z)(y,2),Z=w[0],C=w[1],O=(0,s.Z)((function(e){if(l)return e.preventDefault(),void e.stopPropagation();Z.onClick(e)}));l&&void 0===g.tabIndex&&(g.tabIndex=-1,g["aria-disabled"]=!0);var k=v||(E?g.href?"a":"button":"div");return(0,d.jsx)(k,b(b(b({ref:t},g),Z),{},{onClick:O,className:o()(h,r,C.isActive&&"active",l&&"disabled",f&&"".concat(r,"-").concat(f),E&&"".concat(r,"-action"))}))}));f.displayName="ListGroupItem",t.Z=f},32315:function(e,t,r){"use strict";var a=r(67294),n=r(20994),c=r(7408),l=r(33639);t.Z=function(e){return a.createElement(n.Z,null,a.createElement(c.Z,{xl:2},e.left),a.createElement(c.Z,{xl:8},a.createElement(l.Z,null,e.children)),a.createElement(c.Z,{xl:2},e.right))}},58439:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var a=r(67294),n=r(33639),c=function(){return a.createElement("div",{className:"pt-3 mt-4 bg-white text-center"},a.createElement("div",{className:"pb-3"},a.createElement(n.Z,{className:"pt-3"},a.createElement("img",{alt:"Reinherit header image",src:"images/Slogan-cut.webp",style:{marginTop:"3vh"},height:80}),a.createElement("h2",{style:{marginTop:"2vh",color:"grey"},className:"h3"},"ReInHerit Digital Hub"))))},l=r(99755),o=r(76172),i=r(58263),s=r(8500),m=function(e){var t=e.children,r=e.pageTitle;return a.createElement(i.Z,null,a.createElement(s.Z,{pageTitle:r}),a.createElement(c,null),a.createElement(l.Z,null),a.createElement(n.Z,{className:"rein_main_container pt-sm-4 pt-md-0",style:{marginTop:"2vh"},fluid:!0},t),a.createElement(o.Z,null))}},513:function(e,t,r){"use strict";var a=r(25444),n=r(67294);t.Z=function(e){return n.createElement(n.Fragment,null,n.createElement("div",{className:"mb-3",style:{fontSize:"1.25em"}},n.createElement(a.rU,{to:"/",className:"text-decoration-none"},n.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Home")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e,t){return n.createElement("div",{key:"rein_bread_"+t,className:"d-inline"},n.createElement("span",null," / "),0===t?n.createElement("b",null,n.createElement(a.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label)):n.createElement(a.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label))}))),n.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},n.createElement("div",null,n.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&n.createElement("h2",{className:"h5"},e.subHeading),e.subText&&n.createElement("p",null,e.subText))))}},35599:function(e,t,r){"use strict";var a=r(25444),n=r(67294),c=r(16002),l=r(34550);t.Z=function(e){return n.createElement(c.Z,{className:e.sticky&&"sticky-top",variant:"flush"},n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/0Introduction"},"Introduction")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/1TurkishBrazier"},"Turkish Brazier")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/2VaseKannourka"},'Vase "Kannourka"')),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/3WeavingDoulappi"},"Weaving Doulappi")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/4WoodenChest"},"Wooden Chest")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/5AmboustaCase"},'"Ambousta" Case')),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/6CarvedChair"},"Carved Chair")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/7CopperBox"},"Copper Box")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/8CopperTalisman"},"Copper Talisman")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/9GildedBuckle"},"Gilded Buckle")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/10Hanapi"},"Hanapi")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/11ClayVase"},"Clay Vase")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/12ThroneChair"},"Throne Chair")),n.createElement(l.Z,null,n.createElement(a.rU,{to:"/secondperfpublic/13questionnaires"},"Survey")))}},77847:function(e,t,r){"use strict";r.r(t);var a=r(67294),n=r(32315),c=r(58439),l=r(513),o=r(35599),i=r(33639);t.default=function(){return a.createElement(c.Z,{pageTitle:"Performance at the Bank of Cyprus Cultural Foundation"},a.createElement(l.Z,{subHeading:"The second ReInHerit performance"},"Carved wooden church chair"),a.createElement(i.Z,{fluid:!0,className:"bg-white p-md-4 p-sm-3 shadow border-0"},a.createElement(n.Z,{left:a.createElement(o.Z,null)},a.createElement("p",null,'This particular chair belongs to a special group of handmade seats with carved wood decoration. This type of carved chairs was not common in traditional Cypriot houses but rather rare. Indicative of their rarity is the fact that the carved chairs used by the newlyweds on their wedding day, in many villages, were usually given as a loan by the church or the community. This particular chair has decoration all over the back and front legs, which is dominated by criss-crossed lines along with incised circles. It also features an embossed cross within a circle on the upper back. The back is also decorated with four "pillars" which resemble the ‘parmakia’, a characteristic of the windows of folk architecture.'),a.createElement("div",{className:"mb-5",style:{maxWidth:"1300px",margin:"auto"}},a.createElement("div",{className:"mt-5",style:{textAlign:"center",maxWidth:"100%",width:"100%",height:"800px"}},a.createElement("iframe",{title:"Carved wooden church chair",src:"https://sketchfab.com/models/c7276b2758394b6cabe44161269f59e6/embed",width:"100%",height:"100%"}),a.createElement("p",{style:{fontSize:"13px",fontWeight:"normal",margin:"5px",color:"#4A4A4A"}},a.createElement("a",{href:"https://sketchfab.com/3d-models/carved-wooden-church-chair-c7276b2758394b6cabe44161269f59e6?utm_medium=embed&utm_campaign=share-popup&utm_content=c7276b2758394b6cabe44161269f59e6",target:"_blank",rel:"nofollow",style:{fontWeight:"bold",color:"#1CAAD9"}},"Carved wooden church chair")," by ",a.createElement("a",{href:"https://sketchfab.com/itica_mrg?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b",target:"_blank",rel:"nofollow",style:{fontWeight:"bold",color:"#1CAAD9"}}," ITICA MRG @ CYENS - Centre of Excellence ")," on ",a.createElement("a",{href:"https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b",target:"_blank",rel:"nofollow",style:{fontWeight:"bold",color:"#1CAAD9"}},"Sketchfab")))))))}}}]);
//# sourceMappingURL=component---src-pages-secondperfpublic-6-carved-chair-tsx-b1be208a6848d64506a9.js.map