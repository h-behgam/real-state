import { getServerSession, Session } from "next-auth";
import { authOptions } from "./auth";
import { redirect } from "next/navigation";
import connectDB from "./conectDB";
import User from "../models/users";

interface IUser {
  email: string;
  password: string;
  role: string;
  createdAt: Date;
}

//check the session exist
export async function checkSession() {
  const session = await getServerSession(authOptions);
  return session ? session : undefined;
}

// Checking session and returning user and session
export async function isSession() {
  //check session
  const session = await checkSession();

  if (session) {
    //conect to DB
    await connectDB();
    const user = await getUser(session);

    return { user, session };
  }
  return undefined;
}

// // Checking session and returning user and session
export async function getUser(session: Session) {
  const user = (await User.findOne({ email: session.user?.email })) as IUser | undefined;
  return user;
}

//check the role
export async function checkRole() {
  const result = await isSession();
  const { user } = result ? result : { user: undefined };

  switch (user?.role) {
    case "ADMIN":
      return "ADMIN";
    case "USER":
      return "USER";
    default:
      return "GUEST"; // مقدار پیش‌فرض
  }
}
