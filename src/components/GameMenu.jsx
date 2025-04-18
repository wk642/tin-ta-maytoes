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

export default function GameMenu() {
  return (
    <div className="font-cbyg bg-contain bg-no-repeat bg-orange-300 w-screen h-screen overflow-hidden" style={{ backgroundImage: `url('${bgImage}')` }}>
      <h2 className="text-9xl ml-50 mt-15">MENU</h2>
      <button className="text-5xl ml-58 mt-5 bg-white"> SCENARIO </button>
      <button className="text-5xl ml-58 mt-5"> TORNADO EXPERT </button>
      <button className="text-5xl ml-58 mt-5"> SUGGESTIONS </button>
    </div>
  );
}
