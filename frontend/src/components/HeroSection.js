import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-elegant-black">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-elegant-black via-gray-900 to-elegant-black"></div>
        {/* Elegant geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-purple-500/20 rounded-full"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border border-purple-400/10 rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-300/40 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Brand Logo Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-6xl md:text-8xl font-serif font-light text-elegant-cream tracking-wider mb-4">
              DANI<span className="text-purple-400">BLUES</span>
            </div>
            <div className="text-sm md:text-base font-sans font-light text-purple-200 tracking-[0.3em] uppercase">
              Hair & Beauty
            </div>
          </motion.div>

          {/* Elegant Separator */}
          <motion.div 
            className="flex items-center justify-center my-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-16 h-px bg-purple-400"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full mx-4"></div>
            <div className="w-16 h-px bg-purple-400"></div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-2xl md:text-4xl font-serif font-light mb-8 leading-relaxed text-elegant-cream max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Unveil your beauty essence with premium Brazilian hair treatments
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-purple-100 mb-12 font-light max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Cutting-edge beauty solutions in Scotland • Edinburgh • Bathgate
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER?.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-10 py-4 rounded-none transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg tracking-wide"
            >
              BOOK APPOINTMENT
            </a>
            <Link
              to="/products"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-elegant-black font-medium px-10 py-4 rounded-none transition-all duration-300 text-lg tracking-wide"
            >
              VIEW PRODUCTS
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;