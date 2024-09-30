import React from 'react'

function cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex gap-5 justify-center items-center'>
        <div className="cardcontainer w-1/2 ml-8 ">
            <div className="card w-full     h-[50vh] bg-[#004d43] rounded-xl text-7xl text-[#cdea67] flex items-center justify-center">ochi
            <button className=' relative border-[1px] -left-[300px] top-[160px] text-[18px] rounded-full bg-[#004d43] px-5 py-1 border-[#cdea67]'>&copy; 2018-19</button></div>
        

        </div>
        <div className="cardcontainer w-1/2  flex gap-5 justify-center items-center mr-8">
          <div className="w-1/2 bg-zinc-900 h-[50vh] rounded-xl flex items-center justify-center"> <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          
          </div>
          <div className="w-1/2 bg-zinc-900 h-[50vh] rounded-xl flex items-center justify-center">
            <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          
          </div>
        </div>
    </div>
  )
}

export default cards