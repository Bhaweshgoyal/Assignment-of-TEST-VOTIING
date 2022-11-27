import React, { useState } from "react";
import "./BackgroundBox.css";

export const BackgroundBox = () => {
  const [countPhp, setcountPhp] = useState(0);
  const [countPython, setcountPython] = useState(0);
  const [countJAVA, setcountJAVA] = useState(0);
  const [countReact, setcountReact] = useState(0);
  let newcountPhp = countPhp;
  let newcountPython = countPython;
  let newcountJAVA = countJAVA;
  let newcountReact = countReact;

  function handelClick(type) {
    // e.currentTarget.disabled = true;
    switch (type) {
      case "php":
        // return setcountPhp(newcountPhp)
        setcountPhp(++newcountPhp);
        break;
      case "React":
        setcountReact(++newcountReact);
        break;
      case "Python":
        setcountPython(++newcountPython);
        break;
      case "JAVA":
        setcountJAVA(++newcountJAVA);
        break;
    }
  }

  return (
    <div className="BackgroundBox">
      <div className="heading">Vote Your Language!</div>
      <div className="input-field">
        <div className="divBox">
          <div style={{ margin: "10px" }}>{newcountPhp}</div>
          <div className="lang">PHP</div>
          <button
            className="btn"
            onClick={() => {
              handelClick("php");
            }}
          >
            Click Here
          </button>
        </div>
        <div className="divBox">
          <div style={{ margin: "10px" }}>{newcountPython}</div>
          <div className="lang"> Python</div>
          <button
            className="btn"
            onClick={() => {
              handelClick("Python");
            }}
          >
            Click Here
          </button>
        </div>
        <div className="divBox">
          <div style={{ margin: "10px" }}>{newcountReact}</div>
          <div className="lang"> React</div>
          <button
            className="btn"
            onClick={() => {
              handelClick("React");
            }}
          >
            Click Here
          </button>
        </div>
        <div className="divBox">
          <div style={{ margin: "10px" }}>{newcountJAVA}</div>
          <div className="lang"> Java</div>
          <button
            className="btn"
            onClick={() => {
              handelClick("JAVA");
            }}
          >
            {" "}
            Click Here
          </button>
        </div>
      </div>
    </div>
  );
};
