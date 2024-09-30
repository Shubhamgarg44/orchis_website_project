import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const LandingPage = () => {

  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 py-5'>
        <div className="textstructure mt-52 px-20">
            {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index)=>{
                return <div className="masker">
                    <div className='w-fit flex '>
                        
                    {index === 1 && (<motion.div initial={{width: 0}} animate={{width:"9vw"}}
                     transition={{ease:[0.76,0,0.24,1],duration:1 }} className='w-[9vw] h-[5vw] bg-green-400 relative top-[1.2vw] rounded-md'></motion.div>)}
                <h1 className='leading-[6vw] text-[7.5vw] tracking-tighter font-["Founder_Grotesk"] uppercase font-medium m-3'>{item}</h1>
                         </div>
                    </div>
            })}

        </div>
        <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
            {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>{
                return <p className='tetx-md font-["Neue_Montreal"] font-light tracking-tight leading-none'>{item}</p>
            })}
            <div className="start flex items-center gap-2">
                <div className='px-5 py-2 border-[1px] border-zinc-600 rounded-full font-light text-md uppercase'>Start the project</div>
                <div className='w-9 h-9 rounded-full border-[1px] border-zinc-600 text-center flex items-center justify-center'><MdArrowOutward /></div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage