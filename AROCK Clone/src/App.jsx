import Navbar from "./Components/Navbar";
import './App.css'
import HeroText from "./Components/HeroText";
import bg from '../Resources/bg Image.png'
import Loader from "./Components/Loader";

function App() {
  return (
    <div style={{backgroundImage: `url(${bg})`, backgroundSize: `cover`,  backgroundPosition: `center`,  backgroundRepeat: `no-repeat` }} className="text-white h-screen w-full relative">
      <Navbar/>
      <HeroText/>
      <Loader/>
    </div>
  );
}

export default App;
