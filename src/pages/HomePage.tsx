import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Ruler } from 'lucide-react';
import { properties } from '../data/properties';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Discover Your Perfect Plot
        </h1>
        <p className="text-xl text-gray-600">
          Premium land opportunities in prime locations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <Link
            key={property.id}
            to={`/property/${property.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full font-semibold text-blue-600">
                {property.price}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {property.title}
              </h3>
              
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler size={18} />
                  <span>{property.size}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;