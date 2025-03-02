import React from 'react';
import { Phone, User2, FileText, Clipboard } from 'lucide-react';

const PlacementSupport = () => {
  return (
    <div className="bg-green-950 text-white p-4 min-h-screen">
      {/* Callback Card */}
      <div className="bg-green-900/50 rounded-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mx-auto max-w-7xl mb-20">
        <div className="flex items-center gap-4">
          <div className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center overflow-hidden">
            <img 
              src="/a.webp" 
              alt="Support agent" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Have more questions or need more information?</h3>
            <p className="text-gray-300">Request a callback to get personalized guidance</p>
          </div>
        </div>
        <div>
          <button className="bg-yellow-200 hover:bg-yellow-300 text-black font-medium py-3 px-6 rounded-lg flex items-center gap-2">
            <Phone size={20} />
            Request a callback
          </button>
        </div>
      </div>
      <div className="border-t-2 border-gray-600 max-w-6xl mx-auto mt-16 mb-16"></div>
      {/* Main Heading */}
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold mb-4">1 Year Placement Support</h1>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Clear the cut-off marks in your graduation project to get access to jobs at our partner companies
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
        {/* Mock Interviews */}
        <div className="flex flex-col items-center text-center">
          <div className="text-yellow-200 mb-4">
            <User2 size={48} />
          </div>
          <h2 className="text-2xl font-semibold">Mock Interviews</h2>
        </div>

        {/* Resume Reviews */}
        <div className="flex flex-col items-center text-center">
          <div className="text-yellow-200 mb-4">
            <FileText size={48} />
          </div>
          <h2 className="text-2xl font-semibold">Resume Reviews</h2>
        </div>

        {/* Interview with Hiring Partners */}
        <div className="flex flex-col items-center text-center">
          <div className="text-yellow-200 mb-4">
            <Clipboard size={48} />
          </div>
          <h2 className="text-2xl font-semibold">Interview with Hiring Partners</h2>
        </div>
      </div>

      {/* Divider Lines */}
      <div className="border-t-2 border-gray-600 max-w-6xl mx-auto mt-16"></div>

      
    </div>
  );
};

export default PlacementSupport;