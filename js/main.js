const listaBotoes = document.querySelectorAll("[data-controle]") // selecionando os botões com o atributo data-controle
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

// criação de um laço de repetição que me informa se o botão é de somar ou subtrair.
/* há o emprego do hoisting nessa função, pois eu ainda não a declarei.

a função for each executa a função manipular dados em todos os elementos da listaBotoes

o primeiro parametro, diz respeito ao atributo data-controle

o segundo parâmetro, diz respeito à div pai dos elementos da listaBotoes
*/
listaBotoes.forEach( (elemento) => { 
    elemento.addEventListener("click", (evento) => {
        manipularDados(evento.target.dataset.controle, evento.target.parentNode) 
        atualizaEstatistica(evento.target.dataset.peca)
    })
})
// criação da função manipular dados
/*
define os parâmetros passados anteriormente como operação e controle
seleciona a peça pelo atributo data-contador
se o op = +, soma 
se = -, subtrai 
*/
function manipularDados(op, controle){
    const peca = controle.querySelector("[data-contador]")
    if(op === "-") {
        peca.value = Number(peca.value) - 1
    } else {
        peca.value = Number(peca.value) + 1
    }
}

function atualizaEstatistica(peca) {
    estatisticas.forEach( (elemento) =>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    } )

}