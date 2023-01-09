import { useState } from "react";
import Header from "./components/Header";
import Attr from "./components/Attr";
import "../dist/main.min.css";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div id="app">
      <Header />
    </div>
  );
}

export default App;
