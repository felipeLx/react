import * as React from 'react'

const useLocalStorage = (
  key, 
  defaultValue = '',
  {serialize = JSON.stringify, deserialize = JSON.parse} = {}
  ) => {
  const [state, setState] = React.useState(
    () => {
      const valueInLocalStorage = window.localStorage.getItem(key);
      if(valueInLocalStorage) {
        return deserialize(valueInLocalStorage);
      }
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    });
  
  const localRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = localRef.current;
    if(prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    localRef.current = key;
     window.localStorage.setState(key, serialize(state))
   }, [key, state])
 
   return [state, setState, serialize];
};

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorage('name', initialName)
  
  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
