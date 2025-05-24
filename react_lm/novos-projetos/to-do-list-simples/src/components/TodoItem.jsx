import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  const isChecked = props.concluida.includes(props.id);
  return (
    <div>
      <ul>
        <li key={props.id} className={isChecked ? 'verde' : null}>
          <div className="input_e_text">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => props.marcarComoConcluida(props.id)}
            />
            <span>{props.tarefas}</span>
          </div>
          <button onClick={(e) => props.deletarTarefa(props.id)}>
            Excluir
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TodoItem;
