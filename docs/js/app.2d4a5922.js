(function(t){function e(e){for(var c,o,d=e[0],i=e[1],s=e[2],u=0,b=[];u<d.length;u++)o=d[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);l&&l(e);while(b.length)b.shift()();return n.push.apply(n,s||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],c=!0,d=1;d<a.length;d++){var i=a[d];0!==r[i]&&(c=!1)}c&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var c={},r={app:0},n=[];function o(e){if(c[e])return c[e].exports;var a=c[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=c,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(a,c,function(e){return t[e]}.bind(null,c));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Vue-PWA/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=e,d=d.slice();for(var s=0;s<d.length;s++)e(d[s]);var l=i;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0c46":function(t,e,a){},"16fc":function(t,e,a){"use strict";a("0c46")},"2d25":function(t,e,a){var c={"./muffins.webp":"e40a","./pan_molde.webp":"414e","./panqueques.webp":"7e43","./panqueques_avena.webp":"f3ed","./pie_maracuya.webp":"5231","./selva_negra.webp":"9eb0"};function r(t){var e=n(t);return a(e)}function n(t){if(!a.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}r.keys=function(){return Object.keys(c)},r.resolve=n,t.exports=r,r.id="2d25"},3068:function(t,e,a){},"37a1":function(t,e,a){},"3a33":function(t,e,a){"use strict";a("80a2")},"414e":function(t,e,a){t.exports=a.p+"img/pan_molde.bb3dfa32.webp"},5231:function(t,e,a){t.exports=a.p+"img/pie_maracuya.9e18fec4.webp"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("7a23");function r(t,e,a,r,n,o){var d=Object(c["o"])("NavigationBar"),i=Object(c["o"])("CardsMasonry");return Object(c["j"])(),Object(c["e"])(c["a"],null,[Object(c["h"])(d),Object(c["h"])(i)],64)}var n={class:"cards-container"};function o(t,e,a,r,o,d){var i=Object(c["o"])("CardWithModal");return Object(c["j"])(),Object(c["e"])("div",n,[(Object(c["j"])(!0),Object(c["e"])(c["a"],null,Object(c["n"])(d.RecetasFiltradas,(function(t){return Object(c["j"])(),Object(c["e"])(i,{key:t.title,title:t.title,imageUrl:t.imageUrl,imageAlt:t.imageAlt,recetaUrl:t.recetaUrl},null,8,["title","imageUrl","imageAlt","recetaUrl"])})),128))])}a("4de4"),a("caad"),a("2532");var d=Object(c["t"])("data-v-39cf83e6");Object(c["l"])("data-v-39cf83e6");var i={class:"protection"},s={key:0,class:"modal-mask"},l={class:"modal-container"},u={class:"modalGrid"};Object(c["k"])();var b=d((function(t,e,r,n,o,b){return Object(c["j"])(),Object(c["e"])(c["a"],null,[Object(c["h"])("div",i,[Object(c["h"])("article",{onClick:e[1]||(e[1]=function(){return b.openModal.apply(b,arguments)})},[Object(c["h"])("h1",null,Object(c["p"])(r.title),1),Object(c["h"])("img",{src:a("2d25")("./".concat(r.imageUrl)),alt:r.imageAlt},null,8,["src","alt"])])]),Object(c["h"])(c["b"],{name:"modal"},{default:d((function(){return[o.showModal?(Object(c["j"])(),Object(c["e"])("div",s,[Object(c["h"])("div",l,[Object(c["h"])("span",{onClick:e[2]||(e[2]=function(){return b.closeModal.apply(b,arguments)}),class:"cerrar",ontouchstart:""},"×"),Object(c["h"])("h2",null,Object(c["p"])(r.title),1),Object(c["h"])("div",u,[Object(c["h"])("img",{src:a("2d25")("./".concat(r.imageUrl)),alt:r.imageAlt},null,8,["src","alt"]),Object(c["h"])("div",{class:"ingredientes",innerHTML:o.recetaIngredientes},null,8,["innerHTML"]),Object(c["h"])("div",{class:"modalContent",innerHTML:o.recetaContenido},null,8,["innerHTML"])])])])):Object(c["f"])("",!0)]})),_:1})],64)})),v=(a("99af"),a("d3b7"),a("3835")),f=(a("96cf"),a("1da1")),p={data:function(){return{showModal:!1,recetaIngredientes:"",recetaContenido:""}},name:"CardWithModal",props:{title:{type:String,required:!0},imageUrl:{type:String,required:!0},imageAlt:{type:String,required:!0},recetaUrl:{type:String,required:!0}},methods:{openModal:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var a,c,r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.recetaUrl);case 3:if(a=e.sent,c=new DOMParser,a.ok){e.next=7;break}throw{status:a.status,statusText:a.statusText};case 7:return e.next=9,a.text().then(function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.parseFromString(e,"text/html");case 2:return a=t.sent,t.next=5,a.getElementById("ingredientes").innerHTML;case 5:return t.t0=t.sent,t.next=8,a.querySelector(".modalContent").innerHTML;case 8:return t.t1=t.sent,t.abrupt("return",[t.t0,t.t1]);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 9:r=e.sent,n=Object(v["a"])(r,2),t.recetaIngredientes=n[0],t.recetaContenido=n[1],e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](0),o=e.t0.statusText||"Ha ocurrido un error",t.recetaHtml="Error ".concat(e.t0.status," : ").concat(o);case 19:return e.prev=19,document.body.style.overflow="hidden",t.showModal=!0,e.finish(19);case 23:case"end":return e.stop()}}),e,null,[[0,15,19,23]])})))()},closeModal:function(){this.showModal=!1,document.body.style.overflow="auto"}}};a("fa3e");p.render=b,p.__scopeId="data-v-39cf83e6";var h=p,m={data:function(){return{Recetas:[{title:"Panqueques",imageUrl:"panqueques.webp",imageAlt:"Panqueques caseros sobre un plato blanco.",recetaUrl:"./recetas/Panqueques.html"},{title:"Muffins",imageUrl:"muffins.webp",imageAlt:"6 Muffins caseros de maní y arándanos en una bandeja negra.",recetaUrl:"./recetas/Muffins.html"},{title:"Pan de molde",imageUrl:"pan_molde.webp",imageAlt:"Pan de molde casero sobre bandeja de metal. A su costado hay un cuchillo con mango blanco.",recetaUrl:"./recetas/Pan_molde.html"},{title:"Panqueques de avena",imageUrl:"panqueques_avena.webp",imageAlt:"Pila de panqueques de avena sobre plato blanco. Fondo de mesa de cocina difuminado.",recetaUrl:"./recetas/Panqueques_avena.html"},{title:"Pie de maracuyá",imageUrl:"pie_maracuya.webp",imageAlt:"Pie de maracuyá casero.",recetaUrl:"./recetas/Pie_maracuya.html"},{title:"Queque marmoleado",imageUrl:"panqueques.webp",imageAlt:"Queque marmoleado circular con cuchillo y espátula de mango blanco. Todo sobre superficie blanca.",recetaUrl:"./recetas/Queque_marmoleado.html"},{title:"Torta selva negra",imageUrl:"selva_negra.webp",imageAlt:"Pedazo de torta selva negra sobre plato blanco. Torta selva negra detrás desenfocada. La torta está cubierta de manjar blanco.",recetaUrl:"./recetas/Torta_selva_negra.html"}]}},name:"CardsMasonry",components:{CardWithModal:h},computed:{RecetasFiltradas:function(){var t=this;return this.Recetas.filter((function(e){return e.title.toLowerCase().includes(t.$store.state.buscar.toLowerCase())}))}}};a("97df");m.render=o;var g=m,j=Object(c["t"])("data-v-4aa05c14");Object(c["l"])("data-v-4aa05c14");var O={class:"NavBar"};Object(c["k"])();var y=j((function(t,e,a,r,n,o){var d=Object(c["o"])("MedidasEquivalencias"),i=Object(c["o"])("SearchFilter"),s=Object(c["o"])("MenuHamburguesa");return Object(c["j"])(),Object(c["e"])("nav",null,[Object(c["h"])("ul",O,[!o.mostrar||n.stateMenuHamburguesa?(Object(c["j"])(),Object(c["e"])(d,{key:0})):Object(c["f"])("",!0),Object(c["h"])(i),o.mostrar?(Object(c["j"])(),Object(c["e"])(s,{key:1,onEmite:e[1]||(e[1]=function(t){return n.stateMenuHamburguesa=!n.stateMenuHamburguesa})})):Object(c["f"])("",!0)])])})),w=Object(c["t"])("data-v-5c0899c2");Object(c["l"])("data-v-5c0899c2");var M={key:0,class:"modal-mask"},q={class:"modal-container"},_=Object(c["g"])('<h2 data-v-5c0899c2>Medidas y equivalencias</h2><div class="modalTables" data-v-5c0899c2><table data-v-5c0899c2><thead data-v-5c0899c2><tr data-v-5c0899c2><th data-v-5c0899c2>Harina o azúcar impalpable</th></tr></thead><tbody data-v-5c0899c2><tr data-v-5c0899c2><td data-v-5c0899c2>1 taza = 110 g</td></tr><tr data-v-5c0899c2><td data-v-5c0899c2>½ taza = 55 g</td></tr><tr data-v-5c0899c2><td data-v-5c0899c2>⅓ taza = 40 g</td></tr><tr data-v-5c0899c2><td data-v-5c0899c2>¼ taza = 30 g</td></tr></tbody></table><table data-v-5c0899c2><thead data-v-5c0899c2><tr data-v-5c0899c2><th data-v-5c0899c2>Azúcar o mantequilla</th></tr></thead><tbody data-v-5c0899c2><tr data-v-5c0899c2><td data-v-5c0899c2>1 taza = 225 g</td></tr><tr data-v-5c0899c2><td data-v-5c0899c2>½ taza = 115 g</td></tr><tr data-v-5c0899c2><td data-v-5c0899c2>⅓ taza = 75 g</td></tr><tr data-v-5c0899c2><td data-v-5c0899c2>¼ taza = 55 g</td></tr></tbody></table><table data-v-5c0899c2><thead data-v-5c0899c2><tr data-v-5c0899c2><th data-v-5c0899c2>Azúcar moreno</th></tr></thead><tbody data-v-5c0899c2><tr data-v-5c0899c2><td data-v-5c0899c2>1 taza = 200 g</td></tr><tr data-v-5c0899c2><td data-v-5c0899c2>½ taza = 100 g</td></tr><tr data-v-5c0899c2><td data-v-5c0899c2>⅓ taza = 65 g</td></tr><tr data-v-5c0899c2><td data-v-5c0899c2>¼ taza = 50 g</td></tr></tbody></table><table data-v-5c0899c2><thead data-v-5c0899c2><tr data-v-5c0899c2><th data-v-5c0899c2>Cacao en polvo</th></tr></thead><tbody data-v-5c0899c2><tr data-v-5c0899c2><td data-v-5c0899c2>1 taza = 125 g</td></tr><tr data-v-5c0899c2><td data-v-5c0899c2>½ taza = 60 g</td></tr><tr data-v-5c0899c2><td data-v-5c0899c2>⅓ taza = 40 g</td></tr><tr data-v-5c0899c2><td data-v-5c0899c2>¼ taza = 30 g</td></tr></tbody></table><table data-v-5c0899c2><thead data-v-5c0899c2><tr data-v-5c0899c2><th data-v-5c0899c2>Otras medidas</th></tr></thead><tbody data-v-5c0899c2><tr data-v-5c0899c2><td data-v-5c0899c2>1 onza = 28 g</td></tr><tr data-v-5c0899c2><td data-v-5c0899c2>1 stick = 125 g</td></tr><tr data-v-5c0899c2><td data-v-5c0899c2>1 pinta = 400 ml</td></tr></tbody></table><table data-v-5c0899c2><thead data-v-5c0899c2><tr data-v-5c0899c2><th data-v-5c0899c2>Líquidos</th></tr></thead><tbody data-v-5c0899c2><tr data-v-5c0899c2><td data-v-5c0899c2>1 taza = 240 ml</td></tr><tr data-v-5c0899c2><td data-v-5c0899c2>1 cucharadita = 5 ml</td></tr><tr data-v-5c0899c2><td data-v-5c0899c2>1 cucharada = 15 ml</td></tr></tbody></table></div>',2);Object(c["k"])();var x=w((function(t,e,a,r,n,o){return Object(c["j"])(),Object(c["e"])(c["a"],null,[Object(c["h"])("li",{class:"MedidasEquivalencias",ontouchstart:"",onClick:e[1]||(e[1]=function(){return o.openModal.apply(o,arguments)})}," Medidas y equivalencias "),Object(c["h"])(c["b"],{name:"modal"},{default:w((function(){return[n.showModal?(Object(c["j"])(),Object(c["e"])("div",M,[Object(c["h"])("div",q,[Object(c["h"])("span",{onClick:e[2]||(e[2]=function(){return o.closeModal.apply(o,arguments)}),class:"cerrar",ontouchstart:""},"×"),_])])):Object(c["f"])("",!0)]})),_:1})],64)})),k={data:function(){return{showModal:!1}},name:"MedidasEquivalencias",methods:{openModal:function(){document.body.style.overflow="hidden",this.showModal=!0},closeModal:function(){this.showModal=!1,document.body.style.overflow="auto"}}};a("3a33");k.render=x,k.__scopeId="data-v-5c0899c2";var U=k,z={class:"searchLi"},H={class:"searchButton"};function C(t,e,a,r,n,o){var d=Object(c["o"])("font-awesome-icon");return Object(c["j"])(),Object(c["e"])("li",z,[Object(c["s"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.buscar=t}),class:"searchTerm",placeholder:"Búsqueda..."},null,512),[[c["q"],o.buscar]]),Object(c["h"])("div",H,[Object(c["h"])(d,{icon:["fas","search"]})])])}var P={name:"SearchFilter",computed:{buscar:{get:function(){return this.$store.state.buscar},set:function(t){this.$store.commit("actualizarBuscar",t)}}}};a("e3e7");P.render=C;var A=P,T=Object(c["t"])("data-v-7cb6f5f4");Object(c["l"])("data-v-7cb6f5f4");var S=Object(c["h"])("defs",null,[Object(c["h"])("filter",{id:"gooeyness"},[Object(c["h"])("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2.2",result:"blur"}),Object(c["h"])("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10",result:"gooeyness"}),Object(c["h"])("feComposite",{in:"SourceGraphic",in2:"gooeyness",operator:"atop"})])],-1),B={class:"MenuHamburguesa"},L=Object(c["h"])("svg",{version:"1.1",viewBox:"0 0 40 30"},[Object(c["h"])("path",{class:"line line1",d:"M 20 0 H 0"}),Object(c["h"])("path",{class:"line line2",d:"M 20 0 H 40"}),Object(c["h"])("path",{class:"line line3",d:"M 20 15 H 0"}),Object(c["h"])("path",{class:"line line4",d:"M 20 15 H 40"}),Object(c["h"])("path",{class:"line line5",d:"M 20 30 H 0"}),Object(c["h"])("path",{class:"line line6",d:"M 20 30 H 40"})],-1),E=Object(c["h"])("svg",{class:"x",version:"1.1",viewBox:"0 0 40 30"},[Object(c["h"])("path",{class:"line",d:"M 6,0 L 34,30"}),Object(c["h"])("path",{class:"line",d:"M 34,0 L 6,30"})],-1);Object(c["k"])();var I=T((function(t,e,a,r,n,o){return Object(c["j"])(),Object(c["e"])(c["a"],null,[S,Object(c["h"])("li",B,[Object(c["h"])("button",{type:"button",class:["plate","plate4",{active:n.toggled}],onClick:e[1]||(e[1]=function(){return o.BotonHamburguesa.apply(o,arguments)})},[L,E],2)])],64)})),F={data:function(){return{toggled:!1}},name:"MenuHamburguesa",emits:["emite"],methods:{BotonHamburguesa:function(){this.toggled=!this.toggled,this.$emit("emite")}}};a("16fc");F.render=I,F.__scopeId="data-v-7cb6f5f4";var W=F,N={data:function(){return{windowInnerWidth:window.innerWidth,stateMenuHamburguesa:!1}},name:"NavigationBar",components:{MedidasEquivalencias:U,SearchFilter:A,MenuHamburguesa:W},created:function(){var t=this;window.addEventListener("resize",(function(){t.windowInnerWidth=window.innerWidth}))},computed:{mostrar:function(){return this.windowInnerWidth<728}}};a("ddaf");N.render=y,N.__scopeId="data-v-4aa05c14";var R=N,D={name:"App",components:{CardsMasonry:g,NavigationBar:R}};a("64be");D.render=r;var G=D,$=a("9483");Object($["a"])("".concat("/Vue-PWA/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Q=a("ecee"),V=a("c074"),J=a("ad3d"),K=a("5502"),X=Object(K["a"])({state:function(){return{buscar:""}},mutations:{actualizarBuscar:function(t,e){t.buscar=e}}}),Y=Object(c["d"])(G);Q["c"].add(V["a"]),Y.component("font-awesome-icon",J["a"]),Y.use(X),Y.mount("#app")},"64be":function(t,e,a){"use strict";a("3068")},"7e43":function(t,e,a){t.exports=a.p+"img/panqueques.a8d4446f.webp"},"80a2":function(t,e,a){},"97df":function(t,e,a){"use strict";a("9b20")},"9b20":function(t,e,a){},"9eb0":function(t,e,a){t.exports=a.p+"img/selva_negra.164ecde9.webp"},d6f6:function(t,e,a){},ddaf:function(t,e,a){"use strict";a("37a1")},e3e7:function(t,e,a){"use strict";a("f7d5")},e40a:function(t,e,a){t.exports=a.p+"img/muffins.13b2bc16.webp"},f3ed:function(t,e,a){t.exports=a.p+"img/panqueques_avena.7a2f43e1.webp"},f7d5:function(t,e,a){},fa3e:function(t,e,a){"use strict";a("d6f6")}});
//# sourceMappingURL=app.2d4a5922.js.map