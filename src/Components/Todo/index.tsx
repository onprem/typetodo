import React, { FC } from "react";
import styles from "./todo.module.css";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoProps = {
  todo: Todo;
  toggleTodo: (todo: Todo) => void;
};

const Todo: FC<TodoProps> = ({ todo, toggleTodo }) => {
  const { text, completed } = todo;

  return (
    <div className={`${styles.todo} ${completed && styles.done}`} onClick={() => toggleTodo(todo)}>
      {text}
    </div>
  );
};

export default Todo;
