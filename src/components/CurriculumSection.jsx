import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Download } from 'lucide-react';

const CurriculumSection = () => {
  const [showFullCurriculum, setShowFullCurriculum] = useState(false);
  
  // Curriculum data
  const weeks = [
    {
      number: 1,
      title: "Mapping Business Outcomes to Product Outcomes",
      topics: [
        "Systems thinking",
        "KPI trees",
        "Design thinking"
      ]
    },
    {
      number: 2,
      title: "Product Discovery & User Research",
      topics: [
        "Impact mapping",
        "User research",
        "Customer journey maps"
      ]
    },
    {
      number: 3,
      title: "Problem Framing, Ideation & Validation",
      topics: [
        "Problem framing canvas",
        "Mindmapping",
        "Hypothesis building"
      ]
    }
  ];
  
  // Additional weeks for full curriculum (only shown when expanded)
  const additionalWeeks = [
    {
      number: 4,
      title: "Product Metrics & Prioritization",
      topics: [
        "North Star Framework",
        "ICE scoring model",
        "Opportunity sizing"
      ]
    },
    {
      number: 5,
      title: "Prototyping & User Testing",
      topics: [
        "Wireframing basics",
        "Usability testing",
        "A/B testing methodology"
      ]
    },
    {
      number: 6,
      title: "Product Development & Execution",
      topics: [
        "Agile development",
        "Sprint planning",
        "Stakeholder management"
      ]
    }
  ];
  
  // Combine weeks based on whether to show full curriculum
  const displayedWeeks = showFullCurriculum 
    ? [...weeks, ...additionalWeeks]
    : weeks;
    
  return (
    <div className="w-full bg-green-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">What Will You Learn</h2>
        
        {/* Grid of week cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayedWeeks.map((week) => (
            <div 
              key={week.number} 
              className="bg-gradient-to-b from-white to-gray-200 text-black rounded-lg shadow-lg overflow-hidden relative"
            >
              <div className="p-6">
                <div className="text-gray-600 mb-2">Week {week.number}</div>
                <h3 className="text-xl font-bold mb-4">{week.title}</h3>
                
                <ul className="space-y-2 mb-6">
                  {week.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-700 mr-2">•</span>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Bottom blur gradient effect */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-900/90 via-green-900/70 to-transparent"></div>
              
              {/* Case Studies text (placed at bottom of card) */}
              {week.number === 2 && !showFullCurriculum && (
                <div className="absolute bottom-12 left-0 right-0 flex justify-center z-10">
                  <button 
                    onClick={() => setShowFullCurriculum(true)}
                    className="text-white font-medium flex items-center gap-1"
                  >
                    See Full Curriculum
                    <ChevronDown size={18} className="text-white" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Toggle Button - Only show when full curriculum is displayed */}
        {showFullCurriculum && (
          <div className="flex justify-center mt-6 mb-12">
            <button 
              onClick={() => setShowFullCurriculum(false)}
              className="flex items-center gap-2 bg-white text-green-950 font-medium py-2 px-4 rounded shadow-sm hover:bg-gray-100 transition-colors"
            >
              Hide Full Curriculum
              <ChevronUp size={18} />
            </button>
          </div>
        )}
        
        {/* Download Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="flex items-center gap-2 border-2 border-white text-white font-medium py-3 px-6 rounded hover:bg-white hover:text-green-950 transition-colors"
          >
            Download detailed curriculum
            <Download size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;