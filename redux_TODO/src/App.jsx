import "./App.scss";
import Addtodo from "./components/Addtodo";
import Todo from "./components/Todo";

function App() {
  return (
    <main className="appShell">
      <section className="todoCard">
        <div className="hero">
          <p className="eyebrow">Redux Toolkit Practice</p>
          <h1>Learn Redux</h1>
          <p className="subtitle">
            Add, review, and remove your tasks from one tidy workspace.
          </p>
        </div>
        <Addtodo />
        <Todo />
      </section>
    </main>
  );
}

export default App;
