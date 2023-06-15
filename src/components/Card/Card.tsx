import React from "react";
import classes from "./Card.module.scss";

const Card: React.FC<{ children: React.ReactNode; header: string }> = (
  props
) => {
  return (
    <div className={`${classes.wapperCard} ${classes.sizeWrapper}`}>
      <div className={`${classes.container} ${classes.login}`}>
        <header className={classes.modalHeader}>{props.header}</header>
        <div className={classes.body}>
          <div className={classes.form}>
            <form method="post">{props.children}</form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
