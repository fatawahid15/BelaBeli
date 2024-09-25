import { actionGetProducts } from "./products/action";

const Home = async () => {
  const products = await actionGetProducts();

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <div className="bg-blue-600 p-4 flex justify-between items-center">
        <div className="text-white text-2xl">blibli</div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md border focus:outline-none"
          />
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md">
            Search
          </button>
        </div>
      </div>

      
      <div className="flex flex-col items-center justify-center min-h-96">
      <div className="carousel w-3/4 h-3/4">
  <div id="item1" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
  </div>
</div>
</div>

      {/* Flash Sale */}
      <div className="flex justify-between items-center bg-yellow-400 p-4 mt-4">
        <div className="text-lg font-semibold">Flash Sale</div>
        <div className="text-red-600 font-bold">02:54:18</div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <div
            key={product.slug}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-4">{product.name}</h3>
            <p className="text-gray-500">{product.excerpt}</p>
            <p className="text-red-500 font-bold mt-2">
              Rp{product.price.toLocaleString("id-ID")}
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4">
              Beli sekarang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
