import { Db, ObjectId } from "mongodb";
import { clientMongo } from "../config";
import { getDb } from "./user";

export type ProductModel = {
  _id: ObjectId; // Unique identifier for the product
  name: string; // Name of the product
  slug: string; // URL-friendly version of the product name
  description: string; // Detailed description of the product
  excerpt: string; // Short summary of the product
  price: number; // Price of the product in currency (e.g., Rp7499999)
  tags: string[]; // Array of tags related to the product (e.g., ['home', 'cleaning'])
  thumbnail: string; // URL to the product's thumbnail image
  images: string[]; // Array of URLs for additional product images
  createdAt: string; // Timestamp for when the product was created (ISO format)
  updatedAt: string; // Timestamp for the last time the product was updated (ISO format)
};

const COLLECTION_PRODUCT = "Products";

export const getProducts = async () => {
  const db = await getDb();

  const products = (await db
    .collection(COLLECTION_PRODUCT)
    .find({})
    .toArray()) as ProductModel[];

  return products;
};

export const getProductDetail = async (slug: string) => {
  const db = await getDb();
  const product = (await db
    .collection(COLLECTION_PRODUCT)
    .findOne({ slug: slug })) as ProductModel;

  return product;
};
