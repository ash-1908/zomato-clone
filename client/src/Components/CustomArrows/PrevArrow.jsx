import React from "react";
import {GrPrevious} from "react-icons/gr"

export function PrevArrow(props) {
  return (
    <div
    className="absolute rounded-full z-10 left-0 top-1/3 hover:cursor-pointer"
    onClick={props.onClick}
    >
      <GrPrevious className="text-2xl" />
    </div>
  );
}