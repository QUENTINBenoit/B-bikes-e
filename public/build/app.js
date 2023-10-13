(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_dropzone_dist_style_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-dropzone/dist/style.min.css */ "./vendor/symfony/ux-dropzone/assets/dist/style.min.css");
/* harmony import */ var _symfony_ux_live_component_dist_live_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live.min.css */ "./vendor/symfony/ux-live-component/assets/dist/live.min.css");
/* harmony import */ var _symfony_ux_toggle_password_dist_style_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symfony/ux-toggle-password/dist/style.min.css */ "./vendor/symfony/ux-toggle-password/assets/dist/style.min.css");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-dropzone--dropzone': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-dropzone/dist/controller.js */ "./vendor/symfony/ux-dropzone/assets/dist/controller.js")),
  'live': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-live-component/dist/live_controller.js */ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js")),
  'symfony--ux-svelte--svelte': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-svelte/dist/render_controller.js */ "./vendor/symfony/ux-svelte/assets/dist/render_controller.js")),
  'symfony--ux-swup--swup': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-swup/dist/controller.js */ "./vendor/symfony/ux-swup/assets/dist/controller.js")),
  'symfony--ux-toggle-password--toggle-password': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-toggle-password/dist/controller.js */ "./vendor/symfony/ux-toggle-password/assets/dist/controller.js")),
  'symfony--ux-turbo--turbo-core': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-turbo/dist/turbo_controller.js */ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!

export default class extends Controller {
    connect() {
        this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
}
 */

/***/ }),

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

    /*  document
        .querySelector("#filterSelection")
        .addEventListener(
          "click",
          acc.toggleFrilterSelection
        );*/
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
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _acc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acc.js */ "./assets/acc.js");
/* harmony import */ var _bckoff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bckoff.js */ "./assets/bckoff.js");
/* harmony import */ var _bckoff_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bckoff_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images.js */ "./assets/images.js");
/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flowbite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flowbite */ "./node_modules/flowbite/lib/esm/index.js");
//import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


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

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

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

/***/ "./vendor/symfony/ux-dropzone/assets/dist/controller.js":
/*!**************************************************************!*\
  !*** ./vendor/symfony/ux-dropzone/assets/dist/controller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    _classCallCheck(this, default_1);
    return _super.apply(this, arguments);
  }
  _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      var _this = this;
      this.clear();
      this.previewClearButtonTarget.addEventListener('click', function () {
        return _this.clear();
      });
      this.inputTarget.addEventListener('change', function (event) {
        return _this.onInputChange(event);
      });
      this.dispatchEvent('connect');
    }
  }, {
    key: "clear",
    value: function clear() {
      this.inputTarget.value = '';
      this.inputTarget.style.display = 'block';
      this.placeholderTarget.style.display = 'block';
      this.previewTarget.style.display = 'none';
      this.previewImageTarget.style.display = 'none';
      this.previewImageTarget.style.backgroundImage = 'none';
      this.previewFilenameTarget.textContent = '';
      this.dispatchEvent('clear');
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(event) {
      var file = event.target.files[0];
      if (typeof file === 'undefined') {
        return;
      }
      this.inputTarget.style.display = 'none';
      this.placeholderTarget.style.display = 'none';
      this.previewFilenameTarget.textContent = file.name;
      this.previewTarget.style.display = 'flex';
      this.previewImageTarget.style.display = 'none';
      if (file.type && file.type.indexOf('image') !== -1) {
        this._populateImagePreview(file);
      }
      this.dispatchEvent('change', file);
    }
  }, {
    key: "_populateImagePreview",
    value: function _populateImagePreview(file) {
      var _this2 = this;
      if (typeof FileReader === 'undefined') {
        return;
      }
      var reader = new FileReader();
      reader.addEventListener('load', function (event) {
        _this2.previewImageTarget.style.display = 'block';
        _this2.previewImageTarget.style.backgroundImage = 'url("' + event.target.result + '")';
      });
      reader.readAsDataURL(file);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.dispatch(name, {
        detail: payload,
        prefix: 'dropzone'
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_18__.Controller);
default_1.targets = ['input', 'placeholder', 'preview', 'previewClearButton', 'previewFilename', 'previewImage'];


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js":
/*!*************************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live_controller.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "default": () => (/* binding */ LiveControllerDefault),
/* harmony export */   "getComponent": () => (/* binding */ getComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

























































function parseDirectives(content) {
  var directives = [];
  if (!content) {
    return directives;
  }
  var currentActionName = '';
  var currentArgumentName = '';
  var currentArgumentValue = '';
  var currentArguments = [];
  var currentNamedArguments = {};
  var currentModifiers = [];
  var state = 'action';
  var getLastActionName = function getLastActionName() {
    if (currentActionName) {
      return currentActionName;
    }
    if (directives.length === 0) {
      throw new Error('Could not find any directives');
    }
    return directives[directives.length - 1].action;
  };
  var pushInstruction = function pushInstruction() {
    directives.push({
      action: currentActionName,
      args: currentArguments,
      named: currentNamedArguments,
      modifiers: currentModifiers,
      getString: function getString() {
        return content;
      }
    });
    currentActionName = '';
    currentArgumentName = '';
    currentArgumentValue = '';
    currentArguments = [];
    currentNamedArguments = {};
    currentModifiers = [];
    state = 'action';
  };
  var pushArgument = function pushArgument() {
    var mixedArgTypesError = function mixedArgTypesError() {
      throw new Error("Normal and named arguments cannot be mixed inside \"".concat(currentActionName, "()\""));
    };
    if (currentArgumentName) {
      if (currentArguments.length > 0) {
        mixedArgTypesError();
      }
      currentNamedArguments[currentArgumentName.trim()] = currentArgumentValue;
    } else {
      if (Object.keys(currentNamedArguments).length > 0) {
        mixedArgTypesError();
      }
      currentArguments.push(currentArgumentValue.trim());
    }
    currentArgumentName = '';
    currentArgumentValue = '';
  };
  var pushModifier = function pushModifier() {
    if (currentArguments.length > 1) {
      throw new Error("The modifier \"".concat(currentActionName, "()\" does not support multiple arguments."));
    }
    if (Object.keys(currentNamedArguments).length > 0) {
      throw new Error("The modifier \"".concat(currentActionName, "()\" does not support named arguments."));
    }
    currentModifiers.push({
      name: currentActionName,
      value: currentArguments.length > 0 ? currentArguments[0] : null
    });
    currentActionName = '';
    currentArgumentName = '';
    currentArguments = [];
    state = 'action';
  };
  for (var i = 0; i < content.length; i++) {
    var _char = content[i];
    switch (state) {
      case 'action':
        if (_char === '(') {
          state = 'arguments';
          break;
        }
        if (_char === ' ') {
          if (currentActionName) {
            pushInstruction();
          }
          break;
        }
        if (_char === '|') {
          pushModifier();
          break;
        }
        currentActionName += _char;
        break;
      case 'arguments':
        if (_char === ')') {
          pushArgument();
          state = 'after_arguments';
          break;
        }
        if (_char === ',') {
          pushArgument();
          break;
        }
        if (_char === '=') {
          currentArgumentName = currentArgumentValue;
          currentArgumentValue = '';
          break;
        }
        currentArgumentValue += _char;
        break;
      case 'after_arguments':
        if (_char === '|') {
          pushModifier();
          break;
        }
        if (_char !== ' ') {
          throw new Error("Missing space after ".concat(getLastActionName(), "()"));
        }
        pushInstruction();
        break;
    }
  }
  switch (state) {
    case 'action':
    case 'after_arguments':
      if (currentActionName) {
        pushInstruction();
      }
      break;
    default:
      throw new Error("Did you forget to add a closing \")\" after \"".concat(currentActionName, "\"?"));
  }
  return directives;
}
function combineSpacedArray(parts) {
  var finalParts = [];
  parts.forEach(function (part) {
    finalParts.push.apply(finalParts, _toConsumableArray(part.split(' ')));
  });
  return finalParts;
}
function normalizeModelName(model) {
  return model.replace(/\[]$/, '').split('[').map(function (s) {
    return s.replace(']', '');
  }).join('.');
}
function getValueFromElement(element, valueStore) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'checkbox') {
      var modelNameData = getModelDirectiveFromElement(element, false);
      if (modelNameData !== null) {
        var modelValue = valueStore.get(modelNameData.action);
        if (Array.isArray(modelValue)) {
          return getMultipleCheckboxValue(element, modelValue);
        }
      }
      if (element.hasAttribute('value')) {
        return element.checked ? element.getAttribute('value') : null;
      }
      return element.checked;
    }
    return inputValue(element);
  }
  if (element instanceof HTMLSelectElement) {
    if (element.multiple) {
      return Array.from(element.selectedOptions).map(function (el) {
        return el.value;
      });
    }
    return element.value;
  }
  if (element.dataset.value) {
    return element.dataset.value;
  }
  if ('value' in element) {
    return element.value;
  }
  if (element.hasAttribute('value')) {
    return element.getAttribute('value');
  }
  return null;
}
function setValueOnElement(element, value) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'file') {
      return;
    }
    if (element.type === 'radio') {
      element.checked = element.value == value;
      return;
    }
    if (element.type === 'checkbox') {
      if (Array.isArray(value)) {
        var valueFound = false;
        value.forEach(function (val) {
          if (val == element.value) {
            valueFound = true;
          }
        });
        element.checked = valueFound;
      } else {
        if (element.hasAttribute('value')) {
          element.checked = element.value == value;
        } else {
          element.checked = value;
        }
      }
      return;
    }
  }
  if (element instanceof HTMLSelectElement) {
    var arrayWrappedValue = [].concat(value).map(function (value) {
      return value + '';
    });
    Array.from(element.options).forEach(function (option) {
      option.selected = arrayWrappedValue.includes(option.value);
    });
    return;
  }
  value = value === undefined ? '' : value;
  element.value = value;
}
function getAllModelDirectiveFromElements(element) {
  if (!element.dataset.model) {
    return [];
  }
  var directives = parseDirectives(element.dataset.model);
  directives.forEach(function (directive) {
    if (directive.args.length > 0 || directive.named.length > 0) {
      throw new Error("The data-model=\"".concat(element.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
    }
    directive.action = normalizeModelName(directive.action);
  });
  return directives;
}
function getModelDirectiveFromElement(element) {
  var throwOnMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dataModelDirectives = getAllModelDirectiveFromElements(element);
  if (dataModelDirectives.length > 0) {
    return dataModelDirectives[0];
  }
  if (element.getAttribute('name')) {
    var formElement = element.closest('form');
    if (formElement && 'model' in formElement.dataset) {
      var directives = parseDirectives(formElement.dataset.model || '*');
      var directive = directives[0];
      if (directive.args.length > 0 || directive.named.length > 0) {
        throw new Error("The data-model=\"".concat(formElement.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
      }
      directive.action = normalizeModelName(element.getAttribute('name'));
      return directive;
    }
  }
  if (!throwOnMissing) {
    return null;
  }
  throw new Error("Cannot determine the model name for \"".concat(getElementAsTagText(element), "\": the element must either have a \"data-model\" (or \"name\" attribute living inside a <form data-model=\"*\">)."));
}
function elementBelongsToThisComponent(element, component) {
  if (component.element === element) {
    return true;
  }
  if (!component.element.contains(element)) {
    return false;
  }
  var foundChildComponent = false;
  component.getChildren().forEach(function (childComponent) {
    if (foundChildComponent) {
      return;
    }
    if (childComponent.element === element || childComponent.element.contains(element)) {
      foundChildComponent = true;
    }
  });
  return !foundChildComponent;
}
function cloneHTMLElement(element) {
  var newElement = element.cloneNode(true);
  if (!(newElement instanceof HTMLElement)) {
    throw new Error('Could not clone element');
  }
  return newElement;
}
function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  if (template.content.childElementCount > 1) {
    throw new Error("Component HTML contains ".concat(template.content.childElementCount, " elements, but only 1 root element is allowed."));
  }
  var child = template.content.firstElementChild;
  if (!child) {
    throw new Error('Child not found');
  }
  if (!(child instanceof HTMLElement)) {
    throw new Error("Created element is not an HTMLElement: ".concat(html.trim()));
  }
  return child;
}
function getElementAsTagText(element) {
  return element.innerHTML ? element.outerHTML.slice(0, element.outerHTML.indexOf(element.innerHTML)) : element.outerHTML;
}
var getMultipleCheckboxValue = function getMultipleCheckboxValue(element, currentValues) {
  var finalValues = _toConsumableArray(currentValues);
  var value = inputValue(element);
  var index = currentValues.indexOf(value);
  if (element.checked) {
    if (index === -1) {
      finalValues.push(value);
    }
    return finalValues;
  }
  if (index > -1) {
    finalValues.splice(index, 1);
  }
  return finalValues;
};
var inputValue = function inputValue(element) {
  return element.dataset.value ? element.dataset.value : element.value;
};
function getDeepData(data, propertyPath) {
  var _parseDeepData = parseDeepData(data, propertyPath),
    currentLevelData = _parseDeepData.currentLevelData,
    finalKey = _parseDeepData.finalKey;
  if (currentLevelData === undefined) {
    return undefined;
  }
  return currentLevelData[finalKey];
}
var parseDeepData = function parseDeepData(data, propertyPath) {
  var finalData = JSON.parse(JSON.stringify(data));
  var currentLevelData = finalData;
  var parts = propertyPath.split('.');
  for (var i = 0; i < parts.length - 1; i++) {
    currentLevelData = currentLevelData[parts[i]];
  }
  var finalKey = parts[parts.length - 1];
  return {
    currentLevelData: currentLevelData,
    finalData: finalData,
    finalKey: finalKey,
    parts: parts
  };
};
var ValueStore = /*#__PURE__*/function () {
  function ValueStore(props) {
    _classCallCheck(this, ValueStore);
    this.props = {};
    this.dirtyProps = {};
    this.pendingProps = {};
    this.updatedPropsFromParent = {};
    this.props = props;
  }
  _createClass(ValueStore, [{
    key: "get",
    value: function get(name) {
      var normalizedName = normalizeModelName(name);
      if (this.dirtyProps[normalizedName] !== undefined) {
        return this.dirtyProps[normalizedName];
      }
      if (this.pendingProps[normalizedName] !== undefined) {
        return this.pendingProps[normalizedName];
      }
      if (this.props[normalizedName] !== undefined) {
        return this.props[normalizedName];
      }
      return getDeepData(this.props, normalizedName);
    }
  }, {
    key: "has",
    value: function has(name) {
      return this.get(name) !== undefined;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var normalizedName = normalizeModelName(name);
      var currentValue = this.get(normalizedName);
      if (currentValue === value) {
        return false;
      }
      this.dirtyProps[normalizedName] = value;
      return true;
    }
  }, {
    key: "getOriginalProps",
    value: function getOriginalProps() {
      return Object.assign({}, this.props);
    }
  }, {
    key: "getDirtyProps",
    value: function getDirtyProps() {
      return Object.assign({}, this.dirtyProps);
    }
  }, {
    key: "getUpdatedPropsFromParent",
    value: function getUpdatedPropsFromParent() {
      return Object.assign({}, this.updatedPropsFromParent);
    }
  }, {
    key: "flushDirtyPropsToPending",
    value: function flushDirtyPropsToPending() {
      this.pendingProps = Object.assign({}, this.dirtyProps);
      this.dirtyProps = {};
    }
  }, {
    key: "reinitializeAllProps",
    value: function reinitializeAllProps(props) {
      this.props = props;
      this.updatedPropsFromParent = {};
      this.pendingProps = {};
    }
  }, {
    key: "pushPendingPropsBackToDirty",
    value: function pushPendingPropsBackToDirty() {
      this.dirtyProps = Object.assign(Object.assign({}, this.pendingProps), this.dirtyProps);
      this.pendingProps = {};
    }
  }, {
    key: "storeNewPropsFromParent",
    value: function storeNewPropsFromParent(props) {
      var changed = false;
      for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        var currentValue = this.get(key);
        if (currentValue !== value) {
          changed = true;
        }
      }
      if (changed) {
        this.updatedPropsFromParent = props;
      }
      return changed;
    }
  }]);
  return ValueStore;
}();
var DOCUMENT_FRAGMENT_NODE = 11;
function morphAttrs(fromNode, toNode) {
  var toNodeAttrs = toNode.attributes;
  var attr;
  var attrName;
  var attrNamespaceURI;
  var attrValue;
  var fromValue;

  // document-fragments dont have attributes so lets not do anything
  if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
    return;
  }

  // update attributes on original DOM element
  for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
    attr = toNodeAttrs[i];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    attrValue = attr.value;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
      if (fromValue !== attrValue) {
        if (attr.prefix === 'xmlns') {
          attrName = attr.name; // It's not allowed to set an attribute with the XMLNS namespace without specifying the `xmlns` prefix
        }

        fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
      }
    } else {
      fromValue = fromNode.getAttribute(attrName);
      if (fromValue !== attrValue) {
        fromNode.setAttribute(attrName, attrValue);
      }
    }
  }

  // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.
  var fromNodeAttrs = fromNode.attributes;
  for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
    attr = fromNodeAttrs[d];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
        fromNode.removeAttributeNS(attrNamespaceURI, attrName);
      }
    } else {
      if (!toNode.hasAttribute(attrName)) {
        fromNode.removeAttribute(attrName);
      }
    }
  }
}
var range; // Create a range object for efficently rendering strings to elements.
var NS_XHTML = 'http://www.w3.org/1999/xhtml';
var doc = typeof document === 'undefined' ? undefined : document;
var HAS_TEMPLATE_SUPPORT = !!doc && 'content' in doc.createElement('template');
var HAS_RANGE_SUPPORT = !!doc && doc.createRange && 'createContextualFragment' in doc.createRange();
function createFragmentFromTemplate(str) {
  var template = doc.createElement('template');
  template.innerHTML = str;
  return template.content.childNodes[0];
}
function createFragmentFromRange(str) {
  if (!range) {
    range = doc.createRange();
    range.selectNode(doc.body);
  }
  var fragment = range.createContextualFragment(str);
  return fragment.childNodes[0];
}
function createFragmentFromWrap(str) {
  var fragment = doc.createElement('body');
  fragment.innerHTML = str;
  return fragment.childNodes[0];
}

/**
 * This is about the same
 * var html = new DOMParser().parseFromString(str, 'text/html');
 * return html.body.firstChild;
 *
 * @method toElement
 * @param {String} str
 */
function toElement(str) {
  str = str.trim();
  if (HAS_TEMPLATE_SUPPORT) {
    // avoid restrictions on content for things like `<tr><th>Hi</th></tr>` which
    // createContextualFragment doesn't support
    // <template> support not available in IE
    return createFragmentFromTemplate(str);
  } else if (HAS_RANGE_SUPPORT) {
    return createFragmentFromRange(str);
  }
  return createFragmentFromWrap(str);
}

