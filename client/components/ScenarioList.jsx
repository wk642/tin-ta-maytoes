import React, { useState, useEffect } from 'react';
import { Link } from "react-router";
import backStatic from "../assets/icons/backStatic.png";
import backGif from "../assets/icons/backGif.gif";
import ProfileImageLeft from "./ProfileImageLeft";
import constants from "../constants";

export default function ScenarioList() {
  const [scenarios, setScenarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [previousThreads, setPreviousThreads] = useState([]);
  const [threadTexts, setThreadTexts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch scenarios
        const scenariosResponse = await fetch(`${constants.serverURL}/threads`);
        if (!scenariosResponse.ok) {
          throw new Error(`HTTP error fetching scenarios! status: ${scenariosResponse.status}`);
        }
        const scenariosData = await scenariosResponse.json();
        setScenarios(scenariosData);
        console.log("Scenarios Data:", scenariosData);

        // Fetch previous threads
        const previousThreadsResponse = await fetch(`${constants.serverURL}/previous-threads`);
        if (!previousThreadsResponse.ok) {
          throw new Error(`HTTP error fetching previous threads! status: ${previousThreadsResponse.status}`);
        }
        const previousThreadsData = await previousThreadsResponse.json();
        setPreviousThreads(previousThreadsData);
        console.log("Previous Threads Data:", previousThreadsData);

        // Fetch thread texts using thread IDs
        const fetchedThreadTexts = {};
        for (const thread of previousThreadsData) {
          try {
            const textResponse = await fetch(`${constants.serverURL}/threadText/${thread.id}`);
            if (!textResponse.ok) {
              throw new Error(`HTTP error fetching text for thread ID ${thread.id}! status: ${textResponse.status}`);
            }
            const textData = await textResponse.json();
            fetchedThreadTexts[thread.id] = textData.text;
          } catch (err) {
            console.error(`Error fetching text for thread ID ${thread.id}:`, err);
            fetchedThreadTexts[thread.id] = "Error loading text";
          }
        }
        setThreadTexts(fetchedThreadTexts);

      } catch (error) {
        setError(error.message);
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

    const handleScenarioClick = (scenarioId) => {
        // In a real application, you'd fetch the player's name dynamically.
        const playerName = "Player"; //  Replace with actual player name logic
        const newThread = {
            id: Date.now(), // Generate a unique ID.  A proper backend would handle this.
            player_name: playerName,
            created_at: new Date().toLocaleString(),
            scenario_id: scenarioId, // Store the scenario ID
        };

        // Add the new thread to the state.
        setPreviousThreads(prevThreads => [newThread, ...prevThreads]);

        //  Also, in a real app, you'd send this new thread to your backend API.
        //  Here, we're just updating the local state for demonstration.
        console.log("New Thread Added:", newThread);
    };

  if (loading) {
    return <p>Loading scenarios and threads...</p>;
  }

  if (error) {
    return <p>Error loading data: {error}</p>;
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
            <div
              className="w-12 h-12 mb-11 ml-34 bg-contain bg-no-repeat relative group-hover:animate-bounce"
              style={{ backgroundImage: `url('${backStatic}')` }}
            >
              <div
                className="absolute -inset-4 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat"
                style={{ backgroundImage: `url('${backGif}')` }}
              />
            </div>
          </div>
        </Link>

        {/* Title */}
        <div className="flex flex-col items-center ml-11">
          <h1 className="text-5xl">Scenarios</h1>
        </div>
      </header>

      {/* Scenario List */}
      <section className="mt-2 ml-62 w-97 text-1xl">
        <h2 className="text-2xl border-b-3">Available Scenarios</h2>
        <ul className="mt-4 w-102 border-b-8 -ml-4">
          {scenarios.map(scenario => (
            <li key={scenario.id} className="flex center mb-2 w-120 -ml-20 gap-3">
              <ProfileImageLeft />
              <Link to={`/scenarioGamePlay/${scenario.id}`} onClick={() => handleScenarioClick(scenario.id)}>
                {scenario.text}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Previous Threads List */}
      <section className="mt-8 ml-62 w-97 text-2xl">
        <h2 className="text-2xl border-b-4">Previous Threads</h2>
        <ul className="mt-4">
          {previousThreads.map(thread => (
            <li key={thread.id} className="flex items-center mb-2 w-120 -ml-24">
              <ProfileImageLeft />
              <div className="flex flex-col">
                <div className="text-2xl">
                  {thread.player_name}
                </div>
                <div className="text-xl">
                  {thread.created_at}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
