import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useState } from 'react'
import { useEffect } from 'react'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    const n = parseInt(num)
        if(n<0) return - 1

        if(n === 0) return 1

        return calcFatorial(n - 1) * n
    }

function parOuImpar(n){
    if(n % 2 === 0){
        return "Par"
    }else{
        return 'Ímpar'
    }
}
const UseEffect = (props) => {
     //Ex #01
    const [number, setnumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    

    useEffect(function(){
        setFatorial(calcFatorial(number))
    },[number])

    useEffect(function(){
        if(fatorial > 1000000){
            document.title = 'Eita!!!'
        }
    }, [fatorial])

    //Ex #02
    const [status, setStatus] = useState('Ímpar')

    useEffect(function(){
        setStatus(parOuImpar(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className='text'>Fatorial: </span>
                    <span className='text red'>{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input type="number" className='text'  value={number} onChange={e => setnumber(e.target.value)}/>
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <div>
                    <span className='text'>Status: </span>
                    <span className='text red'>{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
