import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/main";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Attr from "./components/Attr";
import "../dist/main.min.css";

function App() {
  let [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <div className="space"></div>
      <Card />
      <div className="space"></div>
      <Footer />
    </>
  );
}

export default App;
