(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{227:function(e,t,c){},228:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),r=c.n(a),s=c(37),i=c.n(s),o=(c(97),c.p,c(19)),l=c(26);var j=function(e){var t=Object(l.c)((function(e){return e.PortfolioData.selected}));console.log(t);var c=Object(l.b)();return Object(n.jsx)("nav",{className:"navbar justify-content-center navbar-expand-lg navbar-dark\r bg-transparent",children:Object(n.jsx)("div",{className:"container nav-container",children:["home","about","resume","projects","photography"].map((function(e){var a="home"===e?"/":"/"+e,r=e;return Object(n.jsx)("div",{className:"navbar-item col-2 justify-content-center",children:Object(n.jsx)(o.b,{className:"navbar-brand navbar-item justify-content-center\n                  ".concat(t==e?"selected":""),id:e,to:a,onClick:function(){return c(function(e){return{type:"UPDATE_SELECTED",selected:e}}(e))},children:Object(n.jsx)("b",{children:r.toUpperCase()})})})}))})})};var b=function(e){return Object(n.jsxs)("div",{className:"body",children:[Object(n.jsx)(j,{}),Object(n.jsxs)("div",{className:"container homepage-content",children:[Object(n.jsx)("h1",{className:"introduction",children:"Hi, I'm Wyatt Bliss"}),Object(n.jsx)("p",{className:"intro-description",children:" I'm a Computer Science student at Northeastern University. I enjoy frontend programming, watching sports such as basketball or hockey, working on my car and playing video games like World of Warcraft."})]})]})},d=c(3),u=c(15);var h=function(e){return Object(n.jsx)("div",{className:"thumbnail",children:Object(n.jsxs)(o.b,{to:e.link,children:[Object(n.jsx)("div",{className:"thumbnail-image",children:Object(n.jsx)("img",{src:e.image,alt:"Thumbnail Image"})}),Object(n.jsx)("div",{className:"thumbnail-title",children:e.title}),Object(n.jsx)("div",{className:"thumbnail-category",children:e.category})]})})};var m=function(e){return Object(n.jsxs)("div",{className:"body",children:[Object(n.jsx)(j,{}),Object(n.jsxs)("div",{className:"thumbnail-container",children:[Object(n.jsx)(h,{link:"",image:"",title:"Maze Game",category:"java project"}),Object(n.jsx)(h,{link:"",image:"",title:"animator",category:"java project"}),Object(n.jsx)(h,{link:"",image:"",title:"recipe collaborator",category:"react project"})]})]})};var v=function(e){return Object(n.jsxs)("div",{className:"body",children:[Object(n.jsx)(j,{}),Object(n.jsx)("h1",{children:"about"})]})},O=c(38),p=c(90);c(225);var x=function(e){return e.classes,Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("div",{className:"ball"}),Object(n.jsx)("div",{className:"ball"}),Object(n.jsx)("div",{className:"ball"}),Object(n.jsx)("div",{className:"ball"})]})};var f=function(e){var t=["bottle_woni83","green-bench_llebn1"],r=Object(a.useState)([]),s=Object(O.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(1),j=Object(O.a)(l,2),b=j[0],d=j[1],u=Object(a.useState)(!1),h=Object(O.a)(u,2),m=h[0],v=h[1],f=function(){var e=document.documentElement,n=e.scrollTop,a=e.scrollHeight,r=e.clientHeight;console.log("statement"),r+n>=a-5&&(v(!0),o(t),console.log(function(){var e=new(0,c(59).Buffer)("679191899461258:T7CLCbv--MH7kwlbcUbBQxDnQXw").toString("base64");return fetch("https://api.cloudinary.com/v1_1/dvtljlyii/image/list",{method:"GET",headers:{Authorization:"Basic "+e}}).then((function(e){return e.json()}))}()),d(b+1))};return Object(a.useEffect)((function(){return window.addEventListener("scroll",f),function(){window.removeEventListener("scroll",f)}})),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:i.map((function(e){return Object(n.jsx)("div",{className:"photo-container",children:Object(n.jsx)(p.Image,{cloudName:"dvtljlyii",publicId:"photography-portfolio/".concat(e),width:"500",crop:"scale"})},e.id)}))}),m&&Object(n.jsx)("div",{className:"loading-container",children:Object(n.jsx)(x,{})})]})};var g=function(e){return Object(n.jsxs)("div",{className:"body photography",children:[Object(n.jsx)(j,{}),Object(n.jsx)(f,{})]})},y={selected:"home"},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SELECTED":return{selected:t.selected};default:return e}},w=c(91),E=Object(u.c)({PortfolioData:N});var k,T=(k={selected:"home"},Object(u.e)(E,k,Object(u.d)(Object(u.a)(w.a),window.devToolsExtension?window.devToolsExtension():function(e){return e})));var C=function(){return Object(n.jsx)(l.a,{store:T,children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(d.a,{exact:!0,path:"/",component:b}),Object(n.jsx)(d.a,{path:"/about",component:v}),Object(n.jsx)(d.a,{path:"/projects",component:m}),Object(n.jsx)(d.a,{path:"/photography",component:g})]})})};c(226),c(227);var S=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(C,{})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,230)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),D()},97:function(e,t,c){}},[[228,1,2]]]);
//# sourceMappingURL=main.53abd611.chunk.js.map