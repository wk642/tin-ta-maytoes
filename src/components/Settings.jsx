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
      <div className="bg-slate-500/40 items-center justify-content mt-10  w-23 ml-57">
        <h1 className="text-4xl fixed top-30 justify-content">Settings</h1>
        <img src={LightMode} />
        {/* <Switch
          checked={checked}
          onChange={handleDarkLightModeChange}
        /> */}

        <div className="flex items-center gap-4">
          <img src={VolumeDown} className="h-6 w-6 text-gray-500" />
            {/* <Slider
              value={volume}
              onValueChange={handleVolumeChange}
              max={100}
              step={1}
              className="w-full sm:w-[300px]"
            /> */}
              
          <img src={VolumeUp} className="h-6 w-6 text-gray-500" />
          <span className="text-base sm:text-lg">{volume[0]}%</span>
        </div>
      </div>
    </main>
  )
}
