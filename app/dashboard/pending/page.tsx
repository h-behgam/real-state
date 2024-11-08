import Profile from "@/app/models/profile";
import connectDB from "@/app/utils/conectDB";
import { checkRole, isSession } from "@/app/utils/session";
import { redirect } from "next/navigation";
import { IProfile } from "../my-profiles/page";
import ProfilePendingList from "@/app/components/dashboard/pending/profile-pending-list";

export default async function PendingPage() {
  const role = await checkRole();
  if (role !== "ADMIN") redirect("/dashboard");

  await connectDB();
  const profiles = (await Profile.find({ published: false })) as unknown as IProfile[];

  return profiles.map((item) => <ProfilePendingList profile={item} key={item._id} />);
}
