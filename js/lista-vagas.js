// endereço da API json-server
let url = "http://localhost:3000/vagas"

//
const selectVagas = document.querySelector("#vaga")

/* Ajax (técnica de acesso a dados de API) */

// 1) acessamos a url da API em que estão os dados
fetch(url)

// 2) então colete a resposta do servidor no formato json
.then( resposta => resposta.json() )

// 3) capture os dados da resposta, e faça o que quiser
.then( dados => {
    
    selectVagas.innerHTML = "<option></option>"
    
    for(let vaga of dados){
        let opcao = document.createElement('option')
        opcao.textContent = vaga.titulo
        opcao.value = vaga.id
        selectVagas.appendChild(opcao)
    }
})