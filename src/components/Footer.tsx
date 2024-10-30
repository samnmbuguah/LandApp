import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LandScout</h3>
            <p className="text-gray-400">
              Your trusted partner in finding the perfect piece of land.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:+254700000000" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Phone size={18} />
                <span>+254 700 000 000</span>
              </a>
              <a href="mailto:info@landscout.com" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Mail size={18} />
                <span>info@landscout.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <p className="text-gray-400">
              Monday - Friday: 8:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 2:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LandScout. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;