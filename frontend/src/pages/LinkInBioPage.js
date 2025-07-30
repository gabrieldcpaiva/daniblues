import React from 'react';
import { motion } from 'framer-motion';

const LinkInBioPage = () => {
  const links = [
    {
      title: '✨ Book Your Treatment',
      description: 'Get in touch via WhatsApp',
      url: 'https://api.whatsapp.com/send/?phone=447403477724&text&type=phone_number&app_absent=0',
      color: 'bg-gradient-to-r from-purple-600 to-purple-700'
    },
    {
      title: 'View Services',
      description: 'Explore our hair treatments',
      url: '/#services',
      color: 'bg-gradient-to-r from-elegant-black to-gray-800'
    },
    {
      title: 'Our Products',
      description: 'Browse Brazilian hair formulas',
      url: '/products',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      title: 'Follow on Instagram',
      description: '@daniblueshairandbeauty',
      url: 'https://www.instagram.com/daniblueshairandbeauty/',
      color: 'bg-gradient-to-r from-pink-500 to-purple-600'
    },
    {
      title: 'Like on Facebook',
      description: 'Stay updated with our news',
      url: 'https://www.facebook.com/daniblueshairandbeauty/',
      color: 'bg-gradient-to-r from-blue-600 to-blue-700'
    }
  ];

  return (
    <div className="min-h-screen bg-elegant-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="text-4xl font-serif font-light text-elegant-cream tracking-wider mb-2">
            DANI<span className="text-purple-400">BLUES</span>
          </div>
          <div className="text-sm font-sans font-light text-purple-200 tracking-[0.3em] uppercase">
            Hair & Beauty
          </div>
          <div className="w-16 h-px bg-purple-400 mx-auto mt-4"></div>
        </motion.div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`block w-full ${link.color} text-white rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <div className="font-medium text-lg mb-1">{link.title}</div>
              <div className="text-sm opacity-90">{link.description}</div>
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-8 text-elegant-lightgray"
        >
          <div className="text-sm">📍 70 Dalry Road, Edinburgh EH11 1LJ</div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-8 text-purple-300 text-xs"
        >
          © 2024 Dani Blues Hair & Beauty
        </motion.div>
      </div>
    </div>
  );
};

export default LinkInBioPage;