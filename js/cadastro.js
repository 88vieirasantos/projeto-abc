// endereço da API json-server para Candidatos
let urlCandidatos = "http://localhost:3000/candidatos"

// Selecionando os campos no HTML
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoData = document.querySelector("#data");
const campoTelefone = document.querySelector("#telefone");
const campoEmail = document.querySelector("#email");
const campoVaga = document.querySelector("#vaga");

formulario.addEventListener("submit", function(event){
    event.preventDefault()//linha obrigatoria quando se trabalha com formulário e link no javascript
    let dados = {
        nome: campoNome.value,
        data: campoData.value,
        telefone: campoTelefone.value,
        email: campoEmail.value,
        vaga: campoVaga.selectedOptions[0].textContent
    }

    /* Transmissão dos dados para API (Técnica Ajax) - a função fetch acessa um API, um servidor */
    fetch(urlCandidatos, {
        method: "Post", //envio de dados
        body: JSON.stringify(dados), //converte os dados em json
        headers: {
            'Content-type' : 'application/json'
        }
    })
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados);
        alert("Dados enviados com sucesso!")
    })
})

/* Ativação da máscara para o telefone (usando jQuery) */
$(campoTelefone).mask("(00) 00000-0000")
