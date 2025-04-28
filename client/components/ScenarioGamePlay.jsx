// GamePlay.jsx
/* TODO: 
  - The actual game play happens here
*/

// ScenarioList.jsx
import React from 'react';
import { Link } from "react-router";
import backStatic from "../assets/icons/backStatic.png";
import backGif from "../assets/icons/backGif.gif";
import userProfileStatic from "../assets/icons/userProfileStatic.png"; 

export default function ScenarioGamePlay() {
  return (
    <main>
      <header className="mt-12 ml-56 flex items-center bg-slate-500/40 w-105 h-25"> 
        {/* Back button */}
        <Link to="/gameMenu" className="flex justify-start ml-3 relative w-fit h-fit group cursor-pointer">
          <div className="w-12 h-12 bg-contain bg-no-repeat group-hover:animate-bounce" style={{ backgroundImage: `url('${backStatic}')` }}>
            <div className="absolute -inset-4 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat" style={{ backgroundImage: `url('${backGif}')` }} />
          </div>  
        </Link>

        {/* Title and User Icon */}
        <div className="flex flex-col items-center ml-16"> 
          <div className="w-11 h-11 ml-15 bg-contain bg-no-repeat"
            style={{ backgroundImage: `url('${userProfileStatic}')` }}> 
          </div>
          <h1 className="text-4xl ml-14">#</h1>
        </div>
      </header>
      <section className="mt-8 ml-60">
        <h2> Games</h2>
      </section>
    </main>
  );
}