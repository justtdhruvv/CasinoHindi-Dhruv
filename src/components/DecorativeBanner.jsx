import React from 'react';
import { motion } from 'framer-motion';

const DecorativeBanner = () => {
  const handleClick = () => {
    window.open('http://stake.com/?c=CASINOHINDI2025', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full bg-gray-900 mt-24">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1400px] mx-auto px-4"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      >
        <div className="aspect-[21/6] w-full overflow-hidden">
          <img 
            src="/src/assets/gifs/betting1.gif"
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
