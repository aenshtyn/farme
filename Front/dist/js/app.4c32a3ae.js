(function(e){function n(n){for(var a,s,i=n[0],o=n[1],l=n[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&d.push(c[s][0]),c[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);f&&f(n);while(d.length)d.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,s=1;s<t.length;s++){var i=t[s];0!==c[i]&&(a=!1)}a&&(r.splice(n--,1),e=o(o.s=t[0]))}return e}var a={},s={app:0},c={app:0},r=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-0d02af2c":"ebd7d2b5","chunk-28bad221":"80297c0f","chunk-2d0cba84":"5619e5b1","chunk-2d0d03d6":"6b645b26","chunk-2d0d5c71":"f804c963","chunk-2d0d7276":"6fa2ba5f","chunk-2d0e2151":"ef1c2ac4","chunk-3b46e7c7":"f4ce8fee","chunk-2d0bce43":"70d1b270","chunk-2d21a56d":"05476af7","chunk-4d48cc1a":"dff4f104"}[e]+".js"}function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.e=function(e){var n=[],t={"chunk-0d02af2c":1,"chunk-28bad221":1,"chunk-4d48cc1a":1};s[e]?n.push(s[e]):0!==s[e]&&t[e]&&n.push(s[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0d02af2c":"4d9f074c","chunk-28bad221":"a116f954","chunk-2d0cba84":"31d6cfe0","chunk-2d0d03d6":"31d6cfe0","chunk-2d0d5c71":"31d6cfe0","chunk-2d0d7276":"31d6cfe0","chunk-2d0e2151":"31d6cfe0","chunk-3b46e7c7":"31d6cfe0","chunk-2d0bce43":"31d6cfe0","chunk-2d21a56d":"31d6cfe0","chunk-4d48cc1a":"1ae50cfb"}[e]+".css",c=o.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var l=r[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===c))return n()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===c)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete s[e],f.parentNode.removeChild(f),t(r)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){s[e]=0})));var a=c[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=c[e]=[n,t]}));n.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(e);var d=new Error;l=function(n){u.onerror=u.onload=null,clearTimeout(f);var t=c[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,t[1](d)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},o.m=e,o.c=a,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var f=u;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"437b":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("7a23"),s=Object(a["g"])("meta",{name:"csrf-token",content:"{{ csrf_token() }}"},null,-1),c={id:"app"},r={class:"container-fluid",style:{font:"poppins"}},i={class:"row flex-nowrap"},o=Object(a["h"])('<div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style="background-color:#eef6f5;"><div class="d-flex flex-column sticky-top align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"><ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu" style="font-color:#aeb9be;"><li class="nav-item"><a href="dashboard" class="nav-link align-middle px-0"><i class="fs-4 bi-house"></i><span class="ms-1 d-none d-sm-inline">  Dashboard</span></a></li><li><a href="production" data-bs-toggle="collapse" class="nav-link px-0 align-middle"><i class="fs-4 bi-speedometer2"></i><span class="ms-1 d-none d-sm-inline">  Production</span></a></li><li><a href="orders" class="nav-link px-0 align-middle"><i class="fs-4 bi-table"></i><span class="ms-1 d-none d-sm-inline">  Orders</span></a></li><li><a href="products" data-bs-toggle="collapse" class="nav-link px-0 align-middle"><i class="fs- bi-grid"></i><span class="ms-1 d-none d-sm-inline">  Products</span></a><ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu"><li class="w-100"><a href="#" class="nav-link px-0"><span class="d-none d-sm-inline">Product</span> 1</a></li><li><a href="#" class="nav-link px-0"><span class="d-none d-sm-inline">Product</span> 2</a></li><li><a href="#" class="nav-link px-0"><span class="d-none d-sm-inline">Product</span> 3</a></li><li><a href="#" class="nav-link px-0"><span class="d-none d-sm-inline">Product</span> 4</a></li></ul></li><li><a href="customers" class="nav-link px-0 align-middle"><i class="fs-4 bi-people"></i><span class="ms-1 d-none d-sm-inline">  Customers</span></a></li><li><a href="hr" class="nav-link px-0 align-middle"><i class="fs-4 bi-diagram-2"></i><span class="ms-1 d-none d-sm-inline">  HR</span></a></li><li><a href="animals/cows/" class="nav-link px-0 align-middle"><i class="fs-4 fs- bi-grid"></i><span class="ms-1 d-none d-sm-inline">  Animals</span></a></li><li><a href="animals/cows/add" class="nav-link px-0 align-middle"><i class="fs-4 fs- bi-grid"></i><span class="ms-1 d-none d-sm-inline">  Animals</span></a></li><li><a href="inventory" class="nav-link px-0 align-middle"><i class="fs-4 bi-house-door"></i><span class="ms-1 d-none d-sm-inline">  Inventory</span></a></li></ul><hr></div></div>',1),l={class:"col py-3",style:{"background-color":"#f8f8f8"}};function u(e,n,t,u,d,f){var p=Object(a["D"])("Nav"),b=Object(a["D"])("router-view");return Object(a["x"])(),Object(a["f"])(a["a"],null,[s,Object(a["j"])(p),Object(a["g"])("div",c,[Object(a["g"])("div",r,[Object(a["g"])("div",i,[o,Object(a["g"])("div",l,[Object(a["j"])(b)])])])])],64)}var d={class:"navbar navbar-expand navbar-dark bg-dark"},f={class:"navbar-nav mr-auto"},p={class:"nav-item"},b=Object(a["i"])(" Home "),m={class:"nav-item"},h={key:0,class:"navbar-nav ml-auto"},g={class:"nav-item"},v=Object(a["i"])(" Sign Up "),O={class:"nav-item"},j=Object(a["i"])(" Login "),k={key:1,class:"navbar-nav ml-auto"},y={class:"nav-item"},w={class:"nav-item"},x=Object(a["i"])(" Sign Out ");function P(e,n,t,s,c,r){var i=Object(a["D"])("font-awesome-icon"),o=Object(a["D"])("router-link");return Object(a["x"])(),Object(a["f"])("nav",d,[Object(a["g"])("div",f,[Object(a["g"])("li",p,[Object(a["j"])(o,{to:"/",class:"nav-link"},{default:Object(a["O"])((function(){return[Object(a["j"])(i,{icon:"home"}),b]})),_:1})]),Object(a["g"])("li",m,[r.currentUser?(Object(a["x"])(),Object(a["d"])(o,{key:0,to:"/profile",class:"nav-link"},{default:Object(a["O"])((function(){return[Object(a["i"])(Object(a["G"])(r.currentUser.username),1)]})),_:1})):Object(a["e"])("",!0)])]),r.currentUser?Object(a["e"])("",!0):(Object(a["x"])(),Object(a["f"])("div",h,[Object(a["g"])("li",g,[Object(a["j"])(o,{to:"/signup",class:"nav-link"},{default:Object(a["O"])((function(){return[Object(a["j"])(i,{icon:"user-plus"}),v]})),_:1})]),Object(a["g"])("li",O,[Object(a["j"])(o,{to:"/login",class:"nav-link"},{default:Object(a["O"])((function(){return[Object(a["j"])(i,{icon:"sign-in-alt"}),j]})),_:1})])])),r.currentUser?(Object(a["x"])(),Object(a["f"])("div",k,[Object(a["g"])("li",y,[Object(a["j"])(o,{to:"/profile",class:"nav-link"},{default:Object(a["O"])((function(){return[Object(a["j"])(i,{icon:"user"}),Object(a["i"])(" "+Object(a["G"])(r.currentUser.username),1)]})),_:1})]),Object(a["g"])("li",w,[Object(a["j"])(o,{to:"/logout",class:"nav-link"},{default:Object(a["O"])((function(){return[Object(a["j"])(i,{icon:"sign-in-alt"}),x]})),_:1})])])):Object(a["e"])("",!0)])}t("caad"),t("2532");var _={computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("/logout"),this.$router.push("/login")}}},S=t("6b0d"),U=t.n(S);const E=U()(_,[["render",P]]);var I=E;window.csrf_token="{{ csrf_token() }}";var A={components:{Nav:I}};t("b3f2");const N=U()(A,[["render",u]]);var T=N,C=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),D=[{path:"/",alias:"/dashboard",name:"dashboard",component:function(){return t.e("chunk-28bad221").then(t.bind(null,"0c7c"))}},{path:"/production",alias:"/production",name:"production",component:function(){return t.e("chunk-2d0e2151").then(t.bind(null,"7cd3"))}},{path:"/inventory",alias:"/inventory",name:"inventory",component:function(){return t.e("chunk-2d0d7276").then(t.bind(null,"7634"))}},{path:"/hr",alias:"/hr",name:"hr",component:function(){return t.e("chunk-2d0cba84").then(t.bind(null,"4b33"))}},{path:"/products",alias:"/products",name:"products",component:function(){return t.e("chunk-2d0d5c71").then(t.bind(null,"7079"))}},{path:"/animals/cows",alias:"/cows",name:"cows",component:function(){return t.e("chunk-4d48cc1a").then(t.bind(null,"c1ae"))}},{path:"/animals/cows/add",alias:"/cows/add",name:"add-cows",component:function(){return t.e("chunk-0d02af2c").then(t.bind(null,"9f52"))}},{path:"/signup",alias:"/signup",name:"signup",component:function(){return Promise.all([t.e("chunk-3b46e7c7"),t.e("chunk-2d0bce43")]).then(t.bind(null,"2a53"))}},{path:"/profile",alias:"/profile",name:"profile",component:function(){return t.e("chunk-2d0d03d6").then(t.bind(null,"66aa"))}},{path:"/login",alias:"/login",name:"login",component:function(){return Promise.all([t.e("chunk-3b46e7c7"),t.e("chunk-2d21a56d")]).then(t.bind(null,"baa9"))}}],L=Object(C["a"])({history:Object(C["b"])(),routes:D}),M=L,R=t("5502"),F=t("d4ec"),B=t("bee2"),q=(t("e9c4"),t("bc3a")),H=t.n(q);H.a.defaults.headers.common={"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":window.csrf_token};var J="http://localhost:4000/api/",X=function(){function e(){Object(F["a"])(this,e)}return Object(B["a"])(e,[{key:"login",value:function(e){return H.a.post(J+"sign_in",{email:e.email,password:e.password}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return H.a.post(J+"register",{username:e.username,email:e.email,password:e.password})}}]),e}(),$=new X,G=JSON.parse(localStorage.getItem("user")),K=G?{status:{loggedIn:!0},user:G}:{status:{loggedIn:!1},user:null},W={namespaced:!0,state:K,actions:{login:function(e,n){var t=e.commit;return $.login(n).then((function(e){return t("loginSuccess",e),Promise.resolve(e)}),(function(e){return t("loginFailure"),Promise.reject(e)}))},logout:function(e){var n=e.commit;$.logout(),n("logout")},register:function(e,n){var t=e.commit;return $.register(n).then((function(e){return t("registerSuccess"),Promise.resolve(e.data)}),(function(e){return t("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,n){e.status.loggedIn=!0,e.user=n},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}},z=Object(R["a"])({modules:{auth:W}}),Q=z,V=(t("4989"),t("ab8b"),t("ecee")),Y=t("ad3d"),Z=t("c074");V["c"].add(Z["a"],Z["d"],Z["e"],Z["b"],Z["c"]),Object(a["c"])(T).use(M).use(Q).component("font-awesome-icon",Y["a"]).mount("#app")},b3f2:function(e,n,t){"use strict";t("437b")}});
//# sourceMappingURL=app.4c32a3ae.js.map