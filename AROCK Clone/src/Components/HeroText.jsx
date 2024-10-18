import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { IoPlay } from "react-icons/io5";
import { gsap } from "gsap/all";
import { ExpoScaleEase } from "gsap/EasePack";
import { CustomEase } from "gsap/src/all";

const HeroText = () => {
  const heroTextRef = useRef(null)
  gsap.registerPlugin(ExpoScaleEase, CustomEase);
  
  useGSAP(()=>{
    let clutter = ``
    const splittedText = heroTextRef.current.textContent.split("")
    console.log(splittedText)
    
    splittedText.forEach(function(e){
      clutter += `<span>${e}</span>`
    })

    heroTextRef.current.innerHTML = clutter

    gsap.to('h1 span',{
      y:0,
      duration:1,
      delay:1.5,
      scale:1,
      stagger:0.1,
      opacity:1,
      rotateX:0,
      rotateY:0,
      rotateZ:0,
      ease: "power4.out",
    })
  })


  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] z-[99] translate-y-[-50%] uppercase">
      <h1 ref={heroTextRef} className="whitespace-nowrap overflow-hidden text-[17.5rem] font-black leading-[13rem] tracking-tighter">AROCK</h1>

      <div className="font1 flex items-center justify-between w-full ">
        <h1 className="font1 uppercase tracking-tighter flex gap-1 items-center text-[0.8vw] leading-none ">
          <IoPlay className="text-lg rounded-full" /> Play <br /> The flim
        </h1>

        <div className="flex items-center gap-14 text-[0.8vw] leading-none tracking-tighter">
          <h1 className="font1">
            Creator <br /> Curator
          </h1>
          <h1 className="font1">
            New York <br /> Los Angeles
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
