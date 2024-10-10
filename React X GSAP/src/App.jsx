import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

function App() {
  const [move, setMove] = useState(0);
  const box = useRef();
  const random = gsap.utils.random(-500, 500, 100);

  useGSAP(
    function () {
      gsap.to(box.current, {
        x: move,
        duration: 1,
        rotate: 360,
        repeat: Infinity,
      });
    },
    [move]
  );

  return (
    <div className="bg-zinc-800">
      <div className="page1 h-screen flex items-center justify-center flex-col gap-5 w-full">
        <button
          onClick={() => setMove(random)}
          className="active:scale-[0.9] transition-all px-4 py-3 bg-green-600 rounded-full font-black"
        >
          Animate Box
        </button>
        <div
          ref={box}
          className="box h-[15rem] w-[15rem] bg-red-900 rounded-lg"
        >
          {random}
        </div>
      </div>

      <div className="page2 h-screen w-full">

      </div>
      
    </div>
  );
}

export default App;
