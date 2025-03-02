import React from 'react';
import Marquee from 'react-fast-marquee';

const SuccessStoriesMarquee = () => {
  // Success stories data with placeholder images
  const successStories = [
    { 
      name: 'Siddharth', 
      company: 'ELECTRIC', 
      image: 's1.webp',
      logo: 'l1.webp'
    },
    { 
      name: 'Vanshu Saini', 
      company: 'Paytm', 
      image: 's2.webp',
      logo: 'l2.webp'
    },
    { 
      name: 'Miyanji Farhan', 
      company: 'Google', 
      image: 's3.webp',
      logo: 'l3.webp'
    },
    { 
      name: 'Akshat Chhapolia', 
      company: 'INDmoney', 
      image: 's4.webp',
      logo: 'l4.webp'
    },
    { 
      name: 'MANISH KUMAR', 
      company: 'Airtel', 
      image: 's5.webp',
      logo: 'l5.webp' 
    },
    { 
      name: 'Tanya Shresth', 
      company: 'LogiLadder', 
      image: 's6.webp',
      logo: 'l6.webp'
    },
    { 
      name: 'Roshni Khollamkar', 
      company: 'Perfios', 
      image: 's7.webp',
      logo: 'l7.svg'
    },
    // Duplicate some entries to ensure continuous scrolling
    { 
      name: 'Siddharth', 
      company: 'ELECTRIC', 
      image: 's1.webp',
      logo: 'l1.webp'
    },
    { 
      name: 'Vanshu Saini', 
      company: 'Paytm', 
      image: 's2.webp',
      logo: 'l2.webp'
    }
  ];

  return (
    <div className="w-full bg-green-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">750+ successful transitions</h2>
        
        <div className="relative">
          {/* Left blur/fade effect */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-green-950 to-transparent z-10"></div>
          
          {/* Right blur/fade effect */}
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-green-950 to-transparent z-10"></div>
          
          {/* Marquee slider */}
          <Marquee speed={50} gradient={false}>
            {successStories.map((story, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-48 bg-white rounded-lg overflow-hidden text-black shadow-lg mx-2"
                style={{ height: '200px' }} // Adjust the height here
              >
                <div className="p-4 flex flex-col items-center">
                  {/* Circle profile image */}
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4"> {/* Adjusted size */}
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
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesMarquee;