import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Task from "./components/Task";
import React, { useState, useEffect } from "react";
import M from "materialize-css";
import Form from "./components/Form";
import AddTaskForm from "./components/AddTaskForm";
import Button from "./components/Button";

const App = ({ event, dateTime }) => {
  useEffect(() => {
    M.AutoInit();
  });

  const [tasks, setTasks] = useState([]);
  const [toggle, setToggle] = useState(false);
  const onToggy = () => {
    setToggle(!toggle);
  };
  //stuck on getting the addtask fucntion to work because i didnt pass any arguments
  //into the function. it all works once i started passing "task" into addtask!!
  const addTask = (jibberish) => {
    const id = Math.floor(Math.random() * 10000);
    const newTask = { ...jibberish, id };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    // setReminder(!reminder);
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // const toggleTaskForm = () => {};
  return (
    <div className="App">
      <Header onToggy={onToggy} toggle={toggle} />
      {toggle && <AddTaskForm onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggyy={toggleReminder} />
      ) : (
        <h4>no tasks to show</h4>
      )}
    </div>
  );
};

export default App;
