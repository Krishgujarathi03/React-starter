import React from "react";
import ReactDOM from "react-dom";
import { add, sub, mult, div } from "./calculator";

ReactDOM.render(
  <>
    <ol>
      <li>Addition={add(10, 7)}</li>
      <li>Subtraction={sub(10, 7)}</li>
      <li>Multiplication={mult(10, 7)}</li>
      <li>Division={div(10, 7)}</li>
    </ol>
  </>,
  document.getElementById("root")
);
