(function(e){function t(t){for(var i,s,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},n={app:0},r=[];function s(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"53ba94cb"}[e]+".js"}function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,i){a=n[e]=[t,i]}));t.push(a[2]=i);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(e);var l=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=n[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,a[1](l)}n[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0847":function(e,t,a){"use strict";var i=a("825a9"),n=a.n(i);n.a},"09ce":function(e,t,a){"use strict";var i=a("d9e7"),n=a.n(i);n.a},"0c85":function(e,t,a){"use strict";var i=a("ca9e"),n=a.n(i);n.a},"1b34":function(e,t,a){},"217e":function(e,t,a){e.exports=a.p+"img/mazda.1dfb1d75.webp"},4917:function(e,t,a){e.exports=a.p+"img/anker.dd151db7.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],s=(a("5c0b"),a("2877")),o={},c=Object(s["a"])(o,n,r,!1,null,null,null),l=c.exports,u=(a("d3b7"),a("8c4f")),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Appheader"),a("b-row",{staticClass:"product-list"},[a("b-col",{attrs:{cols:"2",id:"sidebar"}},[a("p",[a("strong",[e._v("Product Categories")])]),a("hr"),e._l(e.categories,(function(e){return a("Category",{key:e.id,attrs:{type:e}})}))],2),a("b-col",{attrs:{cols:"10"}},[a("Carousel"),a("p",[a("strong",[e._v("Top Selling Products")])]),e._l(e.products,(function(e){return a("products",{key:e.id,attrs:{listing:e}})}))],2)],1),a("Appfooter")],1)},d=[],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"products"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:e.listing.imageLink,height:"110px",width:"300px"}})]),a("div",{staticClass:"productDetails",attrs:{"text-alone:none":""}},[a("p",[e._v(e._s(e.listing.name))]),a("p",[e._v(e._s(e.listing.description))]),a("p",[e._v(e._s(e.listing.price))]),a("b-button",{attrs:{variant:"success",id:"button"}},[e._v("Buy Now")])],1)])},m=[],b={props:["listing"]},v=b,g=(a("0847"),Object(s["a"])(v,f,m,!1,null,"fd0e4c5e",null)),h=g.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"category"},[a("p",[e._v(e._s(e.type.name))])])},_=[],C={props:["type"]},k=C,w=(a("e67e"),Object(s["a"])(k,y,_,!1,null,"5ed6774d",null)),E=w.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-navbar",{attrs:{type:"dark",variant:"info",fixed:"top"}},[a("b-navbar-brand",{attrs:{href:"#",id:"company"}},[a("h3",[e._v("CruiseMart Nigeria Unlimited")])]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-form",[a("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search Products"}}),a("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[e._v("Search")])],1)],1)],1)],1)],1)},S=[],j={},O=j,A=(a("0c85"),Object(s["a"])(O,x,S,!1,null,"d5ee309c",null)),P=A.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"slides"},[a("carousel",{attrs:{autoplay:!0,"per-page":1,autoplayTimeout:2e3,"mouse-drag":!0,speed:500,loop:!0,centerMode:!0,spacePadding:0}},e._l(e.slides,(function(e){return a("slide",{key:e.id},[a("img",{attrs:{src:e.image,height:"300px",width:"60%"}})])})),1)],1)},$=[],L={data:function(){return{slides:[{id:1,image:a("8cb1")},{id:2,image:a("217e")},{id:3,image:a("4917")},{id:4,image:a("f52b")},{id:5,image:a("9e25")}]}}},T=L,z=(a("88bf"),Object(s["a"])(T,M,$,!1,null,null,null)),H=z.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-row",{staticClass:"Appfooter"},[a("b-col",{attrs:{id:"footer1",cols:"4"}},[a("ul",[a("li",[a("h6",[e._v(" Help Centre")])]),a("li",[e._v("Help Center")]),a("li",[e._v("Contact us")]),a("li",[e._v("How to shop on CruiseMart?")]),a("li",[e._v("Delivery options and timelines")]),a("li",[e._v("How to return a product on Cruisemart?")]),a("li",[e._v("Corporate and bulk purchases")])])]),a("b-col",{attrs:{id:"footer1",cols:"4"}},[a("ul",[a("li",[a("h6",[e._v("About CruiseMart")])]),a("li",[e._v("About us")]),a("li",[e._v("CruiseMart Express")]),a("li",[e._v("Terms and Conditions")]),a("li",[e._v("Privacy policy")]),a("li",[e._v("Stay Safe")])])]),a("b-col",{attrs:{id:"footer1",cols:"4"}},[a("ul",[a("li",[a("h6",[e._v(" Our Coverage")])]),a("li",[e._v("Algeria")]),a("li",[e._v("Egypt")]),a("li",[e._v("Ghana")]),a("li",[e._v("Ivory Coast")]),a("li",[e._v("Nigeria")])])])],1),a("b-row",{attrs:{id:"PaymentLinks"}},[a("b-col",{attrs:{cols:"4"}},[a("h6",[e._v("JOIN US ON SOCIAL MEDIA")]),a("div",{staticClass:"images"},[a("i",{staticClass:"fab fa-twitter"}),a("i",{staticClass:"fab fa-facebook-f"}),a("i",{staticClass:"fab fa-youtube"}),a("i",{staticClass:"fab fa-instagram"})])]),a("b-col",{attrs:{cols:"4"}},[a("h6",[e._v("PAYMENT METHODS & DELIVERY PARTNERS")]),a("div",{staticClass:"images"},[a("i",{staticClass:"fab fa-cc-visa"}),a("i",{staticClass:"fab fa-cc-mastercard"}),a("i",{staticClass:"fab fa-dhl"})])]),a("b-col",{attrs:{cols:"4"}})],1)],1)},N=[],R=(a("09ce"),{}),B=Object(s["a"])(R,D,N,!1,null,"7dd388df",null),I=B.exports,W={name:"Home",data:function(){return{products:[{id:1,name:"2020 Mercedes-Benz E-Class",imageLink:a("8cb1"),description:"The E 350 replaces last year's E 300 and gets a bump in horsepower",price:"$107,350"},{id:2,name:"2020 Mazda CX-30",imageLink:a("217e"),description:"The 2020 Mazda CX-30 is built to make you feel alive.",price:"$29,200"},{id:3,name:"Anker SoundCore",imageLink:a("4917"),description:"Anker SoundCore 2 Portable Bluetooth Wireless Speaker",price:"$37.4"},{id:4,name:"Skinny Jeans in Dark Rinse Wash",imageLink:a("be54"),description:"Expertly designed with premium mills to smooth, lift, fit ",price:"$91.32"},{id:5,name:"Wrist Watches For Men",imageLink:a("9e25"),description:"High Imported Quality, Shape: Round, Case: High Quality Stainless",price:"$201.32"},{id:6,name:"MERCEEDES BENZ CLA ",imageLink:a("a0a4"),description:"High Imported Quality, Shape: Round, Case: High Quality Stainless",price:"$200,101.32"},{id:7,name:"2020 Mercedes-Benz E-Class",imageLink:a("8cb1"),description:"The E 350 replaces last year's E 300 and gets a bump in horsepower",price:"$107,350"},{id:8,name:"2020 Mazda CX-30",imageLink:a("217e"),description:"The 2020 Mazda CX-30 is built to make you feel alive.",price:"$29,200"},{id:9,name:"Anker SoundCore",imageLink:a("4917"),description:"Anker SoundCore 2 Portable Bluetooth Wireless Speaker",price:"$37.4"},{id:10,name:"Skinny Jeans in Dark Rinse Wash",imageLink:a("be54"),description:"Expertly designed with premium mills to smooth, lift, fit ",price:"$91.32"}],categories:[{id:1,name:"Clothings"},{id:2,name:"Automobile"},{id:3,name:"Phones"},{id:4,name:"Clothings"},{id:5,name:"Kitchen Accessories"},{id:6,name:"Electronics"},{id:7,name:"Beauty Products"}]}},components:{products:h,Category:E,Appheader:P,Carousel:H,Appfooter:I}},J=W,Q=(a("ef90"),Object(s["a"])(J,p,d,!1,null,"44e8ccf3",null)),X=Q.exports;i["a"].use(u["a"]);var U=[{path:"/",name:"Home",component:X},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Y=new u["a"]({mode:"history",base:"/",routes:U}),q=Y,F=a("2f62");i["a"].use(F["a"]);var G=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}}),K=a("ea9a"),V=a("9ed1"),Z=(a("32f0"),a("60d7"),a("0a63")),ee=a.n(Z);a("15f5"),a("7051");i["a"].use(ee.a),i["a"].use(K["a"]),i["a"].use(V["a"]),i["a"].config.productionTip=!1,new i["a"]({router:q,store:G,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var i=a("9c0c"),n=a.n(i);n.a},"825a9":function(e,t,a){},"88bf":function(e,t,a){"use strict";var i=a("ff6c"),n=a.n(i);n.a},"8cb1":function(e,t,a){e.exports=a.p+"img/benze.1aa83b3d.webp"},"9c0c":function(e,t,a){},"9e25":function(e,t,a){e.exports=a.p+"img/watch.011cbf05.jpg"},a0a4:function(e,t,a){e.exports=a.p+"img/benz1.31a8d92a.jpeg"},be54:function(e,t,a){e.exports=a.p+"img/jean.e0a8885f.jpeg"},ca9e:function(e,t,a){},d9e7:function(e,t,a){},df86:function(e,t,a){},e67e:function(e,t,a){"use strict";var i=a("1b34"),n=a.n(i);n.a},ef90:function(e,t,a){"use strict";var i=a("df86"),n=a.n(i);n.a},f52b:function(e,t,a){e.exports=a.p+"img/benz2.63c4c03a.jpeg"},ff6c:function(e,t,a){}});
//# sourceMappingURL=app.565777de.js.map