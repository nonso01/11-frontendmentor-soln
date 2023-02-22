import React, { useState } from "react";

const w = globalThis ?? window;
const d = document;
const log = console.log;
// function userIsClicking(e) {
//   e.preventDefault();
// }

function Button({ text = "Get Started", onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

export { w, d, log };
