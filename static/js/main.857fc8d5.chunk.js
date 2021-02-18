(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{77:function(e,n,t){},78:function(e,n,t){},87:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(9),i=t.n(c),o=(t(77),t(44)),s=(t(78),t(79),t(124)),l=t(132),d=t(60),j=t(128);var p={palette:{primary:{main:"#673ab7"}}},b={palette:{type:"dark",primary:{main:"#333"},background:{default:"#212121",paper:"#212121"}}},u=t(45),h=t(125),f=t(118),x=t(130),m=t(131),O=t(127),v=t(51),g=t.n(v),w=t(120),k=t(121),y=t(122),S=t(123),W=t(52),N=t.n(W),P=t(59),B=t.n(P),C=t(126),T=t(46),L=t(117),M=t(13),R=t(129),A=t(5),F=240,U=Object(L.a)((function(e){return{root:{display:"flex"},drawer:Object(u.a)({},e.breakpoints.up("sm"),{width:F,flexShrink:0}),appBar:Object(u.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(F,"px)"),marginLeft:F}),menuButton:Object(u.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:F},content:{marginTop:e.spacing(6),flexGrow:1,padding:e.spacing(3),display:"flex",flexWrap:"wrap"}}}));var D=function(e){var n=e.window,t=U(),a=Object(M.a)(),c=r.a.useState(!1),i=Object(o.a)(c,2),l=i[0],d=i[1],j=function(){d(!l)},p=Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{className:t.toolbar}),Object(A.jsx)(f.a,{}),Object(A.jsx)(w.a,{children:["Inbox","Starred","Send email","Drafts"].map((function(e,n){return Object(A.jsxs)(k.a,{button:!0,children:[Object(A.jsx)(y.a,{children:n%2===0?Object(A.jsx)(g.a,{}):Object(A.jsx)(N.a,{})}),Object(A.jsx)(S.a,{primary:e})]},e)}))}),Object(A.jsx)(f.a,{}),Object(A.jsx)(w.a,{children:["All mail","Trash","Spam"].map((function(e,n){return Object(A.jsxs)(k.a,{button:!0,children:[Object(A.jsx)(y.a,{children:n%2===0?Object(A.jsx)(g.a,{}):Object(A.jsx)(N.a,{})}),Object(A.jsx)(S.a,{primary:e})]},e)}))})]}),b=void 0!==n?function(){return n().document.body}:void 0;return Object(A.jsxs)("div",{className:t.root,children:[Object(A.jsx)(s.a,{}),Object(A.jsx)(h.a,{position:"fixed",className:t.appBar,children:Object(A.jsxs)(C.a,{children:[Object(A.jsx)(O.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:j,className:t.menuButton,children:Object(A.jsx)(B.a,{})}),Object(A.jsx)(T.a,{variant:"h6",noWrap:!0,children:"Responsive drawer"})]})}),Object(A.jsxs)("nav",{className:t.drawer,"aria-label":"mailbox folders",children:[Object(A.jsx)(m.a,{smUp:!0,implementation:"css",children:Object(A.jsx)(x.a,{container:b,variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:l,onClose:j,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0},children:p})}),Object(A.jsx)(m.a,{xsDown:!0,implementation:"css",children:Object(A.jsx)(x.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0,children:p})})]}),Object(A.jsxs)(R.a,{className:t.content,children:[Object(A.jsx)("div",{className:t.toolbar}),e.children]})]})};var E=function(){var e=Object(a.useState)(!1),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(d.a)(t?b:p);return Object(A.jsxs)(j.a,{theme:c,children:[Object(A.jsx)(s.a,{}),Object(A.jsx)(D,{children:Object(A.jsx)(l.a,{checked:t,onChange:function(){return r(!t)}})})]})},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,134)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(E,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ReactMark",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/ReactMark","/service-worker.js");I?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):J(n,e)}))}}(),G()}},[[87,1,2]]]);
//# sourceMappingURL=main.857fc8d5.chunk.js.map