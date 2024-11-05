import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from '@/app/utils/auth'

import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

export default async function Header() {
  const session = await getServerSession(authOptions);
  // if (!session) redirect('/signin')
  return (
    <header className="bg-blue-950 flex justify-between px-5 items-center">
      <nav>
        <ul className="flex gap-x-10 p-1">
          <li className="p-2">
            <Link href={"/"} className="text-white">
              خانه
            </Link>
          </li>
          <li className="p-2">
            <Link href={"/buy-residential"} className="text-white">
              آگهی ها
            </Link>
          </li>
        </ul>
      </nav>
      <div className="">
        {session ? (
          <Link href={"/dashboard"} className="flex text-black items-center gap-x-2 rounded-md p-1 bg-white">
            <FaUserAlt />
          </Link>
        ) : (
          <Link href={"/signin"} className="flex text-black items-center gap-x-2 rounded-md p-1 bg-white">
            <FiLogIn />
            <span>ورود</span>
          </Link>
        )}
      </div>
    </header>
  );
}
