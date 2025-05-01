import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import GameLayout from "./components/GameLayout";
import GameMenu from "./components/GameMenu";
import ScenarioList from "./components/ScenarioList";
import ScenarioGamePlay from "./components/ScenarioGamePlay";
import GameStats from "./components/GameStats";
import Settings from "./components/Settings";
import Leaderboard from "./components/Leaderboard";
import StoryModeMenu from "./components/StoryModeMenu";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <div className="font-cbyg overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gameStats" 
              element={<GameLayout content={<GameStats />}/>} 
            />

            <Route path="/settings"
              element={<GameLayout content={<Settings />}/>}
            />

            <Route path="/gameMenu" 
              element={<GameLayout content={<GameMenu />}/>} 
            />

            <Route path="/leaderboard" 
              element={<GameLayout content={<Leaderboard />}/>} 
            />

            <Route path="/storyModeMenu"
              element={<GameLayout content={<StoryModeMenu />}/>}
            />

            <Route path="/scenarioGamePlay/:id"
              element={<GameLayout content={<ScenarioGamePlay />}/>}
            />

            <Route path="/scenarioList"
              element={<GameLayout content={<ScenarioList />}/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}