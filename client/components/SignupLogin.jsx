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
      </div>
    </div>
  );
};