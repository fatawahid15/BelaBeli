"use server"

import { getProductDetail, getProducts } from "@/db/models/product"

export const actionGetProducts = async () => {
    const product = getProducts()

    return product
}

export const actionGetProductDetail = async (slug: string) => {
    const product = await getProductDetail(slug)    
    return product
}