import { useState } from "react";

import "./App.css";
import Addtodo from "./components/Addtodo";
import Todo from "./components/Todo";
import Todo from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>learn redux</h1>
      <Addtodo />
      <Todo />
    </>
  );
}

export default App;
