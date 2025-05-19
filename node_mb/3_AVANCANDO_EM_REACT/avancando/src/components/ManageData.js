import { useState } from "react"

const ManageData = () => {
    const someData = 10
    /*
    O useState é um dos hooks mais utilizados no React e serve para criar e manipular o estado de um componente funcional. Em termos simples, o estado é uma forma de armazenar informações que podem mudar ao longo do tempo enquanto o usuário interage com a interface. Por exemplo, você pode usar o useState para armazenar o valor de um campo de texto, controlar se um menu está aberto ou fechado, ou contar quantas vezes um botão foi clicado. Ele retorna um array com dois elementos: o valor atual do estado e uma função que permite atualizá-lo. Sempre que essa função de atualização é chamada, o React re-renderiza o componente, refletindo as mudanças na tela. Isso torna o useState essencial para criar componentes dinâmicos e interativos em aplicações React modernas.
    */
    const [number, setNumber] = useState(15);
  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar o state</button>
        </div>
    </div>
  )
}

export default ManageData