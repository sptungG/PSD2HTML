const menuToggle = document.querySelector(".header-toggle");
const menu = document.querySelector(".header-menu");
menuToggle.addEventListener("click", function () {
  menu.classList.toggle("is-expand");
});
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".header-toggle")) {
    menu.classList.remove("is-expand");
  }
});
$(document).ready(function () {
  $(".quote-container").slick({
    prevArrow: `<button type="button" class="slick-arrow slick-prev"><i class = "fa fa-angle-left"></i></button>`,
    nextArrow: `<button type="button" class="slick-arrow slick-next"><i class = "fa fa-angle-right"></i></button>`,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
