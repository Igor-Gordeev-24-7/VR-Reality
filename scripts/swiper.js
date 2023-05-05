const swiper = new Swiper(".play__swiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
});

const swiper1 = new Swiper(".swiper1", {
  direction: "horizontal",
  // loop: true,

  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },

  pagination: {
    el: ".swiper-pagination1",
    type: "fraction",
  },
});
