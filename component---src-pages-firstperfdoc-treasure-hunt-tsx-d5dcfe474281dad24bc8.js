(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[333],{16002:function(e,t,a){"use strict";var n=a(96156),r=a(81253),i=a(75900),o=a.n(i),s=a(67294),c=(a(42473),a(80124)),l=a(69122),u=a(99541),h=a(34550),m=a(85893);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p=s.forwardRef((function(e,t){var a,n=(0,c.Ch)(e,{activeKey:"onSelect"}),i=n.className,s=n.bsPrefix,h=n.variant,d=n.horizontal,p=n.as,b=void 0===p?"div":p,v=(0,r.Z)(n,["className","bsPrefix","variant","horizontal","as"]),g=(0,u.vE)(s,"list-group");return d&&(a=!0===d?"horizontal":"horizontal-".concat(d)),(0,m.jsx)(l.Z,f(f({ref:t},v),{},{as:b,className:o()(i,g,h&&"".concat(g,"-").concat(h),a&&"".concat(g,"-").concat(a))}))}));p.displayName="ListGroup",t.Z=Object.assign(p,{Item:h.Z})},34550:function(e,t,a){"use strict";var n=a(96156),r=a(28481),i=a(81253),o=a(75900),s=a.n(o),c=a(67294),l=a(85655),u=a(93904),h=a(59148),m=a(99541),d=a(85893);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=c.forwardRef((function(e,t){var a=e.bsPrefix,n=e.active,o=e.disabled,c=e.eventKey,f=e.className,b=e.variant,v=e.action,g=e.as,y=(0,i.Z)(e,["bsPrefix","active","disabled","eventKey","className","variant","action","as"]);a=(0,m.vE)(a,"list-group-item");var w=(0,u.v)(p({key:(0,h.h)(c,y.href),active:n},y)),E=(0,r.Z)(w,2),j=E[0],O=E[1],Z=(0,l.Z)((function(e){if(o)return e.preventDefault(),void e.stopPropagation();j.onClick(e)}));o&&void 0===y.tabIndex&&(y.tabIndex=-1,y["aria-disabled"]=!0);var x=g||(v?y.href?"a":"button":"div");return(0,d.jsx)(x,p(p(p({ref:t},y),j),{},{onClick:Z,className:s()(f,a,O.isActive&&"active",o&&"disabled",b&&"".concat(a,"-").concat(b),v&&"".concat(a,"-action"))}))}));b.displayName="ListGroupItem",t.Z=b},32315:function(e,t,a){"use strict";var n=a(67294),r=a(20994),i=a(7408),o=a(33639);t.Z=function(e){return n.createElement(r.Z,null,n.createElement(i.Z,{xl:2},e.left),n.createElement(i.Z,{xl:8},n.createElement(o.Z,null,e.children)),n.createElement(i.Z,{xl:2},e.right))}},58439:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(67294),r=a(33639),i=function(){return n.createElement("div",{className:"pt-3 mt-4 bg-white text-center"},n.createElement("div",{className:"pb-3"},n.createElement(r.Z,{className:"pt-3"},n.createElement("img",{alt:"Reinherit header image",src:"images/Slogan-cut.webp",style:{marginTop:"3vh"},height:80}),n.createElement("h2",{style:{marginTop:"2vh",color:"grey"},className:"h3"},"ReInHerit Digital Hub"))))},o=a(55418),s=a(76172),c=a(58263),l=a(8500),u=function(e){var t=e.children,a=e.pageTitle;return n.createElement(c.Z,null,n.createElement(l.Z,{pageTitle:a}),n.createElement(i,null),n.createElement(o.Z,null),n.createElement(r.Z,{className:"rein_main_container pt-sm-4 pt-md-0",style:{marginTop:"2vh"},fluid:!0},t),n.createElement(s.Z,null))}},513:function(e,t,a){"use strict";var n=a(25444),r=a(67294);t.Z=function(e){return r.createElement(r.Fragment,null,r.createElement("div",{className:"mb-3",style:{fontSize:"1.25em"}},r.createElement(n.rU,{to:"/",className:"text-decoration-none"},r.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Home")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e,t){return r.createElement("div",{key:"rein_bread_"+t,className:"d-inline"},r.createElement("span",null," / "),0===t?r.createElement("b",null,r.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label)):r.createElement(n.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label))}))),r.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},r.createElement("div",null,r.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&r.createElement("h2",{className:"h5"},e.subHeading),e.subText&&r.createElement("p",null,e.subText))))}},23263:function(e,t,a){"use strict";var n=a(25444),r=a(67294),i=a(16002),o=a(34550);t.Z=function(e){return r.createElement(i.Z,{className:e.sticky&&"sticky-top",variant:"flush"},r.createElement(o.Z,null,r.createElement(n.rU,{to:"/firstperfdoc/overview"},"Overview")),r.createElement(o.Z,null,r.createElement(n.rU,{to:"/firstperfdoc/videoArt"},"Video Art")),r.createElement(o.Z,null,r.createElement(n.rU,{to:"/firstperfdoc/treasureHunt"},"Treasure Hunt")),r.createElement(o.Z,null,r.createElement(n.rU,{to:"/tools/apps/7cbc7084-6711-4ac0-88c6-4e05cc34ae50"},"Application")))}},42187:function(e,t,a){"use strict";a.r(t);var n=a(67294),r=a(32315),i=a(58439),o=a(513),s=a(23263),c=a(33639);t.default=function(){return n.createElement(i.Z,{pageTitle:"Performance at the Hadjigeorgakis Kornesios Mansion || Documentation"},n.createElement(o.Z,{subHeading:"Documentation of the first ReInHerit performance"},"Description of treasure hunt and museological approach for Immersive Performance by Maria Shehade"),n.createElement(c.Z,{fluid:!0,className:"bg-white p-md-4 p-sm-3 shadow border-0"},n.createElement(r.Z,{left:n.createElement(s.Z,null)},n.createElement("p",null,"One of the main ideas behind the immersive performance was that the Hadjigeorgakis Kornesios mansion would not constitute just a performance site simply hosting the event, but that the performance would merge with the place and constitute an enhancement of the visitor experience. The aim was to provide to the visitors a different way of experiencing and getting to know a heritage site, that goes beyond the typical museum visit, which is usually centred around textual ways of interpretation. Thus, the aim was to create additional layers of experience that can trigger the senses, providing a combination of visual, haptic, textual and auditory cues. This multisensory endeavour would allow each visitor to experience the heritage site in his own personal way and create his own meaning based on his personal interest."),n.createElement("p",null,"In order to allow this, the experience (both from a museological and from a performative aspect) was not designed to be linear, following a particular script, but visitors could walk freely within the mansion, deciding where to spend more time as they wished and according to their interests. To achieve this non-linear experience that would also allow an interpretation to be provided, a treasure hunt was designed around particular objects of interest that are found in different areas of the mansion.  In total, 15 objects were selected from the mansion, located both inside the rooms of the mansion and in the internal courtyard, including, a fountain, a traditional dress, a grandfather clock, a decorated chest, a tea set, pottery and jewellery amongst others."),n.createElement("p",null,"For each of the selected objects, short texts were prepared. The texts, written in simple language and avoiding academic jargon so that they were easily read by younger audiences as well, provided basic information regarding each object and its use in the daily life of the mansion. The texts were designed in such a way so as to briefly provide a general historical context for each object, since many of the objects originated from different historical periods, and also emphasised the use of these objects or stories of the inhabitants of the mansion that related to these objects. The aim of the texts, apart from providing a basic way of interpretation, was to facilitate the visitors to relate to the people that inhabited the mansion and imagine their daily life in the specific environment."),n.createElement("p",null,"The texts did not include any information on where in the mansion each object was located. They were printed on small pieces of the paper and were handed out to the audience in an envelope at the entrance of the site. This treasure hunt-type of activity was asking the visitors to spot these objects in the mansion. Each object included in the treasure hunt was linked to a sonic activity so once visitors approached an object, they would start to receive extra auditory cues."))))}}}]);
//# sourceMappingURL=component---src-pages-firstperfdoc-treasure-hunt-tsx-d5dcfe474281dad24bc8.js.map