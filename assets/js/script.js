

function pokemonToHTML(pokemon){
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                  ${pokemon.types.map((type) => `<li class="type ${type}"> ${type} </li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}


const pokemonList = document.querySelector('#pokemonList')

function loadPokemon(offSet, limit){

    pokeApi.getPokemons(offSet, limit).then((pokemons = []) => { 
        
        const newHtml  = pokemons.map(pokemonToHTML).join(' ')
        pokemonList.innerHTML += newHtml

    })
}

const maxRecords = 905
const limit = 10
let offSet = 0


loadPokemon( offSet, limit)


const loadMoreButton = document.querySelector('#loadMoreButton')

loadMoreButton.addEventListener('click',() =>{
    offSet += limit
    const qtdRecordsWithNexPage = offSet + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offSet
        loadPokemon(offSet, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemon(offSet, limit)
    }
})