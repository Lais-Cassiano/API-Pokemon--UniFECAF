/**************************************************************************************************
 * Objetivo: Criar a comunicação entre a API dos Pokémons e a página HTML 
 * Data: 02/05/2026
 * Autor: Lais S c
 * Versão: 1.0
 * Git: 
 * URL da API: https://pokeapi.co/api/v2/pokemon?offset=0&limit=20
 *************************************************************************************************/


const setCreateCard = async function(listaPokemons){
    let divContainerCards = document.getElementById('container_cards')

    listaPokemons.results.forEach(async function(pokemon){

        /* Segundo fetch para pegar url especifica de cada pokemon */
        let responsePokemon = await fetch(pokemon.url)

        let dadosPokemon = await responsePokemon.json()

        /* Criando os elementos no HTML */
        let divCard         = document.createElement('div')
        let divCardTopo     = document.createElement('div')
        let h3CardNome      = document.createElement('h3')
        let imgCardIcon     = document.createElement('img')
        let imgCardImagem   = document.createElement('img')
        let divCardTipos    = document.createElement('div')

        /* Adicionando atributos aos elementos HTML */
        divCard.setAttribute('class', 'card')
        divCardTopo.setAttribute('class', 'card-topo')
        h3CardNome.setAttribute('class', 'card-nome')
        imgCardIcon.setAttribute('class', 'card-icon')
        imgCardIcon.setAttribute('src',  dadosPokemon.sprites.other.showdown.front_default)
        imgCardIcon.setAttribute('alt', 'Imagem de pokémon')
        imgCardImagem.setAttribute('class', 'card-imagem')
        imgCardImagem.setAttribute('src', dadosPokemon.sprites.other['official-artwork'].front_default)
        imgCardImagem.setAttribute('alt', 'Imagem de Pokémon')
        divCardTipos.setAttribute('class', 'card-tipos')

        /* Textos dos elementos HTML */
        h3CardNome.innerText = pokemon.name

        /* Fetch e criação de span dos tipos (água, fogo, planta etc) de cada pokemon a partir da url especifica */
        dadosPokemon.types.forEach(function(itemTipo){

            let spanTipo = document.createElement('span')

            spanTipo.setAttribute(
                'class',
                `tipo ${itemTipo.type.name}`
            )

            spanTipo.innerText = itemTipo.type.name

            divCardTipos.appendChild(spanTipo)

        })

        /* Colocando elemento do HTML que pertence a outro elemento (pai e filho) */
        divContainerCards.appendChild(divCard)
        divCard.appendChild(divCardTopo)
        divCardTopo.appendChild(h3CardNome)
        divCardTopo.appendChild(imgCardIcon)
        divCard.appendChild(imgCardImagem)
        divCard.appendChild(divCardTipos)

    })
}


const getDadosPokemonAPI = async function(){
    let url = 'https://pokeapi.co/api/v2/pokemon'

    let response = await fetch(url)

    let dadosLista = await response.json()

    setCreateCard(dadosLista)
    
}


window.addEventListener('load', function(){
    
    getDadosPokemonAPI()
})