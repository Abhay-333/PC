import React from "react";
import { IoPlay } from "react-icons/io5";

const HeroText = () => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] z-[99] translate-y-[-50%] uppercase">
      <h1 className="text-[17.5rem] font-black leading-[13rem] tracking-tighter">AROCK</h1>

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
