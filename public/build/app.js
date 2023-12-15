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
/* harmony import */ var _symfony_ux_live_component_dist_live_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live.min.css */ "./vendor/symfony/ux-live-component/assets/dist/live.min.css");
/* harmony import */ var _symfony_ux_toggle_password_dist_style_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-toggle-password/dist/style.min.css */ "./vendor/symfony/ux-toggle-password/assets/dist/style.min.css");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-dropzone--dropzone': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-dropzone/dist/controller.js */ "./vendor/symfony/ux-dropzone/assets/dist/controller.js")),
  'live': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-live-component/dist/live_controller.js */ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js")),
  'symfony--ux-svelte--svelte': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-svelte/dist/render_controller.js */ "./vendor/symfony/ux-svelte/assets/dist/render_controller.js")),
  'symfony--ux-swup--swup': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-swup/dist/controller.js */ "./vendor/symfony/ux-swup/assets/dist/controller.js")),
  'symfony--ux-toggle-password--toggle-password': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-toggle-password/dist/controller.js */ "./vendor/symfony/ux-toggle-password/assets/dist/controller.js")),
  'symfony--ux-turbo--turbo-core': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-turbo/dist/turbo_controller.js */ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js")),
  'symfony--ux-turbo--mercure-turbo-stream': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-turbo/dist/turbo_stream_controller.js */ "./vendor/symfony/ux-turbo/assets/dist/turbo_stream_controller.js")),
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
:*/
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
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _assets_styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/app.css */ "./assets/styles/app.css");
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
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_32__);
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
        } else if (Object(modelValue) === modelValue) {
          return getMultipleCheckboxValue(element, Object.values(modelValue));
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
        if (fromEl.nodeName.toUpperCase() !== 'OPTION' && fromEl.isEqualNode(toEl)) {
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
      if (!this.valueStore.has(modelName)) {
        throw new Error("Invalid model name \"".concat(model, "\"."));
      }
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
/* harmony import */ var swup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! swup */ "./node_modules/swup/dist/Swup.modern.js");
/* harmony import */ var _swup_debug_plugin__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @swup/debug-plugin */ "./node_modules/@swup/debug-plugin/dist/index.modern.js");
/* harmony import */ var _swup_forms_plugin__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @swup/forms-plugin */ "./node_modules/@swup/forms-plugin/dist/index.modern.js");
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

