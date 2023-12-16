const items = JSON.parse(localStorage.getItem('arrItens'))

const ul = document.querySelector('#favoritos-lista-favoritos')

let htmlItens = ''

function addElements (item) {
    return `            
    <li>     
    <div class="favoritos-item">
        <img id = "loja__favoritos-icon" src=${item.icon} alt="Icone de favoritos">
        <img src=${item.livro} alt="Livro sobre apache kafka e spring boot da alura books">
    </div>

    <button class="favoritos-button">
        <img id="favoritos-button-sacola" src="./img/Compras.svg" alt="icone de sacola">
        </img> ${item.preco} </button>
    </li>
`
}

items.forEach(item => {
    htmlItens += addElements(item)
<<<<<<< Updated upstream
}
    )

    console.log({ul})
=======
})
    
>>>>>>> Stashed changes
ul.innerHTML = htmlItens
