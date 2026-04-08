import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/features/todo/todoslice";
import styles from "./Addtodo.module.scss";

export default function Addtodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    dispatch(addTodo(trimmedInput));
    setInput("");
  };

  return (
    <div className={styles.addTodo}>
      <form className={styles.form} onSubmit={addHandler}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}
