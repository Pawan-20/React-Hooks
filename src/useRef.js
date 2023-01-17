import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </div>
  );
}

export default App;

/*
import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef("Hello");
  const focusElement = () => {
    //  console.log(inputRef.current); //<input value>
    //This is exactly the same as document.querySelecto. Aisa karne pe hum poora node hi pakad lete hai
    inputRef.current.focus();
  };
  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focusElement}>Focus</button>
    </div>
  );
}

export default App;
*/

/*
import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const count = useRef(1);

  useEffect(() => {
    count.current += 1;
  }, [name]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <p>Rendered {count.current} times</p>
    </div>
  );
}

export default App;

*/
