import { actionGetProducts } from "./action"; // Assuming this fetches the product data

const ProductList = async () => {
  const products = await actionGetProducts();

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.slug} className="border border-gray-300 rounded-lg p-4">
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-red-500 font-bold mt-2">Rp{product.price.toLocaleString()}</p>
              <p className="text-gray-500 line-through text-sm mt-1">30% Off</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
