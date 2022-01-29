import React from "react";
import {GrNext} from "react-icons/gr"

export function NextArrow(props) {
  return (
    <div
      className="absolute rounded-full z-10 right-0 top-1/3 hover:cursor-pointer"
      onClick={props.onClick}
    >
      <GrNext className="text-2xl" />
    </div>
  );
}