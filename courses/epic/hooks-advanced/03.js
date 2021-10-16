import * as React from 'react'



const CountContext = React.createContext();

const useCount = () => {
  const context = React.useContext(CountContext);
  if(!context) {
    throw new Error(`The component must be render inside the Provider`)
  }
  return context;
};

const CountProvider = (props) => {
  const [count, setCount] = React.useState(0);
  const value = [count, setCount];
  return <CountContext.Provider value={value} {...props} />
};

function CountDisplay() {
  const [count] = useCount();
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount();
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
