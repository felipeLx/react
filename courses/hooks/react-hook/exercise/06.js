import * as React from 'react';
import {PokemonForm, fetchPokemon, PokemonInfoFallback, PokemonDataView} from '../pokemon'
import {ErrorBoundary} from 'react-error-boundary';

/* class ErrorBoundary extends React.Component{
  state = {
    error: null
  }
  static getDerivedStateFromError(error) {
    return {error}
  }
  render() {
    const { error } = this.state;
    if(error) {
        return <this.props.FallbackComponent error={error} />
      } 
    return this.props.children;
  }
} */

function PokemonInfo({pokemonName}) {
  const [state, setState] = React.useState({
    status: pokemonName ? 'pending' : 'idle',
    pokemon: null,
    error: null
  });

  const {status, pokemon, error} = state;

  React.useEffect(() => {
    if(!pokemonName) {
      return;
    }
    setState({status: 'pending'});
    fetchPokemon(pokemonName)
      .then(
        result => {
          setState({pokemon: result, status: 'resolved'});
        },
        error => {
          setState({error: error, status: 'rejected'});
        },
      )
  }, [pokemonName])
  
  if(status === 'idle') {
    return 'Submit a pokemon';
  } else if(status === 'pending') {
    return <PokemonInfoFallback name={pokemonName} />
  } else if(status === 'rejected') {
    throw error;
  } else if(status === 'resolved') {
    return <PokemonDataView pokemon={pokemon} />
  } else {
    throw new Error.message('no status','That should be imposible');
  }
}

function fallbackError({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      There was an error: {' '} 
      <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
    )
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  function resetHandle() {
    setPokemonName('');
  }
  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <ErrorBoundary 
          FallbackComponent={fallbackError} 
          onReset={resetHandle} 
          resetKeys={[pokemonName]}
          >
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
