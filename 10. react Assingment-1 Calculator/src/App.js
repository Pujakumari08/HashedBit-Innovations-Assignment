import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "*", "-", "+", "."];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!operators.includes(value)) {
      // eslint-disable-next-line no-eval
      setResult(eval(calc + value).toString());
    }
  };
  const createDigit = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };

  const calculate = (value) => {
    // eslint-disable-next-line no-eval
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    } else {
      setCalc(calc.slice(0, -1));
    }
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""} {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("+")}>+</button>

          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          {createDigit()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
