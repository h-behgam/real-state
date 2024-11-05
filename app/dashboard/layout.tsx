import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from '@/app/utils/auth'

import DashboardSidebar from "../components/layout/dashboard-sidebar";

import "react-toastify/ReactToastify.min.css";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  return <DashboardSidebar>{children}</DashboardSidebar>;
}
