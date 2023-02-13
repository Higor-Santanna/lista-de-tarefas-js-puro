const campoAdicionarTarefaEscura = document.getElementById("campo-digitacao-tarefa-escura");
const botaoTarefaEscura = document.getElementById("botao-escuro-adicionar");
const listaDeTarefasEscura = document.getElementById("lista-de-terefas-escura");

const saveTodoEscuro = (text) => {
    const containerTarefa = document.createElement("div");
    containerTarefa.classList.add("lista");
    containerTarefa.classList.add("lista-escura")

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

    listaDeTarefasEscura.appendChild(containerTarefa);
}


botaoTarefaEscura.addEventListener("click", () => {
    const inputTarefaEscuro = campoAdicionarTarefaEscura.value.trim();

    if (inputTarefaEscuro !== "") {
        saveTodoEscuro(inputTarefaEscuro)
    } else {
        alert("O campo está vazio, por favor adicione uma tarefa");
    }
})