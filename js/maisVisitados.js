document.addEventListener('DOMContentLoaded', function () {
    // Array para armazenar os tópicos visitados recentemente
    let tópicosVisitados = [];
  
    // Função para adicionar um tópico à lista de tópicos visitados recentemente
    function adicionarTópico(tópico) {
      // Verifica se o tópico já está na lista
      if (!tópicosVisitados.includes(tópico)) {
        tópicosVisitados.push(tópico);
  
        // Atualiza a exibição da lista de tópicos na página
        atualizarListaTópicos();
      }
    }
  
    // Função para atualizar a exibição da lista de tópicos na página
    function atualizarListaTópicos() {
      const listaTópicos = document.querySelector('.tópicos__lista');
  
      // Limpa a lista antes de adicionar os novos tópicos
      listaTópicos.innerHTML = '';
  
      // Adiciona cada tópico à lista
      tópicosVisitados.forEach((tópico) => {
        const itemTópico = document.createElement('li');
        const linkTópico = document.createElement('a');
  
        // Defina a URL adequada para o tópico, se necessário
        linkTópico.href = '#';
        linkTópico.textContent = tópico;
  
        itemTópico.appendChild(linkTópico);
        listaTópicos.appendChild(itemTópico);
      });
    }
  
    // Limpa a lista ao iniciar a página
    atualizarListaTópicos();
  
    // Evento de clique nas categorias para adicionar tópicos
    const categorias = document.querySelectorAll('.lista-menu__item a');
    categorias.forEach((categoria) => {
      categoria.addEventListener('click', function (event) {
        // Evita que o link da categoria seja seguido
        event.preventDefault();
  
        // Obtém o texto do tópico a partir do conteúdo do link
        const tópico = categoria.textContent.trim();
  
        // Adiciona o tópico à lista de tópicos visitados recentemente
        adicionarTópico(tópico);
      });
    });
  });
  // ...
  
