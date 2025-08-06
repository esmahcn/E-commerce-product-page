import { useEffect, useState } from "react";
import axios from "axios";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // <-- add loading state
  const [error, setError] = useState(null);     // <-- add error state

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const [mensRes, womensRes] = await Promise.all([
          axios.get("https://dummyjson.com/products/category/mens-shoes"),
          axios.get("https://dummyjson.com/products/category/womens-shoes"),
        ]);

        const combinedProducts = [...mensRes.data.products, ...womensRes.data.products]
          .map((p) => ({
            ...p,
            onSale: Math.random() > 0.7,
          }));

        setProducts(combinedProducts);
      } catch (err) {
        setError(err.message || "Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;