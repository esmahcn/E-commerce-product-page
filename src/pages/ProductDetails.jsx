import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../hook/useproductsDetails";
import ProductInfo from "../components/Products/ProductInfo";
import ProductGallery from "../components/Products/ProductGallery";
import AddToCartButton from "../components/AddToCartButton";

export default function ProductDetails() {
  const { id } = useParams();
  const { product, loading, error } = useProductDetails(id);

  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setMainImage(product.thumbnail || product.images?.[0]);
    }
  }, [product]);

  const handleIncrease = () => {
    setQuantity((q) => q + 1);
  };

  const handleDecrease = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  const handleAddToCart = (qty) => {
    // هنا تضيف منطق الإضافة إلى السلة
    alert(`Added ${qty} item(s) to cart!`);
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Product Gallery */}
      <ProductGallery
        images={
          product.images
            ? product.images.map((img) => ({ thumb: img, big: img }))
            : []
        }
        mainImage={mainImage}
        setMainImage={setMainImage}
      />

      {/* Product Info and controls */}
      <div>
        <ProductInfo
          title={product.title}
          price={product.price}
          brand={product.brand}
          stock={product.stock}
          discountPercentage={product.discountPercentage}
          mainImage={mainImage}
          description={product.description}
        />

        {/* Quantity and Add to Cart */}
        <div className="flex items-center justify-between gap-4 mt-6">
          {/* Quantity controls on left */}
          <div className="flex items-center space-x-4 bg-gray-100 rounded-md px-4 py-2 w-max">
            <button
              onClick={handleDecrease}
              className="text-2xl font-bold text-gray-700 hover:text-gray-900"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="text-2xl font-bold text-gray-700 hover:text-gray-900"
            >
              +
            </button>
          </div>

          {/* Add to Cart button on right */}
          <AddToCartButton onAddToCart={() => handleAddToCart(quantity)} />
        </div>
      </div>
    </div>
  );
}