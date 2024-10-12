import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import tom from "./tom.png";
import jerry from "./jerry.png";

function App() {
  const [move, setMove] = useState(0);
  const box = useRef();
  const tomRef = useRef();
  const jerryRef = useRef();
  const random = gsap.utils.random(-500, 500, 100);
  const { contextSafe } = useGSAP();

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

  const moveTom = contextSafe((e) => {
    gsap.to(tomRef.current, {
      x: e.clientX,
      y: e.clientY,
    });
  });

  const moveJerry = contextSafe(() => {
    const randomX = gsap.utils.random(-700, 700, 100);
    const randomY = gsap.utils.random(-300, 300, 100);
    gsap.to(jerryRef.current, {
      x: randomX,
      y: randomY,
    });
  });

  return (
    <div
      onMouseMove={(e) => moveTom(e)}
      className="main bg-zinc-800 overflow-hidden"
    >
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

      <div className="page2 h-screen w-full relative">
        <img
          src={tom}
          ref={tomRef}
          className="w-[25%] absolute translate-x-[0%] translate-y-[-50%]"
          alt=""
        />
        <img
          onMouseEnter={moveJerry}
          src={jerry}
          ref={jerryRef}
          className="w-[15%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
