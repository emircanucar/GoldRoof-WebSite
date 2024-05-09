var swiper = new Swiper(".productSlider", {
  slidesPerView: 1,
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
    428: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    976: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    },
  },
});
