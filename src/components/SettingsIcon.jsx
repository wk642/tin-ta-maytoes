import React from "react";
import { Link } from "react-router-dom";
import settingsStatic from "../assets/icons/settingsStatic.png";
import settingsGif from "../assets/icons/settingsGif.gif";

export default function HomeIcon ({ handleSettingsButtonClick }) {
  return (
    <Link to="/settings"
      className="flex justify-start -mt-20 -ml-25 relative w-fit h-fit group cursor-pointer"
      onClick={handleSettingsButtonClick}>
      <div className="w-8 h-8 mr-26 -mt-8 bg-contain bg-no-repeat relative"
      style={{ backgroundImage: `url('${settingsStatic}')` }}>
        <div className="absolute -inset-4 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat animation-bounce" style={{ backgroundImage: `url('${settingsGif}')` }} />
      </div>
    </Link>
  );
};