import { useState } from "react";
import { calculate } from "./utils/calculate";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");

  const operators = ["+", "-", "*", "/"];

  const handleNumber = (value) => {
    if (input === "0") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const handleOperator = (op) => {
    let last = input.slice(-1);

    if (operators.includes(last)) {
      setInput(input.slice(0, -1) + op);
    } else {
      setInput(input + op);
    }
  };

  const handleDecimal = () => {
    let parts = input.split(/[\+\-\*\/]/);
    let lastNumber = parts[parts.length - 1];

    if (!lastNumber.includes(".")) {
      setInput(input + ".");
    }
  };

  const handleClear = () => {
    setInput("0");
    setResult("");
  };

  const handleEquals = () => {
    let res = calculate(input);
    setResult(res);
    setInput(String(res));
  };

  return (
    <div className="calculator">
      <div id="display">{result !== "" ? result : input}</div>

      <div className="buttons">
        {/* ROW 1 */}
        <button id="clear" onClick={handleClear}>
          AC
        </button>
        <button id="divide" onClick={() => handleOperator("/")}>
          /
        </button>

        {/* ROW 2 */}
        <button id="seven" onClick={() => handleNumber("7")}>
          7
        </button>
        <button id="eight" onClick={() => handleNumber("8")}>
          8
        </button>
        <button id="nine" onClick={() => handleNumber("9")}>
          9
        </button>
        <button id="multiply" onClick={() => handleOperator("*")}>
          *
        </button>

        {/* ROW 3 */}
        <button id="four" onClick={() => handleNumber("4")}>
          4
        </button>
        <button id="five" onClick={() => handleNumber("5")}>
          5
        </button>
        <button id="six" onClick={() => handleNumber("6")}>
          6
        </button>
        <button id="subtract" onClick={() => handleOperator("-")}>
          -
        </button>

        {/* ROW 4 */}
        <button id="one" onClick={() => handleNumber("1")}>
          1
        </button>
        <button id="two" onClick={() => handleNumber("2")}>
          2
        </button>
        <button id="three" onClick={() => handleNumber("3")}>
          3
        </button>
        <button id="add" onClick={() => handleOperator("+")}>
          +
        </button>

        {/* ROW 5 */}
        <button id="zero" onClick={() => handleNumber("0")}>
          0
        </button>
        <button id="decimal" onClick={handleDecimal}>
          .
        </button>
        <button id="equals" onClick={handleEquals}>
          =
        </button>
        <div className="casio-brand-badge">
          <span>CASIO</span> By me
        </div>
      </div>
    </div>
  );
}
