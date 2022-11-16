function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                    <ol class="types">
                        ${pokemon.types
                            .map((type) => `<div class="${type}">${type}</div>`)
                            .join('')}
                    </ol>
                
                <img src="${pokemon.photo}" alt="${pokemon.name}">
         </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('') //junta e separa com o que tiver no ()
    /*const listItems = []
    O MESMO PROCESSO DE CIMA, SÓ QUE POR FOR  ETC
    pokemons.map(value,index,array)
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        lisItems.push(convertPokemonToLi(pokemon))            
    }
    console.log(listItems) */
})
