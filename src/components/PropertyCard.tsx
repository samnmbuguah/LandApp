import React from 'react';
import { MapPin, Ruler, Tag } from 'lucide-react';
import { LandListing } from '../types';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  listing: LandListing;
}

export function PropertyCard({ listing }: PropertyCardProps) {
  return (
    <Link to={`/property/${listing.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <div className="relative h-48">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h3 className="text-white text-xl font-semibold">{listing.title}</h3>
          </div>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={18} />
            <span>{listing.location.address}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-600">
              <Ruler size={18} />
              <span>{listing.size.value} {listing.size.unit}</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-600 font-semibold">
              <Tag size={18} />
              <span>{listing.price.amount.toLocaleString()} {listing.price.currency}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}