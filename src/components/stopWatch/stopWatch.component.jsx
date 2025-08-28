import { useState, useEffect } from "react";
import "./stopWatch.styles.css";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive((prev) => !prev);

  const reset = () => {
    setIsActive(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev === 59) {
            setMinutes((m) => {
              if (m === 59) {
                setHours((h) => h + 1);
                return 0;
              }
              return m + 1;
            });
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (val) => val.toString().padStart(2, "0");

  return (
    <div className="stopWatch-container">
      <h1>
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </h1>

      <div className="button-container">
        <button onClick={toggle} className="btn-primary">
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={reset} className="btn-primary">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
