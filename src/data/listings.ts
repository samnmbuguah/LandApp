import { LandListing } from '../types';

export const listings: LandListing[] = [
  {
    id: '1',
    title: 'Prime Land in Mai Mahiu',
    location: {
      lat: -1.0080277,
      lng: 36.555323,
      address: 'Mai Mahiu, Kenya (2km off Mai Mahiu-Narok Road)',
    },
    price: {
      amount: 4200000,
      currency: 'KSH',
    },
    size: {
      value: 1.75,
      unit: 'acres',
    },
    description: 'Beautiful piece of land with stunning views of Mt. Margaret and Kijabe escarpments. Currently used as farmland with potential for residential development or yellow stone mining. Located near a Yellowstone mining quarry with excellent access to water and electricity. Just 3km from Mai Mahiu town.',
    amenities: [
      'Water access',
      'Electricity access',
      'Road access',
      'Near mining quarry',
      'Mountain views',
      'Farm-ready land',
    ],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200',
      'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=crop&w=1200',
      'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200',
    ],
  },
];