import React, { useState } from "react";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import QuantityControl from "./components/QuantityControl";
import AddToCartButton from "./components/AddToCartButton";
import Navbar from "./UI/Navbar";

const productImages = [
  { big: '/images/image-product-1.jpg', thumb: '/images/image-product-1-thumbnail.jpg' },
  { big: '/images/image-product-2.jpg', thumb: '/images/image-product-2-thumbnail.jpg' },
  { big: '/images/image-product-3.jpg', thumb: '/images/image-product-3-thumbnail.jpg' },
  { big: '/images/image-product-4.jpg', thumb: '/images/image-product-4-thumbnail.jpg' },
];

function App() {
  const [mainImage, setMainImage] = useState(productImages[0].big);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  const handleDecrease = () => setQuantity(q => Math.max(1, q - 1));
  const handleIncrease = () => setQuantity(q => q + 1);

  const handleAddToCart = () => {
    setCartCount(c => c + quantity);
    setQuantity(1);
  };

  return (
    <>
      <Navbar cartCount={cartCount} onCartClick={() => console.log("Cart clicked")} />

      <main className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: Product Gallery */}
        <ProductGallery images={productImages} mainImage={mainImage} setMainImage={setMainImage} />

        {/* Right: Product Info + Controls */}
        <div>
          <ProductInfo mainImage={mainImage} />
          <div className="flex flex-col sm:flex-row items-stretch gap-4 mt-4">
            <QuantityControl quantity={quantity} onDecrease={handleDecrease} onIncrease={handleIncrease} />
            <AddToCartButton onAddToCart={handleAddToCart} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;