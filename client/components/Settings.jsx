// Settings.jsx
/* TODO:
  - All static for right now
    - allows users to choose light and dark mode
    - allows users to adjust voilume
    - allow future game settings
*/

import React from "react";
import { useState } from "react";
import { Link } from "react-router";
import LightMode from "../assets/icons/LightMode.gif";
import VolumeUp from "../assets/icons/VolumeUp.gif";
import VolumeDown from "../assets/icons/VolumeDown.gif";
import backGif from "../assets/icons/backGif.gif";
import backStatic from "../assets/icons/backStatic.png";

export default function Settings() {
  // states
  const [volume, setVolume] = useState([50]); // set volume

  // handle dark light mode change

  // handle volume change
  const handleVolumeChange = () => {
    setVolume();
  };

  return (
    <main>
      <header className="bg-slate-500/40 items-center justify-content mt-11  w-102 h-18 ml-57">
        {/* Back button */}
        <Link to="/gameMenu" className="flex justify-start ml-3 relative w-fit h-fit group cursor-pointer">
          <div className="w-12 h-12 mt-4 ml-2 bg-contain bg-no-repeat group-hover:animate-bounce" style={{ backgroundImage: `url('${backStatic}')` }}>
            <div 
              data-testid="back-button"
              className="absolute -inset-4 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat" style={{ backgroundImage: `url('${backGif}')` }} />
          </div>
        </Link>

        <h1 className="text-4xl fixed mt-3 ml-34 justify-content">Settings</h1>
      </header>

      {/* Light / Dark Mode */}
      <div className="mt-5 ml-90">
        <img src={LightMode} alt="Light Dark Mode Toggle Button"/>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-4 ml-70">
        <img src={VolumeDown} className="text-gray-500" alt="Volume Down Button"/>
            
        <img src={VolumeUp} className="text-gray-500" alt="Volume Up Button"/>
      </div>
    </main>
  )
}
