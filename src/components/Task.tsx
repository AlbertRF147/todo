import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faClose, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useState } from "react";

type TaskProps = {
  id: string;
  name: string;
  handleOnTaskDelete: (taskId: string) => void;
};

const Task = ({ id, name, handleOnTaskDelete }: TaskProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className={classNames(
        "flex",
        "items-center",
        "text-xl",
        "text-left",
        "py-2",
        { "line-through": checked, "text-gray-400": checked },
      )}
    >
      <div
        className="cursor-pointer checked"
        onClick={() => setChecked((prev) => !prev)}
      >
        <FontAwesomeIcon icon={checked ? faSquareCheck : faSquare} />
      </div>
      <div className="px-6 name">{name}</div>
      <div
        className="flex-1 text-right cursor-pointer delete"
        onClick={() => handleOnTaskDelete(id)}
      >
        <FontAwesomeIcon icon={faClose} />
      </div>
    </div>
  );
};

export default Task;
