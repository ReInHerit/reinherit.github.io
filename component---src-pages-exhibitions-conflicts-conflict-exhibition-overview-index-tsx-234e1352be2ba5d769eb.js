"use strict";(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[2930],{12623:function(e,t,a){var r=a(96156),n=a(81253),i=a(80732),l=a.n(i),c=a(67294),s=a(99541),o=a(85893),m=["bsPrefix","bg","pill","text","className","as"];function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=c.forwardRef((function(e,t){var a=e.bsPrefix,r=e.bg,i=e.pill,c=e.text,h=e.className,b=e.as,u=void 0===b?"span":b,f=(0,n.Z)(e,m),g=(0,s.vE)(a,"badge");return(0,o.jsx)(u,d(d({ref:t},f),{},{className:l()(h,g,i&&"rounded-pill",c&&"text-".concat(c),r&&"bg-".concat(r))}))}));b.displayName="Badge",b.defaultProps={bg:"primary",pill:!1},t.Z=b},46594:function(e,t,a){var r=a(96156),n=a(28481),i=a(81253),l=a(80732),c=a.n(l),s=a(67294),o=a(21118),m=a(99541),h=a(85893),d=["as","bsPrefix","variant","size","active","className"];function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=s.forwardRef((function(e,t){var a=e.as,r=e.bsPrefix,l=e.variant,s=e.size,b=e.active,f=e.className,g=(0,i.Z)(e,d),E=(0,m.vE)(r,"btn"),p=(0,o.FT)(u({tagName:a},g)),v=(0,n.Z)(p,2),x=v[0],_=v[1].tagName;return(0,h.jsx)(_,u(u(u({},g),x),{},{ref:t,className:c()(f,E,b&&"active",l&&"".concat(E,"-").concat(l),s&&"".concat(E,"-").concat(s),g.href&&g.disabled&&"disabled")}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=f},19644:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(67294),n=a(33639),i=a(20994),l=a(7408),c=a(58263),s=a(8500),o=a(25444),m=a(50985),h=a(40603),d=a(21785),b=a(29499);var u=function(){var e=r.useState(!1),t=e[0],a=e[1],i=(0,b.useLocation)(),l=["/exhibitions/conflicts/ConflictExhibitionOverview","/exhibitions/conflicts/ConflictObjects/ConflictObjOne","/exhibitions/conflicts/ConflictObjects/ConflictObjTwo","/exhibitions/conflicts/ConflictObjects/ConflictObjThree"].includes(i.pathname);return r.createElement(r.Fragment,null,!l&&r.createElement(m.Z,{collapseOnSelect:!0,expand:"true",fixed:"top",className:"navExhib navExh_blue"},r.createElement("div",{className:"header-burger"},r.createElement("div",{className:"hamburger"}),r.createElement("div",{className:"hamburger"}),r.createElement("div",{className:"hamburger"})),r.createElement(n.Z,{fluid:!0,className:"exh_navBar_container rounded-pill"},r.createElement(m.Z.Brand,{href:"#home",as:"div",className:"exhibition_navbar"},r.createElement("div",{className:"exhibition_navbar_inner"},r.createElement("a",{className:"exhibition_menu_link",href:"https://reinherit-hub.eu/"},"ReInHerit"),r.createElement("div",{className:"exh_line"}),r.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://reinherit-hub.eu/exhibitions"},"Exhibition"),r.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://collection.reinherit-hub.eu/"},"Collection"))),r.createElement(m.Z.Toggle,{className:"navbar-toggler",onClick:function(){return a(!0)},style:{color:"white"}}),r.createElement(h.Z,{show:t,onHide:function(){return a(!1)},placement:"end",className:"exhibition_burger_container"},r.createElement(h.Z.Header,{closeButton:!0,className:"exhibition_burger"}),r.createElement("div",{className:"exhibition_burger_inner"},r.createElement(d.Z,{className:"flex-sm-column content-end"},r.createElement(o.rU,{className:"link-light text-decoration-none",to:"/about"},"What is ReInHerit"),r.createElement(o.rU,{className:"link-light text-decoration-none",to:"/about"},"Who & Where is ReInHerit"),r.createElement("a",{className:"link-light text-decoration-none",href:"https://collection.reinherit-hub.eu/takeover"},"Takeover"),r.createElement("div",{className:"exh_space"}),r.createElement("p",null,"Travelling Exhibition:"),r.createElement("a",{href:"https://www.grazmuseum.at/en/exhibition/rethinking-conflicts-how-are-conflicts-reflected-in-objects/",className:"link-light text-decoration-none"},"Graz Museum"),r.createElement("a",{href:"https://www.boccf.org/",className:"link-light text-decoration-none"},"Bank of Cypus Cultural Foundation"),r.createElement("a",{href:"https://cycladic.gr/en",className:"link-light text-decoration-none"}," Museum of Cycladic Art")))))))},f=function(e){var t=e.children,a=e.pageTitle;return r.createElement(c.Z,null,r.createElement(s.Z,{pageTitle:a}),r.createElement(u,null),r.createElement(n.Z,{className:"exh_main_content",style:{backgroundColor:"white"},fluid:!0},t),r.createElement(n.Z,{style:{backgroundColor:"black"},fluid:!0},r.createElement(n.Z,{style:{padding:"10px 0"}},r.createElement(i.Z,null,r.createElement(l.Z,{xl:6,xs:12},r.createElement("div",{className:"exh_footer_grid"},r.createElement("div",{className:"footer_img"},r.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/cc-sticker-2007.png"})),r.createElement("div",{className:"footer_partner_text"},r.createElement("p",{style:{color:"white"}},"All rights reserved excluding works shared under Creative Commons licensing. ",r.createElement("br",null),"Licenses are indicated for respective elements.")))),r.createElement(l.Z,{xl:6,xs:12},r.createElement("div",{className:"exh_footer_grid"},r.createElement("div",{className:"footer_img"},r.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/logo-ce-horizontal-en-neg-nb.png"})),r.createElement("div",{className:"footer_partner_text"},r.createElement("p",{style:{color:"white"}},"This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545"))))),r.createElement(i.Z,null,r.createElement(l.Z,{className:"exh_footer_links"},r.createElement("a",{style:{color:"white"},target:"_blank",href:"/exhibitions/conflicts/imprintConflicts"},"Imprint"),r.createElement("a",{style:{color:"white"},target:"_blank",href:"/about/dataprot"},"Privacy"))))))}},62983:function(e,t,a){a.r(t);var r=a(67294),n=a(12623),i=a(20994),l=a(7408),c=a(46594),s=a(19644);t.default=function(){return r.createElement(s.Z,null,r.createElement("div",{className:"exh_container_inner exh_rm_nav exh_container_border"},r.createElement(n.Z,{className:"badgeConflicts rounded-pill"},r.createElement("h1",null,"ReThinking CONFLICTS")),r.createElement("div",{className:"conflicts"},r.createElement("h4",{className:"mt-5"},"Conflicts arise between individuals, social groups or nations and peoples. They are multi-layered and complex. Objects are often preserved as important traces.",r.createElement("br",null),"How conflicts enter the collective memory culture depends on prevailing power structures and the respective representation and narrative. ",r.createElement("br",null),"How can we interpret these today? ",r.createElement("br",null),"How much does today influence our view of past conflicts? ",r.createElement("br",null),"How do we deal with recurring conflicts over the centuries?",r.createElement("br",null),r.createElement("br",null),"In the following, we take a look at three digital objects of different historical conflicts and contexts from different perspectives. These highlight the complexity of conflicts and encourage us to challenge traditional narratives.",r.createElement("br",null),r.createElement("br",null))),r.createElement("div",{id:"objectsConflicts"},r.createElement("div",{className:"exhibObject-grid"},r.createElement("div",{className:"exh_bullet_btn"},"choose one object"),r.createElement(i.Z,null,r.createElement(l.Z,{md:6,xs:12},r.createElement("div",{className:"exhibObject",style:{width:"40vw",height:"30vw"}},r.createElement("img",{alt:"First Object",src:"images/conflicts/small-CherryRageGM.jpg",width:"100%",height:"auto"}),r.createElement("div",{className:"back"},r.createElement("h3",null,"Cherry Rage"),r.createElement("p",null,"What do conflicts have to do with food shortages and rising prices?"),r.createElement("div",{className:"desc_bottom"},r.createElement("img",{className:"arrow_detail",src:"/images/exhibition_assets/arrow_blue.svg",alt:"arrow_details"}),r.createElement(c.Z,{className:"exh_see_more",variant:"primary",href:"exhibitions/conflicts/ConflictObjects/ConflictObjOne"},"see more"))))),r.createElement(l.Z,{md:6,xs:12},r.createElement("div",{className:"exhibObject",style:{width:"30vw",height:"30vw",left:"10vw"}},r.createElement("div",{className:"front"},r.createElement("img",{alt:"Second Object",src:"images/conflicts/small-PyxisMCA.jpg",width:"100%",height:"auto"})),r.createElement("div",{className:"back"},r.createElement("h3",null,"Pyxis"),r.createElement("p",null," To whom did this artful box belong and what conflicts does it hold?"),r.createElement("div",{className:"desc_bottom"},r.createElement("img",{className:"arrow_detail",src:"/images/exhibition_assets/arrow_blue.svg",alt:"arrow_details"}),r.createElement(c.Z,{className:"exh_see_more",variant:"primary",href:"exhibitions/conflicts/ConflictObjects/ConflictObjTwo"},"see more"))))),r.createElement(l.Z,{md:6,xs:12},r.createElement("div",{className:"exhibObject exhibThird",style:{width:"30vw",height:"30vw"}},r.createElement("div",{className:"front"},r.createElement("img",{alt:"Third Object",src:"images/conflicts/small-CiproMapBoCCF.jpg",width:"100%",height:"auto"})),r.createElement("div",{className:"back"},r.createElement("h3",null,"Cipro"),r.createElement("p",null,"What do maps tell us about conflict?"),r.createElement("div",{className:"desc_bottom"},r.createElement("img",{className:"arrow_detail",src:"/images/exhibition_assets/arrow_blue.svg",alt:"arrow_details"}),r.createElement(c.Z,{className:"exh_see_more",variant:"primary",href:"exhibitions/conflicts/ConflictObjects/ConflictObjThree"},"see more"))))))))))}}}]);
//# sourceMappingURL=component---src-pages-exhibitions-conflicts-conflict-exhibition-overview-index-tsx-234e1352be2ba5d769eb.js.map