(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{177:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(182),i=function(e){var n=e.recipes;return a.createElement(a.Fragment,null,n.map(function(e){var n=e.node;return a.createElement("div",{key:n.fields.slug},a.createElement(o.c,{to:n.fields.slug},a.createElement("span",null,n.frontmatter.title)))}))};t.d(n,"listQuery",function(){return c});n.default=function(e){var n=e.data,t=e.pageContext,a=n.allMarkdownRemark.edges.filter(function(e){return e.node.frontmatter.category===t.category});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,'All post categorized as "',t.category,'"'),r.a.createElement(i,{recipes:a}))};var c="397479966"},179:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return r});var a={rgb:{blu:"#1901FE",verde:"#00FD03",cyan:"#0EF7FF",magenta:"#FF02FC"},pastello:{verdino:"#DFF884",verdinoDark:"#CFEC6B",verdeAcqua:"#60FFC0",verdeAcquaDark:"#4FEBAD",cyan:"#79FFFD",cyanDark:"#56EDEB",salmone:"#FFA881",salmoneDark:"#E99068",magenta:"#FF73B0",magentaDark:"#F74C96",lilla:"#9499FF",lillaDark:"#7C82F0"},grigio:{light:"#e6e6e6",medium:"#c0c0c0",dark:"#808080"},bianco:"#fff",nero:"#000",antracite:"#2c2c2c"},r={monospace:'"VT323", monospace'}},180:function(e,n,t){var a;e.exports=(a=t(183))&&a.default||a},181:function(e,n,t){"use strict";t.d(n,"b",function(){return s});var a=t(0),r=t.n(a),o=t(11),i=t.n(o),c=t(58),u=t.n(c);t.d(n,"a",function(){return u.a});t(180);var l=r.a.createContext({});function d(e){var n=e.staticQueryData,t=e.data,a=e.query,o=e.render,i=t?t.data:n[a]&&n[a].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var n=e.data,t=e.query,a=e.render,o=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(d,{data:n,query:t,render:a||o,staticQueryData:e})})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},182:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"d",function(){return c}),t.d(n,"c",function(){return l}),t.d(n,"b",function(){return u});var a=t(178),r=t(179),o=t(181),i=a.b.p.withConfig({displayName:"Typography__Dida",componentId:"edwu0d-0"})(["font-family:",";font-size:18px;color:#2c2c2c;user-select:none;"],r.b.monospace),c=a.b.h3.withConfig({displayName:"Typography__TitleRecipe",componentId:"edwu0d-1"})(["font-family:'Fira Code Bold';font-size:20px;color:",";"],r.a.rgb.blu),u=a.b.h5.withConfig({displayName:"Typography__Difficulty",componentId:"edwu0d-2"})(["font-family:'Fira Code Medium';font-size:15px;color:",";"],r.a.grigio.medium),l=Object(a.b)(o.a).withConfig({displayName:"Typography__LinkStyled",componentId:"edwu0d-3"})(["text-decoration:none;"])},183:function(e,n,t){"use strict";t.r(n);t(17);var a=t(0),r=t.n(a),o=t(11),i=t.n(o),c=t(85),u=function(e){var n=e.location,t=e.pageResources;return t?r.a.createElement(c.a,Object.assign({location:n,pageResources:t},t.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=u}}]);
//# sourceMappingURL=component---src-templates-recipe-list-by-category-tsx-5e74c7a81cdf0576e01b.js.map