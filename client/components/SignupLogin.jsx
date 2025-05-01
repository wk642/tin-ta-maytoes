import { useState } from "react";
import { Link } from "react-router";
import CloseIcon from "./CloseIcon";

export default function SignupLogin ({isSignupLoginOpen, closeSignupLogin}) {
  // Tabs for register, login, guest
  const [activeTab, setActiveTab] = useState('register'); 

  if (!isSignupLoginOpen) return null;
  return (
    <div className="fixed inset-45 bg-gray-900/90 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        {/* Close Button*/}
        <button onClick={closeSignupLogin} className="text-gray-900 hover:text-gray-700 text-2xl focus:outline-none focus:shadow-outline text-right ml-90">
          <CloseIcon />
        </button>
        <h2 className="text-2xl font-bold -mt-10 mb-4 text-center">Sign Up | Log In</h2>

      {/* Tab Navigation */}
      <div className="flex justify-between mb-2 pl-2 pr-2 pt-2 bg-[#FFECDB]">
          <button
            className={`px-2 py-2 w-30 rounded-md ${activeTab === 'register' ? 'bg-[#60B5FF] text-white border-b-4' : 'bg-[#AFDDFF] text-[#FF9149] hover:text-white border-b-4'}`}
            onClick={() => setActiveTab('register')}
          > 
            Register
          </button>
          <button
            className={`px-2 py-2 w-30 rounded-md ${activeTab === 'login' ? 'bg-[#60B5FF] text-white border-b-4' : 'bg-[#AFDDFF] text-[#FF9149] hover:text-white border-b-4'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`px-2 py-2 w-30 rounded-md ${activeTab === 'guest' ? 'bg-[#60B5FF] text-white border-b-4' : 'bg-[#AFDDFF] text-[#FF9149] hover:text-white border-b-4'}`}
            onClick={() => setActiveTab('guest')}
          >
            Play as Guest
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'register' && (
          <div className="flex flex-col space-y-4">
            <div className="bg-[#FFECDB] h-30 text-center">
              Register to store your progress and to unlock story mode.
              <br/>
              Coming soon
            </div>
            <Link to="/gameMenu" className="bg-[#AFDDFF] hover:bg-[#60B5FF] text-[#FF9149] hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">
              Sign Up
            </Link>
          </div>
        )}

        {activeTab === 'login' && (
          <div className="flex flex-col space-y-4">
            <div className="bg-[#FFECDB] h-30 text-center">
              Welcome back, login to keep playing.
              <br/>
              Coming soon
            </div>
            <Link to="/gameMenu" className="bg-[#AFDDFF] hover:bg-[#60B5FF] text-[#FF9149] hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">
              Log In
            </Link>
          </div>
        )}

        {activeTab === 'guest' && (
          <div className="flex flex-col space-y-4">
            <div className="bg-[#FFECDB] h-30 text-center">
              Play a few quick rounds.  
            </div>
            <Link to="/gameMenu" 
              className="bg-[#AFDDFF] hover:bg-[#60B5FF] text-[#FF9149] hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">
              Play as Guest
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};