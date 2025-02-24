import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { carouselSlides } from '../data/mockData';

const MediaBackground = ({ slide }) => {
  switch (slide.mediaType) {
    case 'video':
      return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
            style={{ 
              minWidth: '100%', 
              minHeight: '100%',
              quality: 'high',
              objectPosition: 'center'
            }}
            preload="auto"
            fetchpriority="high"
          >
            <source src={slide.mediaUrl} type="video/mp4" quality="high" />
          </video>
        </div>
      );
    case 'gif':
    case 'image':
      return (
        <div
          className="w-full h-full"
          style={{ 
            backgroundImage: `url(${slide.mediaUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            imageRendering: 'high-quality'
          }}
        />
      );
    default:
      return null;
  }
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleCTAClick = (e, link) => {
    e.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[40vh] md:h-[60vh] overflow-hidden pt-16 md:pt-20"> {/* Added pt-16 for mobile and pt-20 for desktop */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <MediaBackground slide={carouselSlides[currentSlide]} />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center px-4"> {/* Added px-4 for mobile */}
            <div className="text-center text-white">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-5xl font-bold mb-2 md:mb-4" // Adjusted text size and margins for mobile
              >
                {carouselSlides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-xl mb-4 md:mb-8" // Adjusted text size and margins for mobile
              >
                {carouselSlides[currentSlide].description}
              </motion.p>
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                href={carouselSlides[currentSlide].cta.link}
                onClick={(e) => handleCTAClick(e, carouselSlides[currentSlide].cta.link)}
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                {carouselSlides[currentSlide].cta.text}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;