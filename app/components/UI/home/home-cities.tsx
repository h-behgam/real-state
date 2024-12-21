import { cities } from "@/app/constants/categories";
import { FaCity } from "react-icons/fa";

export default function HomeCities() {
  return (
    <div>
      <h2 className="font-semibold text-3xl text-center text-blue-800 my-10">شهر های پر بازدید</h2>
      <ul className="flex justify-center flex-wrap gap-3">
        {cities.map((i) => (
          <li key={i} className="bg-blue-200 px-10 py-1 flex rounded-md mr-10 font-light gap-x-2 items-center">
            <FaCity className="text-blue-800" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
