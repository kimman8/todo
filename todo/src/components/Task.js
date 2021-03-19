import React from "react";
import M from "materialize-css";

const Task = ({ task }) => {
  return (
    <li
      key={task.id}
      className={
        task.completed ? "collection-item green" : "collection-item red"
      }
    >
      {task.event} on {task.date} at {task.time}{" "}
      <a href="#!" className="secondary-content white">
        <i className="material-icons">delete</i>
      </a>
    </li>
  );
};

export default Task;
