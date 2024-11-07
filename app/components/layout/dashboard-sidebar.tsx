import Link from "next/link";
import { ReactNode } from "react";

import { CgProfile } from "react-icons/cg";

import { FiLogOut } from "react-icons/fi";
import LogoutButton from "./logout-Button";

export default async function DashboardSidebar({
  children,
  email,
  role,
}: {
  children: ReactNode;
  email?: string | null;
  role: string;
}) {
  return (
    <div className="flex gap-x-6 py-5 px-1">
      <div className="shadow-lg shadow-gray-300 p-2 rounded-lg w-52 font-normal max-h-fit">
        <CgProfile className="w-10 h-10 mx-auto mt-3 text-blue-500 text-center" />
        <p className="mb-8 text-center">{role === "ADMIN" ? "Admin" : null}</p>
        <p className="my-8 text-center">{email}</p>
        <div className="flex flex-col">
          <Link href="/dashboard">حساب کاربری</Link>
          <Link href="/dashboard/my-profiles">آگهی های من</Link>
          <Link href="/dashboard/add">ثبت آگهی</Link>
          {role === 'ADMIN' ? <Link href="/dashboard/pending">در انتظار تایید</Link> : null}
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
