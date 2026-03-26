// import { useState, useEffect } from "react";

// // Child component (uses props)
// function Greeting(props) {
//   return <h2>Hello, {props.name} 👋</h2>;
// }

// // Main component
// function App() {
//   // State
//   const [name, setName] = useState("");
//   const [count, setCount] = useState(0);

//   // useEffect (runs once when page loads)
//   useEffect(() => {
//     console.log("App Loaded");
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>My First React App</h1>

//       {/* Input (event + state) */}
//       <input
//         type="text"
//         placeholder="Enter your name"
//         onChange={(e) => setName(e.target.value)}
//       />

//       {/* Props */}
//       <Greeting name={name} />

//       {/* Counter (state + event) */}
//       <button onClick={() => setCount(count + 1)}>
//         Clicked {count} times
//       </button>
//     </div>
//   );
// }

// export default App;



import { Welcome } from "./Welcome";
import Button from "./button";
import { Product } from "./Product";
import { Greeting } from "./Greeting";


// Main component
function App() {

  return (
    <div>
      <Product title="Laptop" price={999.99} instock={true} category={["Electronics", "Computers"]} />
      <h1>My First React App</h1>
      <Welcome name="Alice" />
      <Button />
      <Greeting name="Bob" message="Nice to meet you!" />
    </div>
  );
}

export default App;