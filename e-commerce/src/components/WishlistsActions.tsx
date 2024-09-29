"use client";

import { useState } from "react";
import { addWishlists, deleteWishlists } from "@/app/wishlists/action";
import { ObjectId } from "mongodb";

interface WishlistActionsProps {
  productId: ObjectId;
}

const WishlistActions: React.FC<WishlistActionsProps> = ({ productId }) => {
  const [notification, setNotification] = useState<string | null>(null);
  const [wishlistError, setWishlistError] = useState<string | null>(null);

  const handleAddToWishlist = async () => {
    try {
      const result = await addWishlists(productId);
      if (result === true) {
        setNotification("Added to wishlist successfully!");
      } else {
        setWishlistError(result);
      }
    } catch (error) {
      console.log(error);
      setWishlistError("Failed to add to wishlist.");
    }
  };

  const handleRemoveFromWishlist = async () => {
    try {
      const result = await deleteWishlists(productId);
      if (result === true) {
        setNotification("Removed from wishlist successfully!");
      } else {
        setWishlistError(result);
      }
    } catch (error) {
      console.log(error);
      setWishlistError("Failed to remove from wishlist.");
    }
  };

  return (
    <div className="wishlist-actions mt-6">
      <button
        className="text-blue-500 hover:text-blue-600 font-semibold mr-4"
        onClick={handleAddToWishlist}
      >
        Add to Wishlist
      </button>
      <button
        className="text-blue-500 hover:text-blue-600 font-semibold"
        onClick={handleRemoveFromWishlist}
      >
        Remove from Wishlist
      </button>

      {notification && <div className="text-green-500 mt-4">{notification}</div>}
      {wishlistError && <div className="text-red-500 mt-4">{wishlistError}</div>}
    </div>
  );
};

export default WishlistActions;
