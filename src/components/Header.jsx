import React, { useState } from "react";
import Button, { w, d } from "./Button";
import { log } from "./Card";

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

const menuUrl = {
  open: "../../images/icon-close.svg",
  close: "../../images/icon-hamburger.svg",
};

const _span = d.createElement("span");
_span.classList.add("over");

w.addEventListener("resize", userIsResizing);

function userIsResizing() {
  // log(w.innerWidth);
  const _a = d.querySelector(".menu");
  const _l = d.querySelector(".layer");
  if (w.innerWidth <= 768) {
    _a.classList.remove("hide");
  } else {
    _a.classList.add("hide");
    _l.classList.add("hide");
  }
}

function userIsClickingOnMenu(e) {
  let _s = e.target.src;
  const _e = d.querySelector(".nav");
  const _l = d.querySelector(".layer");
  if (_s.match(/ham/g)) {
    e.target.src = menuUrl.open;
    _e.classList.add("menu");
    _l.classList.remove("hide");

    d.body.style.overflowY = "hidden";
  } else {
    e.target.src = menuUrl.close;
    _e.classList.remove("menu");
    _l.classList.add("hide");

    d.body.style.overflowY = "scroll";
  }

}

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
          <img src={menuUrl.close} onClick={userIsClickingOnMenu} alt="menu" />
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
