// What is useEffect?

// In React:

// useEffect = run some code when something happens

// Hooks (useState, useEffect)

import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}