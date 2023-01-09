import { useState } from "react";
import Attr from "./components/Attr";
import "../dist/main.min.css";

function App() {
  let [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);

    if (count <= 0) setCount((count = 0));
  }

  function resetCount() {
    setCount((count = 0));
  }

  return (
    <div>
      <h1>hello react js {count}</h1>
      <button onClick={increaseCount}> count++ </button>
      <button onClick={decreaseCount}> count-- </button>
      <button onClick={resetCount}> count = 0 </button>

      {/* <Attr></Attr> */}
    </div>
  );
}

export default App;
