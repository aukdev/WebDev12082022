window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("nav__change", window.scrollY > 0);
});

//nav__menuMobile
document.querySelector(".nav_mobileButton").addEventListener("click", () => {
  document.querySelector(".nav__menu").classList.toggle("nav__menuMobile");
});
