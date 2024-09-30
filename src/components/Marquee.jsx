import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className="w-full px-10 py-10 bg-[#004d43] rounded-tr-3xl rounded-tl-3xl">
      <div className="text border-t-[1px] border-b-[1px] border-zinc-300 flex whitespace-nowrap uppercase overflow-hidden gap-[10em]">
        <motion.h1
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            ease: 'linear',
            repeat: Infinity,
            duration: 10,
          }}
          className="text-[22vw] font-semibold -mb-10 -mt-10"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            ease: 'linear',
            repeat: Infinity,
            duration: 10,
          }}
          className="text-[22vw] font-semibold -mb-10 -mt-10"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
