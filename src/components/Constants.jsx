// Constants.jsx

/* TODO:
  - Back icon
  - home icon
  - leaderboard icon
  - settings icon
*/

import React from "react";
// utilizing this to learn how to use react-router https://www.w3schools.com/react/react_router.asp
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "../App";
import GameMenu from "./GameMenu";
import GamePlay from "./GamePlay";
import Settings from "./Settings";
import StoryModeMenu from "./StoryModeMenu";
import Leaderboard from "./Leaderboard.jsx";
import ScenarioList from "./ScenarioList";
import backStatic from "../assets/icons/BackStatic.png";
import backGif from "../assets/icons/BackGif.gif";
import homeStatic from "../assets/icons/homeStatic.png";
import homeGif from "../assets/icons/homeGif.gif";

export default function Constants() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root route for the main App component */}
        <Route path="/" element={<App />} />
        {/* Route for the GameMenu component */}
        <Route path="/gameMenu" element={<GameMenu />} />
        {/* Route for the Leaderboard component */}
        <Route path="/leaderboard" element={<Leaderboard />} />
        {/* Route for the Settings component */}
        <Route path="/settings" element={<Settings />} />
        {/* back icon */}
        <Route path="/back" element={
          <Link to="/">
            <div className="fixed bottom-55 left-1/2 -translate-x-1/2 flex gap-10">
              <div className="w-20 h-20 bg-contain bg-no-repeat" style={{ backgroundImage: `url('${backStatic}')` }}>
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat" style={{ backgroundImage: `url('${backGif}')` }} />
              </div>
            </div>
          </Link>
        } />
      </Routes>


    </BrowserRouter>
  );
};
