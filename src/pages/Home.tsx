import React from 'react';
import { Compass } from 'lucide-react';
import { listings } from '../data/listings';
import { PropertyCard } from '../components/PropertyCard';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Compass className="h-8 w-8 text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-900">Land Listings</h1>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <PropertyCard key={listing.id} listing={listing} />
          ))}
        </div>
      </main>
    </div>
  );
}