var swiper = new Swiper(".mainSlider", {});

var swiper = new Swiper(".customerComment", {
  slidesPerView: 1.05,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".comments-nav-next",
    prevEl: ".comments-nav-prev",
  },

  breakpoints: {
    576: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".referenceSlider", {
  slidesPerView: 1.2,
  spaceBetween: 10,

  breakpoints: {
    300: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    330: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 1.8,
      spaceBetween: 10,
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1536: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

var endDate = new Date("may 20, 2024 23:59").getTime();

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

var chatBox = document.querySelector(".chat-box-container");
var chatBoxBtn = document.querySelector(".chat-box-button");
function toggleShow() {
  chatBox.classList.toggle("show");
}
chatBoxBtn.addEventListener("click", toggleShow);
