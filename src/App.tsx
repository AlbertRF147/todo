import { ComponentProps, PropsWithChildren, useContext } from "react";
import TaskInput from "./components/TaskInput";
import { ITask, TasksContext } from "./contexts/TasksContext";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useContext(TasksContext)

  return (
    <TasksContext.Provider value={ { tasks: [{ name: "Demo task", checked: false }] }}>
      <h1 className="block min-w-full mt-10 text-4xl font-bold text-center uppercase">
        app
      </h1>
      <TaskInput />
      <div className="container">
        <div className="min-w-full p-6 border border-gray-100 border-solid shadow-lg rounded-2xl bg-amber-100">
          {tasks.map((task: ITask) => <Task {...task} />)}
        </div>
      </div>
    </TasksContext.Provider>
  );
}

export default App;
