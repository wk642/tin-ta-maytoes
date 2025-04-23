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

import bgImage from "../assets/bgImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import HomeIcon from "./HomeIcon";
import userProfileGif from "../assets/icons/userProfileGif.gif";
import userProfileStatic from "../assets/icons/userProfileStatic.png";
import ProfileImageLeft from "./ProfileImageLeft";
import SettingsIcon from "./SettingsIcon";

export default function GameMenu( {handleHomeButtonClick, handleSettingsButtonClick} ) {
  return (
    <main>
      <div className="font-cbyg bg-cover bg-no-repeat fixed bg-orange-300 w-screen h-screen overflow-hidden" style={{ backgroundImage: `url('${bgImage}')`, backgroundSize: 'contain', backgroundPosition: 'center',}}>

        <div className="fixed top-40 flex ml-42 gap-1 justify-content">
          <HomeIcon handleHomeButtonClick={handleHomeButtonClick} />
          <SettingsIcon handleSettingsButtonClick={handleSettingsButtonClick} /> 
        </div>

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