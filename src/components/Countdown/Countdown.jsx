import React, { useEffect, useRef, useState } from "react";

function Countdown({ isDisplay }) {
  const [time, setTime] = useState(180);
  const intervalId = useRef();
  const timeRef=useRef();
  useEffect(() => {
    timeRef.current=time;
  })
  const handleStart = () => {
    intervalId.current = setInterval(() => {
        setTime(t => t-1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(intervalId.current);
  };
  console.log(`timeRef : ${timeRef.current}`, `time: ${time}`)
  return (
    <div>
      {isDisplay && <h1>time: {time}</h1>}

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default Countdown;
