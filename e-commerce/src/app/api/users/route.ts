import { createUser, getUsers } from "@/db/models/user";
import { NextResponse } from "next/server";
import { z } from "zod";

type MyResponse<Type> = {
  statusCode: number;
  message?: string;
  data?: Type;
  error?: string;
};

const inputSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  name: z.string().optional(),
  password: z.string().min(5),
});

export const GET = async () => {
  const users = await getUsers();

  return NextResponse.json<MyResponse<unknown>>(
    {
      statusCode: 200,
      message: "Pong get api user success",
      data: users,
    },
    {
      status: 200,
    }
  );
};

export const POST = async (request: Request) => {
  try {
    const data = await request.json();

    const parsedData = inputSchema.safeParse(data);

    if (!parsedData.success) {
      throw parsedData.error;
    }

    const user = await createUser(parsedData.data);
    return NextResponse.json<MyResponse<unknown>>(
      {
        statusCode: 201,
        message: "Pong create user succeed",
        data: user,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error);
      const errPath = error.issues[0].path[0];
      const errMessage = error.issues[0].message;

      return NextResponse.json<MyResponse<unknown>>(
        {
          statusCode: 400,
          error: `from ${errPath} with message of ${errMessage}`,
        },
        {
          status: 400,
        }
      );
    } else {
      console.error("Unexpected error:", error);
      return NextResponse.json<MyResponse<unknown>>(
        {
          statusCode: 500,
          message: "Internal Server Error",
          error: "An unexpected error occurred.",
        },
        {
          status: 500,
        }
      );
    }
  }
};
