import React from 'react';
import { motion } from 'framer-motion';

const BioSection = () => {
  return (
    <section className="py-20 bg-elegant-cream">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxoYWlyJTIwc2Fsb258ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzUzNjA4MTQ0fDA&ixlib=rb-4.1.0&q=85"
                alt="Professional Hair Salon Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-elegant-black/30 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-elegant-black mb-4">
                About <span className="text-gradient">Dani Blues</span>
              </h2>
              <div className="w-20 h-1 bg-purple-500 mb-6"></div>
            </div>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Representative and distributor of select Brazilian hair products in the UK, <strong className="text-elegant-black">Dani Blues Hair & Beauty</strong> blends advanced hair technology with soulful, expert care.
              </p>
              
              <p>
                With over <strong className="text-elegant-black">13 years of experience as a professional hairdresser</strong> and a dedicated salon operating in Scotland (Bathgate/Edinburgh) for the past <strong className="text-elegant-black">2+ years</strong>, Dani offers precision haircuts, targeted treatments, and personalised consultations — both in person and online.
              </p>
              
              <p>
                We use high-quality, cutting-edge techniques to restore <strong className="text-elegant-black">shine</strong>, <strong className="text-elegant-black">softness</strong>, and <strong className="text-elegant-black">vitality</strong> to your hair, ensuring every client leaves feeling radiant and confident.
              </p>
            </div>

            {/* Stats */}
            <div className="pt-8">
              <div className="bg-elegant-white rounded-xl p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">🧵 Years in the Profession</div>
                    <div className="text-3xl font-bold text-purple-600">13+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">🌍 Studio in the UK</div>
                    <div className="text-3xl font-bold text-purple-600">2+</div>
                    <div className="text-sm text-gray-600">Years Active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">🧴 Curated Product Lines</div>
                    <div className="text-3xl font-bold text-purple-600">9</div>
                    <div className="text-sm text-gray-600">Brazilian Formulas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER?.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Get Consultation</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;