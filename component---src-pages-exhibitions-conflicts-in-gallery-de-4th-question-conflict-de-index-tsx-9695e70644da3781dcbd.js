(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[3355],{38870:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(96156),i=t(81253),a=t(75900),s=t.n(a),c=/-(.)/g;var o=t(67294),u=t(99541),l=t(85893);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=function(e){return e[0].toUpperCase()+(n=e,n.replace(c,(function(e,n){return n.toUpperCase()}))).slice(1);var n};function f(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.displayName,r=void 0===t?m(e):t,a=n.Component,c=n.defaultProps,h=o.forwardRef((function(n,t){var r=n.className,c=n.bsPrefix,o=n.as,h=void 0===o?a||"div":o,m=(0,i.Z)(n,["className","bsPrefix","as"]),f=(0,u.vE)(c,e);return(0,l.jsx)(h,d({ref:t,className:s()(r,f)},m))}));return h.defaultProps=c,h.displayName=r,h}},44114:function(e,n,t){"use strict";var r=t(67294),i=t(33639),a=t(58263);n.Z=function(e){var n=e.children;e.pageTitle;return r.createElement(a.Z,null,r.createElement(i.Z,{className:"exh_main_content mt-2",style:{backgroundColor:"white"},fluid:!0},n))}},14838:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(67294),i=t(12623),a=t(44114),s=t(92137),c=t(87757),o=t.n(c),u=t(3339),l=t(46594),h=t(87265),d=t(91813),m=function(){var e=(0,r.useState)(),n=e[0],t=e[1],i=new h.GoogleSpreadsheet(d.sheet_id),a=function(){var e=(0,s.Z)(o().mark((function e(){var t,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.useServiceAccountAuth(d);case 3:return e.next=5,i.loadInfo();case 5:return t=i.sheetsById[678756205],r=JSON.stringify(n),e.next=9,t.addRow({country:'"Austria"',questionFour:r});case 9:return a=e.sent,e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(0),console.error("Error: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),c=function(e){t(e.target.value)},m=function(){var e=(0,s.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,a();case 3:window.location.href="/exhibitions/conflicts/inGalleryDE/ConflictExhibitionMapDE";case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.createElement(r.Fragment,null,r.createElement("h1",{className:"mt-5"},"Viele Menschen meinen, Konflikte entstehen vor allem dadurch, dass man einander nicht versteht. Sind Sie auch dieser Ansicht?"),r.createElement(u.Z,{onSubmit:m},["Im Prinzip ja. Oft will man lieber recht haben, als den anderen zu verstehen. Das Ende der Rechthaberei ist oft auch das Ende eines Konfliktes.","Nein. Denn jedes Verstehen hat einmal ein Ende. Ich zum Beispiel kann nicht verstehen, wenn andere nicht verstehen, dass der Klimawandel die Menschheit bedroht. Da hört mein Verständnis auf.","Diese Ansicht ist falsch. Ganz oft kann ich zwar die Haltung eines Menschen nachvollziehen und damit auch verstehen. Der Konflikt ist damit aber noch nicht gelöst. Denn oft teile ich einfach seine Haltung nicht und werde es auch nicht tun.","Es kommt nicht darauf an, den anderen zu verstehen, sondern mit ihm auszukommen. Im Falle eines Konfliktes suche ich deshalb nach Lösungen, denen beide Parteien zustimmen können. Ergebnisse sind wichtiger als gegenseitiges Verständnis.","Ja. Denn den anderen zu verstehen, eröffnet neue Sichtweisen und Wege, den Konflikt zu lösen.","Nein. Es geht nicht um Verständnis, sondern um Interessen. Man muss sie nicht verstehen, sie sind einfach da."].map((function(e,t){return r.createElement(u.Z.Check,{type:"radio",value:e,label:e,id:"answer-"+t,key:"answer-"+t,checked:e===n,onChange:c})})),r.createElement("div",{className:"exh_submit_button"},r.createElement("div",{className:"exh_arrow_container"},r.createElement("img",{className:"exh_blue_arrow",src:"/images/exhibition_assets/arrow_blue.svg",alt:""})),r.createElement(l.Z,{className:"exh_submit_btn",type:"submit",disabled:!n,onClick:m},r.createElement("h1",{style:{color:"white"}},"Einreichen & Ergebnisse anzeigen")))))},f=function(){return r.createElement(a.Z,null,r.createElement("div",{className:"exh_container_inner mt-5"},r.createElement("div",{className:"conflictsQuestions exh_question_intro_text"},r.createElement(i.Z,{className:"badgeConflicts rounded-pill"},r.createElement("h1",null,"ReThinking CONFLICTS"))),r.createElement("div",{className:"conflictsAnswers"},r.createElement("h2",null,"Frage: 4"),r.createElement(m,null))))}},42473:function(e){"use strict";var n=function(){};e.exports=n},91813:function(e){"use strict";e.exports=JSON.parse('{"type":"service_account","project_id":"reinheritexhibitionsmap","private_key_id":"a87b5d31c51f71ef5d9fa0aa20ff5907ea7d4bcd","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCUZd05/cS3egGo\\nzAw7nAAoWNkcowvwn5yA2gFd6HfLpA0b5G16ar0pjneS6ExBUVuOHbHeKqSYf4DY\\nWbFkeOQIhFYAbIlBUfeGoUCpRWRrlWEr7BLkYNm+r0qOCNnf8tehHwTQEEh1ORP0\\nUUvzb4fWgnIErScr2RiUrW7VlUAuVixU5SvHtWcAQZdzqovls2JrJSr32HHWjXVN\\nxQUd2CfUjaXub0qh1Iflwyt8vpCbByClhWObIBBbce2g94B7Vaeik5fttzCWIOrW\\nsMy7QgAav+wo/aoAMSfmWXrj/BjnNxNjRDWIaVd/vFiCTI30PfXF96Ptrq994RXE\\ndOk9dqi3AgMBAAECggEAGLXxpbN1K1w8pH/91Xs/p3hMBvG7jkD1zZr/uUR5lkZm\\nDGv4MvdNMntPu/3EnOfQSBT3xlfxepdYvC4LVQCwcB6hN4bbQC5G+nslikpM04FX\\nYfn4l2DtQUxtLMOajCki8Oh6Y68icaqkgP18mTfMNdMY62Bt8mY/KprKpvQocM6V\\nvzG06/oUTdDdtm1lcFb6dZzhqLFItKqoiN+Ob6suml12pv103Wkk9GOzb0D0XPix\\n8rgbNEtzV7TY694/CsXKnh1JZFO9HRGIIDz6EYxMhi72kJ7eYLGtLg+ZIvOE9F/r\\n40PDEXJdOS6V1gto6azUK5d54/UE4KBQQBP0Yp8luQKBgQDEVN1S+VWpex/6+XIL\\nwKMu5UPNCKXTefsqSc7C2TE2WAUCQIau1etl8NoIy3dqJSxRgCc3ALwZ5gV0MZPD\\nNdDjqKaaZt13kvqqq9ojxJVL+op6mTNpcmgHrlroNCTgN6ErqDr7sjvF1YgFqB4A\\nxLel/3UNKk38c9JMXKxWh12A4wKBgQDBf6IJCzOD0K+1gCEvqmnpDXYJ/LwHGpkp\\nXSXrNZPRhgJjKJG+/K4gZVqteP4QM0Fe3XGNc+1RwSp+uEtAQxU2XGfgVI2LG+f8\\n5Po3Lb751RuBMdRc2tJBCwG2NpfQ4rQ7Bsp9oEjDzkmlkyT7RfTxxLBMOeQXzQPP\\nqNoV5lzlHQKBgFOScFfWjNFE+PsDXbmE+bGHpBHOAZCAlxqMKngkrd8dHpyzzOD1\\nbGuLV7Rwr9c+FZxnucmfBXLcyCuKwwRQjyepbanB6bnxlcQ6vPOGxap+7p17Qzg6\\nm+/RFx9Kuvu6kl+cD+d+GhV/bJRD2Omo0yfVEwVUobe5saYRuMZofrPTAoGAeuv6\\n4qXj/uv2g2W3L1Gh4HQ1tViBlj22aMmMyiQKGIN6RsXB+MMKVvgsJ6GCPIZjE8G3\\nXjXz4AjHVyL6YwN6mUMQljkAhgufT0+jCKSd+pX/2A3wq2AzSzCT0M5TmVY7Sngg\\n8Ld/IiyNKosUZi/l0CS0Hmh0Vw5dSnEowdrKzp0CgYB3F+mXpAZc+LIfuzdUjva/\\nmLgkODrjRh/8EsKoSpbHtAD6I92C70yHAJn8qBQM2ATzp6FoM9iwEF56rbYxKoha\\nW1hoH4nfAxKwqu0mXY/TS4ILdIwjsraL8HBjbXbeHut8TluOMraSitOtRFiKHG6g\\nud+eWXKElsI9GltwhE9WAA==\\n-----END PRIVATE KEY-----\\n","client_email":"reinheritexhibitionsmap@reinheritexhibitionsmap.iam.gserviceaccount.com","client_id":"113827058909396068788","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/reinheritexhibitionsmap%40reinheritexhibitionsmap.iam.gserviceaccount.com","sheet_id":"1DVrPgsLw5hR2BSNlWQr2w3Aq8FQ-TprBuAysd81gJXs","api_key":"AIzaSyCNuVOEkF5WyjVWW3IOt-YE3KNN9NawHHw"}')}}]);
//# sourceMappingURL=component---src-pages-exhibitions-conflicts-in-gallery-de-4th-question-conflict-de-index-tsx-9695e70644da3781dcbd.js.map