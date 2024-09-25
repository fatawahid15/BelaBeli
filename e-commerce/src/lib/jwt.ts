import jwt, { JwtPayload } from "jsonwebtoken";

const SECRET_KEY = "not-safe";

export const createToken = (payload: JwtPayload) =>
  jwt.sign(payload, SECRET_KEY);

export const readPayload = (token: string) => jwt.verify(token, SECRET_KEY);
