import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
const Products = () => {
  const {counter} = useContext(CounterContext)
    return (
      <div>
          <h1>Home</h1>
          <p>Valor do contador: <strong>{counter}</strong></p>
      </div>
    )
}

export default Products