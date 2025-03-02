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
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-white text-5xl font-bold text-center mb-20">Tools You Will Learn</h1>
        
        <div className="flex justify-between items-start px-8">
          {toolsList.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center">
              <div className="bg-white  rounded-md mb-4 w-20 h-20 flex items-center justify-center shadow-md">
                <img src={tool.icon} alt={`${tool.name} icon`} className="w-full h-full" />
              </div>
              <p className="text-white text-xl font-medium mt-2">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;