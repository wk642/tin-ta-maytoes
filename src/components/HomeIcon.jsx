import React from "react";
import homeStatic from "../assets/icons/homeStatic.png";
import homeGif from "../assets/icons/homeGif.gif";

export default function HomeIcon ({ handleHomeButtonClick }) {
  return (
    <div
      className="flex justify-start -mt-20 ml-160 relative w-fit h-fit group cursor-pointer"
      onClick={handleHomeButtonClick}>
      <div className="w-8 h-8 mr-26 -mt-8 bg-contain bg-no-repeat relative"
      style={{ backgroundImage: `url('${homeStatic}')` }}>
        <div className="absolute -inset-4 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat animation-bounce" style={{ backgroundImage: `url('${homeGif}')` }} />
      </div>
    </div>
  );
};