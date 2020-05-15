import React, { useState, FormEvent } from "react";
import styles from "./todoinput.module.css";

export type TodoinputProps = { addTodo: (text: string) => void };

export const Todoinput: React.FC<TodoinputProps> = ({ addTodo }) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!text) return;

    addTodo(text);
    setText("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Type and press Enter"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
      />
    </form>
  );
};

export default Todoinput;
