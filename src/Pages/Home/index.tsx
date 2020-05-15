import React, { useState } from "react";
import TodoComp, { Todo } from "../../Components/Todo";
import styles from "./home.module.css";

export const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "1",
      text: "Blank todo lol",
      completed: false,
    },
    {
      id: "2",
      text: "Done long ring long land todo lel",
      completed: true,
    },
  ]);

  const toggleTodo = (todo: Todo): void => {
    setTodos((dos) =>
      dos.map((t) => {
        if (t.id !== todo.id) return t;
        return {
          ...t,
          completed: !t.completed,
        };
      })
    );
  };

  console.log({ todos });
  return (
    <section className={styles.home}>
      <h1 className={styles.heading}>TypeTodo</h1>
      <div className={styles.todos}>
        {todos.map((t) => (
          <TodoComp key={t.id} todo={t} toggleTodo={toggleTodo} />
        ))}
      </div>
    </section>
  );
};

export default Home;
