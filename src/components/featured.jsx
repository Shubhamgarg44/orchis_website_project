import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Featured() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className='w-full py-10 bg-zinc-800'>
      <div className="w-full px-12 border-b-[0.5px] border-zinc-400 pb-10">
        <h1 className="text-6xl font-['Neue_Montreal'] tracking-tight pt-10 font-extralight">Featured projects</h1>
      </div>
      <div className='px-20'>
        <div className="cards w-full flex gap-20 mt-20">
          <div
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
            className="cardcontainer w-1/2 h-[70vh] relative"
          >
            {hoveredCard === 0 && (
              <h1 className='absolute z-[9] text-7xl font-["Neue_Montreal"] leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#cdea67] flex overflow-hidden'>
                {"FYDE".split('').map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: '100%' }}
                    animate={{ y: '0' }}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            )}
            <div className="card w-full h-full bg-green-900 rounded-2xl overflow-hidden">
              <img
                className='w-full h-full object-cover'
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
            <div className="w-full flex gap-3 my-2">
              {['AUDIT', 'COPY WRITING', 'SALES DECK', 'SLIDES DESIGN'].map((item, index) => (
                <button
                  key={index}
                  className='border-[1px] rounded-full w-40 h-8 border-zinc-400 leading-none tracking-tight'
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="cardcontainer w-1/2 h-[70vh] relative"
          >
            {hoveredCard === 1 && (
              <h1 className='absolute z-[9] text-7xl font-["Neue_Montreal"] leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#cdea67] flex overflow-hidden'>
                {"VISE".split('').map((item, index) => (
                  <motion.span
                  key={index}
                  initial={{ y: '100%' }}
                  animate={{ y: '0' }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
                ))}
              </h1>
            )}
            <div className="card w-full h-full bg-green-900 rounded-2xl overflow-hidden">
              <img
                className='w-full h-full object-cover'
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
            <div className="w-full flex gap-3 my-2">
              {['AGENCY', 'COMPANY PRESE'].map((item, index) => (
                <button
                  key={index}
                  className='border-[1px] rounded-full w-40 h-8 border-zinc-400 leading-none tracking-tight'
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
