import React from "react";

const Aleatorio = (props) => {
    const nAleatorio = Math.floor(Math.random() * (props.max - props.min + 1))+ props.min
  return (
    <div>
        <p>Número aleatorio entre {props.min} e {props.max}: {nAleatorio}</p>
    </div>
  )
}

export default Aleatorio