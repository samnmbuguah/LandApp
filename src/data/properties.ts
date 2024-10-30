export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  size: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  features: string[];
  images: string[];
  videoUrl?: string;
}

export const properties: Property[] = [
  {
    id: 'mai-mahiu-land',
    title: 'Prime Land in Mai Mahiu',
    location: 'Mai Mahiu, Kenya',
    price: '4,200,000 KSh',
    size: '1.75 Acres',
    coordinates: {
      lat: -1.0080277,
      lng: 36.555323
    },
    description: `This exceptional 1.75-acre property is situated just 2km off the Mai Mahiu-Narok road, offering a perfect blend of accessibility and tranquility. The land boasts stunning views of Mt. Margaret and the Kijabe escarpments, creating a picturesque setting for various development opportunities.

Currently utilized as farmland, this versatile property presents multiple potential uses, including residential development or Yellowstone mining, thanks to its proximity to an existing Yellowstone mining quarry. The property's value is enhanced by its ready access to essential utilities including water and electricity.

Located just 3km from Mai Mahiu town, this property combines the peace of a rural setting with the convenience of nearby urban amenities.`,
    features: [
      'Access to water and electricity',
      'Prime location 2km off Mai Mahiu-Narok road',
      'Stunning views of Mt. Margaret',
      'Views of Kijabe escarpments',
      'Near Yellowstone mining quarry',
      '3km from Mai Mahiu town',
      'Multiple development possibilities',
      'Fertile farmland'
    ],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
      'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2',
      'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2'
    ]
  }
];