import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const BottomFixedNavbar = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Get reference to the HeroSection component
      const heroSection = document.querySelector('#hero-section');
      
      if (heroSection) {
        // Get the bottom position of the hero section
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        
        // Show the navbar when the hero section moves above the viewport
        if (heroBottom <= 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      } else {
        // Fallback if we can't find the hero section - show after scrolling 400px
        if (window.scrollY > 400) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initialize visibility
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-white shadow-t-md z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ 
        boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
        transform: visible ? 'translateY(0)' : 'translateY(100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
          {/* Course info */}
          <div className="text-center md:text-left">
            <div className="text-sm md:text-base font-semibold text-gray-600">Cohort 36 starts on</div>
            <div className="text-lg md:text-xl font-bold">Apr 5</div>
          </div>
          
          <div className="hidden md:block h-12 border-l border-gray-200"></div>
          
          {/* Time commitment */}
          <div className="text-center md:text-left">
            <div className="text-sm md:text-base font-semibold text-gray-600">Time Commitment</div>
            <div className="text-lg md:text-xl font-bold">12-14 hours / week</div>
          </div>
          
          <div className="hidden md:block h-12 border-l border-gray-200"></div>
          
          {/* Cost */}
          <div className="text-center md:text-left">
            <div className="text-sm md:text-base font-semibold text-gray-600">Cost</div>
            <div className="flex items-baseline justify-center md:justify-start">
              <span className="text-lg md:text-xl font-bold">₹25,999</span>
              <span className="ml-2 text-gray-500 line-through text-sm">₹39,999</span>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-50 transition text-sm md:text-base">
            <Phone size={16} className="hidden md:inline" />
            <span>Request a callback</span>
          </button>
          
          <button className="flex items-center space-x-2 bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition text-sm md:text-base">
            <span>Enrol Now</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomFixedNavbar;