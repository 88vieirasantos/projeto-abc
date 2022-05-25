/*  Exemplos gerais de jQuery */

const titulo = $('h1')
console.log(titulo)

/* textContente e innerHtml (javascript) */

/* text() e html() (jquery) */
titulo.text('Relação de Candidatos')

/* Script para carregar a lista de candidatos da API */

let urlCandidatos = 'http://localhost:3000/candidatos';
const botao = $('#carregar');
const lista = $('#lista');

botao.on('click', function(){
    $.ajax({
        url: urlCandidatos, 
        dataType: 'json',
        method: 'GET',
        success: function(resposta){
            lista.html("") // deixando a lista vazia inicialmente
            /* loop $.each */
            $.each(resposta, function(indice, conteudo){
                    console.log(indice)
                    console.log(conteudo)

            lista.append(
                `<li class="list-group-item">${conteudo.nome}</li>`
            )
            })
        }
    })
})
