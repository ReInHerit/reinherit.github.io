(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[620],{16002:function(e,t,r){"use strict";var n=r(96156),a=r(81253),c=r(75900),l=r.n(c),i=r(67294),o=(r(42473),r(80124)),s=r(75378),u=r(99541),m=r(34550),f=r(85893);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=i.forwardRef((function(e,t){var r,n=(0,o.Ch)(e,{activeKey:"onSelect"}),c=n.className,i=n.bsPrefix,m=n.variant,d=n.horizontal,b=n.as,v=void 0===b?"div":b,E=(0,a.Z)(n,["className","bsPrefix","variant","horizontal","as"]),h=(0,u.vE)(i,"list-group");return d&&(r=!0===d?"horizontal":"horizontal-".concat(d)),(0,f.jsx)(s.Z,p(p({ref:t},E),{},{as:v,className:l()(c,h,m&&"".concat(h,"-").concat(m),r&&"".concat(h,"-").concat(r))}))}));b.displayName="ListGroup",t.Z=Object.assign(b,{Item:m.Z})},34550:function(e,t,r){"use strict";var n=r(96156),a=r(28481),c=r(81253),l=r(75900),i=r.n(l),o=r(67294),s=r(85655),u=r(93904),m=r(59148),f=r(99541),d=r(85893);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=o.forwardRef((function(e,t){var r=e.bsPrefix,n=e.active,l=e.disabled,o=e.eventKey,p=e.className,v=e.variant,E=e.action,h=e.as,g=(0,c.Z)(e,["bsPrefix","active","disabled","eventKey","className","variant","action","as"]);r=(0,f.vE)(r,"list-group-item");var y=(0,u.v)(b({key:(0,m.h)(o,g.href),active:n},g)),O=(0,a.Z)(y,2),Z=O[0],w=O[1],j=(0,s.Z)((function(e){if(l)return e.preventDefault(),void e.stopPropagation();Z.onClick(e)}));l&&void 0===g.tabIndex&&(g.tabIndex=-1,g["aria-disabled"]=!0);var P=h||(E?g.href?"a":"button":"div");return(0,d.jsx)(P,b(b(b({ref:t},g),Z),{},{onClick:j,className:i()(p,r,w.isActive&&"active",l&&"disabled",v&&"".concat(r,"-").concat(v),E&&"".concat(r,"-action"))}))}));v.displayName="ListGroupItem",t.Z=v},32315:function(e,t,r){"use strict";var n=r(67294),a=r(20994),c=r(7408),l=r(33639);t.Z=function(e){return n.createElement(a.Z,null,n.createElement(c.Z,{xl:2},e.left),n.createElement(c.Z,{xl:8},n.createElement(l.Z,null,e.children)),n.createElement(c.Z,{xl:2},e.right))}},58439:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(67294),a=r(33639),c=function(){return n.createElement("div",{className:"pt-3 mt-4 bg-white text-center"},n.createElement("div",{className:"pb-3"},n.createElement(a.Z,{className:"pt-3"},n.createElement("img",{alt:"Reinherit header image",src:"images/Slogan-cut.webp",style:{marginTop:"3vh"},height:80}),n.createElement("h2",{style:{marginTop:"2vh",color:"grey"},className:"h3"},"ReInHerit Digital Hub"))))},l=r(55418),i=r(76172),o=r(58263),s=r(8500),u=function(e){var t=e.children,r=e.pageTitle;return n.createElement(o.Z,null,n.createElement(s.Z,{pageTitle:r}),n.createElement(c,null),n.createElement(l.Z,null),n.createElement(a.Z,{className:"rein_main_container pt-sm-4 pt-md-0",style:{marginTop:"2vh"},fluid:!0},t),n.createElement(i.Z,null))}},513:function(e,t,r){"use strict";var n=r(25444),a=r(67294);t.Z=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"mb-3",style:{fontSize:"1.25em"}},a.createElement(n.rU,{to:"/",className:"text-decoration-none"},a.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Home")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e,t){return a.createElement("div",{key:"rein_bread_"+t,className:"d-inline"},a.createElement("span",null," / "),0===t?a.createElement("b",null,a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label)):a.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label))}))),a.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},a.createElement("div",null,a.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&a.createElement("h2",{className:"h5"},e.subHeading),e.subText&&a.createElement("p",null,e.subText))))}},23263:function(e,t,r){"use strict";var n=r(25444),a=r(67294),c=r(16002),l=r(34550);t.Z=function(e){return a.createElement(c.Z,{className:e.sticky&&"sticky-top",variant:"flush"},a.createElement(l.Z,null,a.createElement(n.rU,{to:"/firstperfdoc/overview"},"Overview")),a.createElement(l.Z,null,a.createElement(n.rU,{to:"/firstperfdoc/musicscore"},"Music Score")),a.createElement(l.Z,null,a.createElement(n.rU,{to:"/tools/apps/7cbc7084-6711-4ac0-88c6-4e05cc34ae50"},"Application")),a.createElement(l.Z,null,a.createElement(n.rU,{to:"/firstperfdoc/videoArt"},"Video Art")),a.createElement(l.Z,null,a.createElement(n.rU,{to:"/firstperfdoc/treasureHunt"},"Treasure Hunt")),a.createElement(l.Z,null,a.createElement(n.rU,{to:"/firstperfdoc/creditsPerfOne"},"Credits")))}},60388:function(e,t,r){"use strict";r.r(t);var n=r(67294),a=r(32315),c=r(58439),l=r(513),i=r(23263),o=r(33639);t.default=function(){return n.createElement(c.Z,{pageTitle:"Performance at the Hadjigeorgakis Kornesios Mansion || Documentation"},n.createElement(l.Z,{subHeading:"Documentation of the first ReInHerit performance"},"Music Score by Dr Andreas Papapetrou"),n.createElement(o.Z,{fluid:!0,className:"bg-white p-md-4 p-sm-3 shadow border-0"},n.createElement(a.Z,{left:n.createElement(i.Z,null)},n.createElement("p",null,"The music score of the first performance was written by Dr Andreas Papapetrou. In the following PDF, a detailed description and the score are presented."),n.createElement("p",null,n.createElement("a",{style:{borderRadius:0},href:"/pdfs/AndreasPapapetrouScore.pdf",download:"MusicScore",className:"btn btn-info border-radius-0",target:"_blank",rel:"noreferrer"},"Click this button to download the music score and notes.")))))}}}]);
//# sourceMappingURL=component---src-pages-firstperfdoc-musicscore-tsx-c2e8853cb5974bac7f61.js.map