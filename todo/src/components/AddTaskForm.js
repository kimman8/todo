import React from "react";
import M from "materialize-css";

const AddTaskForm = ({ task, handleSubmit }) => {
  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Add Task"
              id="event"
              type="text"
              className="validate"
              value={task.event}
            />
            <label htmlFor="event">Task</label>
          </div>
          <div className="input-field col s6">
            <input id="date" type="text" className="validate" />
            <label htmlFor="date">Date</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input id="time" type="text" className="validate" />
            <label htmlFor="time">Time</label>
          </div>
        </div>
        <p>
          <label>
            <input type="checkbox" className="filled-in" checked="checked" />
            <span>Completed</span>
          </label>
        </p>
      </form>
    </div>
  );
};

export default AddTaskForm;
