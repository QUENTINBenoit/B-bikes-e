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
    console.log("initialisation back off de benoit ");
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
    document.querySelector("#colorsFiltersCouleur").classList.toggle("text-pink-900");
  },
  toggleFiltreMobile: function toggleFiltreMobile() {
    document.querySelector("#filtreMobile").classList.toggle("rotate-180");
    document.querySelector("#filtre").classList.toggle("hidden");
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
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBRTFCLElBQU1BLEdBQUcsR0FBRztFQUNWQyxJQUFJLEVBQUUsZ0JBQVk7SUFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixDQUFDO0lBQzFDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FDL0M7SUFFREMsUUFBUSxDQUNMQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQzFCQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVOLEdBQUcsQ0FBQ08sU0FBUyxDQUFDO0lBRTNDSCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUNyQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFTixHQUFHLENBQUNRLG9CQUFvQixDQUFDO0lBRXRESixRQUFRLENBQ0xDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUNqQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFTixHQUFHLENBQUNTLGlCQUFpQixDQUFDO0lBQ25ETCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUMvQkMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFTixHQUFHLENBQUNVLGVBQWUsQ0FBQztJQUVqRE4sUUFBUSxDQUNMQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FDbENDLGdCQUFnQixDQUFDLE9BQU8sRUFBRU4sR0FBRyxDQUFDVyxrQkFBa0IsQ0FBQztJQUVwRFAsUUFBUSxDQUNMQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQzlCQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVOLEdBQUcsQ0FBQ1ksa0JBQWtCLENBQUM7SUFFckRSLFFBQVEsQ0FDSkMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQ2pDQyxnQkFBZ0IsQ0FDZixPQUFPLEVBQ1BOLEdBQUcsQ0FBQ2Esc0JBQXNCLENBQzNCO0VBR0wsQ0FBQztFQUVETixTQUFTLEVBQUUscUJBQVk7SUFDckI7SUFDQSxJQUFNTyxPQUFPLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUNwRCxJQUFNVSxLQUFLLEdBQUdYLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNqRCxJQUFNVyxVQUFVLEdBQ2RaLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztJQUV6Q1MsT0FBTyxDQUFDRyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbENILEtBQUssQ0FBQ0UsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBRWhDLElBQU1DLFdBQVcsR0FBR0gsVUFBVSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FDN0MsbUJBQW1CLENBQ3BCO0lBRUQsSUFBSUMsV0FBVyxJQUFJLElBQUksRUFBRTtNQUN2QkgsVUFBVSxDQUFDQyxTQUFTLENBQUNHLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztJQUMvQyxDQUFDLE1BQU07TUFDTEosVUFBVSxDQUFDQyxTQUFTLENBQUNJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztJQUNsRDtFQUNGLENBQUM7RUFFRDtFQUNBYixvQkFBb0IsRUFBRSxnQ0FBWTtJQUNoQ0osUUFBUSxDQUNMQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FDL0JZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUM3QmQsUUFBUSxDQUNMQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FDL0JZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUVuQ2QsUUFBUSxDQUNMQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FDakNZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNqQ2QsUUFBUSxDQUNMQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FDckNZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLG1CQUFtQixDQUFDO0lBQ3hDZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUNyQ1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ2xDZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUN6Q1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsZUFBZSxDQUFDO0VBQ3RDLENBQUM7RUFFRDtFQUNBVCxpQkFBaUIsRUFBRSw2QkFBWTtJQUM3QkwsUUFBUSxDQUNMQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FDckNZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUM3QmQsUUFBUSxDQUNMQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQzlCWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDakNkLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQ2pDWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztJQUN4Q2QsUUFBUSxDQUNMQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FDakNZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNsQ2QsUUFBUSxDQUNMQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FDdENZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGVBQWUsQ0FBQztFQUN0QyxDQUFDO0VBRUQ7RUFDQVIsZUFBZSxFQUFFLDJCQUFZO0lBQzNCTixRQUFRLENBQ0xDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUNwQ1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzdCZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FDNUJZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNqQ2QsUUFBUSxDQUNMQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FDL0JZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLG1CQUFtQixDQUFDO0lBQ3hDZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUMvQlksU0FBUyxDQUFDQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ2xDZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUNwQ1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsZUFBZSxDQUFDO0VBQ3RDLENBQUM7RUFFRDtFQUNBUCxrQkFBa0IsRUFBRSw4QkFBWTtJQUM5QlQsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3JCQyxRQUFRLENBQ0xDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUN2Q1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzdCZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUMvQlksU0FBUyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ2pDZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUNsQ1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsbUJBQW1CLENBQUM7SUFDeENkLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQ2xDWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFFbENkLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQ3RDWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxlQUFlLENBQUM7RUFDdEMsQ0FBQztFQUVETixrQkFBa0IsRUFBRSw4QkFBWTtJQUM5QlIsUUFBUSxDQUNMQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQzlCWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFFakNkLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUN4QlksU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQy9CO0VBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUEsQ0FBQzs7QUFFRGQsUUFBUSxDQUFDRSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRU4sR0FBRyxDQUFDQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTHZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQzBCOztBQUUxQjtBQUNDO0FBQ0E7O0FBS2lCO0FBQ0c7QUFDQTs7Ozs7Ozs7Ozs7QUNwQnJCLElBQU1xQixNQUFNLEdBQUc7RUFDWHJCLElBQUksRUFBRSxnQkFBWTtJQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0NBQW9DLENBQy9DO0lBQ0RDLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUM5QkMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFZ0IsTUFBTSxDQUFDQyxjQUFjLENBQUM7RUFFckQsQ0FBQztFQUVEQSxjQUFjLEVBQUUsMEJBQVk7SUFDMUJyQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQztJQUNuREMsUUFBUSxDQUNMQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQzlCWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFFakMsSUFBTU0sVUFBVSxHQUNkcEIsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLElBQU1vQixZQUFZLEdBQ2hCckIsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBRXJDcUIsT0FBTyxHQUFHRixVQUFVLENBQUNQLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM3Qzs7SUFFQSxJQUFJUSxPQUFPLElBQUksSUFBSSxFQUFFO01BQ25CRixVQUFVLENBQUNQLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUNoQ0ssWUFBWSxDQUFDUixTQUFTLENBQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztNQUNoREksWUFBWSxDQUFDUixTQUFTLENBQUNHLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFDMUNJLFVBQVUsQ0FBQ1AsU0FBUyxDQUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUMsTUFBTTtNQUNMRyxVQUFVLENBQUNQLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUNoQ0ssWUFBWSxDQUFDUixTQUFTLENBQUNHLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztNQUM3Q0ssWUFBWSxDQUFDUixTQUFTLENBQUNJLE1BQU0sQ0FBQyxjQUFjLENBQUM7TUFDN0NHLFVBQVUsQ0FBQ1AsU0FBUyxDQUFDRyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQzFDO0VBQ0Y7QUFDRixDQUFDO0FBR0hoQixRQUFRLENBQUNFLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFZ0IsTUFBTSxDQUFDckIsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QzFELElBQU0wQixNQUFNLEdBQUc7RUFDYjFCLElBQUksRUFBRSxnQkFBWTtJQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsaURBQWlELENBQUM7SUFFOUQsSUFBSXlCLEtBQUssR0FBR3hCLFFBQVEsQ0FBQ3lCLGdCQUFnQixDQUFDLGVBQWUsQ0FBQzs7SUFFdEQ7SUFBQSwyQ0FDbUJELEtBQUs7TUFBQTtJQUFBO01BQXZCLG9EQUF5QjtRQUFBLElBQWZFLElBQUk7UUFDYkEsSUFBSSxDQUFDeEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFcUIsTUFBTSxDQUFDSSxrQkFBa0IsQ0FBQztRQUN6RDdCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDMkIsSUFBSSxDQUFDO01BQ2pCO0lBQUM7TUFBQTtJQUFBO01BQUE7SUFBQTtFQUdMLENBQUM7RUFDREMsa0JBQWtCLEVBQUcsNEJBQVNDLENBQUMsRUFBRTtJQUFBO0lBQy9CQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQjtJQUNBO0lBQ0EsSUFBR0MsT0FBTyxDQUFDLHFEQUFxRCxDQUFDLEVBQUM7TUFDaEU7TUFDQUMsS0FBSyxDQUFDLElBQUksQ0FBQ0MsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQy9CQyxNQUFNLEVBQUUsUUFBUTtRQUNoQkMsT0FBTyxFQUFFO1VBQ1Asa0JBQWtCLEVBQUUsZ0JBQWdCO1VBQ3BDLGNBQWMsRUFBRTtRQUN0QixDQUFDO1FBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7VUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxPQUFPLENBQUNDO1FBQUssQ0FBQztNQUNyRCxDQUFDLENBQUMsQ0FDQ0MsSUFBSSxDQUFDLFVBQUFDLFFBQVE7UUFBQSxPQUFJQSxRQUFRLENBQUNDLElBQUksRUFBRTtNQUFBLEVBQUMsQ0FDakNGLElBQUksQ0FBQyxVQUFBRyxJQUFJLEVBQUk7UUFDWixJQUFHQSxJQUFJLENBQUNDLE9BQU8sRUFBQztVQUNkLEtBQUksQ0FBQ0MsYUFBYSxDQUFDNUIsTUFBTSxFQUFFO1FBQzdCLENBQUMsTUFBSTtVQUNINkIsS0FBSyxDQUFDSCxJQUFJLENBQUNJLEtBQUssQ0FBQztRQUNuQjtNQUNGLENBQUMsQ0FBQztJQUVKO0VBQ0E7QUFFRixDQUFDO0FBRUQvQyxRQUFRLENBQUNFLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFcUIsTUFBTSxDQUFDMUIsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7QUMxQzFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FjYy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9iY2tvZmYuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5cbmNvbnN0IGFjYyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGlzYXRpb24gcGFnZSBhY2N1ZWlsXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGlzYXRpb24gYmFjayBvZmYgZGUgYmVub2l0IFwiXG4gICAgKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ0blwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2MudG9nZ2xlTmF2KTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNhdGVyZ29yaWVzXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjYy50b2dnbGVEcm9wQ2F0ZWdvcmllcyk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25NYXJxdWVzXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjYy50b2dnbGVEcm9wTWFycXVlcyk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duR2VucmVcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjLnRvZ2dsZURyb3BHZW5yZSk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25Db3VsZXVyc1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2MudG9nZ2xlRHJvcENvdWxldXJzKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNmaWx0cmVNb2JpbGVcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjLnRvZ2dsZUZpbHRyZU1vYmlsZSk7XG5cbiAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNmaWx0ZXJTZWxlY3Rpb25cIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIGFjYy50b2dnbGVGcmlsdGVyU2VsZWN0aW9uXG4gICAgICApO1xuXG4gICAgXG4gIH0sXG5cbiAgdG9nZ2xlTmF2OiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmXDqWN1cMOocmF0aW9uIGRlcyBzdmcncydcbiAgICBjb25zdCBidXJnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXJnZXJTdmdcIik7XG4gICAgY29uc3QgY3JvaXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nyb2l4U3ZnXCIpO1xuICAgIGNvbnN0IG1lbnVNb2JpbGUgPVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGVkLW1lbnVcIik7XG5cbiAgICBidXJnZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgY3JvaXguY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcblxuICAgIGNvbnN0IHRvZ2dsZWRNZW51ID0gbWVudU1vYmlsZS5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgXCItdHJhbnNsYXRlLXktZnVsbFwiXG4gICAgKTtcblxuICAgIGlmICh0b2dnbGVkTWVudSA9PSB0cnVlKSB7XG4gICAgICBtZW51TW9iaWxlLmNsYXNzTGlzdC5hZGQoXCItdHJhbnNsYXRlLXktZnVsbFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVudU1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIGZvbmN0aW9uIGRyb3AgZmlsdHJlIGNhdGVnb3JpZXNcbiAgdG9nZ2xlRHJvcENhdGVnb3JpZXM6IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWVudUZpbHRyZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1lbnVGaWx0cmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiZHVyYXRpb24tNTAwXCIpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Fycm93Q2F0ZWdvcmllc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNhdGVyZ29yaWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJhY2tkcm9wLWJsdXItM3hsXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNhdGVyZ29yaWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJnLXdoaXRlLzI1XCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNjb2xvcnNGaWx0ZXJzQ2F0ZWdvcmllc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJ0ZXh0LXBpbmstOTAwXCIpO1xuICB9LFxuXG4gIC8vIGZvbmN0aW9uIGRyb3AgZmlsdHJlIE1hcnF1ZXNcbiAgdG9nZ2xlRHJvcE1hcnF1ZXM6IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWVudUZpbHRyZU1hcnF1ZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Fycm93TWFycXVlc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bk1hcnF1ZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmFja2Ryb3AtYmx1ci0zeGxcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duTWFycXVlc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiZy13aGl0ZS8yNVwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JzRmlsdGVyc01hcnF1ZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwidGV4dC1waW5rLTkwMFwiKTtcbiAgfSxcblxuICAvLyBmb25jdGlvbiBkcm9wIGZpbHRyZSBHZW5yZVxuICB0b2dnbGVEcm9wR2VucmU6IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWVudUZpbHRyZUdlbnJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYXJyb3dHZW5yZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkdlbnJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJhY2tkcm9wLWJsdXItM3hsXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkdlbnJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJnLXdoaXRlLzI1XCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNjb2xvcnNGaWx0ZXJzR2VucmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwidGV4dC1waW5rLTkwMFwiKTtcbiAgfSxcblxuICAvLyBmb25jdGlvbiBkcm9wIGZpbHRyZSBDb3VsZXVyc1xuICB0b2dnbGVEcm9wQ291bGV1cnM6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImJlbm9pdFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWVudUZpbHRyZUNvdWxldXJzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYXJyb3dDb3VsZXVyc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNvdWxldXJzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJhY2tkcm9wLWJsdXItM3hsXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNvdWxldXJzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJnLXdoaXRlLzI1XCIpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yc0ZpbHRlcnNDb3VsZXVyXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInRleHQtcGluay05MDBcIik7XG4gIH0sXG5cbiAgdG9nZ2xlRmlsdHJlTW9iaWxlOiBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2ZpbHRyZU1vYmlsZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2ZpbHRyZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0sXG4gIC8qXG4gIHRvZ2dsZUZyaWx0ZXJTZWxlY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBtZW51U2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI3N1Ym1lbnVGaWx0ZXJTZWxlY3Rpb25cIlxuICAgICk7XG4gICAgY29uc3QgdG9nZ2xlRmlsdGVyU2VsZWN0aW9uID1cbiAgICAgIG1lbnVTZWxlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZShcIi10cmFuc2xhdGUteS1mdWxsXCIpO1xuXG4gICAgaWYgKHRvZ2dsZUZpbHRlclNlbGVjdGlvbiA9PSB0cnVlKSB7XG4gICAgICBtZW51U2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCItdHJhbnNsYXRlLXktZnVsbFwiKTtcbiAgICAgIG1lbnVTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZChcImR1cmF0aW9uLTcwMFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVudVNlbGVjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XG4gICAgfVxuIFxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNhcnJvd0ZpbHRlclNlbGVjdGlvblwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICB9LFxuICAqL1xuXG5cblxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYWNjLmluaXQpO1xuIiwiLy9pbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuIC8vIGltcG9ydCBcIi4vYm9vdHN0cmFwXCI7XG4gLy8gYXNzZXRzL2FwcC5qc1xuXG5cblxuXG5pbXBvcnQgXCIuL2FjYy5qc1wiO1xuaW1wb3J0IFwiLi9iY2tvZmYuanNcIjtcbmltcG9ydCBcIi4vaW1hZ2VzLmpzXCI7XG5pbXBvcnQgXCJmbG93Yml0ZVwiO1xuIiwiY29uc3QgYmNrb2ZmID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGlzYXRpb24gYmFjayBvZmYgZGUgYmVub2l0IFwiXG4gICAgICApO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjbmF2aWdhdGlvbklkXCIpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYmNrb2ZmLm9wZW5TaWRlQmVub2l0KTtcblxuICAgIH0sXG4gIFxuICAgIG9wZW5TaWRlQmVub2l0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIiB2b3VzIGV0ZXMgYmllbiBkYW5zIG9wZW5TaWRlQmVub2l0IFwiKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI25hdmlnYXRpb25JZFwiKVxuICAgICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZS0xODBcIik7XG4gIFxuICAgICAgY29uc3Qgc2lkZUJhck5hdiA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2U2lkZWJhclwiKTtcbiAgICAgIGNvbnN0IHN0cm9rZUNvbG9ycyA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmxlY2hlSWRcIik7XG4gIFxuICAgICAgc2lkZUJhciA9IHNpZGVCYXJOYXYuY2xhc3NMaXN0LnRvZ2dsZShcInctMTZcIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzaWRlQmFyLCBcImluZm8yXCIpO1xuICBcbiAgICAgIGlmIChzaWRlQmFyID09IHRydWUpIHtcbiAgICAgICAgc2lkZUJhck5hdi5jbGFzc0xpc3QuYWRkKFwidy0xNlwiKTtcbiAgICAgICAgc3Ryb2tlQ29sb3JzLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJva2UtcGluay05MDBcIik7XG4gICAgICAgIHN0cm9rZUNvbG9ycy5jbGFzc0xpc3QuYWRkKFwic3Ryb2tlLXdoaXRlXCIpO1xuICAgICAgICBzaWRlQmFyTmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJ3LTU2XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZUJhck5hdi5jbGFzc0xpc3QuYWRkKFwidy01NlwiKTtcbiAgICAgICAgc3Ryb2tlQ29sb3JzLmNsYXNzTGlzdC5hZGQoXCJzdHJva2UtcGluay05MDBcIik7XG4gICAgICAgIHN0cm9rZUNvbG9ycy5jbGFzc0xpc3QucmVtb3ZlKFwic3Ryb2tlLXdoaXRlXCIpO1xuICAgICAgICBzaWRlQmFyTmF2LmNsYXNzTGlzdC5hZGQoXCJkdXJhdGlvbi01MDBcIik7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbiAgXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGJja29mZi5pbml0KTtcbiIsImNvbnN0IGltYWdlcyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGlzdGlvbiBkdSBmaWNoaWVyIGltYWdlcy5qcyBiYWNrIG9mZmljZSBcIik7XG5cbiAgICBsZXQgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZGVsZXRlXVwiKTsgXG5cbiAgICAvLyBKZSBib3VjbGUgc3VyIG1lcyBsaWVuc1xuICAgICBmb3IgKCBsZXQgbGluayBvZiBsaW5rcykge1xuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW1hZ2VzLmRlbGV0ZUltYWdlUHJvZHVjdCk7XG4gICAgICBjb25zb2xlLmxvZyhsaW5rKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gIH0sXG4gIGRlbGV0ZUltYWdlUHJvZHVjdCA6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJ2b3VzIGV0ZXMgYmllbiBkYW5zIGRlbGV0ZUltYWdlUHJvZHVjdFwiKTtcbiAgICAvLyBKZSBkZW1hbmRlIGNvbmZpcm1hdGlvblxuICAgIGlmKGNvbmZpcm0oJ1ZvdWxlei12b3VzIHN1cHByaW1lciBjZXR0ZSBpbWFnZSBkZSB2b3RyZSBwcmR1aXQgPycpKXtcbiAgICAgIC8vIEonZW52b2llIG1hIHJlcXXDqnRlIGFqYXhcbiAgICAgIGZldGNoKHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0sIFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcIl90b2tlblwiOiB0aGlzLmRhdGFzZXQudG9rZW59KVxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGlmKGRhdGEuc3VjY2Vzcyl7XG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBhbGVydChkYXRhLmVycm9yKTtcbiAgICAgIH0gICAgXG4gICAgfSlcblxuICB9XG4gIH1cblxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW1hZ2VzLmluaXQpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJhY2MiLCJpbml0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVOYXYiLCJ0b2dnbGVEcm9wQ2F0ZWdvcmllcyIsInRvZ2dsZURyb3BNYXJxdWVzIiwidG9nZ2xlRHJvcEdlbnJlIiwidG9nZ2xlRHJvcENvdWxldXJzIiwidG9nZ2xlRmlsdHJlTW9iaWxlIiwidG9nZ2xlRnJpbHRlclNlbGVjdGlvbiIsImJ1cmdnZXIiLCJjcm9peCIsIm1lbnVNb2JpbGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVkTWVudSIsImFkZCIsInJlbW92ZSIsImJja29mZiIsIm9wZW5TaWRlQmVub2l0Iiwic2lkZUJhck5hdiIsInN0cm9rZUNvbG9ycyIsInNpZGVCYXIiLCJpbWFnZXMiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwiZGVsZXRlSW1hZ2VQcm9kdWN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uZmlybSIsImZldGNoIiwiZ2V0QXR0cmlidXRlIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YXNldCIsInRva2VuIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwicGFyZW50RWxlbWVudCIsImFsZXJ0IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9