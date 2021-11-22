import React from "react";

import classes from "./Button.module.css";

const Button = () => {
  function clickHandler() {
    alert("Hi! 👋🏼");
  }
  return (
    <div className={classes.button} onClick={clickHandler}>
      Press me!
    </div>
  );
};

export default Button;
