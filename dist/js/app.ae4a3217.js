(function(e){function t(t){for(var a,o,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"46fa7491"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var u=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0530":function(e,t,n){"use strict";var a=n("90a6"),r=n.n(a);r.a},"217e":function(e,t,n){e.exports=n.p+"img/mazda.1dfb1d75.webp"},4917:function(e,t,n){e.exports=n.p+"img/anker.dd151db7.jpg"},"4ed2":function(e,t,n){"use strict";var a=n("ead7"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o=(n("5c0b"),n("2877")),s={},c=Object(o["a"])(s,r,i,!1,null,null,null),u=c.exports,l=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Appheader"),n("b-row",{staticClass:"product-list"},[n("b-col",{attrs:{cols:"2",id:"sidebar"}},[n("p",[n("strong",[e._v("Product Categories")])]),n("hr"),e._l(e.categories,(function(e){return n("Category",{key:e.id,attrs:{type:e}})}))],2),n("b-col",{attrs:{cols:"10"}},[n("Carousel"),n("p",[n("strong",[e._v("Top Selling Products")])]),e._l(e.products,(function(e){return n("products",{key:e.id,attrs:{listing:e}})}))],2)],1)],1)},d=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"products"},[n("div",{staticClass:"image"},[n("img",{attrs:{src:e.listing.imageLink,height:"110px",width:"300px"}})]),n("div",{staticClass:"productDetails",attrs:{"text-alone:none":""}},[n("p",[e._v(e._s(e.listing.name))]),n("p",[e._v(e._s(e.listing.description))]),n("p",[e._v(e._s(e.listing.price))]),n("b-button",{attrs:{variant:"success",id:"button"}},[e._v("Buy Now")])],1)])},m=[],b={props:["listing"]},g=b,h=(n("fb3d"),Object(o["a"])(g,f,m,!1,null,"77509732",null)),v=h.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"category"},[n("p",[e._v(e._s(e.type.name))])])},C=[],_={props:["type"]},k=_,w=(n("5a19"),Object(o["a"])(k,y,C,!1,null,"2f43dcc0",null)),x=w.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Appheader"}},[n("b-navbar",{attrs:{toggleable:"lg",variant:"info",id:"header"}},[n("b-navbar-brand",{attrs:{href:"#",id:"company"}},[n("h3",[e._v("CruiseMart Nigeria Unlimited")])]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",[n("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[e._v("Search")])],1)],1)],1)],1)],1)},E=[],S={},O=S,P=(n("0530"),Object(o["a"])(O,j,E,!1,null,"661d5cd5",null)),$=P.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slides"},[n("carousel",{attrs:{autoplay:!0,"per-page":1,autoplayTimeout:2e3,"mouse-drag":!0,speed:500,loop:!0,centerMode:!0,spacePadding:0}},e._l(e.slides,(function(e){return n("slide",{key:e.id},[n("img",{attrs:{src:e.image,height:"300px"}})])})),1)],1)},M=[],z={data:function(){return{slides:[{id:1,image:n("8cb1")},{id:2,image:n("217e")},{id:3,image:n("4917")},{id:4,image:n("f52b")},{id:5,image:n("9e25")}]}}},A=z,T=(n("88bf"),Object(o["a"])(A,L,M,!1,null,null,null)),B=T.exports,H={name:"Home",data:function(){return{products:[{id:1,name:"2020 Mercedes-Benz E-Class",imageLink:n("8cb1"),description:"The E 350 replaces last year's E 300 and gets a bump in horsepower",price:"$107,350"},{id:2,name:"2020 Mazda CX-30",imageLink:n("217e"),description:"The 2020 Mazda CX-30 is built to make you feel alive.",price:"$29,200"},{id:3,name:"Anker SoundCore",imageLink:n("4917"),description:"Anker SoundCore 2 Portable Bluetooth Wireless Speaker",price:"$37.4"},{id:4,name:"Skinny Jeans in Dark Rinse Wash",imageLink:n("be54"),description:"Expertly designed with premium mills to smooth, lift, fit ",price:"$91.32"},{id:5,name:"Wrist Watches For Men",imageLink:n("9e25"),description:"High Imported Quality, Shape: Round, Case: High Quality Stainless",price:"$201.32"},{id:6,name:"MERCEEDES BENZ CLA ",imageLink:n("a0a4"),description:"High Imported Quality, Shape: Round, Case: High Quality Stainless",price:"$200,101.32"},{id:7,name:"2020 Mercedes-Benz E-Class",imageLink:n("8cb1"),description:"The E 350 replaces last year's E 300 and gets a bump in horsepower",price:"$107,350"},{id:8,name:"2020 Mazda CX-30",imageLink:n("217e"),description:"The 2020 Mazda CX-30 is built to make you feel alive.",price:"$29,200"},{id:9,name:"Anker SoundCore",imageLink:n("4917"),description:"Anker SoundCore 2 Portable Bluetooth Wireless Speaker",price:"$37.4"},{id:10,name:"Skinny Jeans in Dark Rinse Wash",imageLink:n("be54"),description:"Expertly designed with premium mills to smooth, lift, fit ",price:"$91.32"}],categories:[{id:1,name:"Product Categories"},{id:2,name:"Automobile"},{id:3,name:"Phones"},{id:4,name:"Clothings"},{id:5,name:"Kitchen Accessories"},{id:6,name:"Electronics"},{id:7,name:"Beauty Products"}]}},components:{products:v,Category:x,Appheader:$,Carousel:B}},W=H,R=(n("4ed2"),Object(o["a"])(W,p,d,!1,null,"7c82bea6",null)),D=R.exports;a["a"].use(l["a"]);var J=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Q=new l["a"]({mode:"history",base:"/",routes:J}),X=Q,N=n("2f62");a["a"].use(N["a"]);var I=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),q=n("ea9a"),F=n("9ed1"),K=(n("32f0"),n("60d7"),n("0a63")),U=n.n(K);a["a"].use(U.a),a["a"].use(q["a"]),a["a"].use(F["a"]),a["a"].config.productionTip=!1,new a["a"]({router:X,store:I,render:function(e){return e(u)}}).$mount("#app")},"5a19":function(e,t,n){"use strict";var a=n("c9b6"),r=n.n(a);r.a},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"7a13":function(e,t,n){},"88bf":function(e,t,n){"use strict";var a=n("ff6c"),r=n.n(a);r.a},"8cb1":function(e,t,n){e.exports=n.p+"img/benze.1aa83b3d.webp"},"90a6":function(e,t,n){},"9c0c":function(e,t,n){},"9e25":function(e,t,n){e.exports=n.p+"img/watch.011cbf05.jpg"},a0a4:function(e,t,n){e.exports=n.p+"img/benz1.31a8d92a.jpeg"},be54:function(e,t,n){e.exports=n.p+"img/jean.e0a8885f.jpeg"},c9b6:function(e,t,n){},ead7:function(e,t,n){},f52b:function(e,t,n){e.exports=n.p+"img/benz2.63c4c03a.jpeg"},fb3d:function(e,t,n){"use strict";var a=n("7a13"),r=n.n(a);r.a},ff6c:function(e,t,n){}});
//# sourceMappingURL=app.ae4a3217.js.map