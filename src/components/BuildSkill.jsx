import React, { useState, useRef } from 'react';
import { Monitor, FileText, ClipboardCheck, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const BuildSkillsComponent = () => {
  // Sample profiles data
  const allProfiles = [
    { id: 1, name: "Preet Shah", img: "s6.webp" },
    { id: 2, name: "Sarada Prasanna Sahoo", img: "s5.webp" },
    { id: 3, name: "Bhavya Chadha", img: "s7.webp" },
    { id: 4, name: "Basavraj S Awatiger", img: "s1.webp" },
    { id: 5, name: "Rahul Verma", img: "s4.webp" },
    { id: 6, name: "Neha Sharma", img: "s3.webp" },
    { id: 7, name: "Siddharth Patel", img: "s2.webp" },
    { id: 8, name: "Ananya Mishra", img: "s6.webp" }
  ];

  // States and refs
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  // Handle next profile
  const nextProfile = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const container = containerRef.current;
    if (container) {
      // Set transition
      container.style.transition = 'transform 0.5s ease';
      container.style.transform = 'translateX(-25%)';

      // After animation completes
      setTimeout(() => {
        container.style.transition = 'none';
        container.style.transform = 'translateX(0)';
        setCurrentIndex((prev) => (prev + 1) % allProfiles.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  // Handle previous profile
  const prevProfile = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const container = containerRef.current;
    if (container) {
      // First move container immediately to -1 position without animation
      container.style.transition = 'none';
      container.style.transform = 'translateX(-25%)';

      // Force reflow
      container.offsetHeight;

      // Then animate to 0 position
      container.style.transition = 'transform 0.5s ease';
      container.style.transform = 'translateX(0)';

      // After animation completes
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + allProfiles.length) % allProfiles.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  // Get visible profiles
  const getVisibleProfiles = () => {
    const visibleProfiles = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % allProfiles.length;
      visibleProfiles.push(allProfiles[index]);
    }
    return visibleProfiles;
  };

  return (
    <div className="bg-green-950 text-white min-h-screen flex flex-col items-center py-16 px-4">
      
      <div className="max-w-6xl w-full">
      <div className="border-t-3 border-gray-600  max-w-6xl mx-0 mt-16 mb-16"></div>
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">Build Skills The Nextleap Way</h2>

        {/* Learning Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-yellow-200 mb-4">
              <Monitor size={36} />
            </div>
            <p className="text-xl text-center">Live Sessions</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-yellow-200 mb-4">
              <FileText size={36} />
            </div>
            <p className="text-xl text-center">Weekly Projects</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-yellow-200 mb-4">
              <ClipboardCheck size={36} />
            </div>
            <p className="text-xl text-center">Mentor Feedback</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-yellow-200 mb-4">
              <Users size={36} />
            </div>
            <p className="text-xl text-center">Peer Learning</p>
          </div>
        </div>

        {/* Profile Cards Container */}
        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {getVisibleProfiles().map((profile) => (
              <div key={profile.id} className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col h-full">
                <div className="p-4 flex-1">
                  <div className="w-20 h-20 bg-blue-100 rounded-full mb-4 overflow-hidden">
                    <img
                      src={`${profile.img}`}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black">{profile.name}</h3>
                </div>
                <div className="border-t border-gray-200 flex justify-between items-center p-4 bg-gray-50">
                  <span className="text-gray-800 font-medium">View Portfolio</span>
                  <ChevronRight className="text-gray-800" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-6 gap-2">
          <button
            onClick={prevProfile}
            className="bg-white hover:bg-gray-100 p-3 rounded-lg shadow-sm transition-colors"
            disabled={isAnimating}
          >
            <ChevronLeft className="text-gray-800" size={24} />
          </button>
          <button
            onClick={nextProfile}
            className="bg-white hover:bg-gray-100 p-3 rounded-lg shadow-sm transition-colors"
            disabled={isAnimating}
          >
            <ChevronRight className="text-gray-800" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuildSkillsComponent;