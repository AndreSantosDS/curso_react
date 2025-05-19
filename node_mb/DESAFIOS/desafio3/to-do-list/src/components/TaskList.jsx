import './TaskList.css'

const TaskList = ({ tarefas, excluirTarefa }) => {
  return (
    <div className="task-list">
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id}>
            {tarefa.texto}
            <button onClick={() => excluirTarefa(tarefa.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList