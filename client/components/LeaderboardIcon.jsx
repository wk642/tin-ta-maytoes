import React from "react";
import { Link } from "react-router";
import TrophyStatic from "../assets/icons/TrophyStatic.png";
import TrophyGif from "../assets/icons/TrophyGif.gif";

export default function LeaderboardIcon ({ handleLeaderboardButtonClick }) {
  return (
    <Link to="/leaderboard"
      className="flex justify-start -mt-20 -ml-25 relative w-fit h-fit group cursor-pointer"
      onClick={handleLeaderboardButtonClick}>
      <div className="w-8 h-8 mr-26 -mt-8 bg-contain bg-no-repeat relative"
      style={{ backgroundImage: `url('${TrophyStatic}')` }}>
        <div className="absolute -inset-4 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat animation-bounce" style={{ backgroundImage: `url('${TrophyGif}')` }} />
      </div>
    </Link>
  );
};