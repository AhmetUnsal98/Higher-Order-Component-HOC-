import React, { useState } from "react";

const AllCounter = (WrappedComponent) => {
  const NewCounterComponent = () => {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
      setCounter(counter + 1);
    };

    return (
      <WrappedComponent counter={counter} increaseCounter={increaseCounter} />
    );
  };

  return NewCounterComponent;
};

export default AllCounter;
