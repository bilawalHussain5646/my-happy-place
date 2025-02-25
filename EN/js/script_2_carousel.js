document.addEventListener("DOMContentLoaded", () => {
  const swiperWrapper = document.querySelector(".trusted-swiper");
  const totalSlides = 24;

  for (let i = 1; i <= totalSlides; i++) {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide", "trusted-slide");

    const carouselDiv = document.createElement("div");
    carouselDiv.classList.add("swiper-slide-carousel");
    carouselDiv.setAttribute("loading", "lazy");
    carouselDiv.style.backgroundImage = `url(./images/carousel/carousel-${i}.jpg)`;

    slide.appendChild(carouselDiv);
    swiperWrapper.appendChild(slide);
  }
});
function revealNextProducts() {
  document.getElementById("product_4").classList.toggle("hidden");
  document.getElementById("product_5").classList.toggle("hidden");
  document.getElementById("product_6").classList.toggle("hidden");
  document.getElementById("load_more_btn").style.display = "none";
}
var swiper = new Swiper(".trusted-by-swiper", {
  breakpoints: {
    1920: {
      slidesPerView: 3.5,
    },
    992: {
      slidesPerView: 3.5,
    },
    757: {
      slidesPerView: 3.5,
    },
    320: {
      slidesPerView: 1.5,
    },
  },
  spaceBetween: 25,
  loop: false, // Swiper's loop is OFF
  freeMode: true,
  allowTouchMove: false,
  speed: 0, // Disable Swiper's animation
  autoplay: false, // Let GSAP control movement
});
// Select the Swiper wrapper
const swiperWrapper = document.querySelector(".trusted-swiper");

// Get all slides
const slides = Array.from(document.querySelectorAll(".trusted-slide"));

// Duplicate slides to prevent gaps
slides.forEach((slide) => {
  let clone = slide.cloneNode(true);
  swiperWrapper.appendChild(clone);
});

let totalSlidesWidth = swiperWrapper.scrollWidth * 12;
// Calculate total width of slides
const totalWidth = totalSlidesWidth / 2; // Because we duplicated them
console.log(totalWidth);
// Animate the slides using GSAP
gsap.to(swiperWrapper, {
  x: `-=${totalWidth}`, // Moves by total width of original slides
  duration: 120, // Adjust for smooth speed
  ease: "linear", // No easing for continuous effect
  repeat: -1, // Infinite loop
  onUpdate: function () {
    if (parseFloat(gsap.getProperty(swiperWrapper, "x")) <= -totalWidth) {
      gsap.set(swiperWrapper, { x: 0 }); // Reset without blinking
    }
  },
});

window.addEventListener("load", function () {
  setTimeout(function () {
    gsap.to(".hiding_banner", {
      duration: 1.5,
      ease: "power1.inOut",
      opacity: 0,
    });
  }, 3000);
});
