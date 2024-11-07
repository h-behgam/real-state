import { HiOutlineLocationMarker } from "react-icons/hi";

import ItemList from "./item-list";

import { IProfile } from "@/app/dashboard/my-profiles/page";

interface DetailsPageProps {
  data: IProfile;
}
export default function ProfileIdMain({ data: { title, location, description, amenities, rules } }: DetailsPageProps) {
  return (
    <div className="w-10/12">
      <div className="mb-1">
        <h1 className="text-blue-700 font-normal text-lg">{title}</h1>
      </div>
      <div className="mb-8">
        <span className="mb-8">
          <HiOutlineLocationMarker className="inline ml-2" />
          {location}
        </span>
      </div>
      <div className="mb-8">
        <h3 className="text-blue-700 font-normal text-lg">توضیحات</h3>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <p>{description}</p>
      </div>
      <div className="mb-8">
        <h3 className="text-blue-700 font-normal text-lg">امکانات</h3>
        <ItemList data={amenities} />
      </div>
      <div className="mb-8">
        <h3 className="text-blue-700 font-normal text-lg">قوانین</h3>
        <ItemList data={rules} />
      </div>
    </div>
  );
}
