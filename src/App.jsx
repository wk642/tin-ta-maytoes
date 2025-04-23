import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import GameLayout from './components/GameLayout'; 

export default function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gameLayout" element={<GameLayout />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
};
