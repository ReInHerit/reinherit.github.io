(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[7051],{75812:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var a=n(67294),r=n(33639),i=n(20994),l=n(7408),c=n(58263),o=n(8500),s=n(25444),m=n(50409),u=n(38760),h=n(14746),d=n(29499);var p=function(){var e=a.useState(!1),t=e[0],n=e[1];return(0,d.useLocation)(),a.createElement(a.Fragment,null,a.createElement(m.Z,{collapseOnSelect:!0,expand:"true",fixed:"top",className:"navExhib navExh_green"},a.createElement("div",{className:"header-burger"},a.createElement("div",{className:"hamburger"}),a.createElement("div",{className:"hamburger"}),a.createElement("div",{className:"hamburger"})),a.createElement(r.Z,{fluid:!0,className:"exh_navBar_container rounded-pill"},a.createElement(m.Z.Brand,{href:"#home",as:"div",className:"exhibition_navbar"},a.createElement("div",{className:"exhibition_navbar_inner"},a.createElement("a",{className:"exhibition_menu_link",href:"https://reinherit-hub.eu/"},"ReInHerit"),a.createElement("div",{className:"exh_line"}),a.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://reinherit-hub.eu/exhibitions"},"Exhibition"),a.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://collection.reinherit-hub.eu/"},"Collection"))),a.createElement(m.Z.Toggle,{className:"navbar-toggler",onClick:function(){return n(!0)},style:{color:"white"}}),a.createElement(u.Z,{show:t,onHide:function(){return n(!1)},placement:"end",className:"exhibition_burger_container"},a.createElement(u.Z.Header,{closeButton:!0,className:"exhibition_burger"}),a.createElement("div",{className:"exhibition_burger_inner"},a.createElement(h.Z,{className:"flex-sm-column content-end"},a.createElement(s.rU,{className:"link-light text-decoration-none",to:"/about"},"What is ReInHerit"),a.createElement(s.rU,{className:"link-light text-decoration-none",to:"/about/team"},"Who & Where is ReInHerit"),a.createElement(s.rU,{className:"link-light text-decoration-none",to:"/museumcalls/travelling"},"Host an Exhibition"),a.createElement(s.rU,{className:"link-light text-decoration-none",to:"/museumcalls/digital"},"Object Contribution"),a.createElement("div",{className:"exh_space"}),a.createElement("p",null,"Travelling Exhibition:"),a.createElement("a",{href:"https://www.grazmuseum.at/en/exhibition/rethinking-conflicts-how-are-conflicts-reflected-in-objects/",className:"link-light text-decoration-none"},"Graz Museum"),a.createElement("a",{href:"https://www.boccf.org/",className:"link-light text-decoration-none"},"Bank of Cypus Cultural Foundation"),a.createElement("a",{href:"https://cycladic.gr/en",className:"link-light text-decoration-none"}," Museum of Cycladic Art")))))))},g=function(e){var t=e.children,n=e.pageTitle;return a.createElement(c.Z,null,a.createElement(o.Z,{pageTitle:n}),a.createElement(p,null),a.createElement(r.Z,{className:"exh_main_content",style:{backgroundColor:"white"},fluid:!0},t),a.createElement(r.Z,{style:{backgroundColor:"black"},fluid:!0},a.createElement(r.Z,{style:{padding:"10px 0"}},a.createElement(i.Z,null,a.createElement(l.Z,{xl:6,xs:12},a.createElement("div",{className:"exh_footer_grid"},a.createElement("div",{className:"footer_img"},a.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/cc-sticker-2007.png"})),a.createElement("div",{className:"footer_partner_text"},a.createElement("p",{style:{color:"white"}},"All rights reserved excluding works shared under Creative Commons licensing. ",a.createElement("br",null),"Licenses are indicated for respective elements.")))),a.createElement(l.Z,{xl:6,xs:12},a.createElement("div",{className:"exh_footer_grid"},a.createElement("div",{className:"footer_img"},a.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/logo-ce-horizontal-en-neg-nb.png"})),a.createElement("div",{className:"footer_partner_text"},a.createElement("p",{style:{color:"white"}},"This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545"))))),a.createElement(i.Z,null,a.createElement(l.Z,{className:"exh_footer_links_green"},a.createElement("a",{style:{color:"white"},target:"_blank",href:"/exhibitions/conflicts/imprintConflicts"},"Imprint"),a.createElement("a",{style:{color:"white"},target:"_blank",href:"/about/dataprot"},"Privacy"))))))}},53947:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(67294),r=n(12623),i=n(75812),l=n(92137),c=n(87757),o=n.n(c),s=n(3339),m=n(46594),u=n(87265),h=n(96466),d=function(){var e=(0,a.useState)(),t=e[0],n=e[1],r="undefined"!=typeof window?localStorage.getItem("countryCraftmanship"):null,i=new u.GoogleSpreadsheet(h.sheet_id),c=function(){var e=(0,l.Z)(o().mark((function e(){var n,a,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.useServiceAccountAuth(h);case 3:return e.next=5,i.loadInfo();case 5:return n=i.sheetsById[1939633244],a=JSON.stringify(t),e.next=9,n.addRow({country:r,questionThree:a});case 9:return l=e.sent,e.abrupt("return",l);case 13:e.prev=13,e.t0=e.catch(0),console.error("Error: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),d=function(e){n(e.target.value)},p=function(){var e=(0,l.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,c();case 3:window.location.href="exhibitions/craftmanship/CraftmanshipExhibitionOverview";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.createElement(a.Fragment,null,a.createElement("h1",{className:"mt-5"},"Are there products of craftsmanship that can never be made by a machine? What do you think?"),a.createElement(s.Z,{onSubmit:p},["No. In earlier times people used to think that the human mind will never be defeated by a machine. In chess for example. Nobody talks about that anymore. It will be the same with handcrafted products.","Yes. A handcrafted product is always unique. But machine manufacturing never delivers unique items. It’s always one like the other.","Yes. Because there are quality levels that are unattainable for machines. Example: the handmade mouthpiece of a saxophone. Simply no machine-made mouthpiece can match the sound quality of a handmade mouthpiece.","I think the differences will be so small that no one will notice them anymore.","Artisan products require spirit, and mechanical products require only energy. There is an insurmountable gulf between them.","Perhaps machine-made products will never really be as good as handcrafted ones at the top. But in quantity, they are better."].map((function(e,n){return a.createElement(s.Z.Check,{type:"radio",value:e,label:e,id:"answer-"+n,key:"answer-"+n,checked:e===t,onChange:d})})),a.createElement("div",{className:"exh_submit_button"},a.createElement("div",{className:"exh_arrow_container"},a.createElement("img",{className:"exh_green_arrow",src:"/images/exhibition_assets/arrow_green.svg",alt:""})),a.createElement(m.Z,{className:"exh_submit_btn",type:"submit",disabled:!t,onClick:p},a.createElement("h1",{style:{color:"white"}},"Submit & Enter Exhibition")))))},p=function(){return a.createElement(i.Z,null,a.createElement("div",{className:"exh_container_inner_green mt-5"},a.createElement(r.Z,{className:"badgeCraftmanship rounded-pill"},a.createElement("h1",null,"ReThinking CRAFTMANSHIP")),a.createElement("div",{className:"craftmanshipAnswers"},a.createElement("h2",null,"Question: 2"),a.createElement(d,null))))}},42473:function(e){"use strict";var t=function(){};e.exports=t},96466:function(e){"use strict";e.exports=JSON.parse('{"type":"service_account","project_id":"reinheritexhibitionsmap","private_key_id":"a87b5d31c51f71ef5d9fa0aa20ff5907ea7d4bcd","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCUZd05/cS3egGo\\nzAw7nAAoWNkcowvwn5yA2gFd6HfLpA0b5G16ar0pjneS6ExBUVuOHbHeKqSYf4DY\\nWbFkeOQIhFYAbIlBUfeGoUCpRWRrlWEr7BLkYNm+r0qOCNnf8tehHwTQEEh1ORP0\\nUUvzb4fWgnIErScr2RiUrW7VlUAuVixU5SvHtWcAQZdzqovls2JrJSr32HHWjXVN\\nxQUd2CfUjaXub0qh1Iflwyt8vpCbByClhWObIBBbce2g94B7Vaeik5fttzCWIOrW\\nsMy7QgAav+wo/aoAMSfmWXrj/BjnNxNjRDWIaVd/vFiCTI30PfXF96Ptrq994RXE\\ndOk9dqi3AgMBAAECggEAGLXxpbN1K1w8pH/91Xs/p3hMBvG7jkD1zZr/uUR5lkZm\\nDGv4MvdNMntPu/3EnOfQSBT3xlfxepdYvC4LVQCwcB6hN4bbQC5G+nslikpM04FX\\nYfn4l2DtQUxtLMOajCki8Oh6Y68icaqkgP18mTfMNdMY62Bt8mY/KprKpvQocM6V\\nvzG06/oUTdDdtm1lcFb6dZzhqLFItKqoiN+Ob6suml12pv103Wkk9GOzb0D0XPix\\n8rgbNEtzV7TY694/CsXKnh1JZFO9HRGIIDz6EYxMhi72kJ7eYLGtLg+ZIvOE9F/r\\n40PDEXJdOS6V1gto6azUK5d54/UE4KBQQBP0Yp8luQKBgQDEVN1S+VWpex/6+XIL\\nwKMu5UPNCKXTefsqSc7C2TE2WAUCQIau1etl8NoIy3dqJSxRgCc3ALwZ5gV0MZPD\\nNdDjqKaaZt13kvqqq9ojxJVL+op6mTNpcmgHrlroNCTgN6ErqDr7sjvF1YgFqB4A\\nxLel/3UNKk38c9JMXKxWh12A4wKBgQDBf6IJCzOD0K+1gCEvqmnpDXYJ/LwHGpkp\\nXSXrNZPRhgJjKJG+/K4gZVqteP4QM0Fe3XGNc+1RwSp+uEtAQxU2XGfgVI2LG+f8\\n5Po3Lb751RuBMdRc2tJBCwG2NpfQ4rQ7Bsp9oEjDzkmlkyT7RfTxxLBMOeQXzQPP\\nqNoV5lzlHQKBgFOScFfWjNFE+PsDXbmE+bGHpBHOAZCAlxqMKngkrd8dHpyzzOD1\\nbGuLV7Rwr9c+FZxnucmfBXLcyCuKwwRQjyepbanB6bnxlcQ6vPOGxap+7p17Qzg6\\nm+/RFx9Kuvu6kl+cD+d+GhV/bJRD2Omo0yfVEwVUobe5saYRuMZofrPTAoGAeuv6\\n4qXj/uv2g2W3L1Gh4HQ1tViBlj22aMmMyiQKGIN6RsXB+MMKVvgsJ6GCPIZjE8G3\\nXjXz4AjHVyL6YwN6mUMQljkAhgufT0+jCKSd+pX/2A3wq2AzSzCT0M5TmVY7Sngg\\n8Ld/IiyNKosUZi/l0CS0Hmh0Vw5dSnEowdrKzp0CgYB3F+mXpAZc+LIfuzdUjva/\\nmLgkODrjRh/8EsKoSpbHtAD6I92C70yHAJn8qBQM2ATzp6FoM9iwEF56rbYxKoha\\nW1hoH4nfAxKwqu0mXY/TS4ILdIwjsraL8HBjbXbeHut8TluOMraSitOtRFiKHG6g\\nud+eWXKElsI9GltwhE9WAA==\\n-----END PRIVATE KEY-----\\n","client_email":"reinheritexhibitionsmap@reinheritexhibitionsmap.iam.gserviceaccount.com","client_id":"113827058909396068788","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/reinheritexhibitionsmap%40reinheritexhibitionsmap.iam.gserviceaccount.com","sheet_id":"16HjGqq-s6nW4MmP_MgC1eUlnt0BymJ56---YIS7-8RQ","api_key":"AIzaSyAAIOmnMvzPxUXLkHpwRz2N0EGgKSApNFc"}')}}]);
//# sourceMappingURL=component---src-pages-exhibitions-craftmanship-craftmanship-questions-3rd-question-craftmanship-index-tsx-486c9e6507a0b263b1cd.js.map