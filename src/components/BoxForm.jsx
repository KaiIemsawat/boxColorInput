import React, { useState } from "react";
import style from "./style.module.css";

let boxArr = [];
const BoxForm = (props) => {
  const [box, setBox] = useState("");

  const createBox = (e) => {
    e.preventDefault();
    boxArr.push(box);
    console.log(boxArr);

    setBox("");
  };

  return (
    <div className="mainContainer">
      <div className="form">
        <form onSubmit={createBox}>
          <label className="form-label">Color </label>
          <input
            type="text"
            className="form-control"
            value={box}
            onChange={(e) => setBox(e.target.value)}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
      <div className="colorsArea">
        {boxArr.length < 1 ? (
          <p>
            Please input proper color name or code (eg. #efdd86 for mustard
            yellow)
          </p>
        ) : (
          boxArr.map((eachBox, index) => (
            <div
              key={index}
              className={style.boxStyle}
              style={{ background: eachBox }}>
              <p>{eachBox}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default BoxForm;
