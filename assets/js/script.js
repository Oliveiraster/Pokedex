const pokemonList = document.querySelector('#pokemonList')
 const offSet = 0
 const limit = 10
 
 
 const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`

 fetch(url).then(res => res.json())
.then(res => res.results)
.then(listPokemon => {
    
    for (let i = 0; i < listPokemon.length; i++){
        const pokemon = listPokemon[i]
        pokemonList.innerHTML += pokemonToHTML(pokemon)
        
    }
})
.catch(err => console.log(err))
.finally(() =>console.log('Consult finish!'))

function pokemonToHTML(pokemon){
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

