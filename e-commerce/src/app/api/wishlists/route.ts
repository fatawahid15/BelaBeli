import { getWishLists, WishListModel, WishListWithoutUserId } from "@/db/models/wishlist";
import { NextResponse } from "next/server";

type MyResponse<Type> = {
    statusCode: number
    message?: string
    data?: Type
    error?: string
}

export const GET = async () => {
    const wishlists = await getWishLists();
    console.log(wishlists);
    

    return NextResponse.json<MyResponse<WishListWithoutUserId[]>>(
        {
            statusCode: 200,
            message: "Pong get api user success",
            data: wishlists
        },{
            status: 200
        }
    )
}