var productGalleryThumb = new Swiper(".productGalleryThumb", {
  slidesPerView: 2,
  spaceBetween: 10,
  watchSlidesProgress: true,
  freeMode: true,
  loop: true,
  navigation: {
    nextEl: ".thumb-button-next",
    prevEl: ".thumb-button-prev",
  },
  breakpoints: {
    360: {
      slidesPerView: 3,
    },
    520: {
      slidesPerView: 4,
    },
  },
});

var productGallery = new Swiper(".productGallery", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".gallery-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  thumbs: {
    swiper: productGalleryThumb,
  },
});

Fancybox.bind("[data-fancybox]", {});
