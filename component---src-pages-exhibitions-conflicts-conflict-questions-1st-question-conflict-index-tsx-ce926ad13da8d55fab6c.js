(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[7117],{19644:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var a=n(67294),r=n(33639),i=n(20994),l=n(7408),o=n(58263),c=n(8500),s=n(25444),m=n(50409),u=n(33316),h=n(14746),d=n(29499);var f=function(){var e=a.useState(!1),t=e[0],n=e[1];return(0,d.useLocation)(),a.createElement(a.Fragment,null,a.createElement(m.Z,{collapseOnSelect:!0,expand:"true",fixed:"top",className:"navExhib navExh_blue"},a.createElement("div",{className:"header-burger"},a.createElement("div",{className:"hamburger"}),a.createElement("div",{className:"hamburger"}),a.createElement("div",{className:"hamburger"})),a.createElement(r.Z,{fluid:!0,className:"exh_navBar_container rounded-pill"},a.createElement(m.Z.Brand,{href:"#home",as:"div",className:"exhibition_navbar"},a.createElement("div",{className:"exhibition_navbar_inner"},a.createElement("a",{className:"exhibition_menu_link",href:"https://reinherit-hub.eu/"},"ReInHerit"),a.createElement("div",{className:"exh_line"}),a.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://reinherit-hub.eu/exhibitions"},"Exhibition"),a.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://collection.reinherit-hub.eu/"},"Collection"))),a.createElement(m.Z.Toggle,{className:"navbar-toggler",onClick:function(){return n(!0)},style:{color:"white"}}),a.createElement(u.Z,{show:t,onHide:function(){return n(!1)},placement:"end",className:"exhibition_burger_container"},a.createElement(u.Z.Header,{closeButton:!0,className:"exhibition_burger"}),a.createElement("div",{className:"exhibition_burger_inner"},a.createElement(h.Z,{className:"flex-sm-column content-end"},a.createElement(s.rU,{className:"link-light text-decoration-none",to:"/about"},"What is ReInHerit"),a.createElement(s.rU,{className:"link-light text-decoration-none",to:"/about/team"},"Who & Where is ReInHerit"),a.createElement(s.rU,{className:"link-light text-decoration-none",to:"/museumcalls/travelling"},"Host an Exhibition"),a.createElement(s.rU,{className:"link-light text-decoration-none",to:"/museumcalls/digital"},"Object Contribution"),a.createElement("div",{className:"exh_space"}),a.createElement("p",null,"Travelling Exhibition:"),a.createElement("a",{href:"https://www.grazmuseum.at/en/exhibition/rethinking-conflicts-how-are-conflicts-reflected-in-objects/",className:"link-light text-decoration-none"},"Graz Museum"),a.createElement("a",{href:"https://www.boccf.org/",className:"link-light text-decoration-none"},"Bank of Cypus Cultural Foundation"),a.createElement("a",{href:"https://cycladic.gr/en",className:"link-light text-decoration-none"}," Museum of Cycladic Art")))))))},E=function(e){var t=e.children,n=e.pageTitle;return a.createElement(o.Z,null,a.createElement(c.Z,{pageTitle:n}),a.createElement(f,null),a.createElement(r.Z,{className:"exh_main_content",style:{backgroundColor:"white"},fluid:!0},t),a.createElement(r.Z,{style:{backgroundColor:"black"},fluid:!0},a.createElement(r.Z,{style:{padding:"10px 0"}},a.createElement(i.Z,null,a.createElement(l.Z,{xl:6,xs:12},a.createElement("div",{className:"exh_footer_grid"},a.createElement("div",{className:"footer_img"},a.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/cc-sticker-2007.png"})),a.createElement("div",{className:"footer_partner_text"},a.createElement("p",{style:{color:"white"}},"All rights reserved excluding works shared under Creative Commons licensing. ",a.createElement("br",null),"Licenses are indicated for respective elements.")))),a.createElement(l.Z,{xl:6,xs:12},a.createElement("div",{className:"exh_footer_grid"},a.createElement("div",{className:"footer_img"},a.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/logo-ce-horizontal-en-neg-nb.png"})),a.createElement("div",{className:"footer_partner_text"},a.createElement("p",{style:{color:"white"}},"This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545"))))),a.createElement(i.Z,null,a.createElement(l.Z,{className:"exh_footer_links"},a.createElement("a",{style:{color:"white"},target:"_blank",href:"/exhibitions/conflicts/imprintConflicts"},"Imprint"),a.createElement("a",{style:{color:"white"},target:"_blank",href:"/about/dataprot"},"Privacy"))))))}},96909:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(67294),r=n(12623),i=n(20994),l=n(7408),o=n(46594),c=n(19644),s=n(92960),m=function(){var e=(0,a.useState)(""),t=e[0],n=e[1];return(0,a.useEffect)((function(){localStorage.setItem("countryConflict",JSON.stringify(t))}),[t]),a.createElement("div",{className:"exh_country_selection"},a.createElement("h3",null,"But first, where are you?"),a.createElement(s.Px,{value:t,onChange:n}))},u=n(92137),h=n(87757),d=n.n(h),f=n(3339),E=n(87265),g=n(91813),p=function(){var e=(0,a.useState)(),t=e[0],n=e[1],r="undefined"!=typeof window?localStorage.getItem("countryConflict"):null,i=new E.GoogleSpreadsheet(g.sheet_id),l=function(){var e=(0,u.Z)(d().mark((function e(){var n,a,l;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.useServiceAccountAuth(g);case 3:return e.next=5,i.loadInfo();case 5:return n=i.sheetsById[538400691],a=JSON.stringify(t),e.next=9,n.addRow({country:r,questionOne:a});case 9:return l=e.sent,e.abrupt("return",l);case 13:e.prev=13,e.t0=e.catch(0),console.error("Error: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),c=function(e){n(e.target.value)},s=function(){var e=(0,u.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l();case 3:window.location.href="/exhibitions/conflicts/ConflictQuestions/2ndQuestionConflict";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.createElement(a.Fragment,null,a.createElement("h1",{className:"mt-5"},'"Violence is no solution" – that\'s what many people say when it comes to conflicts. They wish for a world in which conflicts are resolved without violence. What do you think: Can such a world become reality or will it remain a pipe dream?'),a.createElement(f.Z,{onSubmit:s},["No. Such a world is not possible. Whether you like it or not, violence is in fact always a solution. It will always remain a solution. It is that simple.","In a world without guns, the gun owner is king. At least that is what modern evolutionary biology says. Anyone who has the opportunity to use violence will eventually do so.","Those who starve or are starved are more likely to resort to violence. Because if you have nothing to lose, violence is always an option. Precisely because one has nothing left to lose. Conversely, this also means that those who want a world without conflicts may also have to accept the redistribution of wealth or resources.","Violence is never my first option. But if others resort to violence, I would defend myself – if necessary with violence.","I don't see why a world without violence shouldn't be possible. There is always an alternative to violence. For those who have realized that violence only generates counter-violence, renunciation of violence is the only way to improvement."].map((function(e,n){return a.createElement(f.Z.Check,{type:"radio",name:"exh_questions",value:e,label:e,id:"answer-"+n,key:"answer-"+n,checked:e===t,onChange:c})})),a.createElement("div",{className:"exh_submit_button"},a.createElement("div",{className:"exh_arrow_container"},a.createElement("img",{className:"exh_blue_arrow",src:"/images/exhibition_assets/arrow_blue.svg",alt:""})),a.createElement(o.Z,{className:"exh_submit_btn",type:"submit",disabled:!t,onClick:s},a.createElement("h1",{style:{color:"white"}},"Next Question")))))},v=function(){return a.createElement(c.Z,null,a.createElement("div",{className:"exh_container_inner mt-5"},a.createElement(r.Z,{className:"badgeConflicts rounded-pill"},a.createElement("h1",null,"ReThinking CONFLICTS")),a.createElement("div",{className:"conflictsQuestions exh_question_intro_text"},a.createElement("h4",null,"How do you approach conflicts?"),a.createElement("p",null,"Note data protection: ",a.createElement("br",null),"the collected data is used exclusively for statistics purposes within the exhibition."),a.createElement(m,null)),a.createElement("div",{className:"conflictsAnswers"},a.createElement("h2",null,"Question: 1"),a.createElement(p,null))),a.createElement("div",null,a.createElement(i.Z,{className:"mt-5"},a.createElement(l.Z,{sm:10}),a.createElement(l.Z,{sm:2},a.createElement(o.Z,{variant:"outline-primary",size:"lg",className:"rounded-pill",href:"exhibitions/conflicts/ConflictExhibitionOverview/"},a.createElement("h4",null,"Skip questions"))))))}},91813:function(e){"use strict";e.exports=JSON.parse('{"type":"service_account","project_id":"reinheritexhibitionsmap","private_key_id":"a87b5d31c51f71ef5d9fa0aa20ff5907ea7d4bcd","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCUZd05/cS3egGo\\nzAw7nAAoWNkcowvwn5yA2gFd6HfLpA0b5G16ar0pjneS6ExBUVuOHbHeKqSYf4DY\\nWbFkeOQIhFYAbIlBUfeGoUCpRWRrlWEr7BLkYNm+r0qOCNnf8tehHwTQEEh1ORP0\\nUUvzb4fWgnIErScr2RiUrW7VlUAuVixU5SvHtWcAQZdzqovls2JrJSr32HHWjXVN\\nxQUd2CfUjaXub0qh1Iflwyt8vpCbByClhWObIBBbce2g94B7Vaeik5fttzCWIOrW\\nsMy7QgAav+wo/aoAMSfmWXrj/BjnNxNjRDWIaVd/vFiCTI30PfXF96Ptrq994RXE\\ndOk9dqi3AgMBAAECggEAGLXxpbN1K1w8pH/91Xs/p3hMBvG7jkD1zZr/uUR5lkZm\\nDGv4MvdNMntPu/3EnOfQSBT3xlfxepdYvC4LVQCwcB6hN4bbQC5G+nslikpM04FX\\nYfn4l2DtQUxtLMOajCki8Oh6Y68icaqkgP18mTfMNdMY62Bt8mY/KprKpvQocM6V\\nvzG06/oUTdDdtm1lcFb6dZzhqLFItKqoiN+Ob6suml12pv103Wkk9GOzb0D0XPix\\n8rgbNEtzV7TY694/CsXKnh1JZFO9HRGIIDz6EYxMhi72kJ7eYLGtLg+ZIvOE9F/r\\n40PDEXJdOS6V1gto6azUK5d54/UE4KBQQBP0Yp8luQKBgQDEVN1S+VWpex/6+XIL\\nwKMu5UPNCKXTefsqSc7C2TE2WAUCQIau1etl8NoIy3dqJSxRgCc3ALwZ5gV0MZPD\\nNdDjqKaaZt13kvqqq9ojxJVL+op6mTNpcmgHrlroNCTgN6ErqDr7sjvF1YgFqB4A\\nxLel/3UNKk38c9JMXKxWh12A4wKBgQDBf6IJCzOD0K+1gCEvqmnpDXYJ/LwHGpkp\\nXSXrNZPRhgJjKJG+/K4gZVqteP4QM0Fe3XGNc+1RwSp+uEtAQxU2XGfgVI2LG+f8\\n5Po3Lb751RuBMdRc2tJBCwG2NpfQ4rQ7Bsp9oEjDzkmlkyT7RfTxxLBMOeQXzQPP\\nqNoV5lzlHQKBgFOScFfWjNFE+PsDXbmE+bGHpBHOAZCAlxqMKngkrd8dHpyzzOD1\\nbGuLV7Rwr9c+FZxnucmfBXLcyCuKwwRQjyepbanB6bnxlcQ6vPOGxap+7p17Qzg6\\nm+/RFx9Kuvu6kl+cD+d+GhV/bJRD2Omo0yfVEwVUobe5saYRuMZofrPTAoGAeuv6\\n4qXj/uv2g2W3L1Gh4HQ1tViBlj22aMmMyiQKGIN6RsXB+MMKVvgsJ6GCPIZjE8G3\\nXjXz4AjHVyL6YwN6mUMQljkAhgufT0+jCKSd+pX/2A3wq2AzSzCT0M5TmVY7Sngg\\n8Ld/IiyNKosUZi/l0CS0Hmh0Vw5dSnEowdrKzp0CgYB3F+mXpAZc+LIfuzdUjva/\\nmLgkODrjRh/8EsKoSpbHtAD6I92C70yHAJn8qBQM2ATzp6FoM9iwEF56rbYxKoha\\nW1hoH4nfAxKwqu0mXY/TS4ILdIwjsraL8HBjbXbeHut8TluOMraSitOtRFiKHG6g\\nud+eWXKElsI9GltwhE9WAA==\\n-----END PRIVATE KEY-----\\n","client_email":"reinheritexhibitionsmap@reinheritexhibitionsmap.iam.gserviceaccount.com","client_id":"113827058909396068788","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/reinheritexhibitionsmap%40reinheritexhibitionsmap.iam.gserviceaccount.com","sheet_id":"1DVrPgsLw5hR2BSNlWQr2w3Aq8FQ-TprBuAysd81gJXs","api_key":"AIzaSyCNuVOEkF5WyjVWW3IOt-YE3KNN9NawHHw"}')}}]);
//# sourceMappingURL=component---src-pages-exhibitions-conflicts-conflict-questions-1st-question-conflict-index-tsx-ce926ad13da8d55fab6c.js.map