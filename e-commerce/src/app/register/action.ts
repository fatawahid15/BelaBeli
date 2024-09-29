"use server";

import { createUser } from "@/db/models/user";
import { redirect } from "next/navigation";
import { z } from "zod";

export const actionRegister = async (formData: FormData) => {
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

  // Validate input data with Zod
  const parsedData = registerInputSchema.safeParse({
    email,
    username,
    name,
    password,
  });

  // Handle validation errors
  if (!parsedData.success) {
    const errPath = parsedData.error.issues[0].path[0];
    const errMessage = parsedData.error.issues[0].message;
    const errFinalMessage = `${errPath} - ${errMessage}`;

    return redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/register?error=${errFinalMessage}`
    );
  }

  try {
    await createUser(parsedData.data);

    return redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/login?success=Registration%20successful`
    );
  } catch (error: unknown) {
    let errMessage = "Registration failed";

    if (error instanceof Error) {
      errMessage = error.message;
    }

    return redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/register?error=${encodeURIComponent(
        errMessage
      )}`
    );
  }
};
