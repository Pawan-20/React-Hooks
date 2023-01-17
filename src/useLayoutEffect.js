import React, { useLayoutEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <hr />
      {count}
    </div>
  );
};

//useEffect runs asynchronously
//useLayoutEffect runs synchronously between when react calculates your dom and when it actually paints it out to the screen
/*
When to use -
to manage your dom elements
if you are going to move somethings in the dom which are gonna be visible to the user
Explanation of the second point-
If you're moving some element say a picture when a user clicks on it then you'll need to use useLayoutEffect. If you use useEfffect, then the user will be able to see the thing acutally moving. We don't want the user to see yeh sab. We only want the user to see the final position

USELAYOUTEFFECT but has some performance issues since it runs synchronously

*/

export default App;
