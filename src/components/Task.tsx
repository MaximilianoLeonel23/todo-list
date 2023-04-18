import { useEffect } from "react";
import { setLocalStorage } from "../helpers/localStorage";
import { ITask } from "../interfaces/Interfaces";
import calendarCheck from "../assets/icons/calendar-check.svg";
import calendar from "../assets/icons/calendar-event.svg";

interface Props {
  task: ITask;
  taskList: ITask[];
  setTaskList: (tasks: ITask[]) => void;
}
const Task = ({ task, taskList, setTaskList }: Props): JSX.Element => {
  const when = task.taskDeadline;
  // useEffect(() => {}, [taskList]);

  // Eliminar tarea unitaria
  const deleteTask = (taskList: ITask[], taskToDelete: ITask): ITask[] => {
    return taskList.filter((task) => task !== taskToDelete);
  };

  // Finalizar tarea
  const successTask = (taskList: ITask[], taskToSuccess: ITask): ITask[] => {
    const taskListWithSuccess = taskList.map((item) => {
      if (item === taskToSuccess) {
        return { ...item, taskSuccess: true };
      }
      return item;
    });
    return taskListWithSuccess;
  };

  // Manejador del eliminación
  const handleDelete = (task: ITask): void => {
    const newList = deleteTask(taskList, task);
    setTaskList(newList);
    setLocalStorage(newList);
  };
  // Manejador de finalización
  const handleSuccess = (task: ITask): void => {
    const taskListWithSuccess = successTask(taskList, task);
    setTaskList(taskListWithSuccess);
    setLocalStorage(taskListWithSuccess);
  };

  return (
    <article
      className={`card mb-3 ${task.taskSuccess ? "border-success-subtle" : ""}`}
    >
      <div
        id="card-header"
        className={`card-header  ${
          task.taskSuccess ? "bg-success-subtle border-success-subtle" : ""
        }  d-flex justify-content-between align-items-center`}
      >
        <div className="d-flex align-items-center fw-medium gap-3">
          {task.taskSuccess ? (
            <img src={calendarCheck} alt="calendario" />
          ) : (
            <img src={calendar} alt="calendario" />
          )}
          <p className="m-0">
            {[when.day]} {when.dayNumber} de {when.month}
            {when.hour ? ", " + when.hour + "hs" : null}
          </p>
        </div>
        <div>
          {task.taskSuccess && (
            <h6 className="text-success mb-0">Finalizada</h6>
          )}
        </div>
      </div>
      <div className="card-body d-flex justify-content-between align-items-start gap-3">
        <div>
          <h5 className="card-title fw-semibold">{task.taskTitle}</h5>
          {task.taskDescription && (
            <p className="card-text fw-light">{task.taskDescription}</p>
          )}
        </div>
        <div className="d-flex flex-column">
          <button
            type="button"
            className="btn btn-danger mb-2"
            onClick={() => handleDelete(task)}
          >
            Eliminar
          </button>
          {!task.taskSuccess && (
            <button
              type="button"
              className="btn btn-success"
              onClick={() => handleSuccess(task)}
            >
              Finalizar
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default Task;
