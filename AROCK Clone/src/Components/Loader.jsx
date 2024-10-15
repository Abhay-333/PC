import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { SlowMo } from 'gsap/EasePack'
// import { ExpoScaleEase } from 'gsap/EasePack'

const Loader = () => {
    const progressRef = useRef()

    useGSAP(()=>{
        gsap.to(progressRef.current,{
            width:"100%",
            duration:1.8,
            delay:1,
            ease: SlowMo,
        })
    })

    return (
    <div className='fixed top-0 h-[0.5vh] bg-transparent w-screen'>
        <div ref={progressRef} className="progressBar w-[0%] rounded-lg bg-white h-full"></div>
    </div>
  )
}

export default Loader