import * as React from 'react'
import {PokemonDataView, fetchPokemon, PokemonErrorBoundary} from '../pokemon'

function createResource(promise) {
  let status = "pending"

  let result = promise('pikachu').then(
    resolved => {
      status = "resolved"
      result = resolved
    },
    rejected => {
      status = "reject"
      result = rejected
    },
  )
  return {
    read() {
      if(status === 'pending') throw result
      if(status === 'reject') throw result
      if(status === 'resolved') throw result
      throw new Error('this is impossible')
    },
  }
}

const pokemonResource = createResource(fetchPokemon('pikachu'))

function PokemonInfo() {
  const pokemon = pokemonResource.read()
  
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

