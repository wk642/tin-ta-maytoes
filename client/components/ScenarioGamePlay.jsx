// ScenarioGamePlay.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import backStatic from "../assets/icons/backStatic.png";
import backGif from "../assets/icons/backGif.gif";
import userProfileStatic from "../assets/icons/userProfileStatic.png";
import constants from "../constants";
// import ProfileImageLeft from './ProfileImageLeft';

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

    if (questionData && questionData.correctAnswerValue === selectedValue) {
      setResultMessage("You survived!");
    } else {
      setResultMessage("You did not survive!");
    }
  };

  // create the animation of 
  const DotDotDotAnimation = () => (
    <div className='flex space-x-2 justify-start items-center'>
      <span className='sr-only'>Loading...</span>
      <div className='h-3 w-3 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-3 w-3 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.20s]'></div>
      <div className='h-3 w-3 bg-gray-500 rounded-full animate-bounce'></div>
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
        <Link to="/scenarioList" className="flex justify-start ml-3 relative w-fit h-fit group cursor-pointer">
          <div className="w-12 h-12 bg-contain bg-no-repeat group-hover:animate-bounce" style={{ backgroundImage: `url('${backStatic}')` }}>
            <div className="absolute -inset-4 opacity-0 transition-opacity group-hover:opacity-100 bg-contain bg-no-repeat" style={{ backgroundImage: `url('${backGif}')` }} />
          </div>
        </Link>

        {/* Title and User Icon */}
        <div className="flex flex-col items-center ml-16">
          <div className="w-11 h-11 ml-15 bg-contain bg-no-repeat"
            style={{ backgroundImage: `url('${userProfileStatic}')` }}>
          </div>
          <h1 className="text-4xl ml-14">Scenario</h1>
        </div>
      </header>

      <section className="mt-8 ml-60 w-100">
        <h2 className="text-2xl mb-4">{question.text}</h2>

        {userChoiceText && (
          <p className="mb-2 italic">{userChoiceText}</p>
        )}

        {showDotDotDot && (
          <DotDotDotAnimation />
        )}

        {resultMessage && (
          <p className="text-2xl font-bold">{resultMessage}</p>
        )}

        {choicesVisible && choices && choices.length === 2 ? (
          <div className="flex flex-col space-y-2 mt-20">
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
        ) : !resultMessage && (
          <p>Error: Could not load choices.</p>
        )}
      </section>
    </main>
  );
}