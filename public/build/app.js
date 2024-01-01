(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/acc.js":
/*!***********************!*\
  !*** ./assets/acc.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");

var acc = {
  init: function init() {
    console.log("initialisation page accueil");
    document.querySelector("#menu-btn").addEventListener("click", acc.toggleNav);
    document.querySelector("#dropdownCatergories").addEventListener("click", acc.toggleDropCategories);
    document.querySelector("#dropdownMarques").addEventListener("click", acc.toggleDropMarques);
    document.querySelector("#dropdownGenre").addEventListener("click", acc.toggleDropGenre);

    // document
    //   .querySelector("#dropdownCouleurs")
    //   .addEventListener("click", acc.toggleDropCouleurs);

    document.querySelector("#filtreMobile").addEventListener("click", acc.toggleFiltreMobile);

    //  document
    //     .querySelector("#filterSelection")
    //     .addEventListener(
    //       "click",
    //       acc.toggleFrilterSelection
    //     );
  },

  toggleNav: function toggleNav() {
    // Reécupèration des svg's'
    var burgger = document.querySelector("#burgerSvg");
    var croix = document.querySelector("#croixSvg");
    var menuMobile = document.querySelector("#toggled-menu");
    burgger.classList.toggle("hidden");
    croix.classList.toggle("hidden");
    var toggledMenu = menuMobile.classList.toggle("-translate-y-full");
    if (toggledMenu == true) {
      menuMobile.classList.add("-translate-y-full");
    } else {
      menuMobile.classList.remove("-translate-y-full");
    }
  },
  // fonction drop filtre categories
  toggleDropCategories: function toggleDropCategories() {
    document.querySelector("#submenuFiltre").classList.toggle("hidden");
    document.querySelector("#submenuFiltre").classList.toggle("duration-500");
    document.querySelector("#arrowCategories").classList.toggle("rotate-180");
    document.querySelector("#dropdownCatergories").classList.toggle("backdrop-blur-3xl");
    document.querySelector("#dropdownCatergories").classList.toggle("bg-white/25");
    document.querySelector("#colorsFiltersCategories").classList.toggle("text-pink-900");
  },
  // fonction drop filtre Marques
  toggleDropMarques: function toggleDropMarques() {
    document.querySelector("#submenuFiltreMarque").classList.toggle("hidden");
    document.querySelector("#arrowMarques").classList.toggle("rotate-180");
    document.querySelector("#dropdownMarques").classList.toggle("backdrop-blur-3xl");
    document.querySelector("#dropdownMarques").classList.toggle("bg-white/25");
    document.querySelector("#colorsFiltersMarques").classList.toggle("text-pink-900");
  },
  // fonction drop filtre Genre
  toggleDropGenre: function toggleDropGenre() {
    document.querySelector("#submenuFiltreGenre").classList.toggle("hidden");
    document.querySelector("#arrowGenre").classList.toggle("rotate-180");
    document.querySelector("#dropdownGenre").classList.toggle("backdrop-blur-3xl");
    document.querySelector("#dropdownGenre").classList.toggle("bg-white/25");
    document.querySelector("#colorsFiltersGenre").classList.toggle("text-pink-900");
  },
  // // fonction drop filtre Couleurs
  // toggleDropCouleurs: function () {
  //   console.log("benoit");
  //   document
  //     .querySelector("#submenuFiltreCouleurs")
  //     .classList.toggle("hidden");
  //   document
  //     .querySelector("#arrowCouleurs")
  //     .classList.toggle("rotate-180");
  //   document
  //     .querySelector("#dropdownCouleurs")
  //     .classList.toggle("backdrop-blur-3xl");
  //   document
  //     .querySelector("#dropdownCouleurs")
  //     .classList.toggle("bg-white/25");

  //   document
  //     .querySelector("#colorsFiltersCouleur")
  //     .classList.toggle("text-pink-800");
  // },

  toggleFiltreMobile: function toggleFiltreMobile() {
    console.log("click sur le filtre mobile");
    document.querySelector("#filtreMobile").classList.toggle("rotate-180");
    document.querySelector("#filtreMobile").classList.toggle("translate-x-[8rem]");
    document.querySelector("#filtreMobile").classList.toggle("md:translate-x-[23rem]");
    document.querySelector("#filtre").classList.toggle("translate-x-[0rem]");
  }

  // toggleFrilterSelection: function () {
  //   const menuSelection = document.querySelector(
  //     "#submenuFilterSelection"
  //   );
  //   const toggleFilterSelection =
  //     menuSelection.classList.toggle("-translate-y-full");

  //   if (toggleFilterSelection == true) {
  //     menuSelection.classList.add("-translate-y-full");
  //     menuSelection.classList.add("duration-700");
  //   } else {
  //     menuSelection.classList.remove("-translate-y-full");
  //   }

  //   document
  //     .querySelector("#arrowFilterSelection")
  //     .classList.toggle("rotate-180");
  // },
};

document.addEventListener("DOMContentLoaded", acc.init);

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acc.js */ "./assets/acc.js");
/* harmony import */ var _bckoff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bckoff.js */ "./assets/bckoff.js");
/* harmony import */ var _bckoff_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bckoff_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images.js */ "./assets/images.js");
/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flowbite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flowbite */ "./node_modules/flowbite/lib/esm/index.js");
// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
//import "./styles/app.css";


