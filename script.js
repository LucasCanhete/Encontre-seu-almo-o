let tarefas = []

function adicionarTarefa() {
    let inputTarefa = document.getElementById("inputTarefa")
    let novaTarefa = inputTarefa.value
    tarefas.push(novaTarefa)
    alert("Tarefa adicionada com sucesso")
    inputTarefa.value = ""
    inputTarefa.focus()
    listarTarefas(tarefas)
}

function listarTarefas(listaTarefas) {
    let divLista = document.getElementById("lista")
    divLista.innerHTML = ""
    for(let i=0; i < listaTarefas.length; i++) {
        divLista.innerHTML += `
            <div>${listaTarefas[i]}</div>
        `
    }
}

function buscar() {
    let textoBusca = document.getElementById("inputTarefa").value
    let resultadoFiltro = tarefas.filter((el) => {
        return el.includes(textoBusca)
    })
    listarTarefas(resultadoFiltro)
}

function limparFiltro() {
    listarTarefas(tarefas)
}

