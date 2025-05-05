// StoryModeMenu.jsx
// MVP: says coming soon and have a back button
// FUTURE: allows users to select Timed mode or tornado expert mode

import backGif from "../assets/icons/backGif.gif";
import backStatic from "../assets/icons/backStatic.png";
import { Link } from "react-router";

export default function StoryModeMenu() {
  return (
    <main>
      <header className="bg-slate-500/40 items-center justify-content mt-11  w-102 h-18 ml-58">
        {/* Back button */}
        <Link to="/gameMenu" className="flex justify-start ml-3 relative w-fit h-fit group cursor-pointer">
          <div className="w-12 h-12 mt-4 ml-2 bg-contain bg-no-repeat group-hover:animate-bounce" style={{ backgroundImage: `url('${backStatic}')` }}>
            <div 
              data-testid="back-button"
              className="absolute -inset-4 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat" style={{ backgroundImage: `url('${backGif}')` }} />
          </div>
        </Link>

        {/* Title */}
        <h1 className="text-4xl fixed -mt-15 ml-35 justify-content">Story Mode</h1>
        <h1 className="text-4xl fixed -mt-7 ml-45 justify-content">Menu</h1>

      </header>

      <div className="text-4xl ml-60"> 
        Coming soon
      </div>
    </main>
  )
}