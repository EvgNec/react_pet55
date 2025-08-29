import React, { useState } from 'react'
import CalculationWithoutMemo from "./CalculationWithoutMemo";
import UseMemoCalculation from './UseMemoCalculation';

const HookUseMemo = () => {

    const [count, setCount] = useState(0);

    const [myArray, setMyArray] = useState([]);
  
    const handleSetMyArray = () => {
      setMyArray([...myArray, Math.floor(Math.random() * 100)]);
    };
  return (
<>
      <div className="component-container">
        <div>Counter value: {count}</div>

        <button className="button" onClick={() => setCount(count + 1)}>
          Re-render
        </button>

        <button className="button" onClick={() => handleSetMyArray()}>
          Change the array
        </button>

         <UseMemoCalculation numbers={myArray} /> 
        <CalculationWithoutMemo numbers={myArray} />
      </div>
    </>
  )
}

export default HookUseMemo
