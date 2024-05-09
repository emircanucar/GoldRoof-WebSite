var swiper = new Swiper(".productSlider", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".comments-nav-next",
    prevEl: ".comments-nav-prev",
  },

  breakpoints: {
    480: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3.2,
    },
    976: {
      slidesPerView: 4.2,
    },
    1280: {
      slidesPerView: 5,
    },
  },
});
