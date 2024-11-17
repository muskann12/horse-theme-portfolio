'use client'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-transparent p-6 mt-10 text-center text-gray-200">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Muskan. All Rights Reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
