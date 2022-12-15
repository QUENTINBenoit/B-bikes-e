import "./styles/app.css";

const acc = {
  init: function () {
    console.log("initialisation page accueil");

    document
      .querySelector("#menu-btn")
      .addEventListener("click", acc.toggleNav);

    document
      .querySelector("#dropdownCatergories")
      .addEventListener("click", acc.toggleDropCategories);

    document
      .querySelector("#dropdownMarques")
      .addEventListener("click", acc.toggleDropMarques);
    document
      .querySelector("#dropdownGenre")
      .addEventListener("click", acc.toggleDropGenre);

    document
      .querySelector("#dropdownCouleurs")
      .addEventListener("click", acc.toggleDropCouleurs);

    document
      .querySelector("#filtreMobile")
      .addEventListener("click", acc.toggleFiltreMobile);

    document
      .querySelector("#filterSelection")
      .addEventListener(
        "click",
        acc.toggleFrilterSelection
      );
  },

  toggleNav: function () {
    // Reécupèration des svg's'
    const burgger = document.querySelector("#burgerSvg");
    const croix = document.querySelector("#croixSvg");
    const menuMobile =
      document.querySelector("#toggled-menu");

    burgger.classList.toggle("hidden");
    croix.classList.toggle("hidden");

    const toggledMenu = menuMobile.classList.toggle(
      "-translate-y-full"
    );

    if (toggledMenu == true) {
      menuMobile.classList.add("-translate-y-full");
    } else {
      menuMobile.classList.remove("-translate-y-full");
    }
  },

  // fonction drop filtre categories
  toggleDropCategories: function () {
    document
      .querySelector("#submenuFiltre")
      .classList.toggle("hidden");
    document
      .querySelector("#submenuFiltre")
      .classList.toggle("duration-500");

    document
      .querySelector("#arrowCategories")
      .classList.toggle("rotate-180");
    document
      .querySelector("#dropdownCatergories")
      .classList.toggle("backdrop-blur-3xl");
    document
      .querySelector("#dropdownCatergories")
      .classList.toggle("bg-white/25");
    document
      .querySelector("#colorsFiltersCategories")
      .classList.toggle("text-pink-900");
  },

  // fonction drop filtre Marques
  toggleDropMarques: function () {
    document
      .querySelector("#submenuFiltreMarque")
      .classList.toggle("hidden");
    document
      .querySelector("#arrowMarques")
      .classList.toggle("rotate-180");
    document
      .querySelector("#dropdownMarques")
      .classList.toggle("backdrop-blur-3xl");
    document
      .querySelector("#dropdownMarques")
      .classList.toggle("bg-white/25");
    document
      .querySelector("#colorsFiltersMarques")
      .classList.toggle("text-pink-900");
  },

  // fonction drop filtre Genre
  toggleDropGenre: function () {
    document
      .querySelector("#submenuFiltreGenre")
      .classList.toggle("hidden");
    document
      .querySelector("#arrowGenre")
      .classList.toggle("rotate-180");
    document
      .querySelector("#dropdownGenre")
      .classList.toggle("backdrop-blur-3xl");
    document
      .querySelector("#dropdownGenre")
      .classList.toggle("bg-white/25");
    document
      .querySelector("#colorsFiltersGenre")
      .classList.toggle("text-pink-900");
  },

  // fonction drop filtre Couleurs
  toggleDropCouleurs: function () {
    console.log("benoit");
    document
      .querySelector("#submenuFiltreCouleurs")
      .classList.toggle("hidden");
    document
      .querySelector("#arrowCouleurs")
      .classList.toggle("rotate-180");
    document
      .querySelector("#dropdownCouleurs")
      .classList.toggle("backdrop-blur-3xl");
    document
      .querySelector("#dropdownCouleurs")
      .classList.toggle("bg-white/25");

    document
      .querySelector("#colorsFiltersCouleur")
      .classList.toggle("text-pink-900");
  },

  toggleFiltreMobile: function () {
    document
      .querySelector("#filtreMobile")
      .classList.toggle("rotate-180");

    document
      .querySelector("#filtre")
      .classList.toggle("hidden");
  },
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
};

document.addEventListener("DOMContentLoaded", acc.init);
