(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[1181],{19644:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(67294),i=n(33639),r=n(20994),o=n(7408),l=n(58263),s=n(8500),c=n(25444),m=n(50409),u=n(38760),h=n(14746),d=n(29499);var g=function(){var e=a.useState(!1),t=e[0],n=e[1];return(0,d.useLocation)(),a.createElement(a.Fragment,null,a.createElement(m.Z,{collapseOnSelect:!0,expand:"true",fixed:"top",className:"navExhib navExh_blue"},a.createElement("div",{className:"header-burger"},a.createElement("div",{className:"hamburger"}),a.createElement("div",{className:"hamburger"}),a.createElement("div",{className:"hamburger"})),a.createElement(i.Z,{fluid:!0,className:"exh_navBar_container rounded-pill"},a.createElement(m.Z.Brand,{href:"#home",as:"div",className:"exhibition_navbar"},a.createElement("div",{className:"exhibition_navbar_inner"},a.createElement("a",{className:"exhibition_menu_link",href:"https://reinherit-hub.eu/"},"ReInHerit"),a.createElement("div",{className:"exh_line"}),a.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://reinherit-hub.eu/exhibitions"},"Exhibition"),a.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://collection.reinherit-hub.eu/"},"Collection"))),a.createElement(m.Z.Toggle,{className:"navbar-toggler",onClick:function(){return n(!0)},style:{color:"white"}}),a.createElement(u.Z,{show:t,onHide:function(){return n(!1)},placement:"end",className:"exhibition_burger_container"},a.createElement(u.Z.Header,{closeButton:!0,className:"exhibition_burger"}),a.createElement("div",{className:"exhibition_burger_inner"},a.createElement(h.Z,{className:"flex-sm-column content-end"},a.createElement(c.rU,{className:"link-light text-decoration-none",to:"/about"},"What is ReInHerit"),a.createElement(c.rU,{className:"link-light text-decoration-none",to:"/about/team"},"Who & Where is ReInHerit"),a.createElement(c.rU,{className:"link-light text-decoration-none",to:"/museumcalls/travelling"},"Host an Exhibition"),a.createElement(c.rU,{className:"link-light text-decoration-none",to:"/museumcalls/digital"},"Object Contribution"),a.createElement("div",{className:"exh_space"}),a.createElement("p",null,"Travelling Exhibition:"),a.createElement("a",{href:"https://www.grazmuseum.at/en/exhibition/rethinking-conflicts-how-are-conflicts-reflected-in-objects/",className:"link-light text-decoration-none"},"Graz Museum"),a.createElement("a",{href:"https://www.boccf.org/",className:"link-light text-decoration-none"},"Bank of Cypus Cultural Foundation"),a.createElement("a",{href:"https://cycladic.gr/en",className:"link-light text-decoration-none"}," Museum of Cycladic Art")))))))},p=function(e){var t=e.children,n=e.pageTitle;return a.createElement(l.Z,null,a.createElement(s.Z,{pageTitle:n}),a.createElement(g,null),a.createElement(i.Z,{className:"exh_main_content",style:{backgroundColor:"white"},fluid:!0},t),a.createElement(i.Z,{style:{backgroundColor:"black"},fluid:!0},a.createElement(i.Z,{style:{padding:"10px 0"}},a.createElement(r.Z,null,a.createElement(o.Z,{xl:6,xs:12},a.createElement("div",{className:"exh_footer_grid"},a.createElement("div",{className:"footer_img"},a.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/cc-sticker-2007.png"})),a.createElement("div",{className:"footer_partner_text"},a.createElement("p",{style:{color:"white"}},"All rights reserved excluding works shared under Creative Commons licensing. ",a.createElement("br",null),"Licenses are indicated for respective elements.")))),a.createElement(o.Z,{xl:6,xs:12},a.createElement("div",{className:"exh_footer_grid"},a.createElement("div",{className:"footer_img"},a.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/logo-ce-horizontal-en-neg-nb.png"})),a.createElement("div",{className:"footer_partner_text"},a.createElement("p",{style:{color:"white"}},"This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545"))))),a.createElement(r.Z,null,a.createElement(o.Z,{className:"exh_footer_links"},a.createElement("a",{style:{color:"white"},target:"_blank",href:"/exhibitions/conflicts/imprintConflicts"},"Imprint"),a.createElement("a",{style:{color:"white"},target:"_blank",href:"/about/dataprot"},"Privacy"))))))}},35765:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(67294),i=n(12623),r=n(19644),o=n(92137),l=n(87757),s=n.n(l),c=n(3339),m=n(46594),u=n(87265),h=n(35152),d=function(){var e=(0,a.useState)(),t=e[0],n=e[1],i="undefined"!=typeof window?localStorage.getItem("countryIdentities"):null,r=new u.GoogleSpreadsheet(h.sheet_id),l=function(){var e=(0,o.Z)(s().mark((function e(){var n,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.useServiceAccountAuth(h);case 3:return e.next=5,r.loadInfo();case 5:return n=r.sheetsById[678756205],a=JSON.stringify(t),e.next=9,n.addRow({country:i,questionFour:a});case 9:return o=e.sent,e.abrupt("return",o);case 13:e.prev=13,e.t0=e.catch(0),console.error("Error: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),d=function(e){n(e.target.value)},g=function(){var e=(0,o.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l();case 3:window.location.href="exhibitions/identities/IdentitiesExhibitionMap";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.createElement(a.Fragment,null,a.createElement("h1",{className:"mt-5"},'"Identity" means: having the answer to the question of who I actually am. "Gender identity" therefore means: having the answer to the question of which social gender I actually belong to. How important is the answer to this question to you?'),a.createElement(c.Z,{onSubmit:g},["It is very important for me to know which social gender I belong to. I am part of my gender and I cannot change it like my internet provider.","In my opinion too much attention is paid to the issue of identity. It does not matter if I have an identity of any kind. The only thing that matters is my own happiness.","For me, the question of identity is of no interest. I do not even know who I am. And if I knew, what good would it do me?","I refuse the question of my identity. It presupposes that there is something in me that always remains the same - my nature, including me as a sexual being. But that is not the case with me. To me, chasing my identity means chasing a ghost.","The world we live in is still dominated by gender roles. That is the reason why I am interested in it. However, I hope that in future generations it will not matter what gender you belong to."].map((function(e,n){return a.createElement(c.Z.Check,{type:"radio",value:e,label:e,id:"answer-"+n,key:"answer-"+n,checked:e===t,onChange:d})})),a.createElement("div",{className:"exh_submit_button"},a.createElement("div",{className:"exh_arrow_container"},a.createElement("img",{className:"exh_blue_arrow",src:"/images/exhibition_assets/arrow_blue.svg",alt:""})),a.createElement(m.Z,{className:"exh_submit_btn",type:"submit",disabled:!t,onClick:g},a.createElement("h1",{style:{color:"white"}},"Submit & Show Result")))))},g=function(){return a.createElement(r.Z,null,a.createElement("div",{className:"exh_container_inner mt-5"},a.createElement("div",{className:"conflictsQuestions exh_question_intro_text"},a.createElement(i.Z,{className:"badgeConflicts rounded-pill"},a.createElement("h1",null,"ReThinking IDENTITIES"))),a.createElement("div",{className:"conflictsAnswers"},a.createElement("h2",null,"Question: 4"),a.createElement(d,null))))}},42473:function(e){"use strict";var t=function(){};e.exports=t},35152:function(e){"use strict";e.exports=JSON.parse('{"type":"service_account","project_id":"reinheritexhibitionsmap","private_key_id":"a87b5d31c51f71ef5d9fa0aa20ff5907ea7d4bcd","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCUZd05/cS3egGo\\nzAw7nAAoWNkcowvwn5yA2gFd6HfLpA0b5G16ar0pjneS6ExBUVuOHbHeKqSYf4DY\\nWbFkeOQIhFYAbIlBUfeGoUCpRWRrlWEr7BLkYNm+r0qOCNnf8tehHwTQEEh1ORP0\\nUUvzb4fWgnIErScr2RiUrW7VlUAuVixU5SvHtWcAQZdzqovls2JrJSr32HHWjXVN\\nxQUd2CfUjaXub0qh1Iflwyt8vpCbByClhWObIBBbce2g94B7Vaeik5fttzCWIOrW\\nsMy7QgAav+wo/aoAMSfmWXrj/BjnNxNjRDWIaVd/vFiCTI30PfXF96Ptrq994RXE\\ndOk9dqi3AgMBAAECggEAGLXxpbN1K1w8pH/91Xs/p3hMBvG7jkD1zZr/uUR5lkZm\\nDGv4MvdNMntPu/3EnOfQSBT3xlfxepdYvC4LVQCwcB6hN4bbQC5G+nslikpM04FX\\nYfn4l2DtQUxtLMOajCki8Oh6Y68icaqkgP18mTfMNdMY62Bt8mY/KprKpvQocM6V\\nvzG06/oUTdDdtm1lcFb6dZzhqLFItKqoiN+Ob6suml12pv103Wkk9GOzb0D0XPix\\n8rgbNEtzV7TY694/CsXKnh1JZFO9HRGIIDz6EYxMhi72kJ7eYLGtLg+ZIvOE9F/r\\n40PDEXJdOS6V1gto6azUK5d54/UE4KBQQBP0Yp8luQKBgQDEVN1S+VWpex/6+XIL\\nwKMu5UPNCKXTefsqSc7C2TE2WAUCQIau1etl8NoIy3dqJSxRgCc3ALwZ5gV0MZPD\\nNdDjqKaaZt13kvqqq9ojxJVL+op6mTNpcmgHrlroNCTgN6ErqDr7sjvF1YgFqB4A\\nxLel/3UNKk38c9JMXKxWh12A4wKBgQDBf6IJCzOD0K+1gCEvqmnpDXYJ/LwHGpkp\\nXSXrNZPRhgJjKJG+/K4gZVqteP4QM0Fe3XGNc+1RwSp+uEtAQxU2XGfgVI2LG+f8\\n5Po3Lb751RuBMdRc2tJBCwG2NpfQ4rQ7Bsp9oEjDzkmlkyT7RfTxxLBMOeQXzQPP\\nqNoV5lzlHQKBgFOScFfWjNFE+PsDXbmE+bGHpBHOAZCAlxqMKngkrd8dHpyzzOD1\\nbGuLV7Rwr9c+FZxnucmfBXLcyCuKwwRQjyepbanB6bnxlcQ6vPOGxap+7p17Qzg6\\nm+/RFx9Kuvu6kl+cD+d+GhV/bJRD2Omo0yfVEwVUobe5saYRuMZofrPTAoGAeuv6\\n4qXj/uv2g2W3L1Gh4HQ1tViBlj22aMmMyiQKGIN6RsXB+MMKVvgsJ6GCPIZjE8G3\\nXjXz4AjHVyL6YwN6mUMQljkAhgufT0+jCKSd+pX/2A3wq2AzSzCT0M5TmVY7Sngg\\n8Ld/IiyNKosUZi/l0CS0Hmh0Vw5dSnEowdrKzp0CgYB3F+mXpAZc+LIfuzdUjva/\\nmLgkODrjRh/8EsKoSpbHtAD6I92C70yHAJn8qBQM2ATzp6FoM9iwEF56rbYxKoha\\nW1hoH4nfAxKwqu0mXY/TS4ILdIwjsraL8HBjbXbeHut8TluOMraSitOtRFiKHG6g\\nud+eWXKElsI9GltwhE9WAA==\\n-----END PRIVATE KEY-----\\n","client_email":"reinheritexhibitionsmap@reinheritexhibitionsmap.iam.gserviceaccount.com","client_id":"113827058909396068788","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/reinheritexhibitionsmap%40reinheritexhibitionsmap.iam.gserviceaccount.com","sheet_id":"1rJj9HHaTuS0lg3o5KJmGS81Gl0aAE0E_jZhq3BCJV64","api_key":"AIzaSyAXeqih_Sgv9d0KCsQfH18udP7IbfEy3Co"}')}}]);
//# sourceMappingURL=component---src-pages-exhibitions-identities-identities-questions-4th-question-identities-index-tsx-69de97a1af66fa40a645.js.map