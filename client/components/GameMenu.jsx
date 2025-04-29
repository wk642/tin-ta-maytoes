// GameMenu.jsx
/* TODO:
  - MVP
    - have a settings icon
    - have a leaderboards icon
    - have a home icon
    - Those three things might be in it's own component

    - Scenario Mode
    - Tornado Expert Mode
    - Suggestions
*/

import ProfileImageLeft from "./ProfileImageLeft";
import { Link } from "react-router";

export default function GameMenu() {
  return (
    <main>
      <div>
        <div className="flex flex-col">
          <div className="flex flex-col ml-70 w-85">
            <header className="bg-slate-500/40 items-center justify-content mt-11 w-102 h-18 -ml-12">
              <h1 className="text-7xl mb-8 text-center"> Menu </h1>
            </header>
            <div className="flex items-center w-3/4 mb-4 max-w-[80%] self-start">
              <div className="h-12 w-12 flex items-center justify-center mt-6 mb-6">
                <ProfileImageLeft />
                <Link to="/scenarioList">
                  <button className="text-3xl mr-2 bg-[#60B5FF] text-gray-800 rounded-xl ml-4 pl-4 pr-4 pt-2 pb-2 shadow-md flex-1 ring-2 ring-[#60B5FF] hover:ring-2 hover:ring-orange-400 ">SCENARIO</button>
                </Link>
              </div>
            </div>

            <div className="flex items-center w-3/4 mb-4 max-w-[80%] self-start">
              <div className="h-12 w-12 flex items-center justify-center mb-6 -ml-4">
                <ProfileImageLeft />
                <Link to="/storyModeMenu">
                  <button className="text-3xl mr-2 bg-[#60B5FF] text-gray-800 rounded-xl ml-4 pl-4 pr-4 pt-2 pb-2 shadow-md flex-1 hover:ring-2 hover:ring-orange-400">STORY</button>
                </Link>
              </div>
            </div>

            <div className="flex items-center w-3/4 mb-4 max-w-[80%] self-start">
              <div className="ml-5 h-12 w-12 flex items-center justify-center">
                <ProfileImageLeft />
                <button className="text-3xl mr-2 bg-[#60B5FF] text-gray-800 rounded-xl ml-4 pl-4 pr-4 pt-2 pb-2 shadow-md flex-1 hover:ring-2 hover:ring-orange-400 ">SUGGESTIONS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};