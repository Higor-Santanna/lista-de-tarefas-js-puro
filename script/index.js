const botaoQueAlteraFundo = document.getElementById('claro-escuro');
const imagemDeFundo = document.querySelectorAll('.fundo-imagem');
const corDoLayout = document.querySelectorAll('.fundo-geral')

const botaoAdicionarTarefa = document.querySelectorAll(".botao-tarefa");
// const campoAdicionarTarefa = document.querySelectorAll("input[type='text']");
// console.log(campoAdicionarTarefa)

const campoAdicionarTarefaEscura = document.getElementById("campo-digitacao-tarefa-escuro");
const campoAdicionarTarefaClara = document.getElementById("campo-digitacao-tarefa-clara");
const listaDeTarefas = document.querySelectorAll('.lista-de-tarefas')


// CÓDIGO QUE ALTERA O FUNDO    
botaoQueAlteraFundo.addEventListener("click", () => {

    if (botaoQueAlteraFundo.checked === true) {
        removendoImagemDeFundo()

        imagemDeFundo[1].classList.toggle("ativado")
        corDoLayout[1].classList.toggle("selecionado")
    } else {
        removendoImagemDeFundo()
        corDoLayout[0].classList.toggle("selecionado")
        imagemDeFundo[0].classList.toggle("ativado");
    }
})


function removendoImagemDeFundo() {
    const classAtivado = document.querySelector('.ativado');
    const classSelecionado = document.querySelector('.selecionado')
    classAtivado.classList.remove("ativado")
    classSelecionado.classList.remove("selecionado")
}

/* CÓDIGO QUE ADICIONA UM ITEM NA LISTA */
const saveTodo = (text) => {
    listaDeTarefas.forEach(function (lista) {
        const containerTarefa = document.createElement("div");
        containerTarefa.classList.add("lista");

        const divCheckETarefa = document.createElement("div");

        const tarefa = document.createElement("a");
        tarefa.classList.add("tarefa");
        tarefa.innerText = text //adiciona o texto, ele recebe da função e atraves desta linha ele é adicionado na tela
        divCheckETarefa.appendChild(tarefa); // adiciona a tarefa dentro da div
        containerTarefa.appendChild(divCheckETarefa);//adiciona a divCheckETarefa dentro do containerTarefa

        const botaoExcluirTarefa = document.createElement("button");
        botaoExcluirTarefa.classList.add("botao-lixeira-tarefa");
        botaoExcluirTarefa.innerHTML = '<i class="fa-regular fa-trash-can"></i>' //adiciona o icone no botão
        containerTarefa.appendChild(botaoExcluirTarefa);

        lista.appendChild(containerTarefa);
    })
}

botaoAdicionarTarefa.forEach(function (button) {
    button.addEventListener("click", () => {

        // let inputValidado = campoAdicionarTarefa.value

        // campoAdicionarTarefa.forEach(function(input){
        //     input.value.trim();
        // })

        const inputTarefaClaro = campoAdicionarTarefaClara.value;
        const inputTarefaEscuro = campoAdicionarTarefaEscura.value;

        if (inputTarefaClaro !== "") {
            saveTodo(inputTarefaClaro)
        } else if (inputTarefaEscuro !== "") {
            console.log("funcionou B")
            saveTodo(inputTarefaEscuro)
        } else {
            alert("O campo está vazio, por favor adicione uma tarefa");
        }
    })
})
