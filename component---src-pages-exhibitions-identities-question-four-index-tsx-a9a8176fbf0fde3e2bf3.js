(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[2882],{2623:function(e,t,n){"use strict";var r=n(6156),a=n(1253),c=n(5900),i=n.n(c),o=n(7294),l=n(9541),s=n(5893);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=o.forwardRef((function(e,t){var n=e.bsPrefix,r=e.bg,c=e.pill,o=e.text,f=e.className,h=e.as,p=void 0===h?"span":h,m=(0,a.Z)(e,["bsPrefix","bg","pill","text","className","as"]),d=(0,l.vE)(n,"badge");return(0,s.jsx)(p,u(u({ref:t},m),{},{className:i()(f,d,c&&"rounded-pill",o&&"text-".concat(o),r&&"bg-".concat(r))}))}));h.displayName="Badge",h.defaultProps={bg:"primary",pill:!1},t.Z=h},7408:function(e,t,n){"use strict";var r=n(8481),a=n(6156),c=n(1253),i=n(5900),o=n.n(i),l=n(7294),s=n(9541),f=n(5893);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=["xxl","xl","lg","md","sm","xs"];var m=l.forwardRef((function(e,t){var n=function(e){var t=e.as,n=e.bsPrefix,r=e.className,a=(0,c.Z)(e,["as","bsPrefix","className"]);n=(0,s.vE)(n,"col");var i=[],l=[];return p.forEach((function(e){var t,r,c,o=a[e];delete a[e],"object"==typeof o&&null!=o?(t=o.span,r=o.offset,c=o.order):t=o;var s="xs"!==e?"-".concat(e):"";t&&i.push(!0===t?"".concat(n).concat(s):"".concat(n).concat(s,"-").concat(t)),null!=c&&l.push("order".concat(s,"-").concat(c)),null!=r&&l.push("offset".concat(s,"-").concat(r))})),[h(h({},a),{},{className:o().apply(void 0,[r].concat(i,l))}),{as:t,bsPrefix:n,spans:i}]}(e),a=(0,r.Z)(n,2),i=a[0],l=i.className,u=(0,c.Z)(i,["className"]),m=a[1],d=m.as,b=void 0===d?"div":d,g=m.bsPrefix,w=m.spans;return(0,f.jsx)(b,h(h({},u),{},{ref:t,className:o()(l,!w.length&&g)}))}));m.displayName="Col",t.Z=m},2487:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(7294),a=n(6187),c=n(8263),i=n(8500),o=n(5444),l=n(409),s=n(603),f=n(1785);var u=function(){var e=r.useState(!1),t=e[0],n=e[1];return r.createElement(r.Fragment,null,r.createElement(l.Z,{collapseOnSelect:!0,expand:"true",fixed:"top",className:"navExhibIdentities rounded-pill"},r.createElement(a.Z,{fluid:!0},r.createElement(l.Z.Brand,{href:"#home",as:"div",style:{color:"white"}},"ReInHerit --- Exhibitions"),r.createElement(l.Z.Toggle,{className:"navbar-toggler",onClick:function(){return n(!0)},style:{color:"white"}}),r.createElement(s.Z,{show:t,onHide:function(){return n(!1)},placement:"end",className:"bg-dark"},r.createElement(s.Z.Header,{closeButton:!0,className:"btn-light"}),r.createElement(s.Z.Body,null,r.createElement(f.Z,{className:"flex-sm-column content-end"},r.createElement(o.rU,{className:"link-light text-decoration-none",to:"/about"},"What is ReInHerit"),r.createElement(o.rU,{className:"link-light text-decoration-none",to:"/news"},"Other links possible"),r.createElement(o.rU,{className:"link-light text-decoration-none",to:"/networkinghub"},"Forum")))))))},h=function(e){var t=e.children,n=e.pageTitle;return r.createElement(c.Z,null,r.createElement(i.Z,{pageTitle:n}),r.createElement(u,null),r.createElement(a.Z,{className:"rein_main_container pt-sm-4 pt-md-0",style:{marginTop:"3vh",backgroundColor:"white"},fluid:!0},t))}},1903:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(6187),c=n(2623),i=n(3339),o=n(6594),l=n(2487);t.default=function(){var e=r.useState([]),t=e[0],n=e[1],s=function(e){n(e.target.value)};return r.createElement(l.Z,null,r.createElement(a.Z,{fluid:!0,className:"mt-5 p-5"},r.createElement("div",{className:"d-grid gap-2"},r.createElement(c.Z,{className:"badgeIdentities rounded-pill"},r.createElement("h1",null,"ReThinking IDENTITIES"))),r.createElement("div",{className:"identities"},r.createElement("h4",null,"What is your relationship to conflicts? ",r.createElement("br",null),"Find out by answering the quiz questions"),r.createElement("h1",null,"Question 4: new test question what needs to be improved here?"),r.createElement(i.Z,{style:{fontSize:"2vh",fontFamily:"Roboto Mono"},onSubmit:function(e){e.preventDefault(),console.log(t)}},r.createElement(i.Z.Check,{type:"radio",value:"answerFourOptionOne",name:"answerFour",label:"Answer 1. The following three objects deal with rising food prices and the effects of wars, with geopolitical conflicts and social hierarchies. Effects of wars, with geopolitical conflicts and social hierarchies. Effects of wars, with geopolitical conflicts and social hierarchies.",checked:"answerFourOptionOne"===t,onChange:s}),r.createElement(i.Z.Check,{type:"radio",value:"answerFourOptionTwo",name:"answerFour",label:"Answer 2. The following three objects deal with rising food prices and the effects of wars, with geopolitical conflicts and social hierarchies. Effects of wars, with geopolitical conflicts and social hierarchies. Effects of wars, with geopolitical conflicts and social hierarchies.",checked:"answerFourOptionTwo"===t,onChange:s}),r.createElement(i.Z.Check,{type:"radio",value:"answerFourOptionThree",name:"answerFour",label:"Answer 3. The following three objects deal with rising food prices and the effects of wars, with geopolitical conflicts and social hierarchies. Effects of wars, with geopolitical conflicts and social hierarchies. Effects of wars, with geopolitical conflicts and social hierarchies.",checked:"answerFourOptionThree"===t,onChange:s}),r.createElement("div",{className:"d-grid"},r.createElement("input",{type:"submit",className:"btn-primary rounded-pill mt-5 mb-1 h1"}),r.createElement(o.Z,{className:"btn-primary rounded-pill m-3 mt-0",href:"exhibitions/identities/FinalPage"},r.createElement("h1",{style:{color:"white"}},"& Show Results")))))))}},2473:function(e){"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=component---src-pages-exhibitions-identities-question-four-index-tsx-a9a8176fbf0fde3e2bf3.js.map