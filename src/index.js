import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { RangeDatePicker, InputDatePicker } from "./datePicker";
import { AnIcon } from "./anIcon";

function App() {
  return (
    <div className="App">
      <h2>RangeDatePicker</h2>
      <RangeDatePicker />

      <br />

      <h2>InputDatePicker</h2>
      <div style={{ maxWidth: "310px" }}>
        <InputDatePicker icon={<AnIcon />} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
