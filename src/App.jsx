import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router';
import Home from "./components/Home";
import GameLayout from './components/GameLayout';
import GameMenu from './components/GameMenu';
import GamePlay from './components/GamePlay';
import GameStats from './components/GameStats';
import Settings from './components/Settings';
import Leaderboard from './components/Leaderboard';
import StoryModeMenu from './components/StoryModeMenu';
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

            <Route path="/gamePlay" 
              element={<GameLayout content={<GamePlay />}/>} 
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
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}