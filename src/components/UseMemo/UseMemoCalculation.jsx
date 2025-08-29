import React, { useMemo } from "react";

const UseMemoCalculation = ({ numbers }) => {
  const sum = useMemo(() => {
    console.log("Calculating with useMemo...");

    return numbers.reduce((total, num) => total + num, 0);
  }, [numbers]);

  return <div>Sum: {sum}</div>;
};
export default UseMemoCalculation;