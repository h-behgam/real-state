import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { ReactNode } from "react";

const icons: { [key: string]: ReactNode } = {
  villa: <RiHome3Line />,
  apartment: <MdApartment />,
  store: <BiStore />,
  office: <GiOfficeChair />,
};

export { icons };
