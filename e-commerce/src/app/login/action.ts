"use server";

import { getUserByEmail } from "@/db/models/user";
import { compare } from "@/db/utils/encrypt";
import { createToken } from "@/lib/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export const actionLogin = async (formData: FormData) => {
  const loginInputSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const email = formData.get("email");
  const password = formData.get("password");

  const parsedData = loginInputSchema.safeParse({
    email,
    password,
  });

  if (!parsedData.success) {
    const errPath = parsedData.error.issues[0].path[0];
    const errMessage = parsedData.error.issues[0].message;
    const errFinalMessage = `${errPath} - ${errMessage}`;

    return redirect(`http://localhost:3000/login?error=${errFinalMessage}`);
  }

  const user = await getUserByEmail(parsedData.data.email);

  if (!user || !compare(parsedData.data.password, user.password)) {
    return redirect(`http://localhost:3000/login?error=Invalid%20credentials`);
  }

  const payload = {
    id: user._id,
    email: user.email,
  };

  const token = createToken(payload);

  cookies().set("token", token, {
    httpOnly: true,
    secure: false, // ==========>> need to change before deployment??
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3) ,
    sameSite: "strict",
  });

  return redirect(`http://localhost:3000/`);
};
