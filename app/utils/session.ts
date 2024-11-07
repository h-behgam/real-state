import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { redirect } from "next/navigation";
import connectDB from "./conectDB";
import User from "../models/users";

export async function isSession() {
  interface IUser {
    email: string;
    password: string;
    role: string;
    createdAt: Date;
  }
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  //conect to DB
  await connectDB();
  const user = (await User.findOne({ email: session?.user?.email })) as unknown as IUser;

  return {user, session};
}
