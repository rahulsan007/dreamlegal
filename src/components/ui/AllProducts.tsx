"use client";
import React, { useEffect, useState } from "react";
import VendorProductCard from "../VendorProductCard";
import Loading from "../Loading";

type Product = {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
};

function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      const userId = localStorage.getItem("vendorId");
      try {
        const response = await fetch("/api/vendor-products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: userId || "" }), // Replace 'user_id' with the actual user ID
        });

        const data = await response.json();

        if (response.ok) {
          setProducts(data.products);
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setError("An error occurred while fetching the products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className=" flex flex-col gap-4">
      {products.map((product) => (
        <VendorProductCard
          key={product.id}
          id={product.id}
          image={product.logoUrl}
          title={product.name}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default AllProducts;
