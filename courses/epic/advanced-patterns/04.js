// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {Switch} from '../switch'

function callAll(...fns) {
  return (...args) => {
    fns.forEach(fn => {
      fn?.(...args)
    })
  }
}

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  function getTooglerProps({onClick, ...props} = {}) {
    return {
      'aria-pressed': on,
      onClick: callAll(onClick, toggle),
      ...props,
    }
  }
  return {
    on, 
    toggle,
    getTooglerProps,
  }
}

function App() {
  const {on, getTooglerProps} = useToggle()
  return (
    <div>
      <Switch {...getTooglerProps({on})} />
      <hr />
      <button
        {...getTooglerProps({
          'aria-label':"custom-button",
          onClick: () => console.info('onButtonClick')
        })}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
