import { useState } from "react";

function useLocalStorage(key: string, value: unknown) {
  const [savedValue, setSavedValue] = useState(() => {
    if (typeof window === "undefined") {
      return value;
    }

    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : value;
    } catch (error) {
      console.error(error);
      return value;
    }
  });

  const setValue = (newValue: string) => {
    try {
      setSavedValue(newValue);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(newValue));
      }
    } catch (error) {
      console.error(error);
      return newValue;
    }
  };

  return [savedValue, setValue];
}

export default useLocalStorage;
