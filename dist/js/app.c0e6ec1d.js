(function(e){function n(n){for(var r,a,i=n[0],c=n[1],s=n[2],p=0,l=[];p<i.length;p++)a=i[p],o[a]&&l.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);h&&h(n);while(l.length)l.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(r=!1)}r&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({dashboard:"dashboard",favorite:"favorite",home:"home",login:"login",nav:"nav",purchase:"purchase",room:"room",signup:"signup"}[e]||e)+"."+{dashboard:"beeaea30",favorite:"85b8db16",home:"b1d268b4",login:"7ff25cfc",nav:"8aa688c7",purchase:"c4c7ab48",room:"c4af29bc",signup:"e0ae2c8d"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={dashboard:1,favorite:1,home:1,login:1,nav:1,purchase:1,room:1,signup:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise(function(n,t){for(var r="css/"+({dashboard:"dashboard",favorite:"favorite",home:"home",login:"login",nav:"nav",purchase:"purchase",room:"room",signup:"signup"}[e]||e)+"."+{dashboard:"23436feb",favorite:"f2b77a80",home:"d792c219",login:"f7477f16",nav:"3178f9a1",purchase:"e29f7b09",room:"20707d48",signup:"5d5ad091"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],p=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(p===r||p===o))return n()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],p=s.getAttribute("data-href");if(p===r||p===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],h.parentNode.removeChild(h),t(u)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise(function(n,t){r=o[e]=[n,t]});n.push(r[2]=u);var s,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=i(e),s=function(n){p.onerror=p.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,t[1](u)}o[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:p})},12e4);p.onerror=p.onload=s,document.head.appendChild(p)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/week6/dist/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var h=p;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1045:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],u=(t("5c0b"),t("2877")),i={},c=Object(u["a"])(i,a,o,!1,null,null,null),s=c.exports,p=t("8c4f");r["a"].use(p["a"]);var l=new p["a"]({routes:[{path:"*",redirect:"/"},{path:"/",name:"nav",component:function(){return t.e("nav").then(t.bind(null,"c909"))},children:[{path:"",name:"home",component:function(){return t.e("home").then(t.bind(null,"6511"))}},{path:"room/:id",name:"room",component:function(){return t.e("room").then(t.bind(null,"5961"))}},{path:"favorite",name:"favorite",component:function(){return t.e("favorite").then(t.bind(null,"47c0"))},meta:{requiresAuth:!0}},{path:"purchase",name:"purchase",component:function(){return t.e("purchase").then(t.bind(null,"f4d1"))},meta:{requiresAuth:!0}},{path:"login",name:"login",component:function(){return t.e("login").then(t.bind(null,"dd7b"))},meta:{requiresAuth:!0}},{path:"signup",name:"signup",component:function(){return t.e("signup").then(t.bind(null,"62c4"))},meta:{requiresAuth:!0}},{path:"dashboard",name:"dashboard",component:function(){return t.e("dashboard").then(t.bind(null,"4601"))},meta:{requiresAuth:!0}}]}]}),h=(t("1045"),t("bc3a")),d=t.n(h),f=t("a7fe"),m=t.n(f),b=t("a925"),v=t("7bb1"),g=t("427f"),y=t.n(g);r["a"].prototype.$bus=new r["a"],d.a.defaults.withCredentials=!0,d.a.defaults.headers.post["Content-Type"]="application/json",r["a"].use(m.a,d.a),r["a"].use(b["a"]);var w=new b["a"];w.locale="zhTW",r["a"].use(v["a"],{events:"",i18n:w,dictionary:{zhTW:y.a}}),r["a"].config.productionTip=!1,new r["a"]({router:l,render:function(e){return e(s)}}).$mount("#app"),l.beforeEach(function(e,n,t){e.meta.requiresAuth?d.a.get("".concat("https://guarded-castle-26873.herokuapp.com","/users/isSignin")).then(function(n){n.data.success?"/login"===e.path||"/signup"===e.path?t({path:"/"}):t():"/dashboard"===e.path||"/favorite"===e.path||"/purchase"===e.path?t({path:"/login"}):t()}):t()})},"5c0b":function(e,n,t){"use strict";var r=t("5e27"),a=t.n(r);a.a},"5e27":function(e,n,t){}});
//# sourceMappingURL=app.c0e6ec1d.js.map