// start the Stimulus application

// assets/app.js





/***/ }),

/***/ "./assets/bckoff.js":
/*!**************************!*\
  !*** ./assets/bckoff.js ***!
  \**************************/
/***/ (() => {

var bckoff = {
  init: function init() {
    console.log("initialisation back off de benoit ");
    document.querySelector("#navigationId").addEventListener("click", bckoff.openSideBenoit);
  },
  openSideBenoit: function openSideBenoit() {
    console.log(" vous etes bien dans openSideBenoit ");
    document.querySelector("#navigationId").classList.toggle("rotate-180");
    var sideBarNav = document.querySelector("#navSidebar");
    var strokeColors = document.querySelector("#flecheId");
    sideBar = sideBarNav.classList.toggle("w-16");
    // console.log(sideBar, "info2");

    if (sideBar == true) {
      sideBarNav.classList.add("w-16");
      strokeColors.classList.remove("stroke-pink-900");
      strokeColors.classList.add("stroke-white");
      sideBarNav.classList.remove("w-56");
    } else {
      sideBarNav.classList.add("w-56");
      strokeColors.classList.add("stroke-pink-900");
      strokeColors.classList.remove("stroke-white");
      sideBarNav.classList.add("duration-500");
    }
  }
};
document.addEventListener("DOMContentLoaded", bckoff.init);

/***/ }),

