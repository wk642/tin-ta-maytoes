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

export default function GameMenu() {
  return (
    <main>
      <div>
        <div className="flex flex-col">
          <div className="flex flex-col ml-70 w-85">

            <h1 className="text-7xl mt-15 mb-8 text-center"> Menu </h1>

            <div className="flex items-center w-3/4 mb-4 max-w-[80%] self-start">
              <div className="h-12 w-12 flex items-center justify-center mb-6">
                <ProfileImageLeft />
                <button className="text-3xl mr-2 bg-[#60B5FF] text-gray-800 rounded-xl ml-4 pl-4 pr-4 pt-2 pb-2 shadow-md flex-1 ring-2 ring-[#60B5FF] hover:ring-2 hover:ring-orange-400 ">SCENARIO</button>
              </div>
            </div>

            <div className="flex items-center w-3/4 mb-4 max-w-[80%] self-start">
              <div className="h-12 w-12 flex items-center justify-center mb-6 -ml-1">
                <ProfileImageLeft />
                <button className="text-3xl mr-2 bg-[#60B5FF] text-gray-800 rounded-xl ml-4 pl-4 pr-4 pt-2 pb-2 shadow-md flex-1 hover:ring-2 hover:ring-orange-400 ">TORNADO EXPORT</button>
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