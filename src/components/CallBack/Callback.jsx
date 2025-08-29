import React, { useState } from 'react'
import TestWithReference from './TestWithReference';

const Callback = () => {

    const [isDark, setIsDark] = useState(false);
    const [randomNewReferrer, setRandomNewReferrer] = useState("12345");
  return (
    <>
    <div>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => {
            setIsDark(e.target.checked);
            setRandomNewReferrer(Math.random().toString());
          }}
        />
        Dark mode
      </label>
    </div>

    <hr />

    <TestWithReference
      referrer={randomNewReferrer}
      // referrer="wizard_of_oz"
      productId="123"
      theme={isDark ? "dark" : "light"}
    />
  </>
  )
}

export default Callback