/***/ "./assets/images.js":
/*!**************************!*\
  !*** ./assets/images.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var images = {
  init: function init() {
    console.log("initialistion du fichier images.js back office ");
    var links = document.querySelectorAll("[data-delete]");

    // Je boucle sur mes liens
    var _iterator = _createForOfIteratorHelper(links),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var link = _step.value;
        link.addEventListener("click", images.deleteImageProduct);
        console.log(link);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
  deleteImageProduct: function deleteImageProduct(e) {
    var _this = this;
    e.preventDefault();
    // console.log("vous etes bien dans deleteImageProduct");
    // Je demande confirmation
    if (confirm('Voulez-vous supprimer cette image de votre prduit ?')) {
      // J'envoie ma requête ajax
      fetch(this.getAttribute("href"), {
        method: 'DELETE',
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "_token": this.dataset.token
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.success) {
          _this.parentElement.remove();
        } else {
          alert(data.error);
        }
      });
    }
  }
};
document.addEventListener("DOMContentLoaded", images.init);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-c56d23"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQzs7Ozs7Ozs7Ozs7O0FDMUMxRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hY2MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmNrb2ZmLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuXG5jb25zdCBhY2MgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpc2F0aW9uIHBhZ2UgYWNjdWVpbFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idG5cIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjLnRvZ2dsZU5hdik7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25DYXRlcmdvcmllc1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2MudG9nZ2xlRHJvcENhdGVnb3JpZXMpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bk1hcnF1ZXNcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjLnRvZ2dsZURyb3BNYXJxdWVzKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25HZW5yZVwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2MudG9nZ2xlRHJvcEdlbnJlKTtcblxuICAgIC8vIGRvY3VtZW50XG4gICAgLy8gICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNvdWxldXJzXCIpXG4gICAgLy8gICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjYy50b2dnbGVEcm9wQ291bGV1cnMpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2ZpbHRyZU1vYmlsZVwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2MudG9nZ2xlRmlsdHJlTW9iaWxlKTtcblxuICAvLyAgZG9jdW1lbnRcbiAgLy8gICAgIC5xdWVyeVNlbGVjdG9yKFwiI2ZpbHRlclNlbGVjdGlvblwiKVxuICAvLyAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXG4gIC8vICAgICAgIFwiY2xpY2tcIixcbiAgLy8gICAgICAgYWNjLnRvZ2dsZUZyaWx0ZXJTZWxlY3Rpb25cbiAgLy8gICAgICk7XG5cbiAgICBcbiAgfSxcblxuICB0b2dnbGVOYXY6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZcOpY3Vww6hyYXRpb24gZGVzIHN2ZydzJ1xuICAgIGNvbnN0IGJ1cmdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1cmdlclN2Z1wiKTtcbiAgICBjb25zdCBjcm9peCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JvaXhTdmdcIik7XG4gICAgY29uc3QgbWVudU1vYmlsZSA9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZWQtbWVudVwiKTtcblxuICAgIGJ1cmdnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBjcm9peC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuXG4gICAgY29uc3QgdG9nZ2xlZE1lbnUgPSBtZW51TW9iaWxlLmNsYXNzTGlzdC50b2dnbGUoXG4gICAgICBcIi10cmFuc2xhdGUteS1mdWxsXCJcbiAgICApO1xuXG4gICAgaWYgKHRvZ2dsZWRNZW51ID09IHRydWUpIHtcbiAgICAgIG1lbnVNb2JpbGUuY2xhc3NMaXN0LmFkZChcIi10cmFuc2xhdGUteS1mdWxsXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51TW9iaWxlLmNsYXNzTGlzdC5yZW1vdmUoXCItdHJhbnNsYXRlLXktZnVsbFwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gZm9uY3Rpb24gZHJvcCBmaWx0cmUgY2F0ZWdvcmllc1xuICB0b2dnbGVEcm9wQ2F0ZWdvcmllczogZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNzdWJtZW51RmlsdHJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWVudUZpbHRyZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJkdXJhdGlvbi01MDBcIik7XG4gXG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYXJyb3dDYXRlZ29yaWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZS0xODBcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duQ2F0ZXJnb3JpZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmFja2Ryb3AtYmx1ci0zeGxcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duQ2F0ZXJnb3JpZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmctd2hpdGUvMjVcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yc0ZpbHRlcnNDYXRlZ29yaWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInRleHQtcGluay05MDBcIik7XG4gIH0sXG5cbiAgLy8gZm9uY3Rpb24gZHJvcCBmaWx0cmUgTWFycXVlc1xuICB0b2dnbGVEcm9wTWFycXVlczogZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNzdWJtZW51RmlsdHJlTWFycXVlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYXJyb3dNYXJxdWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZS0xODBcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duTWFycXVlc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiYWNrZHJvcC1ibHVyLTN4bFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25NYXJxdWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJnLXdoaXRlLzI1XCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNjb2xvcnNGaWx0ZXJzTWFycXVlc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJ0ZXh0LXBpbmstOTAwXCIpO1xuICB9LFxuXG4gIC8vIGZvbmN0aW9uIGRyb3AgZmlsdHJlIEdlbnJlXG4gIHRvZ2dsZURyb3BHZW5yZTogZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNzdWJtZW51RmlsdHJlR2VucmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNhcnJvd0dlbnJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZS0xODBcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duR2VucmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmFja2Ryb3AtYmx1ci0zeGxcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duR2VucmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmctd2hpdGUvMjVcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yc0ZpbHRlcnNHZW5yZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJ0ZXh0LXBpbmstOTAwXCIpO1xuICB9LFxuXG4gIC8vIC8vIGZvbmN0aW9uIGRyb3AgZmlsdHJlIENvdWxldXJzXG4gIC8vIHRvZ2dsZURyb3BDb3VsZXVyczogZnVuY3Rpb24gKCkge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiYmVub2l0XCIpO1xuICAvLyAgIGRvY3VtZW50XG4gIC8vICAgICAucXVlcnlTZWxlY3RvcihcIiNzdWJtZW51RmlsdHJlQ291bGV1cnNcIilcbiAgLy8gICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAvLyAgIGRvY3VtZW50XG4gIC8vICAgICAucXVlcnlTZWxlY3RvcihcIiNhcnJvd0NvdWxldXJzXCIpXG4gIC8vICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZS0xODBcIik7XG4gIC8vICAgZG9jdW1lbnRcbiAgLy8gICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duQ291bGV1cnNcIilcbiAgLy8gICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmFja2Ryb3AtYmx1ci0zeGxcIik7XG4gIC8vICAgZG9jdW1lbnRcbiAgLy8gICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duQ291bGV1cnNcIilcbiAgLy8gICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmctd2hpdGUvMjVcIik7XG5cbiAgLy8gICBkb2N1bWVudFxuICAvLyAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JzRmlsdGVyc0NvdWxldXJcIilcbiAgLy8gICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwidGV4dC1waW5rLTgwMFwiKTtcbiAgLy8gfSxcblxuICB0b2dnbGVGaWx0cmVNb2JpbGU6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIHN1ciBsZSBmaWx0cmUgbW9iaWxlXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNmaWx0cmVNb2JpbGVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLTE4MFwiKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNmaWx0cmVNb2JpbGVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwidHJhbnNsYXRlLXgtWzhyZW1dXCIpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2ZpbHRyZU1vYmlsZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJtZDp0cmFuc2xhdGUteC1bMjNyZW1dXCIpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2ZpbHRyZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJ0cmFuc2xhdGUteC1bMHJlbV1cIik7XG4gIH0sXG5cbiAgLy8gdG9nZ2xlRnJpbHRlclNlbGVjdGlvbjogZnVuY3Rpb24gKCkge1xuICAvLyAgIGNvbnN0IG1lbnVTZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAvLyAgICAgXCIjc3VibWVudUZpbHRlclNlbGVjdGlvblwiXG4gIC8vICAgKTtcbiAgLy8gICBjb25zdCB0b2dnbGVGaWx0ZXJTZWxlY3Rpb24gPVxuICAvLyAgICAgbWVudVNlbGVjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XG5cbiAgLy8gICBpZiAodG9nZ2xlRmlsdGVyU2VsZWN0aW9uID09IHRydWUpIHtcbiAgLy8gICAgIG1lbnVTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZChcIi10cmFuc2xhdGUteS1mdWxsXCIpO1xuICAvLyAgICAgbWVudVNlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZHVyYXRpb24tNzAwXCIpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBtZW51U2VsZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCItdHJhbnNsYXRlLXktZnVsbFwiKTtcbiAgLy8gICB9XG4gXG4gIC8vICAgZG9jdW1lbnRcbiAgLy8gICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Fycm93RmlsdGVyU2VsZWN0aW9uXCIpXG4gIC8vICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZS0xODBcIik7XG4gIC8vIH0sXG5cblxuXG5cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFjYy5pbml0KTtcbiIsIi8vIGltcG9ydCAnLi9ib290c3RyYXAuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbi8vaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzXCI7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuXG4gLy8gYXNzZXRzL2FwcC5qc1xuaW1wb3J0IFwiLi9hY2MuanNcIjtcbmltcG9ydCBcIi4vYmNrb2ZmLmpzXCI7XG5pbXBvcnQgXCIuL2ltYWdlcy5qc1wiO1xuaW1wb3J0IFwiZmxvd2JpdGVcIjtcbiIsImNvbnN0IGJja29mZiA9IHtcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpc2F0aW9uIGJhY2sgb2ZmIGRlIGJlbm9pdCBcIlxuICAgICAgKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI25hdmlnYXRpb25JZFwiKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJja29mZi5vcGVuU2lkZUJlbm9pdCk7XG5cbiAgICB9LFxuICBcbiAgICBvcGVuU2lkZUJlbm9pdDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCIgdm91cyBldGVzIGJpZW4gZGFucyBvcGVuU2lkZUJlbm9pdCBcIik7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNuYXZpZ2F0aW9uSWRcIilcbiAgICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICBcbiAgICAgIGNvbnN0IHNpZGVCYXJOYXYgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdlNpZGViYXJcIik7XG4gICAgICBjb25zdCBzdHJva2VDb2xvcnMgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZsZWNoZUlkXCIpO1xuICBcbiAgICAgIHNpZGVCYXIgPSBzaWRlQmFyTmF2LmNsYXNzTGlzdC50b2dnbGUoXCJ3LTE2XCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coc2lkZUJhciwgXCJpbmZvMlwiKTtcbiAgXG4gICAgICBpZiAoc2lkZUJhciA9PSB0cnVlKSB7XG4gICAgICAgIHNpZGVCYXJOYXYuY2xhc3NMaXN0LmFkZChcInctMTZcIik7XG4gICAgICAgIHN0cm9rZUNvbG9ycy5jbGFzc0xpc3QucmVtb3ZlKFwic3Ryb2tlLXBpbmstOTAwXCIpO1xuICAgICAgICBzdHJva2VDb2xvcnMuY2xhc3NMaXN0LmFkZChcInN0cm9rZS13aGl0ZVwiKTtcbiAgICAgICAgc2lkZUJhck5hdi5jbGFzc0xpc3QucmVtb3ZlKFwidy01NlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGVCYXJOYXYuY2xhc3NMaXN0LmFkZChcInctNTZcIik7XG4gICAgICAgIHN0cm9rZUNvbG9ycy5jbGFzc0xpc3QuYWRkKFwic3Ryb2tlLXBpbmstOTAwXCIpO1xuICAgICAgICBzdHJva2VDb2xvcnMuY2xhc3NMaXN0LnJlbW92ZShcInN0cm9rZS13aGl0ZVwiKTtcbiAgICAgICAgc2lkZUJhck5hdi5jbGFzc0xpc3QuYWRkKFwiZHVyYXRpb24tNTAwXCIpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG4gIFxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBiY2tvZmYuaW5pdCk7XG4iLCJjb25zdCBpbWFnZXMgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpc3Rpb24gZHUgZmljaGllciBpbWFnZXMuanMgYmFjayBvZmZpY2UgXCIpO1xuXG4gICAgbGV0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWRlbGV0ZV1cIik7IFxuXG4gICAgLy8gSmUgYm91Y2xlIHN1ciBtZXMgbGllbnNcbiAgICAgZm9yICggbGV0IGxpbmsgb2YgbGlua3MpIHtcbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGltYWdlcy5kZWxldGVJbWFnZVByb2R1Y3QpO1xuICAgICAgY29uc29sZS5sb2cobGluayk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICB9LFxuICBkZWxldGVJbWFnZVByb2R1Y3QgOiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwidm91cyBldGVzIGJpZW4gZGFucyBkZWxldGVJbWFnZVByb2R1Y3RcIik7XG4gICAgLy8gSmUgZGVtYW5kZSBjb25maXJtYXRpb25cbiAgICBpZihjb25maXJtKCdWb3VsZXotdm91cyBzdXBwcmltZXIgY2V0dGUgaW1hZ2UgZGUgdm90cmUgcHJkdWl0ID8nKSl7XG4gICAgICAvLyBKJ2Vudm9pZSBtYSByZXF1w6p0ZSBhamF4XG4gICAgICBmZXRjaCh0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIiksIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9LCBcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XCJfdG9rZW5cIjogdGhpcy5kYXRhc2V0LnRva2VufSlcbiAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBpZihkYXRhLnN1Y2Nlc3Mpe1xuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgYWxlcnQoZGF0YS5lcnJvcik7XG4gICAgICB9ICAgIFxuICAgIH0pXG5cbiAgfVxuICB9XG5cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGltYWdlcy5pbml0KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiYWNjIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlTmF2IiwidG9nZ2xlRHJvcENhdGVnb3JpZXMiLCJ0b2dnbGVEcm9wTWFycXVlcyIsInRvZ2dsZURyb3BHZW5yZSIsInRvZ2dsZUZpbHRyZU1vYmlsZSIsImJ1cmdnZXIiLCJjcm9peCIsIm1lbnVNb2JpbGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVkTWVudSIsImFkZCIsInJlbW92ZSIsImJja29mZiIsIm9wZW5TaWRlQmVub2l0Iiwic2lkZUJhck5hdiIsInN0cm9rZUNvbG9ycyIsInNpZGVCYXIiLCJpbWFnZXMiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwiZGVsZXRlSW1hZ2VQcm9kdWN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uZmlybSIsImZldGNoIiwiZ2V0QXR0cmlidXRlIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YXNldCIsInRva2VuIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwicGFyZW50RWxlbWVudCIsImFsZXJ0IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9