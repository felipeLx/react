import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null);
  const [username, setUsername] = React.useState('');
  const inputUsername = React.useRef();
  const inputEmail = React.useRef();
  
  function handleSubmit(event)  {
    event.preventDefault();
    //const username = event.target.inputUsername.value;
    //const email = event.target.inputEmail.value;
    //const username = inputUsername.current.value;
    const email = inputEmail.current.value;
    onSubmitUsername(username, email);
  };

  function handleChange(event) {
    const {value} = event.target;
    setUsername(value.toLowerCase().trim());
    //const isValid = value === value.toLowerCase();
    //setError(isValid ? null : 'Username must be lower case');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='inputUsername'>Username:</label>
        <input 
          onChange={handleChange} 
          ref={inputUsername}
          value={username}
          id='inputUsername' 
          type="text" />
      </div>
      <div style={{color:'red'}}>{error}</div>
      <div>
        <label htmlFor='inputEmail'>Email:</label>
        <input ref={inputEmail} id='inputEmail' type="text" />
      </div>
      <button type="submit" disabled={Boolean(error)}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (username, email) =>
    alert(`You entered: ${username}\n email: ${email}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
