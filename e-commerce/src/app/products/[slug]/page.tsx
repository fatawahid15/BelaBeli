"use server";
import { actionGetProductDetail } from "@/app/products/action";
import ProductDetail from "@/components/ProductDetail";

const PageDetail = async ({ params }: { params: { slug: string } }) => {
  // Log params to ensure it's working correctly
  console.log("Params:", params);

  // Fetch the product details using the slug
  const product = await actionGetProductDetail(params.slug);

  return <ProductDetail product={product}></ProductDetail>
};

export default PageDetail;
