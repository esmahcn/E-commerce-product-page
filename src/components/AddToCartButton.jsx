import React from 'react';

function AddToCartButton({ onAddToCart }) {
  return (
    <button
      onClick={onAddToCart}
      className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition text-sm flex items-center justify-center gap-2 shadow"
    >
      <img src="/images/icon-cart.svg" className="h-5 w-5" alt="cart" />
      Add to Cart
    </button>
  );
}

export default AddToCartButton;