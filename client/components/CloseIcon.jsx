import React from "react";
import { Link } from "react-router";
import CloseIconStatic from "../assets/icons/CloseIconStatic.png";
import CloseIconGif from "../assets/icons/CloseIconGif.gif";

export default function CloseIcon ({ handleCloseButtonClick }) {
  return (
    <Link to="/"
      className="flex justify-start relative w-fit h-fit group cursor-pointer"
      onClick={handleCloseButtonClick}>
      <div className="w-8 h-8 bg-contain bg-no-repeat relative"
      style={{ backgroundImage: `url('${CloseIconStatic}')` }}>
        <div className="absolute -inset-4 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat animation-bounce" style={{ backgroundImage: `url('${CloseIconGif}')` }} />
      </div>
    </Link>
  );
};