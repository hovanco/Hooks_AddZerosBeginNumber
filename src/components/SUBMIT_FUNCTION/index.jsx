import React, { useState } from "react";
import {
  addZeroBeginNumber,
  addZeroAfterNumber,
} from "../HANDLE_STRING_FUNCTION";

function SUBMIT_FUNCTION() {
  const [inputNum, setInputNum] = useState("");
  const [inputLength, setInputLength] = useState("");
  const [result, setResult] = useState("");
  const [zeroAfterNum, setZeroAfterNum] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let arrNumber = inputNum.split(",").map((i) => +i);
    let arrLength = inputLength.split(",").map((i) => +i);

    setResult(addZeroBeginNumber(arrNumber, arrLength));
    setZeroAfterNum(addZeroAfterNumber(arrNumber, arrLength));
  };

  const handleReset = (event) => {
    event.preventDefault();
    setInputNum("");
    setInputLength("");
    setResult("");
    setZeroAfterNum("");
  };

  return (
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
      style={{ marginLeft: "25%", marginTop: "5%" }}
    >
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">
            Add Zeros(0) number beginning number - Add Zeros(0) number ending
            number
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Input number</label>
                <input
                  type="text"
                  className="form-control"
                  name="num1"
                  value={inputNum}
                  onChange={(e) => setInputNum(e.target.value)} // convert string-number to number
                  placeholder=""
                />
              </div>
            </div>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Length number</label>
                <input
                  type="text"
                  className="form-control"
                  value={inputLength}
                  onChange={(e) => setInputLength(e.target.value)} // convert string-number to number
                />
              </div>
            </div>

            <hr />
            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Add zeros begin number</label>
                <input type="text" className="form-control" value={result} />
              </div>
            </div>

            <hr />
            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Add zeros after number</label>
                <input
                  type="text"
                  className="form-control"
                  value={zeroAfterNum}
                />
              </div>
            </div>
            <hr />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!inputNum} // disabled Submit btn after enter data at input
            >
              Submit
            </button>
            <button onClick={handleReset} className="btn btn-danger">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SUBMIT_FUNCTION;
