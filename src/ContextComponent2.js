import React, { useContext } from "react";
import { themeContext } from "./App.js";
function ContextComponent2() {
  const darkTheme = useContext(themeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
  };
  return <div style={themeStyles}>HELLO</div>;
}

export default ContextComponent2;
