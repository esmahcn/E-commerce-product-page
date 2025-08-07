import { useState, useEffect } from "react";
import axios from "axios";

export default function useProductDetails(productId) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) return;

    setLoading(true);
    setError(null);

    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error loading product");
        setLoading(false);
      });
  }, [productId]);

  return { product, loading, error };
}