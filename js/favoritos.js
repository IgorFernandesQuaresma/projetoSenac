const sectionFavoritos = document.querySelector('.lista-menu')
const ulFavoritos = document.querySelector('#favoritos-lista')


const itens = [
    { icon: './img/Favoritos.svg', livro: './img/ApacheKafka.svg', preco: 'R$ 10,00' },
    { icon: './img/Favoritos.svg', livro: './img/Liderança.svg', preco: 'R$ 10,00' },
    { icon: './img/Favoritos.svg', livro: './img/ApacheKafka.svg', preco: 'R$ 10,00' },
    { icon: './img/Favoritos.svg', livro: './img/Javascript.svg', preco: 'R$ 10,00' },
  ];

  // Função para criar um item da loja
  function criarItemLoja(itens) {
    const li = document.createElement('li');
    const divLojaItem = document.createElement('div');
    divLojaItem.classList.add = ('favoritos-item');

    const imgLojaIcon = document.createElement('img');
    imgLojaIcon.id = 'loja__favoritos-icon';
    imgLojaIcon.src = itens.icon;
    imgLojaIcon.alt = 'Icone de favoritos';

    const imgLivro = document.createElement('img');
    imgLivro.src = itens.livro;
    imgLivro.alt = 'Imagem do livro';

    const buttonFavoritos = document.createElement('button');
    buttonFavoritos.className = 'favoritos-button';

    const imgButtonSacola = document.createElement('img');
    imgButtonSacola.id = 'favoritos-button-sacola';
    imgButtonSacola.src = './img/Compras.svg';
    imgButtonSacola.alt = 'Ícone de sacola';

    const precoTexto = document.createTextNode(itens.preco);

    // Mostrar a estrutura do item, pega a div e coloca a imagem do icone e do livro
    divLojaItem.appendChild(imgLojaIcon);
    divLojaItem.appendChild(imgLivro);
    //add a div a linha
    li.appendChild(divLojaItem);

    //faz o mesmo que o acima
    buttonFavoritos.appendChild(imgButtonSacola);
    buttonFavoritos.appendChild(precoTexto)
    li.appendChild(buttonFavoritos);

    //retorna o item pronto 
    return li;
  };


  //fazer o loop de forma dinamica e colocar na tela
  itens.forEach(itens => {
    const itemFavoritos = criarItemLoja(itens);
    ulFavoritos.appendChild(itemFavoritos);

});




