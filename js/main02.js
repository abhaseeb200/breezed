const hamburger02 = document.querySelector(".hamburger02");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger02.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger02.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger02.classList.remove("active");
    navMenu.classList.remove("active");
}