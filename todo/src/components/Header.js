import React from "react";
import M from "materialize-css";
import Button from "./Button";

const Header = ({ onToggy, toggle }) => {
  return (
    <header>
      <h4 className="center blue">Task Tracker</h4>
      <Button onToggy={onToggy} toggle={toggle} />
    </header>
  );
};

export default Header;
