import React from "react";
import Task from "./Task";
import M from "materialize-css";
import Header from "./Header";

const Tasks = ({ tasks, onDelete, onToggyy }) => {
  return (
    <ul className="collection with-header">
      <li className="collection-header ">
        {tasks.map((task) => (
          <Task task={task} onDelete={onDelete} onToggyy={onToggyy} />
        ))}
      </li>
    </ul>
  );
};

export default Tasks;
