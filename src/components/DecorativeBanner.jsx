import React from 'react';
import { motion } from 'framer-motion';
import { betting1Gif } from '../assets';

const DecorativeBanner = () => {
  const handleClick = () => {
    window.open('http://stake.com/?c=CASINOHINDI2025', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full bg-gray-900 mt-24">
      <motion.div>
        <div className="aspect-[21/6] w-full overflow-hidden">
          <img 
            src={betting1Gif}
            alt="Visit Stake"
            className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default DecorativeBanner;
