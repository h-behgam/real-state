import Image from "next/image";
import Link from "next/link";

interface ICategory {
  title: string;
  name: string;
}
export default function HomeCategories({ name, title }: ICategory) {
  return (
    <div className="w-60 p-3 shadow-[0_0px_14px_2px_rgba(96,125,250,0.3)] hover:-rotate-6 duration-300 rounded-md">
      <Link href={"/"}>
        <Image alt="" src={`/images/${name}.png`} width={240} height={144} />
        <p className="text-center font-normal text-blue-800 mt-3">{title}</p>
      </Link>
    </div>
  );
}
