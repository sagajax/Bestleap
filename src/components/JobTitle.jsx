import React, { useState, useEffect } from 'react';
import posts from '/posts.png'


const JobTitleComponent = () => {
  const jobTitles = [
    "Product Manager",
    "Associate Product Manager",
    "Product Analyst",
    "Product Owner",
    "Technical Product Manager"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate-none');

  useEffect(() => {
    const interval = setInterval(() => {
      // First remove the current title with a fade out
      setAnimationClass('animate-slideUp');
      
      // After animation completes, change the title
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
      }, 600);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green-950 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-5xl w-full space-y-16">
        {/* Job Title Section */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-medium text-white">Your Future Job Title</h2>
          
          <div className="h-52 flex items-center justify-center overflow-hidden">
            <h1 
              key={currentTitleIndex}
              className={`text-6xl font-bold text-white ${animationClass}`}
            >
              {jobTitles[currentTitleIndex]}
            </h1>
          </div>
          
          <style jsx>{`
            .animate-slideUp {
              animation: slideUp 0.6s ease-out;
            }
            
            @keyframes slideUp {
              0% {
                transform: translateY(50px);
                opacity: 0;
              }
              100% {
                transform: translateY(0);
                opacity: 1;
              }
            }
          `}</style>
          
          <div className="w-full border-t border-white/20 mt-4 mb-12"></div>
        </div>

        {/* Salary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-800/70 rounded-lg p-8">
            <h3 className="text-xl font-medium text-center mb-2">Average PM Salary</h3>
            <p className="text-4xl font-bold text-center">14-18 Lakhs</p>
          </div>
          
          <div className="bg-green-800/70 rounded-lg p-8">
            <h3 className="text-xl font-medium text-center mb-2">Highest Salary at NextLeap</h3>
            <p className="text-4xl font-bold text-center">31 Lakhs</p>
          </div>
        </div>

        {/* Cohort Section */}
        <div className="pt-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">How Your Avg Cohort Looks Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-800/70 rounded-lg p-8 flex flex-col items-center">
              <p className="text-5xl font-bold text-white mb-2">20%</p>
              <p className="text-xl text-white">College students</p>
            </div>
            
            <div className="bg-green-800/70 rounded-lg p-8 flex flex-col items-center">
              <p className="text-5xl font-bold text-white mb-2">80%</p>
              <p className="text-xl text-white">Working professionals</p>
            </div>
            
            <div className="bg-green-800/70 rounded-lg p-8 flex flex-col items-center">
              <p className="text-5xl font-bold text-white mb-2">3 years</p>
              <p className="text-xl text-white">Median work experience</p>
            </div>
          </div>
        </div>
        
        {/* Scholarship Section */}
        <div className="bg-green-50 text-black rounded-lg p-6 my-12 ">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-black mb-3">
                Win a 15% Scholarship with our #LearninPublic challenge
              </h2>
              <p className="text-base mb-4">
                Post 10 product teardowns on LinkedIn during the fellowship to win back 15% of the fellowship fees.
              </p>
            </div>
            
            <div className="md:w-1/2 relative h-full ">
              {/* LinkedIn Posts */}
              <img
                src={posts}
                alt="LinkedIn Posts"
                className="w-full h-full object-cover rounded-lg"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTitleComponent;