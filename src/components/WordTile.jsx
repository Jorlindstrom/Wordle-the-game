import React from "react";

export default function WordTile({ letter, feedback }) {
    return <div className={`tile ${feedback}`}>{letter}</div>;
  }
  