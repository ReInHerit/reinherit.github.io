(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[2217],{20994:function(e,t,n){"use strict";var r=n(96156),a=n(81253),i=n(75900),o=n.n(i),c=n(67294),s=n(99541),l=n(85893);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=["xxl","xl","lg","md","sm","xs"],p=c.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.as,c=void 0===i?"div":i,u=(0,a.Z)(e,["bsPrefix","className","as"]),p=(0,s.vE)(n,"row"),f="".concat(p,"-cols"),d=[];return m.forEach((function(e){var t,n=u[e];delete u[e],t=null!=n&&"object"==typeof n?n.cols:n;var r="xs"!==e?"-".concat(e):"";null!=t&&d.push("".concat(f).concat(r,"-").concat(t))})),(0,l.jsx)(c,h(h({ref:t},u),{},{className:o().apply(void 0,[r,p].concat(d))}))}));p.displayName="Row",t.Z=p},38870:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(96156),a=n(81253),i=n(75900),o=n.n(i),c=/-(.)/g;var s=n(67294),l=n(99541),u=n(85893);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,r=void 0===n?p(e):n,i=t.Component,c=t.defaultProps,h=s.forwardRef((function(t,n){var r=t.className,c=t.bsPrefix,s=t.as,h=void 0===s?i||"div":s,p=(0,a.Z)(t,["className","bsPrefix","as"]),f=(0,l.vE)(c,e);return(0,u.jsx)(h,m({ref:n,className:o()(r,f)},p))}));return h.defaultProps=c,h.displayName=r,h}},44114:function(e,t,n){"use strict";var r=n(67294),a=n(33639),i=n(58263);t.Z=function(e){var t=e.children;e.pageTitle;return r.createElement(i.Z,null,r.createElement(a.Z,{className:"exh_main_content mt-2",style:{backgroundColor:"white"},fluid:!0},t))}},55840:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(67294),a=n(25444),i=n(12623),o=n(20994),c=n(7408),s=n(44114),l=n(92137),u=n(87757),h=n.n(u),m=n(3339),p=n(46594),f=n(87265),d=n(96466),b=function(){var e=(0,r.useState)(),t=e[0],n=e[1],a=new f.GoogleSpreadsheet(d.sheet_id),i=function(){var e=(0,l.Z)(h().mark((function e(){var n,r,i;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.useServiceAccountAuth(d);case 3:return e.next=5,a.loadInfo();case 5:return n=a.sheetsById[538400691],r=JSON.stringify(t),e.next=9,n.addRow({country:'"Austria"',questionOne:r});case 9:return i=e.sent,e.abrupt("return",i);case 13:e.prev=13,e.t0=e.catch(0),console.error("Error: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),o=function(e){n(e.target.value)},c=function(){var e=(0,l.Z)(h().mark((function e(t){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,i();case 3:window.location.href="/exhibitions/craftmanship/inGalleryENGraz/3rdQuestionCraftmanshipENGraz";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.createElement(r.Fragment,null,r.createElement("h1",{className:"mt-5"},"If you had the choice between a handmade piece of furniture and the same piece of machine-made furniture, which one would you choose?"),r.createElement(m.Z,{onSubmit:c},["The cheapest.","The best one, the handmade piece of furniture. Machine production never reaches the quality of craftsmanship.","The machine-made piece of furniture. Machines work more precisely than people.","The one that has the smallest ecological footprint. I think it’s the machine-made one because if you count it down per unit it probably takes less energy to make.","The one that has the smallest ecological footprint. I think it’s the handmade one. The energy that a person puts into something is sustainable. Very often energy used by machines is very often non-sustainable.","The one that lasts longer. The handmade one.","The handmade one. With my purchase, I ensure that the craftsman can earn his living and not give it to a money-hungry investor.","I do not care. They are the same anyway."].map((function(e,n){return r.createElement(m.Z.Check,{type:"radio",name:"exh_questions",value:e,label:e,id:"answer-"+n,key:"answer-"+n,checked:e===t,onChange:o})})),r.createElement("div",{className:"exh_submit_button"},r.createElement("div",{className:"exh_arrow_container"},r.createElement("img",{className:"exh_green_arrow",src:"/images/exhibition_assets/arrow_green.svg",alt:""})),r.createElement(p.Z,{className:"exh_submit_btn",type:"submit",disabled:!t,onClick:c},r.createElement("h1",{style:{color:"white"}},"Next Question")))))},g=function(){return r.createElement(s.Z,null,r.createElement("div",{className:"exh_container_inner_green mt-5",style:{maxWidth:"75%",margin:"12.5%"}},r.createElement("a",{id:"Question1CraftmEN"}),r.createElement(i.Z,{className:"badgeCraftmanship rounded-pill"},r.createElement("h1",null,"ReThinking CRAFTMANSHIP")),r.createElement("a",{id:"Question1CraftmEN"}),r.createElement("div",{className:"craftmanshipQuestions exh_question_intro_text"},r.createElement(o.Z,null,r.createElement(c.Z,{sm:10},r.createElement("h4",null,"How do you approach craftmanship?"),r.createElement("p",null,"Note data protection: ",r.createElement("br",null),"the collected data is used exclusively for statistics purposes within the exhibition.")),r.createElement(c.Z,{sm:2},r.createElement("div",{className:"d-flex justify-content-end"},r.createElement(i.Z,{pill:!0,bg:"success"},r.createElement("h2",null,r.createElement(a.rU,{to:"/exhibitions/craftmanship/inGalleryDE/1stQuestionCraftmanshipDE/#Question1CraftmDE",style:{color:"white"},className:"text-decoration-none"},"German"))))))),r.createElement("div",{className:"craftmanshipAnswers"},r.createElement("h2",null,"Question: 1"),r.createElement(b,null))))}},42473:function(e){"use strict";var t=function(){};e.exports=t},96466:function(e){"use strict";e.exports=JSON.parse('{"type":"service_account","project_id":"reinheritexhibitionsmap","private_key_id":"a87b5d31c51f71ef5d9fa0aa20ff5907ea7d4bcd","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCUZd05/cS3egGo\\nzAw7nAAoWNkcowvwn5yA2gFd6HfLpA0b5G16ar0pjneS6ExBUVuOHbHeKqSYf4DY\\nWbFkeOQIhFYAbIlBUfeGoUCpRWRrlWEr7BLkYNm+r0qOCNnf8tehHwTQEEh1ORP0\\nUUvzb4fWgnIErScr2RiUrW7VlUAuVixU5SvHtWcAQZdzqovls2JrJSr32HHWjXVN\\nxQUd2CfUjaXub0qh1Iflwyt8vpCbByClhWObIBBbce2g94B7Vaeik5fttzCWIOrW\\nsMy7QgAav+wo/aoAMSfmWXrj/BjnNxNjRDWIaVd/vFiCTI30PfXF96Ptrq994RXE\\ndOk9dqi3AgMBAAECggEAGLXxpbN1K1w8pH/91Xs/p3hMBvG7jkD1zZr/uUR5lkZm\\nDGv4MvdNMntPu/3EnOfQSBT3xlfxepdYvC4LVQCwcB6hN4bbQC5G+nslikpM04FX\\nYfn4l2DtQUxtLMOajCki8Oh6Y68icaqkgP18mTfMNdMY62Bt8mY/KprKpvQocM6V\\nvzG06/oUTdDdtm1lcFb6dZzhqLFItKqoiN+Ob6suml12pv103Wkk9GOzb0D0XPix\\n8rgbNEtzV7TY694/CsXKnh1JZFO9HRGIIDz6EYxMhi72kJ7eYLGtLg+ZIvOE9F/r\\n40PDEXJdOS6V1gto6azUK5d54/UE4KBQQBP0Yp8luQKBgQDEVN1S+VWpex/6+XIL\\nwKMu5UPNCKXTefsqSc7C2TE2WAUCQIau1etl8NoIy3dqJSxRgCc3ALwZ5gV0MZPD\\nNdDjqKaaZt13kvqqq9ojxJVL+op6mTNpcmgHrlroNCTgN6ErqDr7sjvF1YgFqB4A\\nxLel/3UNKk38c9JMXKxWh12A4wKBgQDBf6IJCzOD0K+1gCEvqmnpDXYJ/LwHGpkp\\nXSXrNZPRhgJjKJG+/K4gZVqteP4QM0Fe3XGNc+1RwSp+uEtAQxU2XGfgVI2LG+f8\\n5Po3Lb751RuBMdRc2tJBCwG2NpfQ4rQ7Bsp9oEjDzkmlkyT7RfTxxLBMOeQXzQPP\\nqNoV5lzlHQKBgFOScFfWjNFE+PsDXbmE+bGHpBHOAZCAlxqMKngkrd8dHpyzzOD1\\nbGuLV7Rwr9c+FZxnucmfBXLcyCuKwwRQjyepbanB6bnxlcQ6vPOGxap+7p17Qzg6\\nm+/RFx9Kuvu6kl+cD+d+GhV/bJRD2Omo0yfVEwVUobe5saYRuMZofrPTAoGAeuv6\\n4qXj/uv2g2W3L1Gh4HQ1tViBlj22aMmMyiQKGIN6RsXB+MMKVvgsJ6GCPIZjE8G3\\nXjXz4AjHVyL6YwN6mUMQljkAhgufT0+jCKSd+pX/2A3wq2AzSzCT0M5TmVY7Sngg\\n8Ld/IiyNKosUZi/l0CS0Hmh0Vw5dSnEowdrKzp0CgYB3F+mXpAZc+LIfuzdUjva/\\nmLgkODrjRh/8EsKoSpbHtAD6I92C70yHAJn8qBQM2ATzp6FoM9iwEF56rbYxKoha\\nW1hoH4nfAxKwqu0mXY/TS4ILdIwjsraL8HBjbXbeHut8TluOMraSitOtRFiKHG6g\\nud+eWXKElsI9GltwhE9WAA==\\n-----END PRIVATE KEY-----\\n","client_email":"reinheritexhibitionsmap@reinheritexhibitionsmap.iam.gserviceaccount.com","client_id":"113827058909396068788","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/reinheritexhibitionsmap%40reinheritexhibitionsmap.iam.gserviceaccount.com","sheet_id":"16HjGqq-s6nW4MmP_MgC1eUlnt0BymJ56---YIS7-8RQ","api_key":"AIzaSyAAIOmnMvzPxUXLkHpwRz2N0EGgKSApNFc"}')}}]);
//# sourceMappingURL=component---src-pages-exhibitions-craftmanship-in-gallery-en-graz-1st-question-craftmanship-en-graz-index-tsx-e75adb58f3cd35c4126b.js.map