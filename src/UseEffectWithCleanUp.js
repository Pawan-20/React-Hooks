import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState("Posts");

  //Use effect mei the cleanup function runs first. This is so because it removes sab cheeze jo bhi render ke pehle lagi thiS
  useEffect(() => {
    console.log("We are doing something here");
    return () => {
      console.log("Hi,I'm the cleanup Function");
    };
  }, [items]);

  return (
    <div>
      <button
        onClick={() => {
          setItems("Users");
        }}
      >
        Users
      </button>
      <button
        onClick={() => {
          setItems("Posts");
        }}
      >
        Posts
      </button>
      <button
        onClick={() => {
          setItems("Albums");
        }}
      >
        Albums
      </button>
    </div>
  );
}

export default App;

/* SEE THIS EXAMPLE AB

import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return <div>{windowWidth}</div>;
}

export default App;
*/
