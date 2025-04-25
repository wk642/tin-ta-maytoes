// GameStats.jsx 
/* TODO:
  - MVP
    - home button
    - settings icon
    - leaderboards icon
    - Coming soon
  - Future:
    - Tableau data
*/

import HomeIcon from "./HomeIcon";
import SettingsIcon from "./SettingsIcon";
import LeaderboardIcon from "./LeaderboardIcon";

export default function GameStats() {
  return (
    <main>
      <div className="fixed top-40 flex ml-42 gap-1 justify-content">
        <HomeIcon />
        <SettingsIcon />
        <LeaderboardIcon />
      </div>

      {/* Tableau - game stats*/}
      <div className="fixed top-35 w-90 h-68 bg-slate-300 -mt-13 ml-200">
        <h1 className=""> Coming soon ...</h1>
      </div>
    </main>
  )
}