import React, { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  return (
    <div>
      <h1 className="text-xl bg-green-500 ">Number is {a}</h1>
      <button onClick={() => setA(a + 1)}>Increment</button>
      <button className="bg-amber-300" onClick={() => setA(a - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default App;
