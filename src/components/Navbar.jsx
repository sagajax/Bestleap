import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed w-full bg-green-950 text-white py-4 px-6 z-1000">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="flex items-center">
            nextLeap
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center text-white hover:text-green-300 focus:outline-none">
              Courses
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          
          <a href="/reviews" className="text-white hover:text-green-300">
            NextLeap Reviews
          </a>
          
          <a href="/hire" className="text-white hover:text-green-300">
            Hire From Us
          </a>
          
          <a href="/blog" className="text-white hover:text-green-300">
            Blog
          </a>
        </div>
        
        {/* Login Button */}
        <div className="hidden md:block">
          <a href="/login" className="text-white hover:text-green-300">
            Login
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-green-300 focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-green-900 rounded-md p-4">
          <div className="flex flex-col space-y-4">
            <div>
              <button className="flex items-center text-white hover:text-green-300 focus:outline-none">
                Courses
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            
            <a href="/reviews" className="text-white hover:text-green-300">
              NextLeap Reviews
            </a>
            
            <a href="/hire" className="text-white hover:text-green-300">
              Hire From Us
            </a>
            
            <a href="/blog" className="text-white hover:text-green-300">
              Blog
            </a>
            
            <a href="/login" className="text-white hover:text-green-300">
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;