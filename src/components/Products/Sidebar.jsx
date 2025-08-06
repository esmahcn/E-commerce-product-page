export default function Sidebar({ filters, handleFilterChange, allowedCategories, categoryLabels, allBrands }) {
  return (
    <aside className="w-full lg:w-1/4 space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Product Categories</h2>
        <ul className="space-y-2 text-gray-600">
          {["All", ...allowedCategories].map((cat) => (
            <li
              key={cat}
              onClick={() => handleFilterChange("category", cat)}
              className={`flex justify-between items-center cursor-pointer hover:text-orange-500 ${
                filters.category === cat ? "text-orange-500 font-bold" : ""
              }`}
            >
              <span>{cat === "All" ? "All" : categoryLabels[cat]}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Brands</h2>
        <ul className="space-y-2 text-gray-600">
          {allBrands.map((brand) => (
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
  );
}