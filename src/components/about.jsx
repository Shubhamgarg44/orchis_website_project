import React from 'react'

function about() {
  return (
    <div className='w-full p-20            bg-[#cdea67] rounded-t-3xl rounded-l-3xl  text-black '>
        <h1 className='font-["Neue_Montreal"] text-[4vw] tracking-tight leading-[4.2vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to <span className='underline'> raise funds </span>, <span className='underline'> sell products </span>, <span className='underline'>explain complex ideas </span>, and <span className='underline'>hire great people.</span></h1>
      
      <div className="w-full border-t-[1px] border-[#a1b562] mt-20 pt-10 flex gap-2 ">
        <div className="w-1/2 ">
            <h1 className='font-["Neue_Montreal"] text-[4vw] tracking-tight'>Our approach:</h1>
            <button className='bg-zinc-900 rounded-full px-6 py-4 text-white mt-10 flex gap-7 '>READ MORE
            <div className="w-2 h-2 rounded-full bg-zinc-100 mt-1.5"></div></button>
        </div>
        <div className="inline-block bg-green-500 rounded-3xl overflow-hidden">
      <img
        src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
        alt="Ochi Design"
        className="block w-full h-auto"
      />
    </div>
      </div>
    </div>
  )
}

export default about
