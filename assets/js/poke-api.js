

const pokeApi = {}


function pokeApiDetailToPokemon(pokeDetail){
    const pokemon= new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.number = pokeDetail.id

    const types = pokeDetail.types.map(typeSlot => typeSlot.type.name)
    const type = types[0]

    pokemon.types = types
    pokemon.type = type


    pokemon.photo = pokeDetail.sprites.other.home.front_default

    return pokemon
}


pokeApi.getPokemonDetail = pokemon => {
    return fetch(pokemon.url)
        .then(res => res.json())
        .then(pokeApiDetailToPokemon)

}

pokeApi.getPokemons = (offSet = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`

    return fetch(url)  
        .then(res => res.json())
        .then(res => res.results)
        .then(pokemons => pokemons.map(pokeApi.getPokemonDetail))

        .then(detailRequest => Promise.all(detailRequest))
        .then(pokemonsDetails => pokemonsDetails)
        .catch(err => console.log(err))  
}
