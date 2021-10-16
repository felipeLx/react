import * as React from 'react'
import {PokemonDataView, fetchPokemon, PokemonErrorBoundary} from '../pokemon'

let pokemon
let pokemonError 

let pokemonPromise = fetchPokemon('pikachu').then(
  pokemonData => {pokemon = pokemonData},
  error => {pokemonError = error},
  )

function PokemonInfo() {
  if(pokemonError) {
    throw pokemonError
  }
  if(!pokemon) {
    throw pokemonPromise
  }
  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  )
}

function App() {
  return (
    <div className="pokemon-info-app">
      <div className="pokemon-info">
      <PokemonErrorBoundary>
         <React.Suspense fallback={<p>Loading...</p>}>
          <PokemonInfo />
        </React.Suspense>
      </PokemonErrorBoundary>
      </div>
    </div>
  )
}

export default App

