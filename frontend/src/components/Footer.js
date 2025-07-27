import React from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-elegant-black text-elegant-lightgray">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-serif font-bold text-white">
                DANI<span className="text-purple-400">BLUES</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Representative and distributor in the UK of Brazilian hair products. 
              Specialist in haircuts, treatments, and online analysis in Scotland.
            </p>
            <div className="flex space-x-4">
              <a
                href={process.env.REACT_APP_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-elegant-lightgray hover:text-gold-500 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.35-1.052-2.35-2.35 0-1.297 1.052-2.35 2.35-2.35 1.297 0 2.35 1.052 2.35 2.35 0 1.297-1.052 2.35-2.35 2.35zm7.718 0c-1.297 0-2.35-1.052-2.35-2.35 0-1.297 1.052-2.35 2.35-2.35 1.297 0 2.35 1.052 2.35 2.35 0 1.297-1.052 2.35-2.35 2.35z"/>
                </svg>
              </a>
              <a
                href={process.env.REACT_APP_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-elegant-lightgray hover:text-gold-500 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm hover:text-gold-500 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-sm hover:text-gold-500 transition-colors duration-300">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm hover:text-gold-500 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-gold-500 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-gold-500" />
                <span className="text-sm">Edinburgh / Bathgate, Scotland</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-gold-500" />
                <a 
                  href={`tel:${process.env.REACT_APP_WHATSAPP_NUMBER}`}
                  className="text-sm hover:text-gold-500 transition-colors duration-300"
                >
                  {process.env.REACT_APP_WHATSAPP_NUMBER}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-gold-500" />
                <a 
                  href="mailto:info@daniblues.com"
                  className="text-sm hover:text-gold-500 transition-colors duration-300"
                >
                  info@daniblues.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-elegant-darkgray mt-8 pt-8 text-center">
          <p className="text-sm">
            © {currentYear} Dani Blues Hair & Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;