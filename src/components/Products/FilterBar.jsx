import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { TiThLargeOutline } from "react-icons/ti";

export default function FilterBar({
  search,
  setSearch,
  sortBy,
  setSortBy,
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  totalItems,
  itemsRange,
}) {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 text-sm text-gray-600 border border-gray-300 rounded-full py-3 px-4 mb-6">
      <div className="flex items-center space-x-4">
        <button className="w-9 h-9 flex items-center justify-center">
          <TiThLargeOutline className="text-xl text-orange-500" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center">
          <AiOutlineBars className="text-xl" />
        </button>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        className="px-4 py-1 border rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p className="text-gray-500">
        Showing{" "}
        <span className="font-medium text-black">{itemsRange.start}</span>–
        <span className="font-medium text-black">{itemsRange.end}</span> of{" "}
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
          {[10, 12, 24].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}