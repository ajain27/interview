import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const createDigits = () => {
    const digits = [];
    for (let index = 1; index < 10; index++) {
      digits.push(<button key={index}>{index}</button>);
    }
    return digits;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span> 0
        </div>
        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
