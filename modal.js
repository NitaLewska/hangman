Array.from(menuCards).map(a => a.addEventListener('click', openModal))
let modal = document.querySelector('.modal')
let modalForm = document.querySelector('.modal form')


function openModal(e) {
    let scrolled = window.scrollY
    let modalHeading = Array.from(this.children)[1].innerHTML
    let modalDescription = Array.from(this.children)[2].innerHTML
    let modalPrice = Array.from(this.children)[3].innerHTML

    console.log(Array.from(this.children)[0].innerHTML, modalHeading, modalDescription)

    document.querySelector('.modal form h3').innerHTML = modalHeading
    document.querySelector('.modal form .price').innerHTML = modalPrice
    document.querySelector('.modal form .modal_image_placeholder').innerHTML = Array.from(this.children)[0].innerHTML
    modal.classList.add('active')
    document.body.style.overflowY = "hidden"
    modal.style.top = `${scrolled}px`
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrolled}px`;
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
        window.scrollBy({
            behaviour: "instant",
            left: 0,
            top: parseInt(scrolled || '0') * -1,
        })
    }
}