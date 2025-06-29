 import React from "react";
 
import MyComponent from './MyComponent';

function myFunction() {
  return "Hello, World!";
}

 import { useState } from "react";
const ClickEvent = () => {
  const [number, setNumber] = useState(0);
const increment = () => {
  setNumber(number + 1);
};

const decrement = () => {
  if (number > 1) {
    setNumber(number - 1);
  }
};

const reset = () => {
  setNumber(0);
};


  return (
    <div>
      <button onClick={increment}>Click Me!</button>
      <button onClick={decrement}>Click Me!</button>
      <button onClick={reset}>Click Me!</button>
      {number > 0 && <p>Button clicked {number} times</p>}
    </div>
  );
};

export default ClickEvent;
