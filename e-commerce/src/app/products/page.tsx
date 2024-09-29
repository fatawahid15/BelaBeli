import ClientProductList from "@/components/ClientProductList";
import { actionGetProducts } from "./action";

const ProductPage = async () => {
  const initialProducts = await actionGetProducts(1, 8, "");

  return (
    <div>
      <ClientProductList initialProducts={initialProducts} />
    </div>
  );
};

export default ProductPage;
