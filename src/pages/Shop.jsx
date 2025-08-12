import useProducts from "../hook/useProducts";
import { useState, useMemo } from "react";
import ProductItem from "../components/Products/productItem";
import Sidebar from "../components/Products/Sidebar";
import Pagination from "../components/Pagination";
import ProductsGrid from "../components/Products/ProductsGrid";
import FilterBar from "../components/Products/FilterBar";
const allowedCategories = ["mens-shoes", "womens-shoes"];
const categoryLabels = {
  "mens-shoes": "Men's Shoes",
  "womens-shoes": "Women's Shoes",
};

export default function Shop() {
  const { products, loading, error } = useProducts();

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

  const allBrands = useMemo(() => [...new Set(products.map((p) => p.brand))], [products]);

  const filteredProducts = useMemo(() => products.filter((p) =>
    (filters.category === "All" || p.category === filters.category) &&
    (!filters.brand || p.brand === filters.brand) &&
    p.price <= maxPrice &&
    p.title.toLowerCase().includes(search.toLowerCase())
  ), [products, filters, maxPrice, search]);

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

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Error: {error}</p>;

  return (
    <div className="font-sans">
      {/* Header */}
      <div
        className="h-[60vh] bg-cover bg-center relative flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/images/adidas-5400466_1280.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <h1 className="text-5xl font-bold text-white z-10">SHOP</h1>
        <p className="text-gray-100 mt-6 z-10">Home / Shop</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row px-6 md:px-16 py-12 gap-10">
        <Sidebar
          filters={filters}
          handleFilterChange={handleFilterChange}
          allowedCategories={allowedCategories}
          categoryLabels={categoryLabels}
          allBrands={allBrands}
        />

        <section className="flex-1">
          <FilterBar
            search={search}
            setSearch={setSearch}
            sortBy={sortBy}
            setSortBy={setSortBy}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            currentPage={currentPage}
            totalItems={totalItems}
            itemsRange={{
              start: totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1,
              end: Math.min(currentPage * itemsPerPage, totalItems),
            }}
          />

          <ProductsGrid products={paginatedProducts} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </section>
      </div>
    </div>
  );
}