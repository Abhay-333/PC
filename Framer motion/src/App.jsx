import { useState } from "react";
import "./App.css";
import { AnimatePresence, motion, useScroll } from "framer-motion";

function App() {
  const parentVariants = {
    visible: { opacity: 1, transition:{staggerChildren:0.2}, delayChildren:0.1 },
    hidden: { opacity: 0 },
  };

  const arr = [1,2,34,5,6,34,647]

  const childVariants = {
    visible:{opacity:1, y:0},
    hidden:{opacity:0, y:100},
  }

  const {scrollYProgress} = useScroll()
  const [clicked, setClicked] = useState(false) 

  const handlebtnClicked = ()=>{
    setClicked(!clicked)
    console.log(clicked)
  }

  return (
    <div className="w-full bg-zinc-900">
      <motion.div
        initial={parentVariants.hidden}
        animate={parentVariants.visible}
        transition={{ duration: 1, repeat: Infinity }}
        className="box bg-red-500 h-[15rem] w-[15rem] rounded-xl"
      ></motion.div>

      <motion.div
        className="box1 bg-blue-500 h-[15rem] w-[15rem] rounded-xl"
        drag
        dragConstraints={{ top: 0, left: 0, right: 0 }}
      ></motion.div>

      <motion.div
        className="box2 bg-yellow-500 h-[15rem] w-[15rem] rounded-xl"
        initial={{ x: 0 }}
        animate={{ x: [0, 100, 200, 300] }}
        transition={{ duration: 1, repeat: Infinity }}
      ></motion.div>

      <div className="page2 h-screen w-full flex items-center justify-center">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
          className="main-container flex items-center justify-center flex-wrap gap-5 p-5 w-[95%] rounded-xl bg-blue-900"
        >
          {arr.map((e, index) => {
           return <motion.div
              key={index}
              variants={childVariants}
              transition={{ duration: 1, repeat: Infinity }}
              className="box3 bg-red-500 h-[15rem] w-[15rem] rounded-xl flex-shrink-0"
            >
              {e}
            </motion.div>;
          })}

        </motion.div>
      </div>

      <motion.div style={{scaleX: scrollYProgress}} className="progressBar h-1 w-full bg-white fixed top-0 left origin-left rounded-xl"></motion.div>

      <AnimatePresence >  {/*This is used to save memory */}
        <div className="page3 h-screen w-full bg-zinc-800 p-10">
          <motion.div 
          layout
          style={{
            height: clicked?400:300,
            width: clicked?400:300,
          }} className="box4 h-[15rem] w-[15rem] bg-red-500 rounded-xl"></motion.div>
          <button onClick={handlebtnClicked} className="bg-emerald-600 text-white font-bold p-5 rounded-lg mt-5">Click Here</button>
        </div>
      </AnimatePresence>


    </div>
  );
}

export default App;
