import Profile from "@/app/models/profile";
import connectDB from "@/app/utils/conectDB";
import { isSession } from "@/app/utils/session";
import { redirect } from "next/navigation";

export default async function PendingPage() {
  const { user } = await isSession();
  if (user.role !== "ADMIN") redirect("/dashboard");

  await connectDB()
  const profile = await Profile.find({ published: false });

  return <div>PendingPage</div>;
}
