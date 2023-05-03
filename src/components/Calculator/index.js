
import React, { useState } from "react";
import './index.css';


function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");

  const handleNumChange = (event, num) => {
    if (num === 1) {
      setNum1(event.target.value);
    } else if (num === 2) {
      setNum2(event.target.value);
    }
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  const handleCalculate = () => {
    let res;
    switch (operation) {
      case "+":
        res = Number(num1) + Number(num2);
        break;
      case "-":
        res = Number(num1) - Number(num2);
        break;
      case "x":
        res = Number(num1) * Number(num2);
        break;
      case "/":
        res = Number(num1) / Number(num2);
        break;
      case "^":
        res = Math.pow(Number(num1), Number(num2));
        break;
      case "sqrt":
        res = Math.sqrt(Number(num1));
        break;
      case "poly":
        res = (Number(num1) * Number(num2)) / 2;
        break;
      case "cyl":
        res = Math.PI * Math.pow(Number(num1), 2) * Number(num2);
        break;
      case "cylsa":
        res = 2 * Math.PI * Number(num1) * (Number(num1) + Number(num2));
        break;
      default:
        break;
    }
    setResult(res);
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setResult("");
    setOperation("");
  };
  const handleNumberClick = (num) => {
    if (operation === '') {
      // If no operation has been selected yet, update num1
      setNum1(num1 + num.toString());
    } else {
      // Otherwise, update num2
      setNum2(num2 + num.toString());
    }
  };
  

  return (
    <>
<div class="container">
        <div className="calc_box">
            <div className="calc_inner">
                <div className="inputs">
                    <div className="input_1">
                        <input type="number" id="num1" value={num1}
                          onChange={(event) => handleNumChange(event, 1)} className="input1" name="input1"/>
                    </div>
                    <div className="input_2">
                        <input type="number" className="input2" id="num2"
                          value={num2}
                          onChange={(event) => handleNumChange(event, 2)} name="input2"/>
                    </div>
                </div>
                <div className="operators_clear">
                    <select name="operators" id="operation" value={operation} onChange={handleOperationChange}>
                    <option value="">Functions here</option>
                    <option value="+">Addition (+)</option>
                    <option value="-">Subtraction (-)</option>
                    <option value="x">Multiplication (x)</option>
                    <option value="/">Division (/)</option>
                    <option value="^">Power of (^)</option>
                    <option value="sqrt">Square Root</option>
                    <option value="poly">Area of Polygon</option>
                    <option value="cyl">Volume of Cylinder</option>
                    <option value="cylsa">Surface Area of Cylinder</option>
                    </select>
                    <button  onClick={handleClear} className="reset_btn">Clear</button>
                </div>
                <div className="numbers">
                    <div className="row">
                        <div className="col-4">
                        <button className="num_btn" onClick={() => handleNumberClick(7)}>7</button>
                        </div>
                        <div className="col-4">
                        <button className="num_btn" onClick={() => handleNumberClick(8)}>8</button>
                        </div>
                        <div className="col-4">
                        <button className="num_btn" onClick={() => handleNumberClick(9)}>9</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                        <button className="num_btn" onClick={() => handleNumberClick(4)}>4</button>
                        </div>
                        <div class="col-4">
                        <button className="num_btn" onClick={() => handleNumberClick(5)}>5</button>
                        </div>
                        <div className="col-4">
                        <button className="num_btn" onClick={() => handleNumberClick(6)}>6</button>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-4">
                        <button className="num_btn"onClick={() => handleNumberClick(1)}>1</button>
                        </div>
                        <div className="col-4">
                        <button className="num_btn" onClick={() => handleNumberClick(2)}>2</button>
                        </div>
                        <div class="col-4">
                        <button className="num_btn" onClick={() => handleNumberClick(3)}>3</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                        <button className="num_btn" onClick={() => handleNumberClick(0)}>0</button>
                        </div>
                        <div class="col-4">
                        <button className="num_btn" onClick={() => handleNumberClick('.')}>.</button>
                        </div>
                        <div class="col-4">
                        <button className="num_btn" onClick={() => handleNumberClick('00')}>00</button>
                        </div>
                    </div>
                </div>
                <div className="results">
                    <div className="outputs">
                        <input type="number" placeholder="Output" className="output"id="result" value={result} disabled  name="output"/>
                    </div>
                    <button className="submit_btn" onClick={handleCalculate} type="submit">Calculate</button>
                </div>
            </div>
        </div>
    </div>
  </>
);
}

export default Calculator;