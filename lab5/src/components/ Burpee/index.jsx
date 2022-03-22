import React, { useState, useEffect } from "react";

const Timer = ({ setPageState }) => {
  const [second, setSecond] = useState("10");
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let timerInterval;
    if (isActive) {
      timerInterval = setInterval(() => {
        const secondCounter = timer % 60;
        

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
      
        setSecond(computedSecond);
     

        setTimer((counter) => counter - 1);
      }, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [isActive, timer]);

  function stopTimer() {
     if (second === 0) stopTimer();
    setIsActive(false);
    setTimer(10);
    setSecond("10");

  }

  return (
    <div class="container">
      
      <br></br>
      <br></br>
      <div class="time">
        Countdown:
  
        <span class="second">{second}</span>
      </div>
      <br></br>
      <div class="buttons">
        <button onClick={() => setIsActive(!isActive)} class="start">
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={stopTimer} class="reset">
          Reset
        </button>
        <button onClick={() => setPageState("index")}>Back</button>
      </div>
    </div>
  );
};

export default Timer;
