// ScenarioGamePlay.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import backStatic from "../assets/icons/backStatic.png";
import backGif from "../assets/icons/backGif.gif";
import userProfileStatic from "../assets/icons/userProfileStatic.png";
import constants from "../constants";
import ProfileImageLeft from "./ProfileImageLeft";
import ProfileImageRight from "./ProfileImageRight";

export default function ScenarioGamePlay() {
  const { id } = useParams();
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [resultMessage, setResultMessage] = useState(null);
  const [userChoiceText, setUserChoiceText] = useState(null);
  const [showDotDotDot, setShowDotDotDot] = useState(false);
  const [choicesVisible, setChoicesVisible] = useState(true);

  useEffect(() => {
    const fetchQuestionDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${constants.serverURL}/questions/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setQuestionData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchQuestionDetails();
    }
  }, [id]);

  // handle the answer
  const handleAnswer = async (selectedValue, selectedText) => {
    setUserChoiceText(`You selected: ${selectedText}`);
    setShowDotDotDot(true);
    setChoicesVisible(false);

    // Add a animated ... so that it looks like it is typing
    await new Promise(resolve => setTimeout(resolve, 1500));
    setShowDotDotDot(false);

    if (selectedValue % 2 === 0) {
      setResultMessage("You survived!");
    } else {
      setResultMessage("You did not survive!");
    }
  };
  // create the animation of 
  const DotDotDotAnimation = () => (
    <div className='flex space-x-2 justify-start items-center'>
      <span className='sr-only'>Loading...</span>
      <div className='h-1 w-1 bg-slate-800 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-1 w-1 bg-slate-800 rounded-full animate-bounce [animation-delay:-0.40s]'></div>
      <div className='h-1 w-1 bg-slate-800 rounded-full animate-bounce'></div>
    </div>
  );

  if (loading) {
    return <p>Loading scenario gameplay...</p>;
  }

  if (error) {
    return <p>Error loading scenario: {error}</p>;
  }
  
  if (!questionData) {
    return <p>No scenario data loaded.</p>;
  }

  const { question, choices } = questionData;

  return (
    <main>
      <header className="mt-12 ml-56 flex items-center bg-slate-500/40 w-105 h-25">
        {/* Back button */}
        <Link to="/scenarioList" className="flex justify-start ml-6 relative w-fit h-fit group cursor-pointer">
          <div className="w-12 h-12 bg-contain bg-no-repeat group-hover:animate-bounce" style={{ backgroundImage: `url('${backStatic}')` }}>
            <div className="absolute -inset-4 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat" style={{ backgroundImage: `url('${backGif}')` }} />
          </div>
        </Link>

        {/* Title and User Icon */}
        <div className="flex flex-col items-center ml-16">
          <div className="w-11 h-11 ml-7 bg-contain bg-no-repeat"
            style={{ backgroundImage: `url('${userProfileStatic}')` }}>
          </div>
          <h1 className="text-4xl ml-5">Scenario</h1>
        </div>
      </header>

      <section className="mt-8 ml-35 w-100">
      <div className="flex items-start">
          <ProfileImageLeft />  
          <div className="flex-1">
            <h2 className="text-1xl mb-4 ml-3 w-85 bg-slate-400/50 rounded-lg p-3">{question.text}</h2>
          </div>
        </div>
        {userChoiceText && (
          <div className="flex items-start justify-end">
            <div className="flex-1 text-right">
              <p className="mb-2 italic bg-[#60B5FF] rounded-lg p-3 w-85 ml-27">{userChoiceText}</p>
            </div>
            <ProfileImageRight />
          </div>
        )}

        {showDotDotDot && (
          <div className="flex items-start">
            <ProfileImageLeft /> 
            <div className="flex-1 text-1xl mb-4 ml-3 w-85 bg-slate-400/50 rounded-lg p-3">
              <DotDotDotAnimation />
            </div>
          </div>
        )}

        {resultMessage && (
          <div className="flex items-start">
            <ProfileImageLeft />
            <div className="flex-1">
              <p className="text-1xl mb-4 ml-3 w-85 bg-slate-400/50 rounded-lg p-3">{resultMessage}</p>
            </div>
          </div>
        )}


        {choicesVisible && choices && choices.length === 2 ? (
          <div className="text-1xl flex flex-col space-y-2 ml-25 w-100 mt-15">
            {choices.map((choice) => (
              <button
                key={choice.id}
                className="bg-[#AFDDFF] hover:bg-[#60B5FF] font-bold py-2 px-4 rounded"
                onClick={() => handleAnswer(choice.value, choice.text)}
              >
                {choice.text}
              </button>
            ))}
          </div>
        ) : !resultMessage && !showDotDotDot && (
          <p>Error: Could not load choices.</p>
        )}
      </section>
    </main>
  );
}