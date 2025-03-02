import React from 'react';
import { Calendar } from 'lucide-react';

const LiveClassSchedule = () => {
  return (
    <div className="w-full bg-green-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Live Class Schedule</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Saturday Card */}
          <div className="bg-green-800 rounded-lg overflow-hidden">
            {/* Top Section */}
            <div className="p-6 pb-8 bg-green-700/90">
              <div className="bg-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-green-950" />
              </div>
              <h3 className="text-2xl font-bold">Every Saturday</h3>
            </div>
            
            {/* Bottom Section */}
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">2 Live Classes</h4>
              <p className="text-gray-300">
                10:30 AM - 12:30 PM &amp;
              </p>
              <p className="text-gray-300">
                2:00 PM - 4:00 PM IST
              </p>
            </div>
          </div>
          
          {/* Sunday Card */}
          <div className="bg-green-800 rounded-lg overflow-hidden">
            {/* Top Section */}
            <div className="p-6 pb-8 bg-green-700/90">
              <div className="bg-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-green-950" />
              </div>
              <h3 className="text-2xl font-bold">Every Sunday</h3>
            </div>
            
            {/* Bottom Section */}
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Mentor Session & Case Hours</h4>
              <p className="text-gray-300">
                Mentor Session (10:30 AM - 12:30 PM IST)
              </p>
              <p className="text-gray-300">
                Case Hours (2:00 PM - 4:00 PM IST)
              </p>
            </div>
          </div>
          
          {/* Wednesday Card */}
          <div className="bg-green-800 rounded-lg overflow-hidden">
            {/* Top Section */}
            <div className="p-6 pb-8 bg-green-700/90">
              <div className="bg-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-green-950" />
              </div>
              <h3 className="text-2xl font-bold">Every Wednesday</h3>
            </div>
            
            {/* Bottom Section */}
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Product Challenge</h4>
              <p className="text-gray-200">
                08:00 PM - 10:00 PM IST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClassSchedule;