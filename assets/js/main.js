var swiper = new Swiper(".mainSlider", {});

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
