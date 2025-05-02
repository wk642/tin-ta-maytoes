// ScenarioList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from "react-router"; 
import backStatic from "../assets/icons/backStatic.png";
import backGif from "../assets/icons/backGif.gif";
import userProfileGif from "../assets/icons/userProfileGif.gif";
import constants from "../constants";
import ProfileImageLeft from './ProfileImageLeft';

export default function ScenarioList() {
  const [scenarios, setScenarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScenarios = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${constants.serverURL}/threads`); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setScenarios(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchScenarios();
  }, []);

  if (loading) {
    return <p>Loading scenarios...</p>;
  }

  if (error) {
    return <p>Error loading scenarios: {error}</p>;
  }

  if (!scenarios || scenarios.length === 0) {
    return <p>No scenarios available.</p>;
  }

  return (
    <main>
      <header className="mt-11 ml-56 flex items-center bg-slate-500/40 w-105 h-20">
        {/* Back button */}
        <Link to="/gameMenu" className="mt-15 mr-4">
          <div className="flex -ml-30 justify-start relative w-fit h-fit group cursor-pointer">
            <div className="w-12 h-12 mb-11 ml-34 bg-contain bg-no-repeat relative group-hover:animate-bounce"
              style={{ backgroundImage: `url('${backStatic}')` }}>
              <div className="absolute -inset-4 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat" style={{ backgroundImage: `url('${backGif}')` }} />
            </div>
          </div>
        </Link>

        {/* Title */}
        <div className="flex flex-col items-center ml-11">
          <h1 className="text-5xl">Scenarios</h1>
        </div>
      </header>

      {/* Scenario List */}
      <section className="mt-2 ml-62 w-97 text-2xl">
        <h2 className="text-2xl border-b-4">Available Scenarios</h2>
        <ul className="mt-4 border-b-4">
          {scenarios.map(scenarios => (
            <li key={scenarios.id} className="flex text-xl mb-2 items-center -ml-25 gap-3">
              <ProfileImageLeft />
              {/* Link to the gameplay */}
              <Link to={`/scenarioGamePlay/${scenarios.id}`}>
                {scenarios.text}               
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}