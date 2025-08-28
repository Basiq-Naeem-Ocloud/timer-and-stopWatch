import { useState, useEffect } from "react";
import "./timer.styles.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive((prev) => !prev);

  const reset = () => {
    setIsActive(false);
    setSeconds(0);
    setMinutes(5);
    setHours(0);
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((s) => {
          if (s > 0) {
            return s - 1;
          }

          // seconds == 0
          setMinutes((m) => {
            if (m > 0) {
              setSeconds(59); // reset seconds
              return m - 1;
            }

            // minutes == 0
            setHours((h) => {
              if (h > 0) {
                setMinutes(59);
                setSeconds(59);
                return h - 1;
              }

              // timer reached 0:0:0
              clearInterval(interval);
              return 0;
            });

            return 0;
          });

          return 0; // seconds = 0 at rollover
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (val) => val.toString().padStart(2, "0");

  const handleChange = (event) => {
    const { name, value } = event.target;
    const numericValue = Number(value); // convert from string

    if (name === "hours") {
      setHours(numericValue > 23 ? 23 : numericValue);
    } else if (name === "minutes") {
      setMinutes(numericValue > 59 ? 59 : numericValue);
    } else if (name === "seconds") {
      setSeconds(numericValue > 59 ? 59 : numericValue);
    }

    console.log("inside handle change = ", name, "value = ", numericValue);
  };

  return (
    <div className="timer-container">
      <div className="input-container">
        <input
          className="time-input"
          name="hours"
          value={formatTime(hours)}
          onChange={handleChange}
        />
        <span className="separator">:</span>
        <input
          className="time-input"
          name="minutes"
          value={formatTime(minutes)}
          onChange={handleChange}
        />
        <span className="separator">:</span>
        <input
          className="time-input"
          name="seconds"
          value={formatTime(seconds)}
          onChange={handleChange}
        />
      </div>

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

export default Timer;
