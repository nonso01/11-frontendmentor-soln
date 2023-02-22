import { useState } from "react";

import crossIcon from "../../images/icon-close.svg";
import menuIcon from "../../images/icon-hamburger.svg";
import logo from "../../images/logo.svg";
import logoWhite from "../../images/logo-wt.svg";
import illustrationIntro from "../../images/illustration-intro.svg";

export const iconUrl = {
  crossIcon,
  menuIcon,
  logo,
  logoWhite,
  illustrationIntro,
};

export default function Icon({ url, data_x }) {
  if (url) {
    return (
      <i className="icon">
        <img src={url} alt="an icon" data-x={data_x} />
      </i>
    );
  }
  return null;
}
