(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[7323],{12623:function(e,t,a){"use strict";var n=a(96156),r=a(81253),i=a(75900),l=a.n(i),c=a(67294),s=a(99541),o=a(85893);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d=c.forwardRef((function(e,t){var a=e.bsPrefix,n=e.bg,i=e.pill,c=e.text,m=e.className,d=e.as,u=void 0===d?"span":d,b=(0,r.Z)(e,["bsPrefix","bg","pill","text","className","as"]),g=(0,s.vE)(a,"badge");return(0,o.jsx)(u,h(h({ref:t},b),{},{className:l()(m,g,i&&"rounded-pill",c&&"text-".concat(c),n&&"bg-".concat(n))}))}));d.displayName="Badge",d.defaultProps={bg:"primary",pill:!1},t.Z=d},46594:function(e,t,a){"use strict";var n=a(96156),r=a(28481),i=a(81253),l=a(75900),c=a.n(l),s=a(67294),o=a(21118),m=a(99541),h=a(85893);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=s.forwardRef((function(e,t){var a=e.as,n=e.bsPrefix,l=e.variant,s=e.size,d=e.active,b=e.className,g=(0,i.Z)(e,["as","bsPrefix","variant","size","active","className"]),f=(0,m.vE)(n,"btn"),E=(0,o.FT)(u({tagName:a},g)),p=(0,r.Z)(E,2),x=p[0],_=p[1].tagName;return(0,h.jsx)(_,u(u(u({},g),x),{},{ref:t,className:c()(b,f,d&&"active",l&&"".concat(f,"-").concat(l),s&&"".concat(f,"-").concat(s),g.href&&g.disabled&&"disabled")}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=b},72487:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(67294),r=a(33639),i=a(20994),l=a(7408),c=a(58263),s=a(8500),o=a(25444),m=a(50409),h=a(38760),d=a(14746),u=a(29499);var b=function(){var e=n.useState(!1),t=e[0],a=e[1];return(0,u.useLocation)(),n.createElement(n.Fragment,null,n.createElement(m.Z,{collapseOnSelect:!0,expand:"true",fixed:"top",className:"navExhib navExh_red"},n.createElement("div",{className:"header-burger"},n.createElement("div",{className:"hamburger"}),n.createElement("div",{className:"hamburger"}),n.createElement("div",{className:"hamburger"})),n.createElement(r.Z,{fluid:!0,className:"exh_navBar_container rounded-pill"},n.createElement(m.Z.Brand,{href:"#home",as:"div",className:"exhibition_navbar"},n.createElement("div",{className:"exhibition_navbar_inner"},n.createElement("a",{className:"exhibition_menu_link",href:"https://reinherit-hub.eu/"},"ReInHerit"),n.createElement("div",{className:"exh_line"}),n.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://reinherit-hub.eu/exhibitions"},"Exhibition"),n.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://collection.reinherit-hub.eu/"},"Collection"))),n.createElement(m.Z.Toggle,{className:"navbar-toggler",onClick:function(){return a(!0)},style:{color:"white"}}),n.createElement(h.Z,{show:t,onHide:function(){return a(!1)},placement:"end",className:"exhibition_burger_container"},n.createElement(h.Z.Header,{closeButton:!0,className:"exhibition_burger"}),n.createElement("div",{className:"exhibition_burger_inner"},n.createElement(d.Z,{className:"flex-sm-column content-end"},n.createElement(o.rU,{className:"link-light text-decoration-none",to:"/about"},"What is ReInHerit"),n.createElement(o.rU,{className:"link-light text-decoration-none",to:"/about/team"},"Who & Where is ReInHerit"),n.createElement(o.rU,{className:"link-light text-decoration-none",to:"/museumcalls/travelling"},"Host an Exhibition"),n.createElement(o.rU,{className:"link-light text-decoration-none",to:"/museumcalls/digital"},"Object Contribution"),n.createElement("div",{className:"exh_space"}),n.createElement("p",null,"Travelling Exhibition:"),n.createElement("a",{href:"https://www.grazmuseum.at/en/exhibition/rethinking-conflicts-how-are-conflicts-reflected-in-objects/",className:"link-light text-decoration-none"},"Graz Museum"),n.createElement("a",{href:"https://www.boccf.org/",className:"link-light text-decoration-none"},"Bank of Cypus Cultural Foundation"),n.createElement("a",{href:"https://cycladic.gr/en",className:"link-light text-decoration-none"}," Museum of Cycladic Art")))))))},g=function(e){var t=e.children,a=e.pageTitle;return n.createElement(c.Z,null,n.createElement(s.Z,{pageTitle:a}),n.createElement(b,null),n.createElement(r.Z,{className:"exh_main_content",style:{backgroundColor:"white"},fluid:!0},t),n.createElement(r.Z,{style:{backgroundColor:"black"},fluid:!0},n.createElement(r.Z,{style:{padding:"10px 0"}},n.createElement(i.Z,null,n.createElement(l.Z,{xl:6,xs:12},n.createElement("div",{className:"exh_footer_grid"},n.createElement("div",{className:"footer_img"},n.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/cc-sticker-2007.png"})),n.createElement("div",{className:"footer_partner_text"},n.createElement("p",{style:{color:"white"}},"All rights reserved excluding works shared under Creative Commons licensing. ",n.createElement("br",null),"Licenses are indicated for respective elements.")))),n.createElement(l.Z,{xl:6,xs:12},n.createElement("div",{className:"exh_footer_grid"},n.createElement("div",{className:"footer_img"},n.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/logo-ce-horizontal-en-neg-nb.png"})),n.createElement("div",{className:"footer_partner_text"},n.createElement("p",{style:{color:"white"}},"This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545"))))),n.createElement(i.Z,null,n.createElement(l.Z,{className:"exh_footer_links_red"},n.createElement("a",{style:{color:"white"},target:"_blank",href:"/exhibitions/conflicts/imprintConflicts"},"Imprint"),n.createElement("a",{style:{color:"white"},target:"_blank",href:"/about/dataprot"},"Privacy"))))))}},46551:function(e,t,a){"use strict";a.r(t);var n=a(67294),r=a(12623),i=a(20994),l=a(7408),c=a(46594),s=a(72487);t.default=function(){return n.createElement(s.Z,null,n.createElement("div",{className:"exh_container_inner_red exh_rm_nav exh_container_border_red"},n.createElement("div",{className:"d-grid gap-2"},n.createElement(r.Z,{className:"badgeIdentities rounded-pill"},n.createElement("h1",null,"ReThinking IDENTITIES"))),n.createElement("div",{className:"identities"},n.createElement("h4",{className:"identities"},"In her self-portrait, the artist Ida Sofia Maly staged herself as a “garçonne” – a boyish-looking woman with short hair, shirt and tie. The portrait takes up the progressive ideas of the emphatically anti-bourgeois bohemian scene in Munich. In this, she not only reflected the artistic mood of the time – she was a step ahead."),n.createElement(r.Z,{className:"badgeIdentities rounded-pill exh_m_btm"},n.createElement("h1",null," ...")),n.createElement("div",{className:"exh_h5p_iframe"},n.createElement("iframe",{src:"https://collection.reinherit-hub.eu/h5p-ida-maly-annotations.html",width:"1000",height:"800"})),n.createElement("div",{className:"exh_h5p_2dviewer"}),n.createElement("div",{className:"exh_object_btm"},n.createElement("div",{className:"exh_bullet_btn"},"Get to know other objects"),n.createElement(i.Z,null,n.createElement(l.Z,{md:6,xs:12},n.createElement("a",{href:"exhibitions/identities/IdentitiesObjects/IdentitiesObjOne"},n.createElement("img",{alt:"First Object",src:"images/identities/small-cycladic-figurine.jpg",height:"auto",width:"100%","max-width":"100%"}))),n.createElement(l.Z,{md:6,xs:12},n.createElement("a",{href:"exhibitions/identities/IdentitiesObjects/IdentitiesObjThree"},n.createElement("img",{alt:"Third Object",src:"images/identities/small-temple-boy.jpg",height:"auto",width:"100%","max-width":"100%"}))))),n.createElement("div",{className:"exh_submit_button"},n.createElement("div",{className:"exh_arrow_container"},n.createElement("img",{className:"exh_red_arrow",src:"/images/exhibition_assets/arrow_red.svg",alt:""})),n.createElement(c.Z,{className:"exh_submit_btn",href:"exhibitions/identities/IdentitiesQuestions/4thQuestionIdentities"},n.createElement("h1",{style:{color:"white"}},"Exit Exhibition")),"  "))))}}}]);
//# sourceMappingURL=component---src-pages-exhibitions-identities-identities-objects-identities-obj-two-index-tsx-2ed7961bac7a9425af43.js.map