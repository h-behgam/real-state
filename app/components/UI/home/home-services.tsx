import { services } from "@/app/constants/categories";

import { FiCircle } from "react-icons/fi";

export default function HomeServices() {
  return (
    <ul className="mx-auto my-5 text-center">
      {services.map((i) => (
        <li key={i} className="bg-blue-200 px-5  py-1 inline rounded-md mr-5">
          <FiCircle className="inline ml-2" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}
