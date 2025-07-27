import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import BioSection from '../components/BioSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BioSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;