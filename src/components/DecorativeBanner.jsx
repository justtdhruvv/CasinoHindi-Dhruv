import React from 'react';
import { motion } from 'framer-motion';
import { betting1Gif } from '../assets';

const DecorativeBanner = () => {
  const handleClick = () => {
    window.open('http://stake.com/?c=CASINOHINDI2025', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full bg-gray-900 mt-24">
      <motion.div 
        onClick={handleClick}
        className="cursor-pointer transform transition-transform duration-300 hover:scale-[1.01]"
        whileHover={{ opacity: 0.95 }}
      >
        <div className="aspect-[21/6] w-full overflow-hidden">
          <img 
            src={betting1Gif}
            alt="Visit Stake"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default DecorativeBanner;
