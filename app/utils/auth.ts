import { hash, compare } from "bcryptjs";

import connectDB from "@/app/utils/conectDB";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../models/users";

// hashed password
async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

//compare user input password and database password
async function verifyPassword(password: string, hashedPassword: string) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

export { hashPassword, verifyPassword };

/**
 * export authOptions for use in actions
 */
export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_KEY,
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials): Promise<typeof user | null> {
        // check database conect
        try {
          await connectDB();
        } catch (error) {
          console.log("connectDB error is :", error);
          throw new Error("مشکلی در ارتباط در بخش next auth وجود دارد");
        }

        // check user exist
        const user = await User.findOne({ email: credentials?.email });
        if (!user) {
          throw new Error("ابتدا حساب کاربری ایجاد کنید");
        }

        // compare input password and user password
        const credentialsPass = credentials ? credentials.password : "";
        const passwordValid = await verifyPassword(credentialsPass, user.password);
        if (!passwordValid) {
          throw new Error("رمز عبور اشتباه است");
        }

        return user;
      },
    }),
  ],
};
