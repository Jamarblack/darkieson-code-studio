
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="responsive-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center space-x-2">
            <img 
              src="/lovable-uploads/f1a553c3-7360-431b-a71e-4b2096cf865a.png" 
              alt="Darkieson Logo" 
              className="h-8 w-8 rounded-full" 
            />
            <span className="font-medium">Darkieson Code Studio</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {currentYear} Darkieson Code Studio. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <a href="#hero" className="text-gray-400 hover:text-white transition-colors">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
