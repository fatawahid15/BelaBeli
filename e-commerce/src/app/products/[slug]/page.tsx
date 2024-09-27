"use server";
import { actionGetProductDetail } from "@/app/products/action";
import ProductDetail from "@/components/ProductDetail";

const PageDetail = async ({ params }: { params: { slug: string } }) => {
  console.log("Params:", params);

  const product = await actionGetProductDetail(params.slug);

  return <ProductDetail product={product} />
};

export default PageDetail;
