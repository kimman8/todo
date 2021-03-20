import React, { useState } from "react";
import M from "materialize-css";

const AddTaskForm = () => {
  const [newTask, setNewTask] = useState({
    event: "",
    date: "",
    time: "",
    completed: false,
    id: Math.random() * 100000,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTask({ ...newTask, [e.target.id]: e.target.value });
    console.log(e.target.value);
  };
  const addTask = () => {
    console.log("hi");
  };
  const handleClick = (e) => {
    // e.preventDefault(); !!! this caused me so much grieffff ffs!!!
    setNewTask({ ...newTask, completed: !newTask.completed });
    console.log(e.target.value);
  };
  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit} action="#">
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Add Task"
              id="event"
              type="text"
              className="validate"
              value={newTask.event}
              onChange={handleSubmit}
            />
            <label htmlFor="event">Task</label>
          </div>
          <div className="input-field col s6">
            <input
              id="date"
              type="text"
              className="validate"
              value={newTask.date}
              onChange={handleSubmit}
            />
            <label htmlFor="date">Date</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              id="time"
              type="text"
              className="validate"
              value={newTask.time}
              onChange={handleSubmit}
            />
            <label htmlFor="time">Time</label>
          </div>
        </div>
      </form>
      <form action="#">
        <p>
          <label for="check">
            <input
              id="check"
              type="checkbox"
              value={newTask.completed}
              onClick={handleClick}
            />
            <span>Completed</span>
          </label>
        </p>
      </form>
    </div>
  );
};

export default AddTaskForm;
