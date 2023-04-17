import { setLocalStorage } from "../helpers/localStorage";
import { ITask } from "../interfaces/Interfaces";

interface Props {
  task: ITask;
  taskList: ITask[];
  setTaskList: (tasks: ITask[]) => void;
}
const Task = ({ task, taskList, setTaskList }: Props): JSX.Element => {
  const when = task.taskDeadline;
  // Eliminar tarea unitaria
  const deleteTask = (taskList: ITask[], taskToDelete: ITask): ITask[] => {
    console.log(task);
    return taskList.filter((task) => task !== taskToDelete);
  };
  // Manejador del evento
  const handleDelete = (task: ITask): void => {
    const newList = deleteTask(taskList, task);
    setTaskList(newList);
    setLocalStorage(newList);
  };

  return (
    <article className="card mb-3">
      <div className="card-header">
        {[when.day]} {when.dayNumber} de {when.month}
        {when.hour ? ", " + when.hour : null}
      </div>
      <div className="card-body d-flex justify-content-between align-items-start">
        <div>
          <h5 className="card-title">{task.taskTitle}</h5>
          {task.taskDescription && (
            <p className="card-text">{task.taskDescription}</p>
          )}
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleDelete(task)}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
};

export default Task;
