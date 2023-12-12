let navbar = document.querySelector("header>nav")

let burgerButton = document.querySelector('.menu_burger_button')
let menuLink = document.querySelector('.menu_button')
burgerButton.addEventListener('click', toggleNav)

function toggleNav() {
    navbar.classList.toggle("hidden")
    menuLink.classList.toggle("hidden")
    burgerButton.classList.toggle('hidden')
    navbar.classList.contains("hidden") ?
        (document.body.style.overflowY = "") : (document.body.style.overflowY = "hidden")
    navbar.classList.contains("hidden") ?
        (document.body.style.maxHeight = "100vh") : (document.body.style.maxHeight = "")
}

let navLinks = document.querySelectorAll('nav a')
Array.from(navLinks).map(a => a.addEventListener('click', toggleNav))

alert("Извините, пожалуйста, если возможно - проверьте мою работу завтра вечером, доделываю модалку и слайдер (пишу в 3 утра 12.12)")