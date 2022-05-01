import React from "react";
import {GrPrevious} from "react-icons/gr"

export function PrevArrow(props) {
  return (
    <div
    className={`absolute rounded-full z-10 left-0 top-1/3 cursor-pointer hover:bg-gray-100 w-8 p-1 ${props.bgWhite ? 'bg-gray-100' : ''}`}
    onClick={props.onClick}
    >
      <GrPrevious className="text-2xl" />
    </div>
  );
}