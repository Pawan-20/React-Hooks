import React, { useState, useCallback, useMemo } from "react";
import UseCallback2 from "./UseCallback2";

function App() {
  const [dark, setDark] = useState(false);
  const [number, setNumber] = useState(1);

  //if you replace useCallback with useMemo Headers, getItems will be treated as a variable, and not as a function
  const getItems = useMemo(() => {
    return [number, number + 1, number + 2];
  }, [number]); //Say this is a function that gets data from an API
  //This function is used as a dependency kahi pe toh. Now on every new render, react can't tell the
  //difference between the old function and the new function. Hence it re-renders it
  //every time. This is called Referentioal Equality
  console.log(typeof getItems); //returns a function
  console.log(typeof getItems); // when you use UseMemo, this will be printed as an object

  //REMEMBER, USECALLBACK WILL CREATE THE FUNCTION ONLY WHEN THE DEPENDENCY ARRAY KI VALUSES CHANGES

  const theme = {
    backgroundColor: dark ? "grey" : "white",
    color: dark ? "yellow" : "black",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        valuse={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>ToggleTheme</button>
      <UseCallback2 getItems={getItems} />
    </div>
  );
}

export default App;
