import React, { useEffect, useLayoutEffect } from "react";

//useLayoutEffect will always be executed before useEffect, you know the reason why

function App() {
  useEffect(() => {
    console.log("use Effect");
  });

  useLayoutEffect(() => console.log("useLayout Effect"));
  return <div>Hello</div>;
}

export default App;
