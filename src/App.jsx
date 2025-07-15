function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center text-2xl">
            <img src="/images/logo.svg" alt="Sneakers Logo" className="h-8 w-auto" />
          </div>

          <ul className="hidden md:flex space-x-10 text-gray-700 font-semibold mx-auto">
            <li className="hover:text-orange-500 cursor-pointer">Collection</li>
            <li className="hover:text-orange-500 cursor-pointer">Men</li>
            <li className="hover:text-orange-500 cursor-pointer">Woman</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
            <li className="hover:text-orange-500 cursor-pointer">About Us</li>
          </ul>

          <div className="flex items-center space-x-6">
            <img
              src="/images/icon-cart.svg"
              alt="Cart"
              className="h-6 w-6 cursor-pointer hover:opacity-75"
            />
            <img
              src="/images/image-avatar.png"
              alt="Avatar"
              className="h-8 w-8 rounded-full cursor-pointer hover:opacity-75"
            />
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <div className="max-w-4xl mx-auto mt-10 p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Gallery */}
          <div className="flex-1">
            <img
              src="/images/image-product-1.jpg"
              alt="Main product"
              className="w-full rounded-lg cursor-pointer"
            />
            <div className="flex gap-4 mt-4">
              <img
                src="/images/image-product-1.jpg"
                alt="Thumbnail 1"
                className="w-20 h-20 rounded-lg border-2 border-orange-500"
              />
              <img
                src="/images/image-product-2.jpg"
                alt="Thumbnail 2"
                className="w-20 h-20 rounded-lg border-2 border-transparent opacity-60"
              />
              <img
                src="/images/image-product-3.jpg"
                alt="Thumbnail 3"
                className="w-20 h-20 rounded-lg border-2 border-transparent opacity-60"
              />
              <img
                src="/images/image-product-4.jpg"
                alt="Thumbnail 4"
                className="w-20 h-20 rounded-lg border-2 border-transparent opacity-60"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 flex flex-col justify-center">
            <h6 className="text-xl text-gray-900 mb-2">SNEAKER COMPANY</h6>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Fall Limited Edition Sneakers</h2>
            <p className="text-gray-600 mb-4">
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>
            <div className="mb-4">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold">$125.00</span>
                <span className="text-orange-500 bg-orange-100 text-sm font-bold px-2 py-1 rounded">50%</span>
              </div>
              <span className="line-through text-gray-400">$250.00</span>
            </div>

            {/* Quantity selector (static) */}
            <div className="flex items-center justify-between bg-gray-100 rounded-md px-4 py-2 w-full md:w-32 mb-4 select-none">
              <img src="/images/icon-minus.svg" alt="Minus" className="h-5 w-5 opacity-50 cursor-not-allowed" />
              <span className="font-semibold">1</span>
              <img src="/images/icon-plus.svg" alt="Plus" className="h-5 w-5 opacity-50 cursor-not-allowed" />
            </div>

            {/* Add to Cart button (no functionality) */}
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition flex items-center justify-center gap-2">
              <img src="/images/icon-cart.svg" className="h-5 w-5" alt="Cart Icon" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;