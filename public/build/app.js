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
    document.querySelector("#dropdownCouleurs").addEventListener("click", acc.toggleDropCouleurs);
    document.querySelector("#filtreMobile").addEventListener("click", acc.toggleFiltreMobile);
    document.querySelector("#filterSelection").addEventListener("click", acc.toggleFrilterSelection);
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
  // fonction drop filtre Couleurs
  toggleDropCouleurs: function toggleDropCouleurs() {
    console.log("benoit");
    document.querySelector("#submenuFiltreCouleurs").classList.toggle("hidden");
    document.querySelector("#arrowCouleurs").classList.toggle("rotate-180");
    document.querySelector("#dropdownCouleurs").classList.toggle("backdrop-blur-3xl");
    document.querySelector("#dropdownCouleurs").classList.toggle("bg-white/25");
    document.querySelector("#colorsFiltersCouleur").classList.toggle("text-pink-800");
  },
  toggleFiltreMobile: function toggleFiltreMobile() {
    document.querySelector("#filtreMobile").classList.toggle("rotate-180");
    document.querySelector("#filtreMobile").classList.toggle("translate-x-[8rem]");
    document.querySelector("#filtreMobile").classList.toggle("md:translate-x-[23rem]");
    document.querySelector("#filtre").classList.toggle("translate-x-[0rem]");
  }
  /*
  toggleFrilterSelection: function () {
    const menuSelection = document.querySelector(
      "#submenuFilterSelection"
    );
    const toggleFilterSelection =
      menuSelection.classList.toggle("-translate-y-full");
     if (toggleFilterSelection == true) {
      menuSelection.classList.add("-translate-y-full");
      menuSelection.classList.add("duration-700");
    } else {
      menuSelection.classList.remove("-translate-y-full");
    }
      document
      .querySelector("#arrowFilterSelection")
      .classList.toggle("rotate-180");
  },
  */
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
//import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
//import "./styles/app.css";


