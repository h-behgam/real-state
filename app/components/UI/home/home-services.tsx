import { services } from "@/app/constants/categories";

import { FiCircle } from "react-icons/fi";

export default function HomeServices() {
  return (
    <ul className="mx-auto my-5 text-center flex gap-3 justify-center flex-wrap">
      {services.map((i) => (
        <li key={i} className="bg-blue-200 px-5  py-1 flex rounded-md items-center gap-x-2">
          <FiCircle className="" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}
