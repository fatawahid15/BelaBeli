"use client";

import { useEffect, useState } from "react";
import { fetchHeaders } from "./action";
import { WishListModel } from "@/db/models/wishlist";
import Card from "@/components/Card";

const WishList = () => {
  const [products, setProducts] = useState<WishListModel[]>([]);
  const [error, setError] = useState<string | null>(null);

  const productData = async () => {
    try {
      const result = await fetchHeaders();
      if (result === "gagal") {
        throw new Error("Failed to fetch user wishlist");
      }
      setProducts(result);
    } catch (err) {
      setError(
        `Failed to load wishlist. Please try again later. Error: ${err}`
      );
    }
  };

  useEffect(() => {
    productData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>

      {error && <p className="text-red-500">{error}</p>}

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              product={product.product}
              productData={productData}
            />
          ))}
        </div>
      ) : (
        !error && (
          <p className="text-gray-600 mt-4">
            No items in wishlist. Add products to see them here.
          </p>
        )
      )}
    </div>
  );
};

export default WishList;
