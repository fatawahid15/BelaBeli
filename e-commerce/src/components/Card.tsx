"use client";
import { useState } from "react";
import { addWishlists, deleteWishlists } from "@/app/wishlists/action";
import { ProductModel } from "@/db/models/product";
import Link from "next/link";

interface CardProps {
  product: ProductModel;
  productData?: () => void; 
}

const Card: React.FC<CardProps> = ({ product, productData }) => {
  const [notification, setNotification] = useState<string | null>(null); 
  const [error, setError] = useState<string | true>(true); 

  const handleClick = async () => {
    try {
      setNotification(null);
      setError(true);
  
      const result = await addWishlists(product._id);
      if (result) {
        console.log(result);
        setError(result);
        setNotification("Fail to add");
      } else {
        setNotification("Added to wishlist successfully!");
      }
  
      if (productData) {
        productData();
      }
    } catch {
      setError("Failed to add to wishlist.");
    }
  };
  
  const handleClick2 = async () => {
    try {
      setNotification(null);
      setError(true);
  
      const result = await deleteWishlists(product._id);
      if (result) {
        setError(result); 
      } else {
        setNotification("Removed from wishlist successfully!");
      }
  
      if (productData) {
        productData();
      }
    } catch {
      setError("Failed to remove from wishlist.");
    }
  };
  

  return (
    <div
      key={product.slug}
      className="relative card shadow-lg h-[420px] w-[300px] group flex flex-col justify-between bg-white rounded-lg overflow-hidden transition-transform hover:scale-105"
    >
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.name}
          loading="lazy"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-4 flex flex-col justify-between">
        <h2 className="font-bold text-lg text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{product.excerpt}</p>
        <p className="font-semibold text-lg text-green-600">
          Rp. {product.price.toLocaleString("id-ID")}
        </p>
      </div>

      <div className="flex gap-2 px-4 mb-4">
        {product.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-200 text-xs font-medium rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between px-4 pb-4">
        <div
          className="text-blue-500 hover:text-blue-600 text-sm font-semibold cursor-pointer"
          onClick={handleClick}
        >
          Add to Wishlists
        </div>

        <div
          className="text-red-500 hover:text-red-600 text-sm font-semibold cursor-pointer"
          onClick={handleClick2}
        >
          Delete from Wishlists
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="text-blue-500 hover:text-blue-600 text-sm font-semibold"
        >
          View Details
        </Link>
      </div>

      {notification && (
        <div className="text-center p-2 bg-green-100 text-green-800 rounded mt-2">
          {notification}
        </div>
      )}

      {error && (
        <div className="text-center p-2 bg-red-100 text-red-800 rounded mt-2">
          {error}
        </div>
      )}
    </div>
  );
};

export default Card;
