import Navbar from "./Components/Navbar";
import "./App.css";
import HeroText from "./Components/HeroText";
import bg from "../Resources/bg Image.png";
import Loader from "./Components/Loader";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ExpoScaleEase, gsap } from "gsap/all";
import { Expo } from "gsap";
import CustomEase from "gsap/src/CustomEase";
import Menu from "./Components/Menu";

function App() {
  const homeRef = useRef(null);
  const blackRef = useRef(null);
  const tl = gsap.timeline();
  const tl2 = gsap.timeline();
  const [menuClicked, setMenuClicked] = useState(false);

  gsap.registerPlugin(ExpoScaleEase, CustomEase);

  useGSAP(() => {
    tl.to(blackRef.current, {
      delay: 0.7,
      y: "-100%",
      duration: 1,
      ease: "expoScale(0.5,7,none)",
      willChange: "transform",
    });

    tl2.from(homeRef.current, {
      duration: 1,
      ease: "power2.out",
      opacity: 0,
      delay: 0.7,
      scale: 1.05,
      y: 50,
      willChange: "opacity, transform",
    });

  });

  return (
    <div className="relative overflow-hidden bg-zinc-900">
      <Loader />

      <div
        ref={blackRef}
        className="bg-zinc-950 z-[500] absolute top-0 h-screen w-full will-change-transform"
      >
      
      </div>

      <div
        ref={homeRef}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
        }}
        className="text-white h-screen w-full relative opacity-1"
      >
        <Navbar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
        <HeroText />
      </div>
    </div>
  );
}

export default App;
