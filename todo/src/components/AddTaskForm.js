import React, { useState } from "react";
import Button from "./Button";
import M from "materialize-css";

const AddTaskForm = ({ onAdd }) => {
  const [event, setEvent] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!event) {
      alert("add event!");
      return;
    }
    onAdd({ event, dateTime, reminder });
    setEvent("");
    setDateTime("");
    setReminder(false);
  };
  return (
    <div className="row">
      <form className="col s12" action="#" onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Add Task!!"
              type="text"
              className="validate"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
            />
            <label htmlFor="event">Task</label>
          </div>
          <div className="input-field col s6">
            <input
              type="text"
              className="validate"
              value={dateTime}
              onChange={(e) => {
                setDateTime(e.target.value);
              }}
            />
            <label htmlFor="dateTime">Date & Time</label>
          </div>
        </div>
        <div className="form-control form-control-check">
          <label>
            {/* dont need a "htmlFor" inside of the checkbox label!!!!! otherwise da checkbox wont work!*/}
            <input
              type="checkbox"
              value={reminder}
              checked={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
              // onClick={() => console.log("hey")}
            />
            <span>Reminder</span>
          </label>
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddTaskForm;
