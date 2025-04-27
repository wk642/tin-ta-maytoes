// ScenarioList.jsx
import React from 'react';
import { Link } from "react-router";
import backStatic from "../assets/icons/backStatic.png";
import backGif from "../assets/icons/backGif.gif";
import userProfileGif from "../assets/icons/userProfileGif.gif"; 

export default function ScenarioList() {
  return (
    <main>
      <header className="mt-11 ml-56 flex items-center bg-slate-500/40 w-105 h-25"> 
        {/* Back button */}
        <Link to="/gameMenu" className="mt-15 mr-4"> 
          <div className="flex -ml-30 justify-start relative w-fit h-fit group cursor-pointer">
            <div className="w-12 h-12 mb-11 ml-34 bg-contain bg-no-repeat relative group-hover:animate-bounce"
              style={{ backgroundImage: `url('${backStatic}')` }}>
              <div className="absolute -inset-4 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat" style={{ backgroundImage: `url('${backGif}')` }} />
            </div>
          </div>
        </Link>

        {/* Title and User Icon */}
        <div className="flex flex-col items-center ml-11"> 
          <h1 className="text-5xl">Scenarios</h1>
        </div>
      </header>
      <section className="mt-8 ml-60">
        <h2>Existing Games</h2>
        <Link to="/scenarioGamePlay">
          <button> Temp new game button  </button>
        </Link>
      </section>
    </main>
  );
}