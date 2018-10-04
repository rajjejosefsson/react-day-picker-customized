import React from "react";

export const CustomNav = props => (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <button
      style={{ position: "absolute", top: "15px", left: "10px" }}
      onClick={() => props.onPreviousClick()}
    >
      Prev
    </button>
    <button
      style={{ position: "absolute", top: "15px", right: "10px" }}
      onClick={() => props.onNextClick()}
    >
      Next
    </button>
  </div>
);
