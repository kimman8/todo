import React from "react";
import Task from "./Task";
import M from "materialize-css";
import Header from "./Header";

const Tasks = ({ tasks }) => {
  return (
    <ul className="collection with-header">
      <li className="collection-header center">
        <Header />
      </li>
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </ul>
  );
};

export default Tasks;
