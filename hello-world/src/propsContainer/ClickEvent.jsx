 import React from "react";
const ClickEvent = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default ClickEvent;
