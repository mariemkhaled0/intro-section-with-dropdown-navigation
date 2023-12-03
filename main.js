burgerIcon = document.querySelector(".mobile-menu-btn");
closeMenu = document.querySelector(".close-menu");
menu = document.querySelector(".mobile-menu");
overflow = document.querySelector(".overflow");
mobileLinks = document.querySelectorAll(".mobile-links li");
subLinks = document.querySelectorAll(".mobile-sub");

/*arrowDown = document.querySelectorAll(".arrow-down");*/
arrowUp = document.querySelector(".arrow-up");
links = document.querySelectorAll(".nav-link");

burgerIcon.addEventListener("click", () => {
  const icon = document.querySelector(".mobile-menu-btn img");
  menu.classList.toggle("show");
  overflow.classList.toggle("active");
});

closeMenu.addEventListener("click", function () {
  menu.classList.remove("show");
  overflow.classList.remove("active");
});

links.forEach(function (link) {
  const dropDpwn = link.querySelector(".dropdown-list");
  const arrow = link.querySelector(".arrow-down");
  link.addEventListener("click", function () {
    link.classList.toggle("active");
    dropDpwn.classList.toggle("active");
    if (link.classList.contains("active")) {
      arrow.src = "./images/icon-arrow-up.svg";
    } else arrow.src = "./images/icon-arrow-down.svg";
  });
});
mobileLinks.forEach((link) => {
  const subMenu = link.querySelector(".mobile-sub");
  link.addEventListener("click", function () {
    subMenu.classList.toggle("active2");
  });
});
