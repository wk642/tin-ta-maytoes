import React, { useState } from 'react';
import TinTaMaytoesIcon from "./assets/TinTaMaytoesIcon.png";
import NameExplanation from './assets/videos/NameExplanation.mp4';
import playIconGif from './assets/icons/playIconGif.gif';
import playIconStatic from './assets/icons/playIconStatic.png';
import GameMenu from './components/GameMenu';

export default function App() {
  const [showGameMenu, setShowGameMenu] = useState(false);

  const handlePlayButtonClick = () => {
    setShowGameMenu(true);
  };

  return showGameMenu ? (
    <GameMenu />
  ) : (
    <main>
      <div className="font-cbyg bg-orange-300 flex flex-col h-screen overflow-hidden">
        <div className="flex">
          <div className="flex flex-col justify-center">
            <h1 className="text-gameTitle ml-80 h-60">Tin</h1>
            <h1 className="text-gameTitle ml-80 -mt-10 mb-10">Ta</h1>
          </div>

          <img
            src={TinTaMaytoesIcon}
            alt="Tin Ta Maytoes Icon"
            className="w-auto h-110 mt-10"
          />

          <video src={NameExplanation} controls className="ml-4 mt-15 h-110" />
        </div>

        <h1 className="text-gameTitle ml-90 -mt-35">Maytoes</h1>

        <div
          className="flex justify-start -mt-20 ml-160 relative w-fit h-fit group cursor-pointer"
          onClick={handlePlayButtonClick}
        >
          <div className="w-20 h-20 bg-contain bg-no-repeat" style={{ backgroundImage: `url('${playIconStatic}')` }}>
            <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat animation-bounce" style={{ backgroundImage: `url('${playIconGif}')` }} />
          </div>
        </div>
      </div>
    </main>
  );
}