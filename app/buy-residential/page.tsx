import Card, { ICard } from "@/app/components/dashboard/my-profiles/card";

import BuyResidentialMain from "../components/UI/buy-residential/main/buy-residential-main";
import BuyResidentialSidebar from "../components/UI/buy-residential/sidebar/buy-residential-sidebar";

type Params = { slug: string };
type SearchParams = { [key: string]: string | string[] | undefined };
export default async function buyResidentialPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const searchParam: string | string[] | undefined = Object.values(searchParams)[0];

  const res = await fetch(
    searchParam ? `http://localhost:3000/api/profile?category=${searchParam}` : "http://localhost:3000/api/profile",
    { cache: "no-cache" }
  );
  const data: ICard[] = await res.json();

  return (
    <div className="flex gap-x-5 p-4">
      <BuyResidentialSidebar />
      <BuyResidentialMain data={data} />
    </div>
  );
}
