import React from "react";
import userProfileStatic from "../assets/icons/userProfileStatic.png";
import userProfileGif from "../assets/icons/userProfileGif.gif";

export default function ProfileImageLeft () {
  return (
    <div className="flex justify-start ml-30 relative w-fit h-fit group">
      <div className="w-10 h-10 bg-contain bg-no-repeat relative"
      style={{ backgroundImage: `url('${userProfileStatic}')` }}>
        <div className="absolute -inset-1 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat animation-bounce" style={{ backgroundImage: `url('${userProfileGif}')` }} />
      </div>
    </div>
  );
};