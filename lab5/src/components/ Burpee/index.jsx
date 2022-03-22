import React, { useState, useRef, useEffect } from "react";

const App = ({ setPageState }) => {

  const countdown = useRef(null);


  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    
    return {
      total,
     
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total,  seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
       
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("30");

    if (countdown.current) clearInterval(countdown.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    countdown.current = id;
  };

  const getDeadTime = () => {
    let timeOver = new Date();

    timeOver.setSeconds(timeOver.getSeconds() + 30);
    return timeOver;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <div className="App">
      Countdown:
      <h2>{timer} seconds left</h2>
      <button onClick={onClickReset}>Reset</button>
      <button onClick={() => setPageState("index")}>Return</button>
    </div>
  );
};

export default App;
