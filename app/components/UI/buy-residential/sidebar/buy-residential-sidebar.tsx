import { categories } from "@/app/constants/categories";
import Link from "next/link";
import { HiFilter } from "react-icons/hi";

export default function BuyResidentialSidebar() {
  return (
    <div>
      <div className="shadow-lg shadow-gray-300 p-4 rounded-lg w-52 font-normal max-h-fit">
        <p className="">
          <HiFilter className="text-blue-800 inline" />
          دسته بندی
        </p>
        <ul className="font-light">
          <li>
            <Link href={"/buy-residential"}>همه</Link>
          </li>
          {(Object.keys(categories) as Array<keyof typeof categories>).map((item) => (
            <li key={item}>
              <Link href={{ pathname: "/buy-residential", query: { category: item } }}>{categories[item]}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
