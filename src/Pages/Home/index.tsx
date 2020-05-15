import React from "react";
import TodoInput from "../../Components/TodoInput";
import SingleTodo from "../../Components/SingleTodo";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { Todo } from "../../types";
import styles from "./home.module.css";

export const Home: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("localTodos", []);

  const toggleTodo = (todo: Todo): void => {
    setTodos(
      todos.map((t) => {
        if (t.id !== todo.id) return t;
        return {
          ...t,
          completed: !t.completed,
        };
      })
    );
  };

  const deleteTodo = (todo: Todo): void => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const addTodo = (text: string): void => {
    setTodos([
      ...todos,
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
    ]);
  };

  console.log({ todos });
  return (
    <section className={styles.home}>
      <header className={styles.top}>
        <h1 className={styles.heading}>TypeTodo</h1>
        <TodoInput addTodo={addTodo} />
      </header>
      <div className={styles.todos}>
        {!todos.length && <h2 className={styles.sub}>You don't have any Todos yet</h2>}

        {todos.map((t) => (
          <SingleTodo key={t.id} todo={t} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </section>
  );
};

export default Home;
