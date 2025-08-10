// start header bars
let bars = document.querySelector("header .container i.fa-bars");
let mobileNav = document.querySelector("header .container nav.mobile");
let doc = document
function show(e) {
  mobileNav.classList.toggle("show");
  e.stopPropagation();
}
function hide() {
  mobileNav.classList.remove("show");
}

bars.addEventListener("click", show);
doc.addEventListener("click",hide)
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
