import { getProducts } from "@/db/models/product";
import { NextResponse } from "next/server";

type MyResponse<Type> = {
  statusCode: number;
  message?: string;
  data?: Type;
  error?: string;
};

export const GET = async () => {
  const products = await getProducts();

  return NextResponse.json<MyResponse<unknown>>(
    {
      statusCode: 200,
      message: "Pong get api user success",
      data: products,
    },
    {
      status: 200,
    }
  );
};
