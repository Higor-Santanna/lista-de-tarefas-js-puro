const botaoQueAlteraFundo = document.getElementById('claro-escuro');
const imagemDeFundo = document.querySelectorAll('.fundo-imagem');
const corDoLayout = document.querySelectorAll('.fundo-geral');

// CÓDIGO QUE ALTERA O FUNDO    
botaoQueAlteraFundo.addEventListener("click", () => {

    if (botaoQueAlteraFundo.checked === true) {
        removendoImagemDeFundo()

        imagemDeFundo[1].classList.toggle("ativado")
        corDoLayout[1].classList.toggle("selecionado")
    } else {
        removendoImagemDeFundo();
        corDoLayout[0].classList.toggle("selecionado");
        imagemDeFundo[0].classList.toggle("ativado");
    }
})


function removendoImagemDeFundo() {
    const classAtivado = document.querySelector('.ativado');
    const classSelecionado = document.querySelector('.selecionado')
    classAtivado.classList.remove("ativado")
    classSelecionado.classList.remove("selecionado")
}

/* CÓDIGO QUE CHECA A TAREFA */

let divTarefaECheck = document.querySelectorAll(".pai-do-check-tarefa.check");

divTarefaECheck.forEach((tarefa) => {
    tarefa.addEventListener("click", () => {
        tarefa.classList.toggle("checada")
    })
})

