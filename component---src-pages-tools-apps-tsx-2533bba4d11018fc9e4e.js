(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[910],{2623:function(e,t,r){"use strict";var n=r(6156),a=r(1253),o=r(5900),l=r.n(o),c=r(7294),i=r(9541),s=r(5893);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=c.forwardRef((function(e,t){var r=e.bsPrefix,n=e.bg,o=e.pill,c=e.text,u=e.className,p=e.as,d=void 0===p?"span":p,f=(0,a.Z)(e,["bsPrefix","bg","pill","text","className","as"]),b=(0,i.vE)(r,"badge");return(0,s.jsx)(d,m(m({ref:t},f),{},{className:l()(u,b,o&&"rounded-pill",c&&"text-".concat(c),n&&"bg-".concat(n))}))}));p.displayName="Badge",p.defaultProps={bg:"primary",pill:!1},t.Z=p},7640:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(7294),a=r(5061),o=r(8167),l=r(8014),c=r(7606),i=r(5444),s=r(2623),u=r(3339),m=r(845),p=r(8116),d=r(3176),f=r(3605),b=function(){var e=(0,i.K2)(g),t=n.useState([]),r=t[0],b=t[1],h=function(e){var t=(0,a.Z)(r);if(r.includes(e)){var n=t.filter((function(t){return e!==t}));b((function(){return n}))}else t.push(e),b((function(){return t}))};return n.createElement(m.Z,{side:n.createElement("div",{className:"bg-white card p-3 mb-2 border-0 shadow"},n.createElement("p",null,"Filter categories"),0!==r.length?r.map((function(e){return n.createElement(s.Z,{onClick:function(){return h(e)},bg:"white",color:"black",text:"black",className:"me-1 btn border"},e)})):n.createElement(s.Z,{className:"me-1 btn border",bg:"white",color:"black",text:"black"},"*"),n.createElement("br",null),["Tag A","Tag B","Tag C"].sort().map((function(e){return n.createElement(u.Z.Check,{type:"checkbox",checked:r.includes(e),defaultChecked:!1,key:e,onClick:function(){return h(e)},label:e,value:e})})))},n.createElement(n.Fragment,null,n.createElement(p.Z,null,e.allMarkdownRemark.edges.map((function(e){return 0===r.length||r.some((function(t){return!!e.node.frontmatter.tool_type&&e.node.frontmatter.tool_type.includes(t)}))?n.createElement(d.Z,{key:e.node.frontmatter.pageId,body:e.node.excerpt,title:e.node.frontmatter.title,url:"/tools/apps/"+e.node.frontmatter.pageId,uid:e.node.frontmatter.pageId,footerContent:n.createElement("div",null,n.createElement("p",{className:"m-0"},n.createElement(c.G,{icon:o.SZ,scale:".5x"})," - ",e.node.wordCount.words," words"),n.createElement("p",{className:"m-0"},n.createElement(c.G,{icon:l.MJ3,scale:".5x"})," - ",e.node.frontmatter.license),e.node.frontmatter.mainReference&&n.createElement("p",{className:"m-0"},n.createElement("a",{style:{color:"#6c757d"},className:"text-decoration-none",target:"_blank",href:e.node.frontmatter.mainReference},n.createElement(c.G,{icon:l.nNP,scale:".5x"})," - ",e.node.frontmatter.mainReference)))},e.node.frontmatter.thumbnail&&n.createElement(f.Z,{src:e.node.frontmatter.thumbnail})):void 0})))))},g="208777107",h=r(8439),E=r(513),y=function(){return n.createElement(h.Z,{pageTitle:"Tool-apps | ReInHerit Digital Hub"},n.createElement(E.Z,{subHeading:"Applications available via the ReInHerit digital hub.",subText:"Here you'll find applications that are either developed within the ReInHerit project or play an important role for CH management or preservation. At tool components you will find the building blocks necessary for the implementation of these apps.",breadCrumb:[{label:"Resources",value:"/resources"},{label:"Tool-apps",value:"/tools/apps"}]},"Tool apps"),n.createElement("p",null),n.createElement(b,null))}}}]);
//# sourceMappingURL=component---src-pages-tools-apps-tsx-2533bba4d11018fc9e4e.js.map