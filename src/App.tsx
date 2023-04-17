import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { IDeadline, ITask } from "./interfaces/Interfaces";
import { monthsOfYear, daysOfWeek } from "./helpers/datesData";
import { useEffect, useState } from "react";
import { setLocalStorage } from "./helpers/localStorage";

const App = () => {
  // Lista de tareas
  const [taskList, setTaskList] = useState<ITask[]>([]);

  // Reviso si hay tareas en el local storage
  const getLocalStorage = () => {
    const localTaskList = localStorage.getItem("taskList");
    if (localTaskList) {
      setTaskList(JSON.parse(localTaskList));
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  // Actualizo la lista de tareas a medida que se modifica el array
  useEffect(() => {}, [taskList]);

  // Manejador de fechas y horas
  const getTime = (date: string, hour: string): IDeadline => {
    const newDate = new Date(date);
    const deadline: IDeadline = {
      day: daysOfWeek[newDate.getDay()],
      dayNumber: Number(date.slice(-2)),
      month: monthsOfYear[newDate.getMonth()],
      year: newDate.getFullYear(),
      hour: hour,
    };
    return deadline;
  };

  // Creo la tarea
  const getTask = (e: any): void => {
    e.preventDefault();
    // Obtengo el título y descripción de la tarea
    const taskTitle: string = e.target.task.value;
    const taskDescription: string = e.target.description.value;
    // Obtengo el tiempo límite / deadline en formato object
    const date: string = e.target.date.value;
    const hour: string = e.target.hour.value;
    const taskDeadline: IDeadline = getTime(date, hour);

    // Creo un objeto para la tarea
    const task: ITask = {
      taskTitle: taskTitle,
      taskDescription: taskDescription,
      taskDeadline: taskDeadline,
      taskSuccess: false,
    };
    setTaskList([...taskList, task]);
    setLocalStorage(taskList);
  };

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col d-flex align-items-center justify-content-center">
          <h1>Lista de tareas</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <Form getTask={getTask} />
        <TodoList taskList={taskList} setTaskList={setTaskList} />
      </div>
    </div>
  );
};
export default App;
