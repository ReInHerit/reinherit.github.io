(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[9023],{16002:function(e,t,n){"use strict";var a=n(96156),r=n(81253),i=n(75900),o=n.n(i),c=n(67294),l=(n(42473),n(80124)),s=n(75378),u=n(99541),m=n(34550),d=n(85893);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=c.forwardRef((function(e,t){var n,a=(0,l.Ch)(e,{activeKey:"onSelect"}),i=a.className,c=a.bsPrefix,m=a.variant,p=a.horizontal,f=a.as,g=void 0===f?"div":f,b=(0,r.Z)(a,["className","bsPrefix","variant","horizontal","as"]),v=(0,u.vE)(c,"list-group");return p&&(n=!0===p?"horizontal":"horizontal-".concat(p)),(0,d.jsx)(s.Z,h(h({ref:t},b),{},{as:g,className:o()(i,v,m&&"".concat(v,"-").concat(m),n&&"".concat(v,"-").concat(n))}))}));f.displayName="ListGroup",t.Z=Object.assign(f,{Item:m.Z})},34550:function(e,t,n){"use strict";var a=n(96156),r=n(28481),i=n(81253),o=n(75900),c=n.n(o),l=n(67294),s=n(85655),u=n(93904),m=n(59148),d=n(99541),p=n(85893);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=l.forwardRef((function(e,t){var n=e.bsPrefix,a=e.active,o=e.disabled,l=e.eventKey,h=e.className,g=e.variant,b=e.action,v=e.as,E=(0,i.Z)(e,["bsPrefix","active","disabled","eventKey","className","variant","action","as"]);n=(0,d.vE)(n,"list-group-item");var y=(0,u.v)(f({key:(0,m.h)(l,E.href),active:a},E)),w=(0,r.Z)(y,2),O=w[0],Z=w[1],j=(0,s.Z)((function(e){if(o)return e.preventDefault(),void e.stopPropagation();O.onClick(e)}));o&&void 0===E.tabIndex&&(E.tabIndex=-1,E["aria-disabled"]=!0);var T=v||(b?E.href?"a":"button":"div");return(0,p.jsx)(T,f(f(f({ref:t},E),O),{},{onClick:j,className:c()(h,n,Z.isActive&&"active",o&&"disabled",g&&"".concat(n,"-").concat(g),b&&"".concat(n,"-action"))}))}));g.displayName="ListGroupItem",t.Z=g},32315:function(e,t,n){"use strict";var a=n(67294),r=n(20994),i=n(7408),o=n(33639);t.Z=function(e){return a.createElement(r.Z,null,a.createElement(i.Z,{xl:2},e.left),a.createElement(i.Z,{xl:8},a.createElement(o.Z,null,e.children)),a.createElement(i.Z,{xl:2},e.right))}},58439:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(67294),r=n(33639),i=function(){return a.createElement("div",{className:"pt-3 mt-4 bg-white text-center"},a.createElement("div",{className:"pb-3"},a.createElement(r.Z,{className:"pt-3"},a.createElement("img",{alt:"Reinherit header image",src:"images/Slogan-cut.webp",style:{marginTop:"3vh"},height:80}),a.createElement("h2",{style:{marginTop:"2vh",color:"grey"},className:"h3"},"ReInHerit Digital Hub"))))},o=n(55418),c=n(76172),l=n(58263),s=n(8500),u=function(e){var t=e.children,n=e.pageTitle;return a.createElement(l.Z,null,a.createElement(s.Z,{pageTitle:n}),a.createElement(i,null),a.createElement(o.Z,null),a.createElement(r.Z,{className:"rein_main_container pt-sm-4 pt-md-0",style:{marginTop:"2vh"},fluid:!0},t),a.createElement(c.Z,null))}},513:function(e,t,n){"use strict";var a=n(25444),r=n(67294);t.Z=function(e){return r.createElement(r.Fragment,null,r.createElement("div",{className:"mb-3",style:{fontSize:"1.25em"}},r.createElement(a.rU,{to:"/",className:"text-decoration-none"},r.createElement("b",{style:{color:"rgb(46, 172, 200)"}},"Home")),e.breadCrumb&&e.breadCrumb.length>0&&e.breadCrumb.map((function(e,t){return r.createElement("div",{key:"rein_bread_"+t,className:"d-inline"},r.createElement("span",null," / "),0===t?r.createElement("b",null,r.createElement(a.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label)):r.createElement(a.rU,{style:{color:0===t?"#ee3f98":"",textEmphasis:"800"},key:"breadcrumb__"+t,className:"text-decoration-none",to:e.value},e.label))}))),r.createElement("div",{className:"p-3 p-md-4 shadow rounded mb-3 bg-white"},r.createElement("div",null,r.createElement("h1",Object.assign({className:"h2"},e),e.children),e.subHeading&&r.createElement("h2",{className:"h5"},e.subHeading),e.subText&&r.createElement("p",null,e.subText))))}},88765:function(e,t,n){"use strict";var a=n(25444),r=n(67294),i=n(16002),o=n(34550);t.Z=function(e){return r.createElement(i.Z,{className:e.sticky&&"sticky-top",variant:"flush"},r.createElement(o.Z,null,r.createElement(a.rU,{to:"/secondperfdoc/spoverview"},"Overview")),r.createElement(o.Z,null,r.createElement(a.rU,{to:"/secondperfdoc/spMuseologicalPerspective"},"Museological Perspective")),r.createElement(o.Z,null,r.createElement(a.rU,{to:"/secondperfdoc/spApplication"},"Application Description and Code")),r.createElement(o.Z,null,r.createElement(a.rU,{to:"/secondperfdoc/spvideoArt"},"Video Art Description and Sample")),r.createElement(o.Z,null,r.createElement(a.rU,{to:"/secondperfdoc/spmusic"},"Music Score and Description")))}},10255:function(e,t,n){"use strict";n.r(t);var a=n(67294),r=n(32315),i=n(58439),o=n(513),c=n(88765),l=n(33639);t.default=function(){return a.createElement(i.Z,{pageTitle:"Performance at the Bank of Cyprus Cultural Foundation || Documentation"},a.createElement(o.Z,{subHeading:"ReInHerit a Museum - Documentation"},"Video Art"),a.createElement(l.Z,{fluid:!0,className:"bg-white p-md-4 p-sm-3 shadow border-0"},a.createElement(r.Z,{left:a.createElement(c.Z,null)},a.createElement("p",null,a.createElement("b",null,"The Visual Part")),a.createElement("p",null,"The visual component of the performance combined exhibits from the BoCCF with generative art and video art, resulting in a hybrid artwork. Historical artifacts and algorithms merged to create a unique audiovisual landscape that stimulated new interpretations, multiple perspectives, and a dynamic dialogue about the past, the present, and the future of the corresponding exhibits."),a.createElement("p",null,"In the subsequent phase, 8 area scans were generated, each corresponding to the location of a specific object, strategically positioned across various locations within the museum to encourage visitors to browse through and explore the building and its collections during the event. The audience scanned the objects in the corresponding area, and consequently, the three-dimensional model appeared on a tablet or their mobile devices along with object descriptions and historical information about the original exhibit."),a.createElement("p",null,"Following this stage, these conserved reference points embarked on a gradual orbit around the central axis of each object within the dimensions of x, y, and z. The traces of these movements were captured and presented in real time to spectators via the projection. This intricate procedure culminated in a visual effect reminiscent of the stroke of a brush as it gracefully glides across canvas or paper, thus achieving a uniquely creative and abstract visual outcome. This culmination stands as a testament to the museum’s very essence and mission."),a.createElement("p",null,a.createElement("b",null,"Technical Characteristics of the Real-Time Visuals")),a.createElement("p",null,"The visual aspect encompasses algorithmic graphics and the aesthetics of video art. Initially, three-dimensional models of exhibits were created using photogrammetry, and architectural elements were retained in the node-based software, Touch Designer (https://derivative.ca/). Additionally, Artificial Intelligence-generated images of dancers were created using e-Dally (https://openai.com/dall-e-2) and integrated into a timeline, allowing for smooth transitions and intermediate states. These elements were integrated into a system created in Touch Designer, where audience input and MIDI controller inter- actions shaped the final artwork."),a.createElement("p",null,a.createElement("b",null,"The Video-Art")),a.createElement("p",null,"The video art was created using AI-generated images of dancers. These images were then imported into a video editing program, and utilizing the technique of morphing, intermediate images were generated. This process gave rise to the movement and, consequently, the video. The final form of the moving images resulted from a combination of the created video by the dancers and real-time graphics through projection mapping."),a.createElement("p",null,a.createElement("b",null,"Projection Mapping")),a.createElement("p",null,"Projection mapping played a crucial role in the immersive experience. The exterior side of the venues’ building and an amphitheater in the courtyard were utilized for it. By selecting two opposing points in the courtyard, the audience was fully immersed in visuals and music, creating a sense of unity. Three programs worked simultaneously in real-time: Touch Designer generated the graphics, Syphon (https://syphon.github.io/) trans- ported them to Mad Mapper (https://madmapper.com/), which facilitated the mapping onto the building’s surface."),a.createElement("p",null,a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/4gninGRoY9A?si=aEANORbEEcyl-Iqg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))))}}}]);
//# sourceMappingURL=component---src-pages-secondperfdoc-spvideo-art-tsx-8817c21d70b6eb699e0a.js.map