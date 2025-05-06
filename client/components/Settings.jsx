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
      <header className="mt-11 ml-56 flex items-center bg-slate-500/40 w-105 h-20">
              {/* Back button */}
              <Link to="/gameMenu" className="mt-15 mr-4">
                <div className="flex -ml-30 justify-start relative w-fit h-fit group">
                  <div className="w-12 h-12 mb-11 ml-34 bg-contain bg-no-repeat relative group-hover:animate-bounce"
                    style={{ backgroundImage: `url('${backStatic}')` }}>
                    <div className="absolute -inset-4 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat" style={{ backgroundImage: `url('${backGif}')` }} />
                  </div>
                </div>
              </Link>

        <h1 className="text-4xl fixed mt-3 ml-38 justify-content">Settings</h1>
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
