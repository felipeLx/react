import * as React from 'react'

function Greeting(prop) {
  const [name, setName] = React.useState(prop.initialName);

  function handleChange(event) {
    event.preventDefault();
    setName(event.target.value);
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
  return <Greeting initialName='Strange' />
}

export default App
