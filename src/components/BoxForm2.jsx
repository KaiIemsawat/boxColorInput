import React, { useState } from "react";
import style from "./style.module.css";

const BoxForm2 = (props) => {
    const [inputColor, setInputColor] = useState("");
    const [inputWidth, setInputWidth] = useState();
    const [inputHeight, setInputHeight] = useState();
    const [boxList, setBoxList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const setStyle = {
            backgroundColor: inputColor,
            width: `${inputWidth}px`,
            height: `${inputHeight}px`,
        };
        setBoxList([...boxList, setStyle]);
        setInputColor("");
        setInputWidth();
        setInputHeight();
    };

    return (
        <div className="inputContainer col">
            <form onSubmit={handleSubmit}>
                <label>Color: </label>
                <input
                    type="text"
                    className="form-control"
                    value={inputColor}
                    required="required"
                    onChange={(e) => setInputColor(e.target.value)}
                />
                <label>Box Width: </label>
                <input
                    type="text"
                    className="form-control"
                    value={inputWidth}
                    required="required"
                    placeholder="Input Width Number"
                    onChange={(e) => setInputWidth(e.target.value)}
                />
                <label>Box Height: </label>
                <input
                    type="text"
                    className="form-control"
                    value={inputHeight}
                    required="required"
                    placeholder="Input Height Number"
                    onChange={(e) => setInputHeight(e.target.value)}
                />
                <input
                    type="submit"
                    className="btn btn-secondary"
                    value="Submit"
                />
            </form>
            {boxList.length < 1 ? (
                <p className={style.message}>
                    Please input proper color name or code (eg. #efdd86 for
                    mustard yellow)
                </p>
            ) : (
                <div className="renderContainer">
                    {boxList.map((box, index) => (
                        <div
                            key={index}
                            style={box}
                            className={style.boxStyle}></div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BoxForm2;
