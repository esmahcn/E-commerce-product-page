import { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const productImages = [
  {
    big: '/images/image-product-1.jpg',
    thumb: '/images/image-product-1-thumbnail.jpg',
  },
  {
    big: '/images/image-product-2.jpg',
    thumb: '/images/image-product-2-thumbnail.jpg',
  },
  {
    big: '/images/image-product-3.jpg',
    thumb: '/images/image-product-3-thumbnail.jpg',
  },
  {
    big: '/images/image-product-4.jpg',
    thumb: '/images/image-product-4-thumbnail.jpg',
  },
];

function App() {
  const [mainImage, setMainImage] = useState(productImages[0].big);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);  // <-- New state for cart item count

  const handleDecrease = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + quantity);
    setQuantity(1); // Reset quantity to 1 after adding to cart (optional)
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <img src="/images/logo.svg" alt="Sneakers Logo" className="h-6" />
            <ul className="hidden md:flex space-x-8 text-sm text-gray-500">
              <li className="hover:text-black cursor-pointer">Collections</li>
              <li className="hover:text-black cursor-pointer">Men</li>
              <li className="hover:text-black cursor-pointer">Women</li>
              <li className="hover:text-black cursor-pointer">About</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="relative flex items-center space-x-6">
            <img
              src="/images/icon-cart.svg"
              alt="Cart"
              className="w-5 h-5 cursor-pointer hover:opacity-75"
            />
            {/* Cart count badge */}
            {cartCount > 0 && (
              <span className="absolute top-0 right-8 -mt-1 -mr-1 bg-orange-500 text-white text-xs font-bold rounded-full px-2">
                {cartCount}
              </span>
            )}
            <img
              src="/images/image-avatar.png"
              alt="Avatar"
              className="w-10 h-10 rounded-full border-2 border-transparent hover:border-orange-500 cursor-pointer"
            />
          </div>
        </div>
      </nav>

      {/* Main Product Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Gallery */}
        <div>
          <PhotoProvider>
            <PhotoView src={mainImage}>
              <img src={mainImage} alt="Main Product" className="w-full rounded-xl mb-4 cursor-pointer" />
            </PhotoView>
            <div className="flex justify-between gap-1">
              {productImages.map((img, index) => (
                <img
                  key={index}
                  src={img.thumb}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img.big)}
                  className={`w-20 h-20 rounded-xl cursor-pointer border-2 hover:border-orange-500 hover:opacity-100 opacity-60 ${
                    mainImage === img.big ? 'border-orange-500 opacity-100' : ''
                  }`}
                />
              ))}
            </div>
          </PhotoProvider>
        </div>

        {/* Product Info */}
        <div>
          <p className="uppercase text-black-500 font-bold text-sm tracking-widest mb-3">Sneaker Company</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Fall Limited Edition Sneakers</h1>
          <p className="text-gray-600 text-base mb-6 leading-relaxed">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">$125.00</span>
              <span className="bg-orange-100 text-orange-500 font-bold text-sm px-2 py-1 rounded-lg">50%</span>
            </div>
            <p className="text-gray-400 line-through mt-1">$250.00</p>
          </div>

          {/* Quantity + Button */}
          <div className="flex flex-col sm:flex-row items-stretch gap-4 mt-4">
            {/* Quantity control */}
            <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 sm:w-32">
              <button onClick={handleDecrease}>
                <img src="/images/icon-minus.svg" alt="minus" className="h-3 w-3" />
              </button>
              <span className="font-bold">{quantity}</span>
              <button onClick={handleIncrease}>
                <img src="/images/icon-plus.svg" alt="plus" className="h-3 w-3" />
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition text-sm flex items-center justify-center gap-2 shadow"
            >
              <img src="/images/icon-cart.svg" className="h-5 w-5" alt="cart" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;