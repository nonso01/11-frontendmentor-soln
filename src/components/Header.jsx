import React, { useState } from "react";
import Button, { w, d, log } from "./Button";
import Icon, { iconUrl } from "./Icon";

const _span = d.createElement("span");
_span.classList.add("over");


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
].map((item) => (
  <li key={item.id}>
    <span className="navLinks">{item.title} </span>
  </li>
));

export default function Header() {
  let [toggleMenu, setToggleMenu] = useState(false);

  w.onresize = () => {
    const _a = d.querySelector(".menu");

    if (w.innerWidth <= 768) {
      _a.classList.remove("hide");
    } else {
      _a.classList.add("hide");
    }
  };

  function handleClick(e) {
    let t = e.target,
      datasetX = t?.dataset?.x;
    if (datasetX) {
      setToggleMenu(!toggleMenu);
    }
  }

  {
    toggleMenu
      ? (d.body.style.overflowY = "hidden")
      : (d.body.style.overflowY = "scroll");
  }

  return (
    <div
      className="hd"
      onClick={handleClick}
    >
      <div className="nav__wrapper">
        <div className="hd__logo">
          <Icon url={iconUrl.logo} />
        </div>

        <div className={toggleMenu ? "nav menu" : "nav"}>
          <ul> {navLinks} </ul>
          <Button />
        </div>

        <div className="menu hide">
          <Icon
            url={toggleMenu ? iconUrl.crossIcon : iconUrl.menuIcon}
            data_x={"menu"}
          />
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
          <Icon url={iconUrl.illustrationIntro} />
        </div>
      </div>
      {toggleMenu ? <div className="layer"></div> : void 0}
    </div>
  );
}

export function handleMouseOver(e) {
  e.preventDefault();
  _span.style.setProperty("--x", `${e.pageX}px`);
  _span.style.setProperty("--y", `${e.clientY}px`);
  e.target.parentNode.append(_span);
}

export function handleMouseOut(e) {
  const _spot = d.querySelectorAll("span.over");
  _spot.forEach((n) => {
    n.parentNode.removeChild(n);
  });
}
