const ProductItem = ({ product }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow hover:shadow-xl hover:scale-[1.02] transition bg-white">
      <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
        {product.onSale && (
          <span className="absolute top-2 left-2 bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded">
            SALE
          </span>
        )}
        <img
          src={product.thumbnail || product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="flex justify-between items-start p-4">
        <div className="text-left">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600">${product.price}</p>
        </div>

        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#f97316"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="text-sm text-gray-700 font-medium">
            {product.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;