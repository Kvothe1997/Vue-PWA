(function(e){function t(t){for(var r,o,c=t[0],s=t[1],d=t[2],l=0,h=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},i=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Vue-PWA/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0e0f":function(e,t,a){},"133c":function(e,t,a){},"13aa":function(e,t,a){"use strict";a("3bf0")},"16dc":function(e,t,a){},"21af":function(e,t,a){},"242f":function(e,t,a){},"24c8":function(e,t,a){"use strict";a("16dc")},"2d25":function(e,t,a){var r={"./muffins.webp":"e40a","./pan_molde.webp":"414e","./panqueques.webp":"7e43","./panqueques_avena.webp":"f3ed","./pie_limon.webp":"d923","./pie_maracuya.webp":"5231","./queque_marmoleado.webp":"9d0e","./salchipapas.webp":"d0ec","./selva_negra.webp":"9eb0","./torta_vainilla.webp":"6130"};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id="2d25"},3068:function(e,t,a){},"31a5":function(e,t,a){"use strict";a("d348")},"3bf0":function(e,t,a){},"3c8a":function(e,t,a){},"414e":function(e,t,a){e.exports=a.p+"img/pan_molde.08828487.webp"},5231:function(e,t,a){e.exports=a.p+"img/pie_maracuya.9e18fec4.webp"},"55da":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23");function n(e,t,a,n,i,o){var c=Object(r["C"])("BlurredBackground"),s=Object(r["C"])("router-view");return Object(r["v"])(),Object(r["h"])(r["b"],null,[Object(r["l"])(c),Object(r["l"])(s,null,{default:Object(r["J"])((function(e){var t=e.Component,a=e.route;return[Object(r["l"])(r["d"],{name:a.meta.transition},{default:Object(r["J"])((function(){return[(Object(r["v"])(),Object(r["h"])(r["c"],{include:"Home"},[(Object(r["v"])(),Object(r["h"])(Object(r["D"])(t)))],1024))]})),_:2},1032,["name"])]})),_:1})],64)}function i(e,t,a,n,i,o){return e.$store.state.blurredBackground.showBlurredBackground?(Object(r["v"])(),Object(r["h"])("div",{key:0,onClick:t[1]||(t[1]=Object(r["M"])((function(){return o.closeBlurredBackground.apply(o,arguments)}),["self"])),class:"modal-mask"})):Object(r["i"])("",!0)}var o={name:"BlurredBackground",methods:{closeBlurredBackground:function(){""===this.$store.state.homeRouteNavigation.homeRoutePath?this.$router.push({name:"Home"}):"/menu/medidas_y_equivalencias"==this.$router.currentRoute._rawValue.fullPath?this.$router.go(-2):this.$router.go(-1)}}};a("31a5");o.render=i;var c=o,s={name:"App",components:{BlurredBackground:c},created:function(){var e=this;addEventListener("scroll",(function(){var t=window.scrollY;e.$store.commit("reactiveScrollAndResize/actualizarScroll",t)}),{passive:!0}),addEventListener("resize",(function(){var t=window.innerHeight,a=window.innerWidth;e.$store.commit("reactiveScrollAndResize/actualizarResize",{height:t,width:a})}),{passive:!0}),addEventListener("online",(function(){var t=!0;e.$store.commit("reactiveOnlineStatus/actualizarOnlineStatus",t)})),addEventListener("offli ne",(function(){var t=!1;e.$store.commit("reactiveOnlineStatus/actualizarOnlineStatus",t)}))}};a("64be");s.render=n;var d=s,u=a("9483");Object(u["a"])("".concat("/Vue-PWA/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var l=a("ecee"),h=a("c074"),m=a("ad3d"),f=a("164c"),b=a("5502"),v=function(){return{scroll:"",resizeHeight:"",resizeWidth:""}},g={actualizarScroll:function(e,t){e.scroll=t},actualizarResize:function(e,t){var a=t.height,r=t.width;e.resizeHeight=a,e.resizeWidth=r}},p={namespaced:!0,state:v,mutations:g},O=(a("b0c0"),function(){return{buscar:"",Categories:[{indexNumber:0,title:"Todas las recetas",id:""},{indexNumber:1,title:"Postres",id:"Postres"},{indexNumber:2,title:"Pan",id:"Pan"},{indexNumber:3,title:"Comida rápida",id:"Comida-rapida"}],categoryName:"Todas las recetas",categoryId:"",categoryIndexNumber:0}}),j={actualizarBuscar:function(e,t){e.buscar=t},actualizarCategory:function(e,t){var a=t.name,r=t.id,n=t.indexNumber;e.categoryName=a,e.categoryId=r,e.categoryIndexNumber=n}},w={namespaced:!0,state:O,mutations:j},y=function(){return{NavBarOffSetTop:"",NavBarHeight:""}},k={actualizarNavBarOffSetTop:function(e,t){e.NavBarOffSetTop=t},actualizarNavBarHeight:function(e,t){e.NavBarHeight=t}},B={namespaced:!0,state:y,mutations:k},N=function(){return{onlineStatus:""}},x={actualizarOnlineStatus:function(e,t){e.onlineStatus=t}},C={namespaced:!0,state:N,mutations:x},S=function(){return{showBlurredBackground:!1}},P={actualizarShowBlurredBackground:function(e,t){e.showBlurredBackground=t}},A={namespaced:!0,state:S,mutations:P},R=function(){return{homeRoutePath:""}},M={actualizarHomeRoutePath:function(e,t){e.homeRoutePath=t}},$={namespaced:!0,state:R,mutations:M},z=function(){return{Recetas:[{indexNumber:0,title:"Panqueques",imageUrl:"panqueques.webp",imageWidth:"634",imageHeight:"630",imageAlt:"Panqueques caseros sobre un plato blanco.",recetaUrl:"".concat("/Vue-PWA/","recetas/Panqueques.html"),categoria:"Postres"},{indexNumber:1,title:"Muffins",imageUrl:"muffins.webp",imageWidth:"640",imageHeight:"1137",imageAlt:"6 Muffins caseros de maní y arándanos en una bandeja negra.",recetaUrl:"".concat("/Vue-PWA/","recetas/Muffins.html"),categoria:"Postres"},{indexNumber:2,title:"Pan de molde",imageUrl:"pan_molde.webp",imageWidth:"1125",imageHeight:"929",imageAlt:"Pan de molde casero sobre bandeja de metal. A su costado hay un cuchillo con mango blanco.",recetaUrl:"".concat("/Vue-PWA/","recetas/Pan_molde.html"),categoria:"Pan"},{indexNumber:3,title:"Panqueques de avena",imageUrl:"panqueques_avena.webp",imageWidth:"720",imageHeight:"546",imageAlt:"Pila de panqueques de avena sobre plato blanco. Fondo de mesa de cocina difuminado.",recetaUrl:"".concat("/Vue-PWA/","recetas/Panqueques_avena.html"),categoria:"Postres"},{indexNumber:4,title:"Pie de maracuyá",imageUrl:"pie_maracuya.webp",imageWidth:"480",imageHeight:"852",imageAlt:"Pie de maracuyá casero.",recetaUrl:"".concat("/Vue-PWA/","recetas/Pie_maracuya.html"),categoria:"Postres"},{indexNumber:5,title:"Queque marmoleado",imageUrl:"queque_marmoleado.webp",imageWidth:"1125",imageHeight:"1317",imageAlt:"Queque marmoleado circular con cuchillo y espátula de mango blanco. Todo sobre superficie blanca.",recetaUrl:"".concat("/Vue-PWA/","recetas/Queque_marmoleado.html"),categoria:"Postres"},{indexNumber:6,title:"Torta selva negra",imageUrl:"selva_negra.webp",imageWidth:"720",imageHeight:"1280",imageAlt:"Pedazo de torta selva negra sobre plato blanco. Torta selva negra detrás desenfocada. La torta está cubierta de manjar blanco.",recetaUrl:"".concat("/Vue-PWA/","recetas/Torta_selva_negra.html"),categoria:"Postres"},{indexNumber:7,title:"Torta de vainilla",imageUrl:"torta_vainilla.webp",imageWidth:"1125",imageHeight:"1305",imageAlt:"Torta de vainilla dorada y con una rajadura en la parte superior sobre una bandeja de metal. En fondo desenfocado hay una refrigeradora y un mueble blanco. En la parte superior izquierda está escrito Torta de vainilla en color mostaza y a su costado, en la parte superior derecha de la imagen, hay un sticker de un pedazo de torta con las palabras Yay, Cake.",recetaUrl:"".concat("/Vue-PWA/","recetas/Torta_vainilla.html"),categoria:"Postres"},{indexNumber:8,title:"Pie de limón",imageUrl:"pie_limon.webp",imageWidth:"1125",imageHeight:"1344",imageAlt:"Pie de limón sobre bandeja de metal. Fondo borroso de ollas en una cocina. El pie tiene un merengue blanco y la tartaleta es de color mostaza. La imagen tiene un título en color verde que dice Pie de limón. Además, tiene un sticker de un pie humeante y otro sticker con la palabra en inglés 'Cutie pie'",recetaUrl:"".concat("/Vue-PWA/","recetas/Pie_limon.html"),categoria:"Postres"},{indexNumber:9,title:"Salchipapas",imageUrl:"salchipapas.webp",imageWidth:"1125",imageHeight:"2001",imageAlt:"3 platos cubiertos de papel absorvente blanco. En cada plato hay salchipapas (papas fritas y salchichas). Los platos están sobre hornillas de una cocina. En la parte superior de la imágen, hay un texto en blanco con fondo rojo que dice 'SALCHIPAPAS' y otro texto en blanco con fondo amarilo que dice '#CHEATMEAL'",recetaUrl:"".concat("/Vue-PWA/","recetas/Salchipapas.html"),categoria:"Comida-rapida"}]}},W={namespaced:!0,state:z},H=Object(b["a"])({modules:{reactiveScrollAndResize:p,searchAndFilter:w,stickyNavBar:B,reactiveOnlineStatus:C,blurredBackground:A,homeRouteNavigation:$,recetas:W}}),_=a("6c02"),T=Object(r["N"])("data-v-3e5bc334");Object(r["y"])("data-v-3e5bc334");var L={class:"modalGrid"};Object(r["w"])();var q=T((function(e,t,n,i,o,c){var s=Object(r["C"])("focus-trap");return Object(r["v"])(),Object(r["h"])(s,{active:!0,"escape-deactivates":!1},{default:T((function(){return[Object(r["l"])("div",{onKeyup:t[4]||(t[4]=Object(r["L"])((function(){return c.closeModal.apply(c,arguments)}),["esc"])),class:"modal-container",tabindex:"-1"},[Object(r["l"])("span",{ref:"cerrar",onTouchstartPassive:t[1]||(t[1]=function(){}),onClick:t[2]||(t[2]=function(){return c.closeModal.apply(c,arguments)}),onKeyup:t[3]||(t[3]=Object(r["L"])((function(){return c.closeModal.apply(c,arguments)}),["enter"])),class:"cerrar",tabindex:"0"},"×",544),Object(r["l"])("h2",null,Object(r["F"])(e.$store.state.recetas.Recetas[n.indexNumber].title),1),Object(r["l"])("div",L,[Object(r["l"])("img",{width:e.$store.state.recetas.Recetas[n.indexNumber].imageWidth,height:e.$store.state.recetas.Recetas[n.indexNumber].imageHeight,src:a("2d25")("./".concat(e.$store.state.recetas.Recetas[n.indexNumber].imageUrl)),alt:e.$store.state.recetas.Recetas[n.indexNumber].imageAlt},null,8,["width","height","src","alt"]),o.recetaIngredientes?(Object(r["v"])(),Object(r["h"])("div",{key:0,class:"ingredientes",innerHTML:o.recetaIngredientes},null,8,["innerHTML"])):Object(r["i"])("",!0),o.recetaContenido?(Object(r["v"])(),Object(r["h"])("div",{key:1,class:"modalContent",innerHTML:o.recetaContenido},null,8,["innerHTML"])):Object(r["i"])("",!0)])],32)]})),_:1})})),I=(a("99af"),a("d3b7"),a("3835")),F=(a("96cf"),a("1da1")),U={name:"CardModal",props:["indexNumber"],data:function(){return{recetaIngredientes:null,recetaContenido:null}},created:function(){var e=this;this.$watch("this.$route.params",(function(){e.openModal()}),{immediate:!0})},mounted:function(){document.body.style.overflow="hidden",this.$store.commit("blurredBackground/actualizarShowBlurredBackground",!0)},unmounted:function(){this.$store.commit("blurredBackground/actualizarShowBlurredBackground",!1),document.body.style.overflow="auto"},methods:{closeModal:function(){""==this.$store.state.homeRouteNavigation.homeRoutePath?this.$router.push({name:"Home"}):this.$router.go(-1)},openModal:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){var a,r,n,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.$store.state.recetas.Recetas[e.indexNumber].recetaUrl);case 3:if(a=t.sent,r=new DOMParser,a.ok){t.next=7;break}throw{status:a.status,statusText:a.statusText};case 7:return t.next=9,a.text().then(function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.parseFromString(t,"text/html");case 2:return a=e.sent,e.next=5,a.getElementById("ingredientes").innerHTML;case 5:return e.t0=e.sent,e.next=8,a.querySelector(".modalContent").innerHTML;case 8:return e.t1=e.sent,e.abrupt("return",[e.t0,e.t1]);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 9:n=t.sent,i=Object(I["a"])(n,2),e.recetaIngredientes=i[0],e.recetaContenido=i[1],t.next=20;break;case 15:t.prev=15,t.t0=t["catch"](0),console.log(t.t0),o=t.t0.statusText||"Ha ocurrido un error",console.log("Error ".concat(t.t0.status," : ").concat(o));case 20:case"end":return t.stop()}}),t,null,[[0,15]])})))()}}};a("ea4e");U.render=q,U.__scopeId="data-v-3e5bc334";var E=U,V={class:"wrapperForTransition"},D={id:"content",class:"content"};function K(e,t,a,n,i,o){var c=Object(r["C"])("Title"),s=Object(r["C"])("NavigationBar"),d=Object(r["C"])("CardsMasonry"),u=Object(r["C"])("DarkModeButton"),l=Object(r["C"])("Footer");return Object(r["v"])(),Object(r["h"])("div",V,[Object(r["l"])("div",D,[Object(r["l"])(c),Object(r["l"])(s),Object(r["l"])(d),Object(r["l"])(u)]),Object(r["l"])(l)])}var Y={ref:"TitleBox"},J=Object(r["l"])("h1",{id:"titulo-principal",class:"tituloPrincipal"},[Object(r["k"])(" Las"),Object(r["l"])("wbr"),Object(r["k"])(" recetas de "),Object(r["l"])("wbr"),Object(r["k"])("Lita ")],-1);function Q(e,t,a,n,i,o){return Object(r["v"])(),Object(r["h"])("header",Y,[J],512)}var G={name:"Title",data:function(){return{stopHeightWatcher:"",stopWidthWatcher:""}},activated:function(){var e=this;this.SetNavBarOffsetTop(),this.stopHeightWatcher=this.$watch((function(){return e.$store.state.reactiveScrollAndResize.resizeHeight}),(function(){e.SetNavBarOffsetTop()})),this.stopWidthWatcher=this.$watch((function(){return e.$store.state.reactiveScrollAndResize.resizeWidth}),(function(){e.SetNavBarOffsetTop()}))},deactivated:function(){this.stopHeightWatcher(),this.stopWidthWatcher()},methods:{SetNavBarOffsetTop:function(){var e=this.$refs.TitleBox.offsetHeight;this.$store.commit("stickyNavBar/actualizarNavBarOffSetTop",e)}}};a("24c8");G.render=Q;var X=G,Z=Object(r["N"])("data-v-7fc1fc2d"),ee=Z((function(e,t,a,n,i,o){var c=Object(r["C"])("NavigationBarCategoriaSeleccionada"),s=Object(r["C"])("NavigationBarSearchFilter"),d=Object(r["C"])("NavigationBarMenuHamburguesa");return Object(r["v"])(),Object(r["h"])("nav",null,[Object(r["l"])("ul",{class:["NavBar",{sticky:i.active}],ref:"NavBar"},[Object(r["l"])(c),Object(r["l"])(s),Object(r["l"])(d)],2)])})),te=Object(r["N"])("data-v-5db1ab03");Object(r["y"])("data-v-5db1ab03");var ae={class:"categoriaSeleccionada"};Object(r["w"])();var re=te((function(e,t,a,n,i,o){return Object(r["v"])(),Object(r["h"])("li",ae,Object(r["F"])(o.categoria),1)})),ne={name:"NavigationBarCategoriaSeleccionada",computed:{categoria:function(){return this.$store.state.searchAndFilter.categoryName}},activated:function(){if("HomeWithCategory"==this.$router.currentRoute._rawValue.name){var e=this.$router.currentRoute._rawValue.params.indexNumber,t=this.$store.state.searchAndFilter.Categories[e].title,a=this.$store.state.searchAndFilter.Categories[e].id;this.$store.commit("searchAndFilter/actualizarCategory",{name:t,id:a,indexNumber:e})}else{var r=0,n=this.$store.state.searchAndFilter.Categories[r].title,i=this.$store.state.searchAndFilter.Categories[r].id;this.$store.commit("searchAndFilter/actualizarCategory",{name:n,id:i,indexNumber:r})}}};a("9996");ne.render=re,ne.__scopeId="data-v-5db1ab03";var ie=ne,oe={class:"searchLi"},ce={class:"searchButton"};function se(e,t,a,n,i,o){var c=Object(r["C"])("font-awesome-icon");return Object(r["v"])(),Object(r["h"])("li",oe,[Object(r["K"])(Object(r["l"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.buscar=e}),type:"text",class:"searchTerm",placeholder:"Buscar receta...","aria-label":"Buscar receta"},null,512),[[r["H"],o.buscar]]),Object(r["l"])("div",ce,[Object(r["l"])(c,{icon:["fas","search"]})])])}var de={name:"NavigationBarSearchFilter",computed:{buscar:{get:function(){return this.$store.state.searchAndFilter.buscar},set:function(e){this.$store.commit("searchAndFilter/actualizarBuscar",e)}}}};a("9651");de.render=se;var ue=de,le=Object(r["N"])("data-v-6603b5dd");Object(r["y"])("data-v-6603b5dd");var he={class:"MenuHamburguesa"};Object(r["w"])();var me=le((function(e,t,a,n,i,o){var c=Object(r["C"])("font-awesome-icon");return Object(r["v"])(),Object(r["h"])("li",he,[Object(r["l"])("button",{onClick:t[1]||(t[1]=function(){return o.openModalNav.apply(o,arguments)}),type:"button",class:"botonHamburguesa","aria-label":"Botón para abrir el menú de navegación"},[Object(r["l"])(c,{icon:["fas","bars"]})])])})),fe={name:"NavigationBarMenuHamburguesa",methods:{openModalNav:function(){this.$router.push({name:"NavigationBarModal"})}}};a("9695");fe.render=me,fe.__scopeId="data-v-6603b5dd";var be=fe,ve={name:"NavigationBar",components:{NavigationBarCategoriaSeleccionada:ie,NavigationBarSearchFilter:ue,NavigationBarMenuHamburguesa:be},data:function(){return{active:!1,stopScrollWatcher:"",stopHeightWatcher:"",stopWidthWatcher:""}},activated:function(){var e=this;this.SetNavBarHeight(),this.CheckScrollPosition(),this.stopScrollWatcher=this.$watch((function(){return e.$store.state.reactiveScrollAndResize.scroll}),(function(){e.CheckScrollPosition()})),this.stopHeightWatcher=this.$watch((function(){return e.$store.state.reactiveScrollAndResize.resizeHeight}),(function(){e.SetNavBarHeight(),e.CheckScrollPosition()})),this.stopWidthWatcher=this.$watch((function(){return e.$store.state.reactiveScrollAndResize.resizeWidth}),(function(){e.SetNavBarHeight(),e.CheckScrollPosition()}))},deactivated:function(){this.stopScrollWatcher(),this.stopHeightWatcher(),this.stopWidthWatcher()},methods:{SetNavBarHeight:function(){var e=this.$refs.NavBar.offsetHeight;this.$store.commit("stickyNavBar/actualizarNavBarHeight",e)},CheckScrollPosition:function(){window.pageYOffset>1+this.$store.state.stickyNavBar.NavBarOffSetTop?this.active=!0:this.active=!1}}};a("13aa");ve.render=ee,ve.__scopeId="data-v-7fc1fc2d";var ge=ve,pe=Object(r["N"])("data-v-027eccd2");Object(r["y"])("data-v-027eccd2");var Oe={class:"cards-container",ref:"cardsContainer"};Object(r["w"])();var je=pe((function(e,t,a,n,i,o){var c=Object(r["C"])("Card");return Object(r["v"])(),Object(r["h"])("div",Oe,[(Object(r["v"])(!0),Object(r["h"])(r["b"],null,Object(r["B"])(i.RecetasRendered,(function(e){return Object(r["v"])(),Object(r["h"])(c,{key:e.title,title:e.title,"receta-index-number":e.indexNumber,"image-url":e.imageUrl,"image-width":e.imageWidth,"image-height":e.imageHeight,"image-alt":e.imageAlt,"receta-url":e.recetaUrl},null,8,["title","receta-index-number","image-url","image-width","image-height","image-alt","receta-url"])})),128))],512)})),we=(a("4de4"),a("caad"),a("fb6a"),a("ac1f"),a("2532"),a("3ca3"),a("466d"),a("ddb0"),a("53ca")),ye=a("b85c"),ke=Object(r["N"])("data-v-077cf4ad");Object(r["y"])("data-v-077cf4ad");var Be={class:"protection"},Ne={class:"figureContainer"},xe={key:0,class:"offlineText"},Ce=Object(r["l"])("strong",null,"OFFLINE",-1),Se=Object(r["l"])("br",null,null,-1),Pe=Object(r["k"])(" Intente con otra"),Ae=Object(r["l"])("br",null,null,-1),Re=Object(r["k"])(" receta ");Object(r["w"])();var Me=ke((function(e,t,n,i,o,c){return Object(r["v"])(),Object(r["h"])("div",Be,[Object(r["l"])("article",{class:[{noClick:o.offline},"card"],ref:"card",onTouchstartPassive:t[1]||(t[1]=function(){}),onClick:t[2]||(t[2]=function(){return c.openCardModal.apply(c,arguments)}),onKeyup:t[3]||(t[3]=Object(r["L"])((function(){return c.openCardModal.apply(c,arguments)}),["enter"])),tabindex:"0"},[Object(r["l"])("h1",null,Object(r["F"])(n.title),1),Object(r["l"])("figure",Ne,[Object(r["l"])("img",{width:n.imageWidth,height:n.imageHeight,src:a("2d25")("./".concat(n.imageUrl)),alt:n.imageAlt,class:["image",{imageBlur:o.offline}]},null,10,["width","height","src","alt"]),o.offline?(Object(r["v"])(),Object(r["h"])("p",xe,[Ce,Se,Pe,Ae,Re])):Object(r["i"])("",!0)])],34)])})),$e=(a("a9e3"),a("5319"),{name:"Card",props:{title:{type:String,required:!0},recetaIndexNumber:{type:Number,required:!0},imageUrl:{type:String,required:!0},imageWidth:{type:String,required:!0},imageHeight:{type:String,required:!0},imageAlt:{type:String,required:!0},recetaUrl:{type:String,required:!0}},data:function(){return{offline:!1}},watch:{"$store.state.reactiveOnlineStatus.onlineStatus":{handler:function(e){this.checkCardOnlineStatus(e)}}},mounted:function(){this.checkCardOnlineStatus(navigator.onLine)},methods:{checkCardOnlineStatus:function(e){var t=this;if(!0===e)this.offline=!1,this.$refs.card.tabindex=0;else{var a=new Request(this.recetaUrl).url;caches.match(a).then((function(e){return!!e})).then((function(e){e||(t.offline=!0,t.$refs.card.tabindex=-1)}))}},openCardModal:function(){var e=this.title.replace(/\s/g,"_"),t=this.recetaIndexNumber;this.$router.push({name:"CardModal",params:{receta:e,indexNumber:t}})}}});a("7624");$e.render=Me,$e.__scopeId="data-v-077cf4ad";var ze=$e,We={name:"CardsMasonry",components:{Card:ze},data:function(){return{RecetasRendered:[]}},computed:{RecetasFiltradasPorBuscar:function(){var e=this;return this.$store.state.recetas.Recetas.filter((function(t){return t.title.toLowerCase().includes(e.$store.state.searchAndFilter.buscar.toLowerCase())}))},RecetasFiltradasPorCategoria:function(){var e=this;return this.RecetasFiltradasPorBuscar.filter((function(t){return t.categoria.toLowerCase().includes(e.$store.state.searchAndFilter.categoryId.toLowerCase())}))}},watch:{RecetasFiltradasPorCategoria:{handler:function(){var e=this;this.RecetasRendered=this.RecetasFiltradasPorCategoria.slice(0,40),""!=this.$store.state.homeRouteNavigation.homeRoutePath&&this.$nextTick((function(){document.body.scrollHeight-e.$store.state.stickyNavBar.NavBarOffSetTop>=window.innerHeight?window.scrollTo(0,e.$store.state.stickyNavBar.NavBarOffSetTop):window.scrollTo(0,0)}))},immediate:!0},"$store.state.reactiveScrollAndResize.scroll":{handler:function(){this.scrollInfinito(),this.stickyActivateAddPadding()}}},methods:{scrollInfinito:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){var a,r,n,i,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.$refs.cardsContainer.getBoundingClientRect().bottom<window.innerHeight)){t.next=8;break}if(a=e.RecetasFiltradasPorCategoria.length,r=e.RecetasRendered.length,n=a-r,0===n){t.next=8;break}return i=r,o=r+40,c=e.RecetasFiltradasPorCategoria.slice(i,o),t.next=6,e.filterRecetasWithCachedImage(c);case 6:c=t.sent,e.RecetasRendered=e.RecetasRendered.concat(c);case 8:case"end":return t.stop()}}),t)})))()},filterRecetasWithCachedImage:function(e){return Object(F["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==navigator.onLine){t.next=7;break}return t.delegateYield(regeneratorRuntime.mark((function t(){var r,n,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=new Array,n=Object(ye["a"])(e),t.prev=2,o=regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=i.value,n=new Request(a("2d25")("./".concat(t.imageUrl))).url,e.next=4,caches.match(n).then((function(e){return!!e})).then((function(e){e&&r.push(t)}));case 4:case"end":return e.stop()}}),e)})),n.s();case 5:if((i=n.n()).done){t.next=9;break}return t.delegateYield(o(),"t0",7);case 7:t.next=5;break;case 9:t.next=14;break;case 11:t.prev=11,t.t1=t["catch"](2),n.e(t.t1);case 14:return t.prev=14,n.f(),t.finish(14);case 17:return t.abrupt("return",{v:r});case 18:case"end":return t.stop()}}),t,null,[[2,11,14,17]])}))(),"t0",2);case 2:if(r=t.t0,"object"!==Object(we["a"])(r)){t.next=5;break}return t.abrupt("return",r.v);case 5:t.next=8;break;case 7:return t.abrupt("return",e);case 8:case"end":return t.stop()}}),t)})))()},stickyActivateAddPadding:function(){window.pageYOffset>1+this.$store.state.stickyNavBar.NavBarOffSetTop?this.$refs.cardsContainer.style.paddingTop="".concat(this.$store.state.stickyNavBar.NavBarHeight,"px"):this.$refs.cardsContainer.style.paddingTop="0px"}}};a("8145");We.render=je,We.__scopeId="data-v-027eccd2";var He=We,_e={key:0,class:"moon","aria-label":"Modo oscuro activado"},Te={key:1,class:"sun","aria-label":"Modo claro activado"};function Le(e,t,a,n,i,o){var c=Object(r["C"])("font-awesome-icon");return Object(r["v"])(),Object(r["h"])("button",{onClick:t[1]||(t[1]=function(){return o.ToggleTheme.apply(o,arguments)}),id:"buttonDarkMode",class:"buttonDarkMode",type:"button","aria-label":"Botón para alternar entre modo oscuro y claro"},[i.darkModeActive?(Object(r["v"])(),Object(r["h"])("div",_e,[Object(r["l"])(c,{icon:["fas","moon"]})])):Object(r["i"])("",!0),i.lightModeActive?(Object(r["v"])(),Object(r["h"])("div",Te,[Object(r["l"])(c,{icon:["fas","sun"]})])):Object(r["i"])("",!0)])}var qe={name:"DarkModeButton",data:function(){return{darkModeActive:"",lightModeActive:"",content:"",resizeObserver:"",stopScrollWatcher:"",stopHeightWatcher:"",stopWidthWatcher:""}},activated:function(){var e=this;this.stopScrollWatcher=this.$watch((function(){return e.$store.state.reactiveScrollAndResize.scroll}),(function(){e.SetButtonPosition()})),this.stopHeightWatcher=this.$watch((function(){return e.$store.state.reactiveScrollAndResize.resizeHeight}),(function(){e.SetButtonPosition()})),this.stopWidthWatcher=this.$watch((function(){return e.$store.state.reactiveScrollAndResize.resizeWidth}),(function(){e.SetButtonPosition()})),this.content=document.getElementById("content"),this.resizeObserver=new ResizeObserver(this.SetButtonPosition),this.resizeObserver.observe(this.content),this.SetInitialButtonState()},deactivated:function(){this.stopScrollWatcher(),this.stopHeightWatcher(),this.stopWidthWatcher(),this.resizeObserver.unobserve(this.content)},methods:{SetButtonPosition:function(){window.pageYOffset+window.innerHeight<document.getElementById("content").offsetHeight?document.getElementById("buttonDarkMode").style.position="fixed":document.getElementById("buttonDarkMode").style.position="absolute"},SetInitialButtonState:function(){switch(window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark-theme"),this.darkModeActive=!0,this.lightModeActive=!1):(document.documentElement.classList.add("light-theme"),this.darkModeActive=!1,this.lightModeActive=!0),localStorage.getItem("theme")){case"dark-theme":document.documentElement.classList.remove("light-theme"),document.documentElement.classList.add("dark-theme"),this.darkModeActive=!0,this.lightModeActive=!1;break;case"light-theme":document.documentElement.classList.remove("dark-theme"),document.documentElement.classList.add("light-theme"),this.darkModeActive=!1,this.lightModeActive=!0}},ToggleTheme:function(){this.darkModeActive=!this.darkModeActive,this.lightModeActive=!this.lightModeActive,document.documentElement.classList.contains("dark-theme")?(document.documentElement.classList.remove("dark-theme"),document.documentElement.classList.add("light-theme"),localStorage.setItem("theme","light-theme")):(document.documentElement.classList.remove("light-theme"),document.documentElement.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme"))}}};a("7cf2");qe.render=Le;var Ie=qe,Fe={class:"mainFooter"},Ue=Object(r["l"])("aside",{class:"developerSideNote"},[Object(r["l"])("h2",null,"Nota del desarrollador"),Object(r["l"])("p",null," Esta PWA es mi primera página web utilizando Vue.js. ")],-1),Ee={class:"mediaIcons"},Ve={class:"facebook",href:"https://www.facebook.com/Luis.Barrreto",target:"_blank",rel:"noopener noreferrer"},De={href:"https://www.linkedin.com/in/luis-enrique-barreto-periche-2102223b/",target:"_blank",rel:"noopener noreferrer"},Ke={href:"https://api.whatsapp.com/send?phone=51964561893&text=!Hola,%20Luis%20Barreto!%20%C2%BFQu%C3%A9%20tal?",target:"_blank",rel:"noopener noreferrer"},Ye={href:"https://github.com/Kvothe1997",target:"_blank",rel:"noopener noreferrer"},Je={href:"https://www.instagram.com/barreto0608/?hl=es-la",target:"_blank",rel:"noopener noreferrer"},Qe=Object(r["l"])("p",null," ©2020 Luis Enrique Barreto Periche ",-1);function Ge(e,t,a,n,i,o){return Object(r["v"])(),Object(r["h"])("footer",Fe,[Object(r["l"])("div",null,[Ue,Object(r["l"])("div",Ee,[Object(r["l"])("a",Ve,[Object(r["l"])("img",{width:"100",height:"100",src:"".concat(i.baseURL,"img/mediaIcons/facebook.svg"),alt:"Agrégame en Facebook."},null,8,["src"])]),Object(r["l"])("a",De,[Object(r["l"])("img",{width:"100",height:"100",src:"".concat(i.baseURL,"img/mediaIcons/linkedin.svg"),alt:"Agrégame en LinkedIN"},null,8,["src"])]),Object(r["l"])("a",Ke,[Object(r["l"])("img",{width:"100",height:"100",src:"".concat(i.baseURL,"img/mediaIcons/whatsapp.svg"),alt:"Contáctame en whatsapp"},null,8,["src"])]),Object(r["l"])("a",Ye,[Object(r["l"])("img",{width:"100",height:"100",src:"".concat(i.baseURL,"img/mediaIcons/github.svg"),alt:"Sígueme en GitHub"},null,8,["src"])]),Object(r["l"])("a",Je,[Object(r["l"])("img",{width:"100",height:"100",src:"".concat(i.baseURL,"img/mediaIcons/instagram.svg"),alt:"Sígueme en Instagram"},null,8,["src"])])])]),Qe])}var Xe={name:"Footer",data:function(){return{baseURL:"/Vue-PWA/"}}};a("74d7");Xe.render=Ge;var Ze=Xe,et={name:"Home",components:{CardsMasonry:He,DarkModeButton:Ie,Footer:Ze,NavigationBar:ge,Title:X},beforeRouteLeave:function(e,t){this.$store.commit("homeRouteNavigation/actualizarHomeRoutePath",t.fullPath)}};a("dfd4");et.render=K;var tt=et,at=Object(r["N"])("data-v-4cb807b4");Object(r["y"])("data-v-4cb807b4");var rt={class:"modal-content-container"},nt={class:"modal-cabecera"},it=Object(r["l"])("h2",null,"Las recetas de Lita",-1),ot={class:"modal-contenido"},ct=Object(r["l"])("span",null,"Categorías:",-1);Object(r["w"])();var st=at((function(e,t,a,n,i,o){var c=this,s=Object(r["C"])("router-view"),d=Object(r["C"])("focus-trap");return Object(r["v"])(),Object(r["h"])(d,{active:!0,"escape-deactivates":!1},{default:at((function(){return[Object(r["l"])("div",{onKeyup:t[10]||(t[10]=Object(r["L"])((function(){return o.closeModal.apply(o,arguments)}),["esc"])),class:"modal-container",tabindex:"-1"},[Object(r["l"])("span",{onTouchstartPassive:t[1]||(t[1]=function(){}),onClick:t[2]||(t[2]=function(){return o.closeModal.apply(o,arguments)}),onKeyup:t[3]||(t[3]=Object(r["L"])((function(){return o.closeModal.apply(o,arguments)}),["enter"])),class:"cerrar",tabindex:"0"},"×",32),Object(r["l"])("div",rt,[Object(r["l"])("div",nt,[it,Object(r["l"])("img",{src:"".concat(i.baseURL,"img/icons/favicon.svg"),alt:"Símbolo del sitio.\r\n          Una jarra celeste, dos huevos y un tazón con un batidor."},null,8,["src"])]),Object(r["l"])("ul",ot,[Object(r["l"])("li",{onTouchstartPassive:t[4]||(t[4]=function(){}),onClick:t[5]||(t[5]=function(){return o.openMedidasyEquivalenciasModal.apply(o,arguments)}),onKeyup:t[6]||(t[6]=Object(r["L"])((function(){return o.openMedidasyEquivalenciasModal.apply(o,arguments)}),["enter"])),tabindex:"0"}," Medidas y equivalencias ",32),Object(r["l"])(s),Object(r["l"])("li",null,[ct,Object(r["l"])("ul",null,[(Object(r["v"])(!0),Object(r["h"])(r["b"],null,Object(r["B"])(c.$store.state.searchAndFilter.Categories,(function(e,a){return Object(r["v"])(),Object(r["h"])("li",{onTouchstartPassive:t[7]||(t[7]=function(){}),onClick:t[8]||(t[8]=function(){return o.seleccionarCategoria.apply(o,arguments)}),onKeyup:t[9]||(t[9]=Object(r["L"])((function(){return o.seleccionarCategoria.apply(o,arguments)}),["enter"])),key:a,"data-id":e.id,"data-index-number":e.indexNumber,tabindex:"0"},Object(r["F"])(e.title),41,["data-id","data-index-number"])})),128))])])])])],32)]})),_:1})})),dt={name:"NavigationBarModal",data:function(){return{baseURL:"/Vue-PWA/"}},mounted:function(){document.body.style.overflow="hidden",this.$store.commit("blurredBackground/actualizarShowBlurredBackground",!0)},unmounted:function(){document.body.style.overflow="auto",this.$store.commit("blurredBackground/actualizarShowBlurredBackground",!1)},methods:{openMedidasyEquivalenciasModal:function(){this.$router.push("".concat("/Vue-PWA/","menu/medidas_y_equivalencias"))},seleccionarCategoria:function(){var e=event.currentTarget.textContent,t=event.currentTarget.getAttribute("data-index-number");if("Todas las recetas"==e)this.$router.push({name:"Home"});else{var a=e.replace(/\s/g,"_");this.$router.push({name:"HomeWithCategory",params:{categoria:a,indexNumber:t}})}},closeModal:function(){""===this.$store.state.homeRouteNavigation.homeRoutePath?this.$router.push({name:"Home"}):this.$router.go(-1)}}};a("9e68");dt.render=st,dt.__scopeId="data-v-4cb807b4";var ut=dt,lt=Object(r["N"])("data-v-75f723e0");Object(r["y"])("data-v-75f723e0");var ht=Object(r["j"])('<h2 data-v-75f723e0>Medidas y equivalencias</h2><div class="modalTables" data-v-75f723e0><table data-v-75f723e0><thead data-v-75f723e0><tr data-v-75f723e0><th data-v-75f723e0>Harina o azúcar impalpable</th></tr></thead><tbody data-v-75f723e0><tr data-v-75f723e0><td data-v-75f723e0>1 taza = 110 g</td></tr><tr data-v-75f723e0><td data-v-75f723e0>½ taza = 55 g</td></tr><tr data-v-75f723e0><td data-v-75f723e0>⅓ taza = 40 g</td></tr><tr data-v-75f723e0><td data-v-75f723e0>¼ taza = 30 g</td></tr></tbody></table><table data-v-75f723e0><thead data-v-75f723e0><tr data-v-75f723e0><th data-v-75f723e0>Azúcar o mantequilla</th></tr></thead><tbody data-v-75f723e0><tr data-v-75f723e0><td data-v-75f723e0>1 taza = 225 g</td></tr><tr data-v-75f723e0><td data-v-75f723e0>½ taza = 115 g</td></tr><tr data-v-75f723e0><td data-v-75f723e0>⅓ taza = 75 g</td></tr><tr data-v-75f723e0><td data-v-75f723e0>¼ taza = 55 g</td></tr></tbody></table><table data-v-75f723e0><thead data-v-75f723e0><tr data-v-75f723e0><th data-v-75f723e0>Azúcar moreno</th></tr></thead><tbody data-v-75f723e0><tr data-v-75f723e0><td data-v-75f723e0>1 taza = 200 g</td></tr><tr data-v-75f723e0><td data-v-75f723e0>½ taza = 100 g</td></tr><tr data-v-75f723e0><td data-v-75f723e0>⅓ taza = 65 g</td></tr><tr data-v-75f723e0><td data-v-75f723e0>¼ taza = 50 g</td></tr></tbody></table><table data-v-75f723e0><thead data-v-75f723e0><tr data-v-75f723e0><th data-v-75f723e0>Cacao en polvo</th></tr></thead><tbody data-v-75f723e0><tr data-v-75f723e0><td data-v-75f723e0>1 taza = 125 g</td></tr><tr data-v-75f723e0><td data-v-75f723e0>½ taza = 60 g</td></tr><tr data-v-75f723e0><td data-v-75f723e0>⅓ taza = 40 g</td></tr><tr data-v-75f723e0><td data-v-75f723e0>¼ taza = 30 g</td></tr></tbody></table><table data-v-75f723e0><thead data-v-75f723e0><tr data-v-75f723e0><th data-v-75f723e0>Otras medidas</th></tr></thead><tbody data-v-75f723e0><tr data-v-75f723e0><td data-v-75f723e0>1 onza = 28 g</td></tr><tr data-v-75f723e0><td data-v-75f723e0>1 stick = 125 g</td></tr><tr data-v-75f723e0><td data-v-75f723e0>1 pinta = 400 ml</td></tr></tbody></table><table data-v-75f723e0><thead data-v-75f723e0><tr data-v-75f723e0><th data-v-75f723e0>Líquidos</th></tr></thead><tbody data-v-75f723e0><tr data-v-75f723e0><td data-v-75f723e0>1 taza = 240 ml</td></tr><tr data-v-75f723e0><td data-v-75f723e0>1 cucharadita = 5 ml</td></tr><tr data-v-75f723e0><td data-v-75f723e0>1 cucharada = 15 ml</td></tr></tbody></table></div>',2);Object(r["w"])();var mt=lt((function(e,t,a,n,i,o){var c=Object(r["C"])("focus-trap");return Object(r["v"])(),Object(r["h"])(c,{active:!0,"escape-deactivates":!1},{default:lt((function(){return[Object(r["l"])(r["d"],{name:"modal"},{default:lt((function(){return[Object(r["l"])("div",{onKeyup:t[4]||(t[4]=Object(r["L"])((function(){return o.closeModal.apply(o,arguments)}),["esc"])),class:"modal-container",tabindex:"-1"},[Object(r["l"])("span",{onTouchstartPassive:t[1]||(t[1]=function(){}),onClick:t[2]||(t[2]=function(){return o.closeModal.apply(o,arguments)}),onKeyup:t[3]||(t[3]=Object(r["L"])((function(){return o.closeModal.apply(o,arguments)}),["enter"])),class:"cerrar",tabindex:"0"},"×",32),ht],32)]})),_:1})]})),_:1})})),ft={name:"NavigationBarModalMedidasEquivalencias",methods:{closeModal:function(){""===this.$store.state.homeRouteNavigation.homeRoutePath?this.$router.push({name:"Home"}):this.$router.go(-2)}}};a("f289");ft.render=mt,ft.__scopeId="data-v-75f723e0";var bt=ft,vt=[{path:"".concat("/Vue-PWA/"),name:"Home",component:tt,meta:{transition:"null"}},{path:"".concat("/Vue-PWA/","categoria/:categoria/:indexNumber(\\d+)"),name:"HomeWithCategory",component:tt,meta:{transition:"null"},props:!0},{path:"".concat("/Vue-PWA/",":receta/:indexNumber(\\d+)"),name:"CardModal",component:E,meta:{transition:"cardModal"},props:!0},{path:"".concat("/Vue-PWA/","menu"),name:"NavigationBarModal",component:ut,meta:{transition:"menu"},children:[{path:"medidas_y_equivalencias",component:bt}]}],gt=Object(_["a"])({history:Object(_["b"])(),base:"/Vue-PWA/",routes:vt}),pt=gt,Ot=Object(r["g"])(d);l["c"].add(h["c"]),l["c"].add(h["b"]),l["c"].add(h["d"]),l["c"].add(h["a"]),Ot.component("font-awesome-icon",m["a"]),Ot.component("FocusTrap",f["a"]),Ot.use(H),Ot.use(pt),Ot.mount("#app")},6130:function(e,t,a){e.exports=a.p+"img/torta_vainilla.7bfee3eb.webp"},"64be":function(e,t,a){"use strict";a("3068")},"74d7":function(e,t,a){"use strict";a("750b")},"750b":function(e,t,a){},7624:function(e,t,a){"use strict";a("a8c2")},"7cf2":function(e,t,a){"use strict";a("3c8a")},"7e43":function(e,t,a){e.exports=a.p+"img/panqueques.a8d4446f.webp"},8145:function(e,t,a){"use strict";a("21af")},9651:function(e,t,a){"use strict";a("133c")},9695:function(e,t,a){"use strict";a("a639")},9996:function(e,t,a){"use strict";a("55da")},"9d0e":function(e,t,a){e.exports=a.p+"img/queque_marmoleado.aa1ec57e.webp"},"9e68":function(e,t,a){"use strict";a("0e0f")},"9eb0":function(e,t,a){e.exports=a.p+"img/selva_negra.164ecde9.webp"},a639:function(e,t,a){},a8c2:function(e,t,a){},d0ec:function(e,t,a){e.exports=a.p+"img/salchipapas.89813de0.webp"},d348:function(e,t,a){},d836:function(e,t,a){},d923:function(e,t,a){e.exports=a.p+"img/pie_limon.9d53c6c6.webp"},dfd4:function(e,t,a){"use strict";a("e2f5")},e2f5:function(e,t,a){},e40a:function(e,t,a){e.exports=a.p+"img/muffins.13b2bc16.webp"},ea4e:function(e,t,a){"use strict";a("242f")},f289:function(e,t,a){"use strict";a("d836")},f3ed:function(e,t,a){e.exports=a.p+"img/panqueques_avena.7a2f43e1.webp"}});
//# sourceMappingURL=app.3e9c4a44.js.map