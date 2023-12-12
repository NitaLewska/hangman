Array.from(menuCards).map(a => a.addEventListener('click', openModal))
let modal = document.querySelector('.modal')
let modalForm = document.querySelector('.modal form')
let modalRadio = document.querySelectorAll('.modal_radio')
let basePrice = 0

function openModal(e) {
    let scrolled = window.scrollY
    console.log(this)
    let modalHeading = Array.from(this.children)[1].innerHTML
    let modalDescription = Array.from(this.children)[2].innerHTML
    let modalPrice = Array.from(this.children)[3].innerHTML
    basePrice = +modalPrice.split('').slice(1).join('')
    console.log(basePrice)
    document.querySelector('.modal form h3').innerHTML = modalHeading
    document.querySelector('.modal form .price span').innerHTML = modalPrice
    document.querySelector('.modal form .description').innerHTML = modalDescription
    document.querySelector('.modal form .modal_image_placeholder').innerHTML = Array.from(this.children)[0].innerHTML
    modal.classList.add('active')
    document.body.style.overflowY = "hidden"
    modal.style.top = `${scrolled}px`
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrolled}px`;

    Array.from(modalRadio).map(a => a.classList.add('hidden'))
    console.log(currentCategory)
    if (currentCategory == 0) {
        document.querySelector('.coffee_additives').classList.remove('hidden')
        document.querySelector('.coffee_sizes').classList.remove('hidden')
    }
    if (currentCategory == 1) {
        document.querySelector('.tea_additives').classList.remove('hidden')
        document.querySelector('.tea_sizes').classList.remove('hidden')
    }
    if (currentCategory == 2) {
        document.querySelector('.dessert_additives').classList.remove('hidden')
        document.querySelector('.dessert_sizes').classList.remove('hidden')
    }
}

modal.addEventListener('click', closeModal)
modalForm.addEventListener('click', closeModal)

function closeModal(e) {
    let scrolled = document.body.style.top
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('active')
        document.body.style.overflowY = ""
        document.body.style.maxHeight = ""
        document.body.style.position = '';
        changeCategory(currentCategory)
        window.scrollBy({
            behaviour: "instant",
            left: 0,
            top: parseInt(scrolled || '0') * -1,
        })
    }
}

document.querySelector('.modal button').addEventListener('click', (e) => {
    e.preventDefault()
    let scrolled = document.body.style.top
    modal.classList.remove('active')
    document.body.style.overflowY = ""
    document.body.style.maxHeight = ""
    document.body.style.position = '';
    changeCategory(currentCategory)
    window.scrollBy({
        behaviour: "instant",
        left: 0,
        top: parseInt(scrolled || '0') * -1,
    })
    Array.from(coffeeSizes).map(a => a.checked = false)
    Array.from(teaSizes).map(a => a.checked = false)
    Array.from(dessertSizes).map(a => a.checked = false)
    Array.from(coffeeAdds).map(a => a.checked = false)
    Array.from(teaAdds).map(a => a.checked = false)
    Array.from(dessertAdds).map(a => a.checked = false)
    Array.from(coffeeSizes)[0].checked = true
    Array.from(teaSizes)[0].checked = true
    Array.from(dessertSizes)[0].checked = true
})


let coffeeSizes = document.querySelectorAll("input[type=radio][name=coffee_size]")
let teaSizes = document.querySelectorAll("input[type=radio][name=tea_size]")
let dessertSizes = document.querySelectorAll("input[type=radio][name=dessert_size]")
let coffeeAdds = document.querySelectorAll("input[type=checkbox][name=coffee_add]")
let teaAdds = document.querySelectorAll("input[type=checkbox][name=tea_add]")
let dessertAdds = document.querySelectorAll("input[type=checkbox][name=dessert_add]")

Array.from(coffeeSizes).map(a => a.addEventListener('change', updatePrice))
Array.from(teaSizes).map(a => a.addEventListener('change', updatePrice))
Array.from(dessertSizes).map(a => a.addEventListener('change', updatePrice))
Array.from(coffeeAdds).map(a => a.addEventListener('change', updatePrice))
Array.from(teaAdds).map(a => a.addEventListener('change', updatePrice))
Array.from(dessertAdds).map(a => a.addEventListener('change', updatePrice))

function updatePrice() {
    let newPrice = basePrice
    if (currentCategory == 0) {
        if(document.querySelector('input[name="coffee_size"]:checked').value === 'coffee_size_m') {
            newPrice+=0.5
        }
        if(document.querySelector('input[name="coffee_size"]:checked').value === 'coffee_size_l') {
            newPrice+=1
        }
        newPrice+=Array.from(document.querySelectorAll('input[name="coffee_add"]:checked')).length * 0.5
    }
    if (currentCategory == 1) {
        if(document.querySelector('input[name="tea_size"]:checked').value === 'tea_size_m') {
            newPrice+=0.5
        }
        if(document.querySelector('input[name="tea_size"]:checked').value === 'tea_size_l') {
            newPrice+=1
        }
        newPrice+=Array.from(document.querySelectorAll('input[name="tea_add"]:checked')).length * 0.5
    }
    if (currentCategory == 2) {
        if(document.querySelector('input[name="dessert_size"]:checked').value === 'dessert_size_m') {
            newPrice+=0.5
        }
        if(document.querySelector('input[name="dessert_size"]:checked').value === 'dessert_size_l') {
            newPrice+=1
        }
        newPrice+=Array.from(document.querySelectorAll('input[name="dessert_add"]:checked')).length * 0.5
    }

    document.querySelector('.modal form .price span').innerHTML = newPrice % 1 === 0 ?  '$' + newPrice + '.00' :  '$' + newPrice + '0'
}
