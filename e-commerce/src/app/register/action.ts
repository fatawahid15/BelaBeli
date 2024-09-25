import { createUser } from "@/db/models/user";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { z } from "zod";

type MyResponse<Type> = {
    statusCode: number;
    message?: string;
    data?: Type;
    error?: string;
  };

export const actionRegister = async (formData: FormData) => {
  try {
    const registerInputSchema = z.object({
      username: z.string(),
      email: z.string().email(),
      name: z.string().optional(),
      password: z.string().min(5),
    });

    const email = formData.get("email");
    const username = formData.get("username");
    const name = formData.get("name");
    const password = formData.get("password");

    const parsedData = registerInputSchema.safeParse({
      email,
      username,
      name,
      password,
    });

    if (!parsedData.success) {
      const errPath = parsedData.error.issues[0].path[0];
      const errMessage = parsedData.error.issues[0].message;
      const errFinalMessage = `${errPath} - ${errMessage}`;

      return redirect(
        `http://localhost:3000/register?error=${errFinalMessage}`
      );
    }

    const user = await createUser(parsedData.data);

    return redirect(`http://localhost:3000/login`)
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
