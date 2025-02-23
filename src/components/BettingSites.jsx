import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ShieldCheck } from 'lucide-react'; // Add Shield import
import { bettingSites } from '../data/mockData';
import DecorativeBanner from './DecorativeBanner';

const BettingSiteCard = ({ site }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const isTrusted = site.name === 'Stake' || site.name === '1 Win Bet';

  const handleVisitSite = (url) => {
    // Ensure the URL is external and properly formatted
    if (!url.startsWith('http')) {
      url = 'https://' + url;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
    >
      {isTrusted && (
        <div className="absolute top-4 right-4 z-10 bg-green-600 text-white px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-sm font-medium">Trusted</span>
        </div>
      )}
      <div 
        className="relative aspect-video overflow-hidden cursor-pointer group" // Added group class
        onClick={() => handleVisitSite(site.affiliateLink)}
      >
        <img
          src={site.image}
          alt={site.name}
          loading="lazy"
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" // Updated hover effect
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{site.name}</h3>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-700">{site.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-6">{site.description}</p>
        
        {/* Updated Bonus Offer Section */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-500 mb-1">Bonus Offer</h4>
            <p className="text-lg font-bold text-green-600">{site.bonus}</p>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">Promo Code:</span>
              <span className="bg-yellow-100 px-4 py-1.5 rounded-md text-sm font-mono font-semibold text-yellow-800 tracking-wide">
                {site.promoCode}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => handleVisitSite(site.affiliateLink)}
            className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200" // Changed from bg-blue-600 back to bg-gray-900
          >
            Visit Site
          </button>
          
          {/* Updated mirror link styles to match main button */}
          {site.name === 'Stake' && site.additionalLinks && (
            <>
              {site.additionalLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleVisitSite(link.url)}
                  className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200" // Changed from bg-gray-700 to match main button
                >
                  {link.label}
                </button>
              ))}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const BettingSites = () => {
  const handleDecoImageClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="sites" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-[1400px] relative">
        {/* Decorative Images with Links */}
        <div className="hidden md:block absolute -left-28 top-[200px] cursor-pointer group">
          <motion.img 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="/images/site2.jpg" // Updated path to use public folder
            alt="" 
            className="w-72 h-auto rounded-lg shadow-lg opacity-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
          />
        </div>
        <div className="hidden md:block absolute -right-28 top-[200px] cursor-pointer group">
          <motion.img 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="/images/site3.jpg" // Updated path to use public folder
            alt="" 
            className="w-72 h-auto rounded-lg shadow-lg opacity-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Top Betting Sites
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8"> {/* Added margin-bottom */}
          {bettingSites.map((site) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            > {/* Removed translate classes */}
              <BettingSiteCard site={site} />
            </motion.div>
          ))}
        </div>
        <DecorativeBanner />
      </div>
    </section>
  );
};

export default BettingSites;