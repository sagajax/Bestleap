import React from 'react';

const Certificate = () => {
  return (
    <div className="w-full bg-green-950 flex flex-col md:flex-row items-center justify-between p-6 md:gap-0">
      {/* Left side - Certificate Image */}
      <div className="w-full md:w-2/5 mb-8 md:mb-0 md:pr-2">
        <img src="/cert.webp" alt="Certificate of Completion" className="w-full max-w-md mx-auto" />
      </div>
      
      {/* Right side - Text Content */}
      <div className="w-full md:w-3/5 text-white px-2 md:pl-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Verifiable Certificate of Accomplishment
        </h1>
        
        <p className="text-lg md:text-xl mb-6">
          Upon completing the Product Manager Fellowship course, you'll receive a
          verifiable Certificate of Accomplishment that you can link to from your
          Résumé and LinkedIn profile.
        </p>
      </div>
    </div>
  );
};

export default Certificate;