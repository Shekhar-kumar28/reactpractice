import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter]= useState(1)
  const addValue =()=>{
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1);
    }
  }
  const removeValue =()=>{
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1);
    }
    }
  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter Value: {counter}</h2>

      <br />

      <button onClick={addValue}>Add Value:{counter}</button>
      <br />

      <button onClick={removeValue}>Remove Value:{counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
