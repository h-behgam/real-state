import { categories } from "@/constants/categories";
import Image from "next/image";
import Link from "next/link";

export default function HomeCategories() {
  return (
    <>
      {(Object.keys(categories) as Array<keyof typeof categories>).map((item) => (
        <div
          className="w-60 p-3 shadow-[0_0px_14px_2px_rgba(96,125,250,0.3)] hover:-rotate-6 duration-300 rounded-md"
          key={item}
        >
          <Link href={{ pathname: "/buy-residential", query: { category: item } }}>
            <Image alt="" src={`/images/${item}.png`} width={240} height={144} />
            <p className="text-center font-normal text-blue-800 mt-3">{categories[item]}</p>
          </Link>
        </div>
      ))}
    </>
  );
}
