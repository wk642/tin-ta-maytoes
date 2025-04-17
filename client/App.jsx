import TinTaMaytoesIcon from './assets/TinTaMaytoesIcon.png'
import TinTaMaytoesExplanation from './assets/videos/TinTaMaytoesExplanation.mp4'
import playIcon from './assets/icons/playIcon.gif'

// animated icons from "Animated Icons" (https://animatedicons.co/)

export default function App() {
  return (
    <div className="font-cbyg">
      <h1 className="text-gameTitle">Tin</h1>
      <h1 className="text-gameTitle">Ta</h1>
      <h1 className="text-gameTitle">Maytoes</h1>
      <img src={ playIcon }/>
      <img src={ TinTaMaytoesIcon } alt="Tin Ta Maytoes Icon" className="w-12 h-12" />
      <video src={ TinTaMaytoesExplanation } width="200" height="100" controls> </video> 
    </div>
  )
}