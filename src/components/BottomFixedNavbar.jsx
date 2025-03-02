import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const BottomFixedNavbar = () => {
  const [visible, setVisible] = useState(false);

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

    window.addEventListener('scroll', handleScroll);
    handleScroll();

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
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          {/* Course Info */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Cohort Start Date */}
            <div className="text-center">
              <div className="text-xs font-semibold text-gray-600">Starts on</div>
              <div className="text-sm font-bold">Apr 5</div>
            </div>

            {/* Divider */}
            <div className="h-6 border-l border-gray-200"></div>

            {/* Time Commitment */}
            <div className="text-center">
              <div className="text-xs font-semibold text-gray-600">Time</div>
              <div className="text-sm font-bold">12-14 hrs/week</div>
            </div>

            {/* Divider */}
            <div className="h-6 border-l border-gray-200"></div>

            {/* Cost */}
            <div className="text-center">
              <div className="text-xs font-semibold text-gray-600">Cost</div>
              <div className="flex items-baseline justify-center">
                <span className="text-sm font-bold">₹25,999</span>
                <span className="ml-1 text-gray-500 line-through text-xs">₹39,999</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-2">
            {/* Request Callback Button */}
            <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-50 transition">
              <Phone size={16} />
              <span className="hidden sm:inline ml-2 text-xs">Request a callback</span>
            </button>

            {/* Enrol Now Button */}
            <button className="flex items-center justify-center p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              <span className="text-xs">Enrol Now</span>
              <ArrowRight size={16} className="hidden sm:inline ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFixedNavbar;