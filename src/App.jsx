import { useState } from "react";
import Header from "./components/Header";
import Attr from "./components/Attr";
import Main from "./components/Main";
import "../dist/main.min.css";

function App() {
  let [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
