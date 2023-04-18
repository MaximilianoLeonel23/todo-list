import { setLocalStorage } from "../helpers/localStorage";
import { ITask } from "../interfaces/Interfaces";
import Task from "./Task";

interface Props {
  taskList: ITask[];
  setTaskList: (tasks: ITask[]) => void;
}

const TodoList = ({ taskList, setTaskList }: Props): JSX.Element => {
  // Borra todas las tareas
  const cleanTaskList = (): void => {
    setTaskList([]);
    setLocalStorage(taskList);
  };
  return (
    <section className="col-12 col-sm-10 col-md-6">
      {taskList.map((el, i) => {
        return (
          <Task
            task={el}
            taskList={taskList}
            setTaskList={setTaskList}
            key={i}
          />
        );
      })}
      {taskList.length > 0 && (
        <div className="col-6">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={cleanTaskList}
          >
            Limpiar lista
          </button>
        </div>
      )}
    </section>
  );
};

export default TodoList;
