import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap/all";
import Menu from "./Menu";

const Navbar = (props) => {
  // const clickedRef = useRef(null);
  
  // useGSAP(()=>{
  //   if (props.menuClicked) {
  //     gsap.to(menuRef.current, {
  //       y: 0,
  //     });
  //   }
  // },[props.menuClicked])
  
 
  
  return (
    <div className="w-[92vw] mx-auto h-[7vh] flex relative items-center z-[100] justify-between">
      <div className="left-nav text-sm">Logo</div>

      <div
        // ref={clickedRef}
        onClick={()=>props.setMenuClicked(true)}
        className="right-nav text-xs cursor-pointer"
      >
        Menu
        {<Menu menuClicked={props.menuClicked} setMenuClicked={props.setMenuClicked}/> }

      </div>
    </div>
  );
};

export default Navbar;
