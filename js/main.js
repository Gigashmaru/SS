document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("hamburger");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
})