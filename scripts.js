let navbar = document.querySelector("header>nav")

let burgerButton = document.querySelector('.menu_burger_button')
let menuLink = document.querySelector('.menu_button')
burgerButton.addEventListener('click', toggleNav)

function toggleNav() {
    if (window.screen.width < 769) {
        navbar.classList.toggle("hidden")
        menuLink.classList.toggle("hidden")
        burgerButton.classList.toggle('hidden')
        navbar.classList.contains("hidden") ?
            (document.body.style.overflowY = "") : (document.body.style.overflowY = "hidden")
        navbar.classList.contains("hidden") ?
            (document.body.style.maxHeight = "") : (document.body.style.maxHeight = "100vh")
    }

}

let navLinks = document.querySelectorAll('nav a')
Array.from(navLinks).map(a => a.addEventListener('click', toggleNav))

// alert("12/12/23 - 17.30 МСК, почти доделала слайдер, начала модалку")