// Settings.jsx
/* TODO:
  - All static for right now
    - allows users to choose light and dark mode
    - allows users to adjust voilume
    - allow future game settings
*/

import React from "react";
import { useState } from "react";
import LightMode from "../assets/icons/LightMode.gif";
import VolumeUp from "../assets/icons/VolumeUp.gif";
import VolumeDown from "../assets/icons/VolumeDown.gif";

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
        <h1 className="text-4xl fixed mt-3 ml-34 justify-content">Settings</h1>
      </header>

      {/* Light / Dark Mode */}
      <div className="mt-5 ml-90">
        <img src={LightMode}/>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-4 ml-70">
        <img src={VolumeDown} className="text-gray-500" />
            
        <img src={VolumeUp} className="text-gray-500" />
      </div>
    </main>
  )
}
