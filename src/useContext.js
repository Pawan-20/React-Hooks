import "./App.css";
import React, { useState } from "react";
import ContextComponent1 from "./ContextComponent1";
import ContextComponent2 from "./ContextComponent2";

export const themeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <div>
      <themeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>

        <ContextComponent1 />
        <ContextComponent2 />
      </themeContext.Provider>
    </div>
  );
}

export default App;
