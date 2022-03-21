import React, { useState } from "react";

const Situp = ({ setPageState }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      Sit Ups
      <br></br>
      <br></br>
      Reps: {count}
      <button
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
        }}
      >
        Complete Rep
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setPageState("index")}>Return</button>
    </div>
  );
};

export default Situp;
