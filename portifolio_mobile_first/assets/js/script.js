function mudouTamanho() {
    if (window.innerWidth >= 768) {
        //itens.style.display = 'inline-block'
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

//exibir o menu burger em tela menor
/*
Ao clicar no menu, bloqueado (block) caso esteja deve ser exibido (none) e vice versa
mas deixando assim oculto o menu com o "id=burger"
*/
function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}  