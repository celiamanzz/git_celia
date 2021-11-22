import React from "react";

import classes from "./Card.module.css";

const Card = () => {
  return (
    <div className={classes.card}>
      <h1 className={classes.title}>Title</h1>
      <p className={classes.p}>Place your description here</p>
    </div>
  );
};

export default Card;
