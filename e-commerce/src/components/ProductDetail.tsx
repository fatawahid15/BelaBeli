"use client";

import { ObjectId } from 'mongodb';
import React from 'react';
import WishlistActions from './WishlistsActions';

interface ProductDetailProps {
  product: {
    _id: ObjectId;
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price: number;
    tags: string[];
    thumbnail: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            <img
              src={product.thumbnail}
              alt={`${product.name} thumbnail`}
              className="w-80 mb-4 rounded-lg shadow-lg"
            />
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} image ${index + 1}`}
                  className="w-20 h-20 rounded-lg border border-gray-300 cursor-pointer hover:shadow-md"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-red-500 mb-4">Rp{product.price.toLocaleString()}</p>
            <p className="mb-4">{product.description}</p>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              {product.tags.map((tag, index) => (
                <span key={index} className="badge badge-outline">{tag}</span>
              ))}
            </div>

            <button className="btn btn-primary mb-4">Purchase Now</button>

            <div className="text-sm text-gray-600 mt-4">
              <p><strong>Created At:</strong> {new Date(product.createdAt).toLocaleDateString()}</p>
              <p><strong>Updated At:</strong> {new Date(product.updatedAt).toLocaleDateString()}</p>
              <WishlistActions productId={product._id}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
