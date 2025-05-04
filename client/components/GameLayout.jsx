// just the two boxes background image right hand side component

// style game menu here 
// style tableau here

import bgImage from "../assets/bgImage.png";
import GameStats from "./GameStats";

export default function GameLayout( {content}) {
  //
  return (
    <main>
      {/* background image */}
      <div 
        data-testid="bg-image" 
        className="bg-cover bg-no-repeat fixed bg-orange-300 w-screen h-screen overflow-hidden" style={{ backgroundImage: `url('${bgImage}')`, backgroundSize: 'contain', backgroundPosition: 'center',}}>

        {/* Content is anything that's on the left side where it is the main game play */}
        {content}

        {/* Tableau data for future implementaiton */}
        <GameStats />
      </div>
    </main>
  )
}