import TaskInput from "./components/TaskInput";
import Task from "./components/Task";
import { useState } from "react";
import { nanoid } from "nanoid";

interface ITask {
  id: string;
  name: string;
  checked: boolean;
}

const defaultTask: ITask = {
  id: nanoid(),
  name: "Demo task",
  checked: false,
};

function App() {
  const [taskName, setTaskName] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([defaultTask]);

  const handleOnTaskInput = () => {
    if (!taskName) return;

    setTasks((tasks) => [
      ...tasks,
      { id: nanoid(), name: taskName, checked: false },
    ]);
    setTaskName("");
  };

  const handleOnTaskDelete = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks([...newTasks]);
  };

  return (
    <>
      <h1 className="block min-w-full mt-10 text-4xl font-bold text-center uppercase">
        app
      </h1>
      <TaskInput
        taskName={taskName}
        setTaskName={setTaskName}
        handleOnTaskInput={handleOnTaskInput}
      />
      <div className="container">
        <div className="w-2/3 p-6 px-12 border border-gray-100 border-solid shadow-lg rounded-2xl bg-amber-100">
          {tasks.map((task: ITask) => (
            <Task {...task} handleOnTaskDelete={handleOnTaskDelete} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
