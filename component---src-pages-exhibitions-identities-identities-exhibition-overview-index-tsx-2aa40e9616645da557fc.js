(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[4588],{12623:function(e,t,a){"use strict";var r=a(96156),n=a(81253),i=a(75900),l=a.n(i),s=a(67294),c=a(99541),o=a(85893);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=s.forwardRef((function(e,t){var a=e.bsPrefix,r=e.bg,i=e.pill,s=e.text,m=e.className,h=e.as,u=void 0===h?"span":h,b=(0,n.Z)(e,["bsPrefix","bg","pill","text","className","as"]),f=(0,c.vE)(a,"badge");return(0,o.jsx)(u,d(d({ref:t},b),{},{className:l()(m,f,i&&"rounded-pill",s&&"text-".concat(s),r&&"bg-".concat(r))}))}));h.displayName="Badge",h.defaultProps={bg:"primary",pill:!1},t.Z=h},46594:function(e,t,a){"use strict";var r=a(96156),n=a(28481),i=a(81253),l=a(75900),s=a.n(l),c=a(67294),o=a(21118),m=a(99541),d=a(85893);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=c.forwardRef((function(e,t){var a=e.as,r=e.bsPrefix,l=e.variant,c=e.size,h=e.active,b=e.className,f=(0,i.Z)(e,["as","bsPrefix","variant","size","active","className"]),g=(0,m.vE)(r,"btn"),E=(0,o.FT)(u({tagName:a},f)),v=(0,n.Z)(E,2),p=v[0],x=v[1].tagName;return(0,d.jsx)(x,u(u(u({},f),p),{},{ref:t,className:s()(b,g,h&&"active",l&&"".concat(g,"-").concat(l),c&&"".concat(g,"-").concat(c),f.href&&f.disabled&&"disabled")}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=b},72487:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var r=a(67294),n=a(33639),i=a(20994),l=a(7408),s=a(58263),c=a(8500),o=a(25444),m=a(50409),d=a(38760),h=a(14746),u=a(29499);var b=function(){var e=r.useState(!1),t=e[0],a=e[1];return(0,u.useLocation)(),r.createElement(r.Fragment,null,r.createElement(m.Z,{collapseOnSelect:!0,expand:"true",fixed:"top",className:"navExhib navExh_red"},r.createElement("div",{className:"header-burger"},r.createElement("div",{className:"hamburger"}),r.createElement("div",{className:"hamburger"}),r.createElement("div",{className:"hamburger"})),r.createElement(n.Z,{fluid:!0,className:"exh_navBar_container rounded-pill"},r.createElement(m.Z.Brand,{href:"#home",as:"div",className:"exhibition_navbar"},r.createElement("div",{className:"exhibition_navbar_inner"},r.createElement("a",{className:"exhibition_menu_link",href:"https://reinherit-hub.eu/"},"ReInHerit"),r.createElement("div",{className:"exh_line"}),r.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://reinherit-hub.eu/exhibitions"},"Exhibition"),r.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://collection.reinherit-hub.eu/"},"Collection"))),r.createElement(m.Z.Toggle,{className:"navbar-toggler",onClick:function(){return a(!0)},style:{color:"white"}}),r.createElement(d.Z,{show:t,onHide:function(){return a(!1)},placement:"end",className:"exhibition_burger_container"},r.createElement(d.Z.Header,{closeButton:!0,className:"exhibition_burger"}),r.createElement("div",{className:"exhibition_burger_inner"},r.createElement(h.Z,{className:"flex-sm-column content-end"},r.createElement(o.rU,{className:"link-light text-decoration-none",to:"/about"},"What is ReInHerit"),r.createElement(o.rU,{className:"link-light text-decoration-none",to:"/about/team"},"Who & Where is ReInHerit"),r.createElement(o.rU,{className:"link-light text-decoration-none",to:"/museumcalls/travelling"},"Host an Exhibition"),r.createElement(o.rU,{className:"link-light text-decoration-none",to:"/museumcalls/digital"},"Object Contribution"),r.createElement("div",{className:"exh_space"}),r.createElement("p",null,"Travelling Exhibition:"),r.createElement("a",{href:"https://www.grazmuseum.at/en/exhibition/rethinking-conflicts-how-are-conflicts-reflected-in-objects/",className:"link-light text-decoration-none"},"Graz Museum"),r.createElement("a",{href:"https://www.boccf.org/",className:"link-light text-decoration-none"},"Bank of Cypus Cultural Foundation"),r.createElement("a",{href:"https://cycladic.gr/en",className:"link-light text-decoration-none"}," Museum of Cycladic Art")))))))},f=function(e){var t=e.children,a=e.pageTitle;return r.createElement(s.Z,null,r.createElement(c.Z,{pageTitle:a}),r.createElement(b,null),r.createElement(n.Z,{className:"exh_main_content",style:{backgroundColor:"white"},fluid:!0},t),r.createElement(n.Z,{style:{backgroundColor:"black"},fluid:!0},r.createElement(n.Z,{style:{padding:"10px 0"}},r.createElement(i.Z,null,r.createElement(l.Z,{xl:6,xs:12},r.createElement("div",{className:"exh_footer_grid"},r.createElement("div",{className:"footer_img"},r.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/cc-sticker-2007.png"})),r.createElement("div",{className:"footer_partner_text"},r.createElement("p",{style:{color:"white"}},"All rights reserved excluding works shared under Creative Commons licensing. ",r.createElement("br",null),"Licenses are indicated for respective elements.")))),r.createElement(l.Z,{xl:6,xs:12},r.createElement("div",{className:"exh_footer_grid"},r.createElement("div",{className:"footer_img"},r.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/logo-ce-horizontal-en-neg-nb.png"})),r.createElement("div",{className:"footer_partner_text"},r.createElement("p",{style:{color:"white"}},"This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545"))))),r.createElement(i.Z,null,r.createElement(l.Z,{className:"exh_footer_links_red"},r.createElement("a",{style:{color:"white"},target:"_blank",href:"/exhibitions/conflicts/imprintConflicts"},"Imprint"),r.createElement("a",{style:{color:"white"},target:"_blank",href:"/about/dataprot"},"Privacy"))))))}},54884:function(e,t,a){"use strict";a.r(t);var r=a(67294),n=a(12623),i=a(20994),l=a(7408),s=a(46594),c=a(72487);t.default=function(){return r.createElement(c.Z,null,r.createElement("div",{className:"exh_container_inner_red exh_rm_nav exh_container_border_red"},r.createElement(n.Z,{className:"badgeIdentities rounded-pill"},r.createElement("h1",null,"ReThinking IDENTITIES")),r.createElement("div",{className:"identities"},r.createElement("h4",{className:"mt-5"},"Today, the notions of gender, sexual diversity and discrimination are more relevant than ever. We constantly face gender issues, instances of discrimination in all spheres of life and changing attitudes towards sexual diversity. However, these phenomena may not be as novel as one would think.",r.createElement("br",null),r.createElement("br",null),"Distinct gender roles have always existed in society from the prehistoric era to our contemporary world. Although it is not easy to make assumptions on the role that women and men held in the Early Cycladic society, we can assume that women and men held different but important roles. More information on the different roles of men and women emerged during the Historic Period.",r.createElement("br",null),r.createElement("br",null),"Written evidence and representations on clay vessels are the main sources of information on daily life and the role of men and women in society. Potters decorated the vessels with scenes from aristocrats’ everyday life and habits. In this exhibition, we focus on three key objects which connect identities from the Early Cycladic society to today’s world.",r.createElement("br",null),r.createElement("br",null))),r.createElement("div",{id:"objectsIdentities"},r.createElement("div",{className:"exhibObject-grid"},r.createElement("div",{className:"exh_bullet_btn"},"choose one object"),r.createElement(i.Z,null,r.createElement(l.Z,{md:6,xs:12},r.createElement("div",{className:"exhibObject",style:{width:"40vw",height:"30vw"}},r.createElement("img",{className:"img-fluid",alt:"First Object",src:"images/identities/small-cycladic-figurine.jpg",width:"100%",height:"auto"}),r.createElement("div",{className:"back"},r.createElement("h3",null,"Cycladic female figurine"),r.createElement("p",null,"Which was the role of the woman represented by the female figurine?"),r.createElement("div",{className:"desc_bottom"},r.createElement("img",{className:"arrow_detail",src:"/images/exhibition_assets/arrow_red.svg",alt:"arrow_details"}),r.createElement(s.Z,{className:"exh_see_more",variant:"primary",href:"exhibitions/identities/IdentitiesObjects/IdentitiesObjOne"},"see more"))))),r.createElement(l.Z,{md:6,xs:12},r.createElement("div",{className:"exhibObject",style:{width:"30vw",height:"30vw",left:"10vw"}},r.createElement("div",{className:"front"},r.createElement("img",{className:"img-fluid",alt:"Second Object",src:"images/identities/small-ida-maly.jpg",width:"100%",height:"auto"})),r.createElement("div",{className:"back"},r.createElement("h3",null,"Self-portrait"),r.createElement("p",null,"Which was the role of the woman in the 1920’s?"),r.createElement("div",{className:"desc_bottom"},r.createElement("img",{className:"arrow_detail",src:"/images/exhibition_assets/arrow_red.svg",alt:"arrow_details"}),r.createElement(s.Z,{className:"exh_see_more",variant:"primary",href:"exhibitions/identities/IdentitiesObjects/IdentitiesObjTwo"},"see more")))))),r.createElement(i.Z,{className:"mt-5"},r.createElement(l.Z,{md:6,xs:12},r.createElement("div",{className:"exhibObject exhibThird",style:{width:"30vw",height:"30vw"}},r.createElement("div",{className:"front"},r.createElement("img",{className:"img-fluid",alt:"Third Object",src:"images/identities/small-temple-boy.jpg",width:"100%",height:"auto"})),r.createElement("div",{className:"back"},r.createElement("h3",null,"Temple Boy"),r.createElement("p",null,"What is a votive offering? "),r.createElement("div",{className:"desc_bottom"},r.createElement("img",{className:"arrow_detail",src:"/images/exhibition_assets/arrow_red.svg",alt:"arrow_details"}),r.createElement(s.Z,{className:"exh_see_more",variant:"primary",href:"exhibitions/identities/IdentitiesObjects/IdentitiesObjThree"},"see more"))))))))))}}}]);
//# sourceMappingURL=component---src-pages-exhibitions-identities-identities-exhibition-overview-index-tsx-2aa40e9616645da557fc.js.map