import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    setUsername("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)} // this is called two way bainding like when we change in input section then react also change automatically
          className="py-3 px-4 border-1 rounded text-xl m-5"
          type="text"
          placeholder="Enter Your Name"
        />
        <button className="py-3 px-4 bg-purple-500 rounded cursor-pointer m-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