/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */
function compareNodeNames(fromEl, toEl) {
  var fromNodeName = fromEl.nodeName;
  var toNodeName = toEl.nodeName;
  var fromCodeStart, toCodeStart;
  if (fromNodeName === toNodeName) {
    return true;
  }
  fromCodeStart = fromNodeName.charCodeAt(0);
  toCodeStart = toNodeName.charCodeAt(0);

  // If the target element is a virtual DOM node or SVG node then we may
  // need to normalize the tag name before comparing. Normal HTML elements that are
  // in the "http://www.w3.org/1999/xhtml"
  // are converted to upper case
  if (fromCodeStart <= 90 && toCodeStart >= 97) {
    // from is upper and to is lower
    return fromNodeName === toNodeName.toUpperCase();
  } else if (toCodeStart <= 90 && fromCodeStart >= 97) {
    // to is upper and from is lower
    return toNodeName === fromNodeName.toUpperCase();
  } else {
    return false;
  }
}

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
  return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
  var curChild = fromEl.firstChild;
  while (curChild) {
    var nextChild = curChild.nextSibling;
    toEl.appendChild(curChild);
    curChild = nextChild;
  }
  return toEl;
}
function syncBooleanAttrProp(fromEl, toEl, name) {
  if (fromEl[name] !== toEl[name]) {
    fromEl[name] = toEl[name];
    if (fromEl[name]) {
      fromEl.setAttribute(name, '');
    } else {
      fromEl.removeAttribute(name);
    }
  }
}
var specialElHandlers = {
  OPTION: function OPTION(fromEl, toEl) {
    var parentNode = fromEl.parentNode;
    if (parentNode) {
      var parentName = parentNode.nodeName.toUpperCase();
      if (parentName === 'OPTGROUP') {
        parentNode = parentNode.parentNode;
        parentName = parentNode && parentNode.nodeName.toUpperCase();
      }
      if (parentName === 'SELECT' && !parentNode.hasAttribute('multiple')) {
        if (fromEl.hasAttribute('selected') && !toEl.selected) {
          // Workaround for MS Edge bug where the 'selected' attribute can only be
          // removed if set to a non-empty value:
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12087679/
          fromEl.setAttribute('selected', 'selected');
          fromEl.removeAttribute('selected');
        }
        // We have to reset select element's selectedIndex to -1, otherwise setting
        // fromEl.selected using the syncBooleanAttrProp below has no effect.
        // The correct selectedIndex will be set in the SELECT special handler below.
        parentNode.selectedIndex = -1;
      }
    }
    syncBooleanAttrProp(fromEl, toEl, 'selected');
  },
  /**
   * The "value" attribute is special for the <input> element since it sets
   * the initial value. Changing the "value" attribute without changing the
   * "value" property will have no effect since it is only used to the set the
   * initial value.  Similar for the "checked" attribute, and "disabled".
   */
  INPUT: function INPUT(fromEl, toEl) {
    syncBooleanAttrProp(fromEl, toEl, 'checked');
    syncBooleanAttrProp(fromEl, toEl, 'disabled');
    if (fromEl.value !== toEl.value) {
      fromEl.value = toEl.value;
    }
    if (!toEl.hasAttribute('value')) {
      fromEl.removeAttribute('value');
    }
  },
  TEXTAREA: function TEXTAREA(fromEl, toEl) {
    var newValue = toEl.value;
    if (fromEl.value !== newValue) {
      fromEl.value = newValue;
    }
    var firstChild = fromEl.firstChild;
    if (firstChild) {
      // Needed for IE. Apparently IE sets the placeholder as the
      // node value and vise versa. This ignores an empty update.
      var oldValue = firstChild.nodeValue;
      if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) {
        return;
      }
      firstChild.nodeValue = newValue;
    }
  },
  SELECT: function SELECT(fromEl, toEl) {
    if (!toEl.hasAttribute('multiple')) {
      var selectedIndex = -1;
      var i = 0;
      // We have to loop through children of fromEl, not toEl since nodes can be moved
      // from toEl to fromEl directly when morphing.
      // At the time this special handler is invoked, all children have already been morphed
      // and appended to / removed from fromEl, so using fromEl here is safe and correct.
      var curChild = fromEl.firstChild;
      var optgroup;
      var nodeName;
      while (curChild) {
        nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
        if (nodeName === 'OPTGROUP') {
          optgroup = curChild;
          curChild = optgroup.firstChild;
        } else {
          if (nodeName === 'OPTION') {
            if (curChild.hasAttribute('selected')) {
              selectedIndex = i;
              break;
            }
            i++;
          }
          curChild = curChild.nextSibling;
          if (!curChild && optgroup) {
            curChild = optgroup.nextSibling;
            optgroup = null;
          }
        }
      }
      fromEl.selectedIndex = selectedIndex;
    }
  }
};
var ELEMENT_NODE = 1;
var DOCUMENT_FRAGMENT_NODE$1 = 11;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
function noop() {}
function defaultGetNodeKey(node) {
  if (node) {
    return node.getAttribute && node.getAttribute('id') || node.id;
  }
}
function morphdomFactory(morphAttrs) {
  return function morphdom(fromNode, toNode, options) {
    if (!options) {
      options = {};
    }
    if (typeof toNode === 'string') {
      if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML' || fromNode.nodeName === 'BODY') {
        var toNodeHtml = toNode;
        toNode = doc.createElement('html');
        toNode.innerHTML = toNodeHtml;
      } else {
        toNode = toElement(toNode);
      }
    } else if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
      toNode = toNode.firstElementChild;
    }
    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
    var onNodeAdded = options.onNodeAdded || noop;
    var onBeforeElUpdated = options.onBeforeElUpdated || noop;
    var onElUpdated = options.onElUpdated || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
    var skipFromChildren = options.skipFromChildren || noop;
    var addChild = options.addChild || function (parent, child) {
      return parent.appendChild(child);
    };
    var childrenOnly = options.childrenOnly === true;

    // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
    var fromNodesLookup = Object.create(null);
    var keyedRemovalList = [];
    function addKeyedRemoval(key) {
      keyedRemovalList.push(key);
    }
    function walkDiscardedChildNodes(node, skipKeyedNodes) {
      if (node.nodeType === ELEMENT_NODE) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = undefined;
          if (skipKeyedNodes && (key = getNodeKey(curChild))) {
            // If we are skipping keyed nodes then we add the key
            // to a list so that it can be handled at the very end.
            addKeyedRemoval(key);
          } else {
            // Only report the node as discarded if it is not keyed. We do this because
            // at the end we loop through all keyed elements that were unmatched
            // and then discard them in one final pass.
            onNodeDiscarded(curChild);
            if (curChild.firstChild) {
              walkDiscardedChildNodes(curChild, skipKeyedNodes);
            }
          }
          curChild = curChild.nextSibling;
        }
      }
    }

    /**
    * Removes a DOM node out of the original DOM
    *
    * @param  {Node} node The node to remove
    * @param  {Node} parentNode The nodes parent
    * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
    * @return {undefined}
    */
    function removeNode(node, parentNode, skipKeyedNodes) {
      if (onBeforeNodeDiscarded(node) === false) {
        return;
      }
      if (parentNode) {
        parentNode.removeChild(node);
      }
      onNodeDiscarded(node);
      walkDiscardedChildNodes(node, skipKeyedNodes);
    }

    // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
    // function indexTree(root) {
    //     var treeWalker = document.createTreeWalker(
    //         root,
    //         NodeFilter.SHOW_ELEMENT);
    //
    //     var el;
    //     while((el = treeWalker.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }

    // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
    //
    // function indexTree(node) {
    //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
    //     var el;
    //     while((el = nodeIterator.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }

    function indexTree(node) {
      if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = getNodeKey(curChild);
          if (key) {
            fromNodesLookup[key] = curChild;
          }

          // Walk recursively
          indexTree(curChild);
          curChild = curChild.nextSibling;
        }
      }
    }
    indexTree(fromNode);
    function handleNodeAdded(el) {
      onNodeAdded(el);
      var curChild = el.firstChild;
      while (curChild) {
        var nextSibling = curChild.nextSibling;
        var key = getNodeKey(curChild);
        if (key) {
          var unmatchedFromEl = fromNodesLookup[key];
          // if we find a duplicate #id node in cache, replace `el` with cache value
          // and morph it to the child node.
          if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
            curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
            morphEl(unmatchedFromEl, curChild);
          } else {
            handleNodeAdded(curChild);
          }
        } else {
          // recursively call for curChild and it's children to see if we find something in
          // fromNodesLookup
          handleNodeAdded(curChild);
        }
        curChild = nextSibling;
      }
    }
    function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
      // We have processed all of the "to nodes". If curFromNodeChild is
      // non-null then we still have some from nodes left over that need
      // to be removed
      while (curFromNodeChild) {
        var fromNextSibling = curFromNodeChild.nextSibling;
        if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
          // Since the node is keyed it might be matched up later so we defer
          // the actual removal to later
          addKeyedRemoval(curFromNodeKey);
        } else {
          // NOTE: we skip nested keyed nodes from being removed since there is
          //       still a chance they will be matched up later
          removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
        }

        curFromNodeChild = fromNextSibling;
      }
    }
    function morphEl(fromEl, toEl, childrenOnly) {
      var toElKey = getNodeKey(toEl);
      if (toElKey) {
        // If an element with an ID is being morphed then it will be in the final
        // DOM so clear it out of the saved elements collection
        delete fromNodesLookup[toElKey];
      }
      if (!childrenOnly) {
        // optional
        if (onBeforeElUpdated(fromEl, toEl) === false) {
          return;
        }

        // update attributes on original DOM element first
        morphAttrs(fromEl, toEl);
        // optional
        onElUpdated(fromEl);
        if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
          return;
        }
      }
      if (fromEl.nodeName !== 'TEXTAREA') {
        morphChildren(fromEl, toEl);
      } else {
        specialElHandlers.TEXTAREA(fromEl, toEl);
      }
    }
    function morphChildren(fromEl, toEl) {
      var skipFrom = skipFromChildren(fromEl);
      var curToNodeChild = toEl.firstChild;
      var curFromNodeChild = fromEl.firstChild;
      var curToNodeKey;
      var curFromNodeKey;
      var fromNextSibling;
      var toNextSibling;
      var matchingFromEl;

      // walk the children
      outer: while (curToNodeChild) {
        toNextSibling = curToNodeChild.nextSibling;
        curToNodeKey = getNodeKey(curToNodeChild);

        // walk the fromNode children all the way through
        while (!skipFrom && curFromNodeChild) {
          fromNextSibling = curFromNodeChild.nextSibling;
          if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          }
          curFromNodeKey = getNodeKey(curFromNodeChild);
          var curFromNodeType = curFromNodeChild.nodeType;

          // this means if the curFromNodeChild doesnt have a match with the curToNodeChild
          var isCompatible = undefined;
          if (curFromNodeType === curToNodeChild.nodeType) {
            if (curFromNodeType === ELEMENT_NODE) {
              // Both nodes being compared are Element nodes

              if (curToNodeKey) {
                // The target node has a key so we want to match it up with the correct element
                // in the original DOM tree
                if (curToNodeKey !== curFromNodeKey) {
                  // The current element in the original DOM tree does not have a matching key so
                  // let's check our lookup to see if there is a matching element in the original
                  // DOM tree
                  if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                    if (fromNextSibling === matchingFromEl) {
                      // Special case for single element removals. To avoid removing the original
                      // DOM node out of the tree (since that can break CSS transitions, etc.),
                      // we will instead discard the current node and wait until the next
                      // iteration to properly match up the keyed target element with its matching
                      // element in the original tree
                      isCompatible = false;
                    } else {
                      // We found a matching keyed element somewhere in the original DOM tree.
                      // Let's move the original DOM node into the current position and morph
                      // it.

                      // NOTE: We use insertBefore instead of replaceChild because we want to go through
                      // the `removeNode()` function for the node that is being discarded so that
                      // all lifecycle hooks are correctly invoked
                      fromEl.insertBefore(matchingFromEl, curFromNodeChild);

                      // fromNextSibling = curFromNodeChild.nextSibling;

                      if (curFromNodeKey) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                      } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                      }

                      curFromNodeChild = matchingFromEl;
                    }
                  } else {
                    // The nodes are not compatible since the "to" node has a key and there
                    // is no matching keyed node in the source tree
                    isCompatible = false;
                  }
                }
              } else if (curFromNodeKey) {
                // The original has a key
                isCompatible = false;
              }
              isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
              if (isCompatible) {
                // We found compatible DOM elements so transform
                // the current "from" node to match the current
                // target DOM node.
                // MORPH
                morphEl(curFromNodeChild, curToNodeChild);
              }
            } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
              // Both nodes being compared are Text or Comment nodes
              isCompatible = true;
              // Simply update nodeValue on the original node to
              // change the text value
              if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
              }
            }
          }
          if (isCompatible) {
            // Advance both the "to" child and the "from" child since we found a match
            // Nothing else to do as we already recursively called morphChildren above
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          }

          // No compatible match so remove the old node from the DOM and continue trying to find a
          // match in the original DOM. However, we only do this if the from node is not keyed
          // since it is possible that a keyed node might match up with a node somewhere else in the
          // target tree and we don't want to discard it just yet since it still might find a
          // home in the final DOM tree. After everything is done we will remove any keyed nodes
          // that didn't find a home
          if (curFromNodeKey) {
            // Since the node is keyed it might be matched up later so we defer
            // the actual removal to later
            addKeyedRemoval(curFromNodeKey);
          } else {
            // NOTE: we skip nested keyed nodes from being removed since there is
            //       still a chance they will be matched up later
            removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
          }

          curFromNodeChild = fromNextSibling;
        } // END: while(curFromNodeChild) {}

        // If we got this far then we did not find a candidate match for
        // our "to node" and we exhausted all of the children "from"
        // nodes. Therefore, we will just append the current "to" node
        // to the end
        if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
          // MORPH
          if (!skipFrom) {
            addChild(fromEl, matchingFromEl);
          }
          morphEl(matchingFromEl, curToNodeChild);
        } else {
          var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
          if (onBeforeNodeAddedResult !== false) {
            if (onBeforeNodeAddedResult) {
              curToNodeChild = onBeforeNodeAddedResult;
            }
            if (curToNodeChild.actualize) {
              curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
            }
            addChild(fromEl, curToNodeChild);
            handleNodeAdded(curToNodeChild);
          }
        }
        curToNodeChild = toNextSibling;
        curFromNodeChild = fromNextSibling;
      }
      cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
      var specialElHandler = specialElHandlers[fromEl.nodeName];
      if (specialElHandler) {
        specialElHandler(fromEl, toEl);
      }
    } // END: morphChildren(...)

    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;
    if (!childrenOnly) {
      // Handle the case where we are given two DOM nodes that are not
      // compatible (e.g. <div> --> <span> or <div> --> TEXT)
      if (morphedNodeType === ELEMENT_NODE) {
        if (toNodeType === ELEMENT_NODE) {
          if (!compareNodeNames(fromNode, toNode)) {
            onNodeDiscarded(fromNode);
            morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
          }
        } else {
          // Going from an element node to a text node
          morphedNode = toNode;
        }
      } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
        // Text or comment node
        if (toNodeType === morphedNodeType) {
          if (morphedNode.nodeValue !== toNode.nodeValue) {
            morphedNode.nodeValue = toNode.nodeValue;
          }
          return morphedNode;
        } else {
          // Text node to something else
          morphedNode = toNode;
        }
      }
    }
    if (morphedNode === toNode) {
      // The "to node" was not compatible with the "from node" so we had to
      // toss out the "from node" and use the "to node"
      onNodeDiscarded(fromNode);
    } else {
      if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
        return;
      }
      morphEl(morphedNode, toNode, childrenOnly);

      // We now need to loop over any keyed nodes that might need to be
      // removed. We only do the removal if we know that the keyed node
      // never found a match. When a keyed node is matched up we remove
      // it out of fromNodesLookup and we use fromNodesLookup to determine
      // if a keyed node has been matched up or not
      if (keyedRemovalList) {
        for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
          var elToRemove = fromNodesLookup[keyedRemovalList[i]];
          if (elToRemove) {
            removeNode(elToRemove, elToRemove.parentNode, false);
          }
        }
      }
    }
    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
      if (morphedNode.actualize) {
        morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
      }
      // If we had to swap out the from node with a new node because the old
      // node was not compatible with the target node then we need to
      // replace the old DOM node in the original DOM tree. This is only
      // possible if the original DOM node was part of a DOM tree which
      // we know is the case if it has a parent node.
      fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }
    return morphedNode;
  };
}
var morphdom = morphdomFactory(morphAttrs);
function normalizeAttributesForComparison(element) {
  var isFileInput = element instanceof HTMLInputElement && element.type === 'file';
  if (!isFileInput) {
    if ('value' in element) {
      element.setAttribute('value', element.value);
    } else if (element.hasAttribute('value')) {
      element.setAttribute('value', '');
    }
  }
  Array.from(element.children).forEach(function (child) {
    normalizeAttributesForComparison(child);
  });
}
function executeMorphdom(rootFromElement, rootToElement, modifiedFieldElements, getElementValue, childComponents, findChildComponent, getKeyFromElement, externalMutationTracker) {
  var childComponentMap = new Map();
  childComponents.forEach(function (childComponent) {
    childComponentMap.set(childComponent.element, childComponent);
  });
  morphdom(rootFromElement, rootToElement, {
    getNodeKey: function getNodeKey(node) {
      if (!(node instanceof HTMLElement)) {
        return;
      }
      if (externalMutationTracker.wasElementAdded(node)) {
        return 'added_element_' + Math.random();
      }
      return getKeyFromElement(node);
    },
    onBeforeElUpdated: function onBeforeElUpdated(fromEl, toEl) {
      if (fromEl === rootFromElement) {
        return true;
      }
      if (fromEl instanceof HTMLElement && toEl instanceof HTMLElement) {
        if (typeof fromEl.__x !== 'undefined') {
          if (!window.Alpine) {
            throw new Error('Unable to access Alpine.js though the global window.Alpine variable. Please make sure Alpine.js is loaded before Symfony UX LiveComponent.');
          }
          if (typeof window.Alpine.morph !== 'function') {
            throw new Error('Unable to access Alpine.js morph function. Please make sure the Alpine.js Morph plugin is installed and loaded, see https://alpinejs.dev/plugins/morph for more information.');
          }
          window.Alpine.morph(fromEl.__x, toEl);
        }
        if (childComponentMap.has(fromEl)) {
          var childComponent = childComponentMap.get(fromEl);
          childComponent.updateFromNewElementFromParentRender(toEl);
          return false;
        }
        if (modifiedFieldElements.includes(fromEl)) {
          setValueOnElement(toEl, getElementValue(fromEl));
        }
        var elementChanges = externalMutationTracker.getChangedElement(fromEl);
        if (elementChanges) {
          elementChanges.applyToElement(toEl);
        }
        if (fromEl.isEqualNode(toEl)) {
          var normalizedFromEl = cloneHTMLElement(fromEl);
          normalizeAttributesForComparison(normalizedFromEl);
          var normalizedToEl = cloneHTMLElement(toEl);
          normalizeAttributesForComparison(normalizedToEl);
          if (normalizedFromEl.isEqualNode(normalizedToEl)) {
            return false;
          }
        }
      }
      return !fromEl.hasAttribute('data-live-ignore');
    },
    onBeforeNodeDiscarded: function onBeforeNodeDiscarded(node) {
      if (!(node instanceof HTMLElement)) {
        return true;
      }
      if (externalMutationTracker.wasElementAdded(node)) {
        return false;
      }
      return !node.hasAttribute('data-live-ignore');
    }
  });
}
var UnsyncedInputsTracker = /*#__PURE__*/function () {
  function UnsyncedInputsTracker(component, modelElementResolver) {
    var _this = this;
    _classCallCheck(this, UnsyncedInputsTracker);
    this.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this.handleInputEvent(event);
      }
    }];
    this.component = component;
    this.modelElementResolver = modelElementResolver;
    this.unsyncedInputs = new UnsyncedInputContainer();
  }
  _createClass(UnsyncedInputsTracker, [{
    key: "activate",
    value: function activate() {
      var _this2 = this;
      this.elementEventListeners.forEach(function (_ref) {
        var event = _ref.event,
          callback = _ref.callback;
        _this2.component.element.addEventListener(event, callback);
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      var _this3 = this;
      this.elementEventListeners.forEach(function (_ref2) {
        var event = _ref2.event,
          callback = _ref2.callback;
        _this3.component.element.removeEventListener(event, callback);
      });
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      this.unsyncedInputs.markModelAsSynced(modelName);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElement(target);
    }
  }, {
    key: "updateModelFromElement",
    value: function updateModelFromElement(element) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      var modelName = this.modelElementResolver.getModelName(element);
      this.unsyncedInputs.add(element, modelName);
    }
  }, {
    key: "getUnsyncedInputs",
    value: function getUnsyncedInputs() {
      return this.unsyncedInputs.allUnsyncedInputs();
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return Array.from(this.unsyncedInputs.getUnsyncedModelNames());
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      this.unsyncedInputs.resetUnsyncedFields();
    }
  }]);
  return UnsyncedInputsTracker;
}();
var UnsyncedInputContainer = /*#__PURE__*/function () {
  function UnsyncedInputContainer() {
    _classCallCheck(this, UnsyncedInputContainer);
    this.unsyncedNonModelFields = [];
    this.unsyncedModelNames = [];
    this.unsyncedModelFields = new Map();
  }
  _createClass(UnsyncedInputContainer, [{
    key: "add",
    value: function add(element) {
      var modelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (modelName) {
        this.unsyncedModelFields.set(modelName, element);
        if (!this.unsyncedModelNames.includes(modelName)) {
          this.unsyncedModelNames.push(modelName);
        }
        return;
      }
      this.unsyncedNonModelFields.push(element);
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      var _this4 = this;
      this.unsyncedModelFields.forEach(function (value, key) {
        if (!_this4.unsyncedModelNames.includes(key)) {
          _this4.unsyncedModelFields["delete"](key);
        }
      });
    }
  }, {
    key: "allUnsyncedInputs",
    value: function allUnsyncedInputs() {
      return [].concat(_toConsumableArray(this.unsyncedNonModelFields), _toConsumableArray(this.unsyncedModelFields.values()));
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      var index = this.unsyncedModelNames.indexOf(modelName);
      if (index !== -1) {
        this.unsyncedModelNames.splice(index, 1);
      }
    }
  }, {
    key: "getUnsyncedModelNames",
    value: function getUnsyncedModelNames() {
      return this.unsyncedModelNames;
    }
  }]);
  return UnsyncedInputContainer;
}();
var HookManager = /*#__PURE__*/function () {
  function HookManager() {
    _classCallCheck(this, HookManager);
    this.hooks = new Map();
  }
  _createClass(HookManager, [{
    key: "register",
    value: function register(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      hooks.push(callback);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "unregister",
    value: function unregister(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      var index = hooks.indexOf(callback);
      if (index === -1) {
        return;
      }
      hooks.splice(index, 1);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "triggerHook",
    value: function triggerHook(hookName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var hooks = this.hooks.get(hookName) || [];
      hooks.forEach(function (callback) {
        callback.apply(void 0, args);
      });
    }
  }]);
  return HookManager;
}();
var BackendResponse = /*#__PURE__*/function () {
  function BackendResponse(response) {
    _classCallCheck(this, BackendResponse);
    this.response = response;
  }
  _createClass(BackendResponse, [{
    key: "getBody",
    value: function () {
      var _getBody = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.body) {
                  _context.next = 4;
                  break;
                }
                _context.next = 3;
                return this.response.text();
              case 3:
                this.body = _context.sent;
              case 4:
                return _context.abrupt("return", this.body);
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function getBody() {
        return _getBody.apply(this, arguments);
      }
      return getBody;
    }()
  }]);
  return BackendResponse;
}();
var ChangingItemsTracker = /*#__PURE__*/function () {
  function ChangingItemsTracker() {
    _classCallCheck(this, ChangingItemsTracker);
    this.changedItems = new Map();
    this.removedItems = new Map();
  }
  _createClass(ChangingItemsTracker, [{
    key: "setItem",
    value: function setItem(itemName, newValue, previousValue) {
      if (this.removedItems.has(itemName)) {
        var removedRecord = this.removedItems.get(itemName);
        this.removedItems["delete"](itemName);
        if (removedRecord.original === newValue) {
          return;
        }
      }
      if (this.changedItems.has(itemName)) {
        var originalRecord = this.changedItems.get(itemName);
        if (originalRecord.original === newValue) {
          this.changedItems["delete"](itemName);
          return;
        }
        this.changedItems.set(itemName, {
          original: originalRecord.original,
          "new": newValue
        });
        return;
      }
      this.changedItems.set(itemName, {
        original: previousValue,
        "new": newValue
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(itemName, currentValue) {
      var trueOriginalValue = currentValue;
      if (this.changedItems.has(itemName)) {
        var originalRecord = this.changedItems.get(itemName);
        trueOriginalValue = originalRecord.original;
        this.changedItems["delete"](itemName);
        if (trueOriginalValue === null) {
          return;
        }
      }
      if (!this.removedItems.has(itemName)) {
        this.removedItems.set(itemName, {
          original: trueOriginalValue
        });
      }
    }
  }, {
    key: "getChangedItems",
    value: function getChangedItems() {
      var changedItems = [];
      this.changedItems.forEach(function (value, key) {
        changedItems.push({
          name: key,
          value: value["new"]
        });
      });
      return changedItems;
    }
  }, {
    key: "getRemovedItems",
    value: function getRemovedItems() {
      var removedItems = [];
      this.removedItems.forEach(function (value, key) {
        removedItems.push(key);
      });
      return removedItems;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.changedItems.size === 0 && this.removedItems.size === 0;
    }
  }]);
  return ChangingItemsTracker;
}();
var ElementChanges = /*#__PURE__*/function () {
  function ElementChanges() {
    _classCallCheck(this, ElementChanges);
    this.addedClasses = [];
    this.removedClasses = [];
    this.styleChanges = new ChangingItemsTracker();
    this.attributeChanges = new ChangingItemsTracker();
  }
  _createClass(ElementChanges, [{
    key: "addClass",
    value: function addClass(className) {
      if (this.removedClasses.includes(className)) {
        this.removedClasses = this.removedClasses.filter(function (name) {
          return name !== className;
        });
        return;
      }
      if (!this.addedClasses.includes(className)) {
        this.addedClasses.push(className);
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      if (this.addedClasses.includes(className)) {
        this.addedClasses = this.addedClasses.filter(function (name) {
          return name !== className;
        });
        return;
      }
      if (!this.removedClasses.includes(className)) {
        this.removedClasses.push(className);
      }
    }
  }, {
    key: "addStyle",
    value: function addStyle(styleName, newValue, originalValue) {
      this.styleChanges.setItem(styleName, newValue, originalValue);
    }
  }, {
    key: "removeStyle",
    value: function removeStyle(styleName, originalValue) {
      this.styleChanges.removeItem(styleName, originalValue);
    }
  }, {
    key: "addAttribute",
    value: function addAttribute(attributeName, newValue, originalValue) {
      this.attributeChanges.setItem(attributeName, newValue, originalValue);
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(attributeName, originalValue) {
      this.attributeChanges.removeItem(attributeName, originalValue);
    }
  }, {
    key: "getAddedClasses",
    value: function getAddedClasses() {
      return this.addedClasses;
    }
  }, {
    key: "getRemovedClasses",
    value: function getRemovedClasses() {
      return this.removedClasses;
    }
  }, {
    key: "getChangedStyles",
    value: function getChangedStyles() {
      return this.styleChanges.getChangedItems();
    }
  }, {
    key: "getRemovedStyles",
    value: function getRemovedStyles() {
      return this.styleChanges.getRemovedItems();
    }
  }, {
    key: "getChangedAttributes",
    value: function getChangedAttributes() {
      return this.attributeChanges.getChangedItems();
    }
  }, {
    key: "getRemovedAttributes",
    value: function getRemovedAttributes() {
      return this.attributeChanges.getRemovedItems();
    }
  }, {
    key: "applyToElement",
    value: function applyToElement(element) {
      this.addedClasses.forEach(function (className) {
        element.classList.add(className);
      });
      this.removedClasses.forEach(function (className) {
        element.classList.remove(className);
      });
      this.styleChanges.getChangedItems().forEach(function (change) {
        element.style.setProperty(change.name, change.value);
        return;
      });
      this.styleChanges.getRemovedItems().forEach(function (styleName) {
        element.style.removeProperty(styleName);
      });
      this.attributeChanges.getChangedItems().forEach(function (change) {
        element.setAttribute(change.name, change.value);
      });
      this.attributeChanges.getRemovedItems().forEach(function (attributeName) {
        element.removeAttribute(attributeName);
      });
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.addedClasses.length === 0 && this.removedClasses.length === 0 && this.styleChanges.isEmpty() && this.attributeChanges.isEmpty();
    }
  }]);
  return ElementChanges;
}();
var ExternalMutationTracker = /*#__PURE__*/function () {
  function ExternalMutationTracker(element, shouldTrackChangeCallback) {
    _classCallCheck(this, ExternalMutationTracker);
    this.changedElements = new WeakMap();
    this.changedElementsCount = 0;
    this.addedElements = [];
    this.removedElements = [];
    this.isStarted = false;
    this.element = element;
    this.shouldTrackChangeCallback = shouldTrackChangeCallback;
    this.mutationObserver = new MutationObserver(this.onMutations.bind(this));
  }
  _createClass(ExternalMutationTracker, [{
    key: "start",
    value: function start() {
      if (this.isStarted) {
        return;
      }
      this.mutationObserver.observe(this.element, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true
      });
      this.isStarted = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.isStarted) {
        this.mutationObserver.disconnect();
        this.isStarted = false;
      }
    }
  }, {
    key: "getChangedElement",
    value: function getChangedElement(element) {
      return this.changedElements.has(element) ? this.changedElements.get(element) : null;
    }
  }, {
    key: "getAddedElements",
    value: function getAddedElements() {
      return this.addedElements;
    }
  }, {
    key: "wasElementAdded",
    value: function wasElementAdded(element) {
      return this.addedElements.includes(element);
    }
  }, {
    key: "handlePendingChanges",
    value: function handlePendingChanges() {
      this.onMutations(this.mutationObserver.takeRecords());
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var handledAttributeMutations = new WeakMap();
      var _iterator = _createForOfIteratorHelper(mutations),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mutation = _step.value;
          var element = mutation.target;
          if (!this.shouldTrackChangeCallback(element)) {
            continue;
          }
          if (this.isElementAddedByTranslation(element)) {
            continue;
          }
          var isChangeInAddedElement = false;
          var _iterator2 = _createForOfIteratorHelper(this.addedElements),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var addedElement = _step2.value;
              if (addedElement.contains(element)) {
                isChangeInAddedElement = true;
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (isChangeInAddedElement) {
            continue;
          }
          switch (mutation.type) {
            case 'childList':
              this.handleChildListMutation(mutation);
              break;
            case 'attributes':
              if (!handledAttributeMutations.has(element)) {
                handledAttributeMutations.set(element, []);
              }
              if (!handledAttributeMutations.get(element).includes(mutation.attributeName)) {
                this.handleAttributeMutation(mutation);
                handledAttributeMutations.set(element, [].concat(_toConsumableArray(handledAttributeMutations.get(element)), [mutation.attributeName]));
              }
              break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "handleChildListMutation",
    value: function handleChildListMutation(mutation) {
      var _this5 = this;
      mutation.addedNodes.forEach(function (node) {
        if (!(node instanceof Element)) {
          return;
        }
        if (_this5.removedElements.includes(node)) {
          _this5.removedElements.splice(_this5.removedElements.indexOf(node), 1);
          return;
        }
        if (_this5.isElementAddedByTranslation(node)) {
          return;
        }
        _this5.addedElements.push(node);
      });
      mutation.removedNodes.forEach(function (node) {
        if (!(node instanceof Element)) {
          return;
        }
        if (_this5.addedElements.includes(node)) {
          _this5.addedElements.splice(_this5.addedElements.indexOf(node), 1);
          return;
        }
        _this5.removedElements.push(node);
      });
    }
  }, {
    key: "handleAttributeMutation",
    value: function handleAttributeMutation(mutation) {
      var element = mutation.target;
      if (!this.changedElements.has(element)) {
        this.changedElements.set(element, new ElementChanges());
        this.changedElementsCount++;
      }
      var changedElement = this.changedElements.get(element);
      switch (mutation.attributeName) {
        case 'class':
          this.handleClassAttributeMutation(mutation, changedElement);
          break;
        case 'style':
          this.handleStyleAttributeMutation(mutation, changedElement);
          break;
        default:
          this.handleGenericAttributeMutation(mutation, changedElement);
      }
      if (changedElement.isEmpty()) {
        this.changedElements["delete"](element);
        this.changedElementsCount--;
      }
    }
  }, {
    key: "handleClassAttributeMutation",
    value: function handleClassAttributeMutation(mutation, elementChanges) {
      var element = mutation.target;
      var previousValue = mutation.oldValue;
      var previousValues = previousValue ? previousValue.split(' ') : [];
      previousValues.forEach(function (value, index) {
        var trimmedValue = value.trim();
        if (trimmedValue !== '') {
          previousValues[index] = trimmedValue;
        } else {
          previousValues.splice(index, 1);
        }
      });
      var newValues = [].slice.call(element.classList);
      var addedValues = newValues.filter(function (value) {
        return !previousValues.includes(value);
      });
      var removedValues = previousValues.filter(function (value) {
        return !newValues.includes(value);
      });
      addedValues.forEach(function (value) {
        elementChanges.addClass(value);
      });
      removedValues.forEach(function (value) {
        elementChanges.removeClass(value);
      });
    }
  }, {
    key: "handleStyleAttributeMutation",
    value: function handleStyleAttributeMutation(mutation, elementChanges) {
      var element = mutation.target;
      var previousValue = mutation.oldValue || '';
      var previousStyles = this.extractStyles(previousValue);
      var newValue = element.getAttribute('style') || '';
      var newStyles = this.extractStyles(newValue);
      var addedOrChangedStyles = Object.keys(newStyles).filter(function (key) {
        return previousStyles[key] === undefined || previousStyles[key] !== newStyles[key];
      });
      var removedStyles = Object.keys(previousStyles).filter(function (key) {
        return !newStyles[key];
      });
      addedOrChangedStyles.forEach(function (style) {
        elementChanges.addStyle(style, newStyles[style], previousStyles[style] === undefined ? null : previousStyles[style]);
      });
      removedStyles.forEach(function (style) {
        elementChanges.removeStyle(style, previousStyles[style]);
      });
    }
  }, {
    key: "handleGenericAttributeMutation",
    value: function handleGenericAttributeMutation(mutation, elementChanges) {
      var attributeName = mutation.attributeName;
      var element = mutation.target;
      var oldValue = mutation.oldValue;
      var newValue = element.getAttribute(attributeName);
      if (oldValue === attributeName) {
        oldValue = '';
      }
      if (newValue === attributeName) {
        newValue = '';
      }
      if (!element.hasAttribute(attributeName)) {
        if (oldValue === null) {
          return;
        }
        elementChanges.removeAttribute(attributeName, mutation.oldValue);
        return;
      }
      if (newValue === oldValue) {
        return;
      }
      elementChanges.addAttribute(attributeName, element.getAttribute(attributeName), mutation.oldValue);
    }
  }, {
    key: "extractStyles",
    value: function extractStyles(styles) {
      var styleObject = {};
      styles.split(';').forEach(function (style) {
        var parts = style.split(':');
        if (parts.length === 1) {
          return;
        }
        var property = parts[0].trim();
        styleObject[property] = parts.slice(1).join(':').trim();
      });
      return styleObject;
    }
  }, {
    key: "isElementAddedByTranslation",
    value: function isElementAddedByTranslation(element) {
      return element.tagName === 'FONT' && element.getAttribute('style') === 'vertical-align: inherit;';
    }
  }]);
  return ExternalMutationTracker;
}();
var ChildComponentWrapper = /*#__PURE__*/_createClass(function ChildComponentWrapper(component, modelBindings) {
  _classCallCheck(this, ChildComponentWrapper);
  this.component = component;
  this.modelBindings = modelBindings;
});
var Component = /*#__PURE__*/function () {
  function Component(element, name, props, listeners, componentFinder, fingerprint, id, backend, elementDriver) {
    var _this6 = this;
    _classCallCheck(this, Component);
    this.defaultDebounce = 150;
    this.backendRequest = null;
    this.pendingActions = [];
    this.pendingFiles = {};
    this.isRequestPending = false;
    this.requestDebounceTimeout = null;
    this.children = new Map();
    this.parent = null;
    this.element = element;
    this.name = name;
    this.componentFinder = componentFinder;
    this.backend = backend;
    this.elementDriver = elementDriver;
    this.id = id;
    this.fingerprint = fingerprint;
    this.listeners = new Map();
    listeners.forEach(function (listener) {
      var _a;
      if (!_this6.listeners.has(listener.event)) {
        _this6.listeners.set(listener.event, []);
      }
      (_a = _this6.listeners.get(listener.event)) === null || _a === void 0 ? void 0 : _a.push(listener.action);
    });
    this.valueStore = new ValueStore(props);
    this.unsyncedInputsTracker = new UnsyncedInputsTracker(this, elementDriver);
    this.hooks = new HookManager();
    this.resetPromise();
    this.externalMutationTracker = new ExternalMutationTracker(this.element, function (element) {
      return elementBelongsToThisComponent(element, _this6);
    });
    this.externalMutationTracker.start();
    this.onChildComponentModelUpdate = this.onChildComponentModelUpdate.bind(this);
  }
  _createClass(Component, [{
    key: "_swapBackend",
    value: function _swapBackend(backend) {
      this.backend = backend;
    }
  }, {
    key: "addPlugin",
    value: function addPlugin(plugin) {
      plugin.attachToComponent(this);
    }
  }, {
    key: "connect",
    value: function connect() {
      this.hooks.triggerHook('connect', this);
      this.unsyncedInputsTracker.activate();
      this.externalMutationTracker.start();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.hooks.triggerHook('disconnect', this);
      this.clearRequestDebounceTimeout();
      this.unsyncedInputsTracker.deactivate();
      this.externalMutationTracker.stop();
    }
  }, {
    key: "on",
    value: function on(hookName, callback) {
      this.hooks.register(hookName, callback);
    }
  }, {
    key: "off",
    value: function off(hookName, callback) {
      this.hooks.unregister(hookName, callback);
    }
  }, {
    key: "set",
    value: function set(model, value) {
      var reRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var promise = this.nextRequestPromise;
      var modelName = normalizeModelName(model);
      var isChanged = this.valueStore.set(modelName, value);
      this.hooks.triggerHook('model:set', model, value, this);
      this.unsyncedInputsTracker.markModelAsSynced(modelName);
      if (reRender && isChanged) {
        this.debouncedStartRequest(debounce);
      }
      return promise;
    }
  }, {
    key: "getData",
    value: function getData(model) {
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) {
        throw new Error("Invalid model \"".concat(model, "\"."));
      }
      return this.valueStore.get(modelName);
    }
  }, {
    key: "action",
    value: function action(name) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var debounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var promise = this.nextRequestPromise;
      this.pendingActions.push({
        name: name,
        args: args
      });
      this.debouncedStartRequest(debounce);
      return promise;
    }
  }, {
    key: "files",
    value: function files(key, input) {
      this.pendingFiles[key] = input;
    }
  }, {
    key: "render",
    value: function render() {
      var promise = this.nextRequestPromise;
      this.tryStartingRequest();
      return promise;
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return this.unsyncedInputsTracker.getUnsyncedModels();
    }
  }, {
    key: "addChild",
    value: function addChild(child) {
      var modelBindings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (!child.id) {
        throw new Error('Children components must have an id.');
      }
      this.children.set(child.id, new ChildComponentWrapper(child, modelBindings));
      child.parent = this;
      child.on('model:set', this.onChildComponentModelUpdate);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      if (!child.id) {
        throw new Error('Children components must have an id.');
      }
      this.children["delete"](child.id);
      child.parent = null;
      child.off('model:set', this.onChildComponentModelUpdate);
    }
  }, {
    key: "getParent",
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var children = new Map();
      this.children.forEach(function (childComponent, id) {
        children.set(id, childComponent.component);
      });
      return children;
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var onlyMatchingComponentsNamed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return this.performEmit(name, data, false, onlyMatchingComponentsNamed);
    }
  }, {
    key: "emitUp",
    value: function emitUp(name, data) {
      var onlyMatchingComponentsNamed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return this.performEmit(name, data, true, onlyMatchingComponentsNamed);
    }
  }, {
    key: "emitSelf",
    value: function emitSelf(name, data) {
      return this.doEmit(name, data);
    }
  }, {
    key: "performEmit",
    value: function performEmit(name, data, emitUp, matchingName) {
      var components = this.componentFinder(this, emitUp, matchingName);
      components.forEach(function (component) {
        component.doEmit(name, data);
      });
    }
  }, {
    key: "doEmit",
    value: function doEmit(name, data) {
      var _this7 = this;
      if (!this.listeners.has(name)) {
        return;
      }
      var actions = this.listeners.get(name) || [];
      actions.forEach(function (action) {
        _this7.action(action, data, 1);
      });
    }
  }, {
    key: "updateFromNewElementFromParentRender",
    value: function updateFromNewElementFromParentRender(toEl) {
      var props = this.elementDriver.getComponentProps(toEl);
      if (props === null) {
        return;
      }
      var isChanged = this.valueStore.storeNewPropsFromParent(props);
      var fingerprint = toEl.dataset.liveFingerprintValue;
      if (fingerprint !== undefined) {
        this.fingerprint = fingerprint;
      }
      if (isChanged) {
        this.render();
      }
    }
  }, {
    key: "onChildComponentModelUpdate",
    value: function onChildComponentModelUpdate(modelName, value, childComponent) {
      var _this8 = this;
      if (!childComponent.id) {
        throw new Error('Missing id');
      }
      var childWrapper = this.children.get(childComponent.id);
      if (!childWrapper) {
        throw new Error('Missing child');
      }
      childWrapper.modelBindings.forEach(function (modelBinding) {
        var childModelName = modelBinding.innerModelName || 'value';
        if (childModelName !== modelName) {
          return;
        }
        _this8.set(modelBinding.modelName, value, modelBinding.shouldRender, modelBinding.debounce);
      });
    }
  }, {
    key: "isTurboEnabled",
    value: function isTurboEnabled() {
      return typeof Turbo !== 'undefined' && !this.element.closest('[data-turbo="false"]');
    }
  }, {
    key: "tryStartingRequest",
    value: function tryStartingRequest() {
      if (!this.backendRequest) {
        this.performRequest();
        return;
      }
      this.isRequestPending = true;
    }
  }, {
    key: "performRequest",
    value: function performRequest() {
      var _this9 = this;
      var thisPromiseResolve = this.nextRequestPromiseResolve;
      this.resetPromise();
      this.unsyncedInputsTracker.resetUnsyncedFields();
      var filesToSend = {};
      for (var _i2 = 0, _Object$entries2 = Object.entries(this.pendingFiles); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        if (value.files) {
          filesToSend[key] = value.files;
        }
      }
      this.backendRequest = this.backend.makeRequest(this.valueStore.getOriginalProps(), this.pendingActions, this.valueStore.getDirtyProps(), this.getChildrenFingerprints(), this.valueStore.getUpdatedPropsFromParent(), filesToSend);
      this.hooks.triggerHook('loading.state:started', this.element, this.backendRequest);
      this.pendingActions = [];
      this.valueStore.flushDirtyPropsToPending();
      this.isRequestPending = false;
      this.backendRequest.promise.then( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
          var backendResponse, html, _i3, _Object$values, input, headers, controls;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this9.backendRequest = null;
                  backendResponse = new BackendResponse(response);
                  _context2.next = 4;
                  return backendResponse.getBody();
                case 4:
                  html = _context2.sent;
                  for (_i3 = 0, _Object$values = Object.values(_this9.pendingFiles); _i3 < _Object$values.length; _i3++) {
                    input = _Object$values[_i3];
                    input.value = '';
                  }
                  headers = backendResponse.response.headers;
                  if (!(headers.get('Content-Type') !== 'application/vnd.live-component+html' && !headers.get('X-Live-Redirect'))) {
                    _context2.next = 14;
                    break;
                  }
                  controls = {
                    displayError: true
                  };
                  _this9.valueStore.pushPendingPropsBackToDirty();
                  _this9.hooks.triggerHook('response:error', backendResponse, controls);
                  if (controls.displayError) {
                    _this9.renderError(html);
                  }
                  thisPromiseResolve(backendResponse);
                  return _context2.abrupt("return", response);
                case 14:
                  _this9.processRerender(html, backendResponse);
                  thisPromiseResolve(backendResponse);
                  if (_this9.isRequestPending) {
                    _this9.isRequestPending = false;
                    _this9.performRequest();
                  }
                  return _context2.abrupt("return", response);
                case 18:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "processRerender",
    value: function processRerender(html, backendResponse) {
      var _this10 = this;
      var controls = {
        shouldRender: true
      };
      this.hooks.triggerHook('render:started', html, backendResponse, controls);
      if (!controls.shouldRender) {
        return;
      }
      if (backendResponse.response.headers.get('Location')) {
        if (this.isTurboEnabled()) {
          Turbo.visit(backendResponse.response.headers.get('Location'));
        } else {
          window.location.href = backendResponse.response.headers.get('Location') || '';
        }
        return;
      }
      this.hooks.triggerHook('loading.state:finished', this.element);
      var modifiedModelValues = {};
      Object.keys(this.valueStore.getDirtyProps()).forEach(function (modelName) {
        modifiedModelValues[modelName] = _this10.valueStore.get(modelName);
      });
      var newElement;
      try {
        newElement = htmlToElement(html);
        if (!newElement.matches('[data-controller~=live]')) {
          throw new Error('A live component template must contain a single root controller element.');
        }
      } catch (error) {
        console.error('There was a problem with the component HTML returned:');
        throw error;
      }
      var newProps = this.elementDriver.getComponentProps(newElement);
      this.valueStore.reinitializeAllProps(newProps);
      var eventsToEmit = this.elementDriver.getEventsToEmit(newElement);
      var browserEventsToDispatch = this.elementDriver.getBrowserEventsToDispatch(newElement);
      this.externalMutationTracker.handlePendingChanges();
      this.externalMutationTracker.stop();
      executeMorphdom(this.element, newElement, this.unsyncedInputsTracker.getUnsyncedInputs(), function (element) {
        return getValueFromElement(element, _this10.valueStore);
      }, Array.from(this.getChildren().values()), this.elementDriver.findChildComponentElement, this.elementDriver.getKeyFromElement, this.externalMutationTracker);
      this.externalMutationTracker.start();
      Object.keys(modifiedModelValues).forEach(function (modelName) {
        _this10.valueStore.set(modelName, modifiedModelValues[modelName]);
      });
      eventsToEmit.forEach(function (_ref4) {
        var event = _ref4.event,
          data = _ref4.data,
          target = _ref4.target,
          componentName = _ref4.componentName;
        if (target === 'up') {
          _this10.emitUp(event, data, componentName);
          return;
        }
        if (target === 'self') {
          _this10.emitSelf(event, data);
          return;
        }
        _this10.emit(event, data, componentName);
      });
      browserEventsToDispatch.forEach(function (_ref5) {
        var event = _ref5.event,
          payload = _ref5.payload;
        _this10.element.dispatchEvent(new CustomEvent(event, {
          detail: payload,
          bubbles: true
        }));
      });
      this.hooks.triggerHook('render:finished', this);
    }
  }, {
    key: "calculateDebounce",
    value: function calculateDebounce(debounce) {
      if (debounce === true) {
        return this.defaultDebounce;
      }
      if (debounce === false) {
        return 0;
      }
      return debounce;
    }
  }, {
    key: "clearRequestDebounceTimeout",
    value: function clearRequestDebounceTimeout() {
      if (this.requestDebounceTimeout) {
        clearTimeout(this.requestDebounceTimeout);
        this.requestDebounceTimeout = null;
      }
    }
  }, {
    key: "debouncedStartRequest",
    value: function debouncedStartRequest(debounce) {
      var _this11 = this;
      this.clearRequestDebounceTimeout();
      this.requestDebounceTimeout = window.setTimeout(function () {
        _this11.render();
      }, this.calculateDebounce(debounce));
    }
  }, {
    key: "renderError",
    value: function renderError(html) {
      var modal = document.getElementById('live-component-error');
      if (modal) {
        modal.innerHTML = '';
      } else {
        modal = document.createElement('div');
        modal.id = 'live-component-error';
        modal.style.padding = '50px';
        modal.style.backgroundColor = 'rgba(0, 0, 0, .5)';
        modal.style.zIndex = '100000';
        modal.style.position = 'fixed';
        modal.style.top = '0px';
        modal.style.bottom = '0px';
        modal.style.left = '0px';
        modal.style.right = '0px';
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
      }
      var iframe = document.createElement('iframe');
      iframe.style.borderRadius = '5px';
      iframe.style.flexGrow = '1';
      modal.appendChild(iframe);
      document.body.prepend(modal);
      document.body.style.overflow = 'hidden';
      if (iframe.contentWindow) {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(html);
        iframe.contentWindow.document.close();
      }
      var closeModal = function closeModal(modal) {
        if (modal) {
          modal.outerHTML = '';
        }
        document.body.style.overflow = 'visible';
      };
      modal.addEventListener('click', function () {
        return closeModal(modal);
      });
      modal.setAttribute('tabindex', '0');
      modal.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeModal(modal);
        }
      });
      modal.focus();
    }
  }, {
    key: "getChildrenFingerprints",
    value: function getChildrenFingerprints() {
      var fingerprints = {};
      this.children.forEach(function (childComponent) {
        var child = childComponent.component;
        if (!child.id) {
          throw new Error('missing id');
        }
        fingerprints[child.id] = {
          fingerprint: child.fingerprint,
          tag: child.element.tagName.toLowerCase()
        };
      });
      return fingerprints;
    }
  }, {
    key: "resetPromise",
    value: function resetPromise() {
      var _this12 = this;
      this.nextRequestPromise = new Promise(function (resolve) {
        _this12.nextRequestPromiseResolve = resolve;
      });
    }
  }]);
  return Component;
}();
function proxifyComponent(component) {
  return new Proxy(component, {
    get: function get(component, prop) {
      if (prop in component || typeof prop !== 'string') {
        if (typeof component[prop] === 'function') {
          var callable = component[prop];
          return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return callable.apply(component, args);
          };
        }
        return Reflect.get(component, prop);
      }
      if (component.valueStore.has(prop)) {
        return component.getData(prop);
      }
      return function (args) {
        return component.action.apply(component, [prop, args]);
      };
    },
    set: function set(target, property, value) {
      if (property in target) {
        target[property] = value;
        return true;
      }
      target.set(property, value);
      return true;
    }
  });
}
var BackendRequest = /*#__PURE__*/function () {
  function BackendRequest(promise, actions, updateModels) {
    var _this13 = this;
    _classCallCheck(this, BackendRequest);
    this.isResolved = false;
    this.promise = promise;
    this.promise.then(function (response) {
      _this13.isResolved = true;
      return response;
    });
    this.actions = actions;
    this.updatedModels = updateModels;
  }
  _createClass(BackendRequest, [{
    key: "containsOneOfActions",
    value: function containsOneOfActions(targetedActions) {
      return this.actions.filter(function (action) {
        return targetedActions.includes(action);
      }).length > 0;
    }
  }, {
    key: "areAnyModelsUpdated",
    value: function areAnyModelsUpdated(targetedModels) {
      return this.updatedModels.filter(function (model) {
        return targetedModels.includes(model);
      }).length > 0;
    }
  }]);
  return BackendRequest;
}();
var RequestBuilder = /*#__PURE__*/function () {
  function RequestBuilder(url) {
    var csrfToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, RequestBuilder);
    this.url = url;
    this.csrfToken = csrfToken;
  }
  _createClass(RequestBuilder, [{
    key: "buildRequest",
    value: function buildRequest(props, actions, updated, children, updatedPropsFromParent, files) {
      var splitUrl = this.url.split('?');
      var _splitUrl = _slicedToArray(splitUrl, 1),
        url = _splitUrl[0];
      var _splitUrl2 = _slicedToArray(splitUrl, 2),
        queryString = _splitUrl2[1];
      var params = new URLSearchParams(queryString || '');
      var fetchOptions = {};
      fetchOptions.headers = {
        Accept: 'application/vnd.live-component+html',
        'X-Requested-With': 'XMLHttpRequest'
      };
      var totalFiles = Object.entries(files).reduce(function (total, current) {
        return total + current.length;
      }, 0);
      var hasFingerprints = Object.keys(children).length > 0;
      if (actions.length === 0 && totalFiles === 0 && this.willDataFitInUrl(JSON.stringify(props), JSON.stringify(updated), params, JSON.stringify(children), JSON.stringify(updatedPropsFromParent))) {
        params.set('props', JSON.stringify(props));
        params.set('updated', JSON.stringify(updated));
        if (Object.keys(updatedPropsFromParent).length > 0) {
          params.set('propsFromParent', JSON.stringify(updatedPropsFromParent));
        }
        if (hasFingerprints) {
          params.set('children', JSON.stringify(children));
        }
        fetchOptions.method = 'GET';
      } else {
        fetchOptions.method = 'POST';
        var requestData = {
          props: props,
          updated: updated
        };
        if (Object.keys(updatedPropsFromParent).length > 0) {
          requestData.propsFromParent = updatedPropsFromParent;
        }
        if (hasFingerprints) {
          requestData.children = children;
        }
        if (this.csrfToken && (actions.length || totalFiles)) {
          fetchOptions.headers['X-CSRF-TOKEN'] = this.csrfToken;
        }
        if (actions.length > 0) {
          if (actions.length === 1) {
            requestData.args = actions[0].args;
            url += "/".concat(encodeURIComponent(actions[0].name));
          } else {
            url += '/_batch';
            requestData.actions = actions;
          }
        }
        var formData = new FormData();
        formData.append('data', JSON.stringify(requestData));
        for (var _i4 = 0, _Object$entries3 = Object.entries(files); _i4 < _Object$entries3.length; _i4++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i4], 2),
            key = _Object$entries3$_i[0],
            value = _Object$entries3$_i[1];
          var length = value.length;
          for (var i = 0; i < length; ++i) {
            formData.append(key, value[i]);
          }
        }
        fetchOptions.body = formData;
      }
      var paramsString = params.toString();
      return {
        url: "".concat(url).concat(paramsString.length > 0 ? "?".concat(paramsString) : ''),
        fetchOptions: fetchOptions
      };
    }
  }, {
    key: "willDataFitInUrl",
    value: function willDataFitInUrl(propsJson, updatedJson, params, childrenJson, propsFromParentJson) {
      var urlEncodedJsonData = new URLSearchParams(propsJson + updatedJson + childrenJson + propsFromParentJson).toString();
      return (urlEncodedJsonData + params.toString()).length < 1500;
    }
  }]);
  return RequestBuilder;
}();
var Backend = /*#__PURE__*/function () {
  function Backend(url) {
    var csrfToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, Backend);
    this.requestBuilder = new RequestBuilder(url, csrfToken);
  }
  _createClass(Backend, [{
    key: "makeRequest",
    value: function makeRequest(props, actions, updated, children, updatedPropsFromParent, files) {
      var _this$requestBuilder$ = this.requestBuilder.buildRequest(props, actions, updated, children, updatedPropsFromParent, files),
        url = _this$requestBuilder$.url,
        fetchOptions = _this$requestBuilder$.fetchOptions;
      return new BackendRequest(fetch(url, fetchOptions), actions.map(function (backendAction) {
        return backendAction.name;
      }), Object.keys(updated));
    }
  }]);
  return Backend;
}();
var StandardElementDriver = /*#__PURE__*/function () {
  function StandardElementDriver() {
    _classCallCheck(this, StandardElementDriver);
  }
  _createClass(StandardElementDriver, [{
    key: "getModelName",
    value: function getModelName(element) {
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return null;
      }
      return modelDirective.action;
    }
  }, {
    key: "getComponentProps",
    value: function getComponentProps(rootElement) {
      var _a;
      var propsJson = (_a = rootElement.dataset.livePropsValue) !== null && _a !== void 0 ? _a : '{}';
      return JSON.parse(propsJson);
    }
  }, {
    key: "findChildComponentElement",
    value: function findChildComponentElement(id, element) {
      return element.querySelector("[data-live-id=".concat(id, "]"));
    }
  }, {
    key: "getKeyFromElement",
    value: function getKeyFromElement(element) {
      return element.dataset.liveId || null;
    }
  }, {
    key: "getEventsToEmit",
    value: function getEventsToEmit(element) {
      var _a;
      var eventsJson = (_a = element.dataset.liveEmit) !== null && _a !== void 0 ? _a : '[]';
      return JSON.parse(eventsJson);
    }
  }, {
    key: "getBrowserEventsToDispatch",
    value: function getBrowserEventsToDispatch(element) {
      var _a;
      var eventsJson = (_a = element.dataset.liveBrowserDispatch) !== null && _a !== void 0 ? _a : '[]';
      return JSON.parse(eventsJson);
    }
  }]);
  return StandardElementDriver;
}();
var LoadingPlugin = /*#__PURE__*/function () {
  function LoadingPlugin() {
    _classCallCheck(this, LoadingPlugin);
  }
  _createClass(LoadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this14 = this;
      component.on('loading.state:started', function (element, request) {
        _this14.startLoading(element, request);
      });
      component.on('loading.state:finished', function (element) {
        _this14.finishLoading(element);
      });
      this.finishLoading(component.element);
    }
  }, {
    key: "startLoading",
    value: function startLoading(targetElement, backendRequest) {
      this.handleLoadingToggle(true, targetElement, backendRequest);
    }
  }, {
    key: "finishLoading",
    value: function finishLoading(targetElement) {
      this.handleLoadingToggle(false, targetElement, null);
    }
  }, {
    key: "handleLoadingToggle",
    value: function handleLoadingToggle(isLoading, targetElement, backendRequest) {
      var _this15 = this;
      if (isLoading) {
        this.addAttributes(targetElement, ['busy']);
      } else {
        this.removeAttributes(targetElement, ['busy']);
      }
      this.getLoadingDirectives(targetElement).forEach(function (_ref6) {
        var element = _ref6.element,
          directives = _ref6.directives;
        if (isLoading) {
          _this15.addAttributes(element, ['data-live-is-loading']);
        } else {
          _this15.removeAttributes(element, ['data-live-is-loading']);
        }
        directives.forEach(function (directive) {
          _this15.handleLoadingDirective(element, isLoading, directive, backendRequest);
        });
      });
    }
  }, {
    key: "handleLoadingDirective",
    value: function handleLoadingDirective(element, isLoading, directive, backendRequest) {
      var _this16 = this;
      var finalAction = parseLoadingAction(directive.action, isLoading);
      var targetedActions = [];
      var targetedModels = [];
      var delay = 0;
      var validModifiers = new Map();
      validModifiers.set('delay', function (modifier) {
        if (!isLoading) {
          return;
        }
        delay = modifier.value ? parseInt(modifier.value) : 200;
      });
      validModifiers.set('action', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"action\" in data-loading must have an action name - e.g. action(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedActions.push(modifier.value);
      });
      validModifiers.set('model', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"model\" in data-loading must have an action name - e.g. model(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedModels.push(modifier.value);
      });
      directive.modifiers.forEach(function (modifier) {
        var _a;
        if (validModifiers.has(modifier.name)) {
          var callable = (_a = validModifiers.get(modifier.name)) !== null && _a !== void 0 ? _a : function () {};
          callable(modifier);
          return;
        }
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" used in data-loading=\"").concat(directive.getString(), "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
      });
      if (isLoading && targetedActions.length > 0 && backendRequest && !backendRequest.containsOneOfActions(targetedActions)) {
        return;
      }
      if (isLoading && targetedModels.length > 0 && backendRequest && !backendRequest.areAnyModelsUpdated(targetedModels)) {
        return;
      }
      var loadingDirective;
      switch (finalAction) {
        case 'show':
          loadingDirective = function loadingDirective() {
            _this16.showElement(element);
          };
          break;
        case 'hide':
          loadingDirective = function loadingDirective() {
            return _this16.hideElement(element);
          };
          break;
        case 'addClass':
          loadingDirective = function loadingDirective() {
            return _this16.addClass(element, directive.args);
          };
          break;
        case 'removeClass':
          loadingDirective = function loadingDirective() {
            return _this16.removeClass(element, directive.args);
          };
          break;
        case 'addAttribute':
          loadingDirective = function loadingDirective() {
            return _this16.addAttributes(element, directive.args);
          };
          break;
        case 'removeAttribute':
          loadingDirective = function loadingDirective() {
            return _this16.removeAttributes(element, directive.args);
          };
          break;
        default:
          throw new Error("Unknown data-loading action \"".concat(finalAction, "\""));
      }
      if (delay) {
        window.setTimeout(function () {
          if (backendRequest && !backendRequest.isResolved) {
            loadingDirective();
          }
        }, delay);
        return;
      }
      loadingDirective();
    }
  }, {
    key: "getLoadingDirectives",
    value: function getLoadingDirectives(element) {
      var loadingDirectives = [];
      element.querySelectorAll('[data-loading]').forEach(function (element) {
        if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
          throw new Error('Invalid Element Type');
        }
        var directives = parseDirectives(element.dataset.loading || 'show');
        loadingDirectives.push({
          element: element,
          directives: directives
        });
      });
      return loadingDirectives;
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.style.display = 'revert';
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      element.style.display = 'none';
    }
  }, {
    key: "addClass",
    value: function addClass(element, classes) {
      var _element$classList;
      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(combineSpacedArray(classes)));
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, classes) {
      var _element$classList2;
      (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(combineSpacedArray(classes)));
      if (element.classList.length === 0) {
        this.removeAttributes(element, ['class']);
      }
    }
  }, {
    key: "addAttributes",
    value: function addAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.setAttribute(attribute, '');
      });
    }
  }, {
    key: "removeAttributes",
    value: function removeAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    }
  }]);
  return LoadingPlugin;
}();
var parseLoadingAction = function parseLoadingAction(action, isLoading) {
  switch (action) {
    case 'show':
      return isLoading ? 'show' : 'hide';
    case 'hide':
      return isLoading ? 'hide' : 'show';
    case 'addClass':
      return isLoading ? 'addClass' : 'removeClass';
    case 'removeClass':
      return isLoading ? 'removeClass' : 'addClass';
    case 'addAttribute':
      return isLoading ? 'addAttribute' : 'removeAttribute';
    case 'removeAttribute':
      return isLoading ? 'removeAttribute' : 'addAttribute';
  }
  throw new Error("Unknown data-loading action \"".concat(action, "\""));
};
var ValidatedFieldsPlugin = /*#__PURE__*/function () {
  function ValidatedFieldsPlugin() {
    _classCallCheck(this, ValidatedFieldsPlugin);
  }
  _createClass(ValidatedFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this17 = this;
      component.on('model:set', function (modelName) {
        _this17.handleModelSet(modelName, component.valueStore);
      });
    }
  }, {
    key: "handleModelSet",
    value: function handleModelSet(modelName, valueStore) {
      if (valueStore.has('validatedFields')) {
        var validatedFields = _toConsumableArray(valueStore.get('validatedFields'));
        if (!validatedFields.includes(modelName)) {
          validatedFields.push(modelName);
        }
        valueStore.set('validatedFields', validatedFields);
      }
    }
  }]);
  return ValidatedFieldsPlugin;
}();
var PageUnloadingPlugin = /*#__PURE__*/function () {
  function PageUnloadingPlugin() {
    _classCallCheck(this, PageUnloadingPlugin);
    this.isConnected = false;
  }
  _createClass(PageUnloadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this18 = this;
      component.on('render:started', function (html, response, controls) {
        if (!_this18.isConnected) {
          controls.shouldRender = false;
        }
      });
      component.on('connect', function () {
        _this18.isConnected = true;
      });
      component.on('disconnect', function () {
        _this18.isConnected = false;
      });
    }
  }]);
  return PageUnloadingPlugin;
}();
var PollingDirector = /*#__PURE__*/function () {
  function PollingDirector(component) {
    _classCallCheck(this, PollingDirector);
    this.isPollingActive = true;
    this.pollingIntervals = [];
    this.component = component;
  }
  _createClass(PollingDirector, [{
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.polls.push({
        actionName: actionName,
        duration: duration
      });
      if (this.isPollingActive) {
        this.initiatePoll(actionName, duration);
      }
    }
  }, {
    key: "startAllPolling",
    value: function startAllPolling() {
      var _this19 = this;
      if (this.isPollingActive) {
        return;
      }
      this.isPollingActive = true;
      this.polls.forEach(function (_ref7) {
        var actionName = _ref7.actionName,
          duration = _ref7.duration;
        _this19.initiatePoll(actionName, duration);
      });
    }
  }, {
    key: "stopAllPolling",
    value: function stopAllPolling() {
      this.isPollingActive = false;
      this.pollingIntervals.forEach(function (interval) {
        clearInterval(interval);
      });
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.stopAllPolling();
      this.polls = [];
      this.startAllPolling();
    }
  }, {
    key: "initiatePoll",
    value: function initiatePoll(actionName, duration) {
      var _this20 = this;
      var callback;
      if (actionName === '$render') {
        callback = function callback() {
          _this20.component.render();
        };
      } else {
        callback = function callback() {
          _this20.component.action(actionName, {}, 0);
        };
      }
      var timer = setInterval(function () {
        callback();
      }, duration);
      this.pollingIntervals.push(timer);
    }
  }]);
  return PollingDirector;
}();
var PollingPlugin = /*#__PURE__*/function () {
  function PollingPlugin() {
    _classCallCheck(this, PollingPlugin);
  }
  _createClass(PollingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this21 = this;
      this.element = component.element;
      this.pollingDirector = new PollingDirector(component);
      this.initializePolling();
      component.on('connect', function () {
        _this21.pollingDirector.startAllPolling();
      });
      component.on('disconnect', function () {
        _this21.pollingDirector.stopAllPolling();
      });
      component.on('render:finished', function () {
        _this21.initializePolling();
      });
    }
  }, {
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.pollingDirector.addPoll(actionName, duration);
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.pollingDirector.clearPolling();
    }
  }, {
    key: "initializePolling",
    value: function initializePolling() {
      var _this22 = this;
      this.clearPolling();
      if (this.element.dataset.poll === undefined) {
        return;
      }
      var rawPollConfig = this.element.dataset.poll;
      var directives = parseDirectives(rawPollConfig || '$render');
      directives.forEach(function (directive) {
        var duration = 2000;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case 'delay':
              if (modifier.value) {
                duration = parseInt(modifier.value);
              }
              break;
            default:
              console.warn("Unknown modifier \"".concat(modifier.name, "\" in data-poll \"").concat(rawPollConfig, "\"."));
          }
        });
        _this22.addPoll(directive.action, duration);
      });
    }
  }]);
  return PollingPlugin;
}();
var SetValueOntoModelFieldsPlugin = /*#__PURE__*/function () {
  function SetValueOntoModelFieldsPlugin() {
    _classCallCheck(this, SetValueOntoModelFieldsPlugin);
  }
  _createClass(SetValueOntoModelFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this23 = this;
      this.synchronizeValueOfModelFields(component);
      component.on('render:finished', function () {
        _this23.synchronizeValueOfModelFields(component);
      });
    }
  }, {
    key: "synchronizeValueOfModelFields",
    value: function synchronizeValueOfModelFields(component) {
      component.element.querySelectorAll('[data-model]').forEach(function (element) {
        if (!(element instanceof HTMLElement)) {
          throw new Error('Invalid element using data-model.');
        }
        if (element instanceof HTMLFormElement) {
          return;
        }
        if (!elementBelongsToThisComponent(element, component)) {
          return;
        }
        var modelDirective = getModelDirectiveFromElement(element);
        if (!modelDirective) {
          return;
        }
        var modelName = modelDirective.action;
        if (component.getUnsyncedModels().includes(modelName)) {
          return;
        }
        if (component.valueStore.has(modelName)) {
          setValueOnElement(element, component.valueStore.get(modelName));
        }
        if (element instanceof HTMLSelectElement && !element.multiple) {
          component.valueStore.set(modelName, getValueFromElement(element, component.valueStore));
        }
      });
    }
  }]);
  return SetValueOntoModelFieldsPlugin;
}();
function getModelBinding(modelDirective) {
  var shouldRender = true;
  var targetEventName = null;
  var debounce = false;
  modelDirective.modifiers.forEach(function (modifier) {
    switch (modifier.name) {
      case 'on':
        if (!modifier.value) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " requires a value - e.g. on(change)."));
        }
        if (!['input', 'change'].includes(modifier.value)) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " only accepts the arguments \"input\" or \"change\"."));
        }
        targetEventName = modifier.value;
        break;
      case 'norender':
        shouldRender = false;
        break;
      case 'debounce':
        debounce = modifier.value ? parseInt(modifier.value) : true;
        break;
      default:
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" in data-model=\"").concat(modelDirective.getString(), "\"."));
    }
  });
  var _modelDirective$actio = modelDirective.action.split(':'),
    _modelDirective$actio2 = _slicedToArray(_modelDirective$actio, 2),
    modelName = _modelDirective$actio2[0],
    innerModelName = _modelDirective$actio2[1];
  return {
    modelName: modelName,
    innerModelName: innerModelName || null,
    shouldRender: shouldRender,
    debounce: debounce,
    targetEventName: targetEventName
  };
}
var ComponentRegistry = /*#__PURE__*/function () {
  function ComponentRegistry() {
    _classCallCheck(this, ComponentRegistry);
    this.componentMapByElement = new WeakMap();
    this.componentMapByComponent = new Map();
  }
  _createClass(ComponentRegistry, [{
    key: "registerComponent",
    value: function registerComponent(element, component) {
      this.componentMapByElement.set(element, component);
      this.componentMapByComponent.set(component, component.name);
    }
  }, {
    key: "unregisterComponent",
    value: function unregisterComponent(component) {
      this.componentMapByElement["delete"](component.element);
      this.componentMapByComponent["delete"](component);
    }
  }, {
    key: "getComponent",
    value: function getComponent(element) {
      var _this24 = this;
      return new Promise(function (resolve, reject) {
        var count = 0;
        var maxCount = 10;
        var interval = setInterval(function () {
          var component = _this24.componentMapByElement.get(element);
          if (component) {
            clearInterval(interval);
            resolve(component);
          }
          count++;
          if (count > maxCount) {
            clearInterval(interval);
            reject(new Error("Component not found for element ".concat(getElementAsTagText(element))));
          }
        }, 5);
      });
    }
  }, {
    key: "findComponents",
    value: function findComponents(currentComponent, onlyParents, onlyMatchName) {
      var components = [];
      this.componentMapByComponent.forEach(function (componentName, component) {
        if (onlyParents && (currentComponent === component || !component.element.contains(currentComponent.element))) {
          return;
        }
        if (onlyMatchName && componentName !== onlyMatchName) {
          return;
        }
        components.push(component);
      });
      return components;
    }
  }]);
  return ComponentRegistry;
}();
var getComponent = function getComponent(element) {
  return LiveControllerDefault.componentRegistry.getComponent(element);
};
var LiveControllerDefault = /*#__PURE__*/function (_Controller) {
  _inherits(LiveControllerDefault, _Controller);
  var _super = _createSuper(LiveControllerDefault);
  function LiveControllerDefault() {
    var _this25;
    _classCallCheck(this, LiveControllerDefault);
    _this25 = _super.apply(this, arguments);
    _this25.pendingActionTriggerModelElement = null;
    _this25.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this25.handleInputEvent(event);
      }
    }, {
      event: 'change',
      callback: function callback(event) {
        return _this25.handleChangeEvent(event);
      }
    }, {
      event: 'live:connect',
      callback: function callback(event) {
        return _this25.handleConnectedControllerEvent(event);
      }
    }];
    _this25.pendingFiles = {};
    return _this25;
  }
  _createClass(LiveControllerDefault, [{
    key: "initialize",
    value: function initialize() {
      var _this26 = this;
      this.handleDisconnectedChildControllerEvent = this.handleDisconnectedChildControllerEvent.bind(this);
      var id = this.element.dataset.liveId || null;
      this.component = new Component(this.element, this.nameValue, this.propsValue, this.listenersValue, function (currentComponent, onlyParents, onlyMatchName) {
        return LiveControllerDefault.componentRegistry.findComponents(currentComponent, onlyParents, onlyMatchName);
      }, this.fingerprintValue, id, new Backend(this.urlValue, this.csrfValue), new StandardElementDriver());
      this.proxiedComponent = proxifyComponent(this.component);
      this.element.__component = this.proxiedComponent;
      if (this.hasDebounceValue) {
        this.component.defaultDebounce = this.debounceValue;
      }
      var plugins = [new LoadingPlugin(), new ValidatedFieldsPlugin(), new PageUnloadingPlugin(), new PollingPlugin(), new SetValueOntoModelFieldsPlugin()];
      plugins.forEach(function (plugin) {
        _this26.component.addPlugin(plugin);
      });
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this27 = this;
      LiveControllerDefault.componentRegistry.registerComponent(this.element, this.component);
      this.component.connect();
      this.elementEventListeners.forEach(function (_ref8) {
        var event = _ref8.event,
          callback = _ref8.callback;
        _this27.component.element.addEventListener(event, callback);
      });
      this.dispatchEvent('connect');
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      var _this28 = this;
      LiveControllerDefault.componentRegistry.unregisterComponent(this.component);
      this.component.disconnect();
      this.elementEventListeners.forEach(function (_ref9) {
        var event = _ref9.event,
          callback = _ref9.callback;
        _this28.component.element.removeEventListener(event, callback);
      });
      this.dispatchEvent('disconnect');
    }
  }, {
    key: "update",
    value: function update(event) {
      if (event.type === 'input' || event.type === 'change') {
        throw new Error("Since LiveComponents 2.3, you no longer need data-action=\"live#update\" on form elements. Found on element: ".concat(getElementAsTagText(event.currentTarget)));
      }
      this.updateModelFromElementEvent(event.currentTarget, null);
    }
  }, {
    key: "action",
    value: function action(event) {
      var _this29 = this;
      var rawAction = event.currentTarget.dataset.actionName;
      var directives = parseDirectives(rawAction);
      var debounce = false;
      directives.forEach(function (directive) {
        var pendingFiles = {};
        var validModifiers = new Map();
        validModifiers.set('prevent', function () {
          event.preventDefault();
        });
        validModifiers.set('stop', function () {
          event.stopPropagation();
        });
        validModifiers.set('self', function () {
          if (event.target !== event.currentTarget) {
            return;
          }
        });
        validModifiers.set('debounce', function (modifier) {
          debounce = modifier.value ? parseInt(modifier.value) : true;
        });
        validModifiers.set('files', function (modifier) {
          if (!modifier.value) {
            pendingFiles = _this29.pendingFiles;
          } else if (_this29.pendingFiles[modifier.value]) {
            pendingFiles[modifier.value] = _this29.pendingFiles[modifier.value];
          }
        });
        directive.modifiers.forEach(function (modifier) {
          var _a;
          if (validModifiers.has(modifier.name)) {
            var callable = (_a = validModifiers.get(modifier.name)) !== null && _a !== void 0 ? _a : function () {};
            callable(modifier);
            return;
          }
          console.warn("Unknown modifier ".concat(modifier.name, " in action \"").concat(rawAction, "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
        });
        for (var _i5 = 0, _Object$entries4 = Object.entries(pendingFiles); _i5 < _Object$entries4.length; _i5++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i5], 2),
            key = _Object$entries4$_i[0],
            input = _Object$entries4$_i[1];
          if (input.files) {
            _this29.component.files(key, input);
          }
          delete _this29.pendingFiles[key];
        }
        _this29.component.action(directive.action, directive.named, debounce);
        if (getModelDirectiveFromElement(event.currentTarget, false)) {
          _this29.pendingActionTriggerModelElement = event.currentTarget;
        }
      });
    }
  }, {
    key: "$render",
    value: function $render() {
      return this.component.render();
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var _this30 = this;
      this.getEmitDirectives(event).forEach(function (_ref10) {
        var name = _ref10.name,
          data = _ref10.data,
          nameMatch = _ref10.nameMatch;
        _this30.component.emit(name, data, nameMatch);
      });
    }
  }, {
    key: "emitUp",
    value: function emitUp(event) {
      var _this31 = this;
      this.getEmitDirectives(event).forEach(function (_ref11) {
        var name = _ref11.name,
          data = _ref11.data,
          nameMatch = _ref11.nameMatch;
        _this31.component.emitUp(name, data, nameMatch);
      });
    }
  }, {
    key: "emitSelf",
    value: function emitSelf(event) {
      var _this32 = this;
      this.getEmitDirectives(event).forEach(function (_ref12) {
        var name = _ref12.name,
          data = _ref12.data;
        _this32.component.emitSelf(name, data);
      });
    }
  }, {
    key: "getEmitDirectives",
    value: function getEmitDirectives(event) {
      var element = event.currentTarget;
      if (!element.dataset.event) {
        throw new Error("No data-event attribute found on element: ".concat(getElementAsTagText(element)));
      }
      var eventInfo = element.dataset.event;
      var directives = parseDirectives(eventInfo);
      var emits = [];
      directives.forEach(function (directive) {
        var nameMatch = null;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case 'name':
              nameMatch = modifier.value;
              break;
            default:
              throw new Error("Unknown modifier ".concat(modifier.name, " in event \"").concat(eventInfo, "\"."));
          }
        });
        emits.push({
          name: directive.action,
          data: directive.named,
          nameMatch: nameMatch
        });
      });
      return emits;
    }
  }, {
    key: "$updateModel",
    value: function $updateModel(model, value) {
      var shouldRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return this.component.set(model, value, shouldRender, debounce);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'input');
    }
  }, {
    key: "handleChangeEvent",
    value: function handleChangeEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'change');
    }
  }, {
    key: "updateModelFromElementEvent",
    value: function updateModelFromElementEvent(element, eventName) {
      var _a;
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      if (element instanceof HTMLInputElement && element.type === 'file') {
        var key = element.name;
        if ((_a = element.files) === null || _a === void 0 ? void 0 : _a.length) {
          this.pendingFiles[key] = element;
        } else if (this.pendingFiles[key]) {
          delete this.pendingFiles[key];
        }
      }
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return;
      }
      var modelBinding = getModelBinding(modelDirective);
      if (!modelBinding.targetEventName) {
        modelBinding.targetEventName = 'input';
      }
      if (this.pendingActionTriggerModelElement === element) {
        modelBinding.shouldRender = false;
      }
      if (eventName === 'change' && modelBinding.targetEventName === 'input') {
        modelBinding.targetEventName = 'change';
      }
      if (eventName && modelBinding.targetEventName !== eventName) {
        return;
      }
      if (false === modelBinding.debounce) {
        if (modelBinding.targetEventName === 'input') {
          modelBinding.debounce = true;
        } else {
          modelBinding.debounce = 0;
        }
      }
      var finalValue = getValueFromElement(element, this.component.valueStore);
      this.component.set(modelBinding.modelName, finalValue, modelBinding.shouldRender, modelBinding.debounce);
    }
  }, {
    key: "handleConnectedControllerEvent",
    value: function handleConnectedControllerEvent(event) {
      if (event.target === this.element) {
        return;
      }
      var childController = event.detail.controller;
      if (childController.component.getParent()) {
        return;
      }
      var modelDirectives = getAllModelDirectiveFromElements(childController.element);
      var modelBindings = modelDirectives.map(getModelBinding);
      this.component.addChild(childController.component, modelBindings);
      childController.element.addEventListener('live:disconnect', this.handleDisconnectedChildControllerEvent);
    }
  }, {
    key: "handleDisconnectedChildControllerEvent",
    value: function handleDisconnectedChildControllerEvent(event) {
      var childController = event.detail.controller;
      childController.element.removeEventListener('live:disconnect', this.handleDisconnectedChildControllerEvent);
      if (childController.component.getParent() !== this.component) {
        return;
      }
      this.component.removeChild(childController.component);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      detail.controller = this;
      detail.component = this.proxiedComponent;
      this.dispatch(name, {
        detail: detail,
        prefix: 'live',
        cancelable: cancelable,
        bubbles: canBubble
      });
    }
  }]);
  return LiveControllerDefault;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_56__.Controller);
