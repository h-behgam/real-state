import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { ReactNode } from "react";

import { CgProfile } from "react-icons/cg";

import { FiLogOut } from "react-icons/fi";
import LogoutButton from "./logout-Button";

export default async function DashboardSidebar({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex gap-x-6 py-5 px-1">
      <div className="shadow-lg shadow-gray-300 p-2 rounded-lg w-52 font-normal max-h-fit">
        <CgProfile className="w-10 h-10 mx-auto my-3 text-blue-500 text-center" />
        <p className="my-8 text-center">{session?.user?.email}</p>
        <div className="flex flex-col">
          <Link href="/dashboard">حساب کاربری</Link>
          <Link href="/dashboard/my-profiles">آگهی های من</Link>
          <Link href="/dashboard/add">ثبت آگهی</Link>
        </div>
        <LogoutButton>
          <FiLogOut />
          خروج
        </LogoutButton>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
