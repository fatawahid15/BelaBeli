import { getProductDetail, getProducts } from "@/db/models/product"

export const actionGetProductDetail = async (slug: string) => {
    const product = await getProductDetail(slug)

    console.log(product);
    
    return product
}