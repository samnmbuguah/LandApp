export interface LandListing {
  id: string;
  title: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  price: {
    amount: number;
    currency: string;
  };
  size: {
    value: number;
    unit: string;
  };
  description: string;
  amenities: string[];
  images: string[];
  videos?: string[];
}