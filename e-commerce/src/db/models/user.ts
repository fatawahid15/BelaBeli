import { Db, ObjectId } from "mongodb";
import { clientMongo } from "../config";
import { hash } from "../utils/encrypt";

export type UserModel = {
  _id: ObjectId;
  username: string;
  email: string;
  name?: string;
  password: string;
};

const DATABASE_NAME = process.env.MONGO_DB_NAME;
const COLLECTION_USER = "Users";

export const getDb = async () => {
  const client = await clientMongo();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

export const getUsers = async () => {
  const db = await getDb();

  const users = (await db
    .collection(COLLECTION_USER)
    .find({})
    .project({ password: 0 })
    .toArray()) as UserModel[];

  return users;
};

export const getUserByEmail = async (email: string) => {
  const db = await getDb();
  const user = (await db
    .collection(COLLECTION_USER)
    .findOne({ email: email })) as UserModel;

  return user;
};

export type userCreateTypeInput = Omit<UserModel, "_id">;

export const createUser = async (user: userCreateTypeInput) => {
  const createdUser: userCreateTypeInput = {
    ...user,
    password: hash(user.password), 
  };

  const db = await getDb();

  
  const checkUsername = await db
    .collection(COLLECTION_USER)
    .findOne({ username: user.username });

  if (checkUsername) {
    throw new Error("Username already exists");
  }

  
  const checkEmail = await db
    .collection(COLLECTION_USER)
    .findOne({ email: user.email });

  if (checkEmail) {
    throw new Error("Email already exists");
  }

  
  const result = await db.collection(COLLECTION_USER).insertOne(createdUser);
  return result;
};
