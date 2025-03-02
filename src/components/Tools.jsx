import React from 'react';
import jira from '/jira.svg';
import figma from '/Figma.svg';
import whimsical from '/Whimiscal.svg';
import amplitude from '/Amplitude.svg';
import sql from '/sql.svg'; // Assuming you have this MySQL SVG

const Tools = () => {
  const toolsList = [
    { name: 'Whimsical', icon: whimsical },
    { name: 'Figma', icon: figma },
    { name: 'SQL', icon: sql },
    { name: 'Amplitude', icon: amplitude },
    { name: 'JIRA', icon: jira },
  ];

  return (
    <div className="bg-green-950 py-12">
                  <div className="border-t-3 border-gray-600  max-w-6xl mx-auto mt-16 mb-16"></div>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-20">
          Tools You Will Learn
        </h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-4 sm:px-8">
          {toolsList.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center">
              <div className="bg-white rounded-md mb-4 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-md">
                <img src={tool.icon} alt={`${tool.name} icon`} className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
              <p className="text-white text-lg sm:text-xl font-medium text-center">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t-3 border-gray-600  max-w-6xl mx-auto mt-16 mb-16"></div>
    </div>
  );
};

export default Tools;