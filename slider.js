// fav_coffee slider

let favCoffeeLeftButton = document.querySelector('.favourite_coffees button.left')
let favCoffeeRightButton = document.querySelector('.favourite_coffees button.right')
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
    sliderIndicators.map(a => a.classList.remove('active'))
    sliderIndicators[+activeCoffeeCard].classList.add('active')
    let direction = 'ltr'
    placeSlides(direction)
}

function previousSlide() {
    activeCoffeeCard--
    if(activeCoffeeCard < 0) {
        activeCoffeeCard = favCoffeeCards.length - 1
    }
    activeCoffeeCard = activeCoffeeCard % favCoffeeCards.length
    sliderIndicators.map(a => a.classList.remove('active'))
    sliderIndicators[+activeCoffeeCard].classList.add('active')
    let direction = 'rtl'
    placeSlides(direction)
}

function placeSlides(direction) {
    let right = (+activeCoffeeCard + 1) % favCoffeeCards.length
    let left = +activeCoffeeCard - 1
    if(left < 0) {
        left = favCoffeeCards.length - 1
    }
    console.log(direction)
    favCoffeeCards.map((a) => a.classList.remove('left'))
    favCoffeeCards.map((a) => a.classList.remove('right'))
    favCoffeeCards.map((a) => a.classList.add('hidden'))
    favCoffeeCards[activeCoffeeCard].classList.remove('hidden')
    direction != 'rtl' ? favCoffeeCards[left].classList.add('hidden'):favCoffeeCards[right].classList.add('hidden')
    favCoffeeCards[left].classList.add('left')
    favCoffeeCards[right].classList.add('right')
}

let touchstartX = 0
let touchendX = 0

function checkDirection() {
  if (touchendX < touchstartX) {
    nextSlide()
  }
  if (touchendX > touchstartX) {
    previousSlide()
  }
}

document.querySelector('.favourite_coffees').addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.querySelector('.favourite_coffees').addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})

function autoSlider() {
    let autoNextSlide = setInterval(nextSlide, 5 * 1000)
    favCoffeeCards.map(a => a.addEventListener("mouseenter", () => clearInterval(autoNextSlide)))
    favCoffeeCards.map(a => a.addEventListener("mouseout", () => autoNextSlide = setInterval(nextSlide, 5 * 1000)))
    favCoffeeRightButton.addEventListener('click', () => clearInterval(autoNextSlide))
    favCoffeeRightButton.addEventListener('click', () => autoNextSlide = setInterval(nextSlide, 5 * 1000))
    favCoffeeLeftButton.addEventListener('click', () => clearInterval(autoNextSlide))
    favCoffeeLeftButton.addEventListener('click', () => autoNextSlide = setInterval(nextSlide, 5 * 1000))
}

autoSlider()


