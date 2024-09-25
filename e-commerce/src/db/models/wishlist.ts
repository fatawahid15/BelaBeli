import { Db, ObjectId } from "mongodb";
import { getDb } from "./user";

export type WishListModel = {
    _id: ObjectId;
    userId: ObjectId;
    productId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
};

const COLLECTION_WISHLIST = "Wishlists";

export type WishListWithoutUserId = Omit<WishListModel, 'userId' | 'productId' | 'createdAt' | 'updatedAt'>;

export const getWishLists = async () => {
  const db = await getDb();

  const wishlists = (await db
    .collection(COLLECTION_WISHLIST)
    .find({})
    .project({_id: 1})
    .toArray()) as WishListModel[];

  return wishlists;
};
