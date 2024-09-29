import NavbarWrapper from "@/components/NavBarWrapper";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import Card from "@/components/Card";
import { actionGetLimitedProducts } from "./products/action";
import { ProductModel } from "@/db/models/product";
import Footer from "@/components/Footer";

const Home = async () => {
  const product = await actionGetLimitedProducts();
  const productOutput = JSON.stringify(product)
  const productParse = JSON.parse(productOutput)
  const products: ProductModel[] = productParse

  const limitedProducts = products.slice(0, 8);

  return (
    <div className="bg-gray-100">
      <NavbarWrapper />

      <Carousel />

      <div className="flex justify-center mt-6 mb-6">
        <img
          src="https://www.static-src.com/siva/asset/09_2024/Payday-Sep---revDesktop_25Sep.gif?w=1500"
          alt="Payday Promotion"
          className="w-full max-w-screen-lg"
        />
      </div>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {limitedProducts.map((product) => (
            <Card key={product.slug} product={product} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
