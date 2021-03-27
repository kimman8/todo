import React, { useState } from "react";
import M from "materialize-css";

const Button = ({ onToggy, toggle }) => {
  return (
    <a
      type="submit"
      className={`waves-effect waves-light btn ${toggle ? "red" : "green"}`}
      onClick={onToggy}
    >
      <i className="material-icons right">add_circle</i>
      {toggle ? "Close" : "Add"}
    </a>
  );
};

export default Button;
