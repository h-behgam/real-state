import Image from "next/image";

import HomeServices from "./components/UI/home/home-services";
import HomeCategories from "./components/UI/home/home-categories";
import HomeCities from "./components/UI/home/home-cities";

import { categories } from "@/constants/categories";

export default function Home() {
  return (
    <div className="mb-5">
      <div className="relative w-full h-96">
        <Image alt="hero" src={"/images/hero.jpg"} className="" fill />
      </div>
      <HomeServices />
      <div className="flex justify-center py-10 gap-x-7 flex-wrap">
        <HomeCategories />
      </div>
      <HomeCities />
    </div>
  );
}
