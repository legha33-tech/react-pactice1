import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    console.log("Reset clicked");
    setCount(0);
  };

  return (
    <div>
      <h2>Counter App</h2>
      <h1>{count}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onclick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
