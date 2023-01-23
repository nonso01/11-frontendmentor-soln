import React, { useState } from "react";
import Button from "./Button";

const w = globalThis ?? window;
const d = document;

const navLinks = [
  {
    id: 0,
    title: "Pricing",
  },
  {
    id: 1,
    title: "Product",
  },
  {
    id: 2,
    title: "About Us",
  },
  {
    id: 3,
    title: "Careers",
  },
  {
    id: 4,
    title: "Community",
  },
];

const _span = d.createElement("span");
_span.classList.add('over')

function Header() {
  const navItems = navLinks.map((item) => (
    <li key={item.id}>
      <span className="navLinks">{item.title} </span>
    </li>
  ));


  return (
    <div className="hd" onMouseMove={userIsOver} onPointerLeave={userIsOut}>
      <div className="nav__wrapper">
        <div className="hd__logo">
          <img src="../../images/logo.svg" alt="logo" />
        </div>

        <div className="nav">
          <ul> {navItems} </ul>

          <Button />
        </div>
        <div className="menu hide">
          <img src="../../images/icon-hamburger.svg" />
        </div>
      </div>

      <div className="hd__intro">
        <div className="hd__desc">
          <h1 className="title title-big">
            Bring everyone together to build better products.
          </h1>
          <p className="paragraph" style={{ paddingRight: "46.2%" }}>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button />
        </div>

        <div className="hd__chat">
          <img src="../../images/illustration-intro.svg" alt="chat" />
        </div>
      </div>
    </div>
  );
}

export function userIsOver(e) {
  e.preventDefault();
  _span.style.setProperty("--x", `${e.pageX}px`);
  _span.style.setProperty("--y", `${e.clientY}px`);
  e.target.parentNode.append(_span);
  // console.log(e)
}

export function userIsOut(e) {
  const _spot = d.querySelectorAll("span.over");
  _spot.forEach((n) => {
    n.parentNode.removeChild(n);
  });
}

export default Header;
