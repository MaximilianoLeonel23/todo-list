export interface IDeadline {
  day: string;
  dayNumber: number;
  month: string;
  year: number;
  hour: string;
}

export interface ITask {
  taskTitle: string;
  taskDescription: string;
  taskDeadline: IDeadline;
}
