import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/features/todo/todoslice";

export default function Todo() {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos, "asdkj");
  const dispatch = useDispatch();
  return (
    <div>
      TODO
      <div>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </div>
    </div>
  );
}
