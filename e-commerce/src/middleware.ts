import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { readPayload } from "./lib/jwt";

export const middleware = (request: NextRequest) => {
  if (
    !request.url.includes("/api") &&
    !request.url.includes("_next/static") &&
    !request.url.includes("_next/image") &&
    !request.url.includes("favicon.ico")
  ) {
    console.log(request.method, request.url);
  }

  if (request.url.includes("/api")) {
    console.log("API AUTH", request.method, request.url);

    const cookiesStore = cookies();
    const token = cookiesStore.get("token");

    console.log("token dari cookie", token);

    if (!token) {
      return NextResponse.json({
        statusCode: 401,
        error: "Unauthorized",
      });
    }

    const tokenData = readPayload(token.value) as {
      id: string;
      email: string;
    };

    const requestHeaders = new Headers(request.headers);

    requestHeaders.set("x-user-id", tokenData.id);
    requestHeaders.set("x-user-email", tokenData.email);

    return NextResponse.next({
      headers: requestHeaders,
    });
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
