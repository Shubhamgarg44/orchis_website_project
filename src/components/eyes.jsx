import React,{useEffect, useRef, useState} from 'react'

function eyes() {

   const [rotate, setRotate] = useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mousex = e.clientX;
            let mousey = e.clientY;

            let deltax = mousex - window.innerWidth/2
            let deltay = mousey - window.innerHeight/2

            var angle = Math.atan2(deltay,deltax) *(180/Math.PI)
            setRotate(angle-180)
        })
    })
    
  return (
    <div className='w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.6" className=" relative w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
                <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
                <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full relative "> 
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'> 

                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                    </div>
                   </div>
                </div>
                <div className="w-[15vw] h-[15vw] bg-zinc-100  rounded-full flex items-center justify-center"> <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full relative">
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                </div>
                   </div>
                   </div>
            </div>
        </div>
    </div>
  )
}

export default eyes