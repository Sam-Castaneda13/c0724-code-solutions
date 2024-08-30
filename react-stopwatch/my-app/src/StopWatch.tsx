import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export function StopWatch() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [time, setTime] = useState('off');

  function startInterval() {
    clearInterval(intervalId);
    setIntervalId(setInterval(addSecond, 1000));
  }

  function addSecond() {
    setCount((prev) => prev + 1);
  }

  function HandleClickPause() {
    if (time === 'on') {
      clearInterval(intervalId);
      setIntervalId(undefined);
      setTime('off');
    } else if (time === 'off') {
      setTime('on');
      startInterval();
    }
  }
  function RestartTimeClick() {
    setCount(0);
  }

  return (
    <div>
      <div className="circle" onClick={RestartTimeClick}>
        <span className="count">{count}</span>
      </div>
      <div onClick={HandleClickPause} className="button">
        {intervalId ? <FaPause /> : <FaPlay />}
      </div>
    </div>
  );
}
