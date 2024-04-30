import React from "react";
import AllCounter from "./AllCounter";

const CounterIncreaseHover = (props) => {
  const { counter, increaseCounter } = props;
  return (
    <div>
      {" "}
      <button onMouseEnter={increaseCounter}>Click -</button>
      <span>Hover counter:{counter}</span>
    </div>
  );
};

export default AllCounter(CounterIncreaseHover);