LiveControllerDefault.values = {
  name: String,
  url: String,
  props: Object,
  csrf: String,
  listeners: {
    type: Array,
    "default": []
  },
  debounce: {
    type: Number,
    "default": 150
  },
  id: String,
  fingerprint: {
    type: String,
    "default": ''
  }
};
LiveControllerDefault.componentRegistry = new ComponentRegistry();


/***/ }),

/***/ "./vendor/symfony/ux-svelte/assets/dist/render_controller.js":
/*!*******************************************************************!*\
  !*** ./vendor/symfony/ux-svelte/assets/dist/render_controller.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    _classCallCheck(this, default_1);
    return _super.apply(this, arguments);
  }
  _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      var _a, _b;
      this.element.innerHTML = '';
      this.props = (_a = this.propsValue) !== null && _a !== void 0 ? _a : undefined;
      this.intro = (_b = this.introValue) !== null && _b !== void 0 ? _b : undefined;
      this.dispatchEvent('connect');
      var Component = window.resolveSvelteComponent(this.componentValue);
      this._destroyIfExists();
      this.app = new Component({
        target: this.element,
        props: this.props,
        intro: this.intro
      });
      this.element.root = this.app;
      this.dispatchEvent('mount', {
        component: Component
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this._destroyIfExists();
      this.dispatchEvent('unmount');
    }
  }, {
    key: "_destroyIfExists",
    value: function _destroyIfExists() {
      if (this.element.root !== undefined) {
        this.element.root.$destroy();
        delete this.element.root;
      }
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var detail = Object.assign({
        componentName: this.componentValue,
        props: this.props,
        intro: this.intro
      }, payload);
      this.dispatch(name, {
        detail: detail,
        prefix: 'svelte'
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_17__.Controller);
default_1.values = {
  component: String,
  props: Object,
  intro: Boolean
};


/***/ }),

/***/ "./vendor/symfony/ux-swup/assets/dist/controller.js":
/*!**********************************************************!*\
  !*** ./vendor/symfony/ux-swup/assets/dist/controller.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var swup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! swup */ "./node_modules/swup/lib/index.js");
/* harmony import */ var _swup_debug_plugin__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @swup/debug-plugin */ "./node_modules/@swup/debug-plugin/lib/index.js");
/* harmony import */ var _swup_forms_plugin__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @swup/forms-plugin */ "./node_modules/@swup/forms-plugin/lib/index.js");
/* harmony import */ var _swup_fade_theme__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @swup/fade-theme */ "./node_modules/@swup/fade-theme/lib/index.js");
/* harmony import */ var _swup_fade_theme__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_swup_fade_theme__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _swup_slide_theme__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @swup/slide-theme */ "./node_modules/@swup/slide-theme/lib/index.js");
/* harmony import */ var _swup_slide_theme__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_swup_slide_theme__WEBPACK_IMPORTED_MODULE_25__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    _classCallCheck(this, default_1);
    return _super.apply(this, arguments);
  }
  _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      var dataContainers = this.containersValue;
      var mainElement = this.mainElementValue || dataContainers[0] || '#swup';
      var allElements = [mainElement].concat(dataContainers);
      var containersList = allElements.filter(function (item, index) {
        return allElements.indexOf(item) === index;
      });
      var options = {
        containers: containersList,
        plugins: ['slide' === this.themeValue ? new (_swup_slide_theme__WEBPACK_IMPORTED_MODULE_25___default())({
          mainElement: mainElement
        }) : new (_swup_fade_theme__WEBPACK_IMPORTED_MODULE_24___default())({
          mainElement: mainElement
        }), new _swup_forms_plugin__WEBPACK_IMPORTED_MODULE_23__["default"]()]
      };
      if (this.hasMainElementValue) {
        options.mainElement = this.mainElementValue;
      }
      if (this.hasAnimateHistoryBrowsingValue) {
        options.animateHistoryBrowsing = this.animateHistoryBrowsingValue;
      }
      if (this.hasAnimationSelectorValue) {
        options.animationSelector = this.animationSelectorValue;
      }
      if (this.hasCacheValue) {
        options.cache = this.cacheValue;
      }
      if (this.hasLinkSelectorValue) {
        options.linkSelector = this.linkSelectorValue;
      }
      if (this.debugValue) {
        options.plugins.push(new _swup_debug_plugin__WEBPACK_IMPORTED_MODULE_22__["default"]());
      }
      this.dispatchEvent('pre-connect', {
        options: options
      });
      var swup = new swup__WEBPACK_IMPORTED_MODULE_21__["default"](options);
      this.dispatchEvent('connect', {
        swup: swup,
        options: options
      });
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'swup'
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__.Controller);
default_1.values = {
  animateHistoryBrowsing: Boolean,
  animationSelector: String,
  cache: Boolean,
  containers: Array,
  linkSelector: String,
  theme: String,
  debug: Boolean,
  mainElement: String
};


/***/ }),

/***/ "./vendor/symfony/ux-toggle-password/assets/dist/controller.js":
/*!*********************************************************************!*\
  !*** ./vendor/symfony/ux-toggle-password/assets/dist/controller.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }






















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    var _this;
    _classCallCheck(this, default_1);
    _this = _super.apply(this, arguments);
    _this.isDisplayed = false;
    _this.visibleIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"toggle-password-icon\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n<path d=\"M10 12a2 2 0 100-4 2 2 0 000 4z\" />\n<path fill-rule=\"evenodd\" d=\"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z\" clip-rule=\"evenodd\" />\n</svg>";
    _this.hiddenIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"toggle-password-icon\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n<path fill-rule=\"evenodd\" d=\"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z\" clip-rule=\"evenodd\" />\n<path d=\"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z\" />\n</svg>";
    return _this;
  }
  _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      if (this.visibleIconValue !== 'Default') {
        this.visibleIcon = this.visibleIconValue;
      }
      if (this.hiddenIconValue !== 'Default') {
        this.hiddenIcon = this.hiddenIconValue;
      }
      var button = this.createButton();
      this.element.insertAdjacentElement('afterend', button);
      this.dispatchEvent('connect', {
        element: this.element,
        button: button
      });
    }
  }, {
    key: "createButton",
    value: function createButton() {
      var _button$classList;
      var button = document.createElement('button');
      button.type = 'button';
      (_button$classList = button.classList).add.apply(_button$classList, _toConsumableArray(this.buttonClassesValue));
      button.setAttribute('tabindex', '-1');
      button.addEventListener('click', this.toggle.bind(this));
      button.innerHTML = this.visibleIcon + ' ' + this.visibleLabelValue;
      return button;
    }
  }, {
    key: "toggle",
    value: function toggle(event) {
      this.isDisplayed = !this.isDisplayed;
      var toggleButtonElement = event.currentTarget;
      toggleButtonElement.innerHTML = this.isDisplayed ? this.hiddenIcon + ' ' + this.hiddenLabelValue : this.visibleIcon + ' ' + this.visibleLabelValue;
      this.element.setAttribute('type', this.isDisplayed ? 'text' : 'password');
      this.dispatchEvent(this.isDisplayed ? 'show' : 'hide', {
        element: this.element,
        button: toggleButtonElement
      });
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'toggle-password'
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_22__.Controller);
default_1.values = {
  visibleLabel: {
    type: String,
    "default": 'Show'
  },
  visibleIcon: {
    type: String,
    "default": 'Default'
  },
  hiddenLabel: {
    type: String,
    "default": 'Hide'
  },
  hiddenIcon: {
    type: String,
    "default": 'Default'
  },
  buttonClasses: Array
};


/***/ }),

