import React, { useState } from "react";
import Button from "./Button";

const nonso = {
  name: "Nonso Martin",
  social: "https://twitter.com/Nonsomartin6",
};

function Attr() {
  return (
    <div className="attr">
      <p>
        Challenge
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by
        <a href={nonso.social} target="_blank">
          {nonso.name}
        </a>
        . 
      </p>
    </div>
  );
}

export default Attr;
