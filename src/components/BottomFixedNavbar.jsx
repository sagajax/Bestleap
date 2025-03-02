import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const BottomFixedNavbar = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#hero-section');
      
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        
        if (heroBottom <= 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      } else {
        if (window.scrollY > 400) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
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
      {isMobile ? (
        <div className="flex justify-between items-center p-4">
          <div className="flex flex-col">
            <div className="text-sm font-semibold text-gray-600">Cohort 36 starts on</div>
            <div className="text-lg font-bold">Apr 5</div>
          </div>
          <button className="flex items-center space-x-2 bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition text-sm">
            <span>Enrol Now</span>
            <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <div className="text-center md:text-left">
              <div className="text-sm md:text-base font-semibold text-gray-600">Cohort 36 starts on</div>
              <div className="text-lg md:text-xl font-bold">Apr 5</div>
            </div>
            
            <div className="hidden md:block h-12 border-l border-gray-200"></div>
            
            <div className="text-center md:text-left">
              <div className="text-sm md:text-base font-semibold text-gray-600">Time Commitment</div>
              <div className="text-lg md:text-xl font-bold">12-14 hours / week</div>
            </div>
            
            <div className="hidden md:block h-12 border-l border-gray-200"></div>
            
            <div className="text-center md:text-left">
              <div className="text-sm md:text-base font-semibold text-gray-600">Cost</div>
              <div className="flex items-baseline justify-center md:justify-start">
                <span className="text-lg md:text-xl font-bold">₹25,999</span>
                <span className="ml-2 text-gray-500 line-through text-sm">₹39,999</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition text-sm md:text-base">
              <span>Enrol Now</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomFixedNavbar;