import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { readPayloadJose } from "./lib/jwt";

export const middleware = async (request: NextRequest) => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token");

  
  if (!token) {
    return NextResponse.next();
  }

  let tokenData;
  try {
    tokenData = await readPayloadJose<{ id: string }>(token.value);
  } catch (error) {
    console.error("Failed to decode token:", error);
    return NextResponse.json({
      statusCode: 401,
      error: "Invalid token",
    });
  }

  const url = request.nextUrl;

  
  const isProductPage = url.pathname.startsWith("/products");
  const isWishlistPage = url.pathname.startsWith("/wishlists");

  const response = NextResponse.next();

  if (isProductPage || isWishlistPage) {
    
    response.cookies.set("userId", tokenData.id, {
      httpOnly: true,
      path: "/",
    });
    console.log(`Set userId in cookies for ${isWishlistPage ? "/wishlists" : "/products"}:`, tokenData.id);
  } else {
    
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", tokenData.id);
    return NextResponse.next({
      headers: requestHeaders,
    });
  }

  return response;
};

export const config = {
  matcher: [
    "/",                      
    "/products",               
    "/products/:path*",        
    "/wishlists",              
  ],
};
