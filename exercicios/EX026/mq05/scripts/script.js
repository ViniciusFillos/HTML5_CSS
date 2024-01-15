function burger() {

    let itens = document.querySelector(`menu`)
    
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function widthChange() {

    let itens = document.querySelector(`menu`)

    if (window.innerWidth > 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}