import classes from "./Todo.module.css";
import CheckIcon from "../assets/CheckIcon";
import CrossIcon from "../assets/CrossIcon";
import { useState } from "react";

const Todo = (props) => {
  const [clicked, setClicked] = useState(false);

  const onCompleteHandler = () => {
    setClicked(true);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <p className={`${classes["todo-text"]} ${clicked && classes.crossed}`}>
          {props.text}
        </p>
        <div className={classes.buttonsContainer}>
          <span
            onClick={onCompleteHandler}
            className={`${classes.button} ${classes.green}`}
          >
            <CheckIcon />
          </span>
          <span
            onClick={() => props.onDelete(props.id)}
            className={`${classes.button} ${classes.red}`}
          >
            <CrossIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default Todo;
