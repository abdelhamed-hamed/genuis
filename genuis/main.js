let image = document.querySelectorAll("img");
notFoundIMage();
function notFoundIMage() {
  image.forEach(function (el) {
    el.setAttribute("alt", "NOT_FOUND");
  });
}
