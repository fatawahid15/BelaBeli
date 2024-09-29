"use client";
import React, { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { deleteToken } from "./action";
import { useRouter } from "next/navigation";

interface NavbarProps {
  tokenCheck: string | undefined;
}

const Navbar: React.FC<NavbarProps> = ({ tokenCheck }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    const success = await deleteToken();
    if (success) {
      router.push("/login");
    } else {
      router.push("/login");
    }
  };

  const handleLoginRedirect = () => {
    router.push("/login");
  };

  const handleRegisterRedirect = () => {
    router.push("/register");
  };

  const handleWishlist = () => {
    router.push("/wishlists");
  };

  const handleProductsRedirect = () => {
    router.push("/products");
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div
          className="flex items-center space-x-4 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img
            src="https://res.cloudinary.com/dvvwmhgbq/image/upload/v1727319495/ueb12yrbvvdf08c6itca.png"
            alt="belabeli logo"
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">belabeli</h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div
            className="cursor-pointer"
            onClick={handleWishlist}
            onMouseEnter={() => setIsHeartFilled(true)}
            onMouseLeave={() => setIsHeartFilled(false)}
          >
            {isHeartFilled ? (
              <GoHeartFill className="text-2xl text-red-500 transition-colors duration-300" />
            ) : (
              <GoHeart className="text-2xl text-white transition-colors duration-300" />
            )}
          </div>

          <button
            className="bg-white text-blue-600 hover:bg-gray-100 transition-colors duration-300 px-4 py-2 rounded-full font-semibold"
            onClick={handleProductsRedirect}
          >
            Products
          </button>

          {!tokenCheck ? (
            <div className="space-x-2">
              <button
                className="bg-white text-blue-600 hover:bg-gray-100 transition-colors duration-300 px-4 py-2 rounded-full font-semibold"
                onClick={handleLoginRedirect}
              >
                Masuk
              </button>
              <button
                className="bg-white text-blue-600 hover:bg-gray-100 transition-colors duration-300 px-4 py-2 rounded-full font-semibold"
                onClick={handleRegisterRedirect}
              >
                Daftar
              </button>
            </div>
          ) : (
            <button
              className="bg-red-500 hover:bg-red-600 transition-colors duration-300 text-white px-4 py-2 rounded-full font-semibold"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
