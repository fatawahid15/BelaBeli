  import { ObjectId } from "mongodb";
  import { getDb } from "./user";

  export type ProductModel = {
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

  const COLLECTION_PRODUCT = "Products";

export const getProducts = async (
  limit: number = 8,
  skip: number = 0,
  searchTerm: string = ""
) => {
  const db = await getDb();

  const query = searchTerm
    ? {
        $or: [
          { name: { $regex: searchTerm, $options: "i" } }, 
          { description: { $regex: searchTerm, $options: "i" } }, 
        ],
      }
    : {}; 

  const products = (await db
    .collection(COLLECTION_PRODUCT)
    .find(query) 
    .skip(skip) 
    .limit(limit)
    .toArray()) as ProductModel[];

  return products;
};



  export const getLimitProducts = async () => {
    const db = await getDb();

    const products = (await db
      .collection(COLLECTION_PRODUCT)
      .find({})
      .limit(8)
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
