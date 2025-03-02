import React from 'react';
import contactBg from '/contactbg.svg';

const ContactCard = () => {
  return (
    <div className="bg-green-950 px-4 pt-6 pb-24">

    <div className="w-full max-w-4xl mx-auto bg-green-800 rounded-lg shadow-lg p-12 relative overflow-hidden">
      {/* Main Content */}
      <div className="text-center z-10 relative">
        <h2 className="text-4xl font-bold text-white mb-3">
          Still have questions or need more information?
        </h2>
        <p className="text-white text-lg mb-10">
          Request a callback to get personalized guidance
        </p>
        
        {/* Button */}
        <div className="flex justify-center">
          <button className="flex items-center justify-center bg-yellow-100 hover:bg-yellow-200 text-green-900 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            Request a callback
          </button>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 w-full">
        <img src={contactBg} alt="Decorative pattern" className="w-full h-24 object-cover" />
      </div>
    </div>
    </div>
  );
};

export default ContactCard;