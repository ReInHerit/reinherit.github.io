"use strict";(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[9962],{12623:function(e,t,n){var a=n(96156),r=n(81253),i=n(80732),c=n.n(i),l=n(67294),s=n(99541),o=n(85893),m=["bsPrefix","bg","pill","text","className","as"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=l.forwardRef((function(e,t){var n=e.bsPrefix,a=e.bg,i=e.pill,l=e.text,h=e.className,b=e.as,f=void 0===b?"span":b,d=(0,r.Z)(e,m),g=(0,s.vE)(n,"badge");return(0,o.jsx)(f,u(u({ref:t},d),{},{className:c()(h,g,i&&"rounded-pill",l&&"text-".concat(l),a&&"bg-".concat(a))}))}));b.displayName="Badge",b.defaultProps={bg:"primary",pill:!1},t.Z=b},46594:function(e,t,n){var a=n(96156),r=n(28481),i=n(81253),c=n(80732),l=n.n(c),s=n(67294),o=n(21118),m=n(99541),h=n(85893),u=["as","bsPrefix","variant","size","active","className"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=s.forwardRef((function(e,t){var n=e.as,a=e.bsPrefix,c=e.variant,s=e.size,b=e.active,d=e.className,g=(0,i.Z)(e,u),p=(0,m.vE)(a,"btn"),E=(0,o.FT)(f({tagName:n},g)),x=(0,r.Z)(E,2),v=x[0],_=x[1].tagName;return(0,h.jsx)(_,f(f(f({},g),v),{},{ref:t,className:l()(d,p,b&&"active",c&&"".concat(p,"-").concat(c),s&&"".concat(p,"-").concat(s),g.href&&g.disabled&&"disabled")}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=d},19644:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r=n(33639),i=n(20994),c=n(7408),l=n(58263),s=n(8500),o=n(25444),m=n(50985),h=n(40603),u=n(21785),b=n(29499);var f=function(){var e=a.useState(!1),t=e[0],n=e[1],i=(0,b.useLocation)(),c=["/exhibitions/conflicts/ConflictExhibitionOverview","/exhibitions/conflicts/ConflictObjects/ConflictObjOne","/exhibitions/conflicts/ConflictObjects/ConflictObjTwo","/exhibitions/conflicts/ConflictObjects/ConflictObjThree"].includes(i.pathname);return a.createElement(a.Fragment,null,!c&&a.createElement(m.Z,{collapseOnSelect:!0,expand:"true",fixed:"top",className:"navExhib navExh_blue"},a.createElement("div",{className:"header-burger"},a.createElement("div",{className:"hamburger"}),a.createElement("div",{className:"hamburger"}),a.createElement("div",{className:"hamburger"})),a.createElement(r.Z,{fluid:!0,className:"exh_navBar_container rounded-pill"},a.createElement(m.Z.Brand,{href:"#home",as:"div",className:"exhibition_navbar"},a.createElement("div",{className:"exhibition_navbar_inner"},a.createElement("a",{className:"exhibition_menu_link",href:"https://reinherit-hub.eu/"},"ReInHerit"),a.createElement("div",{className:"exh_line"}),a.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://reinherit-hub.eu/exhibitions"},"Exhibition"),a.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://collection.reinherit-hub.eu/"},"Collection"))),a.createElement(m.Z.Toggle,{className:"navbar-toggler",onClick:function(){return n(!0)},style:{color:"white"}}),a.createElement(h.Z,{show:t,onHide:function(){return n(!1)},placement:"end",className:"exhibition_burger_container"},a.createElement(h.Z.Header,{closeButton:!0,className:"exhibition_burger"}),a.createElement("div",{className:"exhibition_burger_inner"},a.createElement(u.Z,{className:"flex-sm-column content-end"},a.createElement(o.rU,{className:"link-light text-decoration-none",to:"/about"},"What is ReInHerit"),a.createElement(o.rU,{className:"link-light text-decoration-none",to:"/about"},"Who & Where is ReInHerit"),a.createElement("a",{className:"link-light text-decoration-none",href:"https://collection.reinherit-hub.eu/takeover"},"Takeover"),a.createElement("div",{className:"exh_space"}),a.createElement("p",null,"Travelling Exhibition:"),a.createElement("a",{href:"https://www.grazmuseum.at/en/exhibition/rethinking-conflicts-how-are-conflicts-reflected-in-objects/",className:"link-light text-decoration-none"},"Graz Museum"),a.createElement("a",{href:"https://www.boccf.org/",className:"link-light text-decoration-none"},"Bank of Cypus Cultural Foundation"),a.createElement("a",{href:"https://cycladic.gr/en",className:"link-light text-decoration-none"}," Museum of Cycladic Art")))))))},d=function(e){var t=e.children,n=e.pageTitle;return a.createElement(l.Z,null,a.createElement(s.Z,{pageTitle:n}),a.createElement(f,null),a.createElement(r.Z,{className:"exh_main_content",style:{backgroundColor:"white"},fluid:!0},t),a.createElement(r.Z,{style:{backgroundColor:"black"},fluid:!0},a.createElement(r.Z,{style:{padding:"10px 0"}},a.createElement(i.Z,null,a.createElement(c.Z,{xl:6,xs:12},a.createElement("div",{className:"exh_footer_grid"},a.createElement("div",{className:"footer_img"},a.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/cc-sticker-2007.png"})),a.createElement("div",{className:"footer_partner_text"},a.createElement("p",{style:{color:"white"}},"All rights reserved excluding works shared under Creative Commons licensing. ",a.createElement("br",null),"Licenses are indicated for respective elements.")))),a.createElement(c.Z,{xl:6,xs:12},a.createElement("div",{className:"exh_footer_grid"},a.createElement("div",{className:"footer_img"},a.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/logo-ce-horizontal-en-neg-nb.png"})),a.createElement("div",{className:"footer_partner_text"},a.createElement("p",{style:{color:"white"}},"This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545"))))),a.createElement(i.Z,null,a.createElement(c.Z,{className:"exh_footer_links"},a.createElement("a",{style:{color:"white"},target:"_blank",href:"/exhibitions/conflicts/imprintConflicts"},"Imprint"),a.createElement("a",{style:{color:"white"},target:"_blank",href:"/about/dataprot"},"Privacy"))))))}},9219:function(e,t,n){n.r(t);var a=n(67294),r=n(12623),i=n(20994),c=n(7408),l=n(46594),s=n(19644);n(9186);t.default=function(){return a.createElement(s.Z,null,a.createElement("div",{className:"exh_container_inner exh_rm_nav exh_container_border"},a.createElement("div",{className:"d-grid gap-2"},a.createElement(r.Z,{className:"badgeConflicts rounded-pill"},a.createElement("h1",null,"ReThinking CONFLICTS"))),a.createElement("div",{className:"conflicts"},a.createElement("h4",{className:"conflicts"},"The Cherry Rage 1920 is a woodcut by the Austrian artist Axl Leskoschek. Created in 1955 , it intentionally uses the technique of the woodcut, which was a medium of protest art. The appeal of the woodcut is its reproductibility. The stencil, cut from wood is reusable and can produce infinite copies."),a.createElement(r.Z,{className:"badgeConflicts rounded-pill"},a.createElement("h1",null,"The Story of the Cherry Rage")),a.createElement("div",{className:"exh_h5p_iframe"},a.createElement("iframe",{src:"https://collection.reinherit-hub.eu/h5p-thecherryrage.html",width:"1000",height:"700"})),a.createElement("div",{className:"exh_h5p_iframe iframe_border"},a.createElement("iframe",{src:"https://collection.reinherit-hub.eu/h5p-thecherryrage_2.html",width:"1000",height:"720"})),a.createElement("div",{className:"exh_object_btm"},a.createElement("div",{className:"exh_bullet_btn"},"Get to know other objects"),a.createElement(i.Z,null,a.createElement(c.Z,{md:6,xs:12},a.createElement("a",{href:"exhibitions/conflicts/ConflictObjects/ConflictObjTwo"},a.createElement("img",{alt:"Second Object",src:"images/conflicts/small-PyxisMCA.jpg",height:"auto",width:"80%","max-width":"80%"}))),a.createElement(c.Z,{md:6,xs:12},a.createElement("a",{href:"exhibitions/conflicts/ConflictObjects/ConflictObjThree"},a.createElement("img",{alt:"Third Object",src:"images/conflicts/small-CiproMapBoCCF.jpg",height:"auto",width:"80%","max-width":"80%"}))))),a.createElement("div",{className:"exh_submit_button"},a.createElement("div",{className:"exh_arrow_container"},a.createElement("img",{className:"exh_blue_arrow",src:"/images/exhibition_assets/arrow_blue.svg",alt:""})),a.createElement(l.Z,{className:"exh_submit_btn",href:"exhibitions/conflicts/ConflictQuestions/4thQuestionConflict"},a.createElement("h1",{style:{color:"white"}},"Exit Exhibition"))))))}},9186:function(){}}]);
//# sourceMappingURL=component---src-pages-exhibitions-conflicts-conflict-objects-conflict-obj-one-index-tsx-d2b137d95d90a44773d6.js.map