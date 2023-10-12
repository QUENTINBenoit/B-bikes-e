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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
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


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_16__.Controller);


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
  },
  toggleFrilterSelection: function toggleFrilterSelection() {
    var menuSelection = document.querySelector("#submenuFilterSelection");
    var toggleFilterSelection = menuSelection.classList.toggle("-translate-y-full");
    if (toggleFilterSelection == true) {
      menuSelection.classList.add("-translate-y-full");
      menuSelection.classList.add("duration-700");
    } else {
      menuSelection.classList.remove("-translate-y-full");
    }
    document.querySelector("#arrowFilterSelection").classList.toggle("rotate-180");
  }
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
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _acc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acc.js */ "./assets/acc.js");
/* harmony import */ var _bckoff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bckoff.js */ "./assets/bckoff.js");
/* harmony import */ var _bckoff_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bckoff_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images.js */ "./assets/images.js");
/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flowbite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flowbite */ "./node_modules/flowbite/lib/esm/index.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCaUQ7QUFDSztBQUNFO0FBQ3hELGlFQUFlO0FBQ2Ysb0NBQW9DLG1NQUE0RTtBQUNoSCxVQUFVLHlOQUF1RjtBQUNqRyxnQ0FBZ0MsNk1BQWlGO0FBQ2pILDRCQUE0QiwyTEFBd0U7QUFDcEcsa0RBQWtELGlOQUFtRjtBQUNySSxtQ0FBbUMseU1BQStFO0FBQ2xILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1YrQzs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7RUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUEsT0FVSSxtQkFBVTtNQUNOLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLEdBQUcsbUVBQW1FO0lBQ2xHO0VBQUM7RUFBQTtBQUFBLEVBSHdCRiwyREFBVTs7Ozs7Ozs7Ozs7Ozs7QUNYYjtBQUUxQixJQUFNRyxHQUFHLEdBQUc7RUFDVkMsSUFBSSxFQUFFLGdCQUFZO0lBQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQztJQUUxQ0MsUUFBUSxDQUNMQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQzFCQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVOLEdBQUcsQ0FBQ08sU0FBUyxDQUFDO0lBRTNDSCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUNyQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFTixHQUFHLENBQUNRLG9CQUFvQixDQUFDO0lBRXRESixRQUFRLENBQ0xDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUNqQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFTixHQUFHLENBQUNTLGlCQUFpQixDQUFDO0lBQ25ETCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUMvQkMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFTixHQUFHLENBQUNVLGVBQWUsQ0FBQztJQUVqRE4sUUFBUSxDQUNMQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FDbENDLGdCQUFnQixDQUFDLE9BQU8sRUFBRU4sR0FBRyxDQUFDVyxrQkFBa0IsQ0FBQztJQUVwRFAsUUFBUSxDQUNMQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQzlCQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVOLEdBQUcsQ0FBQ1ksa0JBQWtCLENBQUM7SUFFcERSLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQ2pDQyxnQkFBZ0IsQ0FDZixPQUFPLEVBQ1BOLEdBQUcsQ0FBQ2Esc0JBQXNCLENBQzNCO0VBQ0wsQ0FBQztFQUVETixTQUFTLEVBQUUscUJBQVk7SUFDckI7SUFDQSxJQUFNTyxPQUFPLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUNwRCxJQUFNVSxLQUFLLEdBQUdYLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNqRCxJQUFNVyxVQUFVLEdBQ2RaLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztJQUV6Q1MsT0FBTyxDQUFDRyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbENILEtBQUssQ0FBQ0UsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBRWhDLElBQU1DLFdBQVcsR0FBR0gsVUFBVSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FDN0MsbUJBQW1CLENBQ3BCO0lBRUQsSUFBSUMsV0FBVyxJQUFJLElBQUksRUFBRTtNQUN2QkgsVUFBVSxDQUFDQyxTQUFTLENBQUNHLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztJQUMvQyxDQUFDLE1BQU07TUFDTEosVUFBVSxDQUFDQyxTQUFTLENBQUNJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztJQUNsRDtFQUNGLENBQUM7RUFFRDtFQUNBYixvQkFBb0IsRUFBRSxnQ0FBWTtJQUNoQ0osUUFBUSxDQUNMQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FDL0JZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUM3QmQsUUFBUSxDQUNMQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FDL0JZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUVuQ2QsUUFBUSxDQUNMQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FDakNZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNqQ2QsUUFBUSxDQUNMQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FDckNZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLG1CQUFtQixDQUFDO0lBQ3hDZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUNyQ1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ2xDZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUN6Q1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsZUFBZSxDQUFDO0VBQ3RDLENBQUM7RUFFRDtFQUNBVCxpQkFBaUIsRUFBRSw2QkFBWTtJQUM3QkwsUUFBUSxDQUNMQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FDckNZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUM3QmQsUUFBUSxDQUNMQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQzlCWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDakNkLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQ2pDWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztJQUN4Q2QsUUFBUSxDQUNMQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FDakNZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNsQ2QsUUFBUSxDQUNMQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FDdENZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGVBQWUsQ0FBQztFQUN0QyxDQUFDO0VBRUQ7RUFDQVIsZUFBZSxFQUFFLDJCQUFZO0lBQzNCTixRQUFRLENBQ0xDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUNwQ1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzdCZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FDNUJZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNqQ2QsUUFBUSxDQUNMQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FDL0JZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLG1CQUFtQixDQUFDO0lBQ3hDZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUMvQlksU0FBUyxDQUFDQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ2xDZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUNwQ1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsZUFBZSxDQUFDO0VBQ3RDLENBQUM7RUFFRDtFQUNBUCxrQkFBa0IsRUFBRSw4QkFBWTtJQUM5QlQsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3JCQyxRQUFRLENBQ0xDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUN2Q1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzdCZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUMvQlksU0FBUyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ2pDZCxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUNsQ1ksU0FBUyxDQUFDQyxNQUFNLENBQUMsbUJBQW1CLENBQUM7SUFDeENkLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQ2xDWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFFbENkLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQ3RDWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxlQUFlLENBQUM7RUFDdEMsQ0FBQztFQUVETixrQkFBa0IsRUFBRSw4QkFBWTtJQUM5QlIsUUFBUSxDQUNMQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQzlCWSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFFakNkLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUN4QlksU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQy9CLENBQUM7RUFDREwsc0JBQXNCLEVBQUUsa0NBQVk7SUFDbEMsSUFBTVMsYUFBYSxHQUFHbEIsUUFBUSxDQUFDQyxhQUFhLENBQzFDLHlCQUF5QixDQUMxQjtJQUNELElBQU1rQixxQkFBcUIsR0FDekJELGFBQWEsQ0FBQ0wsU0FBUyxDQUFDQyxNQUFNLENBQUMsbUJBQW1CLENBQUM7SUFFckQsSUFBSUsscUJBQXFCLElBQUksSUFBSSxFQUFFO01BQ2pDRCxhQUFhLENBQUNMLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLG1CQUFtQixDQUFDO01BQ2hERSxhQUFhLENBQUNMLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUM3QyxDQUFDLE1BQU07TUFDTEUsYUFBYSxDQUFDTCxTQUFTLENBQUNJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztJQUNyRDtJQUVBakIsUUFBUSxDQUNMQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FDdENZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztFQUNuQztBQUNGLENBQUM7QUFFRGQsUUFBUSxDQUFDRSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRU4sR0FBRyxDQUFDQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeksvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFLa0I7QUFDRztBQUNBOzs7Ozs7Ozs7OztBQ3BCckIsSUFBTXVCLE1BQU0sR0FBRztFQUNYdkIsSUFBSSxFQUFFLGdCQUFZO0lBQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FDL0M7SUFDREMsUUFBUSxDQUNMQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQzlCQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVrQixNQUFNLENBQUNDLGNBQWMsQ0FBQztFQUVyRCxDQUFDO0VBRURBLGNBQWMsRUFBRSwwQkFBWTtJQUMxQnZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNDQUFzQyxDQUFDO0lBQ25EQyxRQUFRLENBQ0xDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FDOUJZLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUVqQyxJQUFNUSxVQUFVLEdBQ2R0QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7SUFDdkMsSUFBTXNCLFlBQVksR0FDaEJ2QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFFckN1QixPQUFPLEdBQUdGLFVBQVUsQ0FBQ1QsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzdDOztJQUVBLElBQUlVLE9BQU8sSUFBSSxJQUFJLEVBQUU7TUFDbkJGLFVBQVUsQ0FBQ1QsU0FBUyxDQUFDRyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ2hDTyxZQUFZLENBQUNWLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLGlCQUFpQixDQUFDO01BQ2hETSxZQUFZLENBQUNWLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLGNBQWMsQ0FBQztNQUMxQ00sVUFBVSxDQUFDVCxTQUFTLENBQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQyxNQUFNO01BQ0xLLFVBQVUsQ0FBQ1QsU0FBUyxDQUFDRyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ2hDTyxZQUFZLENBQUNWLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLGlCQUFpQixDQUFDO01BQzdDTyxZQUFZLENBQUNWLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLGNBQWMsQ0FBQztNQUM3Q0ssVUFBVSxDQUFDVCxTQUFTLENBQUNHLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDMUM7RUFDRjtBQUNGLENBQUM7QUFHSGhCLFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUVrQixNQUFNLENBQUN2QixJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0U7O0FBRTVEO0FBQ08sSUFBTTZCLEdBQUcsR0FBR0QsMEVBQWdCLENBQUNFLHlJQUluQyxDQUFDOztBQUVGO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLElBQU1FLE1BQU0sR0FBRztFQUNiaEMsSUFBSSxFQUFFLGdCQUFZO0lBQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQztJQUU5RCxJQUFJK0IsS0FBSyxHQUFHOUIsUUFBUSxDQUFDK0IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDOztJQUV0RDtJQUFBLDJDQUNtQkQsS0FBSztNQUFBO0lBQUE7TUFBdkIsb0RBQXlCO1FBQUEsSUFBZkUsSUFBSTtRQUNiQSxJQUFJLENBQUM5QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUyQixNQUFNLENBQUNJLGtCQUFrQixDQUFDO1FBQ3pEbkMsT0FBTyxDQUFDQyxHQUFHLENBQUNpQyxJQUFJLENBQUM7TUFDakI7SUFBQztNQUFBO0lBQUE7TUFBQTtJQUFBO0VBR0wsQ0FBQztFQUNEQyxrQkFBa0IsRUFBRyw0QkFBU0MsQ0FBQyxFQUFFO0lBQUE7SUFDL0JBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCO0lBQ0E7SUFDQSxJQUFHQyxPQUFPLENBQUMscURBQXFELENBQUMsRUFBQztNQUNoRTtNQUNBQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDL0JDLE1BQU0sRUFBRSxRQUFRO1FBQ2hCQyxPQUFPLEVBQUU7VUFDUCxrQkFBa0IsRUFBRSxnQkFBZ0I7VUFDcEMsY0FBYyxFQUFFO1FBQ3RCLENBQUM7UUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztVQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0M7UUFBSyxDQUFDO01BQ3JELENBQUMsQ0FBQyxDQUNDQyxJQUFJLENBQUMsVUFBQUMsUUFBUTtRQUFBLE9BQUlBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO01BQUEsRUFBQyxDQUNqQ0YsSUFBSSxDQUFDLFVBQUFHLElBQUksRUFBSTtRQUNaLElBQUdBLElBQUksQ0FBQ0MsT0FBTyxFQUFDO1VBQ2QsS0FBSSxDQUFDQyxhQUFhLENBQUNsQyxNQUFNLEVBQUU7UUFDN0IsQ0FBQyxNQUFJO1VBQ0htQyxLQUFLLENBQUNILElBQUksQ0FBQ0ksS0FBSyxDQUFDO1FBQ25CO01BQ0YsQ0FBQyxDQUFDO0lBRUo7RUFDQTtBQUVGLENBQUM7QUFFRHJELFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUyQixNQUFNLENBQUNoQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDVjtBQUFBLElBRTFDeUQsU0FBUztFQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQSxPQUNYLG1CQUFVO01BQUE7TUFDTixJQUFJLENBQUNDLEtBQUssRUFBRTtNQUNaLElBQUksQ0FBQ0Msd0JBQXdCLENBQUN0RCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFBQSxPQUFNLEtBQUksQ0FBQ3FELEtBQUssRUFBRTtNQUFBLEVBQUM7TUFDM0UsSUFBSSxDQUFDRSxXQUFXLENBQUN2RCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQ3dELEtBQUs7UUFBQSxPQUFLLEtBQUksQ0FBQ0MsYUFBYSxDQUFDRCxLQUFLLENBQUM7TUFBQSxFQUFDO01BQ2pGLElBQUksQ0FBQ0UsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUNqQztFQUFDO0lBQUE7SUFBQSxPQUNELGlCQUFRO01BQ0osSUFBSSxDQUFDSCxXQUFXLENBQUNJLEtBQUssR0FBRyxFQUFFO01BQzNCLElBQUksQ0FBQ0osV0FBVyxDQUFDSyxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO01BQ3hDLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNGLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87TUFDOUMsSUFBSSxDQUFDRSxhQUFhLENBQUNILEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07TUFDekMsSUFBSSxDQUFDRyxrQkFBa0IsQ0FBQ0osS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtNQUM5QyxJQUFJLENBQUNHLGtCQUFrQixDQUFDSixLQUFLLENBQUNLLGVBQWUsR0FBRyxNQUFNO01BQ3RELElBQUksQ0FBQ0MscUJBQXFCLENBQUN6RSxXQUFXLEdBQUcsRUFBRTtNQUMzQyxJQUFJLENBQUNpRSxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQy9CO0VBQUM7SUFBQTtJQUFBLE9BQ0QsdUJBQWNGLEtBQUssRUFBRTtNQUNqQixJQUFNVyxJQUFJLEdBQUdYLEtBQUssQ0FBQ1ksTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDO01BQ2xDLElBQUksT0FBT0YsSUFBSSxLQUFLLFdBQVcsRUFBRTtRQUM3QjtNQUNKO01BQ0EsSUFBSSxDQUFDWixXQUFXLENBQUNLLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07TUFDdkMsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0YsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtNQUM3QyxJQUFJLENBQUNLLHFCQUFxQixDQUFDekUsV0FBVyxHQUFHMEUsSUFBSSxDQUFDRyxJQUFJO01BQ2xELElBQUksQ0FBQ1AsYUFBYSxDQUFDSCxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO01BQ3pDLElBQUksQ0FBQ0csa0JBQWtCLENBQUNKLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07TUFDOUMsSUFBSU0sSUFBSSxDQUFDSSxJQUFJLElBQUlKLElBQUksQ0FBQ0ksSUFBSSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDaEQsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ04sSUFBSSxDQUFDO01BQ3BDO01BQ0EsSUFBSSxDQUFDVCxhQUFhLENBQUMsUUFBUSxFQUFFUyxJQUFJLENBQUM7SUFDdEM7RUFBQztJQUFBO0lBQUEsT0FDRCwrQkFBc0JBLElBQUksRUFBRTtNQUFBO01BQ3hCLElBQUksT0FBT08sVUFBVSxLQUFLLFdBQVcsRUFBRTtRQUNuQztNQUNKO01BQ0EsSUFBTUMsTUFBTSxHQUFHLElBQUlELFVBQVUsRUFBRTtNQUMvQkMsTUFBTSxDQUFDM0UsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFVBQUN3RCxLQUFLLEVBQUs7UUFDdkMsTUFBSSxDQUFDUSxrQkFBa0IsQ0FBQ0osS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztRQUMvQyxNQUFJLENBQUNHLGtCQUFrQixDQUFDSixLQUFLLENBQUNLLGVBQWUsR0FBRyxPQUFPLEdBQUdULEtBQUssQ0FBQ1ksTUFBTSxDQUFDUSxNQUFNLEdBQUcsSUFBSTtNQUN4RixDQUFDLENBQUM7TUFDRkQsTUFBTSxDQUFDRSxhQUFhLENBQUNWLElBQUksQ0FBQztJQUM5QjtFQUFDO0lBQUE7SUFBQSxPQUNELHVCQUFjRyxJQUFJLEVBQWdCO01BQUEsSUFBZFEsT0FBTyx1RUFBRyxDQUFDLENBQUM7TUFDNUIsSUFBSSxDQUFDQyxRQUFRLENBQUNULElBQUksRUFBRTtRQUFFVSxNQUFNLEVBQUVGLE9BQU87UUFBRUcsTUFBTSxFQUFFO01BQVcsQ0FBQyxDQUFDO0lBQ2hFO0VBQUM7RUFBQTtBQUFBLEVBN0NtQjFGLDJEQUFVO0FBK0NsQzZELFNBQVMsQ0FBQzhCLE9BQU8sR0FBRyxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLGlCQUFpQixFQUFFLGNBQWMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDaERoSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEZ0Q7QUFFaEQsU0FBU0UsZUFBZSxDQUFDQyxPQUFPLEVBQUU7RUFDOUIsSUFBTUMsVUFBVSxHQUFHLEVBQUU7RUFDckIsSUFBSSxDQUFDRCxPQUFPLEVBQUU7SUFDVixPQUFPQyxVQUFVO0VBQ3JCO0VBQ0EsSUFBSUMsaUJBQWlCLEdBQUcsRUFBRTtFQUMxQixJQUFJQyxtQkFBbUIsR0FBRyxFQUFFO0VBQzVCLElBQUlDLG9CQUFvQixHQUFHLEVBQUU7RUFDN0IsSUFBSUMsZ0JBQWdCLEdBQUcsRUFBRTtFQUN6QixJQUFJQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7RUFDOUIsSUFBSUMsZ0JBQWdCLEdBQUcsRUFBRTtFQUN6QixJQUFJQyxLQUFLLEdBQUcsUUFBUTtFQUNwQixJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCLEdBQWU7SUFDbEMsSUFBSVAsaUJBQWlCLEVBQUU7TUFDbkIsT0FBT0EsaUJBQWlCO0lBQzVCO0lBQ0EsSUFBSUQsVUFBVSxDQUFDUyxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3pCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLCtCQUErQixDQUFDO0lBQ3BEO0lBQ0EsT0FBT1YsVUFBVSxDQUFDQSxVQUFVLENBQUNTLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQ0UsTUFBTTtFQUNuRCxDQUFDO0VBQ0QsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFlLEdBQWU7SUFDaENaLFVBQVUsQ0FBQ2EsSUFBSSxDQUFDO01BQ1pGLE1BQU0sRUFBRVYsaUJBQWlCO01BQ3pCYSxJQUFJLEVBQUVWLGdCQUFnQjtNQUN0QlcsS0FBSyxFQUFFVixxQkFBcUI7TUFDNUJXLFNBQVMsRUFBRVYsZ0JBQWdCO01BQzNCVyxTQUFTLEVBQUUscUJBQU07UUFDYixPQUFPbEIsT0FBTztNQUNsQjtJQUNKLENBQUMsQ0FBQztJQUNGRSxpQkFBaUIsR0FBRyxFQUFFO0lBQ3RCQyxtQkFBbUIsR0FBRyxFQUFFO0lBQ3hCQyxvQkFBb0IsR0FBRyxFQUFFO0lBQ3pCQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQ3JCQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7SUFDMUJDLGdCQUFnQixHQUFHLEVBQUU7SUFDckJDLEtBQUssR0FBRyxRQUFRO0VBQ3BCLENBQUM7RUFDRCxJQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBWSxHQUFlO0lBQzdCLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0IsR0FBUztNQUM3QixNQUFNLElBQUlULEtBQUssK0RBQXVEVCxpQkFBaUIsVUFBTTtJQUNqRyxDQUFDO0lBQ0QsSUFBSUMsbUJBQW1CLEVBQUU7TUFDckIsSUFBSUUsZ0JBQWdCLENBQUNLLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDN0JVLGtCQUFrQixFQUFFO01BQ3hCO01BQ0FkLHFCQUFxQixDQUFDSCxtQkFBbUIsQ0FBQ2tCLElBQUksRUFBRSxDQUFDLEdBQUdqQixvQkFBb0I7SUFDNUUsQ0FBQyxNQUNJO01BQ0QsSUFBSWtCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDakIscUJBQXFCLENBQUMsQ0FBQ0ksTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMvQ1Usa0JBQWtCLEVBQUU7TUFDeEI7TUFDQWYsZ0JBQWdCLENBQUNTLElBQUksQ0FBQ1Ysb0JBQW9CLENBQUNpQixJQUFJLEVBQUUsQ0FBQztJQUN0RDtJQUNBbEIsbUJBQW1CLEdBQUcsRUFBRTtJQUN4QkMsb0JBQW9CLEdBQUcsRUFBRTtFQUM3QixDQUFDO0VBQ0QsSUFBTW9CLFlBQVksR0FBRyxTQUFmQSxZQUFZLEdBQWU7SUFDN0IsSUFBSW5CLGdCQUFnQixDQUFDSyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzdCLE1BQU0sSUFBSUMsS0FBSywwQkFBa0JULGlCQUFpQiwrQ0FBMkM7SUFDakc7SUFDQSxJQUFJb0IsTUFBTSxDQUFDQyxJQUFJLENBQUNqQixxQkFBcUIsQ0FBQyxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQy9DLE1BQU0sSUFBSUMsS0FBSywwQkFBa0JULGlCQUFpQiw0Q0FBd0M7SUFDOUY7SUFDQUssZ0JBQWdCLENBQUNPLElBQUksQ0FBQztNQUNsQjdCLElBQUksRUFBRWlCLGlCQUFpQjtNQUN2QjVCLEtBQUssRUFBRStCLGdCQUFnQixDQUFDSyxNQUFNLEdBQUcsQ0FBQyxHQUFHTCxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRztJQUMvRCxDQUFDLENBQUM7SUFDRkgsaUJBQWlCLEdBQUcsRUFBRTtJQUN0QkMsbUJBQW1CLEdBQUcsRUFBRTtJQUN4QkUsZ0JBQWdCLEdBQUcsRUFBRTtJQUNyQkcsS0FBSyxHQUFHLFFBQVE7RUFDcEIsQ0FBQztFQUNELEtBQUssSUFBSWlCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3pCLE9BQU8sQ0FBQ1UsTUFBTSxFQUFFZSxDQUFDLEVBQUUsRUFBRTtJQUNyQyxJQUFNQyxLQUFJLEdBQUcxQixPQUFPLENBQUN5QixDQUFDLENBQUM7SUFDdkIsUUFBUWpCLEtBQUs7TUFDVCxLQUFLLFFBQVE7UUFDVCxJQUFJa0IsS0FBSSxLQUFLLEdBQUcsRUFBRTtVQUNkbEIsS0FBSyxHQUFHLFdBQVc7VUFDbkI7UUFDSjtRQUNBLElBQUlrQixLQUFJLEtBQUssR0FBRyxFQUFFO1VBQ2QsSUFBSXhCLGlCQUFpQixFQUFFO1lBQ25CVyxlQUFlLEVBQUU7VUFDckI7VUFDQTtRQUNKO1FBQ0EsSUFBSWEsS0FBSSxLQUFLLEdBQUcsRUFBRTtVQUNkRixZQUFZLEVBQUU7VUFDZDtRQUNKO1FBQ0F0QixpQkFBaUIsSUFBSXdCLEtBQUk7UUFDekI7TUFDSixLQUFLLFdBQVc7UUFDWixJQUFJQSxLQUFJLEtBQUssR0FBRyxFQUFFO1VBQ2RQLFlBQVksRUFBRTtVQUNkWCxLQUFLLEdBQUcsaUJBQWlCO1VBQ3pCO1FBQ0o7UUFDQSxJQUFJa0IsS0FBSSxLQUFLLEdBQUcsRUFBRTtVQUNkUCxZQUFZLEVBQUU7VUFDZDtRQUNKO1FBQ0EsSUFBSU8sS0FBSSxLQUFLLEdBQUcsRUFBRTtVQUNkdkIsbUJBQW1CLEdBQUdDLG9CQUFvQjtVQUMxQ0Esb0JBQW9CLEdBQUcsRUFBRTtVQUN6QjtRQUNKO1FBQ0FBLG9CQUFvQixJQUFJc0IsS0FBSTtRQUM1QjtNQUNKLEtBQUssaUJBQWlCO1FBQ2xCLElBQUlBLEtBQUksS0FBSyxHQUFHLEVBQUU7VUFDZEYsWUFBWSxFQUFFO1VBQ2Q7UUFDSjtRQUNBLElBQUlFLEtBQUksS0FBSyxHQUFHLEVBQUU7VUFDZCxNQUFNLElBQUlmLEtBQUssK0JBQXdCRixpQkFBaUIsRUFBRSxRQUFLO1FBQ25FO1FBQ0FJLGVBQWUsRUFBRTtRQUNqQjtJQUFNO0VBRWxCO0VBQ0EsUUFBUUwsS0FBSztJQUNULEtBQUssUUFBUTtJQUNiLEtBQUssaUJBQWlCO01BQ2xCLElBQUlOLGlCQUFpQixFQUFFO1FBQ25CVyxlQUFlLEVBQUU7TUFDckI7TUFDQTtJQUNKO01BQ0ksTUFBTSxJQUFJRixLQUFLLHlEQUErQ1QsaUJBQWlCLFNBQUs7RUFBQztFQUU3RixPQUFPRCxVQUFVO0FBQ3JCO0FBRUEsU0FBUzBCLGtCQUFrQixDQUFDQyxLQUFLLEVBQUU7RUFDL0IsSUFBTUMsVUFBVSxHQUFHLEVBQUU7RUFDckJELEtBQUssQ0FBQ0UsT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBSztJQUNwQkYsVUFBVSxDQUFDZixJQUFJLE9BQWZlLFVBQVUscUJBQVNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDO0VBQ3ZDLENBQUMsQ0FBQztFQUNGLE9BQU9ILFVBQVU7QUFDckI7QUFDQSxTQUFTSSxrQkFBa0IsQ0FBQ0MsS0FBSyxFQUFFO0VBQy9CLE9BQVFBLEtBQUssQ0FDUkMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FDbkJILEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDVkksR0FBRyxDQUFDLFVBQVVDLENBQUMsRUFBRTtJQUNsQixPQUFPQSxDQUFDLENBQUNGLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO0VBQzdCLENBQUMsQ0FBQyxDQUNHRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ2xCO0FBRUEsU0FBU0MsbUJBQW1CLENBQUNwSSxPQUFPLEVBQUVxSSxVQUFVLEVBQUU7RUFDOUMsSUFBSXJJLE9BQU8sWUFBWXNJLGdCQUFnQixFQUFFO0lBQ3JDLElBQUl0SSxPQUFPLENBQUMrRSxJQUFJLEtBQUssVUFBVSxFQUFFO01BQzdCLElBQU13RCxhQUFhLEdBQUdDLDRCQUE0QixDQUFDeEksT0FBTyxFQUFFLEtBQUssQ0FBQztNQUNsRSxJQUFJdUksYUFBYSxLQUFLLElBQUksRUFBRTtRQUN4QixJQUFNRSxVQUFVLEdBQUdKLFVBQVUsQ0FBQ0ssR0FBRyxDQUFDSCxhQUFhLENBQUM5QixNQUFNLENBQUM7UUFDdkQsSUFBSWtDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDSCxVQUFVLENBQUMsRUFBRTtVQUMzQixPQUFPSSx3QkFBd0IsQ0FBQzdJLE9BQU8sRUFBRXlJLFVBQVUsQ0FBQztRQUN4RDtNQUNKO01BQ0EsSUFBSXpJLE9BQU8sQ0FBQzhJLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUMvQixPQUFPOUksT0FBTyxDQUFDK0ksT0FBTyxHQUFHL0ksT0FBTyxDQUFDNEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUk7TUFDakU7TUFDQSxPQUFPNUMsT0FBTyxDQUFDK0ksT0FBTztJQUMxQjtJQUNBLE9BQU9DLFVBQVUsQ0FBQ2hKLE9BQU8sQ0FBQztFQUM5QjtFQUNBLElBQUlBLE9BQU8sWUFBWWlKLGlCQUFpQixFQUFFO0lBQ3RDLElBQUlqSixPQUFPLENBQUNrSixRQUFRLEVBQUU7TUFDbEIsT0FBT1AsS0FBSyxDQUFDUSxJQUFJLENBQUNuSixPQUFPLENBQUNvSixlQUFlLENBQUMsQ0FBQ25CLEdBQUcsQ0FBQyxVQUFDb0IsRUFBRTtRQUFBLE9BQUtBLEVBQUUsQ0FBQ2xGLEtBQUs7TUFBQSxFQUFDO0lBQ3BFO0lBQ0EsT0FBT25FLE9BQU8sQ0FBQ21FLEtBQUs7RUFDeEI7RUFDQSxJQUFJbkUsT0FBTyxDQUFDa0QsT0FBTyxDQUFDaUIsS0FBSyxFQUFFO0lBQ3ZCLE9BQU9uRSxPQUFPLENBQUNrRCxPQUFPLENBQUNpQixLQUFLO0VBQ2hDO0VBQ0EsSUFBSSxPQUFPLElBQUluRSxPQUFPLEVBQUU7SUFDcEIsT0FBT0EsT0FBTyxDQUFDbUUsS0FBSztFQUN4QjtFQUNBLElBQUluRSxPQUFPLENBQUM4SSxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDL0IsT0FBTzlJLE9BQU8sQ0FBQzRDLFlBQVksQ0FBQyxPQUFPLENBQUM7RUFDeEM7RUFDQSxPQUFPLElBQUk7QUFDZjtBQUNBLFNBQVMwRyxpQkFBaUIsQ0FBQ3RKLE9BQU8sRUFBRW1FLEtBQUssRUFBRTtFQUN2QyxJQUFJbkUsT0FBTyxZQUFZc0ksZ0JBQWdCLEVBQUU7SUFDckMsSUFBSXRJLE9BQU8sQ0FBQytFLElBQUksS0FBSyxNQUFNLEVBQUU7TUFDekI7SUFDSjtJQUNBLElBQUkvRSxPQUFPLENBQUMrRSxJQUFJLEtBQUssT0FBTyxFQUFFO01BQzFCL0UsT0FBTyxDQUFDK0ksT0FBTyxHQUFHL0ksT0FBTyxDQUFDbUUsS0FBSyxJQUFJQSxLQUFLO01BQ3hDO0lBQ0o7SUFDQSxJQUFJbkUsT0FBTyxDQUFDK0UsSUFBSSxLQUFLLFVBQVUsRUFBRTtNQUM3QixJQUFJNEQsS0FBSyxDQUFDQyxPQUFPLENBQUN6RSxLQUFLLENBQUMsRUFBRTtRQUN0QixJQUFJb0YsVUFBVSxHQUFHLEtBQUs7UUFDdEJwRixLQUFLLENBQUN3RCxPQUFPLENBQUMsVUFBQzZCLEdBQUcsRUFBSztVQUNuQixJQUFJQSxHQUFHLElBQUl4SixPQUFPLENBQUNtRSxLQUFLLEVBQUU7WUFDdEJvRixVQUFVLEdBQUcsSUFBSTtVQUNyQjtRQUNKLENBQUMsQ0FBQztRQUNGdkosT0FBTyxDQUFDK0ksT0FBTyxHQUFHUSxVQUFVO01BQ2hDLENBQUMsTUFDSTtRQUNELElBQUl2SixPQUFPLENBQUM4SSxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7VUFDL0I5SSxPQUFPLENBQUMrSSxPQUFPLEdBQUcvSSxPQUFPLENBQUNtRSxLQUFLLElBQUlBLEtBQUs7UUFDNUMsQ0FBQyxNQUNJO1VBQ0RuRSxPQUFPLENBQUMrSSxPQUFPLEdBQUc1RSxLQUFLO1FBQzNCO01BQ0o7TUFDQTtJQUNKO0VBQ0o7RUFDQSxJQUFJbkUsT0FBTyxZQUFZaUosaUJBQWlCLEVBQUU7SUFDdEMsSUFBTVEsaUJBQWlCLEdBQUcsRUFBRSxDQUFDQyxNQUFNLENBQUN2RixLQUFLLENBQUMsQ0FBQzhELEdBQUcsQ0FBQyxVQUFDOUQsS0FBSyxFQUFLO01BQ3RELE9BQU9BLEtBQUssR0FBRyxFQUFFO0lBQ3JCLENBQUMsQ0FBQztJQUNGd0UsS0FBSyxDQUFDUSxJQUFJLENBQUNuSixPQUFPLENBQUMySixPQUFPLENBQUMsQ0FBQ2hDLE9BQU8sQ0FBQyxVQUFDaUMsTUFBTSxFQUFLO01BQzVDQSxNQUFNLENBQUNDLFFBQVEsR0FBR0osaUJBQWlCLENBQUNLLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDekYsS0FBSyxDQUFDO0lBQzlELENBQUMsQ0FBQztJQUNGO0VBQ0o7RUFDQUEsS0FBSyxHQUFHQSxLQUFLLEtBQUs0RixTQUFTLEdBQUcsRUFBRSxHQUFHNUYsS0FBSztFQUN4Q25FLE9BQU8sQ0FBQ21FLEtBQUssR0FBR0EsS0FBSztBQUN6QjtBQUNBLFNBQVM2RixnQ0FBZ0MsQ0FBQ2hLLE9BQU8sRUFBRTtFQUMvQyxJQUFJLENBQUNBLE9BQU8sQ0FBQ2tELE9BQU8sQ0FBQzZFLEtBQUssRUFBRTtJQUN4QixPQUFPLEVBQUU7RUFDYjtFQUNBLElBQU1qQyxVQUFVLEdBQUdGLGVBQWUsQ0FBQzVGLE9BQU8sQ0FBQ2tELE9BQU8sQ0FBQzZFLEtBQUssQ0FBQztFQUN6RGpDLFVBQVUsQ0FBQzZCLE9BQU8sQ0FBQyxVQUFDc0MsU0FBUyxFQUFLO0lBQzlCLElBQUlBLFNBQVMsQ0FBQ3JELElBQUksQ0FBQ0wsTUFBTSxHQUFHLENBQUMsSUFBSTBELFNBQVMsQ0FBQ3BELEtBQUssQ0FBQ04sTUFBTSxHQUFHLENBQUMsRUFBRTtNQUN6RCxNQUFNLElBQUlDLEtBQUssNEJBQW9CeEcsT0FBTyxDQUFDa0QsT0FBTyxDQUFDNkUsS0FBSywrRUFBMkU7SUFDdkk7SUFDQWtDLFNBQVMsQ0FBQ3hELE1BQU0sR0FBR3FCLGtCQUFrQixDQUFDbUMsU0FBUyxDQUFDeEQsTUFBTSxDQUFDO0VBQzNELENBQUMsQ0FBQztFQUNGLE9BQU9YLFVBQVU7QUFDckI7QUFDQSxTQUFTMEMsNEJBQTRCLENBQUN4SSxPQUFPLEVBQXlCO0VBQUEsSUFBdkJrSyxjQUFjLHVFQUFHLElBQUk7RUFDaEUsSUFBTUMsbUJBQW1CLEdBQUdILGdDQUFnQyxDQUFDaEssT0FBTyxDQUFDO0VBQ3JFLElBQUltSyxtQkFBbUIsQ0FBQzVELE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDaEMsT0FBTzRELG1CQUFtQixDQUFDLENBQUMsQ0FBQztFQUNqQztFQUNBLElBQUluSyxPQUFPLENBQUM0QyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDOUIsSUFBTXdILFdBQVcsR0FBR3BLLE9BQU8sQ0FBQ3FLLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDM0MsSUFBSUQsV0FBVyxJQUFJLE9BQU8sSUFBSUEsV0FBVyxDQUFDbEgsT0FBTyxFQUFFO01BQy9DLElBQU00QyxVQUFVLEdBQUdGLGVBQWUsQ0FBQ3dFLFdBQVcsQ0FBQ2xILE9BQU8sQ0FBQzZFLEtBQUssSUFBSSxHQUFHLENBQUM7TUFDcEUsSUFBTWtDLFNBQVMsR0FBR25FLFVBQVUsQ0FBQyxDQUFDLENBQUM7TUFDL0IsSUFBSW1FLFNBQVMsQ0FBQ3JELElBQUksQ0FBQ0wsTUFBTSxHQUFHLENBQUMsSUFBSTBELFNBQVMsQ0FBQ3BELEtBQUssQ0FBQ04sTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN6RCxNQUFNLElBQUlDLEtBQUssNEJBQW9CNEQsV0FBVyxDQUFDbEgsT0FBTyxDQUFDNkUsS0FBSywrRUFBMkU7TUFDM0k7TUFDQWtDLFNBQVMsQ0FBQ3hELE1BQU0sR0FBR3FCLGtCQUFrQixDQUFDOUgsT0FBTyxDQUFDNEMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO01BQ25FLE9BQU9xSCxTQUFTO0lBQ3BCO0VBQ0o7RUFDQSxJQUFJLENBQUNDLGNBQWMsRUFBRTtJQUNqQixPQUFPLElBQUk7RUFDZjtFQUNBLE1BQU0sSUFBSTFELEtBQUssaURBQXlDOEQsbUJBQW1CLENBQUN0SyxPQUFPLENBQUMsd0hBQThHO0FBQ3RNO0FBQ0EsU0FBU3VLLDZCQUE2QixDQUFDdkssT0FBTyxFQUFFd0ssU0FBUyxFQUFFO0VBQ3ZELElBQUlBLFNBQVMsQ0FBQ3hLLE9BQU8sS0FBS0EsT0FBTyxFQUFFO0lBQy9CLE9BQU8sSUFBSTtFQUNmO0VBQ0EsSUFBSSxDQUFDd0ssU0FBUyxDQUFDeEssT0FBTyxDQUFDeUssUUFBUSxDQUFDekssT0FBTyxDQUFDLEVBQUU7SUFDdEMsT0FBTyxLQUFLO0VBQ2hCO0VBQ0EsSUFBSTBLLG1CQUFtQixHQUFHLEtBQUs7RUFDL0JGLFNBQVMsQ0FBQ0csV0FBVyxFQUFFLENBQUNoRCxPQUFPLENBQUMsVUFBQ2lELGNBQWMsRUFBSztJQUNoRCxJQUFJRixtQkFBbUIsRUFBRTtNQUNyQjtJQUNKO0lBQ0EsSUFBSUUsY0FBYyxDQUFDNUssT0FBTyxLQUFLQSxPQUFPLElBQUk0SyxjQUFjLENBQUM1SyxPQUFPLENBQUN5SyxRQUFRLENBQUN6SyxPQUFPLENBQUMsRUFBRTtNQUNoRjBLLG1CQUFtQixHQUFHLElBQUk7SUFDOUI7RUFDSixDQUFDLENBQUM7RUFDRixPQUFPLENBQUNBLG1CQUFtQjtBQUMvQjtBQUNBLFNBQVNHLGdCQUFnQixDQUFDN0ssT0FBTyxFQUFFO0VBQy9CLElBQU04SyxVQUFVLEdBQUc5SyxPQUFPLENBQUMrSyxTQUFTLENBQUMsSUFBSSxDQUFDO0VBQzFDLElBQUksRUFBRUQsVUFBVSxZQUFZRSxXQUFXLENBQUMsRUFBRTtJQUN0QyxNQUFNLElBQUl4RSxLQUFLLENBQUMseUJBQXlCLENBQUM7RUFDOUM7RUFDQSxPQUFPc0UsVUFBVTtBQUNyQjtBQUNBLFNBQVNHLGFBQWEsQ0FBQ0MsSUFBSSxFQUFFO0VBQ3pCLElBQU1DLFFBQVEsR0FBRzdLLFFBQVEsQ0FBQzhLLGFBQWEsQ0FBQyxVQUFVLENBQUM7RUFDbkRGLElBQUksR0FBR0EsSUFBSSxDQUFDaEUsSUFBSSxFQUFFO0VBQ2xCaUUsUUFBUSxDQUFDRSxTQUFTLEdBQUdILElBQUk7RUFDekIsSUFBSUMsUUFBUSxDQUFDdEYsT0FBTyxDQUFDeUYsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFO0lBQ3hDLE1BQU0sSUFBSTlFLEtBQUssbUNBQTRCMkUsUUFBUSxDQUFDdEYsT0FBTyxDQUFDeUYsaUJBQWlCLG9EQUFpRDtFQUNsSTtFQUNBLElBQU1DLEtBQUssR0FBR0osUUFBUSxDQUFDdEYsT0FBTyxDQUFDMkYsaUJBQWlCO0VBQ2hELElBQUksQ0FBQ0QsS0FBSyxFQUFFO0lBQ1IsTUFBTSxJQUFJL0UsS0FBSyxDQUFDLGlCQUFpQixDQUFDO0VBQ3RDO0VBQ0EsSUFBSSxFQUFFK0UsS0FBSyxZQUFZUCxXQUFXLENBQUMsRUFBRTtJQUNqQyxNQUFNLElBQUl4RSxLQUFLLGtEQUEyQzBFLElBQUksQ0FBQ2hFLElBQUksRUFBRSxFQUFHO0VBQzVFO0VBQ0EsT0FBT3FFLEtBQUs7QUFDaEI7QUFDQSxTQUFTakIsbUJBQW1CLENBQUN0SyxPQUFPLEVBQUU7RUFDbEMsT0FBT0EsT0FBTyxDQUFDcUwsU0FBUyxHQUNsQnJMLE9BQU8sQ0FBQ3lMLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRTFMLE9BQU8sQ0FBQ3lMLFNBQVMsQ0FBQ3pHLE9BQU8sQ0FBQ2hGLE9BQU8sQ0FBQ3FMLFNBQVMsQ0FBQyxDQUFDLEdBQ3hFckwsT0FBTyxDQUFDeUwsU0FBUztBQUMzQjtBQUNBLElBQU01Qyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQXdCLENBQWE3SSxPQUFPLEVBQUUyTCxhQUFhLEVBQUU7RUFDL0QsSUFBTUMsV0FBVyxzQkFBT0QsYUFBYSxDQUFDO0VBQ3RDLElBQU14SCxLQUFLLEdBQUc2RSxVQUFVLENBQUNoSixPQUFPLENBQUM7RUFDakMsSUFBTTZMLEtBQUssR0FBR0YsYUFBYSxDQUFDM0csT0FBTyxDQUFDYixLQUFLLENBQUM7RUFDMUMsSUFBSW5FLE9BQU8sQ0FBQytJLE9BQU8sRUFBRTtJQUNqQixJQUFJOEMsS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO01BQ2RELFdBQVcsQ0FBQ2pGLElBQUksQ0FBQ3hDLEtBQUssQ0FBQztJQUMzQjtJQUNBLE9BQU95SCxXQUFXO0VBQ3RCO0VBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQ1pELFdBQVcsQ0FBQ0UsTUFBTSxDQUFDRCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ2hDO0VBQ0EsT0FBT0QsV0FBVztBQUN0QixDQUFDO0FBQ0QsSUFBTTVDLFVBQVUsR0FBRyxTQUFiQSxVQUFVLENBQWFoSixPQUFPLEVBQUU7RUFDbEMsT0FBT0EsT0FBTyxDQUFDa0QsT0FBTyxDQUFDaUIsS0FBSyxHQUFHbkUsT0FBTyxDQUFDa0QsT0FBTyxDQUFDaUIsS0FBSyxHQUFHbkUsT0FBTyxDQUFDbUUsS0FBSztBQUN4RSxDQUFDO0FBRUQsU0FBUzRILFdBQVcsQ0FBQ3hJLElBQUksRUFBRXlJLFlBQVksRUFBRTtFQUNyQyxxQkFBdUNDLGFBQWEsQ0FBQzFJLElBQUksRUFBRXlJLFlBQVksQ0FBQztJQUFoRUUsZ0JBQWdCLGtCQUFoQkEsZ0JBQWdCO0lBQUVDLFFBQVEsa0JBQVJBLFFBQVE7RUFDbEMsSUFBSUQsZ0JBQWdCLEtBQUtuQyxTQUFTLEVBQUU7SUFDaEMsT0FBT0EsU0FBUztFQUNwQjtFQUNBLE9BQU9tQyxnQkFBZ0IsQ0FBQ0MsUUFBUSxDQUFDO0FBQ3JDO0FBQ0EsSUFBTUYsYUFBYSxHQUFHLFNBQWhCQSxhQUFhLENBQWExSSxJQUFJLEVBQUV5SSxZQUFZLEVBQUU7RUFDaEQsSUFBTUksU0FBUyxHQUFHcEosSUFBSSxDQUFDcUosS0FBSyxDQUFDckosSUFBSSxDQUFDQyxTQUFTLENBQUNNLElBQUksQ0FBQyxDQUFDO0VBQ2xELElBQUkySSxnQkFBZ0IsR0FBR0UsU0FBUztFQUNoQyxJQUFNM0UsS0FBSyxHQUFHdUUsWUFBWSxDQUFDbkUsS0FBSyxDQUFDLEdBQUcsQ0FBQztFQUNyQyxLQUFLLElBQUlQLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0csS0FBSyxDQUFDbEIsTUFBTSxHQUFHLENBQUMsRUFBRWUsQ0FBQyxFQUFFLEVBQUU7SUFDdkM0RSxnQkFBZ0IsR0FBR0EsZ0JBQWdCLENBQUN6RSxLQUFLLENBQUNILENBQUMsQ0FBQyxDQUFDO0VBQ2pEO0VBQ0EsSUFBTTZFLFFBQVEsR0FBRzFFLEtBQUssQ0FBQ0EsS0FBSyxDQUFDbEIsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUN4QyxPQUFPO0lBQ0gyRixnQkFBZ0IsRUFBaEJBLGdCQUFnQjtJQUNoQkUsU0FBUyxFQUFUQSxTQUFTO0lBQ1RELFFBQVEsRUFBUkEsUUFBUTtJQUNSMUUsS0FBSyxFQUFMQTtFQUNKLENBQUM7QUFDTCxDQUFDO0FBQUMsSUFFSTZFLFVBQVU7RUFDWixvQkFBWUMsS0FBSyxFQUFFO0lBQUE7SUFDZixJQUFJLENBQUNBLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZixJQUFJLENBQUNDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ0Msc0JBQXNCLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLElBQUksQ0FBQ0gsS0FBSyxHQUFHQSxLQUFLO0VBQ3RCO0VBQUM7SUFBQTtJQUFBLE9BQ0QsYUFBSXpILElBQUksRUFBRTtNQUNOLElBQU02SCxjQUFjLEdBQUc3RSxrQkFBa0IsQ0FBQ2hELElBQUksQ0FBQztNQUMvQyxJQUFJLElBQUksQ0FBQzBILFVBQVUsQ0FBQ0csY0FBYyxDQUFDLEtBQUs1QyxTQUFTLEVBQUU7UUFDL0MsT0FBTyxJQUFJLENBQUN5QyxVQUFVLENBQUNHLGNBQWMsQ0FBQztNQUMxQztNQUNBLElBQUksSUFBSSxDQUFDRixZQUFZLENBQUNFLGNBQWMsQ0FBQyxLQUFLNUMsU0FBUyxFQUFFO1FBQ2pELE9BQU8sSUFBSSxDQUFDMEMsWUFBWSxDQUFDRSxjQUFjLENBQUM7TUFDNUM7TUFDQSxJQUFJLElBQUksQ0FBQ0osS0FBSyxDQUFDSSxjQUFjLENBQUMsS0FBSzVDLFNBQVMsRUFBRTtRQUMxQyxPQUFPLElBQUksQ0FBQ3dDLEtBQUssQ0FBQ0ksY0FBYyxDQUFDO01BQ3JDO01BQ0EsT0FBT1osV0FBVyxDQUFDLElBQUksQ0FBQ1EsS0FBSyxFQUFFSSxjQUFjLENBQUM7SUFDbEQ7RUFBQztJQUFBO0lBQUEsT0FDRCxhQUFJN0gsSUFBSSxFQUFFO01BQ04sT0FBTyxJQUFJLENBQUM0RCxHQUFHLENBQUM1RCxJQUFJLENBQUMsS0FBS2lGLFNBQVM7SUFDdkM7RUFBQztJQUFBO0lBQUEsT0FDRCxhQUFJakYsSUFBSSxFQUFFWCxLQUFLLEVBQUU7TUFDYixJQUFNd0ksY0FBYyxHQUFHN0Usa0JBQWtCLENBQUNoRCxJQUFJLENBQUM7TUFDL0MsSUFBTThILFlBQVksR0FBRyxJQUFJLENBQUNsRSxHQUFHLENBQUNpRSxjQUFjLENBQUM7TUFDN0MsSUFBSUMsWUFBWSxLQUFLekksS0FBSyxFQUFFO1FBQ3hCLE9BQU8sS0FBSztNQUNoQjtNQUNBLElBQUksQ0FBQ3FJLFVBQVUsQ0FBQ0csY0FBYyxDQUFDLEdBQUd4SSxLQUFLO01BQ3ZDLE9BQU8sSUFBSTtJQUNmO0VBQUM7SUFBQTtJQUFBLE9BQ0QsNEJBQW1CO01BQ2YsT0FBT2dELE1BQU0sQ0FBQzBGLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNOLEtBQUssQ0FBQztJQUN4QztFQUFDO0lBQUE7SUFBQSxPQUNELHlCQUFnQjtNQUNaLE9BQU9wRixNQUFNLENBQUMwRixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDTCxVQUFVLENBQUM7SUFDN0M7RUFBQztJQUFBO0lBQUEsT0FDRCxxQ0FBNEI7TUFDeEIsT0FBT3JGLE1BQU0sQ0FBQzBGLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNILHNCQUFzQixDQUFDO0lBQ3pEO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsb0NBQTJCO01BQ3ZCLElBQUksQ0FBQ0QsWUFBWSxHQUFHdEYsTUFBTSxDQUFDMEYsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ0wsVUFBVSxDQUFDO01BQ3RELElBQUksQ0FBQ0EsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN4QjtFQUFDO0lBQUE7SUFBQSxPQUNELDhCQUFxQkQsS0FBSyxFQUFFO01BQ3hCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO01BQ2xCLElBQUksQ0FBQ0csc0JBQXNCLEdBQUcsQ0FBQyxDQUFDO01BQ2hDLElBQUksQ0FBQ0QsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUMxQjtFQUFDO0lBQUE7SUFBQSxPQUNELHVDQUE4QjtNQUMxQixJQUFJLENBQUNELFVBQVUsR0FBR3JGLE1BQU0sQ0FBQzBGLE1BQU0sQ0FBQzFGLE1BQU0sQ0FBQzBGLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNKLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQ0QsVUFBVSxDQUFDO01BQ3RGLElBQUksQ0FBQ0MsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUMxQjtFQUFDO0lBQUE7SUFBQSxPQUNELGlDQUF3QkYsS0FBSyxFQUFFO01BQzNCLElBQUlPLE9BQU8sR0FBRyxLQUFLO01BQ25CLG1DQUEyQjNGLE1BQU0sQ0FBQzRGLE9BQU8sQ0FBQ1IsS0FBSyxDQUFDLHFDQUFFO1FBQTdDO1VBQU9TLEdBQUc7VUFBRTdJLEtBQUs7UUFDbEIsSUFBTXlJLFlBQVksR0FBRyxJQUFJLENBQUNsRSxHQUFHLENBQUNzRSxHQUFHLENBQUM7UUFDbEMsSUFBSUosWUFBWSxLQUFLekksS0FBSyxFQUFFO1VBQ3hCMkksT0FBTyxHQUFHLElBQUk7UUFDbEI7TUFDSjtNQUNBLElBQUlBLE9BQU8sRUFBRTtRQUNULElBQUksQ0FBQ0osc0JBQXNCLEdBQUdILEtBQUs7TUFDdkM7TUFDQSxPQUFPTyxPQUFPO0lBQ2xCO0VBQUM7RUFBQTtBQUFBO0FBR0wsSUFBSUcsc0JBQXNCLEdBQUcsRUFBRTtBQUUvQixTQUFTQyxVQUFVLENBQUNDLFFBQVEsRUFBRUMsTUFBTSxFQUFFO0VBQ2xDLElBQUlDLFdBQVcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVO0VBQ25DLElBQUlDLElBQUk7RUFDUixJQUFJQyxRQUFRO0VBQ1osSUFBSUMsZ0JBQWdCO0VBQ3BCLElBQUlDLFNBQVM7RUFDYixJQUFJQyxTQUFTOztFQUViO0VBQ0EsSUFBSVAsTUFBTSxDQUFDUSxRQUFRLEtBQUtYLHNCQUFzQixJQUFJRSxRQUFRLENBQUNTLFFBQVEsS0FBS1gsc0JBQXNCLEVBQUU7SUFDOUY7RUFDRjs7RUFFQTtFQUNBLEtBQUssSUFBSTNGLENBQUMsR0FBRytGLFdBQVcsQ0FBQzlHLE1BQU0sR0FBRyxDQUFDLEVBQUVlLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO0lBQzlDaUcsSUFBSSxHQUFHRixXQUFXLENBQUMvRixDQUFDLENBQUM7SUFDckJrRyxRQUFRLEdBQUdELElBQUksQ0FBQ3pJLElBQUk7SUFDcEIySSxnQkFBZ0IsR0FBR0YsSUFBSSxDQUFDTSxZQUFZO0lBQ3BDSCxTQUFTLEdBQUdILElBQUksQ0FBQ3BKLEtBQUs7SUFFdEIsSUFBSXNKLGdCQUFnQixFQUFFO01BQ2xCRCxRQUFRLEdBQUdELElBQUksQ0FBQ08sU0FBUyxJQUFJTixRQUFRO01BQ3JDRyxTQUFTLEdBQUdSLFFBQVEsQ0FBQ1ksY0FBYyxDQUFDTixnQkFBZ0IsRUFBRUQsUUFBUSxDQUFDO01BRS9ELElBQUlHLFNBQVMsS0FBS0QsU0FBUyxFQUFFO1FBQ3pCLElBQUlILElBQUksQ0FBQzlILE1BQU0sS0FBSyxPQUFPLEVBQUM7VUFDeEIrSCxRQUFRLEdBQUdELElBQUksQ0FBQ3pJLElBQUksQ0FBQyxDQUFDO1FBQzFCOztRQUNBcUksUUFBUSxDQUFDYSxjQUFjLENBQUNQLGdCQUFnQixFQUFFRCxRQUFRLEVBQUVFLFNBQVMsQ0FBQztNQUNsRTtJQUNKLENBQUMsTUFBTTtNQUNIQyxTQUFTLEdBQUdSLFFBQVEsQ0FBQ3ZLLFlBQVksQ0FBQzRLLFFBQVEsQ0FBQztNQUUzQyxJQUFJRyxTQUFTLEtBQUtELFNBQVMsRUFBRTtRQUN6QlAsUUFBUSxDQUFDYyxZQUFZLENBQUNULFFBQVEsRUFBRUUsU0FBUyxDQUFDO01BQzlDO0lBQ0o7RUFDSjs7RUFFQTtFQUNBO0VBQ0EsSUFBSVEsYUFBYSxHQUFHZixRQUFRLENBQUNHLFVBQVU7RUFFdkMsS0FBSyxJQUFJYSxDQUFDLEdBQUdELGFBQWEsQ0FBQzNILE1BQU0sR0FBRyxDQUFDLEVBQUU0SCxDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtJQUNoRFosSUFBSSxHQUFHVyxhQUFhLENBQUNDLENBQUMsQ0FBQztJQUN2QlgsUUFBUSxHQUFHRCxJQUFJLENBQUN6SSxJQUFJO0lBQ3BCMkksZ0JBQWdCLEdBQUdGLElBQUksQ0FBQ00sWUFBWTtJQUVwQyxJQUFJSixnQkFBZ0IsRUFBRTtNQUNsQkQsUUFBUSxHQUFHRCxJQUFJLENBQUNPLFNBQVMsSUFBSU4sUUFBUTtNQUVyQyxJQUFJLENBQUNKLE1BQU0sQ0FBQ2dCLGNBQWMsQ0FBQ1gsZ0JBQWdCLEVBQUVELFFBQVEsQ0FBQyxFQUFFO1FBQ3BETCxRQUFRLENBQUNrQixpQkFBaUIsQ0FBQ1osZ0JBQWdCLEVBQUVELFFBQVEsQ0FBQztNQUMxRDtJQUNKLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQ0osTUFBTSxDQUFDdEUsWUFBWSxDQUFDMEUsUUFBUSxDQUFDLEVBQUU7UUFDaENMLFFBQVEsQ0FBQ21CLGVBQWUsQ0FBQ2QsUUFBUSxDQUFDO01BQ3RDO0lBQ0o7RUFDSjtBQUNKO0FBRUEsSUFBSWUsS0FBSyxDQUFDLENBQUM7QUFDWCxJQUFJQyxRQUFRLEdBQUcsOEJBQThCO0FBRTdDLElBQUlDLEdBQUcsR0FBRyxPQUFPbk8sUUFBUSxLQUFLLFdBQVcsR0FBR3lKLFNBQVMsR0FBR3pKLFFBQVE7QUFDaEUsSUFBSW9PLG9CQUFvQixHQUFHLENBQUMsQ0FBQ0QsR0FBRyxJQUFJLFNBQVMsSUFBSUEsR0FBRyxDQUFDckQsYUFBYSxDQUFDLFVBQVUsQ0FBQztBQUM5RSxJQUFJdUQsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDRixHQUFHLElBQUlBLEdBQUcsQ0FBQ0csV0FBVyxJQUFJLDBCQUEwQixJQUFJSCxHQUFHLENBQUNHLFdBQVcsRUFBRTtBQUVuRyxTQUFTQywwQkFBMEIsQ0FBQ0MsR0FBRyxFQUFFO0VBQ3JDLElBQUkzRCxRQUFRLEdBQUdzRCxHQUFHLENBQUNyRCxhQUFhLENBQUMsVUFBVSxDQUFDO0VBQzVDRCxRQUFRLENBQUNFLFNBQVMsR0FBR3lELEdBQUc7RUFDeEIsT0FBTzNELFFBQVEsQ0FBQ3RGLE9BQU8sQ0FBQ2tKLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDekM7QUFFQSxTQUFTQyx1QkFBdUIsQ0FBQ0YsR0FBRyxFQUFFO0VBQ2xDLElBQUksQ0FBQ1AsS0FBSyxFQUFFO0lBQ1JBLEtBQUssR0FBR0UsR0FBRyxDQUFDRyxXQUFXLEVBQUU7SUFDekJMLEtBQUssQ0FBQ1UsVUFBVSxDQUFDUixHQUFHLENBQUMxTCxJQUFJLENBQUM7RUFDOUI7RUFFQSxJQUFJbU0sUUFBUSxHQUFHWCxLQUFLLENBQUNZLHdCQUF3QixDQUFDTCxHQUFHLENBQUM7RUFDbEQsT0FBT0ksUUFBUSxDQUFDSCxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ2pDO0FBRUEsU0FBU0ssc0JBQXNCLENBQUNOLEdBQUcsRUFBRTtFQUNqQyxJQUFJSSxRQUFRLEdBQUdULEdBQUcsQ0FBQ3JELGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDeEM4RCxRQUFRLENBQUM3RCxTQUFTLEdBQUd5RCxHQUFHO0VBQ3hCLE9BQU9JLFFBQVEsQ0FBQ0gsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU00sU0FBUyxDQUFDUCxHQUFHLEVBQUU7RUFDcEJBLEdBQUcsR0FBR0EsR0FBRyxDQUFDNUgsSUFBSSxFQUFFO0VBQ2hCLElBQUl3SCxvQkFBb0IsRUFBRTtJQUN4QjtJQUNBO0lBQ0E7SUFDQSxPQUFPRywwQkFBMEIsQ0FBQ0MsR0FBRyxDQUFDO0VBQ3hDLENBQUMsTUFBTSxJQUFJSCxpQkFBaUIsRUFBRTtJQUM1QixPQUFPSyx1QkFBdUIsQ0FBQ0YsR0FBRyxDQUFDO0VBQ3JDO0VBRUEsT0FBT00sc0JBQXNCLENBQUNOLEdBQUcsQ0FBQztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNRLGdCQUFnQixDQUFDQyxNQUFNLEVBQUVDLElBQUksRUFBRTtFQUNwQyxJQUFJQyxZQUFZLEdBQUdGLE1BQU0sQ0FBQ0csUUFBUTtFQUNsQyxJQUFJQyxVQUFVLEdBQUdILElBQUksQ0FBQ0UsUUFBUTtFQUM5QixJQUFJRSxhQUFhLEVBQUVDLFdBQVc7RUFFOUIsSUFBSUosWUFBWSxLQUFLRSxVQUFVLEVBQUU7SUFDN0IsT0FBTyxJQUFJO0VBQ2Y7RUFFQUMsYUFBYSxHQUFHSCxZQUFZLENBQUNLLFVBQVUsQ0FBQyxDQUFDLENBQUM7RUFDMUNELFdBQVcsR0FBR0YsVUFBVSxDQUFDRyxVQUFVLENBQUMsQ0FBQyxDQUFDOztFQUV0QztFQUNBO0VBQ0E7RUFDQTtFQUNBLElBQUlGLGFBQWEsSUFBSSxFQUFFLElBQUlDLFdBQVcsSUFBSSxFQUFFLEVBQUU7SUFBRTtJQUM1QyxPQUFPSixZQUFZLEtBQUtFLFVBQVUsQ0FBQ0ksV0FBVyxFQUFFO0VBQ3BELENBQUMsTUFBTSxJQUFJRixXQUFXLElBQUksRUFBRSxJQUFJRCxhQUFhLElBQUksRUFBRSxFQUFFO0lBQUU7SUFDbkQsT0FBT0QsVUFBVSxLQUFLRixZQUFZLENBQUNNLFdBQVcsRUFBRTtFQUNwRCxDQUFDLE1BQU07SUFDSCxPQUFPLEtBQUs7RUFDaEI7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxlQUFlLENBQUNsTCxJQUFJLEVBQUUrSSxZQUFZLEVBQUU7RUFDekMsT0FBTyxDQUFDQSxZQUFZLElBQUlBLFlBQVksS0FBS1csUUFBUSxHQUM3Q0MsR0FBRyxDQUFDckQsYUFBYSxDQUFDdEcsSUFBSSxDQUFDLEdBQ3ZCMkosR0FBRyxDQUFDdUIsZUFBZSxDQUFDbkMsWUFBWSxFQUFFL0ksSUFBSSxDQUFDO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVNtTCxZQUFZLENBQUNWLE1BQU0sRUFBRUMsSUFBSSxFQUFFO0VBQ2hDLElBQUlVLFFBQVEsR0FBR1gsTUFBTSxDQUFDWSxVQUFVO0VBQ2hDLE9BQU9ELFFBQVEsRUFBRTtJQUNiLElBQUlFLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxXQUFXO0lBQ3BDYixJQUFJLENBQUNjLFdBQVcsQ0FBQ0osUUFBUSxDQUFDO0lBQzFCQSxRQUFRLEdBQUdFLFNBQVM7RUFDeEI7RUFDQSxPQUFPWixJQUFJO0FBQ2Y7QUFFQSxTQUFTZSxtQkFBbUIsQ0FBQ2hCLE1BQU0sRUFBRUMsSUFBSSxFQUFFMUssSUFBSSxFQUFFO0VBQzdDLElBQUl5SyxNQUFNLENBQUN6SyxJQUFJLENBQUMsS0FBSzBLLElBQUksQ0FBQzFLLElBQUksQ0FBQyxFQUFFO0lBQzdCeUssTUFBTSxDQUFDekssSUFBSSxDQUFDLEdBQUcwSyxJQUFJLENBQUMxSyxJQUFJLENBQUM7SUFDekIsSUFBSXlLLE1BQU0sQ0FBQ3pLLElBQUksQ0FBQyxFQUFFO01BQ2R5SyxNQUFNLENBQUN0QixZQUFZLENBQUNuSixJQUFJLEVBQUUsRUFBRSxDQUFDO0lBQ2pDLENBQUMsTUFBTTtNQUNIeUssTUFBTSxDQUFDakIsZUFBZSxDQUFDeEosSUFBSSxDQUFDO0lBQ2hDO0VBQ0o7QUFDSjtBQUVBLElBQUkwTCxpQkFBaUIsR0FBRztFQUNwQkMsTUFBTSxFQUFFLGdCQUFTbEIsTUFBTSxFQUFFQyxJQUFJLEVBQUU7SUFDM0IsSUFBSWtCLFVBQVUsR0FBR25CLE1BQU0sQ0FBQ21CLFVBQVU7SUFDbEMsSUFBSUEsVUFBVSxFQUFFO01BQ1osSUFBSUMsVUFBVSxHQUFHRCxVQUFVLENBQUNoQixRQUFRLENBQUNLLFdBQVcsRUFBRTtNQUNsRCxJQUFJWSxVQUFVLEtBQUssVUFBVSxFQUFFO1FBQzNCRCxVQUFVLEdBQUdBLFVBQVUsQ0FBQ0EsVUFBVTtRQUNsQ0MsVUFBVSxHQUFHRCxVQUFVLElBQUlBLFVBQVUsQ0FBQ2hCLFFBQVEsQ0FBQ0ssV0FBVyxFQUFFO01BQ2hFO01BQ0EsSUFBSVksVUFBVSxLQUFLLFFBQVEsSUFBSSxDQUFDRCxVQUFVLENBQUM1SCxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDakUsSUFBSXlHLE1BQU0sQ0FBQ3pHLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDMEcsSUFBSSxDQUFDM0YsUUFBUSxFQUFFO1VBQ25EO1VBQ0E7VUFDQTtVQUNBMEYsTUFBTSxDQUFDdEIsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7VUFDM0NzQixNQUFNLENBQUNqQixlQUFlLENBQUMsVUFBVSxDQUFDO1FBQ3RDO1FBQ0E7UUFDQTtRQUNBO1FBQ0FvQyxVQUFVLENBQUNFLGFBQWEsR0FBRyxDQUFDLENBQUM7TUFDakM7SUFDSjtJQUNBTCxtQkFBbUIsQ0FBQ2hCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLFVBQVUsQ0FBQztFQUNqRCxDQUFDO0VBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lxQixLQUFLLEVBQUUsZUFBU3RCLE1BQU0sRUFBRUMsSUFBSSxFQUFFO0lBQzFCZSxtQkFBbUIsQ0FBQ2hCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztJQUM1Q2UsbUJBQW1CLENBQUNoQixNQUFNLEVBQUVDLElBQUksRUFBRSxVQUFVLENBQUM7SUFFN0MsSUFBSUQsTUFBTSxDQUFDcEwsS0FBSyxLQUFLcUwsSUFBSSxDQUFDckwsS0FBSyxFQUFFO01BQzdCb0wsTUFBTSxDQUFDcEwsS0FBSyxHQUFHcUwsSUFBSSxDQUFDckwsS0FBSztJQUM3QjtJQUVBLElBQUksQ0FBQ3FMLElBQUksQ0FBQzFHLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtNQUM3QnlHLE1BQU0sQ0FBQ2pCLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUFDbkM7RUFDSixDQUFDO0VBRUR3QyxRQUFRLEVBQUUsa0JBQVN2QixNQUFNLEVBQUVDLElBQUksRUFBRTtJQUM3QixJQUFJdUIsUUFBUSxHQUFHdkIsSUFBSSxDQUFDckwsS0FBSztJQUN6QixJQUFJb0wsTUFBTSxDQUFDcEwsS0FBSyxLQUFLNE0sUUFBUSxFQUFFO01BQzNCeEIsTUFBTSxDQUFDcEwsS0FBSyxHQUFHNE0sUUFBUTtJQUMzQjtJQUVBLElBQUlaLFVBQVUsR0FBR1osTUFBTSxDQUFDWSxVQUFVO0lBQ2xDLElBQUlBLFVBQVUsRUFBRTtNQUNaO01BQ0E7TUFDQSxJQUFJYSxRQUFRLEdBQUdiLFVBQVUsQ0FBQ2MsU0FBUztNQUVuQyxJQUFJRCxRQUFRLElBQUlELFFBQVEsSUFBSyxDQUFDQSxRQUFRLElBQUlDLFFBQVEsSUFBSXpCLE1BQU0sQ0FBQzJCLFdBQVksRUFBRTtRQUN2RTtNQUNKO01BRUFmLFVBQVUsQ0FBQ2MsU0FBUyxHQUFHRixRQUFRO0lBQ25DO0VBQ0osQ0FBQztFQUNESSxNQUFNLEVBQUUsZ0JBQVM1QixNQUFNLEVBQUVDLElBQUksRUFBRTtJQUMzQixJQUFJLENBQUNBLElBQUksQ0FBQzFHLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUNoQyxJQUFJOEgsYUFBYSxHQUFHLENBQUMsQ0FBQztNQUN0QixJQUFJdEosQ0FBQyxHQUFHLENBQUM7TUFDVDtNQUNBO01BQ0E7TUFDQTtNQUNBLElBQUk0SSxRQUFRLEdBQUdYLE1BQU0sQ0FBQ1ksVUFBVTtNQUNoQyxJQUFJaUIsUUFBUTtNQUNaLElBQUkxQixRQUFRO01BQ1osT0FBTVEsUUFBUSxFQUFFO1FBQ1pSLFFBQVEsR0FBR1EsUUFBUSxDQUFDUixRQUFRLElBQUlRLFFBQVEsQ0FBQ1IsUUFBUSxDQUFDSyxXQUFXLEVBQUU7UUFDL0QsSUFBSUwsUUFBUSxLQUFLLFVBQVUsRUFBRTtVQUN6QjBCLFFBQVEsR0FBR2xCLFFBQVE7VUFDbkJBLFFBQVEsR0FBR2tCLFFBQVEsQ0FBQ2pCLFVBQVU7UUFDbEMsQ0FBQyxNQUFNO1VBQ0gsSUFBSVQsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUN2QixJQUFJUSxRQUFRLENBQUNwSCxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUU7Y0FDbkM4SCxhQUFhLEdBQUd0SixDQUFDO2NBQ2pCO1lBQ0o7WUFDQUEsQ0FBQyxFQUFFO1VBQ1A7VUFDQTRJLFFBQVEsR0FBR0EsUUFBUSxDQUFDRyxXQUFXO1VBQy9CLElBQUksQ0FBQ0gsUUFBUSxJQUFJa0IsUUFBUSxFQUFFO1lBQ3ZCbEIsUUFBUSxHQUFHa0IsUUFBUSxDQUFDZixXQUFXO1lBQy9CZSxRQUFRLEdBQUcsSUFBSTtVQUNuQjtRQUNKO01BQ0o7TUFFQTdCLE1BQU0sQ0FBQ3FCLGFBQWEsR0FBR0EsYUFBYTtJQUN4QztFQUNKO0FBQ0osQ0FBQztBQUVELElBQUlTLFlBQVksR0FBRyxDQUFDO0FBQ3BCLElBQUlDLHdCQUF3QixHQUFHLEVBQUU7QUFDakMsSUFBSUMsU0FBUyxHQUFHLENBQUM7QUFDakIsSUFBSUMsWUFBWSxHQUFHLENBQUM7QUFFcEIsU0FBU0MsSUFBSSxHQUFHLENBQUM7QUFFakIsU0FBU0MsaUJBQWlCLENBQUNDLElBQUksRUFBRTtFQUMvQixJQUFJQSxJQUFJLEVBQUU7SUFDUixPQUFRQSxJQUFJLENBQUMvTyxZQUFZLElBQUkrTyxJQUFJLENBQUMvTyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUsrTyxJQUFJLENBQUNDLEVBQUU7RUFDbEU7QUFDRjtBQUVBLFNBQVNDLGVBQWUsQ0FBQzNFLFVBQVUsRUFBRTtFQUVuQyxPQUFPLFNBQVM0RSxRQUFRLENBQUMzRSxRQUFRLEVBQUVDLE1BQU0sRUFBRXpELE9BQU8sRUFBRTtJQUNsRCxJQUFJLENBQUNBLE9BQU8sRUFBRTtNQUNaQSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2Q7SUFFQSxJQUFJLE9BQU95RCxNQUFNLEtBQUssUUFBUSxFQUFFO01BQzlCLElBQUlELFFBQVEsQ0FBQ3VDLFFBQVEsS0FBSyxXQUFXLElBQUl2QyxRQUFRLENBQUN1QyxRQUFRLEtBQUssTUFBTSxJQUFJdkMsUUFBUSxDQUFDdUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtRQUNyRyxJQUFJcUMsVUFBVSxHQUFHM0UsTUFBTTtRQUN2QkEsTUFBTSxHQUFHcUIsR0FBRyxDQUFDckQsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNsQ2dDLE1BQU0sQ0FBQy9CLFNBQVMsR0FBRzBHLFVBQVU7TUFDL0IsQ0FBQyxNQUFNO1FBQ0wzRSxNQUFNLEdBQUdpQyxTQUFTLENBQUNqQyxNQUFNLENBQUM7TUFDNUI7SUFDRixDQUFDLE1BQU0sSUFBSUEsTUFBTSxDQUFDUSxRQUFRLEtBQUswRCx3QkFBd0IsRUFBRTtNQUN2RGxFLE1BQU0sR0FBR0EsTUFBTSxDQUFDNUIsaUJBQWlCO0lBQ25DO0lBRUEsSUFBSXdHLFVBQVUsR0FBR3JJLE9BQU8sQ0FBQ3FJLFVBQVUsSUFBSU4saUJBQWlCO0lBQ3hELElBQUlPLGlCQUFpQixHQUFHdEksT0FBTyxDQUFDc0ksaUJBQWlCLElBQUlSLElBQUk7SUFDekQsSUFBSVMsV0FBVyxHQUFHdkksT0FBTyxDQUFDdUksV0FBVyxJQUFJVCxJQUFJO0lBQzdDLElBQUlVLGlCQUFpQixHQUFHeEksT0FBTyxDQUFDd0ksaUJBQWlCLElBQUlWLElBQUk7SUFDekQsSUFBSVcsV0FBVyxHQUFHekksT0FBTyxDQUFDeUksV0FBVyxJQUFJWCxJQUFJO0lBQzdDLElBQUlZLHFCQUFxQixHQUFHMUksT0FBTyxDQUFDMEkscUJBQXFCLElBQUlaLElBQUk7SUFDakUsSUFBSWEsZUFBZSxHQUFHM0ksT0FBTyxDQUFDMkksZUFBZSxJQUFJYixJQUFJO0lBQ3JELElBQUljLHlCQUF5QixHQUFHNUksT0FBTyxDQUFDNEkseUJBQXlCLElBQUlkLElBQUk7SUFDekUsSUFBSWUsZ0JBQWdCLEdBQUc3SSxPQUFPLENBQUM2SSxnQkFBZ0IsSUFBSWYsSUFBSTtJQUN2RCxJQUFJZ0IsUUFBUSxHQUFHOUksT0FBTyxDQUFDOEksUUFBUSxJQUFJLFVBQVNDLE1BQU0sRUFBRW5ILEtBQUssRUFBQztNQUFFLE9BQU9tSCxNQUFNLENBQUNwQyxXQUFXLENBQUMvRSxLQUFLLENBQUM7SUFBRSxDQUFDO0lBQy9GLElBQUlvSCxZQUFZLEdBQUdoSixPQUFPLENBQUNnSixZQUFZLEtBQUssSUFBSTs7SUFFaEQ7SUFDQSxJQUFJQyxlQUFlLEdBQUd6TCxNQUFNLENBQUMwTCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3pDLElBQUlDLGdCQUFnQixHQUFHLEVBQUU7SUFFekIsU0FBU0MsZUFBZSxDQUFDL0YsR0FBRyxFQUFFO01BQzVCOEYsZ0JBQWdCLENBQUNuTSxJQUFJLENBQUNxRyxHQUFHLENBQUM7SUFDNUI7SUFFQSxTQUFTZ0csdUJBQXVCLENBQUNyQixJQUFJLEVBQUVzQixjQUFjLEVBQUU7TUFDckQsSUFBSXRCLElBQUksQ0FBQy9ELFFBQVEsS0FBS3lELFlBQVksRUFBRTtRQUNsQyxJQUFJbkIsUUFBUSxHQUFHeUIsSUFBSSxDQUFDeEIsVUFBVTtRQUM5QixPQUFPRCxRQUFRLEVBQUU7VUFFZixJQUFJbEQsR0FBRyxHQUFHakQsU0FBUztVQUVuQixJQUFJa0osY0FBYyxLQUFLakcsR0FBRyxHQUFHZ0YsVUFBVSxDQUFDOUIsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUNsRDtZQUNBO1lBQ0E2QyxlQUFlLENBQUMvRixHQUFHLENBQUM7VUFDdEIsQ0FBQyxNQUFNO1lBQ0w7WUFDQTtZQUNBO1lBQ0FzRixlQUFlLENBQUNwQyxRQUFRLENBQUM7WUFDekIsSUFBSUEsUUFBUSxDQUFDQyxVQUFVLEVBQUU7Y0FDdkI2Qyx1QkFBdUIsQ0FBQzlDLFFBQVEsRUFBRStDLGNBQWMsQ0FBQztZQUNuRDtVQUNGO1VBRUEvQyxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0csV0FBVztRQUNqQztNQUNGO0lBQ0Y7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNJLFNBQVM2QyxVQUFVLENBQUN2QixJQUFJLEVBQUVqQixVQUFVLEVBQUV1QyxjQUFjLEVBQUU7TUFDcEQsSUFBSVoscUJBQXFCLENBQUNWLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRTtRQUN6QztNQUNGO01BRUEsSUFBSWpCLFVBQVUsRUFBRTtRQUNkQSxVQUFVLENBQUN5QyxXQUFXLENBQUN4QixJQUFJLENBQUM7TUFDOUI7TUFFQVcsZUFBZSxDQUFDWCxJQUFJLENBQUM7TUFDckJxQix1QkFBdUIsQ0FBQ3JCLElBQUksRUFBRXNCLGNBQWMsQ0FBQztJQUMvQzs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQSxTQUFTRyxTQUFTLENBQUN6QixJQUFJLEVBQUU7TUFDdkIsSUFBSUEsSUFBSSxDQUFDL0QsUUFBUSxLQUFLeUQsWUFBWSxJQUFJTSxJQUFJLENBQUMvRCxRQUFRLEtBQUswRCx3QkFBd0IsRUFBRTtRQUNoRixJQUFJcEIsUUFBUSxHQUFHeUIsSUFBSSxDQUFDeEIsVUFBVTtRQUM5QixPQUFPRCxRQUFRLEVBQUU7VUFDZixJQUFJbEQsR0FBRyxHQUFHZ0YsVUFBVSxDQUFDOUIsUUFBUSxDQUFDO1VBQzlCLElBQUlsRCxHQUFHLEVBQUU7WUFDUDRGLGVBQWUsQ0FBQzVGLEdBQUcsQ0FBQyxHQUFHa0QsUUFBUTtVQUNqQzs7VUFFQTtVQUNBa0QsU0FBUyxDQUFDbEQsUUFBUSxDQUFDO1VBRW5CQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0csV0FBVztRQUNqQztNQUNGO0lBQ0Y7SUFFQStDLFNBQVMsQ0FBQ2pHLFFBQVEsQ0FBQztJQUVuQixTQUFTa0csZUFBZSxDQUFDaEssRUFBRSxFQUFFO01BQzNCNkksV0FBVyxDQUFDN0ksRUFBRSxDQUFDO01BRWYsSUFBSTZHLFFBQVEsR0FBRzdHLEVBQUUsQ0FBQzhHLFVBQVU7TUFDNUIsT0FBT0QsUUFBUSxFQUFFO1FBQ2YsSUFBSUcsV0FBVyxHQUFHSCxRQUFRLENBQUNHLFdBQVc7UUFFdEMsSUFBSXJELEdBQUcsR0FBR2dGLFVBQVUsQ0FBQzlCLFFBQVEsQ0FBQztRQUM5QixJQUFJbEQsR0FBRyxFQUFFO1VBQ1AsSUFBSXNHLGVBQWUsR0FBR1YsZUFBZSxDQUFDNUYsR0FBRyxDQUFDO1VBQzFDO1VBQ0E7VUFDQSxJQUFJc0csZUFBZSxJQUFJaEUsZ0JBQWdCLENBQUNZLFFBQVEsRUFBRW9ELGVBQWUsQ0FBQyxFQUFFO1lBQ2xFcEQsUUFBUSxDQUFDUSxVQUFVLENBQUM2QyxZQUFZLENBQUNELGVBQWUsRUFBRXBELFFBQVEsQ0FBQztZQUMzRHNELE9BQU8sQ0FBQ0YsZUFBZSxFQUFFcEQsUUFBUSxDQUFDO1VBQ3BDLENBQUMsTUFBTTtZQUNMbUQsZUFBZSxDQUFDbkQsUUFBUSxDQUFDO1VBQzNCO1FBQ0YsQ0FBQyxNQUFNO1VBQ0w7VUFDQTtVQUNBbUQsZUFBZSxDQUFDbkQsUUFBUSxDQUFDO1FBQzNCO1FBRUFBLFFBQVEsR0FBR0csV0FBVztNQUN4QjtJQUNGO0lBRUEsU0FBU29ELGFBQWEsQ0FBQ2xFLE1BQU0sRUFBRW1FLGdCQUFnQixFQUFFQyxjQUFjLEVBQUU7TUFDL0Q7TUFDQTtNQUNBO01BQ0EsT0FBT0QsZ0JBQWdCLEVBQUU7UUFDdkIsSUFBSUUsZUFBZSxHQUFHRixnQkFBZ0IsQ0FBQ3JELFdBQVc7UUFDbEQsSUFBS3NELGNBQWMsR0FBRzNCLFVBQVUsQ0FBQzBCLGdCQUFnQixDQUFDLEVBQUc7VUFDbkQ7VUFDQTtVQUNBWCxlQUFlLENBQUNZLGNBQWMsQ0FBQztRQUNqQyxDQUFDLE1BQU07VUFDTDtVQUNBO1VBQ0FULFVBQVUsQ0FBQ1EsZ0JBQWdCLEVBQUVuRSxNQUFNLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtRQUNuRTs7UUFDQW1FLGdCQUFnQixHQUFHRSxlQUFlO01BQ3BDO0lBQ0Y7SUFFQSxTQUFTSixPQUFPLENBQUNqRSxNQUFNLEVBQUVDLElBQUksRUFBRW1ELFlBQVksRUFBRTtNQUMzQyxJQUFJa0IsT0FBTyxHQUFHN0IsVUFBVSxDQUFDeEMsSUFBSSxDQUFDO01BRTlCLElBQUlxRSxPQUFPLEVBQUU7UUFDWDtRQUNBO1FBQ0EsT0FBT2pCLGVBQWUsQ0FBQ2lCLE9BQU8sQ0FBQztNQUNqQztNQUVBLElBQUksQ0FBQ2xCLFlBQVksRUFBRTtRQUNqQjtRQUNBLElBQUlSLGlCQUFpQixDQUFDNUMsTUFBTSxFQUFFQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUU7VUFDN0M7UUFDRjs7UUFFQTtRQUNBdEMsVUFBVSxDQUFDcUMsTUFBTSxFQUFFQyxJQUFJLENBQUM7UUFDeEI7UUFDQTRDLFdBQVcsQ0FBQzdDLE1BQU0sQ0FBQztRQUVuQixJQUFJZ0QseUJBQXlCLENBQUNoRCxNQUFNLEVBQUVDLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRTtVQUNyRDtRQUNGO01BQ0Y7TUFFQSxJQUFJRCxNQUFNLENBQUNHLFFBQVEsS0FBSyxVQUFVLEVBQUU7UUFDbENvRSxhQUFhLENBQUN2RSxNQUFNLEVBQUVDLElBQUksQ0FBQztNQUM3QixDQUFDLE1BQU07UUFDTGdCLGlCQUFpQixDQUFDTSxRQUFRLENBQUN2QixNQUFNLEVBQUVDLElBQUksQ0FBQztNQUMxQztJQUNGO0lBRUEsU0FBU3NFLGFBQWEsQ0FBQ3ZFLE1BQU0sRUFBRUMsSUFBSSxFQUFFO01BQ25DLElBQUl1RSxRQUFRLEdBQUd2QixnQkFBZ0IsQ0FBQ2pELE1BQU0sQ0FBQztNQUN2QyxJQUFJeUUsY0FBYyxHQUFHeEUsSUFBSSxDQUFDVyxVQUFVO01BQ3BDLElBQUl1RCxnQkFBZ0IsR0FBR25FLE1BQU0sQ0FBQ1ksVUFBVTtNQUN4QyxJQUFJOEQsWUFBWTtNQUNoQixJQUFJTixjQUFjO01BRWxCLElBQUlDLGVBQWU7TUFDbkIsSUFBSU0sYUFBYTtNQUNqQixJQUFJQyxjQUFjOztNQUVsQjtNQUNBQyxLQUFLLEVBQUUsT0FBT0osY0FBYyxFQUFFO1FBQzVCRSxhQUFhLEdBQUdGLGNBQWMsQ0FBQzNELFdBQVc7UUFDMUM0RCxZQUFZLEdBQUdqQyxVQUFVLENBQUNnQyxjQUFjLENBQUM7O1FBRXpDO1FBQ0EsT0FBTyxDQUFDRCxRQUFRLElBQUlMLGdCQUFnQixFQUFFO1VBQ3BDRSxlQUFlLEdBQUdGLGdCQUFnQixDQUFDckQsV0FBVztVQUU5QyxJQUFJMkQsY0FBYyxDQUFDSyxVQUFVLElBQUlMLGNBQWMsQ0FBQ0ssVUFBVSxDQUFDWCxnQkFBZ0IsQ0FBQyxFQUFFO1lBQzVFTSxjQUFjLEdBQUdFLGFBQWE7WUFDOUJSLGdCQUFnQixHQUFHRSxlQUFlO1lBQ2xDLFNBQVNRLEtBQUs7VUFDaEI7VUFFQVQsY0FBYyxHQUFHM0IsVUFBVSxDQUFDMEIsZ0JBQWdCLENBQUM7VUFFN0MsSUFBSVksZUFBZSxHQUFHWixnQkFBZ0IsQ0FBQzlGLFFBQVE7O1VBRS9DO1VBQ0EsSUFBSTJHLFlBQVksR0FBR3hLLFNBQVM7VUFFNUIsSUFBSXVLLGVBQWUsS0FBS04sY0FBYyxDQUFDcEcsUUFBUSxFQUFFO1lBQy9DLElBQUkwRyxlQUFlLEtBQUtqRCxZQUFZLEVBQUU7Y0FDcEM7O2NBRUEsSUFBSTRDLFlBQVksRUFBRTtnQkFDaEI7Z0JBQ0E7Z0JBQ0EsSUFBSUEsWUFBWSxLQUFLTixjQUFjLEVBQUU7a0JBQ25DO2tCQUNBO2tCQUNBO2tCQUNBLElBQUtRLGNBQWMsR0FBR3ZCLGVBQWUsQ0FBQ3FCLFlBQVksQ0FBQyxFQUFHO29CQUNwRCxJQUFJTCxlQUFlLEtBQUtPLGNBQWMsRUFBRTtzQkFDdEM7c0JBQ0E7c0JBQ0E7c0JBQ0E7c0JBQ0E7c0JBQ0FJLFlBQVksR0FBRyxLQUFLO29CQUN0QixDQUFDLE1BQU07c0JBQ0w7c0JBQ0E7c0JBQ0E7O3NCQUVBO3NCQUNBO3NCQUNBO3NCQUNBaEYsTUFBTSxDQUFDaUYsWUFBWSxDQUFDTCxjQUFjLEVBQUVULGdCQUFnQixDQUFDOztzQkFFckQ7O3NCQUVBLElBQUlDLGNBQWMsRUFBRTt3QkFDbEI7d0JBQ0E7d0JBQ0FaLGVBQWUsQ0FBQ1ksY0FBYyxDQUFDO3NCQUNqQyxDQUFDLE1BQU07d0JBQ0w7d0JBQ0E7d0JBQ0FULFVBQVUsQ0FBQ1EsZ0JBQWdCLEVBQUVuRSxNQUFNLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtzQkFDbkU7O3NCQUVBbUUsZ0JBQWdCLEdBQUdTLGNBQWM7b0JBQ25DO2tCQUNGLENBQUMsTUFBTTtvQkFDTDtvQkFDQTtvQkFDQUksWUFBWSxHQUFHLEtBQUs7a0JBQ3RCO2dCQUNGO2NBQ0YsQ0FBQyxNQUFNLElBQUlaLGNBQWMsRUFBRTtnQkFDekI7Z0JBQ0FZLFlBQVksR0FBRyxLQUFLO2NBQ3RCO2NBRUFBLFlBQVksR0FBR0EsWUFBWSxLQUFLLEtBQUssSUFBSWpGLGdCQUFnQixDQUFDb0UsZ0JBQWdCLEVBQUVNLGNBQWMsQ0FBQztjQUMzRixJQUFJTyxZQUFZLEVBQUU7Z0JBQ2hCO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBZixPQUFPLENBQUNFLGdCQUFnQixFQUFFTSxjQUFjLENBQUM7Y0FDM0M7WUFFRixDQUFDLE1BQU0sSUFBSU0sZUFBZSxLQUFLL0MsU0FBUyxJQUFJK0MsZUFBZSxJQUFJOUMsWUFBWSxFQUFFO2NBQzNFO2NBQ0ErQyxZQUFZLEdBQUcsSUFBSTtjQUNuQjtjQUNBO2NBQ0EsSUFBSWIsZ0JBQWdCLENBQUN6QyxTQUFTLEtBQUsrQyxjQUFjLENBQUMvQyxTQUFTLEVBQUU7Z0JBQzNEeUMsZ0JBQWdCLENBQUN6QyxTQUFTLEdBQUcrQyxjQUFjLENBQUMvQyxTQUFTO2NBQ3ZEO1lBRUY7VUFDRjtVQUVBLElBQUlzRCxZQUFZLEVBQUU7WUFDaEI7WUFDQTtZQUNBUCxjQUFjLEdBQUdFLGFBQWE7WUFDOUJSLGdCQUFnQixHQUFHRSxlQUFlO1lBQ2xDLFNBQVNRLEtBQUs7VUFDaEI7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsSUFBSVQsY0FBYyxFQUFFO1lBQ2xCO1lBQ0E7WUFDQVosZUFBZSxDQUFDWSxjQUFjLENBQUM7VUFDakMsQ0FBQyxNQUFNO1lBQ0w7WUFDQTtZQUNBVCxVQUFVLENBQUNRLGdCQUFnQixFQUFFbkUsTUFBTSxFQUFFLElBQUksQ0FBQyx1QkFBdUI7VUFDbkU7O1VBRUFtRSxnQkFBZ0IsR0FBR0UsZUFBZTtRQUNwQyxDQUFDLENBQUM7O1FBRUY7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJSyxZQUFZLEtBQUtFLGNBQWMsR0FBR3ZCLGVBQWUsQ0FBQ3FCLFlBQVksQ0FBQyxDQUFDLElBQUkzRSxnQkFBZ0IsQ0FBQzZFLGNBQWMsRUFBRUgsY0FBYyxDQUFDLEVBQUU7VUFDeEg7VUFDQSxJQUFHLENBQUNELFFBQVEsRUFBQztZQUFFdEIsUUFBUSxDQUFDbEQsTUFBTSxFQUFFNEUsY0FBYyxDQUFDO1VBQUU7VUFDakRYLE9BQU8sQ0FBQ1csY0FBYyxFQUFFSCxjQUFjLENBQUM7UUFDekMsQ0FBQyxNQUFNO1VBQ0wsSUFBSVMsdUJBQXVCLEdBQUd4QyxpQkFBaUIsQ0FBQytCLGNBQWMsQ0FBQztVQUMvRCxJQUFJUyx1QkFBdUIsS0FBSyxLQUFLLEVBQUU7WUFDckMsSUFBSUEsdUJBQXVCLEVBQUU7Y0FDM0JULGNBQWMsR0FBR1MsdUJBQXVCO1lBQzFDO1lBRUEsSUFBSVQsY0FBYyxDQUFDVSxTQUFTLEVBQUU7Y0FDNUJWLGNBQWMsR0FBR0EsY0FBYyxDQUFDVSxTQUFTLENBQUNuRixNQUFNLENBQUNvRixhQUFhLElBQUlsRyxHQUFHLENBQUM7WUFDeEU7WUFDQWdFLFFBQVEsQ0FBQ2xELE1BQU0sRUFBRXlFLGNBQWMsQ0FBQztZQUNoQ1gsZUFBZSxDQUFDVyxjQUFjLENBQUM7VUFDakM7UUFDRjtRQUVBQSxjQUFjLEdBQUdFLGFBQWE7UUFDOUJSLGdCQUFnQixHQUFHRSxlQUFlO01BQ3BDO01BRUFILGFBQWEsQ0FBQ2xFLE1BQU0sRUFBRW1FLGdCQUFnQixFQUFFQyxjQUFjLENBQUM7TUFFdkQsSUFBSWlCLGdCQUFnQixHQUFHcEUsaUJBQWlCLENBQUNqQixNQUFNLENBQUNHLFFBQVEsQ0FBQztNQUN6RCxJQUFJa0YsZ0JBQWdCLEVBQUU7UUFDcEJBLGdCQUFnQixDQUFDckYsTUFBTSxFQUFFQyxJQUFJLENBQUM7TUFDaEM7SUFDRixDQUFDLENBQUM7O0lBRUYsSUFBSXFGLFdBQVcsR0FBRzFILFFBQVE7SUFDMUIsSUFBSTJILGVBQWUsR0FBR0QsV0FBVyxDQUFDakgsUUFBUTtJQUMxQyxJQUFJbUgsVUFBVSxHQUFHM0gsTUFBTSxDQUFDUSxRQUFRO0lBRWhDLElBQUksQ0FBQytFLFlBQVksRUFBRTtNQUNqQjtNQUNBO01BQ0EsSUFBSW1DLGVBQWUsS0FBS3pELFlBQVksRUFBRTtRQUNwQyxJQUFJMEQsVUFBVSxLQUFLMUQsWUFBWSxFQUFFO1VBQy9CLElBQUksQ0FBQy9CLGdCQUFnQixDQUFDbkMsUUFBUSxFQUFFQyxNQUFNLENBQUMsRUFBRTtZQUN2Q2tGLGVBQWUsQ0FBQ25GLFFBQVEsQ0FBQztZQUN6QjBILFdBQVcsR0FBRzVFLFlBQVksQ0FBQzlDLFFBQVEsRUFBRTZDLGVBQWUsQ0FBQzVDLE1BQU0sQ0FBQ3NDLFFBQVEsRUFBRXRDLE1BQU0sQ0FBQ1MsWUFBWSxDQUFDLENBQUM7VUFDN0Y7UUFDRixDQUFDLE1BQU07VUFDTDtVQUNBZ0gsV0FBVyxHQUFHekgsTUFBTTtRQUN0QjtNQUNGLENBQUMsTUFBTSxJQUFJMEgsZUFBZSxLQUFLdkQsU0FBUyxJQUFJdUQsZUFBZSxLQUFLdEQsWUFBWSxFQUFFO1FBQUU7UUFDOUUsSUFBSXVELFVBQVUsS0FBS0QsZUFBZSxFQUFFO1VBQ2xDLElBQUlELFdBQVcsQ0FBQzVELFNBQVMsS0FBSzdELE1BQU0sQ0FBQzZELFNBQVMsRUFBRTtZQUM5QzRELFdBQVcsQ0FBQzVELFNBQVMsR0FBRzdELE1BQU0sQ0FBQzZELFNBQVM7VUFDMUM7VUFFQSxPQUFPNEQsV0FBVztRQUNwQixDQUFDLE1BQU07VUFDTDtVQUNBQSxXQUFXLEdBQUd6SCxNQUFNO1FBQ3RCO01BQ0Y7SUFDRjtJQUVBLElBQUl5SCxXQUFXLEtBQUt6SCxNQUFNLEVBQUU7TUFDMUI7TUFDQTtNQUNBa0YsZUFBZSxDQUFDbkYsUUFBUSxDQUFDO0lBQzNCLENBQUMsTUFBTTtNQUNMLElBQUlDLE1BQU0sQ0FBQ2lILFVBQVUsSUFBSWpILE1BQU0sQ0FBQ2lILFVBQVUsQ0FBQ1EsV0FBVyxDQUFDLEVBQUU7UUFDdkQ7TUFDRjtNQUVBckIsT0FBTyxDQUFDcUIsV0FBVyxFQUFFekgsTUFBTSxFQUFFdUYsWUFBWSxDQUFDOztNQUUxQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0EsSUFBSUcsZ0JBQWdCLEVBQUU7UUFDcEIsS0FBSyxJQUFJeEwsQ0FBQyxHQUFDLENBQUMsRUFBRTBOLEdBQUcsR0FBQ2xDLGdCQUFnQixDQUFDdk0sTUFBTSxFQUFFZSxDQUFDLEdBQUMwTixHQUFHLEVBQUUxTixDQUFDLEVBQUUsRUFBRTtVQUNyRCxJQUFJMk4sVUFBVSxHQUFHckMsZUFBZSxDQUFDRSxnQkFBZ0IsQ0FBQ3hMLENBQUMsQ0FBQyxDQUFDO1VBQ3JELElBQUkyTixVQUFVLEVBQUU7WUFDZC9CLFVBQVUsQ0FBQytCLFVBQVUsRUFBRUEsVUFBVSxDQUFDdkUsVUFBVSxFQUFFLEtBQUssQ0FBQztVQUN0RDtRQUNGO01BQ0Y7SUFDRjtJQUVBLElBQUksQ0FBQ2lDLFlBQVksSUFBSWtDLFdBQVcsS0FBSzFILFFBQVEsSUFBSUEsUUFBUSxDQUFDdUQsVUFBVSxFQUFFO01BQ3BFLElBQUltRSxXQUFXLENBQUNILFNBQVMsRUFBRTtRQUN6QkcsV0FBVyxHQUFHQSxXQUFXLENBQUNILFNBQVMsQ0FBQ3ZILFFBQVEsQ0FBQ3dILGFBQWEsSUFBSWxHLEdBQUcsQ0FBQztNQUNwRTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQXRCLFFBQVEsQ0FBQ3VELFVBQVUsQ0FBQzZDLFlBQVksQ0FBQ3NCLFdBQVcsRUFBRTFILFFBQVEsQ0FBQztJQUN6RDtJQUVBLE9BQU8wSCxXQUFXO0VBQ3BCLENBQUM7QUFDSDtBQUVBLElBQUkvQyxRQUFRLEdBQUdELGVBQWUsQ0FBQzNFLFVBQVUsQ0FBQztBQUUxQyxTQUFTZ0ksZ0NBQWdDLENBQUNsVixPQUFPLEVBQUU7RUFDL0MsSUFBTW1WLFdBQVcsR0FBR25WLE9BQU8sWUFBWXNJLGdCQUFnQixJQUFJdEksT0FBTyxDQUFDK0UsSUFBSSxLQUFLLE1BQU07RUFDbEYsSUFBSSxDQUFDb1EsV0FBVyxFQUFFO0lBQ2QsSUFBSSxPQUFPLElBQUluVixPQUFPLEVBQUU7TUFDcEJBLE9BQU8sQ0FBQ2lPLFlBQVksQ0FBQyxPQUFPLEVBQUVqTyxPQUFPLENBQUNtRSxLQUFLLENBQUM7SUFDaEQsQ0FBQyxNQUNJLElBQUluRSxPQUFPLENBQUM4SSxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7TUFDcEM5SSxPQUFPLENBQUNpTyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztJQUNyQztFQUNKO0VBQ0F0RixLQUFLLENBQUNRLElBQUksQ0FBQ25KLE9BQU8sQ0FBQ29WLFFBQVEsQ0FBQyxDQUFDek4sT0FBTyxDQUFDLFVBQUM0RCxLQUFLLEVBQUs7SUFDNUMySixnQ0FBZ0MsQ0FBQzNKLEtBQUssQ0FBQztFQUMzQyxDQUFDLENBQUM7QUFDTjtBQUVBLFNBQVM4SixlQUFlLENBQUNDLGVBQWUsRUFBRUMsYUFBYSxFQUFFQyxxQkFBcUIsRUFBRUMsZUFBZSxFQUFFQyxlQUFlLEVBQUVDLGtCQUFrQixFQUFFQyxpQkFBaUIsRUFBRUMsdUJBQXVCLEVBQUU7RUFDOUssSUFBTUMsaUJBQWlCLEdBQUcsSUFBSUMsR0FBRyxFQUFFO0VBQ25DTCxlQUFlLENBQUMvTixPQUFPLENBQUMsVUFBQ2lELGNBQWMsRUFBSztJQUN4Q2tMLGlCQUFpQixDQUFDRSxHQUFHLENBQUNwTCxjQUFjLENBQUM1SyxPQUFPLEVBQUU0SyxjQUFjLENBQUM7RUFDakUsQ0FBQyxDQUFDO0VBQ0ZrSCxRQUFRLENBQUN3RCxlQUFlLEVBQUVDLGFBQWEsRUFBRTtJQUNyQ3ZELFVBQVUsRUFBRSxvQkFBQ0wsSUFBSSxFQUFLO01BQ2xCLElBQUksRUFBRUEsSUFBSSxZQUFZM0csV0FBVyxDQUFDLEVBQUU7UUFDaEM7TUFDSjtNQUNBLElBQUk2Syx1QkFBdUIsQ0FBQ0ksZUFBZSxDQUFDdEUsSUFBSSxDQUFDLEVBQUU7UUFDL0MsT0FBTyxnQkFBZ0IsR0FBR3VFLElBQUksQ0FBQ0MsTUFBTSxFQUFFO01BQzNDO01BQ0EsT0FBT1AsaUJBQWlCLENBQUNqRSxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUNEUSxpQkFBaUIsRUFBRSwyQkFBQzVDLE1BQU0sRUFBRUMsSUFBSSxFQUFLO01BQ2pDLElBQUlELE1BQU0sS0FBSytGLGVBQWUsRUFBRTtRQUM1QixPQUFPLElBQUk7TUFDZjtNQUNBLElBQUkvRixNQUFNLFlBQVl2RSxXQUFXLElBQUl3RSxJQUFJLFlBQVl4RSxXQUFXLEVBQUU7UUFDOUQsSUFBSSxPQUFPdUUsTUFBTSxDQUFDNkcsR0FBRyxLQUFLLFdBQVcsRUFBRTtVQUNuQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFO1lBQ2hCLE1BQU0sSUFBSTlQLEtBQUssQ0FBQyw0SUFBNEksQ0FBQztVQUNqSztVQUNBLElBQUksT0FBTzZQLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEtBQUssVUFBVSxFQUFFO1lBQzNDLE1BQU0sSUFBSS9QLEtBQUssQ0FBQyw4S0FBOEssQ0FBQztVQUNuTTtVQUNBNlAsTUFBTSxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQ2hILE1BQU0sQ0FBQzZHLEdBQUcsRUFBRTVHLElBQUksQ0FBQztRQUN6QztRQUNBLElBQUlzRyxpQkFBaUIsQ0FBQ1UsR0FBRyxDQUFDakgsTUFBTSxDQUFDLEVBQUU7VUFDL0IsSUFBTTNFLGNBQWMsR0FBR2tMLGlCQUFpQixDQUFDcE4sR0FBRyxDQUFDNkcsTUFBTSxDQUFDO1VBQ3BEM0UsY0FBYyxDQUFDNkwsb0NBQW9DLENBQUNqSCxJQUFJLENBQUM7VUFDekQsT0FBTyxLQUFLO1FBQ2hCO1FBQ0EsSUFBSWdHLHFCQUFxQixDQUFDMUwsUUFBUSxDQUFDeUYsTUFBTSxDQUFDLEVBQUU7VUFDeENqRyxpQkFBaUIsQ0FBQ2tHLElBQUksRUFBRWlHLGVBQWUsQ0FBQ2xHLE1BQU0sQ0FBQyxDQUFDO1FBQ3BEO1FBQ0EsSUFBTW1ILGNBQWMsR0FBR2IsdUJBQXVCLENBQUNjLGlCQUFpQixDQUFDcEgsTUFBTSxDQUFDO1FBQ3hFLElBQUltSCxjQUFjLEVBQUU7VUFDaEJBLGNBQWMsQ0FBQ0UsY0FBYyxDQUFDcEgsSUFBSSxDQUFDO1FBQ3ZDO1FBQ0EsSUFBSUQsTUFBTSxDQUFDc0gsV0FBVyxDQUFDckgsSUFBSSxDQUFDLEVBQUU7VUFDMUIsSUFBTXNILGdCQUFnQixHQUFHak0sZ0JBQWdCLENBQUMwRSxNQUFNLENBQUM7VUFDakQyRixnQ0FBZ0MsQ0FBQzRCLGdCQUFnQixDQUFDO1VBQ2xELElBQU1DLGNBQWMsR0FBR2xNLGdCQUFnQixDQUFDMkUsSUFBSSxDQUFDO1VBQzdDMEYsZ0NBQWdDLENBQUM2QixjQUFjLENBQUM7VUFDaEQsSUFBSUQsZ0JBQWdCLENBQUNELFdBQVcsQ0FBQ0UsY0FBYyxDQUFDLEVBQUU7WUFDOUMsT0FBTyxLQUFLO1VBQ2hCO1FBQ0o7TUFDSjtNQUNBLE9BQU8sQ0FBQ3hILE1BQU0sQ0FBQ3pHLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztJQUNuRCxDQUFDO0lBQ0R1SixxQkFBcUIsaUNBQUNWLElBQUksRUFBRTtNQUN4QixJQUFJLEVBQUVBLElBQUksWUFBWTNHLFdBQVcsQ0FBQyxFQUFFO1FBQ2hDLE9BQU8sSUFBSTtNQUNmO01BQ0EsSUFBSTZLLHVCQUF1QixDQUFDSSxlQUFlLENBQUN0RSxJQUFJLENBQUMsRUFBRTtRQUMvQyxPQUFPLEtBQUs7TUFDaEI7TUFDQSxPQUFPLENBQUNBLElBQUksQ0FBQzdJLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqRDtFQUNKLENBQUMsQ0FBQztBQUNOO0FBQUMsSUFFS2tPLHFCQUFxQjtFQUN2QiwrQkFBWXhNLFNBQVMsRUFBRXlNLG9CQUFvQixFQUFFO0lBQUE7SUFBQTtJQUN6QyxJQUFJLENBQUNDLHFCQUFxQixHQUFHLENBQ3pCO01BQUVsVCxLQUFLLEVBQUUsT0FBTztNQUFFbVQsUUFBUSxFQUFFLGtCQUFDblQsS0FBSztRQUFBLE9BQUssS0FBSSxDQUFDb1QsZ0JBQWdCLENBQUNwVCxLQUFLLENBQUM7TUFBQTtJQUFDLENBQUMsQ0FDeEU7SUFDRCxJQUFJLENBQUN3RyxTQUFTLEdBQUdBLFNBQVM7SUFDMUIsSUFBSSxDQUFDeU0sb0JBQW9CLEdBQUdBLG9CQUFvQjtJQUNoRCxJQUFJLENBQUNJLGNBQWMsR0FBRyxJQUFJQyxzQkFBc0IsRUFBRTtFQUN0RDtFQUFDO0lBQUE7SUFBQSxPQUNELG9CQUFXO01BQUE7TUFDUCxJQUFJLENBQUNKLHFCQUFxQixDQUFDdlAsT0FBTyxDQUFDLGdCQUF5QjtRQUFBLElBQXRCM0QsS0FBSyxRQUFMQSxLQUFLO1VBQUVtVCxRQUFRLFFBQVJBLFFBQVE7UUFDakQsTUFBSSxDQUFDM00sU0FBUyxDQUFDeEssT0FBTyxDQUFDUSxnQkFBZ0IsQ0FBQ3dELEtBQUssRUFBRW1ULFFBQVEsQ0FBQztNQUM1RCxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUE7SUFBQSxPQUNELHNCQUFhO01BQUE7TUFDVCxJQUFJLENBQUNELHFCQUFxQixDQUFDdlAsT0FBTyxDQUFDLGlCQUF5QjtRQUFBLElBQXRCM0QsS0FBSyxTQUFMQSxLQUFLO1VBQUVtVCxRQUFRLFNBQVJBLFFBQVE7UUFDakQsTUFBSSxDQUFDM00sU0FBUyxDQUFDeEssT0FBTyxDQUFDdVgsbUJBQW1CLENBQUN2VCxLQUFLLEVBQUVtVCxRQUFRLENBQUM7TUFDL0QsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBO0lBQUEsT0FDRCwyQkFBa0JLLFNBQVMsRUFBRTtNQUN6QixJQUFJLENBQUNILGNBQWMsQ0FBQ0ksaUJBQWlCLENBQUNELFNBQVMsQ0FBQztJQUNwRDtFQUFDO0lBQUE7SUFBQSxPQUNELDBCQUFpQnhULEtBQUssRUFBRTtNQUNwQixJQUFNWSxNQUFNLEdBQUdaLEtBQUssQ0FBQ1ksTUFBTTtNQUMzQixJQUFJLENBQUNBLE1BQU0sRUFBRTtRQUNUO01BQ0o7TUFDQSxJQUFJLENBQUM4UyxzQkFBc0IsQ0FBQzlTLE1BQU0sQ0FBQztJQUN2QztFQUFDO0lBQUE7SUFBQSxPQUNELGdDQUF1QjVFLE9BQU8sRUFBRTtNQUM1QixJQUFJLENBQUN1Syw2QkFBNkIsQ0FBQ3ZLLE9BQU8sRUFBRSxJQUFJLENBQUN3SyxTQUFTLENBQUMsRUFBRTtRQUN6RDtNQUNKO01BQ0EsSUFBSSxFQUFFeEssT0FBTyxZQUFZZ0wsV0FBVyxDQUFDLEVBQUU7UUFDbkMsTUFBTSxJQUFJeEUsS0FBSyxDQUFDLDRDQUE0QyxDQUFDO01BQ2pFO01BQ0EsSUFBTWdSLFNBQVMsR0FBRyxJQUFJLENBQUNQLG9CQUFvQixDQUFDVSxZQUFZLENBQUMzWCxPQUFPLENBQUM7TUFDakUsSUFBSSxDQUFDcVgsY0FBYyxDQUFDL1YsR0FBRyxDQUFDdEIsT0FBTyxFQUFFd1gsU0FBUyxDQUFDO0lBQy9DO0VBQUM7SUFBQTtJQUFBLE9BQ0QsNkJBQW9CO01BQ2hCLE9BQU8sSUFBSSxDQUFDSCxjQUFjLENBQUNPLGlCQUFpQixFQUFFO0lBQ2xEO0VBQUM7SUFBQTtJQUFBLE9BQ0QsNkJBQW9CO01BQ2hCLE9BQU9qUCxLQUFLLENBQUNRLElBQUksQ0FBQyxJQUFJLENBQUNrTyxjQUFjLENBQUNRLHFCQUFxQixFQUFFLENBQUM7SUFDbEU7RUFBQztJQUFBO0lBQUEsT0FDRCwrQkFBc0I7TUFDbEIsSUFBSSxDQUFDUixjQUFjLENBQUNTLG1CQUFtQixFQUFFO0lBQzdDO0VBQUM7RUFBQTtBQUFBO0FBQUEsSUFFQ1Isc0JBQXNCO0VBQ3hCLGtDQUFjO0lBQUE7SUFDVixJQUFJLENBQUNTLHNCQUFzQixHQUFHLEVBQUU7SUFDaEMsSUFBSSxDQUFDQyxrQkFBa0IsR0FBRyxFQUFFO0lBQzVCLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUcsSUFBSWxDLEdBQUcsRUFBRTtFQUN4QztFQUFDO0lBQUE7SUFBQSxPQUNELGFBQUkvVixPQUFPLEVBQW9CO01BQUEsSUFBbEJ3WCxTQUFTLHVFQUFHLElBQUk7TUFDekIsSUFBSUEsU0FBUyxFQUFFO1FBQ1gsSUFBSSxDQUFDUyxtQkFBbUIsQ0FBQ2pDLEdBQUcsQ0FBQ3dCLFNBQVMsRUFBRXhYLE9BQU8sQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDZ1ksa0JBQWtCLENBQUNsTyxRQUFRLENBQUMwTixTQUFTLENBQUMsRUFBRTtVQUM5QyxJQUFJLENBQUNRLGtCQUFrQixDQUFDclIsSUFBSSxDQUFDNlEsU0FBUyxDQUFDO1FBQzNDO1FBQ0E7TUFDSjtNQUNBLElBQUksQ0FBQ08sc0JBQXNCLENBQUNwUixJQUFJLENBQUMzRyxPQUFPLENBQUM7SUFDN0M7RUFBQztJQUFBO0lBQUEsT0FDRCwrQkFBc0I7TUFBQTtNQUNsQixJQUFJLENBQUNpWSxtQkFBbUIsQ0FBQ3RRLE9BQU8sQ0FBQyxVQUFDeEQsS0FBSyxFQUFFNkksR0FBRyxFQUFLO1FBQzdDLElBQUksQ0FBQyxNQUFJLENBQUNnTCxrQkFBa0IsQ0FBQ2xPLFFBQVEsQ0FBQ2tELEdBQUcsQ0FBQyxFQUFFO1VBQ3hDLE1BQUksQ0FBQ2lMLG1CQUFtQixVQUFPLENBQUNqTCxHQUFHLENBQUM7UUFDeEM7TUFDSixDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUE7SUFBQSxPQUNELDZCQUFvQjtNQUNoQixvQ0FBVyxJQUFJLENBQUMrSyxzQkFBc0Isc0JBQUssSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQ0MsTUFBTSxFQUFFO0lBQ2hGO0VBQUM7SUFBQTtJQUFBLE9BQ0QsMkJBQWtCVixTQUFTLEVBQUU7TUFDekIsSUFBTTNMLEtBQUssR0FBRyxJQUFJLENBQUNtTSxrQkFBa0IsQ0FBQ2hULE9BQU8sQ0FBQ3dTLFNBQVMsQ0FBQztNQUN4RCxJQUFJM0wsS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ2QsSUFBSSxDQUFDbU0sa0JBQWtCLENBQUNsTSxNQUFNLENBQUNELEtBQUssRUFBRSxDQUFDLENBQUM7TUFDNUM7SUFDSjtFQUFDO0lBQUE7SUFBQSxPQUNELGlDQUF3QjtNQUNwQixPQUFPLElBQUksQ0FBQ21NLGtCQUFrQjtJQUNsQztFQUFDO0VBQUE7QUFBQTtBQUFBLElBR0NHLFdBQVc7RUFDYix1QkFBYztJQUFBO0lBQ1YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSXJDLEdBQUcsRUFBRTtFQUMxQjtFQUFDO0lBQUE7SUFBQSxPQUNELGtCQUFTc0MsUUFBUSxFQUFFbEIsUUFBUSxFQUFFO01BQ3pCLElBQU1pQixLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLLENBQUMxUCxHQUFHLENBQUMyUCxRQUFRLENBQUMsSUFBSSxFQUFFO01BQzVDRCxLQUFLLENBQUN6UixJQUFJLENBQUN3USxRQUFRLENBQUM7TUFDcEIsSUFBSSxDQUFDaUIsS0FBSyxDQUFDcEMsR0FBRyxDQUFDcUMsUUFBUSxFQUFFRCxLQUFLLENBQUM7SUFDbkM7RUFBQztJQUFBO0lBQUEsT0FDRCxvQkFBV0MsUUFBUSxFQUFFbEIsUUFBUSxFQUFFO01BQzNCLElBQU1pQixLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLLENBQUMxUCxHQUFHLENBQUMyUCxRQUFRLENBQUMsSUFBSSxFQUFFO01BQzVDLElBQU14TSxLQUFLLEdBQUd1TSxLQUFLLENBQUNwVCxPQUFPLENBQUNtUyxRQUFRLENBQUM7TUFDckMsSUFBSXRMLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNkO01BQ0o7TUFDQXVNLEtBQUssQ0FBQ3RNLE1BQU0sQ0FBQ0QsS0FBSyxFQUFFLENBQUMsQ0FBQztNQUN0QixJQUFJLENBQUN1TSxLQUFLLENBQUNwQyxHQUFHLENBQUNxQyxRQUFRLEVBQUVELEtBQUssQ0FBQztJQUNuQztFQUFDO0lBQUE7SUFBQSxPQUNELHFCQUFZQyxRQUFRLEVBQVc7TUFBQSxrQ0FBTnpSLElBQUk7UUFBSkEsSUFBSTtNQUFBO01BQ3pCLElBQU13UixLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLLENBQUMxUCxHQUFHLENBQUMyUCxRQUFRLENBQUMsSUFBSSxFQUFFO01BQzVDRCxLQUFLLENBQUN6USxPQUFPLENBQUMsVUFBQ3dQLFFBQVEsRUFBSztRQUN4QkEsUUFBUSxlQUFJdlEsSUFBSSxDQUFDO01BQ3JCLENBQUMsQ0FBQztJQUNOO0VBQUM7RUFBQTtBQUFBO0FBQUEsSUFHQzBSLGVBQWU7RUFDakIseUJBQVlqVixRQUFRLEVBQUU7SUFBQTtJQUNsQixJQUFJLENBQUNBLFFBQVEsR0FBR0EsUUFBUTtFQUM1QjtFQUFDO0lBQUE7SUFBQTtNQUFBLDBFQUNEO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsSUFDUyxJQUFJLENBQUNOLElBQUk7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FDUSxJQUFJLENBQUNNLFFBQVEsQ0FBQ2tWLElBQUksRUFBRTtjQUFBO2dCQUF0QyxJQUFJLENBQUN4VixJQUFJO2NBQUE7Z0JBQUEsaUNBRU4sSUFBSSxDQUFDQSxJQUFJO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBLENBQ25CO01BQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7QUFBQTtBQUFBLElBR0N5VixvQkFBb0I7RUFDdEIsZ0NBQWM7SUFBQTtJQUNWLElBQUksQ0FBQ0MsWUFBWSxHQUFHLElBQUkxQyxHQUFHLEVBQUU7SUFDN0IsSUFBSSxDQUFDMkMsWUFBWSxHQUFHLElBQUkzQyxHQUFHLEVBQUU7RUFDakM7RUFBQztJQUFBO0lBQUEsT0FDRCxpQkFBUTRDLFFBQVEsRUFBRTVILFFBQVEsRUFBRTZILGFBQWEsRUFBRTtNQUN2QyxJQUFJLElBQUksQ0FBQ0YsWUFBWSxDQUFDbEMsR0FBRyxDQUFDbUMsUUFBUSxDQUFDLEVBQUU7UUFDakMsSUFBTUUsYUFBYSxHQUFHLElBQUksQ0FBQ0gsWUFBWSxDQUFDaFEsR0FBRyxDQUFDaVEsUUFBUSxDQUFDO1FBQ3JELElBQUksQ0FBQ0QsWUFBWSxVQUFPLENBQUNDLFFBQVEsQ0FBQztRQUNsQyxJQUFJRSxhQUFhLENBQUNDLFFBQVEsS0FBSy9ILFFBQVEsRUFBRTtVQUNyQztRQUNKO01BQ0o7TUFDQSxJQUFJLElBQUksQ0FBQzBILFlBQVksQ0FBQ2pDLEdBQUcsQ0FBQ21DLFFBQVEsQ0FBQyxFQUFFO1FBQ2pDLElBQU1JLGNBQWMsR0FBRyxJQUFJLENBQUNOLFlBQVksQ0FBQy9QLEdBQUcsQ0FBQ2lRLFFBQVEsQ0FBQztRQUN0RCxJQUFJSSxjQUFjLENBQUNELFFBQVEsS0FBSy9ILFFBQVEsRUFBRTtVQUN0QyxJQUFJLENBQUMwSCxZQUFZLFVBQU8sQ0FBQ0UsUUFBUSxDQUFDO1VBQ2xDO1FBQ0o7UUFDQSxJQUFJLENBQUNGLFlBQVksQ0FBQ3pDLEdBQUcsQ0FBQzJDLFFBQVEsRUFBRTtVQUFFRyxRQUFRLEVBQUVDLGNBQWMsQ0FBQ0QsUUFBUTtVQUFFLE9BQUsvSDtRQUFTLENBQUMsQ0FBQztRQUNyRjtNQUNKO01BQ0EsSUFBSSxDQUFDMEgsWUFBWSxDQUFDekMsR0FBRyxDQUFDMkMsUUFBUSxFQUFFO1FBQUVHLFFBQVEsRUFBRUYsYUFBYTtRQUFFLE9BQUs3SDtNQUFTLENBQUMsQ0FBQztJQUMvRTtFQUFDO0lBQUE7SUFBQSxPQUNELG9CQUFXNEgsUUFBUSxFQUFFL0wsWUFBWSxFQUFFO01BQy9CLElBQUlvTSxpQkFBaUIsR0FBR3BNLFlBQVk7TUFDcEMsSUFBSSxJQUFJLENBQUM2TCxZQUFZLENBQUNqQyxHQUFHLENBQUNtQyxRQUFRLENBQUMsRUFBRTtRQUNqQyxJQUFNSSxjQUFjLEdBQUcsSUFBSSxDQUFDTixZQUFZLENBQUMvUCxHQUFHLENBQUNpUSxRQUFRLENBQUM7UUFDdERLLGlCQUFpQixHQUFHRCxjQUFjLENBQUNELFFBQVE7UUFDM0MsSUFBSSxDQUFDTCxZQUFZLFVBQU8sQ0FBQ0UsUUFBUSxDQUFDO1FBQ2xDLElBQUlLLGlCQUFpQixLQUFLLElBQUksRUFBRTtVQUM1QjtRQUNKO01BQ0o7TUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDTixZQUFZLENBQUNsQyxHQUFHLENBQUNtQyxRQUFRLENBQUMsRUFBRTtRQUNsQyxJQUFJLENBQUNELFlBQVksQ0FBQzFDLEdBQUcsQ0FBQzJDLFFBQVEsRUFBRTtVQUFFRyxRQUFRLEVBQUVFO1FBQWtCLENBQUMsQ0FBQztNQUNwRTtJQUNKO0VBQUM7SUFBQTtJQUFBLE9BQ0QsMkJBQWtCO01BQ2QsSUFBTVAsWUFBWSxHQUFHLEVBQUU7TUFDdkIsSUFBSSxDQUFDQSxZQUFZLENBQUM5USxPQUFPLENBQUMsVUFBQ3hELEtBQUssRUFBRTZJLEdBQUcsRUFBSztRQUN0Q3lMLFlBQVksQ0FBQzlSLElBQUksQ0FBQztVQUFFN0IsSUFBSSxFQUFFa0ksR0FBRztVQUFFN0ksS0FBSyxFQUFFQSxLQUFLO1FBQUssQ0FBQyxDQUFDO01BQ3RELENBQUMsQ0FBQztNQUNGLE9BQU9zVSxZQUFZO0lBQ3ZCO0VBQUM7SUFBQTtJQUFBLE9BQ0QsMkJBQWtCO01BQ2QsSUFBTUMsWUFBWSxHQUFHLEVBQUU7TUFDdkIsSUFBSSxDQUFDQSxZQUFZLENBQUMvUSxPQUFPLENBQUMsVUFBQ3hELEtBQUssRUFBRTZJLEdBQUcsRUFBSztRQUN0QzBMLFlBQVksQ0FBQy9SLElBQUksQ0FBQ3FHLEdBQUcsQ0FBQztNQUMxQixDQUFDLENBQUM7TUFDRixPQUFPMEwsWUFBWTtJQUN2QjtFQUFDO0lBQUE7SUFBQSxPQUNELG1CQUFVO01BQ04sT0FBTyxJQUFJLENBQUNELFlBQVksQ0FBQ1EsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUNQLFlBQVksQ0FBQ08sSUFBSSxLQUFLLENBQUM7SUFDdkU7RUFBQztFQUFBO0FBQUE7QUFBQSxJQUdDQyxjQUFjO0VBQ2hCLDBCQUFjO0lBQUE7SUFDVixJQUFJLENBQUNDLFlBQVksR0FBRyxFQUFFO0lBQ3RCLElBQUksQ0FBQ0MsY0FBYyxHQUFHLEVBQUU7SUFDeEIsSUFBSSxDQUFDQyxZQUFZLEdBQUcsSUFBSWIsb0JBQW9CLEVBQUU7SUFDOUMsSUFBSSxDQUFDYyxnQkFBZ0IsR0FBRyxJQUFJZCxvQkFBb0IsRUFBRTtFQUN0RDtFQUFDO0lBQUE7SUFBQSxPQUNELGtCQUFTZSxTQUFTLEVBQUU7TUFDaEIsSUFBSSxJQUFJLENBQUNILGNBQWMsQ0FBQ3RQLFFBQVEsQ0FBQ3lQLFNBQVMsQ0FBQyxFQUFFO1FBQ3pDLElBQUksQ0FBQ0gsY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxDQUFDSSxNQUFNLENBQUMsVUFBQzFVLElBQUk7VUFBQSxPQUFLQSxJQUFJLEtBQUt5VSxTQUFTO1FBQUEsRUFBQztRQUM5RTtNQUNKO01BQ0EsSUFBSSxDQUFDLElBQUksQ0FBQ0osWUFBWSxDQUFDclAsUUFBUSxDQUFDeVAsU0FBUyxDQUFDLEVBQUU7UUFDeEMsSUFBSSxDQUFDSixZQUFZLENBQUN4UyxJQUFJLENBQUM0UyxTQUFTLENBQUM7TUFDckM7SUFDSjtFQUFDO0lBQUE7SUFBQSxPQUNELHFCQUFZQSxTQUFTLEVBQUU7TUFDbkIsSUFBSSxJQUFJLENBQUNKLFlBQVksQ0FBQ3JQLFFBQVEsQ0FBQ3lQLFNBQVMsQ0FBQyxFQUFFO1FBQ3ZDLElBQUksQ0FBQ0osWUFBWSxHQUFHLElBQUksQ0FBQ0EsWUFBWSxDQUFDSyxNQUFNLENBQUMsVUFBQzFVLElBQUk7VUFBQSxPQUFLQSxJQUFJLEtBQUt5VSxTQUFTO1FBQUEsRUFBQztRQUMxRTtNQUNKO01BQ0EsSUFBSSxDQUFDLElBQUksQ0FBQ0gsY0FBYyxDQUFDdFAsUUFBUSxDQUFDeVAsU0FBUyxDQUFDLEVBQUU7UUFDMUMsSUFBSSxDQUFDSCxjQUFjLENBQUN6UyxJQUFJLENBQUM0UyxTQUFTLENBQUM7TUFDdkM7SUFDSjtFQUFDO0lBQUE7SUFBQSxPQUNELGtCQUFTRSxTQUFTLEVBQUUxSSxRQUFRLEVBQUUySSxhQUFhLEVBQUU7TUFDekMsSUFBSSxDQUFDTCxZQUFZLENBQUNNLE9BQU8sQ0FBQ0YsU0FBUyxFQUFFMUksUUFBUSxFQUFFMkksYUFBYSxDQUFDO0lBQ2pFO0VBQUM7SUFBQTtJQUFBLE9BQ0QscUJBQVlELFNBQVMsRUFBRUMsYUFBYSxFQUFFO01BQ2xDLElBQUksQ0FBQ0wsWUFBWSxDQUFDTyxVQUFVLENBQUNILFNBQVMsRUFBRUMsYUFBYSxDQUFDO0lBQzFEO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsc0JBQWFHLGFBQWEsRUFBRTlJLFFBQVEsRUFBRTJJLGFBQWEsRUFBRTtNQUNqRCxJQUFJLENBQUNKLGdCQUFnQixDQUFDSyxPQUFPLENBQUNFLGFBQWEsRUFBRTlJLFFBQVEsRUFBRTJJLGFBQWEsQ0FBQztJQUN6RTtFQUFDO0lBQUE7SUFBQSxPQUNELHlCQUFnQkcsYUFBYSxFQUFFSCxhQUFhLEVBQUU7TUFDMUMsSUFBSSxDQUFDSixnQkFBZ0IsQ0FBQ00sVUFBVSxDQUFDQyxhQUFhLEVBQUVILGFBQWEsQ0FBQztJQUNsRTtFQUFDO0lBQUE7SUFBQSxPQUNELDJCQUFrQjtNQUNkLE9BQU8sSUFBSSxDQUFDUCxZQUFZO0lBQzVCO0VBQUM7SUFBQTtJQUFBLE9BQ0QsNkJBQW9CO01BQ2hCLE9BQU8sSUFBSSxDQUFDQyxjQUFjO0lBQzlCO0VBQUM7SUFBQTtJQUFBLE9BQ0QsNEJBQW1CO01BQ2YsT0FBTyxJQUFJLENBQUNDLFlBQVksQ0FBQ1MsZUFBZSxFQUFFO0lBQzlDO0VBQUM7SUFBQTtJQUFBLE9BQ0QsNEJBQW1CO01BQ2YsT0FBTyxJQUFJLENBQUNULFlBQVksQ0FBQ1UsZUFBZSxFQUFFO0lBQzlDO0VBQUM7SUFBQTtJQUFBLE9BQ0QsZ0NBQXVCO01BQ25CLE9BQU8sSUFBSSxDQUFDVCxnQkFBZ0IsQ0FBQ1EsZUFBZSxFQUFFO0lBQ2xEO0VBQUM7SUFBQTtJQUFBLE9BQ0QsZ0NBQXVCO01BQ25CLE9BQU8sSUFBSSxDQUFDUixnQkFBZ0IsQ0FBQ1MsZUFBZSxFQUFFO0lBQ2xEO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsd0JBQWUvWixPQUFPLEVBQUU7TUFDcEIsSUFBSSxDQUFDbVosWUFBWSxDQUFDeFIsT0FBTyxDQUFDLFVBQUM0UixTQUFTLEVBQUs7UUFDckN2WixPQUFPLENBQUNtQixTQUFTLENBQUNHLEdBQUcsQ0FBQ2lZLFNBQVMsQ0FBQztNQUNwQyxDQUFDLENBQUM7TUFDRixJQUFJLENBQUNILGNBQWMsQ0FBQ3pSLE9BQU8sQ0FBQyxVQUFDNFIsU0FBUyxFQUFLO1FBQ3ZDdlosT0FBTyxDQUFDbUIsU0FBUyxDQUFDSSxNQUFNLENBQUNnWSxTQUFTLENBQUM7TUFDdkMsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDRixZQUFZLENBQUNTLGVBQWUsRUFBRSxDQUFDblMsT0FBTyxDQUFDLFVBQUNxUyxNQUFNLEVBQUs7UUFDcERoYSxPQUFPLENBQUNvRSxLQUFLLENBQUM2VixXQUFXLENBQUNELE1BQU0sQ0FBQ2xWLElBQUksRUFBRWtWLE1BQU0sQ0FBQzdWLEtBQUssQ0FBQztRQUNwRDtNQUNKLENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQ2tWLFlBQVksQ0FBQ1UsZUFBZSxFQUFFLENBQUNwUyxPQUFPLENBQUMsVUFBQzhSLFNBQVMsRUFBSztRQUN2RHpaLE9BQU8sQ0FBQ29FLEtBQUssQ0FBQzhWLGNBQWMsQ0FBQ1QsU0FBUyxDQUFDO01BQzNDLENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQ0gsZ0JBQWdCLENBQUNRLGVBQWUsRUFBRSxDQUFDblMsT0FBTyxDQUFDLFVBQUNxUyxNQUFNLEVBQUs7UUFDeERoYSxPQUFPLENBQUNpTyxZQUFZLENBQUMrTCxNQUFNLENBQUNsVixJQUFJLEVBQUVrVixNQUFNLENBQUM3VixLQUFLLENBQUM7TUFDbkQsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDbVYsZ0JBQWdCLENBQUNTLGVBQWUsRUFBRSxDQUFDcFMsT0FBTyxDQUFDLFVBQUNrUyxhQUFhLEVBQUs7UUFDL0Q3WixPQUFPLENBQUNzTyxlQUFlLENBQUN1TCxhQUFhLENBQUM7TUFDMUMsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBO0lBQUEsT0FDRCxtQkFBVTtNQUNOLE9BQVEsSUFBSSxDQUFDVixZQUFZLENBQUM1UyxNQUFNLEtBQUssQ0FBQyxJQUNsQyxJQUFJLENBQUM2UyxjQUFjLENBQUM3UyxNQUFNLEtBQUssQ0FBQyxJQUNoQyxJQUFJLENBQUM4UyxZQUFZLENBQUNjLE9BQU8sRUFBRSxJQUMzQixJQUFJLENBQUNiLGdCQUFnQixDQUFDYSxPQUFPLEVBQUU7SUFDdkM7RUFBQztFQUFBO0FBQUE7QUFBQSxJQUdDQyx1QkFBdUI7RUFDekIsaUNBQVlwYSxPQUFPLEVBQUVxYSx5QkFBeUIsRUFBRTtJQUFBO0lBQzVDLElBQUksQ0FBQ0MsZUFBZSxHQUFHLElBQUlDLE9BQU8sRUFBRTtJQUNwQyxJQUFJLENBQUNDLG9CQUFvQixHQUFHLENBQUM7SUFDN0IsSUFBSSxDQUFDQyxhQUFhLEdBQUcsRUFBRTtJQUN2QixJQUFJLENBQUNDLGVBQWUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLEtBQUs7SUFDdEIsSUFBSSxDQUFDM2EsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ3FhLHlCQUF5QixHQUFHQSx5QkFBeUI7SUFDMUQsSUFBSSxDQUFDTyxnQkFBZ0IsR0FBRyxJQUFJQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzdFO0VBQUM7SUFBQTtJQUFBLE9BQ0QsaUJBQVE7TUFDSixJQUFJLElBQUksQ0FBQ0osU0FBUyxFQUFFO1FBQ2hCO01BQ0o7TUFDQSxJQUFJLENBQUNDLGdCQUFnQixDQUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDaGIsT0FBTyxFQUFFO1FBQ3hDaWIsU0FBUyxFQUFFLElBQUk7UUFDZkMsT0FBTyxFQUFFLElBQUk7UUFDYjVOLFVBQVUsRUFBRSxJQUFJO1FBQ2hCNk4saUJBQWlCLEVBQUU7TUFDdkIsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDUixTQUFTLEdBQUcsSUFBSTtJQUN6QjtFQUFDO0lBQUE7SUFBQSxPQUNELGdCQUFPO01BQ0gsSUFBSSxJQUFJLENBQUNBLFNBQVMsRUFBRTtRQUNoQixJQUFJLENBQUNDLGdCQUFnQixDQUFDUSxVQUFVLEVBQUU7UUFDbEMsSUFBSSxDQUFDVCxTQUFTLEdBQUcsS0FBSztNQUMxQjtJQUNKO0VBQUM7SUFBQTtJQUFBLE9BQ0QsMkJBQWtCM2EsT0FBTyxFQUFFO01BQ3ZCLE9BQU8sSUFBSSxDQUFDc2EsZUFBZSxDQUFDOUQsR0FBRyxDQUFDeFcsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDc2EsZUFBZSxDQUFDNVIsR0FBRyxDQUFDMUksT0FBTyxDQUFDLEdBQUcsSUFBSTtJQUN2RjtFQUFDO0lBQUE7SUFBQSxPQUNELDRCQUFtQjtNQUNmLE9BQU8sSUFBSSxDQUFDeWEsYUFBYTtJQUM3QjtFQUFDO0lBQUE7SUFBQSxPQUNELHlCQUFnQnphLE9BQU8sRUFBRTtNQUNyQixPQUFPLElBQUksQ0FBQ3lhLGFBQWEsQ0FBQzNRLFFBQVEsQ0FBQzlKLE9BQU8sQ0FBQztJQUMvQztFQUFDO0lBQUE7SUFBQSxPQUNELGdDQUF1QjtNQUNuQixJQUFJLENBQUM4YSxXQUFXLENBQUMsSUFBSSxDQUFDRixnQkFBZ0IsQ0FBQ1MsV0FBVyxFQUFFLENBQUM7SUFDekQ7RUFBQztJQUFBO0lBQUEsT0FDRCxxQkFBWUMsU0FBUyxFQUFFO01BQ25CLElBQU1DLHlCQUF5QixHQUFHLElBQUloQixPQUFPLEVBQUU7TUFBQywyQ0FDekJlLFNBQVM7UUFBQTtNQUFBO1FBQWhDLG9EQUFrQztVQUFBLElBQXZCRSxRQUFRO1VBQ2YsSUFBTXhiLE9BQU8sR0FBR3diLFFBQVEsQ0FBQzVXLE1BQU07VUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQ3lWLHlCQUF5QixDQUFDcmEsT0FBTyxDQUFDLEVBQUU7WUFDMUM7VUFDSjtVQUNBLElBQUksSUFBSSxDQUFDeWIsMkJBQTJCLENBQUN6YixPQUFPLENBQUMsRUFBRTtZQUMzQztVQUNKO1VBQ0EsSUFBSTBiLHNCQUFzQixHQUFHLEtBQUs7VUFBQyw0Q0FDUixJQUFJLENBQUNqQixhQUFhO1lBQUE7VUFBQTtZQUE3Qyx1REFBK0M7Y0FBQSxJQUFwQ2tCLFlBQVk7Y0FDbkIsSUFBSUEsWUFBWSxDQUFDbFIsUUFBUSxDQUFDekssT0FBTyxDQUFDLEVBQUU7Z0JBQ2hDMGIsc0JBQXNCLEdBQUcsSUFBSTtnQkFDN0I7Y0FDSjtZQUNKO1VBQUM7WUFBQTtVQUFBO1lBQUE7VUFBQTtVQUNELElBQUlBLHNCQUFzQixFQUFFO1lBQ3hCO1VBQ0o7VUFDQSxRQUFRRixRQUFRLENBQUN6VyxJQUFJO1lBQ2pCLEtBQUssV0FBVztjQUNaLElBQUksQ0FBQzZXLHVCQUF1QixDQUFDSixRQUFRLENBQUM7Y0FDdEM7WUFDSixLQUFLLFlBQVk7Y0FDYixJQUFJLENBQUNELHlCQUF5QixDQUFDL0UsR0FBRyxDQUFDeFcsT0FBTyxDQUFDLEVBQUU7Z0JBQ3pDdWIseUJBQXlCLENBQUN2RixHQUFHLENBQUNoVyxPQUFPLEVBQUUsRUFBRSxDQUFDO2NBQzlDO2NBQ0EsSUFBSSxDQUFDdWIseUJBQXlCLENBQUM3UyxHQUFHLENBQUMxSSxPQUFPLENBQUMsQ0FBQzhKLFFBQVEsQ0FBQzBSLFFBQVEsQ0FBQzNCLGFBQWEsQ0FBQyxFQUFFO2dCQUMxRSxJQUFJLENBQUNnQyx1QkFBdUIsQ0FBQ0wsUUFBUSxDQUFDO2dCQUN0Q0QseUJBQXlCLENBQUN2RixHQUFHLENBQUNoVyxPQUFPLCtCQUM5QnViLHlCQUF5QixDQUFDN1MsR0FBRyxDQUFDMUksT0FBTyxDQUFDLElBQ3pDd2IsUUFBUSxDQUFDM0IsYUFBYSxHQUN4QjtjQUNOO2NBQ0E7VUFBTTtRQUVsQjtNQUFDO1FBQUE7TUFBQTtRQUFBO01BQUE7SUFDTDtFQUFDO0lBQUE7SUFBQSxPQUNELGlDQUF3QjJCLFFBQVEsRUFBRTtNQUFBO01BQzlCQSxRQUFRLENBQUNNLFVBQVUsQ0FBQ25VLE9BQU8sQ0FBQyxVQUFDZ0ssSUFBSSxFQUFLO1FBQ2xDLElBQUksRUFBRUEsSUFBSSxZQUFZb0ssT0FBTyxDQUFDLEVBQUU7VUFDNUI7UUFDSjtRQUNBLElBQUksTUFBSSxDQUFDckIsZUFBZSxDQUFDNVEsUUFBUSxDQUFDNkgsSUFBSSxDQUFDLEVBQUU7VUFDckMsTUFBSSxDQUFDK0ksZUFBZSxDQUFDNU8sTUFBTSxDQUFDLE1BQUksQ0FBQzRPLGVBQWUsQ0FBQzFWLE9BQU8sQ0FBQzJNLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztVQUNsRTtRQUNKO1FBQ0EsSUFBSSxNQUFJLENBQUM4SiwyQkFBMkIsQ0FBQzlKLElBQUksQ0FBQyxFQUFFO1VBQ3hDO1FBQ0o7UUFDQSxNQUFJLENBQUM4SSxhQUFhLENBQUM5VCxJQUFJLENBQUNnTCxJQUFJLENBQUM7TUFDakMsQ0FBQyxDQUFDO01BQ0Y2SixRQUFRLENBQUNRLFlBQVksQ0FBQ3JVLE9BQU8sQ0FBQyxVQUFDZ0ssSUFBSSxFQUFLO1FBQ3BDLElBQUksRUFBRUEsSUFBSSxZQUFZb0ssT0FBTyxDQUFDLEVBQUU7VUFDNUI7UUFDSjtRQUNBLElBQUksTUFBSSxDQUFDdEIsYUFBYSxDQUFDM1EsUUFBUSxDQUFDNkgsSUFBSSxDQUFDLEVBQUU7VUFDbkMsTUFBSSxDQUFDOEksYUFBYSxDQUFDM08sTUFBTSxDQUFDLE1BQUksQ0FBQzJPLGFBQWEsQ0FBQ3pWLE9BQU8sQ0FBQzJNLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztVQUM5RDtRQUNKO1FBQ0EsTUFBSSxDQUFDK0ksZUFBZSxDQUFDL1QsSUFBSSxDQUFDZ0wsSUFBSSxDQUFDO01BQ25DLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTtJQUFBLE9BQ0QsaUNBQXdCNkosUUFBUSxFQUFFO01BQzlCLElBQU14YixPQUFPLEdBQUd3YixRQUFRLENBQUM1VyxNQUFNO01BQy9CLElBQUksQ0FBQyxJQUFJLENBQUMwVixlQUFlLENBQUM5RCxHQUFHLENBQUN4VyxPQUFPLENBQUMsRUFBRTtRQUNwQyxJQUFJLENBQUNzYSxlQUFlLENBQUN0RSxHQUFHLENBQUNoVyxPQUFPLEVBQUUsSUFBSWtaLGNBQWMsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQ3NCLG9CQUFvQixFQUFFO01BQy9CO01BQ0EsSUFBTXlCLGNBQWMsR0FBRyxJQUFJLENBQUMzQixlQUFlLENBQUM1UixHQUFHLENBQUMxSSxPQUFPLENBQUM7TUFDeEQsUUFBUXdiLFFBQVEsQ0FBQzNCLGFBQWE7UUFDMUIsS0FBSyxPQUFPO1VBQ1IsSUFBSSxDQUFDcUMsNEJBQTRCLENBQUNWLFFBQVEsRUFBRVMsY0FBYyxDQUFDO1VBQzNEO1FBQ0osS0FBSyxPQUFPO1VBQ1IsSUFBSSxDQUFDRSw0QkFBNEIsQ0FBQ1gsUUFBUSxFQUFFUyxjQUFjLENBQUM7VUFDM0Q7UUFDSjtVQUNJLElBQUksQ0FBQ0csOEJBQThCLENBQUNaLFFBQVEsRUFBRVMsY0FBYyxDQUFDO01BQUM7TUFFdEUsSUFBSUEsY0FBYyxDQUFDOUIsT0FBTyxFQUFFLEVBQUU7UUFDMUIsSUFBSSxDQUFDRyxlQUFlLFVBQU8sQ0FBQ3RhLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUN3YSxvQkFBb0IsRUFBRTtNQUMvQjtJQUNKO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsc0NBQTZCZ0IsUUFBUSxFQUFFOUUsY0FBYyxFQUFFO01BQ25ELElBQU0xVyxPQUFPLEdBQUd3YixRQUFRLENBQUM1VyxNQUFNO01BQy9CLElBQU1nVSxhQUFhLEdBQUc0QyxRQUFRLENBQUN4SyxRQUFRO01BQ3ZDLElBQU1xTCxjQUFjLEdBQUd6RCxhQUFhLEdBQUdBLGFBQWEsQ0FBQy9RLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO01BQ3BFd1UsY0FBYyxDQUFDMVUsT0FBTyxDQUFDLFVBQUN4RCxLQUFLLEVBQUUwSCxLQUFLLEVBQUs7UUFDckMsSUFBTXlRLFlBQVksR0FBR25ZLEtBQUssQ0FBQytDLElBQUksRUFBRTtRQUNqQyxJQUFJb1YsWUFBWSxLQUFLLEVBQUUsRUFBRTtVQUNyQkQsY0FBYyxDQUFDeFEsS0FBSyxDQUFDLEdBQUd5USxZQUFZO1FBQ3hDLENBQUMsTUFDSTtVQUNERCxjQUFjLENBQUN2USxNQUFNLENBQUNELEtBQUssRUFBRSxDQUFDLENBQUM7UUFDbkM7TUFDSixDQUFDLENBQUM7TUFDRixJQUFNMFEsU0FBUyxHQUFHLEVBQUUsQ0FBQzdRLEtBQUssQ0FBQzhRLElBQUksQ0FBQ3hjLE9BQU8sQ0FBQ21CLFNBQVMsQ0FBQztNQUNsRCxJQUFNc2IsV0FBVyxHQUFHRixTQUFTLENBQUMvQyxNQUFNLENBQUMsVUFBQ3JWLEtBQUs7UUFBQSxPQUFLLENBQUNrWSxjQUFjLENBQUN2UyxRQUFRLENBQUMzRixLQUFLLENBQUM7TUFBQSxFQUFDO01BQ2hGLElBQU11WSxhQUFhLEdBQUdMLGNBQWMsQ0FBQzdDLE1BQU0sQ0FBQyxVQUFDclYsS0FBSztRQUFBLE9BQUssQ0FBQ29ZLFNBQVMsQ0FBQ3pTLFFBQVEsQ0FBQzNGLEtBQUssQ0FBQztNQUFBLEVBQUM7TUFDbEZzWSxXQUFXLENBQUM5VSxPQUFPLENBQUMsVUFBQ3hELEtBQUssRUFBSztRQUMzQnVTLGNBQWMsQ0FBQ2lHLFFBQVEsQ0FBQ3hZLEtBQUssQ0FBQztNQUNsQyxDQUFDLENBQUM7TUFDRnVZLGFBQWEsQ0FBQy9VLE9BQU8sQ0FBQyxVQUFDeEQsS0FBSyxFQUFLO1FBQzdCdVMsY0FBYyxDQUFDa0csV0FBVyxDQUFDelksS0FBSyxDQUFDO01BQ3JDLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsc0NBQTZCcVgsUUFBUSxFQUFFOUUsY0FBYyxFQUFFO01BQ25ELElBQU0xVyxPQUFPLEdBQUd3YixRQUFRLENBQUM1VyxNQUFNO01BQy9CLElBQU1nVSxhQUFhLEdBQUc0QyxRQUFRLENBQUN4SyxRQUFRLElBQUksRUFBRTtNQUM3QyxJQUFNNkwsY0FBYyxHQUFHLElBQUksQ0FBQ0MsYUFBYSxDQUFDbEUsYUFBYSxDQUFDO01BQ3hELElBQU03SCxRQUFRLEdBQUcvUSxPQUFPLENBQUM0QyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtNQUNwRCxJQUFNbWEsU0FBUyxHQUFHLElBQUksQ0FBQ0QsYUFBYSxDQUFDL0wsUUFBUSxDQUFDO01BQzlDLElBQU1pTSxvQkFBb0IsR0FBRzdWLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDMlYsU0FBUyxDQUFDLENBQUN2RCxNQUFNLENBQUMsVUFBQ3hNLEdBQUc7UUFBQSxPQUFLNlAsY0FBYyxDQUFDN1AsR0FBRyxDQUFDLEtBQUtqRCxTQUFTLElBQUk4UyxjQUFjLENBQUM3UCxHQUFHLENBQUMsS0FBSytQLFNBQVMsQ0FBQy9QLEdBQUcsQ0FBQztNQUFBLEVBQUM7TUFDaEosSUFBTWlRLGFBQWEsR0FBRzlWLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDeVYsY0FBYyxDQUFDLENBQUNyRCxNQUFNLENBQUMsVUFBQ3hNLEdBQUc7UUFBQSxPQUFLLENBQUMrUCxTQUFTLENBQUMvUCxHQUFHLENBQUM7TUFBQSxFQUFDO01BQ2xGZ1Esb0JBQW9CLENBQUNyVixPQUFPLENBQUMsVUFBQ3ZELEtBQUssRUFBSztRQUNwQ3NTLGNBQWMsQ0FBQ3dHLFFBQVEsQ0FBQzlZLEtBQUssRUFBRTJZLFNBQVMsQ0FBQzNZLEtBQUssQ0FBQyxFQUFFeVksY0FBYyxDQUFDelksS0FBSyxDQUFDLEtBQUsyRixTQUFTLEdBQUcsSUFBSSxHQUFHOFMsY0FBYyxDQUFDelksS0FBSyxDQUFDLENBQUM7TUFDeEgsQ0FBQyxDQUFDO01BQ0Y2WSxhQUFhLENBQUN0VixPQUFPLENBQUMsVUFBQ3ZELEtBQUssRUFBSztRQUM3QnNTLGNBQWMsQ0FBQ3lHLFdBQVcsQ0FBQy9ZLEtBQUssRUFBRXlZLGNBQWMsQ0FBQ3pZLEtBQUssQ0FBQyxDQUFDO01BQzVELENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsd0NBQStCb1gsUUFBUSxFQUFFOUUsY0FBYyxFQUFFO01BQ3JELElBQU1tRCxhQUFhLEdBQUcyQixRQUFRLENBQUMzQixhQUFhO01BQzVDLElBQU03WixPQUFPLEdBQUd3YixRQUFRLENBQUM1VyxNQUFNO01BQy9CLElBQUlvTSxRQUFRLEdBQUd3SyxRQUFRLENBQUN4SyxRQUFRO01BQ2hDLElBQUlELFFBQVEsR0FBRy9RLE9BQU8sQ0FBQzRDLFlBQVksQ0FBQ2lYLGFBQWEsQ0FBQztNQUNsRCxJQUFJN0ksUUFBUSxLQUFLNkksYUFBYSxFQUFFO1FBQzVCN0ksUUFBUSxHQUFHLEVBQUU7TUFDakI7TUFDQSxJQUFJRCxRQUFRLEtBQUs4SSxhQUFhLEVBQUU7UUFDNUI5SSxRQUFRLEdBQUcsRUFBRTtNQUNqQjtNQUNBLElBQUksQ0FBQy9RLE9BQU8sQ0FBQzhJLFlBQVksQ0FBQytRLGFBQWEsQ0FBQyxFQUFFO1FBQ3RDLElBQUk3SSxRQUFRLEtBQUssSUFBSSxFQUFFO1VBQ25CO1FBQ0o7UUFDQTBGLGNBQWMsQ0FBQ3BJLGVBQWUsQ0FBQ3VMLGFBQWEsRUFBRTJCLFFBQVEsQ0FBQ3hLLFFBQVEsQ0FBQztRQUNoRTtNQUNKO01BQ0EsSUFBSUQsUUFBUSxLQUFLQyxRQUFRLEVBQUU7UUFDdkI7TUFDSjtNQUNBMEYsY0FBYyxDQUFDMEcsWUFBWSxDQUFDdkQsYUFBYSxFQUFFN1osT0FBTyxDQUFDNEMsWUFBWSxDQUFDaVgsYUFBYSxDQUFDLEVBQUUyQixRQUFRLENBQUN4SyxRQUFRLENBQUM7SUFDdEc7RUFBQztJQUFBO0lBQUEsT0FDRCx1QkFBY3FNLE1BQU0sRUFBRTtNQUNsQixJQUFNQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO01BQ3RCRCxNQUFNLENBQUN4VixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNGLE9BQU8sQ0FBQyxVQUFDdkQsS0FBSyxFQUFLO1FBQ2pDLElBQU1xRCxLQUFLLEdBQUdyRCxLQUFLLENBQUN5RCxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzlCLElBQUlKLEtBQUssQ0FBQ2xCLE1BQU0sS0FBSyxDQUFDLEVBQUU7VUFDcEI7UUFDSjtRQUNBLElBQU1nWCxRQUFRLEdBQUc5VixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNQLElBQUksRUFBRTtRQUNoQ29XLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDLEdBQUc5VixLQUFLLENBQUNpRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUN2RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUNqQixJQUFJLEVBQUU7TUFDM0QsQ0FBQyxDQUFDO01BQ0YsT0FBT29XLFdBQVc7SUFDdEI7RUFBQztJQUFBO0lBQUEsT0FDRCxxQ0FBNEJ0ZCxPQUFPLEVBQUU7TUFDakMsT0FBT0EsT0FBTyxDQUFDd2QsT0FBTyxLQUFLLE1BQU0sSUFBSXhkLE9BQU8sQ0FBQzRDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSywwQkFBMEI7SUFDckc7RUFBQztFQUFBO0FBQUE7QUFBQSxJQUdDNmEscUJBQXFCLDZCQUN2QiwrQkFBWWpULFNBQVMsRUFBRWtULGFBQWEsRUFBRTtFQUFBO0VBQ2xDLElBQUksQ0FBQ2xULFNBQVMsR0FBR0EsU0FBUztFQUMxQixJQUFJLENBQUNrVCxhQUFhLEdBQUdBLGFBQWE7QUFDdEMsQ0FBQztBQUFBLElBRUNDLFNBQVM7RUFDWCxtQkFBWTNkLE9BQU8sRUFBRThFLElBQUksRUFBRXlILEtBQUssRUFBRXFSLFNBQVMsRUFBRUMsZUFBZSxFQUFFQyxXQUFXLEVBQUVsTSxFQUFFLEVBQUVtTSxPQUFPLEVBQUVDLGFBQWEsRUFBRTtJQUFBO0lBQUE7SUFDbkcsSUFBSSxDQUFDQyxlQUFlLEdBQUcsR0FBRztJQUMxQixJQUFJLENBQUNDLGNBQWMsR0FBRyxJQUFJO0lBQzFCLElBQUksQ0FBQ0MsY0FBYyxHQUFHLEVBQUU7SUFDeEIsSUFBSSxDQUFDQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUcsS0FBSztJQUM3QixJQUFJLENBQUNDLHNCQUFzQixHQUFHLElBQUk7SUFDbEMsSUFBSSxDQUFDbEosUUFBUSxHQUFHLElBQUlXLEdBQUcsRUFBRTtJQUN6QixJQUFJLENBQUNyRCxNQUFNLEdBQUcsSUFBSTtJQUNsQixJQUFJLENBQUMxUyxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDOEUsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQytZLGVBQWUsR0FBR0EsZUFBZTtJQUN0QyxJQUFJLENBQUNFLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNDLGFBQWEsR0FBR0EsYUFBYTtJQUNsQyxJQUFJLENBQUNwTSxFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUNrTSxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDRixTQUFTLEdBQUcsSUFBSTdILEdBQUcsRUFBRTtJQUMxQjZILFNBQVMsQ0FBQ2pXLE9BQU8sQ0FBQyxVQUFDNFcsUUFBUSxFQUFLO01BQzVCLElBQUlDLEVBQUU7TUFDTixJQUFJLENBQUMsTUFBSSxDQUFDWixTQUFTLENBQUNwSCxHQUFHLENBQUMrSCxRQUFRLENBQUN2YSxLQUFLLENBQUMsRUFBRTtRQUNyQyxNQUFJLENBQUM0WixTQUFTLENBQUM1SCxHQUFHLENBQUN1SSxRQUFRLENBQUN2YSxLQUFLLEVBQUUsRUFBRSxDQUFDO01BQzFDO01BQ0EsQ0FBQ3dhLEVBQUUsR0FBRyxNQUFJLENBQUNaLFNBQVMsQ0FBQ2xWLEdBQUcsQ0FBQzZWLFFBQVEsQ0FBQ3ZhLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSXdhLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EsRUFBRSxDQUFDN1gsSUFBSSxDQUFDNFgsUUFBUSxDQUFDOVgsTUFBTSxDQUFDO0lBQzNHLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQzRCLFVBQVUsR0FBRyxJQUFJaUUsVUFBVSxDQUFDQyxLQUFLLENBQUM7SUFDdkMsSUFBSSxDQUFDa1MscUJBQXFCLEdBQUcsSUFBSXpILHFCQUFxQixDQUFDLElBQUksRUFBRWdILGFBQWEsQ0FBQztJQUMzRSxJQUFJLENBQUM1RixLQUFLLEdBQUcsSUFBSUQsV0FBVyxFQUFFO0lBQzlCLElBQUksQ0FBQ3VHLFlBQVksRUFBRTtJQUNuQixJQUFJLENBQUM3SSx1QkFBdUIsR0FBRyxJQUFJdUUsdUJBQXVCLENBQUMsSUFBSSxDQUFDcGEsT0FBTyxFQUFFLFVBQUNBLE9BQU87TUFBQSxPQUFLdUssNkJBQTZCLENBQUN2SyxPQUFPLEVBQUUsTUFBSSxDQUFDO0lBQUEsRUFBQztJQUNuSSxJQUFJLENBQUM2Vix1QkFBdUIsQ0FBQzhJLEtBQUssRUFBRTtJQUNwQyxJQUFJLENBQUNDLDJCQUEyQixHQUFHLElBQUksQ0FBQ0EsMkJBQTJCLENBQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDO0VBQ2xGO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsc0JBQWFnRCxPQUFPLEVBQUU7TUFDbEIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBLE9BQU87SUFDMUI7RUFBQztJQUFBO0lBQUEsT0FDRCxtQkFBVWMsTUFBTSxFQUFFO01BQ2RBLE1BQU0sQ0FBQ0MsaUJBQWlCLENBQUMsSUFBSSxDQUFDO0lBQ2xDO0VBQUM7SUFBQTtJQUFBLE9BQ0QsbUJBQVU7TUFDTixJQUFJLENBQUMxRyxLQUFLLENBQUMyRyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztNQUN2QyxJQUFJLENBQUNOLHFCQUFxQixDQUFDTyxRQUFRLEVBQUU7TUFDckMsSUFBSSxDQUFDbkosdUJBQXVCLENBQUM4SSxLQUFLLEVBQUU7SUFDeEM7RUFBQztJQUFBO0lBQUEsT0FDRCxzQkFBYTtNQUNULElBQUksQ0FBQ3ZHLEtBQUssQ0FBQzJHLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDO01BQzFDLElBQUksQ0FBQ0UsMkJBQTJCLEVBQUU7TUFDbEMsSUFBSSxDQUFDUixxQkFBcUIsQ0FBQ1MsVUFBVSxFQUFFO01BQ3ZDLElBQUksQ0FBQ3JKLHVCQUF1QixDQUFDc0osSUFBSSxFQUFFO0lBQ3ZDO0VBQUM7SUFBQTtJQUFBLE9BQ0QsWUFBRzlHLFFBQVEsRUFBRWxCLFFBQVEsRUFBRTtNQUNuQixJQUFJLENBQUNpQixLQUFLLENBQUNnSCxRQUFRLENBQUMvRyxRQUFRLEVBQUVsQixRQUFRLENBQUM7SUFDM0M7RUFBQztJQUFBO0lBQUEsT0FDRCxhQUFJa0IsUUFBUSxFQUFFbEIsUUFBUSxFQUFFO01BQ3BCLElBQUksQ0FBQ2lCLEtBQUssQ0FBQ2lILFVBQVUsQ0FBQ2hILFFBQVEsRUFBRWxCLFFBQVEsQ0FBQztJQUM3QztFQUFDO0lBQUE7SUFBQSxPQUNELGFBQUlwUCxLQUFLLEVBQUU1RCxLQUFLLEVBQXNDO01BQUEsSUFBcENtYixRQUFRLHVFQUFHLEtBQUs7TUFBQSxJQUFFQyxRQUFRLHVFQUFHLEtBQUs7TUFDaEQsSUFBTUMsT0FBTyxHQUFHLElBQUksQ0FBQ0Msa0JBQWtCO01BQ3ZDLElBQU1qSSxTQUFTLEdBQUcxUCxrQkFBa0IsQ0FBQ0MsS0FBSyxDQUFDO01BQzNDLElBQU0yWCxTQUFTLEdBQUcsSUFBSSxDQUFDclgsVUFBVSxDQUFDMk4sR0FBRyxDQUFDd0IsU0FBUyxFQUFFclQsS0FBSyxDQUFDO01BQ3ZELElBQUksQ0FBQ2lVLEtBQUssQ0FBQzJHLFdBQVcsQ0FBQyxXQUFXLEVBQUVoWCxLQUFLLEVBQUU1RCxLQUFLLEVBQUUsSUFBSSxDQUFDO01BQ3ZELElBQUksQ0FBQ3NhLHFCQUFxQixDQUFDaEgsaUJBQWlCLENBQUNELFNBQVMsQ0FBQztNQUN2RCxJQUFJOEgsUUFBUSxJQUFJSSxTQUFTLEVBQUU7UUFDdkIsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ0osUUFBUSxDQUFDO01BQ3hDO01BQ0EsT0FBT0MsT0FBTztJQUNsQjtFQUFDO0lBQUE7SUFBQSxPQUNELGlCQUFRelgsS0FBSyxFQUFFO01BQ1gsSUFBTXlQLFNBQVMsR0FBRzFQLGtCQUFrQixDQUFDQyxLQUFLLENBQUM7TUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQ00sVUFBVSxDQUFDbU8sR0FBRyxDQUFDZ0IsU0FBUyxDQUFDLEVBQUU7UUFDakMsTUFBTSxJQUFJaFIsS0FBSywyQkFBbUJ1QixLQUFLLFNBQUs7TUFDaEQ7TUFDQSxPQUFPLElBQUksQ0FBQ00sVUFBVSxDQUFDSyxHQUFHLENBQUM4TyxTQUFTLENBQUM7SUFDekM7RUFBQztJQUFBO0lBQUEsT0FDRCxnQkFBTzFTLElBQUksRUFBK0I7TUFBQSxJQUE3QjhCLElBQUksdUVBQUcsQ0FBQyxDQUFDO01BQUEsSUFBRTJZLFFBQVEsdUVBQUcsS0FBSztNQUNwQyxJQUFNQyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxrQkFBa0I7TUFDdkMsSUFBSSxDQUFDdEIsY0FBYyxDQUFDeFgsSUFBSSxDQUFDO1FBQ3JCN0IsSUFBSSxFQUFKQSxJQUFJO1FBQ0o4QixJQUFJLEVBQUpBO01BQ0osQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDK1kscUJBQXFCLENBQUNKLFFBQVEsQ0FBQztNQUNwQyxPQUFPQyxPQUFPO0lBQ2xCO0VBQUM7SUFBQTtJQUFBLE9BQ0QsZUFBTXhTLEdBQUcsRUFBRTRTLEtBQUssRUFBRTtNQUNkLElBQUksQ0FBQ3hCLFlBQVksQ0FBQ3BSLEdBQUcsQ0FBQyxHQUFHNFMsS0FBSztJQUNsQztFQUFDO0lBQUE7SUFBQSxPQUNELGtCQUFTO01BQ0wsSUFBTUosT0FBTyxHQUFHLElBQUksQ0FBQ0Msa0JBQWtCO01BQ3ZDLElBQUksQ0FBQ0ksa0JBQWtCLEVBQUU7TUFDekIsT0FBT0wsT0FBTztJQUNsQjtFQUFDO0lBQUE7SUFBQSxPQUNELDZCQUFvQjtNQUNoQixPQUFPLElBQUksQ0FBQ2YscUJBQXFCLENBQUNxQixpQkFBaUIsRUFBRTtJQUN6RDtFQUFDO0lBQUE7SUFBQSxPQUNELGtCQUFTdlUsS0FBSyxFQUFzQjtNQUFBLElBQXBCbVMsYUFBYSx1RUFBRyxFQUFFO01BQzlCLElBQUksQ0FBQ25TLEtBQUssQ0FBQ3FHLEVBQUUsRUFBRTtRQUNYLE1BQU0sSUFBSXBMLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQztNQUMzRDtNQUNBLElBQUksQ0FBQzRPLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDekssS0FBSyxDQUFDcUcsRUFBRSxFQUFFLElBQUk2TCxxQkFBcUIsQ0FBQ2xTLEtBQUssRUFBRW1TLGFBQWEsQ0FBQyxDQUFDO01BQzVFblMsS0FBSyxDQUFDbUgsTUFBTSxHQUFHLElBQUk7TUFDbkJuSCxLQUFLLENBQUN3VSxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQ25CLDJCQUEyQixDQUFDO0lBQzNEO0VBQUM7SUFBQTtJQUFBLE9BQ0QscUJBQVlyVCxLQUFLLEVBQUU7TUFDZixJQUFJLENBQUNBLEtBQUssQ0FBQ3FHLEVBQUUsRUFBRTtRQUNYLE1BQU0sSUFBSXBMLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQztNQUMzRDtNQUNBLElBQUksQ0FBQzRPLFFBQVEsVUFBTyxDQUFDN0osS0FBSyxDQUFDcUcsRUFBRSxDQUFDO01BQzlCckcsS0FBSyxDQUFDbUgsTUFBTSxHQUFHLElBQUk7TUFDbkJuSCxLQUFLLENBQUN5VSxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQ3BCLDJCQUEyQixDQUFDO0lBQzVEO0VBQUM7SUFBQTtJQUFBLE9BQ0QscUJBQVk7TUFDUixPQUFPLElBQUksQ0FBQ2xNLE1BQU07SUFDdEI7RUFBQztJQUFBO0lBQUEsT0FDRCx1QkFBYztNQUNWLElBQU0wQyxRQUFRLEdBQUcsSUFBSVcsR0FBRyxFQUFFO01BQzFCLElBQUksQ0FBQ1gsUUFBUSxDQUFDek4sT0FBTyxDQUFDLFVBQUNpRCxjQUFjLEVBQUVnSCxFQUFFLEVBQUs7UUFDMUN3RCxRQUFRLENBQUNZLEdBQUcsQ0FBQ3BFLEVBQUUsRUFBRWhILGNBQWMsQ0FBQ0osU0FBUyxDQUFDO01BQzlDLENBQUMsQ0FBQztNQUNGLE9BQU80SyxRQUFRO0lBQ25CO0VBQUM7SUFBQTtJQUFBLE9BQ0QsY0FBS3RRLElBQUksRUFBRXZCLElBQUksRUFBc0M7TUFBQSxJQUFwQzBjLDJCQUEyQix1RUFBRyxJQUFJO01BQy9DLE9BQU8sSUFBSSxDQUFDQyxXQUFXLENBQUNwYixJQUFJLEVBQUV2QixJQUFJLEVBQUUsS0FBSyxFQUFFMGMsMkJBQTJCLENBQUM7SUFDM0U7RUFBQztJQUFBO0lBQUEsT0FDRCxnQkFBT25iLElBQUksRUFBRXZCLElBQUksRUFBc0M7TUFBQSxJQUFwQzBjLDJCQUEyQix1RUFBRyxJQUFJO01BQ2pELE9BQU8sSUFBSSxDQUFDQyxXQUFXLENBQUNwYixJQUFJLEVBQUV2QixJQUFJLEVBQUUsSUFBSSxFQUFFMGMsMkJBQTJCLENBQUM7SUFDMUU7RUFBQztJQUFBO0lBQUEsT0FDRCxrQkFBU25iLElBQUksRUFBRXZCLElBQUksRUFBRTtNQUNqQixPQUFPLElBQUksQ0FBQzRjLE1BQU0sQ0FBQ3JiLElBQUksRUFBRXZCLElBQUksQ0FBQztJQUNsQztFQUFDO0lBQUE7SUFBQSxPQUNELHFCQUFZdUIsSUFBSSxFQUFFdkIsSUFBSSxFQUFFNmMsTUFBTSxFQUFFQyxZQUFZLEVBQUU7TUFDMUMsSUFBTUMsVUFBVSxHQUFHLElBQUksQ0FBQ3pDLGVBQWUsQ0FBQyxJQUFJLEVBQUV1QyxNQUFNLEVBQUVDLFlBQVksQ0FBQztNQUNuRUMsVUFBVSxDQUFDM1ksT0FBTyxDQUFDLFVBQUM2QyxTQUFTLEVBQUs7UUFDOUJBLFNBQVMsQ0FBQzJWLE1BQU0sQ0FBQ3JiLElBQUksRUFBRXZCLElBQUksQ0FBQztNQUNoQyxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUE7SUFBQSxPQUNELGdCQUFPdUIsSUFBSSxFQUFFdkIsSUFBSSxFQUFFO01BQUE7TUFDZixJQUFJLENBQUMsSUFBSSxDQUFDcWEsU0FBUyxDQUFDcEgsR0FBRyxDQUFDMVIsSUFBSSxDQUFDLEVBQUU7UUFDM0I7TUFDSjtNQUNBLElBQU15YixPQUFPLEdBQUcsSUFBSSxDQUFDM0MsU0FBUyxDQUFDbFYsR0FBRyxDQUFDNUQsSUFBSSxDQUFDLElBQUksRUFBRTtNQUM5Q3liLE9BQU8sQ0FBQzVZLE9BQU8sQ0FBQyxVQUFDbEIsTUFBTSxFQUFLO1FBQ3hCLE1BQUksQ0FBQ0EsTUFBTSxDQUFDQSxNQUFNLEVBQUVsRCxJQUFJLEVBQUUsQ0FBQyxDQUFDO01BQ2hDLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTtJQUFBLE9BQ0QsOENBQXFDaU0sSUFBSSxFQUFFO01BQ3ZDLElBQU1qRCxLQUFLLEdBQUcsSUFBSSxDQUFDeVIsYUFBYSxDQUFDd0MsaUJBQWlCLENBQUNoUixJQUFJLENBQUM7TUFDeEQsSUFBSWpELEtBQUssS0FBSyxJQUFJLEVBQUU7UUFDaEI7TUFDSjtNQUNBLElBQU1tVCxTQUFTLEdBQUcsSUFBSSxDQUFDclgsVUFBVSxDQUFDb1ksdUJBQXVCLENBQUNsVSxLQUFLLENBQUM7TUFDaEUsSUFBTXVSLFdBQVcsR0FBR3RPLElBQUksQ0FBQ3RNLE9BQU8sQ0FBQ3dkLG9CQUFvQjtNQUNyRCxJQUFJNUMsV0FBVyxLQUFLL1QsU0FBUyxFQUFFO1FBQzNCLElBQUksQ0FBQytULFdBQVcsR0FBR0EsV0FBVztNQUNsQztNQUNBLElBQUk0QixTQUFTLEVBQUU7UUFDWCxJQUFJLENBQUNpQixNQUFNLEVBQUU7TUFDakI7SUFDSjtFQUFDO0lBQUE7SUFBQSxPQUNELHFDQUE0Qm5KLFNBQVMsRUFBRXJULEtBQUssRUFBRXlHLGNBQWMsRUFBRTtNQUFBO01BQzFELElBQUksQ0FBQ0EsY0FBYyxDQUFDZ0gsRUFBRSxFQUFFO1FBQ3BCLE1BQU0sSUFBSXBMLEtBQUssQ0FBQyxZQUFZLENBQUM7TUFDakM7TUFDQSxJQUFNb2EsWUFBWSxHQUFHLElBQUksQ0FBQ3hMLFFBQVEsQ0FBQzFNLEdBQUcsQ0FBQ2tDLGNBQWMsQ0FBQ2dILEVBQUUsQ0FBQztNQUN6RCxJQUFJLENBQUNnUCxZQUFZLEVBQUU7UUFDZixNQUFNLElBQUlwYSxLQUFLLENBQUMsZUFBZSxDQUFDO01BQ3BDO01BQ0FvYSxZQUFZLENBQUNsRCxhQUFhLENBQUMvVixPQUFPLENBQUMsVUFBQ2taLFlBQVksRUFBSztRQUNqRCxJQUFNQyxjQUFjLEdBQUdELFlBQVksQ0FBQ0UsY0FBYyxJQUFJLE9BQU87UUFDN0QsSUFBSUQsY0FBYyxLQUFLdEosU0FBUyxFQUFFO1VBQzlCO1FBQ0o7UUFDQSxNQUFJLENBQUN4QixHQUFHLENBQUM2SyxZQUFZLENBQUNySixTQUFTLEVBQUVyVCxLQUFLLEVBQUUwYyxZQUFZLENBQUNHLFlBQVksRUFBRUgsWUFBWSxDQUFDdEIsUUFBUSxDQUFDO01BQzdGLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTtJQUFBLE9BQ0QsMEJBQWlCO01BQ2IsT0FBTyxPQUFPMEIsS0FBSyxLQUFLLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQ2poQixPQUFPLENBQUNxSyxPQUFPLENBQUMsc0JBQXNCLENBQUM7SUFDeEY7RUFBQztJQUFBO0lBQUEsT0FDRCw4QkFBcUI7TUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQzZULGNBQWMsRUFBRTtRQUN0QixJQUFJLENBQUNnRCxjQUFjLEVBQUU7UUFDckI7TUFDSjtNQUNBLElBQUksQ0FBQzdDLGdCQUFnQixHQUFHLElBQUk7SUFDaEM7RUFBQztJQUFBO0lBQUEsT0FDRCwwQkFBaUI7TUFBQTtNQUNiLElBQU04QyxrQkFBa0IsR0FBRyxJQUFJLENBQUNDLHlCQUF5QjtNQUN6RCxJQUFJLENBQUMxQyxZQUFZLEVBQUU7TUFDbkIsSUFBSSxDQUFDRCxxQkFBcUIsQ0FBQzNHLG1CQUFtQixFQUFFO01BQ2hELElBQU11SixXQUFXLEdBQUcsQ0FBQyxDQUFDO01BQ3RCLHFDQUEyQmxhLE1BQU0sQ0FBQzRGLE9BQU8sQ0FBQyxJQUFJLENBQUNxUixZQUFZLENBQUMsd0NBQUU7UUFBekQ7VUFBT3BSLEdBQUc7VUFBRTdJLEtBQUs7UUFDbEIsSUFBSUEsS0FBSyxDQUFDVSxLQUFLLEVBQUU7VUFDYndjLFdBQVcsQ0FBQ3JVLEdBQUcsQ0FBQyxHQUFHN0ksS0FBSyxDQUFDVSxLQUFLO1FBQ2xDO01BQ0o7TUFDQSxJQUFJLENBQUNxWixjQUFjLEdBQUcsSUFBSSxDQUFDSCxPQUFPLENBQUN1RCxXQUFXLENBQUMsSUFBSSxDQUFDalosVUFBVSxDQUFDa1osZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLENBQUNwRCxjQUFjLEVBQUUsSUFBSSxDQUFDOVYsVUFBVSxDQUFDbVosYUFBYSxFQUFFLEVBQUUsSUFBSSxDQUFDQyx1QkFBdUIsRUFBRSxFQUFFLElBQUksQ0FBQ3BaLFVBQVUsQ0FBQ3FaLHlCQUF5QixFQUFFLEVBQUVMLFdBQVcsQ0FBQztNQUNsTyxJQUFJLENBQUNqSixLQUFLLENBQUMyRyxXQUFXLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDL2UsT0FBTyxFQUFFLElBQUksQ0FBQ2tlLGNBQWMsQ0FBQztNQUNsRixJQUFJLENBQUNDLGNBQWMsR0FBRyxFQUFFO01BQ3hCLElBQUksQ0FBQzlWLFVBQVUsQ0FBQ3NaLHdCQUF3QixFQUFFO01BQzFDLElBQUksQ0FBQ3RELGdCQUFnQixHQUFHLEtBQUs7TUFDN0IsSUFBSSxDQUFDSCxjQUFjLENBQUNzQixPQUFPLENBQUNwYyxJQUFJO1FBQUEsdUVBQUMsa0JBQU9DLFFBQVE7VUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtrQkFDNUMsTUFBSSxDQUFDNmEsY0FBYyxHQUFHLElBQUk7a0JBQ3BCMEQsZUFBZSxHQUFHLElBQUl0SixlQUFlLENBQUNqVixRQUFRLENBQUM7a0JBQUE7a0JBQUEsT0FDbEN1ZSxlQUFlLENBQUNDLE9BQU8sRUFBRTtnQkFBQTtrQkFBdEMzVyxJQUFJO2tCQUNWLCtCQUFvQi9ELE1BQU0sQ0FBQytRLE1BQU0sQ0FBQyxNQUFJLENBQUNrRyxZQUFZLENBQUMsc0NBQUU7b0JBQTNDd0IsS0FBSztvQkFDWkEsS0FBSyxDQUFDemIsS0FBSyxHQUFHLEVBQUU7a0JBQ3BCO2tCQUNNckIsT0FBTyxHQUFHOGUsZUFBZSxDQUFDdmUsUUFBUSxDQUFDUCxPQUFPO2tCQUFBLE1BQzVDQSxPQUFPLENBQUM0RixHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUsscUNBQXFDLElBQUksQ0FBQzVGLE9BQU8sQ0FBQzRGLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztvQkFBQTtvQkFBQTtrQkFBQTtrQkFDbEdvWixRQUFRLEdBQUc7b0JBQUVDLFlBQVksRUFBRTtrQkFBSyxDQUFDO2tCQUN2QyxNQUFJLENBQUMxWixVQUFVLENBQUMyWiwyQkFBMkIsRUFBRTtrQkFDN0MsTUFBSSxDQUFDNUosS0FBSyxDQUFDMkcsV0FBVyxDQUFDLGdCQUFnQixFQUFFNkMsZUFBZSxFQUFFRSxRQUFRLENBQUM7a0JBQ25FLElBQUlBLFFBQVEsQ0FBQ0MsWUFBWSxFQUFFO29CQUN2QixNQUFJLENBQUNFLFdBQVcsQ0FBQy9XLElBQUksQ0FBQztrQkFDMUI7a0JBQ0FpVyxrQkFBa0IsQ0FBQ1MsZUFBZSxDQUFDO2tCQUFDLGtDQUM3QnZlLFFBQVE7Z0JBQUE7a0JBRW5CLE1BQUksQ0FBQzZlLGVBQWUsQ0FBQ2hYLElBQUksRUFBRTBXLGVBQWUsQ0FBQztrQkFDM0NULGtCQUFrQixDQUFDUyxlQUFlLENBQUM7a0JBQ25DLElBQUksTUFBSSxDQUFDdkQsZ0JBQWdCLEVBQUU7b0JBQ3ZCLE1BQUksQ0FBQ0EsZ0JBQWdCLEdBQUcsS0FBSztvQkFDN0IsTUFBSSxDQUFDNkMsY0FBYyxFQUFFO2tCQUN6QjtrQkFBQyxrQ0FDTTdkLFFBQVE7Z0JBQUE7Z0JBQUE7a0JBQUE7Y0FBQTtZQUFBO1VBQUE7UUFBQSxDQUNsQjtRQUFBO1VBQUE7UUFBQTtNQUFBLElBQUM7SUFDTjtFQUFDO0lBQUE7SUFBQSxPQUNELHlCQUFnQjZILElBQUksRUFBRTBXLGVBQWUsRUFBRTtNQUFBO01BQ25DLElBQU1FLFFBQVEsR0FBRztRQUFFZCxZQUFZLEVBQUU7TUFBSyxDQUFDO01BQ3ZDLElBQUksQ0FBQzVJLEtBQUssQ0FBQzJHLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTdULElBQUksRUFBRTBXLGVBQWUsRUFBRUUsUUFBUSxDQUFDO01BQ3pFLElBQUksQ0FBQ0EsUUFBUSxDQUFDZCxZQUFZLEVBQUU7UUFDeEI7TUFDSjtNQUNBLElBQUlZLGVBQWUsQ0FBQ3ZlLFFBQVEsQ0FBQ1AsT0FBTyxDQUFDNEYsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ2xELElBQUksSUFBSSxDQUFDeVosY0FBYyxFQUFFLEVBQUU7VUFDdkJsQixLQUFLLENBQUNtQixLQUFLLENBQUNSLGVBQWUsQ0FBQ3ZlLFFBQVEsQ0FBQ1AsT0FBTyxDQUFDNEYsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsTUFDSTtVQUNEMk4sTUFBTSxDQUFDZ00sUUFBUSxDQUFDQyxJQUFJLEdBQUdWLGVBQWUsQ0FBQ3ZlLFFBQVEsQ0FBQ1AsT0FBTyxDQUFDNEYsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7UUFDakY7UUFDQTtNQUNKO01BQ0EsSUFBSSxDQUFDMFAsS0FBSyxDQUFDMkcsV0FBVyxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQy9lLE9BQU8sQ0FBQztNQUM5RCxJQUFNdWlCLG1CQUFtQixHQUFHLENBQUMsQ0FBQztNQUM5QnBiLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ2lCLFVBQVUsQ0FBQ21aLGFBQWEsRUFBRSxDQUFDLENBQUM3WixPQUFPLENBQUMsVUFBQzZQLFNBQVMsRUFBSztRQUNoRStLLG1CQUFtQixDQUFDL0ssU0FBUyxDQUFDLEdBQUcsT0FBSSxDQUFDblAsVUFBVSxDQUFDSyxHQUFHLENBQUM4TyxTQUFTLENBQUM7TUFDbkUsQ0FBQyxDQUFDO01BQ0YsSUFBSTFNLFVBQVU7TUFDZCxJQUFJO1FBQ0FBLFVBQVUsR0FBR0csYUFBYSxDQUFDQyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDSixVQUFVLENBQUMwWCxPQUFPLENBQUMseUJBQXlCLENBQUMsRUFBRTtVQUNoRCxNQUFNLElBQUloYyxLQUFLLENBQUMsMEVBQTBFLENBQUM7UUFDL0Y7TUFDSixDQUFDLENBQ0QsT0FBTzdDLEtBQUssRUFBRTtRQUNWdkQsT0FBTyxDQUFDdUQsS0FBSyxDQUFDLHVEQUF1RCxDQUFDO1FBQ3RFLE1BQU1BLEtBQUs7TUFDZjtNQUNBLElBQU04ZSxRQUFRLEdBQUcsSUFBSSxDQUFDekUsYUFBYSxDQUFDd0MsaUJBQWlCLENBQUMxVixVQUFVLENBQUM7TUFDakUsSUFBSSxDQUFDekMsVUFBVSxDQUFDcWEsb0JBQW9CLENBQUNELFFBQVEsQ0FBQztNQUM5QyxJQUFNRSxZQUFZLEdBQUcsSUFBSSxDQUFDM0UsYUFBYSxDQUFDNEUsZUFBZSxDQUFDOVgsVUFBVSxDQUFDO01BQ25FLElBQU0rWCx1QkFBdUIsR0FBRyxJQUFJLENBQUM3RSxhQUFhLENBQUM4RSwwQkFBMEIsQ0FBQ2hZLFVBQVUsQ0FBQztNQUN6RixJQUFJLENBQUMrSyx1QkFBdUIsQ0FBQ2tOLG9CQUFvQixFQUFFO01BQ25ELElBQUksQ0FBQ2xOLHVCQUF1QixDQUFDc0osSUFBSSxFQUFFO01BQ25DOUosZUFBZSxDQUFDLElBQUksQ0FBQ3JWLE9BQU8sRUFBRThLLFVBQVUsRUFBRSxJQUFJLENBQUMyVCxxQkFBcUIsQ0FBQ3VFLGlCQUFpQixFQUFFLEVBQUUsVUFBQ2hqQixPQUFPO1FBQUEsT0FBS29JLG1CQUFtQixDQUFDcEksT0FBTyxFQUFFLE9BQUksQ0FBQ3FJLFVBQVUsQ0FBQztNQUFBLEdBQUVNLEtBQUssQ0FBQ1EsSUFBSSxDQUFDLElBQUksQ0FBQ3dCLFdBQVcsRUFBRSxDQUFDdU4sTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUM4RixhQUFhLENBQUNpRix5QkFBeUIsRUFBRSxJQUFJLENBQUNqRixhQUFhLENBQUNwSSxpQkFBaUIsRUFBRSxJQUFJLENBQUNDLHVCQUF1QixDQUFDO01BQ2hULElBQUksQ0FBQ0EsdUJBQXVCLENBQUM4SSxLQUFLLEVBQUU7TUFDcEN4WCxNQUFNLENBQUNDLElBQUksQ0FBQ21iLG1CQUFtQixDQUFDLENBQUM1YSxPQUFPLENBQUMsVUFBQzZQLFNBQVMsRUFBSztRQUNwRCxPQUFJLENBQUNuUCxVQUFVLENBQUMyTixHQUFHLENBQUN3QixTQUFTLEVBQUUrSyxtQkFBbUIsQ0FBQy9LLFNBQVMsQ0FBQyxDQUFDO01BQ2xFLENBQUMsQ0FBQztNQUNGbUwsWUFBWSxDQUFDaGIsT0FBTyxDQUFDLGlCQUE0QztRQUFBLElBQXpDM0QsS0FBSyxTQUFMQSxLQUFLO1VBQUVULElBQUksU0FBSkEsSUFBSTtVQUFFcUIsTUFBTSxTQUFOQSxNQUFNO1VBQUVzZSxhQUFhLFNBQWJBLGFBQWE7UUFDdEQsSUFBSXRlLE1BQU0sS0FBSyxJQUFJLEVBQUU7VUFDakIsT0FBSSxDQUFDd2IsTUFBTSxDQUFDcGMsS0FBSyxFQUFFVCxJQUFJLEVBQUUyZixhQUFhLENBQUM7VUFDdkM7UUFDSjtRQUNBLElBQUl0ZSxNQUFNLEtBQUssTUFBTSxFQUFFO1VBQ25CLE9BQUksQ0FBQ3VlLFFBQVEsQ0FBQ25mLEtBQUssRUFBRVQsSUFBSSxDQUFDO1VBQzFCO1FBQ0o7UUFDQSxPQUFJLENBQUM2ZixJQUFJLENBQUNwZixLQUFLLEVBQUVULElBQUksRUFBRTJmLGFBQWEsQ0FBQztNQUN6QyxDQUFDLENBQUM7TUFDRkwsdUJBQXVCLENBQUNsYixPQUFPLENBQUMsaUJBQXdCO1FBQUEsSUFBckIzRCxLQUFLLFNBQUxBLEtBQUs7VUFBRXNCLE9BQU8sU0FBUEEsT0FBTztRQUM3QyxPQUFJLENBQUN0RixPQUFPLENBQUNrRSxhQUFhLENBQUMsSUFBSW1mLFdBQVcsQ0FBQ3JmLEtBQUssRUFBRTtVQUM5Q3dCLE1BQU0sRUFBRUYsT0FBTztVQUNmZ2UsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxDQUFDLENBQUM7TUFDUCxDQUFDLENBQUM7TUFDRixJQUFJLENBQUNsTCxLQUFLLENBQUMyRyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDO0lBQ25EO0VBQUM7SUFBQTtJQUFBLE9BQ0QsMkJBQWtCUSxRQUFRLEVBQUU7TUFDeEIsSUFBSUEsUUFBUSxLQUFLLElBQUksRUFBRTtRQUNuQixPQUFPLElBQUksQ0FBQ3RCLGVBQWU7TUFDL0I7TUFDQSxJQUFJc0IsUUFBUSxLQUFLLEtBQUssRUFBRTtRQUNwQixPQUFPLENBQUM7TUFDWjtNQUNBLE9BQU9BLFFBQVE7SUFDbkI7RUFBQztJQUFBO0lBQUEsT0FDRCx1Q0FBOEI7TUFDMUIsSUFBSSxJQUFJLENBQUNqQixzQkFBc0IsRUFBRTtRQUM3QmlGLFlBQVksQ0FBQyxJQUFJLENBQUNqRixzQkFBc0IsQ0FBQztRQUN6QyxJQUFJLENBQUNBLHNCQUFzQixHQUFHLElBQUk7TUFDdEM7SUFDSjtFQUFDO0lBQUE7SUFBQSxPQUNELCtCQUFzQmlCLFFBQVEsRUFBRTtNQUFBO01BQzVCLElBQUksQ0FBQ04sMkJBQTJCLEVBQUU7TUFDbEMsSUFBSSxDQUFDWCxzQkFBc0IsR0FBR2pJLE1BQU0sQ0FBQ21OLFVBQVUsQ0FBQyxZQUFNO1FBQ2xELE9BQUksQ0FBQzdDLE1BQU0sRUFBRTtNQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDOEMsaUJBQWlCLENBQUNsRSxRQUFRLENBQUMsQ0FBQztJQUN4QztFQUFDO0lBQUE7SUFBQSxPQUNELHFCQUFZclUsSUFBSSxFQUFFO01BQ2QsSUFBSXdZLEtBQUssR0FBR3BqQixRQUFRLENBQUNxakIsY0FBYyxDQUFDLHNCQUFzQixDQUFDO01BQzNELElBQUlELEtBQUssRUFBRTtRQUNQQSxLQUFLLENBQUNyWSxTQUFTLEdBQUcsRUFBRTtNQUN4QixDQUFDLE1BQ0k7UUFDRHFZLEtBQUssR0FBR3BqQixRQUFRLENBQUM4SyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3JDc1ksS0FBSyxDQUFDOVIsRUFBRSxHQUFHLHNCQUFzQjtRQUNqQzhSLEtBQUssQ0FBQ3RmLEtBQUssQ0FBQ3dmLE9BQU8sR0FBRyxNQUFNO1FBQzVCRixLQUFLLENBQUN0ZixLQUFLLENBQUN5ZixlQUFlLEdBQUcsbUJBQW1CO1FBQ2pESCxLQUFLLENBQUN0ZixLQUFLLENBQUMwZixNQUFNLEdBQUcsUUFBUTtRQUM3QkosS0FBSyxDQUFDdGYsS0FBSyxDQUFDMmYsUUFBUSxHQUFHLE9BQU87UUFDOUJMLEtBQUssQ0FBQ3RmLEtBQUssQ0FBQzRmLEdBQUcsR0FBRyxLQUFLO1FBQ3ZCTixLQUFLLENBQUN0ZixLQUFLLENBQUM2ZixNQUFNLEdBQUcsS0FBSztRQUMxQlAsS0FBSyxDQUFDdGYsS0FBSyxDQUFDOGYsSUFBSSxHQUFHLEtBQUs7UUFDeEJSLEtBQUssQ0FBQ3RmLEtBQUssQ0FBQytmLEtBQUssR0FBRyxLQUFLO1FBQ3pCVCxLQUFLLENBQUN0ZixLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO1FBQzVCcWYsS0FBSyxDQUFDdGYsS0FBSyxDQUFDZ2dCLGFBQWEsR0FBRyxRQUFRO01BQ3hDO01BQ0EsSUFBTUMsTUFBTSxHQUFHL2pCLFFBQVEsQ0FBQzhLLGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDL0NpWixNQUFNLENBQUNqZ0IsS0FBSyxDQUFDa2dCLFlBQVksR0FBRyxLQUFLO01BQ2pDRCxNQUFNLENBQUNqZ0IsS0FBSyxDQUFDbWdCLFFBQVEsR0FBRyxHQUFHO01BQzNCYixLQUFLLENBQUNwVCxXQUFXLENBQUMrVCxNQUFNLENBQUM7TUFDekIvakIsUUFBUSxDQUFDeUMsSUFBSSxDQUFDeWhCLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDO01BQzVCcGpCLFFBQVEsQ0FBQ3lDLElBQUksQ0FBQ3FCLEtBQUssQ0FBQ3FnQixRQUFRLEdBQUcsUUFBUTtNQUN2QyxJQUFJSixNQUFNLENBQUNLLGFBQWEsRUFBRTtRQUN0QkwsTUFBTSxDQUFDSyxhQUFhLENBQUNwa0IsUUFBUSxDQUFDcWtCLElBQUksRUFBRTtRQUNwQ04sTUFBTSxDQUFDSyxhQUFhLENBQUNwa0IsUUFBUSxDQUFDc2tCLEtBQUssQ0FBQzFaLElBQUksQ0FBQztRQUN6Q21aLE1BQU0sQ0FBQ0ssYUFBYSxDQUFDcGtCLFFBQVEsQ0FBQ3VrQixLQUFLLEVBQUU7TUFDekM7TUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVSxDQUFJcEIsS0FBSyxFQUFLO1FBQzFCLElBQUlBLEtBQUssRUFBRTtVQUNQQSxLQUFLLENBQUNqWSxTQUFTLEdBQUcsRUFBRTtRQUN4QjtRQUNBbkwsUUFBUSxDQUFDeUMsSUFBSSxDQUFDcUIsS0FBSyxDQUFDcWdCLFFBQVEsR0FBRyxTQUFTO01BQzVDLENBQUM7TUFDRGYsS0FBSyxDQUFDbGpCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUFBLE9BQU1za0IsVUFBVSxDQUFDcEIsS0FBSyxDQUFDO01BQUEsRUFBQztNQUN4REEsS0FBSyxDQUFDelYsWUFBWSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUM7TUFDbkN5VixLQUFLLENBQUNsakIsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUFnQyxDQUFDLEVBQUk7UUFDbkMsSUFBSUEsQ0FBQyxDQUFDd0ssR0FBRyxLQUFLLFFBQVEsRUFBRTtVQUNwQjhYLFVBQVUsQ0FBQ3BCLEtBQUssQ0FBQztRQUNyQjtNQUNKLENBQUMsQ0FBQztNQUNGQSxLQUFLLENBQUNxQixLQUFLLEVBQUU7SUFDakI7RUFBQztJQUFBO0lBQUEsT0FDRCxtQ0FBMEI7TUFDdEIsSUFBTUMsWUFBWSxHQUFHLENBQUMsQ0FBQztNQUN2QixJQUFJLENBQUM1UCxRQUFRLENBQUN6TixPQUFPLENBQUMsVUFBQ2lELGNBQWMsRUFBSztRQUN0QyxJQUFNVyxLQUFLLEdBQUdYLGNBQWMsQ0FBQ0osU0FBUztRQUN0QyxJQUFJLENBQUNlLEtBQUssQ0FBQ3FHLEVBQUUsRUFBRTtVQUNYLE1BQU0sSUFBSXBMLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDakM7UUFDQXdlLFlBQVksQ0FBQ3paLEtBQUssQ0FBQ3FHLEVBQUUsQ0FBQyxHQUFHO1VBQ3JCa00sV0FBVyxFQUFFdlMsS0FBSyxDQUFDdVMsV0FBVztVQUM5Qm1ILEdBQUcsRUFBRTFaLEtBQUssQ0FBQ3ZMLE9BQU8sQ0FBQ3dkLE9BQU8sQ0FBQzBILFdBQVc7UUFDMUMsQ0FBQztNQUNMLENBQUMsQ0FBQztNQUNGLE9BQU9GLFlBQVk7SUFDdkI7RUFBQztJQUFBO0lBQUEsT0FDRCx3QkFBZTtNQUFBO01BQ1gsSUFBSSxDQUFDdkYsa0JBQWtCLEdBQUcsSUFBSTBGLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUs7UUFDL0MsT0FBSSxDQUFDaEUseUJBQXlCLEdBQUdnRSxPQUFPO01BQzVDLENBQUMsQ0FBQztJQUNOO0VBQUM7RUFBQTtBQUFBO0FBRUwsU0FBU0MsZ0JBQWdCLENBQUM3YSxTQUFTLEVBQUU7RUFDakMsT0FBTyxJQUFJOGEsS0FBSyxDQUFDOWEsU0FBUyxFQUFFO0lBQ3hCOUIsR0FBRyxlQUFDOEIsU0FBUyxFQUFFK2EsSUFBSSxFQUFFO01BQ2pCLElBQUlBLElBQUksSUFBSS9hLFNBQVMsSUFBSSxPQUFPK2EsSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUMvQyxJQUFJLE9BQU8vYSxTQUFTLENBQUMrYSxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7VUFDdkMsSUFBTUMsUUFBUSxHQUFHaGIsU0FBUyxDQUFDK2EsSUFBSSxDQUFDO1VBQ2hDLE9BQU8sWUFBYTtZQUFBLG1DQUFUM2UsSUFBSTtjQUFKQSxJQUFJO1lBQUE7WUFDWCxPQUFPNGUsUUFBUSxDQUFDQyxLQUFLLENBQUNqYixTQUFTLEVBQUU1RCxJQUFJLENBQUM7VUFDMUMsQ0FBQztRQUNMO1FBQ0EsT0FBTzhlLE9BQU8sQ0FBQ2hkLEdBQUcsQ0FBQzhCLFNBQVMsRUFBRSthLElBQUksQ0FBQztNQUN2QztNQUNBLElBQUkvYSxTQUFTLENBQUNuQyxVQUFVLENBQUNtTyxHQUFHLENBQUMrTyxJQUFJLENBQUMsRUFBRTtRQUNoQyxPQUFPL2EsU0FBUyxDQUFDbWIsT0FBTyxDQUFDSixJQUFJLENBQUM7TUFDbEM7TUFDQSxPQUFPLFVBQUMzZSxJQUFJLEVBQUs7UUFDYixPQUFPNEQsU0FBUyxDQUFDL0QsTUFBTSxDQUFDZ2YsS0FBSyxDQUFDamIsU0FBUyxFQUFFLENBQUMrYSxJQUFJLEVBQUUzZSxJQUFJLENBQUMsQ0FBQztNQUMxRCxDQUFDO0lBQ0wsQ0FBQztJQUNEb1AsR0FBRyxlQUFDcFIsTUFBTSxFQUFFMlksUUFBUSxFQUFFcFosS0FBSyxFQUFFO01BQ3pCLElBQUlvWixRQUFRLElBQUkzWSxNQUFNLEVBQUU7UUFDcEJBLE1BQU0sQ0FBQzJZLFFBQVEsQ0FBQyxHQUFHcFosS0FBSztRQUN4QixPQUFPLElBQUk7TUFDZjtNQUNBUyxNQUFNLENBQUNvUixHQUFHLENBQUN1SCxRQUFRLEVBQUVwWixLQUFLLENBQUM7TUFDM0IsT0FBTyxJQUFJO0lBQ2Y7RUFDSixDQUFDLENBQUM7QUFDTjtBQUFDLElBRUt5aEIsY0FBYztFQUNoQix3QkFBWXBHLE9BQU8sRUFBRWUsT0FBTyxFQUFFc0YsWUFBWSxFQUFFO0lBQUE7SUFBQTtJQUN4QyxJQUFJLENBQUNDLFVBQVUsR0FBRyxLQUFLO0lBQ3ZCLElBQUksQ0FBQ3RHLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNBLE9BQU8sQ0FBQ3BjLElBQUksQ0FBQyxVQUFDQyxRQUFRLEVBQUs7TUFDNUIsT0FBSSxDQUFDeWlCLFVBQVUsR0FBRyxJQUFJO01BQ3RCLE9BQU96aUIsUUFBUTtJQUNuQixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNrZCxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDd0YsYUFBYSxHQUFHRixZQUFZO0VBQ3JDO0VBQUM7SUFBQTtJQUFBLE9BQ0QsOEJBQXFCRyxlQUFlLEVBQUU7TUFDbEMsT0FBTyxJQUFJLENBQUN6RixPQUFPLENBQUMvRyxNQUFNLENBQUMsVUFBQy9TLE1BQU07UUFBQSxPQUFLdWYsZUFBZSxDQUFDbGMsUUFBUSxDQUFDckQsTUFBTSxDQUFDO01BQUEsRUFBQyxDQUFDRixNQUFNLEdBQUcsQ0FBQztJQUN2RjtFQUFDO0lBQUE7SUFBQSxPQUNELDZCQUFvQjBmLGNBQWMsRUFBRTtNQUNoQyxPQUFPLElBQUksQ0FBQ0YsYUFBYSxDQUFDdk0sTUFBTSxDQUFDLFVBQUN6UixLQUFLO1FBQUEsT0FBS2tlLGNBQWMsQ0FBQ25jLFFBQVEsQ0FBQy9CLEtBQUssQ0FBQztNQUFBLEVBQUMsQ0FBQ3hCLE1BQU0sR0FBRyxDQUFDO0lBQzFGO0VBQUM7RUFBQTtBQUFBO0FBQUEsSUFHQzJmLGNBQWM7RUFDaEIsd0JBQVlDLEdBQUcsRUFBb0I7SUFBQSxJQUFsQkMsU0FBUyx1RUFBRyxJQUFJO0lBQUE7SUFDN0IsSUFBSSxDQUFDRCxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUztFQUM5QjtFQUFDO0lBQUE7SUFBQSxPQUNELHNCQUFhN1osS0FBSyxFQUFFZ1UsT0FBTyxFQUFFOEYsT0FBTyxFQUFFalIsUUFBUSxFQUFFMUksc0JBQXNCLEVBQUU3SCxLQUFLLEVBQUU7TUFDM0UsSUFBTXloQixRQUFRLEdBQUcsSUFBSSxDQUFDSCxHQUFHLENBQUN0ZSxLQUFLLENBQUMsR0FBRyxDQUFDO01BQ3BDLCtCQUFZeWUsUUFBUTtRQUFmSCxHQUFHO01BQ1IsZ0NBQXdCRyxRQUFRO1FBQXZCQyxXQUFXO01BQ3BCLElBQU1DLE1BQU0sR0FBRyxJQUFJQyxlQUFlLENBQUNGLFdBQVcsSUFBSSxFQUFFLENBQUM7TUFDckQsSUFBTUcsWUFBWSxHQUFHLENBQUMsQ0FBQztNQUN2QkEsWUFBWSxDQUFDNWpCLE9BQU8sR0FBRztRQUNuQjZqQixNQUFNLEVBQUUscUNBQXFDO1FBQzdDLGtCQUFrQixFQUFFO01BQ3hCLENBQUM7TUFDRCxJQUFNQyxVQUFVLEdBQUd6ZixNQUFNLENBQUM0RixPQUFPLENBQUNsSSxLQUFLLENBQUMsQ0FBQ2dpQixNQUFNLENBQUMsVUFBQ0MsS0FBSyxFQUFFQyxPQUFPO1FBQUEsT0FBS0QsS0FBSyxHQUFHQyxPQUFPLENBQUN4Z0IsTUFBTTtNQUFBLEdBQUUsQ0FBQyxDQUFDO01BQzlGLElBQU15Z0IsZUFBZSxHQUFHN2YsTUFBTSxDQUFDQyxJQUFJLENBQUNnTyxRQUFRLENBQUMsQ0FBQzdPLE1BQU0sR0FBRyxDQUFDO01BQ3hELElBQUlnYSxPQUFPLENBQUNoYSxNQUFNLEtBQUssQ0FBQyxJQUNwQnFnQixVQUFVLEtBQUssQ0FBQyxJQUNoQixJQUFJLENBQUNLLGdCQUFnQixDQUFDamtCLElBQUksQ0FBQ0MsU0FBUyxDQUFDc0osS0FBSyxDQUFDLEVBQUV2SixJQUFJLENBQUNDLFNBQVMsQ0FBQ29qQixPQUFPLENBQUMsRUFBRUcsTUFBTSxFQUFFeGpCLElBQUksQ0FBQ0MsU0FBUyxDQUFDbVMsUUFBUSxDQUFDLEVBQUVwUyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3lKLHNCQUFzQixDQUFDLENBQUMsRUFBRTtRQUNqSjhaLE1BQU0sQ0FBQ3hRLEdBQUcsQ0FBQyxPQUFPLEVBQUVoVCxJQUFJLENBQUNDLFNBQVMsQ0FBQ3NKLEtBQUssQ0FBQyxDQUFDO1FBQzFDaWEsTUFBTSxDQUFDeFEsR0FBRyxDQUFDLFNBQVMsRUFBRWhULElBQUksQ0FBQ0MsU0FBUyxDQUFDb2pCLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUlsZixNQUFNLENBQUNDLElBQUksQ0FBQ3NGLHNCQUFzQixDQUFDLENBQUNuRyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ2hEaWdCLE1BQU0sQ0FBQ3hRLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRWhULElBQUksQ0FBQ0MsU0FBUyxDQUFDeUosc0JBQXNCLENBQUMsQ0FBQztRQUN6RTtRQUNBLElBQUlzYSxlQUFlLEVBQUU7VUFDakJSLE1BQU0sQ0FBQ3hRLEdBQUcsQ0FBQyxVQUFVLEVBQUVoVCxJQUFJLENBQUNDLFNBQVMsQ0FBQ21TLFFBQVEsQ0FBQyxDQUFDO1FBQ3BEO1FBQ0FzUixZQUFZLENBQUM3akIsTUFBTSxHQUFHLEtBQUs7TUFDL0IsQ0FBQyxNQUNJO1FBQ0Q2akIsWUFBWSxDQUFDN2pCLE1BQU0sR0FBRyxNQUFNO1FBQzVCLElBQU1xa0IsV0FBVyxHQUFHO1VBQUUzYSxLQUFLLEVBQUxBLEtBQUs7VUFBRThaLE9BQU8sRUFBUEE7UUFBUSxDQUFDO1FBQ3RDLElBQUlsZixNQUFNLENBQUNDLElBQUksQ0FBQ3NGLHNCQUFzQixDQUFDLENBQUNuRyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ2hEMmdCLFdBQVcsQ0FBQ0MsZUFBZSxHQUFHemEsc0JBQXNCO1FBQ3hEO1FBQ0EsSUFBSXNhLGVBQWUsRUFBRTtVQUNqQkUsV0FBVyxDQUFDOVIsUUFBUSxHQUFHQSxRQUFRO1FBQ25DO1FBQ0EsSUFBSSxJQUFJLENBQUNnUixTQUFTLEtBQ2I3RixPQUFPLENBQUNoYSxNQUFNLElBQUlxZ0IsVUFBVSxDQUFDLEVBQUU7VUFDaENGLFlBQVksQ0FBQzVqQixPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDc2pCLFNBQVM7UUFDekQ7UUFDQSxJQUFJN0YsT0FBTyxDQUFDaGEsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUNwQixJQUFJZ2EsT0FBTyxDQUFDaGEsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN0QjJnQixXQUFXLENBQUN0Z0IsSUFBSSxHQUFHMlosT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDM1osSUFBSTtZQUNsQ3VmLEdBQUcsZUFBUWlCLGtCQUFrQixDQUFDN0csT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDemIsSUFBSSxDQUFDLENBQUU7VUFDcEQsQ0FBQyxNQUNJO1lBQ0RxaEIsR0FBRyxJQUFJLFNBQVM7WUFDaEJlLFdBQVcsQ0FBQzNHLE9BQU8sR0FBR0EsT0FBTztVQUNqQztRQUNKO1FBQ0EsSUFBTThHLFFBQVEsR0FBRyxJQUFJQyxRQUFRLEVBQUU7UUFDL0JELFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sRUFBRXZrQixJQUFJLENBQUNDLFNBQVMsQ0FBQ2lrQixXQUFXLENBQUMsQ0FBQztRQUNwRCxxQ0FBMkIvZixNQUFNLENBQUM0RixPQUFPLENBQUNsSSxLQUFLLENBQUMsd0NBQUU7VUFBN0M7WUFBT21JLEdBQUc7WUFBRTdJLEtBQUs7VUFDbEIsSUFBTW9DLE1BQU0sR0FBR3BDLEtBQUssQ0FBQ29DLE1BQU07VUFDM0IsS0FBSyxJQUFJZSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdmLE1BQU0sRUFBRSxFQUFFZSxDQUFDLEVBQUU7WUFDN0IrZixRQUFRLENBQUNFLE1BQU0sQ0FBQ3ZhLEdBQUcsRUFBRTdJLEtBQUssQ0FBQ21ELENBQUMsQ0FBQyxDQUFDO1VBQ2xDO1FBQ0o7UUFDQW9mLFlBQVksQ0FBQzNqQixJQUFJLEdBQUdza0IsUUFBUTtNQUNoQztNQUNBLElBQU1HLFlBQVksR0FBR2hCLE1BQU0sQ0FBQ2lCLFFBQVEsRUFBRTtNQUN0QyxPQUFPO1FBQ0h0QixHQUFHLFlBQUtBLEdBQUcsU0FBR3FCLFlBQVksQ0FBQ2poQixNQUFNLEdBQUcsQ0FBQyxjQUFPaWhCLFlBQVksSUFBSyxFQUFFLENBQUU7UUFDakVkLFlBQVksRUFBWkE7TUFDSixDQUFDO0lBQ0w7RUFBQztJQUFBO0lBQUEsT0FDRCwwQkFBaUJnQixTQUFTLEVBQUVDLFdBQVcsRUFBRW5CLE1BQU0sRUFBRW9CLFlBQVksRUFBRUMsbUJBQW1CLEVBQUU7TUFDaEYsSUFBTUMsa0JBQWtCLEdBQUcsSUFBSXJCLGVBQWUsQ0FBQ2lCLFNBQVMsR0FBR0MsV0FBVyxHQUFHQyxZQUFZLEdBQUdDLG1CQUFtQixDQUFDLENBQUNKLFFBQVEsRUFBRTtNQUN2SCxPQUFPLENBQUNLLGtCQUFrQixHQUFHdEIsTUFBTSxDQUFDaUIsUUFBUSxFQUFFLEVBQUVsaEIsTUFBTSxHQUFHLElBQUk7SUFDakU7RUFBQztFQUFBO0FBQUE7QUFBQSxJQUdDd2hCLE9BQU87RUFDVCxpQkFBWTVCLEdBQUcsRUFBb0I7SUFBQSxJQUFsQkMsU0FBUyx1RUFBRyxJQUFJO0lBQUE7SUFDN0IsSUFBSSxDQUFDNEIsY0FBYyxHQUFHLElBQUk5QixjQUFjLENBQUNDLEdBQUcsRUFBRUMsU0FBUyxDQUFDO0VBQzVEO0VBQUM7SUFBQTtJQUFBLE9BQ0QscUJBQVk3WixLQUFLLEVBQUVnVSxPQUFPLEVBQUU4RixPQUFPLEVBQUVqUixRQUFRLEVBQUUxSSxzQkFBc0IsRUFBRTdILEtBQUssRUFBRTtNQUMxRSw0QkFBOEIsSUFBSSxDQUFDbWpCLGNBQWMsQ0FBQ0MsWUFBWSxDQUFDMWIsS0FBSyxFQUFFZ1UsT0FBTyxFQUFFOEYsT0FBTyxFQUFFalIsUUFBUSxFQUFFMUksc0JBQXNCLEVBQUU3SCxLQUFLLENBQUM7UUFBeEhzaEIsR0FBRyx5QkFBSEEsR0FBRztRQUFFTyxZQUFZLHlCQUFaQSxZQUFZO01BQ3pCLE9BQU8sSUFBSWQsY0FBYyxDQUFDampCLEtBQUssQ0FBQ3dqQixHQUFHLEVBQUVPLFlBQVksQ0FBQyxFQUFFbkcsT0FBTyxDQUFDdFksR0FBRyxDQUFDLFVBQUNpZ0IsYUFBYTtRQUFBLE9BQUtBLGFBQWEsQ0FBQ3BqQixJQUFJO01BQUEsRUFBQyxFQUFFcUMsTUFBTSxDQUFDQyxJQUFJLENBQUNpZixPQUFPLENBQUMsQ0FBQztJQUNqSTtFQUFDO0VBQUE7QUFBQTtBQUFBLElBR0M4QixxQkFBcUI7RUFBQTtJQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUEsT0FDdkIsc0JBQWFub0IsT0FBTyxFQUFFO01BQ2xCLElBQU1vb0IsY0FBYyxHQUFHNWYsNEJBQTRCLENBQUN4SSxPQUFPLEVBQUUsS0FBSyxDQUFDO01BQ25FLElBQUksQ0FBQ29vQixjQUFjLEVBQUU7UUFDakIsT0FBTyxJQUFJO01BQ2Y7TUFDQSxPQUFPQSxjQUFjLENBQUMzaEIsTUFBTTtJQUNoQztFQUFDO0lBQUE7SUFBQSxPQUNELDJCQUFrQjRoQixXQUFXLEVBQUU7TUFDM0IsSUFBSTdKLEVBQUU7TUFDTixJQUFNa0osU0FBUyxHQUFHLENBQUNsSixFQUFFLEdBQUc2SixXQUFXLENBQUNubEIsT0FBTyxDQUFDb2xCLGNBQWMsTUFBTSxJQUFJLElBQUk5SixFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUdBLEVBQUUsR0FBRyxJQUFJO01BQ2pHLE9BQU94YixJQUFJLENBQUNxSixLQUFLLENBQUNxYixTQUFTLENBQUM7SUFDaEM7RUFBQztJQUFBO0lBQUEsT0FDRCxtQ0FBMEI5VixFQUFFLEVBQUU1UixPQUFPLEVBQUU7TUFDbkMsT0FBT0EsT0FBTyxDQUFDTyxhQUFhLHlCQUFrQnFSLEVBQUUsT0FBSTtJQUN4RDtFQUFDO0lBQUE7SUFBQSxPQUNELDJCQUFrQjVSLE9BQU8sRUFBRTtNQUN2QixPQUFPQSxPQUFPLENBQUNrRCxPQUFPLENBQUNxbEIsTUFBTSxJQUFJLElBQUk7SUFDekM7RUFBQztJQUFBO0lBQUEsT0FDRCx5QkFBZ0J2b0IsT0FBTyxFQUFFO01BQ3JCLElBQUl3ZSxFQUFFO01BQ04sSUFBTWdLLFVBQVUsR0FBRyxDQUFDaEssRUFBRSxHQUFHeGUsT0FBTyxDQUFDa0QsT0FBTyxDQUFDdWxCLFFBQVEsTUFBTSxJQUFJLElBQUlqSyxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUdBLEVBQUUsR0FBRyxJQUFJO01BQ3hGLE9BQU94YixJQUFJLENBQUNxSixLQUFLLENBQUNtYyxVQUFVLENBQUM7SUFDakM7RUFBQztJQUFBO0lBQUEsT0FDRCxvQ0FBMkJ4b0IsT0FBTyxFQUFFO01BQ2hDLElBQUl3ZSxFQUFFO01BQ04sSUFBTWdLLFVBQVUsR0FBRyxDQUFDaEssRUFBRSxHQUFHeGUsT0FBTyxDQUFDa0QsT0FBTyxDQUFDd2xCLG1CQUFtQixNQUFNLElBQUksSUFBSWxLLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBR0EsRUFBRSxHQUFHLElBQUk7TUFDbkcsT0FBT3hiLElBQUksQ0FBQ3FKLEtBQUssQ0FBQ21jLFVBQVUsQ0FBQztJQUNqQztFQUFDO0VBQUE7QUFBQTtBQUFBLElBR0NHLGFBQWE7RUFBQTtJQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUEsT0FDZiwyQkFBa0JuZSxTQUFTLEVBQUU7TUFBQTtNQUN6QkEsU0FBUyxDQUFDdVYsRUFBRSxDQUFDLHVCQUF1QixFQUFFLFVBQUMvZixPQUFPLEVBQUU0b0IsT0FBTyxFQUFLO1FBQ3hELE9BQUksQ0FBQ0MsWUFBWSxDQUFDN29CLE9BQU8sRUFBRTRvQixPQUFPLENBQUM7TUFDdkMsQ0FBQyxDQUFDO01BQ0ZwZSxTQUFTLENBQUN1VixFQUFFLENBQUMsd0JBQXdCLEVBQUUsVUFBQy9mLE9BQU8sRUFBSztRQUNoRCxPQUFJLENBQUM4b0IsYUFBYSxDQUFDOW9CLE9BQU8sQ0FBQztNQUMvQixDQUFDLENBQUM7TUFDRixJQUFJLENBQUM4b0IsYUFBYSxDQUFDdGUsU0FBUyxDQUFDeEssT0FBTyxDQUFDO0lBQ3pDO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsc0JBQWErb0IsYUFBYSxFQUFFN0ssY0FBYyxFQUFFO01BQ3hDLElBQUksQ0FBQzhLLG1CQUFtQixDQUFDLElBQUksRUFBRUQsYUFBYSxFQUFFN0ssY0FBYyxDQUFDO0lBQ2pFO0VBQUM7SUFBQTtJQUFBLE9BQ0QsdUJBQWM2SyxhQUFhLEVBQUU7TUFDekIsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUVELGFBQWEsRUFBRSxJQUFJLENBQUM7SUFDeEQ7RUFBQztJQUFBO0lBQUEsT0FDRCw2QkFBb0JFLFNBQVMsRUFBRUYsYUFBYSxFQUFFN0ssY0FBYyxFQUFFO01BQUE7TUFDMUQsSUFBSStLLFNBQVMsRUFBRTtRQUNYLElBQUksQ0FBQ0MsYUFBYSxDQUFDSCxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUMvQyxDQUFDLE1BQ0k7UUFDRCxJQUFJLENBQUNJLGdCQUFnQixDQUFDSixhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUNsRDtNQUNBLElBQUksQ0FBQ0ssb0JBQW9CLENBQUNMLGFBQWEsQ0FBQyxDQUFDcGhCLE9BQU8sQ0FBQyxpQkFBNkI7UUFBQSxJQUExQjNILE9BQU8sU0FBUEEsT0FBTztVQUFFOEYsVUFBVSxTQUFWQSxVQUFVO1FBQ25FLElBQUltakIsU0FBUyxFQUFFO1VBQ1gsT0FBSSxDQUFDQyxhQUFhLENBQUNscEIsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN6RCxDQUFDLE1BQ0k7VUFDRCxPQUFJLENBQUNtcEIsZ0JBQWdCLENBQUNucEIsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM1RDtRQUNBOEYsVUFBVSxDQUFDNkIsT0FBTyxDQUFDLFVBQUNzQyxTQUFTLEVBQUs7VUFDOUIsT0FBSSxDQUFDb2Ysc0JBQXNCLENBQUNycEIsT0FBTyxFQUFFaXBCLFNBQVMsRUFBRWhmLFNBQVMsRUFBRWlVLGNBQWMsQ0FBQztRQUM5RSxDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUE7SUFBQSxPQUNELGdDQUF1QmxlLE9BQU8sRUFBRWlwQixTQUFTLEVBQUVoZixTQUFTLEVBQUVpVSxjQUFjLEVBQUU7TUFBQTtNQUNsRSxJQUFNb0wsV0FBVyxHQUFHQyxrQkFBa0IsQ0FBQ3RmLFNBQVMsQ0FBQ3hELE1BQU0sRUFBRXdpQixTQUFTLENBQUM7TUFDbkUsSUFBTWpELGVBQWUsR0FBRyxFQUFFO01BQzFCLElBQU1DLGNBQWMsR0FBRyxFQUFFO01BQ3pCLElBQUl1RCxLQUFLLEdBQUcsQ0FBQztNQUNiLElBQU1DLGNBQWMsR0FBRyxJQUFJMVQsR0FBRyxFQUFFO01BQ2hDMFQsY0FBYyxDQUFDelQsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFDMFQsUUFBUSxFQUFLO1FBQ3RDLElBQUksQ0FBQ1QsU0FBUyxFQUFFO1VBQ1o7UUFDSjtRQUNBTyxLQUFLLEdBQUdFLFFBQVEsQ0FBQ3ZsQixLQUFLLEdBQUd3bEIsUUFBUSxDQUFDRCxRQUFRLENBQUN2bEIsS0FBSyxDQUFDLEdBQUcsR0FBRztNQUMzRCxDQUFDLENBQUM7TUFDRnNsQixjQUFjLENBQUN6VCxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQUMwVCxRQUFRLEVBQUs7UUFDdkMsSUFBSSxDQUFDQSxRQUFRLENBQUN2bEIsS0FBSyxFQUFFO1VBQ2pCLE1BQU0sSUFBSXFDLEtBQUssMEdBQWdHeUQsU0FBUyxDQUFDbEQsU0FBUyxFQUFFLFFBQUk7UUFDNUk7UUFDQWlmLGVBQWUsQ0FBQ3JmLElBQUksQ0FBQytpQixRQUFRLENBQUN2bEIsS0FBSyxDQUFDO01BQ3hDLENBQUMsQ0FBQztNQUNGc2xCLGNBQWMsQ0FBQ3pULEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBQzBULFFBQVEsRUFBSztRQUN0QyxJQUFJLENBQUNBLFFBQVEsQ0FBQ3ZsQixLQUFLLEVBQUU7VUFDakIsTUFBTSxJQUFJcUMsS0FBSyx3R0FBOEZ5RCxTQUFTLENBQUNsRCxTQUFTLEVBQUUsUUFBSTtRQUMxSTtRQUNBa2YsY0FBYyxDQUFDdGYsSUFBSSxDQUFDK2lCLFFBQVEsQ0FBQ3ZsQixLQUFLLENBQUM7TUFDdkMsQ0FBQyxDQUFDO01BQ0Y4RixTQUFTLENBQUNuRCxTQUFTLENBQUNhLE9BQU8sQ0FBQyxVQUFDK2hCLFFBQVEsRUFBSztRQUN0QyxJQUFJbEwsRUFBRTtRQUNOLElBQUlpTCxjQUFjLENBQUNqVCxHQUFHLENBQUNrVCxRQUFRLENBQUM1a0IsSUFBSSxDQUFDLEVBQUU7VUFDbkMsSUFBTTBnQixRQUFRLEdBQUcsQ0FBQ2hILEVBQUUsR0FBR2lMLGNBQWMsQ0FBQy9nQixHQUFHLENBQUNnaEIsUUFBUSxDQUFDNWtCLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSTBaLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBR0EsRUFBRSxHQUFJLFlBQU0sQ0FBRSxDQUFFO1VBQ3RHZ0gsUUFBUSxDQUFDa0UsUUFBUSxDQUFDO1VBQ2xCO1FBQ0o7UUFDQSxNQUFNLElBQUlsakIsS0FBSyw4QkFBc0JrakIsUUFBUSxDQUFDNWtCLElBQUksdUNBQTJCbUYsU0FBUyxDQUFDbEQsU0FBUyxFQUFFLDBDQUErQjRCLEtBQUssQ0FBQ1EsSUFBSSxDQUFDc2dCLGNBQWMsQ0FBQ3JpQixJQUFJLEVBQUUsQ0FBQyxDQUFDZSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQUk7TUFDckwsQ0FBQyxDQUFDO01BQ0YsSUFBSThnQixTQUFTLElBQUlqRCxlQUFlLENBQUN6ZixNQUFNLEdBQUcsQ0FBQyxJQUFJMlgsY0FBYyxJQUFJLENBQUNBLGNBQWMsQ0FBQzBMLG9CQUFvQixDQUFDNUQsZUFBZSxDQUFDLEVBQUU7UUFDcEg7TUFDSjtNQUNBLElBQUlpRCxTQUFTLElBQUloRCxjQUFjLENBQUMxZixNQUFNLEdBQUcsQ0FBQyxJQUFJMlgsY0FBYyxJQUFJLENBQUNBLGNBQWMsQ0FBQzJMLG1CQUFtQixDQUFDNUQsY0FBYyxDQUFDLEVBQUU7UUFDakg7TUFDSjtNQUNBLElBQUk2RCxnQkFBZ0I7TUFDcEIsUUFBUVIsV0FBVztRQUNmLEtBQUssTUFBTTtVQUNQUSxnQkFBZ0IsR0FBRyw0QkFBTTtZQUNyQixPQUFJLENBQUNDLFdBQVcsQ0FBQy9wQixPQUFPLENBQUM7VUFDN0IsQ0FBQztVQUNEO1FBQ0osS0FBSyxNQUFNO1VBQ1A4cEIsZ0JBQWdCLEdBQUc7WUFBQSxPQUFNLE9BQUksQ0FBQ0UsV0FBVyxDQUFDaHFCLE9BQU8sQ0FBQztVQUFBO1VBQ2xEO1FBQ0osS0FBSyxVQUFVO1VBQ1g4cEIsZ0JBQWdCLEdBQUc7WUFBQSxPQUFNLE9BQUksQ0FBQ25OLFFBQVEsQ0FBQzNjLE9BQU8sRUFBRWlLLFNBQVMsQ0FBQ3JELElBQUksQ0FBQztVQUFBO1VBQy9EO1FBQ0osS0FBSyxhQUFhO1VBQ2RrakIsZ0JBQWdCLEdBQUc7WUFBQSxPQUFNLE9BQUksQ0FBQ2xOLFdBQVcsQ0FBQzVjLE9BQU8sRUFBRWlLLFNBQVMsQ0FBQ3JELElBQUksQ0FBQztVQUFBO1VBQ2xFO1FBQ0osS0FBSyxjQUFjO1VBQ2ZrakIsZ0JBQWdCLEdBQUc7WUFBQSxPQUFNLE9BQUksQ0FBQ1osYUFBYSxDQUFDbHBCLE9BQU8sRUFBRWlLLFNBQVMsQ0FBQ3JELElBQUksQ0FBQztVQUFBO1VBQ3BFO1FBQ0osS0FBSyxpQkFBaUI7VUFDbEJrakIsZ0JBQWdCLEdBQUc7WUFBQSxPQUFNLE9BQUksQ0FBQ1gsZ0JBQWdCLENBQUNucEIsT0FBTyxFQUFFaUssU0FBUyxDQUFDckQsSUFBSSxDQUFDO1VBQUE7VUFDdkU7UUFDSjtVQUNJLE1BQU0sSUFBSUosS0FBSyx5Q0FBaUM4aUIsV0FBVyxRQUFJO01BQUM7TUFFeEUsSUFBSUUsS0FBSyxFQUFFO1FBQ1BuVCxNQUFNLENBQUNtTixVQUFVLENBQUMsWUFBTTtVQUNwQixJQUFJdEYsY0FBYyxJQUFJLENBQUNBLGNBQWMsQ0FBQzRILFVBQVUsRUFBRTtZQUM5Q2dFLGdCQUFnQixFQUFFO1VBQ3RCO1FBQ0osQ0FBQyxFQUFFTixLQUFLLENBQUM7UUFDVDtNQUNKO01BQ0FNLGdCQUFnQixFQUFFO0lBQ3RCO0VBQUM7SUFBQTtJQUFBLE9BQ0QsOEJBQXFCOXBCLE9BQU8sRUFBRTtNQUMxQixJQUFNaXFCLGlCQUFpQixHQUFHLEVBQUU7TUFDNUJqcUIsT0FBTyxDQUFDcUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3NGLE9BQU8sQ0FBRSxVQUFBM0gsT0FBTyxFQUFJO1FBQzNELElBQUksRUFBRUEsT0FBTyxZQUFZZ0wsV0FBVyxDQUFDLElBQUksRUFBRWhMLE9BQU8sWUFBWWtxQixVQUFVLENBQUMsRUFBRTtVQUN2RSxNQUFNLElBQUkxakIsS0FBSyxDQUFDLHNCQUFzQixDQUFDO1FBQzNDO1FBQ0EsSUFBTVYsVUFBVSxHQUFHRixlQUFlLENBQUM1RixPQUFPLENBQUNrRCxPQUFPLENBQUNpbkIsT0FBTyxJQUFJLE1BQU0sQ0FBQztRQUNyRUYsaUJBQWlCLENBQUN0akIsSUFBSSxDQUFDO1VBQ25CM0csT0FBTyxFQUFQQSxPQUFPO1VBQ1A4RixVQUFVLEVBQVZBO1FBQ0osQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFFO01BQ0gsT0FBT21rQixpQkFBaUI7SUFDNUI7RUFBQztJQUFBO0lBQUEsT0FDRCxxQkFBWWpxQixPQUFPLEVBQUU7TUFDakJBLE9BQU8sQ0FBQ29FLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLFFBQVE7SUFDcEM7RUFBQztJQUFBO0lBQUEsT0FDRCxxQkFBWXJFLE9BQU8sRUFBRTtNQUNqQkEsT0FBTyxDQUFDb0UsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtJQUNsQztFQUFDO0lBQUE7SUFBQSxPQUNELGtCQUFTckUsT0FBTyxFQUFFb3FCLE9BQU8sRUFBRTtNQUFBO01BQ3ZCLHNCQUFBcHFCLE9BQU8sQ0FBQ21CLFNBQVMsRUFBQ0csR0FBRyw4Q0FBSWtHLGtCQUFrQixDQUFDNGlCLE9BQU8sQ0FBQyxFQUFDO0lBQ3pEO0VBQUM7SUFBQTtJQUFBLE9BQ0QscUJBQVlwcUIsT0FBTyxFQUFFb3FCLE9BQU8sRUFBRTtNQUFBO01BQzFCLHVCQUFBcHFCLE9BQU8sQ0FBQ21CLFNBQVMsRUFBQ0ksTUFBTSwrQ0FBSWlHLGtCQUFrQixDQUFDNGlCLE9BQU8sQ0FBQyxFQUFDO01BQ3hELElBQUlwcUIsT0FBTyxDQUFDbUIsU0FBUyxDQUFDb0YsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNoQyxJQUFJLENBQUM0aUIsZ0JBQWdCLENBQUNucEIsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7TUFDN0M7SUFDSjtFQUFDO0lBQUE7SUFBQSxPQUNELHVCQUFjQSxPQUFPLEVBQUVzTixVQUFVLEVBQUU7TUFDL0JBLFVBQVUsQ0FBQzNGLE9BQU8sQ0FBQyxVQUFDMGlCLFNBQVMsRUFBSztRQUM5QnJxQixPQUFPLENBQUNpTyxZQUFZLENBQUNvYyxTQUFTLEVBQUUsRUFBRSxDQUFDO01BQ3ZDLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTtJQUFBLE9BQ0QsMEJBQWlCcnFCLE9BQU8sRUFBRXNOLFVBQVUsRUFBRTtNQUNsQ0EsVUFBVSxDQUFDM0YsT0FBTyxDQUFDLFVBQUMwaUIsU0FBUyxFQUFLO1FBQzlCcnFCLE9BQU8sQ0FBQ3NPLGVBQWUsQ0FBQytiLFNBQVMsQ0FBQztNQUN0QyxDQUFDLENBQUM7SUFDTjtFQUFDO0VBQUE7QUFBQTtBQUVMLElBQU1kLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0IsQ0FBYTlpQixNQUFNLEVBQUV3aUIsU0FBUyxFQUFFO0VBQ3BELFFBQVF4aUIsTUFBTTtJQUNWLEtBQUssTUFBTTtNQUNQLE9BQU93aUIsU0FBUyxHQUFHLE1BQU0sR0FBRyxNQUFNO0lBQ3RDLEtBQUssTUFBTTtNQUNQLE9BQU9BLFNBQVMsR0FBRyxNQUFNLEdBQUcsTUFBTTtJQUN0QyxLQUFLLFVBQVU7TUFDWCxPQUFPQSxTQUFTLEdBQUcsVUFBVSxHQUFHLGFBQWE7SUFDakQsS0FBSyxhQUFhO01BQ2QsT0FBT0EsU0FBUyxHQUFHLGFBQWEsR0FBRyxVQUFVO0lBQ2pELEtBQUssY0FBYztNQUNmLE9BQU9BLFNBQVMsR0FBRyxjQUFjLEdBQUcsaUJBQWlCO0lBQ3pELEtBQUssaUJBQWlCO01BQ2xCLE9BQU9BLFNBQVMsR0FBRyxpQkFBaUIsR0FBRyxjQUFjO0VBQUM7RUFFOUQsTUFBTSxJQUFJemlCLEtBQUsseUNBQWlDQyxNQUFNLFFBQUk7QUFDOUQsQ0FBQztBQUFDLElBRUk2akIscUJBQXFCO0VBQUE7SUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBLE9BQ3ZCLDJCQUFrQjlmLFNBQVMsRUFBRTtNQUFBO01BQ3pCQSxTQUFTLENBQUN1VixFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUN2SSxTQUFTLEVBQUs7UUFDckMsT0FBSSxDQUFDK1MsY0FBYyxDQUFDL1MsU0FBUyxFQUFFaE4sU0FBUyxDQUFDbkMsVUFBVSxDQUFDO01BQ3hELENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsd0JBQWVtUCxTQUFTLEVBQUVuUCxVQUFVLEVBQUU7TUFDbEMsSUFBSUEsVUFBVSxDQUFDbU8sR0FBRyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7UUFDbkMsSUFBTWdVLGVBQWUsc0JBQU9uaUIsVUFBVSxDQUFDSyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUM4aEIsZUFBZSxDQUFDMWdCLFFBQVEsQ0FBQzBOLFNBQVMsQ0FBQyxFQUFFO1VBQ3RDZ1QsZUFBZSxDQUFDN2pCLElBQUksQ0FBQzZRLFNBQVMsQ0FBQztRQUNuQztRQUNBblAsVUFBVSxDQUFDMk4sR0FBRyxDQUFDLGlCQUFpQixFQUFFd1UsZUFBZSxDQUFDO01BQ3REO0lBQ0o7RUFBQztFQUFBO0FBQUE7QUFBQSxJQUdDQyxtQkFBbUI7RUFDckIsK0JBQWM7SUFBQTtJQUNWLElBQUksQ0FBQ0MsV0FBVyxHQUFHLEtBQUs7RUFDNUI7RUFBQztJQUFBO0lBQUEsT0FDRCwyQkFBa0JsZ0IsU0FBUyxFQUFFO01BQUE7TUFDekJBLFNBQVMsQ0FBQ3VWLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDN1UsSUFBSSxFQUFFN0gsUUFBUSxFQUFFeWUsUUFBUSxFQUFLO1FBQ3pELElBQUksQ0FBQyxPQUFJLENBQUM0SSxXQUFXLEVBQUU7VUFDbkI1SSxRQUFRLENBQUNkLFlBQVksR0FBRyxLQUFLO1FBQ2pDO01BQ0osQ0FBQyxDQUFDO01BQ0Z4VyxTQUFTLENBQUN1VixFQUFFLENBQUMsU0FBUyxFQUFFLFlBQU07UUFDMUIsT0FBSSxDQUFDMkssV0FBVyxHQUFHLElBQUk7TUFDM0IsQ0FBQyxDQUFDO01BQ0ZsZ0IsU0FBUyxDQUFDdVYsRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFNO1FBQzdCLE9BQUksQ0FBQzJLLFdBQVcsR0FBRyxLQUFLO01BQzVCLENBQUMsQ0FBQztJQUNOO0VBQUM7RUFBQTtBQUFBO0FBQUEsSUFHQ0MsZUFBZTtFQUNqQix5QkFBWW5nQixTQUFTLEVBQUU7SUFBQTtJQUNuQixJQUFJLENBQUNvZ0IsZUFBZSxHQUFHLElBQUk7SUFDM0IsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQ3JnQixTQUFTLEdBQUdBLFNBQVM7RUFDOUI7RUFBQztJQUFBO0lBQUEsT0FDRCxpQkFBUXNnQixVQUFVLEVBQUVDLFFBQVEsRUFBRTtNQUMxQixJQUFJLENBQUNDLEtBQUssQ0FBQ3JrQixJQUFJLENBQUM7UUFBRW1rQixVQUFVLEVBQVZBLFVBQVU7UUFBRUMsUUFBUSxFQUFSQTtNQUFTLENBQUMsQ0FBQztNQUN6QyxJQUFJLElBQUksQ0FBQ0gsZUFBZSxFQUFFO1FBQ3RCLElBQUksQ0FBQ0ssWUFBWSxDQUFDSCxVQUFVLEVBQUVDLFFBQVEsQ0FBQztNQUMzQztJQUNKO0VBQUM7SUFBQTtJQUFBLE9BQ0QsMkJBQWtCO01BQUE7TUFDZCxJQUFJLElBQUksQ0FBQ0gsZUFBZSxFQUFFO1FBQ3RCO01BQ0o7TUFDQSxJQUFJLENBQUNBLGVBQWUsR0FBRyxJQUFJO01BQzNCLElBQUksQ0FBQ0ksS0FBSyxDQUFDcmpCLE9BQU8sQ0FBQyxpQkFBOEI7UUFBQSxJQUEzQm1qQixVQUFVLFNBQVZBLFVBQVU7VUFBRUMsUUFBUSxTQUFSQSxRQUFRO1FBQ3RDLE9BQUksQ0FBQ0UsWUFBWSxDQUFDSCxVQUFVLEVBQUVDLFFBQVEsQ0FBQztNQUMzQyxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUE7SUFBQSxPQUNELDBCQUFpQjtNQUNiLElBQUksQ0FBQ0gsZUFBZSxHQUFHLEtBQUs7TUFDNUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ2xqQixPQUFPLENBQUMsVUFBQ3VqQixRQUFRLEVBQUs7UUFDeENDLGFBQWEsQ0FBQ0QsUUFBUSxDQUFDO01BQzNCLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsd0JBQWU7TUFDWCxJQUFJLENBQUNFLGNBQWMsRUFBRTtNQUNyQixJQUFJLENBQUNKLEtBQUssR0FBRyxFQUFFO01BQ2YsSUFBSSxDQUFDSyxlQUFlLEVBQUU7SUFDMUI7RUFBQztJQUFBO0lBQUEsT0FDRCxzQkFBYVAsVUFBVSxFQUFFQyxRQUFRLEVBQUU7TUFBQTtNQUMvQixJQUFJNVQsUUFBUTtNQUNaLElBQUkyVCxVQUFVLEtBQUssU0FBUyxFQUFFO1FBQzFCM1QsUUFBUSxHQUFHLG9CQUFNO1VBQ2IsT0FBSSxDQUFDM00sU0FBUyxDQUFDbVcsTUFBTSxFQUFFO1FBQzNCLENBQUM7TUFDTCxDQUFDLE1BQ0k7UUFDRHhKLFFBQVEsR0FBRyxvQkFBTTtVQUNiLE9BQUksQ0FBQzNNLFNBQVMsQ0FBQy9ELE1BQU0sQ0FBQ3FrQixVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLENBQUM7TUFDTDtNQUNBLElBQU1RLEtBQUssR0FBR0MsV0FBVyxDQUFDLFlBQU07UUFDNUJwVSxRQUFRLEVBQUU7TUFDZCxDQUFDLEVBQUU0VCxRQUFRLENBQUM7TUFDWixJQUFJLENBQUNGLGdCQUFnQixDQUFDbGtCLElBQUksQ0FBQzJrQixLQUFLLENBQUM7SUFDckM7RUFBQztFQUFBO0FBQUE7QUFBQSxJQUdDRSxhQUFhO0VBQUE7SUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBLE9BQ2YsMkJBQWtCaGhCLFNBQVMsRUFBRTtNQUFBO01BQ3pCLElBQUksQ0FBQ3hLLE9BQU8sR0FBR3dLLFNBQVMsQ0FBQ3hLLE9BQU87TUFDaEMsSUFBSSxDQUFDeXJCLGVBQWUsR0FBRyxJQUFJZCxlQUFlLENBQUNuZ0IsU0FBUyxDQUFDO01BQ3JELElBQUksQ0FBQ2toQixpQkFBaUIsRUFBRTtNQUN4QmxoQixTQUFTLENBQUN1VixFQUFFLENBQUMsU0FBUyxFQUFFLFlBQU07UUFDMUIsT0FBSSxDQUFDMEwsZUFBZSxDQUFDSixlQUFlLEVBQUU7TUFDMUMsQ0FBQyxDQUFDO01BQ0Y3Z0IsU0FBUyxDQUFDdVYsRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFNO1FBQzdCLE9BQUksQ0FBQzBMLGVBQWUsQ0FBQ0wsY0FBYyxFQUFFO01BQ3pDLENBQUMsQ0FBQztNQUNGNWdCLFNBQVMsQ0FBQ3VWLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxZQUFNO1FBQ2xDLE9BQUksQ0FBQzJMLGlCQUFpQixFQUFFO01BQzVCLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTtJQUFBLE9BQ0QsaUJBQVFaLFVBQVUsRUFBRUMsUUFBUSxFQUFFO01BQzFCLElBQUksQ0FBQ1UsZUFBZSxDQUFDRSxPQUFPLENBQUNiLFVBQVUsRUFBRUMsUUFBUSxDQUFDO0lBQ3REO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsd0JBQWU7TUFDWCxJQUFJLENBQUNVLGVBQWUsQ0FBQ0csWUFBWSxFQUFFO0lBQ3ZDO0VBQUM7SUFBQTtJQUFBLE9BQ0QsNkJBQW9CO01BQUE7TUFDaEIsSUFBSSxDQUFDQSxZQUFZLEVBQUU7TUFDbkIsSUFBSSxJQUFJLENBQUM1ckIsT0FBTyxDQUFDa0QsT0FBTyxDQUFDMm9CLElBQUksS0FBSzloQixTQUFTLEVBQUU7UUFDekM7TUFDSjtNQUNBLElBQU0raEIsYUFBYSxHQUFHLElBQUksQ0FBQzlyQixPQUFPLENBQUNrRCxPQUFPLENBQUMyb0IsSUFBSTtNQUMvQyxJQUFNL2xCLFVBQVUsR0FBR0YsZUFBZSxDQUFDa21CLGFBQWEsSUFBSSxTQUFTLENBQUM7TUFDOURobUIsVUFBVSxDQUFDNkIsT0FBTyxDQUFDLFVBQUNzQyxTQUFTLEVBQUs7UUFDOUIsSUFBSThnQixRQUFRLEdBQUcsSUFBSTtRQUNuQjlnQixTQUFTLENBQUNuRCxTQUFTLENBQUNhLE9BQU8sQ0FBQyxVQUFDK2hCLFFBQVEsRUFBSztVQUN0QyxRQUFRQSxRQUFRLENBQUM1a0IsSUFBSTtZQUNqQixLQUFLLE9BQU87Y0FDUixJQUFJNGtCLFFBQVEsQ0FBQ3ZsQixLQUFLLEVBQUU7Z0JBQ2hCNG1CLFFBQVEsR0FBR3BCLFFBQVEsQ0FBQ0QsUUFBUSxDQUFDdmxCLEtBQUssQ0FBQztjQUN2QztjQUNBO1lBQ0o7Y0FDSS9ELE9BQU8sQ0FBQzJyQixJQUFJLDhCQUFzQnJDLFFBQVEsQ0FBQzVrQixJQUFJLCtCQUFtQmduQixhQUFhLFNBQUs7VUFBQztRQUVqRyxDQUFDLENBQUM7UUFDRixPQUFJLENBQUNILE9BQU8sQ0FBQzFoQixTQUFTLENBQUN4RCxNQUFNLEVBQUVza0IsUUFBUSxDQUFDO01BQzVDLENBQUMsQ0FBQztJQUNOO0VBQUM7RUFBQTtBQUFBO0FBQUEsSUFHQ2lCLDZCQUE2QjtFQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQSxPQUMvQiwyQkFBa0J4aEIsU0FBUyxFQUFFO01BQUE7TUFDekIsSUFBSSxDQUFDeWhCLDZCQUE2QixDQUFDemhCLFNBQVMsQ0FBQztNQUM3Q0EsU0FBUyxDQUFDdVYsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFlBQU07UUFDbEMsT0FBSSxDQUFDa00sNkJBQTZCLENBQUN6aEIsU0FBUyxDQUFDO01BQ2pELENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTtJQUFBLE9BQ0QsdUNBQThCQSxTQUFTLEVBQUU7TUFDckNBLFNBQVMsQ0FBQ3hLLE9BQU8sQ0FBQ3FDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDc0YsT0FBTyxDQUFDLFVBQUMzSCxPQUFPLEVBQUs7UUFDcEUsSUFBSSxFQUFFQSxPQUFPLFlBQVlnTCxXQUFXLENBQUMsRUFBRTtVQUNuQyxNQUFNLElBQUl4RSxLQUFLLENBQUMsbUNBQW1DLENBQUM7UUFDeEQ7UUFDQSxJQUFJeEcsT0FBTyxZQUFZa3NCLGVBQWUsRUFBRTtVQUNwQztRQUNKO1FBQ0EsSUFBSSxDQUFDM2hCLDZCQUE2QixDQUFDdkssT0FBTyxFQUFFd0ssU0FBUyxDQUFDLEVBQUU7VUFDcEQ7UUFDSjtRQUNBLElBQU00ZCxjQUFjLEdBQUc1Ziw0QkFBNEIsQ0FBQ3hJLE9BQU8sQ0FBQztRQUM1RCxJQUFJLENBQUNvb0IsY0FBYyxFQUFFO1VBQ2pCO1FBQ0o7UUFDQSxJQUFNNVEsU0FBUyxHQUFHNFEsY0FBYyxDQUFDM2hCLE1BQU07UUFDdkMsSUFBSStELFNBQVMsQ0FBQ3NWLGlCQUFpQixFQUFFLENBQUNoVyxRQUFRLENBQUMwTixTQUFTLENBQUMsRUFBRTtVQUNuRDtRQUNKO1FBQ0EsSUFBSWhOLFNBQVMsQ0FBQ25DLFVBQVUsQ0FBQ21PLEdBQUcsQ0FBQ2dCLFNBQVMsQ0FBQyxFQUFFO1VBQ3JDbE8saUJBQWlCLENBQUN0SixPQUFPLEVBQUV3SyxTQUFTLENBQUNuQyxVQUFVLENBQUNLLEdBQUcsQ0FBQzhPLFNBQVMsQ0FBQyxDQUFDO1FBQ25FO1FBQ0EsSUFBSXhYLE9BQU8sWUFBWWlKLGlCQUFpQixJQUFJLENBQUNqSixPQUFPLENBQUNrSixRQUFRLEVBQUU7VUFDM0RzQixTQUFTLENBQUNuQyxVQUFVLENBQUMyTixHQUFHLENBQUN3QixTQUFTLEVBQUVwUCxtQkFBbUIsQ0FBQ3BJLE9BQU8sRUFBRXdLLFNBQVMsQ0FBQ25DLFVBQVUsQ0FBQyxDQUFDO1FBQzNGO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFBQztFQUFBO0FBQUE7QUFHTCxTQUFTOGpCLGVBQWUsQ0FBRS9ELGNBQWMsRUFBRTtFQUN0QyxJQUFJcEgsWUFBWSxHQUFHLElBQUk7RUFDdkIsSUFBSW9MLGVBQWUsR0FBRyxJQUFJO0VBQzFCLElBQUk3TSxRQUFRLEdBQUcsS0FBSztFQUNwQjZJLGNBQWMsQ0FBQ3RoQixTQUFTLENBQUNhLE9BQU8sQ0FBQyxVQUFDK2hCLFFBQVEsRUFBSztJQUMzQyxRQUFRQSxRQUFRLENBQUM1a0IsSUFBSTtNQUNqQixLQUFLLElBQUk7UUFDTCxJQUFJLENBQUM0a0IsUUFBUSxDQUFDdmxCLEtBQUssRUFBRTtVQUNqQixNQUFNLElBQUlxQyxLQUFLLGtDQUF5QjRoQixjQUFjLENBQUNyaEIsU0FBUyxFQUFFLDBDQUF1QztRQUM3RztRQUNBLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQytDLFFBQVEsQ0FBQzRmLFFBQVEsQ0FBQ3ZsQixLQUFLLENBQUMsRUFBRTtVQUMvQyxNQUFNLElBQUlxQyxLQUFLLGtDQUF5QjRoQixjQUFjLENBQUNyaEIsU0FBUyxFQUFFLDBEQUFtRDtRQUN6SDtRQUNBcWxCLGVBQWUsR0FBRzFDLFFBQVEsQ0FBQ3ZsQixLQUFLO1FBQ2hDO01BQ0osS0FBSyxVQUFVO1FBQ1g2YyxZQUFZLEdBQUcsS0FBSztRQUNwQjtNQUNKLEtBQUssVUFBVTtRQUNYekIsUUFBUSxHQUFHbUssUUFBUSxDQUFDdmxCLEtBQUssR0FBR3dsQixRQUFRLENBQUNELFFBQVEsQ0FBQ3ZsQixLQUFLLENBQUMsR0FBRyxJQUFJO1FBQzNEO01BQ0o7UUFDSSxNQUFNLElBQUlxQyxLQUFLLDhCQUFzQmtqQixRQUFRLENBQUM1a0IsSUFBSSxnQ0FBb0JzakIsY0FBYyxDQUFDcmhCLFNBQVMsRUFBRSxTQUFLO0lBQUM7RUFFbEgsQ0FBQyxDQUFDO0VBQ0YsNEJBQW9DcWhCLGNBQWMsQ0FBQzNoQixNQUFNLENBQUNvQixLQUFLLENBQUMsR0FBRyxDQUFDO0lBQUE7SUFBN0QyUCxTQUFTO0lBQUV1SixjQUFjO0VBQ2hDLE9BQU87SUFDSHZKLFNBQVMsRUFBVEEsU0FBUztJQUNUdUosY0FBYyxFQUFFQSxjQUFjLElBQUksSUFBSTtJQUN0Q0MsWUFBWSxFQUFaQSxZQUFZO0lBQ1p6QixRQUFRLEVBQVJBLFFBQVE7SUFDUjZNLGVBQWUsRUFBZkE7RUFDSixDQUFDO0FBQ0w7QUFBQyxJQUVLQyxpQkFBaUI7RUFDbkIsNkJBQWM7SUFBQTtJQUNWLElBQUksQ0FBQ0MscUJBQXFCLEdBQUcsSUFBSS9SLE9BQU8sRUFBRTtJQUMxQyxJQUFJLENBQUNnUyx1QkFBdUIsR0FBRyxJQUFJeFcsR0FBRyxFQUFFO0VBQzVDO0VBQUM7SUFBQTtJQUFBLE9BQ0QsMkJBQWtCL1YsT0FBTyxFQUFFd0ssU0FBUyxFQUFFO01BQ2xDLElBQUksQ0FBQzhoQixxQkFBcUIsQ0FBQ3RXLEdBQUcsQ0FBQ2hXLE9BQU8sRUFBRXdLLFNBQVMsQ0FBQztNQUNsRCxJQUFJLENBQUMraEIsdUJBQXVCLENBQUN2VyxHQUFHLENBQUN4TCxTQUFTLEVBQUVBLFNBQVMsQ0FBQzFGLElBQUksQ0FBQztJQUMvRDtFQUFDO0lBQUE7SUFBQSxPQUNELDZCQUFvQjBGLFNBQVMsRUFBRTtNQUMzQixJQUFJLENBQUM4aEIscUJBQXFCLFVBQU8sQ0FBQzloQixTQUFTLENBQUN4SyxPQUFPLENBQUM7TUFDcEQsSUFBSSxDQUFDdXNCLHVCQUF1QixVQUFPLENBQUMvaEIsU0FBUyxDQUFDO0lBQ2xEO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsc0JBQWF4SyxPQUFPLEVBQUU7TUFBQTtNQUNsQixPQUFPLElBQUltbEIsT0FBTyxDQUFDLFVBQUNDLE9BQU8sRUFBRW9ILE1BQU0sRUFBSztRQUNwQyxJQUFJQyxLQUFLLEdBQUcsQ0FBQztRQUNiLElBQU1DLFFBQVEsR0FBRyxFQUFFO1FBQ25CLElBQU14QixRQUFRLEdBQUdLLFdBQVcsQ0FBQyxZQUFNO1VBQy9CLElBQU0vZ0IsU0FBUyxHQUFHLE9BQUksQ0FBQzhoQixxQkFBcUIsQ0FBQzVqQixHQUFHLENBQUMxSSxPQUFPLENBQUM7VUFDekQsSUFBSXdLLFNBQVMsRUFBRTtZQUNYMmdCLGFBQWEsQ0FBQ0QsUUFBUSxDQUFDO1lBQ3ZCOUYsT0FBTyxDQUFDNWEsU0FBUyxDQUFDO1VBQ3RCO1VBQ0FpaUIsS0FBSyxFQUFFO1VBQ1AsSUFBSUEsS0FBSyxHQUFHQyxRQUFRLEVBQUU7WUFDbEJ2QixhQUFhLENBQUNELFFBQVEsQ0FBQztZQUN2QnNCLE1BQU0sQ0FBQyxJQUFJaG1CLEtBQUssMkNBQW9DOEQsbUJBQW1CLENBQUN0SyxPQUFPLENBQUMsRUFBRyxDQUFDO1VBQ3hGO1FBQ0osQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNULENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsd0JBQWUyc0IsZ0JBQWdCLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxFQUFFO01BQ3pELElBQU12TSxVQUFVLEdBQUcsRUFBRTtNQUNyQixJQUFJLENBQUNpTSx1QkFBdUIsQ0FBQzVrQixPQUFPLENBQUMsVUFBQ3ViLGFBQWEsRUFBRTFZLFNBQVMsRUFBSztRQUMvRCxJQUFJb2lCLFdBQVcsS0FDVkQsZ0JBQWdCLEtBQUtuaUIsU0FBUyxJQUFJLENBQUNBLFNBQVMsQ0FBQ3hLLE9BQU8sQ0FBQ3lLLFFBQVEsQ0FBQ2tpQixnQkFBZ0IsQ0FBQzNzQixPQUFPLENBQUMsQ0FBQyxFQUFFO1VBQzNGO1FBQ0o7UUFDQSxJQUFJNnNCLGFBQWEsSUFBSTNKLGFBQWEsS0FBSzJKLGFBQWEsRUFBRTtVQUNsRDtRQUNKO1FBQ0F2TSxVQUFVLENBQUMzWixJQUFJLENBQUM2RCxTQUFTLENBQUM7TUFDOUIsQ0FBQyxDQUFDO01BQ0YsT0FBTzhWLFVBQVU7SUFDckI7RUFBQztFQUFBO0FBQUE7QUFHTCxJQUFNd00sWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBSTlzQixPQUFPO0VBQUEsT0FBSytzQixxQkFBcUIsQ0FBQ0MsaUJBQWlCLENBQUNGLFlBQVksQ0FBQzlzQixPQUFPLENBQUM7QUFBQTtBQUFDLElBQzFGK3NCLHFCQUFxQjtFQUFBO0VBQUE7RUFDdkIsaUNBQWM7SUFBQTtJQUFBO0lBQ1YsNkJBQVNFLFNBQVM7SUFDbEIsUUFBS0MsZ0NBQWdDLEdBQUcsSUFBSTtJQUM1QyxRQUFLaFcscUJBQXFCLEdBQUcsQ0FDekI7TUFBRWxULEtBQUssRUFBRSxPQUFPO01BQUVtVCxRQUFRLEVBQUUsa0JBQUNuVCxLQUFLO1FBQUEsT0FBSyxRQUFLb1QsZ0JBQWdCLENBQUNwVCxLQUFLLENBQUM7TUFBQTtJQUFDLENBQUMsRUFDckU7TUFBRUEsS0FBSyxFQUFFLFFBQVE7TUFBRW1ULFFBQVEsRUFBRSxrQkFBQ25ULEtBQUs7UUFBQSxPQUFLLFFBQUttcEIsaUJBQWlCLENBQUNucEIsS0FBSyxDQUFDO01BQUE7SUFBQyxDQUFDLEVBQ3ZFO01BQUVBLEtBQUssRUFBRSxjQUFjO01BQUVtVCxRQUFRLEVBQUUsa0JBQUNuVCxLQUFLO1FBQUEsT0FBSyxRQUFLb3BCLDhCQUE4QixDQUFDcHBCLEtBQUssQ0FBQztNQUFBO0lBQUMsQ0FBQyxDQUM3RjtJQUNELFFBQUtvYSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQUM7RUFDM0I7RUFBQztJQUFBO0lBQUEsT0FDRCxzQkFBYTtNQUFBO01BQ1QsSUFBSSxDQUFDaVAsc0NBQXNDLEdBQUcsSUFBSSxDQUFDQSxzQ0FBc0MsQ0FBQ3RTLElBQUksQ0FBQyxJQUFJLENBQUM7TUFDcEcsSUFBTW5KLEVBQUUsR0FBRyxJQUFJLENBQUM1UixPQUFPLENBQUNrRCxPQUFPLENBQUNxbEIsTUFBTSxJQUFJLElBQUk7TUFDOUMsSUFBSSxDQUFDL2QsU0FBUyxHQUFHLElBQUltVCxTQUFTLENBQUMsSUFBSSxDQUFDM2QsT0FBTyxFQUFFLElBQUksQ0FBQ3N0QixTQUFTLEVBQUUsSUFBSSxDQUFDQyxVQUFVLEVBQUUsSUFBSSxDQUFDQyxjQUFjLEVBQUUsVUFBQ2IsZ0JBQWdCLEVBQUVDLFdBQVcsRUFBRUMsYUFBYTtRQUFBLE9BQUtFLHFCQUFxQixDQUFDQyxpQkFBaUIsQ0FBQ1MsY0FBYyxDQUFDZCxnQkFBZ0IsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLENBQUM7TUFBQSxHQUFFLElBQUksQ0FBQ2EsZ0JBQWdCLEVBQUU5YixFQUFFLEVBQUUsSUFBSW1XLE9BQU8sQ0FBQyxJQUFJLENBQUM0RixRQUFRLEVBQUUsSUFBSSxDQUFDQyxTQUFTLENBQUMsRUFBRSxJQUFJekYscUJBQXFCLEVBQUUsQ0FBQztNQUM5VixJQUFJLENBQUMwRixnQkFBZ0IsR0FBR3hJLGdCQUFnQixDQUFDLElBQUksQ0FBQzdhLFNBQVMsQ0FBQztNQUN4RCxJQUFJLENBQUN4SyxPQUFPLENBQUM4dEIsV0FBVyxHQUFHLElBQUksQ0FBQ0QsZ0JBQWdCO01BQ2hELElBQUksSUFBSSxDQUFDRSxnQkFBZ0IsRUFBRTtRQUN2QixJQUFJLENBQUN2akIsU0FBUyxDQUFDeVQsZUFBZSxHQUFHLElBQUksQ0FBQytQLGFBQWE7TUFDdkQ7TUFDQSxJQUFNQyxPQUFPLEdBQUcsQ0FDWixJQUFJdEYsYUFBYSxFQUFFLEVBQ25CLElBQUkyQixxQkFBcUIsRUFBRSxFQUMzQixJQUFJRyxtQkFBbUIsRUFBRSxFQUN6QixJQUFJZSxhQUFhLEVBQUUsRUFDbkIsSUFBSVEsNkJBQTZCLEVBQUUsQ0FDdEM7TUFDRGlDLE9BQU8sQ0FBQ3RtQixPQUFPLENBQUMsVUFBQ2tYLE1BQU0sRUFBSztRQUN4QixPQUFJLENBQUNyVSxTQUFTLENBQUMwakIsU0FBUyxDQUFDclAsTUFBTSxDQUFDO01BQ3BDLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTtJQUFBLE9BQ0QsbUJBQVU7TUFBQTtNQUNOa08scUJBQXFCLENBQUNDLGlCQUFpQixDQUFDbUIsaUJBQWlCLENBQUMsSUFBSSxDQUFDbnVCLE9BQU8sRUFBRSxJQUFJLENBQUN3SyxTQUFTLENBQUM7TUFDdkYsSUFBSSxDQUFDQSxTQUFTLENBQUM0akIsT0FBTyxFQUFFO01BQ3hCLElBQUksQ0FBQ2xYLHFCQUFxQixDQUFDdlAsT0FBTyxDQUFDLGlCQUF5QjtRQUFBLElBQXRCM0QsS0FBSyxTQUFMQSxLQUFLO1VBQUVtVCxRQUFRLFNBQVJBLFFBQVE7UUFDakQsT0FBSSxDQUFDM00sU0FBUyxDQUFDeEssT0FBTyxDQUFDUSxnQkFBZ0IsQ0FBQ3dELEtBQUssRUFBRW1ULFFBQVEsQ0FBQztNQUM1RCxDQUFDLENBQUM7TUFDRixJQUFJLENBQUNqVCxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ2pDO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsc0JBQWE7TUFBQTtNQUNUNm9CLHFCQUFxQixDQUFDQyxpQkFBaUIsQ0FBQ3FCLG1CQUFtQixDQUFDLElBQUksQ0FBQzdqQixTQUFTLENBQUM7TUFDM0UsSUFBSSxDQUFDQSxTQUFTLENBQUM0USxVQUFVLEVBQUU7TUFDM0IsSUFBSSxDQUFDbEUscUJBQXFCLENBQUN2UCxPQUFPLENBQUMsaUJBQXlCO1FBQUEsSUFBdEIzRCxLQUFLLFNBQUxBLEtBQUs7VUFBRW1ULFFBQVEsU0FBUkEsUUFBUTtRQUNqRCxPQUFJLENBQUMzTSxTQUFTLENBQUN4SyxPQUFPLENBQUN1WCxtQkFBbUIsQ0FBQ3ZULEtBQUssRUFBRW1ULFFBQVEsQ0FBQztNQUMvRCxDQUFDLENBQUM7TUFDRixJQUFJLENBQUNqVCxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3BDO0VBQUM7SUFBQTtJQUFBLE9BQ0QsZ0JBQU9GLEtBQUssRUFBRTtNQUNWLElBQUlBLEtBQUssQ0FBQ2UsSUFBSSxLQUFLLE9BQU8sSUFBSWYsS0FBSyxDQUFDZSxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ25ELE1BQU0sSUFBSXlCLEtBQUssd0hBQStHOEQsbUJBQW1CLENBQUN0RyxLQUFLLENBQUNzcUIsYUFBYSxDQUFDLEVBQUc7TUFDN0s7TUFDQSxJQUFJLENBQUNDLDJCQUEyQixDQUFDdnFCLEtBQUssQ0FBQ3NxQixhQUFhLEVBQUUsSUFBSSxDQUFDO0lBQy9EO0VBQUM7SUFBQTtJQUFBLE9BQ0QsZ0JBQU90cUIsS0FBSyxFQUFFO01BQUE7TUFDVixJQUFNd3FCLFNBQVMsR0FBR3hxQixLQUFLLENBQUNzcUIsYUFBYSxDQUFDcHJCLE9BQU8sQ0FBQzRuQixVQUFVO01BQ3hELElBQU1obEIsVUFBVSxHQUFHRixlQUFlLENBQUM0b0IsU0FBUyxDQUFDO01BQzdDLElBQUlqUCxRQUFRLEdBQUcsS0FBSztNQUNwQnpaLFVBQVUsQ0FBQzZCLE9BQU8sQ0FBQyxVQUFDc0MsU0FBUyxFQUFLO1FBQzlCLElBQUltVSxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQU1xTCxjQUFjLEdBQUcsSUFBSTFULEdBQUcsRUFBRTtRQUNoQzBULGNBQWMsQ0FBQ3pULEdBQUcsQ0FBQyxTQUFTLEVBQUUsWUFBTTtVQUNoQ2hTLEtBQUssQ0FBQ3ZCLGNBQWMsRUFBRTtRQUMxQixDQUFDLENBQUM7UUFDRmduQixjQUFjLENBQUN6VCxHQUFHLENBQUMsTUFBTSxFQUFFLFlBQU07VUFDN0JoUyxLQUFLLENBQUN5cUIsZUFBZSxFQUFFO1FBQzNCLENBQUMsQ0FBQztRQUNGaEYsY0FBYyxDQUFDelQsR0FBRyxDQUFDLE1BQU0sRUFBRSxZQUFNO1VBQzdCLElBQUloUyxLQUFLLENBQUNZLE1BQU0sS0FBS1osS0FBSyxDQUFDc3FCLGFBQWEsRUFBRTtZQUN0QztVQUNKO1FBQ0osQ0FBQyxDQUFDO1FBQ0Y3RSxjQUFjLENBQUN6VCxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQUMwVCxRQUFRLEVBQUs7VUFDekNuSyxRQUFRLEdBQUdtSyxRQUFRLENBQUN2bEIsS0FBSyxHQUFHd2xCLFFBQVEsQ0FBQ0QsUUFBUSxDQUFDdmxCLEtBQUssQ0FBQyxHQUFHLElBQUk7UUFDL0QsQ0FBQyxDQUFDO1FBQ0ZzbEIsY0FBYyxDQUFDelQsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFDMFQsUUFBUSxFQUFLO1VBQ3RDLElBQUksQ0FBQ0EsUUFBUSxDQUFDdmxCLEtBQUssRUFBRTtZQUNqQmlhLFlBQVksR0FBRyxPQUFJLENBQUNBLFlBQVk7VUFDcEMsQ0FBQyxNQUNJLElBQUksT0FBSSxDQUFDQSxZQUFZLENBQUNzTCxRQUFRLENBQUN2bEIsS0FBSyxDQUFDLEVBQUU7WUFDeENpYSxZQUFZLENBQUNzTCxRQUFRLENBQUN2bEIsS0FBSyxDQUFDLEdBQUcsT0FBSSxDQUFDaWEsWUFBWSxDQUFDc0wsUUFBUSxDQUFDdmxCLEtBQUssQ0FBQztVQUNwRTtRQUNKLENBQUMsQ0FBQztRQUNGOEYsU0FBUyxDQUFDbkQsU0FBUyxDQUFDYSxPQUFPLENBQUMsVUFBQytoQixRQUFRLEVBQUs7VUFDdEMsSUFBSWxMLEVBQUU7VUFDTixJQUFJaUwsY0FBYyxDQUFDalQsR0FBRyxDQUFDa1QsUUFBUSxDQUFDNWtCLElBQUksQ0FBQyxFQUFFO1lBQ25DLElBQU0wZ0IsUUFBUSxHQUFHLENBQUNoSCxFQUFFLEdBQUdpTCxjQUFjLENBQUMvZ0IsR0FBRyxDQUFDZ2hCLFFBQVEsQ0FBQzVrQixJQUFJLENBQUMsTUFBTSxJQUFJLElBQUkwWixFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUdBLEVBQUUsR0FBSSxZQUFNLENBQUUsQ0FBRTtZQUN0R2dILFFBQVEsQ0FBQ2tFLFFBQVEsQ0FBQztZQUNsQjtVQUNKO1VBQ0F0cEIsT0FBTyxDQUFDMnJCLElBQUksNEJBQXFCckMsUUFBUSxDQUFDNWtCLElBQUksMEJBQWUwcEIsU0FBUywwQ0FBK0I3bEIsS0FBSyxDQUFDUSxJQUFJLENBQUNzZ0IsY0FBYyxDQUFDcmlCLElBQUksRUFBRSxDQUFDLENBQUNlLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBSTtRQUN6SixDQUFDLENBQUM7UUFDRixxQ0FBMkJoQixNQUFNLENBQUM0RixPQUFPLENBQUNxUixZQUFZLENBQUMsd0NBQUU7VUFBcEQ7WUFBT3BSLEdBQUc7WUFBRTRTLEtBQUs7VUFDbEIsSUFBSUEsS0FBSyxDQUFDL2EsS0FBSyxFQUFFO1lBQ2IsT0FBSSxDQUFDMkYsU0FBUyxDQUFDM0YsS0FBSyxDQUFDbUksR0FBRyxFQUFFNFMsS0FBSyxDQUFDO1VBQ3BDO1VBQ0EsT0FBTyxPQUFJLENBQUN4QixZQUFZLENBQUNwUixHQUFHLENBQUM7UUFDakM7UUFDQSxPQUFJLENBQUN4QyxTQUFTLENBQUMvRCxNQUFNLENBQUN3RCxTQUFTLENBQUN4RCxNQUFNLEVBQUV3RCxTQUFTLENBQUNwRCxLQUFLLEVBQUUwWSxRQUFRLENBQUM7UUFDbEUsSUFBSS9XLDRCQUE0QixDQUFDeEUsS0FBSyxDQUFDc3FCLGFBQWEsRUFBRSxLQUFLLENBQUMsRUFBRTtVQUMxRCxPQUFJLENBQUNwQixnQ0FBZ0MsR0FBR2xwQixLQUFLLENBQUNzcUIsYUFBYTtRQUMvRDtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQTtJQUFBLE9BQ0QsbUJBQVU7TUFDTixPQUFPLElBQUksQ0FBQzlqQixTQUFTLENBQUNtVyxNQUFNLEVBQUU7SUFDbEM7RUFBQztJQUFBO0lBQUEsT0FDRCxjQUFLM2MsS0FBSyxFQUFFO01BQUE7TUFDUixJQUFJLENBQUMwcUIsaUJBQWlCLENBQUMxcUIsS0FBSyxDQUFDLENBQUMyRCxPQUFPLENBQUMsa0JBQStCO1FBQUEsSUFBNUI3QyxJQUFJLFVBQUpBLElBQUk7VUFBRXZCLElBQUksVUFBSkEsSUFBSTtVQUFFb3JCLFNBQVMsVUFBVEEsU0FBUztRQUMxRCxPQUFJLENBQUNua0IsU0FBUyxDQUFDNFksSUFBSSxDQUFDdGUsSUFBSSxFQUFFdkIsSUFBSSxFQUFFb3JCLFNBQVMsQ0FBQztNQUM5QyxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUE7SUFBQSxPQUNELGdCQUFPM3FCLEtBQUssRUFBRTtNQUFBO01BQ1YsSUFBSSxDQUFDMHFCLGlCQUFpQixDQUFDMXFCLEtBQUssQ0FBQyxDQUFDMkQsT0FBTyxDQUFDLGtCQUErQjtRQUFBLElBQTVCN0MsSUFBSSxVQUFKQSxJQUFJO1VBQUV2QixJQUFJLFVBQUpBLElBQUk7VUFBRW9yQixTQUFTLFVBQVRBLFNBQVM7UUFDMUQsT0FBSSxDQUFDbmtCLFNBQVMsQ0FBQzRWLE1BQU0sQ0FBQ3RiLElBQUksRUFBRXZCLElBQUksRUFBRW9yQixTQUFTLENBQUM7TUFDaEQsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBO0lBQUEsT0FDRCxrQkFBUzNxQixLQUFLLEVBQUU7TUFBQTtNQUNaLElBQUksQ0FBQzBxQixpQkFBaUIsQ0FBQzFxQixLQUFLLENBQUMsQ0FBQzJELE9BQU8sQ0FBQyxrQkFBb0I7UUFBQSxJQUFqQjdDLElBQUksVUFBSkEsSUFBSTtVQUFFdkIsSUFBSSxVQUFKQSxJQUFJO1FBQy9DLE9BQUksQ0FBQ2lILFNBQVMsQ0FBQzJZLFFBQVEsQ0FBQ3JlLElBQUksRUFBRXZCLElBQUksQ0FBQztNQUN2QyxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUE7SUFBQSxPQUNELDJCQUFrQlMsS0FBSyxFQUFFO01BQ3JCLElBQU1oRSxPQUFPLEdBQUdnRSxLQUFLLENBQUNzcUIsYUFBYTtNQUNuQyxJQUFJLENBQUN0dUIsT0FBTyxDQUFDa0QsT0FBTyxDQUFDYyxLQUFLLEVBQUU7UUFDeEIsTUFBTSxJQUFJd0MsS0FBSyxxREFBOEM4RCxtQkFBbUIsQ0FBQ3RLLE9BQU8sQ0FBQyxFQUFHO01BQ2hHO01BQ0EsSUFBTTR1QixTQUFTLEdBQUc1dUIsT0FBTyxDQUFDa0QsT0FBTyxDQUFDYyxLQUFLO01BQ3ZDLElBQU04QixVQUFVLEdBQUdGLGVBQWUsQ0FBQ2dwQixTQUFTLENBQUM7TUFDN0MsSUFBTUMsS0FBSyxHQUFHLEVBQUU7TUFDaEIvb0IsVUFBVSxDQUFDNkIsT0FBTyxDQUFDLFVBQUNzQyxTQUFTLEVBQUs7UUFDOUIsSUFBSTBrQixTQUFTLEdBQUcsSUFBSTtRQUNwQjFrQixTQUFTLENBQUNuRCxTQUFTLENBQUNhLE9BQU8sQ0FBQyxVQUFDK2hCLFFBQVEsRUFBSztVQUN0QyxRQUFRQSxRQUFRLENBQUM1a0IsSUFBSTtZQUNqQixLQUFLLE1BQU07Y0FDUDZwQixTQUFTLEdBQUdqRixRQUFRLENBQUN2bEIsS0FBSztjQUMxQjtZQUNKO2NBQ0ksTUFBTSxJQUFJcUMsS0FBSyw0QkFBcUJrakIsUUFBUSxDQUFDNWtCLElBQUkseUJBQWM4cEIsU0FBUyxTQUFLO1VBQUM7UUFFMUYsQ0FBQyxDQUFDO1FBQ0ZDLEtBQUssQ0FBQ2xvQixJQUFJLENBQUM7VUFDUDdCLElBQUksRUFBRW1GLFNBQVMsQ0FBQ3hELE1BQU07VUFDdEJsRCxJQUFJLEVBQUUwRyxTQUFTLENBQUNwRCxLQUFLO1VBQ3JCOG5CLFNBQVMsRUFBVEE7UUFDSixDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7TUFDRixPQUFPRSxLQUFLO0lBQ2hCO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsc0JBQWE5bUIsS0FBSyxFQUFFNUQsS0FBSyxFQUF3QztNQUFBLElBQXRDNmMsWUFBWSx1RUFBRyxJQUFJO01BQUEsSUFBRXpCLFFBQVEsdUVBQUcsSUFBSTtNQUMzRCxPQUFPLElBQUksQ0FBQy9VLFNBQVMsQ0FBQ3dMLEdBQUcsQ0FBQ2pPLEtBQUssRUFBRTVELEtBQUssRUFBRTZjLFlBQVksRUFBRXpCLFFBQVEsQ0FBQztJQUNuRTtFQUFDO0lBQUE7SUFBQSxPQUNELDBCQUFpQnZiLEtBQUssRUFBRTtNQUNwQixJQUFNWSxNQUFNLEdBQUdaLEtBQUssQ0FBQ1ksTUFBTTtNQUMzQixJQUFJLENBQUNBLE1BQU0sRUFBRTtRQUNUO01BQ0o7TUFDQSxJQUFJLENBQUMycEIsMkJBQTJCLENBQUMzcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQztJQUNyRDtFQUFDO0lBQUE7SUFBQSxPQUNELDJCQUFrQlosS0FBSyxFQUFFO01BQ3JCLElBQU1ZLE1BQU0sR0FBR1osS0FBSyxDQUFDWSxNQUFNO01BQzNCLElBQUksQ0FBQ0EsTUFBTSxFQUFFO1FBQ1Q7TUFDSjtNQUNBLElBQUksQ0FBQzJwQiwyQkFBMkIsQ0FBQzNwQixNQUFNLEVBQUUsUUFBUSxDQUFDO0lBQ3REO0VBQUM7SUFBQTtJQUFBLE9BQ0QscUNBQTRCNUUsT0FBTyxFQUFFOHVCLFNBQVMsRUFBRTtNQUM1QyxJQUFJdFEsRUFBRTtNQUNOLElBQUksQ0FBQ2pVLDZCQUE2QixDQUFDdkssT0FBTyxFQUFFLElBQUksQ0FBQ3dLLFNBQVMsQ0FBQyxFQUFFO1FBQ3pEO01BQ0o7TUFDQSxJQUFJLEVBQUV4SyxPQUFPLFlBQVlnTCxXQUFXLENBQUMsRUFBRTtRQUNuQyxNQUFNLElBQUl4RSxLQUFLLENBQUMsNENBQTRDLENBQUM7TUFDakU7TUFDQSxJQUFJeEcsT0FBTyxZQUFZc0ksZ0JBQWdCLElBQUl0SSxPQUFPLENBQUMrRSxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQ2hFLElBQU1pSSxHQUFHLEdBQUdoTixPQUFPLENBQUM4RSxJQUFJO1FBQ3hCLElBQUksQ0FBQzBaLEVBQUUsR0FBR3hlLE9BQU8sQ0FBQzZFLEtBQUssTUFBTSxJQUFJLElBQUkyWixFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUdBLEVBQUUsQ0FBQ2pZLE1BQU0sRUFBRTtVQUNyRSxJQUFJLENBQUM2WCxZQUFZLENBQUNwUixHQUFHLENBQUMsR0FBR2hOLE9BQU87UUFDcEMsQ0FBQyxNQUNJLElBQUksSUFBSSxDQUFDb2UsWUFBWSxDQUFDcFIsR0FBRyxDQUFDLEVBQUU7VUFDN0IsT0FBTyxJQUFJLENBQUNvUixZQUFZLENBQUNwUixHQUFHLENBQUM7UUFDakM7TUFDSjtNQUNBLElBQU1vYixjQUFjLEdBQUc1Ziw0QkFBNEIsQ0FBQ3hJLE9BQU8sRUFBRSxLQUFLLENBQUM7TUFDbkUsSUFBSSxDQUFDb29CLGNBQWMsRUFBRTtRQUNqQjtNQUNKO01BQ0EsSUFBTXZILFlBQVksR0FBR3NMLGVBQWUsQ0FBQy9ELGNBQWMsQ0FBQztNQUNwRCxJQUFJLENBQUN2SCxZQUFZLENBQUN1TCxlQUFlLEVBQUU7UUFDL0J2TCxZQUFZLENBQUN1TCxlQUFlLEdBQUcsT0FBTztNQUMxQztNQUNBLElBQUksSUFBSSxDQUFDYyxnQ0FBZ0MsS0FBS2x0QixPQUFPLEVBQUU7UUFDbkQ2Z0IsWUFBWSxDQUFDRyxZQUFZLEdBQUcsS0FBSztNQUNyQztNQUNBLElBQUk4TixTQUFTLEtBQUssUUFBUSxJQUFJak8sWUFBWSxDQUFDdUwsZUFBZSxLQUFLLE9BQU8sRUFBRTtRQUNwRXZMLFlBQVksQ0FBQ3VMLGVBQWUsR0FBRyxRQUFRO01BQzNDO01BQ0EsSUFBSTBDLFNBQVMsSUFBSWpPLFlBQVksQ0FBQ3VMLGVBQWUsS0FBSzBDLFNBQVMsRUFBRTtRQUN6RDtNQUNKO01BQ0EsSUFBSSxLQUFLLEtBQUtqTyxZQUFZLENBQUN0QixRQUFRLEVBQUU7UUFDakMsSUFBSXNCLFlBQVksQ0FBQ3VMLGVBQWUsS0FBSyxPQUFPLEVBQUU7VUFDMUN2TCxZQUFZLENBQUN0QixRQUFRLEdBQUcsSUFBSTtRQUNoQyxDQUFDLE1BQ0k7VUFDRHNCLFlBQVksQ0FBQ3RCLFFBQVEsR0FBRyxDQUFDO1FBQzdCO01BQ0o7TUFDQSxJQUFNd1AsVUFBVSxHQUFHM21CLG1CQUFtQixDQUFDcEksT0FBTyxFQUFFLElBQUksQ0FBQ3dLLFNBQVMsQ0FBQ25DLFVBQVUsQ0FBQztNQUMxRSxJQUFJLENBQUNtQyxTQUFTLENBQUN3TCxHQUFHLENBQUM2SyxZQUFZLENBQUNySixTQUFTLEVBQUV1WCxVQUFVLEVBQUVsTyxZQUFZLENBQUNHLFlBQVksRUFBRUgsWUFBWSxDQUFDdEIsUUFBUSxDQUFDO0lBQzVHO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsd0NBQStCdmIsS0FBSyxFQUFFO01BQ2xDLElBQUlBLEtBQUssQ0FBQ1ksTUFBTSxLQUFLLElBQUksQ0FBQzVFLE9BQU8sRUFBRTtRQUMvQjtNQUNKO01BQ0EsSUFBTWd2QixlQUFlLEdBQUdockIsS0FBSyxDQUFDd0IsTUFBTSxDQUFDeXBCLFVBQVU7TUFDL0MsSUFBSUQsZUFBZSxDQUFDeGtCLFNBQVMsQ0FBQzBrQixTQUFTLEVBQUUsRUFBRTtRQUN2QztNQUNKO01BQ0EsSUFBTUMsZUFBZSxHQUFHbmxCLGdDQUFnQyxDQUFDZ2xCLGVBQWUsQ0FBQ2h2QixPQUFPLENBQUM7TUFDakYsSUFBTTBkLGFBQWEsR0FBR3lSLGVBQWUsQ0FBQ2xuQixHQUFHLENBQUNra0IsZUFBZSxDQUFDO01BQzFELElBQUksQ0FBQzNoQixTQUFTLENBQUNpSSxRQUFRLENBQUN1YyxlQUFlLENBQUN4a0IsU0FBUyxFQUFFa1QsYUFBYSxDQUFDO01BQ2pFc1IsZUFBZSxDQUFDaHZCLE9BQU8sQ0FBQ1EsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDNnNCLHNDQUFzQyxDQUFDO0lBQzVHO0VBQUM7SUFBQTtJQUFBLE9BQ0QsZ0RBQXVDcnBCLEtBQUssRUFBRTtNQUMxQyxJQUFNZ3JCLGVBQWUsR0FBR2hyQixLQUFLLENBQUN3QixNQUFNLENBQUN5cEIsVUFBVTtNQUMvQ0QsZUFBZSxDQUFDaHZCLE9BQU8sQ0FBQ3VYLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQzhWLHNDQUFzQyxDQUFDO01BQzNHLElBQUkyQixlQUFlLENBQUN4a0IsU0FBUyxDQUFDMGtCLFNBQVMsRUFBRSxLQUFLLElBQUksQ0FBQzFrQixTQUFTLEVBQUU7UUFDMUQ7TUFDSjtNQUNBLElBQUksQ0FBQ0EsU0FBUyxDQUFDMkksV0FBVyxDQUFDNmIsZUFBZSxDQUFDeGtCLFNBQVMsQ0FBQztJQUN6RDtFQUFDO0lBQUE7SUFBQSxPQUNELHVCQUFjMUYsSUFBSSxFQUFxRDtNQUFBLElBQW5EVSxNQUFNLHVFQUFHLENBQUMsQ0FBQztNQUFBLElBQUU0cEIsU0FBUyx1RUFBRyxJQUFJO01BQUEsSUFBRUMsVUFBVSx1RUFBRyxLQUFLO01BQ2pFN3BCLE1BQU0sQ0FBQ3lwQixVQUFVLEdBQUcsSUFBSTtNQUN4QnpwQixNQUFNLENBQUNnRixTQUFTLEdBQUcsSUFBSSxDQUFDcWpCLGdCQUFnQjtNQUN4QyxJQUFJLENBQUN0b0IsUUFBUSxDQUFDVCxJQUFJLEVBQUU7UUFBRVUsTUFBTSxFQUFOQSxNQUFNO1FBQUVDLE1BQU0sRUFBRSxNQUFNO1FBQUU0cEIsVUFBVSxFQUFWQSxVQUFVO1FBQUUvTCxPQUFPLEVBQUU4TDtNQUFVLENBQUMsQ0FBQztJQUNuRjtFQUFDO0VBQUE7QUFBQSxFQTNPK0JydkIsMkRBQVU7QUE2TzlDZ3RCLHFCQUFxQixDQUFDN1UsTUFBTSxHQUFHO0VBQzNCcFQsSUFBSSxFQUFFd3FCLE1BQU07RUFDWm5KLEdBQUcsRUFBRW1KLE1BQU07RUFDWC9pQixLQUFLLEVBQUVwRixNQUFNO0VBQ2Jvb0IsSUFBSSxFQUFFRCxNQUFNO0VBQ1oxUixTQUFTLEVBQUU7SUFBRTdZLElBQUksRUFBRTRELEtBQUs7SUFBRSxXQUFTO0VBQUcsQ0FBQztFQUN2QzRXLFFBQVEsRUFBRTtJQUFFeGEsSUFBSSxFQUFFeXFCLE1BQU07SUFBRSxXQUFTO0VBQUksQ0FBQztFQUN4QzVkLEVBQUUsRUFBRTBkLE1BQU07RUFDVnhSLFdBQVcsRUFBRTtJQUFFL1ksSUFBSSxFQUFFdXFCLE1BQU07SUFBRSxXQUFTO0VBQUc7QUFDN0MsQ0FBQztBQUNEdkMscUJBQXFCLENBQUNDLGlCQUFpQixHQUFHLElBQUlYLGlCQUFpQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDLzNGakI7QUFBQSxJQUUxQ3pvQixTQUFTO0VBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBLE9BQ1gsbUJBQVU7TUFDTixJQUFJNGEsRUFBRSxFQUFFaVIsRUFBRTtNQUNWLElBQUksQ0FBQ3p2QixPQUFPLENBQUNxTCxTQUFTLEdBQUcsRUFBRTtNQUMzQixJQUFJLENBQUNrQixLQUFLLEdBQUcsQ0FBQ2lTLEVBQUUsR0FBRyxJQUFJLENBQUMrTyxVQUFVLE1BQU0sSUFBSSxJQUFJL08sRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHQSxFQUFFLEdBQUd6VSxTQUFTO01BQzlFLElBQUksQ0FBQzJsQixLQUFLLEdBQUcsQ0FBQ0QsRUFBRSxHQUFHLElBQUksQ0FBQ0UsVUFBVSxNQUFNLElBQUksSUFBSUYsRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHQSxFQUFFLEdBQUcxbEIsU0FBUztNQUM5RSxJQUFJLENBQUM3RixhQUFhLENBQUMsU0FBUyxDQUFDO01BQzdCLElBQU15WixTQUFTLEdBQUd0SCxNQUFNLENBQUN1WixzQkFBc0IsQ0FBQyxJQUFJLENBQUNDLGNBQWMsQ0FBQztNQUNwRSxJQUFJLENBQUNDLGdCQUFnQixFQUFFO01BQ3ZCLElBQUksQ0FBQzl0QixHQUFHLEdBQUcsSUFBSTJiLFNBQVMsQ0FBQztRQUNyQi9ZLE1BQU0sRUFBRSxJQUFJLENBQUM1RSxPQUFPO1FBQ3BCdU0sS0FBSyxFQUFFLElBQUksQ0FBQ0EsS0FBSztRQUNqQm1qQixLQUFLLEVBQUUsSUFBSSxDQUFDQTtNQUNoQixDQUFDLENBQUM7TUFDRixJQUFJLENBQUMxdkIsT0FBTyxDQUFDK3ZCLElBQUksR0FBRyxJQUFJLENBQUMvdEIsR0FBRztNQUM1QixJQUFJLENBQUNrQyxhQUFhLENBQUMsT0FBTyxFQUFFO1FBQ3hCc0csU0FBUyxFQUFFbVQ7TUFDZixDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUE7SUFBQSxPQUNELHNCQUFhO01BQ1QsSUFBSSxDQUFDbVMsZ0JBQWdCLEVBQUU7TUFDdkIsSUFBSSxDQUFDNXJCLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDakM7RUFBQztJQUFBO0lBQUEsT0FDRCw0QkFBbUI7TUFDZixJQUFJLElBQUksQ0FBQ2xFLE9BQU8sQ0FBQyt2QixJQUFJLEtBQUtobUIsU0FBUyxFQUFFO1FBQ2pDLElBQUksQ0FBQy9KLE9BQU8sQ0FBQyt2QixJQUFJLENBQUNDLFFBQVEsRUFBRTtRQUM1QixPQUFPLElBQUksQ0FBQ2h3QixPQUFPLENBQUMrdkIsSUFBSTtNQUM1QjtJQUNKO0VBQUM7SUFBQTtJQUFBLE9BQ0QsdUJBQWNqckIsSUFBSSxFQUFnQjtNQUFBLElBQWRRLE9BQU8sdUVBQUcsQ0FBQyxDQUFDO01BQzVCLElBQU1FLE1BQU0sR0FBRzJCLE1BQU0sQ0FBQzBGLE1BQU0sQ0FBQztRQUFFcVcsYUFBYSxFQUFFLElBQUksQ0FBQzJNLGNBQWM7UUFBRXRqQixLQUFLLEVBQUUsSUFBSSxDQUFDQSxLQUFLO1FBQUVtakIsS0FBSyxFQUFFLElBQUksQ0FBQ0E7TUFBTSxDQUFDLEVBQUVwcUIsT0FBTyxDQUFDO01BQ25ILElBQUksQ0FBQ0MsUUFBUSxDQUFDVCxJQUFJLEVBQUU7UUFBRVUsTUFBTSxFQUFOQSxNQUFNO1FBQUVDLE1BQU0sRUFBRTtNQUFTLENBQUMsQ0FBQztJQUNyRDtFQUFDO0VBQUE7QUFBQSxFQWhDbUIxRiwyREFBVTtBQWtDbEM2RCxTQUFTLENBQUNzVSxNQUFNLEdBQUc7RUFDZjFOLFNBQVMsRUFBRThrQixNQUFNO0VBQ2pCL2lCLEtBQUssRUFBRXBGLE1BQU07RUFDYnVvQixLQUFLLEVBQUVPO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QytDO0FBQ3hCO0FBQ3lCO0FBQ0E7QUFDSjtBQUNFO0FBQUEsSUFFekNyc0IsU0FBUztFQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQSxPQUNYLG1CQUFVO01BQ04sSUFBTTJzQixjQUFjLEdBQUcsSUFBSSxDQUFDQyxlQUFlO01BQzNDLElBQU1DLFdBQVcsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixJQUFJSCxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTztNQUN6RSxJQUFNSSxXQUFXLEdBQUcsQ0FBQ0YsV0FBVyxDQUFDLENBQUMvbUIsTUFBTSxDQUFDNm1CLGNBQWMsQ0FBQztNQUN4RCxJQUFNSyxjQUFjLEdBQUdELFdBQVcsQ0FBQ25YLE1BQU0sQ0FBQyxVQUFDcVgsSUFBSSxFQUFFaGxCLEtBQUssRUFBSztRQUN2RCxPQUFPOGtCLFdBQVcsQ0FBQzNyQixPQUFPLENBQUM2ckIsSUFBSSxDQUFDLEtBQUtobEIsS0FBSztNQUM5QyxDQUFDLENBQUM7TUFDRixJQUFNbEMsT0FBTyxHQUFHO1FBQ1ptbkIsVUFBVSxFQUFFRixjQUFjO1FBQzFCM0MsT0FBTyxFQUFFLENBQ0wsT0FBTyxLQUFLLElBQUksQ0FBQzhDLFVBQVUsR0FDckIsSUFBSVQsMkRBQWMsQ0FBQztVQUFFRyxXQUFXLEVBQUVBO1FBQVksQ0FBQyxDQUFDLEdBQ2hELElBQUlKLDBEQUFhLENBQUM7VUFBRUksV0FBVyxFQUFFQTtRQUFZLENBQUMsQ0FBQyxFQUNyRCxJQUFJTCwyREFBZSxFQUFFO01BRTdCLENBQUM7TUFDRCxJQUFJLElBQUksQ0FBQ1ksbUJBQW1CLEVBQUU7UUFDMUJybkIsT0FBTyxDQUFDOG1CLFdBQVcsR0FBRyxJQUFJLENBQUNDLGdCQUFnQjtNQUMvQztNQUNBLElBQUksSUFBSSxDQUFDTyw4QkFBOEIsRUFBRTtRQUNyQ3RuQixPQUFPLENBQUN1bkIsc0JBQXNCLEdBQUcsSUFBSSxDQUFDQywyQkFBMkI7TUFDckU7TUFDQSxJQUFJLElBQUksQ0FBQ0MseUJBQXlCLEVBQUU7UUFDaEN6bkIsT0FBTyxDQUFDMG5CLGlCQUFpQixHQUFHLElBQUksQ0FBQ0Msc0JBQXNCO01BQzNEO01BQ0EsSUFBSSxJQUFJLENBQUNDLGFBQWEsRUFBRTtRQUNwQjVuQixPQUFPLENBQUM2bkIsS0FBSyxHQUFHLElBQUksQ0FBQ0MsVUFBVTtNQUNuQztNQUNBLElBQUksSUFBSSxDQUFDQyxvQkFBb0IsRUFBRTtRQUMzQi9uQixPQUFPLENBQUNnb0IsWUFBWSxHQUFHLElBQUksQ0FBQ0MsaUJBQWlCO01BQ2pEO01BQ0EsSUFBSSxJQUFJLENBQUNDLFVBQVUsRUFBRTtRQUNqQmxvQixPQUFPLENBQUNza0IsT0FBTyxDQUFDdG5CLElBQUksQ0FBQyxJQUFJd3BCLDJEQUFlLEVBQUUsQ0FBQztNQUMvQztNQUNBLElBQUksQ0FBQ2pzQixhQUFhLENBQUMsYUFBYSxFQUFFO1FBQUV5RixPQUFPLEVBQVBBO01BQVEsQ0FBQyxDQUFDO01BQzlDLElBQU1tb0IsSUFBSSxHQUFHLElBQUk1Qiw2Q0FBSSxDQUFDdm1CLE9BQU8sQ0FBQztNQUM5QixJQUFJLENBQUN6RixhQUFhLENBQUMsU0FBUyxFQUFFO1FBQUU0dEIsSUFBSSxFQUFKQSxJQUFJO1FBQUVub0IsT0FBTyxFQUFQQTtNQUFRLENBQUMsQ0FBQztJQUNwRDtFQUFDO0lBQUE7SUFBQSxPQUNELHVCQUFjN0UsSUFBSSxFQUFFUSxPQUFPLEVBQUU7TUFDekIsSUFBSSxDQUFDQyxRQUFRLENBQUNULElBQUksRUFBRTtRQUFFVSxNQUFNLEVBQUVGLE9BQU87UUFBRUcsTUFBTSxFQUFFO01BQU8sQ0FBQyxDQUFDO0lBQzVEO0VBQUM7RUFBQTtBQUFBLEVBekNtQjFGLDJEQUFVO0FBMkNsQzZELFNBQVMsQ0FBQ3NVLE1BQU0sR0FBRztFQUNmZ1osc0JBQXNCLEVBQUVqQixPQUFPO0VBQy9Cb0IsaUJBQWlCLEVBQUUvQixNQUFNO0VBQ3pCa0MsS0FBSyxFQUFFdkIsT0FBTztFQUNkYSxVQUFVLEVBQUVub0IsS0FBSztFQUNqQmdwQixZQUFZLEVBQUVyQyxNQUFNO0VBQ3BCeUMsS0FBSyxFQUFFekMsTUFBTTtFQUNiMEMsS0FBSyxFQUFFL0IsT0FBTztFQUNkUSxXQUFXLEVBQUVuQjtBQUNqQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0QrQztBQUFBLElBRTFDMXJCLFNBQVM7RUFBQTtFQUFBO0VBQ1gscUJBQWM7SUFBQTtJQUFBO0lBQ1YsMkJBQVNxcEIsU0FBUztJQUNsQixNQUFLZ0YsV0FBVyxHQUFHLEtBQUs7SUFDeEIsTUFBS0MsV0FBVyxzWEFHakI7SUFDQyxNQUFLQyxVQUFVLHVsQkFHaEI7SUFBQztFQUNKO0VBQUM7SUFBQTtJQUFBLE9BQ0QsbUJBQVU7TUFDTixJQUFJLElBQUksQ0FBQ0MsZ0JBQWdCLEtBQUssU0FBUyxFQUFFO1FBQ3JDLElBQUksQ0FBQ0YsV0FBVyxHQUFHLElBQUksQ0FBQ0UsZ0JBQWdCO01BQzVDO01BQ0EsSUFBSSxJQUFJLENBQUNDLGVBQWUsS0FBSyxTQUFTLEVBQUU7UUFDcEMsSUFBSSxDQUFDRixVQUFVLEdBQUcsSUFBSSxDQUFDRSxlQUFlO01BQzFDO01BQ0EsSUFBTUMsTUFBTSxHQUFHLElBQUksQ0FBQ0MsWUFBWSxFQUFFO01BQ2xDLElBQUksQ0FBQ3Z5QixPQUFPLENBQUN3eUIscUJBQXFCLENBQUMsVUFBVSxFQUFFRixNQUFNLENBQUM7TUFDdEQsSUFBSSxDQUFDcHVCLGFBQWEsQ0FBQyxTQUFTLEVBQUU7UUFBRWxFLE9BQU8sRUFBRSxJQUFJLENBQUNBLE9BQU87UUFBRXN5QixNQUFNLEVBQUVBO01BQU8sQ0FBQyxDQUFDO0lBQzVFO0VBQUM7SUFBQTtJQUFBLE9BQ0Qsd0JBQWU7TUFBQTtNQUNYLElBQU1BLE1BQU0sR0FBR2h5QixRQUFRLENBQUM4SyxhQUFhLENBQUMsUUFBUSxDQUFDO01BQy9Da25CLE1BQU0sQ0FBQ3Z0QixJQUFJLEdBQUcsUUFBUTtNQUN0QixxQkFBQXV0QixNQUFNLENBQUNueEIsU0FBUyxFQUFDRyxHQUFHLDZDQUFJLElBQUksQ0FBQ214QixrQkFBa0IsRUFBQztNQUNoREgsTUFBTSxDQUFDcmtCLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BQ3JDcWtCLE1BQU0sQ0FBQzl4QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDWSxNQUFNLENBQUMyWixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDeER1WCxNQUFNLENBQUNqbkIsU0FBUyxHQUFHLElBQUksQ0FBQzZtQixXQUFXLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQ1EsaUJBQWlCO01BQ2xFLE9BQU9KLE1BQU07SUFDakI7RUFBQztJQUFBO0lBQUEsT0FDRCxnQkFBT3R1QixLQUFLLEVBQUU7TUFDVixJQUFJLENBQUNpdUIsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDQSxXQUFXO01BQ3BDLElBQU1VLG1CQUFtQixHQUFHM3VCLEtBQUssQ0FBQ3NxQixhQUFhO01BQy9DcUUsbUJBQW1CLENBQUN0bkIsU0FBUyxHQUFHLElBQUksQ0FBQzRtQixXQUFXLEdBQzFDLElBQUksQ0FBQ0UsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUNTLGdCQUFnQixHQUM3QyxJQUFJLENBQUNWLFdBQVcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDUSxpQkFBaUI7TUFDckQsSUFBSSxDQUFDMXlCLE9BQU8sQ0FBQ2lPLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDZ2tCLFdBQVcsR0FBRyxNQUFNLEdBQUcsVUFBVSxDQUFDO01BQ3pFLElBQUksQ0FBQy90QixhQUFhLENBQUMsSUFBSSxDQUFDK3RCLFdBQVcsR0FBRyxNQUFNLEdBQUcsTUFBTSxFQUFFO1FBQUVqeUIsT0FBTyxFQUFFLElBQUksQ0FBQ0EsT0FBTztRQUFFc3lCLE1BQU0sRUFBRUs7TUFBb0IsQ0FBQyxDQUFDO0lBQ2xIO0VBQUM7SUFBQTtJQUFBLE9BQ0QsdUJBQWM3dEIsSUFBSSxFQUFFUSxPQUFPLEVBQUU7TUFDekIsSUFBSSxDQUFDQyxRQUFRLENBQUNULElBQUksRUFBRTtRQUFFVSxNQUFNLEVBQUVGLE9BQU87UUFBRUcsTUFBTSxFQUFFO01BQWtCLENBQUMsQ0FBQztJQUN2RTtFQUFDO0VBQUE7QUFBQSxFQTVDbUIxRiwyREFBVTtBQThDbEM2RCxTQUFTLENBQUNzVSxNQUFNLEdBQUc7RUFDZjJhLFlBQVksRUFBRTtJQUFFOXRCLElBQUksRUFBRXVxQixNQUFNO0lBQUUsV0FBUztFQUFPLENBQUM7RUFDL0M0QyxXQUFXLEVBQUU7SUFBRW50QixJQUFJLEVBQUV1cUIsTUFBTTtJQUFFLFdBQVM7RUFBVSxDQUFDO0VBQ2pEd0QsV0FBVyxFQUFFO0lBQUUvdEIsSUFBSSxFQUFFdXFCLE1BQU07SUFBRSxXQUFTO0VBQU8sQ0FBQztFQUM5QzZDLFVBQVUsRUFBRTtJQUFFcHRCLElBQUksRUFBRXVxQixNQUFNO0lBQUUsV0FBUztFQUFVLENBQUM7RUFDaER5RCxhQUFhLEVBQUVwcUI7QUFDbkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RCtDO0FBQ3ZCO0FBQUEsSUFFbkJxcUIsZ0JBQWdCO0VBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtFQUFBO0VBQUE7QUFBQSxFQUFTanpCLDJEQUFVOzs7Ozs7Ozs7Ozs7O0FDSHpDOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FjYy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9iY2tvZmYuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWRyb3B6b25lL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXN2ZWx0ZS9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1zd3VwL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdG9nZ2xlLXBhc3N3b3JkL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdHVyYm8vYXNzZXRzL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtZHJvcHpvbmUvYXNzZXRzL2Rpc3Qvc3R5bGUubWluLmNzcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9hc3NldHMvZGlzdC9saXZlLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdG9nZ2xlLXBhc3N3b3JkL2Fzc2V0cy9kaXN0L3N0eWxlLm1pbi5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiaW1wb3J0ICdAc3ltZm9ueS91eC1kcm9wem9uZS9kaXN0L3N0eWxlLm1pbi5jc3MnO1xuaW1wb3J0ICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9kaXN0L2xpdmUubWluLmNzcyc7XG5pbXBvcnQgJ0BzeW1mb255L3V4LXRvZ2dsZS1wYXNzd29yZC9kaXN0L3N0eWxlLm1pbi5jc3MnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtZHJvcHpvbmUtLWRyb3B6b25lJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LWRyb3B6b25lL2Rpc3QvY29udHJvbGxlci5qcycpLFxuICAnbGl2ZSc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9kaXN0L2xpdmVfY29udHJvbGxlci5qcycpLFxuICAnc3ltZm9ueS0tdXgtc3ZlbHRlLS1zdmVsdGUnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtc3ZlbHRlL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnKSxcbiAgJ3N5bWZvbnktLXV4LXN3dXAtLXN3dXAnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtc3d1cC9kaXN0L2NvbnRyb2xsZXIuanMnKSxcbiAgJ3N5bWZvbnktLXV4LXRvZ2dsZS1wYXNzd29yZC0tdG9nZ2xlLXBhc3N3b3JkJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXRvZ2dsZS1wYXNzd29yZC9kaXN0L2NvbnRyb2xsZXIuanMnKSxcbiAgJ3N5bWZvbnktLXV4LXR1cmJvLS10dXJiby1jb3JlJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5cbmNvbnN0IGFjYyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGlzYXRpb24gcGFnZSBhY2N1ZWlsXCIpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnRuXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjYy50b2dnbGVOYXYpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duQ2F0ZXJnb3JpZXNcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjLnRvZ2dsZURyb3BDYXRlZ29yaWVzKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bk1hcnF1ZXNcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjLnRvZ2dsZURyb3BNYXJxdWVzKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25HZW5yZVwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2MudG9nZ2xlRHJvcEdlbnJlKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNvdWxldXJzXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjYy50b2dnbGVEcm9wQ291bGV1cnMpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2ZpbHRyZU1vYmlsZVwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2MudG9nZ2xlRmlsdHJlTW9iaWxlKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNmaWx0ZXJTZWxlY3Rpb25cIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIGFjYy50b2dnbGVGcmlsdGVyU2VsZWN0aW9uXG4gICAgICApO1xuICB9LFxuXG4gIHRvZ2dsZU5hdjogZnVuY3Rpb24gKCkge1xuICAgIC8vIFJlw6ljdXDDqHJhdGlvbiBkZXMgc3ZnJ3MnXG4gICAgY29uc3QgYnVyZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnVyZ2VyU3ZnXCIpO1xuICAgIGNvbnN0IGNyb2l4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcm9peFN2Z1wiKTtcbiAgICBjb25zdCBtZW51TW9iaWxlID1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlZC1tZW51XCIpO1xuXG4gICAgYnVyZ2dlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGNyb2l4LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG5cbiAgICBjb25zdCB0b2dnbGVkTWVudSA9IG1lbnVNb2JpbGUuY2xhc3NMaXN0LnRvZ2dsZShcbiAgICAgIFwiLXRyYW5zbGF0ZS15LWZ1bGxcIlxuICAgICk7XG5cbiAgICBpZiAodG9nZ2xlZE1lbnUgPT0gdHJ1ZSkge1xuICAgICAgbWVudU1vYmlsZS5jbGFzc0xpc3QuYWRkKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVNb2JpbGUuY2xhc3NMaXN0LnJlbW92ZShcIi10cmFuc2xhdGUteS1mdWxsXCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBmb25jdGlvbiBkcm9wIGZpbHRyZSBjYXRlZ29yaWVzXG4gIHRvZ2dsZURyb3BDYXRlZ29yaWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1lbnVGaWx0cmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNzdWJtZW51RmlsdHJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImR1cmF0aW9uLTUwMFwiKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNhcnJvd0NhdGVnb3JpZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLTE4MFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25DYXRlcmdvcmllc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiYWNrZHJvcC1ibHVyLTN4bFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25DYXRlcmdvcmllc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiZy13aGl0ZS8yNVwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JzRmlsdGVyc0NhdGVnb3JpZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwidGV4dC1waW5rLTkwMFwiKTtcbiAgfSxcblxuICAvLyBmb25jdGlvbiBkcm9wIGZpbHRyZSBNYXJxdWVzXG4gIHRvZ2dsZURyb3BNYXJxdWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1lbnVGaWx0cmVNYXJxdWVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNhcnJvd01hcnF1ZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLTE4MFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25NYXJxdWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJhY2tkcm9wLWJsdXItM3hsXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bk1hcnF1ZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmctd2hpdGUvMjVcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yc0ZpbHRlcnNNYXJxdWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInRleHQtcGluay05MDBcIik7XG4gIH0sXG5cbiAgLy8gZm9uY3Rpb24gZHJvcCBmaWx0cmUgR2VucmVcbiAgdG9nZ2xlRHJvcEdlbnJlOiBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1lbnVGaWx0cmVHZW5yZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Fycm93R2VucmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLTE4MFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25HZW5yZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiYWNrZHJvcC1ibHVyLTN4bFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25HZW5yZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiZy13aGl0ZS8yNVwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JzRmlsdGVyc0dlbnJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInRleHQtcGluay05MDBcIik7XG4gIH0sXG5cbiAgLy8gZm9uY3Rpb24gZHJvcCBmaWx0cmUgQ291bGV1cnNcbiAgdG9nZ2xlRHJvcENvdWxldXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJiZW5vaXRcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1lbnVGaWx0cmVDb3VsZXVyc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Fycm93Q291bGV1cnNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLTE4MFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25Db3VsZXVyc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiYWNrZHJvcC1ibHVyLTN4bFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25Db3VsZXVyc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiZy13aGl0ZS8yNVwiKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNjb2xvcnNGaWx0ZXJzQ291bGV1clwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJ0ZXh0LXBpbmstOTAwXCIpO1xuICB9LFxuXG4gIHRvZ2dsZUZpbHRyZU1vYmlsZTogZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNmaWx0cmVNb2JpbGVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLTE4MFwiKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNmaWx0cmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9LFxuICB0b2dnbGVGcmlsdGVyU2VsZWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbWVudVNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNzdWJtZW51RmlsdGVyU2VsZWN0aW9uXCJcbiAgICApO1xuICAgIGNvbnN0IHRvZ2dsZUZpbHRlclNlbGVjdGlvbiA9XG4gICAgICBtZW51U2VsZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoXCItdHJhbnNsYXRlLXktZnVsbFwiKTtcblxuICAgIGlmICh0b2dnbGVGaWx0ZXJTZWxlY3Rpb24gPT0gdHJ1ZSkge1xuICAgICAgbWVudVNlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XG4gICAgICBtZW51U2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJkdXJhdGlvbi03MDBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVTZWxlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcIi10cmFuc2xhdGUteS1mdWxsXCIpO1xuICAgIH1cblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNhcnJvd0ZpbHRlclNlbGVjdGlvblwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICB9LFxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYWNjLmluaXQpO1xuIiwiaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbi8vIGltcG9ydCBcIi4vYm9vdHN0cmFwXCI7XG4vLyBhc3NldHMvYXBwLmpzXG5cblxuXG5cbmltcG9ydCBcIi4vYWNjLmpzXCI7XG5pbXBvcnQgXCIuL2Jja29mZi5qc1wiO1xuaW1wb3J0IFwiLi9pbWFnZXMuanNcIjtcbmltcG9ydCBcImZsb3diaXRlXCI7XG4iLCJjb25zdCBiY2tvZmYgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJpbml0aWFsaXNhdGlvbiBiYWNrIG9mZiBkZSBiZW5vaXQgXCJcbiAgICAgICk7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNuYXZpZ2F0aW9uSWRcIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBiY2tvZmYub3BlblNpZGVCZW5vaXQpO1xuXG4gICAgfSxcbiAgXG4gICAgb3BlblNpZGVCZW5vaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiIHZvdXMgZXRlcyBiaWVuIGRhbnMgb3BlblNpZGVCZW5vaXQgXCIpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjbmF2aWdhdGlvbklkXCIpXG4gICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLTE4MFwiKTtcbiAgXG4gICAgICBjb25zdCBzaWRlQmFyTmF2ID1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZTaWRlYmFyXCIpO1xuICAgICAgY29uc3Qgc3Ryb2tlQ29sb3JzID1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmbGVjaGVJZFwiKTtcbiAgXG4gICAgICBzaWRlQmFyID0gc2lkZUJhck5hdi5jbGFzc0xpc3QudG9nZ2xlKFwidy0xNlwiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNpZGVCYXIsIFwiaW5mbzJcIik7XG4gIFxuICAgICAgaWYgKHNpZGVCYXIgPT0gdHJ1ZSkge1xuICAgICAgICBzaWRlQmFyTmF2LmNsYXNzTGlzdC5hZGQoXCJ3LTE2XCIpO1xuICAgICAgICBzdHJva2VDb2xvcnMuY2xhc3NMaXN0LnJlbW92ZShcInN0cm9rZS1waW5rLTkwMFwiKTtcbiAgICAgICAgc3Ryb2tlQ29sb3JzLmNsYXNzTGlzdC5hZGQoXCJzdHJva2Utd2hpdGVcIik7XG4gICAgICAgIHNpZGVCYXJOYXYuY2xhc3NMaXN0LnJlbW92ZShcInctNTZcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlQmFyTmF2LmNsYXNzTGlzdC5hZGQoXCJ3LTU2XCIpO1xuICAgICAgICBzdHJva2VDb2xvcnMuY2xhc3NMaXN0LmFkZChcInN0cm9rZS1waW5rLTkwMFwiKTtcbiAgICAgICAgc3Ryb2tlQ29sb3JzLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJva2Utd2hpdGVcIik7XG4gICAgICAgIHNpZGVCYXJOYXYuY2xhc3NMaXN0LmFkZChcImR1cmF0aW9uLTUwMFwiKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuICBcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYmNrb2ZmLmluaXQpO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG5cblxuIiwiY29uc3QgaW1hZ2VzID0ge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJpbml0aWFsaXN0aW9uIGR1IGZpY2hpZXIgaW1hZ2VzLmpzIGJhY2sgb2ZmaWNlIFwiKTtcblxuICAgIGxldCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1kZWxldGVdXCIpOyBcblxuICAgIC8vIEplIGJvdWNsZSBzdXIgbWVzIGxpZW5zXG4gICAgIGZvciAoIGxldCBsaW5rIG9mIGxpbmtzKSB7XG4gICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbWFnZXMuZGVsZXRlSW1hZ2VQcm9kdWN0KTtcbiAgICAgIGNvbnNvbGUubG9nKGxpbmspO1xuICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgfSxcbiAgZGVsZXRlSW1hZ2VQcm9kdWN0IDogZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInZvdXMgZXRlcyBiaWVuIGRhbnMgZGVsZXRlSW1hZ2VQcm9kdWN0XCIpO1xuICAgIC8vIEplIGRlbWFuZGUgY29uZmlybWF0aW9uXG4gICAgaWYoY29uZmlybSgnVm91bGV6LXZvdXMgc3VwcHJpbWVyIGNldHRlIGltYWdlIGRlIHZvdHJlIHByZHVpdCA/Jykpe1xuICAgICAgLy8gSidlbnZvaWUgbWEgcmVxdcOqdGUgYWpheFxuICAgICAgZmV0Y2godGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLCB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfSwgXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1wiX3Rva2VuXCI6IHRoaXMuZGF0YXNldC50b2tlbn0pXG4gIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgaWYoZGF0YS5zdWNjZXNzKXtcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGFsZXJ0KGRhdGEuZXJyb3IpO1xuICAgICAgfSAgICBcbiAgICB9KVxuXG4gIH1cbiAgfVxuXG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbWFnZXMuaW5pdCk7IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5wcmV2aWV3Q2xlYXJCdXR0b25UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNsZWFyKCkpO1xuICAgICAgICB0aGlzLmlucHV0VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4gdGhpcy5vbklucHV0Q2hhbmdlKGV2ZW50KSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcpO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5pbnB1dFRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLmlucHV0VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLnByZXZpZXdUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VUYXJnZXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnByZXZpZXdGaWxlbmFtZVRhcmdldC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NsZWFyJyk7XG4gICAgfVxuICAgIG9uSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5wdXRUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlclRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnByZXZpZXdGaWxlbmFtZVRhcmdldC50ZXh0Q29udGVudCA9IGZpbGUubmFtZTtcbiAgICAgICAgdGhpcy5wcmV2aWV3VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGlmIChmaWxlLnR5cGUgJiYgZmlsZS50eXBlLmluZGV4T2YoJ2ltYWdlJykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3B1bGF0ZUltYWdlUHJldmlldyhmaWxlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NoYW5nZScsIGZpbGUpO1xuICAgIH1cbiAgICBfcG9wdWxhdGVJbWFnZVByZXZpZXcoZmlsZSkge1xuICAgICAgICBpZiAodHlwZW9mIEZpbGVSZWFkZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VUYXJnZXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIicgKyBldmVudC50YXJnZXQucmVzdWx0ICsgJ1wiKSc7XG4gICAgICAgIH0pO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkID0ge30pIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgcHJlZml4OiAnZHJvcHpvbmUnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS50YXJnZXRzID0gWydpbnB1dCcsICdwbGFjZWhvbGRlcicsICdwcmV2aWV3JywgJ3ByZXZpZXdDbGVhckJ1dHRvbicsICdwcmV2aWV3RmlsZW5hbWUnLCAncHJldmlld0ltYWdlJ107XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmVzKGNvbnRlbnQpIHtcbiAgICBjb25zdCBkaXJlY3RpdmVzID0gW107XG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgIHJldHVybiBkaXJlY3RpdmVzO1xuICAgIH1cbiAgICBsZXQgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICBsZXQgY3VycmVudEFyZ3VtZW50TmFtZSA9ICcnO1xuICAgIGxldCBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgIGxldCBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgbGV0IGN1cnJlbnROYW1lZEFyZ3VtZW50cyA9IHt9O1xuICAgIGxldCBjdXJyZW50TW9kaWZpZXJzID0gW107XG4gICAgbGV0IHN0YXRlID0gJ2FjdGlvbic7XG4gICAgY29uc3QgZ2V0TGFzdEFjdGlvbk5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjdXJyZW50QWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRBY3Rpb25OYW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBhbnkgZGlyZWN0aXZlcycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXJlY3RpdmVzW2RpcmVjdGl2ZXMubGVuZ3RoIC0gMV0uYWN0aW9uO1xuICAgIH07XG4gICAgY29uc3QgcHVzaEluc3RydWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICAgICAgYWN0aW9uOiBjdXJyZW50QWN0aW9uTmFtZSxcbiAgICAgICAgICAgIGFyZ3M6IGN1cnJlbnRBcmd1bWVudHMsXG4gICAgICAgICAgICBuYW1lZDogY3VycmVudE5hbWVkQXJndW1lbnRzLFxuICAgICAgICAgICAgbW9kaWZpZXJzOiBjdXJyZW50TW9kaWZpZXJzLFxuICAgICAgICAgICAgZ2V0U3RyaW5nOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnROYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudFZhbHVlID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICAgICAgY3VycmVudE5hbWVkQXJndW1lbnRzID0ge307XG4gICAgICAgIGN1cnJlbnRNb2RpZmllcnMgPSBbXTtcbiAgICAgICAgc3RhdGUgPSAnYWN0aW9uJztcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hBcmd1bWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWl4ZWRBcmdUeXBlc0Vycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3JtYWwgYW5kIG5hbWVkIGFyZ3VtZW50cyBjYW5ub3QgYmUgbWl4ZWQgaW5zaWRlIFwiJHtjdXJyZW50QWN0aW9uTmFtZX0oKVwiYCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChjdXJyZW50QXJndW1lbnROYW1lKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWl4ZWRBcmdUeXBlc0Vycm9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50TmFtZWRBcmd1bWVudHNbY3VycmVudEFyZ3VtZW50TmFtZS50cmltKCldID0gY3VycmVudEFyZ3VtZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoY3VycmVudE5hbWVkQXJndW1lbnRzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWl4ZWRBcmdUeXBlc0Vycm9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50QXJndW1lbnRzLnB1c2goY3VycmVudEFyZ3VtZW50VmFsdWUudHJpbSgpKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50QXJndW1lbnROYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudFZhbHVlID0gJyc7XG4gICAgfTtcbiAgICBjb25zdCBwdXNoTW9kaWZpZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjdXJyZW50QXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1vZGlmaWVyIFwiJHtjdXJyZW50QWN0aW9uTmFtZX0oKVwiIGRvZXMgbm90IHN1cHBvcnQgbXVsdGlwbGUgYXJndW1lbnRzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhjdXJyZW50TmFtZWRBcmd1bWVudHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1vZGlmaWVyIFwiJHtjdXJyZW50QWN0aW9uTmFtZX0oKVwiIGRvZXMgbm90IHN1cHBvcnQgbmFtZWQgYXJndW1lbnRzLmApO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRNb2RpZmllcnMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBjdXJyZW50QWN0aW9uTmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBjdXJyZW50QXJndW1lbnRzLmxlbmd0aCA+IDAgPyBjdXJyZW50QXJndW1lbnRzWzBdIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudE5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgICAgICBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoYXIgPSBjb250ZW50W2ldO1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICdhY3Rpb24nOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnKCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAnYXJndW1lbnRzJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd8Jykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoTW9kaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRBY3Rpb25OYW1lICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcmd1bWVudHMnOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnKScpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaEFyZ3VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gJ2FmdGVyX2FyZ3VtZW50cyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hBcmd1bWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICc9Jykge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QXJndW1lbnROYW1lID0gY3VycmVudEFyZ3VtZW50VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBcmd1bWVudFZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSArPSBjaGFyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWZ0ZXJfYXJndW1lbnRzJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ3wnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hNb2RpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgIT09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3Npbmcgc3BhY2UgYWZ0ZXIgJHtnZXRMYXN0QWN0aW9uTmFtZSgpfSgpYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgY2FzZSAnYWN0aW9uJzpcbiAgICAgICAgY2FzZSAnYWZ0ZXJfYXJndW1lbnRzJzpcbiAgICAgICAgICAgIGlmIChjdXJyZW50QWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERpZCB5b3UgZm9yZ2V0IHRvIGFkZCBhIGNsb3NpbmcgXCIpXCIgYWZ0ZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfVwiP2ApO1xuICAgIH1cbiAgICByZXR1cm4gZGlyZWN0aXZlcztcbn1cblxuZnVuY3Rpb24gY29tYmluZVNwYWNlZEFycmF5KHBhcnRzKSB7XG4gICAgY29uc3QgZmluYWxQYXJ0cyA9IFtdO1xuICAgIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgICAgZmluYWxQYXJ0cy5wdXNoKC4uLnBhcnQuc3BsaXQoJyAnKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbmFsUGFydHM7XG59XG5mdW5jdGlvbiBub3JtYWxpemVNb2RlbE5hbWUobW9kZWwpIHtcbiAgICByZXR1cm4gKG1vZGVsXG4gICAgICAgIC5yZXBsYWNlKC9cXFtdJC8sICcnKVxuICAgICAgICAuc3BsaXQoJ1snKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBzLnJlcGxhY2UoJ10nLCAnJyk7XG4gICAgfSlcbiAgICAgICAgLmpvaW4oJy4nKSk7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgdmFsdWVTdG9yZSkge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RlbE5hbWVEYXRhID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAobW9kZWxOYW1lRGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSB2YWx1ZVN0b3JlLmdldChtb2RlbE5hbWVEYXRhLmFjdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobW9kZWxWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZShlbGVtZW50LCBtb2RlbFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jaGVja2VkID8gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZShlbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgoZWwpID0+IGVsLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuZGF0YXNldC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoJ3ZhbHVlJyBpbiBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHNldFZhbHVlT25FbGVtZW50KGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGVsZW1lbnQudmFsdWUgPT0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PSBlbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlRm91bmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGFycmF5V3JhcHBlZFZhbHVlID0gW10uY29uY2F0KHZhbHVlKS5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5vcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGFycmF5V3JhcHBlZFZhbHVlLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogdmFsdWU7XG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5kYXRhc2V0Lm1vZGVsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhlbGVtZW50LmRhdGFzZXQubW9kZWwpO1xuICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3RpdmUuYXJncy5sZW5ndGggPiAwIHx8IGRpcmVjdGl2ZS5uYW1lZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkYXRhLW1vZGVsPVwiJHtlbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICB9XG4gICAgICAgIGRpcmVjdGl2ZS5hY3Rpb24gPSBub3JtYWxpemVNb2RlbE5hbWUoZGlyZWN0aXZlLmFjdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5mdW5jdGlvbiBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRocm93T25NaXNzaW5nID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRhdGFNb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KTtcbiAgICBpZiAoZGF0YU1vZGVsRGlyZWN0aXZlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBkYXRhTW9kZWxEaXJlY3RpdmVzWzBdO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBpZiAoZm9ybUVsZW1lbnQgJiYgJ21vZGVsJyBpbiBmb3JtRWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGZvcm1FbGVtZW50LmRhdGFzZXQubW9kZWwgfHwgJyonKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGRpcmVjdGl2ZXNbMF07XG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCB8fCBkaXJlY3RpdmUubmFtZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGEtbW9kZWw9XCIke2Zvcm1FbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aHJvd09uTWlzc2luZykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZGV0ZXJtaW5lIHRoZSBtb2RlbCBuYW1lIGZvciBcIiR7Z2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KX1cIjogdGhlIGVsZW1lbnQgbXVzdCBlaXRoZXIgaGF2ZSBhIFwiZGF0YS1tb2RlbFwiIChvciBcIm5hbWVcIiBhdHRyaWJ1dGUgbGl2aW5nIGluc2lkZSBhIDxmb3JtIGRhdGEtbW9kZWw9XCIqXCI+KS5gKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkge1xuICAgIGlmIChjb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFjb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmb3VuZENoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgY29tcG9uZW50LmdldENoaWxkcmVuKCkuZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGZvdW5kQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCB8fCBjaGlsZENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBmb3VuZENoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAhZm91bmRDaGlsZENvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGNsb25lSFRNTEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBpZiAoIShuZXdFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGNsb25lIGVsZW1lbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBodG1sVG9FbGVtZW50KGh0bWwpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgaWYgKHRlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29tcG9uZW50IEhUTUwgY29udGFpbnMgJHt0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50fSBlbGVtZW50cywgYnV0IG9ubHkgMSByb290IGVsZW1lbnQgaXMgYWxsb3dlZC5gKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGQgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZCBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDcmVhdGVkIGVsZW1lbnQgaXMgbm90IGFuIEhUTUxFbGVtZW50OiAke2h0bWwudHJpbSgpfWApO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGQ7XG59XG5mdW5jdGlvbiBnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5pbm5lckhUTUxcbiAgICAgICAgPyBlbGVtZW50Lm91dGVySFRNTC5zbGljZSgwLCBlbGVtZW50Lm91dGVySFRNTC5pbmRleE9mKGVsZW1lbnQuaW5uZXJIVE1MKSlcbiAgICAgICAgOiBlbGVtZW50Lm91dGVySFRNTDtcbn1cbmNvbnN0IGdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBjdXJyZW50VmFsdWVzKSB7XG4gICAgY29uc3QgZmluYWxWYWx1ZXMgPSBbLi4uY3VycmVudFZhbHVlc107XG4gICAgY29uc3QgdmFsdWUgPSBpbnB1dFZhbHVlKGVsZW1lbnQpO1xuICAgIGNvbnN0IGluZGV4ID0gY3VycmVudFZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICBpZiAoZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGZpbmFsVmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaW5hbFZhbHVlcztcbiAgICB9XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgZmluYWxWYWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmFsVmFsdWVzO1xufTtcbmNvbnN0IGlucHV0VmFsdWUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQudmFsdWUgPyBlbGVtZW50LmRhdGFzZXQudmFsdWUgOiBlbGVtZW50LnZhbHVlO1xufTtcblxuZnVuY3Rpb24gZ2V0RGVlcERhdGEoZGF0YSwgcHJvcGVydHlQYXRoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50TGV2ZWxEYXRhLCBmaW5hbEtleSB9ID0gcGFyc2VEZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpO1xuICAgIGlmIChjdXJyZW50TGV2ZWxEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRMZXZlbERhdGFbZmluYWxLZXldO1xufVxuY29uc3QgcGFyc2VEZWVwRGF0YSA9IGZ1bmN0aW9uIChkYXRhLCBwcm9wZXJ0eVBhdGgpIHtcbiAgICBjb25zdCBmaW5hbERhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICBsZXQgY3VycmVudExldmVsRGF0YSA9IGZpbmFsRGF0YTtcbiAgICBjb25zdCBwYXJ0cyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnRMZXZlbERhdGEgPSBjdXJyZW50TGV2ZWxEYXRhW3BhcnRzW2ldXTtcbiAgICB9XG4gICAgY29uc3QgZmluYWxLZXkgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50TGV2ZWxEYXRhLFxuICAgICAgICBmaW5hbERhdGEsXG4gICAgICAgIGZpbmFsS2V5LFxuICAgICAgICBwYXJ0cyxcbiAgICB9O1xufTtcblxuY2xhc3MgVmFsdWVTdG9yZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLmRpcnR5UHJvcHMgPSB7fTtcbiAgICAgICAgdGhpcy5wZW5kaW5nUHJvcHMgPSB7fTtcbiAgICAgICAgdGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50ID0ge307XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB9XG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobmFtZSk7XG4gICAgICAgIGlmICh0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdQcm9wc1tub3JtYWxpemVkTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVuZGluZ1Byb3BzW25vcm1hbGl6ZWROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wc1tub3JtYWxpemVkTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHNbbm9ybWFsaXplZE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXREZWVwRGF0YSh0aGlzLnByb3BzLCBub3JtYWxpemVkTmFtZSk7XG4gICAgfVxuICAgIGhhcyhuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChuYW1lKSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobmFtZSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0KG5vcm1hbGl6ZWROYW1lKTtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBnZXRPcmlnaW5hbFByb3BzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgfVxuICAgIGdldERpcnR5UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRpcnR5UHJvcHMpO1xuICAgIH1cbiAgICBnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50KTtcbiAgICB9XG4gICAgZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nKCkge1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGlydHlQcm9wcyk7XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHt9O1xuICAgIH1cbiAgICByZWluaXRpYWxpemVBbGxQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHt9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgIH1cbiAgICBwdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKSB7XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wZW5kaW5nUHJvcHMpLCB0aGlzLmRpcnR5UHJvcHMpO1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgIH1cbiAgICBzdG9yZU5ld1Byb3BzRnJvbVBhcmVudChwcm9wcykge1xuICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSBwcm9wcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlZDtcbiAgICB9XG59XG5cbnZhciBET0NVTUVOVF9GUkFHTUVOVF9OT0RFID0gMTE7XG5cbmZ1bmN0aW9uIG1vcnBoQXR0cnMoZnJvbU5vZGUsIHRvTm9kZSkge1xuICAgIHZhciB0b05vZGVBdHRycyA9IHRvTm9kZS5hdHRyaWJ1dGVzO1xuICAgIHZhciBhdHRyO1xuICAgIHZhciBhdHRyTmFtZTtcbiAgICB2YXIgYXR0ck5hbWVzcGFjZVVSSTtcbiAgICB2YXIgYXR0clZhbHVlO1xuICAgIHZhciBmcm9tVmFsdWU7XG5cbiAgICAvLyBkb2N1bWVudC1mcmFnbWVudHMgZG9udCBoYXZlIGF0dHJpYnV0ZXMgc28gbGV0cyBub3QgZG8gYW55dGhpbmdcbiAgICBpZiAodG9Ob2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8IGZyb21Ob2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIGF0dHJpYnV0ZXMgb24gb3JpZ2luYWwgRE9NIGVsZW1lbnRcbiAgICBmb3IgKHZhciBpID0gdG9Ob2RlQXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgYXR0ciA9IHRvTm9kZUF0dHJzW2ldO1xuICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTtcbiAgICAgICAgYXR0ck5hbWVzcGFjZVVSSSA9IGF0dHIubmFtZXNwYWNlVVJJO1xuICAgICAgICBhdHRyVmFsdWUgPSBhdHRyLnZhbHVlO1xuXG4gICAgICAgIGlmIChhdHRyTmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubG9jYWxOYW1lIHx8IGF0dHJOYW1lO1xuICAgICAgICAgICAgZnJvbVZhbHVlID0gZnJvbU5vZGUuZ2V0QXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZnJvbVZhbHVlICE9PSBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ci5wcmVmaXggPT09ICd4bWxucycpe1xuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTsgLy8gSXQncyBub3QgYWxsb3dlZCB0byBzZXQgYW4gYXR0cmlidXRlIHdpdGggdGhlIFhNTE5TIG5hbWVzcGFjZSB3aXRob3V0IHNwZWNpZnlpbmcgdGhlIGB4bWxuc2AgcHJlZml4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnNldEF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbVZhbHVlID0gZnJvbU5vZGUuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGZyb21WYWx1ZSAhPT0gYXR0clZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFueSBleHRyYSBhdHRyaWJ1dGVzIGZvdW5kIG9uIHRoZSBvcmlnaW5hbCBET00gZWxlbWVudCB0aGF0XG4gICAgLy8gd2VyZW4ndCBmb3VuZCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAgdmFyIGZyb21Ob2RlQXR0cnMgPSBmcm9tTm9kZS5hdHRyaWJ1dGVzO1xuXG4gICAgZm9yICh2YXIgZCA9IGZyb21Ob2RlQXR0cnMubGVuZ3RoIC0gMTsgZCA+PSAwOyBkLS0pIHtcbiAgICAgICAgYXR0ciA9IGZyb21Ob2RlQXR0cnNbZF07XG4gICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lO1xuICAgICAgICBhdHRyTmFtZXNwYWNlVVJJID0gYXR0ci5uYW1lc3BhY2VVUkk7XG5cbiAgICAgICAgaWYgKGF0dHJOYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5sb2NhbE5hbWUgfHwgYXR0ck5hbWU7XG5cbiAgICAgICAgICAgIGlmICghdG9Ob2RlLmhhc0F0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdG9Ob2RlLmhhc0F0dHJpYnV0ZShhdHRyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgcmFuZ2U7IC8vIENyZWF0ZSBhIHJhbmdlIG9iamVjdCBmb3IgZWZmaWNlbnRseSByZW5kZXJpbmcgc3RyaW5ncyB0byBlbGVtZW50cy5cbnZhciBOU19YSFRNTCA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcblxudmFyIGRvYyA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBkb2N1bWVudDtcbnZhciBIQVNfVEVNUExBVEVfU1VQUE9SVCA9ICEhZG9jICYmICdjb250ZW50JyBpbiBkb2MuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnZhciBIQVNfUkFOR0VfU1VQUE9SVCA9ICEhZG9jICYmIGRvYy5jcmVhdGVSYW5nZSAmJiAnY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50JyBpbiBkb2MuY3JlYXRlUmFuZ2UoKTtcblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUoc3RyKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gc3RyO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50RnJvbVJhbmdlKHN0cikge1xuICAgIGlmICghcmFuZ2UpIHtcbiAgICAgICAgcmFuZ2UgPSBkb2MuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZShkb2MuYm9keSk7XG4gICAgfVxuXG4gICAgdmFyIGZyYWdtZW50ID0gcmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHN0cik7XG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50RnJvbVdyYXAoc3RyKSB7XG4gICAgdmFyIGZyYWdtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2JvZHknKTtcbiAgICBmcmFnbWVudC5pbm5lckhUTUwgPSBzdHI7XG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbi8qKlxuICogVGhpcyBpcyBhYm91dCB0aGUgc2FtZVxuICogdmFyIGh0bWwgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0ciwgJ3RleHQvaHRtbCcpO1xuICogcmV0dXJuIGh0bWwuYm9keS5maXJzdENoaWxkO1xuICpcbiAqIEBtZXRob2QgdG9FbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKi9cbmZ1bmN0aW9uIHRvRWxlbWVudChzdHIpIHtcbiAgICBzdHIgPSBzdHIudHJpbSgpO1xuICAgIGlmIChIQVNfVEVNUExBVEVfU1VQUE9SVCkge1xuICAgICAgLy8gYXZvaWQgcmVzdHJpY3Rpb25zIG9uIGNvbnRlbnQgZm9yIHRoaW5ncyBsaWtlIGA8dHI+PHRoPkhpPC90aD48L3RyPmAgd2hpY2hcbiAgICAgIC8vIGNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCBkb2Vzbid0IHN1cHBvcnRcbiAgICAgIC8vIDx0ZW1wbGF0ZT4gc3VwcG9ydCBub3QgYXZhaWxhYmxlIGluIElFXG4gICAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUoc3RyKTtcbiAgICB9IGVsc2UgaWYgKEhBU19SQU5HRV9TVVBQT1JUKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tUmFuZ2Uoc3RyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tV3JhcChzdHIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0d28gbm9kZSdzIG5hbWVzIGFyZSB0aGUgc2FtZS5cbiAqXG4gKiBOT1RFOiBXZSBkb24ndCBib3RoZXIgY2hlY2tpbmcgYG5hbWVzcGFjZVVSSWAgYmVjYXVzZSB5b3Ugd2lsbCBuZXZlciBmaW5kIHR3byBIVE1MIGVsZW1lbnRzIHdpdGggdGhlIHNhbWVcbiAqICAgICAgIG5vZGVOYW1lIGFuZCBkaWZmZXJlbnQgbmFtZXNwYWNlIFVSSXMuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBhXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGIgVGhlIHRhcmdldCBlbGVtZW50XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjb21wYXJlTm9kZU5hbWVzKGZyb21FbCwgdG9FbCkge1xuICAgIHZhciBmcm9tTm9kZU5hbWUgPSBmcm9tRWwubm9kZU5hbWU7XG4gICAgdmFyIHRvTm9kZU5hbWUgPSB0b0VsLm5vZGVOYW1lO1xuICAgIHZhciBmcm9tQ29kZVN0YXJ0LCB0b0NvZGVTdGFydDtcblxuICAgIGlmIChmcm9tTm9kZU5hbWUgPT09IHRvTm9kZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnJvbUNvZGVTdGFydCA9IGZyb21Ob2RlTmFtZS5jaGFyQ29kZUF0KDApO1xuICAgIHRvQ29kZVN0YXJ0ID0gdG9Ob2RlTmFtZS5jaGFyQ29kZUF0KDApO1xuXG4gICAgLy8gSWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgdmlydHVhbCBET00gbm9kZSBvciBTVkcgbm9kZSB0aGVuIHdlIG1heVxuICAgIC8vIG5lZWQgdG8gbm9ybWFsaXplIHRoZSB0YWcgbmFtZSBiZWZvcmUgY29tcGFyaW5nLiBOb3JtYWwgSFRNTCBlbGVtZW50cyB0aGF0IGFyZVxuICAgIC8vIGluIHRoZSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIlxuICAgIC8vIGFyZSBjb252ZXJ0ZWQgdG8gdXBwZXIgY2FzZVxuICAgIGlmIChmcm9tQ29kZVN0YXJ0IDw9IDkwICYmIHRvQ29kZVN0YXJ0ID49IDk3KSB7IC8vIGZyb20gaXMgdXBwZXIgYW5kIHRvIGlzIGxvd2VyXG4gICAgICAgIHJldHVybiBmcm9tTm9kZU5hbWUgPT09IHRvTm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICB9IGVsc2UgaWYgKHRvQ29kZVN0YXJ0IDw9IDkwICYmIGZyb21Db2RlU3RhcnQgPj0gOTcpIHsgLy8gdG8gaXMgdXBwZXIgYW5kIGZyb20gaXMgbG93ZXJcbiAgICAgICAgcmV0dXJuIHRvTm9kZU5hbWUgPT09IGZyb21Ob2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnQsIG9wdGlvbmFsbHkgd2l0aCBhIGtub3duIG5hbWVzcGFjZSBVUkkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgdGhlIGVsZW1lbnQgbmFtZSwgZS5nLiAnZGl2JyBvciAnc3ZnJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VVUkldIHRoZSBlbGVtZW50J3MgbmFtZXNwYWNlIFVSSSwgaS5lLiB0aGUgdmFsdWUgb2ZcbiAqIGl0cyBgeG1sbnNgIGF0dHJpYnV0ZSBvciBpdHMgaW5mZXJyZWQgbmFtZXNwYWNlLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyhuYW1lLCBuYW1lc3BhY2VVUkkpIHtcbiAgICByZXR1cm4gIW5hbWVzcGFjZVVSSSB8fCBuYW1lc3BhY2VVUkkgPT09IE5TX1hIVE1MID9cbiAgICAgICAgZG9jLmNyZWF0ZUVsZW1lbnQobmFtZSkgOlxuICAgICAgICBkb2MuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgbmFtZSk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSBjaGlsZHJlbiBvZiBvbmUgRE9NIGVsZW1lbnQgdG8gYW5vdGhlciBET00gZWxlbWVudFxuICovXG5mdW5jdGlvbiBtb3ZlQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKSB7XG4gICAgdmFyIGN1ckNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGN1ckNoaWxkKSB7XG4gICAgICAgIHZhciBuZXh0Q2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgdG9FbC5hcHBlbmRDaGlsZChjdXJDaGlsZCk7XG4gICAgICAgIGN1ckNoaWxkID0gbmV4dENoaWxkO1xuICAgIH1cbiAgICByZXR1cm4gdG9FbDtcbn1cblxuZnVuY3Rpb24gc3luY0Jvb2xlYW5BdHRyUHJvcChmcm9tRWwsIHRvRWwsIG5hbWUpIHtcbiAgICBpZiAoZnJvbUVsW25hbWVdICE9PSB0b0VsW25hbWVdKSB7XG4gICAgICAgIGZyb21FbFtuYW1lXSA9IHRvRWxbbmFtZV07XG4gICAgICAgIGlmIChmcm9tRWxbbmFtZV0pIHtcbiAgICAgICAgICAgIGZyb21FbC5zZXRBdHRyaWJ1dGUobmFtZSwgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIHNwZWNpYWxFbEhhbmRsZXJzID0ge1xuICAgIE9QVElPTjogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHZhciBwYXJlbnROb2RlID0gZnJvbUVsLnBhcmVudE5vZGU7XG4gICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50TmFtZSA9IHBhcmVudE5vZGUubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnROYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBwYXJlbnROYW1lID0gcGFyZW50Tm9kZSAmJiBwYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyZW50TmFtZSA9PT0gJ1NFTEVDVCcgJiYgIXBhcmVudE5vZGUuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbC5oYXNBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgJiYgIXRvRWwuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgTVMgRWRnZSBidWcgd2hlcmUgdGhlICdzZWxlY3RlZCcgYXR0cmlidXRlIGNhbiBvbmx5IGJlXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZWQgaWYgc2V0IHRvIGEgbm9uLWVtcHR5IHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMjA4NzY3OS9cbiAgICAgICAgICAgICAgICAgICAgZnJvbUVsLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZXNldCBzZWxlY3QgZWxlbWVudCdzIHNlbGVjdGVkSW5kZXggdG8gLTEsIG90aGVyd2lzZSBzZXR0aW5nXG4gICAgICAgICAgICAgICAgLy8gZnJvbUVsLnNlbGVjdGVkIHVzaW5nIHRoZSBzeW5jQm9vbGVhbkF0dHJQcm9wIGJlbG93IGhhcyBubyBlZmZlY3QuXG4gICAgICAgICAgICAgICAgLy8gVGhlIGNvcnJlY3Qgc2VsZWN0ZWRJbmRleCB3aWxsIGJlIHNldCBpbiB0aGUgU0VMRUNUIHNwZWNpYWwgaGFuZGxlciBiZWxvdy5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ3NlbGVjdGVkJyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgXCJ2YWx1ZVwiIGF0dHJpYnV0ZSBpcyBzcGVjaWFsIGZvciB0aGUgPGlucHV0PiBlbGVtZW50IHNpbmNlIGl0IHNldHNcbiAgICAgKiB0aGUgaW5pdGlhbCB2YWx1ZS4gQ2hhbmdpbmcgdGhlIFwidmFsdWVcIiBhdHRyaWJ1dGUgd2l0aG91dCBjaGFuZ2luZyB0aGVcbiAgICAgKiBcInZhbHVlXCIgcHJvcGVydHkgd2lsbCBoYXZlIG5vIGVmZmVjdCBzaW5jZSBpdCBpcyBvbmx5IHVzZWQgdG8gdGhlIHNldCB0aGVcbiAgICAgKiBpbml0aWFsIHZhbHVlLiAgU2ltaWxhciBmb3IgdGhlIFwiY2hlY2tlZFwiIGF0dHJpYnV0ZSwgYW5kIFwiZGlzYWJsZWRcIi5cbiAgICAgKi9cbiAgICBJTlBVVDogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCAnY2hlY2tlZCcpO1xuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgaWYgKGZyb21FbC52YWx1ZSAhPT0gdG9FbC52YWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gdG9FbC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdG9FbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgVEVYVEFSRUE6IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0b0VsLnZhbHVlO1xuICAgICAgICBpZiAoZnJvbUVsLnZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgICBpZiAoZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgLy8gTmVlZGVkIGZvciBJRS4gQXBwYXJlbnRseSBJRSBzZXRzIHRoZSBwbGFjZWhvbGRlciBhcyB0aGVcbiAgICAgICAgICAgIC8vIG5vZGUgdmFsdWUgYW5kIHZpc2UgdmVyc2EuIFRoaXMgaWdub3JlcyBhbiBlbXB0eSB1cGRhdGUuXG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBmaXJzdENoaWxkLm5vZGVWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID09IG5ld1ZhbHVlIHx8ICghbmV3VmFsdWUgJiYgb2xkVmFsdWUgPT0gZnJvbUVsLnBsYWNlaG9sZGVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgU0VMRUNUOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgaWYgKCF0b0VsLmhhc0F0dHJpYnV0ZSgnbXVsdGlwbGUnKSkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gbG9vcCB0aHJvdWdoIGNoaWxkcmVuIG9mIGZyb21FbCwgbm90IHRvRWwgc2luY2Ugbm9kZXMgY2FuIGJlIG1vdmVkXG4gICAgICAgICAgICAvLyBmcm9tIHRvRWwgdG8gZnJvbUVsIGRpcmVjdGx5IHdoZW4gbW9ycGhpbmcuXG4gICAgICAgICAgICAvLyBBdCB0aGUgdGltZSB0aGlzIHNwZWNpYWwgaGFuZGxlciBpcyBpbnZva2VkLCBhbGwgY2hpbGRyZW4gaGF2ZSBhbHJlYWR5IGJlZW4gbW9ycGhlZFxuICAgICAgICAgICAgLy8gYW5kIGFwcGVuZGVkIHRvIC8gcmVtb3ZlZCBmcm9tIGZyb21FbCwgc28gdXNpbmcgZnJvbUVsIGhlcmUgaXMgc2FmZSBhbmQgY29ycmVjdC5cbiAgICAgICAgICAgIHZhciBjdXJDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIG9wdGdyb3VwO1xuICAgICAgICAgICAgdmFyIG5vZGVOYW1lO1xuICAgICAgICAgICAgd2hpbGUoY3VyQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICBub2RlTmFtZSA9IGN1ckNoaWxkLm5vZGVOYW1lICYmIGN1ckNoaWxkLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVOYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGdyb3VwID0gY3VyQ2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gb3B0Z3JvdXAuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZU5hbWUgPT09ICdPUFRJT04nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQ2hpbGQuaGFzQXR0cmlidXRlKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJDaGlsZCAmJiBvcHRncm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBvcHRncm91cC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGdyb3VwID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnJvbUVsLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIEVMRU1FTlRfTk9ERSA9IDE7XG52YXIgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSQxID0gMTE7XG52YXIgVEVYVF9OT0RFID0gMztcbnZhciBDT01NRU5UX05PREUgPSA4O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gZGVmYXVsdEdldE5vZGVLZXkobm9kZSkge1xuICBpZiAobm9kZSkge1xuICAgIHJldHVybiAobm9kZS5nZXRBdHRyaWJ1dGUgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykpIHx8IG5vZGUuaWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW9ycGhkb21GYWN0b3J5KG1vcnBoQXR0cnMpIHtcblxuICByZXR1cm4gZnVuY3Rpb24gbW9ycGhkb20oZnJvbU5vZGUsIHRvTm9kZSwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdG9Ob2RlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGZyb21Ob2RlLm5vZGVOYW1lID09PSAnI2RvY3VtZW50JyB8fCBmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnIHx8IGZyb21Ob2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgdmFyIHRvTm9kZUh0bWwgPSB0b05vZGU7XG4gICAgICAgIHRvTm9kZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdodG1sJyk7XG4gICAgICAgIHRvTm9kZS5pbm5lckhUTUwgPSB0b05vZGVIdG1sO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9Ob2RlID0gdG9FbGVtZW50KHRvTm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0b05vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUkMSkge1xuICAgICAgdG9Ob2RlID0gdG9Ob2RlLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIH1cblxuICAgIHZhciBnZXROb2RlS2V5ID0gb3B0aW9ucy5nZXROb2RlS2V5IHx8IGRlZmF1bHRHZXROb2RlS2V5O1xuICAgIHZhciBvbkJlZm9yZU5vZGVBZGRlZCA9IG9wdGlvbnMub25CZWZvcmVOb2RlQWRkZWQgfHwgbm9vcDtcbiAgICB2YXIgb25Ob2RlQWRkZWQgPSBvcHRpb25zLm9uTm9kZUFkZGVkIHx8IG5vb3A7XG4gICAgdmFyIG9uQmVmb3JlRWxVcGRhdGVkID0gb3B0aW9ucy5vbkJlZm9yZUVsVXBkYXRlZCB8fCBub29wO1xuICAgIHZhciBvbkVsVXBkYXRlZCA9IG9wdGlvbnMub25FbFVwZGF0ZWQgfHwgbm9vcDtcbiAgICB2YXIgb25CZWZvcmVOb2RlRGlzY2FyZGVkID0gb3B0aW9ucy5vbkJlZm9yZU5vZGVEaXNjYXJkZWQgfHwgbm9vcDtcbiAgICB2YXIgb25Ob2RlRGlzY2FyZGVkID0gb3B0aW9ucy5vbk5vZGVEaXNjYXJkZWQgfHwgbm9vcDtcbiAgICB2YXIgb25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZCA9IG9wdGlvbnMub25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZCB8fCBub29wO1xuICAgIHZhciBza2lwRnJvbUNoaWxkcmVuID0gb3B0aW9ucy5za2lwRnJvbUNoaWxkcmVuIHx8IG5vb3A7XG4gICAgdmFyIGFkZENoaWxkID0gb3B0aW9ucy5hZGRDaGlsZCB8fCBmdW5jdGlvbihwYXJlbnQsIGNoaWxkKXsgcmV0dXJuIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7IH07XG4gICAgdmFyIGNoaWxkcmVuT25seSA9IG9wdGlvbnMuY2hpbGRyZW5Pbmx5ID09PSB0cnVlO1xuXG4gICAgLy8gVGhpcyBvYmplY3QgaXMgdXNlZCBhcyBhIGxvb2t1cCB0byBxdWlja2x5IGZpbmQgYWxsIGtleWVkIGVsZW1lbnRzIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS5cbiAgICB2YXIgZnJvbU5vZGVzTG9va3VwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIga2V5ZWRSZW1vdmFsTGlzdCA9IFtdO1xuXG4gICAgZnVuY3Rpb24gYWRkS2V5ZWRSZW1vdmFsKGtleSkge1xuICAgICAga2V5ZWRSZW1vdmFsTGlzdC5wdXNoKGtleSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMobm9kZSwgc2tpcEtleWVkTm9kZXMpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgdmFyIGN1ckNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcblxuICAgICAgICAgIHZhciBrZXkgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAoc2tpcEtleWVkTm9kZXMgJiYgKGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpKSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgYXJlIHNraXBwaW5nIGtleWVkIG5vZGVzIHRoZW4gd2UgYWRkIHRoZSBrZXlcbiAgICAgICAgICAgIC8vIHRvIGEgbGlzdCBzbyB0aGF0IGl0IGNhbiBiZSBoYW5kbGVkIGF0IHRoZSB2ZXJ5IGVuZC5cbiAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChrZXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPbmx5IHJlcG9ydCB0aGUgbm9kZSBhcyBkaXNjYXJkZWQgaWYgaXQgaXMgbm90IGtleWVkLiBXZSBkbyB0aGlzIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIGF0IHRoZSBlbmQgd2UgbG9vcCB0aHJvdWdoIGFsbCBrZXllZCBlbGVtZW50cyB0aGF0IHdlcmUgdW5tYXRjaGVkXG4gICAgICAgICAgICAvLyBhbmQgdGhlbiBkaXNjYXJkIHRoZW0gaW4gb25lIGZpbmFsIHBhc3MuXG4gICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQoY3VyQ2hpbGQpO1xuICAgICAgICAgICAgaWYgKGN1ckNoaWxkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMoY3VyQ2hpbGQsIHNraXBLZXllZE5vZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZW1vdmVzIGEgRE9NIG5vZGUgb3V0IG9mIHRoZSBvcmlnaW5hbCBET01cbiAgICAqXG4gICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIFRoZSBub2RlIHRvIHJlbW92ZVxuICAgICogQHBhcmFtICB7Tm9kZX0gcGFyZW50Tm9kZSBUaGUgbm9kZXMgcGFyZW50XG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBza2lwS2V5ZWROb2RlcyBJZiB0cnVlIHRoZW4gZWxlbWVudHMgd2l0aCBrZXlzIHdpbGwgYmUgc2tpcHBlZCBhbmQgbm90IGRpc2NhcmRlZC5cbiAgICAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSwgcGFyZW50Tm9kZSwgc2tpcEtleWVkTm9kZXMpIHtcbiAgICAgIGlmIChvbkJlZm9yZU5vZGVEaXNjYXJkZWQobm9kZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgIH1cblxuICAgICAgb25Ob2RlRGlzY2FyZGVkKG5vZGUpO1xuICAgICAgd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMobm9kZSwgc2tpcEtleWVkTm9kZXMpO1xuICAgIH1cblxuICAgIC8vIC8vIFRyZWVXYWxrZXIgaW1wbGVtZW50YXRpb24gaXMgbm8gZmFzdGVyLCBidXQga2VlcGluZyB0aGlzIGFyb3VuZCBpbiBjYXNlIHRoaXMgY2hhbmdlcyBpbiB0aGUgZnV0dXJlXG4gICAgLy8gZnVuY3Rpb24gaW5kZXhUcmVlKHJvb3QpIHtcbiAgICAvLyAgICAgdmFyIHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgIC8vICAgICAgICAgcm9vdCxcbiAgICAvLyAgICAgICAgIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UKTtcbiAgICAvL1xuICAgIC8vICAgICB2YXIgZWw7XG4gICAgLy8gICAgIHdoaWxlKChlbCA9IHRyZWVXYWxrZXIubmV4dE5vZGUoKSkpIHtcbiAgICAvLyAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGVsKTtcbiAgICAvLyAgICAgICAgIGlmIChrZXkpIHtcbiAgICAvLyAgICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGVsO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gLy8gTm9kZUl0ZXJhdG9yIGltcGxlbWVudGF0aW9uIGlzIG5vIGZhc3RlciwgYnV0IGtlZXBpbmcgdGhpcyBhcm91bmQgaW4gY2FzZSB0aGlzIGNoYW5nZXMgaW4gdGhlIGZ1dHVyZVxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gaW5kZXhUcmVlKG5vZGUpIHtcbiAgICAvLyAgICAgdmFyIG5vZGVJdGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihub2RlLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCk7XG4gICAgLy8gICAgIHZhciBlbDtcbiAgICAvLyAgICAgd2hpbGUoKGVsID0gbm9kZUl0ZXJhdG9yLm5leHROb2RlKCkpKSB7XG4gICAgLy8gICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShlbCk7XG4gICAgLy8gICAgICAgICBpZiAoa2V5KSB7XG4gICAgLy8gICAgICAgICAgICAgZnJvbU5vZGVzTG9va3VwW2tleV0gPSBlbDtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIGluZGV4VHJlZShub2RlKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFIHx8IG5vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUkMSkge1xuICAgICAgICB2YXIgY3VyQ2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuICAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGN1ckNoaWxkKTtcbiAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGN1ckNoaWxkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFdhbGsgcmVjdXJzaXZlbHlcbiAgICAgICAgICBpbmRleFRyZWUoY3VyQ2hpbGQpO1xuXG4gICAgICAgICAgY3VyQ2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGluZGV4VHJlZShmcm9tTm9kZSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVOb2RlQWRkZWQoZWwpIHtcbiAgICAgIG9uTm9kZUFkZGVkKGVsKTtcblxuICAgICAgdmFyIGN1ckNoaWxkID0gZWwuZmlyc3RDaGlsZDtcbiAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSBjdXJDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShjdXJDaGlsZCk7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICB2YXIgdW5tYXRjaGVkRnJvbUVsID0gZnJvbU5vZGVzTG9va3VwW2tleV07XG4gICAgICAgICAgLy8gaWYgd2UgZmluZCBhIGR1cGxpY2F0ZSAjaWQgbm9kZSBpbiBjYWNoZSwgcmVwbGFjZSBgZWxgIHdpdGggY2FjaGUgdmFsdWVcbiAgICAgICAgICAvLyBhbmQgbW9ycGggaXQgdG8gdGhlIGNoaWxkIG5vZGUuXG4gICAgICAgICAgaWYgKHVubWF0Y2hlZEZyb21FbCAmJiBjb21wYXJlTm9kZU5hbWVzKGN1ckNoaWxkLCB1bm1hdGNoZWRGcm9tRWwpKSB7XG4gICAgICAgICAgICBjdXJDaGlsZC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh1bm1hdGNoZWRGcm9tRWwsIGN1ckNoaWxkKTtcbiAgICAgICAgICAgIG1vcnBoRWwodW5tYXRjaGVkRnJvbUVsLCBjdXJDaGlsZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHJlY3Vyc2l2ZWx5IGNhbGwgZm9yIGN1ckNoaWxkIGFuZCBpdCdzIGNoaWxkcmVuIHRvIHNlZSBpZiB3ZSBmaW5kIHNvbWV0aGluZyBpblxuICAgICAgICAgIC8vIGZyb21Ob2Rlc0xvb2t1cFxuICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJDaGlsZCA9IG5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBGcm9tRWwoZnJvbUVsLCBjdXJGcm9tTm9kZUNoaWxkLCBjdXJGcm9tTm9kZUtleSkge1xuICAgICAgLy8gV2UgaGF2ZSBwcm9jZXNzZWQgYWxsIG9mIHRoZSBcInRvIG5vZGVzXCIuIElmIGN1ckZyb21Ob2RlQ2hpbGQgaXNcbiAgICAgIC8vIG5vbi1udWxsIHRoZW4gd2Ugc3RpbGwgaGF2ZSBzb21lIGZyb20gbm9kZXMgbGVmdCBvdmVyIHRoYXQgbmVlZFxuICAgICAgLy8gdG8gYmUgcmVtb3ZlZFxuICAgICAgd2hpbGUgKGN1ckZyb21Ob2RlQ2hpbGQpIHtcbiAgICAgICAgdmFyIGZyb21OZXh0U2libGluZyA9IGN1ckZyb21Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIGlmICgoY3VyRnJvbU5vZGVLZXkgPSBnZXROb2RlS2V5KGN1ckZyb21Ob2RlQ2hpbGQpKSkge1xuICAgICAgICAgIC8vIFNpbmNlIHRoZSBub2RlIGlzIGtleWVkIGl0IG1pZ2h0IGJlIG1hdGNoZWQgdXAgbGF0ZXIgc28gd2UgZGVmZXJcbiAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICBhZGRLZXllZFJlbW92YWwoY3VyRnJvbU5vZGVLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgIC8vICAgICAgIHN0aWxsIGEgY2hhbmNlIHRoZXkgd2lsbCBiZSBtYXRjaGVkIHVwIGxhdGVyXG4gICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIHRydWUgLyogc2tpcCBrZXllZCBub2RlcyAqLyk7XG4gICAgICAgIH1cbiAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3JwaEVsKGZyb21FbCwgdG9FbCwgY2hpbGRyZW5Pbmx5KSB7XG4gICAgICB2YXIgdG9FbEtleSA9IGdldE5vZGVLZXkodG9FbCk7XG5cbiAgICAgIGlmICh0b0VsS2V5KSB7XG4gICAgICAgIC8vIElmIGFuIGVsZW1lbnQgd2l0aCBhbiBJRCBpcyBiZWluZyBtb3JwaGVkIHRoZW4gaXQgd2lsbCBiZSBpbiB0aGUgZmluYWxcbiAgICAgICAgLy8gRE9NIHNvIGNsZWFyIGl0IG91dCBvZiB0aGUgc2F2ZWQgZWxlbWVudHMgY29sbGVjdGlvblxuICAgICAgICBkZWxldGUgZnJvbU5vZGVzTG9va3VwW3RvRWxLZXldO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWNoaWxkcmVuT25seSkge1xuICAgICAgICAvLyBvcHRpb25hbFxuICAgICAgICBpZiAob25CZWZvcmVFbFVwZGF0ZWQoZnJvbUVsLCB0b0VsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgYXR0cmlidXRlcyBvbiBvcmlnaW5hbCBET00gZWxlbWVudCBmaXJzdFxuICAgICAgICBtb3JwaEF0dHJzKGZyb21FbCwgdG9FbCk7XG4gICAgICAgIC8vIG9wdGlvbmFsXG4gICAgICAgIG9uRWxVcGRhdGVkKGZyb21FbCk7XG5cbiAgICAgICAgaWYgKG9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWQoZnJvbUVsLCB0b0VsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZyb21FbC5ub2RlTmFtZSAhPT0gJ1RFWFRBUkVBJykge1xuICAgICAgICBtb3JwaENoaWxkcmVuKGZyb21FbCwgdG9FbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcGVjaWFsRWxIYW5kbGVycy5URVhUQVJFQShmcm9tRWwsIHRvRWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vcnBoQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKSB7XG4gICAgICB2YXIgc2tpcEZyb20gPSBza2lwRnJvbUNoaWxkcmVuKGZyb21FbCk7XG4gICAgICB2YXIgY3VyVG9Ob2RlQ2hpbGQgPSB0b0VsLmZpcnN0Q2hpbGQ7XG4gICAgICB2YXIgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgdmFyIGN1clRvTm9kZUtleTtcbiAgICAgIHZhciBjdXJGcm9tTm9kZUtleTtcblxuICAgICAgdmFyIGZyb21OZXh0U2libGluZztcbiAgICAgIHZhciB0b05leHRTaWJsaW5nO1xuICAgICAgdmFyIG1hdGNoaW5nRnJvbUVsO1xuXG4gICAgICAvLyB3YWxrIHRoZSBjaGlsZHJlblxuICAgICAgb3V0ZXI6IHdoaWxlIChjdXJUb05vZGVDaGlsZCkge1xuICAgICAgICB0b05leHRTaWJsaW5nID0gY3VyVG9Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIGN1clRvTm9kZUtleSA9IGdldE5vZGVLZXkoY3VyVG9Ob2RlQ2hpbGQpO1xuXG4gICAgICAgIC8vIHdhbGsgdGhlIGZyb21Ob2RlIGNoaWxkcmVuIGFsbCB0aGUgd2F5IHRocm91Z2hcbiAgICAgICAgd2hpbGUgKCFza2lwRnJvbSAmJiBjdXJGcm9tTm9kZUNoaWxkKSB7XG4gICAgICAgICAgZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgIGlmIChjdXJUb05vZGVDaGlsZC5pc1NhbWVOb2RlICYmIGN1clRvTm9kZUNoaWxkLmlzU2FtZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCkpIHtcbiAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gdG9OZXh0U2libGluZztcbiAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdXJGcm9tTm9kZUtleSA9IGdldE5vZGVLZXkoY3VyRnJvbU5vZGVDaGlsZCk7XG5cbiAgICAgICAgICB2YXIgY3VyRnJvbU5vZGVUeXBlID0gY3VyRnJvbU5vZGVDaGlsZC5ub2RlVHlwZTtcblxuICAgICAgICAgIC8vIHRoaXMgbWVhbnMgaWYgdGhlIGN1ckZyb21Ob2RlQ2hpbGQgZG9lc250IGhhdmUgYSBtYXRjaCB3aXRoIHRoZSBjdXJUb05vZGVDaGlsZFxuICAgICAgICAgIHZhciBpc0NvbXBhdGlibGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSBjdXJUb05vZGVDaGlsZC5ub2RlVHlwZSkge1xuICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIC8vIEJvdGggbm9kZXMgYmVpbmcgY29tcGFyZWQgYXJlIEVsZW1lbnQgbm9kZXNcblxuICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHRhcmdldCBub2RlIGhhcyBhIGtleSBzbyB3ZSB3YW50IHRvIG1hdGNoIGl0IHVwIHdpdGggdGhlIGNvcnJlY3QgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZVxuICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVLZXkgIT09IGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAvLyBUaGUgY3VycmVudCBlbGVtZW50IGluIHRoZSBvcmlnaW5hbCBET00gdHJlZSBkb2VzIG5vdCBoYXZlIGEgbWF0Y2hpbmcga2V5IHNvXG4gICAgICAgICAgICAgICAgICAvLyBsZXQncyBjaGVjayBvdXIgbG9va3VwIHRvIHNlZSBpZiB0aGVyZSBpcyBhIG1hdGNoaW5nIGVsZW1lbnQgaW4gdGhlIG9yaWdpbmFsXG4gICAgICAgICAgICAgICAgICAvLyBET00gdHJlZVxuICAgICAgICAgICAgICAgICAgaWYgKChtYXRjaGluZ0Zyb21FbCA9IGZyb21Ob2Rlc0xvb2t1cFtjdXJUb05vZGVLZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbU5leHRTaWJsaW5nID09PSBtYXRjaGluZ0Zyb21FbCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3Igc2luZ2xlIGVsZW1lbnQgcmVtb3ZhbHMuIFRvIGF2b2lkIHJlbW92aW5nIHRoZSBvcmlnaW5hbFxuICAgICAgICAgICAgICAgICAgICAgIC8vIERPTSBub2RlIG91dCBvZiB0aGUgdHJlZSAoc2luY2UgdGhhdCBjYW4gYnJlYWsgQ1NTIHRyYW5zaXRpb25zLCBldGMuKSxcbiAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3aWxsIGluc3RlYWQgZGlzY2FyZCB0aGUgY3VycmVudCBub2RlIGFuZCB3YWl0IHVudGlsIHRoZSBuZXh0XG4gICAgICAgICAgICAgICAgICAgICAgLy8gaXRlcmF0aW9uIHRvIHByb3Blcmx5IG1hdGNoIHVwIHRoZSBrZXllZCB0YXJnZXQgZWxlbWVudCB3aXRoIGl0cyBtYXRjaGluZ1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQgaW4gdGhlIG9yaWdpbmFsIHRyZWVcbiAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBmb3VuZCBhIG1hdGNoaW5nIGtleWVkIGVsZW1lbnQgc29tZXdoZXJlIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBMZXQncyBtb3ZlIHRoZSBvcmlnaW5hbCBET00gbm9kZSBpbnRvIHRoZSBjdXJyZW50IHBvc2l0aW9uIGFuZCBtb3JwaFxuICAgICAgICAgICAgICAgICAgICAgIC8vIGl0LlxuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogV2UgdXNlIGluc2VydEJlZm9yZSBpbnN0ZWFkIG9mIHJlcGxhY2VDaGlsZCBiZWNhdXNlIHdlIHdhbnQgdG8gZ28gdGhyb3VnaFxuICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBgcmVtb3ZlTm9kZSgpYCBmdW5jdGlvbiBmb3IgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBkaXNjYXJkZWQgc28gdGhhdFxuICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbCBsaWZlY3ljbGUgaG9va3MgYXJlIGNvcnJlY3RseSBpbnZva2VkXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbUVsLmluc2VydEJlZm9yZShtYXRjaGluZ0Zyb21FbCwgY3VyRnJvbU5vZGVDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tTmV4dFNpYmxpbmcgPSBjdXJGcm9tTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGUgbm9kZSBpcyBrZXllZCBpdCBtaWdodCBiZSBtYXRjaGVkIHVwIGxhdGVyIHNvIHdlIGRlZmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgc3RpbGwgYSBjaGFuY2UgdGhleSB3aWxsIGJlIG1hdGNoZWQgdXAgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCwgZnJvbUVsLCB0cnVlIC8qIHNraXAga2V5ZWQgbm9kZXMgKi8pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBtYXRjaGluZ0Zyb21FbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG5vZGVzIGFyZSBub3QgY29tcGF0aWJsZSBzaW5jZSB0aGUgXCJ0b1wiIG5vZGUgaGFzIGEga2V5IGFuZCB0aGVyZVxuICAgICAgICAgICAgICAgICAgICAvLyBpcyBubyBtYXRjaGluZyBrZXllZCBub2RlIGluIHRoZSBzb3VyY2UgdHJlZVxuICAgICAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgb3JpZ2luYWwgaGFzIGEga2V5XG4gICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSBpc0NvbXBhdGlibGUgIT09IGZhbHNlICYmIGNvbXBhcmVOb2RlTmFtZXMoY3VyRnJvbU5vZGVDaGlsZCwgY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICBpZiAoaXNDb21wYXRpYmxlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZm91bmQgY29tcGF0aWJsZSBET00gZWxlbWVudHMgc28gdHJhbnNmb3JtXG4gICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgXCJmcm9tXCIgbm9kZSB0byBtYXRjaCB0aGUgY3VycmVudFxuICAgICAgICAgICAgICAgIC8vIHRhcmdldCBET00gbm9kZS5cbiAgICAgICAgICAgICAgICAvLyBNT1JQSFxuICAgICAgICAgICAgICAgIG1vcnBoRWwoY3VyRnJvbU5vZGVDaGlsZCwgY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSBURVhUX05PREUgfHwgY3VyRnJvbU5vZGVUeXBlID09IENPTU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAvLyBCb3RoIG5vZGVzIGJlaW5nIGNvbXBhcmVkIGFyZSBUZXh0IG9yIENvbW1lbnQgbm9kZXNcbiAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgLy8gU2ltcGx5IHVwZGF0ZSBub2RlVmFsdWUgb24gdGhlIG9yaWdpbmFsIG5vZGUgdG9cbiAgICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSB0ZXh0IHZhbHVlXG4gICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZUNoaWxkLm5vZGVWYWx1ZSAhPT0gY3VyVG9Ob2RlQ2hpbGQubm9kZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZC5ub2RlVmFsdWUgPSBjdXJUb05vZGVDaGlsZC5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0NvbXBhdGlibGUpIHtcbiAgICAgICAgICAgIC8vIEFkdmFuY2UgYm90aCB0aGUgXCJ0b1wiIGNoaWxkIGFuZCB0aGUgXCJmcm9tXCIgY2hpbGQgc2luY2Ugd2UgZm91bmQgYSBtYXRjaFxuICAgICAgICAgICAgLy8gTm90aGluZyBlbHNlIHRvIGRvIGFzIHdlIGFscmVhZHkgcmVjdXJzaXZlbHkgY2FsbGVkIG1vcnBoQ2hpbGRyZW4gYWJvdmVcbiAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gdG9OZXh0U2libGluZztcbiAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBObyBjb21wYXRpYmxlIG1hdGNoIHNvIHJlbW92ZSB0aGUgb2xkIG5vZGUgZnJvbSB0aGUgRE9NIGFuZCBjb250aW51ZSB0cnlpbmcgdG8gZmluZCBhXG4gICAgICAgICAgLy8gbWF0Y2ggaW4gdGhlIG9yaWdpbmFsIERPTS4gSG93ZXZlciwgd2Ugb25seSBkbyB0aGlzIGlmIHRoZSBmcm9tIG5vZGUgaXMgbm90IGtleWVkXG4gICAgICAgICAgLy8gc2luY2UgaXQgaXMgcG9zc2libGUgdGhhdCBhIGtleWVkIG5vZGUgbWlnaHQgbWF0Y2ggdXAgd2l0aCBhIG5vZGUgc29tZXdoZXJlIGVsc2UgaW4gdGhlXG4gICAgICAgICAgLy8gdGFyZ2V0IHRyZWUgYW5kIHdlIGRvbid0IHdhbnQgdG8gZGlzY2FyZCBpdCBqdXN0IHlldCBzaW5jZSBpdCBzdGlsbCBtaWdodCBmaW5kIGFcbiAgICAgICAgICAvLyBob21lIGluIHRoZSBmaW5hbCBET00gdHJlZS4gQWZ0ZXIgZXZlcnl0aGluZyBpcyBkb25lIHdlIHdpbGwgcmVtb3ZlIGFueSBrZXllZCBub2Rlc1xuICAgICAgICAgIC8vIHRoYXQgZGlkbid0IGZpbmQgYSBob21lXG4gICAgICAgICAgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAvLyBTaW5jZSB0aGUgbm9kZSBpcyBrZXllZCBpdCBtaWdodCBiZSBtYXRjaGVkIHVwIGxhdGVyIHNvIHdlIGRlZmVyXG4gICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgICAgLy8gICAgICAgc3RpbGwgYSBjaGFuY2UgdGhleSB3aWxsIGJlIG1hdGNoZWQgdXAgbGF0ZXJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCwgZnJvbUVsLCB0cnVlIC8qIHNraXAga2V5ZWQgbm9kZXMgKi8pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgIH0gLy8gRU5EOiB3aGlsZShjdXJGcm9tTm9kZUNoaWxkKSB7fVxuXG4gICAgICAgIC8vIElmIHdlIGdvdCB0aGlzIGZhciB0aGVuIHdlIGRpZCBub3QgZmluZCBhIGNhbmRpZGF0ZSBtYXRjaCBmb3JcbiAgICAgICAgLy8gb3VyIFwidG8gbm9kZVwiIGFuZCB3ZSBleGhhdXN0ZWQgYWxsIG9mIHRoZSBjaGlsZHJlbiBcImZyb21cIlxuICAgICAgICAvLyBub2Rlcy4gVGhlcmVmb3JlLCB3ZSB3aWxsIGp1c3QgYXBwZW5kIHRoZSBjdXJyZW50IFwidG9cIiBub2RlXG4gICAgICAgIC8vIHRvIHRoZSBlbmRcbiAgICAgICAgaWYgKGN1clRvTm9kZUtleSAmJiAobWF0Y2hpbmdGcm9tRWwgPSBmcm9tTm9kZXNMb29rdXBbY3VyVG9Ob2RlS2V5XSkgJiYgY29tcGFyZU5vZGVOYW1lcyhtYXRjaGluZ0Zyb21FbCwgY3VyVG9Ob2RlQ2hpbGQpKSB7XG4gICAgICAgICAgLy8gTU9SUEhcbiAgICAgICAgICBpZighc2tpcEZyb20peyBhZGRDaGlsZChmcm9tRWwsIG1hdGNoaW5nRnJvbUVsKTsgfVxuICAgICAgICAgIG1vcnBoRWwobWF0Y2hpbmdGcm9tRWwsIGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgb25CZWZvcmVOb2RlQWRkZWRSZXN1bHQgPSBvbkJlZm9yZU5vZGVBZGRlZChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgaWYgKG9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKG9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0KSB7XG4gICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gb25CZWZvcmVOb2RlQWRkZWRSZXN1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXJUb05vZGVDaGlsZC5hY3R1YWxpemUpIHtcbiAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSBjdXJUb05vZGVDaGlsZC5hY3R1YWxpemUoZnJvbUVsLm93bmVyRG9jdW1lbnQgfHwgZG9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZENoaWxkKGZyb21FbCwgY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgaGFuZGxlTm9kZUFkZGVkKGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIGNsZWFudXBGcm9tRWwoZnJvbUVsLCBjdXJGcm9tTm9kZUNoaWxkLCBjdXJGcm9tTm9kZUtleSk7XG5cbiAgICAgIHZhciBzcGVjaWFsRWxIYW5kbGVyID0gc3BlY2lhbEVsSGFuZGxlcnNbZnJvbUVsLm5vZGVOYW1lXTtcbiAgICAgIGlmIChzcGVjaWFsRWxIYW5kbGVyKSB7XG4gICAgICAgIHNwZWNpYWxFbEhhbmRsZXIoZnJvbUVsLCB0b0VsKTtcbiAgICAgIH1cbiAgICB9IC8vIEVORDogbW9ycGhDaGlsZHJlbiguLi4pXG5cbiAgICB2YXIgbW9ycGhlZE5vZGUgPSBmcm9tTm9kZTtcbiAgICB2YXIgbW9ycGhlZE5vZGVUeXBlID0gbW9ycGhlZE5vZGUubm9kZVR5cGU7XG4gICAgdmFyIHRvTm9kZVR5cGUgPSB0b05vZGUubm9kZVR5cGU7XG5cbiAgICBpZiAoIWNoaWxkcmVuT25seSkge1xuICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZXJlIHdlIGFyZSBnaXZlbiB0d28gRE9NIG5vZGVzIHRoYXQgYXJlIG5vdFxuICAgICAgLy8gY29tcGF0aWJsZSAoZS5nLiA8ZGl2PiAtLT4gPHNwYW4+IG9yIDxkaXY+IC0tPiBURVhUKVxuICAgICAgaWYgKG1vcnBoZWROb2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmICh0b05vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgICBpZiAoIWNvbXBhcmVOb2RlTmFtZXMoZnJvbU5vZGUsIHRvTm9kZSkpIHtcbiAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChmcm9tTm9kZSk7XG4gICAgICAgICAgICBtb3JwaGVkTm9kZSA9IG1vdmVDaGlsZHJlbihmcm9tTm9kZSwgY3JlYXRlRWxlbWVudE5TKHRvTm9kZS5ub2RlTmFtZSwgdG9Ob2RlLm5hbWVzcGFjZVVSSSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBHb2luZyBmcm9tIGFuIGVsZW1lbnQgbm9kZSB0byBhIHRleHQgbm9kZVxuICAgICAgICAgIG1vcnBoZWROb2RlID0gdG9Ob2RlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG1vcnBoZWROb2RlVHlwZSA9PT0gVEVYVF9OT0RFIHx8IG1vcnBoZWROb2RlVHlwZSA9PT0gQ09NTUVOVF9OT0RFKSB7IC8vIFRleHQgb3IgY29tbWVudCBub2RlXG4gICAgICAgIGlmICh0b05vZGVUeXBlID09PSBtb3JwaGVkTm9kZVR5cGUpIHtcbiAgICAgICAgICBpZiAobW9ycGhlZE5vZGUubm9kZVZhbHVlICE9PSB0b05vZGUubm9kZVZhbHVlKSB7XG4gICAgICAgICAgICBtb3JwaGVkTm9kZS5ub2RlVmFsdWUgPSB0b05vZGUubm9kZVZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBtb3JwaGVkTm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUZXh0IG5vZGUgdG8gc29tZXRoaW5nIGVsc2VcbiAgICAgICAgICBtb3JwaGVkTm9kZSA9IHRvTm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtb3JwaGVkTm9kZSA9PT0gdG9Ob2RlKSB7XG4gICAgICAvLyBUaGUgXCJ0byBub2RlXCIgd2FzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIFwiZnJvbSBub2RlXCIgc28gd2UgaGFkIHRvXG4gICAgICAvLyB0b3NzIG91dCB0aGUgXCJmcm9tIG5vZGVcIiBhbmQgdXNlIHRoZSBcInRvIG5vZGVcIlxuICAgICAgb25Ob2RlRGlzY2FyZGVkKGZyb21Ob2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRvTm9kZS5pc1NhbWVOb2RlICYmIHRvTm9kZS5pc1NhbWVOb2RlKG1vcnBoZWROb2RlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG1vcnBoRWwobW9ycGhlZE5vZGUsIHRvTm9kZSwgY2hpbGRyZW5Pbmx5KTtcblxuICAgICAgLy8gV2Ugbm93IG5lZWQgdG8gbG9vcCBvdmVyIGFueSBrZXllZCBub2RlcyB0aGF0IG1pZ2h0IG5lZWQgdG8gYmVcbiAgICAgIC8vIHJlbW92ZWQuIFdlIG9ubHkgZG8gdGhlIHJlbW92YWwgaWYgd2Uga25vdyB0aGF0IHRoZSBrZXllZCBub2RlXG4gICAgICAvLyBuZXZlciBmb3VuZCBhIG1hdGNoLiBXaGVuIGEga2V5ZWQgbm9kZSBpcyBtYXRjaGVkIHVwIHdlIHJlbW92ZVxuICAgICAgLy8gaXQgb3V0IG9mIGZyb21Ob2Rlc0xvb2t1cCBhbmQgd2UgdXNlIGZyb21Ob2Rlc0xvb2t1cCB0byBkZXRlcm1pbmVcbiAgICAgIC8vIGlmIGEga2V5ZWQgbm9kZSBoYXMgYmVlbiBtYXRjaGVkIHVwIG9yIG5vdFxuICAgICAgaWYgKGtleWVkUmVtb3ZhbExpc3QpIHtcbiAgICAgICAgZm9yICh2YXIgaT0wLCBsZW49a2V5ZWRSZW1vdmFsTGlzdC5sZW5ndGg7IGk8bGVuOyBpKyspIHtcbiAgICAgICAgICB2YXIgZWxUb1JlbW92ZSA9IGZyb21Ob2Rlc0xvb2t1cFtrZXllZFJlbW92YWxMaXN0W2ldXTtcbiAgICAgICAgICBpZiAoZWxUb1JlbW92ZSkge1xuICAgICAgICAgICAgcmVtb3ZlTm9kZShlbFRvUmVtb3ZlLCBlbFRvUmVtb3ZlLnBhcmVudE5vZGUsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNoaWxkcmVuT25seSAmJiBtb3JwaGVkTm9kZSAhPT0gZnJvbU5vZGUgJiYgZnJvbU5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgaWYgKG1vcnBoZWROb2RlLmFjdHVhbGl6ZSkge1xuICAgICAgICBtb3JwaGVkTm9kZSA9IG1vcnBoZWROb2RlLmFjdHVhbGl6ZShmcm9tTm9kZS5vd25lckRvY3VtZW50IHx8IGRvYyk7XG4gICAgICB9XG4gICAgICAvLyBJZiB3ZSBoYWQgdG8gc3dhcCBvdXQgdGhlIGZyb20gbm9kZSB3aXRoIGEgbmV3IG5vZGUgYmVjYXVzZSB0aGUgb2xkXG4gICAgICAvLyBub2RlIHdhcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoZSB0YXJnZXQgbm9kZSB0aGVuIHdlIG5lZWQgdG9cbiAgICAgIC8vIHJlcGxhY2UgdGhlIG9sZCBET00gbm9kZSBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUuIFRoaXMgaXMgb25seVxuICAgICAgLy8gcG9zc2libGUgaWYgdGhlIG9yaWdpbmFsIERPTSBub2RlIHdhcyBwYXJ0IG9mIGEgRE9NIHRyZWUgd2hpY2hcbiAgICAgIC8vIHdlIGtub3cgaXMgdGhlIGNhc2UgaWYgaXQgaGFzIGEgcGFyZW50IG5vZGUuXG4gICAgICBmcm9tTm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtb3JwaGVkTm9kZSwgZnJvbU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtb3JwaGVkTm9kZTtcbiAgfTtcbn1cblxudmFyIG1vcnBoZG9tID0gbW9ycGhkb21GYWN0b3J5KG1vcnBoQXR0cnMpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihlbGVtZW50KSB7XG4gICAgY29uc3QgaXNGaWxlSW5wdXQgPSBlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJztcbiAgICBpZiAoIWlzRmlsZUlucHV0KSB7XG4gICAgICAgIGlmICgndmFsdWUnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihjaGlsZCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVNb3JwaGRvbShyb290RnJvbUVsZW1lbnQsIHJvb3RUb0VsZW1lbnQsIG1vZGlmaWVkRmllbGRFbGVtZW50cywgZ2V0RWxlbWVudFZhbHVlLCBjaGlsZENvbXBvbmVudHMsIGZpbmRDaGlsZENvbXBvbmVudCwgZ2V0S2V5RnJvbUVsZW1lbnQsIGV4dGVybmFsTXV0YXRpb25UcmFja2VyKSB7XG4gICAgY29uc3QgY2hpbGRDb21wb25lbnRNYXAgPSBuZXcgTWFwKCk7XG4gICAgY2hpbGRDb21wb25lbnRzLmZvckVhY2goKGNoaWxkQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGNoaWxkQ29tcG9uZW50TWFwLnNldChjaGlsZENvbXBvbmVudC5lbGVtZW50LCBjaGlsZENvbXBvbmVudCk7XG4gICAgfSk7XG4gICAgbW9ycGhkb20ocm9vdEZyb21FbGVtZW50LCByb290VG9FbGVtZW50LCB7XG4gICAgICAgIGdldE5vZGVLZXk6IChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV4dGVybmFsTXV0YXRpb25UcmFja2VyLndhc0VsZW1lbnRBZGRlZChub2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnYWRkZWRfZWxlbWVudF8nICsgTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRLZXlGcm9tRWxlbWVudChub2RlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CZWZvcmVFbFVwZGF0ZWQ6IChmcm9tRWwsIHRvRWwpID0+IHtcbiAgICAgICAgICAgIGlmIChmcm9tRWwgPT09IHJvb3RGcm9tRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZyb21FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHRvRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZnJvbUVsLl9feCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuQWxwaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBhY2Nlc3MgQWxwaW5lLmpzIHRob3VnaCB0aGUgZ2xvYmFsIHdpbmRvdy5BbHBpbmUgdmFyaWFibGUuIFBsZWFzZSBtYWtlIHN1cmUgQWxwaW5lLmpzIGlzIGxvYWRlZCBiZWZvcmUgU3ltZm9ueSBVWCBMaXZlQ29tcG9uZW50LicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93LkFscGluZS5tb3JwaCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gYWNjZXNzIEFscGluZS5qcyBtb3JwaCBmdW5jdGlvbi4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgQWxwaW5lLmpzIE1vcnBoIHBsdWdpbiBpcyBpbnN0YWxsZWQgYW5kIGxvYWRlZCwgc2VlIGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvbW9ycGggZm9yIG1vcmUgaW5mb3JtYXRpb24uJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LkFscGluZS5tb3JwaChmcm9tRWwuX194LCB0b0VsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50TWFwLmhhcyhmcm9tRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50ID0gY2hpbGRDb21wb25lbnRNYXAuZ2V0KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50LnVwZGF0ZUZyb21OZXdFbGVtZW50RnJvbVBhcmVudFJlbmRlcih0b0VsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobW9kaWZpZWRGaWVsZEVsZW1lbnRzLmluY2x1ZGVzKGZyb21FbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQodG9FbCwgZ2V0RWxlbWVudFZhbHVlKGZyb21FbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50Q2hhbmdlcyA9IGV4dGVybmFsTXV0YXRpb25UcmFja2VyLmdldENoYW5nZWRFbGVtZW50KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFwcGx5VG9FbGVtZW50KHRvRWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLmlzRXF1YWxOb2RlKHRvRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGcm9tRWwgPSBjbG9uZUhUTUxFbGVtZW50KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRGcm9tRWwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxpemVkVG9FbCA9IGNsb25lSFRNTEVsZW1lbnQodG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRUb0VsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWRGcm9tRWwuaXNFcXVhbE5vZGUobm9ybWFsaXplZFRvRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIWZyb21FbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbGl2ZS1pZ25vcmUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CZWZvcmVOb2RlRGlzY2FyZGVkKG5vZGUpIHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChleHRlcm5hbE11dGF0aW9uVHJhY2tlci53YXNFbGVtZW50QWRkZWQobm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJyk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmNsYXNzIFVuc3luY2VkSW5wdXRzVHJhY2tlciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50LCBtb2RlbEVsZW1lbnRSZXNvbHZlcikge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIgPSBtb2RlbEVsZW1lbnRSZXNvbHZlcjtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0cyA9IG5ldyBVbnN5bmNlZElucHV0Q29udGFpbmVyKCk7XG4gICAgfVxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMubWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50KHRhcmdldCk7XG4gICAgfVxuICAgIHVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gdGhpcy5tb2RlbEVsZW1lbnRSZXNvbHZlci5nZXRNb2RlbE5hbWUoZWxlbWVudCk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMuYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGdldFVuc3luY2VkSW5wdXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZElucHV0cy5hbGxVbnN5bmNlZElucHV0cygpO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVscygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy51bnN5bmNlZElucHV0cy5nZXRVbnN5bmNlZE1vZGVsTmFtZXMoKSk7XG4gICAgfVxuICAgIHJlc2V0VW5zeW5jZWRGaWVsZHMoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuICAgIH1cbn1cbmNsYXNzIFVuc3luY2VkSW5wdXRDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMgPSBbXTtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMgPSBbXTtcbiAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBhZGQoZWxlbWVudCwgbW9kZWxOYW1lID0gbnVsbCkge1xuICAgICAgICBpZiAobW9kZWxOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuc2V0KG1vZGVsTmFtZSwgZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5wdXNoKG1vZGVsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIHJlc2V0VW5zeW5jZWRGaWVsZHMoKSB7XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhbGxVbnN5bmNlZElucHV0cygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMsIC4uLnRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy52YWx1ZXMoKV07XG4gICAgfVxuICAgIG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluZGV4T2YobW9kZWxOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVsTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcztcbiAgICB9XG59XG5cbmNsYXNzIEhvb2tNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBob29rcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcbiAgICB9XG4gICAgdW5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaG9va3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBob29rcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmhvb2tzLnNldChob29rTmFtZSwgaG9va3MpO1xuICAgIH1cbiAgICB0cmlnZ2VySG9vayhob29rTmFtZSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgaG9va3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tlbmRSZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIH1cbiAgICBhc3luYyBnZXRCb2R5KCkge1xuICAgICAgICBpZiAoIXRoaXMuYm9keSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5ID0gYXdhaXQgdGhpcy5yZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keTtcbiAgICB9XG59XG5cbmNsYXNzIENoYW5naW5nSXRlbXNUcmFja2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlZEl0ZW1zID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzZXRJdGVtKGl0ZW1OYW1lLCBuZXdWYWx1ZSwgcHJldmlvdXNWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5yZW1vdmVkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZFJlY29yZCA9IHRoaXMucmVtb3ZlZEl0ZW1zLmdldChpdGVtTmFtZSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuICAgICAgICAgICAgaWYgKHJlbW92ZWRSZWNvcmQub3JpZ2luYWwgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlY29yZCA9IHRoaXMuY2hhbmdlZEl0ZW1zLmdldChpdGVtTmFtZSk7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxSZWNvcmQub3JpZ2luYWwgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5zZXQoaXRlbU5hbWUsIHsgb3JpZ2luYWw6IG9yaWdpbmFsUmVjb3JkLm9yaWdpbmFsLCBuZXc6IG5ld1ZhbHVlIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLnNldChpdGVtTmFtZSwgeyBvcmlnaW5hbDogcHJldmlvdXNWYWx1ZSwgbmV3OiBuZXdWYWx1ZSB9KTtcbiAgICB9XG4gICAgcmVtb3ZlSXRlbShpdGVtTmFtZSwgY3VycmVudFZhbHVlKSB7XG4gICAgICAgIGxldCB0cnVlT3JpZ2luYWxWYWx1ZSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkID0gdGhpcy5jaGFuZ2VkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIHRydWVPcmlnaW5hbFZhbHVlID0gb3JpZ2luYWxSZWNvcmQub3JpZ2luYWw7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuICAgICAgICAgICAgaWYgKHRydWVPcmlnaW5hbFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yZW1vdmVkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiB0cnVlT3JpZ2luYWxWYWx1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDaGFuZ2VkSXRlbXMoKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VkSXRlbXMucHVzaCh7IG5hbWU6IGtleSwgdmFsdWU6IHZhbHVlLm5ldyB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjaGFuZ2VkSXRlbXM7XG4gICAgfVxuICAgIGdldFJlbW92ZWRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlZEl0ZW1zID0gW107XG4gICAgICAgIHRoaXMucmVtb3ZlZEl0ZW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZWRJdGVtcy5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVtb3ZlZEl0ZW1zO1xuICAgIH1cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VkSXRlbXMuc2l6ZSA9PT0gMCAmJiB0aGlzLnJlbW92ZWRJdGVtcy5zaXplID09PSAwO1xuICAgIH1cbn1cblxuY2xhc3MgRWxlbWVudENoYW5nZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFkZGVkQ2xhc3NlcyA9IFtdO1xuICAgICAgICB0aGlzLnJlbW92ZWRDbGFzc2VzID0gW107XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzID0gbmV3IENoYW5naW5nSXRlbXNUcmFja2VyKCk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcyA9IG5ldyBDaGFuZ2luZ0l0ZW1zVHJhY2tlcigpO1xuICAgIH1cbiAgICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMucmVtb3ZlZENsYXNzZXMuaW5jbHVkZXMoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVkQ2xhc3NlcyA9IHRoaXMucmVtb3ZlZENsYXNzZXMuZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9PSBjbGFzc05hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hZGRlZENsYXNzZXMuaW5jbHVkZXMoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5hZGRlZENsYXNzZXMuaW5jbHVkZXMoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMgPSB0aGlzLmFkZGVkQ2xhc3Nlcy5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09IGNsYXNzTmFtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJlbW92ZWRDbGFzc2VzLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZFN0eWxlKHN0eWxlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdHlsZUNoYW5nZXMuc2V0SXRlbShzdHlsZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKTtcbiAgICB9XG4gICAgcmVtb3ZlU3R5bGUoc3R5bGVOYW1lLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLnJlbW92ZUl0ZW0oc3R5bGVOYW1lLCBvcmlnaW5hbFZhbHVlKTtcbiAgICB9XG4gICAgYWRkQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5zZXRJdGVtKGF0dHJpYnV0ZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKTtcbiAgICB9XG4gICAgcmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG9yaWdpbmFsVmFsdWUpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLnJlbW92ZUl0ZW0oYXR0cmlidXRlTmFtZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIGdldEFkZGVkQ2xhc3NlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkZWRDbGFzc2VzO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkQ2xhc3NlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlZENsYXNzZXM7XG4gICAgfVxuICAgIGdldENoYW5nZWRTdHlsZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKTtcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZFN0eWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpO1xuICAgIH1cbiAgICBnZXRDaGFuZ2VkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKTtcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGFwcGx5VG9FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShjaGFuZ2UubmFtZSwgY2hhbmdlLnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKHN0eWxlTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldENoYW5nZWRJdGVtcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCkuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuYWRkZWRDbGFzc2VzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgdGhpcy5yZW1vdmVkQ2xhc3Nlcy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLmlzRW1wdHkoKSAmJlxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmlzRW1wdHkoKSk7XG4gICAgfVxufVxuXG5jbGFzcyBFeHRlcm5hbE11dGF0aW9uVHJhY2tlciB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjaykge1xuICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5zaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrID0gc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjaztcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5vbk11dGF0aW9ucy5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNTdGFydGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDaGFuZ2VkRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkgPyB0aGlzLmNoYW5nZWRFbGVtZW50cy5nZXQoZWxlbWVudCkgOiBudWxsO1xuICAgIH1cbiAgICBnZXRBZGRlZEVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRlZEVsZW1lbnRzO1xuICAgIH1cbiAgICB3YXNFbGVtZW50QWRkZWQoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRlZEVsZW1lbnRzLmluY2x1ZGVzKGVsZW1lbnQpO1xuICAgIH1cbiAgICBoYW5kbGVQZW5kaW5nQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5vbk11dGF0aW9ucyh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gICAgfVxuICAgIG9uTXV0YXRpb25zKG11dGF0aW9ucykge1xuICAgICAgICBjb25zdCBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChjb25zdCBhZGRlZEVsZW1lbnQgb2YgdGhpcy5hZGRlZEVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFkZGVkRWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpc0NoYW5nZUluQWRkZWRFbGVtZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAobXV0YXRpb24udHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hpbGRMaXN0TXV0YXRpb24obXV0YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5zZXQoZWxlbWVudCwgW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5nZXQoZWxlbWVudCkuaW5jbHVkZXMobXV0YXRpb24uYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5zZXQoZWxlbWVudCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuZ2V0KGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucmVtb3ZlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMuc3BsaWNlKHRoaXMucmVtb3ZlZEVsZW1lbnRzLmluZGV4T2Yobm9kZSksIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihub2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkZWRFbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmFkZGVkRWxlbWVudHMuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMuc3BsaWNlKHRoaXMuYWRkZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRFbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24pIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzLnNldChlbGVtZW50LCBuZXcgRWxlbWVudENoYW5nZXMoKSk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hhbmdlZEVsZW1lbnQgPSB0aGlzLmNoYW5nZWRFbGVtZW50cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIHN3aXRjaCAobXV0YXRpb24uYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VkRWxlbWVudC5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEVsZW1lbnRzQ291bnQtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDbGFzc0F0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWU7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWVzID0gcHJldmlvdXNWYWx1ZSA/IHByZXZpb3VzVmFsdWUuc3BsaXQoJyAnKSA6IFtdO1xuICAgICAgICBwcmV2aW91c1ZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyaW1tZWRWYWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICh0cmltbWVkVmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNWYWx1ZXNbaW5kZXhdID0gdHJpbW1lZFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNWYWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlcyA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5jbGFzc0xpc3QpO1xuICAgICAgICBjb25zdCBhZGRlZFZhbHVlcyA9IG5ld1ZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiAhcHJldmlvdXNWYWx1ZXMuaW5jbHVkZXModmFsdWUpKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlZFZhbHVlcyA9IHByZXZpb3VzVmFsdWVzLmZpbHRlcigodmFsdWUpID0+ICFuZXdWYWx1ZXMuaW5jbHVkZXModmFsdWUpKTtcbiAgICAgICAgYWRkZWRWYWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFkZENsYXNzKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZWRWYWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLnJlbW92ZUNsYXNzKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZSB8fCAnJztcbiAgICAgICAgY29uc3QgcHJldmlvdXNTdHlsZXMgPSB0aGlzLmV4dHJhY3RTdHlsZXMocHJldmlvdXNWYWx1ZSk7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgfHwgJyc7XG4gICAgICAgIGNvbnN0IG5ld1N0eWxlcyA9IHRoaXMuZXh0cmFjdFN0eWxlcyhuZXdWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGFkZGVkT3JDaGFuZ2VkU3R5bGVzID0gT2JqZWN0LmtleXMobmV3U3R5bGVzKS5maWx0ZXIoKGtleSkgPT4gcHJldmlvdXNTdHlsZXNba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHByZXZpb3VzU3R5bGVzW2tleV0gIT09IG5ld1N0eWxlc1trZXldKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlZFN0eWxlcyA9IE9iamVjdC5rZXlzKHByZXZpb3VzU3R5bGVzKS5maWx0ZXIoKGtleSkgPT4gIW5ld1N0eWxlc1trZXldKTtcbiAgICAgICAgYWRkZWRPckNoYW5nZWRTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFkZFN0eWxlKHN0eWxlLCBuZXdTdHlsZXNbc3R5bGVdLCBwcmV2aW91c1N0eWxlc1tzdHlsZV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBwcmV2aW91c1N0eWxlc1tzdHlsZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVtb3ZlZFN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMucmVtb3ZlU3R5bGUoc3R5bGUsIHByZXZpb3VzU3R5bGVzW3N0eWxlXSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBsZXQgb2xkVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIGlmIChvbGRWYWx1ZSA9PT0gYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudENoYW5nZXMucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG11dGF0aW9uLm9sZFZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudENoYW5nZXMuYWRkQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpLCBtdXRhdGlvbi5vbGRWYWx1ZSk7XG4gICAgfVxuICAgIGV4dHJhY3RTdHlsZXMoc3R5bGVzKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlT2JqZWN0ID0ge307XG4gICAgICAgIHN0eWxlcy5zcGxpdCgnOycpLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IHN0eWxlLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBwYXJ0c1swXS50cmltKCk7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtwcm9wZXJ0eV0gPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc6JykudHJpbSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xuICAgIH1cbiAgICBpc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24oZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC50YWdOYW1lID09PSAnRk9OVCcgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgPT09ICd2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDsnO1xuICAgIH1cbn1cblxuY2xhc3MgQ2hpbGRDb21wb25lbnRXcmFwcGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQsIG1vZGVsQmluZGluZ3MpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMubW9kZWxCaW5kaW5ncyA9IG1vZGVsQmluZGluZ3M7XG4gICAgfVxufVxuY2xhc3MgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBwcm9wcywgbGlzdGVuZXJzLCBjb21wb25lbnRGaW5kZXIsIGZpbmdlcnByaW50LCBpZCwgYmFja2VuZCwgZWxlbWVudERyaXZlcikge1xuICAgICAgICB0aGlzLmRlZmF1bHREZWJvdW5jZSA9IDE1MDtcbiAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXMgPSB7fTtcbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRGaW5kZXIgPSBjb21wb25lbnRGaW5kZXI7XG4gICAgICAgIHRoaXMuYmFja2VuZCA9IGJhY2tlbmQ7XG4gICAgICAgIHRoaXMuZWxlbWVudERyaXZlciA9IGVsZW1lbnREcml2ZXI7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5maW5nZXJwcmludCA9IGZpbmdlcnByaW50O1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhsaXN0ZW5lci5ldmVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zZXQobGlzdGVuZXIuZXZlbnQsIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChfYSA9IHRoaXMubGlzdGVuZXJzLmdldChsaXN0ZW5lci5ldmVudCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wdXNoKGxpc3RlbmVyLmFjdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUgPSBuZXcgVmFsdWVTdG9yZShwcm9wcyk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyID0gbmV3IFVuc3luY2VkSW5wdXRzVHJhY2tlcih0aGlzLCBlbGVtZW50RHJpdmVyKTtcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBIb29rTWFuYWdlcigpO1xuICAgICAgICB0aGlzLnJlc2V0UHJvbWlzZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyID0gbmV3IEV4dGVybmFsTXV0YXRpb25UcmFja2VyKHRoaXMuZWxlbWVudCwgKGVsZW1lbnQpID0+IGVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMpKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdGFydCgpO1xuICAgICAgICB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSA9IHRoaXMub25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIF9zd2FwQmFja2VuZChiYWNrZW5kKSB7XG4gICAgICAgIHRoaXMuYmFja2VuZCA9IGJhY2tlbmQ7XG4gICAgfVxuICAgIGFkZFBsdWdpbihwbHVnaW4pIHtcbiAgICAgICAgcGx1Z2luLmF0dGFjaFRvQ29tcG9uZW50KHRoaXMpO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdjb25uZWN0JywgdGhpcyk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmFjdGl2YXRlKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnZGlzY29ubmVjdCcsIHRoaXMpO1xuICAgICAgICB0aGlzLmNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCgpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RvcCgpO1xuICAgIH1cbiAgICBvbihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5ob29rcy5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBvZmYoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaG9va3MudW5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBzZXQobW9kZWwsIHZhbHVlLCByZVJlbmRlciA9IGZhbHNlLCBkZWJvdW5jZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcbiAgICAgICAgY29uc3QgaXNDaGFuZ2VkID0gdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbW9kZWw6c2V0JywgbW9kZWwsIHZhbHVlLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIubWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKTtcbiAgICAgICAgaWYgKHJlUmVuZGVyICYmIGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBnZXREYXRhKG1vZGVsKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZWwgXCIke21vZGVsfVwiLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGFjdGlvbihuYW1lLCBhcmdzID0ge30sIGRlYm91bmNlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGFyZ3NcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGZpbGVzKGtleSwgaW5wdXQpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXNba2V5XSA9IGlucHV0O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgdGhpcy50cnlTdGFydGluZ1JlcXVlc3QoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGdldFVuc3luY2VkTW9kZWxzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZ2V0VW5zeW5jZWRNb2RlbHMoKTtcbiAgICB9XG4gICAgYWRkQ2hpbGQoY2hpbGQsIG1vZGVsQmluZGluZ3MgPSBbXSkge1xuICAgICAgICBpZiAoIWNoaWxkLmlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoaWxkcmVuIGNvbXBvbmVudHMgbXVzdCBoYXZlIGFuIGlkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc2V0KGNoaWxkLmlkLCBuZXcgQ2hpbGRDb21wb25lbnRXcmFwcGVyKGNoaWxkLCBtb2RlbEJpbmRpbmdzKSk7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG4gICAgICAgIGNoaWxkLm9uKCdtb2RlbDpzZXQnLCB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSk7XG4gICAgfVxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgIGlmICghY2hpbGQuaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGRyZW4gY29tcG9uZW50cyBtdXN0IGhhdmUgYW4gaWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5kZWxldGUoY2hpbGQuaWQpO1xuICAgICAgICBjaGlsZC5wYXJlbnQgPSBudWxsO1xuICAgICAgICBjaGlsZC5vZmYoJ21vZGVsOnNldCcsIHRoaXMub25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlKTtcbiAgICB9XG4gICAgZ2V0UGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgfVxuICAgIGdldENoaWxkcmVuKCkge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZENvbXBvbmVudCwgaWQpID0+IHtcbiAgICAgICAgICAgIGNoaWxkcmVuLnNldChpZCwgY2hpbGRDb21wb25lbnQuY29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG4gICAgZW1pdChuYW1lLCBkYXRhLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQgPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIGZhbHNlLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQpO1xuICAgIH1cbiAgICBlbWl0VXAobmFtZSwgZGF0YSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkID0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJmb3JtRW1pdChuYW1lLCBkYXRhLCB0cnVlLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQpO1xuICAgIH1cbiAgICBlbWl0U2VsZihuYW1lLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvRW1pdChuYW1lLCBkYXRhKTtcbiAgICB9XG4gICAgcGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgZW1pdFVwLCBtYXRjaGluZ05hbWUpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50RmluZGVyKHRoaXMsIGVtaXRVcCwgbWF0Y2hpbmdOYW1lKTtcbiAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5kb0VtaXQobmFtZSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkb0VtaXQobmFtZSwgZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmxpc3RlbmVycy5nZXQobmFtZSkgfHwgW107XG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbihhY3Rpb24sIGRhdGEsIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlRnJvbU5ld0VsZW1lbnRGcm9tUGFyZW50UmVuZGVyKHRvRWwpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50UHJvcHModG9FbCk7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzQ2hhbmdlZCA9IHRoaXMudmFsdWVTdG9yZS5zdG9yZU5ld1Byb3BzRnJvbVBhcmVudChwcm9wcyk7XG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gdG9FbC5kYXRhc2V0LmxpdmVGaW5nZXJwcmludFZhbHVlO1xuICAgICAgICBpZiAoZmluZ2VycHJpbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5maW5nZXJwcmludCA9IGZpbmdlcnByaW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlKG1vZGVsTmFtZSwgdmFsdWUsIGNoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgIGlmICghY2hpbGRDb21wb25lbnQuaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBpZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkV3JhcHBlciA9IHRoaXMuY2hpbGRyZW4uZ2V0KGNoaWxkQ29tcG9uZW50LmlkKTtcbiAgICAgICAgaWYgKCFjaGlsZFdyYXBwZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBjaGlsZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkV3JhcHBlci5tb2RlbEJpbmRpbmdzLmZvckVhY2goKG1vZGVsQmluZGluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRNb2RlbE5hbWUgPSBtb2RlbEJpbmRpbmcuaW5uZXJNb2RlbE5hbWUgfHwgJ3ZhbHVlJztcbiAgICAgICAgICAgIGlmIChjaGlsZE1vZGVsTmFtZSAhPT0gbW9kZWxOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgdmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1R1cmJvRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBUdXJibyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuZWxlbWVudC5jbG9zZXN0KCdbZGF0YS10dXJibz1cImZhbHNlXCJdJyk7XG4gICAgfVxuICAgIHRyeVN0YXJ0aW5nUmVxdWVzdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1SZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgcGVyZm9ybVJlcXVlc3QoKSB7XG4gICAgICAgIGNvbnN0IHRoaXNQcm9taXNlUmVzb2x2ZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZTtcbiAgICAgICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuICAgICAgICBjb25zdCBmaWxlc1RvU2VuZCA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnBlbmRpbmdGaWxlcykpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5maWxlcykge1xuICAgICAgICAgICAgICAgIGZpbGVzVG9TZW5kW2tleV0gPSB2YWx1ZS5maWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gdGhpcy5iYWNrZW5kLm1ha2VSZXF1ZXN0KHRoaXMudmFsdWVTdG9yZS5nZXRPcmlnaW5hbFByb3BzKCksIHRoaXMucGVuZGluZ0FjdGlvbnMsIHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCksIHRoaXMuZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKSwgdGhpcy52YWx1ZVN0b3JlLmdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQoKSwgZmlsZXNUb1NlbmQpO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdsb2FkaW5nLnN0YXRlOnN0YXJ0ZWQnLCB0aGlzLmVsZW1lbnQsIHRoaXMuYmFja2VuZFJlcXVlc3QpO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMudmFsdWVTdG9yZS5mbHVzaERpcnR5UHJvcHNUb1BlbmRpbmcoKTtcbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QucHJvbWlzZS50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG4gICAgICAgICAgICBjb25zdCBiYWNrZW5kUmVzcG9uc2UgPSBuZXcgQmFja2VuZFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCBiYWNrZW5kUmVzcG9uc2UuZ2V0Qm9keSgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpbnB1dCBvZiBPYmplY3QudmFsdWVzKHRoaXMucGVuZGluZ0ZpbGVzKSkge1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnM7XG4gICAgICAgICAgICBpZiAoaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpICE9PSAnYXBwbGljYXRpb24vdm5kLmxpdmUtY29tcG9uZW50K2h0bWwnICYmICFoZWFkZXJzLmdldCgnWC1MaXZlLVJlZGlyZWN0JykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9scyA9IHsgZGlzcGxheUVycm9yOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3Jlc3BvbnNlOmVycm9yJywgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xzLmRpc3BsYXlFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckVycm9yKGh0bWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlcXVlc3RQZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJvY2Vzc1JlcmVuZGVyKGh0bWwsIGJhY2tlbmRSZXNwb25zZSkge1xuICAgICAgICBjb25zdCBjb250cm9scyA9IHsgc2hvdWxkUmVuZGVyOiB0cnVlIH07XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3JlbmRlcjpzdGFydGVkJywgaHRtbCwgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgIGlmICghY29udHJvbHMuc2hvdWxkUmVuZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUdXJib0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgIFR1cmJvLnZpc2l0KGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdsb2FkaW5nLnN0YXRlOmZpbmlzaGVkJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgbW9kaWZpZWRNb2RlbFZhbHVlcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnZhbHVlU3RvcmUuZ2V0RGlydHlQcm9wcygpKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSA9IHRoaXMudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBuZXdFbGVtZW50O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV3RWxlbWVudCA9IGh0bWxUb0VsZW1lbnQoaHRtbCk7XG4gICAgICAgICAgICBpZiAoIW5ld0VsZW1lbnQubWF0Y2hlcygnW2RhdGEtY29udHJvbGxlcn49bGl2ZV0nKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBsaXZlIGNvbXBvbmVudCB0ZW1wbGF0ZSBtdXN0IGNvbnRhaW4gYSBzaW5nbGUgcm9vdCBjb250cm9sbGVyIGVsZW1lbnQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlIGNvbXBvbmVudCBIVE1MIHJldHVybmVkOicpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50UHJvcHMobmV3RWxlbWVudCk7XG4gICAgICAgIHRoaXMudmFsdWVTdG9yZS5yZWluaXRpYWxpemVBbGxQcm9wcyhuZXdQcm9wcyk7XG4gICAgICAgIGNvbnN0IGV2ZW50c1RvRW1pdCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRFdmVudHNUb0VtaXQobmV3RWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoKG5ld0VsZW1lbnQpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLmhhbmRsZVBlbmRpbmdDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RvcCgpO1xuICAgICAgICBleGVjdXRlTW9ycGhkb20odGhpcy5lbGVtZW50LCBuZXdFbGVtZW50LCB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZElucHV0cygpLCAoZWxlbWVudCkgPT4gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLnZhbHVlU3RvcmUpLCBBcnJheS5mcm9tKHRoaXMuZ2V0Q2hpbGRyZW4oKS52YWx1ZXMoKSksIHRoaXMuZWxlbWVudERyaXZlci5maW5kQ2hpbGRDb21wb25lbnRFbGVtZW50LCB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0S2V5RnJvbUVsZW1lbnQsIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZGlmaWVkTW9kZWxWYWx1ZXMpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBldmVudHNUb0VtaXQuZm9yRWFjaCgoeyBldmVudCwgZGF0YSwgdGFyZ2V0LCBjb21wb25lbnROYW1lIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRVcChldmVudCwgZGF0YSwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gJ3NlbGYnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0U2VsZihldmVudCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KGV2ZW50LCBkYXRhLCBjb21wb25lbnROYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoLmZvckVhY2goKHsgZXZlbnQsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50LCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiBwYXlsb2FkLFxuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZW5kZXI6ZmluaXNoZWQnLCB0aGlzKTtcbiAgICB9XG4gICAgY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpIHtcbiAgICAgICAgaWYgKGRlYm91bmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RGVib3VuY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlYm91bmNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlYm91bmNlO1xuICAgIH1cbiAgICBjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgdGhpcy5jYWxjdWxhdGVEZWJvdW5jZShkZWJvdW5jZSkpO1xuICAgIH1cbiAgICByZW5kZXJFcnJvcihodG1sKSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXZlLWNvbXBvbmVudC1lcnJvcicpO1xuICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1vZGFsLmlkID0gJ2xpdmUtY29tcG9uZW50LWVycm9yJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnBhZGRpbmcgPSAnNTBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAuNSknO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuekluZGV4ID0gJzEwMDAwMCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JztcbiAgICAgICAgaWZyYW1lLnN0eWxlLmZsZXhHcm93ID0gJzEnO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQobW9kYWwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIGlmIChpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub3BlbigpO1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoaHRtbCk7XG4gICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgICAgICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLm91dGVySFRNTCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICAgICAgfTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKG1vZGFsKSk7XG4gICAgICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtb2RhbC5mb2N1cygpO1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbkZpbmdlcnByaW50cygpIHtcbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnRzID0ge307XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRDb21wb25lbnQuY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluZ2VycHJpbnRzW2NoaWxkLmlkXSA9IHtcbiAgICAgICAgICAgICAgICBmaW5nZXJwcmludDogY2hpbGQuZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgdGFnOiBjaGlsZC5lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmluZ2VycHJpbnRzO1xuICAgIH1cbiAgICByZXNldFByb21pc2UoKSB7XG4gICAgICAgIHRoaXMubmV4dFJlcXVlc3RQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHByb3hpZnlDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShjb21wb25lbnQsIHtcbiAgICAgICAgZ2V0KGNvbXBvbmVudCwgcHJvcCkge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY29tcG9uZW50IHx8IHR5cGVvZiBwcm9wICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50W3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gY29tcG9uZW50W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYWJsZS5hcHBseShjb21wb25lbnQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoY29tcG9uZW50LCBwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQudmFsdWVTdG9yZS5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmdldERhdGEocHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmFjdGlvbi5hcHBseShjb21wb25lbnQsIFtwcm9wLCBhcmdzXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQuc2V0KHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuY2xhc3MgQmFja2VuZFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKHByb21pc2UsIGFjdGlvbnMsIHVwZGF0ZU1vZGVscykge1xuICAgICAgICB0aGlzLmlzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgdGhpcy5wcm9taXNlLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICAgICAgdGhpcy51cGRhdGVkTW9kZWxzID0gdXBkYXRlTW9kZWxzO1xuICAgIH1cbiAgICBjb250YWluc09uZU9mQWN0aW9ucyh0YXJnZXRlZEFjdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5maWx0ZXIoKGFjdGlvbikgPT4gdGFyZ2V0ZWRBY3Rpb25zLmluY2x1ZGVzKGFjdGlvbikpLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIGFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlZE1vZGVscy5maWx0ZXIoKG1vZGVsKSA9PiB0YXJnZXRlZE1vZGVscy5pbmNsdWRlcyhtb2RlbCkpLmxlbmd0aCA+IDA7XG4gICAgfVxufVxuXG5jbGFzcyBSZXF1ZXN0QnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IodXJsLCBjc3JmVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLmNzcmZUb2tlbiA9IGNzcmZUb2tlbjtcbiAgICB9XG4gICAgYnVpbGRSZXF1ZXN0KHByb3BzLCBhY3Rpb25zLCB1cGRhdGVkLCBjaGlsZHJlbiwgdXBkYXRlZFByb3BzRnJvbVBhcmVudCwgZmlsZXMpIHtcbiAgICAgICAgY29uc3Qgc3BsaXRVcmwgPSB0aGlzLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBsZXQgW3VybF0gPSBzcGxpdFVybDtcbiAgICAgICAgY29uc3QgWywgcXVlcnlTdHJpbmddID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcgfHwgJycpO1xuICAgICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7fTtcbiAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbCcsXG4gICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRvdGFsRmlsZXMgPSBPYmplY3QuZW50cmllcyhmaWxlcykucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwgKyBjdXJyZW50Lmxlbmd0aCwgMCk7XG4gICAgICAgIGNvbnN0IGhhc0ZpbmdlcnByaW50cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKS5sZW5ndGggPiAwO1xuICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgIHRvdGFsRmlsZXMgPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMud2lsbERhdGFGaXRJblVybChKU09OLnN0cmluZ2lmeShwcm9wcyksIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWQpLCBwYXJhbXMsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFByb3BzRnJvbVBhcmVudCkpKSB7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCdwcm9wcycsIEpTT04uc3RyaW5naWZ5KHByb3BzKSk7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCd1cGRhdGVkJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZCkpO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2V0KCdwcm9wc0Zyb21QYXJlbnQnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzRmluZ2VycHJpbnRzKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLnNldCgnY2hpbGRyZW4nLCBKU09OLnN0cmluZ2lmeShjaGlsZHJlbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0geyBwcm9wcywgdXBkYXRlZCB9O1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5wcm9wc0Zyb21QYXJlbnQgPSB1cGRhdGVkUHJvcHNGcm9tUGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc0ZpbmdlcnByaW50cykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jc3JmVG9rZW4gJiZcbiAgICAgICAgICAgICAgICAoYWN0aW9ucy5sZW5ndGggfHwgdG90YWxGaWxlcykpIHtcbiAgICAgICAgICAgICAgICBmZXRjaE9wdGlvbnMuaGVhZGVyc1snWC1DU1JGLVRPS0VOJ10gPSB0aGlzLmNzcmZUb2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuYXJncyA9IGFjdGlvbnNbMF0uYXJncztcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IGAvJHtlbmNvZGVVUklDb21wb25lbnQoYWN0aW9uc1swXS5uYW1lKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcvX2JhdGNoJztcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhKSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhmaWxlcykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmJvZHkgPSBmb3JtRGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVybDogYCR7dXJsfSR7cGFyYW1zU3RyaW5nLmxlbmd0aCA+IDAgPyBgPyR7cGFyYW1zU3RyaW5nfWAgOiAnJ31gLFxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB3aWxsRGF0YUZpdEluVXJsKHByb3BzSnNvbiwgdXBkYXRlZEpzb24sIHBhcmFtcywgY2hpbGRyZW5Kc29uLCBwcm9wc0Zyb21QYXJlbnRKc29uKSB7XG4gICAgICAgIGNvbnN0IHVybEVuY29kZWRKc29uRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocHJvcHNKc29uICsgdXBkYXRlZEpzb24gKyBjaGlsZHJlbkpzb24gKyBwcm9wc0Zyb21QYXJlbnRKc29uKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gKHVybEVuY29kZWRKc29uRGF0YSArIHBhcmFtcy50b1N0cmluZygpKS5sZW5ndGggPCAxNTAwO1xuICAgIH1cbn1cblxuY2xhc3MgQmFja2VuZCB7XG4gICAgY29uc3RydWN0b3IodXJsLCBjc3JmVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdEJ1aWxkZXIgPSBuZXcgUmVxdWVzdEJ1aWxkZXIodXJsLCBjc3JmVG9rZW4pO1xuICAgIH1cbiAgICBtYWtlUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHsgdXJsLCBmZXRjaE9wdGlvbnMgfSA9IHRoaXMucmVxdWVzdEJ1aWxkZXIuYnVpbGRSZXF1ZXN0KHByb3BzLCBhY3Rpb25zLCB1cGRhdGVkLCBjaGlsZHJlbiwgdXBkYXRlZFByb3BzRnJvbVBhcmVudCwgZmlsZXMpO1xuICAgICAgICByZXR1cm4gbmV3IEJhY2tlbmRSZXF1ZXN0KGZldGNoKHVybCwgZmV0Y2hPcHRpb25zKSwgYWN0aW9ucy5tYXAoKGJhY2tlbmRBY3Rpb24pID0+IGJhY2tlbmRBY3Rpb24ubmFtZSksIE9iamVjdC5rZXlzKHVwZGF0ZWQpKTtcbiAgICB9XG59XG5cbmNsYXNzIFN0YW5kYXJkRWxlbWVudERyaXZlciB7XG4gICAgZ2V0TW9kZWxOYW1lKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50UHJvcHMocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBwcm9wc0pzb24gPSAoX2EgPSByb290RWxlbWVudC5kYXRhc2V0LmxpdmVQcm9wc1ZhbHVlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAne30nO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShwcm9wc0pzb24pO1xuICAgIH1cbiAgICBmaW5kQ2hpbGRDb21wb25lbnRFbGVtZW50KGlkLCBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWxpdmUtaWQ9JHtpZH1dYCk7XG4gICAgfVxuICAgIGdldEtleUZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldC5saXZlSWQgfHwgbnVsbDtcbiAgICB9XG4gICAgZ2V0RXZlbnRzVG9FbWl0KGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBldmVudHNKc29uID0gKF9hID0gZWxlbWVudC5kYXRhc2V0LmxpdmVFbWl0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnW10nO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShldmVudHNKc29uKTtcbiAgICB9XG4gICAgZ2V0QnJvd3NlckV2ZW50c1RvRGlzcGF0Y2goZWxlbWVudCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGV2ZW50c0pzb24gPSAoX2EgPSBlbGVtZW50LmRhdGFzZXQubGl2ZUJyb3dzZXJEaXNwYXRjaCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ1tdJztcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZXZlbnRzSnNvbik7XG4gICAgfVxufVxuXG5jbGFzcyBMb2FkaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdsb2FkaW5nLnN0YXRlOnN0YXJ0ZWQnLCAoZWxlbWVudCwgcmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydExvYWRpbmcoZWxlbWVudCwgcmVxdWVzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2xvYWRpbmcuc3RhdGU6ZmluaXNoZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maW5pc2hMb2FkaW5nKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maW5pc2hMb2FkaW5nKGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICB9XG4gICAgc3RhcnRMb2FkaW5nKHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ1RvZ2dsZSh0cnVlLCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCk7XG4gICAgfVxuICAgIGZpbmlzaExvYWRpbmcodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoZmFsc2UsIHRhcmdldEVsZW1lbnQsIG51bGwpO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nVG9nZ2xlKGlzTG9hZGluZywgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5hZGRBdHRyaWJ1dGVzKHRhcmdldEVsZW1lbnQsIFsnYnVzeSddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbJ2J1c3knXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRMb2FkaW5nRGlyZWN0aXZlcyh0YXJnZXRFbGVtZW50KS5mb3JFYWNoKCh7IGVsZW1lbnQsIGRpcmVjdGl2ZXMgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBbJ2RhdGEtbGl2ZS1pcy1sb2FkaW5nJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIFsnZGF0YS1saXZlLWlzLWxvYWRpbmcnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZShlbGVtZW50LCBpc0xvYWRpbmcsIGRpcmVjdGl2ZSwgYmFja2VuZFJlcXVlc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICBjb25zdCBmaW5hbEFjdGlvbiA9IHBhcnNlTG9hZGluZ0FjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBpc0xvYWRpbmcpO1xuICAgICAgICBjb25zdCB0YXJnZXRlZEFjdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRNb2RlbHMgPSBbXTtcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcbiAgICAgICAgY29uc3QgdmFsaWRNb2RpZmllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnZGVsYXknLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsYXkgPSBtb2RpZmllci52YWx1ZSA/IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IDIwMDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnYWN0aW9uJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJhY3Rpb25cIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBhY3Rpb24oZm9vKS4gSXQncyBtaXNzaW5nIGZvciBcIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRlZEFjdGlvbnMucHVzaChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ21vZGVsJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJtb2RlbFwiIGluIGRhdGEtbG9hZGluZyBtdXN0IGhhdmUgYW4gYWN0aW9uIG5hbWUgLSBlLmcuIG1vZGVsKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ZWRNb2RlbHMucHVzaChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAodmFsaWRNb2RpZmllcnMuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGFibGUgPSAoX2EgPSB2YWxpZE1vZGlmaWVycy5nZXQobW9kaWZpZXIubmFtZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgdXNlZCBpbiBkYXRhLWxvYWRpbmc9XCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzTG9hZGluZyAmJiB0YXJnZXRlZEFjdGlvbnMubGVuZ3RoID4gMCAmJiBiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xvYWRpbmcgJiYgdGFyZ2V0ZWRNb2RlbHMubGVuZ3RoID4gMCAmJiBiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuYXJlQW55TW9kZWxzVXBkYXRlZCh0YXJnZXRlZE1vZGVscykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9hZGluZ0RpcmVjdGl2ZTtcbiAgICAgICAgc3dpdGNoIChmaW5hbEFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuaGlkZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZGRDbGFzcyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQ2xhc3MoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlQ2xhc3MnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FkZEF0dHJpYnV0ZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmVBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YS1sb2FkaW5nIGFjdGlvbiBcIiR7ZmluYWxBY3Rpb259XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmlzUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsb2FkaW5nRGlyZWN0aXZlKCk7XG4gICAgfVxuICAgIGdldExvYWRpbmdEaXJlY3RpdmVzKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbG9hZGluZ0RpcmVjdGl2ZXMgPSBbXTtcbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sb2FkaW5nXScpLmZvckVhY2goKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSAmJiAhKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBFbGVtZW50IFR5cGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0LmxvYWRpbmcgfHwgJ3Nob3cnKTtcbiAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBsb2FkaW5nRGlyZWN0aXZlcztcbiAgICB9XG4gICAgc2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAncmV2ZXJ0JztcbiAgICB9XG4gICAgaGlkZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBbJ2NsYXNzJ10pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCAnJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNvbnN0IHBhcnNlTG9hZGluZ0FjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24sIGlzTG9hZGluZykge1xuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdzaG93JyA6ICdoaWRlJztcbiAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2hpZGUnIDogJ3Nob3cnO1xuICAgICAgICBjYXNlICdhZGRDbGFzcyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyc7XG4gICAgICAgIGNhc2UgJ3JlbW92ZUNsYXNzJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJztcbiAgICAgICAgY2FzZSAnYWRkQXR0cmlidXRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnYWRkQXR0cmlidXRlJyA6ICdyZW1vdmVBdHRyaWJ1dGUnO1xuICAgICAgICBjYXNlICdyZW1vdmVBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdyZW1vdmVBdHRyaWJ1dGUnIDogJ2FkZEF0dHJpYnV0ZSc7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhLWxvYWRpbmcgYWN0aW9uIFwiJHthY3Rpb259XCJgKTtcbn07XG5cbmNsYXNzIFZhbGlkYXRlZEZpZWxkc1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbignbW9kZWw6c2V0JywgKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIGNvbXBvbmVudC52YWx1ZVN0b3JlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgdmFsdWVTdG9yZSkge1xuICAgICAgICBpZiAodmFsdWVTdG9yZS5oYXMoJ3ZhbGlkYXRlZEZpZWxkcycpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBbLi4udmFsdWVTdG9yZS5nZXQoJ3ZhbGlkYXRlZEZpZWxkcycpXTtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVkRmllbGRzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZWRGaWVsZHMucHVzaChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWVTdG9yZS5zZXQoJ3ZhbGlkYXRlZEZpZWxkcycsIHZhbGlkYXRlZEZpZWxkcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFBhZ2VVbmxvYWRpbmdQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpzdGFydGVkJywgKGh0bWwsIHJlc3BvbnNlLCBjb250cm9scykgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbHMuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nRGlyZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFscyA9IFtdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxzLnB1c2goeyBhY3Rpb25OYW1lLCBkdXJhdGlvbiB9KTtcbiAgICAgICAgaWYgKHRoaXMuaXNQb2xsaW5nQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRBbGxQb2xsaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5pc1BvbGxpbmdBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9sbHMuZm9yRWFjaCgoeyBhY3Rpb25OYW1lLCBkdXJhdGlvbiB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdG9wQWxsUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzLmZvckVhY2goKGludGVydmFsKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsZWFyUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsUG9sbGluZygpO1xuICAgICAgICB0aGlzLnBvbGxzID0gW107XG4gICAgICAgIHRoaXMuc3RhcnRBbGxQb2xsaW5nKCk7XG4gICAgfVxuICAgIGluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICBsZXQgY2FsbGJhY2s7XG4gICAgICAgIGlmIChhY3Rpb25OYW1lID09PSAnJHJlbmRlcicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGlvbihhY3Rpb25OYW1lLCB7fSwgMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMucHVzaCh0aW1lcik7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY29tcG9uZW50LmVsZW1lbnQ7XG4gICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yID0gbmV3IFBvbGxpbmdEaXJlY3Rvcihjb21wb25lbnQpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVQb2xsaW5nKCk7XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0YXJ0QWxsUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3Iuc3RvcEFsbFBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOmZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5hZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgY2xlYXJQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5jbGVhclBvbGxpbmcoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZVBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQb2xsaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZGF0YXNldC5wb2xsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYXdQb2xsQ29uZmlnID0gdGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdQb2xsQ29uZmlnIHx8ICckcmVuZGVyJyk7XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSAyMDAwO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWxheSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIGluIGRhdGEtcG9sbCBcIiR7cmF3UG9sbENvbmZpZ31cIi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYWRkUG9sbChkaXJlY3RpdmUuYWN0aW9uLCBkdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgU2V0VmFsdWVPbnRvTW9kZWxGaWVsZHNQbHVnaW4ge1xuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOmZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGVsXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZWxlbWVudCB1c2luZyBkYXRhLW1vZGVsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoIW1vZGVsRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5nZXRVbnN5bmNlZE1vZGVscygpLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50ICYmICFlbGVtZW50Lm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldE1vZGVsQmluZGluZyAobW9kZWxEaXJlY3RpdmUpIHtcbiAgICBsZXQgc2hvdWxkUmVuZGVyID0gdHJ1ZTtcbiAgICBsZXQgdGFyZ2V0RXZlbnROYW1lID0gbnVsbDtcbiAgICBsZXQgZGVib3VuY2UgPSBmYWxzZTtcbiAgICBtb2RlbERpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgc3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdvbic6XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm9uXCIgbW9kaWZpZXIgaW4gJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX0gcmVxdWlyZXMgYSB2YWx1ZSAtIGUuZy4gb24oY2hhbmdlKS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFbJ2lucHV0JywgJ2NoYW5nZSddLmluY2x1ZGVzKG1vZGlmaWVyLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm9uXCIgbW9kaWZpZXIgaW4gJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX0gb25seSBhY2NlcHRzIHRoZSBhcmd1bWVudHMgXCJpbnB1dFwiIG9yIFwiY2hhbmdlXCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldEV2ZW50TmFtZSA9IG1vZGlmaWVyLnZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbm9yZW5kZXInOlxuICAgICAgICAgICAgICAgIHNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVib3VuY2UnOlxuICAgICAgICAgICAgICAgIGRlYm91bmNlID0gbW9kaWZpZXIudmFsdWUgPyBwYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1tb2RlbD1cIiR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuYCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBbbW9kZWxOYW1lLCBpbm5lck1vZGVsTmFtZV0gPSBtb2RlbERpcmVjdGl2ZS5hY3Rpb24uc3BsaXQoJzonKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtb2RlbE5hbWUsXG4gICAgICAgIGlubmVyTW9kZWxOYW1lOiBpbm5lck1vZGVsTmFtZSB8fCBudWxsLFxuICAgICAgICBzaG91bGRSZW5kZXIsXG4gICAgICAgIGRlYm91bmNlLFxuICAgICAgICB0YXJnZXRFdmVudE5hbWVcbiAgICB9O1xufVxuXG5jbGFzcyBDb21wb25lbnRSZWdpc3RyeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50TWFwQnlFbGVtZW50ID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRNYXBCeUNvbXBvbmVudCA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJDb21wb25lbnQoZWxlbWVudCwgY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50TWFwQnlFbGVtZW50LnNldChlbGVtZW50LCBjb21wb25lbnQpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LnNldChjb21wb25lbnQsIGNvbXBvbmVudC5uYW1lKTtcbiAgICB9XG4gICAgdW5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRNYXBCeUVsZW1lbnQuZGVsZXRlKGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRNYXBCeUNvbXBvbmVudC5kZWxldGUoY29tcG9uZW50KTtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zdCBtYXhDb3VudCA9IDEwO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRNYXBCeUVsZW1lbnQuZ2V0KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPiBtYXhDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgQ29tcG9uZW50IG5vdCBmb3VuZCBmb3IgZWxlbWVudCAke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9YCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmluZENvbXBvbmVudHMoY3VycmVudENvbXBvbmVudCwgb25seVBhcmVudHMsIG9ubHlNYXRjaE5hbWUpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9ubHlQYXJlbnRzICYmXG4gICAgICAgICAgICAgICAgKGN1cnJlbnRDb21wb25lbnQgPT09IGNvbXBvbmVudCB8fCAhY29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY3VycmVudENvbXBvbmVudC5lbGVtZW50KSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob25seU1hdGNoTmFtZSAmJiBjb21wb25lbnROYW1lICE9PSBvbmx5TWF0Y2hOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG59XG5cbmNvbnN0IGdldENvbXBvbmVudCA9IChlbGVtZW50KSA9PiBMaXZlQ29udHJvbGxlckRlZmF1bHQuY29tcG9uZW50UmVnaXN0cnkuZ2V0Q29tcG9uZW50KGVsZW1lbnQpO1xuY2xhc3MgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdjaGFuZ2UnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB9LFxuICAgICAgICAgICAgeyBldmVudDogJ2xpdmU6Y29ubmVjdCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlQ29ubmVjdGVkQ29udHJvbGxlckV2ZW50KGV2ZW50KSB9LFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLnBlbmRpbmdGaWxlcyA9IHt9O1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50ID0gdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudC5iaW5kKHRoaXMpO1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LmxpdmVJZCB8fCBudWxsO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5lbGVtZW50LCB0aGlzLm5hbWVWYWx1ZSwgdGhpcy5wcm9wc1ZhbHVlLCB0aGlzLmxpc3RlbmVyc1ZhbHVlLCAoY3VycmVudENvbXBvbmVudCwgb25seVBhcmVudHMsIG9ubHlNYXRjaE5hbWUpID0+IExpdmVDb250cm9sbGVyRGVmYXVsdC5jb21wb25lbnRSZWdpc3RyeS5maW5kQ29tcG9uZW50cyhjdXJyZW50Q29tcG9uZW50LCBvbmx5UGFyZW50cywgb25seU1hdGNoTmFtZSksIHRoaXMuZmluZ2VycHJpbnRWYWx1ZSwgaWQsIG5ldyBCYWNrZW5kKHRoaXMudXJsVmFsdWUsIHRoaXMuY3NyZlZhbHVlKSwgbmV3IFN0YW5kYXJkRWxlbWVudERyaXZlcigpKTtcbiAgICAgICAgdGhpcy5wcm94aWVkQ29tcG9uZW50ID0gcHJveGlmeUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5fX2NvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgaWYgKHRoaXMuaGFzRGVib3VuY2VWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZGVmYXVsdERlYm91bmNlID0gdGhpcy5kZWJvdW5jZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsdWdpbnMgPSBbXG4gICAgICAgICAgICBuZXcgTG9hZGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFZhbGlkYXRlZEZpZWxkc1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFBhZ2VVbmxvYWRpbmdQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBQb2xsaW5nUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgU2V0VmFsdWVPbnRvTW9kZWxGaWVsZHNQbHVnaW4oKSxcbiAgICAgICAgXTtcbiAgICAgICAgcGx1Z2lucy5mb3JFYWNoKChwbHVnaW4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFkZFBsdWdpbihwbHVnaW4pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyQ29tcG9uZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb21wb25lbnQpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jb25uZWN0KCk7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0Jyk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIExpdmVDb250cm9sbGVyRGVmYXVsdC5jb21wb25lbnRSZWdpc3RyeS51bnJlZ2lzdGVyQ29tcG9uZW50KHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnZGlzY29ubmVjdCcpO1xuICAgIH1cbiAgICB1cGRhdGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdpbnB1dCcgfHwgZXZlbnQudHlwZSA9PT0gJ2NoYW5nZScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2luY2UgTGl2ZUNvbXBvbmVudHMgMi4zLCB5b3Ugbm8gbG9uZ2VyIG5lZWQgZGF0YS1hY3Rpb249XCJsaXZlI3VwZGF0ZVwiIG9uIGZvcm0gZWxlbWVudHMuIEZvdW5kIG9uIGVsZW1lbnQ6ICR7Z2V0RWxlbWVudEFzVGFnVGV4dChldmVudC5jdXJyZW50VGFyZ2V0KX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudChldmVudC5jdXJyZW50VGFyZ2V0LCBudWxsKTtcbiAgICB9XG4gICAgYWN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJhd0FjdGlvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5hY3Rpb25OYW1lO1xuICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKHJhd0FjdGlvbik7XG4gICAgICAgIGxldCBkZWJvdW5jZSA9IGZhbHNlO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHBlbmRpbmdGaWxlcyA9IHt9O1xuICAgICAgICAgICAgY29uc3QgdmFsaWRNb2RpZmllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3ByZXZlbnQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdzdG9wJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3NlbGYnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2RlYm91bmNlJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVib3VuY2UgPSBtb2RpZmllci52YWx1ZSA/IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnZmlsZXMnLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdGaWxlcyA9IHRoaXMucGVuZGluZ0ZpbGVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0ZpbGVzW21vZGlmaWVyLnZhbHVlXSA9IHRoaXMucGVuZGluZ0ZpbGVzW21vZGlmaWVyLnZhbHVlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IChfYSA9IHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKCgpID0+IHsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gbW9kaWZpZXIgJHttb2RpZmllci5uYW1lfSBpbiBhY3Rpb24gXCIke3Jhd0FjdGlvbn1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIGlucHV0XSBvZiBPYmplY3QuZW50cmllcyhwZW5kaW5nRmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmZpbGVzKGtleSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRmlsZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBkaXJlY3RpdmUubmFtZWQsIGRlYm91bmNlKTtcbiAgICAgICAgICAgIGlmIChnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgJHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgIH1cbiAgICBlbWl0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSwgbmFtZU1hdGNoIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVtaXQobmFtZSwgZGF0YSwgbmFtZU1hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXRVcChldmVudCkge1xuICAgICAgICB0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEsIG5hbWVNYXRjaCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0VXAobmFtZSwgZGF0YSwgbmFtZU1hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXRTZWxmKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0U2VsZihuYW1lLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEVtaXREaXJlY3RpdmVzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBpZiAoIWVsZW1lbnQuZGF0YXNldC5ldmVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBkYXRhLWV2ZW50IGF0dHJpYnV0ZSBmb3VuZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXZlbnRJbmZvID0gZWxlbWVudC5kYXRhc2V0LmV2ZW50O1xuICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGV2ZW50SW5mbyk7XG4gICAgICAgIGNvbnN0IGVtaXRzID0gW107XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmFtZU1hdGNoID0gbnVsbDtcbiAgICAgICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lTWF0Y2ggPSBtb2RpZmllci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyICR7bW9kaWZpZXIubmFtZX0gaW4gZXZlbnQgXCIke2V2ZW50SW5mb31cIi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVtaXRzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGRpcmVjdGl2ZS5hY3Rpb24sXG4gICAgICAgICAgICAgICAgZGF0YTogZGlyZWN0aXZlLm5hbWVkLFxuICAgICAgICAgICAgICAgIG5hbWVNYXRjaCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVtaXRzO1xuICAgIH1cbiAgICAkdXBkYXRlTW9kZWwobW9kZWwsIHZhbHVlLCBzaG91bGRSZW5kZXIgPSB0cnVlLCBkZWJvdW5jZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnNldChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciwgZGVib3VuY2UpO1xuICAgIH1cbiAgICBoYW5kbGVJbnB1dEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCh0YXJnZXQsICdpbnB1dCcpO1xuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2VFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQodGFyZ2V0LCAnY2hhbmdlJyk7XG4gICAgfVxuICAgIHVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudChlbGVtZW50LCBldmVudE5hbWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgICAgICBpZiAoKF9hID0gZWxlbWVudC5maWxlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0ZpbGVzW2tleV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nRmlsZXNba2V5XSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdGaWxlc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIGlmICghbW9kZWxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbEJpbmRpbmcgPSBnZXRNb2RlbEJpbmRpbmcobW9kZWxEaXJlY3RpdmUpO1xuICAgICAgICBpZiAoIW1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSAnaW5wdXQnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ2NoYW5nZScgJiYgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9ICdjaGFuZ2UnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudE5hbWUgJiYgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSAhPT0gZXZlbnROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZhbHNlID09PSBtb2RlbEJpbmRpbmcuZGVib3VuY2UpIHtcbiAgICAgICAgICAgIGlmIChtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgbW9kZWxCaW5kaW5nLmRlYm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmluYWxWYWx1ZSA9IGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQudmFsdWVTdG9yZSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnNldChtb2RlbEJpbmRpbmcubW9kZWxOYW1lLCBmaW5hbFZhbHVlLCBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyLCBtb2RlbEJpbmRpbmcuZGVib3VuY2UpO1xuICAgIH1cbiAgICBoYW5kbGVDb25uZWN0ZWRDb250cm9sbGVyRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hpbGRDb250cm9sbGVyID0gZXZlbnQuZGV0YWlsLmNvbnRyb2xsZXI7XG4gICAgICAgIGlmIChjaGlsZENvbnRyb2xsZXIuY29tcG9uZW50LmdldFBhcmVudCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmVzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoY2hpbGRDb250cm9sbGVyLmVsZW1lbnQpO1xuICAgICAgICBjb25zdCBtb2RlbEJpbmRpbmdzID0gbW9kZWxEaXJlY3RpdmVzLm1hcChnZXRNb2RlbEJpbmRpbmcpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5hZGRDaGlsZChjaGlsZENvbnRyb2xsZXIuY29tcG9uZW50LCBtb2RlbEJpbmRpbmdzKTtcbiAgICAgICAgY2hpbGRDb250cm9sbGVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbGl2ZTpkaXNjb25uZWN0JywgdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudCk7XG4gICAgfVxuICAgIGhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29udHJvbGxlciA9IGV2ZW50LmRldGFpbC5jb250cm9sbGVyO1xuICAgICAgICBjaGlsZENvbnRyb2xsZXIuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdsaXZlOmRpc2Nvbm5lY3QnLCB0aGlzLmhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50KTtcbiAgICAgICAgaWYgKGNoaWxkQ29udHJvbGxlci5jb21wb25lbnQuZ2V0UGFyZW50KCkgIT09IHRoaXMuY29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnQucmVtb3ZlQ2hpbGQoY2hpbGRDb250cm9sbGVyLmNvbXBvbmVudCk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgZGV0YWlsID0ge30sIGNhbkJ1YmJsZSA9IHRydWUsIGNhbmNlbGFibGUgPSBmYWxzZSkge1xuICAgICAgICBkZXRhaWwuY29udHJvbGxlciA9IHRoaXM7XG4gICAgICAgIGRldGFpbC5jb21wb25lbnQgPSB0aGlzLnByb3hpZWRDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWwsIHByZWZpeDogJ2xpdmUnLCBjYW5jZWxhYmxlLCBidWJibGVzOiBjYW5CdWJibGUgfSk7XG4gICAgfVxufVxuTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LnZhbHVlcyA9IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgdXJsOiBTdHJpbmcsXG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBjc3JmOiBTdHJpbmcsXG4gICAgbGlzdGVuZXJzOiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiBbXSB9LFxuICAgIGRlYm91bmNlOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMTUwIH0sXG4gICAgaWQ6IFN0cmluZyxcbiAgICBmaW5nZXJwcmludDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnIH0sXG59O1xuTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmNvbXBvbmVudFJlZ2lzdHJ5ID0gbmV3IENvbXBvbmVudFJlZ2lzdHJ5KCk7XG5cbmV4cG9ydCB7IENvbXBvbmVudCwgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGFzIGRlZmF1bHQsIGdldENvbXBvbmVudCB9O1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5wcm9wcyA9IChfYSA9IHRoaXMucHJvcHNWYWx1ZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmludHJvID0gKF9iID0gdGhpcy5pbnRyb1ZhbHVlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcpO1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSB3aW5kb3cucmVzb2x2ZVN2ZWx0ZUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudFZhbHVlKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveUlmRXhpc3RzKCk7XG4gICAgICAgIHRoaXMuYXBwID0gbmV3IENvbXBvbmVudCh7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgICAgICAgaW50cm86IHRoaXMuaW50cm8sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQucm9vdCA9IHRoaXMuYXBwO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50OiBDb21wb25lbnQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLl9kZXN0cm95SWZFeGlzdHMoKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd1bm1vdW50Jyk7XG4gICAgfVxuICAgIF9kZXN0cm95SWZFeGlzdHMoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQucm9vdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucm9vdC4kZGVzdHJveSgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZWxlbWVudC5yb290O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGRldGFpbCA9IE9iamVjdC5hc3NpZ24oeyBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLCBwcm9wczogdGhpcy5wcm9wcywgaW50cm86IHRoaXMuaW50cm8gfSwgcGF5bG9hZCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWwsIHByZWZpeDogJ3N2ZWx0ZScgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIGludHJvOiBCb29sZWFuLFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0IFN3dXAgZnJvbSAnc3d1cCc7XG5pbXBvcnQgU3d1cERlYnVnUGx1Z2luIGZyb20gJ0Bzd3VwL2RlYnVnLXBsdWdpbic7XG5pbXBvcnQgU3d1cEZvcm1zUGx1Z2luIGZyb20gJ0Bzd3VwL2Zvcm1zLXBsdWdpbic7XG5pbXBvcnQgU3d1cEZhZGVUaGVtZSBmcm9tICdAc3d1cC9mYWRlLXRoZW1lJztcbmltcG9ydCBTd3VwU2xpZGVUaGVtZSBmcm9tICdAc3d1cC9zbGlkZS10aGVtZSc7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IGRhdGFDb250YWluZXJzID0gdGhpcy5jb250YWluZXJzVmFsdWU7XG4gICAgICAgIGNvbnN0IG1haW5FbGVtZW50ID0gdGhpcy5tYWluRWxlbWVudFZhbHVlIHx8IGRhdGFDb250YWluZXJzWzBdIHx8ICcjc3d1cCc7XG4gICAgICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gW21haW5FbGVtZW50XS5jb25jYXQoZGF0YUNvbnRhaW5lcnMpO1xuICAgICAgICBjb25zdCBjb250YWluZXJzTGlzdCA9IGFsbEVsZW1lbnRzLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhbGxFbGVtZW50cy5pbmRleE9mKGl0ZW0pID09PSBpbmRleDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250YWluZXJzOiBjb250YWluZXJzTGlzdCxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAnc2xpZGUnID09PSB0aGlzLnRoZW1lVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgPyBuZXcgU3d1cFNsaWRlVGhlbWUoeyBtYWluRWxlbWVudDogbWFpbkVsZW1lbnQgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBuZXcgU3d1cEZhZGVUaGVtZSh7IG1haW5FbGVtZW50OiBtYWluRWxlbWVudCB9KSxcbiAgICAgICAgICAgICAgICBuZXcgU3d1cEZvcm1zUGx1Z2luKCksXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5oYXNNYWluRWxlbWVudFZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb25zLm1haW5FbGVtZW50ID0gdGhpcy5tYWluRWxlbWVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc0FuaW1hdGVIaXN0b3J5QnJvd3NpbmdWYWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5hbmltYXRlSGlzdG9yeUJyb3dzaW5nID0gdGhpcy5hbmltYXRlSGlzdG9yeUJyb3dzaW5nVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzQW5pbWF0aW9uU2VsZWN0b3JWYWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5hbmltYXRpb25TZWxlY3RvciA9IHRoaXMuYW5pbWF0aW9uU2VsZWN0b3JWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNDYWNoZVZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmNhY2hlID0gdGhpcy5jYWNoZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc0xpbmtTZWxlY3RvclZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmxpbmtTZWxlY3RvciA9IHRoaXMubGlua1NlbGVjdG9yVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGVidWdWYWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5wbHVnaW5zLnB1c2gobmV3IFN3dXBEZWJ1Z1BsdWdpbigpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3ByZS1jb25uZWN0JywgeyBvcHRpb25zIH0pO1xuICAgICAgICBjb25zdCBzd3VwID0gbmV3IFN3dXAob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcsIHsgc3d1cCwgb3B0aW9ucyB9KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ3N3dXAnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgYW5pbWF0ZUhpc3RvcnlCcm93c2luZzogQm9vbGVhbixcbiAgICBhbmltYXRpb25TZWxlY3RvcjogU3RyaW5nLFxuICAgIGNhY2hlOiBCb29sZWFuLFxuICAgIGNvbnRhaW5lcnM6IEFycmF5LFxuICAgIGxpbmtTZWxlY3RvcjogU3RyaW5nLFxuICAgIHRoZW1lOiBTdHJpbmcsXG4gICAgZGVidWc6IEJvb2xlYW4sXG4gICAgbWFpbkVsZW1lbnQ6IFN0cmluZyxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaXNEaXNwbGF5ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52aXNpYmxlSWNvbiA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cInRvZ2dsZS1wYXNzd29yZC1pY29uXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cbjxwYXRoIGQ9XCJNMTAgMTJhMiAyIDAgMTAwLTQgMiAyIDAgMDAwIDR6XCIgLz5cbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTS40NTggMTBDMS43MzIgNS45NDMgNS41MjIgMyAxMCAzczguMjY4IDIuOTQzIDkuNTQyIDdjLTEuMjc0IDQuMDU3LTUuMDY0IDctOS41NDIgN1MxLjczMiAxNC4wNTcuNDU4IDEwek0xNCAxMGE0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIC8+XG48L3N2Zz5gO1xuICAgICAgICB0aGlzLmhpZGRlbkljb24gPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJ0b2dnbGUtcGFzc3dvcmQtaWNvblwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0zLjcwNyAyLjI5M2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwxNCAxNGExIDEgMCAwMDEuNDE0LTEuNDE0bC0xLjQ3My0xLjQ3M0ExMC4wMTQgMTAuMDE0IDAgMDAxOS41NDIgMTBDMTguMjY4IDUuOTQzIDE0LjQ3OCAzIDEwIDNhOS45NTggOS45NTggMCAwMC00LjUxMiAxLjA3NGwtMS43OC0xLjc4MXptNC4yNjEgNC4yNmwxLjUxNCAxLjUxNWEyLjAwMyAyLjAwMyAwIDAxMi40NSAyLjQ1bDEuNTE0IDEuNTE0YTQgNCAwIDAwLTUuNDc4LTUuNDc4elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiAvPlxuPHBhdGggZD1cIk0xMi40NTQgMTYuNjk3TDkuNzUgMTMuOTkyYTQgNCAwIDAxLTMuNzQyLTMuNzQxTDIuMzM1IDYuNTc4QTkuOTggOS45OCAwIDAwLjQ1OCAxMGMxLjI3NCA0LjA1NyA1LjA2NSA3IDkuNTQyIDcgLjg0NyAwIDEuNjY5LS4xMDUgMi40NTQtLjMwM3pcIiAvPlxuPC9zdmc+YDtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZUljb25WYWx1ZSAhPT0gJ0RlZmF1bHQnKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGVJY29uID0gdGhpcy52aXNpYmxlSWNvblZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhpZGRlbkljb25WYWx1ZSAhPT0gJ0RlZmF1bHQnKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGRlbkljb24gPSB0aGlzLmhpZGRlbkljb25WYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLmNyZWF0ZUJ1dHRvbigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGJ1dHRvbik7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcsIHsgZWxlbWVudDogdGhpcy5lbGVtZW50LCBidXR0b246IGJ1dHRvbiB9KTtcbiAgICB9XG4gICAgY3JlYXRlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5idXR0b25DbGFzc2VzVmFsdWUpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IHRoaXMudmlzaWJsZUljb24gKyAnICcgKyB0aGlzLnZpc2libGVMYWJlbFZhbHVlO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cbiAgICB0b2dnbGUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5pc0Rpc3BsYXllZCA9ICF0aGlzLmlzRGlzcGxheWVkO1xuICAgICAgICBjb25zdCB0b2dnbGVCdXR0b25FbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgdG9nZ2xlQnV0dG9uRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmlzRGlzcGxheWVkXG4gICAgICAgICAgICA/IHRoaXMuaGlkZGVuSWNvbiArICcgJyArIHRoaXMuaGlkZGVuTGFiZWxWYWx1ZVxuICAgICAgICAgICAgOiB0aGlzLnZpc2libGVJY29uICsgJyAnICsgdGhpcy52aXNpYmxlTGFiZWxWYWx1ZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIHRoaXMuaXNEaXNwbGF5ZWQgPyAndGV4dCcgOiAncGFzc3dvcmQnKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuaXNEaXNwbGF5ZWQgPyAnc2hvdycgOiAnaGlkZScsIHsgZWxlbWVudDogdGhpcy5lbGVtZW50LCBidXR0b246IHRvZ2dsZUJ1dHRvbkVsZW1lbnQgfSk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICd0b2dnbGUtcGFzc3dvcmQnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgdmlzaWJsZUxhYmVsOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ1Nob3cnIH0sXG4gICAgdmlzaWJsZUljb246IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnRGVmYXVsdCcgfSxcbiAgICBoaWRkZW5MYWJlbDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdIaWRlJyB9LFxuICAgIGhpZGRlbkljb246IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnRGVmYXVsdCcgfSxcbiAgICBidXR0b25DbGFzc2VzOiBBcnJheSxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCAnQGhvdHdpcmVkL3R1cmJvJztcblxuY2xhc3MgdHVyYm9fY29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xufVxuXG5leHBvcnQgeyB0dXJib19jb250cm9sbGVyIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiYWNjIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlTmF2IiwidG9nZ2xlRHJvcENhdGVnb3JpZXMiLCJ0b2dnbGVEcm9wTWFycXVlcyIsInRvZ2dsZURyb3BHZW5yZSIsInRvZ2dsZURyb3BDb3VsZXVycyIsInRvZ2dsZUZpbHRyZU1vYmlsZSIsInRvZ2dsZUZyaWx0ZXJTZWxlY3Rpb24iLCJidXJnZ2VyIiwiY3JvaXgiLCJtZW51TW9iaWxlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlZE1lbnUiLCJhZGQiLCJyZW1vdmUiLCJtZW51U2VsZWN0aW9uIiwidG9nZ2xlRmlsdGVyU2VsZWN0aW9uIiwiYmNrb2ZmIiwib3BlblNpZGVCZW5vaXQiLCJzaWRlQmFyTmF2Iiwic3Ryb2tlQ29sb3JzIiwic2lkZUJhciIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsImltYWdlcyIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJkZWxldGVJbWFnZVByb2R1Y3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25maXJtIiwiZmV0Y2giLCJnZXRBdHRyaWJ1dGUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhc2V0IiwidG9rZW4iLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJwYXJlbnRFbGVtZW50IiwiYWxlcnQiLCJlcnJvciIsImRlZmF1bHRfMSIsImNsZWFyIiwicHJldmlld0NsZWFyQnV0dG9uVGFyZ2V0IiwiaW5wdXRUYXJnZXQiLCJldmVudCIsIm9uSW5wdXRDaGFuZ2UiLCJkaXNwYXRjaEV2ZW50IiwidmFsdWUiLCJzdHlsZSIsImRpc3BsYXkiLCJwbGFjZWhvbGRlclRhcmdldCIsInByZXZpZXdUYXJnZXQiLCJwcmV2aWV3SW1hZ2VUYXJnZXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwcmV2aWV3RmlsZW5hbWVUYXJnZXQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwidHlwZSIsImluZGV4T2YiLCJfcG9wdWxhdGVJbWFnZVByZXZpZXciLCJGaWxlUmVhZGVyIiwicmVhZGVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInBheWxvYWQiLCJkaXNwYXRjaCIsImRldGFpbCIsInByZWZpeCIsInRhcmdldHMiLCJkZWZhdWx0IiwicGFyc2VEaXJlY3RpdmVzIiwiY29udGVudCIsImRpcmVjdGl2ZXMiLCJjdXJyZW50QWN0aW9uTmFtZSIsImN1cnJlbnRBcmd1bWVudE5hbWUiLCJjdXJyZW50QXJndW1lbnRWYWx1ZSIsImN1cnJlbnRBcmd1bWVudHMiLCJjdXJyZW50TmFtZWRBcmd1bWVudHMiLCJjdXJyZW50TW9kaWZpZXJzIiwic3RhdGUiLCJnZXRMYXN0QWN0aW9uTmFtZSIsImxlbmd0aCIsIkVycm9yIiwiYWN0aW9uIiwicHVzaEluc3RydWN0aW9uIiwicHVzaCIsImFyZ3MiLCJuYW1lZCIsIm1vZGlmaWVycyIsImdldFN0cmluZyIsInB1c2hBcmd1bWVudCIsIm1peGVkQXJnVHlwZXNFcnJvciIsInRyaW0iLCJPYmplY3QiLCJrZXlzIiwicHVzaE1vZGlmaWVyIiwiaSIsImNoYXIiLCJjb21iaW5lU3BhY2VkQXJyYXkiLCJwYXJ0cyIsImZpbmFsUGFydHMiLCJmb3JFYWNoIiwicGFydCIsInNwbGl0Iiwibm9ybWFsaXplTW9kZWxOYW1lIiwibW9kZWwiLCJyZXBsYWNlIiwibWFwIiwicyIsImpvaW4iLCJnZXRWYWx1ZUZyb21FbGVtZW50IiwidmFsdWVTdG9yZSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJtb2RlbE5hbWVEYXRhIiwiZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudCIsIm1vZGVsVmFsdWUiLCJnZXQiLCJBcnJheSIsImlzQXJyYXkiLCJnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUiLCJoYXNBdHRyaWJ1dGUiLCJjaGVja2VkIiwiaW5wdXRWYWx1ZSIsIkhUTUxTZWxlY3RFbGVtZW50IiwibXVsdGlwbGUiLCJmcm9tIiwic2VsZWN0ZWRPcHRpb25zIiwiZWwiLCJzZXRWYWx1ZU9uRWxlbWVudCIsInZhbHVlRm91bmQiLCJ2YWwiLCJhcnJheVdyYXBwZWRWYWx1ZSIsImNvbmNhdCIsIm9wdGlvbnMiLCJvcHRpb24iLCJzZWxlY3RlZCIsImluY2x1ZGVzIiwidW5kZWZpbmVkIiwiZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMiLCJkaXJlY3RpdmUiLCJ0aHJvd09uTWlzc2luZyIsImRhdGFNb2RlbERpcmVjdGl2ZXMiLCJmb3JtRWxlbWVudCIsImNsb3Nlc3QiLCJnZXRFbGVtZW50QXNUYWdUZXh0IiwiZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQiLCJjb21wb25lbnQiLCJjb250YWlucyIsImZvdW5kQ2hpbGRDb21wb25lbnQiLCJnZXRDaGlsZHJlbiIsImNoaWxkQ29tcG9uZW50IiwiY2xvbmVIVE1MRWxlbWVudCIsIm5ld0VsZW1lbnQiLCJjbG9uZU5vZGUiLCJIVE1MRWxlbWVudCIsImh0bWxUb0VsZW1lbnQiLCJodG1sIiwidGVtcGxhdGUiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hpbGRFbGVtZW50Q291bnQiLCJjaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwib3V0ZXJIVE1MIiwic2xpY2UiLCJjdXJyZW50VmFsdWVzIiwiZmluYWxWYWx1ZXMiLCJpbmRleCIsInNwbGljZSIsImdldERlZXBEYXRhIiwicHJvcGVydHlQYXRoIiwicGFyc2VEZWVwRGF0YSIsImN1cnJlbnRMZXZlbERhdGEiLCJmaW5hbEtleSIsImZpbmFsRGF0YSIsInBhcnNlIiwiVmFsdWVTdG9yZSIsInByb3BzIiwiZGlydHlQcm9wcyIsInBlbmRpbmdQcm9wcyIsInVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQiLCJub3JtYWxpemVkTmFtZSIsImN1cnJlbnRWYWx1ZSIsImFzc2lnbiIsImNoYW5nZWQiLCJlbnRyaWVzIiwia2V5IiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsIm1vcnBoQXR0cnMiLCJmcm9tTm9kZSIsInRvTm9kZSIsInRvTm9kZUF0dHJzIiwiYXR0cmlidXRlcyIsImF0dHIiLCJhdHRyTmFtZSIsImF0dHJOYW1lc3BhY2VVUkkiLCJhdHRyVmFsdWUiLCJmcm9tVmFsdWUiLCJub2RlVHlwZSIsIm5hbWVzcGFjZVVSSSIsImxvY2FsTmFtZSIsImdldEF0dHJpYnV0ZU5TIiwic2V0QXR0cmlidXRlTlMiLCJzZXRBdHRyaWJ1dGUiLCJmcm9tTm9kZUF0dHJzIiwiZCIsImhhc0F0dHJpYnV0ZU5TIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyYW5nZSIsIk5TX1hIVE1MIiwiZG9jIiwiSEFTX1RFTVBMQVRFX1NVUFBPUlQiLCJIQVNfUkFOR0VfU1VQUE9SVCIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUiLCJzdHIiLCJjaGlsZE5vZGVzIiwiY3JlYXRlRnJhZ21lbnRGcm9tUmFuZ2UiLCJzZWxlY3ROb2RlIiwiZnJhZ21lbnQiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJjcmVhdGVGcmFnbWVudEZyb21XcmFwIiwidG9FbGVtZW50IiwiY29tcGFyZU5vZGVOYW1lcyIsImZyb21FbCIsInRvRWwiLCJmcm9tTm9kZU5hbWUiLCJub2RlTmFtZSIsInRvTm9kZU5hbWUiLCJmcm9tQ29kZVN0YXJ0IiwidG9Db2RlU3RhcnQiLCJjaGFyQ29kZUF0IiwidG9VcHBlckNhc2UiLCJjcmVhdGVFbGVtZW50TlMiLCJtb3ZlQ2hpbGRyZW4iLCJjdXJDaGlsZCIsImZpcnN0Q2hpbGQiLCJuZXh0Q2hpbGQiLCJuZXh0U2libGluZyIsImFwcGVuZENoaWxkIiwic3luY0Jvb2xlYW5BdHRyUHJvcCIsInNwZWNpYWxFbEhhbmRsZXJzIiwiT1BUSU9OIiwicGFyZW50Tm9kZSIsInBhcmVudE5hbWUiLCJzZWxlY3RlZEluZGV4IiwiSU5QVVQiLCJURVhUQVJFQSIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJub2RlVmFsdWUiLCJwbGFjZWhvbGRlciIsIlNFTEVDVCIsIm9wdGdyb3VwIiwiRUxFTUVOVF9OT0RFIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSQxIiwiVEVYVF9OT0RFIiwiQ09NTUVOVF9OT0RFIiwibm9vcCIsImRlZmF1bHRHZXROb2RlS2V5Iiwibm9kZSIsImlkIiwibW9ycGhkb21GYWN0b3J5IiwibW9ycGhkb20iLCJ0b05vZGVIdG1sIiwiZ2V0Tm9kZUtleSIsIm9uQmVmb3JlTm9kZUFkZGVkIiwib25Ob2RlQWRkZWQiLCJvbkJlZm9yZUVsVXBkYXRlZCIsIm9uRWxVcGRhdGVkIiwib25CZWZvcmVOb2RlRGlzY2FyZGVkIiwib25Ob2RlRGlzY2FyZGVkIiwib25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZCIsInNraXBGcm9tQ2hpbGRyZW4iLCJhZGRDaGlsZCIsInBhcmVudCIsImNoaWxkcmVuT25seSIsImZyb21Ob2Rlc0xvb2t1cCIsImNyZWF0ZSIsImtleWVkUmVtb3ZhbExpc3QiLCJhZGRLZXllZFJlbW92YWwiLCJ3YWxrRGlzY2FyZGVkQ2hpbGROb2RlcyIsInNraXBLZXllZE5vZGVzIiwicmVtb3ZlTm9kZSIsInJlbW92ZUNoaWxkIiwiaW5kZXhUcmVlIiwiaGFuZGxlTm9kZUFkZGVkIiwidW5tYXRjaGVkRnJvbUVsIiwicmVwbGFjZUNoaWxkIiwibW9ycGhFbCIsImNsZWFudXBGcm9tRWwiLCJjdXJGcm9tTm9kZUNoaWxkIiwiY3VyRnJvbU5vZGVLZXkiLCJmcm9tTmV4dFNpYmxpbmciLCJ0b0VsS2V5IiwibW9ycGhDaGlsZHJlbiIsInNraXBGcm9tIiwiY3VyVG9Ob2RlQ2hpbGQiLCJjdXJUb05vZGVLZXkiLCJ0b05leHRTaWJsaW5nIiwibWF0Y2hpbmdGcm9tRWwiLCJvdXRlciIsImlzU2FtZU5vZGUiLCJjdXJGcm9tTm9kZVR5cGUiLCJpc0NvbXBhdGlibGUiLCJpbnNlcnRCZWZvcmUiLCJvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCIsImFjdHVhbGl6ZSIsIm93bmVyRG9jdW1lbnQiLCJzcGVjaWFsRWxIYW5kbGVyIiwibW9ycGhlZE5vZGUiLCJtb3JwaGVkTm9kZVR5cGUiLCJ0b05vZGVUeXBlIiwibGVuIiwiZWxUb1JlbW92ZSIsIm5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uIiwiaXNGaWxlSW5wdXQiLCJjaGlsZHJlbiIsImV4ZWN1dGVNb3JwaGRvbSIsInJvb3RGcm9tRWxlbWVudCIsInJvb3RUb0VsZW1lbnQiLCJtb2RpZmllZEZpZWxkRWxlbWVudHMiLCJnZXRFbGVtZW50VmFsdWUiLCJjaGlsZENvbXBvbmVudHMiLCJmaW5kQ2hpbGRDb21wb25lbnQiLCJnZXRLZXlGcm9tRWxlbWVudCIsImV4dGVybmFsTXV0YXRpb25UcmFja2VyIiwiY2hpbGRDb21wb25lbnRNYXAiLCJNYXAiLCJzZXQiLCJ3YXNFbGVtZW50QWRkZWQiLCJNYXRoIiwicmFuZG9tIiwiX194Iiwid2luZG93IiwiQWxwaW5lIiwibW9ycGgiLCJoYXMiLCJ1cGRhdGVGcm9tTmV3RWxlbWVudEZyb21QYXJlbnRSZW5kZXIiLCJlbGVtZW50Q2hhbmdlcyIsImdldENoYW5nZWRFbGVtZW50IiwiYXBwbHlUb0VsZW1lbnQiLCJpc0VxdWFsTm9kZSIsIm5vcm1hbGl6ZWRGcm9tRWwiLCJub3JtYWxpemVkVG9FbCIsIlVuc3luY2VkSW5wdXRzVHJhY2tlciIsIm1vZGVsRWxlbWVudFJlc29sdmVyIiwiZWxlbWVudEV2ZW50TGlzdGVuZXJzIiwiY2FsbGJhY2siLCJoYW5kbGVJbnB1dEV2ZW50IiwidW5zeW5jZWRJbnB1dHMiLCJVbnN5bmNlZElucHV0Q29udGFpbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1vZGVsTmFtZSIsIm1hcmtNb2RlbEFzU3luY2VkIiwidXBkYXRlTW9kZWxGcm9tRWxlbWVudCIsImdldE1vZGVsTmFtZSIsImFsbFVuc3luY2VkSW5wdXRzIiwiZ2V0VW5zeW5jZWRNb2RlbE5hbWVzIiwicmVzZXRVbnN5bmNlZEZpZWxkcyIsInVuc3luY2VkTm9uTW9kZWxGaWVsZHMiLCJ1bnN5bmNlZE1vZGVsTmFtZXMiLCJ1bnN5bmNlZE1vZGVsRmllbGRzIiwidmFsdWVzIiwiSG9va01hbmFnZXIiLCJob29rcyIsImhvb2tOYW1lIiwiQmFja2VuZFJlc3BvbnNlIiwidGV4dCIsIkNoYW5naW5nSXRlbXNUcmFja2VyIiwiY2hhbmdlZEl0ZW1zIiwicmVtb3ZlZEl0ZW1zIiwiaXRlbU5hbWUiLCJwcmV2aW91c1ZhbHVlIiwicmVtb3ZlZFJlY29yZCIsIm9yaWdpbmFsIiwib3JpZ2luYWxSZWNvcmQiLCJ0cnVlT3JpZ2luYWxWYWx1ZSIsInNpemUiLCJFbGVtZW50Q2hhbmdlcyIsImFkZGVkQ2xhc3NlcyIsInJlbW92ZWRDbGFzc2VzIiwic3R5bGVDaGFuZ2VzIiwiYXR0cmlidXRlQ2hhbmdlcyIsImNsYXNzTmFtZSIsImZpbHRlciIsInN0eWxlTmFtZSIsIm9yaWdpbmFsVmFsdWUiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImF0dHJpYnV0ZU5hbWUiLCJnZXRDaGFuZ2VkSXRlbXMiLCJnZXRSZW1vdmVkSXRlbXMiLCJjaGFuZ2UiLCJzZXRQcm9wZXJ0eSIsInJlbW92ZVByb3BlcnR5IiwiaXNFbXB0eSIsIkV4dGVybmFsTXV0YXRpb25UcmFja2VyIiwic2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayIsImNoYW5nZWRFbGVtZW50cyIsIldlYWtNYXAiLCJjaGFuZ2VkRWxlbWVudHNDb3VudCIsImFkZGVkRWxlbWVudHMiLCJyZW1vdmVkRWxlbWVudHMiLCJpc1N0YXJ0ZWQiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9uTXV0YXRpb25zIiwiYmluZCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJkaXNjb25uZWN0IiwidGFrZVJlY29yZHMiLCJtdXRhdGlvbnMiLCJoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zIiwibXV0YXRpb24iLCJpc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24iLCJpc0NoYW5nZUluQWRkZWRFbGVtZW50IiwiYWRkZWRFbGVtZW50IiwiaGFuZGxlQ2hpbGRMaXN0TXV0YXRpb24iLCJoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbiIsImFkZGVkTm9kZXMiLCJFbGVtZW50IiwicmVtb3ZlZE5vZGVzIiwiY2hhbmdlZEVsZW1lbnQiLCJoYW5kbGVDbGFzc0F0dHJpYnV0ZU11dGF0aW9uIiwiaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbiIsImhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbiIsInByZXZpb3VzVmFsdWVzIiwidHJpbW1lZFZhbHVlIiwibmV3VmFsdWVzIiwiY2FsbCIsImFkZGVkVmFsdWVzIiwicmVtb3ZlZFZhbHVlcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJwcmV2aW91c1N0eWxlcyIsImV4dHJhY3RTdHlsZXMiLCJuZXdTdHlsZXMiLCJhZGRlZE9yQ2hhbmdlZFN0eWxlcyIsInJlbW92ZWRTdHlsZXMiLCJhZGRTdHlsZSIsInJlbW92ZVN0eWxlIiwiYWRkQXR0cmlidXRlIiwic3R5bGVzIiwic3R5bGVPYmplY3QiLCJwcm9wZXJ0eSIsInRhZ05hbWUiLCJDaGlsZENvbXBvbmVudFdyYXBwZXIiLCJtb2RlbEJpbmRpbmdzIiwiQ29tcG9uZW50IiwibGlzdGVuZXJzIiwiY29tcG9uZW50RmluZGVyIiwiZmluZ2VycHJpbnQiLCJiYWNrZW5kIiwiZWxlbWVudERyaXZlciIsImRlZmF1bHREZWJvdW5jZSIsImJhY2tlbmRSZXF1ZXN0IiwicGVuZGluZ0FjdGlvbnMiLCJwZW5kaW5nRmlsZXMiLCJpc1JlcXVlc3RQZW5kaW5nIiwicmVxdWVzdERlYm91bmNlVGltZW91dCIsImxpc3RlbmVyIiwiX2EiLCJ1bnN5bmNlZElucHV0c1RyYWNrZXIiLCJyZXNldFByb21pc2UiLCJzdGFydCIsIm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSIsInBsdWdpbiIsImF0dGFjaFRvQ29tcG9uZW50IiwidHJpZ2dlckhvb2siLCJhY3RpdmF0ZSIsImNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCIsImRlYWN0aXZhdGUiLCJzdG9wIiwicmVnaXN0ZXIiLCJ1bnJlZ2lzdGVyIiwicmVSZW5kZXIiLCJkZWJvdW5jZSIsInByb21pc2UiLCJuZXh0UmVxdWVzdFByb21pc2UiLCJpc0NoYW5nZWQiLCJkZWJvdW5jZWRTdGFydFJlcXVlc3QiLCJpbnB1dCIsInRyeVN0YXJ0aW5nUmVxdWVzdCIsImdldFVuc3luY2VkTW9kZWxzIiwib24iLCJvZmYiLCJvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQiLCJwZXJmb3JtRW1pdCIsImRvRW1pdCIsImVtaXRVcCIsIm1hdGNoaW5nTmFtZSIsImNvbXBvbmVudHMiLCJhY3Rpb25zIiwiZ2V0Q29tcG9uZW50UHJvcHMiLCJzdG9yZU5ld1Byb3BzRnJvbVBhcmVudCIsImxpdmVGaW5nZXJwcmludFZhbHVlIiwicmVuZGVyIiwiY2hpbGRXcmFwcGVyIiwibW9kZWxCaW5kaW5nIiwiY2hpbGRNb2RlbE5hbWUiLCJpbm5lck1vZGVsTmFtZSIsInNob3VsZFJlbmRlciIsIlR1cmJvIiwicGVyZm9ybVJlcXVlc3QiLCJ0aGlzUHJvbWlzZVJlc29sdmUiLCJuZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlIiwiZmlsZXNUb1NlbmQiLCJtYWtlUmVxdWVzdCIsImdldE9yaWdpbmFsUHJvcHMiLCJnZXREaXJ0eVByb3BzIiwiZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMiLCJnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50IiwiZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nIiwiYmFja2VuZFJlc3BvbnNlIiwiZ2V0Qm9keSIsImNvbnRyb2xzIiwiZGlzcGxheUVycm9yIiwicHVzaFBlbmRpbmdQcm9wc0JhY2tUb0RpcnR5IiwicmVuZGVyRXJyb3IiLCJwcm9jZXNzUmVyZW5kZXIiLCJpc1R1cmJvRW5hYmxlZCIsInZpc2l0IiwibG9jYXRpb24iLCJocmVmIiwibW9kaWZpZWRNb2RlbFZhbHVlcyIsIm1hdGNoZXMiLCJuZXdQcm9wcyIsInJlaW5pdGlhbGl6ZUFsbFByb3BzIiwiZXZlbnRzVG9FbWl0IiwiZ2V0RXZlbnRzVG9FbWl0IiwiYnJvd3NlckV2ZW50c1RvRGlzcGF0Y2giLCJnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCIsImhhbmRsZVBlbmRpbmdDaGFuZ2VzIiwiZ2V0VW5zeW5jZWRJbnB1dHMiLCJmaW5kQ2hpbGRDb21wb25lbnRFbGVtZW50IiwiY29tcG9uZW50TmFtZSIsImVtaXRTZWxmIiwiZW1pdCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJjYWxjdWxhdGVEZWJvdW5jZSIsIm1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJmbGV4RGlyZWN0aW9uIiwiaWZyYW1lIiwiYm9yZGVyUmFkaXVzIiwiZmxleEdyb3ciLCJwcmVwZW5kIiwib3ZlcmZsb3ciLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJjbG9zZU1vZGFsIiwiZm9jdXMiLCJmaW5nZXJwcmludHMiLCJ0YWciLCJ0b0xvd2VyQ2FzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicHJveGlmeUNvbXBvbmVudCIsIlByb3h5IiwicHJvcCIsImNhbGxhYmxlIiwiYXBwbHkiLCJSZWZsZWN0IiwiZ2V0RGF0YSIsIkJhY2tlbmRSZXF1ZXN0IiwidXBkYXRlTW9kZWxzIiwiaXNSZXNvbHZlZCIsInVwZGF0ZWRNb2RlbHMiLCJ0YXJnZXRlZEFjdGlvbnMiLCJ0YXJnZXRlZE1vZGVscyIsIlJlcXVlc3RCdWlsZGVyIiwidXJsIiwiY3NyZlRva2VuIiwidXBkYXRlZCIsInNwbGl0VXJsIiwicXVlcnlTdHJpbmciLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaE9wdGlvbnMiLCJBY2NlcHQiLCJ0b3RhbEZpbGVzIiwicmVkdWNlIiwidG90YWwiLCJjdXJyZW50IiwiaGFzRmluZ2VycHJpbnRzIiwid2lsbERhdGFGaXRJblVybCIsInJlcXVlc3REYXRhIiwicHJvcHNGcm9tUGFyZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBhcmFtc1N0cmluZyIsInRvU3RyaW5nIiwicHJvcHNKc29uIiwidXBkYXRlZEpzb24iLCJjaGlsZHJlbkpzb24iLCJwcm9wc0Zyb21QYXJlbnRKc29uIiwidXJsRW5jb2RlZEpzb25EYXRhIiwiQmFja2VuZCIsInJlcXVlc3RCdWlsZGVyIiwiYnVpbGRSZXF1ZXN0IiwiYmFja2VuZEFjdGlvbiIsIlN0YW5kYXJkRWxlbWVudERyaXZlciIsIm1vZGVsRGlyZWN0aXZlIiwicm9vdEVsZW1lbnQiLCJsaXZlUHJvcHNWYWx1ZSIsImxpdmVJZCIsImV2ZW50c0pzb24iLCJsaXZlRW1pdCIsImxpdmVCcm93c2VyRGlzcGF0Y2giLCJMb2FkaW5nUGx1Z2luIiwicmVxdWVzdCIsInN0YXJ0TG9hZGluZyIsImZpbmlzaExvYWRpbmciLCJ0YXJnZXRFbGVtZW50IiwiaGFuZGxlTG9hZGluZ1RvZ2dsZSIsImlzTG9hZGluZyIsImFkZEF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGVzIiwiZ2V0TG9hZGluZ0RpcmVjdGl2ZXMiLCJoYW5kbGVMb2FkaW5nRGlyZWN0aXZlIiwiZmluYWxBY3Rpb24iLCJwYXJzZUxvYWRpbmdBY3Rpb24iLCJkZWxheSIsInZhbGlkTW9kaWZpZXJzIiwibW9kaWZpZXIiLCJwYXJzZUludCIsImNvbnRhaW5zT25lT2ZBY3Rpb25zIiwiYXJlQW55TW9kZWxzVXBkYXRlZCIsImxvYWRpbmdEaXJlY3RpdmUiLCJzaG93RWxlbWVudCIsImhpZGVFbGVtZW50IiwibG9hZGluZ0RpcmVjdGl2ZXMiLCJTVkdFbGVtZW50IiwibG9hZGluZyIsImNsYXNzZXMiLCJhdHRyaWJ1dGUiLCJWYWxpZGF0ZWRGaWVsZHNQbHVnaW4iLCJoYW5kbGVNb2RlbFNldCIsInZhbGlkYXRlZEZpZWxkcyIsIlBhZ2VVbmxvYWRpbmdQbHVnaW4iLCJpc0Nvbm5lY3RlZCIsIlBvbGxpbmdEaXJlY3RvciIsImlzUG9sbGluZ0FjdGl2ZSIsInBvbGxpbmdJbnRlcnZhbHMiLCJhY3Rpb25OYW1lIiwiZHVyYXRpb24iLCJwb2xscyIsImluaXRpYXRlUG9sbCIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInN0b3BBbGxQb2xsaW5nIiwic3RhcnRBbGxQb2xsaW5nIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsIlBvbGxpbmdQbHVnaW4iLCJwb2xsaW5nRGlyZWN0b3IiLCJpbml0aWFsaXplUG9sbGluZyIsImFkZFBvbGwiLCJjbGVhclBvbGxpbmciLCJwb2xsIiwicmF3UG9sbENvbmZpZyIsIndhcm4iLCJTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbiIsInN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzIiwiSFRNTEZvcm1FbGVtZW50IiwiZ2V0TW9kZWxCaW5kaW5nIiwidGFyZ2V0RXZlbnROYW1lIiwiQ29tcG9uZW50UmVnaXN0cnkiLCJjb21wb25lbnRNYXBCeUVsZW1lbnQiLCJjb21wb25lbnRNYXBCeUNvbXBvbmVudCIsInJlamVjdCIsImNvdW50IiwibWF4Q291bnQiLCJjdXJyZW50Q29tcG9uZW50Iiwib25seVBhcmVudHMiLCJvbmx5TWF0Y2hOYW1lIiwiZ2V0Q29tcG9uZW50IiwiTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IiwiY29tcG9uZW50UmVnaXN0cnkiLCJhcmd1bWVudHMiLCJwZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCIsImhhbmRsZUNoYW5nZUV2ZW50IiwiaGFuZGxlQ29ubmVjdGVkQ29udHJvbGxlckV2ZW50IiwiaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQiLCJuYW1lVmFsdWUiLCJwcm9wc1ZhbHVlIiwibGlzdGVuZXJzVmFsdWUiLCJmaW5kQ29tcG9uZW50cyIsImZpbmdlcnByaW50VmFsdWUiLCJ1cmxWYWx1ZSIsImNzcmZWYWx1ZSIsInByb3hpZWRDb21wb25lbnQiLCJfX2NvbXBvbmVudCIsImhhc0RlYm91bmNlVmFsdWUiLCJkZWJvdW5jZVZhbHVlIiwicGx1Z2lucyIsImFkZFBsdWdpbiIsInJlZ2lzdGVyQ29tcG9uZW50IiwiY29ubmVjdCIsInVucmVnaXN0ZXJDb21wb25lbnQiLCJjdXJyZW50VGFyZ2V0IiwidXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50IiwicmF3QWN0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2V0RW1pdERpcmVjdGl2ZXMiLCJuYW1lTWF0Y2giLCJldmVudEluZm8iLCJlbWl0cyIsImV2ZW50TmFtZSIsImZpbmFsVmFsdWUiLCJjaGlsZENvbnRyb2xsZXIiLCJjb250cm9sbGVyIiwiZ2V0UGFyZW50IiwibW9kZWxEaXJlY3RpdmVzIiwiY2FuQnViYmxlIiwiY2FuY2VsYWJsZSIsIlN0cmluZyIsImNzcmYiLCJOdW1iZXIiLCJfYiIsImludHJvIiwiaW50cm9WYWx1ZSIsInJlc29sdmVTdmVsdGVDb21wb25lbnQiLCJjb21wb25lbnRWYWx1ZSIsIl9kZXN0cm95SWZFeGlzdHMiLCJyb290IiwiJGRlc3Ryb3kiLCJCb29sZWFuIiwiU3d1cCIsIlN3dXBEZWJ1Z1BsdWdpbiIsIlN3dXBGb3Jtc1BsdWdpbiIsIlN3dXBGYWRlVGhlbWUiLCJTd3VwU2xpZGVUaGVtZSIsImRhdGFDb250YWluZXJzIiwiY29udGFpbmVyc1ZhbHVlIiwibWFpbkVsZW1lbnQiLCJtYWluRWxlbWVudFZhbHVlIiwiYWxsRWxlbWVudHMiLCJjb250YWluZXJzTGlzdCIsIml0ZW0iLCJjb250YWluZXJzIiwidGhlbWVWYWx1ZSIsImhhc01haW5FbGVtZW50VmFsdWUiLCJoYXNBbmltYXRlSGlzdG9yeUJyb3dzaW5nVmFsdWUiLCJhbmltYXRlSGlzdG9yeUJyb3dzaW5nIiwiYW5pbWF0ZUhpc3RvcnlCcm93c2luZ1ZhbHVlIiwiaGFzQW5pbWF0aW9uU2VsZWN0b3JWYWx1ZSIsImFuaW1hdGlvblNlbGVjdG9yIiwiYW5pbWF0aW9uU2VsZWN0b3JWYWx1ZSIsImhhc0NhY2hlVmFsdWUiLCJjYWNoZSIsImNhY2hlVmFsdWUiLCJoYXNMaW5rU2VsZWN0b3JWYWx1ZSIsImxpbmtTZWxlY3RvciIsImxpbmtTZWxlY3RvclZhbHVlIiwiZGVidWdWYWx1ZSIsInN3dXAiLCJ0aGVtZSIsImRlYnVnIiwiaXNEaXNwbGF5ZWQiLCJ2aXNpYmxlSWNvbiIsImhpZGRlbkljb24iLCJ2aXNpYmxlSWNvblZhbHVlIiwiaGlkZGVuSWNvblZhbHVlIiwiYnV0dG9uIiwiY3JlYXRlQnV0dG9uIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiYnV0dG9uQ2xhc3Nlc1ZhbHVlIiwidmlzaWJsZUxhYmVsVmFsdWUiLCJ0b2dnbGVCdXR0b25FbGVtZW50IiwiaGlkZGVuTGFiZWxWYWx1ZSIsInZpc2libGVMYWJlbCIsImhpZGRlbkxhYmVsIiwiYnV0dG9uQ2xhc3NlcyIsInR1cmJvX2NvbnRyb2xsZXIiXSwic291cmNlUm9vdCI6IiJ9