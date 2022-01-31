import { useRef, useState } from "react";
import classes from "./App.module.css";
import Todo from "./components/Todo";

let id = 0;

function App() {
  const [todoText, setTodoText] = useState("");
  const [arr, setArr] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const inputRef = useRef('');

  const inputChangeHandler = (e) => {
    setTodoText(e.target.value);
  };

  const submitClickHandler = () => {
    if (todoText.trim() === "") {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    arr.unshift({ id: ++id, text: todoText });
    setTodoText("");
    inputRef.current.value = '';
  };

  const onDeleteHandler = (id) => {
    const updatedArr = arr.filter((item) => item.id !== id);
    setArr([...updatedArr]);
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
          ref={inputRef}
        />
        <br />
        <button type="button" onClick={submitClickHandler}>
          Submit
        </button>
        <div className={classes.list}>
          {isEmpty && <p>Please enter valid task!</p>}
          {arr.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              onDelete={onDeleteHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
