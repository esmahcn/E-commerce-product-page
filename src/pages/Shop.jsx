import React, { useState, useEffect, useMemo } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { TiThLargeOutline } from "react-icons/ti";
import { HiOutlineChevronRight } from "react-icons/hi";

const allowedCategories = ["mens-shoes", "womens-shoes"];
const brands = ["Apple", "Samsung", "Huawei", "Dell"];

const categorizeProduct = (product) => {
  const cat = product.category.toLowerCase();
  const title = product.title.toLowerCase();

  // Only consider shoes with men or women keyword
  const isShoe =
    cat.includes("shoe") ||
    title.includes("shoe") ||
    title.includes("sneaker") ||
    title.includes("boot") ||
    title.includes("trainer");

  if (!isShoe) return "other";

  if ((cat.includes("men") || title.includes("men"))) return "mens-shoes";
  if ((cat.includes("women") || title.includes("women"))) return "womens-shoes";

  return "other";
};

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: "All", brand: "" });
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type] === value ? (type === "category" ? "All" : "") : value,
    }));
    setCurrentPage(1);
  };

  useEffect(() => {
    Promise.all([
      fetch("https://dummyjson.com/products/category/mens-shoes").then((res) =>
        res.json()
      ),
      fetch("https://dummyjson.com/products/category/womens-shoes").then(
        (res) => res.json()
      ),
    ])
      .then(([mensShoesData, womensShoesData]) => {
        const combinedProducts = [...mensShoesData.products, ...womensShoesData.products]
          .map((p) => ({
            ...p,
            category: categorizeProduct(p),
            onSale: Math.random() > 0.7,
          }))
          .filter((p) => allowedCategories.includes(p.category));

        setProducts(combinedProducts);
        console.log("Products after categorization:", combinedProducts);
        console.log("Categories found:", [...new Set(combinedProducts.map(p => p.category))]);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((p) => {
      if (filters.category !== "All" && p.category !== filters.category) return false;
      if (filters.brand && p.brand !== filters.brand) return false;
      if (p.price > maxPrice) return false;
      if (!p.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });

    console.log("Current filters:", filters);
    console.log("Filtered products count:", filtered.length);
    return filtered;
  }, [products, filters, maxPrice, search]);

  const sortedProducts = useMemo(() => {
    if (sortBy === "low") return [...filteredProducts].sort((a, b) => a.price - b.price);
    if (sortBy === "high") return [...filteredProducts].sort((a, b) => b.price - a.price);
    return filteredProducts;
  }, [filteredProducts, sortBy]);

  const totalItems = sortedProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedProducts.slice(start, start + itemsPerPage);
  }, [sortedProducts, currentPage, itemsPerPage]);

  return (
    <div className="font-sans">
      {/* Header */}
      <div
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/adidas-5400466_1280.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <h1 className="text-5xl font-bold text-gray">SHOP</h1>
        <p className="text-gray mt-6">Home / Shop</p>
      </div>

      {/* Main */}
      <div className="flex flex-col md:flex-row px-6 md:px-16 py-12 gap-10">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">
              Product Categories
            </h2>
            <ul className="space-y-2 text-gray-600">
              {["All", ...allowedCategories].map((cat) => (
                <li
                  key={cat}
                  onClick={() => handleFilterChange("category", cat)}
                  className={`flex justify-between items-center cursor-pointer hover:text-orange-500 ${
                    filters.category === cat ? "text-orange-500 font-bold" : ""
                  }`}
                >
                  <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                  <HiOutlineChevronRight />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">
              Brands
            </h2>
            <ul className="space-y-2 text-gray-600">
              {brands.map((brand) => (
                <li
                  key={brand}
                  onClick={() => handleFilterChange("brand", brand)}
                  className={`cursor-pointer hover:text-orange-500 ${
                    filters.brand === brand ? "text-orange-500 font-bold" : ""
                  }`}
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Products */}
        <section className="flex-1">
          {/* Sorting and pagination */}
          <div className="flex justify-between items-center text-sm text-gray-600 border border-gray-300 rounded-full py-3 px-4 mb-6">
            <div className="flex items-center space-x-4">
              <button className="w-9 h-9 flex items-center justify-center">
                <TiThLargeOutline className="text-xl text-orange-500" />
              </button>
              <button className="w-9 h-9 flex items-center justify-center">
                <AiOutlineBars className="text-xl" />
              </button>
            </div>

            <p className="text-gray-500">
              Showing{" "}
              <span className="font-medium text-black">
                {totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}
              </span>
              –{" "}
              <span className="font-medium text-black">
                {Math.min(currentPage * itemsPerPage, totalItems)}
              </span>{" "}
              of <span className="font-medium text-black">{totalItems}</span> item(s)
            </p>

            <div className="flex items-center gap-4">
              <span>Sort by:</span>
              <select
                className="bg-gray-100 rounded-full px-2 py-1"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="low">Price (Low to High)</option>
                <option value="high">Price (High to Low)</option>
              </select>

              <span>Show:</span>
              <select
                className="bg-gray-100 rounded-full px-2 py-1"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={12}>12</option>
                <option value={24}>24</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {paginatedProducts.length === 0 ? (
              <p className="col-span-full text-center text-gray-500">
                No products match your filters.
              </p>
            ) : (
              paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-xl overflow-hidden shadow hover:shadow-xl hover:scale-[1.02] transition bg-white"
                >
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
                      <span className="text-sm text-gray-700 font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="px-3 py-1 border rounded">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}