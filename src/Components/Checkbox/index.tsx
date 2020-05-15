import React from "react";
import styles from "./checkbox.module.css";

export type CheckboxProps = {
  state: boolean;
  onChange: (checked: boolean) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({ state, onChange }) => {
  console.log({ state });
  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        className={styles.input}
        checked={state}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  );
};

export default Checkbox;
