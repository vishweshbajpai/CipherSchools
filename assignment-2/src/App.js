import { useState } from "react";
import classes from "./App.module.css";
import Todo from "./components/Todo";

let id = 0;

function App() {
  const [todoText, setTodoText] = useState("");
  const [arr, setArr] = useState([]);

  const inputChangeHandler = (e) => {
    setTodoText(e.target.value);
  };

  const submitClickHandler = () => {
    if (todoText === "") {
      return;
    }
    arr.push({ id: ++id, text: todoText });
    console.log(id);
    setTodoText("");
  };

  const onCompleteHandler = () => {
    console.log('complete');
  };

  const onDeleteHandler = (id) => {
    const updatedArr = arr.filter((item) => item.id !== id);
    setArr([...updatedArr]);
    console.log(10);
  };

  return (
    <div className={classes.background}>
      <div className={classes["padding-wrapper"]}>
        <header>Todo List</header>
        <p className={classes.subHeading}>Add Todo</p>
        <input
          onChange={inputChangeHandler}
          type="text"
          placeholder="Add new todo"
        />
        <br />
        <button type="button" onClick={submitClickHandler}>
          Submit
        </button>
        <div className={classes.list}>
          {arr.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.text}
              onComplete={onCompleteHandler}
              onDelete={onDeleteHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
