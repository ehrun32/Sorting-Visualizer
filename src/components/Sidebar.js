import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Slider } from "@mui/material";

function Sidebar() {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();

  const [max, setMax] = useState(30);

  const handleAlgo = (algo) => {
    dispatch({
      type: "UPDATE_ALGORITHM",
      algorithm: algo,
    });
  };

  const resetColor = () => {
    dispatch({
      type: "UPDATE_COLOR",
      color: document.getElementById("color").value,
    });
  };

  const handleRange = (_range) => {
    let new_arr = [...myState.values];
    for (let i = 0; i < new_arr.length; i++)
      document.getElementById(i).style.transform = `translateX(${i * 11}px)`;

    resetColor();

    dispatch({
      type: "UPDATE_RANGE",
      range: _range,
    });
    dispatch({
      type: "CHANGE_VALUES",
    });
  };

  const handleColor = (_color) => {
    dispatch({
      type: "UPDATE_COLOR",
      color: _color,
    });
  };

  const handleSpeed = (_speed) => {
    dispatch({
      type: "UPDATE_SPEED",
      speed: _speed,
    });
  };

  useEffect(() => {
    handleRange(30);
  }, []);

  useEffect(() => {
    dispatch({
      type: "UPDATE_COLOR",
      color: document.getElementById("color").value,
    });
  }, [myState.values]);

  const handleWidth = () => {
    if (window.innerWidth > 1300) setMax(70);
    else if (window.innerWidth > 1200) setMax(60);
    else if (window.innerWidth > 1100) setMax(50);
    else if (window.innerWidth > 900) setMax(45);
    else if (window.innerWidth > 800) setMax(40);
    else if (window.innerWidth > 500) setMax(30);
    else setMax(20);
  };

  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-between w-auto bg-[#34495e] h-auto">
      <div className="flex items-center px-5 py-2 justify-center">
        <div
          className="font-mono text-white hidden md:inline-block"
          htmlFor="algo"
        >
          Algorithm:
        </div>
        <select
          className="font-mono text-white  cursor-pointer border-none text-sm outline-none bg-[#34495e]"
          name="algo"
          id="algo"
          onChange={(e) => handleAlgo(e.target.value)}
          disabled={myState.play ? true : false}
        >
          <option value="bubble">Bubble Sort </option>
          <option value="merge">Merge Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="quick">Quick Sort</option>
        </select>
      </div>

      <div className="flex items-center px-5 py-2 justify-between gap-x-1 ">
        <div
          className="font-mono text-white hidden md:inline-block"
          htmlFor="range"
        >
          Range:
        </div>
        <Slider
          style={{ width: "100px" }}
          size="small"
          defaultValue={30}
          id="slider"
          min={1}
          className="flex items-center justify-center"
          disabled={myState.play ? true : false}
          max={max}
          onChange={(e) => handleRange(e.target.value)}
          valueLabelDisplay="auto"
        />
      </div>

      <div className="flex items-center px-5 py-2 justify-between">
        <div
          className="font-mono text-white hidden md:inline-block"
          htmlFor="color"
        >
          Color:
        </div>
        <select
          className="font-mono text-white  cursor-pointer border-none text-sm outline-none bg-[#34495e]"
          name="color"
          id="color"
          onChange={(e) => handleColor(e.target.value)}
          disabled={myState.play ? true : false}
        >
          <option
            value="rgb(0, 149, 199)"
            style={{ color: "rgb(0, 149, 199)" }}
          >
            Blue
          </option>
          <option value="rgb(85, 212, 0)" style={{ color: "rgb(10,200,20)" }}>
            Green
          </option>
          <option value="rgb(255, 112, 112)" style={{ color: "red" }}>
            Red
          </option>
          <option value="grey" style={{ color: "black" }}>
            Black
          </option>
          <option value="#ddd902" style={{ color: "#ddd902" }}>
            Yellow
          </option>
        </select>
      </div>

      <div className="flex items-center px-5 py-2 justify-between">
        <label
          className="font-mono text-white hidden md:inline-block"
          htmlFor="speed"
        >
          Speed:
        </label>
        <select
          className="font-mono text-white  cursor-pointer border-none text-sm outline-none bg-[#34495e]"
          name="speed"
          defaultValue={100}
          id="speed"
          onChange={(e) => handleSpeed(e.target.value)}
          disabled={myState.play ? true : false}
        >
          <option value={500}>Slow</option>
          <option value={200}>Medium</option>
          <option value={100}>Fast</option>
          <option value={20}>Super Fast</option>
          <option value={5}>Ultra Fast</option>
        </select>
      </div>
    </div>
  );
}

export default Sidebar;
