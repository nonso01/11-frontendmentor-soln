import React, { useState } from "react";

const w = globalThis ?? window;
const d = document;

function userIsClicking(e) {
  e.preventDefault();
}

function Button({ text = "Get Started" }) {
  return (
    <button className="btn" onClick={userIsClicking}>
      {text}
    </button>
  );
}

export default Button;

export {w, d}
