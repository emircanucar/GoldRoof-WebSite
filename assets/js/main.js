var swiper = new Swiper(".mainSlider", {});
var swiper = new Swiper(".referenceSlider", {
  slidesPerView: 1.2,
  spaceBetween: 10,

  breakpoints: {
    576: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 5.5,
      spaceBetween: 20,
    },
    1536: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});
var endDate = new Date("jun 15, 2024 23:59").getTime();

var x = setInterval(() => {
  var nowDate = new Date().getTime();

  var range = endDate - nowDate;

  var days = Math.floor(range / (1000 * 60 * 60 * 24));
  var hours = Math.floor((range % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((range % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((range % (1000 * 60)) / 1000);

  document.getElementById("discountCounter").innerHTML =
    days +
    " Gün " +
    hours +
    " Saat " +
    minutes +
    " Dakika " +
    seconds +
    " Saniye ";

  if (range <= 0) {
    clearInterval(x);
    document.getElementById("discountCounter").innerHTML = "İndirim Bitti!";
  }
}, 1000);
