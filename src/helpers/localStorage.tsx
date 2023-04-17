import { ITask } from "../interfaces/Interfaces";

export const setLocalStorage = (taskList: ITask[]) => {
  localStorage.setItem("taskList", JSON.stringify(taskList));
};
