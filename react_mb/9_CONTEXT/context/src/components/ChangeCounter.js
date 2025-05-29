// 3 - alterando contexto
import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
    const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
        <button onClick={() => {
            console.log("jsjsjj")
            setCounter(counter + 1)
        }}>Add value to counter</button>
    </div>
  )
}

export default ChangeCounter