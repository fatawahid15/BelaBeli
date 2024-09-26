// action.ts (Server Action)
"use server";

import { cookies } from "next/headers";

export const deleteToken = async () => {
  try {
    // Check if token exists, and if it does, delete it
    cookies().get("token") && cookies().delete("token");

    // Return a flag for client to handle redirection
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
