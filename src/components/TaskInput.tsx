import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Spinner } from "./Spinner";

interface ITaskInput {
  taskName: string;
  setTaskName: (taskName: string) => void;
  handleOnTaskInput: () => void;
}

export default function TaskInput({
  taskName,
  setTaskName,
  handleOnTaskInput,
}: ITaskInput) {
  const [loadingIdeas, setLoadingIdeas] = useState(false);

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTaskName(value);
  };

  const handleOnHelpMeClick = async () => {
    setLoadingIdeas(true);

    const response = await fetch("/api/handler");
    if (response.ok) {
      const { idea } = await response.json();
      setLoadingIdeas(false);
      if (idea) setTaskName(idea);
    }
  };

  return (
    <div className="block w-2/3 mx-auto">
      <div className="grid grid-cols-1 px-12 mt-10">
        <div className="flex items-center wrapper">
          <div
            className="px-3 py-2 mr-2 text-xl button"
            onClick={handleOnHelpMeClick}
          >
            {loadingIdeas ? <Spinner /> : <>Help me! 🍀</>}
          </div>
          <input
            type="text"
            name="task-input"
            id="task-input"
            value={taskName}
            onInput={handleOnInput}
            placeholder="Add a task"
            className="w-full h-full p-2 border border-solid rounded-md"
          />
          <div
            className="px-3 py-2 mx-2 text-2xl button add-task"
            onClick={handleOnTaskInput}
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>
    </div>
  );
}
