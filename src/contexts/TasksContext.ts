import { createContext } from "react";

export interface ITask {
  name: string;
  checked: boolean;
}

const defaultValue: ITask[] = []

export const TasksContext = createContext({ tasks: defaultValue });
