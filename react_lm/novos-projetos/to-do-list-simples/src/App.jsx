import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [contador, setContador] = useState(1);
  const [task, setTask] = useState([]);

  function addTask(tarefaTexto) {
    const novaTarefa = {
      id: contador,
      texto: tarefaTexto,
    };

    setTask([...task, novaTarefa]);
    setContador(contador + 1);     
  }
  function deletarTarefa(id){
    const novasTarefas = task.filter(tarefa => tarefa.id !== id);
    setTask(novasTarefas);
  }

  return (
    <>
      <div className='lista'>
        <h1>Lista de tarefas</h1>
        <TodoForm addTask={addTask}/>
        <TodoList tarefa={task} deletarTarefa={deletarTarefa}/>
      </div>
    </>
  )
}

export default App
