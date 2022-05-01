import React from "react";
import {GrNext} from "react-icons/gr"

export function NextArrow(props) {
  return (
    <div
      className={`absolute rounded-full z-50 right-0 top-1/3 cursor-pointer hover:bg-gray-100 w-8 p-1 ${props.bgWhite ? 'bg-gray-100' : ''}`}
      onClick={props.onClick}
    >
      <GrNext className="text-2xl" />
    </div>
  );
}