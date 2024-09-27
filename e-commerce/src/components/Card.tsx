"use client"

import { ProductModel } from "@/db/models/product";
import Link from "next/link";

interface CardProps {
  product: ProductModel;
}

const Card: React.FC<CardProps> = ({ product }) => {
    
  return (
    <div
      key={product.slug}
      className="relative card shadow-lg h-[420px] w-[300px] group flex flex-col justify-between bg-white rounded-lg overflow-hidden transition-transform hover:scale-105"
    >
      {/* Thumbnail */}
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.name}
          loading="lazy"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col justify-between">
        <h2 className="font-bold text-lg text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{product.excerpt}</p>
        <p className="font-semibold text-lg text-green-600">
          Rp. {product.price.toLocaleString("id-ID")}
        </p>
      </div>

      {/* Product Tags */}
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

      {/* Rating & Action Buttons */}
      <div className="flex items-center justify-between px-4 pb-4">
        {/* Placeholder for dynamic rating */}
        <div className="flex items-center gap-1">
          <svg
            fill="currentColor"
            className="h-4 w-4 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27l5.18 3.73-1.64-6.36L20.36 9H14L12 2 10 9H3.64l4.82 5.64L6.82 21z" />
          </svg>
          <span className="text-sm text-gray-600">4.5/5</span>
        </div>

        {/* View More Button */}
        <Link
          href={`/products/${product.slug}`}
          className="text-blue-500 hover:text-blue-600 text-sm font-semibold"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
