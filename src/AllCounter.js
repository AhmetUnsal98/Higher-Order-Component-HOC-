import React, { useState } from "react";

const AllCounter = (WrappedComponent) => {
  const NewCounterComponent = (props) => {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
      setCounter(counter + 1);
    };

    const decreaseCounter = () => {
      setCounter(counter - 1);
    };

    return (
      <WrappedComponent
        counter={counter}
        increaseCounter={increaseCounter}
        decreaseCounter={decreaseCounter}
        {...props}
      />
    );
  };

  return NewCounterComponent;
};

export default AllCounter;
