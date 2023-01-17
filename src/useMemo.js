import "./App.css";
import { useState, useMemo, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  /*
const themeStyles ={
  backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
}

  */

  //If the above was uncommented the themeSTyles would have ran har ek render pe, even if we do not change the themeStyle's values. This is because of object referemcing. Recall that obj1={} and obj2={} are not equal, they are object having equal values but they are not equal. So Useffect,when compares the last value with the post rendered value it treates the post-rendered value as new. This is the same problem with arrays. hence we use UseMemo

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);

  //

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <button
        onClick={() => {
          setDark((prevDark) => !prevDark);
        }}
      >
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  for (let i = 0; i <= 9999099; i++) {}
  return num * 2;
}

export default App;
