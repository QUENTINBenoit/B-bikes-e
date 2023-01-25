const bckoff = {
    init: function () {
      console.log("initialisation back off de benoit "
      );
      document
        .querySelector("#navigationId")
        .addEventListener("click", bckoff.openSideBenoit);

    },
  
    openSideBenoit: function () {
      console.log(" vous etes bien dans openSideBenoit ");
      document
        .querySelector("#navigationId")
        .classList.toggle("rotate-180");
  
      const sideBarNav =
        document.querySelector("#navSidebar");
      const strokeColors =
        document.querySelector("#flecheId");
  
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
    },
  };
  

document.addEventListener("DOMContentLoaded", bckoff.init);
