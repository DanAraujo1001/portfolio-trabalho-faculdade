const menuIcon = document.querySelector(".header-home-menu");
const navBar = document.querySelector(".nav-bar");

menuIcon.addEventListener('click', () => {
    if (navBar.classList.contains("active")) {
        navBar.classList.remove("active");
    } else {
        navBar.classList.add("active");
    };
})