/***/ "./vendor/symfony/ux-turbo/assets/dist/turbo_stream_controller.js":
/*!************************************************************************!*\
  !*** ./vendor/symfony/ux-turbo/assets/dist/turbo_stream_controller.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
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
    key: "initialize",
    value: function initialize() {
      var errorMessages = [];
      if (!this.hasHubValue) errorMessages.push('A "hub" value pointing to the Mercure hub must be provided.');
      if (!this.hasTopicValue) errorMessages.push('A "topic" value must be provided.');
      if (errorMessages.length) throw new Error(errorMessages.join(' '));
      var u = new URL(this.hubValue);
      u.searchParams.append('topic', this.topicValue);
      this.url = u.toString();
    }
  }, {
    key: "connect",
    value: function connect() {
      if (this.url) {
        this.es = new EventSource(this.url);
        (0,_hotwired_turbo__WEBPACK_IMPORTED_MODULE_23__.connectStreamSource)(this.es);
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.es) {
        this.es.close();
        (0,_hotwired_turbo__WEBPACK_IMPORTED_MODULE_23__.disconnectStreamSource)(this.es);
      }
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_22__.Controller);
default_1.values = {
  topic: String,
  hub: String
};


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_swup_fade-theme_lib-a36550"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNmcU8sd0VBQXNCLENBQUMsSUFBSSxDQUFDUyxFQUFFLENBQUM7TUFDbkM7SUFDSjtFQUFDO0VBQUE7QUFBQSxFQXhCbUIxekIsMkRBQVU7QUEwQmxDMkQsU0FBUyxDQUFDa0YsTUFBTSxHQUFHO0VBQ2YrcUIsS0FBSyxFQUFFdkUsTUFBTTtFQUNid0UsR0FBRyxFQUFFeEU7QUFDVCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDaENEOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hY2MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmNrb2ZmLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1kcm9wem9uZS9hc3NldHMvZGlzdC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Fzc2V0cy9kaXN0L2xpdmVfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1zdmVsdGUvYXNzZXRzL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtc3d1cC9hc3NldHMvZGlzdC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXRvZ2dsZS1wYXNzd29yZC9hc3NldHMvZGlzdC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXR1cmJvL2Fzc2V0cy9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdHVyYm8vYXNzZXRzL2Rpc3QvdHVyYm9fc3RyZWFtX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZS5taW4uY3NzPzk2YzAiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdG9nZ2xlLXBhc3N3b3JkL2Fzc2V0cy9kaXN0L3N0eWxlLm1pbi5jc3M/MzYwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJpbXBvcnQgJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Rpc3QvbGl2ZS5taW4uY3NzJztcbmltcG9ydCAnQHN5bWZvbnkvdXgtdG9nZ2xlLXBhc3N3b3JkL2Rpc3Qvc3R5bGUubWluLmNzcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1kcm9wem9uZS0tZHJvcHpvbmUnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtZHJvcHpvbmUvZGlzdC9jb250cm9sbGVyLmpzJyksXG4gICdsaXZlJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzJyksXG4gICdzeW1mb255LS11eC1zdmVsdGUtLXN2ZWx0ZSc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1zdmVsdGUvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcycpLFxuICAnc3ltZm9ueS0tdXgtc3d1cC0tc3d1cCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1zd3VwL2Rpc3QvY29udHJvbGxlci5qcycpLFxuICAnc3ltZm9ueS0tdXgtdG9nZ2xlLXBhc3N3b3JkLS10b2dnbGUtcGFzc3dvcmQnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtdG9nZ2xlLXBhc3N3b3JkL2Rpc3QvY29udHJvbGxlci5qcycpLFxuICAnc3ltZm9ueS0tdXgtdHVyYm8tLXR1cmJvLWNvcmUnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtdHVyYm8vZGlzdC90dXJib19jb250cm9sbGVyLmpzJyksXG4gICdzeW1mb255LS11eC10dXJiby0tbWVyY3VyZS10dXJiby1zdHJlYW0nOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtdHVyYm8vZGlzdC90dXJib19zdHJlYW1fY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG46Ki9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4gIiwiaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuXG5jb25zdCBhY2MgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpc2F0aW9uIHBhZ2UgYWNjdWVpbFwiKTtcblxuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnRuXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjYy50b2dnbGVOYXYpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duQ2F0ZXJnb3JpZXNcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjLnRvZ2dsZURyb3BDYXRlZ29yaWVzKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bk1hcnF1ZXNcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjLnRvZ2dsZURyb3BNYXJxdWVzKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25HZW5yZVwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2MudG9nZ2xlRHJvcEdlbnJlKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkNvdWxldXJzXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjYy50b2dnbGVEcm9wQ291bGV1cnMpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2ZpbHRyZU1vYmlsZVwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2MudG9nZ2xlRmlsdHJlTW9iaWxlKTtcblxuICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2ZpbHRlclNlbGVjdGlvblwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgYWNjLnRvZ2dsZUZyaWx0ZXJTZWxlY3Rpb25cbiAgICAgICk7XG5cbiAgICBcbiAgfSxcblxuICB0b2dnbGVOYXY6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZcOpY3Vww6hyYXRpb24gZGVzIHN2ZydzJ1xuICAgIGNvbnN0IGJ1cmdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1cmdlclN2Z1wiKTtcbiAgICBjb25zdCBjcm9peCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JvaXhTdmdcIik7XG4gICAgY29uc3QgbWVudU1vYmlsZSA9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZWQtbWVudVwiKTtcblxuICAgIGJ1cmdnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBjcm9peC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuXG4gICAgY29uc3QgdG9nZ2xlZE1lbnUgPSBtZW51TW9iaWxlLmNsYXNzTGlzdC50b2dnbGUoXG4gICAgICBcIi10cmFuc2xhdGUteS1mdWxsXCJcbiAgICApO1xuXG4gICAgaWYgKHRvZ2dsZWRNZW51ID09IHRydWUpIHtcbiAgICAgIG1lbnVNb2JpbGUuY2xhc3NMaXN0LmFkZChcIi10cmFuc2xhdGUteS1mdWxsXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51TW9iaWxlLmNsYXNzTGlzdC5yZW1vdmUoXCItdHJhbnNsYXRlLXktZnVsbFwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gZm9uY3Rpb24gZHJvcCBmaWx0cmUgY2F0ZWdvcmllc1xuICB0b2dnbGVEcm9wQ2F0ZWdvcmllczogZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNzdWJtZW51RmlsdHJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWVudUZpbHRyZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJkdXJhdGlvbi01MDBcIik7XG4gXG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYXJyb3dDYXRlZ29yaWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZS0xODBcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duQ2F0ZXJnb3JpZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmFja2Ryb3AtYmx1ci0zeGxcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duQ2F0ZXJnb3JpZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmctd2hpdGUvMjVcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yc0ZpbHRlcnNDYXRlZ29yaWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInRleHQtcGluay05MDBcIik7XG4gIH0sXG5cbiAgLy8gZm9uY3Rpb24gZHJvcCBmaWx0cmUgTWFycXVlc1xuICB0b2dnbGVEcm9wTWFycXVlczogZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNzdWJtZW51RmlsdHJlTWFycXVlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYXJyb3dNYXJxdWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZS0xODBcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duTWFycXVlc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiYWNrZHJvcC1ibHVyLTN4bFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25NYXJxdWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJnLXdoaXRlLzI1XCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNjb2xvcnNGaWx0ZXJzTWFycXVlc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJ0ZXh0LXBpbmstOTAwXCIpO1xuICB9LFxuXG4gIC8vIGZvbmN0aW9uIGRyb3AgZmlsdHJlIEdlbnJlXG4gIHRvZ2dsZURyb3BHZW5yZTogZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNzdWJtZW51RmlsdHJlR2VucmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNhcnJvd0dlbnJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZS0xODBcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duR2VucmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmFja2Ryb3AtYmx1ci0zeGxcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duR2VucmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmctd2hpdGUvMjVcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yc0ZpbHRlcnNHZW5yZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJ0ZXh0LXBpbmstOTAwXCIpO1xuICB9LFxuXG4gIC8vIGZvbmN0aW9uIGRyb3AgZmlsdHJlIENvdWxldXJzXG4gIHRvZ2dsZURyb3BDb3VsZXVyczogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiYmVub2l0XCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNzdWJtZW51RmlsdHJlQ291bGV1cnNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNhcnJvd0NvdWxldXJzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZS0xODBcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duQ291bGV1cnNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmFja2Ryb3AtYmx1ci0zeGxcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duQ291bGV1cnNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmctd2hpdGUvMjVcIik7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JzRmlsdGVyc0NvdWxldXJcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwidGV4dC1waW5rLTgwMFwiKTtcbiAgfSxcblxuICB0b2dnbGVGaWx0cmVNb2JpbGU6IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdHJlTW9iaWxlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZS0xODBcIik7XG4gICAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdHJlTW9iaWxlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInRyYW5zbGF0ZS14LVs4cmVtXVwiKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNmaWx0cmVNb2JpbGVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwibWQ6dHJhbnNsYXRlLXgtWzIzcmVtXVwiKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNmaWx0cmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwidHJhbnNsYXRlLXgtWzByZW1dXCIpO1xuICB9LFxuICAvKlxuICB0b2dnbGVGcmlsdGVyU2VsZWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbWVudVNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNzdWJtZW51RmlsdGVyU2VsZWN0aW9uXCJcbiAgICApO1xuICAgIGNvbnN0IHRvZ2dsZUZpbHRlclNlbGVjdGlvbiA9XG4gICAgICBtZW51U2VsZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoXCItdHJhbnNsYXRlLXktZnVsbFwiKTtcblxuICAgIGlmICh0b2dnbGVGaWx0ZXJTZWxlY3Rpb24gPT0gdHJ1ZSkge1xuICAgICAgbWVudVNlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XG4gICAgICBtZW51U2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJkdXJhdGlvbi03MDBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVTZWxlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcIi10cmFuc2xhdGUteS1mdWxsXCIpO1xuICAgIH1cbiBcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYXJyb3dGaWx0ZXJTZWxlY3Rpb25cIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLTE4MFwiKTtcbiAgfSxcbiAgKi9cblxuXG5cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFjYy5pbml0KTtcbiIsImltcG9ydCAnLi9ib290c3RyYXAuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbi8vaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzXCI7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuXG4gLy8gYXNzZXRzL2FwcC5qc1xuaW1wb3J0IFwiLi9hY2MuanNcIjtcbmltcG9ydCBcIi4vYmNrb2ZmLmpzXCI7XG5pbXBvcnQgXCIuL2ltYWdlcy5qc1wiO1xuaW1wb3J0IFwiZmxvd2JpdGVcIjtcbiIsImNvbnN0IGJja29mZiA9IHtcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpc2F0aW9uIGJhY2sgb2ZmIGRlIGJlbm9pdCBcIlxuICAgICAgKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI25hdmlnYXRpb25JZFwiKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJja29mZi5vcGVuU2lkZUJlbm9pdCk7XG5cbiAgICB9LFxuICBcbiAgICBvcGVuU2lkZUJlbm9pdDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCIgdm91cyBldGVzIGJpZW4gZGFucyBvcGVuU2lkZUJlbm9pdCBcIik7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNuYXZpZ2F0aW9uSWRcIilcbiAgICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICBcbiAgICAgIGNvbnN0IHNpZGVCYXJOYXYgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdlNpZGViYXJcIik7XG4gICAgICBjb25zdCBzdHJva2VDb2xvcnMgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZsZWNoZUlkXCIpO1xuICBcbiAgICAgIHNpZGVCYXIgPSBzaWRlQmFyTmF2LmNsYXNzTGlzdC50b2dnbGUoXCJ3LTE2XCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coc2lkZUJhciwgXCJpbmZvMlwiKTtcbiAgXG4gICAgICBpZiAoc2lkZUJhciA9PSB0cnVlKSB7XG4gICAgICAgIHNpZGVCYXJOYXYuY2xhc3NMaXN0LmFkZChcInctMTZcIik7XG4gICAgICAgIHN0cm9rZUNvbG9ycy5jbGFzc0xpc3QucmVtb3ZlKFwic3Ryb2tlLXBpbmstOTAwXCIpO1xuICAgICAgICBzdHJva2VDb2xvcnMuY2xhc3NMaXN0LmFkZChcInN0cm9rZS13aGl0ZVwiKTtcbiAgICAgICAgc2lkZUJhck5hdi5jbGFzc0xpc3QucmVtb3ZlKFwidy01NlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGVCYXJOYXYuY2xhc3NMaXN0LmFkZChcInctNTZcIik7XG4gICAgICAgIHN0cm9rZUNvbG9ycy5jbGFzc0xpc3QuYWRkKFwic3Ryb2tlLXBpbmstOTAwXCIpO1xuICAgICAgICBzdHJva2VDb2xvcnMuY2xhc3NMaXN0LnJlbW92ZShcInN0cm9rZS13aGl0ZVwiKTtcbiAgICAgICAgc2lkZUJhck5hdi5jbGFzc0xpc3QuYWRkKFwiZHVyYXRpb24tNTAwXCIpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG4gIFxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBiY2tvZmYuaW5pdCk7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcblxuXG4iLCJjb25zdCBpbWFnZXMgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpc3Rpb24gZHUgZmljaGllciBpbWFnZXMuanMgYmFjayBvZmZpY2UgXCIpO1xuXG4gICAgbGV0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWRlbGV0ZV1cIik7IFxuXG4gICAgLy8gSmUgYm91Y2xlIHN1ciBtZXMgbGllbnNcbiAgICAgZm9yICggbGV0IGxpbmsgb2YgbGlua3MpIHtcbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGltYWdlcy5kZWxldGVJbWFnZVByb2R1Y3QpO1xuICAgICAgY29uc29sZS5sb2cobGluayk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICB9LFxuICBkZWxldGVJbWFnZVByb2R1Y3QgOiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwidm91cyBldGVzIGJpZW4gZGFucyBkZWxldGVJbWFnZVByb2R1Y3RcIik7XG4gICAgLy8gSmUgZGVtYW5kZSBjb25maXJtYXRpb25cbiAgICBpZihjb25maXJtKCdWb3VsZXotdm91cyBzdXBwcmltZXIgY2V0dGUgaW1hZ2UgZGUgdm90cmUgcHJkdWl0ID8nKSl7XG4gICAgICAvLyBKJ2Vudm9pZSBtYSByZXF1w6p0ZSBhamF4XG4gICAgICBmZXRjaCh0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIiksIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9LCBcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XCJfdG9rZW5cIjogdGhpcy5kYXRhc2V0LnRva2VufSlcbiAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBpZihkYXRhLnN1Y2Nlc3Mpe1xuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgYWxlcnQoZGF0YS5lcnJvcik7XG4gICAgICB9ICAgIFxuICAgIH0pXG5cbiAgfVxuICB9XG5cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGltYWdlcy5pbml0KTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnByZXZpZXdDbGVhckJ1dHRvblRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2xlYXIoKSk7XG4gICAgICAgIHRoaXMuaW5wdXRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB0aGlzLm9uSW5wdXRDaGFuZ2UoZXZlbnQpKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0Jyk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmlucHV0VGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuaW5wdXRUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMucHJldmlld1RhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucHJldmlld0ZpbGVuYW1lVGFyZ2V0LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY2xlYXInKTtcbiAgICB9XG4gICAgb25JbnB1dENoYW5nZShldmVudCkge1xuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICBpZiAodHlwZW9mIGZpbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnB1dFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucHJldmlld0ZpbGVuYW1lVGFyZ2V0LnRleHRDb250ZW50ID0gZmlsZS5uYW1lO1xuICAgICAgICB0aGlzLnByZXZpZXdUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgaWYgKGZpbGUudHlwZSAmJiBmaWxlLnR5cGUuaW5kZXhPZignaW1hZ2UnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX3BvcHVsYXRlSW1hZ2VQcmV2aWV3KGZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY2hhbmdlJywgZmlsZSk7XG4gICAgfVxuICAgIF9wb3B1bGF0ZUltYWdlUHJldmlldyhmaWxlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgRmlsZVJlYWRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiJyArIGV2ZW50LnRhcmdldC5yZXN1bHQgKyAnXCIpJztcbiAgICAgICAgfSk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQgPSB7fSkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICdkcm9wem9uZScgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnRhcmdldHMgPSBbJ2lucHV0JywgJ3BsYWNlaG9sZGVyJywgJ3ByZXZpZXcnLCAncHJldmlld0NsZWFyQnV0dG9uJywgJ3ByZXZpZXdGaWxlbmFtZScsICdwcmV2aWV3SW1hZ2UnXTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5mdW5jdGlvbiBwYXJzZURpcmVjdGl2ZXMoY29udGVudCkge1xuICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBbXTtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG4gICAgfVxuICAgIGxldCBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgIGxldCBjdXJyZW50QXJndW1lbnROYW1lID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudFZhbHVlID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICBsZXQgY3VycmVudE5hbWVkQXJndW1lbnRzID0ge307XG4gICAgbGV0IGN1cnJlbnRNb2RpZmllcnMgPSBbXTtcbiAgICBsZXQgc3RhdGUgPSAnYWN0aW9uJztcbiAgICBjb25zdCBnZXRMYXN0QWN0aW9uTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEFjdGlvbk5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGFueSBkaXJlY3RpdmVzJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXNbZGlyZWN0aXZlcy5sZW5ndGggLSAxXS5hY3Rpb247XG4gICAgfTtcbiAgICBjb25zdCBwdXNoSW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgICAgICBhY3Rpb246IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgYXJnczogY3VycmVudEFyZ3VtZW50cyxcbiAgICAgICAgICAgIG5hbWVkOiBjdXJyZW50TmFtZWRBcmd1bWVudHMsXG4gICAgICAgICAgICBtb2RpZmllcnM6IGN1cnJlbnRNb2RpZmllcnMsXG4gICAgICAgICAgICBnZXRTdHJpbmc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudE5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgICAgICBjdXJyZW50TmFtZWRBcmd1bWVudHMgPSB7fTtcbiAgICAgICAgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgICAgICBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIH07XG4gICAgY29uc3QgcHVzaEFyZ3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtaXhlZEFyZ1R5cGVzRXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vcm1hbCBhbmQgbmFtZWQgYXJndW1lbnRzIGNhbm5vdCBiZSBtaXhlZCBpbnNpZGUgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCJgKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudE5hbWUpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtaXhlZEFyZ1R5cGVzRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnROYW1lZEFyZ3VtZW50c1tjdXJyZW50QXJndW1lbnROYW1lLnRyaW0oKV0gPSBjdXJyZW50QXJndW1lbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhjdXJyZW50TmFtZWRBcmd1bWVudHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtaXhlZEFyZ1R5cGVzRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRBcmd1bWVudHMucHVzaChjdXJyZW50QXJndW1lbnRWYWx1ZS50cmltKCkpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudE5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hNb2RpZmllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSBhcmd1bWVudHMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnROYW1lZEFyZ3VtZW50cykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBuYW1lZCBhcmd1bWVudHMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE1vZGlmaWVycy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCA/IGN1cnJlbnRBcmd1bWVudHNbMF0gOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgICAgIHN0YXRlID0gJ2FjdGlvbic7XG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hhciA9IGNvbnRlbnRbaV07XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJykge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9ICdhcmd1bWVudHMnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ3wnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hNb2RpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoQXJndW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAnYWZ0ZXJfYXJndW1lbnRzJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaEFyZ3VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBcmd1bWVudE5hbWUgPSBjdXJyZW50QXJndW1lbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRBcmd1bWVudFZhbHVlICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZnRlcl9hcmd1bWVudHMnOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnfCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaE1vZGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciAhPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBzcGFjZSBhZnRlciAke2dldExhc3RBY3Rpb25OYW1lKCl9KClgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHVzaEluc3RydWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlICdhY3Rpb24nOlxuICAgICAgICBjYXNlICdhZnRlcl9hcmd1bWVudHMnOlxuICAgICAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgcHVzaEluc3RydWN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRGlkIHlvdSBmb3JnZXQgdG8gYWRkIGEgY2xvc2luZyBcIilcIiBhZnRlciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9XCI/YCk7XG4gICAgfVxuICAgIHJldHVybiBkaXJlY3RpdmVzO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lU3BhY2VkQXJyYXkocGFydHMpIHtcbiAgICBjb25zdCBmaW5hbFBhcnRzID0gW107XG4gICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgICAgICBmaW5hbFBhcnRzLnB1c2goLi4ucGFydC5zcGxpdCgnICcpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmluYWxQYXJ0cztcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCkge1xuICAgIHJldHVybiAobW9kZWxcbiAgICAgICAgLnJlcGxhY2UoL1xcW10kLywgJycpXG4gICAgICAgIC5zcGxpdCgnWycpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgnXScsICcnKTtcbiAgICB9KVxuICAgICAgICAuam9pbignLicpKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB2YWx1ZVN0b3JlKSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZURhdGEgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChtb2RlbE5hbWVEYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kZWxWYWx1ZSA9IHZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZURhdGEuYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtb2RlbFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlKGVsZW1lbnQsIG1vZGVsVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChPYmplY3QobW9kZWxWYWx1ZSkgPT09IG1vZGVsVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZShlbGVtZW50LCBPYmplY3QudmFsdWVzKG1vZGVsVmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jaGVja2VkID8gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZShlbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgoZWwpID0+IGVsLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuZGF0YXNldC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoJ3ZhbHVlJyBpbiBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHNldFZhbHVlT25FbGVtZW50KGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGVsZW1lbnQudmFsdWUgPT0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PSBlbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlRm91bmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGFycmF5V3JhcHBlZFZhbHVlID0gW10uY29uY2F0KHZhbHVlKS5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5vcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGFycmF5V3JhcHBlZFZhbHVlLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogdmFsdWU7XG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5kYXRhc2V0Lm1vZGVsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhlbGVtZW50LmRhdGFzZXQubW9kZWwpO1xuICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3RpdmUuYXJncy5sZW5ndGggPiAwIHx8IGRpcmVjdGl2ZS5uYW1lZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkYXRhLW1vZGVsPVwiJHtlbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICB9XG4gICAgICAgIGRpcmVjdGl2ZS5hY3Rpb24gPSBub3JtYWxpemVNb2RlbE5hbWUoZGlyZWN0aXZlLmFjdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5mdW5jdGlvbiBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRocm93T25NaXNzaW5nID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRhdGFNb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KTtcbiAgICBpZiAoZGF0YU1vZGVsRGlyZWN0aXZlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBkYXRhTW9kZWxEaXJlY3RpdmVzWzBdO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBpZiAoZm9ybUVsZW1lbnQgJiYgJ21vZGVsJyBpbiBmb3JtRWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGZvcm1FbGVtZW50LmRhdGFzZXQubW9kZWwgfHwgJyonKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGRpcmVjdGl2ZXNbMF07XG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCB8fCBkaXJlY3RpdmUubmFtZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGEtbW9kZWw9XCIke2Zvcm1FbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aHJvd09uTWlzc2luZykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZGV0ZXJtaW5lIHRoZSBtb2RlbCBuYW1lIGZvciBcIiR7Z2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KX1cIjogdGhlIGVsZW1lbnQgbXVzdCBlaXRoZXIgaGF2ZSBhIFwiZGF0YS1tb2RlbFwiIChvciBcIm5hbWVcIiBhdHRyaWJ1dGUgbGl2aW5nIGluc2lkZSBhIDxmb3JtIGRhdGEtbW9kZWw9XCIqXCI+KS5gKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkge1xuICAgIGlmIChjb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFjb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmb3VuZENoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgY29tcG9uZW50LmdldENoaWxkcmVuKCkuZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGZvdW5kQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCB8fCBjaGlsZENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBmb3VuZENoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAhZm91bmRDaGlsZENvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGNsb25lSFRNTEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBpZiAoIShuZXdFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGNsb25lIGVsZW1lbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBodG1sVG9FbGVtZW50KGh0bWwpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgaWYgKHRlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29tcG9uZW50IEhUTUwgY29udGFpbnMgJHt0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50fSBlbGVtZW50cywgYnV0IG9ubHkgMSByb290IGVsZW1lbnQgaXMgYWxsb3dlZC5gKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGQgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZCBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDcmVhdGVkIGVsZW1lbnQgaXMgbm90IGFuIEhUTUxFbGVtZW50OiAke2h0bWwudHJpbSgpfWApO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGQ7XG59XG5mdW5jdGlvbiBnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5pbm5lckhUTUxcbiAgICAgICAgPyBlbGVtZW50Lm91dGVySFRNTC5zbGljZSgwLCBlbGVtZW50Lm91dGVySFRNTC5pbmRleE9mKGVsZW1lbnQuaW5uZXJIVE1MKSlcbiAgICAgICAgOiBlbGVtZW50Lm91dGVySFRNTDtcbn1cbmNvbnN0IGdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBjdXJyZW50VmFsdWVzKSB7XG4gICAgY29uc3QgZmluYWxWYWx1ZXMgPSBbLi4uY3VycmVudFZhbHVlc107XG4gICAgY29uc3QgdmFsdWUgPSBpbnB1dFZhbHVlKGVsZW1lbnQpO1xuICAgIGNvbnN0IGluZGV4ID0gY3VycmVudFZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICBpZiAoZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGZpbmFsVmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaW5hbFZhbHVlcztcbiAgICB9XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgZmluYWxWYWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmFsVmFsdWVzO1xufTtcbmNvbnN0IGlucHV0VmFsdWUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQudmFsdWUgPyBlbGVtZW50LmRhdGFzZXQudmFsdWUgOiBlbGVtZW50LnZhbHVlO1xufTtcblxuZnVuY3Rpb24gZ2V0RGVlcERhdGEoZGF0YSwgcHJvcGVydHlQYXRoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50TGV2ZWxEYXRhLCBmaW5hbEtleSB9ID0gcGFyc2VEZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpO1xuICAgIGlmIChjdXJyZW50TGV2ZWxEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRMZXZlbERhdGFbZmluYWxLZXldO1xufVxuY29uc3QgcGFyc2VEZWVwRGF0YSA9IGZ1bmN0aW9uIChkYXRhLCBwcm9wZXJ0eVBhdGgpIHtcbiAgICBjb25zdCBmaW5hbERhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICBsZXQgY3VycmVudExldmVsRGF0YSA9IGZpbmFsRGF0YTtcbiAgICBjb25zdCBwYXJ0cyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnRMZXZlbERhdGEgPSBjdXJyZW50TGV2ZWxEYXRhW3BhcnRzW2ldXTtcbiAgICB9XG4gICAgY29uc3QgZmluYWxLZXkgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50TGV2ZWxEYXRhLFxuICAgICAgICBmaW5hbERhdGEsXG4gICAgICAgIGZpbmFsS2V5LFxuICAgICAgICBwYXJ0cyxcbiAgICB9O1xufTtcblxuY2xhc3MgVmFsdWVTdG9yZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLmRpcnR5UHJvcHMgPSB7fTtcbiAgICAgICAgdGhpcy5wZW5kaW5nUHJvcHMgPSB7fTtcbiAgICAgICAgdGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50ID0ge307XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB9XG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobmFtZSk7XG4gICAgICAgIGlmICh0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdQcm9wc1tub3JtYWxpemVkTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVuZGluZ1Byb3BzW25vcm1hbGl6ZWROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wc1tub3JtYWxpemVkTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHNbbm9ybWFsaXplZE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXREZWVwRGF0YSh0aGlzLnByb3BzLCBub3JtYWxpemVkTmFtZSk7XG4gICAgfVxuICAgIGhhcyhuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChuYW1lKSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobmFtZSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0KG5vcm1hbGl6ZWROYW1lKTtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBnZXRPcmlnaW5hbFByb3BzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgfVxuICAgIGdldERpcnR5UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRpcnR5UHJvcHMpO1xuICAgIH1cbiAgICBnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50KTtcbiAgICB9XG4gICAgZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nKCkge1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGlydHlQcm9wcyk7XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHt9O1xuICAgIH1cbiAgICByZWluaXRpYWxpemVBbGxQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHt9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgIH1cbiAgICBwdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKSB7XG4gICAgICAgIHRoaXMuZGlydHlQcm9wcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wZW5kaW5nUHJvcHMpLCB0aGlzLmRpcnR5UHJvcHMpO1xuICAgICAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHt9O1xuICAgIH1cbiAgICBzdG9yZU5ld1Byb3BzRnJvbVBhcmVudChwcm9wcykge1xuICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSBwcm9wcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlZDtcbiAgICB9XG59XG5cbnZhciBET0NVTUVOVF9GUkFHTUVOVF9OT0RFID0gMTE7XG5cbmZ1bmN0aW9uIG1vcnBoQXR0cnMoZnJvbU5vZGUsIHRvTm9kZSkge1xuICAgIHZhciB0b05vZGVBdHRycyA9IHRvTm9kZS5hdHRyaWJ1dGVzO1xuICAgIHZhciBhdHRyO1xuICAgIHZhciBhdHRyTmFtZTtcbiAgICB2YXIgYXR0ck5hbWVzcGFjZVVSSTtcbiAgICB2YXIgYXR0clZhbHVlO1xuICAgIHZhciBmcm9tVmFsdWU7XG5cbiAgICAvLyBkb2N1bWVudC1mcmFnbWVudHMgZG9udCBoYXZlIGF0dHJpYnV0ZXMgc28gbGV0cyBub3QgZG8gYW55dGhpbmdcbiAgICBpZiAodG9Ob2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8IGZyb21Ob2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIGF0dHJpYnV0ZXMgb24gb3JpZ2luYWwgRE9NIGVsZW1lbnRcbiAgICBmb3IgKHZhciBpID0gdG9Ob2RlQXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgYXR0ciA9IHRvTm9kZUF0dHJzW2ldO1xuICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTtcbiAgICAgICAgYXR0ck5hbWVzcGFjZVVSSSA9IGF0dHIubmFtZXNwYWNlVVJJO1xuICAgICAgICBhdHRyVmFsdWUgPSBhdHRyLnZhbHVlO1xuXG4gICAgICAgIGlmIChhdHRyTmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubG9jYWxOYW1lIHx8IGF0dHJOYW1lO1xuICAgICAgICAgICAgZnJvbVZhbHVlID0gZnJvbU5vZGUuZ2V0QXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZnJvbVZhbHVlICE9PSBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ci5wcmVmaXggPT09ICd4bWxucycpe1xuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTsgLy8gSXQncyBub3QgYWxsb3dlZCB0byBzZXQgYW4gYXR0cmlidXRlIHdpdGggdGhlIFhNTE5TIG5hbWVzcGFjZSB3aXRob3V0IHNwZWNpZnlpbmcgdGhlIGB4bWxuc2AgcHJlZml4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnNldEF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbVZhbHVlID0gZnJvbU5vZGUuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGZyb21WYWx1ZSAhPT0gYXR0clZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFueSBleHRyYSBhdHRyaWJ1dGVzIGZvdW5kIG9uIHRoZSBvcmlnaW5hbCBET00gZWxlbWVudCB0aGF0XG4gICAgLy8gd2VyZW4ndCBmb3VuZCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAgdmFyIGZyb21Ob2RlQXR0cnMgPSBmcm9tTm9kZS5hdHRyaWJ1dGVzO1xuXG4gICAgZm9yICh2YXIgZCA9IGZyb21Ob2RlQXR0cnMubGVuZ3RoIC0gMTsgZCA+PSAwOyBkLS0pIHtcbiAgICAgICAgYXR0ciA9IGZyb21Ob2RlQXR0cnNbZF07XG4gICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lO1xuICAgICAgICBhdHRyTmFtZXNwYWNlVVJJID0gYXR0ci5uYW1lc3BhY2VVUkk7XG5cbiAgICAgICAgaWYgKGF0dHJOYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5sb2NhbE5hbWUgfHwgYXR0ck5hbWU7XG5cbiAgICAgICAgICAgIGlmICghdG9Ob2RlLmhhc0F0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdG9Ob2RlLmhhc0F0dHJpYnV0ZShhdHRyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgcmFuZ2U7IC8vIENyZWF0ZSBhIHJhbmdlIG9iamVjdCBmb3IgZWZmaWNlbnRseSByZW5kZXJpbmcgc3RyaW5ncyB0byBlbGVtZW50cy5cbnZhciBOU19YSFRNTCA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcblxudmFyIGRvYyA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBkb2N1bWVudDtcbnZhciBIQVNfVEVNUExBVEVfU1VQUE9SVCA9ICEhZG9jICYmICdjb250ZW50JyBpbiBkb2MuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnZhciBIQVNfUkFOR0VfU1VQUE9SVCA9ICEhZG9jICYmIGRvYy5jcmVhdGVSYW5nZSAmJiAnY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50JyBpbiBkb2MuY3JlYXRlUmFuZ2UoKTtcblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUoc3RyKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gc3RyO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50RnJvbVJhbmdlKHN0cikge1xuICAgIGlmICghcmFuZ2UpIHtcbiAgICAgICAgcmFuZ2UgPSBkb2MuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZShkb2MuYm9keSk7XG4gICAgfVxuXG4gICAgdmFyIGZyYWdtZW50ID0gcmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHN0cik7XG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50RnJvbVdyYXAoc3RyKSB7XG4gICAgdmFyIGZyYWdtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2JvZHknKTtcbiAgICBmcmFnbWVudC5pbm5lckhUTUwgPSBzdHI7XG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbi8qKlxuICogVGhpcyBpcyBhYm91dCB0aGUgc2FtZVxuICogdmFyIGh0bWwgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0ciwgJ3RleHQvaHRtbCcpO1xuICogcmV0dXJuIGh0bWwuYm9keS5maXJzdENoaWxkO1xuICpcbiAqIEBtZXRob2QgdG9FbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKi9cbmZ1bmN0aW9uIHRvRWxlbWVudChzdHIpIHtcbiAgICBzdHIgPSBzdHIudHJpbSgpO1xuICAgIGlmIChIQVNfVEVNUExBVEVfU1VQUE9SVCkge1xuICAgICAgLy8gYXZvaWQgcmVzdHJpY3Rpb25zIG9uIGNvbnRlbnQgZm9yIHRoaW5ncyBsaWtlIGA8dHI+PHRoPkhpPC90aD48L3RyPmAgd2hpY2hcbiAgICAgIC8vIGNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCBkb2Vzbid0IHN1cHBvcnRcbiAgICAgIC8vIDx0ZW1wbGF0ZT4gc3VwcG9ydCBub3QgYXZhaWxhYmxlIGluIElFXG4gICAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUoc3RyKTtcbiAgICB9IGVsc2UgaWYgKEhBU19SQU5HRV9TVVBQT1JUKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tUmFuZ2Uoc3RyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tV3JhcChzdHIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0d28gbm9kZSdzIG5hbWVzIGFyZSB0aGUgc2FtZS5cbiAqXG4gKiBOT1RFOiBXZSBkb24ndCBib3RoZXIgY2hlY2tpbmcgYG5hbWVzcGFjZVVSSWAgYmVjYXVzZSB5b3Ugd2lsbCBuZXZlciBmaW5kIHR3byBIVE1MIGVsZW1lbnRzIHdpdGggdGhlIHNhbWVcbiAqICAgICAgIG5vZGVOYW1lIGFuZCBkaWZmZXJlbnQgbmFtZXNwYWNlIFVSSXMuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBhXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGIgVGhlIHRhcmdldCBlbGVtZW50XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjb21wYXJlTm9kZU5hbWVzKGZyb21FbCwgdG9FbCkge1xuICAgIHZhciBmcm9tTm9kZU5hbWUgPSBmcm9tRWwubm9kZU5hbWU7XG4gICAgdmFyIHRvTm9kZU5hbWUgPSB0b0VsLm5vZGVOYW1lO1xuICAgIHZhciBmcm9tQ29kZVN0YXJ0LCB0b0NvZGVTdGFydDtcblxuICAgIGlmIChmcm9tTm9kZU5hbWUgPT09IHRvTm9kZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnJvbUNvZGVTdGFydCA9IGZyb21Ob2RlTmFtZS5jaGFyQ29kZUF0KDApO1xuICAgIHRvQ29kZVN0YXJ0ID0gdG9Ob2RlTmFtZS5jaGFyQ29kZUF0KDApO1xuXG4gICAgLy8gSWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgdmlydHVhbCBET00gbm9kZSBvciBTVkcgbm9kZSB0aGVuIHdlIG1heVxuICAgIC8vIG5lZWQgdG8gbm9ybWFsaXplIHRoZSB0YWcgbmFtZSBiZWZvcmUgY29tcGFyaW5nLiBOb3JtYWwgSFRNTCBlbGVtZW50cyB0aGF0IGFyZVxuICAgIC8vIGluIHRoZSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIlxuICAgIC8vIGFyZSBjb252ZXJ0ZWQgdG8gdXBwZXIgY2FzZVxuICAgIGlmIChmcm9tQ29kZVN0YXJ0IDw9IDkwICYmIHRvQ29kZVN0YXJ0ID49IDk3KSB7IC8vIGZyb20gaXMgdXBwZXIgYW5kIHRvIGlzIGxvd2VyXG4gICAgICAgIHJldHVybiBmcm9tTm9kZU5hbWUgPT09IHRvTm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICB9IGVsc2UgaWYgKHRvQ29kZVN0YXJ0IDw9IDkwICYmIGZyb21Db2RlU3RhcnQgPj0gOTcpIHsgLy8gdG8gaXMgdXBwZXIgYW5kIGZyb20gaXMgbG93ZXJcbiAgICAgICAgcmV0dXJuIHRvTm9kZU5hbWUgPT09IGZyb21Ob2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnQsIG9wdGlvbmFsbHkgd2l0aCBhIGtub3duIG5hbWVzcGFjZSBVUkkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgdGhlIGVsZW1lbnQgbmFtZSwgZS5nLiAnZGl2JyBvciAnc3ZnJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VVUkldIHRoZSBlbGVtZW50J3MgbmFtZXNwYWNlIFVSSSwgaS5lLiB0aGUgdmFsdWUgb2ZcbiAqIGl0cyBgeG1sbnNgIGF0dHJpYnV0ZSBvciBpdHMgaW5mZXJyZWQgbmFtZXNwYWNlLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyhuYW1lLCBuYW1lc3BhY2VVUkkpIHtcbiAgICByZXR1cm4gIW5hbWVzcGFjZVVSSSB8fCBuYW1lc3BhY2VVUkkgPT09IE5TX1hIVE1MID9cbiAgICAgICAgZG9jLmNyZWF0ZUVsZW1lbnQobmFtZSkgOlxuICAgICAgICBkb2MuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgbmFtZSk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSBjaGlsZHJlbiBvZiBvbmUgRE9NIGVsZW1lbnQgdG8gYW5vdGhlciBET00gZWxlbWVudFxuICovXG5mdW5jdGlvbiBtb3ZlQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKSB7XG4gICAgdmFyIGN1ckNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGN1ckNoaWxkKSB7XG4gICAgICAgIHZhciBuZXh0Q2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgdG9FbC5hcHBlbmRDaGlsZChjdXJDaGlsZCk7XG4gICAgICAgIGN1ckNoaWxkID0gbmV4dENoaWxkO1xuICAgIH1cbiAgICByZXR1cm4gdG9FbDtcbn1cblxuZnVuY3Rpb24gc3luY0Jvb2xlYW5BdHRyUHJvcChmcm9tRWwsIHRvRWwsIG5hbWUpIHtcbiAgICBpZiAoZnJvbUVsW25hbWVdICE9PSB0b0VsW25hbWVdKSB7XG4gICAgICAgIGZyb21FbFtuYW1lXSA9IHRvRWxbbmFtZV07XG4gICAgICAgIGlmIChmcm9tRWxbbmFtZV0pIHtcbiAgICAgICAgICAgIGZyb21FbC5zZXRBdHRyaWJ1dGUobmFtZSwgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIHNwZWNpYWxFbEhhbmRsZXJzID0ge1xuICAgIE9QVElPTjogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHZhciBwYXJlbnROb2RlID0gZnJvbUVsLnBhcmVudE5vZGU7XG4gICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50TmFtZSA9IHBhcmVudE5vZGUubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnROYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBwYXJlbnROYW1lID0gcGFyZW50Tm9kZSAmJiBwYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyZW50TmFtZSA9PT0gJ1NFTEVDVCcgJiYgIXBhcmVudE5vZGUuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbC5oYXNBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgJiYgIXRvRWwuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgTVMgRWRnZSBidWcgd2hlcmUgdGhlICdzZWxlY3RlZCcgYXR0cmlidXRlIGNhbiBvbmx5IGJlXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZWQgaWYgc2V0IHRvIGEgbm9uLWVtcHR5IHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMjA4NzY3OS9cbiAgICAgICAgICAgICAgICAgICAgZnJvbUVsLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZXNldCBzZWxlY3QgZWxlbWVudCdzIHNlbGVjdGVkSW5kZXggdG8gLTEsIG90aGVyd2lzZSBzZXR0aW5nXG4gICAgICAgICAgICAgICAgLy8gZnJvbUVsLnNlbGVjdGVkIHVzaW5nIHRoZSBzeW5jQm9vbGVhbkF0dHJQcm9wIGJlbG93IGhhcyBubyBlZmZlY3QuXG4gICAgICAgICAgICAgICAgLy8gVGhlIGNvcnJlY3Qgc2VsZWN0ZWRJbmRleCB3aWxsIGJlIHNldCBpbiB0aGUgU0VMRUNUIHNwZWNpYWwgaGFuZGxlciBiZWxvdy5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ3NlbGVjdGVkJyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgXCJ2YWx1ZVwiIGF0dHJpYnV0ZSBpcyBzcGVjaWFsIGZvciB0aGUgPGlucHV0PiBlbGVtZW50IHNpbmNlIGl0IHNldHNcbiAgICAgKiB0aGUgaW5pdGlhbCB2YWx1ZS4gQ2hhbmdpbmcgdGhlIFwidmFsdWVcIiBhdHRyaWJ1dGUgd2l0aG91dCBjaGFuZ2luZyB0aGVcbiAgICAgKiBcInZhbHVlXCIgcHJvcGVydHkgd2lsbCBoYXZlIG5vIGVmZmVjdCBzaW5jZSBpdCBpcyBvbmx5IHVzZWQgdG8gdGhlIHNldCB0aGVcbiAgICAgKiBpbml0aWFsIHZhbHVlLiAgU2ltaWxhciBmb3IgdGhlIFwiY2hlY2tlZFwiIGF0dHJpYnV0ZSwgYW5kIFwiZGlzYWJsZWRcIi5cbiAgICAgKi9cbiAgICBJTlBVVDogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCAnY2hlY2tlZCcpO1xuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgaWYgKGZyb21FbC52YWx1ZSAhPT0gdG9FbC52YWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gdG9FbC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdG9FbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgVEVYVEFSRUE6IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0b0VsLnZhbHVlO1xuICAgICAgICBpZiAoZnJvbUVsLnZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgICBpZiAoZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgLy8gTmVlZGVkIGZvciBJRS4gQXBwYXJlbnRseSBJRSBzZXRzIHRoZSBwbGFjZWhvbGRlciBhcyB0aGVcbiAgICAgICAgICAgIC8vIG5vZGUgdmFsdWUgYW5kIHZpc2UgdmVyc2EuIFRoaXMgaWdub3JlcyBhbiBlbXB0eSB1cGRhdGUuXG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBmaXJzdENoaWxkLm5vZGVWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID09IG5ld1ZhbHVlIHx8ICghbmV3VmFsdWUgJiYgb2xkVmFsdWUgPT0gZnJvbUVsLnBsYWNlaG9sZGVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgU0VMRUNUOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgaWYgKCF0b0VsLmhhc0F0dHJpYnV0ZSgnbXVsdGlwbGUnKSkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gbG9vcCB0aHJvdWdoIGNoaWxkcmVuIG9mIGZyb21FbCwgbm90IHRvRWwgc2luY2Ugbm9kZXMgY2FuIGJlIG1vdmVkXG4gICAgICAgICAgICAvLyBmcm9tIHRvRWwgdG8gZnJvbUVsIGRpcmVjdGx5IHdoZW4gbW9ycGhpbmcuXG4gICAgICAgICAgICAvLyBBdCB0aGUgdGltZSB0aGlzIHNwZWNpYWwgaGFuZGxlciBpcyBpbnZva2VkLCBhbGwgY2hpbGRyZW4gaGF2ZSBhbHJlYWR5IGJlZW4gbW9ycGhlZFxuICAgICAgICAgICAgLy8gYW5kIGFwcGVuZGVkIHRvIC8gcmVtb3ZlZCBmcm9tIGZyb21FbCwgc28gdXNpbmcgZnJvbUVsIGhlcmUgaXMgc2FmZSBhbmQgY29ycmVjdC5cbiAgICAgICAgICAgIHZhciBjdXJDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIG9wdGdyb3VwO1xuICAgICAgICAgICAgdmFyIG5vZGVOYW1lO1xuICAgICAgICAgICAgd2hpbGUoY3VyQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICBub2RlTmFtZSA9IGN1ckNoaWxkLm5vZGVOYW1lICYmIGN1ckNoaWxkLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVOYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGdyb3VwID0gY3VyQ2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gb3B0Z3JvdXAuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZU5hbWUgPT09ICdPUFRJT04nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQ2hpbGQuaGFzQXR0cmlidXRlKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJDaGlsZCAmJiBvcHRncm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBvcHRncm91cC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGdyb3VwID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnJvbUVsLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIEVMRU1FTlRfTk9ERSA9IDE7XG52YXIgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSQxID0gMTE7XG52YXIgVEVYVF9OT0RFID0gMztcbnZhciBDT01NRU5UX05PREUgPSA4O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gZGVmYXVsdEdldE5vZGVLZXkobm9kZSkge1xuICBpZiAobm9kZSkge1xuICAgIHJldHVybiAobm9kZS5nZXRBdHRyaWJ1dGUgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykpIHx8IG5vZGUuaWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW9ycGhkb21GYWN0b3J5KG1vcnBoQXR0cnMpIHtcblxuICByZXR1cm4gZnVuY3Rpb24gbW9ycGhkb20oZnJvbU5vZGUsIHRvTm9kZSwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdG9Ob2RlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGZyb21Ob2RlLm5vZGVOYW1lID09PSAnI2RvY3VtZW50JyB8fCBmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnIHx8IGZyb21Ob2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgdmFyIHRvTm9kZUh0bWwgPSB0b05vZGU7XG4gICAgICAgIHRvTm9kZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdodG1sJyk7XG4gICAgICAgIHRvTm9kZS5pbm5lckhUTUwgPSB0b05vZGVIdG1sO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9Ob2RlID0gdG9FbGVtZW50KHRvTm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0b05vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUkMSkge1xuICAgICAgdG9Ob2RlID0gdG9Ob2RlLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIH1cblxuICAgIHZhciBnZXROb2RlS2V5ID0gb3B0aW9ucy5nZXROb2RlS2V5IHx8IGRlZmF1bHRHZXROb2RlS2V5O1xuICAgIHZhciBvbkJlZm9yZU5vZGVBZGRlZCA9IG9wdGlvbnMub25CZWZvcmVOb2RlQWRkZWQgfHwgbm9vcDtcbiAgICB2YXIgb25Ob2RlQWRkZWQgPSBvcHRpb25zLm9uTm9kZUFkZGVkIHx8IG5vb3A7XG4gICAgdmFyIG9uQmVmb3JlRWxVcGRhdGVkID0gb3B0aW9ucy5vbkJlZm9yZUVsVXBkYXRlZCB8fCBub29wO1xuICAgIHZhciBvbkVsVXBkYXRlZCA9IG9wdGlvbnMub25FbFVwZGF0ZWQgfHwgbm9vcDtcbiAgICB2YXIgb25CZWZvcmVOb2RlRGlzY2FyZGVkID0gb3B0aW9ucy5vbkJlZm9yZU5vZGVEaXNjYXJkZWQgfHwgbm9vcDtcbiAgICB2YXIgb25Ob2RlRGlzY2FyZGVkID0gb3B0aW9ucy5vbk5vZGVEaXNjYXJkZWQgfHwgbm9vcDtcbiAgICB2YXIgb25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZCA9IG9wdGlvbnMub25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZCB8fCBub29wO1xuICAgIHZhciBza2lwRnJvbUNoaWxkcmVuID0gb3B0aW9ucy5za2lwRnJvbUNoaWxkcmVuIHx8IG5vb3A7XG4gICAgdmFyIGFkZENoaWxkID0gb3B0aW9ucy5hZGRDaGlsZCB8fCBmdW5jdGlvbihwYXJlbnQsIGNoaWxkKXsgcmV0dXJuIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7IH07XG4gICAgdmFyIGNoaWxkcmVuT25seSA9IG9wdGlvbnMuY2hpbGRyZW5Pbmx5ID09PSB0cnVlO1xuXG4gICAgLy8gVGhpcyBvYmplY3QgaXMgdXNlZCBhcyBhIGxvb2t1cCB0byBxdWlja2x5IGZpbmQgYWxsIGtleWVkIGVsZW1lbnRzIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS5cbiAgICB2YXIgZnJvbU5vZGVzTG9va3VwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIga2V5ZWRSZW1vdmFsTGlzdCA9IFtdO1xuXG4gICAgZnVuY3Rpb24gYWRkS2V5ZWRSZW1vdmFsKGtleSkge1xuICAgICAga2V5ZWRSZW1vdmFsTGlzdC5wdXNoKGtleSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMobm9kZSwgc2tpcEtleWVkTm9kZXMpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgdmFyIGN1ckNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcblxuICAgICAgICAgIHZhciBrZXkgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAoc2tpcEtleWVkTm9kZXMgJiYgKGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpKSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgYXJlIHNraXBwaW5nIGtleWVkIG5vZGVzIHRoZW4gd2UgYWRkIHRoZSBrZXlcbiAgICAgICAgICAgIC8vIHRvIGEgbGlzdCBzbyB0aGF0IGl0IGNhbiBiZSBoYW5kbGVkIGF0IHRoZSB2ZXJ5IGVuZC5cbiAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChrZXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPbmx5IHJlcG9ydCB0aGUgbm9kZSBhcyBkaXNjYXJkZWQgaWYgaXQgaXMgbm90IGtleWVkLiBXZSBkbyB0aGlzIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIGF0IHRoZSBlbmQgd2UgbG9vcCB0aHJvdWdoIGFsbCBrZXllZCBlbGVtZW50cyB0aGF0IHdlcmUgdW5tYXRjaGVkXG4gICAgICAgICAgICAvLyBhbmQgdGhlbiBkaXNjYXJkIHRoZW0gaW4gb25lIGZpbmFsIHBhc3MuXG4gICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQoY3VyQ2hpbGQpO1xuICAgICAgICAgICAgaWYgKGN1ckNoaWxkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMoY3VyQ2hpbGQsIHNraXBLZXllZE5vZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZW1vdmVzIGEgRE9NIG5vZGUgb3V0IG9mIHRoZSBvcmlnaW5hbCBET01cbiAgICAqXG4gICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIFRoZSBub2RlIHRvIHJlbW92ZVxuICAgICogQHBhcmFtICB7Tm9kZX0gcGFyZW50Tm9kZSBUaGUgbm9kZXMgcGFyZW50XG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBza2lwS2V5ZWROb2RlcyBJZiB0cnVlIHRoZW4gZWxlbWVudHMgd2l0aCBrZXlzIHdpbGwgYmUgc2tpcHBlZCBhbmQgbm90IGRpc2NhcmRlZC5cbiAgICAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSwgcGFyZW50Tm9kZSwgc2tpcEtleWVkTm9kZXMpIHtcbiAgICAgIGlmIChvbkJlZm9yZU5vZGVEaXNjYXJkZWQobm9kZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgIH1cblxuICAgICAgb25Ob2RlRGlzY2FyZGVkKG5vZGUpO1xuICAgICAgd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMobm9kZSwgc2tpcEtleWVkTm9kZXMpO1xuICAgIH1cblxuICAgIC8vIC8vIFRyZWVXYWxrZXIgaW1wbGVtZW50YXRpb24gaXMgbm8gZmFzdGVyLCBidXQga2VlcGluZyB0aGlzIGFyb3VuZCBpbiBjYXNlIHRoaXMgY2hhbmdlcyBpbiB0aGUgZnV0dXJlXG4gICAgLy8gZnVuY3Rpb24gaW5kZXhUcmVlKHJvb3QpIHtcbiAgICAvLyAgICAgdmFyIHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgIC8vICAgICAgICAgcm9vdCxcbiAgICAvLyAgICAgICAgIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UKTtcbiAgICAvL1xuICAgIC8vICAgICB2YXIgZWw7XG4gICAgLy8gICAgIHdoaWxlKChlbCA9IHRyZWVXYWxrZXIubmV4dE5vZGUoKSkpIHtcbiAgICAvLyAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGVsKTtcbiAgICAvLyAgICAgICAgIGlmIChrZXkpIHtcbiAgICAvLyAgICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGVsO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gLy8gTm9kZUl0ZXJhdG9yIGltcGxlbWVudGF0aW9uIGlzIG5vIGZhc3RlciwgYnV0IGtlZXBpbmcgdGhpcyBhcm91bmQgaW4gY2FzZSB0aGlzIGNoYW5nZXMgaW4gdGhlIGZ1dHVyZVxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gaW5kZXhUcmVlKG5vZGUpIHtcbiAgICAvLyAgICAgdmFyIG5vZGVJdGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihub2RlLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCk7XG4gICAgLy8gICAgIHZhciBlbDtcbiAgICAvLyAgICAgd2hpbGUoKGVsID0gbm9kZUl0ZXJhdG9yLm5leHROb2RlKCkpKSB7XG4gICAgLy8gICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShlbCk7XG4gICAgLy8gICAgICAgICBpZiAoa2V5KSB7XG4gICAgLy8gICAgICAgICAgICAgZnJvbU5vZGVzTG9va3VwW2tleV0gPSBlbDtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIGluZGV4VHJlZShub2RlKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFIHx8IG5vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUkMSkge1xuICAgICAgICB2YXIgY3VyQ2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuICAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGN1ckNoaWxkKTtcbiAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGN1ckNoaWxkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFdhbGsgcmVjdXJzaXZlbHlcbiAgICAgICAgICBpbmRleFRyZWUoY3VyQ2hpbGQpO1xuXG4gICAgICAgICAgY3VyQ2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGluZGV4VHJlZShmcm9tTm9kZSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVOb2RlQWRkZWQoZWwpIHtcbiAgICAgIG9uTm9kZUFkZGVkKGVsKTtcblxuICAgICAgdmFyIGN1ckNoaWxkID0gZWwuZmlyc3RDaGlsZDtcbiAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSBjdXJDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShjdXJDaGlsZCk7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICB2YXIgdW5tYXRjaGVkRnJvbUVsID0gZnJvbU5vZGVzTG9va3VwW2tleV07XG4gICAgICAgICAgLy8gaWYgd2UgZmluZCBhIGR1cGxpY2F0ZSAjaWQgbm9kZSBpbiBjYWNoZSwgcmVwbGFjZSBgZWxgIHdpdGggY2FjaGUgdmFsdWVcbiAgICAgICAgICAvLyBhbmQgbW9ycGggaXQgdG8gdGhlIGNoaWxkIG5vZGUuXG4gICAgICAgICAgaWYgKHVubWF0Y2hlZEZyb21FbCAmJiBjb21wYXJlTm9kZU5hbWVzKGN1ckNoaWxkLCB1bm1hdGNoZWRGcm9tRWwpKSB7XG4gICAgICAgICAgICBjdXJDaGlsZC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh1bm1hdGNoZWRGcm9tRWwsIGN1ckNoaWxkKTtcbiAgICAgICAgICAgIG1vcnBoRWwodW5tYXRjaGVkRnJvbUVsLCBjdXJDaGlsZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHJlY3Vyc2l2ZWx5IGNhbGwgZm9yIGN1ckNoaWxkIGFuZCBpdCdzIGNoaWxkcmVuIHRvIHNlZSBpZiB3ZSBmaW5kIHNvbWV0aGluZyBpblxuICAgICAgICAgIC8vIGZyb21Ob2Rlc0xvb2t1cFxuICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJDaGlsZCA9IG5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBGcm9tRWwoZnJvbUVsLCBjdXJGcm9tTm9kZUNoaWxkLCBjdXJGcm9tTm9kZUtleSkge1xuICAgICAgLy8gV2UgaGF2ZSBwcm9jZXNzZWQgYWxsIG9mIHRoZSBcInRvIG5vZGVzXCIuIElmIGN1ckZyb21Ob2RlQ2hpbGQgaXNcbiAgICAgIC8vIG5vbi1udWxsIHRoZW4gd2Ugc3RpbGwgaGF2ZSBzb21lIGZyb20gbm9kZXMgbGVmdCBvdmVyIHRoYXQgbmVlZFxuICAgICAgLy8gdG8gYmUgcmVtb3ZlZFxuICAgICAgd2hpbGUgKGN1ckZyb21Ob2RlQ2hpbGQpIHtcbiAgICAgICAgdmFyIGZyb21OZXh0U2libGluZyA9IGN1ckZyb21Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIGlmICgoY3VyRnJvbU5vZGVLZXkgPSBnZXROb2RlS2V5KGN1ckZyb21Ob2RlQ2hpbGQpKSkge1xuICAgICAgICAgIC8vIFNpbmNlIHRoZSBub2RlIGlzIGtleWVkIGl0IG1pZ2h0IGJlIG1hdGNoZWQgdXAgbGF0ZXIgc28gd2UgZGVmZXJcbiAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICBhZGRLZXllZFJlbW92YWwoY3VyRnJvbU5vZGVLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgIC8vICAgICAgIHN0aWxsIGEgY2hhbmNlIHRoZXkgd2lsbCBiZSBtYXRjaGVkIHVwIGxhdGVyXG4gICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIHRydWUgLyogc2tpcCBrZXllZCBub2RlcyAqLyk7XG4gICAgICAgIH1cbiAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3JwaEVsKGZyb21FbCwgdG9FbCwgY2hpbGRyZW5Pbmx5KSB7XG4gICAgICB2YXIgdG9FbEtleSA9IGdldE5vZGVLZXkodG9FbCk7XG5cbiAgICAgIGlmICh0b0VsS2V5KSB7XG4gICAgICAgIC8vIElmIGFuIGVsZW1lbnQgd2l0aCBhbiBJRCBpcyBiZWluZyBtb3JwaGVkIHRoZW4gaXQgd2lsbCBiZSBpbiB0aGUgZmluYWxcbiAgICAgICAgLy8gRE9NIHNvIGNsZWFyIGl0IG91dCBvZiB0aGUgc2F2ZWQgZWxlbWVudHMgY29sbGVjdGlvblxuICAgICAgICBkZWxldGUgZnJvbU5vZGVzTG9va3VwW3RvRWxLZXldO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWNoaWxkcmVuT25seSkge1xuICAgICAgICAvLyBvcHRpb25hbFxuICAgICAgICBpZiAob25CZWZvcmVFbFVwZGF0ZWQoZnJvbUVsLCB0b0VsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgYXR0cmlidXRlcyBvbiBvcmlnaW5hbCBET00gZWxlbWVudCBmaXJzdFxuICAgICAgICBtb3JwaEF0dHJzKGZyb21FbCwgdG9FbCk7XG4gICAgICAgIC8vIG9wdGlvbmFsXG4gICAgICAgIG9uRWxVcGRhdGVkKGZyb21FbCk7XG5cbiAgICAgICAgaWYgKG9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWQoZnJvbUVsLCB0b0VsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZyb21FbC5ub2RlTmFtZSAhPT0gJ1RFWFRBUkVBJykge1xuICAgICAgICBtb3JwaENoaWxkcmVuKGZyb21FbCwgdG9FbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcGVjaWFsRWxIYW5kbGVycy5URVhUQVJFQShmcm9tRWwsIHRvRWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vcnBoQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKSB7XG4gICAgICB2YXIgc2tpcEZyb20gPSBza2lwRnJvbUNoaWxkcmVuKGZyb21FbCk7XG4gICAgICB2YXIgY3VyVG9Ob2RlQ2hpbGQgPSB0b0VsLmZpcnN0Q2hpbGQ7XG4gICAgICB2YXIgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgdmFyIGN1clRvTm9kZUtleTtcbiAgICAgIHZhciBjdXJGcm9tTm9kZUtleTtcblxuICAgICAgdmFyIGZyb21OZXh0U2libGluZztcbiAgICAgIHZhciB0b05leHRTaWJsaW5nO1xuICAgICAgdmFyIG1hdGNoaW5nRnJvbUVsO1xuXG4gICAgICAvLyB3YWxrIHRoZSBjaGlsZHJlblxuICAgICAgb3V0ZXI6IHdoaWxlIChjdXJUb05vZGVDaGlsZCkge1xuICAgICAgICB0b05leHRTaWJsaW5nID0gY3VyVG9Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIGN1clRvTm9kZUtleSA9IGdldE5vZGVLZXkoY3VyVG9Ob2RlQ2hpbGQpO1xuXG4gICAgICAgIC8vIHdhbGsgdGhlIGZyb21Ob2RlIGNoaWxkcmVuIGFsbCB0aGUgd2F5IHRocm91Z2hcbiAgICAgICAgd2hpbGUgKCFza2lwRnJvbSAmJiBjdXJGcm9tTm9kZUNoaWxkKSB7XG4gICAgICAgICAgZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgIGlmIChjdXJUb05vZGVDaGlsZC5pc1NhbWVOb2RlICYmIGN1clRvTm9kZUNoaWxkLmlzU2FtZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCkpIHtcbiAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gdG9OZXh0U2libGluZztcbiAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdXJGcm9tTm9kZUtleSA9IGdldE5vZGVLZXkoY3VyRnJvbU5vZGVDaGlsZCk7XG5cbiAgICAgICAgICB2YXIgY3VyRnJvbU5vZGVUeXBlID0gY3VyRnJvbU5vZGVDaGlsZC5ub2RlVHlwZTtcblxuICAgICAgICAgIC8vIHRoaXMgbWVhbnMgaWYgdGhlIGN1ckZyb21Ob2RlQ2hpbGQgZG9lc250IGhhdmUgYSBtYXRjaCB3aXRoIHRoZSBjdXJUb05vZGVDaGlsZFxuICAgICAgICAgIHZhciBpc0NvbXBhdGlibGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSBjdXJUb05vZGVDaGlsZC5ub2RlVHlwZSkge1xuICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIC8vIEJvdGggbm9kZXMgYmVpbmcgY29tcGFyZWQgYXJlIEVsZW1lbnQgbm9kZXNcblxuICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHRhcmdldCBub2RlIGhhcyBhIGtleSBzbyB3ZSB3YW50IHRvIG1hdGNoIGl0IHVwIHdpdGggdGhlIGNvcnJlY3QgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZVxuICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVLZXkgIT09IGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAvLyBUaGUgY3VycmVudCBlbGVtZW50IGluIHRoZSBvcmlnaW5hbCBET00gdHJlZSBkb2VzIG5vdCBoYXZlIGEgbWF0Y2hpbmcga2V5IHNvXG4gICAgICAgICAgICAgICAgICAvLyBsZXQncyBjaGVjayBvdXIgbG9va3VwIHRvIHNlZSBpZiB0aGVyZSBpcyBhIG1hdGNoaW5nIGVsZW1lbnQgaW4gdGhlIG9yaWdpbmFsXG4gICAgICAgICAgICAgICAgICAvLyBET00gdHJlZVxuICAgICAgICAgICAgICAgICAgaWYgKChtYXRjaGluZ0Zyb21FbCA9IGZyb21Ob2Rlc0xvb2t1cFtjdXJUb05vZGVLZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbU5leHRTaWJsaW5nID09PSBtYXRjaGluZ0Zyb21FbCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3Igc2luZ2xlIGVsZW1lbnQgcmVtb3ZhbHMuIFRvIGF2b2lkIHJlbW92aW5nIHRoZSBvcmlnaW5hbFxuICAgICAgICAgICAgICAgICAgICAgIC8vIERPTSBub2RlIG91dCBvZiB0aGUgdHJlZSAoc2luY2UgdGhhdCBjYW4gYnJlYWsgQ1NTIHRyYW5zaXRpb25zLCBldGMuKSxcbiAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3aWxsIGluc3RlYWQgZGlzY2FyZCB0aGUgY3VycmVudCBub2RlIGFuZCB3YWl0IHVudGlsIHRoZSBuZXh0XG4gICAgICAgICAgICAgICAgICAgICAgLy8gaXRlcmF0aW9uIHRvIHByb3Blcmx5IG1hdGNoIHVwIHRoZSBrZXllZCB0YXJnZXQgZWxlbWVudCB3aXRoIGl0cyBtYXRjaGluZ1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQgaW4gdGhlIG9yaWdpbmFsIHRyZWVcbiAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBmb3VuZCBhIG1hdGNoaW5nIGtleWVkIGVsZW1lbnQgc29tZXdoZXJlIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBMZXQncyBtb3ZlIHRoZSBvcmlnaW5hbCBET00gbm9kZSBpbnRvIHRoZSBjdXJyZW50IHBvc2l0aW9uIGFuZCBtb3JwaFxuICAgICAgICAgICAgICAgICAgICAgIC8vIGl0LlxuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogV2UgdXNlIGluc2VydEJlZm9yZSBpbnN0ZWFkIG9mIHJlcGxhY2VDaGlsZCBiZWNhdXNlIHdlIHdhbnQgdG8gZ28gdGhyb3VnaFxuICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBgcmVtb3ZlTm9kZSgpYCBmdW5jdGlvbiBmb3IgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBkaXNjYXJkZWQgc28gdGhhdFxuICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbCBsaWZlY3ljbGUgaG9va3MgYXJlIGNvcnJlY3RseSBpbnZva2VkXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbUVsLmluc2VydEJlZm9yZShtYXRjaGluZ0Zyb21FbCwgY3VyRnJvbU5vZGVDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tTmV4dFNpYmxpbmcgPSBjdXJGcm9tTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGUgbm9kZSBpcyBrZXllZCBpdCBtaWdodCBiZSBtYXRjaGVkIHVwIGxhdGVyIHNvIHdlIGRlZmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgc3RpbGwgYSBjaGFuY2UgdGhleSB3aWxsIGJlIG1hdGNoZWQgdXAgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCwgZnJvbUVsLCB0cnVlIC8qIHNraXAga2V5ZWQgbm9kZXMgKi8pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBtYXRjaGluZ0Zyb21FbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG5vZGVzIGFyZSBub3QgY29tcGF0aWJsZSBzaW5jZSB0aGUgXCJ0b1wiIG5vZGUgaGFzIGEga2V5IGFuZCB0aGVyZVxuICAgICAgICAgICAgICAgICAgICAvLyBpcyBubyBtYXRjaGluZyBrZXllZCBub2RlIGluIHRoZSBzb3VyY2UgdHJlZVxuICAgICAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgb3JpZ2luYWwgaGFzIGEga2V5XG4gICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSBpc0NvbXBhdGlibGUgIT09IGZhbHNlICYmIGNvbXBhcmVOb2RlTmFtZXMoY3VyRnJvbU5vZGVDaGlsZCwgY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICBpZiAoaXNDb21wYXRpYmxlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZm91bmQgY29tcGF0aWJsZSBET00gZWxlbWVudHMgc28gdHJhbnNmb3JtXG4gICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgXCJmcm9tXCIgbm9kZSB0byBtYXRjaCB0aGUgY3VycmVudFxuICAgICAgICAgICAgICAgIC8vIHRhcmdldCBET00gbm9kZS5cbiAgICAgICAgICAgICAgICAvLyBNT1JQSFxuICAgICAgICAgICAgICAgIG1vcnBoRWwoY3VyRnJvbU5vZGVDaGlsZCwgY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSBURVhUX05PREUgfHwgY3VyRnJvbU5vZGVUeXBlID09IENPTU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAvLyBCb3RoIG5vZGVzIGJlaW5nIGNvbXBhcmVkIGFyZSBUZXh0IG9yIENvbW1lbnQgbm9kZXNcbiAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgLy8gU2ltcGx5IHVwZGF0ZSBub2RlVmFsdWUgb24gdGhlIG9yaWdpbmFsIG5vZGUgdG9cbiAgICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSB0ZXh0IHZhbHVlXG4gICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZUNoaWxkLm5vZGVWYWx1ZSAhPT0gY3VyVG9Ob2RlQ2hpbGQubm9kZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZC5ub2RlVmFsdWUgPSBjdXJUb05vZGVDaGlsZC5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0NvbXBhdGlibGUpIHtcbiAgICAgICAgICAgIC8vIEFkdmFuY2UgYm90aCB0aGUgXCJ0b1wiIGNoaWxkIGFuZCB0aGUgXCJmcm9tXCIgY2hpbGQgc2luY2Ugd2UgZm91bmQgYSBtYXRjaFxuICAgICAgICAgICAgLy8gTm90aGluZyBlbHNlIHRvIGRvIGFzIHdlIGFscmVhZHkgcmVjdXJzaXZlbHkgY2FsbGVkIG1vcnBoQ2hpbGRyZW4gYWJvdmVcbiAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gdG9OZXh0U2libGluZztcbiAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBObyBjb21wYXRpYmxlIG1hdGNoIHNvIHJlbW92ZSB0aGUgb2xkIG5vZGUgZnJvbSB0aGUgRE9NIGFuZCBjb250aW51ZSB0cnlpbmcgdG8gZmluZCBhXG4gICAgICAgICAgLy8gbWF0Y2ggaW4gdGhlIG9yaWdpbmFsIERPTS4gSG93ZXZlciwgd2Ugb25seSBkbyB0aGlzIGlmIHRoZSBmcm9tIG5vZGUgaXMgbm90IGtleWVkXG4gICAgICAgICAgLy8gc2luY2UgaXQgaXMgcG9zc2libGUgdGhhdCBhIGtleWVkIG5vZGUgbWlnaHQgbWF0Y2ggdXAgd2l0aCBhIG5vZGUgc29tZXdoZXJlIGVsc2UgaW4gdGhlXG4gICAgICAgICAgLy8gdGFyZ2V0IHRyZWUgYW5kIHdlIGRvbid0IHdhbnQgdG8gZGlzY2FyZCBpdCBqdXN0IHlldCBzaW5jZSBpdCBzdGlsbCBtaWdodCBmaW5kIGFcbiAgICAgICAgICAvLyBob21lIGluIHRoZSBmaW5hbCBET00gdHJlZS4gQWZ0ZXIgZXZlcnl0aGluZyBpcyBkb25lIHdlIHdpbGwgcmVtb3ZlIGFueSBrZXllZCBub2Rlc1xuICAgICAgICAgIC8vIHRoYXQgZGlkbid0IGZpbmQgYSBob21lXG4gICAgICAgICAgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAvLyBTaW5jZSB0aGUgbm9kZSBpcyBrZXllZCBpdCBtaWdodCBiZSBtYXRjaGVkIHVwIGxhdGVyIHNvIHdlIGRlZmVyXG4gICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgICAgLy8gICAgICAgc3RpbGwgYSBjaGFuY2UgdGhleSB3aWxsIGJlIG1hdGNoZWQgdXAgbGF0ZXJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCwgZnJvbUVsLCB0cnVlIC8qIHNraXAga2V5ZWQgbm9kZXMgKi8pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgIH0gLy8gRU5EOiB3aGlsZShjdXJGcm9tTm9kZUNoaWxkKSB7fVxuXG4gICAgICAgIC8vIElmIHdlIGdvdCB0aGlzIGZhciB0aGVuIHdlIGRpZCBub3QgZmluZCBhIGNhbmRpZGF0ZSBtYXRjaCBmb3JcbiAgICAgICAgLy8gb3VyIFwidG8gbm9kZVwiIGFuZCB3ZSBleGhhdXN0ZWQgYWxsIG9mIHRoZSBjaGlsZHJlbiBcImZyb21cIlxuICAgICAgICAvLyBub2Rlcy4gVGhlcmVmb3JlLCB3ZSB3aWxsIGp1c3QgYXBwZW5kIHRoZSBjdXJyZW50IFwidG9cIiBub2RlXG4gICAgICAgIC8vIHRvIHRoZSBlbmRcbiAgICAgICAgaWYgKGN1clRvTm9kZUtleSAmJiAobWF0Y2hpbmdGcm9tRWwgPSBmcm9tTm9kZXNMb29rdXBbY3VyVG9Ob2RlS2V5XSkgJiYgY29tcGFyZU5vZGVOYW1lcyhtYXRjaGluZ0Zyb21FbCwgY3VyVG9Ob2RlQ2hpbGQpKSB7XG4gICAgICAgICAgLy8gTU9SUEhcbiAgICAgICAgICBpZighc2tpcEZyb20peyBhZGRDaGlsZChmcm9tRWwsIG1hdGNoaW5nRnJvbUVsKTsgfVxuICAgICAgICAgIG1vcnBoRWwobWF0Y2hpbmdGcm9tRWwsIGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgb25CZWZvcmVOb2RlQWRkZWRSZXN1bHQgPSBvbkJlZm9yZU5vZGVBZGRlZChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgaWYgKG9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKG9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0KSB7XG4gICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gb25CZWZvcmVOb2RlQWRkZWRSZXN1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXJUb05vZGVDaGlsZC5hY3R1YWxpemUpIHtcbiAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSBjdXJUb05vZGVDaGlsZC5hY3R1YWxpemUoZnJvbUVsLm93bmVyRG9jdW1lbnQgfHwgZG9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZENoaWxkKGZyb21FbCwgY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgaGFuZGxlTm9kZUFkZGVkKGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIGNsZWFudXBGcm9tRWwoZnJvbUVsLCBjdXJGcm9tTm9kZUNoaWxkLCBjdXJGcm9tTm9kZUtleSk7XG5cbiAgICAgIHZhciBzcGVjaWFsRWxIYW5kbGVyID0gc3BlY2lhbEVsSGFuZGxlcnNbZnJvbUVsLm5vZGVOYW1lXTtcbiAgICAgIGlmIChzcGVjaWFsRWxIYW5kbGVyKSB7XG4gICAgICAgIHNwZWNpYWxFbEhhbmRsZXIoZnJvbUVsLCB0b0VsKTtcbiAgICAgIH1cbiAgICB9IC8vIEVORDogbW9ycGhDaGlsZHJlbiguLi4pXG5cbiAgICB2YXIgbW9ycGhlZE5vZGUgPSBmcm9tTm9kZTtcbiAgICB2YXIgbW9ycGhlZE5vZGVUeXBlID0gbW9ycGhlZE5vZGUubm9kZVR5cGU7XG4gICAgdmFyIHRvTm9kZVR5cGUgPSB0b05vZGUubm9kZVR5cGU7XG5cbiAgICBpZiAoIWNoaWxkcmVuT25seSkge1xuICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZXJlIHdlIGFyZSBnaXZlbiB0d28gRE9NIG5vZGVzIHRoYXQgYXJlIG5vdFxuICAgICAgLy8gY29tcGF0aWJsZSAoZS5nLiA8ZGl2PiAtLT4gPHNwYW4+IG9yIDxkaXY+IC0tPiBURVhUKVxuICAgICAgaWYgKG1vcnBoZWROb2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmICh0b05vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgICBpZiAoIWNvbXBhcmVOb2RlTmFtZXMoZnJvbU5vZGUsIHRvTm9kZSkpIHtcbiAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChmcm9tTm9kZSk7XG4gICAgICAgICAgICBtb3JwaGVkTm9kZSA9IG1vdmVDaGlsZHJlbihmcm9tTm9kZSwgY3JlYXRlRWxlbWVudE5TKHRvTm9kZS5ub2RlTmFtZSwgdG9Ob2RlLm5hbWVzcGFjZVVSSSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBHb2luZyBmcm9tIGFuIGVsZW1lbnQgbm9kZSB0byBhIHRleHQgbm9kZVxuICAgICAgICAgIG1vcnBoZWROb2RlID0gdG9Ob2RlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG1vcnBoZWROb2RlVHlwZSA9PT0gVEVYVF9OT0RFIHx8IG1vcnBoZWROb2RlVHlwZSA9PT0gQ09NTUVOVF9OT0RFKSB7IC8vIFRleHQgb3IgY29tbWVudCBub2RlXG4gICAgICAgIGlmICh0b05vZGVUeXBlID09PSBtb3JwaGVkTm9kZVR5cGUpIHtcbiAgICAgICAgICBpZiAobW9ycGhlZE5vZGUubm9kZVZhbHVlICE9PSB0b05vZGUubm9kZVZhbHVlKSB7XG4gICAgICAgICAgICBtb3JwaGVkTm9kZS5ub2RlVmFsdWUgPSB0b05vZGUubm9kZVZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBtb3JwaGVkTm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUZXh0IG5vZGUgdG8gc29tZXRoaW5nIGVsc2VcbiAgICAgICAgICBtb3JwaGVkTm9kZSA9IHRvTm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtb3JwaGVkTm9kZSA9PT0gdG9Ob2RlKSB7XG4gICAgICAvLyBUaGUgXCJ0byBub2RlXCIgd2FzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIFwiZnJvbSBub2RlXCIgc28gd2UgaGFkIHRvXG4gICAgICAvLyB0b3NzIG91dCB0aGUgXCJmcm9tIG5vZGVcIiBhbmQgdXNlIHRoZSBcInRvIG5vZGVcIlxuICAgICAgb25Ob2RlRGlzY2FyZGVkKGZyb21Ob2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRvTm9kZS5pc1NhbWVOb2RlICYmIHRvTm9kZS5pc1NhbWVOb2RlKG1vcnBoZWROb2RlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG1vcnBoRWwobW9ycGhlZE5vZGUsIHRvTm9kZSwgY2hpbGRyZW5Pbmx5KTtcblxuICAgICAgLy8gV2Ugbm93IG5lZWQgdG8gbG9vcCBvdmVyIGFueSBrZXllZCBub2RlcyB0aGF0IG1pZ2h0IG5lZWQgdG8gYmVcbiAgICAgIC8vIHJlbW92ZWQuIFdlIG9ubHkgZG8gdGhlIHJlbW92YWwgaWYgd2Uga25vdyB0aGF0IHRoZSBrZXllZCBub2RlXG4gICAgICAvLyBuZXZlciBmb3VuZCBhIG1hdGNoLiBXaGVuIGEga2V5ZWQgbm9kZSBpcyBtYXRjaGVkIHVwIHdlIHJlbW92ZVxuICAgICAgLy8gaXQgb3V0IG9mIGZyb21Ob2Rlc0xvb2t1cCBhbmQgd2UgdXNlIGZyb21Ob2Rlc0xvb2t1cCB0byBkZXRlcm1pbmVcbiAgICAgIC8vIGlmIGEga2V5ZWQgbm9kZSBoYXMgYmVlbiBtYXRjaGVkIHVwIG9yIG5vdFxuICAgICAgaWYgKGtleWVkUmVtb3ZhbExpc3QpIHtcbiAgICAgICAgZm9yICh2YXIgaT0wLCBsZW49a2V5ZWRSZW1vdmFsTGlzdC5sZW5ndGg7IGk8bGVuOyBpKyspIHtcbiAgICAgICAgICB2YXIgZWxUb1JlbW92ZSA9IGZyb21Ob2Rlc0xvb2t1cFtrZXllZFJlbW92YWxMaXN0W2ldXTtcbiAgICAgICAgICBpZiAoZWxUb1JlbW92ZSkge1xuICAgICAgICAgICAgcmVtb3ZlTm9kZShlbFRvUmVtb3ZlLCBlbFRvUmVtb3ZlLnBhcmVudE5vZGUsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNoaWxkcmVuT25seSAmJiBtb3JwaGVkTm9kZSAhPT0gZnJvbU5vZGUgJiYgZnJvbU5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgaWYgKG1vcnBoZWROb2RlLmFjdHVhbGl6ZSkge1xuICAgICAgICBtb3JwaGVkTm9kZSA9IG1vcnBoZWROb2RlLmFjdHVhbGl6ZShmcm9tTm9kZS5vd25lckRvY3VtZW50IHx8IGRvYyk7XG4gICAgICB9XG4gICAgICAvLyBJZiB3ZSBoYWQgdG8gc3dhcCBvdXQgdGhlIGZyb20gbm9kZSB3aXRoIGEgbmV3IG5vZGUgYmVjYXVzZSB0aGUgb2xkXG4gICAgICAvLyBub2RlIHdhcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoZSB0YXJnZXQgbm9kZSB0aGVuIHdlIG5lZWQgdG9cbiAgICAgIC8vIHJlcGxhY2UgdGhlIG9sZCBET00gbm9kZSBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUuIFRoaXMgaXMgb25seVxuICAgICAgLy8gcG9zc2libGUgaWYgdGhlIG9yaWdpbmFsIERPTSBub2RlIHdhcyBwYXJ0IG9mIGEgRE9NIHRyZWUgd2hpY2hcbiAgICAgIC8vIHdlIGtub3cgaXMgdGhlIGNhc2UgaWYgaXQgaGFzIGEgcGFyZW50IG5vZGUuXG4gICAgICBmcm9tTm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtb3JwaGVkTm9kZSwgZnJvbU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtb3JwaGVkTm9kZTtcbiAgfTtcbn1cblxudmFyIG1vcnBoZG9tID0gbW9ycGhkb21GYWN0b3J5KG1vcnBoQXR0cnMpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihlbGVtZW50KSB7XG4gICAgY29uc3QgaXNGaWxlSW5wdXQgPSBlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJztcbiAgICBpZiAoIWlzRmlsZUlucHV0KSB7XG4gICAgICAgIGlmICgndmFsdWUnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihjaGlsZCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVNb3JwaGRvbShyb290RnJvbUVsZW1lbnQsIHJvb3RUb0VsZW1lbnQsIG1vZGlmaWVkRmllbGRFbGVtZW50cywgZ2V0RWxlbWVudFZhbHVlLCBjaGlsZENvbXBvbmVudHMsIGZpbmRDaGlsZENvbXBvbmVudCwgZ2V0S2V5RnJvbUVsZW1lbnQsIGV4dGVybmFsTXV0YXRpb25UcmFja2VyKSB7XG4gICAgY29uc3QgY2hpbGRDb21wb25lbnRNYXAgPSBuZXcgTWFwKCk7XG4gICAgY2hpbGRDb21wb25lbnRzLmZvckVhY2goKGNoaWxkQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGNoaWxkQ29tcG9uZW50TWFwLnNldChjaGlsZENvbXBvbmVudC5lbGVtZW50LCBjaGlsZENvbXBvbmVudCk7XG4gICAgfSk7XG4gICAgbW9ycGhkb20ocm9vdEZyb21FbGVtZW50LCByb290VG9FbGVtZW50LCB7XG4gICAgICAgIGdldE5vZGVLZXk6IChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV4dGVybmFsTXV0YXRpb25UcmFja2VyLndhc0VsZW1lbnRBZGRlZChub2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnYWRkZWRfZWxlbWVudF8nICsgTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRLZXlGcm9tRWxlbWVudChub2RlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CZWZvcmVFbFVwZGF0ZWQ6IChmcm9tRWwsIHRvRWwpID0+IHtcbiAgICAgICAgICAgIGlmIChmcm9tRWwgPT09IHJvb3RGcm9tRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZyb21FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHRvRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZnJvbUVsLl9feCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuQWxwaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBhY2Nlc3MgQWxwaW5lLmpzIHRob3VnaCB0aGUgZ2xvYmFsIHdpbmRvdy5BbHBpbmUgdmFyaWFibGUuIFBsZWFzZSBtYWtlIHN1cmUgQWxwaW5lLmpzIGlzIGxvYWRlZCBiZWZvcmUgU3ltZm9ueSBVWCBMaXZlQ29tcG9uZW50LicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93LkFscGluZS5tb3JwaCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gYWNjZXNzIEFscGluZS5qcyBtb3JwaCBmdW5jdGlvbi4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgQWxwaW5lLmpzIE1vcnBoIHBsdWdpbiBpcyBpbnN0YWxsZWQgYW5kIGxvYWRlZCwgc2VlIGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvbW9ycGggZm9yIG1vcmUgaW5mb3JtYXRpb24uJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LkFscGluZS5tb3JwaChmcm9tRWwuX194LCB0b0VsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50TWFwLmhhcyhmcm9tRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50ID0gY2hpbGRDb21wb25lbnRNYXAuZ2V0KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50LnVwZGF0ZUZyb21OZXdFbGVtZW50RnJvbVBhcmVudFJlbmRlcih0b0VsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobW9kaWZpZWRGaWVsZEVsZW1lbnRzLmluY2x1ZGVzKGZyb21FbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQodG9FbCwgZ2V0RWxlbWVudFZhbHVlKGZyb21FbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50Q2hhbmdlcyA9IGV4dGVybmFsTXV0YXRpb25UcmFja2VyLmdldENoYW5nZWRFbGVtZW50KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFwcGx5VG9FbGVtZW50KHRvRWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZnJvbUVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdPUFRJT04nICYmIGZyb21FbC5pc0VxdWFsTm9kZSh0b0VsKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxpemVkRnJvbUVsID0gY2xvbmVIVE1MRWxlbWVudChmcm9tRWwpO1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkRnJvbUVsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFRvRWwgPSBjbG9uZUhUTUxFbGVtZW50KHRvRWwpO1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkVG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkRnJvbUVsLmlzRXF1YWxOb2RlKG5vcm1hbGl6ZWRUb0VsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFmcm9tRWwuaGFzQXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVmb3JlTm9kZURpc2NhcmRlZChub2RlKSB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIud2FzRWxlbWVudEFkZGVkKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFub2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScpO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5jbGFzcyBVbnN5bmNlZElucHV0c1RyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCwgbW9kZWxFbGVtZW50UmVzb2x2ZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgICB7IGV2ZW50OiAnaW5wdXQnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIH0sXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLm1vZGVsRWxlbWVudFJlc29sdmVyID0gbW9kZWxFbGVtZW50UmVzb2x2ZXI7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMgPSBuZXcgVW5zeW5jZWRJbnB1dENvbnRhaW5lcigpO1xuICAgIH1cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudCh0YXJnZXQpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCB1cGRhdGUgbW9kZWwgZm9yIG5vbiBIVE1MRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIuZ2V0TW9kZWxOYW1lKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLmFkZChlbGVtZW50LCBtb2RlbE5hbWUpO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZElucHV0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHMuYWxsVW5zeW5jZWRJbnB1dHMoKTtcbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbHMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMudW5zeW5jZWRJbnB1dHMuZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkpO1xuICAgIH1cbiAgICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLnJlc2V0VW5zeW5jZWRGaWVsZHMoKTtcbiAgICB9XG59XG5jbGFzcyBVbnN5bmNlZElucHV0Q29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzID0gW107XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzID0gW107XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSA9IG51bGwpIHtcbiAgICAgICAgaWYgKG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLnNldChtb2RlbE5hbWUsIGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMucHVzaChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWxsVW5zeW5jZWRJbnB1dHMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLCAuLi50aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMudmFsdWVzKCldO1xuICAgIH1cbiAgICBtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmRleE9mKG1vZGVsTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXM7XG4gICAgfVxufVxuXG5jbGFzcyBIb29rTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgaG9va3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHRoaXMuaG9va3Muc2V0KGhvb2tOYW1lLCBob29rcyk7XG4gICAgfVxuICAgIHVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBjb25zdCBpbmRleCA9IGhvb2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaG9va3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcbiAgICB9XG4gICAgdHJpZ2dlckhvb2soaG9va05hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGhvb2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBCYWNrZW5kUmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKHJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0Qm9keSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keSA9IGF3YWl0IHRoaXMucmVzcG9uc2UudGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHk7XG4gICAgfVxufVxuXG5jbGFzcyBDaGFuZ2luZ0l0ZW1zVHJhY2tlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgc2V0SXRlbShpdGVtTmFtZSwgbmV3VmFsdWUsIHByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMucmVtb3ZlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZWRSZWNvcmQgPSB0aGlzLnJlbW92ZWRJdGVtcy5nZXQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGlmIChyZW1vdmVkUmVjb3JkLm9yaWdpbmFsID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZWNvcmQgPSB0aGlzLmNoYW5nZWRJdGVtcy5nZXQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsUmVjb3JkLm9yaWdpbmFsID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiBvcmlnaW5hbFJlY29yZC5vcmlnaW5hbCwgbmV3OiBuZXdWYWx1ZSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5zZXQoaXRlbU5hbWUsIHsgb3JpZ2luYWw6IHByZXZpb3VzVmFsdWUsIG5ldzogbmV3VmFsdWUgfSk7XG4gICAgfVxuICAgIHJlbW92ZUl0ZW0oaXRlbU5hbWUsIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICBsZXQgdHJ1ZU9yaWdpbmFsVmFsdWUgPSBjdXJyZW50VmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlY29yZCA9IHRoaXMuY2hhbmdlZEl0ZW1zLmdldChpdGVtTmFtZSk7XG4gICAgICAgICAgICB0cnVlT3JpZ2luYWxWYWx1ZSA9IG9yaWdpbmFsUmVjb3JkLm9yaWdpbmFsO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGlmICh0cnVlT3JpZ2luYWxWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmVtb3ZlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZEl0ZW1zLnNldChpdGVtTmFtZSwgeyBvcmlnaW5hbDogdHJ1ZU9yaWdpbmFsVmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q2hhbmdlZEl0ZW1zKCkge1xuICAgICAgICBjb25zdCBjaGFuZ2VkSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlZEl0ZW1zLnB1c2goeyBuYW1lOiBrZXksIHZhbHVlOiB2YWx1ZS5uZXcgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2hhbmdlZEl0ZW1zO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkSXRlbXMoKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICByZW1vdmVkSXRlbXMucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlbW92ZWRJdGVtcztcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlZEl0ZW1zLnNpemUgPT09IDAgJiYgdGhpcy5yZW1vdmVkSXRlbXMuc2l6ZSA9PT0gMDtcbiAgICB9XG59XG5cbmNsYXNzIEVsZW1lbnRDaGFuZ2VzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMgPSBbXTtcbiAgICAgICAgdGhpcy5yZW1vdmVkQ2xhc3NlcyA9IFtdO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcyA9IG5ldyBDaGFuZ2luZ0l0ZW1zVHJhY2tlcigpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMgPSBuZXcgQ2hhbmdpbmdJdGVtc1RyYWNrZXIoKTtcbiAgICB9XG4gICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbW92ZWRDbGFzc2VzLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMgPSB0aGlzLnJlbW92ZWRDbGFzc2VzLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYWRkZWRDbGFzc2VzLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkZWRDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRkZWRDbGFzc2VzLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkZWRDbGFzc2VzID0gdGhpcy5hZGRlZENsYXNzZXMuZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9PSBjbGFzc05hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yZW1vdmVkQ2xhc3Nlcy5pbmNsdWRlcyhjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRTdHlsZShzdHlsZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLnNldEl0ZW0oc3R5bGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIHJlbW92ZVN0eWxlKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5yZW1vdmVJdGVtKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuc2V0SXRlbShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIHJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5yZW1vdmVJdGVtKGF0dHJpYnV0ZU5hbWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICBnZXRBZGRlZENsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZGVkQ2xhc3NlcztcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZENsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZWRDbGFzc2VzO1xuICAgIH1cbiAgICBnZXRDaGFuZ2VkU3R5bGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHlsZUNoYW5nZXMuZ2V0Q2hhbmdlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGdldFJlbW92ZWRTdHlsZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKTtcbiAgICB9XG4gICAgZ2V0Q2hhbmdlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0Q2hhbmdlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGdldFJlbW92ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpO1xuICAgIH1cbiAgICBhcHBseVRvRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuYWRkZWRDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbW92ZWRDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKS5mb3JFYWNoKChzdHlsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGNoYW5nZS5uYW1lLCBjaGFuZ2UudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKGF0dHJpYnV0ZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmFkZGVkQ2xhc3Nlcy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5pc0VtcHR5KCkgJiZcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5pc0VtcHR5KCkpO1xuICAgIH1cbn1cblxuY2xhc3MgRXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHMgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5hZGRlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMucmVtb3ZlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayA9IHNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMub25NdXRhdGlvbnMuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IHRydWU7XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q2hhbmdlZEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VkRWxlbWVudHMuaGFzKGVsZW1lbnQpID8gdGhpcy5jaGFuZ2VkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIDogbnVsbDtcbiAgICB9XG4gICAgZ2V0QWRkZWRFbGVtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkZWRFbGVtZW50cztcbiAgICB9XG4gICAgd2FzRWxlbWVudEFkZGVkKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkZWRFbGVtZW50cy5pbmNsdWRlcyhlbGVtZW50KTtcbiAgICB9XG4gICAgaGFuZGxlUGVuZGluZ0NoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMub25NdXRhdGlvbnModGhpcy5tdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuICAgIH1cbiAgICBvbk11dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2soZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYWRkZWRFbGVtZW50IG9mIHRoaXMuYWRkZWRFbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChhZGRlZEVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0NoYW5nZUluQWRkZWRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKG11dGF0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjaGlsZExpc3QnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuc2V0KGVsZW1lbnQsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuZ2V0KGVsZW1lbnQpLmluY2x1ZGVzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuc2V0KGVsZW1lbnQsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5oYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmdldChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDaGlsZExpc3RNdXRhdGlvbihtdXRhdGlvbikge1xuICAgICAgICBtdXRhdGlvbi5hZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlZEVsZW1lbnRzLnNwbGljZSh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24obm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG11dGF0aW9uLnJlbW92ZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hZGRlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRlZEVsZW1lbnRzLnNwbGljZSh0aGlzLmFkZGVkRWxlbWVudHMuaW5kZXhPZihub2RlKSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGlmICghdGhpcy5jaGFuZ2VkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgbmV3IEVsZW1lbnRDaGFuZ2VzKCkpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHNDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoYW5nZWRFbGVtZW50ID0gdGhpcy5jaGFuZ2VkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBzd2l0Y2ggKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNsYXNzQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlZEVsZW1lbnQuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50LS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlO1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlcyA9IHByZXZpb3VzVmFsdWUgPyBwcmV2aW91c1ZhbHVlLnNwbGl0KCcgJykgOiBbXTtcbiAgICAgICAgcHJldmlvdXNWYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmltbWVkVmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gICAgICAgICAgICBpZiAodHJpbW1lZFZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzVmFsdWVzW2luZGV4XSA9IHRyaW1tZWRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzVmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZXMgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnQuY2xhc3NMaXN0KTtcbiAgICAgICAgY29uc3QgYWRkZWRWYWx1ZXMgPSBuZXdWYWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gIXByZXZpb3VzVmFsdWVzLmluY2x1ZGVzKHZhbHVlKSk7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRWYWx1ZXMgPSBwcmV2aW91c1ZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiAhbmV3VmFsdWVzLmluY2x1ZGVzKHZhbHVlKSk7XG4gICAgICAgIGFkZGVkVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5hZGRDbGFzcyh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVkVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5yZW1vdmVDbGFzcyh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVTdHlsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWUgfHwgJyc7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzU3R5bGVzID0gdGhpcy5leHRyYWN0U3R5bGVzKHByZXZpb3VzVmFsdWUpO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpIHx8ICcnO1xuICAgICAgICBjb25zdCBuZXdTdHlsZXMgPSB0aGlzLmV4dHJhY3RTdHlsZXMobmV3VmFsdWUpO1xuICAgICAgICBjb25zdCBhZGRlZE9yQ2hhbmdlZFN0eWxlcyA9IE9iamVjdC5rZXlzKG5ld1N0eWxlcykuZmlsdGVyKChrZXkpID0+IHByZXZpb3VzU3R5bGVzW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwcmV2aW91c1N0eWxlc1trZXldICE9PSBuZXdTdHlsZXNba2V5XSk7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRTdHlsZXMgPSBPYmplY3Qua2V5cyhwcmV2aW91c1N0eWxlcykuZmlsdGVyKChrZXkpID0+ICFuZXdTdHlsZXNba2V5XSk7XG4gICAgICAgIGFkZGVkT3JDaGFuZ2VkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5hZGRTdHlsZShzdHlsZSwgbmV3U3R5bGVzW3N0eWxlXSwgcHJldmlvdXNTdHlsZXNbc3R5bGVdID09PSB1bmRlZmluZWQgPyBudWxsIDogcHJldmlvdXNTdHlsZXNbc3R5bGVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZWRTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLnJlbW92ZVN0eWxlKHN0eWxlLCBwcmV2aW91c1N0eWxlc1tzdHlsZV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlR2VuZXJpY0F0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gbXV0YXRpb24uYXR0cmlidXRlTmFtZTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWU7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICBpZiAob2xkVmFsdWUgPT09IGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBtdXRhdGlvbi5vbGRWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSwgbXV0YXRpb24ub2xkVmFsdWUpO1xuICAgIH1cbiAgICBleHRyYWN0U3R5bGVzKHN0eWxlcykge1xuICAgICAgICBjb25zdCBzdHlsZU9iamVjdCA9IHt9O1xuICAgICAgICBzdHlsZXMuc3BsaXQoJzsnKS5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydHMgPSBzdHlsZS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gcGFydHNbMF0udHJpbSgpO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbcHJvcGVydHldID0gcGFydHMuc2xpY2UoMSkuam9pbignOicpLnRyaW0oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgICB9XG4gICAgaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudGFnTmFtZSA9PT0gJ0ZPTlQnICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpID09PSAndmVydGljYWwtYWxpZ246IGluaGVyaXQ7JztcbiAgICB9XG59XG5cbmNsYXNzIENoaWxkQ29tcG9uZW50V3JhcHBlciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50LCBtb2RlbEJpbmRpbmdzKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLm1vZGVsQmluZGluZ3MgPSBtb2RlbEJpbmRpbmdzO1xuICAgIH1cbn1cbmNsYXNzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgcHJvcHMsIGxpc3RlbmVycywgY29tcG9uZW50RmluZGVyLCBmaW5nZXJwcmludCwgaWQsIGJhY2tlbmQsIGVsZW1lbnREcml2ZXIpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0RGVib3VuY2UgPSAxNTA7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMucGVuZGluZ0ZpbGVzID0ge307XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29tcG9uZW50RmluZGVyID0gY29tcG9uZW50RmluZGVyO1xuICAgICAgICB0aGlzLmJhY2tlbmQgPSBiYWNrZW5kO1xuICAgICAgICB0aGlzLmVsZW1lbnREcml2ZXIgPSBlbGVtZW50RHJpdmVyO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZmluZ2VycHJpbnQgPSBmaW5nZXJwcmludDtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobGlzdGVuZXIuZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc2V0KGxpc3RlbmVyLmV2ZW50LCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2EgPSB0aGlzLmxpc3RlbmVycy5nZXQobGlzdGVuZXIuZXZlbnQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHVzaChsaXN0ZW5lci5hY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlID0gbmV3IFZhbHVlU3RvcmUocHJvcHMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlciA9IG5ldyBVbnN5bmNlZElucHV0c1RyYWNrZXIodGhpcywgZWxlbWVudERyaXZlcik7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgSG9va01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlciA9IG5ldyBFeHRlcm5hbE11dGF0aW9uVHJhY2tlcih0aGlzLmVsZW1lbnQsIChlbGVtZW50KSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzKSk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5vbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUgPSB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBfc3dhcEJhY2tlbmQoYmFja2VuZCkge1xuICAgICAgICB0aGlzLmJhY2tlbmQgPSBiYWNrZW5kO1xuICAgIH1cbiAgICBhZGRQbHVnaW4ocGx1Z2luKSB7XG4gICAgICAgIHBsdWdpbi5hdHRhY2hUb0NvbXBvbmVudCh0aGlzKTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnY29ubmVjdCcsIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5hY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2Rpc2Nvbm5lY3QnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcbiAgICB9XG4gICAgb24oaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaG9va3MucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgb2ZmKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmhvb2tzLnVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc2V0KG1vZGVsLCB2YWx1ZSwgcmVSZW5kZXIgPSBmYWxzZSwgZGVib3VuY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZWwgbmFtZSBcIiR7bW9kZWx9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNDaGFuZ2VkID0gdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbW9kZWw6c2V0JywgbW9kZWwsIHZhbHVlLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIubWFya01vZGVsQXNTeW5jZWQobW9kZWxOYW1lKTtcbiAgICAgICAgaWYgKHJlUmVuZGVyICYmIGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBnZXREYXRhKG1vZGVsKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZWwgXCIke21vZGVsfVwiLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGFjdGlvbihuYW1lLCBhcmdzID0ge30sIGRlYm91bmNlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGFyZ3NcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGZpbGVzKGtleSwgaW5wdXQpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXNba2V5XSA9IGlucHV0O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgdGhpcy50cnlTdGFydGluZ1JlcXVlc3QoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGdldFVuc3luY2VkTW9kZWxzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZ2V0VW5zeW5jZWRNb2RlbHMoKTtcbiAgICB9XG4gICAgYWRkQ2hpbGQoY2hpbGQsIG1vZGVsQmluZGluZ3MgPSBbXSkge1xuICAgICAgICBpZiAoIWNoaWxkLmlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoaWxkcmVuIGNvbXBvbmVudHMgbXVzdCBoYXZlIGFuIGlkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc2V0KGNoaWxkLmlkLCBuZXcgQ2hpbGRDb21wb25lbnRXcmFwcGVyKGNoaWxkLCBtb2RlbEJpbmRpbmdzKSk7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG4gICAgICAgIGNoaWxkLm9uKCdtb2RlbDpzZXQnLCB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSk7XG4gICAgfVxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgIGlmICghY2hpbGQuaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGRyZW4gY29tcG9uZW50cyBtdXN0IGhhdmUgYW4gaWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5kZWxldGUoY2hpbGQuaWQpO1xuICAgICAgICBjaGlsZC5wYXJlbnQgPSBudWxsO1xuICAgICAgICBjaGlsZC5vZmYoJ21vZGVsOnNldCcsIHRoaXMub25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlKTtcbiAgICB9XG4gICAgZ2V0UGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgfVxuICAgIGdldENoaWxkcmVuKCkge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZENvbXBvbmVudCwgaWQpID0+IHtcbiAgICAgICAgICAgIGNoaWxkcmVuLnNldChpZCwgY2hpbGRDb21wb25lbnQuY29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG4gICAgZW1pdChuYW1lLCBkYXRhLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQgPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIGZhbHNlLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQpO1xuICAgIH1cbiAgICBlbWl0VXAobmFtZSwgZGF0YSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkID0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJmb3JtRW1pdChuYW1lLCBkYXRhLCB0cnVlLCBvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQpO1xuICAgIH1cbiAgICBlbWl0U2VsZihuYW1lLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvRW1pdChuYW1lLCBkYXRhKTtcbiAgICB9XG4gICAgcGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgZW1pdFVwLCBtYXRjaGluZ05hbWUpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50RmluZGVyKHRoaXMsIGVtaXRVcCwgbWF0Y2hpbmdOYW1lKTtcbiAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5kb0VtaXQobmFtZSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkb0VtaXQobmFtZSwgZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmxpc3RlbmVycy5nZXQobmFtZSkgfHwgW107XG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbihhY3Rpb24sIGRhdGEsIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlRnJvbU5ld0VsZW1lbnRGcm9tUGFyZW50UmVuZGVyKHRvRWwpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50UHJvcHModG9FbCk7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzQ2hhbmdlZCA9IHRoaXMudmFsdWVTdG9yZS5zdG9yZU5ld1Byb3BzRnJvbVBhcmVudChwcm9wcyk7XG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gdG9FbC5kYXRhc2V0LmxpdmVGaW5nZXJwcmludFZhbHVlO1xuICAgICAgICBpZiAoZmluZ2VycHJpbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5maW5nZXJwcmludCA9IGZpbmdlcnByaW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlKG1vZGVsTmFtZSwgdmFsdWUsIGNoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgIGlmICghY2hpbGRDb21wb25lbnQuaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBpZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkV3JhcHBlciA9IHRoaXMuY2hpbGRyZW4uZ2V0KGNoaWxkQ29tcG9uZW50LmlkKTtcbiAgICAgICAgaWYgKCFjaGlsZFdyYXBwZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBjaGlsZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkV3JhcHBlci5tb2RlbEJpbmRpbmdzLmZvckVhY2goKG1vZGVsQmluZGluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRNb2RlbE5hbWUgPSBtb2RlbEJpbmRpbmcuaW5uZXJNb2RlbE5hbWUgfHwgJ3ZhbHVlJztcbiAgICAgICAgICAgIGlmIChjaGlsZE1vZGVsTmFtZSAhPT0gbW9kZWxOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgdmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1R1cmJvRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBUdXJibyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuZWxlbWVudC5jbG9zZXN0KCdbZGF0YS10dXJibz1cImZhbHNlXCJdJyk7XG4gICAgfVxuICAgIHRyeVN0YXJ0aW5nUmVxdWVzdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1SZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgcGVyZm9ybVJlcXVlc3QoKSB7XG4gICAgICAgIGNvbnN0IHRoaXNQcm9taXNlUmVzb2x2ZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZTtcbiAgICAgICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuICAgICAgICBjb25zdCBmaWxlc1RvU2VuZCA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnBlbmRpbmdGaWxlcykpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5maWxlcykge1xuICAgICAgICAgICAgICAgIGZpbGVzVG9TZW5kW2tleV0gPSB2YWx1ZS5maWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gdGhpcy5iYWNrZW5kLm1ha2VSZXF1ZXN0KHRoaXMudmFsdWVTdG9yZS5nZXRPcmlnaW5hbFByb3BzKCksIHRoaXMucGVuZGluZ0FjdGlvbnMsIHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCksIHRoaXMuZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKSwgdGhpcy52YWx1ZVN0b3JlLmdldFVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQoKSwgZmlsZXNUb1NlbmQpO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdsb2FkaW5nLnN0YXRlOnN0YXJ0ZWQnLCB0aGlzLmVsZW1lbnQsIHRoaXMuYmFja2VuZFJlcXVlc3QpO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMudmFsdWVTdG9yZS5mbHVzaERpcnR5UHJvcHNUb1BlbmRpbmcoKTtcbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QucHJvbWlzZS50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG4gICAgICAgICAgICBjb25zdCBiYWNrZW5kUmVzcG9uc2UgPSBuZXcgQmFja2VuZFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCBiYWNrZW5kUmVzcG9uc2UuZ2V0Qm9keSgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpbnB1dCBvZiBPYmplY3QudmFsdWVzKHRoaXMucGVuZGluZ0ZpbGVzKSkge1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnM7XG4gICAgICAgICAgICBpZiAoaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpICE9PSAnYXBwbGljYXRpb24vdm5kLmxpdmUtY29tcG9uZW50K2h0bWwnICYmICFoZWFkZXJzLmdldCgnWC1MaXZlLVJlZGlyZWN0JykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9scyA9IHsgZGlzcGxheUVycm9yOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3Jlc3BvbnNlOmVycm9yJywgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xzLmRpc3BsYXlFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckVycm9yKGh0bWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlcXVlc3RQZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJvY2Vzc1JlcmVuZGVyKGh0bWwsIGJhY2tlbmRSZXNwb25zZSkge1xuICAgICAgICBjb25zdCBjb250cm9scyA9IHsgc2hvdWxkUmVuZGVyOiB0cnVlIH07XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3JlbmRlcjpzdGFydGVkJywgaHRtbCwgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgIGlmICghY29udHJvbHMuc2hvdWxkUmVuZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUdXJib0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgIFR1cmJvLnZpc2l0KGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdsb2FkaW5nLnN0YXRlOmZpbmlzaGVkJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgbW9kaWZpZWRNb2RlbFZhbHVlcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnZhbHVlU3RvcmUuZ2V0RGlydHlQcm9wcygpKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSA9IHRoaXMudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBuZXdFbGVtZW50O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV3RWxlbWVudCA9IGh0bWxUb0VsZW1lbnQoaHRtbCk7XG4gICAgICAgICAgICBpZiAoIW5ld0VsZW1lbnQubWF0Y2hlcygnW2RhdGEtY29udHJvbGxlcn49bGl2ZV0nKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBsaXZlIGNvbXBvbmVudCB0ZW1wbGF0ZSBtdXN0IGNvbnRhaW4gYSBzaW5nbGUgcm9vdCBjb250cm9sbGVyIGVsZW1lbnQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlIGNvbXBvbmVudCBIVE1MIHJldHVybmVkOicpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50UHJvcHMobmV3RWxlbWVudCk7XG4gICAgICAgIHRoaXMudmFsdWVTdG9yZS5yZWluaXRpYWxpemVBbGxQcm9wcyhuZXdQcm9wcyk7XG4gICAgICAgIGNvbnN0IGV2ZW50c1RvRW1pdCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRFdmVudHNUb0VtaXQobmV3RWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoKG5ld0VsZW1lbnQpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLmhhbmRsZVBlbmRpbmdDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RvcCgpO1xuICAgICAgICBleGVjdXRlTW9ycGhkb20odGhpcy5lbGVtZW50LCBuZXdFbGVtZW50LCB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZElucHV0cygpLCAoZWxlbWVudCkgPT4gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLnZhbHVlU3RvcmUpLCBBcnJheS5mcm9tKHRoaXMuZ2V0Q2hpbGRyZW4oKS52YWx1ZXMoKSksIHRoaXMuZWxlbWVudERyaXZlci5maW5kQ2hpbGRDb21wb25lbnRFbGVtZW50LCB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0S2V5RnJvbUVsZW1lbnQsIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZGlmaWVkTW9kZWxWYWx1ZXMpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBldmVudHNUb0VtaXQuZm9yRWFjaCgoeyBldmVudCwgZGF0YSwgdGFyZ2V0LCBjb21wb25lbnROYW1lIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRVcChldmVudCwgZGF0YSwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gJ3NlbGYnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0U2VsZihldmVudCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KGV2ZW50LCBkYXRhLCBjb21wb25lbnROYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoLmZvckVhY2goKHsgZXZlbnQsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50LCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiBwYXlsb2FkLFxuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZW5kZXI6ZmluaXNoZWQnLCB0aGlzKTtcbiAgICB9XG4gICAgY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpIHtcbiAgICAgICAgaWYgKGRlYm91bmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RGVib3VuY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlYm91bmNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlYm91bmNlO1xuICAgIH1cbiAgICBjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgdGhpcy5jYWxjdWxhdGVEZWJvdW5jZShkZWJvdW5jZSkpO1xuICAgIH1cbiAgICByZW5kZXJFcnJvcihodG1sKSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXZlLWNvbXBvbmVudC1lcnJvcicpO1xuICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1vZGFsLmlkID0gJ2xpdmUtY29tcG9uZW50LWVycm9yJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnBhZGRpbmcgPSAnNTBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAuNSknO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuekluZGV4ID0gJzEwMDAwMCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JztcbiAgICAgICAgaWZyYW1lLnN0eWxlLmZsZXhHcm93ID0gJzEnO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQobW9kYWwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIGlmIChpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub3BlbigpO1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoaHRtbCk7XG4gICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgICAgICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLm91dGVySFRNTCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICAgICAgfTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKG1vZGFsKSk7XG4gICAgICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtb2RhbC5mb2N1cygpO1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbkZpbmdlcnByaW50cygpIHtcbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnRzID0ge307XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRDb21wb25lbnQuY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluZ2VycHJpbnRzW2NoaWxkLmlkXSA9IHtcbiAgICAgICAgICAgICAgICBmaW5nZXJwcmludDogY2hpbGQuZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgdGFnOiBjaGlsZC5lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmluZ2VycHJpbnRzO1xuICAgIH1cbiAgICByZXNldFByb21pc2UoKSB7XG4gICAgICAgIHRoaXMubmV4dFJlcXVlc3RQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHByb3hpZnlDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShjb21wb25lbnQsIHtcbiAgICAgICAgZ2V0KGNvbXBvbmVudCwgcHJvcCkge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY29tcG9uZW50IHx8IHR5cGVvZiBwcm9wICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50W3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gY29tcG9uZW50W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYWJsZS5hcHBseShjb21wb25lbnQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoY29tcG9uZW50LCBwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQudmFsdWVTdG9yZS5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmdldERhdGEocHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmFjdGlvbi5hcHBseShjb21wb25lbnQsIFtwcm9wLCBhcmdzXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQuc2V0KHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuY2xhc3MgQmFja2VuZFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKHByb21pc2UsIGFjdGlvbnMsIHVwZGF0ZU1vZGVscykge1xuICAgICAgICB0aGlzLmlzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgdGhpcy5wcm9taXNlLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICAgICAgdGhpcy51cGRhdGVkTW9kZWxzID0gdXBkYXRlTW9kZWxzO1xuICAgIH1cbiAgICBjb250YWluc09uZU9mQWN0aW9ucyh0YXJnZXRlZEFjdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5maWx0ZXIoKGFjdGlvbikgPT4gdGFyZ2V0ZWRBY3Rpb25zLmluY2x1ZGVzKGFjdGlvbikpLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIGFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlZE1vZGVscy5maWx0ZXIoKG1vZGVsKSA9PiB0YXJnZXRlZE1vZGVscy5pbmNsdWRlcyhtb2RlbCkpLmxlbmd0aCA+IDA7XG4gICAgfVxufVxuXG5jbGFzcyBSZXF1ZXN0QnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IodXJsLCBjc3JmVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLmNzcmZUb2tlbiA9IGNzcmZUb2tlbjtcbiAgICB9XG4gICAgYnVpbGRSZXF1ZXN0KHByb3BzLCBhY3Rpb25zLCB1cGRhdGVkLCBjaGlsZHJlbiwgdXBkYXRlZFByb3BzRnJvbVBhcmVudCwgZmlsZXMpIHtcbiAgICAgICAgY29uc3Qgc3BsaXRVcmwgPSB0aGlzLnVybC5zcGxpdCgnPycpO1xuICAgICAgICBsZXQgW3VybF0gPSBzcGxpdFVybDtcbiAgICAgICAgY29uc3QgWywgcXVlcnlTdHJpbmddID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcgfHwgJycpO1xuICAgICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7fTtcbiAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbCcsXG4gICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRvdGFsRmlsZXMgPSBPYmplY3QuZW50cmllcyhmaWxlcykucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwgKyBjdXJyZW50Lmxlbmd0aCwgMCk7XG4gICAgICAgIGNvbnN0IGhhc0ZpbmdlcnByaW50cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKS5sZW5ndGggPiAwO1xuICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgIHRvdGFsRmlsZXMgPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMud2lsbERhdGFGaXRJblVybChKU09OLnN0cmluZ2lmeShwcm9wcyksIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWQpLCBwYXJhbXMsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFByb3BzRnJvbVBhcmVudCkpKSB7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCdwcm9wcycsIEpTT04uc3RyaW5naWZ5KHByb3BzKSk7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCd1cGRhdGVkJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZCkpO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2V0KCdwcm9wc0Zyb21QYXJlbnQnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFzRmluZ2VycHJpbnRzKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLnNldCgnY2hpbGRyZW4nLCBKU09OLnN0cmluZ2lmeShjaGlsZHJlbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0geyBwcm9wcywgdXBkYXRlZCB9O1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5wcm9wc0Zyb21QYXJlbnQgPSB1cGRhdGVkUHJvcHNGcm9tUGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc0ZpbmdlcnByaW50cykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jc3JmVG9rZW4gJiZcbiAgICAgICAgICAgICAgICAoYWN0aW9ucy5sZW5ndGggfHwgdG90YWxGaWxlcykpIHtcbiAgICAgICAgICAgICAgICBmZXRjaE9wdGlvbnMuaGVhZGVyc1snWC1DU1JGLVRPS0VOJ10gPSB0aGlzLmNzcmZUb2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuYXJncyA9IGFjdGlvbnNbMF0uYXJncztcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IGAvJHtlbmNvZGVVUklDb21wb25lbnQoYWN0aW9uc1swXS5uYW1lKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcvX2JhdGNoJztcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhKSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhmaWxlcykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmJvZHkgPSBmb3JtRGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVybDogYCR7dXJsfSR7cGFyYW1zU3RyaW5nLmxlbmd0aCA+IDAgPyBgPyR7cGFyYW1zU3RyaW5nfWAgOiAnJ31gLFxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB3aWxsRGF0YUZpdEluVXJsKHByb3BzSnNvbiwgdXBkYXRlZEpzb24sIHBhcmFtcywgY2hpbGRyZW5Kc29uLCBwcm9wc0Zyb21QYXJlbnRKc29uKSB7XG4gICAgICAgIGNvbnN0IHVybEVuY29kZWRKc29uRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocHJvcHNKc29uICsgdXBkYXRlZEpzb24gKyBjaGlsZHJlbkpzb24gKyBwcm9wc0Zyb21QYXJlbnRKc29uKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gKHVybEVuY29kZWRKc29uRGF0YSArIHBhcmFtcy50b1N0cmluZygpKS5sZW5ndGggPCAxNTAwO1xuICAgIH1cbn1cblxuY2xhc3MgQmFja2VuZCB7XG4gICAgY29uc3RydWN0b3IodXJsLCBjc3JmVG9rZW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdEJ1aWxkZXIgPSBuZXcgUmVxdWVzdEJ1aWxkZXIodXJsLCBjc3JmVG9rZW4pO1xuICAgIH1cbiAgICBtYWtlUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHsgdXJsLCBmZXRjaE9wdGlvbnMgfSA9IHRoaXMucmVxdWVzdEJ1aWxkZXIuYnVpbGRSZXF1ZXN0KHByb3BzLCBhY3Rpb25zLCB1cGRhdGVkLCBjaGlsZHJlbiwgdXBkYXRlZFByb3BzRnJvbVBhcmVudCwgZmlsZXMpO1xuICAgICAgICByZXR1cm4gbmV3IEJhY2tlbmRSZXF1ZXN0KGZldGNoKHVybCwgZmV0Y2hPcHRpb25zKSwgYWN0aW9ucy5tYXAoKGJhY2tlbmRBY3Rpb24pID0+IGJhY2tlbmRBY3Rpb24ubmFtZSksIE9iamVjdC5rZXlzKHVwZGF0ZWQpKTtcbiAgICB9XG59XG5cbmNsYXNzIFN0YW5kYXJkRWxlbWVudERyaXZlciB7XG4gICAgZ2V0TW9kZWxOYW1lKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50UHJvcHMocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBwcm9wc0pzb24gPSAoX2EgPSByb290RWxlbWVudC5kYXRhc2V0LmxpdmVQcm9wc1ZhbHVlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAne30nO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShwcm9wc0pzb24pO1xuICAgIH1cbiAgICBmaW5kQ2hpbGRDb21wb25lbnRFbGVtZW50KGlkLCBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWxpdmUtaWQ9JHtpZH1dYCk7XG4gICAgfVxuICAgIGdldEtleUZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldC5saXZlSWQgfHwgbnVsbDtcbiAgICB9XG4gICAgZ2V0RXZlbnRzVG9FbWl0KGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBldmVudHNKc29uID0gKF9hID0gZWxlbWVudC5kYXRhc2V0LmxpdmVFbWl0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnW10nO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShldmVudHNKc29uKTtcbiAgICB9XG4gICAgZ2V0QnJvd3NlckV2ZW50c1RvRGlzcGF0Y2goZWxlbWVudCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGV2ZW50c0pzb24gPSAoX2EgPSBlbGVtZW50LmRhdGFzZXQubGl2ZUJyb3dzZXJEaXNwYXRjaCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ1tdJztcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZXZlbnRzSnNvbik7XG4gICAgfVxufVxuXG5jbGFzcyBMb2FkaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdsb2FkaW5nLnN0YXRlOnN0YXJ0ZWQnLCAoZWxlbWVudCwgcmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydExvYWRpbmcoZWxlbWVudCwgcmVxdWVzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2xvYWRpbmcuc3RhdGU6ZmluaXNoZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maW5pc2hMb2FkaW5nKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maW5pc2hMb2FkaW5nKGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICB9XG4gICAgc3RhcnRMb2FkaW5nKHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ1RvZ2dsZSh0cnVlLCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCk7XG4gICAgfVxuICAgIGZpbmlzaExvYWRpbmcodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoZmFsc2UsIHRhcmdldEVsZW1lbnQsIG51bGwpO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nVG9nZ2xlKGlzTG9hZGluZywgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5hZGRBdHRyaWJ1dGVzKHRhcmdldEVsZW1lbnQsIFsnYnVzeSddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbJ2J1c3knXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRMb2FkaW5nRGlyZWN0aXZlcyh0YXJnZXRFbGVtZW50KS5mb3JFYWNoKCh7IGVsZW1lbnQsIGRpcmVjdGl2ZXMgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBbJ2RhdGEtbGl2ZS1pcy1sb2FkaW5nJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIFsnZGF0YS1saXZlLWlzLWxvYWRpbmcnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZShlbGVtZW50LCBpc0xvYWRpbmcsIGRpcmVjdGl2ZSwgYmFja2VuZFJlcXVlc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICBjb25zdCBmaW5hbEFjdGlvbiA9IHBhcnNlTG9hZGluZ0FjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBpc0xvYWRpbmcpO1xuICAgICAgICBjb25zdCB0YXJnZXRlZEFjdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRNb2RlbHMgPSBbXTtcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcbiAgICAgICAgY29uc3QgdmFsaWRNb2RpZmllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnZGVsYXknLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsYXkgPSBtb2RpZmllci52YWx1ZSA/IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IDIwMDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnYWN0aW9uJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJhY3Rpb25cIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBhY3Rpb24oZm9vKS4gSXQncyBtaXNzaW5nIGZvciBcIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRlZEFjdGlvbnMucHVzaChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ21vZGVsJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJtb2RlbFwiIGluIGRhdGEtbG9hZGluZyBtdXN0IGhhdmUgYW4gYWN0aW9uIG5hbWUgLSBlLmcuIG1vZGVsKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ZWRNb2RlbHMucHVzaChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAodmFsaWRNb2RpZmllcnMuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGFibGUgPSAoX2EgPSB2YWxpZE1vZGlmaWVycy5nZXQobW9kaWZpZXIubmFtZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgdXNlZCBpbiBkYXRhLWxvYWRpbmc9XCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzTG9hZGluZyAmJiB0YXJnZXRlZEFjdGlvbnMubGVuZ3RoID4gMCAmJiBiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xvYWRpbmcgJiYgdGFyZ2V0ZWRNb2RlbHMubGVuZ3RoID4gMCAmJiBiYWNrZW5kUmVxdWVzdCAmJiAhYmFja2VuZFJlcXVlc3QuYXJlQW55TW9kZWxzVXBkYXRlZCh0YXJnZXRlZE1vZGVscykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9hZGluZ0RpcmVjdGl2ZTtcbiAgICAgICAgc3dpdGNoIChmaW5hbEFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuaGlkZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZGRDbGFzcyc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQ2xhc3MoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlQ2xhc3MnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FkZEF0dHJpYnV0ZSc6XG4gICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMuYWRkQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmVBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YS1sb2FkaW5nIGFjdGlvbiBcIiR7ZmluYWxBY3Rpb259XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmlzUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsb2FkaW5nRGlyZWN0aXZlKCk7XG4gICAgfVxuICAgIGdldExvYWRpbmdEaXJlY3RpdmVzKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbG9hZGluZ0RpcmVjdGl2ZXMgPSBbXTtcbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sb2FkaW5nXScpLmZvckVhY2goKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSAmJiAhKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBFbGVtZW50IFR5cGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0LmxvYWRpbmcgfHwgJ3Nob3cnKTtcbiAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBsb2FkaW5nRGlyZWN0aXZlcztcbiAgICB9XG4gICAgc2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAncmV2ZXJ0JztcbiAgICB9XG4gICAgaGlkZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNvbWJpbmVTcGFjZWRBcnJheShjbGFzc2VzKSk7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBbJ2NsYXNzJ10pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCAnJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNvbnN0IHBhcnNlTG9hZGluZ0FjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24sIGlzTG9hZGluZykge1xuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdzaG93JyA6ICdoaWRlJztcbiAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2hpZGUnIDogJ3Nob3cnO1xuICAgICAgICBjYXNlICdhZGRDbGFzcyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyc7XG4gICAgICAgIGNhc2UgJ3JlbW92ZUNsYXNzJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJztcbiAgICAgICAgY2FzZSAnYWRkQXR0cmlidXRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnYWRkQXR0cmlidXRlJyA6ICdyZW1vdmVBdHRyaWJ1dGUnO1xuICAgICAgICBjYXNlICdyZW1vdmVBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdyZW1vdmVBdHRyaWJ1dGUnIDogJ2FkZEF0dHJpYnV0ZSc7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhLWxvYWRpbmcgYWN0aW9uIFwiJHthY3Rpb259XCJgKTtcbn07XG5cbmNsYXNzIFZhbGlkYXRlZEZpZWxkc1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbignbW9kZWw6c2V0JywgKG1vZGVsTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIGNvbXBvbmVudC52YWx1ZVN0b3JlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZU1vZGVsU2V0KG1vZGVsTmFtZSwgdmFsdWVTdG9yZSkge1xuICAgICAgICBpZiAodmFsdWVTdG9yZS5oYXMoJ3ZhbGlkYXRlZEZpZWxkcycpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBbLi4udmFsdWVTdG9yZS5nZXQoJ3ZhbGlkYXRlZEZpZWxkcycpXTtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVkRmllbGRzLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZWRGaWVsZHMucHVzaChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWVTdG9yZS5zZXQoJ3ZhbGlkYXRlZEZpZWxkcycsIHZhbGlkYXRlZEZpZWxkcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFBhZ2VVbmxvYWRpbmdQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpzdGFydGVkJywgKGh0bWwsIHJlc3BvbnNlLCBjb250cm9scykgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbHMuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nRGlyZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFscyA9IFtdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxzLnB1c2goeyBhY3Rpb25OYW1lLCBkdXJhdGlvbiB9KTtcbiAgICAgICAgaWYgKHRoaXMuaXNQb2xsaW5nQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRBbGxQb2xsaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5pc1BvbGxpbmdBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9sbHMuZm9yRWFjaCgoeyBhY3Rpb25OYW1lLCBkdXJhdGlvbiB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdG9wQWxsUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzLmZvckVhY2goKGludGVydmFsKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsZWFyUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsUG9sbGluZygpO1xuICAgICAgICB0aGlzLnBvbGxzID0gW107XG4gICAgICAgIHRoaXMuc3RhcnRBbGxQb2xsaW5nKCk7XG4gICAgfVxuICAgIGluaXRpYXRlUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICBsZXQgY2FsbGJhY2s7XG4gICAgICAgIGlmIChhY3Rpb25OYW1lID09PSAnJHJlbmRlcicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGlvbihhY3Rpb25OYW1lLCB7fSwgMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMucHVzaCh0aW1lcik7XG4gICAgfVxufVxuXG5jbGFzcyBQb2xsaW5nUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY29tcG9uZW50LmVsZW1lbnQ7XG4gICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yID0gbmV3IFBvbGxpbmdEaXJlY3Rvcihjb21wb25lbnQpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVQb2xsaW5nKCk7XG4gICAgICAgIGNvbXBvbmVudC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0YXJ0QWxsUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3Iuc3RvcEFsbFBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOmZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5hZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgY2xlYXJQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5jbGVhclBvbGxpbmcoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZVBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQb2xsaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZGF0YXNldC5wb2xsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYXdQb2xsQ29uZmlnID0gdGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdQb2xsQ29uZmlnIHx8ICckcmVuZGVyJyk7XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZHVyYXRpb24gPSAyMDAwO1xuICAgICAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWxheSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIGluIGRhdGEtcG9sbCBcIiR7cmF3UG9sbENvbmZpZ31cIi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYWRkUG9sbChkaXJlY3RpdmUuYWN0aW9uLCBkdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgU2V0VmFsdWVPbnRvTW9kZWxGaWVsZHNQbHVnaW4ge1xuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbXBvbmVudC5vbigncmVuZGVyOmZpbmlzaGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGVsXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZWxlbWVudCB1c2luZyBkYXRhLW1vZGVsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoIW1vZGVsRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5nZXRVbnN5bmNlZE1vZGVscygpLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50ICYmICFlbGVtZW50Lm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldE1vZGVsQmluZGluZyAobW9kZWxEaXJlY3RpdmUpIHtcbiAgICBsZXQgc2hvdWxkUmVuZGVyID0gdHJ1ZTtcbiAgICBsZXQgdGFyZ2V0RXZlbnROYW1lID0gbnVsbDtcbiAgICBsZXQgZGVib3VuY2UgPSBmYWxzZTtcbiAgICBtb2RlbERpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgc3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdvbic6XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm9uXCIgbW9kaWZpZXIgaW4gJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX0gcmVxdWlyZXMgYSB2YWx1ZSAtIGUuZy4gb24oY2hhbmdlKS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFbJ2lucHV0JywgJ2NoYW5nZSddLmluY2x1ZGVzKG1vZGlmaWVyLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm9uXCIgbW9kaWZpZXIgaW4gJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX0gb25seSBhY2NlcHRzIHRoZSBhcmd1bWVudHMgXCJpbnB1dFwiIG9yIFwiY2hhbmdlXCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldEV2ZW50TmFtZSA9IG1vZGlmaWVyLnZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbm9yZW5kZXInOlxuICAgICAgICAgICAgICAgIHNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVib3VuY2UnOlxuICAgICAgICAgICAgICAgIGRlYm91bmNlID0gbW9kaWZpZXIudmFsdWUgPyBwYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1tb2RlbD1cIiR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuYCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBbbW9kZWxOYW1lLCBpbm5lck1vZGVsTmFtZV0gPSBtb2RlbERpcmVjdGl2ZS5hY3Rpb24uc3BsaXQoJzonKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtb2RlbE5hbWUsXG4gICAgICAgIGlubmVyTW9kZWxOYW1lOiBpbm5lck1vZGVsTmFtZSB8fCBudWxsLFxuICAgICAgICBzaG91bGRSZW5kZXIsXG4gICAgICAgIGRlYm91bmNlLFxuICAgICAgICB0YXJnZXRFdmVudE5hbWVcbiAgICB9O1xufVxuXG5jbGFzcyBDb21wb25lbnRSZWdpc3RyeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50TWFwQnlFbGVtZW50ID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRNYXBCeUNvbXBvbmVudCA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJDb21wb25lbnQoZWxlbWVudCwgY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50TWFwQnlFbGVtZW50LnNldChlbGVtZW50LCBjb21wb25lbnQpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LnNldChjb21wb25lbnQsIGNvbXBvbmVudC5uYW1lKTtcbiAgICB9XG4gICAgdW5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRNYXBCeUVsZW1lbnQuZGVsZXRlKGNvbXBvbmVudC5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRNYXBCeUNvbXBvbmVudC5kZWxldGUoY29tcG9uZW50KTtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zdCBtYXhDb3VudCA9IDEwO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRNYXBCeUVsZW1lbnQuZ2V0KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPiBtYXhDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgQ29tcG9uZW50IG5vdCBmb3VuZCBmb3IgZWxlbWVudCAke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9YCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmluZENvbXBvbmVudHMoY3VycmVudENvbXBvbmVudCwgb25seVBhcmVudHMsIG9ubHlNYXRjaE5hbWUpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbXBvbmVudE1hcEJ5Q29tcG9uZW50LmZvckVhY2goKGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9ubHlQYXJlbnRzICYmXG4gICAgICAgICAgICAgICAgKGN1cnJlbnRDb21wb25lbnQgPT09IGNvbXBvbmVudCB8fCAhY29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY3VycmVudENvbXBvbmVudC5lbGVtZW50KSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob25seU1hdGNoTmFtZSAmJiBjb21wb25lbnROYW1lICE9PSBvbmx5TWF0Y2hOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG59XG5cbmNvbnN0IGdldENvbXBvbmVudCA9IChlbGVtZW50KSA9PiBMaXZlQ29udHJvbGxlckRlZmF1bHQuY29tcG9uZW50UmVnaXN0cnkuZ2V0Q29tcG9uZW50KGVsZW1lbnQpO1xuY2xhc3MgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdpbnB1dCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudCkgfSxcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdjaGFuZ2UnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB9LFxuICAgICAgICAgICAgeyBldmVudDogJ2xpdmU6Y29ubmVjdCcsIGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlQ29ubmVjdGVkQ29udHJvbGxlckV2ZW50KGV2ZW50KSB9LFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLnBlbmRpbmdGaWxlcyA9IHt9O1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50ID0gdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudC5iaW5kKHRoaXMpO1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LmxpdmVJZCB8fCBudWxsO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5lbGVtZW50LCB0aGlzLm5hbWVWYWx1ZSwgdGhpcy5wcm9wc1ZhbHVlLCB0aGlzLmxpc3RlbmVyc1ZhbHVlLCAoY3VycmVudENvbXBvbmVudCwgb25seVBhcmVudHMsIG9ubHlNYXRjaE5hbWUpID0+IExpdmVDb250cm9sbGVyRGVmYXVsdC5jb21wb25lbnRSZWdpc3RyeS5maW5kQ29tcG9uZW50cyhjdXJyZW50Q29tcG9uZW50LCBvbmx5UGFyZW50cywgb25seU1hdGNoTmFtZSksIHRoaXMuZmluZ2VycHJpbnRWYWx1ZSwgaWQsIG5ldyBCYWNrZW5kKHRoaXMudXJsVmFsdWUsIHRoaXMuY3NyZlZhbHVlKSwgbmV3IFN0YW5kYXJkRWxlbWVudERyaXZlcigpKTtcbiAgICAgICAgdGhpcy5wcm94aWVkQ29tcG9uZW50ID0gcHJveGlmeUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5fX2NvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgaWYgKHRoaXMuaGFzRGVib3VuY2VWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZGVmYXVsdERlYm91bmNlID0gdGhpcy5kZWJvdW5jZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsdWdpbnMgPSBbXG4gICAgICAgICAgICBuZXcgTG9hZGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFZhbGlkYXRlZEZpZWxkc1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFBhZ2VVbmxvYWRpbmdQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBQb2xsaW5nUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgU2V0VmFsdWVPbnRvTW9kZWxGaWVsZHNQbHVnaW4oKSxcbiAgICAgICAgXTtcbiAgICAgICAgcGx1Z2lucy5mb3JFYWNoKChwbHVnaW4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFkZFBsdWdpbihwbHVnaW4pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyQ29tcG9uZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb21wb25lbnQpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jb25uZWN0KCk7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0Jyk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIExpdmVDb250cm9sbGVyRGVmYXVsdC5jb21wb25lbnRSZWdpc3RyeS51bnJlZ2lzdGVyQ29tcG9uZW50KHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnZGlzY29ubmVjdCcpO1xuICAgIH1cbiAgICB1cGRhdGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdpbnB1dCcgfHwgZXZlbnQudHlwZSA9PT0gJ2NoYW5nZScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2luY2UgTGl2ZUNvbXBvbmVudHMgMi4zLCB5b3Ugbm8gbG9uZ2VyIG5lZWQgZGF0YS1hY3Rpb249XCJsaXZlI3VwZGF0ZVwiIG9uIGZvcm0gZWxlbWVudHMuIEZvdW5kIG9uIGVsZW1lbnQ6ICR7Z2V0RWxlbWVudEFzVGFnVGV4dChldmVudC5jdXJyZW50VGFyZ2V0KX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudChldmVudC5jdXJyZW50VGFyZ2V0LCBudWxsKTtcbiAgICB9XG4gICAgYWN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJhd0FjdGlvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5hY3Rpb25OYW1lO1xuICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKHJhd0FjdGlvbik7XG4gICAgICAgIGxldCBkZWJvdW5jZSA9IGZhbHNlO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHBlbmRpbmdGaWxlcyA9IHt9O1xuICAgICAgICAgICAgY29uc3QgdmFsaWRNb2RpZmllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3ByZXZlbnQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdzdG9wJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3NlbGYnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2RlYm91bmNlJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVib3VuY2UgPSBtb2RpZmllci52YWx1ZSA/IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnZmlsZXMnLCAobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdGaWxlcyA9IHRoaXMucGVuZGluZ0ZpbGVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0ZpbGVzW21vZGlmaWVyLnZhbHVlXSA9IHRoaXMucGVuZGluZ0ZpbGVzW21vZGlmaWVyLnZhbHVlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IChfYSA9IHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKCgpID0+IHsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gbW9kaWZpZXIgJHttb2RpZmllci5uYW1lfSBpbiBhY3Rpb24gXCIke3Jhd0FjdGlvbn1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIGlucHV0XSBvZiBPYmplY3QuZW50cmllcyhwZW5kaW5nRmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmZpbGVzKGtleSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRmlsZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGlvbihkaXJlY3RpdmUuYWN0aW9uLCBkaXJlY3RpdmUubmFtZWQsIGRlYm91bmNlKTtcbiAgICAgICAgICAgIGlmIChnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgJHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgIH1cbiAgICBlbWl0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSwgbmFtZU1hdGNoIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVtaXQobmFtZSwgZGF0YSwgbmFtZU1hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXRVcChldmVudCkge1xuICAgICAgICB0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEsIG5hbWVNYXRjaCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0VXAobmFtZSwgZGF0YSwgbmFtZU1hdGNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXRTZWxmKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0U2VsZihuYW1lLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEVtaXREaXJlY3RpdmVzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBpZiAoIWVsZW1lbnQuZGF0YXNldC5ldmVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBkYXRhLWV2ZW50IGF0dHJpYnV0ZSBmb3VuZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXZlbnRJbmZvID0gZWxlbWVudC5kYXRhc2V0LmV2ZW50O1xuICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGV2ZW50SW5mbyk7XG4gICAgICAgIGNvbnN0IGVtaXRzID0gW107XG4gICAgICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmFtZU1hdGNoID0gbnVsbDtcbiAgICAgICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lTWF0Y2ggPSBtb2RpZmllci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyICR7bW9kaWZpZXIubmFtZX0gaW4gZXZlbnQgXCIke2V2ZW50SW5mb31cIi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVtaXRzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGRpcmVjdGl2ZS5hY3Rpb24sXG4gICAgICAgICAgICAgICAgZGF0YTogZGlyZWN0aXZlLm5hbWVkLFxuICAgICAgICAgICAgICAgIG5hbWVNYXRjaCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVtaXRzO1xuICAgIH1cbiAgICAkdXBkYXRlTW9kZWwobW9kZWwsIHZhbHVlLCBzaG91bGRSZW5kZXIgPSB0cnVlLCBkZWJvdW5jZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnNldChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciwgZGVib3VuY2UpO1xuICAgIH1cbiAgICBoYW5kbGVJbnB1dEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCh0YXJnZXQsICdpbnB1dCcpO1xuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2VFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQodGFyZ2V0LCAnY2hhbmdlJyk7XG4gICAgfVxuICAgIHVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudChlbGVtZW50LCBldmVudE5hbWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgICAgICBpZiAoKF9hID0gZWxlbWVudC5maWxlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0ZpbGVzW2tleV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nRmlsZXNba2V5XSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdGaWxlc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIGlmICghbW9kZWxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbEJpbmRpbmcgPSBnZXRNb2RlbEJpbmRpbmcobW9kZWxEaXJlY3RpdmUpO1xuICAgICAgICBpZiAoIW1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSAnaW5wdXQnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ2NoYW5nZScgJiYgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9ICdjaGFuZ2UnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudE5hbWUgJiYgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSAhPT0gZXZlbnROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZhbHNlID09PSBtb2RlbEJpbmRpbmcuZGVib3VuY2UpIHtcbiAgICAgICAgICAgIGlmIChtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgbW9kZWxCaW5kaW5nLmRlYm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmluYWxWYWx1ZSA9IGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQudmFsdWVTdG9yZSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnNldChtb2RlbEJpbmRpbmcubW9kZWxOYW1lLCBmaW5hbFZhbHVlLCBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyLCBtb2RlbEJpbmRpbmcuZGVib3VuY2UpO1xuICAgIH1cbiAgICBoYW5kbGVDb25uZWN0ZWRDb250cm9sbGVyRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hpbGRDb250cm9sbGVyID0gZXZlbnQuZGV0YWlsLmNvbnRyb2xsZXI7XG4gICAgICAgIGlmIChjaGlsZENvbnRyb2xsZXIuY29tcG9uZW50LmdldFBhcmVudCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmVzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoY2hpbGRDb250cm9sbGVyLmVsZW1lbnQpO1xuICAgICAgICBjb25zdCBtb2RlbEJpbmRpbmdzID0gbW9kZWxEaXJlY3RpdmVzLm1hcChnZXRNb2RlbEJpbmRpbmcpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5hZGRDaGlsZChjaGlsZENvbnRyb2xsZXIuY29tcG9uZW50LCBtb2RlbEJpbmRpbmdzKTtcbiAgICAgICAgY2hpbGRDb250cm9sbGVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbGl2ZTpkaXNjb25uZWN0JywgdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudCk7XG4gICAgfVxuICAgIGhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29udHJvbGxlciA9IGV2ZW50LmRldGFpbC5jb250cm9sbGVyO1xuICAgICAgICBjaGlsZENvbnRyb2xsZXIuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdsaXZlOmRpc2Nvbm5lY3QnLCB0aGlzLmhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50KTtcbiAgICAgICAgaWYgKGNoaWxkQ29udHJvbGxlci5jb21wb25lbnQuZ2V0UGFyZW50KCkgIT09IHRoaXMuY29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnQucmVtb3ZlQ2hpbGQoY2hpbGRDb250cm9sbGVyLmNvbXBvbmVudCk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgZGV0YWlsID0ge30sIGNhbkJ1YmJsZSA9IHRydWUsIGNhbmNlbGFibGUgPSBmYWxzZSkge1xuICAgICAgICBkZXRhaWwuY29udHJvbGxlciA9IHRoaXM7XG4gICAgICAgIGRldGFpbC5jb21wb25lbnQgPSB0aGlzLnByb3hpZWRDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWwsIHByZWZpeDogJ2xpdmUnLCBjYW5jZWxhYmxlLCBidWJibGVzOiBjYW5CdWJibGUgfSk7XG4gICAgfVxufVxuTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LnZhbHVlcyA9IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgdXJsOiBTdHJpbmcsXG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBjc3JmOiBTdHJpbmcsXG4gICAgbGlzdGVuZXJzOiB7IHR5cGU6IEFycmF5LCBkZWZhdWx0OiBbXSB9LFxuICAgIGRlYm91bmNlOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMTUwIH0sXG4gICAgaWQ6IFN0cmluZyxcbiAgICBmaW5nZXJwcmludDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnIH0sXG59O1xuTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmNvbXBvbmVudFJlZ2lzdHJ5ID0gbmV3IENvbXBvbmVudFJlZ2lzdHJ5KCk7XG5cbmV4cG9ydCB7IENvbXBvbmVudCwgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGFzIGRlZmF1bHQsIGdldENvbXBvbmVudCB9O1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5wcm9wcyA9IChfYSA9IHRoaXMucHJvcHNWYWx1ZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmludHJvID0gKF9iID0gdGhpcy5pbnRyb1ZhbHVlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcpO1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSB3aW5kb3cucmVzb2x2ZVN2ZWx0ZUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudFZhbHVlKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveUlmRXhpc3RzKCk7XG4gICAgICAgIHRoaXMuYXBwID0gbmV3IENvbXBvbmVudCh7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgICAgICAgaW50cm86IHRoaXMuaW50cm8sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQucm9vdCA9IHRoaXMuYXBwO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50OiBDb21wb25lbnQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLl9kZXN0cm95SWZFeGlzdHMoKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd1bm1vdW50Jyk7XG4gICAgfVxuICAgIF9kZXN0cm95SWZFeGlzdHMoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQucm9vdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucm9vdC4kZGVzdHJveSgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZWxlbWVudC5yb290O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGRldGFpbCA9IE9iamVjdC5hc3NpZ24oeyBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLCBwcm9wczogdGhpcy5wcm9wcywgaW50cm86IHRoaXMuaW50cm8gfSwgcGF5bG9hZCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWwsIHByZWZpeDogJ3N2ZWx0ZScgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIGludHJvOiBCb29sZWFuLFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0IFN3dXAgZnJvbSAnc3d1cCc7XG5pbXBvcnQgU3d1cERlYnVnUGx1Z2luIGZyb20gJ0Bzd3VwL2RlYnVnLXBsdWdpbic7XG5pbXBvcnQgU3d1cEZvcm1zUGx1Z2luIGZyb20gJ0Bzd3VwL2Zvcm1zLXBsdWdpbic7XG5pbXBvcnQgU3d1cEZhZGVUaGVtZSBmcm9tICdAc3d1cC9mYWRlLXRoZW1lJztcbmltcG9ydCBTd3VwU2xpZGVUaGVtZSBmcm9tICdAc3d1cC9zbGlkZS10aGVtZSc7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IGRhdGFDb250YWluZXJzID0gdGhpcy5jb250YWluZXJzVmFsdWU7XG4gICAgICAgIGNvbnN0IG1haW5FbGVtZW50ID0gdGhpcy5tYWluRWxlbWVudFZhbHVlIHx8IGRhdGFDb250YWluZXJzWzBdIHx8ICcjc3d1cCc7XG4gICAgICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gW21haW5FbGVtZW50XS5jb25jYXQoZGF0YUNvbnRhaW5lcnMpO1xuICAgICAgICBjb25zdCBjb250YWluZXJzTGlzdCA9IGFsbEVsZW1lbnRzLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhbGxFbGVtZW50cy5pbmRleE9mKGl0ZW0pID09PSBpbmRleDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250YWluZXJzOiBjb250YWluZXJzTGlzdCxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAnc2xpZGUnID09PSB0aGlzLnRoZW1lVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgPyBuZXcgU3d1cFNsaWRlVGhlbWUoeyBtYWluRWxlbWVudDogbWFpbkVsZW1lbnQgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBuZXcgU3d1cEZhZGVUaGVtZSh7IG1haW5FbGVtZW50OiBtYWluRWxlbWVudCB9KSxcbiAgICAgICAgICAgICAgICBuZXcgU3d1cEZvcm1zUGx1Z2luKCksXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5oYXNNYWluRWxlbWVudFZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb25zLm1haW5FbGVtZW50ID0gdGhpcy5tYWluRWxlbWVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc0FuaW1hdGVIaXN0b3J5QnJvd3NpbmdWYWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5hbmltYXRlSGlzdG9yeUJyb3dzaW5nID0gdGhpcy5hbmltYXRlSGlzdG9yeUJyb3dzaW5nVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzQW5pbWF0aW9uU2VsZWN0b3JWYWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5hbmltYXRpb25TZWxlY3RvciA9IHRoaXMuYW5pbWF0aW9uU2VsZWN0b3JWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNDYWNoZVZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmNhY2hlID0gdGhpcy5jYWNoZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc0xpbmtTZWxlY3RvclZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmxpbmtTZWxlY3RvciA9IHRoaXMubGlua1NlbGVjdG9yVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGVidWdWYWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5wbHVnaW5zLnB1c2gobmV3IFN3dXBEZWJ1Z1BsdWdpbigpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3ByZS1jb25uZWN0JywgeyBvcHRpb25zIH0pO1xuICAgICAgICBjb25zdCBzd3VwID0gbmV3IFN3dXAob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcsIHsgc3d1cCwgb3B0aW9ucyB9KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ3N3dXAnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgYW5pbWF0ZUhpc3RvcnlCcm93c2luZzogQm9vbGVhbixcbiAgICBhbmltYXRpb25TZWxlY3RvcjogU3RyaW5nLFxuICAgIGNhY2hlOiBCb29sZWFuLFxuICAgIGNvbnRhaW5lcnM6IEFycmF5LFxuICAgIGxpbmtTZWxlY3RvcjogU3RyaW5nLFxuICAgIHRoZW1lOiBTdHJpbmcsXG4gICAgZGVidWc6IEJvb2xlYW4sXG4gICAgbWFpbkVsZW1lbnQ6IFN0cmluZyxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaXNEaXNwbGF5ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52aXNpYmxlSWNvbiA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cInRvZ2dsZS1wYXNzd29yZC1pY29uXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cbjxwYXRoIGQ9XCJNMTAgMTJhMiAyIDAgMTAwLTQgMiAyIDAgMDAwIDR6XCIgLz5cbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTS40NTggMTBDMS43MzIgNS45NDMgNS41MjIgMyAxMCAzczguMjY4IDIuOTQzIDkuNTQyIDdjLTEuMjc0IDQuMDU3LTUuMDY0IDctOS41NDIgN1MxLjczMiAxNC4wNTcuNDU4IDEwek0xNCAxMGE0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIC8+XG48L3N2Zz5gO1xuICAgICAgICB0aGlzLmhpZGRlbkljb24gPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJ0b2dnbGUtcGFzc3dvcmQtaWNvblwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0zLjcwNyAyLjI5M2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwxNCAxNGExIDEgMCAwMDEuNDE0LTEuNDE0bC0xLjQ3My0xLjQ3M0ExMC4wMTQgMTAuMDE0IDAgMDAxOS41NDIgMTBDMTguMjY4IDUuOTQzIDE0LjQ3OCAzIDEwIDNhOS45NTggOS45NTggMCAwMC00LjUxMiAxLjA3NGwtMS43OC0xLjc4MXptNC4yNjEgNC4yNmwxLjUxNCAxLjUxNWEyLjAwMyAyLjAwMyAwIDAxMi40NSAyLjQ1bDEuNTE0IDEuNTE0YTQgNCAwIDAwLTUuNDc4LTUuNDc4elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiAvPlxuPHBhdGggZD1cIk0xMi40NTQgMTYuNjk3TDkuNzUgMTMuOTkyYTQgNCAwIDAxLTMuNzQyLTMuNzQxTDIuMzM1IDYuNTc4QTkuOTggOS45OCAwIDAwLjQ1OCAxMGMxLjI3NCA0LjA1NyA1LjA2NSA3IDkuNTQyIDcgLjg0NyAwIDEuNjY5LS4xMDUgMi40NTQtLjMwM3pcIiAvPlxuPC9zdmc+YDtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZUljb25WYWx1ZSAhPT0gJ0RlZmF1bHQnKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGVJY29uID0gdGhpcy52aXNpYmxlSWNvblZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhpZGRlbkljb25WYWx1ZSAhPT0gJ0RlZmF1bHQnKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGRlbkljb24gPSB0aGlzLmhpZGRlbkljb25WYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLmNyZWF0ZUJ1dHRvbigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGJ1dHRvbik7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcsIHsgZWxlbWVudDogdGhpcy5lbGVtZW50LCBidXR0b246IGJ1dHRvbiB9KTtcbiAgICB9XG4gICAgY3JlYXRlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5idXR0b25DbGFzc2VzVmFsdWUpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IHRoaXMudmlzaWJsZUljb24gKyAnICcgKyB0aGlzLnZpc2libGVMYWJlbFZhbHVlO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cbiAgICB0b2dnbGUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5pc0Rpc3BsYXllZCA9ICF0aGlzLmlzRGlzcGxheWVkO1xuICAgICAgICBjb25zdCB0b2dnbGVCdXR0b25FbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgdG9nZ2xlQnV0dG9uRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmlzRGlzcGxheWVkXG4gICAgICAgICAgICA/IHRoaXMuaGlkZGVuSWNvbiArICcgJyArIHRoaXMuaGlkZGVuTGFiZWxWYWx1ZVxuICAgICAgICAgICAgOiB0aGlzLnZpc2libGVJY29uICsgJyAnICsgdGhpcy52aXNpYmxlTGFiZWxWYWx1ZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIHRoaXMuaXNEaXNwbGF5ZWQgPyAndGV4dCcgOiAncGFzc3dvcmQnKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuaXNEaXNwbGF5ZWQgPyAnc2hvdycgOiAnaGlkZScsIHsgZWxlbWVudDogdGhpcy5lbGVtZW50LCBidXR0b246IHRvZ2dsZUJ1dHRvbkVsZW1lbnQgfSk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICd0b2dnbGUtcGFzc3dvcmQnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgdmlzaWJsZUxhYmVsOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ1Nob3cnIH0sXG4gICAgdmlzaWJsZUljb246IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnRGVmYXVsdCcgfSxcbiAgICBoaWRkZW5MYWJlbDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdIaWRlJyB9LFxuICAgIGhpZGRlbkljb246IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnRGVmYXVsdCcgfSxcbiAgICBidXR0b25DbGFzc2VzOiBBcnJheSxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCAnQGhvdHdpcmVkL3R1cmJvJztcblxuY2xhc3MgdHVyYm9fY29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xufVxuXG5leHBvcnQgeyB0dXJib19jb250cm9sbGVyIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0IHsgY29ubmVjdFN0cmVhbVNvdXJjZSwgZGlzY29ubmVjdFN0cmVhbVNvdXJjZSB9IGZyb20gJ0Bob3R3aXJlZC90dXJibyc7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSBbXTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0h1YlZhbHVlKVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKCdBIFwiaHViXCIgdmFsdWUgcG9pbnRpbmcgdG8gdGhlIE1lcmN1cmUgaHViIG11c3QgYmUgcHJvdmlkZWQuJyk7XG4gICAgICAgIGlmICghdGhpcy5oYXNUb3BpY1ZhbHVlKVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKCdBIFwidG9waWNcIiB2YWx1ZSBtdXN0IGJlIHByb3ZpZGVkLicpO1xuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlcy5sZW5ndGgpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlcy5qb2luKCcgJykpO1xuICAgICAgICBjb25zdCB1ID0gbmV3IFVSTCh0aGlzLmh1YlZhbHVlKTtcbiAgICAgICAgdS5zZWFyY2hQYXJhbXMuYXBwZW5kKCd0b3BpYycsIHRoaXMudG9waWNWYWx1ZSk7XG4gICAgICAgIHRoaXMudXJsID0gdS50b1N0cmluZygpO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy51cmwpIHtcbiAgICAgICAgICAgIHRoaXMuZXMgPSBuZXcgRXZlbnRTb3VyY2UodGhpcy51cmwpO1xuICAgICAgICAgICAgY29ubmVjdFN0cmVhbVNvdXJjZSh0aGlzLmVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5lcykge1xuICAgICAgICAgICAgdGhpcy5lcy5jbG9zZSgpO1xuICAgICAgICAgICAgZGlzY29ubmVjdFN0cmVhbVNvdXJjZSh0aGlzLmVzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgdG9waWM6IFN0cmluZyxcbiAgICBodWI6IFN0cmluZyxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFjYyIsImluaXQiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU5hdiIsInRvZ2dsZURyb3BDYXRlZ29yaWVzIiwidG9nZ2xlRHJvcE1hcnF1ZXMiLCJ0b2dnbGVEcm9wR2VucmUiLCJ0b2dnbGVEcm9wQ291bGV1cnMiLCJ0b2dnbGVGaWx0cmVNb2JpbGUiLCJ0b2dnbGVGcmlsdGVyU2VsZWN0aW9uIiwiYnVyZ2dlciIsImNyb2l4IiwibWVudU1vYmlsZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZWRNZW51IiwiYWRkIiwicmVtb3ZlIiwiYmNrb2ZmIiwib3BlblNpZGVCZW5vaXQiLCJzaWRlQmFyTmF2Iiwic3Ryb2tlQ29sb3JzIiwic2lkZUJhciIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsImltYWdlcyIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJkZWxldGVJbWFnZVByb2R1Y3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25maXJtIiwiZmV0Y2giLCJnZXRBdHRyaWJ1dGUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhc2V0IiwidG9rZW4iLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJwYXJlbnRFbGVtZW50IiwiYWxlcnQiLCJlcnJvciIsImRlZmF1bHRfMSIsImNsZWFyIiwicHJldmlld0NsZWFyQnV0dG9uVGFyZ2V0IiwiaW5wdXRUYXJnZXQiLCJldmVudCIsIm9uSW5wdXRDaGFuZ2UiLCJkaXNwYXRjaEV2ZW50IiwidmFsdWUiLCJzdHlsZSIsImRpc3BsYXkiLCJwbGFjZWhvbGRlclRhcmdldCIsInByZXZpZXdUYXJnZXQiLCJwcmV2aWV3SW1hZ2VUYXJnZXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwcmV2aWV3RmlsZW5hbWVUYXJnZXQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwidHlwZSIsImluZGV4T2YiLCJfcG9wdWxhdGVJbWFnZVByZXZpZXciLCJGaWxlUmVhZGVyIiwicmVhZGVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInBheWxvYWQiLCJkaXNwYXRjaCIsImRldGFpbCIsInByZWZpeCIsInRhcmdldHMiLCJkZWZhdWx0IiwicGFyc2VEaXJlY3RpdmVzIiwiY29udGVudCIsImRpcmVjdGl2ZXMiLCJjdXJyZW50QWN0aW9uTmFtZSIsImN1cnJlbnRBcmd1bWVudE5hbWUiLCJjdXJyZW50QXJndW1lbnRWYWx1ZSIsImN1cnJlbnRBcmd1bWVudHMiLCJjdXJyZW50TmFtZWRBcmd1bWVudHMiLCJjdXJyZW50TW9kaWZpZXJzIiwic3RhdGUiLCJnZXRMYXN0QWN0aW9uTmFtZSIsImxlbmd0aCIsIkVycm9yIiwiYWN0aW9uIiwicHVzaEluc3RydWN0aW9uIiwicHVzaCIsImFyZ3MiLCJuYW1lZCIsIm1vZGlmaWVycyIsImdldFN0cmluZyIsInB1c2hBcmd1bWVudCIsIm1peGVkQXJnVHlwZXNFcnJvciIsInRyaW0iLCJPYmplY3QiLCJrZXlzIiwicHVzaE1vZGlmaWVyIiwiaSIsImNoYXIiLCJjb21iaW5lU3BhY2VkQXJyYXkiLCJwYXJ0cyIsImZpbmFsUGFydHMiLCJmb3JFYWNoIiwicGFydCIsInNwbGl0Iiwibm9ybWFsaXplTW9kZWxOYW1lIiwibW9kZWwiLCJyZXBsYWNlIiwibWFwIiwicyIsImpvaW4iLCJnZXRWYWx1ZUZyb21FbGVtZW50IiwidmFsdWVTdG9yZSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJtb2RlbE5hbWVEYXRhIiwiZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudCIsIm1vZGVsVmFsdWUiLCJnZXQiLCJBcnJheSIsImlzQXJyYXkiLCJnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUiLCJ2YWx1ZXMiLCJoYXNBdHRyaWJ1dGUiLCJjaGVja2VkIiwiaW5wdXRWYWx1ZSIsIkhUTUxTZWxlY3RFbGVtZW50IiwibXVsdGlwbGUiLCJmcm9tIiwic2VsZWN0ZWRPcHRpb25zIiwiZWwiLCJzZXRWYWx1ZU9uRWxlbWVudCIsInZhbHVlRm91bmQiLCJ2YWwiLCJhcnJheVdyYXBwZWRWYWx1ZSIsImNvbmNhdCIsIm9wdGlvbnMiLCJvcHRpb24iLCJzZWxlY3RlZCIsImluY2x1ZGVzIiwidW5kZWZpbmVkIiwiZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMiLCJkaXJlY3RpdmUiLCJ0aHJvd09uTWlzc2luZyIsImRhdGFNb2RlbERpcmVjdGl2ZXMiLCJmb3JtRWxlbWVudCIsImNsb3Nlc3QiLCJnZXRFbGVtZW50QXNUYWdUZXh0IiwiZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQiLCJjb21wb25lbnQiLCJjb250YWlucyIsImZvdW5kQ2hpbGRDb21wb25lbnQiLCJnZXRDaGlsZHJlbiIsImNoaWxkQ29tcG9uZW50IiwiY2xvbmVIVE1MRWxlbWVudCIsIm5ld0VsZW1lbnQiLCJjbG9uZU5vZGUiLCJIVE1MRWxlbWVudCIsImh0bWxUb0VsZW1lbnQiLCJodG1sIiwidGVtcGxhdGUiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hpbGRFbGVtZW50Q291bnQiLCJjaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwib3V0ZXJIVE1MIiwic2xpY2UiLCJjdXJyZW50VmFsdWVzIiwiZmluYWxWYWx1ZXMiLCJpbmRleCIsInNwbGljZSIsImdldERlZXBEYXRhIiwicHJvcGVydHlQYXRoIiwicGFyc2VEZWVwRGF0YSIsImN1cnJlbnRMZXZlbERhdGEiLCJmaW5hbEtleSIsImZpbmFsRGF0YSIsInBhcnNlIiwiVmFsdWVTdG9yZSIsInByb3BzIiwiZGlydHlQcm9wcyIsInBlbmRpbmdQcm9wcyIsInVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQiLCJub3JtYWxpemVkTmFtZSIsImN1cnJlbnRWYWx1ZSIsImFzc2lnbiIsImNoYW5nZWQiLCJlbnRyaWVzIiwia2V5IiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsIm1vcnBoQXR0cnMiLCJmcm9tTm9kZSIsInRvTm9kZSIsInRvTm9kZUF0dHJzIiwiYXR0cmlidXRlcyIsImF0dHIiLCJhdHRyTmFtZSIsImF0dHJOYW1lc3BhY2VVUkkiLCJhdHRyVmFsdWUiLCJmcm9tVmFsdWUiLCJub2RlVHlwZSIsIm5hbWVzcGFjZVVSSSIsImxvY2FsTmFtZSIsImdldEF0dHJpYnV0ZU5TIiwic2V0QXR0cmlidXRlTlMiLCJzZXRBdHRyaWJ1dGUiLCJmcm9tTm9kZUF0dHJzIiwiZCIsImhhc0F0dHJpYnV0ZU5TIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyYW5nZSIsIk5TX1hIVE1MIiwiZG9jIiwiSEFTX1RFTVBMQVRFX1NVUFBPUlQiLCJIQVNfUkFOR0VfU1VQUE9SVCIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUiLCJzdHIiLCJjaGlsZE5vZGVzIiwiY3JlYXRlRnJhZ21lbnRGcm9tUmFuZ2UiLCJzZWxlY3ROb2RlIiwiZnJhZ21lbnQiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJjcmVhdGVGcmFnbWVudEZyb21XcmFwIiwidG9FbGVtZW50IiwiY29tcGFyZU5vZGVOYW1lcyIsImZyb21FbCIsInRvRWwiLCJmcm9tTm9kZU5hbWUiLCJub2RlTmFtZSIsInRvTm9kZU5hbWUiLCJmcm9tQ29kZVN0YXJ0IiwidG9Db2RlU3RhcnQiLCJjaGFyQ29kZUF0IiwidG9VcHBlckNhc2UiLCJjcmVhdGVFbGVtZW50TlMiLCJtb3ZlQ2hpbGRyZW4iLCJjdXJDaGlsZCIsImZpcnN0Q2hpbGQiLCJuZXh0Q2hpbGQiLCJuZXh0U2libGluZyIsImFwcGVuZENoaWxkIiwic3luY0Jvb2xlYW5BdHRyUHJvcCIsInNwZWNpYWxFbEhhbmRsZXJzIiwiT1BUSU9OIiwicGFyZW50Tm9kZSIsInBhcmVudE5hbWUiLCJzZWxlY3RlZEluZGV4IiwiSU5QVVQiLCJURVhUQVJFQSIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJub2RlVmFsdWUiLCJwbGFjZWhvbGRlciIsIlNFTEVDVCIsIm9wdGdyb3VwIiwiRUxFTUVOVF9OT0RFIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSQxIiwiVEVYVF9OT0RFIiwiQ09NTUVOVF9OT0RFIiwibm9vcCIsImRlZmF1bHRHZXROb2RlS2V5Iiwibm9kZSIsImlkIiwibW9ycGhkb21GYWN0b3J5IiwibW9ycGhkb20iLCJ0b05vZGVIdG1sIiwiZ2V0Tm9kZUtleSIsIm9uQmVmb3JlTm9kZUFkZGVkIiwib25Ob2RlQWRkZWQiLCJvbkJlZm9yZUVsVXBkYXRlZCIsIm9uRWxVcGRhdGVkIiwib25CZWZvcmVOb2RlRGlzY2FyZGVkIiwib25Ob2RlRGlzY2FyZGVkIiwib25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZCIsInNraXBGcm9tQ2hpbGRyZW4iLCJhZGRDaGlsZCIsInBhcmVudCIsImNoaWxkcmVuT25seSIsImZyb21Ob2Rlc0xvb2t1cCIsImNyZWF0ZSIsImtleWVkUmVtb3ZhbExpc3QiLCJhZGRLZXllZFJlbW92YWwiLCJ3YWxrRGlzY2FyZGVkQ2hpbGROb2RlcyIsInNraXBLZXllZE5vZGVzIiwicmVtb3ZlTm9kZSIsInJlbW92ZUNoaWxkIiwiaW5kZXhUcmVlIiwiaGFuZGxlTm9kZUFkZGVkIiwidW5tYXRjaGVkRnJvbUVsIiwicmVwbGFjZUNoaWxkIiwibW9ycGhFbCIsImNsZWFudXBGcm9tRWwiLCJjdXJGcm9tTm9kZUNoaWxkIiwiY3VyRnJvbU5vZGVLZXkiLCJmcm9tTmV4dFNpYmxpbmciLCJ0b0VsS2V5IiwibW9ycGhDaGlsZHJlbiIsInNraXBGcm9tIiwiY3VyVG9Ob2RlQ2hpbGQiLCJjdXJUb05vZGVLZXkiLCJ0b05leHRTaWJsaW5nIiwibWF0Y2hpbmdGcm9tRWwiLCJvdXRlciIsImlzU2FtZU5vZGUiLCJjdXJGcm9tTm9kZVR5cGUiLCJpc0NvbXBhdGlibGUiLCJpbnNlcnRCZWZvcmUiLCJvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCIsImFjdHVhbGl6ZSIsIm93bmVyRG9jdW1lbnQiLCJzcGVjaWFsRWxIYW5kbGVyIiwibW9ycGhlZE5vZGUiLCJtb3JwaGVkTm9kZVR5cGUiLCJ0b05vZGVUeXBlIiwibGVuIiwiZWxUb1JlbW92ZSIsIm5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uIiwiaXNGaWxlSW5wdXQiLCJjaGlsZHJlbiIsImV4ZWN1dGVNb3JwaGRvbSIsInJvb3RGcm9tRWxlbWVudCIsInJvb3RUb0VsZW1lbnQiLCJtb2RpZmllZEZpZWxkRWxlbWVudHMiLCJnZXRFbGVtZW50VmFsdWUiLCJjaGlsZENvbXBvbmVudHMiLCJmaW5kQ2hpbGRDb21wb25lbnQiLCJnZXRLZXlGcm9tRWxlbWVudCIsImV4dGVybmFsTXV0YXRpb25UcmFja2VyIiwiY2hpbGRDb21wb25lbnRNYXAiLCJNYXAiLCJzZXQiLCJ3YXNFbGVtZW50QWRkZWQiLCJNYXRoIiwicmFuZG9tIiwiX194Iiwid2luZG93IiwiQWxwaW5lIiwibW9ycGgiLCJoYXMiLCJ1cGRhdGVGcm9tTmV3RWxlbWVudEZyb21QYXJlbnRSZW5kZXIiLCJlbGVtZW50Q2hhbmdlcyIsImdldENoYW5nZWRFbGVtZW50IiwiYXBwbHlUb0VsZW1lbnQiLCJpc0VxdWFsTm9kZSIsIm5vcm1hbGl6ZWRGcm9tRWwiLCJub3JtYWxpemVkVG9FbCIsIlVuc3luY2VkSW5wdXRzVHJhY2tlciIsIm1vZGVsRWxlbWVudFJlc29sdmVyIiwiZWxlbWVudEV2ZW50TGlzdGVuZXJzIiwiY2FsbGJhY2siLCJoYW5kbGVJbnB1dEV2ZW50IiwidW5zeW5jZWRJbnB1dHMiLCJVbnN5bmNlZElucHV0Q29udGFpbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1vZGVsTmFtZSIsIm1hcmtNb2RlbEFzU3luY2VkIiwidXBkYXRlTW9kZWxGcm9tRWxlbWVudCIsImdldE1vZGVsTmFtZSIsImFsbFVuc3luY2VkSW5wdXRzIiwiZ2V0VW5zeW5jZWRNb2RlbE5hbWVzIiwicmVzZXRVbnN5bmNlZEZpZWxkcyIsInVuc3luY2VkTm9uTW9kZWxGaWVsZHMiLCJ1bnN5bmNlZE1vZGVsTmFtZXMiLCJ1bnN5bmNlZE1vZGVsRmllbGRzIiwiSG9va01hbmFnZXIiLCJob29rcyIsImhvb2tOYW1lIiwiQmFja2VuZFJlc3BvbnNlIiwidGV4dCIsIkNoYW5naW5nSXRlbXNUcmFja2VyIiwiY2hhbmdlZEl0ZW1zIiwicmVtb3ZlZEl0ZW1zIiwiaXRlbU5hbWUiLCJwcmV2aW91c1ZhbHVlIiwicmVtb3ZlZFJlY29yZCIsIm9yaWdpbmFsIiwib3JpZ2luYWxSZWNvcmQiLCJ0cnVlT3JpZ2luYWxWYWx1ZSIsInNpemUiLCJFbGVtZW50Q2hhbmdlcyIsImFkZGVkQ2xhc3NlcyIsInJlbW92ZWRDbGFzc2VzIiwic3R5bGVDaGFuZ2VzIiwiYXR0cmlidXRlQ2hhbmdlcyIsImNsYXNzTmFtZSIsImZpbHRlciIsInN0eWxlTmFtZSIsIm9yaWdpbmFsVmFsdWUiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImF0dHJpYnV0ZU5hbWUiLCJnZXRDaGFuZ2VkSXRlbXMiLCJnZXRSZW1vdmVkSXRlbXMiLCJjaGFuZ2UiLCJzZXRQcm9wZXJ0eSIsInJlbW92ZVByb3BlcnR5IiwiaXNFbXB0eSIsIkV4dGVybmFsTXV0YXRpb25UcmFja2VyIiwic2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayIsImNoYW5nZWRFbGVtZW50cyIsIldlYWtNYXAiLCJjaGFuZ2VkRWxlbWVudHNDb3VudCIsImFkZGVkRWxlbWVudHMiLCJyZW1vdmVkRWxlbWVudHMiLCJpc1N0YXJ0ZWQiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9uTXV0YXRpb25zIiwiYmluZCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJkaXNjb25uZWN0IiwidGFrZVJlY29yZHMiLCJtdXRhdGlvbnMiLCJoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zIiwibXV0YXRpb24iLCJpc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24iLCJpc0NoYW5nZUluQWRkZWRFbGVtZW50IiwiYWRkZWRFbGVtZW50IiwiaGFuZGxlQ2hpbGRMaXN0TXV0YXRpb24iLCJoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbiIsImFkZGVkTm9kZXMiLCJFbGVtZW50IiwicmVtb3ZlZE5vZGVzIiwiY2hhbmdlZEVsZW1lbnQiLCJoYW5kbGVDbGFzc0F0dHJpYnV0ZU11dGF0aW9uIiwiaGFuZGxlU3R5bGVBdHRyaWJ1dGVNdXRhdGlvbiIsImhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbiIsInByZXZpb3VzVmFsdWVzIiwidHJpbW1lZFZhbHVlIiwibmV3VmFsdWVzIiwiY2FsbCIsImFkZGVkVmFsdWVzIiwicmVtb3ZlZFZhbHVlcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJwcmV2aW91c1N0eWxlcyIsImV4dHJhY3RTdHlsZXMiLCJuZXdTdHlsZXMiLCJhZGRlZE9yQ2hhbmdlZFN0eWxlcyIsInJlbW92ZWRTdHlsZXMiLCJhZGRTdHlsZSIsInJlbW92ZVN0eWxlIiwiYWRkQXR0cmlidXRlIiwic3R5bGVzIiwic3R5bGVPYmplY3QiLCJwcm9wZXJ0eSIsInRhZ05hbWUiLCJDaGlsZENvbXBvbmVudFdyYXBwZXIiLCJtb2RlbEJpbmRpbmdzIiwiQ29tcG9uZW50IiwibGlzdGVuZXJzIiwiY29tcG9uZW50RmluZGVyIiwiZmluZ2VycHJpbnQiLCJiYWNrZW5kIiwiZWxlbWVudERyaXZlciIsImRlZmF1bHREZWJvdW5jZSIsImJhY2tlbmRSZXF1ZXN0IiwicGVuZGluZ0FjdGlvbnMiLCJwZW5kaW5nRmlsZXMiLCJpc1JlcXVlc3RQZW5kaW5nIiwicmVxdWVzdERlYm91bmNlVGltZW91dCIsImxpc3RlbmVyIiwiX2EiLCJ1bnN5bmNlZElucHV0c1RyYWNrZXIiLCJyZXNldFByb21pc2UiLCJzdGFydCIsIm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSIsInBsdWdpbiIsImF0dGFjaFRvQ29tcG9uZW50IiwidHJpZ2dlckhvb2siLCJhY3RpdmF0ZSIsImNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCIsImRlYWN0aXZhdGUiLCJzdG9wIiwicmVnaXN0ZXIiLCJ1bnJlZ2lzdGVyIiwicmVSZW5kZXIiLCJkZWJvdW5jZSIsInByb21pc2UiLCJuZXh0UmVxdWVzdFByb21pc2UiLCJpc0NoYW5nZWQiLCJkZWJvdW5jZWRTdGFydFJlcXVlc3QiLCJpbnB1dCIsInRyeVN0YXJ0aW5nUmVxdWVzdCIsImdldFVuc3luY2VkTW9kZWxzIiwib24iLCJvZmYiLCJvbmx5TWF0Y2hpbmdDb21wb25lbnRzTmFtZWQiLCJwZXJmb3JtRW1pdCIsImRvRW1pdCIsImVtaXRVcCIsIm1hdGNoaW5nTmFtZSIsImNvbXBvbmVudHMiLCJhY3Rpb25zIiwiZ2V0Q29tcG9uZW50UHJvcHMiLCJzdG9yZU5ld1Byb3BzRnJvbVBhcmVudCIsImxpdmVGaW5nZXJwcmludFZhbHVlIiwicmVuZGVyIiwiY2hpbGRXcmFwcGVyIiwibW9kZWxCaW5kaW5nIiwiY2hpbGRNb2RlbE5hbWUiLCJpbm5lck1vZGVsTmFtZSIsInNob3VsZFJlbmRlciIsIlR1cmJvIiwicGVyZm9ybVJlcXVlc3QiLCJ0aGlzUHJvbWlzZVJlc29sdmUiLCJuZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlIiwiZmlsZXNUb1NlbmQiLCJtYWtlUmVxdWVzdCIsImdldE9yaWdpbmFsUHJvcHMiLCJnZXREaXJ0eVByb3BzIiwiZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMiLCJnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50IiwiZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nIiwiYmFja2VuZFJlc3BvbnNlIiwiZ2V0Qm9keSIsImNvbnRyb2xzIiwiZGlzcGxheUVycm9yIiwicHVzaFBlbmRpbmdQcm9wc0JhY2tUb0RpcnR5IiwicmVuZGVyRXJyb3IiLCJwcm9jZXNzUmVyZW5kZXIiLCJpc1R1cmJvRW5hYmxlZCIsInZpc2l0IiwibG9jYXRpb24iLCJocmVmIiwibW9kaWZpZWRNb2RlbFZhbHVlcyIsIm1hdGNoZXMiLCJuZXdQcm9wcyIsInJlaW5pdGlhbGl6ZUFsbFByb3BzIiwiZXZlbnRzVG9FbWl0IiwiZ2V0RXZlbnRzVG9FbWl0IiwiYnJvd3NlckV2ZW50c1RvRGlzcGF0Y2giLCJnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCIsImhhbmRsZVBlbmRpbmdDaGFuZ2VzIiwiZ2V0VW5zeW5jZWRJbnB1dHMiLCJmaW5kQ2hpbGRDb21wb25lbnRFbGVtZW50IiwiY29tcG9uZW50TmFtZSIsImVtaXRTZWxmIiwiZW1pdCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJjYWxjdWxhdGVEZWJvdW5jZSIsIm1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJmbGV4RGlyZWN0aW9uIiwiaWZyYW1lIiwiYm9yZGVyUmFkaXVzIiwiZmxleEdyb3ciLCJwcmVwZW5kIiwib3ZlcmZsb3ciLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJjbG9zZU1vZGFsIiwiZm9jdXMiLCJmaW5nZXJwcmludHMiLCJ0YWciLCJ0b0xvd2VyQ2FzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicHJveGlmeUNvbXBvbmVudCIsIlByb3h5IiwicHJvcCIsImNhbGxhYmxlIiwiYXBwbHkiLCJSZWZsZWN0IiwiZ2V0RGF0YSIsIkJhY2tlbmRSZXF1ZXN0IiwidXBkYXRlTW9kZWxzIiwiaXNSZXNvbHZlZCIsInVwZGF0ZWRNb2RlbHMiLCJ0YXJnZXRlZEFjdGlvbnMiLCJ0YXJnZXRlZE1vZGVscyIsIlJlcXVlc3RCdWlsZGVyIiwidXJsIiwiY3NyZlRva2VuIiwidXBkYXRlZCIsInNwbGl0VXJsIiwicXVlcnlTdHJpbmciLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaE9wdGlvbnMiLCJBY2NlcHQiLCJ0b3RhbEZpbGVzIiwicmVkdWNlIiwidG90YWwiLCJjdXJyZW50IiwiaGFzRmluZ2VycHJpbnRzIiwid2lsbERhdGFGaXRJblVybCIsInJlcXVlc3REYXRhIiwicHJvcHNGcm9tUGFyZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBhcmFtc1N0cmluZyIsInRvU3RyaW5nIiwicHJvcHNKc29uIiwidXBkYXRlZEpzb24iLCJjaGlsZHJlbkpzb24iLCJwcm9wc0Zyb21QYXJlbnRKc29uIiwidXJsRW5jb2RlZEpzb25EYXRhIiwiQmFja2VuZCIsInJlcXVlc3RCdWlsZGVyIiwiYnVpbGRSZXF1ZXN0IiwiYmFja2VuZEFjdGlvbiIsIlN0YW5kYXJkRWxlbWVudERyaXZlciIsIm1vZGVsRGlyZWN0aXZlIiwicm9vdEVsZW1lbnQiLCJsaXZlUHJvcHNWYWx1ZSIsImxpdmVJZCIsImV2ZW50c0pzb24iLCJsaXZlRW1pdCIsImxpdmVCcm93c2VyRGlzcGF0Y2giLCJMb2FkaW5nUGx1Z2luIiwicmVxdWVzdCIsInN0YXJ0TG9hZGluZyIsImZpbmlzaExvYWRpbmciLCJ0YXJnZXRFbGVtZW50IiwiaGFuZGxlTG9hZGluZ1RvZ2dsZSIsImlzTG9hZGluZyIsImFkZEF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGVzIiwiZ2V0TG9hZGluZ0RpcmVjdGl2ZXMiLCJoYW5kbGVMb2FkaW5nRGlyZWN0aXZlIiwiZmluYWxBY3Rpb24iLCJwYXJzZUxvYWRpbmdBY3Rpb24iLCJkZWxheSIsInZhbGlkTW9kaWZpZXJzIiwibW9kaWZpZXIiLCJwYXJzZUludCIsImNvbnRhaW5zT25lT2ZBY3Rpb25zIiwiYXJlQW55TW9kZWxzVXBkYXRlZCIsImxvYWRpbmdEaXJlY3RpdmUiLCJzaG93RWxlbWVudCIsImhpZGVFbGVtZW50IiwibG9hZGluZ0RpcmVjdGl2ZXMiLCJTVkdFbGVtZW50IiwibG9hZGluZyIsImNsYXNzZXMiLCJhdHRyaWJ1dGUiLCJWYWxpZGF0ZWRGaWVsZHNQbHVnaW4iLCJoYW5kbGVNb2RlbFNldCIsInZhbGlkYXRlZEZpZWxkcyIsIlBhZ2VVbmxvYWRpbmdQbHVnaW4iLCJpc0Nvbm5lY3RlZCIsIlBvbGxpbmdEaXJlY3RvciIsImlzUG9sbGluZ0FjdGl2ZSIsInBvbGxpbmdJbnRlcnZhbHMiLCJhY3Rpb25OYW1lIiwiZHVyYXRpb24iLCJwb2xscyIsImluaXRpYXRlUG9sbCIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInN0b3BBbGxQb2xsaW5nIiwic3RhcnRBbGxQb2xsaW5nIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsIlBvbGxpbmdQbHVnaW4iLCJwb2xsaW5nRGlyZWN0b3IiLCJpbml0aWFsaXplUG9sbGluZyIsImFkZFBvbGwiLCJjbGVhclBvbGxpbmciLCJwb2xsIiwicmF3UG9sbENvbmZpZyIsIndhcm4iLCJTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbiIsInN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzIiwiSFRNTEZvcm1FbGVtZW50IiwiZ2V0TW9kZWxCaW5kaW5nIiwidGFyZ2V0RXZlbnROYW1lIiwiQ29tcG9uZW50UmVnaXN0cnkiLCJjb21wb25lbnRNYXBCeUVsZW1lbnQiLCJjb21wb25lbnRNYXBCeUNvbXBvbmVudCIsInJlamVjdCIsImNvdW50IiwibWF4Q291bnQiLCJjdXJyZW50Q29tcG9uZW50Iiwib25seVBhcmVudHMiLCJvbmx5TWF0Y2hOYW1lIiwiZ2V0Q29tcG9uZW50IiwiTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IiwiY29tcG9uZW50UmVnaXN0cnkiLCJhcmd1bWVudHMiLCJwZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCIsImhhbmRsZUNoYW5nZUV2ZW50IiwiaGFuZGxlQ29ubmVjdGVkQ29udHJvbGxlckV2ZW50IiwiaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQiLCJuYW1lVmFsdWUiLCJwcm9wc1ZhbHVlIiwibGlzdGVuZXJzVmFsdWUiLCJmaW5kQ29tcG9uZW50cyIsImZpbmdlcnByaW50VmFsdWUiLCJ1cmxWYWx1ZSIsImNzcmZWYWx1ZSIsInByb3hpZWRDb21wb25lbnQiLCJfX2NvbXBvbmVudCIsImhhc0RlYm91bmNlVmFsdWUiLCJkZWJvdW5jZVZhbHVlIiwicGx1Z2lucyIsImFkZFBsdWdpbiIsInJlZ2lzdGVyQ29tcG9uZW50IiwiY29ubmVjdCIsInVucmVnaXN0ZXJDb21wb25lbnQiLCJjdXJyZW50VGFyZ2V0IiwidXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50IiwicmF3QWN0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2V0RW1pdERpcmVjdGl2ZXMiLCJuYW1lTWF0Y2giLCJldmVudEluZm8iLCJlbWl0cyIsImV2ZW50TmFtZSIsImZpbmFsVmFsdWUiLCJjaGlsZENvbnRyb2xsZXIiLCJjb250cm9sbGVyIiwiZ2V0UGFyZW50IiwibW9kZWxEaXJlY3RpdmVzIiwiY2FuQnViYmxlIiwiY2FuY2VsYWJsZSIsIlN0cmluZyIsImNzcmYiLCJOdW1iZXIiLCJfYiIsImludHJvIiwiaW50cm9WYWx1ZSIsInJlc29sdmVTdmVsdGVDb21wb25lbnQiLCJjb21wb25lbnRWYWx1ZSIsIl9kZXN0cm95SWZFeGlzdHMiLCJyb290IiwiJGRlc3Ryb3kiLCJCb29sZWFuIiwiU3d1cCIsIlN3dXBEZWJ1Z1BsdWdpbiIsIlN3dXBGb3Jtc1BsdWdpbiIsIlN3dXBGYWRlVGhlbWUiLCJTd3VwU2xpZGVUaGVtZSIsImRhdGFDb250YWluZXJzIiwiY29udGFpbmVyc1ZhbHVlIiwibWFpbkVsZW1lbnQiLCJtYWluRWxlbWVudFZhbHVlIiwiYWxsRWxlbWVudHMiLCJjb250YWluZXJzTGlzdCIsIml0ZW0iLCJjb250YWluZXJzIiwidGhlbWVWYWx1ZSIsImhhc01haW5FbGVtZW50VmFsdWUiLCJoYXNBbmltYXRlSGlzdG9yeUJyb3dzaW5nVmFsdWUiLCJhbmltYXRlSGlzdG9yeUJyb3dzaW5nIiwiYW5pbWF0ZUhpc3RvcnlCcm93c2luZ1ZhbHVlIiwiaGFzQW5pbWF0aW9uU2VsZWN0b3JWYWx1ZSIsImFuaW1hdGlvblNlbGVjdG9yIiwiYW5pbWF0aW9uU2VsZWN0b3JWYWx1ZSIsImhhc0NhY2hlVmFsdWUiLCJjYWNoZSIsImNhY2hlVmFsdWUiLCJoYXNMaW5rU2VsZWN0b3JWYWx1ZSIsImxpbmtTZWxlY3RvciIsImxpbmtTZWxlY3RvclZhbHVlIiwiZGVidWdWYWx1ZSIsInN3dXAiLCJ0aGVtZSIsImRlYnVnIiwiaXNEaXNwbGF5ZWQiLCJ2aXNpYmxlSWNvbiIsImhpZGRlbkljb24iLCJ2aXNpYmxlSWNvblZhbHVlIiwiaGlkZGVuSWNvblZhbHVlIiwiYnV0dG9uIiwiY3JlYXRlQnV0dG9uIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiYnV0dG9uQ2xhc3Nlc1ZhbHVlIiwidmlzaWJsZUxhYmVsVmFsdWUiLCJ0b2dnbGVCdXR0b25FbGVtZW50IiwiaGlkZGVuTGFiZWxWYWx1ZSIsInZpc2libGVMYWJlbCIsImhpZGRlbkxhYmVsIiwiYnV0dG9uQ2xhc3NlcyIsInR1cmJvX2NvbnRyb2xsZXIiLCJjb25uZWN0U3RyZWFtU291cmNlIiwiZGlzY29ubmVjdFN0cmVhbVNvdXJjZSIsImVycm9yTWVzc2FnZXMiLCJoYXNIdWJWYWx1ZSIsImhhc1RvcGljVmFsdWUiLCJ1IiwiVVJMIiwiaHViVmFsdWUiLCJzZWFyY2hQYXJhbXMiLCJ0b3BpY1ZhbHVlIiwiZXMiLCJFdmVudFNvdXJjZSIsInRvcGljIiwiaHViIl0sInNvdXJjZVJvb3QiOiIifQ==