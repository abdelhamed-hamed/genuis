import copyRightYear from "../main.js";
swiperJS();
copyRightYear();
function swiperJS() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    parallax: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    hideOnClick: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
