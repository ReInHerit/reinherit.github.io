(self.webpackChunkreinherit_digital_hub=self.webpackChunkreinherit_digital_hub||[]).push([[22],{2726:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(7294),a=n(5061),o=n(8167),l=n(8014),c=n(7606),i=n(5444),u=n(2623),m=n(3339),s=n(7388),d=n(845),f=n(8116),p=n(3176),b=n(3605),h=function(){var e=(0,i.K2)(g),t=r.useState([]),n=t[0],h=t[1],E=function(e){var t=(0,a.Z)(n);if(n.includes(e)){var r=t.filter((function(t){return e!==t}));h((function(){return r}))}else t.push(e),h((function(){return t}))};return r.createElement(d.Z,{side:r.createElement("div",{className:"bg-white card p-4 mb-2 border-0 shadow"},r.createElement("p",null,"Filter categories"),0!==n.length?n.map((function(e){return r.createElement(u.Z,{onClick:function(){return E(e)},bg:"white",color:"black",text:"black",className:"me-1 btn border"},e)})):r.createElement(u.Z,{className:"me-1 btn border",bg:"white",color:"black",text:"black"},"*"),r.createElement("br",null),s.m.extractUniqueTags(e).sort().map((function(e){return r.createElement(m.Z.Check,{type:"checkbox",checked:n.includes(e),defaultChecked:!1,key:e,onClick:function(){return E(e)},label:e,value:e})})))},r.createElement(r.Fragment,null,r.createElement(f.Z,null,e.allMarkdownRemark.edges.map((function(e){return 0===n.length||n.some((function(t){return!!e.node.frontmatter.tool_type&&e.node.frontmatter.tool_type.includes(t)}))?r.createElement(p.Z,{key:e.node.frontmatter.pageId,body:e.node.excerpt,title:e.node.frontmatter.title,url:"/tools/components/"+e.node.frontmatter.pageId,uid:e.node.frontmatter.pageId,footerContent:r.createElement("div",null,r.createElement("p",{className:"m-0"},r.createElement(c.G,{icon:o.SZ,scale:".5x"})," - ",e.node.wordCount.words," words"),r.createElement("p",{className:"m-0"},r.createElement(c.G,{icon:l.MJ3,scale:".5x"})," - ",e.node.frontmatter.license),e.node.frontmatter.mainReference&&r.createElement("p",{className:"m-0"},r.createElement("a",{style:{color:"#6c757d"},className:"text-decoration-none",target:"_blank",href:e.node.frontmatter.mainReference},r.createElement(c.G,{icon:l.nNP,scale:".5x"})," - ",e.node.frontmatter.mainReference)))},e.node.frontmatter.thumbnail&&r.createElement(b.Z,{src:e.node.frontmatter.thumbnail})):void 0})))))},g="2335475082",E=n(8439),k=n(513),w=function(){return r.createElement(E.Z,{pageTitle:"Tool-components | ReInHerit Digital Hub"},r.createElement(k.Z,{subHeading:"Building blocks for the applications provided by ReInHerit",subText:"Here you'll find all the building blocks for the applications at the tool apps page.",breadCrumb:[{label:"Resources",value:"/resources"},{label:"Tool-components",value:"/tools/components"}]},"Tool components"),r.createElement("p",{className:"w-75"}),r.createElement(h,null))}},7388:function(e,t,n){"use strict";n.d(t,{m:function(){return r}});var r={checkSSR:function(){return"undefined"==typeof window},extractUniqueTags:function(e){var t=[];e.allMarkdownRemark.edges.forEach((function(e){e.node.frontmatter.tags&&e.node.frontmatter.tags.forEach((function(e){t.push(e)}))}));var n=new Set(t);return Array.from(n)}}}}]);
//# sourceMappingURL=component---src-pages-tools-components-tsx-679e35243699d4693c34.js.map