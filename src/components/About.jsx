import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Youtube, Send } from 'lucide-react'; // Import icons
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  const contactLinks = [
    {
      name: 'Telegram',
      icon: <Send className="w-5 h-5" />,
      href: 'https://t.me/casinohindi',
      bgColor: 'bg-[#0088cc]',
      hoverBg: 'hover:bg-[#0077b3]'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-5 h-5" />,
      href: 'https://youtube.com/@casinohindi?si=e4D6NXGaV7C2yEiZ',
      bgColor: 'bg-[#ff0000]',
      hoverBg: 'hover:bg-[#cc0000]'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:casinohindi@gmail.com',
      bgColor: 'bg-[#ea4335]',
      hoverBg: 'hover:bg-[#d33426]'
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="container mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center mb-8">
            <Link 
              to="/" 
              onClick={handleLogoClick} 
              className="block hover:opacity-90 transition-opacity"
            >
              <img 
                src={logo} 
                alt="CasinoHindi Logo" 
                className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg"
              />
            </Link>
            <h1 className="text-4xl font-bold text-gray-900">About CasinoHindi</h1>
          </div>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Welcome to CasinoHindi, your trusted source for comprehensive online betting site reviews and comparisons.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We strive to provide accurate, unbiased information to help you make informed decisions about online betting platforms.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Detailed reviews of betting sites</li>
              <li>Comprehensive comparison tools</li>
              <li>Latest bonus offers and promotions</li>
              <li>Expert gambling advice and tips</li>
            </ul>
          </div>

          {/* Add this new section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 border-t pt-8"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Connect With Us
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-white transition-colors duration-200 ${link.bgColor} ${link.hoverBg}`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
