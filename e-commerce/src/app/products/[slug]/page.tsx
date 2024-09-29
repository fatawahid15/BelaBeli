"use server";
import { actionGetProductDetail } from "@/app/products/action";
import ProductDetail from "@/components/ProductDetail";
import Head from "next/head";

const PageDetail = async ({ params }: { params: { slug: string } }) => {
  const product = await actionGetProductDetail(params.slug);

  return (
    <div>
      <Head>
        <title>{product.name} - Product Detail</title>
        <meta
          name="description"
          content={`Find details about ${product.name}, including price, specifications, and more.`}
        />
        <meta property="og:title" content={product.name} />
        <meta
          property="og:description"
          content={`Find details about ${product.name}, including price, specifications, and more.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={product.thumbnail} />
        <meta
          property="og:url"
          content={`https://localhost:3000/products/${params.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.name} />
        <meta
          name="twitter:description"
          content={`Find details about ${product.name}, including price, specifications, and more.`}
        />
      </Head>

      <ProductDetail product={product} />
    </div>
  );
};

export default PageDetail;
