"use server"

import { getProducts } from "@/db/models/product"

export const actionGetProducts = async () => {
    const product = getProducts()

    return product
}