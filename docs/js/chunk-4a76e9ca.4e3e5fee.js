(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a76e9ca"],{"0616":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),o=Object(n["N"])("data-v-4cb807b4");Object(n["y"])("data-v-4cb807b4");var c={class:"modal-content-container"},r={class:"modal-cabecera"},i=Object(n["l"])("h2",null,"Las recetas de Lita",-1),u={class:"modal-contenido"},s=Object(n["l"])("span",null,"Categorías:",-1);Object(n["w"])();var l=o((function(e,t,a,l,d,b){var p=this,v=Object(n["C"])("router-view"),m=Object(n["C"])("focus-trap");return Object(n["v"])(),Object(n["h"])(m,{active:!0,"escape-deactivates":!1},{default:o((function(){return[Object(n["l"])("div",{onKeyup:t[10]||(t[10]=Object(n["L"])((function(){return b.closeModal.apply(b,arguments)}),["esc"])),class:"modal-container",tabindex:"-1"},[Object(n["l"])("span",{onTouchstartPassive:t[1]||(t[1]=function(){}),onClick:t[2]||(t[2]=function(){return b.closeModal.apply(b,arguments)}),onKeyup:t[3]||(t[3]=Object(n["L"])((function(){return b.closeModal.apply(b,arguments)}),["enter"])),class:"cerrar",tabindex:"0"},"×",32),Object(n["l"])("div",c,[Object(n["l"])("div",r,[i,Object(n["l"])("img",{src:"".concat(d.baseURL,"img/icons/favicon.svg"),alt:"Símbolo del sitio.\r\n          Una jarra celeste, dos huevos y un tazón con un batidor."},null,8,["src"])]),Object(n["l"])("ul",u,[Object(n["l"])("li",{onTouchstartPassive:t[4]||(t[4]=function(){}),onClick:t[5]||(t[5]=function(){return b.openMedidasyEquivalenciasModal.apply(b,arguments)}),onKeyup:t[6]||(t[6]=Object(n["L"])((function(){return b.openMedidasyEquivalenciasModal.apply(b,arguments)}),["enter"])),tabindex:"0"}," Medidas y equivalencias ",32),Object(n["l"])(v),Object(n["l"])("li",null,[s,Object(n["l"])("ul",null,[(Object(n["v"])(!0),Object(n["h"])(n["b"],null,Object(n["B"])(p.$store.state.searchAndFilter.Categories,(function(e,a){return Object(n["v"])(),Object(n["h"])("li",{onTouchstartPassive:t[7]||(t[7]=function(){}),onClick:t[8]||(t[8]=function(){return b.seleccionarCategoria.apply(b,arguments)}),onKeyup:t[9]||(t[9]=Object(n["L"])((function(){return b.seleccionarCategoria.apply(b,arguments)}),["enter"])),key:a,"data-id":e.id,"data-index-number":e.indexNumber,tabindex:"0"},Object(n["F"])(e.title),41,["data-id","data-index-number"])})),128))])])])])],32)]})),_:1})})),d=(a("ac1f"),a("5319"),{name:"NavigationBarModal",data:function(){return{baseURL:"/Vue-PWA/"}},mounted:function(){document.body.style.overflow="hidden",this.$store.commit("blurredBackground/actualizarShowBlurredBackground",!0)},unmounted:function(){document.body.style.overflow="auto",this.$store.commit("blurredBackground/actualizarShowBlurredBackground",!1)},methods:{openMedidasyEquivalenciasModal:function(){this.$router.push("".concat("/Vue-PWA/","menu/medidas_y_equivalencias"))},seleccionarCategoria:function(){var e=event.currentTarget.textContent,t=event.currentTarget.getAttribute("data-index-number");if("Todas las recetas"==e)this.$router.push({name:"Home"});else{var a=e.replace(/\s/g,"_");this.$router.push({name:"HomeWithCategory",params:{categoria:a,indexNumber:t}})}},closeModal:function(){""===this.$store.state.homeRouteNavigation.homeRoutePath?this.$router.push({name:"Home"}):this.$router.go(-1)}}});a("9e68");d.render=l,d.__scopeId="data-v-4cb807b4";t["default"]=d},"0e0f":function(e,t,a){},"9e68":function(e,t,a){"use strict";a("0e0f")}}]);
//# sourceMappingURL=chunk-4a76e9ca.4e3e5fee.js.map