// fav_coffee slider

let favCoffeeLeftButton = document.querySelector('.favourite_coffees .left')
let favCoffeeRightButton = document.querySelector('.favourite_coffees .right')
let favCoffeeCards = Array.from(document.querySelectorAll(".fav_coffee_card"))
let sliderIndicators = Array.from(document.querySelectorAll(".slider_indication"))

let activeCoffeeCard = 0

favCoffeeRightButton.addEventListener('click', nextSlide)

favCoffeeLeftButton.addEventListener('click', previousSlide)


window.addEventListener("keydown", (event) => {
    if (event.isComposing || event.key === 'ArrowRight') {
        event.preventDefault()
        nextSlide()
      return;
    }
    if (event.isComposing || event.key === 'ArrowLeft') {
        event.preventDefault()
        previousSlide()
      return;
    }
})

function nextSlide() {
    activeCoffeeCard++
    activeCoffeeCard = activeCoffeeCard % favCoffeeCards.length
    favCoffeeCards.map((a) => {
        a.classList.remove('active')
        a.classList.add('hidden')
    })
    favCoffeeCards[+activeCoffeeCard].classList.remove('hidden')
    favCoffeeCards[+activeCoffeeCard].classList.add('active')
    sliderIndicators.map(a => a.classList.remove('active'))
    sliderIndicators[+activeCoffeeCard].classList.add('active')
}

function previousSlide() {
    activeCoffeeCard--
    if(activeCoffeeCard < 0) {
        activeCoffeeCard = favCoffeeCards.length - 1
    }
    activeCoffeeCard = activeCoffeeCard % favCoffeeCards.length

    favCoffeeCards.map((a) => {
        a.classList.remove('active')
        a.classList.add('hidden')
    })
    favCoffeeCards[+activeCoffeeCard].classList.remove('hidden')
    favCoffeeCards[+activeCoffeeCard].classList.add('active')
    sliderIndicators.map(a => a.classList.remove('active'))
    sliderIndicators[+activeCoffeeCard].classList.add('active')
}

function autoSlider() {
    console.log(1)
    let autoNextSlide = setInterval(nextSlide, 5 * 1000)
    // favCoffeeCards.map(a => a.addEventListener("mouseenter", () => clearInterval(autoNextSlide)))
    // favCoffeeCards.map(a => a.addEventListener("mouseout", () => autoNextSlide = setInterval(nextSlide, 1 * 1000)))
}

autoSlider()
