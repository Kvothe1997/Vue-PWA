(function(e){function t(t){for(var r,c,i=t[0],d=t[1],s=t[2],u=0,h=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&h.push(n[c][0]),n[c]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);l&&l(t);while(h.length)h.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var d=a[i];0!==n[d]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},o=[];function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Vue-PWA/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0448":function(e,t,a){},1283:function(e,t,a){"use strict";a("2870")},2609:function(e,t,a){"use strict";a("2960")},2870:function(e,t,a){},2960:function(e,t,a){},"2d25":function(e,t,a){var r={"./IMG_0282.jpg":"f5bc","./SpotifySetup.exe":"5769","./muffins.webp":"e40a","./pan_molde.webp":"414e","./panqueques.webp":"7e43","./panqueques_avena.webp":"f3ed","./pie_limon.webp":"d923","./pie_maracuya.webp":"5231","./queque_marmoleado.webp":"9d0e","./selva_negra.webp":"9eb0","./torta_vainilla.webp":"6130"};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id="2d25"},3068:function(e,t,a){},"3c8a":function(e,t,a){},"40ba":function(e,t,a){"use strict";a("445c")},"414e":function(e,t,a){e.exports=a.p+"img/pan_molde.bb3dfa32.webp"},"445c":function(e,t,a){},"4e49":function(e,t,a){"use strict";a("9a52")},5231:function(e,t,a){e.exports=a.p+"img/pie_maracuya.9e18fec4.webp"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23");function n(e,t,a,n,o,c){var i=Object(r["o"])("NavigationBar"),d=Object(r["o"])("CardsMasonry"),s=Object(r["o"])("DarkModeButton");return Object(r["j"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(i),Object(r["h"])(d),Object(r["h"])(s)],64)}var o=Object(r["t"])("data-v-47536886");Object(r["l"])("data-v-47536886");var c={class:"cards-container",ref:"cardsContainer"};Object(r["k"])();var i=o((function(e,t,a,n,o,i){var d=Object(r["o"])("CardWithModal");return Object(r["j"])(),Object(r["e"])("div",c,[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["n"])(o.RecetasRendered,(function(e){return Object(r["j"])(),Object(r["e"])(d,{key:e.title,title:e.title,imageUrl:e.imageUrl,imageAlt:e.imageAlt,recetaUrl:e.recetaUrl},null,8,["title","imageUrl","imageAlt","recetaUrl"])})),128))],512)})),d=(a("99af"),a("4de4"),a("caad"),a("fb6a"),a("2532"),Object(r["t"])("data-v-433bd896"));Object(r["l"])("data-v-433bd896");var s={class:"protection"},l={key:0,class:"modal-container"},u={class:"modalGrid"};Object(r["k"])();var h=d((function(e,t,n,o,c,i){return Object(r["j"])(),Object(r["e"])(r["a"],null,[Object(r["h"])("div",s,[Object(r["h"])("article",{ontouchstart:"",onClick:t[1]||(t[1]=function(){return i.openModal.apply(i,arguments)})},[Object(r["h"])("h1",null,Object(r["p"])(n.title),1),Object(r["h"])("img",{src:a("2d25")("./".concat(n.imageUrl)),alt:n.imageAlt},null,8,["src","alt"])])]),c.showModal?(Object(r["j"])(),Object(r["e"])("div",{key:0,onClick:t[2]||(t[2]=function(){return i.closeModal.apply(i,arguments)}),class:"modal-mask"})):Object(r["f"])("",!0),Object(r["h"])(r["b"],{name:"modal",onEnter:i.setCerrarRightPosition,"onAfter-enter":i.removeCerrarRightPosition},{default:d((function(){return[c.showModal?(Object(r["j"])(),Object(r["e"])("div",l,[Object(r["h"])("span",{onClick:t[3]||(t[3]=function(){return i.closeModal.apply(i,arguments)}),class:"cerrar",ref:"cerrar",ontouchstart:""},"×",512),Object(r["h"])("h2",null,Object(r["p"])(n.title),1),Object(r["h"])("div",u,[Object(r["h"])("img",{src:a("2d25")("./".concat(n.imageUrl)),alt:n.imageAlt},null,8,["src","alt"]),Object(r["h"])("div",{class:"ingredientes",innerHTML:c.recetaIngredientes},null,8,["innerHTML"]),Object(r["h"])("div",{class:"modalContent",innerHTML:c.recetaContenido},null,8,["innerHTML"])])])):Object(r["f"])("",!0)]})),_:1},8,["onEnter","onAfter-enter"])],64)})),v=(a("d3b7"),a("3835")),m=(a("96cf"),a("1da1")),b={name:"CardWithModal",props:{title:{type:String,required:!0},imageUrl:{type:String,required:!0},imageAlt:{type:String,required:!0},recetaUrl:{type:String,required:!0}},data:function(){return{showModal:!1,recetaIngredientes:"",recetaContenido:""}},methods:{openModal:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var a,r,n,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.recetaUrl);case 3:if(a=t.sent,r=new DOMParser,a.ok){t.next=7;break}throw{status:a.status,statusText:a.statusText};case 7:return t.next=9,a.text().then(function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.parseFromString(t,"text/html");case 2:return a=e.sent,e.next=5,a.getElementById("ingredientes").innerHTML;case 5:return e.t0=e.sent,e.next=8,a.querySelector(".modalContent").innerHTML;case 8:return e.t1=e.sent,e.abrupt("return",[e.t0,e.t1]);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 9:n=t.sent,o=Object(v["a"])(n,2),e.recetaIngredientes=o[0],e.recetaContenido=o[1],t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](0),c=t.t0.statusText||"Ha ocurrido un error",e.recetaHtml="Error ".concat(t.t0.status," : ").concat(c);case 19:return t.prev=19,document.body.style.overflow="hidden",e.showModal=!0,t.finish(19);case 23:case"end":return t.stop()}}),t,null,[[0,15,19,23]])})))()},closeModal:function(){this.showModal=!1,document.body.style.overflow="auto",this.setCerrarRightPosition()},setCerrarRightPosition:function(){this.$refs.cerrar.style.right="0%"},removeCerrarRightPosition:function(){this.$refs.cerrar.removeAttribute("style")}}};a("40ba");b.render=h,b.__scopeId="data-v-433bd896";var f=b,p={name:"CardsMasonry",components:{CardWithModal:f},data:function(){return{RecetasRendered:[],Recetas:[{title:"Panqueques",imageUrl:"panqueques.webp",imageAlt:"Panqueques caseros sobre un plato blanco.",recetaUrl:"./recetas/Panqueques.html",categoria:"Postres"},{title:"Muffins",imageUrl:"muffins.webp",imageAlt:"6 Muffins caseros de maní y arándanos en una bandeja negra.",recetaUrl:"./recetas/Muffins.html",categoria:"Postres"},{title:"Pan de molde",imageUrl:"pan_molde.webp",imageAlt:"Pan de molde casero sobre bandeja de metal. A su costado hay un cuchillo con mango blanco.",recetaUrl:"./recetas/Pan_molde.html",categoria:"Pan"},{title:"Panqueques de avena",imageUrl:"panqueques_avena.webp",imageAlt:"Pila de panqueques de avena sobre plato blanco. Fondo de mesa de cocina difuminado.",recetaUrl:"./recetas/Panqueques_avena.html",categoria:"Postres"},{title:"Pie de maracuyá",imageUrl:"pie_maracuya.webp",imageAlt:"Pie de maracuyá casero.",recetaUrl:"./recetas/Pie_maracuya.html",categoria:"Postres"},{title:"Queque marmoleado",imageUrl:"queque_marmoleado.webp",imageAlt:"Queque marmoleado circular con cuchillo y espátula de mango blanco. Todo sobre superficie blanca.",recetaUrl:"./recetas/Queque_marmoleado.html",categoria:"Postres"},{title:"Torta selva negra",imageUrl:"selva_negra.webp",imageAlt:"Pedazo de torta selva negra sobre plato blanco. Torta selva negra detrás desenfocada. La torta está cubierta de manjar blanco.",recetaUrl:"./recetas/Torta_selva_negra.html",categoria:"Postres"},{title:"Torta de vainilla",imageUrl:"torta_vainilla.webp",imageAlt:"Torta de vainilla dorada y con una rajadura en la parte superior sobre una bandeja de metal. En fondo desenfocado hay una refrigeradora y un mueble blanco. En la parte superior izquierda está escrito Torta de vainilla en color mostaza y a su costado, en la parte superior derecha de la imagen, hay un sticker de un pedazo de torta con las palabras Yay, Cake.",recetaUrl:"./recetas/Torta_vainilla.html",categoria:"Postres"},{title:"Pie de limón",imageUrl:"pie_limon.webp",imageAlt:"Pie de limón sobre bandeja de metal. Fondo borroso de ollas en una cocina. El pie tiene un merengue blanco y la tartaleta es de color mostaza. La imagen tiene un título en color verde que dice Pie de limón. Además, tiene un sticker de un pie humeante y otro sticker con la palabra en inglés 'Cutie pie'",recetaUrl:"./recetas/Pie_limon.html",categoria:"Postres"}]}},computed:{RecetasFiltradasPorCategoria:function(){var e=this;return this.RecetasFiltradasPorBuscar.filter((function(t){return t.categoria.toLowerCase().includes(e.$store.state.searchAndFilter.categoryId.toLowerCase())}))},RecetasFiltradasPorBuscar:function(){var e=this;return this.Recetas.filter((function(t){return t.title.toLowerCase().includes(e.$store.state.searchAndFilter.buscar.toLowerCase())}))}},watch:{RecetasFiltradasPorCategoria:{handler:function(){var e=this;this.RecetasRendered=this.RecetasFiltradasPorCategoria.slice(0,40),this.$nextTick((function(){document.body.scrollHeight-e.$store.state.stickyNavBar.NavBarOffSetTop>=window.innerHeight?window.scrollTo(0,e.$store.state.stickyNavBar.NavBarOffSetTop):window.scrollTo(0,0)}))},immediate:!0},"$store.state.reactiveScrollAndResize.scroll":{handler:function(){this.scrollInfinito(),this.stickyActivateAddPadding()}}},methods:{scrollInfinito:function(){if(this.$refs.cardsContainer.getBoundingClientRect().bottom<window.innerHeight){var e=this.RecetasFiltradasPorCategoria.length,t=this.RecetasRendered.length,a=e-t;if(0!==a){var r=t,n=t+40,o=this.RecetasFiltradasPorCategoria.slice(r,n);console.log(o),this.RecetasRendered=this.RecetasRendered.concat(o),console.log(this.RecetasRendered),console.log(a)}}},stickyActivateAddPadding:function(){window.pageYOffset>1+this.$store.state.stickyNavBar.NavBarOffSetTop?this.$refs.cardsContainer.style.paddingTop="".concat(this.$store.state.stickyNavBar.NavBarHeight,"px"):this.$refs.cardsContainer.style.paddingTop="0px"}}};a("98b5");p.render=i,p.__scopeId="data-v-47536886";var g=p,j=Object(r["t"])("data-v-3ac2131c"),O=j((function(e,t,a,n,o,c){var i=Object(r["o"])("CategoriaSeleccionada"),d=Object(r["o"])("SearchFilter"),s=Object(r["o"])("MenuHamburguesa"),l=Object(r["o"])("ModalNavegacion");return Object(r["j"])(),Object(r["e"])("nav",null,[Object(r["h"])("ul",{class:["NavBar",{sticky:o.active}],ref:"NavBar"},[Object(r["h"])(i),Object(r["h"])(d),Object(r["h"])(s,{onEmite:c.openModalNav},null,8,["onEmite"])],2),Object(r["h"])(l,{showModal:o.showModalNav,onEmitecerrar:c.closeModalNav},null,8,["showModal","onEmitecerrar"])])})),y=Object(r["t"])("data-v-549d6106");Object(r["l"])("data-v-549d6106");var w={key:0,class:"modal-container"},M={class:"modal-content-container"},k={class:"modal-cabecera"},B=Object(r["h"])("h2",null,"Las recetas de Lita",-1),A={class:"modal-contenido"},z=Object(r["h"])("span",null,"Categorías:",-1);Object(r["k"])();var N=y((function(e,t,a,n,o,c){var i=Object(r["o"])("MedidasEquivalencias");return Object(r["j"])(),Object(r["e"])(r["a"],null,[a.showModal?(Object(r["j"])(),Object(r["e"])("div",{key:0,onClick:t[1]||(t[1]=function(){return c.closeModal.apply(c,arguments)}),class:"modal-mask"})):Object(r["f"])("",!0),Object(r["h"])(r["b"],{name:"modal"},{default:y((function(){return[a.showModal?(Object(r["j"])(),Object(r["e"])("div",w,[Object(r["h"])("span",{onClick:t[2]||(t[2]=function(){return c.closeModal.apply(c,arguments)}),class:"cerrar",ontouchstart:""},"×"),Object(r["h"])("div",M,[Object(r["h"])("div",k,[B,Object(r["h"])("img",{src:"".concat(o.faviconURL),alt:"Símbolo del sitio. Una\r\n          jarra celeste, dos huevos y un tazón con un batidor."},null,8,["src"])]),Object(r["h"])("ul",A,[Object(r["h"])("li",null,[Object(r["h"])(i,{onEmite:c.closeModal},null,8,["onEmite"])]),Object(r["h"])("li",null,[z,Object(r["h"])("ul",null,[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["n"])(o.Categories,(function(e,a){return Object(r["j"])(),Object(r["e"])("li",{key:a,"data-id":e.id,onClick:t[3]||(t[3]=function(){return c.seleccionarCategoria.apply(c,arguments)}),ontouchstart:""},Object(r["p"])(e.title),9,["data-id"])})),128))])])])])])):Object(r["f"])("",!0)]})),_:1})],64)})),S=Object(r["t"])("data-v-a9a1d68c");Object(r["l"])("data-v-a9a1d68c");var P={key:0,class:"modal-container"},C=Object(r["g"])('<h2 data-v-a9a1d68c>Medidas y equivalencias</h2><div class="modalTables" data-v-a9a1d68c><table data-v-a9a1d68c><thead data-v-a9a1d68c><tr data-v-a9a1d68c><th data-v-a9a1d68c>Harina o azúcar impalpable</th></tr></thead><tbody data-v-a9a1d68c><tr data-v-a9a1d68c><td data-v-a9a1d68c>1 taza = 110 g</td></tr><tr data-v-a9a1d68c><td data-v-a9a1d68c>½ taza = 55 g</td></tr><tr data-v-a9a1d68c><td data-v-a9a1d68c>⅓ taza = 40 g</td></tr><tr data-v-a9a1d68c><td data-v-a9a1d68c>¼ taza = 30 g</td></tr></tbody></table><table data-v-a9a1d68c><thead data-v-a9a1d68c><tr data-v-a9a1d68c><th data-v-a9a1d68c>Azúcar o mantequilla</th></tr></thead><tbody data-v-a9a1d68c><tr data-v-a9a1d68c><td data-v-a9a1d68c>1 taza = 225 g</td></tr><tr data-v-a9a1d68c><td data-v-a9a1d68c>½ taza = 115 g</td></tr><tr data-v-a9a1d68c><td data-v-a9a1d68c>⅓ taza = 75 g</td></tr><tr data-v-a9a1d68c><td data-v-a9a1d68c>¼ taza = 55 g</td></tr></tbody></table><table data-v-a9a1d68c><thead data-v-a9a1d68c><tr data-v-a9a1d68c><th data-v-a9a1d68c>Azúcar moreno</th></tr></thead><tbody data-v-a9a1d68c><tr data-v-a9a1d68c><td data-v-a9a1d68c>1 taza = 200 g</td></tr><tr data-v-a9a1d68c><td data-v-a9a1d68c>½ taza = 100 g</td></tr><tr data-v-a9a1d68c><td data-v-a9a1d68c>⅓ taza = 65 g</td></tr><tr data-v-a9a1d68c><td data-v-a9a1d68c>¼ taza = 50 g</td></tr></tbody></table><table data-v-a9a1d68c><thead data-v-a9a1d68c><tr data-v-a9a1d68c><th data-v-a9a1d68c>Cacao en polvo</th></tr></thead><tbody data-v-a9a1d68c><tr data-v-a9a1d68c><td data-v-a9a1d68c>1 taza = 125 g</td></tr><tr data-v-a9a1d68c><td data-v-a9a1d68c>½ taza = 60 g</td></tr><tr data-v-a9a1d68c><td data-v-a9a1d68c>⅓ taza = 40 g</td></tr><tr data-v-a9a1d68c><td data-v-a9a1d68c>¼ taza = 30 g</td></tr></tbody></table><table data-v-a9a1d68c><thead data-v-a9a1d68c><tr data-v-a9a1d68c><th data-v-a9a1d68c>Otras medidas</th></tr></thead><tbody data-v-a9a1d68c><tr data-v-a9a1d68c><td data-v-a9a1d68c>1 onza = 28 g</td></tr><tr data-v-a9a1d68c><td data-v-a9a1d68c>1 stick = 125 g</td></tr><tr data-v-a9a1d68c><td data-v-a9a1d68c>1 pinta = 400 ml</td></tr></tbody></table><table data-v-a9a1d68c><thead data-v-a9a1d68c><tr data-v-a9a1d68c><th data-v-a9a1d68c>Líquidos</th></tr></thead><tbody data-v-a9a1d68c><tr data-v-a9a1d68c><td data-v-a9a1d68c>1 taza = 240 ml</td></tr><tr data-v-a9a1d68c><td data-v-a9a1d68c>1 cucharadita = 5 ml</td></tr><tr data-v-a9a1d68c><td data-v-a9a1d68c>1 cucharada = 15 ml</td></tr></tbody></table></div>',2);Object(r["k"])();var _=S((function(e,t,a,n,o,c){return Object(r["j"])(),Object(r["e"])(r["a"],null,[Object(r["h"])("li",{class:"MedidasEquivalencias",ontouchstart:"",onClick:t[1]||(t[1]=function(){return c.openModal.apply(c,arguments)})}," Medidas y equivalencias "),o.showModal?(Object(r["j"])(),Object(r["e"])("div",{key:0,onClick:t[2]||(t[2]=function(){return c.closeModal.apply(c,arguments)}),class:"modal-mask"})):Object(r["f"])("",!0),Object(r["h"])(r["b"],{name:"modal"},{default:S((function(){return[o.showModal?(Object(r["j"])(),Object(r["e"])("div",P,[Object(r["h"])("span",{onClick:t[3]||(t[3]=function(){return c.closeModal.apply(c,arguments)}),class:"cerrar",ontouchstart:""},"×"),C])):Object(r["f"])("",!0)]})),_:1})],64)})),q={emits:["emite"],name:"MedidasEquivalencias",data:function(){return{showModal:!1}},methods:{openModal:function(){this.showModal=!0},closeModal:function(){this.showModal=!1,this.$emit("emite")}}};a("4e49");q.render=_,q.__scopeId="data-v-a9a1d68c";var T=q,R={emits:["emitecerrar"],name:"ModalNavegacion",components:{MedidasEquivalencias:T},props:{showModal:{type:Boolean,required:!0}},data:function(){return{faviconURL:"./img/icons/favicon.svg",Categories:[{title:"Todas las recetas",id:""},{title:"Postres",id:"Postres"},{title:"Pan",id:"Pan"}]}},methods:{closeModal:function(){this.$emit("emitecerrar")},seleccionarCategoria:function(){var e=this,t=event.currentTarget.textContent,a=event.currentTarget.getAttribute("data-id");this.$store.commit("searchAndFilter/actualizarCategory",{name:t,id:a}),this.closeModal(),this.$nextTick((function(){document.body.scrollHeight-e.$store.state.stickyNavBar.NavBarOffSetTop>=window.innerHeight?window.scrollTo(0,e.$store.state.stickyNavBar.NavBarOffSetTop):window.scrollTo(0,0)}))}}};a("d66f");R.render=N,R.__scopeId="data-v-549d6106";var H=R,$=Object(r["t"])("data-v-102ab45c");Object(r["l"])("data-v-102ab45c");var x={class:"categoriaSeleccionada"};Object(r["k"])();var E=$((function(e,t,a,n,o,c){return Object(r["j"])(),Object(r["e"])("li",x,Object(r["p"])(c.categoria),1)})),U={name:"CategoriaSeleccionada",computed:{categoria:function(){return this.$store.state.searchAndFilter.categoryName}}};a("1283");U.render=E,U.__scopeId="data-v-102ab45c";var L=U,I={class:"searchLi"},F={class:"searchButton"};function D(e,t,a,n,o,c){var i=Object(r["o"])("font-awesome-icon");return Object(r["j"])(),Object(r["e"])("li",I,[Object(r["s"])(Object(r["h"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.buscar=e}),class:"searchTerm",placeholder:"Búsqueda..."},null,512),[[r["q"],c.buscar]]),Object(r["h"])("div",F,[Object(r["h"])(i,{icon:["fas","search"]})])])}var W={name:"SearchFilter",computed:{buscar:{get:function(){return this.$store.state.searchAndFilter.buscar},set:function(e){this.$store.commit("searchAndFilter/actualizarBuscar",e)}}}};a("e3e7");W.render=D;var Y=W,G=Object(r["t"])("data-v-adda5c56");Object(r["l"])("data-v-adda5c56");var Q={class:"MenuHamburguesa"},V=Object(r["h"])("svg",{version:"1.1",viewBox:"0 0 40 30"},[Object(r["h"])("path",{class:"line",d:"M 0 0 H 40"}),Object(r["h"])("path",{class:"line",d:"M 0 15 H 40"}),Object(r["h"])("path",{class:"line",d:"M 0 30 H 40"})],-1);Object(r["k"])();var J=G((function(e,t,a,n,o,c){return Object(r["j"])(),Object(r["e"])("li",Q,[Object(r["h"])("button",{type:"button",class:"plate",onClick:t[1]||(t[1]=function(){return c.BotonHamburguesa.apply(c,arguments)})},[V])])})),K={emits:["emite"],name:"MenuHamburguesa",methods:{BotonHamburguesa:function(){this.$emit("emite")}}};a("fab9");K.render=J,K.__scopeId="data-v-adda5c56";var X=K,Z={name:"NavigationBar",components:{CategoriaSeleccionada:L,SearchFilter:Y,MenuHamburguesa:X,ModalNavegacion:H},data:function(){return{showModalNav:!1,active:!1}},watch:{"$store.state.reactiveScrollAndResize.scroll":{handler:function(){window.pageYOffset>1+this.$store.state.stickyNavBar.NavBarOffSetTop?this.active=!0:this.active=!1}},"$store.state.reactiveScrollAndResize.resizeHeight":{handler:function(){var e=document.getElementById("titulo-principal").offsetHeight;this.$store.commit("stickyNavBar/actualizarNavBarOffSetTop",e);var t=this.$refs.NavBar.offsetHeight;this.$store.commit("stickyNavBar/actualizarNavBarHeight",t)}},"$store.state.reactiveScrollAndResize.resizeWidth":{handler:function(){var e=document.getElementById("titulo-principal").offsetHeight;this.$store.commit("stickyNavBar/actualizarNavBarOffSetTop",e);var t=this.$refs.NavBar.offsetHeight;this.$store.commit("stickyNavBar/actualizarNavBarHeight",t)}}},mounted:function(){var e=this.$refs.NavBar.offsetTop;this.$store.commit("stickyNavBar/actualizarNavBarOffSetTop",e);var t=this.$refs.NavBar.offsetHeight;this.$store.commit("stickyNavBar/actualizarNavBarHeight",t)},methods:{openModalNav:function(){this.showModalNav=!0,document.body.style.overflow="hidden"},closeModalNav:function(){this.showModalNav=!1,document.body.style.overflow="auto"}}};a("2609");Z.render=O,Z.__scopeId="data-v-3ac2131c";var ee=Z,te={key:0,class:"moon"},ae={key:1,class:"sun"};function re(e,t,a,n,o,c){var i=Object(r["o"])("font-awesome-icon");return Object(r["j"])(),Object(r["e"])("button",{id:"buttonDarkMode",class:"buttonDarkMode",type:"button",onClick:t[1]||(t[1]=function(){return c.ToggleTheme.apply(c,arguments)})},[o.darkModeActive?(Object(r["j"])(),Object(r["e"])("div",te,[Object(r["h"])(i,{icon:["fas","moon"]})])):Object(r["f"])("",!0),o.lightModeActive?(Object(r["j"])(),Object(r["e"])("div",ae,[Object(r["h"])(i,{icon:["fas","sun"]})])):Object(r["f"])("",!0)])}var ne={name:"DarkModeButton",data:function(){return{darkModeActive:"",lightModeActive:""}},watch:{"$store.state.reactiveScrollAndResize.scroll":{handler:function(){this.SetButtonPosition()}},"$store.state.reactiveScrollAndResize.resizeHeight":{handler:function(){this.SetButtonPosition()}},"$store.state.reactiveScrollAndResize.resizeWidth":{handler:function(){this.SetButtonPosition()}}},created:function(){var e=document.getElementById("content"),t=new ResizeObserver(this.SetButtonPosition);t.observe(e),this.SetInitialButtonState()},methods:{SetButtonPosition:function(){window.pageYOffset+window.innerHeight<document.getElementById("content").offsetHeight?document.getElementById("buttonDarkMode").style.position="fixed":document.getElementById("buttonDarkMode").style.position="absolute"},SetInitialButtonState:function(){switch(window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark-theme"),this.darkModeActive=!0,this.lightModeActive=!1):(document.documentElement.classList.add("light-theme"),this.darkModeActive=!1,this.lightModeActive=!0),localStorage.getItem("theme")){case"dark-theme":document.documentElement.classList.remove("light-theme"),document.documentElement.classList.add("dark-theme"),this.darkModeActive=!0,this.lightModeActive=!1;break;case"light-theme":document.documentElement.classList.remove("dark-theme"),document.documentElement.classList.add("light-theme"),this.darkModeActive=!1,this.lightModeActive=!0}},ToggleTheme:function(){this.darkModeActive=!this.darkModeActive,this.lightModeActive=!this.lightModeActive,document.documentElement.classList.contains("dark-theme")?(document.documentElement.classList.remove("dark-theme"),document.documentElement.classList.add("light-theme"),localStorage.setItem("theme","light-theme")):(document.documentElement.classList.remove("light-theme"),document.documentElement.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme"))}}};a("7cf2");ne.render=re;var oe=ne,ce={name:"App",components:{CardsMasonry:g,NavigationBar:ee,DarkModeButton:oe},created:function(){var e=this;addEventListener("scroll",(function(){var t=window.scrollY;e.$store.commit("reactiveScrollAndResize/actualizarScroll",t)})),addEventListener("resize",(function(){var t=window.innerHeight,a=window.innerWidth;e.$store.commit("reactiveScrollAndResize/actualizarResize",{height:t,width:a})}))}};a("64be");ce.render=n;var ie=ce,de=a("9483");Object(de["a"])("".concat("/Vue-PWA/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var se=a("ecee"),le=a("c074"),ue=a("ad3d"),he=a("5502"),ve=function(){return{scroll:"",resizeHeight:"",resizeWidth:""}},me={actualizarScroll:function(e,t){e.scroll=t},actualizarResize:function(e,t){var a=t.height,r=t.width;e.resizeHeight=a,e.resizeWidth=r}},be={namespaced:!0,state:ve,mutations:me},fe=(a("b0c0"),function(){return{buscar:"",categoryName:"Todas las recetas",categoryId:""}}),pe={actualizarBuscar:function(e,t){e.buscar=t},actualizarCategory:function(e,t){var a=t.name,r=t.id;e.categoryName=a,e.categoryId=r}},ge={namespaced:!0,state:fe,mutations:pe},je=function(){return{NavBarOffSetTop:"",NavBarHeight:""}},Oe={actualizarNavBarOffSetTop:function(e,t){e.NavBarOffSetTop=t},actualizarNavBarHeight:function(e,t){e.NavBarHeight=t}},ye={namespaced:!0,state:je,mutations:Oe},we=Object(he["a"])({modules:{reactiveScrollAndResize:be,searchAndFilter:ge,stickyNavBar:ye}}),Me=Object(r["d"])(ie);se["c"].add(le["b"]),se["c"].add(le["a"]),se["c"].add(le["c"]),Me.component("font-awesome-icon",ue["a"]),Me.use(we),Me.mount("#app")},5769:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},6130:function(e,t,a){e.exports=a.p+"img/torta_vainilla.7bfee3eb.webp"},"64be":function(e,t,a){"use strict";a("3068")},"7cf2":function(e,t,a){"use strict";a("3c8a")},"7e43":function(e,t,a){e.exports=a.p+"img/panqueques.a8d4446f.webp"},"828d":function(e,t,a){},"98b5":function(e,t,a){"use strict";a("c064")},"9a52":function(e,t,a){},"9d0e":function(e,t,a){e.exports=a.p+"img/queque_marmoleado.aa1ec57e.webp"},"9eb0":function(e,t,a){e.exports=a.p+"img/selva_negra.164ecde9.webp"},c064:function(e,t,a){},d66f:function(e,t,a){"use strict";a("828d")},d923:function(e,t,a){e.exports=a.p+"img/pie_limon.9d53c6c6.webp"},e3e7:function(e,t,a){"use strict";a("f7d5")},e40a:function(e,t,a){e.exports=a.p+"img/muffins.13b2bc16.webp"},f3ed:function(e,t,a){e.exports=a.p+"img/panqueques_avena.7a2f43e1.webp"},f5bc:function(e,t,a){e.exports=a.p+"img/IMG_0282.68ce6dcd.jpg"},f7d5:function(e,t,a){},fab9:function(e,t,a){"use strict";a("0448")}});
//# sourceMappingURL=app.580fec1c.js.map