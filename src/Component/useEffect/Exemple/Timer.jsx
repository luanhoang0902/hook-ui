import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

Timer.propTypes = {};

function Timer(props) {
  const [countdown, setCountdown] = useState(180);
  const [countdown1, setCountdown1] = useState(180);
  useEffect(() => {
    const timerId = setInterval(() => {
        setCountdown(prev => prev - 1);

      }, 1000);
      return () => clearInterval(timerId)
  },[])
  useEffect(() => {
    setTimeout(() => {
        setCountdown1(countdown1 - 1);
      }, 1000);
  },[countdown1])
  return (
    <div>
      <h1>setInterval:{countdown}</h1>
      <h1>setTimeout: {countdown1}</h1>
    </div>
  );
}

export default Timer;
