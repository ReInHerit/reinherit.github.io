(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[3715],{38870:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(96156),a=n(81253),i=n(75900),c=n.n(i),o=/-(.)/g;var s=n(67294),l=n(99541),u=n(85893);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){return e[0].toUpperCase()+(t=e,t.replace(o,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,r=void 0===n?h(e):n,i=t.Component,o=t.defaultProps,m=s.forwardRef((function(t,n){var r=t.className,o=t.bsPrefix,s=t.as,m=void 0===s?i||"div":s,h=(0,a.Z)(t,["className","bsPrefix","as"]),f=(0,l.vE)(o,e);return(0,u.jsx)(m,p({ref:n,className:c()(r,f)},h))}));return m.defaultProps=o,m.displayName=r,m}},72635:function(e,t,n){"use strict";var r=n(92137),a=n(87757),i=n.n(a),c=n(67294),o=n(3339),s=n(46594),l=n(87265),u=n(96466);t.Z=function(){var e=(0,c.useState)(),t=e[0],n=e[1],a=new l.GoogleSpreadsheet(u.sheet_id),m=function(){var e=(0,r.Z)(i().mark((function e(){var n,r,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.useServiceAccountAuth(u);case 3:return e.next=5,a.loadInfo();case 5:return n=a.sheetsById[713196235],r=JSON.stringify(t),e.next=9,n.addRow({country:'"Greece"',questionTwo:r});case 9:return c=e.sent,e.abrupt("return",c);case 13:e.prev=13,e.t0=e.catch(0),console.error("Error: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),p=function(e){n(e.target.value)},h=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m();case 3:window.location.href="/exhibitions/craftmanship/inGalleryEN/3rdQuestionCraftmanshipEN";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.createElement(c.Fragment,null,c.createElement("h1",{className:"mt-5"},"COMING SOON"),c.createElement(o.Z,{onSubmit:h},["coming soon"].map((function(e,n){return c.createElement(o.Z.Check,{type:"radio",name:"exh_questions",value:e,label:e,id:"answer-"+n,key:"answer-"+n,checked:e===t,onChange:p})})),c.createElement("div",{className:"exh_submit_button"},c.createElement("div",{className:"exh_arrow_container"},c.createElement("img",{className:"exh_green_arrow",src:"/images/exhibition_assets/arrow_green.svg",alt:""})),c.createElement(s.Z,{className:"exh_submit_btn",type:"submit",disabled:!t,onClick:h},c.createElement("h1",{style:{color:"white"}},"Next Question")))))}},44114:function(e,t,n){"use strict";var r=n(67294),a=n(33639),i=n(58263);t.Z=function(e){var t=e.children;e.pageTitle;return r.createElement(i.Z,null,r.createElement(a.Z,{className:"exh_main_content mt-2",style:{backgroundColor:"white"},fluid:!0},t))}},5015:function(e,t,n){"use strict";n.r(t);var r=n(67294),a=n(25444),i=n(12623),c=n(44114),o=n(72635);t.default=function(){return r.createElement(c.Z,null,r.createElement("div",{className:"exh_container_inner mt-5",style:{maxWidth:"75%",margin:"12.5%"}},r.createElement("a",{id:"Question2CraftmDE"}),r.createElement(i.Z,{className:"badgeCraftmanship rounded-pill"},r.createElement("h1",null,"ReThinking CRAFTMANSHIP")),r.createElement("div",{className:"craftmanshipQuestions exh_question_intro_text"},r.createElement("div",{className:"d-flex justify-content-end"},r.createElement(i.Z,{pill:!0,bg:"success"},r.createElement("h2",null,r.createElement(a.rU,{to:"/exhibitions/craftmanship/inGalleryENGraz/2ndQuestionCraftmanshipENGraz/#Question2CraftmEN",style:{color:"white"},className:"text-decoration-none"},"English"))))),r.createElement("div",{className:"craftmanshipAnswers"},r.createElement("h2",null,"Frage: 2"),r.createElement(o.Z,null))))}},42473:function(e){"use strict";var t=function(){};e.exports=t},96466:function(e){"use strict";e.exports=JSON.parse('{"type":"service_account","project_id":"reinheritexhibitionsmap","private_key_id":"a87b5d31c51f71ef5d9fa0aa20ff5907ea7d4bcd","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCUZd05/cS3egGo\\nzAw7nAAoWNkcowvwn5yA2gFd6HfLpA0b5G16ar0pjneS6ExBUVuOHbHeKqSYf4DY\\nWbFkeOQIhFYAbIlBUfeGoUCpRWRrlWEr7BLkYNm+r0qOCNnf8tehHwTQEEh1ORP0\\nUUvzb4fWgnIErScr2RiUrW7VlUAuVixU5SvHtWcAQZdzqovls2JrJSr32HHWjXVN\\nxQUd2CfUjaXub0qh1Iflwyt8vpCbByClhWObIBBbce2g94B7Vaeik5fttzCWIOrW\\nsMy7QgAav+wo/aoAMSfmWXrj/BjnNxNjRDWIaVd/vFiCTI30PfXF96Ptrq994RXE\\ndOk9dqi3AgMBAAECggEAGLXxpbN1K1w8pH/91Xs/p3hMBvG7jkD1zZr/uUR5lkZm\\nDGv4MvdNMntPu/3EnOfQSBT3xlfxepdYvC4LVQCwcB6hN4bbQC5G+nslikpM04FX\\nYfn4l2DtQUxtLMOajCki8Oh6Y68icaqkgP18mTfMNdMY62Bt8mY/KprKpvQocM6V\\nvzG06/oUTdDdtm1lcFb6dZzhqLFItKqoiN+Ob6suml12pv103Wkk9GOzb0D0XPix\\n8rgbNEtzV7TY694/CsXKnh1JZFO9HRGIIDz6EYxMhi72kJ7eYLGtLg+ZIvOE9F/r\\n40PDEXJdOS6V1gto6azUK5d54/UE4KBQQBP0Yp8luQKBgQDEVN1S+VWpex/6+XIL\\nwKMu5UPNCKXTefsqSc7C2TE2WAUCQIau1etl8NoIy3dqJSxRgCc3ALwZ5gV0MZPD\\nNdDjqKaaZt13kvqqq9ojxJVL+op6mTNpcmgHrlroNCTgN6ErqDr7sjvF1YgFqB4A\\nxLel/3UNKk38c9JMXKxWh12A4wKBgQDBf6IJCzOD0K+1gCEvqmnpDXYJ/LwHGpkp\\nXSXrNZPRhgJjKJG+/K4gZVqteP4QM0Fe3XGNc+1RwSp+uEtAQxU2XGfgVI2LG+f8\\n5Po3Lb751RuBMdRc2tJBCwG2NpfQ4rQ7Bsp9oEjDzkmlkyT7RfTxxLBMOeQXzQPP\\nqNoV5lzlHQKBgFOScFfWjNFE+PsDXbmE+bGHpBHOAZCAlxqMKngkrd8dHpyzzOD1\\nbGuLV7Rwr9c+FZxnucmfBXLcyCuKwwRQjyepbanB6bnxlcQ6vPOGxap+7p17Qzg6\\nm+/RFx9Kuvu6kl+cD+d+GhV/bJRD2Omo0yfVEwVUobe5saYRuMZofrPTAoGAeuv6\\n4qXj/uv2g2W3L1Gh4HQ1tViBlj22aMmMyiQKGIN6RsXB+MMKVvgsJ6GCPIZjE8G3\\nXjXz4AjHVyL6YwN6mUMQljkAhgufT0+jCKSd+pX/2A3wq2AzSzCT0M5TmVY7Sngg\\n8Ld/IiyNKosUZi/l0CS0Hmh0Vw5dSnEowdrKzp0CgYB3F+mXpAZc+LIfuzdUjva/\\nmLgkODrjRh/8EsKoSpbHtAD6I92C70yHAJn8qBQM2ATzp6FoM9iwEF56rbYxKoha\\nW1hoH4nfAxKwqu0mXY/TS4ILdIwjsraL8HBjbXbeHut8TluOMraSitOtRFiKHG6g\\nud+eWXKElsI9GltwhE9WAA==\\n-----END PRIVATE KEY-----\\n","client_email":"reinheritexhibitionsmap@reinheritexhibitionsmap.iam.gserviceaccount.com","client_id":"113827058909396068788","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/reinheritexhibitionsmap%40reinheritexhibitionsmap.iam.gserviceaccount.com","sheet_id":"16HjGqq-s6nW4MmP_MgC1eUlnt0BymJ56---YIS7-8RQ","api_key":"AIzaSyAAIOmnMvzPxUXLkHpwRz2N0EGgKSApNFc"}')}}]);
//# sourceMappingURL=component---src-pages-exhibitions-craftmanship-in-gallery-de-2nd-question-craftmanship-de-index-tsx-9a2dfdd3b980c120e0a9.js.map