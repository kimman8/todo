import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import React, { useState, useEffect } from "react";
import M from "materialize-css";
import AddTaskForm from "./components/AddTaskForm";

const App = () => {
  const [newTask, setNewTask] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  useEffect(() => {
    M.AutoInit();
  });
  const tasks = [
    {
      event: "Dentist appointment",
      date: "5th of Feb",
      time: "1:30pm",
      id: 1,
      completed: true,
    },
    {
      event: "Doctor appointment",
      date: "6th of Feb",
      time: "2:30pm",
      id: 2,
      completed: true,
    },
    {
      event: "bouldering",
      date: "7th of Feb",
      time: "3:30pm",
      id: 3,
      completed: false,
    },
  ];
  return (
    <div className="App">
      <Tasks tasks={tasks} />
      <AddTaskForm />
      <Button />
    </div>
  );
};

export default App;
