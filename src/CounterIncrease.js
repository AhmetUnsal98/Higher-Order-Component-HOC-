import React from "react";
import AllCounter from "./AllCounter";
const CounterIncrease = (props) => {
  const { counter, increaseCounter, name } = props;
  return (
    <div style={{}}>
      <button onClick={increaseCounter}>Click +</button>
      <span>Increase counter:{counter}</span>
      <span>Name:{name}</span>
    </div>
  );
};

export default AllCounter(CounterIncrease);
