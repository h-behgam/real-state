import React, { ReactNode } from "react";

import { icons } from "@/constants/icons";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";

import { sp } from "@/app/utils/replace-number";
import Link from "next/link";

export interface ICard {
  _id?: number;
  title: string;
  category: string;
  location: string;
  price: number;
}
export default function Card({ card }: { card: ICard }) {
  const { _id, title, category, location, price } = card;

  return (
    <div className="flex flex-col border border-blue-500 p-2 rounded-lg w-52 gap-y-2">
      <div className="bg-blue-100 w-fit p-1 rounded-sm">{icons[category]}</div>
      <p>{title}</p>
      <p className="flex gap-x-2">
        <HiOutlineLocationMarker className="text-blue-800" />
        {location}
      </p>
      <span>{sp(price)} تومان</span>
      <Link href={`/buy-residential/${_id}`} className="flex justify-between text-blue-800">
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
}
