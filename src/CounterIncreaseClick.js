import React from "react";
import AllCounter from "./AllCounter";
const CounterIncreaseClick = (props) => {
  const { counter, increaseCounter } = props;
  return (
    <div style={{}}>
      <button onClick={increaseCounter}>Click +</button>
      <span>Click counter:{counter}</span>
    </div>
  );
};

export default AllCounter(CounterIncreaseClick);
