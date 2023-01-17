import React, { useReducer, useState } from "react";
import { INITIAL_STATE } from "./postsReducer";
import { postReducer } from "./postsReducer";

function App() {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);
  console.log(state);

  const fetchData = () => {
    dispatch({ type: "FETCH_START" });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  };

  return (
    <div>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        Fetch Post Title
      </button>

      <div>{state.data.title}</div>
    </div>
  );
}

export default App;

/*
import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(data);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(true);
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };

  return (
    <div>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        Fetch Post Title
      </button>
      {loading && <p>Loading...</p>}
      <div>{data.title}</div>
      {error && <p>Something went Wrong</p>}
    </div>
  );
}

export default App;

*/
