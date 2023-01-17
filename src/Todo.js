import React from "react";

function Todo({ state, dispatch }) {
  console.log(state.name);
  return (
    <div>
      <span style={{ color: state.complete ? "#AAA" : "#000" }}>
        {state.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: "isTodoComplete", payload: { id: state.id } })
        }
      >
        Complete To Do
      </button>
    </div>
  );
}

export default Todo;
