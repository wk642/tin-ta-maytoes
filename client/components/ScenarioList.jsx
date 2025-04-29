// ScenarioList.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router";
import backStatic from "../assets/icons/backStatic.png";
import backGif from "../assets/icons/backGif.gif";
import userProfileGif from "../assets/icons/userProfileGif.gif"; 
import constants from "../constants";

export default function ScenarioList() {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestion4 = async () => {
      try {
        // Just show question 4
        // const response = await fetch('http://localhost:5000/initialQuestion?id=4'); 
        // get it to ranomly pick between 4 and 5 
        const response = await fetch(`${constants.serverURL}/questions/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setQuestion(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQuestion4();
  }, []);

  if (loading) {
    return <p>Loading scenario...</p>;
  }

  if (error) {
    return <p>Error loading scenario: {error}</p>;
  }

  if (!question) {
    return <p>No scenarios are loaded</p>;
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

      {/* Sub Title */}
      <section className="mt-2 ml-62 w-97 text-2xl">
        <h2 className="text-2xl border-b-4">Current Scenario</h2> 
        <ul className="mt-4 border-b-4">
          <li key={question.id} className="flex items-center mb-2">
            {/* Contact image */}
            <div
              className="w-8 h-8 rounded-full bg-contain bg-no-repeat mr-2"
              style={{ backgroundImage: `url('${userProfileGif}')` }}
            />
            {/* Display question */}
            <Link to={`/scenarioGamePlay/${question.id}`}>
              {question.text}
            </Link>
          </li>
        </ul>
        
        <Link to="/scenarioGamePlay">
          <button> Temp new game  </button>
        </Link>
      </section>
    </main>
  );
}