import React, { useState } from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  const [concluida, setConcluidas] = useState([])
  
  function marcarComoConcluida(id) {
    if (concluida.includes(id)) {
      setConcluidas(concluida.filter((itemId) => itemId !== id))
    } else {
      setConcluidas([...concluida, id])
    }
  }

  return (
    <div>
      {props.tarefa.map((t) => {
         return <TodoItem key={t.id} id={t.id} tarefas={t.texto} deletarTarefa={props.deletarTarefa} marcarComoConcluida={marcarComoConcluida} concluida={concluida}/>
      })}
    </div>
  )
}

export default TodoList