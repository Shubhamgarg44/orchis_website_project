import React from 'react'

function footer() {
  return (
    <div className='w-full h-screen bg-zinc-800 flex gap-10'> 
    <div className="w-1/2 h-screen pl-20 pt-20 ">
        <h1 className='text-8xl text-zinc-100 font-[FoundersGrotesk - 600] font-bold leading-none tracking-tight'>EYE-
        OPENING</h1>
        <h4 className='relative top-[60%] text-4xl'>ochi</h4>
    </div>
    <div className="w-1/2 h-screen pr-12 pt-20">
    <h1 className='text-8xl text-zinc-100 font-[FoundersGrotesk - 600] font-bold leading-none tracking-tight pb-5'>PRESENTATION</h1>
    S:

    <div className='flex-row pt-5 pb-10'>
    <h1>instagram</h1>
    <h1>instagram</h1>
    <h1>instagram</h1>
    <h1>instagram</h1>
    </div>

    L:

    <div className="flex-row pt-5 pb-10">
        <h1>202-1965 W 4th Ave</h1>
        <h1>Vancouver, Canada</h1>
        <h1>Vancouver, Canada</h1>
        <h1>Vancouver, Canada</h1>
    </div>

    E:

    <div className="flex-row pt-5 pb-10">
        <h1>hello@ochi.design</h1>
    </div>

    </div>
    
    </div>
  )
}

export default footer