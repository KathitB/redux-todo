import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/features/todo/todoslice";
import styles from "./Todo.module.scss";

export default function Todo() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <section className={styles.todoList}>
      <div className={styles.header}>
        <h2>Your Todos</h2>
        <span className={styles.count}>{todos.length} items</span>
      </div>
      {todos.length === 0 ? (
        <p className={styles.empty}>Nothing here yet. Add your first task above.</p>
      ) : (
        <ul className={styles.items}>
          {todos.map((todo) => (
            <li className={styles.item} key={todo.id}>
              <span className={styles.text}>{todo.text}</span>
              <button
                className={styles.removeButton}
                onClick={() => dispatch(removeTodo(todo.id))}
                type="button"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
