import NavbarWrapper from "@/components/NavBarWrapper";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import Card from "@/components/Card";
import { actionGetLimitedProducts, actionGetProducts } from "./products/action";

const Home = async () => {
  const products = await actionGetLimitedProducts();
  const limitedProducts = products.slice(0, 8);

  return (
    <div className="bg-gray-100">
      {/* Header & Navbar */}
      <NavbarWrapper />

      {/* Carousel Section */}
      <Carousel />

      {/* Banner Section */}
      <div className="flex justify-center mt-6 mb-6">
        <img
          src="https://www.static-src.com/siva/asset/09_2024/Payday-Sep---revDesktop_25Sep.gif?w=1500"
          alt="Payday Promotion"
          className="w-full max-w-screen-lg"
        />
      </div>

      {/* Product Section */}
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-6">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
          <Link
            href="/products"
            className="text-blue-600 font-semibold hover:underline"
          >
            See All Products
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {limitedProducts.map((product) => (
            <Card key={product.slug} product={product} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-12 p-6 border-t border-gray-300">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Customer Care */}
          <div>
            <h4 className="font-bold text-lg mb-4">Customer Care</h4>
            <ul>
              <li className="mb-2">
                <strong>Phone:</strong> 0804-1-871-871
              </li>
              <li className="mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:customer.care@blibli.com" className="text-blue-600 hover:underline">
                  customer.care@blibli.com
                </a>
              </li>
              <li className="mb-2">
                <strong>Help Center:</strong>{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Pusat Bantuan
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Info Blibli */}
          <div>
            <h4 className="font-bold text-lg mb-4">Info Blibli</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-blue-600 hover:underline">
                  Tentang Blibli
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-blue-600 hover:underline">
                  Blog Blibli Friends
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-blue-600 hover:underline">
                  Siaran Pers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-blue-600 hover:underline">
                  Kabar Terbaru
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Payment Methods */}
          <div>
            <h4 className="font-bold text-lg mb-4">Payment Methods</h4>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Blibli_Logo.svg/512px-Blibli_Logo.svg.png"
              alt="Payment Methods"
              className="w-32"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
