import React from "react";
import M from "materialize-css";

const Task = ({ task, onToggyy, onDelete }) => {
  return (
    <li
      key={task.id}
      onDoubleClick={() => onToggyy(task.id)}
      className={
        task.reminder ? "collection-item green" : "collection-item red"
      }
    >
      {task.event} one {task.dateTime}{" "}
      <a href="#!" className="secondary-content white">
        <i className="material-icons" onClick={() => onDelete(task.id)}>
          delete
        </i>
      </a>
    </li>
  );
};

export default Task;
