import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {
  const [task,setTask] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    if (task.trim() === "") return;
    props.addTask(task)
    setTask("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default TodoForm;
