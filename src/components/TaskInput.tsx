import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function TaskInput() {
  const [taskName, setTaskName] = useState("");

  const handleTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setTaskName(value);
  };

  return (
    <div className="grid grid-cols-2 px-20 mt-10">
      <div className="flex items-center wrapper">
        <input
          type="text"
          name="task-input"
          id="task-input"
          value={taskName}
          onInput={handleTaskNameChange}
          placeholder="Add a task"
          className="w-full h-full p-2 border border-solid rounded-md"
        />
        <div className="px-3 py-2 mx-2 text-2xl bg-white border border-solid rounded-md cursor-pointer hover:bg-black hover:text-white add-task">
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </div>
  );
}
