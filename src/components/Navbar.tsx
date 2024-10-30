import React from 'react';
import { Link } from 'react-router-dom';
import { Map } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-blue-600">
            <Map size={24} />
            <span className="font-bold text-xl">LandScout</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <a href="tel:+254700000000" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;