const searchPokemon = document.querySelector('#searchPokemon')
const btnSearch = document.querySelector('#btnSearch')

const pokedex = document.querySelector('.pokedex')
const info = document.querySelector('#info')
const infoSearch = document.querySelector('.infoSearch')

btnSearch.addEventListener('click', async() => {
  
    const url = `https://pokeapi.co/api/v2/pokemon/${searchPokemon.value}`
    searchPokemon.value = ''

    infoSearch.classList.remove('hidden')


    return await fetch(url)  
    .then(res => {
        if(res.status != 200){
            info.classList.remove('hidden')
            infoSearch.classList.toggle('hidden')
            setTimeout(() =>{
                info.classList.add('hidden')
            },1000)

        } else {
            infoSearch.classList.toggle('hidden')
            return res.json()
        }
    })
    .then(pokemon => pokeApiDetailToPokemon(pokemon))
    .then( res => pokemonToHTML(res))
    .then(res => {
        pokedex.innerHTML =  res + '<button class="btnBack" > <a href="index.html"> Voltar  </a></button>'
    })


})

