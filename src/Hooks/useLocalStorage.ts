import { useState, useEffect } from "react";

const useLocalStorage = <V = string>(key: string, initialValue: V): [V, (s: V) => void] => {
  const [state, setState] = useState<V>(initialValue);

  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) setState(JSON.parse(data));
  }, [key]);

  const updateState = (value: V): void => {
    setState(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [state, updateState];
};

export default useLocalStorage;
