// Navbar.tsx (Client Component)
"use client";
import React, { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { deleteToken } from "./action"; // Import the server action
import { useRouter } from "next/navigation"; // Next.js Router for client-side redirection

interface NavbarProps {
  tokenCheck: string | undefined;
}

const Navbar: React.FC<NavbarProps> = ({ tokenCheck }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const router = useRouter(); // Use router to handle client-side redirection

  const handleLogout = async () => {
    const success = await deleteToken(); // Call the server action
    if (success) {
      router.push("/login"); // Redirect to the login page client-side
    }
  };

  return (
    <header className="bg-blue-600 text-white">
      {/* Main navigation */}
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo and search */}
        <div className="flex items-center space-x-4">
          <img
            src="https://res.cloudinary.com/dvvwmhgbq/image/upload/v1727319495/ueb12yrbvvdf08c6itca.png"
            alt="belabeli logo"
            className="w-16 h-16"
            onClick={() => {router.push('/')}}
          />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold font-sans">belabeli</h1>
          </div>
        </div>

        {/* User actions */}
        <div className="flex items-center space-x-4">
          {/* Heart Icon with hover and click state */}
          <div
            className="cursor-pointer"
            onClick={() => setIsHeartFilled(!isHeartFilled)} // Toggle heart icon on click
            onMouseEnter={() => setIsHeartFilled(true)} // Show filled heart on hover
            onMouseLeave={() => setIsHeartFilled(false)} // Revert to empty heart when not hovering
          >
            {isHeartFilled ? (
              <GoHeartFill className="text-2xl" /> // Filled heart icon
            ) : (
              <GoHeart className="text-2xl" /> // Empty heart icon
            )}
          </div>

          {!tokenCheck ? (
            <div>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold">
                Masuk
              </button>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold">
                Daftar
              </button>
            </div>
          ) : (
            <button
              className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold"
              onClick={handleLogout} // Call the handleLogout function
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Categories section */}
      <div className="bg-blue-700">
        <div className="container mx-auto flex items-center space-x-6 py-2">
          <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full">
            Semua Kategori
          </button>
          <nav className="flex space-x-4 text-sm">
            <a href="#" className="hover:text-gray-300">
              Bunga Tanjung Gold
            </a>
            <a href="#" className="hover:text-gray-300">
              ShowcaseMart
            </a>
            <a href="#" className="hover:text-gray-300">
              PROMO Furniture Estetik
            </a>
            <a href="#" className="hover:text-gray-300">
              SteinCookware PROMO 52%
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
