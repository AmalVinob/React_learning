// useState(0) gives you 2 things
// Current value
// A function to update it
// useState(0)
// [0, function]

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    // const count = countState[0];
    // const setCount = countState[1];
    return(
        <button onClick={() => setCount(count+1)}>
            {count}
        </button>
    )
}