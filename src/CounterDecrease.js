import React from "react";
import AllCounter from "./AllCounter";

const CounterDecrease = (props) => {
  const { counter, decreaseCounter, name } = props;
  return (
    <div>
      {" "}
      <button onClick={decreaseCounter}>Click -</button>
      <span>Decrease counter:{counter}</span>
      <span>Name:{name}</span>
    </div>
  );
};

export default AllCounter(CounterDecrease);
