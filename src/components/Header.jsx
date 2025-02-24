import React, { useState } from 'react';
import { Menu, X, Send, Youtube, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Add useNavigate
import logo from '../assets/images/logo.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Add this
  const isAboutPage = location.pathname === '/about';

  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    if (href.startsWith('/#')) {
      // If on about page, first navigate to home then scroll
      if (isAboutPage) {
        navigate('/');
        // Wait for navigation to complete then scroll
        setTimeout(() => {
          const element = document.querySelector(href.substring(1));
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        // Normal scroll behavior if already on home page
        const element = document.querySelector(href.substring(1));
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
      setIsOpen(false);
    } else if (href === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
    } else {
      // For other routes like /about
      navigate(href);
      window.scrollTo(0, 0);
      setIsOpen(false);
    }
  };

  const socialLinks = [
    {
      name: 'Telegram',
      icon: <Send className="w-4 h-4" />,
      href: 'https://t.me/casinohindi',
      bgColor: 'bg-[#0088cc]',
      hoverBg: 'hover:bg-[#0077b3]'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-4 h-4" />,
      href: 'https://youtube.com/@casinohindi?si=e4D6NXGaV7C2yEiZ',
      bgColor: 'bg-[#ff0000]',
      hoverBg: 'hover:bg-[#cc0000]'
    },
    {
      name: 'Email',
      icon: <Mail className="w-4 h-4" />,
      href: 'mailto:Casinohindi@gmail.com',
      bgColor: 'bg-[#ea4335]',
      hoverBg: 'hover:bg-[#d33426]'
    }
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Betting Sites', href: '/#sites' },
    { name: 'Reviews', href: '/#reviews' }, // Changed from '/reviews' to '/#reviews'
    { name: 'About', href: '/about' }
  ];

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-2"> {/* Reduced padding */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="CasinoHindi Logo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-xl font-bold text-gray-800">CasinoHindi</span>
            </Link>
            {/* Social Icons - Only show if not on About page */}
            {!isAboutPage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="hidden sm:flex items-center space-x-2"
              >
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full text-white transition-colors duration-200 ${link.bgColor} ${link.hoverBg}`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </motion.div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  item.href.startsWith('/#') ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;