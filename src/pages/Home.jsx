import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import TrendingProducts from "../components/TrendingProducts";
import NewCollections from "../components/NewCollections";
import BestSellers from "../components/BestSellers";
import ProductPage from "../components/ProductPage"; // <-- new detailed view
import useProducts from "../hook/useProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import LatestBlogPosts from "../components/LatestBlogPosts";
export default function Home() {
  const { products, loading, error } = useProducts();

  const [selectedProduct, setSelectedProduct] = useState(null);

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }
  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  const trending = products.slice(0, 4);
  const newCollections = products.slice(4, 12);
  const bestSellers = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <main>
      <HeroSection />
      <TrendingProducts products={trending} onSelect={setSelectedProduct} />
      <NewCollections products={newCollections} onSelect={setSelectedProduct} />
      <BestSellers products={bestSellers} onSelect={setSelectedProduct} />


      {/* Why Choose Us section */}


  <WhyChooseUs />
      <LatestBlogPosts />
      {/* Show detailed product page when a product is selected */}
      {selectedProduct && <ProductPage product={selectedProduct} />}
    </main>
  );
}