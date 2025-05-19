import { useState } from 'react';
import './TaskForm.css'

const TaskForm = ({addTarefas}) => {
  const [novaTarefa, setNovaTarefa] = useState('');

   const handleSubmit = (event) => {
      event.preventDefault()
      if (novaTarefa.trim() === '') return;
      addTarefas(novaTarefa)
      setNovaTarefa('');
    };

  return (
     <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default TaskForm