import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '#contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('#')) return false; // Hash links handled separately
    return location.pathname === href;
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-elegant-black/95 backdrop-blur-md fixed w-full z-50 top-0">
      <div className="container-max section-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-white">
              DANI<span className="text-gold-500">BLUES</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    onClick={handleContactClick}
                    className="text-elegant-lightgray hover:text-gold-500 px-3 py-2 text-sm font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive(item.href)
                        ? 'text-gold-500 border-b-2 border-gold-500'
                        : 'text-elegant-lightgray hover:text-gold-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <a
                href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER?.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-elegant-lightgray hover:text-gold-500 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-elegant-darkgray rounded-lg mt-2">
              {navigation.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    onClick={handleContactClick}
                    className="text-elegant-lightgray hover:text-gold-500 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                      isActive(item.href)
                        ? 'text-gold-500'
                        : 'text-elegant-lightgray hover:text-gold-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER?.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;