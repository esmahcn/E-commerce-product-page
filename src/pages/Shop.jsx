import React, { useState, useMemo } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { TiThLargeOutline } from "react-icons/ti";
import { HiOutlineChevronRight } from "react-icons/hi";

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
    onSale: true,
    rating: 4.5,
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
    rating: 4.2,
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
    rating: 3.8,
  },
   {
    id: 1,
    name: "Jordan Sneaker",
    price: 120,
    category: "Men",
    brand: "Nike",
    size: "40",
    origin: "Made in USA",
    image: "/images/jor.jpg",
    onSale: true,
    rating: 4.5,
  },
  {
    id: 4,
    name: "Moccasins",
    price: 110,
    category: "Kids",
    brand: "Puma",
    size: "39",
    origin: "Made in China",
    image: "/images/moca.jpg",
    onSale: true,
    rating: 4.0,
  },
  {
    id: 5,
    name: "Boots",
    price: 110,
    category: "Kids",
    brand: "Puma",
    size: "39",
    origin: "Made in China",
    image: "/images/boots.jpg",
    onSale: true,
    rating: 4.3,
  },
  {
    id: 6,
    name: "Sandales",
    price: 110,
    category: "Kids",
    brand: "Puma",
    size: "39",
    origin: "Made in China",
    image: "/images/sandales.jpg",
    rating: 3.9,
  },
  {
    id: 7,
    name: "Heels",
    price: 110,
    category: "Kids",
    brand: "Puma",
    size: "39",
    origin: "Made in China",
    image: "/images/loafers.jpg",
    rating: 4.1,
  },
  {
    id: 8,
    name: "Flats",
    price: 110,
    category: "Kids",
    brand: "Puma",
    size: "39",
    origin: "Made in China",
    image: "/images/flag.jpg",
    onSale: true,
    rating: 4.4,
  },
  {
    id: 9,
    name: "Oxfords",
    price: 110,
    category: "Kids",
    brand: "Puma",
    size: "39",
    origin: "Made in China",
    image: "/images/oxf.jpg",
    rating: 3.7,
  },
  {
    id: 10,
    name: "Brogues",
    price: 110,
    category: "Kids",
    brand: "Puma",
    size: "39",
    origin: "Made in China",
    image: "/images/brog.jpg",
    onSale: true,
    rating: 4.2,
  },
   {
    id: 9,
    name: "Oxfords",
    price: 110,
    category: "Kids",
    brand: "Puma",
    size: "39",
    origin: "Made in China",
    image: "/images/oxf.jpg",
    rating: 3.7,
  },
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
  const [maxPrice, setMaxPrice] = useState(300);

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type] === value ? "" : value,
    }));
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const { category, brand, size, origin } = filters;
      return (
        (category === "All" || p.category === category) &&
        (!brand || p.brand === brand) &&
        (!size || p.size === size) &&
        (!origin || p.origin === origin) &&
        p.price <= maxPrice &&
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [filters, search, maxPrice]);

  const sortedProducts = useMemo(() => {
    if (sortBy === "low") return [...filteredProducts].sort((a, b) => a.price - b.price);
    if (sortBy === "high") return [...filteredProducts].sort((a, b) => b.price - a.price);
    return filteredProducts;
  }, [filteredProducts, sortBy]);

  const totalItems = sortedProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedProducts, currentPage, itemsPerPage]);

  return (
    <div className="font-sans">
      <div
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/adidas-5400466_1280.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <h1 className="text-5xl font-bold text-gray">SHOP</h1>
                <p className="text-gray mt-6">Home / Shop</p>
      </div>

      <div className="flex flex-col md:flex-row px-6 md:px-16 py-12 gap-10">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Product Categories</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex justify-between items-center hover:text-orange-500 cursor-pointer">
                <span>Men's Shoes</span>
                <HiOutlineChevronRight />
              </li>
              <li className="flex justify-between items-center hover:text-orange-500 cursor-pointer">
                <span>Women's Shoes</span>
                <HiOutlineChevronRight />
              </li>
              <li className="flex justify-between items-center hover:text-orange-500 cursor-pointer">
                <span>Kid's Shoes</span>
                <HiOutlineChevronRight />
              </li>
              <li className="flex justify-between items-center hover:text-orange-500 cursor-pointer">
                <span>Shop by Sport</span>
                <HiOutlineChevronRight />
              </li>
            </ul>
          </div>

          <div className="my-6">
            <h3 className="text-md font-semibold mb-2">Price</h3>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min={0}
                max={500}
                step={10}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-orange-500"
              />
              <span className="text-sm font-medium text-gray-700">${maxPrice}</span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Brands</h2>
            <ul className="space-y-1 text-gray-600">
              <li>Nike Air Max</li>
              <li>Adidas Superstar</li>
              <li>Jordan Retro</li>
            </ul>
          </div>




            <div>
                        <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Dimensions</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>40×60CM (6)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>60×90CM (8)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>80×120CM (3)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Made In</h2>
                        <ul className="space-y-1 text-gray-600">
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>Germany</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>Japan</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>Taiwan</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>USA</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Sizes</h2>
                        <ul className="space-y-1 text-gray-600">
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>S</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>M</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>L</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>XL</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Model</h2>
                        <ul className="space-y-1 text-gray-600">
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>2021 (5)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>2022 (6)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>2023 (3)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>2024 (8)</span>
                            </li>
                        </ul>
                    </div>
             


          {/* Add other filters here as needed */}
        </aside>

        {/* Products Section */}
        <section className="flex-1">
          {/* Sorting and view header */}
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
              Showing <span className="font-medium text-black">{totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}</span>–
              <span className="font-medium text-black">{Math.min(currentPage * itemsPerPage, totalItems)}</span> of{" "}
              <span className="font-medium text-black">{totalItems}</span> item(s)
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

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {paginatedProducts.length === 0 ? (
              <p className="col-span-full text-center text-gray-500">No products match your filters.</p>
            ) : (
              paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-xl overflow-hidden shadow hover:shadow-xl hover:scale-[1.02] transition bg-white"
                >
                  <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
                    {/* Sale badge */}
                    {product.onSale && (
                      <span className="absolute top-2 left-2 bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded">
                        SALE
                      </span>
                    )}

                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex justify-between items-start p-4">
                    {/* Left: Name + Price */}
                    <div className="text-left">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-600">${product.price}</p>
                    </div>

                    {/* Right: Star + Rating */}
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
        </section>
      </div>
    </div>
  );
}