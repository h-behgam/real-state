import { e2p, sp } from "@/app/utils/replace-number";

import { categories } from "@/constants/categories";
import { icons } from "@/constants/icons";

import { AiOutlinePhone } from "react-icons/ai";
import { SiHomebridge } from "react-icons/si";
import { BiCalendarCheck } from "react-icons/bi";

import ShareButton from "./share_button";

import { IProfile } from "@/app/dashboard/my-profiles/page";

interface DetailsPageProps {
  data: IProfile;
}
export default function ProfileIdSidebar({
  data: { realState, category, constructionDate, phone, price },
}: DetailsPageProps) {
  return (
    <div className="w-2/12">
      <div className="w-60 p-3 shadow-[0_0px_14px_2px_rgba(96,125,250,0.3)] rounded-md mb-6">
        <SiHomebridge className="text-blue-800 text-6xl mx-auto mb-4" />
        <p className="text-center font-normal text-xl mb-4">املاک {realState}</p>
        <span className="flex items-center gap-x-2 justify-center">
          <AiOutlinePhone />
          <p>شماره تماس : {e2p(phone)}</p>
        </span>
      </div>
      <div className="w-60 p-3 shadow-[0_0px_14px_2px_rgba(96,125,250,0.3)] rounded-md mb-6">
        <ShareButton />
      </div>
      <div className="w-60 p-3 shadow-[0_0px_14px_2px_rgba(96,125,250,0.3)] rounded-md mb-6 flex flex-col justify-center items-center">
        <p className="flex items-center gap-x-1 text-blue-800 mb-4">
          {Object(icons)[category]}
          {Object(categories)[category]}
        </p>
        <p className="mb-4">{sp(Number(price))} تومان</p>
        <p className="flex items-center gap-x-1 text-blue-800 mb-4">
          <BiCalendarCheck className="text-blue-800" />
          {new Date(constructionDate).toLocaleDateString("fa-ir")}
        </p>
      </div>
    </div>
  );
}
