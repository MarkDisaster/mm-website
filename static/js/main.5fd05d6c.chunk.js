(this["webpackJsonpmm-website"]=this["webpackJsonpmm-website"]||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(20),a=c.n(s),j=c(6),i=c(2),r=[{title:"Hlavn\xed strana",path:"/mm-website/",cName:"nav-item"},{title:"Testovac\xed str\xe1nka 2",path:"/mm-website/testovaci-stranka-2",cName:"nav-item"},{title:"P\u0159\xedsp\u011bvky",path:"/mm-website/posts",cName:"nav-item"}],d=c(0);var b=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("section",{id:"navigation",children:Object(d.jsx)("nav",{children:Object(d.jsx)("ul",{children:r.map((function(e,t){return Object(d.jsx)("li",{className:e.cName,children:Object(d.jsx)(j.b,{to:e.path,children:Object(d.jsx)("span",{children:e.title})})},t)}))})})})})},o=c(3),l=c(7),O=c.n(l);var m=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),j=Object(o.a)(a,2),i=j[0],r=j[1];return Object(n.useEffect)((function(){O.a.get("https://adm.marek.media/wp-json/wp/v2/pages/2").then((function(e){s(e.data),r(!0)})).catch((function(e){console.log(e),console.log("nepovedlo se")}))}),[s]),i?Object(d.jsxs)("section",{id:"homepage",children:[Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:c.content.rendered}}),Object(d.jsx)("div",{children:"Na\u010dteno"})]}):Object(d.jsx)("div",{children:"Loading..."})};var h=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(e.post),r=Object(o.a)(i,2),b=r[0],l=r[1],m=Object(n.useState)(!1),h=Object(o.a)(m,2),u=h[0],x=h[1];return Object(n.useEffect)((function(){l(e.post),O.a.get("/wp-json/wp/v2/media/".concat(b.featured_media)).then((function(e){a(e.data.media_details.sizes.full.source_url),x(!0)})).catch((function(e){console.log(e)}))}),[s,b,a,l,e.post]),u?Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"post",children:[Object(d.jsx)("div",{className:"image",children:Object(d.jsx)("img",{src:s,alt:b.title.rendered})}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("h2",{children:b.title.rendered})}),Object(d.jsx)("div",{className:"excerpt",dangerouslySetInnerHTML:{__html:b.excerpt.rendered}}),Object(d.jsx)("div",{children:Object(d.jsx)(j.b,{to:"/post/".concat(b.id),children:"P\u0159e\u010d\xedst"})})]})]})}):Object(d.jsx)("div",{children:e.post.id})};var u=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),j=Object(o.a)(a,2),i=j[0],r=j[1];return Object(n.useEffect)((function(){O.a.get("http://adm.marek.media/wp-json/wp/v2/posts?categories=2").then((function(e){s(e.data),r(!0)})).catch((function(e){console.log(e)}))}),[s]),i?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("section",{id:"posts",children:c.map((function(e){return Object(d.jsx)(h,{post:e},e.id)}))})}):Object(d.jsx)("div",{children:"Loading..."})};var x=function(){var e=Object(i.g)().id,t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)([]),b=Object(o.a)(r,2),l=b[0],m=b[1],h=Object(n.useState)(!1),u=Object(o.a)(h,2),x=u[0],p=u[1];return Object(n.useEffect)((function(){O.a.get("http://adm.marek.media/wp-json/wp/v2/posts/".concat(e)).then((function(e){a(e.data),O.a.get("http://adm.marek.media/wp-json/wp/v2/media/".concat(e.data.featured_media)).then((function(e){m(e.data),p(!0)}))})).catch((function(e){console.log(e)}))}),[a,e]),x?Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:l.media_details.sizes.full.source_url,alt:l.alt_text})}),Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:s.content.rendered}}),Object(d.jsx)("div",{children:Object(d.jsx)(j.b,{to:"/",children:"Zp\u011bt"})})]}):Object(d.jsx)("div",{children:"Loading..."})};var p=function(){var e=Object(i.g)().slug,t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!1),b=Object(o.a)(r,2),l=b[0],m=b[1];return Object(n.useEffect)((function(){O.a.get("http://adm.marek.media/wp-json/wp/v2/pages?slug=".concat(e)).then((function(e){a(e.data),m(!0)})).catch((function(e){console.log(e)}))}),[a,e]),l?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:s[0].content.rendered}}),Object(d.jsx)("div",{children:Object(d.jsx)(j.b,{to:"/",children:"Zp\u011bt"})})]}):Object(d.jsx)("div",{children:"Loading..."})};var v=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(n.Fragment,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"mm-website/",exact:!0,element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(m,{}),Object(d.jsx)(u,{})]})}),Object(d.jsx)(i.a,{path:"mm-website/:slug",exact:!0,element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(p,{})]})}),Object(d.jsx)(i.a,{path:"mm-website/post/:id",exact:!0,element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(x,{})]})}),Object(d.jsx)(i.a,{path:"mm-website/posts",exact:!0,element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(u,{})]})})]})})})};c(44);a.a.render(Object(d.jsx)(j.a,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.5fd05d6c.chunk.js.map