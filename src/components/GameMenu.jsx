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

import bgImage from '../assets/bgImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

export default function GameMenu() {
  return (
    <main>
      <div className="font-cbyg bg-cover bg-no-repeat bg-orange-300 w-screen h-screen overflow-hidden" style={{ backgroundImage: `url('${bgImage}')` }} />
      <div className="flex flex-col items-center">
        <h2 className="text-9xl mt-15 mb-8 text-center">MENU</h2>
        <div className="flex flex-col w-full items-center">
          <div className="flex items-center w-3/4 mb-4 max-w-[80%] self-start">
            <div className="mr-2 h-12 w-12 rounded-full bg-gray-400 flex items-center justify-center">
              <FontAwesomeIcon icon={faCircleUser} className="h-8 w-8 text-white" />
            </div>
            <button
              className="text-3xl bg-white/80 text-gray-800 rounded-xl p-4 shadow-md flex-1"
            >
              SCENARIO
            </button>
          </div>
          <div className="flex items-center w-3/4 mb-4 max-w-[80%] self-end">
            <button
              className="text-3xl bg-white/80 text-gray-800 rounded-xl p-4 shadow-md flex-1"
            >
              TORNADO EXPERT
            </button>
            <div className="ml-2 h-12 w-12 rounded-full bg-gray-400 flex items-center justify-center">
              <FontAwesomeIcon icon={faCircleUser} className="h-8 w-8 text-white" />            
            </div>
          </div>
          <div className="flex items-center w-3/4 max-w-[80%] self-start">
           <div className="mr-2 h-12 w-12 rounded-full bg-gray-400 flex items-center justify-center">
            <FontAwesomeIcon icon={faCircleUser} className="h-8 w-8 text-white" />            
          </div>
            <button
              className="text-3xl bg-white/80 text-gray-800 rounded-xl p-4 shadow-md flex-1"
            >
              SUGGESTIONS
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};