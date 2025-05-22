import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tarefas, setTarefas] = useState([])

  const addTarefas = (textoDaTarefa) => {
    const novaTarefaObj = {
      id: Date.now(),
      texto: textoDaTarefa
    }

    setTarefas((tarefasAntigas) => [...tarefasAntigas, novaTarefaObj])
  }

  const excluirTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
  }

  return (
    <>
      <TaskForm addTarefas={addTarefas} />
      <TaskList tarefas={tarefas} excluirTarefa={excluirTarefa} />
    </>
  )
}

export default App
