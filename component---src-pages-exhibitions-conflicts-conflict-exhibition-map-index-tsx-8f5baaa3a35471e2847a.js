(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[91],{19644:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(67294),r=n(33639),s=n(20994),o=n(7408),l=n(58263),i=n(8500),c=n(25444),u=n(50409),m=n(38760),p=n(14746),h=n(29499);var d=function(){var e=a.useState(!1),t=e[0],n=e[1];return(0,h.useLocation)(),a.createElement(a.Fragment,null,a.createElement(u.Z,{collapseOnSelect:!0,expand:"true",fixed:"top",className:"navExhib navExh_blue"},a.createElement("div",{className:"header-burger"},a.createElement("div",{className:"hamburger"}),a.createElement("div",{className:"hamburger"}),a.createElement("div",{className:"hamburger"})),a.createElement(r.Z,{fluid:!0,className:"exh_navBar_container rounded-pill"},a.createElement(u.Z.Brand,{href:"#home",as:"div",className:"exhibition_navbar"},a.createElement("div",{className:"exhibition_navbar_inner"},a.createElement("a",{className:"exhibition_menu_link",href:"https://reinherit-hub.eu/"},"ReInHerit"),a.createElement("div",{className:"exh_line"}),a.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://reinherit-hub.eu/exhibitions"},"Exhibition"),a.createElement("a",{className:"exhibition_menu_link nav_font",href:"https://collection.reinherit-hub.eu/"},"Collection"))),a.createElement(u.Z.Toggle,{className:"navbar-toggler",onClick:function(){return n(!0)},style:{color:"white"}}),a.createElement(m.Z,{show:t,onHide:function(){return n(!1)},placement:"end",className:"exhibition_burger_container"},a.createElement(m.Z.Header,{closeButton:!0,className:"exhibition_burger"}),a.createElement("div",{className:"exhibition_burger_inner"},a.createElement(p.Z,{className:"flex-sm-column content-end"},a.createElement(c.rU,{className:"link-light text-decoration-none",to:"/about"},"What is ReInHerit"),a.createElement(c.rU,{className:"link-light text-decoration-none",to:"/about/team"},"Who & Where is ReInHerit"),a.createElement(c.rU,{className:"link-light text-decoration-none",to:"/museumcalls/travelling"},"Host an Exhibition"),a.createElement(c.rU,{className:"link-light text-decoration-none",to:"/museumcalls/digital"},"Object Contribution"),a.createElement("div",{className:"exh_space"}),a.createElement("p",null,"Travelling Exhibition:"),a.createElement("a",{href:"https://www.grazmuseum.at/en/exhibition/rethinking-conflicts-how-are-conflicts-reflected-in-objects/",className:"link-light text-decoration-none"},"Graz Museum"),a.createElement("a",{href:"https://www.boccf.org/",className:"link-light text-decoration-none"},"Bank of Cypus Cultural Foundation"),a.createElement("a",{href:"https://cycladic.gr/en",className:"link-light text-decoration-none"}," Museum of Cycladic Art")))))))},f=function(e){var t=e.children,n=e.pageTitle;return a.createElement(l.Z,null,a.createElement(i.Z,{pageTitle:n}),a.createElement(d,null),a.createElement(r.Z,{className:"exh_main_content",style:{backgroundColor:"white"},fluid:!0},t),a.createElement(r.Z,{style:{backgroundColor:"black"},fluid:!0},a.createElement(r.Z,{style:{padding:"10px 0"}},a.createElement(s.Z,null,a.createElement(o.Z,{xl:6,xs:12},a.createElement("div",{className:"exh_footer_grid"},a.createElement("div",{className:"footer_img"},a.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/cc-sticker-2007.png"})),a.createElement("div",{className:"footer_partner_text"},a.createElement("p",{style:{color:"white"}},"All rights reserved excluding works shared under Creative Commons licensing. ",a.createElement("br",null),"Licenses are indicated for respective elements.")))),a.createElement(o.Z,{xl:6,xs:12},a.createElement("div",{className:"exh_footer_grid"},a.createElement("div",{className:"footer_img"},a.createElement("img",{className:"exh_img",src:"/images/exhibition_assets/logo-ce-horizontal-en-neg-nb.png"})),a.createElement("div",{className:"footer_partner_text"},a.createElement("p",{style:{color:"white"}},"This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545"))))),a.createElement(s.Z,null,a.createElement(o.Z,{className:"exh_footer_links"},a.createElement("a",{style:{color:"white"},target:"_blank",href:"/exhibitions/conflicts/imprintConflicts"},"Imprint"),a.createElement("a",{style:{color:"white"},target:"_blank",href:"/about/dataprot"},"Privacy"))))))}},73366:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var a=n(67294),r=n(12623),s=n(20994),o=n(7408),l=n(46594),i=n(19644),c=n(92137),u=n(87757),m=n.n(u),p=n(6158),h=n.n(p),d=n(91813),f=n(87265),v=function(){h().accessToken="pk.eyJ1Ijoia2lhLXoiLCJhIjoiY2xkZzRnZjRnMHRvazN2bzZ0cnh4OWtzeSJ9.COmQgzmRsKnMZKw77WDF6w";var e=new f.GoogleSpreadsheet(d.sheet_id),t=(0,a.useState)([]),n=t[0],r=t[1],s=(0,a.useState)([]),o=(s[0],s[1]);(0,a.useEffect)((function(){function t(){return(t=(0,c.Z)(m().mark((function t(){var n,a,s,l,i,c;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.useServiceAccountAuth(d);case 2:return t.next=4,e.loadInfo();case 4:return t.next=6,e.getInfo();case 6:return n=e.sheetsByIndex[2],t.next=9,n.getRows();case 9:a=t.sent,s=a.map((function(e){return e._rawData})),o(s),l=s.map((function(e){return{exact_match:e[0],longitude:e[1],latitude:e[2],Country:e[3],Ans1a:e[4],Ans1b:e[5],Ans1c:e[6],Ans1d:e[7],Ans1e:e[8],Ans1aFin:e[9],Ans1bFin:e[10],Ans1cFin:e[11],Ans1dFin:e[12],Ans1eFin:e[13]}})),i=l.filter((function(e){return"no answers"!==e.Ans1aFin})),c=i.map((function(e){return{type:"Feature",properties:{Country:e.Country,Answer_A:e.Ans1aFin,Answer_B:e.Ans1bFin,Answer_C:e.Ans1cFin,Answer_D:e.Ans1dFin,Answer_E:e.Ans1eFin},geometry:{coordinates:[Number(e.longitude),Number(e.latitude)],type:"Point"}}})),r(c);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var i=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=new(h().Map)({container:i.current,style:"mapbox://styles/mapbox/light-v11",center:[15.754,48.228],zoom:5.15,projection:"naturalEarth"});e.addControl(new(h().NavigationControl),"top-right");var t={type:"FeatureCollection",features:n};e.on("load",(function(){e.addLayer({id:"resultsAnswerOneConflict",type:"circle",source:{type:"geojson",data:t},paint:{"circle-color":"#526d9d","circle-stroke-width":1,"circle-stroke-color":"#526d9d","circle-opacity":.5,"circle-radius":{property:"Answer_A",stops:[[0,0],[1,5],[5,20]]}}}),e.on("click","resultsAnswerOneConflict",(function(t){var n=t.features[0].geometry.coordinates.slice(),a="<h4>"+t.features[0].properties.Country+"</h4> \n                <ul>\n                  <li>A: In total "+t.features[0].properties.Answer_A+" People</li>\n                  <li>B: In total "+t.features[0].properties.Answer_B+" People</li>\n                  <li>C: In total "+t.features[0].properties.Answer_C+" People</li>\n                  <li>D: In total "+t.features[0].properties.Answer_D+" People</li>\n                  <li>E: In total "+t.features[0].properties.Answer_E+" People</li>\n                </ul>";(new(h().Popup)).setLngLat(n).setHTML(a).addTo(e)})),e.on("mouseenter","resultsAnswerOneConflict",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","places",(function(){e.getCanvas().style.cursor=""}))}))})),a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("div",{ref:i,className:"map-container"})),a.createElement("div",{className:"exh_map_result_content"},a.createElement("h2",null,"Question 1:"),a.createElement("h3",null,'"Violence is no solution" – that\'s what many people say when it comes to conflicts. They wish for a world in which conflicts are resolved without violence. What do you think: Can such a world become reality or will it remain a pipe dream?'),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"A"),a.createElement("p",null,"No. Such a world is not possible. Whether you like it or not, violence is in fact always a solution. It will always remain a solution. It is that simple.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"B"),a.createElement("p",null,"In a world without guns, the gun owner is king. At least that is what modern evolutionary biology says. Anyone who has the opportunity to use violence will eventually do so.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"C"),a.createElement("p",null,"Those who starve or starve are more likely to resort to violence. Because if you have nothing to lose, violence is always an option. Precisely because one has nothing left to lose. Conversely, this also means that those who want a world without conflicts may also have to accept the redistribution of wealth or resources.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"D"),a.createElement("p",null,"Violence is never my first option. But if others resort to violence, I would defend myself – if necessary with violence.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"E"),a.createElement("p",null,"I don't see why a world without violence shouldn't be possible. There is always an alternative to violence. For those who have realized that violence only generates counter-violence, renunciation of violence is the only way to improvement."))),a.createElement("div",{className:"visitCollection"},a.createElement(l.Z,{className:"coll_button",href:"https://collection.reinherit-hub.eu/"},"Visit Collection")))},E=function(){h().accessToken="pk.eyJ1Ijoia2lhLXoiLCJhIjoiY2xkZzRnZjRnMHRvazN2bzZ0cnh4OWtzeSJ9.COmQgzmRsKnMZKw77WDF6w";var e=new f.GoogleSpreadsheet(d.sheet_id),t=(0,a.useState)([]),n=t[0],r=t[1],s=(0,a.useState)([]),o=(s[0],s[1]);(0,a.useEffect)((function(){function t(){return(t=(0,c.Z)(m().mark((function t(){var n,a,s,l,i,c;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.useServiceAccountAuth(d);case 2:return t.next=4,e.loadInfo();case 4:return t.next=6,e.getInfo();case 6:return n=e.sheetsByIndex[5],t.next=9,n.getRows();case 9:a=t.sent,s=a.map((function(e){return e._rawData})),o(s),l=s.map((function(e){return{exact_match:e[0],longitude:e[1],latitude:e[2],Country:e[3],Ans2a:e[4],Ans2b:e[5],Ans2c:e[6],Ans2d:e[7],Ans2e:e[8],Ans2aFin:e[9],Ans2bFin:e[10],Ans2cFin:e[11],Ans2dFin:e[12],Ans2eFin:e[13]}})),i=l.filter((function(e){return"no answers"!==e.Ans2aFin})),c=i.map((function(e){return{type:"Feature",properties:{Country:e.Country,Answer_A:e.Ans2aFin,Answer_B:e.Ans2bFin,Answer_C:e.Ans2cFin,Answer_D:e.Ans2dFin,Answer_E:e.Ans2eFin},geometry:{coordinates:[Number(e.longitude),Number(e.latitude)],type:"Point"}}})),r(c);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var i=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=new(h().Map)({container:i.current,style:"mapbox://styles/mapbox/light-v11",center:[15.754,48.228],zoom:5.15,projection:"naturalEarth"});e.addControl(new(h().NavigationControl),"top-right");var t={type:"FeatureCollection",features:n};e.on("load",(function(){e.addLayer({id:"resultsAnswerTwoConflict",type:"circle",source:{type:"geojson",data:t},paint:{"circle-color":"#526d9d","circle-stroke-width":1,"circle-stroke-color":"#526d9d","circle-opacity":.5,"circle-radius":{property:"Answer_A",stops:[[0,0],[1,5],[5,20]]}}}),e.on("click","resultsAnswerTwoConflict",(function(t){var n=t.features[0].geometry.coordinates.slice(),a="<h4>"+t.features[0].properties.Country+"</h4> \n                <ul>\n                  <li>A: In total "+t.features[0].properties.Answer_A+" People</li>\n                  <li>B: In total "+t.features[0].properties.Answer_B+" People</li>\n                  <li>C: In total "+t.features[0].properties.Answer_C+" People</li>\n                  <li>D: In total "+t.features[0].properties.Answer_D+" People</li>\n                  <li>E: In total "+t.features[0].properties.Answer_E+" People</li>\n                </ul>";(new(h().Popup)).setLngLat(n).setHTML(a).addTo(e)})),e.on("mouseenter","resultsAnswerTwoConflict",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","places",(function(){e.getCanvas().style.cursor=""}))}))})),a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("div",{ref:i,className:"map-container"})),a.createElement("div",{className:"exh_map_result_content"},a.createElement("h2",null,"Question 2:"),a.createElement("h3",null,"Is it bad if you fight back?"),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"A"),a.createElement("p",null,"No. Resistance can be a very good thing and sometimes even becomes a duty. Often you even have to defend what is important to you. In this case I not only have the right but also the duty to defend myself.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"B"),a.createElement("p",null,"I don't know if it is evil to fight back. But for my part I abhor any form of violence. Therefore, if in doubt, I would not defend myself.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"C"),a.createElement("p",null,"Anyone who thinks it is evil to stand up for one's freedom, for example, morally equates oppressor and victim. But that is wrong. A perpetrator is never on the same moral level as the victim. So it is not evil to fight back.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"D"),a.createElement("p",null,"Anyone who resists creates counter-violence with his violence. This definitely leads to a spiral of violence. So it may not be evil to fight back, but it is at least unwise.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"E"),a.createElement("p",null,"Imagine your parents' house suddenly being illegally occupied. What should prevent you from fighting back? Nothing. Any questions?"))),a.createElement("div",{className:"visitCollection"},a.createElement(l.Z,{className:"coll_button",href:"https://collection.reinherit-hub.eu/"},"Visit Collection")))},w=function(){h().accessToken="pk.eyJ1Ijoia2lhLXoiLCJhIjoiY2xkZzRnZjRnMHRvazN2bzZ0cnh4OWtzeSJ9.COmQgzmRsKnMZKw77WDF6w";var e=new f.GoogleSpreadsheet(d.sheet_id),t=(0,a.useState)([]),n=t[0],r=t[1],s=(0,a.useState)([]),o=(s[0],s[1]);(0,a.useEffect)((function(){function t(){return(t=(0,c.Z)(m().mark((function t(){var n,a,s,l,i,c;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.useServiceAccountAuth(d);case 2:return t.next=4,e.loadInfo();case 4:return t.next=6,e.getInfo();case 6:return n=e.sheetsByIndex[8],t.next=9,n.getRows();case 9:a=t.sent,s=a.map((function(e){return e._rawData})),o(s),l=s.map((function(e){return{exact_match:e[0],longitude:e[1],latitude:e[2],Country:e[3],Ans3a:e[4],Ans3b:e[5],Ans3c:e[6],Ans3d:e[7],Ans3e:e[8],Ans3aFin:e[9],Ans3bFin:e[10],Ans3cFin:e[11],Ans3dFin:e[12],Ans3eFin:e[13]}})),i=l.filter((function(e){return"no answers"!==e.Ans3aFin})),c=i.map((function(e){return{type:"Feature",properties:{Country:e.Country,Answer_A:e.Ans3aFin,Answer_B:e.Ans3bFin,Answer_C:e.Ans3cFin,Answer_D:e.Ans3dFin,Answer_E:e.Ans3eFin},geometry:{coordinates:[Number(e.longitude),Number(e.latitude)],type:"Point"}}})),r(c);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var i=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=new(h().Map)({container:i.current,style:"mapbox://styles/mapbox/light-v11",center:[15.754,48.228],zoom:5.15,projection:"naturalEarth"});e.addControl(new(h().NavigationControl),"top-right");var t={type:"FeatureCollection",features:n};e.on("load",(function(){e.addLayer({id:"resultsAnswerThreeConflict",type:"circle",source:{type:"geojson",data:t},paint:{"circle-color":"#526d9d","circle-stroke-width":1,"circle-stroke-color":"#526d9d","circle-opacity":.5,"circle-radius":{property:"Answer_A",stops:[[0,0],[1,5],[5,20]]}}}),e.on("click","resultsAnswerThreeConflict",(function(t){var n=t.features[0].geometry.coordinates.slice(),a="<h4>"+t.features[0].properties.Country+"</h4> \n                <ul>\n                  <li>A: In total "+t.features[0].properties.Answer_A+" People</li>\n                  <li>B: In total "+t.features[0].properties.Answer_B+" People</li>\n                  <li>C: In total "+t.features[0].properties.Answer_C+" People</li>\n                  <li>D: In total "+t.features[0].properties.Answer_D+" People</li>\n                  <li>E: In total "+t.features[0].properties.Answer_E+" People</li>\n                </ul>";(new(h().Popup)).setLngLat(n).setHTML(a).addTo(e)})),e.on("mouseenter","resultsAnswerThreeConflict",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","places",(function(){e.getCanvas().style.cursor=""}))}))})),a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("div",{ref:i,className:"map-container"})),a.createElement("div",{className:"exh_map_result_content"},a.createElement("h2",null,"Question 3:"),a.createElement("h3",null,"Sometimes conflicts are not caused by individuals but because they are built into the social system in which we live. One then speaks of “structural violence”. How should we deal with this structural violence?"),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"A"),a.createElement("p",null,"Granted, no state can be perfect or free of conflicts. In a democracy, however, there is always a way of resolving conflicts without violence. Anyone can get involved politically or take legal action.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"B"),a.createElement("p",null,"Every social system takes far too much time to react to social conflicts. Those who wait for their own country to do something effective to combat social inequality, for example end up waiting too long.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"C"),a.createElement("p",null,"No system, even the best, can ever be perfectly fair. That is in the nature of the systems. We have to put up with that.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"D"),a.createElement("p",null,"Structural violence is always abstract violence. It becomes actual violence only through the people who are part of the system and benefit from it. The most effective lever against structural violence is therefore active resistance to those who enforce it.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"E"),a.createElement("p",null,"Misogyny or racism are not only built into social systems, but also take place in the minds of the population. It is therefore less important to change the system than to change people's attitudes."))),a.createElement("div",{className:"visitCollection"},a.createElement(l.Z,{className:"coll_button",href:"https://collection.reinherit-hub.eu/"},"Visit Collection")))},g=function(){h().accessToken="pk.eyJ1Ijoia2lhLXoiLCJhIjoiY2xkZzRnZjRnMHRvazN2bzZ0cnh4OWtzeSJ9.COmQgzmRsKnMZKw77WDF6w";var e=new f.GoogleSpreadsheet(d.sheet_id),t=(0,a.useState)([]),n=t[0],r=t[1],s=(0,a.useState)([]),o=(s[0],s[1]);(0,a.useEffect)((function(){function t(){return(t=(0,c.Z)(m().mark((function t(){var n,a,s,l,i,c;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.useServiceAccountAuth(d);case 2:return t.next=4,e.loadInfo();case 4:return t.next=6,e.getInfo();case 6:return n=e.sheetsByIndex[11],t.next=9,n.getRows();case 9:a=t.sent,s=a.map((function(e){return e._rawData})),o(s),l=s.map((function(e){return{exact_match:e[0],longitude:e[1],latitude:e[2],Country:e[3],Ans4a:e[4],Ans4b:e[5],Ans4c:e[6],Ans4d:e[7],Ans4e:e[8],Ans4aFin:e[9],Ans4bFin:e[10],Ans4cFin:e[11],Ans4dFin:e[12],Ans4eFin:e[13],Ans4fFin:e[14]}})),i=l.filter((function(e){return"no answers"!==e.Ans4aFin})),c=i.map((function(e){return{type:"Feature",properties:{Country:e.Country,Answer_A:e.Ans4aFin,Answer_B:e.Ans4bFin,Answer_C:e.Ans4cFin,Answer_D:e.Ans4dFin,Answer_E:e.Ans4eFin,Answer_F:e.Ans4fFin},geometry:{coordinates:[Number(e.longitude),Number(e.latitude)],type:"Point"}}})),r(c);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var i=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=new(h().Map)({container:i.current,style:"mapbox://styles/mapbox/light-v11",center:[15.754,48.228],zoom:5.15,projection:"naturalEarth"});e.addControl(new(h().NavigationControl),"top-right");var t={type:"FeatureCollection",features:n};e.on("load",(function(){e.addLayer({id:"resultsAnswerFourConflict",type:"circle",source:{type:"geojson",data:t},paint:{"circle-color":"#526d9d","circle-stroke-width":1,"circle-stroke-color":"#526d9d","circle-opacity":.5,"circle-radius":{property:"Answer_A",stops:[[0,0],[1,5],[5,20]]}}}),e.on("click","resultsAnswerFourConflict",(function(t){var n=t.features[0].geometry.coordinates.slice(),a="<h4>"+t.features[0].properties.Country+"</h4> \n              <ul>\n                <li>A: In total "+t.features[0].properties.Answer_A+" People</li>\n                <li>B: In total "+t.features[0].properties.Answer_B+" People</li>\n                <li>C: In total "+t.features[0].properties.Answer_C+" People</li>\n                <li>D: In total "+t.features[0].properties.Answer_D+" People</li>\n                <li>E: In total "+t.features[0].properties.Answer_E+" People</li>\n                <li>F: In total "+t.features[0].properties.Answer_F+" People</li>\n              </ul>";(new(h().Popup)).setLngLat(n).setHTML(a).addTo(e)})),e.on("mouseenter","resultsAnswerFourConflict",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","places",(function(){e.getCanvas().style.cursor=""}))}))})),a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("div",{ref:i,className:"map-container"})),a.createElement("div",{className:"exh_map_result_content"},a.createElement("h2",null,"Question 4:"),a.createElement("h3",null,"Many people think that conflicts arise primarily because people do not understand each other. Do you agree?"),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"A"),a.createElement("p",null,"Generally, yes. Often one would rather be right than understand the other person. The end of dogmatism is often the end of a conflict.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"B"),a.createElement("p",null,"No. Because every understanding sooner or later comes to an end. For example, I cannot understand when others do not understand that climate change threatens humanity. That is where my understanding ends.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"C"),a.createElement("p",null,"This view is wrong. Quite often I can understand the attitude of a person and thus also understand it. However, the conflict has not yet been resolved by that. Because often I just do not share his attitude and I will not do it either.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"D"),a.createElement("p",null,"It is not about understanding the other person, it is about getting along with them. In the case of a conflict, I therefore look for solutions that both parties can agree to. Results are more important than mutual understanding.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"E"),a.createElement("p",null,"Yes. Because understanding the other opens up new perspectives and ways of resolving the conflict.")),a.createElement("div",{className:"exh_map_quest_result"},a.createElement("span",null,"F"),a.createElement("p",null,"No. It is not about understanding, it is about interests. You do not have to understand them, they are just there."))),a.createElement("div",{className:"visitCollection"},a.createElement(l.Z,{className:"coll_button",href:"https://collection.reinherit-hub.eu/"},"Visit Collection")))},_=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],c=(0,a.useState)(!1),u=c[0],m=c[1],p=(0,a.useState)(!1),h=p[0],d=p[1],f=(0,a.useState)(!1),_=f[0],A=f[1],y=(0,a.useState)(void 0),b=y[0],x=y[1];return a.createElement(i.Z,null,a.createElement("div",{className:"exh_container_inner exh_map_container mt-5"},a.createElement("div",{className:"d-grid gap-2"},a.createElement(r.Z,{className:"badgeConflicts rounded-pill"},a.createElement("h1",null,"Results"))),a.createElement(s.Z,null,a.createElement(o.Z,{lg:3,md:6,sm:12},a.createElement(l.Z,{className:"exh_map_btn "+("Question 1"===b?"active":""),onClick:function(){n((function(e){return!e})),m(!1),d(!1),A(!1),x("Question 1")}},"Question 1")),a.createElement(o.Z,{lg:3,md:6,sm:12},a.createElement(l.Z,{className:"exh_map_btn "+("Question 2"===b?"active":""),onClick:function(){m((function(e){return!e})),n(!1),d(!1),A(!1),x("Question 2")}},"Question 2")),a.createElement(o.Z,{lg:3,md:6,sm:12},a.createElement(l.Z,{className:"exh_map_btn "+("Question 3"===b?"active":""),onClick:function(){d((function(e){return!e})),n(!1),m(!1),A(!1),x("Question 3")}},"Question 3")),a.createElement(o.Z,{lg:3,md:6,sm:12},a.createElement(l.Z,{className:"exh_map_btn "+("Question 4"===b?"active":""),onClick:function(){A((function(e){return!e})),n(!1),m(!1),d(!1),x("Question 4")}},"Question 4"))),a.createElement("div",{className:"exh_btn_content"},t&&a.createElement("h1",null,"Question 1")&&a.createElement(v,null),u&&a.createElement("h1",null,"Question 2")&&a.createElement(E,null),h&&a.createElement("h1",null,"Question 3")&&a.createElement(w,null),_&&a.createElement("h1",null,"Question 4")&&a.createElement(g,null))))}},91813:function(e){"use strict";e.exports=JSON.parse('{"type":"service_account","project_id":"reinheritexhibitionsmap","private_key_id":"a87b5d31c51f71ef5d9fa0aa20ff5907ea7d4bcd","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCUZd05/cS3egGo\\nzAw7nAAoWNkcowvwn5yA2gFd6HfLpA0b5G16ar0pjneS6ExBUVuOHbHeKqSYf4DY\\nWbFkeOQIhFYAbIlBUfeGoUCpRWRrlWEr7BLkYNm+r0qOCNnf8tehHwTQEEh1ORP0\\nUUvzb4fWgnIErScr2RiUrW7VlUAuVixU5SvHtWcAQZdzqovls2JrJSr32HHWjXVN\\nxQUd2CfUjaXub0qh1Iflwyt8vpCbByClhWObIBBbce2g94B7Vaeik5fttzCWIOrW\\nsMy7QgAav+wo/aoAMSfmWXrj/BjnNxNjRDWIaVd/vFiCTI30PfXF96Ptrq994RXE\\ndOk9dqi3AgMBAAECggEAGLXxpbN1K1w8pH/91Xs/p3hMBvG7jkD1zZr/uUR5lkZm\\nDGv4MvdNMntPu/3EnOfQSBT3xlfxepdYvC4LVQCwcB6hN4bbQC5G+nslikpM04FX\\nYfn4l2DtQUxtLMOajCki8Oh6Y68icaqkgP18mTfMNdMY62Bt8mY/KprKpvQocM6V\\nvzG06/oUTdDdtm1lcFb6dZzhqLFItKqoiN+Ob6suml12pv103Wkk9GOzb0D0XPix\\n8rgbNEtzV7TY694/CsXKnh1JZFO9HRGIIDz6EYxMhi72kJ7eYLGtLg+ZIvOE9F/r\\n40PDEXJdOS6V1gto6azUK5d54/UE4KBQQBP0Yp8luQKBgQDEVN1S+VWpex/6+XIL\\nwKMu5UPNCKXTefsqSc7C2TE2WAUCQIau1etl8NoIy3dqJSxRgCc3ALwZ5gV0MZPD\\nNdDjqKaaZt13kvqqq9ojxJVL+op6mTNpcmgHrlroNCTgN6ErqDr7sjvF1YgFqB4A\\nxLel/3UNKk38c9JMXKxWh12A4wKBgQDBf6IJCzOD0K+1gCEvqmnpDXYJ/LwHGpkp\\nXSXrNZPRhgJjKJG+/K4gZVqteP4QM0Fe3XGNc+1RwSp+uEtAQxU2XGfgVI2LG+f8\\n5Po3Lb751RuBMdRc2tJBCwG2NpfQ4rQ7Bsp9oEjDzkmlkyT7RfTxxLBMOeQXzQPP\\nqNoV5lzlHQKBgFOScFfWjNFE+PsDXbmE+bGHpBHOAZCAlxqMKngkrd8dHpyzzOD1\\nbGuLV7Rwr9c+FZxnucmfBXLcyCuKwwRQjyepbanB6bnxlcQ6vPOGxap+7p17Qzg6\\nm+/RFx9Kuvu6kl+cD+d+GhV/bJRD2Omo0yfVEwVUobe5saYRuMZofrPTAoGAeuv6\\n4qXj/uv2g2W3L1Gh4HQ1tViBlj22aMmMyiQKGIN6RsXB+MMKVvgsJ6GCPIZjE8G3\\nXjXz4AjHVyL6YwN6mUMQljkAhgufT0+jCKSd+pX/2A3wq2AzSzCT0M5TmVY7Sngg\\n8Ld/IiyNKosUZi/l0CS0Hmh0Vw5dSnEowdrKzp0CgYB3F+mXpAZc+LIfuzdUjva/\\nmLgkODrjRh/8EsKoSpbHtAD6I92C70yHAJn8qBQM2ATzp6FoM9iwEF56rbYxKoha\\nW1hoH4nfAxKwqu0mXY/TS4ILdIwjsraL8HBjbXbeHut8TluOMraSitOtRFiKHG6g\\nud+eWXKElsI9GltwhE9WAA==\\n-----END PRIVATE KEY-----\\n","client_email":"reinheritexhibitionsmap@reinheritexhibitionsmap.iam.gserviceaccount.com","client_id":"113827058909396068788","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/reinheritexhibitionsmap%40reinheritexhibitionsmap.iam.gserviceaccount.com","sheet_id":"1DVrPgsLw5hR2BSNlWQr2w3Aq8FQ-TprBuAysd81gJXs","api_key":"AIzaSyCNuVOEkF5WyjVWW3IOt-YE3KNN9NawHHw"}')}}]);
//# sourceMappingURL=component---src-pages-exhibitions-conflicts-conflict-exhibition-map-index-tsx-8f5baaa3a35471e2847a.js.map