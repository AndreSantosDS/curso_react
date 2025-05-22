import React from "react";
import { useState } from "react";

import './Input.css'

export default props => {
    const [valor,setValor] = useState("Inicial")

    function quandoMudar(e){
        setValor(e.target.value)
    }

    return(
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display:"flex",
                flexDirection:"column"
            }}>
                {/*componentes controlados */}
                <input value={valor} onChange={quandoMudar}/>
                {/*Componente somente para leitura */}
                <input value={valor} readOnly/>
                {/*componente não controlado*/}
                <input value={undefined}/>
            </div>
        </div>
    )
}