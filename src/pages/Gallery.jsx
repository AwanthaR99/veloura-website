import React, { useState } from 'react';

// 1. Import the new library's components and CSS
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// You can also add plugins for extra features
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


// Import your gallery images (you can add more)
import image1 from '../assets/images/gallery/image1.jpg';
import image2 from '../assets/images/gallery/image2.jpg';
import image3 from '../assets/images/gallery/image3.jpg';
import image4 from '../assets/images/gallery/image4.jpg';
import image5 from '../assets/images/gallery/image5.jpg';
import image6 from '../assets/images/gallery/image6.jpg';

// The data structure is a simple array of objects
const photos = [
  { src: image1, title: "The Hearth's Embrace" },
  { src: image2, title: "Elixir of the Night" },
  { src: image3, title: "An Artisan's Touch" },
  { src: image4, title: "Garden Freshness" },
  { src: image5, title: "Veloura's Ambiance" },
  { src: image6, title: "A Magical Corner" },
];

function Gallery() {
  // 2. State to manage the lightbox (open/closed and current image)
  const [index, setIndex] = useState(-1);

  return (
    <div className="bg-black text-white pt-32 pb-20 px-4 md:px-10">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-serif mb-4 text-yellow-400">A Glimpse of Magic</h1>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto">Explore the world of Veloura, where every corner holds a story and every dish is a work of art.</p>
        
        {/* 3. The gallery grid. We map over the photos to display them. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, photoIndex) => (
            <div 
              key={photo.src} 
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1 cursor-pointer"
              onClick={() => setIndex(photoIndex)}
            >
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-center justify-center p-4">
                <h3 className="text-white text-2xl font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. The Lightbox component itself. It opens when 'index' is not -1 */}
      <Lightbox
        plugins={[Captions, Thumbnails]}
        captions={{ showToggle: true, descriptionTextAlign: 'end' }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos}
      />
    </div>
  );
}

export default Gallery;