import TinTaMaytoesIcon from './assets/TinTaMaytoesIcon.png';
import Explanation from './assets/videos/Explanation.mp4';
import playIcon from './assets/icons/playIcon.gif';

export default function App() {
  return (
    <main>

      <div className="font-cbyg flex flex-col h-screen bg-orange-300 overflow-hidden">
        <div className="flex -mt-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-gameTitle ml-80 h-60">Tin</h1>
            <h1 className="text-gameTitle ml-80 -mt-10 mb-10">Ta</h1>
          </div>
          <img
            src={ TinTaMaytoesIcon }
            alt="Tin Ta Maytoes Icon"
            className="w-auto h-110 mt-10"
          />
          <video src={ Explanation } controls className="ml-4 mt-15 h-110" />
        </div>
        
        <h1 className="text-gameTitle ml-90 -mt-35">Maytoes</h1>
        <div className="flex justify-center mt-4">
          <img src={ playIcon } alt="Play Icon" className="-mt-25" />
        </div>
      </div>
    </main>
  );
}