(self.webpackChunk=self.webpackChunk||[]).push([[143],{1452:(e,t,o)=>{"use strict";var r={init:function(){console.log("initialisation page accueil"),document.querySelector("#menu-btn").addEventListener("click",r.toggleNav),document.querySelector("#dropdownCatergories").addEventListener("click",r.toggleDropCategories),document.querySelector("#dropdownMarques").addEventListener("click",r.toggleDropMarques),document.querySelector("#dropdownGenre").addEventListener("click",r.toggleDropGenre),document.querySelector("#filtreMobile").addEventListener("click",r.toggleFiltreMobile)},toggleNav:function(){var e=document.querySelector("#burgerSvg"),t=document.querySelector("#croixSvg"),o=document.querySelector("#toggled-menu");e.classList.toggle("hidden"),t.classList.toggle("hidden"),1==o.classList.toggle("-translate-y-full")?o.classList.add("-translate-y-full"):o.classList.remove("-translate-y-full")},toggleDropCategories:function(){document.querySelector("#submenuFiltre").classList.toggle("hidden"),document.querySelector("#submenuFiltre").classList.toggle("duration-500"),document.querySelector("#arrowCategories").classList.toggle("rotate-180"),document.querySelector("#dropdownCatergories").classList.toggle("backdrop-blur-3xl"),document.querySelector("#dropdownCatergories").classList.toggle("bg-white/25"),document.querySelector("#colorsFiltersCategories").classList.toggle("text-pink-900")},toggleDropMarques:function(){document.querySelector("#submenuFiltreMarque").classList.toggle("hidden"),document.querySelector("#arrowMarques").classList.toggle("rotate-180"),document.querySelector("#dropdownMarques").classList.toggle("backdrop-blur-3xl"),document.querySelector("#dropdownMarques").classList.toggle("bg-white/25"),document.querySelector("#colorsFiltersMarques").classList.toggle("text-pink-900")},toggleDropGenre:function(){document.querySelector("#submenuFiltreGenre").classList.toggle("hidden"),document.querySelector("#arrowGenre").classList.toggle("rotate-180"),document.querySelector("#dropdownGenre").classList.toggle("backdrop-blur-3xl"),document.querySelector("#dropdownGenre").classList.toggle("bg-white/25"),document.querySelector("#colorsFiltersGenre").classList.toggle("text-pink-900")},toggleFiltreMobile:function(){console.log("click sur le filtre mobile"),document.querySelector("#filtreMobile").classList.toggle("rotate-180"),document.querySelector("#filtreMobile").classList.toggle("translate-x-[8rem]"),document.querySelector("#filtreMobile").classList.toggle("md:translate-x-[23rem]"),document.querySelector("#filtre").classList.toggle("translate-x-[0rem]")}};document.addEventListener("DOMContentLoaded",r.init);o(648),o(3257),o(3413)},648:()=>{var e={init:function(){console.log("initialisation back off de benoit "),document.querySelector("#navigationId").addEventListener("click",e.openSideBenoit)},openSideBenoit:function(){console.log(" vous etes bien dans openSideBenoit "),document.querySelector("#navigationId").classList.toggle("rotate-180");var e=document.querySelector("#navSidebar"),t=document.querySelector("#flecheId");sideBar=e.classList.toggle("w-16"),1==sideBar?(e.classList.add("w-16"),t.classList.remove("stroke-pink-900"),t.classList.add("stroke-white"),e.classList.remove("w-56")):(e.classList.add("w-56"),t.classList.add("stroke-pink-900"),t.classList.remove("stroke-white"),e.classList.add("duration-500"))}};document.addEventListener("DOMContentLoaded",e.init)},3257:(e,t,o)=>{function r(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var r=0,l=function(){};return{s:l,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return s=e.done,e},e:function(e){c=!0,i=e},f:function(){try{s||null==o.return||o.return()}finally{if(c)throw i}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}o(1539),o(8674),o(8862),o(7042),o(8309),o(1038),o(8783),o(4916),o(7601),o(2526),o(1817),o(2165),o(6992),o(3948),o(9753),o(1703),o(6647);var l={init:function(){console.log("initialistion du fichier images.js back office ");var e,t=r(document.querySelectorAll("[data-delete]"));try{for(t.s();!(e=t.n()).done;){var o=e.value;o.addEventListener("click",l.deleteImageProduct),console.log(o)}}catch(e){t.e(e)}finally{t.f()}},deleteImageProduct:function(e){var t=this;e.preventDefault(),confirm("Voulez-vous supprimer cette image de votre prduit ?")&&fetch(this.getAttribute("href"),{method:"DELETE",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json"},body:JSON.stringify({_token:this.dataset.token})}).then((function(e){return e.json()})).then((function(e){e.success?t.parentElement.remove():alert(e.error)}))}};document.addEventListener("DOMContentLoaded",l.init)}},e=>{e.O(0,[621],(()=>{return t=1452,e(e.s=t);var t}));e.O()}]);