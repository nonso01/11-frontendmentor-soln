import React, { useState } from "react";

import { handleMouseOut, handleMouseOver } from "./Header";

const manageData = [
  {
    id: "01",
    title: "  Track company-wide progress",
    summary: ` See how your day-to-day tasks fit into the wider vision. Go from 
    tracking progress at the milestone level all the way done to the 
    smallest of details. Never lose sight of the bigger picture again.`,
  },
  {
    id: "02",
    title: " Advanced built-in reports",
    summary: ` Set internal delivery estimates and track progress toward company 
    goals. Our customisable dashboard helps you build out the reports 
    you need to keep key stakeholders informed.`,
  },

  {
    id: "03",
    title: "Everything you need in one place",
    summary: `  Stop jumping from one service to another to communicate, store files, 
    track tasks and share documents. Manage offers an all-in-one team 
    productivity solution.`,
  },
].map((item) => (
  <div className="child" key={item.id}>
    <i
      style={{
        width: "3.75rem",
        height: "2.5rem",
        borderRadius: "calc(var(--rad) * 2)",
        display: "flex",
        justifyContent: "var(--cn)",
        alignItems: "var(--cn)",
        color: "var(--very-light-gray)",
        backgroundColor: "var(--bright-red)",
      }}
    >
      {item.id}
    </i>
    <div>
      <h3 className="title title-small">{item.title}</h3>{" "}
      <p className="paragraph">{item.summary}</p>
    </div>
  </div>
));

export default function Main() {
  return (
    <div
      className="main"
      onMouseMove={handleMouseOver}
      onPointerLeave={handleMouseOut}
    >
      <div className="main__desc">
        <h2 className="title title-medium">What's different about Manage?</h2>
        <p className="paragraph" style={{ paddingRight: "20.2%" }}>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div className="main__type">{manageData}</div>
    </div>
  );
}
