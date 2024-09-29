"use server";

import {
  getLimitProducts,
  getProductDetail,
  getProducts,
} from "@/db/models/product";

export const actionGetProducts = async (
  page: number = 1,
  limit: number = 8,
  searchTerm: string = ""
) => {
  const skip = (page - 1) * limit;
  const products = await getProducts(limit, skip, searchTerm);

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
