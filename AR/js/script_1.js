var $swiperSelector = $(".swiper-container");

$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 150;
  // var freeMode = $this.data("free-mode") ? $this.data("free-mode") : true;
  // var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 3;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 3;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 1.1;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 30;

  var swiper = new Swiper(".swiper-slider-" + index, {
    direction: "horizontal",
    loop: false,
    freeMode: false,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      757: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
