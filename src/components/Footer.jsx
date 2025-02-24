import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Send, Youtube, Mail } from 'lucide-react';
import logo from '../assets/images/logo.jpg';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const handleTermsClick = () => {
    window.scrollTo(0, 0);
  };

  const handleNavigation = async (e, href) => {
    e.preventDefault();
    
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first
        await navigate('/');
        // Wait for navigation to complete
        setTimeout(() => {
          const element = document.querySelector(href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // If already on home page, just scroll
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (href === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  const socialLinks = [
    {
      name: 'Telegram',
      icon: <Send className="w-5 h-5" />,
      href: 'https://t.me/casinohindi',
      bgColor: 'bg-[#0088cc]'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-5 h-5" />,
      href: 'https://youtube.com/@casinohindi',
      bgColor: 'bg-[#ff0000]'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:casinohindi@gmail.com',
      bgColor: 'bg-[#ea4335]'
    }
  ];

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'Betting Sites', href: '/#sites' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'About Us', href: '/about' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & About */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src={logo} 
                alt="CasinoHindi" 
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xl font-bold">CasinoHindi</span>
            </Link>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Your trusted source for online betting information and reviews.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.bgColor} p-2 rounded-full hover:opacity-80 transition-opacity duration-200`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} CasinoHindi. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link 
                to="/terms" 
                className="text-sm text-gray-400 hover:text-white"
                onClick={handleTermsClick}
              >
                Terms of Service
              </Link>
              <Link 
                to="/terms#privacy" 
                className="text-sm text-gray-400 hover:text-white"
                onClick={handleTermsClick}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
