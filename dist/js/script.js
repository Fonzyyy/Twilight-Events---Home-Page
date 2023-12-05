const burgerBtn = document.querySelector(".burger-button");
const headerNav = document.querySelector(".header-nav");
burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("open")
    headerNav.classList.toggle("open")
})

const services = document.querySelector(".services");
services.addEventListener("click", () => {
    services.nextElementSibling.classList.toggle("open");
    services.querySelector(".chevron").classList.toggle("open");
})