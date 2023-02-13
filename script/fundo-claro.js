const campoAdicionarTarefaClara = document.getElementById("campo-digitacao-tarefa-clara");
const botaoTarefaClara = document.getElementById("botao-claro-adicionar");
const listaDeTarefasClara = document.getElementById("lista-de-terefas-clara");

const saveTodoClaro = (text) => {
    const containerTarefa = document.createElement("div");
    containerTarefa.classList.add("lista");
    containerTarefa.classList.add("lista-clara")

    const divCheckETarefa = document.createElement("div");
    divCheckETarefa.classList.add("pai-do-check-tarefa");
    
    const check = document.createElement("div");
    check.classList.add("checkbox");
    const tarefa = document.createElement("a");
    tarefa.classList.add("tarefa");
    tarefa.innerText = text //adiciona o texto, ele recebe da função e atraves desta linha ele é adicionado na tela
    divCheckETarefa.appendChild(check);
    divCheckETarefa.appendChild(tarefa); // adiciona a tarefa dentro da div
    containerTarefa.appendChild(divCheckETarefa);//adiciona a divCheckETarefa dentro do containerTarefa

    const botaoExcluirTarefa = document.createElement("button");
    botaoExcluirTarefa.classList.add("botao-lixeira-tarefa");
    botaoExcluirTarefa.innerHTML = '<i class="fa-regular fa-trash-can"></i>' //adiciona o icone no botão
    containerTarefa.appendChild(botaoExcluirTarefa);

    listaDeTarefasClara.appendChild(containerTarefa);

}

botaoTarefaClara.addEventListener("click", () => {
    const inputTarefaClaro = campoAdicionarTarefaClara.value.trim();

    if (inputTarefaClaro !== "") {
        saveTodoClaro(inputTarefaClaro)
    } else {
        alert("O campo está vazio, por favor adicione uma tarefa");
    }
})