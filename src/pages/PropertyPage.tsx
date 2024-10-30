import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Ruler, CheckCircle } from 'lucide-react';
import { properties } from '../data/properties';
import Map from '../components/Map';
import ImageGallery from '../components/ImageGallery';

const PropertyPage = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900">Property not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <ImageGallery images={property.images} />
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
            <Map 
              latitude={property.coordinates.lat} 
              longitude={property.coordinates.lng} 
            />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {property.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>{property.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler size={20} />
                <span>{property.size}</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-blue-600">
              {property.price}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-600 whitespace-pre-line">
              {property.description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <CheckCircle size={20} className="text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Interested in this property?
            </h2>
            <p className="text-gray-600 mb-4">
              Contact us to schedule a viewing or get more information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+254700000000"
                className="inline-flex justify-center items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Call Now
              </a>
              <a
                href="mailto:info@landscout.com?subject=Inquiry about Mai Mahiu Land"
                className="inline-flex justify-center items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;