import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import ProductInquiryModal from '../components/ProductInquiryModal';

const ProductsPage = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const products = [
    {
      id: 'bioplastia-clinic',
      name: 'Bioplastia Clinic',
      description: 'Advanced strand reconstruction technology that repairs chemical damage',
      benefits: [
        'Reconstructs damaged hair strands',
        'Repairs chemical damage',
        'Restores hair fiber integrity'
      ],
      products: [
        'Reconstructive Treatment',
        'Protein Mask',
        'Sealing Complex'
      ],
      image: 'https://images.pexels.com/photos/7142792/pexels-photo-7142792.jpeg'
    },
    {
      id: 'power-nutri',
      name: 'Power Nutri',
      description: 'Deep hydration with 24-hour frizz control and pollution protection',
      benefits: [
        'Deep intensive hydration',
        '24-hour frizz control',
        'Protection against pollution'
      ],
      products: [
        'Shampoo (2400ml)',
        'Conditioner',
        'Intensive Mask'
      ],
      image: 'https://images.pexels.com/photos/7142792/pexels-photo-7142792.jpeg'
    },
    {
      id: 'liso-magico',
      name: 'Liso Magico',
      description: 'Chemical-free smoothing system with ultra-lasting results',
      benefits: [
        'Chemical-free smoothing process',
        'Ultra-lasting smooth results',
        'Reduces volume and frizz'
      ],
      products: [
        'Shampoo (2400ml)',
        'Conditioner (2000ml)',
        'Smoothing Oil (300ml)',
        'Treatment Mask (2400ml)'
      ],
      image: 'https://images.pexels.com/photos/7142792/pexels-photo-7142792.jpeg'
    },
    {
      id: 'cacho-magico',
      name: 'Cacho Magico',
      description: 'Specialized nutrition and definition for curly hair',
      benefits: [
        'Enhanced curl definition',
        'Deep nutrition for curly hair',
        'Eliminates frizz while maintaining bounce'
      ],
      products: [
        'Curl Defining Shampoo',
        'Hydrating Conditioner',
        'Curl Activator Cream',
        'Definition Mask'
      ],
      image: 'https://images.pexels.com/photos/7142792/pexels-photo-7142792.jpeg'
    },
    {
      id: 'royal-bee',
      name: 'Royal Bee',
      description: 'Revolutionary straightening treatment with bee venom technology',
      benefits: [
        'Innovative bee venom formula',
        'Professional straightening results',
        'Hair strengthening properties'
      ],
      products: [
        'Purifying Shampoo (500ml)',
        'Straightening Protein (1000ml)',
        'Conditioning Treatment (2000ml)'
      ],
      image: 'https://images.pexels.com/photos/7142792/pexels-photo-7142792.jpeg'
    },
    {
      id: 'violet-platinum',
      name: 'Violet Platinum',
      description: 'Neutralizes yellow tones for perfect platinum blonde effect',
      benefits: [
        'Eliminates unwanted yellow tones',
        'Achieves platinum blonde perfection',
        'Maintains color vibrancy'
      ],
      products: [
        'Purple Shampoo',
        'Toning Conditioner',
        'Platinum Mask'
      ],
      image: 'https://images.pexels.com/photos/7142792/pexels-photo-7142792.jpeg'
    },
    {
      id: 'ends',
      name: 'Ends',
      description: 'Specialized hair regeneration that seals and repairs split ends',
      benefits: [
        'Seals split ends instantly',
        'Regenerates damaged hair tips',
        'Prevents future breakage'
      ],
      products: [
        'End Sealing Serum',
        'Repair Treatment',
        'Protective Leave-in'
      ],
      image: 'https://images.pexels.com/photos/7142792/pexels-photo-7142792.jpeg'
    },
    {
      id: 'mirtilo',
      name: 'Mirtilo',
      description: 'Daily care for greasy roots and dry tips with delightful blueberry fragrance',
      benefits: [
        'Balances oily roots and dry ends',
        'Delicious blueberry scent',
        'Daily use formula'
      ],
      products: [
        'Balancing Shampoo',
        'Dual-Action Conditioner',
        'Root Control Serum'
      ],
      image: 'https://images.pexels.com/photos/7142792/pexels-photo-7142792.jpeg'
    },
    {
      id: 'dynamic',
      name: 'Dynamic',
      description: 'Biotin-enriched formula for enhanced hair strength and vitality',
      benefits: [
        'Biotin enriched for strength',
        'Promotes hair growth',
        'Increases hair thickness'
      ],
      products: [
        'Strengthening Shampoo',
        'Biotin Conditioner',
        'Growth Serum'
      ],
      image: 'https://images.pexels.com/photos/7142792/pexels-photo-7142792.jpeg'
    }
  ];

  const toggleProduct = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-elegant-lightgray pt-16">
      {/* Header */}
      <section className="py-20 bg-elegant-black text-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Lowell <span className="text-gradient">Products</span>
            </h1>
            <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-xl text-elegant-lightgray max-w-3xl mx-auto">
              Discover our complete range of premium Brazilian hair care products from the 2024/2025 catalog. 
              Each line is designed with cutting-edge technology for professional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="space-y-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Product Header */}
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => toggleProduct(product.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gold-100 rounded-lg flex-shrink-0 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-semibold text-elegant-black">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          {product.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBuyNow(product);
                        }}
                        className="btn-primary px-6 py-2"
                      >
                        Buy Now
                      </button>
                      {expandedProduct === product.id ? (
                        <ChevronUpIcon className="w-6 h-6 text-gold-500" />
                      ) : (
                        <ChevronDownIcon className="w-6 h-6 text-gold-500" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedProduct === product.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Benefits */}
                        <div>
                          <h4 className="font-semibold text-elegant-black mb-4">Benefits</h4>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {product.benefits.map((benefit, idx) => (
                              <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Products in Line */}
                        <div>
                          <h4 className="font-semibold text-elegant-black mb-4">Products in Line</h4>
                          <ul className="space-y-2">
                            {product.products.map((item, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <a
                          href="https://api.whatsapp.com/send/?phone=447403477724&text&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex-1 text-center"
                        >
                          ✨ Request Your Ritual
                        </a>
                        <a
                          href="https://api.whatsapp.com/send/?phone=447403477724&text&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary flex-1 text-center"
                        >
                          Ask Questions
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-elegant-black">
        <div className="container-max section-padding text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-elegant-lightgray text-lg mb-8 max-w-2xl mx-auto">
              Our hair specialists are here to help you find the perfect products for your hair type and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER?.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4"
              >
                Get Personal Consultation
              </a>
              <a
                href="/#contact"
                className="btn-secondary px-8 py-4 border-white text-white hover:bg-white hover:text-elegant-black"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Inquiry Modal */}
      {showModal && (
        <ProductInquiryModal
          product={selectedProduct}
          onClose={() => {
            setShowModal(false);
            setSelectedProduct(null);
          }}
        />
      )}
    </div>
  );
};

export default ProductsPage;