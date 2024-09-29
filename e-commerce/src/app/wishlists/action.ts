"use server";

import {
  addUserWishlists,
  deleteUserWishlists,
  getUserWishlist,
} from "@/db/models/wishlist";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { cookies, headers } from "next/headers";

export const fetchHeaders = async () => {
  const cookiesList = cookies();
  const userId = cookiesList.get("userId")?.value;

  if (!userId) {
    const headersList = headers();
    const userId = headersList.get("x-user-id");
    if (!userId) {
      return "gagal";
    }
    const product = await getUserWishlist(userId);
    return product;
  } else {
    const product = await getUserWishlist(userId);
    return product;
  }
};

export const fetchUserWishlists = async () => {
  const headersList = headers();
  const userId = headersList.get("x-user-id");

  console.log(userId);

  if (userId) {
    const product = await getUserWishlist(userId);
    console.log(product);

    return product;
  }

  console.log("gagal");
  return "gagal";
};

export const addWishlists = async (productId: ObjectId) => {
  const headersList = headers();
  let userId = headersList.get("x-user-id") ?? null;

  if (!userId) {
    const cookiesList = cookies();
    userId = cookiesList.get("userId")?.value ?? null;
  }

  try {
    if (!userId) {
      throw new Error("User not authenticated");
    }

    await addUserWishlists(userId, productId);
    revalidatePath("/wishlists");
    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return error.message; // Return the error message
    } else {
      console.error("Unknown error occurred");
      return "Unknown error occurred"; // Return a default error message
    }
  }
};

export const deleteWishlists = async (productId: ObjectId) => {
  const headersList = headers();
  let userId = headersList.get("x-user-id") ?? null;

  if (!userId) {
    const cookiesList = cookies();
    userId = cookiesList.get("userId")?.value ?? null;
  }

  try {
    if (!userId) {
      throw new Error("User not authenticated");
    }

    await deleteUserWishlists(userId, productId);
    revalidatePath("/wishlists");
    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return error.message;
    } else {
      console.error("Unknown error occurred");
      return "Unknown error occurred";
    }
  }
};
