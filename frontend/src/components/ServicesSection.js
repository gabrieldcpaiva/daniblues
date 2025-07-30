import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/services`);
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
        // Fallback to static data
        setServices([
          {
            id: "haircuts",
            title: "Professional Haircuts",
            description: "Expert haircuts tailored to your unique style and face shape",
            icon: "✂️"
          },
          {
            id: "treatments",
            title: "Brazilian Hair Treatments", 
            description: "Premium Brazilian hair treatments for restoration and revitalization",
            icon: "💆‍♀️"
          },
          {
            id: "products",
            title: "Lowell Product Sales",
            description: "High-quality Lowell hair products for professional home care",
            icon: "🧴"
          },
          {
            id: "analysis",
            title: "Online Hair Analysis",
            description: "Professional online consultation and hair analysis services",
            icon: "💻"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  if (loading) {
    return (
      <section id="services" className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-elegant-white">
      <div className="container-max section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-elegant-black mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience premium hair care with our comprehensive range of professional services
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="card-elegant p-8 text-center group"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 filter grayscale hover:grayscale-0">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-serif font-semibold text-elegant-black mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Learn More Button */}
              <button className="text-purple-500 font-medium text-sm hover:text-purple-600 transition-colors duration-300 flex items-center justify-center space-x-2 mx-auto">
                <span>Learn More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-elegant-black rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Ready to transform your hair?
            </h3>
            <p className="text-elegant-lightgray text-lg mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the difference of professional Brazilian hair treatments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER?.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Book Appointment
              </a>
              <Link
                to="/products"
                className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-elegant-black"
              >
                View Products
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;