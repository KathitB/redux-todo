import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/features/todo/todoslice";
export default function Addtodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <form onSubmit={addHandler}>
        <input
          className="form-input"
          type="text"
          placeholder="entera todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit"> add</button>
      </form>
    </div>
  );
}
