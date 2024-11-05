import Card, { ICard } from "@/app/components/dashboard/my-profiles/card";

export default async function BuyResidentialMain({ data }: { data: ICard[] }) {
  if (!data.length) return <h3>هیچ آگهی وجود ندارد!!</h3>;

  return (
    <div className="flex flex-wrap gap-10">
      {Array.isArray(data) && data?.map((item) => <Card card={item} key={item._id} />)}
    </div>
  );
}
