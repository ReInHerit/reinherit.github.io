(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[5673],{38870:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(96156),i=n(81253),a=n(75900),o=n.n(a),s=/-(.)/g;var c=n(67294),u=n(99541),l=n(85893);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,r=void 0===n?d(e):n,a=t.Component,s=t.defaultProps,h=c.forwardRef((function(t,n){var r=t.className,s=t.bsPrefix,c=t.as,h=void 0===c?a||"div":c,d=(0,i.Z)(t,["className","bsPrefix","as"]),p=(0,u.vE)(s,e);return(0,l.jsx)(h,m({ref:n,className:o()(r,p)},d))}));return h.defaultProps=s,h.displayName=r,h}},44114:function(e,t,n){"use strict";var r=n(67294),i=n(33639),a=n(58263);t.Z=function(e){var t=e.children;e.pageTitle;return r.createElement(a.Z,null,r.createElement(i.Z,{className:"exh_main_content mt-2",style:{backgroundColor:"white"},fluid:!0},t))}},38184:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(67294),i=n(25444),a=n(12623),o=n(44114),s=n(92137),c=n(87757),u=n.n(c),l=n(3339),h=n(46594),m=n(87265),d=n(35152),p=function(){var e=(0,r.useState)(),t=e[0],n=e[1],i=new m.GoogleSpreadsheet(d.sheet_id),a=function(){var e=(0,s.Z)(u().mark((function e(){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.useServiceAccountAuth(d);case 3:return e.next=5,i.loadInfo();case 5:return n=i.sheetsById[678756205],r=JSON.stringify(t),e.next=9,n.addRow({country:'"Austria"',questionFour:r});case 9:return a=e.sent,e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(0),console.error("Error: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),o=function(e){n(e.target.value)},c=function(){var e=(0,s.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a();case 3:window.location.href="/exhibitions/identities/inGalleryEN/IdentitiesExhibitionMapEN";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.createElement(r.Fragment,null,r.createElement("h1",{className:"mt-5"},'"Identity" means: having the answer to the question of who I actually am. "Gender identity" therefore means: having the answer to the question of which social gender I actually belong to. How important is the answer to this question to you?'),r.createElement(l.Z,{onSubmit:c},["It is very important for me to know which social gender I belong to. I am part of my gender and I cannot change it like my internet provider.","In my opinion too much attention is paid to the issue of identity. It does not matter if I have an identity of any kind. The only thing that matters is my own happiness.","For me, the question of identity is of no interest. I do not even know who I am. And if I knew, what good would it do me?","I refuse the question of my identity. It presupposes that there is something in me that always remains the same - my nature, including me as a sexual being. But that is not the case with me. To me, chasing my identity means chasing a ghost.","The world we live in is still dominated by gender roles. That is the reason why I am interested in it. However, I hope that in future generations it will not matter what gender you belong to."].map((function(e,n){return r.createElement(l.Z.Check,{type:"radio",value:e,label:e,id:"answer-"+n,key:"answer-"+n,checked:e===t,onChange:o})})),r.createElement("div",{className:"exh_submit_button"},r.createElement("div",{className:"exh_arrow_container"},r.createElement("img",{className:"exh_red_arrow",src:"/images/exhibition_assets/arrow_red.svg",alt:""})),r.createElement(h.Z,{className:"exh_submit_btn",type:"submit",disabled:!t,onClick:c},r.createElement("h1",{style:{color:"white"}},"Submit & Show Result")))))},f=function(){return r.createElement(o.Z,null,r.createElement("div",{className:"exh_container_inner_red mt-5",style:{maxWidth:"75%",margin:"12.5%"}},r.createElement("a",{id:"Question4IdentitiesEN"}),r.createElement(a.Z,{className:"badgeIdentities rounded-pill"},r.createElement("h1",null,"ReThinking IDENTITIES")),r.createElement("div",{className:"identitiesQuestions exh_question_intro_text"},r.createElement("div",{className:"d-flex justify-content-end"},r.createElement(a.Z,{pill:!0,bg:"danger"},r.createElement("h2",null,r.createElement(i.rU,{to:"/exhibitions/identities/inGalleryDE/4thQuestionIdentitiesDE/#Question4IdentitiesDE",style:{color:"white"},className:"text-decoration-none"},"Deutsch"))))),r.createElement("div",{className:"identitiesAnswers"},r.createElement("h2",null,"Question: 4"),r.createElement(p,null))))}},42473:function(e){"use strict";var t=function(){};e.exports=t},35152:function(e){"use strict";e.exports=JSON.parse('{"type":"service_account","project_id":"reinheritexhibitionsmap","private_key_id":"a87b5d31c51f71ef5d9fa0aa20ff5907ea7d4bcd","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCUZd05/cS3egGo\\nzAw7nAAoWNkcowvwn5yA2gFd6HfLpA0b5G16ar0pjneS6ExBUVuOHbHeKqSYf4DY\\nWbFkeOQIhFYAbIlBUfeGoUCpRWRrlWEr7BLkYNm+r0qOCNnf8tehHwTQEEh1ORP0\\nUUvzb4fWgnIErScr2RiUrW7VlUAuVixU5SvHtWcAQZdzqovls2JrJSr32HHWjXVN\\nxQUd2CfUjaXub0qh1Iflwyt8vpCbByClhWObIBBbce2g94B7Vaeik5fttzCWIOrW\\nsMy7QgAav+wo/aoAMSfmWXrj/BjnNxNjRDWIaVd/vFiCTI30PfXF96Ptrq994RXE\\ndOk9dqi3AgMBAAECggEAGLXxpbN1K1w8pH/91Xs/p3hMBvG7jkD1zZr/uUR5lkZm\\nDGv4MvdNMntPu/3EnOfQSBT3xlfxepdYvC4LVQCwcB6hN4bbQC5G+nslikpM04FX\\nYfn4l2DtQUxtLMOajCki8Oh6Y68icaqkgP18mTfMNdMY62Bt8mY/KprKpvQocM6V\\nvzG06/oUTdDdtm1lcFb6dZzhqLFItKqoiN+Ob6suml12pv103Wkk9GOzb0D0XPix\\n8rgbNEtzV7TY694/CsXKnh1JZFO9HRGIIDz6EYxMhi72kJ7eYLGtLg+ZIvOE9F/r\\n40PDEXJdOS6V1gto6azUK5d54/UE4KBQQBP0Yp8luQKBgQDEVN1S+VWpex/6+XIL\\nwKMu5UPNCKXTefsqSc7C2TE2WAUCQIau1etl8NoIy3dqJSxRgCc3ALwZ5gV0MZPD\\nNdDjqKaaZt13kvqqq9ojxJVL+op6mTNpcmgHrlroNCTgN6ErqDr7sjvF1YgFqB4A\\nxLel/3UNKk38c9JMXKxWh12A4wKBgQDBf6IJCzOD0K+1gCEvqmnpDXYJ/LwHGpkp\\nXSXrNZPRhgJjKJG+/K4gZVqteP4QM0Fe3XGNc+1RwSp+uEtAQxU2XGfgVI2LG+f8\\n5Po3Lb751RuBMdRc2tJBCwG2NpfQ4rQ7Bsp9oEjDzkmlkyT7RfTxxLBMOeQXzQPP\\nqNoV5lzlHQKBgFOScFfWjNFE+PsDXbmE+bGHpBHOAZCAlxqMKngkrd8dHpyzzOD1\\nbGuLV7Rwr9c+FZxnucmfBXLcyCuKwwRQjyepbanB6bnxlcQ6vPOGxap+7p17Qzg6\\nm+/RFx9Kuvu6kl+cD+d+GhV/bJRD2Omo0yfVEwVUobe5saYRuMZofrPTAoGAeuv6\\n4qXj/uv2g2W3L1Gh4HQ1tViBlj22aMmMyiQKGIN6RsXB+MMKVvgsJ6GCPIZjE8G3\\nXjXz4AjHVyL6YwN6mUMQljkAhgufT0+jCKSd+pX/2A3wq2AzSzCT0M5TmVY7Sngg\\n8Ld/IiyNKosUZi/l0CS0Hmh0Vw5dSnEowdrKzp0CgYB3F+mXpAZc+LIfuzdUjva/\\nmLgkODrjRh/8EsKoSpbHtAD6I92C70yHAJn8qBQM2ATzp6FoM9iwEF56rbYxKoha\\nW1hoH4nfAxKwqu0mXY/TS4ILdIwjsraL8HBjbXbeHut8TluOMraSitOtRFiKHG6g\\nud+eWXKElsI9GltwhE9WAA==\\n-----END PRIVATE KEY-----\\n","client_email":"reinheritexhibitionsmap@reinheritexhibitionsmap.iam.gserviceaccount.com","client_id":"113827058909396068788","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/reinheritexhibitionsmap%40reinheritexhibitionsmap.iam.gserviceaccount.com","sheet_id":"1rJj9HHaTuS0lg3o5KJmGS81Gl0aAE0E_jZhq3BCJV64","api_key":"AIzaSyAXeqih_Sgv9d0KCsQfH18udP7IbfEy3Co"}')}}]);
//# sourceMappingURL=component---src-pages-exhibitions-identities-in-gallery-en-4th-question-identities-en-index-tsx-80a8ab57d621a4823f7e.js.map