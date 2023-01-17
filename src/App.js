import React from "react";

function App() {
  const b = 1000;
  {
    console.log(b);
    var a = 10;
    //let b = 20;
    const c = 30;
  }

  return <div>App</div>;
}

export default App;
