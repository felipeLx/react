// Cache resources
import * as React from 'react'
import {
  fetchPokemon,
  PokemonInfoFallback,
  PokemonForm,
  PokemonDataView,
  PokemonErrorBoundary,
} from '../pokemon'
import {createResource} from '../utils'


function PokemonInfo({pokemonResource}) {
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

const SUSPENSE_CONFIG = {
  timeoutMs: 4000,
  busyDelayMs: 300,
  busyMinDurationMs: 700,
}


const PokemonResourceCacheContext = React.createContext()
console.log('hi here')
function PokemonCacheProvider({children, cacheTime}) {
  const cache = React.useRef({})
  const expirationTime = React.useRef({})

  React.useEffect(() => {
    const interval = setInterval(() => {
      for (const[name, time] of Object.entries(expirationTime.current)) {
        if(time < Date.now()) {
          delete cache.current[name]
        }
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  const getPokemonResource = React.useCallback((name) => {
    const lowerName = name.toLowerCase()
    let resource = cache.current[lowerName]
    if (!resource) {
      resource = createPokemonResource(lowerName)
      cache.current[lowerName] = resource
    }
    expirationTime.current[lowerName] = Date.now() + cacheTime
    return resource
  },[cacheTime])
  
  return <PokemonResourceCacheContext.Provider value={getPokemonResource}>{children}</PokemonResourceCacheContext.Provider>
}


function usePokemonCacheContext() {
  return React.useContext(PokemonResourceCacheContext)
}

function createPokemonResource(pokemonName) {
  return createResource(fetchPokemon(pokemonName))
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')
  const [startTransition, isPending] = React.useTransition(SUSPENSE_CONFIG)
  const [pokemonResource, setPokemonResource] = React.useState(null)
  const getPokemonResource = usePokemonCacheContext()

  React.useEffect(() => {
    if (!pokemonName) {
      setPokemonResource(null)
      return
    }
    startTransition(() => {
      setPokemonResource(getPokemonResource(pokemonName))
    })
  }, [pokemonName, startTransition, getPokemonResource])

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  function handleReset() {
    setPokemonName('')
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className={`pokemon-info ${isPending ? 'pokemon-loading' : ''}`}>
        {pokemonResource ? (
          <PokemonErrorBoundary
            onReset={handleReset}
            resetKeys={[pokemonResource]}
          >
            <React.Suspense
              fallback={<PokemonInfoFallback name={pokemonName} />}
            >
              <PokemonInfo pokemonResource={pokemonResource} />
            </React.Suspense>
          </PokemonErrorBoundary>
        ) : (
          'Submit a pokemon'
        )}
      </div>
    </div>
  )
}

function AppWithProvider() {
  return(
    <PokemonCacheProvider cacheTime={5000}>
      <App />
    </PokemonCacheProvider>
  )
}
export default AppWithProvider
