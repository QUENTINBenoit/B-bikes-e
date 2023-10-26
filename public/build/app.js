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
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_swup_debug-plugin_l-d06419"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxDQUFDeHNCLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQztNQUMzRCxJQUFJd3NCLGFBQWEsQ0FBQzVzQixNQUFNLEVBQ3BCLE1BQU0sSUFBSUMsS0FBSyxDQUFDMnNCLGFBQWEsQ0FBQ2hyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDNUMsSUFBTW1yQixDQUFDLEdBQUcsSUFBSUMsR0FBRyxDQUFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDO01BQ2hDRixDQUFDLENBQUNHLFlBQVksQ0FBQ2xNLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDbU0sVUFBVSxDQUFDO01BQy9DLElBQUksQ0FBQ3ZOLEdBQUcsR0FBR21OLENBQUMsQ0FBQzdMLFFBQVEsRUFBRTtJQUMzQjtFQUFDO0lBQUE7SUFBQSxPQUNELG1CQUFVO01BQ04sSUFBSSxJQUFJLENBQUN0QixHQUFHLEVBQUU7UUFDVixJQUFJLENBQUN3TixFQUFFLEdBQUcsSUFBSUMsV0FBVyxDQUFDLElBQUksQ0FBQ3pOLEdBQUcsQ0FBQztRQUNuQzhNLHFFQUFtQixDQUFDLElBQUksQ0FBQ1UsRUFBRSxDQUFDO01BQ2hDO0lBQ0o7RUFBQztJQUFBO0lBQUEsT0FDRCxzQkFBYTtNQUNULElBQUksSUFBSSxDQUFDQSxFQUFFLEVBQUU7UUFDVCxJQUFJLENBQUNBLEVBQUUsQ0FBQzlPLEtBQUssRUFBRTtRQUNmcU8sd0VBQXNCLENBQUMsSUFBSSxDQUFDUyxFQUFFLENBQUM7TUFDbkM7SUFDSjtFQUFDO0VBQUE7QUFBQSxFQXhCbUIxekIsMkRBQVU7QUEwQmxDMkQsU0FBUyxDQUFDc1UsTUFBTSxHQUFHO0VBQ2YyYixLQUFLLEVBQUV2RSxNQUFNO0VBQ2J3RSxHQUFHLEVBQUV4RTtBQUNULENBQUM7Ozs7Ozs7Ozs7Ozs7QUNoQ0Q7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FjYy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9iY2tvZmYuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWRyb3B6b25lL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXN2ZWx0ZS9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1zd3VwL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdG9nZ2xlLXBhc3N3b3JkL2Fzc2V0cy9kaXN0L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdHVyYm8vYXNzZXRzL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC10dXJiby9hc3NldHMvZGlzdC90dXJib19zdHJlYW1fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9hc3NldHMvZGlzdC9saXZlLm1pbi5jc3M/OTZjMCIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC10b2dnbGUtcGFzc3dvcmQvYXNzZXRzL2Rpc3Qvc3R5bGUubWluLmNzcz8zNjAyIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImltcG9ydCAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvZGlzdC9saXZlLm1pbi5jc3MnO1xuaW1wb3J0ICdAc3ltZm9ueS91eC10b2dnbGUtcGFzc3dvcmQvZGlzdC9zdHlsZS5taW4uY3NzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LWRyb3B6b25lLS1kcm9wem9uZSc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1kcm9wem9uZS9kaXN0L2NvbnRyb2xsZXIuanMnKSxcbiAgJ2xpdmUnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMnKSxcbiAgJ3N5bWZvbnktLXV4LXN2ZWx0ZS0tc3ZlbHRlJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXN2ZWx0ZS9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJyksXG4gICdzeW1mb255LS11eC1zd3VwLS1zd3VwJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXN3dXAvZGlzdC9jb250cm9sbGVyLmpzJyksXG4gICdzeW1mb255LS11eC10b2dnbGUtcGFzc3dvcmQtLXRvZ2dsZS1wYXNzd29yZCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC10b2dnbGUtcGFzc3dvcmQvZGlzdC9jb250cm9sbGVyLmpzJyksXG4gICdzeW1mb255LS11eC10dXJiby0tdHVyYm8tY29yZSc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC10dXJiby9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMnKSxcbiAgJ3N5bWZvbnktLXV4LXR1cmJvLS1tZXJjdXJlLXR1cmJvLXN0cmVhbSc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC10dXJiby9kaXN0L3R1cmJvX3N0cmVhbV9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbjoqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiAiLCJpbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5cbmNvbnN0IGFjYyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGlzYXRpb24gcGFnZSBhY2N1ZWlsXCIpO1xuXG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idG5cIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjLnRvZ2dsZU5hdik7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25DYXRlcmdvcmllc1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2MudG9nZ2xlRHJvcENhdGVnb3JpZXMpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duTWFycXVlc1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY2MudG9nZ2xlRHJvcE1hcnF1ZXMpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkdlbnJlXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjYy50b2dnbGVEcm9wR2VucmUpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duQ291bGV1cnNcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWNjLnRvZ2dsZURyb3BDb3VsZXVycyk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdHJlTW9iaWxlXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjYy50b2dnbGVGaWx0cmVNb2JpbGUpO1xuXG4gICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdGVyU2VsZWN0aW9uXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICBhY2MudG9nZ2xlRnJpbHRlclNlbGVjdGlvblxuICAgICAgKTtcblxuICAgIFxuICB9LFxuXG4gIHRvZ2dsZU5hdjogZnVuY3Rpb24gKCkge1xuICAgIC8vIFJlw6ljdXDDqHJhdGlvbiBkZXMgc3ZnJ3MnXG4gICAgY29uc3QgYnVyZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnVyZ2VyU3ZnXCIpO1xuICAgIGNvbnN0IGNyb2l4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcm9peFN2Z1wiKTtcbiAgICBjb25zdCBtZW51TW9iaWxlID1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlZC1tZW51XCIpO1xuXG4gICAgYnVyZ2dlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGNyb2l4LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG5cbiAgICBjb25zdCB0b2dnbGVkTWVudSA9IG1lbnVNb2JpbGUuY2xhc3NMaXN0LnRvZ2dsZShcbiAgICAgIFwiLXRyYW5zbGF0ZS15LWZ1bGxcIlxuICAgICk7XG5cbiAgICBpZiAodG9nZ2xlZE1lbnUgPT0gdHJ1ZSkge1xuICAgICAgbWVudU1vYmlsZS5jbGFzc0xpc3QuYWRkKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVNb2JpbGUuY2xhc3NMaXN0LnJlbW92ZShcIi10cmFuc2xhdGUteS1mdWxsXCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBmb25jdGlvbiBkcm9wIGZpbHRyZSBjYXRlZ29yaWVzXG4gIHRvZ2dsZURyb3BDYXRlZ29yaWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1lbnVGaWx0cmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNzdWJtZW51RmlsdHJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImR1cmF0aW9uLTUwMFwiKTtcbiBcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNhcnJvd0NhdGVnb3JpZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLTE4MFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25DYXRlcmdvcmllc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiYWNrZHJvcC1ibHVyLTN4bFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25DYXRlcmdvcmllc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiZy13aGl0ZS8yNVwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JzRmlsdGVyc0NhdGVnb3JpZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwidGV4dC1waW5rLTkwMFwiKTtcbiAgfSxcblxuICAvLyBmb25jdGlvbiBkcm9wIGZpbHRyZSBNYXJxdWVzXG4gIHRvZ2dsZURyb3BNYXJxdWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1lbnVGaWx0cmVNYXJxdWVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNhcnJvd01hcnF1ZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLTE4MFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25NYXJxdWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImJhY2tkcm9wLWJsdXItM3hsXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bk1hcnF1ZXNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYmctd2hpdGUvMjVcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2NvbG9yc0ZpbHRlcnNNYXJxdWVzXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInRleHQtcGluay05MDBcIik7XG4gIH0sXG5cbiAgLy8gZm9uY3Rpb24gZHJvcCBmaWx0cmUgR2VucmVcbiAgdG9nZ2xlRHJvcEdlbnJlOiBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1lbnVGaWx0cmVHZW5yZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Fycm93R2VucmVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLTE4MFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25HZW5yZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiYWNrZHJvcC1ibHVyLTN4bFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25HZW5yZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiZy13aGl0ZS8yNVwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjY29sb3JzRmlsdGVyc0dlbnJlXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInRleHQtcGluay05MDBcIik7XG4gIH0sXG5cbiAgLy8gZm9uY3Rpb24gZHJvcCBmaWx0cmUgQ291bGV1cnNcbiAgdG9nZ2xlRHJvcENvdWxldXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJiZW5vaXRcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1lbnVGaWx0cmVDb3VsZXVyc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Fycm93Q291bGV1cnNcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLTE4MFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25Db3VsZXVyc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiYWNrZHJvcC1ibHVyLTN4bFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25Db3VsZXVyc1wiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJiZy13aGl0ZS8yNVwiKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNjb2xvcnNGaWx0ZXJzQ291bGV1clwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJ0ZXh0LXBpbmstODAwXCIpO1xuICB9LFxuXG4gIHRvZ2dsZUZpbHRyZU1vYmlsZTogZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNmaWx0cmVNb2JpbGVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLTE4MFwiKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNmaWx0cmVNb2JpbGVcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwidHJhbnNsYXRlLXgtWzhyZW1dXCIpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2ZpbHRyZU1vYmlsZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJtZDp0cmFuc2xhdGUteC1bMjNyZW1dXCIpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2ZpbHRyZVwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJ0cmFuc2xhdGUteC1bMHJlbV1cIik7XG4gIH0sXG4gIC8qXG4gIHRvZ2dsZUZyaWx0ZXJTZWxlY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBtZW51U2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI3N1Ym1lbnVGaWx0ZXJTZWxlY3Rpb25cIlxuICAgICk7XG4gICAgY29uc3QgdG9nZ2xlRmlsdGVyU2VsZWN0aW9uID1cbiAgICAgIG1lbnVTZWxlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZShcIi10cmFuc2xhdGUteS1mdWxsXCIpO1xuXG4gICAgaWYgKHRvZ2dsZUZpbHRlclNlbGVjdGlvbiA9PSB0cnVlKSB7XG4gICAgICBtZW51U2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCItdHJhbnNsYXRlLXktZnVsbFwiKTtcbiAgICAgIG1lbnVTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZChcImR1cmF0aW9uLTcwMFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVudVNlbGVjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIik7XG4gICAgfVxuIFxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNhcnJvd0ZpbHRlclNlbGVjdGlvblwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGUtMTgwXCIpO1xuICB9LFxuICAqL1xuXG5cblxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYWNjLmluaXQpO1xuIiwiaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuLy9pbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XG5pbXBvcnQgXCIuLi9hc3NldHMvc3R5bGVzL2FwcC5jc3NcIjtcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5cbiAvLyBhc3NldHMvYXBwLmpzXG5pbXBvcnQgXCIuL2FjYy5qc1wiO1xuaW1wb3J0IFwiLi9iY2tvZmYuanNcIjtcbmltcG9ydCBcIi4vaW1hZ2VzLmpzXCI7XG5pbXBvcnQgXCJmbG93Yml0ZVwiO1xuIiwiY29uc3QgYmNrb2ZmID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGlzYXRpb24gYmFjayBvZmYgZGUgYmVub2l0IFwiXG4gICAgICApO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjbmF2aWdhdGlvbklkXCIpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYmNrb2ZmLm9wZW5TaWRlQmVub2l0KTtcblxuICAgIH0sXG4gIFxuICAgIG9wZW5TaWRlQmVub2l0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIiB2b3VzIGV0ZXMgYmllbiBkYW5zIG9wZW5TaWRlQmVub2l0IFwiKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI25hdmlnYXRpb25JZFwiKVxuICAgICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZS0xODBcIik7XG4gIFxuICAgICAgY29uc3Qgc2lkZUJhck5hdiA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2U2lkZWJhclwiKTtcbiAgICAgIGNvbnN0IHN0cm9rZUNvbG9ycyA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmxlY2hlSWRcIik7XG4gIFxuICAgICAgc2lkZUJhciA9IHNpZGVCYXJOYXYuY2xhc3NMaXN0LnRvZ2dsZShcInctMTZcIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzaWRlQmFyLCBcImluZm8yXCIpO1xuICBcbiAgICAgIGlmIChzaWRlQmFyID09IHRydWUpIHtcbiAgICAgICAgc2lkZUJhck5hdi5jbGFzc0xpc3QuYWRkKFwidy0xNlwiKTtcbiAgICAgICAgc3Ryb2tlQ29sb3JzLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJva2UtcGluay05MDBcIik7XG4gICAgICAgIHN0cm9rZUNvbG9ycy5jbGFzc0xpc3QuYWRkKFwic3Ryb2tlLXdoaXRlXCIpO1xuICAgICAgICBzaWRlQmFyTmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJ3LTU2XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZUJhck5hdi5jbGFzc0xpc3QuYWRkKFwidy01NlwiKTtcbiAgICAgICAgc3Ryb2tlQ29sb3JzLmNsYXNzTGlzdC5hZGQoXCJzdHJva2UtcGluay05MDBcIik7XG4gICAgICAgIHN0cm9rZUNvbG9ycy5jbGFzc0xpc3QucmVtb3ZlKFwic3Ryb2tlLXdoaXRlXCIpO1xuICAgICAgICBzaWRlQmFyTmF2LmNsYXNzTGlzdC5hZGQoXCJkdXJhdGlvbi01MDBcIik7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbiAgXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGJja29mZi5pbml0KTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuXG5cbiIsImNvbnN0IGltYWdlcyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbGlzdGlvbiBkdSBmaWNoaWVyIGltYWdlcy5qcyBiYWNrIG9mZmljZSBcIik7XG5cbiAgICBsZXQgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZGVsZXRlXVwiKTsgXG5cbiAgICAvLyBKZSBib3VjbGUgc3VyIG1lcyBsaWVuc1xuICAgICBmb3IgKCBsZXQgbGluayBvZiBsaW5rcykge1xuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW1hZ2VzLmRlbGV0ZUltYWdlUHJvZHVjdCk7XG4gICAgICBjb25zb2xlLmxvZyhsaW5rKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gIH0sXG4gIGRlbGV0ZUltYWdlUHJvZHVjdCA6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJ2b3VzIGV0ZXMgYmllbiBkYW5zIGRlbGV0ZUltYWdlUHJvZHVjdFwiKTtcbiAgICAvLyBKZSBkZW1hbmRlIGNvbmZpcm1hdGlvblxuICAgIGlmKGNvbmZpcm0oJ1ZvdWxlei12b3VzIHN1cHByaW1lciBjZXR0ZSBpbWFnZSBkZSB2b3RyZSBwcmR1aXQgPycpKXtcbiAgICAgIC8vIEonZW52b2llIG1hIHJlcXXDqnRlIGFqYXhcbiAgICAgIGZldGNoKHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0sIFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcIl90b2tlblwiOiB0aGlzLmRhdGFzZXQudG9rZW59KVxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGlmKGRhdGEuc3VjY2Vzcyl7XG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBhbGVydChkYXRhLmVycm9yKTtcbiAgICAgIH0gICAgXG4gICAgfSlcblxuICB9XG4gIH1cblxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW1hZ2VzLmluaXQpOyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucHJldmlld0NsZWFyQnV0dG9uVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbGVhcigpKTtcbiAgICAgICAgdGhpcy5pbnB1dFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHRoaXMub25JbnB1dENoYW5nZShldmVudCkpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRUYXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5pbnB1dFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlclRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5wcmV2aWV3VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgdGhpcy5wcmV2aWV3RmlsZW5hbWVUYXJnZXQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjbGVhcicpO1xuICAgIH1cbiAgICBvbklucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGlmICh0eXBlb2YgZmlsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlucHV0VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5wcmV2aWV3RmlsZW5hbWVUYXJnZXQudGV4dENvbnRlbnQgPSBmaWxlLm5hbWU7XG4gICAgICAgIHRoaXMucHJldmlld1RhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBpZiAoZmlsZS50eXBlICYmIGZpbGUudHlwZS5pbmRleE9mKCdpbWFnZScpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fcG9wdWxhdGVJbWFnZVByZXZpZXcoZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjaGFuZ2UnLCBmaWxlKTtcbiAgICB9XG4gICAgX3BvcHVsYXRlSW1hZ2VQcmV2aWV3KGZpbGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBGaWxlUmVhZGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHRoaXMucHJldmlld0ltYWdlVGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCInICsgZXZlbnQudGFyZ2V0LnJlc3VsdCArICdcIiknO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCA9IHt9KSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ2Ryb3B6b25lJyB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudGFyZ2V0cyA9IFsnaW5wdXQnLCAncGxhY2Vob2xkZXInLCAncHJldmlldycsICdwcmV2aWV3Q2xlYXJCdXR0b24nLCAncHJldmlld0ZpbGVuYW1lJywgJ3ByZXZpZXdJbWFnZSddO1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlcyhjb250ZW50KSB7XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IFtdO1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aXZlcztcbiAgICB9XG4gICAgbGV0IGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudE5hbWUgPSAnJztcbiAgICBsZXQgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICBsZXQgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgIGxldCBjdXJyZW50TmFtZWRBcmd1bWVudHMgPSB7fTtcbiAgICBsZXQgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgIGxldCBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIGNvbnN0IGdldExhc3RBY3Rpb25OYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50QWN0aW9uTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYW55IGRpcmVjdGl2ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlc1tkaXJlY3RpdmVzLmxlbmd0aCAtIDFdLmFjdGlvbjtcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hJbnN0cnVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICAgIGFjdGlvbjogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICAgICAgICBhcmdzOiBjdXJyZW50QXJndW1lbnRzLFxuICAgICAgICAgICAgbmFtZWQ6IGN1cnJlbnROYW1lZEFyZ3VtZW50cyxcbiAgICAgICAgICAgIG1vZGlmaWVyczogY3VycmVudE1vZGlmaWVycyxcbiAgICAgICAgICAgIGdldFN0cmluZzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgICAgIGN1cnJlbnROYW1lZEFyZ3VtZW50cyA9IHt9O1xuICAgICAgICBjdXJyZW50TW9kaWZpZXJzID0gW107XG4gICAgICAgIHN0YXRlID0gJ2FjdGlvbic7XG4gICAgfTtcbiAgICBjb25zdCBwdXNoQXJndW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1peGVkQXJnVHlwZXNFcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm9ybWFsIGFuZCBuYW1lZCBhcmd1bWVudHMgY2Fubm90IGJlIG1peGVkIGluc2lkZSBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcImApO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoY3VycmVudEFyZ3VtZW50TmFtZSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1peGVkQXJnVHlwZXNFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudE5hbWVkQXJndW1lbnRzW2N1cnJlbnRBcmd1bWVudE5hbWUudHJpbSgpXSA9IGN1cnJlbnRBcmd1bWVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnROYW1lZEFyZ3VtZW50cykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1peGVkQXJnVHlwZXNFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50cy5wdXNoKGN1cnJlbnRBcmd1bWVudFZhbHVlLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgIH07XG4gICAgY29uc3QgcHVzaE1vZGlmaWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RpZmllciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcIiBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIGFyZ3VtZW50cy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoY3VycmVudE5hbWVkQXJndW1lbnRzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RpZmllciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9KClcIiBkb2VzIG5vdCBzdXBwb3J0IG5hbWVkIGFyZ3VtZW50cy5gKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50TW9kaWZpZXJzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogY3VycmVudEFjdGlvbk5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogY3VycmVudEFyZ3VtZW50cy5sZW5ndGggPiAwID8gY3VycmVudEFyZ3VtZW50c1swXSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnROYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICAgICAgc3RhdGUgPSAnYWN0aW9uJztcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGFyID0gY29udGVudFtpXTtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAnYWN0aW9uJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJygnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gJ2FyZ3VtZW50cyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50QWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVzaEluc3RydWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnfCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaE1vZGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50QWN0aW9uTmFtZSArPSBjaGFyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJndW1lbnRzJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJyknKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hBcmd1bWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9ICdhZnRlcl9hcmd1bWVudHMnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoQXJndW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnPScpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9IGN1cnJlbnRBcmd1bWVudFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QXJndW1lbnRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd8Jykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoTW9kaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyICE9PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIHNwYWNlIGFmdGVyICR7Z2V0TGFzdEFjdGlvbk5hbWUoKX0oKWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgIGNhc2UgJ2FmdGVyX2FyZ3VtZW50cyc6XG4gICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICBwdXNoSW5zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaWQgeW91IGZvcmdldCB0byBhZGQgYSBjbG9zaW5nIFwiKVwiIGFmdGVyIFwiJHtjdXJyZW50QWN0aW9uTmFtZX1cIj9gKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVTcGFjZWRBcnJheShwYXJ0cykge1xuICAgIGNvbnN0IGZpbmFsUGFydHMgPSBbXTtcbiAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICAgIGZpbmFsUGFydHMucHVzaCguLi5wYXJ0LnNwbGl0KCcgJykpO1xuICAgIH0pO1xuICAgIHJldHVybiBmaW5hbFBhcnRzO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKSB7XG4gICAgcmV0dXJuIChtb2RlbFxuICAgICAgICAucmVwbGFjZSgvXFxbXSQvLCAnJylcbiAgICAgICAgLnNwbGl0KCdbJylcbiAgICAgICAgLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gcy5yZXBsYWNlKCddJywgJycpO1xuICAgIH0pXG4gICAgICAgIC5qb2luKCcuJykpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHZhbHVlU3RvcmUpIHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgY29uc3QgbW9kZWxOYW1lRGF0YSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKG1vZGVsTmFtZURhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RlbFZhbHVlID0gdmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lRGF0YS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1vZGVsVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgbW9kZWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2hlY2tlZCA/IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKGVsKSA9PiBlbC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmRhdGFzZXQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKCd2YWx1ZScgaW4gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBlbGVtZW50LnZhbHVlID09IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZUZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gZWxlbWVudC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB2YWx1ZUZvdW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGVsZW1lbnQudmFsdWUgPT0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBhcnJheVdyYXBwZWRWYWx1ZSA9IFtdLmNvbmNhdCh2YWx1ZSkubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgJyc7XG4gICAgICAgIH0pO1xuICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQub3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBhcnJheVdyYXBwZWRWYWx1ZS5pbmNsdWRlcyhvcHRpb24udmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6IHZhbHVlO1xuICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQuZGF0YXNldC5tb2RlbCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0Lm1vZGVsKTtcbiAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCB8fCBkaXJlY3RpdmUubmFtZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGF0YS1tb2RlbD1cIiR7ZWxlbWVudC5kYXRhc2V0Lm1vZGVsfVwiIGZvcm1hdCBpcyBpbnZhbGlkOiBpdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmcgYXJndW1lbnRzIHRvIHRoZSBtb2RlbC5gKTtcbiAgICAgICAgfVxuICAgICAgICBkaXJlY3RpdmUuYWN0aW9uID0gbm9ybWFsaXplTW9kZWxOYW1lKGRpcmVjdGl2ZS5hY3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBkaXJlY3RpdmVzO1xufVxuZnVuY3Rpb24gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCB0aHJvd09uTWlzc2luZyA9IHRydWUpIHtcbiAgICBjb25zdCBkYXRhTW9kZWxEaXJlY3RpdmVzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCk7XG4gICAgaWYgKGRhdGFNb2RlbERpcmVjdGl2ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gZGF0YU1vZGVsRGlyZWN0aXZlc1swXTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJykpIHtcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSBlbGVtZW50LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgaWYgKGZvcm1FbGVtZW50ICYmICdtb2RlbCcgaW4gZm9ybUVsZW1lbnQuZGF0YXNldCkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhmb3JtRWxlbWVudC5kYXRhc2V0Lm1vZGVsIHx8ICcqJyk7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSBkaXJlY3RpdmVzWzBdO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZS5hcmdzLmxlbmd0aCA+IDAgfHwgZGlyZWN0aXZlLm5hbWVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkYXRhLW1vZGVsPVwiJHtmb3JtRWxlbWVudC5kYXRhc2V0Lm1vZGVsfVwiIGZvcm1hdCBpcyBpbnZhbGlkOiBpdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmcgYXJndW1lbnRzIHRvIHRoZSBtb2RlbC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpcmVjdGl2ZS5hY3Rpb24gPSBub3JtYWxpemVNb2RlbE5hbWUoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSk7XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghdGhyb3dPbk1pc3NpbmcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGRldGVybWluZSB0aGUgbW9kZWwgbmFtZSBmb3IgXCIke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9XCI6IHRoZSBlbGVtZW50IG11c3QgZWl0aGVyIGhhdmUgYSBcImRhdGEtbW9kZWxcIiAob3IgXCJuYW1lXCIgYXR0cmlidXRlIGxpdmluZyBpbnNpZGUgYSA8Zm9ybSBkYXRhLW1vZGVsPVwiKlwiPikuYCk7XG59XG5mdW5jdGlvbiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpIHtcbiAgICBpZiAoY29tcG9uZW50LmVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghY29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgZm91bmRDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuICAgIGNvbXBvbmVudC5nZXRDaGlsZHJlbigpLmZvckVhY2goKGNoaWxkQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGlmIChmb3VuZENoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50LmVsZW1lbnQgPT09IGVsZW1lbnQgfHwgY2hpbGRDb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgZm91bmRDaGlsZENvbXBvbmVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gIWZvdW5kQ2hpbGRDb21wb25lbnQ7XG59XG5mdW5jdGlvbiBjbG9uZUhUTUxFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgaWYgKCEobmV3RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBjbG9uZSBlbGVtZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuZnVuY3Rpb24gaHRtbFRvRWxlbWVudChodG1sKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGh0bWwgPSBodG1sLnRyaW0oKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIGlmICh0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50ID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCBIVE1MIGNvbnRhaW5zICR7dGVtcGxhdGUuY29udGVudC5jaGlsZEVsZW1lbnRDb3VudH0gZWxlbWVudHMsIGJ1dCBvbmx5IDEgcm9vdCBlbGVtZW50IGlzIGFsbG93ZWQuYCk7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkID0gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hpbGQgbm90IGZvdW5kJyk7XG4gICAgfVxuICAgIGlmICghKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ3JlYXRlZCBlbGVtZW50IGlzIG5vdCBhbiBIVE1MRWxlbWVudDogJHtodG1sLnRyaW0oKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkO1xufVxuZnVuY3Rpb24gZ2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuaW5uZXJIVE1MXG4gICAgICAgID8gZWxlbWVudC5vdXRlckhUTUwuc2xpY2UoMCwgZWxlbWVudC5vdXRlckhUTUwuaW5kZXhPZihlbGVtZW50LmlubmVySFRNTCkpXG4gICAgICAgIDogZWxlbWVudC5vdXRlckhUTUw7XG59XG5jb25zdCBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUgPSBmdW5jdGlvbiAoZWxlbWVudCwgY3VycmVudFZhbHVlcykge1xuICAgIGNvbnN0IGZpbmFsVmFsdWVzID0gWy4uLmN1cnJlbnRWYWx1ZXNdO1xuICAgIGNvbnN0IHZhbHVlID0gaW5wdXRWYWx1ZShlbGVtZW50KTtcbiAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBmaW5hbFZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmluYWxWYWx1ZXM7XG4gICAgfVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGZpbmFsVmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiBmaW5hbFZhbHVlcztcbn07XG5jb25zdCBpbnB1dFZhbHVlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LnZhbHVlID8gZWxlbWVudC5kYXRhc2V0LnZhbHVlIDogZWxlbWVudC52YWx1ZTtcbn07XG5cbmZ1bmN0aW9uIGdldERlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCkge1xuICAgIGNvbnN0IHsgY3VycmVudExldmVsRGF0YSwgZmluYWxLZXkgfSA9IHBhcnNlRGVlcERhdGEoZGF0YSwgcHJvcGVydHlQYXRoKTtcbiAgICBpZiAoY3VycmVudExldmVsRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50TGV2ZWxEYXRhW2ZpbmFsS2V5XTtcbn1cbmNvbnN0IHBhcnNlRGVlcERhdGEgPSBmdW5jdGlvbiAoZGF0YSwgcHJvcGVydHlQYXRoKSB7XG4gICAgY29uc3QgZmluYWxEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgbGV0IGN1cnJlbnRMZXZlbERhdGEgPSBmaW5hbERhdGE7XG4gICAgY29uc3QgcGFydHMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoJy4nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBjdXJyZW50TGV2ZWxEYXRhID0gY3VycmVudExldmVsRGF0YVtwYXJ0c1tpXV07XG4gICAgfVxuICAgIGNvbnN0IGZpbmFsS2V5ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudExldmVsRGF0YSxcbiAgICAgICAgZmluYWxEYXRhLFxuICAgICAgICBmaW5hbEtleSxcbiAgICAgICAgcGFydHMsXG4gICAgfTtcbn07XG5cbmNsYXNzIFZhbHVlU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMgPSB7fTtcbiAgICAgICAgdGhpcy5kaXJ0eVByb3BzID0ge307XG4gICAgICAgIHRoaXMucGVuZGluZ1Byb3BzID0ge307XG4gICAgICAgIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCA9IHt9O1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGdldChuYW1lKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG5hbWUpO1xuICAgICAgICBpZiAodGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nUHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBlbmRpbmdQcm9wc1tub3JtYWxpemVkTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzW25vcm1hbGl6ZWROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0RGVlcERhdGEodGhpcy5wcm9wcywgbm9ybWFsaXplZE5hbWUpO1xuICAgIH1cbiAgICBoYXMobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSkgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc2V0KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG5hbWUpO1xuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmdldChub3JtYWxpemVkTmFtZSk7XG4gICAgICAgIGlmIChjdXJyZW50VmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZ2V0T3JpZ2luYWxQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBnZXREaXJ0eVByb3BzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kaXJ0eVByb3BzKTtcbiAgICB9XG4gICAgZ2V0VXBkYXRlZFByb3BzRnJvbVBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCk7XG4gICAgfVxuICAgIGZsdXNoRGlydHlQcm9wc1RvUGVuZGluZygpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nUHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRpcnR5UHJvcHMpO1xuICAgICAgICB0aGlzLmRpcnR5UHJvcHMgPSB7fTtcbiAgICB9XG4gICAgcmVpbml0aWFsaXplQWxsUHJvcHMocHJvcHMpIHtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSB7fTtcbiAgICAgICAgdGhpcy5wZW5kaW5nUHJvcHMgPSB7fTtcbiAgICB9XG4gICAgcHVzaFBlbmRpbmdQcm9wc0JhY2tUb0RpcnR5KCkge1xuICAgICAgICB0aGlzLmRpcnR5UHJvcHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMucGVuZGluZ1Byb3BzKSwgdGhpcy5kaXJ0eVByb3BzKTtcbiAgICAgICAgdGhpcy5wZW5kaW5nUHJvcHMgPSB7fTtcbiAgICB9XG4gICAgc3RvcmVOZXdQcm9wc0Zyb21QYXJlbnQocHJvcHMpIHtcbiAgICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmdldChrZXkpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50ID0gcHJvcHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5nZWQ7XG4gICAgfVxufVxuXG52YXIgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSA9IDExO1xuXG5mdW5jdGlvbiBtb3JwaEF0dHJzKGZyb21Ob2RlLCB0b05vZGUpIHtcbiAgICB2YXIgdG9Ob2RlQXR0cnMgPSB0b05vZGUuYXR0cmlidXRlcztcbiAgICB2YXIgYXR0cjtcbiAgICB2YXIgYXR0ck5hbWU7XG4gICAgdmFyIGF0dHJOYW1lc3BhY2VVUkk7XG4gICAgdmFyIGF0dHJWYWx1ZTtcbiAgICB2YXIgZnJvbVZhbHVlO1xuXG4gICAgLy8gZG9jdW1lbnQtZnJhZ21lbnRzIGRvbnQgaGF2ZSBhdHRyaWJ1dGVzIHNvIGxldHMgbm90IGRvIGFueXRoaW5nXG4gICAgaWYgKHRvTm9kZS5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSB8fCBmcm9tTm9kZS5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBhdHRyaWJ1dGVzIG9uIG9yaWdpbmFsIERPTSBlbGVtZW50XG4gICAgZm9yICh2YXIgaSA9IHRvTm9kZUF0dHJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGF0dHIgPSB0b05vZGVBdHRyc1tpXTtcbiAgICAgICAgYXR0ck5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICAgIGF0dHJOYW1lc3BhY2VVUkkgPSBhdHRyLm5hbWVzcGFjZVVSSTtcbiAgICAgICAgYXR0clZhbHVlID0gYXR0ci52YWx1ZTtcblxuICAgICAgICBpZiAoYXR0ck5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgICAgYXR0ck5hbWUgPSBhdHRyLmxvY2FsTmFtZSB8fCBhdHRyTmFtZTtcbiAgICAgICAgICAgIGZyb21WYWx1ZSA9IGZyb21Ob2RlLmdldEF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGZyb21WYWx1ZSAhPT0gYXR0clZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHIucHJlZml4ID09PSAneG1sbnMnKXtcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWUgPSBhdHRyLm5hbWU7IC8vIEl0J3Mgbm90IGFsbG93ZWQgdG8gc2V0IGFuIGF0dHJpYnV0ZSB3aXRoIHRoZSBYTUxOUyBuYW1lc3BhY2Ugd2l0aG91dCBzcGVjaWZ5aW5nIHRoZSBgeG1sbnNgIHByZWZpeFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5zZXRBdHRyaWJ1dGVOUyhhdHRyTmFtZXNwYWNlVVJJLCBhdHRyTmFtZSwgYXR0clZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyb21WYWx1ZSA9IGZyb21Ob2RlLmdldEF0dHJpYnV0ZShhdHRyTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChmcm9tVmFsdWUgIT09IGF0dHJWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0clZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbnkgZXh0cmEgYXR0cmlidXRlcyBmb3VuZCBvbiB0aGUgb3JpZ2luYWwgRE9NIGVsZW1lbnQgdGhhdFxuICAgIC8vIHdlcmVuJ3QgZm91bmQgb24gdGhlIHRhcmdldCBlbGVtZW50LlxuICAgIHZhciBmcm9tTm9kZUF0dHJzID0gZnJvbU5vZGUuYXR0cmlidXRlcztcblxuICAgIGZvciAodmFyIGQgPSBmcm9tTm9kZUF0dHJzLmxlbmd0aCAtIDE7IGQgPj0gMDsgZC0tKSB7XG4gICAgICAgIGF0dHIgPSBmcm9tTm9kZUF0dHJzW2RdO1xuICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTtcbiAgICAgICAgYXR0ck5hbWVzcGFjZVVSSSA9IGF0dHIubmFtZXNwYWNlVVJJO1xuXG4gICAgICAgIGlmIChhdHRyTmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubG9jYWxOYW1lIHx8IGF0dHJOYW1lO1xuXG4gICAgICAgICAgICBpZiAoIXRvTm9kZS5oYXNBdHRyaWJ1dGVOUyhhdHRyTmFtZXNwYWNlVVJJLCBhdHRyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5yZW1vdmVBdHRyaWJ1dGVOUyhhdHRyTmFtZXNwYWNlVVJJLCBhdHRyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRvTm9kZS5oYXNBdHRyaWJ1dGUoYXR0ck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIHJhbmdlOyAvLyBDcmVhdGUgYSByYW5nZSBvYmplY3QgZm9yIGVmZmljZW50bHkgcmVuZGVyaW5nIHN0cmluZ3MgdG8gZWxlbWVudHMuXG52YXIgTlNfWEhUTUwgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5cbnZhciBkb2MgPSB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZG9jdW1lbnQ7XG52YXIgSEFTX1RFTVBMQVRFX1NVUFBPUlQgPSAhIWRvYyAmJiAnY29udGVudCcgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG52YXIgSEFTX1JBTkdFX1NVUFBPUlQgPSAhIWRvYyAmJiBkb2MuY3JlYXRlUmFuZ2UgJiYgJ2NyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCcgaW4gZG9jLmNyZWF0ZVJhbmdlKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50RnJvbVRlbXBsYXRlKHN0cikge1xuICAgIHZhciB0ZW1wbGF0ZSA9IGRvYy5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IHN0cjtcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5jaGlsZE5vZGVzWzBdO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudEZyb21SYW5nZShzdHIpIHtcbiAgICBpZiAoIXJhbmdlKSB7XG4gICAgICAgIHJhbmdlID0gZG9jLmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGUoZG9jLmJvZHkpO1xuICAgIH1cblxuICAgIHZhciBmcmFnbWVudCA9IHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHIpO1xuICAgIHJldHVybiBmcmFnbWVudC5jaGlsZE5vZGVzWzBdO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudEZyb21XcmFwKHN0cikge1xuICAgIHZhciBmcmFnbWVudCA9IGRvYy5jcmVhdGVFbGVtZW50KCdib2R5Jyk7XG4gICAgZnJhZ21lbnQuaW5uZXJIVE1MID0gc3RyO1xuICAgIHJldHVybiBmcmFnbWVudC5jaGlsZE5vZGVzWzBdO1xufVxuXG4vKipcbiAqIFRoaXMgaXMgYWJvdXQgdGhlIHNhbWVcbiAqIHZhciBodG1sID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdHIsICd0ZXh0L2h0bWwnKTtcbiAqIHJldHVybiBodG1sLmJvZHkuZmlyc3RDaGlsZDtcbiAqXG4gKiBAbWV0aG9kIHRvRWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICovXG5mdW5jdGlvbiB0b0VsZW1lbnQoc3RyKSB7XG4gICAgc3RyID0gc3RyLnRyaW0oKTtcbiAgICBpZiAoSEFTX1RFTVBMQVRFX1NVUFBPUlQpIHtcbiAgICAgIC8vIGF2b2lkIHJlc3RyaWN0aW9ucyBvbiBjb250ZW50IGZvciB0aGluZ3MgbGlrZSBgPHRyPjx0aD5IaTwvdGg+PC90cj5gIHdoaWNoXG4gICAgICAvLyBjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQgZG9lc24ndCBzdXBwb3J0XG4gICAgICAvLyA8dGVtcGxhdGU+IHN1cHBvcnQgbm90IGF2YWlsYWJsZSBpbiBJRVxuICAgICAgcmV0dXJuIGNyZWF0ZUZyYWdtZW50RnJvbVRlbXBsYXRlKHN0cik7XG4gICAgfSBlbHNlIGlmIChIQVNfUkFOR0VfU1VQUE9SVCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUZyYWdtZW50RnJvbVJhbmdlKHN0cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUZyYWdtZW50RnJvbVdyYXAoc3RyKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdHdvIG5vZGUncyBuYW1lcyBhcmUgdGhlIHNhbWUuXG4gKlxuICogTk9URTogV2UgZG9uJ3QgYm90aGVyIGNoZWNraW5nIGBuYW1lc3BhY2VVUklgIGJlY2F1c2UgeW91IHdpbGwgbmV2ZXIgZmluZCB0d28gSFRNTCBlbGVtZW50cyB3aXRoIHRoZSBzYW1lXG4gKiAgICAgICBub2RlTmFtZSBhbmQgZGlmZmVyZW50IG5hbWVzcGFjZSBVUklzLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gYVxuICogQHBhcmFtIHtFbGVtZW50fSBiIFRoZSB0YXJnZXQgZWxlbWVudFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29tcGFyZU5vZGVOYW1lcyhmcm9tRWwsIHRvRWwpIHtcbiAgICB2YXIgZnJvbU5vZGVOYW1lID0gZnJvbUVsLm5vZGVOYW1lO1xuICAgIHZhciB0b05vZGVOYW1lID0gdG9FbC5ub2RlTmFtZTtcbiAgICB2YXIgZnJvbUNvZGVTdGFydCwgdG9Db2RlU3RhcnQ7XG5cbiAgICBpZiAoZnJvbU5vZGVOYW1lID09PSB0b05vZGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZyb21Db2RlU3RhcnQgPSBmcm9tTm9kZU5hbWUuY2hhckNvZGVBdCgwKTtcbiAgICB0b0NvZGVTdGFydCA9IHRvTm9kZU5hbWUuY2hhckNvZGVBdCgwKTtcblxuICAgIC8vIElmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIHZpcnR1YWwgRE9NIG5vZGUgb3IgU1ZHIG5vZGUgdGhlbiB3ZSBtYXlcbiAgICAvLyBuZWVkIHRvIG5vcm1hbGl6ZSB0aGUgdGFnIG5hbWUgYmVmb3JlIGNvbXBhcmluZy4gTm9ybWFsIEhUTUwgZWxlbWVudHMgdGhhdCBhcmVcbiAgICAvLyBpbiB0aGUgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCJcbiAgICAvLyBhcmUgY29udmVydGVkIHRvIHVwcGVyIGNhc2VcbiAgICBpZiAoZnJvbUNvZGVTdGFydCA8PSA5MCAmJiB0b0NvZGVTdGFydCA+PSA5NykgeyAvLyBmcm9tIGlzIHVwcGVyIGFuZCB0byBpcyBsb3dlclxuICAgICAgICByZXR1cm4gZnJvbU5vZGVOYW1lID09PSB0b05vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgfSBlbHNlIGlmICh0b0NvZGVTdGFydCA8PSA5MCAmJiBmcm9tQ29kZVN0YXJ0ID49IDk3KSB7IC8vIHRvIGlzIHVwcGVyIGFuZCBmcm9tIGlzIGxvd2VyXG4gICAgICAgIHJldHVybiB0b05vZGVOYW1lID09PSBmcm9tTm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBlbGVtZW50LCBvcHRpb25hbGx5IHdpdGggYSBrbm93biBuYW1lc3BhY2UgVVJJLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBlbGVtZW50IG5hbWUsIGUuZy4gJ2Rpdicgb3IgJ3N2ZydcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZXNwYWNlVVJJXSB0aGUgZWxlbWVudCdzIG5hbWVzcGFjZSBVUkksIGkuZS4gdGhlIHZhbHVlIG9mXG4gKiBpdHMgYHhtbG5zYCBhdHRyaWJ1dGUgb3IgaXRzIGluZmVycmVkIG5hbWVzcGFjZS5cbiAqXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMobmFtZSwgbmFtZXNwYWNlVVJJKSB7XG4gICAgcmV0dXJuICFuYW1lc3BhY2VVUkkgfHwgbmFtZXNwYWNlVVJJID09PSBOU19YSFRNTCA/XG4gICAgICAgIGRvYy5jcmVhdGVFbGVtZW50KG5hbWUpIDpcbiAgICAgICAgZG9jLmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIG5hbWUpO1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgY2hpbGRyZW4gb2Ygb25lIERPTSBlbGVtZW50IHRvIGFub3RoZXIgRE9NIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gbW92ZUNoaWxkcmVuKGZyb21FbCwgdG9FbCkge1xuICAgIHZhciBjdXJDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgIHdoaWxlIChjdXJDaGlsZCkge1xuICAgICAgICB2YXIgbmV4dENoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIHRvRWwuYXBwZW5kQ2hpbGQoY3VyQ2hpbGQpO1xuICAgICAgICBjdXJDaGlsZCA9IG5leHRDaGlsZDtcbiAgICB9XG4gICAgcmV0dXJuIHRvRWw7XG59XG5cbmZ1bmN0aW9uIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCBuYW1lKSB7XG4gICAgaWYgKGZyb21FbFtuYW1lXSAhPT0gdG9FbFtuYW1lXSkge1xuICAgICAgICBmcm9tRWxbbmFtZV0gPSB0b0VsW25hbWVdO1xuICAgICAgICBpZiAoZnJvbUVsW25hbWVdKSB7XG4gICAgICAgICAgICBmcm9tRWwuc2V0QXR0cmlidXRlKG5hbWUsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBzcGVjaWFsRWxIYW5kbGVycyA9IHtcbiAgICBPUFRJT046IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGZyb21FbC5wYXJlbnROb2RlO1xuICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdmFyIHBhcmVudE5hbWUgPSBwYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAocGFyZW50TmFtZSA9PT0gJ09QVEdST1VQJykge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgcGFyZW50TmFtZSA9IHBhcmVudE5vZGUgJiYgcGFyZW50Tm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmVudE5hbWUgPT09ICdTRUxFQ1QnICYmICFwYXJlbnROb2RlLmhhc0F0dHJpYnV0ZSgnbXVsdGlwbGUnKSkge1xuICAgICAgICAgICAgICAgIGlmIChmcm9tRWwuaGFzQXR0cmlidXRlKCdzZWxlY3RlZCcpICYmICF0b0VsLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdvcmthcm91bmQgZm9yIE1TIEVkZ2UgYnVnIHdoZXJlIHRoZSAnc2VsZWN0ZWQnIGF0dHJpYnV0ZSBjYW4gb25seSBiZVxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmVkIGlmIHNldCB0byBhIG5vbi1lbXB0eSB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTIwODc2NzkvXG4gICAgICAgICAgICAgICAgICAgIGZyb21FbC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gcmVzZXQgc2VsZWN0IGVsZW1lbnQncyBzZWxlY3RlZEluZGV4IHRvIC0xLCBvdGhlcndpc2Ugc2V0dGluZ1xuICAgICAgICAgICAgICAgIC8vIGZyb21FbC5zZWxlY3RlZCB1c2luZyB0aGUgc3luY0Jvb2xlYW5BdHRyUHJvcCBiZWxvdyBoYXMgbm8gZWZmZWN0LlxuICAgICAgICAgICAgICAgIC8vIFRoZSBjb3JyZWN0IHNlbGVjdGVkSW5kZXggd2lsbCBiZSBzZXQgaW4gdGhlIFNFTEVDVCBzcGVjaWFsIGhhbmRsZXIgYmVsb3cuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3luY0Jvb2xlYW5BdHRyUHJvcChmcm9tRWwsIHRvRWwsICdzZWxlY3RlZCcpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIFwidmFsdWVcIiBhdHRyaWJ1dGUgaXMgc3BlY2lhbCBmb3IgdGhlIDxpbnB1dD4gZWxlbWVudCBzaW5jZSBpdCBzZXRzXG4gICAgICogdGhlIGluaXRpYWwgdmFsdWUuIENoYW5naW5nIHRoZSBcInZhbHVlXCIgYXR0cmlidXRlIHdpdGhvdXQgY2hhbmdpbmcgdGhlXG4gICAgICogXCJ2YWx1ZVwiIHByb3BlcnR5IHdpbGwgaGF2ZSBubyBlZmZlY3Qgc2luY2UgaXQgaXMgb25seSB1c2VkIHRvIHRoZSBzZXQgdGhlXG4gICAgICogaW5pdGlhbCB2YWx1ZS4gIFNpbWlsYXIgZm9yIHRoZSBcImNoZWNrZWRcIiBhdHRyaWJ1dGUsIGFuZCBcImRpc2FibGVkXCIuXG4gICAgICovXG4gICAgSU5QVVQ6IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ2NoZWNrZWQnKTtcbiAgICAgICAgc3luY0Jvb2xlYW5BdHRyUHJvcChmcm9tRWwsIHRvRWwsICdkaXNhYmxlZCcpO1xuXG4gICAgICAgIGlmIChmcm9tRWwudmFsdWUgIT09IHRvRWwudmFsdWUpIHtcbiAgICAgICAgICAgIGZyb21FbC52YWx1ZSA9IHRvRWwudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRvRWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICBmcm9tRWwucmVtb3ZlQXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIFRFWFRBUkVBOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdG9FbC52YWx1ZTtcbiAgICAgICAgaWYgKGZyb21FbC52YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGZyb21FbC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZpcnN0Q2hpbGQgPSBmcm9tRWwuZmlyc3RDaGlsZDtcbiAgICAgICAgaWYgKGZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIC8vIE5lZWRlZCBmb3IgSUUuIEFwcGFyZW50bHkgSUUgc2V0cyB0aGUgcGxhY2Vob2xkZXIgYXMgdGhlXG4gICAgICAgICAgICAvLyBub2RlIHZhbHVlIGFuZCB2aXNlIHZlcnNhLiBUaGlzIGlnbm9yZXMgYW4gZW1wdHkgdXBkYXRlLlxuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gZmlyc3RDaGlsZC5ub2RlVmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSA9PSBuZXdWYWx1ZSB8fCAoIW5ld1ZhbHVlICYmIG9sZFZhbHVlID09IGZyb21FbC5wbGFjZWhvbGRlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpcnN0Q2hpbGQubm9kZVZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFNFTEVDVDogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIGlmICghdG9FbC5oYXNBdHRyaWJ1dGUoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIGxvb3AgdGhyb3VnaCBjaGlsZHJlbiBvZiBmcm9tRWwsIG5vdCB0b0VsIHNpbmNlIG5vZGVzIGNhbiBiZSBtb3ZlZFxuICAgICAgICAgICAgLy8gZnJvbSB0b0VsIHRvIGZyb21FbCBkaXJlY3RseSB3aGVuIG1vcnBoaW5nLlxuICAgICAgICAgICAgLy8gQXQgdGhlIHRpbWUgdGhpcyBzcGVjaWFsIGhhbmRsZXIgaXMgaW52b2tlZCwgYWxsIGNoaWxkcmVuIGhhdmUgYWxyZWFkeSBiZWVuIG1vcnBoZWRcbiAgICAgICAgICAgIC8vIGFuZCBhcHBlbmRlZCB0byAvIHJlbW92ZWQgZnJvbSBmcm9tRWwsIHNvIHVzaW5nIGZyb21FbCBoZXJlIGlzIHNhZmUgYW5kIGNvcnJlY3QuXG4gICAgICAgICAgICB2YXIgY3VyQ2hpbGQgPSBmcm9tRWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHZhciBvcHRncm91cDtcbiAgICAgICAgICAgIHZhciBub2RlTmFtZTtcbiAgICAgICAgICAgIHdoaWxlKGN1ckNoaWxkKSB7XG4gICAgICAgICAgICAgICAgbm9kZU5hbWUgPSBjdXJDaGlsZC5ub2RlTmFtZSAmJiBjdXJDaGlsZC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGlmIChub2RlTmFtZSA9PT0gJ09QVEdST1VQJykge1xuICAgICAgICAgICAgICAgICAgICBvcHRncm91cCA9IGN1ckNoaWxkO1xuICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IG9wdGdyb3VwLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVOYW1lID09PSAnT1BUSU9OJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckNoaWxkLmhhc0F0dHJpYnV0ZSgnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VyQ2hpbGQgJiYgb3B0Z3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gb3B0Z3JvdXAubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRncm91cCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZyb21FbC5zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBFTEVNRU5UX05PREUgPSAxO1xudmFyIERPQ1VNRU5UX0ZSQUdNRU5UX05PREUkMSA9IDExO1xudmFyIFRFWFRfTk9ERSA9IDM7XG52YXIgQ09NTUVOVF9OT0RFID0gODtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIGRlZmF1bHRHZXROb2RlS2V5KG5vZGUpIHtcbiAgaWYgKG5vZGUpIHtcbiAgICByZXR1cm4gKG5vZGUuZ2V0QXR0cmlidXRlICYmIG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpKSB8fCBub2RlLmlkO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vcnBoZG9tRmFjdG9yeShtb3JwaEF0dHJzKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIG1vcnBoZG9tKGZyb21Ob2RlLCB0b05vZGUsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRvTm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJyNkb2N1bWVudCcgfHwgZnJvbU5vZGUubm9kZU5hbWUgPT09ICdIVE1MJyB8fCBmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgIHZhciB0b05vZGVIdG1sID0gdG9Ob2RlO1xuICAgICAgICB0b05vZGUgPSBkb2MuY3JlYXRlRWxlbWVudCgnaHRtbCcpO1xuICAgICAgICB0b05vZGUuaW5uZXJIVE1MID0gdG9Ob2RlSHRtbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvTm9kZSA9IHRvRWxlbWVudCh0b05vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodG9Ob2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFJDEpIHtcbiAgICAgIHRvTm9kZSA9IHRvTm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG5cbiAgICB2YXIgZ2V0Tm9kZUtleSA9IG9wdGlvbnMuZ2V0Tm9kZUtleSB8fCBkZWZhdWx0R2V0Tm9kZUtleTtcbiAgICB2YXIgb25CZWZvcmVOb2RlQWRkZWQgPSBvcHRpb25zLm9uQmVmb3JlTm9kZUFkZGVkIHx8IG5vb3A7XG4gICAgdmFyIG9uTm9kZUFkZGVkID0gb3B0aW9ucy5vbk5vZGVBZGRlZCB8fCBub29wO1xuICAgIHZhciBvbkJlZm9yZUVsVXBkYXRlZCA9IG9wdGlvbnMub25CZWZvcmVFbFVwZGF0ZWQgfHwgbm9vcDtcbiAgICB2YXIgb25FbFVwZGF0ZWQgPSBvcHRpb25zLm9uRWxVcGRhdGVkIHx8IG5vb3A7XG4gICAgdmFyIG9uQmVmb3JlTm9kZURpc2NhcmRlZCA9IG9wdGlvbnMub25CZWZvcmVOb2RlRGlzY2FyZGVkIHx8IG5vb3A7XG4gICAgdmFyIG9uTm9kZURpc2NhcmRlZCA9IG9wdGlvbnMub25Ob2RlRGlzY2FyZGVkIHx8IG5vb3A7XG4gICAgdmFyIG9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWQgPSBvcHRpb25zLm9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWQgfHwgbm9vcDtcbiAgICB2YXIgc2tpcEZyb21DaGlsZHJlbiA9IG9wdGlvbnMuc2tpcEZyb21DaGlsZHJlbiB8fCBub29wO1xuICAgIHZhciBhZGRDaGlsZCA9IG9wdGlvbnMuYWRkQ2hpbGQgfHwgZnVuY3Rpb24ocGFyZW50LCBjaGlsZCl7IHJldHVybiBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpOyB9O1xuICAgIHZhciBjaGlsZHJlbk9ubHkgPSBvcHRpb25zLmNoaWxkcmVuT25seSA9PT0gdHJ1ZTtcblxuICAgIC8vIFRoaXMgb2JqZWN0IGlzIHVzZWQgYXMgYSBsb29rdXAgdG8gcXVpY2tseSBmaW5kIGFsbCBrZXllZCBlbGVtZW50cyBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUuXG4gICAgdmFyIGZyb21Ob2Rlc0xvb2t1cCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIGtleWVkUmVtb3ZhbExpc3QgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGFkZEtleWVkUmVtb3ZhbChrZXkpIHtcbiAgICAgIGtleWVkUmVtb3ZhbExpc3QucHVzaChrZXkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKG5vZGUsIHNraXBLZXllZE5vZGVzKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHZhciBjdXJDaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgICAgd2hpbGUgKGN1ckNoaWxkKSB7XG5cbiAgICAgICAgICB2YXIga2V5ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgaWYgKHNraXBLZXllZE5vZGVzICYmIChrZXkgPSBnZXROb2RlS2V5KGN1ckNoaWxkKSkpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGFyZSBza2lwcGluZyBrZXllZCBub2RlcyB0aGVuIHdlIGFkZCB0aGUga2V5XG4gICAgICAgICAgICAvLyB0byBhIGxpc3Qgc28gdGhhdCBpdCBjYW4gYmUgaGFuZGxlZCBhdCB0aGUgdmVyeSBlbmQuXG4gICAgICAgICAgICBhZGRLZXllZFJlbW92YWwoa2V5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT25seSByZXBvcnQgdGhlIG5vZGUgYXMgZGlzY2FyZGVkIGlmIGl0IGlzIG5vdCBrZXllZC4gV2UgZG8gdGhpcyBiZWNhdXNlXG4gICAgICAgICAgICAvLyBhdCB0aGUgZW5kIHdlIGxvb3AgdGhyb3VnaCBhbGwga2V5ZWQgZWxlbWVudHMgdGhhdCB3ZXJlIHVubWF0Y2hlZFxuICAgICAgICAgICAgLy8gYW5kIHRoZW4gZGlzY2FyZCB0aGVtIGluIG9uZSBmaW5hbCBwYXNzLlxuICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKGN1ckNoaWxkKTtcbiAgICAgICAgICAgIGlmIChjdXJDaGlsZC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKGN1ckNoaWxkLCBza2lwS2V5ZWROb2Rlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY3VyQ2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogUmVtb3ZlcyBhIERPTSBub2RlIG91dCBvZiB0aGUgb3JpZ2luYWwgRE9NXG4gICAgKlxuICAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAgICAqIEBwYXJhbSAge05vZGV9IHBhcmVudE5vZGUgVGhlIG5vZGVzIHBhcmVudFxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gc2tpcEtleWVkTm9kZXMgSWYgdHJ1ZSB0aGVuIGVsZW1lbnRzIHdpdGgga2V5cyB3aWxsIGJlIHNraXBwZWQgYW5kIG5vdCBkaXNjYXJkZWQuXG4gICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUsIHBhcmVudE5vZGUsIHNraXBLZXllZE5vZGVzKSB7XG4gICAgICBpZiAob25CZWZvcmVOb2RlRGlzY2FyZGVkKG5vZGUpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIG9uTm9kZURpc2NhcmRlZChub2RlKTtcbiAgICAgIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKG5vZGUsIHNraXBLZXllZE5vZGVzKTtcbiAgICB9XG5cbiAgICAvLyAvLyBUcmVlV2Fsa2VyIGltcGxlbWVudGF0aW9uIGlzIG5vIGZhc3RlciwgYnV0IGtlZXBpbmcgdGhpcyBhcm91bmQgaW4gY2FzZSB0aGlzIGNoYW5nZXMgaW4gdGhlIGZ1dHVyZVxuICAgIC8vIGZ1bmN0aW9uIGluZGV4VHJlZShyb290KSB7XG4gICAgLy8gICAgIHZhciB0cmVlV2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcbiAgICAvLyAgICAgICAgIHJvb3QsXG4gICAgLy8gICAgICAgICBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCk7XG4gICAgLy9cbiAgICAvLyAgICAgdmFyIGVsO1xuICAgIC8vICAgICB3aGlsZSgoZWwgPSB0cmVlV2Fsa2VyLm5leHROb2RlKCkpKSB7XG4gICAgLy8gICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShlbCk7XG4gICAgLy8gICAgICAgICBpZiAoa2V5KSB7XG4gICAgLy8gICAgICAgICAgICAgZnJvbU5vZGVzTG9va3VwW2tleV0gPSBlbDtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIC8vIE5vZGVJdGVyYXRvciBpbXBsZW1lbnRhdGlvbiBpcyBubyBmYXN0ZXIsIGJ1dCBrZWVwaW5nIHRoaXMgYXJvdW5kIGluIGNhc2UgdGhpcyBjaGFuZ2VzIGluIHRoZSBmdXR1cmVcbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIGluZGV4VHJlZShub2RlKSB7XG4gICAgLy8gICAgIHZhciBub2RlSXRlcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3Iobm9kZSwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQpO1xuICAgIC8vICAgICB2YXIgZWw7XG4gICAgLy8gICAgIHdoaWxlKChlbCA9IG5vZGVJdGVyYXRvci5uZXh0Tm9kZSgpKSkge1xuICAgIC8vICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoZWwpO1xuICAgIC8vICAgICAgICAgaWYgKGtleSkge1xuICAgIC8vICAgICAgICAgICAgIGZyb21Ob2Rlc0xvb2t1cFtrZXldID0gZWw7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBmdW5jdGlvbiBpbmRleFRyZWUobm9kZSkge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSB8fCBub2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFJDEpIHtcbiAgICAgICAgdmFyIGN1ckNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcbiAgICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShjdXJDaGlsZCk7XG4gICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgZnJvbU5vZGVzTG9va3VwW2tleV0gPSBjdXJDaGlsZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXYWxrIHJlY3Vyc2l2ZWx5XG4gICAgICAgICAgaW5kZXhUcmVlKGN1ckNoaWxkKTtcblxuICAgICAgICAgIGN1ckNoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleFRyZWUoZnJvbU5vZGUpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlTm9kZUFkZGVkKGVsKSB7XG4gICAgICBvbk5vZGVBZGRlZChlbCk7XG5cbiAgICAgIHZhciBjdXJDaGlsZCA9IGVsLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcbiAgICAgICAgdmFyIG5leHRTaWJsaW5nID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgdmFyIHVubWF0Y2hlZEZyb21FbCA9IGZyb21Ob2Rlc0xvb2t1cFtrZXldO1xuICAgICAgICAgIC8vIGlmIHdlIGZpbmQgYSBkdXBsaWNhdGUgI2lkIG5vZGUgaW4gY2FjaGUsIHJlcGxhY2UgYGVsYCB3aXRoIGNhY2hlIHZhbHVlXG4gICAgICAgICAgLy8gYW5kIG1vcnBoIGl0IHRvIHRoZSBjaGlsZCBub2RlLlxuICAgICAgICAgIGlmICh1bm1hdGNoZWRGcm9tRWwgJiYgY29tcGFyZU5vZGVOYW1lcyhjdXJDaGlsZCwgdW5tYXRjaGVkRnJvbUVsKSkge1xuICAgICAgICAgICAgY3VyQ2hpbGQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodW5tYXRjaGVkRnJvbUVsLCBjdXJDaGlsZCk7XG4gICAgICAgICAgICBtb3JwaEVsKHVubWF0Y2hlZEZyb21FbCwgY3VyQ2hpbGQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGVOb2RlQWRkZWQoY3VyQ2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyByZWN1cnNpdmVseSBjYWxsIGZvciBjdXJDaGlsZCBhbmQgaXQncyBjaGlsZHJlbiB0byBzZWUgaWYgd2UgZmluZCBzb21ldGhpbmcgaW5cbiAgICAgICAgICAvLyBmcm9tTm9kZXNMb29rdXBcbiAgICAgICAgICBoYW5kbGVOb2RlQWRkZWQoY3VyQ2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VyQ2hpbGQgPSBuZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwRnJvbUVsKGZyb21FbCwgY3VyRnJvbU5vZGVDaGlsZCwgY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgIC8vIFdlIGhhdmUgcHJvY2Vzc2VkIGFsbCBvZiB0aGUgXCJ0byBub2Rlc1wiLiBJZiBjdXJGcm9tTm9kZUNoaWxkIGlzXG4gICAgICAvLyBub24tbnVsbCB0aGVuIHdlIHN0aWxsIGhhdmUgc29tZSBmcm9tIG5vZGVzIGxlZnQgb3ZlciB0aGF0IG5lZWRcbiAgICAgIC8vIHRvIGJlIHJlbW92ZWRcbiAgICAgIHdoaWxlIChjdXJGcm9tTm9kZUNoaWxkKSB7XG4gICAgICAgIHZhciBmcm9tTmV4dFNpYmxpbmcgPSBjdXJGcm9tTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICBpZiAoKGN1ckZyb21Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJGcm9tTm9kZUNoaWxkKSkpIHtcbiAgICAgICAgICAvLyBTaW5jZSB0aGUgbm9kZSBpcyBrZXllZCBpdCBtaWdodCBiZSBtYXRjaGVkIHVwIGxhdGVyIHNvIHdlIGRlZmVyXG4gICAgICAgICAgLy8gdGhlIGFjdHVhbCByZW1vdmFsIHRvIGxhdGVyXG4gICAgICAgICAgYWRkS2V5ZWRSZW1vdmFsKGN1ckZyb21Ob2RlS2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBOT1RFOiB3ZSBza2lwIG5lc3RlZCBrZXllZCBub2RlcyBmcm9tIGJlaW5nIHJlbW92ZWQgc2luY2UgdGhlcmUgaXNcbiAgICAgICAgICAvLyAgICAgICBzdGlsbCBhIGNoYW5jZSB0aGV5IHdpbGwgYmUgbWF0Y2hlZCB1cCBsYXRlclxuICAgICAgICAgIHJlbW92ZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCwgZnJvbUVsLCB0cnVlIC8qIHNraXAga2V5ZWQgbm9kZXMgKi8pO1xuICAgICAgICB9XG4gICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9ycGhFbChmcm9tRWwsIHRvRWwsIGNoaWxkcmVuT25seSkge1xuICAgICAgdmFyIHRvRWxLZXkgPSBnZXROb2RlS2V5KHRvRWwpO1xuXG4gICAgICBpZiAodG9FbEtleSkge1xuICAgICAgICAvLyBJZiBhbiBlbGVtZW50IHdpdGggYW4gSUQgaXMgYmVpbmcgbW9ycGhlZCB0aGVuIGl0IHdpbGwgYmUgaW4gdGhlIGZpbmFsXG4gICAgICAgIC8vIERPTSBzbyBjbGVhciBpdCBvdXQgb2YgdGhlIHNhdmVkIGVsZW1lbnRzIGNvbGxlY3Rpb25cbiAgICAgICAgZGVsZXRlIGZyb21Ob2Rlc0xvb2t1cFt0b0VsS2V5XTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjaGlsZHJlbk9ubHkpIHtcbiAgICAgICAgLy8gb3B0aW9uYWxcbiAgICAgICAgaWYgKG9uQmVmb3JlRWxVcGRhdGVkKGZyb21FbCwgdG9FbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIGF0dHJpYnV0ZXMgb24gb3JpZ2luYWwgRE9NIGVsZW1lbnQgZmlyc3RcbiAgICAgICAgbW9ycGhBdHRycyhmcm9tRWwsIHRvRWwpO1xuICAgICAgICAvLyBvcHRpb25hbFxuICAgICAgICBvbkVsVXBkYXRlZChmcm9tRWwpO1xuXG4gICAgICAgIGlmIChvbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkKGZyb21FbCwgdG9FbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmcm9tRWwubm9kZU5hbWUgIT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgbW9ycGhDaGlsZHJlbihmcm9tRWwsIHRvRWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3BlY2lhbEVsSGFuZGxlcnMuVEVYVEFSRUEoZnJvbUVsLCB0b0VsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3JwaENoaWxkcmVuKGZyb21FbCwgdG9FbCkge1xuICAgICAgdmFyIHNraXBGcm9tID0gc2tpcEZyb21DaGlsZHJlbihmcm9tRWwpO1xuICAgICAgdmFyIGN1clRvTm9kZUNoaWxkID0gdG9FbC5maXJzdENoaWxkO1xuICAgICAgdmFyIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tRWwuZmlyc3RDaGlsZDtcbiAgICAgIHZhciBjdXJUb05vZGVLZXk7XG4gICAgICB2YXIgY3VyRnJvbU5vZGVLZXk7XG5cbiAgICAgIHZhciBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICB2YXIgdG9OZXh0U2libGluZztcbiAgICAgIHZhciBtYXRjaGluZ0Zyb21FbDtcblxuICAgICAgLy8gd2FsayB0aGUgY2hpbGRyZW5cbiAgICAgIG91dGVyOiB3aGlsZSAoY3VyVG9Ob2RlQ2hpbGQpIHtcbiAgICAgICAgdG9OZXh0U2libGluZyA9IGN1clRvTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICBjdXJUb05vZGVLZXkgPSBnZXROb2RlS2V5KGN1clRvTm9kZUNoaWxkKTtcblxuICAgICAgICAvLyB3YWxrIHRoZSBmcm9tTm9kZSBjaGlsZHJlbiBhbGwgdGhlIHdheSB0aHJvdWdoXG4gICAgICAgIHdoaWxlICghc2tpcEZyb20gJiYgY3VyRnJvbU5vZGVDaGlsZCkge1xuICAgICAgICAgIGZyb21OZXh0U2libGluZyA9IGN1ckZyb21Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICBpZiAoY3VyVG9Ob2RlQ2hpbGQuaXNTYW1lTm9kZSAmJiBjdXJUb05vZGVDaGlsZC5pc1NhbWVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQpKSB7XG4gICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY3VyRnJvbU5vZGVLZXkgPSBnZXROb2RlS2V5KGN1ckZyb21Ob2RlQ2hpbGQpO1xuXG4gICAgICAgICAgdmFyIGN1ckZyb21Ob2RlVHlwZSA9IGN1ckZyb21Ob2RlQ2hpbGQubm9kZVR5cGU7XG5cbiAgICAgICAgICAvLyB0aGlzIG1lYW5zIGlmIHRoZSBjdXJGcm9tTm9kZUNoaWxkIGRvZXNudCBoYXZlIGEgbWF0Y2ggd2l0aCB0aGUgY3VyVG9Ob2RlQ2hpbGRcbiAgICAgICAgICB2YXIgaXNDb21wYXRpYmxlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gY3VyVG9Ob2RlQ2hpbGQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAvLyBCb3RoIG5vZGVzIGJlaW5nIGNvbXBhcmVkIGFyZSBFbGVtZW50IG5vZGVzXG5cbiAgICAgICAgICAgICAgaWYgKGN1clRvTm9kZUtleSkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSB0YXJnZXQgbm9kZSBoYXMgYSBrZXkgc28gd2Ugd2FudCB0byBtYXRjaCBpdCB1cCB3aXRoIHRoZSBjb3JyZWN0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWVcbiAgICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlS2V5ICE9PSBjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgLy8gVGhlIGN1cnJlbnQgZWxlbWVudCBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUgZG9lcyBub3QgaGF2ZSBhIG1hdGNoaW5nIGtleSBzb1xuICAgICAgICAgICAgICAgICAgLy8gbGV0J3MgY2hlY2sgb3VyIGxvb2t1cCB0byBzZWUgaWYgdGhlcmUgaXMgYSBtYXRjaGluZyBlbGVtZW50IGluIHRoZSBvcmlnaW5hbFxuICAgICAgICAgICAgICAgICAgLy8gRE9NIHRyZWVcbiAgICAgICAgICAgICAgICAgIGlmICgobWF0Y2hpbmdGcm9tRWwgPSBmcm9tTm9kZXNMb29rdXBbY3VyVG9Ob2RlS2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyb21OZXh0U2libGluZyA9PT0gbWF0Y2hpbmdGcm9tRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIHNpbmdsZSBlbGVtZW50IHJlbW92YWxzLiBUbyBhdm9pZCByZW1vdmluZyB0aGUgb3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgICAgICAvLyBET00gbm9kZSBvdXQgb2YgdGhlIHRyZWUgKHNpbmNlIHRoYXQgY2FuIGJyZWFrIENTUyB0cmFuc2l0aW9ucywgZXRjLiksXG4gICAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2lsbCBpbnN0ZWFkIGRpc2NhcmQgdGhlIGN1cnJlbnQgbm9kZSBhbmQgd2FpdCB1bnRpbCB0aGUgbmV4dFxuICAgICAgICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGlvbiB0byBwcm9wZXJseSBtYXRjaCB1cCB0aGUga2V5ZWQgdGFyZ2V0IGVsZW1lbnQgd2l0aCBpdHMgbWF0Y2hpbmdcbiAgICAgICAgICAgICAgICAgICAgICAvLyBlbGVtZW50IGluIHRoZSBvcmlnaW5hbCB0cmVlXG4gICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gV2UgZm91bmQgYSBtYXRjaGluZyBrZXllZCBlbGVtZW50IHNvbWV3aGVyZSBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gTGV0J3MgbW92ZSB0aGUgb3JpZ2luYWwgRE9NIG5vZGUgaW50byB0aGUgY3VycmVudCBwb3NpdGlvbiBhbmQgbW9ycGhcbiAgICAgICAgICAgICAgICAgICAgICAvLyBpdC5cblxuICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IFdlIHVzZSBpbnNlcnRCZWZvcmUgaW5zdGVhZCBvZiByZXBsYWNlQ2hpbGQgYmVjYXVzZSB3ZSB3YW50IHRvIGdvIHRocm91Z2hcbiAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYHJlbW92ZU5vZGUoKWAgZnVuY3Rpb24gZm9yIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgZGlzY2FyZGVkIHNvIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAvLyBhbGwgbGlmZWN5Y2xlIGhvb2tzIGFyZSBjb3JyZWN0bHkgaW52b2tlZFxuICAgICAgICAgICAgICAgICAgICAgIGZyb21FbC5pbnNlcnRCZWZvcmUobWF0Y2hpbmdGcm9tRWwsIGN1ckZyb21Ob2RlQ2hpbGQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIG5vZGUgaXMga2V5ZWQgaXQgbWlnaHQgYmUgbWF0Y2hlZCB1cCBsYXRlciBzbyB3ZSBkZWZlclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFjdHVhbCByZW1vdmFsIHRvIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRLZXllZFJlbW92YWwoY3VyRnJvbU5vZGVLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiB3ZSBza2lwIG5lc3RlZCBrZXllZCBub2RlcyBmcm9tIGJlaW5nIHJlbW92ZWQgc2luY2UgdGhlcmUgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHN0aWxsIGEgY2hhbmNlIHRoZXkgd2lsbCBiZSBtYXRjaGVkIHVwIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQsIGZyb21FbCwgdHJ1ZSAvKiBza2lwIGtleWVkIG5vZGVzICovKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gbWF0Y2hpbmdGcm9tRWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBub2RlcyBhcmUgbm90IGNvbXBhdGlibGUgc2luY2UgdGhlIFwidG9cIiBub2RlIGhhcyBhIGtleSBhbmQgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gaXMgbm8gbWF0Y2hpbmcga2V5ZWQgbm9kZSBpbiB0aGUgc291cmNlIHRyZWVcbiAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIG9yaWdpbmFsIGhhcyBhIGtleVxuICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gaXNDb21wYXRpYmxlICE9PSBmYWxzZSAmJiBjb21wYXJlTm9kZU5hbWVzKGN1ckZyb21Ob2RlQ2hpbGQsIGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgaWYgKGlzQ29tcGF0aWJsZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGZvdW5kIGNvbXBhdGlibGUgRE9NIGVsZW1lbnRzIHNvIHRyYW5zZm9ybVxuICAgICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IFwiZnJvbVwiIG5vZGUgdG8gbWF0Y2ggdGhlIGN1cnJlbnRcbiAgICAgICAgICAgICAgICAvLyB0YXJnZXQgRE9NIG5vZGUuXG4gICAgICAgICAgICAgICAgLy8gTU9SUEhcbiAgICAgICAgICAgICAgICBtb3JwaEVsKGN1ckZyb21Ob2RlQ2hpbGQsIGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gVEVYVF9OT0RFIHx8IGN1ckZyb21Ob2RlVHlwZSA9PSBDT01NRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgLy8gQm90aCBub2RlcyBiZWluZyBjb21wYXJlZCBhcmUgVGV4dCBvciBDb21tZW50IG5vZGVzXG4gICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgIC8vIFNpbXBseSB1cGRhdGUgbm9kZVZhbHVlIG9uIHRoZSBvcmlnaW5hbCBub2RlIHRvXG4gICAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgdGV4dCB2YWx1ZVxuICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVDaGlsZC5ub2RlVmFsdWUgIT09IGN1clRvTm9kZUNoaWxkLm5vZGVWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQubm9kZVZhbHVlID0gY3VyVG9Ob2RlQ2hpbGQubm9kZVZhbHVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNDb21wYXRpYmxlKSB7XG4gICAgICAgICAgICAvLyBBZHZhbmNlIGJvdGggdGhlIFwidG9cIiBjaGlsZCBhbmQgdGhlIFwiZnJvbVwiIGNoaWxkIHNpbmNlIHdlIGZvdW5kIGEgbWF0Y2hcbiAgICAgICAgICAgIC8vIE5vdGhpbmcgZWxzZSB0byBkbyBhcyB3ZSBhbHJlYWR5IHJlY3Vyc2l2ZWx5IGNhbGxlZCBtb3JwaENoaWxkcmVuIGFib3ZlXG4gICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTm8gY29tcGF0aWJsZSBtYXRjaCBzbyByZW1vdmUgdGhlIG9sZCBub2RlIGZyb20gdGhlIERPTSBhbmQgY29udGludWUgdHJ5aW5nIHRvIGZpbmQgYVxuICAgICAgICAgIC8vIG1hdGNoIGluIHRoZSBvcmlnaW5hbCBET00uIEhvd2V2ZXIsIHdlIG9ubHkgZG8gdGhpcyBpZiB0aGUgZnJvbSBub2RlIGlzIG5vdCBrZXllZFxuICAgICAgICAgIC8vIHNpbmNlIGl0IGlzIHBvc3NpYmxlIHRoYXQgYSBrZXllZCBub2RlIG1pZ2h0IG1hdGNoIHVwIHdpdGggYSBub2RlIHNvbWV3aGVyZSBlbHNlIGluIHRoZVxuICAgICAgICAgIC8vIHRhcmdldCB0cmVlIGFuZCB3ZSBkb24ndCB3YW50IHRvIGRpc2NhcmQgaXQganVzdCB5ZXQgc2luY2UgaXQgc3RpbGwgbWlnaHQgZmluZCBhXG4gICAgICAgICAgLy8gaG9tZSBpbiB0aGUgZmluYWwgRE9NIHRyZWUuIEFmdGVyIGV2ZXJ5dGhpbmcgaXMgZG9uZSB3ZSB3aWxsIHJlbW92ZSBhbnkga2V5ZWQgbm9kZXNcbiAgICAgICAgICAvLyB0aGF0IGRpZG4ndCBmaW5kIGEgaG9tZVxuICAgICAgICAgIGlmIChjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgLy8gU2luY2UgdGhlIG5vZGUgaXMga2V5ZWQgaXQgbWlnaHQgYmUgbWF0Y2hlZCB1cCBsYXRlciBzbyB3ZSBkZWZlclxuICAgICAgICAgICAgLy8gdGhlIGFjdHVhbCByZW1vdmFsIHRvIGxhdGVyXG4gICAgICAgICAgICBhZGRLZXllZFJlbW92YWwoY3VyRnJvbU5vZGVLZXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBOT1RFOiB3ZSBza2lwIG5lc3RlZCBrZXllZCBub2RlcyBmcm9tIGJlaW5nIHJlbW92ZWQgc2luY2UgdGhlcmUgaXNcbiAgICAgICAgICAgIC8vICAgICAgIHN0aWxsIGEgY2hhbmNlIHRoZXkgd2lsbCBiZSBtYXRjaGVkIHVwIGxhdGVyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQsIGZyb21FbCwgdHJ1ZSAvKiBza2lwIGtleWVkIG5vZGVzICovKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICB9IC8vIEVORDogd2hpbGUoY3VyRnJvbU5vZGVDaGlsZCkge31cblxuICAgICAgICAvLyBJZiB3ZSBnb3QgdGhpcyBmYXIgdGhlbiB3ZSBkaWQgbm90IGZpbmQgYSBjYW5kaWRhdGUgbWF0Y2ggZm9yXG4gICAgICAgIC8vIG91ciBcInRvIG5vZGVcIiBhbmQgd2UgZXhoYXVzdGVkIGFsbCBvZiB0aGUgY2hpbGRyZW4gXCJmcm9tXCJcbiAgICAgICAgLy8gbm9kZXMuIFRoZXJlZm9yZSwgd2Ugd2lsbCBqdXN0IGFwcGVuZCB0aGUgY3VycmVudCBcInRvXCIgbm9kZVxuICAgICAgICAvLyB0byB0aGUgZW5kXG4gICAgICAgIGlmIChjdXJUb05vZGVLZXkgJiYgKG1hdGNoaW5nRnJvbUVsID0gZnJvbU5vZGVzTG9va3VwW2N1clRvTm9kZUtleV0pICYmIGNvbXBhcmVOb2RlTmFtZXMobWF0Y2hpbmdGcm9tRWwsIGN1clRvTm9kZUNoaWxkKSkge1xuICAgICAgICAgIC8vIE1PUlBIXG4gICAgICAgICAgaWYoIXNraXBGcm9tKXsgYWRkQ2hpbGQoZnJvbUVsLCBtYXRjaGluZ0Zyb21FbCk7IH1cbiAgICAgICAgICBtb3JwaEVsKG1hdGNoaW5nRnJvbUVsLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0ID0gb25CZWZvcmVOb2RlQWRkZWQoY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgIGlmIChvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCkge1xuICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IG9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VyVG9Ob2RlQ2hpbGQuYWN0dWFsaXplKSB7XG4gICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gY3VyVG9Ob2RlQ2hpbGQuYWN0dWFsaXplKGZyb21FbC5vd25lckRvY3VtZW50IHx8IGRvYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRDaGlsZChmcm9tRWwsIGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSB0b05leHRTaWJsaW5nO1xuICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgfVxuXG4gICAgICBjbGVhbnVwRnJvbUVsKGZyb21FbCwgY3VyRnJvbU5vZGVDaGlsZCwgY3VyRnJvbU5vZGVLZXkpO1xuXG4gICAgICB2YXIgc3BlY2lhbEVsSGFuZGxlciA9IHNwZWNpYWxFbEhhbmRsZXJzW2Zyb21FbC5ub2RlTmFtZV07XG4gICAgICBpZiAoc3BlY2lhbEVsSGFuZGxlcikge1xuICAgICAgICBzcGVjaWFsRWxIYW5kbGVyKGZyb21FbCwgdG9FbCk7XG4gICAgICB9XG4gICAgfSAvLyBFTkQ6IG1vcnBoQ2hpbGRyZW4oLi4uKVxuXG4gICAgdmFyIG1vcnBoZWROb2RlID0gZnJvbU5vZGU7XG4gICAgdmFyIG1vcnBoZWROb2RlVHlwZSA9IG1vcnBoZWROb2RlLm5vZGVUeXBlO1xuICAgIHZhciB0b05vZGVUeXBlID0gdG9Ob2RlLm5vZGVUeXBlO1xuXG4gICAgaWYgKCFjaGlsZHJlbk9ubHkpIHtcbiAgICAgIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSB3ZSBhcmUgZ2l2ZW4gdHdvIERPTSBub2RlcyB0aGF0IGFyZSBub3RcbiAgICAgIC8vIGNvbXBhdGlibGUgKGUuZy4gPGRpdj4gLS0+IDxzcGFuPiBvciA8ZGl2PiAtLT4gVEVYVClcbiAgICAgIGlmIChtb3JwaGVkTm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICBpZiAodG9Ob2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgaWYgKCFjb21wYXJlTm9kZU5hbWVzKGZyb21Ob2RlLCB0b05vZGUpKSB7XG4gICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQoZnJvbU5vZGUpO1xuICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSBtb3ZlQ2hpbGRyZW4oZnJvbU5vZGUsIGNyZWF0ZUVsZW1lbnROUyh0b05vZGUubm9kZU5hbWUsIHRvTm9kZS5uYW1lc3BhY2VVUkkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gR29pbmcgZnJvbSBhbiBlbGVtZW50IG5vZGUgdG8gYSB0ZXh0IG5vZGVcbiAgICAgICAgICBtb3JwaGVkTm9kZSA9IHRvTm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtb3JwaGVkTm9kZVR5cGUgPT09IFRFWFRfTk9ERSB8fCBtb3JwaGVkTm9kZVR5cGUgPT09IENPTU1FTlRfTk9ERSkgeyAvLyBUZXh0IG9yIGNvbW1lbnQgbm9kZVxuICAgICAgICBpZiAodG9Ob2RlVHlwZSA9PT0gbW9ycGhlZE5vZGVUeXBlKSB7XG4gICAgICAgICAgaWYgKG1vcnBoZWROb2RlLm5vZGVWYWx1ZSAhPT0gdG9Ob2RlLm5vZGVWYWx1ZSkge1xuICAgICAgICAgICAgbW9ycGhlZE5vZGUubm9kZVZhbHVlID0gdG9Ob2RlLm5vZGVWYWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbW9ycGhlZE5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGV4dCBub2RlIHRvIHNvbWV0aGluZyBlbHNlXG4gICAgICAgICAgbW9ycGhlZE5vZGUgPSB0b05vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobW9ycGhlZE5vZGUgPT09IHRvTm9kZSkge1xuICAgICAgLy8gVGhlIFwidG8gbm9kZVwiIHdhcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoZSBcImZyb20gbm9kZVwiIHNvIHdlIGhhZCB0b1xuICAgICAgLy8gdG9zcyBvdXQgdGhlIFwiZnJvbSBub2RlXCIgYW5kIHVzZSB0aGUgXCJ0byBub2RlXCJcbiAgICAgIG9uTm9kZURpc2NhcmRlZChmcm9tTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0b05vZGUuaXNTYW1lTm9kZSAmJiB0b05vZGUuaXNTYW1lTm9kZShtb3JwaGVkTm9kZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBtb3JwaEVsKG1vcnBoZWROb2RlLCB0b05vZGUsIGNoaWxkcmVuT25seSk7XG5cbiAgICAgIC8vIFdlIG5vdyBuZWVkIHRvIGxvb3Agb3ZlciBhbnkga2V5ZWQgbm9kZXMgdGhhdCBtaWdodCBuZWVkIHRvIGJlXG4gICAgICAvLyByZW1vdmVkLiBXZSBvbmx5IGRvIHRoZSByZW1vdmFsIGlmIHdlIGtub3cgdGhhdCB0aGUga2V5ZWQgbm9kZVxuICAgICAgLy8gbmV2ZXIgZm91bmQgYSBtYXRjaC4gV2hlbiBhIGtleWVkIG5vZGUgaXMgbWF0Y2hlZCB1cCB3ZSByZW1vdmVcbiAgICAgIC8vIGl0IG91dCBvZiBmcm9tTm9kZXNMb29rdXAgYW5kIHdlIHVzZSBmcm9tTm9kZXNMb29rdXAgdG8gZGV0ZXJtaW5lXG4gICAgICAvLyBpZiBhIGtleWVkIG5vZGUgaGFzIGJlZW4gbWF0Y2hlZCB1cCBvciBub3RcbiAgICAgIGlmIChrZXllZFJlbW92YWxMaXN0KSB7XG4gICAgICAgIGZvciAodmFyIGk9MCwgbGVuPWtleWVkUmVtb3ZhbExpc3QubGVuZ3RoOyBpPGxlbjsgaSsrKSB7XG4gICAgICAgICAgdmFyIGVsVG9SZW1vdmUgPSBmcm9tTm9kZXNMb29rdXBba2V5ZWRSZW1vdmFsTGlzdFtpXV07XG4gICAgICAgICAgaWYgKGVsVG9SZW1vdmUpIHtcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZWxUb1JlbW92ZSwgZWxUb1JlbW92ZS5wYXJlbnROb2RlLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjaGlsZHJlbk9ubHkgJiYgbW9ycGhlZE5vZGUgIT09IGZyb21Ob2RlICYmIGZyb21Ob2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChtb3JwaGVkTm9kZS5hY3R1YWxpemUpIHtcbiAgICAgICAgbW9ycGhlZE5vZGUgPSBtb3JwaGVkTm9kZS5hY3R1YWxpemUoZnJvbU5vZGUub3duZXJEb2N1bWVudCB8fCBkb2MpO1xuICAgICAgfVxuICAgICAgLy8gSWYgd2UgaGFkIHRvIHN3YXAgb3V0IHRoZSBmcm9tIG5vZGUgd2l0aCBhIG5ldyBub2RlIGJlY2F1c2UgdGhlIG9sZFxuICAgICAgLy8gbm9kZSB3YXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgdGFyZ2V0IG5vZGUgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAvLyByZXBsYWNlIHRoZSBvbGQgRE9NIG5vZGUgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlLiBUaGlzIGlzIG9ubHlcbiAgICAgIC8vIHBvc3NpYmxlIGlmIHRoZSBvcmlnaW5hbCBET00gbm9kZSB3YXMgcGFydCBvZiBhIERPTSB0cmVlIHdoaWNoXG4gICAgICAvLyB3ZSBrbm93IGlzIHRoZSBjYXNlIGlmIGl0IGhhcyBhIHBhcmVudCBub2RlLlxuICAgICAgZnJvbU5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobW9ycGhlZE5vZGUsIGZyb21Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9ycGhlZE5vZGU7XG4gIH07XG59XG5cbnZhciBtb3JwaGRvbSA9IG1vcnBoZG9tRmFjdG9yeShtb3JwaEF0dHJzKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24oZWxlbWVudCkge1xuICAgIGNvbnN0IGlzRmlsZUlucHV0ID0gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSAnZmlsZSc7XG4gICAgaWYgKCFpc0ZpbGVJbnB1dCkge1xuICAgICAgICBpZiAoJ3ZhbHVlJyBpbiBlbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbGVtZW50LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgbm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24oY2hpbGQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlTW9ycGhkb20ocm9vdEZyb21FbGVtZW50LCByb290VG9FbGVtZW50LCBtb2RpZmllZEZpZWxkRWxlbWVudHMsIGdldEVsZW1lbnRWYWx1ZSwgY2hpbGRDb21wb25lbnRzLCBmaW5kQ2hpbGRDb21wb25lbnQsIGdldEtleUZyb21FbGVtZW50LCBleHRlcm5hbE11dGF0aW9uVHJhY2tlcikge1xuICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50TWFwID0gbmV3IE1hcCgpO1xuICAgIGNoaWxkQ29tcG9uZW50cy5mb3JFYWNoKChjaGlsZENvbXBvbmVudCkgPT4ge1xuICAgICAgICBjaGlsZENvbXBvbmVudE1hcC5zZXQoY2hpbGRDb21wb25lbnQuZWxlbWVudCwgY2hpbGRDb21wb25lbnQpO1xuICAgIH0pO1xuICAgIG1vcnBoZG9tKHJvb3RGcm9tRWxlbWVudCwgcm9vdFRvRWxlbWVudCwge1xuICAgICAgICBnZXROb2RlS2V5OiAobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChleHRlcm5hbE11dGF0aW9uVHJhY2tlci53YXNFbGVtZW50QWRkZWQobm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2FkZGVkX2VsZW1lbnRfJyArIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0S2V5RnJvbUVsZW1lbnQobm9kZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVmb3JlRWxVcGRhdGVkOiAoZnJvbUVsLCB0b0VsKSA9PiB7XG4gICAgICAgICAgICBpZiAoZnJvbUVsID09PSByb290RnJvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmcm9tRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0b0VsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyb21FbC5fX3ggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghd2luZG93LkFscGluZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gYWNjZXNzIEFscGluZS5qcyB0aG91Z2ggdGhlIGdsb2JhbCB3aW5kb3cuQWxwaW5lIHZhcmlhYmxlLiBQbGVhc2UgbWFrZSBzdXJlIEFscGluZS5qcyBpcyBsb2FkZWQgYmVmb3JlIFN5bWZvbnkgVVggTGl2ZUNvbXBvbmVudC4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5BbHBpbmUubW9ycGggIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGFjY2VzcyBBbHBpbmUuanMgbW9ycGggZnVuY3Rpb24uIFBsZWFzZSBtYWtlIHN1cmUgdGhlIEFscGluZS5qcyBNb3JwaCBwbHVnaW4gaXMgaW5zdGFsbGVkIGFuZCBsb2FkZWQsIHNlZSBodHRwczovL2FscGluZWpzLmRldi9wbHVnaW5zL21vcnBoIGZvciBtb3JlIGluZm9ybWF0aW9uLicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5BbHBpbmUubW9ycGgoZnJvbUVsLl9feCwgdG9FbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGlsZENvbXBvbmVudE1hcC5oYXMoZnJvbUVsKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZENvbXBvbmVudCA9IGNoaWxkQ29tcG9uZW50TWFwLmdldChmcm9tRWwpO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbXBvbmVudC51cGRhdGVGcm9tTmV3RWxlbWVudEZyb21QYXJlbnRSZW5kZXIodG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVkRmllbGRFbGVtZW50cy5pbmNsdWRlcyhmcm9tRWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlT25FbGVtZW50KHRvRWwsIGdldEVsZW1lbnRWYWx1ZShmcm9tRWwpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudENoYW5nZXMgPSBleHRlcm5hbE11dGF0aW9uVHJhY2tlci5nZXRDaGFuZ2VkRWxlbWVudChmcm9tRWwpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5hcHBseVRvRWxlbWVudCh0b0VsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbC5pc0VxdWFsTm9kZSh0b0VsKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxpemVkRnJvbUVsID0gY2xvbmVIVE1MRWxlbWVudChmcm9tRWwpO1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkRnJvbUVsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFRvRWwgPSBjbG9uZUhUTUxFbGVtZW50KHRvRWwpO1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkVG9FbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkRnJvbUVsLmlzRXF1YWxOb2RlKG5vcm1hbGl6ZWRUb0VsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFmcm9tRWwuaGFzQXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVmb3JlTm9kZURpc2NhcmRlZChub2RlKSB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIud2FzRWxlbWVudEFkZGVkKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFub2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScpO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5jbGFzcyBVbnN5bmNlZElucHV0c1RyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCwgbW9kZWxFbGVtZW50UmVzb2x2ZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgICB7IGV2ZW50OiAnaW5wdXQnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIH0sXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLm1vZGVsRWxlbWVudFJlc29sdmVyID0gbW9kZWxFbGVtZW50UmVzb2x2ZXI7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMgPSBuZXcgVW5zeW5jZWRJbnB1dENvbnRhaW5lcigpO1xuICAgIH1cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudCh0YXJnZXQpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCB1cGRhdGUgbW9kZWwgZm9yIG5vbiBIVE1MRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIuZ2V0TW9kZWxOYW1lKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLmFkZChlbGVtZW50LCBtb2RlbE5hbWUpO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZElucHV0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHMuYWxsVW5zeW5jZWRJbnB1dHMoKTtcbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbHMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMudW5zeW5jZWRJbnB1dHMuZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkpO1xuICAgIH1cbiAgICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLnJlc2V0VW5zeW5jZWRGaWVsZHMoKTtcbiAgICB9XG59XG5jbGFzcyBVbnN5bmNlZElucHV0Q29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzID0gW107XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzID0gW107XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSA9IG51bGwpIHtcbiAgICAgICAgaWYgKG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLnNldChtb2RlbE5hbWUsIGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMucHVzaChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWxsVW5zeW5jZWRJbnB1dHMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLCAuLi50aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMudmFsdWVzKCldO1xuICAgIH1cbiAgICBtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmRleE9mKG1vZGVsTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXM7XG4gICAgfVxufVxuXG5jbGFzcyBIb29rTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgaG9va3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHRoaXMuaG9va3Muc2V0KGhvb2tOYW1lLCBob29rcyk7XG4gICAgfVxuICAgIHVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBjb25zdCBpbmRleCA9IGhvb2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaG9va3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcbiAgICB9XG4gICAgdHJpZ2dlckhvb2soaG9va05hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGhvb2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBCYWNrZW5kUmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKHJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0Qm9keSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keSA9IGF3YWl0IHRoaXMucmVzcG9uc2UudGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHk7XG4gICAgfVxufVxuXG5jbGFzcyBDaGFuZ2luZ0l0ZW1zVHJhY2tlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgc2V0SXRlbShpdGVtTmFtZSwgbmV3VmFsdWUsIHByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMucmVtb3ZlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZWRSZWNvcmQgPSB0aGlzLnJlbW92ZWRJdGVtcy5nZXQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGlmIChyZW1vdmVkUmVjb3JkLm9yaWdpbmFsID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VkSXRlbXMuaGFzKGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZWNvcmQgPSB0aGlzLmNoYW5nZWRJdGVtcy5nZXQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsUmVjb3JkLm9yaWdpbmFsID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiBvcmlnaW5hbFJlY29yZC5vcmlnaW5hbCwgbmV3OiBuZXdWYWx1ZSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5zZXQoaXRlbU5hbWUsIHsgb3JpZ2luYWw6IHByZXZpb3VzVmFsdWUsIG5ldzogbmV3VmFsdWUgfSk7XG4gICAgfVxuICAgIHJlbW92ZUl0ZW0oaXRlbU5hbWUsIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICBsZXQgdHJ1ZU9yaWdpbmFsVmFsdWUgPSBjdXJyZW50VmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlY29yZCA9IHRoaXMuY2hhbmdlZEl0ZW1zLmdldChpdGVtTmFtZSk7XG4gICAgICAgICAgICB0cnVlT3JpZ2luYWxWYWx1ZSA9IG9yaWdpbmFsUmVjb3JkLm9yaWdpbmFsO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGlmICh0cnVlT3JpZ2luYWxWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmVtb3ZlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZEl0ZW1zLnNldChpdGVtTmFtZSwgeyBvcmlnaW5hbDogdHJ1ZU9yaWdpbmFsVmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q2hhbmdlZEl0ZW1zKCkge1xuICAgICAgICBjb25zdCBjaGFuZ2VkSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkSXRlbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlZEl0ZW1zLnB1c2goeyBuYW1lOiBrZXksIHZhbHVlOiB2YWx1ZS5uZXcgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2hhbmdlZEl0ZW1zO1xuICAgIH1cbiAgICBnZXRSZW1vdmVkSXRlbXMoKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLnJlbW92ZWRJdGVtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICByZW1vdmVkSXRlbXMucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlbW92ZWRJdGVtcztcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlZEl0ZW1zLnNpemUgPT09IDAgJiYgdGhpcy5yZW1vdmVkSXRlbXMuc2l6ZSA9PT0gMDtcbiAgICB9XG59XG5cbmNsYXNzIEVsZW1lbnRDaGFuZ2VzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hZGRlZENsYXNzZXMgPSBbXTtcbiAgICAgICAgdGhpcy5yZW1vdmVkQ2xhc3NlcyA9IFtdO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcyA9IG5ldyBDaGFuZ2luZ0l0ZW1zVHJhY2tlcigpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMgPSBuZXcgQ2hhbmdpbmdJdGVtc1RyYWNrZXIoKTtcbiAgICB9XG4gICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbW92ZWRDbGFzc2VzLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMgPSB0aGlzLnJlbW92ZWRDbGFzc2VzLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYWRkZWRDbGFzc2VzLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkZWRDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRkZWRDbGFzc2VzLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkZWRDbGFzc2VzID0gdGhpcy5hZGRlZENsYXNzZXMuZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9PSBjbGFzc05hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yZW1vdmVkQ2xhc3Nlcy5pbmNsdWRlcyhjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZWRDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRTdHlsZShzdHlsZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3R5bGVDaGFuZ2VzLnNldEl0ZW0oc3R5bGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIHJlbW92ZVN0eWxlKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5yZW1vdmVJdGVtKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuc2V0SXRlbShhdHRyaWJ1dGVOYW1lLCBuZXdWYWx1ZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgfVxuICAgIHJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5yZW1vdmVJdGVtKGF0dHJpYnV0ZU5hbWUsIG9yaWdpbmFsVmFsdWUpO1xuICAgIH1cbiAgICBnZXRBZGRlZENsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZGVkQ2xhc3NlcztcbiAgICB9XG4gICAgZ2V0UmVtb3ZlZENsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZWRDbGFzc2VzO1xuICAgIH1cbiAgICBnZXRDaGFuZ2VkU3R5bGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHlsZUNoYW5nZXMuZ2V0Q2hhbmdlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGdldFJlbW92ZWRTdHlsZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKTtcbiAgICB9XG4gICAgZ2V0Q2hhbmdlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUNoYW5nZXMuZ2V0Q2hhbmdlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGdldFJlbW92ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpO1xuICAgIH1cbiAgICBhcHBseVRvRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuYWRkZWRDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbW92ZWRDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKS5mb3JFYWNoKChzdHlsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGNoYW5nZS5uYW1lLCBjaGFuZ2UudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKGF0dHJpYnV0ZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmFkZGVkQ2xhc3Nlcy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENsYXNzZXMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLnN0eWxlQ2hhbmdlcy5pc0VtcHR5KCkgJiZcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5pc0VtcHR5KCkpO1xuICAgIH1cbn1cblxuY2xhc3MgRXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHMgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5hZGRlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMucmVtb3ZlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayA9IHNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMub25NdXRhdGlvbnMuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IHRydWU7XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q2hhbmdlZEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VkRWxlbWVudHMuaGFzKGVsZW1lbnQpID8gdGhpcy5jaGFuZ2VkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIDogbnVsbDtcbiAgICB9XG4gICAgZ2V0QWRkZWRFbGVtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkZWRFbGVtZW50cztcbiAgICB9XG4gICAgd2FzRWxlbWVudEFkZGVkKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkZWRFbGVtZW50cy5pbmNsdWRlcyhlbGVtZW50KTtcbiAgICB9XG4gICAgaGFuZGxlUGVuZGluZ0NoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMub25NdXRhdGlvbnModGhpcy5tdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuICAgIH1cbiAgICBvbk11dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2soZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYWRkZWRFbGVtZW50IG9mIHRoaXMuYWRkZWRFbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChhZGRlZEVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0NoYW5nZUluQWRkZWRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKG11dGF0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjaGlsZExpc3QnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuc2V0KGVsZW1lbnQsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuZ2V0KGVsZW1lbnQpLmluY2x1ZGVzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuc2V0KGVsZW1lbnQsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5oYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmdldChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDaGlsZExpc3RNdXRhdGlvbihtdXRhdGlvbikge1xuICAgICAgICBtdXRhdGlvbi5hZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlZEVsZW1lbnRzLnNwbGljZSh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnRBZGRlZEJ5VHJhbnNsYXRpb24obm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkZGVkRWxlbWVudHMucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG11dGF0aW9uLnJlbW92ZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hZGRlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRlZEVsZW1lbnRzLnNwbGljZSh0aGlzLmFkZGVkRWxlbWVudHMuaW5kZXhPZihub2RlKSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVkRWxlbWVudHMucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGlmICghdGhpcy5jaGFuZ2VkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgbmV3IEVsZW1lbnRDaGFuZ2VzKCkpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkRWxlbWVudHNDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoYW5nZWRFbGVtZW50ID0gdGhpcy5jaGFuZ2VkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBzd2l0Y2ggKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNsYXNzQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlZEVsZW1lbnQuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50LS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgZWxlbWVudENoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlO1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlcyA9IHByZXZpb3VzVmFsdWUgPyBwcmV2aW91c1ZhbHVlLnNwbGl0KCcgJykgOiBbXTtcbiAgICAgICAgcHJldmlvdXNWYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmltbWVkVmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gICAgICAgICAgICBpZiAodHJpbW1lZFZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzVmFsdWVzW2luZGV4XSA9IHRyaW1tZWRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzVmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZXMgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnQuY2xhc3NMaXN0KTtcbiAgICAgICAgY29uc3QgYWRkZWRWYWx1ZXMgPSBuZXdWYWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gIXByZXZpb3VzVmFsdWVzLmluY2x1ZGVzKHZhbHVlKSk7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRWYWx1ZXMgPSBwcmV2aW91c1ZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiAhbmV3VmFsdWVzLmluY2x1ZGVzKHZhbHVlKSk7XG4gICAgICAgIGFkZGVkVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5hZGRDbGFzcyh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVkVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5yZW1vdmVDbGFzcyh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVTdHlsZUF0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWUgfHwgJyc7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzU3R5bGVzID0gdGhpcy5leHRyYWN0U3R5bGVzKHByZXZpb3VzVmFsdWUpO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpIHx8ICcnO1xuICAgICAgICBjb25zdCBuZXdTdHlsZXMgPSB0aGlzLmV4dHJhY3RTdHlsZXMobmV3VmFsdWUpO1xuICAgICAgICBjb25zdCBhZGRlZE9yQ2hhbmdlZFN0eWxlcyA9IE9iamVjdC5rZXlzKG5ld1N0eWxlcykuZmlsdGVyKChrZXkpID0+IHByZXZpb3VzU3R5bGVzW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwcmV2aW91c1N0eWxlc1trZXldICE9PSBuZXdTdHlsZXNba2V5XSk7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRTdHlsZXMgPSBPYmplY3Qua2V5cyhwcmV2aW91c1N0eWxlcykuZmlsdGVyKChrZXkpID0+ICFuZXdTdHlsZXNba2V5XSk7XG4gICAgICAgIGFkZGVkT3JDaGFuZ2VkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50Q2hhbmdlcy5hZGRTdHlsZShzdHlsZSwgbmV3U3R5bGVzW3N0eWxlXSwgcHJldmlvdXNTdHlsZXNbc3R5bGVdID09PSB1bmRlZmluZWQgPyBudWxsIDogcHJldmlvdXNTdHlsZXNbc3R5bGVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZWRTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLnJlbW92ZVN0eWxlKHN0eWxlLCBwcmV2aW91c1N0eWxlc1tzdHlsZV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlR2VuZXJpY0F0dHJpYnV0ZU11dGF0aW9uKG11dGF0aW9uLCBlbGVtZW50Q2hhbmdlcykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gbXV0YXRpb24uYXR0cmlidXRlTmFtZTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWU7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICBpZiAob2xkVmFsdWUgPT09IGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnRDaGFuZ2VzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBtdXRhdGlvbi5vbGRWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnRDaGFuZ2VzLmFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSwgbXV0YXRpb24ub2xkVmFsdWUpO1xuICAgIH1cbiAgICBleHRyYWN0U3R5bGVzKHN0eWxlcykge1xuICAgICAgICBjb25zdCBzdHlsZU9iamVjdCA9IHt9O1xuICAgICAgICBzdHlsZXMuc3BsaXQoJzsnKS5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydHMgPSBzdHlsZS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gcGFydHNbMF0udHJpbSgpO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbcHJvcGVydHldID0gcGFydHMuc2xpY2UoMSkuam9pbignOicpLnRyaW0oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgICB9XG4gICAgaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudGFnTmFtZSA9PT0gJ0ZPTlQnICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpID09PSAndmVydGljYWwtYWxpZ246IGluaGVyaXQ7JztcbiAgICB9XG59XG5cbmNsYXNzIENoaWxkQ29tcG9uZW50V3JhcHBlciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50LCBtb2RlbEJpbmRpbmdzKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLm1vZGVsQmluZGluZ3MgPSBtb2RlbEJpbmRpbmdzO1xuICAgIH1cbn1cbmNsYXNzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgcHJvcHMsIGxpc3RlbmVycywgY29tcG9uZW50RmluZGVyLCBmaW5nZXJwcmludCwgaWQsIGJhY2tlbmQsIGVsZW1lbnREcml2ZXIpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0RGVib3VuY2UgPSAxNTA7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMucGVuZGluZ0ZpbGVzID0ge307XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlcXVlc3REZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29tcG9uZW50RmluZGVyID0gY29tcG9uZW50RmluZGVyO1xuICAgICAgICB0aGlzLmJhY2tlbmQgPSBiYWNrZW5kO1xuICAgICAgICB0aGlzLmVsZW1lbnREcml2ZXIgPSBlbGVtZW50RHJpdmVyO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZmluZ2VycHJpbnQgPSBmaW5nZXJwcmludDtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobGlzdGVuZXIuZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc2V0KGxpc3RlbmVyLmV2ZW50LCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2EgPSB0aGlzLmxpc3RlbmVycy5nZXQobGlzdGVuZXIuZXZlbnQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHVzaChsaXN0ZW5lci5hY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlID0gbmV3IFZhbHVlU3RvcmUocHJvcHMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlciA9IG5ldyBVbnN5bmNlZElucHV0c1RyYWNrZXIodGhpcywgZWxlbWVudERyaXZlcik7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgSG9va01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlciA9IG5ldyBFeHRlcm5hbE11dGF0aW9uVHJhY2tlcih0aGlzLmVsZW1lbnQsIChlbGVtZW50KSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzKSk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5vbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUgPSB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBfc3dhcEJhY2tlbmQoYmFja2VuZCkge1xuICAgICAgICB0aGlzLmJhY2tlbmQgPSBiYWNrZW5kO1xuICAgIH1cbiAgICBhZGRQbHVnaW4ocGx1Z2luKSB7XG4gICAgICAgIHBsdWdpbi5hdHRhY2hUb0NvbXBvbmVudCh0aGlzKTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnY29ubmVjdCcsIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5hY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2Rpc2Nvbm5lY3QnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcbiAgICB9XG4gICAgb24oaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaG9va3MucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgb2ZmKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmhvb2tzLnVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc2V0KG1vZGVsLCB2YWx1ZSwgcmVSZW5kZXIgPSBmYWxzZSwgZGVib3VuY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG4gICAgICAgIGNvbnN0IGlzQ2hhbmdlZCA9IHRoaXMudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ21vZGVsOnNldCcsIG1vZGVsLCB2YWx1ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG4gICAgICAgIGlmIChyZVJlbmRlciAmJiBpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgZ2V0RGF0YShtb2RlbCkge1xuICAgICAgICBjb25zdCBtb2RlbE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobW9kZWwpO1xuICAgICAgICBpZiAoIXRoaXMudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGVsIFwiJHttb2RlbH1cIi5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpO1xuICAgIH1cbiAgICBhY3Rpb24obmFtZSwgYXJncyA9IHt9LCBkZWJvdW5jZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBhcmdzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBmaWxlcyhrZXksIGlucHV0KSB7XG4gICAgICAgIHRoaXMucGVuZGluZ0ZpbGVzW2tleV0gPSBpbnB1dDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIHRoaXMudHJ5U3RhcnRpbmdSZXF1ZXN0KCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVscygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmdldFVuc3luY2VkTW9kZWxzKCk7XG4gICAgfVxuICAgIGFkZENoaWxkKGNoaWxkLCBtb2RlbEJpbmRpbmdzID0gW10pIHtcbiAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZHJlbiBjb21wb25lbnRzIG11c3QgaGF2ZSBhbiBpZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNldChjaGlsZC5pZCwgbmV3IENoaWxkQ29tcG9uZW50V3JhcHBlcihjaGlsZCwgbW9kZWxCaW5kaW5ncykpO1xuICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICBjaGlsZC5vbignbW9kZWw6c2V0JywgdGhpcy5vbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUpO1xuICAgIH1cbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICBpZiAoIWNoaWxkLmlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoaWxkcmVuIGNvbXBvbmVudHMgbXVzdCBoYXZlIGFuIGlkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlKGNoaWxkLmlkKTtcbiAgICAgICAgY2hpbGQucGFyZW50ID0gbnVsbDtcbiAgICAgICAgY2hpbGQub2ZmKCdtb2RlbDpzZXQnLCB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSk7XG4gICAgfVxuICAgIGdldFBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbigpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGRDb21wb25lbnQsIGlkKSA9PiB7XG4gICAgICAgICAgICBjaGlsZHJlbi5zZXQoaWQsIGNoaWxkQ29tcG9uZW50LmNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfVxuICAgIGVtaXQobmFtZSwgZGF0YSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkID0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJmb3JtRW1pdChuYW1lLCBkYXRhLCBmYWxzZSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkKTtcbiAgICB9XG4gICAgZW1pdFVwKG5hbWUsIGRhdGEsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCA9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgdHJ1ZSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkKTtcbiAgICB9XG4gICAgZW1pdFNlbGYobmFtZSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb0VtaXQobmFtZSwgZGF0YSk7XG4gICAgfVxuICAgIHBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIGVtaXRVcCwgbWF0Y2hpbmdOYW1lKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudEZpbmRlcih0aGlzLCBlbWl0VXAsIG1hdGNoaW5nTmFtZSk7XG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQuZG9FbWl0KG5hbWUsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZG9FbWl0KG5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpIHx8IFtdO1xuICAgICAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24oYWN0aW9uLCBkYXRhLCAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVwZGF0ZUZyb21OZXdFbGVtZW50RnJvbVBhcmVudFJlbmRlcih0b0VsKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldENvbXBvbmVudFByb3BzKHRvRWwpO1xuICAgICAgICBpZiAocHJvcHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc0NoYW5nZWQgPSB0aGlzLnZhbHVlU3RvcmUuc3RvcmVOZXdQcm9wc0Zyb21QYXJlbnQocHJvcHMpO1xuICAgICAgICBjb25zdCBmaW5nZXJwcmludCA9IHRvRWwuZGF0YXNldC5saXZlRmluZ2VycHJpbnRWYWx1ZTtcbiAgICAgICAgaWYgKGZpbmdlcnByaW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmluZ2VycHJpbnQgPSBmaW5nZXJwcmludDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZShtb2RlbE5hbWUsIHZhbHVlLCBjaGlsZENvbXBvbmVudCkge1xuICAgICAgICBpZiAoIWNoaWxkQ29tcG9uZW50LmlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgaWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZFdyYXBwZXIgPSB0aGlzLmNoaWxkcmVuLmdldChjaGlsZENvbXBvbmVudC5pZCk7XG4gICAgICAgIGlmICghY2hpbGRXcmFwcGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY2hpbGQnKTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZFdyYXBwZXIubW9kZWxCaW5kaW5ncy5mb3JFYWNoKChtb2RlbEJpbmRpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTW9kZWxOYW1lID0gbW9kZWxCaW5kaW5nLmlubmVyTW9kZWxOYW1lIHx8ICd2YWx1ZSc7XG4gICAgICAgICAgICBpZiAoY2hpbGRNb2RlbE5hbWUgIT09IG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIHZhbHVlLCBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyLCBtb2RlbEJpbmRpbmcuZGVib3VuY2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNUdXJib0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgVHVyYm8gIT09ICd1bmRlZmluZWQnICYmICF0aGlzLmVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtdHVyYm89XCJmYWxzZVwiXScpO1xuICAgIH1cbiAgICB0cnlTdGFydGluZ1JlcXVlc3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5iYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICAgICAgdGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IHRydWU7XG4gICAgfVxuICAgIHBlcmZvcm1SZXF1ZXN0KCkge1xuICAgICAgICBjb25zdCB0aGlzUHJvbWlzZVJlc29sdmUgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmU7XG4gICAgICAgIHRoaXMucmVzZXRQcm9taXNlKCk7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLnJlc2V0VW5zeW5jZWRGaWVsZHMoKTtcbiAgICAgICAgY29uc3QgZmlsZXNUb1NlbmQgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5wZW5kaW5nRmlsZXMpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuZmlsZXMpIHtcbiAgICAgICAgICAgICAgICBmaWxlc1RvU2VuZFtrZXldID0gdmFsdWUuZmlsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdCA9IHRoaXMuYmFja2VuZC5tYWtlUmVxdWVzdCh0aGlzLnZhbHVlU3RvcmUuZ2V0T3JpZ2luYWxQcm9wcygpLCB0aGlzLnBlbmRpbmdBY3Rpb25zLCB0aGlzLnZhbHVlU3RvcmUuZ2V0RGlydHlQcm9wcygpLCB0aGlzLmdldENoaWxkcmVuRmluZ2VycHJpbnRzKCksIHRoaXMudmFsdWVTdG9yZS5nZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50KCksIGZpbGVzVG9TZW5kKTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbG9hZGluZy5zdGF0ZTpzdGFydGVkJywgdGhpcy5lbGVtZW50LCB0aGlzLmJhY2tlbmRSZXF1ZXN0KTtcbiAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUuZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nKCk7XG4gICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0LnByb21pc2UudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICAgICAgY29uc3QgYmFja2VuZFJlc3BvbnNlID0gbmV3IEJhY2tlbmRSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgYmFja2VuZFJlc3BvbnNlLmdldEJvZHkoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5wdXQgb2YgT2JqZWN0LnZhbHVlcyh0aGlzLnBlbmRpbmdGaWxlcykpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzO1xuICAgICAgICAgICAgaWYgKGhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSAhPT0gJ2FwcGxpY2F0aW9uL3ZuZC5saXZlLWNvbXBvbmVudCtodG1sJyAmJiAhaGVhZGVycy5nZXQoJ1gtTGl2ZS1SZWRpcmVjdCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSB7IGRpc3BsYXlFcnJvcjogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVTdG9yZS5wdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZXNwb25zZTplcnJvcicsIGJhY2tlbmRSZXNwb25zZSwgY29udHJvbHMpO1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9scy5kaXNwbGF5RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJFcnJvcihodG1sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVyZW5kZXIoaHRtbCwgYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXNQcm9taXNlUmVzb2x2ZShiYWNrZW5kUmVzcG9uc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXF1ZXN0UGVuZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucGVyZm9ybVJlcXVlc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgY29udHJvbHMgPSB7IHNob3VsZFJlbmRlcjogdHJ1ZSB9O1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZW5kZXI6c3RhcnRlZCcsIGh0bWwsIGJhY2tlbmRSZXNwb25zZSwgY29udHJvbHMpO1xuICAgICAgICBpZiAoIWNvbnRyb2xzLnNob3VsZFJlbmRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVHVyYm9FbmFibGVkKCkpIHtcbiAgICAgICAgICAgICAgICBUdXJiby52aXNpdChiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJykgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbG9hZGluZy5zdGF0ZTpmaW5pc2hlZCcsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IG1vZGlmaWVkTW9kZWxWYWx1ZXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy52YWx1ZVN0b3JlLmdldERpcnR5UHJvcHMoKSkuZm9yRWFjaCgobW9kZWxOYW1lKSA9PiB7XG4gICAgICAgICAgICBtb2RpZmllZE1vZGVsVmFsdWVzW21vZGVsTmFtZV0gPSB0aGlzLnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbmV3RWxlbWVudDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBodG1sVG9FbGVtZW50KGh0bWwpO1xuICAgICAgICAgICAgaWYgKCFuZXdFbGVtZW50Lm1hdGNoZXMoJ1tkYXRhLWNvbnRyb2xsZXJ+PWxpdmVdJykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgbGl2ZSBjb21wb25lbnQgdGVtcGxhdGUgbXVzdCBjb250YWluIGEgc2luZ2xlIHJvb3QgY29udHJvbGxlciBlbGVtZW50LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSBjb21wb25lbnQgSFRNTCByZXR1cm5lZDonKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdGhpcy5lbGVtZW50RHJpdmVyLmdldENvbXBvbmVudFByb3BzKG5ld0VsZW1lbnQpO1xuICAgICAgICB0aGlzLnZhbHVlU3RvcmUucmVpbml0aWFsaXplQWxsUHJvcHMobmV3UHJvcHMpO1xuICAgICAgICBjb25zdCBldmVudHNUb0VtaXQgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0RXZlbnRzVG9FbWl0KG5ld0VsZW1lbnQpO1xuICAgICAgICBjb25zdCBicm93c2VyRXZlbnRzVG9EaXNwYXRjaCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaChuZXdFbGVtZW50KTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5oYW5kbGVQZW5kaW5nQ2hhbmdlcygpO1xuICAgICAgICB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcbiAgICAgICAgZXhlY3V0ZU1vcnBoZG9tKHRoaXMuZWxlbWVudCwgbmV3RWxlbWVudCwgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuZ2V0VW5zeW5jZWRJbnB1dHMoKSwgKGVsZW1lbnQpID0+IGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgdGhpcy52YWx1ZVN0b3JlKSwgQXJyYXkuZnJvbSh0aGlzLmdldENoaWxkcmVuKCkudmFsdWVzKCkpLCB0aGlzLmVsZW1lbnREcml2ZXIuZmluZENoaWxkQ29tcG9uZW50RWxlbWVudCwgdGhpcy5lbGVtZW50RHJpdmVyLmdldEtleUZyb21FbGVtZW50LCB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdGFydCgpO1xuICAgICAgICBPYmplY3Qua2V5cyhtb2RpZmllZE1vZGVsVmFsdWVzKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCBtb2RpZmllZE1vZGVsVmFsdWVzW21vZGVsTmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnRzVG9FbWl0LmZvckVhY2goKHsgZXZlbnQsIGRhdGEsIHRhcmdldCwgY29tcG9uZW50TmFtZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSAndXAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0VXAoZXZlbnQsIGRhdGEsIGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09ICdzZWxmJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFNlbGYoZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdChldmVudCwgZGF0YSwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBicm93c2VyRXZlbnRzVG9EaXNwYXRjaC5mb3JFYWNoKCh7IGV2ZW50LCBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudCwge1xuICAgICAgICAgICAgICAgIGRldGFpbDogcGF5bG9hZCxcbiAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVuZGVyOmZpbmlzaGVkJywgdGhpcyk7XG4gICAgfVxuICAgIGNhbGN1bGF0ZURlYm91bmNlKGRlYm91bmNlKSB7XG4gICAgICAgIGlmIChkZWJvdW5jZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdERlYm91bmNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWJvdW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWJvdW5jZTtcbiAgICB9XG4gICAgY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCkge1xuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCk7XG4gICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIHRoaXMuY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpKTtcbiAgICB9XG4gICAgcmVuZGVyRXJyb3IoaHRtbCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl2ZS1jb21wb25lbnQtZXJyb3InKTtcbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtb2RhbC5pZCA9ICdsaXZlLWNvbXBvbmVudC1lcnJvcic7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5wYWRkaW5nID0gJzUwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwgMCwgMCwgLjUpJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnpJbmRleCA9ICcxMDAwMDAnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5ib3R0b20gPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnJpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBpZnJhbWUuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzVweCc7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5mbGV4R3JvdyA9ICcxJztcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKG1vZGFsKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICBpZiAoaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50Lm9wZW4oKTtcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LndyaXRlKGh0bWwpO1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gKG1vZGFsKSA9PiB7XG4gICAgICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5vdXRlckhUTUwgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgICAgIH07XG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VNb2RhbChtb2RhbCkpO1xuICAgICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbW9kYWwuZm9jdXMoKTtcbiAgICB9XG4gICAgZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKSB7XG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50cyA9IHt9O1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkQ29tcG9uZW50LmNvbXBvbmVudDtcbiAgICAgICAgICAgIGlmICghY2hpbGQuaWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmdlcnByaW50c1tjaGlsZC5pZF0gPSB7XG4gICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGNoaWxkLmZpbmdlcnByaW50LFxuICAgICAgICAgICAgICAgIHRhZzogY2hpbGQuZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbmdlcnByaW50cztcbiAgICB9XG4gICAgcmVzZXRQcm9taXNlKCkge1xuICAgICAgICB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBwcm94aWZ5Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiBuZXcgUHJveHkoY29tcG9uZW50LCB7XG4gICAgICAgIGdldChjb21wb25lbnQsIHByb3ApIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNvbXBvbmVudCB8fCB0eXBlb2YgcHJvcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IGNvbXBvbmVudFtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGFibGUuYXBwbHkoY29tcG9uZW50LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGNvbXBvbmVudCwgcHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5nZXREYXRhKHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBbcHJvcCwgYXJnc10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0LnNldChwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmNsYXNzIEJhY2tlbmRSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9taXNlLCBhY3Rpb25zLCB1cGRhdGVNb2RlbHMpIHtcbiAgICAgICAgdGhpcy5pc1Jlc29sdmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHRoaXMucHJvbWlzZS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgIHRoaXMudXBkYXRlZE1vZGVscyA9IHVwZGF0ZU1vZGVscztcbiAgICB9XG4gICAgY29udGFpbnNPbmVPZkFjdGlvbnModGFyZ2V0ZWRBY3Rpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnMuZmlsdGVyKChhY3Rpb24pID0+IHRhcmdldGVkQWN0aW9ucy5pbmNsdWRlcyhhY3Rpb24pKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBhcmVBbnlNb2RlbHNVcGRhdGVkKHRhcmdldGVkTW9kZWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZWRNb2RlbHMuZmlsdGVyKChtb2RlbCkgPT4gdGFyZ2V0ZWRNb2RlbHMuaW5jbHVkZXMobW9kZWwpKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cblxuY2xhc3MgUmVxdWVzdEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgY3NyZlRva2VuID0gbnVsbCkge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5jc3JmVG9rZW4gPSBjc3JmVG9rZW47XG4gICAgfVxuICAgIGJ1aWxkUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHNwbGl0VXJsID0gdGhpcy51cmwuc3BsaXQoJz8nKTtcbiAgICAgICAgbGV0IFt1cmxdID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IFssIHF1ZXJ5U3RyaW5nXSA9IHNwbGl0VXJsO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nIHx8ICcnKTtcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRpb25zID0ge307XG4gICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmxpdmUtY29tcG9uZW50K2h0bWwnLFxuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0b3RhbEZpbGVzID0gT2JqZWN0LmVudHJpZXMoZmlsZXMpLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsICsgY3VycmVudC5sZW5ndGgsIDApO1xuICAgICAgICBjb25zdCBoYXNGaW5nZXJwcmludHMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbikubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICB0b3RhbEZpbGVzID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLndpbGxEYXRhRml0SW5VcmwoSlNPTi5zdHJpbmdpZnkocHJvcHMpLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkKSwgcGFyYW1zLCBKU09OLnN0cmluZ2lmeShjaGlsZHJlbiksIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpKSkge1xuICAgICAgICAgICAgcGFyYW1zLnNldCgncHJvcHMnLCBKU09OLnN0cmluZ2lmeShwcm9wcykpO1xuICAgICAgICAgICAgcGFyYW1zLnNldCgndXBkYXRlZCcsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWQpKTtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLnNldCgncHJvcHNGcm9tUGFyZW50JywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFByb3BzRnJvbVBhcmVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc0ZpbmdlcnByaW50cykge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5zZXQoJ2NoaWxkcmVuJywgSlNPTi5zdHJpbmdpZnkoY2hpbGRyZW4pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5tZXRob2QgPSAnR0VUJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHsgcHJvcHMsIHVwZGF0ZWQgfTtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdERhdGEucHJvcHNGcm9tUGFyZW50ID0gdXBkYXRlZFByb3BzRnJvbVBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYXNGaW5nZXJwcmludHMpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY3NyZlRva2VuICYmXG4gICAgICAgICAgICAgICAgKGFjdGlvbnMubGVuZ3RoIHx8IHRvdGFsRmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmhlYWRlcnNbJ1gtQ1NSRi1UT0tFTiddID0gdGhpcy5jc3JmVG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmFyZ3MgPSBhY3Rpb25zWzBdLmFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBgLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGFjdGlvbnNbMF0ubmFtZSl9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnL19iYXRjaCc7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0RGF0YSkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5ib2R5ID0gZm9ybURhdGE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zU3RyaW5nID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cmw6IGAke3VybH0ke3BhcmFtc1N0cmluZy5sZW5ndGggPiAwID8gYD8ke3BhcmFtc1N0cmluZ31gIDogJyd9YCxcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgd2lsbERhdGFGaXRJblVybChwcm9wc0pzb24sIHVwZGF0ZWRKc29uLCBwYXJhbXMsIGNoaWxkcmVuSnNvbiwgcHJvcHNGcm9tUGFyZW50SnNvbikge1xuICAgICAgICBjb25zdCB1cmxFbmNvZGVkSnNvbkRhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHByb3BzSnNvbiArIHVwZGF0ZWRKc29uICsgY2hpbGRyZW5Kc29uICsgcHJvcHNGcm9tUGFyZW50SnNvbikudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuICh1cmxFbmNvZGVkSnNvbkRhdGEgKyBwYXJhbXMudG9TdHJpbmcoKSkubGVuZ3RoIDwgMTUwMDtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tlbmQge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgY3NyZlRva2VuID0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlcXVlc3RCdWlsZGVyID0gbmV3IFJlcXVlc3RCdWlsZGVyKHVybCwgY3NyZlRva2VuKTtcbiAgICB9XG4gICAgbWFrZVJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcykge1xuICAgICAgICBjb25zdCB7IHVybCwgZmV0Y2hPcHRpb25zIH0gPSB0aGlzLnJlcXVlc3RCdWlsZGVyLmJ1aWxkUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBCYWNrZW5kUmVxdWVzdChmZXRjaCh1cmwsIGZldGNoT3B0aW9ucyksIGFjdGlvbnMubWFwKChiYWNrZW5kQWN0aW9uKSA9PiBiYWNrZW5kQWN0aW9uLm5hbWUpLCBPYmplY3Qua2V5cyh1cGRhdGVkKSk7XG4gICAgfVxufVxuXG5jbGFzcyBTdGFuZGFyZEVsZW1lbnREcml2ZXIge1xuICAgIGdldE1vZGVsTmFtZShlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIGlmICghbW9kZWxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RlbERpcmVjdGl2ZS5hY3Rpb247XG4gICAgfVxuICAgIGdldENvbXBvbmVudFByb3BzKHJvb3RFbGVtZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgcHJvcHNKc29uID0gKF9hID0gcm9vdEVsZW1lbnQuZGF0YXNldC5saXZlUHJvcHNWYWx1ZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ3t9JztcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocHJvcHNKc29uKTtcbiAgICB9XG4gICAgZmluZENoaWxkQ29tcG9uZW50RWxlbWVudChpZCwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1saXZlLWlkPSR7aWR9XWApO1xuICAgIH1cbiAgICBnZXRLZXlGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQubGl2ZUlkIHx8IG51bGw7XG4gICAgfVxuICAgIGdldEV2ZW50c1RvRW1pdChlbGVtZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgZXZlbnRzSnNvbiA9IChfYSA9IGVsZW1lbnQuZGF0YXNldC5saXZlRW1pdCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ1tdJztcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZXZlbnRzSnNvbik7XG4gICAgfVxuICAgIGdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBldmVudHNKc29uID0gKF9hID0gZWxlbWVudC5kYXRhc2V0LmxpdmVCcm93c2VyRGlzcGF0Y2gpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdbXSc7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGV2ZW50c0pzb24pO1xuICAgIH1cbn1cblxuY2xhc3MgTG9hZGluZ1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbignbG9hZGluZy5zdGF0ZTpzdGFydGVkJywgKGVsZW1lbnQsIHJlcXVlc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2FkaW5nKGVsZW1lbnQsIHJlcXVlc3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdsb2FkaW5nLnN0YXRlOmZpbmlzaGVkJywgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTG9hZGluZyhlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmluaXNoTG9hZGluZyhjb21wb25lbnQuZWxlbWVudCk7XG4gICAgfVxuICAgIHN0YXJ0TG9hZGluZyh0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUodHJ1ZSwgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpO1xuICAgIH1cbiAgICBmaW5pc2hMb2FkaW5nKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVMb2FkaW5nVG9nZ2xlKGZhbHNlLCB0YXJnZXRFbGVtZW50LCBudWxsKTtcbiAgICB9XG4gICAgaGFuZGxlTG9hZGluZ1RvZ2dsZShpc0xvYWRpbmcsIHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbJ2J1c3knXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgWydidXN5J10pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0TG9hZGluZ0RpcmVjdGl2ZXModGFyZ2V0RWxlbWVudCkuZm9yRWFjaCgoeyBlbGVtZW50LCBkaXJlY3RpdmVzIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgWydkYXRhLWxpdmUtaXMtbG9hZGluZyddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBbJ2RhdGEtbGl2ZS1pcy1sb2FkaW5nJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdEaXJlY3RpdmUoZWxlbWVudCwgaXNMb2FkaW5nLCBkaXJlY3RpdmUsIGJhY2tlbmRSZXF1ZXN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZShlbGVtZW50LCBpc0xvYWRpbmcsIGRpcmVjdGl2ZSwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgZmluYWxBY3Rpb24gPSBwYXJzZUxvYWRpbmdBY3Rpb24oZGlyZWN0aXZlLmFjdGlvbiwgaXNMb2FkaW5nKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRBY3Rpb25zID0gW107XG4gICAgICAgIGNvbnN0IHRhcmdldGVkTW9kZWxzID0gW107XG4gICAgICAgIGxldCBkZWxheSA9IDA7XG4gICAgICAgIGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2RlbGF5JywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGF5ID0gbW9kaWZpZXIudmFsdWUgPyBwYXJzZUludChtb2RpZmllci52YWx1ZSkgOiAyMDA7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2FjdGlvbicsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiYWN0aW9uXCIgaW4gZGF0YS1sb2FkaW5nIG11c3QgaGF2ZSBhbiBhY3Rpb24gbmFtZSAtIGUuZy4gYWN0aW9uKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ZWRBY3Rpb25zLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdtb2RlbCcsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwibW9kZWxcIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBtb2RlbChmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldGVkTW9kZWxzLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gKF9hID0gdmFsaWRNb2RpZmllcnMuZ2V0KG1vZGlmaWVyLm5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICBjYWxsYWJsZShtb2RpZmllcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIHVzZWQgaW4gZGF0YS1sb2FkaW5nPVwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuIEF2YWlsYWJsZSBtb2RpZmllcnMgYXJlOiAke0FycmF5LmZyb20odmFsaWRNb2RpZmllcnMua2V5cygpKS5qb2luKCcsICcpfS5gKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc0xvYWRpbmcgJiYgdGFyZ2V0ZWRBY3Rpb25zLmxlbmd0aCA+IDAgJiYgYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmNvbnRhaW5zT25lT2ZBY3Rpb25zKHRhcmdldGVkQWN0aW9ucykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNMb2FkaW5nICYmIHRhcmdldGVkTW9kZWxzLmxlbmd0aCA+IDAgJiYgYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxvYWRpbmdEaXJlY3RpdmU7XG4gICAgICAgIHN3aXRjaCAoZmluYWxBY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmhpZGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWRkQ2xhc3MnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmFkZENsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZUNsYXNzJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5yZW1vdmVDbGFzcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZGRBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlQXR0cmlidXRlJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2ZpbmFsQWN0aW9ufVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJhY2tlbmRSZXF1ZXN0ICYmICFiYWNrZW5kUmVxdWVzdC5pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSgpO1xuICAgIH1cbiAgICBnZXRMb2FkaW5nRGlyZWN0aXZlcyhlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdEaXJlY3RpdmVzID0gW107XG4gICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbG9hZGluZ10nKS5mb3JFYWNoKChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgJiYgIShlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgRWxlbWVudCBUeXBlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGVsZW1lbnQuZGF0YXNldC5sb2FkaW5nIHx8ICdzaG93Jyk7XG4gICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gbG9hZGluZ0RpcmVjdGl2ZXM7XG4gICAgfVxuICAgIHNob3dFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ3JldmVydCc7XG4gICAgfVxuICAgIGhpZGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc2VzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jb21iaW5lU3BhY2VkQXJyYXkoY2xhc3NlcykpO1xuICAgIH1cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc2VzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jb21iaW5lU3BhY2VkQXJyYXkoY2xhc3NlcykpO1xuICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgWydjbGFzcyddKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgJycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5jb25zdCBwYXJzZUxvYWRpbmdBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uLCBpc0xvYWRpbmcpIHtcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnc2hvdycgOiAnaGlkZSc7XG4gICAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdoaWRlJyA6ICdzaG93JztcbiAgICAgICAgY2FzZSAnYWRkQ2xhc3MnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnO1xuICAgICAgICBjYXNlICdyZW1vdmVDbGFzcyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ3JlbW92ZUNsYXNzJyA6ICdhZGRDbGFzcyc7XG4gICAgICAgIGNhc2UgJ2FkZEF0dHJpYnV0ZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2FkZEF0dHJpYnV0ZScgOiAncmVtb3ZlQXR0cmlidXRlJztcbiAgICAgICAgY2FzZSAncmVtb3ZlQXR0cmlidXRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAncmVtb3ZlQXR0cmlidXRlJyA6ICdhZGRBdHRyaWJ1dGUnO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YS1sb2FkaW5nIGFjdGlvbiBcIiR7YWN0aW9ufVwiYCk7XG59O1xuXG5jbGFzcyBWYWxpZGF0ZWRGaWVsZHNQbHVnaW4ge1xuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ21vZGVsOnNldCcsIChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTW9kZWxTZXQobW9kZWxOYW1lLCBjb21wb25lbnQudmFsdWVTdG9yZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIHZhbHVlU3RvcmUpIHtcbiAgICAgICAgaWYgKHZhbHVlU3RvcmUuaGFzKCd2YWxpZGF0ZWRGaWVsZHMnKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gWy4uLnZhbHVlU3RvcmUuZ2V0KCd2YWxpZGF0ZWRGaWVsZHMnKV07XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGVkRmllbGRzLnB1c2gobW9kZWxOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlU3RvcmUuc2V0KCd2YWxpZGF0ZWRGaWVsZHMnLCB2YWxpZGF0ZWRGaWVsZHMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBQYWdlVW5sb2FkaW5nUGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZW5kZXI6c3RhcnRlZCcsIChodG1sLCByZXNwb25zZSwgY29udHJvbHMpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgUG9sbGluZ0RpcmVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfVxuICAgIGFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5wb2xscy5wdXNoKHsgYWN0aW9uTmFtZSwgZHVyYXRpb24gfSk7XG4gICAgICAgIGlmICh0aGlzLmlzUG9sbGluZ0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0QWxsUG9sbGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNQb2xsaW5nQWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBvbGxzLmZvckVhY2goKHsgYWN0aW9uTmFtZSwgZHVyYXRpb24gfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RvcEFsbFBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFscy5mb3JFYWNoKChpbnRlcnZhbCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbGVhclBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuc3RvcEFsbFBvbGxpbmcoKTtcbiAgICAgICAgdGhpcy5wb2xscyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXJ0QWxsUG9sbGluZygpO1xuICAgIH1cbiAgICBpbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgbGV0IGNhbGxiYWNrO1xuICAgICAgICBpZiAoYWN0aW9uTmFtZSA9PT0gJyRyZW5kZXInKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hY3Rpb24oYWN0aW9uTmFtZSwge30sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzLnB1c2godGltZXIpO1xuICAgIH1cbn1cblxuY2xhc3MgUG9sbGluZ1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGNvbXBvbmVudC5lbGVtZW50O1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3RvciA9IG5ldyBQb2xsaW5nRGlyZWN0b3IoY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5zdGFydEFsbFBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0b3BBbGxQb2xsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3IuYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgfVxuICAgIGNsZWFyUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3IuY2xlYXJQb2xsaW5nKCk7XG4gICAgfVxuICAgIGluaXRpYWxpemVQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLmNsZWFyUG9sbGluZygpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3UG9sbENvbmZpZyA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LnBvbGw7XG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMocmF3UG9sbENvbmZpZyB8fCAnJHJlbmRlcicpO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gMjAwMDtcbiAgICAgICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVsYXknOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBwYXJzZUludChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiBpbiBkYXRhLXBvbGwgXCIke3Jhd1BvbGxDb25maWd9XCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFkZFBvbGwoZGlyZWN0aXZlLmFjdGlvbiwgZHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RlbF0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGVsZW1lbnQgdXNpbmcgZGF0YS1tb2RlbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuZ2V0VW5zeW5jZWRNb2RlbHMoKS5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiAhZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRNb2RlbEJpbmRpbmcgKG1vZGVsRGlyZWN0aXZlKSB7XG4gICAgbGV0IHNob3VsZFJlbmRlciA9IHRydWU7XG4gICAgbGV0IHRhcmdldEV2ZW50TmFtZSA9IG51bGw7XG4gICAgbGV0IGRlYm91bmNlID0gZmFsc2U7XG4gICAgbW9kZWxEaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnb24nOlxuICAgICAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IHJlcXVpcmVzIGEgdmFsdWUgLSBlLmcuIG9uKGNoYW5nZSkuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghWydpbnB1dCcsICdjaGFuZ2UnXS5pbmNsdWRlcyhtb2RpZmllci52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IG9ubHkgYWNjZXB0cyB0aGUgYXJndW1lbnRzIFwiaW5wdXRcIiBvciBcImNoYW5nZVwiLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRFdmVudE5hbWUgPSBtb2RpZmllci52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ25vcmVuZGVyJzpcbiAgICAgICAgICAgICAgICBzaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlYm91bmNlJzpcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gcGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIGluIGRhdGEtbW9kZWw9XCIke21vZGVsRGlyZWN0aXZlLmdldFN0cmluZygpfVwiLmApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgW21vZGVsTmFtZSwgaW5uZXJNb2RlbE5hbWVdID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uLnNwbGl0KCc6Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbW9kZWxOYW1lLFxuICAgICAgICBpbm5lck1vZGVsTmFtZTogaW5uZXJNb2RlbE5hbWUgfHwgbnVsbCxcbiAgICAgICAgc2hvdWxkUmVuZGVyLFxuICAgICAgICBkZWJvdW5jZSxcbiAgICAgICAgdGFyZ2V0RXZlbnROYW1lXG4gICAgfTtcbn1cblxuY2xhc3MgQ29tcG9uZW50UmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudE1hcEJ5RWxlbWVudCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50TWFwQnlDb21wb25lbnQgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudE1hcEJ5RWxlbWVudC5zZXQoZWxlbWVudCwgY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRNYXBCeUNvbXBvbmVudC5zZXQoY29tcG9uZW50LCBjb21wb25lbnQubmFtZSk7XG4gICAgfVxuICAgIHVucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50TWFwQnlFbGVtZW50LmRlbGV0ZShjb21wb25lbnQuZWxlbWVudCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50TWFwQnlDb21wb25lbnQuZGVsZXRlKGNvbXBvbmVudCk7XG4gICAgfVxuICAgIGdldENvbXBvbmVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc3QgbWF4Q291bnQgPSAxMDtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50TWFwQnlFbGVtZW50LmdldChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID4gbWF4Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYENvbXBvbmVudCBub3QgZm91bmQgZm9yIGVsZW1lbnQgJHtnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpfWApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA1KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbmRDb21wb25lbnRzKGN1cnJlbnRDb21wb25lbnQsIG9ubHlQYXJlbnRzLCBvbmx5TWF0Y2hOYW1lKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChvbmx5UGFyZW50cyAmJlxuICAgICAgICAgICAgICAgIChjdXJyZW50Q29tcG9uZW50ID09PSBjb21wb25lbnQgfHwgIWNvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGN1cnJlbnRDb21wb25lbnQuZWxlbWVudCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9ubHlNYXRjaE5hbWUgJiYgY29tcG9uZW50TmFtZSAhPT0gb25seU1hdGNoTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxufVxuXG5jb25zdCBnZXRDb21wb25lbnQgPSAoZWxlbWVudCkgPT4gTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmNvbXBvbmVudFJlZ2lzdHJ5LmdldENvbXBvbmVudChlbGVtZW50KTtcbmNsYXNzIExpdmVDb250cm9sbGVyRGVmYXVsdCBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgICB7IGV2ZW50OiAnaW5wdXQnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIH0sXG4gICAgICAgICAgICB7IGV2ZW50OiAnY2hhbmdlJywgY2FsbGJhY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VFdmVudChldmVudCkgfSxcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdsaXZlOmNvbm5lY3QnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNvbm5lY3RlZENvbnRyb2xsZXJFdmVudChldmVudCkgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5wZW5kaW5nRmlsZXMgPSB7fTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudCA9IHRoaXMuaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQuYmluZCh0aGlzKTtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmVsZW1lbnQuZGF0YXNldC5saXZlSWQgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KHRoaXMuZWxlbWVudCwgdGhpcy5uYW1lVmFsdWUsIHRoaXMucHJvcHNWYWx1ZSwgdGhpcy5saXN0ZW5lcnNWYWx1ZSwgKGN1cnJlbnRDb21wb25lbnQsIG9ubHlQYXJlbnRzLCBvbmx5TWF0Y2hOYW1lKSA9PiBMaXZlQ29udHJvbGxlckRlZmF1bHQuY29tcG9uZW50UmVnaXN0cnkuZmluZENvbXBvbmVudHMoY3VycmVudENvbXBvbmVudCwgb25seVBhcmVudHMsIG9ubHlNYXRjaE5hbWUpLCB0aGlzLmZpbmdlcnByaW50VmFsdWUsIGlkLCBuZXcgQmFja2VuZCh0aGlzLnVybFZhbHVlLCB0aGlzLmNzcmZWYWx1ZSksIG5ldyBTdGFuZGFyZEVsZW1lbnREcml2ZXIoKSk7XG4gICAgICAgIHRoaXMucHJveGllZENvbXBvbmVudCA9IHByb3hpZnlDb21wb25lbnQodGhpcy5jb21wb25lbnQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuX19jb21wb25lbnQgPSB0aGlzLnByb3hpZWRDb21wb25lbnQ7XG4gICAgICAgIGlmICh0aGlzLmhhc0RlYm91bmNlVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmRlZmF1bHREZWJvdW5jZSA9IHRoaXMuZGVib3VuY2VWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbHVnaW5zID0gW1xuICAgICAgICAgICAgbmV3IExvYWRpbmdQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBWYWxpZGF0ZWRGaWVsZHNQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBQYWdlVW5sb2FkaW5nUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUG9sbGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luKCksXG4gICAgICAgIF07XG4gICAgICAgIHBsdWdpbnMuZm9yRWFjaCgocGx1Z2luKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hZGRQbHVnaW4ocGx1Z2luKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIExpdmVDb250cm9sbGVyRGVmYXVsdC5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckNvbXBvbmVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuY29ubmVjdCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICBMaXZlQ29udHJvbGxlckRlZmF1bHQuY29tcG9uZW50UmVnaXN0cnkudW5yZWdpc3RlckNvbXBvbmVudCh0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICB9XG4gICAgdXBkYXRlKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnaW5wdXQnIHx8IGV2ZW50LnR5cGUgPT09ICdjaGFuZ2UnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNpbmNlIExpdmVDb21wb25lbnRzIDIuMywgeW91IG5vIGxvbmdlciBuZWVkIGRhdGEtYWN0aW9uPVwibGl2ZSN1cGRhdGVcIiBvbiBmb3JtIGVsZW1lbnRzLiBGb3VuZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZXZlbnQuY3VycmVudFRhcmdldCl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQoZXZlbnQuY3VycmVudFRhcmdldCwgbnVsbCk7XG4gICAgfVxuICAgIGFjdGlvbihldmVudCkge1xuICAgICAgICBjb25zdCByYXdBY3Rpb24gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYWN0aW9uTmFtZTtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhyYXdBY3Rpb24pO1xuICAgICAgICBsZXQgZGVib3VuY2UgPSBmYWxzZTtcbiAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBwZW5kaW5nRmlsZXMgPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdwcmV2ZW50JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhbGlkTW9kaWZpZXJzLnNldCgnc3RvcCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdzZWxmJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdkZWJvdW5jZScsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgICAgIGRlYm91bmNlID0gbW9kaWZpZXIudmFsdWUgPyBwYXJzZUludChtb2RpZmllci52YWx1ZSkgOiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2ZpbGVzJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nRmlsZXMgPSB0aGlzLnBlbmRpbmdGaWxlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nRmlsZXNbbW9kaWZpZXIudmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV0gPSB0aGlzLnBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZE1vZGlmaWVycy5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGFibGUgPSAoX2EgPSB2YWxpZE1vZGlmaWVycy5nZXQobW9kaWZpZXIubmFtZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYWJsZShtb2RpZmllcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIG1vZGlmaWVyICR7bW9kaWZpZXIubmFtZX0gaW4gYWN0aW9uIFwiJHtyYXdBY3Rpb259XCIuIEF2YWlsYWJsZSBtb2RpZmllcnMgYXJlOiAke0FycmF5LmZyb20odmFsaWRNb2RpZmllcnMua2V5cygpKS5qb2luKCcsICcpfS5gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCBpbnB1dF0gb2YgT2JqZWN0LmVudHJpZXMocGVuZGluZ0ZpbGVzKSkge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5maWxlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5maWxlcyhrZXksIGlucHV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ0ZpbGVzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hY3Rpb24oZGlyZWN0aXZlLmFjdGlvbiwgZGlyZWN0aXZlLm5hbWVkLCBkZWJvdW5jZSk7XG4gICAgICAgICAgICBpZiAoZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0LCBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgICRyZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICB9XG4gICAgZW1pdChldmVudCkge1xuICAgICAgICB0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEsIG5hbWVNYXRjaCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbWl0KG5hbWUsIGRhdGEsIG5hbWVNYXRjaCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbWl0VXAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5nZXRFbWl0RGlyZWN0aXZlcyhldmVudCkuZm9yRWFjaCgoeyBuYW1lLCBkYXRhLCBuYW1lTWF0Y2ggfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZW1pdFVwKG5hbWUsIGRhdGEsIG5hbWVNYXRjaCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbWl0U2VsZihldmVudCkge1xuICAgICAgICB0aGlzLmdldEVtaXREaXJlY3RpdmVzKGV2ZW50KS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZW1pdFNlbGYobmFtZSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRFbWl0RGlyZWN0aXZlcyhldmVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgaWYgKCFlbGVtZW50LmRhdGFzZXQuZXZlbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gZGF0YS1ldmVudCBhdHRyaWJ1dGUgZm91bmQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV2ZW50SW5mbyA9IGVsZW1lbnQuZGF0YXNldC5ldmVudDtcbiAgICAgICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhldmVudEluZm8pO1xuICAgICAgICBjb25zdCBlbWl0cyA9IFtdO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5hbWVNYXRjaCA9IG51bGw7XG4gICAgICAgICAgICBkaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZU1hdGNoID0gbW9kaWZpZXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciAke21vZGlmaWVyLm5hbWV9IGluIGV2ZW50IFwiJHtldmVudEluZm99XCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbWl0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBkaXJlY3RpdmUuYWN0aW9uLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRpcmVjdGl2ZS5uYW1lZCxcbiAgICAgICAgICAgICAgICBuYW1lTWF0Y2gsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbWl0cztcbiAgICB9XG4gICAgJHVwZGF0ZU1vZGVsKG1vZGVsLCB2YWx1ZSwgc2hvdWxkUmVuZGVyID0gdHJ1ZSwgZGVib3VuY2UgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5zZXQobW9kZWwsIHZhbHVlLCBzaG91bGRSZW5kZXIsIGRlYm91bmNlKTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQodGFyZ2V0LCAnaW5wdXQnKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgJ2NoYW5nZScpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQoZWxlbWVudCwgZXZlbnROYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCB1cGRhdGUgbW9kZWwgZm9yIG5vbiBIVE1MRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbWVudC5uYW1lO1xuICAgICAgICAgICAgaWYgKChfYSA9IGVsZW1lbnQuZmlsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdGaWxlc1trZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGVuZGluZ0ZpbGVzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRmlsZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICBpZiAoIW1vZGVsRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxCaW5kaW5nID0gZ2V0TW9kZWxCaW5kaW5nKG1vZGVsRGlyZWN0aXZlKTtcbiAgICAgICAgaWYgKCFtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lKSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gJ2lucHV0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nQWN0aW9uVHJpZ2dlck1vZGVsRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudE5hbWUgPT09ICdjaGFuZ2UnICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSAnY2hhbmdlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lICYmIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgIT09IGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmYWxzZSA9PT0gbW9kZWxCaW5kaW5nLmRlYm91bmNlKSB7XG4gICAgICAgICAgICBpZiAobW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbmFsVmFsdWUgPSBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5zZXQobW9kZWxCaW5kaW5nLm1vZGVsTmFtZSwgZmluYWxWYWx1ZSwgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciwgbW9kZWxCaW5kaW5nLmRlYm91bmNlKTtcbiAgICB9XG4gICAgaGFuZGxlQ29ubmVjdGVkQ29udHJvbGxlckV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkQ29udHJvbGxlciA9IGV2ZW50LmRldGFpbC5jb250cm9sbGVyO1xuICAgICAgICBpZiAoY2hpbGRDb250cm9sbGVyLmNvbXBvbmVudC5nZXRQYXJlbnQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlcyA9IGdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzKGNoaWxkQ29udHJvbGxlci5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgbW9kZWxCaW5kaW5ncyA9IG1vZGVsRGlyZWN0aXZlcy5tYXAoZ2V0TW9kZWxCaW5kaW5nKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuYWRkQ2hpbGQoY2hpbGRDb250cm9sbGVyLmNvbXBvbmVudCwgbW9kZWxCaW5kaW5ncyk7XG4gICAgICAgIGNoaWxkQ29udHJvbGxlci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xpdmU6ZGlzY29ubmVjdCcsIHRoaXMuaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQpO1xuICAgIH1cbiAgICBoYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCBjaGlsZENvbnRyb2xsZXIgPSBldmVudC5kZXRhaWwuY29udHJvbGxlcjtcbiAgICAgICAgY2hpbGRDb250cm9sbGVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbGl2ZTpkaXNjb25uZWN0JywgdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudCk7XG4gICAgICAgIGlmIChjaGlsZENvbnRyb2xsZXIuY29tcG9uZW50LmdldFBhcmVudCgpICE9PSB0aGlzLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnJlbW92ZUNoaWxkKGNoaWxkQ29udHJvbGxlci5jb21wb25lbnQpO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIGRldGFpbCA9IHt9LCBjYW5CdWJibGUgPSB0cnVlLCBjYW5jZWxhYmxlID0gZmFsc2UpIHtcbiAgICAgICAgZGV0YWlsLmNvbnRyb2xsZXIgPSB0aGlzO1xuICAgICAgICBkZXRhaWwuY29tcG9uZW50ID0gdGhpcy5wcm94aWVkQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsLCBwcmVmaXg6ICdsaXZlJywgY2FuY2VsYWJsZSwgYnViYmxlczogY2FuQnViYmxlIH0pO1xuICAgIH1cbn1cbkxpdmVDb250cm9sbGVyRGVmYXVsdC52YWx1ZXMgPSB7XG4gICAgbmFtZTogU3RyaW5nLFxuICAgIHVybDogU3RyaW5nLFxuICAgIHByb3BzOiBPYmplY3QsXG4gICAgY3NyZjogU3RyaW5nLFxuICAgIGxpc3RlbmVyczogeyB0eXBlOiBBcnJheSwgZGVmYXVsdDogW10gfSxcbiAgICBkZWJvdW5jZTogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDE1MCB9LFxuICAgIGlkOiBTdHJpbmcsXG4gICAgZmluZ2VycHJpbnQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnJyB9LFxufTtcbkxpdmVDb250cm9sbGVyRGVmYXVsdC5jb21wb25lbnRSZWdpc3RyeSA9IG5ldyBDb21wb25lbnRSZWdpc3RyeSgpO1xuXG5leHBvcnQgeyBDb21wb25lbnQsIExpdmVDb250cm9sbGVyRGVmYXVsdCBhcyBkZWZhdWx0LCBnZXRDb21wb25lbnQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMucHJvcHMgPSAoX2EgPSB0aGlzLnByb3BzVmFsdWUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pbnRybyA9IChfYiA9IHRoaXMuaW50cm9WYWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnKTtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gd2luZG93LnJlc29sdmVTdmVsdGVDb21wb25lbnQodGhpcy5jb21wb25lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lJZkV4aXN0cygpO1xuICAgICAgICB0aGlzLmFwcCA9IG5ldyBDb21wb25lbnQoe1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGludHJvOiB0aGlzLmludHJvLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QgPSB0aGlzLmFwcDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogQ29tcG9uZW50LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveUlmRXhpc3RzKCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndW5tb3VudCcpO1xuICAgIH1cbiAgICBfZGVzdHJveUlmRXhpc3RzKCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LnJvb3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QuJGRlc3Ryb3koKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnQucm9vdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQgPSB7fSkge1xuICAgICAgICBjb25zdCBkZXRhaWwgPSBPYmplY3QuYXNzaWduKHsgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSwgcHJvcHM6IHRoaXMucHJvcHMsIGludHJvOiB0aGlzLmludHJvIH0sIHBheWxvYWQpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsLCBwcmVmaXg6ICdzdmVsdGUnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgY29tcG9uZW50OiBTdHJpbmcsXG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBpbnRybzogQm9vbGVhbixcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCBTd3VwIGZyb20gJ3N3dXAnO1xuaW1wb3J0IFN3dXBEZWJ1Z1BsdWdpbiBmcm9tICdAc3d1cC9kZWJ1Zy1wbHVnaW4nO1xuaW1wb3J0IFN3dXBGb3Jtc1BsdWdpbiBmcm9tICdAc3d1cC9mb3Jtcy1wbHVnaW4nO1xuaW1wb3J0IFN3dXBGYWRlVGhlbWUgZnJvbSAnQHN3dXAvZmFkZS10aGVtZSc7XG5pbXBvcnQgU3d1cFNsaWRlVGhlbWUgZnJvbSAnQHN3dXAvc2xpZGUtdGhlbWUnO1xuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBkYXRhQ29udGFpbmVycyA9IHRoaXMuY29udGFpbmVyc1ZhbHVlO1xuICAgICAgICBjb25zdCBtYWluRWxlbWVudCA9IHRoaXMubWFpbkVsZW1lbnRWYWx1ZSB8fCBkYXRhQ29udGFpbmVyc1swXSB8fCAnI3N3dXAnO1xuICAgICAgICBjb25zdCBhbGxFbGVtZW50cyA9IFttYWluRWxlbWVudF0uY29uY2F0KGRhdGFDb250YWluZXJzKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyc0xpc3QgPSBhbGxFbGVtZW50cy5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYWxsRWxlbWVudHMuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXg7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGFpbmVyczogY29udGFpbmVyc0xpc3QsXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgJ3NsaWRlJyA9PT0gdGhpcy50aGVtZVZhbHVlXG4gICAgICAgICAgICAgICAgICAgID8gbmV3IFN3dXBTbGlkZVRoZW1lKHsgbWFpbkVsZW1lbnQ6IG1haW5FbGVtZW50IH0pXG4gICAgICAgICAgICAgICAgICAgIDogbmV3IFN3dXBGYWRlVGhlbWUoeyBtYWluRWxlbWVudDogbWFpbkVsZW1lbnQgfSksXG4gICAgICAgICAgICAgICAgbmV3IFN3dXBGb3Jtc1BsdWdpbigpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuaGFzTWFpbkVsZW1lbnRWYWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5tYWluRWxlbWVudCA9IHRoaXMubWFpbkVsZW1lbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNBbmltYXRlSGlzdG9yeUJyb3dzaW5nVmFsdWUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYW5pbWF0ZUhpc3RvcnlCcm93c2luZyA9IHRoaXMuYW5pbWF0ZUhpc3RvcnlCcm93c2luZ1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc0FuaW1hdGlvblNlbGVjdG9yVmFsdWUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYW5pbWF0aW9uU2VsZWN0b3IgPSB0aGlzLmFuaW1hdGlvblNlbGVjdG9yVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzQ2FjaGVWYWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5jYWNoZSA9IHRoaXMuY2FjaGVWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNMaW5rU2VsZWN0b3JWYWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5saW5rU2VsZWN0b3IgPSB0aGlzLmxpbmtTZWxlY3RvclZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRlYnVnVmFsdWUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucGx1Z2lucy5wdXNoKG5ldyBTd3VwRGVidWdQbHVnaW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdwcmUtY29ubmVjdCcsIHsgb3B0aW9ucyB9KTtcbiAgICAgICAgY29uc3Qgc3d1cCA9IG5ldyBTd3VwKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IHN3dXAsIG9wdGlvbnMgfSk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICdzd3VwJyB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIGFuaW1hdGVIaXN0b3J5QnJvd3Npbmc6IEJvb2xlYW4sXG4gICAgYW5pbWF0aW9uU2VsZWN0b3I6IFN0cmluZyxcbiAgICBjYWNoZTogQm9vbGVhbixcbiAgICBjb250YWluZXJzOiBBcnJheSxcbiAgICBsaW5rU2VsZWN0b3I6IFN0cmluZyxcbiAgICB0aGVtZTogU3RyaW5nLFxuICAgIGRlYnVnOiBCb29sZWFuLFxuICAgIG1haW5FbGVtZW50OiBTdHJpbmcsXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmlzRGlzcGxheWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmlzaWJsZUljb24gPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJ0b2dnbGUtcGFzc3dvcmQtaWNvblwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG48cGF0aCBkPVwiTTEwIDEyYTIgMiAwIDEwMC00IDIgMiAwIDAwMCA0elwiIC8+XG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0uNDU4IDEwQzEuNzMyIDUuOTQzIDUuNTIyIDMgMTAgM3M4LjI2OCAyLjk0MyA5LjU0MiA3Yy0xLjI3NCA0LjA1Ny01LjA2NCA3LTkuNTQyIDdTMS43MzIgMTQuMDU3LjQ1OCAxMHpNMTQgMTBhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiAvPlxuPC9zdmc+YDtcbiAgICAgICAgdGhpcy5oaWRkZW5JY29uID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwidG9nZ2xlLXBhc3N3b3JkLWljb25cIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMy43MDcgMi4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsMTQgMTRhMSAxIDAgMDAxLjQxNC0xLjQxNGwtMS40NzMtMS40NzNBMTAuMDE0IDEwLjAxNCAwIDAwMTkuNTQyIDEwQzE4LjI2OCA1Ljk0MyAxNC40NzggMyAxMCAzYTkuOTU4IDkuOTU4IDAgMDAtNC41MTIgMS4wNzRsLTEuNzgtMS43ODF6bTQuMjYxIDQuMjZsMS41MTQgMS41MTVhMi4wMDMgMi4wMDMgMCAwMTIuNDUgMi40NWwxLjUxNCAxLjUxNGE0IDQgMCAwMC01LjQ3OC01LjQ3OHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgLz5cbjxwYXRoIGQ9XCJNMTIuNDU0IDE2LjY5N0w5Ljc1IDEzLjk5MmE0IDQgMCAwMS0zLjc0Mi0zLjc0MUwyLjMzNSA2LjU3OEE5Ljk4IDkuOTggMCAwMC40NTggMTBjMS4yNzQgNC4wNTcgNS4wNjUgNyA5LjU0MiA3IC44NDcgMCAxLjY2OS0uMTA1IDIuNDU0LS4zMDN6XCIgLz5cbjwvc3ZnPmA7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGVJY29uVmFsdWUgIT09ICdEZWZhdWx0Jykge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlSWNvbiA9IHRoaXMudmlzaWJsZUljb25WYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oaWRkZW5JY29uVmFsdWUgIT09ICdEZWZhdWx0Jykge1xuICAgICAgICAgICAgdGhpcy5oaWRkZW5JY29uID0gdGhpcy5oaWRkZW5JY29uVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBidXR0b24pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IGVsZW1lbnQ6IHRoaXMuZWxlbWVudCwgYnV0dG9uOiBidXR0b24gfSk7XG4gICAgfVxuICAgIGNyZWF0ZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLnRoaXMuYnV0dG9uQ2xhc3Nlc1ZhbHVlKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLnZpc2libGVJY29uICsgJyAnICsgdGhpcy52aXNpYmxlTGFiZWxWYWx1ZTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG4gICAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaXNEaXNwbGF5ZWQgPSAhdGhpcy5pc0Rpc3BsYXllZDtcbiAgICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uRWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIHRvZ2dsZUJ1dHRvbkVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5pc0Rpc3BsYXllZFxuICAgICAgICAgICAgPyB0aGlzLmhpZGRlbkljb24gKyAnICcgKyB0aGlzLmhpZGRlbkxhYmVsVmFsdWVcbiAgICAgICAgICAgIDogdGhpcy52aXNpYmxlSWNvbiArICcgJyArIHRoaXMudmlzaWJsZUxhYmVsVmFsdWU7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0aGlzLmlzRGlzcGxheWVkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLmlzRGlzcGxheWVkID8gJ3Nob3cnIDogJ2hpZGUnLCB7IGVsZW1lbnQ6IHRoaXMuZWxlbWVudCwgYnV0dG9uOiB0b2dnbGVCdXR0b25FbGVtZW50IH0pO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgcHJlZml4OiAndG9nZ2xlLXBhc3N3b3JkJyB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIHZpc2libGVMYWJlbDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdTaG93JyB9LFxuICAgIHZpc2libGVJY29uOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ0RlZmF1bHQnIH0sXG4gICAgaGlkZGVuTGFiZWw6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnSGlkZScgfSxcbiAgICBoaWRkZW5JY29uOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ0RlZmF1bHQnIH0sXG4gICAgYnV0dG9uQ2xhc3NlczogQXJyYXksXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgJ0Bob3R3aXJlZC90dXJibyc7XG5cbmNsYXNzIHR1cmJvX2NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbn1cblxuZXhwb3J0IHsgdHVyYm9fY29udHJvbGxlciBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCB7IGNvbm5lY3RTdHJlYW1Tb3VyY2UsIGRpc2Nvbm5lY3RTdHJlYW1Tb3VyY2UgfSBmcm9tICdAaG90d2lyZWQvdHVyYm8nO1xuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2VzID0gW107XG4gICAgICAgIGlmICghdGhpcy5oYXNIdWJWYWx1ZSlcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXMucHVzaCgnQSBcImh1YlwiIHZhbHVlIHBvaW50aW5nIHRvIHRoZSBNZXJjdXJlIGh1YiBtdXN0IGJlIHByb3ZpZGVkLicpO1xuICAgICAgICBpZiAoIXRoaXMuaGFzVG9waWNWYWx1ZSlcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXMucHVzaCgnQSBcInRvcGljXCIgdmFsdWUgbXVzdCBiZSBwcm92aWRlZC4nKTtcbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZXMubGVuZ3RoKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZXMuam9pbignICcpKTtcbiAgICAgICAgY29uc3QgdSA9IG5ldyBVUkwodGhpcy5odWJWYWx1ZSk7XG4gICAgICAgIHUuc2VhcmNoUGFyYW1zLmFwcGVuZCgndG9waWMnLCB0aGlzLnRvcGljVmFsdWUpO1xuICAgICAgICB0aGlzLnVybCA9IHUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsKSB7XG4gICAgICAgICAgICB0aGlzLmVzID0gbmV3IEV2ZW50U291cmNlKHRoaXMudXJsKTtcbiAgICAgICAgICAgIGNvbm5lY3RTdHJlYW1Tb3VyY2UodGhpcy5lcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZXMuY2xvc2UoKTtcbiAgICAgICAgICAgIGRpc2Nvbm5lY3RTdHJlYW1Tb3VyY2UodGhpcy5lcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIHRvcGljOiBTdHJpbmcsXG4gICAgaHViOiBTdHJpbmcsXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJhY2MiLCJpbml0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVOYXYiLCJ0b2dnbGVEcm9wQ2F0ZWdvcmllcyIsInRvZ2dsZURyb3BNYXJxdWVzIiwidG9nZ2xlRHJvcEdlbnJlIiwidG9nZ2xlRHJvcENvdWxldXJzIiwidG9nZ2xlRmlsdHJlTW9iaWxlIiwidG9nZ2xlRnJpbHRlclNlbGVjdGlvbiIsImJ1cmdnZXIiLCJjcm9peCIsIm1lbnVNb2JpbGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVkTWVudSIsImFkZCIsInJlbW92ZSIsImJja29mZiIsIm9wZW5TaWRlQmVub2l0Iiwic2lkZUJhck5hdiIsInN0cm9rZUNvbG9ycyIsInNpZGVCYXIiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJpbWFnZXMiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwiZGVsZXRlSW1hZ2VQcm9kdWN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uZmlybSIsImZldGNoIiwiZ2V0QXR0cmlidXRlIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YXNldCIsInRva2VuIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwicGFyZW50RWxlbWVudCIsImFsZXJ0IiwiZXJyb3IiLCJkZWZhdWx0XzEiLCJjbGVhciIsInByZXZpZXdDbGVhckJ1dHRvblRhcmdldCIsImlucHV0VGFyZ2V0IiwiZXZlbnQiLCJvbklucHV0Q2hhbmdlIiwiZGlzcGF0Y2hFdmVudCIsInZhbHVlIiwic3R5bGUiLCJkaXNwbGF5IiwicGxhY2Vob2xkZXJUYXJnZXQiLCJwcmV2aWV3VGFyZ2V0IiwicHJldmlld0ltYWdlVGFyZ2V0IiwiYmFja2dyb3VuZEltYWdlIiwicHJldmlld0ZpbGVuYW1lVGFyZ2V0IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwibmFtZSIsInR5cGUiLCJpbmRleE9mIiwiX3BvcHVsYXRlSW1hZ2VQcmV2aWV3IiwiRmlsZVJlYWRlciIsInJlYWRlciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ0YXJnZXRzIiwiZGVmYXVsdCIsInBhcnNlRGlyZWN0aXZlcyIsImNvbnRlbnQiLCJkaXJlY3RpdmVzIiwiY3VycmVudEFjdGlvbk5hbWUiLCJjdXJyZW50QXJndW1lbnROYW1lIiwiY3VycmVudEFyZ3VtZW50VmFsdWUiLCJjdXJyZW50QXJndW1lbnRzIiwiY3VycmVudE5hbWVkQXJndW1lbnRzIiwiY3VycmVudE1vZGlmaWVycyIsInN0YXRlIiwiZ2V0TGFzdEFjdGlvbk5hbWUiLCJsZW5ndGgiLCJFcnJvciIsImFjdGlvbiIsInB1c2hJbnN0cnVjdGlvbiIsInB1c2giLCJhcmdzIiwibmFtZWQiLCJtb2RpZmllcnMiLCJnZXRTdHJpbmciLCJwdXNoQXJndW1lbnQiLCJtaXhlZEFyZ1R5cGVzRXJyb3IiLCJ0cmltIiwiT2JqZWN0Iiwia2V5cyIsInB1c2hNb2RpZmllciIsImkiLCJjaGFyIiwiY29tYmluZVNwYWNlZEFycmF5IiwicGFydHMiLCJmaW5hbFBhcnRzIiwiZm9yRWFjaCIsInBhcnQiLCJzcGxpdCIsIm5vcm1hbGl6ZU1vZGVsTmFtZSIsIm1vZGVsIiwicmVwbGFjZSIsIm1hcCIsInMiLCJqb2luIiwiZ2V0VmFsdWVGcm9tRWxlbWVudCIsInZhbHVlU3RvcmUiLCJIVE1MSW5wdXRFbGVtZW50IiwibW9kZWxOYW1lRGF0YSIsImdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQiLCJtb2RlbFZhbHVlIiwiZ2V0IiwiQXJyYXkiLCJpc0FycmF5IiwiZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlIiwiaGFzQXR0cmlidXRlIiwiY2hlY2tlZCIsImlucHV0VmFsdWUiLCJIVE1MU2VsZWN0RWxlbWVudCIsIm11bHRpcGxlIiwiZnJvbSIsInNlbGVjdGVkT3B0aW9ucyIsImVsIiwic2V0VmFsdWVPbkVsZW1lbnQiLCJ2YWx1ZUZvdW5kIiwidmFsIiwiYXJyYXlXcmFwcGVkVmFsdWUiLCJjb25jYXQiLCJvcHRpb25zIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJpbmNsdWRlcyIsInVuZGVmaW5lZCIsImdldEFsbE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnRzIiwiZGlyZWN0aXZlIiwidGhyb3dPbk1pc3NpbmciLCJkYXRhTW9kZWxEaXJlY3RpdmVzIiwiZm9ybUVsZW1lbnQiLCJjbG9zZXN0IiwiZ2V0RWxlbWVudEFzVGFnVGV4dCIsImVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50IiwiY29tcG9uZW50IiwiY29udGFpbnMiLCJmb3VuZENoaWxkQ29tcG9uZW50IiwiZ2V0Q2hpbGRyZW4iLCJjaGlsZENvbXBvbmVudCIsImNsb25lSFRNTEVsZW1lbnQiLCJuZXdFbGVtZW50IiwiY2xvbmVOb2RlIiwiSFRNTEVsZW1lbnQiLCJodG1sVG9FbGVtZW50IiwiaHRtbCIsInRlbXBsYXRlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNoaWxkRWxlbWVudENvdW50IiwiY2hpbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIm91dGVySFRNTCIsInNsaWNlIiwiY3VycmVudFZhbHVlcyIsImZpbmFsVmFsdWVzIiwiaW5kZXgiLCJzcGxpY2UiLCJnZXREZWVwRGF0YSIsInByb3BlcnR5UGF0aCIsInBhcnNlRGVlcERhdGEiLCJjdXJyZW50TGV2ZWxEYXRhIiwiZmluYWxLZXkiLCJmaW5hbERhdGEiLCJwYXJzZSIsIlZhbHVlU3RvcmUiLCJwcm9wcyIsImRpcnR5UHJvcHMiLCJwZW5kaW5nUHJvcHMiLCJ1cGRhdGVkUHJvcHNGcm9tUGFyZW50Iiwibm9ybWFsaXplZE5hbWUiLCJjdXJyZW50VmFsdWUiLCJhc3NpZ24iLCJjaGFuZ2VkIiwiZW50cmllcyIsImtleSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJtb3JwaEF0dHJzIiwiZnJvbU5vZGUiLCJ0b05vZGUiLCJ0b05vZGVBdHRycyIsImF0dHJpYnV0ZXMiLCJhdHRyIiwiYXR0ck5hbWUiLCJhdHRyTmFtZXNwYWNlVVJJIiwiYXR0clZhbHVlIiwiZnJvbVZhbHVlIiwibm9kZVR5cGUiLCJuYW1lc3BhY2VVUkkiLCJsb2NhbE5hbWUiLCJnZXRBdHRyaWJ1dGVOUyIsInNldEF0dHJpYnV0ZU5TIiwic2V0QXR0cmlidXRlIiwiZnJvbU5vZGVBdHRycyIsImQiLCJoYXNBdHRyaWJ1dGVOUyIsInJlbW92ZUF0dHJpYnV0ZU5TIiwicmVtb3ZlQXR0cmlidXRlIiwicmFuZ2UiLCJOU19YSFRNTCIsImRvYyIsIkhBU19URU1QTEFURV9TVVBQT1JUIiwiSEFTX1JBTkdFX1NVUFBPUlQiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUZyYWdtZW50RnJvbVRlbXBsYXRlIiwic3RyIiwiY2hpbGROb2RlcyIsImNyZWF0ZUZyYWdtZW50RnJvbVJhbmdlIiwic2VsZWN0Tm9kZSIsImZyYWdtZW50IiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiY3JlYXRlRnJhZ21lbnRGcm9tV3JhcCIsInRvRWxlbWVudCIsImNvbXBhcmVOb2RlTmFtZXMiLCJmcm9tRWwiLCJ0b0VsIiwiZnJvbU5vZGVOYW1lIiwibm9kZU5hbWUiLCJ0b05vZGVOYW1lIiwiZnJvbUNvZGVTdGFydCIsInRvQ29kZVN0YXJ0IiwiY2hhckNvZGVBdCIsInRvVXBwZXJDYXNlIiwiY3JlYXRlRWxlbWVudE5TIiwibW92ZUNoaWxkcmVuIiwiY3VyQ2hpbGQiLCJmaXJzdENoaWxkIiwibmV4dENoaWxkIiwibmV4dFNpYmxpbmciLCJhcHBlbmRDaGlsZCIsInN5bmNCb29sZWFuQXR0clByb3AiLCJzcGVjaWFsRWxIYW5kbGVycyIsIk9QVElPTiIsInBhcmVudE5vZGUiLCJwYXJlbnROYW1lIiwic2VsZWN0ZWRJbmRleCIsIklOUFVUIiwiVEVYVEFSRUEiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwibm9kZVZhbHVlIiwicGxhY2Vob2xkZXIiLCJTRUxFQ1QiLCJvcHRncm91cCIsIkVMRU1FTlRfTk9ERSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUkMSIsIlRFWFRfTk9ERSIsIkNPTU1FTlRfTk9ERSIsIm5vb3AiLCJkZWZhdWx0R2V0Tm9kZUtleSIsIm5vZGUiLCJpZCIsIm1vcnBoZG9tRmFjdG9yeSIsIm1vcnBoZG9tIiwidG9Ob2RlSHRtbCIsImdldE5vZGVLZXkiLCJvbkJlZm9yZU5vZGVBZGRlZCIsIm9uTm9kZUFkZGVkIiwib25CZWZvcmVFbFVwZGF0ZWQiLCJvbkVsVXBkYXRlZCIsIm9uQmVmb3JlTm9kZURpc2NhcmRlZCIsIm9uTm9kZURpc2NhcmRlZCIsIm9uQmVmb3JlRWxDaGlsZHJlblVwZGF0ZWQiLCJza2lwRnJvbUNoaWxkcmVuIiwiYWRkQ2hpbGQiLCJwYXJlbnQiLCJjaGlsZHJlbk9ubHkiLCJmcm9tTm9kZXNMb29rdXAiLCJjcmVhdGUiLCJrZXllZFJlbW92YWxMaXN0IiwiYWRkS2V5ZWRSZW1vdmFsIiwid2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMiLCJza2lwS2V5ZWROb2RlcyIsInJlbW92ZU5vZGUiLCJyZW1vdmVDaGlsZCIsImluZGV4VHJlZSIsImhhbmRsZU5vZGVBZGRlZCIsInVubWF0Y2hlZEZyb21FbCIsInJlcGxhY2VDaGlsZCIsIm1vcnBoRWwiLCJjbGVhbnVwRnJvbUVsIiwiY3VyRnJvbU5vZGVDaGlsZCIsImN1ckZyb21Ob2RlS2V5IiwiZnJvbU5leHRTaWJsaW5nIiwidG9FbEtleSIsIm1vcnBoQ2hpbGRyZW4iLCJza2lwRnJvbSIsImN1clRvTm9kZUNoaWxkIiwiY3VyVG9Ob2RlS2V5IiwidG9OZXh0U2libGluZyIsIm1hdGNoaW5nRnJvbUVsIiwib3V0ZXIiLCJpc1NhbWVOb2RlIiwiY3VyRnJvbU5vZGVUeXBlIiwiaXNDb21wYXRpYmxlIiwiaW5zZXJ0QmVmb3JlIiwib25CZWZvcmVOb2RlQWRkZWRSZXN1bHQiLCJhY3R1YWxpemUiLCJvd25lckRvY3VtZW50Iiwic3BlY2lhbEVsSGFuZGxlciIsIm1vcnBoZWROb2RlIiwibW9ycGhlZE5vZGVUeXBlIiwidG9Ob2RlVHlwZSIsImxlbiIsImVsVG9SZW1vdmUiLCJub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbiIsImlzRmlsZUlucHV0IiwiY2hpbGRyZW4iLCJleGVjdXRlTW9ycGhkb20iLCJyb290RnJvbUVsZW1lbnQiLCJyb290VG9FbGVtZW50IiwibW9kaWZpZWRGaWVsZEVsZW1lbnRzIiwiZ2V0RWxlbWVudFZhbHVlIiwiY2hpbGRDb21wb25lbnRzIiwiZmluZENoaWxkQ29tcG9uZW50IiwiZ2V0S2V5RnJvbUVsZW1lbnQiLCJleHRlcm5hbE11dGF0aW9uVHJhY2tlciIsImNoaWxkQ29tcG9uZW50TWFwIiwiTWFwIiwic2V0Iiwid2FzRWxlbWVudEFkZGVkIiwiTWF0aCIsInJhbmRvbSIsIl9feCIsIndpbmRvdyIsIkFscGluZSIsIm1vcnBoIiwiaGFzIiwidXBkYXRlRnJvbU5ld0VsZW1lbnRGcm9tUGFyZW50UmVuZGVyIiwiZWxlbWVudENoYW5nZXMiLCJnZXRDaGFuZ2VkRWxlbWVudCIsImFwcGx5VG9FbGVtZW50IiwiaXNFcXVhbE5vZGUiLCJub3JtYWxpemVkRnJvbUVsIiwibm9ybWFsaXplZFRvRWwiLCJVbnN5bmNlZElucHV0c1RyYWNrZXIiLCJtb2RlbEVsZW1lbnRSZXNvbHZlciIsImVsZW1lbnRFdmVudExpc3RlbmVycyIsImNhbGxiYWNrIiwiaGFuZGxlSW5wdXRFdmVudCIsInVuc3luY2VkSW5wdXRzIiwiVW5zeW5jZWRJbnB1dENvbnRhaW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb2RlbE5hbWUiLCJtYXJrTW9kZWxBc1N5bmNlZCIsInVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQiLCJnZXRNb2RlbE5hbWUiLCJhbGxVbnN5bmNlZElucHV0cyIsImdldFVuc3luY2VkTW9kZWxOYW1lcyIsInJlc2V0VW5zeW5jZWRGaWVsZHMiLCJ1bnN5bmNlZE5vbk1vZGVsRmllbGRzIiwidW5zeW5jZWRNb2RlbE5hbWVzIiwidW5zeW5jZWRNb2RlbEZpZWxkcyIsInZhbHVlcyIsIkhvb2tNYW5hZ2VyIiwiaG9va3MiLCJob29rTmFtZSIsIkJhY2tlbmRSZXNwb25zZSIsInRleHQiLCJDaGFuZ2luZ0l0ZW1zVHJhY2tlciIsImNoYW5nZWRJdGVtcyIsInJlbW92ZWRJdGVtcyIsIml0ZW1OYW1lIiwicHJldmlvdXNWYWx1ZSIsInJlbW92ZWRSZWNvcmQiLCJvcmlnaW5hbCIsIm9yaWdpbmFsUmVjb3JkIiwidHJ1ZU9yaWdpbmFsVmFsdWUiLCJzaXplIiwiRWxlbWVudENoYW5nZXMiLCJhZGRlZENsYXNzZXMiLCJyZW1vdmVkQ2xhc3NlcyIsInN0eWxlQ2hhbmdlcyIsImF0dHJpYnV0ZUNoYW5nZXMiLCJjbGFzc05hbWUiLCJmaWx0ZXIiLCJzdHlsZU5hbWUiLCJvcmlnaW5hbFZhbHVlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJhdHRyaWJ1dGVOYW1lIiwiZ2V0Q2hhbmdlZEl0ZW1zIiwiZ2V0UmVtb3ZlZEl0ZW1zIiwiY2hhbmdlIiwic2V0UHJvcGVydHkiLCJyZW1vdmVQcm9wZXJ0eSIsImlzRW1wdHkiLCJFeHRlcm5hbE11dGF0aW9uVHJhY2tlciIsInNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2siLCJjaGFuZ2VkRWxlbWVudHMiLCJXZWFrTWFwIiwiY2hhbmdlZEVsZW1lbnRzQ291bnQiLCJhZGRlZEVsZW1lbnRzIiwicmVtb3ZlZEVsZW1lbnRzIiwiaXNTdGFydGVkIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvbk11dGF0aW9ucyIsImJpbmQiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImF0dHJpYnV0ZU9sZFZhbHVlIiwiZGlzY29ubmVjdCIsInRha2VSZWNvcmRzIiwibXV0YXRpb25zIiwiaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucyIsIm11dGF0aW9uIiwiaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uIiwiaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCIsImFkZGVkRWxlbWVudCIsImhhbmRsZUNoaWxkTGlzdE11dGF0aW9uIiwiaGFuZGxlQXR0cmlidXRlTXV0YXRpb24iLCJhZGRlZE5vZGVzIiwiRWxlbWVudCIsInJlbW92ZWROb2RlcyIsImNoYW5nZWRFbGVtZW50IiwiaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbiIsImhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24iLCJoYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24iLCJwcmV2aW91c1ZhbHVlcyIsInRyaW1tZWRWYWx1ZSIsIm5ld1ZhbHVlcyIsImNhbGwiLCJhZGRlZFZhbHVlcyIsInJlbW92ZWRWYWx1ZXMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicHJldmlvdXNTdHlsZXMiLCJleHRyYWN0U3R5bGVzIiwibmV3U3R5bGVzIiwiYWRkZWRPckNoYW5nZWRTdHlsZXMiLCJyZW1vdmVkU3R5bGVzIiwiYWRkU3R5bGUiLCJyZW1vdmVTdHlsZSIsImFkZEF0dHJpYnV0ZSIsInN0eWxlcyIsInN0eWxlT2JqZWN0IiwicHJvcGVydHkiLCJ0YWdOYW1lIiwiQ2hpbGRDb21wb25lbnRXcmFwcGVyIiwibW9kZWxCaW5kaW5ncyIsIkNvbXBvbmVudCIsImxpc3RlbmVycyIsImNvbXBvbmVudEZpbmRlciIsImZpbmdlcnByaW50IiwiYmFja2VuZCIsImVsZW1lbnREcml2ZXIiLCJkZWZhdWx0RGVib3VuY2UiLCJiYWNrZW5kUmVxdWVzdCIsInBlbmRpbmdBY3Rpb25zIiwicGVuZGluZ0ZpbGVzIiwiaXNSZXF1ZXN0UGVuZGluZyIsInJlcXVlc3REZWJvdW5jZVRpbWVvdXQiLCJsaXN0ZW5lciIsIl9hIiwidW5zeW5jZWRJbnB1dHNUcmFja2VyIiwicmVzZXRQcm9taXNlIiwic3RhcnQiLCJvbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUiLCJwbHVnaW4iLCJhdHRhY2hUb0NvbXBvbmVudCIsInRyaWdnZXJIb29rIiwiYWN0aXZhdGUiLCJjbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQiLCJkZWFjdGl2YXRlIiwic3RvcCIsInJlZ2lzdGVyIiwidW5yZWdpc3RlciIsInJlUmVuZGVyIiwiZGVib3VuY2UiLCJwcm9taXNlIiwibmV4dFJlcXVlc3RQcm9taXNlIiwiaXNDaGFuZ2VkIiwiZGVib3VuY2VkU3RhcnRSZXF1ZXN0IiwiaW5wdXQiLCJ0cnlTdGFydGluZ1JlcXVlc3QiLCJnZXRVbnN5bmNlZE1vZGVscyIsIm9uIiwib2ZmIiwib25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkIiwicGVyZm9ybUVtaXQiLCJkb0VtaXQiLCJlbWl0VXAiLCJtYXRjaGluZ05hbWUiLCJjb21wb25lbnRzIiwiYWN0aW9ucyIsImdldENvbXBvbmVudFByb3BzIiwic3RvcmVOZXdQcm9wc0Zyb21QYXJlbnQiLCJsaXZlRmluZ2VycHJpbnRWYWx1ZSIsInJlbmRlciIsImNoaWxkV3JhcHBlciIsIm1vZGVsQmluZGluZyIsImNoaWxkTW9kZWxOYW1lIiwiaW5uZXJNb2RlbE5hbWUiLCJzaG91bGRSZW5kZXIiLCJUdXJibyIsInBlcmZvcm1SZXF1ZXN0IiwidGhpc1Byb21pc2VSZXNvbHZlIiwibmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZSIsImZpbGVzVG9TZW5kIiwibWFrZVJlcXVlc3QiLCJnZXRPcmlnaW5hbFByb3BzIiwiZ2V0RGlydHlQcm9wcyIsImdldENoaWxkcmVuRmluZ2VycHJpbnRzIiwiZ2V0VXBkYXRlZFByb3BzRnJvbVBhcmVudCIsImZsdXNoRGlydHlQcm9wc1RvUGVuZGluZyIsImJhY2tlbmRSZXNwb25zZSIsImdldEJvZHkiLCJjb250cm9scyIsImRpc3BsYXlFcnJvciIsInB1c2hQZW5kaW5nUHJvcHNCYWNrVG9EaXJ0eSIsInJlbmRlckVycm9yIiwicHJvY2Vzc1JlcmVuZGVyIiwiaXNUdXJib0VuYWJsZWQiLCJ2aXNpdCIsImxvY2F0aW9uIiwiaHJlZiIsIm1vZGlmaWVkTW9kZWxWYWx1ZXMiLCJtYXRjaGVzIiwibmV3UHJvcHMiLCJyZWluaXRpYWxpemVBbGxQcm9wcyIsImV2ZW50c1RvRW1pdCIsImdldEV2ZW50c1RvRW1pdCIsImJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoIiwiZ2V0QnJvd3NlckV2ZW50c1RvRGlzcGF0Y2giLCJoYW5kbGVQZW5kaW5nQ2hhbmdlcyIsImdldFVuc3luY2VkSW5wdXRzIiwiZmluZENoaWxkQ29tcG9uZW50RWxlbWVudCIsImNvbXBvbmVudE5hbWUiLCJlbWl0U2VsZiIsImVtaXQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2FsY3VsYXRlRGVib3VuY2UiLCJtb2RhbCIsImdldEVsZW1lbnRCeUlkIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsInBvc2l0aW9uIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZmxleERpcmVjdGlvbiIsImlmcmFtZSIsImJvcmRlclJhZGl1cyIsImZsZXhHcm93IiwicHJlcGVuZCIsIm92ZXJmbG93IiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiY2xvc2VNb2RhbCIsImZvY3VzIiwiZmluZ2VycHJpbnRzIiwidGFnIiwidG9Mb3dlckNhc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInByb3hpZnlDb21wb25lbnQiLCJQcm94eSIsInByb3AiLCJjYWxsYWJsZSIsImFwcGx5IiwiUmVmbGVjdCIsImdldERhdGEiLCJCYWNrZW5kUmVxdWVzdCIsInVwZGF0ZU1vZGVscyIsImlzUmVzb2x2ZWQiLCJ1cGRhdGVkTW9kZWxzIiwidGFyZ2V0ZWRBY3Rpb25zIiwidGFyZ2V0ZWRNb2RlbHMiLCJSZXF1ZXN0QnVpbGRlciIsInVybCIsImNzcmZUb2tlbiIsInVwZGF0ZWQiLCJzcGxpdFVybCIsInF1ZXJ5U3RyaW5nIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiZmV0Y2hPcHRpb25zIiwiQWNjZXB0IiwidG90YWxGaWxlcyIsInJlZHVjZSIsInRvdGFsIiwiY3VycmVudCIsImhhc0ZpbmdlcnByaW50cyIsIndpbGxEYXRhRml0SW5VcmwiLCJyZXF1ZXN0RGF0YSIsInByb3BzRnJvbVBhcmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwYXJhbXNTdHJpbmciLCJ0b1N0cmluZyIsInByb3BzSnNvbiIsInVwZGF0ZWRKc29uIiwiY2hpbGRyZW5Kc29uIiwicHJvcHNGcm9tUGFyZW50SnNvbiIsInVybEVuY29kZWRKc29uRGF0YSIsIkJhY2tlbmQiLCJyZXF1ZXN0QnVpbGRlciIsImJ1aWxkUmVxdWVzdCIsImJhY2tlbmRBY3Rpb24iLCJTdGFuZGFyZEVsZW1lbnREcml2ZXIiLCJtb2RlbERpcmVjdGl2ZSIsInJvb3RFbGVtZW50IiwibGl2ZVByb3BzVmFsdWUiLCJsaXZlSWQiLCJldmVudHNKc29uIiwibGl2ZUVtaXQiLCJsaXZlQnJvd3NlckRpc3BhdGNoIiwiTG9hZGluZ1BsdWdpbiIsInJlcXVlc3QiLCJzdGFydExvYWRpbmciLCJmaW5pc2hMb2FkaW5nIiwidGFyZ2V0RWxlbWVudCIsImhhbmRsZUxvYWRpbmdUb2dnbGUiLCJpc0xvYWRpbmciLCJhZGRBdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlcyIsImdldExvYWRpbmdEaXJlY3RpdmVzIiwiaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZSIsImZpbmFsQWN0aW9uIiwicGFyc2VMb2FkaW5nQWN0aW9uIiwiZGVsYXkiLCJ2YWxpZE1vZGlmaWVycyIsIm1vZGlmaWVyIiwicGFyc2VJbnQiLCJjb250YWluc09uZU9mQWN0aW9ucyIsImFyZUFueU1vZGVsc1VwZGF0ZWQiLCJsb2FkaW5nRGlyZWN0aXZlIiwic2hvd0VsZW1lbnQiLCJoaWRlRWxlbWVudCIsImxvYWRpbmdEaXJlY3RpdmVzIiwiU1ZHRWxlbWVudCIsImxvYWRpbmciLCJjbGFzc2VzIiwiYXR0cmlidXRlIiwiVmFsaWRhdGVkRmllbGRzUGx1Z2luIiwiaGFuZGxlTW9kZWxTZXQiLCJ2YWxpZGF0ZWRGaWVsZHMiLCJQYWdlVW5sb2FkaW5nUGx1Z2luIiwiaXNDb25uZWN0ZWQiLCJQb2xsaW5nRGlyZWN0b3IiLCJpc1BvbGxpbmdBY3RpdmUiLCJwb2xsaW5nSW50ZXJ2YWxzIiwiYWN0aW9uTmFtZSIsImR1cmF0aW9uIiwicG9sbHMiLCJpbml0aWF0ZVBvbGwiLCJpbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzdG9wQWxsUG9sbGluZyIsInN0YXJ0QWxsUG9sbGluZyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJQb2xsaW5nUGx1Z2luIiwicG9sbGluZ0RpcmVjdG9yIiwiaW5pdGlhbGl6ZVBvbGxpbmciLCJhZGRQb2xsIiwiY2xlYXJQb2xsaW5nIiwicG9sbCIsInJhd1BvbGxDb25maWciLCJ3YXJuIiwiU2V0VmFsdWVPbnRvTW9kZWxGaWVsZHNQbHVnaW4iLCJzeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyIsIkhUTUxGb3JtRWxlbWVudCIsImdldE1vZGVsQmluZGluZyIsInRhcmdldEV2ZW50TmFtZSIsIkNvbXBvbmVudFJlZ2lzdHJ5IiwiY29tcG9uZW50TWFwQnlFbGVtZW50IiwiY29tcG9uZW50TWFwQnlDb21wb25lbnQiLCJyZWplY3QiLCJjb3VudCIsIm1heENvdW50IiwiY3VycmVudENvbXBvbmVudCIsIm9ubHlQYXJlbnRzIiwib25seU1hdGNoTmFtZSIsImdldENvbXBvbmVudCIsIkxpdmVDb250cm9sbGVyRGVmYXVsdCIsImNvbXBvbmVudFJlZ2lzdHJ5IiwiYXJndW1lbnRzIiwicGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQiLCJoYW5kbGVDaGFuZ2VFdmVudCIsImhhbmRsZUNvbm5lY3RlZENvbnRyb2xsZXJFdmVudCIsImhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50IiwibmFtZVZhbHVlIiwicHJvcHNWYWx1ZSIsImxpc3RlbmVyc1ZhbHVlIiwiZmluZENvbXBvbmVudHMiLCJmaW5nZXJwcmludFZhbHVlIiwidXJsVmFsdWUiLCJjc3JmVmFsdWUiLCJwcm94aWVkQ29tcG9uZW50IiwiX19jb21wb25lbnQiLCJoYXNEZWJvdW5jZVZhbHVlIiwiZGVib3VuY2VWYWx1ZSIsInBsdWdpbnMiLCJhZGRQbHVnaW4iLCJyZWdpc3RlckNvbXBvbmVudCIsImNvbm5lY3QiLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiY3VycmVudFRhcmdldCIsInVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCIsInJhd0FjdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsImdldEVtaXREaXJlY3RpdmVzIiwibmFtZU1hdGNoIiwiZXZlbnRJbmZvIiwiZW1pdHMiLCJldmVudE5hbWUiLCJmaW5hbFZhbHVlIiwiY2hpbGRDb250cm9sbGVyIiwiY29udHJvbGxlciIsImdldFBhcmVudCIsIm1vZGVsRGlyZWN0aXZlcyIsImNhbkJ1YmJsZSIsImNhbmNlbGFibGUiLCJTdHJpbmciLCJjc3JmIiwiTnVtYmVyIiwiX2IiLCJpbnRybyIsImludHJvVmFsdWUiLCJyZXNvbHZlU3ZlbHRlQ29tcG9uZW50IiwiY29tcG9uZW50VmFsdWUiLCJfZGVzdHJveUlmRXhpc3RzIiwicm9vdCIsIiRkZXN0cm95IiwiQm9vbGVhbiIsIlN3dXAiLCJTd3VwRGVidWdQbHVnaW4iLCJTd3VwRm9ybXNQbHVnaW4iLCJTd3VwRmFkZVRoZW1lIiwiU3d1cFNsaWRlVGhlbWUiLCJkYXRhQ29udGFpbmVycyIsImNvbnRhaW5lcnNWYWx1ZSIsIm1haW5FbGVtZW50IiwibWFpbkVsZW1lbnRWYWx1ZSIsImFsbEVsZW1lbnRzIiwiY29udGFpbmVyc0xpc3QiLCJpdGVtIiwiY29udGFpbmVycyIsInRoZW1lVmFsdWUiLCJoYXNNYWluRWxlbWVudFZhbHVlIiwiaGFzQW5pbWF0ZUhpc3RvcnlCcm93c2luZ1ZhbHVlIiwiYW5pbWF0ZUhpc3RvcnlCcm93c2luZyIsImFuaW1hdGVIaXN0b3J5QnJvd3NpbmdWYWx1ZSIsImhhc0FuaW1hdGlvblNlbGVjdG9yVmFsdWUiLCJhbmltYXRpb25TZWxlY3RvciIsImFuaW1hdGlvblNlbGVjdG9yVmFsdWUiLCJoYXNDYWNoZVZhbHVlIiwiY2FjaGUiLCJjYWNoZVZhbHVlIiwiaGFzTGlua1NlbGVjdG9yVmFsdWUiLCJsaW5rU2VsZWN0b3IiLCJsaW5rU2VsZWN0b3JWYWx1ZSIsImRlYnVnVmFsdWUiLCJzd3VwIiwidGhlbWUiLCJkZWJ1ZyIsImlzRGlzcGxheWVkIiwidmlzaWJsZUljb24iLCJoaWRkZW5JY29uIiwidmlzaWJsZUljb25WYWx1ZSIsImhpZGRlbkljb25WYWx1ZSIsImJ1dHRvbiIsImNyZWF0ZUJ1dHRvbiIsImluc2VydEFkamFjZW50RWxlbWVudCIsImJ1dHRvbkNsYXNzZXNWYWx1ZSIsInZpc2libGVMYWJlbFZhbHVlIiwidG9nZ2xlQnV0dG9uRWxlbWVudCIsImhpZGRlbkxhYmVsVmFsdWUiLCJ2aXNpYmxlTGFiZWwiLCJoaWRkZW5MYWJlbCIsImJ1dHRvbkNsYXNzZXMiLCJ0dXJib19jb250cm9sbGVyIiwiY29ubmVjdFN0cmVhbVNvdXJjZSIsImRpc2Nvbm5lY3RTdHJlYW1Tb3VyY2UiLCJlcnJvck1lc3NhZ2VzIiwiaGFzSHViVmFsdWUiLCJoYXNUb3BpY1ZhbHVlIiwidSIsIlVSTCIsImh1YlZhbHVlIiwic2VhcmNoUGFyYW1zIiwidG9waWNWYWx1ZSIsImVzIiwiRXZlbnRTb3VyY2UiLCJ0b3BpYyIsImh1YiJdLCJzb3VyY2VSb290IjoiIn0=