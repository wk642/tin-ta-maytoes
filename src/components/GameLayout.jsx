// just the two boxes background image right hand side component

// style game menu here 
// style tableau here

import bgImage from "../assets/bgImage.png";
import GameMenu from "./GameMenu";
import GameStats from "./GameStats";

export default function GameLayout() {
  return (
    <main>
      {/* background image */}
      <div className="font-cbyg bg-cover bg-no-repeat fixed bg-orange-300 w-screen h-screen overflow-hidden" style={{ backgroundImage: `url('${bgImage}')`, backgroundSize: 'contain', backgroundPosition: 'center',}}></div>

      {/* Game Menu */}
      <GameMenu />
      {/* Tableau - game stats*/}
      <GameStats />
    </main>
  )
}