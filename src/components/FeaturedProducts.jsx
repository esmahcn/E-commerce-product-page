import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedProducts({ products }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-4 font-semibold text-lg">{product.title}</h3>
            <p className="text-orange-500 font-bold">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;