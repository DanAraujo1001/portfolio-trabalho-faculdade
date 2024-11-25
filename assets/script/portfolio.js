
const imagemDoProjeto = document.querySelectorAll('.portfolio-item-imagem');
const conteudoDoProjeto = document.querySelectorAll('.portfolio-item-conteudo');


imagemDoProjeto.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.style.display = "none"; // Oculta o item clicado
        conteudoDoProjeto[index].style.display = "flex"; // Mostra o conteúdo correspondente
    })
})

conteudoDoProjeto.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.style.display = "none"; // Oculta o item clicado
        imagemDoProjeto[index].style.display = "block"; // Mostra o conteúdo correspondente
    })
})