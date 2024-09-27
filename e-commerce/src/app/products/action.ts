"use server";

import {
  getLimitProducts,
  getProductDetail,
  getProducts,
} from "@/db/models/product";

// action.ts

export const actionGetProducts = async (page: number = 1, limit: number = 8) => {
    const skip = (page - 1) * limit; // Calculate how many products to skip based on page
    const products = await getProducts(limit, skip); // Pass limit and skip to the query
  
    return products;
  };
  

export const actionGetProductDetail = async (slug: string) => {
  const product = await getProductDetail(slug);
  return product;
};

export const actionGetLimitedProducts = async () => {
  const product = await getLimitProducts();
  return product;
};
