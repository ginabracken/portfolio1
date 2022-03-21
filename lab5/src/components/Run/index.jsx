import React, { useState, useEffect } from "react";

//followed tutorial on this wesbite for this file as well as made a few changes of my own
//https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2

//there is a few second lag but the timer does work
const Timer = ({setPageState}) => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let timerInterval;
    if (isActive) {
      timerInterval = setInterval(() => {
      
        const secondCounter = timer % 60;
        const minuteCounter = Math.floor(timer / 60);
        
 
        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;
         
 
        
        setSecond(computedSecond);
        setMinute(computedMinute);

        setTimer((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [isActive, timer]);

  function stopTimer() {
    setIsActive(false);
    setTimer(0);
    setSecond("00");
    setMinute("00");
  }

  return (
    <div class="container">
      Running
      <br></br>
      <br></br>
      <div class="time">
        Timer:
        <span class="minute">{minute}</span>
        <span>:</span>
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
