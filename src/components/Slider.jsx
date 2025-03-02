import React, { useEffect, useRef, useState } from 'react';

const SuccessStoriesMarquee = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const scrollRef = useRef(null);
  
  // Success stories data with placeholder images
  const successStories = [
    { 
      name: 'Siddharth', 
      company: 'ELECTRIC', 
      image: '/api/placeholder/100/100',
      logo: '/api/placeholder/80/30'
    },
    { 
      name: 'Vanshu Saini', 
      company: 'Paytm', 
      image: '/api/placeholder/100/100',
      logo: '/api/placeholder/80/30'
    },
    { 
      name: 'Miyanji Farhan', 
      company: 'Google', 
      image: '/api/placeholder/100/100',
      logo: '/api/placeholder/80/30'
    },
    { 
      name: 'Akshat Chhapolia', 
      company: 'INDmoney', 
      image: '/api/placeholder/100/100',
      logo: '/api/placeholder/80/30'
    },
    { 
      name: 'MANISH KUMAR', 
      company: 'Airtel', 
      image: '/api/placeholder/100/100',
      logo: '/api/placeholder/80/30' 
    },
    { 
      name: 'Tanmay Shresth', 
      company: 'LogiLadder', 
      image: '/api/placeholder/100/100',
      logo: '/api/placeholder/80/30'
    },
    { 
      name: 'Rohan Khollamkar', 
      company: 'Perfios', 
      image: '/api/placeholder/100/100',
      logo: '/api/placeholder/80/30'
    },
    // Duplicate some entries to ensure continuous scrolling
    { 
      name: 'Siddharth', 
      company: 'ELECTRIC', 
      image: '/api/placeholder/100/100',
      logo: '/api/placeholder/80/30'
    },
    { 
      name: 'Vanshu Saini', 
      company: 'Paytm', 
      image: '/api/placeholder/100/100',
      logo: '/api/placeholder/80/30'
    }
  ];

  useEffect(() => {
    // Start animation after component mount
    setStartAnimation(true);
    
    // Auto-scroll functionality
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let scrollAmount = 0;
    const distance = 1; // pixels per frame
    
    const scroll = () => {
      scrollContainer.scrollLeft += distance;
      scrollAmount += distance;
      
      // Reset scroll position when reaching the end of duplicated items
      if (scrollAmount >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2) {
        scrollContainer.scrollLeft = 0;
        scrollAmount = 0;
      }
    };
    
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-green-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">750+ successful transitions</h2>
        
        <div className="relative">
          {/* Left blur/fade effect */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-green-950 to-transparent z-10"></div>
          
          {/* Right blur/fade effect */}
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-green-950 to-transparent z-10"></div>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden w-full"
          >
          <div className={`flex gap-4 transition-transform duration-1000 ${startAnimation ? 'translate-x-0' : 'translate-x-full'}`}>
            {successStories.map((story, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-48 bg-white rounded-lg overflow-hidden text-black shadow-lg"
              >
                <div className="p-4 flex flex-col items-center">
                  {/* Circle profile image */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Name */}
                  <h3 className="font-medium text-center mb-1">{story.name}</h3>
                  
                  {/* Company logo */}
                  <div className="h-10 flex items-center justify-center">
                    <img 
                      src={story.logo} 
                      alt={story.company} 
                      className="max-h-8 max-w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesMarquee;