let bar = document.getElementById("bars");
let open = document.querySelector(".bar-open");
let close = document.querySelector(".bar-close");
let menu = document.getElementById("menu");
let up = document.getElementById("up");
let headerPos = document.querySelector("header");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let copyRight = document.getElementById("copyright");
// Change NavBar Color
navChangeBack();
// Nav Fixed
navAppear();
// When Click Menu Open
menuClickOpen();
// When Click Menu
menuClickClose();
// When Down 500 Appear Up Button
upButon();
// seconds counter
counter();
// Swipper
swiperJS();
// CopyRight Year
copyRightYear();
function navChangeBack() {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 300) {
      headerPos.classList.add("sticky");
    } else headerPos.classList.remove("sticky");
  });
}

function navAppear() {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 300) {
      headerPos.style.cssText = `position: fixed !important;`;
    } else headerPos.style.cssText = `position: absolute !important;`;
  });
}

function menuClickOpen() {
  open.addEventListener("click", function (e) {
    menu.style.cssText = ` top: 100%;`;
    open.style.cssText = `display:none;
    `;
    close.style.cssText = `display:revert;`;
  });
}

function menuClickClose() {
  close.addEventListener("click", function (e) {
    menu.style.cssText = `;
    opacity:0; 

    `;
    open.style.cssText = `@media(max-width:990px){
      display:revert;
    }`;
    close.style.cssText = `display:none;`;
  });
}

function upButon() {
  window.onscroll = function () {
    if (window.scrollY >= 150) {
      up.style.cssText = "display:block;";
      up.onclick = function () {
        window.scrollTo(0, 0);
      };
    } else up.style.cssText = "display:none;";
  };
}
function counter() {
  if (localStorage.length > 0) {
    hours.innerHTML = localStorage.hours;
    minutes.innerHTML = localStorage.minutes;
    seconds.innerHTML = localStorage.seconds;
  }
  let count = setInterval(conditonCount, 1000);
  // Function To Count Seconds
  function conditonCount() {
    if (parseInt(seconds.innerHTML) < 59) {
      parseInt(seconds.innerHTML++);
    } else {
      minutes.innerHTML++;
      seconds.innerHTML = -1;
      parseInt(seconds.innerHTML++);
    }
    // To Change Hours
    if (minutes.innerHTML == 60) {
      hours.innerHTML++;
      minutes.innerHTML = 0;
    }
    localStorage.setItem("hours", hours.innerHTML);
    localStorage.setItem("minutes", minutes.innerHTML);
    localStorage.setItem("seconds", seconds.innerHTML);
  }
  // Function To Change Minutes
}
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
function copyRightYear() {
  let x = new Date();
  copyRight.innerHTML = `${x.getFullYear()}`;
}

export { copyRightYear };
