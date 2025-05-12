import { useState } from 'react'
import './App.css'

import Botao1 from './components/Botao1'
import Botao2 from './components/Botao2'
import Reset from './components/Reset'

function App() {
  const [count, setCount] = useState(0)

  function botao1(){
    setCount(count+1)
  }

  const botao2 = () => {
    setCount(count+1)
  }

  const resetarContador = () =>{
    setCount(0)
  }

  return (
    <>
      <h1>Você clicou nos botões: {count}</h1>
      <Botao1 botao1={botao1}/>
      <Botao2 botao2={botao2}/>
      <Reset resetar={resetarContador}/>
    </>
  )
}

export default App
