import {
  faSquare,
} from "@fortawesome/free-regular-svg-icons";
import {
  faClose,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useState } from "react";

type TaskProps = {
  name: string;
};

const Task = ({ name }: TaskProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className={classNames(
        "grid",
        "items-center",
        "grid-cols-10",
        "text-xl",
        "text-left",
        { "line-through": checked, "text-gray-400": checked },
      )}
    >
      <div className="col-span-1 cursor-pointer checked" onClick={() => setChecked(prev => !prev)}>
        <FontAwesomeIcon icon={checked ? faSquareCheck : faSquare} />
      </div>
      <div className="col-span-8 name">{name}</div>
      <div className="col-span-1 cursor-pointer delete">
        <FontAwesomeIcon icon={faClose} />
      </div>
    </div>
  );
};

export default Task;
