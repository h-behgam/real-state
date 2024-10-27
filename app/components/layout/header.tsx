import Link from "next/link";

import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-blue-950 flex justify-between px-5">
      <nav>
        <ul className="p-3 flex gap-x-10">
          <li>
            <Link href={"/"} className="text-white">
              خانه
            </Link>
          </li>
          <li>
            <Link href={"/buy-residential"} className="text-white">
              آگهی ها
            </Link>
          </li>
        </ul>
      </nav>
      <div className="">
        <Link href={"/signin"} className="flex text-black items-center gap-x-2 rounded-md p-1 bg-white mt-2">
          <FiLogIn />
          <span>ورود</span>
        </Link>
      </div>
    </header>
  );
}
