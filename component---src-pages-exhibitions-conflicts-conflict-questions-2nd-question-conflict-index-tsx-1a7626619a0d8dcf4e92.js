(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[8570],{19644:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var a=n(67294),r=n(33639),i=n(20994),l=n(7408),o=n(58263),c=n(8500),s=n(25444),m=n(50409),u=n(38760),h=n(14746),d=n(29499);var f=function(){var e=a.useState(!1),t=e[0],n=e[1];return(0,d.useLocation)(),a.createElement(a.Fragment,null,a.createElement(m.Z,{collapseOnSelect:!0,expand:"true",fixed:"top",className:"navExhib navExh_blue"},a.createElement("div",{className:"header-burger"},a.createElement("div",{className:"hamburger"}),a.createElement("div",{className:"hamburger"}),a.createElement("div",{className:"hamburger"})),a.createElement(r.Z,{fluid:!0,className:"exh_navBar_container rounded-pill"},a.createElement(m.Z.Brand,{href:"#home",as:"div",className:"exhibition_navbar"},a.createElement("div",{className:"exhibition_navbar_inner"},a.createElement("a",{className:"exhibition_menu_link",href:"https://reinherit-hub.eu/"},"ReInHerit"),a.createElement("div",{className:"exh_line"}),a.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://reinherit-hub.eu/exhibitions"},"Exhibition"),a.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://collection.reinherit-hub.eu/"},"Collection"))),a.createElement(m.Z.Toggle,{className:"navbar-toggler",onClick:function(){return n(!0)},style:{color:"white"}}),a.createElement(u.Z,{show:t,onHide:function(){return n(!1)},placement:"end",className:"exhibition_burger_container"},a.createElement(u.Z.Header,{closeButton:!0,className:"exhibition_burger"}),a.createElement("div",{className:"exhibition_burger_inner"},a.createElement(h.Z,{className:"flex-sm-column content-end"},a.createElement(s.rU,{className:"link-light text-decoration-none",to:"/about"},"What is ReInHerit"),a.createElement(s.rU,{className:"link-light text-decoration-none",to:"/about/team"},"Who & Where is ReInHerit"),a.createElement(s.rU,{className:"link-light text-decoration-none",to:"/museumcalls/travelling"},"Host an Exhibition"),a.createElement(s.rU,{className:"link-light text-decoration-none",to:"/museumcalls/digital"},"Object Contribution"),a.createElement("div",{className:"exh_space"}),a.createElement("p",null,"Travelling Exhibition:"),a.createElement("a",{href:"https://www.grazmuseum.at/en/exhibition/rethinking-conflicts-how-are-conflicts-reflected-in-objects/",className:"link-light text-decoration-none"},"Graz Museum"),a.createElement("a",{href:"https://www.boccf.org/",className:"link-light text-decoration-none"},"Bank of Cypus Cultural Foundation"),a.createElement("a",{href:"https://cycladic.gr/en",className:"link-light text-decoration-none"}," Museum of Cycladic Art")))))))},g=function(e){var t=e.children,n=e.pageTitle;return a.createElement(o.Z,null,a.createElement(c.Z,{pageTitle:n}),a.createElement(f,null),a.createElement(r.Z,{className:"exh_main_content",style:{backgroundColor:"white"},fluid:!0},t),a.createElement(r.Z,{style:{backgroundColor:"black"},fluid:!0},a.createElement(r.Z,{style:{padding:"10px 0"}},a.createElement(i.Z,null,a.createElement(l.Z,{xl:6,xs:12},a.createElement("div",{className:"exh_footer_grid"},a.createElement("div",{className:"footer_img"},a.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/cc-sticker-2007.png"})),a.createElement("div",{className:"footer_partner_text"},a.createElement("p",{style:{color:"white"}},"All rights reserved excluding works shared under Creative Commons licensing. ",a.createElement("br",null),"Licenses are indicated for respective elements.")))),a.createElement(l.Z,{xl:6,xs:12},a.createElement("div",{className:"exh_footer_grid"},a.createElement("div",{className:"footer_img"},a.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/logo-ce-horizontal-en-neg-nb.png"})),a.createElement("div",{className:"footer_partner_text"},a.createElement("p",{style:{color:"white"}},"This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545"))))),a.createElement(i.Z,null,a.createElement(l.Z,{className:"exh_footer_links"},a.createElement("a",{style:{color:"white"},target:"_blank",href:"/exhibitions/conflicts/imprintConflicts"},"Imprint"),a.createElement("a",{style:{color:"white"},target:"_blank",href:"/about/dataprot"},"Privacy"))))))}},72240:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(67294),r=n(12623),i=n(19644),l=n(92137),o=n(87757),c=n.n(o),s=n(3339),m=n(46594),u=n(87265),h=n(91813),d=function(){var e=(0,a.useState)(),t=e[0],n=e[1],r="undefined"!=typeof window?localStorage.getItem("countryConflict"):null,i=new u.GoogleSpreadsheet(h.sheet_id),o=function(){var e=(0,l.Z)(c().mark((function e(){var n,a,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.useServiceAccountAuth(h);case 3:return e.next=5,i.loadInfo();case 5:return n=i.sheetsById[713196235],a=JSON.stringify(t),e.next=9,n.addRow({country:r,questionTwo:a});case 9:return l=e.sent,e.abrupt("return",l);case 13:e.prev=13,e.t0=e.catch(0),console.error("Error: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),d=function(e){n(e.target.value)},f=function(){var e=(0,l.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,o();case 3:window.location.href="/exhibitions/conflicts/ConflictQuestions/3rdQuestionConflict";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.createElement(a.Fragment,null,a.createElement("h1",{className:"mt-5"},"Is it bad if you fight back?"),a.createElement(s.Z,{onSubmit:f},["No. Resistance can be a very good thing and sometimes even becomes a duty. Often you even have to defend what is important to you. In this case I not only have the right but also the duty to defend myself.","I don't know if it is evil to fight back. But for my part I abhor any form of violence. Therefore, if in doubt, I would not defend myself.","Anyone who thinks it is evil to stand up for one's freedom, for example, morally equates oppressor and victim. But that is wrong. A perpetrator is never on the same moral level as the victim. So it is not evil to fight back.","Anyone who resists creates counter-violence with his violence. This definitely leads to a spiral of violence. So it may not be evil to fight back, but it is at least unwise.","Imagine your parents' house suddenly being illegally occupied. What should prevent you from fighting back? Nothing. Any questions?"].map((function(e,n){return a.createElement(s.Z.Check,{type:"radio",name:"exh_questions",value:e,label:e,id:"answer-"+n,key:"answer-"+n,checked:e===t,onChange:d})})),a.createElement("div",{className:"exh_submit_button"},a.createElement("div",{className:"exh_arrow_container"},a.createElement("img",{className:"exh_blue_arrow",src:"/images/exhibition_assets/arrow_blue.svg",alt:""})),a.createElement(m.Z,{className:"exh_submit_btn",type:"submit",disabled:!t,onClick:f},a.createElement("h1",{style:{color:"white"}},"Next Question")))))},f=function(){return a.createElement(i.Z,null,a.createElement("div",{className:"exh_container_inner mt-5"},a.createElement(r.Z,{className:"badgeConflicts rounded-pill"},a.createElement("h1",null,"ReThinking CONFLICTS")),a.createElement("div",{className:"conflictsAnswers"},a.createElement("h2",null,"Question: 2"),a.createElement(d,null))))}},42473:function(e){"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=component---src-pages-exhibitions-conflicts-conflict-questions-2nd-question-conflict-index-tsx-1a7626619a0d8dcf4e92.js.map