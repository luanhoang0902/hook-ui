import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

ExampleRef.propTypes = {};

function ExampleRef(props) {
  const [count, setCount] = useState(60);

  let timerId =useRef()
  const prevCount = useRef()
  const h1Ref = useRef()
  let toado = useRef()

  useEffect(() => {
      toado.current = h1Ref.current.getBoundingClientRect();
      console.log(toado.current.x)
  },[])

  useEffect(() => {
      prevCount.current = count
  },[count])

  const handleStart = () => {
     timerId.current = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);
    
  };
  const handleStop = () => {
    clearInterval(timerId.current);
  };

  return (
    <div>
      <h1 ref = {h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <p>Giá trị hiện tại: {count}. Giá trị trước đó: {prevCount.current}</p>
      <b>Tọa độ: {toado.current.x}</b>
    </div>
  );
}

export default ExampleRef;
