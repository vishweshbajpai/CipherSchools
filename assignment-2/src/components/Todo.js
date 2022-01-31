import classes from "./Todo.module.css";
import CheckIcon from "../assets/CheckIcon";
import CrossIcon from "../assets/CrossIcon";

const Todo = (props) => {
  return (
    <>
      <div className={classes.wrapper}>
        <p className={classes["todo-text"]}>{props.text}</p>
        <div className={classes.buttonsContainer}>
          <span onClick={props.onCompleteHandler} className={`${classes.button} ${classes.green}`}>
            <CheckIcon/>
          </span>
          <span onClick={() => props.onDeleteHandler(props.id)} className={`${classes.button} ${classes.red}`}>
              <CrossIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default Todo;
