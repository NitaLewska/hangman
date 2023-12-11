// fav_coffee slider

let favCoffeeLeftButton = document.querySelector('.favourite_coffees .left')
let favCoffeeRightButton = document.querySelector('.favourite_coffees .right')
let favCoffeeCards = Array.from(document.querySelectorAll(".fav_coffee_card"))

let activeCoffeeCard = 0

favCoffeeRightButton.addEventListener('click', function () {
    console.log(1, activeCoffeeCard)
    activeCoffeeCard++
    activeCoffeeCard = activeCoffeeCard % favCoffeeCards.length

    console.log(1, activeCoffeeCard, favCoffeeCards, favCoffeeCards[activeCoffeeCard])
    favCoffeeCards.map((a) => {
        a.classList.remove('active')
        a.classList.add('hidden')
    })
    favCoffeeCards[+activeCoffeeCard].classList.remove('hidden')
    favCoffeeCards[+activeCoffeeCard].classList.add('active')
})

favCoffeeLeftButton.addEventListener('click', function () {
    console.log(1, activeCoffeeCard)
    activeCoffeeCard--
    if(activeCoffeeCard < 0) {
        activeCoffeeCard = favCoffeeCards.length - 1
    }
    activeCoffeeCard = activeCoffeeCard % favCoffeeCards.length

    console.log(1, activeCoffeeCard, favCoffeeCards, favCoffeeCards[activeCoffeeCard])
    favCoffeeCards.map((a) => {
        a.classList.remove('active')
        a.classList.add('hidden')
    })
    favCoffeeCards[+activeCoffeeCard].classList.remove('hidden')
    favCoffeeCards[+activeCoffeeCard].classList.add('active')
})

