let portifolios = []

// Carregar JSON Externo
function carregarPortifolios() {
    fetch('portifolios.json')
        .then(response => response.json())
        .then(data => {
            portifolios = data
            gerarListaPortifolios()
        })
        .catch(error => console.error('Erro ao carregar portifólios:', error))
}

// Gerar a Lista de Links
function gerarListaPortifolios() {
    const container = document.getElementById('listaPortifolios')
    container.innerHTML = "" // Limpar (caso recarregue)

    portifolios.forEach(p => {
        const div = document.createElement('div')
        div.className = 'portifolio'

        const link = document.createElement('a')
        link.href = p.link
        link.target = "_blank"
        link.innerText = p.nome

        div.appendChild(link)
        container.appendChild(div)
    })
}

// Função de Pesquisa
function pesquisarPortifolios(){
    var input = document.getElementById('pesquisaPortifolios').value.toLowerCase()
    var itens = document.getElementsByClassName('portifolio')

    for(var i = 0; i < itens.length; i++){
        var nome = itens[i].innerText.toLowerCase()

        if(input === ""){
            itens[i].style.display = "none"
        } else if(nome.includes(input)){
            itens[i].style.display = "block"
        } else {
            itens[i].style.display = "none"
        }
    }
}

// Inicialização
window.onload = function(){
    carregarPortifolios()
    document.getElementById('pesquisaPortifolios').addEventListener('keyup', pesquisarPortifolios)
}