/***/ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js":
/*!*****************************************************************!*\
  !*** ./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ turbo_controller)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var turbo_controller = /*#__PURE__*/function (_Controller) {
  _inherits(turbo_controller, _Controller);
  var _super = _createSuper(turbo_controller);
  function turbo_controller() {
    _classCallCheck(this, turbo_controller);
    return _super.apply(this, arguments);
  }
  return _createClass(turbo_controller);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_16__.Controller);


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/symfony/ux-dropzone/assets/dist/style.min.css":
/*!**************************************************************!*\
  !*** ./vendor/symfony/ux-dropzone/assets/dist/style.min.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live.min.css":
/*!*******************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live.min.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/symfony/ux-toggle-password/assets/dist/style.min.css":
/*!*********************************************************************!*\
  !*** ./vendor/symfony/ux-toggle-password/assets/dist/style.min.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_swup_debug-plugin_l-2ffdeb"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REK0M7QUFDdkI7QUFBQSxJQUVuQnFxQixnQkFBZ0I7RUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBLEVBQVM5eUIsMkRBQVU7Ozs7Ozs7Ozs7Ozs7QUNIekM7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWNjLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jja29mZi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtZHJvcHpvbmUvYXNzZXRzL2Rpc3QvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9hc3NldHMvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtc3ZlbHRlL2Fzc2V0cy9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXN3dXAvYXNzZXRzL2Rpc3QvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC10b2dnbGUtcGFzc3dvcmQvYXNzZXRzL2Rpc3QvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC10dXJiby9hc3NldHMvZGlzdC90dXJib19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWRyb3B6b25lL2Fzc2V0cy9kaXN0L3N0eWxlLm1pbi5jc3M/ZWI0YSIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9hc3NldHMvZGlzdC9saXZlLm1pbi5jc3M/OTZjMCIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC10b2dnbGUtcGFzc3dvcmQvYXNzZXRzL2Rpc3Qvc3R5bGUubWluLmNzcz8zNjAyIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImltcG9ydCAnQHN5bWZvbnkvdXgtZHJvcHpvbmUvZGlzdC9zdHlsZS5taW4uY3NzJztcbmltcG9ydCAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvZGlzdC9saXZlLm1pbi5jc3MnO1xuaW1wb3J0ICdAc3ltZm9ueS91eC10b2dnbGUtcGFzc3dvcmQvZGlzdC9zdHlsZS5taW4uY3NzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LWRyb3B6b25lLS1kcm9wem9uZSc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1kcm9wem9uZS9kaXN0L2NvbnRyb2xsZXIuanMnKSxcbiAgJ2xpdmUnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMnKSxcbiAgJ3N5bWZvbnktLXV4LXN2ZWx0ZS0tc3ZlbHRlJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXN2ZWx0ZS9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJyksXG4gICdzeW1mb255LS11eC1zd3VwLS1zd3VwJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXN3dXAvZGlzdC9jb250cm9sbGVyLmpzJyksXG4gICdzeW1mb255LS11eC10b2dnbGUtcGFzc3dvcmQtLXRvZ2dsZS1wYXNzd29yZCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC10b2dnbGUtcGFzc3dvcmQvZGlzdC9jb250cm9sbGVyLmpzJyksXG4gICdzeW1mb255LS11eC10dXJiby0tdHVyYm8tY29yZSc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC10dXJiby9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuICovIiwiaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuXG5jb25zdCBhY2MgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpc2F0aW9uIHBhZ2UgYWNjdWVpbFwiKTtcbiAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpc2F0aW9uIGJhY2sgb2ZmIGRlIGJlbm9pdCBcIlxuICAgICk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idG5cIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjLnRvZ2dsZU5hdik7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25DYXRlcmdvcmllc1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2MudG9nZ2xlRHJvcENhdGVnb3JpZXMpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duTWFycXVlc1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2MudG9nZ2xlRHJvcE1hcnF1ZXMpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkdlbnJlXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjYy50b2dnbGVEcm9wR2VucmUpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duQ291bGV1cnNcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjLnRvZ2dsZURyb3BDb3VsZXVycyk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdHJlTW9iaWxlXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjYy50b2dnbGVGaWx0cmVNb2JpbGUpO1xuXG4gIC8qICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdGVyU2VsZWN0aW9uXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICBhY2MudG9nZ2xlRnJpbHRlclNlbGVjdGlvblxuICAgICAgKTsqL1xuXG4gICAgXG4gIH0sXG5cbiAgdG9nZ2xlTmF2OiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmXDqWN1cMOocmF0aW9uIGRlcyBzdmcncydcbiAgICBjb25zdCBidXJnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXJnZXJTdmdcIik7XG4gICAgY29uc3QgY3JvaXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nyb2l4U3ZnXCIpO1xuICAgIGNvbnN0IG1lbnVNb2JpbGUgPVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGVkLW1lbnVcIik7XG5cbiAgICBidXJnZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgY3JvaXguY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcblxuICAgIGNvbnN0IHRvZ2dsZWRNZW51ID0gbWVudU1vYmlsZS5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgXCItdHJhbnNsYXRlLXktZnVsbFwiXG4gICAgKTtcblxuICAgIGlmICh0b2dnbGVkTWVudSA9PSB0cnVlKSB7XG4gICAgICBtZW51TW9iaWxlLmNsYXNzTGlzdC5hZGQoXCItdHJhbnNsYXRlLXktZnVsbFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVudU1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIGZvbmN0aW9uIGRyb3AgZmlsdHJlIGNhdGVnb3JpZXNcbiAgdG9nZ2xlRHJvcENhdGVnb3JpZXM6IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWVudUZpbHRyZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1lbnVGaWx0cmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiZHVyYXRpb24tNTAwXCIpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Fycm93Q2F0ZWdvcmllc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNhdGVyZ29yaWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJhY2tkcm9wLWJsdXItM3hsXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNhdGVyZ29yaWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJnLXdoaXRlLzI1XCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNjb2xvcnNGaWx0ZXJzQ2F0ZWdvcmllc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJ0ZXh0LXBpbmstOTAwXCIpO1xuICB9LFxuXG4gIC8vIGZvbmN0aW9uIGRyb3AgZmlsdHJlIE1hcnF1ZXNcbiAgdG9nZ2xlRHJvcE1hcnF1ZXM6IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWVudUZpbHRyZU1hcnF1ZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Fycm93TWFycXVlc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bk1hcnF1ZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmFja2Ryb3AtYmx1ci0zeGxcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duTWFycXVlc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiZy13aGl0ZS8yNVwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JzRmlsdGVyc01hcnF1ZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwidGV4dC1waW5rLTkwMFwiKTtcbiAgfSxcblxuICAvLyBmb25jdGlvbiBkcm9wIGZpbHRyZSBHZW5yZVxuICB0b2dnbGVEcm9wR2VucmU6IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWVudUZpbHRyZUdlbnJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYXJyb3dHZW5yZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkdlbnJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJhY2tkcm9wLWJsdXItM3hsXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkdlbnJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJnLXdoaXRlLzI1XCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNjb2xvcnNGaWx0ZXJzR2VucmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwidGV4dC1waW5rLTkwMFwiKTtcbiAgfSxcblxuICAvLyBmb25jdGlvbiBkcm9wIGZpbHRyZSBDb3VsZXVyc1xuICB0b2dnbGVEcm9wQ291bGV1cnM6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImJlbm9pdFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWVudUZpbHRyZUNvdWxldXJzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYXJyb3dDb3VsZXVyc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNvdWxldXJzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJhY2tkcm9wLWJsdXItM3hsXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNvdWxldXJzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJnLXdoaXRlLzI1XCIpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yc0ZpbHRlcnNDb3VsZXVyXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInRleHQtcGluay05MDBcIik7XG4gIH0sXG5cbiAgdG9nZ2xlRmlsdHJlTW9iaWxlOiBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2ZpbHRyZU1vYmlsZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2ZpbHRyZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0sXG4gIC8qXG4gIHRvZ2dsZUZyaWx0ZXJTZWxlY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBtZW51U2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI3N1Ym1lbnVGaWx0ZXJTZWxlY3Rpb25cIlxuICAgICk7XG4gICAgY29uc3QgdG9nZ2xlRmlsdGVyU2VsZWN0aW9uID1cbiAgICAgIG1lbnVTZWxlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZShcIi10cmFuc2xhdGUteS1mdWxsXCIpO1xuXG4gICAgaWYgKHRvZ2dsZUZpbHRlclNlbGVjdGlvbiA9PSB0cnVlKSB7XG4gICAgICBtZW51U2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCItdHJhbnNsYXRlLXktZnVsbFwiKTtcbiAgICAgIG1lbnVTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZChcImR1cmF0aW9uLTcwMFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVudVNlbGVjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XG4gICAgfVxuIFxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNhcnJvd0ZpbHRlclNlbGVjdGlvblwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICB9LFxuICAqL1xuXG5cblxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYWNjLmluaXQpO1xuIiwiLy9pbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuIGltcG9ydCBcIi4vYm9vdHN0cmFwXCI7XG4gLy8gYXNzZXRzL2FwcC5qc1xuXG5cblxuXG5pbXBvcnQgXCIuL2FjYy5qc1wiO1xuaW1wb3J0IFwiLi9iY2tvZmYuanNcIjtcbmltcG9ydCBcIi4vaW1hZ2VzLmpzXCI7XG5pbXBvcnQgXCJmbG93Yml0ZVwiO1xuIiwiY29uc3QgYmNrb2ZmID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGlzYXRpb24gYmFjayBvZmYgZGUgYmVub2l0IFwiXG4gICAgICApO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjbmF2aWdhdGlvbklkXCIpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYmNrb2ZmLm9wZW5TaWRlQmVub2l0KTtcblxuICAgIH0sXG4gIFxuICAgIG9wZW5TaWRlQmVub2l0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIiB2b3VzIGV0ZXMgYmllbiBkYW5zIG9wZW5TaWRlQmVub2l0IFwiKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI25hdmlnYXRpb25JZFwiKVxuICAgICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZS0xODBcIik7XG4gIFxuICAgICAgY29uc3Qgc2lkZUJhck5hdiA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2U2lkZWJhclwiKTtcbiAgICAgIGNvbnN0IHN0cm9rZUNvbG9ycyA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmxlY2hlSWRcIik7XG4gIFxuICAgICAgc2lkZUJhciA9IHNpZGVCYXJOYXYuY2xhc3NMaXN0LnRvZ2dsZShcInctMTZcIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzaWRlQmFyLCBcImluZm8yXCIpO1xuICBcbiAgICAgIGlmIChzaWRlQmFyID09IHRydWUpIHtcbiAgICAgICAgc2lkZUJhck5hdi5jbGFzc0xpc3QuYWRkKFwidy0xNlwiKTtcbiAgICAgICAgc3Ryb2tlQ29sb3JzLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJva2UtcGluay05MDBcIik7XG4gICAgICAgIHN0cm9rZUNvbG9ycy5jbGFzc0xpc3QuYWRkKFwic3Ryb2tlLXdoaXRlXCIpO1xuICAgICAgICBzaWRlQmFyTmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJ3LTU2XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZUJhck5hdi5jbGFzc0xpc3QuYWRkKFwidy01NlwiKTtcbiAgICAgICAgc3Ryb2tlQ29sb3JzLmNsYXNzTGlzdC5hZGQoXCJzdHJva2UtcGluay05MDBcIik7XG4gICAgICAgIHN0cm9rZUNvbG9ycy5jbGFzc0xpc3QucmVtb3ZlKFwic3Ryb2tlLXdoaXRlXCIpO1xuICAgICAgICBzaWRlQmFyTmF2LmNsYXNzTGlzdC5hZGQoXCJkdXJhdGlvbi01MDBcIik7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbiAgXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGJja29mZi5pbml0KTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuXG5cbiIsImNvbnN0IGltYWdlcyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGlzdGlvbiBkdSBmaWNoaWVyIGltYWdlcy5qcyBiYWNrIG9mZmljZSBcIik7XG5cbiAgICBsZXQgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZGVsZXRlXVwiKTsgXG5cbiAgICAvLyBKZSBib3VjbGUgc3VyIG1lcyBsaWVuc1xuICAgICBmb3IgKCBsZXQgbGluayBvZiBsaW5rcykge1xuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW1hZ2VzLmRlbGV0ZUltYWdlUHJvZHVjdCk7XG4gICAgICBjb25zb2xlLmxvZyhsaW5rKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gIH0sXG4gIGRlbGV0ZUltYWdlUHJvZHVjdCA6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJ2b3VzIGV0ZXMgYmllbiBkYW5zIGRlbGV0ZUltYWdlUHJvZHVjdFwiKTtcbiAgICAvLyBKZSBkZW1hbmRlIGNvbmZpcm1hdGlvblxuICAgIGlmKGNvbmZpcm0oJ1ZvdWxlei12b3VzIHN1cHByaW1lciBjZXR0ZSBpbWFnZSBkZSB2b3RyZSBwcmR1aXQgPycpKXtcbiAgICAgIC8vIEonZW52b2llIG1hIHJlcXXDqnRlIGFqYXhcbiAgICAgIGZldGNoKHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0sIFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcIl90b2tlblwiOiB0aGlzLmRhdGFzZXQudG9rZW59KVxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGlmKGRhdGEuc3VjY2Vzcyl7XG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBhbGVydChkYXRhLmVycm9yKTtcbiAgICAgIH0gICAgXG4gICAgfSlcblxuICB9XG4gIH1cblxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW1hZ2VzLmluaXQpOyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucHJldmlld0NsZWFyQnV0dG9uVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbGVhcigpKTtcbiAgICAgICAgdGhpcy5pbnB1dFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHRoaXMub25JbnB1dENoYW5nZShldmVudCkpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRUYXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5pbnB1dFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlclRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5wcmV2aWV3VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgdGhpcy5wcmV2aWV3RmlsZW5hbWVUYXJnZXQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjbGVhcicpO1xuICAgIH1cbiAgICBvbklucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGlmICh0eXBlb2YgZmlsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlucHV0VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5wcmV2aWV3RmlsZW5hbWVUYXJnZXQudGV4dENvbnRlbnQgPSBmaWxlLm5hbWU7XG4gICAgICAgIHRoaXMucHJldmlld1RhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBpZiAoZmlsZS50eXBlICYmIGZpbGUudHlwZS5pbmRleE9mKCdpbWFnZScpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fcG9wdWxhdGVJbWFnZVByZXZpZXcoZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjaGFuZ2UnLCBmaWxlKTtcbiAgICB9XG4gICAgX3BvcHVsYXRlSW1hZ2VQcmV2aWV3KGZpbGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBGaWxlUmVhZGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCInICsgZXZlbnQudGFyZ2V0LnJlc3VsdCArICdcIiknO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCA9IHt9KSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ2Ryb3B6b25lJyB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudGFyZ2V0cyA9IFsnaW5wdXQnLCAncGxhY2Vob2xkZXInLCAncHJldmlldycsICdwcmV2aWV3Q2xlYXJCdXR0b24nLCAncHJldmlld0ZpbGVuYW1lJywgJ3ByZXZpZXdJbWFnZSddO1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlcyhjb250ZW50KSB7XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IFtdO1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aXZlcztcbiAgICB9XG4gICAgbGV0IGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudE5hbWUgPSAnJztcbiAgICBsZXQgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICBsZXQgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgIGxldCBjdXJyZW50TmFtZWRBcmd1bWVudHMgPSB7fTtcbiAgICBsZXQgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgIGxldCBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIGNvbnN0IGdldExhc3RBY3Rpb25OYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50QWN0aW9uTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYW55IGRpcmVjdGl2ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlc1tkaXJlY3RpdmVzLmxlbmd0aCAtIDFdLmFjdGlvbjtcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hJbnN0cnVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICAgIGFjdGlvbjogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICAgICAgICBhcmdzOiBjdXJyZW50QXJndW1lbnRzLFxuICAgICAgICAgICAgbmFtZWQ6IGN1cnJlbnROYW1lZEFyZ3VtZW50cyxcbiAgICAgICAgICAgIG1vZGlmaWVyczogY3VycmVudE1vZGlmaWVycyxcbiAgICAgICAgICAgIGdldFN0cmluZzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgICAgIGN1cnJlbnROYW1lZEFyZ3VtZW50cyA9IHt9O1xuICAgICAgICBjdXJyZW50TW9kaWZpZXJzID0gW107XG4gICAgICAgIHN0YXRlID0gJ2FjdGlvbic7XG4gICAgfTtcbiAgICBjb25zdCBwdXNoQXJndW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1peGVkQXJnVHlwZXNFcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm9ybWFsIGFuZCBuYW1lZCBhcmd1bWVudHMgY2Fubm90IGJlIG1peGVkIGluc2lkZSBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcImApO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoY3VycmVudEFyZ3VtZW50TmFtZSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1peGVkQXJnVHlwZXNFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudE5hbWVkQXJndW1lbnRzW2N1cnJlbnRBcmd1bWVudE5hbWUudHJpbSgpXSA9IGN1cnJlbnRBcmd1bWVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnROYW1lZEFyZ3VtZW50cykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1peGVkQXJnVHlwZXNFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50cy5wdXNoKGN1cnJlbnRBcmd1bWVudFZhbHVlLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgIH07XG4gICAgY29uc3QgcHVzaE1vZGlmaWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RpZmllciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcIiBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIGFyZ3VtZW50cy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoY3VycmVudE5hbWVkQXJndW1lbnRzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RpZmllciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcIiBkb2VzIG5vdCBzdXBwb3J0IG5hbWVkIGFyZ3VtZW50cy5gKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50TW9kaWZpZXJzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAwID8gY3VycmVudEFyZ3VtZW50c1swXSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnROYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICAgICAgc3RhdGUgPSAnYWN0aW9uJztcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGFyID0gY29udGVudFtpXTtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAnYWN0aW9uJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJygnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gJ2FyZ3VtZW50cyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50QWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVzaEluc3RydWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnfCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaE1vZGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50QWN0aW9uTmFtZSArPSBjaGFyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJndW1lbnRzJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJyknKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hBcmd1bWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9ICdhZnRlcl9hcmd1bWVudHMnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoQXJndW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnPScpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9IGN1cnJlbnRBcmd1bWVudFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd8Jykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoTW9kaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyICE9PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIHNwYWNlIGFmdGVyICR7Z2V0TGFzdEFjdGlvbk5hbWUoKX0oKWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaWQgeW91IGZvcmdldCB0byBhZGQgYSBjbG9zaW5nIFwiKVwiIGFmdGVyIFwiJHtjdXJyZW50QWN0aW9uTmFtZX1cIj9gKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVTcGFjZWRBcnJheShwYXJ0cykge1xuICAgIGNvbnN0IGZpbmFsUGFydHMgPSBbXTtcbiAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICAgIGZpbmFsUGFydHMucHVzaCguLi5wYXJ0LnNwbGl0KCcgJykpO1xuICAgIH0pO1xuICAgIHJldHVybiBmaW5hbFBhcnRzO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKSB7XG4gICAgcmV0dXJuIChtb2RlbFxuICAgICAgICAucmVwbGFjZSgvXFxbXSQvLCAnJylcbiAgICAgICAgLnNwbGl0KCdbJylcbiAgICAgICAgLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gcy5yZXBsYWNlKCddJywgJycpO1xuICAgIH0pXG4gICAgICAgIC5qb2luKCcuJykpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHZhbHVlU3RvcmUpIHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgY29uc3QgbW9kZWxOYW1lRGF0YSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKG1vZGVsTmFtZURhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RlbFZhbHVlID0gdmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lRGF0YS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1vZGVsVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgbW9kZWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2hlY2tlZCA/IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKGVsKSA9PiBlbC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmRhdGFzZXQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKCd2YWx1ZScgaW4gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBlbGVtZW50LnZhbHVlID09IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZUZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gZWxlbWVudC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB2YWx1ZUZvdW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGVsZW1lbnQudmFsdWUgPT0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBhcnJheVdyYXBwZWRWYWx1ZSA9IFtdLmNvbmNhdCh2YWx1ZSkubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgJyc7XG4gICAgICAgIH0pO1xuICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQub3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBhcnJheVdyYXBwZWRWYWx1ZS5pbmNsdWRlcyhvcHRpb24udmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6IHZhbHVlO1xuICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQuZGF0YXNldC5tb2RlbCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0Lm1vZGVsKTtcbiAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCB8fCBkaXJlY3RpdmUubmFtZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGF0YS1tb2RlbD1cIiR7ZWxlbWVudC5kYXRhc2V0Lm1vZGVsfVwiIGZvcm1hdCBpcyBpbnZhbGlkOiBpdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmcgYXJndW1lbnRzIHRvIHRoZSBtb2RlbC5gKTtcbiAgICAgICAgfVxuICAgICAgICBkaXJlY3RpdmUuYWN0aW9uID0gbm9ybWFsaXplTW9kZWxOYW1lKGRpcmVjdGl2ZS5hY3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBkaXJlY3RpdmVzO1xufVxuZnVuY3Rpb24gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCB0aHJvd09uTWlzc2luZyA9IHRydWUpIHtcbiAgICBjb25zdCBkYXRhTW9kZWxEaXJlY3RpdmVzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCk7XG4gICAgaWYgKGRhdGFNb2RlbERpcmVjdGl2ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gZGF0YU1vZGVsRGlyZWN0aXZlc1swXTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJykpIHtcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSBlbGVtZW50LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgaWYgKGZvcm1FbGVtZW50ICYmICdtb2RlbCcgaW4gZm9ybUVsZW1lbnQuZGF0YXNldCkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhmb3JtRWxlbWVudC5kYXRhc2V0Lm1vZGVsIHx8ICcqJyk7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSBkaXJlY3RpdmVzWzBdO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZS5hcmdzLmxlbmd0aCA+IDAgfHwgZGlyZWN0aXZlLm5hbWVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkYXRhLW1vZGVsPVwiJHtmb3JtRWxlbWVudC5kYXRhc2V0Lm1vZGVsfVwiIGZvcm1hdCBpcyBpbnZhbGlkOiBpdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmcgYXJndW1lbnRzIHRvIHRoZSBtb2RlbC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpcmVjdGl2ZS5hY3Rpb24gPSBub3JtYWxpemVNb2RlbE5hbWUoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSk7XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghdGhyb3dPbk1pc3NpbmcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGRldGVybWluZSB0aGUgbW9kZWwgbmFtZSBmb3IgXCIke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9XCI6IHRoZSBlbGVtZW50IG11c3QgZWl0aGVyIGhhdmUgYSBcImRhdGEtbW9kZWxcIiAob3IgXCJuYW1lXCIgYXR0cmlidXRlIGxpdmluZyBpbnNpZGUgYSA8Zm9ybSBkYXRhLW1vZGVsPVwiKlwiPikuYCk7XG59XG5mdW5jdGlvbiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpIHtcbiAgICBpZiAoY29tcG9uZW50LmVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghY29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgZm91bmRDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuICAgIGNvbXBvbmVudC5nZXRDaGlsZHJlbigpLmZvckVhY2goKGNoaWxkQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGlmIChmb3VuZENoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50LmVsZW1lbnQgPT09IGVsZW1lbnQgfHwgY2hpbGRDb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgZm91bmRDaGlsZENvbXBvbmVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gIWZvdW5kQ2hpbGRDb21wb25lbnQ7XG59XG5mdW5jdGlvbiBjbG9uZUhUTUxFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgaWYgKCEobmV3RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBjbG9uZSBlbGVtZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuZnVuY3Rpb24gaHRtbFRvRWxlbWVudChodG1sKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGh0bWwgPSBodG1sLnRyaW0oKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIGlmICh0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50ID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCBIVE1MIGNvbnRhaW5zICR7dGVtcGxhdGUuY29udGVudC5jaGlsZEVsZW1lbnRDb3VudH0gZWxlbWVudHMsIGJ1dCBvbmx5IDEgcm9vdCBlbGVtZW50IGlzIGFsbG93ZWQuYCk7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkID0gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGQgbm90IGZvdW5kJyk7XG4gICAgfVxuICAgIGlmICghKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ3JlYXRlZCBlbGVtZW50IGlzIG5vdCBhbiBIVE1MRWxlbWVudDogJHtodG1sLnRyaW0oKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkO1xufVxuZnVuY3Rpb24gZ2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuaW5uZXJIVE1MXG4gICAgICAgID8gZWxlbWVudC5vdXRlckhUTUwuc2xpY2UoMCwgZWxlbWVudC5vdXRlckhUTUwuaW5kZXhPZihlbGVtZW50LmlubmVySFRNTCkpXG4gICAgICAgIDogZWxlbWVudC5vdXRlckhUTUw7XG59XG5jb25zdCBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUgPSBmdW5jdGlvbiAoZWxlbWVudCwgY3VycmVudFZhbHVlcykge1xuICAgIGNvbnN0IGZpbmFsVmFsdWVzID0gWy4uLmN1cnJlbnRWYWx1ZXNdO1xuICAgIGNvbnN0IHZhbHVlID0gaW5wdXRWYWx1ZShlbGVtZW50KTtcbiAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBmaW5hbFZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmluYWxWYWx1ZXM7XG4gICAgfVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGZpbmFsVmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiBmaW5hbFZhbHVlcztcbn07XG5jb25zdCBpbnB1dFZhbHVlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LnZhbHVlID8gZWxlbWVudC5kYXRhc2V0LnZhbHVlIDogZWxlbWVudC52YWx1ZTtcbn07XG5cbmZ1bmN0aW9uIGdldERlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCkge1xuICAgIGNvbnN0IHsgY3VycmVudExldmVsRGF0YSwgZmluYWxLZXkgfSA9IHBhcnNlRGVlcERhdGEoZGF0YSwgcHJvcGVydHlQYXRoKTtcbiAgICBpZiAoY3VycmVudExldmVsRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50TGV2ZWxEYXRhW2ZpbmFsS2V5XTtcbn1cbmNvbnN0IHBhcnNlRGVlcERhdGEgPSBmdW5jdGlvbiAoZGF0YSwgcHJvcGVydHlQYXRoKSB7XG4gICAgY29uc3QgZmluYWxEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgbGV0IGN1cnJlbnRMZXZlbERhdGEgPSBmaW5hbERhdGE7XG4gICAgY29uc3QgcGFydHMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoJy4nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBjdXJyZW50TGV2ZWxEYXRhID0gY3VycmVudExldmVsRGF0YVtwYXJ0c1tpXV07XG4gICAgfVxuICAgIGNvbnN0IGZpbmFsS2V5ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudExldmVsRGF0YSxcbiAgICAgICAgZmluYWxEYXRhLFxuICAgICAgICBmaW5hbEtleSxcbiAgICAgICAgcGFydHMsXG4gICAgfTtcbn07XG5cbmNsYXNzIFZhbHVlU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMgPSB7fTtcbiAgICAgICAgdGhpcy5kaXJ0eVByb3BzID0ge307XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0ge307XG4gICAgICAgIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHt9O1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGdldChuYW1lKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG5hbWUpO1xuICAgICAgICBpZiAodGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nUHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBlbmRpbmdQcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzW25vcm1hbGl6ZWROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0RGVlcERhdGEodGhpcy5wcm9wcywgbm9ybWFsaXplZE5hbWUpO1xuICAgIH1cbiAgICBoYXMobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSkgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc2V0KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG5hbWUpO1xuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmdldChub3JtYWxpemVkTmFtZSk7XG4gICAgICAgIGlmIChjdXJyZW50VmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZ2V0T3JpZ2luYWxQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBnZXREaXJ0eVByb3BzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kaXJ0eVByb3BzKTtcbiAgICB9XG4gICAgZ2V0VXBkYXRlZFByb3BzRnJvbVBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCk7XG4gICAgfVxuICAgIGZsdXNoRGlydHlQcm9wc1RvUGVuZGluZygpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nUHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRpcnR5UHJvcHMpO1xuICAgICAgICB0aGlzLmRpcnR5UHJvcHMgPSB7fTtcbiAgICB9XG4gICAgcmVpbml0aWFsaXplQWxsUHJvcHMocHJvcHMpIHtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSB7fTtcbiAgICAgICAgdGhpcy5wZW5kaW5nUHJvcHMgPSB7fTtcbiAgICB9XG4gICAgcHVzaFBlbmRpbmdQcm9wc0JhY2tUb0RpcnR5KCkge1xuICAgICAgICB0aGlzLmRpcnR5UHJvcHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMucGVuZGluZ1Byb3BzKSwgdGhpcy5kaXJ0eVByb3BzKTtcbiAgICAgICAgdGhpcy5wZW5kaW5nUHJvcHMgPSB7fTtcbiAgICB9XG4gICAgc3RvcmVOZXdQcm9wc0Zyb21QYXJlbnQocHJvcHMpIHtcbiAgICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmdldChrZXkpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50ID0gcHJvcHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5nZWQ7XG4gICAgfVxufVxuXG52YXIgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSA9IDExO1xuXG5mdW5jdGlvbiBtb3JwaEF0dHJzKGZyb21Ob2RlLCB0b05vZGUpIHtcbiAgICB2YXIgdG9Ob2RlQXR0cnMgPSB0b05vZGUuYXR0cmlidXRlcztcbiAgICB2YXIgYXR0cjtcbiAgICB2YXIgYXR0ck5hbWU7XG4gICAgdmFyIGF0dHJOYW1lc3BhY2VVUkk7XG4gICAgdmFyIGF0dHJWYWx1ZTtcbiAgICB2YXIgZnJvbVZhbHVlO1xuXG4gICAgLy8gZG9jdW1lbnQtZnJhZ21lbnRzIGRvbnQgaGF2ZSBhdHRyaWJ1dGVzIHNvIGxldHMgbm90IGRvIGFueXRoaW5nXG4gICAgaWYgKHRvTm9kZS5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSB8fCBmcm9tTm9kZS5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBhdHRyaWJ1dGVzIG9uIG9yaWdpbmFsIERPTSBlbGVtZW50XG4gICAgZm9yICh2YXIgaSA9IHRvTm9kZUF0dHJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGF0dHIgPSB0b05vZGVBdHRyc1tpXTtcbiAgICAgICAgYXR0ck5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICAgIGF0dHJOYW1lc3BhY2VVUkkgPSBhdHRyLm5hbWVzcGFjZVVSSTtcbiAgICAgICAgYXR0clZhbHVlID0gYXR0ci52YWx1ZTtcblxuICAgICAgICBpZiAoYXR0ck5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgICAgYXR0ck5hbWUgPSBhdHRyLmxvY2FsTmFtZSB8fCBhdHRyTmFtZTtcbiAgICAgICAgICAgIGZyb21WYWx1ZSA9IGZyb21Ob2RlLmdldEF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGZyb21WYWx1ZSAhPT0gYXR0clZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHIucHJlZml4ID09PSAneG1sbnMnKXtcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWUgPSBhdHRyLm5hbWU7IC8vIEl0J3Mgbm90IGFsbG93ZWQgdG8gc2V0IGFuIGF0dHJpYnV0ZSB3aXRoIHRoZSBYTUxOUyBuYW1lc3BhY2Ugd2l0aG91dCBzcGVjaWZ5aW5nIHRoZSBgeG1sbnNgIHByZWZpeFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5zZXRBdHRyaWJ1dGVOUyhhdHRyTmFtZXNwYWNlVVJJLCBhdHRyTmFtZSwgYXR0clZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyb21WYWx1ZSA9IGZyb21Ob2RlLmdldEF0dHJpYnV0ZShhdHRyTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChmcm9tVmFsdWUgIT09IGF0dHJWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0clZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbnkgZXh0cmEgYXR0cmlidXRlcyBmb3VuZCBvbiB0aGUgb3JpZ2luYWwgRE9NIGVsZW1lbnQgdGhhdFxuICAgIC8vIHdlcmVuJ3QgZm91bmQgb24gdGhlIHRhcmdldCBlbGVtZW50LlxuICAgIHZhciBmcm9tTm9kZUF0dHJzID0gZnJvbU5vZGUuYXR0cmlidXRlcztcblxuICAgIGZvciAodmFyIGQgPSBmcm9tTm9kZUF0dHJzLmxlbmd0aCAtIDE7IGQgPj0gMDsgZC0tKSB7XG4gICAgICAgIGF0dHIgPSBmcm9tTm9kZUF0dHJzW2RdO1xuICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTtcbiAgICAgICAgYXR0ck5hbWVzcGFjZVVSSSA9IGF0dHIubmFtZXNwYWNlVVJJO1xuXG4gICAgICAgIGlmIChhdHRyTmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubG9jYWxOYW1lIHx8IGF0dHJOYW1lO1xuXG4gICAgICAgICAgICBpZiAoIXRvTm9kZS5oYXNBdHRyaWJ1dGVOUyhhdHRyTmFtZXNwYWNlVVJJLCBhdHRyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5yZW1vdmVBdHRyaWJ1dGVOUyhhdHRyTmFtZXNwYWNlVVJJLCBhdHRyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRvTm9kZS5oYXNBdHRyaWJ1dGUoYXR0ck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIHJhbmdlOyAvLyBDcmVhdGUgYSByYW5nZSBvYmplY3QgZm9yIGVmZmljZW50bHkgcmVuZGVyaW5nIHN0cmluZ3MgdG8gZWxlbWVudHMuXG52YXIgTlNfWEhUTUwgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5cbnZhciBkb2MgPSB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZG9jdW1lbnQ7XG52YXIgSEFTX1RFTVBMQVRFX1NVUFBPUlQgPSAhIWRvYyAmJiAnY29udGVudCcgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG52YXIgSEFTX1JBTkdFX1NVUFBPUlQgPSAhIWRvYyAmJiBkb2MuY3JlYXRlUmFuZ2UgJiYgJ2NyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCcgaW4gZG9jLmNyZWF0ZVJhbmdlKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50RnJvbVRlbXBsYXRlKHN0cikge1xuICAgIHZhciB0ZW1wbGF0ZSA9IGRvYy5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IHN0cjtcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5jaGlsZE5vZGVzWzBdO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudEZyb21SYW5nZShzdHIpIHtcbiAgICBpZiAoIXJhbmdlKSB7XG4gICAgICAgIHJhbmdlID0gZG9jLmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGUoZG9jLmJvZHkpO1xuICAgIH1cblxuICAgIHZhciBmcmFnbWVudCA9IHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHIpO1xuICAgIHJldHVybiBmcmFnbWVudC5jaGlsZE5vZGVzWzBdO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudEZyb21XcmFwKHN0cikge1xuICAgIHZhciBmcmFnbWVudCA9IGRvYy5jcmVhdGVFbGVtZW50KCdib2R5Jyk7XG4gICAgZnJhZ21lbnQuaW5uZXJIVE1MID0gc3RyO1xuICAgIHJldHVybiBmcmFnbWVudC5jaGlsZE5vZGVzWzBdO1xufVxuXG4vKipcbiAqIFRoaXMgaXMgYWJvdXQgdGhlIHNhbWVcbiAqIHZhciBodG1sID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdHIsICd0ZXh0L2h0bWwnKTtcbiAqIHJldHVybiBodG1sLmJvZHkuZmlyc3RDaGlsZDtcbiAqXG4gKiBAbWV0aG9kIHRvRWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICovXG5mdW5jdGlvbiB0b0VsZW1lbnQoc3RyKSB7XG4gICAgc3RyID0gc3RyLnRyaW0oKTtcbiAgICBpZiAoSEFTX1RFTVBMQVRFX1NVUFBPUlQpIHtcbiAgICAgIC8vIGF2b2lkIHJlc3RyaWN0aW9ucyBvbiBjb250ZW50IGZvciB0aGluZ3MgbGlrZSBgPHRyPjx0aD5IaTwvdGg+PC90cj5gIHdoaWNoXG4gICAgICAvLyBjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQgZG9lc24ndCBzdXBwb3J0XG4gICAgICAvLyA8dGVtcGxhdGU+IHN1cHBvcnQgbm90IGF2YWlsYWJsZSBpbiBJRVxuICAgICAgcmV0dXJuIGNyZWF0ZUZyYWdtZW50RnJvbVRlbXBsYXRlKHN0cik7XG4gICAgfSBlbHNlIGlmIChIQVNfUkFOR0VfU1VQUE9SVCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUZyYWdtZW50RnJvbVJhbmdlKHN0cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUZyYWdtZW50RnJvbVdyYXAoc3RyKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdHdvIG5vZGUncyBuYW1lcyBhcmUgdGhlIHNhbWUuXG4gKlxuICogTk9URTogV2UgZG9uJ3QgYm90aGVyIGNoZWNraW5nIGBuYW1lc3BhY2VVUklgIGJlY2F1c2UgeW91IHdpbGwgbmV2ZXIgZmluZCB0d28gSFRNTCBlbGVtZW50cyB3aXRoIHRoZSBzYW1lXG4gKiAgICAgICBub2RlTmFtZSBhbmQgZGlmZmVyZW50IG5hbWVzcGFjZSBVUklzLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gYVxuICogQHBhcmFtIHtFbGVtZW50fSBiIFRoZSB0YXJnZXQgZWxlbWVudFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29tcGFyZU5vZGVOYW1lcyhmcm9tRWwsIHRvRWwpIHtcbiAgICB2YXIgZnJvbU5vZGVOYW1lID0gZnJvbUVsLm5vZGVOYW1lO1xuICAgIHZhciB0b05vZGVOYW1lID0gdG9FbC5ub2RlTmFtZTtcbiAgICB2YXIgZnJvbUNvZGVTdGFydCwgdG9Db2RlU3RhcnQ7XG5cbiAgICBpZiAoZnJvbU5vZGVOYW1lID09PSB0b05vZGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZyb21Db2RlU3RhcnQgPSBmcm9tTm9kZU5hbWUuY2hhckNvZGVBdCgwKTtcbiAgICB0b0NvZGVTdGFydCA9IHRvTm9kZU5hbWUuY2hhckNvZGVBdCgwKTtcblxuICAgIC8vIElmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIHZpcnR1YWwgRE9NIG5vZGUgb3IgU1ZHIG5vZGUgdGhlbiB3ZSBtYXlcbiAgICAvLyBuZWVkIHRvIG5vcm1hbGl6ZSB0aGUgdGFnIG5hbWUgYmVmb3JlIGNvbXBhcmluZy4gTm9ybWFsIEhUTUwgZWxlbWVudHMgdGhhdCBhcmVcbiAgICAvLyBpbiB0aGUgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCJcbiAgICAvLyBhcmUgY29udmVydGVkIHRvIHVwcGVyIGNhc2VcbiAgICBpZiAoZnJvbUNvZGVTdGFydCA8PSA5MCAmJiB0b0NvZGVTdGFydCA+PSA5NykgeyAvLyBmcm9tIGlzIHVwcGVyIGFuZCB0byBpcyBsb3dlclxuICAgICAgICByZXR1cm4gZnJvbU5vZGVOYW1lID09PSB0b05vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgfSBlbHNlIGlmICh0b0NvZGVTdGFydCA8PSA5MCAmJiBmcm9tQ29kZVN0YXJ0ID49IDk3KSB7IC8vIHRvIGlzIHVwcGVyIGFuZCBmcm9tIGlzIGxvd2VyXG4gICAgICAgIHJldHVybiB0b05vZGVOYW1lID09PSBmcm9tTm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBlbGVtZW50LCBvcHRpb25hbGx5IHdpdGggYSBrbm93biBuYW1lc3BhY2UgVVJJLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBlbGVtZW50IG5hbWUsIGUuZy4gJ2Rpdicgb3IgJ3N2ZydcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZXNwYWNlVVJJXSB0aGUgZWxlbWVudCdzIG5hbWVzcGFjZSBVUkksIGkuZS4gdGhlIHZhbHVlIG9mXG4gKiBpdHMgYHhtbG5zYCBhdHRyaWJ1dGUgb3IgaXRzIGluZmVycmVkIG5hbWVzcGFjZS5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMobmFtZSwgbmFtZXNwYWNlVVJJKSB7XG4gICAgcmV0dXJuICFuYW1lc3BhY2VVUkkgfHwgbmFtZXNwYWNlVVJJID09PSBOU19YSFRNTCA/XG4gICAgICAgIGRvYy5jcmVhdGVFbGVtZW50KG5hbWUpIDpcbiAgICAgICAgZG9jLmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIG5hbWUpO1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgY2hpbGRyZW4gb2Ygb25lIERPTSBlbGVtZW50IHRvIGFub3RoZXIgRE9NIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gbW92ZUNoaWxkcmVuKGZyb21FbCwgdG9FbCkge1xuICAgIHZhciBjdXJDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgIHdoaWxlIChjdXJDaGlsZCkge1xuICAgICAgICB2YXIgbmV4dENoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIHRvRWwuYXBwZW5kQ2hpbGQoY3VyQ2hpbGQpO1xuICAgICAgICBjdXJDaGlsZCA9IG5leHRDaGlsZDtcbiAgICB9XG4gICAgcmV0dXJuIHRvRWw7XG59XG5cbmZ1bmN0aW9uIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCBuYW1lKSB7XG4gICAgaWYgKGZyb21FbFtuYW1lXSAhPT0gdG9FbFtuYW1lXSkge1xuICAgICAgICBmcm9tRWxbbmFtZV0gPSB0b0VsW25hbWVdO1xuICAgICAgICBpZiAoZnJvbUVsW25hbWVdKSB7XG4gICAgICAgICAgICBmcm9tRWwuc2V0QXR0cmlidXRlKG5hbWUsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBzcGVjaWFsRWxIYW5kbGVycyA9IHtcbiAgICBPUFRJT046IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGZyb21FbC5wYXJlbnROb2RlO1xuICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdmFyIHBhcmVudE5hbWUgPSBwYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAocGFyZW50TmFtZSA9PT0gJ09QVEdST1VQJykge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgcGFyZW50TmFtZSA9IHBhcmVudE5vZGUgJiYgcGFyZW50Tm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmVudE5hbWUgPT09ICdTRUxFQ1QnICYmICFwYXJlbnROb2RlLmhhc0F0dHJpYnV0ZSgnbXVsdGlwbGUnKSkge1xuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwuaGFzQXR0cmlidXRlKCdzZWxlY3RlZCcpICYmICF0b0VsLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdvcmthcm91bmQgZm9yIE1TIEVkZ2UgYnVnIHdoZXJlIHRoZSAnc2VsZWN0ZWQnIGF0dHJpYnV0ZSBjYW4gb25seSBiZVxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmVkIGlmIHNldCB0byBhIG5vbi1lbXB0eSB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTIwODc2NzkvXG4gICAgICAgICAgICAgICAgICAgIGZyb21FbC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gcmVzZXQgc2VsZWN0IGVsZW1lbnQncyBzZWxlY3RlZEluZGV4IHRvIC0xLCBvdGhlcndpc2Ugc2V0dGluZ1xuICAgICAgICAgICAgICAgIC8vIGZyb21FbC5zZWxlY3RlZCB1c2luZyB0aGUgc3luY0Jvb2xlYW5BdHRyUHJvcCBiZWxvdyBoYXMgbm8gZWZmZWN0LlxuICAgICAgICAgICAgICAgIC8vIFRoZSBjb3JyZWN0IHNlbGVjdGVkSW5kZXggd2lsbCBiZSBzZXQgaW4gdGhlIFNFTEVDVCBzcGVjaWFsIGhhbmRsZXIgYmVsb3cuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3luY0Jvb2xlYW5BdHRyUHJvcChmcm9tRWwsIHRvRWwsICdzZWxlY3RlZCcpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIFwidmFsdWVcIiBhdHRyaWJ1dGUgaXMgc3BlY2lhbCBmb3IgdGhlIDxpbnB1dD4gZWxlbWVudCBzaW5jZSBpdCBzZXRzXG4gICAgICogdGhlIGluaXRpYWwgdmFsdWUuIENoYW5naW5nIHRoZSBcInZhbHVlXCIgYXR0cmlidXRlIHdpdGhvdXQgY2hhbmdpbmcgdGhlXG4gICAgICogXCJ2YWx1ZVwiIHByb3BlcnR5IHdpbGwgaGF2ZSBubyBlZmZlY3Qgc2luY2UgaXQgaXMgb25seSB1c2VkIHRvIHRoZSBzZXQgdGhlXG4gICAgICogaW5pdGlhbCB2YWx1ZS4gIFNpbWlsYXIgZm9yIHRoZSBcImNoZWNrZWRcIiBhdHRyaWJ1dGUsIGFuZCBcImRpc2FibGVkXCIuXG4gICAgICovXG4gICAgSU5QVVQ6IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ2NoZWNrZWQnKTtcbiAgICAgICAgc3luY0Jvb2xlYW5BdHRyUHJvcChmcm9tRWwsIHRvRWwsICdkaXNhYmxlZCcpO1xuXG4gICAgICAgIGlmIChmcm9tRWwudmFsdWUgIT09IHRvRWwudmFsdWUpIHtcbiAgICAgICAgICAgIGZyb21FbC52YWx1ZSA9IHRvRWwudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRvRWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICBmcm9tRWwucmVtb3ZlQXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIFRFWFRBUkVBOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdG9FbC52YWx1ZTtcbiAgICAgICAgaWYgKGZyb21FbC52YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGZyb21FbC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZpcnN0Q2hpbGQgPSBmcm9tRWwuZmlyc3RDaGlsZDtcbiAgICAgICAgaWYgKGZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIC8vIE5lZWRlZCBmb3IgSUUuIEFwcGFyZW50bHkgSUUgc2V0cyB0aGUgcGxhY2Vob2xkZXIgYXMgdGhlXG4gICAgICAgICAgICAvLyBub2RlIHZhbHVlIGFuZCB2aXNlIHZlcnNhLiBUaGlzIGlnbm9yZXMgYW4gZW1wdHkgdXBkYXRlLlxuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gZmlyc3RDaGlsZC5ub2RlVmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSA9PSBuZXdWYWx1ZSB8fCAoIW5ld1ZhbHVlICYmIG9sZFZhbHVlID09IGZyb21FbC5wbGFjZWhvbGRlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpcnN0Q2hpbGQubm9kZVZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFNFTEVDVDogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIGlmICghdG9FbC5oYXNBdHRyaWJ1dGUoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIGxvb3AgdGhyb3VnaCBjaGlsZHJlbiBvZiBmcm9tRWwsIG5vdCB0b0VsIHNpbmNlIG5vZGVzIGNhbiBiZSBtb3ZlZFxuICAgICAgICAgICAgLy8gZnJvbSB0b0VsIHRvIGZyb21FbCBkaXJlY3RseSB3aGVuIG1vcnBoaW5nLlxuICAgICAgICAgICAgLy8gQXQgdGhlIHRpbWUgdGhpcyBzcGVjaWFsIGhhbmRsZXIgaXMgaW52b2tlZCwgYWxsIGNoaWxkcmVuIGhhdmUgYWxyZWFkeSBiZWVuIG1vcnBoZWRcbiAgICAgICAgICAgIC8vIGFuZCBhcHBlbmRlZCB0byAvIHJlbW92ZWQgZnJvbSBmcm9tRWwsIHNvIHVzaW5nIGZyb21FbCBoZXJlIGlzIHNhZmUgYW5kIGNvcnJlY3QuXG4gICAgICAgICAgICB2YXIgY3VyQ2hpbGQgPSBmcm9tRWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHZhciBvcHRncm91cDtcbiAgICAgICAgICAgIHZhciBub2RlTmFtZTtcbiAgICAgICAgICAgIHdoaWxlKGN1ckNoaWxkKSB7XG4gICAgICAgICAgICAgICAgbm9kZU5hbWUgPSBjdXJDaGlsZC5ub2RlTmFtZSAmJiBjdXJDaGlsZC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGlmIChub2RlTmFtZSA9PT0gJ09QVEdST1VQJykge1xuICAgICAgICAgICAgICAgICAgICBvcHRncm91cCA9IGN1ckNoaWxkO1xuICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IG9wdGdyb3VwLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVOYW1lID09PSAnT1BUSU9OJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckNoaWxkLmhhc0F0dHJpYnV0ZSgnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VyQ2hpbGQgJiYgb3B0Z3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gb3B0Z3JvdXAubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRncm91cCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZyb21FbC5zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBFTEVNRU5UX05PREUgPSAxO1xudmFyIERPQ1VNRU5UX0ZSQUdNRU5UX05PREUkMSA9IDExO1xudmFyIFRFWFRfTk9ERSA9IDM7XG52YXIgQ09NTUVOVF9OT0RFID0gODtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIGRlZmF1bHRHZXROb2RlS2V5KG5vZGUpIHtcbiAgaWYgKG5vZGUpIHtcbiAgICByZXR1cm4gKG5vZGUuZ2V0QXR0cmlidXRlICYmIG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpKSB8fCBub2RlLmlkO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vcnBoZG9tRmFjdG9yeShtb3JwaEF0dHJzKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIG1vcnBoZG9tKGZyb21Ob2RlLCB0b05vZGUsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRvTm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJyNkb2N1bWVudCcgfHwgZnJvbU5vZGUubm9kZU5hbWUgPT09ICdIVE1MJyB8fCBmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgIHZhciB0b05vZGVIdG1sID0gdG9Ob2RlO1xuICAgICAgICB0b05vZGUgPSBkb2MuY3JlYXRlRWxlbWVudCgnaHRtbCcpO1xuICAgICAgICB0b05vZGUuaW5uZXJIVE1MID0gdG9Ob2RlSHRtbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvTm9kZSA9IHRvRWxlbWVudCh0b05vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodG9Ob2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFJDEpIHtcbiAgICAgIHRvTm9kZSA9IHRvTm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG5cbiAgICB2YXIgZ2V0Tm9kZUtleSA9IG9wdGlvbnMuZ2V0Tm9kZUtleSB8fCBkZWZhdWx0R2V0Tm9kZUtleTtcbiAgICB2YXIgb25CZWZvcmVOb2RlQWRkZWQgPSBvcHRpb25zLm9uQmVmb3JlTm9kZUFkZGVkIHx8IG5vb3A7XG4gICAgdmFyIG9uTm9kZUFkZGVkID0gb3B0aW9ucy5vbk5vZGVBZGRlZCB8fCBub29wO1xuICAgIHZhciBvbkJlZm9yZUVsVXBkYXRlZCA9IG9wdGlvbnMub25CZWZvcmVFbFVwZGF0ZWQgfHwgbm9vcDtcbiAgICB2YXIgb25FbFVwZGF0ZWQgPSBvcHRpb25zLm9uRWxVcGRhdGVkIHx8IG5vb3A7XG4gICAgdmFyIG9uQmVmb3JlTm9kZURpc2NhcmRlZCA9IG9wdGlvbnMub25CZWZvcmVOb2RlRGlzY2FyZGVkIHx8IG5vb3A7XG4gICAgdmFyIG9uTm9kZURpc2NhcmRlZCA9IG9wdGlvbnMub25Ob2RlRGlzY2FyZGVkIHx8IG5vb3A7XG4gICAgdmFyIG9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWQgPSBvcHRpb25zLm9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWQgfHwgbm9vcDtcbiAgICB2YXIgc2tpcEZyb21DaGlsZHJlbiA9IG9wdGlvbnMuc2tpcEZyb21DaGlsZHJlbiB8fCBub29wO1xuICAgIHZhciBhZGRDaGlsZCA9IG9wdGlvbnMuYWRkQ2hpbGQgfHwgZnVuY3Rpb24ocGFyZW50LCBjaGlsZCl7IHJldHVybiBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpOyB9O1xuICAgIHZhciBjaGlsZHJlbk9ubHkgPSBvcHRpb25zLmNoaWxkcmVuT25seSA9PT0gdHJ1ZTtcblxuICAgIC8vIFRoaXMgb2JqZWN0IGlzIHVzZWQgYXMgYSBsb29rdXAgdG8gcXVpY2tseSBmaW5kIGFsbCBrZXllZCBlbGVtZW50cyBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUuXG4gICAgdmFyIGZyb21Ob2Rlc0xvb2t1cCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIGtleWVkUmVtb3ZhbExpc3QgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGFkZEtleWVkUmVtb3ZhbChrZXkpIHtcbiAgICAgIGtleWVkUmVtb3ZhbExpc3QucHVzaChrZXkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKG5vZGUsIHNraXBLZXllZE5vZGVzKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHZhciBjdXJDaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgICAgd2hpbGUgKGN1ckNoaWxkKSB7XG5cbiAgICAgICAgICB2YXIga2V5ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgaWYgKHNraXBLZXllZE5vZGVzICYmIChrZXkgPSBnZXROb2RlS2V5KGN1ckNoaWxkKSkpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGFyZSBza2lwcGluZyBrZXllZCBub2RlcyB0aGVuIHdlIGFkZCB0aGUga2V5XG4gICAgICAgICAgICAvLyB0byBhIGxpc3Qgc28gdGhhdCBpdCBjYW4gYmUgaGFuZGxlZCBhdCB0aGUgdmVyeSBlbmQuXG4gICAgICAgICAgICBhZGRLZXllZFJlbW92YWwoa2V5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT25seSByZXBvcnQgdGhlIG5vZGUgYXMgZGlzY2FyZGVkIGlmIGl0IGlzIG5vdCBrZXllZC4gV2UgZG8gdGhpcyBiZWNhdXNlXG4gICAgICAgICAgICAvLyBhdCB0aGUgZW5kIHdlIGxvb3AgdGhyb3VnaCBhbGwga2V5ZWQgZWxlbWVudHMgdGhhdCB3ZXJlIHVubWF0Y2hlZFxuICAgICAgICAgICAgLy8gYW5kIHRoZW4gZGlzY2FyZCB0aGVtIGluIG9uZSBmaW5hbCBwYXNzLlxuICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKGN1ckNoaWxkKTtcbiAgICAgICAgICAgIGlmIChjdXJDaGlsZC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKGN1ckNoaWxkLCBza2lwS2V5ZWROb2Rlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY3VyQ2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogUmVtb3ZlcyBhIERPTSBub2RlIG91dCBvZiB0aGUgb3JpZ2luYWwgRE9NXG4gICAgKlxuICAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAgICAqIEBwYXJhbSAge05vZGV9IHBhcmVudE5vZGUgVGhlIG5vZGVzIHBhcmVudFxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gc2tpcEtleWVkTm9kZXMgSWYgdHJ1ZSB0aGVuIGVsZW1lbnRzIHdpdGgga2V5cyB3aWxsIGJlIHNraXBwZWQgYW5kIG5vdCBkaXNjYXJkZWQuXG4gICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUsIHBhcmVudE5vZGUsIHNraXBLZXllZE5vZGVzKSB7XG4gICAgICBpZiAob25CZWZvcmVOb2RlRGlzY2FyZGVkKG5vZGUpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIG9uTm9kZURpc2NhcmRlZChub2RlKTtcbiAgICAgIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKG5vZGUsIHNraXBLZXllZE5vZGVzKTtcbiAgICB9XG5cbiAgICAvLyAvLyBUcmVlV2Fsa2VyIGltcGxlbWVudGF0aW9uIGlzIG5vIGZhc3RlciwgYnV0IGtlZXBpbmcgdGhpcyBhcm91bmQgaW4gY2FzZSB0aGlzIGNoYW5nZXMgaW4gdGhlIGZ1dHVyZVxuICAgIC8vIGZ1bmN0aW9uIGluZGV4VHJlZShyb290KSB7XG4gICAgLy8gICAgIHZhciB0cmVlV2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcbiAgICAvLyAgICAgICAgIHJvb3QsXG4gICAgLy8gICAgICAgICBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCk7XG4gICAgLy9cbiAgICAvLyAgICAgdmFyIGVsO1xuICAgIC8vICAgICB3aGlsZSgoZWwgPSB0cmVlV2Fsa2VyLm5leHROb2RlKCkpKSB7XG4gICAgLy8gICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShlbCk7XG4gICAgLy8gICAgICAgICBpZiAoa2V5KSB7XG4gICAgLy8gICAgICAgICAgICAgZnJvbU5vZGVzTG9va3VwW2tleV0gPSBlbDtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIC8vIE5vZGVJdGVyYXRvciBpbXBsZW1lbnRhdGlvbiBpcyBubyBmYXN0ZXIsIGJ1dCBrZWVwaW5nIHRoaXMgYXJvdW5kIGluIGNhc2UgdGhpcyBjaGFuZ2VzIGluIHRoZSBmdXR1cmVcbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIGluZGV4VHJlZShub2RlKSB7XG4gICAgLy8gICAgIHZhciBub2RlSXRlcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3Iobm9kZSwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQpO1xuICAgIC8vICAgICB2YXIgZWw7XG4gICAgLy8gICAgIHdoaWxlKChlbCA9IG5vZGVJdGVyYXRvci5uZXh0Tm9kZSgpKSkge1xuICAgIC8vICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoZWwpO1xuICAgIC8vICAgICAgICAgaWYgKGtleSkge1xuICAgIC8vICAgICAgICAgICAgIGZyb21Ob2Rlc0xvb2t1cFtrZXldID0gZWw7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBmdW5jdGlvbiBpbmRleFRyZWUobm9kZSkge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSB8fCBub2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFJDEpIHtcbiAgICAgICAgdmFyIGN1ckNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcbiAgICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShjdXJDaGlsZCk7XG4gICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgZnJvbU5vZGVzTG9va3VwW2tleV0gPSBjdXJDaGlsZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXYWxrIHJlY3Vyc2l2ZWx5XG4gICAgICAgICAgaW5kZXhUcmVlKGN1ckNoaWxkKTtcblxuICAgICAgICAgIGN1ckNoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleFRyZWUoZnJvbU5vZGUpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlTm9kZUFkZGVkKGVsKSB7XG4gICAgICBvbk5vZGVBZGRlZChlbCk7XG5cbiAgICAgIHZhciBjdXJDaGlsZCA9IGVsLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcbiAgICAgICAgdmFyIG5leHRTaWJsaW5nID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgdmFyIHVubWF0Y2hlZEZyb21FbCA9IGZyb21Ob2Rlc0xvb2t1cFtrZXldO1xuICAgICAgICAgIC8vIGlmIHdlIGZpbmQgYSBkdXBsaWNhdGUgI2lkIG5vZGUgaW4gY2FjaGUsIHJlcGxhY2UgYGVsYCB3aXRoIGNhY2hlIHZhbHVlXG4gICAgICAgICAgLy8gYW5kIG1vcnBoIGl0IHRvIHRoZSBjaGlsZCBub2RlLlxuICAgICAgICAgIGlmICh1bm1hdGNoZWRGcm9tRWwgJiYgY29tcGFyZU5vZGVOYW1lcyhjdXJDaGlsZCwgdW5tYXRjaGVkRnJvbUVsKSkge1xuICAgICAgICAgICAgY3VyQ2hpbGQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodW5tYXRjaGVkRnJvbUVsLCBjdXJDaGlsZCk7XG4gICAgICAgICAgICBtb3JwaEVsKHVubWF0Y2hlZEZyb21FbCwgY3VyQ2hpbGQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGVOb2RlQWRkZWQoY3VyQ2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyByZWN1cnNpdmVseSBjYWxsIGZvciBjdXJDaGlsZCBhbmQgaXQncyBjaGlsZHJlbiB0byBzZWUgaWYgd2UgZmluZCBzb21ldGhpbmcgaW5cbiAgICAgICAgICAvLyBmcm9tTm9kZXNMb29rdXBcbiAgICAgICAgICBoYW5kbGVOb2RlQWRkZWQoY3VyQ2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VyQ2hpbGQgPSBuZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwRnJvbUVsKGZyb21FbCwgY3VyRnJvbU5vZGVDaGlsZCwgY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgIC8vIFdlIGhhdmUgcHJvY2Vzc2VkIGFsbCBvZiB0aGUgXCJ0byBub2Rlc1wiLiBJZiBjdXJGcm9tTm9kZUNoaWxkIGlzXG4gICAgICAvLyBub24tbnVsbCB0aGVuIHdlIHN0aWxsIGhhdmUgc29tZSBmcm9tIG5vZGVzIGxlZnQgb3ZlciB0aGF0IG5lZWRcbiAgICAgIC8vIHRvIGJlIHJlbW92ZWRcbiAgICAgIHdoaWxlIChjdXJGcm9tTm9kZUNoaWxkKSB7XG4gICAgICAgIHZhciBmcm9tTmV4dFNpYmxpbmcgPSBjdXJGcm9tTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICBpZiAoKGN1ckZyb21Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJGcm9tTm9kZUNoaWxkKSkpIHtcbiAgICAgICAgICAvLyBTaW5jZSB0aGUgbm9kZSBpcyBrZXllZCBpdCBtaWdodCBiZSBtYXRjaGVkIHVwIGxhdGVyIHNvIHdlIGRlZmVyXG4gICAgICAgICAgLy8gdGhlIGFjdHVhbCByZW1vdmFsIHRvIGxhdGVyXG4gICAgICAgICAgYWRkS2V5ZWRSZW1vdmFsKGN1ckZyb21Ob2RlS2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBOT1RFOiB3ZSBza2lwIG5lc3RlZCBrZXllZCBub2RlcyBmcm9tIGJlaW5nIHJlbW92ZWQgc2luY2UgdGhlcmUgaXNcbiAgICAgICAgICAvLyAgICAgICBzdGlsbCBhIGNoYW5jZSB0aGV5IHdpbGwgYmUgbWF0Y2hlZCB1cCBsYXRlclxuICAgICAgICAgIHJlbW92ZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCwgZnJvbUVsLCB0cnVlIC8qIHNraXAga2V5ZWQgbm9kZXMgKi8pO1xuICAgICAgICB9XG4gICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9ycGhFbChmcm9tRWwsIHRvRWwsIGNoaWxkcmVuT25seSkge1xuICAgICAgdmFyIHRvRWxLZXkgPSBnZXROb2RlS2V5KHRvRWwpO1xuXG4gICAgICBpZiAodG9FbEtleSkge1xuICAgICAgICAvLyBJZiBhbiBlbGVtZW50IHdpdGggYW4gSUQgaXMgYmVpbmcgbW9ycGhlZCB0aGVuIGl0IHdpbGwgYmUgaW4gdGhlIGZpbmFsXG4gICAgICAgIC8vIERPTSBzbyBjbGVhciBpdCBvdXQgb2YgdGhlIHNhdmVkIGVsZW1lbnRzIGNvbGxlY3Rpb25cbiAgICAgICAgZGVsZXRlIGZyb21Ob2Rlc0xvb2t1cFt0b0VsS2V5XTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjaGlsZHJlbk9ubHkpIHtcbiAgICAgICAgLy8gb3B0aW9uYWxcbiAgICAgICAgaWYgKG9uQmVmb3JlRWxVcGRhdGVkKGZyb21FbCwgdG9FbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIGF0dHJpYnV0ZXMgb24gb3JpZ2luYWwgRE9NIGVsZW1lbnQgZmlyc3RcbiAgICAgICAgbW9ycGhBdHRycyhmcm9tRWwsIHRvRWwpO1xuICAgICAgICAvLyBvcHRpb25hbFxuICAgICAgICBvbkVsVXBkYXRlZChmcm9tRWwpO1xuXG4gICAgICAgIGlmIChvbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkKGZyb21FbCwgdG9FbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmcm9tRWwubm9kZU5hbWUgIT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgbW9ycGhDaGlsZHJlbihmcm9tRWwsIHRvRWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3BlY2lhbEVsSGFuZGxlcnMuVEVYVEFSRUEoZnJvbUVsLCB0b0VsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3JwaENoaWxkcmVuKGZyb21FbCwgdG9FbCkge1xuICAgICAgdmFyIHNraXBGcm9tID0gc2tpcEZyb21DaGlsZHJlbihmcm9tRWwpO1xuICAgICAgdmFyIGN1clRvTm9kZUNoaWxkID0gdG9FbC5maXJzdENoaWxkO1xuICAgICAgdmFyIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tRWwuZmlyc3RDaGlsZDtcbiAgICAgIHZhciBjdXJUb05vZGVLZXk7XG4gICAgICB2YXIgY3VyRnJvbU5vZGVLZXk7XG5cbiAgICAgIHZhciBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICB2YXIgdG9OZXh0U2libGluZztcbiAgICAgIHZhciBtYXRjaGluZ0Zyb21FbDtcblxuICAgICAgLy8gd2FsayB0aGUgY2hpbGRyZW5cbiAgICAgIG91dGVyOiB3aGlsZSAoY3VyVG9Ob2RlQ2hpbGQpIHtcbiAgICAgICAgdG9OZXh0U2libGluZyA9IGN1clRvTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICBjdXJUb05vZGVLZXkgPSBnZXROb2RlS2V5KGN1clRvTm9kZUNoaWxkKTtcblxuICAgICAgICAvLyB3YWxrIHRoZSBmcm9tTm9kZSBjaGlsZHJlbiBhbGwgdGhlIHdheSB0aHJvdWdoXG4gICAgICAgIHdoaWxlICghc2tpcEZyb20gJiYgY3VyRnJvbU5vZGVDaGlsZCkge1xuICAgICAgICAgIGZyb21OZXh0U2libGluZyA9IGN1ckZyb21Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICBpZiAoY3VyVG9Ob2RlQ2hpbGQuaXNTYW1lTm9kZSAmJiBjdXJUb05vZGVDaGlsZC5pc1NhbWVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQpKSB7XG4gICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY3VyRnJvbU5vZGVLZXkgPSBnZXROb2RlS2V5KGN1ckZyb21Ob2RlQ2hpbGQpO1xuXG4gICAgICAgICAgdmFyIGN1ckZyb21Ob2RlVHlwZSA9IGN1ckZyb21Ob2RlQ2hpbGQubm9kZVR5cGU7XG5cbiAgICAgICAgICAvLyB0aGlzIG1lYW5zIGlmIHRoZSBjdXJGcm9tTm9kZUNoaWxkIGRvZXNudCBoYXZlIGEgbWF0Y2ggd2l0aCB0aGUgY3VyVG9Ob2RlQ2hpbGRcbiAgICAgICAgICB2YXIgaXNDb21wYXRpYmxlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gY3VyVG9Ob2RlQ2hpbGQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAvLyBCb3RoIG5vZGVzIGJlaW5nIGNvbXBhcmVkIGFyZSBFbGVtZW50IG5vZGVzXG5cbiAgICAgICAgICAgICAgaWYgKGN1clRvTm9kZUtleSkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSB0YXJnZXQgbm9kZSBoYXMgYSBrZXkgc28gd2Ugd2FudCB0byBtYXRjaCBpdCB1cCB3aXRoIHRoZSBjb3JyZWN0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWVcbiAgICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlS2V5ICE9PSBjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgLy8gVGhlIGN1cnJlbnQgZWxlbWVudCBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUgZG9lcyBub3QgaGF2ZSBhIG1hdGNoaW5nIGtleSBzb1xuICAgICAgICAgICAgICAgICAgLy8gbGV0J3MgY2hlY2sgb3VyIGxvb2t1cCB0byBzZWUgaWYgdGhlcmUgaXMgYSBtYXRjaGluZyBlbGVtZW50IGluIHRoZSBvcmlnaW5hbFxuICAgICAgICAgICAgICAgICAgLy8gRE9NIHRyZWVcbiAgICAgICAgICAgICAgICAgIGlmICgobWF0Y2hpbmdGcm9tRWwgPSBmcm9tTm9kZXNMb29rdXBbY3VyVG9Ob2RlS2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyb21OZXh0U2libGluZyA9PT0gbWF0Y2hpbmdGcm9tRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIHNpbmdsZSBlbGVtZW50IHJlbW92YWxzLiBUbyBhdm9pZCByZW1vdmluZyB0aGUgb3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgICAgICAvLyBET00gbm9kZSBvdXQgb2YgdGhlIHRyZWUgKHNpbmNlIHRoYXQgY2FuIGJyZWFrIENTUyB0cmFuc2l0aW9ucywgZXRjLiksXG4gICAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2lsbCBpbnN0ZWFkIGRpc2NhcmQgdGhlIGN1cnJlbnQgbm9kZSBhbmQgd2FpdCB1bnRpbCB0aGUgbmV4dFxuICAgICAgICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGlvbiB0byBwcm9wZXJseSBtYXRjaCB1cCB0aGUga2V5ZWQgdGFyZ2V0IGVsZW1lbnQgd2l0aCBpdHMgbWF0Y2hpbmdcbiAgICAgICAgICAgICAgICAgICAgICAvLyBlbGVtZW50IGluIHRoZSBvcmlnaW5hbCB0cmVlXG4gICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gV2UgZm91bmQgYSBtYXRjaGluZyBrZXllZCBlbGVtZW50IHNvbWV3aGVyZSBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gTGV0J3MgbW92ZSB0aGUgb3JpZ2luYWwgRE9NIG5vZGUgaW50byB0aGUgY3VycmVudCBwb3NpdGlvbiBhbmQgbW9ycGhcbiAgICAgICAgICAgICAgICAgICAgICAvLyBpdC5cblxuICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IFdlIHVzZSBpbnNlcnRCZWZvcmUgaW5zdGVhZCBvZiByZXBsYWNlQ2hpbGQgYmVjYXVzZSB3ZSB3YW50IHRvIGdvIHRocm91Z2hcbiAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYHJlbW92ZU5vZGUoKWAgZnVuY3Rpb24gZm9yIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgZGlzY2FyZGVkIHNvIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAvLyBhbGwgbGlmZWN5Y2xlIGhvb2tzIGFyZSBjb3JyZWN0bHkgaW52b2tlZFxuICAgICAgICAgICAgICAgICAgICAgIGZyb21FbC5pbnNlcnRCZWZvcmUobWF0Y2hpbmdGcm9tRWwsIGN1ckZyb21Ob2RlQ2hpbGQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIG5vZGUgaXMga2V5ZWQgaXQgbWlnaHQgYmUgbWF0Y2hlZCB1cCBsYXRlciBzbyB3ZSBkZWZlclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFjdHVhbCByZW1vdmFsIHRvIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRLZXllZFJlbW92YWwoY3VyRnJvbU5vZGVLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiB3ZSBza2lwIG5lc3RlZCBrZXllZCBub2RlcyBmcm9tIGJlaW5nIHJlbW92ZWQgc2luY2UgdGhlcmUgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHN0aWxsIGEgY2hhbmNlIHRoZXkgd2lsbCBiZSBtYXRjaGVkIHVwIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQsIGZyb21FbCwgdHJ1ZSAvKiBza2lwIGtleWVkIG5vZGVzICovKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gbWF0Y2hpbmdGcm9tRWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBub2RlcyBhcmUgbm90IGNvbXBhdGlibGUgc2luY2UgdGhlIFwidG9cIiBub2RlIGhhcyBhIGtleSBhbmQgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gaXMgbm8gbWF0Y2hpbmcga2V5ZWQgbm9kZSBpbiB0aGUgc291cmNlIHRyZWVcbiAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIG9yaWdpbmFsIGhhcyBhIGtleVxuICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gaXNDb21wYXRpYmxlICE9PSBmYWxzZSAmJiBjb21wYXJlTm9kZU5hbWVzKGN1ckZyb21Ob2RlQ2hpbGQsIGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgaWYgKGlzQ29tcGF0aWJsZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGZvdW5kIGNvbXBhdGlibGUgRE9NIGVsZW1lbnRzIHNvIHRyYW5zZm9ybVxuICAgICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IFwiZnJvbVwiIG5vZGUgdG8gbWF0Y2ggdGhlIGN1cnJlbnRcbiAgICAgICAgICAgICAgICAvLyB0YXJnZXQgRE9NIG5vZGUuXG4gICAgICAgICAgICAgICAgLy8gTU9SUEhcbiAgICAgICAgICAgICAgICBtb3JwaEVsKGN1ckZyb21Ob2RlQ2hpbGQsIGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gVEVYVF9OT0RFIHx8IGN1ckZyb21Ob2RlVHlwZSA9PSBDT01NRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgLy8gQm90aCBub2RlcyBiZWluZyBjb21wYXJlZCBhcmUgVGV4dCBvciBDb21tZW50IG5vZGVzXG4gICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgIC8vIFNpbXBseSB1cGRhdGUgbm9kZVZhbHVlIG9uIHRoZSBvcmlnaW5hbCBub2RlIHRvXG4gICAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgdGV4dCB2YWx1ZVxuICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVDaGlsZC5ub2RlVmFsdWUgIT09IGN1clRvTm9kZUNoaWxkLm5vZGVWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQubm9kZVZhbHVlID0gY3VyVG9Ob2RlQ2hpbGQubm9kZVZhbHVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNDb21wYXRpYmxlKSB7XG4gICAgICAgICAgICAvLyBBZHZhbmNlIGJvdGggdGhlIFwidG9cIiBjaGlsZCBhbmQgdGhlIFwiZnJvbVwiIGNoaWxkIHNpbmNlIHdlIGZvdW5kIGEgbWF0Y2hcbiAgICAgICAgICAgIC8vIE5vdGhpbmcgZWxzZSB0byBkbyBhcyB3ZSBhbHJlYWR5IHJlY3Vyc2l2ZWx5IGNhbGxlZCBtb3JwaENoaWxkcmVuIGFib3ZlXG4gICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTm8gY29tcGF0aWJsZSBtYXRjaCBzbyByZW1vdmUgdGhlIG9sZCBub2RlIGZyb20gdGhlIERPTSBhbmQgY29udGludWUgdHJ5aW5nIHRvIGZpbmQgYVxuICAgICAgICAgIC8vIG1hdGNoIGluIHRoZSBvcmlnaW5hbCBET00uIEhvd2V2ZXIsIHdlIG9ubHkgZG8gdGhpcyBpZiB0aGUgZnJvbSBub2RlIGlzIG5vdCBrZXllZFxuICAgICAgICAgIC8vIHNpbmNlIGl0IGlzIHBvc3NpYmxlIHRoYXQgYSBrZXllZCBub2RlIG1pZ2h0IG1hdGNoIHVwIHdpdGggYSBub2RlIHNvbWV3aGVyZSBlbHNlIGluIHRoZVxuICAgICAgICAgIC8vIHRhcmdldCB0cmVlIGFuZCB3ZSBkb24ndCB3YW50IHRvIGRpc2NhcmQgaXQganVzdCB5ZXQgc2luY2UgaXQgc3RpbGwgbWlnaHQgZmluZCBhXG4gICAgICAgICAgLy8gaG9tZSBpbiB0aGUgZmluYWwgRE9NIHRyZWUuIEFmdGVyIGV2ZXJ5dGhpbmcgaXMgZG9uZSB3ZSB3aWxsIHJlbW92ZSBhbnkga2V5ZWQgbm9kZXNcbiAgICAgICAgICAvLyB0aGF0IGRpZG4ndCBmaW5kIGEgaG9tZVxuICAgICAgICAgIGlmIChjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgLy8gU2luY2UgdGhlIG5vZGUgaXMga2V5ZWQgaXQgbWlnaHQgYmUgbWF0Y2hlZCB1cCBsYXRlciBzbyB3ZSBkZWZlclxuICAgICAgICAgICAgLy8gdGhlIGFjdHVhbCByZW1vdmFsIHRvIGxhdGVyXG4gICAgICAgICAgICBhZGRLZXllZFJlbW92YWwoY3VyRnJvbU5vZGVLZXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBOT1RFOiB3ZSBza2lwIG5lc3RlZCBrZXllZCBub2RlcyBmcm9tIGJlaW5nIHJlbW92ZWQgc2luY2UgdGhlcmUgaXNcbiAgICAgICAgICAgIC8vICAgICAgIHN0aWxsIGEgY2hhbmNlIHRoZXkgd2lsbCBiZSBtYXRjaGVkIHVwIGxhdGVyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQsIGZyb21FbCwgdHJ1ZSAvKiBza2lwIGtleWVkIG5vZGVzICovKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICB9IC8vIEVORDogd2hpbGUoY3VyRnJvbU5vZGVDaGlsZCkge31cblxuICAgICAgICAvLyBJZiB3ZSBnb3QgdGhpcyBmYXIgdGhlbiB3ZSBkaWQgbm90IGZpbmQgYSBjYW5kaWRhdGUgbWF0Y2ggZm9yXG4gICAgICAgIC8vIG91ciBcInRvIG5vZGVcIiBhbmQgd2UgZXhoYXVzdGVkIGFsbCBvZiB0aGUgY2hpbGRyZW4gXCJmcm9tXCJcbiAgICAgICAgLy8gbm9kZXMuIFRoZXJlZm9yZSwgd2Ugd2lsbCBqdXN0IGFwcGVuZCB0aGUgY3VycmVudCBcInRvXCIgbm9kZVxuICAgICAgICAvLyB0byB0aGUgZW5kXG4gICAgICAgIGlmIChjdXJUb05vZGVLZXkgJiYgKG1hdGNoaW5nRnJvbUVsID0gZnJvbU5vZGVzTG9va3VwW2N1clRvTm9kZUtleV0pICYmIGNvbXBhcmVOb2RlTmFtZXMobWF0Y2hpbmdGcm9tRWwsIGN1clRvTm9kZUNoaWxkKSkge1xuICAgICAgICAgIC8vIE1PUlBIXG4gICAgICAgICAgaWYoIXNraXBGcm9tKXsgYWRkQ2hpbGQoZnJvbUVsLCBtYXRjaGluZ0Zyb21FbCk7IH1cbiAgICAgICAgICBtb3JwaEVsKG1hdGNoaW5nRnJvbUVsLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0ID0gb25CZWZvcmVOb2RlQWRkZWQoY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgIGlmIChvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCkge1xuICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IG9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VyVG9Ob2RlQ2hpbGQuYWN0dWFsaXplKSB7XG4gICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gY3VyVG9Ob2RlQ2hpbGQuYWN0dWFsaXplKGZyb21FbC5vd25lckRvY3VtZW50IHx8IGRvYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRDaGlsZChmcm9tRWwsIGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSB0b05leHRTaWJsaW5nO1xuICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgfVxuXG4gICAgICBjbGVhbnVwRnJvbUVsKGZyb21FbCwgY3VyRnJvbU5vZGVDaGlsZCwgY3VyRnJvbU5vZGVLZXkpO1xuXG4gICAgICB2YXIgc3BlY2lhbEVsSGFuZGxlciA9IHNwZWNpYWxFbEhhbmRsZXJzW2Zyb21FbC5ub2RlTmFtZV07XG4gICAgICBpZiAoc3BlY2lhbEVsSGFuZGxlcikge1xuICAgICAgICBzcGVjaWFsRWxIYW5kbGVyKGZyb21FbCwgdG9FbCk7XG4gICAgICB9XG4gICAgfSAvLyBFTkQ6IG1vcnBoQ2hpbGRyZW4oLi4uKVxuXG4gICAgdmFyIG1vcnBoZWROb2RlID0gZnJvbU5vZGU7XG4gICAgdmFyIG1vcnBoZWROb2RlVHlwZSA9IG1vcnBoZWROb2RlLm5vZGVUeXBlO1xuICAgIHZhciB0b05vZGVUeXBlID0gdG9Ob2RlLm5vZGVUeXBlO1xuXG4gICAgaWYgKCFjaGlsZHJlbk9ubHkpIHtcbiAgICAgIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSB3ZSBhcmUgZ2l2ZW4gdHdvIERPTSBub2RlcyB0aGF0IGFyZSBub3RcbiAgICAgIC8vIGNvbXBhdGlibGUgKGUuZy4gPGRpdj4gLS0+IDxzcGFuPiBvciA8ZGl2PiAtLT4gVEVYVClcbiAgICAgIGlmIChtb3JwaGVkTm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICBpZiAodG9Ob2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgaWYgKCFjb21wYXJlTm9kZU5hbWVzKGZyb21Ob2RlLCB0b05vZGUpKSB7XG4gICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQoZnJvbU5vZGUpO1xuICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSBtb3ZlQ2hpbGRyZW4oZnJvbU5vZGUsIGNyZWF0ZUVsZW1lbnROUyh0b05vZGUubm9kZU5hbWUsIHRvTm9kZS5uYW1lc3BhY2VVUkkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gR29pbmcgZnJvbSBhbiBlbGVtZW50IG5vZGUgdG8gYSB0ZXh0IG5vZGVcbiAgICAgICAgICBtb3JwaGVkTm9kZSA9IHRvTm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtb3JwaGVkTm9kZVR5cGUgPT09IFRFWFRfTk9ERSB8fCBtb3JwaGVkTm9kZVR5cGUgPT09IENPTU1FTlRfTk9ERSkgeyAvLyBUZXh0IG9yIGNvbW1lbnQgbm9kZVxuICAgICAgICBpZiAodG9Ob2RlVHlwZSA9PT0gbW9ycGhlZE5vZGVUeXBlKSB7XG4gICAgICAgICAgaWYgKG1vcnBoZWROb2RlLm5vZGVWYWx1ZSAhPT0gdG9Ob2RlLm5vZGVWYWx1ZSkge1xuICAgICAgICAgICAgbW9ycGhlZE5vZGUubm9kZVZhbHVlID0gdG9Ob2RlLm5vZGVWYWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbW9ycGhlZE5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGV4dCBub2RlIHRvIHNvbWV0aGluZyBlbHNlXG4gICAgICAgICAgbW9ycGhlZE5vZGUgPSB0b05vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobW9ycGhlZE5vZGUgPT09IHRvTm9kZSkge1xuICAgICAgLy8gVGhlIFwidG8gbm9kZVwiIHdhcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoZSBcImZyb20gbm9kZVwiIHNvIHdlIGhhZCB0b1xuICAgICAgLy8gdG9zcyBvdXQgdGhlIFwiZnJvbSBub2RlXCIgYW5kIHVzZSB0aGUgXCJ0byBub2RlXCJcbiAgICAgIG9uTm9kZURpc2NhcmRlZChmcm9tTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0b05vZGUuaXNTYW1lTm9kZSAmJiB0b05vZGUuaXNTYW1lTm9kZShtb3JwaGVkTm9kZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBtb3JwaEVsKG1vcnBoZWROb2RlLCB0b05vZGUsIGNoaWxkcmVuT25seSk7XG5cbiAgICAgIC8vIFdlIG5vdyBuZWVkIHRvIGxvb3Agb3ZlciBhbnkga2V5ZWQgbm9kZXMgdGhhdCBtaWdodCBuZWVkIHRvIGJlXG4gICAgICAvLyByZW1vdmVkLiBXZSBvbmx5IGRvIHRoZSByZW1vdmFsIGlmIHdlIGtub3cgdGhhdCB0aGUga2V5ZWQgbm9kZVxuICAgICAgLy8gbmV2ZXIgZm91bmQgYSBtYXRjaC4gV2hlbiBhIGtleWVkIG5vZGUgaXMgbWF0Y2hlZCB1cCB3ZSByZW1vdmVcbiAgICAgIC8vIGl0IG91dCBvZiBmcm9tTm9kZXNMb29rdXAgYW5kIHdlIHVzZSBmcm9tTm9kZXNMb29rdXAgdG8gZGV0ZXJtaW5lXG4gICAgICAvLyBpZiBhIGtleWVkIG5vZGUgaGFzIGJlZW4gbWF0Y2hlZCB1cCBvciBub3RcbiAgICAgIGlmIChrZXllZFJlbW92YWxMaXN0KSB7XG4gICAgICAgIGZvciAodmFyIGk9MCwgbGVuPWtleWVkUmVtb3ZhbExpc3QubGVuZ3RoOyBpPGxlbjsgaSsrKSB7XG4gICAgICAgICAgdmFyIGVsVG9SZW1vdmUgPSBmcm9tTm9kZXNMb29rdXBba2V5ZWRSZW1vdmFsTGlzdFtpXV07XG4gICAgICAgICAgaWYgKGVsVG9SZW1vdmUpIHtcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZWxUb1JlbW92ZSwgZWxUb1JlbW92ZS5wYXJlbnROb2RlLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjaGlsZHJlbk9ubHkgJiYgbW9ycGhlZE5vZGUgIT09IGZyb21Ob2RlICYmIGZyb21Ob2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChtb3JwaGVkTm9kZS5hY3R1YWxpemUpIHtcbiAgICAgICAgbW9ycGhlZE5vZGUgPSBtb3JwaGVkTm9kZS5hY3R1YWxpemUoZnJvbU5vZGUub3duZXJEb2N1bWVudCB8fCBkb2MpO1xuICAgICAgfVxuICAgICAgLy8gSWYgd2UgaGFkIHRvIHN3YXAgb3V0IHRoZSBmcm9tIG5vZGUgd2l0aCBhIG5ldyBub2RlIGJlY2F1c2UgdGhlIG9sZFxuICAgICAgLy8gbm9kZSB3YXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgdGFyZ2V0IG5vZGUgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAvLyByZXBsYWNlIHRoZSBvbGQgRE9NIG5vZGUgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlLiBUaGlzIGlzIG9ubHlcbiAgICAgIC8vIHBvc3NpYmxlIGlmIHRoZSBvcmlnaW5hbCBET00gbm9kZSB3YXMgcGFydCBvZiBhIERPTSB0cmVlIHdoaWNoXG4gICAgICAvLyB3ZSBrbm93IGlzIHRoZSBjYXNlIGlmIGl0IGhhcyBhIHBhcmVudCBub2RlLlxuICAgICAgZnJvbU5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobW9ycGhlZE5vZGUsIGZyb21Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9ycGhlZE5vZGU7XG4gIH07XG59XG5cbnZhciBtb3JwaGRvbSA9IG1vcnBoZG9tRmFjdG9yeShtb3JwaEF0dHJzKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24oZWxlbWVudCkge1xuICAgIGNvbnN0IGlzRmlsZUlucHV0ID0gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSAnZmlsZSc7XG4gICAgaWYgKCFpc0ZpbGVJbnB1dCkge1xuICAgICAgICBpZiAoJ3ZhbHVlJyBpbiBlbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbGVtZW50LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgbm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24oY2hpbGQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlTW9ycGhkb20ocm9vdEZyb21FbGVtZW50LCByb290VG9FbGVtZW50LCBtb2RpZmllZEZpZWxkRWxlbWVudHMsIGdldEVsZW1lbnRWYWx1ZSwgY2hpbGRDb21wb25lbnRzLCBmaW5kQ2hpbGRDb21wb25lbnQsIGdldEtleUZyb21FbGVtZW50LCBleHRlcm5hbE11dGF0aW9uVHJhY2tlcikge1xuICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50TWFwID0gbmV3IE1hcCgpO1xuICAgIGNoaWxkQ29tcG9uZW50cy5mb3JFYWNoKChjaGlsZENvbXBvbmVudCkgPT4ge1xuICAgICAgICBjaGlsZENvbXBvbmVudE1hcC5zZXQoY2hpbGRDb21wb25lbnQuZWxlbWVudCwgY2hpbGRDb21wb25lbnQpO1xuICAgIH0pO1xuICAgIG1vcnBoZG9tKHJvb3RGcm9tRWxlbWVudCwgcm9vdFRvRWxlbWVudCwge1xuICAgICAgICBnZXROb2RlS2V5OiAobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChleHRlcm5hbE11dGF0aW9uVHJhY2tlci53YXNFbGVtZW50QWRkZWQobm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2FkZGVkX2VsZW1lbnRfJyArIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0S2V5RnJvbUVsZW1lbnQobm9kZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVmb3JlRWxVcGRhdGVkOiAoZnJvbUVsLCB0b0VsKSA9PiB7XG4gICAgICAgICAgICBpZiAoZnJvbUVsID09PSByb290RnJvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmcm9tRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0b0VsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyb21FbC5fX3ggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghd2luZG93LkFscGluZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gYWNjZXNzIEFscGluZS5qcyB0aG91Z2ggdGhlIGdsb2JhbCB3aW5kb3cuQWxwaW5lIHZhcmlhYmxlLiBQbGVhc2UgbWFrZSBzdXJlIEFscGluZS5qcyBpcyBsb2FkZWQgYmVmb3JlIFN5bWZvbnkgVVggTGl2ZUNvbXBvbmVudC4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5BbHBpbmUubW9ycGggIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGFjY2VzcyBBbHBpbmUuanMgbW9ycGggZnVuY3Rpb24uIFBsZWFzZSBtYWtlIHN1cmUgdGhlIEFscGluZS5qcyBNb3JwaCBwbHVnaW4gaXMgaW5zdGFsbGVkIGFuZCBsb2FkZWQsIHNlZSBodHRwczovL2FscGluZWpzLmRldi9wbHVnaW5zL21vcnBoIGZvciBtb3JlIGluZm9ybWF0aW9uLicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5BbHBpbmUubW9ycGgoZnJvbUVsLl9feCwgdG9FbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGlsZENvbXBvbmVudE1hcC5oYXMoZnJvbUVsKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZENvbXBvbmVudCA9IGNoaWxkQ29tcG9uZW50TWFwLmdldChmcm9tRWwpO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbXBvbmVudC51cGRhdGVGcm9tTmV3RWxlbWVudEZyb21QYXJlbnRSZW5kZXIodG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVkRmllbGRFbGVtZW50cy5pbmNsdWRlcyhmcm9tRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlT25FbGVtZW50KHRvRWwsIGdldEVsZW1lbnRWYWx1ZShmcm9tRWwpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudENoYW5nZXMgPSBleHRlcm5hbE11dGF0aW9uVHJhY2tlci5nZXRDaGFuZ2VkRWxlbWVudChmcm9tRWwpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5hcHBseVRvRWxlbWVudCh0b0VsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbC5pc0VxdWFsTm9kZSh0b0VsKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxpemVkRnJvbUVsID0gY2xvbmVIVE1MRWxlbWVudChmcm9tRWwpO1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkRnJvbUVsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFRvRWwgPSBjbG9uZUhUTUxFbGVtZW50KHRvRWwpO1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkVG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkRnJvbUVsLmlzRXF1YWxOb2RlKG5vcm1hbGl6ZWRUb0VsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFmcm9tRWwuaGFzQXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVmb3JlTm9kZURpc2NhcmRlZChub2RlKSB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIud2FzRWxlbWVudEFkZGVkKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFub2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScpO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5jbGFzcyBVbnN5bmNlZElucHV0c1RyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCwgbW9kZWxFbGVtZW50UmVzb2x2ZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgICB7IGV2ZW50OiAnaW5wdXQnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIH0sXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLm1vZGVsRWxlbWVudFJlc29sdmVyID0gbW9kZWxFbGVtZW50UmVzb2x2ZXI7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMgPSBuZXcgVW5zeW5jZWRJbnB1dENvbnRhaW5lcigpO1xuICAgIH1cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudCh0YXJnZXQpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCB1cGRhdGUgbW9kZWwgZm9yIG5vbiBIVE1MRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIuZ2V0TW9kZWxOYW1lKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLmFkZChlbGVtZW50LCBtb2RlbE5hbWUpO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZElucHV0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHMuYWxsVW5zeW5jZWRJbnB1dHMoKTtcbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbHMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMudW5zeW5jZWRJbnB1dHMuZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkpO1xuICAgIH1cbiAgICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLnJlc2V0VW5zeW5jZWRGaWVsZHMoKTtcbiAgICB9XG59XG5jbGFzcyBVbnN5bmNlZElucHV0Q29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzID0gW107XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzID0gW107XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSA9IG51bGwpIHtcbiAgICAgICAgaWYgKG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLnNldChtb2RlbE5hbWUsIGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMucHVzaChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWxsVW5zeW5jZWRJbnB1dHMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLCAuLi50aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMudmFsdWVzKCldO1xuICAgIH1cbiAgICBtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmRleE9mKG1vZGVsTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXM7XG4gICAgfVxufVxuXG5jbGFzcyBIb29rTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgaG9va3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHRoaXMuaG9va3Muc2V0KGhvb2tOYW1lLCBob29rcyk7XG4gICAgfVxuICAgIHVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBjb25zdCBpbmRleCA9IGhvb2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaG9va3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcbiAgICB9XG4gICAgdHJpZ2dlckhvb2soaG9va05hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGhvb2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBCYWNrZW5kUmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKHJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0Qm9keSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keSA9IGF3YWl0IHRoaXMucmVzcG9uc2UudGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHk7XG4gICAgfVxufVxuXG5jbGFzcyBDaGFuZ2luZ0l0ZW1zVHJhY2tlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgc2V0SXRlbShpdGVtTmFtZSwgbmV3VmFsdWUsIHByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMucmVtb3ZlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZWRSZWNvcmQgPSB0aGlzLnJlbW92ZWRJdGVtcy5nZXQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGlmIChyZW1vdmVkUmVjb3JkLm9yaWdpbmFsID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZWNvcmQgPSB0aGlzLmNoYW5nZWRJdGVtcy5nZXQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsUmVjb3JkLm9yaWdpbmFsID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiBvcmlnaW5hbFJlY29yZC5vcmlnaW5hbCwgbmV3OiBuZXdWYWx1ZSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5zZXQoaXRlbU5hbWUsIHsgb3JpZ2luYWw6IHByZXZpb3VzVmFsdWUsIG5ldzogbmV3VmFsdWUgfSk7XG4gICAgfVxuICAgIHJlbW92ZUl0ZW0oaXRlbU5hbWUsIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICBsZXQgdHJ1ZU9yaWdpbmFsVmFsdWUgPSBjdXJyZW50VmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlY29yZCA9IHRoaXMuY2hhbmdlZEl0ZW1zLmdldChpdGVtTmFtZSk7XG4gICAgICAgICAgICB0cnVlT3JpZ2luYWxWYWx1ZSA9IG9yaWdpbmFsUmVjb3JkLm9yaWdpbmFsO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGlmICh0cnVlT3JpZ2luYWxWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmVtb3ZlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZEl0ZW1zLnNldChpdGVtTmFtZSwgeyBvcmlnaW5hbDogdHJ1ZU9yaWdpbmFsVmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q2hhbmdlZEl0ZW1zKCkge1xuICAgICAgICBjb25zdCBjaGFuZ2VkSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlZEl0ZW1zLnB1c2goeyBuYW1lOiBrZXksIHZhbHVlOiB2YWx1ZS5uZXcgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2hhbmdlZEl0ZW1zO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkSXRlbXMoKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICByZW1vdmVkSXRlbXMucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlbW92ZWRJdGVtcztcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlZEl0ZW1zLnNpemUgPT09IDAgJiYgdGhpcy5yZW1vdmVkSXRlbXMuc2l6ZSA9PT0gMDtcbiAgICB9XG59XG5cbmNsYXNzIEVsZW1lbnRDaGFuZ2VzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMgPSBbXTtcbiAgICAgICAgdGhpcy5yZW1vdmVkQ2xhc3NlcyA9IFtdO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcyA9IG5ldyBDaGFuZ2luZ0l0ZW1zVHJhY2tlcigpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMgPSBuZXcgQ2hhbmdpbmdJdGVtc1RyYWNrZXIoKTtcbiAgICB9XG4gICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbW92ZWRDbGFzc2VzLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMgPSB0aGlzLnJlbW92ZWRDbGFzc2VzLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYWRkZWRDbGFzc2VzLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkZWRDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRkZWRDbGFzc2VzLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkZWRDbGFzc2VzID0gdGhpcy5hZGRlZENsYXNzZXMuZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9PSBjbGFzc05hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yZW1vdmVkQ2xhc3Nlcy5pbmNsdWRlcyhjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRTdHlsZShzdHlsZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLnNldEl0ZW0oc3R5bGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIHJlbW92ZVN0eWxlKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5yZW1vdmVJdGVtKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuc2V0SXRlbShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIHJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5yZW1vdmVJdGVtKGF0dHJpYnV0ZU5hbWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICBnZXRBZGRlZENsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZGVkQ2xhc3NlcztcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZENsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZWRDbGFzc2VzO1xuICAgIH1cbiAgICBnZXRDaGFuZ2VkU3R5bGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHlsZUNoYW5nZXMuZ2V0Q2hhbmdlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGdldFJlbW92ZWRTdHlsZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKTtcbiAgICB9XG4gICAgZ2V0Q2hhbmdlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0Q2hhbmdlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGdldFJlbW92ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpO1xuICAgIH1cbiAgICBhcHBseVRvRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuYWRkZWRDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbW92ZWRDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKS5mb3JFYWNoKChzdHlsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGNoYW5nZS5uYW1lLCBjaGFuZ2UudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKGF0dHJpYnV0ZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmFkZGVkQ2xhc3Nlcy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5pc0VtcHR5KCkgJiZcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5pc0VtcHR5KCkpO1xuICAgIH1cbn1cblxuY2xhc3MgRXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHMgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5hZGRlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMucmVtb3ZlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayA9IHNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMub25NdXRhdGlvbnMuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IHRydWU7XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q2hhbmdlZEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VkRWxlbWVudHMuaGFzKGVsZW1lbnQpID8gdGhpcy5jaGFuZ2VkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIDogbnVsbDtcbiAgICB9XG4gICAgZ2V0QWRkZWRFbGVtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkZWRFbGVtZW50cztcbiAgICB9XG4gICAgd2FzRWxlbWVudEFkZGVkKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkZWRFbGVtZW50cy5pbmNsdWRlcyhlbGVtZW50KTtcbiAgICB9XG4gICAgaGFuZGxlUGVuZGluZ0NoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMub25NdXRhdGlvbnModGhpcy5tdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuICAgIH1cbiAgICBvbk11dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2soZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYWRkZWRFbGVtZW50IG9mIHRoaXMuYWRkZWRFbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChhZGRlZEVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0NoYW5nZUluQWRkZWRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKG11dGF0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjaGlsZExpc3QnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuc2V0KGVsZW1lbnQsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuZ2V0KGVsZW1lbnQpLmluY2x1ZGVzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuc2V0KGVsZW1lbnQsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5oYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmdldChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDaGlsZExpc3RNdXRhdGlvbihtdXRhdGlvbikge1xuICAgICAgICBtdXRhdGlvbi5hZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlZEVsZW1lbnRzLnNwbGljZSh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24obm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG11dGF0aW9uLnJlbW92ZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hZGRlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRlZEVsZW1lbnRzLnNwbGljZSh0aGlzLmFkZGVkRWxlbWVudHMuaW5kZXhPZihub2RlKSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGlmICghdGhpcy5jaGFuZ2VkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgbmV3IEVsZW1lbnRDaGFuZ2VzKCkpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHNDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoYW5nZWRFbGVtZW50ID0gdGhpcy5jaGFuZ2VkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBzd2l0Y2ggKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNsYXNzQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlZEVsZW1lbnQuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50LS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlO1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlcyA9IHByZXZpb3VzVmFsdWUgPyBwcmV2aW91c1ZhbHVlLnNwbGl0KCcgJykgOiBbXTtcbiAgICAgICAgcHJldmlvdXNWYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmltbWVkVmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gICAgICAgICAgICBpZiAodHJpbW1lZFZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzVmFsdWVzW2luZGV4XSA9IHRyaW1tZWRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzVmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZXMgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnQuY2xhc3NMaXN0KTtcbiAgICAgICAgY29uc3QgYWRkZWRWYWx1ZXMgPSBuZXdWYWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gIXByZXZpb3VzVmFsdWVzLmluY2x1ZGVzKHZhbHVlKSk7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRWYWx1ZXMgPSBwcmV2aW91c1ZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiAhbmV3VmFsdWVzLmluY2x1ZGVzKHZhbHVlKSk7XG4gICAgICAgIGFkZGVkVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5hZGRDbGFzcyh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVkVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5yZW1vdmVDbGFzcyh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVTdHlsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWUgfHwgJyc7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzU3R5bGVzID0gdGhpcy5leHRyYWN0U3R5bGVzKHByZXZpb3VzVmFsdWUpO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpIHx8ICcnO1xuICAgICAgICBjb25zdCBuZXdTdHlsZXMgPSB0aGlzLmV4dHJhY3RTdHlsZXMobmV3VmFsdWUpO1xuICAgICAgICBjb25zdCBhZGRlZE9yQ2hhbmdlZFN0eWxlcyA9IE9iamVjdC5rZXlzKG5ld1N0eWxlcykuZmlsdGVyKChrZXkpID0+IHByZXZpb3VzU3R5bGVzW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwcmV2aW91c1N0eWxlc1trZXldICE9PSBuZXdTdHlsZXNba2V5XSk7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRTdHlsZXMgPSBPYmplY3Qua2V5cyhwcmV2aW91c1N0eWxlcykuZmlsdGVyKChrZXkpID0+ICFuZXdTdHlsZXNba2V5XSk7XG4gICAgICAgIGFkZGVkT3JDaGFuZ2VkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5hZGRTdHlsZShzdHlsZSwgbmV3U3R5bGVzW3N0eWxlXSwgcHJldmlvdXNTdHlsZXNbc3R5bGVdID09PSB1bmRlZmluZWQgPyBudWxsIDogcHJldmlvdXNTdHlsZXNbc3R5bGVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZWRTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLnJlbW92ZVN0eWxlKHN0eWxlLCBwcmV2aW91c1N0eWxlc1tzdHlsZV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlR2VuZXJpY0F0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gbXV0YXRpb24uYXR0cmlidXRlTmFtZTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWU7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICBpZiAob2xkVmFsdWUgPT09IGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBtdXRhdGlvbi5vbGRWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSwgbXV0YXRpb24ub2xkVmFsdWUpO1xuICAgIH1cbiAgICBleHRyYWN0U3R5bGVzKHN0eWxlcykge1xuICAgICAgICBjb25zdCBzdHlsZU9iamVjdCA9IHt9O1xuICAgICAgICBzdHlsZXMuc3BsaXQoJzsnKS5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydHMgPSBzdHlsZS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gcGFydHNbMF0udHJpbSgpO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbcHJvcGVydHldID0gcGFydHMuc2xpY2UoMSkuam9pbignOicpLnRyaW0oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgICB9XG4gICAgaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudGFnTmFtZSA9PT0gJ0ZPTlQnICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpID09PSAndmVydGljYWwtYWxpZ246IGluaGVyaXQ7JztcbiAgICB9XG59XG5cbmNsYXNzIENoaWxkQ29tcG9uZW50V3JhcHBlciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50LCBtb2RlbEJpbmRpbmdzKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLm1vZGVsQmluZGluZ3MgPSBtb2RlbEJpbmRpbmdzO1xuICAgIH1cbn1cbmNsYXNzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgcHJvcHMsIGxpc3RlbmVycywgY29tcG9uZW50RmluZGVyLCBmaW5nZXJwcmludCwgaWQsIGJhY2tlbmQsIGVsZW1lbnREcml2ZXIpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0RGVib3VuY2UgPSAxNTA7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMucGVuZGluZ0ZpbGVzID0ge307XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29tcG9uZW50RmluZGVyID0gY29tcG9uZW50RmluZGVyO1xuICAgICAgICB0aGlzLmJhY2tlbmQgPSBiYWNrZW5kO1xuICAgICAgICB0aGlzLmVsZW1lbnREcml2ZXIgPSBlbGVtZW50RHJpdmVyO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZmluZ2VycHJpbnQgPSBmaW5nZXJwcmludDtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobGlzdGVuZXIuZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc2V0KGxpc3RlbmVyLmV2ZW50LCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2EgPSB0aGlzLmxpc3RlbmVycy5nZXQobGlzdGVuZXIuZXZlbnQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHVzaChsaXN0ZW5lci5hY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlID0gbmV3IFZhbHVlU3RvcmUocHJvcHMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlciA9IG5ldyBVbnN5bmNlZElucHV0c1RyYWNrZXIodGhpcywgZWxlbWVudERyaXZlcik7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgSG9va01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlciA9IG5ldyBFeHRlcm5hbE11dGF0aW9uVHJhY2tlcih0aGlzLmVsZW1lbnQsIChlbGVtZW50KSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzKSk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5vbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUgPSB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBfc3dhcEJhY2tlbmQoYmFja2VuZCkge1xuICAgICAgICB0aGlzLmJhY2tlbmQgPSBiYWNrZW5kO1xuICAgIH1cbiAgICBhZGRQbHVnaW4ocGx1Z2luKSB7XG4gICAgICAgIHBsdWdpbi5hdHRhY2hUb0NvbXBvbmVudCh0aGlzKTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnY29ubmVjdCcsIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5hY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2Rpc2Nvbm5lY3QnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcbiAgICB9XG4gICAgb24oaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaG9va3MucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgb2ZmKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmhvb2tzLnVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc2V0KG1vZGVsLCB2YWx1ZSwgcmVSZW5kZXIgPSBmYWxzZSwgZGVib3VuY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG4gICAgICAgIGNvbnN0IGlzQ2hhbmdlZCA9IHRoaXMudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ21vZGVsOnNldCcsIG1vZGVsLCB2YWx1ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG4gICAgICAgIGlmIChyZVJlbmRlciAmJiBpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgZ2V0RGF0YShtb2RlbCkge1xuICAgICAgICBjb25zdCBtb2RlbE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobW9kZWwpO1xuICAgICAgICBpZiAoIXRoaXMudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGVsIFwiJHttb2RlbH1cIi5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpO1xuICAgIH1cbiAgICBhY3Rpb24obmFtZSwgYXJncyA9IHt9LCBkZWJvdW5jZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBhcmdzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBmaWxlcyhrZXksIGlucHV0KSB7XG4gICAgICAgIHRoaXMucGVuZGluZ0ZpbGVzW2tleV0gPSBpbnB1dDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIHRoaXMudHJ5U3RhcnRpbmdSZXF1ZXN0KCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVscygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmdldFVuc3luY2VkTW9kZWxzKCk7XG4gICAgfVxuICAgIGFkZENoaWxkKGNoaWxkLCBtb2RlbEJpbmRpbmdzID0gW10pIHtcbiAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZHJlbiBjb21wb25lbnRzIG11c3QgaGF2ZSBhbiBpZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNldChjaGlsZC5pZCwgbmV3IENoaWxkQ29tcG9uZW50V3JhcHBlcihjaGlsZCwgbW9kZWxCaW5kaW5ncykpO1xuICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICBjaGlsZC5vbignbW9kZWw6c2V0JywgdGhpcy5vbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUpO1xuICAgIH1cbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICBpZiAoIWNoaWxkLmlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoaWxkcmVuIGNvbXBvbmVudHMgbXVzdCBoYXZlIGFuIGlkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlKGNoaWxkLmlkKTtcbiAgICAgICAgY2hpbGQucGFyZW50ID0gbnVsbDtcbiAgICAgICAgY2hpbGQub2ZmKCdtb2RlbDpzZXQnLCB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSk7XG4gICAgfVxuICAgIGdldFBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbigpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGRDb21wb25lbnQsIGlkKSA9PiB7XG4gICAgICAgICAgICBjaGlsZHJlbi5zZXQoaWQsIGNoaWxkQ29tcG9uZW50LmNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfVxuICAgIGVtaXQobmFtZSwgZGF0YSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkID0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJmb3JtRW1pdChuYW1lLCBkYXRhLCBmYWxzZSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkKTtcbiAgICB9XG4gICAgZW1pdFVwKG5hbWUsIGRhdGEsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCA9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgdHJ1ZSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkKTtcbiAgICB9XG4gICAgZW1pdFNlbGYobmFtZSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb0VtaXQobmFtZSwgZGF0YSk7XG4gICAgfVxuICAgIHBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIGVtaXRVcCwgbWF0Y2hpbmdOYW1lKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudEZpbmRlcih0aGlzLCBlbWl0VXAsIG1hdGNoaW5nTmFtZSk7XG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQuZG9FbWl0KG5hbWUsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZG9FbWl0KG5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpIHx8IFtdO1xuICAgICAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24oYWN0aW9uLCBkYXRhLCAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVwZGF0ZUZyb21OZXdFbGVtZW50RnJvbVBhcmVudFJlbmRlcih0b0VsKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldENvbXBvbmVudFByb3BzKHRvRWwpO1xuICAgICAgICBpZiAocHJvcHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc0NoYW5nZWQgPSB0aGlzLnZhbHVlU3RvcmUuc3RvcmVOZXdQcm9wc0Zyb21QYXJlbnQocHJvcHMpO1xuICAgICAgICBjb25zdCBmaW5nZXJwcmludCA9IHRvRWwuZGF0YXNldC5saXZlRmluZ2VycHJpbnRWYWx1ZTtcbiAgICAgICAgaWYgKGZpbmdlcnByaW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmluZ2VycHJpbnQgPSBmaW5nZXJwcmludDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZShtb2RlbE5hbWUsIHZhbHVlLCBjaGlsZENvbXBvbmVudCkge1xuICAgICAgICBpZiAoIWNoaWxkQ29tcG9uZW50LmlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgaWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZFdyYXBwZXIgPSB0aGlzLmNoaWxkcmVuLmdldChjaGlsZENvbXBvbmVudC5pZCk7XG4gICAgICAgIGlmICghY2hpbGRXcmFwcGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY2hpbGQnKTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZFdyYXBwZXIubW9kZWxCaW5kaW5ncy5mb3JFYWNoKChtb2RlbEJpbmRpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTW9kZWxOYW1lID0gbW9kZWxCaW5kaW5nLmlubmVyTW9kZWxOYW1lIHx8ICd2YWx1ZSc7XG4gICAgICAgICAgICBpZiAoY2hpbGRNb2RlbE5hbWUgIT09IG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIHZhbHVlLCBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyLCBtb2RlbEJpbmRpbmcuZGVib3VuY2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNUdXJib0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgVHVyYm8gIT09ICd1bmRlZmluZWQnICYmICF0aGlzLmVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtdHVyYm89XCJmYWxzZVwiXScpO1xuICAgIH1cbiAgICB0cnlTdGFydGluZ1JlcXVlc3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5iYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICAgICAgdGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IHRydWU7XG4gICAgfVxuICAgIHBlcmZvcm1SZXF1ZXN0KCkge1xuICAgICAgICBjb25zdCB0aGlzUHJvbWlzZVJlc29sdmUgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmU7XG4gICAgICAgIHRoaXMucmVzZXRQcm9taXNlKCk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLnJlc2V0VW5zeW5jZWRGaWVsZHMoKTtcbiAgICAgICAgY29uc3QgZmlsZXNUb1NlbmQgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5wZW5kaW5nRmlsZXMpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuZmlsZXMpIHtcbiAgICAgICAgICAgICAgICBmaWxlc1RvU2VuZFtrZXldID0gdmFsdWUuZmlsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IHRoaXMuYmFja2VuZC5tYWtlUmVxdWVzdCh0aGlzLnZhbHVlU3RvcmUuZ2V0T3JpZ2luYWxQcm9wcygpLCB0aGlzLnBlbmRpbmdBY3Rpb25zLCB0aGlzLnZhbHVlU3RvcmUuZ2V0RGlydHlQcm9wcygpLCB0aGlzLmdldENoaWxkcmVuRmluZ2VycHJpbnRzKCksIHRoaXMudmFsdWVTdG9yZS5nZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50KCksIGZpbGVzVG9TZW5kKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbG9hZGluZy5zdGF0ZTpzdGFydGVkJywgdGhpcy5lbGVtZW50LCB0aGlzLmJhY2tlbmRSZXF1ZXN0KTtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUuZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nKCk7XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0LnByb21pc2UudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICAgICAgY29uc3QgYmFja2VuZFJlc3BvbnNlID0gbmV3IEJhY2tlbmRSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgYmFja2VuZFJlc3BvbnNlLmdldEJvZHkoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5wdXQgb2YgT2JqZWN0LnZhbHVlcyh0aGlzLnBlbmRpbmdGaWxlcykpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzO1xuICAgICAgICAgICAgaWYgKGhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSAhPT0gJ2FwcGxpY2F0aW9uL3ZuZC5saXZlLWNvbXBvbmVudCtodG1sJyAmJiAhaGVhZGVycy5nZXQoJ1gtTGl2ZS1SZWRpcmVjdCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSB7IGRpc3BsYXlFcnJvcjogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVTdG9yZS5wdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZXNwb25zZTplcnJvcicsIGJhY2tlbmRSZXNwb25zZSwgY29udHJvbHMpO1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9scy5kaXNwbGF5RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJFcnJvcihodG1sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVyZW5kZXIoaHRtbCwgYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXNQcm9taXNlUmVzb2x2ZShiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXF1ZXN0UGVuZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucGVyZm9ybVJlcXVlc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgY29udHJvbHMgPSB7IHNob3VsZFJlbmRlcjogdHJ1ZSB9O1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZW5kZXI6c3RhcnRlZCcsIGh0bWwsIGJhY2tlbmRSZXNwb25zZSwgY29udHJvbHMpO1xuICAgICAgICBpZiAoIWNvbnRyb2xzLnNob3VsZFJlbmRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVHVyYm9FbmFibGVkKCkpIHtcbiAgICAgICAgICAgICAgICBUdXJiby52aXNpdChiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJykgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbG9hZGluZy5zdGF0ZTpmaW5pc2hlZCcsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IG1vZGlmaWVkTW9kZWxWYWx1ZXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy52YWx1ZVN0b3JlLmdldERpcnR5UHJvcHMoKSkuZm9yRWFjaCgobW9kZWxOYW1lKSA9PiB7XG4gICAgICAgICAgICBtb2RpZmllZE1vZGVsVmFsdWVzW21vZGVsTmFtZV0gPSB0aGlzLnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbmV3RWxlbWVudDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBodG1sVG9FbGVtZW50KGh0bWwpO1xuICAgICAgICAgICAgaWYgKCFuZXdFbGVtZW50Lm1hdGNoZXMoJ1tkYXRhLWNvbnRyb2xsZXJ+PWxpdmVdJykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgbGl2ZSBjb21wb25lbnQgdGVtcGxhdGUgbXVzdCBjb250YWluIGEgc2luZ2xlIHJvb3QgY29udHJvbGxlciBlbGVtZW50LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSBjb21wb25lbnQgSFRNTCByZXR1cm5lZDonKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldENvbXBvbmVudFByb3BzKG5ld0VsZW1lbnQpO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUucmVpbml0aWFsaXplQWxsUHJvcHMobmV3UHJvcHMpO1xuICAgICAgICBjb25zdCBldmVudHNUb0VtaXQgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0RXZlbnRzVG9FbWl0KG5ld0VsZW1lbnQpO1xuICAgICAgICBjb25zdCBicm93c2VyRXZlbnRzVG9EaXNwYXRjaCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaChuZXdFbGVtZW50KTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5oYW5kbGVQZW5kaW5nQ2hhbmdlcygpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcbiAgICAgICAgZXhlY3V0ZU1vcnBoZG9tKHRoaXMuZWxlbWVudCwgbmV3RWxlbWVudCwgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZ2V0VW5zeW5jZWRJbnB1dHMoKSwgKGVsZW1lbnQpID0+IGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgdGhpcy52YWx1ZVN0b3JlKSwgQXJyYXkuZnJvbSh0aGlzLmdldENoaWxkcmVuKCkudmFsdWVzKCkpLCB0aGlzLmVsZW1lbnREcml2ZXIuZmluZENoaWxkQ29tcG9uZW50RWxlbWVudCwgdGhpcy5lbGVtZW50RHJpdmVyLmdldEtleUZyb21FbGVtZW50LCB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdGFydCgpO1xuICAgICAgICBPYmplY3Qua2V5cyhtb2RpZmllZE1vZGVsVmFsdWVzKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCBtb2RpZmllZE1vZGVsVmFsdWVzW21vZGVsTmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnRzVG9FbWl0LmZvckVhY2goKHsgZXZlbnQsIGRhdGEsIHRhcmdldCwgY29tcG9uZW50TmFtZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSAndXAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0VXAoZXZlbnQsIGRhdGEsIGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09ICdzZWxmJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFNlbGYoZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdChldmVudCwgZGF0YSwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBicm93c2VyRXZlbnRzVG9EaXNwYXRjaC5mb3JFYWNoKCh7IGV2ZW50LCBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudCwge1xuICAgICAgICAgICAgICAgIGRldGFpbDogcGF5bG9hZCxcbiAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVuZGVyOmZpbmlzaGVkJywgdGhpcyk7XG4gICAgfVxuICAgIGNhbGN1bGF0ZURlYm91bmNlKGRlYm91bmNlKSB7XG4gICAgICAgIGlmIChkZWJvdW5jZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdERlYm91bmNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWJvdW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWJvdW5jZTtcbiAgICB9XG4gICAgY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCkge1xuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCk7XG4gICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIHRoaXMuY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpKTtcbiAgICB9XG4gICAgcmVuZGVyRXJyb3IoaHRtbCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl2ZS1jb21wb25lbnQtZXJyb3InKTtcbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtb2RhbC5pZCA9ICdsaXZlLWNvbXBvbmVudC1lcnJvcic7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5wYWRkaW5nID0gJzUwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwgMCwgMCwgLjUpJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnpJbmRleCA9ICcxMDAwMDAnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5ib3R0b20gPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnJpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBpZnJhbWUuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzVweCc7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5mbGV4R3JvdyA9ICcxJztcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKG1vZGFsKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICBpZiAoaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50Lm9wZW4oKTtcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LndyaXRlKGh0bWwpO1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gKG1vZGFsKSA9PiB7XG4gICAgICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5vdXRlckhUTUwgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgICAgIH07XG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VNb2RhbChtb2RhbCkpO1xuICAgICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbW9kYWwuZm9jdXMoKTtcbiAgICB9XG4gICAgZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKSB7XG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50cyA9IHt9O1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkQ29tcG9uZW50LmNvbXBvbmVudDtcbiAgICAgICAgICAgIGlmICghY2hpbGQuaWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmdlcnByaW50c1tjaGlsZC5pZF0gPSB7XG4gICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGNoaWxkLmZpbmdlcnByaW50LFxuICAgICAgICAgICAgICAgIHRhZzogY2hpbGQuZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbmdlcnByaW50cztcbiAgICB9XG4gICAgcmVzZXRQcm9taXNlKCkge1xuICAgICAgICB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBwcm94aWZ5Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiBuZXcgUHJveHkoY29tcG9uZW50LCB7XG4gICAgICAgIGdldChjb21wb25lbnQsIHByb3ApIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNvbXBvbmVudCB8fCB0eXBlb2YgcHJvcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IGNvbXBvbmVudFtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGFibGUuYXBwbHkoY29tcG9uZW50LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGNvbXBvbmVudCwgcHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5nZXREYXRhKHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBbcHJvcCwgYXJnc10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0LnNldChwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmNsYXNzIEJhY2tlbmRSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9taXNlLCBhY3Rpb25zLCB1cGRhdGVNb2RlbHMpIHtcbiAgICAgICAgdGhpcy5pc1Jlc29sdmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgIHRoaXMudXBkYXRlZE1vZGVscyA9IHVwZGF0ZU1vZGVscztcbiAgICB9XG4gICAgY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnMuZmlsdGVyKChhY3Rpb24pID0+IHRhcmdldGVkQWN0aW9ucy5pbmNsdWRlcyhhY3Rpb24pKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBhcmVBbnlNb2RlbHNVcGRhdGVkKHRhcmdldGVkTW9kZWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZWRNb2RlbHMuZmlsdGVyKChtb2RlbCkgPT4gdGFyZ2V0ZWRNb2RlbHMuaW5jbHVkZXMobW9kZWwpKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cblxuY2xhc3MgUmVxdWVzdEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgY3NyZlRva2VuID0gbnVsbCkge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5jc3JmVG9rZW4gPSBjc3JmVG9rZW47XG4gICAgfVxuICAgIGJ1aWxkUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHNwbGl0VXJsID0gdGhpcy51cmwuc3BsaXQoJz8nKTtcbiAgICAgICAgbGV0IFt1cmxdID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IFssIHF1ZXJ5U3RyaW5nXSA9IHNwbGl0VXJsO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nIHx8ICcnKTtcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRpb25zID0ge307XG4gICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmxpdmUtY29tcG9uZW50K2h0bWwnLFxuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0b3RhbEZpbGVzID0gT2JqZWN0LmVudHJpZXMoZmlsZXMpLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsICsgY3VycmVudC5sZW5ndGgsIDApO1xuICAgICAgICBjb25zdCBoYXNGaW5nZXJwcmludHMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbikubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICB0b3RhbEZpbGVzID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLndpbGxEYXRhRml0SW5VcmwoSlNPTi5zdHJpbmdpZnkocHJvcHMpLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkKSwgcGFyYW1zLCBKU09OLnN0cmluZ2lmeShjaGlsZHJlbiksIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpKSkge1xuICAgICAgICAgICAgcGFyYW1zLnNldCgncHJvcHMnLCBKU09OLnN0cmluZ2lmeShwcm9wcykpO1xuICAgICAgICAgICAgcGFyYW1zLnNldCgndXBkYXRlZCcsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWQpKTtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLnNldCgncHJvcHNGcm9tUGFyZW50JywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFByb3BzRnJvbVBhcmVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc0ZpbmdlcnByaW50cykge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5zZXQoJ2NoaWxkcmVuJywgSlNPTi5zdHJpbmdpZnkoY2hpbGRyZW4pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5tZXRob2QgPSAnR0VUJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHsgcHJvcHMsIHVwZGF0ZWQgfTtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERhdGEucHJvcHNGcm9tUGFyZW50ID0gdXBkYXRlZFByb3BzRnJvbVBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYXNGaW5nZXJwcmludHMpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY3NyZlRva2VuICYmXG4gICAgICAgICAgICAgICAgKGFjdGlvbnMubGVuZ3RoIHx8IHRvdGFsRmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnNbJ1gtQ1NSRi1UT0tFTiddID0gdGhpcy5jc3JmVG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmFyZ3MgPSBhY3Rpb25zWzBdLmFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBgLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGFjdGlvbnNbMF0ubmFtZSl9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnL19iYXRjaCc7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0RGF0YSkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5ib2R5ID0gZm9ybURhdGE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zU3RyaW5nID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cmw6IGAke3VybH0ke3BhcmFtc1N0cmluZy5sZW5ndGggPiAwID8gYD8ke3BhcmFtc1N0cmluZ31gIDogJyd9YCxcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgd2lsbERhdGFGaXRJblVybChwcm9wc0pzb24sIHVwZGF0ZWRKc29uLCBwYXJhbXMsIGNoaWxkcmVuSnNvbiwgcHJvcHNGcm9tUGFyZW50SnNvbikge1xuICAgICAgICBjb25zdCB1cmxFbmNvZGVkSnNvbkRhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHByb3BzSnNvbiArIHVwZGF0ZWRKc29uICsgY2hpbGRyZW5Kc29uICsgcHJvcHNGcm9tUGFyZW50SnNvbikudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuICh1cmxFbmNvZGVkSnNvbkRhdGEgKyBwYXJhbXMudG9TdHJpbmcoKSkubGVuZ3RoIDwgMTUwMDtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tlbmQge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgY3NyZlRva2VuID0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlcXVlc3RCdWlsZGVyID0gbmV3IFJlcXVlc3RCdWlsZGVyKHVybCwgY3NyZlRva2VuKTtcbiAgICB9XG4gICAgbWFrZVJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcykge1xuICAgICAgICBjb25zdCB7IHVybCwgZmV0Y2hPcHRpb25zIH0gPSB0aGlzLnJlcXVlc3RCdWlsZGVyLmJ1aWxkUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBCYWNrZW5kUmVxdWVzdChmZXRjaCh1cmwsIGZldGNoT3B0aW9ucyksIGFjdGlvbnMubWFwKChiYWNrZW5kQWN0aW9uKSA9PiBiYWNrZW5kQWN0aW9uLm5hbWUpLCBPYmplY3Qua2V5cyh1cGRhdGVkKSk7XG4gICAgfVxufVxuXG5jbGFzcyBTdGFuZGFyZEVsZW1lbnREcml2ZXIge1xuICAgIGdldE1vZGVsTmFtZShlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIGlmICghbW9kZWxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RlbERpcmVjdGl2ZS5hY3Rpb247XG4gICAgfVxuICAgIGdldENvbXBvbmVudFByb3BzKHJvb3RFbGVtZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgcHJvcHNKc29uID0gKF9hID0gcm9vdEVsZW1lbnQuZGF0YXNldC5saXZlUHJvcHNWYWx1ZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ3t9JztcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocHJvcHNKc29uKTtcbiAgICB9XG4gICAgZmluZENoaWxkQ29tcG9uZW50RWxlbWVudChpZCwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1saXZlLWlkPSR7aWR9XWApO1xuICAgIH1cbiAgICBnZXRLZXlGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQubGl2ZUlkIHx8IG51bGw7XG4gICAgfVxuICAgIGdldEV2ZW50c1RvRW1pdChlbGVtZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgZXZlbnRzSnNvbiA9IChfYSA9IGVsZW1lbnQuZGF0YXNldC5saXZlRW1pdCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ1tdJztcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZXZlbnRzSnNvbik7XG4gICAgfVxuICAgIGdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBldmVudHNKc29uID0gKF9hID0gZWxlbWVudC5kYXRhc2V0LmxpdmVCcm93c2VyRGlzcGF0Y2gpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdbXSc7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGV2ZW50c0pzb24pO1xuICAgIH1cbn1cblxuY2xhc3MgTG9hZGluZ1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbignbG9hZGluZy5zdGF0ZTpzdGFydGVkJywgKGVsZW1lbnQsIHJlcXVlc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2FkaW5nKGVsZW1lbnQsIHJlcXVlc3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdsb2FkaW5nLnN0YXRlOmZpbmlzaGVkJywgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTG9hZGluZyhlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmluaXNoTG9hZGluZyhjb21wb25lbnQuZWxlbWVudCk7XG4gICAgfVxuICAgIHN0YXJ0TG9hZGluZyh0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUodHJ1ZSwgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpO1xuICAgIH1cbiAgICBmaW5pc2hMb2FkaW5nKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVMb2FkaW5nVG9nZ2xlKGZhbHNlLCB0YXJnZXRFbGVtZW50LCBudWxsKTtcbiAgICB9XG4gICAgaGFuZGxlTG9hZGluZ1RvZ2dsZShpc0xvYWRpbmcsIHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbJ2J1c3knXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgWydidXN5J10pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0TG9hZGluZ0RpcmVjdGl2ZXModGFyZ2V0RWxlbWVudCkuZm9yRWFjaCgoeyBlbGVtZW50LCBkaXJlY3RpdmVzIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgWydkYXRhLWxpdmUtaXMtbG9hZGluZyddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBbJ2RhdGEtbGl2ZS1pcy1sb2FkaW5nJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdEaXJlY3RpdmUoZWxlbWVudCwgaXNMb2FkaW5nLCBkaXJlY3RpdmUsIGJhY2tlbmRSZXF1ZXN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZShlbGVtZW50LCBpc0xvYWRpbmcsIGRpcmVjdGl2ZSwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgZmluYWxBY3Rpb24gPSBwYXJzZUxvYWRpbmdBY3Rpb24oZGlyZWN0aXZlLmFjdGlvbiwgaXNMb2FkaW5nKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRBY3Rpb25zID0gW107XG4gICAgICAgIGNvbnN0IHRhcmdldGVkTW9kZWxzID0gW107XG4gICAgICAgIGxldCBkZWxheSA9IDA7XG4gICAgICAgIGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2RlbGF5JywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGF5ID0gbW9kaWZpZXIudmFsdWUgPyBwYXJzZUludChtb2RpZmllci52YWx1ZSkgOiAyMDA7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2FjdGlvbicsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiYWN0aW9uXCIgaW4gZGF0YS1sb2FkaW5nIG11c3QgaGF2ZSBhbiBhY3Rpb24gbmFtZSAtIGUuZy4gYWN0aW9uKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ZWRBY3Rpb25zLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdtb2RlbCcsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwibW9kZWxcIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBtb2RlbChmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldGVkTW9kZWxzLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gKF9hID0gdmFsaWRNb2RpZmllcnMuZ2V0KG1vZGlmaWVyLm5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICBjYWxsYWJsZShtb2RpZmllcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIHVzZWQgaW4gZGF0YS1sb2FkaW5nPVwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuIEF2YWlsYWJsZSBtb2RpZmllcnMgYXJlOiAke0FycmF5LmZyb20odmFsaWRNb2RpZmllcnMua2V5cygpKS5qb2luKCcsICcpfS5gKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc0xvYWRpbmcgJiYgdGFyZ2V0ZWRBY3Rpb25zLmxlbmd0aCA+IDAgJiYgYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmNvbnRhaW5zT25lT2ZBY3Rpb25zKHRhcmdldGVkQWN0aW9ucykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNMb2FkaW5nICYmIHRhcmdldGVkTW9kZWxzLmxlbmd0aCA+IDAgJiYgYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxvYWRpbmdEaXJlY3RpdmU7XG4gICAgICAgIHN3aXRjaCAoZmluYWxBY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmhpZGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWRkQ2xhc3MnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmFkZENsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZUNsYXNzJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5yZW1vdmVDbGFzcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZGRBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlQXR0cmlidXRlJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2ZpbmFsQWN0aW9ufVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJhY2tlbmRSZXF1ZXN0ICYmICFiYWNrZW5kUmVxdWVzdC5pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSgpO1xuICAgIH1cbiAgICBnZXRMb2FkaW5nRGlyZWN0aXZlcyhlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdEaXJlY3RpdmVzID0gW107XG4gICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbG9hZGluZ10nKS5mb3JFYWNoKChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgJiYgIShlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgRWxlbWVudCBUeXBlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGVsZW1lbnQuZGF0YXNldC5sb2FkaW5nIHx8ICdzaG93Jyk7XG4gICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gbG9hZGluZ0RpcmVjdGl2ZXM7XG4gICAgfVxuICAgIHNob3dFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ3JldmVydCc7XG4gICAgfVxuICAgIGhpZGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc2VzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jb21iaW5lU3BhY2VkQXJyYXkoY2xhc3NlcykpO1xuICAgIH1cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc2VzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jb21iaW5lU3BhY2VkQXJyYXkoY2xhc3NlcykpO1xuICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgWydjbGFzcyddKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgJycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5jb25zdCBwYXJzZUxvYWRpbmdBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uLCBpc0xvYWRpbmcpIHtcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnc2hvdycgOiAnaGlkZSc7XG4gICAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdoaWRlJyA6ICdzaG93JztcbiAgICAgICAgY2FzZSAnYWRkQ2xhc3MnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnO1xuICAgICAgICBjYXNlICdyZW1vdmVDbGFzcyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ3JlbW92ZUNsYXNzJyA6ICdhZGRDbGFzcyc7XG4gICAgICAgIGNhc2UgJ2FkZEF0dHJpYnV0ZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2FkZEF0dHJpYnV0ZScgOiAncmVtb3ZlQXR0cmlidXRlJztcbiAgICAgICAgY2FzZSAncmVtb3ZlQXR0cmlidXRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAncmVtb3ZlQXR0cmlidXRlJyA6ICdhZGRBdHRyaWJ1dGUnO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YS1sb2FkaW5nIGFjdGlvbiBcIiR7YWN0aW9ufVwiYCk7XG59O1xuXG5jbGFzcyBWYWxpZGF0ZWRGaWVsZHNQbHVnaW4ge1xuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ21vZGVsOnNldCcsIChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTW9kZWxTZXQobW9kZWxOYW1lLCBjb21wb25lbnQudmFsdWVTdG9yZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIHZhbHVlU3RvcmUpIHtcbiAgICAgICAgaWYgKHZhbHVlU3RvcmUuaGFzKCd2YWxpZGF0ZWRGaWVsZHMnKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gWy4uLnZhbHVlU3RvcmUuZ2V0KCd2YWxpZGF0ZWRGaWVsZHMnKV07XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGVkRmllbGRzLnB1c2gobW9kZWxOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlU3RvcmUuc2V0KCd2YWxpZGF0ZWRGaWVsZHMnLCB2YWxpZGF0ZWRGaWVsZHMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBQYWdlVW5sb2FkaW5nUGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZW5kZXI6c3RhcnRlZCcsIChodG1sLCByZXNwb25zZSwgY29udHJvbHMpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgUG9sbGluZ0RpcmVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfVxuICAgIGFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5wb2xscy5wdXNoKHsgYWN0aW9uTmFtZSwgZHVyYXRpb24gfSk7XG4gICAgICAgIGlmICh0aGlzLmlzUG9sbGluZ0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0QWxsUG9sbGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNQb2xsaW5nQWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBvbGxzLmZvckVhY2goKHsgYWN0aW9uTmFtZSwgZHVyYXRpb24gfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RvcEFsbFBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFscy5mb3JFYWNoKChpbnRlcnZhbCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbGVhclBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuc3RvcEFsbFBvbGxpbmcoKTtcbiAgICAgICAgdGhpcy5wb2xscyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXJ0QWxsUG9sbGluZygpO1xuICAgIH1cbiAgICBpbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgbGV0IGNhbGxiYWNrO1xuICAgICAgICBpZiAoYWN0aW9uTmFtZSA9PT0gJyRyZW5kZXInKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hY3Rpb24oYWN0aW9uTmFtZSwge30sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzLnB1c2godGltZXIpO1xuICAgIH1cbn1cblxuY2xhc3MgUG9sbGluZ1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGNvbXBvbmVudC5lbGVtZW50O1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3RvciA9IG5ldyBQb2xsaW5nRGlyZWN0b3IoY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5zdGFydEFsbFBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0b3BBbGxQb2xsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3IuYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgfVxuICAgIGNsZWFyUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3IuY2xlYXJQb2xsaW5nKCk7XG4gICAgfVxuICAgIGluaXRpYWxpemVQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLmNsZWFyUG9sbGluZygpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3UG9sbENvbmZpZyA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LnBvbGw7XG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMocmF3UG9sbENvbmZpZyB8fCAnJHJlbmRlcicpO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gMjAwMDtcbiAgICAgICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVsYXknOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBwYXJzZUludChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiBpbiBkYXRhLXBvbGwgXCIke3Jhd1BvbGxDb25maWd9XCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFkZFBvbGwoZGlyZWN0aXZlLmFjdGlvbiwgZHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RlbF0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGVsZW1lbnQgdXNpbmcgZGF0YS1tb2RlbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuZ2V0VW5zeW5jZWRNb2RlbHMoKS5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiAhZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRNb2RlbEJpbmRpbmcgKG1vZGVsRGlyZWN0aXZlKSB7XG4gICAgbGV0IHNob3VsZFJlbmRlciA9IHRydWU7XG4gICAgbGV0IHRhcmdldEV2ZW50TmFtZSA9IG51bGw7XG4gICAgbGV0IGRlYm91bmNlID0gZmFsc2U7XG4gICAgbW9kZWxEaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnb24nOlxuICAgICAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IHJlcXVpcmVzIGEgdmFsdWUgLSBlLmcuIG9uKGNoYW5nZSkuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghWydpbnB1dCcsICdjaGFuZ2UnXS5pbmNsdWRlcyhtb2RpZmllci52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IG9ubHkgYWNjZXB0cyB0aGUgYXJndW1lbnRzIFwiaW5wdXRcIiBvciBcImNoYW5nZVwiLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRFdmVudE5hbWUgPSBtb2RpZmllci52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ25vcmVuZGVyJzpcbiAgICAgICAgICAgICAgICBzaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlYm91bmNlJzpcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gcGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIGluIGRhdGEtbW9kZWw9XCIke21vZGVsRGlyZWN0aXZlLmdldFN0cmluZygpfVwiLmApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgW21vZGVsTmFtZSwgaW5uZXJNb2RlbE5hbWVdID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uLnNwbGl0KCc6Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbW9kZWxOYW1lLFxuICAgICAgICBpbm5lck1vZGVsTmFtZTogaW5uZXJNb2RlbE5hbWUgfHwgbnVsbCxcbiAgICAgICAgc2hvdWxkUmVuZGVyLFxuICAgICAgICBkZWJvdW5jZSxcbiAgICAgICAgdGFyZ2V0RXZlbnROYW1lXG4gICAgfTtcbn1cblxuY2xhc3MgQ29tcG9uZW50UmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudE1hcEJ5RWxlbWVudCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50TWFwQnlDb21wb25lbnQgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudE1hcEJ5RWxlbWVudC5zZXQoZWxlbWVudCwgY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRNYXBCeUNvbXBvbmVudC5zZXQoY29tcG9uZW50LCBjb21wb25lbnQubmFtZSk7XG4gICAgfVxuICAgIHVucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50TWFwQnlFbGVtZW50LmRlbGV0ZShjb21wb25lbnQuZWxlbWVudCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50TWFwQnlDb21wb25lbnQuZGVsZXRlKGNvbXBvbmVudCk7XG4gICAgfVxuICAgIGdldENvbXBvbmVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc3QgbWF4Q291bnQgPSAxMDtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50TWFwQnlFbGVtZW50LmdldChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID4gbWF4Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYENvbXBvbmVudCBub3QgZm91bmQgZm9yIGVsZW1lbnQgJHtnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpfWApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA1KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbmRDb21wb25lbnRzKGN1cnJlbnRDb21wb25lbnQsIG9ubHlQYXJlbnRzLCBvbmx5TWF0Y2hOYW1lKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChvbmx5UGFyZW50cyAmJlxuICAgICAgICAgICAgICAgIChjdXJyZW50Q29tcG9uZW50ID09PSBjb21wb25lbnQgfHwgIWNvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGN1cnJlbnRDb21wb25lbnQuZWxlbWVudCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9ubHlNYXRjaE5hbWUgJiYgY29tcG9uZW50TmFtZSAhPT0gb25seU1hdGNoTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxufVxuXG5jb25zdCBnZXRDb21wb25lbnQgPSAoZWxlbWVudCkgPT4gTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmNvbXBvbmVudFJlZ2lzdHJ5LmdldENvbXBvbmVudChlbGVtZW50KTtcbmNsYXNzIExpdmVDb250cm9sbGVyRGVmYXVsdCBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgICB7IGV2ZW50OiAnaW5wdXQnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIH0sXG4gICAgICAgICAgICB7IGV2ZW50OiAnY2hhbmdlJywgY2FsbGJhY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VFdmVudChldmVudCkgfSxcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdsaXZlOmNvbm5lY3QnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNvbm5lY3RlZENvbnRyb2xsZXJFdmVudChldmVudCkgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXMgPSB7fTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudCA9IHRoaXMuaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQuYmluZCh0aGlzKTtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmVsZW1lbnQuZGF0YXNldC5saXZlSWQgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KHRoaXMuZWxlbWVudCwgdGhpcy5uYW1lVmFsdWUsIHRoaXMucHJvcHNWYWx1ZSwgdGhpcy5saXN0ZW5lcnNWYWx1ZSwgKGN1cnJlbnRDb21wb25lbnQsIG9ubHlQYXJlbnRzLCBvbmx5TWF0Y2hOYW1lKSA9PiBMaXZlQ29udHJvbGxlckRlZmF1bHQuY29tcG9uZW50UmVnaXN0cnkuZmluZENvbXBvbmVudHMoY3VycmVudENvbXBvbmVudCwgb25seVBhcmVudHMsIG9ubHlNYXRjaE5hbWUpLCB0aGlzLmZpbmdlcnByaW50VmFsdWUsIGlkLCBuZXcgQmFja2VuZCh0aGlzLnVybFZhbHVlLCB0aGlzLmNzcmZWYWx1ZSksIG5ldyBTdGFuZGFyZEVsZW1lbnREcml2ZXIoKSk7XG4gICAgICAgIHRoaXMucHJveGllZENvbXBvbmVudCA9IHByb3hpZnlDb21wb25lbnQodGhpcy5jb21wb25lbnQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuX19jb21wb25lbnQgPSB0aGlzLnByb3hpZWRDb21wb25lbnQ7XG4gICAgICAgIGlmICh0aGlzLmhhc0RlYm91bmNlVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmRlZmF1bHREZWJvdW5jZSA9IHRoaXMuZGVib3VuY2VWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbHVnaW5zID0gW1xuICAgICAgICAgICAgbmV3IExvYWRpbmdQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBWYWxpZGF0ZWRGaWVsZHNQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBQYWdlVW5sb2FkaW5nUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUG9sbGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luKCksXG4gICAgICAgIF07XG4gICAgICAgIHBsdWdpbnMuZm9yRWFjaCgocGx1Z2luKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hZGRQbHVnaW4ocGx1Z2luKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIExpdmVDb250cm9sbGVyRGVmYXVsdC5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckNvbXBvbmVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY29ubmVjdCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICBMaXZlQ29udHJvbGxlckRlZmF1bHQuY29tcG9uZW50UmVnaXN0cnkudW5yZWdpc3RlckNvbXBvbmVudCh0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICB9XG4gICAgdXBkYXRlKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnaW5wdXQnIHx8IGV2ZW50LnR5cGUgPT09ICdjaGFuZ2UnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNpbmNlIExpdmVDb21wb25lbnRzIDIuMywgeW91IG5vIGxvbmdlciBuZWVkIGRhdGEtYWN0aW9uPVwibGl2ZSN1cGRhdGVcIiBvbiBmb3JtIGVsZW1lbnRzLiBGb3VuZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZXZlbnQuY3VycmVudFRhcmdldCl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQoZXZlbnQuY3VycmVudFRhcmdldCwgbnVsbCk7XG4gICAgfVxuICAgIGFjdGlvbihldmVudCkge1xuICAgICAgICBjb25zdCByYXdBY3Rpb24gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYWN0aW9uTmFtZTtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdBY3Rpb24pO1xuICAgICAgICBsZXQgZGVib3VuY2UgPSBmYWxzZTtcbiAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBwZW5kaW5nRmlsZXMgPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdwcmV2ZW50JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnc3RvcCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdzZWxmJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdkZWJvdW5jZScsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIGRlYm91bmNlID0gbW9kaWZpZXIudmFsdWUgPyBwYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2ZpbGVzJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nRmlsZXMgPSB0aGlzLnBlbmRpbmdGaWxlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nRmlsZXNbbW9kaWZpZXIudmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV0gPSB0aGlzLnBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZE1vZGlmaWVycy5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGFibGUgPSAoX2EgPSB2YWxpZE1vZGlmaWVycy5nZXQobW9kaWZpZXIubmFtZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYWJsZShtb2RpZmllcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIG1vZGlmaWVyICR7bW9kaWZpZXIubmFtZX0gaW4gYWN0aW9uIFwiJHtyYXdBY3Rpb259XCIuIEF2YWlsYWJsZSBtb2RpZmllcnMgYXJlOiAke0FycmF5LmZyb20odmFsaWRNb2RpZmllcnMua2V5cygpKS5qb2luKCcsICcpfS5gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCBpbnB1dF0gb2YgT2JqZWN0LmVudHJpZXMocGVuZGluZ0ZpbGVzKSkge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5maWxlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5maWxlcyhrZXksIGlucHV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ0ZpbGVzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hY3Rpb24oZGlyZWN0aXZlLmFjdGlvbiwgZGlyZWN0aXZlLm5hbWVkLCBkZWJvdW5jZSk7XG4gICAgICAgICAgICBpZiAoZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0LCBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgICRyZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICB9XG4gICAgZW1pdChldmVudCkge1xuICAgICAgICB0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEsIG5hbWVNYXRjaCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0KG5hbWUsIGRhdGEsIG5hbWVNYXRjaCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbWl0VXAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5nZXRFbWl0RGlyZWN0aXZlcyhldmVudCkuZm9yRWFjaCgoeyBuYW1lLCBkYXRhLCBuYW1lTWF0Y2ggfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZW1pdFVwKG5hbWUsIGRhdGEsIG5hbWVNYXRjaCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbWl0U2VsZihldmVudCkge1xuICAgICAgICB0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZW1pdFNlbGYobmFtZSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRFbWl0RGlyZWN0aXZlcyhldmVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgaWYgKCFlbGVtZW50LmRhdGFzZXQuZXZlbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gZGF0YS1ldmVudCBhdHRyaWJ1dGUgZm91bmQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV2ZW50SW5mbyA9IGVsZW1lbnQuZGF0YXNldC5ldmVudDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhldmVudEluZm8pO1xuICAgICAgICBjb25zdCBlbWl0cyA9IFtdO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5hbWVNYXRjaCA9IG51bGw7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZU1hdGNoID0gbW9kaWZpZXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGV2ZW50IFwiJHtldmVudEluZm99XCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbWl0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBkaXJlY3RpdmUuYWN0aW9uLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRpcmVjdGl2ZS5uYW1lZCxcbiAgICAgICAgICAgICAgICBuYW1lTWF0Y2gsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbWl0cztcbiAgICB9XG4gICAgJHVwZGF0ZU1vZGVsKG1vZGVsLCB2YWx1ZSwgc2hvdWxkUmVuZGVyID0gdHJ1ZSwgZGVib3VuY2UgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5zZXQobW9kZWwsIHZhbHVlLCBzaG91bGRSZW5kZXIsIGRlYm91bmNlKTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQodGFyZ2V0LCAnaW5wdXQnKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgJ2NoYW5nZScpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQoZWxlbWVudCwgZXZlbnROYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCB1cGRhdGUgbW9kZWwgZm9yIG5vbiBIVE1MRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbWVudC5uYW1lO1xuICAgICAgICAgICAgaWYgKChfYSA9IGVsZW1lbnQuZmlsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdGaWxlc1trZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGVuZGluZ0ZpbGVzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRmlsZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICBpZiAoIW1vZGVsRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxCaW5kaW5nID0gZ2V0TW9kZWxCaW5kaW5nKG1vZGVsRGlyZWN0aXZlKTtcbiAgICAgICAgaWYgKCFtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lKSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gJ2lucHV0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudE5hbWUgPT09ICdjaGFuZ2UnICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSAnY2hhbmdlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgIT09IGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmYWxzZSA9PT0gbW9kZWxCaW5kaW5nLmRlYm91bmNlKSB7XG4gICAgICAgICAgICBpZiAobW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbmFsVmFsdWUgPSBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgZmluYWxWYWx1ZSwgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciwgbW9kZWxCaW5kaW5nLmRlYm91bmNlKTtcbiAgICB9XG4gICAgaGFuZGxlQ29ubmVjdGVkQ29udHJvbGxlckV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkQ29udHJvbGxlciA9IGV2ZW50LmRldGFpbC5jb250cm9sbGVyO1xuICAgICAgICBpZiAoY2hpbGRDb250cm9sbGVyLmNvbXBvbmVudC5nZXRQYXJlbnQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlcyA9IGdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzKGNoaWxkQ29udHJvbGxlci5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgbW9kZWxCaW5kaW5ncyA9IG1vZGVsRGlyZWN0aXZlcy5tYXAoZ2V0TW9kZWxCaW5kaW5nKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuYWRkQ2hpbGQoY2hpbGRDb250cm9sbGVyLmNvbXBvbmVudCwgbW9kZWxCaW5kaW5ncyk7XG4gICAgICAgIGNoaWxkQ29udHJvbGxlci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xpdmU6ZGlzY29ubmVjdCcsIHRoaXMuaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQpO1xuICAgIH1cbiAgICBoYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCBjaGlsZENvbnRyb2xsZXIgPSBldmVudC5kZXRhaWwuY29udHJvbGxlcjtcbiAgICAgICAgY2hpbGRDb250cm9sbGVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbGl2ZTpkaXNjb25uZWN0JywgdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudCk7XG4gICAgICAgIGlmIChjaGlsZENvbnRyb2xsZXIuY29tcG9uZW50LmdldFBhcmVudCgpICE9PSB0aGlzLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnJlbW92ZUNoaWxkKGNoaWxkQ29udHJvbGxlci5jb21wb25lbnQpO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIGRldGFpbCA9IHt9LCBjYW5CdWJibGUgPSB0cnVlLCBjYW5jZWxhYmxlID0gZmFsc2UpIHtcbiAgICAgICAgZGV0YWlsLmNvbnRyb2xsZXIgPSB0aGlzO1xuICAgICAgICBkZXRhaWwuY29tcG9uZW50ID0gdGhpcy5wcm94aWVkQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsLCBwcmVmaXg6ICdsaXZlJywgY2FuY2VsYWJsZSwgYnViYmxlczogY2FuQnViYmxlIH0pO1xuICAgIH1cbn1cbkxpdmVDb250cm9sbGVyRGVmYXVsdC52YWx1ZXMgPSB7XG4gICAgbmFtZTogU3RyaW5nLFxuICAgIHVybDogU3RyaW5nLFxuICAgIHByb3BzOiBPYmplY3QsXG4gICAgY3NyZjogU3RyaW5nLFxuICAgIGxpc3RlbmVyczogeyB0eXBlOiBBcnJheSwgZGVmYXVsdDogW10gfSxcbiAgICBkZWJvdW5jZTogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDE1MCB9LFxuICAgIGlkOiBTdHJpbmcsXG4gICAgZmluZ2VycHJpbnQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnJyB9LFxufTtcbkxpdmVDb250cm9sbGVyRGVmYXVsdC5jb21wb25lbnRSZWdpc3RyeSA9IG5ldyBDb21wb25lbnRSZWdpc3RyeSgpO1xuXG5leHBvcnQgeyBDb21wb25lbnQsIExpdmVDb250cm9sbGVyRGVmYXVsdCBhcyBkZWZhdWx0LCBnZXRDb21wb25lbnQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMucHJvcHMgPSAoX2EgPSB0aGlzLnByb3BzVmFsdWUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pbnRybyA9IChfYiA9IHRoaXMuaW50cm9WYWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnKTtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gd2luZG93LnJlc29sdmVTdmVsdGVDb21wb25lbnQodGhpcy5jb21wb25lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lJZkV4aXN0cygpO1xuICAgICAgICB0aGlzLmFwcCA9IG5ldyBDb21wb25lbnQoe1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGludHJvOiB0aGlzLmludHJvLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QgPSB0aGlzLmFwcDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogQ29tcG9uZW50LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveUlmRXhpc3RzKCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndW5tb3VudCcpO1xuICAgIH1cbiAgICBfZGVzdHJveUlmRXhpc3RzKCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LnJvb3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QuJGRlc3Ryb3koKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnQucm9vdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQgPSB7fSkge1xuICAgICAgICBjb25zdCBkZXRhaWwgPSBPYmplY3QuYXNzaWduKHsgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSwgcHJvcHM6IHRoaXMucHJvcHMsIGludHJvOiB0aGlzLmludHJvIH0sIHBheWxvYWQpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsLCBwcmVmaXg6ICdzdmVsdGUnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgY29tcG9uZW50OiBTdHJpbmcsXG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBpbnRybzogQm9vbGVhbixcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCBTd3VwIGZyb20gJ3N3dXAnO1xuaW1wb3J0IFN3dXBEZWJ1Z1BsdWdpbiBmcm9tICdAc3d1cC9kZWJ1Zy1wbHVnaW4nO1xuaW1wb3J0IFN3dXBGb3Jtc1BsdWdpbiBmcm9tICdAc3d1cC9mb3Jtcy1wbHVnaW4nO1xuaW1wb3J0IFN3dXBGYWRlVGhlbWUgZnJvbSAnQHN3dXAvZmFkZS10aGVtZSc7XG5pbXBvcnQgU3d1cFNsaWRlVGhlbWUgZnJvbSAnQHN3dXAvc2xpZGUtdGhlbWUnO1xuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBkYXRhQ29udGFpbmVycyA9IHRoaXMuY29udGFpbmVyc1ZhbHVlO1xuICAgICAgICBjb25zdCBtYWluRWxlbWVudCA9IHRoaXMubWFpbkVsZW1lbnRWYWx1ZSB8fCBkYXRhQ29udGFpbmVyc1swXSB8fCAnI3N3dXAnO1xuICAgICAgICBjb25zdCBhbGxFbGVtZW50cyA9IFttYWluRWxlbWVudF0uY29uY2F0KGRhdGFDb250YWluZXJzKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyc0xpc3QgPSBhbGxFbGVtZW50cy5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYWxsRWxlbWVudHMuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXg7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGFpbmVyczogY29udGFpbmVyc0xpc3QsXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgJ3NsaWRlJyA9PT0gdGhpcy50aGVtZVZhbHVlXG4gICAgICAgICAgICAgICAgICAgID8gbmV3IFN3dXBTbGlkZVRoZW1lKHsgbWFpbkVsZW1lbnQ6IG1haW5FbGVtZW50IH0pXG4gICAgICAgICAgICAgICAgICAgIDogbmV3IFN3dXBGYWRlVGhlbWUoeyBtYWluRWxlbWVudDogbWFpbkVsZW1lbnQgfSksXG4gICAgICAgICAgICAgICAgbmV3IFN3dXBGb3Jtc1BsdWdpbigpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuaGFzTWFpbkVsZW1lbnRWYWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5tYWluRWxlbWVudCA9IHRoaXMubWFpbkVsZW1lbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNBbmltYXRlSGlzdG9yeUJyb3dzaW5nVmFsdWUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYW5pbWF0ZUhpc3RvcnlCcm93c2luZyA9IHRoaXMuYW5pbWF0ZUhpc3RvcnlCcm93c2luZ1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc0FuaW1hdGlvblNlbGVjdG9yVmFsdWUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYW5pbWF0aW9uU2VsZWN0b3IgPSB0aGlzLmFuaW1hdGlvblNlbGVjdG9yVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzQ2FjaGVWYWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5jYWNoZSA9IHRoaXMuY2FjaGVWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNMaW5rU2VsZWN0b3JWYWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5saW5rU2VsZWN0b3IgPSB0aGlzLmxpbmtTZWxlY3RvclZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRlYnVnVmFsdWUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucGx1Z2lucy5wdXNoKG5ldyBTd3VwRGVidWdQbHVnaW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdwcmUtY29ubmVjdCcsIHsgb3B0aW9ucyB9KTtcbiAgICAgICAgY29uc3Qgc3d1cCA9IG5ldyBTd3VwKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IHN3dXAsIG9wdGlvbnMgfSk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICdzd3VwJyB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIGFuaW1hdGVIaXN0b3J5QnJvd3Npbmc6IEJvb2xlYW4sXG4gICAgYW5pbWF0aW9uU2VsZWN0b3I6IFN0cmluZyxcbiAgICBjYWNoZTogQm9vbGVhbixcbiAgICBjb250YWluZXJzOiBBcnJheSxcbiAgICBsaW5rU2VsZWN0b3I6IFN0cmluZyxcbiAgICB0aGVtZTogU3RyaW5nLFxuICAgIGRlYnVnOiBCb29sZWFuLFxuICAgIG1haW5FbGVtZW50OiBTdHJpbmcsXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmlzRGlzcGxheWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmlzaWJsZUljb24gPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJ0b2dnbGUtcGFzc3dvcmQtaWNvblwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG48cGF0aCBkPVwiTTEwIDEyYTIgMiAwIDEwMC00IDIgMiAwIDAwMCA0elwiIC8+XG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0uNDU4IDEwQzEuNzMyIDUuOTQzIDUuNTIyIDMgMTAgM3M4LjI2OCAyLjk0MyA5LjU0MiA3Yy0xLjI3NCA0LjA1Ny01LjA2NCA3LTkuNTQyIDdTMS43MzIgMTQuMDU3LjQ1OCAxMHpNMTQgMTBhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiAvPlxuPC9zdmc+YDtcbiAgICAgICAgdGhpcy5oaWRkZW5JY29uID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwidG9nZ2xlLXBhc3N3b3JkLWljb25cIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMy43MDcgMi4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsMTQgMTRhMSAxIDAgMDAxLjQxNC0xLjQxNGwtMS40NzMtMS40NzNBMTAuMDE0IDEwLjAxNCAwIDAwMTkuNTQyIDEwQzE4LjI2OCA1Ljk0MyAxNC40NzggMyAxMCAzYTkuOTU4IDkuOTU4IDAgMDAtNC41MTIgMS4wNzRsLTEuNzgtMS43ODF6bTQuMjYxIDQuMjZsMS41MTQgMS41MTVhMi4wMDMgMi4wMDMgMCAwMTIuNDUgMi40NWwxLjUxNCAxLjUxNGE0IDQgMCAwMC01LjQ3OC01LjQ3OHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgLz5cbjxwYXRoIGQ9XCJNMTIuNDU0IDE2LjY5N0w5Ljc1IDEzLjk5MmE0IDQgMCAwMS0zLjc0Mi0zLjc0MUwyLjMzNSA2LjU3OEE5Ljk4IDkuOTggMCAwMC40NTggMTBjMS4yNzQgNC4wNTcgNS4wNjUgNyA5LjU0MiA3IC44NDcgMCAxLjY2OS0uMTA1IDIuNDU0LS4zMDN6XCIgLz5cbjwvc3ZnPmA7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGVJY29uVmFsdWUgIT09ICdEZWZhdWx0Jykge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlSWNvbiA9IHRoaXMudmlzaWJsZUljb25WYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oaWRkZW5JY29uVmFsdWUgIT09ICdEZWZhdWx0Jykge1xuICAgICAgICAgICAgdGhpcy5oaWRkZW5JY29uID0gdGhpcy5oaWRkZW5JY29uVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBidXR0b24pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IGVsZW1lbnQ6IHRoaXMuZWxlbWVudCwgYnV0dG9uOiBidXR0b24gfSk7XG4gICAgfVxuICAgIGNyZWF0ZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLnRoaXMuYnV0dG9uQ2xhc3Nlc1ZhbHVlKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLnZpc2libGVJY29uICsgJyAnICsgdGhpcy52aXNpYmxlTGFiZWxWYWx1ZTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG4gICAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaXNEaXNwbGF5ZWQgPSAhdGhpcy5pc0Rpc3BsYXllZDtcbiAgICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uRWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIHRvZ2dsZUJ1dHRvbkVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5pc0Rpc3BsYXllZFxuICAgICAgICAgICAgPyB0aGlzLmhpZGRlbkljb24gKyAnICcgKyB0aGlzLmhpZGRlbkxhYmVsVmFsdWVcbiAgICAgICAgICAgIDogdGhpcy52aXNpYmxlSWNvbiArICcgJyArIHRoaXMudmlzaWJsZUxhYmVsVmFsdWU7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0aGlzLmlzRGlzcGxheWVkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLmlzRGlzcGxheWVkID8gJ3Nob3cnIDogJ2hpZGUnLCB7IGVsZW1lbnQ6IHRoaXMuZWxlbWVudCwgYnV0dG9uOiB0b2dnbGVCdXR0b25FbGVtZW50IH0pO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgcHJlZml4OiAndG9nZ2xlLXBhc3N3b3JkJyB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIHZpc2libGVMYWJlbDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdTaG93JyB9LFxuICAgIHZpc2libGVJY29uOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ0RlZmF1bHQnIH0sXG4gICAgaGlkZGVuTGFiZWw6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnSGlkZScgfSxcbiAgICBoaWRkZW5JY29uOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ0RlZmF1bHQnIH0sXG4gICAgYnV0dG9uQ2xhc3NlczogQXJyYXksXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgJ0Bob3R3aXJlZC90dXJibyc7XG5cbmNsYXNzIHR1cmJvX2NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbn1cblxuZXhwb3J0IHsgdHVyYm9fY29udHJvbGxlciBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImFjYyIsImluaXQiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU5hdiIsInRvZ2dsZURyb3BDYXRlZ29yaWVzIiwidG9nZ2xlRHJvcE1hcnF1ZXMiLCJ0b2dnbGVEcm9wR2VucmUiLCJ0b2dnbGVEcm9wQ291bGV1cnMiLCJ0b2dnbGVGaWx0cmVNb2JpbGUiLCJidXJnZ2VyIiwiY3JvaXgiLCJtZW51TW9iaWxlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlZE1lbnUiLCJhZGQiLCJyZW1vdmUiLCJiY2tvZmYiLCJvcGVuU2lkZUJlbm9pdCIsInNpZGVCYXJOYXYiLCJzdHJva2VDb2xvcnMiLCJzaWRlQmFyIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiaW1hZ2VzIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGluayIsImRlbGV0ZUltYWdlUHJvZHVjdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbmZpcm0iLCJmZXRjaCIsImdldEF0dHJpYnV0ZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGFzZXQiLCJ0b2tlbiIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsInBhcmVudEVsZW1lbnQiLCJhbGVydCIsImVycm9yIiwiZGVmYXVsdF8xIiwiY2xlYXIiLCJwcmV2aWV3Q2xlYXJCdXR0b25UYXJnZXQiLCJpbnB1dFRhcmdldCIsImV2ZW50Iiwib25JbnB1dENoYW5nZSIsImRpc3BhdGNoRXZlbnQiLCJ2YWx1ZSIsInN0eWxlIiwiZGlzcGxheSIsInBsYWNlaG9sZGVyVGFyZ2V0IiwicHJldmlld1RhcmdldCIsInByZXZpZXdJbWFnZVRhcmdldCIsImJhY2tncm91bmRJbWFnZSIsInByZXZpZXdGaWxlbmFtZVRhcmdldCIsInRleHRDb250ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwibmFtZSIsInR5cGUiLCJpbmRleE9mIiwiX3BvcHVsYXRlSW1hZ2VQcmV2aWV3IiwiRmlsZVJlYWRlciIsInJlYWRlciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ0YXJnZXRzIiwiZGVmYXVsdCIsInBhcnNlRGlyZWN0aXZlcyIsImNvbnRlbnQiLCJkaXJlY3RpdmVzIiwiY3VycmVudEFjdGlvbk5hbWUiLCJjdXJyZW50QXJndW1lbnROYW1lIiwiY3VycmVudEFyZ3VtZW50VmFsdWUiLCJjdXJyZW50QXJndW1lbnRzIiwiY3VycmVudE5hbWVkQXJndW1lbnRzIiwiY3VycmVudE1vZGlmaWVycyIsInN0YXRlIiwiZ2V0TGFzdEFjdGlvbk5hbWUiLCJsZW5ndGgiLCJFcnJvciIsImFjdGlvbiIsInB1c2hJbnN0cnVjdGlvbiIsInB1c2giLCJhcmdzIiwibmFtZWQiLCJtb2RpZmllcnMiLCJnZXRTdHJpbmciLCJwdXNoQXJndW1lbnQiLCJtaXhlZEFyZ1R5cGVzRXJyb3IiLCJ0cmltIiwiT2JqZWN0Iiwia2V5cyIsInB1c2hNb2RpZmllciIsImkiLCJjaGFyIiwiY29tYmluZVNwYWNlZEFycmF5IiwicGFydHMiLCJmaW5hbFBhcnRzIiwiZm9yRWFjaCIsInBhcnQiLCJzcGxpdCIsIm5vcm1hbGl6ZU1vZGVsTmFtZSIsIm1vZGVsIiwicmVwbGFjZSIsIm1hcCIsInMiLCJqb2luIiwiZ2V0VmFsdWVGcm9tRWxlbWVudCIsImVsZW1lbnQiLCJ2YWx1ZVN0b3JlIiwiSFRNTElucHV0RWxlbWVudCIsIm1vZGVsTmFtZURhdGEiLCJnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50IiwibW9kZWxWYWx1ZSIsImdldCIsIkFycmF5IiwiaXNBcnJheSIsImdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZSIsImhhc0F0dHJpYnV0ZSIsImNoZWNrZWQiLCJpbnB1dFZhbHVlIiwiSFRNTFNlbGVjdEVsZW1lbnQiLCJtdWx0aXBsZSIsImZyb20iLCJzZWxlY3RlZE9wdGlvbnMiLCJlbCIsInNldFZhbHVlT25FbGVtZW50IiwidmFsdWVGb3VuZCIsInZhbCIsImFycmF5V3JhcHBlZFZhbHVlIiwiY29uY2F0Iiwib3B0aW9ucyIsIm9wdGlvbiIsInNlbGVjdGVkIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWQiLCJnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyIsImRpcmVjdGl2ZSIsInRocm93T25NaXNzaW5nIiwiZGF0YU1vZGVsRGlyZWN0aXZlcyIsImZvcm1FbGVtZW50IiwiY2xvc2VzdCIsImdldEVsZW1lbnRBc1RhZ1RleHQiLCJlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudCIsImNvbXBvbmVudCIsImNvbnRhaW5zIiwiZm91bmRDaGlsZENvbXBvbmVudCIsImdldENoaWxkcmVuIiwiY2hpbGRDb21wb25lbnQiLCJjbG9uZUhUTUxFbGVtZW50IiwibmV3RWxlbWVudCIsImNsb25lTm9kZSIsIkhUTUxFbGVtZW50IiwiaHRtbFRvRWxlbWVudCIsImh0bWwiLCJ0ZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJvdXRlckhUTUwiLCJzbGljZSIsImN1cnJlbnRWYWx1ZXMiLCJmaW5hbFZhbHVlcyIsImluZGV4Iiwic3BsaWNlIiwiZ2V0RGVlcERhdGEiLCJwcm9wZXJ0eVBhdGgiLCJwYXJzZURlZXBEYXRhIiwiY3VycmVudExldmVsRGF0YSIsImZpbmFsS2V5IiwiZmluYWxEYXRhIiwicGFyc2UiLCJWYWx1ZVN0b3JlIiwicHJvcHMiLCJkaXJ0eVByb3BzIiwicGVuZGluZ1Byb3BzIiwidXBkYXRlZFByb3BzRnJvbVBhcmVudCIsIm5vcm1hbGl6ZWROYW1lIiwiY3VycmVudFZhbHVlIiwiYXNzaWduIiwiY2hhbmdlZCIsImVudHJpZXMiLCJrZXkiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwibW9ycGhBdHRycyIsImZyb21Ob2RlIiwidG9Ob2RlIiwidG9Ob2RlQXR0cnMiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsImF0dHJOYW1lIiwiYXR0ck5hbWVzcGFjZVVSSSIsImF0dHJWYWx1ZSIsImZyb21WYWx1ZSIsIm5vZGVUeXBlIiwibmFtZXNwYWNlVVJJIiwibG9jYWxOYW1lIiwiZ2V0QXR0cmlidXRlTlMiLCJzZXRBdHRyaWJ1dGVOUyIsInNldEF0dHJpYnV0ZSIsImZyb21Ob2RlQXR0cnMiLCJkIiwiaGFzQXR0cmlidXRlTlMiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsInJlbW92ZUF0dHJpYnV0ZSIsInJhbmdlIiwiTlNfWEhUTUwiLCJkb2MiLCJIQVNfVEVNUExBVEVfU1VQUE9SVCIsIkhBU19SQU5HRV9TVVBQT1JUIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVGcmFnbWVudEZyb21UZW1wbGF0ZSIsInN0ciIsImNoaWxkTm9kZXMiLCJjcmVhdGVGcmFnbWVudEZyb21SYW5nZSIsInNlbGVjdE5vZGUiLCJmcmFnbWVudCIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImNyZWF0ZUZyYWdtZW50RnJvbVdyYXAiLCJ0b0VsZW1lbnQiLCJjb21wYXJlTm9kZU5hbWVzIiwiZnJvbUVsIiwidG9FbCIsImZyb21Ob2RlTmFtZSIsIm5vZGVOYW1lIiwidG9Ob2RlTmFtZSIsImZyb21Db2RlU3RhcnQiLCJ0b0NvZGVTdGFydCIsImNoYXJDb2RlQXQiLCJ0b1VwcGVyQ2FzZSIsImNyZWF0ZUVsZW1lbnROUyIsIm1vdmVDaGlsZHJlbiIsImN1ckNoaWxkIiwiZmlyc3RDaGlsZCIsIm5leHRDaGlsZCIsIm5leHRTaWJsaW5nIiwiYXBwZW5kQ2hpbGQiLCJzeW5jQm9vbGVhbkF0dHJQcm9wIiwic3BlY2lhbEVsSGFuZGxlcnMiLCJPUFRJT04iLCJwYXJlbnROb2RlIiwicGFyZW50TmFtZSIsInNlbGVjdGVkSW5kZXgiLCJJTlBVVCIsIlRFWFRBUkVBIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsIm5vZGVWYWx1ZSIsInBsYWNlaG9sZGVyIiwiU0VMRUNUIiwib3B0Z3JvdXAiLCJFTEVNRU5UX05PREUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFJDEiLCJURVhUX05PREUiLCJDT01NRU5UX05PREUiLCJub29wIiwiZGVmYXVsdEdldE5vZGVLZXkiLCJub2RlIiwiaWQiLCJtb3JwaGRvbUZhY3RvcnkiLCJtb3JwaGRvbSIsInRvTm9kZUh0bWwiLCJnZXROb2RlS2V5Iiwib25CZWZvcmVOb2RlQWRkZWQiLCJvbk5vZGVBZGRlZCIsIm9uQmVmb3JlRWxVcGRhdGVkIiwib25FbFVwZGF0ZWQiLCJvbkJlZm9yZU5vZGVEaXNjYXJkZWQiLCJvbk5vZGVEaXNjYXJkZWQiLCJvbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkIiwic2tpcEZyb21DaGlsZHJlbiIsImFkZENoaWxkIiwicGFyZW50IiwiY2hpbGRyZW5Pbmx5IiwiZnJvbU5vZGVzTG9va3VwIiwiY3JlYXRlIiwia2V5ZWRSZW1vdmFsTGlzdCIsImFkZEtleWVkUmVtb3ZhbCIsIndhbGtEaXNjYXJkZWRDaGlsZE5vZGVzIiwic2tpcEtleWVkTm9kZXMiLCJyZW1vdmVOb2RlIiwicmVtb3ZlQ2hpbGQiLCJpbmRleFRyZWUiLCJoYW5kbGVOb2RlQWRkZWQiLCJ1bm1hdGNoZWRGcm9tRWwiLCJyZXBsYWNlQ2hpbGQiLCJtb3JwaEVsIiwiY2xlYW51cEZyb21FbCIsImN1ckZyb21Ob2RlQ2hpbGQiLCJjdXJGcm9tTm9kZUtleSIsImZyb21OZXh0U2libGluZyIsInRvRWxLZXkiLCJtb3JwaENoaWxkcmVuIiwic2tpcEZyb20iLCJjdXJUb05vZGVDaGlsZCIsImN1clRvTm9kZUtleSIsInRvTmV4dFNpYmxpbmciLCJtYXRjaGluZ0Zyb21FbCIsIm91dGVyIiwiaXNTYW1lTm9kZSIsImN1ckZyb21Ob2RlVHlwZSIsImlzQ29tcGF0aWJsZSIsImluc2VydEJlZm9yZSIsIm9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0IiwiYWN0dWFsaXplIiwib3duZXJEb2N1bWVudCIsInNwZWNpYWxFbEhhbmRsZXIiLCJtb3JwaGVkTm9kZSIsIm1vcnBoZWROb2RlVHlwZSIsInRvTm9kZVR5cGUiLCJsZW4iLCJlbFRvUmVtb3ZlIiwibm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24iLCJpc0ZpbGVJbnB1dCIsImNoaWxkcmVuIiwiZXhlY3V0ZU1vcnBoZG9tIiwicm9vdEZyb21FbGVtZW50Iiwicm9vdFRvRWxlbWVudCIsIm1vZGlmaWVkRmllbGRFbGVtZW50cyIsImdldEVsZW1lbnRWYWx1ZSIsImNoaWxkQ29tcG9uZW50cyIsImZpbmRDaGlsZENvbXBvbmVudCIsImdldEtleUZyb21FbGVtZW50IiwiZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIiLCJjaGlsZENvbXBvbmVudE1hcCIsIk1hcCIsInNldCIsIndhc0VsZW1lbnRBZGRlZCIsIk1hdGgiLCJyYW5kb20iLCJfX3giLCJ3aW5kb3ciLCJBbHBpbmUiLCJtb3JwaCIsImhhcyIsInVwZGF0ZUZyb21OZXdFbGVtZW50RnJvbVBhcmVudFJlbmRlciIsImVsZW1lbnRDaGFuZ2VzIiwiZ2V0Q2hhbmdlZEVsZW1lbnQiLCJhcHBseVRvRWxlbWVudCIsImlzRXF1YWxOb2RlIiwibm9ybWFsaXplZEZyb21FbCIsIm5vcm1hbGl6ZWRUb0VsIiwiVW5zeW5jZWRJbnB1dHNUcmFja2VyIiwibW9kZWxFbGVtZW50UmVzb2x2ZXIiLCJlbGVtZW50RXZlbnRMaXN0ZW5lcnMiLCJjYWxsYmFjayIsImhhbmRsZUlucHV0RXZlbnQiLCJ1bnN5bmNlZElucHV0cyIsIlVuc3luY2VkSW5wdXRDb250YWluZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibW9kZWxOYW1lIiwibWFya01vZGVsQXNTeW5jZWQiLCJ1cGRhdGVNb2RlbEZyb21FbGVtZW50IiwiZ2V0TW9kZWxOYW1lIiwiYWxsVW5zeW5jZWRJbnB1dHMiLCJnZXRVbnN5bmNlZE1vZGVsTmFtZXMiLCJyZXNldFVuc3luY2VkRmllbGRzIiwidW5zeW5jZWROb25Nb2RlbEZpZWxkcyIsInVuc3luY2VkTW9kZWxOYW1lcyIsInVuc3luY2VkTW9kZWxGaWVsZHMiLCJ2YWx1ZXMiLCJIb29rTWFuYWdlciIsImhvb2tzIiwiaG9va05hbWUiLCJCYWNrZW5kUmVzcG9uc2UiLCJ0ZXh0IiwiQ2hhbmdpbmdJdGVtc1RyYWNrZXIiLCJjaGFuZ2VkSXRlbXMiLCJyZW1vdmVkSXRlbXMiLCJpdGVtTmFtZSIsInByZXZpb3VzVmFsdWUiLCJyZW1vdmVkUmVjb3JkIiwib3JpZ2luYWwiLCJvcmlnaW5hbFJlY29yZCIsInRydWVPcmlnaW5hbFZhbHVlIiwic2l6ZSIsIkVsZW1lbnRDaGFuZ2VzIiwiYWRkZWRDbGFzc2VzIiwicmVtb3ZlZENsYXNzZXMiLCJzdHlsZUNoYW5nZXMiLCJhdHRyaWJ1dGVDaGFuZ2VzIiwiY2xhc3NOYW1lIiwiZmlsdGVyIiwic3R5bGVOYW1lIiwib3JpZ2luYWxWYWx1ZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiYXR0cmlidXRlTmFtZSIsImdldENoYW5nZWRJdGVtcyIsImdldFJlbW92ZWRJdGVtcyIsImNoYW5nZSIsInNldFByb3BlcnR5IiwicmVtb3ZlUHJvcGVydHkiLCJpc0VtcHR5IiwiRXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIiLCJzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrIiwiY2hhbmdlZEVsZW1lbnRzIiwiV2Vha01hcCIsImNoYW5nZWRFbGVtZW50c0NvdW50IiwiYWRkZWRFbGVtZW50cyIsInJlbW92ZWRFbGVtZW50cyIsImlzU3RhcnRlZCIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwib25NdXRhdGlvbnMiLCJiaW5kIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhdHRyaWJ1dGVPbGRWYWx1ZSIsImRpc2Nvbm5lY3QiLCJ0YWtlUmVjb3JkcyIsIm11dGF0aW9ucyIsImhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMiLCJtdXRhdGlvbiIsImlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbiIsImlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQiLCJhZGRlZEVsZW1lbnQiLCJoYW5kbGVDaGlsZExpc3RNdXRhdGlvbiIsImhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uIiwiYWRkZWROb2RlcyIsIkVsZW1lbnQiLCJyZW1vdmVkTm9kZXMiLCJjaGFuZ2VkRWxlbWVudCIsImhhbmRsZUNsYXNzQXR0cmlidXRlTXV0YXRpb24iLCJoYW5kbGVTdHlsZUF0dHJpYnV0ZU11dGF0aW9uIiwiaGFuZGxlR2VuZXJpY0F0dHJpYnV0ZU11dGF0aW9uIiwicHJldmlvdXNWYWx1ZXMiLCJ0cmltbWVkVmFsdWUiLCJuZXdWYWx1ZXMiLCJjYWxsIiwiYWRkZWRWYWx1ZXMiLCJyZW1vdmVkVmFsdWVzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInByZXZpb3VzU3R5bGVzIiwiZXh0cmFjdFN0eWxlcyIsIm5ld1N0eWxlcyIsImFkZGVkT3JDaGFuZ2VkU3R5bGVzIiwicmVtb3ZlZFN0eWxlcyIsImFkZFN0eWxlIiwicmVtb3ZlU3R5bGUiLCJhZGRBdHRyaWJ1dGUiLCJzdHlsZXMiLCJzdHlsZU9iamVjdCIsInByb3BlcnR5IiwidGFnTmFtZSIsIkNoaWxkQ29tcG9uZW50V3JhcHBlciIsIm1vZGVsQmluZGluZ3MiLCJDb21wb25lbnQiLCJsaXN0ZW5lcnMiLCJjb21wb25lbnRGaW5kZXIiLCJmaW5nZXJwcmludCIsImJhY2tlbmQiLCJlbGVtZW50RHJpdmVyIiwiZGVmYXVsdERlYm91bmNlIiwiYmFja2VuZFJlcXVlc3QiLCJwZW5kaW5nQWN0aW9ucyIsInBlbmRpbmdGaWxlcyIsImlzUmVxdWVzdFBlbmRpbmciLCJyZXF1ZXN0RGVib3VuY2VUaW1lb3V0IiwibGlzdGVuZXIiLCJfYSIsInVuc3luY2VkSW5wdXRzVHJhY2tlciIsInJlc2V0UHJvbWlzZSIsInN0YXJ0Iiwib25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlIiwicGx1Z2luIiwiYXR0YWNoVG9Db21wb25lbnQiLCJ0cmlnZ2VySG9vayIsImFjdGl2YXRlIiwiY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0IiwiZGVhY3RpdmF0ZSIsInN0b3AiLCJyZWdpc3RlciIsInVucmVnaXN0ZXIiLCJyZVJlbmRlciIsImRlYm91bmNlIiwicHJvbWlzZSIsIm5leHRSZXF1ZXN0UHJvbWlzZSIsImlzQ2hhbmdlZCIsImRlYm91bmNlZFN0YXJ0UmVxdWVzdCIsImlucHV0IiwidHJ5U3RhcnRpbmdSZXF1ZXN0IiwiZ2V0VW5zeW5jZWRNb2RlbHMiLCJvbiIsIm9mZiIsIm9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCIsInBlcmZvcm1FbWl0IiwiZG9FbWl0IiwiZW1pdFVwIiwibWF0Y2hpbmdOYW1lIiwiY29tcG9uZW50cyIsImFjdGlvbnMiLCJnZXRDb21wb25lbnRQcm9wcyIsInN0b3JlTmV3UHJvcHNGcm9tUGFyZW50IiwibGl2ZUZpbmdlcnByaW50VmFsdWUiLCJyZW5kZXIiLCJjaGlsZFdyYXBwZXIiLCJtb2RlbEJpbmRpbmciLCJjaGlsZE1vZGVsTmFtZSIsImlubmVyTW9kZWxOYW1lIiwic2hvdWxkUmVuZGVyIiwiVHVyYm8iLCJwZXJmb3JtUmVxdWVzdCIsInRoaXNQcm9taXNlUmVzb2x2ZSIsIm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUiLCJmaWxlc1RvU2VuZCIsIm1ha2VSZXF1ZXN0IiwiZ2V0T3JpZ2luYWxQcm9wcyIsImdldERpcnR5UHJvcHMiLCJnZXRDaGlsZHJlbkZpbmdlcnByaW50cyIsImdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQiLCJmbHVzaERpcnR5UHJvcHNUb1BlbmRpbmciLCJiYWNrZW5kUmVzcG9uc2UiLCJnZXRCb2R5IiwiY29udHJvbHMiLCJkaXNwbGF5RXJyb3IiLCJwdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkiLCJyZW5kZXJFcnJvciIsInByb2Nlc3NSZXJlbmRlciIsImlzVHVyYm9FbmFibGVkIiwidmlzaXQiLCJsb2NhdGlvbiIsImhyZWYiLCJtb2RpZmllZE1vZGVsVmFsdWVzIiwibWF0Y2hlcyIsIm5ld1Byb3BzIiwicmVpbml0aWFsaXplQWxsUHJvcHMiLCJldmVudHNUb0VtaXQiLCJnZXRFdmVudHNUb0VtaXQiLCJicm93c2VyRXZlbnRzVG9EaXNwYXRjaCIsImdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoIiwiaGFuZGxlUGVuZGluZ0NoYW5nZXMiLCJnZXRVbnN5bmNlZElucHV0cyIsImZpbmRDaGlsZENvbXBvbmVudEVsZW1lbnQiLCJjb21wb25lbnROYW1lIiwiZW1pdFNlbGYiLCJlbWl0IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNhbGN1bGF0ZURlYm91bmNlIiwibW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImZsZXhEaXJlY3Rpb24iLCJpZnJhbWUiLCJib3JkZXJSYWRpdXMiLCJmbGV4R3JvdyIsInByZXBlbmQiLCJvdmVyZmxvdyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsImNsb3NlTW9kYWwiLCJmb2N1cyIsImZpbmdlcnByaW50cyIsInRhZyIsInRvTG93ZXJDYXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwcm94aWZ5Q29tcG9uZW50IiwiUHJveHkiLCJwcm9wIiwiY2FsbGFibGUiLCJhcHBseSIsIlJlZmxlY3QiLCJnZXREYXRhIiwiQmFja2VuZFJlcXVlc3QiLCJ1cGRhdGVNb2RlbHMiLCJpc1Jlc29sdmVkIiwidXBkYXRlZE1vZGVscyIsInRhcmdldGVkQWN0aW9ucyIsInRhcmdldGVkTW9kZWxzIiwiUmVxdWVzdEJ1aWxkZXIiLCJ1cmwiLCJjc3JmVG9rZW4iLCJ1cGRhdGVkIiwic3BsaXRVcmwiLCJxdWVyeVN0cmluZyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImZldGNoT3B0aW9ucyIsIkFjY2VwdCIsInRvdGFsRmlsZXMiLCJyZWR1Y2UiLCJ0b3RhbCIsImN1cnJlbnQiLCJoYXNGaW5nZXJwcmludHMiLCJ3aWxsRGF0YUZpdEluVXJsIiwicmVxdWVzdERhdGEiLCJwcm9wc0Zyb21QYXJlbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicGFyYW1zU3RyaW5nIiwidG9TdHJpbmciLCJwcm9wc0pzb24iLCJ1cGRhdGVkSnNvbiIsImNoaWxkcmVuSnNvbiIsInByb3BzRnJvbVBhcmVudEpzb24iLCJ1cmxFbmNvZGVkSnNvbkRhdGEiLCJCYWNrZW5kIiwicmVxdWVzdEJ1aWxkZXIiLCJidWlsZFJlcXVlc3QiLCJiYWNrZW5kQWN0aW9uIiwiU3RhbmRhcmRFbGVtZW50RHJpdmVyIiwibW9kZWxEaXJlY3RpdmUiLCJyb290RWxlbWVudCIsImxpdmVQcm9wc1ZhbHVlIiwibGl2ZUlkIiwiZXZlbnRzSnNvbiIsImxpdmVFbWl0IiwibGl2ZUJyb3dzZXJEaXNwYXRjaCIsIkxvYWRpbmdQbHVnaW4iLCJyZXF1ZXN0Iiwic3RhcnRMb2FkaW5nIiwiZmluaXNoTG9hZGluZyIsInRhcmdldEVsZW1lbnQiLCJoYW5kbGVMb2FkaW5nVG9nZ2xlIiwiaXNMb2FkaW5nIiwiYWRkQXR0cmlidXRlcyIsInJlbW92ZUF0dHJpYnV0ZXMiLCJnZXRMb2FkaW5nRGlyZWN0aXZlcyIsImhhbmRsZUxvYWRpbmdEaXJlY3RpdmUiLCJmaW5hbEFjdGlvbiIsInBhcnNlTG9hZGluZ0FjdGlvbiIsImRlbGF5IiwidmFsaWRNb2RpZmllcnMiLCJtb2RpZmllciIsInBhcnNlSW50IiwiY29udGFpbnNPbmVPZkFjdGlvbnMiLCJhcmVBbnlNb2RlbHNVcGRhdGVkIiwibG9hZGluZ0RpcmVjdGl2ZSIsInNob3dFbGVtZW50IiwiaGlkZUVsZW1lbnQiLCJsb2FkaW5nRGlyZWN0aXZlcyIsIlNWR0VsZW1lbnQiLCJsb2FkaW5nIiwiY2xhc3NlcyIsImF0dHJpYnV0ZSIsIlZhbGlkYXRlZEZpZWxkc1BsdWdpbiIsImhhbmRsZU1vZGVsU2V0IiwidmFsaWRhdGVkRmllbGRzIiwiUGFnZVVubG9hZGluZ1BsdWdpbiIsImlzQ29ubmVjdGVkIiwiUG9sbGluZ0RpcmVjdG9yIiwiaXNQb2xsaW5nQWN0aXZlIiwicG9sbGluZ0ludGVydmFscyIsImFjdGlvbk5hbWUiLCJkdXJhdGlvbiIsInBvbGxzIiwiaW5pdGlhdGVQb2xsIiwiaW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic3RvcEFsbFBvbGxpbmciLCJzdGFydEFsbFBvbGxpbmciLCJ0aW1lciIsInNldEludGVydmFsIiwiUG9sbGluZ1BsdWdpbiIsInBvbGxpbmdEaXJlY3RvciIsImluaXRpYWxpemVQb2xsaW5nIiwiYWRkUG9sbCIsImNsZWFyUG9sbGluZyIsInBvbGwiLCJyYXdQb2xsQ29uZmlnIiwid2FybiIsIlNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIiwic3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMiLCJIVE1MRm9ybUVsZW1lbnQiLCJnZXRNb2RlbEJpbmRpbmciLCJ0YXJnZXRFdmVudE5hbWUiLCJDb21wb25lbnRSZWdpc3RyeSIsImNvbXBvbmVudE1hcEJ5RWxlbWVudCIsImNvbXBvbmVudE1hcEJ5Q29tcG9uZW50IiwicmVqZWN0IiwiY291bnQiLCJtYXhDb3VudCIsImN1cnJlbnRDb21wb25lbnQiLCJvbmx5UGFyZW50cyIsIm9ubHlNYXRjaE5hbWUiLCJnZXRDb21wb25lbnQiLCJMaXZlQ29udHJvbGxlckRlZmF1bHQiLCJjb21wb25lbnRSZWdpc3RyeSIsImFyZ3VtZW50cyIsInBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50IiwiaGFuZGxlQ2hhbmdlRXZlbnQiLCJoYW5kbGVDb25uZWN0ZWRDb250cm9sbGVyRXZlbnQiLCJoYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudCIsIm5hbWVWYWx1ZSIsInByb3BzVmFsdWUiLCJsaXN0ZW5lcnNWYWx1ZSIsImZpbmRDb21wb25lbnRzIiwiZmluZ2VycHJpbnRWYWx1ZSIsInVybFZhbHVlIiwiY3NyZlZhbHVlIiwicHJveGllZENvbXBvbmVudCIsIl9fY29tcG9uZW50IiwiaGFzRGVib3VuY2VWYWx1ZSIsImRlYm91bmNlVmFsdWUiLCJwbHVnaW5zIiwiYWRkUGx1Z2luIiwicmVnaXN0ZXJDb21wb25lbnQiLCJjb25uZWN0IiwidW5yZWdpc3RlckNvbXBvbmVudCIsImN1cnJlbnRUYXJnZXQiLCJ1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQiLCJyYXdBY3Rpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJnZXRFbWl0RGlyZWN0aXZlcyIsIm5hbWVNYXRjaCIsImV2ZW50SW5mbyIsImVtaXRzIiwiZXZlbnROYW1lIiwiZmluYWxWYWx1ZSIsImNoaWxkQ29udHJvbGxlciIsImNvbnRyb2xsZXIiLCJnZXRQYXJlbnQiLCJtb2RlbERpcmVjdGl2ZXMiLCJjYW5CdWJibGUiLCJjYW5jZWxhYmxlIiwiU3RyaW5nIiwiY3NyZiIsIk51bWJlciIsIl9iIiwiaW50cm8iLCJpbnRyb1ZhbHVlIiwicmVzb2x2ZVN2ZWx0ZUNvbXBvbmVudCIsImNvbXBvbmVudFZhbHVlIiwiX2Rlc3Ryb3lJZkV4aXN0cyIsInJvb3QiLCIkZGVzdHJveSIsIkJvb2xlYW4iLCJTd3VwIiwiU3d1cERlYnVnUGx1Z2luIiwiU3d1cEZvcm1zUGx1Z2luIiwiU3d1cEZhZGVUaGVtZSIsIlN3dXBTbGlkZVRoZW1lIiwiZGF0YUNvbnRhaW5lcnMiLCJjb250YWluZXJzVmFsdWUiLCJtYWluRWxlbWVudCIsIm1haW5FbGVtZW50VmFsdWUiLCJhbGxFbGVtZW50cyIsImNvbnRhaW5lcnNMaXN0IiwiaXRlbSIsImNvbnRhaW5lcnMiLCJ0aGVtZVZhbHVlIiwiaGFzTWFpbkVsZW1lbnRWYWx1ZSIsImhhc0FuaW1hdGVIaXN0b3J5QnJvd3NpbmdWYWx1ZSIsImFuaW1hdGVIaXN0b3J5QnJvd3NpbmciLCJhbmltYXRlSGlzdG9yeUJyb3dzaW5nVmFsdWUiLCJoYXNBbmltYXRpb25TZWxlY3RvclZhbHVlIiwiYW5pbWF0aW9uU2VsZWN0b3IiLCJhbmltYXRpb25TZWxlY3RvclZhbHVlIiwiaGFzQ2FjaGVWYWx1ZSIsImNhY2hlIiwiY2FjaGVWYWx1ZSIsImhhc0xpbmtTZWxlY3RvclZhbHVlIiwibGlua1NlbGVjdG9yIiwibGlua1NlbGVjdG9yVmFsdWUiLCJkZWJ1Z1ZhbHVlIiwic3d1cCIsInRoZW1lIiwiZGVidWciLCJpc0Rpc3BsYXllZCIsInZpc2libGVJY29uIiwiaGlkZGVuSWNvbiIsInZpc2libGVJY29uVmFsdWUiLCJoaWRkZW5JY29uVmFsdWUiLCJidXR0b24iLCJjcmVhdGVCdXR0b24iLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJidXR0b25DbGFzc2VzVmFsdWUiLCJ2aXNpYmxlTGFiZWxWYWx1ZSIsInRvZ2dsZUJ1dHRvbkVsZW1lbnQiLCJoaWRkZW5MYWJlbFZhbHVlIiwidmlzaWJsZUxhYmVsIiwiaGlkZGVuTGFiZWwiLCJidXR0b25DbGFzc2VzIiwidHVyYm9fY29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=