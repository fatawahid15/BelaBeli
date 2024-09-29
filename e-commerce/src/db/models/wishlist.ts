import { ObjectId } from "mongodb";
import { getDb } from "./user";
import { ProductModel } from "./product";

export type WishListModel = {
    _id: ObjectId;
    userId: ObjectId;
    productId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
    product: ProductModel
};

const COLLECTION_WISHLIST = "Wishlists";
const COLLECTION_PRODUCT = "Products";

export type WishListWithoutUserId = Omit<WishListModel, 'userId' | 'productId' | 'createdAt' | 'updatedAt'>;

export const getUserWishlist = async (userId: string) => {
  const db = await getDb();
  const user = new ObjectId(userId);

  
  const wishlists = (await db
    .collection(COLLECTION_WISHLIST)
    .aggregate([
      {
        $match: { userId: user } 
      },
      {
        $lookup: {
          from: COLLECTION_PRODUCT, 
          localField: "productId", 
          foreignField: "_id", 
          as: "product" 
        }
      },
      {
        $unwind: "$product" 
      },
      {
        $project: {
          _id: 1,
          userId: 1,
          productId: 1,
          createdAt: 1,
          updatedAt: 1,
          "product._id": 1,
          "product.name": 1,
          "product.slug": 1,
          "product.description": 1,
          "product.excerpt": 1,
          "product.price": 1,
          "product.thumbnail": 1,
          "product.images": 1,
          "product.tags": 1
        }
      }
    ])
    .toArray()) as (WishListModel & { product: ProductModel })[];

  return wishlists;
};

export const addUserWishlists = async (userId: string, productId: ObjectId) => {
  const db = await getDb();
  const user = new ObjectId(userId);
  const product = new ObjectId(productId);

  
  const productExists = await db.collection(COLLECTION_PRODUCT).findOne({ _id: product });
  if (!productExists) {
    throw new Error("Product not found");
  }

  const existingWishlist = await db.collection(COLLECTION_WISHLIST).findOne({ userId: user, productId: product });
  if (existingWishlist) {
    throw new Error("Wishlist already exists for this user and product");
  } else {
    const addedObject = {
      userId: user,
      productId: product,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  
    const result = await db.collection(COLLECTION_WISHLIST).insertOne(addedObject);
    return result;

  }
};

export const deleteUserWishlists = async (userId: string, productId: ObjectId) => {
  const db = await getDb();
  const user = new ObjectId(userId);
  const product = new ObjectId(productId)
  const existingWishlist = await db.collection(COLLECTION_WISHLIST).findOne({ userId: user, productId: product });
  if (!existingWishlist) {
    throw new Error("Wishlist entry not found");
  }

  
  const result = await db.collection(COLLECTION_WISHLIST).deleteOne({ userId: user, productId: product });
  return result;
};


