'use strict'

const pegarDadosApi = async function(){
    const url = `https://projeto-api-zapzap.onrender.com/v1/allUsers`
    const response = await fetch(url)

    const dados = await response.json()

    console.log(dados)
    return dados
}

const criarContatosApi = async function(dados){
    const contato = document.createElement('div')
    const perfil = document.createElement('img')
    const nome = document.createElement('p')

    if(dados.image == '26999999963.png'){
        perfil.src = './img/farcuad.png'
    }

    nome.src = dados.name

    contato.append(perfil, nome)
    contato.classList.add('contato')
    perfil.classList.add('perfil-contato')
    nome.classList.add('nome-contato')
}

criarContatosApi()