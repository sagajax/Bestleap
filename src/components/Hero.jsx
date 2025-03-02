import React, { useState, useEffect } from 'react';
import { Phone, Download } from 'lucide-react';

const HeroSection = () => {
  const [countdown, setCountdown] = useState('22:27:33');
  
  useEffect(() => {
    // Set the initial time (22 hours, 27 minutes, 33 seconds)
    let hours = 22;
    let minutes = 27;
    let seconds = 33;
    
    // Update the countdown every second
    const timer = setInterval(() => {
      seconds--;
      
      if (seconds < 0) {
        seconds = 59;
        minutes--;
        
        if (minutes < 0) {
          minutes = 59;
          hours--;
          
          if (hours < 0) {
            // Reset to 24 hours when countdown reaches zero
            hours = 23;
            minutes = 59;
            seconds = 59;
          }
        }
      }
      
      // Format the time as HH:MM:SS
      const formattedHours = String(hours).padStart(2, '0');
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');
      
      setCountdown(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
    }, 1000);
    
    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full bg-green-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Content Area */}
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Product Manager Fellowship
          </h1>
          <p className="text-xl mb-10">
            12 week online Product Management Course with Certification and Placement Support
          </p>
          
          {/* Program Features */}
          <div className="flex flex-col md:flex-row gap-1 mb-12  rounded-2xl overflow-hidden">
            <div className="bg-green-900/50 p-4 text-center flex-1">
              <h3 className="text-xl font-semibold">Live</h3>
              <p className="text-gray-300 text-sm">Sessions on Zoom</p>
            </div>
            <div className="bg-green-900/50 p-4 text-center flex-1">
              <h3 className="text-xl font-semibold">3 months</h3>
              <p className="text-gray-300 text-sm">Fellowship timeline</p>
            </div>
            <div className="bg-green-900/50 p-4 text-center flex-1">
              <h3 className="text-xl font-semibold">Mentorship</h3>
              <p className="text-gray-300 text-sm">With experienced PMs</p>
            </div>
            <div className="bg-green-900/50 p-4 text-center flex-1">
              <h3 className="text-xl font-semibold">Placement</h3>
              <p className="text-gray-300 text-sm">Support for 1 year</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-amber-100 text-green-950 py-3 px-6 rounded-md font-medium hover:bg-amber-200 transition-colors">
              <Phone size={20} />
              Request a callback
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-green-950 py-3 px-6 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Download Curriculum
              <Download size={20} />
            </button>
          </div>
        </div>
        
        {/* Right Pricing Card */}
        <div className="w-full lg:w-auto">
          <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden relative w-full max-w-md">
            {/* Discount Badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-green-600 text-white font-bold px-4 py-1 text-center relative">
                <span className="text-xl">35%</span>
                <span className="block text-xs">OFF</span>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-green-600"></div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-1">Cohort 36 starts on</p>
              <p className="text-2xl font-bold mb-4">Apr 5</p>
              
              <p className="text-gray-600 mb-1">Cost</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold">₹25,999</span>
                <span className="text-gray-500 line-through">₹39,999</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">EMI from ₹1,421/month available at checkout</p>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="font-bold">i</span>
                </div>
                <span>Price increases in <span className="text-red-500 font-semibold">{countdown}</span></span>
              </div>
              
              <button className="w-full bg-black text-white py-3 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-between">
                Enrol Now
                <span>→</span>
              </button>
              
              <p className="text-sm text-gray-600 mt-4 text-center">
                Discount coupon of 35% available on checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;