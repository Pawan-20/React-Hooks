import React from "react";
import { useState, useReducer } from "react";
import Todo from "./Todo";
function reducer(state, action) {
  switch (action.type) {
    case "addToDo":
      return [...state, newTodo(action.payload.name)];
    case "isTodoComplete":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
        //checking if the current todo has the same id or not. current to do is action.payload.id
      });
  }
}

function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  };
}

function App() {
  const [states, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "addToDo", payload: { name: name } }); //payload is an objext
    setName(""); //we want to empty the input field
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {states.map((todo) => {
        // {
        //   console.log(todo);
        // }
        return <Todo key={todo.id} state={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}

/*
import React from "react";
import { useState, useReducer } from "react";

//useReducer works in the same fashion as useState, it just is usefull to manage complex states
//reducer is a function that we perform on a state. state is the current state, action is sent by dispatch

const reducer = (state, action) => {
  return { count: state.count + 1 }; //npow everytime We will call dispatch, the state will be updated by one
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //here the state is usually an object cause state complex will be more complex than a single value
  //useReducer returns two values,  first is a state, second this is a function called as dispatch
  //we call dispatch to update our state, pretty much like setState. This dispatch calls apna reducer function by giving it parameters (jo action mei jaata hai)
  const [count, setCount] = useState(0);

  // function increment() {
  //   setCount((c) => c + 1);
  // }

  function increment() {
    dispatch();
  }

  function decrement() {
    setCount((c) => c - 1);
  }
  return (
    <div>
      <button onClick={() => decrement()}>-</button>
      {state.count}
      <button onClick={() => increment()}>+</button>
    </div>
  );
}

export default App;








*/

export default App;

/*
import React from "react";
import { useState, useReducer } from "react";

//useReducer works in the same fashion as useState, it just is usefull to manage complex states
//reducer is a function that we perform on a state. state is the current state, action is sent by dispatch

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }

  return { count: state.count + 1 }; //npow everytime We will call dispatch, the state will be updated by one
};


function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //here the state is usually an object cause state complex will be more complex than a single value
  //useReducer returns two values,  first is a state, second this is a function called as dispatch
  //we call dispatch to update our state, pretty much like setState. This dispatch calls apna reducer function by giving it parameters (jo action mei jaata hai)
  const [count, setCount] = useState(0);

  // function increment() {
  //   setCount((c) => c + 1);
  // }

  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }
  return (
    <div>
      <button onClick={() => decrement()}>-</button>
      {state.count}
      <button onClick={() => increment()}>+</button>
    </div>
  );
}
*/
