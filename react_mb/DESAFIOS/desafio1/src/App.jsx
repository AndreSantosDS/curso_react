import { useState } from 'react'
import './App.css'

import IncrementButton from './components/IncrementButton'
import DecrementButton from './components/DecrementButton'

function App() {
  const [count, setCount] = useState(0)

  // const incrementar = () => {
  //   setCount(count+1)
  // }
  function incrementar(){
    setCount(count+1)
  }
  const decrementar = () => setCount(count-1)

  return (
    <>
      <h1>Contador: {count}</h1>
      <IncrementButton incrementar={incrementar}/>
      <DecrementButton decrementar={decrementar}/>
    </>
  )
}

export default App
