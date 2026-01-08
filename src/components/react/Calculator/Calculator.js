"use strict";
import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-"];

  // function safeEvalMath(expr) {
  //   const cleaned = expr.replace(/\b0+(\d+)/g, "$1");
  //   return Function(`"use strict"; return (${cleaned})`)();
  // }

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const AC = () => {
    setCalc("0");
    setResult("0");
  };

  const handleDelete = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
    setResult(value);
  };

  const createDigits = () => {
    const digits = [];
    for (let index = 1; index < 10; index++) {
      digits.push(
        <button onClick={() => updateCalc(parseInt(index))} key={index}>
          {index}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""} {calc || 0}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={handleDelete}>DEL</button>
          <button onClick={AC}>AC</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