// start the Stimulus application
// import "./bootstrap";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBRTFCLElBQU1BLEdBQUcsR0FBRztFQUNWQyxJQUFJLEVBQUUsZ0JBQVk7SUFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixDQUFDO0lBRzFDQyxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FDMUJDLGdCQUFnQixDQUFDLE9BQU8sRUFBRU4sR0FBRyxDQUFDTyxTQUFTLENBQUM7SUFFM0NILFFBQVEsQ0FDTEMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQ3JDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVOLEdBQUcsQ0FBQ1Esb0JBQW9CLENBQUM7SUFFdERKLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQ2pDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVOLEdBQUcsQ0FBQ1MsaUJBQWlCLENBQUM7SUFDbkRMLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQy9CQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVOLEdBQUcsQ0FBQ1UsZUFBZSxDQUFDO0lBRWpETixRQUFRLENBQ0xDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUNsQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFTixHQUFHLENBQUNXLGtCQUFrQixDQUFDO0lBRXBEUCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FDOUJDLGdCQUFnQixDQUFDLE9BQU8sRUFBRU4sR0FBRyxDQUFDWSxrQkFBa0IsQ0FBQztJQUVyRFIsUUFBUSxDQUNKQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FDakNDLGdCQUFnQixDQUNmLE9BQU8sRUFDUE4sR0FBRyxDQUFDYSxzQkFBc0IsQ0FDM0I7RUFHTCxDQUFDO0VBRUROLFNBQVMsRUFBRSxxQkFBWTtJQUNyQjtJQUNBLElBQU1PLE9BQU8sR0FBR1YsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3BELElBQU1VLEtBQUssR0FBR1gsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ2pELElBQU1XLFVBQVUsR0FDZFosUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0lBRXpDUyxPQUFPLENBQUNHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQ0gsS0FBSyxDQUFDRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFFaEMsSUFBTUMsV0FBVyxHQUFHSCxVQUFVLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUM3QyxtQkFBbUIsQ0FDcEI7SUFFRCxJQUFJQyxXQUFXLElBQUksSUFBSSxFQUFFO01BQ3ZCSCxVQUFVLENBQUNDLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLG1CQUFtQixDQUFDO0lBQy9DLENBQUMsTUFBTTtNQUNMSixVQUFVLENBQUNDLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xEO0VBQ0YsQ0FBQztFQUVEO0VBQ0FiLG9CQUFvQixFQUFFLGdDQUFZO0lBQ2hDSixRQUFRLENBQ0xDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUMvQlksU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3ZCZCxRQUFRLENBQ1hDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUMvQlksU0FBUyxDQUFDQyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBR25DZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUNqQ1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ2pDZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUNyQ1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsbUJBQW1CLENBQUM7SUFDeENkLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQ3JDWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDbENkLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQ3pDWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxlQUFlLENBQUM7RUFDdEMsQ0FBQztFQUVEO0VBQ0FULGlCQUFpQixFQUFFLDZCQUFZO0lBQzdCTCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUNyQ1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzdCZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FDOUJZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNqQ2QsUUFBUSxDQUNMQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FDakNZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLG1CQUFtQixDQUFDO0lBQ3hDZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUNqQ1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ2xDZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUN0Q1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsZUFBZSxDQUFDO0VBQ3RDLENBQUM7RUFFRDtFQUNBUixlQUFlLEVBQUUsMkJBQVk7SUFDM0JOLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQ3BDWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDN0JkLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUM1QlksU0FBUyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ2pDZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUMvQlksU0FBUyxDQUFDQyxNQUFNLENBQUMsbUJBQW1CLENBQUM7SUFDeENkLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQy9CWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDbENkLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQ3BDWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxlQUFlLENBQUM7RUFDdEMsQ0FBQztFQUVEO0VBQ0FQLGtCQUFrQixFQUFFLDhCQUFZO0lBQzlCVCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDckJDLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQ3ZDWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDN0JkLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQy9CWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDakNkLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQ2xDWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztJQUN4Q2QsUUFBUSxDQUNMQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FDbENZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUVsQ2QsUUFBUSxDQUNMQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FDdENZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGVBQWUsQ0FBQztFQUN0QyxDQUFDO0VBRUROLGtCQUFrQixFQUFFLDhCQUFZO0lBQzlCUixRQUFRLENBQ0xDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FDOUJZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUMvQmQsUUFBUSxDQUNQQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQzlCWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztJQUN2Q2QsUUFBUSxDQUNQQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQzlCWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztJQUU3Q2QsUUFBUSxDQUNMQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQ3hCWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztFQUMzQztFQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BLENBQUM7O0FBRURkLFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUVOLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEx2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ2tDOztBQUVsQztBQUNDO0FBQ0E7QUFDaUI7QUFDRztBQUNBOzs7Ozs7Ozs7OztBQ2pCckIsSUFBTXFCLE1BQU0sR0FBRztFQUNYckIsSUFBSSxFQUFFLGdCQUFZO0lBQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FDL0M7SUFDREMsUUFBUSxDQUNMQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQzlCQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVnQixNQUFNLENBQUNDLGNBQWMsQ0FBQztFQUVyRCxDQUFDO0VBRURBLGNBQWMsRUFBRSwwQkFBWTtJQUMxQnJCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNDQUFzQyxDQUFDO0lBQ25EQyxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FDOUJZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUVqQyxJQUFNTSxVQUFVLEdBQ2RwQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7SUFDdkMsSUFBTW9CLFlBQVksR0FDaEJyQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFFckNxQixPQUFPLEdBQUdGLFVBQVUsQ0FBQ1AsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzdDOztJQUVBLElBQUlRLE9BQU8sSUFBSSxJQUFJLEVBQUU7TUFDbkJGLFVBQVUsQ0FBQ1AsU0FBUyxDQUFDRyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ2hDSyxZQUFZLENBQUNSLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLGlCQUFpQixDQUFDO01BQ2hESSxZQUFZLENBQUNSLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLGNBQWMsQ0FBQztNQUMxQ0ksVUFBVSxDQUFDUCxTQUFTLENBQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQyxNQUFNO01BQ0xHLFVBQVUsQ0FBQ1AsU0FBUyxDQUFDRyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ2hDSyxZQUFZLENBQUNSLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLGlCQUFpQixDQUFDO01BQzdDSyxZQUFZLENBQUNSLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLGNBQWMsQ0FBQztNQUM3Q0csVUFBVSxDQUFDUCxTQUFTLENBQUNHLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDMUM7RUFDRjtBQUNGLENBQUM7QUFHSGhCLFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUVnQixNQUFNLENBQUNyQixJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDMUQsSUFBTTBCLE1BQU0sR0FBRztFQUNiMUIsSUFBSSxFQUFFLGdCQUFZO0lBQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQztJQUU5RCxJQUFJeUIsS0FBSyxHQUFHeEIsUUFBUSxDQUFDeUIsZ0JBQWdCLENBQUMsZUFBZSxDQUFDOztJQUV0RDtJQUFBLDJDQUNtQkQsS0FBSztNQUFBO0lBQUE7TUFBdkIsb0RBQXlCO1FBQUEsSUFBZkUsSUFBSTtRQUNiQSxJQUFJLENBQUN4QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVxQixNQUFNLENBQUNJLGtCQUFrQixDQUFDO1FBQ3pEN0IsT0FBTyxDQUFDQyxHQUFHLENBQUMyQixJQUFJLENBQUM7TUFDakI7SUFBQztNQUFBO0lBQUE7TUFBQTtJQUFBO0VBR0wsQ0FBQztFQUNEQyxrQkFBa0IsRUFBRyw0QkFBU0MsQ0FBQyxFQUFFO0lBQUE7SUFDL0JBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCO0lBQ0E7SUFDQSxJQUFHQyxPQUFPLENBQUMscURBQXFELENBQUMsRUFBQztNQUNoRTtNQUNBQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDL0JDLE1BQU0sRUFBRSxRQUFRO1FBQ2hCQyxPQUFPLEVBQUU7VUFDUCxrQkFBa0IsRUFBRSxnQkFBZ0I7VUFDcEMsY0FBYyxFQUFFO1FBQ3RCLENBQUM7UUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztVQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0M7UUFBSyxDQUFDO01BQ3JELENBQUMsQ0FBQyxDQUNDQyxJQUFJLENBQUMsVUFBQUMsUUFBUTtRQUFBLE9BQUlBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO01BQUEsRUFBQyxDQUNqQ0YsSUFBSSxDQUFDLFVBQUFHLElBQUksRUFBSTtRQUNaLElBQUdBLElBQUksQ0FBQ0MsT0FBTyxFQUFDO1VBQ2QsS0FBSSxDQUFDQyxhQUFhLENBQUM1QixNQUFNLEVBQUU7UUFDN0IsQ0FBQyxNQUFJO1VBQ0g2QixLQUFLLENBQUNILElBQUksQ0FBQ0ksS0FBSyxDQUFDO1FBQ25CO01BQ0YsQ0FBQyxDQUFDO0lBRUo7RUFDQTtBQUVGLENBQUM7QUFFRC9DLFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUVxQixNQUFNLENBQUMxQixJQUFJLENBQUM7Ozs7Ozs7Ozs7OztBQzFDMUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWNjLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jja29mZi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcblxuY29uc3QgYWNjID0ge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJpbml0aWFsaXNhdGlvbiBwYWdlIGFjY3VlaWxcIik7XG5cblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ0blwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2MudG9nZ2xlTmF2KTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNhdGVyZ29yaWVzXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjYy50b2dnbGVEcm9wQ2F0ZWdvcmllcyk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25NYXJxdWVzXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjYy50b2dnbGVEcm9wTWFycXVlcyk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duR2VucmVcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjLnRvZ2dsZURyb3BHZW5yZSk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25Db3VsZXVyc1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2MudG9nZ2xlRHJvcENvdWxldXJzKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNmaWx0cmVNb2JpbGVcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjLnRvZ2dsZUZpbHRyZU1vYmlsZSk7XG5cbiAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNmaWx0ZXJTZWxlY3Rpb25cIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIGFjYy50b2dnbGVGcmlsdGVyU2VsZWN0aW9uXG4gICAgICApO1xuXG4gICAgXG4gIH0sXG5cbiAgdG9nZ2xlTmF2OiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmXDqWN1cMOocmF0aW9uIGRlcyBzdmcncydcbiAgICBjb25zdCBidXJnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXJnZXJTdmdcIik7XG4gICAgY29uc3QgY3JvaXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nyb2l4U3ZnXCIpO1xuICAgIGNvbnN0IG1lbnVNb2JpbGUgPVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGVkLW1lbnVcIik7XG5cbiAgICBidXJnZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgY3JvaXguY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcblxuICAgIGNvbnN0IHRvZ2dsZWRNZW51ID0gbWVudU1vYmlsZS5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgXCItdHJhbnNsYXRlLXktZnVsbFwiXG4gICAgKTtcblxuICAgIGlmICh0b2dnbGVkTWVudSA9PSB0cnVlKSB7XG4gICAgICBtZW51TW9iaWxlLmNsYXNzTGlzdC5hZGQoXCItdHJhbnNsYXRlLXktZnVsbFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVudU1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIGZvbmN0aW9uIGRyb3AgZmlsdHJlIGNhdGVnb3JpZXNcbiAgdG9nZ2xlRHJvcENhdGVnb3JpZXM6IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWVudUZpbHRyZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1lbnVGaWx0cmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiZHVyYXRpb24tNTAwXCIpO1xuIFxuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Fycm93Q2F0ZWdvcmllc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNhdGVyZ29yaWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJhY2tkcm9wLWJsdXItM3hsXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNhdGVyZ29yaWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJnLXdoaXRlLzI1XCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNjb2xvcnNGaWx0ZXJzQ2F0ZWdvcmllc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJ0ZXh0LXBpbmstOTAwXCIpO1xuICB9LFxuXG4gIC8vIGZvbmN0aW9uIGRyb3AgZmlsdHJlIE1hcnF1ZXNcbiAgdG9nZ2xlRHJvcE1hcnF1ZXM6IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWVudUZpbHRyZU1hcnF1ZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Fycm93TWFycXVlc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bk1hcnF1ZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmFja2Ryb3AtYmx1ci0zeGxcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duTWFycXVlc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiZy13aGl0ZS8yNVwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JzRmlsdGVyc01hcnF1ZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwidGV4dC1waW5rLTkwMFwiKTtcbiAgfSxcblxuICAvLyBmb25jdGlvbiBkcm9wIGZpbHRyZSBHZW5yZVxuICB0b2dnbGVEcm9wR2VucmU6IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWVudUZpbHRyZUdlbnJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYXJyb3dHZW5yZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkdlbnJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJhY2tkcm9wLWJsdXItM3hsXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkdlbnJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJnLXdoaXRlLzI1XCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNjb2xvcnNGaWx0ZXJzR2VucmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwidGV4dC1waW5rLTkwMFwiKTtcbiAgfSxcblxuICAvLyBmb25jdGlvbiBkcm9wIGZpbHRyZSBDb3VsZXVyc1xuICB0b2dnbGVEcm9wQ291bGV1cnM6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImJlbm9pdFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWVudUZpbHRyZUNvdWxldXJzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYXJyb3dDb3VsZXVyc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNvdWxldXJzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJhY2tkcm9wLWJsdXItM3hsXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNvdWxldXJzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJnLXdoaXRlLzI1XCIpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yc0ZpbHRlcnNDb3VsZXVyXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInRleHQtcGluay04MDBcIik7XG4gIH0sXG5cbiAgdG9nZ2xlRmlsdHJlTW9iaWxlOiBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2ZpbHRyZU1vYmlsZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2ZpbHRyZU1vYmlsZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJ0cmFuc2xhdGUteC1bOHJlbV1cIik7XG4gICAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdHJlTW9iaWxlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcIm1kOnRyYW5zbGF0ZS14LVsyM3JlbV1cIik7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdHJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInRyYW5zbGF0ZS14LVswcmVtXVwiKTtcbiAgfSxcbiAgLypcbiAgdG9nZ2xlRnJpbHRlclNlbGVjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG1lbnVTZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjc3VibWVudUZpbHRlclNlbGVjdGlvblwiXG4gICAgKTtcbiAgICBjb25zdCB0b2dnbGVGaWx0ZXJTZWxlY3Rpb24gPVxuICAgICAgbWVudVNlbGVjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XG5cbiAgICBpZiAodG9nZ2xlRmlsdGVyU2VsZWN0aW9uID09IHRydWUpIHtcbiAgICAgIG1lbnVTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZChcIi10cmFuc2xhdGUteS1mdWxsXCIpO1xuICAgICAgbWVudVNlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZHVyYXRpb24tNzAwXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51U2VsZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCItdHJhbnNsYXRlLXktZnVsbFwiKTtcbiAgICB9XG4gXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Fycm93RmlsdGVyU2VsZWN0aW9uXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZS0xODBcIik7XG4gIH0sXG4gICovXG5cblxuXG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhY2MuaW5pdCk7XG4iLCIvL2ltcG9ydCAnLi9ib290c3RyYXAuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbi8vaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzXCI7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuIC8vIGltcG9ydCBcIi4vYm9vdHN0cmFwXCI7XG4gLy8gYXNzZXRzL2FwcC5qc1xuaW1wb3J0IFwiLi9hY2MuanNcIjtcbmltcG9ydCBcIi4vYmNrb2ZmLmpzXCI7XG5pbXBvcnQgXCIuL2ltYWdlcy5qc1wiO1xuaW1wb3J0IFwiZmxvd2JpdGVcIjtcbiIsImNvbnN0IGJja29mZiA9IHtcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpc2F0aW9uIGJhY2sgb2ZmIGRlIGJlbm9pdCBcIlxuICAgICAgKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI25hdmlnYXRpb25JZFwiKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJja29mZi5vcGVuU2lkZUJlbm9pdCk7XG5cbiAgICB9LFxuICBcbiAgICBvcGVuU2lkZUJlbm9pdDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCIgdm91cyBldGVzIGJpZW4gZGFucyBvcGVuU2lkZUJlbm9pdCBcIik7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNuYXZpZ2F0aW9uSWRcIilcbiAgICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICBcbiAgICAgIGNvbnN0IHNpZGVCYXJOYXYgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdlNpZGViYXJcIik7XG4gICAgICBjb25zdCBzdHJva2VDb2xvcnMgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZsZWNoZUlkXCIpO1xuICBcbiAgICAgIHNpZGVCYXIgPSBzaWRlQmFyTmF2LmNsYXNzTGlzdC50b2dnbGUoXCJ3LTE2XCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coc2lkZUJhciwgXCJpbmZvMlwiKTtcbiAgXG4gICAgICBpZiAoc2lkZUJhciA9PSB0cnVlKSB7XG4gICAgICAgIHNpZGVCYXJOYXYuY2xhc3NMaXN0LmFkZChcInctMTZcIik7XG4gICAgICAgIHN0cm9rZUNvbG9ycy5jbGFzc0xpc3QucmVtb3ZlKFwic3Ryb2tlLXBpbmstOTAwXCIpO1xuICAgICAgICBzdHJva2VDb2xvcnMuY2xhc3NMaXN0LmFkZChcInN0cm9rZS13aGl0ZVwiKTtcbiAgICAgICAgc2lkZUJhck5hdi5jbGFzc0xpc3QucmVtb3ZlKFwidy01NlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGVCYXJOYXYuY2xhc3NMaXN0LmFkZChcInctNTZcIik7XG4gICAgICAgIHN0cm9rZUNvbG9ycy5jbGFzc0xpc3QuYWRkKFwic3Ryb2tlLXBpbmstOTAwXCIpO1xuICAgICAgICBzdHJva2VDb2xvcnMuY2xhc3NMaXN0LnJlbW92ZShcInN0cm9rZS13aGl0ZVwiKTtcbiAgICAgICAgc2lkZUJhck5hdi5jbGFzc0xpc3QuYWRkKFwiZHVyYXRpb24tNTAwXCIpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG4gIFxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBiY2tvZmYuaW5pdCk7XG4iLCJjb25zdCBpbWFnZXMgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpc3Rpb24gZHUgZmljaGllciBpbWFnZXMuanMgYmFjayBvZmZpY2UgXCIpO1xuXG4gICAgbGV0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWRlbGV0ZV1cIik7IFxuXG4gICAgLy8gSmUgYm91Y2xlIHN1ciBtZXMgbGllbnNcbiAgICAgZm9yICggbGV0IGxpbmsgb2YgbGlua3MpIHtcbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGltYWdlcy5kZWxldGVJbWFnZVByb2R1Y3QpO1xuICAgICAgY29uc29sZS5sb2cobGluayk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICB9LFxuICBkZWxldGVJbWFnZVByb2R1Y3QgOiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwidm91cyBldGVzIGJpZW4gZGFucyBkZWxldGVJbWFnZVByb2R1Y3RcIik7XG4gICAgLy8gSmUgZGVtYW5kZSBjb25maXJtYXRpb25cbiAgICBpZihjb25maXJtKCdWb3VsZXotdm91cyBzdXBwcmltZXIgY2V0dGUgaW1hZ2UgZGUgdm90cmUgcHJkdWl0ID8nKSl7XG4gICAgICAvLyBKJ2Vudm9pZSBtYSByZXF1w6p0ZSBhamF4XG4gICAgICBmZXRjaCh0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIiksIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9LCBcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XCJfdG9rZW5cIjogdGhpcy5kYXRhc2V0LnRva2VufSlcbiAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBpZihkYXRhLnN1Y2Nlc3Mpe1xuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgYWxlcnQoZGF0YS5lcnJvcik7XG4gICAgICB9ICAgIFxuICAgIH0pXG5cbiAgfVxuICB9XG5cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGltYWdlcy5pbml0KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiYWNjIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlTmF2IiwidG9nZ2xlRHJvcENhdGVnb3JpZXMiLCJ0b2dnbGVEcm9wTWFycXVlcyIsInRvZ2dsZURyb3BHZW5yZSIsInRvZ2dsZURyb3BDb3VsZXVycyIsInRvZ2dsZUZpbHRyZU1vYmlsZSIsInRvZ2dsZUZyaWx0ZXJTZWxlY3Rpb24iLCJidXJnZ2VyIiwiY3JvaXgiLCJtZW51TW9iaWxlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlZE1lbnUiLCJhZGQiLCJyZW1vdmUiLCJiY2tvZmYiLCJvcGVuU2lkZUJlbm9pdCIsInNpZGVCYXJOYXYiLCJzdHJva2VDb2xvcnMiLCJzaWRlQmFyIiwiaW1hZ2VzIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGluayIsImRlbGV0ZUltYWdlUHJvZHVjdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbmZpcm0iLCJmZXRjaCIsImdldEF0dHJpYnV0ZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGFzZXQiLCJ0b2tlbiIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsInBhcmVudEVsZW1lbnQiLCJhbGVydCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==