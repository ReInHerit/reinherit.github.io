(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[7117],{96909:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var o=n(67294),i=n(12623),r=n(19644),a=n(92960),l=function(){var e=(0,o.useState)(""),t=e[0],n=e[1];return(0,o.useEffect)((function(){localStorage.setItem("countryConflict",JSON.stringify(t))}),[t]),o.createElement("div",{className:"exh_country_selection"},o.createElement("h3",null,"But first, where are you?"),o.createElement(a.Px,{value:t,onChange:n}))},s=n(92137),c=n(87757),u=n.n(c),h=n(3339),m=n(46594),p=n(87265),d=n(91813),w=function(){var e=(0,o.useState)(),t=e[0],n=e[1],i="undefined"!=typeof window?localStorage.getItem("countryConflict"):null,r=new p.GoogleSpreadsheet(d.sheet_id),a=function(){var e=(0,s.Z)(u().mark((function e(){var n,o,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.useServiceAccountAuth(d);case 3:return e.next=5,r.loadInfo();case 5:return n=r.sheetsById[538400691],o=JSON.stringify(t),e.next=9,n.addRow({country:i,questionOne:o});case 9:return a=e.sent,e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(0),console.error("Error: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),l=function(e){n(e.target.value)},c=function(){var e=(0,s.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a();case 3:window.location.href="/exhibitions/conflicts/ConflictQuestions/2ndQuestionConflict";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.createElement(o.Fragment,null,o.createElement("h1",{className:"mt-5"},'"Violence is no solution" – that\'s what many people say when it comes to conflicts. They wish for a world in which conflicts are resolved without violence. What do you think: Can such a world become reality or will it remain a pipe dream?'),o.createElement(h.Z,{onSubmit:c},["No. Such a world is not possible. Whether you like it or not, violence is in fact always a solution. It will always remain a solution. It is that simple.","In a world without guns, the gun owner is king. At least that is what modern evolutionary biology says. Anyone who has the opportunity to use violence will eventually do so.","Those who starve or are starved are more likely to resort to violence. Because if you have nothing to lose, violence is always an option. Precisely because one has nothing left to lose. Conversely, this also means that those who want a world without conflicts may also have to accept the redistribution of wealth or resources.","Violence is never my first option. But if others resort to violence, I would defend myself – if necessary with violence.","I don't see why a world without violence shouldn't be possible. There is always an alternative to violence. For those who have realized that violence only generates counter-violence, renunciation of violence is the only way to improvement."].map((function(e,n){return o.createElement(h.Z.Check,{type:"radio",name:"exh_questions",value:e,label:e,id:"answer-"+n,key:"answer-"+n,checked:e===t,onChange:l})})),o.createElement("div",{className:"exh_submit_button"},o.createElement("div",{className:"exh_arrow_container"},o.createElement("img",{className:"exh_blue_arrow",src:"/images/exhibition_assets/arrow_blue.svg",alt:""})),o.createElement(m.Z,{className:"exh_submit_btn",type:"submit",disabled:!t,onClick:c},o.createElement("h1",{style:{color:"white"}},"Next Question")))))},f=function(){return o.createElement(r.Z,null,o.createElement("div",{className:"exh_container_inner mt-5"},o.createElement(i.Z,{className:"badgeConflicts rounded-pill"},o.createElement("h1",null,"ReThinking CONFLICTS")),o.createElement("div",{className:"conflictsQuestions exh_question_intro_text"},o.createElement("h4",null,"How do you approach conflicts?"),o.createElement("p",null,"Note data protection: ",o.createElement("br",null),"the collected data is used exclusively for statistics purposes within the exhibition."),o.createElement(l,null)),o.createElement("div",{className:"conflictsAnswers"},o.createElement("h2",null,"Question: 1"),o.createElement(w,null))))}},91813:function(e){"use strict";e.exports=JSON.parse('{"type":"service_account","project_id":"reinheritexhibitionsmap","private_key_id":"a87b5d31c51f71ef5d9fa0aa20ff5907ea7d4bcd","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCUZd05/cS3egGo\\nzAw7nAAoWNkcowvwn5yA2gFd6HfLpA0b5G16ar0pjneS6ExBUVuOHbHeKqSYf4DY\\nWbFkeOQIhFYAbIlBUfeGoUCpRWRrlWEr7BLkYNm+r0qOCNnf8tehHwTQEEh1ORP0\\nUUvzb4fWgnIErScr2RiUrW7VlUAuVixU5SvHtWcAQZdzqovls2JrJSr32HHWjXVN\\nxQUd2CfUjaXub0qh1Iflwyt8vpCbByClhWObIBBbce2g94B7Vaeik5fttzCWIOrW\\nsMy7QgAav+wo/aoAMSfmWXrj/BjnNxNjRDWIaVd/vFiCTI30PfXF96Ptrq994RXE\\ndOk9dqi3AgMBAAECggEAGLXxpbN1K1w8pH/91Xs/p3hMBvG7jkD1zZr/uUR5lkZm\\nDGv4MvdNMntPu/3EnOfQSBT3xlfxepdYvC4LVQCwcB6hN4bbQC5G+nslikpM04FX\\nYfn4l2DtQUxtLMOajCki8Oh6Y68icaqkgP18mTfMNdMY62Bt8mY/KprKpvQocM6V\\nvzG06/oUTdDdtm1lcFb6dZzhqLFItKqoiN+Ob6suml12pv103Wkk9GOzb0D0XPix\\n8rgbNEtzV7TY694/CsXKnh1JZFO9HRGIIDz6EYxMhi72kJ7eYLGtLg+ZIvOE9F/r\\n40PDEXJdOS6V1gto6azUK5d54/UE4KBQQBP0Yp8luQKBgQDEVN1S+VWpex/6+XIL\\nwKMu5UPNCKXTefsqSc7C2TE2WAUCQIau1etl8NoIy3dqJSxRgCc3ALwZ5gV0MZPD\\nNdDjqKaaZt13kvqqq9ojxJVL+op6mTNpcmgHrlroNCTgN6ErqDr7sjvF1YgFqB4A\\nxLel/3UNKk38c9JMXKxWh12A4wKBgQDBf6IJCzOD0K+1gCEvqmnpDXYJ/LwHGpkp\\nXSXrNZPRhgJjKJG+/K4gZVqteP4QM0Fe3XGNc+1RwSp+uEtAQxU2XGfgVI2LG+f8\\n5Po3Lb751RuBMdRc2tJBCwG2NpfQ4rQ7Bsp9oEjDzkmlkyT7RfTxxLBMOeQXzQPP\\nqNoV5lzlHQKBgFOScFfWjNFE+PsDXbmE+bGHpBHOAZCAlxqMKngkrd8dHpyzzOD1\\nbGuLV7Rwr9c+FZxnucmfBXLcyCuKwwRQjyepbanB6bnxlcQ6vPOGxap+7p17Qzg6\\nm+/RFx9Kuvu6kl+cD+d+GhV/bJRD2Omo0yfVEwVUobe5saYRuMZofrPTAoGAeuv6\\n4qXj/uv2g2W3L1Gh4HQ1tViBlj22aMmMyiQKGIN6RsXB+MMKVvgsJ6GCPIZjE8G3\\nXjXz4AjHVyL6YwN6mUMQljkAhgufT0+jCKSd+pX/2A3wq2AzSzCT0M5TmVY7Sngg\\n8Ld/IiyNKosUZi/l0CS0Hmh0Vw5dSnEowdrKzp0CgYB3F+mXpAZc+LIfuzdUjva/\\nmLgkODrjRh/8EsKoSpbHtAD6I92C70yHAJn8qBQM2ATzp6FoM9iwEF56rbYxKoha\\nW1hoH4nfAxKwqu0mXY/TS4ILdIwjsraL8HBjbXbeHut8TluOMraSitOtRFiKHG6g\\nud+eWXKElsI9GltwhE9WAA==\\n-----END PRIVATE KEY-----\\n","client_email":"reinheritexhibitionsmap@reinheritexhibitionsmap.iam.gserviceaccount.com","client_id":"113827058909396068788","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/reinheritexhibitionsmap%40reinheritexhibitionsmap.iam.gserviceaccount.com","sheet_id":"1DVrPgsLw5hR2BSNlWQr2w3Aq8FQ-TprBuAysd81gJXs","api_key":"AIzaSyCNuVOEkF5WyjVWW3IOt-YE3KNN9NawHHw"}')}}]);
//# sourceMappingURL=component---src-pages-exhibitions-conflicts-conflict-questions-1st-question-conflict-index-tsx-a1c98067703ab100facc.js.map