

export default function ProductDetails({ product  }) {
  if (!product) return null;

  return (
    <section className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="md:w-1/2">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-auto rounded-lg object-cover"
          />
          {/* You can add a small gallery below if you want */}
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <p className="text-xl font-semibold mb-4">${product.price}</p>
            <p className="text-yellow-500 mb-4">
              Rating: {product.rating} ⭐
            </p>
          </div>

          {/* Add to cart button or quantity selector here */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}