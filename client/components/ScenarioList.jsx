import React, { useState, useEffect } from 'react';
import { Link } from "react-router";
import backStatic from "../assets/icons/backStatic.png";
import backGif from "../assets/icons/backGif.gif";
import BookmarkedYes from "../assets/icons/BookmarkedYes.png";
import BookmarkedNo from "../assets/icons/BookmarkedNo.png";
import DeleteStatic from "../assets/icons/DeleteStatic.png";
import DeleteGif from "../assets/icons/DeleteGif.gif"
import constants from "../constants";
import ProfileImageLeft from './ProfileImageLeft';

export default function ScenarioList() {
  const [scenarios, setScenarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [previousThreads, setPreviousThreads] = useState([]);
  const [hoveredThreadId, setHoveredThreadId] = useState(null);

  const handleFavorite = async (threadId) => {
    try {
      const response = await fetch(`${constants.serverURL}/threads/${threadId}/favorite`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to favorite thread');
      }
      // Update favorite immediately
      setPreviousThreads(prevThreads =>
        prevThreads.map(thread =>
          thread.id === threadId ? { ...thread, favorites: !thread.favorites } : thread
        )
      );
    } catch (error) {
      console.error("Error favoriting thread: ", error);
      setError(error.message);
    }
  };

  const handleDeleteThread = async (threadId) => {
    try {
      const response = await fetch(`${constants.serverURL}/threads/${threadId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        let errorMessage = "Failed to delete thread";
        try {
          const errorData = await response.json();
          if (errorData && errorData.error) {
            errorMessage = errorData.error;
          }
        } catch (parseError) {
          console.error("Failed to parse error response", parseError);
        }
        throw new Error(errorMessage);
      }

      // Remove the deleted thread 
      setPreviousThreads(prevThreads => 
        prevThreads.filter(thread => 
          thread.id !== threadId));

    } catch (error) {
      console.error("Error deleting thread: ", error);
      setError(error.message);
    }
  };


  useEffect(() => {
    const fetchScenarios = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${constants.serverURL}/initial-thread`);
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

    const fetchPreviousThreads = async () => {
      try {
        const response = await fetch(`${constants.serverURL}/previous-threads`);
        if (!response.ok) {
          throw new Error(`Failed to fetch previous threads: ${response.status}`);
        }
        const data = await response.json();
        setPreviousThreads(data);
      } catch (error) {
        console.error("Error fetching previous threads", error);
        setError(error.message);
      }
    }

    fetchScenarios();
    fetchPreviousThreads();
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
          <div className="flex -ml-30 justify-start relative w-fit h-fit group">
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

      {/* Previous Threads */}
      <section className="mt-2 ml-62 w-97 text-2xl">
        <h2 className="text-2xl border-b-4">Previous Threads</h2>
        <ul className="mt-4 overflow-scroll overflow-x-hidden h-40">
          {previousThreads.map(thread => (
            <li
              key={thread.id}
              className="flex text-xl mb-2 items-center w-100 gap-3 border-b-2"
              onMouseEnter={() => setHoveredThreadId(thread.id)}
              onMouseLeave={() => setHoveredThreadId(null)}
            >
              <div className="flex -ml-24 gap-3 h-15">
                <ProfileImageLeft />
                <div className="text-2xl flex flex-col">
                  {thread.player_name}
                  {/* Favorite button */}
                  <button onClick={() => handleFavorite(thread.id)}>
                    <img
                      src={thread.favorites ? BookmarkedYes : BookmarkedNo}
                      alt={thread.favorites ? "Bookmarked" : "Not Bookmarked"}
                      className="w-6 h-6 ml-65 -mt-25"
                    />
                  </button>
                  {/* Delete button */}
                  <div
                    className="ml-73 -mt-25"
                  >
                    {hoveredThreadId === thread.id ? (
                      <img  onClick={() => handleDeleteThread(thread.id)} src={DeleteGif} className="w-6 h-6  transition-transform transform hover:scale-110"  alt="Delete"/>
                    ) : (
                      <img  onClick={() => handleDeleteThread(thread.id)} src={DeleteStatic} className="w-6 h-6 " alt="Delete"/>
                    )}
                  </div>
                  <div className="text-xl">
                    {thread.created_at}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
