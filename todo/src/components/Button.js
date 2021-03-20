import React from "react";
import M from "materialize-css";

const Button = ({ handleSubmit }) => {
  return (
    <a
      className="waves-effect waves-light btn"
      onClick={() => console.log("hi")}
    >
      <i className="material-icons right">add_circle</i>Add
    </a>
  );
};

export default Button;
