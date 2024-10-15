import Navbar from "./Components/Navbar";
import "./App.css";
import HeroText from "./Components/HeroText";
import bg from "../Resources/bg Image.png";
import Loader from "./Components/Loader";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ExpoScaleEase, gsap } from "gsap/all";
import { Expo } from "gsap";
import CustomEase from "gsap/src/CustomEase";

function App() {
  const homeRef = useRef(null);
  const blackRef = useRef(null);
  const tl = gsap.timeline();

  gsap.registerPlugin(useGSAP); 
  useGSAP(() => {
    tl.to(blackRef.current, {
      delay: 1.9,
      y: "-100%",
      duration: 0.9,
      ease: CustomEase.create("custom", "M0,0 C0,0 0.199,0.037 0.245,0.052 0.287,0.065 0.385,0.107 0.424,0.125 0.462,0.143 0.519,0.182 0.555,0.206 0.59,0.23 0.638,0.282 0.669,0.311 0.703,0.343 0.734,0.387 0.763,0.424 0.792,0.461 0.841,0.544 0.866,0.585 0.892,0.631 0.908,0.723 0.931,0.772 0.955,0.825 1,1.01 1,1.01 "),
      willChange: "transform",
    });

    gsap.from(homeRef.current, {
      duration: 1,
      ease: CustomEase.create("custom", "M0,0 C0,0 0.199,0.037 0.245,0.052 0.287,0.065 0.385,0.107 0.424,0.125 0.462,0.143 0.519,0.182 0.555,0.206 0.59,0.23 0.638,0.282 0.669,0.311 0.703,0.343 0.734,0.387 0.763,0.424 0.792,0.461 0.841,0.544 0.866,0.585 0.892,0.631 0.908,0.723 0.931,0.772 0.955,0.825 1,1.01 1,1.01 "),
      opacity: 0,
      delay: 1.9,
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
        asda
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
        <Navbar />
        <HeroText />
      </div>
    </div>
  );
}

export default App;
