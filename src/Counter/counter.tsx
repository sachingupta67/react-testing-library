import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="number"
        name="amount"
        value={amount}
        aria-label="Amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
};

export default Counter;
