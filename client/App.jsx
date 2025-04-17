import TinTaMaytoesIcon from './assets/TinTaMaytoesIcon.png'
import TinTaMaytoesExplanation from './assets/TinTaMaytoesExplanation.mp4'

export default function App() {
  return (
    <>
      <h1>Tin Ta Maytoes</h1>
      <img src={TinTaMaytoesIcon} alt="Tin Ta Maytoes Icon" className="w-12 h-12" />
      <video src={TinTaMaytoesExplanation} width="200" height="100" controls> </video> 
    </>
  )
}