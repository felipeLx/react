import * as React from 'react'
import '../box-styles.css'

const small = {
  className: 'box--small',
}
const medium = {
  backgroundColor: 'pink',
}

const large = {
  backgroundColor: 'orange',
}

function Box({className='', size, style,  ...props}) {
  const sizeClassName = size ? `box--${size}` : '';
  return <div 
            className={`box ${className} ${sizeClassName}`} 
            style={{fontStyle: 'italic', ...style}}
            {...props} />
};

const smallBox = <Box style={{backgroundColor: 'lightblue'}} size='small'>small lightblue box</Box>
const mediumBox = <Box style={{backgroundColor: 'pink'}}  size='medium' >medium pink box</Box>
const largeBox = <Box style={{backgroundColor: 'orange'}}  size='large'>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
