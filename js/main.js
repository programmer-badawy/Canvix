// start header bars
let bars = document.querySelector("header .container i.fa-bars");
let mobileNav = document.querySelector("header .container nav.mobile");

function show() {
  mobileNav.classList.toggle("show");
}

bars.addEventListener("click", show);
// end header bars


//start swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    // el: ".swiper-scrollbar",
  },
});
//end swiper