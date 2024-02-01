import React, { useState } from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import pictures from './picturesData'; 

function Portfolio() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <div className="bg-gradient-to-b from-pink to-white p-8 min-h-screen">
      <h2 className="my-12 text-3xl font-bold tracking-wide custom-font text-gold sm:text-4xlt">Portfolio</h2>
      <div className="bg-tramsparent py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {pictures.map((picture, index) => (
              <li key={picture.name} onClick={() => handleImageClick(index)}>
                <img className="portfolio-item aspect-[3/2] w-full h-48 rounded-md object-cover" src={picture.imageUrl} alt="" />
                <p className="text-sm text-start ml-2 leading-7 text-brown">{picture.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isGalleryOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className=" absolute top-24 right-24 shadow-lg z-50">
            <button onClick={handleCloseGallery} className="button text-white bg-brown shadow-md rounded-md hover:text-gold px-1.5 py-1.5 text-sm">
        
            Close gallery X
            </button>
          </div>
          <div className="gallery-container">
            <Gallery
              items={pictures.map((picture) => ({
                original: picture.imageUrl,
                description: picture.title,
              }))}
              startIndex={selectedImageIndex}
              showBullets
              onClose={handleCloseGallery}
              isRTL={false}
              lazyLoad={true}
              slideDuration={400}
              slideInterval={2000}
              thumbnailPosition="bottom"
              showPlayButton={false}
              renderItem={({ original }) => (
                <img src={original} className="gallery-image" alt="" />
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
