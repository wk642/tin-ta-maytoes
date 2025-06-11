import { useState } from "react";
import { Link } from "react-router";
import CloseIcon from "./CloseIcon";

export default function SignupLogin ({isSignupLoginOpen, closeSignupLogin}) {
  // Tabs for register, login, guest
  const [activeTab, setActiveTab] = useState('register'); 

  // Form
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle register


  // Handle guest email
  const handleGuest = (email) =>{
    if (!isValidEmail(email)) {
      alert("Please enter a valid email to play as guest.");
      return;
    }
    console.log("Valid email:", email);
  }
  
  // valid email
  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailRegex.test(email));
    return emailRegex.test(email);
  };

  if (!isSignupLoginOpen) return null;
  return (
    <div className="fixed ml-75 mt-4 w-210 h-165 p-8 aspect-square bg-gray-900/90 flex items-center justify-center rounded-xl">
      <div className="bg-white p-6 rounded-lg shadow-xl w-200 h-140 rounded-xl">
        {/* Close Button*/}
        <button onClick={closeSignupLogin} className="absolute top-14 right-10 text-gray-900 hover:text-gray-700 text-2xl focus:outline-none focus:shadow-outline text-right ml-90">
          <CloseIcon />
        </button>
        <h2 className="text-2xl font-bold -mt-2 mb-4 text-center">Sign Up | Log In</h2>

      {/* Tab Navigation */}
      <div className="flex justify-between mb-2 pl-2 pr-2 pt-2 bg-[#FFECDB] rounded-xl">
          <button
            className={`px-2 py-2 w-1/3 mr-1 rounded-md ${activeTab === 'register' ? 'bg-[#60B5FF] text-white border-b-4' : 'bg-[#AFDDFF] text-[#FF9149] hover:text-white border-b-4'}`}
            onClick={() => setActiveTab('register')}
          > 
            Register
          </button>
          <button
            className={`px-2 py-2 w-1/3 ml-1 mr-1 rounded-md ${activeTab === 'login' ? 'bg-[#60B5FF] text-white border-b-4' : 'bg-[#AFDDFF] text-[#FF9149] hover:text-white border-b-4'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`px-2 py-2 w-1/3 ml-1 rounded-md ${activeTab === 'guest' ? 'bg-[#60B5FF] text-white border-b-4' : 'bg-[#AFDDFF] text-[#FF9149] hover:text-white border-b-4'}`}
            onClick={() => setActiveTab('guest')}
          >
            Play as Guest
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'register' && (
          <div className="flex flex-col space-y-4">
            <div className="bg-[#FFECDB] h-90 text-center rounded-xl">
              <div className="w-180 h-83 border-[#AFDDFF] rounded-xl ml-4">
                <h2 className="text-3xl mt-4">Register to store your progress and to unlock story mode.</h2>
                <h3 className="text-2xl">Coming soon</h3>
                <form className="p-4 mt-3 h-63 rounded-xl">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="text-2xl border-b-1 border-dashed border-[#AFDDFF] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:border-[#FF9149] focus:border-solid text-center w-160 mt-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-2xl border-b-1 border-dashed border-[#AFDDFF] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:border-[#FF9149] focus:border-solid text-center w-160 mt-2"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-2xl border-b-1 border-dashed border-[#AFDDFF] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:border-[#FF9149] focus:border-solid text-center w-160 mt-2"
                  />
                </form>
              </div>
            </div>

            <Link to="/gameMenu" className="bg-[#AFDDFF] hover:bg-[#60B5FF] text-[#FF9149] hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">
              Sign Up
            </Link>
          </div>
        )}
        {activeTab === 'login' && (
          <div className="flex flex-col space-y-4">
            <div className="bg-[#FFECDB] h-90 text-center rounded-xl">
              <div className="w-180 h-83 border-[#AFDDFF] ounded-xl ml-4">
                <h2 className="text-3xl mt-4">Welcome back, login to keep playing.</h2>
                <h3 className="text-2xl">Coming soon</h3>
                <form className="p-4 mt-3 h-63 rounded-xl">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="text-2xl border-b-1 border-dashed border-[#AFDDFF] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:border-[#FF9149] focus:border-solid text-center w-160 mt-2"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-2xl border-b-1 border-dashed border-[#AFDDFF] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:border-[#FF9149] focus:border-solid text-center w-160 mt-2"
                  />
                </form>
              </div>
            </div>

            <Link to="/gameMenu" className="bg-[#AFDDFF] hover:bg-[#60B5FF] text-[#FF9149] hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">
              Login
            </Link>
          </div>
        )}

        {activeTab === 'guest' && (
          <div className="flex flex-col space-y-4">
            <div className="bg-[#FFECDB] h-90 text-center rounded-xl">
              <div className="w-180 h-83 border-[#AFDDFF] ounded-xl ml-4">
                <h2 className="text-3xl mt-4">Welcome back, login to keep playing.</h2>
                <form className="p-4 mt-3 h-63 rounded-xl">
                  {/* takinng out username for now */}
                  {/* <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="text-2xl border-b-1 border-dashed border-[#AFDDFF] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:border-[#FF9149] focus:border-solid text-center w-160 mt-2"
                  /> */}
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-2xl border-b-1 border-dashed border-[#AFDDFF] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:border-[#FF9149] focus:border-solid text-center w-160 mt-2"
                  />
                </form>
              </div>
            </div>

            {/* check to see if email is valid formatt. if it is goto game menu, if not alert user */}
            <Link to={isValidEmail(email) ? "/gameMenu" : "#"} onClick={handleGuest} className="bg-[#AFDDFF] hover:bg-[#60B5FF] text-[#FF9149] hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">
              Play as guest
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

  
  