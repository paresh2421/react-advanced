import { useState, useEffect } from "react";

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [thirdValue, setThirdValue] = useState(0);

  useEffect(() => {
    console.log("hello from first useEffect");
  }, [value, secondValue, thirdValue]);

  useEffect(() => {
    console.log("hello from second useEffect");
  }, []);

  useEffect(() => {
    console.log("hello from third useEffect");
  }, []);
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
      <h1>third value : {thirdValue}</h1>
      <button className="btn" onClick={() => setThirdValue(thirdValue + 1)}>
        second value
      </button>
    </div>
  );
};
export default MultipleEffects;
