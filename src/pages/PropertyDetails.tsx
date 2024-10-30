import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Ruler, Tag } from 'lucide-react';
import { listings } from '../data/listings';
import { Map } from '../components/Map';
import { ImageGallery } from '../components/ImageGallery';

export function PropertyDetails() {
  const { id } = useParams();
  const listing = listings.find((l) => l.id === id);

  if (!listing) {
    return <div>Property not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to listings</span>
        </Link>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <ImageGallery images={listing.images} />
          
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900">{listing.title}</h1>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={20} />
                <span>{listing.location.address}</span>
              </div>
            </div>

            <div className="flex gap-4 py-4 border-y border-gray-200">
              <div className="flex items-center gap-2">
                <Ruler size={20} className="text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Size</p>
                  <p className="font-semibold">{listing.size.value} {listing.size.unit}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={20} className="text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-semibold text-emerald-600">
                    {listing.price.amount.toLocaleString()} {listing.price.currency}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="text-gray-600 leading-relaxed">{listing.description}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {listing.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Location</h2>
              <Map lat={listing.location.lat} lng={listing.location.lng} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}