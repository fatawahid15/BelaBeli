import NavbarWrapper from "@/components/NavBarWrapper";
import Carousel from "@/components/Carousel"; // Import the carousel component
import Link from "next/link";
import Card from "@/components/Card";
import { actionGetProducts } from "./products/action";

const Home = async () => {
  const products = await actionGetProducts();

  // Limit products to 8
  const limitedProducts = products.slice(0, 8);

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <NavbarWrapper />

      {/* Carousel */}
      <Carousel />

      {/* Banner Section */}
      <div className="flex justify-center mt-4">
        <img
          src="https://www.static-src.com/siva/asset/09_2024/Payday-Sep---revDesktop_25Sep.gif?w=1500"
          alt="Payday Promotion"
          className="w-full max-w-screen-lg"
        />
        <br />
      </div>

      {/* See all products */}
      <div className="flex justify-center mt-4">
        <Link href="/products" className="text-blue-600 font-bold hover:underline">
          See All Products
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {limitedProducts.map((product) => (
          <Card key={product.slug} product={product} />
        ))}
      </div>
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
  <div className="header flex justify-center mb-4 md:mb-6 lg:mb-8">
    <img
      src="blibli-logo.png"
      alt="Blibli Logo"
      className="w-32 md:w-48 lg:w-64"
    />
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ml-4 md:ml-6 lg:ml-8">
      Toko online dengan sensasi belanja ala mall.
    </h1>
  </div>
  <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
    <div className="column">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
        Customer Care
      </h2>
      <ul>
        <li className="flex items-center mb-2">
          <strong className="mr-2">Telepon</strong>
          <span>0804-1-871-871</span>
        </li>
        <li className="flex items-center mb-2">
          <strong className="mr-2">Email</strong>
          <a
            href="mailto:customer.care@blibli.com"
            className="text-blue-600 hover:text-blue-800"
          >
            customer.care@blibli.com
          </a>
        </li>
        <li className="flex items-center mb-2">
          <strong className="mr-2">Bantuan</strong>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Pusat Bantuan
          </a>
        </li>
      </ul>
      <h4 className="text-sm md:text-base lg:text-lg font-bold mt-4">
        Layanan Pengaduan Konsumen
      </h4>
      <h4 className="text-sm md:text-base lg:text-lg font-bold">
        Direktorat Jenderal
      </h4>
      <h4 className="text-sm md:text-base lg:text-lg font-bold">
        Perlindungan
      </h4>
      <h4 className="text-sm md:text-base lg:text-lg font-bold">
        Konsumen dan Tertib Niaga
      </h4>
      <h4 className="text-sm md:text-base lg:text-lg font-bold">
        Kementerian Perdagangan RI
      </h4>
      <ul className="mt-4">
        <li className="flex items-center mb-2">
          <strong className="mr-2">Whatsapp</strong>
          <span>0853-1111-1010</span>
        </li>
      </ul>
    </div>
    <div className="column">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
        Info Blibli
      </h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Tentang Blibli
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Blog Blibli Friends
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Siaran Pers
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Kabar Terbaru
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Karir
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Ketentuan &amp; Kebijakan Privasi
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Hak Kekayaan Intelektual
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Sahabat Ibu Pintar
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Sahabat Perjalananmu
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Sahabat Main
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Blibli Tiket Action
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;
