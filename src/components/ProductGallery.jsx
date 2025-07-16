import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

function ProductGallery({ images, mainImage, setMainImage }) {
  return (
    <div>
      {/* Only wrap the main image with PhotoProvider/PhotoView */}
      <PhotoProvider>
        <PhotoView src={mainImage}>
          <img
            src={mainImage}
            alt="Main Product"
            className="w-full rounded-xl mb-4 cursor-pointer"
          />
        </PhotoView>
      </PhotoProvider>

      {/* Thumbnails */}
      <div className="flex gap-4">
        {images.map(({ thumb, big }, i) => (
          <img
            key={i}
            src={thumb}
            alt={`Thumbnail ${i + 1}`}
            onClick={() => setMainImage(big)}
            className={`w-20 h-20 rounded-lg cursor-pointer border-2 ${
              mainImage === big ? "border-orange-500" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;