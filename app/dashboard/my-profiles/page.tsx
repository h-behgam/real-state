import ProfilesCards from "@/app/components/dashboard/my-profiles/profiles-cards";
import User from "@/app/models/users";
import { authOptions } from "@/app/utils/auth";
import connectDB from "@/app/utils/conectDB";
import { getServerSession } from "next-auth";
import React from "react";

export interface IProfile {
  _id?: number;
  title: string;
  description: string;
  location: string;
  phone: string;
  realState: string;
  price: number;
  constructionDate: Date;
  category: "villa" | "apartment" | "store" | "office";
  amenities?: string[];
  rules?: string[];
}
export default async function myProfilesPage() {
  // try {
  await connectDB();
  const session = await getServerSession(authOptions);

  const [user] = await User.aggregate([
    { $match: { email: session?.user?.email } },
    { $lookup: { from: "profiles", foreignField: "userId", localField: "_id", as: "profiles" } },
  ]);

  const profiles: IProfile[] = user.profiles;
  // } catch (error) {
  //   console.log('error in my profile and error is :', error);

  // }

  return profiles.map((item) => {
    return <ProfilesCards card={JSON.parse(JSON.stringify(item))} key={item._id} />;
  });
}
