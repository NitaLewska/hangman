let categoriesButtons = document.querySelectorAll('.categories_button')
Array.from(categoriesButtons).map((a, i) => a.addEventListener('click', changeCategory(i)))
let menuCards = document.querySelectorAll('.menu_card')
let coffeeCards = document.querySelectorAll('.menu_coffee')
let teaCards = document.querySelectorAll('.menu_tea')
let dessertCards = document.querySelectorAll('.menu_dessert')
let loadButton = document.querySelector(".load_more")

let currentCategory = 0
changeCategory(0)()


window.addEventListener('resize', function() {
    changeCategory(currentCategory)()
}, true);

function changeCategory(i) {
    return function() {
        currentCategory = i
        Array.from(categoriesButtons).map(a => a.classList.remove('active'))
        Array.from(categoriesButtons)[i].classList.add('active')
        Array.from(menuCards).map(a => a.classList.add('hidden'))
        if(i === 0) {
            Array.from(coffeeCards).map(a => a.classList.remove('hidden'))
            if (window.screen.width < 769) {
                Array.from(coffeeCards).slice(4).map(a => a.classList.add('hidden'))
                        if(Array.from(coffeeCards).length < 5){
            loadButton.classList.add('hidden')
        } else {
            loadButton.classList.remove('hidden')
        }
            }
        } else if (i === 1) {
            Array.from(teaCards).map(a => a.classList.remove('hidden'))
            if (window.screen.width < 769) {
                Array.from(teaCards).slice(4).map(a => a.classList.add('hidden'))
            if(Array.from(teaCards).length < 5){
            loadButton.classList.add('hidden')
        } else {
            loadButton.classList.remove('hidden')
        }
            }
        } else {
            Array.from(dessertCards).map(a => a.classList.remove('hidden'))
            if (window.screen.width < 769) {
                Array.from(dessertCards).slice(4).map(a => a.classList.add('hidden'))
                        if(Array.from(dessertCards).length < 5){
            loadButton.classList.add('hidden')
        } else {
            loadButton.classList.remove('hidden')
        }
            }
        }
    }
}


loadButton.addEventListener('click', loadMore)

function loadMore() {
    Array.from(menuCards).map(a => a.classList.add('hidden'))
    let section = 0
    if (Array.from(categoriesButtons)[1].classList.contains('active')) {
        section = 1
    }
    if (Array.from(categoriesButtons)[2].classList.contains('active')) {
        section = 2
    }
    if(section === 0) {
        Array.from(coffeeCards).map(a => a.classList.remove('hidden'))
    } else if (section === 1) {
        Array.from(teaCards).map(a => a.classList.remove('hidden'))
    } else if (section === 2){
        Array.from(dessertCards).map(a => a.classList.remove('hidden'))
    }
    loadButton.classList.add('hidden')
}