import { useState } from "react";
import type { TUseCounterProps } from "./user-counter.types";

export const useCounter = (props: TUseCounterProps) => {
  const { initialCount = 0 } = props || {};
  const [count, setCount] = useState(initialCount || 0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return {
    count,
    increment,
    decrement,
  };
};
