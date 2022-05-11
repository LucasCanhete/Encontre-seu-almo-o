let pratosCadastrados = []


function cadastrar() {

    let novoPrato = {
        descricao: document.getElementById("inputDescricao").value,
        valor: document.getElementById("inputValor").valueAsNumber,
        url: document.getElementById("inputURL").value,
        gratis: document.getElementById("inputEntregaGratis").checked

    }
    document.getElementById("inputDescricao").value = ""
    document.getElementById("inputValor").value = ""
    document.getElementById("inputURL").value = ""
    document.getElementById("inputEntregaGratis").checked = false

    pratosCadastrados.push(novoPrato)
    listarPratos(pratosCadastrados)


}

function listarPratos(lista) {
    let sectionLista = document.getElementById("lista")
    sectionLista.innerHTML = ""
    for (let i = 0; lista.length; i++) {
        sectionLista.innerHTML += `
        <div> 
        <img src="${lista[i].url}">
        <h3>${lista[i].descricao}</h3>
        <p>${lista[i].valor}</p> 
        <span style="display: ${lista[i].gratis ? "block" : "none"}">Entrega grátis</span>
        </div>
        `
    }


}
function filtrar() {

    let pratoFiltro = document.getElementById("campoBusca").value
    let resultadoFiltro = pratosCadastrados.filter((el) => {
        return el.descricao.toUpperCase().includes(pratoFiltro.toUpperCase())
    })


    let pratoFiltroDois = document.getElementById("filtroEntregaGratis").checked
    if (pratoFiltroDois == true) {
        resultadoFiltro = resultadoFiltro.filter((el) => {
            return el.gratis == true
        })
    }


    let valorMaximo = document.getElementById("teto").valueAsNumber
    if(valorMaximo > 0) {
        resultadoFiltro = resultadoFiltro.filter((el) => {
            return el.valor <= valorMaximo
    })

    }
    

    listarPratos(resultadoFiltro)
}


function limparPratos() {
    listarPratos(pratosCadastrados)
}

