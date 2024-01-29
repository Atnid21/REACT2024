import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {

  // let counter = 1;

//  ! HOOKS
  const [counter,setCounter] = useState(0);


  const addValue = () =>{
    if(counter<20)
      setCounter(counter+1);
  }

  const removeValue = () =>{
    if(counter>0)
    setCounter(counter-1);
  }
  return (
    <>
      <h1>COUNTER</h1>
      <button onClick={addValue}>+</button>
      <h2>{counter}</h2>
      <button onClick={removeValue}>-</button>
    </>
  )
}

export default App
