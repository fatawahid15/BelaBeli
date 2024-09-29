"use server";

import { cookies } from "next/headers";

export const deleteToken = async () => {
  try {
    const token = cookies().get("token");

    if (token) {
      cookies().delete("token");
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
