import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import QuickSort from "./QuickSort";
import MergeSort from "./MergeSort";
import SelectionSort from "./SelectionSort";

import "./Visuals.css";

function Visuals() {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const color = myState.color;
  const range = myState.range;

  const changeValues = () => {
    let new_arr = [...myState.values];
    for (let i = 0; i < new_arr.length; i++)
      document.getElementById(i).style.transform = `translateX(${i * 11}px)`;

    dispatch({
      type: "CHANGE_VALUES",
    });
  };

  const handlePlayPause = (play) => {
    if (!myState.play) {
      document.getElementById("change-btn").disabled = true;
      document.getElementById("change-btn").style.backgroundColor = "grey";
      document.getElementById("play-btn").disabled = true;
      document.getElementById("play-btn").style.backgroundColor = "grey";
    } else {
      return;
    }
    dispatch({
      type: "PLAY_PAUSE",
      _play: play,
    });
  };

  useEffect(() => {
    if (!myState.play) {
      document.getElementById("play-btn").disabled = false;
      document.getElementById("play-btn").style.backgroundColor = "#34495e";
      document.getElementById("change-btn").disabled = false;
      document.getElementById("change-btn").style.backgroundColor = "#34495e";
    }
  }, [myState.play]);

  let speed = myState.speed;
  if (myState.algorithm === "selection") speed *= 3;
  else if (myState.algorithm === "merge") speed *= 5;
  else if (myState.algorithm === "quick") speed *= 6;
  return (
    <div className="flex flex-col flex-1 p-5 items-center justify-start ">
      <div className="flex w-full items-center justify-center relative">
        {
          <div
            className="flex items-end justify-start h-80 mb-10 relative border-black border-b-[2px] "
            style={{ width: `${myState.values.length * 11}px` }}
          >
            {myState.values.map((item) => {
              return (
                <div
                  className="absolute text-[8px]"
                  key={item[1]}
                  id={item[1]}
                  style={{
                    transition: `${speed / 1000}s linear all`,
                    transform: `translateX(${item[1] * 11}px)`,
                  }}
                >
                  <h4>{item[0]}</h4>
                  <div
                    style={{
                      height: `${item[0] * 3}px`,
                      backgroundColor: color,
                      width: range < 35 ? "8px" : "6px",
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        }
      </div>
      <div className="flex justify-between">
        <button
          className="w-[150px] bg-[#34495e] p-2 border-none rounded m-2 font-mono font-bold text-white"
          id="change-btn"
          onClick={changeValues}
        >
          Change Array
        </button>
        <button
          className="w-[150px] bg-[#34495e] p-2 border-none rounded m-2 font-mono font-bold text-white"
          id="play-btn"
          onClick={() => handlePlayPause(true)}
        >
          Sort!
        </button>
      </div>

      <BubbleSort />
      <InsertionSort />
      <MergeSort />
      <QuickSort />
      <SelectionSort />
    </div>
  );
}

export default Visuals;
