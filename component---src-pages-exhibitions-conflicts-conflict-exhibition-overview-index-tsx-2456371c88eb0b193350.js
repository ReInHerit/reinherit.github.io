(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[2930],{12623:function(e,t,a){"use strict";var r=a(96156),n=a(81253),l=a(75900),i=a.n(l),c=a(67294),s=a(99541),o=a(85893);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d=c.forwardRef((function(e,t){var a=e.bsPrefix,r=e.bg,l=e.pill,c=e.text,m=e.className,d=e.as,u=void 0===d?"span":d,b=(0,n.Z)(e,["bsPrefix","bg","pill","text","className","as"]),f=(0,s.vE)(a,"badge");return(0,o.jsx)(u,h(h({ref:t},b),{},{className:i()(m,f,l&&"rounded-pill",c&&"text-".concat(c),r&&"bg-".concat(r))}))}));d.displayName="Badge",d.defaultProps={bg:"primary",pill:!1},t.Z=d},46594:function(e,t,a){"use strict";var r=a(96156),n=a(28481),l=a(81253),i=a(75900),c=a.n(i),s=a(67294),o=a(21118),m=a(99541),h=a(85893);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=s.forwardRef((function(e,t){var a=e.as,r=e.bsPrefix,i=e.variant,s=e.size,d=e.active,b=e.className,f=(0,l.Z)(e,["as","bsPrefix","variant","size","active","className"]),g=(0,m.vE)(r,"btn"),E=(0,o.FT)(u({tagName:a},f)),p=(0,n.Z)(E,2),v=p[0],x=p[1].tagName;return(0,h.jsx)(x,u(u(u({},f),v),{},{ref:t,className:c()(b,g,d&&"active",i&&"".concat(g,"-").concat(i),s&&"".concat(g,"-").concat(s),f.href&&f.disabled&&"disabled")}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=b},19644:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var r=a(67294),n=a(33639),l=a(20994),i=a(7408),c=a(58263),s=a(8500),o=a(25444),m=a(50409),h=a(38760),d=a(14746),u=a(29499);var b=function(){var e=r.useState(!1),t=e[0],a=e[1];return(0,u.useLocation)(),r.createElement(r.Fragment,null,r.createElement(m.Z,{collapseOnSelect:!0,expand:"true",fixed:"top",className:"navExhib navExh_blue"},r.createElement("div",{className:"header-burger"},r.createElement("div",{className:"hamburger"}),r.createElement("div",{className:"hamburger"}),r.createElement("div",{className:"hamburger"})),r.createElement(n.Z,{fluid:!0,className:"exh_navBar_container rounded-pill"},r.createElement(m.Z.Brand,{href:"#home",as:"div",className:"exhibition_navbar"},r.createElement("div",{className:"exhibition_navbar_inner"},r.createElement("a",{className:"exhibition_menu_link",href:"https://reinherit-hub.eu/"},"ReInHerit"),r.createElement("div",{className:"exh_line"}),r.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://reinherit-hub.eu/exhibitions"},"Exhibition"),r.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://collection.reinherit-hub.eu/"},"Collection"))),r.createElement(m.Z.Toggle,{className:"navbar-toggler",onClick:function(){return a(!0)},style:{color:"white"}}),r.createElement(h.Z,{show:t,onHide:function(){return a(!1)},placement:"end",className:"exhibition_burger_container"},r.createElement(h.Z.Header,{closeButton:!0,className:"exhibition_burger"}),r.createElement("div",{className:"exhibition_burger_inner"},r.createElement(d.Z,{className:"flex-sm-column content-end"},r.createElement(o.rU,{className:"link-light text-decoration-none",to:"/about"},"What is ReInHerit"),r.createElement(o.rU,{className:"link-light text-decoration-none",to:"/about/team"},"Who & Where is ReInHerit"),r.createElement(o.rU,{className:"link-light text-decoration-none",to:"/museumcalls/travelling"},"Host an Exhibition"),r.createElement(o.rU,{className:"link-light text-decoration-none",to:"/museumcalls/digital"},"Object Contribution"),r.createElement("div",{className:"exh_space"}),r.createElement("p",null,"Travelling Exhibition:"),r.createElement("a",{href:"https://www.grazmuseum.at/en/exhibition/rethinking-conflicts-how-are-conflicts-reflected-in-objects/",className:"link-light text-decoration-none"},"Graz Museum"),r.createElement("a",{href:"https://www.boccf.org/",className:"link-light text-decoration-none"},"Bank of Cypus Cultural Foundation"),r.createElement("a",{href:"https://cycladic.gr/en",className:"link-light text-decoration-none"}," Museum of Cycladic Art")))))))},f=function(e){var t=e.children,a=e.pageTitle;return r.createElement(c.Z,null,r.createElement(s.Z,{pageTitle:a}),r.createElement(b,null),r.createElement(n.Z,{className:"exh_main_content",style:{backgroundColor:"white"},fluid:!0},t),r.createElement(n.Z,{style:{backgroundColor:"black"},fluid:!0},r.createElement(n.Z,{style:{padding:"10px 0"}},r.createElement(l.Z,null,r.createElement(i.Z,{xl:6,xs:12},r.createElement("div",{className:"exh_footer_grid"},r.createElement("div",{className:"footer_img"},r.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/cc-sticker-2007.png"})),r.createElement("div",{className:"footer_partner_text"},r.createElement("p",{style:{color:"white"}},"All rights reserved excluding works shared under Creative Commons licensing. ",r.createElement("br",null),"Licenses are indicated for respective elements.")))),r.createElement(i.Z,{xl:6,xs:12},r.createElement("div",{className:"exh_footer_grid"},r.createElement("div",{className:"footer_img"},r.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/logo-ce-horizontal-en-neg-nb.png"})),r.createElement("div",{className:"footer_partner_text"},r.createElement("p",{style:{color:"white"}},"This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545"))))),r.createElement(l.Z,null,r.createElement(i.Z,{className:"exh_footer_links"},r.createElement("a",{style:{color:"white"},target:"_blank",href:"/exhibitions/conflicts/imprintConflicts"},"Imprint"),r.createElement("a",{style:{color:"white"},target:"_blank",href:"/about/dataprot"},"Privacy"))))))}},62983:function(e,t,a){"use strict";a.r(t);var r=a(67294),n=a(12623),l=a(20994),i=a(7408),c=a(46594),s=a(19644);t.default=function(){return r.createElement(s.Z,null,r.createElement("div",{className:"exh_container_inner exh_rm_nav exh_container_border"},r.createElement(n.Z,{className:"badgeConflicts rounded-pill"},r.createElement("h1",null,"ReThinking CONFLICTS")),r.createElement("div",{className:"conflicts"},r.createElement("h4",{className:"mt-5"},"Conflicts arise between individuals, social groups or nations and peoples. They are multi-layered and complex. Objects are often preserved as important traces.",r.createElement("br",null),"How conflicts enter the collective memory culture depends on prevailing power structures and the respective representation and narrative. ",r.createElement("br",null),"How can we interpret these today? ",r.createElement("br",null),"How much does today influence our view of past conflicts? ",r.createElement("br",null),"How do we deal with recurring conflicts over the centuries?",r.createElement("br",null),r.createElement("br",null),"In the following, we take a look at three digital objects of different historical conflicts and contexts from different perspectives. These highlight the complexity of conflicts and encourage us to challenge traditional narratives.",r.createElement("br",null),r.createElement("br",null))),r.createElement("div",{id:"objectsConflicts"},r.createElement("div",{className:"exhibObject-grid"},r.createElement("div",{className:"exh_bullet_btn"},"choose one object"),r.createElement(l.Z,null,r.createElement(i.Z,{md:6,xs:12},r.createElement("div",{className:"exhibObject",style:{width:"40vw",height:"30vw"}},r.createElement("img",{alt:"First Object",src:"images/conflicts/small-CherryRageGM.jpg",width:"100%",height:"auto"}),r.createElement("div",{className:"back"},r.createElement("h3",null,"Cherry Rage"),r.createElement("p",null,"What do conflicts have to do with food shortages and rising prices?"),r.createElement("div",{className:"desc_bottom"},r.createElement("img",{className:"arrow_detail",src:"/images/exhibition_assets/arrow_blue.svg",alt:"arrow_details"}),r.createElement(c.Z,{className:"exh_see_more",variant:"primary",href:"exhibitions/conflicts/ConflictObjects/ConflictObjOne"},"see more"))))),r.createElement(i.Z,{md:6,xs:12},r.createElement("div",{className:"exhibObject",style:{width:"30vw",height:"30vw",left:"10vw"}},r.createElement("div",{className:"front"},r.createElement("img",{alt:"Second Object",src:"images/conflicts/small-PyxisMCA.jpg",width:"100%",height:"auto"})),r.createElement("div",{className:"back"},r.createElement("h3",null,"Pyxis"),r.createElement("p",null," To whom did this artful box belong and what conflicts does it hold?"),r.createElement("div",{className:"desc_bottom"},r.createElement("img",{className:"arrow_detail",src:"/images/exhibition_assets/arrow_blue.svg",alt:"arrow_details"}),r.createElement(c.Z,{className:"exh_see_more",variant:"primary",href:"exhibitions/conflicts/ConflictObjects/ConflictObjTwo"},"see more"))))),r.createElement(i.Z,{md:6,xs:12},r.createElement("div",{className:"exhibObject exhibThird",style:{width:"30vw",height:"30vw"}},r.createElement("div",{className:"front"},r.createElement("img",{alt:"Third Object",src:"images/conflicts/small-CiproMapBoCCF.jpg",width:"100%",height:"auto"})),r.createElement("div",{className:"back"},r.createElement("h3",null,"Cipro"),r.createElement("p",null,"What do maps tell us about conflict?"),r.createElement("div",{className:"desc_bottom"},r.createElement("img",{className:"arrow_detail",src:"/images/exhibition_assets/arrow_blue.svg",alt:"arrow_details"}),r.createElement(c.Z,{className:"exh_see_more",variant:"primary",href:"exhibitions/conflicts/ConflictObjects/ConflictObjThree"},"see more"))))))))))}}}]);
//# sourceMappingURL=component---src-pages-exhibitions-conflicts-conflict-exhibition-overview-index-tsx-2456371c88eb0b193350.js.map