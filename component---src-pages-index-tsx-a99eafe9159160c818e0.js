(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+ego":function(e,t,n){"use strict";var i=n("V5c9"),r=n("q1tI"),o=n("qhky"),a=n("Wbzz"),l=(n("VxdY"),n("vOnD")),c=l.b.div.withConfig({displayName:"LayoutRoot__StyledLayoutRoot",componentId:"sc-1y6n0er-0"})([""]),s=function(e){var t=e.children,n=e.className;return r.createElement(c,{className:n},t)},d=l.b.main.withConfig({displayName:"LayoutMain__StyledLayoutMain",componentId:"sc-3bwl82-0"})([""]),u=function(e){var t=e.children,n=e.className;return r.createElement(d,{className:n},t)};t.a=function(e){var t=e.children;return r.createElement(a.StaticQuery,{query:"3855419220",render:function(e){return r.createElement(s,null,r.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]}),r.createElement(o.a,null,r.createElement("link",{href:"https://fonts.googleapis.com/css?family=VT323&display=swap",rel:"stylesheet"}),r.createElement("link",{href:"https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap",rel:"stylesheet"}),r.createElement("link",{rel:"shortcut icon",href:"../assets/lm-favicon.grigio.png"})),r.createElement(u,null,t))},data:i})}},"1/Ks":function(e,t,n){"use strict";n("EU/P")("trimLeft",(function(e){return function(){return e(this,1)}}),"trimStart")},"7Cbv":function(e,t,n){"use strict";n("CtJk"),n("n7j8");var i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),r=new Uint8Array(16);function o(){if(!i)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(r)}n("q8oJ"),n("C9fy"),n("8npG");for(var a=[],l=0;l<256;++l)a[l]=(l+256).toString(16).substr(1);var c=function(e,t){var n=t||0,i=a;return[i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]]].join("")};t.a=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t)for(var a=0;a<16;++a)t[i+a]=r[a];return t||c(r)}},CtJk:function(e,t,n){n("Sc3u")("Uint8",1,(function(e){return function(t,n,i){return e(this,t,n,i)}}))},HQAx:function(e,t,n){"use strict";var i=n("P8UN"),r=n("ewoU"),o=n("DFzH"),a=n("kiRH"),l=n("nONw"),c=n("ytzU");i(i.P,"Array",{flatMap:function(e){var t,n,i=o(this);return l(e),t=a(i.length),n=c(i,0),r(n,i,i,t,0,1,e,arguments[1]),n}}),n("Dq1/")("flatMap")},I17o:function(e,t,n){"use strict";var i=n("P8UN"),r=n("pTxf"),o=n("CL53"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);i(i.P+i.F*a,"String",{padEnd:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},JnLX:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0M3B4IiB2aWV3Qm94PSIwIDAgNDAgNDMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU2LjIgKDgxNjcyKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJIb21lcGFnZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTIuNTAzMiwtMi4xMzE2MjgyMWUtMTQgTDYuMTM5MiwzLjQ1MSBMMTAuOTQwMiwyLjAwNyBMNy40ODkyLDUuNjQzIEw4LjkzMzIsMTAuNDQ0IEw1LjI5NzIsNi45OTMgTDAuNDk2Miw4LjQzNyBMMy45NDcyLDQuODAxIEwyLjUwMzIsLTIuMTMxNjI4MjFlLTE0IFogTTM0LjA1MiwzOC4xNjk0IEwzMS41OTUsMzkuNTE0NCBMMzEuMzc2LDQyLjMwNjQgTDMwLjAzMSwzOS44NTA0IEwyNy4yMzksMzkuNjMwNCBMMjkuNjk1LDM4LjI4NTQgTDI5LjkxNCwzNS40OTM0IEwzMS4yNiwzNy45NTA0IEwzNC4wNTIsMzguMTY5NCBaIE0zOS45NTQ4LDEwLjgwNjEgTDM3LjI3NzgsMTMuODg4MSBMMzcuNTMwOCwxNy45NjIxIEwzNC40NDk4LDE1LjI4NTEgTDMwLjM3NDgsMTUuNTM3MSBMMzMuMDUxOCwxMi40NTYxIEwzMi43OTk4LDguMzgyMSBMMzUuODgwOCwxMS4wNTkxIEwzOS45NTQ4LDEwLjgwNjEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjMEVGN0ZGIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="},OyqW:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI1N3B4IiB2aWV3Qm94PSIwIDAgNTIgNTciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU2LjIgKDgxNjcyKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5GaWxsIDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSG9tZXBhZ2UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik00Ny43LDE1LjkyNjcgQzQ1LjUyMSwxOC4zODM3IDQyLjcxNSwyMC4zNTI3IDQwLjA2NywyMS4zNzM3IEMzNC45MDksMjMuMzYwNyAzMS4yNDcsMjUuMzkxNyAyNy41OCwyOS41MjY3IEwzLjE4LDU2LjgyMjcgTDAsNTQuMDAyNyBMMjQuMTg0LDI2LjUyMjcgQzI3Ljg0OCwyMi4zOTA3IDI5LjQzMSwxOC41MTk3IDMwLjc4NCwxMy4xNjY3IEMzMS40ODEsMTAuNDA5NyAzMy4xMDYsNy4zNzk3IDM1LjI4OCw0LjkxODcgQzQwLjAwNiwtMC40MDEzIDQ1LjMwNSwtMC43NjkzIDQ4LjcyNCwyLjI2MzcgQzUyLjE1LDUuMzAyNyA1Mi40MTgsMTAuNjA3NyA0Ny43LDE1LjkyNjciIGlkPSJGaWxsLTEiIGZpbGw9IiMwRUY3RkYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"listRecipeQuery",(function(){return U}));var i=n("q1tI"),r=n("+ego"),o=n("vOnD"),a=(n("sC2a"),n("E5k/"),n("pJf4"),n("v9g0"),n("uas8")),l=n("LvDl"),c=n("qR4i"),s={magenta:{primaryColor:c.a.pastello.magenta,secondaryColor:c.a.pastello.magentaDark},verdeAcqua:{primaryColor:c.a.pastello.verdeAcqua,secondaryColor:c.a.pastello.verdeAcquaDark},azzurro:{primaryColor:c.a.pastello.cyan,secondaryColor:c.a.pastello.cyanDark},lilla:{primaryColor:c.a.pastello.lilla,secondaryColor:c.a.pastello.lillaDark},salmone:{primaryColor:c.a.pastello.salmone,secondaryColor:c.a.pastello.salmoneDark}},d=function(e){switch(e){case"magenta":return s.magenta.primaryColor;case"verdeAcqua":return s.verdeAcqua.primaryColor;case"azzurro":return s.azzurro.primaryColor;case"lilla":return s.lilla.primaryColor;case"salmone":return s.salmone.primaryColor}},u=o.b.div.withConfig({displayName:"styles__WrapperPostIt",componentId:"n4gbt7-0"})(["position:relative;background:",";width:",";height:",";padding:20px;&::before{content:'';position:absolute;right:20px;bottom:-20px;left:0;border:10px solid ",";z-index:-1;}&::after{content:'';position:absolute;right:0;bottom:-20px;border-width:20px 20px 0 0;border-style:solid;border-color:"," transparent;}"],(function(e){return e.background?d(e.background):s.magenta.primaryColor}),(function(e){return e.width?""+e.width:"250px"}),(function(e){return e.width?""+e.width:""}),(function(e){return e.background?d(e.background):s.magenta.secondaryColor}),(function(e){return e.background?function(e){switch(e){case"magenta":return s.magenta.secondaryColor;case"verdeAcqua":return s.verdeAcqua.secondaryColor;case"azzurro":return s.azzurro.secondaryColor;case"lilla":return s.lilla.secondaryColor;case"salmone":return s.salmone.secondaryColor}}(e.background):s.magenta.secondaryColor})),g=function(e){var t=e.background,n=e.content,r=e.width,o=e.height,a=e.zIndex,l=e.style;return i.createElement(u,{background:t,style:Object.assign({width:r,height:o,zIndex:a},l)},n)},m=function(e){var t=e.categories,n=e.style,r=e.height,o=e.width,s=[{name:"antipasti",position:1},{name:"primi",position:2},{name:"secondi",position:3},{name:"dolci",position:4},{name:"piatti unici",position:5},{name:"frullati",position:6}],d=Object(l.sortBy)(t.map((function(e){return s.find((function(t){if(t.name===e.fieldValue)return{position:t.position,category:e.fieldValue}}))})),"position");return i.createElement(g,{style:Object.assign({gridColumnStart:5,gridColumnEnd:5,gridRowStart:2,gridRowEnd:4},n),width:o||"200px",height:r||"180px",background:"salmone",content:i.createElement(i.Fragment,null,d.map((function(e){return i.createElement(a.c,{key:e.name,to:"/category/"+("undefined"===e.name?"uncategorized":e.name.toLowerCase().trim().replace(" ","-"))+"/"},i.createElement(a.a,{style:{marginTop:5,fontSize:23,whiteSpace:"nowrap",color:c.a.bianco}},"undefined"===e.name?"Uncategorized":e.name))})))})},p=n("7Cbv"),I=o.b.div.withConfig({displayName:"Cibamarsi__Wrapper",componentId:"zldfa9-0"})(["position:fixed;z-index:10;pointer-events:none;& > svg > text{font-size:13vw;stroke:",";stroke-width:2;fill:none;user-select:none;font-family:'Fira Code Regular';}"],c.a.rgb.magenta),y=function(){var e=Object(i.useRef)(Object(p.a)()),t=Object(i.useRef)(Object(p.a)()),n=Object(i.useState)({textHeight:0,viewportWidth:0}),r=n[0],o=n[1],a=function(){var e=document.getElementById(t.current);if(e){var n=e.getBoundingClientRect().height;o(Object.assign({},r,{textHeight:n}))}},l=function(){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);o((function(t){return Object.assign({},t,{viewportWidth:e})}))};Object(i.useEffect)((function(){return a(),l(),window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[]),Object(i.useEffect)((function(){console.log("textHeight",r.textHeight),a()}),[r.viewportWidth]);var c=r.viewportWidth>=2030?-30:r.viewportWidth>=1760?-25:-20;return i.createElement(I,{id:e.current},i.createElement("svg",{height:r.textHeight,width:"100vw"},i.createElement("text",{x:c,y:r.textHeight-20,id:t.current,dominantBaseline:"start"},"cibamarsi")))},f=o.b.div.withConfig({displayName:"styles__WrapperImg",componentId:"sc-142134p-0"})(["width:100%;height:100%;background:#f3f3f3;box-shadow:",";margin-bottom:30px;cursor:pointer;object-fit:contain;"],(function(e){return"15px 15px 0px 0px "+e.shadowColor})),w=o.b.img.withConfig({displayName:"styles__RecipeImg",componentId:"sc-142134p-1"})(["width:100%;height:100%;"]),M=function(e){var t=e.selectedRecipe,n=e.linkTo,r=e.style,o=i.useState({overImage:!1}),l=o[0],s=o[1],d=t.node,u=d.frontmatter.image,g=l.overImage?c.a.pastello.lilla:c.a.pastello.verdino,m=u?u.find((function(e){return"cover"===e.type})):null;return i.createElement(a.c,{to:n,style:r},i.createElement("div",{onMouseOver:function(){return s({overImage:!0})},onMouseOut:function(){return s({overImage:!1})},style:{width:350,height:220}},i.createElement(f,{shadowColor:g},m&&i.createElement(w,{src:m.url.childImageSharp.resize.src})),i.createElement(a.d,null,d.frontmatter.title),i.createElement(a.b,{style:{marginTop:10,display:"flex",alignItems:"center"}},i.createElement("span",{style:{marginLeft:10,marginRight:5}},function(e){switch(e){case"facilissimo":return"🤗";case"facile":return"😊";case"te devi impegnà":return"😏"}}(d.frontmatter.difficulty)),d.frontmatter.difficulty)))},b=function(e,t){return Math.floor(Math.random()*(e-t+1)+t)},C=Object(o.c)(["0%{font-size:15px left:calc(50% - 10px)}15%{font-size:20px left:calc(50% - 12px)}20%{font-size:15px left:calc(50% - 10px)}30%{font-size:20px left:calc(50% - 12px)}40%{font-size:15px left:calc(50% - 10px)}45%{font-size:15px left:calc(50% - 10px)}50%{font-size:15px left:calc(50% - 10px)}60%{font-size:20px left:calc(50% - 12px)}65%{font-size:23px left:calc(50% - 15px)}85%{font-size:20px left:calc(50% - 12px)}100%{font-size:15px left:calc(50% - 10px)}"]),h=o.b.div.withConfig({displayName:"HeartBkg__Wrapper",componentId:"sc-1rhrtm0-0"})(["position:fixed;left:calc(50% - 10px);font-size:15px;top:50%;user-select:none;transition:left 0.2s,font-size 0.2s;",""],(function(e){return e.heartOver&&Object(o.a)(["animation:"," 1.5s infinite;"],C)})),N=function(){var e=i.useState({hearthOver:!1}),t=e[0],n=e[1];return i.useEffect((function(){t.hearthOver&&window.setTimeout((function(){return n({hearthOver:!1})}),5e3)}),[t.hearthOver]),i.createElement(h,{heartOver:t.hearthOver,onMouseOver:function(){return n({hearthOver:!0})}},"🖤")},z=n("OyqW"),j=n("JnLX"),v=n("klmA"),E=o.b.img.withConfig({displayName:"MagicRecipe__Mestolo",componentId:"sc-1iou1nw-0"})(["position:absolute;right:20px;top:20px;padding:20px;width:80px;"]),x=o.b.img.withConfig({displayName:"MagicRecipe__Stelline",componentId:"sc-1iou1nw-1"})(["position:absolute;right:0px;top:0px;padding:20px;"]),A=function(e){var t=e.linkTo,n=i.useState({isOver:!1,isMagic:!1}),r=n[0],o=n[1],l=i.useRef();return i.useEffect((function(){r.isOver&&(l.current=setInterval((function(){o((function(e){return Object.assign({},e,{isMagic:!e.isMagic})}))}),300)),!r.isOver&&l.current&&clearInterval(l.current)}),[r.isOver]),i.createElement(a.c,{to:t,style:{position:"fixed",right:0,top:0,width:110,height:120,zIndex:1},onMouseOver:function(){return o(Object.assign({},r,{isOver:!0}))},onMouseOut:function(){return o(Object.assign({},r,{isOver:!1}))}},i.createElement(E,{src:z}),!r.isMagic&&i.createElement(x,{src:j}),r.isMagic&&i.createElement(x,{src:v}))},D=o.b.div.withConfig({displayName:"styles__WrapperWindows",componentId:"sc-1l27ruf-0"})(["width:",";background:",";border-width:2px;border-color:"," "," "," ",";border-style:solid;position:relative;padding:2px;display:inline-table;"],(function(e){return e.width?e.width+"px":"250px"}),c.a.grigio.medium,c.a.grigio.light,c.a.grigio.dark,c.a.grigio.dark,c.a.grigio.light),S=o.b.div.withConfig({displayName:"styles__HeadWindows",componentId:"sc-1l27ruf-1"})(["padding:2px 2px 2px 5px;width:100%;background:",";color:",";display:flex;align-items:center;justify-content:space-between;user-select:none;"],c.a.rgb.blu,c.a.bianco),T=o.b.button.withConfig({displayName:"styles__ButtonWindows",componentId:"sc-1l27ruf-2"})(["margin:2px 2px 2px 0;width:100%;height:30px;background:",";border-width:2px;border-color:"," "," "," ",";cursor:pointer;font-family:",";font-size:18px;color:",";"],c.a.grigio.medium,c.a.bianco,c.a.grigio.dark,c.a.grigio.dark,c.a.bianco,c.b.monospace,c.a.antracite),L=o.b.button.withConfig({displayName:"styles__ActionButtonWindows",componentId:"sc-1l27ruf-3"})(["margin:2px 2px 2px 0;width:16px;height:16px;background:",";border-width:2px;border-color:"," "," "," ",";cursor:pointer;font-family:'Tahoma';font-size:10px;font-weight:bold;color:",";user-select:none;"],c.a.grigio.medium,c.a.bianco,c.a.grigio.dark,c.a.grigio.dark,c.a.bianco,c.a.antracite),k=o.b.div.withConfig({displayName:"styles__BodyWindows",componentId:"sc-1l27ruf-4"})(["font-family:",";padding:13px 12px 12px;width:100%;display:flex;flex-direction:column;"],c.b.monospace),O=n("Vcbn"),Z=n("b0c/"),R=function(e){var t=e.onClickClose,n=e.onClickAsk,r=e.onClickReduce,o=e.onClickZoom,l=e.style,s=e.headerLabel,d=e.bodyWindows;return i.createElement(D,{style:l},i.createElement(S,null,i.createElement(a.a,{style:{color:c.a.bianco,letterSpacing:.5}},s||i.createElement(i.Fragment,null,i.createElement("span",{style:{fontSize:10}},"🍝")," Windows")),i.createElement("div",{style:{display:"flex",alignItems:"center"}},r&&i.createElement(L,{onClick:r,style:{marginRight:3}},i.createElement("img",{src:O,style:{width:9,position:"relative",right:1}})),o&&i.createElement(L,{onClick:o,style:{marginRight:3}},i.createElement("img",{src:Z,style:{width:10,position:"relative",top:1}})),n&&i.createElement(L,{onClick:n,style:{marginRight:3}},"?"),t&&i.createElement(L,{onClick:t,style:{marginRight:3}},"X"))),i.createElement(k,null,d))},G=["La risposta è dentro di te","Valuta più alternative","È importante","Tieni la mente aperta","Il tempo è buon consigliere","Sei troppo coinvolto per capire","Non sprecare il tuo tempo","Chiarisciti le idee","Apriti nuove strade","Abbandona le vecchie soluzioni","Fidati del tuo intuito","Sii audace","Guarda dove metti i piedi","Usa l'immaginazione","In questo momento non chiedere di più"],W=function(){var e=i.useState({openAlertA:!1,openAlertB:!1,openAlertC:!1,openAskWindow:!1,openYesWindow:!1,openNoWindow:!1}),t=e[0],n=e[1];i.useEffect((function(){t.openAlertA&&setTimeout((function(){n(Object.assign({},t,{openAlertB:!0}))}),300)}),[t.openAlertA]),i.useEffect((function(){t.openAlertB&&setTimeout((function(){n(Object.assign({},t,{openAlertC:!0}))}),400)}),[t.openAlertB]);var r=function(){return n((function(e){return Object.assign({},e,{openAskWindow:!e.openAskWindow})}))},o=function(){return n((function(e){return Object.assign({},e,{openYesWindow:!e.openYesWindow})}))},l=function(){return n((function(e){return Object.assign({},e,{openNoWindow:!e.openNoWindow})}))};return i.createElement(i.Fragment,null,i.createElement(R,{style:{gridColumnStart:4,gridColumnEnd:6,gridRowStart:5,gridRowEnd:6,height:130,justifySelf:"center"},onClickClose:function(){return n(Object.assign({},t,{openAlertA:!0}))},onClickAsk:function(){return r()},headerLabel:"Domanda urgente",bodyWindows:i.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},i.createElement(a.a,{style:{marginTop:5}},"Ti piace cucinare?"),i.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-evenly",width:"100%",marginTop:15}},i.createElement(T,{style:{width:"30%",height:30},onClick:function(){return o()}},"Si"),i.createElement(T,{style:{width:"30%",height:30},onClick:function(){return l()}},"No")))}),t.openYesWindow&&i.createElement(R,{style:{gridColumnStart:4,gridColumnEnd:6,gridRowStart:5,gridRowEnd:6,top:-50,left:-15,justifySelf:"center"},onClickClose:function(){return o()},headerLabel:"Condividi",bodyWindows:i.createElement(i.Fragment,null,i.createElement(a.a,{style:{marginBottom:10}},"Vuoi condividere con me le tue ricette? Sarei lieta di inserire anche la tua."),i.createElement("a",{href:"mailto:lauramarinabianchi@gmail.com?subject=La mia buonissima ricetta",style:{textDecoration:"none",margin:"5px 20px"}},i.createElement(T,null,"Scrivimi")))}),t.openNoWindow&&i.createElement(R,{style:{gridColumnStart:4,gridColumnEnd:6,gridRowStart:5,gridRowEnd:6,top:-50,left:-15,justifySelf:"center"},onClickClose:function(){return l()},headerLabel:"Senza titolo",bodyWindows:i.createElement(a.a,null,"Se non ti piace, ma devi comunque sopravvivere, sei nel posto giusto!")}),t.openAskWindow&&i.createElement(R,{style:{gridColumnStart:4,gridColumnEnd:6,gridRowStart:5,gridRowEnd:6,top:-50,left:-20,justifySelf:"center"},onClickClose:function(){return r()},headerLabel:"Carol Bolt ti risponde:",bodyWindows:i.createElement(i.Fragment,null,i.createElement(a.a,null,"Ti stai chiedendo cosa sia Cibamarsi e perché sei qui?"),i.createElement(a.a,null,"Il piccolissimo libro delle risposte dice:"),i.createElement(a.a,{style:{marginTop:5,color:c.a.rgb.magenta}},'"',G[b(G.length-1,0)],'"'))}),t.openAlertA&&i.createElement(R,{style:{gridColumnStart:4,gridColumnEnd:6,gridRowStart:5,gridRowEnd:6,top:-30,left:-70,zIndex:2,justifySelf:"center"},onClickClose:function(){return n(Object.assign({},t,{openAlertA:!1}))},headerLabel:"Warning",bodyWindows:i.createElement(i.Fragment,null,i.createElement(a.a,null,"Insomma, si o no?"),i.createElement(a.a,null,"Chiudi e rispondi!"))}),t.openAlertB&&i.createElement(R,{style:{gridColumnStart:4,gridColumnEnd:6,gridRowStart:5,gridRowEnd:6,top:-40,left:-30,zIndex:2,justifySelf:"center"},onClickClose:function(){return n(Object.assign({},t,{openAlertB:!1}))},headerLabel:"Warning",bodyWindows:i.createElement(a.a,null,"Devi rispondere alla domanda per ottenere delle risposte")}),t.openAlertC&&i.createElement(R,{style:{gridColumnStart:4,gridColumnEnd:6,gridRowStart:5,gridRowEnd:6,top:-1,left:-54,zIndex:2,justifySelf:"center"},onClickClose:function(){return n(Object.assign({},t,{openAlertC:!1}))},headerLabel:"Warning",bodyWindows:i.createElement(a.a,null,"Non credo tu possa chiudere veramente questa finestra")}),(t.openAlertA||t.openAlertB||t.openAlertC)&&i.createElement("div",{style:{width:"100vw",height:"100vh",position:"absolute",zIndex:1}}))},B=Object(o.b)(a.a).withConfig({displayName:"InstagramExe__DidaStyled",componentId:"t61xnt-0"})(["margin-right:8px;font-size:15px;user-select:none;"]),P=function(){var e=i.useState({clickButtonType:null,isChangeWindowsSize:!1}),t=e[0],n=e[1];console.log(t);var r=t.isChangeWindowsSize?{width:330}:{width:""};return i.createElement(R,{style:Object.assign({},r,{transition:"width 0.5s linear",justifySelf:"center",alignSelf:"center",gridColumnStart:1,gridColumnEnd:3,gridRowStart:1,gridRowEnd:4}),onClickZoom:function(){return n((function(e){return Object.assign({},e,{isChangeWindowsSize:!e.isChangeWindowsSize})}))},headerLabel:"Instagram.exe",bodyWindows:i.createElement("div",null,i.createElement("div",{style:{display:"flex",marginBottom:10}},i.createElement(B,null,"File"),i.createElement(B,null,"Edit"),i.createElement(B,null,"View"),i.createElement(B,null,"Options"),i.createElement(B,null,"Help")),i.createElement("a",{href:"https://www.instagram.com/p/B1ZOpJ2oowz/",target:"_blank"},i.createElement("img",{style:{width:"100%",marginBottom:5},src:"https://www.instagram.com/p/B1ZOpJ2oowz/media"})),i.createElement("div",{style:{display:"flex",marginBottom:5}},i.createElement(T,{onClick:function(){return n(Object.assign({},t,{clickButtonType:"like"}))}},"Like"),i.createElement(T,{onClick:function(){return n(Object.assign({},t,{clickButtonType:"comment"}))}},"Comment"),i.createElement(T,{onClick:function(){return n(Object.assign({},t,{clickButtonType:"share"}))}},"Share")),i.createElement("a",{href:"https://www.instagram.com/laura.marina.b/",target:"_blank"},i.createElement(a.a,null,"laura.marina.b")))})},Q=o.b.div.withConfig({displayName:"pages__WrapperHomePage",componentId:"gn8ynd-0"})(["width:100vw;height:100vh;display:grid;grid-gap:5px;grid-template-columns:repeat(6,1fr);grid-template-rows:repeat(6,calc(100vh / 6));"]),U=(t.default=function(e){var t=e.data,n=t.allMarkdownRemark.edges,o=t.allMarkdownRemark.group,a=i.useRef(n[b(n.length-1,0)]),l=i.useRef(n[b(n.length-1,0)]),c=i.useRef(n[b(n.length-1,0)]);return i.createElement(r.a,null,i.createElement(A,{linkTo:c.current.node.fields.slug}),i.createElement(Q,null,i.createElement(y,null),i.createElement(M,{linkTo:a.current.node.fields.slug,selectedRecipe:a.current,style:{gridColumnStart:1,gridColumnEnd:4,gridRowStart:3,gridRowEnd:4,justifySelf:"center"}}),i.createElement(m,{categories:o}),i.createElement(W,null)),i.createElement(Q,null,i.createElement(P,null),i.createElement(M,{linkTo:l.current.node.fields.slug,selectedRecipe:l.current,style:{gridColumnStart:4,gridColumnEnd:7,gridRowStart:1,gridRowEnd:3,justifySelf:"center"}})),i.createElement(N,null))},"2697848808")},"QzX/":function(e,t,n){"use strict";n("EU/P")("trimRight",(function(e){return function(){return e(this,2)}}),"trimEnd")},Rw9D:function(e,t,n){"use strict";var i=n("P8UN"),r=n("/+AL");i(i.P+i.F*!n("h/qr")([].reduceRight,!0),"Array",{reduceRight:function(e){return r(this,e,arguments.length,arguments[1],!0)}})},V5c9:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"cibamarsi","description":"cibarsi-amarsi","keywords":["cibamarsi","ricetta","ricetta","imparare","cucinare"]}}}}')},Vcbn:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIzcHgiIHZpZXdCb3g9IjAgMCAxMCAzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1NC4xICg3NjQ5MCkgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+UmVjdGFuZ2xlIENvcHkgMzA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InJpZHVjaSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMuMDAwMDAwLCAtMTIuMDAwMDAwKSIgZmlsbD0iIzJDMkMyQyI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weS0zMCIgeD0iMy42IiB5PSIxMi4yNCIgd2lkdGg9IjguNjQiIGhlaWdodD0iMi4xNiI+PC9yZWN0PgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},VxdY:function(e,t,n){},YuTi:function(e,t,n){n("R48M"),e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},ZiRl:function(e,t,n){var i=n("P8UN");i(i.P,"String",{repeat:n("gd4K")})},"b0c/":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTFweCIgaGVpZ2h0PSIxMXB4IiB2aWV3Qm94PSIwIDAgMTEgMTEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU0LjEgKDc2NDkwKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Hcm91cCA4PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpbmdyYW5kaXNjaSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQuMDAwMDAwLCAtNC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMDAwMDAwLCA0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgc3Ryb2tlPSIjMkMyQzJDIiBzdHJva2Utd2lkdGg9IjIiIHg9IjEiIHk9IjEiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weS0zMCIgZmlsbD0iIzJDMkMyQyIgeD0iMCIgeT0iMC42NTE1NTIyODgiIHdpZHRoPSIxMSIgaGVpZ2h0PSIzLjIzNTI5NDEyIj48L3JlY3Q+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},ewoU:function(e,t,n){"use strict";var i=n("tuyV"),r=n("BjK0"),o=n("kiRH"),a=n("ot9L"),l=n("sOol")("isConcatSpreadable");e.exports=function e(t,n,c,s,d,u,g,m){for(var p,I,y=d,f=0,w=!!g&&a(g,m,3);f<s;){if(f in c){if(p=w?w(c[f],f,n):c[f],I=!1,r(p)&&(I=void 0!==(I=p[l])?!!I:i(p)),I&&u>0)y=e(t,n,p,o(p.length),y,u-1)-1;else{if(y>=9007199254740991)throw TypeError();t[y]=p}y++}f++}return y}},gd4K:function(e,t,n){"use strict";var i=n("1Llc"),r=n("ap2Z");e.exports=function(e){var t=String(r(this)),n="",o=i(e);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(n+=t);return n}},klmA:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzhweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgMzggNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU2LjIgKDgxNjcyKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJIb21lcGFnZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTMuMTU3MjAyMzQsLTAuMDY4NTE0MTI2NCBMNC4xNDcxNjQ1OSwyLjU1MTc2MjM0IEw2Ljg4MTUxNDEzLDMuMTU3MjAyMzQgTDQuMjYyMjI3OTMsNC4xNDczMDM3NiBMMy42NTU3OTc2Niw2Ljg4MTUxNDEzIEwyLjY2NTY5NjI0LDQuMjYyMjI3OTMgTC0wLjA2ODY1MzI5OTUsMy42NTY3ODc5MiBMMi41NTE3NjIzNCwyLjY2NTgzNTQxIEwzLjE1NzIwMjM0LC0wLjA2ODUxNDEyNjQgWiBNMzcuNDQ3NTM1OSwxNi4zNjU4Nzk3IEwzMy40ODYxMjEzLDE1LjM3OTg1NCBMMjkuOTcxMDIwMywxNy40NTQ4MzU5IEwzMC45NTc1LDEzLjQ5NDMxMjMgTDI4Ljg4Mjk1NTEsOS45Nzc4NjYyOCBMMzIuODQzNDc4NywxMC45NjQzNDYgTDM2LjM1OTAzMzcsOC44OTAyNTUwOCBMMzUuMzcyNTU0LDEyLjg1MDc3ODcgTDM3LjQ0NzUzNTksMTYuMzY1ODc5NyBaIE0yMi40NzM1NjEyLDM2LjA4NjM1OTUgTDI3LjQ2MzQxNjEsMzYuNTY3MjM5NSBMMzAuMzU3NjQwNSwzMi40NzM1NjEyIEwyOS44NzY3NjA1LDM3LjQ2MzQxNjEgTDMzLjk3MDQzODgsNDAuMzU3NjQwNSBMMjguOTgwNTgzOSwzOS44NzY3NjA1IEwyNi4wODYzNTk1LDQzLjk3MDQzODggTDI2LjU2NzIzOTUsMzguOTgwNTgzOSBMMjIuNDczNTYxMiwzNi4wODYzNTk1IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iIzBFRjdGRiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="},lizw:function(e,t,n){"use strict";var i=n("P8UN"),r=n("pTxf"),o=n("CL53"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);i(i.P+i.F*a,"String",{padStart:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},n0hJ:function(e,t,n){var i=n("P8UN");i(i.P,"Array",{fill:n("Y++M")}),n("Dq1/")("fill")},nMRu:function(e,t,n){"use strict";var i=n("P8UN"),r=n("DFzH"),o=n("kxs/");i(i.P+i.F*n("96qb")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=r(this),n=o(t);return"number"!=typeof n||isFinite(n)?t.toISOString():null}})},pTxf:function(e,t,n){var i=n("kiRH"),r=n("gd4K"),o=n("ap2Z");e.exports=function(e,t,n,a){var l=String(o(e)),c=l.length,s=void 0===n?" ":String(n),d=i(t);if(d<=c||""==s)return l;var u=d-c,g=r.call(s,Math.ceil(u/s.length));return g.length>u&&(g=g.slice(0,u)),a?g+l:l+g}},uas8:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c}));var i=n("vOnD"),r=n("qR4i"),o=n("Wbzz"),a=i.b.p.withConfig({displayName:"Typography__Dida",componentId:"edwu0d-0"})(["font-family:",";font-size:18px;color:#2c2c2c;user-select:none;"],r.b.monospace),l=i.b.h3.withConfig({displayName:"Typography__TitleRecipe",componentId:"edwu0d-1"})(["font-family:'Fira Code Bold';font-size:20px;color:",";"],r.a.rgb.blu),c=i.b.h5.withConfig({displayName:"Typography__Difficulty",componentId:"edwu0d-2"})(["font-family:'Fira Code Medium';font-size:15px;color:",";"],r.a.grigio.medium),s=Object(i.b)(o.Link).withConfig({displayName:"Typography__LinkStyled",componentId:"edwu0d-3"})(["text-decoration:none;"])},zTTH:function(e,t,n){"use strict";var i=n("P8UN"),r=n("Wadk")(6),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),i(i.P+i.F*a,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")(o)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a99eafe9159160c818e0.js.map