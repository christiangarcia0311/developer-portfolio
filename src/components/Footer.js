import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        {/* Copyright and Year */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Christian. All Rights Reserved.
        </p>
        
        {/* Footer Links (optional) */}
        <div className="mt-6">
          <a href="#privacy" className="text-sm text-gray-400 hover:text-white mx-4">Privacy Policy</a>
          <a href="#terms" className="text-sm text-gray-400 hover:text-white mx-4">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
