import React, { useState, useMemo } from "react";

const categories = ["All", "Men", "Women", "Kids"];
const brands = ["Nike", "Adidas", "Puma"];
const sizes = ["38", "39", "40", "41", "42"];
const origins = ["Made in USA", "Made in France", "Made in China"];

const products = [
  {
    id: 1,
    name: "Jordan Sneaker",
    price: 120,
    category: "Men",
    brand: "Nike",
    size: "40",
    origin: "Made in USA",
    image: "/images/jor.jpg",
  },
  {
    id: 2,
    name: "Sneakers",
    price: 140,
    category: "Women",
    brand: "Adidas",
    size: "38",
    origin: "Made in France",
    image: "/images/sn.jpg",
  },
  {
    id: 3,
    name: "Loafers",
    price: 110,
    category: "Kids",
    brand: "Puma",
    size: "39",
    origin: "Made in China",
    image: "/images/loafers.jpg",
  },
  // Add more products here...
];

export default function Shop() {
  const [filters, setFilters] = useState({
    category: "All",
    brand: "",
    size: "",
    origin: "",
  });
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type] === value ? "" : value,
    }));
    setCurrentPage(1); // reset page when filters change
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const { category, brand, size, origin } = filters;
      return (
        (category === "All" || p.category === category) &&
        (!brand || p.brand === brand) &&
        (!size || p.size === size) &&
        (!origin || p.origin === origin) &&
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [filters, search]);

  // Sort products
  const sortedProducts = useMemo(() => {
    if (sortBy === "low")
      return [...filteredProducts].sort((a, b) => a.price - b.price);
    if (sortBy === "high")
      return [...filteredProducts].sort((a, b) => b.price - a.price);
    return filteredProducts;
  }, [filteredProducts, sortBy]);

  // Pagination logic
  const totalItems = sortedProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Slice for current page
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedProducts, currentPage, itemsPerPage]);

  // Showing counts
  const showingFrom = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const showingTo =
    currentPage * itemsPerPage > totalItems ? totalItems : currentPage * itemsPerPage;

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/adidas-5400466_1280.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <h1 className="relative text-white text-5xl font-extrabold tracking-wide z-10">
          SHOP
        </h1>
      </div>

      {/* Layout: Sidebar + Main */}
      <div className="flex flex-col md:flex-row px-6 md:px-16 py-12 gap-10">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-[260px] space-y-8">
          <FilterSection
            title="Categories"
            items={categories}
            selected={filters.category}
            onChange={(val) => handleFilterChange("category", val)}
          />
          <FilterSection
            title="Brand"
            items={brands}
            selected={filters.brand}
            onChange={(val) => handleFilterChange("brand", val)}
          />
          <FilterSection
            title="Size"
            items={sizes}
            selected={filters.size}
            onChange={(val) => handleFilterChange("size", val)}
          />
          <FilterSection
            title="Made In"
            items={origins}
            selected={filters.origin}
            onChange={(val) => handleFilterChange("origin", val)}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Toolbar: Showing + Sort + Show + Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
            {/* Showing + Sort + Show inside bordered container */}
            <div className="flex items-center gap-6 border border-gray-300 rounded-full px-6 py-3 max-w-xl w-full">
              <span className="text-gray-600 text-sm whitespace-nowrap">
                Showing {showingFrom}–{showingTo} of {totalItems} 15 item(5)
              </span>

              <div className="flex items-center gap-2 text-sm whitespace-nowrap">
                <label htmlFor="sort" className="text-gray-600">
                  Sort by:
                </label>
                <select
                  id="sort"
                  className="bg-white border border-gray-300 rounded-full px-4 py-1 focus:outline-none focus:ring-1 focus:ring-black text-gray-700"
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  <option value="default">Default</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                </select>
              </div>

              <div className="flex items-center gap-2 text-sm whitespace-nowrap">
                <label htmlFor="show" className="text-gray-600">
                  Show:
                </label>
                <select
                  id="show"
                  className="bg-white border border-gray-300 rounded-full px-4 py-1 focus:outline-none focus:ring-1 focus:ring-black text-gray-700"
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  <option value={12}>10</option>
                  <option value={24}>26</option>
                  <option value={48}>50</option>
                </select>
              </div>
            </div>

          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
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
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-500">${product.price}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function FilterSection({ title, items, selected, onChange }) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <div className="space-y-2">
        {items.map((item) => (
          <label
            key={item}
            className={`block px-3 py-2 rounded-md cursor-pointer transition text-sm ${
              selected === item
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => onChange(item)}
          >
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}