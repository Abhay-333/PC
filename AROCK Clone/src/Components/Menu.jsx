import React, { useRef } from "react";
import menuImg from "../../Resources/menu img.png";
import { Tilt } from "@jdion/tilt-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";

const Menu = (props) => {
  const menuRef = useRef(null);

  const handleClose = () => {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        top: "100%", // Animate to top: 100%
        duration: 0.5, // Duration of the animation
        ease: "power2.out", // Easing function
        onComplete: () => props.setMenuClicked(false), // Close the menu after animation
      });
    }
  };
  useGSAP(() => {
    if (props.menuClicked) {
      gsap.to(menuRef.current, {
        top: 0,
      });
    }
  }, [props.menuClicked]);

  return (
    <div
      ref={menuRef}
      className="h-screen fixed z-[999] bg-zinc-900 w-full top-full left-0 flex"
    >
      <Tilt className="leftMenu relative w-[60%] h-full p-10 flex items-center justify-between">
        <img
          className="absolute opacity-[0.6] scale-[0.9] w-full h-full object-cover object-center"
          src={menuImg}
          alt=""
        />
        <img
          className="absolute opacity-[0.7] scale-[0.79] w-full h-full object-cover object-center"
          src={menuImg}
          alt=""
        />
        <img
          className="absolute opacity-[0.8] scale-[0.69] w-full h-full object-cover object-center"
          src={menuImg}
          alt=""
        />
      </Tilt>

      <div className="rightMenu w-[40%] h-full p-10">
        <h1
          onClick={handleClose}
          className="text-sm text-right font1 cursor-pointer"
        >
          Close
        </h1>
      </div>
    </div>
  );
};

export default Menu;
