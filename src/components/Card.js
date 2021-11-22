import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.p}>{props.description}</p>
    </div>
  );
};

export default Card;
