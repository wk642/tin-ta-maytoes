// Leaderboard.jsx
// Displays the scores rank from highest to lowest
import { Link } from "react-router";
import backGif from "../assets/icons/backGif.gif";
import backStatic from "../assets/icons/backStatic.png";

export default function Leaderboard() {
  return (
    <main>
      <header className="mt-11 ml-58 flex items-center bg-slate-500/40 w-105 h-20">
        {/* Back button */}
        <Link to="/gameMenu" className="mt-15 mr-4">
          <div className="flex -ml-30 justify-start relative w-fit h-fit group">
            <div className="w-12 h-12 mb-11 ml-34 bg-contain bg-no-repeat relative group-hover:animate-bounce"
              style={{ backgroundImage: `url('${backStatic}')` }}>
              <div className="absolute -inset-4 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat" style={{ backgroundImage: `url('${backGif}')` }} />
            </div>
          </div>
        </Link>

        <h1 className="text-4xl fixed mt-3 ml-34 justify-content">Leaderboard</h1>
      </header>

      <div className="text-4xl ml-60"> 
        Coming soon
      </div>
    </main>
  )
}
