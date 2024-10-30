import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-video cursor-pointer overflow-hidden rounded-lg"
              onClick={() => {
                setCurrentIndex(index);
                setShowModal(true);
              }}
            >
              <img
                src={image}
                alt={`Property ${index + 1}`}
                className="h-full w-full object-cover transition-transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 text-white"
          >
            <X size={24} />
          </button>
          <button
            onClick={previousImage}
            className="absolute left-4 text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <img
            src={images[currentIndex]}
            alt={`Property ${currentIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}