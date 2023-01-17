import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState("Posts");
  const [resource, setResource] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${items}`)
      .then((response) => response.json())
      .then((json) => setResource(json));
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
      <br></br>
      <p>{items}</p>
      <p>{resource.map((item) => JSON.stringify(item.name))}</p>
    </div>
  );
}

export default App;
