import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/utils/auth";

import DashboardSidebar from "../components/layout/dashboard-sidebar";

import "react-toastify/ReactToastify.min.css";

import connectDB from "../utils/conectDB";
import User from "../models/users";

interface IUser {
  email: string;
  password: string;
  role: string;
  createdAt: Date;
}
export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  //conect to DB
  await connectDB();
  const user = (await User.findOne({ email: session?.user?.email })) as unknown as IUser;

  if (!user) return <h3>چنین کاربری وجود ندارد !!!</h3>;

  return (
    <DashboardSidebar email={session.user?.email} role={user.role}>
      {children}
    </DashboardSidebar>
  );
}
