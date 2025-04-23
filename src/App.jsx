import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from "./components/Home";
import GameLayout from './components/GameLayout'; 
import GameMenu from './components/GameMenu';
import GamePlay from './components/GamePlay';
import GameStats from './components/GameStats';
import Settings from './components/Settings';


export default function App () {
  return (
    <BrowserRouter>
      <div className="App font-cbyg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gameLayout" element={<GameLayout />} /> 
          <Route path="/gameMenu" element={<GameMenu />} />
          <Route path="/gamePlay" element={<GamePlay />} />
          <Route path="/gameStats" element={<GameStats />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
