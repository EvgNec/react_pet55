import React from "react";

const CalculationWithoutMemo = ({
  numbers,
}) => {
  const sum = () => {
    console.log("Calculating without useMemo...");

    return numbers.reduce((total, num) => total + num, 0);
  };

  return <div>Sum: {sum()}</div>;
};

export default CalculationWithoutMemo;